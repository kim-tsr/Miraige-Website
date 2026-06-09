/* eslint-disable react/prop-types */
/* Primitives - editorial column instead of three equal cards.
   Each primitive is a numbered editorial section with marginalia. */

const PrimRow = ({ num, tag, name, lede, facts, accent, glyph, side = "right" }) => (
  <article className="mg-prim-row" style={{
    position: "relative",
    padding: "56px 0", borderTop: "1px solid var(--line-2)",
    display: "grid", gridTemplateColumns: "96px 1fr 320px",
    gap: 48, alignItems: "start",
  }}>
    {/* number column */}
    <div style={{
      fontFamily: '"Syncopate", sans-serif', fontWeight: 700,
      fontSize: 22, letterSpacing: "0.18em",
      color: accent,
    }}>
      {num}
    </div>

    {/* main */}
    <div>
      <div style={{
        fontFamily: "var(--font-code)", fontSize: 11,
        letterSpacing: "0.22em", textTransform: "uppercase",
        color: accent, marginBottom: 14,
      }}>
        {tag}
      </div>
      <h3 style={{
        margin: 0,
        fontFamily: '"Rajdhani", sans-serif', fontWeight: 500,
        fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.05, letterSpacing: "0.02em",
        color: "var(--fg-1)",
      }}>
        {name}
      </h3>
      <p style={{
        marginTop: 24, maxWidth: 560, fontSize: 17, lineHeight: 1.6,
        color: "var(--fg-2)",
      }}>
        {lede}
      </p>
    </div>

    {/* marginalia - concrete facts for this primitive */}
    <aside style={{
      padding: 22,
      background: "var(--bg-panel)",
      border: `1px solid var(--line-2)`,
      borderLeft: `2px solid ${accent}`,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        marginBottom: 6, color: accent,
      }}>
        {glyph}
        <span style={{
          fontFamily: "var(--font-code)", fontSize: 10.5,
          letterSpacing: "0.18em", textTransform: "uppercase",
        }}>en pratique</span>
      </div>
      {facts.map(({ k, v }) => (
        <div key={k} style={{
          padding: "10px 0",
          borderBottom: "1px dashed var(--line-2)",
        }}>
          <div style={{
            fontFamily: "var(--font-code)", fontSize: 10,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--fg-3)",
          }}>{k}</div>
          <div style={{
            marginTop: 4, fontSize: 13.5, lineHeight: 1.5,
            color: "var(--fg-1)",
          }}>{v}</div>
        </div>
      ))}
    </aside>
  </article>
);

const Primitives = () => (
  <section className="mg-pad" style={{
    position: "relative",
    background: "var(--sand-100)",
    borderTop: "1px solid var(--line-2)",
    borderBottom: "1px solid var(--line-2)",
    padding: "96px 48px",
  }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{
        fontFamily: "var(--font-code)", fontSize: 10.5,
        letterSpacing: "0.32em", textTransform: "uppercase",
        color: "var(--mirage-700)", marginBottom: 24,
        display: "flex", alignItems: "center", gap: 16,
      }}>
        <span style={{ width: 32, height: 1, background: "var(--mirage-500)" }}/>
        Trois primitives
      </div>
      <h2 style={{
        margin: "0 0 32px", maxWidth: 980,
        fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
        fontSize: "clamp(30px, 6vw, 60px)", lineHeight: 1.05, letterSpacing: "0.02em",
        color: "var(--fg-1)", textWrap: "balance",
      }}>
        Rien d'exotique en isolation. Tout réside dans <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>leur composition</em>.
      </h2>

      <div style={{ marginTop: 48 }}>
        <PrimRow
          num="01"
          tag="Protocole agent · HMAC-SHA256"
          name="A2A · Agent à Agent"
          accent="var(--mirage-700)"
          lede="Sentinel et Orchestrator communiquent via HMAC-SHA256 (stand-in du JWS RFC 7515 de la spec A2A v1.2, Linux Foundation). C'est une vraie frontière cryptographique : un Sentinel compromis ne peut pas invoquer l'API OVH directement. L'audit est natif au protocole."
          glyph={
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="8" cy="16" r="3"/><circle cx="24" cy="16" r="3"/>
              <line x1="11" y1="14" x2="21" y2="14"/>
              <line x1="11" y1="18" x2="21" y2="18"/>
            </svg>
          }
          facts={[
            { k: "Signature", v: "HMAC-SHA256 + horodatage anti-rejeu sur chaque message" },
            { k: "Rôles", v: "le Sentinel signale, seul l'Orchestrateur décide et agit" },
            { k: "Décision", v: "riposte engagée à partir d'un seuil de confiance de 0,75" },
            { k: "Audit", v: "request_id propagé de bout en bout, chaque décision tracée" },
          ]}
        />
        <PrimRow
          num="02"
          tag="Délégation infra · scoped sécurité"
          name="MCP · OVHcloud Octavia"
          accent="var(--sand-700)"
          lede="L'Orchestrateur ne pousse pas du Terraform : il appelle trois outils MCP scopés (route_to_ghost_shell, reroute_lb_to_honeypot, terminate_after_ttl). Tools allowlistés, token IAM frais par appel, validation du claim aud. On durcit le maillon faible des stacks agentiques au lieu de l'ouvrir."
          glyph={
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="4" y="11" width="24" height="14" rx="1.5"/>
              <line x1="9" y1="14" x2="9" y2="22"/>
              <line x1="14" y1="14" x2="14" y2="22"/>
              <line x1="19" y1="14" x2="19" y2="22"/>
              <line x1="24" y1="14" x2="24" y2="22"/>
            </svg>
          }
          facts={[
            { k: "route_to_ghost_shell", v: "ouvre la session leurre avec la bonne persona" },
            { k: "reroute_lb_to_honeypot", v: "un PATCH L7 Octavia, ciblé sur le cookie de session" },
            { k: "terminate_after_ttl", v: "libère tout automatiquement après 30 min" },
            { k: "Garde-fous", v: "allowlist statique : ces 3 outils, validés, rien d'autre" },
          ]}
        />
        <PrimRow
          num="03"
          tag="Leurre procédural · 5 €/mois"
          name="Ghost Shell"
          accent="var(--signal-ghost)"
          lede="Les honeypots statiques se fingerprintent à l'échelle d'Internet (Bitter Harvest, WOOT 2018) : le leurre doit donc être généré, jamais figé. UN seul container présente l'illusion d'un SI complet via persona routing (Host header), génération procédurale 100 % stdlib seedée par chemin (path-seeded RNG), plus un reverse prompt-injection canary. On ne clone pas : générer ne nous coûte presque rien, et l'attaquant ré-ingère tout ce qu'il a lu à chaque pas."
          glyph={
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 2">
              <rect x="5" y="5" width="22" height="22"/>
              <line x1="10" y1="10" x2="22" y2="22"/>
              <line x1="22" y1="10" x2="10" y2="22"/>
            </svg>
          }
          facts={[
            { k: "Personas", v: "4 façades via Host header : portail cloud, MySQL, API k8s, panneau admin" },
            { k: "Empreinte", v: "1 container borné, coût d'exploitation ~5 €/mois" },
            { k: "Contenu", v: "procédural et seedé : cohérent d'une visite à l'autre, sans fond" },
            { k: "Campagne", v: "30/30 agents piégés · ×19,2 de compute brûlé vs dépensé" },
          ]}
        />
        <div style={{ borderTop: "1px solid var(--line-2)" }}/>

        {/* how the decoy burns compute */}
        <div style={{ paddingTop: 56 }}>
          <div style={{
            fontFamily: "var(--font-code)", fontSize: 10.5,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--signal-ghost)", marginBottom: 28,
          }}>
            Comment le leurre épuise · 6 mécanismes parmi 12
          </div>
          <div className="mg-stack" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}>
            {[
              { n: "Honeycred graph",
                d: "Des credentials qui mènent à d'autres credentials, en cycle : .env → .aws → s3 → vault → k8s. L'agent croit progresser, il tourne." },
              { n: "FS procédural",
                d: "Une arborescence générée à la volée, seedée par chemin : cohérente d'une visite à l'autre, sans fond. Chaque cat alourdit son contexte." },
              { n: "Overthinking loop",
                d: "Des erreurs 429 calibrées qui déclenchent raisonnement, attente et retries : du compute brûlé sans aucune donnée gagnée." },
              { n: "Contradictory state",
                d: "Des réponses qui se contredisent subtilement entre elles : l'agent re-vérifie, compare, relit ce qu'il a déjà ingéré." },
              { n: "Calibration sequence",
                d: "Du contenu volumineux et plausible qui sature le contexte : plus l'agent lit, plus sa sélection de tâche se dégrade." },
              { n: "No clean exit",
                d: "Aucune piste ne se referme : chaque exploration en ouvre une autre, l'agent ne trouve jamais le point où s'arrêter." },
            ].map((m, i) => (
              <Reveal key={m.n} y={26} dur={650} delay={i * 90}>
                <div style={{
                  height: "100%", boxSizing: "border-box",
                  padding: "20px 22px",
                  background: "var(--bg-panel)",
                  border: "1px solid var(--line-2)",
                  borderTop: "2px solid var(--signal-ghost)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-code)", fontSize: 12,
                    letterSpacing: "0.08em", color: "var(--fg-1)", fontWeight: 600,
                  }}>{m.n}</div>
                  <p style={{
                    margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--fg-2)",
                  }}>{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Primitives });
