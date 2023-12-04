import { useEffect, useState } from "react";
import { AlarmGroup, AlarmSettingContents } from "../../context/setting";
import { getAlarmsQuery } from "../../query/alarm";

export function useAlarmSettingContents() {
  const [alarmData, setAlarmData] = useState<AlarmGroup[]>()
  const { data } = getAlarmsQuery(+localStorage.getItem('kakao_id'));
  useEffect(() => {
    if (!alarmData && data) {
      setAlarmData(new AlarmSettingContents(data).getGroups())
    };
  }, [data])
  return alarmData;
}
