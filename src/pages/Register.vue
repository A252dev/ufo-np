<script setup>

import '@/assets/styles/reg_log.css'

</script>

<template>
    <section class="wrapper">
        <form class="form">
            <div class="data__container">
                <h5 class="form__title">First name</h5>
                <input class="form__input" name="firstName" type="text" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Second name</h5>
                <input class="form__input" name="secondName" type="text" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Birthday</h5>
                <input class="form__input" name="birthday" type="date" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Email</h5>
                <input class="form__input" name="email" type="email" />
            </div>
            <div class="data__container">
                <h5 class="form__title">Password</h5>
                <input class="form__input" name="password" type="password" />
                <p class="form__subtitle">The minimum password length is 8 characters.</p>
            </div>
            <div class="data__container">
                <h5 class="form__title">Confirm password</h5>
                <input class="form__input" name="repeatPassword" type="password" />
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
            <input class="button" type="button" value="Register" />
            <RouterLink class="register__button" to="/login">Have account? Login</RouterLink>
        </form>
    </section>
</template>