<template>
    <div class="main-content">
        <h1>Categories</h1>
        <categoryProducts v-for="category in categories"
                      :category="category"
                      :key="category"
        >
        </categoryProducts>
        {{categories}}
    </div>
</template>
<style lang="scss" scoped>
    .main-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 100px;
        justify-content: center;

        h1{
            width: 100%;
            margin-bottom: 34px;
            text-align: center;
        }
    }
</style>
<script setup>
    import {useFetch} from "../.nuxt/imports";

    // definePageMeta({
    //     middleware: 'auth',
    // })

    const {data: categories} = await useFetch('https://fakestoreapi.com/products/categories');

</script>