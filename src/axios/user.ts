import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { NavigateFunction } from "react-router";
export type loginResponse = {
  accessToken: string;
  refreshToken: string;
  name: string;
  id: number;
  new_kakao_access_token?: string;
  new_kakao_refresh_token?: string;
  new_expires_in?: number;
}

export function login() {
  console.log('login called');
  return axios.post('/api/login',
    {
      id: localStorage.getItem('kakao_id'),
      kakao_accessToken: localStorage.getItem('kakao_accessToken'),
      kakao_refreshToken: localStorage.getItem('kakao_refreshToken'),
      expired: localStorage.getItem('kakao_expires_in')
    },
    { withCredentials: true }
  ).then(res => res.data as loginResponse);
}

export const kakaoLogout = async (client: QueryClient, navigate: NavigateFunction) => {
  console.log('logout called');
  return axios.post('/api/logout', {
    kakao_accessToken: localStorage.getItem('kakao_accessToken')
  }).then(() => {
    localStorage.removeItem('kakao_id');
    localStorage.removeItem('kakao_accessToken');
    localStorage.removeItem('kakao_refreshToken');
    localStorage.removeItem('kakao_expires_in');
    client.removeQueries({ queryKey: ['login'] });
    navigate('/My');
  });
}

export const getUserInfo = async (id: number) => {
  console.log('getUserInfo called');
  return axios.get(`/api/users/${id}`).then(res => res.data);
}