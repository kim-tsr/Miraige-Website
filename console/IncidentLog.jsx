/* eslint-disable react/prop-types */
/* IncidentLog — the live A2A / MCP event stream. */

const LEVEL_COLOR = {
  OK:    "var(--signal-ok)",
  WATCH: "var(--signal-watch)",
  ALERT: "var(--signal-alert)",
  GHOST: "var(--signal-ghost)",
};

const LogLine = ({ ts, level, body, highlight }) => (
  <div
    style={{
      display: "grid", gridTemplateColumns: "110px 56px 1fr",
      gap: 14, padding: "5px 16px",
      borderLeft: `2px solid ${highlight ? LEVEL_COLOR[level] : "transparent"}`,
      background: highlight ? "rgba(176,67,44,0.07)" : "transparent",
      color: "var(--sand-100)",
    }}
  >
    <span style={{ color: "var(--sand-400)" }}>{ts}</span>
    <span style={{ color: LEVEL_COLOR[level], fontWeight: 700 }}>{level}</span>
    <span>{body}</span>
  </div>
);

const IncidentLog = ({ entries }) => (
  <section
    style={{
      background: "var(--bg-deep-panel)",
      border: "1px solid var(--line-on-deep-2)",
      borderTop: 0,
      display: "flex", flexDirection: "column", minHeight: 0,
    }}
  >
    <header
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 16px", borderBottom: "1px solid var(--line-on-deep-1)",
      }}
    >
      <Eyebrow color="var(--sand-400)">Live log · A2A + MCP</Eyebrow>
      <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <TagChip color="var(--mirage-300)">tail</TagChip>
        <TagChip>OK · WATCH · ALERT · GHOST</TagChip>
      </span>
    </header>
    <div
      style={{
        flex: 1, minHeight: 0, overflowY: "auto",
        fontFamily: "var(--font-code)", fontSize: 12,
        lineHeight: 1.7, padding: "8px 0",
      }}
    >
      {entries.map((e, i) => (
        <LogLine key={i} {...e}/>
      ))}
    </div>
  </section>
);

Object.assign(window, { IncidentLog });
