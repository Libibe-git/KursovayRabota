<script setup>
import { computed, reactive, ref } from 'vue';
import useFunk from '../composables/useFunk';
import { useRoute } from 'vue-router';

const route = useRoute()
const useF = useFunk();
const redan = computed(() => useF.findSmart(Number(route.params.id)));

const newSmartData = reactive({
    name: '',
    price: '',
    opisa: '',
    charact: ''
})

const errors = reactive({
    name: '',
    price: '',
    opisa: '',
    charact: ''
})

// Переменная для сообщения об успехе
const isSuccess = ref(false);

const validate = (str, minWords, maxWords) => {
    if (!str) return false;
    const trimmedStr = str.trim();
    const words = trimmedStr.split(/\s+/);
    const startsWithCap = /^[A-ZА-ЯЁ]/.test(trimmedStr); 
    
    return startsWithCap && words.length >= minWords && words.length <= maxWords;
}

function edit() {
    Object.keys(errors).forEach(key => errors[key] = '');
    isSuccess.value = false; // Скрываем старое уведомление

    let isValid = true;

    if (!validate(newSmartData.name, 1, 10)) {
        errors.name = 'Ошибка: Должно начинаться с большой буквы, от 1 до 10 слов.';
        isValid = false;
    }

    if (!validate(newSmartData.charact, 5, 20)) {
        errors.charact = 'Ошибка: Должно начинаться с большой буквы, от 5 до 20 слов.';
        isValid = false;
    }

    if (!validate(newSmartData.opisa, 5, 20)) {
        errors.opisa = 'Ошибка: Должно начинаться с большой буквы, от 5 до 20 слов.';
        isValid = false;
    }

    if (!newSmartData.price || !/^\d+$/.test(newSmartData.price)) {
        errors.price = 'Ошибка: Введите только цифры.';
        isValid = false;
    }

    if (isValid) {
        useF.editSmart(redan.value.id, {
            name: newSmartData.name,
            price: Number(newSmartData.price),
            opisa: newSmartData.opisa,
            charact: newSmartData.charact
        });

        newSmartData.name = '';
        newSmartData.price = '';
        newSmartData.opisa = '';
        newSmartData.charact = '';
        
        // Показываем надпись об успехе
        isSuccess.value = true;

        // Скрываем её автоматически через 4 секунды
        setTimeout(() => {
            isSuccess.value = false;
        }, 4000);
    }
}
</script>

<template>
    <br>
    ________________________________________________
    <form @submit.prevent>
        <div>
            <b>Правила изменения карточек :</b>
            <li>
                <ol>Все предложения с большой буквы (CAPS LOCK разрешен).</ol>
                <ol>Название: от 1 до 10 слов.</ol>
                <ol>Описание и характеристики: от 5 до 20 слов.</ol>
                <ol>Цена: только цифры.</ol>
            </li>
            ________________________________________________
        </div>

        <div class="redact">
            <div class="inp_txt">
                Новое название товара :
                <input type="text" v-model="newSmartData.name">
                <span class="error_msg" v-if="errors.name">{{ errors.name }}</span>
            </div>

            <div class="inp_txt">
                Новые характеристики товара :
                <input type="text" v-model="newSmartData.charact">
                <span class="error_msg" v-if="errors.charact">{{ errors.charact }}</span>
            </div>

            <div class="inp_txt">
                Новое описание товара :
                <input type="text" v-model="newSmartData.opisa">
                <span class="error_msg" v-if="errors.opisa">{{ errors.opisa }}</span>
            </div>

            <div class="inp_txt">
                Новая цена :
                <input type="text" v-model="newSmartData.price">
                <span class="error_msg" v-if="errors.price">{{ errors.price }}</span>
            </div>

            <!-- Блок с уведомлением об успехе -->
            <Transition name="fade">
                <div v-if="isSuccess" class="success_msg">
                    Изменения успешно сохранены!
                </div>
            </Transition>

            <button type="button" @click="edit">Изменить</button>
        </div>
    </form>
</template>

<style scoped>
form {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.redact {
    display: flex;
    flex-direction: column;
    max-width: 500px;
}

.inp_txt {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border: 1px solid rgba(46, 15, 58, 0.597);
    background-color: rgb(72, 23, 92);
    color: white;
    border-radius: 7px;
    overflow: hidden;
}

input {
    padding: 10px;
    border: none;
    outline: none;
    color: black;
}

.error_msg {
    color: #ff8e8e;
    font-size: 0.85em;
    padding: 5px 10px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.2);
}

/* Стили для сообщения об успехе */
.success_msg {
    margin-top: 20px;
    padding: 10px;
    background-color: #2e7d32;
    color: white;
    border-radius: 7px;
    text-align: center;
    font-weight: bold;
}

/* Анимация появления/исчезновения */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

button {
    margin-top: 30px;
    background-color: rgb(59, 7, 100);
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background-color: rgb(82, 11, 139);
}

li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
