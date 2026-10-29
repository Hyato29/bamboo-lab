const TYPES = [
  {
    n: "Villa & Pod Bambu",
    s: "Hunian, unit sewa, glamping",
    d: "Kubah anyaman yang hangat dan privat, dengan bukaan ke lanskap.",
    bg: "#e8dcc0",
  },
  {
    n: "Restoran & Kafe",
    s: "Ruang makan beratap gelombang",
    d: "Atap bergelombang dari shingle bambu yang menaungi ruang makan terbuka.",
    bg: "#dde4e6",
  },
  {
    n: "Pavilion & Gazebo",
    s: "Tempat berkumpul dan acara",
    d: "Struktur terbuka dengan rangka melengkung, cocok untuk bale dan area acara.",
    bg: "#eadfc4",
  },
  {
    n: "Resort & Wisata",
    s: "Kawasan dengan banyak unit",
    d: "Gugus unit, kolam, dan fasilitas bersama yang dirancang sebagai satu kawasan.",
    bg: "#d8e3d4",
  },
];
const ART = [
  `<ellipse cx="100" cy="176" rx="82" ry="14" fill="#c9b78f" opacity=".55"/><path d="M30 172A70 84 0 0 1 170 172Z" fill="#d9a441"/><path d="M100 88V172M72 98Q62 130 58 172M128 98Q138 130 142 172M48 124Q100 108 152 124M38 148Q100 134 162 148" stroke="#8a5f1e" stroke-width="2.4" fill="none"/><ellipse cx="100" cy="158" rx="15" ry="20" fill="#0f2744"/><ellipse cx="100" cy="160" rx="9" ry="14" fill="#f0c46a"/>`,
  `<ellipse cx="100" cy="182" rx="86" ry="12" fill="#b9c7cc" opacity=".6"/><path d="M12 112Q50 70 100 108T188 98L188 124Q146 138 100 126T12 140Z" fill="#d9a441" stroke="#8a5f1e" stroke-width="2"/><path d="M12 126Q50 90 100 118T188 110" stroke="#8a5f1e" stroke-width="2" fill="none"/><path d="M34 134V176M100 128V176M168 122V176" stroke="#b9822c" stroke-width="7" stroke-linecap="round"/><path d="M52 176h96" stroke="#0f2744" stroke-width="3"/>`,
  `<ellipse cx="100" cy="182" rx="80" ry="12" fill="#c9b78f" opacity=".55"/><path d="M100 36L22 118H178Z" fill="#d9a441" stroke="#8a5f1e" stroke-width="2"/><path d="M100 36V118M100 36L62 118M100 36L138 118M54 82H146" stroke="#8a5f1e" stroke-width="2" fill="none"/><path d="M42 120V178M100 120V178M158 120V178" stroke="#b9822c" stroke-width="7" stroke-linecap="round"/><path d="M34 178h132" stroke="#0f2744" stroke-width="4" stroke-linecap="round"/>`,
  `<ellipse cx="100" cy="186" rx="86" ry="12" fill="#a9bfa6" opacity=".6"/><ellipse cx="100" cy="164" rx="52" ry="14" fill="#7fc4cf"/><path d="M20 128A30 34 0 0 1 80 128Z" fill="#d9a441"/><path d="M120 120A32 38 0 0 1 184 120Z" fill="#d9a441"/><path d="M62 98A26 30 0 0 1 114 98Z" fill="#c8932f"/><path d="M50 128V140M150 120V134M88 98V112" stroke="#8a5f1e" stroke-width="3"/><circle cx="46" cy="72" r="0"/>`,
];
document.getElementById("docs").innerHTML = TYPES.map(
  (d, i) => `
 <article class="doc"><div class="ph" style="background:${d.bg}">
  <svg viewBox="0 0 200 215" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${ART[i]}</svg><span class="tag">${d.s}</span></div>
  <div><h3>${d.n}</h3><p>${d.d}</p></div>
  <div class="foot"><b>Desain custom</b><button data-book data-type="${i}">Diskusikan</button></div></article>`,
).join("");

/* ---------- progress nav ---------- */
const LABELS = [
  ["01", "Studio"],
  ["02", "Bahan"],
  ["03", "Desain"],
  ["04", "Bengkel"],
  ["05", "Lokasi"],
  ["06", "Hasil"],
];
const progEl = document.getElementById("prog");
progEl.innerHTML = LABELS.map(
  (l, i) =>
    `<button data-go="${i}"><small>${l[0]}</small><span>${l[1]}</span><div class="bar"><i></i></div></button>`,
).join("");
const progBtns = [...progEl.children],
  bars = progBtns.map((b) => b.querySelector("i"));
const stepEls = [...document.querySelectorAll(".step")];
const journey = document.querySelector(".journey");
function journeyRange() {
  return journey.offsetHeight - innerHeight;
}
function goStep(i) {
  const top = journey.getBoundingClientRect().top + scrollY;
  scrollTo({ top: top + journeyRange() * (i / 5) * 0.999, behavior: "smooth" });
}
progBtns.forEach((b) =>
  b.addEventListener("click", () => goStep(+b.dataset.go)),
);
document.getElementById("skip").addEventListener("click", () => {
  scrollTo({
    top: journey.offsetTop + journey.offsetHeight,
    behavior: "smooth",
  });
});
document.getElementById("search").addEventListener("submit", (e) => {
  e.preventDefault();
  openModal(
    +document.getElementById("tipe").value,
    document.getElementById("tahap").selectedIndex,
  );
});

/* ---------- consultation modal ---------- */
const modal = document.getElementById("modal"),
  mbody = document.getElementById("mbody"),
  mnav = document.getElementById("mnav");
const SIZES = [
  "Di bawah 50 m²",
  "50–150 m²",
  "150–500 m²",
  "Di atas 500 m²",
  "Belum tahu",
];
const STAGES = ["Baru punya ide", "Sudah punya lahan", "Sudah punya gambar"];
let st = {
    step: 0,
    type: 0,
    size: "50–150 m²",
    stage: STAGES[0],
    copied: false,
  },
  lastFocus = null;
function openModal(type, stage) {
  lastFocus = document.activeElement;
  st = {
    step: 0,
    type: type ?? 0,
    size: "50–150 m²",
    stage: STAGES[stage ?? 0],
    copied: false,
  };
  modal.hidden = false;
  renderModal();
  modal.querySelector("button")?.focus();
}
function closeModal() {
  modal.hidden = true;
  lastFocus && lastFocus.focus && lastFocus.focus();
}
function briefText() {
  return `Halo Bamboo Lab, saya ingin berkonsultasi.\nJenis bangunan: ${TYPES[st.type].n}\nPerkiraan luas: ${st.size}\nTahap saat ini: ${st.stage}\nLokasi lahan: (isi di sini)`;
}
function renderModal() {
  [...mnav.children].forEach((li, i) => {
    li.className = i < st.step ? "done" : i === st.step ? "on" : "";
  });
  const x = '<button class="close" data-x aria-label="Tutup">✕</button>';
  if (st.step === 0) {
    mbody.innerHTML = `<div class="head"><div><h4>Bangunan apa yang Anda impikan?</h4><p style="margin:4px 0 0;color:var(--muted);font-size:13px">Pilih yang paling dekat. Bisa disesuaikan nanti.</p></div>${x}</div>
    ${TYPES.map((d, i) => `<button class="opt ${i === st.type ? "sel" : ""}" data-type-i="${i}"><span><b>${d.n}</b><br><span style="color:var(--muted);font-size:12px">${d.s}</span></span></button>`).join("")}
    <div class="acts"><span></span><button class="pill dark" data-next>Lanjut →</button></div>`;
  } else if (st.step === 1) {
    mbody.innerHTML = `<div class="head"><div><h4>Seberapa besar dan sudah sampai mana?</h4><p style="margin:4px 0 0;color:var(--muted);font-size:13px">${TYPES[st.type].n}</p></div>${x}</div>
    <div><b style="font-size:12px">Perkiraan luas bangunan</b><div class="chips" style="margin-top:8px">${SIZES.map((d) => `<button class="chip ${d === st.size ? "sel" : ""}" data-size="${d}">${d}</button>`).join("")}</div></div>
    <div><b style="font-size:12px">Tahap saat ini</b><div class="chips" style="margin-top:8px">${STAGES.map((t) => `<button class="chip ${t === st.stage ? "sel" : ""}" data-stage="${t}">${t}</button>`).join("")}</div></div>
    <div class="acts"><button class="pill" data-prev>← Kembali</button><button class="pill dark" data-next>Lanjut →</button></div>`;
  } else {
    mbody.innerHTML = `<div class="head"><div><h4>Ringkasan untuk dikirim</h4><p style="margin:4px 0 0;color:var(--muted);font-size:13px">Salin teks ini, lalu kirim lewat DM Instagram @bamboolab.lombok.</p></div>${x}</div>
    <pre class="brief" id="brief">${briefText()}</pre>
    <p id="cp" style="margin:0;font-size:12.5px;color:var(--gold);min-height:18px" aria-live="polite">${st.copied ? "Ringkasan disalin. Tempel di DM Instagram." : ""}</p>
    <div class="acts"><button class="pill" data-prev>← Kembali</button><span style="display:flex;gap:8px;flex-wrap:wrap"><button class="pill dark" data-copy>Salin ringkasan</button><a class="pill or" href="https://www.instagram.com/bamboolab.lombok/" target="_blank" rel="noopener">Buka Instagram ↗</a></span></div>`;
  }
}
function copyBrief() {
  const t = briefText(),
    done = () => {
      st.copied = true;
      const c = document.getElementById("cp");
      if (c) c.textContent = "Ringkasan disalin. Tempel di DM Instagram.";
    },
    fallback = () => {
      const r = document.createRange();
      r.selectNodeContents(document.getElementById("brief"));
      const s = getSelection();
      s.removeAllRanges();
      s.addRange(r);
      const c = document.getElementById("cp");
      if (c)
        c.textContent = "Teks sudah dipilih. Tekan salin pada perangkat Anda.";
    };
  try {
    navigator.clipboard.writeText(t).then(done, fallback);
  } catch (e) {
    fallback();
  }
}
modal.addEventListener("click", (e) => {
  const t = e.target;
  if (t === modal || t.closest("[data-x]")) {
    closeModal();
    return;
  }
  const b = t.closest("button");
  if (!b) return;
  if (b.dataset.typeI !== undefined) {
    st.type = +b.dataset.typeI;
    renderModal();
  } else if (b.dataset.size) {
    st.size = b.dataset.size;
    renderModal();
  } else if (b.dataset.stage) {
    st.stage = b.dataset.stage;
    renderModal();
  } else if (b.hasAttribute("data-copy")) {
    copyBrief();
  } else if (b.hasAttribute("data-next")) {
    st.step++;
    renderModal();
  } else if (b.hasAttribute("data-prev")) {
    st.step--;
    renderModal();
  }
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-book]");
  if (b && !modal.contains(b))
    openModal(b.dataset.type !== undefined ? +b.dataset.type : undefined);
});

/* ---------- 3D scene ---------- */
function startScene() {
  const canvas = document.getElementById("gl");
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch (e) {
    canvas.style.background = "#e9dcc2";
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const BG = 0xefe5cf;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);

  const C = {
    cream: 0xf4ecdc,
    white: 0xffffff,
    navy: 0x14304f,
    gold: 0xc9993f,
    bam: 0xd9a441,
    bam2: 0xe9c46c,
    bamD: 0xa9772a,
    dark: 0x241f1a,
    wood: 0xc58e4a,
    teal: 0x8fc9bd,
    grey: 0xcfc8c1,
    green: 0x5f8f45,
    green2: 0x80ae5a,
    gb: 0x93b04a,
    lane: 0xcdb58a,
    path: 0xd9902a,
    floor: 0xf1e6cf,
  };
  const mats = {};
  const mat = (c) =>
    mats[c] ||
    (mats[c] = new THREE.MeshStandardMaterial({
      color: c,
      roughness: 0.85,
      metalness: 0,
    }));
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x7fc4cf,
    roughness: 0.25,
    transparent: true,
    opacity: 0.85,
  });
  function add(p, geo, c, x, y, z, sh = true) {
    const m = new THREE.Mesh(geo, mat(c));
    m.position.set(x, y, z);
    if (sh) {
      m.castShadow = true;
      m.receiveShadow = true;
    }
    p.add(m);
    return m;
  }
  const box = (p, w, h, d, c, x, y, z) =>
    add(p, new THREE.BoxGeometry(w, h, d), c, x, y + h / 2, z);
  const cyl = (p, rt, rb, h, c, x, y, z, s = 20) =>
    add(p, new THREE.CylinderGeometry(rt, rb, h, s), c, x, y + h / 2, z);
  const sph = (p, r, c, x, y, z) =>
    add(p, new THREE.SphereGeometry(r, 20, 14), c, x, y, z);

  function tex(lines, w, h, bg, fg, font, align = "left") {
    const cv = document.createElement("canvas");
    cv.width = w;
    cv.height = h;
    const g = cv.getContext("2d");
    if (bg) {
      g.fillStyle = bg;
      g.fillRect(0, 0, w, h);
    }
    g.fillStyle = fg;
    g.textBaseline = "middle";
    g.textAlign = align;
    lines.forEach((l) => {
      g.font = l.font || font;
      g.fillStyle = l.fg || fg;
      g.fillText(l.t, align === "center" ? w / 2 : (l.x ?? 24), l.y);
    });
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = 8;
    return t;
  }
  function sign(p, t, w, h, x, y, z, ry = 0) {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ map: t }),
    );
    m.position.set(x, y, z);
    m.rotation.y = ry;
    p.add(m);
    return m;
  }

  /* logo drawn on canvas (same emblem as the page logo) */
  function drawLogo(g, cx, cy, r, col) {
    g.strokeStyle = col;
    g.fillStyle = col;
    g.lineCap = "round";
    g.lineWidth = r * 0.05;
    g.beginPath();
    g.arc(cx, cy, r, 0, Math.PI * 2);
    g.stroke();
    [
      { x: -0.2, t: -0.5, b: 0.62, w: 0.075 },
      { x: 0.04, t: -0.8, b: 0.72, w: 0.085 },
      { x: 0.28, t: -0.35, b: 0.58, w: 0.07 },
    ].forEach((s) => {
      g.lineWidth = r * s.w;
      g.beginPath();
      g.moveTo(cx + s.x * r, cy + s.b * r);
      g.lineTo(cx + s.x * r, cy + s.t * r);
      g.stroke();
      g.lineWidth = r * 0.03;
      for (let y = s.t + 0.25; y < s.b - 0.1; y += 0.27) {
        g.beginPath();
        g.moveTo(cx + (s.x - 0.08) * r, cy + y * r);
        g.lineTo(cx + (s.x + 0.08) * r, cy + y * r);
        g.stroke();
      }
    });
    [
      [0.12, -0.7, 0.2, -25],
      [-0.1, -0.78, 0.17, 28],
      [0.38, -0.28, 0.15, -10],
      [-0.3, -0.42, 0.14, 18],
    ].forEach((l) => {
      g.save();
      g.translate(cx + l[0] * r, cy + l[1] * r);
      g.rotate((l[3] * Math.PI) / 180);
      g.beginPath();
      g.ellipse(0, 0, l[2] * r, l[2] * r * 0.28, 0, 0, Math.PI * 2);
      g.fill();
      g.restore();
    });
  }
  function logoPlate() {
    const cv = document.createElement("canvas");
    cv.width = 600;
    cv.height = 512;
    const g = cv.getContext("2d");
    g.fillStyle = "#0f2744";
    g.fillRect(0, 0, 600, 512);
    drawLogo(g, 300, 190, 150, "#d6b273");
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.font = '600 62px "Bricolage Grotesque",sans-serif';
    if ("letterSpacing" in g) g.letterSpacing = "9px";
    g.fillStyle = "#f4ecdc";
    const bw = g.measureText("BAMBOO ").width;
    g.textAlign = "left";
    const total = bw + g.measureText("LAB").width,
      sx = 300 - total / 2;
    g.fillText("BAMBOO ", sx, 410);
    g.fillStyle = "#d6b273";
    g.font = '800 62px "Bricolage Grotesque",sans-serif';
    g.fillText("LAB", sx + bw, 410);
    g.textAlign = "center";
    g.fillStyle = "#d6b273";
    g.font = '500 24px "Figtree",sans-serif';
    if ("letterSpacing" in g) g.letterSpacing = "12px";
    g.fillText("ARCHITECT", 300, 468);
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = 8;
    return t;
  }
  function sketchTex(w, h, bg = "#f4ecdc") {
    const cv = document.createElement("canvas");
    cv.width = w;
    cv.height = h;
    const g = cv.getContext("2d");
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.strokeStyle = "rgba(15,39,68,.14)";
    g.lineWidth = 1;
    for (let x = 0; x < w; x += 24) {
      g.beginPath();
      g.moveTo(x, 0);
      g.lineTo(x, h);
      g.stroke();
    }
    for (let y = 0; y < h; y += 24) {
      g.beginPath();
      g.moveTo(0, y);
      g.lineTo(w, y);
      g.stroke();
    }
    g.strokeStyle = "#14304f";
    g.lineWidth = 3;
    const cx = w * 0.5,
      by = h * 0.8,
      rx = w * 0.34,
      ry = h * 0.55;
    g.beginPath();
    g.ellipse(cx, by, rx, ry, 0, Math.PI, 0);
    g.stroke();
    g.beginPath();
    g.moveTo(cx - rx * 1.1, by);
    g.lineTo(cx + rx * 1.1, by);
    g.stroke();
    g.lineWidth = 1.6;
    for (let k = -3; k <= 3; k++) {
      g.beginPath();
      g.moveTo(cx, by - ry);
      g.quadraticCurveTo(
        cx + k * rx * 0.42,
        by - ry * 0.5,
        cx + k * rx * 0.32,
        by,
      );
      g.stroke();
    }
    g.strokeStyle = "#a9772a";
    g.lineWidth = 2;
    for (let k = 1; k <= 3; k++) {
      g.beginPath();
      g.ellipse(
        cx,
        by,
        rx * (1 - k * 0.22),
        ry * (1 - k * 0.22) * 0.18,
        0,
        Math.PI,
        0,
      );
      g.stroke();
    }
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = 8;
    return t;
  }

  /* ---------- bamboo textures + building blocks ---------- */
  function mkCanvasTex(w, h, fn) {
    const cv = document.createElement("canvas");
    cv.width = w;
    cv.height = h;
    fn(cv.getContext("2d"), w, h);
    const t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 8;
    return t;
  }
  const SH = mkCanvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#c9922f";
    g.fillRect(0, 0, w, h);
    const cols = ["#e0ad4f", "#d49d3d", "#e8bd62", "#cf9738"];
    g.strokeStyle = "#8a5f1e";
    g.lineWidth = 1.6;
    for (let r = 0; r < 9; r++)
      for (let c = -1; c < 9; c++) {
        const x = c * 16 + (r % 2) * 8,
          y = r * 14;
        g.fillStyle = cols[(r * 3 + c + 9) % 4];
        g.beginPath();
        g.arc(x + 8, y, 10, 0, Math.PI);
        g.closePath();
        g.fill();
        g.stroke();
      }
  });
  const SLAT = mkCanvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#d8b06a";
    g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 16) {
      g.fillStyle = (x / 16) % 2 ? "#e0bb7a" : "#d1a65c";
      g.fillRect(x, 0, 15, h);
      g.fillStyle = "#9a6f2a";
      g.fillRect(x + 15, 0, 1, h);
    }
    g.fillStyle = "rgba(138,95,30,.35)";
    for (let y = 20; y < h; y += 56) g.fillRect(0, y, w, 2);
  });
  const shCache = {};
  function shingle(rep, tint = 0xffffff) {
    const k = rep.join() + tint;
    if (shCache[k]) return shCache[k];
    const t = SH.clone();
    t.repeat.set(rep[0], rep[1]);
    t.needsUpdate = true;
    return (shCache[k] = new THREE.MeshStandardMaterial({
      map: t,
      color: tint,
      roughness: 0.9,
      side: THREE.DoubleSide,
    }));
  }
  function slatBox(p, w, h, d, x, y, z) {
    const t = SLAT.clone();
    t.repeat.set(Math.max(w, d) / 1.6, 1);
    t.needsUpdate = true;
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }),
    );
    m.position.set(x, y + h / 2, z);
    m.castShadow = m.receiveShadow = true;
    p.add(m);
    return m;
  }
  function link(p, ax, ay, az, bx, by, bz, r, c, s = 8) {
    const A = new THREE.Vector3(ax, ay, az),
      B = new THREE.Vector3(bx, by, bz);
    const L = A.distanceTo(B);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L, s), mat(c));
    m.position.copy(A).add(B).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      B.clone().sub(A).normalize(),
    );
    m.castShadow = m.receiveShadow = true;
    p.add(m);
    return m;
  }
  function pole(p, x, y, z, h, r = 0.16, c = C.bam) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    p.add(g);
    cyl(g, r, r * 1.04, h, c, 0, 0, 0, 8);
    for (let t = 1.2; t < h - 0.3; t += 1.5)
      cyl(g, r * 1.25, r * 1.25, 0.1, C.bamD, 0, t, 0, 8);
    return g;
  }
  function ringTube(p, rx, rz, y, r, c, cx = 0, cz = 0) {
    const pts = [];
    for (let k = 0; k < 32; k++) {
      const a = (k / 32) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(cx + Math.cos(a) * rx, y, cz + Math.sin(a) * rz),
      );
    }
    const m = new THREE.Mesh(
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(pts, true),
        64,
        r,
        6,
        true,
      ),
      mat(c),
    );
    m.castShadow = true;
    p.add(m);
    return m;
  }
  function archTube(p, span, h, r, c, x, y, z, ry = 0) {
    const pts = [];
    for (let k = 0; k <= 16; k++) {
      const a = (k / 16) * Math.PI;
      pts.push(new THREE.Vector3((Math.cos(a) * span) / 2, Math.sin(a) * h, 0));
    }
    const m = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 32, r, 6, false),
      mat(c),
    );
    m.position.set(x, y, z);
    m.rotation.y = ry;
    m.castShadow = true;
    p.add(m);
    return m;
  }
  function dome(p, rx, ry, rz, x, y, z, o = {}) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    p.add(g);
    const phi0 = o.phi0 ?? 0,
      phiL = o.phiL ?? Math.PI * 2;
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(1, 36, 16, phi0, phiL, 0, Math.PI / 2),
      shingle(o.rep || [8, 3], o.tint),
    );
    m.scale.set(rx, ry, rz);
    m.castShadow = m.receiveShadow = true;
    g.add(m);
    if (o.ribs !== false) {
      const rp0 = o.rp0 ?? phi0,
        rpL = o.rpL ?? phiL,
        full = rpL >= Math.PI * 2 - 0.01,
        n = full ? 12 : Math.max(3, Math.round((11 * rpL) / (Math.PI * 2)) + 1);
      for (let k = 0; k < n; k++) {
        const a = rp0 + (full ? k / n : k / (n - 1)) * rpL,
          pts = [];
        for (let j = 0; j <= 12; j++) {
          const th = ((j / 12) * Math.PI) / 2;
          pts.push(
            new THREE.Vector3(
              -Math.cos(a) * Math.sin(th) * rx * 1.02,
              Math.cos(th) * ry * 1.02,
              Math.sin(a) * Math.sin(th) * rz * 1.02,
            ),
          );
        }
        const t = new THREE.Mesh(
          new THREE.TubeGeometry(
            new THREE.CatmullRomCurve3(pts),
            20,
            0.09,
            6,
            false,
          ),
          mat(C.bamD),
        );
        t.castShadow = true;
        g.add(t);
      }
      [0.35, 0.75, 1.15].forEach((th) => {
        const rr = Math.sin(th),
          yy = Math.cos(th) * ry * 1.02;
        if (full) ringTube(g, rx * rr * 1.02, rz * rr * 1.02, yy, 0.08, C.bamD);
        else {
          const pts = [];
          for (let j = 0; j <= 14; j++) {
            const a = rp0 + (j / 14) * rpL;
            pts.push(
              new THREE.Vector3(
                -Math.cos(a) * rx * rr * 1.02,
                yy,
                Math.sin(a) * rz * rr * 1.02,
              ),
            );
          }
          const t = new THREE.Mesh(
            new THREE.TubeGeometry(
              new THREE.CatmullRomCurve3(pts),
              24,
              0.08,
              6,
              false,
            ),
            mat(C.bamD),
          );
          g.add(t);
        }
      });
    }
    return g;
  }
  function waveRoof(p, w, d, x, y, z, amp = 0.6) {
    const H = (X, Z) =>
      amp * (Math.sin(X * 0.7) + Math.cos(Z * 0.9) * 0.8) -
      ((X / (w / 2)) ** 2 + (Z / (d / 2)) ** 2) * 0.5;
    const geo = new THREE.PlaneGeometry(w, d, 36, 26);
    geo.rotateX(-Math.PI / 2);
    const ps = geo.attributes.position;
    for (let i = 0; i < ps.count; i++) ps.setY(i, H(ps.getX(i), ps.getZ(i)));
    geo.computeVertexNormals();
    const t = SH.clone();
    t.repeat.set(w / 1.8, d / 1.8);
    t.needsUpdate = true;
    const m = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        map: t,
        roughness: 0.9,
        side: THREE.DoubleSide,
      }),
    );
    m.position.set(x, y, z);
    m.castShadow = m.receiveShadow = true;
    p.add(m);
    [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ].forEach((c) => {
      const X = c[0] * (w / 2 - 0.6),
        Z = c[1] * (d / 2 - 0.6);
      pole(p, x + X, 0.15, z + Z, y + H(X, Z) - 0.1, 0.18);
    });
    return m;
  }
  function clump(p, x, z, n = 7, s = 1) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(s);
    p.add(g);
    for (let k = 0; k < n; k++) {
      const a = k * 2.4,
        r = 0.35 + ((k * 37) % 10) * 0.09,
        h = 7 + ((k * 53) % 7) * 0.7,
        bx = Math.cos(a),
        bz = Math.sin(a);
      link(
        g,
        bx * r * 0.5,
        0,
        bz * r * 0.5,
        bx * (r + 1.1),
        h,
        bz * (r + 1.1),
        0.14,
        C.gb,
      );
      const lf = sph(g, 1, C.green, bx * (r + 1.1), h, bz * (r + 1.1));
      lf.scale.set(1.4, 0.4, 1.4);
    }
  }
  function tree(p, x, z, s = 1) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(s);
    p.add(g);
    cyl(g, 0.18, 0.25, 2.4, 0x8a6a4f, 0, 0, 0, 8);
    sph(g, 1.2, C.green, 0, 3.2, 0);
    sph(g, 0.9, C.green2, 0.6, 4, 0.2);
    sph(g, 0.8, C.green, -0.6, 4.2, -0.2);
  }
  function plant(p, x, z) {
    box(p, 0.9, 0.7, 0.9, C.white, x, 0, z);
    sph(p, 0.7, C.green, x, 1.3, z);
  }
  function stool(p, x, z, c = C.bam2) {
    cyl(p, 0.6, 0.6, 0.18, c, x, 0.85, z, 16);
    [
      [-0.35, -0.25],
      [0.35, -0.25],
      [0, 0.4],
    ].forEach((l) => pole(p, x + l[0], 0, z + l[1], 0.9, 0.06, C.bamD));
  }

  const actors = [];
  function person(p, x, z, o = {}) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = o.ry || 0;
    p.add(g);
    const shirt = o.shirt ?? C.white,
      pants = o.pants ?? 0x4b4a5a,
      skin = o.skin ?? 0xf1c7a3,
      hair = o.hair ?? 0x2a1f1a;
    let legs = [];
    if (o.sit) {
      box(g, 0.8, 0.4, 1.2, pants, 0, 0.95, 0.5);
      cyl(g, 0.18, 0.18, 1, pants, -0.25, 0, 1.0, 10);
      cyl(g, 0.18, 0.18, 1, pants, 0.25, 0, 1.0, 10);
      cyl(g, 0.48, 0.58, 1.5, shirt, 0, 1.25, 0);
      sph(g, 0.46, skin, 0, 3.2, 0);
      const h = sph(g, 0.5, hair, 0, 3.36, -0.12);
      h.scale.set(1, 0.8, 1);
      box(g, 0.28, 1.1, 0.28, shirt, -0.72, 1.35, 0.15);
      box(g, 0.28, 1.1, 0.28, shirt, 0.72, 1.35, 0.15);
    } else {
      const lg = new THREE.Group();
      lg.position.y = 1.55;
      g.add(lg);
      const mk = (x) => {
        const pv = new THREE.Group();
        pv.position.set(x, 0, 0);
        lg.add(pv);
        add(pv, new THREE.BoxGeometry(0.38, 1.55, 0.42), pants, 0, -0.78, 0);
        return pv;
      };
      legs = [mk(-0.24), mk(0.24)];
      cyl(g, 0.48, 0.6, 1.7, shirt, 0, 1.5, 0);
      sph(g, 0.47, skin, 0, 3.5, 0);
      const h = sph(g, 0.51, hair, 0, 3.66, -0.12);
      h.scale.set(1, 0.8, 1);
      const mkA = (x) => {
        const a = new THREE.Group();
        a.position.set(x, 2.95, 0);
        g.add(a);
        add(a, new THREE.BoxGeometry(0.28, 1.2, 0.28), shirt, 0, -0.6, 0);
        return a;
      };
      legs.arms = [mkA(-0.72), mkA(0.72)];
    }
    const a = {
      g,
      legs,
      ph: Math.random() * 6.28,
      walk: !!o.walk,
      base: g.position.y,
    };
    actors.push(a);
    return a;
  }
  function chair(p, x, z, ry = 0, c = C.bam) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = ry;
    p.add(g);
    box(g, 1.5, 0.35, 1.5, c, 0, 0.9, 0);
    box(g, 1.5, 1.2, 0.3, c, 0, 1.2, -0.7);
    [
      [-0.55, 0.5],
      [0.55, 0.5],
      [-0.55, -0.5],
      [0.55, -0.5],
    ].forEach((l) => cyl(g, 0.08, 0.08, 0.9, C.bamD, l[0], 0, l[1], 6));
    return g;
  }
  function monitor(p, x, y, z, ry = 0) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = ry;
    p.add(g);
    box(g, 0.2, 0.5, 0.2, C.dark, 0, 0, 0);
    box(g, 1.5, 0.95, 0.12, C.dark, 0, 0.45, 0);
    box(g, 1.3, 0.75, 0.05, 0x9cc4d8, 0, 0.55, 0.07);
  }
  function counter(p, x, z, w, d, top = C.wood, body = C.cream) {
    box(p, w, 1.5, d, body, x, 0, z);
    box(p, w + 0.3, 0.22, d + 0.3, top, x, 1.5, z);
  }

  /* a work area: bamboo-slat floor deck with woven back and left walls, doorway on the patient path */
  function deck(p, w, d, label) {
    const hx = w / 2,
      hz = d / 2,
      DZ = 2.6,
      GAP = 1.5,
      WH = 4.4;
    box(p, w, 0.15, d, C.floor, 0, 0, 0);
    slatBox(p, w, WH, 0.5, 0, 0.15, -hz);
    const z0 = -hz,
      z1 = DZ - GAP,
      z2 = DZ + GAP,
      z3 = hz;
    slatBox(p, 0.5, WH, z1 - z0, -hx, 0.15, (z0 + z1) / 2);
    slatBox(p, 0.5, WH, z3 - z2, -hx, 0.15, (z2 + z3) / 2);
    box(p, w + 0.1, 0.4, 0.7, C.navy, 0, WH + 0.15, -hz);
    box(p, 0.7, 0.4, d + 0.1, C.navy, -hx, WH + 0.15, 0);
    box(p, w, 0.25, 0.3, C.gold, 0, 0, hz);
    box(p, 0.3, 0.25, d, C.gold, hx, 0, 0);
    pole(p, -hx, 0.15, -hz, 5.6, 0.24);
    pole(p, hx, 0.15, -hz, 5.6, 0.24);
    pole(p, -hx, 0.15, z1 - 0.1, 4.9, 0.2);
    pole(p, -hx, 0.15, z2 + 0.1, 4.9, 0.2);
    if (label) {
      const t = tex(
        [{ t: label, y: 40 }],
        512,
        80,
        "#14304f",
        "#d6b273",
        '700 34px "Bricolage Grotesque",sans-serif',
      );
      sign(p, t, 6.4, 1, -hx + 4.6, 3.3, -hz + 0.27);
    }
  }

  const world = new THREE.Group();
  scene.add(world);
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(600, 600),
    new THREE.MeshStandardMaterial({ color: 0xe3d7bd, roughness: 1 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  const grid = new THREE.GridHelper(600, 150, 0xdccfb2, 0xe5d9c0);
  grid.position.y = 0.01;
  grid.material.transparent = true;
  grid.material.opacity = 0.55;
  scene.add(grid);

  const SX = (i) => i * 30;
  const stations = [];
  for (let i = 0; i < 6; i++) {
    const g = new THREE.Group();
    g.position.set(SX(i), 0, 0);
    world.add(g);
    stations.push(g);
  }

  /* S0 studio: dome pavilion, bamboo spire, logo sign */
  (function () {
    const g = stations[0];
    box(g, 70, 0.12, 5.6, C.lane, 0, 0, 11.5);
    for (let k = -15; k < 15; k++)
      box(g, 1.2, 0.14, 0.2, 0xf0e4c8, k * 2.3, 0, 13.7);
    const pond = new THREE.Mesh(new THREE.CircleGeometry(3.4, 32), waterMat);
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(-15, 0.08, 2);
    g.add(pond);
    const D = new THREE.Group();
    D.position.set(-1, 0, -1);
    g.add(D);
    cyl(D, 8.6, 8.8, 0.5, C.wood, 0, 0, 0, 48);
    cyl(D, 7.3, 7.3, 0.12, C.floor, 0, 0.5, 0, 48);
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      pole(D, Math.cos(a) * 7.6, 0.5, Math.sin(a) * 7.6, 3.8, 0.2);
    }
    ringTube(D, 7.6, 7.6, 4.25, 0.17, C.bamD);
    dome(D, 8.2, 5.8, 8.2, 0, 4.25, 0, { rep: [10, 3] });
    sph(D, 0.55, C.bam2, 0, 10.3, 0);
    [
      [-2.6, -1.2],
      [2.4, -2.6],
      [1.8, 2.6],
    ].forEach((t) => {
      cyl(D, 0.9, 0.9, 0.1, C.cream, t[0], 0.62, t[1], 16);
      cyl(D, 0.08, 0.08, 0.8, C.bamD, t[0], 0.62, t[1], 6);
    });
    stool(D, -1.2, -1.2);
    stool(D, -4, -1.2);
    person(D, -2.6, -2.6, { sit: true, shirt: C.bam2, ry: 0 });
    /* spire */
    const R0 = 3.6,
      H = 14,
      SXc = 10,
      SZc = -6;
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      link(
        g,
        SXc + Math.cos(a) * R0,
        0,
        SZc + Math.sin(a) * R0,
        SXc + Math.cos(a) * 0.35,
        H,
        SZc + Math.sin(a) * 0.35,
        0.17,
        C.bam,
      );
    }
    [3.5, 7.5, 11].forEach((y) => {
      const r = R0 + ((0.35 - R0) * y) / H;
      ringTube(g, r, r, y, 0.1, C.bamD, SXc, SZc);
    });
    sph(g, 0.65, C.bam2, SXc, H + 0.45, SZc);
    /* logo sign */
    pole(g, 10.9, 0, 7.6, 4.9, 0.2);
    pole(g, 15.5, 0, 7.6, 4.9, 0.2);
    box(g, 5.4, 4.4, 0.3, C.navy, 13.2, 1.5, 7.6);
    sign(g, logoPlate(), 4.8, 4.1, 13.2, 3.7, 7.77);
    /* pickup carrying poles */
    const am = new THREE.Group();
    am.position.set(5, 0, 12.8);
    g.add(am);
    box(am, 2, 1.8, 2.2, C.navy, 3.4, 0.55, 0);
    box(am, 4.6, 0.4, 2.3, C.cream, -0.3, 0.6, 0);
    for (let k = 0; k < 4; k++)
      link(
        am,
        -2.9,
        1.25 + (k % 2) * 0.32,
        -0.7 + k * 0.45,
        2.1,
        1.25 + (k % 2) * 0.32,
        -0.7 + k * 0.45,
        0.16,
        C.bam,
      );
    [-1.6, 1.1].forEach((x) => {
      const w = cyl(am, 0.55, 0.55, 0.35, C.dark, x, 0, 1.1, 12);
      w.rotation.x = Math.PI / 2;
      w.position.y = 0.55;
    });
    clump(g, -16, -6, 8, 1.1);
    clump(g, -15, 8, 6, 0.9);
    clump(g, 18, -1, 7, 1.2);
    clump(g, 21, 6, 5, 0.9);
    clump(g, 3, -13, 6, 1);
    tree(g, -9.5, -12, 1.1);
    tree(g, 22, -10, 1.2);
    person(g, -13, 4.5, { shirt: C.navy, hair: 0x241a15 });
  })();

  /* S1 bahan: grove, curing tank, stacked poles */
  (function () {
    const g = stations[1];
    deck(g, 22, 18, "BAHAN & PENGAWETAN");
    clump(g, -8.6, -6.2, 8, 0.85);
    for (let l = 0; l < 3; l++)
      for (let k = 0; k < 4; k++)
        link(
          g,
          1.2,
          0.62 + l * 0.34,
          -7.8 + k * 0.36 + (l % 2) * 0.18,
          9.6,
          0.62 + l * 0.34,
          -7.8 + k * 0.36 + (l % 2) * 0.18,
          0.17,
          C.bam,
        );
    box(g, 0.5, 0.6, 2, C.wood, 2.5, 0.15, -7.2);
    box(g, 0.5, 0.6, 2, C.wood, 8.2, 0.15, -7.2);
    box(g, 7.6, 1.3, 3.6, C.cream, -2.8, 0.15, -3.6);
    const w = new THREE.Mesh(new THREE.BoxGeometry(7, 0.1, 3), waterMat);
    w.position.set(-2.8, 1.4, -3.6);
    g.add(w);
    for (let k = 0; k < 4; k++)
      link(
        g,
        -5.8,
        1.46,
        -4.7 + k * 0.7,
        -0.2,
        1.46,
        -4.7 + k * 0.7,
        0.15,
        C.bam,
      );
    const bt = tex(
      [
        {
          t: "BAMBU PILIHAN",
          x: 20,
          y: 60,
          font: '800 32px "Bricolage Grotesque",sans-serif',
          fg: "#d6b273",
        },
        {
          t: "diawetkan sebelum dipakai",
          x: 22,
          y: 108,
          font: '500 19px "Figtree",sans-serif',
          fg: "#f4ecdc",
        },
      ],
      320,
      150,
      "#14304f",
      "#fff",
      "",
    );
    sign(g, bt, 3.6, 1.7, 5.5, 2.5, -8.67);
    box(g, 0.3, 1.4, 1.4, C.wood, 5.4, 0.15, -1.4);
    box(g, 0.3, 1.4, 1.4, C.wood, 8, 0.15, -1.4);
    link(g, 4.8, 1.7, -1.4, 8.6, 1.8, -1.4, 0.17, C.bam);
    person(g, 6.8, -0.1, { shirt: C.bam2, hair: 0x3a2a22 });
    person(g, -1, -0.6, { shirt: C.navy, hair: 0x1f1713 });
    link(g, -1.6, 1.9, -0.2, 2.2, 3.0, -2.2, 0.15, C.bam);
    stool(g, 8.8, 5.6);
    person(g, 8.8, 5.0, { sit: true, shirt: C.white, ry: Math.PI });
    plant(g, 9.4, -4.2);
    plant(g, -9.4, 7.6);
  })();

  /* S2 desain: drafting table, model, sketch board */
  (function () {
    const g = stations[2];
    deck(g, 22, 18, "RUANG DESAIN");
    box(g, 5.6, 0.22, 2.6, C.wood, 3, 1.55, -5);
    [-2.5, 2.5].forEach((dx) =>
      [-1, 1].forEach((dz) => pole(g, 3 + dx, 0, -5 + dz * 1, 1.55, 0.1)),
    );
    const pp = new THREE.Mesh(
      new THREE.PlaneGeometry(2.6, 1.7),
      new THREE.MeshBasicMaterial({ map: sketchTex(512, 336) }),
    );
    pp.rotation.x = -Math.PI / 2;
    pp.position.set(2.2, 1.8, -5);
    g.add(pp);
    dome(g, 0.9, 0.7, 0.9, 4.8, 1.77, -5, { rep: [3, 1], ribs: false });
    monitor(g, 5.4, 1.77, -5.8, Math.PI);
    box(g, 5.4, 3.2, 0.1, C.wood, -4.2, 0.8, -8.7);
    sign(g, sketchTex(600, 360), 4.9, 2.9, -4.2, 2.4, -8.6);
    person(g, -4.2, -6.5, { shirt: C.navy, hair: 0x241a15 });
    chair(g, 3, -1.5, Math.PI, C.bam2);
    person(g, 3, -2.1, {
      sit: true,
      shirt: C.bam,
      hair: 0x3a2a22,
      ry: Math.PI,
    });
    pole(g, -8.4, 0.15, -3, 3.4, 0.07, C.bamD);
    dome(g, 1, 0.8, 1, -8.4, 3.5, -3, { rep: [4, 2], ribs: false });
    cyl(g, 0.55, 0.55, 0.9, C.wood, 8.4, 0.15, 5, 14);
    [0, 0.3, 0.6].forEach((o) =>
      cyl(g, 0.1, 0.1, 1.7, C.cream, 8.1 + o, 0.9, 5 + o * 0.2, 8),
    );
    plant(g, 9.4, -6.8);
    plant(g, -9.4, 7.6);
    clump(g, 9.4, -2.2, 5, 0.7);
  })();

  /* S3 bengkel: bending jig, arched ribs, shingle stack */
  (function () {
    const g = stations[3];
    deck(g, 22, 18, "BENGKEL FABRIKASI");
    for (let k = 0; k < 4; k++)
      archTube(g, 5, 4.2, 0.12, C.bam, 5.8, 0.15, -7.5 + k * 1.15);
    [
      [0, 0.15],
      [Math.PI / 4, 0],
      [(Math.PI * 3) / 4, 0],
    ].forEach((a) => {
      const X = 5.8 + Math.cos(a[0]) * 2.5,
        Y = 0.15 + Math.sin(a[0]) * 4.2;
      link(g, X, Y, -7.5, X, Y, -4.05, 0.09, C.bamD);
    });
    pole(g, -1.4, 0.15, -5.5, 3.2, 0.18);
    pole(g, 2.2, 0.15, -5.5, 3.2, 0.18);
    link(g, -0.4, 2.2, -3.3, 2.6, 3.2, -5.6, 0.15, C.bam);
    person(g, -1.2, -3.3, { shirt: C.bam2, hair: 0x1f1713 });
    box(g, 2.4, 1.4, 1.4, C.cream, -8.4, 0.15, -5.8);
    cyl(g, 0.8, 0.8, 0.08, C.grey, -8.4, 1.6, -5.8, 24);
    for (let l = 0; l < 6; l++)
      box(g, 2.6, 0.12, 1.6, C.bam2, -4.4, 0.15 + l * 0.13, -6.6);
    counter(g, -6, 6.2, 6, 1.5, C.wood, C.cream);
    [0, 1, 2].forEach((i) =>
      box(
        g,
        0.8,
        0.3,
        0.5,
        [C.navy, C.bam, C.cream][i],
        -7.4 + i * 1.2,
        1.72,
        6.2,
      ),
    );
    person(g, -4.6, 4.6, { shirt: C.white, hair: 0x241a15 });
    for (let k = 0; k < 6; k++)
      link(
        g,
        8.5 + k * 0.35,
        0.15,
        -6.6,
        8.5 + k * 0.35,
        5.2,
        -8.3,
        0.16,
        C.bam,
      );
    chair(g, 8, 6, Math.PI, C.bam);
    person(g, 8, 5.4, { sit: true, shirt: C.navy, ry: Math.PI });
    plant(g, 9.4, -3.6);
    plant(g, -9.4, -2.6);
  })();

  /* S4 lokasi: dome frame under construction, scaffold */
  (function () {
    const g = stations[4];
    deck(g, 22, 18, "LOKASI PROYEK");
    const cx = 1,
      cz = -4.2;
    cyl(g, 5.6, 5.8, 0.35, C.wood, cx, 0.15, cz, 40);
    dome(g, 5.2, 4.8, 5.2, cx, 0.5, cz, {
      phi0: 0,
      phiL: Math.PI * 0.5,
      rep: [4, 3],
      rp0: 0,
      rpL: Math.PI * 2,
    });
    [
      [6.2, -2.8],
      [9.2, -2.8],
      [6.2, -0.6],
      [9.2, -0.6],
    ].forEach((c) => pole(g, c[0], 0.15, c[1], 5, 0.12, C.bamD));
    [2.4, 4.5].forEach((y) => {
      link(g, 6.2, y, -2.8, 9.2, y, -2.8, 0.1, C.bam);
      link(g, 6.2, y, -0.6, 9.2, y, -0.6, 0.1, C.bam);
      link(g, 6.2, y, -2.8, 6.2, y, -0.6, 0.1, C.bam);
      link(g, 9.2, y, -2.8, 9.2, y, -0.6, 0.1, C.bam);
    });
    box(g, 3.4, 0.15, 2.6, C.wood, 7.7, 3, -1.7);
    const up = new THREE.Group();
    up.position.y = 3.15;
    g.add(up);
    person(up, 7.6, -1.9, { shirt: C.bam2, hair: 0x1f1713 });
    link(g, 9.8, 0.15, -0.3, 10.1, 4, -1.6, 0.09, C.bamD);
    link(g, 10.5, 0.15, -0.3, 10.8, 4, -1.6, 0.09, C.bamD);
    for (let k = 1; k < 7; k++) {
      const f = k / 7.5,
        y = 0.15 + f * 3.85,
        z = -0.3 - f * 1.3;
      link(g, 9.84 + 0.3 * f, y, z, 10.54 + 0.3 * f, y, z, 0.06, C.bam);
    }
    [
      [3, 0],
      [2, 0.45],
      [1, 0.9],
    ].forEach((r, ri) => {
      for (let k = 0; k < r[0]; k++)
        link(
          g,
          -10,
          0.5 + ri * 0.33,
          -6.8 + k * 0.36 + r[1],
          -4,
          0.5 + ri * 0.33,
          -6.8 + k * 0.36 + r[1],
          0.17,
          C.bam,
        );
    });
    for (let l = 0; l < 5; l++)
      box(g, 2.4, 0.12, 1.5, C.bam2, -8, 0.15 + l * 0.13, -0.6);
    person(g, -3, -1.6, { shirt: C.white, hair: 0x241a15 });
    box(g, 0.9, 0.05, 0.6, 0xeee4cc, -2, 1.5, -1.0);
    person(g, 4.6, -0.4, { shirt: C.navy, hair: 0x3a2a22 });
    clump(g, 9.4, -7.2, 5, 0.7);
    plant(g, -9.4, 7.6);
  })();

  /* S5 hasil: finished pods, pool, wave-roof terrace */
  (function () {
    const g = stations[5];
    deck(g, 22, 18, "SERAH TERIMA");
    function pod(x, z) {
      const q = new THREE.Group();
      q.position.set(x, 0, z);
      g.add(q);
      cyl(q, 3.4, 3.5, 0.4, C.wood, 0, 0.15, 0, 32);
      dome(q, 3.3, 3.1, 2.9, 0, 0.55, 0, { rep: [6, 2] });
      const dr = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 2.1),
        new THREE.MeshBasicMaterial({ color: 0xf0c46a }),
      );
      dr.position.set(0, 1.6, 2.82);
      q.add(dr);
      box(q, 1.9, 0.2, 0.3, C.navy, 0, 2.75, 2.7);
      box(q, 0.2, 2.3, 0.3, C.navy, -0.9, 0.6, 2.7);
      box(q, 0.2, 2.3, 0.3, C.navy, 0.9, 0.6, 2.7);
    }
    pod(-4, -3.8);
    pod(5.4, -3.8);
    box(g, 9.8, 0.35, 0.3, C.cream, -3.2, 0.15, 5.1);
    box(g, 9.8, 0.35, 0.3, C.cream, -3.2, 0.15, 8.7);
    box(g, 0.3, 0.35, 3.9, C.cream, -8.1, 0.15, 6.9);
    box(g, 0.3, 0.35, 3.9, C.cream, 1.7, 0.15, 6.9);
    const w = new THREE.Mesh(new THREE.BoxGeometry(9.2, 0.12, 3.4), waterMat);
    w.position.set(-3.2, 0.38, 6.9);
    g.add(w);
    box(g, 0.9, 0.3, 2, C.cream, -7, 0.15, 4.3);
    box(g, 0.9, 0.3, 2, C.cream, -5.6, 0.15, 4.3);
    waveRoof(g, 6.2, 3.8, 7.2, 4.6, 6.8, 0.55);
    cyl(g, 0.7, 0.7, 0.2, C.cream, 2.9, 0.9, 6.6, 16);
    cyl(g, 0.1, 0.1, 0.9, C.bamD, 2.9, 0.15, 6.6, 6);
    tree(g, -9.6, 8, 0.9);
    clump(g, 9.6, -8, 5, 0.7);
    plant(g, 9.4, 1.2);
    const dt = tex(
      [
        {
          t: "Terima kasih",
          x: 20,
          y: 44,
          font: '800 34px "Bricolage Grotesque",sans-serif',
          fg: "#d6b273",
        },
        {
          t: "Sampai jumpa di Lombok",
          x: 22,
          y: 92,
          font: '500 22px "Figtree",sans-serif',
          fg: "#f4ecdc",
        },
      ],
      420,
      130,
      "#14304f",
      "#fff",
      "",
    );
    sign(g, dt, 4.2, 1.3, 0.6, 3.9, -8.67);
    person(g, 6.5, 7.6, { shirt: C.bam2, hair: 0x6a4a2a });
    person(g, -0.6, -0.1, { shirt: C.white, hair: 0x241a15 });
  })();

  /* ---------- guide path (axis-aligned segments) ---------- */
  const RZ = 2.6,
    HZ = 9.4;
  const P = [
    [SX(0) + 1, HZ],
    [SX(1) - 10, HZ],
    [SX(1) - 10, RZ],
  ];
  for (let i = 1; i < 5; i++) {
    P.push([SX(i) + 10, RZ]);
    P.push([SX(i + 1) - 10, RZ]);
  }
  P.push([SX(5) + 8, RZ]);
  const segs = [];
  let total = 0;
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i],
      b = P[i + 1];
    const dx = b[0] - a[0],
      dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    if (len < 0.01) continue;
    const horiz = Math.abs(dx) > Math.abs(dz);
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(
        horiz ? len + 0.5 : 0.5,
        0.06,
        horiz ? 0.5 : len + 0.5,
      ),
      mat(C.path),
    );
    m.receiveShadow = true;
    scene.add(m);
    segs.push({
      m,
      a,
      b,
      horiz,
      len,
      start: total,
      sx: Math.sign(dx),
      sz: Math.sign(dz),
    });
    total += len;
  }
  function pathAt(d) {
    d = Math.max(0, Math.min(total, d));
    for (const s of segs) {
      if (d <= s.start + s.len + 1e-6) {
        const f = (d - s.start) / s.len;
        return [
          s.a[0] + (s.b[0] - s.a[0]) * f,
          s.a[1] + (s.b[1] - s.a[1]) * f,
          Math.atan2(s.b[0] - s.a[0], s.b[1] - s.a[1]),
        ];
      }
    }
    const s = segs[segs.length - 1];
    return [s.b[0], s.b[1], Math.atan2(s.b[0] - s.a[0], s.b[1] - s.a[1])];
  }
  function setPathReveal(d) {
    segs.forEach((s) => {
      const f = Math.max(0, Math.min(1, (d - s.start) / s.len));
      s.m.visible = f > 0;
      if (!s.m.visible) return;
      const run = s.len * f;
      const full = s.len + 0.5;
      if (s.horiz) {
        s.m.scale.set((run + 0.5) / full, 1, 1);
        s.m.position.set(s.a[0] + (s.sx * run) / 2, 0.2, s.a[1]);
      } else {
        s.m.scale.set(1, 1, (run + 0.5) / full);
        s.m.position.set(s.a[0], 0.2, s.a[1] + (s.sz * run) / 2);
      }
    });
  }
  const STOP = [0, 1, -3, 3, -1, 1];
  const stationD = [0];
  for (let i = 1; i < 6; i++) {
    const tx = SX(i) + STOP[i];
    let best = 0,
      bd = 1e9;
    for (let d = 0; d <= total; d += 0.2) {
      const p = pathAt(d);
      const e = Math.abs(p[0] - tx) + Math.abs(p[1] - RZ);
      if (e < bd) {
        bd = e;
        best = d;
      }
    }
    stationD.push(best);
  }

  const patient = person(scene, 0, 0, {
    shirt: C.navy,
    walk: true,
    hair: 0x1f1713,
  });

  /* lights */
  scene.add(new THREE.HemisphereLight(0xfff3e0, 0xe0d1b4, 0.85));
  const sun = new THREE.DirectionalLight(0xffefd6, 0.55);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, {
    left: -42,
    right: 42,
    top: 42,
    bottom: -42,
    near: 1,
    far: 200,
  });
  sun.shadow.bias = -0.0008;
  scene.add(sun, sun.target);

  /* camera */
  const cam = new THREE.OrthographicCamera(-10, 10, 10, -10, -200, 400);
  const tgt = new THREE.Vector3(),
    camOff = new THREE.Vector3(1, 0.92, 1).normalize().multiplyScalar(90);
  const SIZE = [36, 28, 28, 28, 28, 28];
  const FX = [SX(0) + 0, SX(1), SX(2), SX(3), SX(4), SX(5)],
    FZ = [3.5, 0, 0, 0, 0, 0],
    FY = [3, 0, 0, 0, 0, 0];
  const view = { aspect: 1, size: 36, hh: 18, hw: 18 };
  function applyCam() {
    const a = view.aspect;
    let hh = view.size / 2;
    if (a < 0.85) hh = (hh / a) * 0.6;
    const hw = hh * a;
    view.hh = hh;
    view.hw = hw;
    cam.left = -hw;
    cam.right = hw;
    cam.top = hh;
    cam.bottom = -hh;
    cam.updateProjectionMatrix();
  }
  function resize() {
    renderer.setSize(innerWidth, innerHeight, false);
    view.aspect = innerWidth / innerHeight;
    applyCam();
  }
  addEventListener("resize", resize);
  resize();

  /* scroll state */
  let cur = 0,
    tgtU = 0,
    lastIdx = -1,
    prevD = 0;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function readScroll() {
    const r = journey.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, -r.top / Math.max(1, journeyRange())));
    tgtU = p * 5;
  }
  addEventListener("scroll", readScroll, { passive: true });
  readScroll();
  cur = tgtU;
  const sm = (t) => t * t * (3 - 2 * t);
  const ease = (f) => sm(Math.max(0, Math.min(1, (f - 0.2) / 0.6)));
  const hand = document.getElementById("hand");
  const clock = new THREE.Clock();
  const right = new THREE.Vector3(1, 0, -1).normalize(),
    fwd = new THREE.Vector3(1, 0, 1).normalize();
  let faceY = 0;

  function frame() {
    const dt = Math.min(clock.getDelta(), 0.05),
      T = clock.elapsedTime;
    cur += (tgtU - cur) * (reduce ? 1 : Math.min(1, dt * 5));
    const u = cur,
      i0 = Math.min(4, Math.floor(u)),
      f = ease(u - i0);
    view.size = SIZE[i0] + (SIZE[i0 + 1] - SIZE[i0]) * f;
    applyCam();
    tgt.set(
      FX[i0] + (FX[i0 + 1] - FX[i0]) * f,
      FY[i0] + (FY[i0 + 1] - FY[i0]) * f,
      FZ[i0] + (FZ[i0 + 1] - FZ[i0]) * f,
    );
    if (view.aspect < 0.85) tgt.addScaledVector(fwd, view.hh * 0.62);
    else tgt.addScaledVector(right, -view.hw * 0.36);
    cam.position.copy(tgt).add(camOff);
    cam.lookAt(tgt);
    sun.position.set(tgt.x - 34, 52, tgt.z + 26);
    sun.target.position.copy(tgt);
    const d = stationD[i0] + (stationD[i0 + 1] - stationD[i0]) * f;
    const pp = pathAt(d);
    const moving = Math.abs(d - prevD) > 0.004;
    prevD = d;
    patient.g.position.x = pp[0];
    patient.g.position.z = pp[1];
    const want = moving ? pp[2] : u < 0.5 ? pp[2] : Math.PI;
    let dy = want - faceY;
    dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    faceY += dy * Math.min(1, dt * 8);
    patient.g.rotation.y = faceY;
    actors.forEach((a) => {
      if (a === patient) {
        const sw = moving ? Math.sin(T * 11) * 0.6 : 0;
        a.legs[0].rotation.x = sw;
        a.legs[1].rotation.x = -sw;
        a.legs.arms[0].rotation.x = -sw * 0.8;
        a.legs.arms[1].rotation.x = sw * 0.8;
        a.g.position.y = moving ? Math.abs(Math.sin(T * 11)) * 0.12 : 0;
        return;
      }
      a.g.position.y = Math.max(0, Math.sin(T * 1.6 + a.ph)) * 0.05;
      if (a.legs.arms) {
        a.legs.arms[0].rotation.x = Math.sin(T * 1.2 + a.ph) * 0.12;
      }
    });
    setPathReveal(d + 2.5);
    const idx = Math.round(u);
    if (idx !== lastIdx) {
      lastIdx = idx;
      stepEls.forEach((s, i) => s.classList.toggle("on", i === idx));
      progBtns.forEach((b, i) => b.classList.toggle("on", i === idx));
      hand.style.opacity = idx === 0 ? 0.85 : 0;
    }
    bars.forEach((b, i) => {
      b.style.width = Math.max(0, Math.min(1, u - i + 1)) * 100 + "%";
    });
    renderer.render(scene, cam);
    requestAnimationFrame(frame);
  }
  frame();
}
(document.fonts && document.fonts.load
  ? Promise.race([
      Promise.all([
        document.fonts.load('800 40px "Bricolage Grotesque"'),
        document.fonts.load('500 20px "Figtree"'),
      ]),
      new Promise((r) => setTimeout(r, 1500)),
    ])
  : Promise.resolve()
)
  .catch(() => {})
  .then(startScene);

/* ---------- ScrollReveal Animations ---------- */
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "36px",
    duration: 850,
    delay: 100,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    reset: false, // Animasi berjalan satu kali saat di-scroll
  });

  // 1. Section Karya (#karya)
  sr.reveal("#karya .sec-h h2", { origin: "left", distance: "28px" });
  sr.reveal("#karya .sec-h p", {
    origin: "right",
    distance: "28px",
    delay: 180,
  });
  sr.reveal("#karya .doc", { interval: 140 }); // Muncul bergantian tiap kartu

  // Section Layanan (#layanan)
  sr.reveal("#layanan .sec-h h2", { origin: "left", distance: "28px" });
  sr.reveal("#layanan .sec-h p", {
    origin: "right",
    distance: "28px",
    delay: 180,
  });
  sr.reveal("#layanan .plan", { interval: 160, distance: "44px" });

  // Section Kenapa Bambu (#material)
  sr.reveal("#material .sec-h h2", { origin: "left", distance: "28px" });
  sr.reveal("#material .sec-h p", {
    origin: "right",
    distance: "28px",
    delay: 180,
  });
  sr.reveal("#material .why .q", { interval: 140 });
  sr.reveal("#material .why .big", {
    origin: "right",
    distance: "36px",
    delay: 350,
  });

  // Section Kontak / Footer (#kontak)
  sr.reveal("#kontak .cta", {
    origin: "bottom",
    distance: "40px",
    duration: 950,
    scale: 0.97,
  });
  sr.reveal("#kontak .fine", {
    origin: "bottom",
    distance: "16px",
    delay: 250,
  });
}
