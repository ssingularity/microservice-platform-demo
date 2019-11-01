<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card>
                    <el-page-header @back="$router.push('/composite-service')" :content="$route.params.id + '的实例'"/>
                </el-card>
                <el-card shadow="hover" style="margin-top: 10px">
                    <el-table :data="compositeServiceList">
                        <el-table-column prop="date" label="发布日期" align="center"/>
                        <el-table-column prop="name" label="组合服务实例名称" align="center" width="200px"/>
                        <el-table-column prop="description" label="组合服务实例描述" align="center" width="300px"/>
                        <el-table-column prop="count" label="运行次数" align="center"/>
                        <el-table-column prop="lastDate" label="上次运行日期" align="center" width="200px"/>
                        <el-table-column prop="status" label="状态" align="center">
                            <template slot-scope="scope">
                                <el-tag :type="getStatusType(scope.row.status)">{{scope.row.status}}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            label="操作"
                            align="center"
                            width="300px">
                            <template slot-scope="scope">
                                <el-button
                                    size="small">
                                    详细状态
                                </el-button>
                                <el-button
                                    @click="start(scope.row)"
                                    :disabled="scope.row.status !== 'STOPPED'"
                                    size="small">
                                    执行
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
        name: "CompositeServiceInstance",
        computed: {
            compositeServiceList: function() {
                return this.publishedCompositeServiceList.filter((x) => x.template === this.$route.params.id)
            }
        },
        data: function () {
            return {
                publishedCompositeServiceList: [
                    {
                        name: "组合服务A第一实例",
                        description: "这个是组合服务A第一实例，用来控制A的第一条流水线",
                        count: 10,
                        date: "2019-10-04",
                        lastDate: "2019-10-11",
                        status: "RUNNING",
                        template: "组合服务A"
                    },
                    {
                        name: "组合服务A第二实例",
                        description: "这个是组合服务A第二实例，用来控制A的第二条流水线",
                        count: 98,
                        date: "2019-10-05",
                        lastDate: "2019-10-13",
                        status: "STOPPED",
                        template: "组合服务A"
                    },
                    {
                        name: "组合服务B第一实例",
                        description: "这个是组合服务B第一实例，用来控制B的第一条流水线",
                        count: 2,
                        date: "2019-10-11",
                        lastDate: "2019-10-13",
                        status: "RUNNING",
                        template: "组合服务B"
                    },
                ]
            }
        },
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
    }
</script>

<style scoped>

</style>
