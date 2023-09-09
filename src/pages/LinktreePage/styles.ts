import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const AlertList = styled.div`
  width: 95vw;
  padding: 0 2.5vw;
`;

export const Banner = styled.img`
  display: block;
  height: 20vw;
  margin: 0 auto;
`;

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

const AlertCard = {
  //전체 카드
  Group: styled(Paper)<GroupProps>`
    padding: 0.2em 0.5em 0 0.5em;
    margin: 1.5vh 0;
    background-color: #feebb6;
    border-radius: 0.3em;
    padding-bottom: 10px;
  `,

  Icon: styled.img`
    width: 4.5vh;
    margin-left: 20px;
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
  ContentRow: styled.div<GroupProps>`
    display: flex;
    align-items: center;
    padding: 0 0;
    ${(props) => props.between && "justify-content: space-between"};
  `,
  Content: styled(Paper)<{ isHovered: boolean }>`
    /* height: 2.2rem; */
    display: flex;
    padding: 0.8em 0.7em;
    margin-left: 15px;
    margin-right: 15px;
    /* margin: auto; */
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 0.7em;
    background-color: #ffcd4a;
    width: 100%;
    cursor: pointer;
    transform: ${(props) => (props.isHovered ? "scale(1.05)" : "scale(1)")};
    transition: transform 0.3s ease-in-out;
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
};

export const {
  Content,
  ContentGroup,
  ContentRow,
  Group,
  Header,
  Icon,
  Meta,
  Title,
} = AlertCard;
