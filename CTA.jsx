/* eslint-disable react/prop-types */
const CTA = () => (
  <section
    id="contact"
    style={{
      background: "var(--sand-900)",
      color: "var(--sand-100)",
      padding: "120px 48px",
    }}
  >
    <div
      style={{
        maxWidth: 1080, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80,
        alignItems: "start",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-ui)", fontWeight: 500,
            fontSize: 11.5, letterSpacing: "0.32em", textTransform: "uppercase",
            color: "var(--mirage-300)", marginBottom: 24,
          }}
        >
          Demander la démo
        </div>
        <h3
          style={{
            margin: 0, fontFamily: '"Rajdhani", sans-serif', fontWeight: 400,
            fontSize: 56, lineHeight: 1.05, letterSpacing: "0.02em",
            color: "var(--sand-100)",
          }}
        >
          Trente minutes.<br/>
          Un incident reconstitué.<br/>
          <em style={{ fontStyle: "normal", color: "var(--mirage-300)" }}>Une rotation en direct.</em>
        </h3>
        <p style={{
          marginTop: 32, fontSize: 17, color: "var(--sand-300)",
          maxWidth: 520, lineHeight: 1.6,
        }}>
          Nous rejouons l'incident <code style={{
            fontFamily: "var(--font-code)", color: "var(--mirage-300)",
          }}>inc-0094</code> sur une vRack OVHcloud miroir, puis répondons à vos questions.
        </p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "flex", flexDirection: "column", gap: 18,
          background: "var(--bg-deep-panel)",
          padding: 32, border: "1px solid var(--line-on-deep-2)",
        }}
      >
        <label style={{
          display: "flex", flexDirection: "column", gap: 6,
          fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 10.5,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--sand-400)",
        }}>
          Email professionnel
          <input
            type="email" placeholder="vous@entreprise.fr"
            style={{
              fontFamily: "var(--font-code)", fontSize: 13,
              background: "var(--bg-deep-sunk)", color: "var(--sand-100)",
              border: "1px solid var(--line-on-deep-2)", borderRadius: 2,
              padding: "10px 12px",
            }}
          />
        </label>
        <label style={{
          display: "flex", flexDirection: "column", gap: 6,
          fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 10.5,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--sand-400)",
        }}>
          Surface à protéger
          <select
            style={{
              fontFamily: "var(--font-ui)", fontSize: 13,
              background: "var(--bg-deep-sunk)", color: "var(--sand-100)",
              border: "1px solid var(--line-on-deep-2)", borderRadius: 2,
              padding: "10px 12px",
            }}
          >
            <option>API publique</option>
            <option>SaaS multi-tenant</option>
            <option>Workloads internes</option>
            <option>Infrastructure critique</option>
          </select>
        </label>
        <button
          type="submit"
          style={{
            marginTop: 8,
            background: "var(--mirage-500)", color: "#fff",
            fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13,
            padding: "12px 18px", borderRadius: 4, border: 0,
            cursor: "pointer", letterSpacing: "0.02em",
            boxShadow: "0 0 0 1px var(--mirage-500), 0 0 24px -4px rgba(79,160,143,0.5)",
          }}
        >
          Demander un créneau →
        </button>
      </form>
    </div>
  </section>
);

Object.assign(window, { CTA });
