<script lang="ts" setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Overview | Backoffice Dashboard",
});
</script>

<template>
  <DashboardLayout>
    <PageHeader title="Dashboard Overview" :breadcrumbs="['Overview']"></PageHeader>
  </DashboardLayout>
</template>

<style lang="scss" scoped></style>
