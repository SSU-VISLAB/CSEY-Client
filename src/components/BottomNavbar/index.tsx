import React, { FunctionComponent, SVGAttributes } from "react";
import { MobileNavbar, Navbar } from "./styles";
import { Package, Mic, Home, Link, Smile } from "react-feather"; // for icon-test
import IconButton from '@mui/material/IconButton';

interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type Icon = FunctionComponent<IconProps>;

const BottomNavbar = () => {
  const menuList = new Map([
    ["테라스", Package],
    ["공지", Mic],
    ["메인", Home],
    ["링크트리", Link],
    ["MY", Smile],
  ]); // 제목, 아이콘

  return (
    <MobileNavbar.Wrapper>
      <MobileNavbar.Items>
        {[...menuList.keys()].map((key, i) => (
          <NavbarItem title={key} Icon={menuList.get(key)} key={i} />
        ))}
      </MobileNavbar.Items>
    </MobileNavbar.Wrapper>
  );
};

const NavbarItem = ({ title, Icon }: { title: string; Icon: Icon }) => {
  return (
    <MobileNavbar.Item>
      <Icon />
      {title}
    </MobileNavbar.Item>
  );
};

export default BottomNavbar;
