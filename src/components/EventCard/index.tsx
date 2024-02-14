import React, { useState } from "react";
// import { ReactComponent as BookmarkIcon } from "../../assets/Icons/BookmarkIcon.svg";
// import { ReactComponent as UnBookmarkIcon } from "../../assets/Icons/UnBookmarkIcon.svg";
// import { ReactComponent as HateIcon } from "../../assets/Icons/HateIcon.svg";
import BookmarkOnSrc from "../../assets/Icons/BookmarkOn.png";
import BookmarkOffSrc from "../../assets/Icons/BookmarkOff.png";
import * as s from "./styles";
import EventModal from "../EventModal";
import { EventType } from "../../types";
import { Box, Modal } from "@mui/material";
import tmpSrc from "../../assets/tmp/짱구.jpeg"

// react 컴포넌트는 무조건 매개변수를 하나 갖고 있음(props)
// props의 속성은 자유자재로 가능
// props의 속성의 개수만큼 jsx에서 속성을 부여할 수 있음
const EventCard = ({ event: {
  id,
  title,
  image,
  start,
  major_advisor
} }: { event: EventType }) => {
  const [isBookmark, setIsBookmark] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleBookmarkClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    setIsBookmark((prevState) => !prevState);
  };


  const curDate = new Date();
  const evtDate = new Date(start);
  const leftDate = Math.ceil(
    (evtDate.getTime() - curDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  const WrapperColor = leftDate <= 1 ? true : false;
  return (
    <>
      {leftDate >= 0 && (
        <s.EventCardWrapper onClick={handleModalOpen} elevation={5} bgcolor={WrapperColor}>
          <s.EventDday bgcolor={WrapperColor}>
            {leftDate <= 1 ? "D-day" : `D-${leftDate}`}
          </s.EventDday>
          <s.EventCardContants>
            <s.EventPost src={tmpSrc} />
            {/* <s.EventPost src={`http://localhost:8080/events/${image}`} /> */}
            <s.BelowEventPost>
              <s.EventInfo>
                <s.BelongDepartment>
                  {major_advisor === "컴퓨터"
                    ? "숭실대학교 컴퓨터학부"
                    : "숭실대학교 소프트웨어학부"}
                </s.BelongDepartment>
                <s.Icon
                  src={isBookmark ? BookmarkOnSrc : BookmarkOffSrc}
                  onClick={handleBookmarkClick}
                />
              </s.EventInfo>
              <s.EventInfo>
                <s.EventTitle>{title}</s.EventTitle>
              </s.EventInfo>
            </s.BelowEventPost>
          </s.EventCardContants>
        </s.EventCardWrapper>
      )}
      <Modal open={isModalOpen} onClose={handleModalClose} >
        <EventModal eventId={id} dday={leftDate} />
      </Modal>
    </>
  );
};

export default EventCard;
