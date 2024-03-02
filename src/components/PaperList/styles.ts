import styled from "@emotion/styled";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { Checkbox as checkbox, Paper } from "@mui/material";

export const Wrapper = styled.div`
  width: 95vw;
  padding: 0 2.5vw;
`;

type text = {
  padding?: boolean;
  bold?: boolean;
};

const PaperList = {
  Checkbox: styled(checkbox)`
    padding: 0 0.5em;
  `,
  Arrow: styled(SubdirectoryArrowRightIcon)`
    padding: 0 0 0 1rem;
    font-size: 1rem;
  `,
  Icon: styled.span``,
  // 카드 안 막대들 그룹(학력정보, 로그아웃, 계정탈퇴)
  ContentGroup: styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 1.5vh;
    
  `,
  ContentRow: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  `,
  Content: styled(Paper)`
    display: flex;
    padding: 0 0.5em;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 0.5em;
    background-color: ${(props: {color: string}) =>props.color || "#C2C2C2"};
    width: 100%;
  `,
  Meta: styled.span`
    font-size: 2.3vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
    line-height: 1.5;
  `,
  Description: styled.span`
    font-size: 1.3vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
    margin-bottom: 0.5em;
  `,
};
export const {
  Arrow,
  Checkbox,
  Content,
  ContentGroup,
  ContentRow,
  Description,
  Icon,
  Meta,
} = PaperList;
