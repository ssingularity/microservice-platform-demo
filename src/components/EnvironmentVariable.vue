<template>
    <el-row>
        <el-col :span="9" >
            <el-input
                placeholder="变量名"
                type="text">
                <template slot="prepend">变量名</template>
            </el-input>
        </el-col>
        <el-col :span="9" :offset="2">
            <el-input
                placeholder="默认值"
                type="text">
            <template slot="prepend">默认值</template>
            </el-input>
        </el-col>
        <el-col :span="2" :offset="1">
            <el-button @click="$emit('remove-event')">删除</el-button>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "EnvironmentVariable"
    }
</script>

<style scoped>
</style>
