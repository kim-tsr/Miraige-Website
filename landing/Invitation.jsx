/* eslint-disable react/prop-types */
/* Invitation — contact section: the four people behind Mir[AI]ge. */

const TEAM = [
  {
    name: "Enzo Juhel",
    role: "IA & A2A",
    url: "https://www.linkedin.com/in/enzo-juhel-a5a5b627b/",
  },
  {
    name: "Kylian Nézan",
    role: "Infra & réseau",
    url: "https://www.linkedin.com/in/knezan",
  },
  {
    name: "Arthur Hamon",
    role: "Détection & reroutage · les 3 Tiers",
    url: "https://www.linkedin.com/in/arthur-hamon-007506302/",
  },
  {
    name: "Kim Tessier",
    role: "Red Team & compute-wasting",
    url: "https://www.linkedin.com/in/kim-tessier-330262230/",
  },
];

const TeamCard = ({ name, role, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{
    display: "block", textDecoration: "none",
    padding: "24px 24px 22px",
    background: "rgba(247,241,230,0.04)",
    border: "1px solid var(--line-on-deep-2)",
    borderTop: "2px solid var(--mirage-500)",
    transition: "background 240ms",
  }}>
    <div style={{
      fontFamily: '"Rajdhani", sans-serif', fontWeight: 600,
      fontSize: 26, lineHeight: 1.1, color: "var(--sand-100)",
      letterSpacing: "0.01em",
    }}>{name}</div>
    <div style={{
      marginTop: 8,
      fontFamily: "var(--font-code)", fontSize: 11,
      letterSpacing: "0.04em", color: "var(--mirage-300)",
      lineHeight: 1.5,
    }}>{role}</div>
    <div style={{
      marginTop: 18, display: "flex", alignItems: "center", gap: 8,
      fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 11,
      letterSpacing: "0.22em", textTransform: "uppercase",
      color: "var(--sand-300)",
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
      </svg>
      LinkedIn
    </div>
  </a>
);

const Invitation = () => (
  <section id="invitation" className="mg-pad" style={{
    position: "relative", overflow: "hidden",
    background: "var(--sand-900)", color: "var(--sand-100)",
    padding: "140px 48px",
  }}>
    {/* a single heat-haze band as decoration */}
    <div style={{
      position: "absolute", left: 0, right: 0, top: "52%", height: 60,
      background: "linear-gradient(180deg, rgba(15,11,5,0) 0%, rgba(79,160,143,0.4) 50%, rgba(15,11,5,0) 100%)",
      filter: "blur(2px)", pointerEvents: "none",
    }}/>

    {/* corner marginalia */}
    <div className="mg-marginalia" style={{
      position: "absolute", top: 40, left: 48,
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.22em", color: "var(--sand-400)",
    }}>
      § 09 · contact
    </div>

    <div style={{
      position: "relative", maxWidth: 1080, margin: "0 auto",
    }}>
      <div style={{
        fontFamily: '"Syncopate", sans-serif', fontWeight: 400,
        fontSize: 11, letterSpacing: "0.42em", textTransform: "uppercase",
        color: "var(--mirage-300)", marginBottom: 32,
      }}>
        L'équipe
      </div>

      <h2 style={{
        margin: 0,
        fontFamily: '"Rajdhani", sans-serif', fontWeight: 300,
        fontSize: "clamp(34px, 8vw, 110px)", lineHeight: 0.98, letterSpacing: "0.02em",
        textWrap: "balance",
      }}>
        Quatre personnes.<br/>
        <em style={{ fontStyle: "normal", color: "var(--mirage-300)" }}>
          Un week-end de hackathon.
        </em>
      </h2>

      <p style={{
        marginTop: 48, fontSize: 17, color: "var(--sand-300)",
        maxWidth: 640, lineHeight: 1.6,
      }}>
        Mir[AI]ge est né au hackathon cyber OVHcloud 2026. Pour en parler, échanger sur
        l'archi ou nous retrouver, on est sur LinkedIn.
      </p>

      <div style={{
        marginTop: 64,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 20,
      }}>
        {TEAM.map((m) => <TeamCard key={m.url} {...m}/>)}
      </div>
    </div>
  </section>
);

Object.assign(window, { Invitation });
