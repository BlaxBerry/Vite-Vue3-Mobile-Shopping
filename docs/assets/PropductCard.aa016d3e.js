import{a6 as a,ad as s,b as e,d as t,w as n,o as l,g as r,a8 as i,e as o,a9 as c,aa as d,F as p,f as u}from"./vendor.ee1905bb.js";const _={props:["list"],setup(e){const t=a();s();return{goDetail:a=>{t.push("/detail?id="+a)}}}},f=u("加载失败"),g=["textContent"],v={class:"price"};_.render=function(a,s,u,_,b,m){const x=e("van-loading"),y=e("van-image"),C=e("van-col"),k=e("van-row");return l(),t(k,{justify:"space-between",class:"card-list"},{default:n((()=>[(l(!0),r(p,null,i(u.list,(a=>(l(),t(C,{span:"11",class:"card",key:a,onClick:s=>_.goDetail(a.id)},{default:n((()=>[o(y,{src:a.list_pic_url,"lazy-load":""},{loading:n((()=>[o(x,{type:"spinner"})])),error:n((()=>[f])),_:2},1032,["src"]),c("p",{class:"card-title",textContent:d(a.name)},null,8,g),c("p",v,d("¥ "+a.retail_price.toFixed(2)+" 元"),1)])),_:2},1032,["onClick"])))),128))])),_:1})};export{_};
