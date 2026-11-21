
const T={
IT:{nav_home:"HOME",nav_immobili:"IMMOBILI",nav_chi:"CHI SIAMO",nav_servizi:"SERVIZI",nav_contatto:"CONTATTO",book:"PRENOTA VISITA",book_short:"PRENOTA",kicker:"DOMEX • TRUSTED IN ITALY",hero_title1:"Vivi Splendidamente",hero_title2:"in Italia.",hero_sub:"DOMEX — Appartamenti, ville, dimore e cottage premium. Selezionati, verificati, negoziati in privato per te.",cta1:"VEDI COLLEZIONE →",cta2:"PRENOTA VISITA PRIVATA",v1:"✔ VERIFICATO",v2:"✔ TRATTATIVA PRIVATA",v3:"✔ SUPPORTO LEGALE",coll:"COLLEZIONE • SELEZIONE DOMEX",coll_title:"Collezione in Evidenza",coll_sub:"Sei residenze selezionate. Ogni immobile è visitato, verificato e documentato.",all:"TUTTI",villa:"VILLE",flat:"FLAT",mansion:"MANSION",cottage:"COTTAGE",why_k:"PERCHÉ DOMEX",why_t:"Non vendiamo case.",why_t2:"Vendiamo stile di vita.",why_p:"Visita privata, due diligence completa, negoziazione riservata e accompagnamento legale fino al rogito.",discover:"SCOPRI DOMEX →",services:"I SERVIZI",quote:"“La casa giusta non si trova. Si riconosce.”",details:"Dettagli →",book2:"Prenota",explore:"Esplora la Collezione",explore_sub:"Filtra per tipologia. Clicca su un immobile per vedere i dettagli.",all_imm:"TUTTI GLI IMMOBILI",contact_t:"Parliamone in privato.",contact_sub:"Risposta entro 24 ore. Nessun spam. Solo conversazione riservata.",name:"NOME COMPLETO",email:"EMAIL",interest:"INTERESSE",msg:"MESSAGGIO",send:"INVIA RICHIESTA →",book_t:"Visita Privata.",book_sub:"Scegli immobile e data. Ti confermeremo in privato.",phone:"TELEFONO / WHATSAPP",prop:"IMMOBILE",date:"DATA PREFERITA",book_now:"PRENOTA ORA →",about_k:"CHI SIAMO",about_t:"Una boutique.",about_t2:"Non un'agenzia.",about_p:"DOMEX nasce per clienti che cercano il meglio — senza rumore, senza pressione, senza sorprese.",talk:"PARLA CON NOI →",serv_k:"I NOSTRI SERVIZI",serv_t:"Tutto curato.",serv_t2:"Per voi.",footer_desc:"Boutique immobiliare di lusso. Solo immobili verificati, trattative private, supporto legale completo.",links:"COLLEGAMENTI",contact_h:"CONTATTO",hours:"Orari & Visite",hours_p:"Visite solo su appuntamento. Video-call disponibile per clienti internazionali.",whats:"💬 WhatsApp • Prenota",other:"Altri Immobili",req:"RICHIEDI INFO",concierge:"RICHIEDI CONCIERGE →",concierge_t:"Concierge DOMEX",concierge_p:"Trasloco, arredo, gestione, affitti brevi. Dopo l'acquisto, restiamo al vostro fianco."},
EN:{nav_home:"HOME",nav_immobili:"PROPERTIES",nav_chi:"ABOUT US",nav_servizi:"SERVICES",nav_contatto:"CONTACT",book:"BOOK A VISIT",book_short:"BOOK",kicker:"DOMEX • TRUSTED IN ITALY",hero_title1:"Live Beautifully",hero_title2:"in Italia.",hero_sub:"DOMEX — Premium flats, villas, mansions & cottages. Curated, verified, negotiated privately for you.",cta1:"VIEW COLLECTION →",cta2:"BOOK PRIVATE VISIT",v1:"✔ VERIFIED",v2:"✔ PRIVATE NEGOTIATION",v3:"✔ LEGAL SUPPORT",coll:"COLLECTION • DOMEX SELECTION",coll_title:"Featured Collection",coll_sub:"Six selected residences. Every property is visited, verified and documented.",all:"ALL",villa:"VILLAS",flat:"FLATS",mansion:"MANSIONS",cottage:"COTTAGES",why_k:"WHY DOMEX",why_t:"We don't sell houses.",why_t2:"We sell lifestyle.",why_p:"Private visit, full due diligence, confidential negotiation and legal support until the final deed.",discover:"DISCOVER DOMEX →",services:"SERVICES",quote:"“The right house is not found. It is recognised.”",details:"Details →",book2:"Book",explore:"Explore the Collection",explore_sub:"Filter by type. Click a property to see details.",all_imm:"ALL PROPERTIES",contact_t:"Let's talk in private.",contact_sub:"Reply within 24 hours. No spam. Only private conversation.",name:"FULL NAME",email:"EMAIL",interest:"INTEREST",msg:"MESSAGE",send:"SEND REQUEST →",book_t:"Private Visit.",book_sub:"Choose property and date. We will confirm privately.",phone:"PHONE / WHATSAPP",prop:"PROPERTY",date:"PREFERRED DATE",book_now:"BOOK NOW →",about_k:"ABOUT US",about_t:"A boutique.",about_t2:"Not an agency.",about_p:"DOMEX was born for clients who want the best — no noise, no pressure, no surprises.",talk:"TALK TO US →",serv_k:"OUR SERVICES",serv_t:"Everything cared for.",serv_t2:"For you.",footer_desc:"Luxury boutique real estate. Only verified properties, private negotiations, full legal support.",links:"LINKS",contact_h:"CONTACT",hours:"Hours & Visits",hours_p:"Visits by appointment only. Video-call available for international clients.",whats:"💬 WhatsApp • Book",other:"Other Properties",req:"REQUEST INFO",concierge:"REQUEST CONCIERGE →",concierge_t:"DOMEX Concierge",concierge_p:"Moving, furnishing, management, short rentals. After purchase, we stay by your side."}
};
const data=[
{id:1,title:"Villa sul Lago di Como",price:"€ 2.850.000",city:"Como",area:"420 m²",rooms:"5 Camere",rooms_en:"5 Bedrooms",img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",cat:"villa",tag:"ESCLUSIVA"},
{id:2,title:"Attico a Milano Brera",price:"€ 1.480.000",city:"Milano",area:"145 m²",rooms:"3 Camere",rooms_en:"3 Bedrooms",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",cat:"flat",tag:"NUOVO"},
{id:3,title:"Villa Moderna a Roma",price:"€ 3.200.000",city:"Roma",area:"510 m²",rooms:"6 Camere",rooms_en:"6 Bedrooms",img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",cat:"villa",tag:"LUSSO"},
{id:4,title:"Cottage in Toscana",price:"€ 890.000",city:"Toscana",area:"180 m²",rooms:"4 Camere",rooms_en:"4 Bedrooms",img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",cat:"cottage",tag:"CHARME"},
{id:5,title:"Mansione sul Lago di Garda",price:"€ 4.900.000",city:"Garda",area:"680 m²",rooms:"7 Camere",rooms_en:"7 Bedrooms",img:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",cat:"mansion",tag:"PRESTIGIO"},
{id:6,title:"Flat Design a Firenze",price:"€ 720.000",city:"Firenze",area:"98 m²",rooms:"2 Camere",rooms_en:"2 Bedrooms",img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",cat:"flat",tag:"DESIGN"},
];
let LANG = localStorage.getItem("domex_lang") || "IT";
function applyLang(){
  const d=T[LANG]||T.IT;
  document.documentElement.lang = LANG.toLowerCase();
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n; if(d[k]) el.textContent=d[k];});
  document.querySelectorAll(".lang-switch button").forEach(b=>b.classList.toggle("active",b.dataset.lang===LANG));
  const cur=document.getElementById("currentCat"); render(cur?cur.value:"all");
}
function setLang(l){ LANG=l; localStorage.setItem("domex_lang",l); applyLang(); }
function getRooms(d){ return LANG==="EN"?d.rooms_en:d.rooms; }
function render(cat="all"){
  const el=document.getElementById("grid"); if(!el) return;
  const d=T[LANG];
  document.getElementById("currentCat").value=cat;
  const list=data.filter(x=>cat==="all"||x.cat===cat);
  el.innerHTML=list.map(x=>`<article class="card"><div class="thumb"><img loading="lazy" src="${x.img}" alt="${x.title}"><span class="tag">${x.city}</span><span class="tag2">${x.tag}</span></div><div class="card-body"><h3>${x.title}</h3><div class="price">${x.price}</div><div class="meta">${x.city} • ${x.area} • ${getRooms(x)}</div><div class="card-foot"><a class="link" href="dettaglio.html?id=${x.id}">${d.details}</a><a class="btn btn-gold" style="padding:9px 14px;font-size:12px" href="prenota.html">${d.book2}</a></div></div></article>`).join("");
  document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("on",b.dataset.cat===cat));
}
function initDetail(){
  const el=document.getElementById("detail"); if(!el) return;
  const id=new URLSearchParams(location.search).get("id")||"1";
  const x=data.find(v=>String(v.id)===String(id))||data[0];
  const d=T[LANG];
  el.innerHTML=`<div class="split"><div><img src="${x.img}" alt="${x.title}"></div><div><div class="eyebrow">DOMEX • ${x.city.toUpperCase()}</div><h2>${x.title}</h2><div class="price" style="font-size:26px">${x.price}</div><p class="sub" style="margin:12px 0">${x.city} • ${x.area} • ${getRooms(x)} • Vista premium • Posizione esclusiva.</p><div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn btn-gold" href="prenota.html">${d.book_now}</a><a class="btn btn-ghost" href="contatto.html">${d.req}</a></div></div></div>`;
}
function toggleMenu(){document.getElementById("mMenu").classList.toggle("open")}
function toggleTheme(){
  const b=document.body;
  const isNight=b.classList.contains("night");
  if(isNight){b.classList.remove("night");localStorage.setItem("domex_theme","day");}
  else{b.classList.add("night");localStorage.setItem("domex_theme","night");}
}
function initTheme(){
  const h=new Date().getHours();
  const saved=localStorage.getItem("domex_theme");
  const wantNight = saved ? saved==="night" : (h>=19||h<6);
  if(wantNight) document.body.classList.add("night");
}
document.addEventListener("DOMContentLoaded",()=>{initTheme();applyLang();initDetail();});
