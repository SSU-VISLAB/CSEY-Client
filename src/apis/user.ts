import { useQuery } from "@tanstack/react-query";
import { login } from "../axios/user";

export const useLoginQuery = () => {
  const info = useQuery({
    queryKey: ['login'],
    queryFn: () => login(),
    enabled: !!(localStorage.getItem('kakao_id') && localStorage.getItem('kakao_accessToken')),
    retry: false,
    staleTime: Infinity
  });
  if (info.data && 'new_kakao_access_token' in info.data) {
    const { new_kakao_access_token, new_kakao_refresh_token, new_expires_in } = info.data;
    const currentDate = new Date();
    console.log('new kakao token received');
    localStorage.setItem('kakao_accessToken', new_kakao_access_token);
    localStorage.setItem('kakao_refreshToken', new_kakao_refresh_token);
    localStorage.setItem('kakao_expires_in', currentDate.setSeconds(currentDate.getSeconds() + +new_expires_in).toString());
  }
  return info;
};