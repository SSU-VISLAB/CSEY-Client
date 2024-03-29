import { memo, useEffect, useState } from "react";
import KakaoLogin from "react-kakao-login";
import { Props } from "react-kakao-login/lib/types";
import { useNavigate } from "react-router-dom";
import { loginQuery } from "../../api/query/user";

export const Login = memo(() => {
  const navigate = useNavigate();
  const [{ id, access_token }, setLoginData] = useState({ id: undefined, access_token: undefined });
  const { isSuccess, data } = loginQuery(id, access_token);

  const onSuccess: Props['onSuccess'] = async ({ response, profile }) => {
    console.log('kakao login success', { response, profile });
    const { id } = profile;
    const { access_token } = response;
    setLoginData({ id, access_token });
  }

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('info', JSON.stringify(data));
      navigate('/My', { replace: true });
    }
  }, [isSuccess])

  return (
    <>
      <KakaoLogin
        token="b958ef2c36fbd4932218114b53bc8328" // TODO: 환경변수화
        onSuccess={onSuccess}
        onFail={(error) => console.log({ error })}
        onLogout={(token) => console.log(token)}
      ></KakaoLogin>
    </>
  )
})