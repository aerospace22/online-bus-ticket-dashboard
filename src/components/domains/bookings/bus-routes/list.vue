<script lang="ts" setup>
import { computed } from "vue";
import { useFormatter } from "@/composables";

const { formatDate } = useFormatter();

defineProps<{
  data?: any[];
}>();

const formatTicketPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

const columns = computed(() => {
  return [
    {
      title: "ROUTE #",
      dataIndex: "routeCode",
      key: "routeCode",
    },
    {
      title: "BUS #",
      dataIndex: "busNo",
      key: "busNo",
    },
    {
      title: "TICKET PRICE",
      dataIndex: "ticketPrice",
      key: "ticketPrice",
    },
    {
      title: "P2P ROUTE",
      dataIndex: "routeFrom",
      key: "routeFrom",
    },
    {
      title: "DEPARTURE",
      dataIndex: "departure",
      key: "departure",
    },
    {
      title: "ARRIVAL",
      dataIndex: "arrival",
      key: "arrival",
    },
    {
      title: "DATE ADDED",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "LAST UPDATED",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];
});
</script>

<template>
  <div class="bg-white rounded-md border border-gray-200">
    <a-table :dataSource="$props.data" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'routeCode'">
          {{ record.routeCode }}
        </template>
        <template v-if="column.key === 'ticketPrice'"> {{ formatTicketPrice.format(record.ticketPrice) }} </template>
        <template v-if="column.key === 'routeFrom'"> {{ record.routeFrom }} - {{ record.routeTo }} </template>
        <template v-if="column.key === 'departure'"> {{ record.departureDate }} - {{ record.departureTime }} </template>
        <template v-if="column.key === 'arrival'"> {{ record.arrivalDate }} - {{ record.arrivalTime }} </template>
        <template v-if="column.key === 'createdAt'">
          {{ formatDate(record.createdAt) }}
        </template>
        <template v-if="column.key === 'updatedAt'">
          {{ formatDate(record.updatedAt) }}
        </template>
        <template v-if="column.key === 'actions'">
          <div class="flex flex-row gap-2">
            <a-button type="primary">Manage</a-button>
            <a-button danger>Archive</a-button>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped></style>
