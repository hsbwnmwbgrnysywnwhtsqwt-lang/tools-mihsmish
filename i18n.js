// ============================================================
// mishmish — i18n (Internationalization)
// Supports: Hebrew (he), English (en), Arabic (ar)
// Auto-detects browser language; saves preference to localStorage
// ============================================================

const TRANSLATIONS = {

  he: {
    // --- Navbar ---
    'nav.about':      'אודות',
    'nav.blog':       'בלוג',
    'nav.contact':    'צור קשר',
    'nav.projects':   'פרויקטים',
    'nav.skills':     'כישורים',
    'nav.services':   'שירותים',
    'nav.back_home':  '← חזור לדף הבית',

    // --- Footer ---
    'footer.back_home': '← חזרה לאתר הראשי',
    'footer.privacy':   'מדיניות פרטיות',
    'footer.terms':     'תנאי שימוש',
    'footer.by':        'מיכאל לב',

    // --- Hero (index) ---
    'hero.subtitle':      'Building small tools',
    'hero.cta_projects':  'הפרויקטים שלי ↓',
    'hero.cta_contact':   'צור קשר',

    // --- About section (index) ---
    'section.about':       'אודות',
    'about.subtitle':      'קצת עליי',
    'about.text':          'קוראים לי <strong>מיכאל לב</strong>, אני מתכנת AI ויוצר אתרים, אפליקציות וכלים בסיסיים. אני מתכנת בעזרת AI כבר <strong>3 שנים</strong>, ומתמקצע ולומד דברים חדשים בכל יום. לאחרונה התחלתי לבנות פרויקטים גם עבור אחרים במטרה להתפתח מקצועית ולהפוך את הידע שלי לערך עבורכם.',
    'about.card1.title':   'פרויקטים שלי',
    'about.card1.desc':    'כלים, תוספים ואתרים שאני בונה מרעיונות שלי',
    'about.card2.title':   'בניה לאחרים',
    'about.card2.desc':    'אתרים, כלים ואוטומציות עבור אנשים שצריכים כלים מסוימים',

    // --- Skills ---
    'section.skills':    'כישורים',
    'skills.subtitle':   'הטכנולוגיות והכלים שאני עובד איתם',
    'skill.ai_tools':    'כלי AI',
    'skill.api':         'אינטגרציות API',
    'skill.ui':          'עיצוב UI',
    'skill.chrome':      'תוספי כרום',
    'skill.apps':        'אפליקציות בסיסיות',
    'skill.automation':  'כלים ואוטומציה',

    // --- Projects section ---
    'section.projects':       'פרויקטים',
    'projects.subtitle':      'דברים שבניתי',
    'projects.my_label':      'הפרויקטים שלי',
    'projects.others_label':  'דברים שבניתי לאחרים',

    // --- Project cards ---
    'vc.desc':            'תוסף כרום שנותן לך שליטה מלאה על סרטונים בכל אתר — מהירות השמעה, קיצורי מקלדת, ועוד. זמין בחנות הכרום הרשמית.',
    'mishmish.site.name': 'אתר mishmish',
    'mishmish.site.desc': 'האתר הזה! נבנה עם HTML, CSS, JS ועיצוב שנוצר עם AI. כל דבר — מהלוגו ועד הקוד.',
    'mm.card.desc':       'משחק זיכרון אמוג\'י ל-Android — מצא זוגות, אתגר את עצמך. נבנה לחלוטין עם AI ופורסם ב-Google Play.',
    'meitar.name':        'אתר רישום — מיתר',
    'meitar.desc':        'דף נחיתה מרשים לבית ספר אלטרנטיבי — עם עיצוב מקצועי, מעקב Meta Pixel להמרות, טופס פניות ומצגת אינטראקטיבית.',
    'tlyd.app.name':      'תן לי יד — אפליקציה',
    'tlyd.app.desc':      'אפליקציית Android ו-iOS לחברי צוות של ארגון "תן לי יד" — דיווח פעילויות, צפייה בהיסטוריה וניהול פרופיל.',
    'tlyd.mgmt.name':     'תן לי יד — אתר ניהול',
    'tlyd.mgmt.desc':     'מערכת ניהול ווב למנהל הארגון — דשבורד מלא, דוח שכר חודשי, חיובי לקוחות, ניהול מסגרות וצוות.',

    // --- Project links ---
    'project.chrome_store':   'צפה בחנות הכרום ←',
    'project.github':         'צפה בגיטהב ←',
    'project.github_dl':      'רוצה להוריד או לצפות בגיטהב←',
    'project.website':        'האתר ←',
    'project.more_details':   'פרטים נוספים ←',
    'project.view_site':      'צפה באתר ←',
    'project.internal_only':  'מיועד לצוות תן לי יד בלבד',

    // --- Hire section (index) ---
    'section.hire':       'בניה לאחרים',
    'hire.subtitle':      'רוצה שאבנה לך משהו? אני זמין לפרויקטים',
    'hire.card1.title':   'אתר אישי / עסקי',
    'hire.card1.desc':    'דף נחיתה, אתר פורטפוליו, אתר לעסק קטן — בהתאמה אישית.',
    'hire.card2.title':   'תוסף לכרום',
    'hire.card2.desc':    'תוסף שיפתור בעיה ספציפית שיש לך בדפדפן.',
    'hire.card3.title':   'אוטומציה עם AI',
    'hire.card3.desc':    'כלי שיחסוך לך זמן — אינטגרציות, בוטים, ועוד.',
    'hire.card4.title':   'כלי / אפליקציה',
    'hire.card4.desc':    'יש לך רעיון? בואו נבנה אותו ביחד.',
    'hire.cta.desc':      'מחיר גמיש, תקשורת ישירה, עבודה מהירה.',
    'hire.cta.btn':       'שלח לי הודעה ←',

    // --- About page ---
    'about.hero.label':   'אודות',
    'about.hero.tagline': 'מתכנת AI · בונה כלים קטנים',
    'about.p1':           'קוראים לי <strong>מיכאל לב</strong>, אני מתכנת AI ויוצר אתרים, אפליקציות וכלים בסיסיים. אני מתכנת בעזרת AI כבר <strong>3 שנים</strong>, ומתמקצע ולומד דברים חדשים בכל יום. לאחרונה התחלתי לבנות פרויקטים גם עבור אחרים במטרה להתפתח מקצועית ולהפוך את הידע שלי לערך עבורכם.',
    'about.p2':           'הגישה שלי לפיתוח שונה — אני משתמש בכלי AI כמו Claude, ChatGPT ו-Cursor כדי לבנות מוצרים שלמים בזמן קצר ובאיכות גבוהה. זה לא אומר שאני פשוט "מדביק קוד" — אני מבין את הקוד, מנפה שגיאות, ומקבל החלטות עיצוב ואדריכלות בעצמי. AI הוא הכלי, אני הבונה.',
    'about.p3':           'עד היום בניתי: תוסף כרום עם אלפי משתמשים (<strong>Video Controller</strong>), משחק אנדרואיד שפורסם ב-Google Play (<strong>Memory Master</strong>), אתר נחיתה עם Meta Pixel לבית ספר (<strong>מיתר</strong>), ואפליקציה + מערכת ניהול מלאה לארגון (<strong>תן לי יד</strong>).',
    'about.card1.title':  'פרויקטים עצמאיים',
    'about.card1.desc':   'כלים, תוספים ואתרים שאני בונה מרעיונות שלי — ופורסמים לקהל הרחב',
    'about.card2.title':  'בניה לאחרים',
    'about.card2.desc':   'אתרים, אפליקציות וכלים עבור עסקים וארגונים — מרעיון עד פרסום',
    'about.card3.title':  'AI-first פיתוח',
    'about.card3.desc':   'שימוש חכם בכלי AI מאפשר לי לספק מוצרים מהר יותר ובמחיר גמיש',
    'about.how.title':    'איך אני עובד',
    'about.how.subtitle': 'מרעיון למוצר — בצורה פשוטה וישירה',
    'about.step1.title':  'שיחה ראשונית',
    'about.step1.desc':   'מבינים ביחד מה צריך לבנות — מה הבעיה שרוצים לפתור, מה הקהל, מה התקציב.',
    'about.step2.title':  'עיצוב ובנייה',
    'about.step2.desc':   'אני בונה את המוצר — עיצוב UI, קוד, אינטגרציות. עדכונים שוטפים לאורך הדרך.',
    'about.step3.title':  'פרסום ומסירה',
    'about.step3.desc':   'מעלים את המוצר לאוויר — Vercel, Google Play, Chrome Store — ומוסרים לך מוכן לשימוש.',
    'about.step4.title':  'תמיכה אחרי',
    'about.step4.desc':   'נגמרה העבודה? לא בדיוק. אני זמין לתיקונים, שדרוגים ושאלות גם אחרי המסירה.',
    'about.cta.title':    'רוצה לעבוד ביחד?',
    'about.cta.subtitle': 'יש לך רעיון? בואו נבנה אותו.',
    'about.cta.btn1':     'צור קשר ←',
    'about.cta.btn2':     'הפרויקטים שלי ↓',

    // --- Contact page ---
    'contact.title':               'צור קשר',
    'contact.subtitle':            'רוצה לדבר, להזמין עבודה, או סתם לשלוח שלום?',
    'contact.info.title':          'בואו נדבר 👋',
    'contact.info.text':           'רוצה שאבנה לך אתר, כלי, תוסף או כל דבר אחר? יש לך שאלה, באג, או סתם רוצה להגיד שלום? אני שמח לשמוע!',
    'contact.gmail':               'שלח מייל דרך Gmail',
    'contact.email_client':        'שלח מייל דרך תוכנת המייל',
    'contact.form.name.label':     'שם',
    'contact.form.name.ph':        'מה שמך?',
    'contact.form.email.label':    'אימייל',
    'contact.form.message.label':  'הודעה',
    'contact.form.message.ph':     'כתוב כאן...',
    'contact.form.submit':         'שלח הודעה ✉️',

    // --- Projects page ---
    'projects.hero.label':   'הפרויקטים שלי',
    'projects.hero.title':   'דברים שבניתי',
    'projects.hero.tagline': 'אתרים, תוספים, אפליקציות וכלים — עם AI',
    'projects.cta.title':    'רוצה שאבנה לך משהו?',
    'projects.cta.subtitle': 'יש לך רעיון? בואו נדבר.',
    'projects.cta.btn1':     'צור קשר ←',
    'projects.cta.btn2':     'השירותים שלי ↓',
    'projects.vc.desc':      'תוסף כרום שנותן שליטה מלאה על סרטונים בכל אתר — YouTube, Netflix, Udemy וכל אתר אחר. כולל שינוי מהירות השמעה, קיצורי מקלדת להרצה/עצירה/דילוג, ועוד פיצ\'רים שימושיים. פורסם בחנות הכרום הרשמית עם אלפי משתמשים פעילים.',
    'projects.mm.desc':      'משחק זיכרון אמוג\'י ל-Android ו-iOS — מצא זוגות של אמוג\'ים בזמן קצר ככל האפשר. כולל רמות קושי שונות, מעקב שיאים אישיים ועיצוב צבעוני ומהנה. נבנה עם Expo/React Native ופורסם ב-Google Play.',
    'projects.meitar.desc':  'דף נחיתה מרשים לבית ספר אלטרנטיבי — עם עיצוב מקצועי, מעקב Meta Pixel להמרות, טופס פניות ומצגת אינטראקטיבית. הדף ממיר מבקרים לפניות אמיתיות.',
    'projects.tlyd.app.desc':'אפליקציה ל-Android ו-iOS לחברי צוות של ארגון "תן לי יד" — דיווח פעילויות, צפייה בהיסטוריית עבודה, ניהול פרופיל וכניסה עם Google. נבנתה עם React Native ו-Expo.',
    'projects.tlyd.mgmt.desc':'מערכת ניהול ווב מלאה למנהל הארגון — דשבורד עם סיכום פעילויות, דוח שכר חודשי אוטומטי, ניהול חיובי לקוחות, מסגרות וצוות. נבנה עם Next.js ו-Supabase.',

    // --- Memory Master page ---
    'mm.hero.label':    'זמין לאנדרואיד · בטא ל-iOS',
    'mm.hero.tagline':  'משחק הזיכרון האולטימטיבי — בנוי עם AI',
    'mm.hero.desc':     'זמין לכולם ב-Android דרך Google Play.<br/>רוצה לנסות ב-iPhone? הצטרף לבטא דרך TestFlight!',
    'mm.hero.android':  '📱 Android — Google Play ←',
    'mm.hero.ios':      'iOS — TestFlight ←',
    'mm.about.title':   'מה זה Memory Master?',
    'mm.about.subtitle':'משחק זיכרון קלאסי — עם טוויסט של אמוג\'ים',
    'mm.f1.title':      'אתגר את הזיכרון',
    'mm.f1.desc':       'מצא זוגות של אמוג\'ים תוך כמה שפחות הפיכות. ככל שזוכרים יותר — ניצחים מהר יותר.',
    'mm.f2.title':      'רמות קושי',
    'mm.f2.desc':       'ממשחק 4×4 קטן לרשת גדולה ומאתגרת — התאם לרמה שלך וקדם לאט לאט.',
    'mm.f3.title':      'שיאים אישיים',
    'mm.f3.desc':       'המשחק שומר את השיא שלך בכל רמה — נסה לשבור את עצמך בכל פעם.',
    'mm.f4.title':      'Android ו-iOS',
    'mm.f4.desc':       'Android דרך Google Play — חינם לחלוטין. iOS דרך TestFlight בבטא.',
    'mm.how.title':     'איך משחקים?',
    'mm.how.subtitle':  'פשוט, מהיר, ומשעשע',
    'mm.s1.title':      'פותחים כרטיס',
    'mm.s1.desc':       'לחצו על כרטיס כלשהו כדי לחשוף את האמוג\'י שמסתתר מאחוריו.',
    'mm.s2.title':      'מחפשים את הזוג',
    'mm.s2.desc':       'פתחו כרטיס שני ונסו למצוא את הזוג התואם. אם מצאתם — הם נשארים גלויים!',
    'mm.s3.title':      'מסיימים את הלוח',
    'mm.s3.desc':       'מצאו את כל הזוגות בכמה שפחות הפיכות כדי להשיג ניקוד גבוה.',
    'mm.s4.title':      'מתקדמים ברמות',
    'mm.s4.desc':       'כל רמה קשה יותר — יותר כרטיסים, יותר אמוג\'ים, יותר אתגר!',

    // --- King of Cheating ---
    'koc.desc':         'משחק ירי מרובה שחקנים למובייל — ג\'ויסטיק, כדורים, אויבים, קירות הגנה ומטבעות. כולל חנות דמויות, מערכת לוח תוצאות ו-Firebase. בפיתוח.',
    'project.in_dev':   '🚧 בפיתוח',

    // --- Blog page ---
    'blog.title':    'בלוג mishmish',
    'blog.subtitle': 'מאמרים על פיתוח, AI, וכיצד לבנות כלים שימושיים',
  },

  // ============================================================
  en: {
    // --- Navbar ---
    'nav.about':      'About',
    'nav.blog':       'Blog',
    'nav.contact':    'Contact',
    'nav.projects':   'Projects',
    'nav.skills':     'Skills',
    'nav.services':   'Services',
    'nav.back_home':  '← Back to Home',

    // --- Footer ---
    'footer.back_home': '← Back to main site',
    'footer.privacy':   'Privacy Policy',
    'footer.terms':     'Terms of Use',
    'footer.by':        'Michael Lev',

    // --- Hero (index) ---
    'hero.subtitle':      'Building small tools',
    'hero.cta_projects':  'My Projects ↓',
    'hero.cta_contact':   'Contact',

    // --- About section (index) ---
    'section.about':       'About',
    'about.subtitle':      'A bit about me',
    'about.text':          'My name is <strong>Michael Lev</strong>, I\'m an AI developer who builds websites, apps, and simple tools. I\'ve been coding with AI for <strong>3 years</strong>, constantly improving and learning something new every day. Recently I started building projects for clients too, turning my knowledge into value for others.',
    'about.card1.title':   'My Projects',
    'about.card1.desc':    'Tools, extensions and websites I build from my own ideas',
    'about.card2.title':   'Building for Others',
    'about.card2.desc':    'Websites, tools and automations for people who need custom solutions',

    // --- Skills ---
    'section.skills':    'Skills',
    'skills.subtitle':   'Technologies and tools I work with',
    'skill.ai_tools':    'AI Tools',
    'skill.api':         'API Integrations',
    'skill.ui':          'UI Design',
    'skill.chrome':      'Chrome Extensions',
    'skill.apps':        'Mobile Apps',
    'skill.automation':  'Tools & Automation',

    // --- Projects section ---
    'section.projects':       'Projects',
    'projects.subtitle':      'Things I\'ve built',
    'projects.my_label':      'My Projects',
    'projects.others_label':  'Built for Others',

    // --- Project cards ---
    'vc.desc':            'A Chrome extension that gives you full control over videos on any site — playback speed, keyboard shortcuts, and more. Available on the official Chrome Web Store.',
    'mishmish.site.name': 'mishmish Website',
    'mishmish.site.desc': 'This site! Built with HTML, CSS, JS and AI-generated design. Everything — from the logo to the code.',
    'mm.card.desc':       'An emoji memory game for Android — find pairs, challenge yourself. Built entirely with AI and published on Google Play.',
    'meitar.name':        'Registration Site — Meitar',
    'meitar.desc':        'A stunning landing page for an alternative school — professional design, Meta Pixel conversion tracking, contact form and interactive slideshow.',
    'tlyd.app.name':      'Ten Li Yad — App',
    'tlyd.app.desc':      'Android & iOS app for the "Ten Li Yad" org team — activity reporting, history viewing and profile management.',
    'tlyd.mgmt.name':     'Ten Li Yad — Management',
    'tlyd.mgmt.desc':     'Full web management system for the org admin — dashboard, monthly payroll, client billing, teams & schedules.',

    // --- Project links ---
    'project.chrome_store':   'Chrome Web Store ←',
    'project.github':         'View on GitHub ←',
    'project.github_dl':      'Download or view on GitHub ←',
    'project.website':        'Website ←',
    'project.more_details':   'More Details ←',
    'project.view_site':      'View Site ←',
    'project.internal_only':  'For Ten Li Yad team only',

    // --- Hire section (index) ---
    'section.hire':       'Services',
    'hire.subtitle':      'Want me to build something? I\'m available for projects',
    'hire.card1.title':   'Personal / Business Website',
    'hire.card1.desc':    'Landing page, portfolio site, small business website — fully customized.',
    'hire.card2.title':   'Chrome Extension',
    'hire.card2.desc':    'An extension that solves a specific problem you have in your browser.',
    'hire.card3.title':   'AI Automation',
    'hire.card3.desc':    'A tool that saves you time — integrations, bots, and more.',
    'hire.card4.title':   'Tool / App',
    'hire.card4.desc':    'Got an idea? Let\'s build it together.',
    'hire.cta.desc':      'Flexible pricing, direct communication, fast delivery.',
    'hire.cta.btn':       'Send me a message ←',

    // --- About page ---
    'about.hero.label':   'About',
    'about.hero.tagline': 'AI Developer · Building Small Tools',
    'about.p1':           'My name is <strong>Michael Lev</strong>, I\'m an AI developer who builds websites, apps, and simple tools. I\'ve been coding with AI for <strong>3 years</strong>, constantly improving and learning something new every day. Recently I started building projects for clients too, turning my knowledge into value for others.',
    'about.p2':           'My approach to development is different — I use AI tools like Claude, ChatGPT and Cursor to build complete products quickly at high quality. That doesn\'t mean I just "paste code" — I understand the code, debug errors, and make design and architecture decisions myself. AI is the tool, I am the builder.',
    'about.p3':           'So far I\'ve built: a Chrome extension with thousands of users (<strong>Video Controller</strong>), an Android game published on Google Play (<strong>Memory Master</strong>), a landing page with Meta Pixel for a school (<strong>Meitar</strong>), and an app + full management system for an NGO (<strong>Ten Li Yad</strong>).',
    'about.card1.title':  'Independent Projects',
    'about.card1.desc':   'Tools, extensions and websites I build from my own ideas — published for the public',
    'about.card2.title':  'Building for Others',
    'about.card2.desc':   'Websites, apps and tools for businesses and organizations — from idea to launch',
    'about.card3.title':  'AI-first Development',
    'about.card3.desc':   'Smart use of AI tools lets me deliver products faster at flexible prices',
    'about.how.title':    'How I Work',
    'about.how.subtitle': 'From idea to product — simply and directly',
    'about.step1.title':  'Initial Call',
    'about.step1.desc':   'We figure out together what needs to be built — the problem, the audience, the budget.',
    'about.step2.title':  'Design & Build',
    'about.step2.desc':   'I build the product — UI design, code, integrations. Regular updates throughout.',
    'about.step3.title':  'Launch & Delivery',
    'about.step3.desc':   'We go live — Vercel, Google Play, Chrome Store — and hand it over ready to use.',
    'about.step4.title':  'Post-Launch Support',
    'about.step4.desc':   'Work done? Not exactly. I\'m available for fixes, upgrades and questions even after delivery.',
    'about.cta.title':    'Want to Work Together?',
    'about.cta.subtitle': 'Got an idea? Let\'s build it.',
    'about.cta.btn1':     'Contact ←',
    'about.cta.btn2':     'My Projects ↓',

    // --- Contact page ---
    'contact.title':               'Contact',
    'contact.subtitle':            'Want to chat, commission work, or just say hi?',
    'contact.info.title':          'Let\'s Talk 👋',
    'contact.info.text':           'Want me to build you a website, tool, extension or anything else? Have a question, a bug, or just want to say hello? I\'d love to hear from you!',
    'contact.gmail':               'Send email via Gmail',
    'contact.email_client':        'Send email via mail app',
    'contact.form.name.label':     'Name',
    'contact.form.name.ph':        'What\'s your name?',
    'contact.form.email.label':    'Email',
    'contact.form.message.label':  'Message',
    'contact.form.message.ph':     'Write here...',
    'contact.form.submit':         'Send Message ✉️',

    // --- Projects page ---
    'projects.hero.label':   'My Projects',
    'projects.hero.title':   'Things I\'ve Built',
    'projects.hero.tagline': 'Websites, extensions, apps and tools — with AI',
    'projects.cta.title':    'Want me to build something?',
    'projects.cta.subtitle': 'Got an idea? Let\'s talk.',
    'projects.cta.btn1':     'Contact ←',
    'projects.cta.btn2':     'My Services ↓',
    'projects.vc.desc':      'A Chrome extension that gives you full control over videos on any site — YouTube, Netflix, Udemy and more. Includes playback speed control, keyboard shortcuts for play/pause/skip, and more useful features. Published on the official Chrome Web Store with thousands of active users.',
    'projects.mm.desc':      'An emoji memory game for Android & iOS — find pairs as quickly as possible. Includes multiple difficulty levels, personal record tracking and colorful fun design. Built with Expo/React Native and published on Google Play.',
    'projects.meitar.desc':  'A stunning landing page for an alternative school — professional design, Meta Pixel conversion tracking, contact form and interactive slideshow. The page converts visitors into real leads.',
    'projects.tlyd.app.desc':'Android & iOS app for the "Ten Li Yad" NGO team — activity reporting, work history viewing, profile management and Google login. Built with React Native and Expo.',
    'projects.tlyd.mgmt.desc':'Full web management system for the org admin — activity summary dashboard, automatic monthly payroll report, client billing management, schedules and team management. Built with Next.js and Supabase.',

    // --- Memory Master page ---
    'mm.hero.label':    'Available on Android · Beta for iOS',
    'mm.hero.tagline':  'The ultimate memory game — built with AI',
    'mm.hero.desc':     'Available for everyone on Android via Google Play.<br/>Want to try on iPhone? Join the beta via TestFlight!',
    'mm.hero.android':  '📱 Android — Google Play ←',
    'mm.hero.ios':      'iOS — TestFlight ←',
    'mm.about.title':   'What is Memory Master?',
    'mm.about.subtitle':'A classic memory game — with an emoji twist',
    'mm.f1.title':      'Challenge Your Memory',
    'mm.f1.desc':       'Find pairs of emojis in as few flips as possible. The more you remember — the faster you win.',
    'mm.f2.title':      'Difficulty Levels',
    'mm.f2.desc':       'From a small 4×4 grid to a large challenging board — adjust to your level and advance gradually.',
    'mm.f3.title':      'Personal Records',
    'mm.f3.desc':       'The game saves your record on each level — try to beat yourself every time.',
    'mm.f4.title':      'Android & iOS',
    'mm.f4.desc':       'Android via Google Play — completely free. iOS via TestFlight in beta.',
    'mm.how.title':     'How to Play?',
    'mm.how.subtitle':  'Simple, fast, and fun',
    'mm.s1.title':      'Flip a Card',
    'mm.s1.desc':       'Tap any card to reveal the emoji hiding behind it.',
    'mm.s2.title':      'Find the Pair',
    'mm.s2.desc':       'Flip a second card and try to find the matching pair. Found it? They stay face up!',
    'mm.s3.title':      'Complete the Board',
    'mm.s3.desc':       'Find all pairs in as few flips as possible to get a high score.',
    'mm.s4.title':      'Level Up',
    'mm.s4.desc':       'Each level is harder — more cards, more emojis, more challenge!',

    // --- King of Cheating ---
    'koc.desc':       'A multiplayer mobile shooter — joystick, bullets, enemies, protective walls and coins. Includes a character shop, leaderboard system and Firebase. In development.',
    'project.in_dev': '🚧 In Development',

    // --- Blog page ---
    'blog.title':    'mishmish Blog',
    'blog.subtitle': 'Articles on development, AI, and how to build useful tools',
  },

  // ============================================================
  ar: {
    // --- Navbar ---
    'nav.about':      'حول',
    'nav.blog':       'مدونة',
    'nav.contact':    'اتصل بنا',
    'nav.projects':   'مشاريع',
    'nav.skills':     'مهارات',
    'nav.services':   'خدمات',
    'nav.back_home':  '← الرئيسية',

    // --- Footer ---
    'footer.back_home': '← العودة للموقع',
    'footer.privacy':   'سياسة الخصوصية',
    'footer.terms':     'شروط الاستخدام',
    'footer.by':        'مايكل ليف',

    // --- Hero (index) ---
    'hero.subtitle':      'بناء أدوات صغيرة',
    'hero.cta_projects':  'مشاريعي ↓',
    'hero.cta_contact':   'تواصل معي',

    // --- About section (index) ---
    'section.about':       'حول',
    'about.subtitle':      'نبذة عني',
    'about.text':          'اسمي <strong>مايكل ليف</strong>، مطور ذكاء اصطناعي وصانع مواقع وتطبيقات وأدوات. أعمل بالبرمجة مع AI منذ <strong>3 سنوات</strong>، أتطور وأتعلم أشياء جديدة كل يوم. مؤخرًا بدأت في بناء مشاريع للعملاء أيضًا، محوّلًا معرفتي إلى قيمة للآخرين.',
    'about.card1.title':   'مشاريعي',
    'about.card1.desc':    'أدوات وإضافات ومواقع أبنيها من أفكاري الخاصة',
    'about.card2.title':   'البناء للآخرين',
    'about.card2.desc':    'مواقع وأدوات وأتمتة للأشخاص الذين يحتاجون حلولًا مخصصة',

    // --- Skills ---
    'section.skills':    'المهارات',
    'skills.subtitle':   'التقنيات والأدوات التي أعمل بها',
    'skill.ai_tools':    'أدوات الذكاء الاصطناعي',
    'skill.api':         'تكاملات API',
    'skill.ui':          'تصميم واجهة المستخدم',
    'skill.chrome':      'إضافات Chrome',
    'skill.apps':        'تطبيقات الجوال',
    'skill.automation':  'الأدوات والأتمتة',

    // --- Projects section ---
    'section.projects':       'المشاريع',
    'projects.subtitle':      'أشياء بنيتها',
    'projects.my_label':      'مشاريعي',
    'projects.others_label':  'بنيتها للآخرين',

    // --- Project cards ---
    'vc.desc':            'إضافة Chrome تمنحك تحكمًا كاملًا في مقاطع الفيديو على أي موقع — سرعة التشغيل، اختصارات لوحة المفاتيح، والمزيد. متاحة في متجر Chrome الرسمي.',
    'mishmish.site.name': 'موقع mishmish',
    'mishmish.site.desc': 'هذا الموقع! مبني بـ HTML وCSS وJS وتصميم بالذكاء الاصطناعي. كل شيء — من الشعار إلى الكود.',
    'mm.card.desc':       'لعبة ذاكرة إيموجي لـ Android — ابحث عن الأزواج، تحدَّ نفسك. مبنية بالكامل بالذكاء الاصطناعي ومنشورة على Google Play.',
    'meitar.name':        'موقع تسجيل — ميتار',
    'meitar.desc':        'صفحة هبوط احترافية لمدرسة بديلة — تصميم احترافي، تتبع Meta Pixel، نموذج تواصل وعرض تقديمي تفاعلي.',
    'tlyd.app.name':      'تن لي ياد — تطبيق',
    'tlyd.app.desc':      'تطبيق Android وiOS لفريق منظمة "تن لي ياد" — تقارير النشاط، عرض السجل وإدارة الملف الشخصي.',
    'tlyd.mgmt.name':     'تن لي ياد — لوحة التحكم',
    'tlyd.mgmt.desc':     'نظام إدارة ويب كامل لمدير المنظمة — لوحة تحكم، كشف رواتب شهري، فواتير العملاء وإدارة الفريق.',

    // --- Project links ---
    'project.chrome_store':   'متجر Chrome ←',
    'project.github':         'GitHub ←',
    'project.github_dl':      'تنزيل أو عرض على GitHub ←',
    'project.website':        'الموقع ←',
    'project.more_details':   'تفاصيل أكثر ←',
    'project.view_site':      'زيارة الموقع ←',
    'project.internal_only':  'للفريق الداخلي فقط',

    // --- Hire section (index) ---
    'section.hire':       'الخدمات',
    'hire.subtitle':      'تريد مني أن أبني شيئًا؟ أنا متاح للمشاريع',
    'hire.card1.title':   'موقع شخصي / تجاري',
    'hire.card1.desc':    'صفحة هبوط، موقع معرض أعمال، موقع لمشروع صغير — مخصص بالكامل.',
    'hire.card2.title':   'إضافة Chrome',
    'hire.card2.desc':    'إضافة تحل مشكلة محددة لديك في المتصفح.',
    'hire.card3.title':   'أتمتة بالذكاء الاصطناعي',
    'hire.card3.desc':    'أداة توفر وقتك — تكاملات، بوتات، والمزيد.',
    'hire.card4.title':   'أداة / تطبيق',
    'hire.card4.desc':    'لديك فكرة؟ لنبنيها معًا.',
    'hire.cta.desc':      'تسعير مرن، تواصل مباشر، تسليم سريع.',
    'hire.cta.btn':       'أرسل لي رسالة ←',

    // --- About page ---
    'about.hero.label':   'حول',
    'about.hero.tagline': 'مطور ذكاء اصطناعي · بناء أدوات صغيرة',
    'about.p1':           'اسمي <strong>مايكل ليف</strong>، مطور ذكاء اصطناعي وصانع مواقع وتطبيقات وأدوات. أعمل بالبرمجة مع AI منذ <strong>3 سنوات</strong>، أتطور وأتعلم أشياء جديدة كل يوم. مؤخرًا بدأت في بناء مشاريع للعملاء أيضًا.',
    'about.p2':           'نهجي في التطوير مختلف — أستخدم أدوات الذكاء الاصطناعي مثل Claude وChatGPT وCursor لبناء منتجات كاملة بسرعة وجودة عالية. هذا لا يعني أنني أنسخ الكود فقط — أفهم الكود وأصحح الأخطاء وأتخذ قراراتي التصميمية بنفسي. AI هو الأداة، أنا البنّاء.',
    'about.p3':           'حتى الآن بنيت: إضافة Chrome مع آلاف المستخدمين (<strong>Video Controller</strong>)، لعبة Android منشورة على Google Play (<strong>Memory Master</strong>)، صفحة هبوط مع Meta Pixel لمدرسة (<strong>ميتار</strong>)، وتطبيق + نظام إدارة كامل لمنظمة (<strong>تن لي ياد</strong>).',
    'about.card1.title':  'مشاريع مستقلة',
    'about.card1.desc':   'أدوات وإضافات ومواقع أبنيها من أفكاري — منشورة للجمهور',
    'about.card2.title':  'البناء للآخرين',
    'about.card2.desc':   'مواقع وتطبيقات وأدوات للأعمال والمنظمات — من الفكرة حتى الإطلاق',
    'about.card3.title':  'تطوير AI-first',
    'about.card3.desc':   'الاستخدام الذكي لأدوات AI يتيح لي تسليم منتجات أسرع بأسعار مرنة',
    'about.how.title':    'كيف أعمل',
    'about.how.subtitle': 'من الفكرة إلى المنتج — ببساطة ومباشرة',
    'about.step1.title':  'محادثة أولية',
    'about.step1.desc':   'نفهم معًا ما يجب بناؤه — المشكلة والجمهور والميزانية.',
    'about.step2.title':  'التصميم والبناء',
    'about.step2.desc':   'أبني المنتج — تصميم UI، كود، تكاملات. تحديثات منتظمة على طول الطريق.',
    'about.step3.title':  'الإطلاق والتسليم',
    'about.step3.desc':   'نطلق المنتج — Vercel وGoogle Play وChrome Store — ونسلمه جاهزًا للاستخدام.',
    'about.step4.title':  'دعم ما بعد الإطلاق',
    'about.step4.desc':   'انتهى العمل؟ ليس تمامًا. أنا متاح للإصلاحات والتحسينات والأسئلة حتى بعد التسليم.',
    'about.cta.title':    'تريد العمل معًا؟',
    'about.cta.subtitle': 'لديك فكرة؟ لنبنيها.',
    'about.cta.btn1':     'تواصل ←',
    'about.cta.btn2':     'مشاريعي ↓',

    // --- Contact page ---
    'contact.title':               'تواصل معي',
    'contact.subtitle':            'تريد التحدث، طلب عمل، أو مجرد إرسال تحية؟',
    'contact.info.title':          'لنتحدث 👋',
    'contact.info.text':           'تريد مني بناء موقع أو أداة أو إضافة أو أي شيء آخر؟ لديك سؤال أو خطأ برمجي أو تريد فقط قول مرحبًا؟ يسعدني سماعك!',
    'contact.gmail':               'إرسال بريد عبر Gmail',
    'contact.email_client':        'إرسال بريد عبر تطبيق البريد',
    'contact.form.name.label':     'الاسم',
    'contact.form.name.ph':        'ما اسمك؟',
    'contact.form.email.label':    'البريد الإلكتروني',
    'contact.form.message.label':  'الرسالة',
    'contact.form.message.ph':     'اكتب هنا...',
    'contact.form.submit':         'إرسال الرسالة ✉️',

    // --- Projects page ---
    'projects.hero.label':   'مشاريعي',
    'projects.hero.title':   'أشياء بنيتها',
    'projects.hero.tagline': 'مواقع، إضافات، تطبيقات وأدوات — مع الذكاء الاصطناعي',
    'projects.cta.title':    'تريد مني بناء شيء؟',
    'projects.cta.subtitle': 'لديك فكرة؟ لنتحدث.',
    'projects.cta.btn1':     'تواصل ←',
    'projects.cta.btn2':     'خدماتي ↓',
    'projects.vc.desc':      'إضافة Chrome تمنحك تحكمًا كاملًا في مقاطع الفيديو على أي موقع — YouTube وNetflix وUdemy وأكثر. تشمل التحكم في سرعة التشغيل، اختصارات لوحة المفاتيح وميزات مفيدة أخرى. منشورة في متجر Chrome الرسمي مع آلاف المستخدمين النشطين.',
    'projects.mm.desc':      'لعبة ذاكرة إيموجي لـ Android وiOS — ابحث عن الأزواج في أقل وقت ممكن. تشمل مستويات صعوبة متعددة، تتبع الأرقام القياسية الشخصية وتصميمًا ملونًا وممتعًا. مبنية بـ Expo/React Native ومنشورة على Google Play.',
    'projects.meitar.desc':  'صفحة هبوط احترافية لمدرسة بديلة — تصميم احترافي، تتبع Meta Pixel، نموذج تواصل وعرض تقديمي تفاعلي. الصفحة تحول الزوار إلى استفسارات حقيقية.',
    'projects.tlyd.app.desc':'تطبيق Android وiOS لفريق منظمة "تن لي ياد" — تقارير النشاط، عرض سجل العمل، إدارة الملف الشخصي وتسجيل الدخول بـ Google. مبني بـ React Native وExpo.',
    'projects.tlyd.mgmt.desc':'نظام إدارة ويب كامل لمدير المنظمة — لوحة تحكم بملخص الأنشطة، كشف رواتب شهري تلقائي، إدارة فواتير العملاء والجداول والفريق. مبني بـ Next.js وSupabase.',

    // --- Memory Master page ---
    'mm.hero.label':    'متاح لـ Android · بيتا لـ iOS',
    'mm.hero.tagline':  'لعبة الذاكرة المثلى — مبنية بالذكاء الاصطناعي',
    'mm.hero.desc':     'متاحة للجميع على Android عبر Google Play.<br/>تريد تجربتها على iPhone؟ انضم للنسخة التجريبية عبر TestFlight!',
    'mm.hero.android':  '📱 Android — Google Play ←',
    'mm.hero.ios':      'iOS — TestFlight ←',
    'mm.about.title':   'ما هي Memory Master؟',
    'mm.about.subtitle':'لعبة ذاكرة كلاسيكية — بلمسة إيموجي',
    'mm.f1.title':      'تحدَّ ذاكرتك',
    'mm.f1.desc':       'ابحث عن أزواج الإيموجي في أقل عدد من القلبات. كلما تذكرت أكثر — فزت أسرع.',
    'mm.f2.title':      'مستويات الصعوبة',
    'mm.f2.desc':       'من شبكة 4×4 صغيرة إلى لوح كبير ومتحدٍّ — اضبط المستوى وتقدم تدريجيًا.',
    'mm.f3.title':      'أرقام قياسية شخصية',
    'mm.f3.desc':       'اللعبة تحفظ رقمك القياسي في كل مستوى — حاول تكسره في كل مرة.',
    'mm.f4.title':      'Android وiOS',
    'mm.f4.desc':       'Android عبر Google Play — مجاني تمامًا. iOS عبر TestFlight في النسخة التجريبية.',
    'mm.how.title':     'كيف تلعب؟',
    'mm.how.subtitle':  'بسيط، سريع، وممتع',
    'mm.s1.title':      'اقلب بطاقة',
    'mm.s1.desc':       'اضغط على أي بطاقة لكشف الإيموجي المخفي خلفها.',
    'mm.s2.title':      'ابحث عن الزوج',
    'mm.s2.desc':       'اقلب بطاقة ثانية وحاول إيجاد الزوج المطابق. وجدته؟ يبقيان مكشوفين!',
    'mm.s3.title':      'أكمل اللوح',
    'mm.s3.desc':       'ابحث عن جميع الأزواج في أقل عدد من القلبات للحصول على نقاط عالية.',
    'mm.s4.title':      'ارتقِ بالمستويات',
    'mm.s4.desc':       'كل مستوى أصعب — المزيد من البطاقات، المزيد من الإيموجي، المزيد من التحدي!',

    // --- King of Cheating ---
    'koc.desc':       'لعبة إطلاق نار متعددة اللاعبين للجوال — عصا تحكم، رصاص، أعداء، جدران حماية وعملات. تشمل متجر الشخصيات، لوحة المتصدرين وFirebase. قيد التطوير.',
    'project.in_dev': '🚧 قيد التطوير',

    // --- Blog page ---
    'blog.title':    'مدونة mishmish',
    'blog.subtitle': 'مقالات عن التطوير والذكاء الاصطناعي وكيفية بناء أدوات مفيدة',
  }
};

// ============================================================
// Engine
// ============================================================

function detectLang() {
  const saved = localStorage.getItem('mishmish-lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  const browser = (navigator.language || 'he').slice(0, 2).toLowerCase();
  if (browser === 'en') return 'en';
  return 'he';
}

function setLang(lang) {
  localStorage.setItem('mishmish-lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.he;
  const isRTL = (lang !== 'en');

  // Set document direction and language
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  // Translate innerHTML elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Highlight active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function injectLangSwitcher() {
  const navbar = document.getElementById('navbar');
  if (!navbar || document.getElementById('langSwitcher')) return;
  const div = document.createElement('div');
  div.id = 'langSwitcher';
  div.className = 'lang-switcher';
  div.innerHTML = `
    <button class="lang-btn" data-lang="he" onclick="setLang('he')">עב</button>
    <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>
  `;
  // Insert before hamburger button (last child) or just append
  const hamburger = navbar.querySelector('.hamburger');
  if (hamburger) navbar.insertBefore(div, hamburger);
  else navbar.appendChild(div);
}

// ============================================================
// Init
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  injectLangSwitcher();
  applyLang(detectLang());
});
