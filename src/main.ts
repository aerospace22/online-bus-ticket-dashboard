import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import VueBarcode from "@chenfengyuan/vue-barcode";
import VueFeather from "vue-feather";

import App from "@/App.vue";
import AuthLayout from "@/layouts/auth-layout.vue";
import DashboardLayout from "./layouts/dashboard-layout.vue";
import PageHeader from "./components/shared/page-header.vue";

import appRouter from "@/router";
import "@/styles/css/main.css";
import "@/styles/sass/styles.scss";
import "ant-design-vue/dist/reset.css";
import "vue3-toastify/dist/index.css";

const app = createApp(App);
const head = createHead();
const pinia = createPinia();

/**
 * Plugins
 */
app.use(head);
app.use(appRouter);
app.use(pinia);
app.use(VueQueryPlugin);
app.use(Vue3Toasity, {
  autoClose: 3000,
  theme: "colored",
} as ToastContainerOptions);

/**
 * Package components
 */
app.component(VueQrcode.name!, VueQrcode);
app.component(VueBarcode.name!, VueBarcode);
app.component(VueFeather.name!, VueFeather);

/**
 * Local components
 */
app.component("AuthLayout", AuthLayout);
app.component("DashboardLayout", DashboardLayout);
app.component("PageHeader", PageHeader);

app.mount("#app");
