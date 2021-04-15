import request from './request';

// homepage的页面的请求数据
export const GetHomePageList = () => {
    return request.get('/index/index')
};

// 搜索弹出框 Popup的数据
export const GetSearchPopupData = () => {
    return request.get('/search/index')
};

// propup弹出层的 搜索列表数据
export const GetSearchTipListData = (params) => {
    return request.get('/search/helper', {
        params
        // params: {
        //     keyword: ''
        // }
    })
};

// 搜索弹 搜索结果商品列表
export const GetSearchGoodListData = (params) => {
    return request.get('/goods/list', {
        params
        // params: {
        //     keyword: ''
        // }
    })
};