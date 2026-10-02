// figma node: 221:2815 objetos/image
export function ObjetosImage(_p = {}) {
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
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
      }}>
        <path d={"M 12.5 7 C 13.328 7 14 6.328 14 5.5 C 14 4.672 13.328 4 12.5 4 C 11.672 4 11 4.672 11 5.5 C 11 6.328 11.672 7 12.5 7 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 Z M 16 2 L 2 2 L 2 9.919 L 5.375 7.219 C 5.741 6.927 6.26 6.927 6.625 7.219 L 10.926 10.66 L 12.293 9.293 C 12.683 8.902 13.317 8.902 13.707 9.293 L 16 11.586 L 16 2 Z M 2 16 L 16 16 L 16 14.414 L 13 11.414 L 11.707 12.707 C 11.347 13.067 10.773 13.099 10.375 12.781 L 6 9.281 L 2 12.481 L 2 16 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ObjetosImage;
