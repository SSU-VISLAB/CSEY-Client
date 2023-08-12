import React, { useState } from "react";
import HeaderLogo from "../../components/HeaderLogo";
import * as s from "./styles";

interface AlertInterface {
  
}
const NoticePage = () => {
  const [alerts, setAlerts] = useState<AlertInterface[]>([]);
  return (
    <s.Wrapper>
      <HeaderLogo/>
    </s.Wrapper>
  );
};

export default NoticePage;
