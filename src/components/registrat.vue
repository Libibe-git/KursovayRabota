<script setup>
import { ref, reactive } from 'vue';
import useUsers from '../composables/useUsers1';
import { useRouter } from 'vue-router';


const router = useRouter()
const uusers = useUsers()
const loginElem = ref(null);
const emailElem = ref(null);

const er_log = ref('');
const er_mail = ref('');
const er_psswd = ref('');
const er_psswd2 = ref('');
const er_tel = ref('');
const suc = ref('');

const userVvod = reactive({
    login: '',
    email: '',
    psswd: '',
    num_phone: '',
    psswd2: ''
})


function check_valid() {
    er_log.value = '';
    er_mail.value = '';
    er_psswd.value = '';
    er_psswd2.value = '';
    er_tel.value = '';
    suc.value = '';

    let flag = true;

    // Проверка логина
    if (!userVvod.login) {
        flag = false;
        er_log.value = 'Введи логин';
    } else if (userVvod.login.length < 2 || userVvod.login.length > 10) {
        flag = false;
        er_log.value = 'Логин должен иметь хотя бы 2 символа и не более 10.';
    } else if (!loginElem.value.validity.valid) {
        flag = false;
        er_log.value = 'Логин должен начинаться с заглавной буквы';
    }

    // Проверка email
    if (userVvod.email.trim() === '') {
        flag = false;
        er_mail.value = 'Введи почту';
    } else if (emailElem.value && !emailElem.value.validity.valid) {
        flag = false;
        er_mail.value = 'Введи корректный email (с символом @)';
    }

    // Проверка пароля
    if (userVvod.psswd.trim() === '') {
        flag = false;
        er_psswd.value = 'Пароль введи';
    } else if (userVvod.psswd.length < 6) {
        flag = false;
        er_psswd.value = 'Пароль должен быть не менее 6 символов';
    }

    // Проверка подтверждения пароля
    if (userVvod.psswd2.trim() === '') {
        flag = false;
        er_psswd2.value = 'Пароль нужно повторить.';
    } else if (userVvod.psswd2 !== userVvod.psswd) {
        flag = false;
        er_psswd2.value = 'Пароль должен совпадать в обоих полях ввода.';
    }

    // Проверка телефона (если введен)
    if (userVvod.num_phone.trim() !== '') {
        const phoneDigits = userVvod.num_phone.replace(/\D/g, '');
        if (phoneDigits.length < 10 || phoneDigits.length > 15) {
            flag = false;
            er_tel.value = 'Номер телефона должен содержать от 10 до 15 цифр';
        }
    }

    // Проверка на существующего пользователя
    if (flag) {
        const existingUser = uusers.userList.value.find(u => u.ulogin == userVvod.login);
        if (existingUser) {
            flag = false;
            er_log.value = 'Пользователь с таким логином уже существует';
        } else {
            flag = true
        }
    }

    // Проверка на существующий email
    if (flag) {
        const existingEmail = uusers.userList.value.find(u => u.uemail == userVvod.email);
        if (existingEmail) {
            flag = false;
            er_mail.value = 'Пользователь с таким email уже существует';
        } else {
            flag = true
        }
    }

    if (flag) {
        suc.value = `Пользователь ${userVvod.login} зарегистрирован!`;
        uusers.UsersFunction(userVvod.login, userVvod.psswd, userVvod.email, userVvod.num_phone)


        // Очистка полей
        userVvod.login = '';
        userVvod.email = '';
        userVvod.psswd = '';
        userVvod.psswd2 = '';
        userVvod.num_phone = '';
        userVvod.suc = '';

        uusers.logout.value = true
        uusers.debilism2.value = true
        uusers.debilism.value = false

        router.push({ name: 'index' })

    }


}

</script>

<template>
    <div class="main-content">
        <div>
            <div>

                <form>
                    <div class="registr">
                        <div class="text">
                            <h3>Регистрация</h3>
                            <div class="prim">
                                <p>*Логин должен начинаться с заглавной буквы.</p><br>
                                <p>*Может содержать маленькие буквы и цифры.</p><br>
                                <p>*Символы _ : ! ' ^ </p><br>
                                <p>*Пароль должен быть не менее 6 символов</p>
                            </div>
                        </div>
                        <hr>
                        <div class="inp_1">
                            Логин:
                            <div class="inp">
                                <input type="text" minlength="2" maxlength="10" placeholder="Ввод логина"
                                    autocomplete="login" v-model="userVvod.login" ref="loginElem"
                                    pattern="[A-Z][A-Za-z0-9_:!'^]+" required>
                            </div>
                        </div>

                        <div class="all_err">
                            <div id="er_log">
                                {{ er_log }}
                            </div>
                        </div>

                        <div class="inp_1">
                            Эл. почта:
                            <div class="inp_4">
                                <input type="email" v-model="userVvod.email" placeholder="name_mail@qwe.ru"
                                    autocomplete="mail" ref="emailElem" required>
                            </div>
                        </div>

                        <div class="all_err">
                            <div id="er_mail">
                                {{ er_mail }}
                            </div>
                        </div>

                        <div class="inp_1">
                            Пароль:
                            <div class="inp_2">
                                <input type="password" placeholder="Пароль" v-model="userVvod.psswd" minlength="6"
                                    autocomplete="new-password" required>
                            </div>
                        </div>

                        <div class="all_err">
                            <div id="er_psswd">
                                {{ er_psswd }}
                            </div>
                        </div>

                        <div class="inp_1">
                            Повтор пароля:
                            <div class="inp_3">
                                <input type="password" placeholder="Пароль" v-model="userVvod.psswd2"
                                    autocomplete="new-password" required>
                            </div>
                        </div>

                        <div class="all_err">
                            <div id="er_psswd2">
                                {{ er_psswd2 }}
                            </div>
                        </div>

                        <hr>

                        <h2>Дополнительные необязательные данные</h2>

                        <div class="inp_1">
                            Номер телефона:
                            <div>
                                <input type="tel" placeholder="+1 234 567-89-90" v-model="userVvod.num_phone"
                                    maxlength="16">
                            </div>
                        </div>

                        <div class="all_err">
                            <div id="er_tel">
                                {{ er_tel }}
                            </div>
                        </div>

                        <div class="btn">
                            <button type="button" @click="check_valid()">Регистрироваться</button>
                        </div>

                        <div class="sucess">
                            <div id="suc">
                                {{ suc }}
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<style scoped>
.btn {
    min-width: 100%;
    display: flex;
    justify-content: center;
}

.text {
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
}

hr {
    border: 1px solid rgba(34, 0, 53, 0.641);
    width: 100%;
}

/* Навигация */
.header-nav {
    display: flex;
    gap: 10px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}

.nav-btn {
    background-color: rgba(70, 70, 70, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    font-size: 0.9rem;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
}

.nav-btn:hover {
    background-color: rgba(85, 85, 85, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
}

.nav-btn.nav-active {
    background-color: rgba(116, 123, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.3);
    font-weight: bold;
}

/* Информация о пользователе */
.header-user {
    flex-shrink: 0;
}

.user-section {
    display: flex;
    align-items: center;
    gap: 10px;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-name {
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    color: white;
    font-size: 0.9rem;
    background: rgba(70, 70, 70, 0.7);
    padding: 6px 12px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.logout-btn {
    background-color: rgba(255, 107, 107, 0.2);
    border: 1px solid rgba(255, 107, 107, 0.3);
    border-radius: 8px;
    color: #ff6b6b;
    padding: 6px 12px;
    cursor: pointer;
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    font-size: 0.85rem;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 4px;
}

.logout-btn:hover {
    background-color: rgba(255, 107, 107, 0.3);
}

.guest-section {
    background: rgba(70, 70, 70, 0.7);
    padding: 6px 12px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.guest-text {
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

/* Основной контент */
.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 40px;
}

/* Остальные стили остаются без изменений */
h3 {
    font-size: 30px;
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}

h2 {
    font-size: 18px;
    /* text-decoration: underline; */
}

.prim {
    margin-top: 40px;
}

p {
    font-size: 12px;
    margin-top: -40px;
}

.registr {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 12px;
    background-color: rgba(39, 1, 58, 0.104);
    padding: 20px;
    margin-bottom: 20px;
    color: rgb(54, 0, 85);
    /* font-size: 16px; */

}

input {
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 6px 12px;
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    width: 200px;
}

input:invalid {
    border-color: #24003d;
}

input:valid {
    border-color: #51cf66;
}

.inp,
.inp_2,
.inp_3,
.inp_4 {
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

.inp_3 {
    margin-left: 15px;
}

.inp_4 {
    margin-left: 58px;
}

.all_err {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    /* font-family: 'Courier New', Courier, monospace; */
    color: #ff6b6b;
    min-height: 20px;
}

button {
    color: rgb(54, 0, 85);
    padding: 9px;
    margin-top: 40px;
    display: flex;
}

button:hover {
    color: white;
    background-color: rgb(21, 1, 37);
    transition: 0.5s;
    border-radius: 15px;
    padding: 14px;

}

.sucess {
    padding: 20px;
    font-weight: bolder;
    font-size: 20px;
    color: rgb(69, 136, 114);
    margin-top: 10px;
}

/* Адаптивность */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 15px;
        padding: 0 15px;
    }

    .header-nav {
        width: 100%;
        justify-content: center;
    }

    .nav-btn {
        padding: 6px 12px;
        font-size: 0.85rem;
    }

    .logo-text {
        font-size: 18px;
    }

    .logo-icon {
        width: 40px;
        height: 40px;
        font-size: 24px;
    }

    .user-name,
    .logout-btn,
    .guest-text {
        font-size: 0.85rem;
    }
}

@media (max-width: 480px) {
    .header-nav {
        gap: 5px;
    }

    .nav-btn {
        padding: 5px 10px;
        font-size: 0.8rem;
    }

    .logo-text {
        font-size: 16px;
    }

    .main-content {
        padding: 0 15px 30px;
    }
}
</style>