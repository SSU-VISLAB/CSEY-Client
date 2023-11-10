import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";

export const MainList = styled.div`
  width: 95%;
  padding: 0 2.5vw;
`;

export const Banner = styled.img`
  display: block;
  height: 20vw;
  margin: 0 auto;
`;

export const ExpandButton = styled(Button)`
  margin: 0 auto;
  display: block;
`;

export const NoticeListArea = styled.div`
  opacity: ${(props: Area) => props.isHidden ? '0' : '1'};
  visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
  max-height: ${props => props.isHidden ? '0' : '1000px'};
  transition: max-height 0.3s ease, opacity 0.5s ease;
`;

type Stick = {
  expand: boolean
}

export const StickWrapper = styled.div`
  display: flex;
  align-items: center;
  height: .75vh;
  min-height: 0.75vh;
  max-height: 0.75vh;
`

export const CalendarStick = styled.div`
  /* height: ${(props: Stick) => props.expand ? '1.5vh' : '.75vh'}; */
  width: 100%;
  height: 100%;
  border-radius: 5px;
  pointer-events: all!important;
  :hover {
    background-color: aquamarine;
  }
  background-color: lightblue;
`

type Area = {
  isHidden: boolean;
}

type text = {
  padding?: boolean;
  bold?: boolean;
  size?: boolean;
};

type GroupProps = {
  backgroundColor?: boolean;
  centered?: boolean;
  between?: boolean;
};

type SlideProps = {
  index: number;
};

const AlertCard = {
  //전체 카드
  Group: styled(Paper) <GroupProps>`
    margin: 1.5vh 0;
    background-color: #e0e0e0;
    border-radius: 0.3em;
  `,

  Icon: styled.img`
    width: 4.5vh;
    margin-left: 10px;
    margin-right: 5px;
  `,

  //카드 헤더 부분 스타일
  Header: styled.div`
    display: flex;
    padding: 0.2em 0;
    align-items: center;
    position: relative;
  `,
  Activate: styled.span`
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: red;
    border-radius: 50%;
    margin-right: 3px;
  `,

  //텍스트 관련 스타일
  Title: styled.span`
    margin-top: 0.5vh;
    padding: ${(props: text) => (props.padding ? "0 0.5em" : "0 0.2em")};
    margin-bottom: 0.2em;
    font-size: 3vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
  `,
  Meta: styled.span`
    font-size: 2.3vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
    line-height: 1.5;
    /* 텍스트 자르기 스타일 추가 */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 90%;
  `,
  More: styled.span`
    font-size: 1.5vh;
    position: absolute;
    right: 10px;
    bottom: 5px;
    cursor: pointer;
    color: black;
  `,
  SlideAnimation: styled.div<SlideProps>`
    transition: all 1s;
    transform: translateY(-${(props) => props.index * 100}%);
  `,
};

export const {
  Group,
  Header,
  Icon,
  Meta,
  Title,
  More,
  Activate,
  SlideAnimation,
} = AlertCard;