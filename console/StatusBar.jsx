/* eslint-disable react/prop-types */
/* StatusBar — bottom build / uptime / region strip. */

const StatusBar = () => (
  <footer
    style={{
      height: 28, padding: "0 16px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "var(--bg-deep-sunk)",
      borderTop: "1px solid var(--line-on-deep-2)",
      fontFamily: "var(--font-code)", fontSize: 11,
      color: "var(--sand-400)",
    }}
  >
    <span style={{ display: "flex", gap: 22 }}>
      <span>
        <span style={{ color: "var(--mirage-300)" }}>orchestrator-1</span>{" "}
        healthy · 7 agents
      </span>
      <span>Ghost Shell · <span style={{ color: "var(--signal-ghost)" }}>1 container</span></span>
      <span>sessions actives · <span style={{ color: "var(--signal-ghost)" }}>2</span></span>
    </span>
    <span style={{ display: "flex", gap: 22 }}>
      <span>uptime 14d 02:11</span>
      <span>build 7.2.0</span>
      <span>region eu-west-paris</span>
    </span>
  </footer>
);

Object.assign(window, { StatusBar });
