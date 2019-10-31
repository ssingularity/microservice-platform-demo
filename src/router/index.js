import Vue from 'vue'
import VueRouter from 'vue-router'
import ContainerConfigure from "../views/ContainerConfigure"
import Container from "../views/Container"
import ServicePublish from "../views/ServicePublish"
import Service from "../views/Service"
import FileUpload from "../views/FileUpload"
import CompositeService from "../views/CompositeService"
import Procedure from "../views/Procedure"
import NotFound from "../views/404"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: ContainerConfigure
    },
    {
        path: '/container-configure',
        component: ContainerConfigure
    },
    {
        path: '/container',
        component: Container
    },
    {
        path: '/service-publish',
        component: ServicePublish
    },
    {
        path: '/service',
        component: Service
    },
    {
        path: '/composite-service-publish/procedure',
        component: Procedure
    },
    {
        path: '/composite-service-publish/file-upload',
        component: FileUpload
    },
    {
        path: '/composite-service',
        component: CompositeService
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
