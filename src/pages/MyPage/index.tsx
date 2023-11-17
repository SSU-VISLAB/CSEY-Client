import { useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Settings } from "react-feather";
import * as BottomNav from "../../components/BottomNavbar";
import HeaderLogo from "../../components/HeaderLogo";
import { Login } from "../../components/Login";
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

export interface SettingCardAlarm extends SettingCardContents {
  hasCheck?: boolean; // true: 체크박스 표시, false: └─> 표시
  child?: SettingCardContents[];
}

export type SettingCardData = {
  header: SettingCardHeader;
  content?: SettingCardAlarm[];
  hasLogin?: boolean;
};

/** My - 설정페이지 */
const Setting = ({ dataArray }: { dataArray: SettingCardData[] }) => {
  const client = useQueryClient();
  const user = client.getQueryData(["login"]) as any;
  if (user) dataArray[0].header.title = user.name;
  return (
    <SettingList>
      <HeaderLogo />
      {dataArray.map((data, i) => (
        <ItemList
          key={i}
          header={data.header}
          content={data?.content}
          hasLogin={!i}
        />
      ))}
    </SettingList >
  );
};

const ItemList = ({ header, content, hasLogin }: SettingCardData) => {
  return (
    <Group elevation={4}>
      <ItemHeader title={header.title} HeaderIcon={header.icon} bold />
      {hasLogin && <Login />}
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
  goBack,
}: {
  dataArray: SettingCardData[];
  goBack: () => void;
}) => {
  return (
    <SettingList>
      <HeaderLogo />
      <ContentRow>
        <Icon>
          <ArrowLeft size={24} onClick={() => goBack()} />
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

const AlarmSettingList = ({ header, content }: SettingCardData) => {
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
}: {
  title: string;
  HeaderIcon: BottomNav.Icon;
  padding?: boolean;
  bold: boolean;
}) => {
  return (
    <Header>
      <Icon>{HeaderIcon && <HeaderIcon size={"3vh"} />}</Icon>
      <Title padding={padding} bold={bold}>
        {title}
      </Title>
    </Header>
  );
};

/** 체크버튼 있는 단일 요소인 alarm설정 */
const ContentCheck = ({ onClick, meta }: SettingCardAlarm) => {
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
const ContentChild = ({ onClick, meta, description }: SettingCardAlarm) => {
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

