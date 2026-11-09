<script setup>
import { useRouter } from 'vue-router';
import useFunk from '../composables/useFunk';
import { reactive, ref } from 'vue';

const router = useRouter()
const funks = useFunk();

const NewSmart = reactive({
    name: '',
    charact: '',
    opisa: '',
    price: ''
})

const errors = reactive({
    name: '',
    charact: '',
    opisa: '',
    price: ''
})

// Состояние кастомного уведомления
const showModal = ref(false);

const validate = (str, minWords, maxWords) => {
    if (!str) return false;
    const trimmed = str.trim();
    const words = trimmed.split(/\s+/);
    const startsWithCap = /^[A-ZА-ЯЁ]/.test(trimmed); 
    return startsWithCap && words.length >= minWords && words.length <= maxWords;
}

function Check() {
    Object.keys(errors).forEach(key => errors[key] = '');
    let isValid = true;

    if (!validate(NewSmart.name, 1, 10)) {
        errors.name = 'Ошибка: С большой буквы, 1-10 слов.';
        isValid = false;
    }
    if (!validate(NewSmart.charact, 5, 20)) {
        errors.charact = 'Ошибка: С большой буквы, 5-20 слов.';
        isValid = false;
    }
    if (!validate(NewSmart.opisa, 5, 20)) {
        errors.opisa = 'Ошибка: С большой буквы, 5-20 слов.';
        isValid = false;
    }
    if (!NewSmart.price || !/^\d+$/.test(NewSmart.price)) {
        errors.price = 'Ошибка: Только цифры.';
        isValid = false;
    }

    if (isValid) {
        funks.SmartFunction(NewSmart.name, NewSmart.charact, NewSmart.opisa, NewSmart.price);
        
        // Очистка полей
        NewSmart.name = '';
        NewSmart.charact = '';
        NewSmart.opisa = '';
        NewSmart.price = '';
        
        // Показываем наше окно
        showModal.value = true;
        // Авто-закрытие через 3 секунды
        setTimeout(() => {
            showModal.value = false;
        }, 3000);
    }
}
</script>

<template>
    <!-- Кастомное модальное окно -->
    <Transition name="fade">
        <div v-if="showModal" class="modal-overlay" @click="showModal = false">
            <div class="modal-content" @click.stop>
                <!-- <div class="success-icon">✓</div> -->
                <h3>Успешно!</h3>
                <p>Карточка товара была создана.</p>
                <button class="modal-btn" @click="showModal = false">Отлично</button>
            </div>
        </div>
    </Transition>

    <form @submit.prevent>
        <div class="redact">
            <div class="inp_txt">
                Название товара :
                <input type="text" v-model="NewSmart.name" placeholder="С большой буквы...">
                <span class="error_msg" v-if="errors.name">{{ errors.name }}</span>
            </div>

            <div class="inp_txt">
                Характеристики товара :
                <input type="text" v-model="NewSmart.charact" placeholder="5-20 слов...">
                <span class="error_msg" v-if="errors.charact">{{ errors.charact }}</span>
            </div>

            <div class="inp_txt">
                Описание товара :
                <input type="text" v-model="NewSmart.opisa" placeholder="5-20 слов...">
                <span class="error_msg" v-if="errors.opisa">{{ errors.opisa }}</span>
            </div>

            <div class="inp_txt">
                Цена товара :
                <input type="text" v-model="NewSmart.price" placeholder="Только цифры...">
                <span class="error_msg" v-if="errors.price">{{ errors.price }}</span>
            </div>

            <button type="button" @click="Check">Создать Карточку товара</button>
        </div>
    </form>

    <div class="divider">______________________________________________________________________________________________________________________________</div>

    <div class="katalog">
        <div class="karta" v-for="funk in funks.smartList.value" :key="funk.id">
            <div class="nazv">
                <p>{{ funk.name }}</p>
            </div>
            <div class="line">______________________</div>

            <div class="block-price">
                <p class="price"><b>Цена: {{ funk.price }}</b></p>
            </div>

            <div class="actions">
                <button type="button" @click="funks.SmartDel(funk.id)">Удалить</button>
                <button type="button" @click="router.push({ name: 'Kartochka', params: { id: funk.id } })">Перейти</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Стили модального окна */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    min-width: 250px;
}

.success-icon {
    font-size: 40px;
    color: #4CAF50;
    margin-bottom: 10px;
}

.modal-btn {
    margin-top: 15px;
    background: #4CAF50;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
}

/* Анимация появления */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Ваши старые стили без изменений */
form { font-family: Verdana, sans-serif; }
.redact { 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin: 90px auto 40px auto; 
    max-width: 800px; 
    min-width: 900px; }
.inp_txt { 
    display: flex; 
    flex-direction: column; 
    margin-top: 30px; 
    border: 1px solid rgba(46, 15, 58, 0.597);
     background-color: rgb(72, 23, 92); 
     color: #ffffff; 
     border-radius: 7px; 
     width: 100%; 
     max-width: 400px; 
     overflow: hidden; }
input { 
    padding: 10px; 
    border: none; 
    outline: none; 
    color: black; }
.error_msg { 
    color: #ff8e8e; 
    font-size: 0.8em; 
    padding: 5px 10px; 
    font-weight: bold; 
    background: rgba(0, 0, 0, 0.2); }
button { margin-top: 20px; background-color: rgb(59, 7, 100); color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; }
.divider { text-align: center; color: gray; margin-bottom: 20px; }
.katalog { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; max-width: 1200px; margin: 0 auto 50px; }
.karta { display: flex; flex-direction: column; align-items: center; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); padding: 15px; width: 220px; background: white; color: black;}
.actions { display: flex; gap: 5px; margin-top: 10px; }
.actions button { margin-top: 0; font-size: 0.7em; padding: 8px; }
.line { color: #ccc; }
p { margin: 5px 0; text-align: center; }
</style>
