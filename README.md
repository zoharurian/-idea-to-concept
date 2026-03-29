# Idea to Concept — Innovation Sprint Skill
*By Zohar Urian*

Turn any challenge into a full 19-slide ideation deck — with phone mockups, concept cards, user scenarios, and visual comparisons.

---

## What You Get

A complete PowerPoint presentation that looks like real design sprint work:
- Phone wireframe mockups (6 screen types)
- Sticky note concept cards
- Day-in-life timeline
- User scenario slides
- Visual 2×2 concept comparison
- Fidelity ladder
- Zero text-only slides

---

## Setup (do this once)

**Step 1** — Download this repo

Click the green **Code** button → **Download ZIP** → unzip it

**Step 2** — Open your terminal and run:

```bash
mkdir -p ~/skills/idea-to-concept
cp /path/to/downloaded/SKILL.md ~/skills/idea-to-concept/
cp /path/to/downloaded/template.js ~/skills/idea-to-concept/
```

**Step 3** — Install dependencies (do this once):

```bash
cd ~/skills/idea-to-concept
npm install pptxgenjs react react-dom react-icons sharp
```

---

## How to Use

Open Claude Code and write:

```
Read ~/skills/idea-to-concept/SKILL.md then run an Idea to Concept sprint for: [your challenge here]
```

Example:
```
Read ~/skills/idea-to-concept/SKILL.md then run an Idea to Concept sprint for: How might we help elderly people feel less lonely through technology?
```

Claude Code will:
1. Read the skill
2. Ask you up to 2 clarifying questions
3. Fill in all the content
4. Run the template
5. Save the PPTX to your Desktop

---

## Want it in Hebrew?

Add "in Hebrew" to your request:

```
Read ~/skills/idea-to-concept/SKILL.md then run an Idea to Concept sprint in Hebrew for: [האתגר שלך]
```

---

## Requirements

- Claude Code installed
- Node.js installed
- npm install run once (see Setup above)

---

*Created by Zohar Urian*
