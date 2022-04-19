<template>
    <button @click="$store.commit('switchFlagCustom')">{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonSubmitCustom',
    props: {
        text: String,
        customCake: Object
    }
}
</script>

<style scoped>
button {
    outline: none;
    padding: 0.7em 1em;
    font-size: large;
    border: none;
    cursor: pointer;
    background: var(--main-color);
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.2s;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
    box-shadow: 2px 2px 10px rgba(255, 75, 88, 0.3), -2px 2px 10px rgba(255, 75, 88, 0.3), -2px -2px 10px rgba(255, 75, 88, 0.3), 2px -2px 10px rgba(255, 75, 88, 0.3);
}
</style>