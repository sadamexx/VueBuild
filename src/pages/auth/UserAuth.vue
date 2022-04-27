<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" />
      </div>
      <p v-if="!formIsValid">
        Please enter a valid email and/or password (must be at least 6
        characters long).
      </p>
      <button>{{ submitButtonCaption }}</button>
      <button @click="switchAuthMode">{{ switchModeButtonCaption }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Signup Instead";
      } else {
        return "Login";
      }
    },
  },
  methods: {
    submitForm() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      //send http requrest
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>

<style></style>
