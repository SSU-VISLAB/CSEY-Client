import axios from "axios";

export function getAlerts() {
    console.log('get Alerts called');
    return axios.get(`/api/posts/alerts`).then(res => res.data);
}

export function getAlertById(targetId) {
    console.log('get Alerts called');
    return axios.get(`/api/posts/alerts/${targetId}`).then(res => res.data);
}