import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const state = reactive({
    users: [
        {}
    ]
})

const logout = ref(false);
const router = useRouter();
const userList = ref([
    { id: 0, ulogin: 'Admin', upsswd: 'Admin', uemail: 'admin@adm.ru', unum_phone: '89990212341' },
    { id: 1, ulogin: 'User', upsswd: 'Testuser', uemail: 'test@adm.ru', unum_phone: '8999025324' }
])

const id = ref(1)
const myuser = ref()
const usus = ref()
const debilism = ref(false)
const debilism2 = ref(false)

function IamAdmin() {
    debilism.value = true;
}

function IamNoAdmin() {
    debilism.value = false;

}

function IamUser() {
    debilism2.value = true;
}

function IamNoUser() {
    debilism2.value = false;

}


function SravnUser(login, passwd) {
    myuser.value = userList.value.find((user) => user.ulogin == login && user.upsswd == passwd)
    usus.value = userList.value.find((user) => user.ulogin == login && user.upsswd == passwd)
    // console.log(myuser.value.ulogin);
    // console.log(myuser.upsswd);
    if (myuser.value) {
        if (myuser.value.ulogin === 'Admin' && myuser.value.upsswd === 'Admin') {
            debilism.value = true
        } else {
            debilism.value = false
        }
    }

    if (usus.value) {

        debilism2.value = true
    } else {
        debilism2.value = false
    }

    return userList.value.find((user) => user.ulogin == login && user.upsswd == passwd)
}

function findUser(userID) {
    return userList.value.find((user) => user.id === userID)
}

function UsersFunction(login, psswd, email, num_phone) {

    userList.value.push({ ulogin: login, upsswd: psswd, uemail: email, unum_phone: num_phone, uid: id.value })
    id.value++
}

function deleteUser(deleteUserId) {
    const deleteUserPos = state.users.indexOf(findUser(deleteUserId))
    state.users.splice(deleteUserPos, 1)
}

export default function useUsers() {
    return { userList, findUser, deleteUser, UsersFunction, SravnUser, logout, IamAdmin, IamNoAdmin, debilism, debilism2, IamUser, IamNoUser }
}