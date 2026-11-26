(function(){
var d=document,nav=d.getElementById('nav'),menu=d.getElementById('menu'),bg=d.getElementById('burger'),root=d.documentElement;
function sc(){nav.classList.toggle('scrolled',scrollY>20);if(scrollY<240)d.querySelectorAll('.menu a.on').forEach(function(a){a.classList.remove('on')})}sc();addEventListener('scroll',sc,{passive:true});
bg.addEventListener('click',function(){var o=menu.classList.toggle('open');bg.setAttribute('aria-expanded',String(o))});
menu.addEventListener('click',function(e){if(e.target.closest('a')){menu.classList.remove('open');bg.setAttribute('aria-expanded','false')}});
var K='nbi-theme';try{var s=localStorage.getItem(K);if(s==='light'||s==='dark')root.setAttribute('data-theme',s)}catch(e){}
d.getElementById('theme').addEventListener('click',function(){var dk=root.getAttribute('data-theme')==='dark'||(root.getAttribute('data-theme')==='auto'&&matchMedia('(prefers-color-scheme: dark)').matches),n=dk?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem(K,n)}catch(e){}});
d.getElementById('yr').textContent=new Date().getFullYear();
var links=[].slice.call(d.querySelectorAll('.menu a')),secs=links.map(function(a){try{return d.querySelector(a.getAttribute('href'))}catch(e){return null}});
if('IntersectionObserver' in window){
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});secs.forEach(function(s){s&&so.observe(s)});
var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}})},{threshold:.12});d.querySelectorAll('.reveal').forEach(function(x){ro.observe(x)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,t=+el.getAttribute('data-n'),pre=el.getAttribute('data-pre')||'',t0=performance.now();if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;(function f(n){var k=Math.min(1,(n-t0)/1400),v=Math.round(t*(1-Math.pow(1-k,3)));el.textContent=pre+v.toLocaleString('id-ID');if(k<1)requestAnimationFrame(f)})(t0)})},{threshold:.6});d.querySelectorAll('[data-n]').forEach(function(x){co.observe(x)});
}else{d.querySelectorAll('.reveal').forEach(function(x){x.classList.add('in')})}
})();

(function(){var d=document,m=d.getElementById('vm'),b=d.getElementById('vbody');
var h=d.querySelector('.hbg');if(h&&h.dataset.src&&!matchMedia('(prefers-reduced-motion: reduce)').matches){h.src=h.dataset.src;h.addEventListener('canplay',function(){h.classList.add('on');h.play()['catch'](function(){})})}
m.addEventListener('close',function(){b.textContent=''});
d.getElementById('vx').addEventListener('click',function(){m.close()});
m.addEventListener('click',function(e){if(e.target===m)m.close()});
d.addEventListener('click',function(e){var t=e.target.closest('[data-video]');if(!t)return;b.textContent='';var el;
if(t.dataset.yt){el=d.createElement('iframe');el.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(t.dataset.yt)+'?autoplay=1&rel=0';el.title=t.dataset.title;el.allow='autoplay; encrypted-media; picture-in-picture';el.allowFullscreen=true}
else if(t.dataset.mp4){el=d.createElement('video');el.src=t.dataset.mp4;el.controls=true;el.autoplay=true;el.playsInline=true}
else{el=d.createElement('p');el.className='vsoon';el.textContent=t.dataset.title+' — video segera hadir.'}
b.appendChild(el);m.showModal()});})();


(function(){var d=document,tb=[].slice.call(d.querySelectorAll('.ptabs button')),rw=[].slice.call(d.querySelectorAll('.prow')),C={A:'Paket 3 Hari · Pengenalan Metode Nurul Bayan',B:'Paket 4 Hari · Pengenalan Mendalam',C:'Paket 4 Hari · Metode dan Cara Pengajaran',D:'Paket 7 Hari · Pelatihan Lengkap'};
function sel(k){var t=0;tb.forEach(function(b){b.setAttribute('aria-selected',String(b.dataset.k===k))});rw.forEach(function(r){var on=r.dataset.in.indexOf(k)>-1;r.classList.toggle('off',!on);if(on)t+=+r.dataset.p});d.getElementById('pcap').textContent=C[k];d.getElementById('ptot').textContent='Rp '+t.toLocaleString('id-ID')}
tb.forEach(function(b){b.addEventListener('click',function(){sel(b.dataset.k)})});sel('D')})();

(function(){var d=document,H=d.getElementById('v-home'),D=d.getElementById('v-dauroh'),T=d.title,DI=['dauroh','apa','paket','harga','ketentuan','daftar'];
function go(){var h=decodeURIComponent(location.hash.slice(1)),dv=DI.indexOf(h)>-1;H.hidden=dv;D.hidden=!dv;d.title=dv?'Dauroh Metode Nurul Bayan — Nurul Bayan Indonesia':T;
var t=h&&d.getElementById(h);if(t&&h!=='dauroh')t.scrollIntoView();else scrollTo(0,0)}
addEventListener('hashchange',go);go()})();
