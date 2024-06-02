<script lang="ts" setup>
import slugify from "slugify";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const handleRedirect = (routeName: string) => {
  console.log(routeName);
  router.push({ name: routeName });
};

const linkGroups = computed(() => {
  const isActive = (name: string) => {
    return name === route.name;
  };

  return [
    {
      name: "Menu",
      children: [
        {
          label: "Dashboard Overview",
          route: "dashboard-home",
          iconName: "home",
          isActive: isActive("dashboard-home"),
        },
      ],
    },
    {
      name: "Bookings",
      children: [
        {
          label: "Bus Routes",
          route: "dashboard-bookings-bus-routes",
          iconName: "git-merge",
          isActive: isActive("dashboard-bookings-bus-routes"),
        },
        {
          label: "Traveller Itineraries",
          route: "dashboard-home",
          iconName: "map",
          isActive: isActive("dashboard-home"),
        },
      ],
    },
    {
      name: "Payments",
      children: [
        {
          label: "History",
          route: "dashboard-home",
          iconName: "list",
          isActive: isActive("dashboard-home"),
        },
      ],
    },
    {
      name: "Reprts",
      children: [
        {
          label: "Sales",
          route: "dashboard-home",
          iconName: "bar-chart",
          isActive: isActive("dashboard-home"),
        },
      ],
    },
    {
      name: "Admin",
      children: [
        {
          label: "Customer Profiles",
          route: "dashboard-home",
          iconName: "users",
          isActive: isActive("dashboard-home"),
        },
        {
          label: "Accounts",
          route: "dashboard-home",
          iconName: "users",
          isActive: isActive("dashboard-home"),
        },
        {
          label: "Logs",
          route: "dashboard-home",
          iconName: "file-text",
          isActive: isActive("dashboard-home"),
        },
        {
          label: "Backups",
          route: "dashboard-home",
          iconName: "database",
          isActive: isActive("dashboard-home"),
        },
      ],
    },
  ];
});
</script>

<template>
  <div class="h-screen w-screen flex flex-row">
    <div class="h-screen w-[280px] bg-slate-900 text-white fixed top-0 left-0 pt-5 px-3">
      <div class="h-full w-full relative">
        <div class="w-full bg-slate-800 rounded-md py-10 mb-5"></div>
        <div v-for="group in linkGroups" :key="`link-group-${slugify(group.name)}`" class="mb-3">
          <p class="text-slate-400 text-xs font-medium">{{ group.name }}</p>
          <div class="p-0">
            <button
              v-if="group.children.length"
              v-for="child in group.children"
              :key="`group-link-${child.route}`"
              class="w-full flex flex-row items-center gap-3 text-left text-slate-300 rounded-md hover:text-white hover:bg-slate-950 p-2"
              :class="{ '!text-white bg-slate-950': child.isActive }"
              @click="handleRedirect(child.route)"
            >
              <span v-if="child.iconName">
                <VueFeather size="20" :type="child.iconName" />
              </span>
              <span class="text-xs">
                {{ child.label }}
              </span>
            </button>
            <div v-else>-</div>
          </div>
        </div>

        <small class="text-white absolute bottom-3 right-3">v1.0.0 (beta)</small>
      </div>
    </div>
    <div class="h-screen w-full ml-[280px]">
      <div class="h-[60px] w-full bg-white shadow"></div>

      <div class="p-5" style="zoom: 0.9">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
