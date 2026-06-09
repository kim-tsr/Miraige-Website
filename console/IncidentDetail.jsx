/* eslint-disable react/prop-types */
/* IncidentDetail — right rail inspector. */

const KeyVal = ({ k, v, mono = true }) => (
  <div
    style={{
      display: "grid", gridTemplateColumns: "94px 1fr", gap: 12,
      padding: "6px 0", borderBottom: "1px dashed var(--line-on-deep-1)",
      fontSize: 12,
    }}
  >
    <span
      style={{
        fontFamily: "var(--font-ui)", fontWeight: 500,
        fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
        color: "var(--sand-500)",
      }}
    >
      {k}
    </span>
    <span
      style={{
        color: "var(--sand-100)",
        fontFamily: mono ? "var(--font-code)" : "var(--font-ui)",
      }}
    >
      {v}
    </span>
  </div>
);

const IncidentDetail = ({ incident, ghostNetActive, onEngageGhost, onClose }) => (
  <aside
    style={{
      width: 340,
      background: "var(--bg-deep-sunk)",
      borderLeft: "1px solid var(--line-on-deep-2)",
      display: "flex", flexDirection: "column",
      overflowY: "auto",
    }}
  >
    <header
      style={{
        padding: "16px 18px",
        borderBottom: "1px solid var(--line-on-deep-2)",
        background: "var(--bg-deep-panel)",
      }}
    >
      <Eyebrow color="var(--sand-400)">Incident en cours</Eyebrow>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8 }}>
        <span
          style={{
            fontFamily: '"Rajdhani", sans-serif', fontWeight: 600,
            fontSize: 26, color: "var(--sand-100)", letterSpacing: "0.02em",
          }}
        >
          {incident.id}
        </span>
        <StatusPill kind={ghostNetActive ? "ghost" : "alert"} pulse={!ghostNetActive}>
          {ghostNetActive ? "Contenu" : "Confirmé"}
        </StatusPill>
      </div>
      <div
        style={{
          marginTop: 8, fontFamily: "var(--font-ui)", fontSize: 12.5,
          color: "var(--sand-300)", lineHeight: 1.45,
        }}
      >
        {ghostNetActive
          ? "Trafic attaquant rerouté vers Ghost Shell session s_x9k2. Production intacte."
          : "Cascade T0+T1+T2 confirmée · canari PI hit. En attente engagement."}
      </div>
    </header>

    <div style={{ padding: "12px 18px" }}>
      <KeyVal k="vector"    v="ai-recon"/>
      <KeyVal k="source"    v="198.51.100.7"/>
      <KeyVal k="agent"     v="LangChain ReAct"/>
      <KeyVal k="confidence" v="0.93 (Llama-3.1-8B)"/>
      <KeyVal k="cible"     v="portal.mirage.cloud"/>
      <KeyVal k="détecté"   v="19:42:08 UTC"/>
      <KeyVal k="latence"   v={ghostNetActive ? "≈ 3 s" : "en cours"}/>
      <KeyVal k="session"   v={ghostNetActive ? "s_x9k2 · portal_ovh" : "·"}/>
      <KeyVal k="ratio"     v={ghostNetActive ? "×19,2 (campagne)" : "·"}/>
    </div>

    <div
      style={{ padding: "12px 18px 16px",
               borderTop: "1px solid var(--line-on-deep-1)" }}
    >
      <Eyebrow color="var(--sand-400)">
        <div style={{ marginBottom: 10 }}>Tokens attaquant burned (cumul)</div>
      </Eyebrow>
      <div
        style={{
          fontFamily: '"Titillium Web", sans-serif', fontWeight: 600,
          fontSize: 28, color: "var(--sand-100)",
          fontFeatureSettings: '"tnum" 1',
        }}
      >
        28&nbsp;400 <span style={{ fontSize: 12, color: "var(--sand-400)" }}>tokens</span>
      </div>
      <Sparkline
        values={[10, 18, 24, 35, 48, 62, 78, 95, 118, 142, 168, 195]}
        color="var(--mirage-300)"
        height={32}
      />
      <div style={{
        marginTop: 8, fontFamily: "var(--font-code)", fontSize: 10.5,
        color: "var(--sand-400)", letterSpacing: "0.04em",
      }}>
        notre coût · 0,002 € · tiktoken o200k_base · GPT-4o pricing
      </div>
    </div>

    <div
      style={{
        marginTop: "auto", padding: 18,
        borderTop: "1px solid var(--line-on-deep-2)",
        background: "var(--bg-deep-panel)",
        display: "flex", flexDirection: "column", gap: 10,
      }}
    >
      {!ghostNetActive ? (
        <Btn kind="mirage" onClick={onEngageGhost}>Engager Ghost Shell</Btn>
      ) : (
        <Btn kind="ghost" onClick={onClose}>Clôturer l'incident</Btn>
      )}
      <Btn kind="ghost" onClick={() => {}}>Voir le rapport complet</Btn>
    </div>
  </aside>
);

Object.assign(window, { IncidentDetail });
