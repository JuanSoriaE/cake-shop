<template>
    <div class="mainHome">
        <h2>Custom your Cake by combining different flavors and toppings</h2>  
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus nam saepe magnam dolorem fugiat deleniti in mollitia enim sint asperiores omnis corrupti, maiores accusamus unde magni, ipsam, ducimus quos ullam. Error facilis sed eligendi quia cupiditate dicta, architecto voluptas nesciunt, et cum eius, aut provident. Nisi et necessitatibus inventore?</p>      
    </div>
    <div class="formsContainer">
        <BaseForm title="Choose your favorites flavors (3)" :flag="true"/>
        <BaseForm title="Choose your favorites toppings"/>
    </div>
    <ButtonContinue text="Continue"/>
    <ContactInformation/>
</template>

<script>
import BaseForm from '@/components/BaseForm.vue';
import ButtonContinue from '@/components/ButtonContinue.vue'
import ContactInformation from '@/components/ContactInformation.vue'

export default {
    name: 'MainHome',
    components: {
        BaseForm,
        ButtonContinue,
        ContactInformation
    }
}
</script>

<style>
.mainHome {
    padding: 2rem 10%;
    padding-bottom: 0;
}

.mainHome > h2 {
    margin-left: 0;
    margin-bottom: 0.5em;
}

.mainHome p {
    font-weight: 500;
    padding-bottom: 2em;
}

.white {
    color: white;
}

.formsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 3rem;
}

@media only screen and (max-width: 600px) {
  h2 {
      color: #fff;
  }
}
</style>