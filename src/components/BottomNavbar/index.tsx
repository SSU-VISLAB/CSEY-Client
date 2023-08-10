import React, { FunctionComponent, SVGAttributes } from "react";
import { MobileNavbar, Navbar } from "./styles";
import { Package, Mic, Home, Link, Smile } from "react-feather"; // for icon-test
import { PathMatch, useMatch, useNavigate } from "react-router-dom";

interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type Icon = FunctionComponent<IconProps>;

export type NavLinkList =
  | "/Terrace"
  | "/Notification"
  | "/Main"
  | "/LinkTree"
  | "/My";

const BottomNavbar = () => {
  const menuList = new Map<string, [Icon, NavLinkList]>([
    ["테라스", [Package, "/Terrace"]],
    ["공지", [Mic, "/Notification"]],
    ["메인", [Home, "/Main"]],
    ["링크트리", [Link, "/LinkTree"]],
    ["MY", [Smile, "/My"]],
  ]); // 제목, 아이콘
  const navigate = useNavigate();
  const match = useMatch;
  return (
    <MobileNavbar.Wrapper>
      <MobileNavbar.Items>
        {[...menuList.keys()].map((key, i) => {
          const [Icon, Link] = menuList.get(key);
          return <NavbarItem title={key} Icon={Icon} navigate={() => navigate(Link)} active={match(Link)} key={key} />;
        })}
      </MobileNavbar.Items>
    </MobileNavbar.Wrapper>
  );
};

const NavbarItem = ({ title, Icon, navigate, active }: { title: string; Icon: Icon, navigate: () => void, active:PathMatch<string> }) => {
  return (
    <MobileNavbar.Item onClick={navigate} active={active ? "active" : undefined}>
      <Icon />
      {title}
    </MobileNavbar.Item>
  );
};

export default BottomNavbar;
