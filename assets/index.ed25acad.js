import{u as e,a5 as o,c as t,b as n,d as a,w as c,o as s,e as i,aa as l,a7 as r,ab as u,a6 as p,g as d,a8 as m,F as g,r as f,a9 as k,f as v,p as x,a as w,ac as h}from"./vendor.ee1905bb.js";/* empty css              */const b={emits:["onShowLoginPopup"],setup(){const n=e();let a=o({}),c=JSON.parse(localStorage.getItem("user"));a=c||t((()=>n.state.user));return{user:a,showLoginPopup:()=>{c||n.commit("showUserLoginPopup")}}}};function S(){u({message:"开发中...",icon:"smile-o"})}b.render=function(e,o,t,u,p,d){const m=n("van-image"),g=n("van-col"),f=n("van-button"),k=n("van-row");return s(),a(k,{justify:"space-between"},{default:c((()=>[i(g,{span:"6"},{default:c((()=>[i(m,{round:"",src:u.user.avatar},null,8,["src"])])),_:1}),i(g,{span:u.user.token?"18":"12",textContent:l(u.user.nickname)},null,8,["span","textContent"]),u.user.token?r("",!0):(s(),a(g,{key:0,span:"6"},{default:c((()=>[i(f,{type:"primary",color:"linear-gradient(to right, #ff6034, #ee0a24)",textContent:l("Login"),"is-link":"",round:"",onClick:u.showLoginPopup},null,8,["textContent","onClick"])])),_:1}))])),_:1})},b.__scopeId="data-v-0f49b65c";function y(){u({icon:"/Vite-Vue3-Mobile-Shopping/tree/git-page/assets/wechatQR.97cd359f.png",iconSize:"2.3rem",overlay:!0})}function C(e){return[{text:"My",icon:"user-circle-o",to:"/user/info"},{text:"Orders",icon:"orders-o",to:"/orders"},{text:"Location",icon:"location-o",to:"/user/locations"},{text:"Coupons",icon:"coupon-o",to:"/coupons"},{text:"Service",icon:"service",to:"/service"},{text:"Wechat QR",icon:"wechat",click:y},{text:"Developing",icon:"lock",click:S},{text:"Developing",icon:"lock",click:S},{text:"Developing",icon:"lock",click:S},{text:"Developing",icon:"lock",click:S},{text:"Logout",icon:"close",click:()=>{!function(e){JSON.parse(localStorage.getItem("user"))?(localStorage.removeItem("user"),e.go(0)):u.fail("请先登陆")}(e)}},{text:"Developing",icon:"lock",click:S},{text:"Developing",icon:"lock",click:S},{text:"Developing",icon:"lock",click:S},{text:"Developing",icon:"lock",click:S}]}const _={setup:()=>({GridArray:C(p())})};_.render=function(e,o,t,i,l,r){const u=n("van-grid-item"),p=n("van-grid");return s(),a(p,{"column-num":3},{default:c((()=>[(s(!0),d(g,null,m(i.GridArray,(e=>(s(),a(u,{key:e,icon:e.icon,text:e.text,onClick:e.click,to:e.to?e.to:""},null,8,["icon","text","onClick","to"])))),128))])),_:1})},_.__scopeId="data-v-4c6479c2";const P={setup(){const t=e(),n=f("wuyanzu"),a=f("123456789");o({});return{username:n,password:a,onSubmit:e=>{t.dispatch("getUserInfo",e)}}}},L={style:{margin:"16px"}},I=v(" 提交 ");P.render=function(e,o,t,l,r,u){const p=n("van-field"),d=n("van-cell-group"),m=n("van-button"),g=n("van-form");return s(),a(g,{onSubmit:l.onSubmit},{default:c((()=>[i(d,{inset:""},{default:c((()=>[i(p,{modelValue:l.username,"onUpdate:modelValue":o[0]||(o[0]=e=>l.username=e),name:"username",label:"用户名",placeholder:"用户名","left-icon":"manager",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),i(p,{modelValue:l.password,"onUpdate:modelValue":o[1]||(o[1]=e=>l.password=e),type:"password",name:"pwd",label:"密码",placeholder:"密码","left-icon":"lock",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),k("div",L,[i(m,{round:"",block:"",color:"linear-gradient(to right, #ff6034, #ee0a24)","native-type":"submit"},{default:c((()=>[I])),_:1})])])),_:1},8,["onSubmit"])};const D={components:{LoginForm:P},setup(){const o=e();return{isShowPopup:t((()=>o.state.isShowUserLoginPopup)),closePopup:()=>{o.commit("closeUserLoginPopup")}}}};x("data-v-a0f7717e");const V=["textContent"];w(),D.render=function(e,o,t,r,u,p){const d=n("LoginForm"),m=n("van-popup");return s(),a(m,{show:r.isShowPopup,"onUpdate:show":o[0]||(o[0]=e=>r.isShowPopup=e),onClickCloseIcon:r.closePopup,round:"",closeable:"","close-icon":"close",style:h({width:"90%",padding:"1rem 0 0.5rem"})},{default:c((()=>[k("h2",{class:"title",textContent:l("用户登陆 / 注册")},null,8,V),i(d)])),_:1},8,["show","onClickCloseIcon","style"])},D.__scopeId="data-v-a0f7717e";const U={components:{Top:b,Grid:_,Popup:D}},G={id:"user"};U.render=function(e,o,t,a,c,l){const r=n("Top"),u=n("Grid"),p=n("Popup");return s(),d("div",G,[i(r),i(u),i(p)])};export{U as default};
