<template>
        <el-row>
            <el-col :span="5" >
                <el-select
                    v-model="httpmethod"
                    placeholder="HTTP方法">
                    <el-option
                        v-for="item in options"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="14" :offset="1">
                <el-input
                    placeholder="/**/**"
                    type="text">
                    <template slot="prepend">URI</template>
                </el-input>
            </el-col>
            <el-col :span="2" :offset="1">
                <el-button @click="$emit('remove-event')">删除</el-button>
            </el-col>
        </el-row>
</template>

<script>
    export default {
        name: "Endpoint.vue",
        data: function () {
            return {
                options: ["GET", "POST", "DELETE", "PUT"],
                httpmethod: ""
            }
        }
    }
</script>

<style scoped>

</style>
