/* eslint-disable react/prop-types */
const Diagram = () => (
  <section className="mg-pad" style={{
    padding: "0 48px 88px", maxWidth: 1280, margin: "0 auto",
  }}>
    <figure
      className="mg-diagram"
      style={{
        margin: 0, background: "var(--bg-panel)",
        border: "1px solid var(--line-2)", padding: 32,
        boxShadow: "var(--elev-2)",
      }}
    >
      <img
        src="assets/architecture/ghost-net-diversion.svg"
        alt="Architecture complète Mir[AI]ge : détection, décision et reroutage L7 vers le Ghost Shell"
        style={{ width: "100%", display: "block" }}
      />
      <figcaption style={{
        marginTop: 16, fontFamily: "var(--font-ui)", fontSize: 13,
        color: "var(--fg-3)", letterSpacing: "0.02em",
      }}>
        <b style={{
          fontFamily: "var(--font-code)", color: "var(--fg-2)",
          fontWeight: 500, letterSpacing: "0.04em",
        }}>Fig. 02</b> · architecture complète · ① tout le trafic entre par le même load balancer, les logs alimentent le Sentinel ② la cascade T0→T2 détecte l'agent IA ③ l'alerte A2A signée part à l'Orchestrateur, seul à décider ④ un PATCH L7 cible le cookie de la session hostile ⑤ elle bascule vers le Ghost Shell sans s'en apercevoir · le flux légitime n'est jamais dérouté
      </figcaption>
    </figure>
  </section>
);

Object.assign(window, { Diagram });
