import { createRouter, createWebHistory } from "vue-router";
import MakeData from "../modules/makeData/layouts/MakeDataLayout.vue";
import Auth from "../modules/auth/layouts/AuthLayout.vue";
import AdminLayout from "../modules/dashboard/layouts/AdminLayout";
import EmployeeLayout from "../modules/dashboard/layouts/EmployeeLayout";

const routes = [
    {
        name: "makeData",
        path: "/",
        component: MakeData,
    },
    {
        name: "auth",
        path: "/auth",
        component: Auth,
    },
    {
        name: "admin",
        path: "/admin",
        component: AdminLayout,
    },
    {
        name: "employee",
        path: "/empleado",
        component: EmployeeLayout,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
