<template>
    <div class="main">
        <el-radio v-model="radio" label="image">上传镜像</el-radio>
        <el-radio v-model="radio" label="file">上传文件</el-radio>
        <el-row>
            <el-col :offset="6" :span="12">
                <el-input
                    style="margin-top: 20px"
                    v-show="isImage"
                    placeholder="请输入镜像名"
                    type="text"
                    v-model="imageName">
                    <template slot="prepend">镜像名</template>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="8" :span="8">
                <el-upload
                    style="margin-top: 20px"
                    v-show="!isImage"
                    class="upload-demo"
                    ref="upload"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button slot="trigger" size="big" type="primary">选取文件</el-button>
                </el-upload>
            </el-col>
        </el-row>
            <environment-variable
                v-for="variable in variablesList"
                :key="variable">
            </environment-variable>
        <el-row>
            <el-col :span="4" :offset="10">
                <el-button type="success" style="margin-top: 20px;">
                    确认
                </el-button>
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
                imageName: "",
                fileList: [],
                variablesList: [0, 1, 2, 3, 4, 5, 6, 7],
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                }
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
    }
</script>

<style scoped>
    .main {
        margin-top: 50px;
    }
</style>
