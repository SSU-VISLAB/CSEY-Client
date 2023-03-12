import React, { FunctionComponent, SVGAttributes } from "react";
import { MobileNavbar, Navbar } from "./styles";
import { Package, Mic, Home, Link, Smile } from "react-feather"; // for icon-test
import { NavigateFunction, useMatch, useNavigate } from "react-router-dom";

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
          const data = menuList.get(key);
          return <NavbarItem title={key} Icon={data[0]} Link={data[1]} navigate={navigate} match={match} key={i} />;
        })}
      </MobileNavbar.Items>
    </MobileNavbar.Wrapper>
  );
};

const NavbarItem = ({ title, Icon, Link, navigate, match }: { title: string; Icon: Icon, Link: string, navigate: NavigateFunction, match }) => {
  const active = match(Link);
  return (
    <MobileNavbar.Item onClick={() => navigate(Link)} active={active ? "active" : undefined}>
      <Icon />
      {title}
    </MobileNavbar.Item>
  );
};

export default BottomNavbar;
