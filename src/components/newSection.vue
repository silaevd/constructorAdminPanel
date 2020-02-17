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
                <form action="" method="post" class="form">
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
                        <input type="checkbox" id="isActive" name="isActive" >
                    </div>

                    <div class="block">
                        <div class="block__header">Поля</div>
                        <div class="block__body sectionFields">
                            <div v-for="(input, index) in inputs" :key="index" class="inputGroup">
                                <label for="">{{input.labelForName}}</label>
                                <input type="text" v-model="inputs.name">
                                <label for="">{{input.labelForType}}</label>
                                <select name="" id="" v-model="inputs.type">
                                    <option disabled value="Выберите тип"></option>
                                    <option v-for="(type, index) in inputTypes" :key="index">
                                        {{ type }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-blue">Сохранить</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'newSection',

        data() {
            return {
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
                    value: '',
                    inputType: this.inputTypes,
                }],
                post: {
                    name: '',
                    slug: '',
                    fields: []
                },
                field: {
                    name: '',
                    type: '',
                }
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
                    name: '',
                    type: '',
                    value: '',
                    inputType: this.inputTypes,
                });
            },
            addFieldsInPost() {

            }
        }
    }
</script>

<style scoped lang="scss">

</style>
