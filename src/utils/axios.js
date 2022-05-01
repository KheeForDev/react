import axios from 'axios';

// base url to make requests to the backend service
const instance = axios.create({
    baseURL: "https://khee-note-keeper-backend.herokuapp.com"
    // baseURL: "http://localhost:8080"
})

export default instance;