import{a as b,S as I,i as y}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();async function m(o,r,a){const t="https://pixabay.com/api/",s="48820344-d1ffc058fda0b82549bb04a16";try{return(await b.get(t,{params:{key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:a}})).data}catch(e){throw console.error("Error fetching data:",e),e}}const S=new I(".images-gallery .gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,className:"gallery-popup"});function M(){return y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"white",iconColor:"white",iconUrl:"../img/group.svg",progressBar:!0,timeout:1e4,animateInside:!1,messageSize:"16",transitionIn:"fadeIn",class:"error"})}function q(){return y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#000",iconColor:"#000",progressBar:!0,timeout:1e4,animateInside:!1,messageSize:"16",transitionIn:"fadeIn"})}function f(o,r){const a=o.map(t=>`<li class="gallery-item">
                 <a href="${t.largeImageURL}" class="gallery-link">
                    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" width="500"/>
                 </a>
                 <ul class="gallery-info">
                    <li class="gallery-likes">
                        <span class="title">Likes</span>
                        <span class="content">${t.likes}</span>
                    </li>
                    <li class="gallery-views">
                        <span class="title">Views</span>
                        <span class="content">${t.views}</span>
                    </li>
                    <li class="gallery-comments">
                        <span class="title">Comments</span>
                        <span class="content">${t.comments}</span>
                    </li>
                    <li class="gallery-downloads">
                        <span class="title">Downloads</span>
                        <span class="content">${t.downloads}</span>
                    </li>
                 </ul>
              </li>`);r.insertAdjacentHTML("beforeend",a.join("")),S.refresh()}function g(o){o.classList.toggle("show")}window.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".search-form"),r=document.querySelector(".load"),a=document.querySelector(".images-gallery"),t=document.querySelector(".loader"),s=40;let e=1,l="",c=1;function h(i){i.preventDefault();const n=o.elements.search.value;n&&(l=n,r.classList.remove("show"),g(t),a.innerHTML="",e=1,w(n,e,s))}async function w(i,n,d){try{const u=await m(i.trim(),n,d);c=Math.ceil(u.totalHits/d);const p=u.hits;p.length?(f(p,a),r.classList.toggle("show",n<c)):(a.innerHTML="",M(),r.classList.remove("show"))}catch(u){console.log(u)}finally{g(t),o.reset()}}async function L(){if(!(e>=c)){g(t),r.classList.remove("show"),e++;try{const n=(await m(l.trim(),e,s)).hits;f(n,a),r.classList.add("show"),v(),e>=c&&(r.classList.remove("show"),q())}catch(i){console.log(i)}finally{g(t),o.reset()}}}function v(){const i=a.querySelector(".gallery-item");if(i){const n=i.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}}o.addEventListener("submit",h),r.addEventListener("click",L)});
//# sourceMappingURL=index.js.map
