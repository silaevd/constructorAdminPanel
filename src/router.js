import Vue from 'vue'
import Router from 'vue-router'
import SectionsList from '@/components/SectionsList.vue'
import SectionInfo from '@/components/SectionInfo.vue'
import newSection from "./components/newSection";
import itemsList from "./components/itemsList";
import item from "./components/item";
import newItem from "./components/newItem";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/sections-list',
            component: SectionsList,
            name: 'SectionsList',
        },
        {
            path: '/section-info/:id',
            component: SectionInfo,
            name: 'sectionInfo',
            props: true
        },
        {
            path: '/section/:id/items-list',
            component: itemsList,
            name: 'itemsList',
            props: true
        },
        {
            path: '/section/:sectionID/item/:itemID',
            component: item,
            name: 'item',
            props: true,
        },
        {
            path: '/section/:sectionID/new-item/',
            component: newItem,
            name: 'newItem',
            props: true,
        },
        {
            path: '/new-section',
            component: newSection,
            name: 'newSection',
        },
    ]
})
