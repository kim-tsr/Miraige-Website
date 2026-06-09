/* eslint-disable react/prop-types */
/* IncidentDetail — right rail inspector + demo driver (launch → reroute). */

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

/* Compact 5-step progress: recon → detect → decide → reroute → engaged */
const PhaseStepper = ({ order, current }) => {
  const idx = order.indexOf(current);
  return (
    <div style={{ display: "flex", gap: 5, marginTop: 12 }}>
      {order.map((p, i) => {
        const done = idx >= i && idx >= 0;
        const active = idx === i;
        const c = current === "engaged"
          ? "var(--signal-ghost)"
          : "var(--signal-watch)";
        return (
          <div key={p} style={{ flex: 1, height: 4, borderRadius: 2, position: "relative",
                                 background: done ? c : "var(--line-on-deep-2)",
                                 boxShadow: active ? `0 0 8px -1px ${c}` : "none",
                                 transition: "background 200ms" }}/>
        );
      })}
    </div>
  );
};

const fmtInt = (n) => Math.round(n).toLocaleString("fr-FR").replace(/ /g, " ");

const IncidentDetail = ({ incident, phase, phaseOrder, phaseLabel, metrics, spark, running, onLaunch, onReset }) => {
  const idle = phase === "idle";
  const engaged = phase === "engaged";
  const confidence = metrics.confidence > 0 ? metrics.confidence.toFixed(2) : "—";
  const headline = idle
    ? "Aucun incident. Lancez la démo pour simuler une attaque agentique en temps réel."
    : engaged
      ? "Trafic attaquant rerouté vers Ghost Shell s_x9k2. Production intacte, compute brûlé."
      : phase === "reroute"
        ? "Reroutage L7 Octavia en cours · bascule du flux hostile vers le leurre."
        : "Cascade T0 → T1 → T2 en cours · scoring et canari PI.";

  return (
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
        <Eyebrow color="var(--sand-400)">{idle ? "Aucun incident" : "Incident en cours"}</Eyebrow>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8 }}>
          <span
            style={{
              fontFamily: '"Rajdhani", sans-serif', fontWeight: 600,
              fontSize: 26, color: "var(--sand-100)", letterSpacing: "0.02em",
            }}
          >
            {idle ? "—" : incident.id}
          </span>
          <StatusPill kind={engaged ? "ghost" : idle ? "mirage" : "alert"} pulse={!idle && !engaged}>
            {idle ? "En veille" : engaged ? "Contenu" : phaseLabel[phase]}
          </StatusPill>
        </div>
        <div
          style={{
            marginTop: 8, fontFamily: "var(--font-ui)", fontSize: 12.5,
            color: "var(--sand-300)", lineHeight: 1.45,
          }}
        >
          {headline}
        </div>
        {!idle && <PhaseStepper order={phaseOrder} current={phase}/>}
      </header>

      <div style={{ padding: "12px 18px" }}>
        <KeyVal k="vector"     v={idle ? "—" : "ai-recon"}/>
        <KeyVal k="source"     v="198.51.100.7"/>
        <KeyVal k="agent"      v={idle ? "—" : "LangChain ReAct"}/>
        <KeyVal k="req / 10s"  v={<span style={{ color: metrics.rps > 20 ? "var(--signal-watch)" : "var(--sand-100)" }}>{fmtInt(metrics.rps)}</span>}/>
        <KeyVal k="confidence" v={<span style={{ color: metrics.confidence >= 0.9 ? "var(--signal-alert)" : "var(--sand-100)" }}>{confidence}{confidence !== "—" ? " · Llama-3.1-8B" : ""}</span>}/>
        <KeyVal k="latence"    v={metrics.latency}/>
        <KeyVal k="session"    v={metrics.session}/>
        <KeyVal k="ratio"      v={engaged
          ? <span style={{ color: "var(--signal-ghost)" }}>{metrics.ratio.toFixed(1)}× <span style={{ color: "var(--sand-400)" }}>(honnête 5–50×)</span></span>
          : "—"}/>
      </div>

      <div
        style={{ padding: "12px 18px 16px",
                 borderTop: "1px solid var(--line-on-deep-1)" }}
      >
        <Eyebrow color="var(--sand-400)">
          <div style={{ marginBottom: 10 }}>Tokens attaquant brûlés (cumul)</div>
        </Eyebrow>
        <div
          style={{
            fontFamily: '"Titillium Web", sans-serif', fontWeight: 600,
            fontSize: 28, color: metrics.tokens > 0 ? "var(--mirage-300)" : "var(--sand-400)",
            fontFeatureSettings: '"tnum" 1',
          }}
        >
          {fmtInt(metrics.tokens)} <span style={{ fontSize: 12, color: "var(--sand-400)" }}>tokens</span>
        </div>
        <Sparkline
          values={spark && spark.length > 1 ? spark : [1, 1]}
          color="var(--mirage-300)"
          height={32}
        />
        <div style={{
          marginTop: 8, fontFamily: "var(--font-code)", fontSize: 10.5,
          color: "var(--sand-400)", letterSpacing: "0.04em",
        }}>
          notre coût ≈ {(0.002 + (metrics.tokens / 1e6) * 5).toFixed(3)} € · tiktoken o200k_base
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
        {idle && <Btn kind="mirage" onClick={onLaunch}>▶ Lancer l'attaque (démo)</Btn>}
        {running && <Btn kind="ghost" disabled>● {phaseLabel[phase]}…</Btn>}
        {engaged && <Btn kind="mirage" onClick={onLaunch}>↻ Rejouer la démo</Btn>}
        {!idle && <Btn kind="ghost" onClick={onReset}>Réinitialiser</Btn>}
      </div>
    </aside>
  );
};

Object.assign(window, { IncidentDetail });
