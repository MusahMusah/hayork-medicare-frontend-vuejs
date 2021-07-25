import apiClient from '../apis/Api'

export default {
  async registerHealthWorker(payload) {
    const res = await apiClient.post("/healthworker", payload)
    return res
  },
  async getHealthWorkers() {
    const res = await apiClient.get("/healthworker")
    return res
  },
};
