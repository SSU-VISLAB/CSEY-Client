import React, { useState } from "react";
import { IEventCardProps } from "../../pages/MainPage";
import { ReactComponent as BookmarkIcon } from "../../assets/Icons/BookmarkIcon.svg";
import { ReactComponent as UnBookmarkIcon } from "../../assets/Icons/UnBookmarkIcon.svg";
import { ReactComponent as HateIcon } from "../../assets/Icons/HateIcon.svg";
import BookmarkOnSrc from "../../assets/Icons/BookmarkOn.png";
import BookmarkOffSrc from "../../assets/Icons/BookmarkOff.png";
import * as s from "./styles";

const moveLeft = () => {};
const moveRight = () => {};
const EventCardCarousel = (props) => {
  return <s.Wrapper>{props.children}</s.Wrapper>;
};
export default EventCardCarousel;
