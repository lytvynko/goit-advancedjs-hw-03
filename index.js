import{a as m,S as d,i}from"./assets/vendor-CqoLp5UU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const g="58303341-638c410ebb1bf44bb21757c0a",y="https://pixabay.com/api/";function h(o){return m.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(o){const r=o.map(({webformatURL:l,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:p})=>`<li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img
          class="gallery-image"
          src="${l}"
          alt="${A(e)}"
          loading="lazy"
        />
      </a>
      <ul class="info">
        <li class="info-item">
          <p class="info-label">Likes</p>
          <p class="info-value">${t}</p>
        </li>
        <li class="info-item">
          <p class="info-label">Views</p>
          <p class="info-value">${s}</p>
        </li>
        <li class="info-item">
          <p class="info-label">Comments</p>
          <p class="info-value">${u}</p>
        </li>
        <li class="info-item">
          <p class="info-label">Downloads</p>
          <p class="info-value">${p}</p>
        </li>
      </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function S(){f.classList.add("is-visible")}function q(){f.classList.remove("is-visible")}function A(o){return String(o).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const P=document.querySelector(".form"),n={position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",progressBar:!1,close:!0,timeout:4e3,maxWidth:432};P.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){i.error({...n,message:"Please enter a search query!"});return}v(),S(),h(r).then(l=>{if(l.hits.length===0){i.error({...n,message:"Sorry, there are no images matching your search query. Please try again!"});return}L(l.hits)}).catch(()=>{i.error({...n,message:"Something went wrong. Please try again later!"})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
