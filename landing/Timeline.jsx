/* eslint-disable react/prop-types */
/* Timeline — the 2.84-second incident broken down second by second. */

const TLStep = ({ t, ms, title, body, color, alert }) => (
  <div
    style={{
      display: "grid", gridTemplateColumns: "110px 24px 1fr",
      gap: 24, alignItems: "start",
      padding: "24px 0", position: "relative",
    }}
  >
    <span
      style={{
        textAlign: "right", paddingTop: 2,
        fontFamily: "var(--font-code)", fontSize: 14,
        color: "var(--fg-2)",
      }}
    >
      <span style={{ color: "var(--fg-1)", fontWeight: 500 }}>{t}</span>
      <br/>
      <span style={{ color: "var(--fg-3)", fontSize: 12 }}>+ {ms}</span>
    </span>
    <span
      style={{
        position: "relative", display: "flex", justifyContent: "center", paddingTop: 6,
      }}
    >
      <span
        style={{
          width: 10, height: 10, borderRadius: "50%",
          background: color, border: "2px solid var(--bg)",
          boxShadow: alert ? "0 0 0 4px rgba(176,67,44,0.12)" : "none",
          zIndex: 2,
        }}
      />
    </span>
    <div>
      <h4
        style={{
          margin: 0, fontFamily: '"Rajdhani", sans-serif', fontWeight: 600,
          fontSize: 22, color: "var(--fg-1)", letterSpacing: "0.02em",
        }}
      >
        {title}
      </h4>
      <p style={{
        margin: "6px 0 0", fontSize: 14.5, lineHeight: 1.55,
        color: "var(--fg-2)", maxWidth: 540,
      }}>
        {body}
      </p>
    </div>
  </div>
);

const Timeline = () => (
  <section
    style={{
      padding: "120px 48px", maxWidth: 1080, margin: "0 auto",
    }}
  >
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
      <div style={{ position: "sticky", top: 100 }}>
        <div
          style={{
            fontFamily: "var(--font-ui)", fontWeight: 500,
            fontSize: 11.5, letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--mirage-700)", marginBottom: 18,
          }}
        >
          Anatomie d'un incident
        </div>
        <h2
          style={{
            margin: 0, fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
            fontSize: 56, lineHeight: 1.05, letterSpacing: "0.02em",
            color: "var(--fg-1)",
          }}
        >
          2,94&nbsp;s entre <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>détection</em> et <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>engagement</em>.
        </h2>
        <p style={{
          marginTop: 24, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)",
        }}>
          Mesuré sur l'incident <code style={{
            fontFamily: "var(--font-code)", color: "var(--mirage-700)", fontSize: 14,
          }}>inc-0094</code> · 3 juin 2026 · région OVHcloud GRA11 · attaquant LangChain ReAct.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <span
          style={{
            position: "absolute", left: "calc(110px + 24px + 12px - 1px)",
            top: 32, bottom: 32, width: 1,
            background: "var(--line-2)",
          }}
        />
        <TLStep
          t="19:42:08.110" ms="0 ms"
          title="État nominal"
          body="Le trafic légitime traverse Octavia LB. Sentinel ingère les logs · Tier 0 Suricata + Sigma · heuristiques de débit nominales."
          color="var(--signal-ok)"
        />
        <TLStep
          t="19:42:08.412" ms="312 ms"
          title="Heuristique débit + canari PI"
          body="47 requêtes anormales détectées en fenêtre 10s. L'endpoint /admin/acknowledge est appelé · le reverse prompt injection canary confirme un agent LLM (compliance >50% Palisade Research)."
          color="var(--signal-watch)"
        />
        <TLStep
          t="19:42:09.611" ms="1,5 s"
          title="Tier 2 · Llama-3.1-8B classifier"
          body="Via OVHcloud AI Endpoints. Confidence 0,93 · vecteur ai-recon · verdict JSON structuré. Le LLM ne classifie que les 5% de fenêtres ambiguës (cascade)."
          color="var(--signal-alert)" alert
        />
        <TLStep
          t="19:42:10.500" ms="2,0 s"
          title="A2A signé → Orchestrator"
          body="Signal HMAC-SHA256 vers Orchestrator (stand-in spec A2A v1.2 JWS). State machine transitionne IDLE → DETECTING → ASSIGNING. Session attaquant s_x9k2 allouée."
          color="var(--signal-ghost)"
        />
        <TLStep
          t="19:42:10.850" ms="2,74 s"
          title="MCP · route_to_ghost_shell"
          body="L'Orchestrator appelle un serveur MCP scoped sécurité (tools allowlistés, IAM fresh par appel). Session ghost initialisée avec persona portail OVH client."
          color="var(--signal-ghost)"
        />
        <TLStep
          t="19:42:11.050" ms="2,94 s"
          title="L7 PATCH Octavia"
          body="Règle HEADER X-Forwarded-For STARTS_WITH 198.51.100. → REDIRECT_TO_POOL=ghost_shell. Engagement actif. TTL 30 min. L'attaquant brûle 23× notre compute."
          color="var(--mirage-500)"
        />
      </div>
    </div>
  </section>
);

Object.assign(window, { Timeline });
