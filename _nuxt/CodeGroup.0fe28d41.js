import o from"./TabsHeader.db748865.js";import{a as v,a7 as c,x as u}from"./entry.7757ff9b.js";const _=(t,r)=>t.type&&t.type.tag&&t.type.tag===r,b=v({data(){return{activeTabIndex:0,counter:0}},render(){var d,p;const t=((p=(d=this.$slots)==null?void 0:d.default)==null?void 0:p.call(d))||[],r=t.map((e,i)=>{var a,n,s;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((n=e==null?void 0:e.props)==null?void 0:n.label)||`${i}`,active:((s=e==null?void 0:e.props)==null?void 0:s.active)||!1,component:e}});return c("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[c(o,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:r,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),c("div",{class:"code-group-content",text:this.activeTabIndex},t.map((e,i)=>{var a,n;return c("div",{style:{display:i===this.activeTabIndex?"block":"none"},class:{"":!_(e,"code")}},[_(e,"code")?e:c("div",{class:{"preview-canvas":!0}},[((n=(a=e.children)==null?void 0:a.default)==null?void 0:n.call(a))||e.children])])}))])}});const m=u(b,[["__scopeId","data-v-577cdd71"]]);export{m as default};
