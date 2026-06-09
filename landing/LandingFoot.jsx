/* eslint-disable react/prop-types */
const LandingFoot = () => (
  <footer
    style={{
      background: "var(--sand-900)",
      borderTop: "1px solid var(--line-on-deep-2)",
      padding: "32px 48px",
      color: "var(--sand-400)",
      fontFamily: "var(--font-code)", fontSize: 11.5,
    }}
  >
    <div
      style={{
        maxWidth: 1080, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontFamily: '"Syncopate", sans-serif', fontWeight: 700,
          fontSize: 14, letterSpacing: "0.18em", color: "var(--sand-200)",
        }}
      >
        MIR<span style={{ color: "var(--mirage-500)" }}>[</span>
        AI
        <span style={{ color: "var(--mirage-500)" }}>]</span>GE
      </span>
      <span>hackathon@miraige.dev · OVHcloud · GRA region · v 0.1</span>
    </div>
  </footer>
);

Object.assign(window, { LandingFoot });
