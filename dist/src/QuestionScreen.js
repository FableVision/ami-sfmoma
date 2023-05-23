import{_ as q,r as k,o as b,a as c,b as g,c as f,d as s,e as _,F as y,u as C,h as L,f as v}from"./index.js";const w={setup(){const t=C(),o=v();let l=k(void 0),n=0;b(()=>{r(0),p(),m(),document.getElementById("input-field").value="",n=0});function m(){let e="";c.questions[t.state.question].icon.toLowerCase()==="cylinder"&&(t.state.progress[t.state.question]==1?e="station_icon01_complete":e="station_icon01"),c.questions[t.state.question].icon.toLowerCase()==="gem"&&(t.state.progress[t.state.question]==1?e="station_icon02_complete":e="station_icon02"),c.questions[t.state.question].icon.toLowerCase()==="prism"&&(t.state.progress[t.state.question]==1?e="station_icon03_complete":e="station_icon03"),l.value=e}function p(){let e=t.state.question;const i=document.getElementById("question-text");let a=c.questions[e];t.state.teamName.toLowerCase()==="red"&&(i.innerHTML=a.redtext),t.state.teamName.toLowerCase()==="blue"&&(i.innerHTML=a.bluetext),t.state.teamName.toLowerCase()==="green"&&(i.innerHTML=a.greentext);const u=document.getElementById("span1"),x=document.getElementById("span2");u.innerHTML=a.location,x.innerHTML=a.task}function d(){o.push("/gamescreen")}function r(e){const i=document.getElementById("attempts-text");i.innerHTML="Enter coordinates ("+e+"/3) attempts"}function h(){n++;const e=t.state.question;let i=c.questions[e];const a=i.answer!=null,u=document.getElementById("input-field").value.trim();!a||u.toLowerCase()===i.answer.trim().toLowerCase()?(t.state.progress[e]==0&&t.commit("setQuestionState",{questionState:"correct"}),t.commit("setCompleted",{questionIndex:e}),o.push("/gamescreen")):(document.getElementById("attempts-text"),r(n),n==3&&(t.state.progress[e]==0&&t.commit("setQuestionState",{questionState:"incorrect"}),t.commit("setCompleted",{questionIndex:e}),o.push("/gamescreen")))}return{back:d,submit:h,icon:l}}},I={id:"icon",class:"eight-icon"},j=["src"],T=s("span",{id:"span1",class:"span1"},"Floor 3",-1),B=s("br",null,null,-1),E=s("span",{id:"span2",class:"light span2"},"Other text",-1),H={class:"bg stack-parent",style:{"padding-top":"100px","pointer-events":"none"}},M=s("div",{id:"question-text",class:"paragraph item"}," Here goes the text sdfg sdfg sdfg sdfgdsfgjhsdlfjghljksdfg sdfgjhksdfglkjshdfglkjsdhfglkjshdfkgl sdfkghjlsdfkgjhslkjdfghslkjfdhgkjdl ",-1),S=s("div",{id:"attempts-text",class:"paragraph light-blue",style:{"font-size":"20pt","padding-top":"10px"}}," Enter coordinates (0/3) attempts ",-1),N=s("input",{id:"input-field",type:"text",class:"text-button item",style:{"pointer-events":"all"},placeholder:"Response..."},null,-1);function Q(t,o,l,n,m,p){const d=L("RouterView");return g(),f(y,null,[s("div",I,[s("img",{class:"eight-image",src:`/src/assets/png/${n.icon}.png`},null,8,j),T,B,E]),s("div",{class:"text-button",onClick:o[0]||(o[0]=(...r)=>n.back&&n.back(...r)),style:{float:"right","margin-top":"35px","margin-right":"10px"}}," Back "),s("div",H,[M,S,N,s("div",{class:"text-button item",onClick:o[1]||(o[1]=(...r)=>n.submit&&n.submit(...r)),style:{"pointer-events":"all"}}," Submit ")]),_(d)],64)}const R=q(w,[["render",Q]]),F={__name:"QuestionScreen",setup(t){return(o,l)=>(g(),f("main",null,[_(R)]))}};export{F as default};