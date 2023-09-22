<template>
  <div class="right-container">
    <Info :weatherData="weatherData" />
    <Charts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../assets/rightDashboard.css";
import Info from "./Info.vue";
import Charts from "./Charts.vue";
import EventBus from "../eventBus";
import weatherService from "../services/weatherService";

export default defineComponent({
  name: "right-dasboard",
  components: {
    Info,
    Charts,
  },
  data() {
    return {
      cityId: "" as any,
      weatherData: null as any,
    };
  },
  created() {
    EventBus.on("activeItemValue", (value) => {
      this.cityId = value;
      weatherService.getWeatherData(this.cityId).then((weatherData) => {
        this.weatherData = weatherData;
      });
    });
  },
});
</script>
