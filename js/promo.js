/* Logika iklan/webinar. Isi iklan ada di js/promo-config.js — jangan edit file ini untuk ganti info. */
(function(){
var P=window.NBI_PROMO,d=document;if(!P||!P.aktif)return;
var now=Date.now(),t0=Date.parse(P.tampilMulai),t1=Date.parse(P.tampilSampai);
if((t0&&now<t0)||(t1&&now>=t1))return;
var ev=Date.parse(P.mulaiAcara),evEnd=Date.parse(P.selesaiAcara);
function esc(x){var e=d.createElement('div');e.textContent=x;return e.innerHTML}
var img=d.querySelector('.tav img'),photo=img?'<div class="pphoto"><img src="'+img.src+'" alt="Foto '+esc(P.pembicara)+'"></div>':'';
var meta=(P.info||[]).map(function(i){return '<span>'+esc(i)+'</span>'}).join('');
var acts='<a class="btn btn-w" href="'+esc(P.link)+'" target="_blank" rel="noopener">'+esc(P.tombol)+'</a>'+(P.link2?'<a class="btn btn-g" href="'+esc(P.link2)+'" target="_blank" rel="noopener">'+esc(P.tombol2)+'</a>':'');
function body(h,popup){return '<div class="ptag"><i class="pdot"></i>'+esc(P.label)+'</div>'+
 '<'+h+'>'+esc(P.judul)+'</'+h+'>'+
 '<p class="psub">'+esc(P.judulKecil)+'</p>'+
 '<p class="pspk"><b>'+esc(P.pembicara)+'</b><br>'+esc(P.deskripsi)+'</p>'+
 '<div class="pmeta">'+meta+'</div>'+
 '<div class="pstat" data-pstat></div>'+
 '<div class="pcd" data-pcd hidden></div>'+
 '<div class="pact">'+acts+'</div>'+
 (popup?'':'<p class="pnote">'+esc(P.catatan||'')+'</p>')}
var sec=d.createElement('section');sec.className='promo';sec.id='webinar';
sec.innerHTML='<div class="wrap"><div class="pbox reveal">'+photo+'<div class="pinfo">'+body('h2',false)+'</div></div></div>';
var anchor=d.getElementById('video');anchor.parentNode.insertBefore(sec,anchor);
var m=d.getElementById('menu'),a=d.createElement('a');a.href='#webinar';a.className='promo-link';a.textContent=P.menu||'Webinar';m.insertBefore(a,m.firstChild);
var dlg=null;
if(P.popup){dlg=d.createElement('dialog');dlg.className='pm';dlg.setAttribute('aria-label',P.judul);
 dlg.innerHTML='<div class="pbox"><button type="button" class="pmx" aria-label="Tutup">\u00d7</button>'+photo+body('h3',true)+'</div>';
 d.body.appendChild(dlg);
 dlg.querySelector('.pmx').addEventListener('click',function(){dlg.close()});
 dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
 var K='nbi-promo-seen',seen=false;try{seen=sessionStorage.getItem(K)==='1'}catch(e){}
 if(!seen)setTimeout(function(){try{dlg.showModal();sessionStorage.setItem(K,'1')}catch(e){}},1800)}
function tick(){var n=Date.now(),txt='',cd=null;
 if(evEnd&&n>=evEnd){txt='Acara telah selesai. Terima kasih.'}
 else if(ev&&n>=ev){txt='\u25cf Sedang berlangsung. Segera gabung!'}
 else if(ev){var s=Math.floor((ev-n)/1000),D=Math.floor(s/86400),H=Math.floor(s%86400/3600),M=Math.floor(s%3600/60),S=s%60;
  cd=[[D,'Hari'],[H,'Jam'],[M,'Menit'],[S,'Detik']].map(function(x){return '<div><b>'+String(x[0]).padStart(2,'0')+'</b><small>'+x[1]+'</small></div>'}).join('');
  txt='Dimulai dalam:'}
 d.querySelectorAll('[data-pstat]').forEach(function(e){e.textContent=txt});
 d.querySelectorAll('[data-pcd]').forEach(function(e){if(cd){e.innerHTML=cd;e.hidden=false}else e.hidden=true});
 if(t1&&n>=t1){sec.hidden=true;a.hidden=true;if(dlg&&dlg.open)dlg.close()}}
tick();setInterval(tick,1000);
})();
