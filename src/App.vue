<template>
	<div id="app">
		<HeaderVue />
		<h2>app</h2>
		<router-link to="/">go to home</router-link> |
		<router-link to="/nasubi">go to nasubi</router-link><br>
		<router-view v-slot="{ Component }">
			<transition name="slide">
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

img {
	width: 500px;
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
	width:100%;
	min-height:100vh;
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.75s ease-out;
}


.slide-enter-to {
	position: absolute;
	right: 0;
}


.slide-enter-from {
	position: absolute;
	right: -100%;
}


.slide-leave-to {
	position: absolute;
	left: -100%;
}


.slide-leave-from {
	position: absolute;
	left: 0;
}
</style>
