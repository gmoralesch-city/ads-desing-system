Underline dropdown in the ADS form style, with caret icon.

```jsx
<Select label="Tipo de seguro" options={['Vehicular','Vida','Salud','Hogar']} value={v} onChange={e=>setV(e.target.value)} />
```

Options accept plain strings or `{value,label}` objects.
