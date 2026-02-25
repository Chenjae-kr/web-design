# Design Language Playground

디자인 언어(Glassmorphism, Claymorphism, Dark Mode)를 **실제 컴포넌트에 입혀서 체감**하는 학습형 GitHub Pages 사이트입니다.

## 목적

"이 디자인이 어떤 느낌인지"를 빠르게 이해할 수 있도록,
각 스타일을 같은 UI 컴포넌트 세트로 비교합니다.

## 페이지 구성

1. 스타일 A: **Glassmorphism**
2. 스타일 B: **Claymorphism**
3. 스타일 C: **Dark Mode Language**
4. **비교표** (언제 쓰는지/리스크 포함)
5. **미니 용어 사전** (blur, elevation, contrast, saturation, inner light)

각 스타일 섹션에는 다음 컴포넌트가 공통으로 포함됩니다.

- Button
- Panel/Card
- Badge/Chip
- Table
- Input

## 인터랙션

- 다크/라이트 테마 토글
- 스타일 파라미터 학습용 슬라이더
  - Glass Blur
  - Clay Softness
  - Dark Contrast
- 섹션별 코드 복사 버튼

## 파일 구조

```text
web-design/
├── index.html
├── css/
│   ├── base.css
│   ├── glass.css
│   ├── clay.css
│   └── dark-language.css
├── js/
│   ├── theme-toggle.js
│   └── controls.js
└── README.md
```

## 실행

```bash
python -m http.server 8080
```

## 배포

GitHub Pages에서 `main` 브랜치 `/ (root)`를 선택하면 바로 배포됩니다.
