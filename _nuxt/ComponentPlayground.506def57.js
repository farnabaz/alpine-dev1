import{b as m,u as c,J as a,a as i,af as u,r as l,a7 as n,x as d}from"./entry.3c7bf9bf.js";import{u as f}from"./asyncData.752d8cb8.js";import _ from"./Ellipsis.dccc2edd.js";import y from"./ComponentPlaygroundData.928b4b36.js";import"./TabsHeader.a5169b0e.js";import"./ComponentPlaygroundProps.6fd94a6d.js";import"./ProseH4.ff5f5a36.js";import"./ProseCodeInline.20ca97d6.js";import"./Badge.4becd434.js";import"./ContentSlot.f1e21cdd.js";import"./ProseP.361a32b3.js";import"./index.0509c31a.js";import"./ComponentPlaygroundSlots.vue.32b180c6.js";import"./ComponentPlaygroundTokens.vue.c6aa386d.js";async function g(o){m();const t=c(o);{const{data:e}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return a(()=>e.value)}}const v=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=a(()=>u(o.component)),e=l({...o.props}),r=await g(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,p])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=p}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(_,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(v,[["__scopeId","data-v-ffdff82a"]]);export{V as default};