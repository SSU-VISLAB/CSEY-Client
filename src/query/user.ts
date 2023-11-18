import { useQuery, useQueryClient } from "@tanstack/react-query";
import { login } from "../axios";
import { loginResponse } from "../axios/user";
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

// export const getUserInfoQuery = () => {
//   const client = useQueryClient();
//   const loginData = client.getQueryData<loginResponse>(["login"]);
//   const info = useQuery({
//     queryKey: ['userInfo'],
//     queryFn: () => getUserInfo(loginData.id),
//     enabled: !!loginData,
//     staleTime: Infinity,
//     select(data) {
//       const userData = new User({
//         account: 'string',
//         activated: true,
//         createdDate: new Date(),
//         id: 12,
//         lastAccess: new Date(),
//         major: '소프트',
//         name: 'asdf'
//       }, {
//         alarm_push: true,
//         alerts_push: true,
//         events_post: '북마크',
//         event_push: true,
//         events_timer: 12,
//         major_schedule_post: true,
//         major_schedule_push: true,
//         notice_push: true
//       }, {
//         fk_bookmark_id: 12,
//         fk_event_id: 34
//       }, {
//         fk_notice_id: 12,
//         fk_read_id: 34
//       }, {
//         fk_notice_id: 12,
//         fk_user_id: 34,
//         like: true
//       }, {
//         fk_event_id: 12,
//         fk_user_id: 34,
//         like: true
//       });

//       return userData
//     }
//   })

//   return info;
// }

export const getUserInfoQuery = () => {
  const client = useQueryClient();
  const loginData = client.getQueryData<loginResponse>(["login"]);
  console.log({ loginData })
  const userData = new User({
    account: 'string',
    activated: true,
    createdDate: new Date(),
    id: 12,
    lastAccess: new Date(),
    major: '소프트',
    name: 'asdf'
  }, {
    alarm_push: true,
    alerts_push: true,
    events_post: '북마크',
    event_push: true,
    events_timer: 12,
    major_schedule_post: true,
    major_schedule_push: true,
    notice_push: true
  }, {
    fk_bookmark_id: 12,
    fk_event_id: 34
  }, {
    fk_notice_id: 12,
    fk_read_id: 34
  }, {
    fk_notice_id: 12,
    fk_user_id: 34,
    like: true
  }, {
    fk_event_id: 12,
    fk_user_id: 34,
    like: true
  });

  return loginData ? userData : undefined;

}