import { useQuery, useQueryClient } from "@tanstack/react-query";
import { login } from "../axios";
import { getUserInfo, loginResponse } from "../axios/user";
import { User } from "../context/user";

export const loginQuery = (id: number, kakao_accessToken: string) => {
  const info = useQuery({
    queryKey: ['login'],
    queryFn: () => login(id, kakao_accessToken),
    enabled: !!(id && kakao_accessToken),
    retry: false,
    staleTime: Infinity,
  });
  return info;
};

export const getUserInfoQuery = () => {
  const client = useQueryClient();
  const loginData = client.getQueryData<loginResponse>(['login']);
  const userInfo = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(loginData.id),
    enabled: !!loginData,
    staleTime: Infinity,
    select(data) {
      const userData = new User(data);
      return userData
    }
  })

  return userInfo;
}
