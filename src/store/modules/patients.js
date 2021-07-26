import PatientsService from "@/services/PatientsService";

const state = {
    patients: [],
    singlePatient: [],
}

// getters
const getters = {
}

// mutations
const mutations = {
    SET_GET_ALL_PATIENTS(state, data) {
        return state.patients = data
    },
    SET_SINGLE_PATIENT(state, data) {
        return state.singlePatient = data
    },
};

// actions
const actions = {
    async registerPatient(_, payload) {
       const res = PatientsService.registerPatient(payload)
       return res
    },
    async getAllPatients({ commit }, payload) {
        const res = await PatientsService.getAllPatients(payload)
        commit('SET_GET_ALL_PATIENTS', res.data.data)
    },
    async getSinglePatient({ commit }, payload) {
        const res = await PatientsService.getSinglePatient(payload)
        commit('SET_SINGLE_PATIENT', res.data.data)
        return res
    },
    addEncounter(_, payload) {
        const res = PatientsService.addEncounter(payload)
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