Dashed file-attach trigger with paperclip icon and an attached-files list.

```jsx
<Attach hint="PDF o JPG, máx 5MB" files={files} onAdd={fs=>setFiles([...files,...fs])} onRemove={i=>remove(i)} />
```
