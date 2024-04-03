import{a as v,i as c,S as L}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();async function y(s){s=encodeURIComponent(s);const r="42993969-e1e40ca3c1daeface777227d4",o=new URLSearchParams({per_page:f,page:d,key:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await v.get(`https://pixabay.com/api/?${o}&q=${s}`)).data}async function g(s){console.log(s);const r=s.hits;r.length==0&&(a.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",c.error({title:"Error",message:"No such pictures",position:"topRight"}));const o=r.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"            
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");m.insertAdjacentHTML("beforeend",o);const i={captionsData:"alt"};let t=new L(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const m=document.querySelector("ul.gallery");let n="";const p=document.querySelector("#search-input");let d=1,f=15;const a=document.querySelector("#load-button"),l=document.querySelector("#loader");p.addEventListener("input",s=>{n=p.value.trim(),m.innerHTML="",a.className="visually-hidden",l.className="visually-hidden"});const h=document.querySelector(".form-inline");h.addEventListener("submit",async s=>{s.preventDefault(),m.innerHTML="",l.className="loader",d=1,f=15;try{if(n){a.className="";const r=await y(n);g(r),l.className="loader visually-hidden",d+=1}}catch(r){a.className="visually-hidden",console.log(r),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}h.reset()});a.addEventListener("click",async()=>{l.className="loader";try{if(n){const s=await y(n),r=s.totalHits;if(document.querySelectorAll(".gallery-item").length>=r)return a.className="visually-hidden",l.className="visually-hidden",c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});g(s),l.className="loader visually-hidden",d+=1}}catch(s){console.log(s),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
