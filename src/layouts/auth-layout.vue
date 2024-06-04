<script lang="ts" setup></script>

<template>
  <!-- <div class="auth-layout h-screen w-screen flex flex-row">
    <div class="w-1/3 h-screen bg-slate-100 flex flex-col items-center gap-10 px-10 pt-[6%]">
      <img :src="LOGO" alt="cul-transport-logo.png" class="w-[175px] h-[175px]" />

      <div class="w-full">
        <slot />
      </div>
    </div>
    <div class="bg w-full h-screen relative">
      <div class="overlay absolute top-0 bottom-0 left-0 right-0"></div>
    </div>
  </div> -->

  <div class="bg h-screen w-screen flex justify-center items-center relative">
    <div class="overlay absolute top-0 bottom-0 left-0 right-0"></div>
    <div class="w-[400px] bg-white rounded p-6" style="z-index: 999 !important">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-image: url("./../assets/auth-bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;

  .overlay {
    background: rgba(0, 0, 0, 0.25);
  }
}
</style>
