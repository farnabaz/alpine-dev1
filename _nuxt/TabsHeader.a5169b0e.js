import{a as b,r as l,Y as m,o as a,i as s,F as v,K as x,k as u,l as g,U as y,j as k,t as I,s as T,v as S,ac as C,x as $}from"./entry.3c7bf9bf.js";const U=t=>(T("data-v-11acbdc3"),t=t(),S(),t),w={class:"tabs-header"},B=["onClick"],H=U(()=>u("span",{class:"tab"},null,-1)),N=[H],q=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,n=l(),r=l(),c=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},h=(e,i)=>{_("update:activeTabIndex",i),C(()=>c(e.target))};return m(n,e=>{e&&setTimeout(()=>{c(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,i)=>(a(),s("div",w,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,x(t.tabs,({label:d},o)=>(a(),s("button",{key:`${o}${d}`,class:k([t.activeTabIndex===o?"active":"not-active"]),onClick:f=>h(f,o)},I(d),11,B))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},N,512)],512)):g("",!0),y(e.$slots,"footer",{},void 0,!0)]))}});const L=$(q,[["__scopeId","data-v-11acbdc3"]]);export{L as default};