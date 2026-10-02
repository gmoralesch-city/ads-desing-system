// figma node: 221:2640 funciones/eye-off
export function FuncionesEyeOff(_p = {}) {
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
      <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 3,
        width: 20,
        height: 18,
      }}>
        <path d={"M 2.707 0.293 C 2.317 -0.098 1.683 -0.098 1.293 0.293 C 0.902 0.683 0.902 1.317 1.293 1.707 L 3.717 4.131 C 2.286 5.207 1.039 6.685 0.106 8.553 C -0.035 8.834 -0.035 9.166 0.106 9.447 C 2.264 13.764 6.097 16 10 16 C 11.555 16 13.099 15.645 14.531 14.945 L 17.293 17.707 C 17.683 18.098 18.317 18.098 18.707 17.707 C 19.098 17.317 19.098 16.683 18.707 16.293 L 2.707 0.293 Z M 13.014 13.428 C 12.034 13.811 11.013 14 10 14 C 7.031 14 3.998 12.379 2.13 9 C 2.947 7.521 3.988 6.379 5.148 5.563 L 7.292 7.707 C 7.105 8.098 7 8.537 7 9 C 7 10.657 8.343 12 10 12 C 10.463 12 10.902 11.895 11.293 11.708 L 13.014 13.428 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 16.552 10.895 C 17.035 10.34 17.478 9.709 17.87 9 C 16.002 5.621 12.969 4 10 4 C 9.888 4 9.776 4.002 9.664 4.007 L 7.879 2.223 C 8.577 2.075 9.288 2 10 2 C 13.903 2 17.736 4.236 19.894 8.553 C 20.035 8.834 20.035 9.166 19.894 9.447 C 19.35 10.535 18.7 11.491 17.969 12.312 L 16.552 10.895 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesEyeOff;
