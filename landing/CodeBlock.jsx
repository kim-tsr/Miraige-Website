/* eslint-disable react/prop-types */
/* CodeBlock - actual MCP tool call signature with Fira Code ligatures. */

const T = ({ c, children }) => <span style={{ color: c }}>{children}</span>;

const CodeBlock = () => (
  <section
    id="code"
    className="mg-pad"
    style={{
      padding: "96px 48px",
      background: "var(--sand-50)",
      borderTop: "1px solid var(--line-2)",
    }}
  >
    <div className="mg-stack" style={{ maxWidth: 1080, margin: "0 auto",
                  display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
      <div>
        <div
          style={{
            fontFamily: "var(--font-ui)", fontWeight: 500,
            fontSize: 11.5, letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--mirage-700)", marginBottom: 18,
          }}
        >
          Sous le capot
        </div>
        <h2
          style={{
            margin: 0, fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
            fontSize: "clamp(26px, 4.5vw, 44px)", lineHeight: 1.05, letterSpacing: "0.02em",
            color: "var(--fg-1)",
          }}
        >
          Un appel MCP.<br/>
          Pas trois mille lignes de YAML.
        </h2>
        <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)" }}>
          L'Orchestrateur n'écrit pas du Terraform : il appelle trois outils MCP scopés,
          <code style={{ fontFamily: "var(--font-code)", color: "var(--mirage-700)", fontSize: 14, marginLeft: 4 }}>route_to_ghost_shell</code>,
          <code style={{ fontFamily: "var(--font-code)", color: "var(--mirage-700)", fontSize: 14, marginLeft: 4 }}>reroute_lb_to_honeypot</code> et
          <code style={{ fontFamily: "var(--font-code)", color: "var(--mirage-700)", fontSize: 14, marginLeft: 4 }}>terminate_after_ttl</code>.
          Chaque appel est unitaire, audité, idempotent, et ne peut rien faire d'autre que ce
          qu'il dit.
        </p>
      </div>

      <pre
        style={{
          margin: 0, padding: "24px 28px",
          background: "var(--bg-deep-panel)", color: "var(--sand-100)",
          fontFamily: '"Fira Code", monospace', fontSize: 13,
          lineHeight: 1.7, fontVariantLigatures: "contextual common-ligatures",
          borderRadius: 4, border: "1px solid var(--line-on-deep-2)",
          overflowX: "auto", whiteSpace: "pre",
        }}
      >
        <T c="var(--sand-500)">{`// orchestrator → ovh-mcp · A2A signé HMAC\n`}</T>
        <T c="var(--signal-watch)">tool</T>: <T c="var(--mirage-300)">"reroute_lb_to_honeypot"</T>{`\n`}
        <T c="var(--signal-watch)">input</T>: {`{\n`}
        {`  `}<T c="var(--sand-100)">session</T>: <T c="var(--mirage-300)">"s_x9k2"</T>,{`\n`}
        {`  `}<T c="var(--sand-100)">match</T>:   {`{ `}<T c="var(--sand-100)">cookie</T>: <T c="var(--mirage-300)">"mg_session"</T>, <T c="var(--sand-100)">eq</T>: <T c="var(--mirage-300)">"s_x9k2"</T>{` }`},{`\n`}
        {`  `}<T c="var(--sand-100)">pool</T>:    <T c="var(--mirage-300)">"ghost_shell"</T>,{`\n`}
        {`  `}<T c="var(--sand-100)">ttl</T>:     <T c="var(--mirage-300)">1800</T>{`\n`}
        {`}\n\n`}
        <T c="var(--sand-500)">{`// ovh-mcp → orchestrator · 1 PATCH L7 Octavia\n`}</T>
        <T c="var(--signal-watch)">result</T>: {`{ `}
        <T c="var(--sand-100)">ok</T>: <T c="var(--signal-ok)">true</T>,
        {` `}<T c="var(--sand-100)">rule_id</T>: <T c="var(--mirage-300)">"l7-4290"</T>,
        {` `}<T c="var(--sand-100)">applied_ms</T>: <T c="var(--mirage-300)">312</T> {`}\n\n`}
        <T c="var(--sand-500)">{`// la session hostile lit désormais un SI qui n'existe pas\n`}</T>
        <T c="var(--signal-watch)">next</T> <T c="var(--mirage-500)">{`=>`}</T> [
        <T c="var(--mirage-300)">"observe_ttps"</T>, <T c="var(--mirage-300)">"measure_burn"</T>]
      </pre>
    </div>
  </section>
);

Object.assign(window, { CodeBlock });
