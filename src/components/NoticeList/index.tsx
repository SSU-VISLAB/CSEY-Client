import { NoticeType } from "../../types";
import * as s from "../../pages/NoticePage/styles";


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
    <s.ContentGroup>
      <s.NoticeContent>
        <s.NoticeGroup>
          <s.Line>
            <s.Meta bold>{title}</s.Meta>
          </s.Line>
          {priority == "일반" && (
            <s.Line>
              <s.Description dangerouslySetInnerHTML={{ __html: content }} />
            </s.Line>
          )}
          <s.Line>
            <s.Time>{formatDate(date)}</s.Time>
          </s.Line>
        </s.NoticeGroup>
        {priority == "일반" && image && (
          <s.NoticeSrc src={image} alt={title}></s.NoticeSrc>
        )}
      </s.NoticeContent>
    </s.ContentGroup>
  );
};
