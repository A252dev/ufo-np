<template>
    <div class="q__container">
        <h4 class="q__title">Q: How does it work?</h4>

        <p class="q__answer">
            A: The service detects the card issuer and sends simultaneous requests for
            authorization and crediting to your balance in encrypted form, providing information control
            over
            transaction statuses.
        </p>
    </div>

    <div class="q__container">
        <h4 class="q__title">Q: Can I pay with my phone?</h4>

        <p class="q__answer">
            A: Yes. The transaction takes place through the Internet browser of any device,
            including a smartphone.
        </p>
    </div>

    <div class="q__container">
        <h4 class="q__title">Q: Is it safe?</h4>

        <p class="q__answer">
            A: Yes. Data is securely protected and encrypted in accordance with the PCI DSS
            3.2 Level 1 security certificate.
        </p>
    </div>
</template>

<style scoped>
    /* FAQ */

    .q__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 80%;
        margin: 0 auto;
        padding: 25px 0px;
    }

    .q__title {
        color: #4d6cfa;
        font-weight: 500;
        font-size: 2.0rem;
        margin-bottom: 5px;
    }

    .q__answer {
        color: #000;
        font-weight: 500;
        font-size: 1.8rem;
    }
</style>