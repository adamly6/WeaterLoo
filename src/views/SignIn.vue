<template>
  <section class="sign">
    <div class="container">
      <h1>{{ appName }}</h1>
      <LoginContainer :isLoginForm="isLoginForm" />
    </div>
  </section>

  <SvgBackground />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SvgBackground from "@/components/SvgBackground.vue";
import LoginContainer from "@/components/LoginContainer.vue";
import "../assets/app.css";

export default defineComponent({
  name: "SignIn",
  components: {
    SvgBackground,
    LoginContainer,
  },
  data() {
    return {
      appName: "WeatherLoo",
      isLoginForm: true,
    };
  },
});
</script>
