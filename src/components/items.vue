<template>
    <div>
        <div class="block">
            <div class="block__header">
                Итемы драть их за ногу
            </div>
            <div class="block__body">
                <div class="item" v-for="(item, id) in items" :key="id">
                    <p>{{ item.name }}</p>
                    <p v-for="(fields, id) in item.data" :key="id">

                        <tamplate v-if="fields.field.type === 'text'">
                            <input type="text" :value="fields.data">
                        </tamplate>

                        <tamplate v-else-if="fields.field.type === 'textarea'">
                            <textarea type="text" :value="fields.data"></textarea>
                        </tamplate>

                        <tamplate v-else-if="fields.field.type === 'file'">
                            <input type="file" accept="image/png, image/jpeg">
                        </tamplate>
                    </p>
                </div>
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
                url: 'https://apic.stereoflo.ru/v1/sections/' + this.$route.params.id + '/items',
                items: [],
            }
        },
        props: {

        }
        ,
        mounted() {
            axios
                .get(this.url)
                .then(response => {this.items = response.data.data.items})
        }
    }
</script>

<style scoped lang="scss"></style>
