import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const AlertList = styled.div`
  width: 95vw;
  padding: 0 2.5vw;
`;

type text = {
  padding?: boolean;
  bold?: boolean;
  size?: boolean;
};

type GroupProps = {
  backgroundColor?: boolean;
};

const AlertCard = {
  //전체 카드
  Group: styled(Paper)<GroupProps>`
    padding: 0.2em 0.5em 0 0.5em;
    margin: 1.5vh 0;
    background-color: ${(props) =>
      props.backgroundColor ? "#E4F1FD" : "#fce6e0"};
    border-radius: 0.3em;
  `,

  Icon: styled.img`
    width: 5vh;
  `,

  //카드 헤더 부분 스타일
  Header: styled.div`
    display: flex;
    padding: 0.2em 0;
    align-items: flex-start;
  `,
  // 카드 내 요소
  ContentGroup: styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1.2vh;
  `,
  //내용 항목들 나열을 위한 행 스타일
  ContentRow: styled.div`
    display: flex;
    align-items: center;
    padding: 0 0;
  `,
  Content: styled(Paper)<GroupProps>`
    /* height: 2.2rem; */
    display: flex;
    padding: 0.3em 0.7em;
    margin: auto;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    border-radius: 0.7em;
    background-color: ${(props) =>
      props.backgroundColor ? "#F3CCC1" : "#B0CDE8"};
    width: 100%;
  `,

  //텍스트 관련 스타일
  Title: styled.span`
    margin-top: 0.5vh;
    padding: ${(props: text) => (props.padding ? "0 0.5em" : "0 0.2em")};
    margin-bottom: 0.2em;
    font-size: 3vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
  `,
  Time: styled.span`
      font-size: ${(props: text) => (props.size ? "2.3vh" : "1.5vh")};
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
    line-height: 1.5;
    color: white;
    white-space: nowrap;    //강제로 한 줄에만 표시
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
  Description: styled.span`
    font-size: 1.3vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
    margin-bottom: 0.5em;
  `,
};

export const {
  Content,
  ContentGroup,
  ContentRow,
  Description,
  Group,
  Header,
  Icon,
  Meta,
  Title,
  Time,
} = AlertCard;
