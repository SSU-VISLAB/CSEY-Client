import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAlarms } from "../axios";
import { setAlarm } from "../axios/alarm";
import { IAlarm } from "../context/user";

export const getAlarmsQuery = (id: number) => {
  const info = useQuery<IAlarm>({
    queryKey: ['getAlarms'],
    queryFn: () => getAlarms(id),
    retry: 1,
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
    select(data) {

      return data;
    },
  })
  return info;
}

export const setAlarmMutation = () => {
  const queryClient = useQueryClient();
  const setAlarmMutation = useMutation({
    mutationFn: setAlarm,
    onMutate(nextAlarm) {
      const prevAlarms = queryClient.getQueryData<IAlarm>(['getAlarms'])
      const nextAlarms = queryClient.setQueryData<IAlarm>(['getAlarms'], { ...prevAlarms, ...nextAlarm });
      return { prevAlarms, nextAlarms };
    },
    onError(error, nextAlarm, context) {
      queryClient.setQueryData<IAlarm>(['getAlarms'], context.prevAlarms);
    }
  })
  return setAlarmMutation;
}