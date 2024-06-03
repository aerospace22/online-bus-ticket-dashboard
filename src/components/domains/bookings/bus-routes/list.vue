<script lang="ts" setup>
import { computed } from "vue";

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
      title: "Route #",
      dataIndex: "routeCode",
      key: "routeCode",
    },
    {
      title: "Bus #",
      dataIndex: "busNo",
      key: "busNo",
    },
    {
      title: "Ticket Price",
      dataIndex: "ticketPrice",
      key: "ticketPrice",
    },
    {
      title: "P2P Route",
      dataIndex: "routeFrom",
      key: "routeFrom",
    },
    {
      title: "Departure",
      dataIndex: "departure",
      key: "departure",
    },
    {
      title: "Arrival",
      dataIndex: "arrival",
      key: "arrival",
    },
    {
      title: "Date Added",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Last Updated",
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
  <div>
    <a-table :dataSource="$props.data" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'routeCode'">
          {{ record.routeCode }}
        </template>
        <template v-if="column.key === 'ticketPrice'"> {{ formatTicketPrice.format(record.ticketPrice) }} </template>
        <template v-if="column.key === 'routeFrom'"> {{ record.routeFrom }} - {{ record.routeTo }} </template>
        <template v-if="column.key === 'departure'"> {{ record.departureDate }} - {{ record.departureTime }} </template>
        <template v-if="column.key === 'arrival'"> {{ record.arrivalDate }} - {{ record.arrivalTime }} </template>
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
