# Design Language Explorer

디자인 언어를 글로만 읽지 않고, **간단한 웹사이트 형태로 직접 체감**하는 GitHub Pages 프로젝트입니다.

## 핵심 컨셉

- 왼쪽 메뉴에서 디자인 언어 선택
- 오른쪽에 해당 스타일이 적용된 미니 웹페이지 표시
- 위에 해당 디자인 언어 설명(키워드/추천 사용처/주의점) 동기화

## 포함된 디자인 언어

1. Glassmorphism
2. Claymorphism
3. Dark Mode Language

## 미니 웹페이지에 포함된 공통 컴포넌트

- Topbar
- Button
- Panel/Card
- Badge
- Table
- Input

같은 구조를 유지하고 스타일만 바꿔서, 차이를 빠르게 이해할 수 있게 설계했습니다.

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
│   └── language-menu.js
└── README.md
```

## 실행

```bash
python -m http.server 8080
```

## 배포

GitHub Pages에서 `main` 브랜치 `/ (root)`를 선택하면 배포됩니다.
