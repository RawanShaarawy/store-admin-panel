<template>
    <div class="main-content" id="products">
        <h1>Products</h1>
        <div class="addProduct">
            <button @click="dialog = true">Add New Product</button>
        </div>
        <product-card v-for="product in products"
                      :product="product"
                      :key="product.id"
                      :id="product.id"
        >
        </product-card>

        <v-dialog
                v-model="dialog"
                width="auto"
        >
            <form @submit.prevent="dialog=false; addProduct()">
                <i class="mdi mdi-close" @click="dialog = false"></i>

                <label for="image">Image URL</label>
                <input type="text" id="image" v-model="productToAdd.image" placeholder="Image URL">

                <label for="title">Title</label>
                <input type="text" id="title" v-model="productToAdd.title" placeholder="Title" autocomplete="off">

                <label for="description">Description</label>&nbsp;
                <input type="text" id="description" v-model="productToAdd.description" placeholder="Description">

                <label for="price">Price</label>
                <input type="number" id="price" v-model="productToAdd.price" placeholder="price">


                <label for="category">Category</label>
                <select name="category" id="category" v-model="productToAdd.category">
                    <option v-for="category in categories" :value="category">{{category}}</option>
                </select>

                <button type="submit">Add</button>
            </form>
        </v-dialog>

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

        .addProduct {
            width: 100%;
            margin: 0 105px 36px;
            display: flex;
            justify-content: flex-end;

            button {
                background: linear-gradient(160deg, #73cad4, #3756a2);
                width: max-content;
                color: #FFF;
                padding: 8px;
                text-align: center;
                border-radius: 3px;
                align-self: end;
            }
        }
    }

    form {
        width: 400px;
        background-color: white;
        padding: 16px 24px;
        display: flex;
        flex-direction: column;
        border-radius: 2px;

        .mdi-close {
            align-self: flex-end;
            font-size: 20px;
            margin-bottom: 16px;
        }

        input, select {
            background-color: #34495e;
            color: white;
            padding: 8px 16px;
            border-radius: 2px;
            margin: 8px 0 24px;
        }

        button {
            background: linear-gradient(160deg, #73cad4, #3756a2);
            align-self: flex-end;
            border-radius: 5px;
            width: 100px;
            padding: 8px;
            color: white;
        }
    }
</style>
<script setup>
    import { reactive } from "vue";
    import {useFetch} from "../.nuxt/imports";

    // definePageMeta({
    //     middleware: 'auth',
    // })
    let products = reactive([]);
    await fetch('https://fakestoreapi.com/products').then((res)=> res.json()).then(function(res){
        console.log(res,'resresresres')
         products = res
    });
    const {data: categories} = await useFetch('https://fakestoreapi.com/products/categories');

    const productToAdd = reactive({ image: '', title: '', description: '', price: 0, category: '' });

    const addProduct = function(event){
        products.push({...productToAdd});
    }
</script>
<script>
    export default {
        data() {
            return {
                dialog:false,

            }
        }
    }
</script>