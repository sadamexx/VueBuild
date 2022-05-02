import apiClient from "../services/axiosCalls";

export const actions = {
  setUser({ commit }, credentials) {
    return apiClient
      .login(credentials)
      .then((res) => {
        //what about the response data? setting up local storage
        commit("SET_USER", res.data);
        console.log("user was set successfully");
        //localStorage.setItem('token', res.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
