<template>
    <div>
        <div class="block">
            <div class="block__header">
                <span>Секции</span>
            </div>
            <div class="block__body">

                <div class="toolsBlock">
                    <div class="addNew">
                        <button class="btn btn-green btn-link">
                            <a href="">
                                <i class="fas fa-plus"></i>
                                Add New
                            </a>
                        </button>
                    </div>
                    <div class="searchBlock">
                        <input type="search" v-model="sectionsSearch">
                        <div class="icon-btn">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>

                <div class="tableBlock">
                    <table>
                        <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="(item, id) in filterBy(sections, sectionsSearch, 'name')"
                            v-bind:key="id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.slug }}</td>
                            <td>{{ item.status }}</td>
                            <td>{{ item.created_at}}</td>
                            <td class="tableActions">

                                <router-link :to="{ name: 'section', params: { id: id }}">
                                    <button class="btn btn-aqua btn-link">
                                        <i class="fas fa-eye"></i>
                                        View
                                    </button>
                                </router-link>

                                <button class="btn btn-blue btn-link">
                                    <a href="">
                                        <i class="fas fa-edit"></i>
                                        Edit
                                    </a>
                                </button>
                                <button class="btn btn-red btn-link">
                                    <a href="">
                                        <i class="fas fa-trash-alt"></i>
                                        Delete
                                    </a>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue2Filters from 'vue2-filters'

    export default {
        name: 'SectionsList',
        mixins: [Vue2Filters.mixin],

        data() {
            return {
                sectionsSearch: '',
                url: 'http://localhost:8080/data.json',
                sections: [],

            }
        },
        props: {

        },
        computed:{

        },
        mounted() {
            axios
                .get(this.url)
                .then(response => {this.sections = response.data.data})
        }
    }
</script>

<style scoped lang="scss">

</style>
