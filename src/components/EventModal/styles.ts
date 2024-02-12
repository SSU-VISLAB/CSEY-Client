import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  /* height: 75%; */
  background-color: white;
  border-radius: 13px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  width: 90%;
  margin-top: 30px;
`;

export const CloseBtnWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Title = styled.div`
  background-color: #d1d1d1;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;

`;

export const ImgContainer = styled.img`
  margin-top: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const LeftIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 60px;
  justify-content: space-between;
`;

export const RightIcon = styled.div`
`;

export const Icon = styled.div`
  cursor: pointer;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2vh;
`;

export const Dday = styled.div`

`;

export const Duration = styled.div`
  margin-left: 10px;
`;

export const ContentsWrapper = styled.div`
  background-color: #d1d1d1;
  padding: 5px;
`;