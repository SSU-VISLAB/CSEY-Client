import { useQuery, useQueryClient } from "@tanstack/react-query";
import { login } from "../axios";
import { getUserInfo, loginResponse } from "../axios/user";
import { User } from "../context/user";

export const loginQuery = () => {
  const info = useQuery({
    queryKey: ['login'],
    queryFn: () => login(),
    enabled: !!(localStorage.getItem('kakao_id') && localStorage.getItem('kakao_accessToken')),
    retry: false,
    staleTime: Infinity,
    select(data) {
      if ('new_kakao_access_token' in data) {
        const { new_kakao_access_token, new_kakao_refresh_token, new_expires_in } = data;
        const currentDate = new Date();
        console.log('new kakao token received');
        localStorage.setItem('kakao_accessToken', new_kakao_access_token);
        localStorage.setItem('kakao_refreshToken', new_kakao_refresh_token);
        localStorage.setItem('kakao_expires_in', currentDate.setSeconds(currentDate.getSeconds() + +new_expires_in).toString());
      }
      return data
    },

  });
  return info;
};

export const getUserInfoQuery = () => {
  const client = useQueryClient();
  const loginData = client.getQueryData<loginResponse>(["login"]);
  const info = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(loginData.id),
    enabled: !!loginData,
    staleTime: Infinity,
    select(data) {
      const userData = new User(data);

      return loginData && userData
    }
  })

  return info;
}
