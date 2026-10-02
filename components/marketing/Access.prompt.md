Login/access card — heading, form field slot and a primary "Ingresar" CTA. Composes Button; drop Input fields as children.

```jsx
<Access subtitle="Usa tu cédula y contraseña" footer={<Link>¿Olvidaste tu contraseña?</Link>}>
  <Input label="Cédula" /><Input label="Contraseña" type="password" />
</Access>
```
