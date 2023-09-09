import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import * as s from "./cstyles";

import './Calendar.css';

const monthNames = [
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
  "DECEMBER"
];
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getMonthName(date: Date) {
	const monthNumber = date.getMonth();
  if (monthNumber >= 0 && monthNumber <= 11) {
    return monthNames[monthNumber];
  } else {
    return "Invalid Month"; // 0에서 11 사이가 아닌 값에 대한 처리
  }
}
function getDayOfWeek(date: Date) {
  const dayIndex = date.getDay(); // 0(일요일)부터 6(토요일)까지의 인덱스를 반환합니다.
  return daysOfWeek[dayIndex];
}

export function RCalendar() {
	const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [calenderPosition, setCalenderPosition] = useState<[number, number ,number]>([0,0,0]);
  
  useEffect(() => {
    setTimeout(() => { // offset 값은 늦게 반영되기 때문에 한 tick 늦게 실행시켜 해결
      const {offsetTop, offsetWidth, offsetHeight} = document.querySelector<HTMLDivElement>('.react-calendar__month-view');
      setCalenderPosition([offsetTop, offsetWidth, offsetHeight])
    });
  }, [currentMonth]);
	
  return (
    <div>
      <BackgroundImage month={currentMonth} position={calenderPosition} />
      <Calendar
				formatDay={(_, date) => date.getDate().toString()}
				formatShortWeekday={(_, date)=> getDayOfWeek(date)}
				formatMonthYear={(_, date) => getMonthName(date)}
				onActiveStartDateChange={(v) => setCurrentMonth(new Date(v.activeStartDate).getMonth())} // 달 넘기기 버튼 클릭 이벤트
				calendarType='gregory' // 시작일을 일요일로 설정
        maxDetail={'month'} // month만 볼 수 있도록 강제
        minDetail={'month'} // 위와 동일
        showNeighboringMonth={false} // 이웃한 달의 날짜 표시 안함
      />
    </div>
  );
}

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

function BackgroundImage({month, position}: {month: number, position: [number, number, number]}) {
  const src = monthImages[month];
  const alt = monthNames[month];
  const [top, width, height] = position.map(v => v + 'px');
  return (
    <s.Image src={src} alt={alt} style={{top, width, height}}/>
  )
}