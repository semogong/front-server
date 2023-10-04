import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            form:{
                email:1,
                password:1,
                name:1,
                code:"",
            },
            auth:{
                token:"",
            }

        }
    },
    mutations: {
        restFormInfo(state) {
            state.form.email = "";
            state.form.password = "";
            state.form.name = "";
            state.form.code = "";
        },
        printLog(state,data){
            state.form.code = data;
        }


    },
})