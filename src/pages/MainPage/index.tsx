import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertSrc from "../../assets/Icons/MainAlertIcon.png";
import HeaderLogo from "../../components/HeaderLogo";
import { RCalendar } from "./Rcalendar";
import * as s from "./styles";
import EventCardCarousel from "../../components/Carousel";
import EventCard from "../../components/EventCard";
import { getEventsQuery } from "../../api/query/event";
import { getAlertsQuery } from "../../api/query/alert";

const MainPage = () => {
  const {data: alerts} = getAlertsQuery();
  const {data: events} = getEventsQuery();
  const [showRedDot, setShowRedDot] = useState<boolean>(true);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % alerts.length());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  console.log({events});
  return (
    <s.MainList>
      <HeaderLogo />
      <s.Group>
        <s.Header>
          <s.Icon src={AlertSrc} alt="Alert" />
          {!alerts ? (
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
        {events?.map((event) => (
          !event.expired && <EventCard key={event.id} event={event}/>
        ))}
      </EventCardCarousel>
      <RCalendar />
    </s.MainList>
  );
};

export default MainPage;
