import axios from "axios";

export function getAlerts() {
    console.log('get Alerts called');
    return axios.get(`/posts/alerts`).then(res => res.data);
}

export function getAlertById(targetId) {
    console.log('get Alerts called');
    return axios.get(`/posts/alerts/${targetId}`).then(res => res.data);
}