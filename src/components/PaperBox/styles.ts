import styled from "@emotion/styled";
import { Paper } from "@mui/material";

type text = {
  padding?: boolean;
  bold?: boolean;
};

const styles = {
  Icon: styled.span``,
  Group: styled(Paper)`
    padding: 0.2em 0.5em 0 0.5em;
    margin: 1.5vh 0;
    background-color: ${(props: {color: string}) => props.color || '#e0e0e0'};
    border-radius: 0.3em;
    overflow-y: hidden;
  `,
  Header: styled.div`
    display: flex;
    padding: 0.2em 0;
    gap: 1vw;
    align-items: flex-start;
  `,
  Title: styled.span`
    padding: ${(props: text) => (props.padding ? "0 0.5em" : "0 0.2em")};
    margin-bottom: 0.2em;
    font-size: 3vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
  `,
};
export const { Group, Header, Icon, Title } = styles;
