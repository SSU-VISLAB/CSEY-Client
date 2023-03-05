import React from "react";
import EventModal from "../../components/EventModal";
import * as s from "./styles";
import modalData from "../../tmp/modalData";

export interface IEventModalProps {
  title: string;
  imgURL?: string;
  startDate: string;
  endDate: string;
  content: string;
}

const MainPage = () => {
  return (
    <s.Wrapper>
      <EventModal
        title={modalData.title}
        startDate={modalData.startDate}
        endDate={modalData.endDate}
        content={modalData.content}
      />
    </s.Wrapper>
  );
};

export default MainPage;
