<template>
    <el-row>
        <el-col :span="5" :offset="6">
            <el-input
                style="margin-top: 20px"
                placeholder="变量名"
                type="text">
                <template slot="prepend">变量名</template>
            </el-input>
        </el-col>
        <el-col :span="5" :offset="2">
            <el-input
                style="margin-top: 20px"
                placeholder="变量值"
                type="text">
            <template slot="prepend">变量值</template>
            </el-input>
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
