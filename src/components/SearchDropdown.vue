<template>
  <div class="custom-input">
    <model-select
      :options="options"
      v-model="item"
      placeholder="Search city"
      class="custom-select"
      @update:modelValue="onSelect(item.value, item.text)"
      :value="searchText"
      @input="(searchText = $event.target.value), filter(searchText)"
    >
    </model-select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../assets/dashBoard.css";
import { ModelSelect } from "vue-search-select";
import axios from "axios";
import { City } from "../models/City";
import { Option } from "../models/Option";
import userService from "@/services/userService";
import authService from "@/services/authService";
import EventBus from "../eventBus";

export default defineComponent({
  data() {
    return {
      options: [] as Option[],
      item: {
        value: "",
        text: "",
      },
      searchText: "",
    };
  },
  methods: {
    onSelect(value: string, text: string) {
      if (typeof value === "undefined" || typeof text === "undefined") {
        return;
      }
      let userId = authService.getAuthenticatedUserId();
      userService.addCity(value, text, userId);
      EventBus.emit("cityAdded");
    },
    reset() {
      // this.options = this.options.filter(({ value }) => value !== itemValue);
      this.item.value = "";
      this.item.text = "";
    },
    selectFromParentComponent1() {
      this.item = this.options[0];
    },

    async filter(searchText: string) {
      if (searchText.length <= 2) {
        return;
      }
      const response = await axios.get<City[]>("city-list.json");
      const filteredCities = response.data.filter((city) =>
        city.name.toLowerCase().includes(searchText.toLowerCase())
      );
      const cityOptions = filteredCities.map((city) => ({
        text: `${city.name}, ${city.country}`,
        value: city.id,
      }));
      this.options = cityOptions;
    },
  },

  components: {
    ModelSelect,
  },
});
</script>
