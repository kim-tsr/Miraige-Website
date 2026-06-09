/* eslint-disable react/prop-types */
/* ChapterIndex - sticky right-rail marginalia showing current section.
   Inspired by Stripe / Linear / Anthropic-style scroll indices. */

const { useState: ciUseState, useEffect: ciUseEffect } = React;

const CHAPTERS = [
  { id: "probleme",    n: "01", label: "problème"  },
  { id: "principe",    n: "02", label: "principe"  },
  { id: "primitives",  n: "03", label: "primitives"},
  { id: "anatomie",    n: "04", label: "anatomie"  },
  { id: "diagramme",   n: "05", label: "diagramme" },
  { id: "code",        n: "06", label: "code"      },
  { id: "console",     n: "07", label: "console"   },
  { id: "readings",    n: "08", label: "readings"  },
  { id: "limites",     n: "09", label: "limites"   },
  { id: "invitation",  n: "10", label: "démo"      },
];

const ChapterIndex = () => {
  const [active, setActive] = ciUseState(0);
  const [visible, setVisible] = ciUseState(false);

  ciUseEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
      // find which chapter section is most prominently in view
      let best = 0, bestY = -Infinity;
      for (let i = 0; i < CHAPTERS.length; i++) {
        const el = document.getElementById("chapter-" + CHAPTERS[i].id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        // section that has crossed above middle-of-viewport wins
        const score = window.innerHeight / 2 - r.top;
        if (score >= 0 && score > bestY) { best = i; bestY = score; }
      }
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="mg-chapter-rail" style={{
      position: "fixed", top: "50%", right: 32,
      transform: "translateY(-50%)", zIndex: 60,
      display: "flex", flexDirection: "column", gap: 14,
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
      transition: "opacity 400ms cubic-bezier(0.2,0.7,0.2,1)",
    }}>
      {CHAPTERS.map((c, i) => {
        const isActive = i === active;
        return (
          <a key={c.id} href={"#chapter-" + c.id}
            style={{
              display: "grid", gridTemplateColumns: "32px auto", gap: 12,
              alignItems: "center", textDecoration: "none",
              padding: "4px 0",
              transition: "color 240ms",
            }}
          >
            <span style={{
              fontFamily: "var(--font-code)", fontSize: 10,
              letterSpacing: "0.18em",
              color: isActive ? "var(--mirage-700)" : "var(--fg-3)",
              textAlign: "right",
              fontWeight: isActive ? 600 : 400,
            }}>
              {c.n}
            </span>
            <span style={{
              width: isActive ? 28 : 14, height: 1,
              background: isActive ? "var(--mirage-500)" : "var(--line-2)",
              transition: "width 320ms cubic-bezier(0.2,0.7,0.2,1), background 240ms",
              alignSelf: "center",
            }}/>
          </a>
        );
      })}
    </nav>
  );
};

Object.assign(window, { ChapterIndex });
