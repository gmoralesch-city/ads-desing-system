// figma node: 221:2823 objetos/clipboard
export function ObjetosClipboard(_p = {}) {
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
        <path d={"M 4 1 C 4 0.448 4.448 0 5 0 L 11 0 C 11.552 0 12 0.448 12 1 L 14 1 C 15.105 1 16 1.895 16 3 L 16 18 C 16 19.105 15.105 20 14 20 L 2 20 C 0.895 20 0 19.105 0 18 L 0 3 C 0 1.895 0.895 1 2 1 L 4 1 Z M 4 3 L 2 3 L 2 18 L 14 18 L 14 3 L 12 3 L 12 4 C 12 4.552 11.552 5 11 5 L 5 5 C 4.448 5 4 4.552 4 4 L 4 3 Z M 10 2 L 6 2 L 6 3 L 10 3 L 10 2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ObjetosClipboard;
