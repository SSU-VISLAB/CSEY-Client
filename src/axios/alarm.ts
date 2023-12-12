import axios from "axios";
import { IAlarm } from "../context/user";

export function getAlarms(id: number) {
  console.log('get Alarms called');
  return axios.get(`/api/${id}/alarms`).then(res => res.data);
}

export function setAlarm(alarm: Partial<IAlarm>) {
  console.log('set alarm called');
  const loginInfo = JSON.parse(localStorage.getItem('info'));
  return axios.put<typeof alarm>(`/api/${loginInfo.id}/alarms`, alarm);
}