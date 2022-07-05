import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";
import nasubi from "../components/nasubi.vue";
import niru from "../components/niru.vue";


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
		{
			path: "niru",
			name: "niru",
			component: niru,
			meta: {
				enterClass:"animate__animated animate__fadeInLeft",
				leaveClass:"animate__animated animate__fadeOutRight",
			}
		}
	],
})

export default router