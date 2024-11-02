<script setup>

import Logo from '@/assets/UI/img/Logo.vue'
import authService from '@/services/auth.service'

</script>

<script>
export default {
    data() {
        return {
            status: ''
        }
    },
    // methods: {
    //     getAuthInfo() {
    //         if (localStorage.getItem('jwt') != null) {
    //             this.status = 'auth';
    //         } else {
    //             return null;
    //         }
    //     }
    // }
}
</script>

<template>
    <header>
        <div class="header">
            <RouterLink class="logo__link" to="/">
                <Logo class="logo" />
            </RouterLink>

            <!-- <a class="logo__link" href="/"><img class="logo" [src]="<logo-image />"></a> -->

            <nav class="links__container">

                <RouterLink class="link" to="/login">Login</RouterLink>

                <RouterLink class="link border" to="/register">Register</RouterLink>

                <a class="link border" @click="authService.logout()">Logout</a>

                <!-- <span class="flag__container">
                    <span class="fi fi-ru flag"></span>
                </span>

                <span class="flag__container">
                    <span class="fi fi-gb flag"></span>
                </span> -->

            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    padding: 25px 0px;
    box-shadow: 0 .15rem 1.75rem 0 rgba(110, 112, 126, .15);
}

.header {
    width: 100%;
    max-width: 85%;
    margin: 0 auto;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo__link,
.logo {
    display: flex;
    cursor: pointer;
}

.flag__container {
    border: 2px solid transparent;
    background: rgba(110, 112, 126, .15);
    padding: 0.6rem 0.6rem;
    border-radius: 5px;
    cursor: pointer;
}

.flag__container:hover {
    border: 2px solid rgba(110, 112, 126, .15);
}

.flag {
    padding: 0.6rem 0.6rem;
}

.on {
    display: none;
}
</style>