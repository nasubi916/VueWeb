<script setup lang="ts">
import { NAvatar, NBadge, NLayout, NLayoutHeader } from 'naive-ui'

</script>

<template>
<div>
    <NLayout>
        <NLayoutHeader class="red" bordered>お金が欲しい<br><br>
            <NBadge value="" name="side">
                <n-avatar round size="large" img='@/assets/nasubi.png' />
            </NBadge>
        </NLayoutHeader>
    </NLayout>
</div>
</template>

<style>
.red {
    color: red;
}
</style>