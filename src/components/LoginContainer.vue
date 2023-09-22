<template>
  <div
    class="d-flex justify-content-center align-items-center w-50 p-3 mx-auto login-container"
  >
    <template v-if="isLoginForm !== false">
      <LoginForm />
    </template>

    <template v-else>
      <SignUpForm />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/LoginForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import "../assets/app.css";

export default defineComponent({
  name: "LoginContainer",
  components: {
    LoginForm,
    SignUpForm,
  },
  props: {
    isLoginForm: Boolean,
  },
  mounted() {
    console.log(this.isLoginForm);
  },
});
</script>
