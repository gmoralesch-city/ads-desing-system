// figma node: 221:2836 objetos/tag
export function ObjetosTag(_p = {}) {
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
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 9 0 C 9.265 0 9.52 0.105 9.707 0.293 L 19.707 10.293 C 20.098 10.683 20.098 11.317 19.707 11.707 L 11.707 19.707 C 11.317 20.098 10.683 20.098 10.293 19.707 L 0.293 9.707 C 0.105 9.52 0 9.265 0 9 L 0 1 Z M 2 2 L 2 8.586 L 11 17.586 L 17.586 11 L 8.586 2 L 2 2 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 7 5.5 C 7 6.328 6.328 7 5.5 7 C 4.672 7 4 6.328 4 5.5 C 4 4.672 4.672 4 5.5 4 C 6.328 4 7 4.672 7 5.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ObjetosTag;
