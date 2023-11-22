import { useQuery, useQueryClient } from "@tanstack/react-query";
import { login } from "../axios";
import { getUserInfo, loginResponse } from "../axios/user";
import { User } from "../context/user";

export const loginQuery = () => {
  console.log('loginQuery called')
  const info = useQuery({
    queryKey: ['login'],
    queryFn: () => login(),
    enabled: !!(localStorage.getItem('kakao_id') && localStorage.getItem('kakao_accessToken')),
    retry: false,
    staleTime: Infinity,
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
