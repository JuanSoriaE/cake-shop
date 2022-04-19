<template>
  <nav id="topPage">
    <h2>Cake Shop</h2>
    <div class="aContainer">
      <router-link to="/">Home</router-link>
      <a @click="scroll('cakes')">Cakes</a>
      <a @click="scroll('toppings')">Toppings</a>
      <ButtonCustomize text="Customize Cake"/>
    </div>
  </nav>
  <router-view/>
  <a @click="scroll('topPage')" class="buttonToTop">
    <span>UP</span>
  </a>
  <Footer/>
  <ModalAlert/>
  <ModalAlertCustomCake/>
</template>

<script>
import ButtonCustomize from '@/components/ButtonCustomize.vue';
import ModalAlert from '@/components/ModalAlert.vue';
import ModalAlertCustomCake from '@/components/ModalAlertCustomCake.vue';
import Footer from '@/components/Footer.vue';

export default {
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    },
    scrollToTop() {
      window.scrollTo(0 ,0);
    }
  },
  components: {
    ButtonCustomize,
    Footer,
    ModalAlert,
    ModalAlertCustomCake
  }
}
</script>

<style>
nav {
  padding: 1em;
  padding-right: 4em;
  color: #fff;
}

h2 {
  display: inline-block;
  margin-left: 2em;
}

.aContainer {
  display: flex;
  height: 100%;
  float: right;
  align-items: center;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: var(--font-color);
  padding: 0 5px;
  cursor: pointer;
  transition: border 0.1s;
}

nav a:hover:not(:last-child) {
  border-bottom: 2px solid #404040;
}

nav a:not(:last-child) {
  margin-right: 2em;  
}

nav a.router-link-exact-active:not(:last-child) {
  border-bottom: 2px solid #404040;
}

.buttonToTop {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--main-color);
  cursor: pointer;
}

.buttonToTop span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: #fff;
}

@media only screen and (max-width: 600px) {
  nav a {
    color: #fff;
  }
  .cta span {
    color: #fff;
  }
  .cta svg {
    stroke: #fff;
  }
  nav a.router-link-exact-active {
    border-bottom: 2px solid #fff;
  }
}
</style>
