<script setup>
import { RouterView, RouterLink, useRouter } from 'vue-router';
import useUsers from './composables/useUsers1';
// import useUsers2 from './composables/useUsers2';
import { computed, reactive, ref } from 'vue';
import Avtorizats from './components/avtorizats.vue';

const router = useRouter()
const usersa = useUsers()


// localStorage.clear()
const loginElem = ref(null);
const emailElem = ref(null);
const login = ref('');
const email = ref('');
const psswd = ref('');
const psswd2 = ref('');
const num_phone = ref('');

const er_log = ref('');
const er_mail = ref('');
const er_psswd = ref('');
const er_psswd2 = ref('');
const er_tel = ref('');
const suc = ref('');

const list = ref(1)
const indexPage = ref(false);
const curUser = ref(null)

const userVvod = reactive({
  login: '',
  email: '',
  psswd: '',
  num_phone: ''
})



function goToRegistration() {
  indexPage.value = false;
  list.value = 1;
  // сохраняем авторизацию
}

function goToAuthorization() {
  indexPage.value = false;
  list.value = 2;
  // сохраняем авторизацию
}

function goToProfile() {
  if (curUser.value) {
    indexPage.value = true;
  }
}

function logout() {
  curUser.value = null;
  indexPage.value = false;
  list.value = 1;
}

function onLoginSuccess(userData) {
  curUser.value = userData;
  indexPage.value = true;
  console.log('Успешная авторизация:', userData);
}

</script>

<template>

  <header class="header-nav">
    <div class="logo">
      <RouterLink :to="{ name: 'Glavnay' }" class="nav-btn"><img src="./assets/img/logo.jpg" alt="Логотип"></RouterLink>
      <RouterLink :to="{ name: 'Glavnay' }" class="nav-btn">
        <h2>Mobify</h2>
      </RouterLink>
    </div>

    <nav class="btn-nav">
      <RouterLink :to="{ name: 'Katalog' }" class="nav-btn"><button type="button">Каталог товаров</button></RouterLink>
      <!-- <RouterLink :to="{ name: 'valid' }" class="nav-btn"><button type="button">Каталог товаров</button></RouterLink> -->

      <RouterLink v-if="usersa.debilism.value" :to="{ name: 'Admin' }" class="nav-btn"><button type="button">Админ
          Панель</button></RouterLink>

      <!-- <button v-if="usersa.debilism.value" @click="useUsers().IamAdmin()">Я Админ</button> -->
      <!-- <button @click="useUsers().IamNoAdmin(); router.push({ name: 'Katalog' })">Я Пользователь</button> -->

      <RouterLink :to="{ name: 'korzina' }" v-if="usersa.debilism2.value"><button type="button">Корзина</button>
      </RouterLink>

      <RouterLink :to="{ name: 'avtorizats' }" v-if="!usersa.debilism2.value"><button type="button"
          class="nav-btn">Авторизация</button></RouterLink>
      <RouterLink :to="{ name: 'registrat' }" v-if="!usersa.debilism2.value"><button type="button"
          class="nav-btn">Регистрация</button></RouterLink>
      <RouterLink v-if="usersa.logout.value" :to="{ name: 'index' }" class="nav-btn"><button type="button"
          class="nav-btn">Профиль</button></RouterLink>

    </nav>
  </header>
  <main>
    <div class="main">
      <RouterView></RouterView>
    </div>


  </main>

  <footer>
    <!-- <ul>
      <li>Телефон</li>
      <li>Почта</li>
      <li>Копирайт</li>
      <ul>
        <li>Я Футер !</li>

      </ul>
    </ul> -->
    <div class="trash">
      <div class="contact">
        <b>Контакты</b> <br>
        <div class="phone">
          Номер телефона : <a href="tel:+12345678900" class="num">+1 234 567-89-00 </a>
        </div><br>
        <div class="phone">
          Почта : <a href="mailto:tecnormis@mail.ru" class="mail"> tecnormis@mail.ru </a>
        </div><br>
        <div>
          VK : <a href="#" class="num">qwer@rty</a>
        </div><br>
      </div>

      <div class="inform">
        <b>Информация</b> <br>
        <a href="#" class="text_info">Условия оплаты</a> <br>
        <a href="#" class="text_info">Условия доставки </a> <br>
        <a href="#" class="text_info">Гарантия на товар</a> <br>
      </div>
    </div>


    <div class="prava">
      <p>© 2025 ПАО «ФЕА» Все права защищены 18+. Все права защищены. </p>
    </div>

  </footer>
</template>

<style scoped>
.logo {
  display: flex;
  color: #c5acdd;
  gap: 20px;
}

.logo a {
  color: #9a11d4;

}

.logo img {
  max-width: 70px;
  max-height: 70px;
  border-radius: 100%;
}

.header-nav {
  /* top: 0px;
  left: 0px;
  right: 0px;
  position: absolute; */
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: 70px; */
  background-color: rgb(54, 0, 85);
  /* padding: 20px; */
  width: 100%;

}

.btn-nav {
  font-family: Verdana, Geneva, Tahoma, sans-serif
}

.btn-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  margin-left: 25%;
}

button {
  color: rgb(54, 0, 85);
  padding: 9px;
}

button:hover {
  color: white;
  background-color: rgb(21, 1, 37);
  transition: 0.5s;
  transform: translateX(7px);
  padding: 10px;
  transform: translate3d(12px);
}

header {
  min-width: 100vw;
  margin: 0;
}

main {
  flex-grow: 1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center
}

.main {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
}



footer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(21, 1, 37);
  align-items: center;
  /* position: absolute; */
  min-height: 10%;
  /* bottom: -1000px; */
  /* left: 0; */
  /* right: 0; */
  /* margin-top: 20px; */
  color: white;
}


.contact{
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 40px;
}

.inform{
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.prava{
  bottom: 0px;
  color: rgb(206, 206, 206);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 10px;
  text-align: start;
}

.trash{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.num{
  padding: 0px;
  color: rgb(255, 255, 255);
}

.mail{
  padding: 0px;
  color: rgb(255, 255, 255);
}

.phone{
  display: flex;
  flex-direction: row
}

.text_info{
  padding: 0px;
  color: rgb(255, 255, 255);
}
</style>


