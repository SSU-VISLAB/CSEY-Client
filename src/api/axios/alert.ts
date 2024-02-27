import axios from "axios";

export function getAlerts() {
    console.log('get Alerts called');
    return axios.get(`http://203.253.21.193:7070/api/posts/alerts`).then(res => res.data);
}

export function getAlertById(targetId) {
    console.log('get Alerts called');
    return axios.get(`/api/posts/alerts/${targetId}`).then(res => res.data);
}