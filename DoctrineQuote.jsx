/* eslint-disable react/prop-types */
/* DoctrineQuote — a single big pull quote on a heat-haze band. */

const DoctrineQuote = () => (
  <section
    style={{
      position: "relative", overflow: "hidden",
      background: "var(--sand-100)",
      borderTop: "1px solid var(--line-2)",
      borderBottom: "1px solid var(--line-2)",
      padding: "140px 48px",
    }}
  >
    <div style={{
      position: "absolute", left: 0, right: 0, top: "48%", height: 60,
      background: "linear-gradient(180deg, rgba(247,241,230,0) 0%, rgba(142,201,188,0.55) 50%, rgba(247,241,230,0) 100%)",
      filter: "blur(3px)",
      pointerEvents: "none",
    }}/>
    <div style={{
      position: "relative", maxWidth: 1080, margin: "0 auto",
      display: "grid", gridTemplateColumns: "auto 1fr", gap: 48, alignItems: "start",
    }}>
      <span style={{
        fontFamily: '"Rajdhani", sans-serif', fontWeight: 300,
        fontSize: 220, lineHeight: 0.85, color: "var(--mirage-300)",
        opacity: 0.6,
      }}>«</span>
      <blockquote style={{ margin: 0 }}>
        <p style={{
          margin: 0, fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
          fontSize: 76, lineHeight: 1.05, letterSpacing: "0.02em",
          color: "var(--fg-1)", textWrap: "balance",
        }}>
          L'attaquant n'a pas perdu.<br/>
          Il s'est <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>réveillé ailleurs</em> —<br/>
          au même endroit qu'avant.
        </p>
        <footer style={{
          marginTop: 40, display: "flex", alignItems: "center", gap: 16,
          fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 12,
          letterSpacing: "0.32em", textTransform: "uppercase",
          color: "var(--fg-3)",
        }}>
          <span style={{ width: 40, height: 1, background: "var(--sand-500)" }}/>
          Doctrine du mirage · v 1.0
        </footer>
      </blockquote>
    </div>
  </section>
);

Object.assign(window, { DoctrineQuote });
