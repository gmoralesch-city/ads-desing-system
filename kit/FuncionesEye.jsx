// figma node: 221:2638 funciones/eye
export function FuncionesEye(_p = {}) {
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
      <svg width={20} height={14} viewBox="0 0 20 14" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 5,
        width: 20,
        height: 14,
      }}>
        <path d={"M 13 7 C 13 8.657 11.657 10 10 10 C 8.343 10 7 8.657 7 7 C 7 5.343 8.343 4 10 4 C 11.657 4 13 5.343 13 7 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 19.894 6.553 C 17.736 2.236 13.903 0 10 0 C 6.097 0 2.264 2.236 0.106 6.553 C -0.035 6.834 -0.035 7.166 0.106 7.447 C 2.264 11.764 6.097 14 10 14 C 13.903 14 17.736 11.764 19.894 7.447 C 20.035 7.166 20.035 6.834 19.894 6.553 Z M 10 12 C 7.031 12 3.998 10.379 2.13 7 C 3.998 3.621 7.031 2 10 2 C 12.969 2 16.002 3.621 17.87 7 C 16.002 10.379 12.969 12 10 12 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesEye;
