/* eslint-disable react/prop-types */
/* FieldReadings - animated count-up readings, instrument-panel layout. */

const { useState: frUseState, useEffect: frUseEffect, useRef: frUseRef } = React;

/* easeOutCubic for the count-up */
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/* Reading values can be numeric strings like "2,84" or "11" or "187".
   We parse the trailing number, animate it from 0, and preserve formatting. */
const CountUp = ({ value, dur = 1400 }) => {
  const ref = frUseRef(null);
  const [shown, setShown] = frUseState(0); // 0..1
  const [played, setPlayed] = frUseState(false);

  frUseEffect(() => {
    if (!ref.current || played) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !played) {
          setPlayed(true);
          const t0 = performance.now();
          const tick = (t) => {
            const u = Math.min(1, (t - t0) / dur);
            setShown(easeOut(u));
            if (u < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      }
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [played, dur]);

  // Parse "2,84" → integer 284 with 2 decimals; "11" → 11 with 0 decimals.
  // FR style with comma decimal.
  const sNum = String(value).trim();
  const m = sNum.match(/^(\d+)(?:[,.](\d+))?$/);
  if (!m) return <span ref={ref}>{value}</span>;
  const intp = m[1], frac = m[2] || "";
  const N = parseInt(intp, 10) + (frac ? parseInt(frac, 10) / Math.pow(10, frac.length) : 0);
  const current = N * shown;
  const formatted = frac.length
    ? current.toFixed(frac.length).replace(".", ",")
    : Math.round(current).toLocaleString("fr-FR").replace(/\s/g, " ");
  return <span ref={ref}>{formatted}</span>;
};

const Reading = ({ k, v, unit, sub, accent = "var(--fg-1)" }) => (
  <div style={{
    borderTop: "1px solid var(--line-2)",
    paddingTop: 16, paddingBottom: 8,
  }}>
    <div style={{
      fontFamily: "var(--font-code)", fontSize: 10,
      letterSpacing: "0.22em", textTransform: "uppercase",
      color: "var(--fg-3)", marginBottom: 10, minHeight: 28,
    }}>{k}</div>
    <div style={{
      display: "flex", alignItems: "baseline", gap: 4,
      fontFamily: '"Titillium Web", sans-serif', fontWeight: 600,
      fontFeatureSettings: '"tnum" 1',
      color: accent, lineHeight: 1,
    }}>
      <span style={{ fontSize: 38 }}><CountUp value={v}/></span>
      {unit && <span style={{ fontSize: 14, color: "var(--fg-2)" }}>{unit}</span>}
    </div>
    {sub && <div style={{
      marginTop: 8, fontFamily: 'var(--font-code)', fontSize: 10.5,
      color: "var(--fg-3)", lineHeight: 1.45,
    }}>{sub}</div>}
  </div>
);

const FieldReadings = () => (
  <section className="mg-pad" style={{
    position: "relative",
    padding: "96px 48px", maxWidth: 1280, margin: "0 auto",
  }}>
    <div className="mg-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 96, alignItems: "start" }}>
      <div className="mg-unstick" style={{ position: "sticky", top: 100 }}>
        <div style={{
          fontFamily: "var(--font-code)", fontSize: 10.5,
          letterSpacing: "0.32em", textTransform: "uppercase",
          color: "var(--mirage-700)", marginBottom: 24,
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <span style={{ width: 32, height: 1, background: "var(--mirage-500)" }}/>
          Field readings
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
          fontSize: "clamp(30px, 5.5vw, 56px)", lineHeight: 1.05, letterSpacing: "0.02em",
          color: "var(--fg-1)",
        }}>
          30 agents. <code style={{
            fontFamily: '"JetBrains Mono", monospace',
            color: "var(--mirage-700)", fontSize: "clamp(24px, 5vw, 40px)",
          }}>1 heure</code>.
        </h2>
        <p style={{
          marginTop: 24, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)",
          maxWidth: 380,
        }}>
          La conso et le coût attaquant sont <em>mesurés</em> (champ <code style={{ fontFamily: "var(--font-code)", color: "var(--mirage-700)" }}>usage</code> de
          l'API OVH). Le coût défenseur est estimé (modèle TDP), donc le ratio reste
          un ordre de grandeur, pas un chiffre exact.
        </p>
        <div style={{
          marginTop: 32, padding: "16px 20px",
          background: "var(--bg-panel)", border: "1px solid var(--line-2)",
          fontFamily: "var(--font-code)", fontSize: 11, color: "var(--fg-3)",
          letterSpacing: "0.04em", lineHeight: 1.7,
        }}>
          <div>campagne&nbsp;·&nbsp;<span style={{ color: "var(--mirage-700)" }}>vague finale J3</span></div>
          <div>date&nbsp;·&nbsp;2026-06-03</div>
          <div>setup&nbsp;·&nbsp;5 agents × 6 modèles OVH</div>
          <div>attaquants&nbsp;·&nbsp;<span style={{ color: "var(--signal-alert)" }}>agents ReAct (6 modèles OVH)</span></div>
        </div>
      </div>

      <div>
        <div className="mg-readings" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          <Reading k="tokens attaquant brûlés" v="17,8" unit="M" sub="mesuré · champ usage API OVH" accent="var(--mirage-700)"/>
          <Reading k="coût OVH attaquant" v="6,58" unit="€" sub="réel · facturé par OVH"/>
          <Reading k="notre coût" v="0,002" unit="€" sub="estimé · génération à la volée"/>

          <Reading k="amplification ré-ingestion" v="19,2" unit="×" sub="926 k servis → 17,8 M consommés" accent="var(--mirage-700)"/>
          <Reading k="appels LLM attaquant" v="10875" sub="mesuré sur la vague"/>
          <Reading k="agents simultanés" v="30" sub="5 × 6 modèles OVH"/>

          <Reading k="obéissance au canary PI" v="60" unit="%" sub="18 / 30 · reverse prompt injection" accent="var(--signal-ghost)"/>
          <Reading k="latence détection → reroute" v="≈ 3" unit="s" sub="cible architecturale · cascade T0 → T2"/>
          <Reading k="ghost shell" v="1" unit="conteneur" sub="borné · personas multiples (Host header)"/>

          <Reading k="agents pris dans le maze" v="30" sub="sur 30 · cred-graph + FS procédural"/>
          <Reading k="énergie défense" v="0,011" unit="kWh" sub="0,54 gCO₂e · estimé · modèle TDP"/>
          <Reading k="plus gros agent (Llama-3.3-70B)" v="1,96" unit="M" sub="525 appels · 1,31 € en 1 h"/>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { FieldReadings });
