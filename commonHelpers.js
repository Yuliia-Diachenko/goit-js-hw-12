import{a as L,i as c,S as N}from"./assets/vendor-550cebad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();async function f(o){o=encodeURIComponent(o);const s="42993969-e1e40ca3c1daeface777227d4",r=new URLSearchParams({per_page:v,page:d,key:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await L.get(`https://pixabay.com/api/?${r}&q=${o}`)).data}async function g(o){console.log(o);const s=o.hits;s.length==0&&(a.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",c.error({title:"Error",message:"No such pictures",position:"topRight"}));const r=s.map(e=>`<li class="gallery-item">
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
      </li>`).join("");p.insertAdjacentHTML("beforeend",r);const n={captionsData:"alt"};let t=new N(".gallery a",n);t.on("show.simplelightbox",function(){}),t.refresh()}const p=document.querySelector("ul.gallery");let i="";const y=document.querySelector("#search-input");let d=1,v=15;const a=document.querySelector("#load-button"),l=document.querySelector("#loader");y.addEventListener("input",o=>{i=y.value.trim(),p.innerHTML="",a.className="visually-hidden",l.className="visually-hidden"});const h=document.querySelector(".form-inline");h.addEventListener("submit",async o=>{o.preventDefault(),p.innerHTML="",l.className="loader",d=1,v=15;try{if(i){a.className="";const s=await f(i);g(s),l.className="loader visually-hidden",d+=1}}catch(s){a.className="visually-hidden",console.log(s),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}h.reset()});a.addEventListener("click",async()=>{l.className="loader";try{if(i){const o=await f(i),s=o.totalHits;if(document.querySelectorAll(".gallery-item").length>=s)return a.className="visually-hidden",l.className="visually-hidden",c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});g(o),l.className="loader visually-hidden",d+=1}}catch(o){console.log(o),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});const m=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?m.style.display="flex":m.style.display="none"});function w(){window.scrollTo({top:0,behavior:"smooth"})}m.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
