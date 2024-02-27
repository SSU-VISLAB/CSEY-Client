import axios from "axios";

export function getNotices() {
    console.log('get notices called');
    return axios.get(`http://203.253.21.193:7070/api/posts/notices`).then(res => res.data);
}

export function getNoticeById(targetId) {
    console.log('get notices called');
    return axios.get(`http://203.253.21.193:7070/api/posts/notices/${targetId}`).then(res => res.data);
}