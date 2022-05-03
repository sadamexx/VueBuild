import axios from "axios";

//moved outside of axios create

// export const apiClient = () => {
//   const token = localStorage.getItem("token");
//   return axios.create({
//     baseURL: `https://development.api.teams.wethos.co`,
//     headers: {
//       "X-Requested-With": "XMLHttpRequest",
//       Accept: "application/json", //this line is new
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

const apiClient = axios.create({
  baseURL: `https://development.api.teams.wethos.co`,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  login(credentials) {
    console.log("login", credentials);
    return apiClient.post("/oauth/token", credentials);
  },
};
