import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { loginResponse } from "../../axios/user";
import { AlarmGroup, AlarmSettingContents } from "../../context/setting";
import { getAlarmsQuery } from "../../query/alarm";

export function useAlarmSettingContents() {
  const [alarmData, setAlarmData] = useState<AlarmGroup[]>()
  const queryClient = useQueryClient();
  const loginInfo = queryClient.getQueryData<loginResponse>(['login']);
  const { data } = getAlarmsQuery(loginInfo.id);
  useEffect(() => {
    if (!alarmData && data) {
      setAlarmData(new AlarmSettingContents(data).getGroups())
    };
  }, [data])
  return alarmData;
}
