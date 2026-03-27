import { jsx as n, jsxs as c, Fragment as k } from "react/jsx-runtime";
import { Dialog as d, Portal as D, Button as N, Alert as g, Flex as I, IconButton as h, defineRecipe as M, defineConfig as x, createSystem as L, defaultConfig as A } from "@chakra-ui/react";
import { GraduationCap as S, Coffee as R, Hospital as f, PieChart as E, Plane as T, FlaskConical as Y, Music as B, Pill as O, Sprout as G, Scale as U, Brush as F, Book as H, VenetianMask as $, Building2 as j, Dumbbell as q, Palette as z, Globe as K, Globe2 as V, Dna as P, Microscope as W, Monitor as Q, Satellite as X, Cog as Z, CircleHelp as J, ChevronLeft as ee, ChevronRight as re, Menu as ne } from "lucide-react";
import { useState as te } from "react";
import { useQuery as ae } from "@tanstack/react-query";
import oe, { isAxiosError as ie } from "axios";
import b from "dayjs";
function Je({ isOpen: e, onRequestClose: r, children: t }) {
  return /* @__PURE__ */ n(
    d.Root,
    {
      open: e,
      onOpenChange: (i) => {
        !i.open && r && r();
      },
      children: /* @__PURE__ */ c(D, { children: [
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
function er({
  variant: e = "primary",
  disabled: r,
  ...t
}) {
  return /* @__PURE__ */ n(N, { variant: e, disabled: r, ...t });
}
function rr({ type: e = "info", children: r }) {
  return /* @__PURE__ */ c(g.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ n(g.Indicator, {}),
    /* @__PURE__ */ n(g.Description, { flex: 1, children: r })
  ] });
}
const se = {
  공과대학: Z,
  전자정보대학: X,
  소프트웨어융합대학: Q,
  응용과학대학: W,
  생명과학대학: P,
  국제대학: V,
  외국어대학: K,
  "예술·디자인대학": z,
  체육대학: q,
  간호과학대학: f,
  경영대학: j,
  무용학부: $,
  문과대학: H,
  미술대학: F,
  법과대학: U,
  생활과학대학: G,
  약학대학: O,
  음악대학: B,
  의과대학: f,
  이과대학: Y,
  자율전공학과: T,
  정경대학: E,
  치과대학: f,
  한의과대학: f,
  호텔관광대학: R,
  대학원: S
}, le = J;
function nr({ college: e, ...r }) {
  const t = e.split(" ")[0], i = se[t] ?? le;
  return /* @__PURE__ */ n(i, { ...r });
}
function ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var v = { exports: {} };
var _;
function ue() {
  return _ || (_ = 1, (function(e) {
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
var de = ue();
const fe = /* @__PURE__ */ ce(de), y = fe;
function tr({ children: e, className: r }) {
  return /* @__PURE__ */ n("div", { className: y("container", r), children: e });
}
function ar() {
  return /* @__PURE__ */ n("i", { className: "khlug-icon" });
}
const m = 7;
function me(e, r, t) {
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
function or({
  currentPage: e,
  countPerPage: r,
  totalCount: t,
  onPageChange: i
}) {
  const s = Math.ceil(t / r), o = me(e, r, t);
  return /* @__PURE__ */ c(I, { justify: "center", align: "center", gap: 2, children: [
    /* @__PURE__ */ n(
      h,
      {
        "aria-label": "이전 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === 1,
        onClick: () => i(Math.max(1, e - 1)),
        children: /* @__PURE__ */ n(ee, { size: 14 })
      }
    ),
    o.map((a) => /* @__PURE__ */ n(
      N,
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
        children: /* @__PURE__ */ n(re, { size: 14 })
      }
    )
  ] });
}
function ge() {
  return /* @__PURE__ */ n("div", { className: "ring-loading-indicator", children: /* @__PURE__ */ c("div", { className: "lds-dual-ring", children: [
    /* @__PURE__ */ n("div", {}),
    /* @__PURE__ */ n("div", {})
  ] }) });
}
function ir({ className: e }) {
  return /* @__PURE__ */ n("div", { className: y("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ n(ge, {}) });
}
const ve = oe.create({
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: !0
}), he = async () => (await ve.get("/users/@me")).data, be = {
  getCurrentUser: he
}, C = () => ae({
  queryKey: ["current-user"],
  queryFn: be.getCurrentUser,
  staleTime: 30 * 1e3,
  // 30초
  gcTime: 300 * 1e3,
  // 5분
  retry: 0
}), pe = () => {
  const { status: e, data: r } = C();
  return {
    isManager: r?.manager ?? !1,
    isLoading: e === "pending",
    isError: e === "error"
  };
}, _e = "_navigationBar_74agw_3", Ne = "_navContainer_74agw_23", Me = "_logo_74agw_41", ye = "_desktopMenu_74agw_51", Ce = "_navItem_74agw_63", we = "_navLink_74agw_73", ke = "_active_74agw_99", De = "_subNav_74agw_107", Ie = "_mobileActions_74agw_453", xe = "_mobileMenu_74agw_467", Le = "_mobileNavItem_74agw_495", Ae = "_mobileNavLink_74agw_511", Se = "_mobileSubNav_74agw_537", l = {
  navigationBar: _e,
  navContainer: Ne,
  logo: Me,
  desktopMenu: ye,
  navItem: Ce,
  navLink: we,
  active: ke,
  subNav: De,
  mobileActions: Ie,
  mobileMenu: xe,
  mobileNavItem: Le,
  mobileNavLink: Ae,
  mobileSubNav: Se
};
function Re({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ n("hr", {}) : /* @__PURE__ */ n("a", { href: e.href, children: e.label });
}
function Ee({ item: e }) {
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
    /* @__PURE__ */ n("div", { className: l.subNav, children: e.subItems.map((t, i) => /* @__PURE__ */ n(Re, { item: t }, t.href || i)) })
  ] });
}
function Te({ menuItems: e, isLoggedIn: r, isManager: t }) {
  const i = e.filter((s) => s.requiresManager ? t : s.requiresMember ? r : s.forGuest ? !r : !0);
  return /* @__PURE__ */ n(k, { children: i.map((s) => /* @__PURE__ */ n(Ee, { item: s }, s.label)) });
}
function Ye({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ n("hr", {}) : /* @__PURE__ */ n("a", { href: e.href, children: e.label });
}
function Be({ item: e }) {
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
    /* @__PURE__ */ n("div", { className: l.mobileSubNav, children: e.subItems.map((t, i) => /* @__PURE__ */ n(Ye, { item: t }, t.href || i)) })
  ] });
}
function Oe({ menuItems: e, isLoggedIn: r, isManager: t }) {
  const i = e.filter((s) => s.requiresManager ? t : s.requiresMember ? r : s.forGuest ? !r : !0);
  return /* @__PURE__ */ n("div", { className: l.mobileMenu, children: i.map((s) => /* @__PURE__ */ n(Be, { item: s }, s.label)) });
}
const Ge = "https://cdn.khlug.org/images/khlug-long-logo.png", Ue = "https://app.khlug.org";
function Fe({
  notificationSlot: e,
  logoUrl: r = Ge,
  logoHref: t = Ue,
  menuItems: i = []
}) {
  const [s, o] = te(!1), { data: a } = C(), u = !!a?.id, { isManager: p } = pe(), w = () => {
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
        /* @__PURE__ */ n(Te, { menuItems: i, isLoggedIn: u, isManager: p }),
        e
      ] }),
      /* @__PURE__ */ c("div", { className: l.mobileActions, children: [
        e,
        /* @__PURE__ */ n(
          h,
          {
            "aria-label": "메뉴",
            onClick: w,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ n(ne, { size: 24 })
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ n(Oe, { menuItems: i, isLoggedIn: u, isManager: p })
  ] });
}
function sr({ children: e, logoUrl: r, logoHref: t, menuItems: i }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ n(Fe, { logoUrl: r, logoHref: t, menuItems: i }),
    /* @__PURE__ */ n("div", { className: "main-layout__content", children: e })
  ] });
}
const He = {
  "logo-header": "_logo-header_v24wn_1"
};
function lr({ children: e }) {
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ n("header", { className: He["logo-header"], children: /* @__PURE__ */ n(
      "img",
      {
        src: "https://cdn.khlug.org/images/khlug-long-logo.png",
        alt: "Logo"
      }
    ) }),
    e
  ] });
}
function cr(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const $e = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function ur(e, r = $e.DATETIME) {
  return b(e).format(r);
}
function dr(e, r = /* @__PURE__ */ new Date()) {
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
function fr(e) {
  return ie(e) ? e.response?.data?.message ?? e.message : e.message;
}
const mr = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
class gr {
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
const je = M({
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
}), qe = M({
  base: {
    color: "brand.500",
    textDecoration: "underline",
    _hover: {
      color: "brand.600"
    }
  }
}), ze = x({
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
      link: qe
    }
  }
}), vr = L(A, ze);
export {
  Je as BaseModal,
  er as Button,
  rr as Callout,
  ir as CenterRingLoadingIndicator,
  nr as CollegeIcon,
  tr as Container,
  $e as DateFormats,
  ar as KhlugIcon,
  sr as MainLayout,
  Fe as NavigationBar,
  or as PageNavigator,
  ge as RingLoadingIndicator,
  lr as SimpleLogoLayout,
  be as UserPublicApi,
  gr as Validator,
  ve as apiClient,
  dr as calcDateInterval,
  y as cn,
  fr as extractErrorMessage,
  cr as formatCurrency,
  ur as formatDate,
  mr as stripHtmlTags,
  vr as system,
  C as useCurrentUser,
  pe as useIsManager
};
