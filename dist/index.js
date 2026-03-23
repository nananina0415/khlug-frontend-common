import { jsx as n, jsxs as c, Fragment as C } from "react/jsx-runtime";
import { Dialog as d, Portal as w, Button as _, Alert as g, Flex as I, IconButton as h, defineRecipe as N, defineConfig as k, createSystem as x, defaultConfig as D } from "@chakra-ui/react";
import { GraduationCap as S, Coffee as A, Hospital as f, PieChart as L, Plane as R, FlaskConical as Y, Music as E, Pill as B, Sprout as T, Scale as O, Brush as $, Book as j, VenetianMask as H, Building2 as U, Dumbbell as z, Palette as F, Globe as G, Globe2 as q, Dna as K, Microscope as V, Monitor as P, Satellite as W, Cog as Q, CircleHelp as X, ChevronLeft as Z, ChevronRight as J, Menu as ee } from "lucide-react";
import { useState as ne } from "react";
import { useQuery as te } from "@tanstack/react-query";
import re, { isAxiosError as ae } from "axios";
import b from "dayjs";
function Xe({ isOpen: e, onRequestClose: t, children: r }) {
  return /* @__PURE__ */ n(
    d.Root,
    {
      open: e,
      onOpenChange: (i) => {
        !i.open && t && t();
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
            children: r
          }
        ) })
      ] })
    }
  );
}
function Ze({
  variant: e = "primary",
  disabled: t,
  ...r
}) {
  return /* @__PURE__ */ n(_, { variant: e, disabled: t, ...r });
}
function Je({ type: e = "info", children: t }) {
  return /* @__PURE__ */ c(g.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ n(g.Indicator, {}),
    /* @__PURE__ */ n(g.Description, { flex: 1, children: t })
  ] });
}
const oe = {
  공과대학: Q,
  전자정보대학: W,
  소프트웨어융합대학: P,
  응용과학대학: V,
  생명과학대학: K,
  국제대학: q,
  외국어대학: G,
  "예술·디자인대학": F,
  체육대학: z,
  간호과학대학: f,
  경영대학: U,
  무용학부: H,
  문과대학: j,
  미술대학: $,
  법과대학: O,
  생활과학대학: T,
  약학대학: B,
  음악대학: E,
  의과대학: f,
  이과대학: Y,
  자율전공학과: R,
  정경대학: L,
  치과대학: f,
  한의과대학: f,
  호텔관광대학: A,
  대학원: S
}, ie = X;
function en({ college: e, ...t }) {
  const r = e.split(" ")[0], i = oe[r] ?? ie;
  return /* @__PURE__ */ n(i, { ...t });
}
function se(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var v = { exports: {} };
var p;
function le() {
  return p || (p = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var o = "", a = 0; a < arguments.length; a++) {
          var u = arguments[a];
          u && (o = l(o, i(u)));
        }
        return o;
      }
      function i(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return r.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var a = "";
        for (var u in o)
          t.call(o, u) && o[u] && (a = l(a, u));
        return a;
      }
      function l(o, a) {
        return a ? o ? o + " " + a : o + a : o;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(v)), v.exports;
}
var ce = le();
const ue = /* @__PURE__ */ se(ce), M = ue;
function nn({ children: e, className: t }) {
  return /* @__PURE__ */ n("div", { className: M("container", t), children: e });
}
function tn() {
  return /* @__PURE__ */ n("i", { className: "khlug-icon" });
}
const m = 7;
function de(e, t, r) {
  const i = Math.ceil(r / t), l = Math.floor(m / 2), o = [];
  if (i === 0)
    return [1];
  if (i <= m)
    return Array.from({ length: i }, (a, u) => u + 1);
  if (e <= l)
    for (let a = 1; a <= m; a++)
      o.push(a);
  else if (e > i - l)
    for (let a = i - m + 1; a <= i; a++)
      o.push(a);
  else
    for (let a = e - l; a <= e + l; a++)
      o.push(a);
  return o;
}
function rn({
  currentPage: e,
  countPerPage: t,
  totalCount: r,
  onPageChange: i
}) {
  const l = Math.ceil(r / t), o = de(e, t, r);
  return /* @__PURE__ */ c(I, { justify: "center", align: "center", gap: 2, children: [
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
        disabled: e === l,
        onClick: () => i(Math.min(l, e + 1)),
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
function an({ className: e }) {
  return /* @__PURE__ */ n("div", { className: M("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ n(fe, {}) });
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
  const { status: e, data: t } = be();
  return {
    isManager: t?.manager ?? !1,
    isLoading: e === "pending",
    isError: e === "error"
  };
}, y = [], _e = "_navigationBar_74agw_3", Ne = "_navContainer_74agw_23", Me = "_logo_74agw_41", ye = "_desktopMenu_74agw_51", Ce = "_navItem_74agw_63", we = "_navLink_74agw_73", Ie = "_active_74agw_99", ke = "_subNav_74agw_107", xe = "_mobileActions_74agw_453", De = "_mobileMenu_74agw_467", Se = "_mobileNavItem_74agw_495", Ae = "_mobileNavLink_74agw_511", Le = "_mobileSubNav_74agw_537", s = {
  navigationBar: _e,
  navContainer: Ne,
  logo: Me,
  desktopMenu: ye,
  navItem: Ce,
  navLink: we,
  active: Ie,
  subNav: ke,
  mobileActions: xe,
  mobileMenu: De,
  mobileNavItem: Se,
  mobileNavLink: Ae,
  mobileSubNav: Le
};
function Re({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ n("hr", {}) : /* @__PURE__ */ n("a", { href: e.href, children: e.label });
}
function Ye({ item: e }) {
  const t = e.requiresManager;
  return /* @__PURE__ */ c("div", { className: s.navItem, children: [
    /* @__PURE__ */ n(
      "a",
      {
        href: e.href,
        className: `${s.navLink} ${t ? s.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ n("div", { className: s.subNav, children: e.subItems.map((r, i) => /* @__PURE__ */ n(Re, { item: r }, r.href || i)) })
  ] });
}
function Ee({ isManager: e }) {
  const t = y.filter(
    (r) => !r.requiresManager || e
  );
  return /* @__PURE__ */ n(C, { children: t.map((r) => /* @__PURE__ */ n(Ye, { item: r }, r.label)) });
}
function Be({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ n("hr", {}) : /* @__PURE__ */ n("a", { href: e.href, children: e.label });
}
function Te({ item: e }) {
  const t = e.requiresManager;
  return /* @__PURE__ */ c("div", { className: s.mobileNavItem, children: [
    /* @__PURE__ */ n(
      "a",
      {
        href: e.href,
        className: `${s.mobileNavLink} ${t ? s.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ n("div", { className: s.mobileSubNav, children: e.subItems.map((r, i) => /* @__PURE__ */ n(Be, { item: r }, r.href || i)) })
  ] });
}
function Oe({ isManager: e }) {
  const t = y.filter(
    (r) => !r.requiresManager || e
  );
  return /* @__PURE__ */ n("div", { className: s.mobileMenu, children: t.map((r) => /* @__PURE__ */ n(Te, { item: r }, r.label)) });
}
function $e({ notificationSlot: e }) {
  const [t, r] = ne(!1), { isManager: i } = pe(), l = () => {
    r(!t);
  };
  return /* @__PURE__ */ c("nav", { className: s.navigationBar, children: [
    /* @__PURE__ */ c("div", { className: s.navContainer, children: [
      /* @__PURE__ */ n("a", { href: "https://app.khlug.org", children: /* @__PURE__ */ n(
        "img",
        {
          src: "https://cdn.khlug.org/images/khlug-long-logo.png",
          alt: "KHLUG Logo",
          className: s.logo
        }
      ) }),
      /* @__PURE__ */ c("div", { className: s.desktopMenu, children: [
        /* @__PURE__ */ n(Ee, { isManager: i }),
        e
      ] }),
      /* @__PURE__ */ c("div", { className: s.mobileActions, children: [
        e,
        /* @__PURE__ */ n(
          h,
          {
            "aria-label": "메뉴",
            onClick: l,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ n(ee, { size: 24 })
          }
        )
      ] })
    ] }),
    t && /* @__PURE__ */ n(Oe, { isManager: i })
  ] });
}
function on({ children: e }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ n($e, {}),
    /* @__PURE__ */ n("div", { className: "main-layout__content", children: e })
  ] });
}
const je = {
  "logo-header": "_logo-header_v24wn_1"
};
function sn({ children: e }) {
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ n("header", { className: je["logo-header"], children: /* @__PURE__ */ n(
      "img",
      {
        src: "https://cdn.khlug.org/images/khlug-long-logo.png",
        alt: "Logo"
      }
    ) }),
    e
  ] });
}
function ln(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const He = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function cn(e, t = He.DATETIME) {
  return b(e).format(t);
}
function un(e, t = /* @__PURE__ */ new Date()) {
  const r = b(e).diff(b(t), "day");
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
function dn(e) {
  return ae(e) ? e.response?.data?.message ?? e.message : e.message;
}
const fn = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
class mn {
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
const Ue = N({
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
}), ze = N({
  base: {
    color: "brand.500",
    textDecoration: "underline",
    _hover: {
      color: "brand.600"
    }
  }
}), Fe = k({
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
      button: Ue,
      link: ze
    }
  }
}), gn = x(D, Fe);
export {
  Xe as BaseModal,
  Ze as Button,
  Je as Callout,
  an as CenterRingLoadingIndicator,
  en as CollegeIcon,
  nn as Container,
  He as DateFormats,
  tn as KhlugIcon,
  on as MainLayout,
  $e as NavigationBar,
  rn as PageNavigator,
  fe as RingLoadingIndicator,
  sn as SimpleLogoLayout,
  he as UserPublicApi,
  mn as Validator,
  ge as apiClient,
  un as calcDateInterval,
  M as cn,
  dn as extractErrorMessage,
  ln as formatCurrency,
  cn as formatDate,
  fn as stripHtmlTags,
  gn as system,
  be as useCurrentUser,
  pe as useIsManager
};
