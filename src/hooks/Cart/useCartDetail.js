// api
import { reactive } from "vue";
import getCartDetail from "../../api/cart/getCartDetail";

export default function useCartDetail() {

    // data
    const cartDetail = reactive({
        list: [],
        total: {

        }
    })

    // methods
    const getDetail = async () => {
        let res = await getCartDetail()
        if (res.errno == 0) {
            let { cartList, cartTotal } = res.data
            cartDetail.list = cartList
            cartDetail.total = cartTotal
        }
        console.log(cartDetail);
    }
    getDetail()

    // return
    return cartDetail
}