<script setup>
localStorage.getItem('saveUs')

import { computed } from 'vue';
import useUsers from '../composables/useUsers1';
import { RouterLink, RouterView, useRouter } from 'vue-router';


const router = useRouter()
const usersa = useUsers()
const last = usersa.userList.value[Object.keys(usersa.userList.value).length-1]

const saveUser = localStorage.setItem('saveUs', 'last')

// if () {
  
// }

</script>

<template>
  <div class="profile-container" v-if="usersa.logout">
    <div class="user-card" v-if="usersa.userList.value != ''">
      <h3 class="profile-title">Профиль {{ last.ulogin }}</h3>
      <div class="user-table">
        <table >
          <tbody>
            <tr>
              <td class="label">Логин :</td>
              <td class="value" > {{ last.ulogin }}</td>
            </tr>

            <tr>
              <td class="label">Пароль :</td>
              <td class="value">{{ last.upsswd }}</td>
            </tr>
            <tr>
              <td class="label">E-mail :</td>
              <td class="value">{{ last.uemail }}</td>
            </tr>
            <tr>
              <td class="label">Телефон :</td>
              <td class="value">{{ last?.unum_phone || 'Не указан' }}</td>
            </tr>

            <tr>
              <td> 
                <!-- <button @click="router.push({name: 'Katalog'}); usersa.logout.value = false">Выход</button> -->
                <button @click="usersa.IamNoUser(); usersa.logout.value = false; router.push({name: 'Glavnay'})" class="exit">Выход</button>
              </td>
              <td>
                <!-- <button v-if="debilism" @click="useUsers2().IamAdmin()">Я Админ</button> -->
                <!-- <button type="button" v-if="debilism" :to="router.push({ name: 'Admin' })" @click="useUsers2().IamAdmin()"> Админ Панель</button> -->
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

    <div v-else> <h2>Вы не вошли в аккаунт</h2></div>
    <div class="all-users-section" v-if="usersa.debilism.value" >
      <h3 class="section-title">
        <span>👥</span>
        Все пользователи

      </h3>
      
      <div class="users-table-container" >
        <table class="users-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Логин</th>
              <th>Пароль</th>
              <th>E-mail</th>
              <th>Телефон</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="user in usersa.userList.value">
              <td class="cell-number">{{ user.uid }}</td>
              <td class="cell-login">{{ user.ulogin }}</td>
              <td class="cell-password">{{ user.upsswd }}</td>
              <td class="cell-email">{{ user.uemail }}</td>
              <td class="cell-phone">{{ user?.unum_phone || '—' }}</td>
              <td class="cell-status"><span v-if="user.ulogin === last.ulogin" class="current-badge">Вы</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div v-else>
    <button>Регистрироваться</button>
  </div>
</template>

<style scoped>
.exit{
  background-color: #460014;
  color: white;
}

.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  background-color: rgba(248, 248, 248, 0.95);
  min-height: 100vh;
  min-width: 600px;
}

/* Заголовки */
.profile-title,
.section-title {
  font-size: 30px;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  margin-bottom: 20px;
  color: #280032;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.users-count {
  background: rgba(89, 89, 89, 0.578);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: normal;
}

/* Карточка текущего пользователя */
.user-card {
  background-color: rgba(89, 89, 89, 0.578);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.user-table table {
  width: 100%;
  border-collapse: collapse;
}

.user-table tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.user-table tr:last-child {
  border-bottom: none;
}

.user-table td {
  padding: 12px 0;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}

.user-table .label {
  width: 150px;
  font-size: 1rem;
  color: #f0f0f0;
  font-weight: bold;
}

.user-table .value {
  font-size: 1rem;
  color: white;
  font-weight: normal;
}

/* Секция всех пользователей */
.all-users-section {
  margin-bottom: 40px;
}

.users-table-container {
  background-color: rgba(89, 89, 89, 0.578);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;
}

.users-table {
  width: 100%;
  border-collapse: collapse;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}

.users-table thead {
  background-color: rgba(70, 70, 70, 0.7);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.users-table th {
  padding: 16px 12px;
  text-align: left;
  font-weight: bold;
  color: #f0f0f0;
  font-size: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.users-table th:last-child {
  border-right: none;
}

.users-table tbody tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 0.2s;
}

.users-table tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.users-table tbody tr:last-child {
  border-bottom: none;
}

.users-table td {
  padding: 14px 12px;
  font-size: 0.95rem;
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.users-table td:last-child {
  border-right: none;
}

.users-table .current-user-row {
  background-color: rgba(255, 255, 255, 0.15);
  border-left: 3px solid #747bff;
}

/* Стили для ячеек таблицы */
.cell-number {
  font-weight: bold;
  color: #f0f0f0;
  text-align: center;
  width: 50px;
}

.cell-login {
  font-weight: bold;
  color: white;
  min-width: 120px;
}

.cell-password {
  /* font-family: 'Courier New', Courier, monospace; */
  color: #f0f0f0;
}

.cell-email {
  color: #b3d4fc;
}

.cell-phone {
  color: #d1d1d1;
}

.cell-status {
  text-align: center;
  width: 60px;
}

.current-badge {
  background: #747bff;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .users-table-container {
    overflow-x: auto;
  }
  
  .users-table {
    min-width: 800px;
  }
}

@media (max-width: 768px) {
  .profile-container {
    padding: 15px;
    background-color: rgba(248, 248, 248, 0.98);
  }
  
  .user-card,
  .users-table-container {
    padding: 15px;
  }
  
  .profile-title,
  .section-title {
    font-size: 24px;
  }
}

button {
  color: rgb(54, 0, 85);
  padding: 9px;
  margin-top: 40px;
}

button:hover {
  color: white;
  background-color: rgb(31, 1, 55);
  transition: 0.5s;
  border-radius: 15px;
  padding: 14px;

}

@media (max-width: 480px) {
  .profile-container {
    padding: 10px;
  }
  
  .profile-title,
  .section-title {
    font-size: 20px;
  }
  
  .user-table .label {
    width: 120px;
    font-size: 0.9rem;
  }
  
  .user-table .value {
    font-size: 0.9rem;
  }
}
</style>