Data table with light-blue header wash, row hover, and per-column alignment/render. The backbone of admin modules like *renovaciones*.

```jsx
<Table columns={[{key:'poliza',label:'Póliza'},{key:'monto',label:'Monto',align:'right',render:r=>`$${r.monto}`}]} rows={rows} onRowClick={open} />
```
