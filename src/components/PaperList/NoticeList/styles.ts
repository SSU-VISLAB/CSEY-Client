import styled from "@emotion/styled";
import { AlertContent } from "../AlertList/styles";
import { Meta as _Meta, Description as _Description, ContentGroup } from "../styles";
type GroupProps = {
  backgroundColor?: boolean;
  centered?: boolean;
};
type text = {
  bold?: boolean;
  size?: boolean;
};

export const NoticeContentGroup = styled(ContentGroup)``;

export const NoticeContent = styled(AlertContent)<GroupProps>`
  margin: auto;
`;

export const NoticeRow = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Line = styled.div`
  margin-top: 7px;
  text-align: left;
  &:last-child {
    margin-bottom: 0;
    margin-top: 0px;
  }
  &:first-child {
    margin-top: 0px;
  }
`;

export const Meta = styled(_Meta)`
  /* 텍스트 자르기 스타일 추가 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 90%;
`;

export const Description = styled(_Description)`
  font-size: 1.7vh;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 3.5em;
`;

export const NoticeSrc = styled.img`
  flex-shrink: 0;
  width: 13vh;
`;
