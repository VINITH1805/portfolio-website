const stack = [['C# & .NET', 'Modular REST APIs for insurance quote workflows, Entity Framework APIs for banking, and a containerized backend for my own developer tool.', 'lloyds', 'See the insurance project'], ['Angular', 'Responsive screens, Angular Material components, multi-step forms, and data binding. Used in enterprise onboarding, insurance workflows, and devVault.', 'lloyds', 'See Lloyd’s Rater'], ['SQL & EF Core', 'Entity Framework data access for business applications, SQL in insurance workflows, and Neon PostgreSQL for storing developer work in devVault.', 'devvault', 'See devVault'], ['API integrations', 'Centralized service layers for third-party vendor APIs in the insurance application. GitHub OAuth and Gemini integration in my personal project.', 'lloyds', 'See Lloyd’s Rater'], ['Testing & delivery', 'Unit tests with xUnit/NUnit, structured logging, and error handling. Supported delivery with Bitbucket, Jenkins, and Red Hat OpenShift.', 'pnc', 'See the banking work'], ['AI in devVault', 'Integrated Gemini AI to turn raw Git diffs into release notes, semantic version suggestions, and professional content.', 'devvault', 'Explore the personal project']];
document.querySelectorAll('[data-stack]').forEach(b => b.addEventListener('click', () => { const s = stack[Number(b.dataset.stack)]; document.querySelectorAll('[data-stack]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); document.getElementById('stack-title').textContent = s[0]; document.getElementById('stack-text').textContent = s[1]; const l = document.getElementById('stack-link'); l.href = '#' + s[2]; l.textContent = s[3]; }));
const navlinks = [...document.querySelectorAll('nav a')]; const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) navlinks.forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id)); }); }, { rootMargin: '-10% 0px -65% 0px' }); document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

const menu = document.querySelector('#menu');
const panel = document.querySelector('#navigation-panel');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
panel.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
window.matchMedia('(max-width:760px)').addEventListener('change', () => setMenu(false));
const themeButton = document.querySelector('#theme');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  const label = dark ? 'Switch to light theme' : 'Switch to dark theme';
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
}
let initialDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
try {
  const saved = localStorage.getItem('vinith-theme');
  if (saved) initialDark = saved === 'dark';
} catch { }
setTheme(initialDark);
themeButton.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme !== 'dark');
  try { localStorage.setItem('vinith-theme', document.documentElement.dataset.theme); } catch { }
});
document.querySelectorAll('[data-case]').forEach(button => {
  button.addEventListener('click', () => document.getElementById('case-' + button.dataset.case).showModal());
});
document.querySelectorAll('.case-dialog').forEach(panel => {
  panel.querySelector('.close-case').addEventListener('click', () => panel.close());
  panel.addEventListener('click', event => {
    const box = panel.getBoundingClientRect();
    if (event.target === panel && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) panel.close();
  });
});
