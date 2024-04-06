import{a as L,S as w,i as d}from"./assets/vendor-550cebad.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function h(o){o=encodeURIComponent(o);const e="42993969-e1e40ca3c1daeface777227d4",a=new URLSearchParams({per_page:m,page:c,key:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await L.get(`https://pixabay.com/api/?${a}&q=${o}`)).data}const N={captionsData:"alt"};let f=new w(".gallery a",N);f.on("show.simplelightbox",function(){});async function g(o){console.log(o);const e=o.hits;(e.length==0||e.length<m)&&(l.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",d.error({title:"Error",message:"No such pictures",position:"topRight"}));const a=e.map(s=>`<li class="gallery-item">
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
      </li>`).join("");v.insertAdjacentHTML("beforeend",a),f.refresh()}const v=document.querySelector("ul.gallery");let i="";const b=document.querySelector("#search-input");let c=1,m=15;const l=document.querySelector("#load-button"),n=document.querySelector("#loader"),y=document.querySelector(".form-inline");y.addEventListener("submit",async o=>{o.preventDefault(),i=b.value.trim(),v.innerHTML="",n.className="loader",l.className="visually-hidden",c=1,m=15;try{if(i){l.className="";const e=await h(i);g(e),n.className="loader visually-hidden",c+=1}}catch(e){l.className="visually-hidden",console.log(e),d.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}y.reset()});l.addEventListener("click",async()=>{n.className="loader";try{if(i){const o=await h(i),e=o.totalHits;if(c>=e)return l.className="visually-hidden",n.className="visually-hidden",d.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});g(o),n.className="loader visually-hidden",c+=1}}catch(o){console.log(o),d.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});const p=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{document.body.scrollTop>30||document.documentElement.scrollTop>30?p.style.display="flex":p.style.display="none"});function E(){window.scrollTo({top:0,behavior:"smooth"})}p.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
