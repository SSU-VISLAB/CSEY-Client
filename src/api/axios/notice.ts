import axios from "axios";

export function getNotices() {
    console.log('get notices called');
    return axios.get(`/posts/notices`).then(res => res.data);
}

export function getNoticeById(targetId) {
    console.log('get notices called');
    return axios.get(`/posts/notices/${targetId}`).then(res => res.data);
}