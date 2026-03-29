/**
 * IDEA TO CONCEPT — Full Presentation Template
 * By Zohar Urian
 *
 * HOW TO USE:
 * 1. Fill in the CHALLENGE_DATA object below with your content
 * 2. Run: node template.js
 * 3. Find your PPTX on the Desktop
 */

const pptxgen = require("pptxgenjs");

// ─────────────────────────────────────────────
// FILL THIS IN — your challenge content
// ─────────────────────────────────────────────
const CHALLENGE_DATA = {
  title: "Your Challenge Title",
  hmw: "How might we...",
  language: "en", // "en" or "he"
  audience: "Who you're designing for",
  context: "Why this matters now",

  personas: [
    {
      name: "Persona Name",
      age: 10,
      description: "Brief description",
      pains: ["Pain 1", "Pain 2", "Pain 3"],
      color: "FF6B6B",
    },
    {
      name: "Persona 2 Name",
      age: 38,
      description: "Brief description",
      pains: ["Pain 1", "Pain 2", "Pain 3"],
      color: "A8DADC",
    },
  ],

  dayInLife: [
    { time: "7:00", scene: "Wakes up", emotion: "😰", detail: "First thought is about..." },
    { time: "12:00", scene: "Lunchtime", emotion: "😟", detail: "Alone, no one to..." },
    { time: "16:00", scene: "After school", emotion: "😐", detail: "Comes home and..." },
    { time: "21:00", scene: "Bedtime", emotion: "😰", detail: "Can't sleep because..." },
  ],

  assumptions: [
    { text: "Assumption 1 — what we believe", testable: "High" },
    { text: "Assumption 2 — what we believe", testable: "Medium" },
    { text: "Assumption 3 — what we believe", testable: "High" },
    { text: "Assumption 4 — what we believe", testable: "Low" },
  ],

  concepts: [
    {
      name: "Concept 1 Name",
      tagline: "One-line description",
      features: ["Feature A", "Feature B", "Feature C"],
      hunch: "This tests whether users prefer X",
      screenType: "breathing", // breathing | mood | story | parent | chat | game
      accentColor: "A8DADC",
    },
    {
      name: "Concept 2 Name",
      tagline: "One-line description",
      features: ["Feature A", "Feature B", "Feature C"],
      hunch: "This tests whether users prefer Y",
      screenType: "mood",
      accentColor: "FF6B6B",
    },
    {
      name: "Concept 3 Name",
      tagline: "One-line description",
      features: ["Feature A", "Feature B", "Feature C"],
      hunch: "This tests whether users prefer Z",
      screenType: "story",
      accentColor: "7B61FF",
    },
    {
      name: "Concept 4 Name",
      tagline: "One-line description",
      features: ["Feature A", "Feature B", "Feature C"],
      hunch: "This tests whether users prefer W",
      screenType: "parent",
      accentColor: "FFB347",
    },
  ],

  scenarios: [
    {
      who: "Persona Name, age 10",
      when: "9pm, lying in bed",
      feeling: "Anxious, can't stop thinking",
      action: "Opens the app and...",
      conceptIndex: 0, // which concept they're using
    },
    {
      who: "Parent, age 38",
      when: "Morning, before work",
      feeling: "Worried about their child",
      action: "Checks the dashboard and...",
      conceptIndex: 3,
    },
  ],

  testingPlan: [
    { assumption: "Assumption 1", method: "5 user interviews with concept cards", who: "Target users", timeline: "Week 1" },
    { assumption: "Assumption 2", method: "Wizard of Oz prototype test", who: "10 children", timeline: "Week 2" },
    { assumption: "Assumption 3", method: "A/B card sort", who: "Parents + children", timeline: "Week 2" },
    { assumption: "Assumption 4", method: "Diary study (3 days)", who: "5 families", timeline: "Week 3" },
  ],

  topConcepts: [0, 1], // indices of concepts to show first

  openQuestions: [
    "Does the app help in the moment or mainly as a daily habit?",
    "How do we prevent screen time guilt for parents?",
    "Should content be created by professionals or community?",
    "What role should schools play in adoption?",
    "How do we measure emotional impact, not just engagement?",
    "What happens when the war ends — does the need disappear?",
  ],

  nextSteps: [
    { step: "Run concept conversations", detail: "5 conversations with target users using low-fidelity cards", timeline: "This week", owner: "Design team" },
    { step: "Build clickable prototype", detail: "Figma prototype of top 2 concepts, test with 10 users", timeline: "Week 2-3", owner: "Product + Design" },
    { step: "Define success metrics", detail: "Agree on what 'working' looks like before building", timeline: "Week 1", owner: "Product lead" },
  ],

  stats: [
    { number: "72%", label: "of children show anxiety symptoms during prolonged conflict" },
    { number: "3×", label: "more likely to develop long-term anxiety without early intervention" },
    { number: "1 in 4", label: "parents report not knowing how to help their child cope" },
  ],
};

// ─────────────────────────────────────────────
// COLORS & TYPOGRAPHY
// ─────────────────────────────────────────────
const C = {
  dark:    "1A1A2E",
  navy:    "2C3E6B",
  coral:   "FF6B6B",
  teal:    "A8DADC",
  white:   "F8F6F0",
  offwhite:"F0EDE8",
  gray:    "888899",
  light:   "EEF2F8",
  yellow:  "FFF176",
  mint:    "B9F6CA",
  orange:  "FFD180",
  blue:    "B3E5FC",
};

const makeShadow = () => ({
  type: "outer", blur: 8, offset: 3, angle: 135,
  color: "000000", opacity: 0.15,
});

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function addSticky(slide, x, y, w, h, text, color, pres, fontSize = 11) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color },
    shadow: makeShadow(),
  });
  slide.addText(text, {
    x: x + 0.1, y: y + 0.1, w: w - 0.2, h: h - 0.2,
    fontSize, color: "2D2D2D", valign: "top",
  });
}

function addSectionTag(slide, x, y, text, color) {
  slide.addText(text.toUpperCase(), {
    x, y, w: 4, h: 0.28,
    fontSize: 8, bold: true, color,
    charSpacing: 3, margin: 0,
  });
}

// ─────────────────────────────────────────────
// PHONE MOCKUP
// ─────────────────────────────────────────────

function addPhone(slide, x, y, phoneW, phoneH, accentColor, screenBuilder, pres) {
  // Body
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w: phoneW, h: phoneH,
    fill: { color: C.dark },
    line: { color: "444466", width: 1.5 },
    rectRadius: 0.14,
    shadow: { type: "outer", blur: 12, offset: 5, angle: 140, color: "000000", opacity: 0.3 },
  });

  // Volume buttons
  [-0.04, 0].forEach((offset, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x - 0.04, y: y + phoneH * (0.28 + i * 0.14), w: 0.04, h: phoneH * 0.1,
      fill: { color: "333355" }, rectRadius: 0.02,
    });
  });

  // Power button
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x + phoneW, y: y + phoneH * 0.32, w: 0.04, h: phoneH * 0.12,
    fill: { color: "333355" }, rectRadius: 0.02,
  });

  const pad = 0.07;
  const sX = x + pad;
  const sY = y + 0.14;
  const sW = phoneW - pad * 2;
  const sH = phoneH - 0.28;

  // Screen background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: sX, y: sY, w: sW, h: sH,
    fill: { color: "F8F9FF" },
  });

  // Status bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: sX, y: sY, w: sW, h: 0.15,
    fill: { color: accentColor },
  });

  // Notch
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: sX + sW / 2 - 0.16, y: sY,
    w: 0.32, h: 0.09,
    fill: { color: C.dark }, rectRadius: 0.05,
  });

  // Nav bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: sX, y: sY + sH - 0.2, w: sW, h: 0.2,
    fill: { color: "ECECF5" },
  });

  // Home pill
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: sX + sW / 2 - 0.2, y: sY + sH - 0.1,
    w: 0.4, h: 0.05,
    fill: { color: "BBBBCC" }, rectRadius: 0.025,
  });

  // Content area
  if (screenBuilder) {
    screenBuilder(slide, sX, sY + 0.15, sW, sH - 0.35, pres);
  }
}

// ─────────────────────────────────────────────
// SCREEN BUILDERS — one per concept type
// ─────────────────────────────────────────────

const SCREENS = {

  breathing: (slide, x, y, w, h, pres) => {
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: "EEF4FF" } });
    slide.addText("Breathe with me", {
      x, y: y + 0.05, w, h: 0.2,
      fontSize: 8, bold: true, color: C.navy, align: "center",
    });
    // Outer glow ring
    slide.addShape(pres.shapes.OVAL, {
      x: x + w / 2 - 0.42, y: y + h * 0.22,
      w: 0.84, h: 0.84,
      fill: { color: C.teal, transparency: 65 },
    });
    // Main circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + w / 2 - 0.3, y: y + h * 0.28,
      w: 0.6, h: 0.6,
      fill: { color: C.teal },
    });
    slide.addText("4s", {
      x: x + w / 2 - 0.3, y: y + h * 0.32,
      w: 0.6, h: 0.4,
      fontSize: 14, bold: true, color: "FFFFFF", align: "center", valign: "middle",
    });
    slide.addText("Inhale...", {
      x, y: y + h * 0.72, w, h: 0.18,
      fontSize: 8, color: C.gray, align: "center", italic: true,
    });
    // Dots
    for (let i = 0; i < 4; i++) {
      slide.addShape(pres.shapes.OVAL, {
        x: x + w / 2 - 0.24 + i * 0.16, y: y + h * 0.85,
        w: 0.1, h: 0.1,
        fill: { color: i === 0 ? C.navy : "CCCCDD" },
      });
    }
  },

  mood: (slide, x, y, w, h, pres) => {
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: "FFFBF0" } });
    slide.addText("How are you feeling?", {
      x, y: y + 0.05, w, h: 0.2,
      fontSize: 8, bold: true, color: C.navy, align: "center",
    });
    const moods = ["😰", "😟", "😐", "🙂", "😊"];
    const moodW = (w - 0.1) / 5;
    moods.forEach((m, i) => {
      const selected = i === 1;
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.05 + i * moodW, y: y + h * 0.3,
        w: 0.3, h: 0.3,
        fill: { color: selected ? C.coral : "EEEEEE" },
      });
      slide.addText(m, {
        x: x + 0.05 + i * moodW, y: y + h * 0.3,
        w: 0.3, h: 0.3,
        fontSize: 13, align: "center", valign: "middle",
      });
    });
    // Selected label
    slide.addText("A little worried", {
      x, y: y + h * 0.58, w, h: 0.15,
      fontSize: 7, color: C.coral, align: "center", italic: true,
    });
    // Button
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + w * 0.15, y: y + h * 0.72, w: w * 0.7, h: 0.22,
      fill: { color: C.navy }, rectRadius: 0.08,
    });
    slide.addText("Next →", {
      x: x + w * 0.15, y: y + h * 0.72, w: w * 0.7, h: 0.22,
      fontSize: 9, bold: true, color: "FFFFFF", align: "center", valign: "middle",
    });
  },

  story: (slide, x, y, w, h, pres) => {
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: "F0F4FF" } });
    // Story image area
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.05, y: y + 0.05, w: w - 0.1, h: h * 0.44,
      fill: { color: "C5D8F0" }, rectRadius: 0.06,
    });
    slide.addText("🌙", {
      x: x + w / 2 - 0.22, y: y + h * 0.1, w: 0.44, h: 0.35,
      fontSize: 22, align: "center",
    });
    slide.addText("Night of Courage", {
      x, y: y + h * 0.36, w, h: 0.15,
      fontSize: 7, bold: true, color: C.navy, align: "center",
    });
    // Dialogue bubble
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.05, y: y + h * 0.52, w: w - 0.1, h: h * 0.3,
      fill: { color: "FFFFFF" }, rectRadius: 0.06,
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.1 },
    });
    slide.addText('"Even the brave hero felt scared sometimes..."', {
      x: x + 0.1, y: y + h * 0.54, w: w - 0.2, h: h * 0.26,
      fontSize: 7, italic: true, color: "444466",
    });
    // Progress
    slide.addText("Chapter 2 of 5", {
      x, y: y + h * 0.86, w, h: 0.12,
      fontSize: 6, color: C.gray, align: "center",
    });
  },

  parent: (slide, x, y, w, h, pres) => {
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: "F8F8FF" } });
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y, w, h: 0.28,
      fill: { color: C.navy },
    });
    slide.addText("Parent Dashboard", {
      x: x + 0.05, y, w: w - 0.1, h: 0.28,
      fontSize: 7, bold: true, color: "FFFFFF", valign: "middle",
    });
    // Child avatar
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.08, y: y + 0.32, w: 0.3, h: 0.3,
      fill: { color: C.teal },
    });
    slide.addText("T", {
      x: x + 0.08, y: y + 0.32, w: 0.3, h: 0.3,
      fontSize: 13, bold: true, color: "FFFFFF", align: "center", valign: "middle",
    });
    slide.addText("Tamar — today", {
      x: x + 0.44, y: y + 0.34, w: w - 0.5, h: 0.15,
      fontSize: 7, bold: true, color: C.navy,
    });
    slide.addText("3 activities completed ✓", {
      x: x + 0.44, y: y + 0.49, w: w - 0.5, h: 0.12,
      fontSize: 6, color: C.gray,
    });
    // Activity cards
    const items = [
      { label: "Breathing exercise", color: "E8F5E9", icon: "✓" },
      { label: "Evening story", color: "E8F5E9", icon: "✓" },
      { label: "Mood: 🙂 Calm", color: "FFF9E6", icon: "" },
    ];
    items.forEach((item, i) => {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x + 0.05, y: y + h * 0.52 + i * 0.22, w: w - 0.1, h: 0.18,
        fill: { color: item.color }, rectRadius: 0.04,
      });
      slide.addText(item.icon + " " + item.label, {
        x: x + 0.12, y: y + h * 0.525 + i * 0.22, w: w - 0.2, h: 0.16,
        fontSize: 7, color: "2C3E6B",
      });
    });
  },

  chat: (slide, x, y, w, h, pres) => {
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: "F5F5FF" } });
    slide.addText("Talk to Ori 🤖", {
      x, y: y + 0.02, w, h: 0.18,
      fontSize: 7, bold: true, color: C.navy, align: "center",
    });
    const messages = [
      { text: "Hi! How are you feeling today?", isBot: true },
      { text: "I'm scared about the sirens", isBot: false },
      { text: "That makes sense. Want to try breathing with me?", isBot: true },
    ];
    messages.forEach((msg, i) => {
      const bx = msg.isBot ? x + 0.05 : x + w * 0.25;
      const msgW = w * 0.68;
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: bx, y: y + 0.22 + i * 0.26, w: msgW, h: 0.2,
        fill: { color: msg.isBot ? "EEEEEE" : C.teal }, rectRadius: 0.07,
      });
      slide.addText(msg.text, {
        x: bx + 0.05, y: y + 0.23 + i * 0.26, w: msgW - 0.1, h: 0.18,
        fontSize: 6, color: msg.isBot ? C.dark : "FFFFFF",
      });
    });
    // Input box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.05, y: y + h * 0.86, w: w - 0.1, h: 0.18,
      fill: { color: "FFFFFF" }, line: { color: "CCCCDD", width: 1 }, rectRadius: 0.08,
    });
    slide.addText("Type a message...", {
      x: x + 0.1, y: y + h * 0.87, w: w - 0.2, h: 0.16,
      fontSize: 6, color: C.gray, italic: true,
    });
  },

  game: (slide, x, y, w, h, pres) => {
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: "1A1A3E" } });
    slide.addText("⭐ Calm Quest", {
      x, y: y + 0.04, w, h: 0.18,
      fontSize: 8, bold: true, color: "FFD700", align: "center",
    });
    // XP bar
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.08, y: y + 0.26, w: w - 0.16, h: 0.1,
      fill: { color: "333355" }, rectRadius: 0.05,
    });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.08, y: y + 0.26, w: (w - 0.16) * 0.65, h: 0.1,
      fill: { color: "FFD700" }, rectRadius: 0.05,
    });
    // Character
    slide.addText("🧙", {
      x: x + w / 2 - 0.2, y: y + h * 0.38, w: 0.4, h: 0.35,
      fontSize: 22, align: "center",
    });
    // Challenge card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.08, y: y + h * 0.65, w: w - 0.16, h: 0.28,
      fill: { color: "252550" }, rectRadius: 0.06,
    });
    slide.addText("Daily Challenge:\nBreathe deeply 3 times", {
      x: x + 0.12, y: y + h * 0.67, w: w - 0.24, h: 0.24,
      fontSize: 6.5, color: "CCCCFF", align: "center",
    });
  },
};

// ─────────────────────────────────────────────
// SLIDE BUILDERS
// ─────────────────────────────────────────────

function buildSlide01_Cover(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.dark };

  // Background pattern — dots grid
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 12; col++) {
      s.addShape(pres.shapes.OVAL, {
        x: 0.4 + col * 0.8, y: 0.3 + row * 0.9,
        w: 0.04, h: 0.04,
        fill: { color: "FFFFFF", transparency: 85 },
      });
    }
  }

  // Left accent bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.2, h: 5.625,
    fill: { color: C.coral },
  });

  // Brand tag
  s.addText("IDEA TO CONCEPT  ·  ZOHAR URIAN", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 8, color: C.coral, bold: true, charSpacing: 4, margin: 0,
  });

  // Main title
  s.addText(data.title, {
    x: 0.5, y: 0.9, w: 8.5, h: 2.2,
    fontSize: 40, bold: true, color: C.white,
    fontFace: "Georgia",
  });

  // HMW statement
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 8.5, h: 0.08,
    fill: { color: C.coral, transparency: 60 },
  });
  s.addText(`"${data.hmw}"`, {
    x: 0.5, y: 3.35, w: 8.5, h: 0.9,
    fontSize: 15, color: C.teal, italic: true,
  });

  // Bottom
  s.addText("Innovation Sprint  ·  " + new Date().getFullYear(), {
    x: 0.5, y: 5.1, w: 5, h: 0.3,
    fontSize: 9, color: C.gray, margin: 0,
  });
}

function buildSlide02_Challenge(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: C.coral } });

  addSectionTag(s, 0.5, 0.25, "The Challenge", C.coral);
  s.addText("The Problem We're Solving", {
    x: 0.5, y: 0.52, w: 9, h: 0.65,
    fontSize: 30, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });

  // Big quote block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.35, w: 9, h: 1.5,
    fill: { color: C.navy }, shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.35, w: 0.08, h: 1.5,
    fill: { color: C.coral },
  });
  s.addText(`"${data.hmw}"`, {
    x: 0.75, y: 1.45, w: 8.5, h: 1.3,
    fontSize: 17, color: C.white, italic: true, valign: "middle",
  });

  // Context + audience
  s.addText("Context", {
    x: 0.5, y: 3.1, w: 2, h: 0.3,
    fontSize: 11, bold: true, color: C.coral, margin: 0,
  });
  s.addText(data.context, {
    x: 0.5, y: 3.42, w: 5.5, h: 1.5,
    fontSize: 13, color: C.navy,
  });

  // Audience tag
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.3, y: 3.1, w: 3.2, h: 1.8,
    fill: { color: C.light }, shadow: makeShadow(), rectRadius: 0.1,
  });
  s.addText("Designing for", {
    x: 6.5, y: 3.25, w: 2.8, h: 0.3,
    fontSize: 9, bold: true, color: C.coral, margin: 0,
  });
  s.addText(data.audience, {
    x: 6.5, y: 3.58, w: 2.8, h: 1.1,
    fontSize: 12, color: C.navy,
  });
}

function buildSlide03_WhyItMatters(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.dark };

  addSectionTag(s, 0.5, 0.25, "Why It Matters", C.teal);
  s.addText("The Stakes", {
    x: 0.5, y: 0.5, w: 9, h: 0.7,
    fontSize: 32, bold: true, color: C.white, fontFace: "Georgia", margin: 0,
  });

  data.stats.forEach((stat, i) => {
    const x = 0.4 + i * 3.15;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.5, w: 2.9, h: 3.0,
      fill: { color: "1E3050" }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.5, w: 2.9, h: 0.07,
      fill: { color: C.coral },
    });
    s.addText(stat.number, {
      x, y: 1.7, w: 2.9, h: 1.1,
      fontSize: 52, bold: true, color: C.teal,
      align: "center", fontFace: "Georgia",
    });
    s.addText(stat.label, {
      x: x + 0.15, y: 2.85, w: 2.6, h: 1.4,
      fontSize: 12, color: C.gray, align: "center",
    });
  });

  s.addText("The cost of inaction is real. The opportunity to help is now.", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fontSize: 12, color: C.coral, italic: true, align: "center",
  });
}

function buildSlide04_Personas(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: C.teal } });

  addSectionTag(s, 0.5, 0.25, "Who We're Designing For", C.teal);
  s.addText("User Personas", {
    x: 0.5, y: 0.5, w: 9, h: 0.65,
    fontSize: 30, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });

  data.personas.forEach((p, i) => {
    const x = 0.4 + i * 4.8;
    // Card
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.4, w: 4.4, h: 3.9,
      fill: { color: C.light }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.4, w: 4.4, h: 0.07,
      fill: { color: p.color },
    });
    // Avatar circle
    s.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: 1.55, w: 0.7, h: 0.7,
      fill: { color: p.color },
    });
    s.addText(p.name[0], {
      x: x + 0.2, y: 1.55, w: 0.7, h: 0.7,
      fontSize: 24, bold: true, color: "FFFFFF",
      align: "center", valign: "middle",
    });
    s.addText(p.name, {
      x: x + 1.05, y: 1.6, w: 3.1, h: 0.35,
      fontSize: 15, bold: true, color: C.navy, margin: 0,
    });
    s.addText(`Age ${p.age}  ·  ${p.description}`, {
      x: x + 1.05, y: 1.95, w: 3.1, h: 0.3,
      fontSize: 10, color: C.gray, margin: 0,
    });

    // Divider
    s.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: 2.45, w: 4.0, h: 0.04,
      fill: { color: "D0D8E4" },
    });

    s.addText("Pain Points", {
      x: x + 0.2, y: 2.58, w: 3.8, h: 0.28,
      fontSize: 10, bold: true, color: p.color, margin: 0,
    });

    // Pains as sticky notes
    p.pains.forEach((pain, j) => {
      const stickyColors = [C.yellow, C.orange, C.mint];
      addSticky(s, x + 0.2, 2.95 + j * 0.72, 3.9, 0.62, pain, stickyColors[j % 3], pres, 10);
    });
  });
}

function buildSlide05_DayInLife(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: C.navy } });

  addSectionTag(s, 0.5, 0.25, "A Day in Their Life", C.navy);
  s.addText("Understanding the Journey", {
    x: 0.5, y: 0.5, w: 9, h: 0.65,
    fontSize: 30, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });

  // Timeline line
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.5, w: 9, h: 0.04,
    fill: { color: C.teal },
  });

  const moments = data.dayInLife;
  const spacing = 9 / moments.length;

  moments.forEach((m, i) => {
    const cx = 0.5 + i * spacing + spacing / 2;

    // Dot on timeline
    s.addShape(pres.shapes.OVAL, {
      x: cx - 0.15, y: 2.38, w: 0.3, h: 0.3,
      fill: { color: C.coral },
    });

    // Time label
    s.addText(m.time, {
      x: cx - 0.5, y: 2.75, w: 1, h: 0.25,
      fontSize: 10, bold: true, color: C.navy, align: "center", margin: 0,
    });

    // Scene card (alternating up/down)
    const cardY = i % 2 === 0 ? 1.1 : 3.1;

    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx - spacing * 0.42, y: cardY, w: spacing * 0.84, h: 1.1,
      fill: { color: i % 2 === 0 ? C.light : "FFF8F0" },
      shadow: makeShadow(), rectRadius: 0.08,
    });
    s.addText(m.emotion, {
      x: cx - 0.2, y: cardY + 0.05, w: 0.4, h: 0.3,
      fontSize: 16, align: "center",
    });
    s.addText(m.scene, {
      x: cx - spacing * 0.38, y: cardY + 0.35, w: spacing * 0.76, h: 0.25,
      fontSize: 9, bold: true, color: C.navy, align: "center", margin: 0,
    });
    s.addText(m.detail, {
      x: cx - spacing * 0.38, y: cardY + 0.6, w: spacing * 0.76, h: 0.42,
      fontSize: 8, color: C.gray, align: "center",
    });

    // Connector line
    const lineY = i % 2 === 0 ? cardY + 1.1 : cardY;
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx - 0.01, y: lineY, w: 0.02, h: Math.abs(2.38 - lineY),
      fill: { color: C.teal, transparency: 40 },
    });
  });
}

function buildSlide06_Assumptions(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.dark };

  addSectionTag(s, 0.5, 0.25, "Key Assumptions", C.yellow);
  s.addText("What We Believe — And Need to Test", {
    x: 0.5, y: 0.5, w: 9, h: 0.65,
    fontSize: 28, bold: true, color: C.white, fontFace: "Georgia", margin: 0,
  });

  const positions = [
    { x: 0.4, y: 1.4 },
    { x: 5.1, y: 1.4 },
    { x: 0.4, y: 3.3 },
    { x: 5.1, y: 3.3 },
  ];
  const colors = [C.yellow, C.orange, C.mint, C.blue];

  data.assumptions.forEach((a, i) => {
    const pos = positions[i];
    addSticky(s, pos.x, pos.y, 4.5, 1.7, a.text, colors[i], pres, 12);
    // Testability badge
    const badgeColor = a.testable === "High" ? "4CAF50" : a.testable === "Medium" ? "FF9800" : "F44336";
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: pos.x + 3.3, y: pos.y + 1.35, w: 1.0, h: 0.22,
      fill: { color: badgeColor }, rectRadius: 0.08,
    });
    s.addText(`Test: ${a.testable}`, {
      x: pos.x + 3.3, y: pos.y + 1.35, w: 1.0, h: 0.22,
      fontSize: 7, bold: true, color: "FFFFFF", align: "center", valign: "middle",
    });
    // Assumption number
    s.addText(`#${i + 1}`, {
      x: pos.x + 0.1, y: pos.y + 0.05, w: 0.3, h: 0.28,
      fontSize: 10, bold: true, color: "55550099", align: "left",
    });
  });
}

function buildConceptSlide(pres, concept, index) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: concept.accentColor } });

  addSectionTag(s, 0.5, 0.22, `Concept ${index + 1} of 4`, C.gray);

  // Phone mockup — left side
  addPhone(s, 0.4, 0.6, 2.8, 4.8, concept.accentColor, SCREENS[concept.screenType] || SCREENS.breathing, pres);

  // Concept details — right side
  s.addText(concept.name, {
    x: 3.6, y: 0.5, w: 6, h: 0.8,
    fontSize: 32, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });

  // Tagline box
  s.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 1.4, w: 6.0, h: 0.65,
    fill: { color: concept.accentColor, transparency: 85 },
  });
  s.addText(`"${concept.tagline}"`, {
    x: 3.75, y: 1.44, w: 5.7, h: 0.57,
    fontSize: 14, italic: true, color: C.navy, valign: "middle",
  });

  // Features
  s.addText("Key Features", {
    x: 3.6, y: 2.22, w: 6, h: 0.3,
    fontSize: 11, bold: true, color: concept.accentColor, margin: 0,
  });

  concept.features.forEach((feat, i) => {
    s.addShape(pres.shapes.OVAL, {
      x: 3.6, y: 2.62 + i * 0.52, w: 0.22, h: 0.22,
      fill: { color: concept.accentColor },
    });
    s.addText(feat, {
      x: 3.92, y: 2.59 + i * 0.52, w: 5.5, h: 0.28,
      fontSize: 13, color: C.navy, valign: "middle",
    });
  });

  // Hunch strip
  s.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 4.6, w: 6.0, h: 0.72,
    fill: { color: C.dark },
  });
  s.addText("HUNCH THIS TESTS:", {
    x: 3.75, y: 4.65, w: 5.7, h: 0.25,
    fontSize: 7, bold: true, color: concept.accentColor, charSpacing: 2, margin: 0,
  });
  s.addText(concept.hunch, {
    x: 3.75, y: 4.88, w: 5.7, h: 0.38,
    fontSize: 11, color: C.white, italic: true,
  });
}

function buildSlide11_Scenario(pres, scenario, conceptName, screenType, accentColor, slideNum) {
  const s = pres.addSlide();
  s.background = { color: C.light };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: C.navy } });

  addSectionTag(s, 0.5, 0.25, `User Scenario ${slideNum}`, C.navy);
  s.addText("A Real Moment", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });

  // Scene card — left
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.3, w: 3.2, h: 3.8,
    fill: { color: C.white }, shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.3, w: 3.2, h: 0.07,
    fill: { color: C.coral },
  });
  s.addText("THE MOMENT", {
    x: 0.55, y: 1.42, w: 2.9, h: 0.25,
    fontSize: 8, bold: true, color: C.coral, charSpacing: 3, margin: 0,
  });
  s.addText(scenario.who, {
    x: 0.55, y: 1.72, w: 2.9, h: 0.35,
    fontSize: 13, bold: true, color: C.navy, margin: 0,
  });
  s.addText(scenario.when, {
    x: 0.55, y: 2.1, w: 2.9, h: 0.3,
    fontSize: 11, color: C.gray, italic: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 2.5, w: 2.9, h: 0.03,
    fill: { color: "D0D8E4" },
  });
  s.addText("Feeling:", {
    x: 0.55, y: 2.62, w: 2.9, h: 0.25,
    fontSize: 9, bold: true, color: C.navy, margin: 0,
  });
  addSticky(s, 0.55, 2.9, 2.9, 0.65, scenario.feeling, C.orange, pres, 10);
  s.addText("Then:", {
    x: 0.55, y: 3.65, w: 2.9, h: 0.25,
    fontSize: 9, bold: true, color: C.navy, margin: 0,
  });
  addSticky(s, 0.55, 3.93, 2.9, 0.9, scenario.action, C.mint, pres, 10);

  // Phone — center
  addPhone(s, 3.9, 1.1, 2.5, 4.2, accentColor, SCREENS[screenType] || SCREENS.breathing, pres);

  // Concept label — right
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.7, y: 1.3, w: 2.9, h: 3.8,
    fill: { color: C.white }, shadow: makeShadow(),
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.7, y: 1.3, w: 2.9, h: 0.07,
    fill: { color: accentColor },
  });
  s.addText("CONCEPT IN USE", {
    x: 6.85, y: 1.42, w: 2.6, h: 0.25,
    fontSize: 8, bold: true, color: accentColor, charSpacing: 2, margin: 0,
  });
  s.addText(conceptName, {
    x: 6.85, y: 1.72, w: 2.6, h: 0.5,
    fontSize: 16, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });
  s.addText("What the user experiences:", {
    x: 6.85, y: 2.3, w: 2.6, h: 0.3,
    fontSize: 9, color: C.gray, margin: 0,
  });
  addSticky(s, 6.85, 2.65, 2.6, 0.8, "Opens app, sees a calm screen that immediately lowers the sense of urgency", C.blue, pres, 10);
  addSticky(s, 6.85, 3.55, 2.6, 0.8, "Follows a 2-minute guided activity, feels agency over the anxiety", C.yellow, pres, 10);
  addSticky(s, 6.85, 4.45, 2.6, 0.6, "Falls asleep feeling slightly more in control", C.mint, pres, 10);
}

function buildSlide13_Comparison(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: C.navy } });

  addSectionTag(s, 0.5, 0.22, "Concept Comparison", C.navy);
  s.addText("Side by Side", {
    x: 0.5, y: 0.48, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });

  // Axis labels
  s.addText("← Child-led", { x: 0.3, y: 2.9, w: 1.5, h: 0.3, fontSize: 9, color: C.gray, italic: true });
  s.addText("Parent-led →", { x: 8.2, y: 2.9, w: 1.5, h: 0.3, fontSize: 9, color: C.gray, italic: true });
  s.addText("Low friction ↑", { x: 4.5, y: 1.08, w: 1.5, h: 0.3, fontSize: 9, color: C.gray, italic: true, align: "center" });
  s.addText("↓ High friction", { x: 4.5, y: 4.8, w: 1.5, h: 0.3, fontSize: 9, color: C.gray, italic: true, align: "center" });

  // Axis lines
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.0, w: 9, h: 0.03, fill: { color: "D0D8E4" } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.0, y: 1.35, w: 0.03, h: 3.8, fill: { color: "D0D8E4" } });

  const quadrants = [
    { x: 0.5, y: 1.35 },
    { x: 5.1, y: 1.35 },
    { x: 0.5, y: 3.1 },
    { x: 5.1, y: 3.1 },
  ];

  data.concepts.forEach((c, i) => {
    const q = quadrants[i];
    s.addShape(pres.shapes.RECTANGLE, {
      x: q.x, y: q.y, w: 4.4, h: 1.6,
      fill: { color: C.light }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: q.x, y: q.y, w: 4.4, h: 0.06,
      fill: { color: c.accentColor },
    });

    // Mini phone
    addPhone(s, q.x + 0.1, q.y + 0.12, 0.75, 1.3, c.accentColor, SCREENS[c.screenType], pres);

    // Concept info
    s.addText(c.name, {
      x: q.x + 1.0, y: q.y + 0.12, w: 3.2, h: 0.35,
      fontSize: 13, bold: true, color: C.navy, margin: 0,
    });
    s.addText(c.tagline, {
      x: q.x + 1.0, y: q.y + 0.5, w: 3.2, h: 0.75,
      fontSize: 10, color: C.gray, italic: true,
    });
  });
}

function buildSlide14_FidelityLadder(pres) {
  const s = pres.addSlide();
  s.background = { color: C.dark };

  addSectionTag(s, 0.5, 0.22, "The Fidelity Ladder", C.teal);
  s.addText("From Idea to Product", {
    x: 0.5, y: 0.48, w: 9, h: 0.65,
    fontSize: 30, bold: true, color: C.white, fontFace: "Georgia", margin: 0,
  });
  s.addText("Start rough. Get real feedback. Then build.", {
    x: 0.5, y: 1.1, w: 9, h: 0.3,
    fontSize: 12, color: C.gray, italic: true, margin: 0,
  });

  const levels = [
    { label: "Rough Sketch", emoji: "✏️", desc: "Hand-drawn on paper or sticky note. Spark conversation — don't impress.", purpose: "Explore", col: "3D4F6A" },
    { label: "Concept Card", emoji: "🃏", desc: "Low-fi image + 1-sentence description. Test the idea, not the design.", purpose: "Test", col: "2D6A8F" },
    { label: "Clickable Prototype", emoji: "📱", desc: "Figma or simple flow. Test usability and the experience.", purpose: "Validate", col: C.teal },
    { label: "Live Product", emoji: "🚀", desc: "Real users, real data. Iterate on behavior, not assumptions.", purpose: "Launch", col: C.coral },
  ];

  levels.forEach((l, i) => {
    const x = 0.4 + i * 2.3;
    const h = 1.8 + i * 0.4; // grows taller
    const y = 5.0 - h;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 2.1, h,
      fill: { color: l.col }, shadow: makeShadow(),
    });

    s.addText(l.emoji, {
      x, y: y + 0.12, w: 2.1, h: 0.4,
      fontSize: 20, align: "center",
    });
    s.addText(l.label, {
      x, y: y + 0.55, w: 2.1, h: 0.35,
      fontSize: 12, bold: true, color: C.white, align: "center",
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.5, y: y + 0.92, w: 1.1, h: 0.03,
      fill: { color: "FFFFFF", transparency: 60 },
    });
    s.addText(l.desc, {
      x: x + 0.1, y: y + 1.0, w: 1.9, h: h - 1.15,
      fontSize: 9, color: C.white, align: "center",
    });

    // Purpose badge at bottom
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.35, y: 5.08, w: 1.4, h: 0.22,
      fill: { color: l.col }, rectRadius: 0.08,
      shadow: makeShadow(),
    });
    s.addText(l.purpose, {
      x: x + 0.35, y: 5.08, w: 1.4, h: 0.22,
      fontSize: 9, bold: true, color: C.white, align: "center", valign: "middle",
    });

    // Arrow between steps
    if (i < 3) {
      s.addText("→", {
        x: x + 2.1, y: 3.0, w: 0.2, h: 0.4,
        fontSize: 16, color: C.teal, align: "center",
      });
    }
  });
}

function buildSlide15_TestingPlan(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: C.coral } });

  addSectionTag(s, 0.5, 0.22, "Testing Plan", C.coral);
  s.addText("How We'd Test Our Assumptions", {
    x: 0.5, y: 0.48, w: 9, h: 0.65,
    fontSize: 28, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });

  data.testingPlan.forEach((t, i) => {
    const y = 1.35 + i * 1.02;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y, w: 9.2, h: 0.88,
      fill: { color: C.light }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.4, y: y + 0.08, w: 0.55, h: 0.55,
      fill: { color: C.coral }, rectRadius: 0.06,
    });
    s.addText(`${i + 1}`, {
      x: 0.4, y: y + 0.08, w: 0.55, h: 0.55,
      fontSize: 18, bold: true, color: C.white, align: "center", valign: "middle",
    });
    s.addText(t.assumption, {
      x: 1.1, y: y + 0.08, w: 5.5, h: 0.3,
      fontSize: 11, bold: true, color: C.navy, margin: 0,
    });
    s.addText(t.method, {
      x: 1.1, y: y + 0.42, w: 5.5, h: 0.3,
      fontSize: 10, color: C.gray, italic: true, margin: 0,
    });
    // Tags
    [t.who, t.timeline].forEach((tag, j) => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 6.8 + j * 1.55, y: y + 0.2, w: 1.4, h: 0.28,
        fill: { color: j === 0 ? C.teal : C.yellow, transparency: 20 }, rectRadius: 0.08,
      });
      s.addText(tag, {
        x: 6.8 + j * 1.55, y: y + 0.2, w: 1.4, h: 0.28,
        fontSize: 9, color: C.dark, align: "center", valign: "middle",
      });
    });
  });
}

function buildSlide16_ShowFirst(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.dark };

  addSectionTag(s, 0.5, 0.22, "What We'd Show Users First", C.teal);
  s.addText("Starting Point for Testing", {
    x: 0.5, y: 0.48, w: 9, h: 0.65,
    fontSize: 28, bold: true, color: C.white, fontFace: "Georgia", margin: 0,
  });

  data.topConcepts.forEach((ci, i) => {
    const c = data.concepts[ci];
    const x = 0.4 + i * 4.8;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.4, w: 4.4, h: 3.9,
      fill: { color: "1E3050" }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.4, w: 4.4, h: 0.07,
      fill: { color: c.accentColor },
    });

    s.addText(i === 0 ? "SHOW FIRST" : "SHOW SECOND", {
      x: x + 0.15, y: 1.52, w: 4.0, h: 0.25,
      fontSize: 8, bold: true, color: c.accentColor, charSpacing: 3, margin: 0,
    });
    s.addText(c.name, {
      x: x + 0.15, y: 1.8, w: 4.0, h: 0.5,
      fontSize: 18, bold: true, color: C.white, margin: 0,
    });

    // Mini phone
    addPhone(s, x + 0.8, 2.4, 1.5, 2.6, c.accentColor, SCREENS[c.screenType], pres);

    addSticky(s, x + 2.55, 2.4, 1.65, 2.6, `Why: ${c.hunch}`, C.yellow, pres, 9);
  });
}

function buildSlide17_OpenQuestions(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.navy };

  addSectionTag(s, 0.5, 0.22, "Open Questions", C.yellow);
  s.addText("What We Don't Know Yet", {
    x: 0.5, y: 0.48, w: 9, h: 0.65,
    fontSize: 28, bold: true, color: C.white, fontFace: "Georgia", margin: 0,
  });
  s.addText("The questions we shouldn't pretend to have answered", {
    x: 0.5, y: 1.1, w: 9, h: 0.3,
    fontSize: 12, color: C.gray, italic: true, margin: 0,
  });

  const stickyColors = [C.yellow, C.orange, C.mint, C.blue, C.yellow, C.orange];
  const positions = [
    { x: 0.4, y: 1.55 }, { x: 3.5, y: 1.55 }, { x: 6.6, y: 1.55 },
    { x: 0.4, y: 3.45 }, { x: 3.5, y: 3.45 }, { x: 6.6, y: 3.45 },
  ];

  data.openQuestions.slice(0, 6).forEach((q, i) => {
    const pos = positions[i];
    addSticky(s, pos.x, pos.y, 2.9, 1.65, `? ${q}`, stickyColors[i], pres, 10);
  });
}

function buildSlide18_NextSteps(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: C.teal } });

  addSectionTag(s, 0.5, 0.22, "Next Steps", C.teal);
  s.addText("3 Concrete Moves — In Order", {
    x: 0.5, y: 0.48, w: 9, h: 0.65,
    fontSize: 28, bold: true, color: C.navy, fontFace: "Georgia", margin: 0,
  });

  // Timeline line
  s.addShape(pres.shapes.RECTANGLE, {
    x: 1.0, y: 3.0, w: 8.0, h: 0.04,
    fill: { color: C.teal },
  });

  data.nextSteps.forEach((step, i) => {
    const cx = 1.5 + i * 2.8;

    // Connector dot
    s.addShape(pres.shapes.OVAL, {
      x: cx - 0.2, y: 2.88, w: 0.4, h: 0.4,
      fill: { color: C.coral },
    });
    s.addText(`${i + 1}`, {
      x: cx - 0.2, y: 2.88, w: 0.4, h: 0.4,
      fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle",
    });

    // Step card
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx - 1.2, y: 1.3, w: 2.4, h: 1.45,
      fill: { color: C.light }, shadow: makeShadow(),
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx - 1.2, y: 1.3, w: 2.4, h: 0.06,
      fill: { color: C.coral },
    });
    s.addText(step.step, {
      x: cx - 1.1, y: 1.4, w: 2.2, h: 0.4,
      fontSize: 12, bold: true, color: C.navy, margin: 0,
    });
    s.addText(step.detail, {
      x: cx - 1.1, y: 1.84, w: 2.2, h: 0.7,
      fontSize: 9, color: C.gray,
    });

    // Below line: timeline + owner
    s.addText(step.timeline, {
      x: cx - 1.2, y: 3.4, w: 2.4, h: 0.28,
      fontSize: 10, bold: true, color: C.teal, align: "center", margin: 0,
    });
    s.addText(step.owner, {
      x: cx - 1.2, y: 3.72, w: 2.4, h: 0.25,
      fontSize: 9, color: C.gray, align: "center",
    });

    // Arrow
    if (i < 2) {
      s.addText("→", {
        x: cx + 1.25, y: 2.8, w: 0.4, h: 0.4,
        fontSize: 18, color: C.teal, align: "center",
      });
    }
  });
}

function buildSlide19_Closing(pres, data) {
  const s = pres.addSlide();
  s.background = { color: C.dark };

  // Background dots
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 11; col++) {
      s.addShape(pres.shapes.OVAL, {
        x: 0.5 + col * 0.85, y: 0.4 + row * 1.0,
        w: 0.04, h: 0.04,
        fill: { color: "FFFFFF", transparency: 88 },
      });
    }
  }

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.2, h: 5.625,
    fill: { color: C.coral },
  });

  s.addText("The best ideas start as rough questions.\nThis one is worth pursuing.", {
    x: 0.55, y: 0.9, w: 8.8, h: 2.4,
    fontSize: 36, bold: true, color: C.white, fontFace: "Georgia",
  });

  s.addText("Start conversations. Test assumptions. Iterate fast.", {
    x: 0.55, y: 3.4, w: 8.8, h: 0.6,
    fontSize: 16, color: C.teal, italic: true,
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 4.2, w: 3.5, h: 0.04,
    fill: { color: "2A4060" },
  });

  s.addText("IDEA TO CONCEPT  ·  ZOHAR URIAN", {
    x: 0.55, y: 4.35, w: 6, h: 0.35,
    fontSize: 10, color: C.gray, charSpacing: 2,
  });
}

// ─────────────────────────────────────────────
// MAIN — Build all slides
// ─────────────────────────────────────────────

async function buildPresentation() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Zohar Urian";
  pres.title = "Idea to Concept — " + CHALLENGE_DATA.title;

  const d = CHALLENGE_DATA;

  buildSlide01_Cover(pres, d);
  buildSlide02_Challenge(pres, d);
  buildSlide03_WhyItMatters(pres, d);
  buildSlide04_Personas(pres, d);
  buildSlide05_DayInLife(pres, d);
  buildSlide06_Assumptions(pres, d);

  d.concepts.forEach((c, i) => buildConceptSlide(pres, c, i));

  d.scenarios.forEach((sc, i) => {
    const c = d.concepts[sc.conceptIndex];
    buildSlide11_Scenario(pres, sc, c.name, c.screenType, c.accentColor, i + 1, pres);
  });

  buildSlide13_Comparison(pres, d);
  buildSlide14_FidelityLadder(pres);
  buildSlide15_TestingPlan(pres, d);
  buildSlide16_ShowFirst(pres, d);
  buildSlide17_OpenQuestions(pres, d);
  buildSlide18_NextSteps(pres, d);
  buildSlide19_Closing(pres, d);

  const slug = d.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 40);
  const outPath = `${process.env.HOME}/Desktop/idea-to-concept-${slug}.pptx`;
  await pres.writeFile({ fileName: outPath });
  console.log("✅ Saved to:", outPath);
  console.log(`📊 Total slides: 19`);
}

buildPresentation().catch(err => {
  console.error("❌ Error:", err.message);
  console.error(err.stack);
  process.exit(1);
});
