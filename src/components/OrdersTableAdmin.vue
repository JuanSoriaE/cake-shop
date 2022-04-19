<template>
    <h3>{{ title }}</h3>
    <div class="tableContainer">
        <table>
            <tr>
                <th style="width: 5%">No.</th>
                <th style="width: 25%">Customer Info.</th>
                <th style="width: 17.5%">Premade Cakes</th>
                <th style="width: 17.5%">Toppings Pack</th>
                <th style="width: 25%">Custom Cakes</th>
                <th atyle="width: 10%">Total Price</th>
            </tr>
            <tr v-for="(order, index) in ordersArray" v-bind:key="order.key">
                <td class="index">{{ index }}</td>
                <td>{{ order.customerName }}, {{ order.customerPhone }}, {{ order.customerEmail }}</td>
                <td class="premadeCakes">
                    <span v-for="item in order.items" v-bind:key="item.key"><span v-if="item.title.includes('Cake') || item.title.includes('cake')">{{ item.key.charAt(0).toUpperCase() + item.key.slice(1) }}&nbsp</span></span>
                </td>
                <td>
                    <span v-for="item in order.items" v-bind:key="item.key"><span v-if="!item.title.includes('Cake') && !item.title.includes('cake')">{{ item.title }}&nbsp</span></span>
                </td>
                <td>
                    <details>
                        <summary>{{ order.customCakes.length }}</summary>
                        <div class="customCakeInfoContainer" v-for="customCake in order.customCakes" v-bind:key="customCake.key">
                            <span class="bold">Flavors: </span><span v-for="flavor in customCake.flavors" v-bind:key="flavor">{{ flavor.charAt(0).toUpperCase() + flavor.slice(1) }}, </span><br>
                            <span class="bold">Toppings: </span><span v-for="topping in customCake.toppings" v-bind:key="topping">{{ topping.charAt(0).toUpperCase() + topping.slice(1) }}, </span><br>
                            <span class="bold">Description: </span>{{ customCake.description }}<br>
                            <span class="bold">Price: </span>${{ customCake.price }}.<span class="cents">00</span>
                        </div>
                    </details>
                </td>
                <td class="price">${{ order.totalPrice }}.<span class="cents">00</span></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'OrderTableAdmin',
    props: {
        title: String,
        ordersArray: Array
    }
}
</script>

<style scoped>
table {
    background: #fff;
    width: 100%;
    margin-top: 0.5rem;
    border-spacing: 0.3em;
    box-shadow: 0 0 10px rgba(255, 75, 88, 0.5);
    border-radius: 5px;
}

th {
    padding: 0.4em;
}

th:first-of-type, th:last-of-type {
    border-left: 0;
    border-right: 0;
}

tr {
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

td {
    padding: 0.5em;
    vertical-align: top;
}

.bold {
    font-weight: bold;
}

.customCakeInfoContainer:not(:last-of-type) {
    margin-bottom: 1em;
}

.price, .index {
    font-weight: bold;
    text-align: center;
}

h3 {
    margin-top: 2rem;
}

.cents {
    font-size: small;
}

.premadeCakes .comma:last-of-type {
    display: none;
}

@media only screen and (max-width: 800px) {
    .tableContainer {
        width: 125%;
        overflow-x: scroll;
        margin-left: 0;
        margin-right: 0;
        transform: translateX(-10%);
    }
    table {
        width: 135%;
    }
}

@media only screen and (max-width: 600px) {
    .tableContainer {
        width: 125%;
        overflow-x: scroll;
        margin-left: 0;
        margin-right: 0;
        transform: translateX(-10%);
    }
    table {
        width: 300%;
    }
}
</style>