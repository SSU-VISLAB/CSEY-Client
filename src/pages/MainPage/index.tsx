import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertSrc from "../../assets/Icons/MainAlertIcon.png";
import HeaderLogo from "../../components/HeaderLogo";
import { RCalendar } from "./Rcalendar";
import * as s from "./styles";
import { Calendar } from "react-feather";
import EventCardCarousel from "../../components/Carousel";
import EventCard from "../../components/EventCard";
import testImg from "../../assets/Img/testImg.png";

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
    id: 2,
    title: "종료된 행사 테스트",
    content: "첫 event 내용",
    image: testImg,
    start: "2023-09-23T00:00:00.000Z",
    end: "2023-09-24T00:00:00.000Z",
    major_advisor: "컴퓨터",
    like: 0,
    dislike: 0,
    expired: true,
    calendar_title: "test title",
    calendar_content: null,
    calendar_show: true,
  },
  {
    id: 3,
    title: "1001 ~ 24년에 끝나는 행사",
    content: "1241",
    image: testImg,
    start: "2023-10-01T00:00:00.000Z",
    end: "2024-02-07T00:00:00.000Z",
    major_advisor: "컴퓨터",
    like: 101,
    dislike: 30,
    expired: false,
    calendar_title: null,
    calendar_content: null,
    calendar_show: false,
  },
  {
    id: 23,
    title: "23-2학기 전체수강신청 공지 안내1",
    content: "안녕하세요 학부사무실입니다.\n23-2학기 전체 수강신청...",
    image: testImg,
    date: "2024-08-27T12:34:56Z",
    major_advisor: "COMPUTER",
    like: 101,
    dislike: 10,
    priority: "EMERGENCY",
  },
  {
    id: 24,
    title: "2023-2학기 수강신청 유의사항 안내2",
    content: "소프트웨어학부 수강신청 공지사항 및 참고 사항 안내\n\n...",
    image: testImg,
    date: "2024-08-30T13:25:05Z",
    major_advisor: "SOFTWARE",
    like: 87,
    dislike: 8,
    priority: "EMERGENCY",
  },
  {
    id: 24,
    title: "2023-2학기 수강신청 유의사항 안내3",
    content: "소프트웨어학부 수강신청 공지사항 및 참고 사항 안내\n\n...",
    image: testImg,
    date: "2024-08-30T13:25:05Z",
    major_advisor: "SOFTWARE",
    like: 87,
    dislike: 8,
    priority: "EMERGENCY",
  },
  {
    id: 24,
    title: "2023-2학기 수강신청 유의사항 안내4",
    content: "소프트웨어학부 수강신청 공지사항 및 참고 사항 안내\n\n...",
    image: testImg,
    date: "2024-01-03T13:25:05Z",
    major_advisor: "COMPUTER",
    like: 87,
    dislike: 8,
    priority: "EMERGENCY",
  },
  {
    id: 24,
    title: "2023-2학기 수강신청 유의사항 안내5",
    content: "소프트웨어학부 수강신청 공지사항 및 참고 사항 안내\n\n...",
    image: testImg,
    date: "2024-01-05T13:25:05Z",
    major_advisor: "SOFTWARE",
    like: 87,
    dislike: 8,
    priority: "EMERGENCY",
  },
];
const MainPage = () => {
  // const [alerts, setAlerts] = useState<AlertResponse[]>([]);
  const [showRedDot, setShowRedDot] = useState<boolean>(true);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % alerts.length);
    }, 5000);
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
      <s.Group>
        <s.Header>
          <s.Icon src={AlertSrc} alt="Alert" />
          {/* {alertError ? ( */}
          {!alerts ? (
            // <s.Meta>{alertError}</s.Meta>
            <s.Meta>지금은 중요 공지가 없습니다.</s.Meta>
          ) : (
            <s.AlertList key={currentAlertIndex}>
              {alerts[currentAlertIndex].title}
            </s.AlertList>
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
      <RCalendar />
    </s.MainList>
  );
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
