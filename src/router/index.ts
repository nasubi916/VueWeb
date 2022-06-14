import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";
import nasubi from "../components/nasubi.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: home,
	},
	{
		path: "/nasubi",
		name: "nasubi",
		component: nasubi,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router