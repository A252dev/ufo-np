<script setup>

import TransferSection from '@/components/UI/profile/TransferSection.vue'
import WalletSection from '@/components/UI/profile/WalletSection.vue'
import AddBalanceSection from '@/components/UI/profile/AddBalanceSection.vue'
import authService from '@/services/auth.service'
import ConvertSection from '@/components/UI/profile/ConvertSection.vue';

</script>

<script>

export default {

    async mounted() {
        console.log('loading...');
        let info = await authService.getInfo();
        JSON.stringify(info);
        this.user = info.data.data;
        console.log(this.user);
    },

    data() {
        return {
            selectedContent: 'home',

            user: {
                email: '',
                firstName: '',
                secondName: '',
            }
        }
    },
    methods: {
        setContent(content) {
            this.selectedContent = content;
        }
    }
}

</script>

<template>
    <div class="profile__container">

        <div class="action__links">
            <div class="links__container">

                <button type="menu" class="profile__link" @click="setContent('home')">Home</button>

                <button type="menu" class="profile__link" @click="setContent('transfer')">Send and
                    Receive</button>

                <button type="menu" class="profile__link" @click="setContent('wallet')">Wallet</button>

                <button type="menu" class="profile__link" @click="setContent('history')">History</button>

                <button type="menu" class="profile__link" @click="setContent('faq')">Help</button>

            </div>
        </div>

        <div class="content__container">

            <section class="left">

                <section class="side">

                    <div class="info__container">
                        <h5 class="info__title">Balance</h5>
                        <h4 class="balance">0.00 RUB</h4>

                        <button type="menu" style="margin: 1.2rem 0;
                    padding: 0.4rem 0;
                    width: 50%;" class="link border" @click="setContent('transfer')">Tranfer Money
                        </button>

                    </div>

                </section>

                <section class="side" id="recent_activity">
                    <h5 class="info__subtitle">Recent Activity</h5>

                    <p class="description">See when money comes in, and when it goes out. You’ll find your recent
                        UFOPay history here.</p>

                    <a class="link" style="margin: 0.6rem 0;
                    padding: 0;
                    font-size: 1.1rem;" @click="setContent('history')">Show all
                    </a>
                    <!-- <button type="menu"
                    style="margin: 0.7rem 15px;"
                    class="link border"
                    (click)="toggleSettings()"
                    >Settings
                </button>
    
                <button type="menu"
                    style="margin: 0.7rem 15px;"
                    class="link border"
                    (click)="toggleTransfer()"
                    >Transfer
                </button> -->
                </section>
            </section>


            <div class="right side" v-if="selectedContent === 'home'">
                <h5 class="info__title">Home</h5>

                <div class="block__container">
                    <h3 class="input__title">First Name</h3>
                    <input class="input__data" v-model="user.firstName" disabled />
                    <h3 class="input__title">Second Name</h3>
                    <input class="input__data" v-model="user.secondName" disabled />
                    <h3 class="input__title">Birthday</h3>
                    <input class="input__data" value="birthday" disabled />
                </div>
            </div>

            <div class="right side" v-if="selectedContent === 'transfer'">
                <TransferSection :id="selected" />
            </div>

            <div class="right side" v-if="selectedContent === 'wallet'">
                <WalletSection />
                <ConvertSection />
            </div>

            <div class="right side" v-if="selectedContent === 'history'">
                <h5 class="info__title">History</h5>

                <table class="table">
                    <tr>
                        <th>Id</th>
                        <th>To</th>
                        <th>Summa</th>
                        <th>Currency</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>321313</td>
                        <td>1</td>
                        <td>code</td>
                    </tr>
                </table>
            </div>

            <div class="right side" v-if="selectedContent === 'faq'">
                <h5 class="info__title">Help (for debug added the add balance option)</h5>
                <AddBalanceSection />
            </div>

        </div>

    </div>
</template>

<style scoped>
.profile__container {
    margin: 0 auto;
    /* border: 1px solid blue; */
    /* display: flex; */

    @media(max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

.action__links {
    padding: 1.1rem 0;
    background: #4d6cfa;
    /* height: auto; */
    box-sizing: border-box;
}

.links__container {
    width: 100%;
    max-width: 65%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    box-sizing: border-box;
}

.profile__link {
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.9rem;
    padding: 5px 15px;
    border-radius: 5px;
    border: 2px solid transparent;

    @media(max-width: 1100px) {
        font-size: 1.0rem;
    }
}

.profile__link:hover {
    border: 2px solid #1b44ff;
}

/* #selected {
    background: v-bind(selectedColor);
} */

.content__container {
    padding: 3.2rem 0;
    width: 100%;
    max-width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media(max-width: 1100px) {
        display: inline-flex;
        flex-direction: column;
        /* border: 1px solid red; */
        align-items: center;

        #recent_activity {
            display: none;
        }
    }
}

.side {
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 5px;
    padding: 1.3rem 1.4rem;
    margin-bottom: 1.4rem;
}

.left {
    width: 25%;

    @media(max-width: 1100px) {
        width: 80%;
        align-items: center;
    }
}

.right {
    width: 65%;

    @media(max-width: 1100px) {
        width: 80%;
    }
}

.info__container {
    display: flex;
    flex-direction: column;
}

.info__title {
    font-size: 2.2rem;
    letter-spacing: 2px;
    margin-bottom: 7px;
}

.info__subtitle {
    font-size: 1.9rem;
    margin-bottom: 7px;
}

.description {
    font-size: 1.3rem;
}

.desc__link {}

.balance {
    font-size: 1.8rem;
}

.balance__button {
    font-family: 'JetBrains Mono', 'Arial', sans-serif;
    font-size: 2.4rem;
    color: #4d6cfa;
    font-weight: 700;
    margin: 0;
}

.pf-button {
    margin: 2rem 0;
}

#hidden {
    display: none;
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

.table {
    width: 100%;
}

th {
    text-align: left;
}

td {
    text-align: left;
}
</style>