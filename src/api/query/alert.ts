import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAlertById, getAlerts } from "../axios/alert";

export const getAlertsQuery = () => {
    const queryClient = useQueryClient();   // 캐싱데이터 저장공간
    const alertsQuery = useQuery({
        queryKey: ["alerts"],
        queryFn: getAlerts,
    });

    return alertsQuery;
}

export const getAlertByIdQuery = (targetId) => {
    const alertByIdQuery = useQuery({
        queryKey: ["alerts", targetId],
        queryFn: () => getAlertById(targetId),
        refetchInterval: 5000,
        refetchIntervalInBackground: true,
    });

    return alertByIdQuery;
}
