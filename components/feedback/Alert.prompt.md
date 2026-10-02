Inline alert banner for in-page feedback — a white card with a tone-tinted border, used above forms and inside panels (for transient toasts use `Snackbar` instead).

```jsx
<Alert tone="success" link={{ label: 'Acción' }} onClose={() => setOpen(false)}>
  Aquí va el mensaje que se quiere comunicar.
</Alert>
```

- `tone`: `info` (turquesa) · `warning` (amarillo) · `success` (verde) · `danger` (rojo). Border weight follows the file: 1px on info/warning, 2px on success/danger.
- Right-hand affordances are all opt-in and stack in this order: `action` (outline cyan button, grows the row 48→64px), `link` (underlined cyan), `onClose` (24px close glyph).
- Copy is sentence case, tuteo, Spanish — e.g. "Tu póliza se renovó correctamente."
