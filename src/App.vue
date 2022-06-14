<template>
	<div id="app">
		<router-link to="/">go to home</router-link> | 
		<router-link to="/nasubi">go to nasubi</router-link><br>
		<router-view/>
		aaa
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

</script>

<style>
#app {
	/* font-family: 'UDEV Gothic', Courier, monospace; */
	font-family: 'Rubik', sans-serif;
	text-align: center;
	color: rgba(0,0,0,0.4);
}
img {
	width: 500px;
}
a {
	color: #41b883;
	text-decoration: none;
	cursor: pointer;
}
</style>
