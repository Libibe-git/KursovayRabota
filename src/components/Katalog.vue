<script setup>
import { useRouter } from 'vue-router';
import useFunk from '../composables/useFunk';

const router = useRouter()

const funks = useFunk();


</script>

<template>

  <div class="katalog">

    <div class="karta" v-for="funk in funks.smartList.value">
      <img :src='funk.image' alt="PUROCHKA" class="img_card">
      <div class="nazv">
        <p>
          {{ funk.name }}
        </p>
      </div>
      <div class="text">
        ______________________
        <div class="opisanii">
          <p class="op_har">Описание : <br> </p>
          <p>
            {{ funk.opisanie }}
          </p>
        </div>
        <div class="characterr">
          <p class="op_har">
            Характеристики : <br>
          </p>
          <p>
            {{ funk.character }}
          </p>
        </div>

        ______________________
      </div>
      <div class="block-price">
        <p class="price"><b>Цена: {{ funk.price }}</b></p>
        <p class="cur-price"> <b>59 999 Р</b></p>

      </div>
      <div>
        <button @click="router.push({ name: 'Kartochka', params: { id: funk.id } })">Подробнее о товаре</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.katalog {
  display: flex;
  flex-direction: row;
  margin: 10px;
  flex-wrap: wrap;
  gap: 20px;
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
  padding: 13px;
  /* margin: 20px; */
  width: 200px;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Andale Mono', monospace;
  width: 170px;
  font-size: 14px;
}

.opisanii {
  max-height: 110px;
  overflow: hidden;
}

.characterr{
  max-height: 110px;
  overflow: hidden;
}

button {
  color: rgb(54, 0, 85);
}

button:hover {
  color: rgb(244, 244, 244);
  background-color: rgb(63, 23, 87);
  transition: 0.5s;
  transform: translateY(-5px) translateX(1px);
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
  font-family: 'Andale Mono', monospace;
}

.cur-price {
  color: rgb(104, 104, 104);
  text-decoration: line-through;
  margin-top: 10px;
  margin-left: 6px;
  font-size: 12px;
}
</style>
