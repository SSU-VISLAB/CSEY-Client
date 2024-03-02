import styled from "@emotion/styled";
import { Content as _Content } from "../styles";
type GroupProps = {
  backgroundColor?: boolean;
  centered?: boolean;
};
type text = {
  bold?: boolean;
  size?: boolean;
};

export const AlertContent = styled(_Content)<GroupProps>`
  padding: 0.3em 0.7em;
  margin: -2px auto;
  gap: 0.5rem;
  justify-content: ${(props) => (props.centered ? "center" : "left")};
`;

export const Time = styled.span`
  font-size: ${(props: text) => (props.size ? "2.3vh" : "1.5vh")};
  font-weight: ${(props: text) => (props.bold ? "bold" : "400")};
  line-height: 1.5;
  color: white;
  white-space: nowrap; //강제로 한 줄에만 표시
`;
