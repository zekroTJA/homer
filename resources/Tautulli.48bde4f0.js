import{s as c}from"./service.b55ec95b.js";import{_ as n,G as l,r as _,o as s,c as m,w as u,a as d,b as a,t as f,e as r}from"./index.373ac319.js";const h={name:"Tautulli",mixins:[c],props:{item:Object},components:{Generic:l},data:()=>({stats:null,error:!1}),computed:{streams:function(){return this.stats?this.stats.stream_count:""}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){try{const t=await this.fetch(`/api/v2?apikey=${this.item.apikey}&cmd=get_activity`);this.error=!1,this.stats=t.response.data}catch(t){this.error=!0,console.error(t)}}}},p={class:"notifs"},v=["title"],y={key:1,class:"notif error fa-solid fa-triangle-exclamation",title:"Unable to fetch current status"};function k(t,g,i,x,b,e){const o=_("Generic");return s(),m(o,{item:i.item},{indicator:u(()=>[d("div",p,[e.streams>0?(s(),a("strong",{key:0,class:"notif playing",title:`${e.streams} active stream${e.streams>1?"s":""}`},f(e.streams),9,v)):r("",!0),t.error?(s(),a("i",y)):r("",!0)])]),_:1},8,["item"])}var w=n(h,[["render",k],["__scopeId","data-v-bb960972"]]);export{w as default};
