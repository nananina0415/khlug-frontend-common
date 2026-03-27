# @khlug/common-module

경희대학교 중앙 IT 동아리 쿠러그(KHLUG)의 프론트엔드 공용 컴포넌트 라이브러리입니다.

## Installation

```sh
yarn add @khlug/common-module
```

peerDependencies도 함께 설치해야 합니다.

```sh
yarn add react react-dom @chakra-ui/react @emotion/react @tanstack/react-query axios dayjs lucide-react
```

## Usage

스타일시트를 앱 진입점에서 import합니다.

```ts
import "@khlug/common-module/style";
```

컴포넌트, 훅, 레이아웃 등을 named export로 import합니다.

```ts
import { Button, Callout, CollegeIcon } from "@khlug/common-module";
import { useCurrentUser, useIsManager } from "@khlug/common-module";
import { MainLayout, NavigationBar, SimpleLogoLayout } from "@khlug/common-module";
import { apiClient, UserPublicApi } from "@khlug/common-module";
import { cn, formatDate, Validator } from "@khlug/common-module";
import { system } from "@khlug/common-module";
```

## Exports

| 항목 | 설명 |
|---|---|
| `BaseModal` | Chakra UI 기반 모달 래퍼 |
| `Button` | 공용 버튼 컴포넌트 |
| `Callout` | 정보 강조 박스 |
| `CollegeIcon` | 경희대 단과대 아이콘 |
| `Container` | 페이지 콘텐츠 너비 제한 래퍼 |
| `KhlugIcon` | 쿠러그 로고 아이콘 |
| `PageNavigator` | 페이지네이션 컴포넌트 |
| `RingLoadingIndicator` | 링 형태 로딩 인디케이터 |
| `CenterRingLoadingIndicator` | 화면 중앙 정렬 로딩 인디케이터 |
| `MainLayout` | 네비게이션 바 포함 메인 레이아웃 |
| `NavigationBar` | 상단 네비게이션 바 |
| `MenuItem`, `SubMenuItem` | NavigationBar 메뉴 데이터 타입 (아래 메뉴 가시성 규칙 참고) |
| `SimpleLogoLayout` | 로고만 있는 단순 레이아웃 |
| `useCurrentUser` | 현재 로그인 유저 조회 훅 |
| `useIsManager` | 운영진 여부 확인 훅 |
| `apiClient` | Axios 기반 API 클라이언트 |
| `UserPublicApi` | 공개 유저 API |
| `cn` | 클래스명 조합 유틸리티 |
| `DateFormats`, `formatDate`, `calcDateInterval` | 날짜 유틸리티 |
| `formatCurrency` | 통화 포맷 유틸리티 |
| `extractErrorMessage` | 에러 메시지 추출 유틸리티 |
| `stripHtmlTags` | HTML 태그 제거 유틸리티 |
| `Validator` | 입력값 검증 유틸리티 |
| `PropsOf` | 컴포넌트 props 타입 추출 유틸리티 타입 |
| `system` | Chakra UI 테마 설정 |

## NavigationBar 메뉴 가시성 규칙

`MenuItem`의 플래그에 따라 사용자 유형별로 표시 여부가 결정됩니다.

| 플래그 | 게스트 | 멤버 | 매니저 |
|---|:---:|:---:|:---:|
| 없음 (기본) | O | O | O |
| `requiresMember: true` | ✗ | O | O |
| `requiresManager: true` | ✗ | ✗ | O |
| `forGuest: true` | O | ✗ | ✗ |

`MainLayout`과 `NavigationBar`는 `menuItems` prop으로 항목을 받습니다. 각 프로젝트에서 메뉴 항목을 정의해 전달하세요.

```ts
import { MainLayout, type MenuItem } from "@khlug/common-module";

const menuItems: MenuItem[] = [
  { label: "홈", href: "/", subItems: [] },
  { label: "등록", href: "/submit", subItems: [], requiresMember: true },
  { label: "관리", href: "/manage", subItems: [], requiresManager: true },
  { label: "로그인", href: "/login", subItems: [], forGuest: true },
];

<MainLayout menuItems={menuItems}>...</MainLayout>
```

## Build

```sh
yarn build
```

`dist/`에 ESM(`index.js`), CJS(`index.cjs`), 타입 선언(`index.d.ts`), 스타일(`style.css`)이 생성됩니다.

## 릴리즈

태그는 `dist/`가 변경될 때만 올립니다. 문서나 소스만 변경된 경우 태그 없이 커밋만 합니다.

추후 메인 브랜치에 태깅 시 자동 빌드 및 배포가 동작할 수 있기 때문입니다.

따라서 변경사항을 배포할 때에만 빌드하고 태그를 붙여 푸시합니다.

```sh
yarn build
git add -A
git commit -m "release: vX.Y.Z"
git tag vX.Y.Z
git push && git push origin vX.Y.Z
```

이후 사용하는 프로젝트의 `package.json`에서 태그 번호를 올리면 됩니다.

```json
"@khlug/common-module": "github:nananina0415/khlug-frontend-common#vX.Y.Z"
```

## GitHub Actions 자동화 (향후 적용 예정)

현재는 수동으로 릴리즈하지만, 아래 워크플로를 GitHub Actions로 자동화할 수 있습니다.

### 릴리즈 워크플로

`master` 브랜치에 push할 때 커밋 메시지가 `release: vX.Y.Z` 형식이면 자동으로 빌드 및 태그를 생성합니다.

**트리거 조건**: 최신 커밋 메시지가 `release: v0.1.1` 형식인 경우

**워크플로 순서**:
1. 커밋 메시지에서 버전 추출 (`v0.1.1`)
2. `yarn install` — 의존성 설치
3. `yarn build` — `dist/` 재생성
4. `dist/` 변경사항을 같은 커밋에 포함하여 `master`에 push
5. `vX.Y.Z` 태그 생성 및 push

**트리거 외 push**: 아무 작업도 하지 않음 (빌드/태그 없음)

### PR 검사 워크플로

| 검사 | 작업 |
|---|---|
| 타입 검사 | `tsc --noEmit` |
| 린트 | `yarn lint` |