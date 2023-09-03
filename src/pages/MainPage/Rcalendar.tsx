import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

function getMonthName(date: Date) {
	const monthNumber = date.getMonth();
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

  if (monthNumber >= 0 && monthNumber <= 11) {
    return monthNames[monthNumber];
  } else {
    return "Invalid Month"; // 0에서 11 사이가 아닌 값에 대한 처리
  }
}
function getDayOfWeek(date) {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayIndex = date.getDay(); // 0(일요일)부터 6(토요일)까지의 인덱스를 반환합니다.
  return daysOfWeek[dayIndex];
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
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function RCalendar() {
	const isRender = useRef();
	const ref = useRef();
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	console.log("object");
	useEffect(() => {
		const view = document.querySelector('.react-calendar__viewContainer');
		view['style'].background = `url(${monthImages[currentMonth]})`;
		view['style'].backgroundSize = "100% 100%"; 
		view['style'].backgroundColor = "rgba(0,0,0,0.5)" 
	}, [isRender, currentMonth])
	return (
    <div ref={isRender}>
      <Calendar 
				onActiveStartDateChange={(v) => setCurrentMonth(new Date(v.activeStartDate).getMonth())}
				onChange={(v, e) => console.log({v, e})}
				formatDay={(_, date) => date.getDate().toString()}
				formatShortWeekday={(_, date)=> getDayOfWeek(date)}
				formatMonthYear={(_, date) => getMonthName(date)}
				next2Label={undefined}
				prev2Label={undefined}
				calendarType='gregory' // 일요일이 시작일
      />
    </div>
  );
}