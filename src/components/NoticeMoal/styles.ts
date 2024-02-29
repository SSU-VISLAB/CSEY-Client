import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-family: var(--font-바른히피);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 90%;
  background-color: white;
  border-radius: 13px;
  margin: 0 auto;
  margin-top: 5%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  width: 90%;
  margin-top: 7.5%;
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 6%;
  right: 21%;
  z-index: 999;
  width: 2%;
  cursor: pointer;
`;

export const Title = styled.div<{isAlert: boolean}>`
  font-size: 2vh;
  font-weight: 700;
  background-color: ${(props) => props.isAlert ? '#FCE6E0' : '#E4F1FD'};
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
  margin-bottom: 10px;
`;

export const LeftIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 60px;
  justify-content: space-between;
`;

export const RightIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 30px;
  margin-right: 8px;
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

export const ContentsWrapper = styled.div<{isAlert: boolean}>`
  background-color: ${(props) => props.isAlert ? '#FCE6E0' : '#E4F1FD'};
  padding: 5px;
`;