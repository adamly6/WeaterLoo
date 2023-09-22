<template>
  <div class="charts">
    <div class="button-bar">
      <button
        class="btn tempButton"
        @click="showTempChart"
        :class="{ activeButton: selectedChart === 'temp' }"
      >
        Temp
      </button>
      <button
        class="btn humButton"
        @click="showHumidityChart"
        :class="{ activeButton: selectedChart === 'humidity' }"
      >
        Humidity
      </button>
    </div>
    <div class="chart" v-if="selectedChart === 'temp'">
      <TempChart />
    </div>
    <div class="chart" v-else-if="selectedChart === 'humidity'">
      <HumidityChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import "../assets/rightDashboard.css";
import TempChart from "./TempChart.vue";
import HumidityChart from "./HumidityChart.vue";

export default defineComponent({
  name: "charts-component",
  components: {
    TempChart,
    HumidityChart,
  },
  setup() {
    const selectedChart = ref("temp");

    const showTempChart = () => {
      selectedChart.value = "temp";
    };

    const showHumidityChart = () => {
      selectedChart.value = "humidity";
    };

    onMounted(() => {
      selectedChart.value = "temp";
    });

    return {
      selectedChart,
      showTempChart,
      showHumidityChart,
    };
  },
});
</script>
