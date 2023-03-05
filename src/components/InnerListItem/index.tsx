import { SettingCard, SettingList } from "./styles";
import { Settings } from "react-feather";
import { Icon } from "../BottomNavbar";

export type SettingCardHeader = {
  icon?: Icon;
  title: string;
};

export type SettingCardContents = {
  meta: string;
  despcription?: string;
  onClick?: () => void;
};

export type SettingCardData = {
  header: SettingCardHeader;
  content?: SettingCardContents[] | undefined;
};

const Setting = ({ dataArray }: { dataArray: SettingCardData[] }) => {
  return (
    <SettingList>
      {dataArray.map((data, i) => (
        <ListItem
          key={i}
          header={data.header}
          content={data?.content}
        ></ListItem>
      ))}
    </SettingList>
  );
};

const ListItem = ({ header, content }: SettingCardData) => {
  return (
    <SettingCard.Group>
      <SettingCard.Header>
        <SettingCard.Icon>
          {header.icon ? <header.icon size={24}/> : <Settings size={24}/>}
        </SettingCard.Icon>
        <SettingCard.Title>{header.title}</SettingCard.Title>
      </SettingCard.Header>

      {!content || (
        <SettingCard.ContentGroup>
          {content.map((v, i) => (
            <SettingCard.Content key={i} onClick={v.onClick}>
              <SettingCard.Meta>{v.meta}</SettingCard.Meta>
              <SettingCard.Description>
                {v?.despcription}
              </SettingCard.Description>
            </SettingCard.Content>
          ))}
        </SettingCard.ContentGroup>
      )}
    </SettingCard.Group>
  );
};

export default Setting;
