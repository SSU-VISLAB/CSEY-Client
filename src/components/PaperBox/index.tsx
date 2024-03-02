import { PropsWithChildren, memo } from "react";
import {
  Group,
  Header,
  Icon,
  Title,
} from "./styles";
import * as BottomNav from "../../components/BottomNavbar";

export function PaperBox({ color, header, children }) {
  return (
    <Group color={color} elevation={4}>
      <ItemHeader
        title={header.title}
        HeaderIcon={header.icon}
        bold
      ></ItemHeader>
      {children}
    </Group>
  );
}

interface ItemHeaderProps extends PropsWithChildren {
  title: string;
  HeaderIcon?: BottomNav.Icon;
  padding?: boolean;
  bold: boolean;
}

const ItemHeader = memo(
  ({ title, HeaderIcon, padding, bold, children }: ItemHeaderProps) => {
    return (
      <Header>
        <Icon>{HeaderIcon && <HeaderIcon size={"3vh"} />}</Icon>
        <Title padding={padding} bold={bold}>
          {title}
        </Title>
        {children}
      </Header>
    );
  },
);
