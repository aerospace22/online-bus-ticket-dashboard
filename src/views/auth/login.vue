<script lang="ts" setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Log In | Backoffice Dashboard",
});
</script>

<template>
  <AuthLayout>
    <form class="flex flex-col gap-3">
      <h1 class="text-center text-white text-sm">CUL BUS TRANSPORT</h1>
      <h1 class="text-center text-white text-xl">Backoffice Dashboard</h1>
      <div>
        <input
          type="text"
          class="w-full h-[45px] text-xs text-gray-700 border-b-2 border-gray-200 rounded-tl-md rounded-tr-md focus:outline-none px-3"
          placeholder="Enter username"
          autofocus
          required
        />
        <input
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
