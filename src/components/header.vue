<script setup lang="ts">
import { NAvatar, NBadge, NLayout, NLayoutHeader } from 'naive-ui'

</script>

<template>
    <NLayout class="red">
        <NLayoutHeader class="red" bordered>雀魂したい<br><br>
            <NBadge value="連絡なんて来てねーよ">
                <n-avatar round size="large" src='../images/nasubi.png' />
            </NBadge>
        </NLayoutHeader>
    </NLayout>
</template>

<style>
.red {
    color: red;
}
</style>