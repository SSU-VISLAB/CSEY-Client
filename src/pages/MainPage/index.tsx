import HeaderLogo from "../../components/HeaderLogo";
import { RCalendar } from "./Rcalendar";
import * as s from "./styles";
import EventCardCarousel from "../../components/Carousel";
import EventCard from "../../components/EventCard";
import { getEventsQuery } from "../../api/query/event";
import { getAlertsQuery } from "../../api/query/alert";
import AlertBanner from "../../components/AlertBanner";

const MainPage = () => {
  const { data: alerts, isPending: isAlertsPending } = getAlertsQuery();
  const { data: events, isPending: isEventsPending } = getEventsQuery();
  console.log({ events });
  return (
    <s.MainList>
      <AlertBanner isAlertsPending={isAlertsPending} alerts={alerts}/>
      {!isEventsPending && (<EventCardCarousel>
        {events?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventCardCarousel>)}
      <RCalendar />
    </s.MainList>
  );
};

export default MainPage;
