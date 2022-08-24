import{s as h}from"./service.b55ec95b.js";import{_ as u,G as p,r as l,o as r,c as _,w as f,a as d,b as c,t as i,e as n}from"./index.373ac319.js";const m={name:"Healthchecks",mixins:[h],props:{item:Object},components:{Generic:p},data:()=>({api:null}),computed:{up:function(){var e;return this.api?(e=this.api.checks)==null?void 0:e.filter(t=>t.status.toLowerCase()==="up").length:""},down:function(){var e;return this.api?(e=this.api.checks)==null?void 0:e.filter(t=>t.status.toLowerCase()==="down").length:""},grace:function(){var e;return this.api?(e=this.api.checks)==null?void 0:e.filter(t=>t.status.toLowerCase()==="grace").length:""}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){if(!this.item.apikey){console.error("apikey is not present in config.yml for the Healthchecks entry!");return}const t={"X-Api-Key":this.item.apikey};this.api=await this.fetch("/api/v1/checks/",{headers:t}).catch(a=>{console.error(a)})}}},k={class:"notifs"},y={key:0,class:"notif up",title:"Up"},g={key:1,class:"notif down",title:"Down"},w={key:2,class:"notif grace",title:"Grace"};function v(e,t,a,x,C,s){const o=l("Generic");return r(),_(o,{item:a.item},{indicator:f(()=>[d("div",k,[s.up>0?(r(),c("strong",y,i(s.up),1)):n("",!0),s.down>0?(r(),c("strong",g,i(s.down),1)):n("",!0),s.grace>0?(r(),c("strong",w,i(s.grace),1)):n("",!0)])]),_:1},8,["item"])}var H=u(m,[["render",v],["__scopeId","data-v-3e71cb9f"]]);export{H as default};
