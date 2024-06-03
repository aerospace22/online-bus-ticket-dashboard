<script lang="ts" setup>
import { reactive } from "vue";
import { useHead } from "@unhead/vue";
import { AuthService } from "@/services";

const state = reactive({
  credentials: {
    email: "admin@domain.com",
    password: "password",
  },
});

const handleLogin = async () => {
  return await AuthService.login(state.credentials);
};

useHead({
  title: "Log In | Backoffice Dashboard",
});
</script>

<template>
  <AuthLayout>
    <form class="flex flex-col gap-3" @submit.prevent="handleLogin">
      <h1 class="text-center text-white text-sm">CUL BUS TRANSPORT</h1>
      <h1 class="text-center text-white text-md">Bookings Backoffice Dashboard</h1>

      <div>
        <input
          v-model="state.credentials.email"
          type="email"
          class="w-full h-[45px] text-xs text-gray-700 border-b-2 border-gray-200 rounded-tl-md rounded-tr-md focus:outline-none px-3"
          placeholder="Enter username"
          autofocus
          required
        />
        <input
          v-model="state.credentials.password"
          type="password"
          class="w-full h-[45px] text-xs text-gray-700 focus:outline-none rounded-bl-md rounded-br-md px-3"
          placeholder="Enter password"
          required
        />
      </div>
      <button class="w-full h-[40px] text-xs text-white bg-blue-600 rounded-md">Log In</button>
    </form>
  </AuthLayout>
</template>

<style lang="scss" scoped></style>
