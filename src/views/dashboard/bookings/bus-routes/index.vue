<script lang="ts" setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Bookings - Bus Routes | Backoffice Dashboard",
});
</script>

<template>
  <DashboardLayout>
    <PageHeader title="Bus Routes" subtitle="Manage postings of bus routes & destinations" :breadcrumbs="['Bus Routes']">
      <div class="flex flex-row gap-2">
        <a-button>Export to CSV</a-button>
        <a-button type="primary">Create Route</a-button>
      </div>
    </PageHeader>

    <a-card class="min-h-[200px] shadow"></a-card>
  </DashboardLayout>
</template>

<style lang="scss" scoped></style>
