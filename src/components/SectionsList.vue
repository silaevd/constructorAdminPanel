<template>
    <div>
        <div class="block">
            <div class="block__header">
                <span>Секции</span>
            </div>
            <div class="block__body">

                <div class="toolsBlock">
                    <div class="addNew">
                        <router-link :to="{ name: 'newSection'}">
                            <button class="btn btn-green btn-link">
                                <i class="fas fa-plus"></i>
                                Add New
                            </button>
                        </router-link>
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
                        <tr v-for="(item, id) in filterBy(pagination, sectionsSearch, 'name')"
                            v-bind:key="id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.slug }}</td>
                            <td>{{ item.status }}</td>
                            <td>{{ item.created_at}}</td>
                            <td class="tableActions">

                                <router-link :to="{ name: 'section', params: { id: item.id }}">
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
                <div class="pagination">
                    <div class="page"
                         v-for="page in pages"
                         :key="page"
                         :class="{page_selected: page === pageNumber}"
                         @click="pageClick(page)">{{ page }}</div>
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
                url: 'https://apic.stereoflo.ru/v1/sections',
                // url: 'http://localhost/v1/sections',
                sections: [],
                sectionsPerPage: 10,
                pageNumber: 1

            }
        },
        props: {

        },
        computed:{
            pages() {
                return Math.ceil(this.sections.length / 10);
            },
            pagination() {
                let from = (this.pageNumber -1) * this.sectionsPerPage;
                let to = from + this.sectionsPerPage;
                return this.sections.slice(from , to);
            }
        },
        methods: {
          pageClick(page) {
              this.pageNumber = page;
          }
        },
        mounted() {
            axios
                .get(this.url)
                .then(response => {this.sections = response.data.data})
        }
    }
</script>

<style scoped lang="scss">
    .pagination {
        display: flex;
        justify-content: flex-end;
        margin: 15px 0;
        :first-child {
            border-left: solid 1px #cecece;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        :last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        .page {
            text-align: center;
            width: 40px;
            padding: 5px 10px;
            border-right: solid 1px #cecece;
            border-top: solid 1px #cecece;
            border-bottom: solid 1px #cecece;
            transition: 300ms;
            &:hover {
                /*cursor: pointer;*/
                background: #cecece;
                cursor: pointer;
                box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
                transition-duration: 0.2s;
                transition-property: box-shadow;
            }
            &_selected {
                background: #6c747d;
                color: #fff;
                border-color: #6c747d;
                &:hover {
                    background: #6c747d;
                    color: #fff;
                    border-color: #6c747d;
                    box-shadow: none;
                    cursor: default;
                }
            }
        }
    }
</style>
