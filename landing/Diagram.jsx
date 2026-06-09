/* eslint-disable react/prop-types */
const Diagram = () => (
  <section className="mg-pad" style={{
    padding: "0 48px 120px", maxWidth: 1280, margin: "0 auto",
  }}>
    <figure
      style={{
        margin: 0, background: "var(--bg-panel)",
        border: "1px solid var(--line-2)", padding: 32,
        boxShadow: "var(--elev-2)",
      }}
    >
      <img
        src="assets/architecture/ghost-net-diversion.svg"
        alt="Ghost Net diversion architecture"
        style={{ width: "100%", display: "block" }}
      />
      <figcaption style={{
        marginTop: 16, fontFamily: "var(--font-ui)", fontSize: 13,
        color: "var(--fg-3)", letterSpacing: "0.02em",
      }}>
        <b style={{
          fontFamily: "var(--font-code)", color: "var(--fg-2)",
          fontWeight: 500, letterSpacing: "0.04em",
        }}>Fig. 02</b> · diversion Ghost Net · le flux hostile est redirigé vers le Ghost Shell par un PATCH L7 sur Octavia · le flux légitime n'est jamais touché · aucun clone, le SI leurre est généré à la volée
      </figcaption>
    </figure>
  </section>
);

Object.assign(window, { Diagram });
