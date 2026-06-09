/* eslint-disable react/prop-types */
const Pitch = () => (
  <section
    id="architecture"
    style={{
      padding: "120px 48px",
      maxWidth: 1080, margin: "0 auto",
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-ui)", fontWeight: 500,
        fontSize: 11.5, letterSpacing: "0.32em", textTransform: "uppercase",
        color: "var(--mirage-700)", marginBottom: 24,
      }}
    >
      Le principe
    </div>
    <h2
      style={{
        margin: 0,
        fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
        fontSize: 56, lineHeight: 1.1, letterSpacing: "0.02em",
        color: "var(--fg-1)", textWrap: "balance",
      }}
    >
      L'attaquant voit une ville. <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>Il n'y a pas de ville.</em>
    </h2>
    <p
      style={{
        marginTop: 32, maxWidth: 720, fontSize: 18, lineHeight: 1.6,
        color: "var(--fg-2)",
      }}
    >
      Lorsqu'un Sentinel détecte un comportement déviant — cascade Suricata, heuristique de débit,
      canari prompt injection, puis Llama-3.1-8B via les <em>AI Endpoints OVHcloud</em> — l'Orchestrator
      appelle un serveur MCP scoped sécurité qui PATCH la règle L7 du Load Balancer Octavia. Le trafic
      attaquant bascule vers le Ghost Shell — UN seul container procédural à 5 €/mois.
    </p>
    <p style={{ marginTop: 16, maxWidth: 720, fontSize: 18, lineHeight: 1.6, color: "var(--fg-2)" }}>
      On ne clone pas le SI. On en présente l'illusion. Le LLM attaquant lit nos templates en O(n²)
      attention ; nous les générons en O(n) string ops. <em>Defense by attrition. Their LLM. Their bill.</em>
    </p>
    <p style={{ marginTop: 16, maxWidth: 720, fontSize: 16, lineHeight: 1.55, color: "var(--fg-3)" }}>
      Première implémentation open-source operational de <em>Cloak, Honey, Trap</em> (Ayzenshteyn et al.,
      USENIX Sec '25). Architecture hybride 4 couches : Anubis PoW · Caddy timing detector · Ghost Shell
      + CHeaT payloads · Markov tarpit fallback. Recalibré honnête : 5–50× sur 55 % du marché long tail.
    </p>
  </section>
);

Object.assign(window, { Pitch });
