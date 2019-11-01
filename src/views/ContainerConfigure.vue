<template>
    <div class="main">
        <el-row>
            <el-col :offset="3" :span="18">
                <el-card header="服务模板管理" shadow="hover">
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
                            width="300px">
                            <template slot-scope="scope">
                                <el-button
                                    size="small">
                                    详情
                                </el-button>
                                <el-button
                                    :disabled="scope.row.count !== 0"
                                    size="small">
                                    修改
                                </el-button>
                                <el-button
                                    :disabled="scope.row.count !== 0"
                                    type="danger"
                                    size="small">
                                    删除
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
                    <el-button
                        @click="dialogFormVisible = true"
                        type="primary"
                        style="margin-top: 20px">创建服务模板</el-button>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog title="新增服务模板" :visible.sync="dialogFormVisible">
            <el-form ref="form"  label-position="left" label-width="100px" :style="'opacity:' + opacity">
                <el-form-item label="服务名称">
                    <el-input
                        placeholder="请输入服务名称"
                        type="text">
                    </el-input>
                </el-form-item>
                <el-form-item label="服务描述">
                    <el-input
                        placeholder="请输入服务描述"
                        type="text">
                    </el-input>
                </el-form-item>
                <el-form-item label="上传方式">
                    <el-radio v-model="radio" label="image">镜像</el-radio>
                    <el-radio v-model="radio" label="file">文件</el-radio>
                </el-form-item>
                <el-form-item v-show="isImage" label="上传镜像">
                    <el-input
                        placeholder="请输入镜像名"
                        type="text">
                    </el-input>
                </el-form-item>
                <el-form-item v-show="!isImage" label="上传文件">
                    <el-upload
                        ref="upload"
                        :file-list="fileList"
                        :auto-upload="false">
                        <el-button slot="trigger" size="big" type="primary">选取文件</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item
                    v-for="variable in variablesList"
                    :key="variable" :label="'可配置变量'+variable">
                    <environment-variable @remove-event="removeVariable(variable)"></environment-variable>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="add">新增可配置变量</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import EnvironmentVariable from "../components/EnvironmentVariable"

    export default {
        name: "ContainerConfigure",
        data: function () {
            return {
                dialogFormVisible: false,
                radio: "image",
                fileList: [],
                variablesList: [0, 1, 2],
                opacity: 1,
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
            }
        },
        computed: {
            isImage: function () {
                return this.radio === "image"
            }
        },
        components: {
            EnvironmentVariable
        },
        methods: {
            removeVariable: function (number) {
                let index = this.variablesList.indexOf(number)
                this.variablesList.splice(index, 1)
            },
            add: function () {
                let length = this.variablesList.length
                this.variablesList.splice(length, 0, length)
            }
        }
    }
</script>

<style scoped>
</style>
