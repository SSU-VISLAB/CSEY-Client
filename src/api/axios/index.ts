import axios from "axios";
import { getUserInfo, kakaoLogout, login } from "./user";

axios.defaults.baseURL = "http://203.253.21.193:7070/api";
export { getUserInfo, kakaoLogout, login };

