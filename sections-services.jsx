/* sections-services.jsx — Services (9.9), Roles (9.11), Team, Advantages (9.12) */

/* ─────────── SERVICES (9.9) ─────────── */
function Services() {
  const t = useT();
  return (
    <section id="services" className="v-rhythm" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <FadeUp><SectionIndex n={5} label={t.secServices} /></FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "clamp(40px, 6vw, 96px)", alignItems: "end" }} className="srv-head">
            <FadeUp delay={100}>
              <h2 className="h-display serif" style={{ maxWidth: "18ch" }}>
                <em className="accent serif-italic">{t.servicesH1Em}</em> {t.servicesH1Pre}
              </h2>
            </FadeUp>
            <FadeUp delay={180}>
              <div style={{ height: 280, position: "relative" }}>
                <ImagePlate
                  src={PHOTOS.cinematic2}
                  alt="Architectural detail — material study"
                  hairline
                  variant="interior"
                  fallbackLabel="05 · SERVICES"
                  fallbackCaption="Project documentation · stage P"
                  style={{ width: "100%", height: "100%" }}
                  captionBottom={t.servicesHeadCaption}
                />
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={220}>
            <div className="srv-grid">
              {t.servicesItems.map(([name, def], i) => <ServiceRow key={i} n={i + 1} name={name} def={def} />)}
            </div>
          </FadeUp>

          <FadeUp delay={300}>
            <p className="serif-italic" style={{ color: "var(--text-dim)", fontSize: 17, marginTop: 24, maxWidth: "60ch" }}>
              {t.servicesFootnote}
            </p>
          </FadeUp>
        </div>
      </div>
      <style>{`
        .srv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 80px; }
        @media (max-width: 1100px) { .srv-head { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px) { .srv-grid { grid-template-columns: 1fr; gap: 0; } }
      `}</style>
    </section>
  );
}

function ServiceRow({ n, name, def }) {
  return (
    <div className="srv-row" style={{
      display: "grid",
      gridTemplateColumns: "44px 1fr",
      gap: 18,
      padding: "22px 0",
      borderBottom: "1px solid var(--hairline)",
      alignItems: "baseline"
    }}>
      <span className="caption num" style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.18em" }}>{String(n).padStart(2, "0")}</span>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "baseline", flexWrap: "wrap" }}>
        <span style={{ fontSize: 16, color: "var(--text)", fontWeight: 400, letterSpacing: "-0.005em", maxWidth: "30ch", flex: "0 1 auto" }}>{name}</span>
        <span className="serif-italic" style={{ fontSize: 14, color: "var(--text-dim)", textAlign: "right", maxWidth: "44ch", flex: "1 1 200px" }}>{def}</span>
      </div>
    </div>
  );
}

/* ─────────── ROLES (9.11) — each role split-50/50 with image ─────────── */
function Roles() {
  const t = useT();
  const IMG_MAP = [
    { img: PHOTOS.cottage,     alt: "Cottage facade — single-section delivery",   variant: "cottage" },
    { img: PHOTOS.resComplex,  alt: "Residential complex — stage P documentation", variant: "complex" },
    { img: PHOTOS.cinematic1,  alt: "Realised villa — stage R, author supervision", variant: "villa"   }
  ];
  const roles = t.roles.map((r, i) => ({ ...r, ...IMG_MAP[i] }));

  return (
    <section id="roles" className="v-rhythm" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <FadeUp><SectionIndex n={6} label={t.secRoles} /></FadeUp>
          <FadeUp delay={100}>
            <h2 className="h-display serif" style={{ maxWidth: "18ch" }}>
              {t.rolesH1Pre} <em className="accent serif-italic">{t.rolesH1Em}</em>.
            </h2>
          </FadeUp>

          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 0 }}>
            {roles.map((r, i) => <RoleRow key={i} idx={i} {...r} important={t.rolesImportant} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleRow({ idx, tag, name, body, note, img, alt, variant, important }) {
  const imgRight = idx % 2 === 1;
  const imgPlate = (
    <div style={{ height: 380, position: "relative", gridArea: "img" }}>
      <ImagePlate
        src={img} alt={alt} hairline variant={variant}
        fallbackLabel={tag} fallbackCaption={name}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
  const content = (
    <div style={{ gridArea: "txt", display: "flex", flexDirection: "column", gap: 24, alignSelf: "center" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 28 }}>
        <span className="serif-italic num" style={{ fontSize: 64, color: "var(--accent)", lineHeight: 0.9 }}>{["I", "II", "III"][idx]}</span>
        <span className="eyebrow">{tag}</span>
      </div>
      <h3 className="serif" style={{ margin: 0, fontWeight: 300, fontSize: "clamp(26px, 2.8vw, 36px)", letterSpacing: "-0.01em", color: "var(--text)", lineHeight: 1.15, maxWidth: "18ch" }}>
        {name}
      </h3>
      <p style={{ margin: 0, fontSize: 16, color: "var(--text)", lineHeight: 1.6, maxWidth: "52ch" }}>{body}</p>
      <p style={{ margin: 0, paddingTop: 14, borderTop: "1px solid var(--hairline)" }}>
        <span className="caption" style={{ color: "var(--accent)", marginRight: 10 }}>{important}</span>
        <span className="serif-italic" style={{ fontSize: 15, color: "var(--text-dim)", lineHeight: 1.6 }}>{note}</span>
      </p>
    </div>
  );

  return (
    <FadeUp delay={idx * 100}>
      <div className="role-row" style={{
        display: "grid",
        gridTemplateColumns: "1fr clamp(40px, 6vw, 96px) 1fr",
        gridTemplateAreas: imgRight ? `"txt . img"` : `"img . txt"`,
        gap: 0,
        padding: "72px 0",
        borderTop: "1px solid var(--hairline-strong)",
        alignItems: "stretch"
      }}>
        {imgPlate}
        {content}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .role-row { grid-template-columns: 1fr !important; grid-template-areas: "img" "txt" !important; gap: 28px !important; padding: 48px 0 !important; }
        }
      `}</style>
    </FadeUp>
  );
}

/* ─────────── TEAM ─────────── */
function Team() {
  const t = useT();
  return (
    <section id="team" className="v-rhythm" style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--hairline)" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <FadeUp><SectionIndex n={7} label={t.secTeam} /></FadeUp>
          <FadeUp delay={100}>
            <h2 className="h-display serif" style={{ maxWidth: "18ch" }}>
              {t.teamH1Pre} <em className="accent serif-italic">{t.teamH1Em}</em>.
            </h2>
          </FadeUp>

          <div className="team-grid" style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(32px, 4vw, 56px)"
          }}>
            {t.team.map((m, i) => <TeamCard key={i} idx={i} name={m.name} role={m.role} />)}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}

function TeamCard({ idx, name, role }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <FadeUp delay={idx * 100}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 24,
        paddingTop: 36,
        borderTop: "1px solid var(--hairline-strong)"
      }}>
        <div
          className="serif"
          aria-hidden="true"
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "1px solid var(--accent-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            letterSpacing: "0.04em",
            color: "var(--accent)",
            background: "transparent"
          }}
        >
          {initials}
        </div>
        <h3
          className="serif"
          style={{
            margin: 0,
            fontWeight: 300,
            fontSize: "clamp(22px, 2vw, 26px)",
            letterSpacing: "-0.01em",
            color: "var(--text)",
            lineHeight: 1.2,
            maxWidth: "18ch"
          }}
        >
          {name}
        </h3>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>{role}</span>
      </div>
    </FadeUp>
  );
}

/* ─────────── ADVANTAGES (9.12) ─────────── */
function Advantages() {
  const t = useT();
  return (
    <section className="v-rhythm" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <FadeUp><SectionIndex n={8} label={t.secAdvantages} /></FadeUp>

          <div className="adv-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 96px)", alignItems: "end" }}>
            <FadeUp delay={100}>
              <h2 className="h-display serif" style={{ maxWidth: "20ch" }}>
                {t.advH1Pre} <em className="accent serif-italic">{t.advH1Em}</em>.
              </h2>
            </FadeUp>
            <FadeUp delay={180}>
              <div style={{ height: 240, position: "relative" }}>
                <ImagePlate
                  src={PHOTOS.villa}
                  alt="Realised villa — material, light, restraint"
                  hairline
                  variant="villa"
                  fallbackLabel="07 · ADVANTAGES"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={240}>
            <div style={{ marginTop: 24, borderTop: "1px solid var(--hairline)" }}>
              {t.advantages.map(([rom, cap, def], i) => <AdvRow key={i} rom={rom} cap={cap} def={def} />)}
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .adv-head { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function AdvRow({ rom, cap, def }) {
  return (
    <div className="adv-row" style={{
      display: "grid",
      gridTemplateColumns: "70px 1fr 1.4fr",
      gap: 28,
      padding: "26px 0",
      borderBottom: "1px solid var(--hairline)",
      alignItems: "baseline"
    }}>
      <span className="serif-italic" style={{ fontSize: 20, color: "var(--accent)" }}>{rom}</span>
      <span className="eyebrow" style={{ fontSize: 12, letterSpacing: "0.22em" }}>{cap}</span>
      <span className="serif-italic" style={{ fontSize: 17, color: "var(--text-dim)", lineHeight: 1.55 }}>{def}</span>
      <style>{`
        @media (max-width: 720px) {
          .adv-row { grid-template-columns: 60px 1fr !important; }
          .adv-row > :nth-child(3) { grid-column: 2; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { Services, Roles, Team, Advantages });
