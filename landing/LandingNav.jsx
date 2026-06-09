/* eslint-disable react/prop-types */
/* LandingNav — responsive: wordmark + contact + console redirect. */

const LandingNav = () => (
  <nav className="mg-pad" style={{
    position: "sticky", top: 0, zIndex: 50,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: 20,
    padding: "16px 48px",
    background: "rgba(247, 241, 230, 0.86)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid var(--line-1)",
  }}>
    <a href="#top" style={{
      fontFamily: '"Syncopate", sans-serif', fontWeight: 700,
      fontSize: 14, letterSpacing: "0.18em", color: "var(--sand-900)",
      textDecoration: "none",
    }}>
      MIR<span style={{ color: "var(--mirage-500)" }}>[</span>
      AI
      <span style={{ color: "var(--mirage-500)" }}>]</span>GE
    </a>
    <div style={{
      display: "flex", gap: 22, alignItems: "center",
      fontFamily: "var(--font-ui)", fontWeight: 500,
      fontSize: 11.5, letterSpacing: "0.22em", textTransform: "uppercase",
    }}>
      <a href="#invitation" style={{ color: "var(--fg-2)", textDecoration: "none" }}>Contact</a>
      <a href="/console/" style={{
        color: "var(--sand-50)", background: "var(--sand-900)",
        padding: "8px 14px", borderRadius: 4, textDecoration: "none",
      }}>Console —&gt;</a>
    </div>
  </nav>
);

Object.assign(window, { LandingNav });
