<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card header="已发布微服务" shadow="hover">
                    <el-table :data="serviceList">
                        <el-table-column prop="name" label="实例名称" align="center" width="200px"/>
                        <el-table-column prop="host" label="发布人" align="center" width="200px"/>
                        <el-table-column prop="status" label="状态" align="center" width="200px"/>
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
                                    size="small">
                                    订阅
                                </el-button>
                                <el-button
                                    size="small">
                                    启动
                                </el-button>
                                <el-button
                                    size="small">
                                    停止
                                </el-button>
                                <el-button
                                    size="small">
                                    执行
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
        name: "Service",
        data: function () {
            return {
                serviceList: [
                    {
                        name: "服务A第一实例",
                        host: "皮皮潘",
                        date: "2019-10-02",
                        status: "RUNNING"
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
                    }
                ]
            }
        },
        methods: {
            detail: function (service) {
                alert(service)
            }
        }
    }
</script>

<style scoped>
    .main {
        margin-top: 50px;
    }
</style>
