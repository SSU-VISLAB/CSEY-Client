import { AlertType } from "../../../types";
import { ContentGroup, ContentRow, Meta } from "../styles";
import { AlertContent, Time } from "./styles";

function timeSince(dateString: string) {
  const now = new Date();
  const past = new Date(dateString);
  const seconds = Math.floor((+now - +past) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}일 전`;
  } else if (hours > 0) {
    return `${hours}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else {
    return '방금 전';
  }
}

export const AlertList = ({ alert: {date, title} }: {alert: AlertType}) => {
    return (
      <ContentGroup>
        <ContentRow>
          <AlertContent color={"#F3CCC1"}>
            <Time bold color="white" size>
              {timeSince(date)}
            </Time>
            <Meta bold>{title}</Meta>
          </AlertContent>
        </ContentRow>
      </ContentGroup>
    );
  };
  
  