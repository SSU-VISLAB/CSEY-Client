import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { ArrowLeft, Settings, User } from "react-feather";
import { useNavigate } from "react-router-dom";
import { kakaoLogout } from "../../axios";
import * as BottomNav from "../../components/BottomNavbar";
import HeaderLogo from "../../components/HeaderLogo";
import { Login } from "../../components/Login";
import { getAlarmsQuery, setAlarmMutation } from "../../query/alarm";
import { getUserInfoQuery, loginQuery } from "../../query/user";
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

export type SettingCardHeader = {
  icon?: BottomNav.Icon;
  title: string;
};

export interface SettingCardContents {
  meta: string;
  description?: string;
  eventHandler?: (e?) => void;
  value?: any
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

const mapper = {
  "전체 알림 끄기": 'alarm_push',
  "행사 알림 켜기": 'event_push',
  "알림 시간": 'events_timer',
  "알림 형태": 'events_form',
  "행사 등록 알림 켜기": 'events_post',
  "일정 당일 알림 켜기": 'major_schedule_push',
  "일정 등록 알림 켜기": 'major_schedule_post',
  '일반 공지 알림 켜기': 'notice_push',
  '긴급 공지 알림 켜기': 'alerts_push'
}

/** My - 설정페이지 */
const Setting = () => {
  loginQuery();
  const info = getUserInfoQuery();
  const userData = info.data?.user;
  const navigate = useNavigate();
  const client = useQueryClient();

  const settingContents = useMemo(() => ([
    { header: { title: userData?.name || '로그인 해주세요', icon: User } },
    userData && {
      header: { title: "Account", icon: Settings },
      content: [
        { meta: "학적 정보", description: userData?.major || "학적 정보 미등록" },
        { meta: "로그아웃", eventHandler: () => (alert('로그아웃'), kakaoLogout(client, navigate)) },
        { meta: "계정 탈퇴" },
      ],
    },
    {
      header: { title: "Settings", icon: Settings },
      content: [
        { meta: "테마", description: "시스템 기본값" },
        userData && { meta: "알림 설정", eventHandler: () => navigate('/My/Alarm') },
      ].filter(v => v),
    },
    {
      header: { title: "Guide", icon: Settings },
      content: [
        { meta: "앱 버전", description: "v.10.0", eventHandler: () => alert('앱 버전 클릭!') },
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
  const userInfo = getUserInfoQuery();
  const userData = userInfo?.data?.user;
  const alarms = getAlarmsQuery(userData?.id);
  const alarmData = alarms?.data;
  const navigate = useNavigate();
  const client = useQueryClient();
  const setAlarm = setAlarmMutation(client);
  const alarmSettingContents = useMemo<SettingCardData<AlarmSettingCardContents>[]>(() => alarms.isSuccess && [
    {
      header: { title: "전체 알림" },
      content: [{
        hasCheck: true, meta: "전체 알림 끄기", value: alarmData[mapper["전체 알림 끄기"]], eventHandler(e) {
          setAlarm.mutate({ [mapper["전체 알림 끄기"]]: e.target.checked } as any);
        },
      }],
    },
    {
      header: { title: "행사 알림" },
      content: [
        {
          hasCheck: true, meta: "행사 알림 켜기", value: alarmData[mapper['행사 알림 켜기']],
          child: [
            { meta: "알림 시간", description: "시작 24시간 전", eventHandler: () => alert("알림 시간 설정") },
            { meta: "알림 형태", description: "북마크만", eventHandler: () => alert("알림 형태 설정") },
          ],
        },
        { hasCheck: true, meta: "행사 등록 알림 켜기", value: alarmData[mapper['행사 등록 알림 켜기']] }
      ],
    },
    {
      header: { title: '학사일정 알림' },
      content: [
        { hasCheck: true, meta: "일정 당일 알림 켜기", value: alarmData[mapper['일정 당일 알림 켜기']] },
        { hasCheck: true, meta: "일정 등록 알림 켜기", value: alarmData[mapper['일정 등록 알림 켜기']] },
      ]
    },
    {
      header: { title: '공지 알림' },
      content: [
        { hasCheck: true, meta: '일반 공지 알림 켜기', value: alarmData[mapper['일반 공지 알림 켜기']] },
        { hasCheck: true, meta: '긴급 공지 알림 켜기', value: alarmData[mapper['긴급 공지 알림 켜기']] },
      ]
    }
  ], [alarms.data])
  if (alarms.isPending) return "loading...";
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

      {alarmSettingContents.map((data, i) => (
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
              <ContentCheck eventHandler={v.eventHandler} meta={v.meta} key={v.meta} value={v.value} />
            );
          else
            return (
              <ContentChild
                eventHandler={v.eventHandler}
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
const ContentCheck = ({ eventHandler, meta, value }: AlarmSettingCardContents) => {
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
const ContentChild = ({ eventHandler, meta, description }: AlarmSettingCardContents) => {
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

