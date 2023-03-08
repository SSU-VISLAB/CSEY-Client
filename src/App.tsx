import BottomNavbar from "./components/BottomNavbar";
import { Div } from "./AppStyles";
import { AlarmArray, dataArray } from "./components/InnerListItem/menuList";
import { AlarmSetting, Setting } from "./components/InnerListItem";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import EventModal from "./components/EventModal";
import MainPage from "./pages/MainPage";

function App() {
  // MY페이지 테스트용
  const [settingPage, setSettingPage] = useState(true);
  dataArray[2].content[1].onClick = () => setSettingPage(!settingPage);
  return (
    <Div>
      {settingPage // MY페이지 테스트용
        ? <Setting dataArray={dataArray}/>
        : <AlarmSetting dataArray={AlarmArray}/>}
      {/* <MainPage /> */}
      <BottomNavbar />
    </Div>
  );
}

export default App;
