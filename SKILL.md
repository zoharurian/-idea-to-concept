# Idea to Concept — Innovation Sprint Skill
*By Zohar Urian*

## Overview

This skill transforms a raw innovation challenge into a **visually rich, ideation-style PowerPoint presentation** (19 slides) that looks and feels like real design sprint work.

The output includes: phone wireframe mockups, sticky note concept cards, user scenario slides, day-in-life timeline, visual 2×2 comparison, fidelity ladder, and next steps. Zero text-only slides.

**Default language: English. Hebrew only if user explicitly requests it.**

---

## When to Trigger

Trigger when the user:
- Provides a challenge, problem, or "how might we" statement
- Says: "run an Idea to Concept", "build a concept deck", "innovation sprint", "design sprint", "develop my idea"

---

## Process

### Step 1 — Receive the Challenge
The user provides a challenge. Can be rough — a sentence, a problem, a question.

### Step 2 — Ask Max 2 Clarifying Questions
Only if essential. Pick the most relevant:
- Who is the primary user or audience?
- What constraint matters most (age group, platform, context)?

**Skip if the challenge is clear enough.**

### Step 3 — Generate Content & Run Template

1. Read the full template at `~/skills/idea-to-concept/template.js`
2. Fill in the `CHALLENGE_DATA` object at the top with rich, specific content
3. Run: `node ~/skills/idea-to-concept/template.js`
4. The PPTX will be saved to the Desktop

---

## How to Fill CHALLENGE_DATA

Fill every field with **specific, imaginative content** — not generic placeholders.

### title
Short challenge title. Example: `"Helping Kids Cope with War Anxiety"`

### hmw
The full "How might we..." question.

### language
`"en"` for English, `"he"` for Hebrew (only if user requested).

### audience
One sentence describing who you're designing for.

### context
Why this problem matters right now — 1–2 sentences, specific.

### stats (3 items)
Real or researched statistics. Each has:
- `number`: big bold stat (e.g., `"72%"`, `"1 in 4"`, `"3×"`)
- `label`: what it means in plain language

### personas (2 items)
Each persona:
- `name`: evocative name, not "User A"
- `age`: specific number
- `description`: one sentence, specific role/situation
- `pains`: 3 specific pain points as short phrases
- `color`: hex color (no `#`)

### dayInLife (4 items)
4 real moments in the user's day. Each:
- `time`: clock time (e.g., `"07:30"`)
- `scene`: what's happening (short)
- `emotion`: single emoji
- `detail`: one sentence of context

### assumptions (4 items)
Sharp, testable hunches. Each:
- `text`: the assumption in plain language
- `testable`: `"High"`, `"Medium"`, or `"Low"`

### concepts (4 items)
Each concept needs a **distinct mechanism** — not just different features.
Each:
- `name`: evocative product name
- `tagline`: one punchy sentence
- `features`: 3 short feature labels
- `hunch`: what assumption this tests
- `screenType`: choose from `breathing` | `mood` | `story` | `parent` | `chat` | `game`
- `accentColor`: hex color (no `#`)

### scenarios (2 items)
2 real user moments. Each:
- `who`: name + age
- `when`: specific time and place
- `feeling`: short emotional description
- `action`: what they do next
- `conceptIndex`: which concept (0–3) they're using

### testingPlan (4 items)
One test per assumption. Each:
- `assumption`: short label
- `method`: specific test method
- `who`: who you'd test with
- `timeline`: when (e.g., `"Week 1"`)

### topConcepts
Array of 2 concept indices to highlight (e.g., `[0, 2]`)

### openQuestions (6 items)
Honest, strategic questions the team doesn't have answers to yet.

### nextSteps (3 items)
Concrete actions. Each:
- `step`: short action name
- `detail`: one sentence of what to do
- `timeline`: when
- `owner`: who does it

---

## Content Quality Rules

**Concepts**: Each must feel distinct in its core mechanism — not just features.
- Bad: "an app with breathing exercises"
- Good: "a guided breathing companion that responds to the child's voice and adjusts pace in real time"

**Assumptions**: Be honest and specific.
- Bad: "users will like the app"
- Good: "children aged 6–10 prefer character-led experiences over direct instruction"

**Personas**: Make them feel real.
- Bad: "a child who is anxious"
- Good: "Tamar, 8, lives in the south, has nightmares about sirens, loves drawing"

---

## Screen Types Reference

Choose `screenType` based on the concept's core interaction:

| screenType | Best for |
|------------|----------|
| `breathing` | Calm / relaxation / mindfulness concepts |
| `mood` | Check-in / self-awareness / emotion tracking |
| `story` | Narrative / character-led / therapeutic storytelling |
| `parent` | Dashboard / monitoring / parent-facing features |
| `chat` | Conversational AI / chatbot / guided dialogue |
| `game` | Gamification / quests / rewards / playful mechanics |

---

## Output

- File: `~/Desktop/idea-to-concept-[slug].pptx`
- 19 slides
- Author: Zohar Urian

---

## Skill Metadata

```yaml
name: idea-to-concept
version: 3.0
author: Zohar Urian
language: English (Hebrew on request)
output: PPTX, 19 slides
input: Innovation challenge
max_clarifying_questions: 2
requires: ~/skills/idea-to-concept/template.js
visual_style: ideation / design sprint
key_features:
  - phone wireframe mockups (6 screen types)
  - sticky note cards
  - day-in-life timeline
  - user scenario slides
  - visual 2x2 comparison
  - fidelity ladder
  - zero text-only slides
