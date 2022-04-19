<template>
    <div class="formSelection">
        <div class="toppingCheckContainer" v-for="item in $store.state.toppings" v-bind:key="item.key">
            <label :for="item.key + '-check'">{{ item.title }}</label><span class="price">${{ item.price }}</span>
            <input type="checkbox" :id="item.key + '-check'" class="checkbox-customize small-check">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToppingSelection'
}
</script>

<style scoped>
label {
    font-weight: 600;
}

.toppingCheckContainer {
    margin-top: 1rem;
}

.price {
    font-size: small;
    font-weight: 500;
    margin-left: 0.5em;
}
</style>