/* Membuat tab & kartu video dari js/videos.js. Tidak perlu diedit. */
(function(){
var d=document,D=window.NBI_VIDEOS,tabsEl=d.getElementById('vtabs'),pan=d.getElementById('vpanels');
if(!tabsEl||!pan)return;
var PLAY='<svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
var list=((D&&D.tab)||[]).map(function(t){
  return {id:t.id,nama:t.nama,tata:t.tata,video:(t.video||[]).filter(function(v){return !v.sembunyi})};
}).filter(function(t){return t.video.length});
if(!list.length){var s=d.getElementById('video');if(s)s.hidden=true;
  d.querySelectorAll('.menu a[href="#video"]').forEach(function(a){a.hidden=true});return}
function card(v){
  var b=d.createElement('button');b.type='button';b.className='vframe';b.setAttribute('data-video','');
  b.dataset.yt=v.yt||'';b.dataset.mp4=v.mp4||'';b.dataset.title=v.judul||'';
  if(v.poster){b.classList.add('has-poster');
    b.style.backgroundImage='linear-gradient(180deg,rgba(0,0,0,.05) 35%,rgba(0,0,0,.45)),url("'+String(v.poster).replace(/"/g,'%22')+'")'}
  var p=d.createElement('span');p.className='vplay';p.innerHTML=PLAY;
  var c=d.createElement('span');c.className='vcap';
  if(v.label){var sm=d.createElement('small');sm.textContent=v.label;c.appendChild(sm)}
  c.appendChild(d.createTextNode(v.judul||''));
  b.appendChild(p);b.appendChild(c);return b}
var btns=[],panels=[];
list.forEach(function(t,i){
  var b=d.createElement('button');b.type='button';b.setAttribute('role','tab');b.textContent=t.nama;
  b.setAttribute('aria-selected',String(i===0));tabsEl.appendChild(b);btns.push(b);
  var p=d.createElement('div');p.className='vpanel';p.id='vp-'+t.id;p.hidden=i!==0;
  var wrap=d.createElement('div');wrap.className=t.tata==='utama'?'vmain':'vgrid';
  t.video.forEach(function(v){wrap.appendChild(card(v))});
  p.appendChild(wrap);pan.appendChild(p);panels.push(p);
  b.addEventListener('click',function(){btns.forEach(function(x,j){x.setAttribute('aria-selected',String(x===b));panels[j].hidden=x!==b})});
});
if(list.length===1)tabsEl.hidden=true;
})();
