import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getNoticeById, getNotices } from "../axios/notice";

export const getNoticesQuery = () => {
    const queryClient = useQueryClient();   //캐싱데이터 저장공간
    const noticesQuery = useQuery({
        queryKey: ["notices"],
        queryFn: getNotices,
    })

    console.log(noticesQuery.data)
    return noticesQuery;
}

export const getNoticeByIdQuery = (targetId) => {
    const noticeByIdQuery = useQuery({
        queryKey: ["notices", targetId],
        queryFn: () => getNoticeById(targetId),
        refetchInterval: 5000,
        refetchIntervalInBackground: true,
    })
    return noticeByIdQuery;
}