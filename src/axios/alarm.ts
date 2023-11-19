import axios from "axios";
import { IAlarm } from "../context/user";

export function getAlarms(id: number) {
  console.log('get Alarms called');
  return axios.get(`/api/${id}/alarms`).then(res => res.data);
}

export function setAlarm(alarm: Partial<IAlarm>) {
  console.log('set alarm called');
  return axios.put<typeof alarm>(`/api/${localStorage.getItem('kakao_id')}/alarms`, alarm);
}