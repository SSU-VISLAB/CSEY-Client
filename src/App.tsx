import { useQueryClient } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Div } from "./AppStyles";
import BottomNavbar from "./components/BottomNavbar";
import LinktreePage from "./pages/LinktreePage";
import MainPage from "./pages/MainPage";
import { AlarmSetting, Setting } from "./pages/MyPage";
import NoticePage from "./pages/NoticePage";
import TerracePage from "./pages/TerracePage";

function App() {
  const client = useQueryClient();
  const loginInfo = localStorage.getItem('info');
  if (loginInfo) {
    client.setQueryData(['login'], JSON.parse(loginInfo));
  }
  console.log("APP rerender")
  return (
    <Div>
      <Routes>
        <Route path="Terrace" element={<TerracePage />} />
        <Route path="Notification" element={<NoticePage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="LinkTree" element={<LinktreePage />} />
        <Route path="/My">
          <Route index element={<Setting />} />
          <Route path="alarm" element={<AlarmSetting />} />
        </Route>
      </Routes>
      <BottomNavbar />
    </Div>
  );
}

export default App;
