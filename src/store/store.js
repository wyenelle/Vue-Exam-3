import {createStore} from 'vuex'



export const store = createStore({
    state:{
        app: [],
        notLoading: false
    },
    mutations: {
        fetched(state,payload){
            state.app = payload
            state.notLoading = true
        }
    }
})