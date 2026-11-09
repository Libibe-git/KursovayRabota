<script setup>

import { useRouter, useRoute, RouterLink, RouterView } from 'vue-router';
import useFunk from '../composables/useFunk';
import { computed, reactive, ref } from 'vue';
import useUsers from '../composables/useUsers1';
import Opisanie from './Opisanie.vue';

const users = useUsers();
const router = useRouter()
const route = useRoute();
const funks = useFunk();

const funk = computed(() => funks.findSmart(Number(route.params.id)));
const currentId = computed(() => Number(route.params.id));
const iKARTOCKA = computed(() => funk.value !== undefined);

const text = ref()
const flag = ref(false)




// console.log('funk.image:', funk.value?.image)

if (!iKARTOCKA.value) {
    router.push('/Error'); // или на другую страницу
}

// function opiska() {
//     // text.value = 'Нахуй'
//     router.push({name:'Opisanie'})
//     flag.value = !flag.value;

//     if (flag.value) {
//         text.value = 'Скрыт'
//     } else {
//         text.value = 'Показ'
//     }

// }


function inTrash() {
    if (funk.value) {
        funks.teleport(funk.value);
        // text.value = 'Товар Успешно добавлен'
        // setTimeout(() => text.value = '', 2000);
    }
}

function tf() {
    flag.value = !flag.value

    if (route.name == 'Redaktir') {
        flag.value = true
    }

    if (flag.value == true) {
        router.push({ name: 'Opisanie' })

    } else {
        router.push({ name: 'Kartochka' })
    }
    // console.log(flag.value);

}

function dalee() {
    // 2. Получаем весь список товаров (предположим, funks.smartList() возвращает массив)
    const allItems = funks.smartList.value;

    // 3. Находим индекс текущего товара в массиве
    
    // const currentIndex = allItems.findIndex(item => item.id === currentId.value);
    const currentIndex = computed(() => allItems.findIndex(item => item.id === currentId.value));

    // 4. Если есть следующий товар — переходим на него
    if (currentIndex.value > -1 && currentIndex.value < allItems.length - 1) {
        const nextId = allItems[currentIndex.value + 1].id;
        router.push({ name: 'Kartochka', params: { id: nextId } });
    } else {
        // Опционально: если товары кончились, можно вернуться к первому (зациклить)
        const firstId = allItems[0].id;
        router.push({ name: 'Kartochka', params: { id: firstId } });
    }
}


function nazad() {
    const allItems = funks.smartList.value;
    const currentIndex = allItems.findIndex(item => item.id === currentId.value);
    // console.log(route.params.id);
    
    if (currentIndex > 0) {
        const prevId = allItems[currentIndex - 1].id;
        router.push({ name: 'Kartochka', params: { id: prevId } });
    }
}

</script>

<template>

    <div class="katalog" v-if="iKARTOCKA">
        <div class="btn_naz">
            <button @click="router.push({ name: 'Katalog' })" class="btn_opisan">Вернуться в Каталог</button>

            <button type="button" @click="nazad" v-if="route.params.id > 1"><-Вернуться Назад</button>
        </div>
        <div class="karta">
            <img :src='funk.image' alt="PUROCHKA" class="img_card">
            <div class="nazv">
                <p>
                    {{ funk.name }}
                </p>
            </div>
            <div class="text">
                <!-- ______________________ -->
                <hr>
                <p class="op_har">Описание : <br> </p>
                <p>
                    {{ funk.opisanie }}
                </p><br>
                <div>

                    <!-- <button @click="opiska">{{ text }}</button> -->
                    <!-- <button><RouterLink :to="{name: 'Opisanie'}">Asdfghjk</RouterLink></button> -->
                    <!-- <RouterView v-if="flag"></RouterView> -->
                </div>
                <hr>
            </div>
            <div class="block-price">
                <p class="price"><b>Цена: {{ funk.price }} Р</b></p>
                <p class="cur-price"> <b>59 999 Р</b></p>
            </div>

            <div>
                <button @click="inTrash()" v-if="users.debilism2.value">Добавить в корзину</button>
                {{ text }}
            </div>
        </div>
        <div class="btn_vper">
            <div>
                <button @click="tf()" class="btn_dop">
                    Дополнительно
                </button>
                <RouterView v-if="route.name == 'Opisanie'"></RouterView>
            </div>
            <div>
                <button type="button" @click="dalee">Смотреть Далее-></button>
            </div>
        </div>
        <div>
            <RouterLink :to="{ name: 'Redaktir' }" v-if="users.debilism.value"><button>
                    Изменить Карточку товара
                </button></RouterLink>
            <!-- //<RouterLink :to="{ name: 'Opisanie' }" class="btn_dop"></RouterLink> -->

            <div>
                <RouterView v-if="route.name == 'Redaktir'"></RouterView>

            </div>
        </div>
    </div>





</template>

<style scoped>
button {
    color: white;
}

.katalog {
    display: flex;
    flex-direction: row;
    margin: 10px;
    margin-top: 70px;
    justify-content: center;
}

.img_card {
    width: 100px;
}

.karta {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.279);
    border-radius: 10px;
    box-shadow: 3px 0px 10px 0px rgb(121, 121, 121);
    padding: 20px;
    margin: 20px;
    max-width: 400px;
    /* max-height: 100px; */
}

.text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* font-family: 'Andale Mono', monospace; */
    /* width: 170px; */
    font-size: 14px;
}

.op_har {
    margin: 6px;
}

.nazv {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 14px;
}

p {
    margin: 0px;
    display: flex;
    text-align: left;
    align-items: flex-start;
}

.block-price {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* font-family: 'Andale Mono', monospace; */
}

.cur-price {
    color: rgb(104, 104, 104);
    text-decoration: line-through;
    margin-top: 10px;
    margin-left: 6px;
    font-size: 12px;
}

button {
    color: rgb(54, 0, 85);
    padding: 9px;
    margin-top: 10px;
    margin-bottom: 30px;
    border: 1px solid rgb(43, 0, 68);

}

button:hover {
    color: white;
    background-color: rgb(21, 1, 37);
    transition: 0.5s;
    border-radius: 15px;
    padding: 14px;

    transition: 2s;

}

.btn_opisan {
    width: 110px;
    height: 60px;
}

.btn_naz {
    display: flex;
    flex-direction: column;
    gap: 180px;
    align-items: end;
}

.btn_vper {
    display: flex;
    flex-direction: column;
    gap: 200px;
    align-items: start;
}
</style>