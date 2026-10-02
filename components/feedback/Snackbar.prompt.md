Transient toast anchored bottom-left of the viewport after an action completes — tone-tinted, auto-dismissing (use `Alert` for feedback that stays on the page).

```jsx
<Snackbar tone="success" onClose={dismiss}>
  Aquí va el mensaje que se quiere comunicar.
</Snackbar>
```

- `tone`: `info` · `warning` · `success` · `danger` — each sets the fill (Light), the 4px left bar and glyph (base) and the copy (Dark).
- Fixed 350×70 per the file; pass `style={{ width: '100%' }}` only when a layout genuinely needs it.
- Glyphs follow the file: message/info, warning triangle, check, close. Override with `icon`.
