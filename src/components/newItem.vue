<template>
    <div>
        <div class="block">
            <div class="block__header">
                <span>{{name}}</span>
            </div>
            <div class="block__body">
                <form class="form" >

                    <div class="inputGroup">
                        <label for="name">Имя:</label>
                        <input type="text" id="name" name="name" value="" v-model="name">
                    </div>

                    <template v-for="(field, index) in section.fields">

                        <div :key="index" class="inputGroup text" v-if="field.type === 'text'">
                            <label>{{field.name}}:</label>
                            <input type="text" value="" :id="field.id">
                        </div>

                        <div :key="index" class="inputGroup textarea" v-else-if="field.type === 'textarea'">
                            <label>{{field.name}}:</label>
                            <textarea type="text" :id="field.id"></textarea>
                        </div>

                        <div :key="index" class="inputGroup file" v-else-if="field.type === 'file'">
                            <input type="file" accept="image/png, image/jpeg" :id="field.id">
                        </div>

                    </template>

                    <button class="btn btn-blue">Сохранить</button>
                </form>

            </div>
<pre>{{section}}</pre>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'newItem',

        data() {
            return {
                count: 0,
                url: 'https://apic.stereoflo.ru/v1/sections/' + this.sectionID,
                section: [],
                name: 'Имя итема',
                inputTypes: [

                ],
                fields: [{
                    field_id: '',
                    data: ''
                }],
                post: {
                    name: this.name,
                    section_id: this.sectionID,
                    data: []
                },
                errors: []
            }
        },
        props: [
            'sectionID'
        ],
        computed:{

        },
        methods: {
            saveFieldsInPost() {
                this.post.fields = this.inputs.slice();
            },
            submit() {
                this.saveFieldsInPost();
                axios
                    .post(this.url, this.post)
                    .catch((error) => {this.errors.push(error);
                    });
            }
        },
        mounted() {
            axios
                .get(this.url)
                .then(response => {
                    this.section = response.data.data
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
