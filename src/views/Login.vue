<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" />
      </div>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
// import { apiClient } from "../services/axiosCalls";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["loggingIn", "loginError", "accessToken"]),
  },
  methods: {
    ...mapActions(["loginUser"]),
    submitForm() {
      this.loginUser({
        grant_type: "password",
        client_id: "2",
        client_secret: "GjUJ5tqVliDdTadQDn4eQYQPUtLKjRLICu0qmrTR",
        scope: "*",
        username: this.username,
        password: this.password,
      })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          if (localStorage.getItem("accessToken")) {
            this.$router.push({
              name: "dashboard",
            });
          } else {
            this.$router.push({
              name: "login",
            });
          }
        });
    },
  },
};
</script>

<style></style>
