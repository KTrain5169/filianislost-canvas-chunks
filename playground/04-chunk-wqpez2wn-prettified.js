var {
		defineProperty: gJ,
		getOwnPropertyNames: i3,
		getOwnPropertyDescriptor: e3
	} = Object,
	$2 = Object.prototype.hasOwnProperty;

var xJ = new WeakMap(),
	Q2 = ($) => {
		var Q = xJ.get($), J;

		if (Q) return Q;

		if ((
			Q = gJ({}, "__esModule", { value: !0 }),
			$ && typeof $ === "object" || typeof $ === "function"
		)) i3($).map((Y) => !$2.call(Q, Y) && gJ(Q, Y, { get: () => $[Y], enumerable: !(J = e3($, Y)) || J.enumerable }));

		return (xJ.set($, Q), Q);
	};

var J2 = ($, Q) => () => (($ && (Q = $($ = 0)), Q));
var F2 = {};
var UQ = "", CQ = "";

var dJ = J2(() => {
	(async function $() {
		let J = await (await fetch("/.last-bundle")).text(),
			[Y, Z] = J.split(",");

		if (UQ && UQ != Y) location.reload(); else if (CQ && CQ != Z) {
			let K = (await (await fetch("/")).text()).match(/href="(\.\/chunk-[a-z\d]+.css)"/)?.[1],
				W = document.querySelector("link[rel=stylesheet]");

			if (!K || !W) return (
				console.error("Couldn't reload stylesheet without reloading..."),
				location.reload()
			);

			W.href = `${K}?at=${Date.now()}`;
		}

		(UQ = Y, CQ = Z, setTimeout($, 1000));
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
		{ hex: "#161A1A", dark: !0, name: "Black" }
	],
	PQ = new Map();

for (let $ = 0; $ < X0.length; $++) {
	let Q = X0[$];

	(
		Q.idx = $,
		Q.color = parseInt(Q.hex.slice(1), 16),
		PQ.set(Q.color, $)
	);
}

var pJ = 30000, cJ = 15000;
var bJ = 1, C0 = 100;

var X8 = 60,
	g0 = 42,
	d = 6000,
	M0 = 4200,
	l$ = 25200000;

var f6 = 3615,
	VQ = 24,
	L0 = 1000,
	RQ = Math.floor(100),
	o8 = { SignUp: 2000, TimePassed: 1000, ReferralCode: 1000 };

var l6 = 4000, d6 = 80;

function u0($, ...Q) {
	return $.replace(/{(\d)+}/g, (J, Y) => Q[parseInt(Y)] || "[?]");
}

function j0($) {
	return new Intl.NumberFormat().format($);
}

function u6($) {
	let Q = ($ / l$ * 100).toFixed(2);

	return `${j0($)} (${Q}%)`;
}

function zQ($) {
	return new Intl.DateTimeFormat(["en"], { timeZone: "UTC", minute: "numeric", second: "2-digit" }).format($);
}

function Y2($) {
	return String.fromCodePoint(...$.toUpperCase().split("").map((Q) => 127397 + Q.charCodeAt(0)));
}

function o6($) {
	if ($.length != 2) return "-";

	try {
		let Q = new Intl.DisplayNames(["en"], { type: "region" }).of($);

		return `${Y2($)} ${Q || $}`;
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

var G2 = /\s|\/|[A-Z].*[A-Z]/,
	Z2 = /[A-Z]{2,}(?=[A-Z][a-z]|$)|[A-Z]?[a-z]+|[A-Z]+|\d+/g;

function q2($) {
	let Q = $.trim();

	if (Q.length <= 8 && !G2.test(Q)) return Q;

	let J = Q.replace(/'s\b/gi, "").match(Z2) || [];

	if (J.length === 1) {
		let Y = J[0], Z = (/^[A-Z]+$/).test(Y) ? 6 : 8;

		return Y.length <= Z ? Y : Y[0];
	}

	return J.map((Y) => (/^\d+$/).test(Y) ? Y : Y[0]).join("");
}

function H8($) {
	return `[${q2($).slice(0, 6)}]`;
}

var MQ = ($) => Math.floor($ * 10) / 10;

function n6($) {
	if ($ == null) return "never";

	let Q = $ - Date.now(),
		J = new Intl.RelativeTimeFormat(["en"], { numeric: "auto" }),
		Y = 60000,
		Z = 60 * Y,
		q = 24 * Z;

	if (Q < Z) return J.format(MQ(Q / Y), "minute"); else if (Q < q) return J.format(MQ(Q / Z), "hour");

	return J.format(MQ(Q / q), "day");
}

var n8 = (navigator.userAgentData?.platform ?? navigator.platform).toLowerCase().includes("mac"),
	kQ = n8 ? "⌘" : "Ctrl";

function P8() {
	if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
}

function K2($, Q, J) {
	let Y = Math.random() * Math.PI * 2,
		Z = J * Math.sqrt(Math.random()),
		q = J < 5 ? 2 : 1,
		K = (Math.random() - 0.5) * q,
		W = (Math.random() - 0.5) * q;

	return [
		Math.floor($ + Z * Math.cos(Y) + K),
		Math.floor(Q + Z * Math.sin(Y) + W)
	];
}

function fJ($, Q, J, Y) {
	let Z = [];

	if (J < 2) J = 2;

	for (let q = 0; q < Y; q++) {
		let K = K2($, Q, J);

		if (Z.some((W) => K[0] == W[0] && K[1] == W[1])) {
			q--;

			continue;
		}

		Z.push(K);
	}

	return Z;
}

function lJ($, Q, J, Y) {
	if ($ == -1) return { steps: 0, points: [] };

	let Z = J - $,
		q = Y - Q,
		K = Math.max(Math.abs(Z), Math.abs(q)),
		W = [];

	for (let F = 0; F < K; F++) W.push([Math.floor($ + Z / K * F), Math.floor(Q + q / K * F)]);

	return { steps: K, points: W };
}

var f = ($, Q) => (Q ?? document).querySelector($),
	o0 = ($, Q) => (Q ?? document).querySelectorAll($),
	t6 = ($) => new Promise((Q) => setTimeout(Q, $)),
	uJ = ($, Q) => {
		for (let J in $) {
			let Y = $[J];

			if (typeof Y == "object" && !Array.isArray(Y) && J in Q) uJ(Y, Q[J]); else if (J.startsWith("data-") && Q.setAttribute) Q.setAttribute(J, Y); else if (J.startsWith("--") && Q.setProperty) Q.setProperty(J, Y); else if (J == "className" && Q.classList) Q.classList.add(Y); else Q[J] = Y;
		}
	};

function G($, ...Q) {
	let J = $.split(/[.#]/)[0],
		Y = $.match(/#[^.#]+/)?.[0],
		Z = $.match(/\.[^.#]+/g),
		q = document.createElement(J);

	if (Y) q.id = Y.slice(1);
	if (Z) q.className = Z.map((K) => K.slice(1)).join(" ");

	for (let K of Q.flat(1 / 0)) {
		if (!K) continue;
		if (K instanceof HTMLElement || typeof K == "string") q.append(K); else if (typeof K == "number") q.append(String(K)); else if (typeof K == "object") uJ(K, q);
	}

	return q;
}

var P$ = !1;

if (P$) dJ();

var d$ = G("div.box.paint-bar.tooltip"),
	oJ = G("span.spray-can-count", "+0"),
	nJ = G("span.spray-can-extra", "cans"),
	tJ = G("button.btn.swatch.tooltip.paint-extra-count", oJ, nJ, {
		tabIndex: -1,
		onclick: P8,
		dataset: { tooltip: "Additional Spray Cans" }
	});

function aJ($) {
	let Q = Math.floor($ / L0),
		J = $ % L0,
		Y = J / L0 * 100;

	(
		d$.style.setProperty("--paint-remaining", `${Y}%`),
		d$.dataset.tooltip = `Paint Remaining: ${Math.round(Y)}% (${j0(J)}px)`,
		W2(Q)
	);
}

function sJ($, Q = !1) {
	(
		d$.style.setProperty("--color", $),
		d$.style.setProperty("--color-2", `${$}7F`),
		d$.classList.toggle("dark", Q)
	);
}

function W2($) {
	(oJ.textContent = `+${$}`, nJ.textContent = `can${A0($)}`);
}

var Z0 = null,
	a6 = "",
	t8 = G("button.btn", "Close", { onclick: p }),
	V$ = G("div.btn-container", t8);

function p($ = !1) {
	if (!Z0) return;
	if (!Z0.close($)) return;

	Z0 = null;
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

		if (Z0) p(!0);

		(
			this.titleElement.append(G("span", $), $$("close", { ariaLabel: "Close Modal", onclick: () => this.close() })),
			this.bg.append(this.container),
			this.container.append(this.titleElement, Q),
			Q.classList.add("modal-content"),
			f("main").inert = !0,
			document.body.append(this.bg),
			document.body.style.overflow = "hidden",
			a6 = $,
			Z0 = this,
			this.open = !0
		);
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
			Z0 = null,
			a6 = "",
			document.body.style.overflow = "",
			f("main").inert = !1,
			!0
		);
	}
}

document.addEventListener("keydown", ($) => {
	if ($.key == "Escape" && Z0) p();
});

var x = {
	version: 1,
	lastUsedColors: [],
	lastBrushSize: 10,
	seenGuidebook: !1,
	camera: { x: 0, y: 0, zoom: 0 },
	a11y: {},
	flags: {}
};

function X2($) {
	(
		console.warn(`Outdated settings (current: ${$.version}, latest: ${x.version}), updating`),
		$.version = x.version
	);
}

function j2() {
	try {
		let $ = localStorage.getItem("wall:settings");

		if ($) return JSON.parse($);
	} catch($) {
		localStorage.removeItem("wall:settings");
	}
}

function H2() {
	let $ = j2();

	if (!$) {
		a8();

		return;
	}

	if (x.version != $.version) X2($);

	for (let Q in $) x[Q] = $[Q];

	a8();
}

function a8() {
	(
		localStorage.setItem("wall:settings", JSON.stringify(x)),
		LQ = !1
	);
}

var LQ = !1;

function T0() {
	LQ = !0;
}

setInterval(
	() => {
		if (LQ) a8();
	},
	1000
);

document.addEventListener("blur", a8);
window.addEventListener("beforeunload", a8);
H2();

var rJ = G("img", {
		src: Q$(0),
		alt: "⬉",
		onerror($) {
			(console.error("Error loading custom cursor", $), s8());
		}
	}),
	DQ = G("div.chat-bubble", G("span", "You")),
	T$ = G("div.cursor.own-cursor", rJ, { style: { opacity: "0" } });

function Q$($) {
	return `/static/cursors/generated/${$ || 0}.png`;
}

var r6 = !1, i6 = !1;

function iJ() {
	if (r6) return;

	(T$.style.opacity = "1", r6 = !0);
}

function P2() {
	if (!r6) return;

	(T$.style.opacity = "0", r6 = !1);
}

function s8() {
	if (i6) return;

	(
		T$.remove(),
		document.head.append(G("style.system-cursor", "* { cursor: unset !important }")),
		i6 = !0
	);
}

function e6() {
	if (!i6) return;
	if (x.a11y.systemCursor) return;

	document.body.prepend(T$);

	let $ = f("style.system-cursor");

	if ($) $.remove();

	i6 = !1;
}

function $1($, Q) {
	(T$.style.transform = `translate3d(${$}px, ${Q}px, 0)`, iJ());
}

document.addEventListener("pointermove", ($) => $1($.x, $.y));

function eJ($) {
	let Q = $.touches[0];

	if (!Q) return;

	$1(Q.clientX + 16, Q.clientY + 16);
}

document.addEventListener("touchstart", eJ);
document.addEventListener("touchmove", eJ);
document.addEventListener("mouseout", ($) => $.relatedTarget || P2());
document.addEventListener("mouseover", iJ);

function V8($) {
	rJ.src = Q$($);
}

var s6 = 0;

function $4($) {
	if (x.a11y.hideChatBubbles) return;

	let Q = G("p", $);

	if ((
		s6++,
		DQ.append(Q),
		setTimeout(
			() => {
				if ((Q.remove(), s6--, s6 == 0)) DQ.remove();
			},
			2000
		),
		s6 == 1
	)) T$.append(DQ);
}

var J0 = {
	url: {
		api: "https://filianislost.com",
		web: "https://filianislost.com",
		share: "https://filianislost.com/share",
		ws: "wss://ws.filianislost.com",
		tileBase: "https://ws.filianislost.com",
		signalArchive: "https://signal.filianislost.com"
	},
	gaMeasurementId: "G-H0TFGRQHK7",
	canvas: {
		snapshotInterval: 30000,
		drawBufferInterval: 500,
		syncInterval: 100
	}
};

var R2 = /^[\w!#$%&'*.^`|~+-]+$/;

var M2 = ($, Q, J = {}) => {
		if (!R2.test($)) throw new Error("Invalid cookie name");

		let Y = `${$}=${Q}`;

		if ($.startsWith("__Secure-") && !J.secure) throw new Error("__Secure- Cookie must have Secure attributes");

		if ($.startsWith("__Host-")) {
			if (!J.secure) throw new Error("__Host- Cookie must have Secure attributes");
			if (J.path !== "/") throw new Error('__Host- Cookie must have Path attributes with "/"');
			if (J.domain) throw new Error("__Host- Cookie must not have Domain attributes");
		}

		for (let Z of ["domain", "path"]) if (J[Z] && (/[;\r\n]/).test(J[Z])) throw new Error(`${Z} must not contain ";", "\\r", or "\\n"`);

		if (J && typeof J.maxAge === "number" && J.maxAge >= 0) {
			if (J.maxAge > 34560000) throw new Error("Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration.");

			Y += `; Max-Age=${J.maxAge | 0}`;
		}

		if (J.domain && J.prefix !== "host") Y += `; Domain=${J.domain}`;
		if (J.path) Y += `; Path=${J.path}`;

		if (J.expires) {
			if (J.expires.getTime() - Date.now() > 34560000000) throw new Error("Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.");

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
	Q4 = ($, Q, J) => {
		return (Q = encodeURIComponent(Q), M2($, Q, J));
	};

var J4 = ($, Q) => {
		return (
			$ = $.replace(/\/+$/, ""),
			$ = $ + "/",
			Q = Q.replace(/^\/+/, ""),
			$ + Q
		);
	},
	J1 = ($, Q) => {
		for (let [J, Y] of Object.entries(Q)) {
			let Z = new RegExp("/:" + J + "(?:{[^/]+})?\\??");

			$ = $.replace(Z, Y ? `/${Y}` : "");
		}

		return $;
	},
	Y4 = ($) => {
		let Q = new URLSearchParams();

		for (let [J, Y] of Object.entries($)) {
			if (Y === void 0) continue;
			if (Array.isArray(Y)) for (let Z of Y) Q.append(J, Z); else Q.set(J, Y);
		}

		return Q;
	},
	G4 = ($, Q) => {
		switch (Q) {
			case "ws":
				return $.replace(/^http/, "ws");

			case "http":
				return $.replace(/^ws/, "http");
		}
	},
	AQ = ($) => {
		if ((/^https?:\/\/[^\/]+?\/index(?=\?|$)/).test($)) return $.replace(/\/index(?=\?|$)/, "/");

		return $.replace(/\/index(?=\?|$)/, "");
	};

function Q1($) {
	return typeof $ === "object" && $ !== null && !Array.isArray($);
}

function TQ($, Q) {
	if (!Q1($) && !Q1(Q)) return Q;

	let J = { ...$ };

	for (let Y in Q) {
		let Z = Q[Y];

		if (Q1(J[Y]) && Q1(Z)) J[Y] = TQ(J[Y], Z); else J[Y] = Z;
	}

	return J;
}

var Z4 = ($, Q) => {
		return new Proxy(() => {}, {
			get(Y, Z) {
				if (typeof Z !== "string" || Z === "then") return;

				return Z4($, [...Q, Z]);
			},

			apply(Y, Z, q) {
				return $({ path: Q, args: q });
			}
		});
	},
	k2 = class {
		url;
		method;
		buildSearchParams;
		queryParams = void 0;
		pathParams = {};
		rBody;
		cType = void 0;

		constructor($, Q, J) {
			(
				this.url = $,
				this.method = Q,
				this.buildSearchParams = J.buildSearchParams
			);
		}

		fetch = async ($, Q) => {
			if ($) {
				if ($.query) this.queryParams = this.buildSearchParams($.query);

				if ($.form) {
					let W = new FormData();

					for (let [F, H] of Object.entries($.form)) {
						if (H === void 0) continue;
						if (Array.isArray(H)) for (let X of H) W.append(F, X); else W.append(F, H);
					}

					this.rBody = W;
				}

				if ($.json) (
					this.rBody = JSON.stringify($.json),
					this.cType = "application/json"
				);

				if ($.param) this.pathParams = $.param;
			}

			let J = this.method.toUpperCase(),
				Y = {
					...$?.header,
					...typeof Q?.headers === "function" ? await Q.headers() : Q?.headers
				};

			if ($?.cookie) {
				let W = [];

				for (let [F, H] of Object.entries($.cookie)) W.push(Q4(F, H, { path: "/" }));

				Y.Cookie = W.join(",");
			}

			if (this.cType) Y["Content-Type"] = this.cType;

			let Z = new Headers(Y ?? void 0), q = this.url;

			if ((q = AQ(q), q = J1(q, this.pathParams), this.queryParams)) q = q + "?" + this.queryParams.toString();

			J = this.method.toUpperCase();

			let K = !(J === "GET" || J === "HEAD");

			return (Q?.fetch || fetch)(q, {
				body: K ? this.rBody : void 0,
				method: J,
				headers: Z,
				...Q?.init
			});
		};
	},
	wQ = ($, Q) => Z4(
		function J(Y) {
			let Z = Q?.buildSearchParams ?? Y4,
				q = [...Y.path],
				K = q.slice(-3).reverse();

			if (K[0] === "toString") {
				if (K[1] === "name") return K[2] || "";

				return J.toString();
			}

			if (K[0] === "valueOf") {
				if (K[1] === "name") return K[2] || "";

				return J;
			}

			let W = "";

			if ((/^\$/).test(K[0])) {
				let j = q.pop();

				if (j) W = j.replace(/^\$/, "");
			}

			let F = q.join("/"), H = J4($, F);

			if (W === "url" || W === "path") {
				let j = H;

				if (Y.args[0]) {
					if (Y.args[0].param) j = J1(H, Y.args[0].param);
					if (Y.args[0].query) j = j + "?" + Z(Y.args[0].query).toString();
				}

				if ((j = AQ(j), W === "url")) return new URL(j);

				return j.slice($.replace(/\/+$/, "").length).replace(/^\/?/, "/");
			}

			if (W === "ws") {
				let j = G4(Y.args[0] && Y.args[0].param ? J1(H, Y.args[0].param) : H, "ws"),
					P = new URL(j),
					C = Y.args[0]?.query;

				if (C) Object.entries(C).forEach(([A, v]) => {
					if (Array.isArray(v)) v.forEach((S) => P.searchParams.append(A, S)); else P.searchParams.set(A, v);
				});

				return ((...A) => {
					if (Q?.webSocket !== void 0 && typeof Q.webSocket === "function") return Q.webSocket(...A);

					return new WebSocket(...A);
				})(P.toString());
			}

			let X = new k2(H, W, { buildSearchParams: Z });

			if (W) {
				Q ??= {};

				let j = TQ(Q, { ...Y.args[1] });

				return X.fetch(Y.args[0], j);
			}

			return X;
		},
		[]
	);

var r8 = { "Content-Type": "application/json" },
	N = wQ(J0.url.api, { init: { credentials: "same-origin", headers: r8 } }),
	w$ = () => localStorage.getItem("auth-token");

var J$;

((q) => {
	q[q.None = 0] = "None";
	q[q.Spray = 1] = "Spray";
	q[q.Chat = 2] = "Chat";
	q[q.Login = 3] = "Login";
	q[q.Share = 4] = "Share";
})(J$ ||= {});

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

		(
			this.activeTool = $,
			document.documentElement.dataset.tool = Q.toLowerCase()
		);
	},

	setUser($) {
		(this.user = $, V8($.cursor_id || 0));
	},

	addLocalPaintIncrement($) {
		(
			this.localPaintIncrement += $,
			this.setPaintRemaining(this.paintRemaining)
		);
	},

	commitLocalPaint() {
		let $ = Math.max(0, this.paintRemaining + this.localPaintIncrement);

		(this.localPaintIncrement = 0, this.setPaintRemaining($));
	},

	setPaintRemaining($) {
		this.paintRemaining = $;

		let Q = Math.max($ + this.localPaintIncrement - 1, 0);

		if ((aJ(Q), Q && a6 == "Out of paint?")) p();
	},

	sprayCanCount() {
		return Math.ceil(this.paintRemaining / L0);
	},

	currentSprayCanSize() {
		let $ = this.paintRemaining % L0;

		return $ == 0 && this.paintRemaining >= L0 ? L0 : $;
	}
};

if (P$) window.player = R;

async function EQ($) {
	let Q = await N.user.settings.$post({ json: $ });

	if (Q.status != 200) return await Q.text();

	R.setUser(await Q.json());
}

async function i8($) {
	let Q = await EQ($);

	if (typeof Q == "string") alert(`Could not update user settings: ${Q}`);
}

function q0() {
	if (Z0) {
		(
			Z0.container.inert = !0,
			Z0.content.style.opacity = "0.3",
			Z0.lockLevel++
		);

		return;
	}

	new y("Loading...", G("div.loading-modal", "Loading...")).onClose(() => !1);
}

function e8() {
	if (!Z0?.lockLevel) return;
	if ((Z0.lockLevel--, !Z0.lockLevel)) (Z0.container.inert = !1, Z0.content.style.opacity = "");
}

function i($, Q = "Confirmation", J = "Yes", Y = "No") {
	return new Promise((Z) => {
		let q = !1,
			K = (H) => {
				if (q) return;

				(
					q = !0,
					document.removeEventListener("keydown", W, !0),
					F.remove(),
					Z(H)
				);
			},
			W = (H) => {
				if (H.key == "Escape") (H.stopPropagation(), K(!1)); else if (H.key == "Enter") (H.stopPropagation(), K(!0));
			},
			F = G("div.modal-bg.confirm-bg", G("div.modal-container", G("div.modal-title", G("span", Q), $$("close", { ariaLabel: "Close", onclick: () => K(!1) })), G("div.modal-content", G("div.modal", G("p", $), G("div.btn-container", G("button.btn", J, { onclick: () => K(!0) }), G("button.btn", Y, { onclick: () => K(!1) }))))));

		(
			F.addEventListener("click", (H) => {
				if (H.target == F) K(!1);
			}),
			document.addEventListener("keydown", W, !0),
			document.body.append(F)
		);
	});
}

function Y0($, Q) {
	new y("Error", G("div.modal.error-modal", G("p.error", $), Q && G("div.details", Q), V$));
}

async function m0($, Q) {
	if ($.status == 429) {
		let J = $.headers.get("retry-after");

		Y0(
			`Not so fast! Please try again ${J
				? `in ${A0(Math.round(parseInt(J) / 60), "minute")}`
				: "a bit later"}`,
			Q
		);
	} else if ($.status == 500) Y0("Something went wrong on our side, sorry!!!", Q); else {
		let J = $.headers.get("content-type");

		if (J && J.includes("text/plain")) Y0(await $.text(), Q); else Y0(`Something went wrong... (${$.status} ${$.statusText})`, Q);
	}
}

function q4($, Q, J, Y, Z = !1) {
	return G(
		"div.server.box",
		G("img", {
			src: `https://cdn.discordapp.com/icons/${$}/${Q}.webp?size=128&quality=lossless`,
			draggable: !1
		}),
		G("div.info", G("b", J), G("p", G("span", j0(Y)), " members")),
		Z && G("div.btns", G("button.btn.primary", "Select", {
			async onclick() {
				(q0(), await i8({ clanDiscordId: $ }), $6());
			}
		}))
	);
}

function Y1($, Q = !1) {
	return G("div.clan-with-stats", q4($.discord_id, $.icon, $.name, $.stat_member_count, !1), G("div.stats", G("p", G("b", u6($.stat_paint_visible)), " paint visible"), G("p", G("b", j0($.stat_pixels_changed)), " pixels changed"), G("p", G("b", j0($.approx_discord_members || 0)), " discord members"), Q && G("p", "Discord ID: ", G("b", $.discord_id))));
}

async function K4() {
	q0();

	let $ = await N.user.discordGuilds.$get();

	if (!$.ok) return Y0("Error loading the Discord Server list", "Make sure you're authenticated via Discord, and allowed us to access your Discord server list!");

	let Q = await $.json();

	new y("Change Clan", G("div.clans-modal", G("p", G("a.link", "Go Back", { onclick: $6 }), { style: { marginBottom: "8px" } }), G("div.list", Q.sort((J, Y) => Y.approximate_member_count - J.approximate_member_count).map((J) => q4(J.id, J.icon, J.name, J.approximate_member_count, !0)), G("button.btn", "Refresh List"))));
}

function U2() {
	new y("User > Clan", G("div.clans-modal.no-clan", G("p", "You do not have a clan."), G("p.notice.noicon", "Clans appear next to your name at all times! ", "They're a fun way to represent your favorite streamer, content creator, friend group or any other community!"), "Join a clan to show where you belong, meet other members, climb the leaderboard together, and stand out across the platform.", G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Select Clan", { onclick: K4 }))));
}

async function $6() {
	if (!R.user?.discord_id) return Y0("Sorry, clans are for Discord users only!", `Clans work using Discord servers, so you cannot join any clans if you don't have a Discord account connected.

You can authenticate into your current account if your Discord account has the same E-Mail as your Google account.`);

	if (!R.user.clan) return U2();

	new y("User > Clan", G("div.clans-modal.current", G("p", "Current Clan"), Y1(R.user.clan), G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Change Clan", { onclick: K4 }), G("button.btn", "Leave Clan", {
		async onclick() {
			if (!await i("Are you sure you want to leave your current clan?")) return;

			(q0(), await i8({ clanDiscordId: "0" }), $6());
		}
	}))));
}

async function F4($) {
	if (!$.clan_id) return;

	q0();

	let J = await (await N.user.clan[":id"].$get({ param: { id: $.clan_id.toString() } })).json();

	new y("Clan Info", G("div.clans-modal", G("p", G("b", $.username), "'s clan"), Y1(J)));
}

function W4($) {
	let Q = G("textarea", {
		value: $,
		style: {
			position: "fixed",
			top: "0",
			left: "0",
			width: "0",
			height: "0",
			opacity: "0"
		}
	});

	(
		document.body.append(Q),
		Q.focus(),
		Q.select(),
		Q.setSelectionRange(0, $.length)
	);

	try {
		document.execCommand("copy");
	} finally {
		Q.remove();
	}
}

function IQ($) {
	if (!navigator.clipboard) return W4($);

	navigator.clipboard.writeText($).catch((Q) => {
		(console.error(Q), W4($));
	});
}

var $$ = ($, Q) => G("button.btn.icon", Q, G("img", {
		src: `/static/icon/${$}.png`,
		alt: `${$} icon`,
		style: { pointerEvents: "none" },
		draggable: !1
	})),
	G1 = ($) => $.split(/(\[.\])/).map((Q, J) => J % 2 ? G("u", Q.slice(1, -1)) : Q),
	hQ = ($, Q, J, Y, Z) => G(
		"button.btn.branding",
		Z,
		{ ariaLabel: Q, style: { backgroundColor: J, color: Y } },
		G("img", {
			alt: `${$} icon`,
			src: `/static/icon/platform/${$}.png`,
			draggable: !1
		}),
		G("span", Q)
	),
	Z1 = ($, Q) => G(
		"button.btn.swatch.icon",
		G("img", {
			alt: `${$} icon`,
			src: `/static/icon/${$}.png`,
			draggable: !1
		}),
		Q
	),
	q1 = ($, Q) => {
		return ($.dataset.tooltip = Q, $.classList.add("tooltip"), $);
	};

function X4($, Q, J, Y) {
	if (!Q) return G($, J);

	let Z = H8(Q), q = G("b.clan-label", Z);

	return G($, q, J, {
		onclick() {
			if (!Y) return;

			F4(Y);
		},

		onmouseover() {
			q.textContent = `[${Q.slice(0, 32)}]`;
		},

		onmouseleave() {
			q.textContent = Z;
		}
	});
}

var j4 = ($, Q = 2) => {
	let J = 10 ** Q, Y = Math.floor($ % 1 * J);

	return [
		G("span", Math.floor($).toString()),
		Y >= 0 && G("span", { style: { fontSize: "0.6em" } }, `.${Y}`.replace(/0+$/, ""))
	];
};

var mQ = !1,
	Y$ = { options: [] },
	NQ = () => !!Y$.element;

function E$() {
	if (!Y$.element || mQ) return;

	(
		Y$.options = [],
		Y$.element.remove(),
		Y$.element = void 0,
		o0(".ctx").forEach(($) => $.remove())
	);
}

function H4($, Q, J) {
	E$();

	let Y = G("div.ctx");

	(Y$.element = Y, Y$.options = []);

	for (let W of $) {
		if (!W.label) {
			Y.append(G("hr"));

			continue;
		}

		let F = G("div.option", G("span", G1(W.label)), W.keybindText && G("span", W.keybindText), {
			ariaLabel: W.label.replace(/[\[\]]/g, ""),
			onclick(H) {
				if ((E$(), W.action)) W.action(H);
			}
		});

		(Y.append(F), Y$.options.push({ ...W, _element: F }));
	}

	document.body.append(Y);

	let Z = Y.getBoundingClientRect(),
		q = Q + Z.width > window.innerWidth ? window.innerWidth - Z.width : Q,
		K = J + Z.height > window.innerHeight ? window.innerHeight - Z.height : J;

	(
		Y.style.left = `${q}px`,
		Y.style.top = `${K}px`,
		Y$.x = q,
		Y$.y = K,
		mQ = !0,
		setTimeout(() => mQ = !1)
	);
}

window.addEventListener("click", E$);
window.addEventListener("resize", E$);
window.addEventListener("blur", E$);

window.addEventListener("contextmenu", ($) => {
	($.preventDefault(), E$());
});

var K1 = null;

function I$($) {
	(
		Q6(),
		K1 = G(
			"div.mod-return",
			G("button.btn.mod-return-go", `↩ Resume: ${$.label}`, {
				onclick() {
					(Q6(), $.reopen());
				}
			}),
			G("button.btn.mod-return-x", "✕", { ariaLabel: "Dismiss", onclick: () => Q6() })
		),
		document.body.append(K1)
	);
}

function Q6() {
	(K1?.remove(), K1 = null);
}

function P4($, Q = 25, J = 0) {
	return N.mod.users.$get({ query: { q: $, limit: String(Q), offset: String(J) } });
}

function V4($) {
	return N.mod.users[":id"].$get({ param: { id: String($) } });
}

function R4($) {
	return N.mod.users[":id"].sessions.$get({ param: { id: String($) } });
}

function M4($, Q, J) {
	return N.mod.users[":id"].ban.$post({
		param: { id: String($) },
		json: {
			...Q ? { reason: Q } : {},
			...J ? { duration_seconds: J } : {}
		}
	});
}

function OQ($) {
	return N.mod.users[":id"].unban.$post({ param: { id: String($) } });
}

function z4($, Q, J) {
	return N.mod.users[":id"].mute.$post({
		param: { id: String($) },
		json: {
			...Q ? { reason: Q } : {},
			...J ? { duration_seconds: J } : {}
		}
	});
}

function BQ($) {
	return N.mod.users[":id"].unmute.$post({ param: { id: String($) } });
}

function SQ($, Q) {
	return N.mod.users[":id"]["leaderboard-exclusion"].$post({ param: { id: String($) }, json: { excluded: Q } });
}

function k4($) {
	return N.mod.users[":id"]["delete-strokes"].$post({ param: { id: String($) } });
}

function U4($, Q = 0) {
	return N.mod.users[":id"]["owned-pixels"].$get({ param: { id: String($) }, query: { offset: String(Q) } });
}

function C4($, Q) {
	return N.mod.users[":id"]["delete-selected-strokes"].$post({ param: { id: String($) }, json: { positions: Q } });
}

function L4($, Q) {
	return N.mod.users[":id"]["give-paint"].$post({ param: { id: String($) }, json: { amount: Q } });
}

function D4($, Q) {
	return N.mod.users[":id"]["reset-balance"].$post({ param: { id: String($) }, query: { type: Q } });
}

function A4($, Q) {
	return N.mod.users[":id"]["give-cursor"].$post({ param: { id: String($) }, json: { cursorId: Q } });
}

function T4($, Q, J) {
	return N.mod.users[":id"].message.$post({
		param: { id: String($) },
		json: { body: Q, ...J ? { title: J } : {} }
	});
}

function w4($, Q, J = !0) {
	return N.mod.broadcast.$post({ json: { body: $, ...Q ? { title: Q } : {}, createRow: J } });
}

function _Q($, Q) {
	return N.mod.users[":id"].role.$post({ param: { id: String($) }, json: { role: Q } });
}

function E4($ = {}) {
	return N.mod["review-queue"].$get({
		query: {
			...$.status ? { status: $.status } : {},
			...$.kind ? { kind: $.kind } : {},
			...$.cursor ? { cursor: $.cursor } : {},
			...$.limit ? { limit: String($.limit) } : {}
		}
	});
}

function I4($, Q, J) {
	return N.mod["review-queue"][":id"].resolve.$post({
		param: { id: String($) },
		json: { action: Q, ...J ? { notes: J } : {} }
	});
}

function h4($, Q) {
	return N.mod.feedback.$get({ query: { kind: $, offset: Q.toString() } });
}

function m4($, Q, J) {
	return N.mod.feedback.resolve.$post({ json: { id: $, action: Q, reply: J } });
}

function N4() {
	return N.mod.feedback.counts.$get();
}

function O4($) {
	return N.mod.referrals.$get({ query: { offset: $.toString() } });
}

function B4($) {
	return N.mod.referredBy[":uid"].$get({ param: { uid: $.toString() } });
}

function yQ($, Q) {
	return N.mod.referrals[":code"].$post({ param: { code: $ }, query: { action: Q } });
}

function S4($) {
	return N.mod.clans[":id"].members.$get({ param: { id: $.toString() } });
}

function _4($) {
	return N.mod["wipe-canvas"].$post({ json: $ });
}

function F1($) {
	return N.mod["restore-pixels"].$post({ json: { token: $ } });
}

function y4($) {
	return N.mod.tile[":pos"].$get({ param: { pos: String($) } });
}

function v4($, Q, J, Y) {
	return N.mod.region.$get({
		query: { x: String($), y: String(Q), w: String(J), h: String(Y) }
	});
}

function g4($) {
	return N.mod.owners.$post({ json: { positions: $ } });
}

function x4($, Q = {}) {
	return N.mod.users[":id"]["paint-history"].$get({
		param: { id: String($) },
		query: {
			...Q.before ? { before: Q.before } : {},
			...Q.limit ? { limit: String(Q.limit) } : {}
		}
	});
}

function p4($, Q) {
	return N.mod.users[":id"]["paint-history"][":entryId"].$get({ param: { id: String($), entryId: String(Q) } });
}

function c4($, Q = {}) {
	return N.mod.users[":id"]["chat-history"].$get({
		param: { id: String($) },
		query: {
			...Q.before ? { before: Q.before } : {},
			...Q.limit ? { limit: String(Q.limit) } : {}
		}
	});
}

function b4($ = {}) {
	return N.mod.audit.$get({
		query: {
			...$.action ? { action: $.action } : {},
			...$.mod_id ? { mod_id: String($.mod_id) } : {},
			...$.target_id ? { target_id: String($.target_id) } : {},
			...$.search ? { search: $.search } : {},
			...$.order ? { order: $.order } : {},
			...$.before ? { before: $.before } : {},
			...$.limit ? { limit: String($.limit) } : {}
		}
	});
}

function f4() {
	return N.mod["bot-sensitivity"].$get();
}

function l4($) {
	return N.mod["bot-sensitivity"].$post({ json: { sensitivity: $ } });
}

function d4() {
	return N.mod["chat-cooldown"].$get();
}

function u4($) {
	return N.mod["chat-cooldown"].$post({ query: { cooldown: $.toString() } });
}

function o4($) {
	return N.mod["bot-samples"][":userId"].$get({ param: { userId: String($) } });
}

var R8 = null;

function C2() {
	if (R8 && R8.isConnected) return R8;

	return (R8 = G("div.toast-container"), document.body.append(R8), R8);
}

function h$($, Q = 3200) {
	let J = C2(), Y = G("div.toast", G("span", $));

	(
		J.prepend(Y),
		requestAnimationFrame(() => Y.classList.add("toast-show")),
		setTimeout(
			() => {
				(
					Y.classList.remove("toast-show"),
					setTimeout(() => Y.remove(), 250)
				);
			},
			Q
		)
	);
}

function n4($) {
	if ($ === null || $ === void 0) return null;

	let Q = $ instanceof Date ? $ : new Date($);

	return Number.isNaN(Q.getTime()) ? null : Q;
}

function x0($) {
	let Q = n4($);

	if (!Q) return $ === null || $ === void 0 ? "-" : String($);

	return Q.toLocaleString();
}

var W1 = null;

function t4() {
	(W1?.remove(), W1 = null);
}

document.addEventListener("click", t4);

function w0($, Q) {
	let J = n4($);

	if (!J) return G("span", Q ?? x0($));

	let Y = J.toLocaleString(),
		Z = J.toUTCString(),
		q = G("time.ts-local.tooltip", {
			textContent: Q ?? Y,
			datetime: J.toISOString(),
			dataset: { tooltip: `UTC: ${Z}` },
			onclick(K) {
				if ((K.stopPropagation(), W1)) {
					t4();

					return;
				}

				let W = G("div.ts-utc-pop", G("div.ts-utc-row", G("span.ts-utc-k", "Local"), Y), G("div.ts-utc-row", G("span.ts-utc-k", "UTC"), Z));

				document.body.append(W);

				let F = q.getBoundingClientRect(),
					H = W.getBoundingClientRect(),
					X = Math.min(F.left, window.innerWidth - H.width - 8),
					j = F.bottom + 4 + H.height > window.innerHeight ? F.top - H.height - 4 : F.bottom + 4;

				(
					W.style.left = `${Math.max(8, X)}px`,
					W.style.top = `${Math.max(8, j)}px`,
					W1 = W
				);
			}
		});

	return q;
}

var vQ = [
	{ label: "30 min", seconds: 1800 },
	{ label: "1 hour", seconds: 3600 },
	{ label: "6 hours", seconds: 21600 },
	{ label: "1 day", seconds: 86400 },
	{ label: "3 days", seconds: 259200 },
	{ label: "7 days", seconds: 604800 },
	{ label: "30 days", seconds: 2592000 },
	{ label: "Permanent", seconds: null }
];

function J6($) {
	return G("span.mod-role", { dataset: { role: $ } }, $);
}

function X1($, Q = 240) {
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
		return await $.text() || `HTTP ${$.status} ${$.statusText}`;
	} catch {
		return `HTTP ${$.status} ${$.statusText}`;
	}
}

function j1($) {
	let Q = G("button.btn.mod-undo", "Undo", {
		async onclick() {
			Q.disabled = !0;

			let J = await F1($);

			if (!J.ok) {
				(
					Q.disabled = !1,
					h$(J.status === 410 ? "The undo window has passed." : "Undo failed.")
				);

				return;
			}

			let Y = 0;

			try {
				Y = (await J.json()).restored ?? 0;
			} catch {}

			(h$(`Restored ${Y} pixel${Y === 1 ? "" : "s"}.`), p());
		}
	});

	return Q;
}

var gQ = 0,
	H1 = 1,
	P1 = 2,
	L2 = "#ff3b3b",
	D2 = "rgba(8,8,12,0.75)",
	G$ = null;

function A2() {
	if (G$) return G$;

	return (
		G$ = G("canvas.ghost-layer", { width: d, height: M0 }),
		u$.append(G$),
		G$
	);
}

function a4($, Q) {
	let J = A2(), Y = J.getContext("2d");

	(
		Y.clearRect(0, 0, J.width, J.height),
		Y.fillStyle = D2,
		Y.fillRect(0, 0, J.width, J.height)
	);

	for (let Z = 0; Z < $.length; Z++) {
		let { pos: q, color: K } = $[Z],
			W = q % d,
			F = q / d | 0;

		if (W < 0 || W >= d || F < 0 || F >= M0) continue;

		Y.clearRect(W, F, 1, 1);

		let H = Q[Z];

		if (H === P1) (Y.globalAlpha = 0.55, Y.fillStyle = L2); else (
			Y.globalAlpha = H === H1 ? 0.28 : 1,
			Y.fillStyle = X0[K]?.hex ?? "#ff00ff"
		);

		Y.fillRect(W, F, 1, 1);
	}

	(Y.globalAlpha = 1, J.style.display = "block");
}

function xQ() {
	if (!G$) return;

	(
		G$.getContext("2d").clearRect(0, 0, G$.width, G$.height),
		G$.style.display = "none"
	);
}

function Y6($) {
	if (!$.length) return null;

	let Q = 1 / 0, J = 1 / 0, Y = -1 / 0, Z = -1 / 0;

	for (let { pos: q } of $) {
		let K = q % d, W = q / d | 0;

		if (K < Q) Q = K;
		if (W < J) J = W;
		if (K > Y) Y = K;
		if (W > Z) Z = W;
	}

	return { x: Q, y: J, width: Y - Q + 1, height: Z - J + 1 };
}

var s4 = 5;

function V1($) {
	let Q = new DataView($.buffer, $.byteOffset, $.byteLength),
		J = $.byteLength / s4 | 0,
		Y = new Array(J);

	for (let Z = 0; Z < J; Z++) {
		let q = Z * s4;

		Y[Z] = { pos: Q.getUint32(q, !0), color: $[q + 4] };
	}

	return Y;
}

var T2 = 48;

function M8($, Q = T2) {
	let J = G("canvas.mod-ph-thumb", { width: Q, height: Q }),
		Y = J.getContext("2d"),
		Z = Y6($);

	if (!Z) return J;

	let q = Math.max(1, Math.floor(Math.min(Q / Z.width, Q / Z.height))),
		K = Math.floor((Q - Z.width * q) / 2),
		W = Math.floor((Q - Z.height * q) / 2);

	for (let { pos: F, color: H } of $) {
		let X = F % d, j = F / d | 0;

		(
			Y.fillStyle = X0[H]?.hex ?? "#ff00ff",
			Y.fillRect(K + (X - Z.x) * q, W + (j - Z.y) * q, q, q)
		);
	}

	return J;
}

var w2 = 360;

function r4($, Q = 0) {
	if (!$.length) return;

	let J = Math.max(0, Math.min(Q, $.length - 1)),
		Y = G("span"),
		Z = G("div.mod-carousel-stage"),
		q = G("div.mod-carousel-caption"),
		K = () => {
			let P = $[J];

			(
				Y.replaceChildren(`Flagged draws (${J + 1} / ${$.length})`),
				Z.replaceChildren(M8(P.pixels, w2)),
				q.replaceChildren(P.label)
			);
		},
		W = (P) => {
			(J = (J + P + $.length) % $.length, K());
		},
		F = () => {
			(document.removeEventListener("keydown", H, !0), j.remove());
		},
		H = (P) => {
			if (P.key === "Escape") (P.stopPropagation(), F()); else if (P.key === "ArrowLeft") (P.stopPropagation(), W(-1)); else if (P.key === "ArrowRight") (P.stopPropagation(), W(1));
		},
		X = $.length > 1,
		j = G("div.modal-bg.confirm-bg.mod-carousel-bg", G("div.modal-container", G("div.modal-title", Y, $$("close", { ariaLabel: "Close", onclick: F })), G(
			"div.modal-content",
			G(
				"div.mod-carousel",
				X
					? G("button.btn.mod-carousel-nav", "Prev", { onclick: () => W(-1) })
					: "",
				Z,
				X
					? G("button.btn.mod-carousel-nav", "Next", { onclick: () => W(1) })
					: ""
			),
			q
		)));

	(
		j.addEventListener("click", (P) => {
			if (P.target === j) F();
		}),
		document.addEventListener("keydown", H, !0),
		document.body.append(j),
		K()
	);
}

var i4 = !1;

function e4() {
	if (i4) return;

	i4 = !0;

	let $ = new y("Update required", G("div.version-mismatch", G("p", "The Wall was just updated and this tab is running an older version. Reload to keep going."), G("p.subtle", "Heads up: anything you've drawn but not submitted will be lost. If a reload doesn't fix it, clear your cache and reload again."), G("div.btn-container", G("button.btn", "Reload now", { onclick: () => location.reload() }))));

	$.lockLevel = 1;
}

var pQ = /^[a-z0-9_.-]{3,16}$/, E2 = /^[_.-]+$/;

function G6($) {
	if (!$) return "Missing username";
	if ($.length < 3) return "Must be at least 3 letters long";
	if ($.length > 16) return "Must not be longer than 16 letters";
	if (!pQ.test($)) return "Can only contain lowercase letters, digits, underscores, dashes and dots.";
	if (E2.test($)) return "This username is blacklisted.";
}

async function $Y($) {
	let Q = G6($);

	if (Q) throw new Error(Q);

	let J = await N.user.setup.$post({ json: { username: $ } });

	if (J.status != 200) {
		let Y = await J.text();

		throw new Error(Y);
	}

	(
		localStorage.setItem("auth-token", b0.token),
		location.reload()
	);
}

function R1() {
	let $ = G("p.warning"), Q = "", J = !1;

	new y("Setup", G(
		"div.welcome-modal",
		G("p.success", "Welcome to The Wall!"),
		G("p", "Please choose your username"),
		G("input.input.box", {
			type: "text",
			placeholder: "Username...",
			maxLength: 16,
			oninput(Y) {
				let Z = Y.target,
					q = Z.value.replace(/[^a-z0-9_.-]/g, "");

				if (Z.value != q) Z.value = q;

				Q = q;
			}
		}),
		G("div.checkbox", G("input#tos_checkbox", { type: "checkbox" }), G("label", { htmlFor: "tos_checkbox" }, G("span", "I've read and agree to the "), G("a.link", "Privacy Policy & ToS", { target: "_blank", href: "/privacy.html" }))),
		$,
		G("div.btn-container", G("button.btn", "Confirm", {
			async onclick() {
				if (J) return;

				if (!f("input#tos_checkbox")?.checked) {
					$.textContent = "You need to agree with our Privacy Policy/ToS!";

					return;
				}

				(q0(), $.textContent = "", J = !0);

				try {
					await $Y(Q);
				} catch(Y) {
					($.textContent = Y.message || "Something went wrong", J = !1);
				}

				e8();
			}
		}))
	)).onClose(() => {
		return !1;
	});
}

var k1 = G("p.warning"), z8 = "", U1 = !0, M1 = "";

function JY() {
	z8 = "";
}

async function YY() {
	if (!M1) {
		let J = await (await N.auth.turnstile.$get()).json();

		if ((M1 = J.sitekey || "none", !J.required || !J.sitekey)) U1 = !1;
	}

	if (!U1) return;

	let $ = window.turnstile;

	if (!$) return alert("error: Turnstile API didn't load, can't show captcha");

	$.render("#captcha-container", {
		sitekey: M1,
		theme: x.a11y.darkTheme ? "dark" : "light",
		size: "flexible",
		callback(Q) {
			(k1.textContent = "", z8 = Q);
		}
	});
}

function QY() {
	if ((k1.textContent = "", U1 && !z8)) return (
		M1 = "",
		U1 = !0,
		YY(),
		k1.textContent = "You need to complete the captcha!",
		!0
	);
}

function o$($) {
	(
		new y("Log In", G(
			"div.login-modal",
			$,
			G("p", "Choose your login method"),
			G("div#captcha-container", { onmouseenter: s8, onmouseleave: e6 }),
			hQ("discord", "Discord", "#5865F2", "#fff", {
				ariaLabel: "Authenticate with Discord",
				onclick() {
					if (QY()) return;

					z1("discord", "Discord");
				}
			}),
			hQ("google", "Google", "#F1F3F4", "#000", {
				ariaLabel: "Authenticate with Google",
				onclick() {
					if (QY()) return;

					z1("google", "Google");
				}
			}),
			k1,
			J0.devLogin === !0 && G("button.btn.dev-login", "Dev login (staff)", {
				ariaLabel: "Dev login",
				onclick() {
					z1("dev", "Dev");
				}
			}),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: p }))
		)),
		setTimeout(YY, 100)
	);
}

function GY($) {
	if (!pQ.test($)) return;

	o$(G("div.success", G("b", $), " has invited you to The Wall!"));
}

function ZY($) {
	if (!$.is_banned) return;

	(
		qY(),
		new y("Oops!", G("div.modal.error-modal", G("p", "You have been banned!"), G("p.error", $.is_banned.reason || "<Reason not specified>"), G("p", "Expires: ", G("b", n6($.is_banned.until))))).onClose(() => !1)
	);
}

async function cQ() {
	let $ = w$();

	if (!$) return null;

	r8.Authorization = $;

	let Q = await N.user.me.$get();

	if (Q.status != 200) return !1;

	let J = await Q.json();

	if (!J) return !1;

	return J;
}

async function KY() {
	let $ = await cQ();

	if ($) {
		if ((R.token = w$(), R.setUser($), $.is_banned)) return ZY($);
		if ($.is_new) return R1();

		k8();

		return;
	}

	if ((m$(), $ == !1)) o$(G("p.warning", "Session expired, please log in again!"));
}

var b0 = { started: !1, status: "", token: "" };

window.addEventListener("message", ($) => {
	if (!b0.started) return;
	if ($.origin != J0.url.web) return;
	if ($.data.type == "auth_modal_state") (b0.status = $.data.status, b0.token = $.data.token);
});

function m$() {
	(
		r8.Authorization = "",
		localStorage.removeItem("auth-token"),
		b0.token = "",
		R.token = null,
		R.user = null
	);
}

function FY() {
	(m$(), location.reload());
}

async function z1($, Q) {
	if (!z8) return alert("Missing turnstile token");

	q0();

	let J = await N.auth.login[":provider"].$post({ param: { provider: $ }, json: { turnstileToken: z8 } });

	if ((JY(), !J.ok)) return Y0("Captcha failed!", await J.text());

	let Y = await J.json(),
		Z = 485,
		q = 645,
		K = window.open(Y.redirectURL, void 0, `popup,width=${Z},height=${q},left=${Math.floor(screen.width / 2 - Z / 2)},top=${Math.floor(screen.height / 2 - q / 2)}`);

	if (!K) {
		Y0("Failed to open a pop-up window...", "Make sure you allowed us to open pop-up windows!");

		return;
	}

	(
		new y("Auth", G("div", "Authenticating...", G("p.notice.noicon", `A pop-up window should have been opened for you to complete authentication using ${Q}.`, { style: { maxWidth: "600px" } }))).onClose(() => !1),
		b0.started = !0,
		I2(K)
	);
}

function I2($) {
	let Q = setInterval(
		() => {
			if ($.closed) (clearInterval(Q), h2());
		},
		500
	);
}

async function h2() {
	if (!b0.status) {
		Y0("Authentication aborted");

		return;
	}

	if (b0.status != "200") return Y0("Authentication failed!", `Server responded with error code ${b0.status}`);

	localStorage.setItem("auth-token", b0.token);

	let $ = await cQ();

	if (!$) return (
		m$(),
		Y0("Authentication failed!", "Could not fetch the user after authenticating")
	);

	if ($.is_new) R1(); else (b0.started = !1, location.reload());
}

function bQ() {
	let $ = -D.x / D.zoom,
		Q = -D.y / D.zoom,
		J = window.innerWidth / D.zoom,
		Y = window.innerHeight / D.zoom;

	return {
		x: Math.max($, 0),
		y: Math.max(Q, 0),
		x2: Math.min($ + J, $0.width),
		y2: Math.min(Q + Y, $0.height)
	};
}

function m2() {
	let $ = bQ();

	return {
		x: Math.floor($.x / C0),
		y: Math.floor($.y / C0),
		x2: Math.floor($.x2 / C0),
		y2: Math.floor($.y2 / C0)
	};
}

function WY() {
	let $ = m2(), Q = new Set(), J = 4;

	for (let Y = $.x - 4; Y <= $.x2 + 4; Y++) for (let Z = $.y - 4; Z <= $.y2 + 4; Z++) {
		if (Y < 0 || Z < 0 || Y >= X8 || Z >= g0) continue;
		if (Q.size > 1000) return new Set();

		Q.add(Y * g0 + Z);
	}

	return Q;
}

function fQ($, Q, J = D.viewport) {
	return $ < J.x || Q < J.y || $ > J.x2 || Q > J.y2;
}

var Z6 = new Set(),
	N2 = 10,
	XY = 0.05,
	O2 = 1e6,
	jY = performance.now();

function HY($) {
	let Q = ($ - jY) / 1000, J = 1 - Math.exp(-N2 * Q);

	jY = $;

	for (let Y of Z6) {
		if (!Y.element) {
			Z6.delete(Y);

			continue;
		}

		let Z = Y.moveX - Y.x,
			q = Y.moveY - Y.y,
			K = Z * Z + q * q;

		if (Math.abs(Z) < XY && Math.abs(q) < XY || K > O2) (Y.x = Y.moveX, Y.y = Y.moveY, Z6.delete(Y)); else (Y.x += Z * J, Y.y += q * J);

		C1(Y, Y.x, Y.y);
	}

	requestAnimationFrame(HY);
}

function PY($, Q, J) {
	let Y = V0.get($);

	if (!Y) return;

	if (fQ(Y.x, Y.y) && fQ(Q, J)) {
		(C1(Y, Q, J), Z6.delete(Y));

		return;
	}

	(Z6.add(Y), Y.moveX = Q, Y.moveY = J);
}

requestAnimationFrame(HY);

var V0 = new Map(),
	n$ = G("div.cursors"),
	q6 = G("div.cursor-overflow");

q6.style.display = "none";
n$.append(q6);

function RY($) {
	if ($ > 0) (q6.textContent = `+${$} more here`, q6.style.display = ""); else q6.style.display = "none";
}

var B2 = 50,
	K6 = new Set(),
	U8 = new Set(),
	MY = new Set(),
	zY = {
		id: -1,
		username: "",
		cursor_sprite: 0,
		x: 0,
		y: 0,
		moveX: 0,
		moveY: 0,
		partial: !0
	};

function kY() {
	for (let $ of V0.values()) if ($.element) $.element.remove();

	V0.clear();
}

function lQ($) {
	if (x.a11y.hideCursors) return;
	if ($.username == R.user?.username || $.id == R.connectionId) return;

	let Q = V0.get($.id),
		J = !!Q && !Q.partial && (Q.cursor_sprite !== $.cursor_sprite || Q.clan_name !== $.clan_name || Q.username !== $.username),
		Y = {
			...zY,
			...Q || {},
			id: $.id,
			username: $.username,
			cursor_sprite: $.cursor_sprite,
			clan_id: $.clan_id,
			clan_name: $.clan_name,
			partial: !1
		};

	if ((V0.set($.id, Y), Q?.element && Q.partial)) {
		let Z = Q.element.querySelector("img");

		if ((Q.element.append(uQ(Y)), Z)) Z.src = Q$($.cursor_sprite);
	} else if (Q?.element && J) S2(Y);
}

function S2($) {
	if (!$.element) return;

	let Q = $.element.querySelector("img");

	if (Q) Q.src = Q$($.cursor_sprite);

	(
		$.element.querySelector(".chat-bubble")?.remove(),
		$.element.append(uQ($))
	);
}

function _2($) {
	if (V0.has($) || $ == R.connectionId) return;

	let Q = { ...zY, id: $ };

	return (dQ($), V0.set($, Q), Q);
}

function dQ($) {
	if ($ === R.connectionId || V0.has($) || K6.has($) || U8.has($) || MY.has($)) return;

	K6.add($);
}

function UY() {
	if (U8.size > 0 || K6.size === 0) return null;

	let $ = [];

	for (let Q of K6) {
		if ($.length >= B2) break;

		$.push(Q);
	}

	for (let Q of $) (K6.delete(Q), U8.add(Q));

	return $;
}

function CY($) {
	for (let Q of $) (lQ(Q), U8.delete(Q.id));
	for (let Q of U8) MY.add(Q);

	U8.clear();
}

function LY($) {
	let Q = V0.get($);

	if (!Q) return;
	if (Q.element) Q.element.remove();

	V0.delete($);
}

var VY = 0;

function DY($, Q, J = !1) {
	if (x.a11y.hideCursors) return;
	if ($ == R.connectionId) return;

	let Y = V0.get($) || _2($);

	if (!Y) return;

	(Y.lastSeen = performance.now(), Y.lastPos = Q);

	let Z = Q % d, q = Math.floor(Q / d);

	if (!Y.element) (
		Y.element = G("div.cursor", { dataset: { id: Y.id.toString() } }, G("img", { draggable: !1, src: Q$(Y.cursor_sprite), alt: "⬉" }), !Y.partial && uQ(Y)),
		n$.append(Y.element),
		Y.hidden = !1,
		Y.element.style.zIndex = `${VY++}`
	); else if (Y.hidden) (v2(Y), Y.element.style.zIndex = `${VY++}`);

	if (J) PY($, Z, q); else C1(Y, Z, q);
}

function C1($, Q, J) {
	if (!$.element) return;

	(
		$.element.style.translate = `${Q}px ${J}px`,
		$.x = Q,
		$.y = J
	);
}

function uQ($) {
	return G("div.chat-bubble", X4("span", $.clan_name, $.username, $));
}

function y2($) {
	if (!$.element || $.hidden) return;

	($.element.style.opacity = "0", $.hidden = !0);
}

function v2($) {
	if (!$.element || !$.hidden) return;

	($.element.style.opacity = "", $.hidden = !1);
}

var g2 = 1e4, x2 = 1000;

function p2() {
	let $ = performance.now() - g2;

	for (let Q of V0.values()) {
		if (!Q.element || Q.hidden) continue;
		if (Q.lastSeen === void 0 || Q.lastSeen < $) y2(Q);
	}
}

setInterval(p2, x2);

var R$ = 256,
	c2 = Math.max(d, M0),
	AY = (() => {
		let $ = 0;

		while (Math.ceil(c2 / 2 ** $) > R$) $++;

		return $;
	})();

var b2 = ($) => Math.ceil(Math.ceil(d / 2 ** $) / R$),
	f2 = ($) => Math.ceil(Math.ceil(M0 / 2 ** $) / R$);

function oQ($) {
	if ($ <= 0) return AY;

	return Math.min(AY, Math.max(0, Math.round(-Math.log2($))));
}

function wY($) {
	let Q = $.zoom || 0.000001,
		J = Math.max(0, Math.floor(-$.x / Q)),
		Y = Math.max(0, Math.floor(-$.y / Q)),
		Z = Math.min(d, Math.ceil((-$.x + $.w) / Q)),
		q = Math.min(M0, Math.ceil((-$.y + $.h) / Q));

	return { x0: J, y0: Y, x1: Math.max(J, Z), y1: Math.max(Y, q) };
}

function L1($, Q) {
	let { x0: J, y0: Y, x1: Z, y1: q } = wY($),
		K = 2 ** Q,
		W = b2(Q),
		F = f2(Q),
		H = Math.max(0, J / K / R$ | 0),
		X = Math.max(0, Y / K / R$ | 0),
		j = Math.min(W - 1, (Z / K - 1) / R$ | 0),
		P = Math.min(F - 1, (q / K - 1) / R$ | 0),
		C = [];

	for (let z = H; z <= j; z++) for (let A = X; A <= P; A++) C.push([z, A]);

	return C;
}

var TY = 64;

function l2($) {
	let { x0: Q, y0: J, x1: Y, y1: Z } = wY($),
		q = Q / C0 | 0,
		K = (Y - 1) / C0 | 0,
		W = J / C0 | 0,
		F = (Z - 1) / C0 | 0,
		H = [];

	for (let P = q; P <= K; P++) for (let C = W; C <= F; C++) if (P >= 0 && C >= 0 && P < X8 && C < g0) H.push(P * g0 + C);

	if (H.length <= TY) return H;

	let X = (Q + Y) / 2 / C0, j = (J + Z) / 2 / C0;

	return H.map((P) => {
		let C = P / g0 | 0,
			z = P % g0,
			A = C + 0.5 - X,
			v = z + 0.5 - j;

		return [P, A * A + v * v];
	}).sort((P, C) => P[1] - C[1]).slice(0, TY).map((P) => P[0]);
}

function d2() {
	let $ = globalThis.navigator?.connection;

	if (!$) return !1;

	return !!$.saveData || $.effectiveType === "2g" || $.effectiveType === "slow-2g" || $.effectiveType === "3g";
}

var u2 = 0.8;

class nQ {
	hooks;
	mode = "overview";
	lastChunks = "";

	constructor($) {
		this.hooks = $;
	}

	update($) {
		let Q = $.zoom >= u2 ? "live" : "overview";

		if (Q !== this.mode) (this.mode = Q, this.hooks.setLayer(Q));

		if (this.mode === "overview") {
			if (this.lastChunks !== "") (this.hooks.setLiveChunks([]), this.lastChunks = "");

			let J = oQ($.zoom), Y = L1($, J);

			for (let [Z, q] of Y) this.hooks.drawTile(J, Z, q);

			if (!d2() && J > 0) for (let [Z, q] of L1($, J - 1).slice(0, 16)) this.hooks.drawTile(J - 1, Z, q);
		} else {
			let J = l2($), Y = J.join(",");

			if (Y !== this.lastChunks) (this.hooks.setLiveChunks(J), this.lastChunks = Y);
		}
	}
}

function o2() {
	let $ = navigator,
		Q = $.hardwareConcurrency ?? 4,
		J = $.deviceMemory ?? 4,
		Y = !!$.connection?.saveData,
		Z = matchMedia?.("(pointer: coarse)")?.matches ?? !1,
		q = matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? !1;

	if (Y || q) return 24;
	if (Z || Q <= 4 || J <= 4) return 40;
	if (Q >= 8 && J >= 8) return 150;

	return 80;
}

var hY = o2(),
	EY = Math.min(300, Math.round(hY * 2)),
	t$ = hY,
	D1 = 16.7,
	tQ = performance.now(),
	IY = tQ;

function mY($) {
	let Q = $ - tQ;

	if ((
		tQ = $,
		Q > 0 && Q < 1000 && document.visibilityState === "visible"
	)) {
		if ((D1 += (Q - D1) * 0.1, $ - IY > 1000)) {
			if ((IY = $, D1 > 22 && t$ > 8)) t$ = Math.max(8, Math.round(t$ * 0.7)); else if (D1 < 13 && t$ < EY) t$ = Math.min(EY, Math.round(t$ * 1.15) + 1);
		}
	}

	requestAnimationFrame(mY);
}

requestAnimationFrame(mY);

function NY() {
	return t$ | 0;
}

var a$ = new Set(), aQ = -1, OY = null;

function BY($) {
	OY = new Set($);
}

function SY() {
	(a$ = new Set(), aQ = -1);
}

function n2($) {
	if ($.size != a$.size) return !0;

	for (let Q of $) if (!a$.has(Q)) return !0;
	for (let Q of a$) if (!$.has(Q)) return !0;

	return !1;
}

function _Y() {
	if (!R.user || !K0) return;

	let $ = R.cursorX >= 0 && R.cursorY >= 0,
		Q = -1,
		J = -1;

	if ($) {
		let K = Math.min(R.cursorX, d - 1),
			W = Math.min(R.cursorY, M0 - 1);

		Q = W * d + K;

		let F = Math.floor(K / C0), H = Math.floor(W / C0);

		J = F * g0 + H;
	}

	let Y = OY ?? WY(), Z = n2(Y), q = UY();

	if (aQ != Q || Z || q) (
		aQ = Q,
		a$ = Y,
		sQ(3, {
			cursorPos: Q,
			cursorChunk: J,
			subscribe: Z ? [...Y] : void 0,
			lookupUsers: q ?? void 0,
			cursorBudget: NY()
		})
	);
}

var Q5 = J0.url?.tileBase?.replace(/\/$/, ""),
	r$ = !!J0.url?.ws && !!Q5,
	J5 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" }),
	w1 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" });

w1.style.opacity = "0";

var j6 = G("div.canvas-snapshot-wrap", J5, w1);

if (!r$) j6.style.display = "none";

var Y5 = 400;

J5.style.transition = `opacity ${Y5}ms ease-out`;
w1.style.transition = `opacity ${Y5}ms ease-out`;

var A1 = J5,
	C8 = w1,
	E1 = G("div.canvas-tile-grid");

if (!r$) E1.style.display = "none";

var s$ = null,
	I1 = "overview",
	eQ = 1e4,
	rQ = !1,
	yY = "",
	vY = null;

async function T1() {
	if (!r$ || rQ || I1 !== "overview" || document.hidden) return;

	rQ = !0;

	try {
		let $ = await fetch(`${Q5}/snapshot.png`, { cache: "no-cache" });

		if (!$.ok) return;

		let Q = $.headers.get("last-modified") ?? "";

		if (Q && Q === yY) return;

		yY = Q;

		let J = await $.blob(), Y = URL.createObjectURL(J);

		C8.src = Y;

		try {
			await C8.decode();
		} catch {}

		(
			j6.appendChild(C8),
			C8.style.opacity = "1",
			await new Promise((q) => setTimeout(q, Y5 + 60))
		);

		let Z = vY;

		if ((vY = Y, A1.style.opacity = "0", A1.src = "", Z)) URL.revokeObjectURL(Z);

		[A1, C8] = [C8, A1];
	} catch {} finally {
		rQ = !1;
	}
}

var N$ = new Map(),
	L8 = new Set(),
	W6 = new Map(),
	t2 = 8000;

function pY($, Q, J) {
	return `${Q5}/tiles/${$}/${Q}/${J}.png?v=${Math.floor(Date.now() / eQ)}`;
}

function $5($) {
	if (!r$) return;

	if (I1 === "overview") {
		if (N$.size) {
			for (let K of N$.values()) K.remove();

			(N$.clear(), L8.clear());
		}

		return;
	}

	let Q = oQ($.zoom),
		J = R$ * 2 ** Q,
		Y = L1($, Q),
		Z = new Set();

	for (let [K, W] of Y) {
		let F = `${Q}/${K}/${W}`;

		if ((Z.add(F), !N$.has(F))) {
			let H = document.createElement("img");

			(
				H.className = "canvas-tile",
				H.decoding = "async",
				H.draggable = !1,
				H.style.left = `${K * J}px`,
				H.style.top = `${W * J}px`,
				H.style.width = `${J}px`,
				H.style.height = `${J}px`,
				L8.add(F)
			);

			let X = setTimeout(
				() => {
					if (L8.delete(F)) X6();
				},
				t2
			);

			W6.set(F, X);

			let j = () => {
				let P = W6.get(F);

				if (P !== void 0) (clearTimeout(P), W6.delete(F));

				L8.delete(F);
			};

			(
				H.onload = () => {
					(
						H.classList.add("loaded"),
						H.style.visibility = "",
						j(),
						X6()
					);
				},

				H.onerror = () => {
					(H.style.visibility = "hidden", j(), X6());
				},
				H.src = pY(Q, K, W),
				E1.appendChild(H),
				N$.set(F, H)
			);
		}
	}

	let q = !1;

	for (let [K, W] of N$) if (!Z.has(K)) {
		(W.remove(), N$.delete(K));

		let F = W6.get(K);

		if (F !== void 0) (clearTimeout(F), W6.delete(K));
		if (L8.delete(K)) q = !0;
	}

	if (q) X6();
}

function gY() {
	if (!r$ || I1 !== "live" || document.hidden) return;

	for (let [$, Q] of N$) {
		let [J, Y, Z] = $.split("/").map(Number);

		Q.src = pY(J, Y, Z);
	}
}

var iQ = 0.9, xY = 1.4;

function a2($) {
	if ($ <= iQ) return 1;
	if ($ >= xY) return 0;

	return 1 - ($ - iQ) / (xY - iQ);
}

function X6() {
	if (!s$) return;

	j6.style.opacity = L8.size > 0 ? "1" : String(a2(s$.zoom));
}

var s2 = new nQ({
	async drawTile() {
		return !0;
	},

	setLiveChunks($) {
		BY($);
	},

	setLayer($) {
		if ((I1 = $, $ === "overview")) {
			if ((T1(), s$)) $5(s$);
		} else if (s$) $5(s$);
	}
});

function cY() {}

function bY($) {
	if (!r$) return;

	(s$ = $, s2.update($), $5($), X6());
}

if (r$) (
	T1(),
	setInterval(T1, eQ),
	setInterval(gY, eQ),
	document.addEventListener("visibilitychange", () => {
		if (!document.hidden) (T1(), gY());
	})
);

var O$ = [], fY = null;

function G5() {
	fY?.();
}

var Z$ = {
	bind($) {
		(fY = $, $());
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

		G5();
	},

	receive($) {
		if (O$.some((Q) => Q.id === $.id)) return;

		(
			O$.unshift({
				id: $.id,
				kind: $.kind,
				title: $.title,
				body: $.body,
				data: $.data,
				createdAt: $.createdAt
			}),
			G5()
		);
	},

	async markAllRead() {
		if (!O$.length) return;
		if ((O$.length = 0, G5(), !R.token)) return;

		try {
			await N.user.notifications.read.$post({ json: {} });
		} catch {}
	}
};

var r2 = new Map(),
	M$ = new Uint8Array(l$).fill(255),
	i2 = !!J0.url?.ws,
	lY = -1;

class dY {
	x;
	y;
	worldX;
	worldY;
	pos;

	constructor($, Q) {
		this.x = $;
		this.y = Q;

		(
			this.worldX = $ * C0,
			this.worldY = Q * C0,
			this.pos = $ * g0 + Q,
			r2.set(this.pos, this)
		);
	}
}

function uY() {
	for (let $ = 0; $ < X8; $++) for (let Q = 0; Q < g0; Q++) new dY($, Q);
}

function D8($, Q) {
	if (!Number.isSafeInteger($) || $ < 0 || $ >= l$) return !1;

	let J = $ % d, Y = Math.floor($ / d), Z = X0[Q];

	if (!Z) return (M$[$] = Q, B$.clearRect(J, Y, 1, 1), !0);
	if (lY != Z.color) (B$.fillStyle = Z.hex, lY = Z.color);

	return (M$[$] = Q, B$.fillRect(J, Y, 1, 1), !0);
}

function h1($, Q) {
	let J = Q * d + $;

	if (M$[J] == 255) if (i2) M$[J] = 254; else {
		let { data: Y } = B$.getImageData($, Q, 1, 1),
			Z = Y[0] << 16 | Y[1] << 8 | Y[2];

		M$[J] = PQ.get(Z) ?? 254;
	}

	return X0[M$[J]];
}

function e2($, Q) {
	let J = Math.imul($, 374761393) + Math.imul(Q, 668265263) | 0;

	return (
		J = Math.imul(J ^ J >>> 13, 1274126177),
		J ^= J >>> 16,
		(J >>> 0) / 4294967296
	);
}

function oY($, Q) {
	if (Q >= f6) return !1;

	let J = f6 - VQ;

	if (Q < J) return !0;

	let Y = (f6 - Q) / VQ;

	return e2($, Q) < Y;
}

function nY() {
	new y("Chat", G("div.chat-modal.nopad", H6, Z5(!0))).onClose(() => {
		f(".chat-log-wrapper").append(H6);
	});
}

var m1 = null,
	tY = [
		{
			id: "x",
			name: "X (formerly Twitter)",
			url: "https://x.com/intent/tweet"
		},

		{
			id: "bluesky",
			name: "Bluesky",
			url: "https://bsky.app/intent/compose"
		},

		{
			id: "mastodon",
			name: "Mastodon",
			url: "https://mastodon.social/share"
		},

		{
			id: "reddit",
			name: "Reddit",
			url: "https://www.reddit.com/submit"
		}
	];

function aY($, Q) {
	let J = new URLSearchParams();

	if ($.name == "Reddit") (J.set("title", "#filianislost"), J.set("url", Q)); else J.set("text", `#filianislost ${Q}`);

	return `${$.url}?${J.toString()}`;
}

async function q5() {
	if (m1) return m1;

	q0();

	let $ = await N.user.shareLink.$post();

	if (!$.ok) {
		m0($, "Could not generate the referral link");

		return;
	}

	let Q = await $.json();

	return (
		m1 = Q,
		setTimeout(
			() => {
				m1 = null;
			},
			60000
		),
		Q
	);
}

function sY($) {
	if (!R.user) return "";

	let Q = new URLSearchParams();

	if ((Q.set("c", $.referral.code), $.imageCode)) Q.set("im", $.imageCode);
	if ($.x && $.y) Q.set("p", `${$.x},${$.y}`);

	return `${J0.url.share}/${R.user.username}?${Q.toString()}`;
}

var N1 = null;

function K5($, Q = !1) {
	let J = sY($),
		Y = `Share Website > ${$.imageCode ? "Image" : "Link"}`;

	new y(Y, G(
		"div.share-modal.link",
		G("p", Q
			? "You have already generated an image in the past minute!"
			: "Here's your link!"),
		G("span.box.input.link.tooltip", J, {
			dataset: { tooltip: "Click to copy!" },
			onclick() {
				IQ(J);
			}
		}),
		$.imageLink && G("img.preview", { src: $.imageLink }),
		G("p.desc", "Post it on..."),
		G("div.platforms", tY.map((Z) => G(
			"a.platform.tooltip",
			{
				target: "_blank",
				href: aY(Z, `${J}&utm_source=${Z.id}`),
				dataset: { tooltip: Z.name }
			},
			G("img", {
				src: `/static/icon/platform/${Z.id}.png`,
				alt: Z.name,
				draggable: !1
			})
		))),
		V$
	));
}

function $Z() {
	if (N1) return K5(N1, !0);

	(R.setTool(4), S$(4), p(!0));
}

async function F5($) {
	if ((R.setTool(0), S$(0), n0(), $)) return P6();

	(q0(), N0());

	let { x: Q, y: J, x2: Y, y2: Z } = D.viewport,
		q = Y - Q,
		K = Z - J,
		W = Math.floor(Q + q / 2),
		F = Math.floor(J + K / 2),
		H = await N.user.shareCanvas.$post({
			json: {
				x: Math.floor(Q),
				y: Math.floor(J),
				width: Math.floor(q) || 1,
				height: Math.floor(K) || 1
			}
		});

	if (!H.ok) return m0(H, "Could not generate the image");

	let { code: X, url: j } = await H.json(),
		C = { referral: await q5(), imageCode: X, imageLink: j, x: W, y: F };

	(
		N1 = C,
		setTimeout(
			() => {
				N1 = null;
			},
			60000
		),
		p(!0),
		K5(C)
	);
}

async function P6() {
	let $ = await q5();

	if (!$) return;

	new y("Share Website", G("div.share-modal", G("p.success", `Every player who signs up with your link will reward you with ${j8(o8.ReferralCode)}!`), G("div.btn-container.vertical", G("button.btn.share", "Share Link", { onclick: () => K5({ referral: $ }) }), G("button.btn.share", "Share Image", { onclick: () => $Z() }), G("button.btn", "Cancel", { onclick: () => p() })), G("p.desc", `You have invited ${A0($.uses, "user")} so far!`)));
}

function rY() {
	return new y("Out of paint!", G("div.out-of-paint", G("p.c", G("b", "You have used up some paint, time to submit!")), G("p.c.desc", `You have ${j8(R.paintRemaining + R.localPaintIncrement)} remaining.`), G("p.notice.noicon", "Paint does not get consumed until you submit your changes. Submit your drawing to the canvas, or undo your changes."), G(
		"div.btn-container",
		G("button.btn.primary", "Submit", {
			onclick: async () => {
				(q0(), await B1(), p(!0));
			}
		}),
		G("button.btn", "Cancel", { onclick: () => p() })
	)));
}

function O1() {
	return new y("Out of paint?", G("div.out-of-paint", G("b", "You can share our website to get more paint!"), G("p.success.noicon", `Each invited user will reward you with ${j8(o8.ReferralCode)}!`), G("p.desc", `You can also wait for a refill to get ${j8(o8.TimePassed)}.`, G("br"), "The timer is shown in the bottom bar."), G("div.btn-container.vertical", G("button.btn.share", "Share Website", { onclick: P6 }), t8)));
}

var A8 = G("div.box.outset.status-text.warn"),
	e$ = G("div.box.outset.status-text"),
	i$ = 0,
	_$ = !1,
	W5 = 0;

function n0() {
	if (R.openAt && Date.now() + R.clockOffset < R.openAt) {
		if (_$) (A8.textContent = "", _$ = !1);

		(YZ(), W5 = R.activeTool);

		return;
	}

	if (R.activeTool == 1) QZ(W5 != R.activeTool); else if (_$) (A8.textContent = "", _$ = !1);
	if (R.activeTool == 4) JZ(); else if (R.paintRemaining == 0 && R.nextRefill) GZ(); else if (O0.size || p0.length) ZZ(); else iY();

	W5 = R.activeTool;
}

function QZ($ = !1) {
	let Q = D.normalizedZoom <= S1;

	if (Q && (!_$ || $)) (_$ = !0, A8.textContent = "Zoom in to draw!"); else if (_$ && !Q) {
		(A8.textContent = "", _$ = !1);

		return;
	}
}

setInterval(n0, 1000);

function iY() {
	if (i$ == 0) return;

	(e$.textContent = "", i$ = 0);
}

function JZ() {
	(
		i$ = 4,
		e$.replaceChildren(G("div.share-viewport", G("p", "Zoom into the canvas to share your artwork!"), G("div", G("button.btn", "Share", { onclick: () => F5(!1) }), G("button.btn", "Cancel", { onclick: () => F5(!0) }))))
	);
}

function YZ() {
	let $ = R.openAt - (Date.now() + R.clockOffset);

	(
		i$ = 5,
		e$.replaceChildren(G("div.timer", G("p", "Drawing opens in: "), G("b", zQ($))))
	);
}

function GZ() {
	let $ = R.nextRefill - Date.now(), Q = zQ($);

	if ((i$ = 1, $ < 1)) {
		(R.nextRefill = 0, iY());

		return;
	}

	e$.replaceChildren(G("div.timer", G("p", G("a.link", "Out of paint!", { tabIndex: 1, onclick: () => O1() }), " Next refill in: "), G("b", Q)));
}

function ZZ() {
	if (i$ == 2) return;

	(
		i$ = 2,
		e$.replaceChildren(G("p", "Drawing locally - Confirm to submit!"), G("div", G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/confirm.png", draggable: !1 }), G("span", "Confirm"), { tabIndex: 1, onclick: B1 }), G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/cancel.png", draggable: !1 }), G("span", "Cancel"), { tabIndex: 1, onclick: eY })))
	);
}

var _1 = !1,
	$7 = 1,
	X5 = 10,
	Q7 = ["tiny", "small", "medium", "large"],
	j5 = 2,
	H5 = ($, Q, J) => G(
		"button.btn.swatch.icon.tool.tooltip",
		{
			id: `tool-${Q}`,
			dataset: { tooltip: J },
			onclick: () => S$($)
		},
		G("img", { src: `/static/icon/tool/${Q}.png`, draggable: !1 })
	),
	qZ = () => {
		let $ = G("img", { draggable: !1 }),
			Q = G("input.tooltip", {
				type: "range",
				min: $7,
				max: X5,
				oninput(Y) {
					let Z = Y.target, q = parseInt(Q.value);

					(
						Z.dataset.tooltip = `Brush Size: ${q}`,
						x.lastBrushSize = q + j5,
						J(q),
						T0()
					);
				}
			}),
			J = (Y) => {
				let Z = Q7[Math.floor(Y / (X5 + 1) * Q7.length)];

				(
					$.src = `/static/icon/size/${Z}.png`,
					R.brushSize = Y + j5,
					Q.value = Y.toString(),
					Q.dataset.tooltip = `Brush Size: ${Y}`
				);
			};

		return (
			J(Math.min(Math.max(x.lastBrushSize - j5, $7), X5)),
			G("div.container", G("div.popup.box.outset.size-control", G("div.input-container.tooltip", Q)), { onmouseout: () => P8() }, G("button#brush-size-btn.btn.swatch.icon.tooltip", $, { dataset: { tooltip: "Brush Size" } }))
		);
	},
	P5 = {
		0: H5(0, "hand", "Hand Tool (Z)"),
		1: H5(1, "spray", "Draw Tool (X)"),
		2: H5(2, "chat", "Open Chat")
	},
	J7 = G("div.tools", ...Object.values(P5)),
	Y7 = G("div.tools", qZ(), q1(
		Z1("tool/preview", {
			id: "tool-preview",
			onclick($) {
				(
					_1 = !_1,
					$.target.classList.toggle("active", _1),
					$8.style.opacity = (_1 ? 0.5 : 1).toString(),
					P8()
				);
			}
		}),
		"Compare Mode (M)"
	));

function S$($) {
	if ((P8(), $ == 2)) {
		nY();

		return;
	}

	(
		o0(".tool.active").forEach((J) => J.classList.remove("active")),
		(P5[$] ?? P5[0]).classList.add("active"),
		R.setTool($),
		n0()
	);
}

function KZ($) {
	let Q = Math.max(0, Math.floor((Date.now() - $) / 1000));

	if (Q < 60) return "just now";

	let J = Math.floor(Q / 60);

	if (J < 60) return `${J}m ago`;

	let Y = Math.floor(J / 60);

	if (Y < 24) return `${Y}h ago`;

	return `${Math.floor(Y / 24)}d ago`;
}

function FZ($) {
	return G(
		"div.item.box.outset",
		G(
			"div.wrapper",
			typeof $.data?.cursorId == "number" && G("img", {
				src: `/static/cursors/generated/${$.data.cursorId}.png`,
				draggable: !1
			}),
			G("div.content", G("div.title", $.title), $.body && G("p.body", $.body))
		),
		G("div.time", w0($.createdAt, KZ($.createdAt)))
	);
}

function G7() {
	let $ = [...Z$.unread];

	return (
		Z$.markAllRead(),
		new y("Notifications", G(
			"div.notifications-modal",
			$.length
				? G("div.list", $.map(FZ))
				: G("p.desc.c", "No notifications."),
			G("div.btn-container", t8)
		))
	);
}

function Z7() {
	let $ = G("span.notif-badge"),
		Q = G("img", { src: "/static/icon/notif.png", draggable: !1, alt: "bell" }),
		J = G("button.btn.swatch.tooltip.notif-indicator.icon", Q, $, {
			dataset: { tooltip: "Notifications" },
			onclick() {
				G7();
			}
		});

	return (
		Z$.bind(() => {
			let Y = Z$.unreadCount;

			if (Y > 0) Q.src = "/static/icon/notif-active.gif"; else Q.src = "/static/icon/notif.png";

			(
				J.classList.toggle("has-unread", Y > 0),
				$.textContent = Y > 99 ? "99+" : String(Y),
				J.dataset.tooltip = Y > 0
					? `${Y} new notification${Y > 1 ? "s" : ""}`
					: "Notifications"
			);
		}),
		J
	);
}

function y1() {
	new y("Select Color", G("div.color-modal", G("div.colors", X0.map(($) => G("button.btn.swatch.tooltip", {
		dataset: { tooltip: $.name },
		style: { backgroundColor: $.hex },
		onclick() {
			(Q8($), p());
		}
	})))));
}

var S0 = [...X0], J8 = G("div.colors.container");

function g1($) {
	let Q = S0.indexOf($);

	if (Q > -1) (S0.splice(Q, 1), S0.push($));
}

var v1 = ($) => X0.findIndex((Q) => Q.name == $);

function WZ() {
	let $ = x.lastUsedColors;

	if ($.length != S0.length) {
		let Q = v1("Red"),
			J = v1("Violet"),
			Y = X0.slice(Q, J + 1);

		(g1(X0[v1("Gray")]), g1(X0[v1("White")]));

		for (let Z of Y) g1(Z);

		return;
	}

	(S0.splice(0), S0.push(...$.map((Q) => X0[Q])));
}

function K7($) {
	let Q = S0[S0.length - $];

	if (!Q) return;

	Q8(Q, !1);
}

function Q8($, Q = !0) {
	if ((sJ($.hex, $.dark), R.selectedColor == $)) return;
	if (S0.indexOf($) > -1 && Q) (g1($), x.lastUsedColors = S0.map((Y) => Y.idx));

	(R.selectedColor = $, V5());
}

var XZ = 54, jZ = 9;

function q7($) {
	let Q = getComputedStyle($),
		J = $.clientWidth - parseFloat(Q.paddingLeft) - parseFloat(Q.paddingRight);

	for (let Y = 0; Y < $.children.length; Y++) {
		let Z = $.children[Y];

		if (Z === J8) continue;

		J -= Z.getBoundingClientRect().width;
	}

	return J;
}

function V5() {
	let $ = q1(Z1("tool/colors", { id: "palette-btn", onclick: y1 }), "Palette");

	J8.replaceChildren($);

	let Q = J8.parentElement, J = Q ? q7(Q) : 0;

	if (J <= 0) {
		requestAnimationFrame(() => {
			if (Q && q7(Q) > 0) V5();
		});

		return;
	}

	let Y = Math.floor(J / XZ) - 1,
		Z = Math.max(0, Math.min(jZ, Y));

	for (let q = 0; q < Z; q++) {
		let K = S0[S0.length - 1 - q],
			W = G("button.btn.swatch.tooltip", {
				tabIndex: -1,
				dataset: { tooltip: K.name },
				style: { backgroundColor: K.hex },
				onclick() {
					Q8(K, !1);
				}
			});

		J8.append(W);
	}
}

function F7() {
	(
		WZ(),
		Q8(S0[S0.length - 1], !1),
		R.setPaintRemaining(R.paintRemaining)
	);

	let $ = J8.parentElement;

	if ($) {
		let Q = -1;

		new ResizeObserver(() => {
			let J = $.clientWidth;

			if (J === Q) return;

			(Q = J, V5());
		}).observe($);
	}
}

var R5 = G("div.hotbar-container");

function x1($) {
	R5.replaceChildren($);
}

var V6 = G("div.hotbar.main-bar", { role: "toolbar" });

function W7() {
	(
		V6.append(G("div.status-text-container", A8, e$), G("div.section.left", X7(), G("div#chatbox-divider.divider"), J7, G("div.divider")), G("div.section.middle", d$, tJ, Z7()), G("div.section.right", G("div.divider"), Y7, G("div.divider"), J8)),
		R.setTool(0),
		x1(V6),
		S$(0),
		F7()
	);
}

var $8 = G("canvas.preview-canvas", { width: d, height: M0 }),
	z$ = $8.getContext("2d"),
	O0 = new Map();

function j7() {
	(
		R.localPaintIncrement = 0,
		R.setPaintRemaining(R.paintRemaining),
		z$.clearRect(0, 0, $8.width, $8.height),
		O0.clear(),
		P7()
	);
}

function HZ() {
	j7();
}

async function H7($, Q = 0) {
	if (Q >= 5) return (
		console.error("Failed to submit the drawing after 5 tries."),
		!1
	);

	try {
		return (await V7($), !0);
	} catch(J) {
		return (
			console.error("Error submitting the drawing:", J),
			await H7($, Q + 1)
		);
	}
}

async function PZ() {
	let $ = [...O0.entries()];

	for (let [Q, J] of $) D8(Q, J);

	if ((R.commitLocalPaint(), j7(), $.length === 0)) return;

	for (let Q = 0; Q < $.length; Q += l6) if (!await H7($.slice(Q, Q + l6))) return Y0("Something went wrong, sorry!", "Could not submit local drawing to the server after 5 tries");
}

function M5($, Q) {
	if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q) || $ < 0 || Q < 0 || $ >= d || !oY($, Q)) return !1;

	let J = R.paintRemaining + R.localPaintIncrement,
		Y = l6 - L0 - 5,
		Z = J % L0 == 0 && R.localPaintIncrement < -Y;

	if (!J || Z) return (k5(), !1);

	let q = R.selectedColor, K = Q * d + $;

	if (M$[K] == 255) h1($, Q);

	if (O0.has(K)) {
		if (O0.get(K) == q.idx) return !1;
	} else if (M$[K] == q.idx) return !1;

	if ((z$.fillStyle = q.hex, z$.fillRect($, Q, 1, 1), !O0.has(K))) R.addLocalPaintIncrement(-1);

	return (
		t0.push({ x: $, y: Q, pos: K, oldColor: O0.get(K), newColor: q.idx }),
		O0.set(K, q.idx),
		!0
	);
}

async function B1() {
	try {
		(V6.classList.add("progress"), await PZ());
	} finally {
		V6.classList.remove("progress");
	}
}

async function eY() {
	if (z5()) {
		if (!await i("Are you sure you want to cancel your changes?")) return;
	}

	HZ();
}

function z5() {
	return O0.size > 500 || p0.length > 0;
}

var R6 = [], p0 = [], t0 = [];

function R7() {
	(R6.push(t0), t0 = [], p0 = []);
}

function P7() {
	(R6 = [], p0 = [], t0 = []);
}

function U5($, Q = !1) {
	let J = 0;

	for (let Y of $) if (Q) {
		if ((
			z$.fillStyle = X0[Y.newColor].hex,
			z$.fillRect(Y.x, Y.y, 1, 1),
			!O0.has(Y.pos)
		)) J++;

		O0.set(Y.pos, Y.newColor);
	} else if (typeof Y.oldColor == "number") (
		z$.fillStyle = X0[Y.oldColor].hex,
		z$.fillRect(Y.x, Y.y, 1, 1),
		O0.set(Y.pos, Y.oldColor)
	); else (z$.clearRect(Y.x, Y.y, 1, 1), O0.delete(Y.pos), J++);

	return J;
}

function p1() {
	if (t0.length) {
		let J = U5(t0);

		(R.addLocalPaintIncrement(J), p0 = [], p0.push(t0), t0 = []);

		return;
	}

	if (!R6.length) return;

	let $ = R6.pop(), Q = U5($);

	(R.addLocalPaintIncrement(+Q), p0.push($));
}

function c1() {
	if (!p0.length) return;

	let $ = p0.pop(), Q = U5($, !0);

	(R6.push($), R.addLocalPaintIncrement(-Q));
}

var C5 = new Set(), w8 = null, M6 = -1;

async function VZ() {
	return (await (await N.cursor.data.$get()).json()).map((J) => ({ ...J, ...MZ(J), unlocked: C5.has(J.id) }));
}

async function b1() {
	let Q = await (await N.cursor.inventory.$get()).json();

	C5.clear();

	for (let J of Q.cursors) C5.add(J);

	w8 = Q;
}

async function y$($) {
	let Q = await N.cursor.claimCursor.$post({ json: $ });

	if (Q.status != 200) return await Q.text();

	return (await b1(), null);
}

function RZ($, Q, J) {
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

function MZ($) {
	let Q = $.unlock;

	if (!Q || Q.kind == "client") return { claimable: !1, tooltip: "You do not own this cursor!" };

	switch (Q.kind) {
		case "stat":
			{
				let J = w8.stats[Q.stat] ?? 0;

				return J >= Q.gte
					? { claimable: !0, tooltip: "Click to claim!" }
					: { claimable: !1, tooltip: RZ(Q.stat, J, Q.gte) };
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

function zZ($) {
	let Q = G("div.item.box", {
		id: `item${$.id}`,
		async onclick() {
			if ($.unlocked) L5($); else if ($.claimable) {
				if ($.unlock?.kind == "purchase") {
					if (!await i(`Are you sure you want to buy this cursor for ${$.unlock.cost} coins?`)) return;
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
			V8(M6);
		}
	});

	if (!$.unlocked) {
		if ((
			Q.classList.add("tooltip", "locked"),
			Q.dataset.tooltip = $.unlock?.tooltip || $.tooltip,
			$.claimable
		)) Q.classList.add("claimable");

		if ($.unlock?.kind == "purchase") Q.append(G("span.box.cost", `${$.unlock.cost} \uD83E\uDE99`));
	}

	if (x.a11y.devOverlay) Q.dataset.tooltip = `id=${$.id} tier=${$.tier} "${$.name}"`;

	return (Q.append(G("img", { src: Q$($.id), draggable: !1 })), Q);
}

function L5($) {
	if ($.id == M6) return;

	M6 = $.id;

	let Q = f("#inv-confirm-buttons");

	if ((
		o0(".inventory .item.active").forEach((J) => J.classList.remove("active")),
		f(`#item${$.id}`).classList.add("active"),
		$.id == R.user?.cursor_id
	)) Q.style.display = "none"; else Q.style.display = "";
}

function kZ() {
	let $ = R.currentSprayCanSize(),
		Q = Math.floor($ / RQ) || 1;

	new y("Coins", G("div.coin-modal", G("p.c", "You have ", j4(w8.coins), ` coin${A0(w8.coins)}`), G("p.notice", `You can exchange spray cans for coins! Every ${RQ} paint is one coin.`), G("p.c", "Your current spray can contains ", G("b", $.toString()), " paint, ", "so you will receive ", G("b", Q.toString()), ` coin${A0($ == 0 ? 0 : Q)}.`), G("div.btn-container", G("button.btn", "Back", { onclick: T8 }), G("button.btn.primary", "Sell Spray Can", {
		async onclick() {
			if (R.localPaintIncrement != 0 || p0.length) {
				Y0("You cannot sell your current spray can while drawing! Please cancel or submit your local changes.");

				return;
			}

			if (Q == 0) {
				Y0("Empty spray can!");

				return;
			}

			if (!await i(`Sell your current spray can for ${A0(Q, "coin")}? The remainder will not be lost.`)) return T8();

			q0();

			let Y = await N.cursor.buyCoins.$post();

			if (!Y.ok) {
				m0(Y);

				return;
			}

			T8();
		}
	}))));
}

async function T8() {
	if (!R.user) return;

	(q0(), await b1());

	let $ = await VZ(),
		Q = $.toSorted((J, Y) => Y.unlocked - J.unlocked || Y.tier - J.tier || J.name.localeCompare(Y.name));

	(
		new y("User > Inventory", G("div.inventory.nopad", G("div.scroll.pad", G("p.notice", "Click on a cursor to select it! It will be shown to all users."), G("br"), G("div.items", Q.map(zZ)), G("p", "More cursors coming soon!")), G("div.box.outset.confirm-bar", G("button.btn", "Back", { onclick: () => p() }), G("button.btn", A0(Math.floor(w8.coins), "coin"), { onclick: kZ }), G(
			"div#inv-confirm-buttons",
			{ style: { display: "none" } },
			G("button.btn", "Cancel", {
				onclick() {
					L5($[R.user.cursor_id]);
				}
			}),
			G("button.btn.primary", "Change", {
				async onclick() {
					(q0(), await i8({ cursorId: M6 }), p(!0));
				}
			})
		)))).onClose(() => {
			(M6 = -1, V8(R.user.cursor_id));
		}),

		requestAnimationFrame(() => {
			L5($[R.user.cursor_id]);
		})
	);
}

window.freeCursor = async ($) => {
	let Q = await y$({ code: $ });

	if (Q) return (console.warn(`freeCursor: ${Q}`), !1);

	return (console.log("Unlocked! Open the inventory to equip it."), !0);

	let J = "You like looking for secrets, don't you? On an unrelated note, consider checking out the amazing people who made this site: https://yui.dev and https://github.com/brennenawana";
};

var D5 = new Map(), q$ = ($, Q) => D5.set($, Q);

q$(0, ($) => {
	if (typeof $.paintRemaining == "number") (
		R.nextRefill = $.nextRefillAt || 0,
		R.setPaintRemaining($.paintRemaining),
		n0()
	);
});

q$(8, ($) => {
	if ((Z$.receive($), $.kind === "cursor_unlock")) b1();
});

q$(9, () => {});
q$(10, () => {});

q$(3, ($) => {
	if ($.users) CY($.users);
	if ((RY($.cursorOverflow ?? 0), !$.cursors)) return;

	let Q = $.cursors,
		J = Q instanceof Uint8Array
			? Q
			: Q.buffer instanceof Uint8Array ? Q.buffer : new Uint8Array(Q.buffer ?? Q),
		Y = new DataView(J.buffer, J.byteOffset, J.byteLength);

	for (let Z = 0; Z + 8 <= J.length; Z += 8) {
		let q = Y.getUint32(Z, !0),
			K = Y.getUint32(Z + 4, !0);

		DY(K, q, !0);
	}
});

q$(5, ($) => LY($.id));

q$(2, ($) => {
	(
		R.connectionId = $.id,
		$.users.forEach(lQ),
		R.openAt = $.openAt ?? 0,
		R.clockOffset = $.now ? $.now - Date.now() : 0,
		M7()
	);
});

q$(6, ($) => {
	if ((
		z7($.id, $.message, $.pos, $.username, $.clanName, $.isGlobal, $.userId),
		$.nonce
	)) return;

	if (!V0.has($.id)) {
		dQ($.id);

		return;
	}

	U7(V0.get($.id), $.message);
});

q$(11, ($) => {
	k7($.userId);
});

q$(7, async ($) => {
	let Q = 0;

	if ($.pixels) {
		let J = $.pixels,
			Y = J instanceof Uint8Array
				? J
				: J.buffer instanceof Uint8Array ? J.buffer : new Uint8Array(J.buffer ?? J),
			Z = new DataView(Y.buffer, Y.byteOffset, Y.byteLength);

		for (let q = 0; q + 5 <= Y.byteLength; q += 5) (D8(Z.getUint32(q, !0), Z.getUint8(q + 4)), Q++);
	}

	if (Q) cY();
});

function C7() {
	let $ = G("div.list.box.outset", G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")), G("div.item.box.online-modal.online-modal-loading", G("i", "Loading online users…")), {
			style: {
				maxHeight: "600px",
				overflowY: "auto",
				justifyContent: "unset"
			}
		}),
		Q = new y("Online Users", G("div.leaderboard-modal", G("p.online-modal-count", G("b#online-modal-count", j0(R.onlinePlayers || 1)), " players online"), G("p.online-modal-viewers", G("b#online-modal-viewers", j0(R.onlineViewers || 0)), " watching"), $));

	A7().then((J) => {
		if (!Q.open) return;

		(
			UZ($, J.users ?? [], J.total ?? 0),
			D7(J.viewers ?? R.onlineViewers)
		);
	}).catch(() => {
		if (!Q.open) return;

		let J = $.querySelector(".online-modal-loading");

		if (J) J.textContent = "Couldn't load the user list.";
	});
}

function UZ($, Q, J) {
	let Y = R.user?.username;

	if (Y) Q = Q.filter((X) => X.username !== Y);

	let Z = (X) => {
			let j = V0.get(X.id);

			return !!j && !j.partial && !j.hidden;
		},
		q = [...Q].sort((X, j) => {
			let P = Z(X) ? 0 : 1, C = Z(j) ? 0 : 1;

			if (P !== C) return P - C;

			return X.username.localeCompare(j.username);
		}),
		K = G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")),
		W = q.map((X) => G(
			"div.item.box.online-modal.online-modal-row.tooltip" + (Z(X) ? ".online-modal-visible" : ""),
			{
				onclick() {
					(p(), f0({ connId: X.id, username: X.username }));
				}
			},
			G("b.tooltip", X.username, { dataset: { tooltip: "Click to jump to the user!" } })
		));

	$.replaceChildren(K, ...W);

	let F = 1 + W.length, H = Math.max(0, J - F);

	if (H > 0) $.append(G("div.item.box.online-modal.online-modal-more", G("i", `+${j0(H)} more online`)));
}

function L7($, Q) {
	let J = f("#online-modal-count");

	if (J) J.textContent = j0($ || 1);
	if (Q !== void 0) D7(Q);
}

function D7($) {
	let Q = f("#online-modal-viewers");

	if (Q) Q.textContent = j0($ || 0);
}

var T7 = 0;

async function A5() {
	if ((clearTimeout(T7), !K0)) return;

	T7 = setTimeout(A5, cJ);

	let $ = performance.now(),
		Q = await v$(0, {}, pJ),
		J = Q.connectedUsers ?? R.onlinePlayers,
		Y = Q.viewers ?? R.onlineViewers;

	if ((
		R.onlinePlayers = J,
		R.onlineViewers = Y,
		R.debug.ping = performance.now() - $,
		R.activeTool == 3
	)) {
		let Z = f("#online-player-counter");

		if (Z) Z.textContent = j0(J);
	}

	(L7(J, Y), E7(J, Y), E8());
}

function w7() {
	(setInterval(_Y, J0.canvas.syncInterval), z6());
}

var CZ = (() => {
	let $ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;

	return (Q) => $.call(Q);
})();

function g$($) {
	return CZ($) === "Uint8Array";
}

function a5($) {
	return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && ($[Symbol.toStringTag] === "ArrayBuffer" || $[Symbol.toStringTag] === "SharedArrayBuffer");
}

function m8($) {
	return $ instanceof RegExp || Object.prototype.toString.call($) === "[object RegExp]";
}

function s5($) {
	return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && $[Symbol.toStringTag] === "Map";
}

function N8($) {
	return $ instanceof Date || Object.prototype.toString.call($) === "[object Date]";
}

function c0($, Q) {
	return JSON.stringify($, (J, Y) => {
		if (typeof Y === "bigint") return { $numberLong: `${Y}` }; else if (s5(Y)) return Object.fromEntries(Y);

		return Y;
	});
}

function LZ($) {
	if ($ != null && typeof $ === "object" && "stylize" in $ && typeof $.stylize === "function") return $.stylize;
}

var Z8 = 7,
	S8 = Symbol.for("@@mdb.bson.version"),
	L6 = 2147483647,
	D6 = -2147483648,
	l7 = Math.pow(2, 63) - 1,
	d7 = -Math.pow(2, 63),
	u7 = Math.pow(2, 53),
	o7 = -Math.pow(2, 53),
	r5 = 1,
	n7 = 2,
	i5 = 3,
	t7 = 4,
	e5 = 5,
	DZ = 6,
	a7 = 7,
	s7 = 8,
	r7 = 9,
	$J = 10,
	d1 = 11,
	AZ = 12,
	QJ = 13,
	i7 = 14,
	e7 = 15,
	C6 = 16,
	$G = 17,
	JJ = 18,
	QG = 19,
	JG = 255,
	YG = 127,
	TZ = 0,
	YJ = 4,
	wZ = Object.freeze({
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
		maxKey: 127
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
		return $ != null && typeof $ === "object" && "bsonError" in $ && $.bsonError === !0 && "name" in $ && "message" in $ && "stack" in $;
	}
}

class q8 extends U {
	get name() {
		return "BSONVersionError";
	}

	constructor() {
		super(`Unsupported BSON version, bson types must be from bson ${Z8}.x.x`);
	}
}

class u1 extends U {
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

var I7, h7;

function GG($, Q, J, Y) {
	if (Y) {
		I7 ??= new TextDecoder("utf8", { fatal: !0 });

		try {
			return I7.decode($.subarray(Q, J));
		} catch(Z) {
			throw new U("Invalid UTF-8 string in BSON document", { cause: Z });
		}
	}

	return (
		h7 ??= new TextDecoder("utf8", { fatal: !1 }),
		h7.decode($.subarray(Q, J))
	);
}

function ZG($, Q, J) {
	if ($.length === 0) return "";

	let Y = J - Q;

	if (Y === 0) return "";
	if (Y > 20) return null;
	if (Y === 1 && $[Q] < 128) return String.fromCharCode($[Q]);
	if (Y === 2 && $[Q] < 128 && $[Q + 1] < 128) return String.fromCharCode($[Q]) + String.fromCharCode($[Q + 1]);
	if (Y === 3 && $[Q] < 128 && $[Q + 1] < 128 && $[Q + 2] < 128) return String.fromCharCode($[Q]) + String.fromCharCode($[Q + 1]) + String.fromCharCode($[Q + 2]);

	let Z = [];

	for (let q = Q; q < J; q++) {
		let K = $[q];

		if (K > 127) return null;

		Z.push(K);
	}

	return String.fromCharCode(...Z);
}

function EZ($, Q, J) {
	if (Q.length === 0) return 0;
	if (Q.length > 25) return null;
	if ($.length - J < Q.length) return null;

	for (let Y = 0, Z = J; Y < Q.length; (Y++, Z++)) {
		let q = Q.charCodeAt(Y);

		if (q > 127) return null;

		$[Z] = q;
	}

	return Q.length;
}

function IZ($) {
	return d0.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
}

function hZ($) {
	return crypto.getRandomValues(d0.allocate($));
}

var mZ = (() => {
		let { crypto: $ } = globalThis;

		if ($ != null && typeof $.getRandomValues === "function") return hZ; else return IZ;
	})(),
	d0 = {
		isUint8Array: g$,
		toLocalBufferType($) {
			if (Buffer.isBuffer($)) return $;
			if (ArrayBuffer.isView($)) return Buffer.from($.buffer, $.byteOffset, $.byteLength);

			let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

			if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return Buffer.from($);

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

		copy($, Q, J, Y, Z) {
			return d0.toLocalBufferType($).copy(Q, J ?? 0, Y ?? 0, Z ?? $.length);
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
			let Z = J - Q <= 20 ? ZG($, Q, J) : null;

			if (Z != null) return Z;

			let q = d0.toLocalBufferType($).toString("utf8", Q, J);

			if (Y) {
				for (let K = 0; K < q.length; K++) if (q.charCodeAt(K) === 65533) {
					GG($, Q, J, !0);

					break;
				}
			}

			return q;
		},

		utf8ByteLength($) {
			return Buffer.byteLength($, "utf8");
		},

		encodeUTF8Into($, Q, J) {
			let Y = EZ($, Q, J);

			if (Y != null) return Y;

			return d0.toLocalBufferType($).write(Q, J, void 0, "utf8");
		},
		randomBytes: mZ,
		swap32($) {
			return d0.toLocalBufferType($).swap32();
		}
	};

function NZ() {
	let { navigator: $ } = globalThis;

	return typeof $ === "object" && $.product === "ReactNative";
}

function OZ($) {
	if ($ < 0) throw new RangeError(`The argument 'byteLength' is invalid. Received ${$}`);

	return G8.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
}

var BZ = (() => {
		let { crypto: $ } = globalThis;

		if ($ != null && typeof $.getRandomValues === "function") return (Q) => {
			return $.getRandomValues(G8.allocate(Q));
		}; else {
			if (NZ()) {
				let { console: Q } = globalThis;

				Q?.warn?.("BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.");
			}

			return OZ;
		}
	})(),
	m7 = /(\d|[a-f])/i,
	G8 = {
		isUint8Array: g$,
		toLocalBufferType($) {
			let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

			if (Q === "Uint8Array") return $;
			if (ArrayBuffer.isView($)) return new Uint8Array($.buffer.slice($.byteOffset, $.byteOffset + $.byteLength));
			if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return new Uint8Array($);

			throw new U("Cannot make a Uint8Array from passed potentialBuffer.");
		},

		allocate($) {
			if (typeof $ !== "number") throw new TypeError(`The "size" argument must be of type number. Received ${String($)}`);

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

			for (let Z of $) Q += Z.length;

			let J = G8.allocate(Q), Y = 0;

			for (let Z of $) (J.set(Z, Y), Y += Z.length);

			return J;
		},

		copy($, Q, J, Y, Z) {
			if (Z !== void 0 && Z < 0) throw new RangeError(`The value of "sourceEnd" is out of range. It must be >= 0. Received ${Z}`);
			if ((Z = Z ?? $.length, Y !== void 0 && (Y < 0 || Y > Z))) throw new RangeError(`The value of "sourceStart" is out of range. It must be >= 0 and <= ${Z}. Received ${Y}`);
			if ((Y = Y ?? 0, J !== void 0 && J < 0)) throw new RangeError(`The value of "targetStart" is out of range. It must be >= 0. Received ${J}`);

			J = J ?? 0;

			let q = $.subarray(Y, Z),
				K = Math.min(q.length, Q.length - J);

			if (K <= 0) return 0;

			return (Q.set(q.subarray(0, K), J), K);
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
				let Z = Q[Y], q = Q[Y + 1];

				if (!m7.test(Z)) break;
				if (!m7.test(q)) break;

				let K = Number.parseInt(`${Z}${q}`, 16);

				J.push(K);
			}

			return Uint8Array.from(J);
		},

		toHex($) {
			return Array.from($, (Q) => Q.toString(16).padStart(2, "0")).join("");
		},

		toUTF8($, Q, J, Y) {
			let Z = J - Q <= 20 ? ZG($, Q, J) : null;

			if (Z != null) return Z;

			return GG($, Q, J, Y);
		},

		utf8ByteLength($) {
			return new TextEncoder().encode($).byteLength;
		},

		encodeUTF8Into($, Q, J) {
			let Y = new TextEncoder().encode(Q);

			return ($.set(Y, J), Y.byteLength);
		},
		randomBytes: BZ,
		swap32($) {
			if ($.length % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

			for (let Q = 0; Q < $.length; Q += 4) {
				let J = $[Q],
					Y = $[Q + 1],
					Z = $[Q + 2],
					q = $[Q + 3];

				($[Q] = q, $[Q + 1] = Z, $[Q + 2] = Y, $[Q + 3] = J);
			}

			return $;
		}
	},
	SZ = typeof Buffer === "function" && Buffer.prototype?._isBuffer !== !0,
	k = SZ ? d0 : G8,
	GJ = Symbol.for("@@mdb.bson.type");

class _0 {
	get [GJ]() {
		return this._bsontype;
	}

	get [S8]() {
		return Z8;
	}

	[Symbol.for("nodejs.util.inspect.custom")]($, Q, J) {
		return this.inspect($, Q, J);
	}
}

var O8 = new Float64Array(1),
	r = new Uint8Array(O8.buffer, 0, 8);

O8[0] = -1;

var T5 = r[7] === 0,
	b = {
		isBigEndian: T5,
		getNonnegativeInt32LE($, Q) {
			if ($[Q + 3] > 127) throw new RangeError(`Size cannot be negative at offset: ${Q}`);

			return $[Q] | $[Q + 1] << 8 | $[Q + 2] << 16 | $[Q + 3] << 24;
		},

		getInt32LE($, Q) {
			return $[Q] | $[Q + 1] << 8 | $[Q + 2] << 16 | $[Q + 3] << 24;
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

		getFloat64LE: T5
			? ($, Q) => {
				return (
					r[7] = $[Q],
					r[6] = $[Q + 1],
					r[5] = $[Q + 2],
					r[4] = $[Q + 3],
					r[3] = $[Q + 4],
					r[2] = $[Q + 5],
					r[1] = $[Q + 6],
					r[0] = $[Q + 7],
					O8[0]
				);
			}
			: ($, Q) => {
				return (
					r[0] = $[Q],
					r[1] = $[Q + 1],
					r[2] = $[Q + 2],
					r[3] = $[Q + 3],
					r[4] = $[Q + 4],
					r[5] = $[Q + 5],
					r[6] = $[Q + 6],
					r[7] = $[Q + 7],
					O8[0]
				);
			},

		setInt32BE($, Q, J) {
			return (
				$[Q + 3] = J,
				J >>>= 8,
				$[Q + 2] = J,
				J >>>= 8,
				$[Q + 1] = J,
				J >>>= 8,
				$[Q] = J,
				4
			);
		},

		setInt32LE($, Q, J) {
			return (
				$[Q] = J,
				J >>>= 8,
				$[Q + 1] = J,
				J >>>= 8,
				$[Q + 2] = J,
				J >>>= 8,
				$[Q + 3] = J,
				4
			);
		},

		setBigInt64LE($, Q, J) {
			let Y = 0xffffffffn, Z = Number(J & Y);

			(
				$[Q] = Z,
				Z >>= 8,
				$[Q + 1] = Z,
				Z >>= 8,
				$[Q + 2] = Z,
				Z >>= 8,
				$[Q + 3] = Z
			);

			let q = Number(J >> 32n & Y);

			return (
				$[Q + 4] = q,
				q >>= 8,
				$[Q + 5] = q,
				q >>= 8,
				$[Q + 6] = q,
				q >>= 8,
				$[Q + 7] = q,
				8
			);
		},

		setFloat64LE: T5
			? ($, Q, J) => {
				return (
					O8[0] = J,
					$[Q] = r[7],
					$[Q + 1] = r[6],
					$[Q + 2] = r[5],
					$[Q + 3] = r[4],
					$[Q + 4] = r[3],
					$[Q + 5] = r[2],
					$[Q + 6] = r[1],
					$[Q + 7] = r[0],
					8
				);
			}
			: ($, Q, J) => {
				return (
					O8[0] = J,
					$[Q] = r[0],
					$[Q + 1] = r[1],
					$[Q + 2] = r[2],
					$[Q + 3] = r[3],
					$[Q + 4] = r[4],
					$[Q + 5] = r[5],
					$[Q + 6] = r[6],
					$[Q + 7] = r[7],
					8
				);
			}
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

		if ($ != null && typeof $ === "string" && !ArrayBuffer.isView($) && !a5($) && !Array.isArray($)) throw new U("Binary can only be constructed from Uint8Array or number[]");

		if ((
			this.sub_type = Q ?? o.BSON_BINARY_SUBTYPE_DEFAULT,
			$ == null
		)) (this.buffer = k.allocate(o.BUFFER_SIZE), this.position = 0); else (
			this.buffer = Array.isArray($) ? k.fromNumberArray($) : k.toLocalBufferType($),
			this.position = this.buffer.byteLength
		);
	}

	put($) {
		if (typeof $ === "string" && $.length !== 1) throw new U("only accepts single character String"); else if (typeof $ !== "number" && $.length !== 1) throw new U("only accepts single character Uint8Array or Array");

		let Q;

		if (typeof $ === "string") Q = $.charCodeAt(0); else if (typeof $ === "number") Q = $; else Q = $[0];
		if (Q < 0 || Q > 255) throw new U("only accepts number in a valid unsigned byte range 0-255");

		if (this.buffer.byteLength > this.position) this.buffer[this.position++] = Q; else {
			let J = k.allocate(o.BUFFER_SIZE + this.buffer.length);

			(
				J.set(this.buffer, 0),
				this.buffer = J,
				this.buffer[this.position++] = Q
			);
		}
	}

	write($, Q) {
		if ((
			Q = typeof Q === "number" ? Q : this.position,
			this.buffer.byteLength < Q + $.length
		)) {
			let J = k.allocate(this.buffer.byteLength + $.length);

			(J.set(this.buffer, 0), this.buffer = J);
		}

		if (ArrayBuffer.isView($)) (
			this.buffer.set(k.toLocalBufferType($), Q),
			this.position = Q + $.byteLength > this.position ? Q + $.length : this.position
		); else if (typeof $ === "string") throw new U("input cannot be string");
	}

	read($, Q) {
		Q = Q && Q > 0 ? Q : this.position;

		let J = $ + Q;

		return this.buffer.subarray($, J > this.position ? this.position : J);
	}

	value() {
		return this.buffer.length === this.position ? this.buffer : this.buffer.subarray(0, this.position);
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
		if (($ = $ || {}, this.sub_type === o.SUBTYPE_VECTOR)) k$(this);

		let Q = k.toBase64(this.buffer),
			J = Number(this.sub_type).toString(16);

		if ($.legacy) return { $binary: Q, $type: J.length === 1 ? "0" + J : J };

		return {
			$binary: { base64: Q, subType: J.length === 1 ? "0" + J : J }
		};
	}

	toUUID() {
		if (this.sub_type === o.SUBTYPE_UUID) return new E0(this.buffer.subarray(0, this.position));

		throw new U(`Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${o.SUBTYPE_UUID}" is currently supported.`);
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
			if (Q.legacy && typeof $.$binary === "string" && "$type" in $) (
				Y = $.$type ? parseInt($.$type, 16) : 0,
				J = k.fromBase64($.$binary)
			); else if (typeof $.$binary !== "string") (
				Y = $.$binary.subType ? parseInt($.$binary.subType, 16) : 0,
				J = k.fromBase64($.$binary.base64)
			);
		} else if ("$uuid" in $) (Y = 4, J = E0.bytesFromString($.$uuid));

		if (!J) throw new U(`Unexpected Binary Extended JSON format ${JSON.stringify($)}`);

		return Y === YJ ? new E0(J) : new o(J, Y);
	}

	inspect($, Q, J) {
		J ??= c0;

		let Y = k.toBase64(this.buffer.subarray(0, this.position)),
			Z = J(Y, Q),
			q = J(this.sub_type, Q);

		return `Binary.createFromBase64(${Z}, ${q})`;
	}

	toInt8Array() {
		if (this.sub_type !== o.SUBTYPE_VECTOR) throw new U("Binary sub_type is not Vector");
		if (this.buffer[0] !== o.VECTOR_TYPE.Int8) throw new U("Binary datatype field is not Int8");

		return (
			k$(this),
			new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
		);
	}

	toFloat32Array() {
		if (this.sub_type !== o.SUBTYPE_VECTOR) throw new U("Binary sub_type is not Vector");
		if (this.buffer[0] !== o.VECTOR_TYPE.Float32) throw new U("Binary datatype field is not Float32");

		k$(this);

		let $ = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));

		if (b.isBigEndian) k.swap32($);

		return new Float32Array($.buffer);
	}

	toPackedBits() {
		if (this.sub_type !== o.SUBTYPE_VECTOR) throw new U("Binary sub_type is not Vector");
		if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new U("Binary datatype field is not packed bit");

		return (
			k$(this),
			new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
		);
	}

	toBits() {
		if (this.sub_type !== o.SUBTYPE_VECTOR) throw new U("Binary sub_type is not Vector");
		if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new U("Binary datatype field is not packed bit");

		k$(this);

		let Q = (this.length() - 2) * 8 - this.buffer[1],
			J = new Int8Array(Q);

		for (let Y = 0; Y < J.length; Y++) {
			let Z = Y / 8 | 0,
				q = this.buffer[Z + 2],
				K = 7 - Y % 8,
				W = q >> K & 1;

			J[Y] = W;
		}

		return J;
	}

	static fromInt8Array($) {
		let Q = k.allocate($.byteLength + 2);

		(Q[0] = o.VECTOR_TYPE.Int8, Q[1] = 0);

		let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

		Q.set(J, 2);

		let Y = new this(Q, this.SUBTYPE_VECTOR);

		return (k$(Y), Y);
	}

	static fromFloat32Array($) {
		let Q = k.allocate($.byteLength + 2);

		(Q[0] = o.VECTOR_TYPE.Float32, Q[1] = 0);

		let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

		if ((Q.set(J, 2), b.isBigEndian)) k.swap32(new Uint8Array(Q.buffer, 2));

		let Y = new this(Q, this.SUBTYPE_VECTOR);

		return (k$(Y), Y);
	}

	static fromPackedBits($, Q = 0) {
		let J = k.allocate($.byteLength + 2);

		(J[0] = o.VECTOR_TYPE.PackedBit, J[1] = Q, J.set($, 2));

		let Y = new this(J, this.SUBTYPE_VECTOR);

		return (k$(Y), Y);
	}

	static fromBits($) {
		let Q = $.length + 7 >>> 3,
			J = new Uint8Array(Q + 2);

		J[0] = o.VECTOR_TYPE.PackedBit;

		let Y = $.length % 8;

		J[1] = Y === 0 ? 0 : 8 - Y;

		for (let Z = 0; Z < $.length; Z++) {
			let q = Z >>> 3, K = $[Z];

			if (K !== 0 && K !== 1) throw new U(`Invalid bit value at ${Z}: must be 0 or 1, found ${$[Z]}`);
			if (K === 0) continue;

			let W = 7 - Z % 8;

			J[q + 2] |= K << W;
		}

		return new this(J, o.SUBTYPE_VECTOR);
	}
}

function k$($) {
	if ($.sub_type !== o.SUBTYPE_VECTOR) return;

	let Q = $.position,
		J = $.buffer[0],
		Y = $.buffer[1];

	if ((J === o.VECTOR_TYPE.Float32 || J === o.VECTOR_TYPE.Int8) && Y !== 0) throw new U("Invalid Vector: padding must be zero for int8 and float32 vectors");

	if (J === o.VECTOR_TYPE.Float32) {
		if (Q !== 0 && Q - 2 !== 0 && (Q - 2) % 4 !== 0) throw new U("Invalid Vector: Float32 vector must contain a multiple of 4 bytes");
	}

	if (J === o.VECTOR_TYPE.PackedBit && Y !== 0 && Q === 2) throw new U("Invalid Vector: padding must be zero for packed bit vectors that are empty");
	if (J === o.VECTOR_TYPE.PackedBit && Y > 7) throw new U(`Invalid Vector: padding must be a value between 0 and 7. found: ${Y}`);
}

var w5 = 16,
	_Z = /^[0-9A-F]{32}$/i,
	yZ = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;

class E0 extends o {
	constructor($) {
		let Q;

		if ($ == null) Q = E0.generate(); else if ($ instanceof E0) Q = k.toLocalBufferType(new Uint8Array($.buffer)); else if (ArrayBuffer.isView($) && $.byteLength === w5) Q = k.toLocalBufferType($); else if (typeof $ === "string") Q = E0.bytesFromString($); else throw new U("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");

		super(Q, YJ);
	}

	get id() {
		return this.buffer;
	}

	set id($) {
		this.buffer = $;
	}

	toHexString($ = !0) {
		if ($) return [
			k.toHex(this.buffer.subarray(0, 4)),
			k.toHex(this.buffer.subarray(4, 6)),
			k.toHex(this.buffer.subarray(6, 8)),
			k.toHex(this.buffer.subarray(8, 10)),
			k.toHex(this.buffer.subarray(10, 16))
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
		if ($ instanceof E0) return k.equals($.id, this.id);

		try {
			return k.equals(new E0($).id, this.id);
		} catch {
			return !1;
		}
	}

	toBinary() {
		return new o(this.id, o.SUBTYPE_UUID);
	}

	static generate() {
		let $ = k.randomBytes(w5);

		return ($[6] = $[6] & 15 | 64, $[8] = $[8] & 63 | 128, $);
	}

	static isValid($) {
		if (!$) return !1;
		if (typeof $ === "string") return E0.isValidUUIDString($);
		if (g$($)) return $.byteLength === w5;

		return $._bsontype === "Binary" && $.sub_type === this.SUBTYPE_UUID && $.buffer.byteLength === 16;
	}

	static createFromHexString($) {
		let Q = E0.bytesFromString($);

		return new E0(Q);
	}

	static createFromBase64($) {
		return new E0(k.fromBase64($));
	}

	static bytesFromString($) {
		if (!E0.isValidUUIDString($)) throw new U("UUID string representation must be 32 hex digits or canonical hyphenated representation");

		return k.fromHex($.replace(/-/g, ""));
	}

	static isValidUUIDString($) {
		return _Z.test($) || yZ.test($);
	}

	inspect($, Q, J) {
		return (J ??= c0, `new UUID(${J(this.toHexString(), Q)})`);
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
		(this.code = $.toString(), this.scope = Q ?? null);
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
			Z = Y.includes(`
`);

		if (this.scope != null) Y += `,${Z
			? `
`
			: " "}${J(this.scope, Q)}`;

		let q = Z && this.scope === null;

		return `new Code(${Z
			? `
`
			: ""}${Y}${q
			? `
`
			: ""})`;
	}
}

function qG($) {
	return $ != null && typeof $ === "object" && "$id" in $ && $.$id != null && "$ref" in $ && typeof $.$ref === "string" && (!("$db" in $) || ("$db" in $) && typeof $.$db === "string");
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

		let Z = $.split(".");

		if (Z.length === 2) (J = Z.shift(), $ = Z.shift());

		(
			this.collection = $,
			this.oid = Q,
			this.db = J,
			this.fields = Y || {}
		);
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

		return (Q = Object.assign(Q, this.fields), Q);
	}

	static fromExtendedJSON($) {
		let Q = Object.assign({}, $);

		return (
			delete Q.$ref,
			delete Q.$id,
			delete Q.$db,
			new C$($.$ref, $.$id, $.$db, Q)
		);
	}

	inspect($, Q, J) {
		J ??= c0;

		let Y = [
			J(this.namespace, Q),
			J(this.oid, Q),
			...this.db ? [J(this.db, Q)] : [],
			...Object.keys(this.fields).length > 0 ? [J(this.fields, Q)] : []
		];

		return (
			Y[1] = J === c0 ? `new ObjectId(${Y[1]})` : Y[1],
			`new DBRef(${Y.join(", ")})`
		);
	}
}

function KG($) {
	if ($ === "") return $;

	let Q = 0, J = $[Q] === "-", Y = $[Q] === "+";

	if (Y || J) Q += 1;

	let Z = !1;

	for (; Q < $.length && $[Q] === "0"; ++Q) Z = !0;

	if (!Z) return Y ? $.slice(1) : $;

	return `${J ? "-" : ""}${$.length === Q ? "0" : $.slice(Q)}`;
}

function vZ($, Q) {
	Q = Q ?? 10;

	let J = ("0123456789abcdefghijklmnopqrstuvwxyz").slice(0, Q);

	return new RegExp(`[^-+${J}]`, "i").test($) ? !1 : $;
}

var l0 = void 0;

try {
	l0 = new WebAssembly.Instance(
		new WebAssembly.Module(new Uint8Array([
			0,
			97,
			115,
			109,
			1,
			0,
			0,
			0,
			1,
			13,
			2,
			96,
			0,
			1,
			127,
			96,
			4,
			127,
			127,
			127,
			127,
			1,
			127,
			3,
			7,
			6,
			0,
			1,
			1,
			1,
			1,
			1,
			6,
			6,
			1,
			127,
			1,
			65,
			0,
			11,
			7,
			50,
			6,
			3,
			109,
			117,
			108,
			0,
			1,
			5,
			100,
			105,
			118,
			95,
			115,
			0,
			2,
			5,
			100,
			105,
			118,
			95,
			117,
			0,
			3,
			5,
			114,
			101,
			109,
			95,
			115,
			0,
			4,
			5,
			114,
			101,
			109,
			95,
			117,
			0,
			5,
			8,
			103,
			101,
			116,
			95,
			104,
			105,
			103,
			104,
			0,
			0,
			10,
			191,
			1,
			6,
			4,
			0,
			35,
			0,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			126,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			127,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			128,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			129,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			130,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11
		])),
		{}
	).exports;
} catch {}

var N7 = 65536,
	gZ = 16777216,
	B8 = N7 * N7,
	FG = B8 * B8,
	O7 = FG / 2,
	B7 = {},
	S7 = {},
	xZ = 20,
	pZ = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;

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
			Z = typeof Q === "number" ? Q : 0,
			q = typeof $ === "string"
				? V.fromString($, Y)
				: typeof $ === "bigint"
					? V.fromBigInt($, Y)
					: { low: $ | 0, high: Z | 0, unsigned: Y };

		(
			this.low = q.low,
			this.high = q.high,
			this.unsigned = q.unsigned
		);
	}

	static TWO_PWR_24 = V.fromInt(gZ);
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
		let J, Y, Z;

		if (Q) {
			if (($ >>>= 0, Z = 0 <= $ && $ < 256)) {
				if ((Y = S7[$], Y)) return Y;
			}

			if ((J = V.fromBits($, ($ | 0) < 0 ? -1 : 0, !0), Z)) S7[$] = J;

			return J;
		} else {
			if (($ |= 0, Z = -128 <= $ && $ < 128)) {
				if ((Y = B7[$], Y)) return Y;
			}

			if ((J = V.fromBits($, $ < 0 ? -1 : 0, !1), Z)) B7[$] = J;

			return J;
		}
	}

	static fromNumber($, Q) {
		if (isNaN($)) return Q ? V.UZERO : V.ZERO;

		if (Q) {
			if ($ < 0) return V.UZERO;
			if ($ >= FG) return V.MAX_UNSIGNED_VALUE;
		} else {
			if ($ <= -O7) return V.MIN_VALUE;
			if ($ + 1 >= O7) return V.MAX_VALUE;
		}

		if ($ < 0) return V.fromNumber(-$, Q).neg();

		return V.fromBits($ % B8 | 0, $ / B8 | 0, Q);
	}

	static fromBigInt($, Q) {
		let J = 0xffffffffn, Y = 32n;

		return new V(Number($ & J), Number($ >> Y & J), Q);
	}

	static _fromString($, Q, J) {
		if ($.length === 0) throw new U("empty string");
		if (J < 2 || 36 < J) throw new U("radix");

		let Y;

		if ((Y = $.indexOf("-")) > 0) throw new U("interior hyphen"); else if (Y === 0) return V._fromString($.substring(1), Q, J).neg();

		let Z = V.fromNumber(Math.pow(J, 8)), q = V.ZERO;

		for (let K = 0; K < $.length; K += 8) {
			let W = Math.min(8, $.length - K),
				F = parseInt($.substring(K, K + W), J);

			if (W < 8) {
				let H = V.fromNumber(Math.pow(J, W));

				q = q.mul(H).add(V.fromNumber(F));
			} else (q = q.mul(Z), q = q.add(V.fromNumber(F)));
		}

		return (q.unsigned = Q, q);
	}

	static fromStringStrict($, Q, J) {
		let Y = !1;

		if (typeof Q === "number") (J = Q, Q = !1); else Y = !!Q;
		if ((J ??= 10, $.trim() !== $)) throw new U(`Input: '${$}' contains leading and/or trailing whitespace`);
		if (!vZ($, J)) throw new U(`Input: '${$}' contains invalid characters for radix: ${J}`);

		let Z = KG($), q = V._fromString(Z, Y, J);

		if (q.toString(J).toLowerCase() !== Z.toLowerCase()) throw new U(`Input: ${$} is not representable as ${q.unsigned ? "an unsigned" : "a signed"} 64-bit Long ${J != null ? `with radix: ${J}` : ""}`);

		return q;
	}

	static fromString($, Q, J) {
		let Y = !1;

		if (typeof Q === "number") (J = Q, Q = !1); else Y = !!Q;
		if ((J ??= 10, $ === "NaN" && J < 24)) return V.ZERO; else if (($ === "Infinity" || $ === "+Infinity" || $ === "-Infinity") && J < 35) return V.ZERO;

		return V._fromString($, Y, J);
	}

	static fromBytes($, Q, J) {
		return J ? V.fromBytesLE($, Q) : V.fromBytesBE($, Q);
	}

	static fromBytesLE($, Q) {
		return new V($[0] | $[1] << 8 | $[2] << 16 | $[3] << 24, $[4] | $[5] << 8 | $[6] << 16 | $[7] << 24, Q);
	}

	static fromBytesBE($, Q) {
		return new V($[4] << 24 | $[5] << 16 | $[6] << 8 | $[7], $[0] << 24 | $[1] << 16 | $[2] << 8 | $[3], Q);
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
			Z = this.low & 65535,
			q = $.high >>> 16,
			K = $.high & 65535,
			W = $.low >>> 16,
			F = $.low & 65535,
			H = 0,
			X = 0,
			j = 0,
			P = 0;

		return (
			P += Z + F,
			j += P >>> 16,
			P &= 65535,
			j += Y + W,
			X += j >>> 16,
			j &= 65535,
			X += J + K,
			H += X >>> 16,
			X &= 65535,
			H += Q + q,
			H &= 65535,
			V.fromBits(j << 16 | P, H << 16 | X, this.unsigned)
		);
	}

	and($) {
		if (!V.isLong($)) $ = V.fromValue($);

		return V.fromBits(this.low & $.low, this.high & $.high, this.unsigned);
	}

	compare($) {
		if (!V.isLong($)) $ = V.fromValue($);
		if (this.eq($)) return 0;

		let Q = this.isNegative(), J = $.isNegative();

		if (Q && !J) return -1;
		if (!Q && J) return 1;
		if (!this.unsigned) return this.sub($).isNegative() ? -1 : 1;

		return $.high >>> 0 > this.high >>> 0 || $.high === this.high && $.low >>> 0 > this.low >>> 0 ? -1 : 1;
	}

	comp($) {
		return this.compare($);
	}

	divide($) {
		if (!V.isLong($)) $ = V.fromValue($);
		if ($.isZero()) throw new U("division by zero");

		if (l0) {
			if (!this.unsigned && this.high === -2147483648 && $.low === -1 && $.high === -1) return this;

			let Z = (this.unsigned ? l0.div_u : l0.div_s)(this.low, this.high, $.low, $.high);

			return V.fromBits(Z, l0.get_high(), this.unsigned);
		}

		if (this.isZero()) return this.unsigned ? V.UZERO : V.ZERO;

		let Q, J, Y;

		if (!this.unsigned) {
			if (this.eq(V.MIN_VALUE)) if ($.eq(V.ONE) || $.eq(V.NEG_ONE)) return V.MIN_VALUE; else if ($.eq(V.MIN_VALUE)) return V.ONE; else if ((Q = this.shr(1).div($).shl(1), Q.eq(V.ZERO))) return $.isNegative() ? V.ONE : V.NEG_ONE; else return (J = this.sub($.mul(Q)), Y = Q.add(J.div($)), Y); else if ($.eq(V.MIN_VALUE)) return this.unsigned ? V.UZERO : V.ZERO;

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

			let Z = Math.ceil(Math.log(Q) / Math.LN2),
				q = Z <= 48 ? 1 : Math.pow(2, Z - 48),
				K = V.fromNumber(Q),
				W = K.mul($);

			while (W.isNegative() || W.gt(J)) (Q -= q, K = V.fromNumber(Q, this.unsigned), W = K.mul($));

			if (K.isZero()) K = V.ONE;

			(Y = Y.add(K), J = J.sub(W));
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

		let $ = this.high !== 0 ? this.high : this.low, Q;

		for (Q = 31; Q > 0; Q--) if (($ & 1 << Q) !== 0) break;

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
		if (this.isNegative()) if ($.isNegative()) return this.neg().mul($.neg()); else return this.neg().mul($).neg(); else if ($.isNegative()) return this.mul($.neg()).neg();
		if (this.lt(V.TWO_PWR_24) && $.lt(V.TWO_PWR_24)) return V.fromNumber(this.toNumber() * $.toNumber(), this.unsigned);

		let Q = this.high >>> 16,
			J = this.high & 65535,
			Y = this.low >>> 16,
			Z = this.low & 65535,
			q = $.high >>> 16,
			K = $.high & 65535,
			W = $.low >>> 16,
			F = $.low & 65535,
			H = 0,
			X = 0,
			j = 0,
			P = 0;

		return (
			P += Z * F,
			j += P >>> 16,
			P &= 65535,
			j += Y * F,
			X += j >>> 16,
			j &= 65535,
			j += Z * W,
			X += j >>> 16,
			j &= 65535,
			X += J * F,
			H += X >>> 16,
			X &= 65535,
			X += Y * W,
			H += X >>> 16,
			X &= 65535,
			X += Z * K,
			H += X >>> 16,
			X &= 65535,
			H += Q * F + J * W + Y * K + Z * q,
			H &= 65535,
			V.fromBits(j << 16 | P, H << 16 | X, this.unsigned)
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
		if (($ &= 63) === 0) return this; else if ($ < 32) return V.fromBits(this.low << $, this.high << $ | this.low >>> 32 - $, this.unsigned); else return V.fromBits(0, this.low << $ - 32, this.unsigned);
	}

	shl($) {
		return this.shiftLeft($);
	}

	shiftRight($) {
		if (V.isLong($)) $ = $.toInt();
		if (($ &= 63) === 0) return this; else if ($ < 32) return V.fromBits(this.low >>> $ | this.high << 32 - $, this.high >> $, this.unsigned); else return V.fromBits(this.high >> $ - 32, this.high >= 0 ? 0 : -1, this.unsigned);
	}

	shr($) {
		return this.shiftRight($);
	}

	shiftRightUnsigned($) {
		if (V.isLong($)) $ = $.toInt();

		if (($ &= 63, $ === 0)) return this; else {
			let Q = this.high;

			if ($ < 32) {
				let J = this.low;

				return V.fromBits(J >>> $ | Q << 32 - $, Q >>> $, this.unsigned);
			} else if ($ === 32) return V.fromBits(Q, 0, this.unsigned); else return V.fromBits(Q >>> $ - 32, 0, this.unsigned);
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
		let $ = this.high, Q = this.low;

		return [
			Q & 255,
			Q >>> 8 & 255,
			Q >>> 16 & 255,
			Q >>> 24,
			$ & 255,
			$ >>> 8 & 255,
			$ >>> 16 & 255,
			$ >>> 24
		];
	}

	toBytesBE() {
		let $ = this.high, Q = this.low;

		return [
			$ >>> 24,
			$ >>> 16 & 255,
			$ >>> 8 & 255,
			$ & 255,
			Q >>> 24,
			Q >>> 16 & 255,
			Q >>> 8 & 255,
			Q & 255
		];
	}

	toSigned() {
		if (!this.unsigned) return this;

		return V.fromBits(this.low, this.high, !1);
	}

	toString($) {
		if (($ = $ || 10, $ < 2 || 36 < $)) throw new U("radix");
		if (this.isZero()) return "0";

		if (this.isNegative()) if (this.eq(V.MIN_VALUE)) {
			let Z = V.fromNumber($),
				q = this.div(Z),
				K = q.mul(Z).sub(this);

			return q.toString($) + K.toInt().toString($);
		} else return "-" + this.neg().toString($);

		let Q = V.fromNumber(Math.pow($, 6), this.unsigned),
			J = this,
			Y = "";

		while (!0) {
			let Z = J.div(Q),
				K = (J.sub(Z.mul(Q)).toInt() >>> 0).toString($);

			if ((J = Z, J.isZero())) return K + Y; else {
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

		if ($.$numberLong.length > xZ) throw new U("$numberLong string is too long");
		if (!pZ.test($.$numberLong)) throw new U(`$numberLong string "${$.$numberLong}" is in an invalid format`);

		if (J) {
			let q = BigInt($.$numberLong);

			return BigInt.asIntN(64, q);
		}

		let Z = V.fromString($.$numberLong);

		if (Y) return Z.toNumber();

		return Z;
	}

	inspect($, Q, J) {
		J ??= c0;

		let Y = J(this.toString(), Q),
			Z = this.unsigned ? `, ${J(this.unsigned, Q)}` : "";

		return `new Long(${Y}${Z})`;
	}
}

var cZ = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
	bZ = /^(\+|-)?(Infinity|inf)$/i,
	fZ = /^(\+|-)?NaN$/i,
	I8 = 6111,
	k6 = -6176,
	_7 = 6176,
	y7 = 34,
	E5 = k.fromNumberArray([124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
	v7 = k.fromNumberArray([248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
	g7 = k.fromNumberArray([120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
	lZ = /^([-+])?(\d+)?$/,
	dZ = 31,
	x7 = 16383,
	uZ = 30,
	oZ = 31;

function p7($) {
	return !isNaN(parseInt($, 10));
}

function nZ($) {
	let Q = V.fromNumber(1e9), J = V.fromNumber(0);

	if (!$.parts[0] && !$.parts[1] && !$.parts[2] && !$.parts[3]) return { quotient: $, rem: J };

	for (let Y = 0; Y <= 3; Y++) (
		J = J.shiftLeft(32),
		J = J.add(new V($.parts[Y], 0)),
		$.parts[Y] = J.div(Q).low,
		J = J.modulo(Q)
	);

	return { quotient: $, rem: J };
}

function tZ($, Q) {
	if (!$ && !Q) return { high: V.fromNumber(0), low: V.fromNumber(0) };

	let J = $.shiftRightUnsigned(32),
		Y = new V($.getLowBits(), 0),
		Z = Q.shiftRightUnsigned(32),
		q = new V(Q.getLowBits(), 0),
		K = J.multiply(Z),
		W = J.multiply(q),
		F = Y.multiply(Z),
		H = Y.multiply(q);

	return (
		K = K.add(W.shiftRightUnsigned(32)),
		W = new V(W.getLowBits(), 0).add(F).add(H.shiftRightUnsigned(32)),
		K = K.add(W.shiftRightUnsigned(32)),
		H = W.shiftLeft(32).add(new V(H.getLowBits(), 0)),
		{ high: K, low: H }
	);
}

function aZ($, Q) {
	let J = $.high >>> 0, Y = Q.high >>> 0;

	if (J < Y) return !0; else if (J === Y) {
		let Z = $.low >>> 0, q = Q.low >>> 0;

		if (Z < q) return !0;
	}

	return !1;
}

function a0($, Q) {
	throw new U(`"${$}" is not a valid Decimal128 string - ${Q}`);
}

class B0 extends _0 {
	get _bsontype() {
		return "Decimal128";
	}

	bytes;

	constructor($) {
		super();

		if (typeof $ === "string") this.bytes = B0.fromString($).bytes; else if ($ instanceof Uint8Array || g$($)) {
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
			Z = !1,
			q = !1,
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

		let _ = $.match(cZ),
			I = $.match(bZ),
			h = $.match(fZ);

		if (!_ && !I && !h || $.length === 0) throw new U("" + $ + " not a valid Decimal128 string");

		if (_) {
			let w = _[2], B = _[4], n = _[5], Q0 = _[6];

			if (B && Q0 === void 0) a0($, "missing exponent power");
			if (B && w === void 0) a0($, "missing exponent base");
			if (B === void 0 && (n || Q0)) a0($, "missing e before exponent");
		}

		if ($[L] === "+" || $[L] === "-") (Y = !0, J = $[L++] === "-");

		if (!p7($[L]) && $[L] !== ".") {
			if ($[L] === "i" || $[L] === "I") return new B0(J ? v7 : g7); else if ($[L] === "N") return new B0(E5);
		}

		while (p7($[L]) || $[L] === ".") {
			if ($[L] === ".") {
				if (Z) a0($, "contains multiple periods");

				(Z = !0, L = L + 1);

				continue;
			}

			if (P < y7) {
				if ($[L] !== "0" || q) {
					if (!q) X = W;

					(q = !0, j[C++] = parseInt($[L], 10), P = P + 1);
				}
			}

			if (q) F = F + 1;
			if (Z) H = H + 1;

			(W = W + 1, L = L + 1);
		}

		if (Z && !W) throw new U("" + $ + " not a valid Decimal128 string");

		if ($[L] === "e" || $[L] === "E") {
			let w = $.substr(++L).match(lZ);

			if (!w || !w[2]) return new B0(E5);

			(A = parseInt(w[0], 10), L = L + w[0].length);
		}

		if ($[L]) return new B0(E5);
		if (!P) (j[0] = 0, F = 1, P = 1, K = 0); else if ((z = P - 1, K = F, K !== 1)) while ($[X + K - 1 + Number(Y) + Number(Z)] === "0") K = K - 1;
		if (A <= H && H > A + 16384) A = k6; else A = A - H;

		while (A > I8) {
			if ((z = z + 1, z >= y7)) {
				if (K === 0) {
					A = I8;

					break;
				}

				a0($, "overflow");
			}

			A = A - 1;
		}

		if (Q.allowRounding) {
			while (A < k6 || P < F) {
				if (z === 0 && K < P) {
					(A = k6, K = 0);

					break;
				}

				if (P < F) F = F - 1; else z = z - 1;

				if (A < I8) A = A + 1; else {
					if (j.join("").match(/^0+$/)) {
						A = I8;

						break;
					}

					a0($, "overflow");
				}
			}

			if (z + 1 < K) {
				let w = W;

				if (Z) (X = X + 1, w = w + 1);
				if (Y) (X = X + 1, w = w + 1);

				let B = parseInt($[X + z + 1], 10), n = 0;

				if (B >= 5) {
					if ((n = 1, B === 5)) {
						n = j[z] % 2 === 1 ? 1 : 0;

						for (let Q0 = X + z + 2; Q0 < w; Q0++) if (parseInt($[Q0], 10)) {
							n = 1;

							break;
						}
					}
				}

				if (n) {
					let Q0 = z;

					for (; Q0 >= 0; Q0--) if (++j[Q0] > 9) {
						if ((j[Q0] = 0, Q0 === 0)) if (A < I8) (A = A + 1, j[Q0] = 1); else return new B0(J ? v7 : g7);
					} else break;
				}
			}
		} else {
			while (A < k6 || P < F) {
				if (z === 0) {
					if (K === 0) {
						A = k6;

						break;
					}

					a0($, "exponent underflow");
				}

				if (P < F) {
					if ($[F - 1 + Number(Y) + Number(Z)] !== "0" && K !== 0) a0($, "inexact rounding");

					F = F - 1;
				} else {
					if (j[z] !== 0) a0($, "inexact rounding");

					z = z - 1;
				}

				if (A < I8) A = A + 1; else a0($, "overflow");
			}

			if (z + 1 < K) {
				if (Z) X = X + 1;
				if (Y) X = X + 1;
				if (parseInt($[X + z + 1], 10) !== 0) a0($, "inexact rounding");
			}
		}

		if ((v = V.fromNumber(0), S = V.fromNumber(0), K === 0)) (v = V.fromNumber(0), S = V.fromNumber(0)); else if (z < 17) {
			let w = 0;

			(S = V.fromNumber(j[w++]), v = new V(0, 0));

			for (; w <= z; w++) (
				S = S.multiply(V.fromNumber(10)),
				S = S.add(V.fromNumber(j[w]))
			);
		} else {
			let w = 0;

			v = V.fromNumber(j[w++]);

			for (; w <= z - 17; w++) (
				v = v.multiply(V.fromNumber(10)),
				v = v.add(V.fromNumber(j[w]))
			);

			S = V.fromNumber(j[w++]);

			for (; w <= z; w++) (
				S = S.multiply(V.fromNumber(10)),
				S = S.add(V.fromNumber(j[w]))
			);
		}

		let T = tZ(v, V.fromString("100000000000000000"));

		if ((T.low = T.low.add(S), aZ(T.low, S))) T.high = T.high.add(V.fromNumber(1));

		M = A + _7;

		let O = { low: V.fromNumber(0), high: V.fromNumber(0) };

		if (T.high.shiftRightUnsigned(49).and(V.fromNumber(1)).equals(V.fromNumber(1))) (
			O.high = O.high.or(V.fromNumber(3).shiftLeft(61)),
			O.high = O.high.or(V.fromNumber(M).and(V.fromNumber(16383).shiftLeft(47))),
			O.high = O.high.or(T.high.and(V.fromNumber(140737488355327)))
		); else (
			O.high = O.high.or(V.fromNumber(M & 16383).shiftLeft(49)),
			O.high = O.high.or(T.high.and(V.fromNumber(562949953421311)))
		);

		if ((O.low = T.low, J)) O.high = O.high.or(V.fromString("9223372036854775808"));

		let m = k.allocateUnsafe(16);

		return (
			L = 0,
			m[L++] = O.low.low & 255,
			m[L++] = O.low.low >> 8 & 255,
			m[L++] = O.low.low >> 16 & 255,
			m[L++] = O.low.low >> 24 & 255,
			m[L++] = O.low.high & 255,
			m[L++] = O.low.high >> 8 & 255,
			m[L++] = O.low.high >> 16 & 255,
			m[L++] = O.low.high >> 24 & 255,
			m[L++] = O.high.low & 255,
			m[L++] = O.high.low >> 8 & 255,
			m[L++] = O.high.low >> 16 & 255,
			m[L++] = O.high.low >> 24 & 255,
			m[L++] = O.high.high & 255,
			m[L++] = O.high.high >> 8 & 255,
			m[L++] = O.high.high >> 16 & 255,
			m[L++] = O.high.high >> 24 & 255,
			new B0(m)
		);
	}

	toString() {
		let $, Q = 0, J = new Array(36);

		for (let L = 0; L < J.length; L++) J[L] = 0;

		let Y = 0,
			Z = !1,
			q,
			K = { parts: [0, 0, 0, 0] },
			W,
			F,
			H = [];

		Y = 0;

		let X = this.bytes,
			j = X[Y++] | X[Y++] << 8 | X[Y++] << 16 | X[Y++] << 24,
			P = X[Y++] | X[Y++] << 8 | X[Y++] << 16 | X[Y++] << 24,
			C = X[Y++] | X[Y++] << 8 | X[Y++] << 16 | X[Y++] << 24,
			z = X[Y++] | X[Y++] << 8 | X[Y++] << 16 | X[Y++] << 24;

		if ((
			Y = 0,
			({ low: new V(j, P), high: new V(C, z) }).high.lessThan(V.ZERO)
		)) H.push("-");

		let v = z >> 26 & dZ;

		if (v >> 3 === 3) if (v === uZ) return H.join("") + "Infinity"; else if (v === oZ) return "NaN"; else ($ = z >> 15 & x7, q = 8 + (z >> 14 & 1)); else (q = z >> 14 & 7, $ = z >> 17 & x7);

		let S = $ - _7;

		if ((
			K.parts[0] = (z & 16383) + ((q & 15) << 14),
			K.parts[1] = C,
			K.parts[2] = P,
			K.parts[3] = j,
			K.parts[0] === 0 && K.parts[1] === 0 && K.parts[2] === 0 && K.parts[3] === 0
		)) Z = !0; else for (F = 3; F >= 0; F--) {
			let L = 0, _ = nZ(K);

			if ((K = _.quotient, L = _.rem.low, !L)) continue;

			for (W = 8; W >= 0; W--) (J[F * 9 + W] = L % 10, L = Math.floor(L / 10));
		}

		if (Z) (Q = 1, J[Y] = 0); else {
			Q = 36;

			while (!J[Y]) (Q = Q - 1, Y = Y + 1);
		}

		let M = Q - 1 + S;

		if (M >= 34 || M <= -7 || S > 0) {
			if (Q > 34) {
				if ((H.push("0"), S > 0)) H.push(`E+${S}`); else if (S < 0) H.push(`E${S}`);

				return H.join("");
			}

			if ((H.push(`${J[Y++]}`), Q = Q - 1, Q)) H.push(".");

			for (let L = 0; L < Q; L++) H.push(`${J[Y++]}`);

			if ((H.push("E"), M > 0)) H.push(`+${M}`); else H.push(`${M}`);
		} else if (S >= 0) for (let L = 0; L < Q; L++) H.push(`${J[Y++]}`); else {
			let L = Q + S;

			if (L > 0) for (let _ = 0; _ < L; _++) H.push(`${J[Y++]}`); else H.push("0");

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
		return (J ??= c0, `new Decimal128(${J(this.toString(), Q)})`);
	}
}

class s0 extends _0 {
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

		if ($ === "NaN") return new s0(NaN);
		if ($ === "Infinity") return new s0(1 / 0);
		if ($ === "-Infinity") return new s0(-1 / 0);
		if (!Number.isFinite(Q)) throw new U(`Input: ${$} is not representable as a Double`);
		if ($.trim() !== $) throw new U(`Input: '${$}' contains whitespace`);
		if ($ === "") throw new U("Input is an empty string");
		if ((/[^-0-9.+eE]/).test($)) throw new U(`Input: '${$}' is not in decimal or exponential notation`);

		return new s0(Q);
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
		if ($ && ($.legacy || $.relaxed && isFinite(this.value))) return this.value;
		if (Object.is(Math.sign(this.value), -0)) return { $numberDouble: "-0.0" };

		return {
			$numberDouble: Number.isInteger(this.value) ? this.value.toFixed(1) : this.value.toString()
		};
	}

	static fromExtendedJSON($, Q) {
		let J = parseFloat($.$numberDouble);

		return Q && Q.relaxed ? J : new s0(J);
	}

	inspect($, Q, J) {
		return (J ??= c0, `new Double(${J(this.value, Q)})`);
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
		let Q = KG($), J = Number($);

		if (L6 < J) throw new U(`Input: '${$}' is larger than the maximum value for Int32`); else if (D6 > J) throw new U(`Input: '${$}' is smaller than the minimum value for Int32`); else if (!Number.isSafeInteger(J)) throw new U(`Input: '${$}' is not a safe integer`); else if (J.toString() !== Q) throw new U(`Input: '${$}' is not a valid Int32 string`);

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
		return (J ??= c0, `new Int32(${J(this.value, Q)})`);
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

var Y8 = null, U6 = new WeakMap();

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
			if (typeof $.id !== "string" && !ArrayBuffer.isView($.id)) throw new U("Argument passed in must have an id that is of type string or Buffer");
			if ("toHexString" in $ && typeof $.toHexString === "function") Q = k.fromHex($.toHexString()); else Q = $.id;
		} else Q = $;

		if (Q == null) this.buffer = F0.generate(); else if (ArrayBuffer.isView(Q) && Q.byteLength === 12) this.buffer = k.toLocalBufferType(Q); else if (typeof Q === "string") if (F0.validateHexString(Q)) {
			if ((this.buffer = k.fromHex(Q), F0.cacheHexString)) U6.set(this, Q);
		} else throw new U("input must be a 24 character hex string, 12 byte Uint8Array, or an integer"); else throw new U("Argument passed in does not match the accepted types");
	}

	get id() {
		return this.buffer;
	}

	set id($) {
		if ((this.buffer = $, F0.cacheHexString)) U6.set(this, k.toHex($));
	}

	static validateHexString($) {
		if ($?.length !== 24) return !1;

		for (let Q = 0; Q < 24; Q++) {
			let J = $.charCodeAt(Q);

			if (J >= 48 && J <= 57 || J >= 97 && J <= 102 || J >= 65 && J <= 70) continue;

			return !1;
		}

		return !0;
	}

	toHexString() {
		if (F0.cacheHexString) {
			let Q = U6.get(this);

			if (Q) return Q;
		}

		let $ = k.toHex(this.id);

		if (F0.cacheHexString) U6.set(this, $);

		return $;
	}

	static getInc() {
		return F0.index = (F0.index + 1) % 16777215;
	}

	static generate($) {
		if (typeof $ !== "number") $ = Math.floor(Date.now() / 1000);

		let Q = F0.getInc(), J = k.allocateUnsafe(12);

		if ((b.setInt32BE(J, 0, $), Y8 === null)) Y8 = k.randomBytes(5);

		return (
			J[4] = Y8[0],
			J[5] = Y8[1],
			J[6] = Y8[2],
			J[7] = Y8[3],
			J[8] = Y8[4],
			J[11] = Q & 255,
			J[10] = Q >> 8 & 255,
			J[9] = Q >> 16 & 255,
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
			let Q = $.toHexString(), J = this.toHexString();

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
			$[Q] = this.buffer[0],
			$[Q + 1] = this.buffer[1],
			$[Q + 2] = this.buffer[2],
			$[Q + 3] = this.buffer[3],
			$[Q + 4] = this.buffer[4],
			$[Q + 5] = this.buffer[5],
			$[Q + 6] = this.buffer[6],
			$[Q + 7] = this.buffer[7],
			$[Q + 8] = this.buffer[8],
			$[Q + 9] = this.buffer[9],
			$[Q + 10] = this.buffer[10],
			$[Q + 11] = this.buffer[11],
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
		return F0.cacheHexString && U6.has(this);
	}

	inspect($, Q, J) {
		return (J ??= c0, `new ObjectId(${J(this.toHexString(), Q)})`);
	}
}

function f1($, Q, J) {
	let Y = 5;

	if (Array.isArray($)) for (let Z = 0; Z < $.length; Z++) Y += c7(Z.toString(), $[Z], Q, !0, J); else {
		if (typeof $?.toBSON === "function") $ = $.toBSON();

		for (let Z of Object.keys($)) Y += c7(Z, $[Z], Q, !1, J);
	}

	return Y;
}

function c7($, Q, J = !1, Y = !1, Z = !1) {
	if (typeof Q?.toBSON === "function") Q = Q.toBSON();

	switch (typeof Q) {
		case "string":
			return 1 + k.utf8ByteLength($) + 1 + 4 + k.utf8ByteLength(Q) + 1;

		case "number":
			if (Math.floor(Q) === Q && Q >= o7 && Q <= u7) if (Q >= D6 && Q <= L6) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 5; else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9; else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9;

		case "undefined":
			if (Y || !Z) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1;
			return 0;

		case "boolean":
			return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 2;

		case "object":
			if (Q != null && typeof Q._bsontype === "string" && Q[S8] !== Z8) throw new q8(); else if (Q == null || Q._bsontype === "MinKey" || Q._bsontype === "MaxKey") return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1; else if (Q._bsontype === "ObjectId") return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 13; else if (Q instanceof Date || N8(Q)) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9; else if (ArrayBuffer.isView(Q) || Q instanceof ArrayBuffer || a5(Q)) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 6 + Q.byteLength; else if (Q._bsontype === "Long" || Q._bsontype === "Double" || Q._bsontype === "Timestamp") return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9; else if (Q._bsontype === "Decimal128") return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 17; else if (Q._bsontype === "Code") if (Q.scope != null && Object.keys(Q.scope).length > 0) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1 + 4 + 4 + k.utf8ByteLength(Q.code.toString()) + 1 + f1(Q.scope, J, Z); else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1 + 4 + k.utf8ByteLength(Q.code.toString()) + 1; else if (Q._bsontype === "Binary") {
				let q = Q;

				if (q.sub_type === o.SUBTYPE_BYTE_ARRAY) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1 + 4); else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1);
			} else if (Q._bsontype === "Symbol") return ($ != null ? k.utf8ByteLength($) + 1 : 0) + k.utf8ByteLength(Q.value) + 4 + 1 + 1; else if (Q._bsontype === "DBRef") {
				let q = Object.assign({ $ref: Q.collection, $id: Q.oid }, Q.fields);

				if (Q.db != null) q.$db = Q.db;

				return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1 + f1(q, J, Z);
			} else if (Q instanceof RegExp || m8(Q)) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1 + k.utf8ByteLength(Q.source) + 1 + (Q.global ? 1 : 0) + (Q.ignoreCase ? 1 : 0) + (Q.multiline ? 1 : 0) + 1; else if (Q._bsontype === "BSONRegExp") return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1 + k.utf8ByteLength(Q.pattern) + 1 + k.utf8ByteLength(Q.options) + 1; else return ($ != null ? k.utf8ByteLength($) + 1 : 0) + f1(Q, J, Z) + 1;

		case "function":
			if (J) return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 1 + 4 + k.utf8ByteLength(Q.toString()) + 1;
			return 0;

		case "bigint":
			return ($ != null ? k.utf8ByteLength($) + 1 : 0) + 9;

		case "symbol":
			return 0;

		default:
			throw new U(`Unrecognized JS type: ${typeof Q}`);
	}
}

function sZ($) {
	return $.split("").sort().join("");
}

class r0 extends _0 {
	get _bsontype() {
		return "BSONRegExp";
	}

	pattern;
	options;

	constructor($, Q) {
		super();

		if ((
			this.pattern = $,
			this.options = sZ(Q ?? ""),
			this.pattern.indexOf("\x00") !== -1
		)) throw new U(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);

		if (this.options.indexOf("\x00") !== -1) throw new U(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);

		for (let J = 0; J < this.options.length; J++) if (!(this.options[J] === "i" || this.options[J] === "m" || this.options[J] === "x" || this.options[J] === "l" || this.options[J] === "s" || this.options[J] === "u")) throw new U(`The regular expression option [${this.options[J]}] is not supported`);
	}

	static parseOptions($) {
		return $ ? $.split("").sort().join("") : "";
	}

	toExtendedJSON($) {
		if (($ = $ || {}, $.legacy)) return { $regex: this.pattern, $options: this.options };

		return {
			$regularExpression: { pattern: this.pattern, options: this.options }
		};
	}

	static fromExtendedJSON($) {
		if ("$regex" in $) if (typeof $.$regex !== "string") {
			if ($.$regex._bsontype === "BSONRegExp") return $;
		} else return new r0($.$regex, r0.parseOptions($.$options));

		if ("$regularExpression" in $) return new r0($.$regularExpression.pattern, r0.parseOptions($.$regularExpression.options));

		throw new U(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify($)}`);
	}

	inspect($, Q, J) {
		let Y = LZ(Q) ?? ((K) => K);

		J ??= c0;

		let Z = Y(J(this.pattern), "regexp"),
			q = Y(J(this.options), "regexp");

		return `new BSONRegExp(${Z}, ${q})`;
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
		return (J ??= c0, `new BSONSymbol(${J(this.value, Q)})`);
	}
}

var rZ = V;

class F$ extends rZ {
	get _bsontype() {
		return "Timestamp";
	}

	get [GJ]() {
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
		if ($ == null) super(0, 0, !0); else if (typeof $ === "bigint") super($, !0); else if (V.isLong($)) super($.low, $.high, !0); else if (typeof $ === "object" && "t" in $ && "i" in $) {
			if (typeof $.t !== "number" && (typeof $.t !== "object" || $.t._bsontype !== "Int32")) throw new U("Timestamp constructed from { t, i } must provide t as a number");
			if (typeof $.i !== "number" && (typeof $.i !== "object" || $.i._bsontype !== "Int32")) throw new U("Timestamp constructed from { t, i } must provide i as a number");

			let Q = Number($.t), J = Number($.i);

			if (Q < 0 || Number.isNaN(Q)) throw new U("Timestamp constructed from { t, i } must provide a positive t");
			if (J < 0 || Number.isNaN(J)) throw new U("Timestamp constructed from { t, i } must provide a positive i");
			if (Q > 4294967295) throw new U("Timestamp constructed from { t, i } must provide t equal or less than uint32 max");
			if (J > 4294967295) throw new U("Timestamp constructed from { t, i } must provide i equal or less than uint32 max");

			super(J, Q, !0);
		} else throw new U("A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }");
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

		let Y = J(this.t, Q), Z = J(this.i, Q);

		return `new Timestamp({ t: ${Y}, i: ${Z} })`;
	}
}

var iZ = V.fromNumber(u7), eZ = V.fromNumber(o7);

function WG($, Q, J) {
	Q = Q == null ? {} : Q;

	let Y = Q && Q.index ? Q.index : 0,
		Z = b.getInt32LE($, Y);

	if (Z < 5) throw new U(`bson size must be >= 5, is ${Z}`);
	if (Q.allowObjectSmallerThanBufferSize && $.length < Z) throw new U(`buffer length ${$.length} must be >= bson size ${Z}`);
	if (!Q.allowObjectSmallerThanBufferSize && $.length !== Z) throw new U(`buffer length ${$.length} must === bson size ${Z}`);
	if (Z + Y > $.byteLength) throw new U(`(bson size ${Z} + options.index ${Y} must be <= buffer length ${$.byteLength})`);
	if ($[Y + Z - 1] !== 0) throw new U("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");

	return l1($, Y, Q, J);
}

var $q = /^\$ref$|^\$id$|^\$db$/;

function l1($, Q, J, Y = !1) {
	let Z = J.fieldsAsRaw == null ? null : J.fieldsAsRaw,
		q = J.raw == null ? !1 : J.raw,
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

	if (typeof A === "boolean") C = A; else {
		P = !1;

		let I = Object.keys(A).map(function (h) {
			return A[h];
		});

		if (I.length === 0) throw new U("UTF-8 validation setting cannot be empty");
		if (typeof I[0] !== "boolean") throw new U("Invalid UTF-8 validation option, must specify boolean values");
		if ((C = I[0], !I.every((h) => h === C))) throw new U("Invalid UTF-8 validation option - keys must be all true or all false");
	}

	if (!P) {
		z = new Set();

		for (let I of Object.keys(A)) z.add(I);
	}

	let v = Q;

	if ($.length < 5) throw new U("corrupt bson message < 5 bytes long");

	let S = b.getInt32LE($, Q);

	if ((Q += 4, S < 5 || S > $.length)) throw new U("corrupt bson message");

	let M = Y ? [] : {}, L = 0, _ = Y ? !1 : null;

	while (!0) {
		let I = $[Q++];

		if (I === 0) break;

		let h = Q;

		while ($[h] !== 0 && h < $.length) h++;

		if (h >= $.byteLength) throw new U("Bad BSON Document: illegal CString");

		let T = Y ? L++ : k.toUTF8($, Q, h, !1), O = !0;

		if (P || z?.has(T)) O = C; else O = !C;
		if (_ !== !1 && T[0] === "$") _ = $q.test(T);

		let m;

		if ((Q = h + 1, I === n7)) {
			let w = b.getInt32LE($, Q);

			if ((Q += 4, w <= 0 || w > $.length - Q || $[Q + w - 1] !== 0)) throw new U("bad string length in bson");

			(m = k.toUTF8($, Q, Q + w - 1, O), Q = Q + w);
		} else if (I === a7) {
			let w = k.allocateUnsafe(12);

			for (let B = 0; B < 12; B++) w[B] = $[Q + B];

			(m = new F0(w), Q = Q + 12);
		} else if (I === C6 && H === !1) (m = new c$(b.getInt32LE($, Q)), Q += 4); else if (I === C6) (m = b.getInt32LE($, Q), Q += 4); else if (I === r5) {
			if ((m = b.getFloat64LE($, Q), Q += 8, H === !1)) m = new s0(m);
		} else if (I === r7) {
			let w = b.getInt32LE($, Q),
				B = b.getInt32LE($, Q + 4);

			(Q += 8, m = new Date(new V(w, B).toNumber()));
		} else if (I === s7) {
			if ($[Q] !== 0 && $[Q] !== 1) throw new U("illegal boolean type value");

			m = $[Q++] === 1;
		} else if (I === i5) {
			let w = Q, B = b.getInt32LE($, Q);

			if (B <= 0 || B > $.length - Q) throw new U("bad embedded document length in bson");

			if (q) m = $.subarray(Q, Q + B); else {
				let n = J;

				if (!P) n = { ...J, validation: { utf8: O } };

				m = l1($, w, n, !1);
			}

			Q = Q + B;
		} else if (I === t7) {
			let w = Q,
				B = b.getInt32LE($, Q),
				n = J,
				Q0 = Q + B;

			if (Z && Z[T]) n = { ...J, raw: !0 };
			if (!P) n = { ...n, validation: { utf8: O } };
			if ((m = l1($, w, n, !0), Q = Q + B, $[Q - 1] !== 0)) throw new U("invalid array terminator byte");
			if (Q !== Q0) throw new U("corrupted array bson");
		} else if (I === DZ) m = void 0; else if (I === $J) m = null; else if (I === JJ) if (X) (m = b.getBigInt64LE($, Q), Q += 8); else {
			let w = b.getInt32LE($, Q),
				B = b.getInt32LE($, Q + 4);

			Q += 8;

			let n = new V(w, B);

			if (F && H === !0) m = n.lessThanOrEqual(iZ) && n.greaterThanOrEqual(eZ) ? n.toNumber() : n; else m = n;
		} else if (I === QG) {
			let w = k.allocateUnsafe(16);

			for (let B = 0; B < 16; B++) w[B] = $[Q + B];

			(Q = Q + 16, m = new B0(w));
		} else if (I === e5) {
			let w = b.getInt32LE($, Q);

			Q += 4;

			let B = w, n = $[Q++];

			if (w < 0) throw new U("Negative binary type element size found");
			if (w > $.byteLength) throw new U("Binary type size larger than document size");

			if (n === o.SUBTYPE_BYTE_ARRAY) {
				if ((w = b.getInt32LE($, Q), Q += 4, w < 0)) throw new U("Negative binary type element size found for subtype 0x02");
				if (w > B - 4) throw new U("Binary type with subtype 0x02 contains too long binary size");
				if (w < B - 4) throw new U("Binary type with subtype 0x02 contains too short binary size");
			}

			if (W && H) m = k.toLocalBufferType($.subarray(Q, Q + w)); else if ((
				m = new o($.subarray(Q, Q + w), n),
				n === YJ && E0.isValid(m)
			)) m = m.toUUID();

			Q = Q + w;
		} else if (I === d1 && K === !1) {
			h = Q;

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.length) throw new U("Bad BSON Document: illegal CString");

			let w = k.toUTF8($, Q, h, !1);

			(Q = h + 1, h = Q);

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.length) throw new U("Bad BSON Document: illegal CString");

			let B = k.toUTF8($, Q, h, !1);

			Q = h + 1;

			let n = new Array(B.length);

			for (h = 0; h < B.length; h++) switch (B[h]) {
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
		} else if (I === d1 && K === !0) {
			h = Q;

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.length) throw new U("Bad BSON Document: illegal CString");

			let w = k.toUTF8($, Q, h, !1);

			(Q = h + 1, h = Q);

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.length) throw new U("Bad BSON Document: illegal CString");

			let B = k.toUTF8($, Q, h, !1);

			(Q = h + 1, m = new r0(w, B));
		} else if (I === i7) {
			let w = b.getInt32LE($, Q);

			if ((Q += 4, w <= 0 || w > $.length - Q || $[Q + w - 1] !== 0)) throw new U("bad string length in bson");

			let B = k.toUTF8($, Q, Q + w - 1, O);

			(m = H ? B : new v8(B), Q = Q + w);
		} else if (I === $G) (
			m = new F$({ i: b.getUint32LE($, Q), t: b.getUint32LE($, Q + 4) }),
			Q += 8
		); else if (I === JG) m = new y8(); else if (I === YG) m = new _8(); else if (I === QJ) {
			let w = b.getInt32LE($, Q);

			if ((Q += 4, w <= 0 || w > $.length - Q || $[Q + w - 1] !== 0)) throw new U("bad string length in bson");

			let B = k.toUTF8($, Q, Q + w - 1, O);

			(m = new p$(B), Q = Q + w);
		} else if (I === e7) {
			let w = b.getInt32LE($, Q);

			if ((Q += 4, w < 13)) throw new U("code_w_scope total size shorter minimum expected length");

			let B = b.getInt32LE($, Q);

			if ((Q += 4, B <= 0 || B > $.length - Q || $[Q + B - 1] !== 0)) throw new U("bad string length in bson");

			let n = k.toUTF8($, Q, Q + B - 1, O);

			Q = Q + B;

			let Q0 = Q,
				l = b.getInt32LE($, Q),
				e = l1($, Q0, J, !1);

			if ((Q = Q + l, w < 8 + l + B)) throw new U("code_w_scope total size is too short, truncating scope");
			if (w > 8 + l + B) throw new U("code_w_scope total size is too long, clips outer document");

			m = new p$(n, e);
		} else if (I === AZ) {
			let w = b.getInt32LE($, Q);

			if ((Q += 4, w <= 0 || w > $.length - Q || $[Q + w - 1] !== 0)) throw new U("bad string length in bson");

			let B = k.toUTF8($, Q, Q + w - 1, O);

			Q = Q + w;

			let n = k.allocateUnsafe(12);

			for (let l = 0; l < 12; l++) n[l] = $[Q + l];

			let Q0 = new F0(n);

			(Q = Q + 12, m = new C$(B, Q0));
		} else throw new U(`Detected unknown BSON type ${I.toString(16)} for fieldname "${T}"`);

		if (T === "__proto__") Object.defineProperty(M, T, { value: m, writable: !0, enumerable: !0, configurable: !0 }); else M[T] = m;
	}

	if (S !== Q - v) {
		if (Y) throw new U("corrupt array bson");

		throw new U("corrupt object bson");
	}

	if (!_) return M;

	if (qG(M)) {
		let I = Object.assign({}, M);

		return (
			delete I.$ref,
			delete I.$id,
			delete I.$db,
			new C$(M.$ref, M.$id, M.$db, I)
		);
	}

	return M;
}

var o1 = /\x00/,
	b7 = new Set(["$db", "$ref", "$id", "$clusterTime"]);

function I5($, Q, J, Y) {
	$[Y++] = n7;

	let Z = k.encodeUTF8Into($, Q, Y);

	(Y = Y + Z + 1, $[Y - 1] = 0);

	let q = k.encodeUTF8Into($, J, Y + 4);

	return (b.setInt32LE($, Y, q + 1), Y = Y + 4 + q, $[Y++] = 0, Y);
}

function h5($, Q, J, Y) {
	let q = !Object.is(J, -0) && Number.isSafeInteger(J) && J <= L6 && J >= D6 ? C6 : r5;

	$[Y++] = q;

	let K = k.encodeUTF8Into($, Q, Y);

	if ((Y = Y + K, $[Y++] = 0, q === C6)) Y += b.setInt32LE($, Y, J); else Y += b.setFloat64LE($, Y, J);

	return Y;
}

function m5($, Q, J, Y) {
	$[Y++] = JJ;

	let Z = k.encodeUTF8Into($, Q, Y);

	return (Y += Z, $[Y++] = 0, Y += b.setBigInt64LE($, Y, J), Y);
}

function h8($, Q, J, Y) {
	$[Y++] = $J;

	let Z = k.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y);
}

function N5($, Q, J, Y) {
	$[Y++] = s7;

	let Z = k.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, $[Y++] = J ? 1 : 0, Y);
}

function O5($, Q, J, Y) {
	$[Y++] = r7;

	let Z = k.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = V.fromNumber(J.getTime()),
		K = q.getLowBits(),
		W = q.getHighBits();

	return (Y += b.setInt32LE($, Y, K), Y += b.setInt32LE($, Y, W), Y);
}

function B5($, Q, J, Y) {
	$[Y++] = d1;

	let Z = k.encodeUTF8Into($, Q, Y);

	if ((
		Y = Y + Z,
		$[Y++] = 0,
		J.source && J.source.match(o1) != null
	)) throw new U("value " + J.source + " must not contain null bytes");

	if ((
		Y = Y + k.encodeUTF8Into($, J.source, Y),
		$[Y++] = 0,
		J.ignoreCase
	)) $[Y++] = 105;

	if (J.global) $[Y++] = 115;
	if (J.multiline) $[Y++] = 109;

	return ($[Y++] = 0, Y);
}

function S5($, Q, J, Y) {
	$[Y++] = d1;

	let Z = k.encodeUTF8Into($, Q, Y);

	if ((Y = Y + Z, $[Y++] = 0, J.pattern.match(o1) != null)) throw new U("pattern " + J.pattern + " must not contain null bytes");

	(Y = Y + k.encodeUTF8Into($, J.pattern, Y), $[Y++] = 0);

	let q = J.options.split("").sort().join("");

	return (Y = Y + k.encodeUTF8Into($, q, Y), $[Y++] = 0, Y);
}

function _5($, Q, J, Y) {
	if (J === null) $[Y++] = $J; else if (J._bsontype === "MinKey") $[Y++] = JG; else $[Y++] = YG;

	let Z = k.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y);
}

function y5($, Q, J, Y) {
	$[Y++] = a7;

	let Z = k.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y += J.serializeInto($, Y), Y);
}

function v5($, Q, J, Y) {
	$[Y++] = e5;

	let Z = k.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = J.length;

	if ((Y += b.setInt32LE($, Y, q), $[Y++] = TZ, q <= 16)) for (let K = 0; K < q; K++) $[Y + K] = J[K]; else $.set(J, Y);

	return (Y = Y + q, Y);
}

function g5($, Q, J, Y, Z, q, K, W, F) {
	if (F.has(J)) throw new U("Cannot convert circular structure to BSON");

	(F.add(J), $[Y++] = Array.isArray(J) ? t7 : i5);

	let H = k.encodeUTF8Into($, Q, Y);

	(Y = Y + H, $[Y++] = 0);

	let X = A6($, J, Z, Y, q + 1, K, W, F);

	return (F.delete(J), X);
}

function x5($, Q, J, Y) {
	$[Y++] = QG;

	let Z = k.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	for (let q = 0; q < 16; q++) $[Y + q] = J.bytes[q];

	return Y + 16;
}

function p5($, Q, J, Y) {
	$[Y++] = J._bsontype === "Long" ? JJ : $G;

	let Z = k.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = J.getLowBits(), K = J.getHighBits();

	return (Y += b.setInt32LE($, Y, q), Y += b.setInt32LE($, Y, K), Y);
}

function c5($, Q, J, Y) {
	(J = J.valueOf(), $[Y++] = C6);

	let Z = k.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y += b.setInt32LE($, Y, J), Y);
}

function b5($, Q, J, Y) {
	$[Y++] = r5;

	let Z = k.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y += b.setFloat64LE($, Y, J.value), Y);
}

function f5($, Q, J, Y) {
	$[Y++] = QJ;

	let Z = k.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = J.toString(),
		K = k.encodeUTF8Into($, q, Y + 4) + 1;

	return (b.setInt32LE($, Y, K), Y = Y + 4 + K - 1, $[Y++] = 0, Y);
}

function l5($, Q, J, Y, Z = !1, q = 0, K = !1, W = !0, F) {
	if (J.scope && typeof J.scope === "object") {
		$[Y++] = e7;

		let H = k.encodeUTF8Into($, Q, Y);

		(Y = Y + H, $[Y++] = 0);

		let X = Y, j = J.code;

		Y = Y + 4;

		let P = k.encodeUTF8Into($, j, Y + 4) + 1;

		(b.setInt32LE($, Y, P), $[Y + 4 + P - 1] = 0, Y = Y + P + 4);

		let C = A6($, J.scope, Z, Y, q + 1, K, W, F);

		Y = C - 1;

		let z = C - X;

		(X += b.setInt32LE($, X, z), $[Y++] = 0);
	} else {
		$[Y++] = QJ;

		let H = k.encodeUTF8Into($, Q, Y);

		(Y = Y + H, $[Y++] = 0);

		let X = J.code.toString(),
			j = k.encodeUTF8Into($, X, Y + 4) + 1;

		(b.setInt32LE($, Y, j), Y = Y + 4 + j - 1, $[Y++] = 0);
	}

	return Y;
}

function d5($, Q, J, Y) {
	$[Y++] = e5;

	let Z = k.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let { buffer: q, position: K } = J;

	if (J.sub_type === o.SUBTYPE_BYTE_ARRAY) K = K + 4;

	if ((
		Y += b.setInt32LE($, Y, K),
		$[Y++] = J.sub_type,
		J.sub_type === o.SUBTYPE_BYTE_ARRAY
	)) (K = K - 4, Y += b.setInt32LE($, Y, K));

	if (J.sub_type === o.SUBTYPE_VECTOR) k$(J);
	if (K <= 16) for (let W = 0; W < K; W++) $[Y + W] = q[W]; else $.set(q, Y);

	return (Y = Y + J.position, Y);
}

function u5($, Q, J, Y) {
	$[Y++] = i7;

	let Z = k.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = k.encodeUTF8Into($, J.value, Y + 4) + 1;

	return (b.setInt32LE($, Y, q), Y = Y + 4 + q - 1, $[Y++] = 0, Y);
}

function o5($, Q, J, Y, Z, q, K) {
	$[Y++] = i5;

	let W = k.encodeUTF8Into($, Q, Y);

	(Y = Y + W, $[Y++] = 0);

	let F = Y,
		H = { $ref: J.collection || J.namespace, $id: J.oid };

	if (J.db != null) H.$db = J.db;

	H = Object.assign(H, J.fields);

	let X = A6($, H, !1, Y, Z + 1, q, !0, K),
		j = X - F;

	return (F += b.setInt32LE($, Y, j), X);
}

function A6($, Q, J, Y, Z, q, K, W) {
	if (W == null) {
		if (Q == null) return ($[0] = 5, $[1] = 0, $[2] = 0, $[3] = 0, $[4] = 0, 5);
		if (Array.isArray(Q)) throw new U("serialize does not support an array as the root input");
		if (typeof Q !== "object") throw new U("serialize does not support non-object as the root input"); else if ("_bsontype" in Q && typeof Q._bsontype === "string") throw new U("BSON types cannot be serialized as a document"); else if (N8(Q) || m8(Q) || g$(Q) || a5(Q)) throw new U("date, regexp, typedarray, and arraybuffer cannot be BSON documents");

		W = new Set();
	}

	W.add(Q);

	let F = Y + 4;

	if (Array.isArray(Q)) for (let X = 0; X < Q.length; X++) {
		let j = `${X}`, P = Q[X];

		if (typeof P?.toBSON === "function") P = P.toBSON();

		let C = typeof P;

		if (P === void 0) F = h8($, j, P, F); else if (P === null) F = h8($, j, P, F); else if (C === "string") F = I5($, j, P, F); else if (C === "number") F = h5($, j, P, F); else if (C === "bigint") F = m5($, j, P, F); else if (C === "boolean") F = N5($, j, P, F); else if (C === "object" && P._bsontype == null) if (P instanceof Date || N8(P)) F = O5($, j, P, F); else if (P instanceof Uint8Array || g$(P)) F = v5($, j, P, F); else if (P instanceof RegExp || m8(P)) F = B5($, j, P, F); else F = g5($, j, P, F, J, Z, q, K, W); else if (C === "object") {
			if (P[S8] !== Z8) throw new q8(); else if (P._bsontype === "ObjectId") F = y5($, j, P, F); else if (P._bsontype === "Decimal128") F = x5($, j, P, F); else if (P._bsontype === "Long" || P._bsontype === "Timestamp") F = p5($, j, P, F); else if (P._bsontype === "Double") F = b5($, j, P, F); else if (P._bsontype === "Code") F = l5($, j, P, F, J, Z, q, K, W); else if (P._bsontype === "Binary") F = d5($, j, P, F); else if (P._bsontype === "BSONSymbol") F = u5($, j, P, F); else if (P._bsontype === "DBRef") F = o5($, j, P, F, Z, q, W); else if (P._bsontype === "BSONRegExp") F = S5($, j, P, F); else if (P._bsontype === "Int32") F = c5($, j, P, F); else if (P._bsontype === "MinKey" || P._bsontype === "MaxKey") F = _5($, j, P, F); else if (typeof P._bsontype !== "undefined") throw new U(`Unrecognized or invalid _bsontype: ${String(P._bsontype)}`);
		} else if (C === "function" && q) F = f5($, j, P, F);
	} else if (Q instanceof Map || s5(Q)) {
		let X = Q.entries(), j = !1;

		while (!j) {
			let P = X.next();

			if ((j = !!P.done, j)) continue;

			let C = P.value ? P.value[0] : void 0,
				z = P.value ? P.value[1] : void 0;

			if (typeof z?.toBSON === "function") z = z.toBSON();

			let A = typeof z;

			if (typeof C === "string" && !b7.has(C)) {
				if (C.match(o1) != null) throw new U("key " + C + " must not contain null bytes");

				if (J) {
					if (C[0] === "$") throw new U("key " + C + " must not start with '$'"); else if (C.includes(".")) throw new U("key " + C + " must not contain '.'");
				}
			}

			if (z === void 0) {
				if (K === !1) F = h8($, C, z, F);
			} else if (z === null) F = h8($, C, z, F); else if (A === "string") F = I5($, C, z, F); else if (A === "number") F = h5($, C, z, F); else if (A === "bigint") F = m5($, C, z, F); else if (A === "boolean") F = N5($, C, z, F); else if (A === "object" && z._bsontype == null) if (z instanceof Date || N8(z)) F = O5($, C, z, F); else if (z instanceof Uint8Array || g$(z)) F = v5($, C, z, F); else if (z instanceof RegExp || m8(z)) F = B5($, C, z, F); else F = g5($, C, z, F, J, Z, q, K, W); else if (A === "object") {
				if (z[S8] !== Z8) throw new q8(); else if (z._bsontype === "ObjectId") F = y5($, C, z, F); else if (z._bsontype === "Decimal128") F = x5($, C, z, F); else if (z._bsontype === "Long" || z._bsontype === "Timestamp") F = p5($, C, z, F); else if (z._bsontype === "Double") F = b5($, C, z, F); else if (z._bsontype === "Code") F = l5($, C, z, F, J, Z, q, K, W); else if (z._bsontype === "Binary") F = d5($, C, z, F); else if (z._bsontype === "BSONSymbol") F = u5($, C, z, F); else if (z._bsontype === "DBRef") F = o5($, C, z, F, Z, q, W); else if (z._bsontype === "BSONRegExp") F = S5($, C, z, F); else if (z._bsontype === "Int32") F = c5($, C, z, F); else if (z._bsontype === "MinKey" || z._bsontype === "MaxKey") F = _5($, C, z, F); else if (typeof z._bsontype !== "undefined") throw new U(`Unrecognized or invalid _bsontype: ${String(z._bsontype)}`);
			} else if (A === "function" && q) F = f5($, C, z, F);
		}
	} else {
		if (typeof Q?.toBSON === "function") {
			if ((Q = Q.toBSON(), Q != null && typeof Q !== "object")) throw new U("toBSON function did not return an object");
		}

		for (let X of Object.keys(Q)) {
			let j = Q[X];

			if (typeof j?.toBSON === "function") j = j.toBSON();

			let P = typeof j;

			if (typeof X === "string" && !b7.has(X)) {
				if (X.match(o1) != null) throw new U("key " + X + " must not contain null bytes");

				if (J) {
					if (X[0] === "$") throw new U("key " + X + " must not start with '$'"); else if (X.includes(".")) throw new U("key " + X + " must not contain '.'");
				}
			}

			if (j === void 0) {
				if (K === !1) F = h8($, X, j, F);
			} else if (j === null) F = h8($, X, j, F); else if (P === "string") F = I5($, X, j, F); else if (P === "number") F = h5($, X, j, F); else if (P === "bigint") F = m5($, X, j, F); else if (P === "boolean") F = N5($, X, j, F); else if (P === "object" && j._bsontype == null) if (j instanceof Date || N8(j)) F = O5($, X, j, F); else if (j instanceof Uint8Array || g$(j)) F = v5($, X, j, F); else if (j instanceof RegExp || m8(j)) F = B5($, X, j, F); else F = g5($, X, j, F, J, Z, q, K, W); else if (P === "object") {
				if (j[S8] !== Z8) throw new q8(); else if (j._bsontype === "ObjectId") F = y5($, X, j, F); else if (j._bsontype === "Decimal128") F = x5($, X, j, F); else if (j._bsontype === "Long" || j._bsontype === "Timestamp") F = p5($, X, j, F); else if (j._bsontype === "Double") F = b5($, X, j, F); else if (j._bsontype === "Code") F = l5($, X, j, F, J, Z, q, K, W); else if (j._bsontype === "Binary") F = d5($, X, j, F); else if (j._bsontype === "BSONSymbol") F = u5($, X, j, F); else if (j._bsontype === "DBRef") F = o5($, X, j, F, Z, q, W); else if (j._bsontype === "BSONRegExp") F = S5($, X, j, F); else if (j._bsontype === "Int32") F = c5($, X, j, F); else if (j._bsontype === "MinKey" || j._bsontype === "MaxKey") F = _5($, X, j, F); else if (typeof j._bsontype !== "undefined") throw new U(`Unrecognized or invalid _bsontype: ${String(j._bsontype)}`);
			} else if (P === "function" && q) F = f5($, X, j, F);
		}
	}

	(W.delete(Q), $[F++] = 0);

	let H = F - Y;

	return (Y += b.setInt32LE($, Y, H), F);
}

function Qq($) {
	return $ != null && typeof $ === "object" && "_bsontype" in $ && typeof $._bsontype === "string";
}

var Jq = {
	$oid: F0,
	$binary: o,
	$uuid: o,
	$symbol: v8,
	$numberInt: c$,
	$numberDecimal: B0,
	$numberDouble: s0,
	$numberLong: V,
	$minKey: y8,
	$maxKey: _8,
	$regex: r0,
	$regularExpression: r0,
	$timestamp: F$
};

function XG($, Q = {}) {
	if (typeof $ === "number") {
		let Y = $ <= L6 && $ >= D6, Z = $ <= l7 && $ >= d7;

		if (Q.relaxed || Q.legacy) return $;

		if (Number.isInteger($) && !Object.is($, -0)) {
			if (Y) return new c$($);

			if (Z) {
				if (Q.useBigInt64) return BigInt($);

				return V.fromNumber($);
			}
		}

		return new s0($);
	}

	if ($ == null || typeof $ !== "object") return $;
	if ($.$undefined) return null;

	let J = Object.keys($).filter((Y) => Y.startsWith("$") && $[Y] != null);

	for (let Y = 0; Y < J.length; Y++) {
		let Z = Jq[J[Y]];

		if (Z) return Z.fromExtendedJSON($, Q);
	}

	if ($.$date != null) {
		let Y = $.$date, Z = new Date();

		if (Q.legacy) if (typeof Y === "number") Z.setTime(Y); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new u1(`Unrecognized type for EJSON date: ${typeof Y}`); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (V.isLong(Y)) Z.setTime(Y.toNumber()); else if (typeof Y === "number" && Q.relaxed) Z.setTime(Y); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new u1(`Unrecognized type for EJSON date: ${typeof Y}`);

		return Z;
	}

	if ($.$code != null) {
		let Y = Object.assign({}, $);

		if ($.$scope) Y.$scope = XG($.$scope);

		return p$.fromExtendedJSON($);
	}

	if (qG($) || $.$dbPointer) {
		let Y = $.$ref ? $ : $.$dbPointer;

		if (Y instanceof C$) return Y;

		let Z = Object.keys(Y).filter((K) => K.startsWith("$")),
			q = !0;

		if ((
			Z.forEach((K) => {
				if (["$ref", "$id", "$db"].indexOf(K) === -1) q = !1;
			}),
			q
		)) return C$.fromExtendedJSON(Y);
	}

	return $;
}

function Yq($, Q) {
	return $.map((J, Y) => {
		Q.seenObjects.push({ propertyName: `index ${Y}`, obj: null });

		try {
			return U$(J, Q);
		} finally {
			Q.seenObjects.pop();
		}
	});
}

function f7($) {
	let Q = $.toISOString();

	return $.getUTCMilliseconds() !== 0 ? Q : Q.slice(0, -5) + "Z";
}

function U$($, Q) {
	if ($ instanceof Map || s5($)) {
		let J = Object.create(null);

		for (let [Y, Z] of $) {
			if (typeof Y !== "string") throw new U("Can only serialize maps with string keys");

			J[Y] = Z;
		}

		return U$(J, Q);
	}

	if ((typeof $ === "object" || typeof $ === "function") && $ !== null) {
		let J = Q.seenObjects.findIndex((Y) => Y.obj === $);

		if (J !== -1) {
			let Y = Q.seenObjects.map((X) => X.propertyName),
				Z = Y.slice(0, J).map((X) => `${X} -> `).join(""),
				q = Y[J],
				K = " -> " + Y.slice(J + 1, Y.length - 1).map((X) => `${X} -> `).join(""),
				W = Y[Y.length - 1],
				F = (" ").repeat(Z.length + q.length / 2),
				H = ("-").repeat(K.length + (q.length + W.length) / 2 - 1);

			throw new U(`Converting circular structure to EJSON:
    ${Z}${q}${K}${W}
    ${F}\\${H}/`);
		}

		Q.seenObjects[Q.seenObjects.length - 1].obj = $;
	}

	if (Array.isArray($)) return Yq($, Q);
	if ($ === void 0) return Q.ignoreUndefined ? void 0 : null;

	if ($ instanceof Date || N8($)) {
		let J = $.getTime(),
			Y = J > -1 && J < 253402318800000;

		if (Q.legacy) return Q.relaxed && Y ? { $date: $.getTime() } : { $date: f7($) };

		return Q.relaxed && Y
			? { $date: f7($) }
			: { $date: { $numberLong: $.getTime().toString() } };
	}

	if (typeof $ === "number" && (!Q.relaxed || !isFinite($))) {
		if (Number.isInteger($) && !Object.is($, -0)) {
			if ($ >= D6 && $ <= L6) return { $numberInt: $.toString() };
			if ($ >= d7 && $ <= l7) return { $numberLong: $.toString() };
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
			let Z = $.toString().match(/[gimuy]*$/);

			if (Z) J = Z[0];
		}

		return new r0($.source, J).toExtendedJSON(Q);
	}

	if ($ != null && typeof $ === "object") return Zq($, Q);

	return $;
}

var Gq = {
	Binary: ($) => new o($.value(), $.sub_type),
	Code: ($) => new p$($.code, $.scope),
	DBRef: ($) => new C$($.collection || $.namespace, $.oid, $.db, $.fields),
	Decimal128: ($) => new B0($.bytes),
	Double: ($) => new s0($.value),
	Int32: ($) => new c$($.value),
	Long: ($) => V.fromBits($.low != null ? $.low : $.low_, $.low != null ? $.high : $.high_, $.low != null ? $.unsigned : $.unsigned_),
	MaxKey: () => new _8(),
	MinKey: () => new y8(),
	ObjectId: ($) => new F0($),
	BSONRegExp: ($) => new r0($.pattern, $.options),
	BSONSymbol: ($) => new v8($.value),
	Timestamp: ($) => F$.fromBits($.low, $.high)
};

function Zq($, Q) {
	if ($ == null || typeof $ !== "object") throw new U("not an object instance");

	let J = $._bsontype;

	if (typeof J === "undefined") {
		let Y = {};

		for (let Z of Object.keys($)) {
			Q.seenObjects.push({ propertyName: Z, obj: null });

			try {
				let q = U$($[Z], Q);

				if (Z === "__proto__") Object.defineProperty(Y, Z, { value: q, writable: !0, enumerable: !0, configurable: !0 }); else Y[Z] = q;
			} finally {
				Q.seenObjects.pop();
			}
		}

		return Y;
	} else if ($ != null && typeof $ === "object" && typeof $._bsontype === "string" && $[S8] !== Z8) throw new q8(); else if (Qq($)) {
		let Y = $;

		if (typeof Y.toExtendedJSON !== "function") {
			let Z = Gq[$._bsontype];

			if (!Z) throw new U("Unrecognized or invalid _bsontype: " + $._bsontype);

			Y = Z(Y);
		}

		if (J === "Code" && Y.scope) Y = new p$(Y.code, U$(Y.scope, Q)); else if (J === "DBRef" && Y.oid) Y = new C$(U$(Y.collection, Q), U$(Y.oid, Q), U$(Y.db, Q), U$(Y.fields, Q));

		return Y.toExtendedJSON(Q);
	} else throw new U("_bsontype must be a string, but was: " + typeof J);
}

function jG($, Q) {
	let J = {
		useBigInt64: Q?.useBigInt64 ?? !1,
		relaxed: Q?.relaxed ?? !0,
		legacy: Q?.legacy ?? !1
	};

	return JSON.parse($, (Y, Z) => {
		if (Y.indexOf("\x00") !== -1) throw new U(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(Y)}`);

		return XG(Z, J);
	});
}

function HG($, Q, J, Y) {
	if (J != null && typeof J === "object") (Y = J, J = 0);
	if (Q != null && typeof Q === "object" && !Array.isArray(Q)) (Y = Q, Q = void 0, J = 0);

	let Z = Object.assign({ relaxed: !0, legacy: !1 }, Y, { seenObjects: [{ propertyName: "(root)", obj: null }] }),
		q = U$($, Z);

	return JSON.stringify(q, Q, J);
}

function qq($, Q) {
	return (Q = Q || {}, JSON.parse(HG($, Q)));
}

function Kq($, Q) {
	return (Q = Q || {}, jG(JSON.stringify($), Q));
}

var g8 = Object.create(null);

g8.parse = jG;
g8.stringify = HG;
g8.serialize = qq;
g8.deserialize = Kq;
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
	maxKey: 127
};

function n5($, Q) {
	try {
		return b.getNonnegativeInt32LE($, Q);
	} catch(J) {
		throw new K$("BSON size cannot be negative", Q, { cause: J });
	}
}

function t5($, Q) {
	let J = Q;

	for (; $[J] !== 0; J++) ;

	if (J === $.length - 1) throw new K$("Null terminator not found", Q);

	return J;
}

function Fq($, Q = 0) {
	if ((Q ??= 0, $.length < 5)) throw new K$(`Input must be at least 5 bytes, got ${$.length} bytes`, Q);

	let J = n5($, Q);

	if (J > $.length - Q) throw new K$(`Parsed documentSize (${J} bytes) does not match input length (${$.length} bytes)`, Q);
	if ($[Q + J - 1] !== 0) throw new K$("BSON documents must end in 0x00", Q + J);

	let Y = [], Z = Q + 4;

	while (Z <= J + Q) {
		let q = $[Z];

		if ((Z += 1, q === 0)) {
			if (Z - Q !== J) throw new K$("Invalid 0x00 type byte", Z);

			break;
		}

		let K = Z, W = t5($, Z) - K;

		Z += W + 1;

		let F;

		if (q === H0.double || q === H0.long || q === H0.date || q === H0.timestamp) F = 8; else if (q === H0.int) F = 4; else if (q === H0.objectId) F = 12; else if (q === H0.decimal) F = 16; else if (q === H0.bool) F = 1; else if (q === H0.null || q === H0.undefined || q === H0.maxKey || q === H0.minKey) F = 0; else if (q === H0.regex) F = t5($, t5($, Z) + 1) + 1 - Z; else if (q === H0.object || q === H0.array || q === H0.javascriptWithScope) F = n5($, Z); else if (q === H0.string || q === H0.binData || q === H0.dbPointer || q === H0.javascript || q === H0.symbol) {
			if ((F = n5($, Z) + 4, q === H0.binData)) F += 1;
			if (q === H0.dbPointer) F += 12;
		} else throw new K$(`Invalid 0x${q.toString(16).padStart(2, "0")} type byte`, Z);

		if (F > J) throw new K$("value reports length larger than document", Z);

		(Y.push([q, K, W, Z, F]), Z += F);
	}

	return Y;
}

var T6 = Object.create(null);

T6.parseToElements = Fq;
T6.ByteUtils = k;
T6.NumberUtils = b;
Object.freeze(T6);

var PG = 17825792, x$ = k.allocate(PG);

function Wq($) {
	if (x$.length < $) x$ = k.allocate($);
}

function Xq($, Q = {}) {
	let J = typeof Q.checkKeys === "boolean" ? Q.checkKeys : !1,
		Y = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
		Z = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0,
		q = typeof Q.minInternalBufferSize === "number" ? Q.minInternalBufferSize : PG;

	if (x$.length < q) x$ = k.allocate(q);

	let K = A6(x$, $, J, 0, 0, Y, Z, null),
		W = k.allocateUnsafe(K);

	return (W.set(x$.subarray(0, K), 0), W);
}

function jq($, Q, J = {}) {
	let Y = typeof J.checkKeys === "boolean" ? J.checkKeys : !1,
		Z = typeof J.serializeFunctions === "boolean" ? J.serializeFunctions : !1,
		q = typeof J.ignoreUndefined === "boolean" ? J.ignoreUndefined : !0,
		K = typeof J.index === "number" ? J.index : 0,
		W = A6(x$, $, Y, 0, 0, Z, q, null);

	return (Q.set(x$.subarray(0, W), K), K + W - 1);
}

function Hq($, Q = {}) {
	return WG(k.toLocalBufferType($), Q);
}

function Pq($, Q = {}) {
	Q = Q || {};

	let J = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
		Y = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0;

	return f1($, J, Y);
}

function Vq($, Q, J, Y, Z, q) {
	let K = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, q),
		W = k.toLocalBufferType($),
		F = Q;

	for (let H = 0; H < J; H++) {
		let X = b.getInt32LE(W, F);

		(K.index = F, Y[Z + H] = WG(W, K), F = F + X);
	}

	return F;
}

var W$ = Object.freeze({
	__proto__: null,
	BSONError: U,
	BSONOffsetError: K$,
	BSONRegExp: r0,
	BSONRuntimeError: u1,
	BSONSymbol: v8,
	BSONType: wZ,
	BSONValue: _0,
	BSONVersionError: q8,
	Binary: o,
	ByteUtils: k,
	Code: p$,
	DBRef: C$,
	Decimal128: B0,
	Double: s0,
	EJSON: g8,
	Int32: c$,
	Long: V,
	MaxKey: _8,
	MinKey: y8,
	NumberUtils: b,
	ObjectId: F0,
	Timestamp: F$,
	UUID: E0,
	bsonType: GJ,
	calculateObjectSize: Pq,
	deserialize: Hq,
	deserializeStream: Vq,
	onDemand: T6,
	serialize: Xq,
	serializeWithBufferAndIndex: jq,
	setInternalBufferSize: Wq
});

var K0,
	x8 = new Map(),
	w6 = !0,
	ZJ = 0,
	KJ = !1,
	FJ = !1;

function z6() {
	let $ = J0.url?.ws;

	(
		K0 = $
			? new WebSocket(`${$}${$.includes("?") ? "&" : "?"}v=${bJ}`)
			: N.ws.$ws(),
		K0.binaryType = "arraybuffer",
		w6 = !0,
		K0.addEventListener("open", () => {
			(
				console.log("[WS] Connected"),
				KJ = !1,
				FJ = !1,
				ZJ = 0,
				SY(),
				kY(),
				k8()
			);
		}),

		K0.addEventListener("message", (Q) => {
			let J = W$.deserialize(Q.data);

			if ((P$ && console.debug("[WS] SERVER", J), x8.has(J.nonce))) {
				let Z = x8.get(J.nonce);

				(x8.delete(J.nonce), Z(J));
			}

			let Y = D5.get(J.op);

			if (!Y) {
				console.error("[WS] Got an unexpected packet", J);

				return;
			}

			Y(J);
		}),

		K0.addEventListener("close", (Q) => {
			if ((
				x8.clear(),
				console.warn(`[WS] Disconnected (${Q.code})`),
				Q.code == 4008
			)) {
				(w6 = !1, e4());

				return;
			}

			if (!w6 || document.hidden) return;
			if ((console.warn("[WS] Reconnecting..."), Q.code == 4004 && !WJ)) m$();

			let J = Math.random() * 2000;

			if (Q.code == 4007) setTimeout(z6, 500 + J); else {
				ZJ++;

				let Y = Math.min(5000 * ZJ, 30000);

				setTimeout(z6, Y + J);
			}
		})
	);
}

function qY($) {
	if ((w6 = !1, K0)) K0.close($);
}

var qJ;

document.addEventListener("visibilitychange", () => {
	if ((clearTimeout(qJ), qJ = null, document.hidden)) {
		qJ = setTimeout(
			() => {
				if (!document.hidden) return;

				(
					console.log("Tab has been inactive for over a minute, disconnecting from WS"),
					K0?.close()
				);
			},
			60000
		);

		return;
	}

	if (w6 && (!K0 || K0.readyState == WebSocket.CLOSED)) z6();
});

function VG($ = {}) {
	if (!K0 || K0.readyState != WebSocket.OPEN) return (
		delete $.token,
		console.warn("Tried to send a packet while the connection is closed", $),
		!0
	);
}

var WJ = !1;

function k8() {
	if (KJ || !K0 || K0.readyState != WebSocket.OPEN) return;
	if (w$() && !(R.token && R.user)) return;

	(WJ = !0, sQ(2, { token: w$() ?? "viewer" }));
}

function M7() {
	(FJ = !0, A5());
}

function sQ($, Q) {
	if (VG(Q) || !K0) return !1;
	if ($ != 2 && !FJ) return !1;
	if ($ == 2) (WJ = !1, KJ = !0);

	(
		P$ && console.debug("[WS] CLIENT", $, Q),
		K0.send(W$.serialize({ op: $, ...Q ?? {} }))
	);
}

function v$($, Q, J = 60000) {
	return new Promise((Y, Z) => {
		if (VG(Q) || !K0) return Z("Tried to send a packet while the connection is closed");

		let q = Date.now(),
			K = setTimeout(
				() => {
					(x8.delete(q), Z(`Nonce ${q} timed out after ${J}ms`));
				},
				J
			);

		(
			x8.set(q, (W) => {
				(clearTimeout(K), Y(W));
			}),
			P$ && console.debug(`[WS] CLIENT (nonce=${q})`, $, Q),
			K0.send(W$.serialize({ op: $, nonce: q, ...Q ?? {} }))
		);
	});
}

function V7($) {
	let Q = new Uint8Array($.length * 5),
		J = new DataView(Q.buffer),
		Y = 0;

	for (let Z of $) (J.setUint32(Y, Z[0], !0), J.setUint8(Y + 4, Z[1]), Y += 5);

	return v$(7, { pixels: Q });
}

function A7() {
	return v$(9, {}, 1e4);
}

function RG($) {
	return v$(10, $, 5000);
}

var n1 = 160;

function XJ($) {
	let Q = $ % d, J = Math.floor($ / d);

	jJ(Q, J);
}

function jJ($, Q) {
	E6($ - n1 / 2, Q - n1 / 2, n1, n1);
}

async function f0($) {
	let { connId: Q, userId: J, fallbackPos: Y, username: Z } = $;

	if (Q !== void 0 && Q === R.connectionId) return (h$("That's you!"), !1);

	if (Q !== void 0) {
		let q = V0.get(Q);

		if (q && !q.partial && q.lastPos !== void 0) return (XJ(q.lastPos), !0);
	}

	if (Y !== void 0) return (XJ(Y), !0);

	if (Q !== void 0 || J !== void 0) try {
		let q = await RG({ connId: Q, userId: J });

		if (q.pos != null) return (XJ(q.pos), !0);
	} catch {}

	return (
		h$(Z
			? `${Z} isn't on the wall right now.`
			: "That user isn't on the wall right now."),
		!1
	);
}

function MG() {
	let $ = G("div.list.mod-list"),
		Q = G("div.mod-status"),
		J = G("div.btn-container"),
		Y = null;

	async function Z(K) {
		if (K) (Y = null, $.replaceChildren(), J.replaceChildren());

		Q.replaceChildren("Loading...");

		let W = await E4({ status: "open", cursor: Y ?? void 0, limit: 25 });

		if (!W.ok) {
			Q.replaceChildren(G0(await u(W)));

			return;
		}

		let { items: F, next_cursor: H } = await W.json();

		if ((Q.replaceChildren(), K && !F.length)) $.replaceChildren(G("p.desc", "No open items.")); else for (let X of F) $.append(q(X));

		(
			Y = H,
			J.replaceChildren(Y
				? G("button.btn", "Load more", {
					onclick() {
						Z(!1);
					}
				})
				: "")
		);
	}

	function q(K) {
		let W = G("div.mod-action-msg"),
			F = G("input.box", { type: "text", placeholder: "Notes (optional)" }),
			H = G("div.item.box.outset.mod-review"),
			X = (A, v, S) => G("button.btn", A, {
				async onclick() {
					if (!await i(S, A)) return;

					let L = await I4(K.id, v, F.value.trim() || void 0);

					if (!L.ok) {
						W.replaceChildren(G("p.error.noicon", `${A} failed: ${await u(L)}`));

						return;
					}

					H.remove();
				}
			}),
			j = K.details.user_id,
			P = G("div.mod-flag-samples");

		if (typeof j == "number") (async () => {
			let A = await o4(j);

			if (!A.ok) return;

			let { samples: v } = await A.json();

			if (!v.length) return;

			let S = v.map((M) => ({
				pixels: V1(new Uint8Array([...atob(M.pixels)].map((L) => L.charCodeAt(0)))),
				label: x0(M.createdAt)
			}));

			P.replaceChildren(G("span.desc", "flagged draws:"), ...S.map((M, L) => {
				let _ = M8(M.pixels);

				return (
					_.title = `${M.label} (click to expand)`,
					_.classList.add("mod-clickable-thumb"),
					_.addEventListener("click", () => r4(S, L)),
					_
				);
			}));
		})();

		let C = K.target_username,
			z = typeof j == "number"
				? G(
					"div.mod-form-row.mod-review-target",
					C
						? G("span.mod-jump-name.tooltip", C, {
							dataset: { tooltip: g.jumpTo },
							async onclick() {
								if (await f0({ userId: j, username: C })) (
									p(),
									I$({ label: "Review Queue", reopen: () => s("review") })
								);
							}
						})
						: "",
					G("span.desc", `#${j}`),
					K.target_discord ? G("span.desc", `discord: ${K.target_discord}`) : "",
					G("button.btn", "View user", {
						onclick() {
							s("users", j, { label: "Review Queue", reopen: () => s("review") });
						}
					})
				)
				: "";

		return (
			H.append(G("div.mod-review-head", G("b", K.kind), G("span.mod-tag", `x${K.hit_count}`), G("span.desc", w0(K.created_at))), z, P, G("div.details", X1(K.details)), G("div.input", F), G("div.mod-form-row", X("Dismiss", "dismiss", `Dismiss review item #${K.id}?`), X("Mark clean", "mark_clean", `Mark item #${K.id} clean?`), X("Ban", "ban", `Perma-ban the target of item #${K.id}?`)), W),
			H
		);
	}

	return (
		Z(!0),
		G(
			"div.mod-review-tab",
			G("div.btn-container.mod-toolbar", G("button.btn", "Refresh", {
				onclick() {
					Z(!0);
				}
			})),
			Q,
			$,
			J
		)
	);
}

function zG() {
	let $ = G("div.mod-action-msg"),
		Q = G("input.box", {
			type: "text",
			placeholder: "Title (optional)",
			maxLength: 120
		}),
		J = G("textarea.box", {
			placeholder: g.broadcast.placeholder,
			rows: 4,
			maxLength: 1000
		}),
		Y = G("input", { type: "checkbox", checked: !1, id: "eph" });

	return G("div.mod-broadcast", G("p.desc", g.broadcast.desc), G("div.mod-form", G("div.input", Q), G("div.input", J), G("div.checkbox", Y, G("label", { htmlFor: "eph" }, g.broadcast.ephDesc)), $, G("div.mod-form-row", G("button.btn", g.broadcast.btn, {
		async onclick() {
			let Z = J.value.trim();

			if (!Z) {
				$.replaceChildren(G0("Message can't be empty."));

				return;
			}

			let q = Q.value.trim();

			if (!await i(g.broadcast.confirm, "Broadcast")) return;

			let W = await w4(Z, q || void 0, !Y.checked);

			if (!W.ok) {
				$.replaceChildren(G0(`Broadcast failed: ${await u(W)}`));

				return;
			}

			(
				Q.value = "",
				J.value = "",
				$.replaceChildren(G("p.success.noicon", g.broadcast.ok))
			);
		}
	}))));
}

var HJ = 10;

function kG($) {
	if ($ <= 0) return 1.1;

	let Q = Math.max(1, Math.min(10, $));

	return Math.round((0.95 - (Q - 1) / 9 * 0.55) * 100) / 100;
}

function UG() {
	let $ = G("div.mod-action-msg"),
		Q = G("p.desc.mod-bot-mapping"),
		J = G("p.desc"),
		Y = G("input.box.mod-bot-slider", {
			type: "range",
			min: "0",
			max: String(HJ),
			step: "1",
			value: "0"
		}),
		Z = (K) => {
			if (K <= 0) return g.detection.off;

			let W = Math.round(kG(K) * 100);

			return u0(g.detection.current, K, HJ, W);
		},
		q = () => {
			Q.replaceChildren(Z(Number(Y.value)));
		};

	return (
		Y.oninput = q,
		(async () => {
			let K = await f4();

			if (!K.ok) {
				$.replaceChildren(G0(await u(K)));

				return;
			}

			let { sensitivity: W, openBotFlags: F } = await K.json();

			(
				Y.value = String(W),
				q(),
				J.replaceChildren(`${g.detection.flags} ${F}.`)
			);
		})(),

		G("div.mod-bot-config", G("p.desc", g.detection.description.join(" ")), G("div.mod-form", G("div.mod-bot-slider-row", G("span.desc", g.detection.slider[0]), Y, G("span.desc", g.detection.slider[1])), Q, J, $, G("div.mod-form-row", G("button.btn", "Save", {
			async onclick() {
				let K = Number(Y.value), W = await l4(K);

				if (!W.ok) {
					$.replaceChildren(G0(`Save failed: ${await u(W)}`));

					return;
				}

				$.replaceChildren(G("p.success.noicon", g.gwValSaved));
			}
		}))))
	);
}

var CG = 0,
	b$ = 0,
	I6 = !1,
	LG = 0,
	DG = 0,
	AG = 0,
	TG = 0,
	L$ = new Map(),
	Rq = 50,
	Mq = 24,
	zq = 16;

function y0($, Q) {
	return [
		Math.max(Math.min(Math.floor(($ - D.rect.left) / D.rect.width * $0.width), $0.width), 0),
		Math.max(Math.min(Math.floor((Q - D.rect.top) / D.rect.height * $0.height), $0.height), 0)
	];
}

function kq($, Q) {
	let J = Date.now(),
		[Y, Z] = y0($, Q),
		{ points: q } = lJ(LG, DG, Y, Z),
		K = $ - AG,
		W = Q - TG;

	if ((
		b$ += Math.sqrt(K * K + W * W) / (J - CG),
		CG = J,
		LG = Y,
		DG = Z,
		!I6
	)) {
		(I6 = !0, b$ = 5);

		return;
	}

	if (b$ > 0) b$ *= 0.8;
	if (b$ <= 0.001) b$ = 0;

	let F = 1 - b$ / (R.brushSize * 1.1),
		H = Math.max(R.brushSize * F, 2),
		X = Math.min(Math.max(Math.floor((H + 1) ** 1.5), 1), 15);

	if (!q.length) q.push([Y, Z]);

	let j = (R.brushSize - 1) * 0.1;

	for (let [P, C] of q) {
		let z = fJ(P, C, Math.floor(H), X);

		for (let [A, v] of z) if (!M5(A, v) && b$ < j) Uq(A, v);
	}

	n0();
}

function Uq($, Q) {
	let J = L$.get($);

	if (J) J.y = Math.max(J.y, Q); else L$.set($, { y: Q, amount: 0, max: Math.random() * (R.brushSize * 1.5) });
	if (L$.size > Rq) L$.delete(L$.keys().next().value);
}

function Cq() {
	if (!L$.size) return;

	let $ = [...L$.entries()],
		[Q, J] = $[Math.floor(Math.random() * $.length)];

	if ((M5(Q, ++J.y), ++J.amount >= J.max)) L$.delete(Q);
}

function wG() {
	(
		setInterval(
			() => {
				if (i0 && I6) Cq();
			},
			Mq
		),

		setInterval(
			() => {
				if (i0) (kq(D$, A$), AG = D$, TG = A$); else if (I6) (L$.clear(), I6 = !1);
			},
			zq
		)
	);
}

var EG = 4, t1 = !1;

function IG($, Q, J, Y, Z) {
	let q = Math.min($, J),
		K = Math.min(Q, Y),
		W = Math.max($, J),
		F = Math.max(Q, Y);

	(q = Math.min(q, d - 1), K = Math.min(K, M0 - 1));

	let H = Math.min(W - q, Z, d - q),
		X = Math.min(F - K, Z, M0 - K);

	return (
		H = Math.max(H, 1),
		X = Math.max(X, 1),
		{ x: q, y: K, width: H, height: X }
	);
}

function Lq($) {
	let Q = D.rect.width / $0.width,
		J = D.rect.height / $0.height;

	return {
		left: D.rect.left + $.x * Q,
		top: D.rect.top + $.y * J,
		width: $.width * Q,
		height: $.height * J
	};
}

function a1($) {
	if (t1) return;

	(t1 = !0, R.setTool(0), S$(0));

	let Q = $.maxRegion ?? Math.max(d, M0),
		J = $.color ?? "#ff3b3b",
		Y = G("div.pick-box", { style: { display: "none", outlineColor: J } }),
		Z = $.label ? G("div.pick-mode", $.label) : "",
		q = G("div.pick-readout", $.hint ?? "Click a pixel  ·  Shift+drag to select an area"),
		K = G("div.pick-hint", "Esc or right-click to cancel"),
		W = G("div.pick-overlay", Y, Z, q, K),
		F = null;

	if ($.dimUnpainted) (F = G("div.mod-paint-scrim"), u$.prepend(F));

	let H = !1,
		X = null,
		j = null,
		P = !1,
		C = 0,
		z = 0;

	function A(T) {
		let O = Lq(T);

		Object.assign(Y.style, {
			display: "block",
			left: `${O.left}px`,
			top: `${O.top}px`,
			width: `${O.width}px`,
			height: `${O.height}px`
		});
	}

	function v(T, O) {
		A({ x: T, y: O, width: 1, height: 1 });
	}

	function S() {
		if (!t1) return;

		(
			t1 = !1,
			W.remove(),
			F?.remove(),
			z0.removeEventListener("pointerdown", _, !0),
			z0.removeEventListener("pointermove", I, !0),
			window.removeEventListener("pointerup", h, !0),
			document.removeEventListener("keydown", M, !0),
			z0.removeEventListener("contextmenu", L, !0),
			$.onClose?.()
		);
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
			(T.preventDefault(), T.stopPropagation(), H = !0);

			let [O, m] = y0(T.clientX, T.clientY);

			(
				X = [O, m],
				j = IG(O, m, O, m, Q),
				A(j),
				q.textContent = `${j.width}×${j.height} px`
			);

			return;
		}

		(P = !!$.onPick, C = T.clientX, z = T.clientY);
	}

	function I(T) {
		if (H && X) {
			(T.preventDefault(), T.stopPropagation(), $1(T.x, T.y));

			let [w, B] = y0(T.clientX, T.clientY);

			(
				j = IG(X[0], X[1], w, B, Q),
				A(j),
				q.textContent = `${j.width}×${j.height} px`
			);

			return;
		}

		if (P && Math.hypot(T.clientX - C, T.clientY - z) > EG) P = !1;

		let [O, m] = y0(T.clientX, T.clientY);

		v(O, m);
	}

	function h(T) {
		if (H) {
			H = !1;

			let O = j;

			if ((j = null, X = null, S(), O && $.onRegion)) $.onRegion(O);

			return;
		}

		if (P && T.button === 0) {
			if ((P = !1, Math.hypot(T.clientX - C, T.clientY - z) <= EG)) {
				let [O, m] = y0(T.clientX, T.clientY);

				(S(), $.onPick?.(O, m));
			}
		}
	}

	(
		z0.addEventListener("pointerdown", _, !0),
		z0.addEventListener("pointermove", I, !0),
		window.addEventListener("pointerup", h, !0),
		document.addEventListener("keydown", M, !0),
		z0.addEventListener("contextmenu", L, !0),
		f("main").after(W)
	);
}

var Dq = 500;

function m6() {
	if (!v0()) return;

	a1({
		label: "Tile Inspector",
		hint: g.inspect.hint,
		maxRegion: Dq,
		dimUnpainted: !0,
		onPick: ($, Q) => void Aq($, Q),
		onRegion: ($) => void Tq($.x, $.y, $.width, $.height)
	});
}

async function Aq($, Q) {
	let J = Q * d + $, Y = await y4(J);

	if (!Y.ok) return new y("Tile inspector", G("div.modal", G0(await u(Y)), V$));

	hG(await Y.json(), $, Q);
}

function hG($, Q, J) {
	let Y = G("div.modal.mod-tile");

	if ((
		Y.append(G("div.mod-kv", h6("Position", `${Q}, ${J}`), h6("Placed", $.placed_at ? x0($.placed_at) : "unknown"))),
		!$.user
	)) return (
		Y.append(G("p.desc", g.inspect.none)),
		Y.append(G("div.btn-container", PJ())),
		void new y("Tile inspector", Y)
	);

	let Z = $.user, q = !!Z.banned_at;

	(
		Y.append(
			G("div.mod-detail-head", G("h3", Z.username), J6(Z.role), G("span.desc", `#${Z.id}`), Z.discord_id ? G("span.mod-tag.discord", "Discord") : null),
			q
				? G("p.warning.noicon", `Banned ${x0(Z.banned_at)}.` + (Z.banned_until ? ` Until ${x0(Z.banned_until)}.` : " Permanent."))
				: G("p.desc", "Not banned."),
			G(
				"div.btn-container",
				G("button.btn", "View user", {
					onclick() {
						s("users", Z.id, { label: "Tile inspector", reopen: () => hG($, Q, J) });
					}
				}),
				PJ()
			)
		),
		new y("Tile inspector", Y)
	);
}

async function Tq($, Q, J, Y) {
	let Z = await v4($, Q, J, Y);

	if (!Z.ok) return new y("Area breakdown", G("div.modal", G0(await u(Z)), V$));

	mG(await Z.json());
}

function mG($) {
	let { region: Q, owned: J, total: Y, owners: Z } = $,
		q = G("div.modal.mod-region");

	if ((
		q.append(G("div.mod-kv", h6("Area", `${Q.width}×${Q.height} at ${Q.x},${Q.y}`), h6("Owned pixels", `${J} / ${Y}`), h6("Distinct owners", String(Z.length)))),
		!Z.length
	)) q.append(G("p.desc", "No owned pixels in this area.")); else q.append(G("div.list.mod-list", ...Z.map((K) => G(
		"div.item.box.outset.mod-region-row",
		{
			onclick() {
				if (K.user_id) s("users", K.user_id, { label: "Area breakdown", reopen: () => mG($) });
			}
		},
		G("b", K.username ?? `#${K.user_id}`),
		G("span.mod-row-meta", `${K.pixels} px`, G("span.desc", `${Math.round(K.pixels / J * 100)}%`))
	))));

	(
		q.append(G("div.btn-container", PJ())),
		new y("Area breakdown", q)
	);
}

function PJ() {
	return G("button.btn", "Close", {
		onclick() {
			(p(), m6());
		}
	});
}

function h6($, Q) {
	return G("div.mod-kv-row", G("span.mod-kv-label", $), G("span.mod-kv-value", Q));
}

function NG() {
	let $ = G("div.list.mod-list"),
		Q = G("div.mod-status"),
		J = G("div.btn-container"),
		Y = 0,
		Z = G("select.input.box", G("option", { value: "bug" }, "Bug Reports"), G("option", { value: "feedback" }, "Feedback"), G("option", { value: "suggestion" }, "Suggestions"), {
			oninput() {
				q(!0);
			}
		});

	async function q(W) {
		if (W) (Y = 0, $.replaceChildren(), J.replaceChildren());

		Q.replaceChildren("Loading...");

		let F = await h4(Z.value, Y);

		if (!F.ok) {
			Q.replaceChildren(G0(await u(F)));

			return;
		}

		let H = await F.json();

		if ((Q.replaceChildren(), W && !H.length)) $.replaceChildren(G("p.desc", "No open items.")); else for (let X of H) $.append(K(X));

		(
			Y += H.length,
			J.replaceChildren(H.length >= 20
				? G("button.btn", "Load more", {
					onclick() {
						q(!1);
					}
				})
				: "")
		);
	}

	function K(W) {
		let F = G("div.mod-action-msg"),
			H = G("input.box", { type: "text", placeholder: "Reply to User (optional)" }),
			X = G("div.item.box.outset.mod-review"),
			j = (P, C, z) => G("button.btn", P, {
				async onclick() {
					if (!await i(z, P)) return;

					let v = await m4(W.id, C, H.value.trim() || void 0);

					if (!v.ok) {
						F.replaceChildren(G("p.error.noicon", `${P} failed: ${await u(v)}`));

						return;
					}

					if (C != "ignore") X.remove();
					if (C == "prune") q(!0);
				}
			});

		return (
			X.append(G("div.mod-review-head", G("b", W.kind)), G("p.desc", `From ${W.username} (#${W.user_id})`), G("div.details.pre", W.content), G("div.input", H), G("div.mod-form-row", j("Resolve", "resolve", g.feedback.resolve), j("Ignore", "ignore", g.feedback.ignore), j("Prune", "prune", g.feedback.prune)), F),
			X
		);
	}

	return (
		q(!0),
		G(
			"div.mod-review-tab",
			G("div.btn-container.mod-toolbar", Z, G("button.btn", "Refresh", {
				onclick() {
					q(!0);
				}
			})),
			Q,
			$,
			J
		)
	);
}

var wq = 500;

function p8() {
	if (!v0()) return;

	a1({
		label: "Wipe Canvas Selection",
		hint: g.wipe.hint,
		maxRegion: wq,
		dimUnpainted: !0,
		onRegion: async ($) => {
			if (!await i(`Clear a ${$.width}×${$.height} px area at (${$.x}, ${$.y})? This wipes those pixels for everyone (you can undo right after).`, "Wipe area", "Wipe", "Cancel")) return void p8();

			let J = await _4($);

			if (!J.ok) return m0(J, "Could not wipe the area");

			let { applied: Y, chunks: Z, undoToken: q } = await J.json();

			new y("Area wiped", G("div.modal", G("p", `Cleared ${Y} pixel(s) across ${Z} chunk(s).`), G("p.desc", g.snapshotDisplayNote), G("div.btn-container", q ? j1(q) : "", G("button.btn", "Close", {
				onclick() {
					(p(), p8());
				}
			}))));
		}
	});
}

async function Eq($, Q) {
	let J = await p4($, Q);

	if (!J.ok) return null;

	let Y = new Uint8Array(await J.arrayBuffer()),
		Z = W$.deserialize(Y),
		q = Z.pixels instanceof Uint8Array ? Z.pixels : Z.pixels?.buffer ?? new Uint8Array(),
		K = V1(q);

	return K.length ? K : null;
}

function Iq($) {
	document.querySelector(".mod-ghost-control")?.remove();

	let Q = $.states.filter((W) => W === H1).length,
		J = $.states.filter((W) => W === P1).length,
		Y = [];

	if (Q > 0) Y.push(`${Q} px overpainted (dim)`);
	if (J > 0) Y.push(`${J} px removed by a moderator (red)`);

	let Z = G("button.btn", "‹ Prev", {
		onclick() {
			$.onPrev?.();
		}
	});

	Z.disabled = !$.onPrev;

	let q = G("button.btn", "Next ›", {
		onclick() {
			$.onNext?.();
		}
	});

	q.disabled = !$.onNext;

	let K = G(
		"div.mod-ghost-control",
		G("span", Y.length
			? `Submission ${$.position} · ${Y.join(" · ")}`
			: `Submission ${$.position}`),
		Z,
		q,
		G("button.btn", `↩ Back to ${$.username}`, { onclick: $.onBack }),
		G("button.btn", "Clear", {
			onclick() {
				(xQ(), K.remove());
			}
		})
	);

	document.body.append(K);
}

function OG($, Q) {
	let J = G("div.list.mod-list.mod-ph-list"),
		Y = G("div.mod-ph-more"),
		Z = null,
		q = !1,
		K = [],
		W = new Map();

	async function F() {
		if (q) return;

		(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

		let C = await x4($, Z ? { before: Z } : {});

		if ((q = !1, !C.ok)) {
			Y.replaceChildren(G0(await u(C)));

			return;
		}

		let { entries: z, next_cursor: A } = await C.json();

		if (!z.length && !Z) {
			(
				J.replaceChildren(G("p.desc", "No paint history (or pruned by retention).")),
				Y.replaceChildren()
			);

			return;
		}

		for (let v of z) {
			let S = K.length;

			(K.push(v), J.append(P(v, S)));
		}

		(
			Z = A,
			Y.replaceChildren(A
				? G("button.btn.mod-ph-loadmore", "Load more", { onclick: () => void F() })
				: G("span.desc", "End of history."))
		);
	}

	async function H(C) {
		let z = W.get(C.id);

		if (z) return z;

		let A = await Eq($, C.id);

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

		let v = A.map(() => gQ),
			S = await g4(A.map((_) => _.pos));

		if (S.ok) {
			let { owners: _, deleted: I } = await S.json();

			v = _.map((h, T) => h === $ ? gQ : I?.[T] ? P1 : H1);
		}

		(p(), a4(A, v));

		let M = Y6(A);

		E6(M.x, M.y, M.width, M.height);

		let L = C + 1 < K.length || !!Z;

		Iq({
			states: v,
			username: Q,
			position: `${C + 1} / ${K.length}${Z ? "+" : ""}`,
			onPrev: C > 0 ? () => void X(C - 1) : void 0,
			onNext: L ? () => void j(C) : void 0,
			onBack: () => {
				(
					xQ(),
					document.querySelector(".mod-ghost-control")?.remove(),
					s("users", $)
				);
			}
		});
	}

	async function j(C) {
		if (C + 1 >= K.length && Z) await F();
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
					}
				},
				A,
				v
			);

		return (
			(async () => {
				let M = await H(C);

				if (!M) return;

				let L = Y6(M);

				if ((A.replaceChildren(M8(M)), L)) v.append(G("span.desc", `@ ${L.x},${L.y}`));
			})(),
			S
		);
	}

	return (F(), G("div.mod-ph", J, Y));
}

function hq($) {
	if ($ === null || !Number.isFinite($) || $ < 0) return null;

	let Q = $ % d, J = $ / d | 0;

	return `@ ${Q},${J}`;
}

function BG($, Q) {
	let J = G("div.list.mod-list.mod-ch-list"),
		Y = G("div.mod-ch-more"),
		Z = null,
		q = !1;

	function K(H) {
		f0({ fallbackPos: H }).then((X) => {
			if (!X) return;

			(p(), I$({ label: Q, reopen: () => s("users", $) }));
		});
	}

	async function W() {
		if (q) return;

		(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

		let H = await c4($, Z ? { before: Z } : {});

		if ((q = !1, !H.ok)) {
			Y.replaceChildren(G0(await u(H)));

			return;
		}

		let { entries: X, next_cursor: j } = await H.json();

		if (!X.length && !Z) {
			(
				J.replaceChildren(G("p.desc", "No chat messages.")),
				Y.replaceChildren()
			);

			return;
		}

		for (let P of X) J.append(F(P));

		(
			Z = j,
			Y.replaceChildren(j
				? G("button.btn.mod-ch-loadmore", "Load more", { onclick: () => void W() })
				: G("span.desc", "End of history."))
		);
	}

	function F(H) {
		let X = hq(H.pos),
			j = X
				? G("button.btn.mod-ch-loc.mod-jump-loc", X, { dataset: { tooltip: g.jumpSent }, onclick: () => K(H.pos) })
				: "";

		return G("div.item.box.outset.mod-ch-row", G("div.mod-ch-text", H.content ?? ""), G("div.mod-ch-meta", G("span.desc", w0(H.timestamp)), j));
	}

	return (W(), G("div.mod-ch", J, Y));
}

var N6 = null;

async function mq() {
	if (N6) return N6;

	return (N6 = await (await N.cursor.data.$get()).json(), N6);
}

function VJ($) {
	return N6?.find((Q) => Q.id === $)?.name ?? `#${$}`;
}

async function SG($ = {}) {
	let Q = await mq();

	return new Promise((J) => {
		let Y = !1,
			Z = (F) => {
				if (Y) return;

				(
					Y = !0,
					document.removeEventListener("keydown", q, !0),
					W.remove(),
					J(F)
				);
			},
			q = (F) => {
				if (F.key == "Escape") (F.stopPropagation(), Z(null));
			},
			K = new Set($.owned ?? []),
			W = G("div.modal-bg.confirm-bg.cursor-pick-bg", G("div.modal-container", G("div.modal-title", G("span", $.title ?? "Select a cursor"), $$("close", { ariaLabel: "Close", onclick: () => Z(null) })), G("div.modal-content", G("div.inventory.nopad", G("div.scroll.pad", G("div.items", Q.filter((F) => !F.free).map((F) => G(
				"div.item.box.tooltip",
				K.has(F.id) && { className: "owned" },
				{
					dataset: { tooltip: K.has(F.id) ? `${F.name} (owned)` : F.name },
					onclick: () => Z(F.id)
				},
				G("img", { src: Q$(F.id), draggable: !1 })
			))))))));

		(
			W.addEventListener("click", (F) => {
				if (F.target == W) Z(null);
			}),
			document.addEventListener("keydown", q, !0),
			document.body.append(W)
		);
	});
}

var X$ = d,
	c8 = M0,
	Nq = "rgba(8,8,12,0.66)",
	Oq = "rgba(255,56,56,0.5)",
	Bq = 2,
	Sq = 256;

function _G($) {
	let { ownedPositions: Q } = $,
		J = new Uint8Array(l$ + 7 >> 3);

	for (let E = 0; E < Q.length; E++) {
		let c = Q[E];

		J[c >> 3] |= 1 << (c & 7);
	}

	let Y = (E) => J[E >> 3] >> (E & 7) & 1,
		Z = G("canvas.mod-mask-layer", { width: X$, height: c8 }),
		q = G("canvas.mod-select-layer", { width: X$, height: c8 }),
		K = Z.getContext("2d"),
		W = q.getContext("2d");

	(K.fillStyle = Nq, K.fillRect(0, 0, X$, c8));

	for (let E = 0; E < Q.length; E++) {
		let c = Q[E];

		K.clearRect(c % X$, c / X$ | 0, 1, 1);
	}

	(W.fillStyle = Oq, j$.append(Z, q));

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

	function _(E, c) {
		if (E < 0 || E >= X$ || c < 0 || c >= c8) return;

		let a = c * X$ + E;

		if (!Y(a) || X.has(a)) return;

		(X.add(a), W.fillRect(E, c, 1, 1));
	}

	function I(E, c) {
		let a = Math.max(1, P >> 1), k0 = a * a;

		for (let W0 = -a; W0 <= a; W0++) {
			let R0 = c + W0;

			if (R0 < 0 || R0 >= c8) continue;

			for (let U0 = -a; U0 <= a; U0++) {
				if (j === "circle" && U0 * U0 + W0 * W0 > k0) continue;

				_(E + U0, R0);
			}
		}
	}

	function h(E, c, a, k0) {
		let W0 = Math.hypot(a - E, k0 - c),
			R0 = Math.max(1, P >> 1),
			U0 = Math.max(1, Math.ceil(W0 / R0));

		for (let h0 = 1; h0 <= U0; h0++) I(Math.round(E + (a - E) * h0 / U0), Math.round(c + (k0 - c) * h0 / U0));
	}

	function T() {
		if (!S || !M) return;

		let E = Math.min(S[0], M[0]),
			c = Math.min(S[1], M[1]),
			a = Math.max(S[0], M[0]),
			k0 = Math.max(S[1], M[1]);

		for (let W0 = 0; W0 < Q.length; W0++) {
			let R0 = Q[W0], U0 = R0 % X$, h0 = R0 / X$ | 0;

			if (U0 >= E && U0 <= a && h0 >= c && h0 <= k0) _(U0, h0);
		}
	}

	function O() {
		return {
			b: D.rect,
			sx: D.rect.width / $0.width,
			sy: D.rect.height / $0.height
		};
	}

	function m() {
		if (!S || !M) {
			H.style.display = "none";

			return;
		}

		let { b: E, sx: c, sy: a } = O(),
			k0 = Math.min(S[0], M[0]),
			W0 = Math.min(S[1], M[1]),
			R0 = Math.abs(M[0] - S[0]) + 1,
			U0 = Math.abs(M[1] - S[1]) + 1;

		Object.assign(H.style, {
			display: "block",
			left: `${E.left + k0 * c}px`,
			top: `${E.top + W0 * a}px`,
			width: `${R0 * c}px`,
			height: `${U0 * a}px`
		});
	}

	function w(E, c) {
		if (j === "rect") {
			F.style.display = "none";

			return;
		}

		let { sx: a } = O(), k0 = Math.max(4, P * a);

		Object.assign(F.style, {
			display: "block",
			left: `${E}px`,
			top: `${c}px`,
			width: `${k0}px`,
			height: `${k0}px`,
			borderRadius: j === "circle" ? "50%" : "0"
		});
	}

	function B(E) {
		if (E.button !== 0) return;

		(E.preventDefault(), E.stopPropagation());

		let [c, a] = y0(E.clientX, E.clientY);

		if (j === "rect") (v = !0, S = [c, a], M = [c, a], m()); else (C = !0, z = c, A = a, I(c, a), L());
	}

	function n(E) {
		if (v) {
			(
				E.preventDefault(),
				E.stopPropagation(),
				M = y0(E.clientX, E.clientY),
				m()
			);

			return;
		}

		if (C) {
			(E.preventDefault(), E.stopPropagation());

			let [c, a] = y0(E.clientX, E.clientY);

			(h(z, A, c, a), z = c, A = a, L());

			return;
		}

		w(E.clientX, E.clientY);
	}

	function Q0(E) {
		if (v && E.button === 0) {
			(
				E.preventDefault(),
				E.stopPropagation(),
				v = !1,
				T(),
				H.style.display = "none",
				S = M = null,
				L()
			);

			return;
		}

		if (C && E.button === 0) (E.preventDefault(), E.stopPropagation(), C = !1);
	}

	function l(E) {
		if (E.key !== "Escape") return;
		if (document.querySelector(".modal-bg")) return;

		(E.preventDefault(), E.stopPropagation(), t(), $.onExit?.());
	}

	let e = (E) => E.preventDefault();

	(
		z0.addEventListener("mousedown", B, !0),
		window.addEventListener("mousemove", n, !0),
		window.addEventListener("mouseup", Q0, !0),
		document.addEventListener("keydown", l, !0),
		z0.addEventListener("contextmenu", e, !0)
	);

	let P0 = !1;

	function t() {
		if (P0) return;

		(
			P0 = !0,
			z0.removeEventListener("mousedown", B, !0),
			window.removeEventListener("mousemove", n, !0),
			window.removeEventListener("mouseup", Q0, !0),
			document.removeEventListener("keydown", l, !0),
			z0.removeEventListener("contextmenu", e, !0),
			Z.remove(),
			q.remove(),
			F.remove(),
			H.remove()
		);
	}

	return {
		setTool(E) {
			if ((j = E, E === "rect")) F.style.display = "none";
		},

		setBrushSize(E) {
			P = Math.max(Bq, Math.min(Sq, Math.round(E)));
		},

		clearSelection() {
			(X.clear(), W.clearRect(0, 0, X$, c8), L());
		},
		count: () => X.size,
		positions: () => [...X],
		destroy: t
	};
}

async function vG($, Q = 0) {
	let J = await U4($, Q);

	if (!J.ok) return null;

	let Y = new Uint8Array(await J.arrayBuffer()),
		Z = W$.deserialize(Y),
		W = ((Z.positions instanceof Uint8Array ? Z.positions : Z.positions?.buffer) ?? new Uint8Array()).slice(),
		F = new Uint32Array(W.buffer, 0, W.byteLength / 4 | 0);

	return {
		positions: F,
		total: Z.total ?? F.length,
		truncated: !!Z.truncated,
		offset: Z.offset ?? 0,
		cap: Z.cap ?? F.length
	};
}

var gG = [
		{
			group: "Drag a box",
			tools: [{ tool: "rect", label: "Rectangle" }]
		},

		{
			group: "Brush over pixels",
			tools: [
				{ tool: "circle", label: "Circle" },
				{ tool: "square", label: "Square" }
			]
		}
	],
	yG = gG[0].tools[0];

async function xG($, Q, J) {
	if (!v0()) return;

	J("Loading this user's pixels…", !0);

	let Y;

	try {
		Y = await vG($);
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

	(p(), _q($, Q, Y));
}

function _q($, Q, J) {
	let Y = J,
		Z = G("span.mod-sel-count"),
		q = G("button.btn.mod-sel-delete", "Delete selected"),
		K = G("button.btn", "Clear selection"),
		W = G("span.mod-sel-sizeout", "24px"),
		F = G("input.mod-sel-size", { type: "range", min: "2", max: "256", value: "24" }),
		H = G("div.mod-sel-brush", G("span", "Brush"), F, W);

	H.style.display = "none";

	let X = yG.tool,
		j = 24,
		P,
		C = (l) => {
			(
				Z.textContent = `${l} flagged`,
				q.textContent = l ? `Delete selected (${l})` : "Delete selected",
				q.disabled = l === 0,
				K.disabled = l === 0
			);
		};

	function z(l) {
		let e = _G({
			ownedPositions: l.positions,
			onChange: (P0) => C(P0),
			onExit: () => A()
		});

		return (e.setTool(X), e.setBrushSize(j), e);
	}

	let A = () => {
		(P.destroy(), Q0.remove(), s("users", $));
	};

	(
		P = z(Y),
		F.oninput = () => {
			(
				j = Number(F.value),
				P.setBrushSize(j),
				W.textContent = `${F.value}px`
			);
		}
	);

	let v = G("p.mod-sel-desc", g.wipe.tools[yG.tool]),
		S = [],
		M = gG.map(({ group: l, tools: e }) => {
			let P0 = e.map(({ tool: t, label: E }) => {
				let c = G("button.btn.mod-sel-tool", E);

				return (
					c.onclick = () => {
						(X = t, P.setTool(t));

						for (let a of S) a.classList.toggle("active", a === c);

						(
							H.style.display = t === "rect" ? "none" : "",
							v.textContent = g.wipe.tools[t]
						);
					},
					S.push(c),
					c
				);
			});

			return G("div.mod-sel-group", G("span.mod-sel-group-label", l), G("div.mod-sel-group-btns", ...P0));
		});

	S[0].classList.add("active");

	let L = G("p.mod-sel-warn"),
		_ = G("div.mod-range-track"),
		I = G("div.mod-range-thumb");

	_.append(I);

	let h = G("div.mod-range-label"),
		T = Y.truncated ? G("div.mod-range", L, _, h) : "",
		O = () => Math.max(0, Y.total - Y.cap);

	function m(l) {
		return Math.max(28, l * Math.min(1, Y.cap / Y.total));
	}

	function w(l) {
		let e = _.clientWidth || 260,
			P0 = m(e),
			t = Math.max(0, e - P0),
			E = O();

		(
			I.style.width = `${P0}px`,
			I.style.left = `${E === 0 ? 0 : t * (l / E)}px`
		);

		let c = Math.min(Y.total, l + Y.cap);

		h.textContent = `Viewing pixels ${(l + 1).toLocaleString()}–${c.toLocaleString()} of ${Y.total.toLocaleString()}`;
	}

	function B(l) {
		let e = _.clientWidth || 260,
			P0 = Math.max(0, e - m(e));

		return P0 === 0 ? 0 : Math.round(l / P0 * O());
	}

	if (T) {
		L.textContent = u0(g.wipe.warn, Y.total.toLocaleString(), Y.cap.toLocaleString());

		let l = !1, e = 0, P0 = 0;

		(
			I.onpointerdown = (E) => {
				(
					E.preventDefault(),
					l = !0,
					e = E.clientX,
					P0 = parseFloat(I.style.left || "0")
				);

				try {
					I.setPointerCapture(E.pointerId);
				} catch {}
			},

			I.onpointermove = (E) => {
				if (!l) return;

				let c = _.clientWidth || 260,
					a = Math.max(0, c - m(c)),
					k0 = Math.max(0, Math.min(a, P0 + (E.clientX - e)));

				I.style.left = `${k0}px`;

				let W0 = B(k0), R0 = Math.min(Y.total, W0 + Y.cap);

				h.textContent = `Viewing pixels ${(W0 + 1).toLocaleString()}–${R0.toLocaleString()} of ${Y.total.toLocaleString()}`;
			}
		);

		let t = (E) => {
			if (!l) return;

			l = !1;

			try {
				I.releasePointerCapture(E.pointerId);
			} catch {}

			n(B(parseFloat(I.style.left || "0")));
		};

		(
			I.onpointerup = t,
			I.onpointercancel = t,
			setTimeout(() => w(Y.offset), 0)
		);
	}

	async function n(l) {
		if (l === Y.offset) return;

		h.textContent = "Loading section…";

		let e = null;

		try {
			e = await vG($, l);
		} catch {}

		if (!e) {
			w(Y.offset);

			return;
		}

		(Y = e, P.destroy(), P = z(Y), C(0), w(Y.offset));
	}

	(
		q.onclick = async () => {
			let l = P.positions();

			if (!l.length) return;
			if (!await i(u0(g.wipe.confirm, l.length, Q), "Delete selected strokes", "Delete", "Cancel")) return;

			let P0 = await C4($, l);

			if (!P0.ok) return Y0("Could not delete selected pixels", await u(P0));

			let { pixelsWiped: t, undoToken: E } = await P0.json();

			(
				P.destroy(),
				Q0.remove(),
				new y("Strokes deleted", G("div.modal", G("p", u0(g.wipe.removed, t, Q)), G("p.desc", g.snapshotDisplayNote), G(
					"div.btn-container",
					E ? j1(E) : "",
					G("button.btn", `↩ Back to ${Q}`, {
						onclick() {
							(p(), s("users", $));
						}
					}),
					G("button.btn.secondary", "Close", { onclick: () => p() })
				)))
			);
		},
		K.onclick = () => P.clearSelection()
	);

	let Q0 = G("div.mod-select-overlay", G("div.mod-sel-head", `Deleting ${Q}'s pixels`), T, G("div.mod-sel-tools", ...M), v, H, G("div.mod-sel-info", Z), G("div.mod-sel-actions", q, K, G("button.btn", "Cancel", { onclick: () => A() })), G("p.mod-sel-hint", "Right-drag to pan · scroll to zoom · Esc to cancel"));

	(C(0), document.body.append(Q0));
}

function RJ($, Q) {
	let J = G("div.list", "Loading..."), Y = !1;

	new y("Moderation", G("div.clans-modal", Q && MJ(Q), Y1($, !0), G(
		"details.clan-member-list.box",
		G("summary", "Members", {
			async onclick() {
				if (Y) return;

				Y = !0;

				let Z = await S4($.id);

				if (!Z.ok) return (Y = !1, J.replaceChildren(G("p.error.noicon", await u(Z))));

				let q = await Z.json();

				J.replaceWith(G("div.list", q.map((K, W, F) => [
					G("a.link", K.username, {
						onclick() {
							s("users", K.id, { label: $.name, reopen: () => RJ($, Q) });
						}
					}),
					W < F.length - 1 && ", "
				])));
			}
		}),
		J
	)));
}

var pG = 50, yq = ["user", "moderator", "admin"];

function zJ($) {
	let Q = G("div.list.mod-list"),
		J = G("div.mod-detail"),
		Y = G("div.mod-status"),
		Z = "";

	async function q(M) {
		(Z = M, Y.replaceChildren("Searching..."));

		let L = await P4(M);

		if (M != Z) return;

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

		Q.replaceChildren(...M.map((L) => G(
			"div.item.box.outset.mod-row",
			{
				onclick() {
					W(L.id);
				}
			},
			G("b", L.username),
			G("span.mod-row-meta", `#${L.id}`, J6(L.role), L.ban && G("span.mod-tag.banned", "banned"), L.mute && G("span.mod-tag.muted", "muted"), Array.isArray(L.flagged) && G("span.mod-tag.flagged", L.flagged.length > 1 ? `flagged x${L.flagged.length}` : "flagged"))
		)));
	}

	async function W(M, L, _ = !1) {
		J.replaceChildren(G("p.desc", "Loading..."));

		let I = await V4(M);

		if (!I.ok) {
			J.replaceChildren(G0(await u(I)));

			return;
		}

		let { user: h, cursors: T } = await I.json();

		if ((H(h, T, L), _ && h.username && v.value !== h.username)) (v.value = h.username, q(h.username));
	}

	function F(M, L, _) {
		M.replaceChildren(G(_ ? "p.success.noicon" : "p.error.noicon", L));
	}

	function H(M, L, _) {
		let I = M.id,
			h = G("div.mod-action-msg"),
			T = typeof M.ban == "object" ? M.ban : null,
			O = typeof M.mute == "object" ? M.mute : null,
			m = Array.isArray(M.flagged) ? M.flagged : null,
			w = !!M.excluded_from_leaderboard,
			B = (t) => W(I, t),
			n = (t) => {
				let E = G("button.btn.mod-undo", "Undo", {
					async onclick() {
						E.disabled = !0;

						let c = await t();

						if (!c.ok) {
							(E.disabled = !1, F(h, `Undo failed: ${await u(c)}`, !1));

							return;
						}

						await B({ text: "Reverted." });
					}
				});

				return E;
			};

		if (_) {
			if ((F(h, _.text, !0), _.undo)) h.append(n(_.undo));
		}

		let Q0 = (t, E, c) => {
				let a = G("input.box", { type: "text", placeholder: "Reason (optional)" }),
					k0 = G("select.box.outset", vQ.map((W0, R0) => G("option", W0.label, { value: String(R0), selected: R0 == 0 })));

				return G("div.mod-form-sanction", G("div.input", a), G("div.mod-form-row", k0, G("button.btn", t, {
					async onclick() {
						let W0 = vQ[Number(k0.value)],
							R0 = W0.seconds == null ? "permanently" : `for ${W0.label}`;

						if (!await i(`${t} ${M.username} ${R0}?`, `${t} user`)) return;

						let h0 = await E(a.value.trim(), W0.seconds ?? void 0);

						if (!h0.ok) {
							F(h, `${t} failed: ${await u(h0)}`, !1);

							return;
						}

						await B({ text: `${t} applied.`, undo: c });
					}
				})));
			},
			l = (t, E, c, a, k0) => G("button.btn", t, {
				async onclick() {
					if (!await i(E, t)) return;

					let R0 = await c();

					if (!R0.ok) {
						F(h, `${t} failed: ${await u(R0)}`, !1);

						return;
					}

					let U0 = "", h0;

					try {
						let HQ = await R0.clone().json();

						if (typeof HQ.pixelsCleared == "number") U0 = ` (${HQ.pixelsCleared} pixels cleared)`;

						h0 = HQ.undoToken;
					} catch {}

					await B({
						text: a + U0 + (k0 ? ` ${k0}` : ""),
						undo: h0 ? () => F1(h0) : void 0
					});
				}
			}),
			e = G("div.mod-sessions"),
			P0 = O6();

		J.replaceChildren(G(
			"div.mod-detail-inner",
			G(
				"div.mod-detail-head",
				G("h3.tooltip.mod-jump-name", M.username, {
					dataset: { tooltip: "Click to jump to this user's cursor" },
					async onclick() {
						if (await f0({ userId: I, username: M.username })) (p(), I$({ label: M.username, reopen: () => s("users", I) }));
					}
				}),
				J6(M.role),
				G("span.desc", `#${M.id}`)
			),
			G(
				"div.mod-kv",
				A("Created At", w0(M.created_at)),
				A("Country", o6(M.country_code || "")),
				A("Paint", `${Math.floor(M.paint / L0)} cans (${M.paint} px)`),
				A("Coins", `${Math.floor(M.coins)} \uD83E\uDE99`),
				A("Px changed", String(M.stats.pixels_changed)),
				A("Px visible", String(M.stats.paint_visible)),
				M.discord_id
					? A("Discord", G("a.link", M.discord_username || "<Unknown Name>", {
						target: "_blank",
						href: `https://discord.com/users/${M.discord_id}`
					}))
					: "",
				M.clan && A("Clan", G("a.link", M.clan.name, {
					onclick() {
						RJ(M.clan, { label: M.username, reopen: () => s("users", M.id) });
					}
				})),
				"email" in M && A("Email", M.email || "-")
			),
			T
				? G("p.warning.noicon", `Banned ${x0(T.at)} by #${T.by ?? "?"}. Reason: ${T.reason || "(none)"}. ` + (T.until ? `Until ${x0(T.until)}.` : "Permanent."))
				: G("p.desc", "Not banned."),
			O
				? G("p.warning.noicon", `Muted ${x0(O.at)} by #${O.by ?? "?"}. Reason: ${O.reason || "(none)"}. ` + (O.until ? `Until ${x0(O.until)}.` : "Permanent."))
				: G("p.desc", "Not muted."),
			m
				? G("div.mod-flagged-line", G("span.warning.noicon", "Flagged: " + m.map((t) => `${t.kind} (x${t.hits})`).join(", ") + "."), G("button.btn.mod-flagged-open", "Open review queue", {
					onclick() {
						s("review", void 0, { label: M.username, reopen: () => s("users", I) });
					}
				}))
				: G("p.desc", "Not flagged."),
			h,
			G("div.mod-section", G("b", "Ban"), T
				? l("Unban", `Unban ${M.username}?`, () => OQ(I), "User unbanned.")
				: Q0("Ban", (t, E) => M4(I, t, E), () => OQ(I))),
			G("div.mod-section", G("b", "Mute"), O
				? l("Unmute", `Unmute ${M.username}?`, () => BQ(I), "User unmuted.")
				: Q0("Mute", (t, E) => z4(I, t, E), () => BQ(I))),
			G(
				"div.mod-section",
				G("b", "Leaderboard"),
				w
					? G("p.warning.noicon", "Hidden from the leaderboard.")
					: G("p.desc.mod-hint", "Hides this user from the users board and from clan/country totals."),
				w
					? l("Show on leaderboard", `Show ${M.username} on the leaderboard again?`, () => SQ(I, !1), "User restored to the leaderboard.")
					: l("Hide from leaderboard", `Hide ${M.username} from the leaderboard?`, () => SQ(I, !0), "User hidden from the leaderboard.")
			),
			G("div.mod-section", G("b", "Strokes"), G("p.desc.mod-hint", g.user.delete.desc), G("div.mod-form-row", l("Delete All User's Strokes", u0(g.user.delete.confirm, M.username), () => k4(I), "Deleted the user's strokes.", g.snapshotDisplayNote), G("button.btn", "Select Strokes to Delete...", {
				onclick() {
					xG(I, M.username, (t, E) => z(h, t, E));
				}
			}))),
			G("div.mod-section", G("b", "Paint history"), G("p.desc.mod-hint", g.user.draws), OG(M.id, M.username)),
			G("div.mod-section", G("b", "Chat history"), G("p.desc.mod-hint", g.user.messages), BG(M.id, M.username)),
			G("div.mod-section", G("b", "Paint"), j(M, h, B)),
			G("div.mod-section", G("b", "Cursors"), P(M, L, h, B)),
			G("div.mod-section", G("b", "Message"), X(M, h)),
			P0 && G("div.mod-section", G("b", "Role"), C(M, h, B)),
			P0 && G(
				"div.mod-section",
				G("b", "Sessions"),
				G("button.btn", "Load sessions", {
					async onclick() {
						e.replaceChildren(G("p.desc", "Loading..."));

						let t = await R4(I);

						if (!t.ok) {
							e.replaceChildren(G0(await u(t)));

							return;
						}

						let E = await t.json();

						if (!E.length) {
							e.replaceChildren(G("p.desc", "No sessions."));

							return;
						}

						e.replaceChildren(G("div.list.mod-list", ...E.map((c) => G("div.item.box.outset.mod-session", G("span", `#${c.id}`), G("span", c.ip || "no ip"), G("span.desc", "seen ", w0(c.last_verified_at))))));
					}
				}),
				e
			)
		));
	}

	function X(M, L) {
		let _ = G("textarea.box", {
			placeholder: `Message to ${M.username}...`,
			rows: 2,
			maxLength: 1000
		});

		return G("div.mod-form", G("div.input", _), G("div.mod-form-row", G("button.btn", "Send message", {
			async onclick() {
				let I = _.value.trim();

				if (!I) {
					z(L, "Message can't be empty.", !1);

					return;
				}

				let h = await T4(M.id, I);

				if (!h.ok) {
					z(L, `Message failed: ${await u(h)}`, !1);

					return;
				}

				(_.value = "", z(L, "Message sent.", !0));
			}
		})));
	}

	function j(M, L, _) {
		let I = G("input.box", { type: "number", min: "1", max: String(pG), value: "10" }),
			h = (T) => G("button.btn", `Reset ${T}`, {
				async onclick() {
					if (!await i(`Reset ${M.username}'s ${T}? (current: ${Math.floor(M[T])})`)) return;

					let m = await D4(M.id, T);

					if (!m.ok) return z(L, await u(m), !1);

					await _({ text: `Reset ${T}.` });
				}
			});

		return G(
			"div.mod-form-row",
			I,
			G("button.btn", "Give Cans", {
				async onclick() {
					let T = Math.max(1, Math.min(pG, Math.floor(Number(I.value) || 0)));

					if ((
						I.value = String(T),
						!await i(`Give ${T} can${T > 1 ? "s" : ""} to ${M.username}?`, "Give cans")
					)) return;

					let m = await L4(M.id, T);

					if (!m.ok) {
						z(L, `Give cans failed: ${await u(m)}`, !1);

						return;
					}

					await _({ text: `Gave ${T} can${T > 1 ? "s" : ""}.` });
				}
			}),
			h("paint"),
			h("coins")
		);
	}

	function P(M, L, _, I) {
		let h = L.length ? L.map((T) => VJ(T)).join(", ") : "None unlocked.";

		return G("div", G("p.desc.mod-hint", `Unlocked: ${h}`), G("div.mod-form-row", G("button.btn", "Give a cursor...", {
			async onclick() {
				let T = await SG({ title: `Give a cursor to ${M.username}`, owned: L });

				if (T == null) return;

				let O = VJ(T);

				if (!await i(`Give the "${O}" cursor to ${M.username}?`, "Give cursor")) return;

				let w = await A4(M.id, T);

				if (!w.ok) {
					z(_, `Give cursor failed: ${await u(w)}`, !1);

					return;
				}

				let B = {};

				try {
					B = await w.clone().json();
				} catch {}

				await I({
					text: B.granted === !1
						? `${M.username} already has the "${O}" cursor.`
						: `Gave the "${O}" cursor.`
				});
			}
		})));
	}

	function C(M, L, _) {
		let I = M.role,
			h = G("select.box.outset", yq.map((T) => G("option", T, { value: T, selected: T == M.role })));

		return G("div.mod-form-row", h, G("button.btn", "Set role", {
			async onclick() {
				let T = h.value;

				if (T == M.role) return;

				if (!await i(`Change ${M.username}'s role to "${T}"?`, "Change role")) {
					h.value = M.role;

					return;
				}

				let m = await _Q(M.id, T);

				if (!m.ok) {
					(
						z(L, `Role change failed: ${await u(m)}`, !1),
						h.value = M.role
					);

					return;
				}

				await _({ text: `Role set to ${T}.`, undo: () => _Q(M.id, I) });
			}
		}));
	}

	function z(M, L, _) {
		M.replaceChildren(G(_ ? "p.success.noicon" : "p.error.noicon", L));
	}

	function A(M, L) {
		return G("div.mod-kv-row", G("span.mod-kv-label", M), G("span.mod-kv-value", L));
	}

	let v = G("input.box", { type: "text", placeholder: "Search by username..." }),
		S;

	if ((
		v.oninput = () => {
			(
				clearTimeout(S),
				S = setTimeout(() => void q(v.value.trim()), 250)
			);
		},

		v.onkeydown = (M) => {
			if (M.key == "Enter") (clearTimeout(S), q(v.value.trim()));
		},
		q(""),
		$ !== void 0
	)) W($, void 0, !0);

	return G("div.mod-users", G("div.mod-users-left", G("div.input.mod-search", v), Y, Q), J);
}

function cG($, Q, J) {
	if (Q == null) return G("span.mod-audit-actor", G("span.desc", `${$}: -`));

	return G(
		"span.mod-audit-actor",
		G("span.desc", `${$}:`),
		J
			? G("span.mod-jump-name.tooltip", J, {
				dataset: { tooltip: g.jumpTo },
				async onclick() {
					if (await f0({ userId: Q, username: J })) (p(), I$({ label: "Audit Log", reopen: () => s("audit") }));
				}
			})
			: "",
		G("span.desc", `#${Q}`),
		G("button.btn.mod-id-link", "View user", {
			onclick() {
				s("users", Q, { label: "Audit Log", reopen: () => s("audit") });
			}
		})
	);
}

function vq($) {
	let Q = G("div.mod-wipe-audit");

	if ($.thumbnail) {
		let Z = G("img.mod-wipe-thumb", {
			src: $.thumbnail,
			alt: "Cleared region",
			title: "Click to enlarge"
		});

		(
			Z.addEventListener("click", () => gq($.thumbnail)),
			Q.append(Z)
		);
	}

	let J = G("div.mod-wipe-info"),
		Y = $.width != null ? ` · ${$.width}×${$.height} at ${$.x},${$.y}` : "";

	if ((
		J.append(G("div.desc", `${$.cleared ?? $.applied ?? 0} px cleared${Y}`)),
		$.owners?.length
	)) J.append(G("div.mod-wipe-owners", G("span.desc", "Cleared owners:"), ...$.owners.map((Z) => G("button.btn.mod-id-link", `${Z.username ?? "#" + Z.user_id} (${Z.pixels})`, {
		onclick() {
			s("users", Z.user_id, { label: "Audit Log", reopen: () => s("audit") });
		}
	})))); else J.append(G("span.desc", g.noOwners));

	return (Q.append(J), Q);
}

function gq($) {
	let Q = () => {
			(document.removeEventListener("keydown", J, !0), Y.remove());
		},
		J = (Z) => {
			if (Z.key === "Escape") (Z.stopPropagation(), Q());
		},
		Y = G("div.modal-bg.confirm-bg.mod-wipe-expand-bg", G("div.modal-container", G("div.modal-title", G("span", "Cleared region"), G("button.btn", "Close", { onclick: Q })), G("div.modal-content", G("img.mod-wipe-expand-img", { src: $, alt: "Cleared region" }))));

	(
		Y.addEventListener("click", (Z) => {
			if (Z.target === Y) Q();
		}),
		document.addEventListener("keydown", J, !0),
		document.body.append(Y)
	);
}

function bG() {
	let $ = G("div.list.mod-list"),
		Q = G("div.mod-status"),
		J = G("div.btn-container"),
		Y = G("input.box", { type: "text", placeholder: g.searchAudit }),
		Z = G("select.box.outset", G("option", "All actions", { value: "" }), ...g.auditActions.map((X) => G("option", X, { value: X }))),
		q = G("select.box.outset", G("option", "Newest first", { value: "desc" }), G("option", "Oldest first", { value: "asc" })),
		K = null;

	async function W(X) {
		if (X) (K = null, $.replaceChildren(), J.replaceChildren());

		Q.replaceChildren("Loading...");

		let j = Y.value.trim(),
			P = await b4({
				before: K ?? void 0,
				limit: 25,
				action: Z.value || void 0,
				search: j || void 0,
				order: q.value === "asc" ? "asc" : "desc"
			});

		if (!P.ok) {
			Q.replaceChildren(G0(await u(P)));

			return;
		}

		let { entries: C, next_cursor: z } = await P.json();

		if ((Q.replaceChildren(), X && !C.length)) {
			let A = !!j || !!Z.value;

			$.replaceChildren(G("p.desc", A
				? "No audit entries match these filters."
				: "No audit entries."));
		} else for (let A of C) $.append(H(A));

		(
			K = z,
			J.replaceChildren(K
				? G("button.btn", "Load more", {
					onclick() {
						W(!1);
					}
				})
				: "")
		);
	}

	(Z.onchange = () => void W(!0), q.onchange = () => void W(!0));

	let F;

	(
		Y.oninput = () => {
			(clearTimeout(F), F = setTimeout(() => void W(!0), 300));
		},

		Y.onkeydown = (X) => {
			if (X.key === "Enter") (clearTimeout(F), W(!0));
		}
	);

	function H(X) {
		let j = X.action === "wipe_canvas" ? vq(X.details) : G("div.details", X1(X.details));

		return G("div.item.box.outset.mod-audit", G("div.mod-audit-head", G("b", X.action), G("span.desc", w0(X.created_at))), G("div.mod-audit-meta", cG("mod", X.mod_id, X.mod_username), cG("target", X.target_id, X.target_username)), j);
	}

	return (
		W(!0),
		G(
			"div.mod-audit-tab",
			G("div.btn-container.mod-toolbar.mod-audit-toolbar", G("div.input.mod-audit-search", Y), Z, q, G("button.btn", "Refresh", {
				onclick() {
					W(!0);
				}
			})),
			Q,
			$,
			J
		)
	);
}

var fG = ($) => ({
	onclick() {
		s("users", $, { label: "Referrals", reopen: () => s("referrals") });
	}
});

function lG() {
	let $ = G("div.list.mod-list"),
		Q = G("div.mod-status"),
		J = G("div.btn-container"),
		Y = 0;

	async function Z(K) {
		if (K) (Y = 0, $.replaceChildren(), J.replaceChildren());

		Q.replaceChildren("Loading...");

		let W = await O4(Y);

		if (!W.ok) {
			Q.replaceChildren(G0(await u(W)));

			return;
		}

		let F = await W.json();

		if ((Q.replaceChildren(), K && !F.length)) $.replaceChildren(G("p.desc", "No referrals.")); else for (let H of F) $.append(q(H));

		(
			Y += F.length,
			J.replaceChildren(F.length >= 20
				? G("button.btn", "Load more", {
					onclick() {
						Z(!1);
					}
				})
				: "")
		);
	}

	function q(K) {
		let W = G("div.mod-action-msg"),
			F = G(
				"div.item.box.outset.mod-review",
				G("div.mod-review-head", G("b", K.code), !K.verified && G("span.mod-tag.flagged", "Not verified"), K.flagged && G("span.mod-tag.banned", "Flagged"), w0(K.created_at)),
				G("p.desc", "Created by ", G("a.link", K.username, fG(K.user_id)), ` (#${K.user_id}) · ${K.uses} uses`),
				G(
					"div.mod-form-row",
					G("button.btn", "List Users", {
						async onclick() {
							let H = await (await B4(K.user_id)).json();

							W.replaceChildren(G("div.details.pre", !H.length && "None", H.map((X, j) => [
								G("span", G("a.link", X.username, fG(X.id)), " (", w0(X.created_at, new Date(X.created_at).toLocaleDateString()), ")"),
								j < H.length - 1 && "; "
							])));
						}
					}),
					!K.verified && G("button.btn", "Verify", {
						async onclick() {
							if (!await i(u0(g.referral.confirmVerify, K.username))) return;

							let X = await yQ(K.code, "verify");

							if (!X.ok) {
								W.replaceChildren(G("p.error.noicon", await u(X)));

								return;
							}

							(K.verified = !0, K.flagged = !1, F.replaceWith(q(K)));
						}
					}),
					G("button.btn", "Delete", {
						async onclick() {
							if (!await i(u0(g.referral.confirmDelete, K.username))) return;

							let X = await yQ(K.code, "delete");

							if (!X.ok) {
								W.replaceChildren(G("p.error.noicon", await u(X)));

								return;
							}

							F.remove();
						}
					})
				),
				W
			);

		return F;
	}

	return (
		Z(!0),
		G(
			"div.mod-review-tab",
			G("p", g.referral.desc),
			G("div.btn-container.mod-toolbar", G("button.btn", "Refresh", {
				onclick() {
					Z(!0);
				}
			})),
			Q,
			$,
			J
		)
	);
}

function dG() {
	let $ = G("div.mod-action-msg"),
		Q = G("p.desc.mod-bot-mapping"),
		J = G("input.box.mod-bot-slider", { type: "range", min: "-1", max: "120", step: "1", value: "0" }),
		Y = (q) => {
			if (q === -1) return "Global chat is disabled (-1 / inf)";
			if (q === 0) return "Global chat has no cooldown";

			return `Global chat has ${A0(q, "second")} of cooldown`;
		},
		Z = () => {
			Q.replaceChildren(Y(Number(J.value)));
		};

	return (
		J.oninput = Z,
		(async () => {
			let q = await d4();

			if (!q.ok) {
				$.replaceChildren(G0(await u(q)));

				return;
			}

			(
				J.value = String(Math.floor(Number(await q.text()) / 1000)),
				Z()
			);
		})(),

		G("div.mod-misc-config", G("p.desc", "Configure the global delay required between global user chat messages."), G("div.mod-form", G("div.mod-bot-slider-row", G("span.desc", "inf"), J, G("span.desc", "120s")), Q, $, G("div.mod-form-row", G("button.btn", "Save", {
			async onclick() {
				let q = Number(J.value), K = await u4(q);

				if (!K.ok) {
					$.replaceChildren(G0(await u(K)));

					return;
				}

				$.replaceChildren(G("p.success.noicon", g.gwValSaved));
			}
		}))))
	);
}

var g = {}, kJ = !1;

async function nG() {
	if (kJ || !v0()) return;

	kJ = !0;

	let $ = await N.mod.locale.$get();

	if (!$.ok) return (kJ = !1, m0($, "Could not load mod locale"));

	let Q = await $.json();

	for (let J in Q) g[J] = Q[J];
}

function v0() {
	let $ = R.user?.role;

	return $ === "moderator" || $ === "admin";
}

function O6() {
	return R.user?.role === "admin";
}

var xq = new Set(["review", "broadcast", "botconfig"]);

function uG($) {
	if ($ === "inspect") return (p(), m6(), !0);
	if ($ === "wipe") return (p(), p8(), !0);

	return !1;
}

function oG($) {
	switch ($) {
		case "users":
			return zJ();

		case "review":
			return MG();

		case "audit":
			return bG();

		case "feedback":
			return NG();

		case "referrals":
			return lG();

		case "broadcast":
			return zG();

		case "botconfig":
			return UG();

		case "misc":
			return dG();

		case "inspect":

		case "wipe":
			throw new Error(`mod tool tab "${$}" has no panel`);
	}
}

function MJ($) {
	return G("div.mod-back", G("button.btn.mod-back-btn", `↩ Back to ${$.label}`, {
		onclick() {
			$.reopen();
		}
	}));
}

async function tG($) {
	let Q = await N.mod.users.idFromName.$get({ query: { name: $ } });

	if (!Q.ok) return m0(Q, "Could not fetch user");

	let J = await Q.json();

	s("users", J.id);
}

function s($ = "users", Q, J) {
	if (!v0()) return;
	if ((Q6(), uG($))) return;

	let Y = G("div.pad.mod-body");

	if (J) Y.append(MJ(J));

	Y.append($ === "users" ? zJ(Q) : oG($));

	let Z = Object.keys(g.tabLabels).filter((X) => O6() || !xq.has(X)),
		q = s1(Z.map((X) => ({
			label: g.tabLabels[X],
			active: X == $,
			action() {
				if (uG(X)) return;

				(W(X), Y.replaceChildren(oG(X)));
			}
		}))),
		K = Array.from(q.querySelectorAll(".abtn"));

	function W(X) {
		Z.forEach((j, P) => K[P]?.classList.toggle("active", j == X));
	}

	let F = Z.indexOf("feedback"),
		H = F >= 0 ? K[F] : void 0;

	if (H) (async () => {
		try {
			let X = await N4();

			if (!X.ok) return;

			let { total: j } = await X.json();

			if (j > 0) H.append(G("span.mod-tab-dot.tooltip", {
				dataset: { tooltip: `${j} open feedback item${j === 1 ? "" : "s"}` }
			}));
		} catch {}
	})();

	new y("Moderation", G("div.mod-modal.nopad", q, Y));
}

var pq = ($) => Math.max(Math.min($ * 50 + 1500, 1e4), 2000);

function sG($, Q) {
	let J = $ ? b8 : B6;

	if ((J.prepend(Q), J.childElementCount >= 200)) J.children[200]?.remove();
}

function z7($, Q, J, Y, Z, q = !1, K) {
	let W = $ == R.connectionId,
		F = Y ?? R.user.username,
		H = G(
			"p.box",
			{
				ondblclick: () => UJ(F),
				onclick: (j) => {
					if (j.shiftKey) UJ(F);
				}
			},
			G(
				"b.tooltip",
				Z && G("b", H8(Z)),
				F,
				v0()
					? {
						dataset: { tooltip: "Click to open mod panel" },
						onclick: () => void tG(Y)
					}
					: {
						dataset: { tooltip: "Click to jump to the user!" },
						onclick: () => void f0({ connId: $, fallbackPos: J, username: F })
					},
				W && { className: "self" }
			),
			G("span", Q)
		);

	if (Q.split(/\s+/).includes(R.user.username)) H.classList.add("important");
	if (K !== void 0) H.dataset.uid = String(K);

	sG(q, H);
}

function k7($) {
	for (let Q of [B6, b8]) o0(`p.box[data-uid="${$}"]`, Q).forEach((J) => J.remove());
}

function aG($, Q, ...J) {
	sG(Q, G("p.box.local", $ && { className: "error" }, G("span", J)));
}

function U7($, Q) {
	if (!$.element || x.a11y.hideChatBubbles) return;

	let J = G("p", Q);

	(
		$.element.querySelector(".chat-bubble")?.append(J),
		setTimeout(() => J.remove(), pq(Q.length))
	);
}

async function rG($, Q) {
	let J = await v$(6, { message: $, isGlobal: Q }, 5000);

	if ("error" in J) {
		let Y = J;

		if (Y.error == "muted") aG(!0, Q, `You are muted. (expires: ${n6(Y.until || null)})`); else if (Y.error == "chatCooldown") (
			r1(Y.until),
			aG(!0, Q, Y.until
				? "Global chat is on cooldown!"
				: "Global chat is disabled.")
		);
	}

	if (!J.message) return;
	if (J.cooldown !== void 0) r1(J.cooldown);

	$4(J.message);
}

function iG() {
	if (D.normalizedZoom <= K8) return (Y0("You need to zoom in to chat locally!"), !0);

	return !1;
}

var f8 = !1,
	B6 = G("div.list"),
	b8 = G("div.list"),
	eG = G("div.top-bar"),
	H6 = G("div.chat-log", eG, b8),
	CJ = !1,
	S6 = !1;

function E8() {
	(
		eG.replaceChildren(G("p#player-count", `${A0(R.onlinePlayers, "player")} online`), G(
			"div.box.tabs",
			G("button.btn.tooltip", "Local", f8 && { className: "active" }, {
				dataset: { tooltip: "Nearby Cursors Only" },
				onclick: () => {
					(CJ = !1, $3());
				}
			}),
			G("button.btn.tooltip", "Global", !f8 && { className: "active" }, {
				dataset: { tooltip: "All Online Users" },
				onclick: () => {
					(CJ = !0, Q3());
				}
			}),
			G("button#pin-chat-btn.btn.tooltip", G("img", { src: "/static/icon/tool/pin.png", draggable: !1, alt: "Pin" }), S6 && { className: "primary" }, {
				onclick() {
					S6 = !S6;

					let $ = H6.parentElement;

					if (S6) $.style.setProperty("display", "block", "important"); else $.style.removeProperty("display");

					E8();
				},

				dataset: {
					tooltip: S6
						? "Chat is pinned (stays on screen)"
						: "Chat is not pinned (auto-hides)"
				}
			})
		)),

		o0("div.chat-input-box").forEach(($) => {
			$.classList.toggle("global", !f8);
		})
	);
}

function $3() {
	if (iG()) return;

	(f8 = !0, b8.replaceWith(B6), E8());
}

function Q3() {
	(f8 = !1, B6.replaceWith(b8), E8());
}

function J3() {
	if (CJ) return;
	if (D.normalizedZoom <= K8) Q3(); else $3();
}

var _6 = 0;

function cq($) {
	if ($ === void 0) $ = 0;
	if ((_6 = $, !$)) return $;

	let Q = Math.round(($ - Date.now()) / 1000);

	if (Q <= 0) return (_6 = 0, 0);

	return (_6 = $, Q);
}

function r1($) {
	let Q = cq($), J = Q === null ? "inf" : `${Q}s`;

	o0("div.chat-input-box").forEach((Y) => {
		if (Q == 0) delete Y.dataset.cooldown; else Y.dataset.cooldown = J;
	});
}

setInterval(
	() => {
		if (_6) r1(_6);
	},
	500
);

var bq = /^can i ha[sz] cursor pl[zs]\??$/i;

function Z5($ = !1) {
	let Q = !1,
		J,
		Y = G("input#chat-input-field.input.box", {
			type: "text",
			spellcheck: !1,
			maxLength: d6,
			placeholder: window.innerWidth < 1200 ? "Message..." : "Type here to send a message!",
			onfocus() {
				if (!$) return;

				J = setInterval(
					() => {
						Y.scrollIntoView({ block: "end" });
					},
					500
				);
			},

			onblur() {
				(clearInterval(J), J = null);
			},

			onkeypress(K) {
				if (K.key == "Enter") Z.click(); else if (K.key == "Escape") (Y.value = "", Y.blur());
			}
		}),
		Z = $$("tool/send", {
			id: "tool-send-btn",
			ariaLabel: "Send Message",
			async onclick() {
				let K = Y.value.slice(0, d6).trim();

				if (!K || Q) return;

				try {
					if ((
						Q = !0,
						Y.readOnly = !0,
						q.style.opacity = "0.5",
						bq.test(K) && !x.flags.plzCursor
					)) {
						if (!await y$({ code: "CAN_I_HAS_CURSOR" })) {
							(
								new y("plz?", G("p", "yes u may haz cursor")),
								x.flags.plzCursor = !0,
								T0()
							);

							return;
						}
					}

					(await rG(K, !f8), Y.value = "");
				} finally {
					(
						await t6(500),
						Q = !1,
						Y.readOnly = !1,
						q.style.opacity = "1"
					);
				}
			}
		}),
		q = G("div.chat-input-box", Y, Z);

	return q;
}

function X7() {
	return (
		E8(),
		G("div.input.chat-box.container", G("div.popup.box.outset.chat-log-wrapper", H6), Z5())
	);
}

function UJ($, Q = !0) {
	let J = f("input#chat-input-field");

	if (!J) return;

	let Y = J.value, Z = Y && Y.at(-1) != " ";

	if ((J.value = `${Y}${Z ? " " : ""}${$} `.slice(0, d6), Q)) J.focus();
}

var S1 = 1.5,
	K8 = 0.8,
	$0 = G("canvas", { width: d, height: M0 }),
	Y3 = "/static/brick-background.jpg",
	fq = "/static/brick-background-hi.webp",
	DJ = G("img.canvas-background", { fetchPriority: "high", src: Y3, draggable: !1 }),
	H$ = null,
	y6 = !1,
	lq = 0.8;

function G3() {
	if (H$ || x.a11y.lowQualityBg) return;

	(H$ = new Image(), H$.decoding = "async", H$.src = fq);
}

var Z3 = window.requestIdleCallback ?? (($) => setTimeout($, 800));

Z3(G3);

function dq() {
	if (y6) return;
	if (D.zoom < lq) return;
	if (!H$ || !H$.complete || H$.naturalWidth === 0) return;

	(DJ.src = H$.src, y6 = !0);
}

var q3 = () => y6 || H$ || Z3(G3);

function K3() {
	if (!y6) return;

	(DJ.src = Y3, y6 = !1, H$ = null);
}

var u$ = G("div.paint-layers", j6, E1, $0),
	j$ = G("div.canvas-container", DJ, u$),
	z0 = G("div.canvas-wrapper", j$),
	B$ = $0.getContext("2d", { willReadFrequently: !0 }),
	D = {
		x: 0,
		y: 0,
		zoom: 1,
		normalizedZoom: 1,
		rect: $0.getBoundingClientRect(),
		viewport: { x: 0, y: 0, x2: 0, y2: 0 }
	},
	uq = 1920;

function oq() {
	D.zoom = Math.max(D.zoom, l8());

	let $ = $0.width * D.zoom,
		Q = $0.height * D.zoom,
		J = window.innerWidth - $,
		Y = window.innerHeight - Q;

	(
		D.x = $ >= window.innerWidth
			? Math.min(Math.max(D.x, J), 0)
			: window.innerWidth / 2 - $ / 2,

		D.y = Q >= window.innerHeight
			? Math.min(Math.max(D.y, Y), 0)
			: window.innerHeight / 2 - Q / 2
	);
}

function N0() {
	if ((
		oq(),
		j$.style.setProperty("--zoom", D.zoom.toString()),
		j$.style.transform = `translate(${D.x}px, ${D.y}px) scale(${D.zoom})`,
		D.rect = $0.getBoundingClientRect(),
		j$.style.imageRendering = D.rect.width >= window.innerWidth && D.zoom > 1 ? "pixelated" : "optimizeQuality",
		D.normalizedZoom = D.zoom / (window.innerWidth / uq),
		J3(),
		D.normalizedZoom <= K8
	)) document.body.classList.remove("cursors-visible"); else document.body.classList.add("cursors-visible");

	(
		bY({
			x: D.rect.left,
			y: D.rect.top,
			w: window.innerWidth,
			h: window.innerHeight,
			zoom: D.rect.width / $0.width
		}),
		dq(),
		D.viewport = bQ(),
		x.camera.zoom = D.zoom,
		x.camera.x = D.x,
		x.camera.y = D.y,
		T0()
	);
}

function l8() {
	return Math.max(window.innerWidth / $0.width, window.innerHeight / $0.height);
}

function F3() {
	if (x.camera.zoom != 0) {
		(
			D.zoom = x.camera.zoom,
			D.x = x.camera.x,
			D.y = x.camera.y,
			N0()
		);

		return;
	}

	(
		D.zoom = l8(),
		N0(),
		D.x = window.innerWidth / 2 - D.rect.width / 2,
		D.y = window.innerHeight / 2 - D.rect.height / 2,
		N0()
	);
}

function E6($, Q, J, Y, Z = 0.6) {
	let q = Math.min(window.innerWidth * Z / Math.max(J, 1), window.innerHeight * Z / Math.max(Y, 1)),
		K = Math.min(Math.max(q, l8()), 40);

	(D.zoom = K, N0());

	let W = D.rect.width / $0.width,
		F = D.rect.left + ($ + J / 2) * W,
		H = D.rect.top + (Q + Y / 2) * W;

	(
		D.x += window.innerWidth / 2 - F,
		D.y += window.innerHeight / 2 - H,
		N0()
	);
}

var LJ = !1;

async function W3($, Q, J = 60, Y = 160) {
	if (LJ) return !1;

	LJ = !0;

	let Z = D.viewport.x2 - D.viewport.x,
		q = D.viewport.y2 - D.viewport.y,
		K = D.viewport.x + Z / 2,
		W = D.viewport.y + q / 2,
		F = (H) => H == 0
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
			C = Z + (Y - Z) * X,
			z = q + (Y - q) * X;

		(
			E6(j - C / 2, P - z / 2, C, z, 1),
			await t6(16.666666666666668)
		);
	}

	return (LJ = !1, !0);
}

window.addEventListener("resize", N0);

function X3() {
	let Q = R.user.username,
		J = !1,
		Y = G("p.warning"),
		Z = (X, j = "") => {
			(Y.textContent = X, Y.className = j);
		},
		q = G("input.input.box", {
			type: "text",
			placeholder: "Username...",
			maxLength: 16,
			value: Q
		}),
		K = G("button.btn", "Cancel", {
			onclick: () => {
				if (q.value != Q) {
					q.value = Q;

					return;
				}

				p(!0);
			}
		}),
		W = G("button.btn.primary", "Save");

	requestAnimationFrame(() => {
		Y.style.maxWidth = q.offsetWidth + "px";
	});

	let F = !1;

	function H() {
		let X = q.value.replace(/[^a-z0-9_.-]/g, "");

		if (q.value != X) q.value = X;

		let j = X != Q, P = G6(X);

		if ((W.disabled = !j || !!P || J, Z0)) if ((F = j, F)) Z0.lockLevel++; else Z0.lockLevel--;
		if (j && P) Z(P, "warning"); else if (Y.className == "warning") Z("");
	}

	return (
		q.oninput = H,
		W.onclick = async () => {
			if (J) return;

			let X = q.value;

			if (X == Q) return p(!0);

			if (G6(X)) {
				H();

				return;
			}

			if (!await i(`Change your username to "${X}"?`, "Change Username", "Change", "Keep Current")) return;

			(J = !0, Z(""), q0(), Z0.lockLevel = 1);

			try {
				let P = await EQ({ username: X });

				if ((e8(), J = !1, typeof P == "string")) {
					(Z(P, "warning"), H());

					return;
				}

				(
					Q = R.user?.username ?? X,
					q.value = Q,
					Z("Username updated!", "success"),
					H()
				);
			} catch(P) {
				(
					e8(),
					J = !1,
					Z(P?.message || "Something went wrong", "warning"),
					H()
				);
			}
		},
		G("div.username-settings", G("h3", "Username"), q, Y, G("div.btn-container", K, W))
	);
}

var nq = 300, tq = 1000, aq = J0.url.api;

async function AJ($) {
	try {
		let Q = await fetch(aq + $, { cache: "no-store" });

		if (!Q.ok) return null;

		return await Q.json();
	} catch {
		return null;
	}
}

function v6($) {
	if ($ == null) return "—";
	if ($ < 1) return $.toFixed(2) + " ms";
	if ($ < 100) return $.toFixed(1) + " ms";

	return Math.round($) + " ms";
}

function j3($) {
	if ($ == null) return "—";
	if ($ < 1024) return `${$} B`;
	if ($ < 1048576) return `${($ / 1024).toFixed(1)} KB`;

	return `${($ / 1024 / 1024).toFixed(1)} MB`;
}

function H3($) {
	if ($ == null) return "—";

	return $.toFixed(2) + "%";
}

function F8($, Q) {
	if ($ == null) return "—";

	return Q($);
}

var wJ = G("div.dev-overlay"),
	I0 = {
		active: !1,
		fps: 0,
		fpsFrameCount: 0,
		fpsWindowStart: performance.now(),
		wsState: "—",
		panel: wJ
	};

function sq($) {
	return ({
		[WebSocket.CONNECTING]: "CONNECTING",
		[WebSocket.OPEN]: "OPEN",
		[WebSocket.CLOSING]: "CLOSING",
		[WebSocket.CLOSED]: "CLOSED"
	})[$] || "—";
}

function rq() {
	return `${~~(D.viewport.x2 - D.viewport.x)}x${~~(D.viewport.y2 - D.viewport.y)} px / ${a$.size} chunks`;
}

function iq() {
	let $ = performance.memory;

	if (!$) return "n/a";

	let Q = $.usedJSHeapSize ?? 0,
		J = $.totalJSHeapSize ?? 0;

	return `${j3(Q)} / ${j3(J)}`;
}

function V3() {
	if (!I0.active) return;

	I0.fpsFrameCount++;

	let $ = performance.now(),
		Q = $ - I0.fpsWindowStart;

	if (Q >= 1000) (
		I0.fps = Math.round(I0.fpsFrameCount * 1000 / Q),
		I0.fpsFrameCount = 0,
		I0.fpsWindowStart = $
	);

	requestAnimationFrame(V3);
}

function D0($, Q) {
	return G("div.dev-overlay-row", G("span.dev-overlay-label", $), G("span.dev-overlay-value", Q));
}

function i1($, ...Q) {
	return G("div.dev-overlay-section", G("div.dev-overlay-section-title", $), ...Q);
}

var TJ, P3 = 0;

async function eq() {
	if (!P$) return "";

	if (!TJ || P3 < Date.now()) (
		P3 = Date.now() + tq,
		TJ = await Promise.all([
			AJ("/metrics/loop-lag"),
			AJ("/metrics/sendbulk"),
			AJ("/metrics/canvas-density")
		])
	);

	let [$, Q, J] = TJ;

	return i1("server", D0("loop lag p99 / max", `${F8($?.p99_ms, v6)} / ${F8($?.max_ms, v6)}`), D0("sendBulk last-10s cpu", F8(Q?.last_10s?.cpu_pct_of_window, H3)), D0("sendBulk p99 / max", `${F8(Q?.p99_call_ms, v6)} / ${F8(Q?.max?.call_ms, v6)}`), D0("sendBulk avg fanout", F8(Q?.avg_fanout, (Y) => Y.toFixed(0))), D0("canvas density", F8(J?.density_pct, H3)));
}

async function R3() {
	if (!I0.active) return;

	(
		setTimeout(R3, nq),
		I0.wsState = sq(K0?.readyState),
		I0.panel.replaceChildren(G("div.dev-overlay-title", "wall: dev"), await eq(), i1("ws", D0("state", I0.wsState), D0("connection id", String(R.connectionId)), D0("ping rtt", v6(R.debug.ping)), D0("identified", R.user ? "yes" : "no")), i1("client", D0("fps", String(I0.fps)), D0("memory (jsHeap)", iq()), D0("known users", String(V0.size)), D0("paint remaining", `${R.paintRemaining} (${Math.round(R.paintRemaining / L0)} cans)`)), i1("camera", D0("translation", `${D.x.toFixed(2)}, ${D.y.toFixed(2)}`), D0("zoom", `${D.zoom.toFixed(1)} client / ${D.normalizedZoom.toFixed(1)} normal`), D0("viewport", rq()), D0("cursor", `${R.cursorX}, ${R.cursorY}`)))
	);
}

function e1() {
	if (I0.active) return;

	(
		I0.active = !0,
		document.body.append(wJ),
		requestAnimationFrame(V3),
		R3()
	);
}

function M3() {
	if (!I0.active) return;

	(wJ.remove(), I0.active = !1);
}

function W8($, Q, J = "") {
	let Y = `s_${$}`,
		Z = G("input", {
			type: "checkbox",
			id: Y,
			checked: !!x.a11y[$],
			onchange() {
				if (Z.checked) x.a11y[$] = !0; else delete x.a11y[$];

				(g6(), T0());
			}
		});

	return G("div.checkbox", Z, G("label.tooltip", Q, { dataset: { tooltip: J }, htmlFor: Y }));
}

function $Q() {
	let $ = new y("Settings", G("div.settings-modal", G("h3", "Accessibility"), W8("darkTheme", "Dark Theme"), W8("lowQualityBg", "Low Quality Background", "Enable this if you're experiencing lag"), W8("hideNameplates", "Hide Nameplates", "Shows cursors, but removes names/chat bubbles"), W8("hideCursors", "Hide Other Cursors", "Completely hides all cursors on the canvas"), W8("systemCursor", "Use System Cursor", "Local only. Use this if you have issues with our custom cursor"), W8("hideChatBubbles", "Hide Chat Bubbles", "Do not show chat bubbles next to users. Chat is still available."), W8("devOverlay", "Stats For Nerds"), R.user && X3())),
		Q = $.titleElement.querySelector("button.icon");

	if (Q) Q.onclick = () => $.close(!0);

	return $;
}

function g6() {
	let $ = x.a11y;

	if ($.hideCursorKeybind) ($.hideCursorKeybind = !1, $.hideCursors = !1);

	if ((
		$.hideOwnCursor = !!$.hideCursors,
		document.body.classList.toggle("dark", !!$.darkTheme),
		document.body.classList.toggle("hide-nameplates", !!$.hideNameplates),
		$.hideCursors
	)) n$.remove(); else j$.append(n$);

	if ($.systemCursor) s8(); else e6();
	if ($.lowQualityBg) K3(); else q3();
	if ($.devOverlay) e1(); else M3();
}

var i0 = !1,
	D$ = 0,
	A$ = 0,
	z3 = [0, 2, 3, 4],
	x6 = !1,
	IJ = !1,
	$K = "1234567890";

document.body.addEventListener("keydown", ($) => {
	if (Z0 || $.target != document.body) return;

	if ((n8 ? $.metaKey : $.ctrlKey) && ($.key == "z" || $.key == "Z" || $.key == "y")) {
		if (($.preventDefault(), i0 = !1, $.key == "z")) p1(); else c1();

		return !1;
	} else if ($.key == "z" || $.key == "h") f("#tool-hand").click(); else if ($.key == "x" || $.key == "b") f("#tool-spray").click(); else if ($.key == "c") y1(); else if ($.key == "-") mJ(1, 0.2); else if ($.key == "=") mJ(-1, 0.2); else if ($.key == "m") f("#tool-preview").click(); else if ($.key == "k") {
		let J = x.a11y;

		if ((J.hideCursors = !J.hideCursors, g6(), J.hideCursors)) J.hideCursorKeybind = !0;

		T0();
	} else if ($.key == "t" || $.key == "Enter") setTimeout(
		() => {
			let J = f("#tool-chat");

			if (J.checkVisibility()) J.click(); else f(".chat-box input").focus();
		},
		10
	); else if ($K.includes($.key)) {
		let J = parseInt($.key) || 10;

		K7(J);
	} else if ($.key == "p") {
		let J = h1(...y0(D$, A$));

		if (J) Q8(J, !0);
	} else if (QK.has($.key.toLowerCase())) (i0 = !1, f$.add($.key.toLowerCase()), YK());
});

var QK = new Set(["w", "a", "s", "d"]),
	JK = 900,
	f$ = new Set(),
	JQ = null,
	hJ = 0;

function YK() {
	if (JQ != null) return;

	(hJ = performance.now(), JQ = requestAnimationFrame(C3));
}

function GK() {
	f$.clear();
}

function C3($) {
	if (Z0 || !f$.size) {
		JQ = null;

		return;
	}

	let Q = Math.min($ - hJ, 100) / 1000;

	hJ = $;

	let J = JK * D.zoom * Q, Y = 0, Z = 0;

	if (f$.has("w")) Z += 1;
	if (f$.has("s")) Z -= 1;
	if (f$.has("a")) Y += 1;
	if (f$.has("d")) Y -= 1;

	if (Y || Z) {
		let q = Math.hypot(Y, Z);

		(D.x += Y / q * J, D.y += Z / q * J, N0());
	}

	JQ = requestAnimationFrame(C3);
}

document.body.addEventListener("keyup", ($) => {
	f$.delete($.key.toLowerCase());
});

window.addEventListener("blur", GK);

window.addEventListener("beforeunload", ($) => {
	if (z5()) return ($.preventDefault(), $.returnValue = !0, !1);
});

function k3($, Q) {
	if (R.activeTool != 1 || D.normalizedZoom < S1) return;
	if (R.openAt && Date.now() + R.clockOffset < R.openAt) return;
	if (R.paintRemaining + R.localPaintIncrement <= 0) return k5();

	(i0 = !0, D$ = $, A$ = Q);
}

function EJ($, Q) {
	if (x6 || D.normalizedZoom < K8) return;
	if (x.a11y.hideOwnCursor) return;

	let [J, Y] = y0($, Q);

	(R.cursorX = J, R.cursorY = Y);
}

function U3($, Q) {
	(x6 = !0, D$ = $, A$ = Q);
}

function L3($, Q) {
	if (x6) (D.x += $ - D$, D.y += Q - A$, N0());

	(D$ = $, A$ = Q);
}

var D3 = 200;

function mJ($, Q = 0.1) {
	let J = D.zoom,
		Y = D.zoom + Q * -Math.sign($) * D.zoom;

	(
		D.zoom = Math.max(Math.min(Y, D3), l8()),
		A3(D.zoom / J, D$, A$)
	);
}

function A3($, Q, J) {
	(
		i0 = !1,
		D.x = Q - (Q - D.x) * $,
		D.y = J - (J - D.y) * $,
		N0(),
		n0()
	);
}

function NJ() {
	if (IJ) {
		if (R.paintRemaining > 0) rY(); else O1();

		IJ = !1;
	}

	if (i0 && t0.length) R7();

	(x6 = !1, i0 = !1, QQ = null);
}

document.body.addEventListener("mousemove", ($) => L3($.x, $.y));

var QQ = null;

document.body.addEventListener("touchmove", ($) => {
	if ($.touches.length == 1) L3($.touches[0].clientX, $.touches[0].clientY); else if ($.touches.length == 2) {
		(
			$.preventDefault(),
			$.stopImmediatePropagation(),
			i0 = !1,
			x6 = !1
		);

		let Q = $.touches[0],
			J = $.touches[1],
			Y = Math.hypot(J.clientX - Q.clientX, J.clientY - Q.clientY);

		if (QQ != null) {
			let Z = Y / QQ, q = D.zoom * Z;

			(
				D.zoom = Math.max(Math.min(q, D3), l8()),
				A3(Z, (Q.clientX + J.clientX) / 2, (Q.clientY + J.clientY) / 2)
			);
		}

		return (QQ = Y, !1);
	}
});

document.body.addEventListener("mouseup", NJ);
document.body.addEventListener("touchend", NJ);
document.body.addEventListener("touchcancel", NJ);

function k5() {
	IJ = !0;
}

function T3() {
	(
		$0.addEventListener("mousedown", ($) => {
			if ($.button == 0) k3($.x, $.y);
		}),

		$0.addEventListener(
			"touchstart",
			($) => {
				if ($.touches.length == 1) k3($.touches[0].clientX, $.touches[0].clientY);
			},
			{ passive: !0 }
		),
		z0.addEventListener("mousemove", ($) => EJ($.x, $.y)),
		z0.addEventListener(
			"touchmove",
			($) => {
				if ($.touches.length == 1) EJ($.touches[0].clientX, $.touches[0].clientY); else if ($.touches.length == 2) $.preventDefault();
			},
			{ passive: !1 }
		),

		z0.addEventListener("mousedown", ($) => {
			if ($.button != 0 || z3.includes(R.activeTool)) U3($.x, $.y);
		}),

		z0.addEventListener(
			"touchstart",
			($) => {
				if ($.touches.length == 1 && z3.includes(R.activeTool)) {
					let Q = $.touches[0].clientX,
						J = $.touches[0].clientY;

					(EJ(Q, J), U3(Q, J));
				} else if ($.touches.length == 2) $.preventDefault();
			},
			{ passive: !1 }
		),

		z0.addEventListener(
			"wheel",
			($) => {
				if ($.ctrlKey) $.preventDefault();

				(i0 = !1, mJ($.deltaY, 0.1));
			},
			{ passive: !1 }
		),

		z0.addEventListener("dblclick", async ($) => {
			if (D.zoom > 1) return;

			let [Q, J] = y0($.x, $.y);

			W3(Q, J);
		})
	);
}

function w3() {
	(uY(), F3(), wG(), T3());
}

var I3 = Math.min(window.innerWidth, window.innerHeight) <= 800 && window.matchMedia("(pointer: coarse)").matches && document.fullscreenEnabled,
	ZK = 25000000;

function qK($, Q, J, Y, Z) {
	if (typeof Q != "string" || !Q?.length) return "Missing name";
	if (typeof J != "string" || !J?.length) return "Missing location";
	if ($ && $.length > 127) return "Identification is too long";
	if (Q.length > 255) return "Name is too long";
	if (J.length > 255) return "Location is too long";
	if (!Y || !Z) return "Missing file";
	if (!Y.startsWith("image/")) return "Invalid file type (expected an image)";
	if (Z > ZK) return `File is too large (max 25MB; got ${Math.floor(Z / 1000 / 1000)}MB)`;
}

var d8 = -1;

function KK() {
	let $ = f("input#s__id").value,
		Q = f("input#s__name").value,
		J = f("input#s__location").value,
		Y = f("input#s__upload").files,
		Z = Y ? Y.item(0) : null,
		q = qK($, Q, J, Z?.type, Z?.size);

	if (q) return (alert(q), !1);
}

function FK($) {
	let Q = new Intl.DateTimeFormat([], { day: "2-digit", month: "2-digit", year: "numeric" }).format($.submitted_at),
		J = G("div.image");

	if ($.image_file.match(/\.(mp4|webm|ogg|mov)$/i)) J.append(G("video", {
		style: { width: "100%", height: "100%" },
		controls: !0,
		src: `${J0.url.signalArchive}/static/uploads/${$.image_file}`,
		autoplay: !1,
		preload: "none",
		loop: !1,
		muted: !1
	})); else (
		J.style.backgroundImage = `url(${J0.url.signalArchive}/static/uploads/${$.image_file})`,
		J.style.imageRendering = "auto"
	);

	return G("div.window.wpost", G("div.title", G("p", `SIGNAL #${$.num_id}`), G("div.buttons", G("button", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", J, G("div.info", G("p", G("span.label", "SIGNAL NAME"), G("b", $.name)), G("p", G("span.label", "LOCATION"), G("b", $.location)), G("p", G("span.label", "TRANSMITTED"), G("b", Q)))));
}

async function WK() {
	(d8 = 0, await Promise.all([XK(), h3()]));
}

var OJ = !1;

async function h3() {
	if (OJ) return;

	OJ = !0;

	let $ = G("div.f", "Loading...");

	f(".sightings .posts").append($);

	let J = await (await fetch(`${J0.url.signalArchive}/fetch?tag=&after=${d8}&limit=${d8 ? 10 : 4}&at=${Date.now()}`)).json();

	if ((
		f(".sightings .posts").append(...J.map(FK)),
		d8 += J.length,
		$.remove(),
		OJ = !1,
		!J.length
	)) (
		f(".sightings .posts").append(G("div.f", d8 ? "You have reached the end." : "Nothing here yet...")),
		f(".sightings .more").style.display = "none"
	); else f(".sightings .more").style.display = "";
}

async function XK() {}

async function jK() {
	let $ = f(".preview"),
		Q = f("input#s__upload").files?.item(0);

	if (!Q) {
		$.hidden = !0;

		return;
	}

	let J = URL.createObjectURL(new Blob([await Q.arrayBuffer()]));

	($.hidden = !1, $.style.backgroundImage = `url(${J})`);
}

var m3 = G("div.info-container", G("div.window.winfo", G("div.title", G("p", "filian_is_lost.txt"), G("div.buttons", G("button.icon", G("img", { src: "/static/icon/archive/minimize.png", alt: "_" })), G("button.icon", G("img", { src: "/static/icon/archive/maximize.png", alt: "⌷" })), G("button.icon", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", G("h1", "FILIAN IS LOST."), G("p", "She went dark months ago. No posts. No streams. No signals. But we know she's listening. She always is."), G("p", G("b", "The Wall"), " is her frequency. Every mark you leave gets archived: a permanent record of everyone, everywhere, who showed up when she went quiet."), G("p", "Paint something. Make noise. Leave your mark in the archive."), G("p", "Bring her back.")))),
	ZQ = G(
		"div.main",
		m3,
		G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " signal_archive.exe"), G("p", "Loading the signal archive...")),
		G("div.header", G("h1", "SIGNAL ARCHIVE"), G("p", "RECENTLY TRANSMITTED")),
		G("div.post-container", G("div.posts"), G("div.more", G("button", "LOAD MORE", { onclick: h3 }))),
		G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " submit_signal.exe"), G("p", "Loading submission form...")),
		G("div.window.wsubmit", G("div.title", G("p", "submit_signal.exe")), G("div.content", G("h1", "DID YOU FIND SOMETHING?"), G("p", "Submit a signal to the archive"), G(
			"form",
			{
				action: `${J0.url.signalArchive}/submit`,
				method: "post",
				enctype: "multipart/form-data"
			},
			G("label", { htmlFor: "id" }, "Identification (optional)"),
			G("input#s__id", {
				type: "text",
				name: "id",
				placeholder: "Twitter, Discord, etc",
				maxlength: "127"
			}),
			G("label", { htmlFor: "name" }, "Signal Name"),
			G("input#s__name", {
				type: "text",
				name: "name",
				placeholder: "Enter signal name...",
				required: !0,
				maxlength: "255"
			}),
			G("label", { htmlFor: "location" }, "Location"),
			G("input#s__location", {
				type: "text",
				name: "location",
				placeholder: "City, Country",
				required: !0,
				maxlength: "255"
			}),
			G("label", { htmlFor: "s__upload" }, "Upload Image"),
			G("label.input.upload", { htmlFor: "s__upload" }, G("div#file_preview.preview", { hidden: !0 }), G("span", "DRAG FILE HERE OR CLICK TO BROWSE")),
			G("input#s__upload", {
				type: "file",
				name: "image",
				accept: "image/*",
				required: !0,
				onchange: jK
			}),
			G(
				"div.buttons",
				G("input", {
					type: "submit",
					onclick: () => KK(),
					value: "Transmit Signal"
				}),
				G(
					"a.button",
					{
						onclick: () => {
							let $ = ["id", "name", "location", "tag", "upload"];

							for (let Q of $) document.getElementById(`s__${Q}`).value = "";

							f(".preview").hidden = !0;
						}
					},
					"Cancel"
				)
			)
		))),
		G("p", G("a", "Discord", { href: "https://discord.gg/Wjgs9JAbT2", target: "_blank" }), " · ", G("a", "Twitter", { href: "https://x.com/THE_W4LL_", target: "_blank" }), " · ", G("a", "Reddit", {
			href: "https://www.reddit.com/r/THE_WALL_/",
			target: "_blank"
		}))
	),
	YQ = G("div.sightings", G("div.mobile-scroll-btn", { onclick: B3 }, G("button", G("img", { src: "/static/icon/arrow-down.png", draggable: !1 }))), ZQ);

function N3($, Q) {
	let J = $ + Q;

	return J > 0 ? `${j0(J)} online` : "";
}

function E7($, Q) {
	let J = f("#wall-online-count");

	if (J) J.textContent = N3($, Q);
}

function O3($ = !1) {
	(
		sessionStorage.setItem("wall:view", $ ? "wall" : "archive"),
		document.body.append(YQ),
		ZQ.inert = !0
	);

	let Q = f("main");

	if ((
		Q.prepend(G("div.modal-title.wall-title", G("span", G("h3", "the_wall.exe"), G("span.wall-online#wall-online-count", N3(R.onlinePlayers, R.onlineViewers))), G("button.btn", "Full Screen", { style: { color: "var(--text)" }, onclick: E3 }))),
		Q.addEventListener("mouseenter", HK),
		YQ.addEventListener("mouseenter", B3),
		!$
	)) BJ(); else E3();
}

var GQ = !1;

function B3() {
	if (GQ) return;

	if ((
		GQ = !0,
		document.body.classList.remove("noscroll"),
		ZQ.inert = !1,
		m3.scrollIntoView({ behavior: "smooth", block: "center" }),
		d8 < 0
	)) WK();
}

function HK() {
	if (!GQ) return;

	(
		GQ = !1,
		document.body.classList.add("noscroll"),
		f("main").scrollIntoView({ behavior: "smooth", block: "center" }),
		ZQ.inert = !0
	);
}

function E3() {
	if ((
		sessionStorage.setItem("wall:view", "wall"),
		f("main").classList.remove("minimized"),
		YQ.style.display = "none",
		N0(),
		I3
	)) document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
}

function BJ() {
	if ((
		f("main").classList.add("minimized"),
		sessionStorage.setItem("wall:view", "archive"),
		YQ.style.display = "",
		N0(),
		I3
	)) document.exitFullscreen().catch(() => {});
}

var SJ = G("div.actionbar", { role: "toolbar" });

function S3($) {
	let Q = G("button.abtn.btn.action", G1($.label), { ariaLabel: $.label.replace(/[\[\]]/g, "") });

	if ($.active) Q.classList.add("active");

	let J = () => {
		if (!$.menu) return;

		let Y = Q.getBoundingClientRect(),
			Z = typeof $.menu == "function" ? $.menu() : $.menu;

		H4(Z, Y.x, Y.y + Y.height);
	};

	return (
		Q.onclick = () => {
			if (!NQ()) J();
			if ($.action) $.action();
		},

		Q.onmouseover = () => {
			if ($.action) E$();
			if (NQ()) J();
			if (document.activeElement) document.activeElement.blur();
		},
		Q
	);
}

function _J($) {
	SJ.replaceChildren(...$.map(S3), G("div.right-side", G("b.fil", "FILIAN IS LOST"), G(
		"button.btn.icon.minimize-btn",
		{
			ariaLabel: "Minimize",
			onclick() {
				BJ();
			}
		},
		G("img", { src: "/static/icon/close.png", draggable: !1 })
	)));
}

function s1($) {
	return G("div.navbar.custom", G("div.actionbar.custom", $.map(S3)));
}

var e0 = null, p6 = null, qQ = "";

function PK($, Q, J) {
	if (!$) return;
	if (e0) KQ();

	let Y = G("div#tooltip-text.tooltip-popup", { textContent: $, role: "tooltip" });

	(document.body.append(Y), e0 = Y, _3(Q, J));
}

function _3($, Q) {
	if (!e0) return;

	let J = e0.getBoundingClientRect(),
		Y = $ + J.width > window.innerWidth ? window.innerWidth - J.width : $,
		Z = Q + J.height > window.innerHeight ? window.innerHeight - J.height : Q;

	(e0.style.left = `${Y}px`, e0.style.top = `${Z}px`);
}

function KQ() {
	if (!e0) return;
	if (p6) p6.removeAttribute("aria-describedby");

	(e0.remove(), e0 = null, p6 = null, qQ = "");
}

function FQ($, Q, J) {
	if (!$.classList || !$.classList.contains("tooltip")) return;

	let Y = $.dataset.tooltip;

	if (!Y) return;

	let Z = typeof Q == "number" && typeof J == "number";

	if (!Z) {
		let q = $.getBoundingClientRect();

		(Q = q.x, J = q.y);
	}

	if (e0) {
		if (p6 != $) return (KQ(), FQ($, Q, J));
		if (qQ != Y) (e0.textContent = Y, qQ = Y);
		if (Z) _3(Q, J);

		return;
	}

	(
		PK(Y, Q, J),
		p6 = $,
		qQ = Y,
		$.setAttribute("aria-describedby", "tooltip-text")
	);
}

document.addEventListener("mouseover", ($) => FQ($.target, $.x, $.y));
document.addEventListener("mousemove", ($) => FQ($.target, $.x, $.y));
document.addEventListener("focusin", ($) => FQ($.target));
window.addEventListener("mouseout", KQ);
window.addEventListener("click", KQ);

var y3 = {
		stat_pixels_changed: "Pixels Changed",
		stat_paint_visible: "Paint Visible",
		stat_member_count: "User Count"
	},
	yJ = { users: "Users", clans: "Clans", countries: "Countries" },
	vJ = {
		users: ["stat_paint_visible", "stat_pixels_changed"],
		clans: [
			"stat_paint_visible",
			"stat_pixels_changed",
			"stat_member_count"
		],
		countries: [
			"stat_paint_visible",
			"stat_pixels_changed",
			"stat_member_count"
		]
	};

var VK = {
		users: "You're",
		clans: "Your clan is",
		countries: "Your country is"
	},
	RK = {
		stat_member_count: j0,
		stat_pixels_changed: j0,
		stat_paint_visible: u6
	},
	MK = {
		users: ($, Q) => [
			G("b.box", $.clan_name && G("b.clan-label", H8($.clan_name)), $.name),
			G("span.box", Q)
		],
		clans: ($, Q) => [G("b.box", $.name), G("span.box", Q)],
		countries: ($, Q) => [G("b.box", o6($.name)), G("span.box", Q)]
	};

async function c6($, Q, J = 0) {
	q0();

	let Y = await N.leaderboard.$get({ query: { category: $, stat: Q, page: (J || 0).toString() } });

	if (!Y.ok) return m0(Y, "Could not load the leaderboard");

	let Z = await Y.json();

	new y("Leaderboard", G(
		"div.leaderboard-modal.nopad",
		s1(Object.keys(yJ).map((q) => ({
			label: yJ[q],
			active: q == $,
			action() {
				c6(q, vJ[q][0]);
			}
		}))),
		G(
			"div.pad",
			G(
				"select.box.outset",
				{
					oninput(q) {
						let K = q.target.value;

						c6($, K, J);
					}
				},
				vJ[$].map((q) => G("option", y3[q], { value: q, selected: Q == q }))
			),
			typeof Z.position == "number" && Z.ownValue !== 0 && G("p.desc", `${VK[$]} #${j0(Z.position + 1)}!`),
			G("div.list", Z.leaderboard.map((q, K) => G("div.item.box.outset", G("div.box", `${K + 1 + J * 10}`), MK[$](q, RK[Q](q.value))))),
			G(
				"div.btn-container",
				G("a.link", "<<", {
					onclick() {
						if (J == 0) return;

						c6($, Q, J - 1);
					}
				}),
				G("b", `Page ${j0(J + 1)}`),
				G("a.link", ">>", {
					onclick() {
						if (Z.leaderboard.length < 10) return;

						c6($, Q, J + 1);
					}
				})
			)
		)
	));
}

function v3() {
	c6("users", "stat_paint_visible", 0);
}

function WQ($, Q) {
	let J = () => {
			(
				Y.classList.remove("zoom"),
				Y.style.width = Y.style.height = ""
			);
		},
		Y = G("div.img", G("img", { src: $, alt: Q }), {
			onmouseleave: J,
			onclick() {
				let Z = Y.getBoundingClientRect();

				if ((
					Y.style.width = `${Z.width}px`,
					Y.style.height = `${Z.height}px`,
					!Y.classList.toggle("zoom")
				)) J();
			}
		});

	return Y;
}

var XQ = [
		{
			name: "Welcome",
			title: "Welcome to The Wall.",
			content: [
				G("p.notice.noicon", "Filian has been gone for months. No one knows where. No one knows why. What we have is this wall, these cans, and each other. Leave something behind. Maybe she will find it. Maybe we will."),
				G("p", "Read this short guidebook to learn what we know.")
			]
		},

		{
			name: "Draw Together",
			content: [
				G("p.notice.noicon", "You can see cursors moving in real-time on the canvas! Zoom in, find cursors, chat with people, ", "and draw together, all on the same canvas, with thousands of players!"),
				WQ("/static/img/tutorial_cursors.png", "An image of three cursors chatting on the canvas")
			]
		},

		{
			name: "Drawing",
			title: "Drawing Mechanic",
			content: [
				G("p", "The paint mechanic works like real spray paint: move fast to make thin lines, move slowly and the paint starts dripping."),
				WQ("/static/img/tutorial_drawing.png", "An image of the spray can mechanic in-action"),
				G("p", "When you draw, your changes are only visible to you. You can undo, redo, and edit freely without affecting others."),
				G("p", "Click ", G("span.box.inline", "Submit"), " in the toolbar to publish your drawing so everyone can see it instantly!")
			]
		},

		{
			name: "Spray Cans",
			content: [
				G("p", "Each user starts with a set number of spray cans for drawing on the canvas. Every spray can contains the same amount of paint."),
				WQ("/static/img/tutorial_spray_cans.png", "An image of the spray paint bar on the toolbar, with the amount of extra spray cans to the right of it"),
				G("p", G("b", "Drawing consumes paint!"), " When one spray can runs out, the next one is used automatically.", " If you use all your spray cans, a few minute timer starts, after which your paint gets refilled."),
				G("p", "You can also earn extra paint by inviting your friends to ", G("b", "The Wall"), "! ", G("br"), "Go to ", G("span.box.inline", "User > Share Webiste"), " in the action bar to get your own personalized link!")
			]
		},

		{
			name: "Toolbar",
			content: [
				WQ("/static/img/tutorial_hotbar.png", "An image of the website's toolbar, containing text and arrows describing each component"),
				G("p", "Use the ", G("span.box.inline", "Hand Tool"), " to move around the canvas and the ", G("span.box.inline", "Spray Tool"), " to paint. The center bar shows how much paint you have left and matches your selected color."),
				G("p", "When the bar runs out, one spray can is used and the bar refills.", " The number next to the bar shows how many spray cans you have remaining, excluding the current one!"),
				G("p", "Enable ", G("span.box.inline", "Compare Mode"), " to make your local changes semi-transparent ", "so you can compare them with the live canvas")
			]
		},

		{
			name: "End",
			title: "Happy Drawing!",
			content: [
				G("p.success", "You've made it to the end, congratulations! Time to start drawing!"),
				G("p", "You can read this guidebook at any time again later by going to ", G("span.box.inline", "Info > Guidebook"), " in the action bar", { style: { fontSize: "0.8em" } }),
				G("br")
			]
		}
	],
	g3 = XQ.length - 1;

function u8($ = 0) {
	let Q = XQ[$],
		J = XQ[$ - 1],
		Y = XQ[$ + 1],
		Z = $ + 1,
		q = Z <= g3 ? `Guidebook [${Z}/${g3}]` : "Guidebook";

	if (!x.seenGuidebook) (x.seenGuidebook = !0, T0());

	new y(q, G("div.info.tutorial", G("h3", Q.title || Q.name), Q.content, G("div.btn-container", J && G("a.link.prev", `<< ${J.name}`, { onclick: () => u8($ - 1) }), G("a.link.next", `${Y?.name || "Continue"} >>`, { onclick: () => Y ? u8($ + 1) : p() })))).onClose(() => {
		if (!Y) y$({ code: "READ_GUIDEBOOK" });
	});
}

function x3() {
	let $ = window.innerWidth <= 800;

	new y("Keybinds", G(
		"div.info.keybinds",
		$ && G("p.warning.noicon", "These are probably not helpful if you're on mobile..."),
		G("div.section", G("p", "Canvas"), G("div.box.outset", G("div.box", "Move"), G("div.box", "WASD / Right Click")), G("div.box.outset", G("div.box", "Move (hand only)"), G("div.box", "Left Click")), G("div.box.outset", G("div.box", "Zoom"), G("div.box", "Wheel / +-"))),
		G("div.section", G("p", "Tools"), G("div.box.outset", G("div.box", "Hand Tool"), G("div.box", "H or Z")), G("div.box.outset", G("div.box", "Brush Tool"), G("div.box", "B or X")), G("div.box.outset", G("div.box", "Chat"), G("div.box", "T or Enter"))),
		G("div.section", G("p", "Drawing"), G("div.box.outset", G("div.box", "Compare Mode"), G("div.box", "M")), G("div.box.outset", G("div.box", "Undo"), G("div.box", "Ctrl+Z")), G("div.box.outset", G("div.box", "Redo"), G("div.box", "Ctrl+Y")), G("div.box.outset", G("div.box", "Pick Color"), G("div.box", "P")), G("div.box.outset", G("div.box", "Last Used Color"), G("div.box", "1, 2, 3, ...")), G("div.box.outset", G("div.box", "Color Palette"), G("div.box", "C"))),
		G("div.section", G("p", "Other"), G("div.box.outset", G("div.box", "Hide Cursors"), G("div.box", "K")), G("div.box.outset", G("div.box", "Reply To User (chat)"), G("div.box", "Shift+Click / Dblclick")), !$ && !x.flags.konamiCursor && R.user && Math.random() > 0.8 && G("div.box.outset", G("div.box", "Konami Code"), G("div.box", "↑↑↓↓←→←→BA", {
			style: { fontWeight: "bold", lineHeight: "34px", letterSpacing: "1px" }
		}))),
		V$
	));
}

var p3 = 0;

function zK() {
	return new y("Feedback", G("div.feedback", G("div.success", "Thank you for your feedback!")));
}

function c3() {
	if (!R.user) {
		Y0("You need to be signed in to send feedback!");

		return;
	}

	let $ = Date.now();

	if (p3 + 60000 > $) return Y0("Please wait a minute before submitting feedback again.");

	let Q = 512,
		J = G("span", `0/${Q}`, { style: { color: "#aaa" } });

	new y("Feedback", G(
		"div.feedback",
		G("label", { htmlFor: "f_type" }, "Type"),
		G("select#f_type.box.outset.input", { style: { width: "100%" } }, G("option", { value: "bug" }, "Bug Report"), G("option", { value: "feedback" }, "Feedback"), G("option", { value: "suggestion" }, "Feature Suggestion")),
		G("label", { htmlFor: "f_content" }, "Message (", J, ")"),
		G("textarea#f_content.input.box", {
			maxLength: Q,
			style: { height: "200px" },
			oninput(Y) {
				let Z = Y.target.value;

				J.textContent = `${Z.length}/${Q}`;
			}
		}),
		G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Submit!", {
			async onclick() {
				let Y = (f("select#f_type").value || "").trim(),
					Z = (f("textarea#f_content").value || "").trim();

				if (!Y || !Z) return;

				q0();

				let q = await N.user.feedback.$post({ json: { kind: Y, content: Z } });

				if (!q.ok) return m0(q, "Could not submit feedback");

				(p3 = $, zK());
			}
		}))
	));
}

var jQ = [
	{
		label: "[S]ocial",
		shortcut: "S",
		menu: [
			{ label: "[O]nline Users", action: () => C7() },
			{ label: "[L]eaderboard", action: () => v3() }
		]
	},

	{
		label: "[H]elp",
		shortcut: "H",
		menu: [
			{ label: "[G]uidebook", action: () => u8() },
			{ label: "[K]eybinds", action: () => x3() },
			{ label: "[F]eedback / Bug Reporting", action: () => c3() },
			{
				label: "[P]rivacy Policy & ToS",
				action: () => {
					window.open("/privacy.html", "_blank");
				}
			}
		]
	}
];

var b3 = [
	{
		label: "[L]og In",
		shortcut: "L",
		action() {
			o$();
		}
	},
	{ label: "[S]ettings", shortcut: "S", action: $Q },
	...jQ
];

var f3 = () => [
	{
		label: "[U]ser",
		shortcut: "U",
		menu: [
			{ label: `Hi, ${R.user?.username}!` },
			{},
			{ label: "[S]ettings", shortcut: "S", action: $Q },
			{ label: "[C]lan Settings", shortcut: "C", action: $6 },
			{ label: "Cursor [I]nventory", shortcut: "I", action: T8 },
			{ label: "Share [W]ebsite", shortcut: "W", action: P6 },
			{},
			{
				label: "[L]ogout",
				shortcut: "l",
				async action() {
					if (await i("Are you sure you want to log out?")) FY();
				}
			}
		]
	},

	{
		label: "[A]ction",
		shortcut: "A",
		menu: [
			{ label: "[U]ndo", keybindText: `${kQ}+Z`, action: () => p1() },
			{
				label: "[R]edo",
				keybindText: `${kQ}+${n8 ? "Shift+Z" : "Y"}`,
				action: () => c1()
			}
		]
	},
	...jQ,
	...v0()
		? [
			{
				label: "[M]od",
				shortcut: "M",
				menu: () => [
					{ label: "Users", action: () => s("users") },
					{ label: "Audit Log", action: () => s("audit") },
					...O6()
						? [
							{ label: "Review Queue", action: () => s("review") },
							{ label: "Broadcast", action: () => s("broadcast") }
						]
						: [],
					{},
					{ label: "Tile Inspector", action: () => m6() },
					{ label: "Wipe Canvas Selection", action: () => p8() },
					{},
					{
						label: `[${x.a11y.hideOwnCursor ? "ON" : "OFF"}] Hide Own Cursor`,
						action() {
							(x.a11y.hideOwnCursor = !x.a11y.hideOwnCursor, T0());
						}
					}
				]
			}
		]
		: []
];

var l3 = G("div.hotbar.login-bar", G(
	"p",
	G("a.link", "Log in", {
		tabIndex: 1,
		onclick() {
			o$();
		}
	}),
	" to draw & chat with ",
	G("b#online-player-counter", "[...]"),
	"+ players!"
));

function d3($ = !1) {
	let Q = new URL(location.toString()),
		J = new URLSearchParams(location.search);

	if (J.size) if ((Q.search = "", $)) window.history.replaceState(null, "", Q.toString()); else window.history.pushState(null, "", Q.toString());

	return J;
}

var kK = "G-XXXXXXXXXX", u3 = !1;

function o3() {
	let $ = J0.gaMeasurementId;

	if (u3 || !$ || $ === kK) return;

	let Q = location.hostname;

	if (Q === "localhost" || Q === "127.0.0.1") return;

	(
		u3 = !0,
		document.head.append(G("script", {
			src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent($)}`,
			async: !0
		})),
		window.dataLayer = window.dataLayer || [],
		window.gtag = function J() {
			window.dataLayer.push(arguments);
		},
		window.gtag("js", new Date()),
		window.gtag("set", "allow_ad_personalization_signals", !1),
		window.gtag("config", $, { allow_google_signals: !1 })
	);
}

async function UK() {
	return await (await N.canvas.snapshot.bson.$get({ query: { at: Math.floor(Date.now() / 1000) } })).arrayBuffer();
}

function n3() {
	if (J0.url?.ws) return;

	let $ = UK(), Q = new Image();

	(
		Q.decoding = "async",
		Q.crossOrigin = "anonymous",
		Q.onload = async () => {
			(
				B$.clearRect(0, 0, $0.width, $0.height),
				B$.drawImage(Q, 0, 0)
			);

			let J = W$.deserialize(new Uint8Array(await $));

			for (let Y of J.changes) D8(Y.pos, Y.color);
		},

		Q.src = N.canvas.snapshot.png.$url({
			query: { at: Math.floor(Date.now() / J0.canvas.snapshotInterval) }
		}).toString()
	);
}

var t3 = "";

function CK() {
	let $ = D.viewport.x2 - D.viewport.x,
		Q = D.viewport.y2 - D.viewport.y,
		J = Math.floor(D.viewport.x + $ / 2),
		Y = Math.floor(D.viewport.y + Q / 2),
		Z = `#${J},${Y}`;

	if (Z != t3) history.replaceState(null, "", Z);

	t3 = Z;
}

function LK() {
	if (!location.hash) return;

	let [$, Q] = location.hash.slice(1).split(",").map(Number);

	if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q)) return;
	if ($ < 0 || Q < 0 || $ >= d || Q >= M0) return;

	jJ($, Q);
}

function a3() {
	(LK(), setInterval(CK, 1000));
}

var s3 = [
		"ArrowUp",
		"ArrowUp",
		"ArrowDown",
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowLeft",
		"ArrowRight",
		"b",
		"a"
	],
	b6 = 0;

document.addEventListener("keydown", async ($) => {
	if (x.flags.konamiCursor || !R.user) return;

	if ($.key == s3[b6]) {
		if ((b6++, b6 >= s3.length)) {
			b6 = 0;

			let Q = await y$({ code: "SUPER_SECRET_KONAMI_CODE" });

			if (Q) return Y0(Q);

			(
				new y("Code Activated", G("p", "Enjoy your free cursor!")),
				x.flags.konamiCursor = !0,
				T0()
			);
		}
	} else b6 = 0;
});

window.addEventListener("load", () => {
	(
		window.redHerring = () => {
			location.href = "https://cdn.zptr.cc/f/iegttnyqutp4ldirr1detrwz/red-herring.png";
		},

		console.log(
			`%c
 F I L I A N   I S   L O S T . 

`,
			"background:#000;color:#fff;font-size:5em;font-weight:bold"
		)
	);
});

o3();
w7();

async function DK() {
	let $ = d3(!0);

	if ((
		u$.append($8),
		j$.append(n$),
		document.body.append(T$, G("main", SJ, z0, R5)),
		w3(),
		n3(),
		g6(),
		a3(),
		await KY(),
		R.user
	)) {
		if ((_J(f3()), k8(), Z$.seed(R.user), W7(), !x.seenGuidebook)) setTimeout(u8, 1000);
		if (v0()) nG();
	} else if ((R.setTool(3), _J(b3), x1(l3), m$(), k8(), $.has("ssu"))) GY($.get("ssu"));

	let Q = $.has("wall") || sessionStorage.getItem("wall:view") === "wall";

	if ((O3(Q), $.has("debug"))) e1();
}

var r3 = () => DK().catch(($) => console.error("boot failed", $));

if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", r3); else r3();