<template>
    <div id="app">
        <!-- <router-link to="/" tag="button">Home</router-link> |
        <router-link to="/about" tag="button">About</router-link> -->
        <button v-on:click="home">首页</button> |
        <button @click="about">关于</button>
        <router-link :to="'/user/' + user" tag="button">用户</router-link>
        <!-- <router-link :to="{path:'/profile',query:{key1:'canshu1',key2:'adfe',key3:'wwwee'}}" tag="button">我的</router-link> -->
        <button @click="profile">我的</button>
        <button @click='counter++'>++</button>
        <button @click='counter--'>--</button>
        <button @click='$store.commit("adds")'>store++</button>
        <button @click='$store.dispatch("Aadds")'>异步store++</button>
        <button @click='jian(shu)'>store--</button>
        <div>{{counter}}</div>
        <div>-----------------state.info信息添加--------</div>
        <div>{{$store.state.info}}</div>
        <button @click="$store.commit('address')">添加地址</button>
        <router-view />
    </div>
</template>


<script>
export default {
    data() {
        return {
            user: "lisi",
            counter:0,
            shu:15
        };
    },
    methods: {
        home() {
            console.log("home");
            this.$router.push("/");
        },
        about() {
            console.log("asdf");
            this.$router.replace("/about");
        },
        profile() {
            this.$router.push({
                path: "/profile",
                query: { key1: "canshu1", key2: "adfe", key3: "wwwee" },
            });
        },
        jian(aa){
            // $store.commit('jians')
            this.$store.commit('jians', aa)
        }
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.router-link-exact-active {
    color: red;
    background-color: royalblue;
}
</style>
