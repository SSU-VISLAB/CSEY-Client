import React, { useState } from "react";
import * as BottomNav from "../../components/BottomNavbar";
import HeaderLogo from "../../components/HeaderLogo";
import * as s from "./styles";
import AlertSrc from "../../assets/Icons/AlertIcon.png";
import NoticeSrc from "../../assets/Icons/NoticeIcon.png";
import testSrc from "../../assets/Img/testImg.png";
import { getAlertsQuery } from "../../api/query/alert";
import { getNoticesQuery } from "../../api/query/notice";
import { AlertType, NoticeType } from "../../types";
import { AlertList } from "../../components/AlertList";
import { NoticeList } from "../../components/NoticeList";

const NoticePage = () => {
  const { data: alerts, isPending: isAlertsPending } = getAlertsQuery();
  const { data: notices, isPending: isNoticesPending } = getNoticesQuery();
  console.log({alerts})
  return (
    <s.AlertList>
      <HeaderLogo />
      <s.Group elevation={4}>
        <s.Header>
          <s.Icon src={AlertSrc} alt="Alert" />
          <s.Title padding bold>
            Alert
          </s.Title>
        </s.Header>
        {isAlertsPending ? (
          <s.ContentGroup>
            <s.ContentRow>
              <s.Content centered backgroundColor>
                <s.Meta bold>지금은 긴급공지가 없습니다.</s.Meta>
              </s.Content>
            </s.ContentRow>
          </s.ContentGroup>
        ) : (
          (alerts as AlertType[])?.map((data) => (
            <AlertList key={data.id} alert={data} />
          ))
        )}
      </s.Group>

      <s.Group elevation={4} backgroundColor>
        <s.Header>
          <s.Icon src={NoticeSrc} alt="Notice" />
          <s.Title padding bold>
            Notice
          </s.Title>
        </s.Header>
        {!isNoticesPending && notices.map((data) => (
          <NoticeList key={data.id} notice={data} />
        ))}
      </s.Group>
    </s.AlertList>
  );
};

export default NoticePage;
