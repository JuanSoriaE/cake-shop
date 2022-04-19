<template>
    <div id="modalBackground" v-if="$store.state.modalFlag">
        <div class="alert">
            <!-- <p>x</p> -->
            <img src="@/assets/icons/cross.png" @click="$store.commit('switchFlag', null)">
            <h2>Are you sure to add {{ $store.state.modalItem.title }} to the cart?</h2>
            <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas, quam repellendus voluptate nihil qui.
            </p>
            <div class="buttonsContainer">
                <button id="cancelButton" @click="$store.commit('switchFlag', null)">No, cancel</button>
                <button @click="$store.commit('updateOrder', $store.state.modalItem)">Yes, add!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalAlert'
}
</script>

<style scoped>
#modalBackground {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.alert {
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%);
    width: 600px;
    height: 350px;
    border-radius: 10px;
}

.alert > * {
    margin-left: 35px;
    margin-right: 35px;
}

img {
    float: right;
    width: 20px;
    margin-top: 15px;
    transform: translateX(15px);
    cursor: pointer;
}

h2 {
    font-weight: 500;
    margin-top: 0.3em;
}

.info {
    margin-top: 0.5em;
}

.buttonsContainer {
    position: absolute;
    bottom: 30px;
    right: 0;
}

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
    margin-left: 2em;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
    box-shadow: 2px 2px 10px rgba(255, 75, 88, 0.3), -2px 2px 10px rgba(255, 75, 88, 0.3), -2px -2px 10px rgba(255, 75, 88, 0.3), 2px -2px 10px rgba(255, 75, 88, 0.3);
}

button:first-of-type {
    background-color: #fff;
    color: rgba(58, 58, 58, 0.8);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    border: 1.5px solid rgba(58, 58, 58, 0.5);
}

button:first-of-type:focus {
    box-shadow: 2px 2px 10px rgba(80, 80, 80, 0.2), -2px 2px 10px rgba(80, 80, 80, 0.2), -2px -2px 10px rgba(80, 80, 80, 0.2), 2px -2px 10px rgba(80, 80, 80, 0.2);
}

@media only screen and (max-width: 600px) {
    .alert {
        transform: scale(0.6) translate(-83%, -100%);
        font-size: larger;
    }
    button {
        font-size: larger;
    }
    h2 {
        color: var(--font-color)
    }
}
</style>