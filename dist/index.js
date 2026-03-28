import { jsx as t, jsxs as c, Fragment as I } from "react/jsx-runtime";
import { Dialog as d, Portal as x, Button as y, Alert as b, Flex as A, IconButton as v, defineRecipe as C, defineConfig as L, createSystem as S, defaultConfig as R } from "@chakra-ui/react";
import { GraduationCap as E, Coffee as T, Hospital as f, PieChart as Y, Plane as G, FlaskConical as B, Music as O, Pill as U, Sprout as F, Scale as $, Brush as H, Book as j, VenetianMask as z, Building2 as q, Dumbbell as K, Palette as V, Globe as P, Globe2 as W, Dna as Q, Microscope as X, Monitor as Z, Satellite as J, Cog as ee, CircleHelp as re, ChevronLeft as ne, ChevronRight as te, Menu as ae } from "lucide-react";
import { useState as se } from "react";
import { useQuery as oe } from "@tanstack/react-query";
import ie, { isAxiosError as le } from "axios";
import h from "dayjs";
function nr({ isOpen: e, onRequestClose: r, children: a }) {
  return /* @__PURE__ */ t(
    d.Root,
    {
      open: e,
      onOpenChange: (o) => {
        !o.open && r && r();
      },
      children: /* @__PURE__ */ c(x, { children: [
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
function tr({
  variant: e = "primary",
  disabled: r,
  ...a
}) {
  return /* @__PURE__ */ t(y, { variant: e, disabled: r, ...a });
}
function ar({ type: e = "info", children: r }) {
  return /* @__PURE__ */ c(b.Root, { status: e, borderRadius: "md", alignItems: "center", children: [
    /* @__PURE__ */ t(b.Indicator, {}),
    /* @__PURE__ */ t(b.Description, { flex: 1, children: r })
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
  문과대학: j,
  미술대학: H,
  법과대학: $,
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
}, ue = re;
function sr({ college: e, ...r }) {
  const a = e.split(" ")[0], o = ce[a] ?? ue;
  return /* @__PURE__ */ t(o, { ...r });
}
function de(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var g = { exports: {} };
var M;
function fe() {
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
var me = fe();
const be = /* @__PURE__ */ de(me), w = be;
function or({ children: e, className: r }) {
  return /* @__PURE__ */ t("div", { className: w("container", r), children: e });
}
function ir() {
  return /* @__PURE__ */ t("i", { className: "khlug-icon" });
}
const m = 7;
function ge(e, r, a) {
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
function lr({
  currentPage: e,
  countPerPage: r,
  totalCount: a,
  onPageChange: o
}) {
  const i = Math.ceil(a / r), n = ge(e, r, a);
  return /* @__PURE__ */ c(A, { justify: "center", align: "center", gap: 2, children: [
    /* @__PURE__ */ t(
      v,
      {
        "aria-label": "이전 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === 1,
        onClick: () => o(Math.max(1, e - 1)),
        children: /* @__PURE__ */ t(ne, { size: 14 })
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
      v,
      {
        "aria-label": "다음 페이지",
        size: "sm",
        variant: "ghost",
        disabled: e === i,
        onClick: () => o(Math.min(i, e + 1)),
        children: /* @__PURE__ */ t(te, { size: 14 })
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
function cr({ className: e }) {
  return /* @__PURE__ */ t("div", { className: w("center-ring-loading-indicator__wrapper", e), children: /* @__PURE__ */ t(ve, {}) });
}
const p = ie.create({
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: !0
}), he = async (e) => (await p.get("/users/@me/groups", {
  params: { isActive: e }
})).data, pe = async () => (await p.get("/users/@me")).data, _e = {
  getCurrentUser: pe,
  getMyGroups: he
}, k = () => oe({
  queryKey: ["current-user"],
  queryFn: _e.getCurrentUser,
  staleTime: 30 * 1e3,
  // 30초
  gcTime: 300 * 1e3,
  // 5분
  retry: 0
}), Ne = () => {
  const { status: e, data: r } = k();
  return {
    isManager: r?.manager ?? !1,
    isLoading: e === "pending",
    isError: e === "error"
  };
}, Me = "_navigationBar_ebbws_3", ye = "_navContainer_ebbws_23", Ce = "_logo_ebbws_41", we = "_desktopMenu_ebbws_51", ke = "_navItem_ebbws_63", De = "_navLink_ebbws_73", Ie = "_active_ebbws_99", xe = "_subNav_ebbws_109", Ae = "_mobileActions_ebbws_455", Le = "_mobileMenu_ebbws_469", Se = "_mobileNavItem_ebbws_497", Re = "_mobileNavLink_ebbws_513", Ee = "_mobileSubNav_ebbws_539", l = {
  navigationBar: Me,
  navContainer: ye,
  logo: Ce,
  desktopMenu: we,
  navItem: ke,
  navLink: De,
  active: Ie,
  subNav: xe,
  mobileActions: Ae,
  mobileMenu: Le,
  mobileNavItem: Se,
  mobileNavLink: Re,
  mobileSubNav: Ee
};
function Te({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ t("hr", {}) : /* @__PURE__ */ t("a", { href: e.href, children: e.label });
}
function Ye({ item: e, current: r }) {
  const a = r !== void 0 ? e.href === r : !1;
  return /* @__PURE__ */ c("div", { className: l.navItem, children: [
    /* @__PURE__ */ t(
      "a",
      {
        href: e.href,
        className: `${l.navLink} ${a ? l.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ t("div", { className: l.subNav, children: e.subItems.map((o, i) => /* @__PURE__ */ t(Te, { item: o }, o.href || i)) })
  ] });
}
function Ge({ menuItems: e, isLoggedIn: r, isManager: a, current: o }) {
  const i = e.filter((n) => n.requiresManager ? a : n.requiresMember ? r : n.forGuest ? !r : !0);
  return /* @__PURE__ */ t(I, { children: i.map((n) => /* @__PURE__ */ t(Ye, { item: n, current: o }, n.label)) });
}
function Be({ item: e }) {
  return e.isDivider ? /* @__PURE__ */ t("hr", {}) : /* @__PURE__ */ t("a", { href: e.href, children: e.label });
}
function Oe({ item: e, current: r }) {
  const a = r !== void 0 ? e.href === r : !1;
  return /* @__PURE__ */ c("div", { className: l.mobileNavItem, children: [
    /* @__PURE__ */ t(
      "a",
      {
        href: e.href,
        className: `${l.mobileNavLink} ${a ? l.active : ""}`,
        children: e.label
      }
    ),
    /* @__PURE__ */ t("div", { className: l.mobileSubNav, children: e.subItems.map((o, i) => /* @__PURE__ */ t(Be, { item: o }, o.href || i)) })
  ] });
}
function Ue({ menuItems: e, isLoggedIn: r, isManager: a, current: o }) {
  const i = e.filter((n) => n.requiresManager ? a : n.requiresMember ? r : n.forGuest ? !r : !0);
  return /* @__PURE__ */ t("div", { className: l.mobileMenu, children: i.map((n) => /* @__PURE__ */ t(Oe, { item: n, current: o }, n.label)) });
}
const Fe = "https://cdn.khlug.org/images/khlug-long-logo.png", $e = "https://app.khlug.org";
function He({
  notificationSlot: e,
  logoUrl: r = Fe,
  logoHref: a = $e,
  menuItems: o = [],
  current: i
}) {
  const [n, s] = se(!1), { data: u } = k(), _ = !!u?.id, { isManager: N } = Ne(), D = () => {
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
          v,
          {
            "aria-label": "메뉴",
            onClick: D,
            variant: "ghost",
            size: "sm",
            children: /* @__PURE__ */ t(ae, { size: 24 })
          }
        )
      ] })
    ] }),
    n && /* @__PURE__ */ t(Ue, { menuItems: o, isLoggedIn: _, isManager: N, current: i })
  ] });
}
function ur({ children: e, logoUrl: r, logoHref: a, menuItems: o, current: i }) {
  return /* @__PURE__ */ c("div", { className: "main-layout", children: [
    /* @__PURE__ */ t(He, { logoUrl: r, logoHref: a, menuItems: o, current: i }),
    /* @__PURE__ */ t("div", { className: "main-layout__content", children: e })
  ] });
}
const je = {
  "logo-header": "_logo-header_v24wn_1"
};
function dr({ children: e }) {
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
const ze = async (e) => (await p.get(
  `/groups/${e}/members`
)).data, fr = {
  getGroupMembers: ze
};
function mr(e) {
  return `₩${e.toLocaleString("ko-KR")}`;
}
const qe = {
  DATE: "YYYY-MM-DD",
  DATE_KOR: "YYYY년 M월 D일",
  TIME: "HH:mm:ss",
  DATETIME: "YYYY-MM-DD HH:mm:ss",
  DATETIME_KOR: "YYYY년 M월 D일 H시 m분 s초"
};
function br(e, r = qe.DATETIME) {
  return h(e).format(r);
}
function gr(e, r = /* @__PURE__ */ new Date()) {
  const a = h(e).diff(h(r), "day");
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
  return le(e) ? e.response?.data?.message ?? e.message : e.message;
}
const hr = (e) => e && new DOMParser().parseFromString(e, "text/html").body.textContent || "";
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
}), Pe = L({
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
}), _r = S(R, Pe);
export {
  nr as BaseModal,
  tr as Button,
  ar as Callout,
  cr as CenterRingLoadingIndicator,
  sr as CollegeIcon,
  or as Container,
  qe as DateFormats,
  fr as GroupMemberApi,
  ir as KhlugIcon,
  ur as MainLayout,
  He as NavigationBar,
  lr as PageNavigator,
  ve as RingLoadingIndicator,
  dr as SimpleLogoLayout,
  _e as UserPublicApi,
  pr as Validator,
  p as apiClient,
  gr as calcDateInterval,
  w as cn,
  vr as extractErrorMessage,
  mr as formatCurrency,
  br as formatDate,
  hr as stripHtmlTags,
  _r as system,
  k as useCurrentUser,
  Ne as useIsManager
};
