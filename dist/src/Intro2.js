import{_ as m,o as f,a as i,b as _,c as u,d as c,e as r,w as x,F as p,u as g,h as a}from"./index.js";const T={setup(){const s=g();f(()=>{scroll(0,0);let t=s.state.teamName;const e=document.getElementById("instructions"),o=document.getElementById("continue");t=="red"&&(e.innerHTML=n("intro_text_red_2")),t=="blue"&&(e.innerHTML=n("intro_text_blue_2")),t=="green"&&(e.innerHTML=n("intro_text_green_2")),o.innerHTML=n("continue_text_2")});function n(t){for(let e=0;e<i.oneoffs.length;e++){const o=i.oneoffs[e];if(o.id===t)return o.text}return"NO TEXT FOUND"}}},h={class:"bg"},N=c("p",{id:"instructions",class:"text"}," Introduction text ",-1),L=c("div",{id:"continue",class:"text-button horizontal-center"}," Next ",-1);function b(s,n,t,e,o,I){const d=a("RouterLink"),l=a("RouterView");return _(),u(p,null,[c("div",h,[N,r(d,{to:"/gamescreen",id:"gamescreen"},{default:x(()=>[L]),_:1})]),r(l)],64)}const B=m(T,[["render",b]]),$={__name:"Intro2",setup(s){return(n,t)=>(_(),u("main",null,[r(B)]))}};export{$ as default};