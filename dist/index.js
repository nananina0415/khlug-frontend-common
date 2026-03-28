import { jsx as r, jsxs as c, Fragment as I } from "react/jsx-runtime";
import { Dialog as d, Portal as L, Button as M, Alert as g, Flex as A, IconButton as h, defineRecipe as C, defineConfig as w, createSystem as S, defaultConfig as R } from "@chakra-ui/react";
import { GraduationCap as E, Coffee as T, Hospital as f, PieChart as Y, Plane as G, FlaskConical as B, Music as O, Pill as U, Sprout as F, Scale as H, Brush as j, Book as $, VenetianMask as z, Building2 as q, Dumbbell as K, Palette as V, Globe as P, Globe2 as W, Dna as Q, Microscope as X, Monitor as Z, Satellite as J, Cog as ee, CircleHelp as te, ChevronLeft as ne, ChevronRight as re, Menu as ae } from "lucide-react";
import { useState as oe } from "react";
import { useQuery as se } from "@tanstack/react-query";
import ie, { isAxiosError as le } from "axios";
import p from "dayjs";
function nt({ isOpen: e, onRequestClose: t, children: a }) {
  return /* @__PURE__ */ r(
    d.Root,
    {
      open: e,
      onOpenChange: (o) => {
        !o.open && t && t();
      },
      children: /* @__PURE__ */ c(L, { children: [
        /* @__PURE__ */ r(d.Backdrop, {}),
        /* @__PURE__ */ r(d.Positioner, { children: /* @__PURE__ */ r(
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
function rt({
  variant: e = "primary",
  disabled: t,
  ...a
}) {
  return /* @__PURE__ */ r(M, { variant: e, disabled: t, ...a });
}
function at({ type: e = "info", children: t }) {
  return /* @__PURE__ */ c(g.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ r(g.Indicator, {}),
    /* @__PURE__ */ r(g.Description, { flex: 1, children: t })
  ] });
}
const ce = {
  공과대학: ee,
  전자정보대학: J,
  소프트웨어융합대학: Z,
  응용과학대학: X,
  생명과학대학: Q,
  국제대학: W,
  외국어대학: P,
  "예술·디자인대학": V,
  체육대학: K,
  간호과학대학: f,
  경영대학: q,
  무용학부: z,
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
}, ue = te;
function ot({ college: e, ...t }) {
  const a = e.split(" ")[0], o = ce[a] ?? ue;
  return /* @__PURE__ */ r(o, { ...t });
}
function de(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var v = { exports: {} };
var N;
function fe() {
  return N || (N = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
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
          t.call(n, u) && n[u] && (s = i(s, u));
        return s;
      }
      function i(n, s) {
        return s ? n ? n + " " + s : n + s : n;
      }
      e.exports ? (a.default = a, e.exports = a) : window.classNames = a;
    })();
  })(v)), v.exports;
}
var me = fe();
const ge = /* @__PURE__ */ de(me), k = ge;
function st({ children: e, className: t }) {
  return /* @__PURE__ */ r("div", { className: k("container", t), children: e });
}
function it() {
  return /* @__PURE__ */ r("i", { className: "khlug-icon" });
}
const m = 7;
function ve(e, t, a) {
  const o = Math.ceil(a / t), i = Math.floor(m / 2), n = [];
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
function lt({
  currentPage: e,
  countPerPage: t,
  totalCount: a,
  onPageChange: o
}) {
  const i = Math.ceil(a / t), n = ve(e, t, a);
  return /* @__PURE__ */ c(A, { justify: "center", align: "center", gap: 2, children: [
    /* @__PURE__ */ r(
      h,
      {
        "aria-label": "이전 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === 1,
        onClick: () => o(Math.max(1, e - 1)),
        children: /* @__PURE__ */ r(ne, { size: 14 })
      }
    ),
    n.map((s) => /* @__PURE__ */ r(
      M,
      {
        size: "sm",
        variant: s === e ? "solid" : "ghost",
        colorScheme: s === e ? "blue" : "gray",
        onClick: () => o(s),
        children: s
      },
      s
    )),
    /* @__PURE__ */ r(
      h,
      {
        "aria-label": "다음 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === i,
        onClick: () => o(Math.min(i, e + 1)),
        children: /* @__PURE__ */ r(re, { size: 14 })
      }
    )
  ] });
}
function he() {
  return /* @__PURE__ */ r("div", { className: "ring-loading-indicator", children: /* @__PURE__ */ c("div", { className: "lds-dual-ring", children: [
    /* @__PURE__ */ r("div", {}),
    /* @__PURE__ */ r("div", {})
  ] }) });
}
function ct({ className: e }) {
  return /* @__PURE__ */ r("div", { className: k("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ r(he, {}) });
}
const b = ie.create({
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: !0
}), pe = async (e) => (await b.get("/users/@me/groups", {
  params: { isActive: e }
})).data, be = async () => (await b.get("/users/@me")).data, _e = {
  getCurrentUser: be,
  getMyGroups: pe
}, D = () => se({
  queryKey: ["current-user"],
  queryFn: _e.getCurrentUser,
  staleTime: 30 * 1e3,
  // 30초
  gcTime: 300 * 1e3,
  // 5분
  retry: 0
}), ye = () => {
  const { status: e, data: t } = D();
  return {
    isManager: t?.manager ?? !1,
    isLoading: e === "pending",
    isError: e === "error"
  };
}, Ne = "_navigationBar_nt9ty_3", Me = "_navContainer_nt9ty_23", Ce = "_logo_nt9ty_41", ke = "_desktopMenu_nt9ty_51", De = "_navItem_nt9ty_63", xe = "_navLink_nt9ty_73", Ie = "_active_nt9ty_99", Le = "_subNav_nt9ty_107", Ae = "_mobileActions_nt9ty_461", we = "_mobileMenu_nt9ty_475", Se = "_mobileNavItem_nt9ty_503", Re = "_mobileNavLink_nt9ty_519", Ee = "_mobileSubNav_nt9ty_545", l = {
  navigationBar: Ne,
  navContainer: Me,
  logo: Ce,
  desktopMenu: ke,
  navItem: De,
  navLink: xe,
  active: Ie,
  subNav: Le,
  mobileActions: Ae,
  mobileMenu: we,
  mobileNavItem: Se,
  mobileNavLink: Re,
  mobileSubNav: Ee
};
function Te({ item: e, isCurrent: t }) {
  return e.isDivider ? /* @__PURE__ */ r("hr", {}) : /* @__PURE__ */ r("a", { href: e.href, className: t ? l.active : "", children: e.label });
}
function Ye({ item: e, current: t }) {
  const a = t !== void 0 ? e.subItems.some((o) => o.href === t) || e.href === t : !1;
  return /* @__PURE__ */ c("div", { className: l.navItem, children: [
    /* @__PURE__ */ r(
      "a",
      {
        href: e.href,
        className: `${l.navLink} ${a ? l.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ r("div", { className: l.subNav, children: e.subItems.map((o, i) => /* @__PURE__ */ r(Te, { item: o, isCurrent: o.href === t }, o.href || i)) })
  ] });
}
function Ge({ menuItems: e, isLoggedIn: t, isManager: a, current: o }) {
  const i = e.filter((n) => n.requiresManager ? a : n.requiresMember ? t : n.forGuest ? !t : !0);
  return /* @__PURE__ */ r(I, { children: i.map((n) => /* @__PURE__ */ r(Ye, { item: n, current: o }, n.label)) });
}
function Be({ item: e, isCurrent: t }) {
  return e.isDivider ? /* @__PURE__ */ r("hr", {}) : /* @__PURE__ */ r("a", { href: e.href, className: t ? l.active : "", children: e.label });
}
function Oe({ item: e, current: t }) {
  return /* @__PURE__ */ c("div", { className: l.mobileNavItem, children: [
    /* @__PURE__ */ r("a", { href: e.href, className: l.mobileNavLink, children: e.label }),
    /* @__PURE__ */ r("div", { className: l.mobileSubNav, children: e.subItems.map((a, o) => /* @__PURE__ */ r(Be, { item: a, isCurrent: a.href === t }, a.href || o)) })
  ] });
}
function Ue({ menuItems: e, isLoggedIn: t, isManager: a, current: o }) {
  const i = e.filter((n) => n.requiresManager ? a : n.requiresMember ? t : n.forGuest ? !t : !0);
  return /* @__PURE__ */ r("div", { className: l.mobileMenu, children: i.map((n) => /* @__PURE__ */ r(Oe, { item: n, current: o }, n.label)) });
}
const Fe = "https://cdn.khlug.org/images/khlug-long-logo.png", He = "https://app.khlug.org";
function je({
  notificationSlot: e,
  logoUrl: t = Fe,
  logoHref: a = He,
  menuItems: o = [],
  current: i
}) {
  const [n, s] = oe(!1), { data: u } = D(), _ = !!u?.id, { isManager: y } = ye(), x = () => {
    s(!n);
  };
  return /* @__PURE__ */ c("nav", { className: l.navigationBar, children: [
    /* @__PURE__ */ c("div", { className: l.navContainer, children: [
      /* @__PURE__ */ r("a", { href: a, children: /* @__PURE__ */ r(
        "img",
        {
          src: t,
          alt: "KHLUG Logo",
          className: l.logo
        }
      ) }),
      /* @__PURE__ */ c("div", { className: l.desktopMenu, children: [
        /* @__PURE__ */ r(Ge, { menuItems: o, isLoggedIn: _, isManager: y, current: i }),
        e
      ] }),
      /* @__PURE__ */ c("div", { className: l.mobileActions, children: [
        e,
        /* @__PURE__ */ r(
          h,
          {
            "aria-label": "메뉴",
            onClick: x,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ r(ae, { size: 24 })
          }
        )
      ] })
    ] }),
    n && /* @__PURE__ */ r(Ue, { menuItems: o, isLoggedIn: _, isManager: y, current: i })
  ] });
}
function ut({ children: e, logoUrl: t, logoHref: a, menuItems: o, current: i }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ r(je, { logoUrl: t, logoHref: a, menuItems: o, current: i }),
    /* @__PURE__ */ r("div", { className: "main-layout__content", children: e })
  ] });
}
const $e = {
  "logo-header": "_logo-header_v24wn_1"
};
function dt({ children: e }) {
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ r("header", { className: $e["logo-header"], children: /* @__PURE__ */ r(
      "img",
      {
        src: "https://cdn.khlug.org/images/khlug-long-logo.png",
        alt: "Logo"
      }
    ) }),
    e
  ] });
}
const ze = async (e) => (await b.get(
  `/groups/${e}/members`
)).data, ft = {
  getGroupMembers: ze
};
function mt(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const qe = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function gt(e, t = qe.DATETIME) {
  return p(e).format(t);
}
function vt(e, t = /* @__PURE__ */ new Date()) {
  const a = p(e).diff(p(t), "day");
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
function ht(e) {
  return le(e) ? e.response?.data?.message ?? e.message : e.message;
}
const pt = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
class bt {
  static validateUserName(t) {
    return t.length === 0 || t.length > 50 ? {
      result: !1,
      message: "이름은 1자 이상 50자 이하로 입력해주세요."
    } : /^[가-힣a-zA-Z ]+$/.test(t) ? { result: !0 } : {
      result: !1,
      message: "이름은 한글, 영문, 공백만 입력 가능합니다."
    };
  }
  static validateGrade(t) {
    return Number.isNaN(t) ? {
      result: !1,
      message: "학년은 숫자로 입력해주세요."
    } : t < 1 || t > 10 ? {
      result: !1,
      message: "학년은 1 이상 4 이하로 입력해주세요."
    } : { result: !0 };
  }
}
const Ke = C({
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
}), Ve = C({
  base: {
    color: "brand.500",
    textDecoration: "underline",
    _hover: {
      color: "brand.600"
    }
  }
}), Pe = w({
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
      button: Ke,
      link: Ve
    }
  }
}), _t = S(R, Pe);
export {
  nt as BaseModal,
  rt as Button,
  at as Callout,
  ct as CenterRingLoadingIndicator,
  ot as CollegeIcon,
  st as Container,
  qe as DateFormats,
  ft as GroupMemberApi,
  it as KhlugIcon,
  ut as MainLayout,
  je as NavigationBar,
  lt as PageNavigator,
  he as RingLoadingIndicator,
  dt as SimpleLogoLayout,
  _e as UserPublicApi,
  bt as Validator,
  b as apiClient,
  vt as calcDateInterval,
  k as cn,
  ht as extractErrorMessage,
  mt as formatCurrency,
  gt as formatDate,
  pt as stripHtmlTags,
  _t as system,
  D as useCurrentUser,
  ye as useIsManager
};
