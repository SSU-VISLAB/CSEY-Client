import axios from "axios";

export function getEvents() {
    console.log('get Events called');
    return axios.get(`http://203.253.21.193:7070/api/posts/events`).then(res => res.data);
}

export function getEventById(targetId) {
    console.log('get Events called');
    return axios.get(`http://203.253.21.193:7070/api/posts/events/${targetId}`).then(res => res.data);
}