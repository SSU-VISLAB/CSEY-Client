import axios from "axios";
import { IAlarm } from "../../context/user";

export function setAlarm(alarm: Partial<IAlarm>) {
  console.log('set alarm called');
  const loginInfo = JSON.parse(localStorage.getItem('info'));
  return axios.put<typeof alarm>(`/${loginInfo.id}/alarms`, alarm);
}