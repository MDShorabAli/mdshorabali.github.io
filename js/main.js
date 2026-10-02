(function(){var r=document.documentElement,b=document.getElementById('theme'),s=null;
try{s=localStorage.getItem('theme')}catch(e){}
if(!s&&window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)s='dark';
function set(m){r.setAttribute('data-theme',m);b.textContent=m==='dark'?'Light':'Dark';try{localStorage.setItem('theme',m)}catch(e){}}
set(s||'light');b.addEventListener('click',function(){set(r.getAttribute('data-theme')==='dark'?'light':'dark')});
document.getElementById('year').textContent=new Date().getFullYear();})();
