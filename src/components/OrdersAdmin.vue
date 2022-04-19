<template>
    <div class="mainOrders">
        <h2>Orders</h2>
        <OrderTableAdmin :title="'Orders'" :ordersArray="$store.state.orderExamples"/>
    </div>
</template>

<script>
import OrderTableAdmin from '../components/OrdersTableAdmin.vue'

export default {
    name: 'OrdersAdmin',
    components: {
        OrderTableAdmin
    }
}
</script>

<style scoped>
.mainOrders {
    margin-top: 5rem;
    /* Margin bottom just to can see while developing */
    margin-bottom: 10rem;
}
</style>