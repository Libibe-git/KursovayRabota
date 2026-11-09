<script setup>
import { ref } from 'vue';

// Данные полей
const fio = ref('');
const address = ref('');
const cardNumber = ref('');
const expiryDate = ref('');
const cvc = ref('');

// Ошибки
const errors = ref({
    fio: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
});

// Состояние модального окна
const isPaid = ref(false);

// Форматирование срока действия (ММ/ГГ)
function handleExpiryInput(event) {
    let val = event.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);

    if (val.length >= 2) {
        const month = parseInt(val.slice(0, 2));
        if (month < 1 || month > 12) {
            errors.value.expiryDate = 'Месяц 01-12';
        } else {
            errors.value.expiryDate = '';
        }
        expiryDate.value = val.slice(0, 2) + (val.length > 2 ? '/' + val.slice(2) : '');
    } else {
        expiryDate.value = val;
        errors.value.expiryDate = '';
    }
}

// Форматирование номера карты (0000 0000 0000 0000)
function handleCardInput(event) {
    let val = event.target.value.replace(/\D/g, '');
    if (val.length > 16) val = val.slice(0, 16);
    cardNumber.value = val.replace(/(.{4})/g, '$1 ').trim();
    errors.value.cardNumber = '';
}

// Валидация всей формы
function validateAndPay() {
    errors.value.fio = fio.value ? '' : 'Введите ФИО';
    errors.value.address = address.value ? '' : 'Введите адрес';
    errors.value.cardNumber = cardNumber.value.length < 19 ? 'Неверный номер карты' : '';
    errors.value.cvc = cvc.value.length < 3 ? '3 цифры' : '';
    
    if (!expiryDate.value) {
        errors.value.expiryDate = 'Укажите срок';
    }

    const hasErrors = Object.values(errors.value).some(msg => msg !== '');
    
    if (!hasErrors) {
        isPaid.value = true; // Показываем модальное окно
    }
}

function closeOrder() {
    isPaid.value = false;
    // Сброс полей
    fio.value = '';
    address.value = '';
    cardNumber.value = '';
    expiryDate.value = '';
    cvc.value = '';
}
</script>

<template>
    <div class="blackberry-theme">
        <!-- Модальное окно -->
        <Transition name="modal-fade">
            <div v-if="isPaid" class="modal-overlay" @click="closeOrder">
                <div class="modal-card" @click.stop>
                    <!-- <div class="success-icon">🍇</div> -->
                    <h3>Заказ оплачен!</h3>
                    <p>Ожидайте доставку в ближайшее время.</p>
                    <button class="close-btn" @click="closeOrder">Закрыть</button>
                </div>
            </div>
        </Transition>

        <form class="checkout-form" @submit.prevent="validateAndPay">
            <h2 class="form-title">Оформление заказа</h2>

            <div class="input-group">
                <label>ФИО Получателя</label>
                <input type="text" v-model="fio" class="blackberry-input" :class="{ 'error-border': errors.fio }" placeholder="Иванов Иван Иванович">
                <p v-if="errors.fio" class="error-msg">{{ errors.fio }}</p>
            </div>

            <div class="input-group">
                <label>Адрес Доставки</label>
                <input type="text" v-model="address" class="blackberry-input" :class="{ 'error-border': errors.address }" placeholder="г. Москва, ул. Ленина, д. 1">
                <p v-if="errors.address" class="error-msg">{{ errors.address }}</p>
            </div>

            <div class="input-group">
                <label>Номер карты</label>
                <input type="text" :value="cardNumber" @input="handleCardInput" class="blackberry-input" :class="{ 'error-border': errors.cardNumber }" placeholder="0000 0000 0000 0000" maxlength="19">
                <p v-if="errors.cardNumber" class="error-msg">{{ errors.cardNumber }}</p>
            </div>

            <div class="row">
                <div class="input-group">
                    <label>Годность</label>
                    <input type="text" :value="expiryDate" @input="handleExpiryInput" class="blackberry-input" :class="{ 'error-border': errors.expiryDate }" placeholder="ММ/ГГ" maxlength="5">
                    <p v-if="errors.expiryDate" class="error-msg">{{ errors.expiryDate }}</p>
                </div>

                <div class="input-group cvc-group">
                    <label>CVC</label>
                    <input type="password" v-model="cvc" class="berry-input" :class="{ 'error-border': errors.cvc }" maxlength="3" placeholder="***">
                    <p v-if="errors.cvc" class="error-msg">{{ errors.cvc }}</p>
                </div>
            </div>

            <button type="submit" class="submit-btn">Оплатить заказ</button>
        </form>
    </div>
</template>

<style scoped>
/* Модальное окно */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(46, 5, 54, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    backdrop-filter: blur(4px);
}

.modal-card {
    background: white;
    padding: 40px;
    border-radius: 24px;
    text-align: center;
    max-width: 320px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.success-icon {
    font-size: 50px;
    margin-bottom: 15px;
}

.modal-card h3 {
    color: #2e0536;
    margin-bottom: 10px;
}

.modal-card p {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.close-btn {
    background: #6a0d83;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 12px;
    font-weight: bold;
    cursor: pointer;
}

/* Анимация модалки */
.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; transform: scale(0.9); }

/* Основная тема */
.blackberry-theme {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #f9f4fa;
    min-height: 100vh;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
}

.checkout-form {
    background: white;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(78, 11, 94, 0.1);
    width: 100%;
    max-width: 400px;
}

.form-title {
    color: #2e0536;
    margin-bottom: 25px;
    text-align: center;
    font-size: 22px;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    position: relative;
}

.row {
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 15px;
}

label {
    color: #4e0b5e;
    font-weight: 600;
    margin-bottom: 6px;
    font-size: 12px;
}

.blackberry-input, .berry-input {
    padding: 12px;
    border: 2px solid #e0cfe4;
    border-radius: 12px;
    background-color: #fdfaff;
    color: #2e0536;
    font-size: 12px;
    transition: all 0.2s ease;
}

.berry-input {
    text-align: center;
}

.blackberry-input:focus, .berry-input:focus {
    border-color: #6a0d83;
    outline: none;
    box-shadow: 0 0 0 3px rgba(106, 13, 131, 0.1);
}

.error-border {
    border-color: #d32f2f !important;
}

.error-msg {
    color: #d32f2f;
    font-size: 11px;
    margin-top: 4px;
    font-weight: bold;
}

.submit-btn {
    width: 100%;
    padding: 16px;
    background-color: #6a0d83;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.1s, background 0.3s;
    margin-top: 15px;
}

.submit-btn:hover { background-color: #4e0b5e; }
.submit-btn:active { transform: scale(0.98); }
</style>
