<script setup>
import { computed } from 'vue';
import useFunk from '../composables/useFunk';
import { useRoute, useRouter } from 'vue-router';

const funks = useFunk()
const route = useRoute()
const router = useRouter()
const funk = computed(() => funks.findSmart(Number(route.params.id)));

const iKARTOCKA = computed(() => funk.value !== undefined);


if (!iKARTOCKA.value) {
    router.push('/Error');
}

</script>
S
<template>
    <div class="karti">
        <div class="text">
            <h3>Характеристики :</h3>
            <hr>
            <p> {{ funk?.character }} </p>
        </div>

    </div>

</template>

<style scoped>
.karti {
    display: flex;
    flex-direction: column;
    text-align: start;
    flex-wrap: wrap;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 0px solid rgba(0, 0, 0, 0.279);
    border-radius: 10px;
    box-shadow: 3px 0px 10px 0px rgb(121, 121, 121);
    padding: 12px;
    height: auto;
    width: 350px;
    margin-left: 30px;

}

.text {
    width: 100%;
}

/* p{
    display: flex;
    flex-wrap: wrap;
} */
</style>