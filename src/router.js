import Vue from 'vue'
import Router from 'vue-router'
import SectionsList from '@/components/SectionsList.vue'
import SectionInfo from '@/components/SectionInfo.vue'
import newSection from "./components/newSection";
import items from "./components/items";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/sectionsList',
            component: SectionsList,
            name: 'SectionsList',
        },
        {
            path: '/sectionInfo/:id',
            component: SectionInfo,
            name: 'sectionInfo',
            props: true
        },
        {
            path: '/items/:id',
            component: items,
            name: 'items',
            props: true
        },
        {
            path: '/newSection',
            component: newSection,
            name: 'newSection',
        },
    ]
})
