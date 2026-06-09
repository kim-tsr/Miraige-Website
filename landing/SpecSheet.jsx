/* eslint-disable react/prop-types */
/* SpecSheet - editorial spread replacing the generic Pitch section.
   Left: pull quote + the four steps. Right: the research sources card. */

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

const SOURCES = [
  {
    title: "LLM Agent Honeypot: Monitoring AI Hacking Agents in the Wild",
    venue: "Palisade Research · 2025",
    url: "https://arxiv.org/abs/2410.13919",
  },
  {
    title: "Cloak, Honey, Trap: Proactive Defenses Against LLM Agents",
    venue: "Ben-Gurion University · USENIX Security 2025",
    url: "https://www.usenix.org/conference/usenixsecurity25/presentation/ayzenshteyn",
  },
  {
    title: "HoneyTrap: Deceiving LLM Attackers with Resilient Multi-Agent Defense",
    venue: "SJTU, UIUC, Zhejiang · 2026",
    url: "https://arxiv.org/abs/2601.04034",
  },
  {
    title: "Bitter Harvest: Systematically Fingerprinting Honeypots at Internet Scale",
    venue: "University of Cambridge · USENIX WOOT 2018",
    url: "https://www.usenix.org/conference/woot18/presentation/vetterl",
  },
  {
    title: "Beyond Max Tokens: Stealthy Resource Amplification via Tool Calling Chains",
    venue: "NTU, UIUC, HKUST, SJTU · 2026",
    url: "https://arxiv.org/abs/2601.10955",
  },
  {
    title: "Overthinking Loops in Agents: A Structural Risk via MCP Tools",
    venue: "Yonsei, Ewha, HUFS · 2026",
    url: "https://arxiv.org/abs/2602.14798",
  },
  {
    title: "LoopTrap: Termination Poisoning Attacks on LLM Agents",
    venue: "Zhejiang University · 2026",
    url: "https://arxiv.org/abs/2605.05846",
  },
  {
    title: "ADA: Automated Moving Target Defense for AI Workloads in Kubernetes",
    venue: "Cisco et al. · 2025",
    url: "https://arxiv.org/abs/2505.23805",
  },
  {
    title: "Evaluating Language Models for Threat Detection in IoT Security Logs",
    venue: "GMV, UC3M · 2025",
    url: "https://arxiv.org/abs/2507.02390",
  },
];

const SourceRow = ({ title, venue, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{
    display: "block", textDecoration: "none",
    padding: "12px 0",
    borderBottom: "1px dashed var(--line-2)",
  }}>
    <div style={{
      fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 12.5,
      lineHeight: 1.45, color: "var(--fg-1)",
    }}>{title}</div>
    <div style={{
      marginTop: 4,
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.06em", color: "var(--fg-3)",
    }}>{venue} ↗</div>
  </a>
);

const SpecSheet = () => (
  <section id="architecture" className="mg-pad" style={{
    position: "relative",
    padding: "96px 48px 88px",
    maxWidth: 1280, margin: "0 auto",
  }}>
    <div className="mg-stack" style={{
      display: "grid", gridTemplateColumns: "1.6fr 1fr",
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

        <div style={{ marginTop: 32, maxWidth: 620 }}>
          <Step n="01" label="Détecter">
            Distinguer un agent IA d'un humain en quelques requêtes. Une cascade à trois
            niveaux s'en charge : des règles Sigma attrapent les signatures évidentes,
            un classifieur léger (rythme, entropie du User-Agent, couverture OWASP…)
            écarte le bruit, et un petit LLM (Llama-3.1-8B sur OVHcloud AI Endpoints) ne
            tranche que les cas ambigus. Fiable, rapide, quasi gratuit sur le trafic normal.
          </Step>
          <Step n="02" label="Décider">
            La détection ne donne jamais d'ordre directement. Le Sentinel émet un signal
            signé (protocole A2A, HMAC-SHA256) vers l'Orchestrateur, seul habilité à
            engager la riposte. Cette frontière est volontaire : même compromis, un
            Sentinel ne peut rien toucher de l'infrastructure. Chaque décision laisse
            une trace auditable.
          </Step>
          <Step n="03" label="Rerouter">
            Un seul PATCH L7 sur le load-balancer Octavia suffit. La session hostile,
            reconnue à son cookie signé, est basculée vers le{" "}
            <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>Ghost Shell</em>{" "}
            en 3 secondes environ, sans coupure visible. De son point de vue, rien ne
            s'est passé : mêmes adresses, mêmes réponses. Le trafic légitime, lui,
            n'est jamais touché.
          </Step>
          <Step n="04" label="Épuiser">
            Le Ghost Shell est un unique container borné qui génère à la volée
            l'illusion d'un SI complet : serveurs, fichiers, credentials, tout est
            procédural, sans fond. Pas de clone, pas de VM jetable. L'attaquant explore,
            raisonne, accumule du contexte et brûle son compute : sur notre campagne,
            il a dépensé 19,2 fois ce que le leurre nous a coûté.
          </Step>
        </div>
      </div>

      {/* sources card */}
      <aside style={{
        position: "relative", alignSelf: "center",
        padding: "32px 32px 24px",
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
          Sources · études
        </div>
        <p style={{
          margin: "0 0 8px", fontSize: 13, lineHeight: 1.55,
          color: "var(--fg-3)",
        }}>
          Mir[AI]ge s'appuie sur neuf travaux de recherche : honeypots et deception,
          épuisement de ressources des agents LLM, et moving target defense.
        </p>
        {SOURCES.map((s) => <SourceRow key={s.url} {...s}/>)}
      </aside>
    </div>
  </section>
);

Object.assign(window, { SpecSheet });
