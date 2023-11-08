import axios from "axios";
import KakaoLogin from "react-kakao-login";
import { Props } from "react-kakao-login/lib/types";
import { useNavigate } from "react-router-dom";

const loginReq = async (id: number) => {
  try {
    const res = await axios.post('/api/login', { id }, { withCredentials: true });
    console.log({ res });
    if (res.status == 200) {
      window.localStorage.setItem('accessToken', res.data.accessToken);
      window.localStorage.setItem('refreshToken', res.data.refreshToken);
      return true;
    } else {
      throw new Error("로그인오류");
    }
  } catch (e) {
    alert(e.message);
    return false;
  }
}

const testSetAlarm = async () => {
  await axios.put('/api/2705751941/alarms', {
    alarm_push: 0
  });
}

export const Login = () => {
  const navigate = useNavigate();
  const onSuccess: Props['onSuccess'] = async ({ response, profile }) => {
    console.log({ response, profile });
    const { id } = profile;
    if (await loginReq(id)) {
      navigate('/My');
    }
  }
  return (
    <>
      <KakaoLogin
        token="b958ef2c36fbd4932218114b53bc8328"
        onSuccess={onSuccess}
        onFail={(error) => console.log({ error })}
      ></KakaoLogin>
      <button onClick={testSetAlarm}>set alarm test</button>
    </>
  )
}