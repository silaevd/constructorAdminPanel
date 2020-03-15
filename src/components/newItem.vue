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

                    <template v-for="(field, index) in fields">

                        <div :key="index" class="inputGroup text" v-if="field.type === 'text'">
                            <label>{{field.name}}:</label>
                            <input type="text" value="" :id="field.id" v-model="field.data">
                        </div>

                        <div :key="index" class="inputGroup textarea" v-else-if="field.type === 'textarea'">
                            <label>{{field.name}}:</label>
                            <textarea type="text" :id="field.id" v-model="field.data"></textarea>
                        </div>

                        <div :key="index" class="inputGroup file" v-else-if="field.type === 'file'">
                            <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    :id="field.id" ref="file"
                                    v-on:input="fileUpload"
                            >
                        </div>

                    </template>

                    <button @click.prevent="submit" class="btn btn-blue">Сохранить</button>
                    <button @click.prevent="submitFile" class="btn btn-green">submitFile</button>
                </form>

            </div>

            <pre>{{ log }}</pre>
            <pre>{{ filesResp }}</pre>
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
                getUrl: 'https://apic.stereoflo.ru/v1/sections/' + this.sectionID,
                postUrl: 'https://apic.stereoflo.ru/v1/items',
                postFilesUrl: 'https://apic.stereoflo.ru/v1/files',
                section: [],
                name: 'Имя итема',
                files: [],
                filesResp: '',
                log: '',
                inputTypes: [

                ],
                fields: [],
                fieldsForData: [],
                post: {
                    name: '',
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
                this.clonearr();
                this.post.name = this.name;
                this.post.data = this.fieldsForData.slice();
            },
            submit() {
                this.saveFieldsInPost();
                axios
                    .post(this.postUrl, this.post)
                    .catch((error) => {this.errors.push(error);
                    });
            },
            saveToFields() {
                let item = [];
                for (let field of this.section.fields) {
                    item.push(field);
                }
                for (let i of item) {
                    this.fields.push({
                        field_id : i.id,
                        type: i.type,
                        name: i.name,
                        data: 'data'
                    })
                }
            },
            clonearr() {
                for (let i of this.fields) {
                    this.fieldsForData.push({
                        field_id : i.field_id,
                        data: i.data
                    })
                }
            },
            fileUpload() {
                this.files = this.$refs.file[0].files[0];
                this.log = this.$refs.file[0].files[0].type;
                // this.submitFile();
            },
            submitFile() {
                let formData = new FormData();
                formData.append('file', this.files);
                axios.post( this.postFilesUrl,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                .then(response => {
                    this.filesResp = response.data
                })
                .catch(function(){
                });
            },
        },
        beforeMount() {

        },
        mounted() {
            axios
                .get(this.getUrl)
                .then(response => {
                    this.section = response.data.data,
                    this.saveToFields()
                })
        },
        created() {

        },
        beforeUpdate() {

        },
        updated() {
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
