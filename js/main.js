(() => {
  const CDN = 'https://static.tildacdn.com/';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const icon = (id) => `<svg><use href="#i-${id}"/></svg>`;

  /* ---------- data ---------- */
  const SERVICES = [
    { id: 'buffet', tag: 'Хит', title: 'Фуршет с обслуживанием', text: 'Вкусное оформление вашего частного праздника или делового мероприятия.', img: 'tild3630-3864-4364-b433-376238636463/Mask_group11.jpg' },
    { id: 'ny', tag: 'Сезон', title: 'Новогодний банкет', text: 'Вы создаёте мероприятие, мы обеспечиваем высокую кухню.', img: 'tild3866-6131-4036-b230-306437666330/Mask_group12.jpg' },
    { id: 'expo', title: 'Обслуживание выставочных стендов', text: 'Вкусные закуски и профессиональные официанты привлекут внимание к стенду и удивят гостей.', img: 'tild6165-3639-4630-b232-313666346165/Mask_group13.jpg' },
    { id: 'wedding', title: 'Свадебный банкет', text: 'Организуем обслуживание вашей свадьбы так, чтобы не пришлось переживать ни о чём.', img: 'tild6663-6265-4332-a338-356533333334/Mask_group14.jpg' },
    { id: 'kids', title: 'Детский кейтеринг', text: 'Специальное меню для наших самых маленьких гостей.', img: 'tild6138-3766-4438-b233-383331636430/Mask_group15.jpg' },
    { id: 'master', title: 'Кулинарные мастер-классы', text: 'Кулинарные шоу, которые заворожат своей зрелищностью.', img: 'tild3832-6661-4662-b735-326664373066/Mask_group16.jpg' },
    { id: 'bbq', tag: 'Фирменное', title: 'BigBoss BBQ', text: 'Мобильный техасский смокер: пикник, OpenAir или барбекю-вечеринка с восхитительной едой на гриле.', img: 'tild3463-3562-4733-a531-373835343664/Mask_group17.jpg' },
    { id: 'boxes', title: 'Доставка готовых боксов', text: 'Доставка и сервировка готовой еды на мероприятие, которое вы организуете своими силами.', img: 'tild6532-3235-4338-a238-616436393233/Mask_group18.jpg' },
    { id: 'rent', title: 'Аренда оборудования', text: 'Собственная материальная база, которой мы делимся с партнёрами.', img: 'tild3738-3231-4132-b062-326662313666/Mask_group19.jpg' },
  ];

  const FORMATS = [
    { title: 'Корпоративные мероприятия', text: 'Праздники для команды любого размера — от офисного фуршета до выезда на природу.', list: ['Спортивные мероприятия', 'Тимбилдинги', 'Фуршет на свежем воздухе', 'Кулинарные шоу', 'Выездной бар'], img: 'tild6635-3038-4132-a232-613537626661/IMG_8910.jpg' },
    { title: 'Барбекю и полевая кухня', text: 'Готовим на открытом огне и в фирменном техасском смокере прямо на площадке.', list: ['Организация и обслуживание барбекю', 'Праздники на природе', 'Техасский смокер BigBoss BBQ', 'Пикник / OpenAir'], img: 'tild3666-3665-4935-b866-656264326232/IMG_7511.jpg' },
    { title: 'Кофе-брейк', text: 'Лёгкое и аккуратное обслуживание деловых событий, без лишнего шума.', list: ['Деловое мероприятие', 'Встреча с прессой', 'Семинар / форум', 'Встреча гостей', 'Обслуживание выставок и ярмарок'], img: 'tild6265-6434-4637-b734-636162373536/IMG_8892.jpg' },
    { title: 'Фуршет', text: 'Красивая подача и продуманное меню под формат и время вашего события.', list: ['Деловое мероприятие', 'Welcome drink', 'Детский кейтеринг', '23 февраля / 8 марта', 'День рождения в офисе', 'Фуршет на свадьбу'], img: 'tild6636-3562-4463-b934-303436386561/IMG_3467.jpg' },
    { title: 'Выездной банкет', text: 'Полноценный ресторан на вашей площадке: кухня, сервировка, официанты.', list: ['Новогодний банкет', 'Свадебный банкет', 'День рождения / юбилей', 'Выпускные вечера'], img: 'tild3931-3061-4963-a463-646236333035/___8.jpg' },
  ];

  const CASES = [
    { title: 'Фестиваль «Хлеб — ты мир»', meta: '400 гостей', text: 'Доставка всего оборудования и мебели, питание в нескольких форматах.', cover: 'tild3535-3735-4162-a437-346431386335/IMG_7565.jpg',
      photos: ['tild3436-6436-4361-b233-643466653531/photo_2021-09-30_11-.jpg', 'tild3535-3735-4162-a437-346431386335/IMG_7565.jpg', 'tild3666-3665-4935-b866-656264326232/IMG_7511.jpg', 'tild3063-3631-4638-b030-366532316231/IMG_7725.jpg', 'tild3831-6338-4934-a665-323830343962/IMG_7729.jpg', 'tild3164-3463-4336-b562-653961323066/IMG_7737.jpg'] },
    { title: 'Юбилей в загородном доме', meta: '30 гостей', text: 'Банкет с основными блюдами из смокера BigBoss BBQ, сервировка и декор.', cover: 'tild6563-3834-4333-b933-323337306333/IMG_3292.jpg',
      photos: ['tild6663-3834-4839-b662-333537623037/IMG_3405_cr.jpg', 'tild3931-3865-4465-b631-313837346239/IMG_3268.jpg', 'tild6563-3834-4333-b933-323337306333/IMG_3292.jpg', 'tild6636-3562-4463-b934-303436386561/IMG_3467.jpg', 'tild3030-3934-4439-b333-366665353238/IMG_3632.jpg', 'tild3066-3132-4932-b737-663736313665/IMG_3704.jpg', 'tild6236-3333-4838-b761-346230336464/IMG_3855.jpg', 'tild6333-6364-4765-b831-363063343039/IMG_3896.jpg', 'tild3030-3663-4539-b630-346433336264/IMG_3221.jpg'] },
    { title: 'День рождения компании OXY', meta: '70 гостей', text: 'Фуршет с использованием фирменных цветов заказчика.', cover: 'tild3039-6362-4765-a139-623432613235/IMG_8914.jpg',
      photos: ['tild6265-6434-4637-b734-636162373536/IMG_8892.jpg', 'tild6635-3038-4132-a232-613537626661/IMG_8910.jpg', 'tild3039-6362-4765-a139-623432613235/IMG_8914.jpg', 'tild6435-6339-4564-b136-663261353533/IMG_8918.jpg', 'tild3762-6336-4632-b165-623061366231/IMG_8925.jpg', 'tild3934-3033-4639-b439-383665363666/IMG_8872.jpg'] },
  ];

  const CLIENTS = ['tild3865-3535-4165-a539-393737303064/87897987987987987987.jpg', 'tild3063-6338-4939-b732-613032323532/08-2025.jpg', 'tild3861-3039-4633-b965-623433613764/42334.jpg', 'tild3665-3935-4632-a638-666334616262/0100024.jpg', 'tild3961-3634-4533-b138-643834386339/010001.jpg', 'tild6163-6334-4636-b766-306262343138/__page-00w01_1.jpg', 'tild6134-3739-4138-b039-376435396535/__page-0001.jpg', 'tild3937-3133-4466-b435-356438626339/__page-0001.jpg', 'tild3864-6563-4565-b562-316237663164/_20230623_page-0001.jpg', 'tild6233-3738-4535-b263-386231653535/blago.jpg', 'tild3232-3431-4333-b235-393835626631/988978876.jpg', 'tild3161-3564-4337-b866-633237363466/87897987987987987987.jpg'];
  const PARTNERS = ['tild3966-3064-4338-a166-353638393938/001.jpg', 'tild6161-6638-4263-a131-313833333536/002.jpg', 'tild3765-3862-4430-b530-643864363236/003.jpg', 'tild3466-3437-4166-b066-623463313735/004.jpg', 'tild6333-6465-4339-b539-663530336630/005.jpg', 'tild3337-3236-4063-b132-323233656566/001.jpg', 'tild6135-3361-4532-b234-373832623266/006.jpg'];

  const QUIZ = [
    { q: 'Какой формат мероприятия вы планируете?', img: true, opts: [
      ['В помещении', 'tild6635-3038-4132-a232-613537626661/IMG_8910.jpg'],
      ['На открытом воздухе', 'tild3931-3061-4963-a463-646236333035/___8.jpg'],
      ['Кофе-брейк', 'tild6265-6434-4637-b734-636162373536/IMG_8892.jpg'],
      ['Фуршет', 'tild3630-3864-4364-b433-376238636463/Mask_group11.jpg']] },
    { q: 'Когда планируется мероприятие?', opts: ['На этой неделе', 'Через 2 недели', 'Через месяц', 'Более чем через 2 месяца'] },
    { q: 'Сколько будет гостей?', opts: ['До 10', 'До 20', 'До 30', 'До 100', 'Свыше 100', 'Ещё не определились'] },
    { q: 'Какая продолжительность мероприятия?', opts: ['До 1 часа', 'До 2 часов', 'До 6 часов', 'Свыше 6 часов'] },
    { q: 'Какой средний чек на гостя?', opts: ['До 500 ₽', 'До 1000 ₽', 'До 2000 ₽', 'До 3000 ₽', 'Более 3000 ₽', 'Нужна консультация'] },
  ];

  /* ---------- storage (safe) ---------- */
  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  /* ---------- toast ---------- */
  const toastEl = $('[data-toast]');
  let toastT;
  const toast = (msg) => {
    toastEl.innerHTML = icon('check') + msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove('is-on'), 2600);
  };

  /* ---------- header ---------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- overlay layers ---------- */
  const overlay = $('[data-overlay]');
  let openLayer = null;
  const openL = (el) => {
    closeL();
    el.classList.add('is-open'); el.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-on'); document.body.classList.add('lock');
    openLayer = el;
  };
  const closeL = () => {
    if (!openLayer) return;
    openLayer.classList.remove('is-open'); openLayer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-on'); document.body.classList.remove('lock');
    openLayer = null;
  };
  overlay.addEventListener('click', closeL);
  $$('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m || e.target.classList.contains('gallery')) closeL(); }));
  document.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) closeL();
    const om = e.target.closest('[data-open-modal]');
    if (om) { closeMenu(); openL($('#modal-' + om.dataset.openModal)); }
    if (e.target.closest('[data-open-cart]')) { closeMenu(); renderCart(); openL($('#cart')); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeL(); closeMenu(); }
    if (openLayer?.id === 'modal-gallery') { if (e.key === 'ArrowRight') galGo(1); if (e.key === 'ArrowLeft') galGo(-1); }
  });

  /* ---------- mobile menu ---------- */
  const burger = $('[data-burger]'), mmenu = $('#mmenu');
  const closeMenu = () => { mmenu.classList.remove('is-open'); burger.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); if (!openLayer) document.body.classList.remove('lock'); };
  burger.addEventListener('click', () => {
    const o = !mmenu.classList.contains('is-open');
    mmenu.classList.toggle('is-open', o); burger.classList.toggle('is-open', o);
    burger.setAttribute('aria-expanded', o); document.body.classList.toggle('lock', o);
  });
  $$('a', mmenu).forEach(a => a.addEventListener('click', closeMenu));

  /* ---------- services ---------- */
  const svcWrap = $('[data-services]');
  svcWrap.innerHTML = SERVICES.map(s => `
    <article class="svc reveal" data-id="${s.id}">
      <div class="svc__img"><img src="${CDN + s.img}" alt="${s.title}" loading="lazy">${s.tag ? `<span class="svc__tag">${s.tag}</span>` : ''}</div>
      <div class="svc__body">
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <div class="svc__foot">
          <span class="svc__price">Стоимость<br><b>по запросу</b></span>
          <button class="add-btn" type="button" data-add="${s.id}">${icon('plus')}<span>В заявку</span></button>
        </div>
      </div>
    </article>`).join('');

  // mobile dots
  const dots = $('[data-svc-dots]');
  dots.innerHTML = SERVICES.map((_, i) => `<span class="${i ? '' : 'on'}"></span>`).join('');
  svcWrap.addEventListener('scroll', () => {
    const w = svcWrap.firstElementChild.offsetWidth + 14;
    const i = Math.round(svcWrap.scrollLeft / w);
    $$('span', dots).forEach((d, k) => d.classList.toggle('on', k === i));
  }, { passive: true });

  /* ---------- cart ---------- */
  let cart = store.get('mf-cart', []);
  const countEl = $('[data-cart-count]'), cartBtn = $('.cart-btn');
  const syncCart = () => {
    store.set('mf-cart', cart);
    countEl.textContent = cart.length;
    countEl.classList.toggle('has', cart.length > 0);
    $$('[data-add]').forEach(b => {
      const on = cart.includes(b.dataset.add);
      b.classList.toggle('is-added', on);
      b.innerHTML = on ? icon('check') + '<span>В заявке</span>' : icon('plus') + '<span>В заявку</span>';
    });
  };
  const renderCart = () => {
    const list = $('[data-cart-list]'), foot = $('[data-cart-foot]');
    if (!cart.length) {
      list.innerHTML = `<div class="cart-empty">${icon('bag')}<b>Заявка пока пуста</b><p>Добавьте услуги, которые вас интересуют, — мы рассчитаем стоимость за 24 часа.</p><a href="#services" class="btn btn--primary btn--sm" data-close>Выбрать услуги</a></div>`;
      foot.style.display = 'none'; return;
    }
    foot.style.display = '';
    list.innerHTML = cart.map(id => {
      const s = SERVICES.find(x => x.id === id);
      return `<div class="ci"><img src="${CDN + s.img}" alt=""><div><b>${s.title}</b><small>Стоимость по запросу</small></div><button type="button" data-remove="${id}" aria-label="Удалить">${icon('close')}</button></div>`;
    }).join('');
  };
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) {
      const id = add.dataset.add;
      if (cart.includes(id)) { cart = cart.filter(x => x !== id); toast('Услуга убрана из заявки'); }
      else { cart.push(id); toast('Добавлено в заявку'); cartBtn.classList.remove('bump'); void cartBtn.offsetWidth; cartBtn.classList.add('bump'); }
      syncCart();
    }
    const rm = e.target.closest('[data-remove]');
    if (rm) { cart = cart.filter(x => x !== rm.dataset.remove); syncCart(); renderCart(); }
  });
  syncCart();

  /* ---------- formats tabs ---------- */
  const panels = $('[data-panels]'), tabs = $$('[data-tabs] button');
  panels.innerHTML = FORMATS.map((f, i) => `
    <div class="panel ${i ? '' : 'is-active'}" role="tabpanel">
      <div class="panel__text">
        <h3>${f.title}</h3><p>${f.text}</p>
        <ul class="panel__list">${f.list.map(l => `<li>${l}</li>`).join('')}</ul>
        <button class="btn btn--primary" type="button" data-open-modal="request">Обсудить формат ${icon('arrow')}</button>
      </div>
      <div class="panel__img"><img src="${CDN + f.img}" alt="${f.title}" loading="lazy"></div>
    </div>`).join('');
  const setTab = (i) => {
    tabs.forEach((t, k) => { t.classList.toggle('is-active', k === i); t.setAttribute('aria-selected', k === i); });
    $$('.panel', panels).forEach((p, k) => p.classList.toggle('is-active', k === i));
    tabs[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  };
  tabs.forEach((t, i) => t.addEventListener('click', () => setTab(i)));
  $$('[data-tab]').forEach(a => a.addEventListener('click', () => setTimeout(() => setTab(+a.dataset.tab), 50)));

  /* ---------- quiz ---------- */
  const qBody = $('[data-quiz-body]'), qBar = $('[data-quiz-bar]'), qLabel = $('[data-quiz-label]');
  const answers = [];
  let step = 0;
  const renderQuiz = () => {
    const total = QUIZ.length;
    if (step < total) {
      const s = QUIZ[step];
      qBar.style.width = ((step + 1) / (total + 1) * 100) + '%';
      qLabel.textContent = `Вопрос ${step + 1} из ${total}`;
      qBody.innerHTML = `<div class="q-step">
        <h3>${s.q}</h3>
        <div class="q-opts ${s.img ? 'q-opts--img' : ''}">
          ${s.opts.map(o => {
            const label = Array.isArray(o) ? o[0] : o;
            const img = Array.isArray(o) ? `<img src="${CDN + o[1]}" alt="" loading="lazy">` : '';
            return `<label class="q-opt">${img}<input type="radio" name="q${step}" value="${label}" ${answers[step] === label ? 'checked' : ''}>${s.img ? `<span class="lbl"><span class="dot"></span>${label}</span>` : `<span class="dot"></span>${label}`}</label>`;
          }).join('')}
        </div>
        <div class="q-nav">
          <button class="q-back" type="button" data-q="-1" ${step ? '' : 'disabled'}>← Назад</button>
          <button class="btn btn--primary" type="button" data-q="1" ${answers[step] ? '' : 'disabled'}>Далее ${icon('arrow')}</button>
        </div></div>`;
    } else if (step === total) {
      qBar.style.width = '100%';
      qLabel.textContent = 'Последний шаг';
      qBody.innerHTML = `<div class="q-step">
        <h3>Отлично! Куда отправить расчёт стоимости и скидку?</h3>
        <div class="q-summary">${answers.map(a => `<span>${a}</span>`).join('')}</div>
        <form class="q-contact" data-form data-quiz-form novalidate>
          <label class="field field--light"><input type="text" name="name" placeholder="Ваше имя" required></label>
          <label class="field field--light"><input type="tel" name="phone" placeholder="Телефон" required data-phone></label>
          <button class="btn btn--primary btn--block" type="submit">Узнать стоимость ${icon('arrow')}</button>
        </form>
        <div class="q-nav"><button class="q-back" type="button" data-q="-1">← Назад</button></div></div>`;
      bindPhones(qBody);
    }
  };
  qBody.addEventListener('change', e => {
    if (e.target.type === 'radio') {
      answers[step] = e.target.value;
      $('[data-q="1"]', qBody).disabled = false;
      setTimeout(() => { if (step < QUIZ.length) { step++; renderQuiz(); } }, 380);
    }
  });
  qBody.addEventListener('click', e => {
    const b = e.target.closest('[data-q]'); if (!b) return;
    step = Math.max(0, Math.min(QUIZ.length, step + +b.dataset.q)); renderQuiz();
  });
  renderQuiz();

  /* ---------- cases & gallery ---------- */
  $('[data-cases]').innerHTML = CASES.map((c, i) => `
    <button class="case reveal" type="button" data-case="${i}">
      <div class="case__img"><img src="${CDN + c.cover}" alt="${c.title}" loading="lazy"><span class="case__count">${c.photos.length} фото</span></div>
      <p class="case__meta">${c.meta}</p>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </button>`).join('');
  let gal = { c: 0, i: 0 };
  const galImg = $('[data-gal-img]'), galCap = $('[data-gal-cap]');
  const galShow = () => {
    const c = CASES[gal.c];
    galImg.src = CDN + c.photos[gal.i];
    galCap.textContent = `${c.title} · ${gal.i + 1} / ${c.photos.length}`;
  };
  const galGo = (d) => { const n = CASES[gal.c].photos.length; gal.i = (gal.i + d + n) % n; galShow(); };
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-case]');
    if (c) { gal = { c: +c.dataset.case, i: 0 }; galShow(); openL($('#modal-gallery')); }
    const g = e.target.closest('[data-gal]'); if (g) galGo(+g.dataset.gal);
  });
  let tx = 0;
  galImg.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  galImg.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 40) galGo(d < 0 ? 1 : -1); });

  /* ---------- logos marquee ---------- */
  const fillMarquee = (el, arr) => {
    const imgs = arr.map(p => `<img src="${CDN + p}" alt="" loading="lazy">`).join('');
    el.innerHTML = `<div class="marquee__track">${imgs}${imgs}</div>`;
  };
  fillMarquee($('[data-marquee="clients"]'), CLIENTS);
  fillMarquee($('[data-marquee="partners"]'), PARTNERS);

  /* ---------- phone mask + forms ---------- */
  function maskPhone(e) {
    let d = e.target.value.replace(/\D/g, '');
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    d = d.slice(0, 11);
    let r = '+7';
    if (d.length > 1) r += ' (' + d.slice(1, 4);
    if (d.length >= 4) r += ') ' + d.slice(4, 7);
    if (d.length >= 7) r += '-' + d.slice(7, 9);
    if (d.length >= 9) r += '-' + d.slice(9, 11);
    e.target.value = r;
  }
  function bindPhones(root = document) {
    $$('[data-phone]', root).forEach(i => {
      if (i.dataset.bound) return; i.dataset.bound = 1;
      i.addEventListener('input', maskPhone);
      i.addEventListener('focus', () => { if (!i.value) i.value = '+7 '; });
      i.addEventListener('blur', () => { if (i.value.trim() === '+7') i.value = ''; });
    });
  }
  bindPhones();

  document.addEventListener('submit', e => {
    const f = e.target.closest('[data-form]'); if (!f) return;
    e.preventDefault();
    let ok = true;
    $$('input[required]', f).forEach(i => {
      const bad = i.type === 'tel' ? i.value.replace(/\D/g, '').length < 11 : i.value.trim().length < 2;
      i.closest('.field').classList.toggle('is-error', bad);
      if (bad) ok = false;
    });
    if (!ok) { toast('Проверьте имя и телефон'); toastEl.querySelector('svg').style.color = '#F3A6B2'; return; }
    const btn = $('button[type=submit]', f);
    btn.disabled = true; btn.innerHTML = 'Отправляем…';
    setTimeout(() => {
      const quiz = f.hasAttribute('data-quiz-form');
      const html = `<div class="success"><div class="success__ic">${icon('check')}</div><b>${quiz ? 'Мы готовы с вами связаться!' : 'Спасибо, заявка принята!'}</b><p>${quiz ? 'Менеджер пришлёт расчёт и скидку в ближайшее время.' : 'Менеджер свяжется с вами в ближайшее время.'}</p></div>`;
      if (quiz) { qBody.innerHTML = `<div class="q-done">${html}</div>`; qLabel.textContent = 'Готово'; }
      else if (f.closest('.drawer')) { $('[data-cart-list]').innerHTML = html; $('[data-cart-foot]').style.display = 'none'; cart = []; syncCart(); }
      else { f.outerHTML = html; }
    }, 900);
  });
  document.addEventListener('input', e => { const fl = e.target.closest('.field.is-error'); if (fl) fl.classList.remove('is-error'); });

  /* ---------- counters ---------- */
  const countUp = (el) => {
    const end = +el.dataset.count, dur = 1600, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = v.toLocaleString('ru-RU');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  /* ---------- reveal ---------- */
  const io = new IntersectionObserver((ents) => ents.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 80 + 'ms';
    el.classList.add('is-in');
    $$('[data-count]', el).forEach(countUp);
    io.unobserve(el);
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- fab ---------- */
  const fab = $('[data-fab]');
  $('[data-fab-toggle]').addEventListener('click', () => fab.classList.toggle('is-open'));
  document.addEventListener('click', e => { if (!e.target.closest('[data-fab]')) fab.classList.remove('is-open'); });

  /* ---------- cookie ---------- */
  const cookie = $('[data-cookie]');
  if (!store.get('mf-cookie', false)) setTimeout(() => cookie.classList.add('is-on'), 1800);
  $('[data-cookie-ok]').addEventListener('click', () => { cookie.classList.remove('is-on'); store.set('mf-cookie', true); });
})();
