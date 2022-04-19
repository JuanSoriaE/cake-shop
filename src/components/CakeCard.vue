<template>
    <div class="card">
        <img :src="require('@/assets/' + imgPath + item.key + '.png')" v-bind:alt="item.title">
        <h3>{{ item.title.charAt(0).toUpperCase() + item.title.slice(1) }}</h3>
        <div class="priceContent">
            <span class="price">{{ item.price*multiplier + fee }}.</span>
            <span class="cents">00</span>
        </div>
        <p>{{ item.description }}</p>
        <ButtonPrimary v-bind:text="'Add to Order'" :item="item"/>
    </div>
</template>

<script>
import ButtonPrimary from '@/components/ButtonPrimary.vue';

export default {
    name: 'CakeCard',
    props: {
        item: Object,
        multiplier: {
            type: Number,
            default: 1
        },
        fee: {
            type: Number,
            default: 0
        },
        imgPath: String
    },
    methods: {
        test() {
            console.log(this.item);
        }
    },
    components: {
        ButtonPrimary
    }
}
</script>

<style scoped>
.cents {
    font-size: small;
}

.card {
    width: 300px;
    padding: 0 0.7rem 2rem 0.7rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
    background-color: #fff;
}

h3 {
    display: contents;
}

img {
    width: 100%;
}

.priceContent {
    font-weight: bold;
}

p {
    margin-top: 1em;
}

Button {
    margin-top: 1em;
}
</style>