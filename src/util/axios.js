import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8080/api"
    // baseURL: "https://khee-recollection-backend.herokuapp.com/api"
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;