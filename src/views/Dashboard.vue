<template>
  <section class="dashboard">
    <div class="dashboard-container">
      <div class="container-fluid">
        <button class="btn logout">
          <font-awesome-icon icon="fa-power-off" @click="logOut" />
        </button>

        <DashboardContainer />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import DashboardContainer from "@/components/DashboardContainer.vue";
import authService from "../services/authService";
import { defineComponent } from "vue";
import "../assets/dashBoard.css";

export default defineComponent({
  name: "dash-board",
  components: {
    DashboardContainer,
  },
  methods: {
    logOut() {
      localStorage.removeItem("isAuthenticated");
      authService.logout();
      this.$router.push("/");
    },
  },
});
</script>
