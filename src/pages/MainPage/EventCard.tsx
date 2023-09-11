import React, { useState } from "react";
import { IEventCardProps } from "../../pages/MainPage";
import { ReactComponent as BookmarkIcon } from "../../assets/Icons/BookmarkIcon.svg";
import { ReactComponent as UnBookmarkIcon } from "../../assets/Icons/UnBookmarkIcon.svg";
import { ReactComponent as HateIcon } from "../../assets/Icons/HateIcon.svg";
import BookmarkOnSrc from "../../assets/Icons/BookmarkOn.png";
import BookmarkOffSrc from "../../assets/Icons/BookmarkOff.png";
import * as s from "./estyles";

const EventCard = ({
  date,
  image,
  major,
  title,
  isBookmarked,
}: IEventCardProps) => {
  const [isBookmark, setIsBookmark] = useState<boolean>(false);
  const handleBookmarkClick = () => {
    setIsBookmark((prevState) => !prevState);
  };

  const curDate = new Date();
  const evtDate = new Date(date);
  const leftDate = Math.ceil((evtDate.getTime() - curDate.getTime()) / (1000 * 60 * 60 * 24));
  const WrapperColor = leftDate <= 1 ? true : false;
  return (
    <s.EventCardWrapper elevation={8} bgColor={WrapperColor}>
      <s.EventDday bgColor={WrapperColor}>{date}</s.EventDday>
      <s.EventCardContants>
        <s.EventPost src={image} />
        <s.BelowEventPost>
          <s.EventInfo>
            <s.BelongDepartment>
              {major === "COMPUTER"
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
  );
};

// function DdayIdentifier(date : string)->string {
//   return {
//     date? "D-{date}" : "D-day";
//   };
// };
export default EventCard;
