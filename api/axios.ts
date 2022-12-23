import axios from "axios";

const api = axios.create({
  timeout: 60000,
});

// api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(st.accessToken())}`;
// axios.defaults.headers.post['Authorization'] = `Bearer ${st.accessToken()}`;

api.interceptors.request.use(
  function (res) {
    // Do something before request is sent
    return res;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {

    return response;
  },
  function (error) {

    return Promise.reject(error);
  }
);

export default api;
