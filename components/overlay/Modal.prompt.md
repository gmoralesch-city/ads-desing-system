Centered dialog — white rounded card (24px radius) on a 40% black scrim, with title/close, body and optional footer actions.

```jsx
<Modal open={open} onClose={close} title="Confirmar contratación"
  footer={<><Button variant="ghost" onClick={close}>Cancelar</Button><Button onClick={submit}>Contratar</Button></>}>
  ¿Deseas contratar el plan Oro por $47/mes?
</Modal>
```
