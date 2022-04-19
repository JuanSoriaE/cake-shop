<template>
    <div class="mainHome">
        <h1>Welcome to the "name" bakery</h1>
        <h2 class="white">Best Seller</h2>
        <BestSeller/>
    </div>
    <CakesHome/>
    <ToppingsHome/>
</template>

<script>
import BestSeller from '@/components/BestSeller.vue';
import ToppingsHome from '@/components/ToppingsHome.vue';
import CakesHome from '@/components/CakesHome.vue';

export default {
    name: 'MainHome',
    components: {
        BestSeller,
        CakesHome,
        ToppingsHome
    }
}
</script>

<style>
.mainHome {
    padding: 2rem 10%;
    padding-bottom: 0;
}

.divHome {
    padding: 1rem 5%;
    text-align: center;
    padding-top: 2rem;
}

.mainHome > h1 {
    margin-left: 0;
    margin-bottom: 0.5em;
}

.cakesCardsContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
}

.textContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5em;
    flex-wrap: wrap;
}

.textContainer h2 {
    color: #fff;
}

#toppings h2 {
    color: var(--font-color);
}

#toppings {
    margin-top: 3rem;
}

@media only screen and (max-width: 600px) {
  .mainHome h1 {
    color: #fff;
  }
  .textContainer {
    gap: 0.3em;
  }
  .textContainer h2 {
    margin: 0 auto;
  }
  .divHome {
    padding-top: 4em;
  }
  .aContainer a > #textButtonCustomize {
    color: #fff;
  }

  .aContainer a > #svgButtonCustomize {
    stroke: #fff;
  }
}
</style>