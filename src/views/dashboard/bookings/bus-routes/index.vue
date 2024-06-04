<script lang="ts" setup>
import { useHead } from "@unhead/vue";
import { useRouter } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { BusRoutesService } from "@/services";
import BusRoutesList from "@/components/domains/bookings/bus-routes/list.vue";

const router = useRouter();

const handleRedirect = (route: string) => {
  router.push({ name: route });
};

const { isLoading, data, refetch } = useQuery({
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
      <div class="h-[30px] flex flex-row gap-2">
        <a-button class="h-full" @click="refetch()">Refresh List</a-button>
        <a-button class="h-full">Apply Filters</a-button>
        <a-button class="h-full">Export to CSV</a-button>
        <a-button type="primary" class="h-full" @click="handleRedirect('dashboard-bookings-bus-routes-create')">Create Route</a-button>
      </div>
    </PageHeader>

    <div class="bg-white shadow min-h-[50px]">
      <div v-if="isLoading" class="flex flex-col justify-center items-center gap-3 my-5">
        <a-spin size="lg" />
        <p class="text-sm text-gray-600">Fetching data</p>
      </div>

      <BusRoutesList :data="data" v-else />
    </div>
  </DashboardLayout>
</template>

<style lang="scss" scoped></style>
