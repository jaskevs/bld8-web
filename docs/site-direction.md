# Current website direction

## Local refinement — 28 September 2026

The user requested a brighter, lighter, minimal interpretation of Linear
(https://linear.app/) and ElevenLabs (https://elevenlabs.io/), keeping the current
white, black and bright lime colours. This local revision supersedes the earlier
layout details below; it has not been approved for a production release.

- Keep the two-column hero, plain headline “Software & experiments.” and
  interactive layered illustration.
- Use generous white space, fine borders, restrained shadows and softly rounded
  panels. Retain Manrope headings and DM Sans paragraphs.
- Preserve the palette: #f5f5f5 page canvas, white project panels, #191919 ink, black footer, #d1fe17 lime,
  #f3ffd1 soft lime and #526600 for small accent text and focus on white.
- Feature Workbench across the full project grid, with the website and Coffee
  Docket paired beneath it. Use white project canvases with fine dividing lines; each project keeps its
  own identity. Mobile stacks in reading order.
- Keep visible navigation, keyboard layer controls, native disclosures,
  accessible focus and reduced-motion support.
- The references inform spacing, hierarchy and framing. Do not copy their
  branding, marketing claims or assets.

## Interaction and detail refinement

The Home technology strip is removed. Keep the broader focus in understated About
copy and factual project stack notes. Buttons, navigation controls and layer
controls use 4 px corners. Hover colours ease over 320 ms; arrows, button lift
and link underlines ease over 520 ms using cubic-bezier(0.16, 1, 0.3, 1).
Limit movement to 2–3 px and preserve a stable hit target. Hover movement applies
only to fine pointers; reduced motion disables all animation. Keep immediate
keyboard focus feedback. Do not add looping decoration or scroll effects.

Fine section dividers with tiny endpoint marks and short label rules add quiet
structure. Preserve the palette, white space and existing project panel radii.

## Dotted icons

Use the shared DotIcon SVG component for small interface icons: directional
arrows, coffee cup and receipt symbols. Filled circles provide
consistent dot spacing and inherit the existing colour. Keep icon sizes readable
and preserve the shared arrow hover motion. Large architecture illustrations and
fine section rules remain line-based; the small favicon keeps its solid mark
for legibility at browser-tab sizes. The header/footer cube returns to its
earlier line form and original proportions until the user supplies a logo.
All diagonal arrows use the same compact shape with two trailing dots.
Text links, navigation and back links use an 8 px text/icon gap; buttons use
a 12 px gap. Keep these spacings consistent across screen sizes.
Do not add an icon package or raster assets.

## Content and focus

Keep descriptions brief, factual and centred on the projects. The name appears
once in the About introduction, rather than throughout the hero, footer and
metadata. Avoid promotional slogans, repetitive introductions and invented
experience, results or research publications.

The broader focus includes .NET, C#, Angular, React, Next.js, React Native,
NestJS, Python and AI research. Angular, .NET and C# remain explicit in the
background. Mention maintaining React and Angular component libraries once in
the About background, as a concise statement rather than a new skills section.
Keep technology names in natural About-page prose; the user rejected
the Home technology strip as too promotional. Home should lead with the work.
Give AI research its own focus description on About.
Research here means exploring ideas through reading, experiments, evaluation
and practical applications; do not imply a publication record.

Project technologies must describe the actual project or documented plan.
Do not add a framework to a project merely because it appears in the personal
focus list. Workbench is still in planning/documentation.

## Retained decisions and release state

The user rejected the brutalist experiment and repetitive personal copy.
Do not restore either without a new request.

The bright lime accent was requested after the earlier forest-green version.
The public Higgsfield stylesheet supplied #d1fe17 (checked 23 September 2026).
Use dark ink on lime fills and the darker companion for text on white.

The previous approved release is live at https://www.bld8.dev. Coffee Docket
was published on 28 September 2026; custom-domain HTTPS and automatic Git
deployment are verified. See deployment.md for release evidence. This design
refinement is a local preview; a push to main would publish it automatically.
No LinkedIn URL was supplied. Manual screen-reader review remains pending.

## White project canvases - 28 September 2026

The user referenced https://www.carlhauser.com/projects for clean visual structure.
The main page background is light grey (#f5f5f5); project cards and their artwork panels are white (#ffffff). Keep this distinction: white belongs to the panels, not the surrounding page. Project cards have no outer border; the white fill against grey defines their edges. Remove the grey
website fill and Workbench/coffee green washes. Keep lime on the workflow node,
coffee mark and small accents. One fine rule separates artwork from copy; the
featured Workbench uses a vertical rule on desktop and a horizontal rule on mobile.
The grid, content, crisp icons and existing identity remain BLD8's own.

## BLD8 UI case study — 28 September 2026

The latest local refinements above and the new /work/bld8-ui case study are now
published. This supersedes the earlier local-only release status. The new project
appears on Home and Work as a second full-width panel after the website/Coffee
Docket pair. Explicit featured flags control width; the first card's appearance
no longer depends on its position in the array.

The library artwork keeps yellow (#ffe24a) and black within a white panel; the
portfolio's existing lime actions and grey canvas remain. The artwork is crisp
HTML/CSS and SVG, with decorative semantics, not embedded interactive controls.
The caption directs readers to the working showcase. Keep the case study factual:
Base UI supplies complex behaviours, the styled React layer is original, the
showcase is public and the npm package is unpublished. No public UI repository
link exists yet. See deployment.md for the verified release.
