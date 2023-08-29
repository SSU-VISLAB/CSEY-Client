import React, { useEffect, useState } from "react";
import moment from "moment";
import * as s from "./cstyles";
import { ChevronLeft, ChevronRight } from "react-feather";
import SaveIcon from "/src/assets/Icons/SaveIcon.png";

const MonthName = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
export const Calendar = () => {
  const [year, setYear] = useState<number>(2023);
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  useEffect(() => {
    const currentDate = moment();
    setYear(currentDate.year());
    setMonth(currentDate.month());
    setDay(currentDate.date());
  }, []);

  const prevMonth = () => {
    month ? setMonth(11) : setMonth(month - 1);
  };

  const nextMonth = () => {
    month == 11 ? setMonth(0) : setMonth(month + 1);
  };

  return (
    <s.Header>
      <s.CalendarNav>
        <ChevronLeft
          cursor="pointer"
          color="#C2C2C2"
          size={24}
          onClick={() => prevMonth()}
        />
        {MonthName[month]}
        <ChevronRight
          cursor="pointer"
          color="#C2C2C2"
          size={24}
          onClick={() => nextMonth()}
        />
      </s.CalendarNav>
      <s.SaveImg src={SaveIcon} alt="Save" />
    </s.Header>
    
  );
};
