<template>
  <div class="login-form">
    <div class="form-group sign-form">
      <label for="email">{{ email }}</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="user.email"
        :class="{ 'error-input': !!emailError }"
      />
      <p class="error-message" v-if="emailError">{{ emailError }}</p>
    </div>
    <div class="form-group sign-form">
      <label for="password">{{ password }}</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="user.password"
        :class="{ 'error-input': !!passwordError }"
      />
      <p class="error-message" v-if="passwordError">{{ passwordError }}</p>
    </div>
    <button type="submit" class="btn-sign btn" @click="signInUser">
      {{ signIn }}
    </button>

    <p>
      <span>{{ dontAccount }}</span
      ><span style="margin-left: 5px"
        ><a href="/sign-up">{{ signUp }}</a></span
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "../models/User";
import usersService from "../services/userService";
import authService from "../services/authService";

import "../assets/app.css";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      email: "Email address",
      password: "Password",
      signIn: "Sign in",
      dontAccount: "You don't have an account?",
      signUp: "Sign up!",
      user: {
        email: "",
        password: "",
      },
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    async signInUser() {
      this.emailError = "";
      this.passwordError = "";

      if (!this.user.email) {
        this.emailError = "Email field cannot be empty";
      }

      if (!this.user.password) {
        this.passwordError = "Password field cannot be empty";
      }

      if (!this.emailError && !this.passwordError) {
        try {
          const users = await usersService.getUsers();
          const user = users.find((u: User) => u.email === this.user.email);

          if (user && user.password === this.user.password) {
            localStorage.setItem("isAuthenticated", "true");
            authService.setAuthenticatedUserId(user.id);
            this.$router.push("/dashboard");
          } else {
            this.passwordError = "Incorrect email or password";
          }
        } catch (error) {
          console.error("Error during login", error);
        }
      }
    },
  },
});
</script>
