<template>
  <div class="info">
    <div class="day"><font-awesome-icon icon="fa-cloud" />Today</div>
    <div class="date">{{ formatDate(weatherData?.dt) }}</div>
    <span class="degree">{{ formatTemperature(weatherData?.main?.temp) }}</span>
    <div class="city">
      {{ weatherData?.name }}, {{ weatherData?.sys?.country }}
    </div>
    <div class="transit">
      <span>Sunrise {{ formatTime(weatherData?.sys?.sunrise) }}</span>
      <span>Sunset {{ formatTime(weatherData?.sys?.sunset) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import "../assets/rightDashboard.css";

export default defineComponent({
  name: "info-component",
  props: {
    weatherData: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  components: {},
  methods: {
    formatDate(timestamp: number) {
      const date = new Date(timestamp * 1000);
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      const month = date.toLocaleDateString("en-US", { month: "short" });
      const dayOfMonth = date.getDate();
      return `${day} ${dayOfMonth} ${month}`;
    },
    formatTemperature(temp: number) {
      if (temp !== undefined) {
        const celsius = temp - 273.15;
        return `${celsius.toFixed(0)}`;
      } else {
        return "";
      }
    },
    formatTime(timestamp: number) {
      const date = new Date(timestamp * 1000);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours.toString().padStart(2, "0")} : ${minutes
        .toString()
        .padStart(2, "0")}`;
    },
  },
});
</script>
