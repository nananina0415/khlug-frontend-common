import { jsx as t, jsxs as c, Fragment as C } from "react/jsx-runtime";
import { Dialog as d, Portal as w, Button as _, Alert as g, Flex as I, IconButton as h, defineRecipe as N, defineConfig as k, createSystem as D, defaultConfig as x } from "@chakra-ui/react";
import { GraduationCap as L, Coffee as A, Hospital as f, PieChart as S, Plane as R, FlaskConical as E, Music as Y, Pill as T, Sprout as B, Scale as O, Brush as U, Book as $, VenetianMask as j, Building2 as F, Dumbbell as G, Palette as H, Globe as z, Globe2 as q, Dna as K, Microscope as V, Monitor as P, Satellite as W, Cog as Q, CircleHelp as X, ChevronLeft as Z, ChevronRight as J, Menu as ee } from "lucide-react";
import { useState as ne } from "react";
import { useQuery as te } from "@tanstack/react-query";
import re, { isAxiosError as ae } from "axios";
import b from "dayjs";
function Ze({ isOpen: e, onRequestClose: n, children: r }) {
  return /* @__PURE__ */ t(
    d.Root,
    {
      open: e,
      onOpenChange: (s) => {
        !s.open && n && n();
      },
      children: /* @__PURE__ */ c(w, { children: [
        /* @__PURE__ */ t(d.Backdrop, {}),
        /* @__PURE__ */ t(d.Positioner, { children: /* @__PURE__ */ t(
          d.Content,
          {
            p: "28px",
            maxW: "400px",
            boxShadow: "0px 0px 8px #00000018",
            borderRadius: "8px",
            children: r
          }
        ) })
      ] })
    }
  );
}
function Je({
  variant: e = "primary",
  disabled: n,
  ...r
}) {
  return /* @__PURE__ */ t(_, { variant: e, disabled: n, ...r });
}
function en({ type: e = "info", children: n }) {
  return /* @__PURE__ */ c(g.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ t(g.Indicator, {}),
    /* @__PURE__ */ t(g.Description, { flex: 1, children: n })
  ] });
}
const oe = {
  공과대학: Q,
  전자정보대학: W,
  소프트웨어융합대학: P,
  응용과학대학: V,
  생명과학대학: K,
  국제대학: q,
  외국어대학: z,
  "예술·디자인대학": H,
  체육대학: G,
  간호과학대학: f,
  경영대학: F,
  무용학부: j,
  문과대학: $,
  미술대학: U,
  법과대학: O,
  생활과학대학: B,
  약학대학: T,
  음악대학: Y,
  의과대학: f,
  이과대학: E,
  자율전공학과: R,
  정경대학: S,
  치과대학: f,
  한의과대학: f,
  호텔관광대학: A,
  대학원: L
}, se = X;
function nn({ college: e, ...n }) {
  const r = e.split(" ")[0], s = oe[r] ?? se;
  return /* @__PURE__ */ t(s, { ...n });
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
      function r() {
        for (var a = "", o = 0; o < arguments.length; o++) {
          var u = arguments[o];
          u && (a = l(a, s(u)));
        }
        return a;
      }
      function s(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var o = "";
        for (var u in a)
          n.call(a, u) && a[u] && (o = l(o, u));
        return o;
      }
      function l(a, o) {
        return o ? a ? a + " " + o : a + o : a;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(v)), v.exports;
}
var ce = le();
const ue = /* @__PURE__ */ ie(ce), M = ue;
function tn({ children: e, className: n }) {
  return /* @__PURE__ */ t("div", { className: M("container", n), children: e });
}
function rn() {
  return /* @__PURE__ */ t("i", { className: "khlug-icon" });
}
const m = 7;
function de(e, n, r) {
  const s = Math.ceil(r / n), l = Math.floor(m / 2), a = [];
  if (s === 0)
    return [1];
  if (s <= m)
    return Array.from({ length: s }, (o, u) => u + 1);
  if (e <= l)
    for (let o = 1; o <= m; o++)
      a.push(o);
  else if (e > s - l)
    for (let o = s - m + 1; o <= s; o++)
      a.push(o);
  else
    for (let o = e - l; o <= e + l; o++)
      a.push(o);
  return a;
}
function an({
  currentPage: e,
  countPerPage: n,
  totalCount: r,
  onPageChange: s
}) {
  const l = Math.ceil(r / n), a = de(e, n, r);
  return /* @__PURE__ */ c(I, { justify: "center", align: "center", gap: 2, children: [
    /* @__PURE__ */ t(
      h,
      {
        "aria-label": "이전 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === 1,
        onClick: () => s(Math.max(1, e - 1)),
        children: /* @__PURE__ */ t(Z, { size: 14 })
      }
    ),
    a.map((o) => /* @__PURE__ */ t(
      _,
      {
        size: "sm",
        variant: o === e ? "solid" : "ghost",
        colorScheme: o === e ? "blue" : "gray",
        onClick: () => s(o),
        children: o
      },
      o
    )),
    /* @__PURE__ */ t(
      h,
      {
        "aria-label": "다음 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === l,
        onClick: () => s(Math.min(l, e + 1)),
        children: /* @__PURE__ */ t(J, { size: 14 })
      }
    )
  ] });
}
function fe() {
  return /* @__PURE__ */ t("div", { className: "ring-loading-indicator", children: /* @__PURE__ */ c("div", { className: "lds-dual-ring", children: [
    /* @__PURE__ */ t("div", {}),
    /* @__PURE__ */ t("div", {})
  ] }) });
}
function on({ className: e }) {
  return /* @__PURE__ */ t("div", { className: M("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ t(fe, {}) });
}
const me = void 0, ge = re.create({
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
}, y = [], _e = "_navigationBar_74agw_3", Ne = "_navContainer_74agw_23", Me = "_logo_74agw_41", ye = "_desktopMenu_74agw_51", Ce = "_navItem_74agw_63", we = "_navLink_74agw_73", Ie = "_active_74agw_99", ke = "_subNav_74agw_107", De = "_mobileActions_74agw_453", xe = "_mobileMenu_74agw_467", Le = "_mobileNavItem_74agw_495", Ae = "_mobileNavLink_74agw_511", Se = "_mobileSubNav_74agw_537", i = {
  navigationBar: _e,
  navContainer: Ne,
  logo: Me,
  desktopMenu: ye,
  navItem: Ce,
  navLink: we,
  active: Ie,
  subNav: ke,
  mobileActions: De,
  mobileMenu: xe,
  mobileNavItem: Le,
  mobileNavLink: Ae,
  mobileSubNav: Se
};
function Re({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ t("hr", {}) : /* @__PURE__ */ t("a", { href: e.href, children: e.label });
}
function Ee({ item: e }) {
  const n = e.requiresManager;
  return /* @__PURE__ */ c("div", { className: i.navItem, children: [
    /* @__PURE__ */ t(
      "a",
      {
        href: e.href,
        className: `${i.navLink} ${n ? i.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ t("div", { className: i.subNav, children: e.subItems.map((r, s) => /* @__PURE__ */ t(Re, { item: r }, r.href || s)) })
  ] });
}
function Ye({ isManager: e }) {
  const n = y.filter(
    (r) => !r.requiresManager || e
  );
  return /* @__PURE__ */ t(C, { children: n.map((r) => /* @__PURE__ */ t(Ee, { item: r }, r.label)) });
}
function Te({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ t("hr", {}) : /* @__PURE__ */ t("a", { href: e.href, children: e.label });
}
function Be({ item: e }) {
  const n = e.requiresManager;
  return /* @__PURE__ */ c("div", { className: i.mobileNavItem, children: [
    /* @__PURE__ */ t(
      "a",
      {
        href: e.href,
        className: `${i.mobileNavLink} ${n ? i.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ t("div", { className: i.mobileSubNav, children: e.subItems.map((r, s) => /* @__PURE__ */ t(Te, { item: r }, r.href || s)) })
  ] });
}
function Oe({ isManager: e }) {
  const n = y.filter(
    (r) => !r.requiresManager || e
  );
  return /* @__PURE__ */ t("div", { className: i.mobileMenu, children: n.map((r) => /* @__PURE__ */ t(Be, { item: r }, r.label)) });
}
const Ue = "https://cdn.khlug.org/images/khlug-long-logo.png";
function $e({ notificationSlot: e, logoUrl: n = Ue }) {
  const [r, s] = ne(!1), { isManager: l } = pe(), a = () => {
    s(!r);
  };
  return /* @__PURE__ */ c("nav", { className: i.navigationBar, children: [
    /* @__PURE__ */ c("div", { className: i.navContainer, children: [
      /* @__PURE__ */ t("a", { href: "https://app.khlug.org", children: /* @__PURE__ */ t(
        "img",
        {
          src: n,
          alt: "KHLUG Logo",
          className: i.logo
        }
      ) }),
      /* @__PURE__ */ c("div", { className: i.desktopMenu, children: [
        /* @__PURE__ */ t(Ye, { isManager: l }),
        e
      ] }),
      /* @__PURE__ */ c("div", { className: i.mobileActions, children: [
        e,
        /* @__PURE__ */ t(
          h,
          {
            "aria-label": "메뉴",
            onClick: a,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ t(ee, { size: 24 })
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ t(Oe, { isManager: l })
  ] });
}
function sn({ children: e, logoUrl: n }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ t($e, { logoUrl: n }),
    /* @__PURE__ */ t("div", { className: "main-layout__content", children: e })
  ] });
}
const je = {
  "logo-header": "_logo-header_v24wn_1"
};
function ln({ children: e }) {
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ t("header", { className: je["logo-header"], children: /* @__PURE__ */ t(
      "img",
      {
        src: "https://cdn.khlug.org/images/khlug-long-logo.png",
        alt: "Logo"
      }
    ) }),
    e
  ] });
}
function cn(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const Fe = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function un(e, n = Fe.DATETIME) {
  return b(e).format(n);
}
function dn(e, n = /* @__PURE__ */ new Date()) {
  const r = b(e).diff(b(n), "day");
  if (r === 0)
    return "오늘";
  if (r > 0)
    switch (r) {
      case 1:
        return "내일";
      case 2:
        return "모레";
      case 3:
        return "글피";
      default:
        return `${r}일 후`;
    }
  else
    switch (r) {
      case -1:
        return "어제";
      case -2:
        return "그제";
      case -3:
        return "그끄제";
      default:
        return `${-r}일 전`;
    }
}
function fn(e) {
  return ae(e) ? e.response?.data?.message ?? e.message : e.message;
}
const mn = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
class gn {
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
const Ge = N({
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
}), He = N({
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
      button: Ge,
      link: He
    }
  }
}), vn = D(x, ze);
export {
  Ze as BaseModal,
  Je as Button,
  en as Callout,
  on as CenterRingLoadingIndicator,
  nn as CollegeIcon,
  tn as Container,
  Fe as DateFormats,
  rn as KhlugIcon,
  sn as MainLayout,
  $e as NavigationBar,
  an as PageNavigator,
  fe as RingLoadingIndicator,
  ln as SimpleLogoLayout,
  he as UserPublicApi,
  gn as Validator,
  ge as apiClient,
  dn as calcDateInterval,
  M as cn,
  fn as extractErrorMessage,
  cn as formatCurrency,
  un as formatDate,
  mn as stripHtmlTags,
  vn as system,
  be as useCurrentUser,
  pe as useIsManager
};
