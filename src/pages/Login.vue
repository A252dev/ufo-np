<script setup>

import authService from '@/services/auth.service'

import '@/assets/styles/reg_log.css'

</script>

<template>
    <section class="wrapper">
        <form class="form" method="post" @submit.prevent>
            <div class="data__container">
                <h5 class="form__title">Email</h5>
                <h5 class="form__title"></h5>
                <input class="form__input" v-bind:value="user.email" @input="user.email = $event.target.value"
                    type="email" autocomplete="off" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Password</h5>
                <input class="form__input" v-bind:value="user.password" @input="user.password = $event.target.value"
                    type="password" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Keep login</h5>
                <input class="checkbox" type="checkbox" />
            </div>
            <input class="button" type="button" @click="onSubmit(user)" value="Login" />
            <RouterLink class="register__button" to="/register">Create an account!</RouterLink>
        </form>
    </section>
</template>

<script>

export default {
    data() {
        return {
            user: {
                email: null,
                password: null
            }
            // login: null,
            // password: null
        }
    },
    methods:
    {
        async onSubmit(user) {

            authService.login(user);
            this.$router.push('/profile');

            // Make a request to the server
            // const response = await axios.post('http://127.0.0.1:8000/api/login', user);

            // Set user data in browser
            // window.localStorage.setItem('jwt', response.data.data.access_token);

        }
    }
}

</script>