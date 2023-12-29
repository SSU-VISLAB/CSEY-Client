import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { NavigateFunction } from "react-router";
import { IUser } from "../../context/user";
export type loginResponse = IUser;
export function login(id: number, kakao_accessToken: string) {
  console.log('login called');
  return axios.post('/api/login',
    {
      id,
      kakao_accessToken,
    },
    { withCredentials: true }
  ).then(({ data }) => {
    console.log({ data })
    return data as loginResponse
  });
}

export const kakaoLogout = async (client: QueryClient, navigate: NavigateFunction) => {
  console.log('logout called');
  return axios.post('/api/logout', {
    accessToken: JSON.parse(localStorage.getItem('info')).accessToken
  }).then(() => {
    localStorage.removeItem('info');
    client.removeQueries({ queryKey: ['login'] });
    client.removeQueries({ queryKey: ['userInfo'] });
    client.removeQueries({ queryKey: ['getAlarms'] });
    navigate('/My', { replace: true });
  });
}

export const getUserInfo = async (id: number) => {
  console.log('getUserInfo called');
  return axios.get(`/api/users/info/${id}`).then(res => res.data);
}