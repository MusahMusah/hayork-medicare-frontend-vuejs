import router from "@/router";
import AuthService from "@/services/AuthService";

export const namespaced = true;

export const state = {
  user: null,
  loading: false,
  error: null,
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

export const actions = {
    async login({ dispatch }, payload) {
        await AuthService.login(payload)
        return dispatch('getAuthUser')
    },
    logOut({ commit, dispatch }) {
        return AuthService.logout()
        .then(() => {
            commit("SET_USER", null);
            dispatch("setGuest", { value: "isGuest" });
            if (router.currentRoute.name !== "login")
            router.push({ path: "/login" });
        })
    },
    async getAuthUser({ commit, dispatch }) {
        try {
            const response = await AuthService.getAuthUser();
            if (response.status === 200) {
                commit("SET_USER", response.data.data);
                dispatch("setGuest", { value: "isNotGuest" });
            }
        } catch (error) {
            commit("SET_USER", null);
            return error
        }
    },
    setGuest(_, { value }) {
        window.localStorage.setItem("guest", value);
    },
};

export const getters = {
  authUser: (state) => {
    return state.user;
  },
  isAdmin: (state) => {
    return state.user ? state.user.isAdmin : false;
  },
  error: (state) => {
    return state.error;
  },
  loading: (state) => {
    return state.loading;
  },
  loggedIn: (state) => {
    return !!state.user;
  },
  guest: () => {
    const storageItem = window.localStorage.getItem("guest");
    if (!storageItem) return false;
    if (storageItem === "isGuest") return true;
    if (storageItem === "isNotGuest") return false;
  },
};
