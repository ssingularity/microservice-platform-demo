<template>
    <div class="main">
        <el-row>
            <el-col :offset="5" :span="14">
                <el-card shadow="hover" header="服务环境配置">
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
                        <el-form-item>
                            <el-button type="primary">立即创建</el-button>
                            <el-button @click="add">新增可配置变量</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import EnvironmentVariable from "../components/EnvironmentVariable"

    export default {
        name: "ContainerConfigure",
        data: function () {
            return {
                radio: "image",
                fileList: [],
                variablesList: [0, 1, 2],
                opacity: 1
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
