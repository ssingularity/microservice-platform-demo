import Vue from 'vue'
import VueRouter from 'vue-router'
import ContainerConfigure from "../views/ContainerConfigure"
import ServiceCreate from "../views/ServiceCreate"
import Service from "../views/Service"
import FileUpload from "../views/FileUpload"
import CompositeService from "../views/CompositeService"
import Procedure from "../views/Procedure"
import NotFound from "../views/404"
import OnlineUpload from "../views/OnlineUpload"
import EmptyPage from "../views/EmptyPage"
import CompositeServiceInstance from "../views/CompositeServiceInstance"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: ContainerConfigure
    },
    {
        path: '/empty',
        component: EmptyPage
    },
    {
        path: '/container-configure',
        component: ContainerConfigure
    },
    {
        path: '/service-create',
        component: ServiceCreate
    },
    {
        path: '/service',
        component: Service
    },
    {
        path: '/composite-service/:id/publish',
        component: Procedure
    },
    {
        path: '/composite-service-configure/online-upload',
        component: OnlineUpload
    },
    {
        path: '/composite-service-configure/file-upload',
        component: FileUpload
    },
    {
        path: '/composite-service',
        component: CompositeService
    },
    {
        path: '/composite-service/:id/instances',
        component: CompositeServiceInstance
    },
    {
        path: '/404',
        component: NotFound,
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
    routes
})

export default router
