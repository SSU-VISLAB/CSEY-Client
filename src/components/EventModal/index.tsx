import React from "react";
import { IEventModalProps } from "../../pages/MainPage";
import * as s from "./styles";
import { ReactComponent as BookmarkIcon } from "../../assets/Icons/BookmarkIcon.svg";

const EventModal = ({
  title,
  imgURL,
  startDate,
  endDate,
  content,
}: IEventModalProps) => {
  return (
    <s.Wrapper>
      <s.Container>
        <s.Title>{title}</s.Title>
        <s.ImgContainer src={imgURL} />
        <s.IconContainer>
          <s.LeftIcons>
            <BookmarkIcon />
          </s.LeftIcons>
        </s.IconContainer>
      </s.Container>
    </s.Wrapper>
  );
};

export default EventModal;
