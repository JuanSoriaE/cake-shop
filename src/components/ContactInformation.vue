<template>
    <div class="divHome" id="contactPart">
        <ContactForm/>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    name: 'ContactInformation',
    components: {
        ContactForm
    }
}
</script>

<style scoped>
.divHome {
    margin-top: 2rem;
    padding-top: 1rem;
}
</style>