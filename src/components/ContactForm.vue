<template>
    <!-- Name, Phone Nmber, Email, Description, (flavors and toppings) -->
    <section action="">
        <h3>Contact Information</h3>
        <div class="inputForm">
            <input type="text" id="nameInput" required>
            <label for="nameInput">Name</label>
        </div>
        <div class="inputForm">
            <input type="text" id="phoneInput" required>
            <label for="phoneInput">Phone</label>
        </div>
        <div class="inputForm">
            <input type="text" id="emailInput" required>
            <label for="emailInput">Email</label>
        </div>
        <div class="inputForm">
            <textarea id="descriptionInput" required></textarea>
            <label for="descriptionInput">General Description</label>
        </div>
        <ButtonSubmitCustom text="Add to Order"/>
    </section>
</template>

<script>
import ButtonSubmitCustom from '@/components/ButtonSubmitCustom.vue';

export default {
    name: 'ContactForm',
    components: {
        ButtonSubmitCustom
    }
}
</script>

<style scoped>
section {
    border-radius: 10px;
    width: 300px;
    padding: 1rem;
    justify-content: center;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
    background-color: #fff;
}

h3 {
    margin-bottom: 1em;
}

input, textarea {
    width: 90%;
    margin-bottom: 2rem;
    outline: none;
    padding: 0.3em 1em;
    font-size: medium;
    font-weight: 500;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    transition: border 0.2s;
}

textarea {
    resize: none;
    height: 7em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 1rem;
}

input:focus, textarea:focus {
    outline: none;
    border: 2px solid rgba(255, 75, 88, 0.3);
    box-shadow: none;
}

label {
    font-size: medium;
    font-weight: 600;
    color: #8f8f8f;
    position: absolute;
    margin-left: 1em;
    margin-top: 0.25em;
    pointer-events: none;
    transform: translateX(-250px);
    width: fit-content;
    background-color: #fff;
    padding: 0 0.5em;
    transition: transform 0.2s;
}

input:focus ~ label, textarea:focus ~ label {
    transform: translate(-250px, -1em) scale(0.9);
    color: rgb(255, 75, 88, 0.6);
}

input:valid ~ label, textarea:valid ~ label {
    transform: translate(-250px, -1em) scale(0.9);
    background-color: #fff;
}

@media only screen and (max-width: 600px) {
    form {
        width: 300px;
    }
    label {
        margin-top: 0.4em;
    }
}
</style>