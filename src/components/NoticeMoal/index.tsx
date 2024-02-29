import React from "react";
import * as s from "./styles";
import LikeIcon from "../../assets/Icons/LikeIcon.png";
import HateIcon from "../../assets/Icons/HateIcon.png";
import ShareIcon from "../../assets/Icons/ShareIcon.png";
import CloseBtnSrc from "../../assets/Icons/modalCloseBtn.png"
import tmpSrc from "../../assets/tmp/짱구.jpeg"
import { formatDate } from "../NoticeList";
import { getAlertByIdQuery } from "../../api/query/alert";
import { getNoticeByIdQuery } from "../../api/query/notice";

type NoticeModalProps = {
  queryId: number,
  onClose?: () => void,
  isAlert: boolean,  // true : alert, false : notice
}
const NoticeModal = React.forwardRef(({ queryId, onClose, isAlert }: NoticeModalProps, ref) => {
  const { data, isPending } = isAlert ? getAlertByIdQuery(queryId) : getNoticeByIdQuery(queryId);
  if (isPending) return (<>"Loading"</>);
  console.log({data});
  const {
    title,
    content,
    date,
    image,
    like,
    dislike } = data;
  return (
    <s.Wrapper>
      <s.CloseBtn src={CloseBtnSrc} onClick={onClose}/>
      <s.Container>
        <s.Title isAlert = {isAlert}>{title}</s.Title>
        <s.ImgContainer src={tmpSrc} />
        {/* <s.ImgContainer src={`http://localhost:3000/events/${image}`} /> */}
        <s.IconContainer>
          <s.LeftIcons>
            <s.Icon src={LikeIcon}/>
            <s.Icon src={HateIcon}/>
            <s.Icon src={ShareIcon}/>
          </s.LeftIcons>

          <s.RightIcon>
          </s.RightIcon>
        </s.IconContainer>

        <s.DateContainer>
          <s.Duration>
            {formatDate(date, true)}
          </s.Duration>
        </s.DateContainer>

        <s.ContentsWrapper isAlert={isAlert} dangerouslySetInnerHTML={{ __html: content }}/>
      </s.Container>
    </s.Wrapper>
  );
});

export default NoticeModal;
