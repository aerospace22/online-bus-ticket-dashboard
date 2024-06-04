<script lang="ts" setup>
import { reactive } from "vue";
import { useHead } from "@unhead/vue";
import { AuthService } from "@/services";

const state = reactive({
  loading: false,
  credentials: {
    email: "admin@domain.com",
    password: "password",
  },
});

const handleLogin = async () => {
  state.loading = true;
  return await AuthService.login(state.credentials).finally(() => {
    setTimeout(() => {
      state.loading = false;
    }, 2000);
  });
};

useHead({
  title: "Log In | Backoffice Dashboard",
});
</script>

<template>
  <AuthLayout>
    <form class="flex flex-col gap-3" @submit.prevent="handleLogin">
      <h1 class="text-center text-gray-700 text-md font-bold">BACKOFFICE DASHBOARD MANAGEMENT</h1>

      <div class="w-full flex flex-col gap-3">
        <input
          v-model="state.credentials.email"
          type="email"
          class="w-full h-[45px] text-xs text-gray-700 border border-gray-300 rounded px-3"
          placeholder="Enter e-mail"
          autofocus
          required
        />
        <input
          v-model="state.credentials.password"
          type="password"
          class="w-full h-[45px] text-xs text-gray-700 border border-gray-300 rounded px-3"
          placeholder="Enter password"
          required
        />
        <a href="#" class="text-xs text-blue-700 text-right underline">Reset Password</a>
        <button
          class="w-full h-[45px] text-xs text-white bg-blue-600 rounded-md"
          :class="{ 'bg-blue-200 hover:cursor-not-allowed': state.loading }"
          :disabled="state.loading"
        >
          LOGIN
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<style lang="scss" scoped></style>
