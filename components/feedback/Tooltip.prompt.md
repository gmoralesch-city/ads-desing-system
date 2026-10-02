Short hover/focus explanation attached to an icon button or a truncated value — never for essential copy, since it is pointer-only.

```jsx
<Tooltip title="Title" label="Description" arrow="arriba">
  <IconButton icon="InformativoCircleHelp" aria-label="Ayuda" />
</Tooltip>
```

- `arrow` is the Figma "Flecha" axis and names the panel edge the arrow sits on: `arriba` puts the arrow on top, so the panel hangs below the trigger.
- Drop `title` for the Titulo=Off variant (description only).
- Pass `open` to pin it visible in specimens and screenshots.
