import React from "react";
import { IEventCardProps } from "../../pages/MainPage";
import { ReactComponent as BookmarkIcon } from "../../assets/Icons/BookmarkIcon.svg";
import { ReactComponent as HateIcon } from "../../assets/Icons/HateIcon.svg";
import * as s from "./styles";

const EventCard = ({
  Dday,
  ImgURL,
  Belong,
  Title,
  isBookmarked
}: IEventCardProps) => {
  return<s.EventCardWrapper>
    <s.EventDday>{DdayIdentifier(Dday)}</s.EventDday>
    <s.EventCardContants>
      <s.EventPost src={ImgURL}/>
      <s.BelowEventPost>
        <s.EventInfo>
          <s.BelongDepartment>{ Belong }</s.BelongDepartment>
          <s.EventTitle>{ Title }</s.EventTitle>
        </s.EventInfo>
        <s.Icon>
          {bookMarkIconIdentifier(isBookmarked)}
        </s.Icon>
      </s.BelowEventPost>
    </s.EventCardContants>
  </s.EventCardWrapper>;
};

function DdayIdentifier(leftDate:number) : string{
  if(leftDate >= 2) return "D-"+leftDate;
  return "D-Day";
}

function bookMarkIconIdentifier(isBookMarked:boolean) {
  if(isBookMarked) return(
    <HateIcon/> // TODO : 북마크 채워진 아이콘으로 수정 필요
  )
  return(
    <BookmarkIcon/>
  )
}

export default EventCard;
