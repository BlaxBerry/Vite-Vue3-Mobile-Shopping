import{_ as t}from"./NavBer.118e659f.js";import{D as e,r as a,b as o,g as n,a8 as l,F as s,o as r,d as i,w as c,e as u,ah as d,ab as p,p as m,a as b,f,a5 as h,a9 as v,a7 as g}from"./vendor.ee1905bb.js";import{l as x}from"./loading.88b8f828.js";import{_ as S}from"./Empty.ba2facb9.js";/* empty css              */import{i as k}from"./index.88486c6e.js";const _={props:["list"],setup(t){let o=a(!1),n=a(1);return x(),{deleteGood:()=>{e.confirm({title:"确定要删除吗 ？",theme:"round-button",confirmButtonText:"删除",cancelButtonText:"取消"}).then((()=>{console.log("删除"),x()})).catch((()=>{}))},isShowStepper:o,stepperVal:n,showStepper:()=>o.value=!0,closeStepper:()=>o.value=!1}}};_.render=function(t,e,a,p,m,b){const f=o("van-stepper"),h=o("van-button"),v=o("van-card"),g=o("van-swipe-cell");return r(!0),n(s,null,l(a.list,(t=>(r(),i(g,{key:t.id},{right:c((()=>[u(h,{square:"",text:"删除",color:"linear-gradient(to right, #ff6034, #ee0a24)",class:"button",onClick:p.deleteGood},null,8,["onClick"]),u(h,{square:"",text:"编辑",type:"success",class:"button",onClick:p.showStepper},null,8,["onClick"]),u(h,{square:"",icon:"shop",type:"primary",class:"button",to:"/detail?id="+t.goods_id},null,8,["to"])])),default:c((()=>[u(v,{num:t.number,price:" "+Number(t.retail_price).toFixed(2)+" 元",desc:"暂无描述信息",title:t.goods_name,class:"goods-card",thumb:t.list_pic_url},d({_:2},[p.isShowStepper?{name:"footer",fn:c((()=>[u(f,{modelValue:p.stepperVal,"onUpdate:modelValue":e[0]||(e[0]=t=>p.stepperVal=t),"disable-input":"",theme:"round","button-size":"30"},null,8,["modelValue"]),u(h,{type:"primary",round:"",size:"small",text:"确认",onClick:p.closeStepper},null,8,["onClick"])]))}:void 0]),1032,["num","price","title","thumb"])])),_:2},1024)))),128)};const y={setup:()=>({checked:a(!0),onSubmit:()=>{e.confirm({title:"确定提交购买订单 ？",message:"该项目是架空APP，并不会真正购买。\n只是走流程而已，放心吧^_^",theme:"round-button",confirmButtonText:"提交",cancelButtonText:"取消"}).then((()=>{p.loading({message:"提交中",forbidClick:!0,loadingType:"spinner",iconSize:"1.5rem"})})).catch((()=>{}))}})};m("data-v-6dbd3f3c");const C=f("全选");b(),y.render=function(t,e,a,n,l,s){const d=o("van-checkbox"),p=o("van-submit-bar");return r(),i(p,{price:3050,"button-text":"提交订单",onSubmit:n.onSubmit},{default:c((()=>[u(d,{modelValue:n.checked,"onUpdate:modelValue":e[0]||(e[0]=t=>n.checked=t)},{default:c((()=>[C])),_:1},8,["modelValue"])])),_:1},8,["onSubmit"])},y.__scopeId="data-v-6dbd3f3c";function V(){const t=h({list:[],total:{}});return(async()=>{let e=await k({method:"GET",url:"/cart/index"});if(0==e.errno){let{cartList:a,cartTotal:o}=e.data;t.list=a,t.total=o}console.log(t)})(),t}const w={components:{Nav:t,Cards:_,Empty:S,SubmitBar:y},setup:()=>({cartDetail:V()})},B={id:"cart"};w.render=function(t,e,a,l,c,d){const p=o("Nav"),m=o("van-notice-bar"),b=o("Cards"),f=o("Empty"),h=o("SubmitBar");return r(),n(s,null,[u(p),v("div",B,[u(m,{"left-icon":"question-o",text:"向左滑动商品卡片，检查更多内容"}),l.cartDetail.list.length?(r(),i(b,{key:0,list:l.cartDetail.list},null,8,["list"])):g("",!0),l.cartDetail.list.length?g("",!0):(r(),i(f,{key:1}))]),u(h)],64)};export{w as default};
