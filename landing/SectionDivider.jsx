/* eslint-disable react/prop-types */
/* SectionDivider - full-bleed heat-haze divider between major sections.
   Stripe-/Anthropic-style decorative band. */

const SectionDivider = ({ light = true }) => (
  <div style={{
    position: "relative", height: 72,
    background: light ? "var(--bg)" : "var(--sand-900)",
    overflow: "hidden",
    pointerEvents: "none",
  }}>
    <div style={{
      position: "absolute", left: "-10%", right: "-10%", top: "40%", height: 60,
      background:
        "radial-gradient(ellipse 60% 70% at 50% 50%, " +
          "rgba(142,201,188,0.36) 0%, " +
          "rgba(142,201,188,0.10) 35%, " +
          "rgba(142,201,188,0) 70%)",
      filter: "blur(18px)",
      transform: "translateY(-50%)",
    }}/>
    <div style={{
      position: "absolute", left: 0, right: 0, top: "50%", height: 1,
      background: "linear-gradient(90deg, " +
        "transparent 0%, " +
        "rgba(142,201,188,0.45) 30%, " +
        "rgba(142,201,188,0.70) 50%, " +
        "rgba(142,201,188,0.45) 70%, " +
        "transparent 100%)",
      filter: "blur(0.5px)",
    }}/>
  </div>
);

Object.assign(window, { SectionDivider });
