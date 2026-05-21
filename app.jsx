/* app.jsx — root composition + i18n */

const TWEAK_DEFAULTS = {
  theme: "dark",
  lang: "ua",
  showTicker: true,
  interstitialParallax: true,
  accent: "#8B7B4F"
};

function App() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setTweaks((prev) => ({ ...prev, ...edits }));
  }, []);
  const setTheme = (t) => setTweak("theme", t);
  const setLang = (l) => setTweak("lang", l);

  useEffect(() => {
    document.body.style.setProperty("--accent", tweaks.accent || "#8B7B4F");
  }, [tweaks.accent]);

  useEffect(() => {
    document.documentElement.lang = tweaks.lang || "ua";
  }, [tweaks.lang]);

  return (
    <LangCtx.Provider value={{ lang: tweaks.lang || "ua", setLang }}>
      <ThemeProvider value={tweaks.theme} setValue={setTheme}>
        <InnerApp tweaks={tweaks} />
      </ThemeProvider>
    </LangCtx.Provider>
  );
}

function InnerApp({ tweaks }) {
  const t = useT();
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Interstitial
          src={PHOTOS.interArch2}
          alt="Architectural facade detail"
          caption={t.interArchCaption}
          parallax={tweaks.interstitialParallax}
        />

        <Philosophy />
        <Principles />

        <Interstitial
          src={PHOTOS.cinematic1}
          alt="Wide interior with daylight"
          caption={t.interCinematicCaption}
          parallax={tweaks.interstitialParallax}
        />

        <Audience />
        <Typology />
        <Services />
        <Roles />
        <Advantages />
        <Process />

        {tweaks.showTicker && <Ticker />}

        <Quote />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
