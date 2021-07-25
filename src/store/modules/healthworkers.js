import HealthWorkerService from "@/services/HealthWorkerService";

const state = {
    healthWorkers: [],
}

// getters
const getters = {
}

// mutations
const mutations = {
    SET_GET_HEALTHWORKERS(state, data) {
        return state.healthWorkers = data
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}