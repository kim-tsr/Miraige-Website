/* eslint-disable react/prop-types */
/* TopologyMap — the central network canvas. */

const NodeIcon = ({ kind, color, size = 36 }) => {
  const stroke = color || "currentColor";
  const sw = 1.4;
  const props = { width: size, height: size, viewBox: "0 0 32 32",
                  fill: "none", stroke, strokeWidth: sw };
  if (kind === "host") {
    return (
      <svg {...props}>
        <rect x="6" y="6" width="20" height="20"/>
        <line x1="6" y1="11" x2="26" y2="11"/>
        <circle cx="9" cy="8.5" r="0.7" fill={stroke}/>
        <circle cx="12" cy="8.5" r="0.7" fill={stroke}/>
      </svg>
    );
  }
  if (kind === "vrack") {
    return (
      <svg {...props}>
        <rect x="4" y="9" width="24" height="14" rx="1.5"/>
        {[8, 12, 16, 20, 24].map((x) => (
          <line key={x} x1={x} y1="13" x2={x} y2="19"/>
        ))}
      </svg>
    );
  }
  if (kind === "orchestrator") {
    return (
      <svg {...props}>
        <rect x="6" y="6" width="20" height="20"/>
        <rect x="10" y="10" width="12" height="12"/>
        <circle cx="16" cy="16" r="1.8" fill={stroke}/>
      </svg>
    );
  }
  if (kind === "observer") {
    return (
      <svg {...props}>
        <circle cx="16" cy="16" r="10"/>
        <circle cx="16" cy="16" r="2.2" fill={stroke}/>
      </svg>
    );
  }
  if (kind === "ghost") {
    return (
      <svg {...props} strokeDasharray="3 2">
        <rect x="6" y="6" width="20" height="20"/>
        <line x1="10" y1="10" x2="22" y2="22"/>
        <line x1="22" y1="10" x2="10" y2="22"/>
      </svg>
    );
  }
  return null;
};

const TopoNode = ({ x, y, kind, label, sub, color, glow, onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute", left: x, top: y,
      transform: "translate(-50%, -50%)",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
      cursor: onClick ? "pointer" : "default",
      color,
      filter: glow ? "drop-shadow(0 0 10px rgba(79,160,143,0.6))" : "none",
    }}
  >
    <NodeIcon kind={kind} color={color}/>
    <div style={{ fontFamily: "var(--font-ui)", fontWeight: 600,
                  fontSize: 11.5, color: "var(--sand-100)", whiteSpace: "nowrap" }}>
      {label}
    </div>
    {sub && (
      <div style={{ fontFamily: "var(--font-code)", fontSize: 10,
                    color: "var(--sand-400)", whiteSpace: "nowrap" }}>
        {sub}
      </div>
    )}
  </div>
);

// An edge is a rotated 0-height div (the line = its top border). `packets`
// renders small dots that travel along it (left 0 → 100% inside the rotated
// container = from → to). Pass color="transparent" to show packets without a
// second visible line over an existing one.
const Edge = ({ from, to, color = "var(--sand-400)", dashed, animated, packets = 0, packetColor, speed = 2.4 }) => {
  const dx = to.x - from.x, dy = to.y - from.y;
  const len = Math.hypot(dx, dy);
  const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
  const pc = packetColor || color;
  return (
    <div
      style={{
        position: "absolute", left: from.x, top: from.y,
        width: len, height: 0,
        borderTop: `1.4px ${dashed ? "dashed" : "solid"} ${color}`,
        transformOrigin: "0 0", transform: `rotate(${ang}deg)`,
        opacity: animated ? undefined : 0.9,
        animation: animated ? "mc-edge-pulse 1.8s var(--ease-shim) infinite" : "none",
      }}
    >
      {Array.from({ length: packets }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute", top: -3, marginLeft: -3,
            width: 6, height: 6, borderRadius: "50%",
            background: pc, boxShadow: `0 0 7px ${pc}`,
            animation: `mc-packet ${speed}s linear infinite`,
            animationDelay: `${((i * speed) / packets).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
};

const TopologyMap = ({ phase = "idle" }) => {
  const attackActive = phase !== "idle";
  const detecting = phase === "detect" || phase === "decide";
  const diverted = phase === "reroute" || phase === "engaged";
  const ghostLive = phase === "engaged";

  // Static-ish coordinates inside an absolutely-positioned canvas.
  // Keeping all positions here so the layout is data-driven.
  const N = {
    client:     { x: 80,  y: 140, kind: "host",         label: "client",          sub: "203.0.113.41", color: "var(--sand-100)" },
    attacker:   { x: 80,  y: 320, kind: "host",         label: "attaquant",       sub: "198.51.100.7", color: attackActive ? "var(--signal-alert)" : "var(--sand-400)" },
    vrack:      { x: 320, y: 230, kind: "vrack",        label: "octavia-lb-001",  sub: diverted ? "L7 → Ghost Net" : "load balancer · vrack 3201", color: diverted ? "var(--signal-ghost)" : "var(--sand-100)" },
    orch:       { x: 540, y: 230, kind: "orchestrator", label: "orchestrator-1",  sub: "A2A · live",    color: "var(--mirage-300)" },
    obs1:       { x: 540, y: 80,  kind: "observer",     label: "observer-1",      sub: "edge mirror",   color: "var(--sand-100)" },
    obs3:       { x: 720, y: 80,  kind: "observer",     label: "observer-3",      sub: detecting || diverted ? "score 0.93" : "idle", color: detecting || diverted ? "var(--signal-watch)" : "var(--sand-400)" },
    prod:       { x: 780, y: 230, kind: "vrack",        label: "vrack-3210",      sub: diverted ? "10.42.7.0/24 · intacte" : "10.42.7.0/24 · prod", color: diverted ? "var(--signal-ok)" : "var(--sand-100)" },
    ghost:      { x: 780, y: 400, kind: "ghost",        label: "gn-0094",         sub: ghostLive ? "Ghost Net · live" : "Ghost Net · armé", color: "var(--signal-ghost)" },
  };

  const statePill = !attackActive
    ? <StatusPill kind="mirage" pulse>A2A · 9 agents</StatusPill>
    : ghostLive
      ? <StatusPill kind="ghost" pulse>Trafic dérouté → Ghost Net</StatusPill>
      : diverted
        ? <StatusPill kind="ghost" pulse>L7 PATCH en cours…</StatusPill>
        : <StatusPill kind="alert" pulse>Attaque · {phase === "recon" ? "recon" : "détection"}</StatusPill>;

  return (
    <div
      style={{
        position: "relative", flex: 1, minHeight: 0,
        background: "var(--bg-deep-panel)",
        backgroundImage:
          "linear-gradient(var(--line-on-deep-1) 1px, transparent 1px), " +
          "linear-gradient(90deg, var(--line-on-deep-1) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        border: "1px solid var(--line-on-deep-2)",
        overflow: "hidden",
      }}
    >
      {/* eyebrow */}
      <div style={{ position: "absolute", left: 20, top: 16, zIndex: 4 }}>
        <Eyebrow color="var(--sand-400)">Topology · live · octavia LB → vrack 3210</Eyebrow>
      </div>
      <div style={{ position: "absolute", right: 20, top: 16, zIndex: 4 }}>
        {statePill}
      </div>

      {/* ── legitimate user: client → load balancer → real site (always) ── */}
      <Edge from={N.client} to={N.vrack} color="var(--signal-ok)" packets={2} speed={2.8}/>
      <Edge from={N.vrack}  to={N.prod}  color="var(--signal-ok)" packets={2} speed={2.8}/>

      {/* observer hookups */}
      <Edge from={N.obs1} to={N.orch} color="var(--sand-500)" dashed/>
      <Edge from={N.obs3} to={N.orch} color={detecting || diverted ? "var(--signal-watch)" : "var(--sand-500)"} dashed={!(detecting || diverted)} animated={detecting || diverted}/>

      {/* orchestrator → infra control plane */}
      <Edge from={N.orch} to={N.vrack} color="var(--mirage-500)"/>
      <Edge from={N.orch} to={N.prod}  color="var(--mirage-500)"/>
      {diverted && <Edge from={N.orch} to={N.ghost} color="var(--mirage-500)" dashed animated/>}

      {/* ── attacker ALWAYS enters through the load balancer ── */}
      {attackActive
        ? <Edge from={N.attacker} to={N.vrack} color="var(--signal-alert)" packets={3} speed={1.6}/>
        : <Edge from={N.attacker} to={N.vrack} color="var(--sand-500)" dashed/>}

      {/* ── the LB's routing decision ──
           before reroute: LB forwards the attacker to the REAL site (red dots
           over the green link). after reroute: same LB now forwards to the
           Ghost Net instead — no new attacker→ghost line, the path stays
           attacker → LB → destination. */}
      {attackActive && !diverted && (
        <Edge from={N.vrack} to={N.prod} color="transparent" packets={3} packetColor="var(--signal-alert)" speed={1.6}/>
      )}
      {diverted && (
        <Edge from={N.vrack} to={N.ghost} color="var(--signal-alert)" packets={3} speed={1.6}/>
      )}

      {/* nodes */}
      {Object.entries(N).map(([k, v]) => (
        <TopoNode key={k} {...v} glow={k === "orch" || (k === "ghost" && ghostLive)}/>
      ))}
    </div>
  );
};

Object.assign(window, { TopologyMap });
