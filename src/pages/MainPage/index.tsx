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
import { AlertType } from "../../types";

const MainPage = () => {
  const { data: alerts, isPending: isAlertsPending } = getAlertsQuery();
  const { data: events, isPending: isEventsPending } = getEventsQuery();
  const [showRedDot, setShowRedDot] = useState<boolean>(true);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (!isAlertsPending) {
      interval = setInterval(() => {
        setCurrentAlertIndex(
          (prevIndex) => (prevIndex + 1) % (alerts as AlertType[])?.length,
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, []);
  console.log({ events });
  return (
    <s.MainList>
      <HeaderLogo />
      <s.Group>
        <s.Header>
          <s.Icon src={AlertSrc} alt="Alert" />
          {!isAlertsPending &&
            (alerts.length === 0 ? (
              <s.Meta>지금은 중요 공지가 없습니다.</s.Meta>
            ) : (
              <s.StyledLink to="/Notification" text-decoration="none">
                <s.AlertList key={currentAlertIndex}>
                  {alerts[currentAlertIndex].title}
                </s.AlertList>
              </s.StyledLink>
            ))}
          <Link to="/Notification">
            <s.More>
              {" "}
              {showRedDot && <s.Activate />} {"더보기 >"}
            </s.More>
          </Link>
        </s.Header>
      </s.Group>
      <EventCardCarousel>
        {/* {!isEventsPending &&
          (events?.map((event) => <EventCard key={event.id} event={event} />))} */}
        {events?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventCardCarousel>
      <RCalendar />
    </s.MainList>
  );
};

export default MainPage;
