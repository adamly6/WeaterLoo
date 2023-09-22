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
    <div class="form-group sign-form">
      <label for="confirmPassword">{{ confirmPassword }}</label>
      <input
        type="password"
        class="form-control"
        id="confirmPassword"
        v-model="confirmUserPassword"
        :class="{ 'error-input': !!confirmPasswordError }"
      />
      <p class="error-message" v-if="confirmPasswordError">
        {{ confirmPasswordError }}
      </p>
    </div>
    <button type="submit" class="btn btn-sign" @click="registerUser">
      {{ singUp }}
    </button>

    <p>
      <span>{{ haveAccount }}</span
      ><span style="margin-left: 5px"
        ><router-link to="/">{{ signIn }}</router-link></span
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "../models/User";
import usersService from "../services/userService";

import "../assets/app.css";

export default defineComponent({
  name: "SignUpForm",
  data() {
    return {
      email: "Email address",
      password: "Password",
      singUp: "Sign up",
      confirmPassword: "Confirm password",
      haveAccount: "You already have an account?",
      signIn: "Sign in!",
      user: {
        id: Math.floor(Math.random() * 10000000),
        email: "",
        password: "",
        cities: [],
      } as User,
      confirmUserPassword: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  },
  methods: {
    async registerUser() {
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";

      if (!this.user.email) {
        this.emailError = "Email field cannot be empty";
      }

      if (!this.user.password) {
        this.passwordError = "Password field cannot be empty";
      }

      if (!this.confirmUserPassword) {
        this.confirmPasswordError = "Confirm Password field cannot be empty";
      }

      if (this.user.password !== this.confirmUserPassword) {
        this.confirmPasswordError = "Passwords do not match";
      }

      if (
        !this.emailError &&
        !this.passwordError &&
        !this.confirmPasswordError
      ) {
        await usersService.saveUser(this.user);
        console.log(usersService.getUsers);
        this.$router.push("/");
      }
    },
  },
});
</script>
