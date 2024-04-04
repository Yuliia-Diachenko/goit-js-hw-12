import{a as L,S as w,i as c}from"./assets/vendor-550cebad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();async function y(t){t=encodeURIComponent(t);const o="42993969-e1e40ca3c1daeface777227d4",l=new URLSearchParams({per_page:v,page:d,key:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await L.get(`https://pixabay.com/api/?${l}&q=${t}`)).data}const N={captionsData:"alt"};let h=new w(".gallery a",N);h.on("show.simplelightbox",function(){});async function f(t){console.log(t);const o=t.hits;o.length==0&&(a.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",c.error({title:"Error",message:"No such pictures",position:"topRight"}));const l=o.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img
            class="gallery-image"            
            src="${s.webformatURL}"
            data-source="${s.largeImageURL}"
            alt="${s.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${s.likes}</p>
          </li>
          <li><h3>Views</h3><p>${s.views}</p>
            </li>
            <li><h3>Comments</h3><p>${s.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${s.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",l),h.refresh()}const g=document.querySelector("ul.gallery");let n="";const b=document.querySelector("#search-input");let d=1,v=15;const a=document.querySelector("#load-button"),i=document.querySelector("#loader"),p=document.querySelector(".form-inline");p.addEventListener("submit",async t=>{t.preventDefault(),n=b.value.trim(),g.innerHTML="",i.className="loader",a.className="visually-hidden",d=1,v=15;try{if(n){a.className="";const o=await y(n);f(o),i.className="loader visually-hidden",d+=1}}catch(o){a.className="visually-hidden",console.log(o),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}p.reset()});a.addEventListener("click",async()=>{i.className="loader";try{if(n){const t=await y(n),o=t.totalHits;if(document.querySelectorAll(".gallery-item").length>=o)return a.className="visually-hidden",i.className="visually-hidden",c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});f(t),i.className="loader visually-hidden",d+=1}}catch(t){console.log(t),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});const m=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?m.style.display="flex":m.style.display="none"});function E(){window.scrollTo({top:0,behavior:"smooth"})}m.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
