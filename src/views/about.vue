<template>
<p>
    This is a simple app built in <a href="https://vuejs.org/" target="_blank">Vue.js</a> and bundled with <a href="https://vite.dev/" target="_blank">Vite</a> to understand the fundamentals of the framework. Based on design by <a href="https://dribbble.com/shots/24425951-Clean-Minimal-Todo-List-Design">Arkan Naufal</a>  on Dribbble. Responsiveness was not implemented. The features explored using this mini project are
    <ul>
        <li>Consuming external API</li>
        <li>Routing</li>
        <li>Component system</li>
        <li>State management (Refs)</li>
        <li>Pinia</li>
        <li>SCSS and TS</li>
        <li>Saving and loading from LocalStorage</li>
    </ul>
</p>
<div class="imgs">
    <img src="@/assets/vue.png" alt="vue">
    <img src="@/assets/vite.png" alt="vue">
    <img src="@/assets/pinia.png" alt="vue">
    <img src="@/assets/ts.png" alt="vue">
    <img src="@/assets/scss.png" alt="vue">
</div>

<p>PS: I had to resort to breaking bad quotes because no other API would work due to either CORS or expired SSL certs</p>
</template>

<style scoped lang="scss">

ul {
    list-style: circle;
    margin-left: 1rem;
    margin-top: 1rem;
}
.imgs {
    display: grid;
    max-width: 60%;
    grid-template-columns: repeat(5, 1fr);
    opacity: 0.4;
    align-items: center;
    margin-inline: auto;
    margin-block: 2rem;
    img {
        max-width: 100%;
        padding: 1rem;
    }
}
</style>
