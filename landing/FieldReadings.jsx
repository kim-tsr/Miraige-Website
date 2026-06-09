/* eslint-disable react/prop-types */
/* FieldReadings — animated count-up readings, instrument-panel layout. */

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
  <section style={{
    position: "relative",
    padding: "120px 48px", maxWidth: 1280, margin: "0 auto",
  }}>
    <div style={{
      position: "absolute", top: 60, right: 48,
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.22em", color: "var(--fg-3)",
    }}>
      § 08 · field readings · inc-0094
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 96, alignItems: "start" }}>
      <div style={{ position: "sticky", top: 100 }}>
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
          fontSize: 56, lineHeight: 1.05, letterSpacing: "0.02em",
          color: "var(--fg-1)",
        }}>
          Mesuré sur <code style={{
            fontFamily: '"JetBrains Mono", monospace',
            color: "var(--mirage-700)", fontSize: 40,
          }}>inc-0094</code>.
        </h2>
        <p style={{
          marginTop: 24, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)",
          maxWidth: 380,
        }}>
          Méthodologie : tiktoken o200k_base côté attaquant (GPT-4o pricing borne supérieure)
          · CodeCarbon RAPL côté défenseur ±5%. Ratio honnête recalibré post stress-test —
          voir <code style={{ fontFamily: "var(--font-code)", color: "var(--mirage-700)" }}>ADR-017</code>.
        </p>
        <div style={{
          marginTop: 32, padding: "16px 20px",
          background: "var(--bg-panel)", border: "1px solid var(--line-2)",
          fontFamily: "var(--font-code)", fontSize: 11, color: "var(--fg-3)",
          letterSpacing: "0.04em", lineHeight: 1.7,
        }}>
          <div>incident&nbsp;·&nbsp;<span style={{ color: "var(--mirage-700)" }}>inc-0094</span></div>
          <div>date&nbsp;·&nbsp;2026-06-03 19:42 UTC</div>
          <div>région&nbsp;·&nbsp;OVH-GRA11</div>
          <div>attaquant&nbsp;·&nbsp;<span style={{ color: "var(--signal-alert)" }}>LangChain ReAct (naïf)</span></div>
        </div>
      </div>

      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          <Reading k="asymmetric ratio" v="23" unit="×" sub="cet incident · fourchette 5-50× honnête" accent="var(--mirage-700)"/>
          <Reading k="détection → reroute" v="2,94" unit="s" sub="cascade T0+T1+T2 · L7 PATCH Octavia"/>
          <Reading k="LLM confidence" v="0,93" sub="Llama-3.1-8B AI Endpoints"/>

          <Reading k="tokens attaquant" v="28400" sub="estimé via tiktoken o200k_base"/>
          <Reading k="notre coût session" v="0,002" unit="€" sub="Ghost Shell pro-rata + AI Endpoints"/>
          <Reading k="canary PI compliance" v="1" sub="LLM agent confirmé · /admin/acknowledge"/>

          <Reading k="durée engagement" v="11" unit="min" sub="TTL 30 min · auto-libération session" accent="var(--signal-ghost)"/>
          <Reading k="ghost shell · RAM" v="50" unit="MB" sub="1 container · personas multiples"/>
          <Reading k="PUE OVH GRA11" v="1,28" sub="vs 1,55 industrie · 2-3× moins CO₂"/>

          <Reading k="agents actifs" v="9" sub="1 orch · 5 sentinels · 3 ghost sessions"/>
          <Reading k="market share naïf" v="55" unit="%" sub="LangChain ReAct, Pentest-R1, custom"/>
          <Reading k="économie vs honeypot 24/7" v="99,98" unit="%" sub="à 1000 customers MSP"/>
        </div>
        <div style={{
          marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--line-3)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "var(--font-code)", fontSize: 11,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--fg-3)",
        }}>
          <span>Lectures &middot; 12 / 12</span>
          <span>Acquisition &middot; orchestrator-1</span>
          <span>Échantillon &middot; live</span>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { FieldReadings });
