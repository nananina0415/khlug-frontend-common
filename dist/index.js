import { jsx as r, jsxs as c, Fragment as C } from "react/jsx-runtime";
import { Dialog as d, Portal as I, Button as _, Alert as g, Flex as w, IconButton as h, defineRecipe as N, defineConfig as k, createSystem as D, defaultConfig as x } from "@chakra-ui/react";
import { GraduationCap as L, Coffee as A, Hospital as f, PieChart as S, Plane as R, FlaskConical as E, Music as T, Pill as Y, Sprout as B, Scale as O, Brush as U, Book as F, VenetianMask as G, Building2 as H, Dumbbell as $, Palette as j, Globe as V, Globe2 as z, Dna as q, Microscope as K, Monitor as P, Satellite as W, Cog as Q, CircleHelp as X, ChevronLeft as Z, ChevronRight as J, Menu as ee } from "lucide-react";
import { useState as ne } from "react";
import { useQuery as te } from "@tanstack/react-query";
import re, { isAxiosError as ae } from "axios";
import b from "dayjs";
function Je({ isOpen: e, onRequestClose: n, children: t }) {
  return /* @__PURE__ */ r(
    d.Root,
    {
      open: e,
      onOpenChange: (s) => {
        !s.open && n && n();
      },
      children: /* @__PURE__ */ c(I, { children: [
        /* @__PURE__ */ r(d.Backdrop, {}),
        /* @__PURE__ */ r(d.Positioner, { children: /* @__PURE__ */ r(
          d.Content,
          {
            p: "28px",
            maxW: "400px",
            boxShadow: "0px 0px 8px #00000018",
            borderRadius: "8px",
            children: t
          }
        ) })
      ] })
    }
  );
}
function en({
  variant: e = "primary",
  disabled: n,
  ...t
}) {
  return /* @__PURE__ */ r(_, { variant: e, disabled: n, ...t });
}
function nn({ type: e = "info", children: n }) {
  return /* @__PURE__ */ c(g.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ r(g.Indicator, {}),
    /* @__PURE__ */ r(g.Description, { flex: 1, children: n })
  ] });
}
const oe = {
  공과대학: Q,
  전자정보대학: W,
  소프트웨어융합대학: P,
  응용과학대학: K,
  생명과학대학: q,
  국제대학: z,
  외국어대학: V,
  "예술·디자인대학": j,
  체육대학: $,
  간호과학대학: f,
  경영대학: H,
  무용학부: G,
  문과대학: F,
  미술대학: U,
  법과대학: O,
  생활과학대학: B,
  약학대학: Y,
  음악대학: T,
  의과대학: f,
  이과대학: E,
  자율전공학과: R,
  정경대학: S,
  치과대학: f,
  한의과대학: f,
  호텔관광대학: A,
  대학원: L
}, se = X;
function tn({ college: e, ...n }) {
  const t = e.split(" ")[0], s = oe[t] ?? se;
  return /* @__PURE__ */ r(s, { ...n });
}
function ie(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var v = { exports: {} };
var p;
function le() {
  return p || (p = 1, (function(e) {
    (function() {
      var n = {}.hasOwnProperty;
      function t() {
        for (var o = "", a = 0; a < arguments.length; a++) {
          var u = arguments[a];
          u && (o = l(o, s(u)));
        }
        return o;
      }
      function s(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return t.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var a = "";
        for (var u in o)
          n.call(o, u) && o[u] && (a = l(a, u));
        return a;
      }
      function l(o, a) {
        return a ? o ? o + " " + a : o + a : o;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  })(v)), v.exports;
}
var ce = le();
const ue = /* @__PURE__ */ ie(ce), M = ue;
function rn({ children: e, className: n }) {
  return /* @__PURE__ */ r("div", { className: M("container", n), children: e });
}
function an() {
  return /* @__PURE__ */ r("i", { className: "khlug-icon" });
}
const m = 7;
function de(e, n, t) {
  const s = Math.ceil(t / n), l = Math.floor(m / 2), o = [];
  if (s === 0)
    return [1];
  if (s <= m)
    return Array.from({ length: s }, (a, u) => u + 1);
  if (e <= l)
    for (let a = 1; a <= m; a++)
      o.push(a);
  else if (e > s - l)
    for (let a = s - m + 1; a <= s; a++)
      o.push(a);
  else
    for (let a = e - l; a <= e + l; a++)
      o.push(a);
  return o;
}
function on({
  currentPage: e,
  countPerPage: n,
  totalCount: t,
  onPageChange: s
}) {
  const l = Math.ceil(t / n), o = de(e, n, t);
  return /* @__PURE__ */ c(w, { justify: "center", align: "center", gap: 2, children: [
    /* @__PURE__ */ r(
      h,
      {
        "aria-label": "이전 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === 1,
        onClick: () => s(Math.max(1, e - 1)),
        children: /* @__PURE__ */ r(Z, { size: 14 })
      }
    ),
    o.map((a) => /* @__PURE__ */ r(
      _,
      {
        size: "sm",
        variant: a === e ? "solid" : "ghost",
        colorScheme: a === e ? "blue" : "gray",
        onClick: () => s(a),
        children: a
      },
      a
    )),
    /* @__PURE__ */ r(
      h,
      {
        "aria-label": "다음 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === l,
        onClick: () => s(Math.min(l, e + 1)),
        children: /* @__PURE__ */ r(J, { size: 14 })
      }
    )
  ] });
}
function fe() {
  return /* @__PURE__ */ r("div", { className: "ring-loading-indicator", children: /* @__PURE__ */ c("div", { className: "lds-dual-ring", children: [
    /* @__PURE__ */ r("div", {}),
    /* @__PURE__ */ r("div", {})
  ] }) });
}
function sn({ className: e }) {
  return /* @__PURE__ */ r("div", { className: M("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ r(fe, {}) });
}
const me = import.meta.env.VITE_API_V2_BASE_URL, ge = re.create({
  baseURL: me,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: !0
}), ve = async () => (await ge.get("/users/@me")).data, he = {
  getCurrentUser: ve
}, be = () => te({
  queryKey: ["current-user"],
  queryFn: he.getCurrentUser,
  staleTime: 30 * 1e3,
  // 30초
  gcTime: 300 * 1e3,
  // 5분
  retry: 0
}), pe = () => {
  const { status: e, data: n } = be();
  return {
    isManager: n?.manager ?? !1,
    isLoading: e === "pending",
    isError: e === "error"
  };
}, y = [], _e = "_navigationBar_74agw_3", Ne = "_navContainer_74agw_23", Me = "_logo_74agw_41", ye = "_desktopMenu_74agw_51", Ce = "_navItem_74agw_63", Ie = "_navLink_74agw_73", we = "_active_74agw_99", ke = "_subNav_74agw_107", De = "_mobileActions_74agw_453", xe = "_mobileMenu_74agw_467", Le = "_mobileNavItem_74agw_495", Ae = "_mobileNavLink_74agw_511", Se = "_mobileSubNav_74agw_537", i = {
  navigationBar: _e,
  navContainer: Ne,
  logo: Me,
  desktopMenu: ye,
  navItem: Ce,
  navLink: Ie,
  active: we,
  subNav: ke,
  mobileActions: De,
  mobileMenu: xe,
  mobileNavItem: Le,
  mobileNavLink: Ae,
  mobileSubNav: Se
};
function Re({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ r("hr", {}) : /* @__PURE__ */ r("a", { href: e.href, children: e.label });
}
function Ee({ item: e }) {
  const n = e.requiresManager;
  return /* @__PURE__ */ c("div", { className: i.navItem, children: [
    /* @__PURE__ */ r(
      "a",
      {
        href: e.href,
        className: `${i.navLink} ${n ? i.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ r("div", { className: i.subNav, children: e.subItems.map((t, s) => /* @__PURE__ */ r(Re, { item: t }, t.href || s)) })
  ] });
}
function Te({ isManager: e }) {
  const n = y.filter(
    (t) => !t.requiresManager || e
  );
  return /* @__PURE__ */ r(C, { children: n.map((t) => /* @__PURE__ */ r(Ee, { item: t }, t.label)) });
}
function Ye({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ r("hr", {}) : /* @__PURE__ */ r("a", { href: e.href, children: e.label });
}
function Be({ item: e }) {
  const n = e.requiresManager;
  return /* @__PURE__ */ c("div", { className: i.mobileNavItem, children: [
    /* @__PURE__ */ r(
      "a",
      {
        href: e.href,
        className: `${i.mobileNavLink} ${n ? i.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ r("div", { className: i.mobileSubNav, children: e.subItems.map((t, s) => /* @__PURE__ */ r(Ye, { item: t }, t.href || s)) })
  ] });
}
function Oe({ isManager: e }) {
  const n = y.filter(
    (t) => !t.requiresManager || e
  );
  return /* @__PURE__ */ r("div", { className: i.mobileMenu, children: n.map((t) => /* @__PURE__ */ r(Be, { item: t }, t.label)) });
}
const Ue = "https://cdn.khlug.org/images/khlug-long-logo.png", Fe = "https://app.khlug.org";
function Ge({ notificationSlot: e, logoUrl: n = Ue, logoHref: t = Fe }) {
  const [s, l] = ne(!1), { isManager: o } = pe(), a = () => {
    l(!s);
  };
  return /* @__PURE__ */ c("nav", { className: i.navigationBar, children: [
    /* @__PURE__ */ c("div", { className: i.navContainer, children: [
      /* @__PURE__ */ r("a", { href: t, children: /* @__PURE__ */ r(
        "img",
        {
          src: n,
          alt: "KHLUG Logo",
          className: i.logo
        }
      ) }),
      /* @__PURE__ */ c("div", { className: i.desktopMenu, children: [
        /* @__PURE__ */ r(Te, { isManager: o }),
        e
      ] }),
      /* @__PURE__ */ c("div", { className: i.mobileActions, children: [
        e,
        /* @__PURE__ */ r(
          h,
          {
            "aria-label": "메뉴",
            onClick: a,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ r(ee, { size: 24 })
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ r(Oe, { isManager: o })
  ] });
}
function ln({ children: e, logoUrl: n, logoHref: t }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ r(Ge, { logoUrl: n, logoHref: t }),
    /* @__PURE__ */ r("div", { className: "main-layout__content", children: e })
  ] });
}
const He = {
  "logo-header": "_logo-header_v24wn_1"
};
function cn({ children: e }) {
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ r("header", { className: He["logo-header"], children: /* @__PURE__ */ r(
      "img",
      {
        src: "https://cdn.khlug.org/images/khlug-long-logo.png",
        alt: "Logo"
      }
    ) }),
    e
  ] });
}
function un(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const $e = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function dn(e, n = $e.DATETIME) {
  return b(e).format(n);
}
function fn(e, n = /* @__PURE__ */ new Date()) {
  const t = b(e).diff(b(n), "day");
  if (t === 0)
    return "오늘";
  if (t > 0)
    switch (t) {
      case 1:
        return "내일";
      case 2:
        return "모레";
      case 3:
        return "글피";
      default:
        return `${t}일 후`;
    }
  else
    switch (t) {
      case -1:
        return "어제";
      case -2:
        return "그제";
      case -3:
        return "그끄제";
      default:
        return `${-t}일 전`;
    }
}
function mn(e) {
  return ae(e) ? e.response?.data?.message ?? e.message : e.message;
}
const gn = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
class vn {
  static validateUserName(n) {
    return n.length === 0 || n.length > 50 ? {
      result: !1,
      message: "이름은 1자 이상 50자 이하로 입력해주세요."
    } : /^[가-힣a-zA-Z ]+$/.test(n) ? { result: !0 } : {
      result: !1,
      message: "이름은 한글, 영문, 공백만 입력 가능합니다."
    };
  }
  static validateGrade(n) {
    return Number.isNaN(n) ? {
      result: !1,
      message: "학년은 숫자로 입력해주세요."
    } : n < 1 || n > 10 ? {
      result: !1,
      message: "학년은 1 이상 4 이하로 입력해주세요."
    } : { result: !0 };
  }
}
const je = N({
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
}), Ve = N({
  base: {
    color: "brand.500",
    textDecoration: "underline",
    _hover: {
      color: "brand.600"
    }
  }
}), ze = k({
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
      button: je,
      link: Ve
    }
  }
}), hn = D(x, ze);
export {
  Je as BaseModal,
  en as Button,
  nn as Callout,
  sn as CenterRingLoadingIndicator,
  tn as CollegeIcon,
  rn as Container,
  $e as DateFormats,
  an as KhlugIcon,
  ln as MainLayout,
  Ge as NavigationBar,
  on as PageNavigator,
  fe as RingLoadingIndicator,
  cn as SimpleLogoLayout,
  he as UserPublicApi,
  vn as Validator,
  ge as apiClient,
  fn as calcDateInterval,
  M as cn,
  mn as extractErrorMessage,
  un as formatCurrency,
  dn as formatDate,
  gn as stripHtmlTags,
  hn as system,
  be as useCurrentUser,
  pe as useIsManager
};
