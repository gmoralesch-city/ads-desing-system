// figma node: 638:7813 usuario/cedula
export function UsuarioCedula(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 17 0 L 3 0 C 2.204 0 1.441 0.316 0.879 0.879 C 0.316 1.441 0 2.204 0 3 L 0 17 C 0 17.796 0.316 18.559 0.879 19.121 C 1.441 19.684 2.204 20 3 20 L 17 20 C 17.796 20 18.559 19.684 19.121 19.121 C 19.684 18.559 20 17.796 20 17 L 20 3 C 20 2.204 19.684 1.441 19.121 0.879 C 18.559 0.316 17.796 0 17 0 Z M 18 17 C 18 17.265 17.895 17.52 17.707 17.707 C 17.52 17.895 17.265 18 17 18 L 3 18 C 2.735 18 2.48 17.895 2.293 17.707 C 2.105 17.52 2 17.265 2 17 L 2 3 C 2 2.735 2.105 2.48 2.293 2.293 C 2.48 2.105 2.735 2 3 2 L 17 2 C 17.265 2 17.52 2.105 17.707 2.293 C 17.895 2.48 18 2.735 18 3 L 18 17 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={10} height={12} viewBox="0 0 10 12" fill="none" style={{
        position: "absolute",
        left: 7,
        top: 6,
        width: 10,
        height: 12,
        color: "rgb(180,180,180)",
      }}>
        <path d={"M 5 0 C 3.094 0 1.543 1.549 1.543 3.469 C 1.543 5.388 3.094 6.938 5 6.938 C 6.906 6.938 8.457 5.388 8.457 3.469 C 8.457 1.549 6.906 0 5 0 Z M 3.313 3.469 C 3.313 2.54 4.065 1.781 5 1.781 C 5.935 1.781 6.687 2.54 6.687 3.469 C 6.687 4.397 5.935 5.156 5 5.156 C 4.065 5.156 3.313 4.397 3.313 3.469 Z M 2.942 8 C 1.321 8 0 9.365 0 11 C 0 11.495 0.515 12 1 12 C 1.662 12 1.837 11.525 2.017 11.038 C 2.207 10.526 2.401 10 3.173 10 L 6.827 10 C 7.599 10 7.793 10.526 7.983 11.038 C 8.163 11.525 8.338 12 9 12 C 9.485 12 10 11.495 10 11 C 10 9.365 8.679 8 7.058 8 L 2.942 8 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default UsuarioCedula;
