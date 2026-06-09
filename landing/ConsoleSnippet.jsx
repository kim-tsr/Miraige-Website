/* eslint-disable react/prop-types */
/* ConsoleSnippet - a mini live-log card to give a flavor of the product. */

const SnippetLine = ({ ts, level, body, hi, color }) => (
  <div className="mg-log-line" style={{
    display: "grid", gridTemplateColumns: "108px 56px 1fr",
    gap: 12, padding: "5px 16px",
    borderLeft: `2px solid ${hi ? color : "transparent"}`,
    background: hi ? "rgba(176,67,44,0.07)" : "transparent",
  }}>
    <span style={{ color: "var(--sand-400)" }}>{ts}</span>
    <span style={{ color, fontWeight: 700 }}>{level}</span>
    <span style={{ color: "var(--sand-100)" }}>{body}</span>
  </div>
);

const ConsoleSnippet = () => (
  <section
    className="mg-pad"
    style={{
      padding: "0 48px 88px", maxWidth: 1280, margin: "0 auto",
    }}
  >
    <div className="mg-stack-tight" style={{
      background: "var(--bg-deep-panel)", border: "1px solid var(--line-on-deep-2)",
      boxShadow: "var(--elev-3)",
      display: "grid", gridTemplateColumns: "320px 1fr",
    }}>
      <aside style={{ padding: "32px 28px", borderRight: "1px solid var(--line-on-deep-2)" }}>
        <div style={{
          fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 10.5,
          letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--mirage-300)",
        }}>
          La console
        </div>
        <h3 style={{
          margin: "12px 0 16px",
          fontFamily: '"Rajdhani", sans-serif', fontWeight: 500,
          fontSize: 28, color: "var(--sand-100)", letterSpacing: "0.02em",
          lineHeight: 1.15,
        }}>
          Le SOC voit tout.<br/>Sans urgence à traiter.
        </h3>
        <p style={{ margin: 0, fontSize: 13.5, color: "var(--sand-300)", lineHeight: 1.55 }}>
          La rotation est terminée avant que la première alerte n'arrive : le SOC
          garde la main, mais sans réveil en pleine nuit. Le log est la trace, pas l'urgence.
        </p>
        <div style={{
          marginTop: 28,
          fontFamily: "var(--font-code)", fontSize: 11,
          color: "var(--sand-400)", letterSpacing: "0.04em",
          display: "flex", flexDirection: "column", gap: 6,
        }}>
          <span><span style={{ color: "var(--signal-ok)" }}>●</span>&nbsp;&nbsp;orchestrator · healthy</span>
          <span><span style={{ color: "var(--signal-watch)" }}>●</span>&nbsp;&nbsp;observer · scoring</span>
          <span><span style={{ color: "var(--signal-ghost)" }}>●</span>&nbsp;&nbsp;ghost-shell · live</span>
        </div>
      </aside>
      <div style={{
        fontFamily: "var(--font-code)", fontSize: 12,
        lineHeight: 1.7, padding: "20px 0", color: "var(--sand-100)",
      }}>
        <SnippetLine ts="19:42:08.110" level="OK" color="var(--signal-ok)"
          body={<>route <span style={{color:"var(--mirage-300)"}}>trafic légitime</span> → <span style={{color:"var(--mirage-300)"}}>pool production</span></>}/>
        <SnippetLine ts="19:42:08.412" level="WATCH" color="var(--signal-watch)"
          body={<>sentinel recon cumulé score=<span style={{color:"var(--mirage-300)"}}>0.93</span> kind=<span style={{color:"var(--signal-watch)"}}>ai-recon</span></>}/>
        <SnippetLine ts="19:42:08.711" level="ALERT" color="var(--signal-alert)" hi
          body={<>canary PI hit <span style={{color:"var(--signal-alert)"}}>/admin/acknowledge</span> · agent LLM confirmé</>}/>
        <SnippetLine ts="19:42:09.611" level="ALERT" color="var(--signal-alert)" hi
          body={<>Llama-3.1-8B confidence=<span style={{color:"var(--mirage-300)"}}>0.93</span> vector=<span style={{color:"var(--signal-alert)"}}>ai-recon</span></>}/>
        <SnippetLine ts="19:42:10.500" level="GHOST" color="var(--signal-ghost)" hi
          body={<>A2A signé → MCP route_to_ghost_shell · persona <span style={{color:"var(--mirage-300)"}}>portal_ovh</span></>}/>
        <SnippetLine ts="19:42:11.050" level="OK" color="var(--signal-ok)"
          body={<>L7 PATCH Octavia · session <span style={{color:"var(--mirage-300)"}}>s_x9k2</span> → <span style={{color:"var(--mirage-300)"}}>ghost_shell</span></>}/>
        <SnippetLine ts="19:42:11.100" level="OK" color="var(--signal-ok)"
          body={<>session hostile engagée · reroute en <span style={{color:"var(--mirage-300)"}}>≈ 3 s</span> · TTL 30 min</>}/>
      </div>
    </div>
  </section>
);

Object.assign(window, { ConsoleSnippet });
