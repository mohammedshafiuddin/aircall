import axios from 'axios';

// const baseURL = 'https://10.2.2.7/';
// const baseURL = 'https://10.1.1.12/';
// const baseURL = 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/';
const baseURL = 'https://cerulean-marlin-wig.cyclic.app/';
// const baseURL = '/';

const axiosInstance = axios.create({
  baseURL: baseURL
,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 90000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
  
    return Promise.reject(error);
  }
);


export default axiosInstance;
export { baseURL };
