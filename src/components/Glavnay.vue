<script setup>
import useUsers from '../composables/useUsers1';
import useFunk from '../composables/useFunk';
import { router } from '../route';

const funks = useFunk();
</script>

<template>
  <!-- <header class="header">
    <div class="head">
    <div>
    <img src="./assets/img/logo.jpg" alt="Логотип" class="logo">
    </div>
    <div>
      <h1><b>TechnologyMobile</b></h1>
    </div>
    <div>
    <nav>
      <ul>
        <a href="#"><li>Каталог</li></a>
        <a href="#"><li>Мы</li></a>
        <a href="#"><li>Поддержка</li></a>
      </ul>
    </nav>
    </div>
    </div>
  </header> -->
  <main class="main">
    <!-- <div>
     <img src="./assets/img/mobilka.jpg" alt="mobilka" class="mobilka">
    </div> -->

    <div class="text">
      <p class="univ">Вселенная <b>Mobify</b> доступна прямо здесь!</p>
      <div class="info_comp">
        <p>Хотите стать частью мира инноваций и элегантного дизайна? Добро пожаловать! </p>
        <p>Мы предлагаем оригинальную продукцию, сертифицированную производителем, что гарантирует высокое качество
          каждого устройства.</p>
        <p>Повседневную жизнь современного человека уже невозможно представить без разнообразных электронных гаджетов.
          Они делают общение проще, удобнее, помогают все успевать в бешеном ритме мегаполиса. Сотовые телефоны сегодня
          есть даже у детей дошкольного возраста и пенсионеров – настолько доступными стали эти устройства. Важно только
          найти надежного поставщика, способного предложить качественную продукцию и высококлассный сервис.
          Компания «Телемаркет24» реализует широкий ассортимент цифровой техники в Санкт-Петербурге через собственный
          интернет-магазин. В наших каталогах Вы найдете новейшие модели смартфонов, планшетов, регистраторов,
          аксессуаров к электронике по доступным ценам.</p>
      </div>

      <b class="predlog">Выгодные предложения</b>

      <div class="karta" v-for="funk in funks.smartList.value">
        <img :src='funk.image' alt="PUROCHKA" class="img_card">
        <div class="nazv">
          <p>
            {{ funk.name }}
          </p>
        </div>
        <div class="text">
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

        </div>
        <div class="block-price">
          <p class="price"><b>Цена: {{ funk.price }}</b></p>
          <p class="cur-price"> <b>59 999 Р</b></p>
        </div>
        <hr>
      </div>
    </div>
    <button @click="router.push({name:'Katalog'})" class="btn_log">Перейти в каталог</button>
  </main>
  <!-- 
  <footer>





  </footer> -->

</template>

<style scoped>
.btn_log{
  padding: 50px;
  font-size: 36px;
  background-color: #650090;
  color: white;
  margin-bottom: 40px;
}

.btn_log:hover{
  padding: 100px;
  font-size: 20px;
  background-color: #430060;
  transition: 1s;
}

.mobilka {
  display: flex;
  align-items: center;
  width: 950px;
}

h1 {
  margin-left: 380px;
  margin-top: 35px;
  color: rgb(255, 255, 255);
  /* box-shadow: -3px -1px 4px -1px #28442b; */
  /* border: 0px solid white;
  border-radius: 16px;
  padding: 6px; */
}

.logo {
  width: 60px;
  margin-left: 200px;
  margin-top: 20px;
  border: 0px solid black;
  border-radius: 40px
}

nav {
  display: flex;
  margin-left: 150px;
  margin-right: 300px;
}

.head {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  /* align-items: center */
  margin-bottom: -6px;
}

.main {
  margin-top: 0px;
  background-color: #3b01460f;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}

.inp_sub {
  display: flex;
  justify-content: center;
}

.poisk {
  width: 400px;
  padding: 7px;
  border: 1px solid rgb(102, 2, 136);
  border-radius: 6px;
  margin-right: 20px;
  /* margin-top: 7px; */
}

.sub {
  border: 1px solid rgb(102, 2, 136);
  border-radius: 6px;
}



.text {
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #430060;
  -webkit-text-stroke: 0.1px rgb(81, 0, 110);
}

.univ {
  text-align: center;
  font-size: 30px;
}

.info_comp {
  border: 9px solid rgb(38, 2, 51);
  border-radius: 16px;
  padding: 30px;
  border-bottom: rgb(81, 0, 110);
  border-top: rgb(81, 0, 110);
  /* background-color: rgba(255, 255, 255, 0.341); */
  box-shadow: 0px 0px 2px 2px #a174b02a;
}

.predlog {
  font-size: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid rgb(0, 0, 0);
}

.vygoda {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 20px;

}

.img_sam {
  width: 200px;
  border-radius: 10px;
}

.sam_text {
  color: rgb(255, 255, 255);
  text-align: center;
  -webkit-text-stroke: 0.04px rgba(251, 167, 251, 0.273);
}

.price {
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px;
  color: purple;
}

.decor {
  text-decoration: line-through;
  color: rgb(73, 0, 0);
}

.img_card{
  /* border: 2px solid rgba(53, 0, 72, 0.505); */
  padding: 10px;
  border-radius: 10%;
  margin-bottom: -12px;
  margin-top: 30px;
}

footer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(225, 225, 225);
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  /* height: 150px; */
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}

.contact {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 40px;
}

.inform {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.prava {
  bottom: 0px;
  color: gray;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 10px;
  text-align: start;
}

.trash {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.num {
  padding: 0px;
  color: black;
}

.mail {
  padding: 0px;
  color: black;
}

.phone {
  display: flex;
  flex-direction: row
}

.text_info {
  padding: 0px;
  color: black;
}


</style>
