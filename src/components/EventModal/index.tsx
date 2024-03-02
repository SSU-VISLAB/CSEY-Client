import React from "react";
import * as s from "./styles";
import LikeIcon from "../../assets/Icons/LikeIcon.png";
import HateIcon from "../../assets/Icons/HateIcon.png";
import ShareIcon from "../../assets/Icons/ShareIcon.png";
import CloseBtnSrc from "../../assets/Icons/modalCloseBtn.png"
import { getEventByIdQuery } from "../../api/query/event";
import tmpSrc from "../../assets/tmp/짱구.jpeg"
import { formatDate } from "../PaperList/NoticeList";

type EventModalProps = {
  eventId: number, dday: number,
  onClose: () => void
}
const EventModal = React.forwardRef(({ eventId, dday, onClose }: EventModalProps, ref) => {
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
      <s.CloseBtn src={CloseBtnSrc} onClick={onClose}/>
      <s.Container>
        <s.Title>{title}</s.Title>
        <s.ImgContainer src={tmpSrc} />
        {/* <s.ImgContainer src={`http://localhost:3000/events/${image}`} /> */}
        <s.IconContainer>
          <s.LeftIcons>
            <s.Icon src={LikeIcon}/>
            <s.Icon src={HateIcon}/>
            <s.Icon src={ShareIcon}/>
          </s.LeftIcons>

          <s.RightIcon>
          </s.RightIcon>
        </s.IconContainer>

        <s.DateContainer>
          <s.Dday>{dday < 1 ? "D-day" : `D-${dday}`}</s.Dday>
          <s.Duration>
            {formatDate(start)} ~ {formatDate(end)}
          </s.Duration>
        </s.DateContainer>

        <s.ContentsWrapper dangerouslySetInnerHTML={{ __html: content }}/>
      </s.Container>
    </s.Wrapper>
  );
});

export default EventModal;
