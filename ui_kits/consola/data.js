// Datos de muestra para la consola de negocios (valores tomados del frame Figma "Or - Filtros").
window.ADSConsola = (function () {
  const canales = ['Cifraseg', 'APS 1', 'APS 2', 'APS 3', 'APS 4'];
  const sucursales = ['Quito', 'Guayaquil', 'Ambato', 'Cuenca', 'Manta', 'Ibarra', 'Loja', 'Portoviejo', 'Santo Domingo', 'Machala', 'Riobamba', 'El Coca'];
  const vendedores = ['Fuerza directa', 'Sala de ventas', 'Promotores'];
  const tipos = ['N. Riesgo', 'Renovación', 'Inspección', 'Negocio perdido', 'Firma', 'Negocio', 'Cancelación', 'Reverso', 'Negocio ganado'];
  const planes = ['Oro', 'Plata', 'Bronce', 'Promotores'];
  const estados = ['Cotización', 'Aprobada', 'Inicializada', 'Pendiente', 'Rechazada'];
  const nombres = ['Maria Sol Lopez Ruiz', 'Juan Carlos Andrade', 'Paola Jimenez Vera', 'Andrés Cabrera Mora', 'Lucía Naranjo Paz', 'Diego Suárez León', 'Verónica Tapia Ruiz', 'Esteban Vaca Loor', 'Gabriela Ponce Díaz', 'Martín Salazar Coba'];
  const ejecutivos = ['Maria Lopez', 'Pedro Alvarez', 'Ana Quintero', 'Luis Benítez', 'Sofía Rueda'];
  const rows = [];
  for (let i = 0; i < 84; i++) {
    rows.push({
      id: i + 1,
      tipo: tipos[i % tipos.length],
      identificacion: String(1728453707 + i * 13),
      cliente: nombres[i % nombres.length],
      cotizacion: 'ECVHOR22' + String(i + 1).padStart(6, '0'),
      estado: estados[i % estados.length],
      valor: Math.round((820 + (i * 137.4) % 4200) * 100) / 100,
      canal: canales[i % canales.length],
      sucursal: sucursales[i % sucursales.length],
      vendedor: vendedores[i % vendedores.length],
      plan: planes[i % planes.length],
      ejecutivo: ejecutivos[i % ejecutivos.length],
      fecha: new Date(2022, 8, (i % 28) + 1),
      ramo: ['Vehículos', 'Fianzas', 'Vida', 'Asistencia médica'][i % 4],
      deducible: [180, 250, 320, 410][i % 4],
    });
  }
  const money = n => '$ ' + n.toLocaleString('es-EC', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const estadoTone = e => ({ 'Cotización': 'brand', 'Aprobada': 'success', 'Inicializada': 'neutral', 'Pendiente': 'warning', 'Rechazada': 'danger' }[e] || 'neutral');
  return { rows, canales, sucursales, vendedores, tipos, planes, estados, money, estadoTone };
})();
