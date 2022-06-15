import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";
import nasubi from "../components/nasubi.vue";

const router = createRouter({
	history: createWebHistory(),
	routes : [
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
	],
})

export default router