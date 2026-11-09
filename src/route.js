import Admin from "./components/Admin.vue";
import Kartochka from "./components/Kartochka.vue";
import Katalog from "./components/Katalog.vue";
import korzina from "./components/korzina.vue";
import Opisanie from "./components/Opisanie.vue";
import Redaktir from "./components/Redaktir.vue";
import Error from "./components/Error.vue";
import { createRouter, createWebHistory } from 'vue-router'
import useUsers from "./composables/useUsers1";
import { computed } from "vue";
import Avtorizats from "./components/avtorizats.vue";
import Registrat from './components/registrat.vue'
import Profile  from "./components/index.vue";
import form from './components/valid.vue'
import Glavnay from './components/Glavnay.vue'

const debilism = computed(() => useUsers().debilism.value);
const debilism2 = computed(() => useUsers().debilism2.value);

const routes = [
    {path:'/', component: Glavnay, name:'Glavnay'},
    {path:'/Katalog', component: Katalog, name:'Katalog'},
    {path: '/avtorizats', component: Avtorizats, name: 'avtorizats'},
    {path: '/registrat', component: Registrat, name: 'registrat'},
    {path: '/profile', component: Profile, name: 'index',meta:{suc2:true}},
    {path:'/Admin', component: Admin, name:'Admin', meta:{suc:true}},
    {path:'/Kartochka/:id([0-9]*)', component: Kartochka, name:'Kartochka' ,children:[
        {path:'Opisanie', component: Opisanie, name:'Opisanie'},
        {path:'Redaktir', component: Redaktir, name:'Redaktir', meta:{suc:true}}
    ]},
    {path:'/:Error(.*)', component: Error, name:'Error'},
    {path: '/korzina', component: korzina, name: 'korzina', meta:{suc2:true}},
    {path: '/form', component: form, name: 'valid', meta:{suc2:true}}
    

]



export  const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    if (debilism.value ==false && to.meta.suc) {
        next({name:from.name})
    }else if(debilism2.value == false && to.meta.suc2){
        next({name:from.name})
    } else {
        next()
    }
})