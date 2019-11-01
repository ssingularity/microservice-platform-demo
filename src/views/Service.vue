<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card header="微服务管理" shadow="hover">
                    <el-input placeholder="请输入微服务名称" v-model="search" style="margin-bottom: 50px">
                        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 110px">
                            <el-option label="我的" value="1"></el-option>
                            <el-option label="其他人的" value="2"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                    <el-tabs type="card" v-model="activeTab">
                        <el-tab-pane label="我未发布的微服务" name="mineUnpublished">
                            <el-table :data="myUnpublishedServiceList">
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
                                            @click="dialogFormVisible=true"
                                            type="success"
                                            :disabled="scope.row.status !== 'RUNNING'"
                                            size="small">
                                            发布
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-button
                                @click="$router.push('/service-create')"
                                type="primary"
                                style="margin-top: 20px">创建微服务实例</el-button>
                        </el-tab-pane>
                        <el-tab-pane label="我发布的微服务" name="minePublished">
                            <el-table :data="myPublishedServiceList">
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
                                            style="margin-right: 10px"
                                            @click="detail(scope.row)"
                                            size="small">
                                            详情
                                        </el-button>
                                        <el-badge class="item" :value="scope.row.checkNumber">
                                            <el-button
                                                size="small">
                                                订阅审核
                                            </el-button>
                                        </el-badge>
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
                                            :disabled="scope.row.isOrdered"
                                            size="small">
                                            {{getOrderType(scope.row.isOrdered)}}
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog :title="'发布'" :visible.sync="dialogFormVisible">
            <el-form label-position="left" label-width="100px">
                <el-form-item v-for="endpoint in endpoints" :key="endpoint" :label="'Endpoint' + endpoint">
                    <Endpoint></Endpoint>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button >增加Endpoint</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Endpoint from "../components/Endpoint"
    export default {
        name: "Service",
        data: function () {
            return {
                dialogFormVisible: false,
                search: "",
                activeTab: "mineUnpublished",
                serviceList: [
                    {
                        name: "服务A第一实例",
                        host: "皮皮潘",
                        date: "2019-10-02",
                        isPublished: false,
                        status: "STOPPED",
                        checkNumber: 0
                    },
                    {
                        name: "服务A第二实例",
                        host: "周鑫",
                        date: "2019-10-05",
                        status: "RUNNING",
                        isOrdered: false
                    },
                    {
                        name: "服务C第一实例",
                        host: "张博",
                        date: "2019-10-06",
                        status: "RUNNING",
                        isOrdered: true
                    },
                    {
                        name: "服务C第二实例",
                        host: "张博",
                        date: "2019-10-01",
                        status: "RUNNING",
                        isOrdered: false
                    },
                    {
                        name: "服务A第四实例",
                        host: "皮皮潘",
                        date: "2019-10-06",
                        isPublished: true,
                        status: "RUNNING",
                        checkNumber: 2
                    },
                    {
                        name: "服务D第四实例",
                        host: "皮皮潘",
                        date: "2019-10-07",
                        isPublished: true,
                        status: "RUNNING",
                        checkNumber: 5
                    },
                    {
                        name: "服务D第一实例",
                        host: "姜美羡",
                        date: "2019-09-05",
                        status: "RUNNING",
                        isOrdered: false
                    },
                ],
                select: '',
                endpoints: [0, 1, 2]
            }
        },
        computed: {
            myUnpublishedServiceList: function () {
                return this.serviceList.filter((service) => service.host === "皮皮潘").filter((service) => service.isPublished === false)
            },
            myPublishedServiceList: function () {
                return this.serviceList.filter((service) => service.host === "皮皮潘").filter((service) => service.isPublished === true)
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
            },
            getOrderType: function (isOrdered) {
                return isOrdered ? '已订阅' : '订阅'
            }
        },
        components: {
            Endpoint
        }
    }
</script>

<style scoped>
    .item {
        top: -10px;
        position: relative;
        margin-top: 20px;
    }
</style>
