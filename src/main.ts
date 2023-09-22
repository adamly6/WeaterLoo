import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue-next";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faCloud,
  faPowerOff,
  faAngleLeft,
  faAngleRight,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faCloud, faPowerOff, faAngleLeft, faAngleRight, faDroplet);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-search-select/dist/VueSearchSelect.css";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(BootstrapVue)
  .use(router)
  .mount("#app");
