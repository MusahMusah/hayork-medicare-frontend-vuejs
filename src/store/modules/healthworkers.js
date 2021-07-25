import HealthWorkerService from "@/services/HealthWorkerService";

const state = {
    healthWorkers: [],
    singleWorker: [],
}

// getters
const getters = {
}

// mutations
const mutations = {
    SET_GET_HEALTHWORKERS(state, data) {
        return state.healthWorkers = data
    },
    SET_SINGLE_WORKER(state, data) {
        return state.singleWorker = data
    },
};

// actions
const actions = {
    async registerHealthWorker(_, payload) {
       const res = HealthWorkerService.registerHealthWorker(payload)
       return res
    },
    async getHealthWorkers({ commit }) {
        const res = await HealthWorkerService.getHealthWorkers()
        commit('SET_GET_HEALTHWORKERS', res.data.data)
    },
    async getSingleWorker({ commit }, payload) {
        const res = await HealthWorkerService.getSingleWorker(payload)
        commit('SET_SINGLE_WORKER', res.data.data)
        return res
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}