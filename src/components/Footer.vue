<template>
    <footer>
            <div class="container">
                <span class="bold">Address: </span><span>&nbspState, City, Number</span><br>
                <span class="bold">Phone Number: </span><span>&nbsp+11 1234567890</span><br>
                <span class="bold">Attention Schedule: </span><span>&nbspWeekdays - 12pm to 10pm | Weekend - 2pm to 10pm</span>
            </div>
            <div class="container">
                <h2>Cake Shop</h2>
            </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    /* background-color: var(--main-color); */
    background-color: #ffb6bb;
    width: 100%;
    margin-top: 3rem;
    padding: 2em 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
}

.container {
    width: 400px;
}

.container:nth-child(2) {
    text-align: center;
}

h2 {
    margin: 0;
}

span.bold {
    display: inline-block;
    margin-top: 1em;
}

.bold {
    font-weight: bold;
}
</style>