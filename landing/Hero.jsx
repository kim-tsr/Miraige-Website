/* eslint-disable react/prop-types */
/* Hero - photographic background with scroll-driven parallax. */

const { useEffect: heroUseEffect } = React;

const Hero = () => {
  const y = useSmoothScrollY();

  return (
    <header id="top" style={{
      position: "relative", overflow: "hidden",
      minHeight: "100vh", background: "#C9A77E",
    }}>
      {/* Photo background - parallax: moves slower than scroll.
          Top overshoot (-45%) gives the translation real headroom so the
          image edge never slides into view. */}
      <div style={{
        position: "absolute", top: "-45%", left: "-12px", right: "-12px", bottom: "-12px",
        backgroundImage: "url(assets/imagery/desert-dune-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 72%",
        filter: "blur(1.6px) saturate(0.92)",
        transform: `translate3d(0, ${y * 0.3}px, 0)`,
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
      <SurveyGrid/>

      <div className="mg-pad" style={{
        position: "relative", zIndex: 2,
        minHeight: "inherit",
        padding: "clamp(56px, 9vh, 100px) 48px clamp(48px, 8vh, 90px)",
        maxWidth: 1280, margin: "0 auto",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
      }}>
        <div style={{
          fontFamily: '"Syncopate", sans-serif', fontWeight: 400,
          fontSize: 11, letterSpacing: "0.42em",
          textTransform: "uppercase", color: "var(--sand-800)",
          opacity: Math.max(0, 1 - y / 320),
          transform: `translate3d(0, ${y * -0.08}px, 0)`,
          willChange: "transform, opacity",
        }}>
          Autonomous Moving Target Defense
        </div>
        {/* Wordmark - same treatment as the slides cover.
            Rises, zooms a touch and dissolves as the dunes scroll away. */}
        <h1 className="mg-hero-mark" style={{
          margin: "36px 0 0",
          fontFamily: '"Syncopate", sans-serif', fontWeight: 700,
          fontSize: "clamp(40px, 10vw, 180px)", lineHeight: 1,
          letterSpacing: "0.16em", whiteSpace: "nowrap",
          color: "var(--sand-900)",
          textShadow: "0 1px 0 rgba(247,241,230,0.45)",
          opacity: Math.max(0, 1 - y / 640),
          transform: `translate3d(0, ${y * -0.16}px, 0) scale(${1 + Math.min(y, 800) * 0.00022})`,
          transformOrigin: "center 60%",
          willChange: "transform, opacity",
        }}>
          MIR<span style={{ color: "var(--mirage-500)" }}>[</span>
          AI
          <span style={{ color: "var(--mirage-500)" }}>]</span>GE
        </h1>
        <p style={{
          margin: "44px 0 0", maxWidth: 880,
          fontFamily: '"Rajdhani", sans-serif', fontWeight: 500, fontStyle: "italic",
          fontSize: "clamp(20px, 3.2vw, 38px)", lineHeight: 1.3,
          color: "var(--sand-900)", textWrap: "balance",
          mixBlendMode: "multiply",
          opacity: Math.max(0, 1 - y / 460),
          transform: `translate3d(0, ${y * -0.22}px, 0)`,
          willChange: "transform, opacity",
        }}>
          L'attaquant voit une ville.{" "}
          <em style={{ fontStyle: "italic", color: "var(--mirage-700)" }}>
            Il n'y a pas de ville.
          </em>
        </p>
        <div style={{
          marginTop: 40,
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "9px 18px",
          border: "1px solid var(--sand-700)", borderRadius: 999,
          fontFamily: "var(--font-code)", fontSize: 11,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--sand-800)",
          background: "rgba(247,241,230,0.35)",
          opacity: Math.max(0, 1 - y / 420),
          transform: `translate3d(0, ${y * -0.2}px, 0)`,
          willChange: "transform, opacity",
        }}>
          Hackathon OVH · EPITA Rennes · 2026
        </div>
      </div>

      {/* scroll cue */}
      <div className="mg-marginalia" style={{
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
