/* eslint-disable react/prop-types */
/* Limites - what Mir[AI]ge does NOT do, and the POC status. Credibility section. */

const LimitCard = ({ title, children }) => (
  <div style={{
    padding: "24px 26px",
    background: "var(--bg-panel)",
    border: "1px solid var(--line-2)",
    borderTop: "2px solid var(--signal-alert)",
  }}>
    <div style={{
      fontFamily: '"Rajdhani", sans-serif', fontWeight: 600,
      fontSize: 21, color: "var(--fg-1)", letterSpacing: "0.01em",
    }}>{title}</div>
    <p style={{
      margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "var(--fg-2)",
    }}>{children}</p>
  </div>
);

const Limites = () => (
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
        color: "var(--mirage-700)", marginBottom: 32,
        display: "flex", alignItems: "center", gap: 16,
      }}>
        <span style={{ width: 32, height: 1, background: "var(--mirage-500)" }}/>
        Les limites
      </div>

      <h2 style={{
        margin: 0, maxWidth: 980,
        fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
        fontSize: "clamp(30px, 6vw, 60px)", lineHeight: 1.05, letterSpacing: "0.02em",
        color: "var(--fg-1)", textWrap: "balance",
      }}>
        Ce que Mir[AI]ge <em style={{ fontStyle: "normal", color: "var(--mirage-700)" }}>ne fait pas</em>.
      </h2>

      <p style={{
        marginTop: 32, maxWidth: 720, fontSize: 17, lineHeight: 1.65,
        color: "var(--fg-2)",
      }}>
        Si on prétendait tout bloquer, on ne mériterait pas qu'on nous croie sur le
        reste. Trois adversaires dépassent ce système, et on préfère le dire ici.
      </p>

      <div className="mg-stack" style={{
        marginTop: 48,
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 20,
      }}>
        <Reveal y={28} dur={700} delay={0}>
          <LimitCard title="L'attaquant patient">
            Un opérateur humain, lent et ciblé, ne déclenche ni les heuristiques de
            rythme ni le canary. Mir[AI]ge vise l'attaque automatisée de masse, pas
            l'intrusion sur mesure.
          </LimitCard>
        </Reveal>
        <Reveal y={28} dur={700} delay={120}>
          <LimitCard title="L'agent durci">
            Un agent récent et durci contre la prompt injection (ASR de l'ordre de
            1,3 % sur les meilleurs modèles) ne mord pas au canary. Notre cible est le
            long tail d'agents naïfs, majoritaire aujourd'hui, sur une fenêtre estimée
            à 12-24 mois.
          </LimitCard>
        </Reveal>
        <Reveal y={28} dur={700} delay={240}>
          <LimitCard title="L'humain dans la boucle">
            Un opérateur qui supervise son agent peut reprendre la main au premier
            doute et sortir du leurre. Le compute brûlé reste perdu pour lui, mais la
            diversion ne tient pas indéfiniment.
          </LimitCard>
        </Reveal>
      </div>

    </div>
  </section>
);

Object.assign(window, { Limites });
