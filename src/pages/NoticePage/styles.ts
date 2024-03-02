import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Wrapper = styled.div`
  max-width: 95vw;
  padding: 0 2.5vw;
`;

type text = {
  padding?: boolean;
  bold?: boolean;
  size?: boolean;
};

const AlertCard = {
  Icon: styled.img`
    width: 5vh;
  `,
  Meta: styled.span`
    font-size: 2.3vh;
    font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
    line-height: 1.5;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 90%;
  `,
};


export const {
  Icon,
  Meta,
} = AlertCard;
