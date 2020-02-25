<template>
    <div>
        <div class="block">
            <div class="block__header">
                <span>Секция: </span>
            </div>
            <div class="block__body">

                <div class="toolsBlock">
                    <div class="addNew">
                        <router-link :to="{ name: 'newItem', params: { sectionID: sectionId }}">
                            <button class="btn btn-green btn-link">
                                <i class="fas fa-plus"></i>
                                Add New
                            </button>
                        </router-link>
                    </div>
                    <div class="searchBlock">
                        <input type="search" v-model="itemsSearch">
                        <div class="icon-btn">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>

                <div class="tableBlock">
                    <table>
                        <tbody>
                        <tr>
                            <!--                            <th>ID</th>-->
                            <th>Name</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="(item, id) in filterBy(pagination, itemsSearch, 'name')"
                            v-bind:key="id">
                            <!--                            <td>{{ item.id }}</td>-->
                            <td>{{ item.name }}</td>
                            <td>{{ item.created_at}}</td>
                            <td class="tableActions">

                                <router-link :to="{ name: 'item', params: { itemID: item.id, sectionID: sectionId}}">
                                    <button class="btn btn-aqua btn-link">
                                        <i class="fas fa-eye"></i>
                                        View
                                    </button>
                                </router-link>

<!--                                <router-link :to="{ name: 'sectionInfo', params: { id: item.id}}">-->
<!--                                    <button class="btn btn-blue btn-link">-->
<!--                                        <i class="fas fa-info-circle"></i>-->
<!--                                        Info-->
<!--                                    </button>-->
<!--                                </router-link>-->

                                <router-link :to="{}">
                                    <button class="btn btn-red btn-link">
                                        <i class="fas fa-trash-alt"></i>
                                        Delete
                                    </button>
                                </router-link>
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
        name: 'items',
        mixins: [Vue2Filters.mixin],
        data() {
            return {
                sectionId: this.$route.params.id,
                url: 'https://apic.stereoflo.ru/v1/sections/' + this.$route.params.id + '/items',
                items: [],
                itemsSearch: '',
                itemsPerPage: 10,
                pageNumber: 1,
            }
        },
        props: {

        },
        computed:{
            pages() {
                return Math.ceil(this.items.length / 10);
            },
            pagination() {
                let from = (this.pageNumber -1) * this.itemsPerPage;
                let to = from + this.itemsPerPage;
                return this.items.slice(from , to);
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
                .then(response => {this.items = response.data.data.items})
        }
    }
</script>

<style scoped lang="scss">
    .block {
        width: 955px;
    }
    .tableBlock {
        white-space: nowrap;
    }
    .tableActions {
        justify-content: center;
        a {
            margin-right: 10px;
        }
        &:last-child {
            margin-right: 0;
        }
    }
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
