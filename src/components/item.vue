<template>
    <div>
        <div class="block">
            <div class="block__header">
                {{itemName}}
            </div>
            <div class="block__body">
                <form class="form" >

                    <div class="inputGroup name">
                        <label>Название:</label>
                        <input type="text" v-model="itemName">
                    </div>

                    <template v-for="(field, index) in item.data">

                        <div :key="index" class="inputGroup text" v-if="field.field.type === 'text'">
                            <label>{{field.field.name}}:</label>
                            <input type="text" :value="field.data">
                        </div>

                        <div :key="index" class="inputGroup textarea" v-else-if="field.field.type === 'textarea'">
                            <label>{{field.field.name}}:</label>
                            <textarea type="text" :value="field.data"></textarea>
                        </div>

                        <div :key="index" class="inputGroup file" v-else-if="field.field.type === 'file'">
                            <input type="file" accept="image/png, image/jpeg">
                        </div>

                    </template>

                    <button class="btn btn-blue">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'item',
        data() {
            return {
                url: 'https://apic.stereoflo.ru/v1/sections/' + this.sectionID + '/items/' + this.itemID,
                item: {},
                itemName: '',
            }
        },
        props: [
            'sectionID',
            'itemID'
        ],
        mounted() {
            axios
                .get(this.url)
                .then(response => {
                    this.item = response.data.data.items[0],
                    this.itemName = response.data.data.items[0].name
                })
        }
    }
</script>

<style scoped lang="scss">

    .form {
        div {
            width: 100%;
        }
        .inputGroup, div .inputGroup {
            flex-direction: column;
            align-items: flex-start;
            label {
                text-align: left;
                margin-bottom: 5px;
            }
            input, textarea {
                width: 100%;
                max-width: none;
            }
            textarea {
                min-height: 100px;
                max-width: 100%;
                min-width: 100%;

            }
        }
        .name {
            order: 0;
        }
        .text {
            order: 1;
        }
        .textarea {
            order: 2;
        }
        .file {
            order: 3;
        }
        button {
            order: 99;
        }
    }
</style>
