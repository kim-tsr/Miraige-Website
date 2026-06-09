/* eslint-disable react/prop-types */
/* LandingNav — minimal: wordmark + 2 utility links + the build stamp. */

const LandingNav = () => (
  <nav style={{
    position: "sticky", top: 0, zIndex: 50,
    display: "grid", gridTemplateColumns: "auto 1fr auto auto",
    alignItems: "center", gap: 28,
    padding: "20px 48px",
    background: "rgba(247, 241, 230, 0.86)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid var(--line-1)",
  }}>
    <span style={{
      fontFamily: '"Syncopate", sans-serif', fontWeight: 700,
      fontSize: 14, letterSpacing: "0.18em", color: "var(--sand-900)",
    }}>
      MIR<span style={{ color: "var(--mirage-500)" }}>[</span>
      AI
      <span style={{ color: "var(--mirage-500)" }}>]</span>GE
    </span>
    <span/>
    <span style={{
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.18em", textTransform: "uppercase",
      color: "var(--fg-3)",
    }}>
      v 0.1 · pré-démo
    </span>
    <div style={{
      display: "flex", gap: 22, alignItems: "center",
      fontFamily: "var(--font-ui)", fontWeight: 500,
      fontSize: 11.5, letterSpacing: "0.22em", textTransform: "uppercase",
    }}>
      <a href="#whitepaper" style={{ color: "var(--fg-2)", textDecoration: "none" }}>Whitepaper</a>
      <a href="/demo/" style={{
        color: "var(--sand-50)", background: "var(--sand-900)",
        padding: "8px 14px", borderRadius: 4, textDecoration: "none",
      }}>Démo live —&gt;</a>
    </div>
  </nav>
);

Object.assign(window, { LandingNav });
