<template>
    <div>
        <div>我是用户</div>
        <div>用户名：{{ Userid }}</div>
    </div>
</template>

<script>
export default {
    computed: {
        Userid() {
            return this.$route.params.UserId;
        },
    },
};
</script>

<style>
</style>