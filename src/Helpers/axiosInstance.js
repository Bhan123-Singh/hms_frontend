import axios from 'axios';  // use for backend call or network call
const BASE_URL='http://localhost:5002/api/v1';

const axiosInstance=axios.create();
axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.defaults.withCredentials=true;

export default axiosInstance