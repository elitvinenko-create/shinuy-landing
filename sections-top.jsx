/* sections-top.jsx — Nav, Hero, Interstitial 1, Philosophy, Principles */

/* ─────────── NAV ─────────── */
function Nav() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();
  const t = useT();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = t.navLinks;

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: "14px clamp(24px, 5vw, 80px) 4px",
        transition: "background-color 360ms var(--ease), border-color 360ms var(--ease), backdrop-filter 360ms",
        backgroundColor: solid ? (theme === "dark" ? "rgba(14,14,12,0.82)" : "rgba(244,239,224,0.86)") : "transparent",
        backdropFilter: solid ? "blur(14px) saturate(1.1)" : "none",
        WebkitBackdropFilter: solid ? "blur(14px) saturate(1.1)" : "none",
        borderBottom: solid ? "1px solid var(--hairline)" : "1px solid transparent"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#top" aria-label="SHINUY · Architecture, Engineering & Design"
           style={{ display: "flex", alignItems: "center", textDecoration: "none", height: 84 }}>
          <img
            src={window.__resources[theme === "dark" ? "logoDark" : "logoLight"]}
            alt="SHINUY · Architecture, Engineering & Design"
            style={{
              height: 80, width: "auto", display: "block",
              objectFit: "contain",
              filter: theme === "dark" ? "brightness(1.05)" : "none"
            }}
          />
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <ul style={{
            display: "flex", gap: 22, listStyle: "none", margin: 0, padding: 0,
            alignItems: "center"
          }} className="nav-links">
            {links.map((l, i) => (
              <li key={i}>
                <a href={"#" + ["approach","services","typology","roles","process","contact"][i]}
                   className="eyebrow"
                   style={{
                     textDecoration: "none",
                     color: "var(--text)",
                     opacity: 0.95,
                     padding: "8px 0",
                     borderBottom: "1px solid transparent",
                     transition: "border-color 200ms var(--ease), color 200ms var(--ease)"
                   }}
                   onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                   onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.color = "var(--text)"; }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Theme switcher (segmented pill) ── */}
          <div role="radiogroup" aria-label="Theme"
               style={{
                 display: "inline-flex",
                 alignItems: "center",
                 padding: 4,
                 borderRadius: 999,
                 border: "1px solid var(--hairline-strong)",
                 background: solid ? "transparent" : (theme === "dark" ? "rgba(14,14,12,0.45)" : "rgba(244,239,224,0.55)"),
                 backdropFilter: solid ? "none" : "blur(6px)",
                 WebkitBackdropFilter: solid ? "none" : "blur(6px)",
                 gap: 2
               }}>
            <ThemeChip active={theme === "dark"}  onClick={() => setTheme("dark")}  label="Essence"  dot="●" />
            <ThemeChip active={theme === "light"} onClick={() => setTheme("light")} label="Ceremony" dot="○" />
          </div>

          {/* Language — UA / RU / EN slash-separated text buttons */}
          <div role="radiogroup" aria-label="Language"
               style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
            {["ua", "ru", "en"].map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && (
                  <span aria-hidden="true" style={{ color: "var(--text-faint)", padding: "0 6px", fontSize: 12 }}>/</span>
                )}
                <button
                  type="button" role="radio" aria-checked={lang === l}
                  onClick={() => setLang(l)}
                  style={{
                    background: "none", border: "none", cursor: "pointer", padding: "6px 2px",
                    color: lang === l ? "var(--accent)" : "var(--text-faint)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11, fontWeight: lang === l ? 600 : 400,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    borderBottom: lang === l ? "1px solid var(--accent)" : "1px solid transparent",
                    transition: "color 200ms var(--ease), border-color 200ms var(--ease)"
                  }}
                >
                  {l.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>
      <style>{`
        @media (max-width: 1200px) { .nav-links { display: none; } }
      `}</style>
    </header>
  );
}

function LangChip({ active, onClick, label }) {
  return (
    <button
      type="button" role="radio" aria-checked={active}
      onClick={onClick}
      style={{
        padding: "6px 12px",
        borderRadius: 999,
        border: "none", cursor: "pointer",
        background: active ? "var(--accent)" : "transparent",
        color: active ? (document.body.getAttribute("data-theme") === "dark" ? "#0E0E0C" : "#F4EFE0") : "var(--text)",
        fontFamily: "Inter, sans-serif",
        fontSize: 11, fontWeight: 600,
        letterSpacing: "0.16em",
        transition: "background 200ms var(--ease), color 200ms var(--ease)"
      }}
    >
      {label}
    </button>
  );
}

function ThemeChip({ active, onClick, label, dot }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "8px 14px",
        borderRadius: 999,
        border: "none", cursor: "pointer",
        background: active ? "var(--accent)" : "transparent",
        color: active ? (document.body.getAttribute("data-theme") === "dark" ? "#0E0E0C" : "#F4EFE0") : "var(--text)",
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.20em",
        textTransform: "uppercase",
        transition: "background 240ms var(--ease), color 240ms var(--ease)"
      }}
    >
      <span style={{ fontSize: 8, opacity: active ? 1 : 0.55 }}>{dot}</span>
      {label}
    </button>
  );
}

/* ─────────── HERO (Section 9.2 · Mode A) ─────────── */
function Hero() {
  const { theme } = useTheme();
  const t = useT();
  return (
    <section id="top" style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "stretch" }}>
      {/* Background photo */}
      <div className="reveal-img in" style={{ position: "absolute", inset: 0 }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <ArchVisual variant="villa" label="001 · HERO" caption="Residence · concept 2024" />
        </div>
        <img
          key={theme}
          src={theme === "dark" ? PHOTOS.heroDark : PHOTOS.heroLight}
          alt="Modern residence at twilight"
          loading="eager"
          fetchpriority="high"
          className="tinted ken"
          style={{ position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Bottom-up gradient */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "var(--overlay-hero)" }} />
        {/* Side gradient to anchor left column reading */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "var(--overlay-hero-side)" }} />
      </div>

      {/* content — vertically centered */}
      <div className="container" style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column", justifyContent: "center",
        paddingTop: 120, paddingBottom: 80,
        width: "100%"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, alignItems: "center", width: "100%" }}>
          {/* Left — main content */}
          <div className="hero-left" style={{ gridColumn: "1 / span 8", display: "flex", flexDirection: "column", gap: 28 }}>
            <FadeUp delay={120}>
              <div className="eyebrow" style={{ letterSpacing: "0.36em", fontSize: 11 }}>
                {t.heroEyebrow}
              </div>
            </FadeUp>

            <FadeUp delay={260}>
              <h1 className="h-hero" style={{
                fontSize: "clamp(40px, 6.4vw, 84px)",
                lineHeight: 1.04
              }}>
                <span style={{ display: "block" }}>{t.heroLine1}</span>
                <span style={{ display: "block" }}>{t.heroLine2}</span>
                <span style={{
                  display: "inline-block",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--accent)",
                  fontSize: "clamp(56px, 9.2vw, 124px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.025em",
                  marginTop: 6
                }}>
                  {t.heroAccent}
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={420}>
              <p className="body-lg" style={{ maxWidth: 540, color: "var(--text)", opacity: 0.92 }}>
                {t.heroBody}
              </p>
            </FadeUp>

            <FadeUp delay={560}>
              <div style={{ display: "flex", gap: 36, alignItems: "baseline", flexWrap: "wrap", marginTop: 12 }}>
                <a href="#contact" className="cta-link">{t.heroCtaPrimary} <span className="arrow">→</span></a>
                <a href="#services" className="cta-link subtle">{t.heroCtaSecondary}</a>
              </div>
            </FadeUp>

            <FadeUp delay={680}>
              <div className="hero-stats" style={{
                marginTop: 36, paddingTop: 28,
                borderTop: "1px solid var(--hairline)",
                display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "0 56px"
              }}>
                {t.heroStats.map(([n, l], i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span className="num serif-italic" style={{ fontSize: 30, color: "var(--accent)", lineHeight: 1, fontWeight: 400 }}>{n}</span>
                    <span className="caption">{l}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — caption block */}
          <div className="hero-right" style={{ gridColumn: "10 / span 3", textAlign: "right", display: "flex", flexDirection: "column", gap: 12 }}>
            <FadeUp delay={760}>
              <div>
                <span className="caption" style={{ color: "var(--accent)" }}>{t.heroCaptionTag}</span>
                <div className="caption" style={{ color: "var(--text-dim)", marginTop: 8 }}>{t.heroCaptionObject}<br />{t.heroCaptionPhase}</div>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="scroll-ind" style={{ position: "absolute", left: "50%", bottom: 24, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span className="caption" style={{ fontSize: 9 }}>{t.scroll}</span>
          <span style={{ color: "var(--text)", opacity: 0.65 }}>↓</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .hero-right { display: none; }
          .hero-left { grid-column: 1 / -1 !important; }
        }
        @media (max-width: 720px) {
          .hero-stats { grid-template-columns: 1fr 1fr !important; row-gap: 22px !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────── Interstitial · Mode B ─────────── */
function Interstitial({ src, caption, height = "82vh", parallax = true, alt = "", variant = "interior" }) {
  return (
    <section style={{ position: "relative", width: "100vw", height, overflow: "hidden" }}>
      <ImagePlate
        src={src}
        alt={alt}
        ken={false}
        hairline={false}
        parallax={parallax}
        loading="lazy"
        overlay="var(--overlay-cinematic)"
        variant={variant}
        fallbackCaption={caption}
        style={{ position: "absolute", inset: 0 }}
      />
      {caption && (
        <div className="caption" style={{ position: "absolute", left: "clamp(24px, 6vw, 80px)", bottom: 32, zIndex: 3, color: "var(--text)" }}>
          {caption}
        </div>
      )}
    </section>
  );
}

/* ─────────── PHILOSOPHY (9.4 · Mode C split 50/50) ─────────── */
function Philosophy() {
  const { theme } = useTheme();
  const t = useT();
  return (
    <section id="approach" className="v-rhythm" style={{ background: "var(--bg)" }}>
      <div className="container-wide">
        <div className="philo-grid">
          <div>
            <ImagePlate
              src={theme === "dark" ? PHOTOS.philoDark : PHOTOS.philoLight}
              alt="Architectural detail — material study"
              ratio="4 / 5"
              captionBottom={t.philoImgCaption}
              loading="lazy"
              variant="detail"
              fallbackLabel="01 · PHILOSOPHY"
              fallbackCaption="Material study"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 40, paddingTop: 12 }}>
            <FadeUp><SectionIndex n={1} label={t.secPhilosophy} /></FadeUp>
            <FadeUp delay={100}>
              <h2 className="h-display serif">
                {t.philoH1Pre} <em className="accent serif-italic">{t.philoH1Em}</em>
              </h2>
            </FadeUp>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <FadeUp delay={180}>
                <p className="body-md">
                  {t.philoP1Lead} <span style={{ color: "var(--text)" }}>{t.philoP1Bold}</span>
                </p>
              </FadeUp>
              <div className="hairline-h" style={{ width: 80 }} />
              <FadeUp delay={240}>
                <p className="body-md">{t.philoP2}</p>
              </FadeUp>
              <div className="hairline-h" style={{ width: 80 }} />
              <FadeUp delay={300}>
                <p className="body-md">{t.philoP3}</p>
              </FadeUp>
            </div>

            <FadeUp delay={380}>
              <p className="serif-italic" style={{ fontSize: 22, lineHeight: 1.45, color: "var(--accent)", marginTop: 16, maxWidth: 520, letterSpacing: "0.005em" }}>
                {t.philoTagline}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
      <style>{`
        .philo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(48px, 7vw, 120px);
          align-items: start;
        }
        @media (max-width: 900px) { .philo-grid { grid-template-columns: 1fr; gap: 48px; } }
      `}</style>
    </section>
  );
}

/* ─────────── PRINCIPLES (9.5) — three columns each with a portfolio image ─────────── */
function Principles() {
  const t = useT();
  const ROMANS = ["i.", "ii.", "iii."];
  const IMAGES = [
    { img: PHOTOS.tk3,       alt: "Premium architecture detail" },
    { img: PHOTOS.heroDark,  alt: "Quiet evening patio" },
    { img: PHOTOS.cityCott,  alt: "Honest material — brick, oak, plaster" }
  ];
  const items = t.principlesItems.map((it, i) => ({
    ...it, ...IMAGES[i], n: ROMANS[i]
  }));
  return (
    <section className="v-rhythm-sm" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <FadeUp><SectionIndex n={2} label={t.secPrinciples} /></FadeUp>
          <FadeUp delay={100}>
            <h2 className="h-section serif" style={{ maxWidth: "16ch" }}>
              {t.principlesH1Pre} <em className="accent serif-italic">{t.principlesH1Em}</em>.
            </h2>
          </FadeUp>

          <FadeUp delay={260}>
            <div className="princ-grid" style={{ marginTop: 24 }}>
              {items.map((it, i) => (
                <div key={i} className="princ-col" style={{
                  display: "flex", flexDirection: "column", gap: 24,
                  borderRight: i < items.length - 1 ? "1px solid var(--hairline)" : "none",
                  padding: "0 36px 0 0"
                }}>
                  <div style={{ height: 260, position: "relative" }}>
                    <ImagePlate
                      src={it.img}
                      alt={it.alt}
                      hairline
                      variant="detail"
                      fallbackLabel={"0" + (i+1) + " · " + it.cap}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingTop: 12, borderTop: "1px solid var(--hairline-strong)" }}>
                    <span className="serif-italic" style={{ fontSize: 30, color: "var(--accent)", lineHeight: 1 }}>{it.n}</span>
                    <span className="eyebrow" style={{ fontSize: 12, letterSpacing: "0.36em" }}>{it.cap}</span>
                    <span className="serif-italic" style={{ fontSize: 22, color: "var(--text)", maxWidth: "16ch", lineHeight: 1.3 }}>
                      {it.body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
      <style>{`
        .princ-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
        .princ-col + .princ-col { padding-left: 36px; }
        @media (max-width: 1100px) {
          .princ-grid { grid-template-columns: 1fr; gap: 48px; }
          .princ-col { border-right: none !important; border-bottom: 1px solid var(--hairline); padding: 0 0 36px 0 !important; }
          .princ-col + .princ-col { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Interstitial, Philosophy, Principles });
