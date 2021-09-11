import { createStore } from 'vuex'

export default createStore({
    state: {
        // popup search result
        searchResult: {
            list: [],
            menu: [],
            resPage: 1,
            isEmptyList: true
        },

    },
    mutations: {
        // get popup search result 
        getSearchResult(state, params) {
            state.searchResult = params
            state.searchResult.isEmptyList = state.searchResult.list.length == 0 ? true : false
        }
    },
    actions: {
    },
    modules: {
    }
})