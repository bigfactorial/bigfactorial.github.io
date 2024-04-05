(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <h1>Big Factorial</h1>
  <form id="form">
  <label for="number">Enter a number</label>
  <input id="number"/>
  <input class="submit" type="submit" value="Calculate factorial" />
  </form>
  <div>Result:<br><span id="result"/></div>
`;function l(o){let t=1n;for(;o>1n;)t*=o,o-=1n;return t}document.querySelector("#form").onsubmit=o=>{o.preventDefault();try{let t=BigInt(document.querySelector("#number").value),n=l(t);document.querySelector("#result").innerHTML=n.toString()}catch{document.querySelector("#result").innerHTML="Error"}};
