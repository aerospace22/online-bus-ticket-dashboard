<script lang="ts" setup>
defineProps<{
  title: string;
  subtitle?: string;
  breadcrumbs?: string[];
}>();
</script>

<template>
  <div class="w-full p-5 mb-5">
    <div class="flex flex-row justify-between">
      <div class="w-full flex flex-col gap-2">
        <a-breadcrumb class="text-xs">
          <a-breadcrumb-item>Dashboard Home</a-breadcrumb-item>
          <a-breadcrumb-item v-if="$props.breadcrumbs?.length" v-for="crumb in $props.breadcrumbs" :key="`breadcrumb-item-${crumb}`">
            {{ crumb }}
          </a-breadcrumb-item>
        </a-breadcrumb>

        <span>
          <h1 class="text-xl text-gray-700 font-semibold uppercase m-0">{{ $props.title }}</h1>
          <p v-if="$props.subtitle" class="text-sm text-gray-600">{{ $props.subtitle }}</p>
        </span>
      </div>

      <div class="w-full flex justify-end">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
