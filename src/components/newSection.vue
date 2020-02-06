<template>
    <div>
        <div class="block">
            <div class="block__header">

                <span>Новая секция</span>

                <button @click="addInput" class="btn btn-green" data-modal="modal_1">
                    <i class="fas fa-plus"></i>
                    Добавить поле
                </button>
            </div>
            <div class="block__body">
                <form action="" method="post" class="form">
                    <input type="hidden">

                    <div class="inputGroup">
                        <label for="name">Название:</label>
                        <input type="text" id="name" name="name" value="">
                    </div>
                    <div class="inputGroup">
                        <label for="slug">Сcылка:</label>
                        <input type="text" id="slug" name="slug" value="">
                    </div>
                    <div class="inputGroup">
                        <label for="isActive">Активен?:</label>
                        <input type="checkbox" id="isActive" name="isActive" >
                    </div>

                    <div class="block">
                        <div class="block__header">Поля</div>
                        <div class="block__body sectionFields">
                            <div v-for="(input, id) in inputs" :key="input.id" class="inputGroup">
                                <input type="hidden" name="" :id="id">
                                <label for="">{{input.labelForName}}</label>
                                <input type="text">
                                <label for="">{{input.labelForType}}</label>
                                <select name="" id="">
                                    <option value="" v-for="(type, index) in inputTypes" :key="index">{{ type
                                        }}</option>
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
                counter: 0,
                inputTypes: [
                    'text',
                    'checkbox',
                    'file',
                    'hidden',
                    'image',
                    'password',
                    'radio',
                    'reset',
                    'submit',
                    'button'
                ],
                inputs: [{
                    id: '0',
                    labelForName: 'Имя',
                    labelForType: 'Тип',
                    value: '',
                    inputType: this.inputTypes,
                }],

            }
        },
        props: {

        },
        computed:{

        },
        methods: {
            addInput() {
                this.inputs.push({
                    id: `${++this.counter}`,
                    labelForName: 'Имя',
                    labelForType: 'Тип',
                    value: '',
                    inputType: this.inputTypes,
                });
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
