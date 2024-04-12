<template>
    <section class="container">
        <div class="row justify-content-center ">
            <card v-for="(card, index) in tabcard" :key="index" :card="card"/>
        </div>
    </section>
</template>

<script>
import card from "../components/card.vue"
export default {
    name : 'Card_Row',
    components: {
        card,
    },

    props:
    {
        tabcard: Array
    }    
}
</script>

<style>

</style>