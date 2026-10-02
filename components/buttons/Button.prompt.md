Brand call-to-action button — cyan fill by default, used across web and app surfaces.

```jsx
<Button variant="primary" size="lg">Cotizar ahora</Button>
<Button variant="secondary" iconLeft={<Icon name="download" />}>Descargar</Button>
<Button variant="link">Ver más</Button>
```

Variants: `primary` (cyan fill, white text), `secondary` (cyan outline), `ghost` (text only), `link` (underlined link). Sizes: `sm` 36px · `md` 40px · `lg` 48px. Primary hover deepens to `--color-brand-dark` and lifts with the cyan `--shadow-button` glow.
