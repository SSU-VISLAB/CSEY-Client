import axios from "axios";

export function getEvents() {
    console.log('get Events called');
    return axios.get(`/posts/events`).then(res => res.data);
}

export function getEventById(targetId) {
    console.log('get Events called');
    return axios.get(`/posts/events/${targetId}`).then(res => res.data);
}