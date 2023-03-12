import styled from "@emotion/styled";
import Button from "@mui/material/Button";

type ActiveNav = {
  active?: string;
}

// pc용, 추후 조정
export const Navbar = {
  Wrapper: styled.nav`
    position: absolute;
    bottom: 0;
    align-items: center;
    background-color: white;

    border-top: 2px solid #708dc3;
    box-shadow: 1px 1px 3px gray;
    color: #708dc3;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
  `,
};

// 모바일용
export const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    width: 100vw;
  `,
  Items: styled(Navbar.Items)`
    justify-content: space-around;
  `,
  Item: styled(Button)`
    background-color: ${(props: ActiveNav) => props.active ? '#708dc3' : 'none'}!important;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.3rem 0 0 0;
    font-family: var(--font-바른히피);
    font-size: 1rem;
    font-weight: 600;
    min-width: 32px;
    width: 100%;
  `,
};
