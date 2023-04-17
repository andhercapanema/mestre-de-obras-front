import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.REACT_APP_BACK_END_URL,
});

export default instance;
