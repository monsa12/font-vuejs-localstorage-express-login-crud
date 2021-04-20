import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
var config = {
    headers: {
        'Content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'cache-control': 'no-cache'
    }
};



export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('user')) || {},
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, { user, token }) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
            state.user = {}
        },
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'http://localhost:3000/login', data: user, method: 'POST' }, config)
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user))
                        axios.defaults.headers.common['token'] = token
                        commit('auth_success', { user, token })
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'http://localhost:3000/usuario', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.usuario
                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user))

                        axios.defaults.headers.common['token'] = token
                        let data = {
                            token,
                            user
                        }

                        commit('auth_success', data)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                delete axios.defaults.headers.common['token']
                resolve()
            })
        },
        getUser({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'http://localhost:3000/usuario/' + user._id, data: user, method: 'GET' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['token'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        updateUser({ commit }) {
            console.log('Vuex updateUSer');
            // return new Promise((resolve, reject) => {
            //     commit('auth_request')
            //     const token = localStorage.getItem('token')
            //     axios({ url: 'http://localhost:3000/token/', data: token, method: 'POST' })
            //         .then(resp => {
            //             axios.defaults.headers.common['token'] = token
            //             commit('auth_success', token, user)
            //             resolve(resp)
            //         })
            //         .catch(err => {
            //             commit('auth_error', err)
            //             localStorage.removeItem('token')
            //             reject(err)
            //         })
            // })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        getUs: state => state.user,
    }
})