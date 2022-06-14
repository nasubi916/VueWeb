<script setup lang="ts">
import { useMouse, useCounter } from '@vueuse/core';

const { x, y } = useMouse()
const { count, inc, dec } = useCounter()

</script>

<template>
    <h2>this page is home</h2>    
    <img src="../images/logo.svg" />
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
</template>

<style>

</style>