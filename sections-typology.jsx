/* sections-typology.jsx — Audience (9.7) + Typology (9.8) */

/* ─────────── AUDIENCE (9.7) ─────────── */
function Audience() {
  const t = useT();
  const IMG_MAP = [
    { img: PHOTOS.resComplex, imgAlt: "Residential complex facade",  variant: "complex"    },
    { img: PHOTOS.floatRest,  imgAlt: "Moody restaurant interior",   variant: "restaurant" },
    { img: PHOTOS.philoDark,  imgAlt: "Private residence interior",  variant: "interior"   }
  ];
  const rows = t.audienceRows.map((r, i) => ({
    roman: ["I", "II", "III"][i],
    ...r, ...IMG_MAP[i]
  }));

  return (
    <section className="v-rhythm" style={{ background: "var(--bg)", position: "relative" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <FadeUp><SectionIndex n={3} label={t.secAudience} /></FadeUp>
          <FadeUp delay={120}>
            <h2 className="h-display serif" style={{ maxWidth: "18ch" }}>
              {t.audienceH1Pre} <em className="accent serif-italic">{t.audienceH1Em}</em>.
            </h2>
          </FadeUp>

          <div style={{ marginTop: 24, borderTop: "1px solid var(--hairline)" }}>
            {rows.map((r, i) => (
              <AudienceRow key={i} {...r} delay={i * 80} last={i === rows.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceRow({ roman, title, body, aside, img, imgAlt, variant = "building", delay = 0, last }) {
  return (
    <FadeUp delay={delay}>
      <div className="aud-row" style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "72px 1fr 1.3fr 200px",
        gap: 36,
        padding: "48px 0",
        borderBottom: last ? "none" : "1px solid var(--hairline)",
        alignItems: "center"
      }}>
        <span className="serif-italic" style={{ fontSize: 44, color: "var(--accent)", lineHeight: 1 }}>{roman}</span>
        <h3 className="serif" style={{ margin: 0, fontWeight: 300, fontSize: "clamp(28px, 3vw, 38px)", letterSpacing: "-0.01em", color: "var(--text)" }}>{title}</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ margin: 0, fontSize: 17, color: "var(--text)", lineHeight: 1.55 }}>{body}</p>
          <p className="serif-italic" style={{ margin: 0, fontSize: 16, color: "var(--text-dim)", lineHeight: 1.6, maxWidth: "52ch" }}>{aside}</p>
        </div>
        <div className="aud-img" style={{ height: 200, position: "relative" }}>
          <ImagePlate src={img} alt={imgAlt} hairline variant={variant} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .aud-row { grid-template-columns: 56px 1fr 1.3fr !important; }
          .aud-img { display: none !important; }
        }
        @media (max-width: 720px) {
          .aud-row { grid-template-columns: 48px 1fr !important; }
          .aud-row > :nth-child(3) { grid-column: 1 / -1; padding-left: 48px; }
        }
      `}</style>
    </FadeUp>
  );
}

/* ─────────── TYPOLOGY (9.8) — six full-width slides ─────────── */
function Typology() {
  const t = useT();
  const META = [
    { id: "01", tag: "COTTAGES",              caption: "Carpathian region · 280 m² · oak, concrete, glass",  src: PHOTOS.cottage,    side: "left"  },
    { id: "02", tag: "CITY COTTAGES",          caption: "Lviv · 18 units · brick, oak, steel",                src: PHOTOS.cityCott,   side: "right" },
    { id: "03", tag: "VILLAS",                 caption: "Private residence · 620 m² · travertine, oak, brass", src: PHOTOS.villa,      side: "left"  },
    { id: "04", tag: "RESIDENTIAL COMPLEXES",  caption: "Mixed-use district · concept 2025",                  src: PHOTOS.resComplex, side: "right" },
    { id: "05", tag: "HoReCa",                 caption: "Restaurant · 420 m² · stone, walnut, brass",         src: PHOTOS.horeca,     side: "left"  },
    { id: "06", tag: "COMMERCIAL",             caption: "Headquarters · 1 200 m² · concrete, oak, linen",     src: PHOTOS.office,     side: "right" }
  ];
  const slides = META.map((m, i) => ({ ...m, ...t.typSlides[i] }));

  return (
    <section id="typology" className="v-rhythm" style={{ background: "var(--bg)" }}>
      <div className="container" style={{ marginBottom: 80 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <FadeUp><SectionIndex n={4} label={t.secTypology} /></FadeUp>
          <FadeUp delay={120}>
            <h2 className="h-display serif" style={{ maxWidth: "16ch" }}>
              {t.typH1Pre} <em className="accent serif-italic">{t.typH1Em}</em>.
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="body-lg serif-italic" style={{ color: "var(--text-dim)", fontSize: 22, maxWidth: "32ch" }}>
              {t.typSubtitle}
            </p>
          </FadeUp>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {slides.map((s, i) => <TypologySlide key={i} idx={i} {...s} />)}
      </div>

      <div className="container" style={{ marginTop: 120, textAlign: "center" }}>
        <FadeUp>
          <p className="serif-italic" style={{ fontSize: 22, color: "var(--text-dim)", lineHeight: 1.55, maxWidth: "44ch", margin: "0 auto" }}>
            {t.typClosing}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function TypologySlide({ id, tag, title, body, caption, src, side, idx }) {
  const left = side === "left";
  const variantMap = {
    "COTTAGES": "cottage", "CITY COTTAGES": "townhouse", "VILLAS": "villa",
    "RESIDENTIAL COMPLEXES": "complex", "HoReCa": "restaurant", "COMMERCIAL": "office"
  };
  const variant = variantMap[tag] || "building";
  return (
    <div className="typ-slide" style={{
      width: "100%",
      padding: "80px clamp(24px, 5vw, 100px)",
      borderTop: idx === 0 ? "none" : "1px solid var(--hairline)"
    }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, alignItems: "center", minHeight: "60vh" }}>
        {left ? (
          <>
            <div style={{ gridColumn: "1 / span 6" }}>
              <ImagePlate src={src} alt={title} ratio="4 / 5" loading="lazy" hairline
                variant={variant} fallbackLabel={id + " · " + tag} fallbackCaption={caption}
                captionBottom={null} />
            </div>
            <div style={{ gridColumn: "8 / span 5", display: "flex", flexDirection: "column", gap: 28 }}>
              <TypBody id={id} tag={tag} title={title} body={body} caption={caption} />
            </div>
          </>
        ) : (
          <>
            <div className="typ-text-right" style={{ gridColumn: "1 / span 5", display: "flex", flexDirection: "column", gap: 28 }}>
              <TypBody id={id} tag={tag} title={title} body={body} caption={caption} />
            </div>
            <div className="typ-img-right" style={{ gridColumn: "7 / span 6" }}>
              <ImagePlate src={src} alt={title} ratio="4 / 5" loading="lazy" hairline
                variant={variant} fallbackLabel={id + " · " + tag} fallbackCaption={caption} />
            </div>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .typ-slide > div { grid-template-columns: 1fr !important; gap: 36px !important; min-height: unset !important; }
          .typ-slide > div > div { grid-column: 1 / -1 !important; }
          .typ-text-right { order: 2; }
          .typ-img-right { order: 1; }
        }
      `}</style>
    </div>
  );
}

function TypBody({ id, tag, title, body, caption }) {
  return (
    <>
      <FadeUp><div className="eyebrow"><span className="num">{id}</span> · {tag}</div></FadeUp>
      <FadeUp delay={100}>
        <h3 className="h-section serif" style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}>
          <em className="accent serif-italic">{title}</em>
        </h3>
      </FadeUp>
      <FadeUp delay={180}>
        <p className="body-md" style={{ maxWidth: "44ch" }}>{body}</p>
      </FadeUp>
      <FadeUp delay={260}>
        <div style={{ marginTop: 8, paddingTop: 18, borderTop: "1px solid var(--hairline)" }}>
          <span className="caption">{caption}</span>
        </div>
      </FadeUp>
    </>
  );
}

Object.assign(window, { Audience, Typology });
