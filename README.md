# Web Design Effects Lab

GitHub Pages로 배포하는 웹디자인 효과 예제 사이트입니다.

## 포함된 예제

1. 🖱️ Mouse Spotlight / Glow
2. 🪞 Glassmorphism + Inner Light
3. 🎨 Animated Gradient Border
4. ☁️ Multi-layered Soft Shadow

## 추가 기능

- 다크/라이트 테마 토글 (`js/theme-toggle.js`)
- 테마 상태 로컬 저장 (`localStorage: web-design-theme`)

## 파일 구조

```text
web-design/
├── index.html
├── css/
│   ├── base.css
│   ├── spotlight.css
│   ├── glass.css
│   ├── animated-border.css
│   └── soft-shadow.css
├── js/
│   ├── theme-toggle.js
│   ├── spotlight.js
│   ├── glass.js
│   ├── animated-border.js
│   └── soft-shadow.js
└── README.md
```

## 실행

정적 파일 프로젝트이므로 `index.html`을 바로 열거나,

```bash
python -m http.server 8080
```

## 배포

`main` 브랜치 기준 GitHub Pages를 켜면 바로 배포됩니다.
