<template>
    <div class="formSelection">
        <label for="1flavor">Just 1 flavor</label>
        <input type="checkbox" id="1flavor" class="checkbox-customize" :onchange="setSameFlavorOnCheckCheckbox"><br>
        
        <div class="selectContainer">
            <label for="flavor1">Flavor 1</label>
            <select id="flavor1" :onchange="setSameFlavorOnCheckCheckbox">
                <option v-for="item in $store.state.flavors" v-bind:key="item.key" :value="item.key">{{ item.key.charAt(0).toUpperCase() + item.key.slice(1) }}</option>
            </select>
        </div>
        <div class="selectContainer">
            <label for="flavor2">Flavor 2</label>
            <select id="flavor2" :onchange="readJust1Flavor">
                <option v-for="item in $store.state.flavors" v-bind:key="item.key" :value="item.key">{{ item.key.charAt(0).toUpperCase() + item.key.slice(1) }}</option>
            </select>
        </div>
        <div class="selectContainer">
            <label for="flavor3">Flavor 3</label>
            <select id="flavor3" :onchange="readJust1Flavor">
                <option v-for="item in $store.state.flavors" v-bind:key="item.key" :value="item.key">{{ item.key.charAt(0).toUpperCase() + item.key.slice(1) }}</option>
            </select>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'FlavorSelection',
    methods: {
        setSameFlavorOnCheckCheckbox() {
            const check1Flavor = document.getElementById('1flavor');
            const flavor1 = document.getElementById('flavor1');
            const flavor2 = document.getElementById('flavor2');
            const flavor3 = document.getElementById('flavor3');

            if (check1Flavor.checked) {
                flavor2.setAttribute('disabled', '');
                flavor3.setAttribute('disabled', '');
                flavor2.value = flavor1.value;
                flavor3.value = flavor1.value;
            } else {
                flavor2.removeAttribute('disabled');
                flavor3.removeAttribute('disabled');
            }
        }
    }
}
</script>

<style scoped>
p {
    margin-bottom: 1em;
}

.selectContainer {
    margin-top: 2rem;
}

label {
    font-weight: 600;
}

select {
    float: right;
    padding: 0.3em 1em;
    font-size: medium;
    background: #fff;
    /* border: 2px solid rgba(255, 75, 88, 0.8); */
    border: none;
    border-radius: 20px;
    box-shadow: 0 0 10px rgb(255, 75, 88);
    transition: all 0.1s;
    text-align: center;
}

select:focus {
    outline: none;
    box-shadow: 2px 2px 10px rgba(255, 75, 88, 0.7), -2px 2px 10px rgba(255, 75, 88, 0.7), -2px -2px 10px rgba(255, 75, 88, 0.7), 2px -2px 10px rgba(255, 75, 88, 0.7);
}
</style>