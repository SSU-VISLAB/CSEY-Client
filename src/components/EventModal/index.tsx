import React from "react";
import * as s from "./styles";
import { ReactComponent as CloseIcon } from "../../assets/Icons/CloseIcon.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/Icons/BookmarkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/Icons/LikeIcon.svg";
import { ReactComponent as HateIcon } from "../../assets/Icons/HateIcon.svg";
import { ReactComponent as ShareIcon } from "../../assets/Icons/ShareIcon.svg";
import { getEventByIdQuery } from "../../api/query/event";
import CloseBtnSrc from "../../assets/Icons/modalCloseBtn.png"
type EventModalProps = {
  eventId: number, dday: number
}
const EventModal = ({ eventId, dday }: EventModalProps) => {
  const { data, isPending } = getEventByIdQuery(eventId);
  if (isPending) return (<>"Loading"</>);
  const {
    title,
    content,
    image,
    start,
    end,
    like,
    dislike } = data;
  return (
    <s.Wrapper>
      <s.CloseBtn src={CloseBtnSrc}/>
      <s.Container>
        <s.Title>{title}</s.Title>
        <s.ImgContainer src={`http://localhost:3000/events/${image}`} />
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
            {start} ~ {end}
          </s.Duration>
        </s.DateContainer>

        <s.ContentsWrapper>{content}</s.ContentsWrapper>
      </s.Container>
    </s.Wrapper>
  );
};

export default EventModal;
