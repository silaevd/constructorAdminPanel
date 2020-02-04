<template>
    <div>
        <p>{{item}}</p>
        <div class="item" >
            <p>ID: {{ item.id }} </p>
            <p>Slug: {{ item.slug }} </p>
            <p>Name: {{ item.name }}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Section',
        data() {
            return {
                url: 'http://localhost:8080/data'+ this.$route.params.id +'.json',
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

</style>
