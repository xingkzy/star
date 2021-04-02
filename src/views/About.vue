<template>
    <div class="about">
        <h1>这是关于页</h1>
        <div>{{ $store.state.counter }}</div>
        <router-link to="/about/news" replace>新闻页</router-link>
        <router-link to="/about/aa" replace>aa</router-link>
        <router-view></router-view>
    </div>
</template>
