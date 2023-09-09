import React, { useState } from "react";
import * as BottomNav from "../../components/BottomNavbar";
import HeaderLogo from "../../components/HeaderLogo";
import * as s from "./styles";
import LinkSrc from "../../assets/Icons/LinkCardIcon.png";
import testSrc from "../../assets/Img/TestLogo.png";
export interface LinkContents {
  src: string;
  title: string;
}

const LinkData = [
  {
    src: "https://docs.google.com/forms/d/e/1FAIpQLSfZ053GGttfgwbn2zTd9ioC-uifpGge2KxlqyZBXjLXuanP1Q/closedform",
    title: "스터디룸(테라스) 운영 방식 관련 설문조사",
  },
  {
    src: "https://drive.google.com/file/d/1_DVarMtSe8t13n_L-HcAbHpOKTaEH5rA/view",
    title: "컴퓨터학부 소개자료",
  },
  {
    src: "https://pf.kakao.com/_ZEjFd",
    title: "컴퓨터학부 카카오톡 플러스친구",
  },
  {
    src: "https://www.facebook.com/ssucsesu",
    title: "컴퓨터학부 공식 페이스북",
  },
  {
    src: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdlHS8XrDfy1j-DOPlsP8nb7p5fSEKXM0dnQKA6bCUyntOjxg/viewform?usp=send_form",
    title: "온라인 건의함",
  },
];
const LinktreePage = () => {
  return (
    <s.AlertList>
      <HeaderLogo />
      <s.Banner src={testSrc} alt="testSrc"/>
      <s.Group elevation={4}>
        <s.Header>
          <s.Icon src={LinkSrc} alt="Alert" />
          <s.Title padding bold>
            Linktree
          </s.Title>
        </s.Header>
        {LinkData.length == 0 ? (
          <s.ContentGroup></s.ContentGroup>
        ) : (
          LinkData.map((data, i) => (
            <LinkList key={i} src={data.src} title={data.title} />
          ))
        )}
      </s.Group>
    </s.AlertList>
  );
};

const LinkList = ({ src, title }: LinkContents) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <s.ContentGroup>
      <s.ContentRow>
        <s.Content
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
          onClick={() => window.open(src, "_blank")}
        >
          <s.Meta bold>{title}</s.Meta>
        </s.Content>
      </s.ContentRow>
    </s.ContentGroup>
  );
};
export default LinktreePage;
