const THEME_STORAGE_KEY = "bamboo-lab-theme";
const LANGUAGE_STORAGE_KEY = "bamboo-lab-language";
const themeToggle = document.getElementById("theme-toggle");
const languageSelect = document.getElementById("language-select");
const siteControls = document.querySelector(".site-controls");
const SITE_URL = "https://bamboo-lab.vercel.app";
const SEO_METADATA = {
  en: {
    title: "Bamboo Lab Architect | Bamboo Design & Build in Lombok",
    description:
      "Bamboo Lab designs and builds bamboo villas, restaurants, and pavilions in Lombok, Indonesia. Explore custom bamboo architecture from concept to construction.",
    ogDescription:
      "Custom bamboo villas, restaurants, and pavilions designed and built in Lombok, Indonesia.",
    locale: "en_US",
  },
  id: {
    title: "Bamboo Lab Architect | Arsitektur Bambu di Lombok",
    description:
      "Bamboo Lab merancang dan membangun vila, restoran, serta paviliun bambu di Lombok, Indonesia. Kenali layanan desain dan konstruksi bambu kustom dari konsep hingga pembangunan.",
    ogDescription:
      "Vila, restoran, dan paviliun bambu kustom yang dirancang dan dibangun di Lombok, Indonesia.",
    locale: "id_ID",
  },
  ja: {
    title: "Bamboo Lab Architect | ロンボク島の竹建築",
    description:
      "Bamboo Labはインドネシア・ロンボク島で竹のヴィラ、レストラン、パビリオンを設計・施工します。構想から建設まで、オーダーメイドの竹建築をご覧ください。",
    ogDescription:
      "インドネシア・ロンボク島で設計・施工する、オーダーメイドの竹のヴィラ、レストラン、パビリオン。",
    locale: "ja_JP",
  },
};
const LANGUAGE_COPY = {
  id: {
    Language: "Bahasa",
    "Language and appearance settings": "Pengaturan bahasa dan tampilan",
    "Bamboo Lab Architect, home": "Beranda Bamboo Lab Architect",
    "3D illustration of a bamboo project journey by Bamboo Lab":
      "Ilustrasi 3D perjalanan proyek bambu oleh Bamboo Lab",
    "BUILDING TYPE": "JENIS BANGUNAN",
    "YOUR STAGE": "TAHAP ANDA",
    "Start consultation": "Mulai konsultasi",
    "Start consultation →": "Mulai konsultasi →",
    "Switch to dark mode": "Beralih ke mode gelap",
    "Switch to light mode": "Beralih ke mode terang",
    "Project journey steps": "Tahapan perjalanan proyek",
    Dark: "Gelap",
    Light: "Terang",
    Projects: "Proyek",
    Services: "Layanan",
    "Why Bamboo": "Mengapa Bambu",
    Why: "Mengapa",
    Contact: "Kontak",
    Consultation: "Konsultasi",
    Studio: "Studio",
    Materials: "Material",
    Design: "Desain",
    Workshop: "Bengkel",
    Location: "Lokasi",
    Result: "Hasil",
    "Custom design": "Desain kustom",
    "From Bamboo Groves": "Dari Rumpun Bambu",
    "To Living Spaces.": "Menjadi Ruang Hidup.",
    "We design and build bamboo villas, restaurants, and pavilions with signature curved roofs. Follow a single project's journey from materials to handover.":
      "Kami merancang dan membangun vila, restoran, dan paviliun bambu dengan atap lengkung khas. Ikuti perjalanan proyek dari pemilihan material hingga serah terima.",
    "Bamboo villas & pods": "Vila & pod bambu",
    "Restaurants & cafes": "Restoran & kafe",
    "Pavilions & gazebos": "Paviliun & gazebo",
    "Resorts & tourism": "Resor & wisata",
    "Just have an idea": "Baru memiliki ide",
    "Already own land": "Sudah memiliki lahan",
    "Already have drawings": "Sudah memiliki gambar desain",
    Bamboo: "Bambu",
    "Structure & roof": "Struktur & atap",
    "Project base": "Lokasi proyek",
    Custom: "Kustom",
    "Every design": "Setiap desain",
    "Step 1 · Materials": "Langkah 1 · Material",
    "Selected from Groves,": "Dipilih dari Rumpun,",
    "Properly Treated.": "Diawetkan dengan Tepat.",
    "Stems are chosen based on age and species, then treated to resist insects. The right material ensures building longevity.":
      "Bambu dipilih berdasarkan usia dan jenisnya, lalu diawetkan agar tahan serangga. Material yang tepat menjaga bangunan tetap awet.",
    "Material stage": "Tahap material",
    "· workflow example": "· contoh alur kerja",
    "Select mature stems": "Memilih batang yang matang",
    Completed: "Selesai",
    "Preservative soaking": "Perendaman bahan pengawet",
    "Drying process": "Proses pengeringan",
    "In progress": "Sedang berlangsung",
    "Step 2 · Design": "Langkah 2 · Desain",
    "Designed Together,": "Dirancang Bersama,",
    "Visualized Before Building.": "Divisualisasikan Sebelum Dibangun.",
    "Sketches, mockups, and 3D models help you visualize roof shapes, openings, and spaces before a single stem is cut.":
      "Sketsa, maket, dan model 3D membantu Anda membayangkan bentuk atap, bukaan, dan ruang sebelum bambu dipotong.",
    "Brief example": "Contoh rancangan",
    "· restaurant pavilion": "· paviliun restoran",
    SPAN: "BENTANG",
    HEIGHT: "TINGGI",
    ROOF: "ATAP",
    "Bamboo shingle": "Sirap bambu",
    FUNCTION: "FUNGSI",
    Restaurant: "Restoran",
    "Step 3 · Workshop": "Langkah 3 · Bengkel",
    "Assembled in Workshop,": "Dirakit di Bengkel,",
    "Installed Quickly on Site.": "Dipasang Cepat di Lokasi.",
    "Frames are curved, joined, and inspected in the workshop. Prefabricated components are then shipped to the location for assembly.":
      "Rangka dilengkungkan, disambung, dan diperiksa di bengkel. Komponen pracetak kemudian dikirim ke lokasi untuk dirakit.",
    "Frame curving": "Pelengkungan rangka",
    "Joints & dowels": "Sambungan & pasak",
    "Roof shingles": "Sirap atap",
    "Step 4 · Location": "Langkah 4 · Lokasi",
    "Standing on Site,": "Berdiri di Lokasi,",
    "Roofs Begin to Curve.": "Atap Mulai Melengkung.",
    "The team installs the main frame, covers the roof with bamboo shingles, and refines details until ready for occupancy.":
      "Tim memasang rangka utama, menutup atap dengan sirap bambu, dan menyempurnakan detail hingga siap digunakan.",
    Foundation: "Fondasi",
    "Main frame": "Rangka utama",
    "Shingle roof": "Atap sirap",
    Finishing: "Penyelesaian",
    "Project progress example": "Contoh progres proyek",
    "Step 5 · Handover": "Langkah 5 · Serah Terima",
    "Ready to Enjoy,": "Siap Dinikmati,",
    "Blending with the Landscape.": "Menyatu dengan Lanskap.",
    "The building is complete: cool, warm, and harmonious with its surroundings. Starting from your story, we help bring it to life.":
      "Bangunan selesai dengan suasana sejuk, hangat, dan selaras dengan lingkungan. Kami membantu mewujudkan cerita dan ide Anda.",
    "Where to start?": "Mulai dari mana?",
    "Free to ask": "Bebas bertanya",
    "Share land & requirements": "Bagikan lahan & kebutuhan",
    "Step 1": "Langkah 1",
    "Discuss concept & form": "Diskusikan konsep & bentuk",
    "Step 2": "Langkah 2",
    "Design & build plan": "Rencana desain & pembangunan",
    "Step 3": "Langkah 3",
    "Warm, strong,": "Hangat, kuat,",
    "earth-friendly.": "ramah lingkungan.",
    "Skip ↓": "Lewati ↓",
    "Forms Born": "Bentuk Terlahir",
    "From Bamboo.": "Dari Bambu.",
    "Four building types we work on most frequently. Every design is customized to the land and the owner's story.":
      "Empat jenis bangunan yang paling sering kami kerjakan. Setiap desain disesuaikan dengan lahan dan cerita pemiliknya.",
    "Three Ways": "Tiga Cara",
    "To Work Together.": "Untuk Bekerja Sama.",
    "Choose what fits your current stage. Scope and costs are discussed after we understand the project.":
      "Pilih yang sesuai dengan tahap Anda. Lingkup dan biaya dibahas setelah kami memahami proyeknya.",
    Concept: "Konsep",
    "Concept Design": "Desain Konsep",
    "For those who just have an idea or land.": "Untuk Anda yang baru memiliki ide atau lahan.",
    "Needs & land discussion": "Diskusi kebutuhan & lahan",
    "Initial sketches & floor plans": "Sketsa awal & denah",
    "Simple 3D visuals": "Visualisasi 3D sederhana",
    "Bamboo material guidance": "Panduan material bambu",
    Discuss: "Diskusikan",
    "Most complete": "Paling lengkap",
    "Design & Build": "Desain & Bangun",
    "One Team, Until Done": "Satu Tim hingga Selesai",
    "From drawings to a standing building.": "Dari gambar hingga bangunan berdiri.",
    "All Concept Design inclusions": "Semua cakupan Desain Konsep",
    "Working drawings & joint details": "Gambar kerja & detail sambungan",
    "Workshop frame fabrication": "Pembuatan rangka di bengkel",
    "On-site installation & finishing": "Pemasangan & penyelesaian di lokasi",
    "Building handover": "Serah terima bangunan",
    Technical: "Teknis",
    "Details & Supervision": "Detail & Pengawasan",
    "For those who already have a design.": "Untuk Anda yang sudah memiliki desain.",
    "Drawing & structure review": "Tinjauan gambar & struktur",
    "Curved roof details": "Detail atap lengkung",
    "On-site assistance": "Pendampingan di lokasi",
    "Material quality checks": "Pemeriksaan kualitas material",
    "Bamboo.": "Bambu.",
    "Bamboo is more than just aesthetics. There are technical and environmental reasons behind this choice.":
      "Bambu bukan hanya soal estetika. Ada alasan teknis dan lingkungan di balik pilihan ini.",
    "Fast growing": "Tumbuh cepat",
    "Bamboo groves grow much faster than hardwoods, allowing harvests to be continuously repeated.":
      "Bambu tumbuh jauh lebih cepat daripada kayu keras sehingga dapat dipanen berulang kali.",
    "Strong and flexible": "Kuat dan lentur",
    "Its fibers strongly resist tension and flexibility, perfect for curved frames that are hard to make from other materials.":
      "Seratnya kuat menahan tarikan sekaligus lentur, cocok untuk rangka lengkung yang sulit dibuat dari material lain.",
    "Eco-friendly": "Ramah lingkungan",
    "Bamboo stores carbon while growing and requires far less processing energy than steel or concrete.":
      "Bambu menyimpan karbon saat tumbuh dan membutuhkan energi pengolahan jauh lebih sedikit daripada baja atau beton.",
    "Where we work. Bamboo, nature, and architecture meet here.":
      "Tempat kami berkarya. Bambu, alam, dan arsitektur bertemu di sini.",
    Client: "Cerita",
    "Stories.": "Klien.",
    "Hear from those who have built and lived in our bamboo creations.":
      "Dengarkan pengalaman mereka yang telah membangun dan tinggal di karya bambu kami.",
    '"Bamboo Lab didn\'t just build a villa; they crafted a piece of art. The curved roof is a masterpiece, and the natural cooling is unbelievable."':
      '"Bamboo Lab bukan sekadar membangun vila; mereka menciptakan karya seni. Atap lengkungnya luar biasa dan kesejukan alaminya menakjubkan."',
    "Villa Owner, Kuta Lombok": "Pemilik Vila, Kuta Lombok",
    '"Professional team from design to handover. Seeing the 3D model turn into a real bamboo structure was a magical experience."':
      '"Tim profesional dari desain hingga serah terima. Melihat model 3D menjadi bangunan bambu nyata adalah pengalaman ajaib."',
    "Eco-Resort Founders": "Pendiri Eco-Resor",
    '"The bamboo pavilion has become the centerpiece of our restaurant. It draws people in and creates a perfectly warm atmosphere."':
      '"Paviliun bambu menjadi pusat perhatian restoran kami. Bangunan ini menarik pengunjung dan menciptakan suasana hangat."',
    "Restaurant Owner": "Pemilik Restoran",
    "Have land or an idea?": "Punya lahan atau ide?",
    "Tell us about it.": "Ceritakan kepada kami.",
    "@bamboolab.lombok ↗": "@bamboolab.lombok ↗",
    "© 2026 Bamboo Lab Architect · Lombok, West Nusa Tenggara":
      "© 2026 Bamboo Lab Architect · Lombok, Nusa Tenggara Barat",
    "Contact via Instagram DM @bamboolab.lombok":
      "Hubungi melalui DM Instagram @bamboolab.lombok",
    Building: "Bangunan",
    Scale: "Skala",
    Summary: "Ringkasan",
  },
  ja: {
    Language: "言語",
    "Language and appearance settings": "言語と表示の設定",
    "Bamboo Lab Architect, home": "Bamboo Lab Architect ホーム",
    "3D illustration of a bamboo project journey by Bamboo Lab":
      "Bamboo Labによる竹建築プロジェクトの3Dイラスト",
    "BUILDING TYPE": "建物の種類",
    "YOUR STAGE": "現在の段階",
    "Start consultation": "相談を始める",
    "Start consultation →": "相談を始める →",
    "Switch to dark mode": "ダークモードに切り替え",
    "Switch to light mode": "ライトモードに切り替え",
    "Project journey steps": "プロジェクトの工程",
    Dark: "ダーク",
    Light: "ライト",
    Projects: "プロジェクト",
    Services: "サービス",
    "Why Bamboo": "竹を選ぶ理由",
    Why: "なぜ",
    Contact: "お問い合わせ",
    Consultation: "ご相談",
    Studio: "スタジオ",
    Materials: "素材",
    Design: "設計",
    Workshop: "工房",
    Location: "現地施工",
    Result: "完成",
    "Custom design": "カスタム設計",
    "From Bamboo Groves": "竹林から",
    "To Living Spaces.": "暮らしの空間へ。",
    "We design and build bamboo villas, restaurants, and pavilions with signature curved roofs. Follow a single project's journey from materials to handover.":
      "独自の曲線屋根を持つ竹のヴィラ、レストラン、パビリオンを設計・施工します。素材選びから引き渡しまで、プロジェクトの歩みをご覧ください。",
    "Bamboo villas & pods": "竹のヴィラ・ポッド",
    "Restaurants & cafes": "レストラン・カフェ",
    "Pavilions & gazebos": "パビリオン・東屋",
    "Resorts & tourism": "リゾート・観光施設",
    "Just have an idea": "アイデアがある段階",
    "Already own land": "土地を所有している",
    "Already have drawings": "設計図がある",
    Bamboo: "竹",
    "Structure & roof": "構造と屋根",
    "Project base": "プロジェクト拠点",
    Custom: "オーダーメイド",
    "Every design": "すべての設計",
    "Step 1 · Materials": "ステップ1 · 素材",
    "Selected from Groves,": "竹林から選び、",
    "Properly Treated.": "適切に処理。",
    "Stems are chosen based on age and species, then treated to resist insects. The right material ensures building longevity.":
      "竹は年数や種類を見極めて選び、虫害を防ぐ処理を施します。適切な素材が建物の長寿命につながります。",
    "Material stage": "素材の工程",
    "· workflow example": "· 作業例",
    "Select mature stems": "成熟した竹を選定",
    Completed: "完了",
    "Preservative soaking": "防腐剤への浸漬",
    "Drying process": "乾燥工程",
    "In progress": "進行中",
    "Step 2 · Design": "ステップ2 · 設計",
    "Designed Together,": "一緒に設計し、",
    "Visualized Before Building.": "施工前に3Dで確認。",
    "Sketches, mockups, and 3D models help you visualize roof shapes, openings, and spaces before a single stem is cut.":
      "スケッチや模型、3Dモデルを使い、竹を切る前に屋根の形や開口部、空間を具体的にイメージできます。",
    "Brief example": "設計例",
    "· restaurant pavilion": "· レストランのパビリオン",
    SPAN: "幅",
    HEIGHT: "高さ",
    ROOF: "屋根",
    "Bamboo shingle": "竹のシングル材",
    FUNCTION: "用途",
    Restaurant: "レストラン",
    "Step 3 · Workshop": "ステップ3 · 工房",
    "Assembled in Workshop,": "工房で組み立て、",
    "Installed Quickly on Site.": "現地ですばやく施工。",
    "Frames are curved, joined, and inspected in the workshop. Prefabricated components are then shipped to the location for assembly.":
      "工房でフレームを曲げ、接合して検査します。プレハブ部材を現地へ運び、組み立てます。",
    "Frame curving": "フレームの曲げ加工",
    "Joints & dowels": "接合部と木ダボ",
    "Roof shingles": "屋根材",
    "Step 4 · Location": "ステップ4 · 現地施工",
    "Standing on Site,": "現地に立ち上がり、",
    "Roofs Begin to Curve.": "屋根が曲線を描く。",
    "The team installs the main frame, covers the roof with bamboo shingles, and refines details until ready for occupancy.":
      "メインフレームを設置し、竹の屋根材を葺き、仕上げを整えて入居できる状態にします。",
    Foundation: "基礎",
    "Main frame": "メインフレーム",
    "Shingle roof": "屋根材",
    Finishing: "仕上げ",
    "Project progress example": "進捗の例",
    "Step 5 · Handover": "ステップ5 · 引き渡し",
    "Ready to Enjoy,": "完成し、",
    "Blending with the Landscape.": "風景に溶け込む。",
    "The building is complete: cool, warm, and harmonious with its surroundings. Starting from your story, we help bring it to life.":
      "心地よく温かみのある、周囲と調和した建物が完成します。あなたの想いを形にするお手伝いをします。",
    "Where to start?": "まずは何から？",
    "Free to ask": "お気軽にご相談ください",
    "Share land & requirements": "土地とご要望を共有",
    "Step 1": "ステップ1",
    "Discuss concept & form": "コンセプトと形を相談",
    "Step 2": "ステップ2",
    "Design & build plan": "設計・施工計画",
    "Step 3": "ステップ3",
    "Warm, strong,": "温かく、力強く、",
    "earth-friendly.": "地球にやさしい。",
    "Skip ↓": "スキップ ↓",
    "Forms Born": "竹から生まれる",
    "From Bamboo.": "かたち。",
    "Four building types we work on most frequently. Every design is customized to the land and the owner's story.":
      "私たちが多く手がける4種類の建物をご紹介します。土地とオーナーの想いに合わせて設計します。",
    "Three Ways": "3つの方法で",
    "To Work Together.": "ご一緒できます。",
    "Choose what fits your current stage. Scope and costs are discussed after we understand the project.":
      "現在の段階に合った方法をお選びください。内容と費用はプロジェクトを伺った後にご相談します。",
    Concept: "コンセプト",
    "Concept Design": "コンセプト設計",
    "For those who just have an idea or land.": "アイデアや土地をお持ちの方へ。",
    "Needs & land discussion": "ご要望と土地について相談",
    "Initial sketches & floor plans": "初期スケッチと平面図",
    "Simple 3D visuals": "シンプルな3Dイメージ",
    "Bamboo material guidance": "竹材選びのアドバイス",
    Discuss: "相談する",
    "Most complete": "充実のプラン",
    "Design & Build": "設計・施工",
    "One Team, Until Done": "完成まで一つのチームで",
    "From drawings to a standing building.": "図面から建物の完成まで。",
    "All Concept Design inclusions": "コンセプト設計の全内容",
    "Working drawings & joint details": "施工図と接合部の詳細",
    "Workshop frame fabrication": "工房でのフレーム製作",
    "On-site installation & finishing": "現地での施工と仕上げ",
    "Building handover": "建物の引き渡し",
    Technical: "テクニカル",
    "Details & Supervision": "詳細設計・監理",
    "For those who already have a design.": "設計案をお持ちの方へ。",
    "Drawing & structure review": "図面と構造の確認",
    "Curved roof details": "曲線屋根の詳細",
    "On-site assistance": "現地でのサポート",
    "Material quality checks": "材料品質の確認",
    "Bamboo.": "竹。",
    "Bamboo is more than just aesthetics. There are technical and environmental reasons behind this choice.":
      "竹の魅力は見た目だけではありません。技術面と環境面の理由があります。",
    "Fast growing": "成長が早い",
    "Bamboo groves grow much faster than hardwoods, allowing harvests to be continuously repeated.":
      "竹は広葉樹よりも早く成長するため、継続的に収穫できます。",
    "Strong and flexible": "強く、しなやか",
    "Its fibers strongly resist tension and flexibility, perfect for curved frames that are hard to make from other materials.":
      "竹の繊維は強度と柔軟性を兼ね備え、他の素材では難しい曲線フレームに適しています。",
    "Eco-friendly": "環境にやさしい",
    "Bamboo stores carbon while growing and requires far less processing energy than steel or concrete.":
      "竹は成長中に炭素を吸収し、鉄やコンクリートより加工エネルギーを抑えられます。",
    "Where we work. Bamboo, nature, and architecture meet here.":
      "私たちの拠点。竹と自然、建築が出会う場所です。",
    Client: "お客様の",
    "Stories.": "ストーリー。",
    "Hear from those who have built and lived in our bamboo creations.":
      "竹の建物を建て、そこで暮らすお客様の声をご紹介します。",
    '"Bamboo Lab didn\'t just build a villa; they crafted a piece of art. The curved roof is a masterpiece, and the natural cooling is unbelievable."':
      "「Bamboo Labはヴィラを建てただけでなく、芸術作品を生み出してくれました。曲線屋根は見事で、自然な涼しさにも驚きました。」",
    "Villa Owner, Kuta Lombok": "ヴィラオーナー、クタ・ロンボク",
    '"Professional team from design to handover. Seeing the 3D model turn into a real bamboo structure was a magical experience."':
      "「設計から引き渡しまで、プロフェッショナルなチームでした。3Dモデルが本物の竹建築になるのは魔法のようでした。」",
    "Eco-Resort Founders": "エコリゾート創業者",
    '"The bamboo pavilion has become the centerpiece of our restaurant. It draws people in and creates a perfectly warm atmosphere."':
      "「竹のパビリオンはレストランの中心的な存在です。人を惹きつけ、心地よく温かな雰囲気を生み出しています。」",
    "Restaurant Owner": "レストランオーナー",
    "Have land or an idea?": "土地やアイデアをお持ちですか？",
    "Tell us about it.": "ぜひお聞かせください。",
    "@bamboolab.lombok ↗": "@bamboolab.lombok ↗",
    "© 2026 Bamboo Lab Architect · Lombok, West Nusa Tenggara":
      "© 2026 Bamboo Lab Architect · 西ヌサ・トゥンガラ州ロンボク島",
    "Contact via Instagram DM @bamboolab.lombok":
      "InstagramのDMでお問い合わせください @bamboolab.lombok",
    Building: "建物",
    Scale: "規模",
    Summary: "概要",
  },
};

const normalizeText = (value) => value.trim().replace(/\s+/g, " ");
const staticTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  if (node.parentElement.closest("script, style, svg")) continue;
  const source = normalizeText(node.nodeValue);
  if (source) staticTextNodes.push({ node, source, value: node.nodeValue });
}

let currentLanguage = "en";
let dynamicContentReady = false;
let refreshSceneLanguage = () => {};
let initialLanguage = "en";
const requestedLanguage = new URLSearchParams(location.search).get("lang");
try {
  if (
    requestedLanguage === "en" ||
    requestedLanguage === "id" ||
    requestedLanguage === "ja"
  ) {
    initialLanguage = requestedLanguage;
  } else {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (
      savedLanguage === "en" ||
      savedLanguage === "id" ||
      savedLanguage === "ja"
    ) {
      initialLanguage = savedLanguage;
    }
  }
} catch (error) {
  console.warn("Unable to read the saved language preference.", error);
}

function translate(source) {
  return LANGUAGE_COPY[currentLanguage]?.[source] ?? source;
}

function applyTheme(theme, save = false) {
  const isDark = theme === "dark";
  const nextTheme = isDark ? "dark" : "light";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  document.documentElement.dataset.theme = nextTheme;
  themeToggle.setAttribute("aria-label", translate(label));
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.title = translate(label);
  themeToggle.querySelector("span").textContent = translate(
    isDark ? "Light" : "Dark",
  );

  if (save) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (error) {
      console.warn("Unable to save the theme preference.", error);
    }
  }
}

let initialTheme = "light";
try {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") initialTheme = savedTheme;
} catch (error) {
  console.warn("Unable to read the saved theme preference.", error);
}

function applyLanguage(language, save = false) {
  currentLanguage = language;
  document.documentElement.lang = language;
  languageSelect.value = language;
  const metadata = SEO_METADATA[language];
  const localizedUrl = `${SITE_URL}/?lang=${language}`;
  document.title = metadata.title;
  document.querySelector('meta[name="description"]').content =
    metadata.description;
  document.querySelector('meta[property="og:title"]').content = metadata.title;
  document.querySelector('meta[property="og:description"]').content =
    metadata.ogDescription;
  document.querySelector('meta[property="og:locale"]').content =
    metadata.locale;
  document.querySelector('meta[property="og:url"]').content = localizedUrl;
  document.querySelector('meta[name="twitter:title"]').content =
    metadata.title;
  document.querySelector('meta[name="twitter:description"]').content =
    metadata.ogDescription;
  document.querySelector('link[rel="canonical"]').href = localizedUrl;

  const url = new URL(location.href);
  if (url.searchParams.get("lang") !== language) {
    url.searchParams.set("lang", language);
    try {
      history.replaceState(null, "", url);
    } catch (error) {
      console.warn("Unable to synchronize the selected language in the URL.", error);
    }
  }
  staticTextNodes.forEach(({ node, source, value }) => {
    const leading = value.match(/^\s*/)?.[0] ?? "";
    const trailing = value.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = `${leading}${translate(source)}${trailing}`;
  });
  siteControls.setAttribute(
    "aria-label",
    translate("Language and appearance settings"),
  );
  languageSelect.setAttribute("aria-label", translate("Language"));
  document.querySelector(".logo").setAttribute(
    "aria-label",
    translate("Bamboo Lab Architect, home"),
  );
  document.getElementById("gl").setAttribute(
    "aria-label",
    translate("3D illustration of a bamboo project journey by Bamboo Lab"),
  );
  document.querySelector(".prog").setAttribute(
    "aria-label",
    translate("Project journey steps"),
  );
  document.querySelector(".search .go").setAttribute(
    "aria-label",
    translate("Start consultation"),
  );
  document.querySelector(".dlg").setAttribute(
    "aria-label",
    translate("Consultation"),
  );
  applyTheme(document.documentElement.dataset.theme || initialTheme);

  if (dynamicContentReady) {
    renderLocalizedContent();
    refreshSceneLanguage();
  }

  if (save) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
      console.warn("Unable to save the language preference.", error);
    }
  }
}

applyTheme(initialTheme);
applyLanguage(initialLanguage);
themeToggle.addEventListener("click", () => {
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
    true,
  );
});
languageSelect.addEventListener("change", () =>
  applyLanguage(languageSelect.value, true),
);

const TYPES = [
  {
    n: "Bamboo Villas & Pods",
    s: "Residences, rental units, glamping",
    d: "Warm and private woven domes with openings to the landscape.",
    bg: "#e8dcc0",
  },
  {
    n: "Restaurants & Cafes",
    s: "Wave-roofed dining spaces",
    d: "Corrugated roofs made of bamboo shingles sheltering open dining areas.",
    bg: "#dde4e6",
  },
  {
    n: "Pavilions & Gazebos",
    s: "Gathering and event spaces",
    d: "Open structures with curved frames, perfect for bales and event areas.",
    bg: "#eadfc4",
  },
  {
    n: "Resorts & Tourism",
    s: "Complexes with multiple units",
    d: "Clusters of units, pools, and shared facilities designed as one cohesive area.",
    bg: "#d8e3d4",
  },
];
const TYPE_TRANSLATIONS = {
  id: [
    {
      n: "Vila & Pod Bambu",
      s: "Hunian, unit sewa, glamping",
      d: "Kubah anyaman yang hangat dan privat, dengan bukaan ke lanskap.",
    },
    {
      n: "Restoran & Kafe",
      s: "Ruang makan beratap bergelombang",
      d: "Atap sirap bambu bergelombang yang menaungi ruang makan terbuka.",
    },
    {
      n: "Paviliun & Gazebo",
      s: "Ruang berkumpul dan acara",
      d: "Struktur terbuka dengan rangka lengkung, cocok untuk bale dan acara.",
    },
    {
      n: "Resor & Pariwisata",
      s: "Kompleks dengan beberapa unit",
      d: "Kumpulan unit, kolam, dan fasilitas bersama dalam satu desain.",
    },
  ],
  ja: [
    {
      n: "竹のヴィラ・ポッド",
      s: "住居、賃貸ユニット、グランピング",
      d: "風景に開かれた、温かくプライベートな編み込みドーム。",
    },
    {
      n: "レストラン・カフェ",
      s: "波形屋根のダイニング空間",
      d: "竹の屋根材が開放的なダイニングを包みます。",
    },
    {
      n: "パビリオン・東屋",
      s: "集いとイベントの空間",
      d: "曲線フレームの開放的な構造で、集会やイベントに最適です。",
    },
    {
      n: "リゾート・観光施設",
      s: "複数棟からなる施設",
      d: "客室やプール、共有施設を一体的にデザインします。",
    },
  ],
};
function localizedType(index) {
  return TYPE_TRANSLATIONS[currentLanguage]?.[index] ?? TYPES[index];
}
const ART = [
  `<ellipse cx="100" cy="176" rx="82" ry="14" fill="#c9b78f" opacity=".55"/><path d="M30 172A70 84 0 0 1 170 172Z" fill="#d9a441"/><path d="M100 88V172M72 98Q62 130 58 172M128 98Q138 130 142 172M48 124Q100 108 152 124M38 148Q100 134 162 148" stroke="#8a5f1e" stroke-width="2.4" fill="none"/><ellipse cx="100" cy="158" rx="15" ry="20" fill="#0f2744"/><ellipse cx="100" cy="160" rx="9" ry="14" fill="#f0c46a"/>`,
  `<ellipse cx="100" cy="182" rx="86" ry="12" fill="#b9c7cc" opacity=".6"/><path d="M12 112Q50 70 100 108T188 98L188 124Q146 138 100 126T12 140Z" fill="#d9a441" stroke="#8a5f1e" stroke-width="2"/><path d="M12 126Q50 90 100 118T188 110" stroke="#8a5f1e" stroke-width="2" fill="none"/><path d="M34 134V176M100 128V176M168 122V176" stroke="#b9822c" stroke-width="7" stroke-linecap="round"/><path d="M52 176h96" stroke="#0f2744" stroke-width="3"/>`,
  `<ellipse cx="100" cy="182" rx="80" ry="12" fill="#c9b78f" opacity=".55"/><path d="M100 36L22 118H178Z" fill="#d9a441" stroke="#8a5f1e" stroke-width="2"/><path d="M100 36V118M100 36L62 118M100 36L138 118M54 82H146" stroke="#8a5f1e" stroke-width="2" fill="none"/><path d="M42 120V178M100 120V178M158 120V178" stroke="#b9822c" stroke-width="7" stroke-linecap="round"/><path d="M34 178h132" stroke="#0f2744" stroke-width="4" stroke-linecap="round"/>`,
  `<ellipse cx="100" cy="186" rx="86" ry="12" fill="#a9bfa6" opacity=".6"/><ellipse cx="100" cy="164" rx="52" ry="14" fill="#7fc4cf"/><path d="M20 128A30 34 0 0 1 80 128Z" fill="#d9a441"/><path d="M120 120A32 38 0 0 1 184 120Z" fill="#d9a441"/><path d="M62 98A26 30 0 0 1 114 98Z" fill="#c8932f"/><path d="M50 128V140M150 120V134M88 98V112" stroke="#8a5f1e" stroke-width="3"/><circle cx="46" cy="72" r="0"/>`,
];
function renderDocs() {
  document.getElementById("docs").innerHTML = TYPES.map((source, i) => {
    const d = localizedType(i);
    return `
 <article class="doc"><div class="ph" style="background:${source.bg}">
  <svg viewBox="0 0 200 215" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${ART[i]}</svg><span class="tag">${d.s}</span></div>
  <div><h3>${d.n}</h3><p>${d.d}</p></div>
  <div class="foot"><b>${translate("Custom design")}</b><button data-book data-type="${i}">${translate("Discuss")}</button></div></article>`;
  }).join("");
}

/* ---------- progress nav ---------- */
const LABELS = [
  ["01", "Studio"],
  ["02", "Materials"],
  ["03", "Design"],
  ["04", "Workshop"],
  ["05", "Location"],
  ["06", "Result"],
];
const JOURNEY_LABELS = {
  id: ["Studio", "Material", "Desain", "Bengkel", "Lokasi", "Hasil"],
  ja: ["スタジオ", "素材", "設計", "工房", "現地施工", "完成"],
};
const progEl = document.getElementById("prog");
let progBtns = [];
let bars = [];
function renderProgress() {
  const previous = progBtns.map((button) => ({
    active: button.classList.contains("on"),
    width: button.querySelector("i").style.width,
  }));
  const names =
    JOURNEY_LABELS[currentLanguage] ?? LABELS.map(([, label]) => label);
  progEl.innerHTML = LABELS.map(
    ([number], i) =>
      `<button data-go="${i}"><small>${number}</small><span>${names[i]}</span><div class="bar"><i></i></div></button>`,
  ).join("");
  progBtns = [...progEl.children];
  bars = progBtns.map((button) => button.querySelector("i"));
  progBtns.forEach((button, index) => {
    button.classList.toggle("on", previous[index]?.active ?? index === 0);
    bars[index].style.width = previous[index]?.width ?? "0%";
  });
  progBtns.forEach((button) =>
    button.addEventListener("click", () => goStep(+button.dataset.go)),
  );
}
const stepEls = [...document.querySelectorAll(".step")];
const journey = document.querySelector(".journey");
function journeyRange() {
  return journey.offsetHeight - innerHeight;
}
function goStep(i) {
  const top = journey.getBoundingClientRect().top + scrollY;
  scrollTo({ top: top + journeyRange() * (i / 5) * 0.999, behavior: "smooth" });
}
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
  "Under 50 m²",
  "50–150 m²",
  "150–500 m²",
  "Over 500 m²",
  "Not sure yet",
];
const STAGES = [
  "Just have an idea",
  "Already own land",
  "Already have drawings",
];
const OPTION_TRANSLATIONS = {
  id: {
    sizes: ["Di bawah 50 m²", "50–150 m²", "150–500 m²", "Di atas 500 m²", "Belum yakin"],
    stages: ["Baru memiliki ide", "Sudah memiliki lahan", "Sudah memiliki gambar desain"],
  },
  ja: {
    sizes: ["50 m²未満", "50～150 m²", "150～500 m²", "500 m²超", "まだ分からない"],
    stages: ["アイデアがある段階", "土地を所有している", "設計図がある"],
  },
};
const MODAL_COPY = {
  en: {
    buildingQuestion: "What kind of building are you dreaming of?",
    buildingHint: "Choose the closest one. It can be adjusted later.",
    scaleQuestion: "How big is it and what's your current stage?",
    sizeLabel: "Estimated building size",
    stageLabel: "Current stage",
    summaryHeading: "Summary to send",
    summaryHint: "Copy this text, then send it via Instagram DM @bamboolab.lombok.",
    copied: "Summary copied. Paste it into Instagram DM.",
    copyFallback: "Text is selected. Press copy on your device.",
    close: "Close",
    next: "Next →",
    back: "← Back",
    copy: "Copy summary",
    instagram: "Open Instagram ↗",
    brief: (type, size, stage) =>
      `Hello Bamboo Lab, I'd like to consult.\nBuilding type: ${type}\nEstimated size: ${size}\nCurrent stage: ${stage}\nLand location: (fill here)`,
  },
  id: {
    buildingQuestion: "Bangunan seperti apa yang Anda impikan?",
    buildingHint: "Pilih yang paling sesuai. Pilihan dapat diubah nanti.",
    scaleQuestion: "Seberapa besar bangunannya dan apa tahap Anda saat ini?",
    sizeLabel: "Perkiraan luas bangunan",
    stageLabel: "Tahap saat ini",
    summaryHeading: "Ringkasan untuk dikirim",
    summaryHint: "Salin teks ini, lalu kirim melalui DM Instagram @bamboolab.lombok.",
    copied: "Ringkasan disalin. Tempelkan ke DM Instagram.",
    copyFallback: "Teks dipilih. Tekan salin di perangkat Anda.",
    close: "Tutup",
    next: "Lanjut →",
    back: "← Kembali",
    copy: "Salin ringkasan",
    instagram: "Buka Instagram ↗",
    brief: (type, size, stage) =>
      `Halo Bamboo Lab, saya ingin berkonsultasi.\nJenis bangunan: ${type}\nPerkiraan luas: ${size}\nTahap saat ini: ${stage}\nLokasi lahan: (isi di sini)`,
  },
  ja: {
    buildingQuestion: "どのような建物をお考えですか？",
    buildingHint: "最も近いものをお選びください。後から変更できます。",
    scaleQuestion: "建物の規模と現在の段階を教えてください。",
    sizeLabel: "建物の予定面積",
    stageLabel: "現在の段階",
    summaryHeading: "送信用の概要",
    summaryHint: "このテキストをコピーして、InstagramのDMでお送りください @bamboolab.lombok。",
    copied: "概要をコピーしました。InstagramのDMに貼り付けてください。",
    copyFallback: "テキストを選択しました。端末のコピー操作を行ってください。",
    close: "閉じる",
    next: "次へ →",
    back: "← 戻る",
    copy: "概要をコピー",
    instagram: "Instagramを開く ↗",
    brief: (type, size, stage) =>
      `Bamboo Labへの相談を希望します。\n建物の種類: ${type}\n予定面積: ${size}\n現在の段階: ${stage}\n土地の場所: (ご記入ください)`,
  },
};
const STAGE_TRANSLATIONS = {
  id: ["Baru memiliki ide", "Sudah memiliki lahan", "Sudah memiliki gambar desain"],
  ja: ["アイデアがある段階", "土地を所有している", "設計図がある"],
};
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
  const stageIndex = STAGES.indexOf(st.stage);
  const options = OPTION_TRANSLATIONS[currentLanguage];
  const sizeIndex = SIZES.indexOf(st.size);
  const size = options?.sizes[sizeIndex] ?? st.size;
  const stage = STAGE_TRANSLATIONS[currentLanguage]?.[stageIndex] ?? st.stage;
  return MODAL_COPY[currentLanguage].brief(
    localizedType(st.type).n,
    size,
    stage,
  );
}
function renderModal() {
  [...mnav.children].forEach((li, i) => {
    li.className = i < st.step ? "done" : i === st.step ? "on" : "";
  });
  const copy = MODAL_COPY[currentLanguage];
  const x = `<button class="close" data-x aria-label="${copy.close}">✕</button>`;
  if (st.step === 0) {
    mbody.innerHTML = `<div class="head"><div><h4>${copy.buildingQuestion}</h4><p style="margin:4px 0 0;color:var(--muted);font-size:13px">${copy.buildingHint}</p></div>${x}</div>
    ${TYPES.map((_, i) => { const type = localizedType(i); return `<button class="opt ${i === st.type ? "sel" : ""}" data-type-i="${i}"><span><b>${type.n}</b><br><span style="color:var(--muted);font-size:12px">${type.s}</span></span></button>`; }).join("")}
    <div class="acts"><span></span><button class="pill dark" data-next>${copy.next}</button></div>`;
  } else if (st.step === 1) {
    const options = OPTION_TRANSLATIONS[currentLanguage];
    mbody.innerHTML = `<div class="head"><div><h4>${copy.scaleQuestion}</h4><p style="margin:4px 0 0;color:var(--muted);font-size:13px">${localizedType(st.type).n}</p></div>${x}</div>
    <div><b style="font-size:12px">${copy.sizeLabel}</b><div class="chips" style="margin-top:8px">${SIZES.map((size, i) => `<button class="chip ${size === st.size ? "sel" : ""}" data-size="${size}">${options?.sizes[i] ?? size}</button>`).join("")}</div></div>
    <div><b style="font-size:12px">${copy.stageLabel}</b><div class="chips" style="margin-top:8px">${STAGES.map((stage, i) => `<button class="chip ${stage === st.stage ? "sel" : ""}" data-stage="${stage}">${options?.stages[i] ?? stage}</button>`).join("")}</div></div>
    <div class="acts"><button class="pill" data-prev>${copy.back}</button><button class="pill dark" data-next>${copy.next}</button></div>`;
  } else {
    mbody.innerHTML = `<div class="head"><div><h4>${copy.summaryHeading}</h4><p style="margin:4px 0 0;color:var(--muted);font-size:13px">${copy.summaryHint}</p></div>${x}</div>
    <pre class="brief" id="brief">${briefText()}</pre>
    <p id="cp" style="margin:0;font-size:12.5px;color:var(--gold);min-height:18px" aria-live="polite">${st.copied ? copy.copied : ""}</p>
    <div class="acts"><button class="pill" data-prev>${copy.back}</button><span style="display:flex;gap:8px;flex-wrap:wrap"><button class="pill dark" data-copy>${copy.copy}</button><a class="pill or" href="https://www.instagram.com/bamboolab.lombok/" target="_blank" rel="noopener">${copy.instagram}</a></span></div>`;
  }
}
function copyBrief() {
  const t = briefText(),
    done = () => {
      st.copied = true;
      const c = document.getElementById("cp");
      if (c) c.textContent = MODAL_COPY[currentLanguage].copied;
    },
    fallback = () => {
      const r = document.createRange();
      r.selectNodeContents(document.getElementById("brief"));
      const s = getSelection();
      s.removeAllRanges();
      s.addRange(r);
      const c = document.getElementById("cp");
      if (c) c.textContent = MODAL_COPY[currentLanguage].copyFallback;
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

function renderLocalizedContent() {
  renderDocs();
  renderProgress();
  if (!modal.hidden) renderModal();
}
dynamicContentReady = true;
renderLocalizedContent();

const SCENE_COPY = {
  id: {
    "MATERIALS & PRESERVATION": "MATERIAL & PENGAWETAN",
    "DESIGN ROOM": "RUANG DESAIN",
    "FABRICATION WORKSHOP": "BENGKEL PRODUKSI",
    "PROJECT LOCATION": "LOKASI PROYEK",
    HANDOVER: "SERAH TERIMA",
    "SELECTED BAMBOO": "BAMBU TERPILIH",
    "treated before usage": "diawetkan sebelum digunakan",
    "Thank you": "Terima kasih",
    "See you in Lombok": "Sampai jumpa di Lombok",
  },
  ja: {
    "MATERIALS & PRESERVATION": "素材と防腐処理",
    "DESIGN ROOM": "設計室",
    "FABRICATION WORKSHOP": "製作工房",
    "PROJECT LOCATION": "施工現場",
    HANDOVER: "お引き渡し",
    "SELECTED BAMBOO": "厳選した竹",
    "treated before usage": "使用前に処理",
    "Thank you": "ありがとう",
    "See you in Lombok": "ロンボク島でお会いしましょう",
  },
};

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
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
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

  const localizedTextureRefreshers = [];
  function tex(lines, w, h, bg, fg, font, align = "left") {
    const cv = document.createElement("canvas");
    cv.width = w;
    cv.height = h;
    const g = cv.getContext("2d");
    const draw = () => {
      g.clearRect(0, 0, w, h);
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
        const label = l.localize
          ? (SCENE_COPY[currentLanguage]?.[l.t] ?? l.t)
          : l.t;
        g.fillText(label, align === "center" ? w / 2 : (l.x ?? 24), l.y, w - 24);
      });
    };
    draw();
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = 8;
    if (lines.some((line) => line.localize)) {
      localizedTextureRefreshers.push(() => {
        draw();
        t.needsUpdate = true;
      });
    }
    return t;
  }
  refreshSceneLanguage = () =>
    localizedTextureRefreshers.forEach((refresh) => refresh());
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
        [{ t: label, y: 40, localize: true }],
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

  /* S1 materials: grove, curing tank, stacked poles */
  (function () {
    const g = stations[1];
    deck(g, 22, 18, "MATERIALS & PRESERVATION");
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
          t: "SELECTED BAMBOO",
          localize: true,
          x: 20,
          y: 60,
          font: '800 32px "Bricolage Grotesque",sans-serif',
          fg: "#d6b273",
        },
        {
          t: "treated before usage",
          localize: true,
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

  /* S2 design: drafting table, model, sketch board */
  (function () {
    const g = stations[2];
    deck(g, 22, 18, "DESIGN ROOM");
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

  /* S3 workshop: bending jig, arched ribs, shingle stack */
  (function () {
    const g = stations[3];
    deck(g, 22, 18, "FABRICATION WORKSHOP");
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

  /* S4 location: dome frame under construction, scaffold */
  (function () {
    const g = stations[4];
    deck(g, 22, 18, "PROJECT LOCATION");
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

  /* S5 result: finished pods, pool, wave-roof terrace */
  (function () {
    const g = stations[5];
    deck(g, 22, 18, "HANDOVER");
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
          t: "Thank you",
          localize: true,
          x: 20,
          y: 44,
          font: '800 34px "Bricolage Grotesque",sans-serif',
          fg: "#d6b273",
        },
        {
          t: "See you in Lombok",
          localize: true,
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
  const shadowResolution = innerWidth < 768 ? 1024 : 2048;
  sun.shadow.mapSize.set(shadowResolution, shadowResolution);
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
  let stageVisible = !("IntersectionObserver" in window);
  let frameHandle = null;
  const scheduleFrame = () => {
    if (stageVisible && !document.hidden && frameHandle === null) {
      frameHandle = requestAnimationFrame(frame);
    }
  };
  if ("IntersectionObserver" in window) {
    const stageObserver = new IntersectionObserver(([entry]) => {
      stageVisible = entry.isIntersecting;
      scheduleFrame();
    });
    stageObserver.observe(canvas);
  }
  document.addEventListener("visibilitychange", scheduleFrame);
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
    frameHandle = null;
    if (!stageVisible || document.hidden) return;
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
    scheduleFrame();
  }
  scheduleFrame();
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

/* ---------- Scroll animations ---------- */
if (
  "IntersectionObserver" in window &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const revealTargets = document.querySelectorAll(
    "#karya .sec-h > *, #karya .doc, #layanan .sec-h > *, #layanan .plan, #material .sec-h > *, #material .why > *, #reviews .sec-h > *, #reviews .review-card, #kontak .cta, #kontak .fine",
  );
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -32px 0px", threshold: 0.08 },
  );
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });
}
