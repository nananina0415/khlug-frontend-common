# CLAUDE.md

## 프로젝트 개요

쿠러그(KHLUG) 프론트엔드 공용 컴포넌트 라이브러리입니다. Vite 라이브러리 모드로 빌드되며, ESM과 CJS 형식으로 배포됩니다.

- **패키지명**: `@khlug/common-module`
- **패키지 매니저**: Yarn 4

## 개발 명령어

- **빌드**: `yarn build` — `dist/`에 ESM, CJS, 타입 선언, CSS 생성
- **린트**: `yarn lint`

## 아키텍처

### 빌드 설정

- Vite 라이브러리 모드 (`build.lib`)
- 엔트리포인트: `src/index.ts`
- 출력: `dist/index.js` (ESM), `dist/index.cjs` (CJS), `dist/index.d.ts` (타입), `dist/style.css`
- `vite-plugin-dts`로 TypeScript 선언 파일 자동 생성
- React, Chakra UI 등 외부 의존성은 `peerDependencies`로 번들에서 제외

### 소스 구조

```
src/
├── api/
│   ├── client/        # Axios 클라이언트 인스턴스
│   └── public/        # 공개 유저 API
├── components/        # 재사용 가능한 UI 컴포넌트
├── hooks/
│   └── user/          # 유저 관련 훅
├── layouts/           # 레이아웃 컴포넌트
│   ├── MainLayout/    # 네비게이션 바 포함 메인 레이아웃
│   ├── NavigationBar/ # 상단 네비게이션 (notificationSlot prop 지원)
│   └── SimpleLogoLayout/ # 로고만 있는 단순 레이아웃
├── util/              # 유틸리티 함수
├── theme.ts           # Chakra UI 테마 설정
├── index.css          # 전역 스타일 (CSS 변수 포함)
└── index.ts           # 패키지 진입점 (named exports)
```

### 브랜드 색상 (CSS 변수)

- `--main-color`: `#00a0e9`
- `--main-color-hover`: `#0077b6`

### TypeScript 설정

- strict 모드, ES2020 타겟, bundler 모듈 해상도
- `noUnusedLocals`, `noUnusedParameters` 활성화
- `declaration: true` (타입 선언 파일 생성)

## 개발 가이드라인

- 컴포넌트 추가 시 `src/index.ts`에 named export 추가
- 외부 패키지 추가 시 `peerDependencies`와 `vite.config.ts`의 `external` 배열 모두 업데이트
- CSS는 `index.css` 또는 컴포넌트 폴더 내 `.css` 파일 사용

## 릴리즈 절차

1. `yarn build` — `dist/` 재생성
2. `git add -A && git commit -m "release: vX.Y.Z"`
3. `git tag vX.Y.Z && git push && git push origin vX.Y.Z`
4. 사용하는 프로젝트의 `package.json`에서 태그 번호 변경 후 `yarn install`