<template>
  <div class="city-container">
    <div class="arrow left">
      <button class="btn slide-button" @click="prevSlide">
        <font-awesome-icon icon="fa-angle-left" />
      </button>
    </div>
    <div class="slider">
      <div
        v-for="(item, index) in displayedItems"
        :key="index"
        class="slider-item"
        :class="{ active: index === 1 }"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="arrow right">
      <button class="btn slide-button" @click="nextSlide">
        <font-awesome-icon icon="fa-angle-right" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import "../assets/citySlider.css";
import { defineComponent } from "vue";
import userService from "@/services/userService";
import authService from "@/services/authService";
import EventBus from "../eventBus";

interface CitySliderData {
  items: { value: string; text: string }[];
  visibleItemCount: number;
  currentIndex: number;
}

export default defineComponent({
  data(): CitySliderData {
    return {
      items: [],
      visibleItemCount: 3,
      currentIndex: 0 as number,
    };
  },
  computed: {
    displayedItems(): { value: string; text: string }[] {
      if (this.$data.items.length === 0) {
        return [
          { value: "", text: "" },
          { value: "", text: "" },
          { value: "", text: "" },
        ];
      }

      if (this.$data.currentIndex < this.$data.items.length - 1) {
        this.emitActiveItemValue(
          this.$data.items[this.$data.currentIndex + 1].value
        );
      } else {
        this.emitActiveItemValue(this.$data.items[0].value);
      }

      const startIndex = this.$data.currentIndex;
      const endIndex = startIndex + this.$data.visibleItemCount;
      if (endIndex <= this.$data.items.length) {
        return this.$data.items.slice(startIndex, endIndex);
      } else {
        const overflow = endIndex - this.$data.items.length;
        return [
          ...this.$data.items.slice(startIndex),
          ...this.$data.items.slice(0, overflow),
        ];
      }
    },
  },
  methods: {
    nextSlide(): void {
      if (this.$data.currentIndex < this.$data.items.length - 1) {
        this.$data.currentIndex++;
      } else {
        this.$data.currentIndex = 0;
      }
    },
    prevSlide(): void {
      if (this.$data.currentIndex > 0) {
        this.$data.currentIndex--;
      } else {
        this.$data.currentIndex = this.$data.items.length - 1;
      }
    },

    emitActiveItemValue(value: string): void {
      EventBus.emit("activeItemValue", value);
    },
  },
  created() {
    const userId = authService.getAuthenticatedUserId();
    userService
      .getCitiesByUserId(userId)
      .then((cities: { id: string; name: string }[]) => {
        const cityItems = cities.map((city) => ({
          value: city.id,
          text: city.name,
        }));
        this.$data.items = cityItems;
      })
      .catch((error: Error) => {
        console.error("Błąd podczas pobierania miast użytkownika:", error);
      });

    EventBus.on("cityAdded", () => {
      const userId = authService.getAuthenticatedUserId();
      userService
        .getCitiesByUserId(userId)
        .then((cities: { id: string; name: string }[]) => {
          const cityItems = cities.map((city) => ({
            value: city.id,
            text: city.name,
          }));
          this.$data.items = cityItems;
        })
        .catch((error: Error) => {
          console.error("Błąd podczas pobierania miast użytkownika:", error);
        });
    });
  },
});
</script>
