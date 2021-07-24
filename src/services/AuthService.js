import apiClient from '../apis/Api'
import Csrf from '../apis/Csrf'

export default {
  async login(payload) {
    await Csrf.get("/sanctum/csrf-cookie");
    return apiClient.post("/login", payload);
  },
  logout() {
    return apiClient.post("/logout");
  },
  async forgotPassword(payload) {
    await Csrf.get("/sanctum/csrf-cookie");
    return apiClient.post("/forgot-password", payload);
  },
  getAuthUser() {
    return apiClient.get("/api/users/auth");
  },
  async resetPassword(payload) {
    await Csrf.get("/sanctum/csrf-cookie");
    return apiClient.post("/reset-password", payload);
  },
  updatePassword(payload) {
    return apiClient.put("/user/password", payload);
  },
  async registerUser(payload) {
    await Csrf.get("/sanctum/csrf-cookie");
    return apiClient.post("/register", payload);
  },
  sendVerification(payload) {
    return apiClient.post("/email/verification-notification", payload);
  },
  updateUser(payload) {
    return apiClient.put("/user/profile-information", payload);
  },
};
