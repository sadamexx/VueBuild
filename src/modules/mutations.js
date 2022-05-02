export const mutations = {
  SET_USER(state, { username, password }) {
    state.username = username;
    state.password = password;
  },
};
