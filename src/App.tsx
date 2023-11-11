import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Div } from "./AppStyles";
import BottomNavbar from "./components/BottomNavbar";
import LinktreePage from "./pages/LinktreePage";
import MainPage from "./pages/MainPage";
import { AlarmSetting, Setting } from "./pages/MyPage";
import { AlarmArray, dataArray } from "./pages/MyPage/menuList";
import NoticePage from "./pages/NoticePage";
import TerracePage from "./pages/TerracePage";

function App() {
  // MY페이지 테스트용
  const [settingPage, setSettingPage] = useState(true);
  const goBack = () => setSettingPage(!settingPage);
  dataArray[2].content[1].onClick = goBack;
  return (
    <Div>
      <Routes>
        <Route path="Terrace" element={<TerracePage />} />
        <Route path="Notification" element={<NoticePage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="LinkTree" element={<LinktreePage />} />
        <Route path="/My" element={settingPage ? <Setting dataArray={dataArray} /> : <AlarmSetting dataArray={AlarmArray} goBack={goBack} />} />
      </Routes>
      <BottomNavbar />
    </Div>
  );
}

export default App;
