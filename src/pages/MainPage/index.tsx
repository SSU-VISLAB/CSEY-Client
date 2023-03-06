import React from "react";
import EventModal from "../../components/EventModal";
import * as s from "./styles";
import modalData from "../../tmp/modalData";
import EventCard from "../../components/EventCard";
import eventCardArray from "../../tmp/eventCardData";


export interface IEventModalProps {
  title: string;
  imgURL?: string;
  startDate: string;
  endDate?: string;
  content: string;
  dday: number;
}

export interface IEventCardProps {
  Dday: number,
  ImgURL: string,
  Belong: string,
  Title: string,
  isBookmarked: boolean
};

const MainPage = () => {
  return (
    <s.Wrapper>
    <EventCard
      Dday={eventCardArray[0].Dday}
      ImgURL={eventCardArray[0].ImgURL}
      Belong={eventCardArray[0].Belong}
      Title={eventCardArray[0].Title}
      isBookmarked={eventCardArray[0].isBookmarked}
    />
    <EventCard
      Dday={eventCardArray[1].Dday}
      ImgURL={eventCardArray[1].ImgURL}
      Belong={eventCardArray[1].Belong}
      Title={eventCardArray[1].Title}
      isBookmarked={eventCardArray[1].isBookmarked}
    />
      <EventModal
        title={modalData.title}
        startDate={modalData.startDate}
        endDate={modalData.endDate}
        content={modalData.content}
        imgURL={modalData.imgURL}
        dday={modalData.dday}
      />
    </s.Wrapper>
  );
};

export default MainPage;
