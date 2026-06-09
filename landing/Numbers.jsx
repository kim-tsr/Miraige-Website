/* eslint-disable react/prop-types */
const NumberCard = ({ value, unit, label, detail }) => (
  <div
    style={{
      display: "flex", flexDirection: "column", gap: 8,
      borderTop: "1px solid var(--line-2)", paddingTop: 24,
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-ui)", fontWeight: 500,
        fontSize: 10.5, letterSpacing: "0.32em", textTransform: "uppercase",
        color: "var(--mirage-700)",
      }}
    >
      {label}
    </div>
    <div
      style={{
        display: "flex", alignItems: "baseline", gap: 6,
        fontFamily: '"Titillium Web", sans-serif', fontWeight: 600,
        fontFeatureSettings: '"tnum" 1',
      }}
    >
      <span style={{ fontSize: 88, lineHeight: 1, color: "var(--fg-1)" }}>{value}</span>
      <span style={{ fontSize: 22, color: "var(--fg-2)" }}>{unit}</span>
    </div>
    <div
      style={{
        fontFamily: "var(--font-ui)", fontSize: 13, lineHeight: 1.45,
        color: "var(--fg-3)", maxWidth: 280,
      }}
    >
      {detail}
    </div>
  </div>
);

const Numbers = () => (
  <section
    id="demo"
    style={{
      padding: "0 48px 120px", maxWidth: 1280, margin: "0 auto",
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-ui)", fontWeight: 500,
        fontSize: 11.5, letterSpacing: "0.32em", textTransform: "uppercase",
        color: "var(--mirage-700)", marginBottom: 24,
      }}
    >
      Asymétrie économique honnête
    </div>
    <h3 style={{
      margin: "0 0 64px",
      fontFamily: '"Rajdhani", sans-serif', fontWeight: 500,
      fontSize: 40, lineHeight: 1.1, color: "var(--fg-1)",
    }}>
      Trois chiffres recalibrés post stress-test.
    </h3>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 56 }}>
      <NumberCard
        value="5–50"
        unit="×"
        label="asymmetric ratio"
        detail="coût attaquant LLM ÷ notre coût · fourchette honnête sur 55% du marché long tail naïf (LangChain ReAct raw, Pentest-R1)"
      />
      <NumberCard
        value="2,94"
        unit="s"
        label="détection → reroute"
        detail="cascade Suricata + heuristique débit + canari PI + LLM Tier 2 + A2A signé + L7 PATCH Octavia"
      />
      <NumberCard
        value="5"
        unit="€/mois"
        label="ghost shell · partagé"
        detail="1 container procédural ~50 MB RAM présente l'illusion d'un SI complet · scaling N customers via session isolation"
      />
    </div>
  </section>
);

Object.assign(window, { Numbers });
