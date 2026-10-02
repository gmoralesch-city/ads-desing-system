# UI Kit — Módulo de renovaciones de fianzas (Admin)

High-fidelity recreation of the **Sistema de renovaciones** internal admin module,
rebuilt from the Figma *"Diseño de interfaz – Módulo renovaciones fianzas"* file
(page *Mockup-Desktop*). This is the canonical example of an ADS **product/admin
module** — most internal modules share this same shell, so use it as the pattern.

## Open
`index.html` — interactive screen. Click **Ingresar pedido** to open the *Nuevo
pedido* form modal; click the **eye** icon on any table row to open the *Detalles*
sheet; sidebar items and pagination are clickable.

## Surfaces
| File | Section |
|------|---------|
| `TopBar.jsx` | 80px top menu: ADS isotipo, green **Admin** tag, user dropdown — cyan-700 bottom border |
| `Sidebar.jsx` | 120px collapsed icon rail (icon + label), active item gets a cyan chip + right accent bar |
| `RenovacionesTable.jsx` | Sortable renewals table (Firma actions, Sucursal, Aseguradora, Ramo, Póliza…) + results count and pagination |
| `NuevoPedidoModal.jsx` | "Nuevo pedido" form: star tabs, dashed section divider, select/date/text fields, upload dropzone, observations, submit |
| `DetallesModal.jsx` | Read-only account detail sheet (bold label : value rows) |
| `RenovacionesFooter.jsx` | Royal-blue (`#0033A1`) footer with Facebook / TikTok / WhatsApp + copyright |

## Module shell pattern (reuse for other modules)
`TopBar` (fixed) → `Sidebar` (fixed) + scrollable `main` (page title with help-circle,
primary action, search + Filtrar toolbar, data table) → `RenovacionesFooter` (fixed).
Swap the table columns, nav selection and modals per module; the shell stays.

## Notes
- Built on DS tokens + the `Button` and `Avatar` primitives (`window.AseguradoraDelSurDesignSystem_031691`).
- Brand cyan `#00AEEF` CTAs (8px radius), royal-blue `#0033A1` footer, green `#4F800B` Admin tag — all verified against the Figma component fills.
- **Icons:** Lucide via CDN (substitute for the brand line-icon set). Row actions = `eye` (Detalles), `sparkles` (Analizar pedido), `paperclip` (Adjuntar).
- **Type:** uses the design-system `--font-brand` (Mulish). The Figma file itself sets **Inter** for this admin module; swap `--font-brand`→Inter on this surface if exact fidelity is required.
