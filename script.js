const roster = [
  { name: 'KisEspander', roles: { en: 'Clan lead', ru: 'Командир' }, type: 'officer', online: true },
  { name: 'Balista', roles: { en: 'Deputy lead', ru: 'Заместитель' }, type: 'officer', online: true },
  { name: 'Rook', roles: { en: 'Rifleman', ru: 'Стрелок' }, type: 'infantry', online: true },
  { name: 'Mako', roles: { en: 'Medic', ru: 'Медик' }, type: 'infantry', online: true },
  { name: 'Vex', roles: { en: 'Automatic Rifleman', ru: 'Пулемётчик' }, type: 'infantry', online: false },
  { name: 'Havoc', roles: { en: 'Rifleman', ru: 'Стрелок' }, type: 'infantry', online: false }
  , ...Array.from({ length: 6 }, (_, index) => ({ name: `Officer ${String(index + 3).padStart(2, '0')}`, roles: { en: 'Officer', ru: 'Офицер' }, type: 'officer', online: false }))
  , ...Array.from({ length: 18 }, (_, index) => ({ name: `Infantry ${String(index + 5).padStart(2, '0')}`, roles: { en: 'Infantry', ru: 'Пехота' }, type: 'infantry', online: false }))
];

const copy = {
  en: {
    brandDivision: 'THE NIGHT WITCHES', clanName: 'THE NIGHT WITCHES', navMission: 'Mission', navRoster: 'Roster', navDeploy: 'Deploy', discord: 'Discord',
    eyebrow: 'SQUAD // NIGHT OPERATIONS', heroTitle: 'Night.<br><em>No limits.</em>', heroText: 'The Night Witches are a Squad clan for players who move quietly, communicate clearly, and own the objective before sunrise.', heroCta: 'Request deployment', heroRoster: 'View active roster', communityStatus: 'COMMUNITY STATUS', online: 'ONLINE',
    missionLabel: 'MISSION BRIEF', missionKicker: 'No spectators. No solo heroes.', missionTitle: 'Fly quiet.<br><span>Strike together.</span>', missionText: 'TMNW is a night operations unit for players who want Squad to feel like Squad: organized enough to be effective, relaxed enough to be fun. We build every sortie around teamwork, good leadership, and the next objective.', principleOne: 'DISCIPLINE', principleOneText: 'Comms that keep the squad moving.', principleTwo: 'TRUST', principleTwoText: 'Good players make good teammates.', principleThree: 'ADAPTATION', principleThreeText: 'Every plan changes on contact.', serverTitle: 'HOME SERVER // BSS', serverText: 'Мир Дружба Жвачка is our home base. Play anywhere you like, then come back to familiar faces.', philosophyTitle: 'PLAY YOUR WAY', philosophyText: 'No mandatory daily logins, no forced seeding, and no military-style pressure. We play for fun.', vipTitle: 'VIP AFTER FIRST SORTIE', vipText: 'Every active member receives a free VIP slot on BSS servers after joining us at least once.', leaveTitle: 'TAKING LEAVE?', leaveText: 'Tell an officer in the #увал channel so you are not caught by periodic inactivity purges.',
    personnelLabel: 'PERSONNEL', active: 'ACTIVE', activeNow: 'ACTIVE', deploymentKicker: 'The crew', rosterTitle: 'Our <span>crew.</span>', onlineNow: 'ONLINE NOW', filterRoster: 'Filter roster', filterAll: 'All', filterOfficers: 'Officers', filterInfantry: 'Infantry',
    ranksEyebrow: 'CLAN RANKS', activeNow: 'ACTIVE', ranksTitle: 'Ranks of<br>the coven', ranksText: 'Recognition earned through teamwork, experience, and service to the clan.',
    openChannel: 'OPEN CHANNEL', joinKicker: 'Your fireteam is waiting.', joinTitle: 'Ready to<br><span>deploy?</span>', joinText: 'Bring your best comms, your worst jokes, and a willingness to play the objective. New recruits and seasoned SLs are both welcome.', joinCta: 'Enter the Discord', joinAside: 'ALL SQUADS<br>FORM UP HERE', joinAsideSmall: 'VOICE // COMMS // COMMUNITY', footerDivision: 'THE NIGHT WITCHES', footerTagline: 'BUILT FOR THE OBJECTIVE', backToTop: 'BACK TO TOP ↑', onlineCard: 'Online', standbyCard: 'Standby'
  },
  ru: {
    brandDivision: 'КОМАНДА НОЧНЫХ ВЕДЬМ', clanName: 'КОМАНДА НОЧНЫХ ВЕДЬМ', navMission: 'Миссия', navRoster: 'Состав', navDeploy: 'Вступить', discord: 'Discord',
    eyebrow: 'SQUAD // НОЧНЫЕ ОПЕРАЦИИ', heroTitle: 'Ночь.<br><em>Без границ.</em>', heroText: '«Команда Ночных Ведьм» — клан Squad для тех, кто двигается тихо, говорит чётко и берёт цель до рассвета.', heroCta: 'Запросить вылет', heroRoster: 'Смотреть состав', communityStatus: 'СТАТУС СООБЩЕСТВА', online: 'В СЕТИ',
    missionLabel: 'БРИФИНГ МИССИИ', missionKicker: 'Без зрителей. Без одиночек.', missionTitle: 'Летим тихо.<br><span>Бьём вместе.</span>', missionText: 'TMNW — подразделение ночных операций для тех, кто хочет играть в Squad как в Squad: организованно и эффективно, но без потери удовольствия. Каждый вылет строится на командной работе, лидерстве и следующей цели.', principleOne: 'ДИСЦИПЛИНА', principleOneText: 'Связь, которая ведёт отряд вперёд.', principleTwo: 'ДОВЕРИЕ', principleTwoText: 'Хорошие игроки делают хороших напарников.', principleThree: 'ГИБКОСТЬ', principleThreeText: 'При контакте любой план меняется.', serverTitle: 'ДОМАШНИЙ СЕРВЕР // BSS', serverText: 'Мир Дружба Жвачка — наша домашняя база. Играй где хочешь, а потом возвращайся к знакомым лицам.', philosophyTitle: 'ИГРАЙ КАК ХОЧЕШЬ', philosophyText: 'Без обязательных ежедневных заходов, форсированного сидирования и военного давления. Мы играем ради удовольствия.', vipTitle: 'VIP ПОСЛЕ ПЕРВОГО ВЫЛЕТА', vipText: 'Каждый активный участник получает бесплатный VIP-слот на серверах BSS после первого совместного вылета.', leaveTitle: 'УХОДИШЬ В УВАЛ?', leaveText: 'Сообщи офицеру в канале #увал, чтобы не попасть под периодическую чистку неактивных.',
    personnelLabel: 'ЛИЧНЫЙ СОСТАВ', active: 'АКТИВНЫХ', activeNow: 'АКТИВНО', deploymentKicker: 'Наши бойцы', rosterTitle: 'Наш <span>состав.</span>', onlineNow: 'В СЕТИ', filterRoster: 'Фильтр состава', filterAll: 'Все', filterOfficers: 'Офицеры', filterInfantry: 'Пехота',
    ranksEyebrow: 'ЗВАНИЯ КЛАНА', activeNow: 'АКТИВНО', ranksTitle: 'Звания<br>ведьм', ranksText: 'Признание за командную работу, опыт и вклад в развитие клана.',
    openChannel: 'ОТКРЫТЫЙ КАНАЛ', joinKicker: 'Твоя огневая группа ждёт.', joinTitle: 'Готовы к<br><span>вылету?</span>', joinText: 'Бери лучшие переговоры, худшие шутки и готовность играть на задачу. Новички и опытные командиры отделений приветствуются.', joinCta: 'Войти в Discord', joinAside: 'ВСЕ ОТРЯДЫ<br>СТРОЯТСЯ ЗДЕСЬ', joinAsideSmall: 'ГОЛОС // СВЯЗЬ // СООБЩЕСТВО', footerDivision: 'КОМАНДА НОЧНЫХ ВЕДЬМ', footerTagline: 'РАДИ ОБЩЕЙ ЦЕЛИ', backToTop: 'НАВЕРХ ↑', onlineCard: 'В сети', standbyCard: 'Ожидание'
  }
};

let language = 'en';

Object.assign(copy.en, {
  formKicker: 'OPEN CHANNEL', formTitle: 'Request<br><span>deployment.</span>', formText: 'Tell the officers a little about your play style. This demo validates locally; connect it to an HTTPS backend before collecting real submissions.', steamLabel: 'Steam ID', hoursLabel: 'Squad hours', roleLabel: 'Role preference', roleInfantry: 'Infantry', roleOfficer: 'Officer', roleMedic: 'Medic', discordTagLabel: 'Discord tag', formSubmit: 'Send request', formSuccess: 'Request prepared locally. Send it through Discord.', formInvalid: 'Please complete each field with valid information.', copiedToast: 'Server IP copied.'
});
Object.assign(copy.ru, {
  formKicker: 'ОТКРЫТЫЙ КАНАЛ', formTitle: 'Запросить<br><span>вылет.</span>', formText: 'Расскажите офицерам о своём стиле игры. Сейчас проверка работает локально; для заявок подключите HTTPS-бэкенд.', steamLabel: 'Steam ID', hoursLabel: 'Часы в Squad', roleLabel: 'Предпочтительная роль', roleInfantry: 'Пехота', roleOfficer: 'Офицер', roleMedic: 'Медик', discordTagLabel: 'Тег Discord', formSubmit: 'Отправить заявку', formSuccess: 'Заявка подготовлена локально. Отправьте её через Discord.', formInvalid: 'Заполните все поля корректно.', copiedToast: 'IP сервера скопирован.'
});

const ranks = [
  { code: '[Pvt]', en: 'Private', ru: 'Рядовой' },
  { code: '[Cpl]', en: 'Corporal', ru: 'Капрал' },
  { code: '[Sgt]', en: 'Sergeant', ru: 'Сержант' },
  { code: '[SSgt]', en: 'Staff Sergeant', ru: 'Старший сержант' },
  { code: '[SFC]', en: 'Sergeant First Class', ru: 'Сержант первого класса' },
  { code: '[CSM]', en: 'Command Sergeant Major', ru: 'Главный сержант' },
  { code: '[Wrt]', en: 'Warrant Officer', ru: 'Прапорщик' },
  { code: '[SWrt]', en: 'Senior Warrant Officer', ru: 'Старший прапорщик' },
  { code: '[CWrt]', en: 'Chief Warrant Officer', ru: 'Главный прапорщик' },
  { code: '[cLT]', en: 'Cadet Lieutenant', ru: 'Кадет-лейтенант' },
  { code: '[LT]', en: 'Lieutenant', ru: 'Лейтенант' },
  { code: '[CPT]', en: 'Captain', ru: 'Капитан' },
  { code: '[Maj]', en: 'Major', ru: 'Майор' },
  { code: '[LTC]', en: 'Lieutenant Colonel', ru: 'Подполковник' },
  { code: '[COL]', en: 'Colonel', ru: 'Полковник' },
  { code: '[GEN]', en: 'General', ru: 'Генерал' }
];

const rosterGrid = document.querySelector('#roster-grid');
const filters = document.querySelectorAll('.filter-button');
const languageToggle = document.querySelector('#language-toggle');
const deploymentModal = document.querySelector('#deployment-modal');
const deploymentTrigger = document.querySelector('#deployment-trigger');
const modalClose = document.querySelector('#modal-close');
const deploymentForm = document.querySelector('#deployment-form');
const formFeedback = document.querySelector('#form-feedback');

const initials = (name) => name.slice(0, 2).toUpperCase();
const formatNumber = (number) => String(number).padStart(2, '0');

function renderRoster(filter = 'all') {
  const visibleRoster = filter === 'all' ? roster : roster.filter((member) => member.type === filter);
  rosterGrid.innerHTML = visibleRoster.map((member, index) => `
    <article class="roster-card ${member.type}">
      <span class="card-index">${formatNumber(index + 1)}</span>
      <span class="card-online">${member.online ? copy[language].onlineCard : copy[language].standbyCard}</span>
      <div class="card-avatar" aria-hidden="true">${initials(member.name)}</div>
      <div class="card-name">${member.name}</div>
      <div class="card-role">${member.roles[language]}</div>
    </article>
  `).join('');
}

function renderRanks() {
  document.querySelector('#rank-list').innerHTML = ranks.map((rank) => `
    <div class="rank-row">
      <strong>${rank.code}</strong><span>${rank[language]}</span>
    </div>
  `).join('');
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = copy[language][element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', copy[language][element.dataset.i18nAria]);
  });
  languageToggle.innerHTML = language === 'en' ? '<span class="language-active">EN</span><span>RU</span>' : '<span>EN</span><span class="language-active">RU</span>';
  renderRoster(document.querySelector('.filter-button.active').dataset.filter);
  renderRanks();
}

function updateCounters() {
  const officers = roster.filter((member) => member.type === 'officer').length;
  const infantry = roster.filter((member) => member.type === 'infantry').length;
  const online = roster.filter((member) => member.online).length;

  document.querySelector('#online-count').textContent = formatNumber(online);
  document.querySelector('[data-filter-count="all"]').textContent = formatNumber(roster.length);
  document.querySelector('[data-filter-count="officer"]').textContent = formatNumber(officers);
  document.querySelector('[data-filter-count="infantry"]').textContent = formatNumber(infantry);
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((filterButton) => filterButton.classList.remove('active'));
    button.classList.add('active');
    renderRoster(button.dataset.filter);
  });
});

languageToggle.addEventListener('click', () => {
  language = language === 'en' ? 'ru' : 'en';
  applyLanguage();
});

deploymentTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  deploymentModal.hidden = false;
  deploymentModal.classList.add('modal-visible');
  deploymentModal.querySelector('input').focus();
});

function closeDeploymentModal() {
  deploymentModal.classList.remove('modal-visible');
  deploymentModal.hidden = true;
}

modalClose.addEventListener('click', closeDeploymentModal);
deploymentModal.addEventListener('click', (event) => { if (event.target === deploymentModal) closeDeploymentModal(); });
deploymentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!deploymentForm.checkValidity()) {
    formFeedback.textContent = copy[language].formInvalid;
    return;
  }
  formFeedback.textContent = copy[language].formSuccess;
  deploymentForm.reset();
});


applyLanguage();
renderRoster();
updateCounters();
