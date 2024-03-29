import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEventById, getEvents } from "../axios/event";
import { EventType } from "../../types";

export const getEventsQuery = () => {
    const queryClient = useQueryClient();   //캐싱데이터 저장공간
    const eventsQuery = useQuery<EventType[]>({
        queryKey: ["events"],
        queryFn: () => getEvents(),
    })

    console.log(eventsQuery.data)
    return eventsQuery;
}

export const getEventByIdQuery = (targetId) => {
    const eventByIdQuery = useQuery({
        queryKey: ["events", targetId],
        queryFn: () => getEventById(targetId),
        refetchInterval: 5000,
        refetchIntervalInBackground: true,
    })
    // if (eventByIdQuery.isPending) return 
    return eventByIdQuery;
}