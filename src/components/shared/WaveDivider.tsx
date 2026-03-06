interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

/**
 * Full-width SVG wave divider between sections.
 * Echoes the sweeping wave of the Movimento logo "m" letterform.
 */
export default function WaveDivider({ topColor, bottomColor, flip = false }: WaveDividerProps) {
  return (
    <div style={{ backgroundColor: topColor, lineHeight: 0, fontSize: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
        style={{
          display: "block",
          width: "100%",
          height: "clamp(32px, 4vw, 60px)",
          transform: flip ? "scaleY(-1)" : undefined,
        }}
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
