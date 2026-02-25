import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages 배포 시 레포지토리 이름으로 변경하세요
  // 예: base: '/my-repo-name/'
  base: './',
  build: {
    outDir: 'dist',
  },
})
