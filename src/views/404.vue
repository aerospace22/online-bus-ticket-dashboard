<script lang="ts" setup>
import { useHead } from "@unhead/vue";
import LOGO_404 from "@/assets/error-404.png";

useHead({
  title: "Page not found",
});
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center gap-5">
    <img :src="LOGO_404" alt="404 logo" class="h-[250px] w-[250px]" />

    <div class="text-center mt-5">
      <h1 class="text-2xl text-gray-600 font-black">PAGE NOT FOUND</h1>
      <a href="/app/dashboard" class="text-blue-700 underline">Back to dashboard</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
