import { SettingCard, SettingList } from "./styles";
import { Icon } from "../BottomNavbar";
import { Settings, ArrowLeft } from "react-feather";

export type SettingCardHeader = {
  icon?: Icon;
  title: string;
};

export interface SettingCardContents {
  meta: string;
  description?: string;
  onClick?: () => void;
}

export interface SettingCardAlarm extends SettingCardContents {
  isCheck?: boolean; // true: 체크박스 표시, false: └─> 표시
  child?: SettingCardContents[];
}

export type SettingCardData = {
  header: SettingCardHeader;
  content?: SettingCardAlarm[];
};

/** My - 설정페이지 */
const Setting = ({ dataArray }: { dataArray: SettingCardData[] }) => {
  return (
    <SettingList>
      {dataArray.map((data, i) => (
        <ItemList
          key={i}
          header={data.header}
          content={data?.content}
        ></ItemList>
      ))}
    </SettingList>
  );
};

const ItemList = ({ header, content }: SettingCardData) => {
  return (
    <SettingCard.Group elevation={4}>
      <ItemHeader
        title={header.title}
        icon={header.icon}
        padding={false}
        bold={true}
      />
      {!content || (
        <SettingCard.ContentGroup>
          {content.map((v, i) => (
            <SettingCard.ContentRow key={i}>
              <SettingCard.Content elevation={2} onClick={v.onClick}>
                <SettingCard.Meta bold>{v.meta}</SettingCard.Meta>
                <SettingCard.Description bold>
                  {v?.description}
                </SettingCard.Description>
              </SettingCard.Content>
            </SettingCard.ContentRow>
          ))}
        </SettingCard.ContentGroup>
      )}
    </SettingCard.Group>
  );
};

/** My - 알림 설정 페이지 */
const AlarmSetting = ({ dataArray, goBack }: { dataArray: SettingCardData[], goBack: () => void }) => {
  return (
    <SettingList>
      <SettingCard.ContentRow>
        <SettingCard.Icon>
          <ArrowLeft size={24} onClick={() => goBack()} />
        </SettingCard.Icon>
        <SettingCard.Icon>
          <Settings size={24} />
        </SettingCard.Icon>
        <SettingCard.Title padding bold>
          Alarm Settings
        </SettingCard.Title>
      </SettingCard.ContentRow>

      {dataArray.map((data, i) => (
        <AlarmItemList
          key={i}
          header={data.header}
          content={data?.content}
        ></AlarmItemList>
      ))}
    </SettingList>
  );
};

const AlarmItemList = ({ header, content }: SettingCardData) => {
  content = content.flatMap((v) => (v.child ? [v, ...v.child] : v));
  return (
    <SettingCard.Group elevation={4}>
      <ItemHeader
        title={header.title}
        icon={undefined}
        padding={false}
        bold={true}
      />
      <SettingCard.ContentGroup>
        {content.map((v, i) => {
          if (v.isCheck)
            return <ContentCheck onClick={v.onClick} meta={v.meta} key={i} />;
          else
            return (
              <ContentChild
                onClick={v.onClick}
                meta={v.meta}
                description={v.description}
                key={i}
              />
            );
        })}
      </SettingCard.ContentGroup>
    </SettingCard.Group>
  );
};

/** My - 공통 컴포넌트, {아이콘} {제목} 표시 */
const ItemHeader = ({ title, icon, padding = true, bold }) => {
  const Icon = icon;
  return (
    <SettingCard.Header>
      <SettingCard.Icon>{icon && <Icon size={"3vh"} />}</SettingCard.Icon>
      <SettingCard.Title padding={padding} bold={bold}>
        {title}
      </SettingCard.Title>
    </SettingCard.Header>
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
    <SettingCard.ContentRow>
      <SettingCard.Content elevation={2} onClick={onClick}>
        <SettingCard.Meta>{meta}</SettingCard.Meta>
      </SettingCard.Content>
      <SettingCard.Checkbox sx={sx} />
    </SettingCard.ContentRow>
  );
};

/** 자식 요소인 alarm설정 */
const ContentChild = ({ onClick, meta, description }: SettingCardAlarm) => {
  return (
    <SettingCard.ContentRow>
      <SettingCard.Arrow />
      <SettingCard.Content elevation={2} onClick={onClick}>
        <SettingCard.Meta>{meta}</SettingCard.Meta>
        <SettingCard.Description bold>{description}</SettingCard.Description>
      </SettingCard.Content>
    </SettingCard.ContentRow>
  );
};

export { Setting, AlarmSetting };
