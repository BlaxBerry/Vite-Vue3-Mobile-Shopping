import{a5 as t,b as e,d as o,w as n,o as s,g as i,a8 as l,e as a,f as r,aa as u,F as c,a9 as d,a7 as p,p as m,a as f,u as g,ad as h,c as k,r as b,ab as C,a6 as v}from"./vendor.ee1905bb.js";import{i as x}from"./index.88486c6e.js";import{_ as y}from"./Swiper.207ff6bc.js";import{_ as w}from"./Divider.e5223367.js";import{_ as S}from"./PropductCard.aa016d3e.js";/* empty css              */import{l as _}from"./loading.88b8f828.js";function D(e){let o=t({gallery:[],info:{},attribute:[],issue:[],recommend:[],isShowDetail:!1});const n=async()=>{let t=await(o={id:e},x({method:"GET",url:"/goods/related",params:o}));var o;if(0==t.errno){return t.data.goodsList}};return(async()=>{let t=await(s={id:e},x({method:"GET",url:"/goods/detail",params:s}));var s;let i=t.data;if(0==t.errno){o.isShowDetail=!0,o.gallery=i.gallery,o.info=i.info,o.attribute=i.attribute,o.issue=i.issue,o.comment=i.comment,o.productList=i.productList,o.specificationList=i.specificationList,o.hasCollected=i.hasCollected;let t=await n();o.recommend=t}else o.isShowDetail=!1})(),{goodsDetail:o}}const L={setup:()=>({Tips:["30天无忧退货","48小时快速退费","满88元免邮费"]})};L.render=function(t,d,p,m,f,g){const h=e("van-icon"),k=e("van-col"),b=e("van-row");return s(),o(b,{gutter:"20",justify:"space-around"},{default:n((()=>[(s(!0),i(c,null,l(m.Tips,(t=>(s(),o(k,{span:"8",key:t},{default:n((()=>[a(h,{name:"checked",color:"green"}),r(" "+u(t),1)])),_:2},1024)))),128))])),_:1})};const V={props:["info","attribute"],setup(t){}},T={class:"home-block"},I=["textContent"],j=["textContent"],q=["textContent"];V.render=function(t,e,o,n,l,a){return s(),i("div",T,[d("h3",{class:"title",textContent:u(o.info.name)},null,8,I),d("p",{class:"desc",textContent:u(o.info.goods_brief)},null,8,j),o.info.retail_price?(s(),i("p",{key:0,class:"price",textContent:u("¥ "+Number(o.info.retail_price).toFixed(2)+" 元")},null,8,q)):p("",!0)])};const N={props:["info","stepperVal"],setup(t){}};m("data-v-eb738126");const F=["textContent"],G=d("b",null,"名称:",-1),z=d("b",null,"单价:",-1),M=d("b",null,"库存:",-1);f(),N.render=function(t,i,l,r,c,p){const m=e("van-image"),f=e("van-col"),g=e("van-row");return s(),o(g,{class:"top-info"},{default:n((()=>[a(f,{span:"8"},{default:n((()=>[a(m,{width:"3rem",height:"3rem","lazy-load":"",src:l.info.list_pic_url},null,8,["src"])])),_:1}),a(f,{span:"16"},{default:n((()=>[d("h3",{class:"price",textContent:u("¥ "+(l.info.retail_price*l.stepperVal).toFixed(2))},null,8,F),a(g,null,{default:n((()=>[a(f,{span:"4"},{default:n((()=>[G])),_:1}),a(f,{span:"18",class:"data-msg",textContent:u(l.info.name)},null,8,["textContent"])])),_:1}),a(g,null,{default:n((()=>[a(f,{span:"4"},{default:n((()=>[z])),_:1}),a(f,{span:"18",class:"data-msg",textContent:u("¥ "+Number(l.info.retail_price).toFixed(2)+" 元")},null,8,["textContent"])])),_:1}),a(g,null,{default:n((()=>[a(f,{span:"4"},{default:n((()=>[M])),_:1}),a(f,{span:"18",class:"data-msg",textContent:u(Number(l.info.goods_number-l.stepperVal)+" "+l.info.goods_unit)},null,8,["textContent"])])),_:1})])),_:1})])),_:1})},N.__scopeId="data-v-eb738126";const P={props:["info","attribute"],components:{Top:N},setup(t){const e=g(),o=h();let n=k((()=>e.state.sku.isSkuShow));const s=b(1);return{show:n,showPopup:()=>{e.commit("showSku")},closeSku:()=>{e.commit("closeSku")},stepperVal:s,changStepper:()=>{let t={goodsId:o.query.id,amount:s.value};e.commit("changeSku",t)}}}},A={class:"bottom-content"},B=r(" 数量： "),E={key:0,class:"attribute"},H=["textContent"];P.render=function(t,r,m,f,g,h){const k=e("van-cell"),b=e("Top"),C=e("van-stepper"),v=e("van-col"),x=e("van-row"),y=e("van-popup");return s(),i(c,null,[a(k,{title:"展示商品详情",icon:"shop-o","is-link":"",onClick:f.showPopup},null,8,["onClick"]),a(y,{show:f.show,"onUpdate:show":r[1]||(r[1]=t=>f.show=t),position:"bottom",closeable:"",round:"",class:"sku",onClickOverlay:f.closeSku,onClickCloseIcon:f.closeSku},{default:n((()=>[a(b,{info:m.info,stepperVal:f.stepperVal},null,8,["info","stepperVal"]),d("div",A,[B,a(C,{modelValue:f.stepperVal,"onUpdate:modelValue":r[0]||(r[0]=t=>f.stepperVal=t),modelModifiers:{number:!0},integer:"","input-width":"2rem",onChange:f.changStepper},null,8,["modelValue","onChange"])]),m.attribute.length?(s(),i("div",E,[d("h4",{textContent:u("商品参数")},null,8,H),(s(!0),i(c,null,l(m.attribute,(t=>(s(),o(x,{key:t},{default:n((()=>[a(v,{span:"5",textContent:u(t.name),class:"name"},null,8,["textContent"]),a(v,{span:"19",textContent:u(t.value),class:"value"},null,8,["textContent"])])),_:2},1024)))),128))])):p("",!0)])),_:1},8,["show","onClickOverlay","onClickCloseIcon"])],64)};const O={props:["issue"],components:{Divider:w},setup(t){}},R={class:"issue"},U=["textContent"];O.render=function(t,o,n,p,m,f){const g=e("Divider"),h=e("van-icon");return s(),i("div",R,[a(g,{text:"常见问题"}),d("ul",null,[(s(!0),i(c,null,l(n.issue,(t=>(s(),i("li",{key:t.id},[d("h3",null,[a(h,{name:"question"}),r(" "+u(t.question),1)]),d("p",{textContent:u(t.answer)},null,8,U)])))),128))])])};const J={props:["list"],components:{Divider:w,Cards:S},setup(){}};J.render=function(t,o,n,l,r,u){const d=e("Divider"),p=e("Cards");return s(),i(c,null,[a(d,{text:"相关商品"}),a(p,{list:n.list},null,8,["list"])],64)};const K={props:["productList"],setup(t){const e=v(),o=h(),n=g();let{goService:s,goShop:i,goCart:l,buyNow:a}=function(t,e,o,n){return{goService:()=>{t.push("/service")},goShop:()=>{t.push("/home/search")},goCart:()=>{if(o.state.sku.isSkuShow){let s=e.query.id,i=n.productList[0].id,l=o.state.sku.amount;o.dispatch("addToCart",{goodsId:s,productId:i,number:l}),_(),t.push("/cart"),o.commit("closeSku")}else o.commit("showSku")},buyNow:()=>{C({message:"该功能未开放",iconSize:"2rem",icon:"close"})}}}(e,o,n,t);return{icons:[{icon:"chat-o",text:"Serve",click:s},{icon:"shop-o",text:"Shop",click:i}],btns:[{type:"warning",text:"加入购物车",click:l},{type:"danger",text:"立刻购买",click:a}]}}};K.render=function(t,a,r,u,d,p){const m=e("van-action-bar-icon"),f=e("van-action-bar-button"),g=e("van-action-bar");return s(),o(g,{class:"detail-action-bar"},{default:n((()=>[(s(!0),i(c,null,l(u.icons,(t=>(s(),o(m,{key:t,icon:t.icon,text:t.text,color:"#ee0a24",onClick:t.click},null,8,["icon","text","onClick"])))),128)),(s(!0),i(c,null,l(u.btns,(t=>(s(),o(f,{key:t,type:t.type,text:t.text,onClick:t.click},null,8,["type","text","onClick"])))),128))])),_:1})};const Q={components:{Swiper:y,Tips:L,Info:V,Sku:P,Issue:O,Recommend:J,GoodActionBar:K},setup(){let t=h().query.id,{goodsDetail:e}=D(t);return _(),{goodsDetail:e}}},W={id:"detail"},X=["innerHTML"];Q.render=function(t,n,l,r,u,c){const m=e("Swiper"),f=e("van-image"),g=e("Tips"),h=e("Info"),k=e("Sku"),b=e("Issue"),C=e("Recommend"),v=e("GoodActionBar");return s(),i("div",W,[r.goodsDetail.gallery.length?(s(),o(m,{key:0,list:r.goodsDetail.gallery},null,8,["list"])):p("",!0),!r.goodsDetail.gallery.length&&r.goodsDetail.info.primary_pic_url?(s(),o(f,{key:1,"lazy-load":"",src:r.goodsDetail.info.primary_pic_url},null,8,["src"])):p("",!0),r.goodsDetail.isShowDetail?(s(),o(g,{key:2})):p("",!0),r.goodsDetail.isShowDetail?(s(),o(h,{key:3,info:r.goodsDetail.info,attribute:r.goodsDetail.attribute},null,8,["info","attribute"])):p("",!0),a(k,{info:r.goodsDetail.info,attribute:r.goodsDetail.attribute},null,8,["info","attribute"]),d("div",{innerHTML:r.goodsDetail.info.goods_desc},null,8,X),r.goodsDetail.isShowDetail?(s(),o(b,{key:4,issue:r.goodsDetail.issue},null,8,["issue"])):p("",!0),r.goodsDetail.isShowDetail?(s(),o(C,{key:5,list:r.goodsDetail.recommend},null,8,["list"])):p("",!0),a(v,{productList:r.goodsDetail.productList},null,8,["productList"])])};export{Q as default};
