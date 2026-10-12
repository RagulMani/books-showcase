---
version: alpha
name: Manuscript
description: A polished book discovery and community platform landing page with integrated login screens, designed for literary enthusiasts with warm, inviting typography and elegant restraint.
colors:
  background: "#FAFAF8"
  surface: "#FFFFFF"
  surface-secondary: "#F5F3F0"
  text-primary: "#1A1814"
  text-secondary: "#6B6360"
  accent: "#C41E3A"
  accent-light: "#E8D4D9"
  success: "#2D5016"
  error: "#D32F2F"
  border: "#E8E4E0"
typography:
  display:
    fontFamily: Georgia, serif
    fontSize: 3.5rem
    fontWeight: 400
    lineHeight: 1.1
  h1:
    fontFamily: Georgia, serif
    fontSize: 2.5rem
    fontWeight: 400
    lineHeight: 1.2
  h2:
    fontFamily: Georgia, serif
    fontSize: 1.875rem
    fontWeight: 400
    lineHeight: 1.3
  h3:
    fontFamily: Georgia, serif
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.4
  body-lg:
    fontFamily: '"Segoe UI", system-ui, sans-serif'
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: '"Segoe UI", system-ui, sans-serif'
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: '"Segoe UI", system-ui, sans-serif'
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: '"Segoe UI", system-ui, sans-serif'
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.3px
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
components:
  button:
    structure: "Inline-flex, center-aligned, minimum 44px height, padding {spacing.md} {spacing.lg}"
    states:
      default: "backgroundColor: {colors.accent}, color: white, fontWeight: 600, fontSize: {typography.body-md.fontSize}"
      hover: "backgroundColor: #A01830, transform: translateY(-1px), box-shadow: 0 4px 12px rgba(196, 30, 58, 0.2)"
      active: "backgroundColor: #8B1629, transform: translateY(0)"
      disabled: "backgroundColor: {colors.border}, color: {colors.text-secondary}, cursor: not-allowed, opacity: 0.6"
    secondary: "backgroundColor: transparent, border: 2px solid {colors.accent}, color: {colors.accent}"
    copy: "Sentence case, action-forward (e.g. 'Sign up to explore', 'Continue reading')"
  card:
    structure: "Block container, background: {colors.surface}, border: 1px solid {colors.border}, borderRadius: {rounded.lg}, padding: {spacing.lg}, margin-bottom: {spacing.lg}"
    states:
      hover: "borderColor: {colors.accent}, box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08), transform: translateY(-2px), transition: all 200ms ease"
    copy: "Body-md for description, body-sm for metadata (publication date, author)"
  input:
    structure: "Full-width, borderRadius: {rounded.md}, padding: {spacing.md}, fontSize: {typography.body-md.fontSize}, border: 1px solid {colors.border}, fontFamily: inherit"
    states:
      focus: "borderColor: {colors.accent}, outline: none, box-shadow: 0 0 0 3px {colors.accent-light}"
      error: "borderColor: {colors.error}, box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1)"
      disabled: "backgroundColor: {colors.surface-secondary}, color: {colors.text-secondary}, cursor: not-allowed"
    placeholder: "color: {colors.text-secondary}, fontStyle: italic"
  badge:
    structure: "Inline-block, borderRadius: {rounded.full}, padding: {spacing.xs} {spacing.md}, fontSize: {typography.body-sm.fontSize}, fontWeight: 600"
    category: "backgroundColor: {colors.accent-light}, color: {colors.accent}"
    featured: "backgroundColor: {colors.accent}, color: white"
  modal:
    structure: "Fixed overlay, backgroundColor: rgba(26, 24, 20, 0.5), flex center, max-width: 480px, borderRadius: {rounded.lg}, padding: {spacing.xxl}"
    animation: "fadeIn 200ms ease, scaleIn 200ms ease from 0.95"
  navbar:
    structure: "Fixed top, height: 64px, display: flex, align-items: center, justify-content: space-between, padding: 0 {spacing.lg}, background: {colors.surface}, border-bottom: 1px solid {colors.border}, z-index: 100"
    logo: "fontFamily: Georgia serif, fontSize: {typography.h3.fontSize}, fontWeight: 600, color: {colors.text-primary}"

## Overview

Manuscript is an elegant book discovery platform designed for readers, collectors, and literary communities. The design celebrates the warmth of book culture with serif typography that echoes the printed page, paired with a sophisticated red accent that signals passion and discovery. The palette is light and natural—cream backgrounds, soft surfaces, and restrained decoration—creating a calm, focused browsing experience. This is a landing page and authentication suite that introduces visitors to curated titles and featured collections before welcoming them into the community. The tone is inviting but refined: we respect the reader's intelligence and love of literature, never talking down or rushing the experience.

## Colors

**{colors.background}** (cream): The primary page background, used across all landing pages and open spaces. It's warm and paper-like, reducing eye fatigue during extended reading.

**{colors.surface}** (white): Cards, modals, input fields, and the navbar. Used where content sits in focus. Never apply this to body text.

**{colors.surface-secondary}** (warm off-white): Subtle section dividers, disabled input backgrounds, and secondary card states. Use sparingly to avoid visual noise.

**{colors.text-primary}** (charcoal): All body text, labels, headings. Essential for readability; never use lighter text on light backgrounds.

**{colors.text-secondary}** (taupe): Metadata, helper text, disabled states. Contrast ratio 4.5:1 against {colors.background}.

**{colors.accent}** (deep crimson red, #C41E3A): Call-to-action buttons, featured badges, link underlines, form focus rings, and hover states. Use for no more than 15% of the interface. Conveys urgency and discovery.

**{colors.accent-light}** (soft rose): Category badges, light backgrounds behind accent elements. Never use for text.

**{colors.success}** (forest green): Success messages, confirmation states, "sign-up complete" feedback.

**{colors.error}** (alert red): Form validation errors, destructive warnings. Contrast 4.5:1 against {colors.surface}.

**{colors.border}** (pale beige): All dividing lines, input borders, card outlines. Creates structure without heaviness.

**Contrast rule:** All text combinations must meet WCAG AA (4.5:1 for body text, 3:1 for large text). Primary text on background is 13.2:1. Accent text on white (buttons) is 6.8:1.

## Typography

**Georgia serif** (display, h1, h2, h3) is the voice of authority, heritage, and the written word. It appears in all headings and positions them as the narrative structure. Serif signals trust and literary depth.

**System sans-serif** (Segoe UI, fallback to system UI) handles body copy, labels, and interface chrome. It is neutral, efficient, and legible at small sizes. The contrast between serif heads and sans body creates visual clarity and rhythm.

**Casing rules:** 
- Headings are sentence case (capitalize only the first word and proper nouns). Example: "Discover your next favorite read."
- Labels and buttons are sentence case or short imperatives. Example: "Sign up," "Continue reading," "Forgot password?"
- Do not use ALL CAPS anywhere.

**Role assignment:**
- Use display (3.5rem) only for hero sections or very rare moments of emphasis. Use h1 (2.5rem) for page titles and major section headers.
- Use h2 (1.875rem) for subsection breaks (e.g., "Featured titles," "Browse by category").
- Use h3 (1.25rem) for card titles, category names, and tertiary headings.
- Use body-lg (1.0625rem) for introductory paragraphs, featured descriptions, and prominent call-outs.
- Use body-md (1rem) as the standard for card text, form copy, and navigation labels.
- Use body-sm (0.875rem) for helper text, metadata (publication date, author), badges, and secondary details.
- Use label (0.875rem, 600 weight) for form field labels, badge text, and UI controls.

**Pairing rationale:** Georgia serif conveys the authority and heritage of literature, while sans-serif brings calm clarity to interface tasks (form filling, authentication, navigation). The two families are intentionally distinct, preventing visual confusion. Serif at large sizes feels graceful; sans at small sizes remains legible.

## Layout

**Grid and max-width:** Use a 12-column responsive grid with max-content-width: 1200px. On mobile (< 768px), collapse to single-column or 2-column where appropriate. Tablet (768–1024px) is 8 columns; desktop (1024px+) is 12 columns.

**Gutters:** {spacing.lg} (24px) between columns on desktop; {spacing.md} (16px) on tablet; {spacing.sm} (8px) on mobile.

**Section rhythm:** Landing page sections are vertically separated by {spacing.xxl} (48px). Breathing room between featured titles, category showcases, and CTAs.

**Density:** Comfortable. Cards have {spacing.lg} padding; form fields have {spacing.md} vertical spacing between labels and inputs. Not cramped, not lavish.

**Signature layout moves:**
1. **Hero treatment:** Full-width hero section with large serif h1, subheading in body-lg, background color {colors.surface-secondary}, and a centered CTA button. Background may include a subtle gradient or image overlay (opacity 0.15), but never garish or distracting.
2. **Card grid for featured books:** 3-column grid on desktop (1-column mobile, 2 tablet), each card displaying book cover (image or placeholder), title (h3), author (body-sm), category badge (accent-light), and a "View details" or heart icon action.
3. **Modal for authentication:** Login/signup/forgot-password rendered in a centered modal overlay on the landing page. Max-width 480px, {spacing.xxl} padding, {colors.surface} background with {rounded.lg} corners. Close icon in top-right.

**Mobile-first progression:** Design first for 375px mobile, then enhance for tablet and desktop. Ensure legibility at all breakpoints; never stack content to reduce text size below 16px for body copy.

## Elevation & Depth

**Shadow system:**
- **Elevation 1 (cards at rest):** `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08)`
- **Elevation 2 (cards on hover, inputs in focus):** `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08)`
- **Elevation 3 (modals, dropdowns):** `box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12)`
- **Elevation 4 (sticky navbar on scroll):** `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06)`

**Three elevation levels exist:**
1. **Resting:** Minimal shadow or none (border only). Used for inactive cards, neutral surfaces.
2. **Interactive (hover/focus):** Elevation 2. Used for buttons, card hovers, input focus.
3. **Modal/overlay:** Elevation 3. Used for modals, popovers, dropdown menus.

**Motion:** Transitions are 200ms ease on hover/focus (e.g., `transition: all 200ms ease`). Buttons translate up 1px on hover, down on active. Cards translate up 2px on hover. Never bounce or overshoot; the tone is sophisticated and restrained.

**Dragging behavior:** Not applicable for initial launch (landing page + auth screens). If added later, dragging should feel smooth with a 150ms `easing(cubic-bezier(0.4, 0, 0.2, 1))` and shadow elevation to Elevation 3.

## Shapes

**Radius philosophy:** Shapes are minimal and orthogonal, reflecting bookish, editorial aesthetics.
- **{rounded.sm} (4px):** Subtle corners on small UI elements (badges, small buttons, or light visual separators). Nearly square.
- **{rounded.md} (8px):** Input fields, small cards, secondary buttons. Approachable but not rounded.
- **{rounded.lg} (12px):** Primary cards, modals, major containers. Generous enough to feel modern without losing formality.
- **{rounded.full} (9999px):** Badge pills only. Never use on buttons or large containers.

**Icon and stroke style:** Icons are outlined (stroke-based) at 2px weight, not filled. They should feel clean and linear, matching the serif typography's precision. Icons are {colors.text-primary} unless they are interactive (hover state: {colors.accent}, transition 200ms).

**Decorative shape language:** Avoid decorative shapes on the landing page. If a section divider is needed, use a thin horizontal line ({colors.border}, 1px, 100% width) rather than wavy borders or ornaments. Never add unnecessary geometric flourishes; let the typography and content hierarchy do the work.

**Forbidden:** Glassmorphism, drop-shadow effects on text, rounded corners above {rounded.lg} except badges, decorative blurs or gradients, icon fills.

## Components

**Button (Primary)**
- Structure: 44px minimum height, 24px horizontal padding, {rounded.md} corners, center-aligned text in 600 weight body-md. 
- Default: Background {colors.accent}, white text.
- Hover: Background #A01830 (darker red), translateY(-1px), shadow Elevation 2, cursor pointer.
- Active: Background #8B1629, translateY(0).
- Disabled: Background {colors.border}, text {colors.text-secondary}, opacity 0.6, cursor not-allowed.
- Copy: Sentence case, action-forward. "Sign up to explore," "Continue reading," "Discover now."

**Button (Secondary)**
- Structure: 44px minimum height, 24px horizontal padding, {rounded.md} corners, transparent background, 2px border.
- Default: Border and text {colors.accent}.
- Hover: Background {colors.accent-light}, border {colors.accent}.
- Copy: Same tone as primary.

**Card (Featured Book)**
- Structure: {colors.surface} background, 1px solid {colors.border}, {rounded.lg} corners, {spacing.lg} padding. Contains: book cover image or placeholder (max-width 100%), h3 title, body-sm author name, accent-light category badge, optional heart icon or "View details" link.
- Default: Elevation 1 shadow.
- Hover: Elevation 2, translateY(-2px), border shifts to {colors.accent}, 200ms ease transition.
- Copy: Title in h3, author in body-sm, category in label inside badge.

**Input (Text, Email, Password)**
- Structure: Full-width, {rounded.md} corners, {spacing.md} padding, 1px solid {colors.border}, {typography.body-md.fontSize}, inherit font.
- Default: {colors.surface} background, {colors.text-primary} text, {colors.text-secondary} placeholder (italic).
- Focus: Border shifts to {colors.accent}, outline none, box-shadow: 0 0 0 3px {colors.accent-light} (focus ring).
- Error: Border {colors.error}, box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1), error message below in {colors.error} body-sm.
- Disabled: Background {colors.surface-secondary}, text {colors.text-secondary}, cursor not-allowed.
- Label: Body-sm, 600 weight, above input, {spacing.sm} margin-bottom, required indicator (asterisk) in {colors.error}.

**Modal (Auth Container)**
- Structure: Fixed overlay, {colors.text-primary} at 50% opacity backdrop (rgba(26, 24, 20, 0.5)), flex centering. Modal box: max-width 480px, {colors.surface} background, {rounded.lg} corners, {spacing.xxl} padding, Elevation 3 shadow. Close icon (× or icon) top-right, clickable to dismiss.
- Animation: Fade-in 200ms ease (opacity 0 → 1), scale-in 200ms ease (transform scaleIn from 0.95). On close, reverse animation.
- Internal spacing: {spacing.lg} between heading and form, {spacing.md} between form fields, {spacing.lg} between form and submit button.
- Copy: Heading (h2) in serif, form labels and error messages in label style, button text action-forward.

**Badge (Category)**
- Structure: Inline-block, {rounded.full} corners, {spacing.xs} vertical padding, {spacing.md} horizontal padding, label font style, white-space: nowrap.
- Category (blue-soft): Background {colors.accent-light}, text {colors.accent}.
- Featured (red): Background {colors.accent}, text white.
- Copy: Short, lowercase category names or tag phrases. "Literary fiction," "New release," "Staff pick."

**Navbar**
- Structure: Fixed top, z-index 100, 64px height, {colors.surface} background, 1px solid {colors.border} bottom, flex row with space-between layout, {spacing.lg} horizontal padding, vertical center alignment.
- Left side: Logo (Georgia serif, h3 size, 600 weight, {colors.text-primary}).
- Right side: Navigation links (body-md, {colors.text-primary}, {spacing.lg} gap) and auth button (primary button).
- On scroll: Add Elevation 4 shadow (0 2px 8px rgba(0, 0, 0, 0.06)).
- Mobile: Hamburger menu on right (icon, {colors.text-primary}, 24×24px), logo on left.

## Do's and Don'ts

**Do:**
- ✓ Use Georgia serif for all h1–h3 headings and the navbar logo. It is the brand voice.
- ✓ Keep card corner radius at {rounded.lg} (12px) or smaller. Never exceed this except for badges.
- ✓ Ensure all body text is {colors.text-primary} on {colors.background} (13.2:1 contrast). Test focus states on inputs with the accent-light ring; they must be visible and meet 3:1 minimum for focus indication.
- ✓ Use {colors.accent} (crimson) for only 10–15% of the page: primary buttons, featured elements, link underlines, hover states. Never use it for background fills of large sections.
- ✓ Apply Elevation 2 shadow on card and button hover. Never use drop-shadow on text.
- ✓ Write labels and button copy in sentence case with action verbs: "Sign up," "Discover now," "View details."

**Don't:**
- ✗ Do not mix multiple serif fonts or add additional typeface families. Georgia + system sans is enough.
- ✗ Do not round corners beyond {rounded.lg} (12px) anywhere except badge pills ({rounded.full}).
- ✗ Do not use {colors.accent} for body text, backgrounds of sections, or as a surface color. It is an accent only.
- ✗ Do not add decorative flourishes, wavy lines, or ornamental shapes. The layout and typography are the design.
- ✗ Do not reduce body text below 16px on mobile, or below 1rem on any device. Readability is non-negotiable.
- ✗ Do not render inputs or buttons without visible focus states. Focus ring (accent-light shadow or border) must be tested with keyboard navigation and meet WCAG AA standards (minimum 3:1 contrast ratio).