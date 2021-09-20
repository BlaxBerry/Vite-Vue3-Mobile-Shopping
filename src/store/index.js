import { createStore } from 'vuex'
import Login from '../api/user/userLogin'
import pic from '../assets/images/avatar.png'
import getTabBarCartAmount from '../api/cart/getTabBarCartAmount'
import addGoodToCart from '../api/cart/addGoodToCart'

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
        // user login popup show
        isShowUserLoginPopup: false,

        // user info
        user: {
            avatar: pic,
            gender: '',
            id: '',
            nickname: '请先登陆',
            username: ''
        },

        // Sku
        sku: {
            isSkuShow: false,
            amount: 1
        },

        // cart
        cart: {
            cartAmount: 0
        }
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
        },
        // show user login popup
        showUserLoginPopup(state) {
            state.isShowUserLoginPopup = true
        },
        // close user login popup
        closeUserLoginPopup(state) {
            state.isShowUserLoginPopup = false
        },
        // save user info login
        saveUserInfo(state, params) {
            let data = params.userInfo
            // 1. save as common state in vuex
            state.user.avatar = data.avatar
            state.user.gender = data.gender
            state.user.id = data.id
            state.user.nickname = data.nickname
            state.user.username = data.username
            state.user.token = params.token
            // 2. save the user info in localStorage
            let user = JSON.stringify(state.user)
            localStorage.setItem('user', user)
        },

        // show sku in detail
        showSku(state) {
            state.sku.isSkuShow = true
        },
        // close sku in detail
        closeSku(state) {
            state.sku.isSkuShow = false
        },
        // change Sku amount
        changeSku(state, params) {
            let { amount, goodsId } = params
            state.sku.amount = amount
            state.sku.goodsId = goodsId
        },

        // change Cart
        changeCartAmount(state, params) {
            state.cart.cartAmount = params
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
        },
    },

    actions: {
        // get user login info
        getUserInfo(context, params) {
            // axios get login info
            Login(params).then(res => {
                // console.log(res);
                if (res.errno == 0) {
                    context.commit('saveUserInfo', res.data)
                    context.commit("closeUserLoginPopup");
                }
            })
        },
        // get tabbar Cart number
        getCartAmount(context) {
            getTabBarCartAmount().then((res) => {
                let cartAmount = res.data.cartTotal.goodsCount;
                context.commit('changeCartAmount', cartAmount)
            });
        },
        // add to cart
        addToCart(context, params) {
            let { goodsId, productId, number } = params
            addGoodToCart({
                goodsId,
                productId,
                number
            }).then(res => {
                // console.log(res.data);
                let amount = res.data.cartTotal.goodsCount
                context.commit('changeCartAmount', amount)
            })
        }
    },

    modules: {
    }
})