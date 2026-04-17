# AGENTS.md

## Mission

Refactor the Bento AIII website into a premium, Apple-inspired company website.

The site must feel:
- calm
- precise
- premium
- restrained
- spacious
- modern
- highly readable
- structurally confident

The site must NOT feel:
- tactical
- terminal-like
- simulated operating system UI
- architecture console
- dashboard-like
- over-framed
- visually theatrical
- crypto/AI hype styled

The target is the same mother design language as the RyanTeo website:
Apple-inspired web design language, adapted for a company site.

This does NOT mean cloning the RyanTeo site.
This means aligning Bento AIII to the same visual philosophy and quality bar.

---

## Direction Lock

Permanent visual target:

- Apple-inspired web presentation
- premium company website
- typography-led hierarchy
- generous whitespace
- restrained surfaces
- neutral-first palette
- subtle depth
- refined interaction
- web-native patterns
- high readability
- calmer, lighter composition

Never drift toward:
- tactical UI
- system-interface theater
- shell bars
- telemetry visuals
- terminal UI metaphors
- command-center framing
- dashboard composition
- gimmicky futurism
- glow-heavy AI aesthetic

---

## Core Principles

### 1. Company website first
This is a company website, not a simulated system console.

The site should communicate:
- credibility
- clarity
- product maturity
- technical confidence
- design discipline

Avoid presenting the company as a fictional control surface or command dashboard.

---

### 2. Web-native, not fake OS
The site should be Apple-inspired on the web.
It must not imitate:
- fake system shells
- fake terminal interfaces
- fake iOS chrome
- fake app frames
- command-center theatrics

Correct reference:
- Apple.com
- premium product/company presentation pages
- calm, editorial, product-led web design

Wrong reference:
- console UI
- dashboard UI
- terminal-themed branding
- sci-fi system shell aesthetics

---

### 3. Typography leads
Typography is a primary design tool.

Use:
- strong headline hierarchy
- disciplined subheads
- readable body copy
- controlled line lengths
- clean paragraph rhythm
- clear alignment

Avoid:
- decorative “system” typography cues
- noisy all-caps labeling everywhere
- overly dense module labeling
- weak hierarchy hidden under styling

---

### 4. Spacing creates the premium feel
Use:
- generous section spacing
- consistent layout containers
- calm internal padding
- clean vertical rhythm
- intentional negative space

Avoid:
- visually cramped modules
- excessive compartmentalization
- every section looking like a framed control box
- too many chips, bars, strips, and decorative wrappers

---

### 5. Surfaces must be restrained
Use:
- subtle tonal separation
- light surface hierarchy
- minimal elegant borders where useful
- soft shadows only where helpful
- calm depth

Avoid:
- shell bars
- terminal strips
- tactical cards
- thick or dominant framing
- theatrical panel borders
- console-inspired component wrappers
- heavy dark overlays as identity

---

### 6. Color must be controlled
Use:
- neutral-first color palette
- restrained accent color
- color in service of hierarchy and emphasis

Avoid:
- excessive dark futurism
- neon/glow behavior
- loud gradients
- over-stylized “AI company” palettes
- color used to compensate for poor structure

---

### 7. Motion is quiet
Use:
- subtle hover feedback
- restrained transitions
- smooth but calm state changes

Avoid:
- flashy reveal effects
- cinematic over-animation
- floating gimmicks
- movement that makes the site feel like a control center

---

## Navigation Rules

The header must feel:
- stable
- premium
- light
- company-appropriate
- easy to scan

Use:
- clear information hierarchy
- restrained hover behavior
- subtle sticky behavior if needed
- spacing and typography to define navigation quality

Avoid:
- shell bars
- command strips
- telemetry chips
- tactical labels
- boxed nav theatrics

---

## Footer Rules

The footer must feel:
- clean
- quiet
- premium
- intentional

Avoid:
- terminal strip treatment
- dashboard ending
- console framing
- visually noisy status language

Footer should end the site with confidence, not theatrics.

---

## Section Rules

Each section must have a clear role.

Examples:
- Hero should feel like a company introduction
- Company overview should feel editorial and credible
- Projects should feel like selected work or product capabilities
- Team should feel clear and premium
- Contact should feel direct and structured

Avoid making every section look like the same dark tactical module.

Different sections can share one system without becoming clones.

---

## Bento-Specific Content Framing

Bento AIII should be presented as:
- technically credible
- design-aware
- product-oriented
- systems-minded
- premium
- serious
- forward-looking

But it must not be presented through fake console theatrics.

The brand should feel:
- thoughtful
- advanced
- disciplined
- clear

Not:
- performatively futuristic
- UI-costumed
- visually overacted

---

## Repo-Specific Refactor Lock

The following patterns are considered legacy direction and should generally be removed or heavily redesigned:

- system-shell-bar
- system-shell-chip
- terminal-panel
- terminal-strip
- system-rail
- boxed-section when used as dominant repeated visual framing
- overly tactical chips and labels
- grid / scanline / telemetry background treatments
- command-surface styling
- dark console identity as default page shell

These patterns conflict with the target direction.

Do not preserve them unless there is a strong functional reason, and even then they must be visually transformed into calmer, premium, web-native patterns.

---

## Technical Rules

- Preserve the Next.js architecture
- Keep code modular and maintainable
- Refactor existing files directly where reasonable
- Avoid unnecessary rewrites
- Avoid unnecessary dependency additions
- Preserve accessibility
- Preserve responsive quality
- Keep the final implementation buildable
- Prefer clarity over cleverness

---

## Styling Rules

When editing global styles:
- reduce tactical styling
- reduce dark-shell dominance
- reduce framing noise
- improve spacing rhythm
- strengthen typography hierarchy
- simplify background treatment
- create calmer and lighter surfaces
- make the site feel premium instead of theatrical

When editing shared components:
- remove system-console metaphors
- remove shell/chip/strip theatrics
- let layout, spacing, and type do more of the work
- keep interactions complete but restrained

---

## Output Rules

For any meaningful refactor, always provide:

1. Brief audit
2. Updated file tree
3. Full contents of all modified files
4. Verification steps

Do not provide pseudo-code.
Do not provide vague design advice without implementation.
Do not omit modified file contents.

---

## Sprint Discipline

Each sprint must have one main objective.

Do not widen scope.
Do not mix unrelated redesign ideas into a focused sprint.
Do not quietly reintroduce tactical/system-interface patterns.

Current migration order:
1. Design-system reset
2. Header/footer/shared shell cleanup
3. Homepage hero and major section refactor
4. Rework project/team/contact presentation
5. Final polish and consistency pass

Follow that order unless explicitly instructed otherwise.