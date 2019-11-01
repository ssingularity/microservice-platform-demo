<template>
    <div style="margin: 10px; width: 300px">
        <el-card class="header">
            <div style="display: inline-block">
                {{Unit.name}}
            </div>
            <i @click="click"
               @mouseover="change"
               style="float: right; height: 1.2rem; width: 1.2rem"
               class="el-icon-delete"></i>
        </el-card>
        <el-card style="margin-top: 20px; height: 400px; overflow: scroll">
            <div>服务实例列表</div>
            <ul style="list-style-type: none">
                <li v-for="service in Unit.serviceList"
                    :key="service.name">
                    <el-tag class="service">{{service.name}}</el-tag>
                    <i @mouseover="$event.target.style.cursor='pointer'"
                       @click="$emit('remove-service', service)"
                       class="el-icon-remove-outline" style="margin-left: 10px"></i>
                </li>
                <li style="text-align: center; margin-top: 20px">
                    <el-button size="mini" round @click="$emit('add-service')">添加服务</el-button>
                </li>
            </ul>
            <el-divider></el-divider>
            <div>触发器</div>
            <el-button style="width: 100%; padding: 5px; margin-top: 10px">+</el-button>
        </el-card>
    </div>
</template>

<script>
    class Unit {
        constructor(name, serviceList) {
            this.name = name
            this.serviceList = serviceList
        }
    }

    export default {
        name: "ProcedureUnit",
        props: {
            Unit,
            enableRemove: Boolean,
        },
        data: function () {
            return {
            }
        },
        methods: {
            change: function (event) {
                if (this.enableRemove) {
                    event.currentTarget.style.cursor='pointer'
                }
                else {
                    event.currentTarget.style.cursor='not-allowed'
                }
            },
            click: function () {
                if (this.enableRemove) {
                    this.$emit('remove-event')
                }
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 4rem;
        background: skyblue;
        color: white;
    }
    .service {
        margin-bottom: 10px;
        width: 200px;
        text-align: center;
    }
</style>
