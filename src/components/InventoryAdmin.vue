<template>
    <div class="mainInventory">
        <h2>Inventory</h2>
        <InventoryTableAdmin :itemsArray="$store.state.flavors" :title="'Flavors'"/>
        <InventoryTableAdmin :itemsArray="$store.state.toppings" :title="'Toppings'"/>
    </div>
</template>

<script>
import InventoryTableAdmin from '../components/InventoryTableAdmin.vue';

export default {
    name: 'InventoryAdmin',
    components: {
        InventoryTableAdmin
    }
}
</script>
