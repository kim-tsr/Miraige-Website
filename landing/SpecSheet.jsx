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

const Step = ({ n, label, children }) => (
  <div style={{
    display: "grid", gridTemplateColumns: "auto 1fr", gap: 18,
    padding: "18px 0", borderTop: "1px solid var(--line-2)",
    alignItems: "start",
  }}>
    <span style={{
      fontFamily: '"Syncopate", sans-serif', fontWeight: 700,
      fontSize: 13, letterSpacing: "0.1em", color: "var(--mirage-500)",
      paddingTop: 3,
    }}>{n}</span>
    <div>
      <div style={{
        fontFamily: "var(--font-code)", fontSize: 10.5,
        letterSpacing: "0.22em", textTransform: "uppercase",
        color: "var(--mirage-700)", marginBottom: 6,
      }}>{label}</div>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)" }}>
        {children}
      </p>
    </div>
  </div>
);

const SpecSheet = () => (
  <section id="architecture" className="mg-pad" style={{
    position: "relative",
    padding: "140px 48px 120px",
    maxWidth: 1280, margin: "0 auto",
  }}>
    {/* page number marginalia */}
    <div className="mg-marginalia" style={{
      position: "absolute", top: 60, right: 48,
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.22em", color: "var(--fg-3)",
    }}>
      § 01 · principe
    </div>

    <div className="mg-stack" style={{
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
          fontSize: "clamp(34px, 6.5vw, 72px)", lineHeight: 1.05, letterSpacing: "0.02em",
          color: "var(--fg-1)", textWrap: "balance",
        }}>
          L'attaquant voit<br/>
          <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>une ville</em>.
          {" "}Il n'y a<br/>
          pas de ville.
        </h2>
        <p style={{
          marginTop: 40, maxWidth: 580, fontSize: 17, lineHeight: 1.65,
          color: "var(--fg-2)",
        }}>
          Les attaques sont de plus en plus pilotées par des agents IA qui scannent et
          raisonnent seuls. L'idée de Mir[AI]ge tient en une phrase : au lieu de bloquer
          l'attaquant, on le laisse réussir <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>dans le vide</em>.
          Concrètement, quatre temps :
        </p>

        <div style={{ marginTop: 32, maxWidth: 600 }}>
          <Step n="01" label="Détecter">
            Une cascade à trois niveaux (règles Sigma, puis vélocité, puis un petit LLM
            Llama-3.1-8B sur OVHcloud AI Endpoints) distingue un agent IA d'un humain.
            Le LLM n'intervient que sur les cas ambigus, pour rester rapide.
          </Step>
          <Step n="02" label="Décider">
            Le Sentinel envoie un signal signé (protocole A2A, HMAC-SHA256) à
            l'Orchestrateur, qui décide d'engager. C'est une vraie frontière : un Sentinel
            compromis ne peut pas toucher l'infrastructure directement.
          </Step>
          <Step n="03" label="Rerouter">
            Un seul PATCH L7 sur le load-balancer Octavia bascule la session hostile,
            reconnue à son cookie signé, vers le <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>Ghost Shell</em>.
            Le trafic légitime n'est jamais touché. Le tout en environ 3 secondes.
          </Step>
          <Step n="04" label="Épuiser">
            Le Ghost Shell, un seul container, génère à la volée l'illusion d'un SI complet.
            Pas de clone, pas de VM jetable. L'attaquant explore, raisonne et brûle son
            compute : sur notre campagne, il en a brûlé ×19,2 ce qu'on dépense à le leurrer.
          </Step>
        </div>
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
        <SpecRow k="Cloud" v="OVHcloud · Octavia LB" mono/>
        <SpecRow k="Détection" v="cascade T0 → T2" mono/>
        <SpecRow k="Latence reroute" v="≈ 3 s · L7 PATCH" mono/>
        <SpecRow k="Protocole agent" v="A2A v1.2 · HMAC-SHA256" mono/>
        <SpecRow k="Tier 2" v="Llama-3.1-8B · AI Endpoints" mono/>
        <SpecRow k="Outils MCP" v="route_to_ghost_shell · reroute_lb · terminate_ttl" mono/>
        <SpecRow k="Ghost Shell" v="1 container procédural · ~50 MB" mono/>
        <SpecRow k="Coût défenseur" v="~5 €/mois · ~0,002 €/session" mono/>
        <SpecRow k="Audit" v="trace native par appel" mono/>
        <div style={{
          marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--line-3)",
          display: "flex", justifyContent: "space-between",
          fontFamily: "var(--font-code)", fontSize: 10.5,
          color: "var(--fg-3)", letterSpacing: "0.04em",
        }}>
          <span>stress-test · 2026-06-03</span>
          <span>classification : public</span>
        </div>
      </aside>
    </div>
  </section>
);

Object.assign(window, { SpecSheet });
