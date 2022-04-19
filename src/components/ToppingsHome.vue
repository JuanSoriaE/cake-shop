<template>
    <div class="divHome" id="toppings">
        <div class="textContainer">
            <h2>Toppings (pack)</h2>
            <ButtonCustomize text="Combine Toppings"/>
        </div>
        <div class="cakesCardsContainer">
            <!-- <CakeCard v-for="item in $store.state.toppings" v-bind:key="item.key" :imgUrl="'toppings/' + item.key + '.png'" :title="item.title" :price="item.price"/> -->
            <CakeCard v-for="item in $store.state.toppings" v-bind:key="item.key" :item="item" imgPath="toppings/"/>
        </div>
    </div>
</template>

<script>
import CakeCard from '@/components/CakeCard.vue';
import ButtonCustomize from '@/components/ButtonCustomize.vue'

export default {
    name: 'ToppingsHome',
    components: {
        CakeCard,
        ButtonCustomize
    }
}
</script>

<style>
@media only screen and (max-width: 600px) {
    #toppings .cta span {
        color: var(--font-color);
    }
    #toppings .cta svg {
        stroke: var(--font-color);
    }
}
</style>