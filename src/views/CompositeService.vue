<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card header="组合服务管理" shadow="hover">
                    <el-table :data="compositeServiceList">
                        <el-table-column prop="date" label="创建日期" align="center"/>
                        <el-table-column prop="name" label="组合服务名称" align="center"/>
                        <el-table-column prop="description" label="组合服务描述" align="center"/>
                        <el-table-column prop="count" label="实例数" align="center"/>
                        <el-table-column
                            fixed="right"
                            label="操作"
                            align="center"
                            width="500px">
                            <template slot-scope="scope">
                                <el-button
                                    size="small">
                                    详情
                                </el-button>
                                <el-button
                                    @click="$router.push('/composite-service/' + scope.row.name + '/instances')"
                                    size="small">
                                    实例
                                </el-button>
                                <el-button
                                    @click="$router.push('/composite-service/' + scope.row.name + '/publish')"
                                    type="primary"
                                    size="small">
                                    发布
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                        style="margin-top: 20px"
                        background
                        layout="prev, pager, next"
                        :total="1">
                    </el-pagination>
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
                        description: "这个是组合服务A，用来控制A流水线",
                        date: "2019-10-02",
                        status: "RUNNING",
                        count: 2
                    },
                    {
                        name: "组合服务B",
                        description: "这个是组合服务B，用来控制B流水线",
                        date: "2019-10-05",
                        status: "STOPPED",
                        count: 1
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>
