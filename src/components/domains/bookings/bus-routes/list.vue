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

const columns = [
  {
    title: "Route No",
    dataIndex: "routeCode",
    key: "routeCode",
  },
  {
    title: "ACTIONS",
    dataIndex: "actions",
    key: "actions",
    width: 100,
    fixed: "right",
  },
];
</script>

<template>
  <div class="bg-white rounded-md" style="zoom: 0.9">
    <a-table :dataSource="$props.data" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'routeCode'">
          {{ record.routeCode }}
        </template>
        <template v-if="column.key === 'actions'">
          <div class="flex flex-row gap-2">
            <a-button type="primary">Manage</a-button>
            <a-button>View Booked Tickets</a-button>
            <a-button danger>Archive</a-button>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped></style>
