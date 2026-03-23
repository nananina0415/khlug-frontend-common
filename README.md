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
| `MenuItem`, `SubMenuItem` | NavigationBar 메뉴 데이터 타입 |
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

## Build

```sh
yarn build
```

`dist/`에 ESM(`index.js`), CJS(`index.cjs`), 타입 선언(`index.d.ts`), 스타일(`style.css`)이 생성됩니다.