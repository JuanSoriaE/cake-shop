<template>
    <div class="container">
        <button id="continueButton" @click="scroll('contactPart'); onClickAnimation()"><span>{{ text }}</span><img src="@/assets/icons/down-arrow.png" id="imgArrowDown"></button>
    </div>
</template>

<script>
export default {
    name: 'ButtonContinue',
    props: {
        text: String
    },
    methods: {
        scroll(id) {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            });
        },
        onClickAnimation() {
            document.getElementById('imgArrowDown').animate([
                {transform: 'translateY(20%)'},
                {transform: 'translateY(80%)'},
                {transform: 'translateY(20%)'}
            ], {
                duration: 350
            });

            /* @keyframes goDown {
    0% {
        transform: translateY(20%);
    }
    50% {
        transform: translateY(130%);
    }
    100% {
        transform: translateY(20%);
    }
}*/
        }
        
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

button {
    padding: 0.7em 1em;
    margin-top: 3rem;
    font-size: large;
    border: none;
    outline: none;
    cursor: pointer;
    background: var(--main-color);
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.2s;
}

button:focus {
    outline: none;
    box-shadow: 2px 2px 10px rgba(255, 75, 88, 0.3), -2px 2px 10px rgba(255, 75, 88, 0.3), -2px -2px 10px rgba(255, 75, 88, 0.3), 2px -2px 10px rgba(255, 75, 88, 0.3);
}

img {
    width: 1em;
    transform: translateY(20%);
}
</style>