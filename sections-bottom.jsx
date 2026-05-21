/* sections-bottom.jsx — Process (9.13), Ticker (9.14), Quote (9.15), CTA (9.16), Footer (9.17) */

/* ─────────── PROCESS (9.13) — timeline with image per step ─────────── */
function Process() {
  const t = useT();
  const META = [
    { img: PHOTOS.cityCott,    variant: "detail"     },
    { img: PHOTOS.resComplex,  variant: "complex"    },
    { img: PHOTOS.philoDark,   variant: "detail"     },
    { img: PHOTOS.interArch2,  variant: "interior"   },
    { img: PHOTOS.office,      variant: "townhouse"  },
    { img: PHOTOS.horeca,      variant: "restaurant" },
    { img: PHOTOS.cinematic1,  variant: "villa"      }
  ];
  const steps = t.process.map(([num, cap, body], i) => ({ num, cap, body, ...META[i] }));

  return (
    <section id="process" className="v-rhythm" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <FadeUp><SectionIndex n={8} label={t.secProcess} /></FadeUp>
          <FadeUp delay={100}>
            <h2 className="h-display serif" style={{ maxWidth: "14ch" }}>
              {t.processH1Pre} <em className="accent serif-italic">{t.processH1Em}</em>.
            </h2>
          </FadeUp>

          <div style={{ marginTop: 24 }}>
            {steps.map((s, i) => <ProcessRow key={i} {...s} delay={i * 60} last={i === steps.length - 1} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({ num, cap, body, img, variant, delay, last }) {
  return (
    <FadeUp delay={delay}>
      <div className="proc-row" style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "260px 80px 220px 1fr",
        gap: 36,
        padding: "32px 0",
        borderTop: "1px solid var(--hairline)",
        borderBottom: last ? "1px solid var(--hairline)" : "none",
        alignItems: "center"
      }}>
        <div className="proc-img" style={{ height: 180, position: "relative" }}>
          <ImagePlate
            src={img}
            alt={cap}
            hairline
            variant={variant}
            fallbackLabel={num + " · " + cap}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <span className="serif-italic num" style={{ fontSize: 48, color: "var(--accent)", lineHeight: 1, justifySelf: "start" }}>{num}</span>
        <span className="eyebrow" style={{ fontSize: 13, letterSpacing: "0.28em" }}>{cap}</span>
        <span className="serif-italic" style={{ fontSize: 17, color: "var(--text-dim)", lineHeight: 1.55, maxWidth: "56ch" }}>{body}</span>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .proc-row { grid-template-columns: 200px 60px 1fr !important; gap: 24px !important; }
          .proc-row > :nth-child(4) { grid-column: 2 / -1; padding-left: 0; }
        }
        @media (max-width: 720px) {
          .proc-row { grid-template-columns: 1fr !important; gap: 18px !important; }
          .proc-row > :nth-child(1) { height: 220px !important; }
        }
      `}</style>
    </FadeUp>
  );
}

/* ─────────── TICKER (9.14) ─────────── */
function Ticker() {
  const t = useT();
  const items = [
    { src: PHOTOS.tk1, variant: "cottage",    label: "01" },
    { src: PHOTOS.tk2, variant: "restaurant", label: "02" },
    { src: PHOTOS.tk3, variant: "building",   label: "03" },
    { src: PHOTOS.tk4, variant: "detail",     label: "04" },
    { src: PHOTOS.tk5, variant: "interior",   label: "05" }
  ];
  return (
    <section style={{ background: "var(--bg)" }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, height: 260, borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }} className="tk-grid">
        {items.map((it, i) => (
          <div key={i} style={{
            position: "relative",
            borderRight: i < items.length - 1 ? "1px solid var(--hairline)" : "none",
            overflow: "hidden"
          }}>
            <ImagePlate
              src={it.src}
              alt={"Selected project " + (i + 1)}
              hairline={false}
              variant={it.variant}
              fallbackLabel={it.label}
              style={{ position: "absolute", inset: 0 }}
            />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", padding: "22px 0 6px" }}>
        <span className="caption">{t.tickerCaption}</span>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .tk-grid { grid-template-columns: repeat(5, 70vw) !important; overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}

/* ─────────── QUOTE (9.15) ─────────── */
function Quote() {
  const t = useT();
  return (
    <section className="v-rhythm" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <DarkOnly>
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, filter: "blur(10px)", pointerEvents: "none" }}>
          <img src={PHOTOS.textureWood} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </DarkOnly>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <FadeUp>
          <blockquote className="serif-italic" style={{
            margin: 0,
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 52px)",
            lineHeight: 1.28,
            color: "var(--text)",
            maxWidth: "26ch",
            marginLeft: "auto", marginRight: "auto",
            letterSpacing: "-0.005em"
          }}>
            {t.quoteBody} <em className="accent serif-italic">{t.quoteEm}</em>{t.quoteRest}
          </blockquote>
        </FadeUp>
        <FadeUp delay={160}>
          <div style={{ marginTop: 56, textAlign: "center" }}>
            <span className="eyebrow" style={{ letterSpacing: "0.4em" }}>{t.quoteSource}</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function DarkOnly({ children }) {
  const { theme } = useTheme();
  return theme === "dark" ? children : null;
}

/* ─────────── CTA (9.16) ─────────── */
function CTA() {
  const { theme } = useTheme();
  const t = useT();
  return (
    <section id="contact" style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div className="reveal-img in" style={{ position: "absolute", inset: 0 }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <ArchVisual variant="landscape" label="09 · BEGIN" caption="Begin a project" />
        </div>
        <img
          key={theme}
          src={theme === "dark" ? PHOTOS.ctaDark : PHOTOS.ctaLight}
          alt="Landscape — invitation to begin"
          className="tinted ken"
          loading="lazy"
          style={{ position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "var(--overlay-cta)" }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "120px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 36, alignItems: "center", maxWidth: 720, margin: "0 auto" }}>
          <FadeUp><SectionIndex n={9} label={t.secStart} /></FadeUp>
          <FadeUp delay={120}>
            <h2 className="h-display serif" style={{ textAlign: "center", maxWidth: "18ch" }}>
              {t.ctaH1Pre} <em className="accent serif-italic">{t.ctaH1Em}</em>{t.ctaH1Post}
            </h2>
          </FadeUp>
          <FadeUp delay={220}>
            <p className="serif-italic" style={{ fontSize: 20, color: "var(--text-dim)", maxWidth: "44ch", margin: 0, textAlign: "center" }}>
              {t.ctaSubtitle}
            </p>
          </FadeUp>
          <FadeUp delay={320}>
            <div style={{ display: "flex", gap: 36, alignItems: "baseline", flexWrap: "wrap", justifyContent: "center", marginTop: 16 }}>
              <a href="mailto:brand@shinuy.ua" className="cta-link">{t.ctaPrimary} <span className="arrow">→</span></a>
              <a href="#" className="cta-link subtle">{t.ctaSecondary}</a>
            </div>
          </FadeUp>
          <FadeUp delay={420}>
            <div style={{ marginTop: 56, display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="mailto:brand@shinuy.ua" className="caption" style={{ color: "var(--text)", textDecoration: "none" }}>brand@shinuy.ua</a>
              <span className="caption" style={{ color: "var(--text-faint)" }}>·</span>
              <span className="caption" style={{ color: "var(--text)" }}>shinuy.ua</span>
              {t.ctaCities.map((city, i) => (
                <React.Fragment key={i}>
                  <span className="caption" style={{ color: "var(--text-faint)" }}>·</span>
                  <span className="caption" style={{ color: "var(--text-dim)" }}>{city}</span>
                </React.Fragment>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─────────── FOOTER ─────────── */
function Footer() {
  const { theme } = useTheme();
  const t = useT();
  return (
    <footer style={{ background: theme === "dark" ? "#0E0E0C" : "#F4EFE0", padding: "36px clamp(24px, 5vw, 80px)", borderTop: "1px solid var(--hairline)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, alignItems: "center" }} className="ft-grid">
        <a href="#top" aria-label="SHINUY · Architecture, Engineering & Design" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          <img
            src={window.__resources[theme === "dark" ? "logoDark" : "logoLight"]}
            alt="SHINUY"
            style={{ height: 64, width: "auto", display: "block", objectFit: "contain", filter: theme === "dark" ? "brightness(1.05)" : "none" }}
          />
        </a>
        <span className="caption" style={{ textAlign: "center", color: "var(--text-dim)" }}>{t.footerCopy}</span>
        <span className="caption" style={{ textAlign: "right", color: "var(--text-faint)", letterSpacing: "0.32em" }}>{t.footerVol}</span>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .ft-grid { grid-template-columns: 1fr !important; gap: 16px !important; text-align: center !important; }
          .ft-grid > :nth-child(1) { justify-content: center !important; }
          .ft-grid > :nth-child(3) { text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}

Object.assign(window, { Process, Ticker, Quote, CTA, Footer });
