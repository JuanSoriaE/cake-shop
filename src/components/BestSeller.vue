<template>
    <div class="bestSeller">
        <img :srcset="require('@/assets/cakes/' + item.key + '.png')">
        <div class="infoBestSeller">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <span>{{ item.price * 3 + 100 }}.</span><span class="cents">00</span><br>
            <ButtonPrimary :text="'Add to Order'" :item="item"/>
        </div>
    </div>
</template>

<script>
import ButtonPrimary from '@/components/ButtonPrimary.vue';

export default {
    name: 'BestSeller',
    components: {
        ButtonPrimary
    },
    computed: {
        item() {return this.$store.getters.getBestSeller}
    }
}
</script>

<style scoped>
.bestSeller {
    margin: 4rem auto;
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    justify-content: center;
}

.bestSeller > img {
    width: 500px;
}

.infoBestSeller {
    width: 500px;
    text-align: center;
}

.infoBestSeller *:not(p) {
    display: inline-block;
    margin-bottom: 1em;
}

.cents {
    font-size: small;
}

@media only screen and (max-width: 600px) {
    .infoBestSeller {
        width: 300px;
    }
    .bestSeller > img {
        width: 300px;
    }
}
</style>