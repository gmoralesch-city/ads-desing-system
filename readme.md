# Aseguradora del Sur — Design System (“Marca ADS”)

A brand & product design system for **Aseguradora del Sur**, one of Ecuador's
established insurance companies (seguros vehicular, vida, salud, hogar, empresas),
and its companion mobile app sub-brand **Sur One**. Rebuilt from the company's
Figma design library (atomic-design structure: *Protones › tomos › Moléculas ›
Organismos › Plantillas*).

This folder is the source of truth for the brand's colors, typography, spacing,
logos, illustrations, reusable UI components and full-screen UI kits. An automated
compiler indexes `styles.css` and the components into a runtime bundle
(`_ds_bundle.js`, namespace `window.AseguradoraDelSurDesignSystem_031691`).

## Source
- **Figma:** “Design System - Aseguradora del Sur.fig” (attached). Pages: Cover,
  Documentos, Protones (foundations), tomos (atoms), Moléculas, Organismos,
  Plantillas (templates). Foundations live in *Protones › Pro - Colores /
  Tipografía / Logo / Íconos / Illustraciones*.
- No public codebase was provided; all values were extracted from the Figma file.

## Two brands in this system
- **Aseguradora del Sur** — the parent insurer. Mark is a four-pointed **star
  isotipo** (cyan + royal-blue facets) with the lowercase wordmark “aseguradora
  del sur”. Palette built on **brand cyan `#00AEEF`** + **navy `#011E41`**.
- **Sur One** — the customer mobile app. Mark is a rounded-square app icon
  (purple `#4D16C4`) with a pink/cyan arrow; wordmark sets “Sur” in purple and
  “One” in pink. Uses **Inter**. Treat Sur One as a sub-brand inside ADS contexts.

---

## CONTENT FUNDAMENTALS
How the brand writes (all UI/marketing copy is in **Spanish, Ecuador**):

- **Voice:** warm, reassuring, protective — selling *tranquilidad* (peace of mind).
  Confident but human; never cold or bureaucratic.
- **Address:** second person informal **“tú/tu”** — *“Protege lo que más te
  importa”, “Elige el plan que se ajusta a ti”, “Realiza el seguimiento de tus
  siniestros”*. The brand speaks *to* the customer, not about itself.
- **Casing:** Sentence case for headings and buttons (*“Cotizar mi seguro”,
  “Contrata con nosotros”*). Eyebrows/section kickers may be UPPERCASE small caps.
- **Headlines:** short, benefit-led, often a light-weight phrase with one bold
  word for emphasis (*“La tranquilidad **está en tus manos**”*).
- **Buttons/CTAs:** imperative verbs — *Cotizar, Contratar, Reportar siniestro,
  Recibir, Descargar póliza, Ingresar*. Usually 1–3 words.
- **Numbers & money:** USD (Ecuador is dollarized). Prices shown as `$47/mes*`
  with a `*` footnote “Valor mensual referencial”. Coverage amounts like
  `$20.000` (period thousands separator).
- **Tone of trust:** leans on heritage (*“+30 años”*), local pride (*“empresa
  100% ecuatoriana”*) and service (*“Soporte 24/7”, “El cliente va primero”*).
- **Emoji:** not used in product UI. (The Figma includes a set of yellow
  *emoticon* illustrations for reactions, but not inline emoji in copy.)
- **Terminology:** *seguro, póliza, siniestro, cobertura, deducible, indemnización,
  asegurado, agente/asesor.* Use these exact insurance terms.

---

## VISUAL FOUNDATIONS

**Color.** The system is unmistakably **cyan + navy**. Brand cyan `#00AEEF` is the
hero color (heroes, CTAs, active states, icon chips); navy `#011E41` carries text,
dark sections and the footer. Royal blue `#0033A1` is the secondary. A **teal**
accent `#4F8488` / wash `#E8F4F4` provides quiet alternating section backgrounds.
Neutrals run navy→white. Semantic set: success green `#4C8C1E`, warning gold
`#C99A06`, danger red `#9E1B0E`. Plan tiers have their own accents (Bronce/Plata/
Oro). Sur One adds purple/pink/cyan. Tokens in `tokens/colors.css`.

**Type.** Brand face is **Avenir** (geometric humanist sans) — **substituted here
with Mulish** (closest free Google match; see Caveats). Display/H1–H2 are set
**Light (300)** at large sizes for an airy, premium feel; H3–H6 Medium (500);
emphasis Bold (700/800). Body is Regular 16px at 150% line-height. Headings sit at
100% line-height. Sur One uses **Inter**. Tokens in `tokens/typography.css`.

**Spacing & layout.** 4px base grid (`--space-*`). Generous section padding
(96px vertical on marketing). Centered max-width containers (~1200px). Grids with
`gap` (3-up product/feature grids).

**Corners.** Soft, friendly radii: buttons & inputs **8px**, content cards 16px,
feature cards 24px, hero/specimen cards a pronounced **40px**, pills/FABs/avatars
fully round. (`--radius-*`.)

**Cards.** White surfaces, no border by default, lifted with soft navy-tinted
shadows. Hover lifts the card (`translateY(-6px)`) and deepens the shadow.

**Elevation (from the Figma “Sombras” spec).** Four levels:
`button` `0 4 8 rgba(0,174,239,.24)` (a **cyan glow** unique to CTAs), `sm/cajita`
`0 4 8 navy/12%`, `md/caja` `0 12 20 navy/8%`, `modal` `0 20 80 navy/12%`.
(`--shadow-*`.)

**Backgrounds.** Mostly clean white with alternating teal-wash (`#E8F4F4`) bands;
the hero is a **full-bleed brand-cyan** band with a photographic cut-out (hands
holding the app). Dark navy footer. No gradients, no noise, no heavy textures.

**Imagery.** Bright, warm photography of real people/hands, often composited on a
flat cyan background. Spot illustrations are **light-cyan organic blobs** behind
simple line-icon subjects (empty states, confirmations, loaders) — soft, optimistic.

**Inputs.** Underline style (no boxed borders): label above, value, 2px bottom
border that turns cyan on focus / red on error, optional trailing icon.

**Motion (from the “Transitions” spec).** Restrained, ease-out. Actions/selects/
tooltips/submenus **320ms ease-out**; snack bars **200ms** move-in; side modals
**800ms** gentle move-in; loaders **240ms linear**. Hover = color deepen
(`#00AEEF → #008BBF`) + optional shadow; no bounces. Scrims: submenu `black/12%`,
modal `black/40%`, drawer `black/20%`. (`--dur-*`, `--ease-*`, `--scrim-*`.)

**Hover/press.** Primary button hover deepens to brand-dark and gains the cyan
glow. Secondary hover fills with cyan wash. Links lower opacity. Nav items reveal
a cyan underline. Disabled = neutral-300 fill / neutral-500 text.

---

## ICONOGRAPHY
The Figma “Íconos” page defines two families:

1. **UI line icons** — a large thin-stroke outline set (arrows, functions,
   informative, objects, communication, media, devices, views, weather,
   characters, user). Stroke style is Feather-like (2px, rounded joins).
   **93 of these are now extracted verbatim from the Figma** as real path data
   (`components/display/icon-data.js`) and rendered through the `Icon`
   component: `<Icon name="ObjetosCreditCard" size={24} />`. Names keep the
   Figma family prefix — `Funciones*`, `Objetos*`, `Usuario*`,
   `Informativo*`, `Flechas*`, `ComunicaciN*`, `Dispositvos*`, `Vistas*`,
   `Media*`; see `components/display/Icon.d.ts` for the full list. Glyphs are
   ~20×20 drawn inside a 24×24 frame and are centred at load. The remaining
   families of the full ~241-glyph set can be extracted the same way on demand.
2. **“Servicios” brand icons** — bespoke, **filled/duotone insurance icons inside
   circular cyan/navy chips** (cars, umbrellas, shields, medical, etc.). These are
   proprietary and should be exported from Figma when needed; the UI kits
   approximate them with extracted line icons inside cyan chips.

Also present: payment-brand marks (Visa/Mastercard/Amex/Diners), trust seals
(PCI, Datafast) and the **Sur One app** line-icon set. Emoji are **not** used as
icons; Unicode glyphs are not used as icons either.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — import-only entry point (links every token + font file).
- `readme.md` — this guide. `SKILL.md` — Agent Skill wrapper.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css` (spacing/radius/
shadow/motion), `fonts.css` (Mulish + Inter via Google Fonts).

**`components/`** (React primitives, namespace `DesignSystem_031691`)
Each has `<Name>.jsx`, `.d.ts`, `.prompt.md`, and a `@dsCard` HTML in its group.
- `buttons/` → **Button**
- `forms/` → **Input · Textarea · Select · Checkbox · Radio · Switch · Slider · CodeInput · Attach**
- `display/` → **Card · Box · Badge · Tag · Chip · Avatar · Stepper · Accordion · Seal · Insignia · ServiceIcon · Icon · Calendar · Table · ListItem**
- `navigation/` → **Tabs · Menu · Breadcrumb · Dropdown · Link · Pagination · Filter · ActionBar**
- `feedback/` → **Alert · Snackbar · Tooltip · Loader · EmptyState**
- `overlay/` → **Modal**
- `marketing/` → **Banner · PageHeader · Stat · PlanCard · Summary · Access · SocialLinks**
- `brand/` → **Logo**

**Component ↔ Figma family map.** Component names follow the Figma "Component
families" vocabulary where one exists: Button←Buttons, Input←Inputs,
Textarea←Text-areas, Select←Selects, Slider←Slider, CodeInput←Codes,
Attach←Attach, Tag←Tags, Chip←Chips, Stepper←Steppers, Accordion←Collapseds/
Detalles, Seal←Sellos, Insignia←Insignia, ServiceIcon←Servicios, Menu←1Menus/
Submenus, Breadcrumb←Breadcrumb, Dropdown←Dropdowns, Link←Links, Pagination←
Página, Alert←Alerts, Snackbar←Snack bars, Tooltip←Tooltips, Loader←Cargando,
EmptyState←Estados, Modal←Modals, Banner←Banner, Stat←Valores, Table←Data/
Columna, ListItem←Items, Box←Box/Boxes, Calendar←Calendario/Dias/Semanas,
Filter←Filtros, ActionBar←Acciones, PageHeader←Cabecera, Summary←Resumen,
Access←Access, PlanCard←Tarjetas, SocialLinks←Social, Logo←Imagotipo, Tabs←Tab,
Icon←Íconos.

## Intentional additions

These components are deliberately named in English (their clean, reusable API is
the one meant for new work) and each either maps 1:1 to a Figma family — whose
exact-name extraction also lives under `kit/` — or is a conventional primitive
the kit's screens clearly imply. **Confirmed intentional additions, not
omissions:**

- **Logo** — Imagotipo family (type wordmark; real marks in `assets/logos/`)
- **Seal** — Sellos family (circular tier/trust emblem)
- **ServiceIcon** — Servicios family (circular brand icon chip)
- **Icon** — Íconos family (thin-stroke line-icon wrapper)
- **Calendar** — Calendario / Dias / Semanas
- **Table** — Data / Columna
- **ListItem** — Items
- **Box** — Box / Boxes
- **Accordion** — Collapseds / Detalles
- **Loader** — Cargando
- **EmptyState** — Estados
- **Stat** — Valores
- **PageHeader** — Cabecera
- **Summary** — Resumen
- **PlanCard** — Tarjetas
- **Banner** — Banner
- **Insignia** — Insignia
- **SocialLinks** — Social
- **Card** — conventional surface used across the UI kits
- **Badge** — conventional status pill
- **Avatar** — conventional user mark
- **Checkbox** — Figma "Controls" / "Options" selection atom
- **Radio** — Figma "Controls" / "Options" selection atom
- **Switch** — Figma "Controls" / "Options" selection atom

**Coverage & what's deliberately not a component.** The Figma file reports ~160
"families", but the bulk of that count is **glyph/asset sets rendered as data,
not React primitives**: the ~241-glyph UI **Íconos** set (one `Icon` wrapper +
93 extracted glyphs as data), the 116-variant **Servicios** icon set (one `ServiceIcon` + exported
art), the 30 **International** country flags, payment-brand marks, and a handful
of **example/demo** frames (Diseñadores, sample cards). Those are represented by
`Icon`/`ServiceIcon` + copied assets rather than one component each. The
remaining low-level layout atoms (Box, Items, Columna, Point, Data cells,
Cabecera, Página shells) are composed inline inside the UI kits. If you need one
promoted to a standalone component, ask and it'll be added.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown
in the Design System tab.

**`ui_kits/`**
- `website/` — ADS marketing homepage (hero, products, tiers, footer).
- `siniestros/` — claims-tracking portal (stepper, timeline, detail).
- `renovaciones/` — **Módulo de renovaciones de fianzas** (admin): top bar, icon
  sidebar, sortable data table + pagination, "Nuevo pedido" form modal, "Detalles"
  sheet, royal-blue footer. The canonical pattern for internal admin modules.
- `consola/` — **Consola de negocios**: recreación funcional de los organismos
  *Or - Filtros*, *Tablas* y *Modals*. Panel lateral de filtros (chips, rango dual,
  calendario) con Restaurar/Aplicar, tabla ordenable con acciones por fila,
  paginación + registros por página, y modales con validaciones reales
  (cédula, correo, fecha, aceptación de términos). Responsive: la tabla se
  convierte en lista de tarjetas bajo 900 px.

**`assets/`**
- `logos/` — `ads-vertical.png`, `ads-horizontal.png`, `ads-isotipo.svg`
  (transparent), `sur-one.png`, `sur-one-icon.png`.
- `illustrations/` — `empty-state.png`.
- `images/` — `hero-app-hands.png`.

---

## FIGMA KIT (materialized) — `kit/`

Direct extractions from the Figma file (exact geometry, spacing and fills),
named after the source **component families** and glyphs. These complement the
hand-authored primitives in `components/` — use the clean primitives for new
work; use these for pixel-exact reference and family coverage. All compile into
the same bundle (namespace `AseguradoraDelSurDesignSystem_031691`).

**Families & glyphs (98):** Acciones, Alerts, AppADS31, Buttons, Cabecera, Cargando, Cargar, Chips, Code, Codes, Collapseds, Columna, ComunicaciNEmail, Controls, Data, Detalles, Dias, DispositvosMobile, Dropdowns, Estado, Estados, Filtro, Filtros, Flechas, FlechasArrowRight, FlechasCaretDown, FlechasCaretLeft, FlechasCaretRight, FlechasCaretUp, Floating, Floatings, Forms, FuncionesCheck, FuncionesClose, FuncionesCloudDownload, FuncionesDelete, FuncionesEdit, FuncionesEye, FuncionesEyeOff, FuncionesFavorite, FuncionesLock, FuncionesMenu, FuncionesOptionsVertical, FuncionesRemove, Imagotipo, ImagotipoADS, ImagotipoSurUp, InformativoCircleArrowRight, InformativoCircleCheck, InformativoCircleError, InformativoCircleHelp, InformativoCircleInformation, InformativoCircleRemove, InformativoCircleWarning, Inputs, International, Items, Links, Log, Logs, Menu1, Menus1, Modals, ObjetosBarChart, ObjetosCalendar, ObjetosClipboard, ObjetosCreditCard, ObjetosCultura, ObjetosHome, ObjetosImage, ObjetosInbox, ObjetosTag, Options, PGina, PestaA, Point, Resumen, Selects, Sellos, Semanas, SnackBar, SnackBars, StepperBaseH, StepperH, Steppers, Submenu, Submenus, Tab, TabBase, Tags, Tarjeta, Tarjetas, TextAreas, Tooltips, UsuarioCarro, UsuarioCedula, UsuarioUser, Valores.

_Note:_ `kit/International.jsx` and `kit/Tarjeta.jsx` are large (baked payment/
flag artwork); the 7 MB `Servicios` extraction was omitted in favor of the clean
`ServiceIcon` primitive. Fonts in kit files fall back to a generic sans until
Avenir/Mulish `@font-face` rules are present (they are, via `styles.css`).

## CAVEATS / SUBSTITUTIONS
- **Avenir → Mulish.** The brand font Avenir is not web-licensed here; Mulish is
  the closest free substitute. Drop in licensed Avenir webfonts (update
  `tokens/fonts.css` + `--font-brand`) for production fidelity.
- **Icons → 93 extracted from the Figma**, rendered by `Icon` from real path
  data. The rest of the ~241-glyph set is available to extract the same way. The
  bespoke “Servicios” colored icons should be exported from Figma when
  pixel-accuracy matters.
- Logos and the empty-state illustration were rasterized (PNG) from the Figma
  vectors except the **isotipo**, which is a clean transparent SVG.
