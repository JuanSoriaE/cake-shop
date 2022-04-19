<template>
    <div class="divHome" id="cakes">
        <div class="textContainer">
            <h2>Premade Cakes (1 flavor)</h2>
            <ButtonCustomize text="Customize Flavor"/>
        </div>
        <div class="cakesCardsContainer">
            <CakeCard v-for="item in $store.state.flavors" v-bind:key="item.key" :item="item" imgPath="cakes/" :multiplier="3" :fee="100"/>
        </div>
    </div>
</template>

<script>
import CakeCard from '@/components/CakeCard.vue';
import ButtonCustomize from '@/components/ButtonCustomize.vue';

export default {
    name: 'CakesHome',
    components: {
        CakeCard,
        ButtonCustomize
    }
}
</script>

<style>
#cakes .textContainer .cta span{
    color: #fff;
}

#cakes .textContainer .cta svg {
    stroke: #fff;
}
</style>