<script setup lang="ts">
import { NButton } from 'naive-ui'
import { useCounterStore } from '../store/counter';

const store = useCounterStore();
store.count++;
store.increment(2);
store.decrement(2);
</script>

<template>
    <div>
        <n-button>naive-ui</n-button><br>
        <h1>Count is {{store.count }}</h1>
        <h2>DoubleCount is {{ store.doubleCount }}</h2>
        <button @click="store.increment(1)">Increment</button>
        <button @click="store.decrement(1)">Decrement</button>
        <button @click="store.waitAndAdd">Wait + Increment</button>
    </div>
</template>

<style>

</style>