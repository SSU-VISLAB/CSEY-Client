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
const monthImages = [
  "/src/assets/calendar/001.png",
  "/src/assets/calendar/002.png",
  "/src/assets/calendar/003.png",
  "/src/assets/calendar/004.png",
  "/src/assets/calendar/005.png",
  "/src/assets/calendar/006.png",
  "/src/assets/calendar/007.png",
  "/src/assets/calendar/008.png",
  "/src/assets/calendar/009.png",
  "/src/assets/calendar/010.png",
  "/src/assets/calendar/011.png",
  "/src/assets/calendar/012.png",
];
const DayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
    if (month == 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month == 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <>
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
      <s.CalendarContainer>
        <s.Image src={monthImages[month]} alt={MonthName[month]} />
        <s.CalendarOverlay>
          <CalendarComponent month={month} sday={day} year={year} />
        </s.CalendarOverlay>
      </s.CalendarContainer>
    </>
  );
};

const CalendarComponent = ({ month, sday, year }) => {
  const daysInMonth = moment({ year, month }).daysInMonth();
  const startDay = moment({ year, month, day: 1 }).day();

  const days = Array(daysInMonth + startDay)
    .fill(null)
    .map((_, index) => {
      const day = index + 1 - startDay;
      if (index < startDay) return null;
      return <s.Day key={index}>{day}</s.Day>;
    });
  return (
    <s.DaysContainer>
      {DayName.map((name) => (
        <s.Week key={name}>{name}</s.Week>
      ))}
      {days}
    </s.DaysContainer>
  );
};
