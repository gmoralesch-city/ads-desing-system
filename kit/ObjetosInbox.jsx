// figma node: 221:2834 objetos/inbox
export function ObjetosInbox(_p = {}) {
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
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 Z M 2 11 L 2 16 L 16 16 L 16 11 L 13.721 11 L 12.949 13.316 C 12.813 13.725 12.43 14 12 14 L 6 14 C 5.57 14 5.187 13.725 5.051 13.316 L 4.279 11 L 2 11 Z M 16 9 L 16 2 L 2 2 L 2 9 L 4.279 9 C 5.14 9 5.904 9.551 6.177 10.368 L 6.721 12 L 11.279 12 L 11.823 10.368 C 12.096 9.551 12.86 9 13.721 9 L 16 9 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ObjetosInbox;
