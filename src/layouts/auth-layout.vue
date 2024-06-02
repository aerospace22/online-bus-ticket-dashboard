<script lang="ts" setup></script>

<template>
  <div class="auth-layout h-screen w-screen flex justify-center items-center bg-slate-900">
    <div class="auth-layout-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-layout {
  &-content {
    zoom: 0.95 !important;
  }
}
</style>
