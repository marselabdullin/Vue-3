import {createRouter, createWebHistory} from 'vue-router'
import Tasks from '@/views/Tasks'
import New from '@/views/New'
import Task from '@/views/Task'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Tasks},
        {path: '/new', component: New},
        {path: '/task/:id', component: Task}
    ],
    linkActiveClass: 'active'
})
