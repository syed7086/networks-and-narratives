---
name: Nocturnal Earth
colors:
  surface: '#17130f'
  surface-dim: '#17130f'
  surface-bright: '#3d3834'
  surface-container-lowest: '#110d0a'
  surface-container-low: '#1f1b17'
  surface-container: '#231f1b'
  surface-container-high: '#2e2925'
  surface-container-highest: '#393430'
  on-surface: '#eae1db'
  on-surface-variant: '#d4c4b7'
  inverse-surface: '#eae1db'
  inverse-on-surface: '#342f2c'
  outline: '#9c8e82'
  outline-variant: '#50453b'
  surface-tint: '#f0bd8b'
  primary: '#f2be8c'
  on-primary: '#482904'
  primary-container: '#d4a373'
  on-primary-container: '#5b3912'
  inverse-primary: '#7d562d'
  secondary: '#dcc497'
  on-secondary: '#3d2e0e'
  secondary-container: '#574724'
  on-secondary-container: '#cdb68a'
  tertiary: '#a7ccea'
  on-tertiary: '#06344c'
  tertiary-container: '#8cb1ce'
  on-tertiary-container: '#1d445d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#f0bd8b'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#623f18'
  secondary-fixed: '#f9dfb1'
  secondary-fixed-dim: '#dcc497'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#554422'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#a6cbe9'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#244a63'
  background: '#17130f'
  on-background: '#eae1db'
  surface-variant: '#393430'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1440px
---

## Brand & Style

The design system is built for a dual-identity professional: a technical networking expert and a poetic photographer. The aesthetic bridges these worlds through a "Quiet Editorial" lens—fusing the precision of infrastructure with the soul of film photography.

The style is a sophisticated blend of **Minimalism** and **Tactile Dark Mode**. It avoids the clinical "tech-black" in favor of organic, warm-toned dark neutrals. Visuals are intentional and atmospheric, evoking the feeling of a high-end physical portfolio or a printed monograph. The interface stays out of the way, acting as a curated gallery frame for high-quality imagery.

**Emotional Response:**
- Grounded and reliable (Technical)
- Warm and contemplative (Creative)
- Exclusive and sophisticated (Editorial)

## Colors

The palette is rooted in earthy, low-light tones to mimic the shadows of a darkroom or a night-shift server room.

- **Backgrounds:** The primary canvas uses **Deep Espresso** (#1A1614) for deep immersion. Surfaces and containers use **Warm Charcoal** (#24211F) to create soft, tonal separation without harsh contrast.
- **Accents:** **Muted Amber** (#D4A373) serves as the primary action color, providing a warm "glow" reminiscent of golden hour light. **Mocha** (#8C7851) is used for secondary elements and subtle states.
- **Typography:** Avoid pure white. Use off-white and light grays to reduce eye strain and maintain the filmic aesthetic.

## Typography

Typography establishes the balance between "The Poet" and "The Engineer."

- **Headlines (EB Garamond):** Used for storytelling, section titles, and large quotes. It should be set with tight tracking and fluid line heights to feel like a premium editorial spread.
- **Body & Technical (Hanken Grotesk):** Provides a sharp, modern contrast. It ensures that technical specifications and networking documentation are legible and convey professional authority.
- **Micro-copy:** Use uppercase labels with increased letter spacing for navigation and metadata to mimic the "stamped" feel of film canisters or architectural blueprints.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy that prioritizes cinematic compositions. 

- **Desktop:** A 12-column grid with wide 64px margins. Content is often offset or asymmetrical to feel organic rather than templated.
- **Photography:** Images should frequently break the grid or utilize "Full Bleed" moments to maximize the impact of the photography.
- **Density:** While the style is minimalistic, spacing is tight and intentional. Elements are grouped in clear clusters, using generous internal padding within "cards" but keeping the space between distinct sections controlled and precise.

## Elevation & Depth

Depth is achieved through **Tonal Layers** rather than shadows. This maintains a flat, print-like quality.

- **Level 0 (Base):** Deep Espresso for the main background.
- **Level 1 (Surfaces):** Warm Charcoal for cards, navigation bars, and modals.
- **Interactions:** Hover states should utilize subtle shifts in background tone (lightening slightly) or thin, 1px low-contrast outlines in Mocha. 
- **Glassmorphism:** Use sparingly for navigation overlays. A 12px backdrop blur with a 10% opacity Amber tint creates a sophisticated "frosted lens" effect.

## Shapes

The shape language is **Soft (0.25rem)**. 

While the photography may have sharp, 0px corners to look like physical prints, UI interactive elements (buttons, inputs) use a very slight radius. This prevents the interface from feeling "hostile" or overly industrial, adding a touch of human warmth to the technical credibility of the site.

## Components

- **Buttons:** Primary buttons use a "ghost" style with a 1px Muted Amber border and Amber text. On hover, they fill with a very subtle 10% Amber tint.
- **Cards:** No shadows. Cards use a Warm Charcoal background with a thin, darker border. Imagery within cards should always be top-aligned.
- **Inputs:** Minimalist bottom-border only, or a subtle tonal fill. The focus state uses a soft Amber glow (2px blur).
- **Chips/Tags:** Small, Hanken Grotesk uppercase text inside a Pill-shaped Mocha container with 40% opacity.
- **Image Gallery:** Use a masonry layout for photography, maintaining 16px gaps to keep the focus on the images without unnecessary whitespace "leaks."
- **Navigation:** A minimalist top-bar with a logo in EB Garamond and links in Hanken Grotesk labels.