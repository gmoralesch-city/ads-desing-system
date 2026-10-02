Boxed text field (Figma "Inputs" atom, node 126:241): 254×47 box, 8px radius, white fill, 1px stroke, label floats from 16px centred to 12px top-left. Pair it with an `<Icon name="…" />` from the extracted ADS set, never a hand-rolled SVG.

```jsx
<Input label="Correo electrónico" value={v} onChange={e=>setV(e.target.value)} iconRight={<Icon name="ComunicaciNEmail" />} />
<Input label="Cédula" value="17" error="Ingresa los 10 dígitos de tu cédula" iconRight={<Icon name="UsuarioCedula" />} />
<Input label="Número de póliza" state="disabled-fill" value="POL-0042-118" />
```

**The eight states** (`state` forces one; otherwise it is derived from focus / value / `error` / `disabled` / `readOnly`):

| state | border | label + help | notes |
| --- | --- | --- | --- |
| `default` | `#B4B4B4` | `#787878`, centred 16px | empty, idle — the label is the placeholder |
| `focus` | `#00AEEF` | cyan, floated 12px | empty, caret in field |
| `active` | `#00AEEF` | cyan, floated | user is typing |
| `fill` | `#00AEEF` | cyan, floated | has value, blurred |
| `fail` | `#E44B40` | `#E44B40` | `error` text prints below at 12px |
| `inactive` | `#B4B4B4` @ 0.4 | `#787878` | `readOnly` — visible, not editable |
| `disabled` | `#B4B4B4` @ 0.4 | `#787878` | `disabled`, empty |
| `disabled-fill` | `#00AEEF` @ 0.4 | cyan | `disabled` with a value (prefilled, locked) |

Validation copy goes in `error` (turns the field red) and hint copy in `helper` — both render in the same 12px slot below, so set only one. Keep help text in Ecuadorian Spanish with exact insurance terms ("póliza", "cédula", "deducible").
