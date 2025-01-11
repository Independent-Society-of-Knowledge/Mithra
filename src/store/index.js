import { createStore } from 'vuex';

export default createStore({
    state: {
        textContent: '',
    },
    mutations: {
        updateTextContent(state, payload) {
            state.textContent = payload;
        },
    },
    getters: {
        getTextContent: (state) => state.textContent,
    },
});