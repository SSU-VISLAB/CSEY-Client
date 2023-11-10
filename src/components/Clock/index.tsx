import { CenterDot, FaceOutline } from './styles';

export const ClockIcon = ({ date, size, start, end }: { date: Date, size: number, start?: boolean, end?: boolean }) => {
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const isPM = h > 12;
  const margin = start ? `0 3px 0 8px` : end ? `0 8px 0 3px` : `0 3px`;
  return (
    <svg viewBox="-1136 -1136 2272 2272" width={size} height={size} filter={isPM ? 'brightness(80%)' : ''} style={{ margin, overflow: 'visible' }}>
      <defs>
        <path id="mark-5min" d="M -40,-1000 l 80,0 0,245 -80,0 z" />
        {/* <path id="mark-min" d="M -15,-1000 l 30,0 0,80  -30,0 z" /> */}
        <path id="hand-h" d="M -50,-650 l 100,0 10,890 -120,0 z" />
        <path id="hand-m" d="M -40,-950 l 80,0 10,1200 -100,0 z" />
        <g id="face-30d">
          <use href="#mark-5min" />
          {/* <use href="#mark-min" transform="rotate(06)" />
          <use href="#mark-min" transform="rotate(12)" />
          <use href="#mark-min" transform="rotate(18)" />
          <use href="#mark-min" transform="rotate(24)" /> */}
        </g>
        <g id="face-90d">
          <use href="#face-30d" />
          <use href="#face-30d" transform="rotate(30)" />
          <use href="#face-30d" transform="rotate(60)" />
        </g>
        <g id="face">
          <use href="#face-90d" />
          <use href="#face-90d" transform="rotate(90)" />
          <use href="#face-90d" transform="rotate(180)" />
          <use href="#face-90d" transform="rotate(270)" />
        </g>
      </defs>
      <FaceOutline id="face-outline" r="1104" />
      <use href="#face" id="face-use" />
      <use href="#hand-m" id="hand-m-use" transform={`rotate(${m * 6 + s / 10})`} />
      <use href="#hand-h" id="hand-h-use" fill='darkred' transform={`rotate(${(h >= 12 ? h - 12 : h) * 30 + m / 2 + s / 120})`} />
      <CenterDot id="center-dot" r="5" />
    </svg>
  );
};

export default ClockIcon;
