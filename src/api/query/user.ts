import { useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "../../context/user";
import { login } from "../axios";
import { getUserInfo, loginResponse } from "../axios/user";

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
      const { alarm, bookmark, eventLike, noticeLike, noticeRead } = data;
      return new User(loginData, alarm, bookmark, noticeRead, noticeLike, eventLike);
    }
  })

  return userInfo;
}
