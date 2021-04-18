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

// 搜索结果商品列表
export const GetSearchGoodListData = (params) => {
    return request.get('/goods/list', { params })
};

// 清除历史记录
export const ClearHistoryData = () => {
    return request.post('/search/clearhistory')
};

//登陆请求
export const GoLogin = (params) => {
    return request.post('/auth/loginByWeb', params)
};

// 搜索商品详情明细
export const GetGoodDetailData = (params) => {
    return request.get('/goods/detail', { params })
};

// 相关商品推荐列表
export const RelatedGoodListData = (params) => {
    return request.get('/goods/related', { params })
};

// 获取购物车商品数量
export const GetCartGoodsCount = () => {
    return request.get('/cart/goodscount')
};

// 加入购物车
export const AddToCart = (params) => {
    return request.post('/cart/add', params)
};

// 获取购物车列表数据
export const GetCartListData = () => {
    return request.get('/cart/index')
};