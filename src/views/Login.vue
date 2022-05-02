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
      <button>Login</button>
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
    };
  },
  methods: {
    submitForm() {
      // if (
      //   this.email === "" ||
      //   !this.email.includes("@") ||
      //   this.password.length < 6
      // ) {
      //   this.formIsValid = false;
      //   return;
      // }
      this.$store
        .dispatch("loginUser", (this.email, this.password))
        .then(() => {
          this.$router.push({
            name: "dashboard",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
