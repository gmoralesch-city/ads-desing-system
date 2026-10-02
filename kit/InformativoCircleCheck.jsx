// figma node: 221:2545 informativo/circle-check
export function InformativoCircleCheck(_p = {}) {
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
        <path d={"M 10 2 C 5.582 2 2 5.582 2 10 C 2 14.418 5.582 18 10 18 C 14.418 18 18 14.418 18 10 C 18 5.582 14.418 2 10 2 Z M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z M 14.664 6.753 C 15.077 7.12 15.114 7.752 14.747 8.164 L 9.414 14.164 C 9.224 14.378 8.952 14.5 8.667 14.5 C 8.381 14.5 8.109 14.378 7.919 14.164 L 5.253 11.164 C 4.886 10.752 4.923 10.12 5.336 9.753 C 5.748 9.386 6.38 9.423 6.747 9.836 L 8.667 11.995 L 13.253 6.836 C 13.62 6.423 14.252 6.386 14.664 6.753 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default InformativoCircleCheck;
