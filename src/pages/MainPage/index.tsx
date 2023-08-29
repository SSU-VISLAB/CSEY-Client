import React, { useEffect, useState } from "react";
import EventModal from "../../components/EventModal";
import HeaderLogo from "../../components/HeaderLogo";
import * as s from "./styles";
import modalData from "../../tmp/modalData";
import axios from "axios";
import AlertSrc from "../../assets/Icons/MainAlertIcon.png";
import {Calendar} from "./calendar";

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
  major_advisor: "COMPUTER" | "SOFTWARE";
  like: number;
  dislike: number;
  priority: "EMERGENCY" | "GENERAL";
}

const MainPage = () => {
  const [alerts, setAlerts] = useState<AlertResponse[]>([]);
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
        setAlertError("지금은 긴급 공지가 없습니다.");
      });
  }, []);

  return (
    <s.MainList>
      <HeaderLogo />
      <s.Group>
        <s.Header>
          <s.Icon src={AlertSrc} alt="Alert" />
          {alertError ? (
            <s.Meta bold>{alertError}</s.Meta>
          ) : (
            alerts.map((alert, i) => (
              <AlertList
                key={i}
                id={alert.id}
                title={alert.title}
                content={alert.content}
                image={alert.image}
                date={alert.date}
                major_advisor={alert.major_advisor}
                like={alert.like}
                dislike={alert.dislike}
                priority={alert.priority}
              />
            ))
          )}
        </s.Header>
      </s.Group>
      <Calendar/>
    </s.MainList>
  );
};

const AlertList = ({ title }: AlertResponse) => {
  const [isHovered, setIsHovered] = useState(false);

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
