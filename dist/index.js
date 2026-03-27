import { jsx as n, jsxs as c, Fragment as D } from "react/jsx-runtime";
import { Dialog as d, Portal as I, Button as M, Alert as g, Flex as x, IconButton as b, defineRecipe as y, defineConfig as A, createSystem as L, defaultConfig as S } from "@chakra-ui/react";
import { GraduationCap as R, Coffee as E, Hospital as f, PieChart as T, Plane as Y, FlaskConical as G, Music as B, Pill as O, Sprout as U, Scale as F, Brush as $, Book as H, VenetianMask as j, Building2 as q, Dumbbell as z, Palette as K, Globe as V, Globe2 as P, Dna as W, Microscope as Q, Monitor as X, Satellite as Z, Cog as J, CircleHelp as ee, ChevronLeft as re, ChevronRight as ne, Menu as te } from "lucide-react";
import { useState as ae } from "react";
import { useQuery as oe } from "@tanstack/react-query";
import se, { isAxiosError as ie } from "axios";
import p from "dayjs";
function rr({ isOpen: e, onRequestClose: r, children: t }) {
  return /* @__PURE__ */ n(
    d.Root,
    {
      open: e,
      onOpenChange: (s) => {
        !s.open && r && r();
      },
      children: /* @__PURE__ */ c(I, { children: [
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
function nr({
  variant: e = "primary",
  disabled: r,
  ...t
}) {
  return /* @__PURE__ */ n(M, { variant: e, disabled: r, ...t });
}
function tr({ type: e = "info", children: r }) {
  return /* @__PURE__ */ c(g.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ n(g.Indicator, {}),
    /* @__PURE__ */ n(g.Description, { flex: 1, children: r })
  ] });
}
const le = {
  공과대학: J,
  전자정보대학: Z,
  소프트웨어융합대학: X,
  응용과학대학: Q,
  생명과학대학: W,
  국제대학: P,
  외국어대학: V,
  "예술·디자인대학": K,
  체육대학: z,
  간호과학대학: f,
  경영대학: q,
  무용학부: j,
  문과대학: H,
  미술대학: $,
  법과대학: F,
  생활과학대학: U,
  약학대학: O,
  음악대학: B,
  의과대학: f,
  이과대학: G,
  자율전공학과: Y,
  정경대학: T,
  치과대학: f,
  한의과대학: f,
  호텔관광대학: E,
  대학원: R
}, ce = ee;
function ar({ college: e, ...r }) {
  const t = e.split(" ")[0], s = le[t] ?? ce;
  return /* @__PURE__ */ n(s, { ...r });
}
function ue(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var v = { exports: {} };
var N;
function de() {
  return N || (N = 1, (function(e) {
    (function() {
      var r = {}.hasOwnProperty;
      function t() {
        for (var o = "", a = 0; a < arguments.length; a++) {
          var u = arguments[a];
          u && (o = i(o, s(u)));
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
          r.call(o, u) && o[u] && (a = i(a, u));
        return a;
      }
      function i(o, a) {
        return a ? o ? o + " " + a : o + a : o;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  })(v)), v.exports;
}
var fe = de();
const me = /* @__PURE__ */ ue(fe), C = me;
function or({ children: e, className: r }) {
  return /* @__PURE__ */ n("div", { className: C("container", r), children: e });
}
function sr() {
  return /* @__PURE__ */ n("i", { className: "khlug-icon" });
}
const m = 7;
function ge(e, r, t) {
  const s = Math.ceil(t / r), i = Math.floor(m / 2), o = [];
  if (s === 0)
    return [1];
  if (s <= m)
    return Array.from({ length: s }, (a, u) => u + 1);
  if (e <= i)
    for (let a = 1; a <= m; a++)
      o.push(a);
  else if (e > s - i)
    for (let a = s - m + 1; a <= s; a++)
      o.push(a);
  else
    for (let a = e - i; a <= e + i; a++)
      o.push(a);
  return o;
}
function ir({
  currentPage: e,
  countPerPage: r,
  totalCount: t,
  onPageChange: s
}) {
  const i = Math.ceil(t / r), o = ge(e, r, t);
  return /* @__PURE__ */ c(x, { justify: "center", align: "center", gap: 2, children: [
    /* @__PURE__ */ n(
      b,
      {
        "aria-label": "이전 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === 1,
        onClick: () => s(Math.max(1, e - 1)),
        children: /* @__PURE__ */ n(re, { size: 14 })
      }
    ),
    o.map((a) => /* @__PURE__ */ n(
      M,
      {
        size: "sm",
        variant: a === e ? "solid" : "ghost",
        colorScheme: a === e ? "blue" : "gray",
        onClick: () => s(a),
        children: a
      },
      a
    )),
    /* @__PURE__ */ n(
      b,
      {
        "aria-label": "다음 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === i,
        onClick: () => s(Math.min(i, e + 1)),
        children: /* @__PURE__ */ n(ne, { size: 14 })
      }
    )
  ] });
}
function ve() {
  return /* @__PURE__ */ n("div", { className: "ring-loading-indicator", children: /* @__PURE__ */ c("div", { className: "lds-dual-ring", children: [
    /* @__PURE__ */ n("div", {}),
    /* @__PURE__ */ n("div", {})
  ] }) });
}
function lr({ className: e }) {
  return /* @__PURE__ */ n("div", { className: C("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ n(ve, {}) });
}
const h = se.create({
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: !0
}), be = async (e) => (await h.get("/users/@me/groups", {
  params: { isActive: e }
})).data, pe = async () => (await h.get("/users/@me")).data, he = {
  getCurrentUser: pe,
  getMyGroups: be
}, w = () => oe({
  queryKey: ["current-user"],
  queryFn: he.getCurrentUser,
  staleTime: 30 * 1e3,
  // 30초
  gcTime: 300 * 1e3,
  // 5분
  retry: 0
}), _e = () => {
  const { status: e, data: r } = w();
  return {
    isManager: r?.manager ?? !1,
    isLoading: e === "pending",
    isError: e === "error"
  };
}, Ne = "_navigationBar_74agw_3", Me = "_navContainer_74agw_23", ye = "_logo_74agw_41", Ce = "_desktopMenu_74agw_51", we = "_navItem_74agw_63", ke = "_navLink_74agw_73", De = "_active_74agw_99", Ie = "_subNav_74agw_107", xe = "_mobileActions_74agw_453", Ae = "_mobileMenu_74agw_467", Le = "_mobileNavItem_74agw_495", Se = "_mobileNavLink_74agw_511", Re = "_mobileSubNav_74agw_537", l = {
  navigationBar: Ne,
  navContainer: Me,
  logo: ye,
  desktopMenu: Ce,
  navItem: we,
  navLink: ke,
  active: De,
  subNav: Ie,
  mobileActions: xe,
  mobileMenu: Ae,
  mobileNavItem: Le,
  mobileNavLink: Se,
  mobileSubNav: Re
};
function Ee({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ n("hr", {}) : /* @__PURE__ */ n("a", { href: e.href, children: e.label });
}
function Te({ item: e }) {
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
    /* @__PURE__ */ n("div", { className: l.subNav, children: e.subItems.map((t, s) => /* @__PURE__ */ n(Ee, { item: t }, t.href || s)) })
  ] });
}
function Ye({ menuItems: e, isLoggedIn: r, isManager: t }) {
  const s = e.filter((i) => i.requiresManager ? t : i.requiresMember ? r : i.forGuest ? !r : !0);
  return /* @__PURE__ */ n(D, { children: s.map((i) => /* @__PURE__ */ n(Te, { item: i }, i.label)) });
}
function Ge({ item: e }) {
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
    /* @__PURE__ */ n("div", { className: l.mobileSubNav, children: e.subItems.map((t, s) => /* @__PURE__ */ n(Ge, { item: t }, t.href || s)) })
  ] });
}
function Oe({ menuItems: e, isLoggedIn: r, isManager: t }) {
  const s = e.filter((i) => i.requiresManager ? t : i.requiresMember ? r : i.forGuest ? !r : !0);
  return /* @__PURE__ */ n("div", { className: l.mobileMenu, children: s.map((i) => /* @__PURE__ */ n(Be, { item: i }, i.label)) });
}
const Ue = "https://cdn.khlug.org/images/khlug-long-logo.png", Fe = "https://app.khlug.org";
function $e({
  notificationSlot: e,
  logoUrl: r = Ue,
  logoHref: t = Fe,
  menuItems: s = []
}) {
  const [i, o] = ae(!1), { data: a } = w(), u = !!a?.id, { isManager: _ } = _e(), k = () => {
    o(!i);
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
        /* @__PURE__ */ n(Ye, { menuItems: s, isLoggedIn: u, isManager: _ }),
        e
      ] }),
      /* @__PURE__ */ c("div", { className: l.mobileActions, children: [
        e,
        /* @__PURE__ */ n(
          b,
          {
            "aria-label": "메뉴",
            onClick: k,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ n(te, { size: 24 })
          }
        )
      ] })
    ] }),
    i && /* @__PURE__ */ n(Oe, { menuItems: s, isLoggedIn: u, isManager: _ })
  ] });
}
function cr({ children: e, logoUrl: r, logoHref: t, menuItems: s }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ n($e, { logoUrl: r, logoHref: t, menuItems: s }),
    /* @__PURE__ */ n("div", { className: "main-layout__content", children: e })
  ] });
}
const He = {
  "logo-header": "_logo-header_v24wn_1"
};
function ur({ children: e }) {
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
const je = async (e) => (await h.get(
  `/groups/${e}/members`
)).data, dr = {
  getGroupMembers: je
};
function fr(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const qe = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function mr(e, r = qe.DATETIME) {
  return p(e).format(r);
}
function gr(e, r = /* @__PURE__ */ new Date()) {
  const t = p(e).diff(p(r), "day");
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
function vr(e) {
  return ie(e) ? e.response?.data?.message ?? e.message : e.message;
}
const br = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
class pr {
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
const ze = y({
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
}), Ke = y({
  base: {
    color: "brand.500",
    textDecoration: "underline",
    _hover: {
      color: "brand.600"
    }
  }
}), Ve = A({
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
      button: ze,
      link: Ke
    }
  }
}), hr = L(S, Ve);
export {
  rr as BaseModal,
  nr as Button,
  tr as Callout,
  lr as CenterRingLoadingIndicator,
  ar as CollegeIcon,
  or as Container,
  qe as DateFormats,
  dr as GroupMemberApi,
  sr as KhlugIcon,
  cr as MainLayout,
  $e as NavigationBar,
  ir as PageNavigator,
  ve as RingLoadingIndicator,
  ur as SimpleLogoLayout,
  he as UserPublicApi,
  pr as Validator,
  h as apiClient,
  gr as calcDateInterval,
  C as cn,
  vr as extractErrorMessage,
  fr as formatCurrency,
  mr as formatDate,
  br as stripHtmlTags,
  hr as system,
  w as useCurrentUser,
  _e as useIsManager
};
