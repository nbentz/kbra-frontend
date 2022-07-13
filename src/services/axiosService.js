import Axios from "axios";

Axios.interceptors.request.use( config => {
    config.baseURL = "https://kbra-address-hw-backend.herokuapp.com/api"
    return config;
});