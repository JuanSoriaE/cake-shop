<template>
    <router-link to="/customize" @click="scrollToTop">
        <div class="cta">
            <span id="textButtonCustomize">{{ text }}</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px" id="svgButtonCustomize">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'ButtonCustomize',
    props: {
        text: String
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style>
/* From cssbuttons.io by @alexmaracinaru */
.cta {
    position: relative;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
}

.cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #ff8790;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
}

.cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: var(--font-color);
}

.cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--font-color);
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
}

.cta:hover:before {
    width: 100%;
    background: #ff8790;
}

.cta:hover svg {
    transform: translateX(0);
}

.cta:active {
    transform: scale(0.95);
}
</style>