<template>
    <div class="main">
        <el-row>
            <el-col span="18" offset="3">
                <el-card>
                    <el-page-header @back="$router.go(-1)" content="">
                    </el-page-header>
                </el-card>
                <el-card style="margin-top: 10px" shadow="hover" header="待开发">

                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "EmptyPage"
    }
</script>

<style scoped>

</style>
