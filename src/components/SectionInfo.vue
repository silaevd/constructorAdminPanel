<template>
    <div>
        <div class="block">
            <div class="block__header">Информация о секции</div>
            <div class="block__body">
                <p>
                    <span class="key">ID:</span>
                    <span class="value">{{ item.id }}</span>
                </p>
                <p>
                    <span class="key">Названиме:</span>
                    <span class="value">{{ item.name }}</span>
                </p>
                <p>
                    <span class="key">Имя ссылки:</span>
                    <span class="value">{{ item.slug }}</span>
                </p>
                <p>
                    <span class="key">Дата создания:</span>
                    <span class="value">{{ item.created_at }}</span>
                </p>
<!--                <p>-->
<!--                    <span class="key">Дата изменения:</span>-->
<!--                    <span class="value">{{ item.updated_at }}</span>-->
<!--                </p>-->

            </div>
        </div>
        <div class="block">
            <div class="block__header">Поля секции</div>
            <div class="block__body">
                <p v-for="field in item.fields" :key="field.id">
                    <span class="filedName">
                        <span class="key">Имя:</span>
                        <span class="value">{{ field.name }}</span>
                    </span>
                    <span class="fieldType">
                        <span class="key">Тип:</span>
                        <span class="value">{{ field.type }}</span>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SectionInfo',
        data() {
            return {
                sectionID: this.$route.params.id,
                url: 'https://apic.stereoflo.ru/v1/sections/' + this.$route.params.id,
                item: {},
            }
        },
        props: {

        }
        ,
        mounted() {
            axios
                .get(this.url)
                .then(response => {this.item = response.data.data})
        }
    }
</script>

<style scoped lang="scss">
    .key {
        display: inline-block;
        width: 160px;
        font-weight: bold;
    }
    .value {
        display: inline-block;
        background: #e8e8e8;
        padding: 3px 10px;
        width: 180px;
    }
    .fieldType {
        margin-right: 30px;
    }
    .fieldType, .filedName {
        .key {
            width: 50px;
        }
    }
    .filedName {
        margin-right: 70px;
    }
</style>
