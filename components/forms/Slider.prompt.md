Range slider with a cyan filled track and round thumb.

```jsx
<Slider label="Monto asegurado" min={5000} max={50000} step={1000} value={v} onChange={setV} formatValue={n=>`$${n.toLocaleString('es-EC')}`} />
```
