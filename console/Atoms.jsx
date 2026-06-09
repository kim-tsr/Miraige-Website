/* eslint-disable react/prop-types */
/* Atoms - reusable bits shared across mission_control screens. */

const StatusPill = ({ kind = "ok", children, pulse = false }) => {
  const colors = {
    ok:     "var(--signal-ok)",
    watch:  "var(--signal-watch)",
    alert:  "var(--signal-alert)",
    ghost:  "var(--signal-ghost)",
    mirage: "var(--mirage-300)",
  };
  const c = colors[kind] || colors.ok;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontFamily: 'var(--font-ui)', fontWeight: 500,
        fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase",
        color: c, padding: "3px 10px",
        borderRadius: 999, border: `1px solid ${c}`,
      }}
    >
      <span
        style={{
          width: 6, height: 6, borderRadius: "50%", background: c,
          animation: pulse ? "mc-blip 1.8s var(--ease-shim) infinite" : "none",
        }}
      />
      {children}
    </span>
  );
};

const TagChip = ({ children, color }) => (
  <span
    style={{
      display: "inline-flex", alignItems: "center",
      fontFamily: 'var(--font-code)', fontSize: 10.5,
      color: color || "var(--sand-300)",
      padding: "2px 7px",
      border: `1px solid ${color ? color : "var(--line-on-deep-2)"}`,
      borderRadius: 2,
    }}
  >
    {children}
  </span>
);

const Btn = ({ kind = "primary", onClick, children, disabled }) => {
  const base = {
    fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 12.5,
    padding: "7px 14px", borderRadius: 4, cursor: disabled ? "not-allowed" : "pointer",
    border: "1px solid transparent",
    letterSpacing: "0.02em",
    transition: "all 120ms var(--ease-out)",
    opacity: disabled ? 0.5 : 1,
  };
  const styles = {
    primary: { background: "var(--sand-100)", color: "var(--sand-900)" },
    mirage:  { background: "var(--mirage-500)", color: "#fff",
               boxShadow: "0 0 0 1px var(--mirage-500), 0 0 18px -4px rgba(79,160,143,0.5)" },
    ghost:   { background: "transparent", color: "var(--sand-100)",
               borderColor: "var(--line-on-deep-3)" },
    danger:  { background: "transparent", color: "var(--signal-alert)",
               borderColor: "var(--signal-alert)" },
  };
  return <button style={{ ...base, ...styles[kind] }} onClick={onClick} disabled={disabled}>{children}</button>;
};

const Sparkline = ({ values, color = "var(--sand-300)", height = 24 }) => {
  const max = Math.max(...values), min = Math.min(...values);
  const range = max - min || 1;
  const W = 200;
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * W;
      const y = height - ((v - min) / range) * (height - 2) - 1;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${height}`} width="100%" height={height} fill="none">
      <polyline points={pts} stroke={color} strokeWidth="1.2"/>
    </svg>
  );
};

const Eyebrow = ({ children, color }) => (
  <div
    style={{
      fontFamily: "var(--font-ui)", fontWeight: 500,
      fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase",
      color: color || "var(--sand-400)",
    }}
  >
    {children}
  </div>
);

Object.assign(window, { StatusPill, TagChip, Btn, Sparkline, Eyebrow });
