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
                        <input type="checkbox" id="isActive" name="isActive">
                    </div>

                    <div class="block">
                        <div class="block__header">Поля</div>
                        <div class="block__body sectionFields">
                            <div v-for="(input, index) in inputs" :key="index" class="inputGroup">

                                <label for="">{{input.labelForName}}</label>
                                <input type="text" v-model="input.name">

                                <label for="">{{input.labelForType}}</label>
                                <select name="" id="" v-model="input.type">

                                    <option selected disabled>Выберите тип</option>
                                    <option v-for="(type, index) in inputTypes" :key="index">
                                        {{ type }}
                                    </option>

                                </select>
                                <button @click.prevent="delInput(index)">del</button>
                                <p>{{input}}</p>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-blue">Сохранить</button>


                </form>

                <pre>{{ $data.inputs | json }}</pre>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'newSection',

        data() {
            return {
                count: 0,
                inputTypes: [
                    'text',
                    'checkbox',
                    'file',
                    'radio',
                ],
                inputs: [{
                    labelForName: 'Имя',
                    labelForType: 'Тип',
                    name: '',
                    type: '',
                    inputType: this.inputTypes,
                }],
                post: {
                    name: '',
                    slug: '',
                    fields: []
                },
                fields: [],
                name: [],
                type: []
            }
        },
        props: {

        },
        computed:{

        },
        methods: {
            addInput() {
                this.inputs.push({
                    labelForName: 'Имя',
                    labelForType: 'Тип',
                    type: '',
                    value: '',
                    inputType: this.inputTypes,
                });

            },
            delInput: function (index) {
                this.inputs.splice(index, 1);
            },
            addFieldsInPost() {

            }
        }
    }
</script>

<style scoped lang="scss">

</style>
