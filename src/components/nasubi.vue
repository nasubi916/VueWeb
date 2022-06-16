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
    <h2>this page is nasubi</h2>
    <img class="img" src="../assets/img/nasubi.png" /><br>
    <n-button>naive-ui</n-button><br>
    <n-button type="primary" size="large" @click="store.increment(1)">Increment</n-button>

    <h1>Count is {{ store.count }}</h1>
    <h2>DoubleCount is {{ store.doubleCount }}</h2>
    <n-button type="primary" @click="store.increment(1)">Increment</n-button>
    <n-button type="warning" @click="store.decrement(1)">Decrement</n-button>
    <n-button type="primary" @click="store.waitAndAdd">Wait + Increment</n-button>
    <br><br>
</div>
</template>
