(() => {
  const button = document.querySelector('.topic-language-toggle');
  if (!button) return;

  const keywordSets = {
    'research-direction1.html': [
      ['Reactor physics', '원자로 물리'], ['Thermal hydraulics', '열수력'],
      ['Coupled simulation', '연계 해석'], ['Multiphysics', '다물리 해석'],
      ['VVUQ', 'VVUQ']
    ],
    'research-direction2.html': [
      ['Particle methods', '입자 기반 해석'], ['SPH', 'SPH'],
      ['Multiphase flow', '다상유동'], ['Free surface', '자유표면'],
      ['Melting & solidification', '용융·응고'], ['GPU computing', 'GPU 병렬계산']
    ],
    'research-direction3.html': [
      ['SMR', 'SMR'], ['Non-LWR', '비경수형 원자로'], ['Core analysis', '노심 해석'],
      ['System analysis', '계통 해석'], ['Multiscale', '다중스케일'],
      ['Safety assessment', '안전성 평가']
    ],
    'research-direction4.html': [
      ['Physics-based models', '물리 기반 모델'], ['Reduced-order models', '축약모델'],
      ['Surrogate models', '대리모델'], ['AI', 'AI'], ['State estimation', '상태 추정'],
      ['Near-real-time prediction', '준실시간 예측']
    ]
  };

  const pageName = location.pathname.split('/').pop();
  const keywords = keywordSets[pageName];
  const sideFigure = document.querySelector('.topic-visual-side');
  if (keywords && sideFigure) {
    const side = sideFigure.closest('aside');
    side.classList.add('topic-side');
    const panel = document.createElement('div');
    panel.className = 'keyword-panel';
    const heading = document.createElement('h3');
    heading.textContent = 'Keywords';
    heading.dataset.ko = '핵심어';
    const list = document.createElement('ul');
    list.className = 'keyword-list';
    keywords.forEach(([en, ko]) => {
      const item = document.createElement('li');
      item.textContent = en;
      item.dataset.ko = ko;
      list.appendChild(item);
    });
    panel.append(heading, list);
    side.appendChild(panel);
  }

  const elements = [...document.querySelectorAll('[data-ko]')];
  elements.forEach((element) => { element.dataset.en = element.textContent.trim(); });

  function applyLanguage(language) {
    const isKorean = language === 'ko';
    elements.forEach((element) => { element.textContent = isKorean ? element.dataset.ko : element.dataset.en; });
    button.textContent = isKorean ? 'EN' : '한글';
    button.setAttribute('aria-label', isKorean ? 'Switch research content to English' : '연구 내용을 한국어로 전환');
    document.documentElement.dataset.researchLanguage = language;
  }

  button.addEventListener('click', () => applyLanguage(document.documentElement.dataset.researchLanguage === 'ko' ? 'en' : 'ko'));
  applyLanguage('en');
})();
