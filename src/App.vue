<template>
	<div id="app">
		<HeaderVue />
		<h2>app</h2>
		<router-link to="/">go to home</router-link> |
		<router-link to="/nasubi">go to nasubi</router-link><br>
		<router-view v-slot="{ Component, route }">
			<transition
			:enter-active-class='route.meta.enterClass'
			:leave-active-class='route.meta.leaveClass'
			>
				<component :is="Component" />
			</transition>
		</router-view>
		aaa
	</div>
</template>

<script setup lang="ts">
import HeaderVue from './components/header.vue';

</script>

<style>
#app {
	/* font-family: 'UDEV Gothic', Courier, monospace; */
	font-family: 'Rubik', sans-serif;
	text-align: center;
	color: rgba(0, 0, 0, 0.4);
}

.img {
	width: 300px;
}

.page {
	position: absolute;
	top: 30px;
}

a {
	font-weight: bold;
	color: #41b883;
	text-decoration: none;
	cursor: pointer;
}

a:hover,
a.router-link-active {
	border-bottom: 2px solid #41b883;
}

.wrapper {
	width: 100%;
	min-height: 100vh;
}
</style>
