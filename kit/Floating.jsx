import { FuncionesCloudDownload } from './FuncionesCloudDownload.jsx';

// figma node: 457:2021 Floating
export function Floating(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      borderRadius: 80,
      backgroundColor: "rgb(0,174,239)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 24,
          top: 24,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <FuncionesCloudDownload />}</div>
    </div>
  );
}
export default Floating;
