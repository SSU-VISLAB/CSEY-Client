import { memo, useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import * as s from "./cstyles";
import './Calendar.css';
import moment from 'moment';
import { CalendarStick } from './styles';
import { Tooltip } from '@mui/material';

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

function getRowCount(currentDate: Date) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0); // 0은 이전 월의 마지막 날을 의미

  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 (일요일)부터 6 (토요일)까지

  // 7일(한 주)을 기준으로 행 수 계산
  const rowCount = Math.ceil((daysInMonth + firstDayOfWeek) / 7);

  return rowCount;
}

export const RCalendar = memo(function RCalendar() {
	const [currentDate, setCurrentMonth] = useState(new Date());
  const [calenderPosition, setCalenderPosition] = useState<[number, number ,number]>([0,0,0]);
  const calRef = useRef();
  useEffect(() => {
    setTimeout(() => { // offset 값은 늦게 반영되기 때문에 한 tick 늦게 실행시켜 해결
      const {offsetTop, offsetWidth, offsetHeight} = document.querySelector<HTMLDivElement>('.react-calendar__month-view');
      setCalenderPosition([offsetTop, offsetWidth, offsetHeight]);
    });
  }, [currentDate]);

  useEffect(() => {
    const calendarTile = document.querySelectorAll<HTMLButtonElement>(".react-calendar__tile");
    calendarTile.forEach(el => el.style.height = `${100 / getRowCount(currentDate)}%`)
  }, [calRef]);
  return (
    <div>
      {/* <BackgroundImage month={currentMonth} position={calenderPosition} /> */}
      <Calendar
        inputRef={calRef}
				formatDay={(_, date) => date.getDate().toString()}
				formatShortWeekday={(_, date)=> getDayOfWeek(date)}
				formatMonthYear={(_, date) => getMonthName(date)}
				onActiveStartDateChange={(v) => setCurrentMonth(v.activeStartDate)} // 달 넘기기 버튼 클릭 이벤트
				calendarType='gregory' // 시작일을 일요일로 설정
        maxDetail={'month'} // month만 볼 수 있도록 강제
        minDetail={'month'} // 위와 동일
        showNeighboringMonth={false} // 이웃한 달의 날짜 표시 안함
        tileContent={tileContent}
        onClickDay={(v, e) => {e.preventDefault()}}
        tileDisabled={(v) => true}
      />
    </div>
  );
})

function isBetween(currentDate: Date, startDate: Date, endDate: Date) {
  // currentDate는 00:00:00, startDate는 xx:yy:zz 이므로 >=의 계산 결과가 99.9% false로 나오게 됨
  // ex) currentDate(15일00시00분00초) < startDate(15일09시00분00초), 즉 15일에 시작하는 일정이 15일에 표시되지 않음
  // 이를 해결하기 위해 startDate를 00시00분00초로 하여 새로 만듦
  return currentDate >= new Date(startDate.toLocaleDateString()) && currentDate <= endDate;
}

/** 달력 막대 */
function tileContent({ date, view }) {
  const stickData = dummyCalendarEvent.reduce((acc, val) => {
    const {start, end} = val;
    if (isBetween(date, start, end)) acc.push(val);
    return acc;
  }, []).slice(0, 3);
  // 3개 이상 표시되지 않도록 제한

  return (
    <>
      {stickData.map((d, i) => 
        <>
          <Tooltip title={d.content} followCursor={true} placement="top">
            <CalendarStick key={d.title}></CalendarStick>
          </Tooltip>
        </>
      )}
    </>
  )
}

function makeData([start, end]: [Date, Date], title: string, content: string) {
  return {
    start,
    end,
    title,
    content
  }
}
const dummyCalendarEvent = [
  makeData([new Date('2023-10-30'), new Date('2023-11-08T00:00:00')], '제목1', '내용1'),
  makeData([new Date('2023-11-01'), new Date('2023-11-04T00:00:00')], '제목2', '내용2'),
  makeData([new Date('2023-11-05'), new Date('2023-11-08T00:00:00')], '제목3', '내용3'),
  makeData([new Date('2023-11-20'), new Date('2023-11-28T00:00:00')], '제목4', '내용4'),
  makeData([new Date('2023-11-15'), new Date('2023-11-15T00:00:00')], '제목5', '내용5'),
]

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