/* foundation.jsx
   Shared primitives: hooks, ImagePlate, RevealText, ShinMark.
   Exposes everything on window for the other split JSX files.
*/
const { useState, useEffect, useRef, useLayoutEffect, useCallback, createContext, useContext, memo } = React;

/* ─────────── Theme context ─────────── */
const ThemeCtx = createContext({ theme: "dark", setTheme: () => {} });

function ThemeProvider({ initial = "dark", value, setValue, children }) {
  // sync body attribute
  useEffect(() => {
    document.body.setAttribute("data-theme", value);
  }, [value]);
  return <ThemeCtx.Provider value={{ theme: value, setTheme: setValue }}>{children}</ThemeCtx.Provider>;
}
const useTheme = () => useContext(ThemeCtx);

/* ─────────── Reveal-in-view hook ─────────── */
function useInView(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { setSeen(true); io.disconnect(); break; }
      }
    }, { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
}

/* ─────────── Reveal mask image plate ─────────── */
// mode: "img" (children <img>), "bg" (background-image div)
function ImagePlate({
  src, alt = "", ratio, ken = false, className = "",
  style, captionTop, captionBottom, hairline = true,
  overlay,            // CSS gradient string
  parallax = false,   // subtle parallax y
  loading = "lazy",
  fetchpriority,
  children,
  onClick,
  fit = "cover",
  position = "center",
  variant = "building",   // ArchVisual fallback variant
  fallbackLabel,
  fallbackCaption
}) {
  const [ref, seen] = useInView({ threshold: 0.12 });
  const [imgErrored, setImgErrored] = useState(false);
  const innerRef = useRef(null);
  const wrapRef = useRef(null);

  // parallax
  useEffect(() => {
    if (!parallax) return;
    const w = wrapRef.current;
    const inner = innerRef.current;
    if (!w || !inner) return;
    let raf = 0;
    function tick() {
      const rect = w.getBoundingClientRect();
      const wh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const t = (center - wh / 2) / wh; // -1..1 roughly
      const y = -t * 18; // gentle
      inner.style.setProperty("--paraY", y + "px");
      raf = 0;
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(tick);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax]);

  const aspectStyle = ratio ? { aspectRatio: ratio } : null;

  return (
    <figure
      ref={wrapRef}
      className={"plate " + className}
      style={{
        position: "relative",
        margin: 0,
        ...(aspectStyle || {}),
        ...style
      }}
      onClick={onClick}
    >
      <div
        ref={(el) => { ref.current = el; innerRef.current = el; }}
        className={"reveal-img" + (seen ? " in" : "")}
        style={{
          position: "absolute", inset: 0,
          border: hairline ? "1px solid var(--hairline)" : "none",
          transform: parallax ? "translateY(var(--paraY, 0))" : undefined,
          transition: "transform 200ms linear, " + (parallax ? "" : "")
        }}
      >
        {/* Architectural SVG fallback — always rendered behind the photo.
            If the <img> loads, it covers this layer; if it fails, this shows through. */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <ArchVisual variant={variant} label={fallbackLabel} caption={fallbackCaption} />
        </div>
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchpriority={fetchpriority}
          onError={() => setImgErrored(true)}
          className={"tinted" + (ken && seen ? " ken" : "")}
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            width: "100%", height: "100%",
            objectFit: fit, objectPosition: position,
            display: "block",
            transformOrigin: "center",
            opacity: imgErrored ? 0 : 1
          }}
        />
        {overlay && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 2,
            background: overlay,
            pointerEvents: "none"
          }} />
        )}
        {children}
      </div>
      {captionTop && (
        <figcaption className="caption" style={{ position: "absolute", top: 18, left: 22, zIndex: 2 }}>
          {captionTop}
        </figcaption>
      )}
      {captionBottom && (
        <figcaption className="caption" style={{ position: "absolute", bottom: 18, left: 22, zIndex: 2 }}>
          {captionBottom}
        </figcaption>
      )}
    </figure>
  );
}

/* ─────────── Caption-style placeholder ─────────── */
// Use this in case an Unsplash photo fails (silent fallback)
function ImageFallback({ label }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "repeating-linear-gradient(135deg, var(--bg-soft) 0 12px, var(--bg) 12px 24px)",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <span className="caption">{label}</span>
    </div>
  );
}

/* ─────────── Numeric index ─────────── */
function SectionIndex({ n, label }) {
  return (
    <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span className="num">{String(n).padStart(2, "0")}</span>
      <span style={{ width: 24, height: 1, background: "var(--accent-soft)" }} />
      <span>{label}</span>
    </div>
  );
}

/* ─────────── FadeUp wrapper ─────────── */
function FadeUp({ children, delay = 0, as: As = "div", style, className = "" }) {
  const [ref, seen] = useInView({ threshold: 0.18 });
  return (
    <As
      ref={ref}
      className={"fade-up " + (seen ? "in " : "") + className}
      style={{ transitionDelay: (seen ? delay : 0) + "ms", ...style }}
    >
      {children}
    </As>
  );
}

/* ─────────── Photography sources ───────────
   In standalone bundle, each entry is a blob URL injected into
   window.__resources by the bundler (see <meta name="ext-resource-dependency"> in index.html).
*/
const PHOTOS = new Proxy({}, {
  get(_, key) {
    return (window.__resources && window.__resources[key]) || "";
  }
});

/* ─────────── ArchVisual · inline SVG fallback ───────────
   A guaranteed-render architectural sketch shown behind every image.
   If the photo loads, it covers the SVG; if not, the SVG remains visible.
*/
function ArchVisual({ variant = "building", label = "", caption = "", style }) {
  const { theme } = useTheme();
  const c = theme === "dark"
    ? { bg: "#1A1A18", stroke: "#ECE6D6", accent: "#B8A36A", dim: "rgba(236,230,214,0.35)", text: "rgba(236,230,214,0.55)" }
    : { bg: "#EEE8D6", stroke: "#3A3017", accent: "#6F5F33", dim: "rgba(58,48,23,0.35)", text: "rgba(58,48,23,0.62)" };

  const scenes = {
    villa: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        <rect x="120" y="240" width="260" height="140" fill="none" stroke={c.stroke} strokeWidth="1" />
        <line x1="120" y1="280" x2="380" y2="280" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="150" y="300" width="50" height="80" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="220" y="300" width="50" height="80" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="290" y="300" width="50" height="80" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <line x1="40" y1="380" x2="40" y2="320" stroke={c.dim} strokeWidth="0.5" />
        <line x1="460" y1="380" x2="460" y2="310" stroke={c.dim} strokeWidth="0.5" />
        <line x1="180" y1="400" x2="320" y2="400" stroke={c.dim} strokeWidth="0.5" />
      </g>
    ),
    cottage: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        <path d="M 150 380 L 150 260 L 250 200 L 350 260 L 350 380 Z" fill="none" stroke={c.stroke} strokeWidth="1" />
        <rect x="230" y="310" width="40" height="70" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="170" y="290" width="40" height="40" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="290" y="290" width="40" height="40" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <line x1="60" y1="380" x2="60" y2="280" stroke={c.dim} strokeWidth="0.5" />
        <line x1="90" y1="380" x2="90" y2="300" stroke={c.dim} strokeWidth="0.5" />
        <line x1="410" y1="380" x2="410" y2="290" stroke={c.dim} strokeWidth="0.5" />
        <line x1="440" y1="380" x2="440" y2="310" stroke={c.dim} strokeWidth="0.5" />
      </g>
    ),
    townhouse: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        <rect x="80" y="200" width="100" height="180" fill="none" stroke={c.stroke} strokeWidth="1" />
        <rect x="200" y="200" width="100" height="180" fill="none" stroke={c.stroke} strokeWidth="1" />
        <rect x="320" y="200" width="100" height="180" fill="none" stroke={c.stroke} strokeWidth="1" />
        <rect x="100" y="230" width="60" height="30" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="100" y="280" width="60" height="30" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="220" y="230" width="60" height="30" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="220" y="280" width="60" height="30" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="340" y="230" width="60" height="30" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="340" y="280" width="60" height="30" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="120" y="330" width="20" height="50" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="240" y="330" width="20" height="50" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="360" y="330" width="20" height="50" fill="none" stroke={c.stroke} strokeWidth="0.5" />
      </g>
    ),
    complex: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        <rect x="60" y="140" width="80" height="240" fill="none" stroke={c.stroke} strokeWidth="1" />
        <rect x="160" y="180" width="80" height="200" fill="none" stroke={c.stroke} strokeWidth="1" />
        <rect x="260" y="120" width="80" height="260" fill="none" stroke={c.stroke} strokeWidth="1" />
        <rect x="360" y="200" width="80" height="180" fill="none" stroke={c.stroke} strokeWidth="1" />
        {[0,1,2,3,4,5,6,7].map(i => (
          <g key={i}>
            <line x1="70" y1={160+i*28} x2="130" y2={160+i*28} stroke={c.dim} strokeWidth="0.5" />
            {i<7 && <line x1="170" y1={200+i*25} x2="230" y2={200+i*25} stroke={c.dim} strokeWidth="0.5" />}
            <line x1="270" y1={140+i*30} x2="330" y2={140+i*30} stroke={c.dim} strokeWidth="0.5" />
            {i<6 && <line x1="370" y1={220+i*26} x2="430" y2={220+i*26} stroke={c.dim} strokeWidth="0.5" />}
          </g>
        ))}
      </g>
    ),
    interior: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        <rect x="60" y="100" width="380" height="280" fill="none" stroke={c.stroke} strokeWidth="1" />
        <rect x="100" y="140" width="120" height="180" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <rect x="240" y="140" width="120" height="180" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <line x1="100" y1="200" x2="220" y2="200" stroke={c.dim} strokeWidth="0.5" />
        <line x1="100" y1="260" x2="220" y2="260" stroke={c.dim} strokeWidth="0.5" />
        <line x1="240" y1="200" x2="360" y2="200" stroke={c.dim} strokeWidth="0.5" />
        <line x1="240" y1="260" x2="360" y2="260" stroke={c.dim} strokeWidth="0.5" />
        <line x1="80" y1="380" x2="420" y2="380" stroke={c.stroke} strokeWidth="1" />
        <rect x="130" y="345" width="60" height="35" fill="none" stroke={c.dim} strokeWidth="0.5" />
        <rect x="310" y="345" width="60" height="35" fill="none" stroke={c.dim} strokeWidth="0.5" />
      </g>
    ),
    detail: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <line key={i} x1={50+i*45} y1="100" x2={50+i*45} y2="380" stroke={c.dim} strokeWidth="0.5" />
        ))}
        {[0,1,2,3,4,5].map(i => (
          <line key={"h"+i} x1="50" y1={120+i*50} x2="455" y2={120+i*50} stroke={c.dim} strokeWidth="0.5" />
        ))}
        <rect x="180" y="180" width="140" height="140" fill="none" stroke={c.stroke} strokeWidth="1" />
        <line x1="180" y1="250" x2="320" y2="250" stroke={c.stroke} strokeWidth="0.5" />
        <line x1="250" y1="180" x2="250" y2="320" stroke={c.stroke} strokeWidth="0.5" />
      </g>
    ),
    landscape: (
      <g>
        <line x1="0" y1="320" x2="500" y2="320" stroke={c.accent} strokeWidth="0.5" />
        <path d="M 0 320 L 80 280 L 160 300 L 240 240 L 320 280 L 400 250 L 500 290 L 500 380 L 0 380 Z" fill="none" stroke={c.dim} strokeWidth="0.5" />
        <rect x="220" y="200" width="60" height="120" fill="none" stroke={c.stroke} strokeWidth="1" />
        <line x1="220" y1="240" x2="280" y2="240" stroke={c.stroke} strokeWidth="0.5" />
        <line x1="220" y1="280" x2="280" y2="280" stroke={c.stroke} strokeWidth="0.5" />
        <line x1="250" y1="200" x2="250" y2="320" stroke={c.stroke} strokeWidth="0.5" />
      </g>
    ),
    restaurant: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        <rect x="60" y="100" width="380" height="280" fill="none" stroke={c.stroke} strokeWidth="1" />
        <circle cx="160" cy="270" r="40" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <circle cx="340" cy="270" r="40" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        <circle cx="160" cy="270" r="6" fill={c.accent} />
        <circle cx="340" cy="270" r="6" fill={c.accent} />
        <line x1="120" y1="270" x2="200" y2="270" stroke={c.dim} strokeWidth="0.5" />
        <line x1="160" y1="230" x2="160" y2="310" stroke={c.dim} strokeWidth="0.5" />
        <line x1="300" y1="270" x2="380" y2="270" stroke={c.dim} strokeWidth="0.5" />
        <line x1="340" y1="230" x2="340" y2="310" stroke={c.dim} strokeWidth="0.5" />
        <line x1="60" y1="150" x2="440" y2="150" stroke={c.dim} strokeWidth="0.5" />
        <line x1="160" y1="100" x2="160" y2="150" stroke={c.dim} strokeWidth="0.5" />
        <line x1="250" y1="100" x2="250" y2="150" stroke={c.dim} strokeWidth="0.5" />
        <line x1="340" y1="100" x2="340" y2="150" stroke={c.dim} strokeWidth="0.5" />
      </g>
    ),
    office: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        <rect x="60" y="120" width="380" height="260" fill="none" stroke={c.stroke} strokeWidth="1" />
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={80+i*72} y="150" width="60" height="90" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        ))}
        <line x1="60" y1="280" x2="440" y2="280" stroke={c.dim} strokeWidth="0.5" />
        <rect x="120" y="300" width="80" height="60" fill="none" stroke={c.dim} strokeWidth="0.5" />
        <rect x="220" y="300" width="80" height="60" fill="none" stroke={c.dim} strokeWidth="0.5" />
        <rect x="320" y="300" width="80" height="60" fill="none" stroke={c.dim} strokeWidth="0.5" />
      </g>
    ),
    building: (
      <g>
        <line x1="0" y1="380" x2="500" y2="380" stroke={c.accent} strokeWidth="0.5" />
        <rect x="120" y="160" width="260" height="220" fill="none" stroke={c.stroke} strokeWidth="1" />
        {[0,1,2,3].map(i => [0,1,2,3].map(j => (
          <rect key={`${i}-${j}`} x={140+i*60} y={180+j*50} width="40" height="30" fill="none" stroke={c.stroke} strokeWidth="0.5" />
        )))}
      </g>
    )
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: c.bg, overflow: "hidden", ...style }} aria-hidden="true">
      <svg viewBox="0 0 500 420" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
        {scenes[variant] || scenes.building}
      </svg>
      {label && (
        <div style={{ position: "absolute", top: 14, left: 16, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: c.text, fontFamily: "Inter, sans-serif" }}>
          {label}
        </div>
      )}
      <div style={{ position: "absolute", bottom: 14, left: 16, right: 16, display: "flex", justifyContent: "space-between", fontSize: 10, letterSpacing: "0.15em", color: c.text, fontFamily: "Inter, sans-serif" }}>
        <span>{caption}</span>
        <span>SHINUY · {variant.toUpperCase()}</span>
      </div>
      <span style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderTop: "1px solid " + c.accent, borderRight: "1px solid " + c.accent }} />
      <span style={{ position: "absolute", bottom: 8, right: 8, width: 8, height: 8, borderBottom: "1px solid " + c.accent, borderRight: "1px solid " + c.accent }} />
    </div>
  );
}

/* expose */
Object.assign(window, {
  useState, useEffect, useRef, useLayoutEffect, useCallback, memo,
  ThemeCtx, ThemeProvider, useTheme,
  useInView, ImagePlate, ImageFallback, SectionIndex, FadeUp,
  ArchVisual, PHOTOS
});
