import{_ as a}from"./NavBer.118e659f.js";import{b as t,g as e,a8 as s,F as n,o as l,e as o,w as r,a9 as i,aa as c,f as u,r as p,a5 as g,a7 as d}from"./vendor.ee1905bb.js";import{i as m}from"./index.c002ec33.js";import{l as v}from"./loading.88b8f828.js";/* empty css              */const P={props:["list"],setup(a){}},f=u("加载失败"),b={class:"title"},h={class:"subtitle"};P.render=function(a,u,p,g,d,m){const v=t("van-loading"),P=t("van-image");return l(!0),e(n,null,s(p.list,(a=>(l(),e("div",{class:"card",key:a.id},[o(P,{"lazy-load":"",src:a.scene_pic_url},{loading:r((()=>[o(v,{type:"spinner"})])),error:r((()=>[f])),_:2},1032,["src"]),i("h3",b,c(a.title),1),i("p",h,c(a.subtitle),1)])))),128)};function j(a,t){(async()=>{let e=await(s={page:t.toString(),size:"10"},m({method:"GET",url:"/topic/list",params:s}));var s;if(0==e.errno){let{data:t}=e;a.list=t.data,a.currnetPage=t.currentPage,a.totalPage=t.totalPages}})(),v()}const y={components:{Nav:a,Cards:P},setup(){const a=p(1);let t=g({list:[],totalPage:0,currnetPage:a.value});j(t,a.value);return v(),{currentPage:a,changPage:()=>{j(t,a.value)},topList:t}}},x={key:0,class:"main-block",id:"topic"};y.render=function(a,s,r,i,c,u){const p=t("Nav"),g=t("van-notice-bar"),m=t("Cards"),v=t("van-pagination");return l(),e(n,null,[o(p),i.topList.list.length?(l(),e("div",x,[o(g,{"left-icon":"volume-o",scrollable:"",text:"因为该项目是架空APP，导致各个商品话题为固定假数据，所以无法点击话题查看内容。"}),o(m,{list:i.topList.list},null,8,["list"]),o(v,{modelValue:i.currentPage,"onUpdate:modelValue":s[0]||(s[0]=a=>i.currentPage=a),"page-count":i.topList.totalPage,mode:"simple",onChange:i.changPage},null,8,["modelValue","page-count","onChange"])])):d("",!0)],64)};export{y as default};
