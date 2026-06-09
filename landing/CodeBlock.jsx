/* eslint-disable react/prop-types */
/* CodeBlock — actual MCP tool call signature with Fira Code ligatures. */

const T = ({ c, children }) => <span style={{ color: c }}>{children}</span>;

const CodeBlock = () => (
  <section
    id="whitepaper"
    style={{
      padding: "120px 48px",
      background: "var(--sand-50)",
      borderTop: "1px solid var(--line-2)",
    }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto",
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
            fontSize: 44, lineHeight: 1.05, letterSpacing: "0.02em",
            color: "var(--fg-1)",
          }}
        >
          Un appel MCP.<br/>
          Pas trois mille lignes de YAML.
        </h2>
        <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)" }}>
          L'orchestrateur n'écrit pas du Terraform — il appelle des outils. Le serveur MCP
          OVHcloud expose <code style={{ fontFamily: "var(--font-code)", color: "var(--mirage-700)", fontSize: 14 }}>cloud.vrack.*</code>,
          <code style={{ fontFamily: "var(--font-code)", color: "var(--mirage-700)", fontSize: 14, marginLeft: 4 }}>cloud.ip.failover</code>, et
          <code style={{ fontFamily: "var(--font-code)", color: "var(--mirage-700)", fontSize: 14, marginLeft: 4 }}>cloud.snapshot.*</code> —
          chaque opération est une transaction unitaire, auditée, idempotente.
        </p>
        <a
          href="#"
          style={{
            display: "inline-block", marginTop: 24,
            fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13,
            color: "var(--sand-900)", textDecoration: "none",
            borderBottom: "1px solid var(--sand-900)",
            paddingBottom: 2, letterSpacing: "0.04em",
          }}
        >
          Lire la spécification complète (PDF) →
        </a>
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
        <T c="var(--sand-500)">{`// orchestrator-1 → ovh-mcp · t+812 ms\n`}</T>
        <T c="var(--signal-watch)">tool</T>: <T c="var(--mirage-300)">"cloud.vrack.clone"</T>{`\n`}
        <T c="var(--signal-watch)">input</T>: {`{\n`}
        {`  `}<T c="var(--sand-100)">src</T>:    <T c="var(--mirage-300)">"vrack-3201"</T>,{`\n`}
        {`  `}<T c="var(--sand-100)">into</T>:   <T c="var(--mirage-300)">"gn-0094"</T>,{`\n`}
        {`  `}<T c="var(--sand-100)">vlan</T>:   {`{ `}<T c="var(--sand-100)">from</T>: <T c="var(--mirage-300)">4087</T>, <T c="var(--sand-100)">to</T>: <T c="var(--mirage-300)">4290</T>{` }`},{`\n`}
        {`  `}<T c="var(--sand-100)">synth</T>:  {`{ `}<T c="var(--sand-100)">seed</T>: <T c="var(--mirage-300)">"inc-0094"</T>, <T c="var(--sand-100)">size</T>: <T c="var(--mirage-300)">"2.4 GiB"</T>{` }`}{`\n`}
        {`}\n\n`}
        <T c="var(--sand-500)">{`// ovh-mcp → orchestrator-1 · t+1.92 s\n`}</T>
        <T c="var(--signal-watch)">result</T>: {`{ `}
        <T c="var(--sand-100)">ok</T>: <T c="var(--signal-ok)">true</T>,
        {` `}<T c="var(--sand-100)">vlan</T>: <T c="var(--mirage-300)">4290</T>,
        {` `}<T c="var(--sand-100)">cidr</T>: <T c="var(--mirage-300)">"10.42.94.0/24"</T> {`}\n\n`}
        <T c="var(--sand-500)">{`// next: divert + rotate\n`}</T>
        <T c="var(--signal-watch)">if</T> (result.ok) <T c="var(--mirage-500)">{`=>`}</T> [
        <T c="var(--mirage-300)">"net.divert"</T>, <T c="var(--mirage-300)">"net.rotate"</T>]
      </pre>
    </div>
  </section>
);

Object.assign(window, { CodeBlock });
