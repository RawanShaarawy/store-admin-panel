<template>
    <div class="product">
        <div class="product__actions">
            <i class="mdi mdi-square-edit-outline" @click="dialog = true">
            </i>
            <i class="mdi mdi-trash-can-outline" @click="deleteProduct"></i>
        </div>
        <div class="product__img" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
        <div class="product__info">
            <div>
                <h3 class="product__info-title">{{product.title}}</h3>
                <p class="product__info-description">{{product.description}}</p>
            </div>
            <p class="product__price"> $ {{product.price}}</p>
        </div>

        <v-dialog
                v-model="dialog"
                width="auto"
        >
            <form @submit.prevent="dialog=false; updateProduct()">
                <i class="mdi mdi-close" @click="dialog = false"></i>

                <label for="title">Title</label>
                <input type="text" id="title" v-model="updatedProduct.title" placeholder="Title" autocomplete="off">

                <label for="description">Description</label>&nbsp;
                <input type="text" id="description" v-model="updatedProduct.description" placeholder="Description">

                <label for="price">Price</label>
                <input type="number" id="price" v-model="updatedProduct.price" placeholder="price">

                <button type="submit">Update</button>
            </form>
        </v-dialog>
    </div>
</template>
<style lang="scss" scoped>
    .product {
        max-width: 300px;
        width: 300px;
        margin-right: 30px;
        margin-bottom: 60px;
        border-radius: 5px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0px 30px 10px #ccc;

        &__img {
            height: 200px;
            background-size: contain;
            background-position: center;
        }

        &__info{
            margin-top: 30px;
            display: flex;
            flex-direction: column;

            &-title {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            &-description {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin: 8px 0 30px;


                @supports (-webkit-line-clamp: 3) {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: initial;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            }
        }

        &__price{
            background: linear-gradient(160deg, #73cad4, #3756a2);
            width: max-content;
            color: #FFF;
            padding: 8px;
            text-align: center;
            border-radius: 3px;
            align-self: end;
        }

        &__actions{
            display: flex;
            justify-content: space-between;
            
            .mdi-square-edit-outline {
                color: #3756a2;
                font-size: 20px;
            }

            .mdi-trash-can-outline {
                color: red;
                font-size: 20px;
                cursor: pointer;
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

        input {
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

    const props = defineProps({
        product: {}
    });

    const updatedProduct = reactive({ title: '', description: '', price: 0 });

    const deleteProduct = function(event){
        let productToDelete = event.target.parentNode.parentNode;
        fetch(`https://fakestoreapi.com/products/${productToDelete.id}`,{
            method:"DELETE"
        })
            .then(function (res) {
                console.log('Deleted', res);

                productToDelete.remove();
            })
            .catch((err) => (console.log('error: ', err)));

    }
    
    const updateProduct = function (event) {
        props.product.title = updatedProduct.title;
        props.product.description = updatedProduct.description;
        props.product.price = updatedProduct.price;

        this.dialog = false;
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