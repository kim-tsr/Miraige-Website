/* eslint-disable react/prop-types */
/* Probleme - why this exists: the inverted economic asymmetry. */

const ProbStat = ({ v, unit, label, sub }) => (
  <div style={{
    borderLeft: "1px solid var(--line-2)", paddingLeft: 28,
  }}>
    <div style={{
      fontFamily: '"Titillium Web", sans-serif', fontWeight: 700,
      fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1, color: "var(--fg-1)",
      fontFeatureSettings: '"tnum" 1',
    }}>
      {v}<span style={{ fontSize: "0.55em", color: "var(--mirage-700)", marginLeft: 4 }}>{unit}</span>
    </div>
    <div style={{
      marginTop: 10, fontSize: 15, lineHeight: 1.5, color: "var(--fg-2)", maxWidth: 300,
    }}>{label}</div>
    <div style={{
      marginTop: 8, fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.06em", color: "var(--fg-3)",
    }}>{sub}</div>
  </div>
);

const Probleme = () => (
  <section className="mg-pad" style={{
    position: "relative",
    padding: "110px 48px 88px",
    maxWidth: 1280, margin: "0 auto",
  }}>
    <div style={{
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.32em", textTransform: "uppercase",
      color: "var(--mirage-700)", marginBottom: 32,
      display: "flex", alignItems: "center", gap: 16,
    }}>
      <span style={{ width: 32, height: 1, background: "var(--mirage-500)" }}/>
      Le problème
    </div>

    <h2 style={{
      margin: 0,
      fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
      fontSize: "clamp(34px, 6.5vw, 72px)", lineHeight: 1.05, letterSpacing: "0.02em",
      color: "var(--fg-1)", textWrap: "balance",
    }}>
      L'attaque s'est industrialisée à l'IA.<br/>
      <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>La défense, non.</em>
    </h2>

    <p style={{
      marginTop: 40, maxWidth: 720, fontSize: 17, lineHeight: 1.65,
      color: "var(--fg-2)",
    }}>
      Les attaquants ne sont plus seulement des humains : des agents IA scannent,
      raisonnent et s'adaptent seuls, 24 h/24, pour quelques centimes par session.
      En face, chaque alerte mobilise des humains. Bloquer ne suffit plus : l'attaquant
      bloqué réessaie gratuitement, le défenseur paie chaque round. Mir[AI]ge part de
      ce constat et inverse l'asymétrie : faire payer chaque minute d'attaque,
      en compute, à l'attaquant.
    </p>

    <div className="mg-stack" style={{
      marginTop: 64,
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 40,
    }}>
      <Reveal y={28} dur={700} delay={0}>
        <ProbStat
          v="≈ 1" unit="€"
          label="le coût d'une session d'attaque menée par un agent IA"
          sub="notre estimation · relevés d'usage API"
        />
      </Reveal>
      <Reveal y={28} dur={700} delay={120}>
        <ProbStat
          v="≈ 40" unit="€/h"
          label="un analyste SOC qui traite les alertes, faux positifs compris"
          sub="ordre de grandeur"
        />
      </Reveal>
      <Reveal y={28} dur={700} delay={240}>
        <ProbStat
          v="8,13" unit="M"
          label="tentatives captées en ~3 mois par un seul dispositif de recherche"
          sub="Palisade Research · arXiv 2410.13919"
        />
      </Reveal>
    </div>
  </section>
);

Object.assign(window, { Probleme });
