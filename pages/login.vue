<template>
    <div class="login-form">
        <h1>The Store Admin Panel</h1>

        <div id="form">
            <form @submit.prevent="doLogin">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="userCreds.email" placeholder="elon@musk.io" autocomplete="off">

                <label for="password">Password</label>&nbsp;
                <i class="mdi" :class="[passwordFieldIcon]" @click="hidePassword = !hidePassword"></i>
                <input :type="passwordFieldType" id="password" v-model="userCreds.password" placeholder="**********">

                <button type="submit">Log in</button>
            </form>
        </div>

    </div>
</template>
<script setup>
    import { computed, reactive, ref } from "vue";


    definePageMeta({
        layout: "login"
    });

    const userCreds = reactive({ email: '', password: '' });

    // const email = ref("");
    const hidePassword = ref(true);
    // const password = ref("");

    const passwordFieldIcon = computed(() => hidePassword.value ? "mdi-eye" : "mdi-eye-off");
    const passwordFieldType = computed(() => hidePassword.value ? "password" : "text");

    const doLogin = function() {
        localStorage.setItem('UserCredentials', JSON.stringify(userCreds));
        navigateTo('/');
    };

</script>
<style lang="scss" scoped>
    .login-form {
        max-width: 500px;
        margin: auto;
        margin-top: 150px;
        padding: 30px;

        h1{
            text-align: center;
            margin-bottom: 50px;
        }
    }

    div#form {
        background-color: #34495e;
        border-radius: 5px;
        box-shadow: 0px 0px 30px 0px #666;
        color: #ecf0f1;
        padding: 35px;

        label,input {
            outline: none;
            width: 100%;
        }

        label {
            color: #95a5a6;
            font-size: 1em;
        }

        input {
            background-color: transparent;
            border: none;
            color: #ecf0f1;
            font-size: 1em;
            margin-bottom: 20px;
        }

        ::placeholder {
            color: #ecf0f1;
            opacity: 1;
        }

        button {
            background-color: white;
            color: #34495e;;
            cursor: pointer;
            border: none;
            padding: 10px;
            transition: background-color 0.2s ease-in-out;
            width: 100%;
            font-weight: bold;

            &:hover {
                background-color: #eeeeee;
            }
        }

        @media screen and (max-width: 600px) {
                border-radius: unset;
                box-shadow: unset;
                width: 100%;

            & form {
                margin: 0 auto;
                max-width: 280px;
                width: 100%;
            }
        }
    }
</style>