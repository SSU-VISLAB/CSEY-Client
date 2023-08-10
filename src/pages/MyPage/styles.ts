import styled from "@emotion/styled";
import { Checkbox } from "@mui/material";
import { Paper } from "@mui/material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

export const SettingList = styled.div`
  width: 95vw;
  padding: 0 2.5vw;
`;

type text = {
  padding?: boolean;
  bold?: boolean;
};

const SettingCard = {
  ContentRow: styled.div`
    display: flex;
    align-items: center;
    padding: 0.15em 0;
  `,
  CheckboxIcon: styled(Checkbox)`
    padding: 0 0.5em;
  `,
  Arrow: styled(SubdirectoryArrowRightIcon)`
    padding: 0 0 0 1rem;
    font-size: 1rem;
  `,
  Icon: styled.span``,
  // 카드(Account, Setting, Guide)
  Group: styled(Paper)`
    padding: 0.2em 0.5em 0 0.5em;
    margin: 1.5vh 0;
    background-color: #e0e0e0;
    border-radius: 0.3em;
  `,
  Header: styled.div`
    display: flex;
    padding: 0.2em 0;
    align-items: flex-start;
  `,
  Title: styled.span`
    padding: ${(props: text) => (props.padding ? "0 0.5em" : "0 0.2em")};
    margin-bottom: 0.2em;
    font-size: 2.5vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
  `,
  // 카드 안 막대들 그룹(학력정보, 로그아웃, 계정탈퇴)
  ContentGroup: styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1.2vh;
  `, //
  Content: styled(Paper)`
    display: flex;
    padding: 0 0.5em;
    margin: 0.1em auto;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 0.3em;
    background-color: #c2c2c2;
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
export const {Arrow, CheckboxIcon, Content, ContentGroup, ContentRow, Description, Group, Header, Icon, Meta, Title} = SettingCard;
