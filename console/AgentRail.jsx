/* eslint-disable react/prop-types */
/* AgentRail — left sidebar listing the orchestrator + observer agents. */

const AGENT_ICONS = {
  orchestrator: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18"/>
      <rect x="7" y="7" width="10" height="10"/>
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>
    </svg>
  ),
  observer: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none"/>
    </svg>
  ),
  ghost: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 2">
      <rect x="3" y="3" width="18" height="18"/>
    </svg>
  ),
};

const AgentRow = ({ agent, selected, onSelect }) => {
  const kindColor = {
    orchestrator: "var(--mirage-300)",
    observer:     "var(--sand-100)",
    ghost:        "var(--signal-ghost)",
  }[agent.kind];

  const statusColor = {
    healthy: "var(--signal-ok)",
    busy:    "var(--mirage-300)",
    watch:   "var(--signal-watch)",
    alert:   "var(--signal-alert)",
  }[agent.status];

  return (
    <button
      onClick={() => onSelect(agent.id)}
      style={{
        background: selected ? "var(--bg-deep-panel)" : "transparent",
        border: 0, borderLeft: `2px solid ${selected ? "var(--mirage-500)" : "transparent"}`,
        cursor: "pointer", textAlign: "left",
        padding: "10px 14px 10px 12px",
        display: "grid", gridTemplateColumns: "16px 1fr 8px", alignItems: "center", gap: 10,
        color: selected ? "var(--sand-100)" : "var(--sand-300)",
      }}
    >
      <span style={{ color: kindColor }}>{AGENT_ICONS[agent.kind]}</span>
      <span style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 12.5,
            color: "inherit",
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}
        >
          {agent.name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-code)", fontSize: 10,
            color: "var(--sand-400)", marginTop: 2,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}
        >
          {agent.meta}
        </div>
      </span>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: statusColor }}/>
    </button>
  );
};

const AgentRail = ({ agents, selectedId, onSelect }) => {
  const groups = [
    { kind: "orchestrator", label: "Orchestrator" },
    { kind: "observer",     label: "Observers" },
    { kind: "ghost",        label: "Ghost Net" },
  ];
  return (
    <aside
      style={{
        width: 220, background: "var(--bg-deep-sunk)",
        borderRight: "1px solid var(--line-on-deep-2)",
        overflowY: "auto",
        display: "flex", flexDirection: "column",
      }}
    >
      {groups.map((g) => {
        const items = agents.filter((a) => a.kind === g.kind);
        if (!items.length) return null;
        return (
          <div key={g.kind} style={{ borderBottom: "1px solid var(--line-on-deep-1)" }}>
            <Eyebrow color="var(--sand-500)">
              <div style={{ padding: "16px 14px 8px" }}>
                {g.label} · {items.length}
              </div>
            </Eyebrow>
            {items.map((a) => (
              <AgentRow key={a.id} agent={a} selected={a.id === selectedId} onSelect={onSelect}/>
            ))}
          </div>
        );
      })}
      <div style={{ marginTop: "auto", padding: 14 }}>
        <Btn kind="ghost" onClick={() => {}}>+ Déployer un observer</Btn>
      </div>
    </aside>
  );
};

Object.assign(window, { AgentRail });
