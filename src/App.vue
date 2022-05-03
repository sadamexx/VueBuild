<template>
  <div id="app">
    <div id="nav">
      <h1>Welcome</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import Login from "./views/Login.vue";

export default {
  name: "app",
  // components: {
  //   Login,
  // },
  methods: {
    ...mapActions(["fetchAccessToken"]),
  },
  created() {
    this.fetchAccessToken();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
