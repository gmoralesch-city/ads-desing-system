// figma node: 235:817 Cargar
export function Cargar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 80,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 80,
        height: 80,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 8px rgb(244,244,244)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 80,
        height: 80,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 8px rgb(0,174,239)",
      }} />
    </div>
  );
}
export default Cargar;
