import React from "react";
import * as s from "./styles";
import LikeIcon from "../../assets/Icons/LikeIcon.png";
import HateIcon from "../../assets/Icons/HateIcon.png";
import ShareIcon from "../../assets/Icons/ShareIcon.png";
import CloseBtnSrc from "../../assets/Icons/modalCloseBtn.png"
import { getEventByIdQuery } from "../../api/query/event";
import tmpSrc from "../../assets/tmp/짱구.jpeg"

type EventModalProps = {
  eventId: number, dday: number
}
const EventModal = React.forwardRef(({ eventId, dday }: EventModalProps, ref) => {
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
        <s.ImgContainer src={tmpSrc} />
        {/* <s.ImgContainer src={`http://localhost:3000/events/${image}`} /> */}
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
              {/* <BookmarkIcon /> */}
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
});

export default EventModal;
