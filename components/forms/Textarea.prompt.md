Multi-line boxed text field matching Figma "Text areas": floating label inside the box, full border that turns cyan on focus/fill and red on error, optional helper + character counter. States: Default, Focus, Fill, Fail, Disabled empty, Disabled fill.

```jsx
<Textarea label="Label" rows={3} maxLength={280} value={v} onChange={e=>setV(e.target.value)} placeholder="Campo completo" />
<Textarea label="Label" value={v} error="Texto de ayuda" />   {/* Fail */}
<Textarea label="Label" disabled />                            {/* Disabled */}
```
