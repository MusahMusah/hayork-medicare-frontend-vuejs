/*
 * This is the initial API interface
 * we set the base URL for the API
 */

import axios from "axios";
// import store from "@/store";
import progressFns from "@/utils/helper.js";

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/api",
  withCredentials: true, // required to handle the CSRF token
});

const { start: progressStart, stop: progressStop } = progressFns();

/*
 * Add a request interceptor
 */
// request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // NProgress.start();
    progressStart();
    return config;
  },
  error => {
    // NProgress.done();
    progressStop();
    return Promise.reject(error);
  }
);

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  (response) => {
    progressStop();
    return response;
  },
  function (error) {
    // if (
    //   error.response &&
    //   [401, 419].includes(error.response.status) &&
    //   store.getters["auth/authUser"] &&
    //   !store.getters["auth/guest"]
    // ) {
    //   store.dispatch("auth/logout");
    // }
    progressStop();
    return Promise.reject(error);
  }
);


export default apiClient
