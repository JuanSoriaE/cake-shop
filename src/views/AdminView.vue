<template>
    <div class="mainHome">
        <h1>Welcome back Admin</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga sint amet commodi neque aperiam veniam illum eius corporis laboriosam blanditiis, molestiae eos velit dicta iure saepe provident consectetur eaque. Eum cum sit totam repudiandae accusamus nostrum adipisci minus, dolorem fugit consequatur, dolores harum illo blanditiis aperiam magnam labore? Nisi dolorum officia reiciendis inventore, temporibus doloremque blanditiis deleniti repellendus ad.</p>
        <InventoryAdmin/>
        <OrdersAdmin/>
    </div>
</template>

<script>
import InventoryAdmin from '../components/InventoryAdmin.vue';
import OrdersAdmin from '../components/OrdersAdmin.vue'

export default {
    name: 'AdminView',
    components: {
        InventoryAdmin,
        OrdersAdmin
    }
}
</script>
