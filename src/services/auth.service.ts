import { toast } from "vue3-toastify";
import { $http } from "@/api";

export const AuthService = {
  login: async function (credentials: any) {
    console.log(credentials);
    return await $http
      .post("/auth/login", { ...credentials, loginType: "admin" })
      .then((response) => {
        const { user, accessToken } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", user);

        toast.success("Redirecting to dashboard");

        setTimeout(() => {
          window.location.href = "/app/dashboard";
        }, 2000);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error("Invalid credentials provided");
        }
      });
  },
};
