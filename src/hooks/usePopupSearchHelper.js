// api
import { reactive } from "vue";
import GetHelper from "../api/popup/getPopupSearchHelper";

export default async function usePopupSearchHelper(keyword) {

    // data
    const Lists = reactive({
        keyword
    })

    // method
    const res = await GetHelper()
    console.log(res);

    // return
    return {
        Lists
    }
}