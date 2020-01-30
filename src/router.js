import Vue from 'vue'
import Router from 'vue-router'
import SectionList from '@/components/SectionList.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/sectionList',
            component: SectionList
        }
    ]
})
