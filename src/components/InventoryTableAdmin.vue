<template>
    <h3>{{ title }}</h3>
    <div class="tableContainer">
        <table>
            <tr>
                <th style="width: 10%">No.</th>
                <th style="width: 15%">Name</th>
                <th style="width: 55%">Description</th>
                <th style="width: 10%">Price</th>
                <th style="width: 10%">Quantity</th>
            </tr>
            <tr v-for="(item, index) in itemsArray" v-bind:key="item.key">
                <td class="index">{{ index }}</td>
                <td>{{ item.title }}</td>
                <td class="description">{{ item.description }}</td>
                <td class="price">${{ item.price }}.<span class="cents">00</span></td>
                <td class="quantity">{{ item.quantity }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'InventoryTableAdmin',
    props: {
        itemsArray: Array,
        title: String
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

td:not(.description) {
    text-align: center;
}

td {
    padding: 0.5em 0;
}

.description {
    padding: 0.5em;
}

.price, .index {
    font-weight: bold;
}

h3 {
    margin-top: 2rem;
}

.cents {
    font-size: small;
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
        width: 115%;
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
        width: 250%;
    }
}
</style>