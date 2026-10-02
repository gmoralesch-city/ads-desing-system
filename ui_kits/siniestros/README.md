# UI Kit — Siniestros (Claims Portal)

Authenticated customer portal for tracking insurance claims, rebuilt from the Figma **Plantillas** claims/stepper flow ("Realiza el seguimiento de tus siniestros").

## Open
`index.html` — interactive claims board. Click any claim in the left list to update the detail panel, stepper, and timeline.

## Surfaces
| File | Section |
|------|---------|
| `PortalHeader.jsx` | Compact authenticated header: logo, search, notifications, user menu |
| `ClaimsPortal.jsx` | Page header + Tabs, claims list, and detail with horizontal **Stepper**, timeline & summary |

## Flow
`Reportado → En evaluación → Aprobado → Indemnizado` — the `Stepper` reflects each claim's current step; completed steps turn green, the active step cyan.

## Notes
- Built from DS primitives: `Card`, `Badge`, `Button`, `Tabs`, `Avatar`.
- **Icons:** Lucide via CDN (substitute for the brand line-icon set).
- Demonstrates the ADS **status badge** tones (warning / success / brand) mapped to claim states.
