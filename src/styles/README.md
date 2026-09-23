# Styles

The current design uses a white theme with selective inverse panels. tokens.css contains colour, type-family
fallbacks, space, radius and motion values. reset.css supplies a small reset;
globals.css contains shared foundations; motion.css handles reduced motion.
Components use local CSS Modules. Fonts are loaded through next/font/local in
src/app/layout.tsx. See docs/site-direction.md for the selected design direction.
