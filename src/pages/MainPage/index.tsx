import React from "react";
import EventModal from "../../components/EventModal";
import * as s from "./styles";
import modalData from "../../tmp/modalData";

export interface IEventModalProps {
  title: string;
  imgURL?: string;
  startDate: string;
  endDate?: string;
  content: string;
  dday: number;
}

const MainPage = () => {
  return (
    <s.Wrapper>
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
