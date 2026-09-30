const videos=document.querySelectorAll("video");
videos.forEach(v=>v.addEventListener("error",()=>v.classList.add("video-fallback")));
const reveal=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("show");reveal.unobserve(e.target);}
  });
},{threshold:.12});
document.querySelectorAll("section,.mosaic img,.product-grid figure,.archive-row").forEach(el=>{
  el.classList.add("reveal");reveal.observe(el);
});
