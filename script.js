/* ===== products.js — rasm almashtirish: har bir mahsulotga img:"images/nom.jpg" qo‘shing ===== */
const CATS=[["all","Barchasi","🍽"],["fast","Fast Food","🍔"],["milliy","Milliy taomlar","🍚"],["pizza","Pizza","🍕"],["chicken","Chicken","🍗"],["salat","Salatlar","🥗"],["ichimlik","Ichimliklar","🥤"],["shirin","Shirinliklar","🍰"]];
const PRICE={Cheeseburger:49000,Lavash:38000,Donar:40000,"Hot Dog":25000,Nuggets:28000,"Chicken Pizza":72000,"Pepperoni Pizza":75000,"Margarita Pizza":65000,Osh:35000,Manti:32000,Somsa:15000,Mastava:28000,"Sho‘rva":27000,Dimlama:36000,Qozonkabob:45000,Sezar:35000,Achichuk:18000,"Coca-Cola":12000,Pepsi:12000,Fanta:12000,Sprite:12000,Sharbat:15000,Cheesecake:30000,Donut:18000};
const NAMES={Burger:"Classic Burger",Osh:"O‘zbek Palovi","Margarita Pizza":"Margherita","Pepperoni Pizza":"Pepperoni",Fries:"French Fries",Sezar:"Caesar"};
const OLD={Burger:55000,"Pepperoni Pizza":89000,Qozonkabob:55000,Nuggets:34000,Cheesecake:36000,Shashlik:35000};
/* Rasm fayllari: images/ papkasiga shu nomlar bilan joylang */
const IMG={Burger:"burger.jpg",Cheeseburger:"cheeseburger.jpg","Chicken Burger":"chicken-burger.jpg",Lavash:"lavash.jpg",Donar:"donar.jpg","Hot Dog":"hotdog.jpg",Nuggets:"nuggets.jpg",Fries:"fries.jpg","Pepperoni Pizza":"pizza.jpg","Margarita Pizza":"margarita.jpg",Osh:"osh.jpg",Manti:"manti.jpg",Somsa:"somsa.jpg",Shashlik:"shashlik.jpg","Lag‘mon":"lagman.jpg",Mastava:"mastava.jpg","Sho‘rva":"shorva.jpg",Dimlama:"dimlama.jpg",Qozonkabob:"qozonkabob.jpg",Achichuk:"achichuk.jpg",Sezar:"sezar.jpg",Olivier:"olivier.jpg","Sabzavotli salat":"salat.jpg","Coca-Cola":"cola.jpg",Pepsi:"pepsi.jpg",Fanta:"fanta.jpg",Sprite:"sprite.jpg",Sharbat:"sharbat.jpg",Choy:"choy.jpg",Qahva:"qahva.jpg",Suv:"suv.jpg",Tort:"tort.jpg",Cheesecake:"cheesecake.jpg",Muzqaymoq:"muzqaymoq.jpg",Donut:"donut.jpg","Chicken Pizza":"chicken-pizza.jpg"};
const P=[
["Burger","fast",45000,"🍔","Mol go‘shti, pishloq, pomidor va maxsus sous",4.8],
["Cheeseburger","fast",52000,"🧀","Ikki qavat pishloq va yumshoq kotlet",4.7],
["Chicken Burger","chicken",42000,"🍗","Qarsildoq tovuq filesi va yangi salat",4.6],
["Lavash","fast",35000,"🌯","Tovuq go‘shti, sabzavot va sous lavashda",4.7],
["Donar","fast",38000,"🥙","Mol go‘shti donar, bodring va pomidor",4.5],
["Hot Dog","fast",25000,"🌭","Sosiska, qizil piyoz va xantal",4.3],
["Nuggets","chicken",32000,"🍗","9 dona qarsildoq tovuq nuggets",4.6],
["Fries","fast",18000,"🍟","Oltin rangli kartoshka fri",4.5],
["Pepperoni Pizza","pizza",85000,"🍕","Pepperoni, mozzarella va pomidor sousi",4.9],
["Margarita Pizza","pizza",70000,"🍕","Mozzarella, rayhon va pomidor",4.6],
["Osh","milliy",40000,"🍚","An’anaviy Toshkent oshi, mol go‘shti bilan",4.9],
["Manti","milliy",36000,"🥟","Bug‘da pishgan go‘shtli manti (5 dona)",4.8],
["Somsa","milliy",12000,"🥐","Tandirda pishgan go‘shtli somsa",4.8],
["Shashlik","milliy",30000,"🍢","Ko‘mirda pishgan qo‘y go‘shti shashligi",4.9],
["Lag‘mon","milliy",38000,"🍜","Qo‘lda cho‘zilgan lag‘mon va sabzavot",4.7],
["Mastava","milliy",32000,"🍲","Guruchli quyuq sho‘rva",4.5],
["Sho‘rva","milliy",35000,"🥣","Qo‘y go‘shtli to‘yimli sho‘rva",4.6],
["Dimlama","milliy",48000,"🥘","Sabzavot va go‘sht dimlamasi",4.7],
["Qozonkabob","milliy",55000,"🍖","Qozonda qovurilgan go‘sht va kartoshka",4.8],
["Achichuk","salat",15000,"🍅","Pomidor, piyoz va ko‘kat",4.4],
["Sezar","salat",38000,"🥗","Tovuq, kruton, parmezan va sezar sousi",4.7],
["Olivier","salat",25000,"🥔","Klassik olivier salati",4.5],
["Sabzavotli salat","salat",22000,"🥒","Yangi mavsumiy sabzavotlar",4.4],
["Coca-Cola","ichimlik",10000,"🥤","0.5 L sovuq gazli ichimlik",4.5],
["Pepsi","ichimlik",10000,"🥤","0.5 L sovuq gazli ichimlik",4.4],
["Fanta","ichimlik",10000,"🧃","0.5 L apelsin ta’mi",4.4],
["Sprite","ichimlik",10000,"🥤","0.5 L limon-laym ta’mi",4.4],
["Sharbat","ichimlik",14000,"🍹","Tabiiy meva sharbati",4.6],
["Choy","ichimlik",8000,"🍵","Choynak qaynoq ko‘k yoki qora choy",4.6],
["Qahva","ichimlik",18000,"☕","Yangi damlangan qahva",4.5],
["Suv","ichimlik",5000,"💧","0.5 L ichimlik suvi",4.3],
["Tort","shirin",28000,"🍰","Bir bo‘lak shokoladli tort",4.8],
["Cheesecake","shirin",32000,"🍰","Nozik Nyu-York cheesecake",4.8],
["Muzqaymoq","shirin",15000,"🍨","Vanilli muzqaymoq 3 sharik",4.6],
["Donut","shirin",14000,"🍩","Glazurli yumshoq donut",4.5]
,["Chicken Pizza","pizza",78000,"🍕","Tovuq filesi, mozzarella va qo‘ziqorin",4.6]
].map((p,i)=>({id:i,name:NAMES[p[0]]||p[0],cat:p[1],price:PRICE[p[0]]||p[2],emoji:p[3],desc:p[4],rating:p[5],img:IMG[p[0]]?"images/"+IMG[p[0]]:"",old:OLD[p[0]]||0}));

/* ===== util ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const fmt=n=>n.toLocaleString("ru-RU").replace(/\u00a0/g," ")+" so‘m";
const ls={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
function toast(m){const t=document.createElement("div");t.className="toast ok";t.textContent=m;$("#toasts").append(t);setTimeout(()=>t.remove(),2900)}
function openM(id){const e=$("#"+id);e.style.display="block";requestAnimationFrame(()=>e.classList.add("show"))}
function closeM(id){const e=$("#"+id);e.classList.remove("show");setTimeout(()=>e.style.display="none",250)}

/* ===== app.js ===== */
let cat="all",term="",favs=ls.get("ff_favs",[]),MY=ls.get("ff_imgs",{});
$("#cats").innerHTML=CATS.slice(1).map(c=>`<button class="cat" data-c="${c[0]}"><span>${c[2]}</span>${c[1]}</button>`).join("");
$("#chips").innerHTML=CATS.map(c=>`<button class="chip ${c[0]=="all"?"on":""}" data-c="${c[0]}">${c[1]}</button>`).join("");
function setCat(c){cat=c;$$("#chips .chip").forEach(b=>b.classList.toggle("on",b.dataset.c==c));render()}
$("#cats").onclick=e=>{const b=e.target.closest("[data-c]");if(b){setCat(b.dataset.c);$("#menu").scrollIntoView()}};
$("#chips").onclick=e=>{const b=e.target.closest("[data-c]");if(b)setCat(b.dataset.c)};
function render(){
 const t=term.trim().toLowerCase();
 const list=P.filter(p=>(cat=="all"||p.cat==cat)&&(!t||(p.name+" "+p.desc).toLowerCase().includes(t)));
 $("#grid").innerHTML=list.length?list.map(p=>`<div class="card"><div class="pimg"><button class="fav" data-f="${p.id}" aria-label="Sevimli">${favs.includes(p.id)?"❤️":"🤍"}</button>${p.old?`<span class="dis">-${Math.round(100-p.price*100/p.old)}%</span>`:""}<i>${p.emoji}</i>${(MY[p.id]||p.img)?`<img src="${MY[p.id]||p.img}" alt="${p.name}" onerror="this.remove()">`:""}<button class="cam" data-u="${p.id}" title="Rasm yuklash">📷</button></div>
 <div class="pb"><div class="row"><h3>${p.name}</h3><span class="star">★ ${p.rating}</span></div><p>${p.desc}</p><div class="row"><span class="price">${fmt(p.price)}</span>${p.old?`<s class="oldp">${fmt(p.old)}</s>`:""}</div><button class="add" data-a="${p.id}">Savatga qo‘shish</button></div></div>`).join(""):`<div class="empty">😕 Hech qanday mahsulot topilmadi</div>`;
 revObs();
}
$("#grid").onclick=e=>{
 const u=e.target.closest("[data-u]");if(u){pick(+u.dataset.u);return}
 const a=e.target.closest("[data-a]");if(a)addCart(+a.dataset.a);
 const f=e.target.closest("[data-f]");if(f){const id=+f.dataset.f;const had=favs.includes(id);favs=had?favs.filter(x=>x!=id):[...favs,id];ls.set("ff_favs",favs);render();toast(P[id].name+(had?" sevimlilardan olib tashlandi":" sevimlilarga qo‘shildi ♥"))}
};
$("#q").oninput=e=>{term=e.target.value;render();if(term)$("#menu").scrollIntoView()};
$("#bSearch").onclick=()=>{$("#sbar").classList.toggle("open");if($("#sbar").classList.contains("open"))setTimeout(()=>$("#q").focus(),200);else{term="";$("#q").value="";render()}};
$("#burger").onclick=()=>$("#nav").classList.toggle("open");
$("#nav").onclick=e=>{if(e.target.tagName=="A")$("#nav").classList.remove("open")};
$$("[data-soc]").forEach(a=>a.onclick=e=>{e.preventDefault();toast("Demo: havola mavjud emas")});
$$("[data-close]").forEach(b=>b.onclick=()=>b.dataset.close=="drawer"?$("#drawer").classList.remove("open"):closeM(b.dataset.close));
$$(".ov").forEach(o=>o.onclick=e=>{if(e.target==o)closeM(o.id)});
document.onkeydown=e=>{if(e.key=="Escape"){$$(".ov.show").forEach(o=>closeM(o.id));$("#drawer").classList.remove("open")}};
/* theme */
function theme(t){document.documentElement.dataset.theme=t;$("#bTheme").textContent=t=="dark"?"☀️":"🌙"}
theme(ls.get("ff_theme",matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));
$("#bTheme").onclick=()=>{const t=document.documentElement.dataset.theme=="dark"?"light":"dark";theme(t);ls.set("ff_theme",t)};
/* scroll reveal */
let io;function revObs(){io=io||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});$$(".rev:not(.in)").forEach(el=>io.observe(el))}
/* reviews */
const RV=[["Aziz","Burger juda mazali, kuryer 25 daqiqada yetib keldi!",5],["Madina","Osh xuddi uyda pishirilgandek. Rahmat!",5],["Jasur","Narxlar qulay, xizmat a’lo darajada.",4]];
$("#rvt").innerHTML=RV.map(r=>`<div class="rvc"><div class="av">${r[0][0]}</div><b>${r[0]}</b><div class="star">${"★".repeat(r[2])}${"☆".repeat(5-r[2])}</div><p>${r[1]}</p></div>`).join("");
$("#dots").innerHTML=RV.map((_,i)=>`<button data-i="${i}"></button>`).join("");
let ri=0;function slide(i){ri=i;$("#rvt").style.transform=`translateX(-${i*100}%)`;$$("#dots button").forEach((d,j)=>d.classList.toggle("on",j==i))}
$("#dots").onclick=e=>{if(e.target.dataset.i)slide(+e.target.dataset.i)};setInterval(()=>slide((ri+1)%RV.length),5000);slide(0);

/* ===== cart.js ===== */
let cart=ls.get("ff_cart",[]);
const FREE=150000,DELIV=15000;
const sub=()=>cart.reduce((s,i)=>s+P[i.id].price*i.q,0);
const delivery=()=>!cart.length||sub()>=FREE?0:DELIV;
function addCart(id){const i=cart.find(x=>x.id==id);i?i.q++:cart.push({id,q:1});saveCart();toast(P[id].name+" savatga qo‘shildi ✓")}
function saveCart(){ls.set("ff_cart",cart);drawCart()}
function drawCart(){
 $("#cnt").textContent=cart.reduce((s,i)=>s+i.q,0);
 $("#cl").innerHTML=cart.length?cart.map(i=>{const p=P[i.id];return `<div class="ci"><div class="e">${p.emoji}</div><div class="i"><b>${p.name}</b><br><small>${fmt(p.price)}</small><div class="q"><button data-m="${i.id}">−</button><b>${i.q}</b><button data-p="${i.id}">+</button></div></div><div><b>${fmt(p.price*i.q)}</b><br><button data-d="${i.id}" title="O‘chirish">🗑</button></div></div>`}).join(""):`<div class="empty">🛒 Savat bo‘sh</div>`;
 const s=sub(),d=delivery();
 $("#cs").innerHTML=`<div class="row"><span>Mahsulotlar jami:</span><b>${fmt(s)}</b></div><div class="row"><span>Yetkazib berish:</span>${cart.length&&!d?`<span class="free">BEPUL!</span>`:`<b>${fmt(d)}</b>`}</div>
 ${cart.length&&d?`<p class="note">Yana ${fmt(FREE-s)} qo‘shsangiz, yetkazib berish BEPUL!</p>`:""}<div class="row" style="margin:8px 0 12px"><b>Umumiy:</b><b class="price">${fmt(s+d)}</b></div><button class="btn full" id="goChk">Buyurtma berish</button>`;
 $("#goChk").onclick=startCheckout;
}
$("#cl").onclick=e=>{const b=e.target.closest("button");if(!b)return;const D=b.dataset,id=+(D.m??D.p??D.d),it=cart.find(x=>x.id==id);
 if(D.p!==undefined)it.q++;else if(D.m!==undefined){it.q--;if(it.q<1)cart=cart.filter(x=>x.id!=id)}else if(D.d!==undefined){cart=cart.filter(x=>x.id!=id);toast(P[id].name+" savatdan o‘chirildi")}saveCart()};
$("#bCart").onclick=()=>$("#drawer").classList.add("open");
$("#hOrder").onclick=()=>$("#menu").scrollIntoView();

/* ===== auth.js — DEMO: backend o‘rniga localStorage (parol ochiq saqlanadi, haqiqiy loyihada ishlatmang) ===== */
let user=ls.get("ff_session",null);
const phoneDigits=v=>{const d=v.replace(/\D/g,"");return d.length==9?d:(d.length==12&&d.startsWith("998")?d.slice(3):null)};
function setErr(f,msg){const w=f.closest(".fld");w.classList.toggle("bad",!!msg);$(".err",w).textContent=msg||""}
function check(form,rules){let ok=true;for(const[n,fn]of Object.entries(rules)){const f=form.elements[n],m=fn(f.value.trim());setErr(f,m);if(m)ok=false}return ok}
function authUI(){$("#bUser").textContent=user?"🙂":"👤"}
$("#bUser").onclick=()=>user?showProfile():openM("mAuth");
$$("[data-tab]").forEach(b=>b.onclick=()=>{$$("[data-tab]").forEach(x=>x.classList.toggle("on",x==b));$("#fLogin").style.display=b.dataset.tab=="login"?"":"none";$("#fReg").style.display=b.dataset.tab=="reg"?"":"none"});
$("#fReg").onsubmit=e=>{e.preventDefault();const f=e.target;const users=ls.get("ff_users",[]);
 const ok=check(f,{name:v=>v.length<2?"Ismingizni kiriting":"",phone:v=>phoneDigits(v)?"":"Telefon noto‘g‘ri (9 raqam)",email:v=>/^\S+@\S+\.\S+$/.test(v)?"":"Email noto‘g‘ri",pw:v=>v.length<6?"Kamida 6 ta belgi":"",pw2:v=>v!=f.pw.value?"Parollar mos emas":""});
 if(!ok)return;const ph=phoneDigits(f.phone.value),em=f.email.value.trim().toLowerCase();
 if(users.some(u=>u.phone==ph||u.email==em)){setErr(f.phone,"Bu telefon yoki email band");return}
 user={name:f.name.value.trim(),phone:ph,email:em,pw:f.pw.value};users.push(user);ls.set("ff_users",users);ls.set("ff_session",user);authUI();closeM("mAuth");f.reset();toast("Xush kelibsiz, "+user.name+"! ✓")};
$("#fLogin").onsubmit=e=>{e.preventDefault();const f=e.target;if(!check(f,{id:v=>v?"":"Telefon yoki email kiriting",pw:v=>v?"":"Parolni kiriting"}))return;
 const v=f.id.value.trim().toLowerCase(),ph=phoneDigits(v);
 const u=ls.get("ff_users",[]).find(u=>(u.email==v||(ph&&u.phone==ph))&&u.pw==f.pw.value);
 if(!u){setErr(f.pw,"Login yoki parol noto‘g‘ri");return}
 user=u;ls.set("ff_session",u);authUI();closeM("mAuth");f.reset();toast("Xush kelibsiz, "+u.name+"! ✓");if(pendingChk){pendingChk=false;startCheckout()}};
const STS=["Qabul qilindi","Tayyorlanmoqda","Yo‘lda","Yetkazildi"];
const status=o=>STS[Math.min(3,Math.floor((Date.now()-o.ts)/60000))]; /* demo: holat vaqt bo‘yicha o‘zgaradi */
function showProfile(){
 const orders=ls.get("ff_orders",[]).filter(o=>o.phone==user.phone).reverse();
 $("#prof").innerHTML=`<h3>👤 Profil</h3><p><b>Ism:</b> ${user.name}<br><b>Telefon:</b> +998 ${user.phone}<br><b>Email:</b> ${user.email}</p>
 <h4 style="margin:14px 0 8px">Buyurtmalar tarixi</h4>${orders.length?orders.map(o=>`<div class="ord"><div class="row"><b>Buyurtma №${o.id}</b><span class="st">${status(o)}</span></div><small>${new Date(o.ts).toLocaleString("uz-UZ")}</small><br>${o.items.map(i=>`${i.n} ×${i.q}`).join(", ")}<br><b>Jami: ${fmt(o.total)}</b></div>`).join(""):`<p class="note">Hozircha buyurtmalar yo‘q</p>`}
 <h4 style="margin:14px 0 8px">Sevimlilar</h4><p>${favs.length?favs.map(i=>P[i].emoji+" "+P[i].name).join(" · "):`<span class="note">Sevimlilar yo‘q</span>`}</p>
 <button class="btn out full" id="logout" style="margin-top:14px">Chiqish</button>`;
 $("#logout").onclick=()=>{user=null;ls.set("ff_session",null);authUI();closeM("mProf");toast("Tizimdan chiqdingiz")};
 openM("mProf")}

/* ===== checkout.js ===== */
let pendingChk=false;
$("#fChk").elements.reg.innerHTML=["Toshkent shahri","Toshkent viloyati","Samarqand","Buxoro","Farg‘ona","Andijon","Namangan","Qashqadaryo","Surxondaryo","Xorazm","Navoiy","Jizzax","Sirdaryo","Qoraqalpog‘iston"].map(r=>`<option>${r}</option>`).join("");
function total(){return sub()+delivery()}
function startCheckout(){
 if(!cart.length){toast("Savat bo‘sh");return}
 if(!user){pendingChk=true;$("#drawer").classList.remove("open");toast("Avval tizimga kiring");openM("mAuth");return}
 const f=$("#fChk");f.name.value=user.name;f.phone.value=user.phone;$("#ctot").textContent=fmt(total());instNote();
 $("#drawer").classList.remove("open");openM("mChk")}
function instNote(){const m=+$("#fChk").mo.value;$("#instn").textContent=`Oyiga taxminan ${fmt(Math.ceil(total()/m))} × ${m} oy`}
$("#fChk").onchange=e=>{if(e.target.name=="pm"){const v=e.target.value;$("#pcash").style.display=v=="cash"?"":"none";$("#pcard").style.display=v=="card"?"":"none";$("#pinst").style.display=v=="inst"?"":"none"}if(e.target.name=="mo")instNote()};
$("#fChk").cn.oninput=e=>e.target.value=e.target.value.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();
$("#fChk").ce.oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,4);e.target.value=v.length>2?v.slice(0,2)+"/"+v.slice(2):v};
$("#fChk").onsubmit=e=>{e.preventDefault();const f=e.target,pm=f.pm.value;
 const req=m=>v=>v?"":m;
 let ok=check(f,{name:v=>v.length<2?"Ismni kiriting":"",phone:v=>phoneDigits(v)?"":"Telefon noto‘g‘ri (9 raqam)",city:req("Shaharni kiriting"),addr:req("Manzilni kiriting"),house:req("Uy raqamini kiriting")});
 if(pm=="card")ok=check(f,{cn:v=>v.replace(/\s/g,"").length==16?"":"Karta raqami 16 ta raqam",ce:v=>{const m=v.match(/^(\d\d)\/(\d\d)$/);return m&&+m[1]>=1&&+m[1]<=12?"":"MM/YY formatida kiriting"},cv:v=>/^\d{3}$/.test(v)?"":"CVV 3 ta raqam",ch:v=>v.length<3?"Karta egasini kiriting":""})&&ok;
 if(!ok)return;
 const orders=ls.get("ff_orders",[]);const id=1000+orders.length+1;
 orders.push({id,ts:Date.now(),phone:user.phone,pm,total:total(),items:cart.map(i=>({n:P[i.id].name,q:i.q}))});ls.set("ff_orders",orders);
 cart=[];saveCart();closeM("mChk");f.reset();toast("Buyurtmangiz qabul qilindi! ✓ №"+id)};

/* haqiqiy rasm yuklash: tanlangan foto brauzer localStorage'ida saqlanadi (demo, backend yo‘q) */
const fi=document.createElement("input");fi.type="file";fi.accept="image/*";let fid=0;
function pick(id){fid=id;fi.value="";fi.click()}
fi.onchange=()=>{const f=fi.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,640/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*s;c.height=im.height*s;c.getContext("2d").drawImage(im,0,0,c.width,c.height);MY[fid]=c.toDataURL("image/jpeg",.8);try{localStorage.setItem("ff_imgs",JSON.stringify(MY))}catch(e){toast("Xotira to‘ldi, kichikroq rasm tanlang")}render();toast("Rasm saqlandi ✓")};im.src=r.result};r.readAsDataURL(f)};
/* navbar sliding indicator */
const ind=$(".nav-indicator"),links=$$("#nav a"),secs=["home","menu","about","delivery","contact"];let act=links[0];
function mv(a){ind.style.left=a.offsetLeft+12+"px";ind.style.width=a.offsetWidth-24+"px";ind.style.top=a.offsetTop+a.offsetHeight-6+"px"}
links.forEach(a=>{a.onmouseenter=a.onfocus=()=>mv(a)});
$("#nav").onmouseleave=()=>mv(act);
function spy(){$("header").classList.toggle("sc",scrollY>10);let i=0,best=-1e9;secs.forEach((s,j)=>{const t=$("#"+s).getBoundingClientRect().top;if(t<=140&&t>best){best=t;i=j}});act=links[i];links.forEach(l=>l.classList.toggle("act",l==act));if(!$("#nav").matches(":hover"))mv(act)}
addEventListener("scroll",spy,{passive:true});addEventListener("resize",spy);
$("#burger").addEventListener("click",()=>setTimeout(spy,350));
authUI();drawCart();render();revObs();spy();