import { AlertType } from "../../types";
import * as s from "../../pages/NoticePage/styles";

export const AlertList = ({ alert: {date, title} }: {alert: AlertType}) => {
    function timeSince(dateString: string) {
      const now:any = new Date();
      const past:any = new Date(dateString);
      const seconds = Math.floor((now - past) / 1000);
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
    return (
      <s.ContentGroup>
        <s.ContentRow>
          <s.Content backgroundColor>
            <s.Time bold color="white" size>
              {timeSince(date)}
            </s.Time>
            <s.Meta bold>{title}</s.Meta>
          </s.Content>
        </s.ContentRow>
      </s.ContentGroup>
    );
  };
  
  