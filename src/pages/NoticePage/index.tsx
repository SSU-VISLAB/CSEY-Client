import React, { useState } from "react";
import * as BottomNav from "../../components/BottomNavbar";
import HeaderLogo from "../../components/HeaderLogo";
import * as s from "./styles";
import AlertSrc from "../../assets/Icons/AlertIcon.png";
import NoticeSrc from "../../assets/Icons/NoticeIcon.png";
import testSrc from "../../assets/Img/testImg.png";
export interface AlertCardHeader {
  icon?: BottomNav.Icon;
  title: string;
}
export interface AlertCardContents {
  time: string;
  description: string;
  onClick?: () => void;
}
export interface NoticeCardContents {
  title: string;
  description?: string;
  imgSrc?: any;
  time: string;
  onClick?: () => void;
}

//테스트용 데이터
const AlertData = [
  {
    time: "2시간전",
    description: "슈게더(구 스엔) 시험기간 사용시간 연장 안내",
  },
  {
    time: "3시간전",
    description:
      "[수강신청 공지] 1학년 '컴퓨팅적 사고와 알고리즘 과목 여석증진 예정 글자길이를 늘려보아요",
  },
];
const NoticeData = [
  {
    title: "IT 대학 새내기배움터 신청 관련 공지 사항",
    time: "2023/02/02",
  },
  {
    title: "2023-2학기 수강신청 숭실사이버대 여석 확보 안내",
    description:
      "안녕하세요. 숭실에 우리를 더하다. 63대 총학생회 PLUS:SU입니다. 숭실사이버대 과목 여석이 2023-1학기에 비해 줄어들어 학우분들의 많은 요청이 있었습니다. 이에 총학생회는 08월 09일 학사팀과 미팅을 진행하여 해당 사항에 대해 논의하였고, 각 과목당 20석씩 추가하여 총 220석이 늘어나도록 조정되었습니다. 갑자기 변경된 사항인 만큼 많은 학우분들의 공지 숙지와 혼란 방지를 위해 수강신청 변경기간에 여석이 추가되는 점 양해 말씀드립니다. 감사합니다. * 과목당 20석 추가 (총 220석) * 수강신청 변경기간에 반영 9월 1일(금) ~ 9월 7일(목) 평일 10:00 ~ 15:00",
    imgSrc: testSrc,
    time: "2023/08/09",
  },
];
const NoticePage = () => {
  const [alerts, setAlerts] = useState<AlertCardContents[]>([]);
  const [notices, setNotices] = useState<NoticeCardContents[]>([]);
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
        {AlertData.length === 0 ? (
          <s.ContentGroup>
            <s.ContentRow>
              <s.Content centered backgroundColor>
                <s.Meta bold>지금은 긴급공지가 없습니다.</s.Meta>
              </s.Content>
            </s.ContentRow>
          </s.ContentGroup>
        ) : (
          AlertData.map((data, i) => (
            <AlertList
              key={i}
              time={data.time}
              description={data.description}
            />
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
        {NoticeData.map((data, i) => (
          <NoticeList
            key={i}
            title={data.title}
            description={data.description}
            imgSrc={data.imgSrc}
            time={data.time}
          />
        ))}
      </s.Group>
    </s.AlertList>
  );
};

const AlertList = ({ time, description }: AlertCardContents) => {
  return (
    <s.ContentGroup>
      <s.ContentRow>
        <s.Content backgroundColor>
          <s.Time bold color="white" size>
            {time}
          </s.Time>
          <s.Meta bold>{description}</s.Meta>
        </s.Content>
      </s.ContentRow>
    </s.ContentGroup>
  );
};

const NoticeList = ({
  title,
  description,
  imgSrc,
  time,
}: NoticeCardContents) => {
  return (
    <s.ContentGroup>
      <s.NoticeContent>
        <s.NoticeGroup>
          <s.Line>
            <s.Meta bold>{title}</s.Meta>
          </s.Line>
          {description && (
            <s.Line>
              <s.Description>{description}</s.Description>
            </s.Line>
          )}
          <s.Line>
            <s.Time>{time}</s.Time>
          </s.Line>
        </s.NoticeGroup>
        {imgSrc && <s.NoticeSrc src={imgSrc} alt={title}></s.NoticeSrc>}
      </s.NoticeContent>
    </s.ContentGroup>
  );
};

export default NoticePage;
