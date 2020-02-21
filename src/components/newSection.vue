<template>
    <div>
        <div class="block">
            <div class="block__header">

                <span>Новая секция</span>

                <button @click="addInput" class="btn btn-green">
                    <i class="fas fa-plus"></i>
                    Добавить поле
                </button>
            </div>
            <div class="block__body">
                <form class="form">
                    <input type="hidden">

                    <div class="inputGroup">
                        <label for="name">Название:</label>
                        <input type="text" id="name" name="name" value="" v-model="post.name">
                    </div>
                    <div class="inputGroup">
                        <label for="slug">Сcылка:</label>
                        <input type="text" id="slug" name="slug" value="" v-model="post.slug">
                    </div>
                    <div class="inputGroup">
                        <label for="isActive">Активен?:</label>
                        <input type="checkbox" id="isActive" name="isActive" v-model="post.isActive">
                    </div>

                    <div class="block">
                        <div class="block__header">Поля</div>
                        <div class="block__body sectionFields">
                            <div v-for="(input, index) in inputs" :key="index" class="inputGroup">

                                <div class="inputGroup__item">
                                    <label for="">Имя:</label>
                                    <input type="text" v-model="input.name">
                                </div>

                                <div class="inputGroup__item">
                                    <label for="">Тип:</label>
                                    <select name="" id="" v-model="input.type">

                                        <option v-for="(type, index) in inputTypes" :key="index">
                                            {{ type }}
                                        </option>

                                    </select>
                                </div>

                                <div class="inputGroup__item">
                                    <div class="delInput" @click="delInput(index)">
                                        <i class="fas fa-trash-alt"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <button class="btn btn-blue" @click.prevent="submit">Отправить</button>

                </form>

            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'newSection',

        data() {
            return {
                count: 0,
                url: 'https://apic.stereoflo.ru/v1/sections',
                inputTypes: [
                    'text',
                    'textarea',
                    'checkbox',
                    'radio',
                    'file',
                ],
                inputs: [{
                    name: '',
                    type: '',
                }],
                post: {
                    name: '',
                    slug: '',
                    isActive: true,
                    fields: []
                },
                errors: []
            }
        },
        props: {

        },
        computed:{

        },
        methods: {
            addInput() {
                this.inputs.push({
                    name: '',
                    type: '',
                });

            },
            delInput (index) {
                this.inputs.splice(index, 1);
            },
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
        }
    }
</script>

<style scoped lang="scss">
    .delInput {
        display: inline-block;
        margin-left: 15px;
        color: red;
        font-size: 18px;
        transition: 0.25s;
        &:hover {
            cursor: pointer;
            text-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
        }
    }
    .sectionFields .inputGroup {
        justify-content: space-around;
        input, select {
            min-width: 150px;
        }
    }
</style>
