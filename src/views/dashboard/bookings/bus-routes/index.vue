<script lang="ts" setup>
import { useHead } from "@unhead/vue";
import { useQuery } from "@tanstack/vue-query";
import { BusRoutesService } from "@/services";
import BusRoutesList from "@/components/domains/bookings/bus-routes/list.vue";

const { isLoading, data } = useQuery({
  queryKey: ["data-bus-routes"],
  queryFn: async () => await BusRoutesService.getList(),
});

useHead({
  title: "Bookings - Bus Routes | Backoffice Dashboard",
});
</script>

<template>
  <DashboardLayout>
    <PageHeader title="Bus Routes" subtitle="Manage postings of bus routes & destinations" :breadcrumbs="['Bus Routes']">
      <div class="h-[40px] flex flex-row gap-2">
        <a-button class="h-full text-sm">Apply Filters</a-button>
        <a-button class="h-full text-sm">Export to CSV</a-button>
        <a-button type="primary" class="h-full text-sm">Create Route</a-button>
      </div>
    </PageHeader>

    <div class="min-h-[200px]">
      <div v-if="isLoading" class="flex flex-col justify-center items-center gap-3 my-5">
        <a-spin size="lg" />
        <p class="text-sm text-gray-600">Fetching data</p>
      </div>

      <BusRoutesList :data="data" v-else />
    </div>
  </DashboardLayout>
</template>

<style lang="scss" scoped></style>
