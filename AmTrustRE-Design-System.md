# AmTrustRE Design System

AmTrustRE is a national real estate owner, operator, and investor — a multi-billion-dollar
portfolio of roughly 12 million square feet across 10+ major U.S. markets, built over a
30+ year legacy. The firm buys well-located assets from distressed sellers at a low basis,
repositions them through value-add capital work, and runs them with an in-house team that
spans acquisition, development, asset management, leasing, and property management. That
vertical integration is the positioning: *"driving growth through vertical integration and
value-add execution."*

The brand line is **Making Everyday Places Extraordinary**.

## Sources this system was built from

| Source | What it gave us |
|---|---|
| `uploads/AmTrustRE_Brand_Overview (Revised).pdf` (15 pp., January 2026) | The authoritative brand definition: logo rules, five-colour palette with hex values, typography spec, positioning copy, portfolio imagery, a 260 Madison Avenue case study, and the marketing-cycle / KPI frameworks. Also the deck template these sample slides copy. |
| https://www.amtrustre.com (read 18 August 2026) | Live corporate site — Webflow. Page structure, navigation, real portfolio and newsroom records, leadership roster, and all site copy used in the UI kit. Pages read: `/`, `/portfolio`, `/our-company`. |
| Property microsites referenced by the site | 260mad.com, 250broadway.com, 59maidenlane.com, 360lexingtonave.com, theamberlybk.com, 203jay.com, oneewacker.com, 33northdearborn.com, parklinechicago.com. **Not read** — out of scope, and each carries its own sub-brand. |

No codebase, Figma file, or font binaries were supplied. The Webflow CDN assets (hero
video, site photography, studio portraits) could not be downloaded from this environment,
so every image in this system was extracted from the brand PDF.

### Products / surfaces represented
1. **The corporate website** (amtrustre.com) — the one live digital product. Recreated in `ui_kits/website/`.
2. **Presentation decks** — the brand overview deck itself. Sample slide types in `slides/`.
3. **Property sub-brands** — each asset gets its own identity, logo, palette and website
   (e.g. 260 Madison Avenue: mark, tagline *"Bringing Legacy to Light"*, and an
   ink/stone/taupe/ivory/amber palette drawn from building finishes). These are
   *deliberately separate* from the AmTrustRE parent brand. `assets/logo-260mad.png` and
   `assets/moodboard-260mad.png` are kept as reference for how a sub-brand is derived; do
   not mix a sub-brand palette into parent-brand work.

---

## Content fundamentals

**Voice.** Institutional, plain, and declarative. AmTrustRE describes what it does and
where, then stops. There is no hype vocabulary, no superlative stacking, no future-tense
promising. The register is that of an investment memo written to be read by brokers,
tenants, and capital partners.

**Person.** Almost always **first-person plural** — "we acquire", "our portfolio", "our
in-house leasing team". Second person appears only in direct CTAs ("Reach out to
AmTrustRE…" is the site's actual phrasing, notably avoiding "you"). Never "I". The company
refers to itself as **AmTrustRE** (one word, capital A, T, RE) in prose; "AmTrust RE" with
a space appears in a few places on the live site but the closed form is preferred.

**Sentence shape.** One idea, one sentence, often a compound built with a semicolon:

> "From start to finish, our development team determines the needs of each submarket; they
> work through entitlements, deploy capital strategically, and manage the intricacies of
> each project until completion."

Lists of three are the house rhythm — "commercial and residential properties in the
nation's key urban centers"; "reimagined entries, state-of-the-art amenities, and custom
build-outs"; "leasing, investment, and strategic partnership opportunities."

**Headlines** are short noun phrases, sentence-cased with title-case capitals:
*Featured Properties*, *What Sets Us Apart*, *Our Positioning*, *Get in Touch*,
*Managing Every Step on the Way to Success*. Verbs appear as gerunds — *Making*,
*Managing*, *Capitalizing on*, *Bringing*. Alliteration is used deliberately and sparingly
(*Bringing Legacy to Light*).

**Casing.** Three registers only:
- Title Case for headlines and section labels
- ALL CAPS with wide tracking for eyebrows, nav, meta, spec lines, and buttons
- Sentence case for body copy

**Numbers.** Rounded and abbreviated in display positions (12M+, 39K SF, 30+), exact with
thousands separators in spec lines (570,000 SQ FT; 1,073,000 SQ. FT). Dates in the
newsroom are dot-separated: 05.21.2026. Square-footage units are set uppercase, sometimes
with periods ("SQ. FT"), sometimes without ("SQ FT") — the live site is inconsistent; pick
one per artefact.

**Spec lines** on property cards are prefixed with an en dash: `– 570,000 SQ FT`.

**No emoji. No exclamation marks** except in the two Webflow form-state strings ("Thank
you! Your submission has been received!"). No em-dash asides in body copy. No questions,
except one in the KPI table.

**Vibe.** Confident understatement. Buildings and numbers carry the story; the writing gets
out of the way. When in doubt, cut an adjective.

**Placeholder convention.** The supplied deck uses literal `COMING SOON.` and `XXXX` for
content not yet produced. Follow that convention rather than inventing filler.

---

## Visual foundations

**Palette.** Five colours, no more. Deep Blue `#285780` is *the* brand colour; Sky Blue
`#A4C8E1` is the second prominent colour and the source of all surface tints; Midnight
`#101820` is the dark counterpoint used in footers, announcement strips, and text;
Charcoal Gray `#425563` is body copy and rules; Gold `#CBA052` is an accent only —
ordinals, eyebrow kickers, active underlines, stat suffixes, one CTA at most per screen.
Gold is never a large field. Ramps in `tokens/colors.css` are interpolations of these five,
not new hues.

**Type.** A serif/sans pair carrying the brand's two claims. **Dashiell Fine** (serif) for
every headline — "representing our corporate legacy and proven track record." **Inter
Regular** (sans) for all body copy — "representing forward-thinking & modern innovation."
Headlines run at weight 400 with `-0.02em` tracking and 1.04 line-height; they are never
bold and never all-caps. Body copy runs 1.62 line-height at 17px. The only all-caps type
is Inter at 12–13px with 0.16em tracking.

**Backgrounds.** Predominantly **white**, with three treatments:
1. Faint blue architectural plates — mist skylines, blueprint linework, and a pale wave
   graphic (`assets/bg-*.png`) sitting at very low contrast behind light sections.
2. Full-bleed photography and renderings, always under a protection gradient.
3. Solid Midnight bands for the footer, the announcement strip, and pull-quotes.

Never a gradient as decoration for its own sake; never a coloured gradient mesh. At most
two background colours per deck or page: white plus Midnight.

**Imagery.** Cool, blue-leaning, daylight architecture. Two families: (a) real photography
and photoreal renderings of the assets — grey/brown façades, blue sky, slight
desaturation; (b) blue linework and watercolour-wash illustrations of generic towers, used
where a specific building would over-claim. Portraits are 3:4, desaturated ~10% at rest,
full saturation on hover. No warm filters, no grain, no duotone.

**Layout.** A 1360px max container with a fluid gutter (`clamp(20px, 5vw, 72px)`). Vertical
section rhythm is generous — 128px standard, 80px compressed. Card grids are three across
with a 32px gutter; photo mosaics run edge-to-edge with a 2px hairline gutter. The header
is sticky at 84px; the announcement strip sits above it at 44px. Nothing else is fixed.
Text measures cap at ~46ch for body and ~18–20ch for headlines.

**Corners.** Square. `--radius-card` and `--radius-image` are both `0`. Radius exists only
for form inputs (2px) and pills (999px, used for nothing at present).

**Borders and rules.** A 1px hairline at `rgba(66,85,99,.14)` is the workhorse — it opens
every capability column, closes every news card, and separates the footer's legal row.
Rules do the structural work that shadows do in softer systems.

**Shadows.** Restrained and cool-tinted, never neutral grey and never large-radius glow.
Five steps from a 1px hairline ring to a 64px overlay drop. Cards on white use *no* shadow
at all — they are defined by their photograph and their type.

**Protection gradients, not capsules.** White type over imagery always sits on a scrim:
`--scrim-bottom` for captions on a photo, `--scrim-full` for centred hero copy,
`--scrim-left` for a left-aligned lockup. Type is never placed on a bare photograph, and
never inside a translucent rounded capsule.

**Transparency and blur.** Sparingly. The over-hero navigation is transparent with a 2px
backdrop blur and a 22%-white bottom hairline. On Midnight, secondary text is white at 72%
and muted text at 56%. Tag chips over imagery use white at 14%. No frosted-glass panels.

**Animation.** Fades and slow scale, nothing else. No bounce, no spring, no elastic. Four
durations: 140ms for colour and border on hover, 240ms for filters and small transforms,
420ms for image scale, 720ms for scroll-in reveals (opacity 0→1 plus a 16px rise). Easing
is `cubic-bezier(.16,1,.3,1)` out or `cubic-bezier(.22,.61,.36,1)` standard. The site's
hero and contact band run looping architectural video; motion in the *content* stays quiet
so the video carries the energy.

**Hover states.** Photography scales to 1.04 behind a fixed frame; the accompanying serif
title shifts from Midnight to Deep Blue; underlines are already present and stay present.
Primary buttons darken (Deep Blue → `#1E4262`). Outline buttons invert to a Midnight fill
with white text. Ghost links darken to Midnight. Nothing lightens on hover and nothing
changes opacity.

**Press states.** Primary buttons darken one more step to `#16314A`. No shrink, no
translate — the brand does not bounce.

---

## Iconography

**There is no icon system in the supplied sources, and none has been invented.**

The brand PDF and the live site are typographic and photographic. Structure is carried by
numerals, hairline rules, uppercase labels, and the en-dash prefix on spec lines — not by
glyphs. The only recurring non-photographic graphic device is the **forward chevron
cluster** from the logo (`assets/mark-chevrons.png`), which the brand rules allow as a
decorative accent — a list marker, a slide corner, a divider — but never as a standalone
identity, and never separated from the wordmark in a lockup.

What is and is not in use:
- **Icon font / sprite:** none.
- **SVG icon set:** none. The site's only SVG is a white logo file.
- **PNG icons:** none.
- **Emoji:** never.
- **Unicode as icon:** yes, two characters only — the en dash `–` prefixing property spec
  lines, and `▾` as the disclosure caret on the portfolio filter dropdowns.
- **Social links** are set as words ("LinkedIn", "Instagram"), not glyphs.

If a future surface genuinely needs icons (a tenant portal, a data dashboard), the closest
CDN match to this brand's line quality is **Lucide** at 1.5px stroke, square caps, no
fills — but that would be a *new* decision, not a documented one. Flag it with the brand
team before shipping. Do not hand-roll SVG icons in AmTrustRE work.

---

## Font substitution — action needed

**Dashiell Fine is a licensed retail typeface (Sharp Type) and no web font files were
supplied.** `tokens/fonts.css` currently loads **Playfair Display** from Google Fonts as
the nearest freely available high-contrast serif and lists Dashiell Fine ahead of it in the
`--font-display` stack, so licensed files will take over automatically once installed.

Playfair Display is close in contrast and proportion but is *not* Dashiell Fine — its
terminals are softer and its italic is far more decorative. Please send the licensed
`.woff2` files and we will swap them in and delete the Google Fonts import.

Inter is exact — it is on Google Fonts and requires no substitution.

The logo wordmark is custom lettering, not a typeface. Always use the supplied raster
lockups in `assets/`.

---

## Index

### Root
| File | What it is |
|---|---|
| `readme.md` | This document — brand context, content fundamentals, visual foundations, iconography, index. |
| `SKILL.md` | Agent-skill front matter, for use in Claude Code. |
| `styles.css` | The single entry point consumers link. Nothing but `@import` lines. |
| `thumbnail.html` | Homepage tile for this design system. |

### `tokens/`
`fonts.css` (Google Fonts import + substitution note) · `colors.css` (brand palette, ramps,
semantic aliases) · `typography.css` (families, display + body scales, tracking, weights) ·
`spacing.css` (4px base, section rhythm, grid gutters) · `radius.css` · `elevation.css`
(shadows, scrims, washes) · `motion.css` (durations, easings, transitions) · `layout.css`
(container widths, gutters, nav height, aspect ratios, z-index) · `base.css` (element
resets, link colours).

### `assets/`
Logos — `logo-color.png`, `logo-white.png`, `logo-black.png`, `mark-chevrons.png`,
`mark-chevrons-white.png`. Background plates — `bg-wave-blue.png`,
`bg-skyline-mist.png`, `bg-skyline-linework.png`. Illustrations —
`illus-tower-blueprint.png`, `illus-tower-watercolor.png`. Renderings —
`render-260mad-hero.png`, `render-260mad-lobby.png`. Property photography —
`property-260-madison.png`, `property-01.png` … `property-09.png`. Sub-brand reference —
`logo-260mad.png`, `moodboard-260mad.png`.

All extracted from the supplied brand PDF. `property-01`…`property-09` are the nine assets
in the deck's portfolio mosaic; the deck does not caption them individually, so they are
numbered rather than named — **do not assert that a numbered file is a specific building.**

### Components

Grouped by concern under `components/`. The inventory follows what the live site and the
brand deck actually define — nothing more.

**`components/brand/`** — `Logo`, `Eyebrow`, `SectionHeading`, `StatCounter`, `PullQuote`
**`components/core/`** — `Button`, `Tag`, `FilterSelect`, `Field`
**`components/cards/`** — `PropertyCard`, `NewsCard`, `TeamCard`, `CapabilityItem`
**`components/navigation/`** — `AnnouncementBar`, `NavBar`, `Hero`, `ContactBand`, `Footer`

Each directory carries a `@dsCard` HTML showing its variants and states. Each component has
a sibling `.d.ts` props contract and a `.prompt.md` with a usage example.

**Intentional additions** (present in the sources as patterns, formalised here as
components rather than found as named library entries):
- `CapabilityItem` — the site repeats this block across "What Sets Us Apart" and
  "Managing Every Step on the Way to Success"; naming it prevents it being rebuilt each time.
- `Field` — the contact form exists on the live site but its markup is Webflow-generated,
  so the styling here is derived from the filter control rather than copied.

### `guidelines/`
23 foundation specimen cards feeding the Design System tab, grouped **Colors** (brand
palette, hierarchy, Deep Blue ramp, Sky Blue ramp, charcoal neutrals, gold in use, on-dark
text values), **Type** (display serif, heading steps, body copy, eyebrow + meta, pairing in
use), **Spacing** (scale, section rhythm, radii, shadows, protection gradients, motion),
and **Brand** (logo lockups, forward chevrons, imagery, background plates, links and hover
states).

### `ui_kits/website/`
Click-through recreation of amtrustre.com: `index.html` plus `HomeScreen.jsx`,
`PortfolioScreen.jsx`, `CompanyScreen.jsx`, `NewsScreen.jsx`, `ContactScreen.jsx`,
`Shared.jsx`, and `data.js` (real portfolio, newsroom, values, capabilities, and leadership
records). Navigation, portfolio filtering, and the contact form all work. See its own
`README.md` for the substitutions it makes.

### `templates/`
Starting points consuming projects can copy:
- `templates/website-page/WebsitePage.dc.html` — a full amtrustre.com page shell (announcement strip, nav, hero, stat band, property grid, contact band, footer) composed from this system's components.
- `templates/brand-deck/BrandDeck.dc.html` — five 1280×720 slides in the brand-deck style (title, agenda, three-up, stat band, closing).

Each folder carries a `ds-base.js` that loads `styles.css` and the compiled bundle; point its `base` line at the bound `_ds/<folder>` tree in a consuming project.

### `slides/`
Ten sample slide types at 1280×720 copying the brand deck's construction: `TitleSlide`,
`AgendaSlide`, `ThreeUpSlide`, `StatBandSlide`, `PortfolioGridSlide`, `CaseStudySlide`,
`PaletteSlide`, `TypographySlide`, `MetricsSlide`, `ClosingSlide`.


---

# Appendix A — Token CSS (verbatim)

## `styles.css`

```css
@import url("tokens/fonts.css");
@import url("tokens/colors.css");
@import url("tokens/typography.css");
@import url("tokens/spacing.css");
@import url("tokens/radius.css");
@import url("tokens/elevation.css");
@import url("tokens/motion.css");
@import url("tokens/layout.css");
@import url("tokens/base.css");
```

## `tokens/fonts.css`

```css
/* Headline serif — brand spec is Dashiell Fine (Sharp Type, licensed).
   SUBSTITUTION: Playfair Display from Google Fonts stands in until the licensed
   Dashiell Fine web files are supplied. Swap the @import + --font-display below. */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap");

/* Logo wordmark is lettering, not a licensed typeface — always use assets/logo-*.png */
```

## `tokens/colors.css`

```css
:root{
  /* ---- Brand palette (AmTrustRE Brand Overview, Jan 2026) ---- */
  --midnight:#101820;
  --deep-blue:#285780;
  --sky-blue:#A4C8E1;
  --charcoal-gray:#425563;
  --gold:#CBA052;

  /* ---- Ramps derived from the five brand colours ---- */
  --midnight-900:#0A0F14;
  --midnight-800:#101820;
  --midnight-700:#1A252F;

  --deep-blue-900:#16314A;
  --deep-blue-800:#1E4262;
  --deep-blue-700:#285780;
  --deep-blue-500:#3C7099;
  --deep-blue-300:#7BA6C6;

  --sky-blue-500:#A4C8E1;
  --sky-blue-300:#C4DCEC;
  --sky-blue-200:#DCEAF4;
  --sky-blue-100:#EDF4FA;
  --sky-blue-050:#F6FAFD;

  --charcoal-700:#2E3D48;
  --charcoal-600:#364755;
  --charcoal-500:#425563;
  --charcoal-400:#6B7B88;
  --charcoal-300:#96A3AD;
  --charcoal-200:#C3CBD2;
  --charcoal-100:#E2E7EA;

  --gold-700:#9E7B3A;
  --gold-600:#B08840;
  --gold-500:#CBA052;
  --gold-300:#E0C68F;
  --gold-200:#F1E6CE;

  --white:#FFFFFF;
  --paper:#FFFFFF;
  --paper-tint:#F7FAFC;

  /* ---- Semantic: text ---- */
  --text-primary:var(--midnight);
  --text-secondary:var(--charcoal-500);
  --text-muted:var(--charcoal-400);
  --text-accent:var(--deep-blue);
  --text-inverse:var(--white);
  --text-inverse-secondary:rgba(255,255,255,.72);
  --text-on-dark-muted:rgba(255,255,255,.56);
  --text-eyebrow:var(--deep-blue);
  --text-link:var(--deep-blue);
  --text-link-hover:var(--midnight);

  /* ---- Semantic: surfaces ---- */
  --surface-page:var(--white);
  --surface-card:var(--white);
  --surface-muted:var(--paper-tint);
  --surface-tint:var(--sky-blue-100);
  --surface-brand:var(--deep-blue);
  --surface-dark:var(--midnight);
  --surface-accent:var(--gold);
  --surface-scrim:rgba(16,24,32,.58);
  --surface-glass:rgba(255,255,255,.08);

  /* ---- Semantic: borders + rules ---- */
  --border-subtle:rgba(66,85,99,.14);
  --border-default:rgba(66,85,99,.24);
  --border-strong:var(--charcoal-500);
  --border-inverse:rgba(255,255,255,.22);
  --rule-accent:var(--gold);

  /* ---- Semantic: interaction ---- */
  --action-primary-bg:var(--deep-blue);
  --action-primary-bg-hover:var(--deep-blue-800);
  --action-primary-bg-active:var(--deep-blue-900);
  --action-primary-fg:var(--white);
  --action-secondary-fg:var(--midnight);
  --action-secondary-border:var(--charcoal-500);
  --action-secondary-bg-hover:var(--midnight);
  --action-ghost-fg:var(--deep-blue);
  --focus-ring:var(--gold);

  /* ---- Data / status (site "in the news" + KPI table) ---- */
  --status-featured-bg:var(--gold);
  --status-featured-fg:var(--midnight);
  --status-positive:#3E7A5E;
  --status-attention:var(--gold-600);
}
```

## `tokens/typography.css`

```css
:root{
  --font-display:"Playfair Display","Dashiell Fine",Georgia,"Times New Roman",serif;
  --font-body:"Inter","Helvetica Neue",Arial,sans-serif;
  --font-mono:ui-monospace,"SFMono-Regular",Menlo,monospace;

  /* Display / headline scale — serif, tight, never lighter than 400 */
  --text-display-1:clamp(3.5rem,7vw,6rem);   /* 56 → 96  hero */
  --text-display-2:clamp(2.75rem,5vw,4rem);  /* 44 → 64  page title */
  --text-display-3:2.5rem;                   /* 40       section heading */
  --text-display-4:1.75rem;                  /* 28       card / sub heading */
  --text-display-5:1.375rem;                 /* 22       small serif heading */

  /* Body scale — Inter */
  --text-lead:1.25rem;    /* 20  standfirst paragraph */
  --text-body:1.0625rem;  /* 17  default body */
  --text-body-sm:0.9375rem; /* 15 */
  --text-caption:0.8125rem; /* 13 meta, dates, sq ft */
  --text-eyebrow-size:0.75rem; /* 12 uppercase label */

  /* Stat numerals */
  --text-stat:clamp(3rem,5vw,4.5rem);

  --leading-tight:1.04;
  --leading-snug:1.18;
  --leading-normal:1.5;
  --leading-relaxed:1.62;

  --tracking-display:-0.02em;
  --tracking-normal:0em;
  --tracking-wide:0.06em;
  --tracking-eyebrow:0.16em;
  --tracking-caps:0.1em;

  --weight-light:300;
  --weight-regular:400;
  --weight-medium:500;
  --weight-semibold:600;
  --weight-bold:700;
}
```

## `tokens/spacing.css`

```css
:root{
  /* 4px base; the brand's editorial layouts lean on the large end */
  --space-0:0;
  --space-1:4px;
  --space-2:8px;
  --space-3:12px;
  --space-4:16px;
  --space-5:20px;
  --space-6:24px;
  --space-8:32px;
  --space-10:40px;
  --space-12:48px;
  --space-16:64px;
  --space-20:80px;
  --space-24:96px;
  --space-32:128px;
  --space-40:160px;

  --gap-grid:24px;         /* card grid gutter */
  --gap-grid-tight:2px;    /* portfolio mosaic hairline gutter */
  --section-y:var(--space-32);
  --section-y-sm:var(--space-20);
  --stack-text:var(--space-4);
}
```

## `tokens/radius.css`

```css
:root{
  /* The brand is square. Radius exists only for pills and photo cards. */
  --radius-none:0;
  --radius-xs:2px;
  --radius-sm:4px;
  --radius-md:6px;
  --radius-pill:999px;
  --radius-card:var(--radius-none);
  --radius-image:var(--radius-none);
  --radius-input:var(--radius-xs);
}
```

## `tokens/elevation.css`

```css
:root{
  /* Shadows are restrained and cool-tinted; borders do most of the work */
  --shadow-none:none;
  --shadow-hairline:0 0 0 1px var(--border-subtle);
  --shadow-sm:0 1px 2px rgba(16,24,32,.06);
  --shadow-card:0 8px 24px -12px rgba(16,24,32,.18);
  --shadow-raised:0 18px 40px -18px rgba(16,24,32,.28);
  --shadow-overlay:0 28px 64px -24px rgba(16,24,32,.42);
  --shadow-inset-top:inset 0 1px 0 rgba(255,255,255,.06);

  /* Protection gradients for text over photography / video */
  --scrim-bottom:linear-gradient(to top,rgba(16,24,32,.82) 0%,rgba(16,24,32,.45) 42%,rgba(16,24,32,0) 100%); /* @kind other */
  --scrim-full:linear-gradient(to bottom,rgba(16,24,32,.55),rgba(16,24,32,.72)); /* @kind other */
  --scrim-left:linear-gradient(to right,rgba(16,24,32,.78) 0%,rgba(16,24,32,0) 62%); /* @kind other */
  --wash-sky:linear-gradient(180deg,var(--sky-blue-050) 0%,var(--white) 100%); /* @kind other */
}
```

## `tokens/motion.css`

```css
:root{
  --ease-standard:cubic-bezier(.22,.61,.36,1); /* @kind other */
  --ease-out:cubic-bezier(.16,1,.3,1); /* @kind other */
  --ease-in-out:cubic-bezier(.65,0,.35,1); /* @kind other */
  --duration-fast:140ms; /* @kind other */
  --duration-base:240ms; /* @kind other */
  --duration-slow:420ms; /* @kind other */
  --duration-reveal:720ms; /* @kind other */
  --transition-color:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard); /* @kind other */
  --transition-transform:transform var(--duration-slow) var(--ease-out); /* @kind other */
  --hover-image-scale:1.04; /* @kind other */
}
```

## `tokens/layout.css`

```css
:root{
  --container-max:1360px;
  --container-narrow:760px;
  --container-wide:1600px;
  --gutter:clamp(20px,5vw,72px); /* @kind spacing */
  --nav-height:84px;
  --announcement-height:44px;
  --hero-min-height:88vh;
  --ratio-property:4 / 3; /* @kind other */
  --ratio-news:16 / 9; /* @kind other */
  --ratio-portrait:3 / 4; /* @kind other */
  --z-base:0; /* @kind other */
  --z-raised:10; /* @kind other */
  --z-nav:100; /* @kind other */
  --z-overlay:1000; /* @kind other */
}
```

## `tokens/base.css`

```css
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:var(--surface-page);color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-body);line-height:var(--leading-relaxed);-webkit-font-smoothing:antialiased;text-wrap:pretty}
h1,h2,h3,h4,h5{font-family:var(--font-display);font-weight:var(--weight-regular);letter-spacing:var(--tracking-display);line-height:var(--leading-tight);margin:0}
p{margin:0}
img{display:block;max-width:100%}
a{color:var(--text-link);text-decoration:none;transition:var(--transition-color)}
a:hover{color:var(--text-link-hover)}
:focus-visible{outline:2px solid var(--focus-ring);outline-offset:3px}
::selection{background:var(--sky-blue-300);color:var(--midnight)}
```


---

# Appendix B — Components

Each component is a self-contained React function. Props contracts are the `.d.ts` interfaces; usage guidance is the `.prompt.md` first line.

## Brand — `components/brand/`

### Logo

One-line: renders the AmTrustRE lockup from the licensed raster assets — use it anywhere a brand mark belongs, never a hand-drawn substitute.

```jsx
<Logo variant="white" height={28} assetBase="../../assets" />
```

Variants: `color` (default, preferred), `white` (only when full colour is impossible), `black`, `mark` / `mark-white` (the forward chevrons alone — permitted as a decorative accent, e.g. a bullet or divider, but not as a standalone identity).

**Props**

```ts
export type LogoVariant = 'color' | 'white' | 'black' | 'mark' | 'mark-white';

/**
 * The AmTrustRE lockup, rendered from the supplied raster assets.
 *
 * Rules from the brand overview: prefer the full-colour logo; use all-white only
 * when full colour is impossible; never isolate the wordmark from the chevrons;
 * always size it prominently.
 *
 */
export interface LogoProps {
  /** Which supplied file to render. Default 'color'. */
  variant?: LogoVariant;
  /** Rendered height in px. Width follows. Default 32. */
  height?: number;
  /** Path prefix to the assets folder. Default '/assets'. */
  assetBase?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

const VARIANT_SRC = {
  color: 'logo-color.png',
  white: 'logo-white.png',
  black: 'logo-black.png',
  mark: 'mark-chevrons.png',
  'mark-white': 'mark-chevrons-white.png',
};

/** Brand lockup. Never separate the wordmark from the forward chevrons. */
export function Logo({ variant = 'color', height = 32, assetBase = '/assets', alt = 'AmTrustRE', style, ...rest }) {
  const src = `${assetBase}/${VARIANT_SRC[variant] || VARIANT_SRC.color}`;
  return <img src={src} alt={alt} style={{ height, width: 'auto', display: 'block', ...style }} {...rest} />;
}
```

</details>

### Eyebrow

One-line: the uppercase kicker above every section heading.

```jsx
<Eyebrow>Portfolio</Eyebrow>
<SectionHeading>Featured Properties</SectionHeading>
```

Tones: accent (deep blue), muted, inverse (over photography), gold.

**Props**

```ts
/**
 * Uppercase, wide-tracked label that introduces a section ("PORTFOLIO", "CORE VALUES").
 * Always paired with a serif heading directly beneath it.
 */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** 'accent' deep blue (default), 'muted' charcoal, 'inverse' on dark, 'gold'. */
  tone?: 'accent' | 'muted' | 'inverse' | 'gold';
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Small uppercase label that sits above a serif section heading. */
export function Eyebrow({ children, tone = 'accent', as: Tag = 'span', style, ...rest }) {
  const color = tone === 'inverse' ? 'var(--text-inverse-secondary)'
    : tone === 'muted' ? 'var(--text-muted)'
    : tone === 'gold' ? 'var(--gold)'
    : 'var(--text-eyebrow)';
  return (
    <Tag style={{ display: 'block', font: `var(--weight-medium) var(--text-eyebrow-size)/1.4 var(--font-body)`, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color, ...style }} {...rest}>{children}</Tag>
  );
}
```

</details>

### SectionHeading

One-line: the standard section header — eyebrow, serif headline, optional link on the right.

```jsx
<SectionHeading eyebrow="Newsroom" action={<Button variant="ghost">Read All News</Button>}>
  AmTrustRE in the News
</SectionHeading>
```

Sizes: hero (landing), page (interior page title), section (default), sub.

**Props**

```ts
/**
 * Section header block: optional eyebrow, serif headline, optional right-aligned action.
 */
export interface SectionHeadingProps {
  children?: React.ReactNode;
  /** Uppercase kicker above the headline. */
  eyebrow?: string;
  /** Type scale step. Default 'section'. */
  size?: 'hero' | 'page' | 'section' | 'sub';
  tone?: 'default' | 'inverse';
  /** Rendered at the far right, baseline-aligned — typically a text link. */
  action?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

const SIZES = {
  hero: 'var(--text-display-1)',
  page: 'var(--text-display-2)',
  section: 'var(--text-display-3)',
  sub: 'var(--text-display-4)',
};

/** Serif heading, optionally with an eyebrow and a trailing action slot. */
export function SectionHeading({ children, eyebrow, size = 'section', tone = 'default', action, as: Tag = 'h2', align = 'left', style }) {
  const color = tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)';
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', textAlign: align }}>
        {eyebrow ? <Eyebrow tone={tone === 'inverse' ? 'inverse' : 'accent'}>{eyebrow}</Eyebrow> : null}
        <Tag style={{ fontSize: SIZES[size], color, maxWidth: '20ch', ...style }}>{children}</Tag>
      </div>
      {action ? <div style={{ paddingBottom: 'var(--space-2)' }}>{action}</div> : null}
    </div>
  );
}
```

</details>

### StatCounter

One-line: the hero stat band figures — always in a row of three, drawn from the real portfolio numbers.

```jsx
<StatCounter value="12" suffix="M+" label="Square feet" />
```

Real values in use: 12M+ square feet, 10+ major markets, 30+ year legacy.

**Props**

```ts
/**
 * A single portfolio proof-point: "12 M+ / Square feet".
 * Used in threes across the landing hero band.
 */
export interface StatCounterProps {
  /** The numeral, as a string or number. */
  value: string | number;
  /** Small gold suffix — 'M+', '+', '%'. */
  suffix?: string;
  /** Uppercase caption beneath. */
  label: string;
  tone?: 'default' | 'inverse';
  align?: 'left' | 'center';
}
export function StatCounter(props: StatCounterProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Large serif numeral + suffix over a small uppercase label. */
export function StatCounter({ value, suffix = '', label, tone = 'default', align = 'left' }) {
  const fg = tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = tone === 'inverse' ? 'var(--text-inverse-secondary)' : 'var(--text-muted)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: align === 'center' ? 'center' : 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', color: fg, fontFamily: 'var(--font-display)', fontSize: 'var(--text-stat)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)' }}>
        <span>{value}</span>
        {suffix ? <span style={{ fontSize: '.45em', paddingTop: '.35em', color: 'var(--gold)' }}>{suffix}</span> : null}
      </div>
      <span style={{ font: `var(--weight-medium) var(--text-eyebrow-size)/1.4 var(--font-body)`, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: sub }}>{label}</span>
    </div>
  );
}
```

</details>

### PullQuote

One-line: the president's quote block — serif quotation, portrait at 3:4, uppercase role.

```jsx
<PullQuote
  quote={'"At AmTrustRE, our focus is on acquiring well-located assets and reinventing them…"'}
  name="Jonathan Bennett" title="President" image="../../assets/property-01.png" />
```

Set `tone="inverse"` (default) when it sits on midnight or over video.

**Props**

```ts
/**
 * Leadership pull-quote with portrait, as used on the landing page over the dark band.
 */
export interface PullQuoteProps {
  quote: React.ReactNode;
  name: string;
  /** Role, rendered uppercase. */
  title: string;
  /** Portrait image URL. Omit for a text-only quote. */
  image?: string;
  tone?: 'default' | 'inverse';
}
export function PullQuote(props: PullQuoteProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Leadership quote: portrait beside a serif quotation with attribution. */
export function PullQuote({ quote, name, title, image, tone = 'inverse' }) {
  const fg = tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)';
  const sub = tone === 'inverse' ? 'var(--text-inverse-secondary)' : 'var(--text-muted)';
  return (
    <figure style={{ margin: 0, display: 'grid', gridTemplateColumns: image ? 'minmax(200px,1fr) 1.6fr' : '1fr', gap: 'var(--space-16)', alignItems: 'center' }}>
      {image ? <img src={image} alt={name} style={{ width: '100%', aspectRatio: 'var(--ratio-portrait)', objectFit: 'cover', filter: 'saturate(.92)' }} /> : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-4)', lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-display)', color: fg }}>{quote}</blockquote>
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          <span style={{ color: fg, fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-body-sm)' }}>{name}</span>
          <span style={{ color: sub, fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase' }}>{title}</span>
        </figcaption>
      </div>
    </figure>
  );
}
```

</details>

## Core — `components/core/`

### Button

One-line: every action on the site — square, uppercase, tracked.

```jsx
<Button variant="primary" size="lg" href="/contact">Contact Us</Button>
<Button variant="ghost">Read More</Button>
```

Never round the corners. Use `onDark` for outline/ghost over the video hero or the midnight band. Gold is reserved for one accent action per screen at most.

**Props**

```ts
/**
 * The brand's call to action. Square corners, uppercase label, wide tracking.
 * 'ghost' is the underlined text link used for "Read More" / "Read All News".
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = deep blue fill, outline = hairline, ghost = underlined text, gold = accent. */
  variant?: 'primary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Inverts outline/ghost colours for placement over photography or midnight. */
  onDark?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

const SIZES = {
  sm: { padding: '10px 18px', fontSize: 'var(--text-caption)' },
  md: { padding: '15px 28px', fontSize: 'var(--text-body-sm)' },
  lg: { padding: '19px 36px', fontSize: 'var(--text-body)' },
};

/** Squared brand button. Primary = deep blue fill; outline and ghost for secondary paths. */
export function Button({ children, variant = 'primary', size = 'md', href, onDark = false, disabled, style, ...rest }) {
  const base = {
    ...SIZES[size],
    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
    fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
    borderRadius: 'var(--radius-none)', border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
    transition: 'var(--transition-color)', textDecoration: 'none', lineHeight: 1,
  };
  const skins = {
    primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' },
    outline: { background: 'transparent', color: onDark ? 'var(--text-inverse)' : 'var(--action-secondary-fg)', borderColor: onDark ? 'var(--border-inverse)' : 'var(--action-secondary-border)' },
    ghost: { background: 'transparent', color: onDark ? 'var(--text-inverse)' : 'var(--action-ghost-fg)', padding: 0, borderBottom: '1px solid currentColor', paddingBottom: 4 },
    gold: { background: 'var(--surface-accent)', color: 'var(--midnight)' },
  };
  const hover = {
    primary: { background: 'var(--action-primary-bg-hover)' },
    outline: onDark ? { background: 'var(--white)', color: 'var(--midnight)', borderColor: 'var(--white)' } : { background: 'var(--action-secondary-bg-hover)', color: 'var(--text-inverse)', borderColor: 'var(--action-secondary-bg-hover)' },
    ghost: { color: onDark ? 'var(--sky-blue)' : 'var(--text-link-hover)' },
    gold: { background: 'var(--gold-600)' },
  };
  const [h, setH] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ ...base, ...skins[variant], ...(h && !disabled ? hover[variant] : null), ...style }} {...rest}>
      {children}
    </Tag>
  );
}
```

</details>

### Tag

One-line: category and state chips — asset class ("Office", "Luxury Residential"), state ("New York", "Illinois"), or a gold "Featured" flag.

```jsx
<Tag>New York</Tag>
<Tag tone="featured">Featured</Tag>
```

Square corners, uppercase, 12px. Never use them as buttons.

**Props**

```ts
/**
 * Small uppercase chip: asset class, state, or a "Featured" flag.
 */
export interface TagProps {
  children?: React.ReactNode;
  /** default hairline, solid sky tint, inverse over imagery, featured gold. */
  tone?: 'default' | 'solid' | 'inverse' | 'featured';
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Category / location chip used on portfolio and news cards. */
export function Tag({ children, tone = 'default', style }) {
  const skins = {
    default: { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' },
    solid: { background: 'var(--sky-blue-100)', color: 'var(--deep-blue-800)', border: '1px solid transparent' },
    inverse: { background: 'rgba(255,255,255,.14)', color: 'var(--text-inverse)', border: '1px solid var(--border-inverse)' },
    featured: { background: 'var(--status-featured-bg)', color: 'var(--status-featured-fg)', border: '1px solid transparent' },
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 10px', fontSize: 'var(--text-eyebrow-size)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', lineHeight: 1.3, ...skins[tone], ...style }}>{children}</span>
  );
}
```

</details>

### FilterSelect

One-line: the portfolio filter dropdown — uppercase label, hairline trigger, square panel.

```jsx
<FilterSelect label="Category" options={['Office','Luxury Residential','Mixed-use']} value={cat} onChange={setCat} />
```

The live site pairs two of these (Category, Location) with a "Clear Search" ghost button.

**Props**

```ts
/**
 * The portfolio page's category / location filter.
 */
export interface FilterSelectProps {
  /** Uppercase label above the control ("Category", "Location"). */
  label: string;
  options?: string[];
  /** Empty string means "no filter". */
  value?: string;
  onChange?: (value: string) => void;
  /** Reset row label. Default 'All'. */
  placeholder?: string;
}
export function FilterSelect(props: FilterSelectProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Portfolio filter dropdown: label, hairline trigger, square panel. */
export function FilterSelect({ label, options = [], value, onChange, placeholder = 'All' }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 220, position: 'relative' }}>
      <span style={{ font: `var(--weight-medium) var(--text-eyebrow-size)/1.4 var(--font-body)`, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
      <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', padding: '13px 16px', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-input)', font: `var(--weight-regular) var(--text-body-sm)/1 var(--font-body)`, color: value ? 'var(--text-primary)' : 'var(--text-muted)', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
        <span>{value || placeholder}</span>
        <span style={{ fontSize: 10, color: 'var(--deep-blue)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-fast) var(--ease-standard)' }}>▾</span>
      </button>
      {open ? (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--surface-card)', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-raised)', zIndex: 'var(--z-overlay)' }}>
          {[placeholder, ...options].map((o) => (
            <button key={o} onClick={() => { onChange && onChange(o === placeholder ? '' : o); setOpen(false); }}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', background: 'transparent', border: 0, borderBottom: '1px solid var(--border-subtle)', font: `var(--weight-regular) var(--text-body-sm)/1.4 var(--font-body)`, color: 'var(--text-primary)', cursor: 'pointer' }}>{o}</button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
```

</details>

### Field

One-line: the contact-form input — uppercase label above a 1px hairline box, gold asterisk for required.

```jsx
<Field label="Full name" required />
<Field label="Message" rows={5} />
```

**Props**

```ts
/**
 * Text input or textarea with the brand's uppercase field label.
 */
export interface FieldProps {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  /** Any value renders a <textarea> of that many rows. */
  rows?: number;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export function Field(props: FieldProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Labelled text input / textarea for the contact form. */
export function Field({ label, name, type = 'text', placeholder, rows, required, value, onChange }) {
  const control = {
    width: '100%', padding: '14px 16px', background: 'var(--surface-card)',
    border: '1px solid var(--border-default)', borderRadius: 'var(--radius-input)',
    font: `var(--weight-regular) var(--text-body-sm)/1.5 var(--font-body)`, color: 'var(--text-primary)',
    outlineOffset: 3, resize: rows ? 'vertical' : undefined,
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span style={{ font: `var(--weight-medium) var(--text-eyebrow-size)/1.4 var(--font-body)`, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        {label}{required ? <span style={{ color: 'var(--gold)' }}> *</span> : null}
      </span>
      {rows
        ? <textarea name={name} rows={rows} placeholder={placeholder} value={value} onChange={onChange} style={control} />
        : <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} style={control} />}
    </label>
  );
}
```

</details>

## Cards — `components/cards/`

### PropertyCard

One-line: the portfolio tile used on the landing "Featured Properties" grid and the portfolio index.

```jsx
<PropertyCard
  name="260 Madison Avenue"
  image="../../assets/property-260-madison.png"
  specs={['570,000 SQ FT','Grand Central, Manhattan','Office']}
  tags={['New York','Office']} />
```

Copy convention: spec lines are uppercase and prefixed with an en dash on the site. Image scales 1.04 on hover; the name shifts to deep blue.

**Props**

```ts
/**
 * A portfolio asset tile. Photography is the content; type sits beneath it (stacked)
 * or over a bottom protection gradient (overlay).
 */
export interface PropertyCardProps {
  name: string;
  image: string;
  /** Spec lines rendered uppercase, dash-prefixed: square footage, submarket, asset class. */
  specs?: string[];
  /** Category / location chips. */
  tags?: string[];
  href?: string;
  /** 'stacked' = caption below image (default). 'overlay' = caption on the image. */
  layout?: 'stacked' | 'overlay';
}
export function PropertyCard(props: PropertyCardProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';
import { Tag } from '../core/Tag.jsx';

/** Portfolio tile: photograph, name, and dash-prefixed spec lines. */
export function PropertyCard({ name, image, specs = [], tags = [], href, layout = 'stacked' }) {
  const [h, setH] = React.useState(false);
  const overlay = layout === 'overlay';
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'block', position: 'relative', textDecoration: 'none', color: 'inherit', background: overlay ? 'var(--surface-dark)' : 'transparent' }}>
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: 'var(--ratio-property)', background: 'var(--sky-blue-100)' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: h ? `scale(var(--hover-image-scale))` : 'scale(1)', transition: 'var(--transition-transform)' }} />
        {tags.length && overlay ? (
          <div style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', display: 'flex', gap: 'var(--space-2)' }}>
            {tags.map((t) => <Tag key={t} tone="inverse">{t}</Tag>)}
          </div>
        ) : null}
        {overlay ? <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} /> : null}
        {overlay ? (
          <div style={{ position: 'absolute', left: 'var(--space-6)', right: 'var(--space-6)', bottom: 'var(--space-6)' }}>
            <h3 style={{ fontSize: 'var(--text-display-4)', color: 'var(--text-inverse)' }}>{name}</h3>
            <div style={{ marginTop: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {specs.map((s) => <span key={s} style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-inverse-secondary)' }}>{s}</span>)}
            </div>
          </div>
        ) : null}
      </div>
      {!overlay ? (
        <div style={{ paddingTop: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {tags.length ? <div style={{ display: 'flex', gap: 'var(--space-2)' }}>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div> : null}
          <h3 style={{ fontSize: 'var(--text-display-5)', color: h ? 'var(--deep-blue)' : 'var(--text-primary)', transition: 'var(--transition-color)' }}>{name}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {specs.map((s) => <span key={s} style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>– {s}</span>)}
          </div>
        </div>
      ) : null}
    </a>
  );
}
```

</details>

### NewsCard

One-line: the "AmTrustRE in the News" item.

```jsx
<NewsCard outlet="Commercial Observer" date="05.21.2026" featured
  headline="Marcus & Millichap Expands to 41K SF at AmTrustRE's 260 Madison Avenue"
  excerpt="Marcus & Millichap is expanding and extending at AmTrustRE's 260 Madison Avenue in Midtown."
  image="../../assets/property-260-madison.png" />
```

Dates always use the dot format. Every card ends in an underlined "Read More".

**Props**

```ts
/**
 * A newsroom item. Outlet and date form one uppercase meta line; the headline is serif.
 */
export interface NewsCardProps {
  /** Publication name, e.g. "Commercial Observer". */
  outlet: string;
  /** Site format is dot-separated: "05.21.2026". */
  date: string;
  headline: string;
  excerpt?: string;
  image?: string;
  href?: string;
  /** Adds the gold "Featured" flag over the image. */
  featured?: boolean;
}
export function NewsCard(props: NewsCardProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';
import { Tag } from '../core/Tag.jsx';

/** Press item: outlet, dot-separated date, headline, optional standfirst. */
export function NewsCard({ outlet, date, headline, excerpt, image, href, featured = false }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', textDecoration: 'none', color: 'inherit', paddingBottom: 'var(--space-6)', borderBottom: '1px solid var(--border-subtle)' }}>
      {image ? (
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: 'var(--ratio-news)', background: 'var(--sky-blue-100)' }}>
          <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(var(--hover-image-scale))' : 'scale(1)', transition: 'var(--transition-transform)' }} />
          {featured ? <div style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)' }}><Tag tone="featured">Featured</Tag></div> : null}
        </div>
      ) : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <span style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{outlet}, {date}</span>
        <h3 style={{ fontSize: 'var(--text-display-5)', lineHeight: 'var(--leading-snug)', color: h ? 'var(--deep-blue)' : 'var(--text-primary)', transition: 'var(--transition-color)' }}>{headline}</h3>
        {excerpt ? <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>{excerpt}</p> : null}
        <span style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--deep-blue)', borderBottom: '1px solid currentColor', alignSelf: 'flex-start', paddingBottom: 3 }}>Read More</span>
      </div>
    </a>
  );
}
```

</details>

### TeamCard

One-line: the Leadership grid card on Our Company.

```jsx
<TeamCard name="Anne Holker" role="Managing Director of Leasing" image="../../assets/property-05.png" />
```

Portraits are 3:4, slightly desaturated at rest and full-saturation on hover.

**Props**

```ts
/**
 * Leadership grid entry: 3:4 headshot, serif name, uppercase role.
 */
export interface TeamCardProps {
  name: string;
  /** Title, rendered uppercase — "Chief Financial Officer". */
  role: string;
  image: string;
  href?: string;
}
export function TeamCard(props: TeamCardProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Leadership headshot with name and role. */
export function TeamCard({ name, role, image, href }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', textDecoration: 'none', color: 'inherit' }}>
      <div style={{ overflow: 'hidden', aspectRatio: 'var(--ratio-portrait)', background: 'var(--sky-blue-100)' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: h ? 'saturate(1)' : 'saturate(.9)', transform: h ? 'scale(var(--hover-image-scale))' : 'scale(1)', transition: 'var(--transition-transform), filter var(--duration-base) var(--ease-standard)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        <h3 style={{ fontSize: 'var(--text-display-5)', color: h ? 'var(--deep-blue)' : 'var(--text-primary)', transition: 'var(--transition-color)' }}>{name}</h3>
        <span style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{role}</span>
      </div>
    </a>
  );
}
```

</details>

### CapabilityItem

One-line: the repeated column block behind "What Sets Us Apart" and "Managing Every Step on the Way to Success".

```jsx
<CapabilityItem index={1} title="Integration">
  From asset acquisition to property management, our full control over the process enables us to maximize returns.
</CapabilityItem>
```

Use three across for values, five across (or 3+2) for capabilities. `marker="chevron"` swaps the ordinal for the brand mark.

**Props**

```ts
/**
 * One entry in a values / capabilities column set ("Integration", "Acquisition", "Leasing").
 * A top hairline rule, an optional gold ordinal or chevron marker, serif heading, then copy.
 */
export interface CapabilityItemProps {
  /** 1-based ordinal, rendered zero-padded in gold. */
  index?: number;
  title: string;
  children?: React.ReactNode;
  /** 'number' (default), 'chevron' for the brand mark, or 'none'. */
  marker?: 'number' | 'chevron' | 'none';
  tone?: 'default' | 'inverse';
  /** Asset folder path, needed when marker='chevron'. */
  assetBase?: string;
}
export function CapabilityItem(props: CapabilityItemProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Numbered or chevron-marked capability entry: serif heading + explanatory copy. */
export function CapabilityItem({ index, title, children, marker = 'number', tone = 'default', assetBase = '/assets' }) {
  const fg = tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)';
  const body = tone === 'inverse' ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', paddingTop: 'var(--space-6)', borderTop: `1px solid ${tone === 'inverse' ? 'var(--border-inverse)' : 'var(--border-default)'}` }}>
      {marker === 'number' && index != null ? (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--gold)' }}>{String(index).padStart(2, '0')}</span>
      ) : null}
      {marker === 'chevron' ? <img src={`${assetBase}/mark-chevrons.png`} alt="" style={{ height: 16, width: 'auto' }} /> : null}
      <h3 style={{ fontSize: 'var(--text-display-4)', color: fg }}>{title}</h3>
      <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', color: body, maxWidth: '46ch' }}>{children}</p>
    </div>
  );
}
```

</details>

## Navigation — `components/navigation/`

### AnnouncementBar

One-line: the midnight announcement strip that sits above the nav on every page.

```jsx
<AnnouncementBar href="#">AmTrustRE leases 39K SF at 250 Broadway.</AnnouncementBar>
```

One announcement at a time. Keep the sentence to a single clause and end it with a period.

**Props**

```ts
/**
 * The site's top announcement strip: gold uppercase label, the news line, an underlined CTA.
 */
export interface AnnouncementBarProps {
  /** Gold kicker. Default 'Leasing Announcement'. */
  label?: string;
  children?: React.ReactNode;
  href?: string;
  cta?: string;
}
export function AnnouncementBar(props: AnnouncementBarProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Thin midnight strip above the nav carrying one leasing or press announcement. */
export function AnnouncementBar({ label = 'Leasing Announcement', children, href, cta = 'Read More' }) {
  return (
    <a href={href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', height: 'var(--announcement-height)', padding: '0 var(--gutter)', background: 'var(--surface-dark)', color: 'var(--text-inverse)', textDecoration: 'none', fontSize: 'var(--text-caption)' }}>
      <span style={{ fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--gold)' }}>{label}</span>
      <span style={{ color: 'var(--text-inverse-secondary)' }}>{children}</span>
      <span style={{ letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', borderBottom: '1px solid currentColor', paddingBottom: 2 }}>{cta}</span>
    </a>
  );
}
```

</details>

### NavBar

One-line: the four-link site header.

```jsx
<NavBar active="Portfolio" tone="light" assetBase="../../assets" onNavigate={setPage} />
```

Nav labels are single words, uppercase, 12px, tracked 0.16em. Use `tone="dark"` only where the header floats over the hero video or a full-bleed photo.

**Props**

```ts
/**
 * The site header: logo left, four uppercase links right, gold underline on the active item.
 */
export interface NavBarProps {
  /** Defaults to Portfolio / Company / News / Contact. */
  links?: string[];
  /** Label of the current page. */
  active?: string;
  onNavigate?: (label: string) => void;
  /** 'light' solid white (default) or 'dark' transparent over the hero video. */
  tone?: 'light' | 'dark';
  assetBase?: string;
}
export function NavBar(props: NavBarProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';
import { Logo } from '../brand/Logo.jsx';

const LINKS = ['Portfolio', 'Company', 'News', 'Contact'];

/** Site header. Transparent over the video hero; solid white once scrolled or on interior pages. */
export function NavBar({ links = LINKS, active, onNavigate, tone = 'light', assetBase = '/assets' }) {
  const inverse = tone === 'dark';
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 'var(--z-nav)', height: 'var(--nav-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--gutter)', background: inverse ? 'transparent' : 'var(--surface-page)', borderBottom: inverse ? '1px solid var(--border-inverse)' : '1px solid var(--border-subtle)', backdropFilter: inverse ? 'blur(2px)' : undefined }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('Home'); }} style={{ display: 'flex' }}>
        <Logo variant={inverse ? 'white' : 'color'} height={30} assetBase={assetBase} />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)' }}>
        {links.map((l) => {
          const on = l === active;
          return (
            <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l); }}
              style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: inverse ? (on ? 'var(--white)' : 'var(--text-inverse-secondary)') : (on ? 'var(--deep-blue)' : 'var(--text-primary)'), paddingBottom: 5, borderBottom: on ? `1px solid ${inverse ? 'var(--gold)' : 'var(--gold)'}` : '1px solid transparent', transition: 'var(--transition-color)' }}>{l}</a>
          );
        })}
      </nav>
    </header>
  );
}
```

</details>

### Hero

One-line: the full-bleed page opener.

```jsx
<Hero title="Making Everyday Places Extraordinary" media="../../assets/render-260mad-hero.png" />
```

The landing headline is set on two lines with a wide word gap ("Making Everyday  Places Extraordinary"). Interior pages use the single-word form: `<Hero title="Portfolio" align="center" scrim="full" />`.

**Props**

```ts
/**
 * Full-bleed hero. The landing page runs a looping video behind it; interior pages use a still.
 */
export interface HeroProps {
  title: React.ReactNode;
  /** Background image or video poster. */
  media?: string;
  /** Gold uppercase kicker above the headline. */
  kicker?: string;
  /** Rendered under the headline — stat band, announcement, or a button. */
  children?: React.ReactNode;
  height?: string;
  /** 'bottom' (default) or 'center'. */
  align?: 'bottom' | 'center';
  /** Which protection gradient to lay over the media. */
  scrim?: 'bottom' | 'full' | 'left';
}
export function Hero(props: HeroProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';

/** Full-bleed page hero. Serif headline over media with a protection scrim. */
export function Hero({ title, media, kicker, children, height = 'var(--hero-min-height)', align = 'bottom', scrim = 'bottom' }) {
  const scrims = { bottom: 'var(--scrim-bottom)', full: 'var(--scrim-full)', left: 'var(--scrim-left)' };
  return (
    <section style={{ position: 'relative', minHeight: height, display: 'flex', alignItems: align === 'center' ? 'center' : 'flex-end', overflow: 'hidden', background: 'var(--surface-dark)' }}>
      {media ? <img src={media} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
      <div style={{ position: 'absolute', inset: 0, background: scrims[scrim] }} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-24) var(--gutter)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', textAlign: align === 'center' ? 'center' : 'left', alignItems: align === 'center' ? 'center' : 'flex-start' }}>
        {kicker ? <span style={{ fontSize: 'var(--text-eyebrow-size)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--gold)' }}>{kicker}</span> : null}
        <h1 style={{ fontSize: 'var(--text-display-1)', color: 'var(--text-inverse)', maxWidth: '18ch' }}>{title}</h1>
        {children}
      </div>
    </section>
  );
}
```

</details>

### ContactBand

One-line: the centred closing CTA over full-bleed media.

```jsx
<ContactBand media="../../assets/render-260mad-lobby.png" onCta={() => setPage('Contact')} />
```

Defaults match the live site copy exactly. Always keep the full-frame scrim — never set white type directly on the photograph.

**Props**

```ts
/**
 * The "Get in Touch" band that precedes the footer on every page.
 * On the live site the backdrop is a looping architectural video; pass a still via `media`.
 */
export interface ContactBandProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  cta?: string;
  href?: string;
  /** Background image (or video poster) URL. */
  media?: string;
  onCta?: (e: React.MouseEvent) => void;
}
export function ContactBand(props: ContactBandProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';
import { Eyebrow } from '../brand/Eyebrow.jsx';
import { Button } from '../core/Button.jsx';

/** Full-bleed closing CTA over media, with a full-frame protection scrim. */
export function ContactBand({ eyebrow = 'Contact', heading = 'Get in Touch', body = 'Reach out to AmTrustRE to discuss leasing, investment, and strategic partnership opportunities.', cta = 'Contact Us', href, media, onCta }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-dark)', padding: 'var(--space-32) var(--gutter)' }}>
      {media ? <img src={media} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .55 }} /> : null}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-full)' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-narrow)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-6)' }}>
        <Eyebrow tone="gold">{eyebrow}</Eyebrow>
        <h2 style={{ fontSize: 'var(--text-display-2)', color: 'var(--text-inverse)' }}>{heading}</h2>
        <p style={{ fontSize: 'var(--text-lead)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-inverse-secondary)' }}>{body}</p>
        <div style={{ marginTop: 'var(--space-4)' }}>
          <Button variant="outline" size="lg" onDark href={href} onClick={onCta}>{cta}</Button>
        </div>
      </div>
    </section>
  );
}
```

</details>

### Footer

One-line: the midnight footer that closes every page.

```jsx
<Footer assetBase="../../assets" onNavigate={setPage} />
```

Always the all-white logo here. The blurb default is the live site's copy — keep it verbatim unless the brief says otherwise.

**Props**

```ts
/**
 * The midnight site footer.
 */
export interface FooterProps {
  links?: string[];
  /** Positioning paragraph. Defaults to the live site's wording. */
  blurb?: string;
  assetBase?: string;
  onNavigate?: (label: string) => void;
}
export function Footer(props: FooterProps): JSX.Element;
```

<details><summary>Implementation</summary>

```jsx
import React from 'react';
import { Logo } from '../brand/Logo.jsx';

/** Midnight footer: logo, positioning paragraph, nav column, social, legal row. */
export function Footer({ links = ['Portfolio', 'Company', 'News', 'Contact'], blurb = 'AmTrustRE is a leading national real estate investment owner and operating firm, managing a multi-billion-dollar portfolio with headquarters in major cities including New York City and Chicago.', assetBase = '/assets', onNavigate }) {
  const link = { fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-inverse-secondary)', textDecoration: 'none' };
  return (
    <footer style={{ background: 'var(--surface-dark)', color: 'var(--text-inverse)', padding: 'var(--space-20) var(--gutter) var(--space-8)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(280px,1.4fr) 1fr 1fr', gap: 'var(--space-16)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <Logo variant="white" height={28} assetBase={assetBase} />
          <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-inverse-secondary)', maxWidth: '44ch' }}>{blurb}</p>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {links.map((l) => <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l); }} style={link}>{l}</a>)}
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <span style={{ fontSize: 'var(--text-eyebrow-size)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--gold)' }}>Follow Us</span>
          <a href="https://www.linkedin.com/company/amtrust-re/" style={link}>LinkedIn</a>
          <a href="https://www.instagram.com/amtrustre" style={link}>Instagram</a>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: 'var(--space-16) auto 0', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-inverse)', display: 'flex', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-on-dark-muted)' }}>© 2026 AmTrustRE. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
          <a href="#" style={{ ...link, textTransform: 'none', letterSpacing: 0 }}>Privacy Policy</a>
          <a href="#" style={{ ...link, textTransform: 'none', letterSpacing: 0 }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
```

</details>


---

# Appendix C — Reference data

Real portfolio, newsroom, values, capabilities and leadership records copied from amtrustre.com, as shipped in `ui_kits/website/data.js`.

```js
window.SITE_DATA = {
  properties: [
    { name: '59 Maiden Lane', sqft: '1,073,000 SQ. FT', sub: 'Financial District, Manhattan', city: 'New York, NY', state: 'New York', type: 'Office', image: '../../assets/property-01.png', site: 'https://www.59maidenlane.com/' },
    { name: '250 Broadway', sqft: '648,000 SQ. FT', sub: 'Tribeca, Manhattan', city: 'New York, NY', state: 'New York', type: 'Office', image: '../../assets/property-02.png', site: 'https://www.250broadway.com' },
    { name: '260 Madison Avenue', sqft: '570,000 SQ FT', sub: 'Grand Central, Manhattan', city: 'New York, NY', state: 'New York', type: 'Office', image: '../../assets/property-260-madison.png', site: 'https://260mad.com/' },
    { name: '360 Lexington', sqft: '267,641 SQ. FT', sub: 'Grand Central, Manhattan', city: 'New York, NY', state: 'New York', type: 'Office', image: '../../assets/property-03.png', site: 'https://360lexingtonave.com/' },
    { name: 'The Amberly', sqft: '312,093 SQ. FT', sub: 'Dumbo, Brooklyn', city: 'Brooklyn, NY', state: 'New York', type: 'Luxury Residential', image: '../../assets/property-08.png', site: 'https://theamberlybk.com/' },
    { name: '203 Jay Street', sqft: '72,000 SQ. FT', sub: 'Dumbo, Brooklyn', city: 'Brooklyn, NY', state: 'New York', type: 'Office', image: '../../assets/property-04.png', site: 'https://203jay.com' },
    { name: '1 East Wacker', sqft: '', sub: 'Chicago, IL', city: 'Chicago, IL', state: 'Illinois', type: 'Office', image: '../../assets/property-05.png', site: 'https://oneewacker.com' },
    { name: '33 North Dearborn', sqft: '', sub: 'Chicago, IL', city: 'Chicago, IL', state: 'Illinois', type: 'Office', image: '../../assets/property-06.png', site: 'https://33northdearborn.com' },
    { name: 'Parkline Chicago', sqft: '', sub: 'Chicago, IL', city: 'Chicago, IL', state: 'Illinois', type: 'Luxury Residential', image: '../../assets/property-07.png', site: 'https://parklinechicago.com' },
    { name: '135 South LaSalle', sqft: '', sub: 'Residential Conversion', city: 'Chicago, IL - Residential Conversion', state: 'Illinois', type: 'Luxury Residential', image: '../../assets/property-09.png', site: '#' },
    { name: 'One SeaGate', sqft: '', sub: 'Toledo, OH', city: 'Toledo, OH', state: 'Ohio', type: 'Office', image: '../../assets/property-02.png', site: '#' },
    { name: 'One Illinois Center', sqft: '', sub: 'Chicago, IL', city: 'Chicago, IL', state: 'Illinois', type: 'Office', image: '../../assets/property-06.png', site: '#' },
  ],
  news: [
    { outlet: 'Commercial Observer', date: '05.21.2026', featured: true, image: '../../assets/property-260-madison.png', headline: "Marcus & Millichap Expands to 41K SF at AmTrustRE's 260 Madison Avenue", excerpt: "Marcus & Millichap is expanding and extending at AmTrustRE's 260 Madison Avenue in Midtown." },
    { outlet: 'Commercial Observer', date: '07.30.2026', image: '../../assets/property-02.png', headline: "NYC Taxi and Limousine Commission Takes 39K SF at AmTrustRE's 250 Broadway" },
    { outlet: 'Connect CRE', date: '06.19.2026', image: '../../assets/property-05.png', headline: 'AmTrustRE Completes 95K SF of Leases at One East Wacker' },
    { outlet: "Crain's New York", date: '05.21.2026', image: '../../assets/property-01.png', headline: "Marcus & Millichap expands footprint at AmTrustRE's recently acquired office building" },
  ],
  values: [
    { title: 'Integration', body: 'From asset acquisition to property management, our full control over the process enables us to maximize returns.' },
    { title: 'Execution', body: 'Our experienced team and proven operating model empower us to act quickly and decisively.' },
    { title: 'Attention', body: 'We support our tenants with attentive and responsive management through every stage of occupancy.' },
  ],
  capabilities: [
    { title: 'Acquisition', body: 'Our investment team specializes in identifying buildings on the cusp of a new chapter with prominent addresses, abundant light and air, and proximity to transportation hubs.' },
    { title: 'Development', body: 'From start to finish, our development team determines the needs of each submarket; they work through entitlements, deploy capital strategically, and manage the intricacies of each project until completion.' },
    { title: 'Asset Management', body: 'Our asset management team is adept at executing strategic capital improvements that maximize returns. They collaborate across acquisitions, construction, and property management to execute a successful business plan and enhance long-term value.' },
    { title: 'Leasing', body: 'Our in-house leasing team collaborates with tenants, brokers, legal counsel, and property managers to create a seamless experience for future tenants from first tour to final delivery.' },
    { title: 'Property Management', body: 'Our property managers deliver an ideal tenant experience by prioritizing an open line of communication and cultivating a tenant-first mentality.' },
  ],
  team: [
    { name: 'Stuart Axelrod', role: 'Chief Financial Officer' },
    { name: 'Karen Katsoff', role: 'Chief Accounting Officer' },
    { name: 'David Sheril', role: 'General Counsel' },
    { name: 'Anne Holker', role: 'Managing Director of Leasing' },
    { name: 'Patrick Kearney', role: 'Managing Director' },
    { name: 'Zev Caplan', role: 'Treasurer' },
    { name: 'Erik Tanner', role: 'Vice President, Operations and Engineering' },
    { name: 'Diane Yodice', role: 'Vice President, Property Accounting' },
  ],
};
```


---

# Appendix D — File manifest

- `.thumbnail`
- `SKILL.md`
- **assets/**
  - `bg-skyline-linework.png`
  - `bg-skyline-mist.png`
  - `bg-wave-blue.png`
  - `illus-tower-blueprint.png`
  - `illus-tower-watercolor.png`
  - `logo-260mad.png`
  - `logo-black.png`
  - `logo-color.png`
  - `logo-white.png`
  - `mark-chevrons-white.png`
  - `mark-chevrons.png`
  - `moodboard-260mad.png`
  - `property-01.png`
  - `property-02.png`
  - `property-03.png`
  - `property-04.png`
  - `property-05.png`
  - `property-06.png`
  - `property-07.png`
  - `property-08.png`
  - `property-09.png`
  - `property-260-madison.png`
  - `render-260mad-hero.png`
  - `render-260mad-lobby.png`
- **components/**
  - **brand/**
    - `Eyebrow.d.ts`
    - `Eyebrow.jsx`
    - `Eyebrow.prompt.md`
    - `Logo.d.ts`
    - `Logo.jsx`
    - `Logo.prompt.md`
    - `PullQuote.d.ts`
    - `PullQuote.jsx`
    - `PullQuote.prompt.md`
    - `SectionHeading.d.ts`
    - `SectionHeading.jsx`
    - `SectionHeading.prompt.md`
    - `StatCounter.d.ts`
    - `StatCounter.jsx`
    - `StatCounter.prompt.md`
    - `brand.card.html`
  - **cards/**
    - `CapabilityItem.d.ts`
    - `CapabilityItem.jsx`
    - `CapabilityItem.prompt.md`
    - `NewsCard.d.ts`
    - `NewsCard.jsx`
    - `NewsCard.prompt.md`
    - `PropertyCard.d.ts`
    - `PropertyCard.jsx`
    - `PropertyCard.prompt.md`
    - `TeamCard.d.ts`
    - `TeamCard.jsx`
    - `TeamCard.prompt.md`
    - `cards.card.html`
  - **core/**
    - `Button.d.ts`
    - `Button.jsx`
    - `Button.prompt.md`
    - `Field.d.ts`
    - `Field.jsx`
    - `Field.prompt.md`
    - `FilterSelect.d.ts`
    - `FilterSelect.jsx`
    - `FilterSelect.prompt.md`
    - `Tag.d.ts`
    - `Tag.jsx`
    - `Tag.prompt.md`
    - `core.card.html`
  - **navigation/**
    - `AnnouncementBar.d.ts`
    - `AnnouncementBar.jsx`
    - `AnnouncementBar.prompt.md`
    - `ContactBand.d.ts`
    - `ContactBand.jsx`
    - `ContactBand.prompt.md`
    - `Footer.d.ts`
    - `Footer.jsx`
    - `Footer.prompt.md`
    - `Hero.d.ts`
    - `Hero.jsx`
    - `Hero.prompt.md`
    - `NavBar.d.ts`
    - `NavBar.jsx`
    - `NavBar.prompt.md`
    - `navigation.card.html`
- **guidelines/**
  - `brand-backgrounds.html`
  - `brand-imagery.html`
  - `brand-links.html`
  - `brand-logo.html`
  - `brand-mark.html`
  - `colors-blue-ramp.html`
  - `colors-brand.html`
  - `colors-gold.html`
  - `colors-hierarchy.html`
  - `colors-neutrals.html`
  - `colors-on-dark.html`
  - `colors-sky-ramp.html`
  - `elevation.html`
  - `motion.html`
  - `radius.html`
  - `scrims.html`
  - `spacing-scale.html`
  - `spacing-section.html`
  - `type-body.html`
  - `type-display.html`
  - `type-eyebrow.html`
  - `type-headings.html`
  - `type-pairing.html`
- `readme.md`
- **slides/**
  - `AgendaSlide.html`
  - `CaseStudySlide.html`
  - `ClosingSlide.html`
  - `MetricsSlide.html`
  - `PaletteSlide.html`
  - `PortfolioGridSlide.html`
  - `StatBandSlide.html`
  - `ThreeUpSlide.html`
  - `TitleSlide.html`
  - `TypographySlide.html`
- `styles.css`
- **templates/**
  - **brand-deck/**
    - `.thumbnail`
    - `BrandDeck.dc.html`
    - `ds-base.js`
    - `support.js`
  - **website-page/**
    - `.thumbnail`
    - `WebsitePage.dc.html`
    - `ds-base.js`
    - `support.js`
- `thumbnail.html`
- **tokens/**
  - `base.css`
  - `colors.css`
  - `elevation.css`
  - `fonts.css`
  - `layout.css`
  - `motion.css`
  - `radius.css`
  - `spacing.css`
  - `typography.css`
- **ui_kits/**
  - **website/**
    - `CompanyScreen.jsx`
    - `ContactScreen.jsx`
    - `HomeScreen.jsx`
    - `NewsScreen.jsx`
    - `PortfolioScreen.jsx`
    - `README.md`
    - `Shared.jsx`
    - `data.js`
    - `index.html`


---

## Note on assets

This markdown export carries the system's rules, tokens, and component source. The binary assets (logos, background plates, illustrations, renderings, property photography) live in `assets/` and are not embeddable here — download the project folder alongside this document to keep them.
