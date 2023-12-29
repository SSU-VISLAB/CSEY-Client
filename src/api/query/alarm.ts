import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "../../context/user";
import { setAlarm } from "../axios/alarm";

export const setAlarmMutation = () => {
  const queryClient = useQueryClient();
  const setAlarmMutation = useMutation({
    mutationFn: setAlarm,
    onMutate(nextAlarm) {
      const userInfo = queryClient.getQueryData<User>(['userInfo']);
      const prevAlarms = userInfo.alarm;
      const nextAlarms = { ...prevAlarms, ...nextAlarm };
      userInfo.alarm = nextAlarms;
      return { prevAlarms, nextAlarms };
    },
    onError(error, nextAlarm, context) {
      queryClient.getQueryData<User>(['userInfo']).alarm = context.prevAlarms;
    }
  })
  return setAlarmMutation;
}