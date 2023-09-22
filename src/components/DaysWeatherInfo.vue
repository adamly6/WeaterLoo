<template>
  <div class="days-weather">
    <div class="row day-row">
      <div class="col-2"></div>
      <div class="col-2"></div>
      <div class="col-2"></div>
      <div class="col-2 day-col">Day</div>
      <div class="col-2 night-col">Night</div>
    </div>
    <div class="row day-row">
      <div class="col-2">Day</div>
      <div class="col-2"><font-awesome-icon icon="fa-droplet" /> 54%</div>
      <div class="col-2"><font-awesome-icon icon="fa-cloud" /></div>
      <div class="col-2">24<span>&#8451;</span></div>
      <div class="col-2">15℃</div>
    </div>
    <div class="row day-row">
      <div class="col-2">Day</div>
      <div class="col-2"><font-awesome-icon icon="fa-droplet" /> 54%</div>
      <div class="col-2"><font-awesome-icon icon="fa-cloud" /></div>
      <div class="col-2">24℃</div>
      <div class="col-2">15℃</div>
    </div>
    <div class="row day-row">
      <div class="col-2">Day</div>
      <div class="col-2"><font-awesome-icon icon="fa-droplet" /> 54%</div>
      <div class="col-2"><font-awesome-icon icon="fa-cloud" /></div>
      <div class="col-2">24℃</div>
      <div class="col-2">15℃</div>
    </div>
    <div class="row day-row">
      <div class="col-2">Day</div>
      <div class="col-2"><font-awesome-icon icon="fa-droplet" /> 54%</div>
      <div class="col-2"><font-awesome-icon icon="fa-cloud" /></div>
      <div class="col-2">24℃</div>
      <div class="col-2">15℃</div>
    </div>
    <div class="row day-row">
      <div class="col-2">Day</div>
      <div class="col-2"><font-awesome-icon icon="fa-droplet" /> 54%</div>
      <div class="col-2"><font-awesome-icon icon="fa-cloud" /></div>
      <div class="col-2">24℃</div>
      <div class="col-2">15℃</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../assets/daysWeatherInfo.css";
import EventBus from "../eventBus";
import weatherService from "../services/weatherService";

export default defineComponent({
  data() {
    return {
      cityId: "" as any,
      weatherData: null as any,
    };
  },
  components: {},
  // created() {
  //   EventBus.on("activeItemValue", (value) => {
  //     this.cityId = value;
  //     weatherService.getDailyWeather(this.cityId).then((weatherData) => {
  //       // console.log("Dane pogodowe:", weatherData);
  //     });
  //   });
  // },
});
</script>
