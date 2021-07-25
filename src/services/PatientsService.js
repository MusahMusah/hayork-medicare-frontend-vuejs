import apiClient from '../apis/Api'

export default {
  async registerPatient(payload) {
    const res = await apiClient.post("/patient", payload)
    return res
  },
  async getAllPatients() {
    const res = await apiClient.get("/patient")
    return res
  },
  async getSingleWorker(payload) {
    const res = await apiClient.get(`/Patients/${payload}`)
    return res
  },
};
