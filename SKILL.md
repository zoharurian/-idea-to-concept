# Idea to Concept — Deep Innovation Sprint Skill v4.0
*By Zohar Urian*

---

## Overview

This skill runs a **4-phase deep innovation process** that produces a 22–26 slide ideation deck that looks and feels like the output of a real design team after a week of work.

**The output must feel like a professional deliverable — not a generated deck.**

Every concept is grounded in real research. Every idea is illustrated as a working prototype. Every recommendation is backed by evidence.

**Default language: English. Hebrew only if explicitly requested.**

---

## When to Trigger

- User provides a challenge, innovation problem, or "how might we" statement
- User says: "run Idea to Concept", "innovation sprint", "design sprint", "ideation process", "concept deck"

---

## THE 4 PHASES — Follow in Order. Never Skip.

---

### PHASE 1 — Deep Research (mandatory, before any content)

Run all of these web searches. Extract real findings. Save them internally before writing any slide content.

**Search 1 — Industry landscape**
```
[industry] AI transformation trends 2025 2026
[industry] digital innovation case studies results
[industry] technology adoption challenges
```

**Search 2 — Real pain points**
```
[target user role] biggest frustrations challenges survey
[industry] employee pain points workflow problems
[industry] customer complaints unmet needs
```

**Search 3 — Existing solutions**
```
[industry] [challenge type] software tools platforms
[challenge] startups solutions market
best tools for [challenge] compared
```

**Search 4 — Analogous inspiration**
```
[similar problem] solved different industry
[challenge type] innovation success story unexpected industry
```

**Search 5 — Market data**
```
[industry] market size growth statistics 2025
[challenge] ROI impact data research
[industry] AI adoption rate statistics
```

**After all searches, extract:**
- 5 sharp insights (things you didn't know before searching)
- 3 real statistics with sources
- 4 existing solutions with their critical gaps
- 2 analogous examples from other industries
- 1 clear opportunity statement: the specific gap none of the existing solutions address

**Do not proceed to Phase 2 until this is complete.**

---

### PHASE 2 — Grounded Concept Generation

Generate exactly 4 concepts. Each must:

1. Be rooted in a specific Phase 1 insight (state which one)
2. Have a completely distinct core mechanism from the other 3
3. Address a specific gap found in the existing solutions research
4. Be specific enough that you could build it tomorrow
5. Have a clear testable hunch

**Concept quality test — apply to each concept:**
- Could this concept exist in a different industry? If yes, it's too generic. Make it specific.
- Does this concept's core mechanism overlap with any other concept? If yes, differentiate it.
- Can you draw a 5-step user flow for this concept right now? If not, it's not concrete enough.

**For each concept, define:**
- Name: specific product/service name
- Tagline: exact value proposition (what it does + for whom + measurable outcome)
- Core mechanism: the specific way it works (1–2 sentences, technical enough to build)
- 3 features: specific capabilities, not generic categories
- User flow: 5 steps the user takes (this becomes the flow diagram)
- Screen type: which UI pattern best shows the core interaction
- Hunch tested: the specific assumption this concept proves or disproves
- Research basis: which Phase 1 insight this addresses

---

### PHASE 3 — Build All Visual Assets

For each concept, build:

**A. Phone/screen mockup** — using PptxGenJS shapes
- Show the exact screen at the most critical user moment
- Not a generic dashboard — the specific interaction that is unique to this concept
- Real UI elements: buttons with labels, data fields, navigation, content cards

**B. User flow diagram** — 5-step horizontal flow
- Each step is a box with: step name + what the user does + what the system does
- Arrows connecting steps
- Highlight the "magic moment" — the step where the concept delivers its core value

**C. User scenario** — a real moment in time
- Specific person + specific context + specific problem + concept in use + outcome
- Phone mockup showing the exact screen at that moment

**D. Service blueprint** (for the top concept only)
- 4 swim lanes: User Actions / Frontstage / Backstage / Support Systems
- 5 steps across
- Shows how the concept works as a complete system

**E. Implementation roadmap** (new in v4)
- 3 phases: Quick Win (0–3 months) / Build (3–6 months) / Scale (6–12 months)
- Each phase: what gets built + who owns it + success metric
- Visual timeline with milestone markers

---

### PHASE 4 — Assemble Presentation

Read ~/skills/idea-to-concept/template.js, fill CHALLENGE_DATA with all Phase 1-3 content, add the new slides, then run:
node ~/skills/idea-to-concept/template.js

---

## Full Slide Structure (22–26 Slides)

1  | Cover | Dark + title + HMW + dot pattern
2  | The Challenge | Quote block left + 3 context facts right
3  | Research Method | 5 search categories as icons
4  | Key Insights | 5 insight cards — dark bg, numbered
5  | Why It Matters | 3 REAL stats — oversized numbers
6  | Existing Solutions | Gap matrix — 4 solutions x 4 columns
7  | The Opportunity | Single bold statement
8  | Who We're Designing For | 2 persona cards
9  | A Day in Their Life | Horizontal timeline
10 | Key Assumptions | 4 sticky-note cards in 2x2 grid
11 | Concept 1 | Phone mockup LEFT + concept details RIGHT
12 | Concept 1 Flow | 5-step horizontal user flow diagram
13 | Concept 2 | Phone mockup CENTER + details
14 | Concept 2 Flow | 5-step horizontal user flow diagram
15 | Concept 3 | Phone mockup RIGHT + details
16 | Concept 4 | Phone mockup + details
17 | User Scenario A | Scene + phone screen + emotional arc
18 | User Scenario B | Different user + moment
19 | Concept Comparison | Visual 2x2 grid — mini screens + axes
20 | Service Blueprint | 4 swim lanes x 5 steps
21 | Fidelity Ladder | 4 stages: sketch to product
22 | Testing Plan | 4 test cards
23 | Implementation Roadmap | 3-phase timeline
24 | Open Questions | Sticky board
25 | Next Steps | 3-step horizontal timeline
26 | Closing | Dark + strong statement + brand

---

## Quality Checklist — Run Before Saving

Claude Code must verify every item before delivering:

- [ ] Phase 1 web searches completed — at least 5 real searches
- [ ] All 3 statistics are real and sourced from research
- [ ] All 4 existing solutions are real companies/tools found in research
- [ ] Opportunity statement addresses a gap found in research
- [ ] Each concept references a specific research insight
- [ ] No two concepts share the same core mechanism
- [ ] Every phone screen shows the specific interaction unique to that concept
- [ ] User flow diagrams show 5 real steps with system responses
- [ ] Service blueprint shows a complete system
- [ ] Roadmap has specific actions and measurable metrics
- [ ] Zero text-only slides

If any item is unchecked — fix it before saving.

---

## Language

- **Default: English**
- Hebrew only if user explicitly requests it

---

## Skill Metadata

name: idea-to-concept
version: 4.0
author: Zohar Urian
language: English (Hebrew on request)
output: PPTX 22-26 slides
input: Innovation challenge
phases:
  1: Deep Research (web search)
  2: Grounded Concept Generation
  3: Visual Asset Building
  4: Presentation Assembly
requires: ~/skills/idea-to-concept/template.js
