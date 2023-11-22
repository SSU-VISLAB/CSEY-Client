import { useQueryClient } from "@tanstack/react-query";
import { memo, useEffect, useState } from "react";
import KakaoLogin from "react-kakao-login";
import { Props } from "react-kakao-login/lib/types";
import { useNavigate } from "react-router-dom";
import { loginQuery } from "../../query/user";

export const Login = memo(() => {
  const client = useQueryClient();
  const navigate = useNavigate();
  const [, setIsGetKakaoInfo] = useState(false);
  // login 후 useState set으로 rerender 트리거 및 쿼리 갱신
  const { isSuccess } = loginQuery();

  const onSuccess: Props['onSuccess'] = async ({ response, profile }) => {
    console.log('kakao login success', { response, profile });
    const { id } = profile;
    const { access_token, refresh_token, expires_in } = response;
    const currentDate = new Date();
    localStorage.setItem('kakao_accessToken', access_token);
    localStorage.setItem('kakao_refreshToken', refresh_token);
    localStorage.setItem('kakao_id', id.toString());
    localStorage.setItem('kakao_expires_in', currentDate.setSeconds(currentDate.getSeconds() + +expires_in).toString())
    setIsGetKakaoInfo(true);
  }

  useEffect(() => {
    if (isSuccess) {
      console.log({ isSuccess })
      navigate('/My', { replace: true });
    }
  }, [isSuccess]);

  return (
    <>
      <KakaoLogin
        token="b958ef2c36fbd4932218114b53bc8328"
        onSuccess={onSuccess}
        onFail={(error) => console.log({ error })}
        onLogout={(token) => console.log(token)}
      ></KakaoLogin>
    </>
  )
})