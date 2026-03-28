import { jsx as t, jsxs as c, Fragment as I } from "react/jsx-runtime";
import { Dialog as d, Portal as L, Button as y, Alert as b, Flex as A, IconButton as h, Strong as S, defineRecipe as C, defineConfig as w, createSystem as z, defaultConfig as R } from "@chakra-ui/react";
import { GraduationCap as E, Coffee as T, Hospital as f, PieChart as Y, Plane as G, FlaskConical as B, Music as O, Pill as U, Sprout as F, Scale as H, Brush as j, Book as $, VenetianMask as q, Building2 as K, Dumbbell as V, Palette as P, Globe as W, Globe2 as Q, Dna as X, Microscope as Z, Monitor as J, Satellite as ee, Cog as re, CircleHelp as ne, ChevronLeft as te, ChevronRight as ae, Menu as oe } from "lucide-react";
import { useState as se } from "react";
import { useQuery as ie } from "@tanstack/react-query";
import le, { isAxiosError as ce } from "axios";
import v from "dayjs";
function tr({ isOpen: e, onRequestClose: r, children: a }) {
  return /* @__PURE__ */ t(
    d.Root,
    {
      open: e,
      onOpenChange: (o) => {
        !o.open && r && r();
      },
      children: /* @__PURE__ */ c(L, { children: [
        /* @__PURE__ */ t(d.Backdrop, {}),
        /* @__PURE__ */ t(d.Positioner, { children: /* @__PURE__ */ t(
          d.Content,
          {
            p: "28px",
            maxW: "400px",
            boxShadow: "0px 0px 8px #00000018",
            borderRadius: "8px",
            children: a
          }
        ) })
      ] })
    }
  );
}
function ar({
  variant: e = "primary",
  disabled: r,
  ...a
}) {
  return /* @__PURE__ */ t(y, { variant: e, disabled: r, ...a });
}
function or({ type: e = "info", children: r }) {
  return /* @__PURE__ */ c(b.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ t(b.Indicator, {}),
    /* @__PURE__ */ t(b.Description, { flex: 1, children: r })
  ] });
}
const ue = {
  공과대학: re,
  전자정보대학: ee,
  소프트웨어융합대학: J,
  응용과학대학: Z,
  생명과학대학: X,
  국제대학: Q,
  외국어대학: W,
  "예술·디자인대학": P,
  체육대학: V,
  간호과학대학: f,
  경영대학: K,
  무용학부: q,
  문과대학: $,
  미술대학: j,
  법과대학: H,
  생활과학대학: F,
  약학대학: U,
  음악대학: O,
  의과대학: f,
  이과대학: B,
  자율전공학과: G,
  정경대학: Y,
  치과대학: f,
  한의과대학: f,
  호텔관광대학: T,
  대학원: E
}, de = ne;
function sr({ college: e, ...r }) {
  const a = e.split(" ")[0], o = ue[a] ?? de;
  return /* @__PURE__ */ t(o, { ...r });
}
function fe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var g = { exports: {} };
var M;
function me() {
  return M || (M = 1, (function(e) {
    (function() {
      var r = {}.hasOwnProperty;
      function a() {
        for (var n = "", s = 0; s < arguments.length; s++) {
          var u = arguments[s];
          u && (n = i(n, o(u)));
        }
        return n;
      }
      function o(n) {
        if (typeof n == "string" || typeof n == "number")
          return n;
        if (typeof n != "object")
          return "";
        if (Array.isArray(n))
          return a.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
          return n.toString();
        var s = "";
        for (var u in n)
          r.call(n, u) && n[u] && (s = i(s, u));
        return s;
      }
      function i(n, s) {
        return s ? n ? n + " " + s : n + s : n;
      }
      e.exports ? (a.default = a, e.exports = a) : window.classNames = a;
    })();
  })(g)), g.exports;
}
var be = me();
const ge = /* @__PURE__ */ fe(be), k = ge;
function ir({ children: e, className: r }) {
  return /* @__PURE__ */ t("div", { className: k("container", r), children: e });
}
function lr() {
  return /* @__PURE__ */ t("i", { className: "khlug-icon" });
}
const m = 7;
function he(e, r, a) {
  const o = Math.ceil(a / r), i = Math.floor(m / 2), n = [];
  if (o === 0)
    return [1];
  if (o <= m)
    return Array.from({ length: o }, (s, u) => u + 1);
  if (e <= i)
    for (let s = 1; s <= m; s++)
      n.push(s);
  else if (e > o - i)
    for (let s = o - m + 1; s <= o; s++)
      n.push(s);
  else
    for (let s = e - i; s <= e + i; s++)
      n.push(s);
  return n;
}
function cr({
  currentPage: e,
  countPerPage: r,
  totalCount: a,
  onPageChange: o
}) {
  const i = Math.ceil(a / r), n = he(e, r, a);
  return /* @__PURE__ */ c(A, { justify: "center", align: "center", gap: 2, children: [
    /* @__PURE__ */ t(
      h,
      {
        "aria-label": "이전 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === 1,
        onClick: () => o(Math.max(1, e - 1)),
        children: /* @__PURE__ */ t(te, { size: 14 })
      }
    ),
    n.map((s) => /* @__PURE__ */ t(
      y,
      {
        size: "sm",
        variant: s === e ? "solid" : "ghost",
        colorScheme: s === e ? "blue" : "gray",
        onClick: () => o(s),
        children: s
      },
      s
    )),
    /* @__PURE__ */ t(
      h,
      {
        "aria-label": "다음 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === i,
        onClick: () => o(Math.min(i, e + 1)),
        children: /* @__PURE__ */ t(ae, { size: 14 })
      }
    )
  ] });
}
function ve() {
  return /* @__PURE__ */ t("div", { className: "ring-loading-indicator", children: /* @__PURE__ */ c("div", { className: "lds-dual-ring", children: [
    /* @__PURE__ */ t("div", {}),
    /* @__PURE__ */ t("div", {})
  ] }) });
}
function ur({ className: e }) {
  return /* @__PURE__ */ t("div", { className: k("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ t(ve, {}) });
}
const p = le.create({
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: !0
}), pe = async (e) => (await p.get("/users/@me/groups", {
  params: { isActive: e }
})).data, _e = async () => (await p.get("/users/@me")).data, Ne = {
  getCurrentUser: _e,
  getMyGroups: pe
}, D = () => ie({
  queryKey: ["current-user"],
  queryFn: Ne.getCurrentUser,
  staleTime: 30 * 1e3,
  // 30초
  gcTime: 300 * 1e3,
  // 5분
  retry: 0
}), Me = () => {
  const { status: e, data: r } = D();
  return {
    isManager: r?.manager ?? !1,
    isLoading: e === "pending",
    isError: e === "error"
  };
}, ye = "_navigationBar_1bzl6_3", Ce = "_navContainer_1bzl6_23", ke = "_logo_1bzl6_41", De = "_desktopMenu_1bzl6_51", xe = "_navItem_1bzl6_63", Ie = "_navLink_1bzl6_73", Le = "_active_1bzl6_99", Ae = "_subNav_1bzl6_107", Se = "_mobileActions_1bzl6_461", we = "_mobileMenu_1bzl6_475", ze = "_mobileNavItem_1bzl6_503", Re = "_mobileNavLink_1bzl6_519", Ee = "_mobileSubNav_1bzl6_545", l = {
  navigationBar: ye,
  navContainer: Ce,
  logo: ke,
  desktopMenu: De,
  navItem: xe,
  navLink: Ie,
  active: Le,
  subNav: Ae,
  mobileActions: Se,
  mobileMenu: we,
  mobileNavItem: ze,
  mobileNavLink: Re,
  mobileSubNav: Ee
};
function Te({ item: e, isCurrent: r }) {
  return e.isDivider ? /* @__PURE__ */ t("hr", {}) : /* @__PURE__ */ t("a", { href: e.href, className: r ? l.active : "", children: e.label });
}
function Ye({ item: e, current: r }) {
  const a = r !== void 0 ? e.subItems.some((o) => o.href === r) || e.href === r : !1;
  return /* @__PURE__ */ c("div", { className: l.navItem, children: [
    /* @__PURE__ */ t(
      "a",
      {
        href: e.href,
        className: `${l.navLink} ${a ? l.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ t("div", { className: l.subNav, children: e.subItems.map((o, i) => /* @__PURE__ */ t(Te, { item: o, isCurrent: o.href === r }, o.href || i)) })
  ] });
}
function Ge({ menuItems: e, isLoggedIn: r, isManager: a, current: o }) {
  const i = e.filter((n) => n.requiresManager ? a : n.requiresMember ? r : n.forGuest ? !r : !0);
  return /* @__PURE__ */ t(I, { children: i.map((n) => /* @__PURE__ */ t(Ye, { item: n, current: o }, n.label)) });
}
function Be({ item: e, isCurrent: r }) {
  return e.isDivider ? /* @__PURE__ */ t("hr", {}) : /* @__PURE__ */ t("a", { href: e.href, className: r ? l.active : "", children: e.label });
}
function Oe({ item: e, current: r }) {
  return /* @__PURE__ */ c("div", { className: l.mobileNavItem, children: [
    /* @__PURE__ */ t("a", { href: e.href, className: l.mobileNavLink, children: /* @__PURE__ */ t(S, { children: e.label }) }),
    /* @__PURE__ */ t("div", { className: l.mobileSubNav, children: e.subItems.map((a, o) => /* @__PURE__ */ t(Be, { item: a, isCurrent: a.href === r }, a.href || o)) })
  ] });
}
function Ue({ menuItems: e, isLoggedIn: r, isManager: a, current: o }) {
  const i = e.filter((n) => n.requiresManager ? a : n.requiresMember ? r : n.forGuest ? !r : !0);
  return /* @__PURE__ */ t("div", { className: l.mobileMenu, children: i.map((n) => /* @__PURE__ */ t(Oe, { item: n, current: o }, n.label)) });
}
const Fe = "https://cdn.khlug.org/images/khlug-long-logo.png", He = "https://app.khlug.org";
function je({
  notificationSlot: e,
  logoUrl: r = Fe,
  logoHref: a = He,
  menuItems: o = [],
  current: i
}) {
  const [n, s] = se(!1), { data: u } = D(), _ = !!u?.id, { isManager: N } = Me(), x = () => {
    s(!n);
  };
  return /* @__PURE__ */ c("nav", { className: l.navigationBar, children: [
    /* @__PURE__ */ c("div", { className: l.navContainer, children: [
      /* @__PURE__ */ t("a", { href: a, children: /* @__PURE__ */ t(
        "img",
        {
          src: r,
          alt: "KHLUG Logo",
          className: l.logo
        }
      ) }),
      /* @__PURE__ */ c("div", { className: l.desktopMenu, children: [
        /* @__PURE__ */ t(Ge, { menuItems: o, isLoggedIn: _, isManager: N, current: i }),
        e
      ] }),
      /* @__PURE__ */ c("div", { className: l.mobileActions, children: [
        e,
        /* @__PURE__ */ t(
          h,
          {
            "aria-label": "메뉴",
            onClick: x,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ t(oe, { size: 24 })
          }
        )
      ] })
    ] }),
    n && /* @__PURE__ */ t(Ue, { menuItems: o, isLoggedIn: _, isManager: N, current: i })
  ] });
}
function dr({ children: e, logoUrl: r, logoHref: a, menuItems: o, current: i }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ t(je, { logoUrl: r, logoHref: a, menuItems: o, current: i }),
    /* @__PURE__ */ t("div", { className: "main-layout__content", children: e })
  ] });
}
const $e = {
  "logo-header": "_logo-header_v24wn_1"
};
function fr({ children: e }) {
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ t("header", { className: $e["logo-header"], children: /* @__PURE__ */ t(
      "img",
      {
        src: "https://cdn.khlug.org/images/khlug-long-logo.png",
        alt: "Logo"
      }
    ) }),
    e
  ] });
}
const qe = async (e) => (await p.get(
  `/groups/${e}/members`
)).data, mr = {
  getGroupMembers: qe
};
function br(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const Ke = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function gr(e, r = Ke.DATETIME) {
  return v(e).format(r);
}
function hr(e, r = /* @__PURE__ */ new Date()) {
  const a = v(e).diff(v(r), "day");
  if (a === 0)
    return "오늘";
  if (a > 0)
    switch (a) {
      case 1:
        return "내일";
      case 2:
        return "모레";
      case 3:
        return "글피";
      default:
        return `${a}일 후`;
    }
  else
    switch (a) {
      case -1:
        return "어제";
      case -2:
        return "그제";
      case -3:
        return "그끄제";
      default:
        return `${-a}일 전`;
    }
}
function vr(e) {
  return ce(e) ? e.response?.data?.message ?? e.message : e.message;
}
const pr = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
class _r {
  static validateUserName(r) {
    return r.length === 0 || r.length > 50 ? {
      result: !1,
      message: "이름은 1자 이상 50자 이하로 입력해주세요."
    } : /^[가-힣a-zA-Z ]+$/.test(r) ? { result: !0 } : {
      result: !1,
      message: "이름은 한글, 영문, 공백만 입력 가능합니다."
    };
  }
  static validateGrade(r) {
    return Number.isNaN(r) ? {
      result: !1,
      message: "학년은 숫자로 입력해주세요."
    } : r < 1 || r > 10 ? {
      result: !1,
      message: "학년은 1 이상 4 이하로 입력해주세요."
    } : { result: !0 };
  }
}
const Ve = C({
  base: {
    fontWeight: "medium",
    borderRadius: "4px"
  },
  variants: {
    variant: {
      primary: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600"
        },
        _disabled: {
          bg: "gray.300",
          cursor: "not-allowed",
          opacity: 1,
          _hover: {
            bg: "gray.300"
          }
        }
      },
      neutral: {
        bg: "white",
        color: "brand.500",
        border: "1px solid",
        borderColor: "gray.200",
        _hover: {
          bg: "gray.50"
        },
        _disabled: {
          bg: "gray.100",
          cursor: "not-allowed",
          opacity: 1,
          _hover: {
            bg: "gray.100"
          }
        }
      },
      danger: {
        bg: "red.500",
        color: "white",
        _hover: {
          bg: "red.600"
        },
        _disabled: {
          bg: "gray.300",
          cursor: "not-allowed",
          opacity: 1,
          _hover: {
            bg: "gray.300"
          }
        }
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
}), Pe = C({
  base: {
    color: "brand.500",
    textDecoration: "underline",
    _hover: {
      color: "brand.600"
    }
  }
}), We = w({
  globalCss: {
    body: {
      bg: "#fcfcfc",
      fontFamily: '"Pretendard Variable", "Noto Sans KR", "맑은 고딕", "Malgun Gothic", "나눔고딕", "NanumGothic", "돋움", "Dotum", sans-serif'
    }
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f7ff" },
          100: { value: "#b3e5ff" },
          200: { value: "#80d4ff" },
          300: { value: "#4dc2ff" },
          400: { value: "#1ab1ff" },
          500: { value: "#00a0e9" },
          // Main color
          600: { value: "#0077b6" },
          // Hover color
          700: { value: "#005a8c" },
          800: { value: "#003d62" },
          900: { value: "#002038" }
        }
      }
    },
    recipes: {
      button: Ve,
      link: Pe
    }
  }
}), Nr = z(R, We);
export {
  tr as BaseModal,
  ar as Button,
  or as Callout,
  ur as CenterRingLoadingIndicator,
  sr as CollegeIcon,
  ir as Container,
  Ke as DateFormats,
  mr as GroupMemberApi,
  lr as KhlugIcon,
  dr as MainLayout,
  je as NavigationBar,
  cr as PageNavigator,
  ve as RingLoadingIndicator,
  fr as SimpleLogoLayout,
  Ne as UserPublicApi,
  _r as Validator,
  p as apiClient,
  hr as calcDateInterval,
  k as cn,
  vr as extractErrorMessage,
  br as formatCurrency,
  gr as formatDate,
  pr as stripHtmlTags,
  Nr as system,
  D as useCurrentUser,
  Me as useIsManager
};
