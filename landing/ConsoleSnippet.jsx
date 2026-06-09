/* eslint-disable react/prop-types */
/* ConsoleSnippet — a mini live-log card to give a flavor of the product. */

const SnippetLine = ({ ts, level, body, hi, color }) => (
  <div style={{
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
    style={{
      padding: "0 48px 120px", maxWidth: 1280, margin: "0 auto",
    }}
  >
    <div style={{
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
          Le SOC voit tout.<br/>Et n'a rien à faire.
        </h3>
        <p style={{ margin: 0, fontSize: 13.5, color: "var(--sand-300)", lineHeight: 1.55 }}>
          Le log est la seule trace de l'incident. Aucun ticket ouvert, aucun humain
          réveillé — la rotation est terminée avant que la première alerte n'arrive.
        </p>
        <div style={{
          marginTop: 28,
          fontFamily: "var(--font-code)", fontSize: 11,
          color: "var(--sand-400)", letterSpacing: "0.04em",
          display: "flex", flexDirection: "column", gap: 6,
        }}>
          <span><span style={{ color: "var(--signal-ok)" }}>●</span>&nbsp;&nbsp;orchestrator-1 · healthy</span>
          <span><span style={{ color: "var(--signal-watch)" }}>●</span>&nbsp;&nbsp;observer-3 · scoring</span>
          <span><span style={{ color: "var(--signal-ghost)" }}>●</span>&nbsp;&nbsp;gn-0094 · live</span>
        </div>
      </aside>
      <div style={{
        fontFamily: "var(--font-code)", fontSize: 12,
        lineHeight: 1.7, padding: "20px 0", color: "var(--sand-100)",
      }}>
        <SnippetLine ts="19:42:08.110" level="OK" color="var(--signal-ok)"
          body={<>route <span style={{color:"var(--mirage-300)"}}>10.42.0.0/24</span> → <span style={{color:"var(--mirage-300)"}}>vrack-3201</span></>}/>
        <SnippetLine ts="19:42:08.412" level="WATCH" color="var(--signal-watch)"
          body={<>observer-3 score=<span style={{color:"var(--mirage-300)"}}>0.94</span> kind=<span style={{color:"var(--signal-watch)"}}>exfil</span></>}/>
        <SnippetLine ts="19:42:08.711" level="ALERT" color="var(--signal-alert)" hi
          body={<>match <span style={{color:"var(--signal-alert)"}}>mcp.exfil.v3</span> · src <span style={{color:"var(--mirage-300)"}}>198.51.100.7</span></>}/>
        <SnippetLine ts="19:42:09.002" level="GHOST" color="var(--signal-ghost)" hi
          body={<>clone <span style={{color:"var(--mirage-300)"}}>vrack-3201</span> → <span style={{color:"var(--mirage-300)"}}>gn-0094</span> · 2.4 GiB</>}/>
        <SnippetLine ts="19:42:10.640" level="GHOST" color="var(--signal-ghost)" hi
          body={<>divert <span style={{color:"var(--mirage-300)"}}>198.51.100.7</span> → <span style={{color:"var(--mirage-300)"}}>gn-0094</span></>}/>
        <SnippetLine ts="19:42:10.951" level="OK" color="var(--signal-ok)"
          body={<>rotate <span style={{color:"var(--mirage-300)"}}>10.42.0.0/24</span> → <span style={{color:"var(--mirage-300)"}}>10.42.7.0/24</span></>}/>
        <SnippetLine ts="19:42:11.005" level="OK" color="var(--signal-ok)"
          body={<>incident <span style={{color:"var(--mirage-300)"}}>inc-0094</span> contained · 2.84 s</>}/>
      </div>
    </div>
  </section>
);

Object.assign(window, { ConsoleSnippet });
