import BottomNavbar from "./components/BottomNavbar";
import { Div } from "./AppStyles";
import Setting, { SettingCardData } from "./components/InnerListItem";
import { dataArray } from "./components/InnerListItem/menuList";

function App() {
  return (
    <Div>
      <Setting dataArray={dataArray}/>
      <BottomNavbar />
    </Div>
  );
}

export default App;
