import { toast } from "vue3-toastify";
import { $http } from "@/api";

export const BusRoutesService = {
  getList: async function () {
    return await $http
      .get("/bus-routes")
      .then((response) => response.data)
      .catch(() => toast.error("Failed to fetch bus routes list"));
  },
};
