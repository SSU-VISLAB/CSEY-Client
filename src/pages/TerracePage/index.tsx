import React from "react";
import HeaderLogo from "../../components/HeaderLogo";
import * as s from "./styles";
import EventModal from "../../components/EventModal";
import tmpImg from "../../assets/Img/testImg.png"
const TerracePage = () => {
  return (
    <s.Wrapper>
      <HeaderLogo/>
      <EventModal imgURL = {tmpImg} title={"컴퓨터학부 간식행사"} startDate={"20220921"} content={"hello"} dday={3}/>
    </s.Wrapper>
  );
};

export default TerracePage;
