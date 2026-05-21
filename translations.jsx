/* translations.jsx — UA / RU / EN strings + LangContext + useT hook */

const LangCtx = React.createContext({ lang: "ua", setLang: () => {} });
const useLang = () => React.useContext(LangCtx);

const TRANSLATIONS = {
  ua: {
    // ── Nav
    navLinks: ["ПІДХІД", "ПОСЛУГИ", "ТИПОЛОГІЯ", "РОЛІ", "ПРОЦЕС", "КОНТАКТ"],

    // ── Hero
    heroEyebrow: "A R C H I T E C T U R E  ·  E N G I N E E R I N G  ·  D E S I G N",
    heroLine1: "SHINUY створює",
    heroLine2: "нерухомість як",
    heroAccent: "продукт.",
    heroBody: "Архітектура, urban design, дизайн інтер'єру, проєктна документація та комерційне пакування для об'єктів нерухомості, які мають бути красивими, функціональними і ринково зрозумілими.",
    heroCtaPrimary: "Почати проєкт",
    heroCtaSecondary: "Переглянути послуги",
    heroStats: [
      ["12+", "років практики"],
      ["54",  "реалізованих об'єктів"],
      ["6",   "країн"]
    ],
    heroCaptionTag: "001 / SHINUY · 2026",
    heroCaptionObject: "Residence in Carpathians",
    heroCaptionPhase: "concept 2024",
    scroll: "scroll",

    // ── Section labels
    secPhilosophy: "ФІЛОСОФІЯ",
    secPrinciples: "ПРИНЦИПИ",
    secAudience: "АУДИТОРІЯ",
    secTypology: "ТИПОЛОГІЯ",
    secServices: "ПОСЛУГИ",
    secRoles: "РОЛІ",
    secAdvantages: "ПЕРЕВАГИ",
    secProcess: "ПРОЦЕС",
    secStart: "РОЗПОЧАТИ",

    // ── Interstitials
    interArchCaption: "↳ Project memory · object 04",
    interCinematicCaption: "Selected projects · 2019 — 2026",

    // ── Philosophy
    philoH1Pre: "Нерухомість — це не просто простір.",
    philoH1Em:  "Це продукт.",
    philoP1Lead: "У SHINUY ми вважаємо, що кожен об'єкт нерухомості має відповісти на три питання ще до початку проєктування:",
    philoP1Bold: "Для кого він створюється? Чому його оберуть? Як архітектура, дизайн і документація мають підтримати його цінність?",
    philoP2: "Тому ми не починаємо з декору. Ми починаємо з продуктової логіки. Аналізуємо клієнта, ринок, локацію, сценарії використання, комерційну логіку та майбутній досвід простору.",
    philoP3: "Потім перетворюємо це на архітектуру, master plan, urban design, дизайн інтер'єру, проєктну документацію та матеріали для презентації й продажів.",
    philoTagline: "Ринково обґрунтовано · архітектурно сильно · візуально зрозуміло · готово до реалізації.",
    philoImgCaption: "↳ Detail · 03",

    // ── Principles
    principlesH1Pre: "Три опори, що тримають SHINUY у",
    principlesH1Em:  "вертикалі",
    principlesItems: [
      { cap: "ТОЧНІСТЬ", body: "у міліметрах і словах." },
      { cap: "ТИША",     body: "простір, що не кричить." },
      { cap: "ЧЕСНІСТЬ", body: "матеріалу й конструкції." }
    ],

    // ── Audience
    audienceH1Pre: "Для девелоперів, бізнесу та",
    audienceH1Em:  "приватних клієнтів",
    audienceRows: [
      {
        title: "Девелопери",
        body:  "Житлові комплекси, клубні будинки, котеджні містечка, реконцепції.",
        aside: "Допомагаємо створити ринково зрозумілий продукт, сформувати позиціонування, розробити архітектуру, координувати стадії проєктування."
      },
      {
        title: "Бізнес",
        body:  "Ресторани, кафе, готелі, офіси, шоуруми, клініки, сервісні простори.",
        aside: "Створюємо простір, який працює на бренд, клієнтський досвід та комерційний результат."
      },
      {
        title: "Приватні клієнти",
        body:  "Квартири, будинки, приватні резиденції, інвестиційна нерухомість.",
        aside: "Архітектура, дизайн інтер'єру, специфікації, авторський нагляд."
      }
    ],

    // ── Typology
    typH1Pre: "Що ми",
    typH1Em:  "створюємо",
    typSubtitle: "Шість типів об'єктів. Один підхід.",
    typClosing: "Кожен тип — окремий продукт. Один підхід — створювати нерухомість, яку обирають.",
    typSlides: [
      { title: "Дім, що тримає тишу",          body: "Архітектура та інтер'єр приватних будинків — від ескізу до реалізації. Дерево, камінь, велике скло, контрольоване світло." },
      { title: "Місто, що поважає особисте",   body: "Таунхаус-формат для девелоперів, які створюють зрілу житлову забудову замість багатоповерхового масиву." },
      { title: "Вілла як портрет клієнта",     body: "Великі приватні резиденції з індивідуальним сценарієм, авторським дизайном, повним циклом документації та авторським наглядом." },
      { title: "ЖК як продукт, а не квадратні метри", body: "Архітектурна концепція, urban design, документація та комерційне пакування для девелоперських проєктів — від клубних будинків до повноформатних кварталів." },
      { title: "Сцена для досвіду",            body: "Дизайн ресторанів, кафе, готелів та сервісних просторів — від концепції до робочої документації, з урахуванням бренду та операційної логіки." },
      { title: "Простір, що працює на бренд",  body: "Інтер'єри офісів, шоурумів, клінік та комерційних просторів — від планування до специфікацій матеріалів." }
    ],

    // ── Services
    servicesH1Pre: "напрямів. Одна система.",
    servicesH1Em:  "Тринадцять",
    servicesFootnote: "Послуги можуть бути поєднані в одну роботу або взяті окремо.",
    servicesHeadCaption: "↳ project documentation · stage P",
    servicesItems: [
      ["Маркетинговий продукт проєкту нерухомості", "ринкова й продуктова логіка майбутнього об'єкта."],
      ["Архітектурна концепція", "продуктова ідея, переведена в архітектуру."],
      ["Master Plan", "структура території та логіка розміщення об'єктів."],
      ["Urban Design", "середовище навколо об'єкта; життя між будинками."],
      ["Ескізний проєкт", "розвиток концепції до основи наступної стадії."],
      ["Стадія П", "проєктна документація для експертизи та дозвільного процесу."],
      ["Стадія Р", "робоча документація для будівельних та інженерних робіт."],
      ["Exterior Design", "зовнішній образ об'єкта, фасади, вхідні групи."],
      ["Interior Design", "інтер'єри для життя, роботи, гостинності та комерції."],
      ["Landscape Design", "ландшафтна логіка як частина середовища."],
      ["Комерційні альбоми", "матеріали для презентації, продажів і маркетингу."],
      ["Специфікації та рекомендації матеріалів", "згідно з розробленою документацією."],
      ["Авторський нагляд", "за документацією, яку SHINUY розробила сама."]
    ],

    // ── Roles
    rolesH1Pre: "Одна компанія.",
    rolesH1Em:  "Три зрозумілі ролі",
    rolesImportant: "Важливо",
    roles: [
      { tag: "Роль I",   name: "Профільний виконавець",
        body: "SHINUY виконує погоджені архітектурні, дизайнерські, urban design, документаційні розділи.",
        note: "Відповідальність: лише за свої розділи. Координація повного пакету — на боці клієнта або його генпроєктувальника." },
      { tag: "Роль II",  name: "Генпроєктувальник по стадії П",
        body: "SHINUY координує повний проєктний пакет стадії П: проєктна команда, профільні виконавці, комплектність, експертиза.",
        note: "Дозвіл на будівництво подає та отримує замовник." },
      { tag: "Роль III", name: "Генпроєктувальник по стадії Р",
        body: "SHINUY координує повний комплект робочої документації: архітектурні, конструктивні, інженерні розділи, контроль колізій, передача документації.",
        note: "Авторський нагляд — у супровідному форматі за домовленістю." }
    ],

    // ── Advantages
    advH1Pre: "Чому клієнти обирають",
    advH1Em:  "SHINUY",
    advantages: [
      ["i",   "PRODUCT THINKING",  "Мислимо ринком, клієнтом, попитом і майбутньою цінністю."],
      ["ii",  "ARCHITECTURE + DESIGN + URBAN DESIGN", "Об'єкт як цілісне середовище, не набір фрагментів."],
      ["iii", "КОМЕРЦІЙНА ЛОГІКА", "Зрозуміло для клієнтів, інвесторів, відділу продажів."],
      ["iv",  "ГНУЧКА РОЛЬ",       "Профільний виконавець або генпроєктувальник по П / Р."],
      ["v",   "NO-HEADACHE КООРДИНАЦІЯ", "Беремо складну проєктну координацію в межах scope."],
      ["vi",  "КОМЕРЦІЙНЕ ПАКУВАННЯ", "Не лише дизайн, а матеріали для презентації та продажів."],
      ["vii", "АВТОРСЬКИЙ НАГЛЯД", "Супроводжуємо реалізацію власних рішень."]
    ],

    // ── Process
    processH1Pre: "Як ми",
    processH1Em:  "працюємо",
    process: [
      ["01", "BRIEF",                  "Цілі, тип клієнта, об'єкт, локація, бюджетна логіка, очікуваний результат."],
      ["02", "PRODUCT LOGIC",          "Для кого, яка цінність, чим відрізняється від альтернатив."],
      ["03", "CONCEPT",                "Архітектурний, просторовий, візуальний і функціональний напрям."],
      ["04", "DESIGN & DOCUMENTATION", "Дизайнерські розділи, проєктна та робоча документація."],
      ["05", "COORDINATION",           "Координація профільних виконавців і комплектності документації."],
      ["06", "COMMERCIAL PACKAGING",   "Візуальні та презентаційні матеріали для продажів."],
      ["07", "AUTHOR SUPERVISION",     "Супровід реалізації рішень SHINUY у межах scope."]
    ],

    // ── Ticker + Quote
    tickerCaption: "Selected projects · 2019 — 2026 · 12 cities · 6 countries",
    quoteBody: "«Ми обіцяємо не модне, а",
    quoteEm:   "доречне",
    quoteRest: ". Не гучне, а точне. Не ідеальне — а людське, добре зроблене, і таке, що витримує час.»",
    quoteSource: "—  О Б І Ц Я Н К А    Б Р Е Н Д У",

    // ── CTA
    ctaH1Pre: "Маєте ділянку, простір або",
    ctaH1Em:  "ідею",
    ctaH1Post: "?",
    ctaSubtitle: "Давайте визначимо, яким продуктом нерухомості це може стати.",
    ctaPrimary:   "Отримати консультацію",
    ctaSecondary: "Обговорити проєкт",
    ctaCities: ["Одеса", "Київ"],

    // ── Footer
    footerCopy: "© 2026 SHINUY · Усі права захищені",
    footerVol: "· VOL. 01 · CONFIDENTIAL · INTERNAL USE"
  },

  ru: {
    navLinks: ["ПОДХОД", "УСЛУГИ", "ТИПОЛОГИЯ", "РОЛИ", "ПРОЦЕСС", "КОНТАКТ"],

    heroEyebrow: "A R C H I T E C T U R E  ·  E N G I N E E R I N G  ·  D E S I G N",
    heroLine1: "SHINUY создаёт",
    heroLine2: "недвижимость как",
    heroAccent: "продукт.",
    heroBody: "Архитектура, urban design, дизайн интерьера, проектная документация и коммерческая упаковка для объектов недвижимости, которые должны быть красивыми, функциональными и понятными рынку.",
    heroCtaPrimary: "Начать проект",
    heroCtaSecondary: "Посмотреть услуги",
    heroStats: [
      ["12+", "лет практики"],
      ["54",  "реализованных объектов"],
      ["6",   "стран"]
    ],
    heroCaptionTag: "001 / SHINUY · 2026",
    heroCaptionObject: "Резиденция в Карпатах",
    heroCaptionPhase: "концепт 2024",
    scroll: "scroll",

    secPhilosophy: "ФИЛОСОФИЯ",
    secPrinciples: "ПРИНЦИПЫ",
    secAudience: "АУДИТОРИЯ",
    secTypology: "ТИПОЛОГИЯ",
    secServices: "УСЛУГИ",
    secRoles: "РОЛИ",
    secAdvantages: "ПРЕИМУЩЕСТВА",
    secProcess: "ПРОЦЕСС",
    secStart: "НАЧАТЬ",

    interArchCaption: "↳ Project memory · object 04",
    interCinematicCaption: "Selected projects · 2019 — 2026",

    philoH1Pre: "Недвижимость — это не просто пространство.",
    philoH1Em:  "Это продукт.",
    philoP1Lead: "В SHINUY мы считаем, что каждый объект недвижимости должен ответить на три вопроса ещё до начала проектирования:",
    philoP1Bold: "Для кого он создаётся? Почему его выберут? Как архитектура, дизайн и документация поддержат его ценность?",
    philoP2: "Поэтому мы не начинаем с декора. Мы начинаем с продуктовой логики. Анализируем клиента, рынок, локацию, сценарии использования, коммерческую логику и будущий опыт пространства.",
    philoP3: "Затем превращаем это в архитектуру, master plan, urban design, дизайн интерьера, проектную документацию и материалы для презентации и продаж.",
    philoTagline: "Рыночно обосновано · архитектурно сильно · визуально понятно · готово к реализации.",
    philoImgCaption: "↳ Detail · 03",

    principlesH1Pre: "Три опоры, удерживающие SHINUY в",
    principlesH1Em:  "вертикали",
    principlesItems: [
      { cap: "ТОЧНОСТЬ", body: "в миллиметрах и в словах." },
      { cap: "ТИШИНА",   body: "пространство, что не кричит." },
      { cap: "ЧЕСТНОСТЬ", body: "материала и конструкции." }
    ],

    audienceH1Pre: "Для девелоперов, бизнеса и",
    audienceH1Em:  "частных клиентов",
    audienceRows: [
      {
        title: "Девелоперы",
        body:  "Жилые комплексы, клубные дома, коттеджные посёлки, реконцепции.",
        aside: "Помогаем создать понятный рынку продукт, сформировать позиционирование, разработать архитектуру, координировать стадии проектирования."
      },
      {
        title: "Бизнес",
        body:  "Рестораны, кафе, отели, офисы, шоурумы, клиники, сервисные пространства.",
        aside: "Создаём пространство, которое работает на бренд, клиентский опыт и коммерческий результат."
      },
      {
        title: "Частные клиенты",
        body:  "Квартиры, дома, частные резиденции, инвестиционная недвижимость.",
        aside: "Архитектура, дизайн интерьера, спецификации, авторский надзор."
      }
    ],

    typH1Pre: "Что мы",
    typH1Em:  "создаём",
    typSubtitle: "Шесть типов объектов. Один подход.",
    typClosing: "Каждый тип — отдельный продукт. Один подход — создавать недвижимость, которую выбирают.",
    typSlides: [
      { title: "Дом, который держит тишину",       body: "Архитектура и интерьер частных домов — от эскиза до реализации. Дерево, камень, большое стекло, контролируемый свет." },
      { title: "Город, уважающий личное",          body: "Таунхаус-формат для девелоперов, создающих зрелую жилую застройку вместо многоэтажного массива." },
      { title: "Вилла как портрет клиента",        body: "Крупные частные резиденции с индивидуальным сценарием, авторским дизайном, полным циклом документации и авторским надзором." },
      { title: "ЖК как продукт, а не квадратные метры", body: "Архитектурная концепция, urban design, документация и коммерческая упаковка для девелоперских проектов — от клубных домов до полноформатных кварталов." },
      { title: "Сцена для опыта",                  body: "Дизайн ресторанов, кафе, отелей и сервисных пространств — от концепции до рабочей документации, с учётом бренда и операционной логики." },
      { title: "Пространство, работающее на бренд", body: "Интерьеры офисов, шоурумов, клиник и коммерческих пространств — от планирования до спецификаций материалов." }
    ],

    servicesH1Pre: "направлений. Одна система.",
    servicesH1Em:  "Тринадцать",
    servicesFootnote: "Услуги могут быть объединены в одну работу или взяты отдельно.",
    servicesHeadCaption: "↳ project documentation · stage P",
    servicesItems: [
      ["Маркетинговый продукт объекта недвижимости", "рыночная и продуктовая логика будущего объекта."],
      ["Архитектурная концепция", "продуктовая идея, переведённая в архитектуру."],
      ["Master Plan", "структура территории и логика размещения объектов."],
      ["Urban Design", "среда вокруг объекта; жизнь между домами."],
      ["Эскизный проект", "развитие концепции до основы следующей стадии."],
      ["Стадия П", "проектная документация для экспертизы и разрешительного процесса."],
      ["Стадия Р", "рабочая документация для строительных и инженерных работ."],
      ["Exterior Design", "внешний образ объекта, фасады, входные группы."],
      ["Interior Design", "интерьеры для жизни, работы, гостеприимства и коммерции."],
      ["Landscape Design", "ландшафтная логика как часть среды."],
      ["Коммерческие альбомы", "материалы для презентации, продаж и маркетинга."],
      ["Спецификации и рекомендации материалов", "согласно разработанной документации."],
      ["Авторский надзор", "за документацией, которую SHINUY разработала сама."]
    ],

    rolesH1Pre: "Одна компания.",
    rolesH1Em:  "Три понятные роли",
    rolesImportant: "Важно",
    roles: [
      { tag: "Роль I",   name: "Профильный исполнитель",
        body: "SHINUY выполняет согласованные архитектурные, дизайнерские, urban design, документационные разделы.",
        note: "Ответственность: только за свои разделы. Координация полного пакета — на стороне клиента или его генпроектировщика." },
      { tag: "Роль II",  name: "Генпроектировщик стадии П",
        body: "SHINUY координирует полный проектный пакет стадии П: проектная команда, профильные исполнители, комплектность, экспертиза.",
        note: "Разрешение на строительство подаёт и получает заказчик." },
      { tag: "Роль III", name: "Генпроектировщик стадии Р",
        body: "SHINUY координирует полный комплект рабочей документации: архитектурные, конструктивные, инженерные разделы, контроль коллизий, передача документации.",
        note: "Авторский надзор — в сопровождающем формате по договорённости." }
    ],

    advH1Pre: "Почему клиенты выбирают",
    advH1Em:  "SHINUY",
    advantages: [
      ["i",   "PRODUCT THINKING",  "Мыслим рынком, клиентом, спросом и будущей ценностью."],
      ["ii",  "ARCHITECTURE + DESIGN + URBAN DESIGN", "Объект как целостная среда, а не набор фрагментов."],
      ["iii", "КОММЕРЧЕСКАЯ ЛОГИКА", "Понятно для клиентов, инвесторов, отдела продаж."],
      ["iv",  "ГИБКАЯ РОЛЬ",       "Профильный исполнитель или генпроектировщик по П / Р."],
      ["v",   "NO-HEADACHE КООРДИНАЦИЯ", "Берём сложную проектную координацию в рамках scope."],
      ["vi",  "КОММЕРЧЕСКАЯ УПАКОВКА", "Не только дизайн, но и материалы для презентации и продаж."],
      ["vii", "АВТОРСКИЙ НАДЗОР",  "Сопровождаем реализацию собственных решений."]
    ],

    processH1Pre: "Как мы",
    processH1Em:  "работаем",
    process: [
      ["01", "BRIEF",                  "Цели, тип клиента, объект, локация, бюджетная логика, ожидаемый результат."],
      ["02", "PRODUCT LOGIC",          "Для кого, какая ценность, чем отличается от альтернатив."],
      ["03", "CONCEPT",                "Архитектурное, пространственное, визуальное и функциональное направление."],
      ["04", "DESIGN & DOCUMENTATION", "Дизайнерские разделы, проектная и рабочая документация."],
      ["05", "COORDINATION",           "Координация профильных исполнителей и комплектности документации."],
      ["06", "COMMERCIAL PACKAGING",   "Визуальные и презентационные материалы для продаж."],
      ["07", "AUTHOR SUPERVISION",     "Сопровождение реализации решений SHINUY в рамках scope."]
    ],

    tickerCaption: "Selected projects · 2019 — 2026 · 12 cities · 6 countries",
    quoteBody: "«Мы обещаем не модное, а",
    quoteEm:   "уместное",
    quoteRest: ". Не громкое, а точное. Не идеальное — а человеческое, хорошо сделанное, и такое, что выдерживает время.»",
    quoteSource: "—  О Б Е Щ А Н И Е    Б Р Е Н Д А",

    ctaH1Pre: "У вас есть участок, пространство или",
    ctaH1Em:  "идея",
    ctaH1Post: "?",
    ctaSubtitle: "Давайте определим, каким продуктом недвижимости это может стать.",
    ctaPrimary:   "Получить консультацию",
    ctaSecondary: "Обсудить проект",
    ctaCities: ["Одесса", "Киев"],

    footerCopy: "© 2026 SHINUY · Все права защищены",
    footerVol: "· VOL. 01 · CONFIDENTIAL · INTERNAL USE"
  },

  en: {
    navLinks: ["APPROACH", "SERVICES", "TYPOLOGY", "ROLES", "PROCESS", "CONTACT"],

    heroEyebrow: "A R C H I T E C T U R E  ·  E N G I N E E R I N G  ·  D E S I G N",
    heroLine1: "SHINUY makes",
    heroLine2: "real estate as a",
    heroAccent: "product.",
    heroBody: "Architecture, urban design, interior design, project documentation and commercial packaging for properties that must be beautiful, functional, and market-coherent.",
    heroCtaPrimary: "Start a project",
    heroCtaSecondary: "See services",
    heroStats: [
      ["12+", "years of practice"],
      ["54",  "realised objects"],
      ["6",   "countries"]
    ],
    heroCaptionTag: "001 / SHINUY · 2026",
    heroCaptionObject: "Residence in Carpathians",
    heroCaptionPhase: "concept 2024",
    scroll: "scroll",

    secPhilosophy: "PHILOSOPHY",
    secPrinciples: "PRINCIPLES",
    secAudience: "AUDIENCE",
    secTypology: "TYPOLOGY",
    secServices: "SERVICES",
    secRoles: "ROLES",
    secAdvantages: "ADVANTAGES",
    secProcess: "PROCESS",
    secStart: "BEGIN",

    interArchCaption: "↳ Project memory · object 04",
    interCinematicCaption: "Selected projects · 2019 — 2026",

    philoH1Pre: "Property is not just space.",
    philoH1Em:  "It is a product.",
    philoP1Lead: "At SHINUY we believe every property must answer three questions before the design begins:",
    philoP1Bold: "Who is it for? Why will they choose it? How do architecture, design and documentation reinforce its value?",
    philoP2: "So we don't start with decor. We start with product logic. We analyse the client, the market, the location, usage scenarios, commercial logic and the future experience of the space.",
    philoP3: "Then we translate that into architecture, master plan, urban design, interior design, project documentation, and materials for presentation and sales.",
    philoTagline: "Market-grounded · architecturally strong · visually clear · ready to build.",
    philoImgCaption: "↳ Detail · 03",

    principlesH1Pre: "Three pillars that hold SHINUY",
    principlesH1Em:  "upright",
    principlesItems: [
      { cap: "PRECISION", body: "in millimetres and in words." },
      { cap: "QUIET",     body: "space that does not shout." },
      { cap: "HONESTY",   body: "of material and structure." }
    ],

    audienceH1Pre: "For developers, businesses and",
    audienceH1Em:  "private clients",
    audienceRows: [
      {
        title: "Developers",
        body:  "Residential complexes, club houses, cottage districts, reconcepts.",
        aside: "We help shape a market-clear product, set positioning, develop the architecture, and coordinate design stages."
      },
      {
        title: "Business",
        body:  "Restaurants, cafés, hotels, offices, showrooms, clinics, service spaces.",
        aside: "We design space that works for the brand, the client experience, and the commercial result."
      },
      {
        title: "Private clients",
        body:  "Apartments, houses, private residences, investment property.",
        aside: "Architecture, interior design, specifications, author supervision."
      }
    ],

    typH1Pre: "What we",
    typH1Em:  "create",
    typSubtitle: "Six object types. One approach.",
    typClosing: "Each type is its own product. One approach — making property that gets chosen.",
    typSlides: [
      { title: "A home that holds the quiet",      body: "Architecture and interior of private houses — from sketch to realisation. Wood, stone, large glass, controlled light." },
      { title: "City that respects the personal",  body: "Townhouse format for developers building mature residential fabric instead of high-rise mass." },
      { title: "Villa as portrait of the client",  body: "Large private residences with bespoke scenario, authored design, full documentation cycle, and author supervision." },
      { title: "A residential complex as product", body: "Architectural concept, urban design, documentation, and commercial packaging for developer projects — from club houses to full districts." },
      { title: "A stage for experience",           body: "Design for restaurants, cafés, hotels and service spaces — from concept to working documentation, attuned to brand and operations." },
      { title: "Space that works for the brand",   body: "Interiors for offices, showrooms, clinics and commercial venues — from planning to material specifications." }
    ],

    servicesH1Pre: "directions. One system.",
    servicesH1Em:  "Thirteen",
    servicesFootnote: "Services can be combined into one engagement or taken individually.",
    servicesHeadCaption: "↳ project documentation · stage P",
    servicesItems: [
      ["Marketing product of the property", "the market and product logic of the future object."],
      ["Architectural concept", "the product idea translated into architecture."],
      ["Master Plan", "site structure and object placement logic."],
      ["Urban Design", "the environment around the object; life between buildings."],
      ["Schematic design", "the concept developed into the base for the next stage."],
      ["Stage P", "project documentation for review and permitting."],
      ["Stage R", "working documentation for construction and engineering."],
      ["Exterior Design", "outer face of the object, façades, entry zones."],
      ["Interior Design", "interiors for living, work, hospitality, and commerce."],
      ["Landscape Design", "landscape logic as part of the environment."],
      ["Commercial albums", "materials for presentation, sales and marketing."],
      ["Material specifications & guidance", "per the documentation we develop."],
      ["Author supervision", "of the documentation SHINUY itself developed."]
    ],

    rolesH1Pre: "One company.",
    rolesH1Em:  "Three clear roles",
    rolesImportant: "Note",
    roles: [
      { tag: "Role I",   name: "Discipline lead",
        body: "SHINUY delivers the agreed architectural, design, urban design, and documentation sections.",
        note: "Responsibility: only for our sections. Full-package coordination stays with the client or their general designer." },
      { tag: "Role II",  name: "General designer · Stage P",
        body: "SHINUY coordinates the full Stage P project package: design team, discipline leads, completeness, expertise.",
        note: "The building permit is filed and obtained by the client." },
      { tag: "Role III", name: "General designer · Stage R",
        body: "SHINUY coordinates the full working documentation set: architectural, structural, engineering sections, clash control, and handover.",
        note: "Author supervision — in companion mode by agreement." }
    ],

    advH1Pre: "Why clients choose",
    advH1Em:  "SHINUY",
    advantages: [
      ["i",   "PRODUCT THINKING",  "We think in market, client, demand, and future value."],
      ["ii",  "ARCHITECTURE + DESIGN + URBAN DESIGN", "The object as one whole environment, not a set of fragments."],
      ["iii", "COMMERCIAL LOGIC", "Clear for clients, investors, the sales team."],
      ["iv",  "FLEXIBLE ROLE",    "Discipline lead or general designer for Stage P / R."],
      ["v",   "NO-HEADACHE COORDINATION", "We take complex project coordination within scope."],
      ["vi",  "COMMERCIAL PACKAGING", "Not just design — materials for presentation and sales."],
      ["vii", "AUTHOR SUPERVISION", "We accompany the realisation of our own decisions."]
    ],

    processH1Pre: "How we",
    processH1Em:  "work",
    process: [
      ["01", "BRIEF",                  "Goals, client type, object, location, budget logic, expected outcome."],
      ["02", "PRODUCT LOGIC",          "For whom, what value, how it differs from alternatives."],
      ["03", "CONCEPT",                "Architectural, spatial, visual and functional direction."],
      ["04", "DESIGN & DOCUMENTATION", "Design sections, project and working documentation."],
      ["05", "COORDINATION",           "Coordination of discipline leads and document completeness."],
      ["06", "COMMERCIAL PACKAGING",   "Visual and presentation materials for sales."],
      ["07", "AUTHOR SUPERVISION",     "Accompanying SHINUY's decisions through realisation, within scope."]
    ],

    tickerCaption: "Selected projects · 2019 — 2026 · 12 cities · 6 countries",
    quoteBody: "«We promise not the fashionable, but the",
    quoteEm:   "appropriate",
    quoteRest: ". Not the loud, but the precise. Not the perfect — but the human, well-made, and lasting.»",
    quoteSource: "—  B R A N D    P R O M I S E",

    ctaH1Pre: "Have a site, a space or an",
    ctaH1Em:  "idea",
    ctaH1Post: "?",
    ctaSubtitle: "Let's decide what kind of property product it can become.",
    ctaPrimary:   "Book a consultation",
    ctaSecondary: "Discuss a project",
    ctaCities: ["Odesa", "Kyiv"],

    footerCopy: "© 2026 SHINUY · All rights reserved",
    footerVol: "· VOL. 01 · CONFIDENTIAL · INTERNAL USE"
  }
};

const useT = () => {
  const { lang } = useLang();
  return TRANSLATIONS[lang] || TRANSLATIONS.ua;
};

Object.assign(window, { LangCtx, useLang, useT, TRANSLATIONS });
