import styled from "@emotion/styled";

// pc용, 추후 조정
export const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    font-size: .9rem;
    font-weight: 600;
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
    cursor: pointer;
  `,
};

// 모바일용
export const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    align-self: flex-end;
    width: 100vw;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    display: flex;
    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0.3rem 0;
  `,
  Icon: styled.span``,
};
