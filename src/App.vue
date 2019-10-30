<template>
    <div id="app">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            :router="isRouter"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#FFEFBA">
            <el-menu-item index="/container-configure">服务环境配置</el-menu-item>
            <el-menu-item index="/container">容器管理</el-menu-item>
            <el-menu-item index="/service-publish">微服务发布</el-menu-item>
            <el-menu-item index="/service">微服务管理</el-menu-item>
            <el-submenu index="/composite-service-publish">
                <template slot="title">组合服务发布</template>
                <el-menu-item index="/composite-service-publish/procedure">流程编排</el-menu-item>
                <el-menu-item index="/composite-service-publish/file-upload">文件上传</el-menu-item>
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
