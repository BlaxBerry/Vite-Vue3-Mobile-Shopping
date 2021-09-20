import { Toast } from "vant";
import loading from '../loading/loading'

export default function handleGoodActionBar(router, route, store, props) {

    // methods
    // go to service route
    const goService = () => {
        router.push('/service')
    };

    // go to shop route
    const goShop = () => {
        router.push('/home/search')
    };

    // go to cart route
    const goCart = () => {
        let isSkuShow = store.state.sku.isSkuShow
        // SKU is show ? go cart view, else show SKU
        if (isSkuShow) {
            let goodsId = route.query.id
            let productId = props.productList[0].id
            let number = store.state.sku.amount
            store.dispatch('addToCart', {
                goodsId,
                productId,
                number
            })
            loading()
            router.push('/cart')
            store.commit('closeSku')
        } else {
            store.commit('showSku')
        }
    };

    // click to by now
    const buyNow = () => {
        Toast({
            message: '该功能未开放',
            iconSize: '2rem',
            icon: 'close',
        })
    };


    // return
    return {
        goService,
        goShop,
        goCart,
        buyNow,
    }
}