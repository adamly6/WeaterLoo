<template>
  <div class="row">
    <div class="col-lg-7 dashboard-left">
      <LeftDashboard />
    </div>

    <div class="col-lg-5 dashboard-right">
      <RightDashboard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../assets/dashBoard.css";
import LeftDashboard from "@/components/LeftDashboard.vue";
import RightDashboard from "@/components/RightDashboard.vue";

export default defineComponent({
  name: "dashboard-container",
  components: {
    LeftDashboard,
    RightDashboard,
  },
});
</script>
