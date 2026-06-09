/* eslint-disable react/prop-types */
/* Invitation - closing section: access to the live demo, then the team. */

const TEAM = [
  {
    name: "Enzo Juhel",
    role: "IA & A2A",
    url: "https://www.linkedin.com/in/enzo-juhel-a5a5b627b/",
    photo: "assets/team/enzo.jpg",
  },
  {
    name: "Kylian Nézan",
    role: "Infra & réseau",
    url: "https://www.linkedin.com/in/knezan",
    photo: "assets/team/kylian.jpg",
  },
  {
    name: "Arthur Hamon",
    role: "Détection & reroutage · les 3 Tiers",
    url: "https://www.linkedin.com/in/arthur-hamon-007506302/",
    photo: "assets/team/arthur.jpg",
  },
  {
    name: "Kim Tessier",
    role: "Red Team & compute-wasting",
    url: "https://www.linkedin.com/in/kim-tessier-330262230/",
    photo: "assets/team/kim.jpg",
  },
];

const TeamCard = ({ name, role, url, photo }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{
    display: "flex", alignItems: "center", gap: 18,
    height: "100%", boxSizing: "border-box",
    textDecoration: "none",
    padding: "18px 20px",
    background: "rgba(247,241,230,0.04)",
    border: "1px solid var(--line-on-deep-2)",
    borderTop: "2px solid var(--mirage-500)",
    transition: "background 240ms",
  }}>
    <img src={photo} alt={name} loading="lazy" style={{
      width: 64, height: 64, borderRadius: "50%",
      objectFit: "cover", flexShrink: 0,
      border: "1px solid var(--line-on-deep-3)",
      filter: "saturate(0.88)",
    }}/>
    <div style={{ minWidth: 0 }}>
      <div style={{
        fontFamily: '"Rajdhani", sans-serif', fontWeight: 600,
        fontSize: 22, lineHeight: 1.1, color: "var(--sand-100)",
        letterSpacing: "0.01em",
      }}>{name}</div>
      <div style={{
        marginTop: 6,
        fontFamily: "var(--font-code)", fontSize: 10.5,
        letterSpacing: "0.04em", color: "var(--mirage-300)",
        lineHeight: 1.45,
      }}>{role}</div>
      <div style={{
        marginTop: 10, display: "flex", alignItems: "center", gap: 7,
        fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 10,
        letterSpacing: "0.22em", textTransform: "uppercase",
        color: "var(--sand-300)",
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
        </svg>
        LinkedIn
      </div>
    </div>
  </a>
);

const Invitation = () => (
  <section id="invitation" className="mg-pad" style={{
    position: "relative", overflow: "hidden",
    background: "var(--sand-900)", color: "var(--sand-100)",
    padding: "104px 48px",
  }}>
    {/* a single heat-haze band as decoration */}
    <div style={{
      position: "absolute", left: 0, right: 0, top: "38%", height: 60,
      background: "linear-gradient(180deg, rgba(15,11,5,0) 0%, rgba(79,160,143,0.4) 50%, rgba(15,11,5,0) 100%)",
      filter: "blur(2px)", pointerEvents: "none",
    }}/>

    <div style={{
      position: "relative", maxWidth: 1080, margin: "0 auto",
    }}>
      <div className="mg-stack" style={{
        display: "grid", gridTemplateColumns: "1.05fr 1fr",
        gap: 72, alignItems: "center",
      }}>
        {/* left: pitch + CTA */}
        <div>
          <div style={{
            fontFamily: '"Syncopate", sans-serif', fontWeight: 400,
            fontSize: 11, letterSpacing: "0.42em", textTransform: "uppercase",
            color: "var(--mirage-300)", marginBottom: 28,
          }}>
            La démo
          </div>

          <h2 style={{
            margin: 0,
            fontFamily: '"Rajdhani", sans-serif', fontWeight: 300,
            fontSize: "clamp(34px, 6vw, 84px)", lineHeight: 0.98, letterSpacing: "0.02em",
            textWrap: "balance",
          }}>
            Voyez le mirage<br/>
            <em style={{ fontStyle: "normal", color: "var(--mirage-300)" }}>
              en action.
            </em>
          </h2>

          <p style={{
            marginTop: 36, fontSize: 17, color: "var(--sand-300)",
            maxWidth: 520, lineHeight: 1.6,
          }}>
            La console mission-control rejoue un scénario d'attaque complet : détection,
            bascule silencieuse vers le Ghost Shell, et compute-wasting en direct.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24, marginTop: 44 }}>
            <a href="demo/" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 14,
              color: "var(--sand-900)", background: "var(--mirage-300)",
              padding: "16px 32px", borderRadius: 4,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: "0 0 32px rgba(142,201,188,0.25)",
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M2 1.5 L10.5 6 L2 10.5 Z"/>
              </svg>
              Lancer la démo
            </a>
            <span style={{
              fontFamily: "var(--font-code)", fontSize: 11,
              letterSpacing: "0.08em", color: "var(--sand-400)",
            }}>
              ~2 min · rien à installer
            </span>
          </div>
        </div>

        {/* right: clickable console preview */}
        <a href="demo/" aria-label="Lancer la démo" style={{
          position: "relative", display: "block", textDecoration: "none",
        }}>
          {/* mirage glow behind the frame */}
          <div style={{
            position: "absolute", inset: "-40px -32px",
            background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(79,160,143,0.18) 0%, rgba(79,160,143,0) 70%)",
            filter: "blur(18px)", pointerEvents: "none",
          }}/>
          <div style={{
            position: "relative",
            background: "var(--bg-deep-panel)",
            border: "1px solid var(--line-on-deep-2)",
            boxShadow: "var(--elev-3)",
            overflow: "hidden",
          }}>
            {/* window chrome */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "12px 16px",
              borderBottom: "1px solid var(--line-on-deep-2)",
              background: "rgba(247,241,230,0.03)",
            }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--signal-alert)", opacity: 0.7 }}/>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--signal-watch)", opacity: 0.7 }}/>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--signal-ok)", opacity: 0.7 }}/>
              <span style={{
                marginLeft: 10,
                fontFamily: "var(--font-code)", fontSize: 10.5,
                letterSpacing: "0.08em", color: "var(--sand-400)",
              }}>
                mission_control · scénario auto
              </span>
              <span style={{
                marginLeft: "auto",
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-code)", fontSize: 9.5,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--signal-ghost)",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "var(--signal-ghost)",
                  boxShadow: "0 0 8px var(--signal-ghost)",
                }}/>
                replay
              </span>
            </div>

            {/* scenario beats */}
            <div style={{ padding: "22px 20px 24px", display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { t: "t+0,4 s", c: "var(--signal-watch)", k: "DÉTECTÉ",
                  d: "agent IA confirmé · confidence 0.93" },
                { t: "t+2,8 s", c: "var(--signal-ghost)", k: "REROUTÉ",
                  d: "session → Ghost Shell · L7 PATCH Octavia" },
                { t: "campagne", c: "var(--mirage-300)", k: "ÉPUISÉ",
                  d: "30 agents · 1 h → 17,8 M tokens brûlés · ×19,2" },
              ].map((b, i) => (
                <div key={b.k} className="mg-beat" style={{
                  display: "grid", gridTemplateColumns: "76px 84px 1fr",
                  gap: 14, alignItems: "baseline",
                  padding: "13px 6px",
                  borderTop: i === 0 ? "none" : "1px dashed var(--line-on-deep-2)",
                  fontFamily: "var(--font-code)",
                }}>
                  <span style={{ fontSize: 11, color: "var(--sand-400)" }}>{b.t}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: b.c }}>{b.k}</span>
                  <span style={{ fontSize: 12, color: "var(--sand-200)", lineHeight: 1.5 }}>{b.d}</span>
                </div>
              ))}
            </div>

            {/* play overlay */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(180deg, rgba(15,11,5,0) 30%, rgba(15,11,5,0.5) 100%)",
              pointerEvents: "none",
            }}>
              <span style={{
                width: 64, height: 64, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(142,201,188,0.14)",
                border: "1px solid var(--mirage-300)",
                backdropFilter: "blur(4px)",
                boxShadow: "0 0 40px rgba(142,201,188,0.35)",
              }}>
                <svg width="20" height="20" viewBox="0 0 12 12" fill="var(--mirage-300)" aria-hidden="true">
                  <path d="M3 1.5 L10.5 6 L3 10.5 Z"/>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* -- team / contact -- */}
      <div style={{
        marginTop: 120, paddingTop: 64,
        borderTop: "1px solid var(--line-on-deep-2)",
      }}>
        <div style={{
          fontFamily: '"Syncopate", sans-serif', fontWeight: 400,
          fontSize: 11, letterSpacing: "0.42em", textTransform: "uppercase",
          color: "var(--mirage-300)",
        }}>
          L'équipe
        </div>

        <p style={{
          marginTop: 28, fontSize: 16, color: "var(--sand-300)",
          maxWidth: 640, lineHeight: 1.6,
        }}>
          Mir[AI]ge est né au hackathon OVH d'EPITA Rennes en 2026 : quatre
          personnes, trois jours. Pour en parler ou échanger sur l'archi, on est sur LinkedIn.
        </p>

        <div style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}>
          {TEAM.map((m, i) => (
            <Reveal key={m.url} y={24} dur={650} delay={i * 90} style={{ height: "100%" }}>
              <TeamCard {...m}/>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Invitation });
