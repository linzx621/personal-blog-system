import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increase(state) {
            state.count++;
        },
        decrease(state) {
            state.count--;
        },
        power(state, payload) {
            state.count = state.count ** payload;
        }
    },
    actions: {
        asyncIncrease(ctx) {
            setTimeout(() => {
                ctx.commit('increase');
            }, 1000);
        },
        asyncDecrease(ctx) {
            setTimeout(() => {
                ctx.commit('decrease');
            }, 1000);
        },
        asyncPower(ctx, payload) {
            setTimeout(() => {
                ctx.commit('power', payload);
            }, 1000)
        }
    }
})

// window.store = store;
export default store;