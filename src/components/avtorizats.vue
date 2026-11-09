<script setup>
import { computed, ref } from 'vue';
import useUsers from '../composables/useUsers1';
import { useRouter } from 'vue-router';

const debilism = computed(() => useUsers2().debilism.value);
const uusers = useUsers()
const router = useRouter()

const auth_login = ref('');
const auth_psswd = ref('');
const auth_error = ref('');

function autorizovat() {

  const users = uusers.SravnUser(auth_login.value, auth_psswd.value);
  // if (users.ulogin=='Admin'){

  // }

  if (users) {
    uusers.logout.value = true
    console.log(users.ulogin);
    console.log(users.upsswd);

    if (auth_login.value === 'Admin' && auth_login.value === 'Admin') {
      // debilism.value = true
      router.push({ name: 'Admin' })
    } else {
      router.push({ name: 'index' })

      // Очищаем поля после успешной авторизации
      auth_login.value = '';
      auth_psswd.value = '';
    }


  } else {
    auth_error.value = 'Неверный логин или пароль';
  }

  // if (uusers.auth_login === 'Admin' && uusers.auth_psswd === 'Admin') {

  // } else if (users) {

  // }{
  //   auth_error.value = 'Вход админа не осуществлён';
  // }
}

auth_error.value = '';




</script>

<template>
  <div>
    <div>
    </div>
    <form>
      <div class="registr">
        <h3>Авторизация</h3>
        <hr>

        <div class="inp_1">
          Логин: <div class="inp"> <input type="text" autocomplete="login" placeholder="Ввод логина"
              v-model="auth_login"> </div>
        </div>

        <div class="inp_1">
          Пароль: <div class="inp_2"> <input type="password" autocomplete="current-password" placeholder="Пароль"
              v-model="auth_psswd"> </div>
        </div>

        <!-- Блок для отображения ошибки -->
        <div class="auth-error" v-if="auth_error">
          {{ auth_error }}
        </div>

        <button type="button"  @click="autorizovat()">Авторизоваться</button>
      </div>
    </form>




  </div>
</template>

<style scoped>
h3 {
  font-size: 35px;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}

hr{
    border: 1px solid rgba(34, 0, 53, 0.641);
    width: 100%;
}

.registr {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 12px;
  background-color: rgba(39, 1, 58, 0.104);
  padding: 20px;
  margin-bottom: 20px;
  min-height: 300px;
  text-align: center;
  color: rgb(54, 0, 85);

}

input {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 3px 12px;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  width: 300px;
  height: 30px;
}



.inp,
.inp_2 {
  display: flex;
}

.inp {
  margin-left: 84px;
}

.inp_1 {
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
}

.inp_2 {
  margin-left: 74px;
}

/* Стили для ошибки авторизации */
.auth-error {
  color: #ff6b6b;
  font-weight: bold;
  /* font-family: 'Courier New', Courier, monospace; */
  margin-top: 10px;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 100%;
  text-align: center;
}

button {
  color: rgb(54, 0, 85);
  padding: 9px;
  margin-top: 40px;
}

button:hover {
  color: white;
  background-color: rgb(21, 1, 37);
  transition: 0.5s;
  border-radius: 15px;
  padding: 14px;

}
</style>