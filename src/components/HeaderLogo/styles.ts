import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #ffffff; /* Add a background color */
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); /* Add a shadow if needed */
  z-index: 5000;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
  z-index: 5000;
`;

export const CseyLogo = styled.img`
  width: auto;
  height: 100px;
  cursor: pointer;
`;

export const VisLogo = styled.img`
  width: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;