import{u as m}from"./asyncData.2c154984.js";import{I as c,M as a,d as i,a7 as u,r as l,a5 as e,l as d}from"./entry.4f1b9bea.js";import f from"./Ellipsis.62fb90d9.js";import _ from"./ComponentPlaygroundData.99f5adf8.js";import"./TabsHeader.11cf3672.js";import"./ComponentPlaygroundProps.d5661f91.js";import"./ProseH4.093f7f9e.js";import"./ProseCodeInline.2c19d296.js";import"./Badge.4d039e50.js";import"./ContentSlot.6a69d900.js";import"./ProseP.9dd062cc.js";import"./index.fb98954c.js";import"./ComponentPlaygroundSlots.vue.7daa4997.js";import"./ComponentPlaygroundTokens.vue.8cb2cdb3.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return a(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=a(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,p])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=p}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-ffdff82a"]]);export{V as default};