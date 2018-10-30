// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

// imports of AJAX functions will go here
import { fetchUsers, fetchUser, updateUser, saveUser, deleteUser, authenticate } from '@/api'
import { isValidJwt, EventBus } from '@/utils'

Vue.use(Vuex)

const state = {
    // single source of data
    users: [],
    currentUser: {},
    user: {},
    jwt: ''
}

const actions = {
    // asynchronous operations
    loadUsers(context) {
        return fetchUsers()
            .then((response) => {
                context.commit('setUsers', { users: response.data })
            })
    },
    loadUser(context, { id }) {
        return fetchUser(id)
            .then((response) => {
                context.commit('setUser', { user: response.data })
            })
    },
    updateUserResponse(context) {
        return updateUser(context.state.currentUser)
    },
    login(context, userData) {
        context.commit('setUserData', { userData })
        return authenticate(userData)
            .then(response => {
                context.commit('setJwtToken', { jwt: response.data });
                //localStorage.setItem('user', JSON.stringify(response.data.user))
            })
            .catch(error => {
                console.log('Error Authenticating: ', error)
                EventBus.emit('failedAuthentication', error)
            })
    },
    /*logout(context) {
        /*clearIdToken();
        clearAccessToken();
        router.go('/');
        context.commit('logout');
    },*/
    /*
    register (context, userData) {
    context.commit('setUserData', { userData })
    return register(userData)
        .then(context.dispatch('login', userData))
        .catch(error => {
        console.log('Error Registering: ', error)
        EventBus.emit('failedRegistering: ', error)
        })
    },*/
    submitNewUser(context, user) {
        return saveUser(user, context.state.jwt.token)
    }
}

const mutations = {
    // isolated data mutations
    setUsers(state, payload) {
        state.users = payload.users
    },
    setUser(state, payload) {
        state.currentUser = payload.user
    },
    setUserData(state, payload) {
        console.log('setUserData payload = ', payload)
        if (payload.userData != undefined || payload.userData != null)
            state.user = payload.userData.username
        else
            state.user = {}
    },
    setJwtToken(state, payload) {
        console.log('setJwtToken payload = ', payload)
        localStorage.token = payload.jwt.token
        state.jwt = payload.jwt
        state.user = payload.jwt.user
    },
    logout(state) {
        state.user = null;
    }
}

const getters = {
    // reusable data accessors
    isAuthenticated(state) {
        //return isValidJwt(state.jwt.token)
        return state.jwt.token
    },
    user: state => {
        return state.user
    }
}



const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store