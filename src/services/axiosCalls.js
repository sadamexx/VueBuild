import axios from "axios";

const token = localStorage.getItem("token"); //moved outside of axios create

const apiClient = axios.create({
  baseURL: "https://development.api.teams.wethos.co",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json", //this line is new
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default {
  login(credentials) {
    return apiClient.post("/oath/token", credentials);
  },
};
