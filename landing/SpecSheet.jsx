/* eslint-disable react/prop-types */
/* SpecSheet — editorial spread replacing the generic Pitch section.
   Left: massive editorial pull quote. Right: a tight specifications table. */

const SpecRow = ({ k, v, mono }) => (
  <div style={{
    display: "grid", gridTemplateColumns: "1fr auto",
    gap: 20, padding: "10px 0",
    borderBottom: "1px dashed var(--line-2)",
  }}>
    <span style={{
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.20em", textTransform: "uppercase",
      color: "var(--fg-3)",
    }}>{k}</span>
    <span style={{
      fontFamily: mono ? '"JetBrains Mono", monospace' : 'var(--font-ui)',
      fontSize: 12.5, color: "var(--fg-1)", fontWeight: 500,
      textAlign: "right",
      fontFeatureSettings: '"tnum" 1',
    }}>{v}</span>
  </div>
);

const SpecSheet = () => (
  <section id="architecture" style={{
    position: "relative",
    padding: "140px 48px 120px",
    maxWidth: 1280, margin: "0 auto",
  }}>
    {/* page number marginalia */}
    <div style={{
      position: "absolute", top: 60, right: 48,
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.22em", color: "var(--fg-3)",
    }}>
      § 01 · principe
    </div>

    <div style={{
      display: "grid", gridTemplateColumns: "1.7fr 1fr",
      gap: 96, alignItems: "start",
    }}>
      <div>
        <div style={{
          fontFamily: "var(--font-code)", fontSize: 10.5,
          letterSpacing: "0.32em", textTransform: "uppercase",
          color: "var(--mirage-700)", marginBottom: 32,
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <span style={{ width: 32, height: 1, background: "var(--mirage-500)" }}/>
          Le principe
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
          fontSize: 72, lineHeight: 1.05, letterSpacing: "0.02em",
          color: "var(--fg-1)", textWrap: "balance",
        }}>
          L'attaquant voit<br/>
          <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>une ville</em>.
          {" "}Il n'y a<br/>
          pas de ville.
        </h2>
        <p style={{
          marginTop: 40, maxWidth: 580, fontSize: 17, lineHeight: 1.6,
          color: "var(--fg-2)",
        }}>
          Lorsqu'un observer détecte un comportement déviant, l'orchestrateur appelle un
          serveur <em>MCP OVHcloud</em> pour cloner la vRack ciblée. Le clone est alimenté
          de données synthétiques cohérentes ; le flux hostile y est redirigé par
          réécriture de routage transparente, tandis que les flux légitimes basculent
          vers un nouveau sous-réseau. L'attaquant continue d'opérer — sur une carte
          vide. La production a déjà changé d'adresse.
        </p>
      </div>

      {/* specifications card */}
      <aside style={{
        position: "relative",
        padding: "32px 32px 28px",
        background: "var(--bg-panel)",
        border: "1px solid var(--line-2)",
        boxShadow: "var(--elev-1)",
      }}>
        <div style={{
          position: "absolute", top: -12, left: 32,
          background: "var(--bg)", padding: "0 10px",
          fontFamily: "var(--font-code)", fontSize: 10.5,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--mirage-700)",
        }}>
          Specifications
        </div>
        <SpecRow k="Architecture" v="MTD · A2A · MCP"/>
        <SpecRow k="Cloud" v="OVHcloud · vRack" mono/>
        <SpecRow k="Régions cibles" v="GRA · SBG · RBX" mono/>
        <SpecRow k="Latence SLO" v="< 5 000 ms" mono/>
        <SpecRow k="Latence mesurée" v="2 840 ms" mono/>
        <SpecRow k="Protocole agent" v="A2A · JSON-RPC 2.0" mono/>
        <SpecRow k="Outils MCP" v="cloud.vrack.* · cloud.ip.* · cloud.snapshot.*" mono/>
        <SpecRow k="Signatures" v="187 · v 2026-05" mono/>
        <SpecRow k="Pool Ghost Net" v="32 vRacks préchauffés" mono/>
        <SpecRow k="Audit" v="JSON-LD · trace native" mono/>
        <div style={{
          marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--line-3)",
          display: "flex", justifyContent: "space-between",
          fontFamily: "var(--font-code)", fontSize: 10.5,
          color: "var(--fg-3)", letterSpacing: "0.04em",
        }}>
          <span>v 0.1 · 2026-05-28</span>
          <span>classification — public</span>
        </div>
      </aside>
    </div>
  </section>
);

Object.assign(window, { SpecSheet });
