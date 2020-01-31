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
                        <input type="search">
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
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>slug</td>
                            <td>Active</td>
                            <td>createdAt</td>
                            <td class="tableActions">
                                <button class="btn btn-aqua btn-link">
                                    <a href="">
                                        <i class="fas fa-eye"></i>
                                        View
                                    </a>
                                </button>
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
    export default {
        name: 'SectionList',
        props: {

        }
    }
</script>

<style scoped lang="scss">

</style>
