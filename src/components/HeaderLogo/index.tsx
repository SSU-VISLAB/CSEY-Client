import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styles";
import CseyLogoSrc from "/src/assets/Img/CseyLogo.png";
import VisLogo from "/src/assets/Img/VislabLogo.png";

const HeaderLogo = () => {
  return (
    <s.HeaderWrapper>
      <s.Wrapper>
        <Link to="/Main">
          <s.CseyLogo src={CseyLogoSrc} alt="CSEY Logo" />
        </Link>
        <a href="http://vis.ssu.ac.kr/">
          <s.VisLogo src={VisLogo} alt="VISlab Logo" />
        </a>
      </s.Wrapper>
      <s.BlueLine />
    </s.HeaderWrapper>
  );
};

export default HeaderLogo;
