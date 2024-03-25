import { store } from "../app/store";
import axios from "axios";

export const BASE_URL = 'http://127.0.0.1:8000/api/';


axios.interceptors.request.use(function (config) {
    const { user } = store.getState()
    if(user.isAuth){
        config.headers.Authorization = `${user.token.token_type} ${user.token.access_token}`;
    }
    // Do something before request is sent
    return config;
});