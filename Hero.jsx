/* eslint-disable react/prop-types */
/* Hero — photographic background with scroll-driven parallax. */

const { useEffect: heroUseEffect } = React;

const Hero = () => {
  const y = useScrollY();

  return (
    <header style={{
      position: "relative", overflow: "hidden",
      minHeight: 880, background: "#C9A77E",
    }}>
      {/* Photo background — parallax: moves slower than scroll */}
      <div style={{
        position: "absolute", inset: "-12px",
        backgroundImage: "url(assets/imagery/desert-dune-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 62%",
        filter: "blur(1.6px) saturate(0.92)",
        transform: `translate3d(0, ${y * 0.45}px, 0) scale(1.05)`,
        willChange: "transform",
      }}/>
      {/* Warm tonal wash */}
      <div style={{
        position: "absolute", inset: 0,
        background:
          "linear-gradient(180deg, " +
            "rgba(247,241,230,0.34) 0%, " +
            "rgba(247,241,230,0.12) 30%, " +
            "rgba(247,241,230,0.06) 55%, " +
            "rgba(58,47,32,0.24) 100%)",
        mixBlendMode: "multiply",
      }}/>
      {/* Atmospheric mirage glow — parallax slower */}
      <div style={{
        position: "absolute", left: "-5%", right: "-5%",
        top: `calc(46% + ${y * 0.12}px)`, height: 280,
        background:
          "radial-gradient(ellipse 70% 70% at 50% 50%, " +
            "rgba(142,201,188,0.32) 0%, " +
            "rgba(212,190,146,0.16) 35%, " +
            "rgba(212,190,146,0) 70%)",
        filter: "blur(32px)",
        mixBlendMode: "screen",
        pointerEvents: "none",
        willChange: "transform",
      }}/>
      {/* Single faint horizon shimmer */}
      <div style={{
        position: "absolute", left: 0, right: 0,
        top: `calc(56% + ${y * 0.18}px)`, height: 1,
        background:
          "linear-gradient(90deg, transparent 0%, " +
            "rgba(142,201,188,0.55) 30%, " +
            "rgba(142,201,188,0.72) 50%, " +
            "rgba(142,201,188,0.55) 70%, " +
            "transparent 100%)",
        filter: "blur(0.6px)",
        pointerEvents: "none",
      }}/>

      <SurveyGrid/>

      {/* Top-left marginalia */}
      <div style={{
        position: "absolute", top: 32, left: 48,
        fontFamily: "var(--font-code)", fontSize: 10.5,
        letterSpacing: "0.18em", color: "var(--sand-700)",
        textTransform: "uppercase", display: "flex", gap: 18,
      }}>
        <span>PLANCHE&nbsp;·&nbsp;01</span>
        <span style={{ color: "var(--mirage-700)" }}>m[ai]ge / specimen</span>
      </div>

      {/* Bottom-left build stamp only — no extra spec cells under headline */}
      <div style={{
        position: "absolute", bottom: 32, left: 48,
        fontFamily: "var(--font-code)", fontSize: 10.5,
        letterSpacing: "0.04em", color: "var(--sand-700)",
        display: "flex", gap: 22, alignItems: "center",
      }}>
        <span>v&nbsp;0.3</span>
        <span style={{ width: 24, height: 1, background: "var(--sand-500)" }}/>
        <span>post stress-test</span>
        <span style={{ width: 24, height: 1, background: "var(--sand-500)" }}/>
        <span>OVH-GRA11</span>
      </div>

      <div style={{
        position: "relative", zIndex: 2,
        padding: "180px 48px 140px",
        maxWidth: 1280, margin: "0 auto",
      }}>
        <div style={{
          fontFamily: '"Syncopate", sans-serif', fontWeight: 400,
          fontSize: 11, letterSpacing: "0.42em",
          textTransform: "uppercase", color: "var(--sand-800)",
          transform: `translate3d(0, ${y * -0.08}px, 0)`,
          willChange: "transform",
        }}>
          Autonomous Moving Target Defense
        </div>
        <h1 style={{
          marginTop: 28,
          fontFamily: '"Rajdhani", sans-serif', fontWeight: 300,
          fontSize: 128, lineHeight: 0.96, letterSpacing: "0.02em",
          color: "var(--sand-900)", textWrap: "balance",
          maxWidth: 1180,
          mixBlendMode: "multiply",
          textShadow: "0 1px 0 rgba(247,241,230,0.45)",
          transform: `translate3d(0, ${y * -0.12}px, 0)`,
          willChange: "transform",
        }}>
          L'attaquant voit une ville.<br/>
          <em style={{ fontStyle: "normal", color: "var(--mirage-700)", fontWeight: 500 }}>
            Il n'y a pas de ville.
          </em>
        </h1>

        <div style={{ display: "flex", gap: 14, marginTop: 72,
                      transform: `translate3d(0, ${y * -0.18}px, 0)`,
                      willChange: "transform" }}>
          <a href="#invitation" style={{
            fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13,
            color: "var(--sand-50)", background: "var(--sand-900)",
            padding: "14px 26px", borderRadius: 4,
            textDecoration: "none", letterSpacing: "0.04em",
          }}>Demander la démo —&gt;</a>
          <a href="#whitepaper" style={{
            fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13,
            color: "var(--sand-900)", background: "rgba(247,241,230,0.55)",
            backdropFilter: "blur(2px)",
            border: "1px solid var(--line-3)",
            padding: "14px 26px", borderRadius: 4,
            textDecoration: "none", letterSpacing: "0.04em",
          }}>Lire le whitepaper</a>
        </div>
      </div>

      {/* scroll cue */}
      <div style={{
        position: "absolute", bottom: 32, right: 48,
        fontFamily: "var(--font-code)", fontSize: 10.5,
        letterSpacing: "0.22em", color: "var(--sand-700)",
        textTransform: "uppercase", opacity: Math.max(0, 1 - y / 200),
        transition: "opacity 200ms",
      }}>
        défiler ↓
      </div>
    </header>
  );
};

const SurveyGrid = () => (
  <svg width="100%" height="100%" preserveAspectRatio="none"
       viewBox="0 0 1600 880"
       style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.16 }}>
    <defs>
      <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="0.5" cy="0.5" r="0.5" fill="#3A2F20"/>
      </pattern>
    </defs>
    <rect width="1600" height="880" fill="url(#dots)"/>
  </svg>
);

Object.assign(window, { Hero });
