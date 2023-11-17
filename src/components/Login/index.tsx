import axios from "axios";
import { useEffect, useState } from "react";
import KakaoLogin from "react-kakao-login";
import { Props } from "react-kakao-login/lib/types";
import { useNavigate } from "react-router-dom";
import { useLoginQuery } from "../../apis/user";

const testSetAlarm = async () => {
  await axios.put('/api/2705751941/alarms', {
    alarm_push: 0
  });
}

export const Login = () => {
  const navigate = useNavigate();
  const [isGetKakaoInfo, setIsGetKakaoInfo] = useState(false);

  const loginQuery = useLoginQuery();

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
    isGetKakaoInfo && navigate('/My');
  }, [isGetKakaoInfo]);

  return (
    <>
      <KakaoLogin
        token="b958ef2c36fbd4932218114b53bc8328"
        onSuccess={onSuccess}
        onFail={(error) => console.log({ error })}
        onLogout={(token) => console.log(token)}
      ></KakaoLogin>
      {/* <button onClick={testSetAlarm}>set alarm test</button> */}
    </>
  )
}