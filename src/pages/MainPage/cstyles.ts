import styled from "@emotion/styled";
type text = {
  padding?: boolean;
  bold?: boolean;
  size?: boolean;
};

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-NotoSans);
  font-size: 3vh;
`;

export const CalendarNav = styled.div`
  display: flex;
  align-items: center;
`;
export const SaveImg = styled.img`
  height: 3.5vh;
  cursor: pointer;
`;

export const Meta = styled.span`
  font-size: 2.3vh;
  font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
  line-height: 1.5;
  /* 텍스트 자르기 스타일 추가 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 90%;
`;

export const CalendarContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Image = styled.img`
  position: absolute;
  opacity: 0.28; //투명도 28%
  pointer-events: none; // 마우스 이벤트 통과
`;

export const CalendarOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 100%;
`;

type dayProps = {
  color?: string;
};

export const Week = styled.div<dayProps>`
  color: ${(props) =>
    props.color
      ? props.color
      : props.children === "Sun"
      ? "red"
      : props.children === "Sat"
      ? "blue"
      : "black"};
  font-family: var(--font-SCDream7);
  border: 1px solid #ccc;
  font-size: 5px;
  display: flex;
  justify-content: center;
  align-items: top;
  padding-top: 5px;
  height: 20px;
`;
export const Day = styled.div`
  border: 1px solid #ccc;
  font-size: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  align-items: top;
  font-family: var(--font-SCDream7);
`;
