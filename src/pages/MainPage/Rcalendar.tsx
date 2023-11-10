import { Tooltip } from '@mui/material';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import { TileArgs } from 'react-calendar/dist/cjs/shared/types';
import ClockIcon from '../../components/Clock';
import './Calendar.css';
import { EventDetail } from './EventDetail/EventDetail';
import * as s from "./cstyles";
import { CalendarStick, StickWrapper } from './styles';

export const RCalendar = memo(function RCalendar({ state }: { state: string }) {
  const [currentDate, setCurrentMonth] = useState(new Date());
  const [clickedDate, setClickedDate] = useState(currentDate);
  const calRef = useRef<HTMLDivElement>();
  const isExpand = state == 'expand';
  console.log("rerender");

  useEffect(() => {
    const calendar = calRef?.current?.querySelector<HTMLButtonElement>(".react-calendar__month-view__days");
    if (calendar) {
      calendar.classList[isExpand ? 'add' : 'remove']('expand');
      (calendar.children[clickedDate.getDate() - 1] as HTMLElement).focus();
    }
  }, [state])



  useEffect(() => {
    const calendarTile = calRef.current.querySelectorAll<HTMLButtonElement>(".react-calendar__tile");
    const height = 100 / getRowCount(currentDate);
    calendarTile.forEach(el => el.style.height = `${height}%`)
  }, [currentDate]);

  /** 달력 막대 */
  const tileContent = useMemo(() => ({ date: _date, view }: TileArgs) => {
    // 3개 이상 표시되지 않도록 제한
    const stickData = getEventOfCurrentDate(dummyCalendarEvent, _date).slice(0, 3);
    const date = _date.getDate();
    const clockSize = 12;
    return (
      <>
        {stickData.map((d, i) => {
          const isStartDate = date == d.start.getDate();
          const isEndDate = date == d.end.getDate();
          return (
            <Tooltip arrow key={d.title} title={d.content} placement="top" classes={{ popper: 'unpointable' }}>
              <StickWrapper>
                {isStartDate && <ClockIcon date={d.start} size={clockSize} start />}
                <CalendarStick expand={false}>{false && d.title}</CalendarStick>
                {isEndDate && <ClockIcon date={d.end} size={clockSize} end />}
              </StickWrapper>
            </Tooltip>
          )
        }
        )}
      </>
    )
  }, [state]);

  /** TODO: 투명도 적용한 image로 교체, css에서 .react-calendar__month-view의 backImg로 설정 */
  return (
    <div>
      {/* <BackgroundImage month={currentDate?.getMonth()} calendarRef={calRef.current} /> */}
      <Calendar
        inputRef={calRef}
        formatDay={(_, date) => date.getDate().toString()}
        formatShortWeekday={(_, date) => getDayOfWeek(date)}
        formatMonthYear={(_, date) => getMonthName(date)}
        onActiveStartDateChange={(v) => setCurrentMonth(v.activeStartDate)} // 달 넘기기 버튼 클릭 이벤트
        calendarType='gregory' // 시작일을 일요일로 설정
        maxDetail={'month'} // month만 볼 수 있도록 강제
        minDetail={'month'} // 위와 동일
        showNeighboringMonth={false} // 이웃한 달의 날짜 표시 안함
        tileContent={tileContent}
        onClickDay={(date, event) => setClickedDate(date)}
      // tileClassName={} // tile에 class 부여하는 함수
      />
      {isExpand && <EventDetail date={clickedDate} events={getEventOfCurrentDate(dummyCalendarEvent, clickedDate)} />}
    </div>
  );
})

function makeData([start, end]: [Date, Date], title: string, content: string) {
  return {
    start,
    end,
    title,
    content
  }
}
const dummyCalendarEvent = [
  makeData([new Date('2023-10-30'), new Date('2023-11-08T09:00:00')], '제목1', '내용1'),
  makeData([new Date('2023-11-01'), new Date('2023-11-04T15:00:00')], '제목2', '내용2'),
  makeData([new Date('2023-11-05'), new Date('2023-11-08T11:00:00')], '제목3', '내용3'),
  makeData([new Date('2023-11-20'), new Date('2023-11-28T15:00:00')], '제목4', '내용4'),
  makeData([new Date('2023-11-15'), new Date('2023-11-15T18:00:00')], '제목5', '내용5'),
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

function BackgroundImage({ month, calendarRef }: { month: number, calendarRef: any }) {
  const src = monthImages[month];
  const alt = monthNames[month];
  const positionRef = calendarRef?.querySelector('.react-calendar__month-view');
  if (!positionRef) return <></>;
  const { offsetTop, offsetWidth, offsetHeight } = positionRef;
  const [top, width, height] = [offsetTop, offsetWidth, offsetHeight].map(v => v + 'px');
  return (
    <s.Image src={src} alt={alt} style={{ top, width, height }} />
  )
}

function isBetween(currentDate: Date, startDate: Date, endDate: Date) {
  // currentDate는 00:00:00, startDate는 xx:yy:zz 이므로 >=의 계산 결과가 99.9% false로 나오게 됨
  // ex) currentDate(15일00시00분00초) < startDate(15일09시00분00초), 즉 15일에 시작하는 일정이 15일에 표시되지 않음
  // 이를 해결하기 위해 startDate를 00시00분00초로 하여 새로 만듦
  return currentDate >= new Date(startDate.toLocaleDateString()) && currentDate <= endDate;
}

function getMonthName(date: Date) {
  const monthNumber = date.getMonth();
  if (monthNumber >= 0 && monthNumber <= 11) {
    return monthNames[monthNumber];
  } else {
    return "Invalid Month";
  }
}
function getDayOfWeek(date: Date) {
  const dayIndex = date.getDay();
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

function getEventOfCurrentDate(events: ReturnType<typeof makeData>[], currentDate: Date) {
  return events.reduce((acc, val) => {
    const { start, end } = val;
    if (isBetween(currentDate, start, end)) acc.push(val);
    return acc;
  }, [] as typeof events);
}