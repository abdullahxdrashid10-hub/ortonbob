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
  passcode: "EYES",
  secondaryPasscodes: ["YOUR EYES", "MY EYES", "AANKHEIN", "AANKHEN", "THE EYES", "EYE", "ZUHA", "LOVE"],
  hintText: "Riddle: You look through us, but he looks into us and sees his entire world and future. What are we?",

  // --- 2. WhatsApp Contact ---
  phoneNumber: "923088295557",

  // --- 3. Apology Message / Letter Paragraphs ---
  // Each paragraph fades in sequentially about 1.5s apart.
  messageParagraphs: [
    "Zuha, I’ve been sitting here with a heavy chest, searching for words that could even begin to measure up to how sorry I am. I know reading an apology on a screen can't instantly undo the sting of what happened, but I needed you to know that seeing pain in your eyes because of me is the worst feeling I have ever endured.",
    "You are the gentlest, most precious part of my life. Your patience, your warmth, and the way you care are gifts I never, ever want to take for granted. When I stumbled and hurt you, I let down the one person whose happiness means everything to me.",
    "I'm not here to make excuses or hide behind easy words. I am holding myself fully accountable. I want to listen to every single thought in your head, feel every feeling with you, and learn how to love and protect you better. You deserve certainty, tenderness, and unwavering respect.",
    "I love you, Zuha. Not just when everything is effortless, but especially on the hard days when things need healing. You are my safe haven, and I will spend every tomorrow earning back your complete peace.",
    "Take whatever time and space your heart needs right now. There is no rush, and no pressure. I am right here, waiting patiently to hold your hand whenever you are ready to talk."
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
    { src: "photos/10.jpg", caption: "Forever grateful that you walked into my life" },
    { src: "photos/11.jpg", caption: "Every heartbeat says your name" },
    { src: "photos/12.jpg", caption: "With you, now and always" }
  ],

  // --- 5. Quiz Questions & Reactions ---
  // NO WRONG ANSWERS: Every tap is accepted and increments the score.
  questions: [
    {
      question: "When you are having a rough day, what is my number one mission?",
      options: [
        "Wrap you up in a blanket and never let go",
        "Listen to everything you feel until your heart is light",
        "Bring you your favorite comfort food and sweet treats",
        "Silently hold your hand and remind you how loved you are"
      ],
      reactions: [
        "And I'll never let you face the cold world alone.",
        "Your feelings are always safe with me, Zuha.",
        "Anything just to see that beautiful smile back.",
        "No matter what happens, you will never be alone."
      ]
    },
    {
      question: "What do I secretly do every time you look away or get distracted?",
      options: [
        "Stare at you and wonder how on earth I got so lucky",
        "Smile like an idiot just watching you be yourself",
        "Notice every tiny, adorable detail about your face",
        "All of the above, completely guilty as charged"
      ],
      reactions: [
        "Honestly, I ask the universe that every single day.",
        "You bring out a happiness in me no one else can.",
        "Every little glance of yours is etched into my soul.",
        "Caught red-handed... you have all of me, Zuha."
      ]
    },
    {
      question: "If our love had a soundtrack, what would it sound like?",
      options: [
        "Late-night gentle rain drumming against the window",
        "A soft acoustic melody when the world goes quiet",
        "The uncontrollable giggles we share over silly jokes",
        "The steady, comforting rhythm of our heartbeats together"
      ],
      reactions: [
        "Quiet, warm, and peacefully safe with you.",
        "A song I want on repeat for the rest of my life.",
        "Your laughter is the sweetest music in existence.",
        "Beating in perfect harmony, always."
      ]
    },
    {
      question: "What is one thing that will NEVER change, no matter what happens?",
      options: [
        "How deeply and endlessly I respect and adore you",
        "That you are my first thought in the morning and last at night",
        "My commitment to becoming the man you truly deserve",
        "The way my heart races whenever you call my name"
      ],
      reactions: [
        "My love and respect for who you are only grows stronger.",
        "You live in every quiet thought I have.",
        "I will keep learning, listening, and being better for you.",
        "Every single time, like day one."
      ]
    },
    {
      question: "When we look back on this rough patch years from now, what will we remember?",
      options: [
        "That our love was strong enough to overcome anything",
        "How deeply we cared enough to fight for each other",
        "The moment we held each other tighter and chose forever",
        "Just another proof that nothing can pull us apart"
      ],
      reactions: [
        "We bend, but we never break. Us against the world.",
        "Because what we have is far too rare to ever let go of.",
        "A tighter embrace and a sweeter tomorrow.",
        "Forever and always, my Zuha."
      ]
    }
  ]
};

// ============================================================================
// 30 LANGUAGES LIST (Strict subset specified by user)
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
  { lang: "Greek", text: "Σ' αγαπώ", rtl: false },
  { lang: "Russian", text: "Я тебя люблю", rtl: false },
  { lang: "Polish", text: "Kocham cię", rtl: false },
  { lang: "Romanian", text: "Te iubesc", rtl: false },
  { lang: "Japanese", text: "愛してる", rtl: false },
  { lang: "Korean", text: "사랑해", rtl: false },
  { lang: "Chinese", text: "我爱你", rtl: false },
  { lang: "Thai", text: "ฉันรักเธอ", rtl: false },
  { lang: "Vietnamese", text: "Anh yêu em", rtl: false },
  { lang: "Indonesian", text: "Aku cinta kamu", rtl: false },
  { lang: "Filipino", text: "Mahal kita", rtl: false },
  { lang: "Bengali", text: "আমি তোমাকে ভালোবাসি", rtl: false },
  { lang: "Swahili", text: "Nakupenda", rtl: false },
  { lang: "Zulu", text: "Ngiyakuthanda", rtl: false },
  { lang: "Welsh", text: "Rwy'n dy garu di", rtl: false },
  { lang: "Hawaiian", text: "Aloha au iā 'oe", rtl: false }
];

// ============================================================================
// APP CONTROLLER & SCREEN NAVIGATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initPasscodeScreen();
  initPhotosScreen();
  initQuizScreen();
  initMessageScreen();
});

/**
 * Switch from current screen to target screen using smooth opacity & scale
 */
function switchScreen(fromScreenId, toScreenId, onComplete) {
  const fromEl = document.getElementById(fromScreenId);
  const toEl = document.getElementById(toScreenId);

  if (!fromEl || !toEl) return;

  window.scrollTo({ top: 0, behavior: "smooth" });

  fromEl.classList.remove("screen-active");
  setTimeout(() => {
    fromEl.classList.add("screen-hidden");
    toEl.classList.remove("screen-hidden");
    void toEl.offsetWidth;
    toEl.classList.add("screen-active");
    if (typeof onComplete === "function") {
      onComplete();
    }
  }, 650);
}

// ============================================================================
// 1. SCREEN 1: PASSCODE CONTROLLER
// ============================================================================
function initPasscodeScreen() {
  const form = document.getElementById("passcodeForm");
  const input = document.getElementById("passcodeInput");
  const hintText = document.getElementById("hintText");
  const errorMsg = document.getElementById("passcodeError");
  const lockIcon = document.getElementById("lockIcon");
  const unlockBtn = document.getElementById("unlockBtn");

  if (hintText) {
    hintText.textContent = CONFIG.hintText;
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
      errorMsg.classList.remove("visible");
      errorMsg.textContent = "";

      lockIcon.classList.add("lock-unlocked");
      unlockBtn.disabled = true;
      input.disabled = true;

      setTimeout(() => {
        switchScreen("screen-passcode", "screen-heart", () => {
          startHeartAnimation();
        });
      }, 700);

    } else {
      showError("Not quite, my love... read the riddle again ✦");
      const card = document.querySelector(".passcode-card");
      if (card) {
        card.classList.remove("shake");
        void card.offsetWidth;
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
// 2. SCREEN 2: CONCENTRIC HEART RINGS CONTROLLER
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

  // Viewport dimensions & safe bounds
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isDesktop = vw >= 768;

  // Outer ring fitted to 90% of viewport width (max 520px)
  // Also bounded by viewport height so heart + Continue button are NEVER cut off at 390x844 or 1280x720
  const maxW = Math.min(vw * 0.90, 520);
  // Total heart height is 28.37 units, width is 32 units => aspect ratio 28.37 / 32 = 0.8866
  // Available height: vh minus button (50px) and margins (~130px)
  const availH = Math.max(260, vh - 140);
  const heartW = Math.min(maxW, availH / 0.8866);
  const heartH = heartW * 0.8866;
  const scale = heartW / 32;

  stage.style.width = `${heartW}px`;
  stage.style.height = `${heartH}px`;
  const centerX = heartW / 2;
  const centerY = heartH / 2;

  // Parametric heart formula sampled at 400 points:
  // x = 16 * sin^3(t)
  // y = 13*cos(t) - 5*cos(2t) - 2*cos(3t) - cos(4t)
  // Screen Y is flipped and shifted by -2.815 to center vertically
  function generateRingCurve(numPoints = 400) {
    const pts = [];
    for (let i = 0; i <= numPoints; i++) {
      const t = (i / numPoints) * Math.PI * 2;
      const sinT = Math.sin(t);
      const hx = 16 * Math.pow(sinT, 3);
      const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) - 2.815;
      pts.push({ x: hx, y: hy });
    }

    // Arc length table
    const s = [0];
    for (let i = 1; i <= numPoints; i++) {
      const dx = pts[i].x - pts[i - 1].x;
      const dy = pts[i].y - pts[i - 1].y;
      s.push(s[i - 1] + Math.hypot(dx, dy));
    }
    const totalLength = s[numPoints];
    return { pts, s, totalLength };
  }

  const ringCurve = generateRingCurve(400);

  // Function to place N items equally spaced along arc length
  function getEquallySpacedPoints(count) {
    const step = ringCurve.totalLength / count;
    const res = [];
    for (let k = 0; k < count; k++) {
      const targetDist = (k + 0.5) * step;
      let low = 0, high = ringCurve.s.length - 1;
      while (low < high - 1) {
        const mid = (low + high) >> 1;
        if (ringCurve.s[mid] <= targetDist) low = mid;
        else high = mid;
      }
      const frac = (targetDist - ringCurve.s[low]) / (ringCurve.s[high] - ringCurve.s[low] || 1);
      const x = ringCurve.pts[low].x + frac * (ringCurve.pts[high].x - ringCurve.pts[low].x);
      const y = ringCurve.pts[low].y + frac * (ringCurve.pts[high].y - ringCurve.pts[low].y);
      res.push({ x, y });
    }
    return res;
  }

  // Distribution: Urdu at center; remaining 29 phrases:
  // Outer ring (scale 1.0): ~45% = 13 phrases
  // Middle ring (scale 0.68): ~35% = 10 phrases
  // Inner ring (scale 0.38): ~20% = 6 phrases
  const allPhrases = [...LANGUAGES];
  const urduIndex = allPhrases.findIndex(p => p.isUrdu);
  const [urduPhrase] = allPhrases.splice(urduIndex, 1);

  let outerList = allPhrases.slice(0, 13);
  let middleList = allPhrases.slice(13, 23);
  let innerList = allPhrases.slice(23, 29);

  // Setup DOM elements
  stage.innerHTML = "";

  const items = [];

  // Create Urdu element (center)
  const urduSpan = document.createElement("span");
  urduSpan.className = "lang-phrase urdu-highlight";
  urduSpan.textContent = urduPhrase.text;
  urduSpan.setAttribute("dir", "rtl");
  stage.appendChild(urduSpan);
  const urduItem = {
    el: urduSpan,
    phrase: urduPhrase,
    ring: "urdu",
    ringIndex: 3,
    ringScale: 0,
    targetX: centerX,
    targetY: centerY
  };
  items.push(urduItem);

  function createPhraseItems(list, ringName, ringIdx, ringScale) {
    const listItems = [];
    list.forEach(phrase => {
      const span = document.createElement("span");
      span.className = `lang-phrase ring-${ringName}`;
      span.textContent = phrase.text;
      if (phrase.rtl) span.setAttribute("dir", "rtl");
      stage.appendChild(span);
      const item = {
        el: span,
        phrase: phrase,
        ring: ringName,
        ringIndex: ringIdx,
        ringScale: ringScale,
        targetX: 0,
        targetY: 0
      };
      listItems.push(item);
      items.push(item);
    });
    return listItems;
  }

  let outerItems = createPhraseItems(outerList, "outer", 0, 1.0);
  let middleItems = createPhraseItems(middleList, "middle", 1, 0.68);
  let innerItems = createPhraseItems(innerList, "inner", 2, 0.38);

  // Base font sizes: outer 13px, middle 12px, inner 11px (+20% on desktop)
  const baseSizes = {
    outer: isDesktop ? 15 : 12.5,
    middle: isDesktop ? 14 : 11.5,
    inner: isDesktop ? 13 : 10.5,
    urdu: isDesktop ? 19 : 15
  };

  // Recompute positions based on current item lists with angular staggering to prevent radial collision
  function updateRingTargetCoords() {
    const outerPts = getEquallySpacedPoints(outerItems.length, 0.25);
    outerItems.forEach((it, i) => {
      it.targetX = centerX + outerPts[i].x * 1.0 * scale;
      it.targetY = centerY + outerPts[i].y * 1.0 * scale;
    });

    const middlePts = getEquallySpacedPoints(middleItems.length, 0.50);
    middleItems.forEach((it, i) => {
      it.targetX = centerX + middlePts[i].x * 0.68 * scale;
      it.targetY = centerY + middlePts[i].y * 0.68 * scale;
    });

    const innerPts = getEquallySpacedPoints(innerItems.length, 0.25);
    innerItems.forEach((it, i) => {
      it.targetX = centerX + innerPts[i].x * 0.38 * scale;
      it.targetY = centerY + innerPts[i].y * 0.38 * scale;
    });

    urduItem.targetX = centerX;
    urduItem.targetY = centerY;
  }

  function applyFontSizesAndPositions(reduction) {
    items.forEach(it => {
      const base = baseSizes[it.ring];
      const curSize = Math.max(9, base - reduction);
      it.el.style.fontSize = `${curSize}px`;
    });

    updateRingTargetCoords();

    // Position each phrase centered upright at (targetX, targetY)
    items.forEach(it => {
      const w = it.el.offsetWidth || 60;
      const h = it.el.offsetHeight || 16;
      it.finalTransform = `translate3d(${it.targetX - w / 2}px, ${it.targetY - h / 2}px, 0)`;
    });
  }

  function checkOverlaps() {
    const boxes = items.map(it => {
      const w = it.el.offsetWidth || 60;
      const h = it.el.offsetHeight || 16;
      return {
        item: it,
        left: it.targetX - w / 2,
        right: it.targetX + w / 2,
        top: it.targetY - h / 2,
        bottom: it.targetY + h / 2
      };
    });

    const overlappingItems = new Set();
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i];
        const b = boxes[j];
        // 6px padding between bounding boxes
        const overlap = (
          a.left < b.right + 6 &&
          a.right > b.left - 6 &&
          a.top < b.bottom + 6 &&
          a.bottom > b.top - 6
        );
        if (overlap) {
          overlappingItems.add(a.item);
          overlappingItems.add(b.item);
        }
      }
    }
    return overlappingItems;
  }

  // Iteratively reduce font sizes down to min 9px
  let fontReduction = 0;
  let overlappingSet = new Set();
  const maxReduction = Math.max(0, Math.floor(baseSizes.inner - 9));

  for (fontReduction = 0; fontReduction <= maxReduction; fontReduction++) {
    applyFontSizesAndPositions(fontReduction);
    overlappingSet = checkOverlaps();
    if (overlappingSet.size === 0) break;
  }

  // If still overlapping at 9px, selectively drop the longest overlapping phrase (excluding Urdu)
  let dropSafety = 10;
  while (overlappingSet.size > 0 && dropSafety-- > 0) {
    let longestItem = null;
    let maxLen = -1;
    overlappingSet.forEach(it => {
      if (it.ring !== "urdu" && it.phrase.text.length > maxLen) {
        maxLen = it.phrase.text.length;
        longestItem = it;
      }
    });

    if (!longestItem) break;

    longestItem.el.remove();
    const itIdx = items.indexOf(longestItem);
    if (itIdx !== -1) items.splice(itIdx, 1);

    if (longestItem.ring === "outer") outerItems = outerItems.filter(it => it !== longestItem);
    else if (longestItem.ring === "middle") middleItems = middleItems.filter(it => it !== longestItem);
    else if (longestItem.ring === "inner") innerItems = innerItems.filter(it => it !== longestItem);

    applyFontSizesAndPositions(fontReduction);
    overlappingSet = checkOverlaps();
  }

  // Assign Phase A random positions within visible stage boundaries
  items.forEach(it => {
    it.randX = Math.random() * Math.max(100, heartW - 100) + 20;
    it.randY = Math.random() * Math.max(100, heartH - 60) + 20;
    it.phaseATransform = `translate3d(${it.randX}px, ${it.randY}px, 0)`;
  });

  // If user prefers reduced motion, show final heart directly
  if (isReducedMotion) {
    items.forEach(it => {
      it.el.style.opacity = it.ring === "urdu" ? "1" : "0.85";
      it.el.style.transform = it.finalTransform;
    });
    stage.classList.add("heart-glowing");
    continueBtn.style.display = "inline-flex";
    return;
  }

  // --- PHASE A: Words appear softly drifting across the stage (clearly visible, ~3.5s) ---
  const interval = 3500 / items.length;
  items.forEach((it, i) => {
    it.el.style.opacity = "0";
    it.el.style.transform = it.phaseATransform;

    setTimeout(() => {
      it.el.classList.add("drifting");
      it.el.style.opacity = (Math.random() * 0.15 + 0.22).toFixed(2);
      const driftX = it.randX + (Math.random() * 20 - 10);
      const driftY = it.randY + (Math.random() * 20 - 10);
      it.el.style.transform = `translate3d(${driftX}px, ${driftY}px, 0)`;
    }, i * interval);
  });

  // --- PHASE B: Glide smoothly to concentric heart ring positions ---
  // Outer first, then middle, then inner, then Urdu
  const ringDelays = {
    outer: 3800,
    middle: 4400,
    inner: 5000,
    urdu: 5600
  };

  items.forEach(it => {
    const startDelay = ringDelays[it.ring] || 3800;
    setTimeout(() => {
      it.el.classList.remove("drifting");
      it.el.classList.add("gliding");
      it.el.style.opacity = it.ring === "urdu" ? "1" : (Math.random() * 0.15 + 0.75).toFixed(2);
      it.el.style.transform = it.finalTransform;
    }, startDelay);
  });

  // --- PHASE C: Once settled (~8.2s), slow pulse (scale 1 to 1.03), rose-gold glow, Continue button ---
  setTimeout(() => {
    stage.classList.add("heart-glowing");
    continueBtn.style.display = "inline-flex";
    continueBtn.style.opacity = "0";
    void continueBtn.offsetWidth;
    continueBtn.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    continueBtn.style.opacity = "1";
  }, 8200);

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
