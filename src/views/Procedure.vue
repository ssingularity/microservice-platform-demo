<template>
    <div class="main">
        <el-row>
            <el-col span="22" offset="1">
                <el-card>
                    <el-page-header @back="$router.push('/composite-service')" content="组合服务管理">
                    </el-page-header>
                </el-card>
                <el-card style="margin-top: 10px" shadow="hover" :header="'发布' + $route.params.id">
                    <el-row>
                        <el-col span="10">
                            <el-form label-position="left">
                                <el-form-item label="组合服务实例名称:" label-width="150px">
                                    <el-input v-model="serviceName"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                    <keep-alive>
                        <el-tabs v-model="activeTab" >
                            <el-tab-pane label="服务组合" name="compositeService">
                                <div style="overflow-x: scroll;width: auto; white-space: nowrap; text-align: left">
                                    <ProcedureUnit
                                        v-for="(unit, index) in unitList"
                                        :key="unit.name"
                                        @remove-event="remove(unit)"
                                        @add-service="addService(unit)"
                                        @remove-service="removeServiceInUnit(unit)"
                                        :enableRemove="!(index === 0)"
                                        :Unit="unit"
                                        style="display: inline-block"/>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="触发器" name="trigger"/>
                            <el-tab-pane label="参数" name="variable"/>
                        </el-tabs>
                    </keep-alive>
                    <el-divider></el-divider>
                    <el-button @click="addUnit">添加步骤</el-button>
                    <el-button type="primary">发 布</el-button>
                </el-card>
            </el-col>
        </el-row>
        <el-drawer
            ref="drawer"
            :visible.sync="drawer"
            direction="rtl"
            title="可选择的服务实例">
            <el-collapse v-model="activeNames" style="margin-left: 20px">
                <el-collapse-item title="我拥有的服务实例" name="1">
                    <el-row>
                        <el-col
                            v-for="service in myAvailableService"
                            :key="service.name"
                            offset="1"
                            span="10">
                            <el-card
                                shadow="hover"
                                style="text-align: center;width: 100%; display: inline-block">
                                <div
                                    @mouseover="$event.target.style.cursor='pointer'"
                                    @click="addServiceInUnit(service)"
                                ><b>{{service.name}}</b></div>
                                <div style="text-align: left; color: grey">创建者 : {{service.host}}</div>
                                <div style="text-align: left; color: grey">创建日期: {{service.date}}</div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="我被授权的服务实例" name="2">
                    <el-row>
                        <el-col
                            v-for="service in myAuthorizedService"
                            :key="service.name"
                            offset="1"
                            span="10">
                            <el-card
                                shadow="hover"
                                style="text-align: center;width: 100%; display: inline-block">
                                <div
                                    @mouseover="$event.target.style.cursor='pointer'"
                                    @click="addServiceInUnit(service)"
                                ><b>{{service.name}}</b></div>
                                <div style="text-align: left; color: grey">创建者 : {{service.host}}</div>
                                <div style="text-align: left; color: grey">创建日期: {{service.date}}</div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-collapse-item>
            </el-collapse>
        </el-drawer>
    </div>
</template>

<script>
    import ProcedureUnit from "../components/ProcedureUnit"
    export default {
        name: "Procedure",
        components: {
            ProcedureUnit
        },
        computed: {
            myAvailableService: function () {
                return this.availableService.filter((x) => x.host === "皮皮潘")
            },
            myAuthorizedService: function () {
                return this.availableService.filter((x) => !(x.host === "皮皮潘"))
            }
        },
        data: function () {
            return {
                activeNames: ['1'],
                unit: {},
                drawer: false,
                unitList: [
                    {
                        name: "步骤1",
                        serviceList: [
                            {
                                name: "服务A第一实例",
                            },
                            {
                                name: "服务A第二实例",
                            }
                        ]
                    },
                    {
                        name: "步骤2",
                        serviceList: [
                            {
                                name: "服务C第一实例"
                            }
                        ]
                    },
                ],
                availableService: [
                    {
                        name: "服务A第一实例",
                        host: '皮皮潘',
                        date: "2019-10-02",
                    },
                    {
                        name: "服务A第二实例",
                        host: '张博',
                        date: "2019-10-03",
                    },
                    {
                        name: "服务A第三实例",
                        host: '周鑫',
                        date: "2019-10-04",
                    },
                    {
                        name: "服务B第二实例",
                        host: '皮皮潘',
                        date: "2019-11-02",
                    },
                    {
                        name: "服务C第一实例",
                        host: '皮皮潘',
                        date: "2019-10-01",
                    },
                    {
                        name: "服务C第三实例",
                        host: '张博',
                        date: "2019-09-02",
                    },
                ],
                maxNumber: 2,
                serviceName: "",
                activeTab: "compositeService"
            }
        },
        methods: {
            remove: function (unit) {
                let index = this.unitList.indexOf(unit)
                this.unitList.splice(index, 1)
            },
            addService: function (unit) {
                this.drawer = true
                this.unit = unit
            },
            addServiceInUnit: function (service) {
                this.unit.serviceList.push(service)
                this.$refs.drawer.closeDrawer()
            },
            removeServiceInUnit: function (unit, service) {
                let index = unit.serviceList.indexOf(service)
                unit.serviceList.splice(index, 1)
            },
            addUnit: function () {
                this.unitList.push({
                    name: '步骤' + ++this.maxNumber,
                    serviceList: []
                })
            }
        }
    }
</script>

<style scoped>

</style>
