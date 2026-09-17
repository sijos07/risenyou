const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuButton){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);});}
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));

/* Hero image carousel: auto-rotates every 2 seconds */
(function(){
  const slides=document.querySelectorAll('.hero-slide');
  const dots=document.querySelectorAll('.slide-dots .dot');
  const label=document.querySelector('.card-label');
  const noteTitle=document.querySelector('.class-note strong');
  const noteSub=document.querySelector('.class-note small');
  if(!slides.length)return;
  let i=0;
  function show(n){
    slides.forEach((s,idx)=>s.classList.toggle('active',idx===n));
    dots.forEach((d,idx)=>d.classList.toggle('active',idx===n));
    const s=slides[n];
    if(label&&s.dataset.label)label.textContent=s.dataset.label;
    if(noteTitle&&s.dataset.title)noteTitle.textContent=s.dataset.title;
    if(noteSub&&s.dataset.sub)noteSub.textContent=s.dataset.sub;
    i=n;
  }
  let timer=setInterval(()=>show((i+1)%slides.length),2000);
  dots.forEach((d,idx)=>d.addEventListener('click',()=>{
    clearInterval(timer);
    show(idx);
    timer=setInterval(()=>show((i+1)%slides.length),2000);
  }));
})();
