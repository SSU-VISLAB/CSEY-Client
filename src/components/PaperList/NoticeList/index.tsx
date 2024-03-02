import { NoticeType } from "../../../types";
import * as s from "../../../pages/NoticePage/styles";
import { Description, Line, Meta, NoticeContent, NoticeContentGroup, NoticeRow, NoticeSrc } from "./styles";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}/${month}/${day}`;
}

export const NoticeList = ({
  notice: { title, content, image, date, priority },
}: {
  notice: NoticeType;
}) => {
  return (
    <NoticeContentGroup>
      <NoticeContent color={"#B0CDE8"}>
        <NoticeRow>
          <Line>
            <Meta bold>{title}</Meta>
          </Line>
          {priority == "일반" && (
            <Line>
              <Description dangerouslySetInnerHTML={{ __html: content }} />
            </Line>
          )}
          <Line>
            <s.Time>{formatDate(date)}</s.Time>
          </Line>
        </NoticeRow>
        {priority == "일반" && image && (
          <NoticeSrc src={image} alt={title}></NoticeSrc>
        )}
      </NoticeContent>
    </NoticeContentGroup>
  );
};
