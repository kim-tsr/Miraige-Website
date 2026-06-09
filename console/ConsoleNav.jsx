/* eslint-disable react/prop-types */
/* ConsoleNav — top nav with wordmark, tabs, region clock, system pill. */

const ConsoleNav = ({ activeTab, onTab, clock, phase = "idle", phaseLabel }) => {
  const tabs = ["Console", "Incidents", "Ghost Net", "Agents", "Settings"];
  const pill = phase === "idle"
    ? { kind: "ok", text: "System nominal" }
    : phase === "engaged"
      ? { kind: "ghost", text: "Menace contenue" }
      : { kind: "alert", text: phaseLabel || "Incident" };
  return (
    <header
      style={{
        height: 56, padding: "0 24px",
        display: "grid", gridTemplateColumns: "auto auto 1fr auto auto",
        alignItems: "center", gap: 28,
        background: "var(--bg-deep-panel)",
        borderBottom: "1px solid var(--line-on-deep-2)",
      }}
    >
      <span
        style={{
          fontFamily: '"Syncopate", sans-serif', fontWeight: 700,
          fontSize: 16, letterSpacing: "0.18em", color: "var(--sand-100)",
        }}
      >
        MIR<span style={{ color: "var(--mirage-500)" }}>[</span>
        AI
        <span style={{ color: "var(--mirage-500)" }}>]</span>GE
      </span>

      <nav style={{ display: "flex", gap: 2 }}>
        {tabs.map((t) => {
          const active = t === activeTab;
          return (
            <button
              key={t}
              onClick={() => onTab && onTab(t)}
              style={{
                background: "transparent", border: 0, cursor: "pointer",
                padding: "10px 14px",
                fontFamily: "var(--font-ui)", fontWeight: 500,
                fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase",
                color: active ? "var(--sand-100)" : "var(--sand-400)",
                borderBottom: `2px solid ${active ? "var(--mirage-500)" : "transparent"}`,
                marginBottom: -2,
                transition: "color 120ms",
              }}
            >
              {t}
            </button>
          );
        })}
      </nav>

      <span/>

      <span
        style={{
          fontFamily: "var(--font-code)", fontSize: 11.5,
          color: "var(--sand-300)", letterSpacing: "0.02em",
        }}
      >
        {clock} UTC · OVH-GRA
      </span>

      <StatusPill kind={pill.kind} pulse>
        {pill.text}
      </StatusPill>
    </header>
  );
};

Object.assign(window, { ConsoleNav });
