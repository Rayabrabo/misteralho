const I={
 "logo": "img/logo.jpg",
 "sucos": "img/sucos.jpg",
 "gorgonzola": "img/gorgonzola.jpg",
 "cherda": "img/cherda.jpg",
 "double": "img/double.jpg",
 "smash": "img/smash.jpg",
 "maminha": "img/maminha.jpg",
 "camarao": "img/camarao.jpg",
 "coracao": "img/coracao.jpg",
 "linguica": "img/linguica.jpg",
 "batata": "img/batata.jpg",
 "refri": "img/refri.jpg"
};
const VID={"maminha":"video/maminha.mp4","camarao":"video/camarao.mp4"};
const PA=(p)=>`Pão de alho de 15 cm, recheado com 100 g de ${p}, blend de queijo e nossa pasta de alho, feita com receita própria. Pão levemente gratinado, para uma casquinha dourada e irresistível.`;
const pao=(id,n,pr,img,top,p)=>({id,cat:'paes',n,pr,img,top,d:'Recheado com 100 g de '+p+', blend de queijo e pasta de alho da casa.',full:PA(p),sp:[['Tamanho','15 cm'],['Proteína','100 g de '+p],['Queijo','Blend de queijo'],['Finalização','Levemente gratinado']]});
const P=[
pao('maminha','Maminha',37.5,'maminha',1,'maminha'),
pao('camarao','Camarão',40,'camarao',1,'camarão'),
pao('coracao','Coração de galinha',35,'coracao',0,'coração de galinha'),
pao('linguica','Linguiça',35,'linguica',0,'linguiça'),
{id:'smash',cat:'smash',n:'Smash',pr:25,img:'smash',top:2,d:'Burger prensado com queijo cheddar derretido em pão brioche especial.',full:'Simples e delicioso! Burger prensado com queijo cheddar derretido em um maravilhoso pão brioche especial.',sp:[['Pão','Brioche'],['Carne','Smash 90 g'],['Queijo','Cheddar']]},
{id:'double',cat:'smash',n:'Double Smash',pr:35,img:'double',d:'Duas carnes smash de 90 g com cheddar derretido no pão brioche.',full:'Duas carnes smash de 90 g cada, combinadas com queijo cheddar derretido e servidas no nosso pão brioche especial.',sp:[['Pão','Brioche'],['Carne','2 smash de 90 g'],['Queijo','Cheddar'],['Peso total','180 g']]},
{id:'cherda',cat:'burger',n:'Cheddar',pr:35,img:'cherda',d:'Carne de 180 g com o dobro de cheddar no brioche tostado com pasta de alho.',full:'Carne bovina de 180 g, com o dobro de queijo cheddar, no pão brioche levemente tostado com nossa pasta de alho da casa.',sp:[['Pão','Brioche'],['Carne','Bovina 180 g'],['Queijo','Cheddar duplo']]},
{id:'gorgonzola',cat:'burger',n:'Gorgonzola',pr:35,img:'gorgonzola',d:'180 g no pão australiano com pasta de alho da casa e gorgonzola.',full:'Hambúrguer de 180 g no pão australiano, com uma leve camada da nossa pasta de alho da casa e finalizado com queijo gorgonzola.',sp:[['Pão','Australiano'],['Carne','Bovina 180 g'],['Queijo','Gorgonzola']]},
{id:'batata',cat:'batata',n:'Batata frita com RUB DA CASA',pr:15,img:'batata',d:'Batata crocante com o RUB DA CASA.',full:'Batata frita crocante, finalizada com o RUB DA CASA para dar aquele toque especial de sabor.',sp:[['Porção','150 g']]},
...['Maracujá','Cupuaçu','Goiaba','Acerola','Abacaxi','Pink Limon'].map(s=>({id:'s'+s,cat:'suco',n:s,pr:10,img:'sucos',pos:'center 78%',txt:1,d:'Suco 300 ml',full:'Suco natural de '+s.toLowerCase()+', 300 ml.',sp:[['Volume','300 ml']]})),
...['Coca-Cola Original','Coca-Cola Zero','Guaraná','Sprite','Fanta'].map(s=>({id:'r'+s,cat:'refri',n:s,pr:8,img:'refri',txt:1,d:'Refrigerante gelado.',full:'Refrigerante '+s+'.',sp:[]}))
];
const FT=x=>"Nosso pão de alho de 15 cm é recheado com generosos 100 g de "+x+", blend de queijos derretidos e nossa irresistível pasta de alho, preparada com a receita exclusiva da casa. Tudo isso envolvido em um pão levemente gratinado, com aquela casquinha dourada e crocante por fora e um recheio cremoso e cheio de sabor por dentro. Uma explosão de sabor que transforma cada mordida em uma experiência irresistível! 🤤🔥";
Object.entries({camarao:"camarões suculentos",maminha:"maminha suculenta",coracao:"corações de galinha suculentos",linguica:"linguiça suculenta"}).forEach(([id,x])=>{P.find(p=>p.id==id).full=FT(x)});
P.push(...P.filter(p=>['paes','smash','burger'].includes(p.cat)).map(p=>({id:'c'+p.id,cat:'combo',n:'Combo '+p.n,pr:p.pr+15+8-3,img:p.img,top:0,d:p.n+' + batata frita + refrigerante.',full:'Um lanche '+p.n+', uma batata frita com RUB DA CASA (150 g) e um refrigerante.',sp:[['Lanche',p.n],['Acompanhamento','Batata 150 g'],['Bebida','Refrigerante']]})));
const C=[['paes','Pães de alho','Nossa categoria principal: todos com 15 cm, 100 g de proteína, blend de queijo, pasta de alho da casa e finalização levemente gratinada.'],['smash','Smash Burgers'],['burger','Hambúrgueres'],['combo','Combos','Lanche + batata frita + refrigerante.'],['batata','Batatas'],['suco','Sucos','Todos com 300 ml, R$ 10,00 cada.',I.sucos,'top'],['refri','Refrigerantes','R$ 8,00 cada.',I.refri]];
const brl=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const $=s=>document.querySelector(s);
const cname=k=>C.find(c=>c[0]==k)[1];
const V=$('#view');
const BACK='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
const TILE={paes:'maminha',smash:'smash',burger:'gorgonzola',combo:'cherda',batata:'batata',suco:'sucos',refri:'refri'};
const TPOS={suco:'center 82%'};
function card(p){return `<a class="card ${p.txt?'txt':''}" href="#/p/${p.id}">${p.top?`<span class="tag">${p.top==2?'Destaque':'Mais pedido'}</span>`:''}${p.txt?'':`<img src="${I[p.img]}" alt="${p.n}" loading="lazy">`}<span class="body"><span class="cat">${cname(p.cat)}</span><h3>${p.n}</h3><p>${p.d}</p><span class="price">${brl(p.pr)}</span></span></a>`}
function home(){
V.innerHTML=`<div class="wrap"><header><img class="logo" src="${I.logo}" alt="Mister Alho — Hambúrgueres artesanais"><h1>Sabor que <em>marca.</em></h1><p class="lead">Sanduíches preparados com nossa receita especial da casa.</p><input class="search" id="q" type="search" placeholder="Buscar no cardápio" aria-label="Buscar produtos por nome"></header>
<div id="cats"><section><h2>Destaques</h2><div class="feat">${P.filter(p=>p.top).map(card).join('')}</div></section>
<section><h2>Categorias</h2><div class="tiles">${C.map(([k,t],i)=>`<a class="tile ${i==0?'big':''}" href="#/c/${k}"><img src="${I[TILE[k]]}" alt="" style="object-position:${TPOS[k]||'center'}"><span><b>${t}</b><small>${P.filter(p=>p.cat==k).length} opções</small></span></a>`).join('')}</div></section></div><div id="res"></div></div>`;
$('#q').oninput=e=>{const q=e.target.value.trim().toLowerCase();const r=P.filter(p=>p.n.toLowerCase().includes(q));
$('#cats').style.display=q?'none':'';
$('#res').innerHTML=q?(r.length?`<section><h2>Resultados</h2><div class="grid">${r.map(card).join('')}</div></section>`:'<p class="empty" style="display:block">Nenhum produto encontrado. Tente outro nome ou limpe a busca.</p>'):''}}
function cat(k){const c=C.find(x=>x[0]==k);
V.innerHTML=`<div class="appbar"><a class="ib" href="#/" aria-label="Voltar ao início">${BACK}</a><h2>${c[1]}</h2></div><div class="chips">${C.map(x=>`<a href="#/c/${x[0]}" class="${x[0]==k?'on':''}">${x[1]}</a>`).join('')}</div><div class="wrap">${c[2]?`<p class="note">${c[2]}</p>`:''}${k=='suco'?`<img class="banner top" src="${I.sucos}" alt="Sucos naturais e refrescantes">`:k=='refri'?`<img class="banner" src="${I.refri}" alt="Refrigerantes">`:''}<div class="grid">${P.filter(p=>p.cat==k).sort((a,b)=>(b.top||0)-(a.top||0)).map(card).join('')}</div></div>`;
const ch=V.querySelector('.chips'),on=ch.querySelector('.on');ch.scrollLeft=on.offsetLeft-24}
const SND='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path class="w" d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
function playVid(){const v=V.querySelector('.vid');if(!v)return;const b=V.querySelector('.snd'),m=V.querySelector('.media');
v.onerror=()=>{v.remove();b.remove()};
v.onended=()=>{v.classList.add('done');b.style.display='none'};
b.onclick=()=>{v.muted=!v.muted;b.classList.toggle('on',!v.muted);b.setAttribute('aria-label',v.muted?'Ligar o som':'Desligar o som')};
m.onclick=e=>{if(e.target===b||b.contains(e.target))return;if(v.classList.contains('done')){v.classList.remove('done');b.style.display='';v.currentTime=0;v.play()}};
const p=v.play();p&&p.catch&&p.catch(()=>{v.remove();b.remove()})}
function prod(id){const p=P.find(x=>x.id==id);if(!p)return home();
V.innerHTML=`<div class="detail"><div class="top"><a class="ib fab" href="#/c/${p.cat}" aria-label="Voltar">${BACK}</a><div class="media"><img class="hero" src="${I[p.img]}" alt="${p.n}" style="${p.pos?'object-position:'+p.pos:''}">${VID[p.id]?`<video class="vid" src="${VID[p.id]}" autoplay muted playsinline preload="auto" aria-label="Vídeo de ${p.n}"></video><button class="snd" type="button" aria-label="Ligar o som">${SND}</button>`:''}</div></div><div class="pad"><span class="pill">${cname(p.cat)}</span><h2>${p.n}</h2><span class="price">${brl(p.pr)}</span>${p.sp.length?`<div class="specs">${p.sp.map(s=>`<div><b>${s[0]}</b>${s[1]}</div>`).join('')}</div>`:''}<h4>Ingredientes e preparo</h4><p class="desc">${p.full}</p><a class="back" href="#/">VOLTAR AO CARDÁPIO</a></div></div>`;playVid()}
function route(){const [,t,id]=(location.hash.slice(1)||'/').split('/');
if(t=='c'&&C.some(x=>x[0]==id))cat(id);else if(t=='p')prod(id);else home();scrollTo(0,0)}
addEventListener('hashchange',route);route();