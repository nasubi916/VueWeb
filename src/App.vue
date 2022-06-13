<template>
  <div id="app">
    <Header/>
    <img src="./images/logo.svg" />
    <h1>
      Hello <a href='https://github.com/vuejs/vite' target='__blank'>Vite</a> and 
      <a href='https://github.com/vueuse/vueuse' target='__blank'>VueUse</a> and 
      <a href='https://github.com/vuejs/pinia' target='__blank'>pinia</a> and 
      <a href='https://github.com/TuSimple/naive-ui' target='__blank'>naiveUI</a>!
    </h1>

    <h3>Mouse: {{x}} x {{y}}</h3>
    <h3>
      Counter: {{count}}
      <a @click='inc()' style='margin-right:10px'>+</a>
      <a @click='dec()'>-</a>
    </h3>
    <nasubi/>
    こんにてぃあ
    ジャカルた
  </div>
</template>

<script setup lang="ts">
import { useMouse, useCounter } from '@vueuse/core';
import nasubi from './components/nasubi.vue';
import Header from './components/header.vue';


const { x, y } = useMouse()
const { count, inc, dec } = useCounter()
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
