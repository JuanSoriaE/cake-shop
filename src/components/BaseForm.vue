<template>
    <div class="baseForm">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
        <FlavorSelection v-if="flag"/>
        <ToppingSelection v-if="!flag"/>
    </div>
</template>

<script>
import FlavorSelection from '@/components/FlavorSelection.vue';
import ToppingSelection from '@/components/ToppingSelection.vue';

export default {
    name: 'BaseForm',
    props: {
        title: String,
        text: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam iste laudantium magni, possimus facere.'
        },
        flag: {
            type: Boolean,
            default: false
        }
    },
    components: {
        FlavorSelection,
        ToppingSelection
    }
}
</script>

<style scoped>
.baseForm {
    width: 500px;
    border-left: 4px solid var(--main-color);
    padding: 1.5rem 1rem 2rem 1rem;
    margin: 2rem 0;
    margin-bottom: 0;
}

p {
    margin-top: 0.3em;
    margin-bottom: 1em;
}

@media only screen and (max-width: 600px) {
    .baseForm:last-child {
        margin-top: 0;
    }
}
</style>