import { useQueryClient } from "@tanstack/react-query";
import { memo } from "react";
import { ArrowLeft, Settings, User } from "react-feather";
import { useNavigate } from "react-router-dom";
import { kakaoLogout } from "../../api/axios";
import { setAlarmMutation } from "../../api/query/alarm";
import { getUserInfoQuery } from "../../api/query/user";
import * as BottomNav from "../../components/BottomNavbar";
import HeaderLogo from "../../components/HeaderLogo";
import { Login } from "../../components/Login";
import { AlarmGroup } from "../../context/setting";
import {
  Arrow,
  Checkbox,
  Content,
  ContentGroup,
  ContentRow,
  Description,
  Group,
  Header,
  Icon,
  Meta,
  SettingList,
  Title,
} from "./styles";
import { getAlarmSettingContents } from "./utils";

export type SettingCardHeader = {
  icon?: BottomNav.Icon;
  title: string;
};

export interface SettingCardContents {
  meta: string;
  description?: string;
  eventHandler?: (e?) => void;
  value?: any;
}

export interface AlarmSettingCardContents extends SettingCardContents {
  hasCheck?: boolean; // true: 체크박스 표시, false: └─> 표시
  child?: SettingCardContents[];
}

export type SettingCardData<T extends SettingCardContents> = {
  header: SettingCardHeader;
  contents?: T[];
  hasLogin?: boolean;
};

/** My - 설정페이지 */
const Setting = () => {
  const info = getUserInfoQuery();
  console.log("userData", info.data)
  const userData = info.data?.user;
  const navigate = useNavigate();
  const client = useQueryClient();
  const settingContents = ([
    {
      header: { title: userData?.name || "로그인 해주세요", icon: User },
    },
    userData && {
      header: { title: "Account", icon: Settings },
      contents: [
        {
          meta: "학적 정보",
          description: userData?.major || "학적 정보 미등록",
        },
        {
          meta: "로그아웃",
          eventHandler: () => (
            alert("로그아웃"), kakaoLogout(client, navigate)
          ),
        },
        { meta: "계정 탈퇴" },
      ],
    },
    {
      header: { title: "Settings", icon: Settings },
      contents: [
        { meta: "테마", description: "시스템 기본값" },
        userData && {
          meta: "알림 설정",
          eventHandler: () => navigate("/My/Alarm"),
        },
      ].filter((v) => v),
    },
    {
      header: { title: "Guide", icon: Settings },
      contents: [
        {
          meta: "앱 버전",
          description: "v.10.0",
          eventHandler: () => alert("앱 버전 클릭!"),
        },
        { meta: "문의하기", description: "nabest@vis.ssu.ac.kr" },
        { meta: "개발자 정보" },
        { meta: "서비스 이용 약관" },
        { meta: "개인정보 처리방침" },
        { meta: "오픈소스 라이센스" },
      ],
    },
  ] as SettingCardData<SettingCardContents>[]
  ).filter((v) => v)
  return (
    <SettingList>
      <HeaderLogo />
      {settingContents.map((data, i) => (
        <ItemList
          key={i}
          header={data.header}
          contents={data?.contents}
          hasLogin={!i && !userData}
        />
      ))}
    </SettingList>
  );
};

const ItemList = ({
  header,
  contents: content,
  hasLogin,
}: SettingCardData<SettingCardContents>) => {
  return (
    <Group elevation={4}>
      <ItemHeader title={header.title} HeaderIcon={header.icon} bold>
        {hasLogin && <Login />}
      </ItemHeader>
      {content && (
        <ContentGroup>
          {content.map((v, i) => (
            <ContentRow key={i}>
              <Content elevation={2} onClick={v.eventHandler}>
                <Meta bold>{v.meta}</Meta>
                <Description bold>{v?.description}</Description>
              </Content>
            </ContentRow>
          ))}
        </ContentGroup>
      )}
    </Group>
  );
};

/** My - 알림 설정 페이지 */
const AlarmSetting = () => {
  const navigate = useNavigate();
  const alarmGroups = getAlarmSettingContents();
  return (
    <SettingList>
      <HeaderLogo />
      <ContentRow>
        <Icon>
          <ArrowLeft size={24} onClick={() => navigate("/My")} />
        </Icon>
        <Icon>
          <Settings size={24} />
        </Icon>
        <Title padding bold>
          Alarm Settings
        </Title>
      </ContentRow>

      {alarmGroups?.map((alarmGroup, i) => (
        <AlarmSettingGroup
          key={i}
          group={alarmGroup}
        ></AlarmSettingGroup>
      ))}
    </SettingList>
  );
};

const AlarmSettingGroup = memo(({ group }: { group: AlarmGroup }) => {
  let { header, contents } = group;
  contents = contents.flatMap((v) => (v.child ? [v, ...v.child] : v));
  console.log('rerender', header);

  const mutation = setAlarmMutation();
  group.setMutations(mutation);

  const { isError, isPending, variables } = mutation;
  const key = Object.keys(variables)[0];
  if (isError) {
    group.findContent(key).value = !variables[key];
  }
  if (isPending) {
    group.findContent(key).value = variables[key];
  }
  return (
    <Group elevation={4}>
      <ItemHeader
        title={header.title}
        bold
      />
      <ContentGroup>
        {contents.map((v) => {
          if (v.hasCheck)
            return (
              <ContentCheck
                key={v.meta}
                meta={v.meta}
                value={v.value}
                eventHandler={v.eventHandler}
              />
            );
          else
            return (
              <ContentChild
                key={v.meta}
                meta={v.meta}
                description={v.description}
                eventHandler={v.eventHandler}
              />
            );
        })}
      </ContentGroup>
    </Group>
  );
}, (prev, next) => {
  const nextContents = next.group.contents;
  return prev.group.contents.every((content, index) => content.value == nextContents[index].value)
});

/** My - 공통 컴포넌트, {아이콘} {제목} 표시 */
const ItemHeader = memo(({
  title,
  HeaderIcon,
  padding,
  bold,
  children,
}: {
  title: string;
  HeaderIcon?: BottomNav.Icon;
  padding?: boolean;
  bold: boolean;
  children?;
}) => {
  return (
    <Header>
      <Icon>{HeaderIcon && <HeaderIcon size={"3vh"} />}</Icon>
      <Title padding={padding} bold={bold}>
        {title}
      </Title>
      {children}
    </Header>
  );
});

/** 체크버튼 있는 단일 요소인 alarm설정 */
const ContentCheck = ({
  eventHandler,
  meta,
  value,
}: AlarmSettingCardContents) => {
  const sx = {
    "& .MuiSvgIcon-root": {
      fontSize: "2.5vh",
      backgroundColor: "white",
    },
    color: "white",
    "&.Mui-checked": {
      color: "#5C74B3",
    },
  };
  return (
    <ContentRow>
      <Content elevation={2}>
        <Meta>{meta}</Meta>
      </Content>
      <Checkbox sx={sx} checked={value} onChange={eventHandler} />
    </ContentRow>
  );
};

/** 자식 요소인 alarm설정 */
const ContentChild = ({
  eventHandler,
  meta,
  description,
}: AlarmSettingCardContents) => {
  return (
    <ContentRow>
      <Arrow />
      <Content elevation={2} onClick={eventHandler}>
        <Meta>{meta}</Meta>
        <Description bold>{description}</Description>
      </Content>
    </ContentRow>
  );
};

export { AlarmSetting, Setting };

