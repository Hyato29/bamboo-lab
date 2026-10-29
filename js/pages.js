const THEME_STORAGE_KEY = "bamboo-lab-theme";
const LANGUAGE_STORAGE_KEY = "bamboo-lab-language";
const languages = ["en", "id", "ja"];

const pageSeo = {
  story: {
    en: ["Our Story | Bamboo Lab Architect", "Discover Bamboo Lab's approach to bamboo architecture, local craft, and creating thoughtful spaces in Lombok."],
    id: ["Kisah Kami | Bamboo Lab Architect", "Kenali pendekatan Bamboo Lab terhadap arsitektur bambu, keterampilan lokal, dan ruang yang menyatu dengan Lombok."],
    ja: ["私たちのストーリー | Bamboo Lab Architect", "ロンボク島で竹建築と地域の技術を生かした空間づくりに取り組むBamboo Labをご紹介します。"],
  },
  gallery: {
    en: ["Design Gallery | Bamboo Lab Architect", "Explore bamboo architecture concepts for villas, dining, pavilions, wellness spaces, and hospitality destinations by Bamboo Lab."],
    id: ["Galeri Desain | Bamboo Lab Architect", "Jelajahi gagasan arsitektur bambu untuk vila, ruang makan, paviliun, wellness, dan destinasi hospitality dari Bamboo Lab."],
    ja: ["デザインギャラリー | Bamboo Lab Architect", "ヴィラ、ダイニング、パビリオン、ウェルネス施設など、Bamboo Labの竹建築のデザインをご覧ください。"],
  },
  locations: {
    en: ["Locations | Bamboo Lab Architect", "Bamboo Lab works from Lombok, Indonesia, creating architecture shaped by its terrain, climate, and local building craft."],
    id: ["Lokasi | Bamboo Lab Architect", "Bamboo Lab berkarya dari Lombok, Indonesia, merancang arsitektur yang merespons alam, iklim, dan keterampilan setempat."],
    ja: ["拠点 | Bamboo Lab Architect", "インドネシアのロンボク島を拠点に、地形や気候、地域の技術を生かした建築に取り組んでいます。"],
  },
  careers: {
    en: ["Careers | Bamboo Lab Architect", "Bring your perspective to bamboo architecture. Learn about the collaborative disciplines behind Bamboo Lab's design and building work in Lombok."],
    id: ["Karier | Bamboo Lab Architect", "Bergabunglah dalam eksplorasi arsitektur bambu. Kenali kolaborasi desain dan pembangunan Bamboo Lab di Lombok."],
    ja: ["採用情報 | Bamboo Lab Architect", "竹建築の可能性を探るチームに参加しませんか。ロンボク島での設計・施工の仕事をご紹介します。"],
  },
  contact: {
    en: ["Get in Touch | Bamboo Lab Architect", "Talk with Bamboo Lab about a bamboo architecture project in Lombok. Contact the team by email, phone, or project enquiry."],
    id: ["Hubungi Kami | Bamboo Lab Architect", "Diskusikan proyek arsitektur bambu di Lombok bersama Bamboo Lab melalui email, telepon, atau formulir pertanyaan."],
    ja: ["お問い合わせ | Bamboo Lab Architect", "ロンボク島での竹建築プロジェクトについて、メール、電話、お問い合わせフォームからご相談ください。"],
  },
};

const pageCopy = {
  en: {
    "nav.home": "Home", "nav.story": "Our Story", "nav.gallery": "Design Gallery", "nav.locations": "Locations", "nav.careers": "Careers", "nav.contact": "Get in Touch", "nav.start": "Start a project", "nav.primary": "Primary navigation",
    "common.explore": "Explore our approach", "common.viewWork": "View design directions", "common.scene": "A study in bamboo form · Lombok", "common.sceneAlt": "A three-dimensional bamboo architecture study", "common.cta1": "Have a place in mind?", "common.cta2": "Let's shape it together.", "common.footer": "Bamboo architecture, thoughtfully made in Lombok.", "common.copyright": "© 2026 Bamboo Lab Architect · Lombok, Indonesia", "controls.label": "Language and appearance settings",
    "story.eyebrow": "BAMBOO LAB · OUR APPROACH", "story.title1": "Architecture that", "story.title2": "grows from its place.", "story.intro": "We bring material knowledge, thoughtful design, and careful making together to create spaces that belong to their landscape.", "story.sectionEyebrow": "A MATERIAL WITH CHARACTER", "story.sectionTitle1": "Strong in structure.", "story.sectionTitle2": "Gentle in presence.", "story.sectionText": "Bamboo asks us to design with its natural curves, rhythm, and scale in mind. We start by understanding the site and the people who will use a space, then shape each decision around that context.", "story.value1Title": "Listen to the place", "story.value1Text": "Sun, wind, views, and daily routines are part of the brief. The best starting point is a careful reading of the land.", "story.value2Title": "Design with the material", "story.value2Text": "We explore spans, joints, and roof forms early, using drawings and 3D studies to make the idea easier to understand.", "story.value3Title": "Make with care", "story.value3Text": "Material preparation, skilled hands, and coordination between workshop and site help turn a concept into a lasting place.", "story.processEyebrow": "FROM FIRST THOUGHT TO BUILT SPACE", "story.processTitle": "A considered process, at every scale.", "story.processText": "Every project has its own conditions. These shared principles keep the work connected from the first conversation to the final details.", "story.step1Title": "Understand", "story.step1Text": "Talk through the brief, budget, site, and the experience you want to create.", "story.step2Title": "Imagine", "story.step2Text": "Explore spatial ideas and material direction through sketches, plans, and 3D views.", "story.step3Title": "Resolve", "story.step3Text": "Coordinate structure, details, and construction planning before work moves to site.", "story.step4Title": "Realize", "story.step4Text": "Build, review, and refine the work so the finished space feels at home in its setting.",
    "gallery.eyebrow": "IDEAS, MATERIALS, AND FORM", "gallery.title1": "Spaces shaped", "gallery.title2": "by bamboo.", "gallery.intro": "A collection of architectural directions for living, gathering, and connecting with the landscape.", "gallery.sectionEyebrow": "DESIGN DIRECTIONS", "gallery.sectionTitle": "Different functions, one thoughtful language.", "gallery.sectionText": "Use the filters to explore the kinds of spaces a bamboo-led design can bring to life. Every project starts with a specific brief and site.", "gallery.filterLabel": "Filter design gallery", "gallery.filterAll": "All ideas", "gallery.filterStay": "Stays", "gallery.filterGather": "Gathering", "gallery.filterCraft": "Craft & detail", "gallery.tagStay": "STAYS", "gallery.tagGather": "GATHERING", "gallery.tagCraft": "CRAFT & DETAIL", "gallery.card1Title": "A private bamboo retreat", "gallery.card1Text": "A calm, open plan with shaded thresholds and views into the garden.", "gallery.card2Title": "An open-air dining room", "gallery.card2Text": "A generous roof creates shelter while keeping the landscape in view.", "gallery.card3Title": "A pavilion for shared moments", "gallery.card3Text": "A light structure for ceremonies, conversations, and everyday use.", "gallery.card4Title": "A retreat in the terrain", "gallery.card4Text": "A group of private spaces arranged around paths, shade, and shared amenities.", "gallery.card5Title": "The craft behind the curve", "gallery.card5Text": "A closer look at joinery, material preparation, and the logic of a bamboo frame.", "gallery.card6Title": "Light through a woven screen", "gallery.card6Text": "Layered bamboo elements balance privacy, airflow, and changing daylight.", "gallery.note": "These visual studies illustrate design possibilities; final solutions are developed for each project's requirements.",
    "locations.eyebrow": "OUR BASE · LOMBOK, INDONESIA", "locations.title1": "Grounded in place.", "locations.title2": "Open to possibility.", "locations.intro": "Our work begins with the character of a site: its light, terrain, weather, and the way people move through it.", "locations.explore": "Explore our approach to place", "locations.sectionEyebrow": "SITE-SPECIFIC THINKING", "locations.sectionTitle1": "One island.", "locations.sectionTitle2": "Many ways to belong.", "locations.sectionText": "Based in Lombok, we develop bamboo architecture with an understanding of local conditions and craft. Each location brings its own questions, and each design responds to them individually.", "locations.mapAlt": "Illustrated map showing Lombok and the Bamboo Lab project region", "locations.mapCaption": "Island context · schematic illustration", "locations.mapLabel": "LOMBOK", "locations.mapCoast": "SOUTH COAST", "locations.point1Title": "Read the land", "locations.point1Text": "Orientation, slope, access, and views help determine how a building should sit and open.", "locations.point2Title": "Work with climate", "locations.point2Text": "Shade, airflow, roof overhangs, and material protection are considered from the earliest design stages.", "locations.point3Title": "Build with local knowledge", "locations.point3Text": "Good outcomes depend on communication between designers, craftspeople, consultants, and the project team.", "locations.officeEyebrow": "VISIT OUR STUDIO", "locations.officeTitle": "A Lombok base for ideas and making.", "locations.officeText": "For project conversations and studio visits, please get in touch first so our team can arrange a suitable time.", "locations.mapLink": "Open directions ↗",
    "careers.eyebrow": "PEOPLE MAKE THE PLACE", "careers.title1": "Build what", "careers.title2": "comes next.", "careers.intro": "Bring your curiosity and craft to a team exploring how bamboo can shape more thoughtful places.", "careers.explore": "See how to connect", "careers.sectionEyebrow": "A COLLABORATIVE PRACTICE", "careers.sectionTitle": "Different skills, one shared curiosity.", "careers.sectionText": "Our projects connect creative thinking with practical delivery. We value people who care about the details and are open to learning from others.", "careers.discipline1Title": "Architecture & design", "careers.discipline1Text": "Concepts, spatial planning, technical drawings, interiors, and visual communication.", "careers.discipline2Title": "Construction & craft", "careers.discipline2Text": "Material preparation, fabrication, site coordination, quality, and project delivery.", "careers.discipline3Title": "Project support", "careers.discipline3Text": "Planning, communication, operations, and the many roles that help a project move forward.", "careers.applyEyebrow": "GET IN TOUCH", "careers.applyTitle": "Interested in working with Bamboo Lab?", "careers.applyText": "We do not publish live vacancies on this page. Send a short introduction and portfolio to ask about current opportunities.", "careers.applyCardTitle": "Share your work", "careers.applyCardText": "Tell us what kind of role interests you, where you are based, and when you may be available.", "careers.applyButton": "Email your introduction", "careers.cta1": "Have a project question?", "careers.cta2": "We'd be glad to hear from you.",
    "contact.eyebrow": "LET'S START WITH A CONVERSATION", "contact.title1": "A good project", "contact.title2": "starts with a hello.", "contact.intro": "Share a little about your site, idea, or question. Our team will help you find a practical next step.", "contact.details": "Contact details", "contact.sectionEyebrow": "GET IN TOUCH", "contact.sectionTitle": "Tell us what you are imagining.", "contact.sectionText": "Whether you are at the first idea or ready to discuss drawings, we welcome a conversation about your project.", "contact.emailTitle": "Email", "contact.emailText": "For project enquiries and general questions.", "contact.phoneTitle": "Phone", "contact.phoneText": "Call or message to arrange a conversation.", "contact.officeTitle": "Studio", "contact.directions": "Open directions ↗", "contact.formTitle": "Send a project enquiry", "contact.name": "Your name", "contact.email": "Email address", "contact.projectType": "What are you planning?", "contact.option1": "Villa or retreat", "contact.option2": "Restaurant or cafe", "contact.option3": "Pavilion or event space", "contact.option4": "Other project", "contact.message": "A little about your idea", "contact.send": "Prepare email", "contact.formNote": "This form opens your email app with your message. It does not submit data to this website.", "contact.faqEyebrow": "A FEW QUICK ANSWERS", "contact.faqTitle": "Before we talk.", "contact.faq1": "What information should I prepare?", "contact.faq1Answer": "A location, approximate project size, intended use, reference images, and a rough timeline are helpful. It is also fine to start with just an idea.", "contact.faq2": "Can I contact you before I own land?", "contact.faq2Answer": "Yes. Early conversations can help clarify site needs, project scope, and the right next step.", "contact.faq3": "Do you work outside Lombok?", "contact.faq3Answer": "Project locations are reviewed individually. Share the location and brief with our team so we can discuss feasibility.",
    "language.label": "Language", "theme.dark": "Dark", "theme.light": "Light", "theme.toDark": "Switch to dark mode", "theme.toLight": "Switch to light mode", "menu.open": "Open navigation menu", "menu.close": "Close navigation menu",
  },
  id: {
    "nav.home": "Beranda", "nav.story": "Kisah Kami", "nav.gallery": "Galeri Desain", "nav.locations": "Lokasi", "nav.careers": "Karier", "nav.contact": "Hubungi Kami", "nav.start": "Mulai proyek", "nav.primary": "Navigasi utama",
    "common.explore": "Kenali pendekatan kami", "common.viewWork": "Lihat arah desain", "common.scene": "Studi bentuk bambu · Lombok", "common.sceneAlt": "Studi arsitektur bambu dalam bentuk tiga dimensi", "common.cta1": "Punya tempat dalam pikiran?", "common.cta2": "Mari wujudkan bersama.", "common.footer": "Arsitektur bambu yang dirancang dengan cermat di Lombok.", "common.copyright": "© 2026 Bamboo Lab Architect · Lombok, Indonesia", "controls.label": "Pengaturan bahasa dan tampilan",
    "story.eyebrow": "BAMBOO LAB · PENDEKATAN KAMI", "story.title1": "Arsitektur yang", "story.title2": "tumbuh dari tempatnya.", "story.intro": "Kami memadukan pengetahuan material, desain yang matang, dan pengerjaan cermat untuk menciptakan ruang yang menyatu dengan lanskap.", "story.sectionEyebrow": "MATERIAL DENGAN KARAKTER", "story.sectionTitle1": "Kuat dalam struktur.", "story.sectionTitle2": "Lembut dalam suasana.", "story.sectionText": "Bambu mengajak kita merancang dengan memperhatikan lengkung alami, ritme, dan skalanya. Kami memulai dengan memahami tapak dan orang-orang yang akan menggunakan ruang, lalu menyusun keputusan berdasarkan konteks tersebut.", "story.value1Title": "Mendengarkan tempat", "story.value1Text": "Matahari, angin, pemandangan, dan rutinitas harian menjadi bagian dari rancangan. Langkah awal terbaik adalah memahami lahan dengan saksama.", "story.value2Title": "Merancang bersama material", "story.value2Text": "Kami mengeksplorasi bentang, sambungan, dan bentuk atap sejak awal melalui gambar dan studi 3D yang membantu memperjelas gagasan.", "story.value3Title": "Mengerjakan dengan cermat", "story.value3Text": "Persiapan material, keterampilan para perajin, dan koordinasi bengkel dengan lokasi membantu mewujudkan konsep menjadi ruang yang bertahan lama.", "story.processEyebrow": "DARI GAGASAN HINGGA RUANG TERBANGUN", "story.processTitle": "Proses yang matang, di setiap skala.", "story.processText": "Setiap proyek memiliki kondisi tersendiri. Prinsip ini menjaga kesinambungan pekerjaan sejak percakapan pertama hingga detail akhir.", "story.step1Title": "Memahami", "story.step1Text": "Diskusikan kebutuhan, anggaran, lahan, dan pengalaman yang ingin diwujudkan.", "story.step2Title": "Membayangkan", "story.step2Text": "Eksplorasi ruang dan material melalui sketsa, denah, serta visualisasi 3D.", "story.step3Title": "Mematangkan", "story.step3Text": "Selaraskan struktur, detail, dan rencana pembangunan sebelum pekerjaan dimulai di lokasi.", "story.step4Title": "Mewujudkan", "story.step4Text": "Bangun, tinjau, dan sempurnakan pekerjaan agar ruang terasa menyatu dengan lingkungannya.",
    "gallery.eyebrow": "GAGASAN, MATERIAL, DAN BENTUK", "gallery.title1": "Ruang yang dibentuk", "gallery.title2": "oleh bambu.", "gallery.intro": "Kumpulan arah desain arsitektur untuk tinggal, berkumpul, dan terhubung dengan lanskap.", "gallery.sectionEyebrow": "ARAH DESAIN", "gallery.sectionTitle": "Fungsi yang beragam, satu bahasa desain.", "gallery.sectionText": "Gunakan filter untuk menjelajahi jenis ruang yang dapat diwujudkan dengan desain bambu. Setiap proyek berangkat dari kebutuhan dan tapak tertentu.", "gallery.filterLabel": "Filter galeri desain", "gallery.filterAll": "Semua gagasan", "gallery.filterStay": "Hunian", "gallery.filterGather": "Ruang kumpul", "gallery.filterCraft": "Kriya & detail", "gallery.tagStay": "HUNIAN", "gallery.tagGather": "RUANG KUMPUL", "gallery.tagCraft": "KRIYA & DETAIL", "gallery.card1Title": "Retret bambu yang privat", "gallery.card1Text": "Tata ruang terbuka yang tenang dengan area teduh dan pemandangan taman.", "gallery.card2Title": "Ruang makan terbuka", "gallery.card2Text": "Atap luas memberi naungan tanpa menutup pandangan ke lanskap.", "gallery.card3Title": "Paviliun untuk kebersamaan", "gallery.card3Text": "Struktur ringan untuk acara, percakapan, dan kegiatan sehari-hari.", "gallery.card4Title": "Retret mengikuti kontur", "gallery.card4Text": "Rangkaian ruang privat yang ditata mengelilingi jalur, area teduh, dan fasilitas bersama.", "gallery.card5Title": "Kriya di balik lengkungan", "gallery.card5Text": "Mengenal sambungan, persiapan material, dan logika rangka bambu lebih dekat.", "gallery.card6Title": "Cahaya di balik anyaman", "gallery.card6Text": "Lapisan bambu menyeimbangkan privasi, sirkulasi udara, dan perubahan cahaya.", "gallery.note": "Studi visual ini menggambarkan kemungkinan desain; solusi akhir dikembangkan sesuai kebutuhan setiap proyek.",
    "locations.eyebrow": "LOKASI KAMI · LOMBOK, INDONESIA", "locations.title1": "Berpijak pada tempat.", "locations.title2": "Terbuka pada kemungkinan.", "locations.intro": "Pekerjaan kami berawal dari karakter tapak: cahaya, bentuk lahan, cuaca, dan cara orang bergerak di dalamnya.", "locations.explore": "Kenali pendekatan kami terhadap tapak", "locations.sectionEyebrow": "DESAIN YANG MERESPONS TAPAK", "locations.sectionTitle1": "Satu pulau.", "locations.sectionTitle2": "Banyak cara untuk menyatu.", "locations.sectionText": "Berbasis di Lombok, kami mengembangkan arsitektur bambu dengan memahami kondisi dan keterampilan setempat. Setiap lokasi menghadirkan tantangan berbeda yang dijawab melalui desain tersendiri.", "locations.mapAlt": "Ilustrasi peta yang menampilkan Lombok dan wilayah proyek Bamboo Lab", "locations.mapCaption": "Konteks pulau · ilustrasi skematis", "locations.mapLabel": "LOMBOK", "locations.mapCoast": "PESISIR SELATAN", "locations.point1Title": "Membaca lahan", "locations.point1Text": "Orientasi, kemiringan, akses, dan pemandangan membantu menentukan posisi serta bukaan bangunan.", "locations.point2Title": "Selaras dengan iklim", "locations.point2Text": "Peneduh, aliran udara, teritisan atap, dan perlindungan material dipertimbangkan sejak tahap awal desain.", "locations.point3Title": "Bekerja dengan pengetahuan lokal", "locations.point3Text": "Hasil yang baik bergantung pada komunikasi antara desainer, perajin, konsultan, dan tim proyek.", "locations.officeEyebrow": "KUNJUNGI STUDIO KAMI", "locations.officeTitle": "Basis di Lombok untuk gagasan dan pengerjaan.", "locations.officeText": "Untuk diskusi proyek dan kunjungan studio, hubungi kami terlebih dahulu agar tim dapat mengatur waktu yang sesuai.", "locations.mapLink": "Buka petunjuk arah ↗",
    "careers.eyebrow": "ORANG-ORANG YANG MEMBENTUK RUANG", "careers.title1": "Wujudkan hal", "careers.title2": "berikutnya.", "careers.intro": "Bawa rasa ingin tahu dan keterampilan Anda ke tim yang mengeksplorasi cara bambu membentuk ruang yang lebih bermakna.", "careers.explore": "Lihat cara untuk bergabung", "careers.sectionEyebrow": "PRAKTIK KOLABORATIF", "careers.sectionTitle": "Keahlian beragam, rasa ingin tahu yang sama.", "careers.sectionText": "Proyek kami menghubungkan pemikiran kreatif dengan pelaksanaan yang nyata. Kami menghargai orang yang peduli pada detail dan terbuka untuk belajar.", "careers.discipline1Title": "Arsitektur & desain", "careers.discipline1Text": "Konsep, perencanaan ruang, gambar teknis, interior, dan komunikasi visual.", "careers.discipline2Title": "Konstruksi & kriya", "careers.discipline2Text": "Persiapan material, fabrikasi, koordinasi lapangan, kualitas, dan pelaksanaan proyek.", "careers.discipline3Title": "Dukungan proyek", "careers.discipline3Text": "Perencanaan, komunikasi, operasional, dan berbagai peran yang menggerakkan proyek.", "careers.applyEyebrow": "HUBUNGI KAMI", "careers.applyTitle": "Tertarik bekerja bersama Bamboo Lab?", "careers.applyText": "Halaman ini tidak mencantumkan lowongan aktif. Kirimkan perkenalan singkat dan portofolio untuk menanyakan peluang yang tersedia.", "careers.applyCardTitle": "Bagikan karya Anda", "careers.applyCardText": "Ceritakan peran yang diminati, lokasi Anda, dan kapan Anda dapat bergabung.", "careers.applyButton": "Kirim perkenalan lewat email", "careers.cta1": "Ada pertanyaan tentang proyek?", "careers.cta2": "Kami siap mendengarkan.",
    "contact.eyebrow": "MARI MULAI DENGAN PERCAKAPAN", "contact.title1": "Proyek yang baik", "contact.title2": "berawal dari sapaan.", "contact.intro": "Ceritakan sedikit tentang lahan, gagasan, atau pertanyaan Anda. Tim kami akan membantu menentukan langkah praktis berikutnya.", "contact.details": "Detail kontak", "contact.sectionEyebrow": "HUBUNGI KAMI", "contact.sectionTitle": "Ceritakan gagasan Anda.", "contact.sectionText": "Baik baru memiliki ide maupun sudah siap membahas gambar, kami terbuka untuk berdiskusi tentang proyek Anda.", "contact.emailTitle": "Email", "contact.emailText": "Untuk pertanyaan proyek dan informasi umum.", "contact.phoneTitle": "Telepon", "contact.phoneText": "Telepon atau kirim pesan untuk mengatur percakapan.", "contact.officeTitle": "Studio", "contact.directions": "Buka petunjuk arah ↗", "contact.formTitle": "Kirim pertanyaan proyek", "contact.name": "Nama Anda", "contact.email": "Alamat email", "contact.projectType": "Apa yang sedang Anda rencanakan?", "contact.option1": "Vila atau retret", "contact.option2": "Restoran atau kafe", "contact.option3": "Paviliun atau ruang acara", "contact.option4": "Proyek lainnya", "contact.message": "Ceritakan sedikit tentang gagasan Anda", "contact.send": "Siapkan email", "contact.formNote": "Formulir ini membuka aplikasi email dengan pesan Anda. Data tidak dikirim ke situs ini.", "contact.faqEyebrow": "JAWABAN SINGKAT", "contact.faqTitle": "Sebelum berbincang.", "contact.faq1": "Informasi apa yang perlu saya siapkan?", "contact.faq1Answer": "Lokasi, perkiraan ukuran proyek, fungsi, gambar referensi, dan perkiraan jadwal akan membantu. Anda juga boleh memulai hanya dengan sebuah ide.", "contact.faq2": "Bolehkah menghubungi sebelum memiliki lahan?", "contact.faq2Answer": "Tentu. Percakapan awal dapat membantu memperjelas kebutuhan lokasi, lingkup proyek, dan langkah berikutnya.", "contact.faq3": "Apakah Anda bekerja di luar Lombok?", "contact.faq3Answer": "Lokasi proyek ditinjau satu per satu. Bagikan lokasi dan kebutuhan Anda agar tim dapat membahas kelayakannya.",
    "language.label": "Bahasa", "theme.dark": "Gelap", "theme.light": "Terang", "theme.toDark": "Beralih ke mode gelap", "theme.toLight": "Beralih ke mode terang", "menu.open": "Buka menu navigasi", "menu.close": "Tutup menu navigasi",
  },
  ja: {
    "nav.home": "ホーム", "nav.story": "私たちのストーリー", "nav.gallery": "デザインギャラリー", "nav.locations": "拠点", "nav.careers": "採用情報", "nav.contact": "お問い合わせ", "nav.start": "プロジェクトを始める", "nav.primary": "メインナビゲーション",
    "common.explore": "私たちの設計手法", "common.viewWork": "デザインを見る", "common.scene": "竹の形を考える · ロンボク島", "common.sceneAlt": "竹建築の3Dスタディ", "common.cta1": "建てたい場所がありますか？", "common.cta2": "一緒に形にしましょう。", "common.footer": "ロンボク島で丁寧につくる竹建築。", "common.copyright": "© 2026 Bamboo Lab Architect · インドネシア、ロンボク島", "controls.label": "言語と表示の設定",
    "story.eyebrow": "BAMBOO LAB · 私たちのアプローチ", "story.title1": "その土地から", "story.title2": "育まれる建築。", "story.intro": "素材の知識、丁寧な設計、確かなものづくりを組み合わせ、風景に自然になじむ空間をつくります。", "story.sectionEyebrow": "個性を持つ素材", "story.sectionTitle1": "構造は力強く。", "story.sectionTitle2": "佇まいは穏やかに。", "story.sectionText": "竹の自然な曲線、リズム、寸法を考慮して設計します。まず敷地と使う人を理解し、その背景に合わせて一つひとつの判断を重ねます。", "story.value1Title": "土地の声を聴く", "story.value1Text": "日差し、風、眺望、日々の過ごし方も設計の一部です。土地を丁寧に読み解くことから始めます。", "story.value2Title": "素材とともに設計する", "story.value2Text": "スパン、接合部、屋根形状を早い段階から検討し、図面や3Dでイメージを共有します。", "story.value3Title": "丁寧につくる", "story.value3Text": "素材の準備、職人の技術、工房と現場の連携が、長く使える場所を生み出します。", "story.processEyebrow": "最初の想いから完成した空間へ", "story.processTitle": "どの規模でも、丁寧なプロセス。", "story.processText": "プロジェクトごとに条件は異なります。最初の相談から仕上げまで、共通の考え方を大切にします。", "story.step1Title": "理解する", "story.step1Text": "ご要望、予算、敷地、実現したい体験について話し合います。", "story.step2Title": "思い描く", "story.step2Text": "スケッチ、平面図、3Dを使い、空間と素材の方向性を探ります。", "story.step3Title": "整える", "story.step3Text": "現場に進む前に、構造、詳細、施工計画を調整します。", "story.step4Title": "実現する", "story.step4Text": "建てて、確認し、仕上げを重ね、土地になじむ空間をつくります。",
    "gallery.eyebrow": "アイデア、素材、かたち", "gallery.title1": "竹がかたちづくる", "gallery.title2": "空間。", "gallery.intro": "暮らし、集い、風景とつながるための建築デザインをご紹介します。", "gallery.sectionEyebrow": "デザインの方向性", "gallery.sectionTitle": "多様な用途を、一つの設計言語で。", "gallery.sectionText": "フィルターから竹を生かした空間の可能性をご覧ください。各プロジェクトは固有の要望と敷地から始まります。", "gallery.filterLabel": "デザインギャラリーを絞り込む", "gallery.filterAll": "すべて", "gallery.filterStay": "滞在空間", "gallery.filterGather": "集いの空間", "gallery.filterCraft": "技とディテール", "gallery.tagStay": "滞在空間", "gallery.tagGather": "集いの空間", "gallery.tagCraft": "技とディテール", "gallery.card1Title": "プライベートな竹の隠れ家", "gallery.card1Text": "庭を望む日陰の中間領域を備えた、穏やかで開放的な間取り。", "gallery.card2Title": "風通しのよいダイニング", "gallery.card2Text": "広い屋根が風景を眺めながら過ごせる場所をつくります。", "gallery.card3Title": "人が集うパビリオン", "gallery.card3Text": "式典や会話、日々の活動のための軽やかな構造。", "gallery.card4Title": "地形になじむリトリート", "gallery.card4Text": "小径や日陰、共有施設を囲むように配置したプライベート空間。", "gallery.card5Title": "曲線を支える職人技", "gallery.card5Text": "竹フレームの接合、素材の準備、構造の考え方を詳しく紹介。", "gallery.card6Title": "編み込み越しの光", "gallery.card6Text": "竹の重なりで、プライバシー、通風、移ろう光のバランスを整えます。", "gallery.note": "これらはデザインの可能性を示すビジュアルスタディです。最終案は各プロジェクトの要件に合わせて設計します。",
    "locations.eyebrow": "拠点 · インドネシア、ロンボク島", "locations.title1": "土地に根ざし、", "locations.title2": "可能性をひらく。", "locations.intro": "敷地の光、地形、気候、人の動きなど、その場所ならではの特性から設計を始めます。", "locations.explore": "土地への設計手法を見る", "locations.sectionEyebrow": "敷地に応じた設計", "locations.sectionTitle1": "一つの島。", "locations.sectionTitle2": "多様な土地の個性。", "locations.sectionText": "ロンボク島を拠点に、地域の環境や技術を理解した竹建築に取り組んでいます。場所ごとの課題に合わせ、一つずつ設計します。", "locations.mapAlt": "ロンボク島とBamboo Labのプロジェクト地域を示す概略図", "locations.mapCaption": "島の位置関係 · 概略図", "locations.mapLabel": "ロンボク島", "locations.mapCoast": "南海岸", "locations.point1Title": "土地を読み解く", "locations.point1Text": "方位、傾斜、アクセス、眺望から、建物の配置と開き方を考えます。", "locations.point2Title": "気候と向き合う", "locations.point2Text": "日陰、通風、屋根の出、素材の保護を設計初期から検討します。", "locations.point3Title": "地域の知恵とつくる", "locations.point3Text": "設計者、職人、専門家、プロジェクトチームの連携が大切です。", "locations.officeEyebrow": "スタジオを訪ねる", "locations.officeTitle": "ロンボク島を拠点に、考え、つくる。", "locations.officeText": "プロジェクトの相談やスタジオ訪問をご希望の際は、事前にご連絡ください。", "locations.mapLink": "地図を開く ↗",
    "careers.eyebrow": "人が場所をつくる", "careers.title1": "次の景色を", "careers.title2": "一緒につくる。", "careers.intro": "竹がより豊かな場所を生み出す方法を探るチームで、好奇心と技術を生かしませんか。", "careers.explore": "参加方法を見る", "careers.sectionEyebrow": "協働するチーム", "careers.sectionTitle": "異なる専門性、共通する好奇心。", "careers.sectionText": "創造的な発想と実際の施工をつなぎます。細部を大切にし、互いに学ぶ姿勢を歓迎します。", "careers.discipline1Title": "建築・デザイン", "careers.discipline1Text": "コンセプト、空間計画、技術図面、インテリア、ビジュアル表現。", "careers.discipline2Title": "施工・ものづくり", "careers.discipline2Text": "素材準備、加工、現場調整、品質管理、プロジェクト推進。", "careers.discipline3Title": "プロジェクト支援", "careers.discipline3Text": "計画、コミュニケーション、運営など、仕事を前進させるさまざまな役割。", "careers.applyEyebrow": "お問い合わせ", "careers.applyTitle": "Bamboo Labで働くことに関心がありますか？", "careers.applyText": "このページでは募集中の職種を掲載していません。現在の機会について、自己紹介とポートフォリオをお送りください。", "careers.applyCardTitle": "作品をお送りください", "careers.applyCardText": "希望する職種、現在地、参加可能な時期をお知らせください。", "careers.applyButton": "自己紹介をメールする", "careers.cta1": "プロジェクトのご相談ですか？", "careers.cta2": "お気軽にご連絡ください。",
    "contact.eyebrow": "まずはお話ししましょう", "contact.title1": "良いプロジェクトは", "contact.title2": "挨拶から始まる。", "contact.intro": "敷地やアイデア、ご質問について少しお聞かせください。次の一歩を一緒に考えます。", "contact.details": "連絡先を見る", "contact.sectionEyebrow": "お問い合わせ", "contact.sectionTitle": "思い描いていることをお聞かせください。", "contact.sectionText": "アイデアの段階でも図面のご相談でも、プロジェクトについてお話しできれば嬉しいです。", "contact.emailTitle": "メール", "contact.emailText": "プロジェクトや一般的なお問い合わせはこちら。", "contact.phoneTitle": "電話", "contact.phoneText": "お電話またはメッセージでご相談ください。", "contact.officeTitle": "スタジオ", "contact.directions": "地図を開く ↗", "contact.formTitle": "プロジェクトについて問い合わせる", "contact.name": "お名前", "contact.email": "メールアドレス", "contact.projectType": "計画している建物", "contact.option1": "ヴィラ・リトリート", "contact.option2": "レストラン・カフェ", "contact.option3": "パビリオン・イベント空間", "contact.option4": "その他", "contact.message": "アイデアをお聞かせください", "contact.send": "メールを作成", "contact.formNote": "このフォームはメールアプリを開きます。入力内容はウェブサイトに送信されません。", "contact.faqEyebrow": "よくあるご質問", "contact.faqTitle": "ご相談の前に。", "contact.faq1": "どのような情報を準備すればよいですか？", "contact.faq1Answer": "場所、規模、用途、参考画像、おおよその時期があると役立ちます。アイデアだけの段階でも問題ありません。", "contact.faq2": "土地を所有する前でも相談できますか？", "contact.faq2Answer": "はい。早い段階の相談で敷地の要件やプロジェクトの範囲、次の進め方を整理できます。", "contact.faq3": "ロンボク島以外でも対応できますか？", "contact.faq3Answer": "プロジェクトの場所は個別に検討します。場所とご要望をお知らせください。",
    "language.label": "言語", "theme.dark": "ダーク", "theme.light": "ライト", "theme.toDark": "ダークモードに切り替え", "theme.toLight": "ライトモードに切り替え", "menu.open": "ナビゲーションメニューを開く", "menu.close": "ナビゲーションメニューを閉じる",
  },
};

const pageKey = document.body.dataset.page;
const themeToggle = document.getElementById("theme-toggle");
const languageSelect = document.getElementById("language-select");
const navToggle = document.getElementById("nav-toggle");
const primaryNav = document.getElementById("primary-nav");
const nav = navToggle.closest(".nav");
let language = "en";
let theme = "light";

function readPreference(key, allowed, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return allowed.includes(saved) ? saved : fallback;
  } catch (error) {
    console.warn(`Unable to read the saved ${key} preference.`, error);
    return fallback;
  }
}

function translate(key) {
  return pageCopy[language][key] ?? pageCopy.en[key] ?? key;
}

function syncPageLinks() {
  document.querySelectorAll('a[href*=".html"]').forEach((link) => {
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin) return;
    url.searchParams.set("lang", language);
    link.href = `${url.pathname}${url.search}${url.hash}`;
  });
}

function updateMetadata() {
  const [title, description] = pageSeo[pageKey][language];
  const canonical = new URL(location.pathname, "https://bamboo-lab.vercel.app");
  canonical.searchParams.set("lang", language);
  document.title = title;
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('meta[property="og:url"]').content = canonical.href;
  document.querySelector('link[rel="canonical"]').href = canonical.href;
  document.documentElement.lang = language;
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => {
    const localized = new URL(location.pathname, "https://bamboo-lab.vercel.app");
    const locale = link.hreflang === "x-default" ? "en" : link.hreflang;
    localized.searchParams.set("lang", locale);
    link.href = localized.href;
  });
  const url = new URL(location.href);
  if (url.searchParams.get("lang") !== language) {
    url.searchParams.set("lang", language);
    try {
      history.replaceState(null, "", url);
    } catch (error) {
      console.warn("Unable to synchronize the selected language in the URL.", error);
    }
  }
  syncPageLinks();
}

function applyLanguage(nextLanguage, save = false) {
  language = nextLanguage;
  languageSelect.value = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria));
  });
  document.getElementById("primary-nav").setAttribute(
    "aria-label",
    translate("nav.primary"),
  );
  document.querySelector(".site-controls").setAttribute(
    "aria-label",
    translate("controls.label"),
  );
  document.querySelector(".sr-only").textContent = translate("language.label");
  document.querySelector(".arch-scene").setAttribute(
    "aria-label",
    translate("common.sceneAlt"),
  );
  document.querySelector(".page-footer small").textContent =
    translate("common.copyright");
  const galleryLabel = document.querySelector(".gallery-filters");
  if (galleryLabel) {
    galleryLabel.setAttribute("aria-label", translate("gallery.filterLabel"));
  }
  const map = document.querySelector(".island-map");
  if (map) {
    map.setAttribute("aria-label", translate("locations.mapAlt"));
    map.querySelector(".label-island").textContent =
      translate("locations.mapLabel");
    map.querySelector(".label-south").textContent =
      translate("locations.mapCoast");
  }
  languageSelect.setAttribute("aria-label", translate("language.label"));
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute(
    "aria-label",
    translate(open ? "menu.close" : "menu.open"),
  );
  navToggle.title = translate(open ? "menu.close" : "menu.open");
  applyTheme(theme);
  updateMetadata();
  if (save) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
      console.warn("Unable to save the language preference.", error);
    }
  }
}

function applyTheme(nextTheme, save = false) {
  theme = nextTheme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  const label = theme === "dark" ? "theme.toLight" : "theme.toDark";
  themeToggle.setAttribute("aria-label", translate(label));
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.title = translate(label);
  themeToggle.querySelector("span").textContent = translate(
    theme === "dark" ? "theme.light" : "theme.dark",
  );
  if (save) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.warn("Unable to save the theme preference.", error);
    }
  }
}

const requestedLanguage = new URLSearchParams(location.search).get("lang");
const initialLanguage = languages.includes(requestedLanguage)
  ? requestedLanguage
  : readPreference(LANGUAGE_STORAGE_KEY, languages, "en");
theme = readPreference(THEME_STORAGE_KEY, ["light", "dark"], "light");
applyTheme(theme);
applyLanguage(initialLanguage);

themeToggle.addEventListener("click", () => {
  applyTheme(theme === "dark" ? "light" : "dark", true);
});
languageSelect.addEventListener("change", () =>
  applyLanguage(languageSelect.value, true),
);
navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(expanded));
  primaryNav.classList.toggle("is-open", expanded);
  nav.classList.toggle("menu-open", expanded);
  const label = translate(expanded ? "menu.close" : "menu.open");
  navToggle.setAttribute("aria-label", label);
  navToggle.title = label;
});
primaryNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  primaryNav.classList.remove("is-open");
  nav.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", translate("menu.open"));
  navToggle.title = translate("menu.open");
});
document.addEventListener("click", (event) => {
  if (!nav.classList.contains("menu-open") || nav.contains(event.target)) return;
  primaryNav.classList.remove("is-open");
  nav.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", translate("menu.open"));
  navToggle.title = translate("menu.open");
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !primaryNav.classList.contains("is-open")) {
    return;
  }
  primaryNav.classList.remove("is-open");
  nav.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", translate("menu.open"));
  navToggle.title = translate("menu.open");
  navToggle.focus();
});
addEventListener("resize", () => {
  if (innerWidth <= 1100 || !nav.classList.contains("menu-open")) return;
  primaryNav.classList.remove("is-open");
  nav.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", translate("menu.open"));
  navToggle.title = translate("menu.open");
});

const enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const subject = `Bamboo Lab project enquiry - ${data.get("project")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Project: ${data.get("project")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    location.href = `mailto:support@bamboolab-arch.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* ---------- 3D architecture scene (same visual language as the home page) ---------- */
function startArchitectureScene(canvas) {
  if (!window.THREE) {
    console.error("The 3D scene could not start because Three.js did not load.");
    return;
  }
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
  } catch (error) {
    console.error("Unable to create the architecture preview renderer.", error);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();

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
    grey: 0xcfc8c1,
    green: 0x5f8f45,
    green2: 0x80ae5a,
    gb: 0x93b04a,
    sand: 0xdcc9a0,
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

  /* ---------- primitives ---------- */
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

  /* ---------- textures ---------- */
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

  /* logo emblem (same as the home page scene) */
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
      g.quadraticCurveTo(cx + k * rx * 0.42, by - ry * 0.5, cx + k * rx * 0.32, by);
      g.stroke();
    }
    g.strokeStyle = "#a9772a";
    g.lineWidth = 2;
    for (let k = 1; k <= 3; k++) {
      g.beginPath();
      g.ellipse(cx, by, rx * (1 - k * 0.22), ry * (1 - k * 0.22) * 0.18, 0, Math.PI, 0);
      g.stroke();
    }
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = 8;
    return t;
  }

  /* ---------- bamboo building blocks ---------- */
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
      pts.push(new THREE.Vector3(cx + Math.cos(a) * rx, y, cz + Math.sin(a) * rz));
    }
    const m = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 64, r, 6, true),
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
          new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.09, 6, false),
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
            new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.08, 6, false),
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
      new THREE.MeshStandardMaterial({ map: t, roughness: 0.9, side: THREE.DoubleSide }),
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

  /* ---------- landscape + props ---------- */
  function clump(p, x, z, n = 7, s = 1, y = 0) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.scale.setScalar(s);
    p.add(g);
    for (let k = 0; k < n; k++) {
      const a = k * 2.4,
        r = 0.35 + ((k * 37) % 10) * 0.09,
        h = 7 + ((k * 53) % 7) * 0.7,
        bx = Math.cos(a),
        bz = Math.sin(a);
      link(g, bx * r * 0.5, 0, bz * r * 0.5, bx * (r + 1.1), h, bz * (r + 1.1), 0.14, C.gb);
      const lf = sph(g, 1, C.green, bx * (r + 1.1), h, bz * (r + 1.1));
      lf.scale.set(1.4, 0.4, 1.4);
    }
  }
  function tree(p, x, z, s = 1, y = 0) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.scale.setScalar(s);
    p.add(g);
    cyl(g, 0.18, 0.25, 2.4, 0x8a6a4f, 0, 0, 0, 8);
    sph(g, 1.2, C.green, 0, 3.2, 0);
    sph(g, 0.9, C.green2, 0.6, 4, 0.2);
    sph(g, 0.8, C.green, -0.6, 4.2, -0.2);
  }
  function plant(p, x, z, y = 0) {
    box(p, 0.9, 0.7, 0.9, C.white, x, y, z);
    sph(p, 0.7, C.green, x, y + 1.3, z);
  }
  function stool(p, x, z, c = C.bam2, y = 0) {
    cyl(p, 0.6, 0.6, 0.18, c, x, y + 0.85, z, 16);
    [
      [-0.35, -0.25],
      [0.35, -0.25],
      [0, 0.4],
    ].forEach((l) => pole(p, x + l[0], y, z + l[1], 0.9, 0.06, C.bamD));
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
  function table(p, x, z, y = 0) {
    cyl(p, 0.9, 0.9, 0.1, C.cream, x, y + 0.62, z, 16);
    cyl(p, 0.08, 0.08, 0.8, C.bamD, x, y, z, 6);
  }
  function counter(p, x, z, w, d, top = C.wood, body = C.cream) {
    box(p, w, 1.5, d, body, x, 0, z);
    box(p, w + 0.3, 0.22, d + 0.3, top, x, 1.5, z);
  }

  const actors = [];
  function person(p, x, z, o = {}) {
    const g = new THREE.Group();
    g.position.set(x, o.y || 0, z);
    g.rotation.y = o.ry || 0;
    p.add(g);
    const shirt = o.shirt ?? C.white,
      pants = o.pants ?? 0x4b4a5a,
      skin = o.skin ?? 0xf1c7a3,
      hair = o.hair ?? 0x2a1f1a;
    const arms = [];
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
      [-0.24, 0.24].forEach((x0) => {
        const pv = new THREE.Group();
        pv.position.set(x0, 0, 0);
        lg.add(pv);
        add(pv, new THREE.BoxGeometry(0.38, 1.55, 0.42), pants, 0, -0.78, 0);
      });
      cyl(g, 0.48, 0.6, 1.7, shirt, 0, 1.5, 0);
      sph(g, 0.47, skin, 0, 3.5, 0);
      const h = sph(g, 0.51, hair, 0, 3.66, -0.12);
      h.scale.set(1, 0.8, 1);
      [-0.72, 0.72].forEach((x0) => {
        const a = new THREE.Group();
        a.position.set(x0, 2.95, 0);
        g.add(a);
        add(a, new THREE.BoxGeometry(0.28, 1.2, 0.28), shirt, 0, -0.6, 0);
        arms.push(a);
      });
      if (o.wave) {
        arms[1].rotation.z = -2.5;
      }
    }
    const a = { g, arms, ph: Math.random() * 6.28, wave: !!o.wave, base: g.position.y };
    actors.push(a);
    return a;
  }

  /* a work area: bamboo-slat floor with woven back + left walls and a doorway */
  function deck(p, w, d) {
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
  }

  /* a finished bamboo pod with a glowing door */
  function pod(p, x, y, z, s = 1, ry = 0) {
    const q = new THREE.Group();
    q.position.set(x, y, z);
    q.scale.setScalar(s);
    q.rotation.y = ry;
    p.add(q);
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
    return q;
  }
  /* tapered bamboo spire */
  function spire(p, cx, cz, R0, H, n = 12, y0 = 0) {
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2;
      link(
        p,
        cx + Math.cos(a) * R0,
        y0,
        cz + Math.sin(a) * R0,
        cx + Math.cos(a) * 0.35,
        y0 + H,
        cz + Math.sin(a) * 0.35,
        0.17,
        C.bam,
      );
    }
    [0.25, 0.55, 0.8].forEach((f) => {
      const r = R0 + (0.35 - R0) * f;
      ringTube(p, r, r, y0 + H * f, 0.1, C.bamD, cx, cz);
    });
    sph(p, 0.65, C.bam2, cx, y0 + H + 0.45, cz);
  }
  /* sign board that reads from both sides (the scene sways, it never spins) */
  function signBoard(p, t, w, h, x, y, z) {
    pole(p, x - w / 2 - 0.3, 0, z, y + h / 2 + 0.6, 0.2);
    pole(p, x + w / 2 + 0.3, 0, z, y + h / 2 + 0.6, 0.2);
    box(p, w + 0.6, h + 0.6, 0.3, C.navy, x, y - h / 2 - 0.3, z);
    sign(p, t, w, h, x, y, z + 0.17);
    sign(p, t, w, h, x, y, z - 0.17, Math.PI);
  }
  /* scaffold with a worker on the upper platform */
  function scaffold(p, x, z, y0 = 0) {
    [
      [0, 0],
      [3, 0],
      [0, 2.2],
      [3, 2.2],
    ].forEach((c) => pole(p, x + c[0], y0, z + c[1], 5, 0.12, C.bamD));
    [2.4, 4.5].forEach((y) => {
      link(p, x, y0 + y, z, x + 3, y0 + y, z, 0.1, C.bam);
      link(p, x, y0 + y, z + 2.2, x + 3, y0 + y, z + 2.2, 0.1, C.bam);
      link(p, x, y0 + y, z, x, y0 + y, z + 2.2, 0.1, C.bam);
      link(p, x + 3, y0 + y, z, x + 3, y0 + y, z + 2.2, 0.1, C.bam);
    });
    box(p, 3.4, 0.15, 2.6, C.wood, x + 1.5, y0 + 3, z + 1.1);
    person(p, x + 1.4, z + 0.9, { shirt: C.bam2, hair: 0x1f1713, y: y0 + 3.15 });
  }

  /* ---------- page models ---------- */
  const BUILD = {};

  /* OUR STORY: the dome pavilion, a bamboo spire and the studio sign */
  BUILD.story = (g) => {
    const D = new THREE.Group();
    D.position.set(-1.5, 0, 1);
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
    ].forEach((t) => table(D, t[0], t[1], 0.5));
    stool(D, -1.2, -1.2, C.bam2, 0.5);
    stool(D, -4, -1.2, C.bam2, 0.5);
    person(D, -2.6, -2.6, { sit: true, shirt: C.bam2, y: 0.5 });
    person(D, 3.4, 0.6, { shirt: C.navy, hair: 0x241a15, y: 0.5, ry: -1.2 });

    spire(g, 10.5, -6.5, 3.4, 13);
    signBoard(g, logoPlate(), 4.2, 3.58, 8.2, 3.9, 10);
    const pond = new THREE.Mesh(new THREE.CircleGeometry(2.6, 32), waterMat);
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(-12.8, 0.05, 1.5);
    g.add(pond);
    clump(g, -12.5, -6, 7, 0.95);
    clump(g, -11, 10, 5, 0.8);
    clump(g, 2, -13, 6, 0.9);
    tree(g, -6, -12.8, 1);
    tree(g, 13.8, 2.5, 1);
    person(g, 6.5, 9, { shirt: C.white, hair: 0x241a15, ry: Math.PI });
  };

  /* DESIGN GALLERY: four plinths, each showing a different bamboo idea */
  BUILD.gallery = (g) => {
    const S = 7.6,
      O = 6.2,
      PY = 0.4;
    [
      [-O, -O],
      [O, -O],
      [-O, O],
      [O, O],
    ].forEach((c) => {
      box(g, S, PY, S, C.cream, c[0], 0, c[1]);
      box(g, S + 0.3, 0.1, S + 0.3, C.gold, c[0], 0, c[1]);
    });

    /* A · retreat pod */
    pod(g, -O, PY, -O, 0.95, 0.35);
    clump(g, -O - 2.6, -O - 2.3, 4, 0.5, PY);

    /* B · open-air dining under a wave roof */
    slatBox(g, 6.6, 0.12, 6.6, O, PY, -O);
    waveRoof(g, 6.4, 6, O, 5.8, -O, 0.55);
    table(g, O - 1.4, -O + 0.2, PY + 0.12);
    table(g, O + 1.5, -O - 0.8, PY + 0.12);
    stool(g, O - 2.3, -O + 0.4, C.bam2, PY + 0.12);
    stool(g, O + 2.1, -O + 0.6, C.bam2, PY + 0.12);
    person(g, O + 0.2, -O + 1.4, { sit: true, shirt: C.navy, y: PY + 0.12, ry: Math.PI });

    /* C · ribs and arches: the craft behind the curve */
    for (let k = 0; k < 5; k++)
      archTube(g, 5.6, 4.4, 0.12, C.bam, -O, PY, O - 2.4 + k * 1.2);
    [
      [0, 0],
      [Math.PI / 4, 0],
      [(Math.PI * 3) / 4, 0],
    ].forEach((a) => {
      const X = -O + Math.cos(a[0]) * 2.8,
        Y = PY + Math.sin(a[0]) * 4.4;
      link(g, X, Y, O - 2.4, X, Y, O + 2.4, 0.09, C.bamD);
    });
    pole(g, -O - 3.3, PY, O - 2.6, 3, 0.16);
    pole(g, -O + 3.3, PY, O - 2.6, 3, 0.16);
    person(g, -O + 1.4, O + 2.9, { shirt: C.bam2, hair: 0x1f1713, y: PY, ry: Math.PI });

    /* D · light through woven screens */
    slatBox(g, 3.4, 4.4, 0.3, O - 1.4, PY, O - 1.6);
    slatBox(g, 3.4, 4.4, 0.3, O + 1.3, PY, O - 0.2);
    slatBox(g, 3.4, 4.4, 0.3, O - 1.1, PY, O + 1.4);
    box(g, 7, 0.1, 0.3, C.navy, O, PY + 4.4, O - 1.6);
    plant(g, O + 2.7, O + 2.7, PY);
    stool(g, O + 2.0, O + 1.2, C.bam2, PY);
    person(g, O - 2.4, O + 2.7, { shirt: C.white, hair: 0x3a2a22, y: PY, ry: Math.PI });

    /* centrepiece spire joining the four ideas */
    cyl(g, 1.5, 1.7, 0.4, C.wood, 0, 0, 0, 24);
    spire(g, 0, 0, 1.8, 11, 10, 0.4);

    clump(g, 14.2, -1, 5, 0.7);
    clump(g, -14.2, 0.5, 5, 0.7);
    tree(g, 1.5, 13.8, 0.9);
  };

  /* LOCATIONS: terraced terrain, pods placed on the land, a build underway */
  BUILD.locations = (g) => {
    const L = [
      { r: 15.5, y: 0, h: 0.7, c: C.sand },
      { r: 10.5, y: 0.7, h: 0.7, c: C.green2 },
      { r: 7, y: 1.4, h: 0.7, c: C.gb },
      { r: 4, y: 2.1, h: 0.7, c: C.floor },
    ];
    L.forEach((t) => cyl(g, t.r, t.r + 0.1, t.h, t.c, 0, t.y, 0, 64));
    /* stairs between terraces */
    [
      [0.25, 10.5, 0.7],
      [2.1, 7, 1.4],
      [4.7, 4, 2.1],
    ].forEach(([a, re, yb]) => {
      for (let i = 0; i < 4; i++) {
        const h = ((i + 1) * 0.7) / 4,
          r = re + 0.25 + (3 - i) * 0.5;
        const m = add(
          g,
          new THREE.BoxGeometry(1.8, h, 0.5),
          C.path,
          Math.cos(a) * r,
          yb + h / 2,
          Math.sin(a) * r,
        );
        m.rotation.y = Math.PI / 2 - a;
      }
    });
    /* summit pod + flag */
    pod(g, 0, 2.8, 0, 0.95, 0.5);
    pole(g, 3.0, 2.8, -2.6, 3.8, 0.06, C.bamD);
    box(g, 1.0, 0.6, 0.05, C.navy, 3.55, 5.9, -2.6);
    /* mid-terrace pods */
    pod(g, Math.cos(2.4) * 8.7, 1.4, Math.sin(2.4) * 8.7, 0.5, 2.4);
    pod(g, Math.cos(4.3) * 8.7, 1.4, Math.sin(4.3) * 8.7, 0.5, 4.3);
    tree(g, Math.cos(0.9) * 5.5, Math.sin(0.9) * 5.5, 0.6, 2.1);
    tree(g, Math.cos(3.4) * 5.5, Math.sin(3.4) * 5.5, 0.6, 2.1);
    tree(g, Math.cos(5.4) * 5.5, Math.sin(5.4) * 5.5, 0.55, 2.1);
    /* house frame under construction on the outer terrace */
    const fx = Math.cos(-0.9) * 13,
      fz = Math.sin(-0.9) * 13;
    cyl(g, 2.5, 2.6, 0.3, C.wood, fx, 0.7, fz, 32);
    dome(g, 2.3, 2.2, 2.3, fx, 1.0, fz, {
      phi0: 0,
      phiL: Math.PI * 0.5,
      rep: [3, 2],
      rp0: 0,
      rpL: Math.PI * 2,
    });
    scaffold(g, Math.cos(0.65) * 12.6 - 1.5, Math.sin(0.65) * 12.6 - 1.1, 0.7);
    /* water + planting on the outer terrace */
    const pond = new THREE.Mesh(new THREE.CircleGeometry(2.1, 32), waterMat);
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(Math.cos(2.7) * 13, 0.73, Math.sin(2.7) * 13);
    g.add(pond);
    clump(g, Math.cos(3.9) * 13, Math.sin(3.9) * 13, 6, 0.8, 0.7);
    tree(g, Math.cos(5.5) * 13, Math.sin(5.5) * 13, 0.9, 0.7);
    /* bamboo poles stacked at the foot of the site */
    for (let l = 0; l < 3; l++)
      for (let k = 0; k < 3 - l; k++)
        link(g, 1, 0.95 + l * 0.34, 13.2 + k * 0.36 + l * 0.18, 5.5, 0.95 + l * 0.34, 13.2 + k * 0.36 + l * 0.18, 0.17, C.bam);
    person(g, Math.cos(0.2) * 12.6, Math.sin(0.2) * 12.6, { shirt: C.white, hair: 0x241a15, y: 0.7, ry: 1.9 });
  };

  /* CAREERS: the fabrication workshop, a bending jig and a scaffold */
  BUILD.careers = (g) => {
    deck(g, 22, 18);
    for (let k = 0; k < 4; k++) archTube(g, 5, 4.2, 0.12, C.bam, 5.8, 0.15, -7.5 + k * 1.15);
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
    for (let l = 0; l < 6; l++) box(g, 2.6, 0.12, 1.6, C.bam2, -4.4, 0.15 + l * 0.13, -6.6);
    counter(g, -6, 6.2, 6, 1.5, C.wood, C.cream);
    [0, 1, 2].forEach((i) =>
      box(g, 0.8, 0.3, 0.5, [C.navy, C.bam, C.cream][i], -7.4 + i * 1.2, 1.72, 6.2),
    );
    person(g, -4.6, 4.6, { shirt: C.white, hair: 0x241a15 });
    for (let k = 0; k < 6; k++)
      link(g, 8.5 + k * 0.35, 0.15, -6.6, 8.5 + k * 0.35, 5.2, -8.3, 0.16, C.bam);
    scaffold(g, 6.4, 0.2, 0.15);
    chair(g, 8, 6.5, Math.PI, C.bam);
    person(g, 8, 5.9, { sit: true, shirt: C.navy, ry: Math.PI });
    /* a half-built dome rib frame being assembled */
    cyl(g, 2.3, 2.4, 0.3, C.wood, 1.2, 0.15, 3.4, 32);
    dome(g, 2.1, 2.0, 2.1, 1.2, 0.45, 3.4, { phi0: 0, phiL: Math.PI * 0.5, rep: [3, 2], rp0: 0, rpL: Math.PI * 2 });
    plant(g, 9.4, -3.6, 0.15);
    clump(g, -9.4, 7.6, 5, 0.7, 0.15);
  };

  /* GET IN TOUCH: a welcoming handover, pods, pool and a greeting */
  BUILD.contact = (g) => {
    deck(g, 22, 18);
    pod(g, -4, 0.15, -3.8, 1);
    pod(g, 5.4, 0.15, -3.8, 1);
    signBoard(g, logoPlate(), 3.2, 2.73, 0.7, 2.7, -8.2);
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
    table(g, 2.9, 6.6, 0.15);
    /* a warm welcome */
    person(g, 6.3, 7.4, { shirt: C.bam2, hair: 0x6a4a2a, ry: 2.06, wave: true });
    person(g, 8.3, 6.4, { shirt: C.navy, hair: 0x241a15, ry: -1.08 });
    person(g, 0.6, 1.2, { shirt: C.white, hair: 0x241a15, ry: 0.4 });
    tree(g, -9.6, 8, 0.9, 0.15);
    clump(g, 9.6, -8, 5, 0.7, 0.15);
    plant(g, 9.4, 1.2, 0.15);
  };

  /* ---------- assemble ---------- */
  const world = new THREE.Group();
  scene.add(world);
  /* diorama base so every page model sits on the same plinth */
  cyl(world, 17, 17.3, 0.7, C.floor, 0, -0.7, 0, 72);
  cyl(world, 17.5, 17.6, 0.35, C.wood, 0, -1.05, 0, 72);
  ringTube(world, 16.5, 16.5, 0.02, 0.07, C.gold);
  (BUILD[pageKey] || BUILD.story)(world);

  /* ---------- lights ---------- */
  scene.add(new THREE.HemisphereLight(0xfff3e0, 0xe0d1b4, 0.95));
  const sun = new THREE.DirectionalLight(0xffefd6, 0.7);
  sun.position.set(-34, 52, 26);
  sun.castShadow = true;
  const shadowResolution = window.innerWidth < 768 ? 1024 : 2048;
  sun.shadow.mapSize.set(shadowResolution, shadowResolution);
  Object.assign(sun.shadow.camera, {
    left: -24,
    right: 24,
    top: 24,
    bottom: -24,
    near: 1,
    far: 200,
  });
  sun.shadow.bias = -0.0008;
  scene.add(sun, sun.target);

  /* ---------- isometric camera (same angle as the home page) ---------- */
  const cam = new THREE.OrthographicCamera(-10, 10, 10, -10, -200, 400);
  const target = new THREE.Vector3(0, 4, 0);
  const camOffset = new THREE.Vector3(1, 0.92, 1).normalize().multiplyScalar(90);
  cam.position.copy(target).add(camOffset);
  cam.lookAt(target);

  function resize() {
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    renderer.setSize(width, height, false);
    const aspect = width / height;
    const hh = Math.max(15.5, 19 / aspect);
    cam.left = -hh * aspect;
    cam.right = hh * aspect;
    cam.top = hh;
    cam.bottom = -hh;
    cam.updateProjectionMatrix();
    renderer.render(scene, cam);
  }
  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  /* ---------- animation: gentle sway, idle people ---------- */
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const BASE_ROT = -0.12;
  let visible = false;
  let frameHandle = null;
  const clock = new THREE.Clock();

  function pose(T) {
    world.rotation.y = reducedMotion ? BASE_ROT : BASE_ROT + Math.sin(T * 0.22) * 0.32;
    actors.forEach((a) => {
      if (reducedMotion) return;
      a.g.position.y = a.base + Math.max(0, Math.sin(T * 1.6 + a.ph)) * 0.05;
      if (a.arms.length) {
        if (a.wave) a.arms[1].rotation.x = Math.sin(T * 5 + a.ph) * 0.35;
        else a.arms[0].rotation.x = Math.sin(T * 1.2 + a.ph) * 0.12;
      }
    });
  }
  pose(0);
  renderer.render(scene, cam);

  function animate() {
    frameHandle = null;
    if (!visible || document.hidden) return;
    pose(clock.getElapsedTime());
    renderer.render(scene, cam);
    if (!reducedMotion) frameHandle = requestAnimationFrame(animate);
  }

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && frameHandle === null) frameHandle = requestAnimationFrame(animate);
    if (!visible && frameHandle !== null) {
      cancelAnimationFrame(frameHandle);
      frameHandle = null;
    }
  });
  observer.observe(canvas);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frameHandle !== null) {
      cancelAnimationFrame(frameHandle);
      frameHandle = null;
    } else if (!document.hidden && visible && frameHandle === null) {
      frameHandle = requestAnimationFrame(animate);
    }
  });
}

/* wait briefly for the brand fonts so the logo sign renders correctly */
(document.fonts && document.fonts.load
  ? Promise.race([
      Promise.all([
        document.fonts.load('800 40px "Bricolage Grotesque"'),
        document.fonts.load('500 20px "Figtree"'),
      ]),
      new Promise((resolve) => setTimeout(resolve, 1200)),
    ])
  : Promise.resolve()
)
  .catch(() => {})
  .then(() => document.querySelectorAll(".arch-scene").forEach(startArchitectureScene));