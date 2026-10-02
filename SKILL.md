---
name: aseguradora-del-sur-design
description: Use this skill to generate well-branded interfaces and assets for Aseguradora del Sur (and its Sur One app sub-brand), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping insurance experiences in Spanish (Ecuador).
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — link this one file; it imports all tokens + fonts.
- `tokens/` — colors, typography, spacing/radius/shadow/motion, fonts.
- `components/` — React primitives. Load `_ds_bundle.js` and read from `window.AseguradoraDelSurDesignSystem_031691`. Buttons: **Button**. Forms: **Input, Textarea, Select, Checkbox, Radio, Switch, Slider, CodeInput, Attach**. Display: **Card, Badge, Tag, Chip, Avatar, Stepper, Accordion, Seal, ServiceIcon, Icon**. Navigation: **Tabs, Menu, Breadcrumb, Dropdown, Link, Pagination**. Feedback: **Alert, Snackbar, Tooltip, Loader, EmptyState**. Overlay: **Modal**. Marketing: **Banner, Stat, PlanCard, SocialLinks**. Brand: **Logo**.
- `guidelines/` — foundation specimen cards.
- `ui_kits/website` & `ui_kits/siniestros` — full-screen recreations to copy from.
- `assets/` — logos (ADS + Sur One), the star isotipo SVG, illustration, hero image.

## Brand in one line
Cyan `#00AEEF` + navy `#011E41`, Avenir-style sans (Mulish here), soft 8px/40px radii, airy light-weight headings, warm Spanish copy in *tú* form selling *tranquilidad*. Sur One sub-brand = purple/pink + Inter.

## Caveats
- Brand font Avenir is substituted with **Mulish**; icons are substituted with **Lucide**. Swap both for licensed/exported assets in production.
