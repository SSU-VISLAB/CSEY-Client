import React from "react";
import * as s from "./styles";
import CseyLogoSrc from "/src/assets/Img/CseyLogo.png";
import VisLogo from "/src/assets/Img/VislabLogo.png";

const HeaderLogo = () => {
  return (
    <s.HeaderWrapper>
      <s.Wrapper>
        <s.CseyLogo src={CseyLogoSrc} alt="CSEY Logo" />
        <a href="http://vis.ssu.ac.kr/">
          <s.VisLogo src={VisLogo} alt="VISlab Logo" />
        </a>
      </s.Wrapper>
    </s.HeaderWrapper>
  );
};

export default HeaderLogo;
