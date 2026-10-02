// figma node: 221:2525 usuario/user
export function UsuarioUser(_p = {}) {
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
      <svg width={18} height={20} viewBox="0 0 18 20" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 2,
        width: 18,
        height: 20,
      }}>
        <path d={"M 9 2 C 6.791 2 5 3.791 5 6 C 5 8.209 6.791 10 9 10 C 11.209 10 13 8.209 13 6 C 13 3.791 11.209 2 9 2 Z M 3 6 C 3 2.686 5.686 0 9 0 C 12.314 0 15 2.686 15 6 C 15 9.314 12.314 12 9 12 C 5.686 12 3 9.314 3 6 Z M 5 16 C 3.343 16 2 17.343 2 19 C 2 19.552 1.552 20 1 20 C 0.448 20 0 19.552 0 19 C 0 16.239 2.239 14 5 14 L 13 14 C 15.761 14 18 16.239 18 19 C 18 19.552 17.552 20 17 20 C 16.448 20 16 19.552 16 19 C 16 17.343 14.657 16 13 16 L 5 16 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default UsuarioUser;
