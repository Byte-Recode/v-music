<template>
    <div>
        <navi></navi>
		<router-view></router-view>
    </div>
</template>

<script>
import navi from '../components/navi'
export default {
    components: {
        navi,
    },
};
</script>

<style>
</style>