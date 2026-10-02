# UI Kit — Aseguradora del Sur (Marketing Website)

High-fidelity recreation of the public `aseguradoradelsur.com`-style marketing site, rebuilt from the Figma **Plantillas › Desktop** templates.

## Open
`index.html` — full interactive homepage. Loads React + the design-system bundle (`_ds_bundle.js`) and composes the partials below.

## Surfaces
| File | Section |
|------|---------|
| `Header.jsx` | Sticky top nav: horizontal logo, menu, "App Sur One" link, Ingresar button |
| `Hero.jsx` | Cyan hero band with the app-in-hand photograph + dual CTAs |
| `SegurosSection.jsx` | "Nuestros seguros" — product cards (Vehicular, Vida, Salud, Hogar…) |
| `FeaturesSection.jsx` | "Contrata con nosotros" value props on the teal band |
| `PricingSection.jsx` | Bronce / Plata / Oro vehicular tiers (Oro featured) |
| `Footer.jsx` | Sur One app promo (purple) + navy footer with newsletter |

## Notes
- Built from DS primitives: `Button`, `Card`, `Badge`, `Input`.
- Brand assets: `assets/logos/ads-horizontal.png`, `assets/logos/ads-isotipo.svg`, `assets/images/hero-app-hands.png`, `assets/logos/sur-one-icon.png`.
- **Icons:** Lucide via CDN as a substitute for the brand line-icon set (closest stroke match). Replace with the real ADS icon assets in production.
