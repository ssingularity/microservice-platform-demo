<template>
    <div id="app">
        <el-menu
            style="opacity: 0.9"
            class="el-menu-demo"
            mode="horizontal"
            :router="isRouter"
            background-color="#58A5F5"
            text-color="#fff"
            active-text-color="#FFEFBA">
            <el-menu-item index="/container-configure">服务模板配置</el-menu-item>
            <el-menu-item index="/service">微服务管理</el-menu-item>
            <el-submenu index="/composite-service-publish">
                <template slot="title">组合服务模板配置</template>
                <el-menu-item index="/composite-service-configure/online-upload">在线编排</el-menu-item>
                <el-menu-item index="/composite-service-configure/file-upload">文件上传</el-menu-item>
            </el-submenu>
            <el-menu-item index="/composite-service">组合服务管理</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data: function() {
            return {
                isRouter: true
            }
        },
        components: {}
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
