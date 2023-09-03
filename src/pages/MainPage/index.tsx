import React, { useEffect, useState } from "react";
import EventModal from "../../components/EventModal";
import HeaderLogo from "../../components/HeaderLogo";
import * as s from "./styles";
import modalData from "../../tmp/modalData";
import axios from "axios";
import AlertSrc from "../../assets/Icons/MainAlertIcon.png";
import { Calendar } from "./calendar";
import { Link } from "react-router-dom";
import { RCalendar } from "./Rcalendar";

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

// const alerts = [
//   {
//     id: 23,
//     title: "23-2학기 전체수강신청 공지 안내",
//     content: "안녕하세요 학부사무실입니다.\n23-2학기 전체 수강신청...",
//     image: "https://123456789",
//     date: "2023-08-27T12:34:56Z",
//     major_advisor: "COMPUTER",
//     like: 101,
//     dislike: 10,
//     priority: "EMERGENCY",
//   },
//   {
//     id: 24,
//     title: "2023-2학기 수강신청 유의사항 안내",
//     content: "소프트웨어학부 수강신청 공지사항 및 참고 사항 안내\n\n...",
//     image: "https://1234587899",
//     date: "2023-08-30T13:25:05Z",
//     major_advisor: "SOFTWARE",
//     like: 87,
//     dislike: 8,
//     priority: "EMERGENCY",
//   },
// ];
const MainPage = () => {
  const [alerts, setAlerts] = useState<AlertResponse[]>([]);
  const [showRedDot, setShowRedDot] = useState<boolean>(true);
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
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        setIp(response.data.ip);
      })
      .catch((error) => {
        console.log("Error fetching IP", error);
      });
    axios
      .get<AlertResponse[]>(url)
      .then((response) => {
        setAlerts(response.data);
      })
      .catch((err) => {
        console.error("Error fetching alert data:", err);
        setAlertError("오늘은 중요 공지가 없습니다.");
      });
  }, []);

  return (
    <s.MainList>
      <HeaderLogo />
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
      <RCalendar />
      {/* <Calendar></Calendar> */}
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
