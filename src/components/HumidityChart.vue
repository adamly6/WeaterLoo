<template>
  <canvas id="myChart"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import "../assets/rightDashboard.css";
import { Chart, ChartConfiguration } from "chart.js/auto";

export default defineComponent({
  name: "humidity-chart",
  components: {},
  setup() {
    const hours = ["6", "7", "8", "9", "10", "11", "12"];
    const humidity = [40, 45, 50, 57, 52, 59, 64];

    const data = {
      labels: hours,
      datasets: [
        {
          label: "Humidity",
          backgroundColor: "rgba(34,35,94)",
          borderRadius: 30,
          barThickness: 20,
          data: humidity,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
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
});
</script>
