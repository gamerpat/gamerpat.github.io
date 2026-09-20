const roster = [
  { name: 'KisEspander', roles: { en: 'Clan lead', ru: 'Глава клана' }, type: 'officer' },
  { name: 'Balista', roles: { en: 'Deputy lead', ru: 'Заместитель главы' }, type: 'officer' }
];

const copy = {
  en: {
    brandDivision: 'THE NIGHT WITCHES', clanName: 'THE NIGHT WITCHES', navMission: 'Mission', navRoster: 'Roster', navDeploy: 'Deploy', discord: 'Discord',
    eyebrow: 'SQUAD // NIGHT OPERATIONS', heroTitle: 'Night.<br><em>No limits.</em>', heroText: 'The Night Witches are a Squad clan for players who move quietly, communicate clearly, and own the objective before sunrise.', heroCta: 'Request deployment', heroRoster: 'View active roster', homeServerLabel: 'HOME SERVER', heroLocation: 'МИР ДРУЖБА ЖВАЧКА // BSS',
    missionLabel: 'MISSION BRIEF', missionKicker: 'No spectators. No solo heroes.', missionTitle: 'Fly quiet.<br><span>Strike together.</span>', missionText: 'TMNW is a night operations unit for players who want Squad to feel like Squad: organized enough to be effective, relaxed enough to be fun. We build every sortie around teamwork, good leadership, and the next objective.', principleOne: 'DISCIPLINE', principleOneText: 'Comms that keep the squad moving.', principleTwo: 'TRUST', principleTwoText: 'Good players make good teammates.', principleThree: 'ADAPTATION', principleThreeText: 'Every plan changes on contact.', serverTitle: 'HOME SERVER // BSS', serverText: 'Мир Дружба Жвачка is our home base. Play anywhere you like, then come back to familiar faces.', philosophyTitle: 'PLAY YOUR WAY', philosophyText: 'No mandatory daily logins, no forced seeding, and no military-style pressure. We play for fun.', vipTitle: 'VIP AFTER FIRST SORTIE', vipText: 'Every active member receives a free VIP slot on BSS servers after joining us at least once.', leaveTitle: 'TAKING LEAVE?', leaveText: 'Tell an officer in the #увал channel so you are not caught by periodic inactivity purges.',
    personnelLabel: 'PERSONNEL', active: 'ACTIVE', activeNow: 'ACTIVE', deploymentKicker: 'Verified members', rosterTitle: 'Our <span>crew.</span>', memberCount: 'ACTIVE MEMBERS', leadCard: 'LEAD', memberCard: 'MEMBER', filterRoster: 'Filter roster', filterAll: 'All', filterOfficers: 'Leads', filterInfantry: 'Players',
    ranksEyebrow: 'HOW WE PLAY', activeNow: 'ACTIVE', ranksTitle: 'How we<br>play together', ranksText: 'A short path from first sortie to helping the squad. No parade-ground hierarchy.',
    openChannel: 'OPEN CHANNEL', joinKicker: 'Your fireteam is waiting.', joinTitle: 'Ready to<br><span>deploy?</span>', joinText: 'Bring your best comms, your worst jokes, and a willingness to play the objective. New recruits and seasoned SLs are both welcome.', stepOne: 'Join the Discord and say hello.', stepTwo: 'Send the short application below.', stepThree: 'Pick a first sortie with the crew.', joinCta: 'Enter the Discord', joinAside: 'ALL SQUADS<br>FORM UP HERE', joinAsideSmall: 'VOICE // COMMS // COMMUNITY', footerDivision: 'THE NIGHT WITCHES', footerTagline: 'BUILT FOR THE OBJECTIVE', backToTop: 'BACK TO TOP ↑', onlineCard: 'Online', standbyCard: 'Standby'
  },
  ru: {
    brandDivision: 'КОМАНДА НОЧНЫХ ВЕДЬМ', clanName: 'КОМАНДА НОЧНЫХ ВЕДЬМ', navMission: 'Миссия', navRoster: 'Состав', navDeploy: 'Вступить', discord: 'Discord',
    eyebrow: 'SQUAD // НОЧНЫЕ ОПЕРАЦИИ', heroTitle: 'Ночь.<br><em>Без границ.</em>', heroText: '«Команда Ночных Ведьм» — клан Squad для тех, кто двигается тихо, говорит чётко и берёт цель до рассвета.', heroCta: 'Запросить вылет', heroRoster: 'Смотреть состав', homeServerLabel: 'ДОМАШНИЙ СЕРВЕР', heroLocation: 'МИР ДРУЖБА ЖВАЧКА // BSS',
    missionLabel: 'БРИФИНГ МИССИИ', missionKicker: 'Без зрителей. Без одиночек.', missionTitle: 'Летим тихо.<br><span>Бьём вместе.</span>', missionText: 'TMNW — подразделение ночных операций для тех, кто хочет играть в Squad как в Squad: организованно и эффективно, но без потери удовольствия. Каждый вылет строится на командной работе, лидерстве и следующей цели.', principleOne: 'ДИСЦИПЛИНА', principleOneText: 'Связь, которая ведёт отряд вперёд.', principleTwo: 'ДОВЕРИЕ', principleTwoText: 'Хорошие игроки делают хороших напарников.', principleThree: 'ГИБКОСТЬ', principleThreeText: 'При контакте любой план меняется.', serverTitle: 'ДОМАШНИЙ СЕРВЕР // BSS', serverText: 'Мир Дружба Жвачка — наша домашняя база. Играй где хочешь, а потом возвращайся к знакомым лицам.', philosophyTitle: 'ИГРАЙ КАК ХОЧЕШЬ', philosophyText: 'Без обязательных ежедневных заходов, форсированного сидирования и военного давления. Мы играем ради удовольствия.', vipTitle: 'VIP ПОСЛЕ ПЕРВОГО ВЫЛЕТА', vipText: 'Каждый активный участник получает бесплатный VIP-слот на серверах BSS после первого совместного вылета.', leaveTitle: 'УХОДИШЬ В УВАЛ?', leaveText: 'Сообщи офицеру в канале #увал, чтобы не попасть под периодическую чистку неактивных.',
    personnelLabel: 'ЛИЧНЫЙ СОСТАВ', active: 'АКТИВНЫХ', activeNow: 'АКТИВНО', deploymentKicker: 'Проверенный состав', rosterTitle: 'Наш <span>состав.</span>', memberCount: 'АКТИВНЫХ УЧАСТНИКОВ', leadCard: 'КОМАНДИР', memberCard: 'УЧАСТНИК', filterRoster: 'Фильтр состава', filterAll: 'Все', filterOfficers: 'Командиры', filterInfantry: 'Игроки',
    ranksEyebrow: 'КАК МЫ ИГРАЕМ', activeNow: 'АКТИВНО', ranksTitle: 'Как мы<br>играем вместе', ranksText: 'Короткий путь от первого вылета до помощи отряду. Без строевой и лишней иерархии.',
    openChannel: 'ОТКРЫТЫЙ КАНАЛ', joinKicker: 'Твоя огневая группа ждёт.', joinTitle: 'Готовы к<br><span>вылету?</span>', joinText: 'Бери лучшие переговоры, худшие шутки и готовность играть на задачу. Новички и опытные командиры отделений приветствуются.', stepOne: 'Зайди в Discord и поздоровайся.', stepTwo: 'Отправь короткую заявку ниже.', stepThree: 'Выбери первый вылет с командой.', joinCta: 'Войти в Discord', joinAside: 'ВСЕ ОТРЯДЫ<br>СТРОЯТСЯ ЗДЕСЬ', joinAsideSmall: 'ГОЛОС // ЗАЯВКА // ПЕРВЫЙ ВЫЛЕТ', footerDivision: 'КОМАНДА НОЧНЫХ ВЕДЬМ', footerTagline: 'РАДИ ОБЩЕЙ ЦЕЛИ', backToTop: 'НАВЕРХ ↑', onlineCard: 'В сети', standbyCard: 'Ожидание'
  }
};

let language = 'en';

Object.assign(copy.en, {
  formKicker: 'OPEN CHANNEL', formTitle: 'Request<br><span>deployment.</span>', formText: 'Your application goes straight to the officers in Discord. Share the basics and we will find a first sortie together.', nameLabel: 'In-game name', steamLabel: 'Steam ID <small>64-bit or profile link</small>', hoursLabel: 'Squad hours', roleLabel: 'Role preference', roleInfantry: 'Infantry', roleOfficer: 'Officer', roleMedic: 'Medic', discordTagLabel: 'Discord username', micLabel: 'Microphone', micYes: 'Yes, I can talk', micSometimes: 'Sometimes without mic', primeLabel: 'Prime time (MSK)', formSubmit: 'Send request', formSuccess: 'Request sent. Check Discord for the next step.', formInvalid: 'Please complete each field with valid information.', formError: 'Could not send the request. Join Discord and tell an officer.', copiedToast: 'Server IP copied.'
});
Object.assign(copy.ru, {
  formKicker: 'ОТКРЫТЫЙ КАНАЛ', formTitle: 'Запросить<br><span>вылет.</span>', formText: 'Заявка уходит офицерам прямо в Discord. Расскажи главное, и мы подберём время для первого вылета.', nameLabel: 'Ник в игре', steamLabel: 'Steam ID <small>64-bit или ссылка на профиль</small>', hoursLabel: 'Часы в Squad', roleLabel: 'Предпочтительная роль', roleInfantry: 'Пехота', roleOfficer: 'Офицер', roleMedic: 'Медик', discordTagLabel: 'Имя пользователя Discord', micLabel: 'Микрофон', micYes: 'Есть, могу говорить', micSometimes: 'Иногда без микрофона', primeLabel: 'Прайм-тайм (МСК)', formSubmit: 'Отправить заявку', formSuccess: 'Заявка отправлена. Следующий шаг будет в Discord.', formInvalid: 'Заполни все поля корректно.', formError: 'Не удалось отправить заявку. Зайди в Discord и напиши офицеру.', copiedToast: 'IP сервера скопирован.'
});

const rosterGrid = document.querySelector('#roster-grid');
const languageToggle = document.querySelector('#language-toggle');
const deploymentModal = document.querySelector('#deployment-modal');
const deploymentTrigger = document.querySelector('#deployment-trigger');
const modalClose = document.querySelector('#modal-close');
const deploymentForm = document.querySelector('#deployment-form');
const formFeedback = document.querySelector('#form-feedback');
const menuToggle = document.querySelector('#menu-toggle');
const navigation = document.querySelector('.desktop-nav');
let lastFocusedElement;

const initials = (name) => name.slice(0, 2).toUpperCase();
const formatNumber = (number) => String(number).padStart(2, '0');

function renderRoster(filter = 'all') {
  const visibleRoster = filter === 'all' ? roster : roster.filter((member) => member.type === filter);
  rosterGrid.innerHTML = visibleRoster.map((member, index) => `
    <article class="roster-card ${member.type}">
      <span class="card-index">${formatNumber(index + 1)}</span>
      <span class="card-online">${member.type === 'officer' ? copy[language].leadCard : copy[language].memberCard}</span>
      <div class="card-avatar" aria-hidden="true">${initials(member.name)}</div>
      <div class="card-name">${member.name}</div>
      <div class="card-role">${member.roles[language]}</div>
    </article>
  `).join('');
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = copy[language][element.dataset.i18n] ?? element.dataset.i18n;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', copy[language][element.dataset.i18nAria]);
  });
  languageToggle.innerHTML = language === 'en' ? '<span class="language-active">EN</span><span>RU</span>' : '<span>EN</span><span class="language-active">RU</span>';
  renderRoster();
}

function updateCounters() {
  document.querySelector('#member-count').textContent = formatNumber(roster.length);
}

languageToggle.addEventListener('click', () => {
  language = language === 'en' ? 'ru' : 'en';
  localStorage.setItem('tmnw-language', language);
  applyLanguage();
});

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

deploymentTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  lastFocusedElement = document.activeElement;
  deploymentModal.hidden = false;
  deploymentModal.classList.add('modal-visible');
  deploymentModal.querySelector('input').focus();
});

function closeDeploymentModal() {
  deploymentModal.classList.remove('modal-visible');
  deploymentModal.hidden = true;
  lastFocusedElement?.focus();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !deploymentModal.hidden) closeDeploymentModal();
  if (event.key === 'Tab' && !deploymentModal.hidden) {
    const focusable = [...deploymentModal.querySelectorAll('button, input, select')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

modalClose.addEventListener('click', closeDeploymentModal);
deploymentModal.addEventListener('click', (event) => { if (event.target === deploymentModal) closeDeploymentModal(); });
deploymentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!deploymentForm.checkValidity()) {
    formFeedback.textContent = copy[language].formInvalid;
    return;
  }
  const submitButton = deploymentForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  try {
    const response = await fetch('/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(deploymentForm))) });
    if (!response.ok) throw new Error('application failed');
    formFeedback.textContent = copy[language].formSuccess;
    deploymentForm.reset();
  } catch (error) {
    formFeedback.textContent = copy[language].formError;
  } finally { submitButton.disabled = false; }
});

language = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : localStorage.getItem('tmnw-language') || 'ru';
applyLanguage();
renderRoster();
updateCounters();
