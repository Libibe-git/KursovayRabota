<script setup>

import { computed, ref } from 'vue';
import useFunk from '../composables/useFunk';
import { router } from '../route';

const funk = useFunk();
const vKorzin = funk.vKorzin;


function plus(item) {
    item.count++
}

function minus(item) {
    if (item.count > 1) {
        item.count--
    } else {
        funk.SmartDelKorz(item)
    }
}



const finalSum = computed(() => vKorzin.value?.reduce((acc, item) => acc + (Number(item.price) * Number(item.count)), 0)) || 0;
console.log(vKorzin.value[0])



</script>

<template>
    <div v-if="vKorzin.length > 0" class="nar_tov">
        <div class="tovary" v-for="zakaz in vKorzin" :key="zakaz.id">
            <div class="vn-tov">
                <button type="button" @click="router.push({ name: 'Kartochka', params: { id: zakaz.id } })">{{
                    zakaz.name
                    }}</button> |
                {{ zakaz.price }} Рублей


                <button class="plus" type="button" @click="plus(zakaz)">+</button> {{ zakaz.count }} <button
                    class="minus" type="button" @click="minus(zakaz)">-</button>
                <button class="del_tovar" type="button" @click="funk.SmartDelKorz(zakaz.id)">Удалить товар</button>


            </div>

        </div>
        <div class="itog">

            <b>Итоговая сумма: </b> <b>{{ finalSum }} Рублей</b>
            <button @click="router.push({name:'valid'})" type="button" class="del_tovar" >Оплатить</button>
        </div>


    </div>

    <div v-else>
        <div class="nan_trash">
            <b>
                <p>В корзине пока ничего нет :(</p>
            </b>
        </div>
        <div class="btn_trash">
            <button @click="router.push({ name: 'Katalog' })">Перейти к покупкам</button>
        </div>
    </div>

</template>

<style scoped>
.tovary {
    padding-left: 10px;
    margin-top: 20px;
    border: 0px solid rgb(173, 173, 173);
    width: 860px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0px 4px 50px 1px rgb(224, 224, 224);
    text-align: left;
    display: flex;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding-top: 10px;
    padding-bottom: 10px;

}

.nar_tov {
    margin-top: 100px;
}



/* .vn-tov{
    margin-top: 20px;
} */

.del_tovar {
    margin-left: 100px;
    border-color: rgb(46, 15, 58);
    background-color: rgb(80, 27, 101);
    color: white;

}

.del_tovar:hover {
    background-color: rgb(108, 37, 137);
    transition: 0.5s;
    transform: translateX(-4px);
}

.plus {
    margin-left: 100px;
    background-color: rgb(80, 27, 101);
    color: white;
    padding: 8px;
    margin-right: 5px;
}

.minus {
    border-color: rgba(240, 248, 255, 0);
    background-color: rgb(80, 27, 101);
    color: white;
    padding: 9.7px;
    margin-left: 5px;
}

.plus:hover {
    background-color: rgb(108, 37, 137);
    transition: 0.5s;
    transform: translateX(-4px);
}

.minus:hover {
    background-color: rgb(108, 37, 137);
    transition: 0.5s;
    transform: translateX(4px);
}

/* .btn_del_plus_min{
    margin-left: 270px;
    display: flex;
    flex-direction: row;
}  */

.itog {
    border: 0px solid rgb(173, 173, 173);
    width: 900px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0px 0px 50px 1px rgb(224, 224, 224);
    margin-top: 70px;
    margin-bottom: 200px;
    /* text-align: center; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    color: rgb(54, 0, 85);
    font-size: 20px;
    /* position: sticky; */
}


/* .finalS{
    display: flex;
    flex-direction: row;

} */

.nan_trash {
    margin-top: 150px;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    align-items: center;
    font-size: 40px;
    color: rgb(46, 15, 58);

}

.btn_trash {
    margin-bottom: 200px;
    background-color: white;
    border-color: white;
}

.btn_trash:hover {
    text-decoration: overline;
    border-color: white;
    background-color: rgb(45, 13, 76);
    color: rgb(108, 37, 137);
}
</style>