import { useState } from "react";
import { IEventCardProps } from "..";
import BookmarkOffSrc from "../../../assets/Icons/BookmarkOff.png";
import BookmarkOnSrc from "../../../assets/Icons/BookmarkOn.png";
import * as s from "./styles";

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
  const WrapperColor = leftDate <= 1 ? 'true' : 'false';
  return (
    <s.EventCardWrapper elevation={8} bgcolor={WrapperColor}>
      <s.EventDday bgcolor={WrapperColor}>D{leftDate}</s.EventDday>
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
