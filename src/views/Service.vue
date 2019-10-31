<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card header="已发布微服务" shadow="hover">
                    <el-tabs type="card" v-model="activeTab">
                        <el-tab-pane label="我的微服务" name="mine">
                            <el-table :data="myServiceList">
                                <el-table-column prop="name" label="实例名称" align="center" width="200px"/>
                                <el-table-column prop="host" label="发布人" align="center" width="200px"/>
                                <el-table-column label="状态" align="center" width="200px">
                                    <template slot-scope="scope">
                                        <el-tag :type="getStatusType(scope.row.status)">{{scope.row.status}}</el-tag>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="date" label="发布日期" align="center" width="200px"/>
                                <el-table-column
                                    fixed="right"
                                    label="操作"
                                    align="center"
                                    width="350px">
                                    <template slot-scope="scope">
                                        <el-button
                                            @click="detail(scope.row)"
                                            size="small">
                                            详情
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
                                        <el-button
                                            :disabled="scope.row.status !== 'RUNNING'"
                                            size="small">
                                            执行
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="其他人的微服务" name="others">
                            <el-table :data="othersServiceList">
                                <el-table-column prop="name" label="实例名称" align="center" width="200px"/>
                                <el-table-column prop="host" label="发布人" align="center" width="200px"/>
                                <el-table-column prop="status" label="状态" align="center" width="200px">
                                    <template slot-scope="scope">
                                        <el-tag :type="getStatusType(scope.row.status)">{{scope.row.status}}</el-tag>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="date" label="发布日期" align="center" width="200px"/>
                                <el-table-column
                                    fixed="right"
                                    label="操作"
                                    align="center"
                                    width="350px">
                                    <template slot-scope="scope">
                                        <el-button
                                            @click="detail(scope.row)"
                                            size="small">
                                            详情
                                        </el-button>
                                        <el-button
                                            :disabled="scope.row.status !== 'RUNNING'"
                                            size="small">
                                            订阅
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
        name: "Service",
        data: function () {
            return {
                activeTab: "mine",
                serviceList: [
                    {
                        name: "服务A第一实例",
                        host: "皮皮潘",
                        date: "2019-10-02",
                        status: "RUNNING",
                    },
                    {
                        name: "服务A第二实例",
                        host: "周鑫",
                        date: "2019-10-05",
                        status: "STOPPED"
                    },
                    {
                        name: "服务C第一实例",
                        host: "张博",
                        date: "2019-10-06",
                        status: "RUNNING"
                    },
                    {
                        name: "服务C第二实例",
                        host: "张博",
                        date: "2019-10-01",
                        status: "RUNNING"
                    },
                    {
                        name: "服务A第四实例",
                        host: "皮皮潘",
                        date: "2019-10-06",
                        status: "STOPPED"
                    },
                    {
                        name: "服务D第三实例",
                        host: "姜美羡",
                        date: "2019-09-05",
                        status: "STOPPED"
                    },
                ]
            }
        },
        computed: {
            myServiceList: function () {
                return this.serviceList.filter((service) => service.host === "皮皮潘")
            },
            othersServiceList: function() {
                return this.serviceList.filter((service) => service.host !== "皮皮潘")
            }
        },
        methods: {
            detail: function (service) {
                alert(service)
            },
            start: function (service) {
                service.status = "RUNNING"
            },
            stop: function (service) {
                service.status = "STOPPED"
            },
            getStatusType: function (status) {
                switch (status) {
                    case "RUNNING" :
                        return "success"
                    case "STOPPED":
                        return "danger"
                }
            }
        }
    }
</script>

<style scoped>
    .main {
        margin-top: 50px;
    }
</style>
