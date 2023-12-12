import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IAlarm } from "../context/user";
import { loginResponse } from "./user";

export function getAlarms(id: number) {
  console.log('get Alarms called');
  return axios.get(`/api/${id}/alarms`).then(res => res.data);
}

export function setAlarm(alarm: Partial<IAlarm>) {
  console.log('set alarm called');
  const client = useQueryClient();
  const loginData = client.getQueryData<loginResponse>(['login']);
  return axios.put<typeof alarm>(`/api/${loginData.id}/alarms`, alarm);
}