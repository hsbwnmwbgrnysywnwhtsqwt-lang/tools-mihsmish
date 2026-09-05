// ===== המבורגר =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // סגור תפריט בלחיצה על קישור
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ===== Smooth scroll לנאב-בר =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 24;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== טופס יצירת קשר =====
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // ולידציה בסיסית
    if (!name || !email || !message) {
      formMsg.textContent = '⚠️ אנא מלא את כל השדות';
      formMsg.className = 'form-msg error';
      return;
    }

    if (!email.includes('@')) {
      formMsg.textContent = '⚠️ אימייל לא תקין';
      formMsg.className = 'form-msg error';
      return;
    }

    // פתח חלון מייל (mailto)
    const subject = encodeURIComponent(`הודעה מ-${name} דרך mishmish`);
    const body = encodeURIComponent(`שם: ${name}\nאימייל: ${email}\n\n${message}`);
    window.location.href = `mailto:levmishmish14@gmail.com?subject=${subject}&body=${body}`;

    formMsg.textContent = '✅ מעולה! פותח את תוכנת המייל...';
    formMsg.className = 'form-msg success';
    form.reset();
  });
}

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ===== אנימציית כניסה בגלילה =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .about-text, .contact-info').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== חלון פרויקט =====
const PROJECT_DETAILS = {
  he: {
    'video-controller': {
      title: 'Video Controller',
      short: 'תוסף כרום לשליטה נוחה ומהירה בסרטונים מכל אתר.',
      long: 'Video Controller הוא תוסף Chrome שמוסיף שכבת שליטה אחידה לסרטונים באתרים כמו YouTube, Netflix, Udemy ועוד. הוא מאפשר לשנות מהירות צפייה, לעצור ולהמשיך, לדלג קדימה ואחורה ולעבוד עם קיצורי מקלדת במקום לחפש בכל אתר את הכפתורים שלו. הפרויקט נבנה ב-JavaScript ופורסם בחנות הכרום הרשמית.',
      tags: ['Chrome Extension', 'JavaScript', 'AI'],
      screenshots: []
    },
    'mishmish-site': {
      title: 'אתר mishmish',
      short: 'אתר הפורטפוליו והמותג של mishmish.',
      long: 'אתר mishmish מציג את הפרויקטים, השירותים והמידע על מיכאל לב. הוא נבנה כאתר סטטי מהיר עם HTML, CSS ו-JavaScript, כולל תמיכה בעברית ובאנגלית, התאמה למובייל, SEO בסיסי, מטא-דאטה לשיתוף וקישורים לפרויקטים המרכזיים.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
      screenshots: []
    },
    waycode: {
      title: 'WayCode',
      short: 'אפליקציית VS Code בפיתוח שמכניסה סוכן קוד דובר עברית לתוך סביבת הפיתוח.',
      long: 'WayCode היא אפליקציית VS Code שנמצאת בפיתוח פעיל. היא נועדה לאפשר לבקש תיקונים ושינויים בעברית ישירות מתוך סביבת הפיתוח: לקרוא את מבנה הפרויקט, לחפש בקבצים, לערוך קוד, להריץ בדיקות או lint כשצריך, ולהציג אישור לפני פעולות מסוכנות. הפרויקט נבנה ב-TypeScript, יש לו בסיס עובד ודף Marketplace, אבל הוא עדיין מוצג כפרויקט בבנייה ולא כמוצר סופי.',
      tags: ['VS Code', 'TypeScript', 'AI', 'בפיתוח'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/waycode-vscode.png',
          alt: 'מסך הצ\'אט של WayCode בתוך VS Code',
          caption: 'סוכן קוד בתוך סביבת הפיתוח'
        },
        {
          src: 'assets/images/project-screenshots/waycode-settings.png',
          alt: 'מסך ההגדרות של WayCode',
          caption: 'בחירת מודלים, שפה והרשאות'
        }
      ]
    },
    'memory-master': {
      title: 'Memory Master',
      short: 'משחק זיכרון אמוג׳י למובייל.',
      long: 'Memory Master הוא משחק זיכרון צבעוני שבו המשתמשים מחפשים זוגות של אמוג׳ים בזמן קצר ככל האפשר. האפליקציה כוללת רמות קושי, שיאים אישיים וחוויית משחק פשוטה שמתאימה גם לילדים וגם למבוגרים. הפרויקט נבנה עם Expo ו-React Native ופורסם ב-Google Play, עם גרסת iOS בבטא.',
      tags: ['Expo', 'React Native', 'Google Play', 'AI'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/memory-master-play-home.jpg',
          alt: 'מסך הבית של Memory Master מתוך Google Play',
          caption: 'בחירת ערכות ואתגר יומי'
        },
        {
          src: 'assets/images/project-screenshots/memory-master-play-board.jpg',
          alt: 'לוח המשחק של Memory Master מתוך Google Play',
          caption: 'לוח משחק פעיל'
        },
        {
          src: 'assets/images/project-screenshots/memory-master-play-store.jpg',
          alt: 'החנות של Memory Master מתוך Google Play',
          caption: 'חנות חבילות ופרסים'
        },
        {
          src: 'assets/images/project-screenshots/memory-master-play-settings.jpg',
          alt: 'ההגדרות של Memory Master מתוך Google Play',
          caption: 'שפה, צלילים ונגישות'
        }
      ]
    },
    tikunchik: {
      title: 'Tikunchik',
      short: 'אפליקציית macOS לתיקון טקסט שהוקלד בשפה הלא נכונה.',
      long: 'Tikunchik היא אפליקציית שורת תפריטים ל-macOS שמתקנת טקסט שהוקלד בפריסת מקלדת לא נכונה. במקום לבצע המרה עיוורת, היא בודקת מילים בעברית ובאנגלית מול בודק האיות של macOS ומחליטה לאיזה כיוון נכון להמיר. התיקון מתבצע ישירות בשדה הטקסט, כולל אפשרות להחלפת שפת ההקלדה באותה פעולה.',
      tags: ['Swift', 'SwiftUI', 'macOS', 'AI'],
      screenshots: []
    },
    'ten-li-yad-platform': {
      title: 'תן לי יד — ניהול צוות',
      short: 'פלטפורמה מלאה לארגון, עם אפליקציות למדריכים ומערכת ניהול למנהלים.',
      long: 'מערכת מלאה שנבנתה עבור ארגון "תן לי יד": אפליקציית iOS ב-Swift/SwiftUI, אפליקציית Android ב-Kotlin ו-Jetpack Compose, ואתר ניהול ב-Next.js המחובר ל-Supabase משותף. המערכת כוללת התחברות, דיווחי שעות, שיבוצים, אישור חודשי, שכר, תזכורות לפני שיבוץ, דשבורד ניהולי, ניהול צוות, מסגרות וכלבים, חשבוניות, חוסרים וחפיפות. באתר הניהול קיים גם עוזר חכם בעברית שמציע פעולות, אך ביצוע מתרחש רק לאחר אישור אנושי.',
      tags: ['Swift', 'Kotlin', 'Next.js', 'Supabase', 'iOS', 'Android', 'AI'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/ten-li-yad-management-demo.png',
          alt: 'דשבורד סקירה כללית מאופס במערכת הניהול של תן לי יד',
          caption: 'סקירה כללית באתר הניהול'
        },
        {
          src: 'assets/images/project-screenshots/ten-li-yad-instructor-demo.png',
          alt: 'מסך דיווח הפעילות המאופס לעובדים',
          caption: 'מסך דיווח פעילות לעובדים'
        },
        {
          src: 'assets/images/project-screenshots/ten-li-yad-ios-home.png',
          alt: 'מסך הבית באפליקציית iOS של תן לי יד',
          caption: 'מסך בית למדריכים באפליקציית iOS'
        },
        {
          src: 'assets/images/project-screenshots/ten-li-yad-android-home.png',
          alt: 'מסך בית באפליקציית Android של תן לי יד',
          caption: 'מסך בית באפליקציית Android'
        }
      ]
    },
    'ten-li-yad-registration': {
      title: 'סדנאות קיץ מאלפים צעירים',
      short: 'דף הרשמה ותשלום לסדנאות מאלפים צעירים.',
      long: 'דף הרשמה לסדנאות "מאלפים צעירים" של תן לי יד. המשתמש בוחר מחזור, ממלא פרטי ילד והורה, מאשר תקנון, בוחר אם לאשר שימוש בתמונות, ממשיך לתשלום, ולאחר החזרה מהתשלום הנתונים נשמרים ל-Google Sheets דרך Google Apps Script.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/young-trainers-registration-hero.png',
          alt: 'דף הנחיתה של סדנאות קיץ מאלפים צעירים',
          caption: 'דף פתיחה והרשמה לסדנאות'
        }
      ]
    },
    meitar: {
      title: 'מיתר — בית חינוך ברוח דיאלוגית',
      short: 'אתר מידע והרשמה לבית חינוך.',
      long: 'אתר שנבנה עבור בית החינוך מיתר. האתר מציג את המקום, מוביל הורים להשארת פרטים, מאפשר יצירת קשר מהירה ושומר פניות ל-Google Sheets דרך Google Apps Script. מבחינה טכנית הוא דומה לדף ההרשמה של סדנאות הקיץ, רק בלי תשלום.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script', 'Google Sheets'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/meitar-hero.jpg',
          alt: 'אתר מיתר',
          caption: 'דף פתיחה, מילוי פרטים ויצירת קשר'
        }
      ]
    }
  },
  en: {
    'video-controller': {
      title: 'Video Controller',
      short: 'A Chrome extension for quick video control across websites.',
      long: 'Video Controller adds a consistent control layer for videos on sites like YouTube, Netflix, Udemy and more. It supports playback speed changes, play/pause, skipping and keyboard shortcuts, so users do not need to hunt for different controls on every site. The project was built in JavaScript and published on the official Chrome Web Store.',
      tags: ['Chrome Extension', 'JavaScript', 'AI'],
      screenshots: []
    },
    'mishmish-site': {
      title: 'mishmish Website',
      short: 'The portfolio and brand website for mishmish.',
      long: 'The mishmish website presents projects, services and information about Michael Lev. It is a fast static site built with HTML, CSS and JavaScript, with Hebrew and English support, responsive layout, basic SEO, sharing metadata and project links.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
      screenshots: []
    },
    waycode: {
      title: 'WayCode',
      short: 'A VS Code app in active development that brings a Hebrew-speaking coding agent into the editor.',
      long: 'WayCode is a VS Code app in active development. It is built to let users request fixes and changes in Hebrew from inside the editor: read the project structure, search files, edit code, run tests or lint when needed, and ask before risky actions. It is built in TypeScript, already has a working base and a Marketplace page, but it is presented as an in-progress project rather than a finished product.',
      tags: ['VS Code', 'TypeScript', 'AI', 'In Development'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/waycode-vscode.png',
          alt: 'WayCode chat inside VS Code',
          caption: 'A coding agent inside the editor'
        },
        {
          src: 'assets/images/project-screenshots/waycode-settings.png',
          alt: 'WayCode settings screen',
          caption: 'Model, language and approval controls'
        }
      ]
    },
    'memory-master': {
      title: 'Memory Master',
      short: 'An emoji memory game for mobile.',
      long: 'Memory Master is a colorful memory game where players find matching emoji pairs as quickly as possible. It includes difficulty levels, personal records and a simple experience for both kids and adults. The project was built with Expo and React Native and published on Google Play, with an iOS beta available.',
      tags: ['Expo', 'React Native', 'Google Play', 'AI'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/memory-master-play-home.jpg',
          alt: 'Memory Master home screen from Google Play',
          caption: 'Theme selection and daily challenge'
        },
        {
          src: 'assets/images/project-screenshots/memory-master-play-board.jpg',
          alt: 'Memory Master game board from Google Play',
          caption: 'An active game board'
        },
        {
          src: 'assets/images/project-screenshots/memory-master-play-store.jpg',
          alt: 'Memory Master store from Google Play',
          caption: 'Card packs and rewards store'
        },
        {
          src: 'assets/images/project-screenshots/memory-master-play-settings.jpg',
          alt: 'Memory Master settings from Google Play',
          caption: 'Language, sound and accessibility controls'
        }
      ]
    },
    tikunchik: {
      title: 'Tikunchik',
      short: 'A macOS app for fixing text typed in the wrong keyboard layout.',
      long: 'Tikunchik is a macOS menu bar app that fixes text typed with the wrong keyboard layout. Instead of blindly converting characters, it checks Hebrew and English words through the macOS spell checker and decides which conversion direction is most likely. It fixes the text directly in the active field and can switch the input language in the same action.',
      tags: ['Swift', 'SwiftUI', 'macOS', 'AI'],
      screenshots: []
    },
    'ten-li-yad-platform': {
      title: 'Ten Li Yad — Team Management',
      short: 'A full organizational platform with instructor apps and an admin management system.',
      long: 'A full platform built for the Ten Li Yad organization: an iOS app in Swift/SwiftUI, an Android app in Kotlin and Jetpack Compose, and a Next.js admin system connected to a shared Supabase backend. The system includes sign-in, time reports, scheduling, monthly confirmation, salary, reminders, admin dashboards, team, framework and dog management, invoices, gaps and overlaps. The admin site also includes a Hebrew smart assistant that proposes actions, while execution happens only after human approval.',
      tags: ['Swift', 'Kotlin', 'Next.js', 'Supabase', 'iOS', 'Android', 'AI'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/ten-li-yad-management-demo.png',
          alt: 'Sanitized Ten Li Yad management dashboard overview',
          caption: 'Management dashboard overview'
        },
        {
          src: 'assets/images/project-screenshots/ten-li-yad-instructor-demo.png',
          alt: 'Sanitized activity reporting screen for instructors',
          caption: 'Activity reporting screen for instructors'
        },
        {
          src: 'assets/images/project-screenshots/ten-li-yad-ios-home.png',
          alt: 'Ten Li Yad iOS app instructor home screen',
          caption: 'Instructor home screen in the iOS app'
        },
        {
          src: 'assets/images/project-screenshots/ten-li-yad-android-home.png',
          alt: 'Ten Li Yad Android app home screen',
          caption: 'Home screen in the Android app'
        }
      ]
    },
    'ten-li-yad-registration': {
      title: 'Young Trainers Summer Workshops',
      short: 'A registration and payment page for Young Trainers workshops.',
      long: 'A registration page for Ten Li Yad\'s Young Trainers workshops. Visitors select a cycle, fill child and parent details, approve the policy, choose photo consent, continue to payment, and after returning from payment the registration is saved to Google Sheets through Google Apps Script.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/young-trainers-registration-hero.png',
          alt: 'Young Trainers Summer Workshops landing page',
          caption: 'Workshop landing and registration page'
        }
      ]
    },
    meitar: {
      title: 'Meitar — Dialogic Education School',
      short: 'An information and registration website for a school.',
      long: 'A website built for Meitar. The site presents the school, leads parents to leave their details, supports quick contact and saves inquiries to Google Sheets through Google Apps Script. Technically it is similar to the summer workshop registration page, only without payment.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script', 'Google Sheets'],
      screenshots: [
        {
          src: 'assets/images/project-screenshots/meitar-hero.jpg',
          alt: 'Meitar website',
          caption: 'Hero page, details form and contact flow'
        }
      ]
    }
  }
};

function getProjectLang() {
  return document.documentElement.lang === 'en' ? 'en' : 'he';
}

function getProjectModal() {
  let modal = document.getElementById('projectModal');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.id = 'projectModal';
  modal.className = 'project-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="project-modal-backdrop" data-project-close></div>
    <article class="project-modal-panel" tabindex="-1">
      <button class="project-modal-close" type="button" data-project-close aria-label="סגור">×</button>
      <div class="project-modal-head">
        <img class="project-modal-icon" alt="" />
        <div>
          <p class="project-modal-kicker">פרויקט</p>
          <h2 class="project-modal-title"></h2>
        </div>
      </div>
      <p class="project-modal-short"></p>
      <div class="project-modal-tags"></div>
      <section class="project-media-section">
        <div class="project-modal-section-head">
          <span class="project-modal-section-title" data-project-media-title>תמונות מהפרויקט</span>
          <span class="project-modal-counter"></span>
        </div>
        <div class="project-modal-screenshots"></div>
      </section>
      <section class="project-description-section">
        <h3 class="project-modal-section-title" data-project-description-title>תיאור מלא</h3>
        <div class="project-modal-long"></div>
      </section>
    </article>
  `;

  document.body.appendChild(modal);
  modal.querySelectorAll('[data-project-close]').forEach(btn => {
    btn.addEventListener('click', closeProjectModal);
  });
  modal.addEventListener('click', event => {
    const button = event.target.closest('[data-project-slide]');
    if (!button) return;
    moveProjectSlide(Number(button.getAttribute('data-project-slide')));
  });
  return modal;
}

function renderProjectScreenshots(modal, details, lang) {
  const section = modal.querySelector('.project-media-section');
  const screenshots = modal.querySelector('.project-modal-screenshots');
  const counter = modal.querySelector('.project-modal-counter');

  if (!details.screenshots.length) {
    section.classList.add('is-hidden');
    screenshots.innerHTML = '';
    counter.textContent = '';
    modal.projectSlide = 0;
    return;
  }

  const slide = Math.min(modal.projectSlide || 0, details.screenshots.length - 1);
  const shot = details.screenshots[slide];
  const prevLabel = lang === 'en' ? 'Previous image' : 'תמונה קודמת';
  const nextLabel = lang === 'en' ? 'Next image' : 'תמונה הבאה';

  section.classList.remove('is-hidden');
  counter.textContent = `${slide + 1} / ${details.screenshots.length}`;
  screenshots.innerHTML = `
    <div class="project-carousel">
      <button class="project-carousel-btn prev" type="button" data-project-slide="-1" aria-label="${prevLabel}">‹</button>
      <figure class="project-shot">
        <img src="${shot.src}" alt="${shot.alt || `${details.title} screenshot ${slide + 1}`}" loading="lazy" decoding="async" />
        ${shot.caption ? `<figcaption>${shot.caption}</figcaption>` : ''}
      </figure>
      <button class="project-carousel-btn next" type="button" data-project-slide="1" aria-label="${nextLabel}">›</button>
    </div>
    <div class="project-carousel-dots" aria-label="${lang === 'en' ? 'Project images' : 'תמונות הפרויקט'}">
      ${details.screenshots.map((_, index) => `
        <button class="project-carousel-dot ${index === slide ? 'active' : ''}" type="button" data-project-slide="${index - slide}" aria-label="${lang === 'en' ? `Image ${index + 1}` : `תמונה ${index + 1}`}"></button>
      `).join('')}
    </div>
  `;
}

function openProjectModal(card) {
  const id = card.getAttribute('data-project-id');
  const lang = getProjectLang();
  const details = PROJECT_DETAILS[lang][id] || PROJECT_DETAILS.he[id];
  if (!details) return;

  const modal = getProjectModal();
  const icon = card.querySelector('.project-icon-img');
  const panel = modal.querySelector('.project-modal-panel');
  const closeButton = modal.querySelector('.project-modal-close');

  modal.projectDetails = details;
  modal.projectLang = lang;
  modal.projectSlide = 0;
  modal.querySelector('.project-modal-icon').src = icon?.getAttribute('src') || '';
  modal.querySelector('.project-modal-kicker').textContent = lang === 'en' ? 'Project' : 'פרויקט';
  closeButton.setAttribute('aria-label', lang === 'en' ? 'Close' : 'סגור');
  modal.querySelector('[data-project-media-title]').textContent = lang === 'en' ? 'Project Screenshots' : 'תמונות מהפרויקט';
  modal.querySelector('[data-project-description-title]').textContent = lang === 'en' ? 'Full Description' : 'תיאור מלא';
  modal.querySelector('.project-modal-title').textContent = details.title;
  modal.querySelector('.project-modal-short').textContent = details.short;
  modal.querySelector('.project-modal-long').textContent = details.long;
  modal.querySelector('.project-modal-tags').innerHTML = details.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join('');
  renderProjectScreenshots(modal, details, lang);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  panel.focus();
}

function moveProjectSlide(step) {
  const modal = document.getElementById('projectModal');
  if (!modal || !modal.projectDetails?.screenshots?.length) return;
  const total = modal.projectDetails.screenshots.length;
  modal.projectSlide = (modal.projectSlide + step + total) % total;
  renderProjectScreenshots(modal, modal.projectDetails, modal.projectLang || getProjectLang());
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('click', event => {
    if (event.target.closest('a, button')) return;
    const url = card.getAttribute('data-project-url');
    if (url) {
      window.location.href = url;
      return;
    }
    openProjectModal(card);
  });
  card.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    const url = card.getAttribute('data-project-url');
    if (url) {
      window.location.href = url;
      return;
    }
    openProjectModal(card);
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeProjectModal();
});

document.querySelectorAll('[data-page-carousel]').forEach(carousel => {
  const track = carousel.querySelector('[data-carousel-track]');
  const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
  const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
  if (slides.length <= 1) carousel.classList.add('single-slide');
  const setActive = index => {
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== index;
      slide.setAttribute('aria-hidden', slideIndex === index ? 'false' : 'true');
    });
    dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
  };
  const goToSlide = index => {
    if (!slides[index]) return;
    setActive(index);
  };
  const getCurrentSlide = () => {
    const activeIndex = dots.findIndex(dot => dot.classList.contains('active'));
    return activeIndex >= 0 ? activeIndex : 0;
  };
  let autoSlideTimer;
  const startAutoSlide = () => {
    if (slides.length <= 1 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
      goToSlide((getCurrentSlide() + 1) % slides.length);
    }, 4500);
  };
  const restartAutoSlide = () => {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  };

  carousel.querySelectorAll('[data-carousel-move]').forEach(button => {
    button.addEventListener('click', () => {
      const current = getCurrentSlide();
      const next = (current + Number(button.getAttribute('data-carousel-move')) + slides.length) % slides.length;
      goToSlide(next);
      restartAutoSlide();
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      restartAutoSlide();
    });
  });

  setActive(getCurrentSlide());

  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
  carousel.addEventListener('mouseleave', startAutoSlide);
  carousel.addEventListener('focusin', () => clearInterval(autoSlideTimer));
  carousel.addEventListener('focusout', startAutoSlide);
  startAutoSlide();
});

function setProjectFilter(filter) {
  const cards = [...document.querySelectorAll('.project-card[data-project-category]')];
  if (!cards.length) return;

  document.querySelectorAll('.project-filter').forEach(button => {
    button.classList.toggle('active', button.getAttribute('data-filter') === filter);
  });

  cards.forEach(card => {
    const categories = (card.getAttribute('data-project-category') || '').split(/\s+/);
    const show = filter === 'all' || categories.includes(filter);
    card.classList.toggle('project-hidden', !show);
  });

  document.querySelectorAll('.projects-section-label').forEach(label => {
    let sibling = label.nextElementSibling;
    let hasVisibleCard = false;
    while (sibling && !sibling.classList.contains('projects-section-label')) {
      if (sibling.matches?.('.project-card') && !sibling.classList.contains('project-hidden')) {
        hasVisibleCard = true;
        break;
      }
      sibling = sibling.nextElementSibling;
    }
    label.classList.toggle('project-hidden', !hasVisibleCard);
  });
}

document.querySelectorAll('.project-filter').forEach(button => {
  button.addEventListener('click', () => setProjectFilter(button.getAttribute('data-filter') || 'all'));
});

document.querySelectorAll('[data-path-filter]').forEach(card => {
  card.addEventListener('click', () => {
    const filter = card.getAttribute('data-path-filter');
    if (filter) window.setTimeout(() => setProjectFilter(filter), 250);
  });
});

function loadPreviewVideo(video) {
  if (!video || video.dataset.loaded === 'true') return;
  const src = video.getAttribute('data-video-src');
  if (!src) return;
  video.src = src;
  video.dataset.loaded = 'true';
  video.load();
  const playPromise = video.play();
  if (playPromise?.catch) playPromise.catch(() => {});
}

const previewVideos = [...document.querySelectorAll('video[data-video-src]')];
if ('IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      loadPreviewVideo(entry.target);
      videoObserver.unobserve(entry.target);
    });
  }, { rootMargin: '220px 0px' });
  previewVideos.forEach(video => videoObserver.observe(video));
} else {
  previewVideos.forEach(loadPreviewVideo);
}

function injectFloatingWhatsapp() {
  if (document.querySelector('.floating-whatsapp')) return;
  const lang = typeof detectLang === 'function' ? detectLang() : getProjectLang();
  const label = TRANSLATIONS?.[lang]?.['floating.whatsapp'] || TRANSLATIONS.he['floating.whatsapp'];
  const link = document.createElement('a');
  link.className = 'floating-whatsapp';
  link.href = 'https://wa.me/972535237474';
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', label);
  link.innerHTML = `
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.02 3.2A12.7 12.7 0 0 0 5.08 22.36L3.5 28.5l6.28-1.5A12.7 12.7 0 1 0 16.02 3.2Zm0 2.25a10.45 10.45 0 1 1 0 20.9c-1.83 0-3.55-.47-5.05-1.3l-.38-.22-3.74.9.94-3.64-.25-.4a10.45 10.45 0 0 1 8.48-16.24Zm-4.1 5.38c-.22-.5-.45-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.15.2 2.05 3.3 5.05 4.5 2.5 1 3 .8 3.55.75.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.92-2.18Z"/></svg>
    <span data-i18n="floating.whatsapp">${label}</span>
  `;
  document.body.appendChild(link);
}

injectFloatingWhatsapp();
