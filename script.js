/**
 * ============================================================================
 * FOR ZUHA - PRIVATE APOLOGY & ROMANTIC INTERACTIVE WEB EXPERIENCE
 * ============================================================================
 * 
 * QUICK EDIT CONFIGURATION:
 * 1. PASSCODE & HINT:
 *    - Edit `CONFIG.passcode` and `CONFIG.hintText` below.
 * 2. MESSAGE / APOLOGY LETTER:
 *    - Edit the `CONFIG.messageParagraphs` array below with your personal words.
 * 3. WHATSAPP PHONE NUMBER:
 *    - Edit `CONFIG.phoneNumber` below (currently set to 923088295557).
 * 4. PHOTOS & CAPTIONS:
 *    - Edit `CONFIG.photos` array below. Place your images in the `photos/` folder.
 * 5. QUIZ QUESTIONS & REACTIONS:
 *    - Edit the `CONFIG.questions` array below. Any option she picks is accepted!
 * ============================================================================
 */

const CONFIG = {
  // --- 1. Passcode Configuration ---
  // The answer to the riddle. Case-insensitive and trimmed.
  // Secondary answers also supported so she won't get stuck if she guesses variations!
  passcode: "HEART",
  secondaryPasscodes: ["ZUHA", "DIL", "MY HEART", "YOUR HEART", "LOVE", "PROJECT LOVE"],
  hintText: "Riddle: What belongs completely to you, but only beats for you?",

  // --- 2. WhatsApp Contact ---
  phoneNumber: "923088295557",

  // --- 3. Apology Message / Letter Paragraphs ---
  // Each paragraph fades in sequentially about 1.5s apart.
  messageParagraphs: [
    "My dearest Zuha,",
    "I'm writing this because words sometimes fail me in the moment, but my heart has never been more certain of how much you mean to me. I know I messed up, and seeing you hurt because of me breaks something deep inside me.",
    "You are the most precious person in my world—your laughter, your kindness, and the warmth you bring into my life are things I never, ever want to take for granted.",
    "I am truly, deeply sorry from the bottom of my heart. I don't expect everything to magically disappear with a website, but I wanted to make this to show you that I am here, I am listening, and I will always choose you.",
    "Whenever you are ready to talk, I am here. No rush, no pressure. Just me, waiting to hold your hand and make things right."
  ],

  // --- 4. Photos & Captions ---
  // Place 10-15 images inside the photos/ folder (e.g. photos/1.jpg to photos/12.jpg)
  photos: [
    { src: "photos/1.jpg", caption: "The smile that caught my heart forever" },
    { src: "photos/2.jpg", caption: "One of my favorite days with you" },
    { src: "photos/3.jpg", caption: "Every little moment with you is magic" },
    { src: "photos/4.jpg", caption: "Your warmth in a world that feels so cold" },
    { src: "photos/5.jpg", caption: "Us against the world, always" },
    { src: "photos/6.jpg", caption: "The way your eyes light up when you're happy" },
    { src: "photos/7.jpg", caption: "A quiet moment I hold so close" },
    { src: "photos/8.jpg", caption: "My favorite person to laugh with" },
    { src: "photos/9.jpg", caption: "No one else could ever compare to you" },
    { src: "photos/10.jpg", caption: "Forever grateful that you walked into my life" }
  ],

  // --- 5. Quiz Questions & Reactions ---
  // NO WRONG ANSWERS: Every tap is accepted and increments the score.
  questions: [
    {
      question: "When did I realize you were the one?",
      options: [
        "The very first conversation we had",
        "The first time you laughed at my silly joke",
        "When I saw how deeply pure your heart is",
        "Honestly, every single day all over again"
      ],
      reactions: [
        "From the first word, you felt like home.",
        "Your laugh is my absolute favorite sound on earth.",
        "Your kindness is what made me fall irrevocably in love.",
        "And I will keep choosing you every single tomorrow."
      ]
    },
    {
      question: "What is my absolute favorite thing about you, Zuha?",
      options: [
        "Your breathtaking eyes and smile",
        "How caring and protective you are",
        "The cute way you pout when you're teasing me",
        "Everything—there isn't a single flaw"
      ],
      reactions: [
        "I could get lost in your eyes for a lifetime.",
        "Your gentle care is the safest place I've ever known.",
        "It melts me completely every single time.",
        "You are absolute perfection in my eyes."
      ]
    },
    {
      question: "What is my favorite memory of us so far?",
      options: [
        "Our late-night talks where hours felt like seconds",
        "That time we couldn't stop laughing together",
        "A quiet, simple moment where it was just us",
        "Every second we've ever shared together"
      ],
      reactions: [
        "Those nights are etched into my soul forever.",
        "My heart was so full of joy in that moment.",
        "Pure peace with my favorite human.",
        "Each memory with you is a treasure I guard with my life."
      ]
    },
    {
      question: "If we could be anywhere in the world right now, where would we be?",
      options: [
        "Under a dark starry sky, just talking quietly",
        "On a cozy couch with warm blankets and hot chocolate",
        "Walking by the ocean listening to the waves",
        "Anywhere at all, as long as I'm with you"
      ],
      reactions: [
        "Under the stars with you is my definition of heaven.",
        "The warmest, sweetest sanctuary in existence.",
        "The sea breeze and your hand in mine.",
        "Anywhere with you is my favorite place on Earth."
      ]
    },
    {
      question: "How long am I going to keep loving you?",
      options: [
        "Until the stars stop shining",
        "Through every storm and sunny day",
        "Beyond forever and then some",
        "Always and without an end"
      ],
      reactions: [
        "Even then, my love for you will remain.",
        "Hand in hand through everything life brings.",
        "Forever is just the start for us.",
        "Always, Zuha. Always."
      ]
    }
  ]
};

// ============================================================================
// 44 LANGUAGES LIST (Exact specification)
// ============================================================================
const LANGUAGES = [
  { lang: "English", text: "I love you", rtl: false },
  { lang: "Urdu", text: "مجھے تم سے محبت ہے", rtl: true, isUrdu: true },
  { lang: "Hindi", text: "मुझे तुमसे प्यार है", rtl: false },
  { lang: "Arabic", text: "أحبك", rtl: true },
  { lang: "Persian", text: "دوستت دارم", rtl: true },
  { lang: "Hebrew", text: "אני אוהב אותך", rtl: true },
  { lang: "Turkish", text: "Seni seviyorum", rtl: false },
  { lang: "Spanish", text: "Te quiero", rtl: false },
  { lang: "French", text: "Je t'aime", rtl: false },
  { lang: "German", text: "Ich liebe dich", rtl: false },
  { lang: "Italian", text: "Ti amo", rtl: false },
  { lang: "Portuguese", text: "Eu te amo", rtl: false },
  { lang: "Dutch", text: "Ik hou van jou", rtl: false },
  { lang: "Swedish", text: "Jag älskar dig", rtl: false },
  { lang: "Norwegian", text: "Jeg elsker deg", rtl: false },
  { lang: "Danish", text: "Jeg elsker dig", rtl: false },
  { lang: "Finnish", text: "Minä rakastan sinua", rtl: false },
  { lang: "Polish", text: "Kocham cię", rtl: false },
  { lang: "Czech", text: "Miluji tě", rtl: false },
  { lang: "Hungarian", text: "Szeretlek", rtl: false },
  { lang: "Romanian", text: "Te iubesc", rtl: false },
  { lang: "Russian", text: "Я тебя люблю", rtl: false },
  { lang: "Ukrainian", text: "Я тебе кохаю", rtl: false },
  { lang: "Greek", text: "Σ' αγαπώ", rtl: false },
  { lang: "Japanese", text: "愛してる", rtl: false },
  { lang: "Korean", text: "사랑해", rtl: false },
  { lang: "Chinese", text: "我爱你", rtl: false },
  { lang: "Thai", text: "ฉันรักเธอ", rtl: false },
  { lang: "Vietnamese", text: "Anh yêu em", rtl: false },
  { lang: "Indonesian", text: "Aku cinta kamu", rtl: false },
  { lang: "Malay", text: "Saya cinta padamu", rtl: false },
  { lang: "Filipino", text: "Mahal kita", rtl: false },
  { lang: "Bengali", text: "আমি তোমাকে ভালোবাসি", rtl: false },
  { lang: "Tamil", text: "நான் உன்னை காதலிக்கிறேன்", rtl: false },
  { lang: "Punjabi", text: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ", rtl: false },
  { lang: "Georgian", text: "მიყვარხარ", rtl: false },
  { lang: "Armenian", text: "Սիրում եմ քեզ", rtl: false },
  { lang: "Swahili", text: "Nakupenda", rtl: false },
  { lang: "Zulu", text: "Ngiyakuthanda", rtl: false },
  { lang: "Amharic", text: "እወድሻለሁ", rtl: false },
  { lang: "Welsh", text: "Rwy'n dy garu di", rtl: false },
  { lang: "Irish", text: "Tá grá agam duit", rtl: false },
  { lang: "Hawaiian", text: "Aloha au iā 'oe", rtl: false },
  { lang: "Latin", text: "Te amo", rtl: false }
];

// ============================================================================
// APP CONTROLLER & SCREEN NAVIGATION
// ============================================================================
// ============================================================================
// APP CONTROLLER & SCREEN NAVIGATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initStardustCanvas();
  initAmbientDecor();
  initPasscodeScreen();
  initPhotosScreen();
  initQuizScreen();
  initMessageScreen();
});

/**
 * Interactive Stardust Trail on Cursor Move & Touch Drag
 */
function initStardustCanvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "stardustCanvas";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const colors = ["#ecd188", "#f0a3b2", "#ffffff", "#ffd599"];

  function addParticle(x, y) {
    for (let i = 0; i < 2; i++) {
      particles.push({
        x: x + (Math.random() * 8 - 4),
        y: y + (Math.random() * 8 - 4),
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2 - 0.4,
        size: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: Math.random() * 0.025 + 0.02
      });
    }
  }

  window.addEventListener("pointermove", (e) => {
    addParticle(e.clientX, e.clientY);
  });

  function renderStardust() {
    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.life * 0.8;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(renderStardust);
  }
  requestAnimationFrame(renderStardust);
}

/**
 * Switch from current screen to target screen using smooth opacity & scale
 */
function switchScreen(fromScreenId, toScreenId, onComplete) {
  const fromEl = document.getElementById(fromScreenId);
  const toEl = document.getElementById(toScreenId);

  if (!fromEl || !toEl) return;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  fromEl.classList.remove("screen-active");
  setTimeout(() => {
    fromEl.classList.add("screen-hidden");
    toEl.classList.remove("screen-hidden");
    // Force layout reflow before triggering CSS active transition
    void toEl.offsetWidth;
    toEl.classList.add("screen-active");
    if (typeof onComplete === "function") {
      onComplete();
    }
  }, 650);
}

// ============================================================================
// 1. AMBIENT FLOATING DECOR (Bunnies, Hearts & Sparkles with Speech Bubbles)
// ============================================================================
function initAmbientDecor() {
  const container = document.getElementById("floatingDecor");
  if (!container) return;

  const stickers = [
    { svg: "🐰", whisper: "Psst... you know the answer! 🐰" },
    { svg: "✨", whisper: "You light up his entire world ✨" },
    { svg: "🤍", whisper: "He loves you beyond measure 🤍" },
    { svg: "🌸", whisper: "A special smile just for Zuha 🌸" },
    { svg: "🌙", whisper: "Under the stars, thinking of you 🌙" },
    { svg: "💖", whisper: "What beats only for you? 💖" }
  ];

  const count = window.innerWidth < 480 ? 7 : 12;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "floating-sticker";
    const item = stickers[i % stickers.length];
    el.textContent = item.svg;

    // Speech bubble element
    const bubble = document.createElement("div");
    bubble.className = "bunny-speech-bubble";
    bubble.textContent = item.whisper;
    el.appendChild(bubble);

    // Randomize positions and drift speeds
    const left = Math.random() * 88 + 4; // 4% to 92%
    const top = Math.random() * 88 + 4;
    const size = Math.random() * 14 + 18; // 18px to 32px
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 14;

    el.style.left = `${left}%`;
    el.style.top = `${top}%`;
    el.style.fontSize = `${size}px`;
    el.style.animationDelay = `-${delay}s`;
    el.style.animationDuration = `${duration}s`;

    // Interactive playful tap reveals whisper bubble
    el.addEventListener("click", () => {
      bubble.classList.add("active");
      el.style.transform = "scale(1.4) rotate(15deg)";
      setTimeout(() => {
        bubble.classList.remove("active");
        el.style.transform = "";
      }, 2600);
    });

    container.appendChild(el);
  }
}

// ============================================================================
// 2. SCREEN 1: PASSCODE CONTROLLER (WITH TYPING PULSE & SPARKS)
// ============================================================================
function initPasscodeScreen() {
  const form = document.getElementById("passcodeForm");
  const input = document.getElementById("passcodeInput");
  const hintLine = document.getElementById("hintLine");
  const hintText = document.getElementById("hintText");
  const errorMsg = document.getElementById("passcodeError");
  const lockIcon = document.getElementById("lockIcon");
  const unlockBtn = document.getElementById("unlockBtn");

  if (hintText) {
    hintText.textContent = CONFIG.hintText;
  }

  // Interactive typing: keyhole pulse and floating sparks
  if (input) {
    const sparkEmojis = ["💖", "✨", "✦", "🤍", "🌸"];
    input.addEventListener("input", () => {
      lockIcon.classList.add("typing-pulse");
      setTimeout(() => lockIcon.classList.remove("typing-pulse"), 350);

      // Spawn a floating spark above input
      const rect = input.getBoundingClientRect();
      const spark = document.createElement("div");
      spark.className = "typing-spark";
      spark.textContent = sparkEmojis[Math.floor(Math.random() * sparkEmojis.length)];
      spark.style.left = `${rect.left + rect.width / 2 + (Math.random() * 60 - 30)}px`;
      spark.style.top = `${rect.top + 10}px`;
      spark.style.setProperty("--dx", `${(Math.random() - 0.5) * 50}px`);
      spark.style.setProperty("--rot", `${(Math.random() - 0.5) * 40}deg`);
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 900);
    });
  }

  if (hintLine) {
    hintLine.addEventListener("click", () => {
      hintLine.style.transform = "scale(1.05)";
      setTimeout(() => (hintLine.style.transform = ""), 300);
    });
  }

  function handleUnlock() {
    const entered = (input.value || "").trim().toUpperCase();
    if (!entered) {
      showError("Please enter your secret answer, Zuha 💕");
      return;
    }

    const correctMain = CONFIG.passcode.trim().toUpperCase();
    const correctSecondaries = CONFIG.secondaryPasscodes.map(s => s.trim().toUpperCase());

    const isMatch = (entered === correctMain) || correctSecondaries.includes(entered);

    if (isMatch) {
      // Clear error
      errorMsg.classList.remove("visible");
      errorMsg.textContent = "";

      // Unlock animation
      lockIcon.classList.add("lock-unlocked");
      unlockBtn.disabled = true;
      input.disabled = true;

      setTimeout(() => {
        switchScreen("screen-passcode", "screen-heart", () => {
          startHeartAnimation();
        });
      }, 700);

    } else {
      // Gentle shake & soft message
      showError("Not quite, my love... read the riddle again ✦");
      const card = document.querySelector(".passcode-card");
      if (card) {
        card.classList.remove("shake");
        void card.offsetWidth; // trigger reflow
        card.classList.add("shake");
      }
    }
  }

  function showError(msg) {
    errorMsg.textContent = msg;
    errorMsg.classList.add("visible");
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleUnlock();
    });
  }

  if (unlockBtn) {
    unlockBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleUnlock();
    });
  }
}

// ============================================================================
// 3. SCREEN 2: THE CONCENTRIC SILHOUETTE LANGUAGE HEART
// ============================================================================
let heartAnimationStarted = false;

function startHeartAnimation() {
  if (heartAnimationStarted) return;
  heartAnimationStarted = true;

  const stage = document.getElementById("heartStage");
  const viewport = document.getElementById("heartViewport");
  const continueBtn = document.getElementById("heartContinueBtn");

  if (!stage || !viewport) return;

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Viewport dimensions
  const vw = viewport.clientWidth;
  const vh = viewport.clientHeight;
  const centerX = vw / 2;
  const centerY = vh / 2 - 12;

  // Exact Parametric Heart Equation:
  // x(t) = 16 * sin^3(t)
  // y(t) = -(13*cos(t) - 5*cos(2t) - 2*cos(3t) - cos(4t))
  function heartPoint(t, rScale = 1.0) {
    const sinT = Math.sin(t);
    const hx = 16 * Math.pow(sinT, 3);
    const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x: hx * rScale, y: hy * rScale };
  }

  // Scale factor to fit viewport with safe margins
  const maxHeartWidth = Math.min(vw * 0.85, 420);
  const scale = maxHeartWidth / 34;

  // Separate Urdu from the remaining 43 phrases
  const phrasesData = [...LANGUAGES];
  const urduIndex = phrasesData.findIndex(p => p.isUrdu);
  const [urduPhrase] = phrasesData.splice(urduIndex, 1);

  // Generate target coordinates:
  // Ring 1 (Outer Perimeter Silhouette): 28 phrases distributed smoothly along the full curve
  // Ring 2 (Inner Heart Contour): 15 phrases distributed inside
  // Centerpiece: Urdu ("مجھے تم سے محبت ہے") at the radiant heart center
  const targets = [];

  // Urdu center target
  targets.push({
    phrase: urduPhrase,
    x: centerX,
    y: centerY + 1 * scale,
    isUrdu: true
  });

  const outerCount = 28;
  const innerCount = 15;

  // Outer ring coordinates (defines the unmistakable silhouette, dip, and sharp bottom)
  for (let i = 0; i < outerCount; i++) {
    const t = (i / outerCount) * Math.PI * 2;
    const pt = heartPoint(t, 1.0);
    const phrase = phrasesData[i % phrasesData.length];
    targets.push({
      phrase: phrase,
      x: centerX + pt.x * scale,
      y: centerY + pt.y * scale,
      isUrdu: false
    });
  }

  // Inner ring coordinates (scaled to 52% to create full depth without blobiness)
  for (let j = 0; j < innerCount; j++) {
    const t = (j / innerCount) * Math.PI * 2 + 0.12;
    const pt = heartPoint(t, 0.52);
    const phrase = phrasesData[(outerCount + j) % phrasesData.length];
    targets.push({
      phrase: phrase,
      x: centerX + pt.x * scale,
      y: centerY + (pt.y + 1.2) * scale,
      isUrdu: false
    });
  }

  // Create SVG Constellation Outline in the background
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "heart-constellation-svg");
  svg.setAttribute("viewBox", "-18 -18 36 38");
  svg.setAttribute("width", `${maxHeartWidth + 20}px`);
  svg.setAttribute("height", `${(maxHeartWidth + 20) * 1.05}px`);

  let pathD = "";
  for (let i = 0; i <= 100; i++) {
    const t = (i / 100) * Math.PI * 2;
    const pt = heartPoint(t, 1.0);
    pathD += `${i === 0 ? "M" : "L"} ${pt.x.toFixed(2)} ${pt.y.toFixed(2)} `;
  }
  pathD += "Z";

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", pathD);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "url(#constellationGrad)");
  path.setAttribute("stroke-width", "0.5");
  path.setAttribute("stroke-dasharray", "1.2 1.2");

  const defs = document.createElementNS(svgNS, "defs");
  const grad = document.createElementNS(svgNS, "linearGradient");
  grad.setAttribute("id", "constellationGrad");
  grad.setAttribute("x1", "0%");
  grad.setAttribute("y1", "0%");
  grad.setAttribute("x2", "100%");
  grad.setAttribute("y2", "100%");
  grad.innerHTML = `
    <stop offset="0%" stop-color="#ffd599" stop-opacity="0.7"/>
    <stop offset="50%" stop-color="#f0a3b2" stop-opacity="0.8"/>
    <stop offset="100%" stop-color="#ecd188" stop-opacity="0.7"/>
  `;
  defs.appendChild(grad);
  svg.appendChild(defs);
  svg.appendChild(path);
  stage.appendChild(svg);

  // Create DOM elements for phrases
  const phraseElements = [];
  targets.forEach((item) => {
    const span = document.createElement("span");
    span.className = `lang-phrase ${item.isUrdu ? "urdu-highlight" : ""}`;
    span.textContent = item.phrase.text;
    if (item.phrase.rtl) {
      span.setAttribute("dir", "rtl");
    }

    // Dynamic responsive font size
    if (item.isUrdu) {
      span.style.fontSize = vw < 400 ? "17px" : "21px";
    } else {
      span.style.fontSize = vw < 400 ? "9px" : "11px";
    }

    stage.appendChild(span);

    // Initial random drift position for Phase A
    const randX = Math.random() * (vw - 80) + 20;
    const randY = Math.random() * (vh - 80) + 30;

    phraseElements.push({
      el: span,
      targetX: item.x,
      targetY: item.y,
      randX: randX,
      randY: randY,
      isUrdu: item.isUrdu
    });
  });

  // Center alignment offset function
  function getPositionTransform(el, targetX, targetY) {
    const rect = el.getBoundingClientRect();
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;
    return `translate3d(${targetX - halfW}px, ${targetY - halfH}px, 0)`;
  }

  // If user prefers reduced motion, skip directly to final glowing heart
  if (isReducedMotion) {
    phraseElements.forEach(item => {
      item.el.style.transition = "none";
      item.el.style.opacity = item.isUrdu ? "1" : "0.78";
      item.el.style.transform = getPositionTransform(item.el, item.targetX, item.targetY);
    });
    stage.classList.add("heart-glowing");
    continueBtn.style.display = "inline-flex";
    return;
  }

  // --- PHASE A (approx 8s): Appear one at a time at random positions, drifting slowly ---
  const interval = 8000 / phraseElements.length;
  phraseElements.forEach((item, i) => {
    // Initial invisible placement
    item.el.style.opacity = "0";
    item.el.style.transform = getPositionTransform(item.el, item.randX, item.randY);

    setTimeout(() => {
      // Appear with low opacity (0.08 - 0.22)
      item.el.style.opacity = (Math.random() * 0.14 + 0.08).toFixed(2);
      // Slight gentle drift
      const driftX = item.randX + (Math.random() * 26 - 13);
      const driftY = item.randY + (Math.random() * 26 - 13);
      item.el.style.transform = getPositionTransform(item.el, driftX, driftY);
    }, i * interval);
  });

  // --- PHASE B (after 8s, glides over 6s): Glide to target positions forming filled heart ---
  setTimeout(() => {
    phraseElements.forEach(item => {
      item.el.style.transition = "transform 5.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 5s ease";
      item.el.style.opacity = item.isUrdu ? "1" : (Math.random() * 0.25 + 0.65).toFixed(2);
      item.el.style.transform = getPositionTransform(item.el, item.targetX, item.targetY);
    });
  }, 8200);

  // --- PHASE C (after 14s): Heart glows, slow pulse, Continue button fades in ---
  setTimeout(() => {
    stage.classList.add("heart-glowing");
    continueBtn.style.display = "inline-flex";
    continueBtn.style.opacity = "0";
    void continueBtn.offsetWidth;
    continueBtn.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    continueBtn.style.opacity = "1";
  }, 14200);

  // Continue button navigation
  continueBtn.addEventListener("click", () => {
    switchScreen("screen-heart", "screen-photos");
  });
}

// ============================================================================
// 4. SCREEN 3: POLAROID PHOTOS CONTROLLER
// ============================================================================
function initPhotosScreen() {
  const gallery = document.getElementById("polaroidGallery");
  const continueBtn = document.getElementById("photosContinueBtn");
  const lightbox = document.getElementById("photoLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");

  if (!gallery) return;

  // Generate Polaroid Cards
  CONFIG.photos.forEach((photo, idx) => {
    const card = document.createElement("div");
    card.className = "polaroid-card";

    // Gentle randomized tilt (-4.5deg to +4.5deg)
    const tilt = (Math.random() * 9 - 4.5).toFixed(1);
    card.style.transform = `rotate(${tilt}deg)`;

    const imgWrap = document.createElement("div");
    imgWrap.className = "polaroid-img-wrap";

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption || `Memory with Zuha #${idx + 1}`;
    img.loading = "lazy";

    // Graceful error handling if user hasn't dropped image yet
    img.onerror = () => {
      img.style.display = "none";
      const placeholder = document.createElement("div");
      placeholder.className = "polaroid-placeholder";
      placeholder.innerHTML = `
        <span class="polaroid-placeholder-icon">📸</span>
        <span>Memory #${idx + 1}</span>
      `;
      imgWrap.appendChild(placeholder);
    };

    imgWrap.appendChild(img);
    card.appendChild(imgWrap);

    if (photo.caption) {
      const caption = document.createElement("p");
      caption.className = "polaroid-caption";
      caption.textContent = photo.caption;
      card.appendChild(caption);
    }

    // Tap to enlarge in Lightbox
    card.addEventListener("click", () => {
      openLightbox(photo.src, photo.caption, idx + 1);
    });

    gallery.appendChild(card);
  });

  // Lightbox functions
  function openLightbox(src, captionText, index) {
    lightboxImg.src = src;
    lightboxCaption.textContent = captionText || `Memory #${index}`;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Continue to Quiz
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      switchScreen("screen-photos", "screen-quiz");
    });
  }
}

// ============================================================================
// 5. SCREEN 4: THE QUIZ CONTROLLER (NO WRONG ANSWERS, ALWAYS 5/5)
// ============================================================================
function initQuizScreen() {
  const questionView = document.getElementById("quizQuestionView");
  const resultView = document.getElementById("quizResultView");
  const progressText = document.getElementById("quizProgress");
  const scoreBadge = document.getElementById("quizScoreBadge");
  const questionText = document.getElementById("quizQuestionText");
  const optionsGrid = document.getElementById("quizOptionsGrid");
  const reactionBox = document.getElementById("quizReactionBox");
  const reactionText = document.getElementById("quizReactionText");
  const nextBtn = document.getElementById("quizNextBtn");
  const continueBtn = document.getElementById("quizContinueBtn");

  let currentQuestionIndex = 0;
  let score = 0;

  function renderCurrentQuestion() {
    const qData = CONFIG.questions[currentQuestionIndex];
    if (!qData) return;

    // Reset reaction and button
    reactionText.classList.remove("visible");
    reactionText.textContent = "";
    nextBtn.style.display = "none";

    // Progress and Score
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${CONFIG.questions.length}`;
    scoreBadge.textContent = `💖 Score: ${score}/${CONFIG.questions.length}`;

    // Question
    questionText.textContent = qData.question;

    // Options
    optionsGrid.innerHTML = "";
    qData.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.type = "button";
      btn.innerHTML = `<span>${optText}</span><span class="opt-check">✦</span>`;

      btn.addEventListener("click", () => {
        // Disable other buttons once selected
        const allBtns = optionsGrid.querySelectorAll(".quiz-option-btn");
        allBtns.forEach(b => {
          b.disabled = true;
          b.classList.remove("selected");
        });

        btn.classList.add("selected");

        // Increment score gently (always correct)
        score++;
        scoreBadge.textContent = `💖 Score: ${score}/${CONFIG.questions.length}`;

        // Show reaction text with soft fade
        const reaction = qData.reactions[optIdx] || "You will always be my only answer.";
        reactionText.textContent = reaction;
        reactionText.classList.add("visible");

        // Reveal Next button
        nextBtn.style.display = "inline-flex";
      });

      optionsGrid.appendChild(btn);
    });
  }

  // Next question or Final Result
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < CONFIG.questions.length) {
        renderCurrentQuestion();
      } else {
        // Show Final 5/5 Result View
        questionView.style.display = "none";
        resultView.style.display = "block";
      }
    });
  }

  // Continue to Apology Message Screen
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      switchScreen("screen-quiz", "screen-message", () => {
        startMessageReveal();
      });
    });
  }

  // Initialize first question
  renderCurrentQuestion();
}

// ============================================================================
// 6. SCREEN 5: MESSAGE (APOLOGY LETTER & VOICE NOTE)
// ============================================================================
let messageRevealed = false;

function initMessageScreen() {
  // Setup WhatsApp Link
  const waLink = document.getElementById("whatsappLink");
  if (waLink) {
    const cleanPhone = CONFIG.phoneNumber.replace(/[^0-9]/g, "");
    waLink.href = `https://wa.me/${cleanPhone}`;
  }

  // Check if voice note /audio/message.mp3 exists
  initVoiceNote();
}

function initVoiceNote() {
  const container = document.getElementById("voiceNoteContainer");
  const audio = document.getElementById("voiceAudio");
  const btn = document.getElementById("voiceNoteBtn");
  const btnText = document.getElementById("voiceBtnText");

  if (!container || !audio || !btn) return;

  const audioPath = "audio/message.mp3";
  audio.src = audioPath;

  // Detect availability via HEAD or error event
  audio.addEventListener("canplaythrough", () => {
    container.style.display = "flex";
  });

  audio.addEventListener("error", () => {
    // If not found or unsupported, keep hidden silently
    container.style.display = "none";
  });

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => {
        btn.classList.add("playing");
        btnText.textContent = "Playing voice note...";
      }).catch(() => {
        btnText.textContent = "Play my voice note";
      });
    } else {
      audio.pause();
      btn.classList.remove("playing");
      btnText.textContent = "Play my voice note";
    }
  });

  audio.addEventListener("ended", () => {
    btn.classList.remove("playing");
    btnText.textContent = "Replay voice note";
  });
}

function startMessageReveal() {
  if (messageRevealed) return;
  messageRevealed = true;

  const letterBody = document.getElementById("letterBody");
  const letterFooter = document.getElementById("letterFooter");
  if (!letterBody) return;

  letterBody.innerHTML = "";

  const paragraphs = CONFIG.messageParagraphs;
  const delayStep = 1500; // 1.5s apart as specified

  paragraphs.forEach((text, idx) => {
    const p = document.createElement("p");
    p.className = "letter-p";
    p.textContent = text;
    letterBody.appendChild(p);

    setTimeout(() => {
      p.classList.add("visible");
    }, (idx + 1) * delayStep);
  });

  // Reveal footer after all paragraphs
  setTimeout(() => {
    if (letterFooter) {
      letterFooter.classList.add("visible");
    }
  }, (paragraphs.length + 1) * delayStep);
}
