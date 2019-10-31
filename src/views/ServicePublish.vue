<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card header="可发布微服务" shadow="hover">
                    <el-table :data="containerConfigureList">
                        <el-table-column prop="date" label="配置日期" align="center"/>
                        <el-table-column prop="name" label="服务名称" align="center"/>
                        <el-table-column prop="description" label="服务描述" align="center"/>
                        <el-table-column label="可配置变量" align="center">
                            <template slot-scope="scope">
                                <el-tag  style="margin: 5px" v-for="variable in scope.row.variablesList" :key="variable.key">
                                    {{variable.key}}
                                </el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="运行实例数" align="center" prop="count"/>
                        <el-table-column
                            fixed="right"
                            label="操作"
                            align="center"
                            width="200px">
                            <template slot-scope="scope">
                                <el-button
                                    size="small">
                                    详情
                                </el-button>
                                <el-button
                                    @click="publish(scope.row)"
                                    type="success"
                                    size="small">
                                    发布
                                </el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                </el-card>
                <el-dialog :title="'发布' + containerConfigure.name" :visible.sync="dialogFormVisible">
                    <el-form label-position="left" label-width="100px">
                        <el-form-item label="实例名称">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item v-for="variable in containerConfigure.variablesList" :key="variable.key" :label="variable.key">
                            <el-input v-model="variable.value"></el-input>
                        </el-form-item>
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
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Endpoint from "../components/Endpoint"
    export default {
        name: "ServicePublish",
        data: function () {
            return {
                containerConfigure: {},
                containerConfigureList: [
                    {
                        name: "服务A",
                        description: "我也不知道服务A是啥",
                        count: 1,
                        date: "2019-05-03",
                        variablesList: [
                            {
                                key: "设备ID",
                                value: "1234"
                            },
                            {
                                key: "端口",
                                value: "8080"
                            },
                            {
                                key: "时区",
                                value: "北京"
                            }
                        ]
                    },
                    {
                        name: "服务B",
                        description: "反正就是服务B",
                        count: 2,
                        date: "2019-06-03",
                        variablesList: [
                            {
                                key: "设备ID",
                                value: "1234"
                            },
                            {
                                key: "端口",
                                value: "8080"
                            },
                        ]
                    },
                    {
                        name: "服务C",
                        description: "这是一个可以操纵喷漆设备的服务",
                        count: 0,
                        date: "2019-06-01",
                        variablesList: [
                            {
                                key: "设备ID",
                                value: "1234"
                            },
                            {
                                key: "端口",
                                value: "8080"
                            },
                            {
                                key: "日志等级",
                                value: "DEBUG"
                            }
                        ]
                    },
                ],
                dialogFormVisible: false,
                endpoints: [0, 1, 2]
            }
        },
        methods: {
            publish: function (row) {
                this.dialogFormVisible = true
                this.containerConfigure = row
            }
        },
        components: {
            Endpoint
        }
    }
</script>

<style scoped>
</style>
