import { Toast } from "vant";

export default function handleGoodActionBar(router) {

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
        router.push('/cart')
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