import apiClient from '../apis/Api'

export default {
  async registerPatient(payload) {
    const res = await apiClient.post("/patient", payload)
    return res
  },
  async addEncounter(payload) {
    const res = await apiClient.post("/patient/encounter", payload)
    return res
  },
  async getAllPatients(payload) {
    const res = await apiClient.post("/allPatients", payload)
    return res
  },
  async getSinglePatient(payload) {
    const res = await apiClient.get(`/patient/${payload}`)
    return res
  },
};
