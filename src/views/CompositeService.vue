<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card header="组合服务" shadow="hover">
                    <el-table :data="compositeServiceList">
                        <el-table-column prop="date" label="发布日期" align="center"/>
                        <el-table-column prop="name" label="组合服务名称" align="center"/>
                        <el-table-column prop="description" label="组合服务描述" align="center"/>
                        <el-table-column prop="status" label="状态" align="center" width="200px">
                            <template slot-scope="scope">
                                <el-tag :type="getStatusType(scope.row.status)">{{scope.row.status}}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            label="操作"
                            align="center"
                            width="500px">
                            <template slot-scope="scope">
                                <el-button
                                    size="small">
                                    运行结果
                                </el-button>
                                <el-button
                                    @click="start(scope.row)"
                                    :disabled="scope.row.status !== 'STOPPED'"
                                    size="small">
                                    启动
                                </el-button>
                                <el-button
                                    @click="stop(scope.row)"
                                    :disabled="scope.row.status !== 'RUNNING'"
                                    size="small">
                                    停止
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "CompositeService",
        methods: {
            getStatusType: function (status) {
                switch (status) {
                    case "RUNNING" :
                        return "success"
                    case "STOPPED":
                        return "danger"
                }
            },
            start: function (service) {
                service.status = "RUNNING"
            },
            stop: function (service) {
                service.status = "STOPPED"
            },
        },
        data: function () {
            return {
                compositeServiceList: [
                    {
                        name: "组合服务A",
                        description: "这个在跑",
                        date: "2019-10-02",
                        status: "RUNNING",
                    },
                    {
                        name: "组合服务B",
                        description: "这个没有在跑",
                        date: "2019-10-05",
                        status: "STOPPED"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
