// api
import GetPopupKeyWords from "../api/popup/getPopupSearchKeywords";
import { reactive } from "vue";

export default function usePopupSearchKeywords() {
    //data
    let keywordsList = reactive({
        // defaultKeyword: "",
        historyList: [],
        hotList: [],
    });

    // method
    const getPopupSearchKeyWords = async () => {
        const res = await GetPopupKeyWords();
        // keywordsList.defaultKeyword = res.data.defaultKeyword;
        keywordsList.historyList = res.data.historyKeywordList;
        keywordsList.hotList = res.data.hotKeywordList;
        // console.log(keywordsList);
    };
    getPopupSearchKeyWords();

    // return
    return {
        keywordsList
    }
}