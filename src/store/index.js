import { createStore } from 'vuex'

export default createStore({
    state: {
        // popup search input value
        searchValue: '',
        // popup search result
        searchResult: {
            list: [],
            menu: [],
            resPage: 1,
            isEmptyList: true
        },

    },
    mutations: {
        // get popup search input value
        getSearchValue(state, params) {
            state.searchValue = params
        },
        // get popup search result 
        getSearchResult(state, params) {
            state.searchResult = params
            state.searchResult.isEmptyList = state.searchResult.list.length == 0 ? true : false
        }
    },
    getters: {
        // search result list
        list: (state) => {
            return state.searchResult.list
        },
        // search result list is empty?
        isEmptyList: (state) => {
            return state.searchResult.isEmptyList
        },
        // search result menu items
        menu: (state) => {
            return state.searchResult.menu
        },
        // search result current page
        currentPage: (state) => {
            return state.searchResult.resPage
        }
    },
    actions: {
    },
    modules: {
    }
})