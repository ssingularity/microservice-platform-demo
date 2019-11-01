<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card>
                    <el-page-header @back="$router.push('/service')" content="微服务管理">
                    </el-page-header>
                </el-card>
                <el-card header="可创建服务" shadow="hover" style="margin-top: 10px">
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
                                    创建
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
        <el-dialog :title="'创建' + containerConfigure.name + '实例'" :visible.sync="dialogFormVisible">
            <el-form label-position="left" label-width="100px">
                <el-form-item label="实例名称">
                    <el-input v-model="instanceName"></el-input>
                </el-form-item>
                <el-form-item v-for="variable in containerConfigure.variablesList" :key="variable.key" :label="variable.key">
                    <el-input v-model="variable.value"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ServiceCreate",
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
            }
        },
        methods: {
            publish: function (row) {
                this.dialogFormVisible = true
                this.containerConfigure = row
            }
        },
        computed: {
            instanceName: function () {
                return this.containerConfigure.name + '第' + Math.floor(Math.random() * 10) + "实例"
            }
        }
    }
</script>

<style scoped>
</style>
