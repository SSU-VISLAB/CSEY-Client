import { useQueryClient } from "@tanstack/react-query";
import { AlarmGroup, AlarmSettingContents } from "../../context/setting";
import { User } from "../../context/user";

const alarmSettingContents: AlarmGroup[] = [];
/** 알람 설정 페이지의 contents 내용에 해당하는 데이터를 반환,
 ** 모든 상태의 변경은 react query의 mutation이 캐싱중인 alarm 설정값을 직접 조작하여 관리함
 ** remount마다 새로 만들 필요가 없어 전역변수로 정의하여 재사용 하도록 함
 * @returns 로그아웃 상태일 경우 빈 배열 반환
 */
export function getAlarmSettingContents() {
  const client = useQueryClient();
  const userInfo = client.getQueryData<User>(['userInfo']);
  if (!alarmSettingContents.length && userInfo?.alarm) {
    alarmSettingContents.push(...new AlarmSettingContents(userInfo.alarm).getGroups());
    Object.freeze(alarmSettingContents);
  }
  return alarmSettingContents;
}
