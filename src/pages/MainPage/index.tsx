import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertSrc from "../../assets/Icons/MainAlertIcon.png";
import HeaderLogo from "../../components/HeaderLogo";
import EventCard from "./EventCard";
import { RCalendar } from "./Rcalendar";
import { EventCardCarousel } from "./cstyles";
import * as s from "./styles";
import testImg1 from "/src/assets/tmp/좋아하는것들을.png";
import testImg2 from "/src/assets/tmp/짱구.jpeg";

export interface IEventModalProps {
  title: string;
  imgURL?: string;
  startDate: string;
  endDate?: string;
  content: string;
  dday: number;
}
interface AlertResponse {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  major_advisor: string;
  like: number;
  dislike: number;
  priority: string;
}
export interface IEventCardProps {
  date: string;
  image: string;
  major: string;
  title: string;
  isBookmarked: boolean;
}

const alerts = [
  {
    id: 23,
    title: "23-2학기 전체수강신청 공지 안내",
    content: "안녕하세요 학부사무실입니다.\n23-2학기 전체 수강신청...",
    image: testImg1,
    date: "2023-08-27T12:34:56Z",
    major_advisor: "COMPUTER",
    like: 101,
    dislike: 10,
    priority: "EMERGENCY",
  },
  {
    id: 24,
    title: "2023-2학기 수강신청 유의사항 안내",
    content: "소프트웨어학부 수강신청 공지사항 및 참고 사항 안내\n\n...",
    image: testImg2,
    date: "2023-08-30T13:25:05Z",
    major_advisor: "SOFTWARE",
    like: 87,
    dislike: 8,
    priority: "EMERGENCY",
  },
];
const MainPage = () => {
  // const [alerts, setAlerts] = useState<AlertResponse[]>([]);
  const [showRedDot, setShowRedDot] = useState<boolean>(true);
  const [calendarState, setcalendarState] = useState('normal');
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % alerts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [alertError, setAlertError] = useState<string | null>(null);
  const [ip, setIp] = useState<string>("");

  const port = "";
  const url = `https://${ip}:${port}/posts/alerts`;
  useEffect(() => {
    // axios
    //   .get("https://api.ipify.org?format=json")
    //   .then((response) => {
    //     setIp(response.data.ip);
    //   })
    //   .catch((error) => {
    //     console.log("Error fetching IP", error);
    //   });
    // axios
    //   .get<AlertResponse[]>(url)
    //   .then((response) => {
    //     setAlerts(response.data);
    //   })
    //   .catch((err) => {
    //     console.error("Error fetching alert data:", err);
    //     setAlertError("오늘은 중요 공지가 없습니다.");
    //   });
  }, []);

  return (
    <s.MainList>
      <HeaderLogo />
      {calendarState == 'expand' && <s.ExpandButton onClick={() => setcalendarState('normal')}>V</s.ExpandButton>}
      <s.NoticeListArea isHidden={calendarState == 'expand'}>
        <s.Group>
          <s.Header>
            <s.Icon src={AlertSrc} alt="Alert" />
            {/* {alertError ? ( */}
            {true ? (
              <s.Meta bold>{alertError}</s.Meta>
            ) : (
              <AlertList
                id={alerts[currentAlertIndex].id}
                title={alerts[currentAlertIndex].title}
                content={alerts[currentAlertIndex].content}
                image={alerts[currentAlertIndex].image}
                date={alerts[currentAlertIndex].date}
                major_advisor={alerts[currentAlertIndex].major_advisor}
                like={alerts[currentAlertIndex].like}
                dislike={alerts[currentAlertIndex].dislike}
                priority={alerts[currentAlertIndex].priority}
              />
            )}
            <Link to="/Notification">
              <s.More>
                {" "}
                {showRedDot && <s.Activate />} {"더보기 >"}
              </s.More>
            </Link>
          </s.Header>
        </s.Group>
        <EventCardCarousel>
          {alerts.map((alert) => (
            <EventCard
              date={alert.date}
              image={alert.image}
              major={alert.major_advisor}
              title={alert.title}
              isBookmarked={false}
            />
          ))}
        </EventCardCarousel>
      </s.NoticeListArea>
      <RCalendar state={calendarState} />
      {calendarState == 'normal' && <s.ExpandButton onClick={() => setcalendarState('expand')}>^</s.ExpandButton>}
    </s.MainList>
  );
};

const AlertList = ({ title }: AlertResponse) => {
  return <s.Meta bold>{title}</s.Meta>;
};
export default MainPage;

{
  /* <EventModal
  title={modalData.title}
  startDate={modalData.startDate}
  endDate={modalData.endDate}
  content={modalData.content}
  imgURL={modalData.imgURL}
  dday={modalData.dday}
/> */
}
