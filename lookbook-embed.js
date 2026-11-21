(function(){
  var host = document.getElementById('hlb'); if (!host) return;
  host.className = 'hlb'; host.style.minHeight = '80vh';
  host.innerHTML = "\n\n<div class=\"panel counter\">\n  <span class=\"lbl\" id=\"hlb-cLbl\">Lookbook</span><span class=\"num grow\" id=\"hlb-cNum\">FW'26 \u00b7 10 looks</span>\n  <button class=\"arrow\" id=\"hlb-prev\" aria-label=\"Look tr\u01b0\u1edbc\">\u2039</button>\n  <button class=\"arrow\" id=\"hlb-next\" aria-label=\"Look sau\">\u203a</button>\n  <div class=\"thumb\" id=\"hlb-cThumb\"></div>\n  <button class=\"arrow mclose\" id=\"hlb-mClose\" aria-label=\"\u0110\u00f3ng look\">\u00d7</button>\n</div>\n\n<section class=\"intro\">\n  <div class=\"lbl\">Lookbook 01 / 01</div>\n  <h1>FW'26 <em>line-up</em></h1>\n  <div class=\"row2\"><span class=\"lbl\">Looks</span><b class=\"num\" style=\"color:var(--ink);font-size:14px\">10</b></div>\n</section>\n\n<div class=\"lineup\" id=\"hlb-lineup\" role=\"list\" aria-label=\"Danh s\u00e1ch look\"></div>\n\n<div class=\"viewer\" id=\"hlb-viewer\" tabindex=\"0\" aria-label=\"K\u00e9o \u0111\u1ec3 xoay 360 \u0111\u1ed9\">\n  <div id=\"hlb-vimg\" role=\"img\"></div>\n  <div class=\"hint\" id=\"hlb-hint\">R\u00ea chu\u1ed9t v\u00e0o ng\u01b0\u1eddi m\u1eabu \u0111\u1ec3 xem chi ti\u1ebft</div>\n</div>\n\n<div class=\"sheet\" id=\"hlb-sheet\">\n  <aside class=\"panel info\" id=\"hlb-info\">\n    <div class=\"lbl\" id=\"hlb-iNo\">Look 01 / 10</div>\n    <h2 id=\"hlb-iName\"></h2>\n    <div class=\"scrub\">\n      <span class=\"lbl\" id=\"hlb-iDeg\">000\u00b0 / 360\u00b0</span>\n      <div class=\"strip\" id=\"hlb-strip\" aria-label=\"K\u00e9o \u0111\u1ec3 xoay 360 \u0111\u1ed9\"><div class=\"box\" id=\"hlb-sbox\"></div></div>\n    </div>\n    <dl class=\"spec\" id=\"hlb-spec\"></dl>\n    <p class=\"desc\" id=\"hlb-iDesc\"></p>\n  </aside>\n\n  <aside class=\"panel buy\" id=\"hlb-buy\">\n    <div class=\"lbl\" style=\"margin-bottom:10px\">Ch\u1ecdn size t\u1eebng m\u00f3n</div>\n    <div id=\"hlb-items\"></div>\n    <div class=\"tot\"><span class=\"lbl\">Tr\u1ecdn b\u1ed9 look</span><strong id=\"hlb-tot\"></strong></div>\n    <button class=\"cta\" id=\"hlb-cta\" disabled>Ch\u1ecdn size cho c\u1ea3 2 m\u00f3n</button>\n    <p class=\"note\">Gi\u00e1 v\u00e0 size c\u1eadp nh\u1eadt tr\u1ef1c ti\u1ebfp t\u1eeb c\u1eeda h\u00e0ng. Video 360\u00b0 \u0111\u01b0\u1ee3c d\u1ef1ng b\u1eb1ng AI t\u1eeb \u1ea3nh ch\u1ee5p th\u1eadt.</p>\n  </aside>\n</div>\n\n<a class=\"panel pop\" id=\"hlb-pop\" href=\"#\" target=\"_blank\" rel=\"noopener\">\n  <div class=\"ph\"><img id=\"hlb-pImg\" alt=\"\"></div>\n  <div class=\"tx\">\n    <span class=\"num\" id=\"hlb-pNo\">01</span>\n    <span class=\"lbl\" id=\"hlb-pName\"></span>\n    <span class=\"num\" style=\"color:var(--ink)\" id=\"hlb-pPrice\"></span>\n    <span class=\"num\" id=\"hlb-pSize\"></span>\n    <span class=\"go\">Xem trang s\u1ea3n ph\u1ea9m <span>\u2192</span></span>\n  </div>\n  <button class=\"x\" id=\"hlb-pClose\" aria-label=\"\u0110\u00f3ng\">\u00d7</button>\n</a>\n\n<div class=\"panel pbar\" id=\"hlb-pbar\"></div>\n\n<div class=\"panel foot\">\n  <span class=\"lbl\" id=\"hlb-fLbl\">10 looks</span>\n  <button class=\"lbl\" id=\"hlb-fBtn\">Ch\u1ecdn 1 look</button>\n</div>\n\n<div class=\"toast\" id=\"hlb-toast\"></div>\n\n";
  var link = document.createElement('link'); link.rel = 'stylesheet'; link.href = (document.currentScript && document.currentScript.src || "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@main/lookbook-embed.js").replace("lookbook-embed.js", "lookbook.css");
  link.onload = function(){ host.style.minHeight = ''; init(); };
  document.head.appendChild(link);
  function init(){
  const BASE = 'https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/', SP = n => BASE + 'sp/' + n + '.webp';
  const wrap = document.getElementById('hlb');
  const fit = () => { const t = wrap.getBoundingClientRect().top + scrollY; wrap.style.height = Math.max(520, innerHeight - t) + 'px'; };
  fit(); addEventListener('resize', fit);
  const N = 72, W = 826, H = 1100;
  const REAL = [
 {
  "id": "l1",
  "start": 1,
  "name": "Prime <em>Mirror</em>",
  "model": {
   "h": "1m78",
   "w": "65 kg"
  },
  "desc": "Len lông đen chữ PRIME HADES đảo ngược, phối jeans Salvage wash xanh đậm ống bóng.",
  "items": [
   {
    "n": "Mirror Knit Sweater - Black",
    "p": 1092500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-mirror-knit-sweater-black.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-mirror-knit-sweater-black",
    "k": "Áo",
    "ws": "L"
   },
   {
    "n": "Salvage Denim Pants",
    "p": 940500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-salvage-denim-pants.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-salvage-denim-pants",
    "k": "Quần",
    "ws": "L"
   }
  ],
  "hot": [
   [
    50,
    30
   ],
   [
    50,
    64
   ]
  ]
 },
 {
  "id": "l2",
  "start": 60,
  "name": "Saigon <em>Cargo</em>",
  "model": {
   "h": "1m85",
   "w": "65 kg"
  },
  "desc": "Áo Campus Classic xanh rêu in HADESLTD SAIGON MM.XVI, phối cargo jeans wash xám bẩn túi hộp lớn.",
  "items": [
   {
    "n": "Campus Classic Tee - Moss Green",
    "p": 551000,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-campus-classic-tee-moss-green.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-campus-classic-tee-moss-green",
    "k": "Áo",
    "ws": "L"
   },
   {
    "n": "Off Gray Wash Cargo Jeans",
    "p": 1035000,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-off-gray-wash-cargo-jeans.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-off-gray-wash-cargo-jeans",
    "k": "Quần",
    "ws": "L"
   }
  ],
  "hot": [
   [
    50,
    27
   ],
   [
    50,
    62
   ]
  ]
 },
 {
  "id": "l3",
  "start": 10,
  "name": "Slow <em>Burn</em>",
  "model": {
   "h": "1m85",
   "w": "65 kg"
  },
  "desc": "Áo dài tay wash xám in ban nhạc SLOWBURN, tay in lửa. Jeans in graffiti HADES phủ kín trước và sau.",
  "items": [
   {
    "n": "Slowburn Washed Longsleeve",
    "p": 750500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-slowburn-washed-longsleeve.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-slowburn-washed-longsleeve",
    "k": "Áo",
    "ws": "L"
   },
   {
    "n": "Graffity Bomb Jeans",
    "p": 1187500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-graffity-bomb-jeans.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-graffity-bomb-jeans",
    "k": "Quần",
    "ws": "L"
   }
  ],
  "hot": [
   [
    50,
    29
   ],
   [
    50,
    66
   ]
  ]
 },
 {
  "id": "l4",
  "start": 1,
  "name": "Terra <em>Stripe</em>",
  "model": {
   "h": "1m85",
   "w": "65 kg"
  },
  "desc": "Áo thun sọc navy thêu logo ngực, in HADESLTD SINCE MMXVI sau lưng, phối quần Backspike đen ống bóng.",
  "items": [
   {
    "n": "Terra Stripe Tee - Blue Navy",
    "p": 551000,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-terra-stripe-tee-blue-navy.webp",
    "sz": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "url": "https://hades.vn/products/hades-terra-stripe-tee-blue-navy",
    "k": "Áo",
    "ws": "L"
   },
   {
    "n": "Backspike Pants",
    "p": 756500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-backspike-pants.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-backspike-pants",
    "k": "Quần",
    "ws": "L"
   }
  ],
  "hot": [
   [
    50,
    31
   ],
   [
    50,
    64
   ]
  ]
 },
 {
  "id": "l5",
  "start": 1,
  "name": "Wired <em>Seven</em>",
  "model": {
   "h": "1m75",
   "w": "51 kg"
  },
  "desc": "Áo thun đen chữ Hades Present phía trước, số 7 tai nghe chồng lớp phía sau. Phối jeans Chrome Dust xanh nhạt.",
  "items": [
   {
    "n": "Wired Seven Tee",
    "p": 620000,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-wired-seven-tee.webp",
    "sz": [
     "S",
     "M",
     "L",
     "XL"
    ],
    "url": "https://hades.vn/products/hades-wired-seven-tee",
    "k": "Áo",
    "ws": "M"
   },
   {
    "n": "Chrome Dust Jeans",
    "p": 997500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-chrome-dust-jeans.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-chrome-dust-jeans",
    "k": "Quần",
    "ws": "M"
   }
  ],
  "hot": [
   [
    50,
    32
   ],
   [
    50,
    64
   ]
  ]
 },
 {
  "id": "l6",
  "start": 1,
  "name": "Camo <em>Glitz</em>",
  "model": {
   "h": "1m70",
   "w": "47 kg"
  },
  "desc": "Hoodie zip mặc được hai mặt: mặt camo vải waffle và mặt đen in HADES phủ họa tiết ngôi sao.",
  "items": [
   {
    "n": "Camo Glitz Zip Up Hoodie",
    "p": 1472500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-camo-glitz-zip-up.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-camo-glitz-zip-up",
    "k": "Hoodie",
    "ws": "M"
   }
  ],
  "hot": [
   [
    50,
    36
   ]
  ]
 },
 {
  "id": "l7",
  "start": 1,
  "name": "Bubble <em>Dot</em>",
  "model": {
   "h": "1m85",
   "w": "65 kg"
  },
  "desc": "Hoodie zip trắng chấm bi xanh, chữ Hades thêu bạc. Phối jeans Chrome Dust xanh nhạt ống cong.",
  "items": [
   {
    "n": "Bubble Dot Zip Hoodie - White",
    "p": 997500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-bubble-dot-zip-hoodie-white.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-bubble-dot-zip-hoodie-white",
    "k": "Hoodie",
    "ws": "L"
   },
   {
    "n": "Chrome Dust Jeans",
    "p": 997500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-chrome-dust-jeans.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-chrome-dust-jeans",
    "k": "Quần",
    "ws": "L"
   }
  ],
  "hot": [
   [
    50,
    30
   ],
   [
    50,
    64
   ]
  ]
 },
 {
  "id": "l8",
  "start": 1,
  "name": "Wanna<em>bees</em>",
  "model": {
   "h": "1m85",
   "w": "65 kg"
  },
  "desc": "Polo dài tay sọc vàng nâu bản to, túi ngực dây rút, HADES LTD thêu sau lưng. Phối jeans Salvage wash đậm.",
  "items": [
   {
    "n": "Wannabees Longsleeve Polo",
    "p": 845500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-wannabees-longsleeve-polo.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-wannabees-longsleeve-polo",
    "k": "Áo",
    "ws": "L"
   },
   {
    "n": "Salvage Denim Pants",
    "p": 940500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-salvage-denim-pants.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-salvage-denim-pants",
    "k": "Quần",
    "ws": "L"
   }
  ],
  "hot": [
   [
    50,
    30
   ],
   [
    50,
    64
   ]
  ]
 },
 {
  "id": "l9",
  "start": 1,
  "name": "Axis <em>Riot</em>",
  "model": {
   "h": "1m85",
   "w": "65 kg"
  },
  "desc": "Áo khoác da Axis loang xám đen dáng lửng, phối jeans Grunge Riot wash bẩn rách lớn hai ống.",
  "items": [
   {
    "n": "Axis Leather Jacket",
    "p": 1567500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-alexis-leather-jacket.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-alexis-leather-jacket",
    "k": "Áo khoác",
    "ws": "L"
   },
   {
    "n": "Grunge Riot Denim Pants",
    "p": 997500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-grunge-riot-denim-pants.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-grunge-riot-denim-pants",
    "k": "Quần",
    "ws": "L"
   }
  ],
  "hot": [
   [
    50,
    30
   ],
   [
    50,
    62
   ]
  ]
 },
 {
  "id": "l10",
  "start": 1,
  "name": "Line <em>Driver</em>",
  "model": {
   "h": "1m71",
   "w": "48 kg"
  },
  "desc": "Set sọc kim Line Driver: áo khoác lửng thêu Armada Hades và quần ống bóng thêu chữ sau ống.",
  "items": [
   {
    "n": "Line Driver Jacket",
    "p": 845500,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-line-driver-jacket.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-line-driver-jacket",
    "k": "Áo khoác",
    "ws": "M"
   },
   {
    "n": "Line Driver Pants",
    "p": 779000,
    "img": "https://cdn.jsdelivr.net/gh/nguyenannn04/hades-lookbook-assets@028d282/p/hades-line-driver-pants.webp",
    "sz": [
     "S",
     "M",
     "L"
    ],
    "url": "https://hades.vn/products/hades-line-driver-pants",
    "k": "Quần",
    "ws": "S"
   }
  ],
  "hot": [
   [
    50,
    30
   ],
   [
    50,
    64
   ]
  ]
 }
];
  // line-up order
  const SLOTS = ['l1','l5','l2','l6','l3','l9','l4','l10','l7','l8'];
  const $ = id => document.getElementById(id);
  const link = it => it.url || 'https://hades.vn/search?q=' + encodeURIComponent(it.n);
  const vnd = n => n.toLocaleString('vi-VN') + '₫';
  const pad = n => String(n).padStart(2,'0');
  const fr = (id, k) => `looks/${id}/f${pad(k)}.webp`;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cache = {};
  // frames are packed: 6 big sheets of 12 (4x3) per look for the viewer, 1 small sheet of 72 (12x6) for the line-up
  const img1 = src => new Promise(r => { const im = new Image(); im.onload = im.onerror = () => r(im); im.src = src; });
  const load = id => cache[id] || (cache[id] = Promise.all(Array.from({length:6}, (_, s) => img1(SP(`${id}_${s}`)))));
  const loadSmall = id => img1(SP(`${id}_s`));
  const big = (el, id, k) => { k = ((k - 1) % N + N) % N; const j = k % 12; el.style.backgroundImage = `url(${SP(`${id}_${Math.floor(k / 12)}`)})`; el.style.backgroundPosition = `${(j % 4) / 3 * 100}% ${Math.floor(j / 4) / 2 * 100}%`; };
  const small = (el, id, k) => { k = ((k - 1) % N + N) % N; el.style.backgroundImage = `url(${SP(`${id}_s`)})`; el.style.backgroundPosition = `${(k % 12) / 11 * 100}% ${Math.floor(k / 12) / 5 * 100}%`; };

  // build line-up
  const lineup = $('hlb-lineup');
  lineup.innerHTML = SLOTS.map((s, i) => {
    const L = REAL.find(r => r.id === s);
    return L
      ? `<button class="fig real" role="listitem" data-id="${s}" data-slot="${i}" aria-label="Look ${pad(i + 1)}"><div class="im"><div class="spr"></div></div><span class="n">${pad(i + 1)}</span></button>`
      : `<div class="fig ghost" role="listitem" aria-label="Look ${pad(i + 1)}, sắp có"><div class="im"><img src="ghost/${s}.webp" alt=""></div><span class="n">${pad(i + 1)}</span></div>`;
  }).join('');
  const realSlots = SLOTS.map((s, i) => REAL.some(r => r.id === s) ? i : -1).filter(i => i >= 0);

  // every real look in the line-up turns 360° on its own, each from its own starting angle
  const rowSpin = [...wrap.querySelectorAll('.fig.real')].map(b => {
    const L = REAL.find(r => r.id === b.dataset.id);
    b.addEventListener('click', () => open(+b.dataset.slot));
    const el = b.querySelector('.spr'); small(el, L.id, L.start);
    return { L, img: el, k: L.start, ready: false };
  });
  REAL.forEach(L => loadSmall(L.id).then(() => rowSpin.filter(r => r.L === L).forEach(r => r.ready = true)));
  if (!reduce) setInterval(() => rowSpin.forEach(r => { if (!r.ready) return; r.k = r.k % N + 1; small(r.img, r.L.id, r.k); }), 95);

  const viewer = $('hlb-viewer'), vimg = $('hlb-vimg');
  let cur = null, frames = [], idx = 0, fromRect = null, hots = [], picks = [null, null];
  const mobile = () => innerWidth <= 900;
  const WW = () => wrap.clientWidth, WH = () => wrap.clientHeight;
  const rel = r => { const w = wrap.getBoundingClientRect(); return { left:r.left - w.left, top:r.top - w.top, width:r.width, height:r.height }; };

  const target = () => {
    if (mobile()) { const h = WH() * 0.58 - 40, w = h * W / H; return { left:(WW() - w) / 2, top:10, width:w, height:h }; }
    const h = WH() * 0.9, w = h * W / H;
    return { left:(WW() - w) / 2, top:(WH() - h) / 2, width:w, height:h };
  };
  const place = r => Object.assign(viewer.style, { left:r.left + 'px', top:r.top + 'px', width:r.width + 'px', height:r.height + 'px' });

  const show = i => {
    idx = ((i % N) + N) % N;
    if (cur) big(vimg, cur.L.id, idx + 1);
    const a = Math.round(idx / N * 360), d = pad3(a);
    $('hlb-iDeg').textContent = `${d}° / 360°`;
    $('hlb-sbox').style.left = ((idx + .5) / N * 100) + '%';
    const front = idx <= 5 || idx >= N - 5;
    hots.forEach(h => h.classList.toggle('hide', !front));
  };
  const pad3 = n => String(n).padStart(3,'0');

  function renderLook(L, slot) {
    $('hlb-iNo').textContent = `Look ${pad(slot + 1)} / 10`;
    $('hlb-cLbl').textContent = 'Look'; $('hlb-cNum').textContent = `${pad(slot + 1)} / 10`;
    big($('hlb-cThumb'), L.id, 1); $('hlb-cThumb').style.backgroundSize = '400% 300%';
    $('hlb-iName').innerHTML = L.name;
    $('hlb-iDesc').textContent = L.desc;
    $('hlb-spec').innerHTML = [['Chiều cao', L.model.h], ['Cân nặng', L.model.w], ...L.items.map(it => [it.k + ' mặc', 'Size ' + it.ws])].map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('');
    picks = L.items.map(() => null);
    $('hlb-items').innerHTML = L.items.map((it, k) => `
      <div class="item"><div class="top"><b>${pad(k + 1)}</b><span class="lbl">${it.n}</span><span class="price">${vnd(it.p)}</span></div>
      <div class="sizes" role="group" aria-label="Size ${it.n}">${it.sz.map(s => `<button aria-pressed="false" data-k="${k}">${s}</button>`).join('')}</div></div>`).join('');
    $('hlb-items').querySelectorAll('.sizes button').forEach(b => b.addEventListener('click', () => {
      const k = +b.dataset.k; picks[k] = b.textContent;
      b.parentElement.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
      updateCta();
    }));
    $('hlb-tot').textContent = vnd(L.items.reduce((s, x) => s + x.p, 0));
    // 360 strip
    const st = $('hlb-strip'); st.querySelectorAll('.sim').forEach(x => x.remove());
    const sim = document.createElement('div'); sim.className = 'sim'; sim.style.backgroundImage = `url(${SP(`${L.id}_strip`)})`; st.insertBefore(sim, $('hlb-sbox'));
    // product bar
    $('hlb-pbar').innerHTML = L.items.map((it, k) => `
      <div class="pi" data-k="${k}" role="button" tabindex="0" aria-label="Xem nhanh ${it.n}">
        <div class="th"><img src="${it.img}" alt=""></div><span class="nm">${it.n}</span><span class="pr">${vnd(it.p)}</span>
        <a href="${link(it)}" target="_blank" rel="noopener">Xem</a>
      </div>`).join('') + '<button class="pclose" id="hlb-pclose">Đóng</button>';
    $('hlb-pbar').querySelectorAll('.pi').forEach(el => {
      el.querySelector('a').addEventListener('click', e => e.stopPropagation());
      el.addEventListener('click', () => popup(+el.dataset.k));
      el.addEventListener('keydown', e => { if (e.key === 'Enter') popup(+el.dataset.k); });
    });
    $('hlb-pclose').addEventListener('click', () => close());
    updateCta();
    // hotspots
    hots.forEach(h => h.remove());
    hots = L.hot.map(([x, y], k) => {
      const b = document.createElement('button');
      b.className = 'hot'; b.textContent = k + 1; b.style.left = x + '%'; b.style.top = y + '%';
      b.setAttribute('aria-label', 'Xem ' + L.items[k].n);
      b.addEventListener('pointerdown', e => e.stopPropagation());
      b.addEventListener('click', e => { e.stopPropagation(); popup(k); });
      viewer.appendChild(b); return b;
    });
    closePop();
  }
  function updateCta() {
    const c = $('hlb-cta'), miss = picks.filter(p => !p).length;
    c.disabled = miss > 0;
    c.textContent = !miss ? 'Thêm cả look vào giỏ' : picks.length === 1 ? 'Chọn size' : miss === picks.length ? `Chọn size cho cả ${picks.length} món` : `Chọn size cho món ${pad(picks.findIndex(p => !p) + 1)}`;
  }

  function popup(k) {
    const L = cur.L, it = L.items[k];
    $('hlb-pImg').src = it.img; $('hlb-pImg').alt = it.n;
    $('hlb-pNo').textContent = pad(k + 1) + ' / ' + pad(L.items.length);
    $('hlb-pName').textContent = it.n; $('hlb-pPrice').textContent = vnd(it.p);
    $('hlb-pSize').textContent = picks[k] ? 'Đã chọn size ' + picks[k] : 'Người mẫu mặc size ' + it.ws;
    $('hlb-pop').href = link(it);
    hots.forEach((h, j) => h.classList.toggle('on', j === k));
    wrap.querySelectorAll('.pi').forEach((el, j) => el.classList.toggle('on', j === k));
    $('hlb-pop').classList.add('show');
    goFront();
  }
  function closePop() { $('hlb-pop').classList.remove('show'); hots.forEach(h => h.classList.remove('on')); wrap.querySelectorAll('.pi').forEach(el => el.classList.remove('on')); }
  $('hlb-pClose').addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); closePop(); });

  async function open(slot) {
    const btn = lineup.children[slot], L = REAL.find(r => r.id === SLOTS[slot]);
    if (!L || cur?.slot === slot) return;
    const switching = !!cur;
    if (switching) lineup.children[cur.slot].classList.remove('on');
    cur = { slot, L };
    renderLook(L, slot);
    frames = await load(L.id);
    idx = L.start - 1; show(idx);
    // zoom the whole line-up around the chosen figure, blur the rest
    const im = btn.querySelector('.im'), r = rel(im.getBoundingClientRect());
    if (!switching) { fromRect = { left:r.left, top:r.top, width:r.width, height:r.height }; place(fromRect); viewer.classList.add('show'); viewer.getBoundingClientRect(); }
    btn.classList.add('on');
    lineup.style.transformOrigin = `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
    lineup.style.transform = mobile() ? 'none' : 'scale(1.9)';
    wrap.classList.add('sel');
    viewer.classList.add('anim'); place(target());
    $('hlb-fLbl').textContent = cur.L.items.length + ' sản phẩm'; $('hlb-fBtn').textContent = 'Đóng';
    if (!switching && !reduce) { // one quick turn as the figure lands
      const t0 = performance.now(), s = idx;
      const step = t => { const p = Math.min(1, (t - t0) / 1400), e = 1 - (1 - p) ** 3; show(s + Math.round((N - s) * e)); if (p < 1) requestAnimationFrame(step); };
      setTimeout(() => requestAnimationFrame(step), 250);
      setTimeout(startAuto, 1800);
    } else { show(0); startAuto(); viewer.animate([{opacity:0, filter:'blur(14px)'},{opacity:1, filter:'blur(0)'}],{duration:650, easing:'cubic-bezier(.16,1,.3,1)'}); }
    if (switching) fromRect = (() => { const q = lineup.children[slot].querySelector('.im'); lineup.style.transform = 'none'; const rr = rel(q.getBoundingClientRect()); lineup.style.transform = mobile() ? 'none' : 'scale(1.9)'; return { left:rr.left, top:rr.top, width:rr.width, height:rr.height }; })();
    viewer.focus({ preventScroll:true });
  }
  function close() {
    if (!cur) return;
    closePop();
    const slot = cur.slot;
    wrap.classList.remove('sel');
    lineup.style.transform = 'none';
    place(fromRect || target());
    $('hlb-cLbl').textContent = 'Lookbook'; $('hlb-cNum').textContent = "FW'26 · 10 looks"; $('hlb-cThumb').style.backgroundImage = '';
    $('hlb-fLbl').textContent = '10 looks'; $('hlb-fBtn').textContent = 'Chọn 1 look';
    setTimeout(() => { viewer.classList.remove('show', 'anim'); lineup.children[slot].classList.remove('on'); }, 900);
    cur = null; cancelAnimationFrame(auto);
  }
  $('hlb-fBtn').addEventListener('click', () => cur ? close() : open(realSlots[0]));
  $('hlb-mClose').addEventListener('click', close);
  const step = d => { if (!cur) return open(realSlots[0]); const p = realSlots.indexOf(cur.slot); open(realSlots[(p + d + realSlots.length) % realSlots.length]); };
  $('hlb-prev').addEventListener('click', () => step(-1));
  $('hlb-next').addEventListener('click', () => step(1));
  addEventListener('resize', () => { if (cur) { viewer.classList.remove('anim'); place(target()); } });

  // auto rotate; pauses while the mouse is on the model, while scrubbing, or while a product pop-up is open
  let auto = 0, lastT = 0, hover = false, scrubbing = false, resumeT = 0, frontAnim = 0;
  const paused = () => hover || scrubbing || $('hlb-pop').classList.contains('show') || frontAnim;
  const spin = t => { if (cur && !paused() && t - lastT > 85) { show(idx + 1); lastT = t; } auto = requestAnimationFrame(spin); };
  const startAuto = () => { if (reduce) return; cancelAnimationFrame(auto); auto = requestAnimationFrame(spin); };
  // turn the model to the front by the short way, so numbers 1 and 2 show
  function goFront() {
    cancelAnimationFrame(frontAnim);
    const from = idx, dist = from > N / 2 ? N - from : -from;
    if (!dist || reduce) { show(0); frontAnim = 0; return; }
    const t0 = performance.now(), dur = Math.min(700, 25 * Math.abs(dist) + 200);
    const st = t => { const p = Math.min(1, (t - t0) / dur), e = 1 - (1 - p) ** 3; show(from + Math.round(dist * e)); frontAnim = p < 1 ? requestAnimationFrame(st) : 0; };
    frontAnim = requestAnimationFrame(st);
  }
  viewer.addEventListener('mouseenter', () => { hover = true; goFront(); $('hlb-hint').style.opacity = 0; });
  viewer.addEventListener('mouseleave', () => { hover = false; $('hlb-hint').style.opacity = 1; });
  // phones: drag on the model like before; auto-rotate resumes 1.5s after letting go
  let dragging = false, sx = 0, si = 0;
  viewer.addEventListener('pointerdown', e => {
    if (!mobile() || e.target.classList.contains('hot')) return;
    clearTimeout(resumeT); cancelAnimationFrame(frontAnim); frontAnim = 0;
    dragging = scrubbing = true; sx = e.clientX; si = idx; viewer.setPointerCapture(e.pointerId);
  });
  viewer.addEventListener('pointermove', e => { if (dragging) show(si - Math.round((e.clientX - sx) / 7)); });
  const endDrag = () => { if (!dragging) return; dragging = false; resumeT = setTimeout(() => scrubbing = false, 1500); };
  viewer.addEventListener('pointerup', endDrag); viewer.addEventListener('pointercancel', endDrag);
  // scrub on the 360 strip
  if (mobile()) $('hlb-hint').textContent = 'Tự xoay · kéo để xoay';
  const strip = $('hlb-strip');
  const scrub = e => { const r = strip.getBoundingClientRect(); show(Math.floor(Math.min(.999, Math.max(0, (e.clientX - r.left) / r.width)) * N)); };
  strip.addEventListener('pointerdown', e => { clearTimeout(resumeT); cancelAnimationFrame(frontAnim); frontAnim = 0; scrubbing = true; strip.setPointerCapture(e.pointerId); scrub(e); });
  strip.addEventListener('pointermove', e => { if (scrubbing && strip.hasPointerCapture(e.pointerId)) scrub(e); });
  const endScrub = () => { resumeT = setTimeout(() => scrubbing = false, 1500); };
  strip.addEventListener('pointerup', endScrub); strip.addEventListener('pointercancel', endScrub);

  addEventListener('keydown', e => {
    if (!cur) return;
    if (e.key === 'Escape') { $('hlb-pop').classList.contains('show') ? closePop() : close(); }
    if (e.key === 'ArrowLeft') show(idx + 1);
    if (e.key === 'ArrowRight') show(idx - 1);
  });

  const toast = m => { const t = $('hlb-toast'); t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2000); };
  $('hlb-cta').addEventListener('click', () => {
    if (!cur) return;
    const L = cur.L;
    toast('[Bản test – chưa nối giỏ hàng] ' + L.items.map((x, j) => `${x.n} (${picks[j]})`).join(' + '));
    $('hlb-cta').classList.add('done'); $('hlb-cta').textContent = 'Đã thêm vào giỏ';
    setTimeout(() => { $('hlb-cta').classList.remove('done'); updateCta(); }, 1800);
  });


}
})();
