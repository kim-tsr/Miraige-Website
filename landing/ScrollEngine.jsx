/* eslint-disable react/prop-types */
/* ScrollEngine - Apple-style scroll dynamism:
   - useScrollY: tracks window scroll for parallax
   - <Reveal>: fades + translates children up as they enter the viewport
   - <ScrollProgress>: thin sticky progress bar at the top of the page
   - useParallax: ref + transform helper for layered hero parallax
*/

const { useState, useEffect, useRef } = React;

const useScrollY = () => {
  const [y, setY] = useState(typeof window === "undefined" ? 0 : window.scrollY);
  useEffect(() => {
    let raf = 0;
    const tick = () => { raf = 0; setY(window.scrollY); };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return y;
};

/* Lerped scroll value: keeps animating a few frames after the wheel stops,
   which reads as inertia instead of a hard 1:1 mapping. */
const useSmoothScrollY = (ease = 0.16) => {
  const [y, setY] = useState(typeof window === "undefined" ? 0 : window.scrollY);
  useEffect(() => {
    let raf = 0;
    let current = window.scrollY;
    let target = window.scrollY;
    let running = false;
    const loop = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.3) {
        current = target;
        running = false;
      } else {
        raf = requestAnimationFrame(loop);
      }
      setY(current);
    };
    const onScroll = () => {
      target = window.scrollY;
      if (!running) { running = true; raf = requestAnimationFrame(loop); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [ease]);
  return y;
};

const Reveal = ({ children, delay = 0, y = 24, dur = 700, once = true, as: Tag = "div", style, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      }
    }, { threshold: 0.18, rootMargin: "0px 0px -60px 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [once]);
  return (
    <Tag
      ref={ref}
      {...rest}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        transition: `opacity ${dur}ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform ${dur}ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
};

const ScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 100,
      pointerEvents: "none",
    }}>
      <div style={{
        width: `${p * 100}%`, height: "100%",
        background: "linear-gradient(90deg, var(--mirage-700), var(--mirage-300))",
        transition: "width 80ms linear",
      }}/>
    </div>
  );
};

Object.assign(window, { useScrollY, useSmoothScrollY, Reveal, ScrollProgress });
