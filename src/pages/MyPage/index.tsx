import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { ArrowLeft, Settings, User } from "react-feather";
import { useNavigate } from "react-router-dom";
import { kakaoLogout } from "../../axios";
import * as BottomNav from "../../components/BottomNavbar";
import HeaderLogo from "../../components/HeaderLogo";
import { Login } from "../../components/Login";
import { getUserInfoQuery } from "../../query/user";
import {
  Arrow,
  CheckboxIcon,
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

export type SettingCardHeader = {
  icon?: BottomNav.Icon;
  title: string;
};

export interface SettingCardContents {
  meta: string;
  description?: string;
  onClick?: () => void;
}

export interface AlarmSettingCardContents extends SettingCardContents {
  hasCheck?: boolean; // true: 체크박스 표시, false: └─> 표시
  child?: SettingCardContents[];
}

export type SettingCardData<T extends SettingCardContents> = {
  header: SettingCardHeader;
  content?: T[];
  hasLogin?: boolean;
};

/** My - 설정페이지 */
const Setting = () => {
  const info = getUserInfoQuery();
  const userData = info?.userData;
  const navigate = useNavigate();
  const client = useQueryClient();

  const settingContents = useMemo(() => ([
    { header: { title: userData?.name || '로그인 해주세요', icon: User } },
    userData && {
      header: { title: "Account", icon: Settings },
      content: [
        { meta: "학적 정보", description: userData?.major || "학적 정보 미등록" },
        { meta: "로그아웃", onClick: () => (alert('로그아웃'), kakaoLogout(client, navigate)) },
        { meta: "계정 탈퇴" },
      ],
    },
    {
      header: { title: "Settings", icon: Settings },
      content: [
        { meta: "테마", description: "시스템 기본값" },
        { meta: "알림 설정", onClick: () => navigate('/My/Alarm') },
      ],
    },
    {
      header: { title: "Guide", icon: Settings },
      content: [
        { meta: "앱 버전", description: "v.10.0", onClick: () => alert('앱 버전 클릭!') },
        { meta: "문의하기", description: "nabest@vis.ssu.ac.kr" },
        { meta: "개발자 정보" },
        { meta: "서비스 이용 약관" },
        { meta: "개인정보 처리방침" },
        { meta: "오픈소스 라이센스" },
      ],
    },
  ] as SettingCardData<SettingCardContents>[]).filter(v => v), [userData]);
  return (
    <SettingList>
      <HeaderLogo />
      {settingContents.map((data, i) => (
        <ItemList
          key={i}
          header={data.header}
          content={data?.content}
          hasLogin={!i && !(userData)}
        />
      ))}
    </SettingList >
  );
};

const ItemList = ({ header, content, hasLogin }: SettingCardData<SettingCardContents>) => {
  return (
    <Group elevation={4}>
      <ItemHeader title={header.title} HeaderIcon={header.icon} bold>{hasLogin && <Login />}</ItemHeader>
      {content && (
        <ContentGroup>
          {content.map((v, i) => (
            <ContentRow key={i}>
              <Content elevation={2} onClick={v.onClick}>
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
const AlarmSetting = ({
  dataArray,
}: {
  dataArray: SettingCardData<AlarmSettingCardContents>[];
}) => {
  const navigate = useNavigate();
  return (
    <SettingList>
      <HeaderLogo />
      <ContentRow>
        <Icon>
          <ArrowLeft size={24} onClick={() => navigate('/My')} />
        </Icon>
        <Icon>
          <Settings size={24} />
        </Icon>
        <Title padding bold>
          Alarm Settings
        </Title>
      </ContentRow>

      {dataArray.map((data, i) => (
        <AlarmSettingList
          key={i}
          header={data.header}
          content={data?.content}
        ></AlarmSettingList>
      ))}
    </SettingList>
  );
};

const AlarmSettingList = ({ header, content }: SettingCardData<AlarmSettingCardContents>) => {
  content = content.flatMap((v) => (v.child ? [v, ...v.child] : v));
  return (
    <Group elevation={4}>
      <ItemHeader
        title={header.title}
        HeaderIcon={undefined}
        padding={false}
        bold={true}
      />
      <ContentGroup>
        {content.map((v) => {
          if (v.hasCheck)
            return (
              <ContentCheck onClick={v.onClick} meta={v.meta} key={v.meta} />
            );
          else
            return (
              <ContentChild
                onClick={v.onClick}
                meta={v.meta}
                description={v.description}
                key={v.meta}
              />
            );
        })}
      </ContentGroup>
    </Group>
  );
};

/** My - 공통 컴포넌트, {아이콘} {제목} 표시 */
const ItemHeader = ({
  title,
  HeaderIcon,
  padding,
  bold,
  children
}: {
  title: string;
  HeaderIcon: BottomNav.Icon;
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
};

/** 체크버튼 있는 단일 요소인 alarm설정 */
const ContentCheck = ({ onClick, meta }: AlarmSettingCardContents) => {
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
      <Content elevation={2} onClick={onClick}>
        <Meta>{meta}</Meta>
      </Content>
      <CheckboxIcon sx={sx} />
    </ContentRow>
  );
};

/** 자식 요소인 alarm설정 */
const ContentChild = ({ onClick, meta, description }: AlarmSettingCardContents) => {
  return (
    <ContentRow>
      <Arrow />
      <Content elevation={2} onClick={onClick}>
        <Meta>{meta}</Meta>
        <Description bold>{description}</Description>
      </Content>
    </ContentRow>
  );
};

export { AlarmSetting, Setting };

