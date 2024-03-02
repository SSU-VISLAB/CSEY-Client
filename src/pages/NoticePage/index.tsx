import AlertSrc from "../../assets/Icons/AlertIcon.png";
import NoticeSrc from "../../assets/Icons/NoticeIcon.png";
import { getAlertsQuery } from "../../api/query/alert";
import { getNoticesQuery } from "../../api/query/notice";
import { AlertList } from "../../components/PaperList/AlertList";
import { NoticeList } from "../../components/PaperList/NoticeList";
import { PaperBox } from "../../components/PaperBox";
import { ContentGroup, ContentRow } from "../../components/PaperList/styles";
import { AlertContent } from "../../components/PaperList/AlertList/styles";
import { Icon, Meta, Wrapper, } from "./styles";

const AlertHeader = {
  icon: () => <Icon src={AlertSrc} alt="Alert" />,
  title: "Alert",
};
const NoticeHeader = {
  icon: () => <Icon src={NoticeSrc} alt="Notice" />,
  title: "Notice",
};

const NoticePage = () => {
  const { data: alerts, isPending: isAlertsPending } = getAlertsQuery();
  const { data: notices, isPending: isNoticesPending } = getNoticesQuery();
  console.log({ alerts });
  return (
    <Wrapper>
      <PaperBox color={"#fce6e0"} header={AlertHeader}>
        {isAlertsPending ? (
          <ContentGroup>
            <ContentRow>
              <AlertContent centered color={"#F3CCC1"}>
                <Meta bold>지금은 긴급공지가 없습니다.</Meta>
              </AlertContent>
            </ContentRow>
          </ContentGroup>
        ) : (
          alerts?.map((data) => <AlertList key={data.id} alert={data} />)
        )}
      </PaperBox>

      <PaperBox color={"#E4F1FD"} header={NoticeHeader}>
        {!isNoticesPending &&
          notices.map((data) => <NoticeList key={data.id} notice={data} />)}
      </PaperBox>
    </Wrapper>
  );
};

export default NoticePage;
