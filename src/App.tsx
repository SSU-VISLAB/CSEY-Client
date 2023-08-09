import BottomNavbar from "./components/BottomNavbar";
import { Div } from "./AppStyles";
import { AlarmArray, dataArray } from "./components/InnerListItem/menuList";
import { AlarmSetting, Setting } from "./components/InnerListItem";
import { useState } from "react";
import MainPage from "./pages/MainPage";
import NoticePage from "./pages/NoticePage";
import LinktreePage from "./pages/LinktreePage";
import { Route, Routes } from "react-router-dom";

function App() {
  // MY페이지 테스트용
  const [settingPage, setSettingPage] = useState(true);
  const goBack = () => setSettingPage(!settingPage);
  dataArray[2].content[1].onClick = goBack;
  return (
    <Div>
        <Routes>
          <Route path="Terrace" element={<>테라스 페이지</>} />
          <Route path="Notification" element={<NoticePage />} />
          <Route path="/Main" element={<MainPage />} />
          <Route path="LinkTree" element={<LinktreePage/>} />
          <Route path="/My" element={settingPage ? <Setting dataArray={dataArray} /> : <AlarmSetting dataArray={AlarmArray} goBack={goBack} />} />
        </Routes>
      <BottomNavbar />
    </Div>
  );
}

export default App;
