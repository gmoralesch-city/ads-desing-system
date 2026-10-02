// figma node: 221:2591 funciones/lock
export function FuncionesLock(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(13,13,13)",
      ...props.style,
    }}>
      <svg width={16} height={20} viewBox="0 0 16 20" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 2,
        width: 16,
        height: 20,
      }}>
        <path d={"M 8 2 C 9.648 2 11 3.352 11 5 L 11 8 L 5 8 L 5 5 C 5 3.352 6.352 2 8 2 Z M 13 8 L 13 5 C 13 2.248 10.752 0 8 0 C 5.248 0 3 2.248 3 5 L 3 8 L 2 8 C 0.895 8 0 8.895 0 10 L 0 18 C 0 19.105 0.895 20 2 20 L 14 20 C 15.105 20 16 19.105 16 18 L 16 10 C 16 8.895 15.105 8 14 8 L 13 8 Z M 2 10 L 14 10 L 14 18 L 2 18 L 2 10 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesLock;
