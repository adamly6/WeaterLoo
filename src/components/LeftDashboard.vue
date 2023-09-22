<template>
  <div class="logo">
    <p>{{ logo }}</p>
  </div>
  <SearchDropdown />
  <CitySlider />
  <DaysWearherInfo />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../assets/dashBoard.css";
import SearchDropdown from "./SearchDropdown.vue";
import CitySlider from "./CitySlider.vue";
import DaysWearherInfo from "./DaysWeatherInfo.vue";

export default defineComponent({
  data() {
    return {
      logo: "WeatherLoo",
    };
  },
  components: {
    SearchDropdown,
    CitySlider,
    DaysWearherInfo,
  },
});
</script>
