import{S as f,i as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function p(i){n.innerHTML="";const t=c.map(r=>`<li class="img-blok">
        <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}"
             data-source="${r.largeImageURL}"
             alt="${r.tags}">   
        <ul class="image-descript">
            <li>
                <h3>likes</h3>
                <p>${r.likes}</p>
            </li>
            <li>
                <h3>views</h3>
                <p>${r.views}</p>
            </li>
            <li>
                <h3>comments</h3>
                <p>${r.comments}</p>
            </li>
            <li>
                <h3>downloads</h3>
                <p>${r.downloads}</p>
            </li>
        </ul>
        </a>
    </li>`).join("");n.insertAdjacentHTML("beforeend",t),new f(".gallery a",{captionsData:"alt"}).refresh()}function y(){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"42993969-e1e40ca3c1daeface777227d4",q:d,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const n=document.querySelector("ul.gallery");let c,d;const g=document.querySelector("input");document.querySelector("button");const u=document.querySelector("form"),h=document.querySelector(".preloader"),L=()=>{h.style.display="flex"},w=()=>{h.style.display="none"},m=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=m;u.addEventListener("submit",async i=>{i.preventDefault(),d=g.value.trim(),d.length||(l.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),n.innerHTML=""),L();try{const t=await y();c=t.hits,c.length||l.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p(t)}catch{l.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{w(),m()}u.reset()});
//# sourceMappingURL=commonHelpers.js.map
