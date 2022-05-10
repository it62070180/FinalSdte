import { createWebHistory, createRouter } from "vue-router";
import regis from "../components/Regis.vue";
import main from "../components/main.vue"

const routes = [
    {
        path: "/",
        name: "Main",
        component: main
    },
    {
        path: "/regis",
        name: "Regis",
        Component: regis
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
