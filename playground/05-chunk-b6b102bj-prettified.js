/** (c) The Wall. All Rights Reserved */

var { defineProperty: c4, getOwnPropertyNames: GG, getOwnPropertyDescriptor: qG } = Object,
  ZG = Object.prototype.hasOwnProperty;
var b4 = new WeakMap(),
  KG = ($) => {
    var Q = b4.get($),
      J;
    if (Q) return Q;
    if (
      ((Q = c4({}, "__esModule", { value: !0 })),
      ($ && typeof $ === "object") || typeof $ === "function")
    )
      GG($).map(
        (Y) =>
          !ZG.call(Q, Y) &&
          c4(Q, Y, { get: () => $[Y], enumerable: !(J = qG($, Y)) || J.enumerable }),
      );
    return (b4.set($, Q), Q);
  };
var FG = ($, Q) => () => ($ && (Q = $(($ = 0))), Q);
var RG = {};
var D5 = "",
  A5 = "";
var s4 = FG(() => {
  (async function $() {
    let J = await (await fetch("/.last-bundle")).text(),
      [Y, q] = J.split(",");
    if (D5 && D5 != Y) location.reload();
    else if (A5 && A5 != q) {
      let K = (await (await fetch("/")).text()).match(/href="(\.\/chunk-[a-z\d]+.css)"/)?.[1],
        W = document.querySelector("link[rel=stylesheet]");
      if (!K || !W)
        return (
          console.error("Couldn't reload stylesheet without reloading..."), location.reload()
        );
      W.href = `${K}?at=${Date.now()}`;
    }
    ((D5 = Y), (A5 = q), setTimeout($, 1000));
  })();
});
var X0 = [
    { hex: "#ffffff", name: "White" },
    { hex: "#E8A8A0", name: "Coral" },
    { hex: "#F0C8A0", name: "Peach" },
    { hex: "#F0DC95", name: "Pale Yellow" },
    { hex: "#B8D898", name: "Mint" },
    { hex: "#90C8B8", name: "Turquoise" },
    { hex: "#9CC0D8", name: "Light Blue" },
    { hex: "#A0B0DC", name: "Cornflower" },
    { hex: "#B4A0CC", name: "Lavender" },
    { hex: "#D0A8C4", name: "Orchid" },
    { hex: "#E8B8C4", name: "Soft Pink" },
    { hex: "#9FA9A9", name: "Gray" },
    { hex: "#C8362C", name: "Red" },
    { hex: "#E8851F", name: "Orange" },
    { hex: "#E8C420", name: "Yellow" },
    { hex: "#5BA833", name: "Green" },
    { hex: "#1E8FA8", name: "Cyan" },
    { hex: "#2A6FB8", name: "Sky Blue" },
    { hex: "#1F4FA8", name: "Blue" },
    { hex: "#5B2D8C", name: "Violet" },
    { hex: "#A82D6E", name: "Magenta" },
    { hex: "#E84A8F", name: "Hot Pink" },
    { hex: "#465050", dark: !0, name: "Dark Gray" },
    { hex: "#7A2218", dark: !0, name: "Maroon" },
    { hex: "#9C5418", dark: !0, name: "Brown" },
    { hex: "#A88420", dark: !0, name: "Olive" },
    { hex: "#3D6E20", dark: !0, name: "Forest Green" },
    { hex: "#155D6E", dark: !0, name: "Dark Teal" },
    { hex: "#1A4870", dark: !0, name: "Steel Blue" },
    { hex: "#15326E", dark: !0, name: "Navy Blue" },
    { hex: "#3A1C5C", dark: !0, name: "Dark Purple" },
    { hex: "#6E1C48", dark: !0, name: "Wine" },
    { hex: "#9C2E5E", dark: !0, name: "Dark Pink" },
    { hex: "#161A1A", dark: !0, name: "Black" },
  ],
  R5 = new Map();
for (let $ = 0; $ < X0.length; $++) {
  let Q = X0[$];
  ((Q.idx = $), (Q.color = parseInt(Q.hex.slice(1), 16)), R5.set(Q.color, $));
}
var f4 = 30000,
  l4 = 15000;
var d4 = 1,
  C0 = 100;
var X8 = 60,
  g0 = 42,
  f = 6000,
  M0 = 4200,
  l$ = 25200000;
var l1 = 3615,
  M5 = 24,
  L0 = 1000,
  z5 = Math.floor(100),
  o8 = { SignUp: 2000, TimePassed: 1000, ReferralCode: 1000 };
var d1 = 4000,
  u1 = 80;
function o0($, ...Q) {
  return $.replace(/{(\d)+}/g, (J, Y) => Q[parseInt(Y)] || "[?]");
}
function j0($) {
  return new Intl.NumberFormat().format($);
}
function o1($) {
  let Q = (($ / l$) * 100).toFixed(2);
  return `${j0($)} (${Q}%)`;
}
function U5($) {
  return new Intl.DateTimeFormat(["en"], {
    timeZone: "UTC",
    minute: "numeric",
    second: "2-digit",
  }).format($);
}
function WG($) {
  return String.fromCodePoint(
    ...$.toUpperCase()
      .split("")
      .map((Q) => 127397 + Q.charCodeAt(0)),
  );
}
function n1($) {
  if ($.length != 2) return "-";
  try {
    let Q = new Intl.DisplayNames(["en"], { type: "region" }).of($);
    return `${WG($)} ${Q || $}`;
  } catch {
    return "Unknown";
  }
}
function j8($) {
  let Q = Math.floor($ / L0);
  return `${Q} spray can${A0(Q)}`;
}
function A0($, Q) {
  let J = $ == 1 ? "" : "s";
  return Q ? `${j0($)} ${Q}${J}` : J;
}
var XG = /\s|\/|[A-Z].*[A-Z]/,
  jG = /[A-Z]{2,}(?=[A-Z][a-z]|$)|[A-Z]?[a-z]+|[A-Z]+|\d+/g;
function HG($) {
  let Q = $.trim();
  if (Q.length <= 8 && !XG.test(Q)) return Q;
  let J = Q.replace(/'s\b/gi, "").match(jG) || [];
  if (J.length === 1) {
    let Y = J[0],
      q = /^[A-Z]+$/.test(Y) ? 6 : 8;
    return Y.length <= q ? Y : Y[0];
  }
  return J.map((Y) => (/^\d+$/.test(Y) ? Y : Y[0])).join("");
}
function H8($) {
  return `[${HG($).slice(0, 6)}]`;
}
var k5 = ($) => Math.floor($ * 10) / 10;
function t1($) {
  if ($ == null) return "never";
  let Q = $ - Date.now(),
    J = new Intl.RelativeTimeFormat(["en"], { numeric: "auto" }),
    Y = 60000,
    q = 60 * Y,
    Z = 24 * q;
  if (Q < q) return J.format(k5(Q / Y), "minute");
  else if (Q < Z) return J.format(k5(Q / q), "hour");
  return J.format(k5(Q / Z), "day");
}
var u4 = 3.141592653589793;
function PG($, Q, J, Y) {
  return () => {
    (($ |= 0), (Q |= 0), (J |= 0), (Y |= 0));
    let q = ((($ + Q) | 0) + Y) | 0;
    return (
      (Y = (Y + 1) | 0),
      ($ = Q ^ (Q >>> 9)),
      (Q = (J + (J << 3)) | 0),
      (J = (J << 21) | (J >>> 11)),
      (J = (J + q) | 0),
      (q >>> 0) / 4294967296
    );
  };
}
var a1 = () => (Math.random() * 4294967296) >>> 0,
  n8 = PG(a1(), a1(), a1(), a1());
function o4($) {
  let Q;
  if ($ < -3.141592653589793) $ += 6.28318531;
  else if ($ > 3.141592653589793) $ -= 6.28318531;
  if ($ < 0)
    if (((Q = 1.27323954 * $ + 0.405284735 * $ * $), Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q;
    else Q = 0.225 * (Q * Q - Q) + Q;
  else if (((Q = 1.27323954 * $ - 0.405284735 * $ * $), Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q;
  else Q = 0.225 * (Q * Q - Q) + Q;
  return Q;
}
function n4($) {
  let Q;
  if ((($ += 1.57079632), $ > 3.141592653589793)) $ -= 6.28318531;
  if ($ < 0)
    if (((Q = 1.27323954 * $ + 0.405284735 * $ * $), Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q;
    else Q = 0.225 * (Q * Q - Q) + Q;
  else if (((Q = 1.27323954 * $ - 0.405284735 * $ * $), Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q;
  else Q = 0.225 * (Q * Q - Q) + Q;
  return Q;
}
function C5($) {
  let Q = $ | 0;
  return $ < 0 && $ != Q ? Q - 1 : Q;
}
Object.freeze(Math);
var t8 = (navigator.userAgentData?.platform ?? navigator.platform).toLowerCase().includes("mac"),
  L5 = t8 ? "⌘" : "Ctrl";
function P8() {
  if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
}
function VG($, Q, J) {
  let Y = n8() * u4 * 2,
    q = J * n8() ** 0.5,
    Z = J < 5 ? 2 : 1,
    K = (n8() - 0.5) * Z,
    W = (n8() - 0.5) * Z;
  return [C5($ + q * n4(Y) + K), C5(Q + q * o4(Y) + W)];
}
function* t4($, Q, J, Y) {
  let q = new Set();
  if (J < 2) J = 2;
  for (let Z = 0; Z < Y; Z++) {
    let K = VG($, Q, J),
      W = K[1] * f + K[0];
    if (q.has(W)) {
      Z--;
      continue;
    }
    (q.add(W), yield K);
  }
}
function a4($, Q, J, Y) {
  if ($ == -1) return { steps: 0, points: [] };
  let q = J - $,
    Z = Y - Q,
    K = Math.max(Math.abs(q), Math.abs(Z)),
    W = [];
  for (let F = 0; F < K; F++) W.push([Math.floor($ + (q / K) * F), Math.floor(Q + (Z / K) * F)]);
  return { steps: K, points: W };
}
var l = ($, Q) => (Q ?? document).querySelector($),
  n0 = ($, Q) => (Q ?? document).querySelectorAll($),
  s1 = ($) => new Promise((Q) => setTimeout(Q, $)),
  r4 = ($, Q) => {
    for (let J in $) {
      let Y = $[J];
      if (typeof Y == "object" && !Array.isArray(Y) && J in Q) r4(Y, Q[J]);
      else if (J.startsWith("data-") && Q.setAttribute) Q.setAttribute(J, Y);
      else if (J.startsWith("--") && Q.setProperty) Q.setProperty(J, Y);
      else if (J == "className" && Q.classList) Q.classList.add(Y);
      else Q[J] = Y;
    }
  };
function G($, ...Q) {
  let J = $.split(/[.#]/)[0],
    Y = $.match(/#[^.#]+/)?.[0],
    q = $.match(/\.[^.#]+/g),
    Z = document.createElement(J);
  if (Y) Z.id = Y.slice(1);
  if (q) Z.className = q.map((K) => K.slice(1)).join(" ");
  for (let K of Q.flat(1 / 0)) {
    if (!K) continue;
    if (K instanceof HTMLElement || typeof K == "string") Z.append(K);
    else if (typeof K == "number") Z.append(String(K));
    else if (typeof K == "object") r4(K, Z);
  }
  return Z;
}
var P$ = !1;
if (P$) s4();
var d$ = G("div.box.paint-bar.tooltip"),
  i4 = G("span.spray-can-count", "+0"),
  e4 = G("span.spray-can-extra", "cans"),
  $J = G("button.btn.swatch.tooltip.paint-extra-count", i4, e4, {
    tabIndex: -1,
    onclick: P8,
    dataset: { tooltip: "Additional Spray Cans" },
  });
function QJ($) {
  let Q = Math.floor($ / L0),
    J = $ % L0,
    Y = (J / L0) * 100;
  (d$.style.setProperty("--paint-remaining", `${Y}%`),
    (d$.dataset.tooltip = `Paint Remaining: ${Math.round(Y)}% (${j0(J)}px)`),
    MG(Q));
}
function JJ($, Q = !1) {
  (d$.style.setProperty("--color", $),
    d$.style.setProperty("--color-2", `${$}7F`),
    d$.classList.toggle("dark", Q));
}
function MG($) {
  ((i4.textContent = `+${$}`), (e4.textContent = `can${A0($)}`));
}
var q0 = null,
  r1 = "",
  a8 = G("button.btn", "Close", { onclick: p }),
  V$ = G("div.btn-container", a8);
function p($ = !1) {
  if (!q0) return;
  if (!q0.close($)) return;
  q0 = null;
}
class y {
  title;
  content;
  bg = G("div.modal-bg");
  titleElement = G("div.modal-title");
  container = G("div.modal-container", { role: "dialog" });
  intervals = [];
  onCloseCallback = null;
  lockLevel = 0;
  open = !1;
  constructor($, Q) {
    this.title = $;
    this.content = Q;
    if (q0) p(!0);
    (this.titleElement.append(
      G("span", $),
      $$("close", { ariaLabel: "Close Modal", onclick: () => this.close() }),
    ),
      this.bg.append(this.container),
      this.container.append(this.titleElement, Q),
      Q.classList.add("modal-content"),
      (l("main").inert = !0),
      document.body.append(this.bg),
      (document.body.style.overflow = "hidden"),
      (r1 = $),
      (q0 = this),
      (this.open = !0));
  }
  addRunningInterval($, Q, J = !1) {
    if ((this.intervals.push(setInterval(Q, $)), J)) setTimeout(Q, 1);
    return this;
  }
  onClose($) {
    this.onCloseCallback = $;
  }
  close($ = !1) {
    if (!this.open) return !0;
    if (this.lockLevel && !$) return !1;
    if (this.onCloseCallback) {
      if (this.onCloseCallback() == !1 && !$) return !1;
    }
    this.open = !1;
    for (let Q of this.intervals) clearInterval(Q);
    return (
      this.bg.remove(),
      (q0 = null),
      (r1 = ""),
      (document.body.style.overflow = ""),
      (l("main").inert = !1),
      !0
    );
  }
}
document.addEventListener("keydown", ($) => {
  if ($.key == "Escape" && q0) p();
});
var x = {
  version: 1,
  lastUsedColors: [],
  lastBrushSize: 10,
  seenGuidebook: !1,
  camera: { x: 0, y: 0, zoom: 0 },
  a11y: {},
  flags: {},
};
function zG($) {
  (console.warn(`Outdated settings (current: ${$.version}, latest: ${x.version}), updating`),
    ($.version = x.version));
}
function kG() {
  try {
    let $ = localStorage.getItem("wall:settings");
    if ($) return JSON.parse($);
  } catch ($) {
    localStorage.removeItem("wall:settings");
  }
}
function UG() {
  let $ = kG();
  if (!$) {
    s8();
    return;
  }
  if (x.version != $.version) zG($);
  for (let Q in $) x[Q] = $[Q];
  s8();
}
function s8() {
  (localStorage.setItem("wall:settings", JSON.stringify(x)), (T5 = !1));
}
var T5 = !1;
function T0() {
  T5 = !0;
}
setInterval(() => {
  if (T5) s8();
}, 1000);
document.addEventListener("blur", s8);
window.addEventListener("beforeunload", s8);
UG();
var YJ = G("img", {
    src: Q$(0),
    alt: "⬉",
    onerror($) {
      (console.error("Error loading custom cursor", $), r8());
    },
  }),
  w5 = G("div.chat-bubble", G("span", "You")),
  T$ = G("div.cursor.own-cursor", YJ, { style: { opacity: "0" } });
function Q$($) {
  return `/static/cursors/generated/${$ || 0}.png`;
}
var e1 = !1,
  $6 = !1;
function GJ() {
  if (e1) return;
  ((T$.style.opacity = "1"), (e1 = !0));
}
function CG() {
  if (!e1) return;
  ((T$.style.opacity = "0"), (e1 = !1));
}
function r8() {
  if ($6) return;
  (T$.remove(),
    document.head.append(G("style.system-cursor", "* { cursor: unset !important }")),
    ($6 = !0));
}
function Q6() {
  if (!$6) return;
  if (x.a11y.systemCursor) return;
  document.body.prepend(T$);
  let $ = l("style.system-cursor");
  if ($) $.remove();
  $6 = !1;
}
function J6($, Q) {
  ((T$.style.transform = `translate3d(${$}px, ${Q}px, 0)`), GJ());
}
document.addEventListener("pointermove", ($) => J6($.x, $.y));
function qJ($) {
  let Q = $.touches[0];
  if (!Q) return;
  J6(Q.clientX + 16, Q.clientY + 16);
}
document.addEventListener("touchstart", qJ);
document.addEventListener("touchmove", qJ);
document.addEventListener("mouseout", ($) => $.relatedTarget || CG());
document.addEventListener("mouseover", GJ);
function V8($) {
  YJ.src = Q$($);
}
var i1 = 0;
function ZJ($) {
  if (x.a11y.hideChatBubbles) return;
  let Q = G("p", $);
  if (
    (i1++,
    w5.append(Q),
    setTimeout(() => {
      if ((Q.remove(), i1--, i1 == 0)) w5.remove();
    }, 2000),
    i1 == 1)
  )
    T$.append(w5);
}
var J0 = {
  url: {
    api: "https://filianislost.com",
    web: "https://filianislost.com",
    share: "https://filianislost.com/share",
    ws: "wss://ws.filianislost.com",
    tileBase: "https://ws.filianislost.com",
    signalArchive: "https://signal.filianislost.com",
  },
  gaMeasurementId: "G-H0TFGRQHK7",
  canvas: { snapshotInterval: 30000, drawBufferInterval: 500, syncInterval: 100 },
};
var DG = /^[\w!#$%&'*.^`|~+-]+$/;
var AG = ($, Q, J = {}) => {
    if (!DG.test($)) throw new Error("Invalid cookie name");
    let Y = `${$}=${Q}`;
    if ($.startsWith("__Secure-") && !J.secure)
      throw new Error("__Secure- Cookie must have Secure attributes");
    if ($.startsWith("__Host-")) {
      if (!J.secure) throw new Error("__Host- Cookie must have Secure attributes");
      if (J.path !== "/") throw new Error('__Host- Cookie must have Path attributes with "/"');
      if (J.domain) throw new Error("__Host- Cookie must not have Domain attributes");
    }
    for (let q of ["domain", "path"])
      if (J[q] && /[;\r\n]/.test(J[q]))
        throw new Error(`${q} must not contain ";", "\\r", or "\\n"`);
    if (J && typeof J.maxAge === "number" && J.maxAge >= 0) {
      if (J.maxAge > 34560000)
        throw new Error(
          "Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration.",
        );
      Y += `; Max-Age=${J.maxAge | 0}`;
    }
    if (J.domain && J.prefix !== "host") Y += `; Domain=${J.domain}`;
    if (J.path) Y += `; Path=${J.path}`;
    if (J.expires) {
      if (J.expires.getTime() - Date.now() > 34560000000)
        throw new Error(
          "Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.",
        );
      Y += `; Expires=${J.expires.toUTCString()}`;
    }
    if (J.httpOnly) Y += "; HttpOnly";
    if (J.secure) Y += "; Secure";
    if (J.sameSite) Y += `; SameSite=${J.sameSite.charAt(0).toUpperCase() + J.sameSite.slice(1)}`;
    if (J.priority) Y += `; Priority=${J.priority.charAt(0).toUpperCase() + J.priority.slice(1)}`;
    if (J.partitioned) {
      if (!J.secure) throw new Error("Partitioned Cookie must have Secure attributes");
      Y += "; Partitioned";
    }
    return Y;
  },
  KJ = ($, Q, J) => {
    return ((Q = encodeURIComponent(Q)), AG($, Q, J));
  };
var FJ = ($, Q) => {
    return (($ = $.replace(/\/+$/, "")), ($ = $ + "/"), (Q = Q.replace(/^\/+/, "")), $ + Q);
  },
  G6 = ($, Q) => {
    for (let [J, Y] of Object.entries(Q)) {
      let q = new RegExp("/:" + J + "(?:{[^/]+})?\\??");
      $ = $.replace(q, Y ? `/${Y}` : "");
    }
    return $;
  },
  WJ = ($) => {
    let Q = new URLSearchParams();
    for (let [J, Y] of Object.entries($)) {
      if (Y === void 0) continue;
      if (Array.isArray(Y)) for (let q of Y) Q.append(J, q);
      else Q.set(J, Y);
    }
    return Q;
  },
  XJ = ($, Q) => {
    switch (Q) {
      case "ws":
        return $.replace(/^http/, "ws");
      case "http":
        return $.replace(/^ws/, "http");
    }
  },
  I5 = ($) => {
    if (/^https?:\/\/[^\/]+?\/index(?=\?|$)/.test($)) return $.replace(/\/index(?=\?|$)/, "/");
    return $.replace(/\/index(?=\?|$)/, "");
  };
function Y6($) {
  return typeof $ === "object" && $ !== null && !Array.isArray($);
}
function E5($, Q) {
  if (!Y6($) && !Y6(Q)) return Q;
  let J = { ...$ };
  for (let Y in Q) {
    let q = Q[Y];
    if (Y6(J[Y]) && Y6(q)) J[Y] = E5(J[Y], q);
    else J[Y] = q;
  }
  return J;
}
var jJ = ($, Q) => {
    return new Proxy(() => {}, {
      get(Y, q) {
        if (typeof q !== "string" || q === "then") return;
        return jJ($, [...Q, q]);
      },
      apply(Y, q, Z) {
        return $({ path: Q, args: Z });
      },
    });
  },
  wG = class {
    url;
    method;
    buildSearchParams;
    queryParams = void 0;
    pathParams = {};
    rBody;
    cType = void 0;
    constructor($, Q, J) {
      ((this.url = $), (this.method = Q), (this.buildSearchParams = J.buildSearchParams));
    }
    fetch = async ($, Q) => {
      if ($) {
        if ($.query) this.queryParams = this.buildSearchParams($.query);
        if ($.form) {
          let W = new FormData();
          for (let [F, H] of Object.entries($.form)) {
            if (H === void 0) continue;
            if (Array.isArray(H)) for (let X of H) W.append(F, X);
            else W.append(F, H);
          }
          this.rBody = W;
        }
        if ($.json) ((this.rBody = JSON.stringify($.json)), (this.cType = "application/json"));
        if ($.param) this.pathParams = $.param;
      }
      let J = this.method.toUpperCase(),
        Y = {
          ...$?.header,
          ...(typeof Q?.headers === "function" ? await Q.headers() : Q?.headers),
        };
      if ($?.cookie) {
        let W = [];
        for (let [F, H] of Object.entries($.cookie)) W.push(KJ(F, H, { path: "/" }));
        Y.Cookie = W.join(",");
      }
      if (this.cType) Y["Content-Type"] = this.cType;
      let q = new Headers(Y ?? void 0),
        Z = this.url;
      if (((Z = I5(Z)), (Z = G6(Z, this.pathParams)), this.queryParams))
        Z = Z + "?" + this.queryParams.toString();
      J = this.method.toUpperCase();
      let K = !(J === "GET" || J === "HEAD");
      return (Q?.fetch || fetch)(Z, {
        body: K ? this.rBody : void 0,
        method: J,
        headers: q,
        ...Q?.init,
      });
    };
  },
  h5 = ($, Q) =>
    jJ(function J(Y) {
      let q = Q?.buildSearchParams ?? WJ,
        Z = [...Y.path],
        K = Z.slice(-3).reverse();
      if (K[0] === "toString") {
        if (K[1] === "name") return K[2] || "";
        return J.toString();
      }
      if (K[0] === "valueOf") {
        if (K[1] === "name") return K[2] || "";
        return J;
      }
      let W = "";
      if (/^\$/.test(K[0])) {
        let j = Z.pop();
        if (j) W = j.replace(/^\$/, "");
      }
      let F = Z.join("/"),
        H = FJ($, F);
      if (W === "url" || W === "path") {
        let j = H;
        if (Y.args[0]) {
          if (Y.args[0].param) j = G6(H, Y.args[0].param);
          if (Y.args[0].query) j = j + "?" + q(Y.args[0].query).toString();
        }
        if (((j = I5(j)), W === "url")) return new URL(j);
        return j.slice($.replace(/\/+$/, "").length).replace(/^\/?/, "/");
      }
      if (W === "ws") {
        let j = XJ(Y.args[0] && Y.args[0].param ? G6(H, Y.args[0].param) : H, "ws"),
          P = new URL(j),
          C = Y.args[0]?.query;
        if (C)
          Object.entries(C).forEach(([A, v]) => {
            if (Array.isArray(v)) v.forEach((S) => P.searchParams.append(A, S));
            else P.searchParams.set(A, v);
          });
        return ((...A) => {
          if (Q?.webSocket !== void 0 && typeof Q.webSocket === "function")
            return Q.webSocket(...A);
          return new WebSocket(...A);
        })(P.toString());
      }
      let X = new wG(H, W, { buildSearchParams: q });
      if (W) {
        Q ??= {};
        let j = E5(Q, { ...Y.args[1] });
        return X.fetch(Y.args[0], j);
      }
      return X;
    }, []);
var i8 = { "Content-Type": "application/json" },
  N = h5(J0.url.api, { init: { credentials: "same-origin", headers: i8 } }),
  w$ = () => localStorage.getItem("auth-token");
var J$;
((Z) => {
  Z[(Z.None = 0)] = "None";
  Z[(Z.Spray = 1)] = "Spray";
  Z[(Z.Chat = 2)] = "Chat";
  Z[(Z.Login = 3)] = "Login";
  Z[(Z.Share = 4)] = "Share";
})((J$ ||= {}));
var R = {
  connectionId: -1,
  user: null,
  token: w$(),
  brushSize: 10,
  selectedColor: X0[0],
  activeTool: 0,
  nextRefill: 0,
  paintRemaining: 0,
  localPaintIncrement: 0,
  openAt: 0,
  clockOffset: 0,
  cursorX: -1,
  cursorY: -1,
  onlinePlayers: 0,
  onlineViewers: 0,
  debug: { ping: 0, visibleCursors: 0 },
  setTool($) {
    let Q = J$[$];
    ((this.activeTool = $), (document.documentElement.dataset.tool = Q.toLowerCase()));
  },
  setUser($) {
    ((this.user = $), V8($.cursor_id || 0));
  },
  addLocalPaintIncrement($) {
    ((this.localPaintIncrement += $), this.setPaintRemaining(this.paintRemaining));
  },
  commitLocalPaint() {
    let $ = Math.max(0, this.paintRemaining + this.localPaintIncrement);
    ((this.localPaintIncrement = 0), this.setPaintRemaining($));
  },
  setPaintRemaining($) {
    this.paintRemaining = $;
    let Q = Math.max($ + this.localPaintIncrement - 1, 0);
    if ((QJ(Q), Q && r1 == "Out of paint?")) p();
  },
  sprayCanCount() {
    return Math.ceil(this.paintRemaining / L0);
  },
  currentSprayCanSize() {
    let $ = this.paintRemaining % L0;
    return $ == 0 && this.paintRemaining >= L0 ? L0 : $;
  },
};
if (P$) window.player = R;
async function m5($) {
  let Q = await N.user.settings.$post({ json: $ });
  if (Q.status != 200) return await Q.text();
  R.setUser(await Q.json());
}
async function e8($) {
  let Q = await m5($);
  if (typeof Q == "string") alert(`Could not update user settings: ${Q}`);
}
function Z0() {
  if (q0) {
    ((q0.container.inert = !0), (q0.content.style.opacity = "0.3"), q0.lockLevel++);
    return;
  }
  new y("Loading...", G("div.loading-modal", "Loading...")).onClose(() => !1);
}
function $1() {
  if (!q0?.lockLevel) return;
  if ((q0.lockLevel--, !q0.lockLevel)) ((q0.container.inert = !1), (q0.content.style.opacity = ""));
}
function i($, Q = "Confirmation", J = "Yes", Y = "No") {
  return new Promise((q) => {
    let Z = !1,
      K = (H) => {
        if (Z) return;
        ((Z = !0), document.removeEventListener("keydown", W, !0), F.remove(), q(H));
      },
      W = (H) => {
        if (H.key == "Escape") (H.stopPropagation(), K(!1));
        else if (H.key == "Enter") (H.stopPropagation(), K(!0));
      },
      F = G(
        "div.modal-bg.confirm-bg",
        G(
          "div.modal-container",
          G(
            "div.modal-title",
            G("span", Q),
            $$("close", { ariaLabel: "Close", onclick: () => K(!1) }),
          ),
          G(
            "div.modal-content",
            G(
              "div.modal",
              G("p", $),
              G(
                "div.btn-container",
                G("button.btn", J, { onclick: () => K(!0) }),
                G("button.btn", Y, { onclick: () => K(!1) }),
              ),
            ),
          ),
        ),
      );
    (F.addEventListener("click", (H) => {
      if (H.target == F) K(!1);
    }),
      document.addEventListener("keydown", W, !0),
      document.body.append(F));
  });
}
function Y0($, Q) {
  new y("Error", G("div.modal.error-modal", G("p.error", $), Q && G("div.details", Q), V$));
}
async function m0($, Q) {
  if ($.status == 429) {
    let J = $.headers.get("retry-after");
    Y0(
      `Not so fast! Please try again ${J ? `in ${A0(Math.round(parseInt(J) / 60), "minute")}` : "a bit later"}`,
      Q,
    );
  } else if ($.status == 500) Y0("Something went wrong on our side, sorry!!!", Q);
  else {
    let J = $.headers.get("content-type");
    if (J && J.includes("text/plain")) Y0(await $.text(), Q);
    else Y0(`Something went wrong... (${$.status} ${$.statusText})`, Q);
  }
}
function HJ($, Q, J, Y, q = !1) {
  return G(
    "div.server.box",
    G("img", {
      src: `https://cdn.discordapp.com/icons/${$}/${Q}.webp?size=128&quality=lossless`,
      draggable: !1,
    }),
    G("div.info", G("b", J), G("p", G("span", j0(Y)), " members")),
    q &&
      G(
        "div.btns",
        G("button.btn.primary", "Select", {
          async onclick() {
            (Z0(), await e8({ clanDiscordId: $ }), Q1());
          },
        }),
      ),
  );
}
function q6($, Q = !1) {
  return G(
    "div.clan-with-stats",
    HJ($.discord_id, $.icon, $.name, $.stat_member_count, !1),
    G(
      "div.stats",
      G("p", G("b", o1($.stat_paint_visible)), " paint visible"),
      G("p", G("b", j0($.stat_pixels_changed)), " pixels changed"),
      G("p", G("b", j0($.approx_discord_members || 0)), " discord members"),
      Q && G("p", "Discord ID: ", G("b", $.discord_id)),
    ),
  );
}
async function PJ() {
  Z0();
  let $ = await N.user.discordGuilds.$get();
  if (!$.ok)
    return Y0(
      "Error loading the Discord Server list",
      "Make sure you're authenticated via Discord, and allowed us to access your Discord server list!",
    );
  let Q = await $.json();
  new y(
    "Change Clan",
    G(
      "div.clans-modal",
      G("p", G("a.link", "Go Back", { onclick: Q1 }), { style: { marginBottom: "8px" } }),
      G(
        "div.list",
        Q.sort((J, Y) => Y.approximate_member_count - J.approximate_member_count).map((J) =>
          HJ(J.id, J.icon, J.name, J.approximate_member_count, !0),
        ),
        G("button.btn", "Refresh List"),
      ),
    ),
  );
}
function IG() {
  new y(
    "User > Clan",
    G(
      "div.clans-modal.no-clan",
      G("p", "You do not have a clan."),
      G(
        "p.notice.noicon",
        "Clans appear next to your name at all times! ",
        "They're a fun way to represent your favorite streamer, content creator, friend group or any other community!",
      ),
      "Join a clan to show where you belong, meet other members, climb the leaderboard together, and stand out across the platform.",
      G(
        "div.btns",
        G("button.btn", "Cancel", { onclick: p }),
        G("button.btn", "Select Clan", { onclick: PJ }),
      ),
    ),
  );
}
async function Q1() {
  if (!R.user?.discord_id)
    return Y0(
      "Sorry, clans are for Discord users only!",
      `Clans work using Discord servers, so you cannot join any clans if you don't have a Discord account connected.

You can authenticate into your current account if your Discord account has the same E-Mail as your Google account.`,
    );
  if (!R.user.clan) return IG();
  new y(
    "User > Clan",
    G(
      "div.clans-modal.current",
      G("p", "Current Clan"),
      q6(R.user.clan),
      G(
        "div.btns",
        G("button.btn", "Cancel", { onclick: p }),
        G("button.btn", "Change Clan", { onclick: PJ }),
        G("button.btn", "Leave Clan", {
          async onclick() {
            if (!(await i("Are you sure you want to leave your current clan?"))) return;
            (Z0(), await e8({ clanDiscordId: "0" }), Q1());
          },
        }),
      ),
    ),
  );
}
async function VJ($) {
  if (!$.clan_id) return;
  Z0();
  let J = await (await N.user.clan[":id"].$get({ param: { id: $.clan_id.toString() } })).json();
  new y("Clan Info", G("div.clans-modal", G("p", G("b", $.username), "'s clan"), q6(J)));
}
function RJ($) {
  let Q = G("textarea", {
    value: $,
    style: { position: "fixed", top: "0", left: "0", width: "0", height: "0", opacity: "0" },
  });
  (document.body.append(Q), Q.focus(), Q.select(), Q.setSelectionRange(0, $.length));
  try {
    document.execCommand("copy");
  } finally {
    Q.remove();
  }
}
function N5($) {
  if (!navigator.clipboard) return RJ($);
  navigator.clipboard.writeText($).catch((Q) => {
    (console.error(Q), RJ($));
  });
}
var $$ = ($, Q) =>
    G(
      "button.btn.icon",
      Q,
      G("img", {
        src: `/static/icon/${$}.png`,
        alt: `${$} icon`,
        style: { pointerEvents: "none" },
        draggable: !1,
      }),
    ),
  Z6 = ($) => $.split(/(\[.\])/).map((Q, J) => (J % 2 ? G("u", Q.slice(1, -1)) : Q)),
  O5 = ($, Q, J, Y, q) =>
    G(
      "button.btn.branding",
      q,
      { ariaLabel: Q, style: { backgroundColor: J, color: Y } },
      G("img", { alt: `${$} icon`, src: `/static/icon/platform/${$}.png`, draggable: !1 }),
      G("span", Q),
    ),
  K6 = ($, Q) =>
    G(
      "button.btn.swatch.icon",
      G("img", { alt: `${$} icon`, src: `/static/icon/${$}.png`, draggable: !1 }),
      Q,
    ),
  F6 = ($, Q) => {
    return (($.dataset.tooltip = Q), $.classList.add("tooltip"), $);
  };
function MJ($, Q, J, Y) {
  if (!Q) return G($, J);
  let q = H8(Q),
    Z = G("b.clan-label", q);
  return G($, Z, J, {
    onclick() {
      if (!Y) return;
      VJ(Y);
    },
    onmouseover() {
      Z.textContent = `[${Q.slice(0, 32)}]`;
    },
    onmouseleave() {
      Z.textContent = q;
    },
  });
}
var zJ = ($, Q = 2) => {
  let J = 10 ** Q,
    Y = Math.floor(($ % 1) * J);
  return [
    G("span", Math.floor($).toString()),
    Y >= 0 && G("span", { style: { fontSize: "0.6em" } }, `.${Y}`.replace(/0+$/, "")),
  ];
};
var B5 = !1,
  Y$ = { options: [] },
  S5 = () => !!Y$.element;
function I$() {
  if (!Y$.element || B5) return;
  ((Y$.options = []),
    Y$.element.remove(),
    (Y$.element = void 0),
    n0(".ctx").forEach(($) => $.remove()));
}
function kJ($, Q, J) {
  I$();
  let Y = G("div.ctx");
  ((Y$.element = Y), (Y$.options = []));
  for (let W of $) {
    if (!W.label) {
      Y.append(G("hr"));
      continue;
    }
    let F = G("div.option", G("span", Z6(W.label)), W.keybindText && G("span", W.keybindText), {
      ariaLabel: W.label.replace(/[\[\]]/g, ""),
      onclick(H) {
        if ((I$(), W.action)) W.action(H);
      },
    });
    (Y.append(F), Y$.options.push({ ...W, _element: F }));
  }
  document.body.append(Y);
  let q = Y.getBoundingClientRect(),
    Z = Q + q.width > window.innerWidth ? window.innerWidth - q.width : Q,
    K = J + q.height > window.innerHeight ? window.innerHeight - q.height : J;
  ((Y.style.left = `${Z}px`),
    (Y.style.top = `${K}px`),
    (Y$.x = Z),
    (Y$.y = K),
    (B5 = !0),
    setTimeout(() => (B5 = !1)));
}
window.addEventListener("click", I$);
window.addEventListener("resize", I$);
window.addEventListener("blur", I$);
window.addEventListener("contextmenu", ($) => {
  ($.preventDefault(), I$());
});
var W6 = null;
function E$($) {
  (J1(),
    (W6 = G(
      "div.mod-return",
      G("button.btn.mod-return-go", `↩ Resume: ${$.label}`, {
        onclick() {
          (J1(), $.reopen());
        },
      }),
      G("button.btn.mod-return-x", "✕", { ariaLabel: "Dismiss", onclick: () => J1() }),
    )),
    document.body.append(W6));
}
function J1() {
  (W6?.remove(), (W6 = null));
}
function UJ($, Q = 25, J = 0) {
  return N.mod.users.$get({ query: { q: $, limit: String(Q), offset: String(J) } });
}
function CJ($) {
  return N.mod.users[":id"].$get({ param: { id: String($) } });
}
function LJ($) {
  return N.mod.users[":id"].sessions.$get({ param: { id: String($) } });
}
function DJ($, Q, J) {
  return N.mod.users[":id"].ban.$post({
    param: { id: String($) },
    json: { ...(Q ? { reason: Q } : {}), ...(J ? { duration_seconds: J } : {}) },
  });
}
function _5($) {
  return N.mod.users[":id"].unban.$post({ param: { id: String($) } });
}
function AJ($, Q, J) {
  return N.mod.users[":id"].mute.$post({
    param: { id: String($) },
    json: { ...(Q ? { reason: Q } : {}), ...(J ? { duration_seconds: J } : {}) },
  });
}
function y5($) {
  return N.mod.users[":id"].unmute.$post({ param: { id: String($) } });
}
function v5($, Q) {
  return N.mod.users[":id"]["leaderboard-exclusion"].$post({
    param: { id: String($) },
    json: { excluded: Q },
  });
}
function TJ($) {
  return N.mod.users[":id"]["delete-strokes"].$post({ param: { id: String($) } });
}
function wJ($, Q = 0) {
  return N.mod.users[":id"]["owned-pixels"].$get({
    param: { id: String($) },
    query: { offset: String(Q) },
  });
}
function IJ($, Q) {
  return N.mod.users[":id"]["delete-selected-strokes"].$post({
    param: { id: String($) },
    json: { positions: Q },
  });
}
function EJ($, Q) {
  return N.mod.users[":id"]["give-paint"].$post({ param: { id: String($) }, json: { amount: Q } });
}
function hJ($, Q) {
  return N.mod.users[":id"]["reset-balance"].$post({
    param: { id: String($) },
    query: { type: Q },
  });
}
function mJ($, Q) {
  return N.mod.users[":id"]["give-cursor"].$post({
    param: { id: String($) },
    json: { cursorId: Q },
  });
}
function NJ($, Q, J) {
  return N.mod.users[":id"].message.$post({
    param: { id: String($) },
    json: { body: Q, ...(J ? { title: J } : {}) },
  });
}
function OJ($, Q, J = !0) {
  return N.mod.broadcast.$post({ json: { body: $, ...(Q ? { title: Q } : {}), createRow: J } });
}
function g5($, Q) {
  return N.mod.users[":id"].role.$post({ param: { id: String($) }, json: { role: Q } });
}
function BJ($ = {}) {
  return N.mod["review-queue"].$get({
    query: {
      ...($.status ? { status: $.status } : {}),
      ...($.kind ? { kind: $.kind } : {}),
      ...($.cursor ? { cursor: $.cursor } : {}),
      ...($.limit ? { limit: String($.limit) } : {}),
    },
  });
}
function SJ($, Q, J) {
  return N.mod["review-queue"][":id"].resolve.$post({
    param: { id: String($) },
    json: { action: Q, ...(J ? { notes: J } : {}) },
  });
}
function _J($, Q) {
  return N.mod.feedback.$get({ query: { kind: $, offset: Q.toString() } });
}
function yJ($, Q, J) {
  return N.mod.feedback.resolve.$post({ json: { id: $, action: Q, reply: J } });
}
function vJ() {
  return N.mod.feedback.counts.$get();
}
function gJ($) {
  return N.mod.referrals.$get({ query: { offset: $.toString() } });
}
function xJ($) {
  return N.mod.referredBy[":uid"].$get({ param: { uid: $.toString() } });
}
function x5($, Q) {
  return N.mod.referrals[":code"].$post({ param: { code: $ }, query: { action: Q } });
}
function pJ($) {
  return N.mod.clans[":id"].members.$get({ param: { id: $.toString() } });
}
function cJ($) {
  return N.mod["wipe-canvas"].$post({ json: $ });
}
function X6($) {
  return N.mod["restore-pixels"].$post({ json: { token: $ } });
}
function bJ($) {
  return N.mod.tile[":pos"].$get({ param: { pos: String($) } });
}
function fJ($, Q, J, Y) {
  return N.mod.region.$get({ query: { x: String($), y: String(Q), w: String(J), h: String(Y) } });
}
function lJ($) {
  return N.mod.owners.$post({ json: { positions: $ } });
}
function dJ($, Q = {}) {
  return N.mod.users[":id"]["paint-history"].$get({
    param: { id: String($) },
    query: {
      ...(Q.before ? { before: Q.before } : {}),
      ...(Q.limit ? { limit: String(Q.limit) } : {}),
    },
  });
}
function uJ($, Q) {
  return N.mod.users[":id"]["paint-history"][":entryId"].$get({
    param: { id: String($), entryId: String(Q) },
  });
}
function oJ($, Q = {}) {
  return N.mod.users[":id"]["chat-history"].$get({
    param: { id: String($) },
    query: {
      ...(Q.before ? { before: Q.before } : {}),
      ...(Q.limit ? { limit: String(Q.limit) } : {}),
    },
  });
}
function nJ($ = {}) {
  return N.mod.audit.$get({
    query: {
      ...($.action ? { action: $.action } : {}),
      ...($.mod_id ? { mod_id: String($.mod_id) } : {}),
      ...($.target_id ? { target_id: String($.target_id) } : {}),
      ...($.search ? { search: $.search } : {}),
      ...($.order ? { order: $.order } : {}),
      ...($.before ? { before: $.before } : {}),
      ...($.limit ? { limit: String($.limit) } : {}),
    },
  });
}
function tJ() {
  return N.mod["bot-sensitivity"].$get();
}
function aJ($) {
  return N.mod["bot-sensitivity"].$post({ json: { sensitivity: $ } });
}
function sJ() {
  return N.mod["chat-cooldown"].$get();
}
function rJ($) {
  return N.mod["chat-cooldown"].$post({ query: { cooldown: $.toString() } });
}
function iJ($) {
  return N.mod["bot-samples"][":userId"].$get({ param: { userId: String($) } });
}
var R8 = null;
function EG() {
  if (R8 && R8.isConnected) return R8;
  return ((R8 = G("div.toast-container")), document.body.append(R8), R8);
}
function h$($, Q = 3200) {
  let J = EG(),
    Y = G("div.toast", G("span", $));
  (J.prepend(Y),
    requestAnimationFrame(() => Y.classList.add("toast-show")),
    setTimeout(() => {
      (Y.classList.remove("toast-show"), setTimeout(() => Y.remove(), 250));
    }, Q));
}
function eJ($) {
  if ($ === null || $ === void 0) return null;
  let Q = $ instanceof Date ? $ : new Date($);
  return Number.isNaN(Q.getTime()) ? null : Q;
}
function x0($) {
  let Q = eJ($);
  if (!Q) return $ === null || $ === void 0 ? "-" : String($);
  return Q.toLocaleString();
}
var j6 = null;
function $7() {
  (j6?.remove(), (j6 = null));
}
document.addEventListener("click", $7);
function w0($, Q) {
  let J = eJ($);
  if (!J) return G("span", Q ?? x0($));
  let Y = J.toLocaleString(),
    q = J.toUTCString(),
    Z = G("time.ts-local.tooltip", {
      textContent: Q ?? Y,
      datetime: J.toISOString(),
      dataset: { tooltip: `UTC: ${q}` },
      onclick(K) {
        if ((K.stopPropagation(), j6)) {
          $7();
          return;
        }
        let W = G(
          "div.ts-utc-pop",
          G("div.ts-utc-row", G("span.ts-utc-k", "Local"), Y),
          G("div.ts-utc-row", G("span.ts-utc-k", "UTC"), q),
        );
        document.body.append(W);
        let F = Z.getBoundingClientRect(),
          H = W.getBoundingClientRect(),
          X = Math.min(F.left, window.innerWidth - H.width - 8),
          j = F.bottom + 4 + H.height > window.innerHeight ? F.top - H.height - 4 : F.bottom + 4;
        ((W.style.left = `${Math.max(8, X)}px`), (W.style.top = `${Math.max(8, j)}px`), (j6 = W));
      },
    });
  return Z;
}
var p5 = [
  { label: "30 min", seconds: 1800 },
  { label: "1 hour", seconds: 3600 },
  { label: "6 hours", seconds: 21600 },
  { label: "1 day", seconds: 86400 },
  { label: "3 days", seconds: 259200 },
  { label: "7 days", seconds: 604800 },
  { label: "30 days", seconds: 2592000 },
  { label: "Permanent", seconds: null },
];
function Y1($) {
  return G("span.mod-role", { dataset: { role: $ } }, $);
}
function H6($, Q = 240) {
  let J;
  try {
    J = JSON.stringify($);
  } catch {
    J = String($);
  }
  if (!J) return "{}";
  return J.length > Q ? J.slice(0, Q) + "..." : J;
}
function G0($) {
  return G("p.error.noicon", $);
}
async function u($) {
  try {
    return (await $.text()) || `HTTP ${$.status} ${$.statusText}`;
  } catch {
    return `HTTP ${$.status} ${$.statusText}`;
  }
}
function P6($) {
  let Q = G("button.btn.mod-undo", "Undo", {
    async onclick() {
      Q.disabled = !0;
      let J = await X6($);
      if (!J.ok) {
        ((Q.disabled = !1), h$(J.status === 410 ? "The undo window has passed." : "Undo failed."));
        return;
      }
      let Y = 0;
      try {
        Y = (await J.json()).restored ?? 0;
      } catch {}
      (h$(`Restored ${Y} pixel${Y === 1 ? "" : "s"}.`), p());
    },
  });
  return Q;
}
var c5 = 0,
  V6 = 1,
  R6 = 2,
  hG = "#ff3b3b",
  mG = "rgba(8,8,12,0.75)",
  G$ = null;
function NG() {
  if (G$) return G$;
  return ((G$ = G("canvas.ghost-layer", { width: f, height: M0 })), u$.append(G$), G$);
}
function Q7($, Q) {
  let J = NG(),
    Y = J.getContext("2d");
  (Y.clearRect(0, 0, J.width, J.height), (Y.fillStyle = mG), Y.fillRect(0, 0, J.width, J.height));
  for (let q = 0; q < $.length; q++) {
    let { pos: Z, color: K } = $[q],
      W = Z % f,
      F = (Z / f) | 0;
    if (W < 0 || W >= f || F < 0 || F >= M0) continue;
    Y.clearRect(W, F, 1, 1);
    let H = Q[q];
    if (H === R6) ((Y.globalAlpha = 0.55), (Y.fillStyle = hG));
    else ((Y.globalAlpha = H === V6 ? 0.28 : 1), (Y.fillStyle = X0[K]?.hex ?? "#ff00ff"));
    Y.fillRect(W, F, 1, 1);
  }
  ((Y.globalAlpha = 1), (J.style.display = "block"));
}
function b5() {
  if (!G$) return;
  (G$.getContext("2d").clearRect(0, 0, G$.width, G$.height), (G$.style.display = "none"));
}
function G1($) {
  if (!$.length) return null;
  let Q = 1 / 0,
    J = 1 / 0,
    Y = -1 / 0,
    q = -1 / 0;
  for (let { pos: Z } of $) {
    let K = Z % f,
      W = (Z / f) | 0;
    if (K < Q) Q = K;
    if (W < J) J = W;
    if (K > Y) Y = K;
    if (W > q) q = W;
  }
  return { x: Q, y: J, width: Y - Q + 1, height: q - J + 1 };
}
var J7 = 5;
function M6($) {
  let Q = new DataView($.buffer, $.byteOffset, $.byteLength),
    J = ($.byteLength / J7) | 0,
    Y = new Array(J);
  for (let q = 0; q < J; q++) {
    let Z = q * J7;
    Y[q] = { pos: Q.getUint32(Z, !0), color: $[Z + 4] };
  }
  return Y;
}
var OG = 48;
function M8($, Q = OG) {
  let J = G("canvas.mod-ph-thumb", { width: Q, height: Q }),
    Y = J.getContext("2d"),
    q = G1($);
  if (!q) return J;
  let Z = Math.max(1, Math.floor(Math.min(Q / q.width, Q / q.height))),
    K = Math.floor((Q - q.width * Z) / 2),
    W = Math.floor((Q - q.height * Z) / 2);
  for (let { pos: F, color: H } of $) {
    let X = F % f,
      j = (F / f) | 0;
    ((Y.fillStyle = X0[H]?.hex ?? "#ff00ff"),
      Y.fillRect(K + (X - q.x) * Z, W + (j - q.y) * Z, Z, Z));
  }
  return J;
}
var BG = 360;
function Y7($, Q = 0) {
  if (!$.length) return;
  let J = Math.max(0, Math.min(Q, $.length - 1)),
    Y = G("span"),
    q = G("div.mod-carousel-stage"),
    Z = G("div.mod-carousel-caption"),
    K = () => {
      let P = $[J];
      (Y.replaceChildren(`Flagged draws (${J + 1} / ${$.length})`),
        q.replaceChildren(M8(P.pixels, BG)),
        Z.replaceChildren(P.label));
    },
    W = (P) => {
      ((J = (J + P + $.length) % $.length), K());
    },
    F = () => {
      (document.removeEventListener("keydown", H, !0), j.remove());
    },
    H = (P) => {
      if (P.key === "Escape") (P.stopPropagation(), F());
      else if (P.key === "ArrowLeft") (P.stopPropagation(), W(-1));
      else if (P.key === "ArrowRight") (P.stopPropagation(), W(1));
    },
    X = $.length > 1,
    j = G(
      "div.modal-bg.confirm-bg.mod-carousel-bg",
      G(
        "div.modal-container",
        G("div.modal-title", Y, $$("close", { ariaLabel: "Close", onclick: F })),
        G(
          "div.modal-content",
          G(
            "div.mod-carousel",
            X ? G("button.btn.mod-carousel-nav", "Prev", { onclick: () => W(-1) }) : "",
            q,
            X ? G("button.btn.mod-carousel-nav", "Next", { onclick: () => W(1) }) : "",
          ),
          Z,
        ),
      ),
    );
  (j.addEventListener("click", (P) => {
    if (P.target === j) F();
  }),
    document.addEventListener("keydown", H, !0),
    document.body.append(j),
    K());
}
var G7 = !1;
function q7() {
  if (G7) return;
  G7 = !0;
  let $ = new y(
    "Update required",
    G(
      "div.version-mismatch",
      G(
        "p",
        "The Wall was just updated and this tab is running an older version. Reload to keep going.",
      ),
      G(
        "p.subtle",
        "Heads up: anything you've drawn but not submitted will be lost. If a reload doesn't fix it, clear your cache and reload again.",
      ),
      G("div.btn-container", G("button.btn", "Reload now", { onclick: () => location.reload() })),
    ),
  );
  $.lockLevel = 1;
}
var f5 = /^[a-z0-9_.-]{3,16}$/,
  SG = /^[_.-]+$/;
function q1($) {
  if (!$) return "Missing username";
  if ($.length < 3) return "Must be at least 3 letters long";
  if ($.length > 16) return "Must not be longer than 16 letters";
  if (!f5.test($))
    return "Can only contain lowercase letters, digits, underscores, dashes and dots.";
  if (SG.test($)) return "This username is blacklisted.";
}
async function Z7($) {
  let Q = q1($);
  if (Q) throw new Error(Q);
  let J = await N.user.setup.$post({ json: { username: $ } });
  if (J.status != 200) {
    let Y = await J.text();
    throw new Error(Y);
  }
  (localStorage.setItem("auth-token", b0.token), location.reload());
}
function z6() {
  let $ = G("p.warning"),
    Q = "",
    J = !1;
  new y(
    "Setup",
    G(
      "div.welcome-modal",
      G("p.success", "Welcome to The Wall!"),
      G("p", "Please choose your username"),
      G("input.input.box", {
        type: "text",
        placeholder: "Username...",
        maxLength: 16,
        oninput(Y) {
          let q = Y.target,
            Z = q.value.replace(/[^a-z0-9_.-]/g, "");
          if (q.value != Z) q.value = Z;
          Q = Z;
        },
      }),
      G(
        "div.checkbox",
        G("input#tos_checkbox", { type: "checkbox" }),
        G(
          "label",
          { htmlFor: "tos_checkbox" },
          G("span", "I've read and agree to the "),
          G("a.link", "Privacy Policy & ToS", { target: "_blank", href: "/privacy.html" }),
        ),
      ),
      $,
      G(
        "div.btn-container",
        G("button.btn", "Confirm", {
          async onclick() {
            if (J) return;
            if (!l("input#tos_checkbox")?.checked) {
              $.textContent = "You need to agree with our Privacy Policy/ToS!";
              return;
            }
            (Z0(), ($.textContent = ""), (J = !0));
            try {
              await Z7(Q);
            } catch (Y) {
              (($.textContent = Y.message || "Something went wrong"), (J = !1));
            }
            $1();
          },
        }),
      ),
    ),
  ).onClose(() => {
    return !1;
  });
}
var C6 = G("p.warning"),
  z8 = "",
  L6 = !0,
  k6 = "";
function F7() {
  z8 = "";
}
async function W7() {
  if (!k6) {
    let J = await (await N.auth.turnstile.$get()).json();
    if (((k6 = J.sitekey || "none"), !J.required || !J.sitekey)) L6 = !1;
  }
  if (!L6) return;
  let $ = window.turnstile;
  if (!$) return alert("error: Turnstile API didn't load, can't show captcha");
  $.render("#captcha-container", {
    sitekey: k6,
    theme: x.a11y.darkTheme ? "dark" : "light",
    size: "flexible",
    callback(Q) {
      ((C6.textContent = ""), (z8 = Q));
    },
  });
}
function K7() {
  if (((C6.textContent = ""), L6 && !z8))
    return ((k6 = ""), (L6 = !0), W7(), (C6.textContent = "You need to complete the captcha!"), !0);
}
function o$($) {
  (new y(
    "Log In",
    G(
      "div.login-modal",
      $,
      G("p", "Choose your login method"),
      G("div#captcha-container", { onmouseenter: r8, onmouseleave: Q6 }),
      O5("discord", "Discord", "#5865F2", "#fff", {
        ariaLabel: "Authenticate with Discord",
        onclick() {
          if (K7()) return;
          U6("discord", "Discord");
        },
      }),
      O5("google", "Google", "#F1F3F4", "#000", {
        ariaLabel: "Authenticate with Google",
        onclick() {
          if (K7()) return;
          U6("google", "Google");
        },
      }),
      C6,
      J0.devLogin === !0 &&
        G("button.btn.dev-login", "Dev login (staff)", {
          ariaLabel: "Dev login",
          onclick() {
            U6("dev", "Dev");
          },
        }),
      G("div.btn-container", G("button.btn", "Cancel", { onclick: p })),
    ),
  ),
    setTimeout(W7, 100));
}
function X7($) {
  if (!f5.test($)) return;
  o$(G("div.success", G("b", $), " has invited you to The Wall!"));
}
function j7($) {
  if (!$.is_banned) return;
  (H7(),
    new y(
      "Oops!",
      G(
        "div.modal.error-modal",
        G("p", "You have been banned!"),
        G("p.error", $.is_banned.reason || "<Reason not specified>"),
        G("p", "Expires: ", G("b", t1($.is_banned.until))),
      ),
    ).onClose(() => !1));
}
async function l5() {
  let $ = w$();
  if (!$) return null;
  i8.Authorization = $;
  let Q = await N.user.me.$get();
  if (Q.status != 200) return !1;
  let J = await Q.json();
  if (!J) return !1;
  return J;
}
async function P7() {
  let $ = await l5();
  if ($) {
    if (((R.token = w$()), R.setUser($), $.is_banned)) return j7($);
    if ($.is_new) return z6();
    k8();
    return;
  }
  if ((m$(), $ == !1)) o$(G("p.warning", "Session expired, please log in again!"));
}
var b0 = { started: !1, status: "", token: "" };
window.addEventListener("message", ($) => {
  if (!b0.started) return;
  if ($.origin != J0.url.web) return;
  if ($.data.type == "auth_modal_state") ((b0.status = $.data.status), (b0.token = $.data.token));
});
function m$() {
  ((i8.Authorization = ""),
    localStorage.removeItem("auth-token"),
    (b0.token = ""),
    (R.token = null),
    (R.user = null));
}
function V7() {
  (m$(), location.reload());
}
async function U6($, Q) {
  if (!z8) return alert("Missing turnstile token");
  Z0();
  let J = await N.auth.login[":provider"].$post({
    param: { provider: $ },
    json: { turnstileToken: z8 },
  });
  if ((F7(), !J.ok)) return Y0("Captcha failed!", await J.text());
  let Y = await J.json(),
    q = 485,
    Z = 645,
    K = window.open(
      Y.redirectURL,
      void 0,
      `popup,width=${q},height=${Z},left=${Math.floor(screen.width / 2 - q / 2)},top=${Math.floor(screen.height / 2 - Z / 2)}`,
    );
  if (!K) {
    Y0("Failed to open a pop-up window...", "Make sure you allowed us to open pop-up windows!");
    return;
  }
  (new y(
    "Auth",
    G(
      "div",
      "Authenticating...",
      G(
        "p.notice.noicon",
        `A pop-up window should have been opened for you to complete authentication using ${Q}.`,
        { style: { maxWidth: "600px" } },
      ),
    ),
  ).onClose(() => !1),
    (b0.started = !0),
    _G(K));
}
function _G($) {
  let Q = setInterval(() => {
    if ($.closed) (clearInterval(Q), yG());
  }, 500);
}
async function yG() {
  if (!b0.status) {
    Y0("Authentication aborted");
    return;
  }
  if (b0.status != "200")
    return Y0("Authentication failed!", `Server responded with error code ${b0.status}`);
  localStorage.setItem("auth-token", b0.token);
  let $ = await l5();
  if (!$)
    return (m$(), Y0("Authentication failed!", "Could not fetch the user after authenticating"));
  if ($.is_new) z6();
  else ((b0.started = !1), location.reload());
}
function d5() {
  let $ = -D.x / D.zoom,
    Q = -D.y / D.zoom,
    J = window.innerWidth / D.zoom,
    Y = window.innerHeight / D.zoom;
  return {
    x: Math.max($, 0),
    y: Math.max(Q, 0),
    x2: Math.min($ + J, $0.width),
    y2: Math.min(Q + Y, $0.height),
  };
}
function vG() {
  let $ = d5();
  return {
    x: Math.floor($.x / C0),
    y: Math.floor($.y / C0),
    x2: Math.floor($.x2 / C0),
    y2: Math.floor($.y2 / C0),
  };
}
function R7() {
  let $ = vG(),
    Q = new Set(),
    J = 4;
  for (let Y = $.x - 4; Y <= $.x2 + 4; Y++)
    for (let q = $.y - 4; q <= $.y2 + 4; q++) {
      if (Y < 0 || q < 0 || Y >= X8 || q >= g0) continue;
      if (Q.size > 1000) return new Set();
      Q.add(Y * g0 + q);
    }
  return Q;
}
function u5($, Q, J = D.viewport) {
  return $ < J.x || Q < J.y || $ > J.x2 || Q > J.y2;
}
var Z1 = new Set(),
  gG = 10,
  M7 = 0.05,
  xG = 1e6,
  z7 = performance.now();
function k7($) {
  let Q = ($ - z7) / 1000,
    J = 1 - Math.exp(-gG * Q);
  z7 = $;
  for (let Y of Z1) {
    if (!Y.element) {
      Z1.delete(Y);
      continue;
    }
    let q = Y.moveX - Y.x,
      Z = Y.moveY - Y.y,
      K = q * q + Z * Z;
    if ((Math.abs(q) < M7 && Math.abs(Z) < M7) || K > xG)
      ((Y.x = Y.moveX), (Y.y = Y.moveY), Z1.delete(Y));
    else ((Y.x += q * J), (Y.y += Z * J));
    D6(Y, Y.x, Y.y);
  }
  requestAnimationFrame(k7);
}
function U7($, Q, J) {
  let Y = V0.get($);
  if (!Y) return;
  if (u5(Y.x, Y.y) && u5(Q, J)) {
    (D6(Y, Q, J), Z1.delete(Y));
    return;
  }
  (Z1.add(Y), (Y.moveX = Q), (Y.moveY = J));
}
requestAnimationFrame(k7);
var V0 = new Map(),
  n$ = G("div.cursors"),
  K1 = G("div.cursor-overflow");
K1.style.display = "none";
n$.append(K1);
function L7($) {
  if ($ > 0) ((K1.textContent = `+${$} more here`), (K1.style.display = ""));
  else K1.style.display = "none";
}
var pG = 50,
  F1 = new Set(),
  U8 = new Set(),
  D7 = new Set(),
  A7 = { id: -1, username: "", cursor_sprite: 0, x: 0, y: 0, moveX: 0, moveY: 0, partial: !0 };
function T7() {
  for (let $ of V0.values()) if ($.element) $.element.remove();
  V0.clear();
}
function o5($) {
  if (x.a11y.hideCursors) return;
  if ($.username == R.user?.username || $.id == R.connectionId) return;
  let Q = V0.get($.id),
    J =
      !!Q &&
      !Q.partial &&
      (Q.cursor_sprite !== $.cursor_sprite ||
        Q.clan_name !== $.clan_name ||
        Q.username !== $.username),
    Y = {
      ...A7,
      ...(Q || {}),
      id: $.id,
      username: $.username,
      cursor_sprite: $.cursor_sprite,
      clan_id: $.clan_id,
      clan_name: $.clan_name,
      partial: !1,
    };
  if ((V0.set($.id, Y), Q?.element && Q.partial)) {
    let q = Q.element.querySelector("img");
    if ((Q.element.append(t5(Y)), q)) q.src = Q$($.cursor_sprite);
  } else if (Q?.element && J) cG(Y);
}
function cG($) {
  if (!$.element) return;
  let Q = $.element.querySelector("img");
  if (Q) Q.src = Q$($.cursor_sprite);
  ($.element.querySelector(".chat-bubble")?.remove(), $.element.append(t5($)));
}
function bG($) {
  if (V0.has($) || $ == R.connectionId) return;
  let Q = { ...A7, id: $ };
  return (n5($), V0.set($, Q), Q);
}
function n5($) {
  if ($ === R.connectionId || V0.has($) || F1.has($) || U8.has($) || D7.has($)) return;
  F1.add($);
}
function w7() {
  if (U8.size > 0 || F1.size === 0) return null;
  let $ = [];
  for (let Q of F1) {
    if ($.length >= pG) break;
    $.push(Q);
  }
  for (let Q of $) (F1.delete(Q), U8.add(Q));
  return $;
}
function I7($) {
  for (let Q of $) (o5(Q), U8.delete(Q.id));
  for (let Q of U8) D7.add(Q);
  U8.clear();
}
function E7($) {
  let Q = V0.get($);
  if (!Q) return;
  if (Q.element) Q.element.remove();
  V0.delete($);
}
var C7 = 0;
function h7($, Q, J = !1) {
  if (x.a11y.hideCursors) return;
  if ($ == R.connectionId) return;
  let Y = V0.get($) || bG($);
  if (!Y) return;
  ((Y.lastSeen = performance.now()), (Y.lastPos = Q));
  let q = Q % f,
    Z = Math.floor(Q / f);
  if (!Y.element)
    ((Y.element = G(
      "div.cursor",
      { dataset: { id: Y.id.toString() } },
      G("img", { draggable: !1, src: Q$(Y.cursor_sprite), alt: "⬉" }),
      !Y.partial && t5(Y),
    )),
      n$.append(Y.element),
      (Y.hidden = !1),
      (Y.element.style.zIndex = `${C7++}`));
  else if (Y.hidden) (lG(Y), (Y.element.style.zIndex = `${C7++}`));
  if (J) U7($, q, Z);
  else D6(Y, q, Z);
}
function D6($, Q, J) {
  if (!$.element) return;
  (($.element.style.translate = `${Q}px ${J}px`), ($.x = Q), ($.y = J));
}
function t5($) {
  return G("div.chat-bubble", MJ("span", $.clan_name, $.username, $));
}
function fG($) {
  if (!$.element || $.hidden) return;
  (($.element.style.opacity = "0"), ($.hidden = !0));
}
function lG($) {
  if (!$.element || !$.hidden) return;
  (($.element.style.opacity = ""), ($.hidden = !1));
}
var dG = 1e4,
  uG = 1000;
function oG() {
  let $ = performance.now() - dG;
  for (let Q of V0.values()) {
    if (!Q.element || Q.hidden) continue;
    if (Q.lastSeen === void 0 || Q.lastSeen < $) fG(Q);
  }
}
setInterval(oG, uG);
var R$ = 256,
  nG = Math.max(f, M0),
  m7 = (() => {
    let $ = 0;
    while (Math.ceil(nG / 2 ** $) > R$) $++;
    return $;
  })();
var tG = ($) => Math.ceil(Math.ceil(f / 2 ** $) / R$),
  aG = ($) => Math.ceil(Math.ceil(M0 / 2 ** $) / R$);
function a5($) {
  if ($ <= 0) return m7;
  return Math.min(m7, Math.max(0, Math.round(-Math.log2($))));
}
function O7($) {
  let Q = $.zoom || 0.000001,
    J = Math.max(0, Math.floor(-$.x / Q)),
    Y = Math.max(0, Math.floor(-$.y / Q)),
    q = Math.min(f, Math.ceil((-$.x + $.w) / Q)),
    Z = Math.min(M0, Math.ceil((-$.y + $.h) / Q));
  return { x0: J, y0: Y, x1: Math.max(J, q), y1: Math.max(Y, Z) };
}
function A6($, Q) {
  let { x0: J, y0: Y, x1: q, y1: Z } = O7($),
    K = 2 ** Q,
    W = tG(Q),
    F = aG(Q),
    H = Math.max(0, (J / K / R$) | 0),
    X = Math.max(0, (Y / K / R$) | 0),
    j = Math.min(W - 1, ((q / K - 1) / R$) | 0),
    P = Math.min(F - 1, ((Z / K - 1) / R$) | 0),
    C = [];
  for (let z = H; z <= j; z++) for (let A = X; A <= P; A++) C.push([z, A]);
  return C;
}
var N7 = 64;
function sG($) {
  let { x0: Q, y0: J, x1: Y, y1: q } = O7($),
    Z = (Q / C0) | 0,
    K = ((Y - 1) / C0) | 0,
    W = (J / C0) | 0,
    F = ((q - 1) / C0) | 0,
    H = [];
  for (let P = Z; P <= K; P++)
    for (let C = W; C <= F; C++) if (P >= 0 && C >= 0 && P < X8 && C < g0) H.push(P * g0 + C);
  if (H.length <= N7) return H;
  let X = (Q + Y) / 2 / C0,
    j = (J + q) / 2 / C0;
  return H.map((P) => {
    let C = (P / g0) | 0,
      z = P % g0,
      A = C + 0.5 - X,
      v = z + 0.5 - j;
    return [P, A * A + v * v];
  })
    .sort((P, C) => P[1] - C[1])
    .slice(0, N7)
    .map((P) => P[0]);
}
function rG() {
  let $ = globalThis.navigator?.connection;
  if (!$) return !1;
  return (
    !!$.saveData ||
    $.effectiveType === "2g" ||
    $.effectiveType === "slow-2g" ||
    $.effectiveType === "3g"
  );
}
var iG = 0.8;
class s5 {
  hooks;
  mode = "overview";
  lastChunks = "";
  constructor($) {
    this.hooks = $;
  }
  update($) {
    let Q = $.zoom >= iG ? "live" : "overview";
    if (Q !== this.mode) ((this.mode = Q), this.hooks.setLayer(Q));
    if (this.mode === "overview") {
      if (this.lastChunks !== "") (this.hooks.setLiveChunks([]), (this.lastChunks = ""));
      let J = a5($.zoom),
        Y = A6($, J);
      for (let [q, Z] of Y) this.hooks.drawTile(J, q, Z);
      if (!rG() && J > 0)
        for (let [q, Z] of A6($, J - 1).slice(0, 16)) this.hooks.drawTile(J - 1, q, Z);
    } else {
      let J = sG($),
        Y = J.join(",");
      if (Y !== this.lastChunks) (this.hooks.setLiveChunks(J), (this.lastChunks = Y));
    }
  }
}
function eG() {
  let $ = navigator,
    Q = $.hardwareConcurrency ?? 4,
    J = $.deviceMemory ?? 4,
    Y = !!$.connection?.saveData,
    q = matchMedia?.("(pointer: coarse)")?.matches ?? !1,
    Z = matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? !1;
  if (Y || Z) return 24;
  if (q || Q <= 4 || J <= 4) return 40;
  if (Q >= 8 && J >= 8) return 150;
  return 80;
}
var _7 = eG(),
  B7 = Math.min(300, Math.round(_7 * 2)),
  t$ = _7,
  T6 = 16.7,
  r5 = performance.now(),
  S7 = r5;
function y7($) {
  let Q = $ - r5;
  if (((r5 = $), Q > 0 && Q < 1000 && document.visibilityState === "visible")) {
    if (((T6 += (Q - T6) * 0.1), $ - S7 > 1000)) {
      if (((S7 = $), T6 > 22 && t$ > 8)) t$ = Math.max(8, Math.round(t$ * 0.7));
      else if (T6 < 13 && t$ < B7) t$ = Math.min(B7, Math.round(t$ * 1.15) + 1);
    }
  }
  requestAnimationFrame(y7);
}
requestAnimationFrame(y7);
function v7() {
  return t$ | 0;
}
var a$ = new Set(),
  i5 = -1,
  g7 = null;
function x7($) {
  g7 = new Set($);
}
function p7() {
  ((a$ = new Set()), (i5 = -1));
}
function $q($) {
  if ($.size != a$.size) return !0;
  for (let Q of $) if (!a$.has(Q)) return !0;
  for (let Q of a$) if (!$.has(Q)) return !0;
  return !1;
}
function c7() {
  if (!R.user || !K0) return;
  let $ = R.cursorX >= 0 && R.cursorY >= 0,
    Q = -1,
    J = -1;
  if ($) {
    let K = Math.min(R.cursorX, f - 1),
      W = Math.min(R.cursorY, M0 - 1);
    Q = W * f + K;
    let F = Math.floor(K / C0),
      H = Math.floor(W / C0);
    J = F * g0 + H;
  }
  let Y = g7 ?? R7(),
    q = $q(Y),
    Z = w7();
  if (i5 != Q || q || Z)
    ((i5 = Q),
      (a$ = Y),
      e5(3, {
        cursorPos: Q,
        cursorChunk: J,
        subscribe: q ? [...Y] : void 0,
        lookupUsers: Z ?? void 0,
        cursorBudget: v7(),
      }));
}
var GQ = J0.url?.tileBase?.replace(/\/$/, ""),
  r$ = !!J0.url?.ws && !!GQ,
  qQ = G("img.canvas-snapshot", { draggable: !1, decoding: "async" }),
  E6 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" });
E6.style.opacity = "0";
var H1 = G("div.canvas-snapshot-wrap", qQ, E6);
if (!r$) H1.style.display = "none";
var ZQ = 400;
qQ.style.transition = `opacity ${ZQ}ms ease-out`;
E6.style.transition = `opacity ${ZQ}ms ease-out`;
var w6 = qQ,
  C8 = E6,
  h6 = G("div.canvas-tile-grid");
if (!r$) h6.style.display = "none";
var s$ = null,
  m6 = "overview",
  JQ = 1e4,
  $Q = !1,
  b7 = "",
  f7 = null;
async function I6() {
  if (!r$ || $Q || m6 !== "overview" || document.hidden) return;
  $Q = !0;
  try {
    let $ = await fetch(`${GQ}/snapshot.png`, { cache: "no-cache" });
    if (!$.ok) return;
    let Q = $.headers.get("last-modified") ?? "";
    if (Q && Q === b7) return;
    b7 = Q;
    let J = await $.blob(),
      Y = URL.createObjectURL(J);
    C8.src = Y;
    try {
      await C8.decode();
    } catch {}
    (H1.appendChild(C8),
      (C8.style.opacity = "1"),
      await new Promise((Z) => setTimeout(Z, ZQ + 60)));
    let q = f7;
    if (((f7 = Y), (w6.style.opacity = "0"), (w6.src = ""), q)) URL.revokeObjectURL(q);
    [w6, C8] = [C8, w6];
  } catch {
  } finally {
    $Q = !1;
  }
}
var N$ = new Map(),
  L8 = new Set(),
  X1 = new Map(),
  Qq = 8000;
function u7($, Q, J) {
  return `${GQ}/tiles/${$}/${Q}/${J}.png?v=${Math.floor(Date.now() / JQ)}`;
}
function YQ($) {
  if (!r$) return;
  if (m6 === "overview") {
    if (N$.size) {
      for (let K of N$.values()) K.remove();
      (N$.clear(), L8.clear());
    }
    return;
  }
  let Q = a5($.zoom),
    J = R$ * 2 ** Q,
    Y = A6($, Q),
    q = new Set();
  for (let [K, W] of Y) {
    let F = `${Q}/${K}/${W}`;
    if ((q.add(F), !N$.has(F))) {
      let H = document.createElement("img");
      ((H.className = "canvas-tile"),
        (H.decoding = "async"),
        (H.draggable = !1),
        (H.style.left = `${K * J}px`),
        (H.style.top = `${W * J}px`),
        (H.style.width = `${J}px`),
        (H.style.height = `${J}px`),
        L8.add(F));
      let X = setTimeout(() => {
        if (L8.delete(F)) j1();
      }, Qq);
      X1.set(F, X);
      let j = () => {
        let P = X1.get(F);
        if (P !== void 0) (clearTimeout(P), X1.delete(F));
        L8.delete(F);
      };
      ((H.onload = () => {
        (H.classList.add("loaded"), (H.style.visibility = ""), j(), j1());
      }),
        (H.onerror = () => {
          ((H.style.visibility = "hidden"), j(), j1());
        }),
        (H.src = u7(Q, K, W)),
        h6.appendChild(H),
        N$.set(F, H));
    }
  }
  let Z = !1;
  for (let [K, W] of N$)
    if (!q.has(K)) {
      (W.remove(), N$.delete(K));
      let F = X1.get(K);
      if (F !== void 0) (clearTimeout(F), X1.delete(K));
      if (L8.delete(K)) Z = !0;
    }
  if (Z) j1();
}
function l7() {
  if (!r$ || m6 !== "live" || document.hidden) return;
  for (let [$, Q] of N$) {
    let [J, Y, q] = $.split("/").map(Number);
    Q.src = u7(J, Y, q);
  }
}
var QQ = 0.9,
  d7 = 1.4;
function Jq($) {
  if ($ <= QQ) return 1;
  if ($ >= d7) return 0;
  return 1 - ($ - QQ) / (d7 - QQ);
}
function j1() {
  if (!s$) return;
  H1.style.opacity = L8.size > 0 ? "1" : String(Jq(s$.zoom));
}
var Yq = new s5({
  async drawTile() {
    return !0;
  },
  setLiveChunks($) {
    x7($);
  },
  setLayer($) {
    if (((m6 = $), $ === "overview")) {
      if ((I6(), s$)) YQ(s$);
    } else if (s$) YQ(s$);
  },
});
function o7() {}
function n7($) {
  if (!r$) return;
  ((s$ = $), Yq.update($), YQ($), j1());
}
if (r$)
  (I6(),
    setInterval(I6, JQ),
    setInterval(l7, JQ),
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) (I6(), l7());
    }));
var O$ = [],
  t7 = null;
function KQ() {
  t7?.();
}
var q$ = {
  bind($) {
    ((t7 = $), $());
  },
  get unread() {
    return O$;
  },
  get unreadCount() {
    return O$.length;
  },
  seed($) {
    O$.length = 0;
    let Q = $?.unread_notifications;
    if (Q?.length) O$.push(...Q);
    KQ();
  },
  receive($) {
    if (O$.some((Q) => Q.id === $.id)) return;
    (O$.unshift({
      id: $.id,
      kind: $.kind,
      title: $.title,
      body: $.body,
      data: $.data,
      createdAt: $.createdAt,
    }),
      KQ());
  },
  async markAllRead() {
    if (!O$.length) return;
    if (((O$.length = 0), KQ(), !R.token)) return;
    try {
      await N.user.notifications.read.$post({ json: {} });
    } catch {}
  },
};
var Gq = new Map(),
  M$ = new Uint8Array(l$).fill(255),
  qq = !!J0.url?.ws,
  a7 = -1;
class s7 {
  x;
  y;
  worldX;
  worldY;
  pos;
  constructor($, Q) {
    this.x = $;
    this.y = Q;
    ((this.worldX = $ * C0),
      (this.worldY = Q * C0),
      (this.pos = $ * g0 + Q),
      Gq.set(this.pos, this));
  }
}
function r7() {
  for (let $ = 0; $ < X8; $++) for (let Q = 0; Q < g0; Q++) new s7($, Q);
}
function D8($, Q) {
  if (!Number.isSafeInteger($) || $ < 0 || $ >= l$) return !1;
  let J = $ % f,
    Y = Math.floor($ / f),
    q = X0[Q];
  if (!q) return ((M$[$] = Q), B$.clearRect(J, Y, 1, 1), !0);
  if (a7 != q.color) ((B$.fillStyle = q.hex), (a7 = q.color));
  return ((M$[$] = Q), B$.fillRect(J, Y, 1, 1), !0);
}
function N6($, Q) {
  let J = Q * f + $;
  if (M$[J] == 255)
    if (qq) M$[J] = 254;
    else {
      let { data: Y } = B$.getImageData($, Q, 1, 1),
        q = (Y[0] << 16) | (Y[1] << 8) | Y[2];
      M$[J] = R5.get(q) ?? 254;
    }
  return X0[M$[J]];
}
function Zq($, Q) {
  let J = (Math.imul($, 374761393) + Math.imul(Q, 668265263)) | 0;
  return ((J = Math.imul(J ^ (J >>> 13), 1274126177)), (J ^= J >>> 16), (J >>> 0) / 4294967296);
}
function i7($, Q) {
  if (Q >= l1) return !1;
  let J = l1 - M5;
  if (Q < J) return !0;
  let Y = (l1 - Q) / M5;
  return Zq($, Q) < Y;
}
function e7() {
  new y("Chat", G("div.chat-modal.nopad", P1, FQ(!0))).onClose(() => {
    l(".chat-log-wrapper").append(P1);
  });
}
var O6 = null,
  $2 = [
    { id: "x", name: "X (formerly Twitter)", url: "https://x.com/intent/tweet" },
    { id: "bluesky", name: "Bluesky", url: "https://bsky.app/intent/compose" },
    { id: "mastodon", name: "Mastodon", url: "https://mastodon.social/share" },
    { id: "reddit", name: "Reddit", url: "https://www.reddit.com/submit" },
  ];
function Q2($, Q) {
  let J = new URLSearchParams();
  if ($.name == "Reddit") (J.set("title", "#filianislost"), J.set("url", Q));
  else J.set("text", `#filianislost ${Q}`);
  return `${$.url}?${J.toString()}`;
}
async function WQ() {
  if (O6) return O6;
  Z0();
  let $ = await N.user.shareLink.$post();
  if (!$.ok) {
    m0($, "Could not generate the referral link");
    return;
  }
  let Q = await $.json();
  return (
    (O6 = Q),
    setTimeout(() => {
      O6 = null;
    }, 60000),
    Q
  );
}
function J2($) {
  if (!R.user) return "";
  let Q = new URLSearchParams();
  if ((Q.set("c", $.referral.code), $.imageCode)) Q.set("im", $.imageCode);
  if ($.x && $.y) Q.set("p", `${$.x},${$.y}`);
  return `${J0.url.share}/${R.user.username}?${Q.toString()}`;
}
var B6 = null;
function XQ($, Q = !1) {
  let J = J2($),
    Y = `Share Website > ${$.imageCode ? "Image" : "Link"}`;
  new y(
    Y,
    G(
      "div.share-modal.link",
      G("p", Q ? "You have already generated an image in the past minute!" : "Here's your link!"),
      G("span.box.input.link.tooltip", J, {
        dataset: { tooltip: "Click to copy!" },
        onclick() {
          N5(J);
        },
      }),
      $.imageLink && G("img.preview", { src: $.imageLink }),
      G("p.desc", "Post it on..."),
      G(
        "div.platforms",
        $2.map((q) =>
          G(
            "a.platform.tooltip",
            {
              target: "_blank",
              href: Q2(q, `${J}&utm_source=${q.id}`),
              dataset: { tooltip: q.name },
            },
            G("img", { src: `/static/icon/platform/${q.id}.png`, alt: q.name, draggable: !1 }),
          ),
        ),
      ),
      V$,
    ),
  );
}
function Kq() {
  if (B6) return XQ(B6, !0);
  (R.setTool(4), S$(4), p(!0));
}
async function jQ($) {
  if ((R.setTool(0), S$(0), t0(), $)) return V1();
  (Z0(), N0());
  let { x: Q, y: J, x2: Y, y2: q } = D.viewport,
    Z = Y - Q,
    K = q - J,
    W = Math.floor(Q + Z / 2),
    F = Math.floor(J + K / 2),
    H = await N.user.shareCanvas.$post({
      json: {
        x: Math.floor(Q),
        y: Math.floor(J),
        width: Math.floor(Z) || 1,
        height: Math.floor(K) || 1,
      },
    });
  if (!H.ok) return m0(H, "Could not generate the image");
  let { code: X, url: j } = await H.json(),
    C = { referral: await WQ(), imageCode: X, imageLink: j, x: W, y: F };
  ((B6 = C),
    setTimeout(() => {
      B6 = null;
    }, 60000),
    p(!0),
    XQ(C));
}
async function V1() {
  let $ = await WQ();
  if (!$) return;
  new y(
    "Share Website",
    G(
      "div.share-modal",
      G(
        "p.success",
        `Every player who signs up with your link will reward you with ${j8(o8.ReferralCode)}!`,
      ),
      G(
        "div.btn-container.vertical",
        G("button.btn.share", "Share Link", { onclick: () => XQ({ referral: $ }) }),
        G("button.btn.share", "Share Image", { onclick: () => Kq() }),
        G("button.btn", "Cancel", { onclick: () => p() }),
      ),
      G("p.desc", `You have invited ${A0($.uses, "user")} so far!`),
    ),
  );
}
function Y2() {
  return new y(
    "Out of paint!",
    G(
      "div.out-of-paint",
      G("p.c", G("b", "You have used up some paint, time to submit!")),
      G("p.c.desc", `You have ${j8(R.paintRemaining + R.localPaintIncrement)} remaining.`),
      G(
        "p.notice.noicon",
        "Paint does not get consumed until you submit your changes. Submit your drawing to the canvas, or undo your changes.",
      ),
      G(
        "div.btn-container",
        G("button.btn.primary", "Submit", {
          onclick: async () => {
            (Z0(), await _6(), p(!0));
          },
        }),
        G("button.btn", "Cancel", { onclick: () => p() }),
      ),
    ),
  );
}
function S6() {
  return new y(
    "Out of paint?",
    G(
      "div.out-of-paint",
      G("b", "You can share our website to get more paint!"),
      G("p.success.noicon", `Each invited user will reward you with ${j8(o8.ReferralCode)}!`),
      G(
        "p.desc",
        `You can also wait for a refill to get ${j8(o8.TimePassed)}.`,
        G("br"),
        "The timer is shown in the bottom bar.",
      ),
      G("div.btn-container.vertical", G("button.btn.share", "Share Website", { onclick: V1 }), a8),
    ),
  );
}
var A8 = G("div.box.outset.status-text.warn"),
  e$ = G("div.box.outset.status-text"),
  i$ = 0,
  _$ = !1,
  HQ = 0;
function t0() {
  if (R.openAt && Date.now() + R.clockOffset < R.openAt) {
    if (_$) ((A8.textContent = ""), (_$ = !1));
    (Xq(), (HQ = R.activeTool));
    return;
  }
  if (R.activeTool == 1) Fq(HQ != R.activeTool);
  else if (_$) ((A8.textContent = ""), (_$ = !1));
  if (R.activeTool == 4) Wq();
  else if (R.paintRemaining == 0 && R.nextRefill) jq();
  else if (O0.size || p0.length) Hq();
  else G2();
  HQ = R.activeTool;
}
function Fq($ = !1) {
  let Q = D.normalizedZoom <= y6;
  if (Q && (!_$ || $)) ((_$ = !0), (A8.textContent = "Zoom in to draw!"));
  else if (_$ && !Q) {
    ((A8.textContent = ""), (_$ = !1));
    return;
  }
}
setInterval(t0, 1000);
function G2() {
  if (i$ == 0) return;
  ((e$.textContent = ""), (i$ = 0));
}
function Wq() {
  ((i$ = 4),
    e$.replaceChildren(
      G(
        "div.share-viewport",
        G("p", "Zoom into the canvas to share your artwork!"),
        G(
          "div",
          G("button.btn", "Share", { onclick: () => jQ(!1) }),
          G("button.btn", "Cancel", { onclick: () => jQ(!0) }),
        ),
      ),
    ));
}
function Xq() {
  let $ = R.openAt - (Date.now() + R.clockOffset);
  ((i$ = 5), e$.replaceChildren(G("div.timer", G("p", "Drawing opens in: "), G("b", U5($)))));
}
function jq() {
  let $ = R.nextRefill - Date.now(),
    Q = U5($);
  if (((i$ = 1), $ < 1)) {
    ((R.nextRefill = 0), G2());
    return;
  }
  e$.replaceChildren(
    G(
      "div.timer",
      G(
        "p",
        G("a.link", "Out of paint!", { tabIndex: 1, onclick: () => S6() }),
        " Next refill in: ",
      ),
      G("b", Q),
    ),
  );
}
function Hq() {
  if (i$ == 2) return;
  ((i$ = 2),
    e$.replaceChildren(
      G("p", "Drawing locally - Confirm to submit!"),
      G(
        "div",
        G(
          "button.btn.icon.confirm-draw-btn",
          G("img", { src: "/static/icon/confirm.png", draggable: !1 }),
          G("span", "Confirm"),
          { tabIndex: 1, onclick: _6 },
        ),
        G(
          "button.btn.icon.confirm-draw-btn",
          G("img", { src: "/static/icon/cancel.png", draggable: !1 }),
          G("span", "Cancel"),
          { tabIndex: 1, onclick: q2 },
        ),
      ),
    ));
}
var v6 = !1,
  Z2 = 1,
  PQ = 10,
  K2 = ["tiny", "small", "medium", "large"],
  VQ = 2,
  RQ = ($, Q, J) =>
    G(
      "button.btn.swatch.icon.tool.tooltip",
      { id: `tool-${Q}`, dataset: { tooltip: J }, onclick: () => S$($) },
      G("img", { src: `/static/icon/tool/${Q}.png`, draggable: !1 }),
    ),
  Pq = () => {
    let $ = G("img", { draggable: !1 }),
      Q = G("input.tooltip", {
        type: "range",
        min: Z2,
        max: PQ,
        oninput(Y) {
          let q = Y.target,
            Z = parseInt(Q.value);
          ((q.dataset.tooltip = `Brush Size: ${Z}`), (x.lastBrushSize = Z + VQ), J(Z), T0());
        },
      }),
      J = (Y) => {
        let q = K2[Math.floor((Y / (PQ + 1)) * K2.length)];
        (($.src = `/static/icon/size/${q}.png`),
          (R.brushSize = Y + VQ),
          (Q.value = Y.toString()),
          (Q.dataset.tooltip = `Brush Size: ${Y}`));
      };
    return (
      J(Math.min(Math.max(x.lastBrushSize - VQ, Z2), PQ)),
      G(
        "div.container",
        G("div.popup.box.outset.size-control", G("div.input-container.tooltip", Q)),
        { onmouseout: () => P8() },
        G("button#brush-size-btn.btn.swatch.icon.tooltip", $, {
          dataset: { tooltip: "Brush Size" },
        }),
      )
    );
  },
  MQ = {
    0: RQ(0, "hand", "Hand Tool (Z)"),
    1: RQ(1, "spray", "Draw Tool (X)"),
    2: RQ(2, "chat", "Open Chat"),
  },
  F2 = G("div.tools", ...Object.values(MQ)),
  W2 = G(
    "div.tools",
    Pq(),
    F6(
      K6("tool/preview", {
        id: "tool-preview",
        onclick($) {
          ((v6 = !v6),
            $.target.classList.toggle("active", v6),
            ($8.style.opacity = (v6 ? 0.5 : 1).toString()),
            P8());
        },
      }),
      "Compare Mode (M)",
    ),
  );
function S$($) {
  if ((P8(), $ == 2)) {
    e7();
    return;
  }
  (n0(".tool.active").forEach((J) => J.classList.remove("active")),
    (MQ[$] ?? MQ[0]).classList.add("active"),
    R.setTool($),
    t0());
}
function Vq($) {
  let Q = Math.max(0, Math.floor((Date.now() - $) / 1000));
  if (Q < 60) return "just now";
  let J = Math.floor(Q / 60);
  if (J < 60) return `${J}m ago`;
  let Y = Math.floor(J / 60);
  if (Y < 24) return `${Y}h ago`;
  return `${Math.floor(Y / 24)}d ago`;
}
function Rq($) {
  return G(
    "div.item.box.outset",
    G(
      "div.wrapper",
      typeof $.data?.cursorId == "number" &&
        G("img", { src: `/static/cursors/generated/${$.data.cursorId}.png`, draggable: !1 }),
      G("div.content", G("div.title", $.title), $.body && G("p.body", $.body)),
    ),
    G("div.time", w0($.createdAt, Vq($.createdAt))),
  );
}
function X2() {
  let $ = [...q$.unread];
  return (
    q$.markAllRead(),
    new y(
      "Notifications",
      G(
        "div.notifications-modal",
        $.length ? G("div.list", $.map(Rq)) : G("p.desc.c", "No notifications."),
        G("div.btn-container", a8),
      ),
    )
  );
}
function j2() {
  let $ = G("span.notif-badge"),
    Q = G("img", { src: "/static/icon/notif.png", draggable: !1, alt: "bell" }),
    J = G("button.btn.swatch.tooltip.notif-indicator.icon", Q, $, {
      dataset: { tooltip: "Notifications" },
      onclick() {
        X2();
      },
    });
  return (
    q$.bind(() => {
      let Y = q$.unreadCount;
      if (Y > 0) Q.src = "/static/icon/notif-active.gif";
      else Q.src = "/static/icon/notif.png";
      (J.classList.toggle("has-unread", Y > 0),
        ($.textContent = Y > 99 ? "99+" : String(Y)),
        (J.dataset.tooltip = Y > 0 ? `${Y} new notification${Y > 1 ? "s" : ""}` : "Notifications"));
    }),
    J
  );
}
function g6() {
  new y(
    "Select Color",
    G(
      "div.color-modal",
      G(
        "div.colors",
        X0.map(($) =>
          G("button.btn.swatch.tooltip", {
            dataset: { tooltip: $.name },
            style: { backgroundColor: $.hex },
            onclick() {
              (Q8($), p());
            },
          }),
        ),
      ),
    ),
  );
}
var S0 = [...X0],
  J8 = G("div.colors.container");
function p6($) {
  let Q = S0.indexOf($);
  if (Q > -1) (S0.splice(Q, 1), S0.push($));
}
var x6 = ($) => X0.findIndex((Q) => Q.name == $);
function Mq() {
  let $ = x.lastUsedColors;
  if ($.length != S0.length) {
    let Q = x6("Red"),
      J = x6("Violet"),
      Y = X0.slice(Q, J + 1);
    (p6(X0[x6("Gray")]), p6(X0[x6("White")]));
    for (let q of Y) p6(q);
    return;
  }
  (S0.splice(0), S0.push(...$.map((Q) => X0[Q])));
}
function P2($) {
  let Q = S0[S0.length - $];
  if (!Q) return;
  Q8(Q, !1);
}
function Q8($, Q = !0) {
  if ((JJ($.hex, $.dark), R.selectedColor == $)) return;
  if (S0.indexOf($) > -1 && Q) (p6($), (x.lastUsedColors = S0.map((Y) => Y.idx)));
  ((R.selectedColor = $), zQ());
}
var zq = 54,
  kq = 9;
function H2($) {
  let Q = getComputedStyle($),
    J = $.clientWidth - parseFloat(Q.paddingLeft) - parseFloat(Q.paddingRight);
  for (let Y = 0; Y < $.children.length; Y++) {
    let q = $.children[Y];
    if (q === J8) continue;
    J -= q.getBoundingClientRect().width;
  }
  return J;
}
function zQ() {
  let $ = F6(K6("tool/colors", { id: "palette-btn", onclick: g6 }), "Palette");
  J8.replaceChildren($);
  let Q = J8.parentElement,
    J = Q ? H2(Q) : 0;
  if (J <= 0) {
    requestAnimationFrame(() => {
      if (Q && H2(Q) > 0) zQ();
    });
    return;
  }
  let Y = Math.floor(J / zq) - 1,
    q = Math.max(0, Math.min(kq, Y));
  for (let Z = 0; Z < q; Z++) {
    let K = S0[S0.length - 1 - Z],
      W = G("button.btn.swatch.tooltip", {
        tabIndex: -1,
        dataset: { tooltip: K.name },
        style: { backgroundColor: K.hex },
        onclick() {
          Q8(K, !1);
        },
      });
    J8.append(W);
  }
}
function V2() {
  (Mq(), Q8(S0[S0.length - 1], !1), R.setPaintRemaining(R.paintRemaining));
  let $ = J8.parentElement;
  if ($) {
    let Q = -1;
    new ResizeObserver(() => {
      let J = $.clientWidth;
      if (J === Q) return;
      ((Q = J), zQ());
    }).observe($);
  }
}
var kQ = G("div.hotbar-container");
function c6($) {
  kQ.replaceChildren($);
}
var R1 = G("div.hotbar.main-bar", { role: "toolbar" });
function R2() {
  (R1.append(
    G("div.status-text-container", A8, e$),
    G("div.section.left", M2(), G("div#chatbox-divider.divider"), F2, G("div.divider")),
    G("div.section.middle", d$, $J, j2()),
    G("div.section.right", G("div.divider"), W2, G("div.divider"), J8),
  ),
    R.setTool(0),
    c6(R1),
    S$(0),
    V2());
}
var $8 = G("canvas.preview-canvas", { width: f, height: M0 }),
  z$ = $8.getContext("2d"),
  O0 = new Map();
function z2() {
  ((R.localPaintIncrement = 0),
    R.setPaintRemaining(R.paintRemaining),
    z$.clearRect(0, 0, $8.width, $8.height),
    O0.clear(),
    U2());
}
function Uq() {
  z2();
}
async function k2($, Q = 0) {
  if (Q >= 5) return (console.error("Failed to submit the drawing after 5 tries."), !1);
  try {
    return (await C2($), !0);
  } catch (J) {
    return (console.error("Error submitting the drawing:", J), await k2($, Q + 1));
  }
}
async function Cq() {
  let $ = [...O0.entries()];
  for (let [Q, J] of $) D8(Q, J);
  if ((R.commitLocalPaint(), z2(), $.length === 0)) return;
  for (let Q = 0; Q < $.length; Q += d1)
    if (!(await k2($.slice(Q, Q + d1))))
      return Y0(
        "Something went wrong, sorry!",
        "Could not submit local drawing to the server after 5 tries",
      );
}
function UQ($, Q) {
  if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q) || $ < 0 || Q < 0 || $ >= f || !i7($, Q))
    return !1;
  let J = R.paintRemaining + R.localPaintIncrement,
    Y = d1 - L0 - 5,
    q = J % L0 == 0 && R.localPaintIncrement < -Y;
  if (!J || q) return (LQ(), !1);
  let Z = R.selectedColor,
    K = Q * f + $;
  if (M$[K] == 255) N6($, Q);
  if (O0.has(K)) {
    if (O0.get(K) == Z.idx) return !1;
  } else if (M$[K] == Z.idx) return !1;
  if (((z$.fillStyle = Z.hex), z$.fillRect($, Q, 1, 1), !O0.has(K))) R.addLocalPaintIncrement(-1);
  return (
    a0.push({ x: $, y: Q, pos: K, oldColor: O0.get(K), newColor: Z.idx }), O0.set(K, Z.idx), !0
  );
}
async function _6() {
  try {
    (R1.classList.add("progress"), await Cq());
  } finally {
    R1.classList.remove("progress");
  }
}
async function q2() {
  if (CQ()) {
    if (!(await i("Are you sure you want to cancel your changes?"))) return;
  }
  Uq();
}
function CQ() {
  return O0.size > 500 || p0.length > 0;
}
var M1 = [],
  p0 = [],
  a0 = [];
function L2() {
  (M1.push(a0), (a0 = []), (p0 = []));
}
function U2() {
  ((M1 = []), (p0 = []), (a0 = []));
}
function DQ($, Q = !1) {
  let J = 0;
  for (let Y of $)
    if (Q) {
      if (((z$.fillStyle = X0[Y.newColor].hex), z$.fillRect(Y.x, Y.y, 1, 1), !O0.has(Y.pos))) J++;
      O0.set(Y.pos, Y.newColor);
    } else if (typeof Y.oldColor == "number")
      ((z$.fillStyle = X0[Y.oldColor].hex), z$.fillRect(Y.x, Y.y, 1, 1), O0.set(Y.pos, Y.oldColor));
    else (z$.clearRect(Y.x, Y.y, 1, 1), O0.delete(Y.pos), J++);
  return J;
}
function b6() {
  if (a0.length) {
    let J = DQ(a0);
    (R.addLocalPaintIncrement(J), (p0 = []), p0.push(a0), (a0 = []));
    return;
  }
  if (!M1.length) return;
  let $ = M1.pop(),
    Q = DQ($);
  (R.addLocalPaintIncrement(+Q), p0.push($));
}
function f6() {
  if (!p0.length) return;
  let $ = p0.pop(),
    Q = DQ($, !0);
  (M1.push($), R.addLocalPaintIncrement(-Q));
}
var AQ = new Set(),
  w8 = null,
  z1 = -1;
async function Lq() {
  return (await (await N.cursor.data.$get()).json()).map((J) => ({
    ...J,
    ...Aq(J),
    unlocked: AQ.has(J.id),
  }));
}
async function l6() {
  let Q = await (await N.cursor.inventory.$get()).json();
  AQ.clear();
  for (let J of Q.cursors) AQ.add(J);
  w8 = Q;
}
async function y$($) {
  let Q = await N.cursor.claimCursor.$post({ json: $ });
  if (Q.status != 200) return await Q.text();
  return (await l6(), null);
}
function Dq($, Q, J) {
  let Y = Math.min(Q, J);
  switch ($) {
    case "pixels_changed":
      return `Draw ${J} pixels (${Y}/${J})`;
    case "invites":
      return `Invite ${J} ${J == 1 ? "person" : "people"} (${Y}/${J})`;
    case "shared":
      return "Share the canvas to unlock";
  }
}
function Aq($) {
  let Q = $.unlock;
  if (!Q || Q.kind == "client") return { claimable: !1, tooltip: "You do not own this cursor!" };
  switch (Q.kind) {
    case "stat": {
      let J = w8.stats[Q.stat] ?? 0;
      return J >= Q.gte
        ? { claimable: !0, tooltip: "Click to claim!" }
        : { claimable: !1, tooltip: Dq(Q.stat, J, Q.gte) };
    }
    case "purchase":
      return w8.coins >= Q.cost
        ? { claimable: !0, tooltip: `Click to buy (${Q.cost} coins)` }
        : { claimable: !1, tooltip: `Costs ${Q.cost} coins` };
    case "code":
      return { claimable: !1, tooltip: "Unlocks with a secret code" };
    case "manual":
      return { claimable: !1, tooltip: "Awarded by moderators" };
  }
}
function Tq($) {
  let Q = G("div.item.box", {
    id: `item${$.id}`,
    async onclick() {
      if ($.unlocked) TQ($);
      else if ($.claimable) {
        if ($.unlock?.kind == "purchase") {
          if (!(await i(`Are you sure you want to buy this cursor for ${$.unlock.cost} coins?`)))
            return;
        }
        let J = await y$({ cursorId: $.id });
        if (J) {
          Y0(J, "Could not claim the cursor");
          return;
        }
        T8();
      }
    },
    onmouseover: () => {
      V8($.id);
    },
    onmouseleave: () => {
      V8(z1);
    },
  });
  if (!$.unlocked) {
    if (
      (Q.classList.add("tooltip", "locked"),
      (Q.dataset.tooltip = $.unlock?.tooltip || $.tooltip),
      $.claimable)
    )
      Q.classList.add("claimable");
    if ($.unlock?.kind == "purchase") Q.append(G("span.box.cost", `${$.unlock.cost} \uD83E\uDE99`));
  }
  if (x.a11y.devOverlay) Q.dataset.tooltip = `id=${$.id} tier=${$.tier} "${$.name}"`;
  return (Q.append(G("img", { src: Q$($.id), draggable: !1 })), Q);
}
function TQ($) {
  if ($.id == z1) return;
  z1 = $.id;
  let Q = l("#inv-confirm-buttons");
  if (
    (n0(".inventory .item.active").forEach((J) => J.classList.remove("active")),
    l(`#item${$.id}`).classList.add("active"),
    $.id == R.user?.cursor_id)
  )
    Q.style.display = "none";
  else Q.style.display = "";
}
function wq() {
  let $ = R.currentSprayCanSize(),
    Q = Math.floor($ / z5) || 1;
  new y(
    "Coins",
    G(
      "div.coin-modal",
      G("p.c", "You have ", zJ(w8.coins), ` coin${A0(w8.coins)}`),
      G("p.notice", `You can exchange spray cans for coins! Every ${z5} paint is one coin.`),
      G(
        "p.c",
        "Your current spray can contains ",
        G("b", $.toString()),
        " paint, ",
        "so you will receive ",
        G("b", Q.toString()),
        ` coin${A0($ == 0 ? 0 : Q)}.`,
      ),
      G(
        "div.btn-container",
        G("button.btn", "Back", { onclick: T8 }),
        G("button.btn.primary", "Sell Spray Can", {
          async onclick() {
            if (R.localPaintIncrement != 0 || p0.length) {
              Y0(
                "You cannot sell your current spray can while drawing! Please cancel or submit your local changes.",
              );
              return;
            }
            if (Q == 0) {
              Y0("Empty spray can!");
              return;
            }
            if (
              !(await i(
                `Sell your current spray can for ${A0(Q, "coin")}? The remainder will not be lost.`,
              ))
            )
              return T8();
            Z0();
            let Y = await N.cursor.buyCoins.$post();
            if (!Y.ok) {
              m0(Y);
              return;
            }
            T8();
          },
        }),
      ),
    ),
  );
}
async function T8() {
  if (!R.user) return;
  (Z0(), await l6());
  let $ = await Lq(),
    Q = $.toSorted(
      (J, Y) => Y.unlocked - J.unlocked || Y.tier - J.tier || J.name.localeCompare(Y.name),
    );
  (new y(
    "User > Inventory",
    G(
      "div.inventory.nopad",
      G(
        "div.scroll.pad",
        G("p.notice", "Click on a cursor to select it! It will be shown to all users."),
        G("br"),
        G("div.items", Q.map(Tq)),
        G("p", "More cursors coming soon!"),
      ),
      G(
        "div.box.outset.confirm-bar",
        G("button.btn", "Back", { onclick: () => p() }),
        G("button.btn", A0(Math.floor(w8.coins), "coin"), { onclick: wq }),
        G(
          "div#inv-confirm-buttons",
          { style: { display: "none" } },
          G("button.btn", "Cancel", {
            onclick() {
              TQ($[R.user.cursor_id]);
            },
          }),
          G("button.btn.primary", "Change", {
            async onclick() {
              (Z0(), await e8({ cursorId: z1 }), p(!0));
            },
          }),
        ),
      ),
    ),
  ).onClose(() => {
    ((z1 = -1), V8(R.user.cursor_id));
  }),
    requestAnimationFrame(() => {
      TQ($[R.user.cursor_id]);
    }));
}
window.freeCursor = async ($) => {
  let Q = await y$({ code: $ });
  if (Q) return (console.warn(`freeCursor: ${Q}`), !1);
  return (console.log("Unlocked! Open the inventory to equip it."), !0);
  let J =
    "You like looking for secrets, don't you? On an unrelated note, consider checking out the amazing people who made this site: https://yui.dev and https://github.com/brennenawana";
};
var wQ = new Map(),
  Z$ = ($, Q) => wQ.set($, Q);
Z$(0, ($) => {
  if (typeof $.paintRemaining == "number")
    ((R.nextRefill = $.nextRefillAt || 0), R.setPaintRemaining($.paintRemaining), t0());
});
Z$(8, ($) => {
  if ((q$.receive($), $.kind === "cursor_unlock")) l6();
});
Z$(9, () => {});
Z$(10, () => {});
Z$(3, ($) => {
  if ($.users) I7($.users);
  if ((L7($.cursorOverflow ?? 0), !$.cursors)) return;
  let Q = $.cursors,
    J =
      Q instanceof Uint8Array
        ? Q
        : Q.buffer instanceof Uint8Array
          ? Q.buffer
          : new Uint8Array(Q.buffer ?? Q),
    Y = new DataView(J.buffer, J.byteOffset, J.byteLength);
  for (let q = 0; q + 8 <= J.length; q += 8) {
    let Z = Y.getUint32(q, !0),
      K = Y.getUint32(q + 4, !0);
    h7(K, Z, !0);
  }
});
Z$(5, ($) => E7($.id));
Z$(2, ($) => {
  ((R.connectionId = $.id),
    $.users.forEach(o5),
    (R.openAt = $.openAt ?? 0),
    (R.clockOffset = $.now ? $.now - Date.now() : 0),
    D2());
});
Z$(6, ($) => {
  if ((A2($.id, $.message, $.pos, $.username, $.clanName, $.isGlobal, $.userId), $.nonce)) return;
  if (!V0.has($.id)) {
    n5($.id);
    return;
  }
  w2(V0.get($.id), $.message);
});
Z$(11, ($) => {
  T2($.userId);
});
Z$(7, async ($) => {
  let Q = 0;
  if ($.pixels) {
    let J = $.pixels,
      Y =
        J instanceof Uint8Array
          ? J
          : J.buffer instanceof Uint8Array
            ? J.buffer
            : new Uint8Array(J.buffer ?? J),
      q = new DataView(Y.buffer, Y.byteOffset, Y.byteLength);
    for (let Z = 0; Z + 5 <= Y.byteLength; Z += 5) (D8(q.getUint32(Z, !0), q.getUint8(Z + 4)), Q++);
  }
  if (Q) o7();
});
function I2() {
  let $ = G(
      "div.list.box.outset",
      G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")),
      G("div.item.box.online-modal.online-modal-loading", G("i", "Loading online users…")),
      { style: { maxHeight: "600px", overflowY: "auto", justifyContent: "unset" } },
    ),
    Q = new y(
      "Online Users",
      G(
        "div.leaderboard-modal",
        G(
          "p.online-modal-count",
          G("b#online-modal-count", j0(R.onlinePlayers || 1)),
          " players online",
        ),
        G(
          "p.online-modal-viewers",
          G("b#online-modal-viewers", j0(R.onlineViewers || 0)),
          " watching",
        ),
        $,
      ),
    );
  m2()
    .then((J) => {
      if (!Q.open) return;
      (Iq($, J.users ?? [], J.total ?? 0), h2(J.viewers ?? R.onlineViewers));
    })
    .catch(() => {
      if (!Q.open) return;
      let J = $.querySelector(".online-modal-loading");
      if (J) J.textContent = "Couldn't load the user list.";
    });
}
function Iq($, Q, J) {
  let Y = R.user?.username;
  if (Y) Q = Q.filter((X) => X.username !== Y);
  let q = (X) => {
      let j = V0.get(X.id);
      return !!j && !j.partial && !j.hidden;
    },
    Z = [...Q].sort((X, j) => {
      let P = q(X) ? 0 : 1,
        C = q(j) ? 0 : 1;
      if (P !== C) return P - C;
      return X.username.localeCompare(j.username);
    }),
    K = G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")),
    W = Z.map((X) =>
      G(
        "div.item.box.online-modal.online-modal-row.tooltip" +
          (q(X) ? ".online-modal-visible" : ""),
        {
          onclick() {
            (p(), f0({ connId: X.id, username: X.username }));
          },
        },
        G("b.tooltip", X.username, { dataset: { tooltip: "Click to jump to the user!" } }),
      ),
    );
  $.replaceChildren(K, ...W);
  let F = 1 + W.length,
    H = Math.max(0, J - F);
  if (H > 0)
    $.append(G("div.item.box.online-modal.online-modal-more", G("i", `+${j0(H)} more online`)));
}
function E2($, Q) {
  let J = l("#online-modal-count");
  if (J) J.textContent = j0($ || 1);
  if (Q !== void 0) h2(Q);
}
function h2($) {
  let Q = l("#online-modal-viewers");
  if (Q) Q.textContent = j0($ || 0);
}
var N2 = 0;
async function IQ() {
  if ((clearTimeout(N2), !K0)) return;
  N2 = setTimeout(IQ, l4);
  let $ = performance.now(),
    Q = await v$(0, {}, f4),
    J = Q.connectedUsers ?? R.onlinePlayers,
    Y = Q.viewers ?? R.onlineViewers;
  if (
    ((R.onlinePlayers = J),
    (R.onlineViewers = Y),
    (R.debug.ping = performance.now() - $),
    R.activeTool == 3)
  ) {
    let q = l("#online-player-counter");
    if (q) q.textContent = j0(J);
  }
  (E2(J, Y), B2(J, Y), I8());
}
function O2() {
  (setInterval(c7, J0.canvas.syncInterval), k1());
}
var Eq = (() => {
  let $ = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Uint8Array.prototype),
    Symbol.toStringTag,
  ).get;
  return (Q) => $.call(Q);
})();
function g$($) {
  return Eq($) === "Uint8Array";
}
function iQ($) {
  return (
    typeof $ === "object" &&
    $ != null &&
    Symbol.toStringTag in $ &&
    ($[Symbol.toStringTag] === "ArrayBuffer" || $[Symbol.toStringTag] === "SharedArrayBuffer")
  );
}
function m8($) {
  return $ instanceof RegExp || Object.prototype.toString.call($) === "[object RegExp]";
}
function eQ($) {
  return (
    typeof $ === "object" && $ != null && Symbol.toStringTag in $ && $[Symbol.toStringTag] === "Map"
  );
}
function N8($) {
  return $ instanceof Date || Object.prototype.toString.call($) === "[object Date]";
}
function c0($, Q) {
  return JSON.stringify($, (J, Y) => {
    if (typeof Y === "bigint") return { $numberLong: `${Y}` };
    else if (eQ(Y)) return Object.fromEntries(Y);
    return Y;
  });
}
function hq($) {
  if ($ != null && typeof $ === "object" && "stylize" in $ && typeof $.stylize === "function")
    return $.stylize;
}
var q8 = 7,
  S8 = Symbol.for("@@mdb.bson.version"),
  D1 = 2147483647,
  A1 = -2147483648,
  a2 = Math.pow(2, 63) - 1,
  s2 = -Math.pow(2, 63),
  r2 = Math.pow(2, 53),
  i2 = -Math.pow(2, 53),
  $4 = 1,
  e2 = 2,
  Q4 = 3,
  $Y = 4,
  J4 = 5,
  mq = 6,
  QY = 7,
  JY = 8,
  YY = 9,
  Y4 = 10,
  o6 = 11,
  Nq = 12,
  G4 = 13,
  GY = 14,
  qY = 15,
  L1 = 16,
  ZY = 17,
  q4 = 18,
  KY = 19,
  FY = 255,
  WY = 127,
  Oq = 0,
  Z4 = 4,
  Bq = Object.freeze({
    double: 1,
    string: 2,
    object: 3,
    array: 4,
    binData: 5,
    undefined: 6,
    objectId: 7,
    bool: 8,
    date: 9,
    null: 10,
    regex: 11,
    dbPointer: 12,
    javascript: 13,
    symbol: 14,
    javascriptWithScope: 15,
    int: 16,
    timestamp: 17,
    long: 18,
    decimal: 19,
    minKey: -1,
    maxKey: 127,
  });
class U extends Error {
  get bsonError() {
    return !0;
  }
  get name() {
    return "BSONError";
  }
  constructor($, Q) {
    super($, Q);
  }
  static isBSONError($) {
    return (
      $ != null &&
      typeof $ === "object" &&
      "bsonError" in $ &&
      $.bsonError === !0 &&
      "name" in $ &&
      "message" in $ &&
      "stack" in $
    );
  }
}
class Z8 extends U {
  get name() {
    return "BSONVersionError";
  }
  constructor() {
    super(`Unsupported BSON version, bson types must be from bson ${q8}.x.x`);
  }
}
class n6 extends U {
  get name() {
    return "BSONRuntimeError";
  }
  constructor($) {
    super($);
  }
}
class K$ extends U {
  get name() {
    return "BSONOffsetError";
  }
  offset;
  constructor($, Q, J) {
    super(`${$}. offset: ${Q}`, J);
    this.offset = Q;
  }
}
var S2, _2;
function XY($, Q, J, Y) {
  if (Y) {
    S2 ??= new TextDecoder("utf8", { fatal: !0 });
    try {
      return S2.decode($.subarray(Q, J));
    } catch (q) {
      throw new U("Invalid UTF-8 string in BSON document", { cause: q });
    }
  }
  return ((_2 ??= new TextDecoder("utf8", { fatal: !1 })), _2.decode($.subarray(Q, J)));
}
function jY($, Q, J) {
  if ($.length === 0) return "";
  let Y = J - Q;
  if (Y === 0) return "";
  if (Y > 20) return null;
  if (Y === 1 && $[Q] < 128) return String.fromCharCode($[Q]);
  if (Y === 2 && $[Q] < 128 && $[Q + 1] < 128)
    return String.fromCharCode($[Q]) + String.fromCharCode($[Q + 1]);
  if (Y === 3 && $[Q] < 128 && $[Q + 1] < 128 && $[Q + 2] < 128)
    return (
      String.fromCharCode($[Q]) + String.fromCharCode($[Q + 1]) + String.fromCharCode($[Q + 2])
    );
  let q = [];
  for (let Z = Q; Z < J; Z++) {
    let K = $[Z];
    if (K > 127) return null;
    q.push(K);
  }
  return String.fromCharCode(...q);
}
function Sq($, Q, J) {
  if (Q.length === 0) return 0;
  if (Q.length > 25) return null;
  if ($.length - J < Q.length) return null;
  for (let Y = 0, q = J; Y < Q.length; Y++, q++) {
    let Z = Q.charCodeAt(Y);
    if (Z > 127) return null;
    $[q] = Z;
  }
  return Q.length;
}
function _q($) {
  return d0.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
}
function yq($) {
  return crypto.getRandomValues(d0.allocate($));
}
var vq = (() => {
    let { crypto: $ } = globalThis;
    if ($ != null && typeof $.getRandomValues === "function") return yq;
    else return _q;
  })(),
  d0 = {
    isUint8Array: g$,
    toLocalBufferType($) {
      if (Buffer.isBuffer($)) return $;
      if (ArrayBuffer.isView($)) return Buffer.from($.buffer, $.byteOffset, $.byteLength);
      let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);
      if (
        Q === "ArrayBuffer" ||
        Q === "SharedArrayBuffer" ||
        Q === "[object ArrayBuffer]" ||
        Q === "[object SharedArrayBuffer]"
      )
        return Buffer.from($);
      throw new U("Cannot create Buffer from the passed potentialBuffer.");
    },
    allocate($) {
      return Buffer.alloc($);
    },
    allocateUnsafe($) {
      return Buffer.allocUnsafe($);
    },
    compare($, Q) {
      return d0.toLocalBufferType($).compare(Q);
    },
    concat($) {
      return Buffer.concat($);
    },
    copy($, Q, J, Y, q) {
      return d0.toLocalBufferType($).copy(Q, J ?? 0, Y ?? 0, q ?? $.length);
    },
    equals($, Q) {
      return d0.toLocalBufferType($).equals(Q);
    },
    fromNumberArray($) {
      return Buffer.from($);
    },
    fromBase64($) {
      return Buffer.from($, "base64");
    },
    fromUTF8($) {
      return Buffer.from($, "utf8");
    },
    toBase64($) {
      return d0.toLocalBufferType($).toString("base64");
    },
    fromISO88591($) {
      return Buffer.from($, "binary");
    },
    toISO88591($) {
      return d0.toLocalBufferType($).toString("binary");
    },
    fromHex($) {
      return Buffer.from($, "hex");
    },
    toHex($) {
      return d0.toLocalBufferType($).toString("hex");
    },
    toUTF8($, Q, J, Y) {
      let q = J - Q <= 20 ? jY($, Q, J) : null;
      if (q != null) return q;
      let Z = d0.toLocalBufferType($).toString("utf8", Q, J);
      if (Y) {
        for (let K = 0; K < Z.length; K++)
          if (Z.charCodeAt(K) === 65533) {
            XY($, Q, J, !0);
            break;
          }
      }
      return Z;
    },
    utf8ByteLength($) {
      return Buffer.byteLength($, "utf8");
    },
    encodeUTF8Into($, Q, J) {
      let Y = Sq($, Q, J);
      if (Y != null) return Y;
      return d0.toLocalBufferType($).write(Q, J, void 0, "utf8");
    },
    randomBytes: vq,
    swap32($) {
      return d0.toLocalBufferType($).swap32();
    },
  };
function gq() {
  let { navigator: $ } = globalThis;
  return typeof $ === "object" && $.product === "ReactNative";
}
function xq($) {
  if ($ < 0) throw new RangeError(`The argument 'byteLength' is invalid. Received ${$}`);
  return G8.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
}
var pq = (() => {
    let { crypto: $ } = globalThis;
    if ($ != null && typeof $.getRandomValues === "function")
      return (Q) => {
        return $.getRandomValues(G8.allocate(Q));
      };
    else {
      if (gq()) {
        let { console: Q } = globalThis;
        Q?.warn?.(
          "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.",
        );
      }
      return xq;
    }
  })(),
  y2 = /(\d|[a-f])/i,
  G8 = {
    isUint8Array: g$,
    toLocalBufferType($) {
      let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);
      if (Q === "Uint8Array") return $;
      if (ArrayBuffer.isView($))
        return new Uint8Array($.buffer.slice($.byteOffset, $.byteOffset + $.byteLength));
      if (
        Q === "ArrayBuffer" ||
        Q === "SharedArrayBuffer" ||
        Q === "[object ArrayBuffer]" ||
        Q === "[object SharedArrayBuffer]"
      )
        return new Uint8Array($);
      throw new U("Cannot make a Uint8Array from passed potentialBuffer.");
    },
    allocate($) {
      if (typeof $ !== "number")
        throw new TypeError(`The "size" argument must be of type number. Received ${String($)}`);
      return new Uint8Array($);
    },
    allocateUnsafe($) {
      return G8.allocate($);
    },
    compare($, Q) {
      if ($ === Q) return 0;
      let J = Math.min($.length, Q.length);
      for (let Y = 0; Y < J; Y++) {
        if ($[Y] < Q[Y]) return -1;
        if ($[Y] > Q[Y]) return 1;
      }
      if ($.length < Q.length) return -1;
      if ($.length > Q.length) return 1;
      return 0;
    },
    concat($) {
      if ($.length === 0) return G8.allocate(0);
      let Q = 0;
      for (let q of $) Q += q.length;
      let J = G8.allocate(Q),
        Y = 0;
      for (let q of $) (J.set(q, Y), (Y += q.length));
      return J;
    },
    copy($, Q, J, Y, q) {
      if (q !== void 0 && q < 0)
        throw new RangeError(
          `The value of "sourceEnd" is out of range. It must be >= 0. Received ${q}`,
        );
      if (((q = q ?? $.length), Y !== void 0 && (Y < 0 || Y > q)))
        throw new RangeError(
          `The value of "sourceStart" is out of range. It must be >= 0 and <= ${q}. Received ${Y}`,
        );
      if (((Y = Y ?? 0), J !== void 0 && J < 0))
        throw new RangeError(
          `The value of "targetStart" is out of range. It must be >= 0. Received ${J}`,
        );
      J = J ?? 0;
      let Z = $.subarray(Y, q),
        K = Math.min(Z.length, Q.length - J);
      if (K <= 0) return 0;
      return (Q.set(Z.subarray(0, K), J), K);
    },
    equals($, Q) {
      if ($.byteLength !== Q.byteLength) return !1;
      for (let J = 0; J < $.byteLength; J++) if ($[J] !== Q[J]) return !1;
      return !0;
    },
    fromNumberArray($) {
      return Uint8Array.from($);
    },
    fromBase64($) {
      return Uint8Array.from(atob($), (Q) => Q.charCodeAt(0));
    },
    fromUTF8($) {
      return new TextEncoder().encode($);
    },
    toBase64($) {
      return btoa(G8.toISO88591($));
    },
    fromISO88591($) {
      return Uint8Array.from($, (Q) => Q.charCodeAt(0) & 255);
    },
    toISO88591($) {
      return Array.from(Uint16Array.from($), (Q) => String.fromCharCode(Q)).join("");
    },
    fromHex($) {
      let Q = $.length % 2 === 0 ? $ : $.slice(0, $.length - 1),
        J = [];
      for (let Y = 0; Y < Q.length; Y += 2) {
        let q = Q[Y],
          Z = Q[Y + 1];
        if (!y2.test(q)) break;
        if (!y2.test(Z)) break;
        let K = Number.parseInt(`${q}${Z}`, 16);
        J.push(K);
      }
      return Uint8Array.from(J);
    },
    toHex($) {
      return Array.from($, (Q) => Q.toString(16).padStart(2, "0")).join("");
    },
    toUTF8($, Q, J, Y) {
      let q = J - Q <= 20 ? jY($, Q, J) : null;
      if (q != null) return q;
      return XY($, Q, J, Y);
    },
    utf8ByteLength($) {
      return new TextEncoder().encode($).byteLength;
    },
    encodeUTF8Into($, Q, J) {
      let Y = new TextEncoder().encode(Q);
      return ($.set(Y, J), Y.byteLength);
    },
    randomBytes: pq,
    swap32($) {
      if ($.length % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let Q = 0; Q < $.length; Q += 4) {
        let J = $[Q],
          Y = $[Q + 1],
          q = $[Q + 2],
          Z = $[Q + 3];
        (($[Q] = Z), ($[Q + 1] = q), ($[Q + 2] = Y), ($[Q + 3] = J));
      }
      return $;
    },
  },
  cq = typeof Buffer === "function" && Buffer.prototype?._isBuffer !== !0,
  k = cq ? d0 : G8,
  K4 = Symbol.for("@@mdb.bson.type");
class _0 {
  get [K4]() {
    return this._bsontype;
  }
  get [S8]() {
    return q8;
  }
  [Symbol.for("nodejs.util.inspect.custom")]($, Q, J) {
    return this.inspect($, Q, J);
  }
}
var O8 = new Float64Array(1),
  r = new Uint8Array(O8.buffer, 0, 8);
O8[0] = -1;
var EQ = r[7] === 0,
  b = {
    isBigEndian: EQ,
    getNonnegativeInt32LE($, Q) {
      if ($[Q + 3] > 127) throw new RangeError(`Size cannot be negative at offset: ${Q}`);
      return $[Q] | ($[Q + 1] << 8) | ($[Q + 2] << 16) | ($[Q + 3] << 24);
    },
    getInt32LE($, Q) {
      return $[Q] | ($[Q + 1] << 8) | ($[Q + 2] << 16) | ($[Q + 3] << 24);
    },
    getUint32LE($, Q) {
      return $[Q] + $[Q + 1] * 256 + $[Q + 2] * 65536 + $[Q + 3] * 16777216;
    },
    getUint32BE($, Q) {
      return $[Q + 3] + $[Q + 2] * 256 + $[Q + 1] * 65536 + $[Q] * 16777216;
    },
    getBigInt64LE($, Q) {
      let J = BigInt($[Q + 4] + $[Q + 5] * 256 + $[Q + 6] * 65536 + ($[Q + 7] << 24)),
        Y = BigInt($[Q] + $[Q + 1] * 256 + $[Q + 2] * 65536 + $[Q + 3] * 16777216);
      return (J << 32n) + Y;
    },
    getFloat64LE: EQ
      ? ($, Q) => {
          return (
            (r[7] = $[Q]),
            (r[6] = $[Q + 1]),
            (r[5] = $[Q + 2]),
            (r[4] = $[Q + 3]),
            (r[3] = $[Q + 4]),
            (r[2] = $[Q + 5]),
            (r[1] = $[Q + 6]),
            (r[0] = $[Q + 7]),
            O8[0]
          );
        }
      : ($, Q) => {
          return (
            (r[0] = $[Q]),
            (r[1] = $[Q + 1]),
            (r[2] = $[Q + 2]),
            (r[3] = $[Q + 3]),
            (r[4] = $[Q + 4]),
            (r[5] = $[Q + 5]),
            (r[6] = $[Q + 6]),
            (r[7] = $[Q + 7]),
            O8[0]
          );
        },
    setInt32BE($, Q, J) {
      return (
        ($[Q + 3] = J),
        (J >>>= 8),
        ($[Q + 2] = J),
        (J >>>= 8),
        ($[Q + 1] = J),
        (J >>>= 8),
        ($[Q] = J),
        4
      );
    },
    setInt32LE($, Q, J) {
      return (
        ($[Q] = J),
        (J >>>= 8),
        ($[Q + 1] = J),
        (J >>>= 8),
        ($[Q + 2] = J),
        (J >>>= 8),
        ($[Q + 3] = J),
        4
      );
    },
    setBigInt64LE($, Q, J) {
      let Y = 0xffffffffn,
        q = Number(J & Y);
      (($[Q] = q), (q >>= 8), ($[Q + 1] = q), (q >>= 8), ($[Q + 2] = q), (q >>= 8), ($[Q + 3] = q));
      let Z = Number((J >> 32n) & Y);
      return (
        ($[Q + 4] = Z),
        (Z >>= 8),
        ($[Q + 5] = Z),
        (Z >>= 8),
        ($[Q + 6] = Z),
        (Z >>= 8),
        ($[Q + 7] = Z),
        8
      );
    },
    setFloat64LE: EQ
      ? ($, Q, J) => {
          return (
            (O8[0] = J),
            ($[Q] = r[7]),
            ($[Q + 1] = r[6]),
            ($[Q + 2] = r[5]),
            ($[Q + 3] = r[4]),
            ($[Q + 4] = r[3]),
            ($[Q + 5] = r[2]),
            ($[Q + 6] = r[1]),
            ($[Q + 7] = r[0]),
            8
          );
        }
      : ($, Q, J) => {
          return (
            (O8[0] = J),
            ($[Q] = r[0]),
            ($[Q + 1] = r[1]),
            ($[Q + 2] = r[2]),
            ($[Q + 3] = r[3]),
            ($[Q + 4] = r[4]),
            ($[Q + 5] = r[5]),
            ($[Q + 6] = r[6]),
            ($[Q + 7] = r[7]),
            8
          );
        },
  };
class o extends _0 {
  get _bsontype() {
    return "Binary";
  }
  static BSON_BINARY_SUBTYPE_DEFAULT = 0;
  static BUFFER_SIZE = 256;
  static SUBTYPE_DEFAULT = 0;
  static SUBTYPE_FUNCTION = 1;
  static SUBTYPE_BYTE_ARRAY = 2;
  static SUBTYPE_UUID_OLD = 3;
  static SUBTYPE_UUID = 4;
  static SUBTYPE_MD5 = 5;
  static SUBTYPE_ENCRYPTED = 6;
  static SUBTYPE_COLUMN = 7;
  static SUBTYPE_SENSITIVE = 8;
  static SUBTYPE_VECTOR = 9;
  static SUBTYPE_USER_DEFINED = 128;
  static VECTOR_TYPE = Object.freeze({ Int8: 3, Float32: 39, PackedBit: 16 });
  buffer;
  sub_type;
  position;
  constructor($, Q) {
    super();
    if ($ != null && typeof $ === "string" && !ArrayBuffer.isView($) && !iQ($) && !Array.isArray($))
      throw new U("Binary can only be constructed from Uint8Array or number[]");
    if (((this.sub_type = Q ?? o.BSON_BINARY_SUBTYPE_DEFAULT), $ == null))
      ((this.buffer = k.allocate(o.BUFFER_SIZE)), (this.position = 0));
    else
      ((this.buffer = Array.isArray($) ? k.fromNumberArray($) : k.toLocalBufferType($)),
        (this.position = this.buffer.byteLength));
  }
  put($) {
    if (typeof $ === "string" && $.length !== 1)
      throw new U("only accepts single character String");
    else if (typeof $ !== "number" && $.length !== 1)
      throw new U("only accepts single character Uint8Array or Array");
    let Q;
    if (typeof $ === "string") Q = $.charCodeAt(0);
    else if (typeof $ === "number") Q = $;
    else Q = $[0];
    if (Q < 0 || Q > 255) throw new U("only accepts number in a valid unsigned byte range 0-255");
    if (this.buffer.byteLength > this.position) this.buffer[this.position++] = Q;
    else {
      let J = k.allocate(o.BUFFER_SIZE + this.buffer.length);
      (J.set(this.buffer, 0), (this.buffer = J), (this.buffer[this.position++] = Q));
    }
  }
  write($, Q) {
    if (((Q = typeof Q === "number" ? Q : this.position), this.buffer.byteLength < Q + $.length)) {
      let J = k.allocate(this.buffer.byteLength + $.length);
      (J.set(this.buffer, 0), (this.buffer = J));
    }
    if (ArrayBuffer.isView($))
      (this.buffer.set(k.toLocalBufferType($), Q),
        (this.position = Q + $.byteLength > this.position ? Q + $.length : this.position));
    else if (typeof $ === "string") throw new U("input cannot be string");
  }
  read($, Q) {
    Q = Q && Q > 0 ? Q : this.position;
    let J = $ + Q;
    return this.buffer.subarray($, J > this.position ? this.position : J);
  }
  value() {
    return this.buffer.length === this.position
      ? this.buffer
      : this.buffer.subarray(0, this.position);
  }
  length() {
    return this.position;
  }
  toJSON() {
    return k.toBase64(this.buffer.subarray(0, this.position));
  }
  toString($) {
    if ($ === "hex") return k.toHex(this.buffer.subarray(0, this.position));
    if ($ === "base64") return k.toBase64(this.buffer.subarray(0, this.position));
    if ($ === "utf8" || $ === "utf-8") return k.toUTF8(this.buffer, 0, this.position, !1);
    return k.toUTF8(this.buffer, 0, this.position, !1);
  }
  toExtendedJSON($) {
    if ((($ = $ || {}), this.sub_type === o.SUBTYPE_VECTOR)) k$(this);
    let Q = k.toBase64(this.buffer),
      J = Number(this.sub_type).toString(16);
    if ($.legacy) return { $binary: Q, $type: J.length === 1 ? "0" + J : J };
    return { $binary: { base64: Q, subType: J.length === 1 ? "0" + J : J } };
  }
  toUUID() {
    if (this.sub_type === o.SUBTYPE_UUID) return new I0(this.buffer.subarray(0, this.position));
    throw new U(
      `Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${o.SUBTYPE_UUID}" is currently supported.`,
    );
  }
  static createFromHexString($, Q) {
    return new o(k.fromHex($), Q);
  }
  static createFromBase64($, Q) {
    return new o(k.fromBase64($), Q);
  }
  static fromExtendedJSON($, Q) {
    Q = Q || {};
    let J, Y;
    if ("$binary" in $) {
      if (Q.legacy && typeof $.$binary === "string" && "$type" in $)
        ((Y = $.$type ? parseInt($.$type, 16) : 0), (J = k.fromBase64($.$binary)));
      else if (typeof $.$binary !== "string")
        ((Y = $.$binary.subType ? parseInt($.$binary.subType, 16) : 0),
          (J = k.fromBase64($.$binary.base64)));
    } else if ("$uuid" in $) ((Y = 4), (J = I0.bytesFromString($.$uuid)));
    if (!J) throw new U(`Unexpected Binary Extended JSON format ${JSON.stringify($)}`);
    return Y === Z4 ? new I0(J) : new o(J, Y);
  }
  inspect($, Q, J) {
    J ??= c0;
    let Y = k.toBase64(this.buffer.subarray(0, this.position)),
      q = J(Y, Q),
      Z = J(this.sub_type, Q);
    return `Binary.createFromBase64(${q}, ${Z})`;
  }
  toInt8Array() {
    if (this.sub_type !== o.SUBTYPE_VECTOR) throw new U("Binary sub_type is not Vector");
    if (this.buffer[0] !== o.VECTOR_TYPE.Int8) throw new U("Binary datatype field is not Int8");
    return (
      k$(this),
      new Int8Array(
        this.buffer.buffer.slice(
          this.buffer.byteOffset + 2,
          this.buffer.byteOffset + this.position,
        ),
      )
    );
  }
  toFloat32Array() {
    if (this.sub_type !== o.SUBTYPE_VECTOR) throw new U("Binary sub_type is not Vector");
    if (this.buffer[0] !== o.VECTOR_TYPE.Float32)
      throw new U("Binary datatype field is not Float32");
    k$(this);
    let $ = new Uint8Array(
      this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position),
    );
    if (b.isBigEndian) k.swap32($);
    return new Float32Array($.buffer);
  }
  toPackedBits() {
    if (this.sub_type !== o.SUBTYPE_VECTOR) throw new U("Binary sub_type is not Vector");
    if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit)
      throw new U("Binary datatype field is not packed bit");
    return (
      k$(this),
      new Uint8Array(
        this.buffer.buffer.slice(
          this.buffer.byteOffset + 2,
          this.buffer.byteOffset + this.position,
        ),
      )
    );
  }
  toBits() {
    if (this.sub_type !== o.SUBTYPE_VECTOR) throw new U("Binary sub_type is not Vector");
    if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit)
      throw new U("Binary datatype field is not packed bit");
    k$(this);
    let Q = (this.length() - 2) * 8 - this.buffer[1],
      J = new Int8Array(Q);
    for (let Y = 0; Y < J.length; Y++) {
      let q = (Y / 8) | 0,
        Z = this.buffer[q + 2],
        K = 7 - (Y % 8),
        W = (Z >> K) & 1;
      J[Y] = W;
    }
    return J;
  }
  static fromInt8Array($) {
    let Q = k.allocate($.byteLength + 2);
    ((Q[0] = o.VECTOR_TYPE.Int8), (Q[1] = 0));
    let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);
    Q.set(J, 2);
    let Y = new this(Q, this.SUBTYPE_VECTOR);
    return (k$(Y), Y);
  }
  static fromFloat32Array($) {
    let Q = k.allocate($.byteLength + 2);
    ((Q[0] = o.VECTOR_TYPE.Float32), (Q[1] = 0));
    let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);
    if ((Q.set(J, 2), b.isBigEndian)) k.swap32(new Uint8Array(Q.buffer, 2));
    let Y = new this(Q, this.SUBTYPE_VECTOR);
    return (k$(Y), Y);
  }
  static fromPackedBits($, Q = 0) {
    let J = k.allocate($.byteLength + 2);
    ((J[0] = o.VECTOR_TYPE.PackedBit), (J[1] = Q), J.set($, 2));
    let Y = new this(J, this.SUBTYPE_VECTOR);
    return (k$(Y), Y);
  }
  static fromBits($) {
    let Q = ($.length + 7) >>> 3,
      J = new Uint8Array(Q + 2);
    J[0] = o.VECTOR_TYPE.PackedBit;
    let Y = $.length % 8;
    J[1] = Y === 0 ? 0 : 8 - Y;
    for (let q = 0; q < $.length; q++) {
      let Z = q >>> 3,
        K = $[q];
      if (K !== 0 && K !== 1)
        throw new U(`Invalid bit value at ${q}: must be 0 or 1, found ${$[q]}`);
      if (K === 0) continue;
      let W = 7 - (q % 8);
      J[Z + 2] |= K << W;
    }
    return new this(J, o.SUBTYPE_VECTOR);
  }
}
function k$($) {
  if ($.sub_type !== o.SUBTYPE_VECTOR) return;
  let Q = $.position,
    J = $.buffer[0],
    Y = $.buffer[1];
  if ((J === o.VECTOR_TYPE.Float32 || J === o.VECTOR_TYPE.Int8) && Y !== 0)
    throw new U("Invalid Vector: padding must be zero for int8 and float32 vectors");
  if (J === o.VECTOR_TYPE.Float32) {
    if (Q !== 0 && Q - 2 !== 0 && (Q - 2) % 4 !== 0)
      throw new U("Invalid Vector: Float32 vector must contain a multiple of 4 bytes");
  }
  if (J === o.VECTOR_TYPE.PackedBit && Y !== 0 && Q === 2)
    throw new U("Invalid Vector: padding must be zero for packed bit vectors that are empty");
  if (J === o.VECTOR_TYPE.PackedBit && Y > 7)
    throw new U(`Invalid Vector: padding must be a value between 0 and 7. found: ${Y}`);
}
var hQ = 16,
  bq = /^[0-9A-F]{32}$/i,
  fq = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
class I0 extends o {
  constructor($) {
    let Q;
    if ($ == null) Q = I0.generate();
    else if ($ instanceof I0) Q = k.toLocalBufferType(new Uint8Array($.buffer));
    else if (ArrayBuffer.isView($) && $.byteLength === hQ) Q = k.toLocalBufferType($);
    else if (typeof $ === "string") Q = I0.bytesFromString($);
    else
      throw new U(
        "Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).",
      );
    super(Q, Z4);
  }
  get id() {
    return this.buffer;
  }
  set id($) {
    this.buffer = $;
  }
  toHexString($ = !0) {
    if ($)
      return [
        k.toHex(this.buffer.subarray(0, 4)),
        k.toHex(this.buffer.subarray(4, 6)),
        k.toHex(this.buffer.subarray(6, 8)),
        k.toHex(this.buffer.subarray(8, 10)),
        k.toHex(this.buffer.subarray(10, 16)),
      ].join("-");
    return k.toHex(this.buffer);
  }
  toString($) {
    if ($ === "hex") return k.toHex(this.id);
    if ($ === "base64") return k.toBase64(this.id);
    return this.toHexString();
  }
  toJSON() {
    return this.toHexString();
  }
  equals($) {
    if (!$) return !1;
    if ($ instanceof I0) return k.equals($.id, this.id);
    try {
      return k.equals(new I0($).id, this.id);
    } catch {
      return !1;
    }
  }
  toBinary() {
    return new o(this.id, o.SUBTYPE_UUID);
  }
  static generate() {
    let $ = k.randomBytes(hQ);
    return (($[6] = ($[6] & 15) | 64), ($[8] = ($[8] & 63) | 128), $);
  }
  static isValid($) {
    if (!$) return !1;
    if (typeof $ === "string") return I0.isValidUUIDString($);
    if (g$($)) return $.byteLength === hQ;
    return (
      $._bsontype === "Binary" && $.sub_type === this.SUBTYPE_UUID && $.buffer.byteLength === 16
    );
  }
  static createFromHexString($) {
    let Q = I0.bytesFromString($);
    return new I0(Q);
  }
  static createFromBase64($) {
    return new I0(k.fromBase64($));
  }
  static bytesFromString($) {
    if (!I0.isValidUUIDString($))
      throw new U(
        "UUID string representation must be 32 hex digits or canonical hyphenated representation",
      );
    return k.fromHex($.replace(/-/g, ""));
  }
  static isValidUUIDString($) {
    return bq.test($) || fq.test($);
  }
  inspect($, Q, J) {
    return ((J ??= c0), `new UUID(${J(this.toHexString(), Q)})`);
  }
}
class p$ extends _0 {
  get _bsontype() {
    return "Code";
  }
  code;
  scope;
  constructor($, Q) {
    super();
    ((this.code = $.toString()), (this.scope = Q ?? null));
  }
  toJSON() {
    if (this.scope != null) return { code: this.code, scope: this.scope };
    return { code: this.code };
  }
  toExtendedJSON() {
    if (this.scope) return { $code: this.code, $scope: this.scope };
    return { $code: this.code };
  }
  static fromExtendedJSON($) {
    return new p$($.$code, $.$scope);
  }
  inspect($, Q, J) {
    J ??= c0;
    let Y = J(this.code, Q),
      q = Y.includes(`
`);
    if (this.scope != null)
      Y += `,${
        q
          ? `
`
          : " "
      }${J(this.scope, Q)}`;
    let Z = q && this.scope === null;
    return `new Code(${
      q
        ? `
`
        : ""
    }${Y}${
      Z
        ? `
`
        : ""
    })`;
  }
}
function HY($) {
  return (
    $ != null &&
    typeof $ === "object" &&
    "$id" in $ &&
    $.$id != null &&
    "$ref" in $ &&
    typeof $.$ref === "string" &&
    (!("$db" in $) || ("$db" in $ && typeof $.$db === "string"))
  );
}
class C$ extends _0 {
  get _bsontype() {
    return "DBRef";
  }
  collection;
  oid;
  db;
  fields;
  constructor($, Q, J, Y) {
    super();
    let q = $.split(".");
    if (q.length === 2) ((J = q.shift()), ($ = q.shift()));
    ((this.collection = $), (this.oid = Q), (this.db = J), (this.fields = Y || {}));
  }
  get namespace() {
    return this.collection;
  }
  set namespace($) {
    this.collection = $;
  }
  toJSON() {
    let $ = Object.assign({ $ref: this.collection, $id: this.oid }, this.fields);
    if (this.db != null) $.$db = this.db;
    return $;
  }
  toExtendedJSON($) {
    $ = $ || {};
    let Q = { $ref: this.collection, $id: this.oid };
    if ($.legacy) return Q;
    if (this.db) Q.$db = this.db;
    return ((Q = Object.assign(Q, this.fields)), Q);
  }
  static fromExtendedJSON($) {
    let Q = Object.assign({}, $);
    return (delete Q.$ref, delete Q.$id, delete Q.$db, new C$($.$ref, $.$id, $.$db, Q));
  }
  inspect($, Q, J) {
    J ??= c0;
    let Y = [
      J(this.namespace, Q),
      J(this.oid, Q),
      ...(this.db ? [J(this.db, Q)] : []),
      ...(Object.keys(this.fields).length > 0 ? [J(this.fields, Q)] : []),
    ];
    return ((Y[1] = J === c0 ? `new ObjectId(${Y[1]})` : Y[1]), `new DBRef(${Y.join(", ")})`);
  }
}
function PY($) {
  if ($ === "") return $;
  let Q = 0,
    J = $[Q] === "-",
    Y = $[Q] === "+";
  if (Y || J) Q += 1;
  let q = !1;
  for (; Q < $.length && $[Q] === "0"; ++Q) q = !0;
  if (!q) return Y ? $.slice(1) : $;
  return `${J ? "-" : ""}${$.length === Q ? "0" : $.slice(Q)}`;
}
function lq($, Q) {
  Q = Q ?? 10;
  let J = "0123456789abcdefghijklmnopqrstuvwxyz".slice(0, Q);
  return new RegExp(`[^-+${J}]`, "i").test($) ? !1 : $;
}
var l0 = void 0;
try {
  l0 = new WebAssembly.Instance(
    new WebAssembly.Module(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3,
        7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5,
        100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0,
        4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191,
        1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
        32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
        126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132,
        127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
        66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167,
        36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
        32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
        126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132,
        130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
      ]),
    ),
    {},
  ).exports;
} catch {}
var v2 = 65536,
  dq = 16777216,
  B8 = v2 * v2,
  VY = B8 * B8,
  g2 = VY / 2,
  x2 = {},
  p2 = {},
  uq = 20,
  oq = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;
class V extends _0 {
  get _bsontype() {
    return "Long";
  }
  get __isLong__() {
    return !0;
  }
  high;
  low;
  unsigned;
  constructor($ = 0, Q, J) {
    super();
    let Y = typeof Q === "boolean" ? Q : Boolean(J),
      q = typeof Q === "number" ? Q : 0,
      Z =
        typeof $ === "string"
          ? V.fromString($, Y)
          : typeof $ === "bigint"
            ? V.fromBigInt($, Y)
            : { low: $ | 0, high: q | 0, unsigned: Y };
    ((this.low = Z.low), (this.high = Z.high), (this.unsigned = Z.unsigned));
  }
  static TWO_PWR_24 = V.fromInt(dq);
  static MAX_UNSIGNED_VALUE = V.fromBits(-1, -1, !0);
  static ZERO = V.fromInt(0);
  static UZERO = V.fromInt(0, !0);
  static ONE = V.fromInt(1);
  static UONE = V.fromInt(1, !0);
  static NEG_ONE = V.fromInt(-1);
  static MAX_VALUE = V.fromBits(-1, 2147483647, !1);
  static MIN_VALUE = V.fromBits(0, -2147483648, !1);
  static fromBits($, Q, J) {
    return new V($, Q, J);
  }
  static fromInt($, Q) {
    let J, Y, q;
    if (Q) {
      if ((($ >>>= 0), (q = 0 <= $ && $ < 256))) {
        if (((Y = p2[$]), Y)) return Y;
      }
      if (((J = V.fromBits($, ($ | 0) < 0 ? -1 : 0, !0)), q)) p2[$] = J;
      return J;
    } else {
      if ((($ |= 0), (q = -128 <= $ && $ < 128))) {
        if (((Y = x2[$]), Y)) return Y;
      }
      if (((J = V.fromBits($, $ < 0 ? -1 : 0, !1)), q)) x2[$] = J;
      return J;
    }
  }
  static fromNumber($, Q) {
    if (isNaN($)) return Q ? V.UZERO : V.ZERO;
    if (Q) {
      if ($ < 0) return V.UZERO;
      if ($ >= VY) return V.MAX_UNSIGNED_VALUE;
    } else {
      if ($ <= -g2) return V.MIN_VALUE;
      if ($ + 1 >= g2) return V.MAX_VALUE;
    }
    if ($ < 0) return V.fromNumber(-$, Q).neg();
    return V.fromBits(($ % B8) | 0, ($ / B8) | 0, Q);
  }
  static fromBigInt($, Q) {
    let J = 0xffffffffn,
      Y = 32n;
    return new V(Number($ & J), Number(($ >> Y) & J), Q);
  }
  static _fromString($, Q, J) {
    if ($.length === 0) throw new U("empty string");
    if (J < 2 || 36 < J) throw new U("radix");
    let Y;
    if ((Y = $.indexOf("-")) > 0) throw new U("interior hyphen");
    else if (Y === 0) return V._fromString($.substring(1), Q, J).neg();
    let q = V.fromNumber(Math.pow(J, 8)),
      Z = V.ZERO;
    for (let K = 0; K < $.length; K += 8) {
      let W = Math.min(8, $.length - K),
        F = parseInt($.substring(K, K + W), J);
      if (W < 8) {
        let H = V.fromNumber(Math.pow(J, W));
        Z = Z.mul(H).add(V.fromNumber(F));
      } else ((Z = Z.mul(q)), (Z = Z.add(V.fromNumber(F))));
    }
    return ((Z.unsigned = Q), Z);
  }
  static fromStringStrict($, Q, J) {
    let Y = !1;
    if (typeof Q === "number") ((J = Q), (Q = !1));
    else Y = !!Q;
    if (((J ??= 10), $.trim() !== $))
      throw new U(`Input: '${$}' contains leading and/or trailing whitespace`);
    if (!lq($, J)) throw new U(`Input: '${$}' contains invalid characters for radix: ${J}`);
    let q = PY($),
      Z = V._fromString(q, Y, J);
    if (Z.toString(J).toLowerCase() !== q.toLowerCase())
      throw new U(
        `Input: ${$} is not representable as ${Z.unsigned ? "an unsigned" : "a signed"} 64-bit Long ${J != null ? `with radix: ${J}` : ""}`,
      );
    return Z;
  }
  static fromString($, Q, J) {
    let Y = !1;
    if (typeof Q === "number") ((J = Q), (Q = !1));
    else Y = !!Q;
    if (((J ??= 10), $ === "NaN" && J < 24)) return V.ZERO;
    else if (($ === "Infinity" || $ === "+Infinity" || $ === "-Infinity") && J < 35) return V.ZERO;
    return V._fromString($, Y, J);
  }
  static fromBytes($, Q, J) {
    return J ? V.fromBytesLE($, Q) : V.fromBytesBE($, Q);
  }
  static fromBytesLE($, Q) {
    return new V(
      $[0] | ($[1] << 8) | ($[2] << 16) | ($[3] << 24),
      $[4] | ($[5] << 8) | ($[6] << 16) | ($[7] << 24),
      Q,
    );
  }
  static fromBytesBE($, Q) {
    return new V(
      ($[4] << 24) | ($[5] << 16) | ($[6] << 8) | $[7],
      ($[0] << 24) | ($[1] << 16) | ($[2] << 8) | $[3],
      Q,
    );
  }
  static isLong($) {
    return $ != null && typeof $ === "object" && "__isLong__" in $ && $.__isLong__ === !0;
  }
  static fromValue($, Q) {
    if (typeof $ === "number") return V.fromNumber($, Q);
    if (typeof $ === "string") return V.fromString($, Q);
    return V.fromBits($.low, $.high, typeof Q === "boolean" ? Q : $.unsigned);
  }
  add($) {
    if (!V.isLong($)) $ = V.fromValue($);
    let Q = this.high >>> 16,
      J = this.high & 65535,
      Y = this.low >>> 16,
      q = this.low & 65535,
      Z = $.high >>> 16,
      K = $.high & 65535,
      W = $.low >>> 16,
      F = $.low & 65535,
      H = 0,
      X = 0,
      j = 0,
      P = 0;
    return (
      (P += q + F),
      (j += P >>> 16),
      (P &= 65535),
      (j += Y + W),
      (X += j >>> 16),
      (j &= 65535),
      (X += J + K),
      (H += X >>> 16),
      (X &= 65535),
      (H += Q + Z),
      (H &= 65535),
      V.fromBits((j << 16) | P, (H << 16) | X, this.unsigned)
    );
  }
  and($) {
    if (!V.isLong($)) $ = V.fromValue($);
    return V.fromBits(this.low & $.low, this.high & $.high, this.unsigned);
  }
  compare($) {
    if (!V.isLong($)) $ = V.fromValue($);
    if (this.eq($)) return 0;
    let Q = this.isNegative(),
      J = $.isNegative();
    if (Q && !J) return -1;
    if (!Q && J) return 1;
    if (!this.unsigned) return this.sub($).isNegative() ? -1 : 1;
    return $.high >>> 0 > this.high >>> 0 || ($.high === this.high && $.low >>> 0 > this.low >>> 0)
      ? -1
      : 1;
  }
  comp($) {
    return this.compare($);
  }
  divide($) {
    if (!V.isLong($)) $ = V.fromValue($);
    if ($.isZero()) throw new U("division by zero");
    if (l0) {
      if (!this.unsigned && this.high === -2147483648 && $.low === -1 && $.high === -1) return this;
      let q = (this.unsigned ? l0.div_u : l0.div_s)(this.low, this.high, $.low, $.high);
      return V.fromBits(q, l0.get_high(), this.unsigned);
    }
    if (this.isZero()) return this.unsigned ? V.UZERO : V.ZERO;
    let Q, J, Y;
    if (!this.unsigned) {
      if (this.eq(V.MIN_VALUE))
        if ($.eq(V.ONE) || $.eq(V.NEG_ONE)) return V.MIN_VALUE;
        else if ($.eq(V.MIN_VALUE)) return V.ONE;
        else if (((Q = this.shr(1).div($).shl(1)), Q.eq(V.ZERO)))
          return $.isNegative() ? V.ONE : V.NEG_ONE;
        else return ((J = this.sub($.mul(Q))), (Y = Q.add(J.div($))), Y);
      else if ($.eq(V.MIN_VALUE)) return this.unsigned ? V.UZERO : V.ZERO;
      if (this.isNegative()) {
        if ($.isNegative()) return this.neg().div($.neg());
        return this.neg().div($).neg();
      } else if ($.isNegative()) return this.div($.neg()).neg();
      Y = V.ZERO;
    } else {
      if (!$.unsigned) $ = $.toUnsigned();
      if ($.gt(this)) return V.UZERO;
      if ($.gt(this.shru(1))) return V.UONE;
      Y = V.UZERO;
    }
    J = this;
    while (J.gte($)) {
      Q = Math.max(1, Math.floor(J.toNumber() / $.toNumber()));
      let q = Math.ceil(Math.log(Q) / Math.LN2),
        Z = q <= 48 ? 1 : Math.pow(2, q - 48),
        K = V.fromNumber(Q),
        W = K.mul($);
      while (W.isNegative() || W.gt(J))
        ((Q -= Z), (K = V.fromNumber(Q, this.unsigned)), (W = K.mul($)));
      if (K.isZero()) K = V.ONE;
      ((Y = Y.add(K)), (J = J.sub(W)));
    }
    return Y;
  }
  div($) {
    return this.divide($);
  }
  equals($) {
    if (!V.isLong($)) $ = V.fromValue($);
    if (this.unsigned !== $.unsigned && this.high >>> 31 === 1 && $.high >>> 31 === 1) return !1;
    return this.high === $.high && this.low === $.low;
  }
  eq($) {
    return this.equals($);
  }
  getHighBits() {
    return this.high;
  }
  getHighBitsUnsigned() {
    return this.high >>> 0;
  }
  getLowBits() {
    return this.low;
  }
  getLowBitsUnsigned() {
    return this.low >>> 0;
  }
  getNumBitsAbs() {
    if (this.isNegative()) return this.eq(V.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    let $ = this.high !== 0 ? this.high : this.low,
      Q;
    for (Q = 31; Q > 0; Q--) if (($ & (1 << Q)) !== 0) break;
    return this.high !== 0 ? Q + 33 : Q + 1;
  }
  greaterThan($) {
    return this.comp($) > 0;
  }
  gt($) {
    return this.greaterThan($);
  }
  greaterThanOrEqual($) {
    return this.comp($) >= 0;
  }
  gte($) {
    return this.greaterThanOrEqual($);
  }
  ge($) {
    return this.greaterThanOrEqual($);
  }
  isEven() {
    return (this.low & 1) === 0;
  }
  isNegative() {
    return !this.unsigned && this.high < 0;
  }
  isOdd() {
    return (this.low & 1) === 1;
  }
  isPositive() {
    return this.unsigned || this.high >= 0;
  }
  isZero() {
    return this.high === 0 && this.low === 0;
  }
  lessThan($) {
    return this.comp($) < 0;
  }
  lt($) {
    return this.lessThan($);
  }
  lessThanOrEqual($) {
    return this.comp($) <= 0;
  }
  lte($) {
    return this.lessThanOrEqual($);
  }
  modulo($) {
    if (!V.isLong($)) $ = V.fromValue($);
    if (l0) {
      let Q = (this.unsigned ? l0.rem_u : l0.rem_s)(this.low, this.high, $.low, $.high);
      return V.fromBits(Q, l0.get_high(), this.unsigned);
    }
    return this.sub(this.div($).mul($));
  }
  mod($) {
    return this.modulo($);
  }
  rem($) {
    return this.modulo($);
  }
  multiply($) {
    if (this.isZero()) return V.ZERO;
    if (!V.isLong($)) $ = V.fromValue($);
    if (l0) {
      let C = l0.mul(this.low, this.high, $.low, $.high);
      return V.fromBits(C, l0.get_high(), this.unsigned);
    }
    if ($.isZero()) return V.ZERO;
    if (this.eq(V.MIN_VALUE)) return $.isOdd() ? V.MIN_VALUE : V.ZERO;
    if ($.eq(V.MIN_VALUE)) return this.isOdd() ? V.MIN_VALUE : V.ZERO;
    if (this.isNegative())
      if ($.isNegative()) return this.neg().mul($.neg());
      else return this.neg().mul($).neg();
    else if ($.isNegative()) return this.mul($.neg()).neg();
    if (this.lt(V.TWO_PWR_24) && $.lt(V.TWO_PWR_24))
      return V.fromNumber(this.toNumber() * $.toNumber(), this.unsigned);
    let Q = this.high >>> 16,
      J = this.high & 65535,
      Y = this.low >>> 16,
      q = this.low & 65535,
      Z = $.high >>> 16,
      K = $.high & 65535,
      W = $.low >>> 16,
      F = $.low & 65535,
      H = 0,
      X = 0,
      j = 0,
      P = 0;
    return (
      (P += q * F),
      (j += P >>> 16),
      (P &= 65535),
      (j += Y * F),
      (X += j >>> 16),
      (j &= 65535),
      (j += q * W),
      (X += j >>> 16),
      (j &= 65535),
      (X += J * F),
      (H += X >>> 16),
      (X &= 65535),
      (X += Y * W),
      (H += X >>> 16),
      (X &= 65535),
      (X += q * K),
      (H += X >>> 16),
      (X &= 65535),
      (H += Q * F + J * W + Y * K + q * Z),
      (H &= 65535),
      V.fromBits((j << 16) | P, (H << 16) | X, this.unsigned)
    );
  }
  mul($) {
    return this.multiply($);
  }
  negate() {
    if (!this.unsigned && this.eq(V.MIN_VALUE)) return V.MIN_VALUE;
    return this.not().add(V.ONE);
  }
  neg() {
    return this.negate();
  }
  not() {
    return V.fromBits(~this.low, ~this.high, this.unsigned);
  }
  notEquals($) {
    return !this.equals($);
  }
  neq($) {
    return this.notEquals($);
  }
  ne($) {
    return this.notEquals($);
  }
  or($) {
    if (!V.isLong($)) $ = V.fromValue($);
    return V.fromBits(this.low | $.low, this.high | $.high, this.unsigned);
  }
  shiftLeft($) {
    if (V.isLong($)) $ = $.toInt();
    if (($ &= 63) === 0) return this;
    else if ($ < 32)
      return V.fromBits(this.low << $, (this.high << $) | (this.low >>> (32 - $)), this.unsigned);
    else return V.fromBits(0, this.low << ($ - 32), this.unsigned);
  }
  shl($) {
    return this.shiftLeft($);
  }
  shiftRight($) {
    if (V.isLong($)) $ = $.toInt();
    if (($ &= 63) === 0) return this;
    else if ($ < 32)
      return V.fromBits((this.low >>> $) | (this.high << (32 - $)), this.high >> $, this.unsigned);
    else return V.fromBits(this.high >> ($ - 32), this.high >= 0 ? 0 : -1, this.unsigned);
  }
  shr($) {
    return this.shiftRight($);
  }
  shiftRightUnsigned($) {
    if (V.isLong($)) $ = $.toInt();
    if ((($ &= 63), $ === 0)) return this;
    else {
      let Q = this.high;
      if ($ < 32) {
        let J = this.low;
        return V.fromBits((J >>> $) | (Q << (32 - $)), Q >>> $, this.unsigned);
      } else if ($ === 32) return V.fromBits(Q, 0, this.unsigned);
      else return V.fromBits(Q >>> ($ - 32), 0, this.unsigned);
    }
  }
  shr_u($) {
    return this.shiftRightUnsigned($);
  }
  shru($) {
    return this.shiftRightUnsigned($);
  }
  subtract($) {
    if (!V.isLong($)) $ = V.fromValue($);
    return this.add($.neg());
  }
  sub($) {
    return this.subtract($);
  }
  toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
  }
  toNumber() {
    if (this.unsigned) return (this.high >>> 0) * B8 + (this.low >>> 0);
    return this.high * B8 + (this.low >>> 0);
  }
  toBigInt() {
    return BigInt(this.toString());
  }
  toBytes($) {
    return $ ? this.toBytesLE() : this.toBytesBE();
  }
  toBytesLE() {
    let $ = this.high,
      Q = this.low;
    return [
      Q & 255,
      (Q >>> 8) & 255,
      (Q >>> 16) & 255,
      Q >>> 24,
      $ & 255,
      ($ >>> 8) & 255,
      ($ >>> 16) & 255,
      $ >>> 24,
    ];
  }
  toBytesBE() {
    let $ = this.high,
      Q = this.low;
    return [
      $ >>> 24,
      ($ >>> 16) & 255,
      ($ >>> 8) & 255,
      $ & 255,
      Q >>> 24,
      (Q >>> 16) & 255,
      (Q >>> 8) & 255,
      Q & 255,
    ];
  }
  toSigned() {
    if (!this.unsigned) return this;
    return V.fromBits(this.low, this.high, !1);
  }
  toString($) {
    if ((($ = $ || 10), $ < 2 || 36 < $)) throw new U("radix");
    if (this.isZero()) return "0";
    if (this.isNegative())
      if (this.eq(V.MIN_VALUE)) {
        let q = V.fromNumber($),
          Z = this.div(q),
          K = Z.mul(q).sub(this);
        return Z.toString($) + K.toInt().toString($);
      } else return "-" + this.neg().toString($);
    let Q = V.fromNumber(Math.pow($, 6), this.unsigned),
      J = this,
      Y = "";
    while (!0) {
      let q = J.div(Q),
        K = (J.sub(q.mul(Q)).toInt() >>> 0).toString($);
      if (((J = q), J.isZero())) return K + Y;
      else {
        while (K.length < 6) K = "0" + K;
        Y = "" + K + Y;
      }
    }
  }
  toUnsigned() {
    if (this.unsigned) return this;
    return V.fromBits(this.low, this.high, !0);
  }
  xor($) {
    if (!V.isLong($)) $ = V.fromValue($);
    return V.fromBits(this.low ^ $.low, this.high ^ $.high, this.unsigned);
  }
  eqz() {
    return this.isZero();
  }
  le($) {
    return this.lessThanOrEqual($);
  }
  toExtendedJSON($) {
    if ($ && $.relaxed) return this.toNumber();
    return { $numberLong: this.toString() };
  }
  static fromExtendedJSON($, Q) {
    let { useBigInt64: J = !1, relaxed: Y = !0 } = { ...Q };
    if ($.$numberLong.length > uq) throw new U("$numberLong string is too long");
    if (!oq.test($.$numberLong))
      throw new U(`$numberLong string "${$.$numberLong}" is in an invalid format`);
    if (J) {
      let Z = BigInt($.$numberLong);
      return BigInt.asIntN(64, Z);
    }
    let q = V.fromString($.$numberLong);
    if (Y) return q.toNumber();
    return q;
  }
  inspect($, Q, J) {
    J ??= c0;
    let Y = J(this.toString(), Q),
      q = this.unsigned ? `, ${J(this.unsigned, Q)}` : "";
    return `new Long(${Y}${q})`;
  }
}
var nq = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
  tq = /^(\+|-)?(Infinity|inf)$/i,
  aq = /^(\+|-)?NaN$/i,
  E8 = 6111,
  U1 = -6176,
  c2 = 6176,
  b2 = 34,
  mQ = k.fromNumberArray([124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
  f2 = k.fromNumberArray([248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
  l2 = k.fromNumberArray([120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
  sq = /^([-+])?(\d+)?$/,
  rq = 31,
  d2 = 16383,
  iq = 30,
  eq = 31;
function u2($) {
  return !isNaN(parseInt($, 10));
}
function $Z($) {
  let Q = V.fromNumber(1e9),
    J = V.fromNumber(0);
  if (!$.parts[0] && !$.parts[1] && !$.parts[2] && !$.parts[3]) return { quotient: $, rem: J };
  for (let Y = 0; Y <= 3; Y++)
    ((J = J.shiftLeft(32)),
      (J = J.add(new V($.parts[Y], 0))),
      ($.parts[Y] = J.div(Q).low),
      (J = J.modulo(Q)));
  return { quotient: $, rem: J };
}
function QZ($, Q) {
  if (!$ && !Q) return { high: V.fromNumber(0), low: V.fromNumber(0) };
  let J = $.shiftRightUnsigned(32),
    Y = new V($.getLowBits(), 0),
    q = Q.shiftRightUnsigned(32),
    Z = new V(Q.getLowBits(), 0),
    K = J.multiply(q),
    W = J.multiply(Z),
    F = Y.multiply(q),
    H = Y.multiply(Z);
  return (
    (K = K.add(W.shiftRightUnsigned(32))),
    (W = new V(W.getLowBits(), 0).add(F).add(H.shiftRightUnsigned(32))),
    (K = K.add(W.shiftRightUnsigned(32))),
    (H = W.shiftLeft(32).add(new V(H.getLowBits(), 0))),
    { high: K, low: H }
  );
}
function JZ($, Q) {
  let J = $.high >>> 0,
    Y = Q.high >>> 0;
  if (J < Y) return !0;
  else if (J === Y) {
    let q = $.low >>> 0,
      Z = Q.low >>> 0;
    if (q < Z) return !0;
  }
  return !1;
}
function s0($, Q) {
  throw new U(`"${$}" is not a valid Decimal128 string - ${Q}`);
}
class B0 extends _0 {
  get _bsontype() {
    return "Decimal128";
  }
  bytes;
  constructor($) {
    super();
    if (typeof $ === "string") this.bytes = B0.fromString($).bytes;
    else if ($ instanceof Uint8Array || g$($)) {
      if ($.byteLength !== 16) throw new U("Decimal128 must take a Buffer of 16 bytes");
      this.bytes = $;
    } else throw new U("Decimal128 must take a Buffer or string");
  }
  static fromString($) {
    return B0._fromString($, { allowRounding: !1 });
  }
  static fromStringWithRounding($) {
    return B0._fromString($, { allowRounding: !0 });
  }
  static _fromString($, Q) {
    let J = !1,
      Y = !1,
      q = !1,
      Z = !1,
      K = 0,
      W = 0,
      F = 0,
      H = 0,
      X = 0,
      j = [0],
      P = 0,
      C = 0,
      z = 0,
      A = 0,
      v = new V(0, 0),
      S = new V(0, 0),
      M = 0,
      L = 0;
    if ($.length >= 7000) throw new U("" + $ + " not a valid Decimal128 string");
    let _ = $.match(nq),
      E = $.match(tq),
      h = $.match(aq);
    if ((!_ && !E && !h) || $.length === 0) throw new U("" + $ + " not a valid Decimal128 string");
    if (_) {
      let w = _[2],
        B = _[4],
        n = _[5],
        Q0 = _[6];
      if (B && Q0 === void 0) s0($, "missing exponent power");
      if (B && w === void 0) s0($, "missing exponent base");
      if (B === void 0 && (n || Q0)) s0($, "missing e before exponent");
    }
    if ($[L] === "+" || $[L] === "-") ((Y = !0), (J = $[L++] === "-"));
    if (!u2($[L]) && $[L] !== ".") {
      if ($[L] === "i" || $[L] === "I") return new B0(J ? f2 : l2);
      else if ($[L] === "N") return new B0(mQ);
    }
    while (u2($[L]) || $[L] === ".") {
      if ($[L] === ".") {
        if (q) s0($, "contains multiple periods");
        ((q = !0), (L = L + 1));
        continue;
      }
      if (P < b2) {
        if ($[L] !== "0" || Z) {
          if (!Z) X = W;
          ((Z = !0), (j[C++] = parseInt($[L], 10)), (P = P + 1));
        }
      }
      if (Z) F = F + 1;
      if (q) H = H + 1;
      ((W = W + 1), (L = L + 1));
    }
    if (q && !W) throw new U("" + $ + " not a valid Decimal128 string");
    if ($[L] === "e" || $[L] === "E") {
      let w = $.substr(++L).match(sq);
      if (!w || !w[2]) return new B0(mQ);
      ((A = parseInt(w[0], 10)), (L = L + w[0].length));
    }
    if ($[L]) return new B0(mQ);
    if (!P) ((j[0] = 0), (F = 1), (P = 1), (K = 0));
    else if (((z = P - 1), (K = F), K !== 1))
      while ($[X + K - 1 + Number(Y) + Number(q)] === "0") K = K - 1;
    if (A <= H && H > A + 16384) A = U1;
    else A = A - H;
    while (A > E8) {
      if (((z = z + 1), z >= b2)) {
        if (K === 0) {
          A = E8;
          break;
        }
        s0($, "overflow");
      }
      A = A - 1;
    }
    if (Q.allowRounding) {
      while (A < U1 || P < F) {
        if (z === 0 && K < P) {
          ((A = U1), (K = 0));
          break;
        }
        if (P < F) F = F - 1;
        else z = z - 1;
        if (A < E8) A = A + 1;
        else {
          if (j.join("").match(/^0+$/)) {
            A = E8;
            break;
          }
          s0($, "overflow");
        }
      }
      if (z + 1 < K) {
        let w = W;
        if (q) ((X = X + 1), (w = w + 1));
        if (Y) ((X = X + 1), (w = w + 1));
        let B = parseInt($[X + z + 1], 10),
          n = 0;
        if (B >= 5) {
          if (((n = 1), B === 5)) {
            n = j[z] % 2 === 1 ? 1 : 0;
            for (let Q0 = X + z + 2; Q0 < w; Q0++)
              if (parseInt($[Q0], 10)) {
                n = 1;
                break;
              }
          }
        }
        if (n) {
          let Q0 = z;
          for (; Q0 >= 0; Q0--)
            if (++j[Q0] > 9) {
              if (((j[Q0] = 0), Q0 === 0))
                if (A < E8) ((A = A + 1), (j[Q0] = 1));
                else return new B0(J ? f2 : l2);
            } else break;
        }
      }
    } else {
      while (A < U1 || P < F) {
        if (z === 0) {
          if (K === 0) {
            A = U1;
            break;
          }
          s0($, "exponent underflow");
        }
        if (P < F) {
          if ($[F - 1 + Number(Y) + Number(q)] !== "0" && K !== 0) s0($, "inexact rounding");
          F = F - 1;
        } else {
          if (j[z] !== 0) s0($, "inexact rounding");
          z = z - 1;
        }
        if (A < E8) A = A + 1;
        else s0($, "overflow");
      }
      if (z + 1 < K) {
        if (q) X = X + 1;
        if (Y) X = X + 1;
        if (parseInt($[X + z + 1], 10) !== 0) s0($, "inexact rounding");
      }
    }
    if (((v = V.fromNumber(0)), (S = V.fromNumber(0)), K === 0))
      ((v = V.fromNumber(0)), (S = V.fromNumber(0)));
    else if (z < 17) {
      let w = 0;
      ((S = V.fromNumber(j[w++])), (v = new V(0, 0)));
      for (; w <= z; w++) ((S = S.multiply(V.fromNumber(10))), (S = S.add(V.fromNumber(j[w]))));
    } else {
      let w = 0;
      v = V.fromNumber(j[w++]);
      for (; w <= z - 17; w++)
        ((v = v.multiply(V.fromNumber(10))), (v = v.add(V.fromNumber(j[w]))));
      S = V.fromNumber(j[w++]);
      for (; w <= z; w++) ((S = S.multiply(V.fromNumber(10))), (S = S.add(V.fromNumber(j[w]))));
    }
    let T = QZ(v, V.fromString("100000000000000000"));
    if (((T.low = T.low.add(S)), JZ(T.low, S))) T.high = T.high.add(V.fromNumber(1));
    M = A + c2;
    let O = { low: V.fromNumber(0), high: V.fromNumber(0) };
    if (T.high.shiftRightUnsigned(49).and(V.fromNumber(1)).equals(V.fromNumber(1)))
      ((O.high = O.high.or(V.fromNumber(3).shiftLeft(61))),
        (O.high = O.high.or(V.fromNumber(M).and(V.fromNumber(16383).shiftLeft(47)))),
        (O.high = O.high.or(T.high.and(V.fromNumber(140737488355327)))));
    else
      ((O.high = O.high.or(V.fromNumber(M & 16383).shiftLeft(49))),
        (O.high = O.high.or(T.high.and(V.fromNumber(562949953421311)))));
    if (((O.low = T.low), J)) O.high = O.high.or(V.fromString("9223372036854775808"));
    let m = k.allocateUnsafe(16);
    return (
      (L = 0),
      (m[L++] = O.low.low & 255),
      (m[L++] = (O.low.low >> 8) & 255),
      (m[L++] = (O.low.low >> 16) & 255),
      (m[L++] = (O.low.low >> 24) & 255),
      (m[L++] = O.low.high & 255),
      (m[L++] = (O.low.high >> 8) & 255),
      (m[L++] = (O.low.high >> 16) & 255),
      (m[L++] = (O.low.high >> 24) & 255),
      (m[L++] = O.high.low & 255),
      (m[L++] = (O.high.low >> 8) & 255),
      (m[L++] = (O.high.low >> 16) & 255),
      (m[L++] = (O.high.low >> 24) & 255),
      (m[L++] = O.high.high & 255),
      (m[L++] = (O.high.high >> 8) & 255),
      (m[L++] = (O.high.high >> 16) & 255),
      (m[L++] = (O.high.high >> 24) & 255),
      new B0(m)
    );
  }
  toString() {
    let $,
      Q = 0,
      J = new Array(36);
    for (let L = 0; L < J.length; L++) J[L] = 0;
    let Y = 0,
      q = !1,
      Z,
      K = { parts: [0, 0, 0, 0] },
      W,
      F,
      H = [];
    Y = 0;
    let X = this.bytes,
      j = X[Y++] | (X[Y++] << 8) | (X[Y++] << 16) | (X[Y++] << 24),
      P = X[Y++] | (X[Y++] << 8) | (X[Y++] << 16) | (X[Y++] << 24),
      C = X[Y++] | (X[Y++] << 8) | (X[Y++] << 16) | (X[Y++] << 24),
      z = X[Y++] | (X[Y++] << 8) | (X[Y++] << 16) | (X[Y++] << 24);
    if (((Y = 0), { low: new V(j, P), high: new V(C, z) }.high.lessThan(V.ZERO))) H.push("-");
    let v = (z >> 26) & rq;
    if (v >> 3 === 3)
      if (v === iq) return H.join("") + "Infinity";
      else if (v === eq) return "NaN";
      else (($ = (z >> 15) & d2), (Z = 8 + ((z >> 14) & 1)));
    else ((Z = (z >> 14) & 7), ($ = (z >> 17) & d2));
    let S = $ - c2;
    if (
      ((K.parts[0] = (z & 16383) + ((Z & 15) << 14)),
      (K.parts[1] = C),
      (K.parts[2] = P),
      (K.parts[3] = j),
      K.parts[0] === 0 && K.parts[1] === 0 && K.parts[2] === 0 && K.parts[3] === 0)
    )
      q = !0;
    else
      for (F = 3; F >= 0; F--) {
        let L = 0,
          _ = $Z(K);
        if (((K = _.quotient), (L = _.rem.low), !L)) continue;
        for (W = 8; W >= 0; W--) ((J[F * 9 + W] = L % 10), (L = Math.floor(L / 10)));
      }
    if (q) ((Q = 1), (J[Y] = 0));
    else {
      Q = 36;
      while (!J[Y]) ((Q = Q - 1), (Y = Y + 1));
    }
    let M = Q - 1 + S;
    if (M >= 34 || M <= -7 || S > 0) {
      if (Q > 34) {
        if ((H.push("0"), S > 0)) H.push(`E+${S}`);
        else if (S < 0) H.push(`E${S}`);
        return H.join("");
      }
      if ((H.push(`${J[Y++]}`), (Q = Q - 1), Q)) H.push(".");
      for (let L = 0; L < Q; L++) H.push(`${J[Y++]}`);
      if ((H.push("E"), M > 0)) H.push(`+${M}`);
      else H.push(`${M}`);
    } else if (S >= 0) for (let L = 0; L < Q; L++) H.push(`${J[Y++]}`);
    else {
      let L = Q + S;
      if (L > 0) for (let _ = 0; _ < L; _++) H.push(`${J[Y++]}`);
      else H.push("0");
      H.push(".");
      while (L++ < 0) H.push("0");
      for (let _ = 0; _ < Q - Math.max(L - 1, 0); _++) H.push(`${J[Y++]}`);
    }
    return H.join("");
  }
  toJSON() {
    return { $numberDecimal: this.toString() };
  }
  toExtendedJSON() {
    return { $numberDecimal: this.toString() };
  }
  static fromExtendedJSON($) {
    return B0.fromString($.$numberDecimal);
  }
  inspect($, Q, J) {
    return ((J ??= c0), `new Decimal128(${J(this.toString(), Q)})`);
  }
}
class r0 extends _0 {
  get _bsontype() {
    return "Double";
  }
  value;
  constructor($) {
    super();
    if ($ instanceof Number) $ = $.valueOf();
    this.value = +$;
  }
  static fromString($) {
    let Q = Number($);
    if ($ === "NaN") return new r0(NaN);
    if ($ === "Infinity") return new r0(1 / 0);
    if ($ === "-Infinity") return new r0(-1 / 0);
    if (!Number.isFinite(Q)) throw new U(`Input: ${$} is not representable as a Double`);
    if ($.trim() !== $) throw new U(`Input: '${$}' contains whitespace`);
    if ($ === "") throw new U("Input is an empty string");
    if (/[^-0-9.+eE]/.test($))
      throw new U(`Input: '${$}' is not in decimal or exponential notation`);
    return new r0(Q);
  }
  valueOf() {
    return this.value;
  }
  toJSON() {
    return this.value;
  }
  toString($) {
    return this.value.toString($);
  }
  toExtendedJSON($) {
    if ($ && ($.legacy || ($.relaxed && isFinite(this.value)))) return this.value;
    if (Object.is(Math.sign(this.value), -0)) return { $numberDouble: "-0.0" };
    return {
      $numberDouble: Number.isInteger(this.value) ? this.value.toFixed(1) : this.value.toString(),
    };
  }
  static fromExtendedJSON($, Q) {
    let J = parseFloat($.$numberDouble);
    return Q && Q.relaxed ? J : new r0(J);
  }
  inspect($, Q, J) {
    return ((J ??= c0), `new Double(${J(this.value, Q)})`);
  }
}
class c$ extends _0 {
  get _bsontype() {
    return "Int32";
  }
  value;
  constructor($) {
    super();
    if ($ instanceof Number) $ = $.valueOf();
    this.value = +$ | 0;
  }
  static fromString($) {
    let Q = PY($),
      J = Number($);
    if (D1 < J) throw new U(`Input: '${$}' is larger than the maximum value for Int32`);
    else if (A1 > J) throw new U(`Input: '${$}' is smaller than the minimum value for Int32`);
    else if (!Number.isSafeInteger(J)) throw new U(`Input: '${$}' is not a safe integer`);
    else if (J.toString() !== Q) throw new U(`Input: '${$}' is not a valid Int32 string`);
    return new c$(J);
  }
  valueOf() {
    return this.value;
  }
  toString($) {
    return this.value.toString($);
  }
  toJSON() {
    return this.value;
  }
  toExtendedJSON($) {
    if ($ && ($.relaxed || $.legacy)) return this.value;
    return { $numberInt: this.value.toString() };
  }
  static fromExtendedJSON($, Q) {
    return Q && Q.relaxed ? parseInt($.$numberInt, 10) : new c$($.$numberInt);
  }
  inspect($, Q, J) {
    return ((J ??= c0), `new Int32(${J(this.value, Q)})`);
  }
}
class _8 extends _0 {
  get _bsontype() {
    return "MaxKey";
  }
  toExtendedJSON() {
    return { $maxKey: 1 };
  }
  static fromExtendedJSON() {
    return new _8();
  }
  inspect() {
    return "new MaxKey()";
  }
}
class y8 extends _0 {
  get _bsontype() {
    return "MinKey";
  }
  toExtendedJSON() {
    return { $minKey: 1 };
  }
  static fromExtendedJSON() {
    return new y8();
  }
  inspect() {
    return "new MinKey()";
  }
}
var Y8 = null,
  C1 = new WeakMap();
class F0 extends _0 {
  get _bsontype() {
    return "ObjectId";
  }
  static index = Math.floor(Math.random() * 16777215);
  static cacheHexString;
  buffer;
  constructor($) {
    super();
    let Q;
    if (typeof $ === "object" && $ && "id" in $) {
      if (typeof $.id !== "string" && !ArrayBuffer.isView($.id))
        throw new U("Argument passed in must have an id that is of type string or Buffer");
      if ("toHexString" in $ && typeof $.toHexString === "function") Q = k.fromHex($.toHexString());
      else Q = $.id;
    } else Q = $;
    if (Q == null) this.buffer = F0.generate();
    else if (ArrayBuffer.isView(Q) && Q.byteLength === 12) this.buffer = k.toLocalBufferType(Q);
    else if (typeof Q === "string")
      if (F0.validateHexString(Q)) {
        if (((this.buffer = k.fromHex(Q)), F0.cacheHexString)) C1.set(this, Q);
      } else
        throw new U("input must be a 24 character hex string, 12 byte Uint8Array, or an integer");
    else throw new U("Argument passed in does not match the accepted types");
  }
  get id() {
    return this.buffer;
  }
  set id($) {
    if (((this.buffer = $), F0.cacheHexString)) C1.set(this, k.toHex($));
  }
  static validateHexString($) {
    if ($?.length !== 24) return !1;
    for (let Q = 0; Q < 24; Q++) {
      let J = $.charCodeAt(Q);
      if ((J >= 48 && J <= 57) || (J >= 97 && J <= 102) || (J >= 65 && J <= 70)) continue;
      return !1;
    }
    return !0;
  }
  toHexString() {
    if (F0.cacheHexString) {
      let Q = C1.get(this);
      if (Q) return Q;
    }
    let $ = k.toHex(this.id);
    if (F0.cacheHexString) C1.set(this, $);
    return $;
  }
  static getInc() {
    return (F0.index = (F0.index + 1) % 16777215);
  }
  static generate($) {
    if (typeof $ !== "number") $ = Math.floor(Date.now() / 1000);
    let Q = F0.getInc(),
      J = k.allocateUnsafe(12);
    if ((b.setInt32BE(J, 0, $), Y8 === null)) Y8 = k.randomBytes(5);
    return (
      (J[4] = Y8[0]),
      (J[5] = Y8[1]),
      (J[6] = Y8[2]),
      (J[7] = Y8[3]),
      (J[8] = Y8[4]),
      (J[11] = Q & 255),
      (J[10] = (Q >> 8) & 255),
      (J[9] = (Q >> 16) & 255),
      J
    );
  }
  toString($) {
    if ($ === "base64") return k.toBase64(this.id);
    if ($ === "hex") return this.toHexString();
    return this.toHexString();
  }
  toJSON() {
    return this.toHexString();
  }
  static is($) {
    return $ != null && typeof $ === "object" && "_bsontype" in $ && $._bsontype === "ObjectId";
  }
  equals($) {
    if ($ === void 0 || $ === null) return !1;
    if (F0.is($)) return this.buffer[11] === $.buffer[11] && k.equals(this.buffer, $.buffer);
    if (typeof $ === "string") return $.toLowerCase() === this.toHexString();
    if (typeof $ === "object" && typeof $.toHexString === "function") {
      let Q = $.toHexString(),
        J = this.toHexString();
      return typeof Q === "string" && Q.toLowerCase() === J;
    }
    return !1;
  }
  getTimestamp() {
    let $ = new Date(),
      Q = b.getUint32BE(this.buffer, 0);
    return ($.setTime(Math.floor(Q) * 1000), $);
  }
  static createPk() {
    return new F0();
  }
  serializeInto($, Q) {
    return (
      ($[Q] = this.buffer[0]),
      ($[Q + 1] = this.buffer[1]),
      ($[Q + 2] = this.buffer[2]),
      ($[Q + 3] = this.buffer[3]),
      ($[Q + 4] = this.buffer[4]),
      ($[Q + 5] = this.buffer[5]),
      ($[Q + 6] = this.buffer[6]),
      ($[Q + 7] = this.buffer[7]),
      ($[Q + 8] = this.buffer[8]),
      ($[Q + 9] = this.buffer[9]),
      ($[Q + 10] = this.buffer[10]),
      ($[Q + 11] = this.buffer[11]),
      12
    );
  }
  static createFromTime($) {
    let Q = k.allocate(12);
    for (let J = 11; J >= 4; J--) Q[J] = 0;
    return (b.setInt32BE(Q, 0, $), new F0(Q));
  }
  static createFromHexString($) {
    if ($?.length !== 24) throw new U("hex string must be 24 characters");
    return new F0(k.fromHex($));
  }
  static createFromBase64($) {
    if ($?.length !== 16) throw new U("base64 string must be 16 characters");
    return new F0(k.fromBase64($));
  }
  static isValid($) {
    if ($ == null) return !1;
    if (typeof $ === "string") return F0.validateHexString($);
    try {
      return (new F0($), !0);
    } catch {
      return !1;
    }
  }
  toExtendedJSON() {
    if (this.toHexString) return { $oid: this.toHexString() };
    return { $oid: this.toString("hex") };
  }
  static fromExtendedJSON($) {
    return new F0($.$oid);
  }
  isCached() {
    return F0.cacheHexString && C1.has(this);
  }
  inspect($, Q, J) {
    return ((J ??= c0), `new ObjectId(${J(this.toHexString(), Q)})`);
  }
}
function d6($, Q, J) {
  let Y = 5;
  if (Array.isArray($)) for (let q = 0; q < $.length; q++) Y += o2(q.toString(), $[q], Q, !0, J);
  else {
    if (typeof $?.toBSON === "function") $ = $.toBSON();
    for (let q of Object.keys($)) Y += o2(q, $[q], Q, !1, J);
  }
  return Y;
}
function o2($, Q, J = !1, Y = !1, q = !1) {
  if (typeof Q?.toBSON === "function") Q = Q.toBSON();
  switch (typeof Q) {
    case "string":
      return 1 + k.utf8ByteLength($) + 1 + 4 + k.utf8ByteLength(Q) + 1;
    case "number":
      if (Math.floor(Q) === Q && Q >= i2 && Q <= r2)
        if (Q >= A1 && Q <= D1) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 5;
        else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9;
      else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9;
    case "undefined":
      if (Y || !q) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1;
      return 0;
    case "boolean":
      return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 2;
    case "object":
      if (Q != null && typeof Q._bsontype === "string" && Q[S8] !== q8) throw new Z8();
      else if (Q == null || Q._bsontype === "MinKey" || Q._bsontype === "MaxKey")
        return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1;
      else if (Q._bsontype === "ObjectId") return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 13;
      else if (Q instanceof Date || N8(Q)) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9;
      else if (ArrayBuffer.isView(Q) || Q instanceof ArrayBuffer || iQ(Q))
        return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 6 + Q.byteLength;
      else if (Q._bsontype === "Long" || Q._bsontype === "Double" || Q._bsontype === "Timestamp")
        return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9;
      else if (Q._bsontype === "Decimal128") return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 17;
      else if (Q._bsontype === "Code")
        if (Q.scope != null && Object.keys(Q.scope).length > 0)
          return (
            ($ != null ? k.utf8ByteLength($) + 1 : 0) +
            1 +
            4 +
            4 +
            k.utf8ByteLength(Q.code.toString()) +
            1 +
            d6(Q.scope, J, q)
          );
        else
          return (
            ($ != null ? k.utf8ByteLength($) + 1 : 0) +
            1 +
            4 +
            k.utf8ByteLength(Q.code.toString()) +
            1
          );
      else if (Q._bsontype === "Binary") {
        let Z = Q;
        if (Z.sub_type === o.SUBTYPE_BYTE_ARRAY)
          return ($ != null ? k.utf8ByteLength($) + 1 : 0) + (Z.position + 1 + 4 + 1 + 4);
        else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + (Z.position + 1 + 4 + 1);
      } else if (Q._bsontype === "Symbol")
        return ($ != null ? k.utf8ByteLength($) + 1 : 0) + k.utf8ByteLength(Q.value) + 4 + 1 + 1;
      else if (Q._bsontype === "DBRef") {
        let Z = Object.assign({ $ref: Q.collection, $id: Q.oid }, Q.fields);
        if (Q.db != null) Z.$db = Q.db;
        return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1 + d6(Z, J, q);
      } else if (Q instanceof RegExp || m8(Q))
        return (
          ($ != null ? k.utf8ByteLength($) + 1 : 0) +
          1 +
          k.utf8ByteLength(Q.source) +
          1 +
          (Q.global ? 1 : 0) +
          (Q.ignoreCase ? 1 : 0) +
          (Q.multiline ? 1 : 0) +
          1
        );
      else if (Q._bsontype === "BSONRegExp")
        return (
          ($ != null ? k.utf8ByteLength($) + 1 : 0) +
          1 +
          k.utf8ByteLength(Q.pattern) +
          1 +
          k.utf8ByteLength(Q.options) +
          1
        );
      else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + d6(Q, J, q) + 1;
    case "function":
      if (J)
        return (
          ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1 + 4 + k.utf8ByteLength(Q.toString()) + 1
        );
      return 0;
    case "bigint":
      return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9;
    case "symbol":
      return 0;
    default:
      throw new U(`Unrecognized JS type: ${typeof Q}`);
  }
}
function YZ($) {
  return $.split("").sort().join("");
}
class i0 extends _0 {
  get _bsontype() {
    return "BSONRegExp";
  }
  pattern;
  options;
  constructor($, Q) {
    super();
    if (((this.pattern = $), (this.options = YZ(Q ?? "")), this.pattern.indexOf("\x00") !== -1))
      throw new U(
        `BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`,
      );
    if (this.options.indexOf("\x00") !== -1)
      throw new U(
        `BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`,
      );
    for (let J = 0; J < this.options.length; J++)
      if (
        !(
          this.options[J] === "i" ||
          this.options[J] === "m" ||
          this.options[J] === "x" ||
          this.options[J] === "l" ||
          this.options[J] === "s" ||
          this.options[J] === "u"
        )
      )
        throw new U(`The regular expression option [${this.options[J]}] is not supported`);
  }
  static parseOptions($) {
    return $ ? $.split("").sort().join("") : "";
  }
  toExtendedJSON($) {
    if ((($ = $ || {}), $.legacy)) return { $regex: this.pattern, $options: this.options };
    return { $regularExpression: { pattern: this.pattern, options: this.options } };
  }
  static fromExtendedJSON($) {
    if ("$regex" in $)
      if (typeof $.$regex !== "string") {
        if ($.$regex._bsontype === "BSONRegExp") return $;
      } else return new i0($.$regex, i0.parseOptions($.$options));
    if ("$regularExpression" in $)
      return new i0($.$regularExpression.pattern, i0.parseOptions($.$regularExpression.options));
    throw new U(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify($)}`);
  }
  inspect($, Q, J) {
    let Y = hq(Q) ?? ((K) => K);
    J ??= c0;
    let q = Y(J(this.pattern), "regexp"),
      Z = Y(J(this.options), "regexp");
    return `new BSONRegExp(${q}, ${Z})`;
  }
}
class v8 extends _0 {
  get _bsontype() {
    return "BSONSymbol";
  }
  value;
  constructor($) {
    super();
    this.value = $;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value;
  }
  toJSON() {
    return this.value;
  }
  toExtendedJSON() {
    return { $symbol: this.value };
  }
  static fromExtendedJSON($) {
    return new v8($.$symbol);
  }
  inspect($, Q, J) {
    return ((J ??= c0), `new BSONSymbol(${J(this.value, Q)})`);
  }
}
var GZ = V;
class F$ extends GZ {
  get _bsontype() {
    return "Timestamp";
  }
  get [K4]() {
    return "Timestamp";
  }
  static MAX_VALUE = V.MAX_UNSIGNED_VALUE;
  get i() {
    return this.low >>> 0;
  }
  get t() {
    return this.high >>> 0;
  }
  constructor($) {
    if ($ == null) super(0, 0, !0);
    else if (typeof $ === "bigint") super($, !0);
    else if (V.isLong($)) super($.low, $.high, !0);
    else if (typeof $ === "object" && "t" in $ && "i" in $) {
      if (typeof $.t !== "number" && (typeof $.t !== "object" || $.t._bsontype !== "Int32"))
        throw new U("Timestamp constructed from { t, i } must provide t as a number");
      if (typeof $.i !== "number" && (typeof $.i !== "object" || $.i._bsontype !== "Int32"))
        throw new U("Timestamp constructed from { t, i } must provide i as a number");
      let Q = Number($.t),
        J = Number($.i);
      if (Q < 0 || Number.isNaN(Q))
        throw new U("Timestamp constructed from { t, i } must provide a positive t");
      if (J < 0 || Number.isNaN(J))
        throw new U("Timestamp constructed from { t, i } must provide a positive i");
      if (Q > 4294967295)
        throw new U(
          "Timestamp constructed from { t, i } must provide t equal or less than uint32 max",
        );
      if (J > 4294967295)
        throw new U(
          "Timestamp constructed from { t, i } must provide i equal or less than uint32 max",
        );
      super(J, Q, !0);
    } else
      throw new U(
        "A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }",
      );
  }
  toJSON() {
    return { $timestamp: this.toString() };
  }
  static fromInt($) {
    return new F$(V.fromInt($, !0));
  }
  static fromNumber($) {
    return new F$(V.fromNumber($, !0));
  }
  static fromBits($, Q) {
    return new F$({ i: $, t: Q });
  }
  static fromString($, Q) {
    return new F$(V.fromString($, !0, Q));
  }
  toExtendedJSON() {
    return { $timestamp: { t: this.t, i: this.i } };
  }
  static fromExtendedJSON($) {
    let Q = V.isLong($.$timestamp.i) ? $.$timestamp.i.getLowBitsUnsigned() : $.$timestamp.i,
      J = V.isLong($.$timestamp.t) ? $.$timestamp.t.getLowBitsUnsigned() : $.$timestamp.t;
    return new F$({ t: J, i: Q });
  }
  inspect($, Q, J) {
    J ??= c0;
    let Y = J(this.t, Q),
      q = J(this.i, Q);
    return `new Timestamp({ t: ${Y}, i: ${q} })`;
  }
}
var qZ = V.fromNumber(r2),
  ZZ = V.fromNumber(i2);
function RY($, Q, J) {
  Q = Q == null ? {} : Q;
  let Y = Q && Q.index ? Q.index : 0,
    q = b.getInt32LE($, Y);
  if (q < 5) throw new U(`bson size must be >= 5, is ${q}`);
  if (Q.allowObjectSmallerThanBufferSize && $.length < q)
    throw new U(`buffer length ${$.length} must be >= bson size ${q}`);
  if (!Q.allowObjectSmallerThanBufferSize && $.length !== q)
    throw new U(`buffer length ${$.length} must === bson size ${q}`);
  if (q + Y > $.byteLength)
    throw new U(`(bson size ${q} + options.index ${Y} must be <= buffer length ${$.byteLength})`);
  if ($[Y + q - 1] !== 0)
    throw new U("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
  return u6($, Y, Q, J);
}
var KZ = /^\$ref$|^\$id$|^\$db$/;
function u6($, Q, J, Y = !1) {
  let q = J.fieldsAsRaw == null ? null : J.fieldsAsRaw,
    Z = J.raw == null ? !1 : J.raw,
    K = typeof J.bsonRegExp === "boolean" ? J.bsonRegExp : !1,
    W = J.promoteBuffers ?? !1,
    F = J.promoteLongs ?? !0,
    H = J.promoteValues ?? !0,
    X = J.useBigInt64 ?? !1;
  if (X && !H) throw new U("Must either request bigint or Long for int64 deserialization");
  if (X && !F) throw new U("Must either request bigint or Long for int64 deserialization");
  let j = J.validation == null ? { utf8: !0 } : J.validation,
    P = !0,
    C,
    z,
    A = j.utf8;
  if (typeof A === "boolean") C = A;
  else {
    P = !1;
    let E = Object.keys(A).map(function (h) {
      return A[h];
    });
    if (E.length === 0) throw new U("UTF-8 validation setting cannot be empty");
    if (typeof E[0] !== "boolean")
      throw new U("Invalid UTF-8 validation option, must specify boolean values");
    if (((C = E[0]), !E.every((h) => h === C)))
      throw new U("Invalid UTF-8 validation option - keys must be all true or all false");
  }
  if (!P) {
    z = new Set();
    for (let E of Object.keys(A)) z.add(E);
  }
  let v = Q;
  if ($.length < 5) throw new U("corrupt bson message < 5 bytes long");
  let S = b.getInt32LE($, Q);
  if (((Q += 4), S < 5 || S > $.length)) throw new U("corrupt bson message");
  let M = Y ? [] : {},
    L = 0,
    _ = Y ? !1 : null;
  while (!0) {
    let E = $[Q++];
    if (E === 0) break;
    let h = Q;
    while ($[h] !== 0 && h < $.length) h++;
    if (h >= $.byteLength) throw new U("Bad BSON Document: illegal CString");
    let T = Y ? L++ : k.toUTF8($, Q, h, !1),
      O = !0;
    if (P || z?.has(T)) O = C;
    else O = !C;
    if (_ !== !1 && T[0] === "$") _ = KZ.test(T);
    let m;
    if (((Q = h + 1), E === e2)) {
      let w = b.getInt32LE($, Q);
      if (((Q += 4), w <= 0 || w > $.length - Q || $[Q + w - 1] !== 0))
        throw new U("bad string length in bson");
      ((m = k.toUTF8($, Q, Q + w - 1, O)), (Q = Q + w));
    } else if (E === QY) {
      let w = k.allocateUnsafe(12);
      for (let B = 0; B < 12; B++) w[B] = $[Q + B];
      ((m = new F0(w)), (Q = Q + 12));
    } else if (E === L1 && H === !1) ((m = new c$(b.getInt32LE($, Q))), (Q += 4));
    else if (E === L1) ((m = b.getInt32LE($, Q)), (Q += 4));
    else if (E === $4) {
      if (((m = b.getFloat64LE($, Q)), (Q += 8), H === !1)) m = new r0(m);
    } else if (E === YY) {
      let w = b.getInt32LE($, Q),
        B = b.getInt32LE($, Q + 4);
      ((Q += 8), (m = new Date(new V(w, B).toNumber())));
    } else if (E === JY) {
      if ($[Q] !== 0 && $[Q] !== 1) throw new U("illegal boolean type value");
      m = $[Q++] === 1;
    } else if (E === Q4) {
      let w = Q,
        B = b.getInt32LE($, Q);
      if (B <= 0 || B > $.length - Q) throw new U("bad embedded document length in bson");
      if (Z) m = $.subarray(Q, Q + B);
      else {
        let n = J;
        if (!P) n = { ...J, validation: { utf8: O } };
        m = u6($, w, n, !1);
      }
      Q = Q + B;
    } else if (E === $Y) {
      let w = Q,
        B = b.getInt32LE($, Q),
        n = J,
        Q0 = Q + B;
      if (q && q[T]) n = { ...J, raw: !0 };
      if (!P) n = { ...n, validation: { utf8: O } };
      if (((m = u6($, w, n, !0)), (Q = Q + B), $[Q - 1] !== 0))
        throw new U("invalid array terminator byte");
      if (Q !== Q0) throw new U("corrupted array bson");
    } else if (E === mq) m = void 0;
    else if (E === Y4) m = null;
    else if (E === q4)
      if (X) ((m = b.getBigInt64LE($, Q)), (Q += 8));
      else {
        let w = b.getInt32LE($, Q),
          B = b.getInt32LE($, Q + 4);
        Q += 8;
        let n = new V(w, B);
        if (F && H === !0) m = n.lessThanOrEqual(qZ) && n.greaterThanOrEqual(ZZ) ? n.toNumber() : n;
        else m = n;
      }
    else if (E === KY) {
      let w = k.allocateUnsafe(16);
      for (let B = 0; B < 16; B++) w[B] = $[Q + B];
      ((Q = Q + 16), (m = new B0(w)));
    } else if (E === J4) {
      let w = b.getInt32LE($, Q);
      Q += 4;
      let B = w,
        n = $[Q++];
      if (w < 0) throw new U("Negative binary type element size found");
      if (w > $.byteLength) throw new U("Binary type size larger than document size");
      if (n === o.SUBTYPE_BYTE_ARRAY) {
        if (((w = b.getInt32LE($, Q)), (Q += 4), w < 0))
          throw new U("Negative binary type element size found for subtype 0x02");
        if (w > B - 4) throw new U("Binary type with subtype 0x02 contains too long binary size");
        if (w < B - 4) throw new U("Binary type with subtype 0x02 contains too short binary size");
      }
      if (W && H) m = k.toLocalBufferType($.subarray(Q, Q + w));
      else if (((m = new o($.subarray(Q, Q + w), n)), n === Z4 && I0.isValid(m))) m = m.toUUID();
      Q = Q + w;
    } else if (E === o6 && K === !1) {
      h = Q;
      while ($[h] !== 0 && h < $.length) h++;
      if (h >= $.length) throw new U("Bad BSON Document: illegal CString");
      let w = k.toUTF8($, Q, h, !1);
      ((Q = h + 1), (h = Q));
      while ($[h] !== 0 && h < $.length) h++;
      if (h >= $.length) throw new U("Bad BSON Document: illegal CString");
      let B = k.toUTF8($, Q, h, !1);
      Q = h + 1;
      let n = new Array(B.length);
      for (h = 0; h < B.length; h++)
        switch (B[h]) {
          case "m":
            n[h] = "m";
            break;
          case "s":
            n[h] = "g";
            break;
          case "i":
            n[h] = "i";
            break;
        }
      m = new RegExp(w, n.join(""));
    } else if (E === o6 && K === !0) {
      h = Q;
      while ($[h] !== 0 && h < $.length) h++;
      if (h >= $.length) throw new U("Bad BSON Document: illegal CString");
      let w = k.toUTF8($, Q, h, !1);
      ((Q = h + 1), (h = Q));
      while ($[h] !== 0 && h < $.length) h++;
      if (h >= $.length) throw new U("Bad BSON Document: illegal CString");
      let B = k.toUTF8($, Q, h, !1);
      ((Q = h + 1), (m = new i0(w, B)));
    } else if (E === GY) {
      let w = b.getInt32LE($, Q);
      if (((Q += 4), w <= 0 || w > $.length - Q || $[Q + w - 1] !== 0))
        throw new U("bad string length in bson");
      let B = k.toUTF8($, Q, Q + w - 1, O);
      ((m = H ? B : new v8(B)), (Q = Q + w));
    } else if (E === ZY)
      ((m = new F$({ i: b.getUint32LE($, Q), t: b.getUint32LE($, Q + 4) })), (Q += 8));
    else if (E === FY) m = new y8();
    else if (E === WY) m = new _8();
    else if (E === G4) {
      let w = b.getInt32LE($, Q);
      if (((Q += 4), w <= 0 || w > $.length - Q || $[Q + w - 1] !== 0))
        throw new U("bad string length in bson");
      let B = k.toUTF8($, Q, Q + w - 1, O);
      ((m = new p$(B)), (Q = Q + w));
    } else if (E === qY) {
      let w = b.getInt32LE($, Q);
      if (((Q += 4), w < 13))
        throw new U("code_w_scope total size shorter minimum expected length");
      let B = b.getInt32LE($, Q);
      if (((Q += 4), B <= 0 || B > $.length - Q || $[Q + B - 1] !== 0))
        throw new U("bad string length in bson");
      let n = k.toUTF8($, Q, Q + B - 1, O);
      Q = Q + B;
      let Q0 = Q,
        d = b.getInt32LE($, Q),
        e = u6($, Q0, J, !1);
      if (((Q = Q + d), w < 8 + d + B))
        throw new U("code_w_scope total size is too short, truncating scope");
      if (w > 8 + d + B) throw new U("code_w_scope total size is too long, clips outer document");
      m = new p$(n, e);
    } else if (E === Nq) {
      let w = b.getInt32LE($, Q);
      if (((Q += 4), w <= 0 || w > $.length - Q || $[Q + w - 1] !== 0))
        throw new U("bad string length in bson");
      let B = k.toUTF8($, Q, Q + w - 1, O);
      Q = Q + w;
      let n = k.allocateUnsafe(12);
      for (let d = 0; d < 12; d++) n[d] = $[Q + d];
      let Q0 = new F0(n);
      ((Q = Q + 12), (m = new C$(B, Q0)));
    } else throw new U(`Detected unknown BSON type ${E.toString(16)} for fieldname "${T}"`);
    if (T === "__proto__")
      Object.defineProperty(M, T, { value: m, writable: !0, enumerable: !0, configurable: !0 });
    else M[T] = m;
  }
  if (S !== Q - v) {
    if (Y) throw new U("corrupt array bson");
    throw new U("corrupt object bson");
  }
  if (!_) return M;
  if (HY(M)) {
    let E = Object.assign({}, M);
    return (delete E.$ref, delete E.$id, delete E.$db, new C$(M.$ref, M.$id, M.$db, E));
  }
  return M;
}
var t6 = /\x00/,
  n2 = new Set(["$db", "$ref", "$id", "$clusterTime"]);
function NQ($, Q, J, Y) {
  $[Y++] = e2;
  let q = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + q + 1), ($[Y - 1] = 0));
  let Z = k.encodeUTF8Into($, J, Y + 4);
  return (b.setInt32LE($, Y, Z + 1), (Y = Y + 4 + Z), ($[Y++] = 0), Y);
}
function OQ($, Q, J, Y) {
  let Z = !Object.is(J, -0) && Number.isSafeInteger(J) && J <= D1 && J >= A1 ? L1 : $4;
  $[Y++] = Z;
  let K = k.encodeUTF8Into($, Q, Y);
  if (((Y = Y + K), ($[Y++] = 0), Z === L1)) Y += b.setInt32LE($, Y, J);
  else Y += b.setFloat64LE($, Y, J);
  return Y;
}
function BQ($, Q, J, Y) {
  $[Y++] = q4;
  let q = k.encodeUTF8Into($, Q, Y);
  return ((Y += q), ($[Y++] = 0), (Y += b.setBigInt64LE($, Y, J)), Y);
}
function h8($, Q, J, Y) {
  $[Y++] = Y4;
  let q = k.encodeUTF8Into($, Q, Y);
  return ((Y = Y + q), ($[Y++] = 0), Y);
}
function SQ($, Q, J, Y) {
  $[Y++] = JY;
  let q = k.encodeUTF8Into($, Q, Y);
  return ((Y = Y + q), ($[Y++] = 0), ($[Y++] = J ? 1 : 0), Y);
}
function _Q($, Q, J, Y) {
  $[Y++] = YY;
  let q = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + q), ($[Y++] = 0));
  let Z = V.fromNumber(J.getTime()),
    K = Z.getLowBits(),
    W = Z.getHighBits();
  return ((Y += b.setInt32LE($, Y, K)), (Y += b.setInt32LE($, Y, W)), Y);
}
function yQ($, Q, J, Y) {
  $[Y++] = o6;
  let q = k.encodeUTF8Into($, Q, Y);
  if (((Y = Y + q), ($[Y++] = 0), J.source && J.source.match(t6) != null))
    throw new U("value " + J.source + " must not contain null bytes");
  if (((Y = Y + k.encodeUTF8Into($, J.source, Y)), ($[Y++] = 0), J.ignoreCase)) $[Y++] = 105;
  if (J.global) $[Y++] = 115;
  if (J.multiline) $[Y++] = 109;
  return (($[Y++] = 0), Y);
}
function vQ($, Q, J, Y) {
  $[Y++] = o6;
  let q = k.encodeUTF8Into($, Q, Y);
  if (((Y = Y + q), ($[Y++] = 0), J.pattern.match(t6) != null))
    throw new U("pattern " + J.pattern + " must not contain null bytes");
  ((Y = Y + k.encodeUTF8Into($, J.pattern, Y)), ($[Y++] = 0));
  let Z = J.options.split("").sort().join("");
  return ((Y = Y + k.encodeUTF8Into($, Z, Y)), ($[Y++] = 0), Y);
}
function gQ($, Q, J, Y) {
  if (J === null) $[Y++] = Y4;
  else if (J._bsontype === "MinKey") $[Y++] = FY;
  else $[Y++] = WY;
  let q = k.encodeUTF8Into($, Q, Y);
  return ((Y = Y + q), ($[Y++] = 0), Y);
}
function xQ($, Q, J, Y) {
  $[Y++] = QY;
  let q = k.encodeUTF8Into($, Q, Y);
  return ((Y = Y + q), ($[Y++] = 0), (Y += J.serializeInto($, Y)), Y);
}
function pQ($, Q, J, Y) {
  $[Y++] = J4;
  let q = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + q), ($[Y++] = 0));
  let Z = J.length;
  if (((Y += b.setInt32LE($, Y, Z)), ($[Y++] = Oq), Z <= 16))
    for (let K = 0; K < Z; K++) $[Y + K] = J[K];
  else $.set(J, Y);
  return ((Y = Y + Z), Y);
}
function cQ($, Q, J, Y, q, Z, K, W, F) {
  if (F.has(J)) throw new U("Cannot convert circular structure to BSON");
  (F.add(J), ($[Y++] = Array.isArray(J) ? $Y : Q4));
  let H = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + H), ($[Y++] = 0));
  let X = T1($, J, q, Y, Z + 1, K, W, F);
  return (F.delete(J), X);
}
function bQ($, Q, J, Y) {
  $[Y++] = KY;
  let q = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + q), ($[Y++] = 0));
  for (let Z = 0; Z < 16; Z++) $[Y + Z] = J.bytes[Z];
  return Y + 16;
}
function fQ($, Q, J, Y) {
  $[Y++] = J._bsontype === "Long" ? q4 : ZY;
  let q = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + q), ($[Y++] = 0));
  let Z = J.getLowBits(),
    K = J.getHighBits();
  return ((Y += b.setInt32LE($, Y, Z)), (Y += b.setInt32LE($, Y, K)), Y);
}
function lQ($, Q, J, Y) {
  ((J = J.valueOf()), ($[Y++] = L1));
  let q = k.encodeUTF8Into($, Q, Y);
  return ((Y = Y + q), ($[Y++] = 0), (Y += b.setInt32LE($, Y, J)), Y);
}
function dQ($, Q, J, Y) {
  $[Y++] = $4;
  let q = k.encodeUTF8Into($, Q, Y);
  return ((Y = Y + q), ($[Y++] = 0), (Y += b.setFloat64LE($, Y, J.value)), Y);
}
function uQ($, Q, J, Y) {
  $[Y++] = G4;
  let q = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + q), ($[Y++] = 0));
  let Z = J.toString(),
    K = k.encodeUTF8Into($, Z, Y + 4) + 1;
  return (b.setInt32LE($, Y, K), (Y = Y + 4 + K - 1), ($[Y++] = 0), Y);
}
function oQ($, Q, J, Y, q = !1, Z = 0, K = !1, W = !0, F) {
  if (J.scope && typeof J.scope === "object") {
    $[Y++] = qY;
    let H = k.encodeUTF8Into($, Q, Y);
    ((Y = Y + H), ($[Y++] = 0));
    let X = Y,
      j = J.code;
    Y = Y + 4;
    let P = k.encodeUTF8Into($, j, Y + 4) + 1;
    (b.setInt32LE($, Y, P), ($[Y + 4 + P - 1] = 0), (Y = Y + P + 4));
    let C = T1($, J.scope, q, Y, Z + 1, K, W, F);
    Y = C - 1;
    let z = C - X;
    ((X += b.setInt32LE($, X, z)), ($[Y++] = 0));
  } else {
    $[Y++] = G4;
    let H = k.encodeUTF8Into($, Q, Y);
    ((Y = Y + H), ($[Y++] = 0));
    let X = J.code.toString(),
      j = k.encodeUTF8Into($, X, Y + 4) + 1;
    (b.setInt32LE($, Y, j), (Y = Y + 4 + j - 1), ($[Y++] = 0));
  }
  return Y;
}
function nQ($, Q, J, Y) {
  $[Y++] = J4;
  let q = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + q), ($[Y++] = 0));
  let { buffer: Z, position: K } = J;
  if (J.sub_type === o.SUBTYPE_BYTE_ARRAY) K = K + 4;
  if (((Y += b.setInt32LE($, Y, K)), ($[Y++] = J.sub_type), J.sub_type === o.SUBTYPE_BYTE_ARRAY))
    ((K = K - 4), (Y += b.setInt32LE($, Y, K)));
  if (J.sub_type === o.SUBTYPE_VECTOR) k$(J);
  if (K <= 16) for (let W = 0; W < K; W++) $[Y + W] = Z[W];
  else $.set(Z, Y);
  return ((Y = Y + J.position), Y);
}
function tQ($, Q, J, Y) {
  $[Y++] = GY;
  let q = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + q), ($[Y++] = 0));
  let Z = k.encodeUTF8Into($, J.value, Y + 4) + 1;
  return (b.setInt32LE($, Y, Z), (Y = Y + 4 + Z - 1), ($[Y++] = 0), Y);
}
function aQ($, Q, J, Y, q, Z, K) {
  $[Y++] = Q4;
  let W = k.encodeUTF8Into($, Q, Y);
  ((Y = Y + W), ($[Y++] = 0));
  let F = Y,
    H = { $ref: J.collection || J.namespace, $id: J.oid };
  if (J.db != null) H.$db = J.db;
  H = Object.assign(H, J.fields);
  let X = T1($, H, !1, Y, q + 1, Z, !0, K),
    j = X - F;
  return ((F += b.setInt32LE($, Y, j)), X);
}
function T1($, Q, J, Y, q, Z, K, W) {
  if (W == null) {
    if (Q == null) return (($[0] = 5), ($[1] = 0), ($[2] = 0), ($[3] = 0), ($[4] = 0), 5);
    if (Array.isArray(Q)) throw new U("serialize does not support an array as the root input");
    if (typeof Q !== "object")
      throw new U("serialize does not support non-object as the root input");
    else if ("_bsontype" in Q && typeof Q._bsontype === "string")
      throw new U("BSON types cannot be serialized as a document");
    else if (N8(Q) || m8(Q) || g$(Q) || iQ(Q))
      throw new U("date, regexp, typedarray, and arraybuffer cannot be BSON documents");
    W = new Set();
  }
  W.add(Q);
  let F = Y + 4;
  if (Array.isArray(Q))
    for (let X = 0; X < Q.length; X++) {
      let j = `${X}`,
        P = Q[X];
      if (typeof P?.toBSON === "function") P = P.toBSON();
      let C = typeof P;
      if (P === void 0) F = h8($, j, P, F);
      else if (P === null) F = h8($, j, P, F);
      else if (C === "string") F = NQ($, j, P, F);
      else if (C === "number") F = OQ($, j, P, F);
      else if (C === "bigint") F = BQ($, j, P, F);
      else if (C === "boolean") F = SQ($, j, P, F);
      else if (C === "object" && P._bsontype == null)
        if (P instanceof Date || N8(P)) F = _Q($, j, P, F);
        else if (P instanceof Uint8Array || g$(P)) F = pQ($, j, P, F);
        else if (P instanceof RegExp || m8(P)) F = yQ($, j, P, F);
        else F = cQ($, j, P, F, J, q, Z, K, W);
      else if (C === "object") {
        if (P[S8] !== q8) throw new Z8();
        else if (P._bsontype === "ObjectId") F = xQ($, j, P, F);
        else if (P._bsontype === "Decimal128") F = bQ($, j, P, F);
        else if (P._bsontype === "Long" || P._bsontype === "Timestamp") F = fQ($, j, P, F);
        else if (P._bsontype === "Double") F = dQ($, j, P, F);
        else if (P._bsontype === "Code") F = oQ($, j, P, F, J, q, Z, K, W);
        else if (P._bsontype === "Binary") F = nQ($, j, P, F);
        else if (P._bsontype === "BSONSymbol") F = tQ($, j, P, F);
        else if (P._bsontype === "DBRef") F = aQ($, j, P, F, q, Z, W);
        else if (P._bsontype === "BSONRegExp") F = vQ($, j, P, F);
        else if (P._bsontype === "Int32") F = lQ($, j, P, F);
        else if (P._bsontype === "MinKey" || P._bsontype === "MaxKey") F = gQ($, j, P, F);
        else if (typeof P._bsontype !== "undefined")
          throw new U(`Unrecognized or invalid _bsontype: ${String(P._bsontype)}`);
      } else if (C === "function" && Z) F = uQ($, j, P, F);
    }
  else if (Q instanceof Map || eQ(Q)) {
    let X = Q.entries(),
      j = !1;
    while (!j) {
      let P = X.next();
      if (((j = !!P.done), j)) continue;
      let C = P.value ? P.value[0] : void 0,
        z = P.value ? P.value[1] : void 0;
      if (typeof z?.toBSON === "function") z = z.toBSON();
      let A = typeof z;
      if (typeof C === "string" && !n2.has(C)) {
        if (C.match(t6) != null) throw new U("key " + C + " must not contain null bytes");
        if (J) {
          if (C[0] === "$") throw new U("key " + C + " must not start with '$'");
          else if (C.includes(".")) throw new U("key " + C + " must not contain '.'");
        }
      }
      if (z === void 0) {
        if (K === !1) F = h8($, C, z, F);
      } else if (z === null) F = h8($, C, z, F);
      else if (A === "string") F = NQ($, C, z, F);
      else if (A === "number") F = OQ($, C, z, F);
      else if (A === "bigint") F = BQ($, C, z, F);
      else if (A === "boolean") F = SQ($, C, z, F);
      else if (A === "object" && z._bsontype == null)
        if (z instanceof Date || N8(z)) F = _Q($, C, z, F);
        else if (z instanceof Uint8Array || g$(z)) F = pQ($, C, z, F);
        else if (z instanceof RegExp || m8(z)) F = yQ($, C, z, F);
        else F = cQ($, C, z, F, J, q, Z, K, W);
      else if (A === "object") {
        if (z[S8] !== q8) throw new Z8();
        else if (z._bsontype === "ObjectId") F = xQ($, C, z, F);
        else if (z._bsontype === "Decimal128") F = bQ($, C, z, F);
        else if (z._bsontype === "Long" || z._bsontype === "Timestamp") F = fQ($, C, z, F);
        else if (z._bsontype === "Double") F = dQ($, C, z, F);
        else if (z._bsontype === "Code") F = oQ($, C, z, F, J, q, Z, K, W);
        else if (z._bsontype === "Binary") F = nQ($, C, z, F);
        else if (z._bsontype === "BSONSymbol") F = tQ($, C, z, F);
        else if (z._bsontype === "DBRef") F = aQ($, C, z, F, q, Z, W);
        else if (z._bsontype === "BSONRegExp") F = vQ($, C, z, F);
        else if (z._bsontype === "Int32") F = lQ($, C, z, F);
        else if (z._bsontype === "MinKey" || z._bsontype === "MaxKey") F = gQ($, C, z, F);
        else if (typeof z._bsontype !== "undefined")
          throw new U(`Unrecognized or invalid _bsontype: ${String(z._bsontype)}`);
      } else if (A === "function" && Z) F = uQ($, C, z, F);
    }
  } else {
    if (typeof Q?.toBSON === "function") {
      if (((Q = Q.toBSON()), Q != null && typeof Q !== "object"))
        throw new U("toBSON function did not return an object");
    }
    for (let X of Object.keys(Q)) {
      let j = Q[X];
      if (typeof j?.toBSON === "function") j = j.toBSON();
      let P = typeof j;
      if (typeof X === "string" && !n2.has(X)) {
        if (X.match(t6) != null) throw new U("key " + X + " must not contain null bytes");
        if (J) {
          if (X[0] === "$") throw new U("key " + X + " must not start with '$'");
          else if (X.includes(".")) throw new U("key " + X + " must not contain '.'");
        }
      }
      if (j === void 0) {
        if (K === !1) F = h8($, X, j, F);
      } else if (j === null) F = h8($, X, j, F);
      else if (P === "string") F = NQ($, X, j, F);
      else if (P === "number") F = OQ($, X, j, F);
      else if (P === "bigint") F = BQ($, X, j, F);
      else if (P === "boolean") F = SQ($, X, j, F);
      else if (P === "object" && j._bsontype == null)
        if (j instanceof Date || N8(j)) F = _Q($, X, j, F);
        else if (j instanceof Uint8Array || g$(j)) F = pQ($, X, j, F);
        else if (j instanceof RegExp || m8(j)) F = yQ($, X, j, F);
        else F = cQ($, X, j, F, J, q, Z, K, W);
      else if (P === "object") {
        if (j[S8] !== q8) throw new Z8();
        else if (j._bsontype === "ObjectId") F = xQ($, X, j, F);
        else if (j._bsontype === "Decimal128") F = bQ($, X, j, F);
        else if (j._bsontype === "Long" || j._bsontype === "Timestamp") F = fQ($, X, j, F);
        else if (j._bsontype === "Double") F = dQ($, X, j, F);
        else if (j._bsontype === "Code") F = oQ($, X, j, F, J, q, Z, K, W);
        else if (j._bsontype === "Binary") F = nQ($, X, j, F);
        else if (j._bsontype === "BSONSymbol") F = tQ($, X, j, F);
        else if (j._bsontype === "DBRef") F = aQ($, X, j, F, q, Z, W);
        else if (j._bsontype === "BSONRegExp") F = vQ($, X, j, F);
        else if (j._bsontype === "Int32") F = lQ($, X, j, F);
        else if (j._bsontype === "MinKey" || j._bsontype === "MaxKey") F = gQ($, X, j, F);
        else if (typeof j._bsontype !== "undefined")
          throw new U(`Unrecognized or invalid _bsontype: ${String(j._bsontype)}`);
      } else if (P === "function" && Z) F = uQ($, X, j, F);
    }
  }
  (W.delete(Q), ($[F++] = 0));
  let H = F - Y;
  return ((Y += b.setInt32LE($, Y, H)), F);
}
function FZ($) {
  return $ != null && typeof $ === "object" && "_bsontype" in $ && typeof $._bsontype === "string";
}
var WZ = {
  $oid: F0,
  $binary: o,
  $uuid: o,
  $symbol: v8,
  $numberInt: c$,
  $numberDecimal: B0,
  $numberDouble: r0,
  $numberLong: V,
  $minKey: y8,
  $maxKey: _8,
  $regex: i0,
  $regularExpression: i0,
  $timestamp: F$,
};
function MY($, Q = {}) {
  if (typeof $ === "number") {
    let Y = $ <= D1 && $ >= A1,
      q = $ <= a2 && $ >= s2;
    if (Q.relaxed || Q.legacy) return $;
    if (Number.isInteger($) && !Object.is($, -0)) {
      if (Y) return new c$($);
      if (q) {
        if (Q.useBigInt64) return BigInt($);
        return V.fromNumber($);
      }
    }
    return new r0($);
  }
  if ($ == null || typeof $ !== "object") return $;
  if ($.$undefined) return null;
  let J = Object.keys($).filter((Y) => Y.startsWith("$") && $[Y] != null);
  for (let Y = 0; Y < J.length; Y++) {
    let q = WZ[J[Y]];
    if (q) return q.fromExtendedJSON($, Q);
  }
  if ($.$date != null) {
    let Y = $.$date,
      q = new Date();
    if (Q.legacy)
      if (typeof Y === "number") q.setTime(Y);
      else if (typeof Y === "string") q.setTime(Date.parse(Y));
      else if (typeof Y === "bigint") q.setTime(Number(Y));
      else throw new n6(`Unrecognized type for EJSON date: ${typeof Y}`);
    else if (typeof Y === "string") q.setTime(Date.parse(Y));
    else if (V.isLong(Y)) q.setTime(Y.toNumber());
    else if (typeof Y === "number" && Q.relaxed) q.setTime(Y);
    else if (typeof Y === "bigint") q.setTime(Number(Y));
    else throw new n6(`Unrecognized type for EJSON date: ${typeof Y}`);
    return q;
  }
  if ($.$code != null) {
    let Y = Object.assign({}, $);
    if ($.$scope) Y.$scope = MY($.$scope);
    return p$.fromExtendedJSON($);
  }
  if (HY($) || $.$dbPointer) {
    let Y = $.$ref ? $ : $.$dbPointer;
    if (Y instanceof C$) return Y;
    let q = Object.keys(Y).filter((K) => K.startsWith("$")),
      Z = !0;
    if (
      (q.forEach((K) => {
        if (["$ref", "$id", "$db"].indexOf(K) === -1) Z = !1;
      }),
      Z)
    )
      return C$.fromExtendedJSON(Y);
  }
  return $;
}
function XZ($, Q) {
  return $.map((J, Y) => {
    Q.seenObjects.push({ propertyName: `index ${Y}`, obj: null });
    try {
      return U$(J, Q);
    } finally {
      Q.seenObjects.pop();
    }
  });
}
function t2($) {
  let Q = $.toISOString();
  return $.getUTCMilliseconds() !== 0 ? Q : Q.slice(0, -5) + "Z";
}
function U$($, Q) {
  if ($ instanceof Map || eQ($)) {
    let J = Object.create(null);
    for (let [Y, q] of $) {
      if (typeof Y !== "string") throw new U("Can only serialize maps with string keys");
      J[Y] = q;
    }
    return U$(J, Q);
  }
  if ((typeof $ === "object" || typeof $ === "function") && $ !== null) {
    let J = Q.seenObjects.findIndex((Y) => Y.obj === $);
    if (J !== -1) {
      let Y = Q.seenObjects.map((X) => X.propertyName),
        q = Y.slice(0, J)
          .map((X) => `${X} -> `)
          .join(""),
        Z = Y[J],
        K =
          " -> " +
          Y.slice(J + 1, Y.length - 1)
            .map((X) => `${X} -> `)
            .join(""),
        W = Y[Y.length - 1],
        F = " ".repeat(q.length + Z.length / 2),
        H = "-".repeat(K.length + (Z.length + W.length) / 2 - 1);
      throw new U(`Converting circular structure to EJSON:
    ${q}${Z}${K}${W}
    ${F}\\${H}/`);
    }
    Q.seenObjects[Q.seenObjects.length - 1].obj = $;
  }
  if (Array.isArray($)) return XZ($, Q);
  if ($ === void 0) return Q.ignoreUndefined ? void 0 : null;
  if ($ instanceof Date || N8($)) {
    let J = $.getTime(),
      Y = J > -1 && J < 253402318800000;
    if (Q.legacy) return Q.relaxed && Y ? { $date: $.getTime() } : { $date: t2($) };
    return Q.relaxed && Y ? { $date: t2($) } : { $date: { $numberLong: $.getTime().toString() } };
  }
  if (typeof $ === "number" && (!Q.relaxed || !isFinite($))) {
    if (Number.isInteger($) && !Object.is($, -0)) {
      if ($ >= A1 && $ <= D1) return { $numberInt: $.toString() };
      if ($ >= s2 && $ <= a2) return { $numberLong: $.toString() };
    }
    return { $numberDouble: Object.is($, -0) ? "-0.0" : $.toString() };
  }
  if (typeof $ === "bigint") {
    if (!Q.relaxed) return { $numberLong: BigInt.asIntN(64, $).toString() };
    return Number(BigInt.asIntN(64, $));
  }
  if ($ instanceof RegExp || m8($)) {
    let J = $.flags;
    if (J === void 0) {
      let q = $.toString().match(/[gimuy]*$/);
      if (q) J = q[0];
    }
    return new i0($.source, J).toExtendedJSON(Q);
  }
  if ($ != null && typeof $ === "object") return HZ($, Q);
  return $;
}
var jZ = {
  Binary: ($) => new o($.value(), $.sub_type),
  Code: ($) => new p$($.code, $.scope),
  DBRef: ($) => new C$($.collection || $.namespace, $.oid, $.db, $.fields),
  Decimal128: ($) => new B0($.bytes),
  Double: ($) => new r0($.value),
  Int32: ($) => new c$($.value),
  Long: ($) =>
    V.fromBits(
      $.low != null ? $.low : $.low_,
      $.low != null ? $.high : $.high_,
      $.low != null ? $.unsigned : $.unsigned_,
    ),
  MaxKey: () => new _8(),
  MinKey: () => new y8(),
  ObjectId: ($) => new F0($),
  BSONRegExp: ($) => new i0($.pattern, $.options),
  BSONSymbol: ($) => new v8($.value),
  Timestamp: ($) => F$.fromBits($.low, $.high),
};
function HZ($, Q) {
  if ($ == null || typeof $ !== "object") throw new U("not an object instance");
  let J = $._bsontype;
  if (typeof J === "undefined") {
    let Y = {};
    for (let q of Object.keys($)) {
      Q.seenObjects.push({ propertyName: q, obj: null });
      try {
        let Z = U$($[q], Q);
        if (q === "__proto__")
          Object.defineProperty(Y, q, { value: Z, writable: !0, enumerable: !0, configurable: !0 });
        else Y[q] = Z;
      } finally {
        Q.seenObjects.pop();
      }
    }
    return Y;
  } else if ($ != null && typeof $ === "object" && typeof $._bsontype === "string" && $[S8] !== q8)
    throw new Z8();
  else if (FZ($)) {
    let Y = $;
    if (typeof Y.toExtendedJSON !== "function") {
      let q = jZ[$._bsontype];
      if (!q) throw new U("Unrecognized or invalid _bsontype: " + $._bsontype);
      Y = q(Y);
    }
    if (J === "Code" && Y.scope) Y = new p$(Y.code, U$(Y.scope, Q));
    else if (J === "DBRef" && Y.oid)
      Y = new C$(U$(Y.collection, Q), U$(Y.oid, Q), U$(Y.db, Q), U$(Y.fields, Q));
    return Y.toExtendedJSON(Q);
  } else throw new U("_bsontype must be a string, but was: " + typeof J);
}
function zY($, Q) {
  let J = { useBigInt64: Q?.useBigInt64 ?? !1, relaxed: Q?.relaxed ?? !0, legacy: Q?.legacy ?? !1 };
  return JSON.parse($, (Y, q) => {
    if (Y.indexOf("\x00") !== -1)
      throw new U(
        `BSON Document field names cannot contain null bytes, found: ${JSON.stringify(Y)}`,
      );
    return MY(q, J);
  });
}
function kY($, Q, J, Y) {
  if (J != null && typeof J === "object") ((Y = J), (J = 0));
  if (Q != null && typeof Q === "object" && !Array.isArray(Q)) ((Y = Q), (Q = void 0), (J = 0));
  let q = Object.assign({ relaxed: !0, legacy: !1 }, Y, {
      seenObjects: [{ propertyName: "(root)", obj: null }],
    }),
    Z = U$($, q);
  return JSON.stringify(Z, Q, J);
}
function PZ($, Q) {
  return ((Q = Q || {}), JSON.parse(kY($, Q)));
}
function VZ($, Q) {
  return ((Q = Q || {}), zY(JSON.stringify($), Q));
}
var g8 = Object.create(null);
g8.parse = zY;
g8.stringify = kY;
g8.serialize = PZ;
g8.deserialize = VZ;
Object.freeze(g8);
var H0 = {
  double: 1,
  string: 2,
  object: 3,
  array: 4,
  binData: 5,
  undefined: 6,
  objectId: 7,
  bool: 8,
  date: 9,
  null: 10,
  regex: 11,
  dbPointer: 12,
  javascript: 13,
  symbol: 14,
  javascriptWithScope: 15,
  int: 16,
  timestamp: 17,
  long: 18,
  decimal: 19,
  minKey: 255,
  maxKey: 127,
};
function sQ($, Q) {
  try {
    return b.getNonnegativeInt32LE($, Q);
  } catch (J) {
    throw new K$("BSON size cannot be negative", Q, { cause: J });
  }
}
function rQ($, Q) {
  let J = Q;
  for (; $[J] !== 0; J++);
  if (J === $.length - 1) throw new K$("Null terminator not found", Q);
  return J;
}
function RZ($, Q = 0) {
  if (((Q ??= 0), $.length < 5))
    throw new K$(`Input must be at least 5 bytes, got ${$.length} bytes`, Q);
  let J = sQ($, Q);
  if (J > $.length - Q)
    throw new K$(
      `Parsed documentSize (${J} bytes) does not match input length (${$.length} bytes)`,
      Q,
    );
  if ($[Q + J - 1] !== 0) throw new K$("BSON documents must end in 0x00", Q + J);
  let Y = [],
    q = Q + 4;
  while (q <= J + Q) {
    let Z = $[q];
    if (((q += 1), Z === 0)) {
      if (q - Q !== J) throw new K$("Invalid 0x00 type byte", q);
      break;
    }
    let K = q,
      W = rQ($, q) - K;
    q += W + 1;
    let F;
    if (Z === H0.double || Z === H0.long || Z === H0.date || Z === H0.timestamp) F = 8;
    else if (Z === H0.int) F = 4;
    else if (Z === H0.objectId) F = 12;
    else if (Z === H0.decimal) F = 16;
    else if (Z === H0.bool) F = 1;
    else if (Z === H0.null || Z === H0.undefined || Z === H0.maxKey || Z === H0.minKey) F = 0;
    else if (Z === H0.regex) F = rQ($, rQ($, q) + 1) + 1 - q;
    else if (Z === H0.object || Z === H0.array || Z === H0.javascriptWithScope) F = sQ($, q);
    else if (
      Z === H0.string ||
      Z === H0.binData ||
      Z === H0.dbPointer ||
      Z === H0.javascript ||
      Z === H0.symbol
    ) {
      if (((F = sQ($, q) + 4), Z === H0.binData)) F += 1;
      if (Z === H0.dbPointer) F += 12;
    } else throw new K$(`Invalid 0x${Z.toString(16).padStart(2, "0")} type byte`, q);
    if (F > J) throw new K$("value reports length larger than document", q);
    (Y.push([Z, K, W, q, F]), (q += F));
  }
  return Y;
}
var w1 = Object.create(null);
w1.parseToElements = RZ;
w1.ByteUtils = k;
w1.NumberUtils = b;
Object.freeze(w1);
var UY = 17825792,
  x$ = k.allocate(UY);
function MZ($) {
  if (x$.length < $) x$ = k.allocate($);
}
function zZ($, Q = {}) {
  let J = typeof Q.checkKeys === "boolean" ? Q.checkKeys : !1,
    Y = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
    q = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0,
    Z = typeof Q.minInternalBufferSize === "number" ? Q.minInternalBufferSize : UY;
  if (x$.length < Z) x$ = k.allocate(Z);
  let K = T1(x$, $, J, 0, 0, Y, q, null),
    W = k.allocateUnsafe(K);
  return (W.set(x$.subarray(0, K), 0), W);
}
function kZ($, Q, J = {}) {
  let Y = typeof J.checkKeys === "boolean" ? J.checkKeys : !1,
    q = typeof J.serializeFunctions === "boolean" ? J.serializeFunctions : !1,
    Z = typeof J.ignoreUndefined === "boolean" ? J.ignoreUndefined : !0,
    K = typeof J.index === "number" ? J.index : 0,
    W = T1(x$, $, Y, 0, 0, q, Z, null);
  return (Q.set(x$.subarray(0, W), K), K + W - 1);
}
function UZ($, Q = {}) {
  return RY(k.toLocalBufferType($), Q);
}
function CZ($, Q = {}) {
  Q = Q || {};
  let J = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
    Y = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0;
  return d6($, J, Y);
}
function LZ($, Q, J, Y, q, Z) {
  let K = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, Z),
    W = k.toLocalBufferType($),
    F = Q;
  for (let H = 0; H < J; H++) {
    let X = b.getInt32LE(W, F);
    ((K.index = F), (Y[q + H] = RY(W, K)), (F = F + X));
  }
  return F;
}
var W$ = Object.freeze({
  __proto__: null,
  BSONError: U,
  BSONOffsetError: K$,
  BSONRegExp: i0,
  BSONRuntimeError: n6,
  BSONSymbol: v8,
  BSONType: Bq,
  BSONValue: _0,
  BSONVersionError: Z8,
  Binary: o,
  ByteUtils: k,
  Code: p$,
  DBRef: C$,
  Decimal128: B0,
  Double: r0,
  EJSON: g8,
  Int32: c$,
  Long: V,
  MaxKey: _8,
  MinKey: y8,
  NumberUtils: b,
  ObjectId: F0,
  Timestamp: F$,
  UUID: I0,
  bsonType: K4,
  calculateObjectSize: CZ,
  deserialize: UZ,
  deserializeStream: LZ,
  onDemand: w1,
  serialize: zZ,
  serializeWithBufferAndIndex: kZ,
  setInternalBufferSize: MZ,
});
var K0,
  x8 = new Map(),
  I1 = !0,
  F4 = 0,
  X4 = !1,
  j4 = !1;
function k1() {
  let $ = J0.url?.ws;
  ((K0 = $ ? new WebSocket(`${$}${$.includes("?") ? "&" : "?"}v=${d4}`) : N.ws.$ws()),
    (K0.binaryType = "arraybuffer"),
    (I1 = !0),
    K0.addEventListener("open", () => {
      (console.log("[WS] Connected"), (X4 = !1), (j4 = !1), (F4 = 0), p7(), T7(), k8());
    }),
    K0.addEventListener("message", (Q) => {
      let J = W$.deserialize(Q.data);
      if ((P$ && console.debug("[WS] SERVER", J), x8.has(J.nonce))) {
        let q = x8.get(J.nonce);
        (x8.delete(J.nonce), q(J));
      }
      let Y = wQ.get(J.op);
      if (!Y) {
        console.error("[WS] Got an unexpected packet", J);
        return;
      }
      Y(J);
    }),
    K0.addEventListener("close", (Q) => {
      if ((x8.clear(), console.warn(`[WS] Disconnected (${Q.code})`), Q.code == 4008)) {
        ((I1 = !1), q7());
        return;
      }
      if (!I1 || document.hidden) return;
      if ((console.warn("[WS] Reconnecting..."), Q.code == 4004 && !H4)) m$();
      let J = Math.random() * 2000;
      if (Q.code == 4007) setTimeout(k1, 500 + J);
      else {
        F4++;
        let Y = Math.min(5000 * F4, 30000);
        setTimeout(k1, Y + J);
      }
    }));
}
function H7($) {
  if (((I1 = !1), K0)) K0.close($);
}
var W4;
document.addEventListener("visibilitychange", () => {
  if ((clearTimeout(W4), (W4 = null), document.hidden)) {
    W4 = setTimeout(() => {
      if (!document.hidden) return;
      (console.log("Tab has been inactive for over a minute, disconnecting from WS"), K0?.close());
    }, 60000);
    return;
  }
  if (I1 && (!K0 || K0.readyState == WebSocket.CLOSED)) k1();
});
function CY($ = {}) {
  if (!K0 || K0.readyState != WebSocket.OPEN)
    return (
      delete $.token, console.warn("Tried to send a packet while the connection is closed", $), !0
    );
}
var H4 = !1;
function k8() {
  if (X4 || !K0 || K0.readyState != WebSocket.OPEN) return;
  if (w$() && !(R.token && R.user)) return;
  ((H4 = !0), e5(2, { token: w$() ?? "viewer" }));
}
function D2() {
  ((j4 = !0), IQ());
}
function e5($, Q) {
  if (CY(Q) || !K0) return !1;
  if ($ != 2 && !j4) return !1;
  if ($ == 2) ((H4 = !1), (X4 = !0));
  (P$ && console.debug("[WS] CLIENT", $, Q), K0.send(W$.serialize({ op: $, ...(Q ?? {}) })));
}
function v$($, Q, J = 60000) {
  return new Promise((Y, q) => {
    if (CY(Q) || !K0) return q("Tried to send a packet while the connection is closed");
    let Z = Date.now(),
      K = setTimeout(() => {
        (x8.delete(Z), q(`Nonce ${Z} timed out after ${J}ms`));
      }, J);
    (x8.set(Z, (W) => {
      (clearTimeout(K), Y(W));
    }),
      P$ && console.debug(`[WS] CLIENT (nonce=${Z})`, $, Q),
      K0.send(W$.serialize({ op: $, nonce: Z, ...(Q ?? {}) })));
  });
}
function C2($) {
  let Q = new Uint8Array($.length * 5),
    J = new DataView(Q.buffer),
    Y = 0;
  for (let q of $) (J.setUint32(Y, q[0], !0), J.setUint8(Y + 4, q[1]), (Y += 5));
  return v$(7, { pixels: Q });
}
function m2() {
  return v$(9, {}, 1e4);
}
function LY($) {
  return v$(10, $, 5000);
}
var a6 = 160;
function P4($) {
  let Q = $ % f,
    J = Math.floor($ / f);
  V4(Q, J);
}
function V4($, Q) {
  E1($ - a6 / 2, Q - a6 / 2, a6, a6);
}
async function f0($) {
  let { connId: Q, userId: J, fallbackPos: Y, username: q } = $;
  if (Q !== void 0 && Q === R.connectionId) return (h$("That's you!"), !1);
  if (Q !== void 0) {
    let Z = V0.get(Q);
    if (Z && !Z.partial && Z.lastPos !== void 0) return (P4(Z.lastPos), !0);
  }
  if (Y !== void 0) return (P4(Y), !0);
  if (Q !== void 0 || J !== void 0)
    try {
      let Z = await LY({ connId: Q, userId: J });
      if (Z.pos != null) return (P4(Z.pos), !0);
    } catch {}
  return (
    h$(q ? `${q} isn't on the wall right now.` : "That user isn't on the wall right now."), !1
  );
}
function DY() {
  let $ = G("div.list.mod-list"),
    Q = G("div.mod-status"),
    J = G("div.btn-container"),
    Y = null;
  async function q(K) {
    if (K) ((Y = null), $.replaceChildren(), J.replaceChildren());
    Q.replaceChildren("Loading...");
    let W = await BJ({ status: "open", cursor: Y ?? void 0, limit: 25 });
    if (!W.ok) {
      Q.replaceChildren(G0(await u(W)));
      return;
    }
    let { items: F, next_cursor: H } = await W.json();
    if ((Q.replaceChildren(), K && !F.length)) $.replaceChildren(G("p.desc", "No open items."));
    else for (let X of F) $.append(Z(X));
    ((Y = H),
      J.replaceChildren(
        Y
          ? G("button.btn", "Load more", {
              onclick() {
                q(!1);
              },
            })
          : "",
      ));
  }
  function Z(K) {
    let W = G("div.mod-action-msg"),
      F = G("input.box", { type: "text", placeholder: "Notes (optional)" }),
      H = G("div.item.box.outset.mod-review"),
      X = (A, v, S) =>
        G("button.btn", A, {
          async onclick() {
            if (!(await i(S, A))) return;
            let L = await SJ(K.id, v, F.value.trim() || void 0);
            if (!L.ok) {
              W.replaceChildren(G("p.error.noicon", `${A} failed: ${await u(L)}`));
              return;
            }
            H.remove();
          },
        }),
      j = K.details.user_id,
      P = G("div.mod-flag-samples");
    if (typeof j == "number")
      (async () => {
        let A = await iJ(j);
        if (!A.ok) return;
        let { samples: v } = await A.json();
        if (!v.length) return;
        let S = v.map((M) => ({
          pixels: M6(new Uint8Array([...atob(M.pixels)].map((L) => L.charCodeAt(0)))),
          label: x0(M.createdAt),
        }));
        P.replaceChildren(
          G("span.desc", "flagged draws:"),
          ...S.map((M, L) => {
            let _ = M8(M.pixels);
            return (
              (_.title = `${M.label} (click to expand)`),
              _.classList.add("mod-clickable-thumb"),
              _.addEventListener("click", () => Y7(S, L)),
              _
            );
          }),
        );
      })();
    let C = K.target_username,
      z =
        typeof j == "number"
          ? G(
              "div.mod-form-row.mod-review-target",
              C
                ? G("span.mod-jump-name.tooltip", C, {
                    dataset: { tooltip: g.jumpTo },
                    async onclick() {
                      if (await f0({ userId: j, username: C }))
                        (p(), E$({ label: "Review Queue", reopen: () => s("review") }));
                    },
                  })
                : "",
              G("span.desc", `#${j}`),
              K.target_discord ? G("span.desc", `discord: ${K.target_discord}`) : "",
              G("button.btn", "View user", {
                onclick() {
                  s("users", j, { label: "Review Queue", reopen: () => s("review") });
                },
              }),
            )
          : "";
    return (
      H.append(
        G(
          "div.mod-review-head",
          G("b", K.kind),
          G("span.mod-tag", `x${K.hit_count}`),
          G("span.desc", w0(K.created_at)),
        ),
        z,
        P,
        G("div.details", H6(K.details)),
        G("div.input", F),
        G(
          "div.mod-form-row",
          X("Dismiss", "dismiss", `Dismiss review item #${K.id}?`),
          X("Mark clean", "mark_clean", `Mark item #${K.id} clean?`),
          X("Ban", "ban", `Perma-ban the target of item #${K.id}?`),
        ),
        W,
      ),
      H
    );
  }
  return (
    q(!0),
    G(
      "div.mod-review-tab",
      G(
        "div.btn-container.mod-toolbar",
        G("button.btn", "Refresh", {
          onclick() {
            q(!0);
          },
        }),
      ),
      Q,
      $,
      J,
    )
  );
}
function AY() {
  let $ = G("div.mod-action-msg"),
    Q = G("input.box", { type: "text", placeholder: "Title (optional)", maxLength: 120 }),
    J = G("textarea.box", { placeholder: g.broadcast.placeholder, rows: 4, maxLength: 1000 }),
    Y = G("input", { type: "checkbox", checked: !1, id: "eph" });
  return G(
    "div.mod-broadcast",
    G("p.desc", g.broadcast.desc),
    G(
      "div.mod-form",
      G("div.input", Q),
      G("div.input", J),
      G("div.checkbox", Y, G("label", { htmlFor: "eph" }, g.broadcast.ephDesc)),
      $,
      G(
        "div.mod-form-row",
        G("button.btn", g.broadcast.btn, {
          async onclick() {
            let q = J.value.trim();
            if (!q) {
              $.replaceChildren(G0("Message can't be empty."));
              return;
            }
            let Z = Q.value.trim();
            if (!(await i(g.broadcast.confirm, "Broadcast"))) return;
            let W = await OJ(q, Z || void 0, !Y.checked);
            if (!W.ok) {
              $.replaceChildren(G0(`Broadcast failed: ${await u(W)}`));
              return;
            }
            ((Q.value = ""),
              (J.value = ""),
              $.replaceChildren(G("p.success.noicon", g.broadcast.ok)));
          },
        }),
      ),
    ),
  );
}
var R4 = 10;
function TY($) {
  if ($ <= 0) return 1.1;
  let Q = Math.max(1, Math.min(10, $));
  return Math.round((0.95 - ((Q - 1) / 9) * 0.55) * 100) / 100;
}
function wY() {
  let $ = G("div.mod-action-msg"),
    Q = G("p.desc.mod-bot-mapping"),
    J = G("p.desc"),
    Y = G("input.box.mod-bot-slider", {
      type: "range",
      min: "0",
      max: String(R4),
      step: "1",
      value: "0",
    }),
    q = (K) => {
      if (K <= 0) return g.detection.off;
      let W = Math.round(TY(K) * 100);
      return o0(g.detection.current, K, R4, W);
    },
    Z = () => {
      Q.replaceChildren(q(Number(Y.value)));
    };
  return (
    (Y.oninput = Z),
    (async () => {
      let K = await tJ();
      if (!K.ok) {
        $.replaceChildren(G0(await u(K)));
        return;
      }
      let { sensitivity: W, openBotFlags: F } = await K.json();
      ((Y.value = String(W)), Z(), J.replaceChildren(`${g.detection.flags} ${F}.`));
    })(),
    G(
      "div.mod-bot-config",
      G("p.desc", g.detection.description.join(" ")),
      G(
        "div.mod-form",
        G(
          "div.mod-bot-slider-row",
          G("span.desc", g.detection.slider[0]),
          Y,
          G("span.desc", g.detection.slider[1]),
        ),
        Q,
        J,
        $,
        G(
          "div.mod-form-row",
          G("button.btn", "Save", {
            async onclick() {
              let K = Number(Y.value),
                W = await aJ(K);
              if (!W.ok) {
                $.replaceChildren(G0(`Save failed: ${await u(W)}`));
                return;
              }
              $.replaceChildren(G("p.success.noicon", g.gwValSaved));
            },
          }),
        ),
      ),
    )
  );
}
var IY = 0,
  b$ = 0,
  h1 = !1,
  EY = 0,
  hY = 0,
  mY = 0,
  NY = 0,
  L$ = new Map(),
  DZ = 50,
  AZ = 24,
  TZ = 16;
function y0($, Q) {
  return [
    Math.max(Math.min(Math.floor((($ - D.rect.left) / D.rect.width) * $0.width), $0.width), 0),
    Math.max(Math.min(Math.floor(((Q - D.rect.top) / D.rect.height) * $0.height), $0.height), 0),
  ];
}
function wZ($, Q) {
  let J = Date.now(),
    [Y, q] = y0($, Q),
    { points: Z } = a4(EY, hY, Y, q),
    K = $ - mY,
    W = Q - NY;
  if (((b$ += Math.sqrt(K * K + W * W) / (J - IY)), (IY = J), (EY = Y), (hY = q), !h1)) {
    ((h1 = !0), (b$ = 5));
    return;
  }
  if (b$ > 0) b$ *= 0.8;
  if (b$ <= 0.001) b$ = 0;
  let F = 1 - b$ / (R.brushSize * 1.1),
    H = Math.max(R.brushSize * F, 2),
    X = Math.min(Math.max(Math.floor((H + 1) ** 1.5), 1), 15);
  if (!Z.length) Z.push([Y, q]);
  let j = (R.brushSize - 1) * 0.1;
  for (let [P, C] of Z) {
    let z = t4(P, C, Math.floor(H), X);
    for (let [A, v] of z) if (!UQ(A, v) && b$ < j) IZ(A, v);
  }
  t0();
}
function IZ($, Q) {
  let J = L$.get($);
  if (J) J.y = Math.max(J.y, Q);
  else L$.set($, { y: Q, amount: 0, max: Math.random() * (R.brushSize * 1.5) });
  if (L$.size > DZ) L$.delete(L$.keys().next().value);
}
function EZ() {
  if (!L$.size) return;
  let $ = [...L$.entries()],
    [Q, J] = $[Math.floor(Math.random() * $.length)];
  if ((UQ(Q, ++J.y), ++J.amount >= J.max)) L$.delete(Q);
}
function OY() {
  (setInterval(() => {
    if (u0 && h1) EZ();
  }, AZ),
    setInterval(() => {
      if (u0) (wZ(D$, A$), (mY = D$), (NY = A$));
      else if (h1) (L$.clear(), (h1 = !1));
    }, TZ));
}
var BY = 4,
  s6 = !1;
function SY($, Q, J, Y, q) {
  let Z = Math.min($, J),
    K = Math.min(Q, Y),
    W = Math.max($, J),
    F = Math.max(Q, Y);
  ((Z = Math.min(Z, f - 1)), (K = Math.min(K, M0 - 1)));
  let H = Math.min(W - Z, q, f - Z),
    X = Math.min(F - K, q, M0 - K);
  return ((H = Math.max(H, 1)), (X = Math.max(X, 1)), { x: Z, y: K, width: H, height: X });
}
function hZ($) {
  let Q = D.rect.width / $0.width,
    J = D.rect.height / $0.height;
  return {
    left: D.rect.left + $.x * Q,
    top: D.rect.top + $.y * J,
    width: $.width * Q,
    height: $.height * J,
  };
}
function r6($) {
  if (s6) return;
  ((s6 = !0), R.setTool(0), S$(0));
  let Q = $.maxRegion ?? Math.max(f, M0),
    J = $.color ?? "#ff3b3b",
    Y = G("div.pick-box", { style: { display: "none", outlineColor: J } }),
    q = $.label ? G("div.pick-mode", $.label) : "",
    Z = G("div.pick-readout", $.hint ?? "Click a pixel  ·  Shift+drag to select an area"),
    K = G("div.pick-hint", "Esc or right-click to cancel"),
    W = G("div.pick-overlay", Y, q, Z, K),
    F = null;
  if ($.dimUnpainted) ((F = G("div.mod-paint-scrim")), u$.prepend(F));
  let H = !1,
    X = null,
    j = null,
    P = !1,
    C = 0,
    z = 0;
  function A(T) {
    let O = hZ(T);
    Object.assign(Y.style, {
      display: "block",
      left: `${O.left}px`,
      top: `${O.top}px`,
      width: `${O.width}px`,
      height: `${O.height}px`,
    });
  }
  function v(T, O) {
    A({ x: T, y: O, width: 1, height: 1 });
  }
  function S() {
    if (!s6) return;
    ((s6 = !1),
      W.remove(),
      F?.remove(),
      z0.removeEventListener("pointerdown", _, !0),
      z0.removeEventListener("pointermove", E, !0),
      window.removeEventListener("pointerup", h, !0),
      document.removeEventListener("keydown", M, !0),
      z0.removeEventListener("contextmenu", L, !0),
      $.onClose?.());
  }
  function M(T) {
    if (T.key === "Escape") (T.preventDefault(), T.stopPropagation(), S());
  }
  function L(T) {
    (T.preventDefault(), S());
  }
  function _(T) {
    if (T.button === 2) {
      S();
      return;
    }
    if (T.button !== 0) return;
    if (T.shiftKey && $.onRegion) {
      (T.preventDefault(), T.stopPropagation(), (H = !0));
      let [O, m] = y0(T.clientX, T.clientY);
      ((X = [O, m]), (j = SY(O, m, O, m, Q)), A(j), (Z.textContent = `${j.width}×${j.height} px`));
      return;
    }
    ((P = !!$.onPick), (C = T.clientX), (z = T.clientY));
  }
  function E(T) {
    if (H && X) {
      (T.preventDefault(), T.stopPropagation(), J6(T.x, T.y));
      let [w, B] = y0(T.clientX, T.clientY);
      ((j = SY(X[0], X[1], w, B, Q)), A(j), (Z.textContent = `${j.width}×${j.height} px`));
      return;
    }
    if (P && Math.hypot(T.clientX - C, T.clientY - z) > BY) P = !1;
    let [O, m] = y0(T.clientX, T.clientY);
    v(O, m);
  }
  function h(T) {
    if (H) {
      H = !1;
      let O = j;
      if (((j = null), (X = null), S(), O && $.onRegion)) $.onRegion(O);
      return;
    }
    if (P && T.button === 0) {
      if (((P = !1), Math.hypot(T.clientX - C, T.clientY - z) <= BY)) {
        let [O, m] = y0(T.clientX, T.clientY);
        (S(), $.onPick?.(O, m));
      }
    }
  }
  (z0.addEventListener("pointerdown", _, !0),
    z0.addEventListener("pointermove", E, !0),
    window.addEventListener("pointerup", h, !0),
    document.addEventListener("keydown", M, !0),
    z0.addEventListener("contextmenu", L, !0),
    l("main").after(W));
}
var mZ = 500;
function N1() {
  if (!v0()) return;
  r6({
    label: "Tile Inspector",
    hint: g.inspect.hint,
    maxRegion: mZ,
    dimUnpainted: !0,
    onPick: ($, Q) => void NZ($, Q),
    onRegion: ($) => void OZ($.x, $.y, $.width, $.height),
  });
}
async function NZ($, Q) {
  let J = Q * f + $,
    Y = await bJ(J);
  if (!Y.ok) return new y("Tile inspector", G("div.modal", G0(await u(Y)), V$));
  _Y(await Y.json(), $, Q);
}
function _Y($, Q, J) {
  let Y = G("div.modal.mod-tile");
  if (
    (Y.append(
      G(
        "div.mod-kv",
        m1("Position", `${Q}, ${J}`),
        m1("Placed", $.placed_at ? x0($.placed_at) : "unknown"),
      ),
    ),
    !$.user)
  )
    return (
      Y.append(G("p.desc", g.inspect.none)),
      Y.append(G("div.btn-container", M4())),
      void new y("Tile inspector", Y)
    );
  let q = $.user,
    Z = !!q.banned_at;
  (Y.append(
    G(
      "div.mod-detail-head",
      G("h3", q.username),
      Y1(q.role),
      G("span.desc", `#${q.id}`),
      q.discord_id ? G("span.mod-tag.discord", "Discord") : null,
    ),
    Z
      ? G(
          "p.warning.noicon",
          `Banned ${x0(q.banned_at)}.` +
            (q.banned_until ? ` Until ${x0(q.banned_until)}.` : " Permanent."),
        )
      : G("p.desc", "Not banned."),
    G(
      "div.btn-container",
      G("button.btn", "View user", {
        onclick() {
          s("users", q.id, { label: "Tile inspector", reopen: () => _Y($, Q, J) });
        },
      }),
      M4(),
    ),
  ),
    new y("Tile inspector", Y));
}
async function OZ($, Q, J, Y) {
  let q = await fJ($, Q, J, Y);
  if (!q.ok) return new y("Area breakdown", G("div.modal", G0(await u(q)), V$));
  yY(await q.json());
}
function yY($) {
  let { region: Q, owned: J, total: Y, owners: q } = $,
    Z = G("div.modal.mod-region");
  if (
    (Z.append(
      G(
        "div.mod-kv",
        m1("Area", `${Q.width}×${Q.height} at ${Q.x},${Q.y}`),
        m1("Owned pixels", `${J} / ${Y}`),
        m1("Distinct owners", String(q.length)),
      ),
    ),
    !q.length)
  )
    Z.append(G("p.desc", "No owned pixels in this area."));
  else
    Z.append(
      G(
        "div.list.mod-list",
        ...q.map((K) =>
          G(
            "div.item.box.outset.mod-region-row",
            {
              onclick() {
                if (K.user_id)
                  s("users", K.user_id, { label: "Area breakdown", reopen: () => yY($) });
              },
            },
            G("b", K.username ?? `#${K.user_id}`),
            G(
              "span.mod-row-meta",
              `${K.pixels} px`,
              G("span.desc", `${Math.round((K.pixels / J) * 100)}%`),
            ),
          ),
        ),
      ),
    );
  (Z.append(G("div.btn-container", M4())), new y("Area breakdown", Z));
}
function M4() {
  return G("button.btn", "Close", {
    onclick() {
      (p(), N1());
    },
  });
}
function m1($, Q) {
  return G("div.mod-kv-row", G("span.mod-kv-label", $), G("span.mod-kv-value", Q));
}
function vY() {
  let $ = G("div.list.mod-list"),
    Q = G("div.mod-status"),
    J = G("div.btn-container"),
    Y = 0,
    q = G(
      "select.input.box",
      G("option", { value: "bug" }, "Bug Reports"),
      G("option", { value: "feedback" }, "Feedback"),
      G("option", { value: "suggestion" }, "Suggestions"),
      {
        oninput() {
          Z(!0);
        },
      },
    );
  async function Z(W) {
    if (W) ((Y = 0), $.replaceChildren(), J.replaceChildren());
    Q.replaceChildren("Loading...");
    let F = await _J(q.value, Y);
    if (!F.ok) {
      Q.replaceChildren(G0(await u(F)));
      return;
    }
    let H = await F.json();
    if ((Q.replaceChildren(), W && !H.length)) $.replaceChildren(G("p.desc", "No open items."));
    else for (let X of H) $.append(K(X));
    ((Y += H.length),
      J.replaceChildren(
        H.length >= 20
          ? G("button.btn", "Load more", {
              onclick() {
                Z(!1);
              },
            })
          : "",
      ));
  }
  function K(W) {
    let F = G("div.mod-action-msg"),
      H = G("input.box", { type: "text", placeholder: "Reply to User (optional)" }),
      X = G("div.item.box.outset.mod-review"),
      j = (P, C, z) =>
        G("button.btn", P, {
          async onclick() {
            if (!(await i(z, P))) return;
            let v = await yJ(W.id, C, H.value.trim() || void 0);
            if (!v.ok) {
              F.replaceChildren(G("p.error.noicon", `${P} failed: ${await u(v)}`));
              return;
            }
            if (C != "ignore") X.remove();
            if (C == "prune") Z(!0);
          },
        });
    return (
      X.append(
        G("div.mod-review-head", G("b", W.kind)),
        G("p.desc", `From ${W.username} (#${W.user_id})`),
        G("div.details.pre", W.content),
        G("div.input", H),
        G(
          "div.mod-form-row",
          j("Resolve", "resolve", g.feedback.resolve),
          j("Ignore", "ignore", g.feedback.ignore),
          j("Prune", "prune", g.feedback.prune),
        ),
        F,
      ),
      X
    );
  }
  return (
    Z(!0),
    G(
      "div.mod-review-tab",
      G(
        "div.btn-container.mod-toolbar",
        q,
        G("button.btn", "Refresh", {
          onclick() {
            Z(!0);
          },
        }),
      ),
      Q,
      $,
      J,
    )
  );
}
var BZ = 500;
function p8() {
  if (!v0()) return;
  r6({
    label: "Wipe Canvas Selection",
    hint: g.wipe.hint,
    maxRegion: BZ,
    dimUnpainted: !0,
    onRegion: async ($) => {
      if (
        !(await i(
          `Clear a ${$.width}×${$.height} px area at (${$.x}, ${$.y})? This wipes those pixels for everyone (you can undo right after).`,
          "Wipe area",
          "Wipe",
          "Cancel",
        ))
      )
        return void p8();
      let J = await cJ($);
      if (!J.ok) return m0(J, "Could not wipe the area");
      let { applied: Y, chunks: q, undoToken: Z } = await J.json();
      new y(
        "Area wiped",
        G(
          "div.modal",
          G("p", `Cleared ${Y} pixel(s) across ${q} chunk(s).`),
          G("p.desc", g.snapshotDisplayNote),
          G(
            "div.btn-container",
            Z ? P6(Z) : "",
            G("button.btn", "Close", {
              onclick() {
                (p(), p8());
              },
            }),
          ),
        ),
      );
    },
  });
}
async function SZ($, Q) {
  let J = await uJ($, Q);
  if (!J.ok) return null;
  let Y = new Uint8Array(await J.arrayBuffer()),
    q = W$.deserialize(Y),
    Z = q.pixels instanceof Uint8Array ? q.pixels : (q.pixels?.buffer ?? new Uint8Array()),
    K = M6(Z);
  return K.length ? K : null;
}
function _Z($) {
  document.querySelector(".mod-ghost-control")?.remove();
  let Q = $.states.filter((W) => W === V6).length,
    J = $.states.filter((W) => W === R6).length,
    Y = [];
  if (Q > 0) Y.push(`${Q} px overpainted (dim)`);
  if (J > 0) Y.push(`${J} px removed by a moderator (red)`);
  let q = G("button.btn", "‹ Prev", {
    onclick() {
      $.onPrev?.();
    },
  });
  q.disabled = !$.onPrev;
  let Z = G("button.btn", "Next ›", {
    onclick() {
      $.onNext?.();
    },
  });
  Z.disabled = !$.onNext;
  let K = G(
    "div.mod-ghost-control",
    G(
      "span",
      Y.length ? `Submission ${$.position} · ${Y.join(" · ")}` : `Submission ${$.position}`,
    ),
    q,
    Z,
    G("button.btn", `↩ Back to ${$.username}`, { onclick: $.onBack }),
    G("button.btn", "Clear", {
      onclick() {
        (b5(), K.remove());
      },
    }),
  );
  document.body.append(K);
}
function gY($, Q) {
  let J = G("div.list.mod-list.mod-ph-list"),
    Y = G("div.mod-ph-more"),
    q = null,
    Z = !1,
    K = [],
    W = new Map();
  async function F() {
    if (Z) return;
    ((Z = !0), Y.replaceChildren(G("span.desc", "Loading…")));
    let C = await dJ($, q ? { before: q } : {});
    if (((Z = !1), !C.ok)) {
      Y.replaceChildren(G0(await u(C)));
      return;
    }
    let { entries: z, next_cursor: A } = await C.json();
    if (!z.length && !q) {
      (J.replaceChildren(G("p.desc", "No paint history (or pruned by retention).")),
        Y.replaceChildren());
      return;
    }
    for (let v of z) {
      let S = K.length;
      (K.push(v), J.append(P(v, S)));
    }
    ((q = A),
      Y.replaceChildren(
        A
          ? G("button.btn.mod-ph-loadmore", "Load more", { onclick: () => void F() })
          : G("span.desc", "End of history."),
      ));
  }
  async function H(C) {
    let z = W.get(C.id);
    if (z) return z;
    let A = await SZ($, C.id);
    if (A) W.set(C.id, A);
    return A;
  }
  async function X(C) {
    let z = K[C];
    if (!z) return;
    let A = await H(z);
    if (!A) {
      h$("Could not load submission pixels.");
      return;
    }
    let v = A.map(() => c5),
      S = await lJ(A.map((_) => _.pos));
    if (S.ok) {
      let { owners: _, deleted: E } = await S.json();
      v = _.map((h, T) => (h === $ ? c5 : E?.[T] ? R6 : V6));
    }
    (p(), Q7(A, v));
    let M = G1(A);
    E1(M.x, M.y, M.width, M.height);
    let L = C + 1 < K.length || !!q;
    _Z({
      states: v,
      username: Q,
      position: `${C + 1} / ${K.length}${q ? "+" : ""}`,
      onPrev: C > 0 ? () => void X(C - 1) : void 0,
      onNext: L ? () => void j(C) : void 0,
      onBack: () => {
        (b5(), document.querySelector(".mod-ghost-control")?.remove(), s("users", $));
      },
    });
  }
  async function j(C) {
    if (C + 1 >= K.length && q) await F();
    if (C + 1 < K.length) X(C + 1);
  }
  function P(C, z) {
    let A = G("div.mod-ph-thumb-box", G("span.desc", "…")),
      v = G("div.mod-ph-label", G("span", `${C.pixel_count} px`), G("span.desc", w0(C.created_at))),
      S = G(
        "div.item.box.outset.mod-ph-row",
        {
          onclick() {
            X(z);
          },
        },
        A,
        v,
      );
    return (
      (async () => {
        let M = await H(C);
        if (!M) return;
        let L = G1(M);
        if ((A.replaceChildren(M8(M)), L)) v.append(G("span.desc", `@ ${L.x},${L.y}`));
      })(),
      S
    );
  }
  return (F(), G("div.mod-ph", J, Y));
}
function yZ($) {
  if ($ === null || !Number.isFinite($) || $ < 0) return null;
  let Q = $ % f,
    J = ($ / f) | 0;
  return `@ ${Q},${J}`;
}
function xY($, Q) {
  let J = G("div.list.mod-list.mod-ch-list"),
    Y = G("div.mod-ch-more"),
    q = null,
    Z = !1;
  function K(H) {
    f0({ fallbackPos: H }).then((X) => {
      if (!X) return;
      (p(), E$({ label: Q, reopen: () => s("users", $) }));
    });
  }
  async function W() {
    if (Z) return;
    ((Z = !0), Y.replaceChildren(G("span.desc", "Loading…")));
    let H = await oJ($, q ? { before: q } : {});
    if (((Z = !1), !H.ok)) {
      Y.replaceChildren(G0(await u(H)));
      return;
    }
    let { entries: X, next_cursor: j } = await H.json();
    if (!X.length && !q) {
      (J.replaceChildren(G("p.desc", "No chat messages.")), Y.replaceChildren());
      return;
    }
    for (let P of X) J.append(F(P));
    ((q = j),
      Y.replaceChildren(
        j
          ? G("button.btn.mod-ch-loadmore", "Load more", { onclick: () => void W() })
          : G("span.desc", "End of history."),
      ));
  }
  function F(H) {
    let X = yZ(H.pos),
      j = X
        ? G("button.btn.mod-ch-loc.mod-jump-loc", X, {
            dataset: { tooltip: g.jumpSent },
            onclick: () => K(H.pos),
          })
        : "";
    return G(
      "div.item.box.outset.mod-ch-row",
      G("div.mod-ch-text", H.content ?? ""),
      G("div.mod-ch-meta", G("span.desc", w0(H.timestamp)), j),
    );
  }
  return (W(), G("div.mod-ch", J, Y));
}
var O1 = null;
async function vZ() {
  if (O1) return O1;
  return ((O1 = await (await N.cursor.data.$get()).json()), O1);
}
function z4($) {
  return O1?.find((Q) => Q.id === $)?.name ?? `#${$}`;
}
async function pY($ = {}) {
  let Q = await vZ();
  return new Promise((J) => {
    let Y = !1,
      q = (F) => {
        if (Y) return;
        ((Y = !0), document.removeEventListener("keydown", Z, !0), W.remove(), J(F));
      },
      Z = (F) => {
        if (F.key == "Escape") (F.stopPropagation(), q(null));
      },
      K = new Set($.owned ?? []),
      W = G(
        "div.modal-bg.confirm-bg.cursor-pick-bg",
        G(
          "div.modal-container",
          G(
            "div.modal-title",
            G("span", $.title ?? "Select a cursor"),
            $$("close", { ariaLabel: "Close", onclick: () => q(null) }),
          ),
          G(
            "div.modal-content",
            G(
              "div.inventory.nopad",
              G(
                "div.scroll.pad",
                G(
                  "div.items",
                  Q.filter((F) => !F.free).map((F) =>
                    G(
                      "div.item.box.tooltip",
                      K.has(F.id) && { className: "owned" },
                      {
                        dataset: { tooltip: K.has(F.id) ? `${F.name} (owned)` : F.name },
                        onclick: () => q(F.id),
                      },
                      G("img", { src: Q$(F.id), draggable: !1 }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    (W.addEventListener("click", (F) => {
      if (F.target == W) q(null);
    }),
      document.addEventListener("keydown", Z, !0),
      document.body.append(W));
  });
}
var X$ = f,
  c8 = M0,
  gZ = "rgba(8,8,12,0.66)",
  xZ = "rgba(255,56,56,0.5)",
  pZ = 2,
  cZ = 256;
function cY($) {
  let { ownedPositions: Q } = $,
    J = new Uint8Array((l$ + 7) >> 3);
  for (let I = 0; I < Q.length; I++) {
    let c = Q[I];
    J[c >> 3] |= 1 << (c & 7);
  }
  let Y = (I) => (J[I >> 3] >> (I & 7)) & 1,
    q = G("canvas.mod-mask-layer", { width: X$, height: c8 }),
    Z = G("canvas.mod-select-layer", { width: X$, height: c8 }),
    K = q.getContext("2d"),
    W = Z.getContext("2d");
  ((K.fillStyle = gZ), K.fillRect(0, 0, X$, c8));
  for (let I = 0; I < Q.length; I++) {
    let c = Q[I];
    K.clearRect(c % X$, (c / X$) | 0, 1, 1);
  }
  ((W.fillStyle = xZ), j$.append(q, Z));
  let F = G("div.mod-sel-hover", { style: { display: "none" } }),
    H = G("div.mod-sel-rect", { style: { display: "none" } });
  document.body.append(F, H);
  let X = new Set(),
    j = "rect",
    P = 24,
    C = !1,
    z = 0,
    A = 0,
    v = !1,
    S = null,
    M = null,
    L = () => $.onChange?.(X.size);
  function _(I, c) {
    if (I < 0 || I >= X$ || c < 0 || c >= c8) return;
    let a = c * X$ + I;
    if (!Y(a) || X.has(a)) return;
    (X.add(a), W.fillRect(I, c, 1, 1));
  }
  function E(I, c) {
    let a = Math.max(1, P >> 1),
      k0 = a * a;
    for (let W0 = -a; W0 <= a; W0++) {
      let R0 = c + W0;
      if (R0 < 0 || R0 >= c8) continue;
      for (let U0 = -a; U0 <= a; U0++) {
        if (j === "circle" && U0 * U0 + W0 * W0 > k0) continue;
        _(I + U0, R0);
      }
    }
  }
  function h(I, c, a, k0) {
    let W0 = Math.hypot(a - I, k0 - c),
      R0 = Math.max(1, P >> 1),
      U0 = Math.max(1, Math.ceil(W0 / R0));
    for (let h0 = 1; h0 <= U0; h0++)
      E(Math.round(I + ((a - I) * h0) / U0), Math.round(c + ((k0 - c) * h0) / U0));
  }
  function T() {
    if (!S || !M) return;
    let I = Math.min(S[0], M[0]),
      c = Math.min(S[1], M[1]),
      a = Math.max(S[0], M[0]),
      k0 = Math.max(S[1], M[1]);
    for (let W0 = 0; W0 < Q.length; W0++) {
      let R0 = Q[W0],
        U0 = R0 % X$,
        h0 = (R0 / X$) | 0;
      if (U0 >= I && U0 <= a && h0 >= c && h0 <= k0) _(U0, h0);
    }
  }
  function O() {
    return { b: D.rect, sx: D.rect.width / $0.width, sy: D.rect.height / $0.height };
  }
  function m() {
    if (!S || !M) {
      H.style.display = "none";
      return;
    }
    let { b: I, sx: c, sy: a } = O(),
      k0 = Math.min(S[0], M[0]),
      W0 = Math.min(S[1], M[1]),
      R0 = Math.abs(M[0] - S[0]) + 1,
      U0 = Math.abs(M[1] - S[1]) + 1;
    Object.assign(H.style, {
      display: "block",
      left: `${I.left + k0 * c}px`,
      top: `${I.top + W0 * a}px`,
      width: `${R0 * c}px`,
      height: `${U0 * a}px`,
    });
  }
  function w(I, c) {
    if (j === "rect") {
      F.style.display = "none";
      return;
    }
    let { sx: a } = O(),
      k0 = Math.max(4, P * a);
    Object.assign(F.style, {
      display: "block",
      left: `${I}px`,
      top: `${c}px`,
      width: `${k0}px`,
      height: `${k0}px`,
      borderRadius: j === "circle" ? "50%" : "0",
    });
  }
  function B(I) {
    if (I.button !== 0) return;
    (I.preventDefault(), I.stopPropagation());
    let [c, a] = y0(I.clientX, I.clientY);
    if (j === "rect") ((v = !0), (S = [c, a]), (M = [c, a]), m());
    else ((C = !0), (z = c), (A = a), E(c, a), L());
  }
  function n(I) {
    if (v) {
      (I.preventDefault(), I.stopPropagation(), (M = y0(I.clientX, I.clientY)), m());
      return;
    }
    if (C) {
      (I.preventDefault(), I.stopPropagation());
      let [c, a] = y0(I.clientX, I.clientY);
      (h(z, A, c, a), (z = c), (A = a), L());
      return;
    }
    w(I.clientX, I.clientY);
  }
  function Q0(I) {
    if (v && I.button === 0) {
      (I.preventDefault(),
        I.stopPropagation(),
        (v = !1),
        T(),
        (H.style.display = "none"),
        (S = M = null),
        L());
      return;
    }
    if (C && I.button === 0) (I.preventDefault(), I.stopPropagation(), (C = !1));
  }
  function d(I) {
    if (I.key !== "Escape") return;
    if (document.querySelector(".modal-bg")) return;
    (I.preventDefault(), I.stopPropagation(), t(), $.onExit?.());
  }
  let e = (I) => I.preventDefault();
  (z0.addEventListener("mousedown", B, !0),
    window.addEventListener("mousemove", n, !0),
    window.addEventListener("mouseup", Q0, !0),
    document.addEventListener("keydown", d, !0),
    z0.addEventListener("contextmenu", e, !0));
  let P0 = !1;
  function t() {
    if (P0) return;
    ((P0 = !0),
      z0.removeEventListener("mousedown", B, !0),
      window.removeEventListener("mousemove", n, !0),
      window.removeEventListener("mouseup", Q0, !0),
      document.removeEventListener("keydown", d, !0),
      z0.removeEventListener("contextmenu", e, !0),
      q.remove(),
      Z.remove(),
      F.remove(),
      H.remove());
  }
  return {
    setTool(I) {
      if (((j = I), I === "rect")) F.style.display = "none";
    },
    setBrushSize(I) {
      P = Math.max(pZ, Math.min(cZ, Math.round(I)));
    },
    clearSelection() {
      (X.clear(), W.clearRect(0, 0, X$, c8), L());
    },
    count: () => X.size,
    positions: () => [...X],
    destroy: t,
  };
}
async function fY($, Q = 0) {
  let J = await wJ($, Q);
  if (!J.ok) return null;
  let Y = new Uint8Array(await J.arrayBuffer()),
    q = W$.deserialize(Y),
    W = (
      (q.positions instanceof Uint8Array ? q.positions : q.positions?.buffer) ?? new Uint8Array()
    ).slice(),
    F = new Uint32Array(W.buffer, 0, (W.byteLength / 4) | 0);
  return {
    positions: F,
    total: q.total ?? F.length,
    truncated: !!q.truncated,
    offset: q.offset ?? 0,
    cap: q.cap ?? F.length,
  };
}
var lY = [
    { group: "Drag a box", tools: [{ tool: "rect", label: "Rectangle" }] },
    {
      group: "Brush over pixels",
      tools: [
        { tool: "circle", label: "Circle" },
        { tool: "square", label: "Square" },
      ],
    },
  ],
  bY = lY[0].tools[0];
async function dY($, Q, J) {
  if (!v0()) return;
  J("Loading this user's pixels…", !0);
  let Y;
  try {
    Y = await fY($);
  } catch {
    Y = null;
  }
  if (!Y) {
    J("Could not load this user's pixels.", !1);
    return;
  }
  if (Y.total === 0) {
    J("This user owns no visible pixels.", !1);
    return;
  }
  (p(), bZ($, Q, Y));
}
function bZ($, Q, J) {
  let Y = J,
    q = G("span.mod-sel-count"),
    Z = G("button.btn.mod-sel-delete", "Delete selected"),
    K = G("button.btn", "Clear selection"),
    W = G("span.mod-sel-sizeout", "24px"),
    F = G("input.mod-sel-size", { type: "range", min: "2", max: "256", value: "24" }),
    H = G("div.mod-sel-brush", G("span", "Brush"), F, W);
  H.style.display = "none";
  let X = bY.tool,
    j = 24,
    P,
    C = (d) => {
      ((q.textContent = `${d} flagged`),
        (Z.textContent = d ? `Delete selected (${d})` : "Delete selected"),
        (Z.disabled = d === 0),
        (K.disabled = d === 0));
    };
  function z(d) {
    let e = cY({ ownedPositions: d.positions, onChange: (P0) => C(P0), onExit: () => A() });
    return (e.setTool(X), e.setBrushSize(j), e);
  }
  let A = () => {
    (P.destroy(), Q0.remove(), s("users", $));
  };
  ((P = z(Y)),
    (F.oninput = () => {
      ((j = Number(F.value)), P.setBrushSize(j), (W.textContent = `${F.value}px`));
    }));
  let v = G("p.mod-sel-desc", g.wipe.tools[bY.tool]),
    S = [],
    M = lY.map(({ group: d, tools: e }) => {
      let P0 = e.map(({ tool: t, label: I }) => {
        let c = G("button.btn.mod-sel-tool", I);
        return (
          (c.onclick = () => {
            ((X = t), P.setTool(t));
            for (let a of S) a.classList.toggle("active", a === c);
            ((H.style.display = t === "rect" ? "none" : ""), (v.textContent = g.wipe.tools[t]));
          }),
          S.push(c),
          c
        );
      });
      return G(
        "div.mod-sel-group",
        G("span.mod-sel-group-label", d),
        G("div.mod-sel-group-btns", ...P0),
      );
    });
  S[0].classList.add("active");
  let L = G("p.mod-sel-warn"),
    _ = G("div.mod-range-track"),
    E = G("div.mod-range-thumb");
  _.append(E);
  let h = G("div.mod-range-label"),
    T = Y.truncated ? G("div.mod-range", L, _, h) : "",
    O = () => Math.max(0, Y.total - Y.cap);
  function m(d) {
    return Math.max(28, d * Math.min(1, Y.cap / Y.total));
  }
  function w(d) {
    let e = _.clientWidth || 260,
      P0 = m(e),
      t = Math.max(0, e - P0),
      I = O();
    ((E.style.width = `${P0}px`), (E.style.left = `${I === 0 ? 0 : t * (d / I)}px`));
    let c = Math.min(Y.total, d + Y.cap);
    h.textContent = `Viewing pixels ${(d + 1).toLocaleString()}–${c.toLocaleString()} of ${Y.total.toLocaleString()}`;
  }
  function B(d) {
    let e = _.clientWidth || 260,
      P0 = Math.max(0, e - m(e));
    return P0 === 0 ? 0 : Math.round((d / P0) * O());
  }
  if (T) {
    L.textContent = o0(g.wipe.warn, Y.total.toLocaleString(), Y.cap.toLocaleString());
    let d = !1,
      e = 0,
      P0 = 0;
    ((E.onpointerdown = (I) => {
      (I.preventDefault(), (d = !0), (e = I.clientX), (P0 = parseFloat(E.style.left || "0")));
      try {
        E.setPointerCapture(I.pointerId);
      } catch {}
    }),
      (E.onpointermove = (I) => {
        if (!d) return;
        let c = _.clientWidth || 260,
          a = Math.max(0, c - m(c)),
          k0 = Math.max(0, Math.min(a, P0 + (I.clientX - e)));
        E.style.left = `${k0}px`;
        let W0 = B(k0),
          R0 = Math.min(Y.total, W0 + Y.cap);
        h.textContent = `Viewing pixels ${(W0 + 1).toLocaleString()}–${R0.toLocaleString()} of ${Y.total.toLocaleString()}`;
      }));
    let t = (I) => {
      if (!d) return;
      d = !1;
      try {
        E.releasePointerCapture(I.pointerId);
      } catch {}
      n(B(parseFloat(E.style.left || "0")));
    };
    ((E.onpointerup = t), (E.onpointercancel = t), setTimeout(() => w(Y.offset), 0));
  }
  async function n(d) {
    if (d === Y.offset) return;
    h.textContent = "Loading section…";
    let e = null;
    try {
      e = await fY($, d);
    } catch {}
    if (!e) {
      w(Y.offset);
      return;
    }
    ((Y = e), P.destroy(), (P = z(Y)), C(0), w(Y.offset));
  }
  ((Z.onclick = async () => {
    let d = P.positions();
    if (!d.length) return;
    if (!(await i(o0(g.wipe.confirm, d.length, Q), "Delete selected strokes", "Delete", "Cancel")))
      return;
    let P0 = await IJ($, d);
    if (!P0.ok) return Y0("Could not delete selected pixels", await u(P0));
    let { pixelsWiped: t, undoToken: I } = await P0.json();
    (P.destroy(),
      Q0.remove(),
      new y(
        "Strokes deleted",
        G(
          "div.modal",
          G("p", o0(g.wipe.removed, t, Q)),
          G("p.desc", g.snapshotDisplayNote),
          G(
            "div.btn-container",
            I ? P6(I) : "",
            G("button.btn", `↩ Back to ${Q}`, {
              onclick() {
                (p(), s("users", $));
              },
            }),
            G("button.btn.secondary", "Close", { onclick: () => p() }),
          ),
        ),
      ));
  }),
    (K.onclick = () => P.clearSelection()));
  let Q0 = G(
    "div.mod-select-overlay",
    G("div.mod-sel-head", `Deleting ${Q}'s pixels`),
    T,
    G("div.mod-sel-tools", ...M),
    v,
    H,
    G("div.mod-sel-info", q),
    G("div.mod-sel-actions", Z, K, G("button.btn", "Cancel", { onclick: () => A() })),
    G("p.mod-sel-hint", "Right-drag to pan · scroll to zoom · Esc to cancel"),
  );
  (C(0), document.body.append(Q0));
}
function k4($, Q) {
  let J = G("div.list", "Loading..."),
    Y = !1;
  new y(
    "Moderation",
    G(
      "div.clans-modal",
      Q && U4(Q),
      q6($, !0),
      G(
        "details.clan-member-list.box",
        G("summary", "Members", {
          async onclick() {
            if (Y) return;
            Y = !0;
            let q = await pJ($.id);
            if (!q.ok) return ((Y = !1), J.replaceChildren(G("p.error.noicon", await u(q))));
            let Z = await q.json();
            J.replaceWith(
              G(
                "div.list",
                Z.map((K, W, F) => [
                  G("a.link", K.username, {
                    onclick() {
                      s("users", K.id, { label: $.name, reopen: () => k4($, Q) });
                    },
                  }),
                  W < F.length - 1 && ", ",
                ]),
              ),
            );
          },
        }),
        J,
      ),
    ),
  );
}
var uY = 50,
  fZ = ["user", "moderator", "admin"];
function C4($) {
  let Q = G("div.list.mod-list"),
    J = G("div.mod-detail"),
    Y = G("div.mod-status"),
    q = "";
  async function Z(M) {
    ((q = M), Y.replaceChildren("Searching..."));
    let L = await UJ(M);
    if (M != q) return;
    if (!L.ok) {
      Y.replaceChildren(G0(await u(L)));
      return;
    }
    let { users: _ } = await L.json();
    (Y.replaceChildren(), K(_));
  }
  function K(M) {
    if (!M.length) {
      Q.replaceChildren(G("p.desc", "No users found."));
      return;
    }
    Q.replaceChildren(
      ...M.map((L) =>
        G(
          "div.item.box.outset.mod-row",
          {
            onclick() {
              W(L.id);
            },
          },
          G("b", L.username),
          G(
            "span.mod-row-meta",
            `#${L.id}`,
            Y1(L.role),
            L.ban && G("span.mod-tag.banned", "banned"),
            L.mute && G("span.mod-tag.muted", "muted"),
            Array.isArray(L.flagged) &&
              G(
                "span.mod-tag.flagged",
                L.flagged.length > 1 ? `flagged x${L.flagged.length}` : "flagged",
              ),
          ),
        ),
      ),
    );
  }
  async function W(M, L, _ = !1) {
    J.replaceChildren(G("p.desc", "Loading..."));
    let E = await CJ(M);
    if (!E.ok) {
      J.replaceChildren(G0(await u(E)));
      return;
    }
    let { user: h, cursors: T } = await E.json();
    if ((H(h, T, L), _ && h.username && v.value !== h.username))
      ((v.value = h.username), Z(h.username));
  }
  function F(M, L, _) {
    M.replaceChildren(G(_ ? "p.success.noicon" : "p.error.noicon", L));
  }
  function H(M, L, _) {
    let E = M.id,
      h = G("div.mod-action-msg"),
      T = typeof M.ban == "object" ? M.ban : null,
      O = typeof M.mute == "object" ? M.mute : null,
      m = Array.isArray(M.flagged) ? M.flagged : null,
      w = !!M.excluded_from_leaderboard,
      B = (t) => W(E, t),
      n = (t) => {
        let I = G("button.btn.mod-undo", "Undo", {
          async onclick() {
            I.disabled = !0;
            let c = await t();
            if (!c.ok) {
              ((I.disabled = !1), F(h, `Undo failed: ${await u(c)}`, !1));
              return;
            }
            await B({ text: "Reverted." });
          },
        });
        return I;
      };
    if (_) {
      if ((F(h, _.text, !0), _.undo)) h.append(n(_.undo));
    }
    let Q0 = (t, I, c) => {
        let a = G("input.box", { type: "text", placeholder: "Reason (optional)" }),
          k0 = G(
            "select.box.outset",
            p5.map((W0, R0) => G("option", W0.label, { value: String(R0), selected: R0 == 0 })),
          );
        return G(
          "div.mod-form-sanction",
          G("div.input", a),
          G(
            "div.mod-form-row",
            k0,
            G("button.btn", t, {
              async onclick() {
                let W0 = p5[Number(k0.value)],
                  R0 = W0.seconds == null ? "permanently" : `for ${W0.label}`;
                if (!(await i(`${t} ${M.username} ${R0}?`, `${t} user`))) return;
                let h0 = await I(a.value.trim(), W0.seconds ?? void 0);
                if (!h0.ok) {
                  F(h, `${t} failed: ${await u(h0)}`, !1);
                  return;
                }
                await B({ text: `${t} applied.`, undo: c });
              },
            }),
          ),
        );
      },
      d = (t, I, c, a, k0) =>
        G("button.btn", t, {
          async onclick() {
            if (!(await i(I, t))) return;
            let R0 = await c();
            if (!R0.ok) {
              F(h, `${t} failed: ${await u(R0)}`, !1);
              return;
            }
            let U0 = "",
              h0;
            try {
              let V5 = await R0.clone().json();
              if (typeof V5.pixelsCleared == "number") U0 = ` (${V5.pixelsCleared} pixels cleared)`;
              h0 = V5.undoToken;
            } catch {}
            await B({ text: a + U0 + (k0 ? ` ${k0}` : ""), undo: h0 ? () => X6(h0) : void 0 });
          },
        }),
      e = G("div.mod-sessions"),
      P0 = B1();
    J.replaceChildren(
      G(
        "div.mod-detail-inner",
        G(
          "div.mod-detail-head",
          G("h3.tooltip.mod-jump-name", M.username, {
            dataset: { tooltip: "Click to jump to this user's cursor" },
            async onclick() {
              if (await f0({ userId: E, username: M.username }))
                (p(), E$({ label: M.username, reopen: () => s("users", E) }));
            },
          }),
          Y1(M.role),
          G("span.desc", `#${M.id}`),
        ),
        G(
          "div.mod-kv",
          A("Created At", w0(M.created_at)),
          A("Country", n1(M.country_code || "")),
          A("Paint", `${Math.floor(M.paint / L0)} cans (${M.paint} px)`),
          A("Coins", `${Math.floor(M.coins)} \uD83E\uDE99`),
          A("Px changed", String(M.stats.pixels_changed)),
          A("Px visible", String(M.stats.paint_visible)),
          M.discord_id
            ? A(
                "Discord",
                G("a.link", M.discord_username || "<Unknown Name>", {
                  target: "_blank",
                  href: `https://discord.com/users/${M.discord_id}`,
                }),
              )
            : "",
          M.clan &&
            A(
              "Clan",
              G("a.link", M.clan.name, {
                onclick() {
                  k4(M.clan, { label: M.username, reopen: () => s("users", M.id) });
                },
              }),
            ),
          "email" in M && A("Email", M.email || "-"),
        ),
        T
          ? G(
              "p.warning.noicon",
              `Banned ${x0(T.at)} by #${T.by ?? "?"}. Reason: ${T.reason || "(none)"}. ` +
                (T.until ? `Until ${x0(T.until)}.` : "Permanent."),
            )
          : G("p.desc", "Not banned."),
        O
          ? G(
              "p.warning.noicon",
              `Muted ${x0(O.at)} by #${O.by ?? "?"}. Reason: ${O.reason || "(none)"}. ` +
                (O.until ? `Until ${x0(O.until)}.` : "Permanent."),
            )
          : G("p.desc", "Not muted."),
        m
          ? G(
              "div.mod-flagged-line",
              G(
                "span.warning.noicon",
                "Flagged: " + m.map((t) => `${t.kind} (x${t.hits})`).join(", ") + ".",
              ),
              G("button.btn.mod-flagged-open", "Open review queue", {
                onclick() {
                  s("review", void 0, { label: M.username, reopen: () => s("users", E) });
                },
              }),
            )
          : G("p.desc", "Not flagged."),
        h,
        G(
          "div.mod-section",
          G("b", "Ban"),
          T
            ? d("Unban", `Unban ${M.username}?`, () => _5(E), "User unbanned.")
            : Q0(
                "Ban",
                (t, I) => DJ(E, t, I),
                () => _5(E),
              ),
        ),
        G(
          "div.mod-section",
          G("b", "Mute"),
          O
            ? d("Unmute", `Unmute ${M.username}?`, () => y5(E), "User unmuted.")
            : Q0(
                "Mute",
                (t, I) => AJ(E, t, I),
                () => y5(E),
              ),
        ),
        G(
          "div.mod-section",
          G("b", "Leaderboard"),
          w
            ? G("p.warning.noicon", "Hidden from the leaderboard.")
            : G(
                "p.desc.mod-hint",
                "Hides this user from the users board and from clan/country totals.",
              ),
          w
            ? d(
                "Show on leaderboard",
                `Show ${M.username} on the leaderboard again?`,
                () => v5(E, !1),
                "User restored to the leaderboard.",
              )
            : d(
                "Hide from leaderboard",
                `Hide ${M.username} from the leaderboard?`,
                () => v5(E, !0),
                "User hidden from the leaderboard.",
              ),
        ),
        G(
          "div.mod-section",
          G("b", "Strokes"),
          G("p.desc.mod-hint", g.user.delete.desc),
          G(
            "div.mod-form-row",
            d(
              "Delete All User's Strokes",
              o0(g.user.delete.confirm, M.username),
              () => TJ(E),
              "Deleted the user's strokes.",
              g.snapshotDisplayNote,
            ),
            G("button.btn", "Select Strokes to Delete...", {
              onclick() {
                dY(E, M.username, (t, I) => z(h, t, I));
              },
            }),
          ),
        ),
        G(
          "div.mod-section",
          G("b", "Paint history"),
          G("p.desc.mod-hint", g.user.draws),
          gY(M.id, M.username),
        ),
        G(
          "div.mod-section",
          G("b", "Chat history"),
          G("p.desc.mod-hint", g.user.messages),
          xY(M.id, M.username),
        ),
        G("div.mod-section", G("b", "Paint"), j(M, h, B)),
        G("div.mod-section", G("b", "Cursors"), P(M, L, h, B)),
        G("div.mod-section", G("b", "Message"), X(M, h)),
        P0 && G("div.mod-section", G("b", "Role"), C(M, h, B)),
        P0 &&
          G(
            "div.mod-section",
            G("b", "Sessions"),
            G("button.btn", "Load sessions", {
              async onclick() {
                e.replaceChildren(G("p.desc", "Loading..."));
                let t = await LJ(E);
                if (!t.ok) {
                  e.replaceChildren(G0(await u(t)));
                  return;
                }
                let I = await t.json();
                if (!I.length) {
                  e.replaceChildren(G("p.desc", "No sessions."));
                  return;
                }
                e.replaceChildren(
                  G(
                    "div.list.mod-list",
                    ...I.map((c) =>
                      G(
                        "div.item.box.outset.mod-session",
                        G("span", `#${c.id}`),
                        G("span", c.ip || "no ip"),
                        G("span.desc", "seen ", w0(c.last_verified_at)),
                      ),
                    ),
                  ),
                );
              },
            }),
            e,
          ),
      ),
    );
  }
  function X(M, L) {
    let _ = G("textarea.box", {
      placeholder: `Message to ${M.username}...`,
      rows: 2,
      maxLength: 1000,
    });
    return G(
      "div.mod-form",
      G("div.input", _),
      G(
        "div.mod-form-row",
        G("button.btn", "Send message", {
          async onclick() {
            let E = _.value.trim();
            if (!E) {
              z(L, "Message can't be empty.", !1);
              return;
            }
            let h = await NJ(M.id, E);
            if (!h.ok) {
              z(L, `Message failed: ${await u(h)}`, !1);
              return;
            }
            ((_.value = ""), z(L, "Message sent.", !0));
          },
        }),
      ),
    );
  }
  function j(M, L, _) {
    let E = G("input.box", { type: "number", min: "1", max: String(uY), value: "10" }),
      h = (T) =>
        G("button.btn", `Reset ${T}`, {
          async onclick() {
            if (!(await i(`Reset ${M.username}'s ${T}? (current: ${Math.floor(M[T])})`))) return;
            let m = await hJ(M.id, T);
            if (!m.ok) return z(L, await u(m), !1);
            await _({ text: `Reset ${T}.` });
          },
        });
    return G(
      "div.mod-form-row",
      E,
      G("button.btn", "Give Cans", {
        async onclick() {
          let T = Math.max(1, Math.min(uY, Math.floor(Number(E.value) || 0)));
          if (
            ((E.value = String(T)),
            !(await i(`Give ${T} can${T > 1 ? "s" : ""} to ${M.username}?`, "Give cans")))
          )
            return;
          let m = await EJ(M.id, T);
          if (!m.ok) {
            z(L, `Give cans failed: ${await u(m)}`, !1);
            return;
          }
          await _({ text: `Gave ${T} can${T > 1 ? "s" : ""}.` });
        },
      }),
      h("paint"),
      h("coins"),
    );
  }
  function P(M, L, _, E) {
    let h = L.length ? L.map((T) => z4(T)).join(", ") : "None unlocked.";
    return G(
      "div",
      G("p.desc.mod-hint", `Unlocked: ${h}`),
      G(
        "div.mod-form-row",
        G("button.btn", "Give a cursor...", {
          async onclick() {
            let T = await pY({ title: `Give a cursor to ${M.username}`, owned: L });
            if (T == null) return;
            let O = z4(T);
            if (!(await i(`Give the "${O}" cursor to ${M.username}?`, "Give cursor"))) return;
            let w = await mJ(M.id, T);
            if (!w.ok) {
              z(_, `Give cursor failed: ${await u(w)}`, !1);
              return;
            }
            let B = {};
            try {
              B = await w.clone().json();
            } catch {}
            await E({
              text:
                B.granted === !1
                  ? `${M.username} already has the "${O}" cursor.`
                  : `Gave the "${O}" cursor.`,
            });
          },
        }),
      ),
    );
  }
  function C(M, L, _) {
    let E = M.role,
      h = G(
        "select.box.outset",
        fZ.map((T) => G("option", T, { value: T, selected: T == M.role })),
      );
    return G(
      "div.mod-form-row",
      h,
      G("button.btn", "Set role", {
        async onclick() {
          let T = h.value;
          if (T == M.role) return;
          if (!(await i(`Change ${M.username}'s role to "${T}"?`, "Change role"))) {
            h.value = M.role;
            return;
          }
          let m = await g5(M.id, T);
          if (!m.ok) {
            (z(L, `Role change failed: ${await u(m)}`, !1), (h.value = M.role));
            return;
          }
          await _({ text: `Role set to ${T}.`, undo: () => g5(M.id, E) });
        },
      }),
    );
  }
  function z(M, L, _) {
    M.replaceChildren(G(_ ? "p.success.noicon" : "p.error.noicon", L));
  }
  function A(M, L) {
    return G("div.mod-kv-row", G("span.mod-kv-label", M), G("span.mod-kv-value", L));
  }
  let v = G("input.box", { type: "text", placeholder: "Search by username..." }),
    S;
  if (
    ((v.oninput = () => {
      (clearTimeout(S), (S = setTimeout(() => void Z(v.value.trim()), 250)));
    }),
    (v.onkeydown = (M) => {
      if (M.key == "Enter") (clearTimeout(S), Z(v.value.trim()));
    }),
    Z(""),
    $ !== void 0)
  )
    W($, void 0, !0);
  return G("div.mod-users", G("div.mod-users-left", G("div.input.mod-search", v), Y, Q), J);
}
function oY($, Q, J) {
  if (Q == null) return G("span.mod-audit-actor", G("span.desc", `${$}: -`));
  return G(
    "span.mod-audit-actor",
    G("span.desc", `${$}:`),
    J
      ? G("span.mod-jump-name.tooltip", J, {
          dataset: { tooltip: g.jumpTo },
          async onclick() {
            if (await f0({ userId: Q, username: J }))
              (p(), E$({ label: "Audit Log", reopen: () => s("audit") }));
          },
        })
      : "",
    G("span.desc", `#${Q}`),
    G("button.btn.mod-id-link", "View user", {
      onclick() {
        s("users", Q, { label: "Audit Log", reopen: () => s("audit") });
      },
    }),
  );
}
function lZ($) {
  let Q = G("div.mod-wipe-audit");
  if ($.thumbnail) {
    let q = G("img.mod-wipe-thumb", {
      src: $.thumbnail,
      alt: "Cleared region",
      title: "Click to enlarge",
    });
    (q.addEventListener("click", () => dZ($.thumbnail)), Q.append(q));
  }
  let J = G("div.mod-wipe-info"),
    Y = $.width != null ? ` · ${$.width}×${$.height} at ${$.x},${$.y}` : "";
  if ((J.append(G("div.desc", `${$.cleared ?? $.applied ?? 0} px cleared${Y}`)), $.owners?.length))
    J.append(
      G(
        "div.mod-wipe-owners",
        G("span.desc", "Cleared owners:"),
        ...$.owners.map((q) =>
          G("button.btn.mod-id-link", `${q.username ?? "#" + q.user_id} (${q.pixels})`, {
            onclick() {
              s("users", q.user_id, { label: "Audit Log", reopen: () => s("audit") });
            },
          }),
        ),
      ),
    );
  else J.append(G("span.desc", g.noOwners));
  return (Q.append(J), Q);
}
function dZ($) {
  let Q = () => {
      (document.removeEventListener("keydown", J, !0), Y.remove());
    },
    J = (q) => {
      if (q.key === "Escape") (q.stopPropagation(), Q());
    },
    Y = G(
      "div.modal-bg.confirm-bg.mod-wipe-expand-bg",
      G(
        "div.modal-container",
        G("div.modal-title", G("span", "Cleared region"), G("button.btn", "Close", { onclick: Q })),
        G("div.modal-content", G("img.mod-wipe-expand-img", { src: $, alt: "Cleared region" })),
      ),
    );
  (Y.addEventListener("click", (q) => {
    if (q.target === Y) Q();
  }),
    document.addEventListener("keydown", J, !0),
    document.body.append(Y));
}
function nY() {
  let $ = G("div.list.mod-list"),
    Q = G("div.mod-status"),
    J = G("div.btn-container"),
    Y = G("input.box", { type: "text", placeholder: g.searchAudit }),
    q = G(
      "select.box.outset",
      G("option", "All actions", { value: "" }),
      ...g.auditActions.map((X) => G("option", X, { value: X })),
    ),
    Z = G(
      "select.box.outset",
      G("option", "Newest first", { value: "desc" }),
      G("option", "Oldest first", { value: "asc" }),
    ),
    K = null;
  async function W(X) {
    if (X) ((K = null), $.replaceChildren(), J.replaceChildren());
    Q.replaceChildren("Loading...");
    let j = Y.value.trim(),
      P = await nJ({
        before: K ?? void 0,
        limit: 25,
        action: q.value || void 0,
        search: j || void 0,
        order: Z.value === "asc" ? "asc" : "desc",
      });
    if (!P.ok) {
      Q.replaceChildren(G0(await u(P)));
      return;
    }
    let { entries: C, next_cursor: z } = await P.json();
    if ((Q.replaceChildren(), X && !C.length)) {
      let A = !!j || !!q.value;
      $.replaceChildren(
        G("p.desc", A ? "No audit entries match these filters." : "No audit entries."),
      );
    } else for (let A of C) $.append(H(A));
    ((K = z),
      J.replaceChildren(
        K
          ? G("button.btn", "Load more", {
              onclick() {
                W(!1);
              },
            })
          : "",
      ));
  }
  ((q.onchange = () => void W(!0)), (Z.onchange = () => void W(!0)));
  let F;
  ((Y.oninput = () => {
    (clearTimeout(F), (F = setTimeout(() => void W(!0), 300)));
  }),
    (Y.onkeydown = (X) => {
      if (X.key === "Enter") (clearTimeout(F), W(!0));
    }));
  function H(X) {
    let j = X.action === "wipe_canvas" ? lZ(X.details) : G("div.details", H6(X.details));
    return G(
      "div.item.box.outset.mod-audit",
      G("div.mod-audit-head", G("b", X.action), G("span.desc", w0(X.created_at))),
      G(
        "div.mod-audit-meta",
        oY("mod", X.mod_id, X.mod_username),
        oY("target", X.target_id, X.target_username),
      ),
      j,
    );
  }
  return (
    W(!0),
    G(
      "div.mod-audit-tab",
      G(
        "div.btn-container.mod-toolbar.mod-audit-toolbar",
        G("div.input.mod-audit-search", Y),
        q,
        Z,
        G("button.btn", "Refresh", {
          onclick() {
            W(!0);
          },
        }),
      ),
      Q,
      $,
      J,
    )
  );
}
var tY = ($) => ({
  onclick() {
    s("users", $, { label: "Referrals", reopen: () => s("referrals") });
  },
});
function aY() {
  let $ = G("div.list.mod-list"),
    Q = G("div.mod-status"),
    J = G("div.btn-container"),
    Y = 0;
  async function q(K) {
    if (K) ((Y = 0), $.replaceChildren(), J.replaceChildren());
    Q.replaceChildren("Loading...");
    let W = await gJ(Y);
    if (!W.ok) {
      Q.replaceChildren(G0(await u(W)));
      return;
    }
    let F = await W.json();
    if ((Q.replaceChildren(), K && !F.length)) $.replaceChildren(G("p.desc", "No referrals."));
    else for (let H of F) $.append(Z(H));
    ((Y += F.length),
      J.replaceChildren(
        F.length >= 20
          ? G("button.btn", "Load more", {
              onclick() {
                q(!1);
              },
            })
          : "",
      ));
  }
  function Z(K) {
    let W = G("div.mod-action-msg"),
      F = G(
        "div.item.box.outset.mod-review",
        G(
          "div.mod-review-head",
          G("b", K.code),
          !K.verified && G("span.mod-tag.flagged", "Not verified"),
          K.flagged && G("span.mod-tag.banned", "Flagged"),
          w0(K.created_at),
        ),
        G(
          "p.desc",
          "Created by ",
          G("a.link", K.username, tY(K.user_id)),
          ` (#${K.user_id}) · ${K.uses} uses`,
        ),
        G(
          "div.mod-form-row",
          G("button.btn", "List Users", {
            async onclick() {
              let H = await (await xJ(K.user_id)).json();
              W.replaceChildren(
                G(
                  "div.details.pre",
                  !H.length && "None",
                  H.map((X, j) => [
                    G(
                      "span",
                      G("a.link", X.username, tY(X.id)),
                      " (",
                      w0(X.created_at, new Date(X.created_at).toLocaleDateString()),
                      ")",
                    ),
                    j < H.length - 1 && "; ",
                  ]),
                ),
              );
            },
          }),
          !K.verified &&
            G("button.btn", "Verify", {
              async onclick() {
                if (!(await i(o0(g.referral.confirmVerify, K.username)))) return;
                let X = await x5(K.code, "verify");
                if (!X.ok) {
                  W.replaceChildren(G("p.error.noicon", await u(X)));
                  return;
                }
                ((K.verified = !0), (K.flagged = !1), F.replaceWith(Z(K)));
              },
            }),
          G("button.btn", "Delete", {
            async onclick() {
              if (!(await i(o0(g.referral.confirmDelete, K.username)))) return;
              let X = await x5(K.code, "delete");
              if (!X.ok) {
                W.replaceChildren(G("p.error.noicon", await u(X)));
                return;
              }
              F.remove();
            },
          }),
        ),
        W,
      );
    return F;
  }
  return (
    q(!0),
    G(
      "div.mod-review-tab",
      G("p", g.referral.desc),
      G(
        "div.btn-container.mod-toolbar",
        G("button.btn", "Refresh", {
          onclick() {
            q(!0);
          },
        }),
      ),
      Q,
      $,
      J,
    )
  );
}
function sY() {
  let $ = G("div.mod-action-msg"),
    Q = G("p.desc.mod-bot-mapping"),
    J = G("input.box.mod-bot-slider", {
      type: "range",
      min: "-1",
      max: "120",
      step: "1",
      value: "0",
    }),
    Y = (Z) => {
      if (Z === -1) return "Global chat is disabled (-1 / inf)";
      if (Z === 0) return "Global chat has no cooldown";
      return `Global chat has ${A0(Z, "second")} of cooldown`;
    },
    q = () => {
      Q.replaceChildren(Y(Number(J.value)));
    };
  return (
    (J.oninput = q),
    (async () => {
      let Z = await sJ();
      if (!Z.ok) {
        $.replaceChildren(G0(await u(Z)));
        return;
      }
      ((J.value = String(Math.floor(Number(await Z.text()) / 1000))), q());
    })(),
    G(
      "div.mod-misc-config",
      G("p.desc", "Configure the global delay required between global user chat messages."),
      G(
        "div.mod-form",
        G("div.mod-bot-slider-row", G("span.desc", "inf"), J, G("span.desc", "120s")),
        Q,
        $,
        G(
          "div.mod-form-row",
          G("button.btn", "Save", {
            async onclick() {
              let Z = Number(J.value),
                K = await rJ(Z);
              if (!K.ok) {
                $.replaceChildren(G0(await u(K)));
                return;
              }
              $.replaceChildren(G("p.success.noicon", g.gwValSaved));
            },
          }),
        ),
      ),
    )
  );
}
var g = {},
  L4 = !1;
async function eY() {
  if (L4 || !v0()) return;
  L4 = !0;
  let $ = await N.mod.locale.$get();
  if (!$.ok) return ((L4 = !1), m0($, "Could not load mod locale"));
  let Q = await $.json();
  for (let J in Q) g[J] = Q[J];
}
function v0() {
  let $ = R.user?.role;
  return $ === "moderator" || $ === "admin";
}
function B1() {
  return R.user?.role === "admin";
}
var uZ = new Set(["review", "broadcast", "botconfig"]);
function rY($) {
  if ($ === "inspect") return (p(), N1(), !0);
  if ($ === "wipe") return (p(), p8(), !0);
  return !1;
}
function iY($) {
  switch ($) {
    case "users":
      return C4();
    case "review":
      return DY();
    case "audit":
      return nY();
    case "feedback":
      return vY();
    case "referrals":
      return aY();
    case "broadcast":
      return AY();
    case "botconfig":
      return wY();
    case "misc":
      return sY();
    case "inspect":
    case "wipe":
      throw new Error(`mod tool tab "${$}" has no panel`);
  }
}
function U4($) {
  return G(
    "div.mod-back",
    G("button.btn.mod-back-btn", `↩ Back to ${$.label}`, {
      onclick() {
        $.reopen();
      },
    }),
  );
}
async function $3($) {
  let Q = await N.mod.users.idFromName.$get({ query: { name: $ } });
  if (!Q.ok) return m0(Q, "Could not fetch user");
  let J = await Q.json();
  s("users", J.id);
}
function s($ = "users", Q, J) {
  if (!v0()) return;
  if ((J1(), rY($))) return;
  let Y = G("div.pad.mod-body");
  if (J) Y.append(U4(J));
  Y.append($ === "users" ? C4(Q) : iY($));
  let q = Object.keys(g.tabLabels).filter((X) => B1() || !uZ.has(X)),
    Z = i6(
      q.map((X) => ({
        label: g.tabLabels[X],
        active: X == $,
        action() {
          if (rY(X)) return;
          (W(X), Y.replaceChildren(iY(X)));
        },
      })),
    ),
    K = Array.from(Z.querySelectorAll(".abtn"));
  function W(X) {
    q.forEach((j, P) => K[P]?.classList.toggle("active", j == X));
  }
  let F = q.indexOf("feedback"),
    H = F >= 0 ? K[F] : void 0;
  if (H)
    (async () => {
      try {
        let X = await vJ();
        if (!X.ok) return;
        let { total: j } = await X.json();
        if (j > 0)
          H.append(
            G("span.mod-tab-dot.tooltip", {
              dataset: { tooltip: `${j} open feedback item${j === 1 ? "" : "s"}` },
            }),
          );
      } catch {}
    })();
  new y("Moderation", G("div.mod-modal.nopad", Z, Y));
}
var oZ = ($) => Math.max(Math.min($ * 50 + 1500, 1e4), 2000);
function J3($, Q) {
  let J = $ ? b8 : S1;
  if ((J.prepend(Q), J.childElementCount >= 200)) J.children[200]?.remove();
}
function A2($, Q, J, Y, q, Z = !1, K) {
  let W = $ == R.connectionId,
    F = Y ?? R.user.username,
    H = G(
      "p.box",
      {
        ondblclick: () => D4(F),
        onclick: (j) => {
          if (j.shiftKey) D4(F);
        },
      },
      G(
        "b.tooltip",
        q && G("b", H8(q)),
        F,
        v0()
          ? { dataset: { tooltip: "Click to open mod panel" }, onclick: () => void $3(Y) }
          : {
              dataset: { tooltip: "Click to jump to the user!" },
              onclick: () => void f0({ connId: $, fallbackPos: J, username: F }),
            },
        W && { className: "self" },
      ),
      G("span", Q),
    );
  if (Q.split(/\s+/).includes(R.user.username)) H.classList.add("important");
  if (K !== void 0) H.dataset.uid = String(K);
  J3(Z, H);
}
function T2($) {
  for (let Q of [S1, b8]) n0(`p.box[data-uid="${$}"]`, Q).forEach((J) => J.remove());
}
function Q3($, Q, ...J) {
  J3(Q, G("p.box.local", $ && { className: "error" }, G("span", J)));
}
function w2($, Q) {
  if (!$.element || x.a11y.hideChatBubbles) return;
  let J = G("p", Q);
  ($.element.querySelector(".chat-bubble")?.append(J), setTimeout(() => J.remove(), oZ(Q.length)));
}
async function Y3($, Q) {
  let J = await v$(6, { message: $, isGlobal: Q }, 5000);
  if ("error" in J) {
    let Y = J;
    if (Y.error == "muted") Q3(!0, Q, `You are muted. (expires: ${t1(Y.until || null)})`);
    else if (Y.error == "chatCooldown")
      (e6(Y.until),
        Q3(!0, Q, Y.until ? "Global chat is on cooldown!" : "Global chat is disabled."));
  }
  if (!J.message) return;
  if (J.cooldown !== void 0) e6(J.cooldown);
  ZJ(J.message);
}
function G3() {
  if (D.normalizedZoom <= K8) return (Y0("You need to zoom in to chat locally!"), !0);
  return !1;
}
var f8 = !1,
  S1 = G("div.list"),
  b8 = G("div.list"),
  q3 = G("div.top-bar"),
  P1 = G("div.chat-log", q3, b8),
  A4 = !1,
  _1 = !1;
function I8() {
  (q3.replaceChildren(
    G("p#player-count", `${A0(R.onlinePlayers + R.onlineViewers, "player")} online`),
    G(
      "div.box.tabs",
      G("button.btn.tooltip", "Local", f8 && { className: "active" }, {
        dataset: { tooltip: "Nearby Cursors Only" },
        onclick: () => {
          ((A4 = !1), Z3());
        },
      }),
      G("button.btn.tooltip", "Global", !f8 && { className: "active" }, {
        dataset: { tooltip: "All Online Users" },
        onclick: () => {
          ((A4 = !0), K3());
        },
      }),
      G(
        "button#pin-chat-btn.btn.tooltip",
        G("img", { src: "/static/icon/tool/pin.png", draggable: !1, alt: "Pin" }),
        _1 && { className: "primary" },
        {
          onclick() {
            _1 = !_1;
            let $ = P1.parentElement;
            if (_1) $.style.setProperty("display", "block", "important");
            else $.style.removeProperty("display");
            I8();
          },
          dataset: {
            tooltip: _1 ? "Chat is pinned (stays on screen)" : "Chat is not pinned (auto-hides)",
          },
        },
      ),
    ),
  ),
    n0("div.chat-input-box").forEach(($) => {
      $.classList.toggle("global", !f8);
    }));
}
function Z3() {
  if (G3()) return;
  ((f8 = !0), b8.replaceWith(S1), I8());
}
function K3() {
  ((f8 = !1), S1.replaceWith(b8), I8());
}
function F3() {
  if (A4) return;
  if (D.normalizedZoom <= K8) K3();
  else Z3();
}
var y1 = 0;
function nZ($) {
  if ($ === void 0) $ = 0;
  if (((y1 = $), !$)) return $;
  let Q = Math.round(($ - Date.now()) / 1000);
  if (Q <= 0) return ((y1 = 0), 0);
  return ((y1 = $), Q);
}
function e6($) {
  let Q = nZ($),
    J = Q === null ? "inf" : `${Q}s`;
  n0("div.chat-input-box").forEach((Y) => {
    if (Q == 0) delete Y.dataset.cooldown;
    else Y.dataset.cooldown = J;
  });
}
setInterval(() => {
  if (y1) e6(y1);
}, 500);
var tZ = /^can i ha[sz] cursor pl[zs]\??$/i;
function FQ($ = !1) {
  let Q = !1,
    J,
    Y = G("input#chat-input-field.input.box", {
      type: "text",
      spellcheck: !1,
      maxLength: u1,
      placeholder: window.innerWidth < 1200 ? "Message..." : "Type here to send a message!",
      onfocus() {
        if (!$) return;
        J = setInterval(() => {
          Y.scrollIntoView({ block: "end" });
        }, 500);
      },
      onblur() {
        (clearInterval(J), (J = null));
      },
      onkeypress(K) {
        if (K.key == "Enter") q.click();
        else if (K.key == "Escape") ((Y.value = ""), Y.blur());
      },
    }),
    q = $$("tool/send", {
      id: "tool-send-btn",
      ariaLabel: "Send Message",
      async onclick() {
        let K = Y.value.slice(0, u1).trim();
        if (!K || Q) return;
        try {
          if (
            ((Q = !0),
            (Y.readOnly = !0),
            (Z.style.opacity = "0.5"),
            tZ.test(K) && !x.flags.plzCursor)
          ) {
            if (!(await y$({ code: "CAN_I_HAS_CURSOR" }))) {
              (new y("plz?", G("p", "yes u may haz cursor")), (x.flags.plzCursor = !0), T0());
              return;
            }
          }
          (await Y3(K, !f8), (Y.value = ""));
        } finally {
          (await s1(500), (Q = !1), (Y.readOnly = !1), (Z.style.opacity = "1"));
        }
      },
    }),
    Z = G("div.chat-input-box", Y, q);
  return Z;
}
function M2() {
  return (
    I8(), G("div.input.chat-box.container", G("div.popup.box.outset.chat-log-wrapper", P1), FQ())
  );
}
function D4($, Q = !0) {
  let J = l("input#chat-input-field");
  if (!J) return;
  let Y = J.value,
    q = Y && Y.at(-1) != " ";
  if (((J.value = `${Y}${q ? " " : ""}${$} `.slice(0, u1)), Q)) J.focus();
}
var y6 = 1.5,
  K8 = 0.8,
  $0 = G("canvas", { width: f, height: M0 }),
  W3 = "/static/brick-background.jpg",
  aZ = "/static/brick-background-hi.webp",
  w4 = G("img.canvas-background", { fetchPriority: "high", src: W3, draggable: !1 }),
  H$ = null,
  v1 = !1,
  sZ = 0.8;
function X3() {
  if (H$ || x.a11y.lowQualityBg) return;
  ((H$ = new Image()), (H$.decoding = "async"), (H$.src = aZ));
}
var j3 = window.requestIdleCallback ?? (($) => setTimeout($, 800));
j3(X3);
function rZ() {
  if (v1) return;
  if (D.zoom < sZ) return;
  if (!H$ || !H$.complete || H$.naturalWidth === 0) return;
  ((w4.src = H$.src), (v1 = !0));
}
var H3 = () => v1 || H$ || j3(X3);
function P3() {
  if (!v1) return;
  ((w4.src = W3), (v1 = !1), (H$ = null));
}
var u$ = G("div.paint-layers", H1, h6, $0),
  j$ = G("div.canvas-container", w4, u$),
  z0 = G("div.canvas-wrapper", j$),
  B$ = $0.getContext("2d", { willReadFrequently: !0 }),
  D = {
    x: 0,
    y: 0,
    zoom: 1,
    normalizedZoom: 1,
    rect: $0.getBoundingClientRect(),
    viewport: { x: 0, y: 0, x2: 0, y2: 0 },
  },
  iZ = 1920;
function eZ() {
  D.zoom = Math.max(D.zoom, l8());
  let $ = $0.width * D.zoom,
    Q = $0.height * D.zoom,
    J = window.innerWidth - $,
    Y = window.innerHeight - Q;
  ((D.x = $ >= window.innerWidth ? Math.min(Math.max(D.x, J), 0) : window.innerWidth / 2 - $ / 2),
    (D.y =
      Q >= window.innerHeight ? Math.min(Math.max(D.y, Y), 0) : window.innerHeight / 2 - Q / 2));
}
function N0() {
  if (
    (eZ(),
    j$.style.setProperty("--zoom", D.zoom.toString()),
    (j$.style.transform = `translate(${D.x}px, ${D.y}px) scale(${D.zoom})`),
    (D.rect = $0.getBoundingClientRect()),
    (j$.style.imageRendering =
      D.rect.width >= window.innerWidth && D.zoom > 1 ? "pixelated" : "optimizeQuality"),
    (D.normalizedZoom = D.zoom / (window.innerWidth / iZ)),
    F3(),
    D.normalizedZoom <= K8)
  )
    document.body.classList.remove("cursors-visible");
  else document.body.classList.add("cursors-visible");
  (n7({
    x: D.rect.left,
    y: D.rect.top,
    w: window.innerWidth,
    h: window.innerHeight,
    zoom: D.rect.width / $0.width,
  }),
    rZ(),
    (D.viewport = d5()),
    (x.camera.zoom = D.zoom),
    (x.camera.x = D.x),
    (x.camera.y = D.y),
    T0());
}
function l8() {
  return Math.max(window.innerWidth / $0.width, window.innerHeight / $0.height);
}
function V3() {
  if (x.camera.zoom != 0) {
    ((D.zoom = x.camera.zoom), (D.x = x.camera.x), (D.y = x.camera.y), N0());
    return;
  }
  ((D.zoom = l8()),
    N0(),
    (D.x = window.innerWidth / 2 - D.rect.width / 2),
    (D.y = window.innerHeight / 2 - D.rect.height / 2),
    N0());
}
function E1($, Q, J, Y, q = 0.6) {
  let Z = Math.min(
      (window.innerWidth * q) / Math.max(J, 1),
      (window.innerHeight * q) / Math.max(Y, 1),
    ),
    K = Math.min(Math.max(Z, l8()), 40);
  ((D.zoom = K), N0());
  let W = D.rect.width / $0.width,
    F = D.rect.left + ($ + J / 2) * W,
    H = D.rect.top + (Q + Y / 2) * W;
  ((D.x += window.innerWidth / 2 - F), (D.y += window.innerHeight / 2 - H), N0());
}
var T4 = !1;
async function R3($, Q, J = 60, Y = 160) {
  if (T4) return !1;
  T4 = !0;
  let q = D.viewport.x2 - D.viewport.x,
    Z = D.viewport.y2 - D.viewport.y,
    K = D.viewport.x + q / 2,
    W = D.viewport.y + Z / 2,
    F = (H) =>
      H == 0
        ? 0
        : H == 1
          ? 1
          : H < 0.5
            ? Math.pow(2, 20 * H - 10) / 2
            : (2 - Math.pow(2, -20 * H + 10)) / 2;
  for (let H = 0; H <= J; H++) {
    let X = F(H / J),
      j = K + ($ - K) * X,
      P = W + (Q - W) * X,
      C = q + (Y - q) * X,
      z = Z + (Y - Z) * X;
    (E1(j - C / 2, P - z / 2, C, z, 1), await s1(16.666666666666668));
  }
  return ((T4 = !1), !0);
}
window.addEventListener("resize", N0);
function M3() {
  let Q = R.user.username,
    J = !1,
    Y = G("p.warning"),
    q = (X, j = "") => {
      ((Y.textContent = X), (Y.className = j));
    },
    Z = G("input.input.box", { type: "text", placeholder: "Username...", maxLength: 16, value: Q }),
    K = G("button.btn", "Cancel", {
      onclick: () => {
        if (Z.value != Q) {
          Z.value = Q;
          return;
        }
        p(!0);
      },
    }),
    W = G("button.btn.primary", "Save");
  requestAnimationFrame(() => {
    Y.style.maxWidth = Z.offsetWidth + "px";
  });
  let F = !1;
  function H() {
    let X = Z.value.replace(/[^a-z0-9_.-]/g, "");
    if (Z.value != X) Z.value = X;
    let j = X != Q,
      P = q1(X);
    if (((W.disabled = !j || !!P || J), q0))
      if (((F = j), F)) q0.lockLevel++;
      else q0.lockLevel--;
    if (j && P) q(P, "warning");
    else if (Y.className == "warning") q("");
  }
  return (
    (Z.oninput = H),
    (W.onclick = async () => {
      if (J) return;
      let X = Z.value;
      if (X == Q) return p(!0);
      if (q1(X)) {
        H();
        return;
      }
      if (
        !(await i(`Change your username to "${X}"?`, "Change Username", "Change", "Keep Current"))
      )
        return;
      ((J = !0), q(""), Z0(), (q0.lockLevel = 1));
      try {
        let P = await m5({ username: X });
        if (($1(), (J = !1), typeof P == "string")) {
          (q(P, "warning"), H());
          return;
        }
        ((Q = R.user?.username ?? X), (Z.value = Q), q("Username updated!", "success"), H());
      } catch (P) {
        ($1(), (J = !1), q(P?.message || "Something went wrong", "warning"), H());
      }
    }),
    G("div.username-settings", G("h3", "Username"), Z, Y, G("div.btn-container", K, W))
  );
}
var $K = 300,
  QK = 1000,
  JK = J0.url.api;
async function I4($) {
  try {
    let Q = await fetch(JK + $, { cache: "no-store" });
    if (!Q.ok) return null;
    return await Q.json();
  } catch {
    return null;
  }
}
function g1($) {
  if ($ == null) return "—";
  if ($ < 1) return $.toFixed(2) + " ms";
  if ($ < 100) return $.toFixed(1) + " ms";
  return Math.round($) + " ms";
}
function z3($) {
  if ($ == null) return "—";
  if ($ < 1024) return `${$} B`;
  if ($ < 1048576) return `${($ / 1024).toFixed(1)} KB`;
  return `${($ / 1024 / 1024).toFixed(1)} MB`;
}
function k3($) {
  if ($ == null) return "—";
  return $.toFixed(2) + "%";
}
function F8($, Q) {
  if ($ == null) return "—";
  return Q($);
}
var h4 = G("div.dev-overlay"),
  E0 = {
    active: !1,
    fps: 0,
    fpsFrameCount: 0,
    fpsWindowStart: performance.now(),
    wsState: "—",
    panel: h4,
  };
function YK($) {
  return (
    {
      [WebSocket.CONNECTING]: "CONNECTING",
      [WebSocket.OPEN]: "OPEN",
      [WebSocket.CLOSING]: "CLOSING",
      [WebSocket.CLOSED]: "CLOSED",
    }[$] || "—"
  );
}
function GK() {
  return `${~~(D.viewport.x2 - D.viewport.x)}x${~~(D.viewport.y2 - D.viewport.y)} px / ${a$.size} chunks`;
}
function qK() {
  let $ = performance.memory;
  if (!$) return "n/a";
  let Q = $.usedJSHeapSize ?? 0,
    J = $.totalJSHeapSize ?? 0;
  return `${z3(Q)} / ${z3(J)}`;
}
function C3() {
  if (!E0.active) return;
  E0.fpsFrameCount++;
  let $ = performance.now(),
    Q = $ - E0.fpsWindowStart;
  if (Q >= 1000)
    ((E0.fps = Math.round((E0.fpsFrameCount * 1000) / Q)),
      (E0.fpsFrameCount = 0),
      (E0.fpsWindowStart = $));
  requestAnimationFrame(C3);
}
function D0($, Q) {
  return G("div.dev-overlay-row", G("span.dev-overlay-label", $), G("span.dev-overlay-value", Q));
}
function $5($, ...Q) {
  return G("div.dev-overlay-section", G("div.dev-overlay-section-title", $), ...Q);
}
var E4,
  U3 = 0;
async function ZK() {
  if (!P$) return "";
  if (!E4 || U3 < Date.now())
    ((U3 = Date.now() + QK),
      (E4 = await Promise.all([
        I4("/metrics/loop-lag"),
        I4("/metrics/sendbulk"),
        I4("/metrics/canvas-density"),
      ])));
  let [$, Q, J] = E4;
  return $5(
    "server",
    D0("loop lag p99 / max", `${F8($?.p99_ms, g1)} / ${F8($?.max_ms, g1)}`),
    D0("sendBulk last-10s cpu", F8(Q?.last_10s?.cpu_pct_of_window, k3)),
    D0("sendBulk p99 / max", `${F8(Q?.p99_call_ms, g1)} / ${F8(Q?.max?.call_ms, g1)}`),
    D0(
      "sendBulk avg fanout",
      F8(Q?.avg_fanout, (Y) => Y.toFixed(0)),
    ),
    D0("canvas density", F8(J?.density_pct, k3)),
  );
}
async function L3() {
  if (!E0.active) return;
  (setTimeout(L3, $K),
    (E0.wsState = YK(K0?.readyState)),
    E0.panel.replaceChildren(
      G("div.dev-overlay-title", "wall: dev"),
      await ZK(),
      $5(
        "ws",
        D0("state", E0.wsState),
        D0("connection id", String(R.connectionId)),
        D0("ping rtt", g1(R.debug.ping)),
        D0("identified", R.user ? "yes" : "no"),
      ),
      $5(
        "client",
        D0("fps", String(E0.fps)),
        D0("memory (jsHeap)", qK()),
        D0("known users", String(V0.size)),
        D0("paint remaining", `${R.paintRemaining} (${Math.round(R.paintRemaining / L0)} cans)`),
      ),
      $5(
        "camera",
        D0("translation", `${D.x.toFixed(2)}, ${D.y.toFixed(2)}`),
        D0("zoom", `${D.zoom.toFixed(1)} client / ${D.normalizedZoom.toFixed(1)} normal`),
        D0("viewport", GK()),
        D0("cursor", `${R.cursorX}, ${R.cursorY}`),
      ),
    ));
}
function Q5() {
  if (E0.active) return;
  ((E0.active = !0), document.body.append(h4), requestAnimationFrame(C3), L3());
}
function D3() {
  if (!E0.active) return;
  (h4.remove(), (E0.active = !1));
}
function W8($, Q, J = "") {
  let Y = `s_${$}`,
    q = G("input", {
      type: "checkbox",
      id: Y,
      checked: !!x.a11y[$],
      onchange() {
        if (q.checked) x.a11y[$] = !0;
        else delete x.a11y[$];
        (x1(), T0());
      },
    });
  return G("div.checkbox", q, G("label.tooltip", Q, { dataset: { tooltip: J }, htmlFor: Y }));
}
function J5() {
  let $ = new y(
      "Settings",
      G(
        "div.settings-modal",
        G("h3", "Accessibility"),
        W8("darkTheme", "Dark Theme"),
        W8("lowQualityBg", "Low Quality Background", "Enable this if you're experiencing lag"),
        W8("hideNameplates", "Hide Nameplates", "Shows cursors, but removes names/chat bubbles"),
        W8("hideCursors", "Hide Other Cursors", "Completely hides all cursors on the canvas"),
        W8(
          "systemCursor",
          "Use System Cursor",
          "Local only. Use this if you have issues with our custom cursor",
        ),
        W8(
          "hideChatBubbles",
          "Hide Chat Bubbles",
          "Do not show chat bubbles next to users. Chat is still available.",
        ),
        W8("devOverlay", "Stats For Nerds"),
        R.user && M3(),
      ),
    ),
    Q = $.titleElement.querySelector("button.icon");
  if (Q) Q.onclick = () => $.close(!0);
  return $;
}
function x1() {
  let $ = x.a11y;
  if ($.hideCursorKeybind) (($.hideCursorKeybind = !1), ($.hideCursors = !1));
  if (
    (($.hideOwnCursor = !!$.hideCursors),
    document.body.classList.toggle("dark", !!$.darkTheme),
    document.body.classList.toggle("hide-nameplates", !!$.hideNameplates),
    $.hideCursors)
  )
    n$.remove();
  else j$.append(n$);
  if ($.systemCursor) r8();
  else Q6();
  if ($.lowQualityBg) P3();
  else H3();
  if ($.devOverlay) Q5();
  else D3();
}
var u0 = !1,
  D$ = 0,
  A$ = 0,
  A3 = [0, 2, 3, 4],
  p1 = !1,
  N4 = !1,
  KK = "1234567890";
document.body.addEventListener("keydown", ($) => {
  if (q0 || $.target != document.body) return;
  if ((t8 ? $.metaKey : $.ctrlKey) && ($.key == "z" || $.key == "Z" || $.key == "y")) {
    if (($.preventDefault(), (u0 = !1), $.key == "z")) b6();
    else f6();
    return !1;
  } else if ($.key == "z" || $.key == "h") l("#tool-hand").click();
  else if ($.key == "x" || $.key == "b") l("#tool-spray").click();
  else if ($.key == "c") g6();
  else if ($.key == "-") B4(1, 0.2);
  else if ($.key == "=") B4(-1, 0.2);
  else if ($.key == "m") l("#tool-preview").click();
  else if ($.key == "k") {
    let J = x.a11y;
    if (((J.hideCursors = !J.hideCursors), x1(), J.hideCursors)) J.hideCursorKeybind = !0;
    T0();
  } else if ($.key == "t" || $.key == "Enter")
    setTimeout(() => {
      let J = l("#tool-chat");
      if (J.checkVisibility()) J.click();
      else l(".chat-box input").focus();
    }, 10);
  else if (KK.includes($.key)) {
    let J = parseInt($.key) || 10;
    P2(J);
  } else if ($.key == "p") {
    let J = N6(...y0(D$, A$));
    if (J) Q8(J, !0);
  } else if (FK.has($.key.toLowerCase())) ((u0 = !1), f$.add($.key.toLowerCase()), XK());
});
var FK = new Set(["w", "a", "s", "d"]),
  WK = 900,
  f$ = new Set(),
  G5 = null,
  O4 = 0;
function XK() {
  if (G5 != null) return;
  ((O4 = performance.now()), (G5 = requestAnimationFrame(I3)));
}
function jK() {
  f$.clear();
}
function I3($) {
  if (q0 || !f$.size) {
    G5 = null;
    return;
  }
  let Q = Math.min($ - O4, 100) / 1000;
  O4 = $;
  let J = WK * D.zoom * Q,
    Y = 0,
    q = 0;
  if (f$.has("w")) q += 1;
  if (f$.has("s")) q -= 1;
  if (f$.has("a")) Y += 1;
  if (f$.has("d")) Y -= 1;
  if (Y || q) {
    let Z = Math.hypot(Y, q);
    ((D.x += (Y / Z) * J), (D.y += (q / Z) * J), (u0 = !1), N0());
  }
  G5 = requestAnimationFrame(I3);
}
document.body.addEventListener("keyup", ($) => {
  f$.delete($.key.toLowerCase());
});
window.addEventListener("blur", jK);
window.addEventListener("beforeunload", ($) => {
  if (CQ()) return ($.preventDefault(), ($.returnValue = !0), !1);
});
function T3($, Q) {
  if (R.activeTool != 1 || D.normalizedZoom < y6) return;
  if (R.openAt && Date.now() + R.clockOffset < R.openAt) return;
  if (R.paintRemaining + R.localPaintIncrement <= 0) return LQ();
  ((u0 = !0), (D$ = $), (A$ = Q));
}
function m4($, Q) {
  if (p1 || D.normalizedZoom < K8) return;
  if (x.a11y.hideOwnCursor) return;
  let [J, Y] = y0($, Q);
  ((R.cursorX = J), (R.cursorY = Y));
}
function w3($, Q) {
  ((p1 = !0), (D$ = $), (A$ = Q));
}
function E3($, Q) {
  if (p1) ((D.x += $ - D$), (D.y += Q - A$), N0());
  ((D$ = $), (A$ = Q));
}
var h3 = 200;
function B4($, Q = 0.1) {
  let J = D.zoom,
    Y = D.zoom + Q * -Math.sign($) * D.zoom;
  ((D.zoom = Math.max(Math.min(Y, h3), l8())), m3(D.zoom / J, D$, A$));
}
function m3($, Q, J) {
  ((u0 = !1), (D.x = Q - (Q - D.x) * $), (D.y = J - (J - D.y) * $), N0(), t0());
}
function S4() {
  if (N4) {
    if (R.paintRemaining > 0) Y2();
    else S6();
    N4 = !1;
  }
  if (u0 && a0.length) L2();
  ((p1 = !1), (u0 = !1), (Y5 = null));
}
document.body.addEventListener("mousemove", ($) => E3($.x, $.y));
var Y5 = null;
document.body.addEventListener("touchmove", ($) => {
  if ($.touches.length == 1) E3($.touches[0].clientX, $.touches[0].clientY);
  else if ($.touches.length == 2) {
    ($.preventDefault(), $.stopImmediatePropagation(), (u0 = !1), (p1 = !1));
    let Q = $.touches[0],
      J = $.touches[1],
      Y = Math.hypot(J.clientX - Q.clientX, J.clientY - Q.clientY);
    if (Y5 != null) {
      let q = Y / Y5,
        Z = D.zoom * q;
      ((D.zoom = Math.max(Math.min(Z, h3), l8())),
        m3(q, (Q.clientX + J.clientX) / 2, (Q.clientY + J.clientY) / 2));
    }
    return ((Y5 = Y), !1);
  }
});
document.body.addEventListener("mouseup", S4);
document.body.addEventListener("touchend", S4);
document.body.addEventListener("touchcancel", S4);
function LQ() {
  N4 = !0;
}
function N3() {
  ($0.addEventListener("mousedown", ($) => {
    if ($.button == 0) T3($.x, $.y);
  }),
    $0.addEventListener(
      "touchstart",
      ($) => {
        if ($.touches.length == 1) T3($.touches[0].clientX, $.touches[0].clientY);
      },
      { passive: !0 },
    ),
    z0.addEventListener("mousemove", ($) => m4($.x, $.y)),
    z0.addEventListener(
      "touchmove",
      ($) => {
        if ($.touches.length == 1) m4($.touches[0].clientX, $.touches[0].clientY);
        else if ($.touches.length == 2) $.preventDefault();
      },
      { passive: !1 },
    ),
    z0.addEventListener("mousedown", ($) => {
      if ($.button != 0 || A3.includes(R.activeTool)) w3($.x, $.y);
    }),
    z0.addEventListener(
      "touchstart",
      ($) => {
        if ($.touches.length == 1 && A3.includes(R.activeTool)) {
          let Q = $.touches[0].clientX,
            J = $.touches[0].clientY;
          (m4(Q, J), w3(Q, J));
        } else if ($.touches.length == 2) $.preventDefault();
      },
      { passive: !1 },
    ),
    z0.addEventListener(
      "wheel",
      ($) => {
        if ($.ctrlKey) $.preventDefault();
        ((u0 = !1), B4($.deltaY, 0.1));
      },
      { passive: !1 },
    ),
    z0.addEventListener("dblclick", async ($) => {
      if (D.zoom > 1) return;
      let [Q, J] = y0($.x, $.y);
      R3(Q, J);
    }));
}
function O3() {
  (r7(), V3(), OY(), N3());
}
var S3 =
    Math.min(window.innerWidth, window.innerHeight) <= 800 &&
    window.matchMedia("(pointer: coarse)").matches &&
    document.fullscreenEnabled,
  HK = 25000000;
function PK($, Q, J, Y, q) {
  if (typeof Q != "string" || !Q?.length) return "Missing name";
  if (typeof J != "string" || !J?.length) return "Missing location";
  if ($ && $.length > 127) return "Identification is too long";
  if (Q.length > 255) return "Name is too long";
  if (J.length > 255) return "Location is too long";
  if (!Y || !q) return "Missing file";
  if (!Y.startsWith("image/")) return "Invalid file type (expected an image)";
  if (q > HK) return `File is too large (max 25MB; got ${Math.floor(q / 1000 / 1000)}MB)`;
}
var d8 = -1;
function VK() {
  let $ = l("input#s__id").value,
    Q = l("input#s__name").value,
    J = l("input#s__location").value,
    Y = l("input#s__upload").files,
    q = Y ? Y.item(0) : null,
    Z = PK($, Q, J, q?.type, q?.size);
  if (Z) return (alert(Z), !1);
}
function RK($) {
  let Q = new Intl.DateTimeFormat([], { day: "2-digit", month: "2-digit", year: "numeric" }).format(
      $.submitted_at,
    ),
    J = G("div.image");
  if ($.image_file.match(/\.(mp4|webm|ogg|mov)$/i))
    J.append(
      G("video", {
        style: { width: "100%", height: "100%" },
        controls: !0,
        src: `${J0.url.signalArchive}/static/uploads/${$.image_file}`,
        autoplay: !1,
        preload: "none",
        loop: !1,
        muted: !1,
      }),
    );
  else
    ((J.style.backgroundImage = `url(${J0.url.signalArchive}/static/uploads/${$.image_file})`),
      (J.style.imageRendering = "auto"));
  return G(
    "div.window.wpost",
    G(
      "div.title",
      G("p", `SIGNAL #${$.num_id}`),
      G("div.buttons", G("button", G("img", { src: "/static/icon/archive/close.png", alt: "x" }))),
    ),
    G(
      "div.content",
      J,
      G(
        "div.info",
        G("p", G("span.label", "SIGNAL NAME"), G("b", $.name)),
        G("p", G("span.label", "LOCATION"), G("b", $.location)),
        G("p", G("span.label", "TRANSMITTED"), G("b", Q)),
      ),
    ),
  );
}
async function MK() {
  ((d8 = 0), await Promise.all([zK(), _3()]));
}
var _4 = !1;
async function _3() {
  if (_4) return;
  _4 = !0;
  let $ = G("div.f", "Loading...");
  l(".sightings .posts").append($);
  let J = await (
    await fetch(
      `${J0.url.signalArchive}/fetch?tag=&after=${d8}&limit=${d8 ? 10 : 4}&at=${Date.now()}`,
    )
  ).json();
  if (
    (l(".sightings .posts").append(...J.map(RK)),
    (d8 += J.length),
    $.remove(),
    (_4 = !1),
    !J.length)
  )
    (l(".sightings .posts").append(
      G("div.f", d8 ? "You have reached the end." : "Nothing here yet..."),
    ),
      (l(".sightings .more").style.display = "none"));
  else l(".sightings .more").style.display = "";
}
async function zK() {}
async function kK() {
  let $ = l(".preview"),
    Q = l("input#s__upload").files?.item(0);
  if (!Q) {
    $.hidden = !0;
    return;
  }
  let J = URL.createObjectURL(new Blob([await Q.arrayBuffer()]));
  (($.hidden = !1), ($.style.backgroundImage = `url(${J})`));
}
var y3 = G(
    "div.info-container",
    G(
      "div.window.winfo",
      G(
        "div.title",
        G("p", "filian_is_lost.txt"),
        G(
          "div.buttons",
          G("button.icon", G("img", { src: "/static/icon/archive/minimize.png", alt: "_" })),
          G("button.icon", G("img", { src: "/static/icon/archive/maximize.png", alt: "⌷" })),
          G("button.icon", G("img", { src: "/static/icon/archive/close.png", alt: "x" })),
        ),
      ),
      G(
        "div.content",
        G("h1", "FILIAN IS LOST."),
        G(
          "p",
          "She went dark months ago. No posts. No streams. No signals. But we know she's listening. She always is.",
        ),
        G(
          "p",
          G("b", "The Wall"),
          " is her frequency. Every mark you leave gets archived: a permanent record of everyone, everywhere, who showed up when she went quiet.",
        ),
        G("p", "Paint something. Make noise. Leave your mark in the archive."),
        G("p", "Bring her back."),
      ),
    ),
  ),
  K5 = G(
    "div.main",
    y3,
    G(
      "div.terminal",
      G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " signal_archive.exe"),
      G("p", "Loading the signal archive..."),
    ),
    G("div.header", G("h1", "SIGNAL ARCHIVE"), G("p", "RECENTLY TRANSMITTED")),
    G(
      "div.post-container",
      G("div.posts"),
      G("div.more", G("button", "LOAD MORE", { onclick: _3 })),
    ),
    G(
      "div.terminal",
      G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " submit_signal.exe"),
      G("p", "Loading submission form..."),
    ),
    G(
      "div.window.wsubmit",
      G("div.title", G("p", "submit_signal.exe")),
      G(
        "div.content",
        G("h1", "DID YOU FIND SOMETHING?"),
        G("p", "Submit a signal to the archive"),
        G(
          "form",
          {
            action: `${J0.url.signalArchive}/submit`,
            method: "post",
            enctype: "multipart/form-data",
          },
          G("label", { htmlFor: "id" }, "Identification (optional)"),
          G("input#s__id", {
            type: "text",
            name: "id",
            placeholder: "Twitter, Discord, etc",
            maxlength: "127",
          }),
          G("label", { htmlFor: "name" }, "Signal Name"),
          G("input#s__name", {
            type: "text",
            name: "name",
            placeholder: "Enter signal name...",
            required: !0,
            maxlength: "255",
          }),
          G("label", { htmlFor: "location" }, "Location"),
          G("input#s__location", {
            type: "text",
            name: "location",
            placeholder: "City, Country",
            required: !0,
            maxlength: "255",
          }),
          G("label", { htmlFor: "s__upload" }, "Upload Image"),
          G(
            "label.input.upload",
            { htmlFor: "s__upload" },
            G("div#file_preview.preview", { hidden: !0 }),
            G("span", "DRAG FILE HERE OR CLICK TO BROWSE"),
          ),
          G("input#s__upload", {
            type: "file",
            name: "image",
            accept: "image/*",
            required: !0,
            onchange: kK,
          }),
          G(
            "div.buttons",
            G("input", { type: "submit", onclick: () => VK(), value: "Transmit Signal" }),
            G(
              "a.button",
              {
                onclick: () => {
                  let $ = ["id", "name", "location", "tag", "upload"];
                  for (let Q of $) document.getElementById(`s__${Q}`).value = "";
                  l(".preview").hidden = !0;
                },
              },
              "Cancel",
            ),
          ),
        ),
      ),
    ),
    G(
      "p",
      G("a", "Discord", { href: "https://discord.gg/Wjgs9JAbT2", target: "_blank" }),
      " · ",
      G("a", "Twitter", { href: "https://x.com/THE_W4LL_", target: "_blank" }),
      " · ",
      G("a", "Reddit", { href: "https://www.reddit.com/r/THE_WALL_/", target: "_blank" }),
    ),
  ),
  q5 = G(
    "div.sightings",
    G(
      "div.mobile-scroll-btn",
      { onclick: x3 },
      G("button", G("img", { src: "/static/icon/arrow-down.png", draggable: !1 })),
    ),
    K5,
  );
function v3($, Q) {
  let J = $ + Q;
  return J > 0 ? `${j0(J)} online` : "";
}
function B2($, Q) {
  let J = l("#wall-online-count");
  if (J) J.textContent = v3($, Q);
}
function g3($ = !1) {
  (sessionStorage.setItem("wall:view", $ ? "wall" : "archive"),
    document.body.append(q5),
    (K5.inert = !0));
  let Q = l("main");
  if (
    (Q.prepend(
      G(
        "div.modal-title.wall-title",
        G(
          "span",
          G("h3", "the_wall.exe"),
          G("span.wall-online#wall-online-count", v3(R.onlinePlayers, R.onlineViewers)),
        ),
        G("button.btn", "Full Screen", { style: { color: "var(--text)" }, onclick: B3 }),
      ),
    ),
    Q.addEventListener("mouseenter", UK),
    q5.addEventListener("mouseenter", x3),
    !$)
  )
    y4();
  else B3();
}
var Z5 = !1;
function x3() {
  if (Z5) return;
  if (
    ((Z5 = !0),
    document.body.classList.remove("noscroll"),
    (K5.inert = !1),
    y3.scrollIntoView({ behavior: "smooth", block: "center" }),
    d8 < 0)
  )
    MK();
}
function UK() {
  if (!Z5) return;
  ((Z5 = !1),
    document.body.classList.add("noscroll"),
    l("main").scrollIntoView({ behavior: "smooth", block: "center" }),
    (K5.inert = !0));
}
function B3() {
  if (
    (sessionStorage.setItem("wall:view", "wall"),
    l("main").classList.remove("minimized"),
    (q5.style.display = "none"),
    N0(),
    S3)
  )
    document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
}
function y4() {
  if (
    (l("main").classList.add("minimized"),
    sessionStorage.setItem("wall:view", "archive"),
    (q5.style.display = ""),
    N0(),
    S3)
  )
    document.exitFullscreen().catch(() => {});
}
var v4 = G("div.actionbar", { role: "toolbar" });
function p3($) {
  let Q = G("button.abtn.btn.action", Z6($.label), { ariaLabel: $.label.replace(/[\[\]]/g, "") });
  if ($.active) Q.classList.add("active");
  let J = () => {
    if (!$.menu) return;
    let Y = Q.getBoundingClientRect(),
      q = typeof $.menu == "function" ? $.menu() : $.menu;
    kJ(q, Y.x, Y.y + Y.height);
  };
  return (
    (Q.onclick = () => {
      if (!S5()) J();
      if ($.action) $.action();
    }),
    (Q.onmouseover = () => {
      if ($.action) I$();
      if (S5()) J();
      if (document.activeElement) document.activeElement.blur();
    }),
    Q
  );
}
function g4($) {
  v4.replaceChildren(
    ...$.map(p3),
    G(
      "div.right-side",
      G("b.fil", "FILIAN IS LOST"),
      G(
        "button.btn.icon.minimize-btn",
        {
          ariaLabel: "Minimize",
          onclick() {
            y4();
          },
        },
        G("img", { src: "/static/icon/close.png", draggable: !1 }),
      ),
    ),
  );
}
function i6($) {
  return G("div.navbar.custom", G("div.actionbar.custom", $.map(p3)));
}
var e0 = null,
  c1 = null,
  F5 = "";
function CK($, Q, J) {
  if (!$) return;
  if (e0) W5();
  let Y = G("div#tooltip-text.tooltip-popup", { textContent: $, role: "tooltip" });
  (document.body.append(Y), (e0 = Y), c3(Q, J));
}
function c3($, Q) {
  if (!e0) return;
  let J = e0.getBoundingClientRect(),
    Y = $ + J.width > window.innerWidth ? window.innerWidth - J.width : $,
    q = Q + J.height > window.innerHeight ? window.innerHeight - J.height : Q;
  ((e0.style.left = `${Y}px`), (e0.style.top = `${q}px`));
}
function W5() {
  if (!e0) return;
  if (c1) c1.removeAttribute("aria-describedby");
  (e0.remove(), (e0 = null), (c1 = null), (F5 = ""));
}
function X5($, Q, J) {
  if (!$.classList || !$.classList.contains("tooltip")) return;
  let Y = $.dataset.tooltip;
  if (!Y) return;
  let q = typeof Q == "number" && typeof J == "number";
  if (!q) {
    let Z = $.getBoundingClientRect();
    ((Q = Z.x), (J = Z.y));
  }
  if (e0) {
    if (c1 != $) return (W5(), X5($, Q, J));
    if (F5 != Y) ((e0.textContent = Y), (F5 = Y));
    if (q) c3(Q, J);
    return;
  }
  (CK(Y, Q, J), (c1 = $), (F5 = Y), $.setAttribute("aria-describedby", "tooltip-text"));
}
document.addEventListener("mouseover", ($) => X5($.target, $.x, $.y));
document.addEventListener("mousemove", ($) => X5($.target, $.x, $.y));
document.addEventListener("focusin", ($) => X5($.target));
window.addEventListener("mouseout", W5);
window.addEventListener("click", W5);
var b3 = {
    stat_pixels_changed: "Pixels Changed",
    stat_paint_visible: "Paint Visible",
    stat_member_count: "User Count",
  },
  x4 = { users: "Users", clans: "Clans", countries: "Countries" },
  p4 = {
    users: ["stat_paint_visible", "stat_pixels_changed"],
    clans: ["stat_paint_visible", "stat_pixels_changed", "stat_member_count"],
    countries: ["stat_paint_visible", "stat_pixels_changed", "stat_member_count"],
  };
var LK = { users: "You're", clans: "Your clan is", countries: "Your country is" },
  DK = { stat_member_count: j0, stat_pixels_changed: j0, stat_paint_visible: o1 },
  AK = {
    users: ($, Q) => [
      G("b.box", $.clan_name && G("b.clan-label", H8($.clan_name)), $.name),
      G("span.box", Q),
    ],
    clans: ($, Q) => [G("b.box", $.name), G("span.box", Q)],
    countries: ($, Q) => [G("b.box", n1($.name)), G("span.box", Q)],
  };
async function b1($, Q, J = 0) {
  Z0();
  let Y = await N.leaderboard.$get({ query: { category: $, stat: Q, page: (J || 0).toString() } });
  if (!Y.ok) return m0(Y, "Could not load the leaderboard");
  let q = await Y.json();
  new y(
    "Leaderboard",
    G(
      "div.leaderboard-modal.nopad",
      i6(
        Object.keys(x4).map((Z) => ({
          label: x4[Z],
          active: Z == $,
          action() {
            b1(Z, p4[Z][0]);
          },
        })),
      ),
      G(
        "div.pad",
        G(
          "select.box.outset",
          {
            oninput(Z) {
              let K = Z.target.value;
              b1($, K, J);
            },
          },
          p4[$].map((Z) => G("option", b3[Z], { value: Z, selected: Q == Z })),
        ),
        typeof q.position == "number" &&
          q.ownValue !== 0 &&
          G("p.desc", `${LK[$]} #${j0(q.position + 1)}!`),
        G(
          "div.list",
          q.leaderboard.map((Z, K) =>
            G("div.item.box.outset", G("div.box", `${K + 1 + J * 10}`), AK[$](Z, DK[Q](Z.value))),
          ),
        ),
        G(
          "div.btn-container",
          G("a.link", "<<", {
            onclick() {
              if (J == 0) return;
              b1($, Q, J - 1);
            },
          }),
          G("b", `Page ${j0(J + 1)}`),
          G("a.link", ">>", {
            onclick() {
              if (q.leaderboard.length < 10) return;
              b1($, Q, J + 1);
            },
          }),
        ),
      ),
    ),
  );
}
function f3() {
  b1("users", "stat_paint_visible", 0);
}
function j5($, Q) {
  let J = () => {
      (Y.classList.remove("zoom"), (Y.style.width = Y.style.height = ""));
    },
    Y = G("div.img", G("img", { src: $, alt: Q }), {
      onmouseleave: J,
      onclick() {
        let q = Y.getBoundingClientRect();
        if (
          ((Y.style.width = `${q.width}px`),
          (Y.style.height = `${q.height}px`),
          !Y.classList.toggle("zoom"))
        )
          J();
      },
    });
  return Y;
}
var H5 = [
    {
      name: "Welcome",
      title: "Welcome to The Wall.",
      content: [
        G(
          "p.notice.noicon",
          "Filian has been gone for months. No one knows where. No one knows why. What we have is this wall, these cans, and each other. Leave something behind. Maybe she will find it. Maybe we will.",
        ),
        G("p", "Read this short guidebook to learn what we know."),
      ],
    },
    {
      name: "Draw Together",
      content: [
        G(
          "p.notice.noicon",
          "You can see cursors moving in real-time on the canvas! Zoom in, find cursors, chat with people, ",
          "and draw together, all on the same canvas, with thousands of players!",
        ),
        j5("/static/img/tutorial_cursors.png", "An image of three cursors chatting on the canvas"),
      ],
    },
    {
      name: "Drawing",
      title: "Drawing Mechanic",
      content: [
        G(
          "p",
          "The paint mechanic works like real spray paint: move fast to make thin lines, move slowly and the paint starts dripping.",
        ),
        j5("/static/img/tutorial_drawing.png", "An image of the spray can mechanic in-action"),
        G(
          "p",
          "When you draw, your changes are only visible to you. You can undo, redo, and edit freely without affecting others.",
        ),
        G(
          "p",
          "Click ",
          G("span.box.inline", "Submit"),
          " in the toolbar to publish your drawing so everyone can see it instantly!",
        ),
      ],
    },
    {
      name: "Spray Cans",
      content: [
        G(
          "p",
          "Each user starts with a set number of spray cans for drawing on the canvas. Every spray can contains the same amount of paint.",
        ),
        j5(
          "/static/img/tutorial_spray_cans.png",
          "An image of the spray paint bar on the toolbar, with the amount of extra spray cans to the right of it",
        ),
        G(
          "p",
          G("b", "Drawing consumes paint!"),
          " When one spray can runs out, the next one is used automatically.",
          " If you use all your spray cans, a few minute timer starts, after which your paint gets refilled.",
        ),
        G(
          "p",
          "You can also earn extra paint by inviting your friends to ",
          G("b", "The Wall"),
          "! ",
          G("br"),
          "Go to ",
          G("span.box.inline", "User > Share Webiste"),
          " in the action bar to get your own personalized link!",
        ),
      ],
    },
    {
      name: "Toolbar",
      content: [
        j5(
          "/static/img/tutorial_hotbar.png",
          "An image of the website's toolbar, containing text and arrows describing each component",
        ),
        G(
          "p",
          "Use the ",
          G("span.box.inline", "Hand Tool"),
          " to move around the canvas and the ",
          G("span.box.inline", "Spray Tool"),
          " to paint. The center bar shows how much paint you have left and matches your selected color.",
        ),
        G(
          "p",
          "When the bar runs out, one spray can is used and the bar refills.",
          " The number next to the bar shows how many spray cans you have remaining, excluding the current one!",
        ),
        G(
          "p",
          "Enable ",
          G("span.box.inline", "Compare Mode"),
          " to make your local changes semi-transparent ",
          "so you can compare them with the live canvas",
        ),
      ],
    },
    {
      name: "End",
      title: "Happy Drawing!",
      content: [
        G("p.success", "You've made it to the end, congratulations! Time to start drawing!"),
        G(
          "p",
          "You can read this guidebook at any time again later by going to ",
          G("span.box.inline", "Info > Guidebook"),
          " in the action bar",
          { style: { fontSize: "0.8em" } },
        ),
        G("br"),
      ],
    },
  ],
  l3 = H5.length - 1;
function u8($ = 0) {
  let Q = H5[$],
    J = H5[$ - 1],
    Y = H5[$ + 1],
    q = $ + 1,
    Z = q <= l3 ? `Guidebook [${q}/${l3}]` : "Guidebook";
  if (!x.seenGuidebook) ((x.seenGuidebook = !0), T0());
  new y(
    Z,
    G(
      "div.info.tutorial",
      G("h3", Q.title || Q.name),
      Q.content,
      G(
        "div.btn-container",
        J && G("a.link.prev", `<< ${J.name}`, { onclick: () => u8($ - 1) }),
        G("a.link.next", `${Y?.name || "Continue"} >>`, { onclick: () => (Y ? u8($ + 1) : p()) }),
      ),
    ),
  ).onClose(() => {
    if (!Y) y$({ code: "READ_GUIDEBOOK" });
  });
}
function d3() {
  let $ = window.innerWidth <= 800;
  new y(
    "Keybinds",
    G(
      "div.info.keybinds",
      $ && G("p.warning.noicon", "These are probably not helpful if you're on mobile..."),
      G(
        "div.section",
        G("p", "Canvas"),
        G("div.box.outset", G("div.box", "Move"), G("div.box", "WASD / Right Click")),
        G("div.box.outset", G("div.box", "Move (hand only)"), G("div.box", "Left Click")),
        G("div.box.outset", G("div.box", "Zoom"), G("div.box", "Wheel / +-")),
      ),
      G(
        "div.section",
        G("p", "Tools"),
        G("div.box.outset", G("div.box", "Hand Tool"), G("div.box", "H or Z")),
        G("div.box.outset", G("div.box", "Brush Tool"), G("div.box", "B or X")),
        G("div.box.outset", G("div.box", "Chat"), G("div.box", "T or Enter")),
      ),
      G(
        "div.section",
        G("p", "Drawing"),
        G("div.box.outset", G("div.box", "Compare Mode"), G("div.box", "M")),
        G("div.box.outset", G("div.box", "Undo"), G("div.box", "Ctrl+Z")),
        G("div.box.outset", G("div.box", "Redo"), G("div.box", "Ctrl+Y")),
        G("div.box.outset", G("div.box", "Pick Color"), G("div.box", "P")),
        G("div.box.outset", G("div.box", "Last Used Color"), G("div.box", "1, 2, 3, ...")),
        G("div.box.outset", G("div.box", "Color Palette"), G("div.box", "C")),
      ),
      G(
        "div.section",
        G("p", "Other"),
        G("div.box.outset", G("div.box", "Hide Cursors"), G("div.box", "K")),
        G(
          "div.box.outset",
          G("div.box", "Reply To User (chat)"),
          G("div.box", "Shift+Click / Dblclick"),
        ),
        !$ &&
          !x.flags.konamiCursor &&
          R.user &&
          Math.random() > 0.8 &&
          G(
            "div.box.outset",
            G("div.box", "Konami Code"),
            G("div.box", "↑↑↓↓←→←→BA", {
              style: { fontWeight: "bold", lineHeight: "34px", letterSpacing: "1px" },
            }),
          ),
      ),
      V$,
    ),
  );
}
var u3 = 0;
function TK() {
  return new y("Feedback", G("div.feedback", G("div.success", "Thank you for your feedback!")));
}
function o3() {
  if (!R.user) {
    Y0("You need to be signed in to send feedback!");
    return;
  }
  let $ = Date.now();
  if (u3 + 60000 > $) return Y0("Please wait a minute before submitting feedback again.");
  let Q = 512,
    J = G("span", `0/${Q}`, { style: { color: "#aaa" } });
  new y(
    "Feedback",
    G(
      "div.feedback",
      G("label", { htmlFor: "f_type" }, "Type"),
      G(
        "select#f_type.box.outset.input",
        { style: { width: "100%" } },
        G("option", { value: "bug" }, "Bug Report"),
        G("option", { value: "feedback" }, "Feedback"),
        G("option", { value: "suggestion" }, "Feature Suggestion"),
      ),
      G("label", { htmlFor: "f_content" }, "Message (", J, ")"),
      G("textarea#f_content.input.box", {
        maxLength: Q,
        style: { height: "200px" },
        oninput(Y) {
          let q = Y.target.value;
          J.textContent = `${q.length}/${Q}`;
        },
      }),
      G(
        "div.btn-container",
        G("button.btn", "Cancel", { onclick: () => p() }),
        G("button.btn", "Submit!", {
          async onclick() {
            let Y = (l("select#f_type").value || "").trim(),
              q = (l("textarea#f_content").value || "").trim();
            if (!Y || !q) return;
            Z0();
            let Z = await N.user.feedback.$post({ json: { kind: Y, content: q } });
            if (!Z.ok) return m0(Z, "Could not submit feedback");
            ((u3 = $), TK());
          },
        }),
      ),
    ),
  );
}
var P5 = [
  {
    label: "[S]ocial",
    shortcut: "S",
    menu: [
      { label: "[O]nline Users", action: () => I2() },
      { label: "[L]eaderboard", action: () => f3() },
    ],
  },
  {
    label: "[H]elp",
    shortcut: "H",
    menu: [
      { label: "[G]uidebook", action: () => u8() },
      { label: "[K]eybinds", action: () => d3() },
      { label: "[F]eedback / Bug Reporting", action: () => o3() },
      {
        label: "[P]rivacy Policy & ToS",
        action: () => {
          window.open("/privacy.html", "_blank");
        },
      },
    ],
  },
];
var n3 = [
  {
    label: "[L]og In",
    shortcut: "L",
    action() {
      o$();
    },
  },
  { label: "[S]ettings", shortcut: "S", action: J5 },
  ...P5,
];
var t3 = () => [
  {
    label: "[U]ser",
    shortcut: "U",
    menu: [
      { label: `Hi, ${R.user?.username}!` },
      {},
      { label: "[S]ettings", shortcut: "S", action: J5 },
      { label: "[C]lan Settings", shortcut: "C", action: Q1 },
      { label: "Cursor [I]nventory", shortcut: "I", action: T8 },
      { label: "Share [W]ebsite", shortcut: "W", action: V1 },
      {},
      {
        label: "[L]ogout",
        shortcut: "l",
        async action() {
          if (await i("Are you sure you want to log out?")) V7();
        },
      },
    ],
  },
  {
    label: "[A]ction",
    shortcut: "A",
    menu: [
      { label: "[U]ndo", keybindText: `${L5}+Z`, action: () => b6() },
      { label: "[R]edo", keybindText: `${L5}+${t8 ? "Shift+Z" : "Y"}`, action: () => f6() },
    ],
  },
  ...P5,
  ...(v0()
    ? [
        {
          label: "[M]od",
          shortcut: "M",
          menu: () => [
            { label: "Users", action: () => s("users") },
            { label: "Audit Log", action: () => s("audit") },
            ...(B1()
              ? [
                  { label: "Review Queue", action: () => s("review") },
                  { label: "Broadcast", action: () => s("broadcast") },
                ]
              : []),
            {},
            { label: "Tile Inspector", action: () => N1() },
            { label: "Wipe Canvas Selection", action: () => p8() },
            {},
            {
              label: `[${x.a11y.hideOwnCursor ? "ON" : "OFF"}] Hide Own Cursor`,
              action() {
                ((x.a11y.hideOwnCursor = !x.a11y.hideOwnCursor), T0());
              },
            },
          ],
        },
      ]
    : []),
];
var a3 = G(
  "div.hotbar.login-bar",
  G(
    "p",
    G("a.link", "Log in", {
      tabIndex: 1,
      onclick() {
        o$();
      },
    }),
    " to draw & chat with ",
    G("b#online-player-counter", "[...]"),
    "+ players!",
  ),
);
function s3($ = !1) {
  let Q = new URL(location.toString()),
    J = new URLSearchParams(location.search);
  if (J.size)
    if (((Q.search = ""), $)) window.history.replaceState(null, "", Q.toString());
    else window.history.pushState(null, "", Q.toString());
  return J;
}
var wK = "G-XXXXXXXXXX",
  r3 = !1;
function i3() {
  let $ = J0.gaMeasurementId;
  if (r3 || !$ || $ === wK) return;
  let Q = location.hostname;
  if (Q === "localhost" || Q === "127.0.0.1") return;
  ((r3 = !0),
    document.head.append(
      G("script", {
        src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent($)}`,
        async: !0,
      }),
    ),
    (window.dataLayer = window.dataLayer || []),
    (window.gtag = function J() {
      window.dataLayer.push(arguments);
    }),
    window.gtag("js", new Date()),
    window.gtag("set", "allow_ad_personalization_signals", !1),
    window.gtag("config", $, { allow_google_signals: !1 }));
}
async function IK() {
  return await (
    await N.canvas.snapshot.bson.$get({ query: { at: Math.floor(Date.now() / 1000) } })
  ).arrayBuffer();
}
function e3() {
  if (J0.url?.ws) return;
  let $ = IK(),
    Q = new Image();
  ((Q.decoding = "async"),
    (Q.crossOrigin = "anonymous"),
    (Q.onload = async () => {
      (B$.clearRect(0, 0, $0.width, $0.height), B$.drawImage(Q, 0, 0));
      let J = W$.deserialize(new Uint8Array(await $));
      for (let Y of J.changes) D8(Y.pos, Y.color);
    }),
    (Q.src = N.canvas.snapshot.png
      .$url({ query: { at: Math.floor(Date.now() / J0.canvas.snapshotInterval) } })
      .toString()));
}
var $G = "";
function EK() {
  let $ = D.viewport.x2 - D.viewport.x,
    Q = D.viewport.y2 - D.viewport.y,
    J = Math.floor(D.viewport.x + $ / 2),
    Y = Math.floor(D.viewport.y + Q / 2),
    q = new URL(location.href);
  if (((q.hash = `${J},${Y}`), q.hash != $G)) (history.replaceState(null, "", q), ($G = q.hash));
}
function hK() {
  if (!location.hash) return;
  let [$, Q] = location.hash.slice(1).split(",").map(Number);
  if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q)) return;
  if ($ < 0 || Q < 0 || $ >= f || Q >= M0) return;
  V4($, Q);
}
function QG() {
  (hK(), setInterval(EK, 1000));
}
var JG = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ],
  f1 = 0;
document.addEventListener("keydown", async ($) => {
  if (x.flags.konamiCursor || !R.user) return;
  if ($.key == JG[f1]) {
    if ((f1++, f1 >= JG.length)) {
      f1 = 0;
      let Q = await y$({ code: "SUPER_SECRET_KONAMI_CODE" });
      if (Q) return Y0(Q);
      (new y("Code Activated", G("p", "Enjoy your free cursor!")),
        (x.flags.konamiCursor = !0),
        T0());
    }
  } else f1 = 0;
});
window.addEventListener("load", () => {
  ((window.redHerring = () => {
    location.href = "https://cdn.zptr.cc/f/iegttnyqutp4ldirr1detrwz/red-herring.png";
  }),
    console.log(
      `%c
 F I L I A N   I S   L O S T . 

`,
      "background:#000;color:#fff;font-size:5em;font-weight:bold",
    ));
});
i3();
O2();
async function mK() {
  let $ = s3(!0);
  if (
    (u$.append($8),
    j$.append(n$),
    document.body.append(T$, G("main", v4, z0, kQ)),
    O3(),
    e3(),
    x1(),
    QG(),
    await P7(),
    R.user)
  ) {
    if ((g4(t3()), k8(), q$.seed(R.user), R2(), !x.seenGuidebook)) setTimeout(u8, 1000);
    if (v0()) eY();
  } else if ((R.setTool(3), g4(n3), c6(a3), m$(), k8(), $.has("ssu"))) X7($.get("ssu"));
  let Q = $.has("wall") || sessionStorage.getItem("wall:view") === "wall";
  if ((g3(Q), $.has("debug"))) Q5();
}
var YG = () => mK().catch(($) => console.error("boot failed", $));
if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", YG);
else YG();
