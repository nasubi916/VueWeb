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
			meta: {
				enterClass:"animate__animated animate__fadeInLeft",
				leaveClass:"animate__animated animate__fadeOutRight",
			}
		},
		{
			path: "/nasubi",
			name: "nasubi",
			component: nasubi,
			meta: {
				enterClass:"animate__animated animate__fadeInRight",
				leaveClass:"animate__animated animate__fadeOutLeft",
			}
		},
	],
})

export default router