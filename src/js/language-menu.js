(() => {
  const data = {
    glass: {
      title: 'Glassmorphism',
      summary: '투명 레이어와 블러로 깊이를 만들고, 내부 빛으로 유리 질감을 표현합니다.',
      points: [
        '<b>키워드:</b> Frosted, Translucent, Inner Light',
        '<b>추천:</b> 대시보드, 오버레이 패널, 설정 모달',
        '<b>주의:</b> 본문 텍스트 대비 부족 방지'
      ],
      className: 'language-glass'
    },
    clay: {
      title: 'Claymorphism',
      summary: '둥근 형태와 부드러운 그림자로 말랑한 촉감을 주는 감성 중심 스타일입니다.',
      points: [
        '<b>키워드:</b> Soft, Puffy, Tactile',
        '<b>추천:</b> 온보딩, 웰니스, 친근한 브랜드 UI',
        '<b>주의:</b> 모든 요소에 과하면 장난감처럼 보임'
      ],
      className: 'language-clay'
    },
    dark: {
      title: 'Dark Mode Language',
      summary: '명도 대비와 표면 계층으로 시선 집중을 높이고 야간 피로를 줄이는 스타일입니다.',
      points: [
        '<b>키워드:</b> Contrast, Focus, Low-light',
        '<b>추천:</b> 개발툴, 분석 대시보드, 장시간 사용 서비스',
        '<b>주의:</b> 톤 분리 실패 시 전체가 탁해짐'
      ],
      className: 'language-dark'
    }
  };

  const preview = document.getElementById('stylePreview');
  const title = document.getElementById('explainTitle');
  const summary = document.getElementById('explainSummary');
  const points = document.getElementById('explainPoints');

  const apply = (key) => {
    const item = data[key];
    if (!item || !preview) return;

    preview.classList.remove('language-glass', 'language-clay', 'language-dark');
    preview.classList.add(item.className);

    if (title) title.textContent = item.title;
    if (summary) summary.textContent = item.summary;
    if (points) points.innerHTML = item.points.map((x) => `<li>${x}</li>`).join('');
  };

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      apply(btn.dataset.language);
    });
  });

  apply('glass');
})();
