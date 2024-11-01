<script setup>

import '@/assets/styles/reg_log.css'
import router from '@/router';
import authService from '@/services/auth.service';

</script>

<script>

export default {
    data() {
        return {
            registerData: {
                email: '',
                firstName: '',
                secondName: '',
                birthday: '',
                password: ''
            },
            repeatPassword: ''
        }
    },
    methods: {
        onSubmit(registerData) {
            if (this.registerData.password != this.repeatPassword) console.log('password error');
            authService.register(registerData);
            this.registerData = '';
            router.push('/login');
        }
    }
}
</script>

<template>
    <section class="wrapper">
        <form class="form">
            <div class="data__container">
                <h5 class="form__title">First name</h5>
                <input class="form__input" v-bind:value="registerData.firstName"
                    @input="registerData.firstName = $event.target.value" type="text" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Second name</h5>
                <input class="form__input" v-bind:value="registerData.secondName"
                    @input="registerData.secondName = $event.target.value" type="text" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Birthday</h5>
                <input class="form__input" v-bind:value="registerData.birthday"
                    @input="registerData.birthday = $event.target.value" type="date" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Email</h5>
                <input class="form__input" v-bind:value="registerData.email"
                    @input="registerData.email = $event.target.value" type="email" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Password</h5>
                <input class="form__input" v-bind:value="registerData.password"
                    @input="registerData.password = $event.target.value" type="password" />
                <p class="form__subtitle">The minimum password length is 8 characters.</p>
            </div>
            <div class="data__container">
                <h5 class="form__title">Confirm password</h5>
                <input class="form__input" v-bind:value="repeatPassword" @input="repeatPassword = $event.target.value"
                    type="password" />
            </div>
            <div class="data__container">
                <h5 class="form__title">I am 13 years of age or older and agree to the terms of the <a
                        class="form__link">User Agreement</a> and the <a class="form__link">UFOPay Privacy Policy</a>.
                </h5>
                <input class="checkbox" name="acceptRules" type="checkbox" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Keep login</h5>
                <input class="checkbox" name="keepLogin" type="checkbox" />
            </div>
            <input class="button" type="button" @click="onSubmit(registerData)" value="Register" />
            <RouterLink class="register__button" to="/login">Have account? Login</RouterLink>
        </form>
    </section>
</template>