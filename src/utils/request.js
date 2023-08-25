import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api',
});

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : { status: response.status };
}, function (error) {
    const res = {};
    res.data = (error.response.data);
    res.status = (error.response.status);
    res.headers = (error.response.headers);
    return res;
});

export default instance;