<template>
    <div class="categories">
        <h2>{{category}}</h2>
        <product-card v-for="product in categoryProduct"
                      :product="product"
                      :key="product.id"
                      :id="product.id"
        >
        </product-card>
    </div>
</template>
<script setup>
    const props = defineProps({
        category: ''
    });

    const {data: categoryProduct} = await useFetch('https://fakestoreapi.com/products/category/' + props.category);
</script>
<style lang="scss" scoped>
    .categories {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;

        h2{
            width: 100%;
            margin-bottom: 34px;
            text-align: center;
        }
    }
</style>