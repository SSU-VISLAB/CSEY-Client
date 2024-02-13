import { FunctionComponent, SVGAttributes, memo } from "react";
import { Home, Link, Mic, Package, Smile } from "react-feather"; // for icon-test
import { useLocation, useNavigate } from "react-router-dom";
import { MobileNavbar } from "./styles";

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

const menuList = new Map<string, [Icon, NavLinkList]>([
  ["테라스", [Package, "/Terrace"]],
  ["공지", [Mic, "/Notification"]],
  ["메인", [Home, "/Main"]],
  ["링크트리", [Link, "/LinkTree"]],
  ["MY", [Smile, "/My"]],
]); // 제목, 아이콘

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const match = (link: string) => location.pathname.includes(link);
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

/**
 * props.active가 달라진 요소만 rerender 하기 위해 memo 사용
 */
const NavbarItem = memo(({ title, Icon, navigate, active }: { title: string; Icon: Icon, navigate: () => void, active: boolean }) => {
  return (
    <MobileNavbar.Item onClick={navigate} active={active ? "active" : undefined}>
      <Icon />
      {title}
    </MobileNavbar.Item>
  );
}, (prev, next) => prev.active == next.active);

export default BottomNavbar;
