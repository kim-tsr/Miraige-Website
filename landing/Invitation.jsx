/* eslint-disable react/prop-types */
/* Invitation — minimal asymmetric CTA. Replaces the form-on-right CTA. */

const Invitation = () => (
  <section id="invitation" style={{
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
    <div style={{
      position: "absolute", top: 40, left: 48,
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.22em", color: "var(--sand-400)",
    }}>
      § 06 · invitation
    </div>
    <div style={{
      position: "absolute", top: 40, right: 48,
      fontFamily: "var(--font-code)", fontSize: 10.5,
      letterSpacing: "0.22em", color: "var(--sand-400)",
    }}>
      slots · 6 / semaine
    </div>

    <div style={{
      position: "relative", maxWidth: 1080, margin: "0 auto",
    }}>
      <div style={{
        fontFamily: '"Syncopate", sans-serif', fontWeight: 400,
        fontSize: 11, letterSpacing: "0.42em", textTransform: "uppercase",
        color: "var(--mirage-300)", marginBottom: 32,
      }}>
        Demander la démo
      </div>

      <h2 style={{
        margin: 0,
        fontFamily: '"Rajdhani", sans-serif', fontWeight: 300,
        fontSize: 110, lineHeight: 0.98, letterSpacing: "0.02em",
        textWrap: "balance",
      }}>
        Trente minutes.<br/>
        Un incident reconstitué.<br/>
        <em style={{ fontStyle: "normal", color: "var(--mirage-300)" }}>
          Une rotation en direct.
        </em>
      </h2>

      <p style={{
        marginTop: 48, fontSize: 17, color: "var(--sand-300)",
        maxWidth: 640, lineHeight: 1.6,
      }}>
        Nous rejouons l'incident <code style={{
          fontFamily: '"JetBrains Mono", monospace',
          color: "var(--mirage-300)", fontSize: 15,
        }}>inc-0094</code> sur une vRack OVHcloud miroir,
        puis répondons à vos questions. Pas de slides, pas de NDA, pas de "follow-up call".
      </p>

      <form onSubmit={(e) => e.preventDefault()} style={{
        marginTop: 80,
        display: "grid", gridTemplateColumns: "1fr auto", gap: 0,
        maxWidth: 640,
        borderBottom: "1px solid var(--sand-300)",
        paddingBottom: 14,
        alignItems: "end",
      }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{
            fontFamily: "var(--font-code)", fontSize: 10.5,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--sand-400)",
          }}>email professionnel</span>
          <input type="email" placeholder="vous@entreprise.fr"
            style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: 18,
              background: "transparent", color: "var(--sand-100)",
              border: 0, outline: "none", padding: 0,
            }}/>
        </label>
        <button type="submit" style={{
          background: "transparent", border: 0, cursor: "pointer",
          color: "var(--mirage-300)",
          fontFamily: '"JetBrains Mono", monospace', fontSize: 14,
          letterSpacing: "0.04em",
        }}>
          envoyer —&gt;
        </button>
      </form>

      <div style={{
        marginTop: 28, display: "flex", gap: 56,
        fontFamily: "var(--font-code)", fontSize: 11,
        letterSpacing: "0.04em", color: "var(--sand-400)",
      }}>
        <span><span style={{ color: "var(--mirage-300)" }}>response.median</span>&nbsp;·&nbsp;6 h</span>
        <span><span style={{ color: "var(--mirage-300)" }}>session.length</span>&nbsp;·&nbsp;30 min</span>
        <span><span style={{ color: "var(--mirage-300)" }}>nda.required</span>&nbsp;·&nbsp;false</span>
      </div>
    </div>
  </section>
);

Object.assign(window, { Invitation });
