<script setup>
import actionService from '@/services/action.service'
</script>

<script>

export default {
    data() {
        return {
            transferData: {
                toEmail: '',
                amount: '',
                currency: ''
            }
        }
    },
    methods: {
        onSubmit(transferData) {
            actionService.tranfer(transferData);
            this.transferData = '';
        }
    }
}
</script>

<template>
    <form method="post" @submit.prevent>
        <h5 class="info__title">Transfer</h5>

        <div class="block__container">
            <h3 class="input__title">To email:</h3>
            <input class="input__data" v-bind:value="transferData.toEmail"
                @input="transferData.toEmail = $event.target.value" type="email" autocomplete="off" />
            <h3 class="input__title">Summa:</h3>
            <input class="input__data" v-bind:value="transferData.amount"
                @input="transferData.amount = $event.target.value" type="number" autocomplete="off" />
            <h3 class="input__title">Currency:</h3>
            <select v-bind:value="transferData.currency" @input="transferData.currency = $event.target.value">
                <option value="AUD" selected>Australian dollar (AUD)</option>
                <option value="BRL">Brazilian real (BRL)</option>
                <option value="CAD">Canadian dollar (CAD)</option>
                <option value="CNY">Chinese Renmenbi (CNY)</option>
                <option value="CZK">Czech koruna (CZK)</option>
                <option value="DKK">Danish krone (DKK)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="HKD">Hong Kong dollar (HKD)</option>
                <option value="HUF">Hungarian forint (HUF)</option>
                <option value="ILS">Israeli new shekel (ILS)</option>
                <option value="JPY">Japanese yen (JPY)</option>
                <option value="MYR">Malaysian ringgit (MYR)</option>
                <option value="MXN">Mexican peso (MXN)</option>
                <option value="TWD">New Taiwan dollar (TWD)</option>
                <option value="NZD">New Zealand dollar (NZD)</option>
                <option value="NOK">Norwegian krone (NOK)</option>
                <option value="PHP">Philippine peso (PHP)</option>
                <option value="PLN">Polish złoty (PLN)</option>
                <option value="GBP">Pound sterling (GBP)</option>
                <option value="SGD">Singapore dollar (SGD)</option>
                <option value="SEK">Swedish krona (SEK)</option>
                <option value="CHF">Swiss franc (CHF)</option>
                <option value="THB">Thai baht (THB)</option>
                <option value="USD">United States dollar (USD)</option>
            </select>
            <input type="button" class="button" @click="onSubmit(transferData)" value="Transfer" />
        </div>
    </form>
</template>

<style scoped>
.info__title {
    font-size: 2.2rem;
    letter-spacing: 2px;
    margin-bottom: 7px;
}

.block__container {
    padding: 1.3rem 0;
    display: flex;
    flex-direction: column;
    width: 40%;

    @media(max-width: 1100px) {
        width: 100%;
    }
}

.input__title {
    color: #4d6cfa;
    font-size: 2.4;
}

.input__data {
    margin: 15px 0;
    padding: 5px 4px;
    font-size: 18px;
    color: #1b44ff;
}
</style>