The ADS line-icon set — 93 icons extracted verbatim from the Figma "Protones" icon families; use it for every glyph instead of hand-rolling SVG.

```jsx
<Icon name="ObjetosCreditCard" size={24} />
<Icon name="FuncionesLock" size={20} color="var(--color-brand)" />
```

Names keep the Figma family prefix: `Funciones*` (actions), `Objetos*` (things),
`Usuario*` (people/ID), `Informativo*` (circle status), `Flechas*` (arrows &
chevrons), `ComunicaciN*` (phone, email, social), `Dispositvos*`, `Vistas*`,
`Media*`. Read `Icon.d.ts` for the full list.

Icons paint with `currentColor`, so `color` (or an inherited CSS `color`)
recolours them. Passing raw SVG children instead of `name` still works for
one-off glyphs the set doesn't cover.
