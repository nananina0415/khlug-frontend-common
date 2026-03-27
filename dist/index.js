import { jsx as n, jsxs as c, Fragment as C } from "react/jsx-runtime";
import { Dialog as d, Portal as w, Button as _, Alert as g, Flex as k, IconButton as h, defineRecipe as N, defineConfig as D, createSystem as I, defaultConfig as x } from "@chakra-ui/react";
import { GraduationCap as L, Coffee as A, Hospital as f, PieChart as S, Plane as R, FlaskConical as E, Music as T, Pill as Y, Sprout as B, Scale as O, Brush as G, Book as F, VenetianMask as U, Building2 as H, Dumbbell as $, Palette as j, Globe as q, Globe2 as z, Dna as K, Microscope as V, Monitor as P, Satellite as W, Cog as Q, CircleHelp as X, ChevronLeft as Z, ChevronRight as J, Menu as ee } from "lucide-react";
import { useState as re } from "react";
import { useQuery as ne } from "@tanstack/react-query";
import te, { isAxiosError as ae } from "axios";
import b from "dayjs";
function Ze({ isOpen: e, onRequestClose: r, children: t }) {
  return /* @__PURE__ */ n(
    d.Root,
    {
      open: e,
      onOpenChange: (i) => {
        !i.open && r && r();
      },
      children: /* @__PURE__ */ c(w, { children: [
        /* @__PURE__ */ n(d.Backdrop, {}),
        /* @__PURE__ */ n(d.Positioner, { children: /* @__PURE__ */ n(
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
function Je({
  variant: e = "primary",
  disabled: r,
  ...t
}) {
  return /* @__PURE__ */ n(_, { variant: e, disabled: r, ...t });
}
function er({ type: e = "info", children: r }) {
  return /* @__PURE__ */ c(g.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ n(g.Indicator, {}),
    /* @__PURE__ */ n(g.Description, { flex: 1, children: r })
  ] });
}
const oe = {
  공과대학: Q,
  전자정보대학: W,
  소프트웨어융합대학: P,
  응용과학대학: V,
  생명과학대학: K,
  국제대학: z,
  외국어대학: q,
  "예술·디자인대학": j,
  체육대학: $,
  간호과학대학: f,
  경영대학: H,
  무용학부: U,
  문과대학: F,
  미술대학: G,
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
}, ie = X;
function rr({ college: e, ...r }) {
  const t = e.split(" ")[0], i = oe[t] ?? ie;
  return /* @__PURE__ */ n(i, { ...r });
}
function se(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var v = { exports: {} };
var p;
function le() {
  return p || (p = 1, (function(e) {
    (function() {
      var r = {}.hasOwnProperty;
      function t() {
        for (var o = "", a = 0; a < arguments.length; a++) {
          var u = arguments[a];
          u && (o = s(o, i(u)));
        }
        return o;
      }
      function i(o) {
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
          r.call(o, u) && o[u] && (a = s(a, u));
        return a;
      }
      function s(o, a) {
        return a ? o ? o + " " + a : o + a : o;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  })(v)), v.exports;
}
var ce = le();
const ue = /* @__PURE__ */ se(ce), M = ue;
function nr({ children: e, className: r }) {
  return /* @__PURE__ */ n("div", { className: M("container", r), children: e });
}
function tr() {
  return /* @__PURE__ */ n("i", { className: "khlug-icon" });
}
const m = 7;
function de(e, r, t) {
  const i = Math.ceil(t / r), s = Math.floor(m / 2), o = [];
  if (i === 0)
    return [1];
  if (i <= m)
    return Array.from({ length: i }, (a, u) => u + 1);
  if (e <= s)
    for (let a = 1; a <= m; a++)
      o.push(a);
  else if (e > i - s)
    for (let a = i - m + 1; a <= i; a++)
      o.push(a);
  else
    for (let a = e - s; a <= e + s; a++)
      o.push(a);
  return o;
}
function ar({
  currentPage: e,
  countPerPage: r,
  totalCount: t,
  onPageChange: i
}) {
  const s = Math.ceil(t / r), o = de(e, r, t);
  return /* @__PURE__ */ c(k, { justify: "center", align: "center", gap: 2, children: [
    /* @__PURE__ */ n(
      h,
      {
        "aria-label": "이전 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === 1,
        onClick: () => i(Math.max(1, e - 1)),
        children: /* @__PURE__ */ n(Z, { size: 14 })
      }
    ),
    o.map((a) => /* @__PURE__ */ n(
      _,
      {
        size: "sm",
        variant: a === e ? "solid" : "ghost",
        colorScheme: a === e ? "blue" : "gray",
        onClick: () => i(a),
        children: a
      },
      a
    )),
    /* @__PURE__ */ n(
      h,
      {
        "aria-label": "다음 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === s,
        onClick: () => i(Math.min(s, e + 1)),
        children: /* @__PURE__ */ n(J, { size: 14 })
      }
    )
  ] });
}
function fe() {
  return /* @__PURE__ */ n("div", { className: "ring-loading-indicator", children: /* @__PURE__ */ c("div", { className: "lds-dual-ring", children: [
    /* @__PURE__ */ n("div", {}),
    /* @__PURE__ */ n("div", {})
  ] }) });
}
function or({ className: e }) {
  return /* @__PURE__ */ n("div", { className: M("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ n(fe, {}) });
}
const me = te.create({
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: !0
}), ge = async () => (await me.get("/users/@me")).data, ve = {
  getCurrentUser: ge
}, he = () => ne({
  queryKey: ["current-user"],
  queryFn: ve.getCurrentUser,
  staleTime: 30 * 1e3,
  // 30초
  gcTime: 300 * 1e3,
  // 5분
  retry: 0
}), be = () => {
  const { status: e, data: r } = he();
  return {
    isLoggedIn: !!r?.id,
    isManager: r?.manager ?? !1,
    isLoading: e === "pending",
    isError: e === "error"
  };
}, pe = "_navigationBar_74agw_3", _e = "_navContainer_74agw_23", Ne = "_logo_74agw_41", Me = "_desktopMenu_74agw_51", ye = "_navItem_74agw_63", Ce = "_navLink_74agw_73", we = "_active_74agw_99", ke = "_subNav_74agw_107", De = "_mobileActions_74agw_453", Ie = "_mobileMenu_74agw_467", xe = "_mobileNavItem_74agw_495", Le = "_mobileNavLink_74agw_511", Ae = "_mobileSubNav_74agw_537", l = {
  navigationBar: pe,
  navContainer: _e,
  logo: Ne,
  desktopMenu: Me,
  navItem: ye,
  navLink: Ce,
  active: we,
  subNav: ke,
  mobileActions: De,
  mobileMenu: Ie,
  mobileNavItem: xe,
  mobileNavLink: Le,
  mobileSubNav: Ae
};
function Se({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ n("hr", {}) : /* @__PURE__ */ n("a", { href: e.href, children: e.label });
}
function Re({ item: e }) {
  const r = e.requiresManager;
  return /* @__PURE__ */ c("div", { className: l.navItem, children: [
    /* @__PURE__ */ n(
      "a",
      {
        href: e.href,
        className: `${l.navLink} ${r ? l.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ n("div", { className: l.subNav, children: e.subItems.map((t, i) => /* @__PURE__ */ n(Se, { item: t }, t.href || i)) })
  ] });
}
function Ee({ menuItems: e, isLoggedIn: r, isManager: t }) {
  const i = e.filter((s) => s.requiresManager ? t : s.requiresMember ? r : s.forGuest ? !r : !0);
  return /* @__PURE__ */ n(C, { children: i.map((s) => /* @__PURE__ */ n(Re, { item: s }, s.label)) });
}
function Te({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ n("hr", {}) : /* @__PURE__ */ n("a", { href: e.href, children: e.label });
}
function Ye({ item: e }) {
  const r = e.requiresManager;
  return /* @__PURE__ */ c("div", { className: l.mobileNavItem, children: [
    /* @__PURE__ */ n(
      "a",
      {
        href: e.href,
        className: `${l.mobileNavLink} ${r ? l.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ n("div", { className: l.mobileSubNav, children: e.subItems.map((t, i) => /* @__PURE__ */ n(Te, { item: t }, t.href || i)) })
  ] });
}
function Be({ menuItems: e, isLoggedIn: r, isManager: t }) {
  const i = e.filter((s) => s.requiresManager ? t : s.requiresMember ? r : s.forGuest ? !r : !0);
  return /* @__PURE__ */ n("div", { className: l.mobileMenu, children: i.map((s) => /* @__PURE__ */ n(Ye, { item: s }, s.label)) });
}
const Oe = "https://cdn.khlug.org/images/khlug-long-logo.png", Ge = "https://app.khlug.org";
function Fe({
  notificationSlot: e,
  logoUrl: r = Oe,
  logoHref: t = Ge,
  menuItems: i = []
}) {
  const [s, o] = re(!1), { isLoggedIn: a, isManager: u } = be(), y = () => {
    o(!s);
  };
  return /* @__PURE__ */ c("nav", { className: l.navigationBar, children: [
    /* @__PURE__ */ c("div", { className: l.navContainer, children: [
      /* @__PURE__ */ n("a", { href: t, children: /* @__PURE__ */ n(
        "img",
        {
          src: r,
          alt: "KHLUG Logo",
          className: l.logo
        }
      ) }),
      /* @__PURE__ */ c("div", { className: l.desktopMenu, children: [
        /* @__PURE__ */ n(Ee, { menuItems: i, isLoggedIn: a, isManager: u }),
        e
      ] }),
      /* @__PURE__ */ c("div", { className: l.mobileActions, children: [
        e,
        /* @__PURE__ */ n(
          h,
          {
            "aria-label": "메뉴",
            onClick: y,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ n(ee, { size: 24 })
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ n(Be, { menuItems: i, isLoggedIn: a, isManager: u })
  ] });
}
function ir({ children: e, logoUrl: r, logoHref: t, menuItems: i }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ n(Fe, { logoUrl: r, logoHref: t, menuItems: i }),
    /* @__PURE__ */ n("div", { className: "main-layout__content", children: e })
  ] });
}
const Ue = {
  "logo-header": "_logo-header_v24wn_1"
};
function sr({ children: e }) {
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ n("header", { className: Ue["logo-header"], children: /* @__PURE__ */ n(
      "img",
      {
        src: "https://cdn.khlug.org/images/khlug-long-logo.png",
        alt: "Logo"
      }
    ) }),
    e
  ] });
}
function lr(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const He = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function cr(e, r = He.DATETIME) {
  return b(e).format(r);
}
function ur(e, r = /* @__PURE__ */ new Date()) {
  const t = b(e).diff(b(r), "day");
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
function dr(e) {
  return ae(e) ? e.response?.data?.message ?? e.message : e.message;
}
const fr = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
class mr {
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
const $e = N({
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
}), je = N({
  base: {
    color: "brand.500",
    textDecoration: "underline",
    _hover: {
      color: "brand.600"
    }
  }
}), qe = D({
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
      button: $e,
      link: je
    }
  }
}), gr = I(x, qe);
export {
  Ze as BaseModal,
  Je as Button,
  er as Callout,
  or as CenterRingLoadingIndicator,
  rr as CollegeIcon,
  nr as Container,
  He as DateFormats,
  tr as KhlugIcon,
  ir as MainLayout,
  Fe as NavigationBar,
  ar as PageNavigator,
  fe as RingLoadingIndicator,
  sr as SimpleLogoLayout,
  ve as UserPublicApi,
  mr as Validator,
  me as apiClient,
  ur as calcDateInterval,
  M as cn,
  dr as extractErrorMessage,
  lr as formatCurrency,
  cr as formatDate,
  fr as stripHtmlTags,
  gr as system,
  he as useCurrentUser,
  be as useIsManager
};
