import{S as b,i as a,a as F}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&y(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function y(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m=document.querySelector(".form"),u=document.querySelector(".gallery"),i=document.querySelector(".loader"),l=document.querySelector(".more"),w=new b(".gallery-link");let n=1,p=15;l.style.display="none";i.style.display="none";const c={key:"42129451-ab1d1e3d1abd6a79c6499a83d",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p};m.addEventListener("submit",async o=>{o.preventDefault(),n=1,l.style.display="none",u.innerHTML="";const s=m.elements.search.value.trim();if(s===""){a.show({message:"Please write search image",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}else{i.style.display="inline-block",c.q=s,c.page=n;try{const e=await g();e.totalHits===0?(a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}),i.style.display="none"):(h(e),e.totalHits<p?f():l.style.display="block")}catch(e){a.show({message:`Sorry, ${e}`,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})}}m.reset()});l.addEventListener("click",async()=>{n+=1,c.page=n,i.style.display="inline-block";try{const o=await g();h(o),v(),p*n>o.totalHits&&f()}catch(o){a.show({message:`Sorry, ${o}`,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"bottomCenter"})}});async function g(){const o=new URLSearchParams(c);return(await F.get(`https://pixabay.com/api/?${o}`)).data}function h(o){const s=o.hits.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}" >
      <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
        width = "360"
      />
    </a>
    <div class="img-text">
      <div class="img-info">
        <h3>Likes</h3>
        <p> ${e.likes}</p>
      </div>
      <div class="img-info">
        <h3>Views</h3>
        <p> ${e.views}</p>
      </div>
      <div class="img-info">
        <h3>Comments</h3>
        <p> ${e.comments}</p>
      </div>
      <div class="img-info">
        <h3>Downloads</h3>
        <p> ${e.downloads}</p>
      </div>
    </div>
  </li>`).join("");u.insertAdjacentHTML("beforeend",s),w.refresh(),i.style.display="none"}function f(){a.show({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#1DB8F5",position:"topRight"}),l.style.display="none",i.style.display="none"}function v(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
