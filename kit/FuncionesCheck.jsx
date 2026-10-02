// figma node: 221:2577 funciones/check
export function FuncionesCheck(_p = {}) {
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
      <svg width={18} height={14} viewBox="0 0 18 14" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 5,
        width: 18,
        height: 14,
      }}>
        <path d={"M 17.664 0.253 C 18.077 0.62 18.114 1.252 17.747 1.664 L 7.081 13.664 C 6.891 13.878 6.619 14 6.333 14 C 6.048 14 5.776 13.878 5.586 13.664 L 0.253 7.664 C -0.114 7.252 -0.077 6.62 0.336 6.253 C 0.748 5.886 1.381 5.923 1.747 6.336 L 6.333 11.495 L 16.253 0.336 C 16.62 -0.077 17.252 -0.114 17.664 0.253 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesCheck;
