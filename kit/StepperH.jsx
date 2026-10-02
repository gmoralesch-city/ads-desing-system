import { StepperBaseH } from './StepperBaseH.jsx';

// figma node: 515:2490 Stepper - H
export function StepperH(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 445,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          zIndex: 5,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <StepperBaseH estado={"actual"} />}</div>
      <svg viewBox="0 -0.500 162.500 1" fill="none" style={{
        position: "relative",
        zIndex: 4,
        flexGrow: 1,
        alignSelf: "stretch",
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 162.5 0.5 L 163 0.5 L 163 -0.5 L 162.5 -0.5 L 162.5 0.5 Z M 0 0.5 L 162.5 0.5 L 162.5 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
          position: "relative",
          width: 40,
          zIndex: 3,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <StepperBaseH text1={"2"} estado={"pendiente"} />}</div>
      <svg viewBox="0 -0.500 162.500 1" fill="none" style={{
        position: "relative",
        zIndex: 2,
        flexGrow: 1,
        alignSelf: "stretch",
        color: "rgb(120,120,120)",
      }}>
        <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 162.5 0.5 L 163 0.5 L 163 -0.5 L 162.5 -0.5 L 162.5 0.5 Z M 0 0.5 L 162.5 0.5 L 162.5 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
          position: "relative",
          width: 40,
          zIndex: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <StepperBaseH text1={"3"} estado={"pendiente"} />}</div>
    </div>
  );
}
export default StepperH;
