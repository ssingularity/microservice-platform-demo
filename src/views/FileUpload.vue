<template>
    <div class="main">
        <el-row>
            <el-col :offset="5" :span="14">
                <el-card header="BPMN文件上传" shadow="hover" >
                    <el-form label-position="left" label-width="120px">
                        <el-form-item label="组合服务名称">
                            <el-input
                                placeholder="请输入组合服务名称"
                                type="text">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="组合服务描述">
                            <el-input
                                placeholder="请输入服务描述"
                                type="text">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="BMPN文件上传">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple
                                show-file-list="true"
                                drag>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="margin: 20px">
                                提交
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Fileupload"
    }
</script>

<style scoped>
</style>
