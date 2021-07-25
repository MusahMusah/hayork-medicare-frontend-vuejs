import PatientsService from "@/services/PatientsService";

const state = {
    patients: [],
    singleWorker: [],
}

// getters
const getters = {
}

// mutations
const mutations = {
    SET_GET_ALL_PATIENTS(state, data) {
        return state.patients = data
    },
    SET_SINGLE_WORKER(state, data) {
        return state.singleWorker = data
    },
};

// actions
const actions = {
    async registerPatient(_, payload) {
       const res = PatientsService.registerPatient(payload)
       return res
    },
    async getAllPatients({ commit }) {
        const res = await PatientsService.getAllPatients()
        commit('SET_GET_ALL_PATIENTS', res.data.data)
    },
    async getSingleWorker({ commit }, payload) {
        const res = await PatientsService.getSingleWorker(payload)
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