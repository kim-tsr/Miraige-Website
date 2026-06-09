/* eslint-disable react/prop-types */
/* Primitives — editorial column instead of three equal cards.
   Each primitive is a numbered editorial section with marginalia. */

const PrimRow = ({ num, tag, name, lede, mcp, accent, glyph, side = "right" }) => (
  <article style={{
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
        fontSize: 52, lineHeight: 1.05, letterSpacing: "0.02em",
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

    {/* marginalia — a small "lab note" card */}
    <aside style={{
      padding: 22,
      background: "var(--bg-panel)",
      border: `1px solid var(--line-2)`,
      borderLeft: `2px solid ${accent}`,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        marginBottom: 14, color: accent,
      }}>
        {glyph}
        <span style={{
          fontFamily: "var(--font-code)", fontSize: 10.5,
          letterSpacing: "0.18em", textTransform: "uppercase",
        }}>note de bord</span>
      </div>
      <pre style={{
        margin: 0,
        fontFamily: '"Fira Code", monospace', fontSize: 11.5,
        lineHeight: 1.7, color: "var(--fg-2)",
        whiteSpace: "pre-wrap",
        fontVariantLigatures: "contextual common-ligatures",
      }}>{mcp}</pre>
    </aside>
  </article>
);

const Primitives = () => (
  <section style={{
    position: "relative",
    background: "var(--sand-100)",
    borderTop: "1px solid var(--line-2)",
    borderBottom: "1px solid var(--line-2)",
    padding: "120px 48px",
  }}>
    <div style={{
      position: "absolute", top: 60, right: 48,
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.22em", color: "var(--fg-3)",
    }}>
      § 02 · primitives
    </div>

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
        fontSize: 60, lineHeight: 1.05, letterSpacing: "0.02em",
        color: "var(--fg-1)", textWrap: "balance",
      }}>
        Rien d'exotique en isolation. Tout réside dans <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>leur composition</em>.
      </h2>

      <div style={{ marginTop: 48 }}>
        <PrimRow
          num="01"
          tag="Protocole agent · HMAC-SHA256"
          name="A2A — Agent à Agent"
          accent="var(--mirage-700)"
          lede="Sentinel et Orchestrator communiquent via HMAC-SHA256 (stand-in JWS RFC 7515 spec A2A v1.2 Linux Foundation). Frontière cryptographique réelle — un Sentinel compromis ne peut invoquer l'API OVH directement. Audit natif au protocole."
          glyph={
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="8" cy="16" r="3"/><circle cx="24" cy="16" r="3"/>
              <line x1="11" y1="14" x2="21" y2="14"/>
              <line x1="11" y1="18" x2="21" y2="18"/>
            </svg>
          }
          mcp={`sentinel-3 → orchestrator-1\n  signal {\n    src: 198.51.100.7,\n    confidence: 0.93,\n    vector: "ai-recon",\n    sig: hmac_sha256(...)\n  }\n  → ack 142 ms`}
        />
        <PrimRow
          num="02"
          tag="Délégation infra · scoped sécurité"
          name="MCP — OVHcloud Octavia"
          accent="var(--sand-700)"
          lede="Mir[AI]ge complète le MCP officiel OVHcloud (labs.ovhcloud.com) comme consumer cyber-spécifique. Tools allowlistés, IAM token fresh par appel, validation aud claim JWT — adresse les 30+ CVEs MCP de 2026."
          glyph={
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="4" y="11" width="24" height="14" rx="1.5"/>
              <line x1="9" y1="14" x2="9" y2="22"/>
              <line x1="14" y1="14" x2="14" y2="22"/>
              <line x1="19" y1="14" x2="19" y2="22"/>
              <line x1="24" y1="14" x2="24" y2="22"/>
            </svg>
          }
          mcp={`tool: "route_to_ghost_shell"\n  input: {\n    session_id: "s_x9k2",\n    persona: "portal_ovh",\n    lb_rule: "xff_starts_with"\n  }\n→ ack 1.05 s · Octavia L7 PATCH`}
        />
        <PrimRow
          num="03"
          tag="Leurre procédural · 5 €/mois"
          name="Ghost Shell"
          accent="var(--signal-ghost)"
          lede="UN seul container présente l'illusion d'un SI complet via persona routing (Host header). Path-seeded RNG + Mimesis 30 MB/s par vCPU + reverse PI canary. On ne clone pas — on génère en O(n), l'attaquant lit en O(n²)."
          glyph={
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 2">
              <rect x="5" y="5" width="22" height="22"/>
              <line x1="10" y1="10" x2="22" y2="22"/>
              <line x1="22" y1="10" x2="10" y2="22"/>
            </svg>
          }
          mcp={`session s_x9k2 engaged\n  persona: portal_ovh\n  netns: isolated\n  tls_jarm: distinct\n  attacker_tokens: 28 400\n  our_cost: 0.002 €\n→ asymmetric_ratio: 23×`}
        />
        <div style={{ borderTop: "1px solid var(--line-2)" }}/>
      </div>
    </div>
  </section>
);

Object.assign(window, { Primitives });
