import { ref } from "vue";
import imager from '../assets/img/pura70.jpg';
import tysim from '../assets/img/pura70Pro.jpg'
// import pura70Pro from '../assets/img/pura70Pro.jpg';
import pura70Pro from '../assets/img/pura70Pro.jpg';
// import smasnug24U from '../assets/img/sosun24U.png';
import sam24SU from '../assets/img/sam24SU.jpg';
import freBudHuawei from '../assets/img/freBudHuawei.jpg';
import freBudSamsa from '../assets/img/freBudSamsa.jpg';


const smartList = ref([
    {
        id: 1, name: 'Huawei PURA 70', opisanie: 'Стильный флагман с упором на мобильную фотографию и компактную эргономику. Модель выделяется уникальным треугольным дизайном камер, плоскими гранями и сверхпрочным стеклом Kunlun Glass. Это идеальный баланс между премиальным стилем и технологиями профессиональной съемки XMAGE.Смартфон оснащен функцией Ultra Speed Snapshot, позволяющей делать четкие снимки объектов в быстром движении. Поддерживает реверсивную беспроводную зарядку — можно подзарядить наушники прямо от корпуса телефона. Сервисы Google (YouTube, WhatsApp, карты) легко устанавливаются через AppGallery с помощью встроенных утилит.',
        character: 'Экран: 6.6" LTPO OLED, 1–120 Гц, яркость до 2500 нит. Процессор: Kirin 9000S1 (8 ядер). Память: 12 ГБ ОЗУ + 256/512 ГБ ПЗУ. Основная камера: 50 Мп (f/1.4–f/4.0) + 13 Мп (ширик) + 12 Мп (перископ, 5x зум). Батарея: 4900 мАч, зарядка 66 Вт (проводная) / 50 Вт (беспроводная). ОС: EMUI 14.2 (на базе Android без сервисов Google). Защита: IP68 (вода и пыль).',
        image: imager, price: '56999'
    },
    {
        id: 2, name: 'Huawei Pura 70 Pro', opisanie: 'Продвинутая версия флагмана с увеличенным экраном и усиленной системой камер. Смартфон получил изогнутый по всем четырем сторонам дисплей для максимального погружения и более мощную батарею. Главное отличие Pro-версии — улучшенный макрообъектив и увеличенная скорость зарядки, что делает его мощным инструментом для творчества и работы. Pro-версия оснащена уникальным макро-телеобъективом, который позволяет снимать мельчайшие детали с близкого расстояния с художественным размытием. Поддерживает сверхбыструю беспроводную зарядку (80 Вт), которая заряжает смартфон до 50% всего за 15 минут. Комплектуется текстурированным чехлом, повторяющим премиальный дизайн задней панели.',
        character: 'Экран: 6.8" LTPO OLED, 1–120 Гц, скругление по краям (Quad-Curve).  Процессор: Kirin 9010 (улучшенная архитектура).  Память: 12 ГБ ОЗУ + 512 ГБ / 1 ТБ ПЗУ.  Основная камера: 50 Мп (f/1.4–f/4.0) + 12.5 Мп (ширик) + 48 Мп (телемакро, 3.5x зум, макросъемка 5 см).  Батарея: 5050 мАч, зарядка 100 Вт (проводная) / 80 Вт (беспроводная).  ОС: EMUI 14.2.  Защита: IP68 и стекло Kunlun Glass 2.',
        image: pura70Pro, price: '64999'
    },
    {
        id: 3, name: 'Samsung Galaxy S24 Ultra', opisanie: 'Ультимативный флагман со встроенным пером S Pen и титановым корпусом. Смартфон объединяет в себе максимальную мощность, искусственный интеллект Galaxy AI и лучшую в классе 200-мегапиксельную камеру. Прямой экран с антибликовым покрытием и плоские грани делают его идеальным инструментом для бизнеса, творчества и гейминга. Смартфон поддерживает функции Galaxy AI: «Обвести и найти» (Circle to Search), живой перевод телефонных звонков и умное редактирование фото (удаление и перемещение объектов). Экран защищен стеклом Corning Gorilla Armor, которое на 75% уменьшает отражения и блики, обеспечивая идеальную видимость даже под прямым солнцем.',
        character: 'Экран: 6.8" Dynamic LTPO AMOLED 2X, 1–120 Гц, пиковая яркость 2600 нит. Процессор: Snapdragon 8 Gen 3 for Galaxy. Память: 12 ГБ ОЗУ + 256/512 ГБ / 1 ТБ ПЗУ. Основная камера: 200 Мп (широкоугольная) + 50 Мп (перископ, 5x зум) + 10 Мп (телефото, 3x зум) + 12 Мп (ультраширик). Батарея: 5000 мАч, зарядка 45 Вт (проводная) / 15 Вт (беспроводная). ОС: Android 14 (One UI 6.1) с гарантией обновлений на 7 лет. Особенности: Корпус из авиационного титана, защита IP68, стилус S Pen в комплекте.',
        image: sam24SU, price: '56999'
    },
    {
        id: 4, name: 'Samsung Galaxy Buds3 Pro',
        opisanie: 'Полностью беспроводные наушники нового поколения в футуристичном дизайне с «лезвиями» (ножками) и адаптивной подсветкой Blade Lights. Модель обеспечивает студийное качество звука и интеллектуальное шумоподавление, подстраиваясь под форму вашего уха и окружающую обстановку в реальном времени. Благодаря интеграции с Galaxy AI, наушники могут работать как переводчик в реальном времени: вы слышите перевод иностранной речи прямо в уши. Встроенная подсветка на корпусе не только выглядит стильно, но и помогает найти наушники в темноте через приложение SmartThings.',
        character: 'Звук: Двухполосная система динамиков (вуфер + твитер) с раздельными усилителями.  Аудиокодек: SSC (Samsung Seamless Codec) для передачи звука 24 бит / 96 кГц (Hi-Fi).  Шумоподавление: Адаптивное активное шумоподавление (ANC) с ИИ.  Автономность: До 6 часов с ANC (до 26 часов с кейсом).  Связь: Bluetooth 5.4, функция мгновенного переключения между устройствами Samsung.  Защита: IP57 (защита от пыли и полное погружение в воду на глубину до 1 метра).', 
        image: freBudSamsa, price: '14999'
    },
    {
        id: 5, name: 'Huawei FreeBuds Pro 3', opisanie: 'Флагманские TWS-наушники с кристально чистым звуком и продвинутой системой активного шумоподавления. Модель выполнена в элегантном корпусе из цельного стекла и металла. Благодаря двойным драйверам и поддержке Hi-Res кодеков, наушники передают каждую деталь музыкальной композиции, обеспечивая эффект присутствия в концертном зале.  Наушники оснащены защитой от влаги и пыли по стандарту IP54, что делает их подходящими для тренировок. Уникальный алгоритм тройного адаптивного эквалайзера анализирует громкость и форму ушного канала в реальном времени, подстраивая звучание персонально под вас. ',
        character: 'Звук: Двойная система драйверов (динамический 11 мм + ультравысокочастотный драйвер). Аудиокодеки: Поддержка L2HC 3.0 и LDAC™ (сертификация Hi-Res Wireless). Шумоподавление: Интеллектуальное ANC 3.0 (автоматически подстраивается под шум вокруг). Микрофоны: Система Pure Voice 2.0 с датчиком костной проводимости для четких звонков. Автономность: До 6.5 часов без ANC (до 31 часа с кейсом). Подключение: Одновременная работа с двумя устройствами.',
        image: freBudHuawei, price: '15999'
    }
])

const NewTovarId = ref(12)

const vKorzin = ref([])
const text = ref()

function findSmart(smartID) {
    return smartList.value.find((smart) => smart.id === smartID)
}

function SmartFunction(nameS, charaS, opisaS, priseS) {
    smartList.value.push({ name: nameS, character: charaS, opisanie: opisaS, price: priseS, id: NewTovarId.value, image: tysim })
    NewTovarId.value++
}

function SmartDel(smartID) {
    const smartIndex = smartList.value.findIndex((smart) => smart.id === smartID)
    smartList.value.splice(smartIndex, 1)
}

function SmartDelKorz(smartrID) {

    const smartKorz = vKorzin.value.findIndex((smartk) => smartk.id === smartrID)
    vKorzin.value.splice(smartKorz, 1)

}

function editSmart(smartID, newSmartData) {
    const smart = findSmart(smartID)
    smart.name = newSmartData.name
    smart.price = newSmartData.price
    smart.opisanie = newSmartData.opisa
    smart.character = newSmartData.charact
}

function teleport(produkt) {
    const productId = produkt.id;
    const tovarni = vKorzin.value.find(prod => prod.id === productId)

    if (tovarni) {
        tovarni.count = +1;
        console.log('Ещё один :', tovarni.name);


    } else {
        vKorzin.value.push({
            id: produkt.id,
            name: produkt.name,
            price: produkt.price,
            count: 1
        })
        text.value = 'YEAH '
    }

}

export default function useFunk() {
    return { smartList, SmartFunction, SmartDel, findSmart, editSmart, NewTovarId, teleport, vKorzin, SmartDelKorz }
}