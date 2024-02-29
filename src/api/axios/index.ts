import axios from "axios";
import { getUserInfo, kakaoLogout, login } from "./user";

axios.defaults.baseURL = "http://localhost:7070/api";
export { getUserInfo, kakaoLogout, login };

