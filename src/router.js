import Vue from 'vue'
import Router from 'vue-router'
import SectionsList from '@/components/SectionsList.vue'
import Section from '@/components/Section.vue'
import newSection from "./components/newSection";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/sectionsList',
            component: SectionsList,
            name: 'SectionsList',
            props: true
        },
        {
            path: '/section/:id',
            component: Section,
            name: 'section',
            props: {id: true}
        },
        {
            path: '/newSection',
            component: newSection,
            name: 'newSection',
        },
    ]
})
