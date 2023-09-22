<template>
  <canvas id="myChart"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import "../assets/rightDashboard.css";
import { Chart, ChartConfiguration } from "chart.js/auto";
import EventBus from "../eventBus";
import weatherService from "../services/weatherService";
import { HourlyTemperature } from "../models/HourlyTemperature";

export default defineComponent({
  name: "temp-chart",
  components: {},
  data() {
    return {
      cityId: "" as any,
      hourlyTemperatures: [] as HourlyTemperature[],
    };
  },

  setup() {
    const hours = ["6", "7", "8", "9", "10", "11", "12"];
    const temperatures = [12, 15, 20, 20, 22, 25, 23];

    const data = {
      labels: hours,
      datasets: [
        {
          label: "Temperature",
          backgroundColor: "rgba(34,35,94)",
          borderRadius: 30,
          barThickness: 20,
          data: temperatures,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              color: "white",
              font: {
                size: 20,
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "white",
              font: {
                size: 20,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };

    onMounted(() => {
      const canvasTag = document.getElementById("myChart") as HTMLCanvasElement;
      new Chart(canvasTag, config);
    });
  },

  // created() {
  //   EventBus.on("activeItemValue", (value) => {
  //     this.cityId = value;
  //     weatherService
  //       .getHourlyTemperatures(this.cityId)
  //       .then((hourlyTemperatures) => {
  //         this.hourlyTemperatures = hourlyTemperatures;
  //       });

  //     console.log(this.hourlyTemperatures);
  //   });
  // },
});
</script>
