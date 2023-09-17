<template>
        <v-layout>
            <v-app-bar
                    color="primary"
                    scroll-behavior="hide"
            >
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>The Store</v-toolbar-title>

                <v-spacer></v-spacer>

<!--                <v-btn variant="text" icon="mdi-magnify"></v-btn>-->

<!--                <v-btn variant="text" icon="mdi-filter"></v-btn>-->

<!--                <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>-->
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" location="left" temporary>
                <v-list>
                    <v-list-item
                            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                            title="Admin"
                            subtitle="sandra_a88@gmailcom"
                    ></v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                    <NuxtLink to="/">
                        <v-list-item prepend-icon="mdi-shopping" title="Products" value="products"></v-list-item>
                    </NuxtLink>
                    <NuxtLink to="/categories">
                        <v-list-item prepend-icon="mdi-layers-triple" title="Categories"
                                     value="categories"></v-list-item>
                    </NuxtLink>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                drawer:false,

            }
        }
    }
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: #000;

        &.router-link-active.router-link-exact-active {
            color: #3756a2;
        }
    }

</style>