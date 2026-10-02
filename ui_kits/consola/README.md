# Consola de negocios — UI kit

Recreación funcional de los organismos Figma **Or - Filtros**, **Tablas** y **Modals**
del archivo *Design System - Aseguradora del Sur*.

| Archivo | Contenido |
| --- | --- |
| `index.html` | Pantalla completa interactiva (estado, búsqueda, orden, paginación, snackbars) |
| `FiltrarDrawer.jsx` | Panel lateral "Filtrar por:" — 420 px desktop / pantalla completa en mobile |
| `NegociosTable.jsx` | Tabla ordenable + lista de tarjetas en mobile + pie con paginación |
| `ConsolaModals.jsx` | Detalle, reporte de siniestro (con validaciones), términos y condiciones, confirmación |
| `data.js` | 84 registros de muestra con los valores de los filtros del Figma |

## Funcionamiento verificado

- **Filtros** — chips multi-selección por Canal, Sucursal, Vendedor, Tipo y Tipo de plan;
  rango de valor con dos manijas; calendario de septiembre 2022. *Restaurar* vuelve al
  estado vacío, *Aplicar* cierra el panel y confirma con un snackbar. Los filtros
  aplicados aparecen como chips removibles sobre la tabla.
- **Validaciones** — el rango bloquea *Aplicar* si el mínimo supera al máximo; el
  formulario de siniestro valida cédula de 10 dígitos, formato de correo, fecha no
  futura, ramo obligatorio y relato de 20 caracteres mínimo; los términos solo se
  pueden aceptar después de desplazar el texto hasta el final.
- **Tabla** — orden ascendente/descendente por Identificación, Cliente, Cotización,
  Valor y Ejecutivo; ojo por fila abre el detalle; menú kebab ofrece descargar,
  reportar siniestro y cancelar (con confirmación). Estado vacío cuando ningún
  registro cumple los filtros.
- **Paginación** — resultados 1-N de N, páginas navegables y selector de registros
  por página (10 / 20 / 50 / 100) que reinicia a la página 1.

## Medidas tomadas del Figma

Panel 420 px, radio `4px 0 0 4px`, cabecera y pie de 80 px con padding 20 px,
título *Filtrar por:* Avenir 900 / 20 px / #484848, contenido de 350 px con gap 12 px
y padding `20px 0 40px`, sombra del pie `0 40px 120px rgba(1,30,65,.2)`; en mobile el
panel pasa a 375 px con sombra `0 4px 4px rgba(0,0,0,.25)`. Cabecera de tabla con wash
teal #E8F4F4 y filas de 16/20 px.
