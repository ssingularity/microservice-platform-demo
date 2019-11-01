<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card header="组合服务管理" shadow="hover">
                    <el-tabs type="card" v-model="activeTab">
                        <el-tab-pane label="可发布的组合服务" name="unpublished">
                            <el-table :data="compositeServiceList">
                                <el-table-column prop="date" label="创建日期" align="center"/>
                                <el-table-column prop="name" label="组合服务名称" align="center"/>
                                <el-table-column prop="description" label="组合服务描述" align="center"/>
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
                                            @click="$router.push('/composite-service/' + scope.row.name + '/publish')"
                                            type="primary"
                                            size="small">
                                            发布
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="已发布的组合服务实例" name="published">
                            <el-table :data="publishedCompositeServiceList">
                                <el-table-column prop="date" label="发布日期" align="center"/>
                                <el-table-column prop="name" label="组合服务名称" align="center"/>
                                <el-table-column prop="description" label="组合服务描述" align="center" width="200px"/>
                                <el-table-column prop="count" label="运行次数" align="center"/>
                                <el-table-column prop="lastDate" label="上次运行日期" align="center"/>
                                <el-table-column prop="status" label="状态" align="center">
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
                        </el-tab-pane>
                    </el-tabs>
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
                activeTab: 'unpublished',
                compositeServiceList: [
                    {
                        name: "组合服务A",
                        description: "这个是组合服务A，用来控制A流水线",
                        date: "2019-10-02",
                        status: "RUNNING",
                    },
                    {
                        name: "组合服务B",
                        description: "这个是组合服务B，用来控制B流水线",
                        date: "2019-10-05",
                        status: "STOPPED"
                    },
                ],
                publishedCompositeServiceList: [
                    {
                        name: "组合服务A第一实例",
                        description: "这个是组合服务A第一实例，用来控制A的第一条流水线",
                        count: 10,
                        date: "2019-10-04",
                        lastDate: "2019-10-11",
                        status: "RUNNING",
                    },
                    {
                        name: "组合服务A第二实例",
                        description: "这个是组合服务A第二实例，用来控制A的第二条流水线",
                        count: 98,
                        date: "2019-10-05",
                        lastDate: "2019-10-13",
                        status: "RUNNING",
                    },
                    {
                        name: "组合服务C第一实例",
                        description: "这个是组合服务C第一实例，用来控制C的第一条流水线",
                        count: 2,
                        date: "2019-10-11",
                        lastDate: "2019-10-13",
                        status: "STOPPED"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
