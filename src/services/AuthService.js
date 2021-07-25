import apiClient from '../apis/Api'
import Csrf from '../apis/Csrf'

export default {
  async login(payload) {
    await Csrf.getCookie();
    return apiClient.post("/login", payload);
  },
  async getAuthUser() {
    return await apiClient.get("/users/me");
  },
  logout() {
    return apiClient.post("/logout");
  },
  async forgotPassword(payload) {
    await Csrf.getCookie();
    return apiClient.post("/forgot-password", payload);
  },
  async resetPassword(payload) {
    await Csrf.getCookie();
    return apiClient.post("/reset-password", payload);
  },
  updatePassword(payload) {
    return apiClient.put("/user/password", payload);
  },
  async registerUser(payload) {
    await Csrf.getCookie();
    return apiClient.post("/register", payload);
  },
  sendVerification(payload) {
    return apiClient.post("/email/verification-notification", payload);
  },
  updateUser(payload) {
    return apiClient.put("/user/profile-information", payload);
  },
};
