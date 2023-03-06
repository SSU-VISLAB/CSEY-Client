import React from "react";
import { IEventModalProps } from "../../pages/MainPage";
import * as s from "./styles";
import { ReactComponent as CloseIcon } from "../../assets/Icons/CloseIcon.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/Icons/BookmarkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/Icons/LikeIcon.svg";
import { ReactComponent as HateIcon } from "../../assets/Icons/HateIcon.svg";
import { ReactComponent as ShareIcon } from "../../assets/Icons/ShareIcon.svg";

const EventModal = ({
  title,
  imgURL,
  startDate,
  endDate,
  content,
  dday,
}: IEventModalProps) => {
  return (
    <s.Wrapper>
      <s.CloseBtnWrapper>
        <CloseIcon />
      </s.CloseBtnWrapper>
      <s.Container>
        <s.Title>{title}</s.Title>
        <s.ImgContainer src={imgURL} />
        <s.IconContainer>
          <s.LeftIcons>
            <s.Icon>
              <LikeIcon />
            </s.Icon>
            <s.Icon>
              <HateIcon />
            </s.Icon>
            <s.Icon>
              <ShareIcon />
            </s.Icon>
          </s.LeftIcons>

          <s.RightIcon>
            <s.Icon>
              <BookmarkIcon />
            </s.Icon>
          </s.RightIcon>
        </s.IconContainer>

        <s.DateContainer>
          <s.Dday>D-{dday}</s.Dday>
          <s.Duration>
            {startDate} ~ {endDate}
          </s.Duration>
        </s.DateContainer>

        <s.ContentsWrapper>{content}</s.ContentsWrapper>
      </s.Container>
    </s.Wrapper>
  );
};

export default EventModal;
