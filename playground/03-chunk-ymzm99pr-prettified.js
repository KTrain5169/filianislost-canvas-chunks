var {
		defineProperty: g4,
		getOwnPropertyNames: s3,
		getOwnPropertyDescriptor: r3
	} = Object,
	i3 = Object.prototype.hasOwnProperty;

var x4 = new WeakMap(),
	e3 = ($) => {
		var Q = x4.get($), J;

		if (Q) return Q;

		if ((
			Q = g4({}, "__esModule", { value: !0 }),
			$ && typeof $ === "object" || typeof $ === "function"
		)) s3($).map((Y) => !i3.call(Q, Y) && g4(Q, Y, { get: () => $[Y], enumerable: !(J = r3($, Y)) || J.enumerable }));

		return (x4.set($, Q), Q);
	};

var $2 = ($, Q) => () => (($ && (Q = $($ = 0)), Q));
var q2 = {};
var zQ = "", UQ = "";

var d4 = $2(() => {
	(async function $() {
		let J = await (await fetch("/.last-bundle")).text(),
			[Y, Z] = J.split(",");

		if (zQ && zQ != Y) location.reload(); else if (UQ && UQ != Z) {
			let K = (await (await fetch("/")).text()).match(/href="(\.\/chunk-[a-z\d]+.css)"/)?.[1],
				W = document.querySelector("link[rel=stylesheet]");

			if (!K || !W) return (
				console.error("Couldn't reload stylesheet without reloading..."),
				location.reload()
			);

			W.href = `${K}?at=${Date.now()}`;
		}

		(zQ = Y, UQ = Z, setTimeout($, 1000));
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
	jQ = new Map();

for (let $ = 0; $ < X0.length; $++) {
	let Q = X0[$];

	(
		Q.idx = $,
		Q.color = parseInt(Q.hex.slice(1), 16),
		jQ.set(Q.color, $)
	);
}

var p4 = 30000, c4 = 15000;
var b4 = 1, C0 = 100;

var X8 = 60,
	g0 = 42,
	d = 6000,
	M0 = 4200,
	l$ = 25200000;

var f6 = 3615,
	HQ = 24,
	D0 = 1000,
	PQ = Math.floor(100),
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

function RQ($) {
	return new Intl.DateTimeFormat(["en"], { timeZone: "UTC", minute: "numeric", second: "2-digit" }).format($);
}

function Q2($) {
	return String.fromCodePoint(...$.toUpperCase().split("").map((Q) => 127397 + Q.charCodeAt(0)));
}

function o6($) {
	if ($.length != 2) return "-";

	try {
		let Q = new Intl.DisplayNames(["en"], { type: "region" }).of($);

		return `${Q2($)} ${Q || $}`;
	} catch {
		return "Unknown";
	}
}

function j8($) {
	let Q = Math.floor($ / D0);

	return `${Q} spray can${A0(Q)}`;
}

function A0($, Q) {
	let J = $ == 1 ? "" : "s";

	return Q ? `${j0($)} ${Q}${J}` : J;
}

var J2 = /\s|\/|[A-Z].*[A-Z]/,
	Y2 = /[A-Z]{2,}(?=[A-Z][a-z]|$)|[A-Z]?[a-z]+|[A-Z]+|\d+/g;

function G2($) {
	let Q = $.trim();

	if (Q.length <= 8 && !J2.test(Q)) return Q;

	let J = Q.replace(/'s\b/gi, "").match(Y2) || [];

	if (J.length === 1) {
		let Y = J[0], Z = (/^[A-Z]+$/).test(Y) ? 6 : 8;

		return Y.length <= Z ? Y : Y[0];
	}

	return J.map((Y) => (/^\d+$/).test(Y) ? Y : Y[0]).join("");
}

function H8($) {
	return `[${G2($).slice(0, 6)}]`;
}

var VQ = ($) => Math.floor($ * 10) / 10;

function n6($) {
	if ($ == null) return "never";

	let Q = $ - Date.now(),
		J = new Intl.RelativeTimeFormat(["en"], { numeric: "auto" }),
		Y = 60000,
		Z = 60 * Y,
		q = 24 * Z;

	if (Q < Z) return J.format(VQ(Q / Y), "minute"); else if (Q < q) return J.format(VQ(Q / Z), "hour");

	return J.format(VQ(Q / q), "day");
}

var n8 = (navigator.userAgentData?.platform ?? navigator.platform).toLowerCase().includes("mac"),
	MQ = n8 ? "⌘" : "Ctrl";

function P8() {
	if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
}

function Z2($, Q, J) {
	let Y = Math.random() * Math.PI * 2,
		Z = J * Math.sqrt(Math.random()),
		q = J < 5 ? 2 : 1,
		K = (Math.random() - 0.5) * q,
		W = (Math.random() - 0.5) * q,
			F = "y'all think we didnt see this comin'?";

	return [
		Math.floor($ + Z * Math.cos(Y) + K),
		Math.floor(Q + Z * Math.sin(Y) + W)
	];
}

function f4($, Q, J, Y) {
	let Z = [];

	for (let q = 0; q < Y; q++) {
		let K = Z2($, Q, J);

		if (Z.some((W) => K[0] == W[0] && K[1] == W[1])) {
			q--;

			continue;
		}

		Z.push(K);
	}

	return Z;
}

function l4($, Q, J, Y) {
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
	u4 = ($, Q) => {
		for (let J in $) {
			let Y = $[J];

			if (typeof Y == "object" && !Array.isArray(Y) && J in Q) u4(Y, Q[J]); else if (J.startsWith("data-") && Q.setAttribute) Q.setAttribute(J, Y); else if (J.startsWith("--") && Q.setProperty) Q.setProperty(J, Y); else if (J == "className" && Q.classList) Q.classList.add(Y); else Q[J] = Y;
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
		if (K instanceof HTMLElement || typeof K == "string") q.append(K); else if (typeof K == "number") q.append(String(K)); else if (typeof K == "object") u4(K, q);
	}

	return q;
}

var P$ = !1;

if (P$) d4();

var d$ = G("div.box.paint-bar.tooltip"),
	o4 = G("span.spray-can-count", "+0"),
	n4 = G("span.spray-can-extra", "cans"),
	t4 = G("button.btn.swatch.tooltip.paint-extra-count", o4, n4, {
		tabIndex: -1,
		onclick: P8,
		dataset: { tooltip: "Additional Spray Cans" }
	});

function a4($) {
	let Q = Math.floor($ / D0),
		J = $ % D0,
		Y = J / D0 * 100;

	(
		d$.style.setProperty("--paint-remaining", `${Y}%`),
		d$.dataset.tooltip = `Paint Remaining: ${Math.round(Y)}% (${j0(J)}px)`,
		K2(Q)
	);
}

function s4($, Q = !1) {
	(
		d$.style.setProperty("--color", $),
		d$.style.setProperty("--color-2", `${$}7F`),
		d$.classList.toggle("dark", Q)
	);
}

function K2($) {
	(o4.textContent = `+${$}`, n4.textContent = `can${A0($)}`);
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

function F2($) {
	(
		console.warn(`Outdated settings (current: ${$.version}, latest: ${x.version}), updating`),
		$.version = x.version
	);
}

function W2() {
	try {
		let $ = localStorage.getItem("wall:settings");

		if ($) return JSON.parse($);
	} catch($) {
		localStorage.removeItem("wall:settings");
	}
}

function X2() {
	let $ = W2();

	if (!$) {
		a8();

		return;
	}

	if (x.version != $.version) F2($);

	for (let Q in $) x[Q] = $[Q];

	a8();
}

function a8() {
	(
		localStorage.setItem("wall:settings", JSON.stringify(x)),
		kQ = !1
	);
}

var kQ = !1;

function T0() {
	kQ = !0;
}

setInterval(
	() => {
		if (kQ) a8();
	},
	1000
);

document.addEventListener("blur", a8);
window.addEventListener("beforeunload", a8);
X2();

var r4 = G("img", {
		src: Q$(0),
		alt: "⬉",
		onerror($) {
			(console.error("Error loading custom cursor", $), s8());
		}
	}),
	CQ = G("div.chat-bubble", G("span", "You")),
	T$ = G("div.cursor.own-cursor", r4, { style: { opacity: "0" } });

function Q$($) {
	return `/static/cursors/generated/${$ || 0}.png`;
}

var r6 = !1, i6 = !1;

function i4() {
	if (r6) return;

	(T$.style.opacity = "1", r6 = !0);
}

function j2() {
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
	(T$.style.transform = `translate3d(${$}px, ${Q}px, 0)`, i4());
}

document.addEventListener("pointermove", ($) => $1($.x, $.y));

function e4($) {
	let Q = $.touches[0];

	if (!Q) return;

	$1(Q.clientX + 16, Q.clientY + 16);
}

document.addEventListener("touchstart", e4);
document.addEventListener("touchmove", e4);
document.addEventListener("mouseout", ($) => $.relatedTarget || j2());
document.addEventListener("mouseover", i4);

function V8($) {
	r4.src = Q$($);
}

var s6 = 0;

function $J($) {
	if (x.a11y.hideChatBubbles) return;

	let Q = G("p", $);

	if ((
		s6++,
		CQ.append(Q),
		setTimeout(
			() => {
				if ((Q.remove(), s6--, s6 == 0)) CQ.remove();
			},
			2000
		),
		s6 == 1
	)) T$.append(CQ);
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

var P2 = /^[\w!#$%&'*.^`|~+-]+$/;

var V2 = ($, Q, J = {}) => {
		if (!P2.test($)) throw new Error("Invalid cookie name");

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
	QJ = ($, Q, J) => {
		return (Q = encodeURIComponent(Q), V2($, Q, J));
	};

var JJ = ($, Q) => {
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
	YJ = ($) => {
		let Q = new URLSearchParams();

		for (let [J, Y] of Object.entries($)) {
			if (Y === void 0) continue;
			if (Array.isArray(Y)) for (let Z of Y) Q.append(J, Z); else Q.set(J, Y);
		}

		return Q;
	},
	GJ = ($, Q) => {
		switch (Q) {
			case "ws":
				return $.replace(/^http/, "ws");

			case "http":
				return $.replace(/^ws/, "http");
		}
	},
	DQ = ($) => {
		if ((/^https?:\/\/[^\/]+?\/index(?=\?|$)/).test($)) return $.replace(/\/index(?=\?|$)/, "/");

		return $.replace(/\/index(?=\?|$)/, "");
	};

function Q1($) {
	return typeof $ === "object" && $ !== null && !Array.isArray($);
}

function LQ($, Q) {
	if (!Q1($) && !Q1(Q)) return Q;

	let J = { ...$ };

	for (let Y in Q) {
		let Z = Q[Y];

		if (Q1(J[Y]) && Q1(Z)) J[Y] = LQ(J[Y], Z); else J[Y] = Z;
	}

	return J;
}

var ZJ = ($, Q) => {
		return new Proxy(() => {}, {
			get(Y, Z) {
				if (typeof Z !== "string" || Z === "then") return;

				return ZJ($, [...Q, Z]);
			},

			apply(Y, Z, q) {
				return $({ path: Q, args: q });
			}
		});
	},
	M2 = class {
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

				for (let [F, H] of Object.entries($.cookie)) W.push(QJ(F, H, { path: "/" }));

				Y.Cookie = W.join(",");
			}

			if (this.cType) Y["Content-Type"] = this.cType;

			let Z = new Headers(Y ?? void 0), q = this.url;

			if ((q = DQ(q), q = J1(q, this.pathParams), this.queryParams)) q = q + "?" + this.queryParams.toString();

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
	AQ = ($, Q) => ZJ(
		function J(Y) {
			let Z = Q?.buildSearchParams ?? YJ,
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

			let F = q.join("/"), H = JJ($, F);

			if (W === "url" || W === "path") {
				let j = H;

				if (Y.args[0]) {
					if (Y.args[0].param) j = J1(H, Y.args[0].param);
					if (Y.args[0].query) j = j + "?" + Z(Y.args[0].query).toString();
				}

				if ((j = DQ(j), W === "url")) return new URL(j);

				return j.slice($.replace(/\/+$/, "").length).replace(/^\/?/, "/");
			}

			if (W === "ws") {
				let j = GJ(Y.args[0] && Y.args[0].param ? J1(H, Y.args[0].param) : H, "ws"),
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

			let X = new M2(H, W, { buildSearchParams: Z });

			if (W) {
				Q ??= {};

				let j = LQ(Q, { ...Y.args[1] });

				return X.fetch(Y.args[0], j);
			}

			return X;
		},
		[]
	);

var r8 = { "Content-Type": "application/json" },
	N = AQ(J0.url.api, { init: { credentials: "same-origin", headers: r8 } }),
	E$ = () => localStorage.getItem("auth-token");

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
	token: E$(),
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

		if ((a4(Q), Q && a6 == "Out of paint?")) p();
	},

	sprayCanCount() {
		return Math.ceil(this.paintRemaining / D0);
	},

	currentSprayCanSize() {
		let $ = this.paintRemaining % D0;

		return $ == 0 && this.paintRemaining >= D0 ? D0 : $;
	}
};

if (P$) window.player = R;

async function TQ($) {
	let Q = await N.user.settings.$post({ json: $ });

	if (Q.status != 200) return await Q.text();

	R.setUser(await Q.json());
}

async function i8($) {
	let Q = await TQ($);

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

function e($, Q = "Confirmation", J = "Yes", Y = "No") {
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

function qJ($, Q, J, Y, Z = !1) {
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
	return G("div.clan-with-stats", qJ($.discord_id, $.icon, $.name, $.stat_member_count, !1), G("div.stats", G("p", G("b", u6($.stat_paint_visible)), " paint visible"), G("p", G("b", j0($.stat_pixels_changed)), " pixels changed"), G("p", G("b", j0($.approx_discord_members || 0)), " discord members"), Q && G("p", "Discord ID: ", G("b", $.discord_id))));
}

async function KJ() {
	q0();

	let $ = await N.user.discordGuilds.$get();

	if (!$.ok) return Y0("Error loading the Discord Server list", "Make sure you're authenticated via Discord, and allowed us to access your Discord server list!");

	let Q = await $.json();

	new y("Change Clan", G("div.clans-modal", G("p", G("a.link", "Go Back", { onclick: $6 }), { style: { marginBottom: "8px" } }), G("div.list", Q.sort((J, Y) => Y.approximate_member_count - J.approximate_member_count).map((J) => qJ(J.id, J.icon, J.name, J.approximate_member_count, !0)), G("button.btn", "Refresh List"))));
}

function z2() {
	new y("User > Clan", G("div.clans-modal.no-clan", G("p", "You do not have a clan."), G("p.notice.noicon", "Clans appear next to your name at all times! ", "They're a fun way to represent your favorite streamer, content creator, friend group or any other community!"), "Join a clan to show where you belong, meet other members, climb the leaderboard together, and stand out across the platform.", G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Select Clan", { onclick: KJ }))));
}

async function $6() {
	if (!R.user?.discord_id) return Y0("Sorry, clans are for Discord users only!", `Clans work using Discord servers, so you cannot join any clans if you don't have a Discord account connected.

You can authenticate into your current account if your Discord account has the same E-Mail as your Google account.`);

	if (!R.user.clan) return z2();

	new y("User > Clan", G("div.clans-modal.current", G("p", "Current Clan"), Y1(R.user.clan), G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Change Clan", { onclick: KJ }), G("button.btn", "Leave Clan", {
		async onclick() {
			if (!await e("Are you sure you want to leave your current clan?")) return;

			(q0(), await i8({ clanDiscordId: "0" }), $6());
		}
	}))));
}

async function FJ($) {
	if (!$.clan_id) return;

	q0();

	let J = await (await N.user.clan[":id"].$get({ param: { id: $.clan_id.toString() } })).json();

	new y("Clan Info", G("div.clans-modal", G("p", G("b", $.username), "'s clan"), Y1(J)));
}

function WJ($) {
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

function EQ($) {
	if (!navigator.clipboard) return WJ($);

	navigator.clipboard.writeText($).catch((Q) => {
		(console.error(Q), WJ($));
	});
}

var $$ = ($, Q) => G("button.btn.icon", Q, G("img", {
		src: `/static/icon/${$}.png`,
		alt: `${$} icon`,
		style: { pointerEvents: "none" },
		draggable: !1
	})),
	G1 = ($) => $.split(/(\[.\])/).map((Q, J) => J % 2 ? G("u", Q.slice(1, -1)) : Q),
	IQ = ($, Q, J, Y, Z) => G(
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

function XJ($, Q, J, Y) {
	if (!Q) return G($, J);

	let Z = H8(Q), q = G("b.clan-label", Z);

	return G($, q, J, {
		onclick() {
			if (!Y) return;

			FJ(Y);
		},

		onmouseover() {
			q.textContent = `[${Q.slice(0, 32)}]`;
		},

		onmouseleave() {
			q.textContent = Z;
		}
	});
}

var jJ = ($, Q = 2) => {
	let J = 10 ** Q, Y = Math.floor($ % 1 * J);

	return [
		G("span", Math.floor($).toString()),
		Y >= 0 && G("span", { style: { fontSize: "0.6em" } }, `.${Y}`.replace(/0+$/, ""))
	];
};

var wQ = !1,
	Y$ = { options: [] },
	hQ = () => !!Y$.element;

function I$() {
	if (!Y$.element || wQ) return;

	(
		Y$.options = [],
		Y$.element.remove(),
		Y$.element = void 0,
		o0(".ctx").forEach(($) => $.remove())
	);
}

function HJ($, Q, J) {
	I$();

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
				if ((I$(), W.action)) W.action(H);
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
		wQ = !0,
		setTimeout(() => wQ = !1)
	);
}

window.addEventListener("click", I$);
window.addEventListener("resize", I$);
window.addEventListener("blur", I$);

window.addEventListener("contextmenu", ($) => {
	($.preventDefault(), I$());
});

var K1 = null;

function w$($) {
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

function PJ($, Q = 25, J = 0) {
	return N.mod.users.$get({ query: { q: $, limit: String(Q), offset: String(J) } });
}

function VJ($) {
	return N.mod.users[":id"].$get({ param: { id: String($) } });
}

function RJ($) {
	return N.mod.users[":id"].sessions.$get({ param: { id: String($) } });
}

function MJ($, Q, J) {
	return N.mod.users[":id"].ban.$post({
		param: { id: String($) },
		json: {
			...Q ? { reason: Q } : {},
			...J ? { duration_seconds: J } : {}
		}
	});
}

function mQ($) {
	return N.mod.users[":id"].unban.$post({ param: { id: String($) } });
}

function zJ($, Q, J) {
	return N.mod.users[":id"].mute.$post({
		param: { id: String($) },
		json: {
			...Q ? { reason: Q } : {},
			...J ? { duration_seconds: J } : {}
		}
	});
}

function NQ($) {
	return N.mod.users[":id"].unmute.$post({ param: { id: String($) } });
}

function OQ($, Q) {
	return N.mod.users[":id"]["leaderboard-exclusion"].$post({ param: { id: String($) }, json: { excluded: Q } });
}

function UJ($) {
	return N.mod.users[":id"]["delete-strokes"].$post({ param: { id: String($) } });
}

function kJ($, Q = 0) {
	return N.mod.users[":id"]["owned-pixels"].$get({ param: { id: String($) }, query: { offset: String(Q) } });
}

function CJ($, Q) {
	return N.mod.users[":id"]["delete-selected-strokes"].$post({ param: { id: String($) }, json: { positions: Q } });
}

function DJ($, Q) {
	return N.mod.users[":id"]["give-paint"].$post({ param: { id: String($) }, json: { amount: Q } });
}

function LJ($, Q) {
	return N.mod.users[":id"]["reset-balance"].$post({ param: { id: String($) }, query: { type: Q } });
}

function AJ($, Q) {
	return N.mod.users[":id"]["give-cursor"].$post({ param: { id: String($) }, json: { cursorId: Q } });
}

function TJ($, Q, J) {
	return N.mod.users[":id"].message.$post({
		param: { id: String($) },
		json: { body: Q, ...J ? { title: J } : {} }
	});
}

function EJ($, Q, J = !0) {
	return N.mod.broadcast.$post({ json: { body: $, ...Q ? { title: Q } : {}, createRow: J } });
}

function BQ($, Q) {
	return N.mod.users[":id"].role.$post({ param: { id: String($) }, json: { role: Q } });
}

function IJ($ = {}) {
	return N.mod["review-queue"].$get({
		query: {
			...$.status ? { status: $.status } : {},
			...$.kind ? { kind: $.kind } : {},
			...$.cursor ? { cursor: $.cursor } : {},
			...$.limit ? { limit: String($.limit) } : {}
		}
	});
}

function wJ($, Q, J) {
	return N.mod["review-queue"][":id"].resolve.$post({
		param: { id: String($) },
		json: { action: Q, ...J ? { notes: J } : {} }
	});
}

function hJ($, Q) {
	return N.mod.feedback.$get({ query: { kind: $, offset: Q.toString() } });
}

function mJ($, Q, J) {
	return N.mod.feedback.resolve.$post({ json: { id: $, action: Q, reply: J } });
}

function NJ() {
	return N.mod.feedback.counts.$get();
}

function OJ($) {
	return N.mod.referrals.$get({ query: { offset: $.toString() } });
}

function BJ($) {
	return N.mod.referredBy[":uid"].$get({ param: { uid: $.toString() } });
}

function SQ($, Q) {
	return N.mod.referrals[":code"].$post({ param: { code: $ }, query: { action: Q } });
}

function SJ($) {
	return N.mod.clans[":id"].members.$get({ param: { id: $.toString() } });
}

function _J($) {
	return N.mod["wipe-canvas"].$post({ json: $ });
}

function F1($) {
	return N.mod["restore-pixels"].$post({ json: { token: $ } });
}

function yJ($) {
	return N.mod.tile[":pos"].$get({ param: { pos: String($) } });
}

function vJ($, Q, J, Y) {
	return N.mod.region.$get({
		query: { x: String($), y: String(Q), w: String(J), h: String(Y) }
	});
}

function gJ($) {
	return N.mod.owners.$post({ json: { positions: $ } });
}

function xJ($, Q = {}) {
	return N.mod.users[":id"]["paint-history"].$get({
		param: { id: String($) },
		query: {
			...Q.before ? { before: Q.before } : {},
			...Q.limit ? { limit: String(Q.limit) } : {}
		}
	});
}

function pJ($, Q) {
	return N.mod.users[":id"]["paint-history"][":entryId"].$get({ param: { id: String($), entryId: String(Q) } });
}

function cJ($, Q = {}) {
	return N.mod.users[":id"]["chat-history"].$get({
		param: { id: String($) },
		query: {
			...Q.before ? { before: Q.before } : {},
			...Q.limit ? { limit: String(Q.limit) } : {}
		}
	});
}

function bJ($ = {}) {
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

function fJ() {
	return N.mod["bot-sensitivity"].$get();
}

function lJ($) {
	return N.mod["bot-sensitivity"].$post({ json: { sensitivity: $ } });
}

function dJ() {
	return N.mod["chat-cooldown"].$get();
}

function uJ($) {
	return N.mod["chat-cooldown"].$post({ query: { cooldown: $.toString() } });
}

function oJ($) {
	return N.mod["bot-samples"][":userId"].$get({ param: { userId: String($) } });
}

var R8 = null;

function U2() {
	if (R8 && R8.isConnected) return R8;

	return (R8 = G("div.toast-container"), document.body.append(R8), R8);
}

function h$($, Q = 3200) {
	let J = U2(), Y = G("div.toast", G("span", $));

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

function nJ($) {
	if ($ === null || $ === void 0) return null;

	let Q = $ instanceof Date ? $ : new Date($);

	return Number.isNaN(Q.getTime()) ? null : Q;
}

function x0($) {
	let Q = nJ($);

	if (!Q) return $ === null || $ === void 0 ? "-" : String($);

	return Q.toLocaleString();
}

var W1 = null;

function tJ() {
	(W1?.remove(), W1 = null);
}

document.addEventListener("click", tJ);

function E0($, Q) {
	let J = nJ($);

	if (!J) return G("span", Q ?? x0($));

	let Y = J.toLocaleString(),
		Z = J.toUTCString(),
		q = G("time.ts-local.tooltip", {
			textContent: Q ?? Y,
			datetime: J.toISOString(),
			dataset: { tooltip: `UTC: ${Z}` },
			onclick(K) {
				if ((K.stopPropagation(), W1)) {
					tJ();

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

var _Q = [
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

var yQ = 0,
	H1 = 1,
	P1 = 2,
	k2 = "#ff3b3b",
	C2 = "rgba(8,8,12,0.75)",
	G$ = null;

function D2() {
	if (G$) return G$;

	return (
		G$ = G("canvas.ghost-layer", { width: d, height: M0 }),
		u$.append(G$),
		G$
	);
}

function aJ($, Q) {
	let J = D2(), Y = J.getContext("2d");

	(
		Y.clearRect(0, 0, J.width, J.height),
		Y.fillStyle = C2,
		Y.fillRect(0, 0, J.width, J.height)
	);

	for (let Z = 0; Z < $.length; Z++) {
		let { pos: q, color: K } = $[Z],
			W = q % d,
			F = q / d | 0;

		if (W < 0 || W >= d || F < 0 || F >= M0) continue;

		Y.clearRect(W, F, 1, 1);

		let H = Q[Z];

		if (H === P1) (Y.globalAlpha = 0.55, Y.fillStyle = k2); else (
			Y.globalAlpha = H === H1 ? 0.28 : 1,
			Y.fillStyle = X0[K]?.hex ?? "#ff00ff"
		);

		Y.fillRect(W, F, 1, 1);
	}

	(Y.globalAlpha = 1, J.style.display = "block");
}

function vQ() {
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

var sJ = 5;

function V1($) {
	let Q = new DataView($.buffer, $.byteOffset, $.byteLength),
		J = $.byteLength / sJ | 0,
		Y = new Array(J);

	for (let Z = 0; Z < J; Z++) {
		let q = Z * sJ;

		Y[Z] = { pos: Q.getUint32(q, !0), color: $[q + 4] };
	}

	return Y;
}

var L2 = 48;

function M8($, Q = L2) {
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

var A2 = 360;

function rJ($, Q = 0) {
	if (!$.length) return;

	let J = Math.max(0, Math.min(Q, $.length - 1)),
		Y = G("span"),
		Z = G("div.mod-carousel-stage"),
		q = G("div.mod-carousel-caption"),
		K = () => {
			let P = $[J];

			(
				Y.replaceChildren(`Flagged draws (${J + 1} / ${$.length})`),
				Z.replaceChildren(M8(P.pixels, A2)),
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

var iJ = !1;

function eJ() {
	if (iJ) return;

	iJ = !0;

	let $ = new y("Update required", G("div.version-mismatch", G("p", "The Wall was just updated and this tab is running an older version. Reload to keep going."), G("p.subtle", "Heads up: anything you've drawn but not submitted will be lost. If a reload doesn't fix it, clear your cache and reload again."), G("div.btn-container", G("button.btn", "Reload now", { onclick: () => location.reload() }))));

	$.lockLevel = 1;
}

var gQ = /^[a-z0-9_.-]{3,16}$/, T2 = /^[_.-]+$/;

function G6($) {
	if (!$) return "Missing username";
	if ($.length < 3) return "Must be at least 3 letters long";
	if ($.length > 16) return "Must not be longer than 16 letters";
	if (!gQ.test($)) return "Can only contain lowercase letters, digits, underscores, dashes and dots.";
	if (T2.test($)) return "This username is blacklisted.";
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

var z1 = G("p.warning"), z8 = "", pQ = !0, xQ = "";

function JY() {
	z8 = "";
}

async function E2() {
	if (!xQ) {
		let J = await (await N.auth.turnstile.$get()).json();

		if ((xQ = J.sitekey || "none", !J.required || !J.sitekey)) pQ = !1;
	}

	if (!pQ) return;

	let $ = window.turnstile;

	if (!$) return alert("error: Turnstile API didn't load, can't show captcha");

	$.render("#captcha-container", {
		sitekey: xQ,
		theme: x.a11y.darkTheme ? "dark" : "light",
		size: "flexible",
		callback(Q) {
			(z1.textContent = "", z8 = Q);
		}
	});
}

function QY() {
	if ((z1.textContent = "", pQ && !z8)) return (z1.textContent = "You need to complete the captcha!", !0);
}

function o$($) {
	(
		new y("Log In", G(
			"div.login-modal",
			$,
			G("p", "Choose your login method"),
			G("div#captcha-container", { onmouseenter: s8, onmouseleave: e6 }),
			IQ("discord", "Discord", "#5865F2", "#fff", {
				ariaLabel: "Authenticate with Discord",
				onclick() {
					if (QY()) return;

					M1("discord", "Discord");
				}
			}),
			IQ("google", "Google", "#F1F3F4", "#000", {
				ariaLabel: "Authenticate with Google",
				onclick() {
					if (QY()) return;

					M1("google", "Google");
				}
			}),
			z1,
			J0.devLogin === !0 && G("button.btn.dev-login", "Dev login (staff)", {
				ariaLabel: "Dev login",
				onclick() {
					M1("dev", "Dev");
				}
			}),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: p }))
		)),
		setTimeout(E2, 100)
	);
}

function YY($) {
	if (!gQ.test($)) return;

	o$(G("div.success", G("b", $), " has invited you to The Wall!"));
}

function GY($) {
	if (!$.is_banned) return;

	(
		ZY(),
		new y("Oops!", G("div.modal.error-modal", G("p", "You have been banned!"), G("p.error", $.is_banned.reason || "<Reason not specified>"), G("p", "Expires: ", G("b", n6($.is_banned.until))))).onClose(() => !1)
	);
}

async function cQ() {
	let $ = E$();

	if (!$) return null;

	r8.Authorization = $;

	let Q = await N.user.me.$get();

	if (Q.status != 200) return !1;

	let J = await Q.json();

	if (!J) return !1;

	return J;
}

async function qY() {
	let $ = await cQ();

	if ($) {
		if ((R.token = E$(), R.setUser($), $.is_banned)) return GY($);
		if ($.is_new) return R1();

		U8();

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

function KY() {
	(m$(), location.reload());
}

async function M1($, Q) {
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
			if ($.closed) (clearInterval(Q), w2());
		},
		500
	);
}

async function w2() {
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
	let $ = -L.x / L.zoom,
		Q = -L.y / L.zoom,
		J = window.innerWidth / L.zoom,
		Y = window.innerHeight / L.zoom;

	return {
		x: Math.max($, 0),
		y: Math.max(Q, 0),
		x2: Math.min($ + J, $0.width),
		y2: Math.min(Q + Y, $0.height)
	};
}

function h2() {
	let $ = bQ();

	return {
		x: Math.floor($.x / C0),
		y: Math.floor($.y / C0),
		x2: Math.floor($.x2 / C0),
		y2: Math.floor($.y2 / C0)
	};
}

function FY() {
	let $ = h2(), Q = new Set(), J = 4;

	for (let Y = $.x - 4; Y <= $.x2 + 4; Y++) for (let Z = $.y - 4; Z <= $.y2 + 4; Z++) {
		if (Y < 0 || Z < 0 || Y >= X8 || Z >= g0) continue;
		if (Q.size > 1000) return new Set();

		Q.add(Y * g0 + Z);
	}

	return Q;
}

function fQ($, Q, J = L.viewport) {
	return $ < J.x || Q < J.y || $ > J.x2 || Q > J.y2;
}

var Z6 = new Set(),
	m2 = 10,
	WY = 0.05,
	N2 = 1e6,
	XY = performance.now();

function jY($) {
	let Q = ($ - XY) / 1000, J = 1 - Math.exp(-m2 * Q);

	XY = $;

	for (let Y of Z6) {
		if (!Y.element) {
			Z6.delete(Y);

			continue;
		}

		let Z = Y.moveX - Y.x,
			q = Y.moveY - Y.y,
			K = Z * Z + q * q;

		if (Math.abs(Z) < WY && Math.abs(q) < WY || K > N2) (Y.x = Y.moveX, Y.y = Y.moveY, Z6.delete(Y)); else (Y.x += Z * J, Y.y += q * J);

		U1(Y, Y.x, Y.y);
	}

	requestAnimationFrame(jY);
}

function HY($, Q, J) {
	let Y = V0.get($);

	if (!Y) return;

	if (fQ(Y.x, Y.y) && fQ(Q, J)) {
		(U1(Y, Q, J), Z6.delete(Y));

		return;
	}

	(Z6.add(Y), Y.moveX = Q, Y.moveY = J);
}

requestAnimationFrame(jY);

var V0 = new Map(),
	n$ = G("div.cursors"),
	q6 = G("div.cursor-overflow");

q6.style.display = "none";
n$.append(q6);

function VY($) {
	if ($ > 0) (q6.textContent = `+${$} more here`, q6.style.display = ""); else q6.style.display = "none";
}

var O2 = 50,
	K6 = new Set(),
	k8 = new Set(),
	RY = new Set(),
	MY = {
		id: -1,
		username: "",
		cursor_sprite: 0,
		x: 0,
		y: 0,
		moveX: 0,
		moveY: 0,
		partial: !0
	};

function zY() {
	for (let $ of V0.values()) if ($.element) $.element.remove();

	V0.clear();
}

function lQ($) {
	if (x.a11y.hideCursors) return;
	if ($.username == R.user?.username || $.id == R.connectionId) return;

	let Q = V0.get($.id),
		J = !!Q && !Q.partial && (Q.cursor_sprite !== $.cursor_sprite || Q.clan_name !== $.clan_name || Q.username !== $.username),
		Y = {
			...MY,
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
	} else if (Q?.element && J) B2(Y);
}

function B2($) {
	if (!$.element) return;

	let Q = $.element.querySelector("img");

	if (Q) Q.src = Q$($.cursor_sprite);

	(
		$.element.querySelector(".chat-bubble")?.remove(),
		$.element.append(uQ($))
	);
}

function S2($) {
	if (V0.has($) || $ == R.connectionId) return;

	let Q = { ...MY, id: $ };

	return (dQ($), V0.set($, Q), Q);
}

function dQ($) {
	if ($ === R.connectionId || V0.has($) || K6.has($) || k8.has($) || RY.has($)) return;

	K6.add($);
}

function UY() {
	if (k8.size > 0 || K6.size === 0) return null;

	let $ = [];

	for (let Q of K6) {
		if ($.length >= O2) break;

		$.push(Q);
	}

	for (let Q of $) (K6.delete(Q), k8.add(Q));

	return $;
}

function kY($) {
	for (let Q of $) (lQ(Q), k8.delete(Q.id));
	for (let Q of k8) RY.add(Q);

	k8.clear();
}

function CY($) {
	let Q = V0.get($);

	if (!Q) return;
	if (Q.element) Q.element.remove();

	V0.delete($);
}

var PY = 0;

function DY($, Q, J = !1) {
	if (x.a11y.hideCursors) return;
	if ($ == R.connectionId) return;

	let Y = V0.get($) || S2($);

	if (!Y) return;

	(Y.lastSeen = performance.now(), Y.lastPos = Q);

	let Z = Q % d, q = Math.floor(Q / d);

	if (!Y.element) (
		Y.element = G("div.cursor", { dataset: { id: Y.id.toString() } }, G("img", { draggable: !1, src: Q$(Y.cursor_sprite), alt: "⬉" }), !Y.partial && uQ(Y)),
		n$.append(Y.element),
		Y.hidden = !1,
		Y.element.style.zIndex = `${PY++}`
	); else if (Y.hidden) (y2(Y), Y.element.style.zIndex = `${PY++}`);

	if (J) HY($, Z, q); else U1(Y, Z, q);
}

function U1($, Q, J) {
	if (!$.element) return;

	(
		$.element.style.translate = `${Q}px ${J}px`,
		$.x = Q,
		$.y = J
	);
}

function uQ($) {
	return G("div.chat-bubble", XJ("span", $.clan_name, $.username, $));
}

function _2($) {
	if (!$.element || $.hidden) return;

	($.element.style.opacity = "0", $.hidden = !0);
}

function y2($) {
	if (!$.element || !$.hidden) return;

	($.element.style.opacity = "", $.hidden = !1);
}

var v2 = 1e4, g2 = 1000;

function x2() {
	let $ = performance.now() - v2;

	for (let Q of V0.values()) {
		if (!Q.element || Q.hidden) continue;
		if (Q.lastSeen === void 0 || Q.lastSeen < $) _2(Q);
	}
}

setInterval(x2, g2);

var R$ = 256,
	p2 = Math.max(d, M0),
	LY = (() => {
		let $ = 0;

		while (Math.ceil(p2 / 2 ** $) > R$) $++;

		return $;
	})();

var c2 = ($) => Math.ceil(Math.ceil(d / 2 ** $) / R$),
	b2 = ($) => Math.ceil(Math.ceil(M0 / 2 ** $) / R$);

function oQ($) {
	if ($ <= 0) return LY;

	return Math.min(LY, Math.max(0, Math.round(-Math.log2($))));
}

function TY($) {
	let Q = $.zoom || 0.000001,
		J = Math.max(0, Math.floor(-$.x / Q)),
		Y = Math.max(0, Math.floor(-$.y / Q)),
		Z = Math.min(d, Math.ceil((-$.x + $.w) / Q)),
		q = Math.min(M0, Math.ceil((-$.y + $.h) / Q));

	return { x0: J, y0: Y, x1: Math.max(J, Z), y1: Math.max(Y, q) };
}

function k1($, Q) {
	let { x0: J, y0: Y, x1: Z, y1: q } = TY($),
		K = 2 ** Q,
		W = c2(Q),
		F = b2(Q),
		H = Math.max(0, J / K / R$ | 0),
		X = Math.max(0, Y / K / R$ | 0),
		j = Math.min(W - 1, (Z / K - 1) / R$ | 0),
		P = Math.min(F - 1, (q / K - 1) / R$ | 0),
		C = [];

	for (let z = H; z <= j; z++) for (let A = X; A <= P; A++) C.push([z, A]);

	return C;
}

var AY = 64;

function f2($) {
	let { x0: Q, y0: J, x1: Y, y1: Z } = TY($),
		q = Q / C0 | 0,
		K = (Y - 1) / C0 | 0,
		W = J / C0 | 0,
		F = (Z - 1) / C0 | 0,
		H = [];

	for (let P = q; P <= K; P++) for (let C = W; C <= F; C++) if (P >= 0 && C >= 0 && P < X8 && C < g0) H.push(P * g0 + C);

	if (H.length <= AY) return H;

	let X = (Q + Y) / 2 / C0, j = (J + Z) / 2 / C0;

	return H.map((P) => {
		let C = P / g0 | 0,
			z = P % g0,
			A = C + 0.5 - X,
			v = z + 0.5 - j;

		return [P, A * A + v * v];
	}).sort((P, C) => P[1] - C[1]).slice(0, AY).map((P) => P[0]);
}

function l2() {
	let $ = globalThis.navigator?.connection;

	if (!$) return !1;

	return !!$.saveData || $.effectiveType === "2g" || $.effectiveType === "slow-2g" || $.effectiveType === "3g";
}

var d2 = 0.8;

class nQ {
	hooks;
	mode = "overview";
	lastChunks = "";

	constructor($) {
		this.hooks = $;
	}

	update($) {
		let Q = $.zoom >= d2 ? "live" : "overview";

		if (Q !== this.mode) (this.mode = Q, this.hooks.setLayer(Q));

		if (this.mode === "overview") {
			if (this.lastChunks !== "") (this.hooks.setLiveChunks([]), this.lastChunks = "");

			let J = oQ($.zoom), Y = k1($, J);

			for (let [Z, q] of Y) this.hooks.drawTile(J, Z, q);

			if (!l2() && J > 0) for (let [Z, q] of k1($, J - 1).slice(0, 16)) this.hooks.drawTile(J - 1, Z, q);
		} else {
			let J = f2($), Y = J.join(",");

			if (Y !== this.lastChunks) (this.hooks.setLiveChunks(J), this.lastChunks = Y);
		}
	}
}

function u2() {
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

var wY = u2(),
	EY = Math.min(300, Math.round(wY * 2)),
	t$ = wY,
	C1 = 16.7,
	tQ = performance.now(),
	IY = tQ;

function hY($) {
	let Q = $ - tQ;

	if ((
		tQ = $,
		Q > 0 && Q < 1000 && document.visibilityState === "visible"
	)) {
		if ((C1 += (Q - C1) * 0.1, $ - IY > 1000)) {
			if ((IY = $, C1 > 22 && t$ > 8)) t$ = Math.max(8, Math.round(t$ * 0.7)); else if (C1 < 13 && t$ < EY) t$ = Math.min(EY, Math.round(t$ * 1.15) + 1);
		}
	}

	requestAnimationFrame(hY);
}

requestAnimationFrame(hY);

function mY() {
	return t$ | 0;
}

var a$ = new Set(), aQ = -1, NY = null;

function OY($) {
	NY = new Set($);
}

function BY() {
	(a$ = new Set(), aQ = -1);
}

function o2($) {
	if ($.size != a$.size) return !0;

	for (let Q of $) if (!a$.has(Q)) return !0;
	for (let Q of a$) if (!$.has(Q)) return !0;

	return !1;
}

function SY() {
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

	let Y = NY ?? FY(), Z = o2(Y), q = UY();

	if (aQ != Q || Z || q) (
		aQ = Q,
		a$ = Y,
		sQ(3, {
			cursorPos: Q,
			cursorChunk: J,
			subscribe: Z ? [...Y] : void 0,
			lookupUsers: q ?? void 0,
			cursorBudget: mY()
		})
	);
}

var Q5 = J0.url?.tileBase?.replace(/\/$/, ""),
	r$ = !!J0.url?.ws && !!Q5,
	J5 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" }),
	A1 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" });

A1.style.opacity = "0";

var j6 = G("div.canvas-snapshot-wrap", J5, A1);

if (!r$) j6.style.display = "none";

var Y5 = 400;

J5.style.transition = `opacity ${Y5}ms ease-out`;
A1.style.transition = `opacity ${Y5}ms ease-out`;

var D1 = J5,
	C8 = A1,
	T1 = G("div.canvas-tile-grid");

if (!r$) T1.style.display = "none";

var s$ = null,
	E1 = "overview",
	eQ = 1e4,
	rQ = !1,
	_Y = "",
	yY = null;

async function L1() {
	if (!r$ || rQ || E1 !== "overview" || document.hidden) return;

	rQ = !0;

	try {
		let $ = await fetch(`${Q5}/snapshot.png`, { cache: "no-cache" });

		if (!$.ok) return;

		let Q = $.headers.get("last-modified") ?? "";

		if (Q && Q === _Y) return;

		_Y = Q;

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

		let Z = yY;

		if ((yY = Y, D1.style.opacity = "0", D1.src = "", Z)) URL.revokeObjectURL(Z);

		[D1, C8] = [C8, D1];
	} catch {} finally {
		rQ = !1;
	}
}

var N$ = new Map(),
	D8 = new Set(),
	W6 = new Map(),
	n2 = 8000;

function xY($, Q, J) {
	return `${Q5}/tiles/${$}/${Q}/${J}.png?v=${Math.floor(Date.now() / eQ)}`;
}

function $5($) {
	if (!r$) return;

	if (E1 === "overview") {
		if (N$.size) {
			for (let K of N$.values()) K.remove();

			(N$.clear(), D8.clear());
		}

		return;
	}

	let Q = oQ($.zoom),
		J = R$ * 2 ** Q,
		Y = k1($, Q),
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
				D8.add(F)
			);

			let X = setTimeout(
				() => {
					if (D8.delete(F)) X6();
				},
				n2
			);

			W6.set(F, X);

			let j = () => {
				let P = W6.get(F);

				if (P !== void 0) (clearTimeout(P), W6.delete(F));

				D8.delete(F);
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
				H.src = xY(Q, K, W),
				T1.appendChild(H),
				N$.set(F, H)
			);
		}
	}

	let q = !1;

	for (let [K, W] of N$) if (!Z.has(K)) {
		(W.remove(), N$.delete(K));

		let F = W6.get(K);

		if (F !== void 0) (clearTimeout(F), W6.delete(K));
		if (D8.delete(K)) q = !0;
	}

	if (q) X6();
}

function vY() {
	if (!r$ || E1 !== "live" || document.hidden) return;

	for (let [$, Q] of N$) {
		let [J, Y, Z] = $.split("/").map(Number);

		Q.src = xY(J, Y, Z);
	}
}

var iQ = 0.9, gY = 1.4;

function t2($) {
	if ($ <= iQ) return 1;
	if ($ >= gY) return 0;

	return 1 - ($ - iQ) / (gY - iQ);
}

function X6() {
	if (!s$) return;

	j6.style.opacity = D8.size > 0 ? "1" : String(t2(s$.zoom));
}

var a2 = new nQ({
	async drawTile() {
		return !0;
	},

	setLiveChunks($) {
		OY($);
	},

	setLayer($) {
		if ((E1 = $, $ === "overview")) {
			if ((L1(), s$)) $5(s$);
		} else if (s$) $5(s$);
	}
});

function pY() {}

function cY($) {
	if (!r$) return;

	(s$ = $, a2.update($), $5($), X6());
}

if (r$) (
	L1(),
	setInterval(L1, eQ),
	setInterval(vY, eQ),
	document.addEventListener("visibilitychange", () => {
		if (!document.hidden) (L1(), vY());
	})
);

var O$ = [], bY = null;

function G5() {
	bY?.();
}

var Z$ = {
	bind($) {
		(bY = $, $());
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

var s2 = new Map(),
	M$ = new Uint8Array(l$).fill(255),
	r2 = !!J0.url?.ws,
	fY = -1;

class lY {
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
			s2.set(this.pos, this)
		);
	}
}

function dY() {
	for (let $ = 0; $ < X8; $++) for (let Q = 0; Q < g0; Q++) new lY($, Q);
}

function L8($, Q) {
	if (!Number.isSafeInteger($) || $ < 0 || $ >= l$) return !1;

	let J = $ % d, Y = Math.floor($ / d), Z = X0[Q];

	if (!Z) return (M$[$] = Q, B$.clearRect(J, Y, 1, 1), !0);
	if (fY != Z.color) (B$.fillStyle = Z.hex, fY = Z.color);

	return (M$[$] = Q, B$.fillRect(J, Y, 1, 1), !0);
}

function I1($, Q) {
	let J = Q * d + $;

	if (M$[J] == 255) if (r2) M$[J] = 254; else {
		let { data: Y } = B$.getImageData($, Q, 1, 1),
			Z = Y[0] << 16 | Y[1] << 8 | Y[2];

		M$[J] = jQ.get(Z) ?? 254;
	}

	return X0[M$[J]];
}

function i2($, Q) {
	let J = Math.imul($, 374761393) + Math.imul(Q, 668265263) | 0;

	return (
		J = Math.imul(J ^ J >>> 13, 1274126177),
		J ^= J >>> 16,
		(J >>> 0) / 4294967296
	);
}

function uY($, Q) {
	if (Q >= f6) return !1;

	let J = f6 - HQ;

	if (Q < J) return !0;

	let Y = (f6 - Q) / HQ;

	return i2($, Q) < Y;
}

function oY() {
	new y("Chat", G("div.chat-modal.nopad", H6, Z5(!0))).onClose(() => {
		f(".chat-log-wrapper").append(H6);
	});
}

var w1 = null,
	nY = [
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

function tY($, Q) {
	let J = new URLSearchParams();

	if ($.name == "Reddit") (J.set("title", "#filianislost"), J.set("url", Q)); else J.set("text", `#filianislost ${Q}`);

	return `${$.url}?${J.toString()}`;
}

async function q5() {
	if (w1) return w1;

	q0();

	let $ = await N.user.shareLink.$post();

	if (!$.ok) {
		m0($, "Could not generate the referral link");

		return;
	}

	let Q = await $.json();

	return (
		w1 = Q,
		setTimeout(
			() => {
				w1 = null;
			},
			60000
		),
		Q
	);
}

function aY($) {
	if (!R.user) return "";

	let Q = new URLSearchParams();

	if ((Q.set("c", $.referral.code), $.imageCode)) Q.set("im", $.imageCode);
	if ($.x && $.y) Q.set("p", `${$.x},${$.y}`);

	return `${J0.url.share}/${R.user.username}?${Q.toString()}`;
}

var h1 = null;

function K5($, Q = !1) {
	let J = aY($),
		Y = `Share Website > ${$.imageCode ? "Image" : "Link"}`;

	new y(Y, G(
		"div.share-modal.link",
		G("p", Q
			? "You have already generated an image in the past minute!"
			: "Here's your link!"),
		G("span.box.input.link.tooltip", J, {
			dataset: { tooltip: "Click to copy!" },
			onclick() {
				EQ(J);
			}
		}),
		$.imageLink && G("img.preview", { src: $.imageLink }),
		G("p.desc", "Post it on..."),
		G("div.platforms", nY.map((Z) => G(
			"a.platform.tooltip",
			{
				target: "_blank",
				href: tY(Z, `${J}&utm_source=${Z.id}`),
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

function e2() {
	if (h1) return K5(h1, !0);

	(R.setTool(4), S$(4), p(!0));
}

async function F5($) {
	if ((R.setTool(0), S$(0), n0(), $)) return P6();

	(q0(), N0());

	let { x: Q, y: J, x2: Y, y2: Z } = L.viewport,
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
		h1 = C,
		setTimeout(
			() => {
				h1 = null;
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

	new y("Share Website", G("div.share-modal", G("p.success", `Every player who signs up with your link will reward you with ${j8(o8.ReferralCode)}!`), G("div.btn-container.vertical", G("button.btn.share", "Share Link", { onclick: () => K5({ referral: $ }) }), G("button.btn.share", "Share Image", { onclick: () => e2() }), G("button.btn", "Cancel", { onclick: () => p() })), G("p.desc", `You have invited ${A0($.uses, "user")} so far!`)));
}

function sY() {
	return new y("Out of paint!", G("div.out-of-paint", G("p.c", G("b", "You have used up some paint, time to submit!")), G("p.c.desc", `You have ${j8(R.paintRemaining + R.localPaintIncrement)} remaining.`), G("p.notice.noicon", "Paint does not get consumed until you submit your changes. Submit your drawing to the canvas, or undo your changes."), G(
		"div.btn-container",
		G("button.btn.primary", "Submit", {
			onclick: async () => {
				(q0(), await N1(), p(!0));
			}
		}),
		G("button.btn", "Cancel", { onclick: () => p() })
	)));
}

function m1() {
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

		(JZ(), W5 = R.activeTool);

		return;
	}

	if (R.activeTool == 1) $Z(W5 != R.activeTool); else if (_$) (A8.textContent = "", _$ = !1);
	if (R.activeTool == 4) QZ(); else if (R.paintRemaining == 0 && R.nextRefill) YZ(); else if (O0.size || p0.length) GZ(); else rY();

	W5 = R.activeTool;
}

function $Z($ = !1) {
	let Q = L.normalizedZoom <= O1;

	if (Q && (!_$ || $)) (_$ = !0, A8.textContent = "Zoom in to draw!"); else if (_$ && !Q) {
		(A8.textContent = "", _$ = !1);

		return;
	}
}

setInterval(n0, 1000);

function rY() {
	if (i$ == 0) return;

	(e$.textContent = "", i$ = 0);
}

function QZ() {
	(
		i$ = 4,
		e$.replaceChildren(G("div.share-viewport", G("p", "Zoom into the canvas to share your artwork!"), G("div", G("button.btn", "Share", { onclick: () => F5(!1) }), G("button.btn", "Cancel", { onclick: () => F5(!0) }))))
	);
}

function JZ() {
	let $ = R.openAt - (Date.now() + R.clockOffset);

	(
		i$ = 5,
		e$.replaceChildren(G("div.timer", G("p", "Drawing opens in: "), G("b", RQ($))))
	);
}

function YZ() {
	let $ = R.nextRefill - Date.now(), Q = RQ($);

	if ((i$ = 1, $ < 1)) {
		(R.nextRefill = 0, rY());

		return;
	}

	e$.replaceChildren(G("div.timer", G("p", G("a.link", "Out of paint!", { tabIndex: 1, onclick: () => m1() }), " Next refill in: "), G("b", Q)));
}

function GZ() {
	if (i$ == 2) return;

	(
		i$ = 2,
		e$.replaceChildren(G("p", "Drawing locally - Confirm to submit!"), G("div", G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/confirm.png", draggable: !1 }), G("span", "Confirm"), { tabIndex: 1, onclick: N1 }), G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/cancel.png", draggable: !1 }), G("span", "Cancel"), { tabIndex: 1, onclick: iY })))
	);
}

var B1 = !1,
	eY = 1,
	X5 = 10,
	$7 = ["tiny", "small", "medium", "large"],
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
	ZZ = () => {
		let $ = G("img", { draggable: !1 }),
			Q = G("input.tooltip", {
				type: "range",
				min: eY,
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
				let Z = $7[Math.floor(Y / (X5 + 1) * $7.length)];

				(
					$.src = `/static/icon/size/${Z}.png`,
					R.brushSize = Y + j5,
					Q.value = Y.toString(),
					Q.dataset.tooltip = `Brush Size: ${Y}`
				);
			};

		return (
			J(Math.min(Math.max(x.lastBrushSize - j5, eY), X5)),
			G("div.container", G("div.popup.box.outset.size-control", G("div.input-container.tooltip", Q)), { onmouseout: () => P8() }, G("button#brush-size-btn.btn.swatch.icon.tooltip", $, { dataset: { tooltip: "Brush Size" } }))
		);
	},
	P5 = {
		0: H5(0, "hand", "Hand Tool (Z)"),
		1: H5(1, "spray", "Draw Tool (X)"),
		2: H5(2, "chat", "Open Chat")
	},
	Q7 = G("div.tools", ...Object.values(P5)),
	J7 = G("div.tools", ZZ(), q1(
		Z1("tool/preview", {
			id: "tool-preview",
			onclick($) {
				(
					B1 = !B1,
					$.target.classList.toggle("active", B1),
					$8.style.opacity = (B1 ? 0.5 : 1).toString(),
					P8()
				);
			}
		}),
		"Compare Mode (M)"
	));

function S$($) {
	if ((P8(), $ == 2)) {
		oY();

		return;
	}

	(
		o0(".tool.active").forEach((J) => J.classList.remove("active")),
		(P5[$] ?? P5[0]).classList.add("active"),
		R.setTool($),
		n0()
	);
}

function qZ($) {
	let Q = Math.max(0, Math.floor((Date.now() - $) / 1000));

	if (Q < 60) return "just now";

	let J = Math.floor(Q / 60);

	if (J < 60) return `${J}m ago`;

	let Y = Math.floor(J / 60);

	if (Y < 24) return `${Y}h ago`;

	return `${Math.floor(Y / 24)}d ago`;
}

function KZ($) {
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
		G("div.time", E0($.createdAt, qZ($.createdAt)))
	);
}

function Y7() {
	let $ = [...Z$.unread];

	return (
		Z$.markAllRead(),
		new y("Notifications", G(
			"div.notifications-modal",
			$.length
				? G("div.list", $.map(KZ))
				: G("p.desc.c", "No notifications."),
			G("div.btn-container", t8)
		))
	);
}

function G7() {
	let $ = G("span.notif-badge"),
		Q = G("img", { src: "/static/icon/notif.png", draggable: !1, alt: "bell" }),
		J = G("button.btn.swatch.tooltip.notif-indicator.icon", Q, $, {
			dataset: { tooltip: "Notifications" },
			onclick() {
				Y7();
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

function S1() {
	new y("Select Color", G("div.color-modal", G("div.colors", X0.map(($) => G("button.btn.swatch.tooltip", {
		dataset: { tooltip: $.name },
		style: { backgroundColor: $.hex },
		onclick() {
			(Q8($), p());
		}
	})))));
}

var S0 = [...X0], J8 = G("div.colors.container");

function y1($) {
	let Q = S0.indexOf($);

	if (Q > -1) (S0.splice(Q, 1), S0.push($));
}

var _1 = ($) => X0.findIndex((Q) => Q.name == $);

function FZ() {
	let $ = x.lastUsedColors;

	if ($.length != S0.length) {
		let Q = _1("Red"),
			J = _1("Violet"),
			Y = X0.slice(Q, J + 1);

		(y1(X0[_1("Gray")]), y1(X0[_1("White")]));

		for (let Z of Y) y1(Z);

		return;
	}

	(S0.splice(0), S0.push(...$.map((Q) => X0[Q])));
}

function q7($) {
	let Q = S0[S0.length - $];

	if (!Q) return;

	Q8(Q, !1);
}

function Q8($, Q = !0) {
	if ((s4($.hex, $.dark), R.selectedColor == $)) return;
	if (S0.indexOf($) > -1 && Q) (y1($), x.lastUsedColors = S0.map((Y) => Y.idx));

	(R.selectedColor = $, V5());
}

var WZ = 54, XZ = 9;

function Z7($) {
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
	let $ = q1(Z1("tool/colors", { id: "palette-btn", onclick: S1 }), "Palette");

	J8.replaceChildren($);

	let Q = J8.parentElement, J = Q ? Z7(Q) : 0;

	if (J <= 0) {
		requestAnimationFrame(() => {
			if (Q && Z7(Q) > 0) V5();
		});

		return;
	}

	let Y = Math.floor(J / WZ) - 1,
		Z = Math.max(0, Math.min(XZ, Y));

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

function K7() {
	(
		FZ(),
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

function v1($) {
	R5.replaceChildren($);
}

var V6 = G("div.hotbar.main-bar", { role: "toolbar" });

function F7() {
	(
		V6.append(G("div.status-text-container", A8, e$), G("div.section.left", W7(), G("div#chatbox-divider.divider"), Q7, G("div.divider")), G("div.section.middle", d$, t4, G7()), G("div.section.right", G("div.divider"), J7, G("div.divider"), J8)),
		R.setTool(0),
		v1(V6),
		S$(0),
		K7()
	);
}

var $8 = G("canvas.preview-canvas", { width: d, height: M0 }),
	z$ = $8.getContext("2d"),
	O0 = new Map();

function X7() {
	(
		R.localPaintIncrement = 0,
		R.setPaintRemaining(R.paintRemaining),
		z$.clearRect(0, 0, $8.width, $8.height),
		O0.clear(),
		H7()
	);
}

function jZ() {
	X7();
}

async function j7($, Q = 0) {
	if (Q >= 5) return (
		console.error("Failed to submit the drawing after 5 tries."),
		!1
	);

	try {
		return (await P7($), !0);
	} catch(J) {
		return (
			console.error("Error submitting the drawing:", J),
			await j7($, Q + 1)
		);
	}
}

async function HZ() {
	let $ = [...O0.entries()];

	for (let [Q, J] of $) L8(Q, J);

	if ((R.commitLocalPaint(), X7(), $.length === 0)) return;

	for (let Q = 0; Q < $.length; Q += l6) if (!await j7($.slice(Q, Q + l6))) return Y0("Something went wrong, sorry!", "Could not submit local drawing to the server after 5 tries");
}

function M5($, Q) {
	if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q) || $ < 0 || Q < 0 || $ >= d || !uY($, Q)) return !1;

	let J = R.paintRemaining + R.localPaintIncrement,
		Y = l6 - D0 - 5,
		Z = J % D0 == 0 && R.localPaintIncrement < -Y;

	if (!J || Z) return (U5(), !1);

	let q = R.selectedColor, K = Q * d + $;

	if (M$[K] == 255) I1($, Q);

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

async function N1() {
	try {
		(V6.classList.add("progress"), await HZ());
	} finally {
		V6.classList.remove("progress");
	}
}

async function iY() {
	if (z5()) {
		if (!await e("Are you sure you want to cancel your changes?")) return;
	}

	jZ();
}

function z5() {
	return O0.size > 500 || p0.length > 0;
}

var R6 = [], p0 = [], t0 = [];

function V7() {
	(R6.push(t0), t0 = [], p0 = []);
}

function H7() {
	(R6 = [], p0 = [], t0 = []);
}

function k5($, Q = !1) {
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

function g1() {
	if (t0.length) {
		let J = k5(t0);

		(R.addLocalPaintIncrement(J), p0 = [], p0.push(t0), t0 = []);

		return;
	}

	if (!R6.length) return;

	let $ = R6.pop(), Q = k5($);

	(R.addLocalPaintIncrement(+Q), p0.push($));
}

function x1() {
	if (!p0.length) return;

	let $ = p0.pop(), Q = k5($, !0);

	(R6.push($), R.addLocalPaintIncrement(-Q));
}

var C5 = new Set(), E8 = null, M6 = -1;

async function PZ() {
	return (await (await N.cursor.data.$get()).json()).map((J) => ({ ...J, ...RZ(J), unlocked: C5.has(J.id) }));
}

async function p1() {
	let Q = await (await N.cursor.inventory.$get()).json();

	C5.clear();

	for (let J of Q.cursors) C5.add(J);

	E8 = Q;
}

async function y$($) {
	let Q = await N.cursor.claimCursor.$post({ json: $ });

	if (Q.status != 200) return await Q.text();

	return (await p1(), null);
}

function VZ($, Q, J) {
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

function RZ($) {
	let Q = $.unlock;

	if (!Q || Q.kind == "client") return { claimable: !1, tooltip: "You do not own this cursor!" };

	switch (Q.kind) {
		case "stat":
			{
				let J = E8.stats[Q.stat] ?? 0;

				return J >= Q.gte
					? { claimable: !0, tooltip: "Click to claim!" }
					: { claimable: !1, tooltip: VZ(Q.stat, J, Q.gte) };
			}

		case "purchase":
			return E8.coins >= Q.cost
				? { claimable: !0, tooltip: `Click to buy (${Q.cost} coins)` }
				: { claimable: !1, tooltip: `Costs ${Q.cost} coins` };

		case "code":
			return { claimable: !1, tooltip: "Unlocks with a secret code" };

		case "manual":
			return { claimable: !1, tooltip: "Awarded by moderators" };
	}
}

function MZ($) {
	let Q = G("div.item.box", {
		id: `item${$.id}`,
		async onclick() {
			if ($.unlocked) D5($); else if ($.claimable) {
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

function D5($) {
	if ($.id == M6) return;

	M6 = $.id;

	let Q = f("#inv-confirm-buttons");

	if ((
		o0(".inventory .item.active").forEach((J) => J.classList.remove("active")),
		f(`#item${$.id}`).classList.add("active"),
		$.id == R.user?.cursor_id
	)) Q.style.display = "none"; else Q.style.display = "";
}

function zZ() {
	let $ = R.currentSprayCanSize(),
		Q = Math.floor($ / PQ) || 1;

	new y("Coins", G("div.coin-modal", G("p.c", "You have ", jJ(E8.coins), ` coin${A0(E8.coins)}`), G("p.notice", `You can exchange spray cans for coins! Every ${PQ} paint is one coin.`), G("p.c", "Your current spray can contains ", G("b", $.toString()), " paint, ", "so you will receive ", G("b", Q.toString()), ` coin${A0($ == 0 ? 0 : Q)}.`), G("div.btn-container", G("button.btn", "Back", { onclick: T8 }), G("button.btn.primary", "Sell Spray Can", {
		async onclick() {
			if (R.localPaintIncrement != 0 || p0.length) {
				Y0("You cannot sell your current spray can while drawing! Please cancel or submit your local changes.");

				return;
			}

			if (Q == 0) {
				Y0("Empty spray can!");

				return;
			}

			if (!await e(`Sell your current spray can for ${A0(Q, "coin")}? The remainder will not be lost.`)) return T8();

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

	(q0(), await p1());

	let $ = await PZ(),
		Q = $.toSorted((J, Y) => Y.unlocked - J.unlocked || Y.tier - J.tier || J.name.localeCompare(Y.name));

	(
		new y("User > Inventory", G("div.inventory.nopad", G("div.scroll.pad", G("p.notice", "Click on a cursor to select it! It will be shown to all users."), G("br"), G("div.items", Q.map(MZ)), G("p", "More cursors coming soon!")), G("div.box.outset.confirm-bar", G("button.btn", "Back", { onclick: () => p() }), G("button.btn", A0(Math.floor(E8.coins), "coin"), { onclick: zZ }), G(
			"div#inv-confirm-buttons",
			{ style: { display: "none" } },
			G("button.btn", "Cancel", {
				onclick() {
					D5($[R.user.cursor_id]);
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
			D5($[R.user.cursor_id]);
		})
	);
}

window.freeCursor = async ($) => {
	let Q = await y$({ code: $ });

	if (Q) return (console.warn(`freeCursor: ${Q}`), !1);

	return (console.log("Unlocked! Open the inventory to equip it."), !0);

	let J = "You like looking for secrets, don't you? On an unrelated note, consider checking out the amazing people who made this site: https://yui.dev and https://github.com/brennenawana";
};

var L5 = new Map(), q$ = ($, Q) => L5.set($, Q);

q$(0, ($) => {
	if (typeof $.paintRemaining == "number") (
		R.nextRefill = $.nextRefillAt || 0,
		R.setPaintRemaining($.paintRemaining),
		n0()
	);
});

q$(8, ($) => {
	if ((Z$.receive($), $.kind === "cursor_unlock")) p1();
});

q$(9, () => {});
q$(10, () => {});

q$(3, ($) => {
	if ($.users) kY($.users);
	if ((VY($.cursorOverflow ?? 0), !$.cursors)) return;

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

q$(5, ($) => CY($.id));

q$(2, ($) => {
	(
		R.connectionId = $.id,
		$.users.forEach(lQ),
		R.openAt = $.openAt ?? 0,
		R.clockOffset = $.now ? $.now - Date.now() : 0,
		R7()
	);
});

q$(6, ($) => {
	if ((
		M7($.id, $.message, $.pos, $.username, $.clanName, $.isGlobal, $.userId),
		$.nonce
	)) return;

	if (!V0.has($.id)) {
		dQ($.id);

		return;
	}

	U7(V0.get($.id), $.message);
});

q$(11, ($) => {
	z7($.userId);
});

q$(7, async ($) => {
	let Q = 0;

	if ($.pixels) {
		let J = $.pixels,
			Y = J instanceof Uint8Array
				? J
				: J.buffer instanceof Uint8Array ? J.buffer : new Uint8Array(J.buffer ?? J),
			Z = new DataView(Y.buffer, Y.byteOffset, Y.byteLength);

		for (let q = 0; q + 5 <= Y.byteLength; q += 5) (L8(Z.getUint32(q, !0), Z.getUint8(q + 4)), Q++);
	}

	if (Q) pY();
});

function k7() {
	let $ = G("div.list.box.outset", G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")), G("div.item.box.online-modal.online-modal-loading", G("i", "Loading online users…")), {
			style: {
				maxHeight: "600px",
				overflowY: "auto",
				justifyContent: "unset"
			}
		}),
		Q = new y("Online Users", G("div.leaderboard-modal", G("p.online-modal-count", G("b#online-modal-count", j0(R.onlinePlayers || 1)), " players online"), G("p.online-modal-viewers", G("b#online-modal-viewers", j0(R.onlineViewers || 0)), " watching"), $));

	L7().then((J) => {
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

function C7($, Q) {
	let J = f("#online-modal-count");

	if (J) J.textContent = j0($ || 1);
	if (Q !== void 0) D7(Q);
}

function D7($) {
	let Q = f("#online-modal-viewers");

	if (Q) Q.textContent = j0($ || 0);
}

var A7 = 0;

async function A5() {
	if ((clearTimeout(A7), !K0)) return;

	A7 = setTimeout(A5, c4);

	let $ = performance.now(),
		Q = await v$(0, {}, p4),
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

	(C7(J, Y), E7(J, Y), I8());
}

function T7() {
	(setInterval(SY, J0.canvas.syncInterval), z6());
}

var kZ = (() => {
	let $ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;

	return (Q) => $.call(Q);
})();

function g$($) {
	return kZ($) === "Uint8Array";
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

function CZ($) {
	if ($ != null && typeof $ === "object" && "stylize" in $ && typeof $.stylize === "function") return $.stylize;
}

var Z8 = 7,
	S8 = Symbol.for("@@mdb.bson.version"),
	D6 = 2147483647,
	L6 = -2147483648,
	f7 = Math.pow(2, 63) - 1,
	l7 = -Math.pow(2, 63),
	d7 = Math.pow(2, 53),
	u7 = -Math.pow(2, 53),
	r5 = 1,
	o7 = 2,
	i5 = 3,
	n7 = 4,
	e5 = 5,
	DZ = 6,
	t7 = 7,
	a7 = 8,
	s7 = 9,
	$4 = 10,
	f1 = 11,
	LZ = 12,
	Q4 = 13,
	r7 = 14,
	i7 = 15,
	C6 = 16,
	e7 = 17,
	J4 = 18,
	$G = 19,
	QG = 255,
	JG = 127,
	AZ = 0,
	Y4 = 4,
	TZ = Object.freeze({
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

class k extends Error {
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

class q8 extends k {
	get name() {
		return "BSONVersionError";
	}

	constructor() {
		super(`Unsupported BSON version, bson types must be from bson ${Z8}.x.x`);
	}
}

class l1 extends k {
	get name() {
		return "BSONRuntimeError";
	}

	constructor($) {
		super($);
	}
}

class K$ extends k {
	get name() {
		return "BSONOffsetError";
	}

	offset;

	constructor($, Q, J) {
		super(`${$}. offset: ${Q}`, J);
		this.offset = Q;
	}
}

var I7, w7;

function YG($, Q, J, Y) {
	if (Y) {
		I7 ??= new TextDecoder("utf8", { fatal: !0 });

		try {
			return I7.decode($.subarray(Q, J));
		} catch(Z) {
			throw new k("Invalid UTF-8 string in BSON document", { cause: Z });
		}
	}

	return (
		w7 ??= new TextDecoder("utf8", { fatal: !1 }),
		w7.decode($.subarray(Q, J))
	);
}

function GG($, Q, J) {
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

function wZ($) {
	return crypto.getRandomValues(d0.allocate($));
}

var hZ = (() => {
		let { crypto: $ } = globalThis;

		if ($ != null && typeof $.getRandomValues === "function") return wZ; else return IZ;
	})(),
	d0 = {
		isUint8Array: g$,
		toLocalBufferType($) {
			if (Buffer.isBuffer($)) return $;
			if (ArrayBuffer.isView($)) return Buffer.from($.buffer, $.byteOffset, $.byteLength);

			let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

			if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return Buffer.from($);

			throw new k("Cannot create Buffer from the passed potentialBuffer.");
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
			let Z = J - Q <= 20 ? GG($, Q, J) : null;

			if (Z != null) return Z;

			let q = d0.toLocalBufferType($).toString("utf8", Q, J);

			if (Y) {
				for (let K = 0; K < q.length; K++) if (q.charCodeAt(K) === 65533) {
					YG($, Q, J, !0);

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
		randomBytes: hZ,
		swap32($) {
			return d0.toLocalBufferType($).swap32();
		}
	};

function mZ() {
	let { navigator: $ } = globalThis;

	return typeof $ === "object" && $.product === "ReactNative";
}

function NZ($) {
	if ($ < 0) throw new RangeError(`The argument 'byteLength' is invalid. Received ${$}`);

	return G8.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
}

var OZ = (() => {
		let { crypto: $ } = globalThis;

		if ($ != null && typeof $.getRandomValues === "function") return (Q) => {
			return $.getRandomValues(G8.allocate(Q));
		}; else {
			if (mZ()) {
				let { console: Q } = globalThis;

				Q?.warn?.("BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.");
			}

			return NZ;
		}
	})(),
	h7 = /(\d|[a-f])/i,
	G8 = {
		isUint8Array: g$,
		toLocalBufferType($) {
			let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

			if (Q === "Uint8Array") return $;
			if (ArrayBuffer.isView($)) return new Uint8Array($.buffer.slice($.byteOffset, $.byteOffset + $.byteLength));
			if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return new Uint8Array($);

			throw new k("Cannot make a Uint8Array from passed potentialBuffer.");
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

				if (!h7.test(Z)) break;
				if (!h7.test(q)) break;

				let K = Number.parseInt(`${Z}${q}`, 16);

				J.push(K);
			}

			return Uint8Array.from(J);
		},

		toHex($) {
			return Array.from($, (Q) => Q.toString(16).padStart(2, "0")).join("");
		},

		toUTF8($, Q, J, Y) {
			let Z = J - Q <= 20 ? GG($, Q, J) : null;

			if (Z != null) return Z;

			return YG($, Q, J, Y);
		},

		utf8ByteLength($) {
			return new TextEncoder().encode($).byteLength;
		},

		encodeUTF8Into($, Q, J) {
			let Y = new TextEncoder().encode(Q);

			return ($.set(Y, J), Y.byteLength);
		},
		randomBytes: OZ,
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
	BZ = typeof Buffer === "function" && Buffer.prototype?._isBuffer !== !0,
	U = BZ ? d0 : G8,
	G4 = Symbol.for("@@mdb.bson.type");

class _0 {
	get [G4]() {
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

		if ($ != null && typeof $ === "string" && !ArrayBuffer.isView($) && !a5($) && !Array.isArray($)) throw new k("Binary can only be constructed from Uint8Array or number[]");

		if ((
			this.sub_type = Q ?? o.BSON_BINARY_SUBTYPE_DEFAULT,
			$ == null
		)) (this.buffer = U.allocate(o.BUFFER_SIZE), this.position = 0); else (
			this.buffer = Array.isArray($) ? U.fromNumberArray($) : U.toLocalBufferType($),
			this.position = this.buffer.byteLength
		);
	}

	put($) {
		if (typeof $ === "string" && $.length !== 1) throw new k("only accepts single character String"); else if (typeof $ !== "number" && $.length !== 1) throw new k("only accepts single character Uint8Array or Array");

		let Q;

		if (typeof $ === "string") Q = $.charCodeAt(0); else if (typeof $ === "number") Q = $; else Q = $[0];
		if (Q < 0 || Q > 255) throw new k("only accepts number in a valid unsigned byte range 0-255");

		if (this.buffer.byteLength > this.position) this.buffer[this.position++] = Q; else {
			let J = U.allocate(o.BUFFER_SIZE + this.buffer.length);

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
			let J = U.allocate(this.buffer.byteLength + $.length);

			(J.set(this.buffer, 0), this.buffer = J);
		}

		if (ArrayBuffer.isView($)) (
			this.buffer.set(U.toLocalBufferType($), Q),
			this.position = Q + $.byteLength > this.position ? Q + $.length : this.position
		); else if (typeof $ === "string") throw new k("input cannot be string");
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
		return U.toBase64(this.buffer.subarray(0, this.position));
	}

	toString($) {
		if ($ === "hex") return U.toHex(this.buffer.subarray(0, this.position));
		if ($ === "base64") return U.toBase64(this.buffer.subarray(0, this.position));
		if ($ === "utf8" || $ === "utf-8") return U.toUTF8(this.buffer, 0, this.position, !1);

		return U.toUTF8(this.buffer, 0, this.position, !1);
	}

	toExtendedJSON($) {
		if (($ = $ || {}, this.sub_type === o.SUBTYPE_VECTOR)) U$(this);

		let Q = U.toBase64(this.buffer),
			J = Number(this.sub_type).toString(16);

		if ($.legacy) return { $binary: Q, $type: J.length === 1 ? "0" + J : J };

		return {
			$binary: { base64: Q, subType: J.length === 1 ? "0" + J : J }
		};
	}

	toUUID() {
		if (this.sub_type === o.SUBTYPE_UUID) return new I0(this.buffer.subarray(0, this.position));

		throw new k(`Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${o.SUBTYPE_UUID}" is currently supported.`);
	}

	static createFromHexString($, Q) {
		return new o(U.fromHex($), Q);
	}

	static createFromBase64($, Q) {
		return new o(U.fromBase64($), Q);
	}

	static fromExtendedJSON($, Q) {
		Q = Q || {};

		let J, Y;

		if ("$binary" in $) {
			if (Q.legacy && typeof $.$binary === "string" && "$type" in $) (
				Y = $.$type ? parseInt($.$type, 16) : 0,
				J = U.fromBase64($.$binary)
			); else if (typeof $.$binary !== "string") (
				Y = $.$binary.subType ? parseInt($.$binary.subType, 16) : 0,
				J = U.fromBase64($.$binary.base64)
			);
		} else if ("$uuid" in $) (Y = 4, J = I0.bytesFromString($.$uuid));

		if (!J) throw new k(`Unexpected Binary Extended JSON format ${JSON.stringify($)}`);

		return Y === Y4 ? new I0(J) : new o(J, Y);
	}

	inspect($, Q, J) {
		J ??= c0;

		let Y = U.toBase64(this.buffer.subarray(0, this.position)),
			Z = J(Y, Q),
			q = J(this.sub_type, Q);

		return `Binary.createFromBase64(${Z}, ${q})`;
	}

	toInt8Array() {
		if (this.sub_type !== o.SUBTYPE_VECTOR) throw new k("Binary sub_type is not Vector");
		if (this.buffer[0] !== o.VECTOR_TYPE.Int8) throw new k("Binary datatype field is not Int8");

		return (
			U$(this),
			new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
		);
	}

	toFloat32Array() {
		if (this.sub_type !== o.SUBTYPE_VECTOR) throw new k("Binary sub_type is not Vector");
		if (this.buffer[0] !== o.VECTOR_TYPE.Float32) throw new k("Binary datatype field is not Float32");

		U$(this);

		let $ = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));

		if (b.isBigEndian) U.swap32($);

		return new Float32Array($.buffer);
	}

	toPackedBits() {
		if (this.sub_type !== o.SUBTYPE_VECTOR) throw new k("Binary sub_type is not Vector");
		if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new k("Binary datatype field is not packed bit");

		return (
			U$(this),
			new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
		);
	}

	toBits() {
		if (this.sub_type !== o.SUBTYPE_VECTOR) throw new k("Binary sub_type is not Vector");
		if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new k("Binary datatype field is not packed bit");

		U$(this);

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
		let Q = U.allocate($.byteLength + 2);

		(Q[0] = o.VECTOR_TYPE.Int8, Q[1] = 0);

		let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

		Q.set(J, 2);

		let Y = new this(Q, this.SUBTYPE_VECTOR);

		return (U$(Y), Y);
	}

	static fromFloat32Array($) {
		let Q = U.allocate($.byteLength + 2);

		(Q[0] = o.VECTOR_TYPE.Float32, Q[1] = 0);

		let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

		if ((Q.set(J, 2), b.isBigEndian)) U.swap32(new Uint8Array(Q.buffer, 2));

		let Y = new this(Q, this.SUBTYPE_VECTOR);

		return (U$(Y), Y);
	}

	static fromPackedBits($, Q = 0) {
		let J = U.allocate($.byteLength + 2);

		(J[0] = o.VECTOR_TYPE.PackedBit, J[1] = Q, J.set($, 2));

		let Y = new this(J, this.SUBTYPE_VECTOR);

		return (U$(Y), Y);
	}

	static fromBits($) {
		let Q = $.length + 7 >>> 3,
			J = new Uint8Array(Q + 2);

		J[0] = o.VECTOR_TYPE.PackedBit;

		let Y = $.length % 8;

		J[1] = Y === 0 ? 0 : 8 - Y;

		for (let Z = 0; Z < $.length; Z++) {
			let q = Z >>> 3, K = $[Z];

			if (K !== 0 && K !== 1) throw new k(`Invalid bit value at ${Z}: must be 0 or 1, found ${$[Z]}`);
			if (K === 0) continue;

			let W = 7 - Z % 8;

			J[q + 2] |= K << W;
		}

		return new this(J, o.SUBTYPE_VECTOR);
	}
}

function U$($) {
	if ($.sub_type !== o.SUBTYPE_VECTOR) return;

	let Q = $.position,
		J = $.buffer[0],
		Y = $.buffer[1];

	if ((J === o.VECTOR_TYPE.Float32 || J === o.VECTOR_TYPE.Int8) && Y !== 0) throw new k("Invalid Vector: padding must be zero for int8 and float32 vectors");

	if (J === o.VECTOR_TYPE.Float32) {
		if (Q !== 0 && Q - 2 !== 0 && (Q - 2) % 4 !== 0) throw new k("Invalid Vector: Float32 vector must contain a multiple of 4 bytes");
	}

	if (J === o.VECTOR_TYPE.PackedBit && Y !== 0 && Q === 2) throw new k("Invalid Vector: padding must be zero for packed bit vectors that are empty");
	if (J === o.VECTOR_TYPE.PackedBit && Y > 7) throw new k(`Invalid Vector: padding must be a value between 0 and 7. found: ${Y}`);
}

var E5 = 16,
	SZ = /^[0-9A-F]{32}$/i,
	_Z = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;

class I0 extends o {
	constructor($) {
		let Q;

		if ($ == null) Q = I0.generate(); else if ($ instanceof I0) Q = U.toLocalBufferType(new Uint8Array($.buffer)); else if (ArrayBuffer.isView($) && $.byteLength === E5) Q = U.toLocalBufferType($); else if (typeof $ === "string") Q = I0.bytesFromString($); else throw new k("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");

		super(Q, Y4);
	}

	get id() {
		return this.buffer;
	}

	set id($) {
		this.buffer = $;
	}

	toHexString($ = !0) {
		if ($) return [
			U.toHex(this.buffer.subarray(0, 4)),
			U.toHex(this.buffer.subarray(4, 6)),
			U.toHex(this.buffer.subarray(6, 8)),
			U.toHex(this.buffer.subarray(8, 10)),
			U.toHex(this.buffer.subarray(10, 16))
		].join("-");

		return U.toHex(this.buffer);
	}

	toString($) {
		if ($ === "hex") return U.toHex(this.id);
		if ($ === "base64") return U.toBase64(this.id);

		return this.toHexString();
	}

	toJSON() {
		return this.toHexString();
	}

	equals($) {
		if (!$) return !1;
		if ($ instanceof I0) return U.equals($.id, this.id);

		try {
			return U.equals(new I0($).id, this.id);
		} catch {
			return !1;
		}
	}

	toBinary() {
		return new o(this.id, o.SUBTYPE_UUID);
	}

	static generate() {
		let $ = U.randomBytes(E5);

		return ($[6] = $[6] & 15 | 64, $[8] = $[8] & 63 | 128, $);
	}

	static isValid($) {
		if (!$) return !1;
		if (typeof $ === "string") return I0.isValidUUIDString($);
		if (g$($)) return $.byteLength === E5;

		return $._bsontype === "Binary" && $.sub_type === this.SUBTYPE_UUID && $.buffer.byteLength === 16;
	}

	static createFromHexString($) {
		let Q = I0.bytesFromString($);

		return new I0(Q);
	}

	static createFromBase64($) {
		return new I0(U.fromBase64($));
	}

	static bytesFromString($) {
		if (!I0.isValidUUIDString($)) throw new k("UUID string representation must be 32 hex digits or canonical hyphenated representation");

		return U.fromHex($.replace(/-/g, ""));
	}

	static isValidUUIDString($) {
		return SZ.test($) || _Z.test($);
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

function ZG($) {
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

function qG($) {
	if ($ === "") return $;

	let Q = 0, J = $[Q] === "-", Y = $[Q] === "+";

	if (Y || J) Q += 1;

	let Z = !1;

	for (; Q < $.length && $[Q] === "0"; ++Q) Z = !0;

	if (!Z) return Y ? $.slice(1) : $;

	return `${J ? "-" : ""}${$.length === Q ? "0" : $.slice(Q)}`;
}

function yZ($, Q) {
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

var m7 = 65536,
	vZ = 16777216,
	B8 = m7 * m7,
	KG = B8 * B8,
	N7 = KG / 2,
	O7 = {},
	B7 = {},
	gZ = 20,
	xZ = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;

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

	static TWO_PWR_24 = V.fromInt(vZ);
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
				if ((Y = B7[$], Y)) return Y;
			}

			if ((J = V.fromBits($, ($ | 0) < 0 ? -1 : 0, !0), Z)) B7[$] = J;

			return J;
		} else {
			if (($ |= 0, Z = -128 <= $ && $ < 128)) {
				if ((Y = O7[$], Y)) return Y;
			}

			if ((J = V.fromBits($, $ < 0 ? -1 : 0, !1), Z)) O7[$] = J;

			return J;
		}
	}

	static fromNumber($, Q) {
		if (isNaN($)) return Q ? V.UZERO : V.ZERO;

		if (Q) {
			if ($ < 0) return V.UZERO;
			if ($ >= KG) return V.MAX_UNSIGNED_VALUE;
		} else {
			if ($ <= -N7) return V.MIN_VALUE;
			if ($ + 1 >= N7) return V.MAX_VALUE;
		}

		if ($ < 0) return V.fromNumber(-$, Q).neg();

		return V.fromBits($ % B8 | 0, $ / B8 | 0, Q);
	}

	static fromBigInt($, Q) {
		let J = 0xffffffffn, Y = 32n;

		return new V(Number($ & J), Number($ >> Y & J), Q);
	}

	static _fromString($, Q, J) {
		if ($.length === 0) throw new k("empty string");
		if (J < 2 || 36 < J) throw new k("radix");

		let Y;

		if ((Y = $.indexOf("-")) > 0) throw new k("interior hyphen"); else if (Y === 0) return V._fromString($.substring(1), Q, J).neg();

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
		if ((J ??= 10, $.trim() !== $)) throw new k(`Input: '${$}' contains leading and/or trailing whitespace`);
		if (!yZ($, J)) throw new k(`Input: '${$}' contains invalid characters for radix: ${J}`);

		let Z = qG($), q = V._fromString(Z, Y, J);

		if (q.toString(J).toLowerCase() !== Z.toLowerCase()) throw new k(`Input: ${$} is not representable as ${q.unsigned ? "an unsigned" : "a signed"} 64-bit Long ${J != null ? `with radix: ${J}` : ""}`);

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
		if ($.isZero()) throw new k("division by zero");

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
		if (($ = $ || 10, $ < 2 || 36 < $)) throw new k("radix");
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

		if ($.$numberLong.length > gZ) throw new k("$numberLong string is too long");
		if (!xZ.test($.$numberLong)) throw new k(`$numberLong string "${$.$numberLong}" is in an invalid format`);

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

var pZ = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
	cZ = /^(\+|-)?(Infinity|inf)$/i,
	bZ = /^(\+|-)?NaN$/i,
	w8 = 6111,
	U6 = -6176,
	S7 = 6176,
	_7 = 34,
	I5 = U.fromNumberArray([124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
	y7 = U.fromNumberArray([248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
	v7 = U.fromNumberArray([120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
	fZ = /^([-+])?(\d+)?$/,
	lZ = 31,
	g7 = 16383,
	dZ = 30,
	uZ = 31;

function x7($) {
	return !isNaN(parseInt($, 10));
}

function oZ($) {
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

function nZ($, Q) {
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

function tZ($, Q) {
	let J = $.high >>> 0, Y = Q.high >>> 0;

	if (J < Y) return !0; else if (J === Y) {
		let Z = $.low >>> 0, q = Q.low >>> 0;

		if (Z < q) return !0;
	}

	return !1;
}

function a0($, Q) {
	throw new k(`"${$}" is not a valid Decimal128 string - ${Q}`);
}

class B0 extends _0 {
	get _bsontype() {
		return "Decimal128";
	}

	bytes;

	constructor($) {
		super();

		if (typeof $ === "string") this.bytes = B0.fromString($).bytes; else if ($ instanceof Uint8Array || g$($)) {
			if ($.byteLength !== 16) throw new k("Decimal128 must take a Buffer of 16 bytes");

			this.bytes = $;
		} else throw new k("Decimal128 must take a Buffer or string");
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
			D = 0;

		if ($.length >= 7000) throw new k("" + $ + " not a valid Decimal128 string");

		let _ = $.match(pZ),
			w = $.match(cZ),
			h = $.match(bZ);

		if (!_ && !w && !h || $.length === 0) throw new k("" + $ + " not a valid Decimal128 string");

		if (_) {
			let E = _[2], B = _[4], n = _[5], Q0 = _[6];

			if (B && Q0 === void 0) a0($, "missing exponent power");
			if (B && E === void 0) a0($, "missing exponent base");
			if (B === void 0 && (n || Q0)) a0($, "missing e before exponent");
		}

		if ($[D] === "+" || $[D] === "-") (Y = !0, J = $[D++] === "-");

		if (!x7($[D]) && $[D] !== ".") {
			if ($[D] === "i" || $[D] === "I") return new B0(J ? y7 : v7); else if ($[D] === "N") return new B0(I5);
		}

		while (x7($[D]) || $[D] === ".") {
			if ($[D] === ".") {
				if (Z) a0($, "contains multiple periods");

				(Z = !0, D = D + 1);

				continue;
			}

			if (P < _7) {
				if ($[D] !== "0" || q) {
					if (!q) X = W;

					(q = !0, j[C++] = parseInt($[D], 10), P = P + 1);
				}
			}

			if (q) F = F + 1;
			if (Z) H = H + 1;

			(W = W + 1, D = D + 1);
		}

		if (Z && !W) throw new k("" + $ + " not a valid Decimal128 string");

		if ($[D] === "e" || $[D] === "E") {
			let E = $.substr(++D).match(fZ);

			if (!E || !E[2]) return new B0(I5);

			(A = parseInt(E[0], 10), D = D + E[0].length);
		}

		if ($[D]) return new B0(I5);
		if (!P) (j[0] = 0, F = 1, P = 1, K = 0); else if ((z = P - 1, K = F, K !== 1)) while ($[X + K - 1 + Number(Y) + Number(Z)] === "0") K = K - 1;
		if (A <= H && H > A + 16384) A = U6; else A = A - H;

		while (A > w8) {
			if ((z = z + 1, z >= _7)) {
				if (K === 0) {
					A = w8;

					break;
				}

				a0($, "overflow");
			}

			A = A - 1;
		}

		if (Q.allowRounding) {
			while (A < U6 || P < F) {
				if (z === 0 && K < P) {
					(A = U6, K = 0);

					break;
				}

				if (P < F) F = F - 1; else z = z - 1;

				if (A < w8) A = A + 1; else {
					if (j.join("").match(/^0+$/)) {
						A = w8;

						break;
					}

					a0($, "overflow");
				}
			}

			if (z + 1 < K) {
				let E = W;

				if (Z) (X = X + 1, E = E + 1);
				if (Y) (X = X + 1, E = E + 1);

				let B = parseInt($[X + z + 1], 10), n = 0;

				if (B >= 5) {
					if ((n = 1, B === 5)) {
						n = j[z] % 2 === 1 ? 1 : 0;

						for (let Q0 = X + z + 2; Q0 < E; Q0++) if (parseInt($[Q0], 10)) {
							n = 1;

							break;
						}
					}
				}

				if (n) {
					let Q0 = z;

					for (; Q0 >= 0; Q0--) if (++j[Q0] > 9) {
						if ((j[Q0] = 0, Q0 === 0)) if (A < w8) (A = A + 1, j[Q0] = 1); else return new B0(J ? y7 : v7);
					} else break;
				}
			}
		} else {
			while (A < U6 || P < F) {
				if (z === 0) {
					if (K === 0) {
						A = U6;

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

				if (A < w8) A = A + 1; else a0($, "overflow");
			}

			if (z + 1 < K) {
				if (Z) X = X + 1;
				if (Y) X = X + 1;
				if (parseInt($[X + z + 1], 10) !== 0) a0($, "inexact rounding");
			}
		}

		if ((v = V.fromNumber(0), S = V.fromNumber(0), K === 0)) (v = V.fromNumber(0), S = V.fromNumber(0)); else if (z < 17) {
			let E = 0;

			(S = V.fromNumber(j[E++]), v = new V(0, 0));

			for (; E <= z; E++) (
				S = S.multiply(V.fromNumber(10)),
				S = S.add(V.fromNumber(j[E]))
			);
		} else {
			let E = 0;

			v = V.fromNumber(j[E++]);

			for (; E <= z - 17; E++) (
				v = v.multiply(V.fromNumber(10)),
				v = v.add(V.fromNumber(j[E]))
			);

			S = V.fromNumber(j[E++]);

			for (; E <= z; E++) (
				S = S.multiply(V.fromNumber(10)),
				S = S.add(V.fromNumber(j[E]))
			);
		}

		let T = nZ(v, V.fromString("100000000000000000"));

		if ((T.low = T.low.add(S), tZ(T.low, S))) T.high = T.high.add(V.fromNumber(1));

		M = A + S7;

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

		let m = U.allocateUnsafe(16);

		return (
			D = 0,
			m[D++] = O.low.low & 255,
			m[D++] = O.low.low >> 8 & 255,
			m[D++] = O.low.low >> 16 & 255,
			m[D++] = O.low.low >> 24 & 255,
			m[D++] = O.low.high & 255,
			m[D++] = O.low.high >> 8 & 255,
			m[D++] = O.low.high >> 16 & 255,
			m[D++] = O.low.high >> 24 & 255,
			m[D++] = O.high.low & 255,
			m[D++] = O.high.low >> 8 & 255,
			m[D++] = O.high.low >> 16 & 255,
			m[D++] = O.high.low >> 24 & 255,
			m[D++] = O.high.high & 255,
			m[D++] = O.high.high >> 8 & 255,
			m[D++] = O.high.high >> 16 & 255,
			m[D++] = O.high.high >> 24 & 255,
			new B0(m)
		);
	}

	toString() {
		let $, Q = 0, J = new Array(36);

		for (let D = 0; D < J.length; D++) J[D] = 0;

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

		let v = z >> 26 & lZ;

		if (v >> 3 === 3) if (v === dZ) return H.join("") + "Infinity"; else if (v === uZ) return "NaN"; else ($ = z >> 15 & g7, q = 8 + (z >> 14 & 1)); else (q = z >> 14 & 7, $ = z >> 17 & g7);

		let S = $ - S7;

		if ((
			K.parts[0] = (z & 16383) + ((q & 15) << 14),
			K.parts[1] = C,
			K.parts[2] = P,
			K.parts[3] = j,
			K.parts[0] === 0 && K.parts[1] === 0 && K.parts[2] === 0 && K.parts[3] === 0
		)) Z = !0; else for (F = 3; F >= 0; F--) {
			let D = 0, _ = oZ(K);

			if ((K = _.quotient, D = _.rem.low, !D)) continue;

			for (W = 8; W >= 0; W--) (J[F * 9 + W] = D % 10, D = Math.floor(D / 10));
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

			for (let D = 0; D < Q; D++) H.push(`${J[Y++]}`);

			if ((H.push("E"), M > 0)) H.push(`+${M}`); else H.push(`${M}`);
		} else if (S >= 0) for (let D = 0; D < Q; D++) H.push(`${J[Y++]}`); else {
			let D = Q + S;

			if (D > 0) for (let _ = 0; _ < D; _++) H.push(`${J[Y++]}`); else H.push("0");

			H.push(".");

			while (D++ < 0) H.push("0");

			for (let _ = 0; _ < Q - Math.max(D - 1, 0); _++) H.push(`${J[Y++]}`);
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
		if (!Number.isFinite(Q)) throw new k(`Input: ${$} is not representable as a Double`);
		if ($.trim() !== $) throw new k(`Input: '${$}' contains whitespace`);
		if ($ === "") throw new k("Input is an empty string");
		if ((/[^-0-9.+eE]/).test($)) throw new k(`Input: '${$}' is not in decimal or exponential notation`);

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
		let Q = qG($), J = Number($);

		if (D6 < J) throw new k(`Input: '${$}' is larger than the maximum value for Int32`); else if (L6 > J) throw new k(`Input: '${$}' is smaller than the minimum value for Int32`); else if (!Number.isSafeInteger(J)) throw new k(`Input: '${$}' is not a safe integer`); else if (J.toString() !== Q) throw new k(`Input: '${$}' is not a valid Int32 string`);

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

var Y8 = null, k6 = new WeakMap();

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
			if (typeof $.id !== "string" && !ArrayBuffer.isView($.id)) throw new k("Argument passed in must have an id that is of type string or Buffer");
			if ("toHexString" in $ && typeof $.toHexString === "function") Q = U.fromHex($.toHexString()); else Q = $.id;
		} else Q = $;

		if (Q == null) this.buffer = F0.generate(); else if (ArrayBuffer.isView(Q) && Q.byteLength === 12) this.buffer = U.toLocalBufferType(Q); else if (typeof Q === "string") if (F0.validateHexString(Q)) {
			if ((this.buffer = U.fromHex(Q), F0.cacheHexString)) k6.set(this, Q);
		} else throw new k("input must be a 24 character hex string, 12 byte Uint8Array, or an integer"); else throw new k("Argument passed in does not match the accepted types");
	}

	get id() {
		return this.buffer;
	}

	set id($) {
		if ((this.buffer = $, F0.cacheHexString)) k6.set(this, U.toHex($));
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
			let Q = k6.get(this);

			if (Q) return Q;
		}

		let $ = U.toHex(this.id);

		if (F0.cacheHexString) k6.set(this, $);

		return $;
	}

	static getInc() {
		return F0.index = (F0.index + 1) % 16777215;
	}

	static generate($) {
		if (typeof $ !== "number") $ = Math.floor(Date.now() / 1000);

		let Q = F0.getInc(), J = U.allocateUnsafe(12);

		if ((b.setInt32BE(J, 0, $), Y8 === null)) Y8 = U.randomBytes(5);

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
		if ($ === "base64") return U.toBase64(this.id);
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
		if (F0.is($)) return this.buffer[11] === $.buffer[11] && U.equals(this.buffer, $.buffer);
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
		let Q = U.allocate(12);

		for (let J = 11; J >= 4; J--) Q[J] = 0;

		return (b.setInt32BE(Q, 0, $), new F0(Q));
	}

	static createFromHexString($) {
		if ($?.length !== 24) throw new k("hex string must be 24 characters");

		return new F0(U.fromHex($));
	}

	static createFromBase64($) {
		if ($?.length !== 16) throw new k("base64 string must be 16 characters");

		return new F0(U.fromBase64($));
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
		return F0.cacheHexString && k6.has(this);
	}

	inspect($, Q, J) {
		return (J ??= c0, `new ObjectId(${J(this.toHexString(), Q)})`);
	}
}

function c1($, Q, J) {
	let Y = 5;

	if (Array.isArray($)) for (let Z = 0; Z < $.length; Z++) Y += p7(Z.toString(), $[Z], Q, !0, J); else {
		if (typeof $?.toBSON === "function") $ = $.toBSON();

		for (let Z of Object.keys($)) Y += p7(Z, $[Z], Q, !1, J);
	}

	return Y;
}

function p7($, Q, J = !1, Y = !1, Z = !1) {
	if (typeof Q?.toBSON === "function") Q = Q.toBSON();

	switch (typeof Q) {
		case "string":
			return 1 + U.utf8ByteLength($) + 1 + 4 + U.utf8ByteLength(Q) + 1;

		case "number":
			if (Math.floor(Q) === Q && Q >= u7 && Q <= d7) if (Q >= L6 && Q <= D6) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 5; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9;

		case "undefined":
			if (Y || !Z) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1;
			return 0;

		case "boolean":
			return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 2;

		case "object":
			if (Q != null && typeof Q._bsontype === "string" && Q[S8] !== Z8) throw new q8(); else if (Q == null || Q._bsontype === "MinKey" || Q._bsontype === "MaxKey") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1; else if (Q._bsontype === "ObjectId") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 13; else if (Q instanceof Date || N8(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else if (ArrayBuffer.isView(Q) || Q instanceof ArrayBuffer || a5(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 6 + Q.byteLength; else if (Q._bsontype === "Long" || Q._bsontype === "Double" || Q._bsontype === "Timestamp") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else if (Q._bsontype === "Decimal128") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 17; else if (Q._bsontype === "Code") if (Q.scope != null && Object.keys(Q.scope).length > 0) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + 4 + U.utf8ByteLength(Q.code.toString()) + 1 + c1(Q.scope, J, Z); else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + U.utf8ByteLength(Q.code.toString()) + 1; else if (Q._bsontype === "Binary") {
				let q = Q;

				if (q.sub_type === o.SUBTYPE_BYTE_ARRAY) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1 + 4); else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1);
			} else if (Q._bsontype === "Symbol") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + U.utf8ByteLength(Q.value) + 4 + 1 + 1; else if (Q._bsontype === "DBRef") {
				let q = Object.assign({ $ref: Q.collection, $id: Q.oid }, Q.fields);

				if (Q.db != null) q.$db = Q.db;

				return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + c1(q, J, Z);
			} else if (Q instanceof RegExp || m8(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + U.utf8ByteLength(Q.source) + 1 + (Q.global ? 1 : 0) + (Q.ignoreCase ? 1 : 0) + (Q.multiline ? 1 : 0) + 1; else if (Q._bsontype === "BSONRegExp") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + U.utf8ByteLength(Q.pattern) + 1 + U.utf8ByteLength(Q.options) + 1; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + c1(Q, J, Z) + 1;

		case "function":
			if (J) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + U.utf8ByteLength(Q.toString()) + 1;
			return 0;

		case "bigint":
			return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9;

		case "symbol":
			return 0;

		default:
			throw new k(`Unrecognized JS type: ${typeof Q}`);
	}
}

function aZ($) {
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
			this.options = aZ(Q ?? ""),
			this.pattern.indexOf("\x00") !== -1
		)) throw new k(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);

		if (this.options.indexOf("\x00") !== -1) throw new k(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);

		for (let J = 0; J < this.options.length; J++) if (!(this.options[J] === "i" || this.options[J] === "m" || this.options[J] === "x" || this.options[J] === "l" || this.options[J] === "s" || this.options[J] === "u")) throw new k(`The regular expression option [${this.options[J]}] is not supported`);
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

		throw new k(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify($)}`);
	}

	inspect($, Q, J) {
		let Y = CZ(Q) ?? ((K) => K);

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

var sZ = V;

class F$ extends sZ {
	get _bsontype() {
		return "Timestamp";
	}

	get [G4]() {
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
			if (typeof $.t !== "number" && (typeof $.t !== "object" || $.t._bsontype !== "Int32")) throw new k("Timestamp constructed from { t, i } must provide t as a number");
			if (typeof $.i !== "number" && (typeof $.i !== "object" || $.i._bsontype !== "Int32")) throw new k("Timestamp constructed from { t, i } must provide i as a number");

			let Q = Number($.t), J = Number($.i);

			if (Q < 0 || Number.isNaN(Q)) throw new k("Timestamp constructed from { t, i } must provide a positive t");
			if (J < 0 || Number.isNaN(J)) throw new k("Timestamp constructed from { t, i } must provide a positive i");
			if (Q > 4294967295) throw new k("Timestamp constructed from { t, i } must provide t equal or less than uint32 max");
			if (J > 4294967295) throw new k("Timestamp constructed from { t, i } must provide i equal or less than uint32 max");

			super(J, Q, !0);
		} else throw new k("A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }");
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

var rZ = V.fromNumber(d7), iZ = V.fromNumber(u7);

function FG($, Q, J) {
	Q = Q == null ? {} : Q;

	let Y = Q && Q.index ? Q.index : 0,
		Z = b.getInt32LE($, Y);

	if (Z < 5) throw new k(`bson size must be >= 5, is ${Z}`);
	if (Q.allowObjectSmallerThanBufferSize && $.length < Z) throw new k(`buffer length ${$.length} must be >= bson size ${Z}`);
	if (!Q.allowObjectSmallerThanBufferSize && $.length !== Z) throw new k(`buffer length ${$.length} must === bson size ${Z}`);
	if (Z + Y > $.byteLength) throw new k(`(bson size ${Z} + options.index ${Y} must be <= buffer length ${$.byteLength})`);
	if ($[Y + Z - 1] !== 0) throw new k("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");

	return b1($, Y, Q, J);
}

var eZ = /^\$ref$|^\$id$|^\$db$/;

function b1($, Q, J, Y = !1) {
	let Z = J.fieldsAsRaw == null ? null : J.fieldsAsRaw,
		q = J.raw == null ? !1 : J.raw,
		K = typeof J.bsonRegExp === "boolean" ? J.bsonRegExp : !1,
		W = J.promoteBuffers ?? !1,
		F = J.promoteLongs ?? !0,
		H = J.promoteValues ?? !0,
		X = J.useBigInt64 ?? !1;

	if (X && !H) throw new k("Must either request bigint or Long for int64 deserialization");
	if (X && !F) throw new k("Must either request bigint or Long for int64 deserialization");

	let j = J.validation == null ? { utf8: !0 } : J.validation,
		P = !0,
		C,
		z,
		A = j.utf8;

	if (typeof A === "boolean") C = A; else {
		P = !1;

		let w = Object.keys(A).map(function (h) {
			return A[h];
		});

		if (w.length === 0) throw new k("UTF-8 validation setting cannot be empty");
		if (typeof w[0] !== "boolean") throw new k("Invalid UTF-8 validation option, must specify boolean values");
		if ((C = w[0], !w.every((h) => h === C))) throw new k("Invalid UTF-8 validation option - keys must be all true or all false");
	}

	if (!P) {
		z = new Set();

		for (let w of Object.keys(A)) z.add(w);
	}

	let v = Q;

	if ($.length < 5) throw new k("corrupt bson message < 5 bytes long");

	let S = b.getInt32LE($, Q);

	if ((Q += 4, S < 5 || S > $.length)) throw new k("corrupt bson message");

	let M = Y ? [] : {}, D = 0, _ = Y ? !1 : null;

	while (!0) {
		let w = $[Q++];

		if (w === 0) break;

		let h = Q;

		while ($[h] !== 0 && h < $.length) h++;

		if (h >= $.byteLength) throw new k("Bad BSON Document: illegal CString");

		let T = Y ? D++ : U.toUTF8($, Q, h, !1), O = !0;

		if (P || z?.has(T)) O = C; else O = !C;
		if (_ !== !1 && T[0] === "$") _ = eZ.test(T);

		let m;

		if ((Q = h + 1, w === o7)) {
			let E = b.getInt32LE($, Q);

			if ((Q += 4, E <= 0 || E > $.length - Q || $[Q + E - 1] !== 0)) throw new k("bad string length in bson");

			(m = U.toUTF8($, Q, Q + E - 1, O), Q = Q + E);
		} else if (w === t7) {
			let E = U.allocateUnsafe(12);

			for (let B = 0; B < 12; B++) E[B] = $[Q + B];

			(m = new F0(E), Q = Q + 12);
		} else if (w === C6 && H === !1) (m = new c$(b.getInt32LE($, Q)), Q += 4); else if (w === C6) (m = b.getInt32LE($, Q), Q += 4); else if (w === r5) {
			if ((m = b.getFloat64LE($, Q), Q += 8, H === !1)) m = new s0(m);
		} else if (w === s7) {
			let E = b.getInt32LE($, Q),
				B = b.getInt32LE($, Q + 4);

			(Q += 8, m = new Date(new V(E, B).toNumber()));
		} else if (w === a7) {
			if ($[Q] !== 0 && $[Q] !== 1) throw new k("illegal boolean type value");

			m = $[Q++] === 1;
		} else if (w === i5) {
			let E = Q, B = b.getInt32LE($, Q);

			if (B <= 0 || B > $.length - Q) throw new k("bad embedded document length in bson");

			if (q) m = $.subarray(Q, Q + B); else {
				let n = J;

				if (!P) n = { ...J, validation: { utf8: O } };

				m = b1($, E, n, !1);
			}

			Q = Q + B;
		} else if (w === n7) {
			let E = Q,
				B = b.getInt32LE($, Q),
				n = J,
				Q0 = Q + B;

			if (Z && Z[T]) n = { ...J, raw: !0 };
			if (!P) n = { ...n, validation: { utf8: O } };
			if ((m = b1($, E, n, !0), Q = Q + B, $[Q - 1] !== 0)) throw new k("invalid array terminator byte");
			if (Q !== Q0) throw new k("corrupted array bson");
		} else if (w === DZ) m = void 0; else if (w === $4) m = null; else if (w === J4) if (X) (m = b.getBigInt64LE($, Q), Q += 8); else {
			let E = b.getInt32LE($, Q),
				B = b.getInt32LE($, Q + 4);

			Q += 8;

			let n = new V(E, B);

			if (F && H === !0) m = n.lessThanOrEqual(rZ) && n.greaterThanOrEqual(iZ) ? n.toNumber() : n; else m = n;
		} else if (w === $G) {
			let E = U.allocateUnsafe(16);

			for (let B = 0; B < 16; B++) E[B] = $[Q + B];

			(Q = Q + 16, m = new B0(E));
		} else if (w === e5) {
			let E = b.getInt32LE($, Q);

			Q += 4;

			let B = E, n = $[Q++];

			if (E < 0) throw new k("Negative binary type element size found");
			if (E > $.byteLength) throw new k("Binary type size larger than document size");

			if (n === o.SUBTYPE_BYTE_ARRAY) {
				if ((E = b.getInt32LE($, Q), Q += 4, E < 0)) throw new k("Negative binary type element size found for subtype 0x02");
				if (E > B - 4) throw new k("Binary type with subtype 0x02 contains too long binary size");
				if (E < B - 4) throw new k("Binary type with subtype 0x02 contains too short binary size");
			}

			if (W && H) m = U.toLocalBufferType($.subarray(Q, Q + E)); else if ((
				m = new o($.subarray(Q, Q + E), n),
				n === Y4 && I0.isValid(m)
			)) m = m.toUUID();

			Q = Q + E;
		} else if (w === f1 && K === !1) {
			h = Q;

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.length) throw new k("Bad BSON Document: illegal CString");

			let E = U.toUTF8($, Q, h, !1);

			(Q = h + 1, h = Q);

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.length) throw new k("Bad BSON Document: illegal CString");

			let B = U.toUTF8($, Q, h, !1);

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

			m = new RegExp(E, n.join(""));
		} else if (w === f1 && K === !0) {
			h = Q;

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.length) throw new k("Bad BSON Document: illegal CString");

			let E = U.toUTF8($, Q, h, !1);

			(Q = h + 1, h = Q);

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.length) throw new k("Bad BSON Document: illegal CString");

			let B = U.toUTF8($, Q, h, !1);

			(Q = h + 1, m = new r0(E, B));
		} else if (w === r7) {
			let E = b.getInt32LE($, Q);

			if ((Q += 4, E <= 0 || E > $.length - Q || $[Q + E - 1] !== 0)) throw new k("bad string length in bson");

			let B = U.toUTF8($, Q, Q + E - 1, O);

			(m = H ? B : new v8(B), Q = Q + E);
		} else if (w === e7) (
			m = new F$({ i: b.getUint32LE($, Q), t: b.getUint32LE($, Q + 4) }),
			Q += 8
		); else if (w === QG) m = new y8(); else if (w === JG) m = new _8(); else if (w === Q4) {
			let E = b.getInt32LE($, Q);

			if ((Q += 4, E <= 0 || E > $.length - Q || $[Q + E - 1] !== 0)) throw new k("bad string length in bson");

			let B = U.toUTF8($, Q, Q + E - 1, O);

			(m = new p$(B), Q = Q + E);
		} else if (w === i7) {
			let E = b.getInt32LE($, Q);

			if ((Q += 4, E < 13)) throw new k("code_w_scope total size shorter minimum expected length");

			let B = b.getInt32LE($, Q);

			if ((Q += 4, B <= 0 || B > $.length - Q || $[Q + B - 1] !== 0)) throw new k("bad string length in bson");

			let n = U.toUTF8($, Q, Q + B - 1, O);

			Q = Q + B;

			let Q0 = Q,
				l = b.getInt32LE($, Q),
				i = b1($, Q0, J, !1);

			if ((Q = Q + l, E < 8 + l + B)) throw new k("code_w_scope total size is too short, truncating scope");
			if (E > 8 + l + B) throw new k("code_w_scope total size is too long, clips outer document");

			m = new p$(n, i);
		} else if (w === LZ) {
			let E = b.getInt32LE($, Q);

			if ((Q += 4, E <= 0 || E > $.length - Q || $[Q + E - 1] !== 0)) throw new k("bad string length in bson");

			let B = U.toUTF8($, Q, Q + E - 1, O);

			Q = Q + E;

			let n = U.allocateUnsafe(12);

			for (let l = 0; l < 12; l++) n[l] = $[Q + l];

			let Q0 = new F0(n);

			(Q = Q + 12, m = new C$(B, Q0));
		} else throw new k(`Detected unknown BSON type ${w.toString(16)} for fieldname "${T}"`);

		if (T === "__proto__") Object.defineProperty(M, T, { value: m, writable: !0, enumerable: !0, configurable: !0 }); else M[T] = m;
	}

	if (S !== Q - v) {
		if (Y) throw new k("corrupt array bson");

		throw new k("corrupt object bson");
	}

	if (!_) return M;

	if (ZG(M)) {
		let w = Object.assign({}, M);

		return (
			delete w.$ref,
			delete w.$id,
			delete w.$db,
			new C$(M.$ref, M.$id, M.$db, w)
		);
	}

	return M;
}

var d1 = /\x00/,
	c7 = new Set(["$db", "$ref", "$id", "$clusterTime"]);

function w5($, Q, J, Y) {
	$[Y++] = o7;

	let Z = U.encodeUTF8Into($, Q, Y);

	(Y = Y + Z + 1, $[Y - 1] = 0);

	let q = U.encodeUTF8Into($, J, Y + 4);

	return (b.setInt32LE($, Y, q + 1), Y = Y + 4 + q, $[Y++] = 0, Y);
}

function h5($, Q, J, Y) {
	let q = !Object.is(J, -0) && Number.isSafeInteger(J) && J <= D6 && J >= L6 ? C6 : r5;

	$[Y++] = q;

	let K = U.encodeUTF8Into($, Q, Y);

	if ((Y = Y + K, $[Y++] = 0, q === C6)) Y += b.setInt32LE($, Y, J); else Y += b.setFloat64LE($, Y, J);

	return Y;
}

function m5($, Q, J, Y) {
	$[Y++] = J4;

	let Z = U.encodeUTF8Into($, Q, Y);

	return (Y += Z, $[Y++] = 0, Y += b.setBigInt64LE($, Y, J), Y);
}

function h8($, Q, J, Y) {
	$[Y++] = $4;

	let Z = U.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y);
}

function N5($, Q, J, Y) {
	$[Y++] = a7;

	let Z = U.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, $[Y++] = J ? 1 : 0, Y);
}

function O5($, Q, J, Y) {
	$[Y++] = s7;

	let Z = U.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = V.fromNumber(J.getTime()),
		K = q.getLowBits(),
		W = q.getHighBits();

	return (Y += b.setInt32LE($, Y, K), Y += b.setInt32LE($, Y, W), Y);
}

function B5($, Q, J, Y) {
	$[Y++] = f1;

	let Z = U.encodeUTF8Into($, Q, Y);

	if ((
		Y = Y + Z,
		$[Y++] = 0,
		J.source && J.source.match(d1) != null
	)) throw new k("value " + J.source + " must not contain null bytes");

	if ((
		Y = Y + U.encodeUTF8Into($, J.source, Y),
		$[Y++] = 0,
		J.ignoreCase
	)) $[Y++] = 105;

	if (J.global) $[Y++] = 115;
	if (J.multiline) $[Y++] = 109;

	return ($[Y++] = 0, Y);
}

function S5($, Q, J, Y) {
	$[Y++] = f1;

	let Z = U.encodeUTF8Into($, Q, Y);

	if ((Y = Y + Z, $[Y++] = 0, J.pattern.match(d1) != null)) throw new k("pattern " + J.pattern + " must not contain null bytes");

	(Y = Y + U.encodeUTF8Into($, J.pattern, Y), $[Y++] = 0);

	let q = J.options.split("").sort().join("");

	return (Y = Y + U.encodeUTF8Into($, q, Y), $[Y++] = 0, Y);
}

function _5($, Q, J, Y) {
	if (J === null) $[Y++] = $4; else if (J._bsontype === "MinKey") $[Y++] = QG; else $[Y++] = JG;

	let Z = U.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y);
}

function y5($, Q, J, Y) {
	$[Y++] = t7;

	let Z = U.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y += J.serializeInto($, Y), Y);
}

function v5($, Q, J, Y) {
	$[Y++] = e5;

	let Z = U.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = J.length;

	if ((Y += b.setInt32LE($, Y, q), $[Y++] = AZ, q <= 16)) for (let K = 0; K < q; K++) $[Y + K] = J[K]; else $.set(J, Y);

	return (Y = Y + q, Y);
}

function g5($, Q, J, Y, Z, q, K, W, F) {
	if (F.has(J)) throw new k("Cannot convert circular structure to BSON");

	(F.add(J), $[Y++] = Array.isArray(J) ? n7 : i5);

	let H = U.encodeUTF8Into($, Q, Y);

	(Y = Y + H, $[Y++] = 0);

	let X = A6($, J, Z, Y, q + 1, K, W, F);

	return (F.delete(J), X);
}

function x5($, Q, J, Y) {
	$[Y++] = $G;

	let Z = U.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	for (let q = 0; q < 16; q++) $[Y + q] = J.bytes[q];

	return Y + 16;
}

function p5($, Q, J, Y) {
	$[Y++] = J._bsontype === "Long" ? J4 : e7;

	let Z = U.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = J.getLowBits(), K = J.getHighBits();

	return (Y += b.setInt32LE($, Y, q), Y += b.setInt32LE($, Y, K), Y);
}

function c5($, Q, J, Y) {
	(J = J.valueOf(), $[Y++] = C6);

	let Z = U.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y += b.setInt32LE($, Y, J), Y);
}

function b5($, Q, J, Y) {
	$[Y++] = r5;

	let Z = U.encodeUTF8Into($, Q, Y);

	return (Y = Y + Z, $[Y++] = 0, Y += b.setFloat64LE($, Y, J.value), Y);
}

function f5($, Q, J, Y) {
	$[Y++] = Q4;

	let Z = U.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = J.toString(),
		K = U.encodeUTF8Into($, q, Y + 4) + 1;

	return (b.setInt32LE($, Y, K), Y = Y + 4 + K - 1, $[Y++] = 0, Y);
}

function l5($, Q, J, Y, Z = !1, q = 0, K = !1, W = !0, F) {
	if (J.scope && typeof J.scope === "object") {
		$[Y++] = i7;

		let H = U.encodeUTF8Into($, Q, Y);

		(Y = Y + H, $[Y++] = 0);

		let X = Y, j = J.code;

		Y = Y + 4;

		let P = U.encodeUTF8Into($, j, Y + 4) + 1;

		(b.setInt32LE($, Y, P), $[Y + 4 + P - 1] = 0, Y = Y + P + 4);

		let C = A6($, J.scope, Z, Y, q + 1, K, W, F);

		Y = C - 1;

		let z = C - X;

		(X += b.setInt32LE($, X, z), $[Y++] = 0);
	} else {
		$[Y++] = Q4;

		let H = U.encodeUTF8Into($, Q, Y);

		(Y = Y + H, $[Y++] = 0);

		let X = J.code.toString(),
			j = U.encodeUTF8Into($, X, Y + 4) + 1;

		(b.setInt32LE($, Y, j), Y = Y + 4 + j - 1, $[Y++] = 0);
	}

	return Y;
}

function d5($, Q, J, Y) {
	$[Y++] = e5;

	let Z = U.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let { buffer: q, position: K } = J;

	if (J.sub_type === o.SUBTYPE_BYTE_ARRAY) K = K + 4;

	if ((
		Y += b.setInt32LE($, Y, K),
		$[Y++] = J.sub_type,
		J.sub_type === o.SUBTYPE_BYTE_ARRAY
	)) (K = K - 4, Y += b.setInt32LE($, Y, K));

	if (J.sub_type === o.SUBTYPE_VECTOR) U$(J);
	if (K <= 16) for (let W = 0; W < K; W++) $[Y + W] = q[W]; else $.set(q, Y);

	return (Y = Y + J.position, Y);
}

function u5($, Q, J, Y) {
	$[Y++] = r7;

	let Z = U.encodeUTF8Into($, Q, Y);

	(Y = Y + Z, $[Y++] = 0);

	let q = U.encodeUTF8Into($, J.value, Y + 4) + 1;

	return (b.setInt32LE($, Y, q), Y = Y + 4 + q - 1, $[Y++] = 0, Y);
}

function o5($, Q, J, Y, Z, q, K) {
	$[Y++] = i5;

	let W = U.encodeUTF8Into($, Q, Y);

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
		if (Array.isArray(Q)) throw new k("serialize does not support an array as the root input");
		if (typeof Q !== "object") throw new k("serialize does not support non-object as the root input"); else if ("_bsontype" in Q && typeof Q._bsontype === "string") throw new k("BSON types cannot be serialized as a document"); else if (N8(Q) || m8(Q) || g$(Q) || a5(Q)) throw new k("date, regexp, typedarray, and arraybuffer cannot be BSON documents");

		W = new Set();
	}

	W.add(Q);

	let F = Y + 4;

	if (Array.isArray(Q)) for (let X = 0; X < Q.length; X++) {
		let j = `${X}`, P = Q[X];

		if (typeof P?.toBSON === "function") P = P.toBSON();

		let C = typeof P;

		if (P === void 0) F = h8($, j, P, F); else if (P === null) F = h8($, j, P, F); else if (C === "string") F = w5($, j, P, F); else if (C === "number") F = h5($, j, P, F); else if (C === "bigint") F = m5($, j, P, F); else if (C === "boolean") F = N5($, j, P, F); else if (C === "object" && P._bsontype == null) if (P instanceof Date || N8(P)) F = O5($, j, P, F); else if (P instanceof Uint8Array || g$(P)) F = v5($, j, P, F); else if (P instanceof RegExp || m8(P)) F = B5($, j, P, F); else F = g5($, j, P, F, J, Z, q, K, W); else if (C === "object") {
			if (P[S8] !== Z8) throw new q8(); else if (P._bsontype === "ObjectId") F = y5($, j, P, F); else if (P._bsontype === "Decimal128") F = x5($, j, P, F); else if (P._bsontype === "Long" || P._bsontype === "Timestamp") F = p5($, j, P, F); else if (P._bsontype === "Double") F = b5($, j, P, F); else if (P._bsontype === "Code") F = l5($, j, P, F, J, Z, q, K, W); else if (P._bsontype === "Binary") F = d5($, j, P, F); else if (P._bsontype === "BSONSymbol") F = u5($, j, P, F); else if (P._bsontype === "DBRef") F = o5($, j, P, F, Z, q, W); else if (P._bsontype === "BSONRegExp") F = S5($, j, P, F); else if (P._bsontype === "Int32") F = c5($, j, P, F); else if (P._bsontype === "MinKey" || P._bsontype === "MaxKey") F = _5($, j, P, F); else if (typeof P._bsontype !== "undefined") throw new k(`Unrecognized or invalid _bsontype: ${String(P._bsontype)}`);
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

			if (typeof C === "string" && !c7.has(C)) {
				if (C.match(d1) != null) throw new k("key " + C + " must not contain null bytes");

				if (J) {
					if (C[0] === "$") throw new k("key " + C + " must not start with '$'"); else if (C.includes(".")) throw new k("key " + C + " must not contain '.'");
				}
			}

			if (z === void 0) {
				if (K === !1) F = h8($, C, z, F);
			} else if (z === null) F = h8($, C, z, F); else if (A === "string") F = w5($, C, z, F); else if (A === "number") F = h5($, C, z, F); else if (A === "bigint") F = m5($, C, z, F); else if (A === "boolean") F = N5($, C, z, F); else if (A === "object" && z._bsontype == null) if (z instanceof Date || N8(z)) F = O5($, C, z, F); else if (z instanceof Uint8Array || g$(z)) F = v5($, C, z, F); else if (z instanceof RegExp || m8(z)) F = B5($, C, z, F); else F = g5($, C, z, F, J, Z, q, K, W); else if (A === "object") {
				if (z[S8] !== Z8) throw new q8(); else if (z._bsontype === "ObjectId") F = y5($, C, z, F); else if (z._bsontype === "Decimal128") F = x5($, C, z, F); else if (z._bsontype === "Long" || z._bsontype === "Timestamp") F = p5($, C, z, F); else if (z._bsontype === "Double") F = b5($, C, z, F); else if (z._bsontype === "Code") F = l5($, C, z, F, J, Z, q, K, W); else if (z._bsontype === "Binary") F = d5($, C, z, F); else if (z._bsontype === "BSONSymbol") F = u5($, C, z, F); else if (z._bsontype === "DBRef") F = o5($, C, z, F, Z, q, W); else if (z._bsontype === "BSONRegExp") F = S5($, C, z, F); else if (z._bsontype === "Int32") F = c5($, C, z, F); else if (z._bsontype === "MinKey" || z._bsontype === "MaxKey") F = _5($, C, z, F); else if (typeof z._bsontype !== "undefined") throw new k(`Unrecognized or invalid _bsontype: ${String(z._bsontype)}`);
			} else if (A === "function" && q) F = f5($, C, z, F);
		}
	} else {
		if (typeof Q?.toBSON === "function") {
			if ((Q = Q.toBSON(), Q != null && typeof Q !== "object")) throw new k("toBSON function did not return an object");
		}

		for (let X of Object.keys(Q)) {
			let j = Q[X];

			if (typeof j?.toBSON === "function") j = j.toBSON();

			let P = typeof j;

			if (typeof X === "string" && !c7.has(X)) {
				if (X.match(d1) != null) throw new k("key " + X + " must not contain null bytes");

				if (J) {
					if (X[0] === "$") throw new k("key " + X + " must not start with '$'"); else if (X.includes(".")) throw new k("key " + X + " must not contain '.'");
				}
			}

			if (j === void 0) {
				if (K === !1) F = h8($, X, j, F);
			} else if (j === null) F = h8($, X, j, F); else if (P === "string") F = w5($, X, j, F); else if (P === "number") F = h5($, X, j, F); else if (P === "bigint") F = m5($, X, j, F); else if (P === "boolean") F = N5($, X, j, F); else if (P === "object" && j._bsontype == null) if (j instanceof Date || N8(j)) F = O5($, X, j, F); else if (j instanceof Uint8Array || g$(j)) F = v5($, X, j, F); else if (j instanceof RegExp || m8(j)) F = B5($, X, j, F); else F = g5($, X, j, F, J, Z, q, K, W); else if (P === "object") {
				if (j[S8] !== Z8) throw new q8(); else if (j._bsontype === "ObjectId") F = y5($, X, j, F); else if (j._bsontype === "Decimal128") F = x5($, X, j, F); else if (j._bsontype === "Long" || j._bsontype === "Timestamp") F = p5($, X, j, F); else if (j._bsontype === "Double") F = b5($, X, j, F); else if (j._bsontype === "Code") F = l5($, X, j, F, J, Z, q, K, W); else if (j._bsontype === "Binary") F = d5($, X, j, F); else if (j._bsontype === "BSONSymbol") F = u5($, X, j, F); else if (j._bsontype === "DBRef") F = o5($, X, j, F, Z, q, W); else if (j._bsontype === "BSONRegExp") F = S5($, X, j, F); else if (j._bsontype === "Int32") F = c5($, X, j, F); else if (j._bsontype === "MinKey" || j._bsontype === "MaxKey") F = _5($, X, j, F); else if (typeof j._bsontype !== "undefined") throw new k(`Unrecognized or invalid _bsontype: ${String(j._bsontype)}`);
			} else if (P === "function" && q) F = f5($, X, j, F);
		}
	}

	(W.delete(Q), $[F++] = 0);

	let H = F - Y;

	return (Y += b.setInt32LE($, Y, H), F);
}

function $q($) {
	return $ != null && typeof $ === "object" && "_bsontype" in $ && typeof $._bsontype === "string";
}

var Qq = {
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

function WG($, Q = {}) {
	if (typeof $ === "number") {
		let Y = $ <= D6 && $ >= L6, Z = $ <= f7 && $ >= l7;

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
		let Z = Qq[J[Y]];

		if (Z) return Z.fromExtendedJSON($, Q);
	}

	if ($.$date != null) {
		let Y = $.$date, Z = new Date();

		if (Q.legacy) if (typeof Y === "number") Z.setTime(Y); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new l1(`Unrecognized type for EJSON date: ${typeof Y}`); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (V.isLong(Y)) Z.setTime(Y.toNumber()); else if (typeof Y === "number" && Q.relaxed) Z.setTime(Y); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new l1(`Unrecognized type for EJSON date: ${typeof Y}`);

		return Z;
	}

	if ($.$code != null) {
		let Y = Object.assign({}, $);

		if ($.$scope) Y.$scope = WG($.$scope);

		return p$.fromExtendedJSON($);
	}

	if (ZG($) || $.$dbPointer) {
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

function Jq($, Q) {
	return $.map((J, Y) => {
		Q.seenObjects.push({ propertyName: `index ${Y}`, obj: null });

		try {
			return k$(J, Q);
		} finally {
			Q.seenObjects.pop();
		}
	});
}

function b7($) {
	let Q = $.toISOString();

	return $.getUTCMilliseconds() !== 0 ? Q : Q.slice(0, -5) + "Z";
}

function k$($, Q) {
	if ($ instanceof Map || s5($)) {
		let J = Object.create(null);

		for (let [Y, Z] of $) {
			if (typeof Y !== "string") throw new k("Can only serialize maps with string keys");

			J[Y] = Z;
		}

		return k$(J, Q);
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

			throw new k(`Converting circular structure to EJSON:
    ${Z}${q}${K}${W}
    ${F}\\${H}/`);
		}

		Q.seenObjects[Q.seenObjects.length - 1].obj = $;
	}

	if (Array.isArray($)) return Jq($, Q);
	if ($ === void 0) return Q.ignoreUndefined ? void 0 : null;

	if ($ instanceof Date || N8($)) {
		let J = $.getTime(),
			Y = J > -1 && J < 253402318800000;

		if (Q.legacy) return Q.relaxed && Y ? { $date: $.getTime() } : { $date: b7($) };

		return Q.relaxed && Y
			? { $date: b7($) }
			: { $date: { $numberLong: $.getTime().toString() } };
	}

	if (typeof $ === "number" && (!Q.relaxed || !isFinite($))) {
		if (Number.isInteger($) && !Object.is($, -0)) {
			if ($ >= L6 && $ <= D6) return { $numberInt: $.toString() };
			if ($ >= l7 && $ <= f7) return { $numberLong: $.toString() };
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

	if ($ != null && typeof $ === "object") return Gq($, Q);

	return $;
}

var Yq = {
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

function Gq($, Q) {
	if ($ == null || typeof $ !== "object") throw new k("not an object instance");

	let J = $._bsontype;

	if (typeof J === "undefined") {
		let Y = {};

		for (let Z of Object.keys($)) {
			Q.seenObjects.push({ propertyName: Z, obj: null });

			try {
				let q = k$($[Z], Q);

				if (Z === "__proto__") Object.defineProperty(Y, Z, { value: q, writable: !0, enumerable: !0, configurable: !0 }); else Y[Z] = q;
			} finally {
				Q.seenObjects.pop();
			}
		}

		return Y;
	} else if ($ != null && typeof $ === "object" && typeof $._bsontype === "string" && $[S8] !== Z8) throw new q8(); else if ($q($)) {
		let Y = $;

		if (typeof Y.toExtendedJSON !== "function") {
			let Z = Yq[$._bsontype];

			if (!Z) throw new k("Unrecognized or invalid _bsontype: " + $._bsontype);

			Y = Z(Y);
		}

		if (J === "Code" && Y.scope) Y = new p$(Y.code, k$(Y.scope, Q)); else if (J === "DBRef" && Y.oid) Y = new C$(k$(Y.collection, Q), k$(Y.oid, Q), k$(Y.db, Q), k$(Y.fields, Q));

		return Y.toExtendedJSON(Q);
	} else throw new k("_bsontype must be a string, but was: " + typeof J);
}

function XG($, Q) {
	let J = {
		useBigInt64: Q?.useBigInt64 ?? !1,
		relaxed: Q?.relaxed ?? !0,
		legacy: Q?.legacy ?? !1
	};

	return JSON.parse($, (Y, Z) => {
		if (Y.indexOf("\x00") !== -1) throw new k(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(Y)}`);

		return WG(Z, J);
	});
}

function jG($, Q, J, Y) {
	if (J != null && typeof J === "object") (Y = J, J = 0);
	if (Q != null && typeof Q === "object" && !Array.isArray(Q)) (Y = Q, Q = void 0, J = 0);

	let Z = Object.assign({ relaxed: !0, legacy: !1 }, Y, { seenObjects: [{ propertyName: "(root)", obj: null }] }),
		q = k$($, Z);

	return JSON.stringify(q, Q, J);
}

function Zq($, Q) {
	return (Q = Q || {}, JSON.parse(jG($, Q)));
}

function qq($, Q) {
	return (Q = Q || {}, XG(JSON.stringify($), Q));
}

var g8 = Object.create(null);

g8.parse = XG;
g8.stringify = jG;
g8.serialize = Zq;
g8.deserialize = qq;
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

function Kq($, Q = 0) {
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

T6.parseToElements = Kq;
T6.ByteUtils = U;
T6.NumberUtils = b;
Object.freeze(T6);

var HG = 17825792, x$ = U.allocate(HG);

function Fq($) {
	if (x$.length < $) x$ = U.allocate($);
}

function Wq($, Q = {}) {
	let J = typeof Q.checkKeys === "boolean" ? Q.checkKeys : !1,
		Y = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
		Z = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0,
		q = typeof Q.minInternalBufferSize === "number" ? Q.minInternalBufferSize : HG;

	if (x$.length < q) x$ = U.allocate(q);

	let K = A6(x$, $, J, 0, 0, Y, Z, null),
		W = U.allocateUnsafe(K);

	return (W.set(x$.subarray(0, K), 0), W);
}

function Xq($, Q, J = {}) {
	let Y = typeof J.checkKeys === "boolean" ? J.checkKeys : !1,
		Z = typeof J.serializeFunctions === "boolean" ? J.serializeFunctions : !1,
		q = typeof J.ignoreUndefined === "boolean" ? J.ignoreUndefined : !0,
		K = typeof J.index === "number" ? J.index : 0,
		W = A6(x$, $, Y, 0, 0, Z, q, null);

	return (Q.set(x$.subarray(0, W), K), K + W - 1);
}

function jq($, Q = {}) {
	return FG(U.toLocalBufferType($), Q);
}

function Hq($, Q = {}) {
	Q = Q || {};

	let J = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
		Y = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0;

	return c1($, J, Y);
}

function Pq($, Q, J, Y, Z, q) {
	let K = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, q),
		W = U.toLocalBufferType($),
		F = Q;

	for (let H = 0; H < J; H++) {
		let X = b.getInt32LE(W, F);

		(K.index = F, Y[Z + H] = FG(W, K), F = F + X);
	}

	return F;
}

var W$ = Object.freeze({
	__proto__: null,
	BSONError: k,
	BSONOffsetError: K$,
	BSONRegExp: r0,
	BSONRuntimeError: l1,
	BSONSymbol: v8,
	BSONType: TZ,
	BSONValue: _0,
	BSONVersionError: q8,
	Binary: o,
	ByteUtils: U,
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
	UUID: I0,
	bsonType: G4,
	calculateObjectSize: Hq,
	deserialize: jq,
	deserializeStream: Pq,
	onDemand: T6,
	serialize: Wq,
	serializeWithBufferAndIndex: Xq,
	setInternalBufferSize: Fq
});

var K0,
	x8 = new Map(),
	E6 = !0,
	Z4 = 0,
	K4 = !1,
	F4 = !1;

function z6() {
	let $ = J0.url?.ws;

	(
		K0 = $
			? new WebSocket(`${$}${$.includes("?") ? "&" : "?"}v=${b4}`)
			: N.ws.$ws(),
		K0.binaryType = "arraybuffer",
		E6 = !0,
		K0.addEventListener("open", () => {
			(
				console.log("[WS] Connected"),
				K4 = !1,
				F4 = !1,
				Z4 = 0,
				BY(),
				zY(),
				U8()
			);
		}),

		K0.addEventListener("message", (Q) => {
			let J = W$.deserialize(Q.data);

			if ((P$ && console.debug("[WS] SERVER", J), x8.has(J.nonce))) {
				let Z = x8.get(J.nonce);

				(x8.delete(J.nonce), Z(J));
			}

			let Y = L5.get(J.op);

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
				(E6 = !1, eJ());

				return;
			}

			if (!E6 || document.hidden) return;
			if ((console.warn("[WS] Reconnecting..."), Q.code == 4004 && !W4)) m$();

			let J = Math.random() * 2000;

			if (Q.code == 4007) setTimeout(z6, 500 + J); else {
				Z4++;

				let Y = Math.min(5000 * Z4, 30000);

				setTimeout(z6, Y + J);
			}
		})
	);
}

function ZY($) {
	if ((E6 = !1, K0)) K0.close($);
}

var q4;

document.addEventListener("visibilitychange", () => {
	if ((clearTimeout(q4), q4 = null, document.hidden)) {
		q4 = setTimeout(
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

	if (E6 && (!K0 || K0.readyState == WebSocket.CLOSED)) z6();
});

function PG($ = {}) {
	if (!K0 || K0.readyState != WebSocket.OPEN) return (
		delete $.token,
		console.warn("Tried to send a packet while the connection is closed", $),
		!0
	);
}

var W4 = !1;

function U8() {
	if (K4 || !K0 || K0.readyState != WebSocket.OPEN) return;
	if (E$() && !(R.token && R.user)) return;

	(W4 = !0, sQ(2, { token: E$() ?? "viewer" }));
}

function R7() {
	(F4 = !0, A5());
}

function sQ($, Q) {
	if (PG(Q) || !K0) return !1;
	if ($ != 2 && !F4) return !1;
	if ($ == 2) (W4 = !1, K4 = !0);

	(
		P$ && console.debug("[WS] CLIENT", $, Q),
		K0.send(W$.serialize({ op: $, ...Q ?? {} }))
	);
}

function v$($, Q, J = 60000) {
	return new Promise((Y, Z) => {
		if (PG(Q) || !K0) return Z("Tried to send a packet while the connection is closed");

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

function P7($) {
	let Q = new Uint8Array($.length * 5),
		J = new DataView(Q.buffer),
		Y = 0;

	for (let Z of $) (J.setUint32(Y, Z[0], !0), J.setUint8(Y + 4, Z[1]), Y += 5);

	return v$(7, { pixels: Q });
}

function L7() {
	return v$(9, {}, 1e4);
}

function VG($) {
	return v$(10, $, 5000);
}

var u1 = 160;

function X4($) {
	let Q = $ % d, J = Math.floor($ / d);

	j4(Q, J);
}

function j4($, Q) {
	I6($ - u1 / 2, Q - u1 / 2, u1, u1);
}

async function f0($) {
	let { connId: Q, userId: J, fallbackPos: Y, username: Z } = $;

	if (Q !== void 0 && Q === R.connectionId) return (h$("That's you!"), !1);

	if (Q !== void 0) {
		let q = V0.get(Q);

		if (q && !q.partial && q.lastPos !== void 0) return (X4(q.lastPos), !0);
	}

	if (Y !== void 0) return (X4(Y), !0);

	if (Q !== void 0 || J !== void 0) try {
		let q = await VG({ connId: Q, userId: J });

		if (q.pos != null) return (X4(q.pos), !0);
	} catch {}

	return (
		h$(Z
			? `${Z} isn't on the wall right now.`
			: "That user isn't on the wall right now."),
		!1
	);
}

function RG() {
	let $ = G("div.list.mod-list"),
		Q = G("div.mod-status"),
		J = G("div.btn-container"),
		Y = null;

	async function Z(K) {
		if (K) (Y = null, $.replaceChildren(), J.replaceChildren());

		Q.replaceChildren("Loading...");

		let W = await IJ({ status: "open", cursor: Y ?? void 0, limit: 25 });

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
					if (!await e(S, A)) return;

					let D = await wJ(K.id, v, F.value.trim() || void 0);

					if (!D.ok) {
						W.replaceChildren(G("p.error.noicon", `${A} failed: ${await u(D)}`));

						return;
					}

					H.remove();
				}
			}),
			j = K.details.user_id,
			P = G("div.mod-flag-samples");

		if (typeof j == "number") (async () => {
			let A = await oJ(j);

			if (!A.ok) return;

			let { samples: v } = await A.json();

			if (!v.length) return;

			let S = v.map((M) => ({
				pixels: V1(new Uint8Array([...atob(M.pixels)].map((D) => D.charCodeAt(0)))),
				label: x0(M.createdAt)
			}));

			P.replaceChildren(G("span.desc", "flagged draws:"), ...S.map((M, D) => {
				let _ = M8(M.pixels);

				return (
					_.title = `${M.label} (click to expand)`,
					_.classList.add("mod-clickable-thumb"),
					_.addEventListener("click", () => rJ(S, D)),
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
									w$({ label: "Review Queue", reopen: () => s("review") })
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
			H.append(G("div.mod-review-head", G("b", K.kind), G("span.mod-tag", `x${K.hit_count}`), G("span.desc", E0(K.created_at))), z, P, G("div.details", X1(K.details)), G("div.input", F), G("div.mod-form-row", X("Dismiss", "dismiss", `Dismiss review item #${K.id}?`), X("Mark clean", "mark_clean", `Mark item #${K.id} clean?`), X("Ban", "ban", `Perma-ban the target of item #${K.id}?`)), W),
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

function MG() {
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

			if (!await e(g.broadcast.confirm, "Broadcast")) return;

			let W = await EJ(Z, q || void 0, !Y.checked);

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

var H4 = 10;

function zG($) {
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
			max: String(H4),
			step: "1",
			value: "0"
		}),
		Z = (K) => {
			if (K <= 0) return g.detection.off;

			let W = Math.round(zG(K) * 100);

			return u0(g.detection.current, K, H4, W);
		},
		q = () => {
			Q.replaceChildren(Z(Number(Y.value)));
		};

	return (
		Y.oninput = q,
		(async () => {
			let K = await fJ();

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
				let K = Number(Y.value), W = await lJ(K);

				if (!W.ok) {
					$.replaceChildren(G0(`Save failed: ${await u(W)}`));

					return;
				}

				$.replaceChildren(G("p.success.noicon", g.gwValSaved));
			}
		}))))
	);
}

var kG = 0,
	b$ = 0,
	w6 = !1,
	CG = 0,
	DG = 0,
	LG = 0,
	AG = 0,
	D$ = new Map(),
	Vq = 50,
	Rq = 24,
	Mq = 16;

function y0($, Q) {
	return [
		Math.max(Math.min(Math.floor(($ - L.rect.left) / L.rect.width * $0.width), $0.width), 0),
		Math.max(Math.min(Math.floor((Q - L.rect.top) / L.rect.height * $0.height), $0.height), 0)
	];
}

function zq($, Q) {
	let J = Date.now(),
		[Y, Z] = y0($, Q),
		{ points: q } = l4(CG, DG, Y, Z),
		K = $ - LG,
		W = Q - AG;

	if ((
		b$ += Math.sqrt(K * K + W * W) / (J - kG),
		kG = J,
		CG = Y,
		DG = Z,
		!w6
	)) {
		(w6 = !0, b$ = 5);

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
		let z = f4(P, C, Math.floor(H), X);

		for (let [A, v] of z) if (!M5(A, v) && b$ < j) Uq(A, v);
	}

	n0();
}

function Uq($, Q) {
	let J = D$.get($);

	if (J) J.y = Math.max(J.y, Q); else D$.set($, { y: Q, amount: 0, max: Math.random() * (R.brushSize * 1.5) });
	if (D$.size > Vq) D$.delete(D$.keys().next().value);
}

function kq() {
	if (!D$.size) return;

	let $ = [...D$.entries()],
		[Q, J] = $[Math.floor(Math.random() * $.length)];

	if ((M5(Q, ++J.y), ++J.amount >= J.max)) D$.delete(Q);
}

function TG() {
	(
		setInterval(
			() => {
				if (i0 && w6) kq();
			},
			Rq
		),

		setInterval(
			() => {
				if (i0) (zq(L$, A$), LG = L$, AG = A$); else if (w6) (D$.clear(), w6 = !1);
			},
			Mq
		)
	);
}

var EG = 4, o1 = !1;

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

function Cq($) {
	let Q = L.rect.width / $0.width,
		J = L.rect.height / $0.height;

	return {
		left: L.rect.left + $.x * Q,
		top: L.rect.top + $.y * J,
		width: $.width * Q,
		height: $.height * J
	};
}

function n1($) {
	if (o1) return;

	(o1 = !0, R.setTool(0), S$(0));

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
		let O = Cq(T);

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
		if (!o1) return;

		(
			o1 = !1,
			W.remove(),
			F?.remove(),
			z0.removeEventListener("pointerdown", _, !0),
			z0.removeEventListener("pointermove", w, !0),
			window.removeEventListener("pointerup", h, !0),
			document.removeEventListener("keydown", M, !0),
			z0.removeEventListener("contextmenu", D, !0),
			$.onClose?.()
		);
	}

	function M(T) {
		if (T.key === "Escape") (T.preventDefault(), T.stopPropagation(), S());
	}

	function D(T) {
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

	function w(T) {
		if (H && X) {
			(T.preventDefault(), T.stopPropagation(), $1(T.x, T.y));

			let [E, B] = y0(T.clientX, T.clientY);

			(
				j = IG(X[0], X[1], E, B, Q),
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
		z0.addEventListener("pointermove", w, !0),
		window.addEventListener("pointerup", h, !0),
		document.addEventListener("keydown", M, !0),
		z0.addEventListener("contextmenu", D, !0),
		f("main").after(W)
	);
}

var Dq = 500;

function m6() {
	if (!v0()) return;

	n1({
		label: "Tile Inspector",
		hint: g.inspect.hint,
		maxRegion: Dq,
		dimUnpainted: !0,
		onPick: ($, Q) => void Lq($, Q),
		onRegion: ($) => void Aq($.x, $.y, $.width, $.height)
	});
}

async function Lq($, Q) {
	let J = Q * d + $, Y = await yJ(J);

	if (!Y.ok) return new y("Tile inspector", G("div.modal", G0(await u(Y)), V$));

	wG(await Y.json(), $, Q);
}

function wG($, Q, J) {
	let Y = G("div.modal.mod-tile");

	if ((
		Y.append(G("div.mod-kv", h6("Position", `${Q}, ${J}`), h6("Placed", $.placed_at ? x0($.placed_at) : "unknown"))),
		!$.user
	)) return (
		Y.append(G("p.desc", g.inspect.none)),
		Y.append(G("div.btn-container", P4())),
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
						s("users", Z.id, { label: "Tile inspector", reopen: () => wG($, Q, J) });
					}
				}),
				P4()
			)
		),
		new y("Tile inspector", Y)
	);
}

async function Aq($, Q, J, Y) {
	let Z = await vJ($, Q, J, Y);

	if (!Z.ok) return new y("Area breakdown", G("div.modal", G0(await u(Z)), V$));

	hG(await Z.json());
}

function hG($) {
	let { region: Q, owned: J, total: Y, owners: Z } = $,
		q = G("div.modal.mod-region");

	if ((
		q.append(G("div.mod-kv", h6("Area", `${Q.width}×${Q.height} at ${Q.x},${Q.y}`), h6("Owned pixels", `${J} / ${Y}`), h6("Distinct owners", String(Z.length)))),
		!Z.length
	)) q.append(G("p.desc", "No owned pixels in this area.")); else q.append(G("div.list.mod-list", ...Z.map((K) => G(
		"div.item.box.outset.mod-region-row",
		{
			onclick() {
				if (K.user_id) s("users", K.user_id, { label: "Area breakdown", reopen: () => hG($) });
			}
		},
		G("b", K.username ?? `#${K.user_id}`),
		G("span.mod-row-meta", `${K.pixels} px`, G("span.desc", `${Math.round(K.pixels / J * 100)}%`))
	))));

	(
		q.append(G("div.btn-container", P4())),
		new y("Area breakdown", q)
	);
}

function P4() {
	return G("button.btn", "Close", {
		onclick() {
			(p(), m6());
		}
	});
}

function h6($, Q) {
	return G("div.mod-kv-row", G("span.mod-kv-label", $), G("span.mod-kv-value", Q));
}

function mG() {
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

		let F = await hJ(Z.value, Y);

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
					if (!await e(z, P)) return;

					let v = await mJ(W.id, C, H.value.trim() || void 0);

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

var Tq = 500;

function p8() {
	if (!v0()) return;

	n1({
		label: "Wipe Canvas Selection",
		hint: g.wipe.hint,
		maxRegion: Tq,
		dimUnpainted: !0,
		onRegion: async ($) => {
			if (!await e(`Clear a ${$.width}×${$.height} px area at (${$.x}, ${$.y})? This wipes those pixels for everyone (you can undo right after).`, "Wipe area", "Wipe", "Cancel")) return void p8();

			let J = await _J($);

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
	let J = await pJ($, Q);

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
				(vQ(), K.remove());
			}
		})
	);

	document.body.append(K);
}

function NG($, Q) {
	let J = G("div.list.mod-list.mod-ph-list"),
		Y = G("div.mod-ph-more"),
		Z = null,
		q = !1,
		K = [],
		W = new Map();

	async function F() {
		if (q) return;

		(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

		let C = await xJ($, Z ? { before: Z } : {});

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

		let v = A.map(() => yQ),
			S = await gJ(A.map((_) => _.pos));

		if (S.ok) {
			let { owners: _, deleted: w } = await S.json();

			v = _.map((h, T) => h === $ ? yQ : w?.[T] ? P1 : H1);
		}

		(p(), aJ(A, v));

		let M = Y6(A);

		I6(M.x, M.y, M.width, M.height);

		let D = C + 1 < K.length || !!Z;

		Iq({
			states: v,
			username: Q,
			position: `${C + 1} / ${K.length}${Z ? "+" : ""}`,
			onPrev: C > 0 ? () => void X(C - 1) : void 0,
			onNext: D ? () => void j(C) : void 0,
			onBack: () => {
				(
					vQ(),
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
			v = G("div.mod-ph-label", G("span", `${C.pixel_count} px`), G("span.desc", E0(C.created_at))),
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

				let D = Y6(M);

				if ((A.replaceChildren(M8(M)), D)) v.append(G("span.desc", `@ ${D.x},${D.y}`));
			})(),
			S
		);
	}

	return (F(), G("div.mod-ph", J, Y));
}

function wq($) {
	if ($ === null || !Number.isFinite($) || $ < 0) return null;

	let Q = $ % d, J = $ / d | 0;

	return `@ ${Q},${J}`;
}

function OG($, Q) {
	let J = G("div.list.mod-list.mod-ch-list"),
		Y = G("div.mod-ch-more"),
		Z = null,
		q = !1;

	function K(H) {
		f0({ fallbackPos: H }).then((X) => {
			if (!X) return;

			(p(), w$({ label: Q, reopen: () => s("users", $) }));
		});
	}

	async function W() {
		if (q) return;

		(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

		let H = await cJ($, Z ? { before: Z } : {});

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
		let X = wq(H.pos),
			j = X
				? G("button.btn.mod-ch-loc.mod-jump-loc", X, { dataset: { tooltip: g.jumpSent }, onclick: () => K(H.pos) })
				: "";

		return G("div.item.box.outset.mod-ch-row", G("div.mod-ch-text", H.content ?? ""), G("div.mod-ch-meta", G("span.desc", E0(H.timestamp)), j));
	}

	return (W(), G("div.mod-ch", J, Y));
}

var N6 = null;

async function hq() {
	if (N6) return N6;

	return (N6 = await (await N.cursor.data.$get()).json(), N6);
}

function V4($) {
	return N6?.find((Q) => Q.id === $)?.name ?? `#${$}`;
}

async function BG($ = {}) {
	let Q = await hq();

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
	mq = "rgba(8,8,12,0.66)",
	Nq = "rgba(255,56,56,0.5)",
	Oq = 2,
	Bq = 256;

function SG($) {
	let { ownedPositions: Q } = $,
		J = new Uint8Array(l$ + 7 >> 3);

	for (let I = 0; I < Q.length; I++) {
		let c = Q[I];

		J[c >> 3] |= 1 << (c & 7);
	}

	let Y = (I) => J[I >> 3] >> (I & 7) & 1,
		Z = G("canvas.mod-mask-layer", { width: X$, height: c8 }),
		q = G("canvas.mod-select-layer", { width: X$, height: c8 }),
		K = Z.getContext("2d"),
		W = q.getContext("2d");

	(K.fillStyle = mq, K.fillRect(0, 0, X$, c8));

	for (let I = 0; I < Q.length; I++) {
		let c = Q[I];

		K.clearRect(c % X$, c / X$ | 0, 1, 1);
	}

	(W.fillStyle = Nq, j$.append(Z, q));

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
		D = () => $.onChange?.(X.size);

	function _(I, c) {
		if (I < 0 || I >= X$ || c < 0 || c >= c8) return;

		let a = c * X$ + I;

		if (!Y(a) || X.has(a)) return;

		(X.add(a), W.fillRect(I, c, 1, 1));
	}

	function w(I, c) {
		let a = Math.max(1, P >> 1), U0 = a * a;

		for (let W0 = -a; W0 <= a; W0++) {
			let R0 = c + W0;

			if (R0 < 0 || R0 >= c8) continue;

			for (let k0 = -a; k0 <= a; k0++) {
				if (j === "circle" && k0 * k0 + W0 * W0 > U0) continue;

				_(I + k0, R0);
			}
		}
	}

	function h(I, c, a, U0) {
		let W0 = Math.hypot(a - I, U0 - c),
			R0 = Math.max(1, P >> 1),
			k0 = Math.max(1, Math.ceil(W0 / R0));

		for (let h0 = 1; h0 <= k0; h0++) w(Math.round(I + (a - I) * h0 / k0), Math.round(c + (U0 - c) * h0 / k0));
	}

	function T() {
		if (!S || !M) return;

		let I = Math.min(S[0], M[0]),
			c = Math.min(S[1], M[1]),
			a = Math.max(S[0], M[0]),
			U0 = Math.max(S[1], M[1]);

		for (let W0 = 0; W0 < Q.length; W0++) {
			let R0 = Q[W0], k0 = R0 % X$, h0 = R0 / X$ | 0;

			if (k0 >= I && k0 <= a && h0 >= c && h0 <= U0) _(k0, h0);
		}
	}

	function O() {
		return {
			b: L.rect,
			sx: L.rect.width / $0.width,
			sy: L.rect.height / $0.height
		};
	}

	function m() {
		if (!S || !M) {
			H.style.display = "none";

			return;
		}

		let { b: I, sx: c, sy: a } = O(),
			U0 = Math.min(S[0], M[0]),
			W0 = Math.min(S[1], M[1]),
			R0 = Math.abs(M[0] - S[0]) + 1,
			k0 = Math.abs(M[1] - S[1]) + 1;

		Object.assign(H.style, {
			display: "block",
			left: `${I.left + U0 * c}px`,
			top: `${I.top + W0 * a}px`,
			width: `${R0 * c}px`,
			height: `${k0 * a}px`
		});
	}

	function E(I, c) {
		if (j === "rect") {
			F.style.display = "none";

			return;
		}

		let { sx: a } = O(), U0 = Math.max(4, P * a);

		Object.assign(F.style, {
			display: "block",
			left: `${I}px`,
			top: `${c}px`,
			width: `${U0}px`,
			height: `${U0}px`,
			borderRadius: j === "circle" ? "50%" : "0"
		});
	}

	function B(I) {
		if (I.button !== 0) return;

		(I.preventDefault(), I.stopPropagation());

		let [c, a] = y0(I.clientX, I.clientY);

		if (j === "rect") (v = !0, S = [c, a], M = [c, a], m()); else (C = !0, z = c, A = a, w(c, a), D());
	}

	function n(I) {
		if (v) {
			(
				I.preventDefault(),
				I.stopPropagation(),
				M = y0(I.clientX, I.clientY),
				m()
			);

			return;
		}

		if (C) {
			(I.preventDefault(), I.stopPropagation());

			let [c, a] = y0(I.clientX, I.clientY);

			(h(z, A, c, a), z = c, A = a, D());

			return;
		}

		E(I.clientX, I.clientY);
	}

	function Q0(I) {
		if (v && I.button === 0) {
			(
				I.preventDefault(),
				I.stopPropagation(),
				v = !1,
				T(),
				H.style.display = "none",
				S = M = null,
				D()
			);

			return;
		}

		if (C && I.button === 0) (I.preventDefault(), I.stopPropagation(), C = !1);
	}

	function l(I) {
		if (I.key !== "Escape") return;
		if (document.querySelector(".modal-bg")) return;

		(I.preventDefault(), I.stopPropagation(), t(), $.onExit?.());
	}

	let i = (I) => I.preventDefault();

	(
		z0.addEventListener("mousedown", B, !0),
		window.addEventListener("mousemove", n, !0),
		window.addEventListener("mouseup", Q0, !0),
		document.addEventListener("keydown", l, !0),
		z0.addEventListener("contextmenu", i, !0)
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
			z0.removeEventListener("contextmenu", i, !0),
			Z.remove(),
			q.remove(),
			F.remove(),
			H.remove()
		);
	}

	return {
		setTool(I) {
			if ((j = I, I === "rect")) F.style.display = "none";
		},

		setBrushSize(I) {
			P = Math.max(Oq, Math.min(Bq, Math.round(I)));
		},

		clearSelection() {
			(X.clear(), W.clearRect(0, 0, X$, c8), D());
		},
		count: () => X.size,
		positions: () => [...X],
		destroy: t
	};
}

async function yG($, Q = 0) {
	let J = await kJ($, Q);

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

var vG = [
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
	_G = vG[0].tools[0];

async function gG($, Q, J) {
	if (!v0()) return;

	J("Loading this user's pixels…", !0);

	let Y;

	try {
		Y = await yG($);
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

	(p(), Sq($, Q, Y));
}

function Sq($, Q, J) {
	let Y = J,
		Z = G("span.mod-sel-count"),
		q = G("button.btn.mod-sel-delete", "Delete selected"),
		K = G("button.btn", "Clear selection"),
		W = G("span.mod-sel-sizeout", "24px"),
		F = G("input.mod-sel-size", { type: "range", min: "2", max: "256", value: "24" }),
		H = G("div.mod-sel-brush", G("span", "Brush"), F, W);

	H.style.display = "none";

	let X = _G.tool,
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
		let i = SG({
			ownedPositions: l.positions,
			onChange: (P0) => C(P0),
			onExit: () => A()
		});

		return (i.setTool(X), i.setBrushSize(j), i);
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

	let v = G("p.mod-sel-desc", g.wipe.tools[_G.tool]),
		S = [],
		M = vG.map(({ group: l, tools: i }) => {
			let P0 = i.map(({ tool: t, label: I }) => {
				let c = G("button.btn.mod-sel-tool", I);

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

	let D = G("p.mod-sel-warn"),
		_ = G("div.mod-range-track"),
		w = G("div.mod-range-thumb");

	_.append(w);

	let h = G("div.mod-range-label"),
		T = Y.truncated ? G("div.mod-range", D, _, h) : "",
		O = () => Math.max(0, Y.total - Y.cap);

	function m(l) {
		return Math.max(28, l * Math.min(1, Y.cap / Y.total));
	}

	function E(l) {
		let i = _.clientWidth || 260,
			P0 = m(i),
			t = Math.max(0, i - P0),
			I = O();

		(
			w.style.width = `${P0}px`,
			w.style.left = `${I === 0 ? 0 : t * (l / I)}px`
		);

		let c = Math.min(Y.total, l + Y.cap);

		h.textContent = `Viewing pixels ${(l + 1).toLocaleString()}–${c.toLocaleString()} of ${Y.total.toLocaleString()}`;
	}

	function B(l) {
		let i = _.clientWidth || 260,
			P0 = Math.max(0, i - m(i));

		return P0 === 0 ? 0 : Math.round(l / P0 * O());
	}

	if (T) {
		D.textContent = u0(g.wipe.warn, Y.total.toLocaleString(), Y.cap.toLocaleString());

		let l = !1, i = 0, P0 = 0;

		(
			w.onpointerdown = (I) => {
				(
					I.preventDefault(),
					l = !0,
					i = I.clientX,
					P0 = parseFloat(w.style.left || "0")
				);

				try {
					w.setPointerCapture(I.pointerId);
				} catch {}
			},

			w.onpointermove = (I) => {
				if (!l) return;

				let c = _.clientWidth || 260,
					a = Math.max(0, c - m(c)),
					U0 = Math.max(0, Math.min(a, P0 + (I.clientX - i)));

				w.style.left = `${U0}px`;

				let W0 = B(U0), R0 = Math.min(Y.total, W0 + Y.cap);

				h.textContent = `Viewing pixels ${(W0 + 1).toLocaleString()}–${R0.toLocaleString()} of ${Y.total.toLocaleString()}`;
			}
		);

		let t = (I) => {
			if (!l) return;

			l = !1;

			try {
				w.releasePointerCapture(I.pointerId);
			} catch {}

			n(B(parseFloat(w.style.left || "0")));
		};

		(
			w.onpointerup = t,
			w.onpointercancel = t,
			setTimeout(() => E(Y.offset), 0)
		);
	}

	async function n(l) {
		if (l === Y.offset) return;

		h.textContent = "Loading section…";

		let i = null;

		try {
			i = await yG($, l);
		} catch {}

		if (!i) {
			E(Y.offset);

			return;
		}

		(Y = i, P.destroy(), P = z(Y), C(0), E(Y.offset));
	}

	(
		q.onclick = async () => {
			let l = P.positions();

			if (!l.length) return;
			if (!await e(u0(g.wipe.confirm, l.length, Q), "Delete selected strokes", "Delete", "Cancel")) return;

			let P0 = await CJ($, l);

			if (!P0.ok) return Y0("Could not delete selected pixels", await u(P0));

			let { pixelsWiped: t, undoToken: I } = await P0.json();

			(
				P.destroy(),
				Q0.remove(),
				new y("Strokes deleted", G("div.modal", G("p", u0(g.wipe.removed, t, Q)), G("p.desc", g.snapshotDisplayNote), G(
					"div.btn-container",
					I ? j1(I) : "",
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

function R4($, Q) {
	let J = G("div.list", "Loading..."), Y = !1;

	new y("Moderation", G("div.clans-modal", Q && M4(Q), Y1($, !0), G(
		"details.clan-member-list.box",
		G("summary", "Members", {
			async onclick() {
				if (Y) return;

				Y = !0;

				let Z = await SJ($.id);

				if (!Z.ok) return (Y = !1, J.replaceChildren(G("p.error.noicon", await u(Z))));

				let q = await Z.json();

				J.replaceWith(G("div.list", q.map((K, W, F) => [
					G("a.link", K.username, {
						onclick() {
							s("users", K.id, { label: $.name, reopen: () => R4($, Q) });
						}
					}),
					W < F.length - 1 && ", "
				])));
			}
		}),
		J
	)));
}

var xG = 50, _q = ["user", "moderator", "admin"];

function z4($) {
	let Q = G("div.list.mod-list"),
		J = G("div.mod-detail"),
		Y = G("div.mod-status"),
		Z = "";

	async function q(M) {
		(Z = M, Y.replaceChildren("Searching..."));

		let D = await PJ(M);

		if (M != Z) return;

		if (!D.ok) {
			Y.replaceChildren(G0(await u(D)));

			return;
		}

		let { users: _ } = await D.json();

		(Y.replaceChildren(), K(_));
	}

	function K(M) {
		if (!M.length) {
			Q.replaceChildren(G("p.desc", "No users found."));

			return;
		}

		Q.replaceChildren(...M.map((D) => G(
			"div.item.box.outset.mod-row",
			{
				onclick() {
					W(D.id);
				}
			},
			G("b", D.username),
			G("span.mod-row-meta", `#${D.id}`, J6(D.role), D.ban && G("span.mod-tag.banned", "banned"), D.mute && G("span.mod-tag.muted", "muted"), Array.isArray(D.flagged) && G("span.mod-tag.flagged", D.flagged.length > 1 ? `flagged x${D.flagged.length}` : "flagged"))
		)));
	}

	async function W(M, D, _ = !1) {
		J.replaceChildren(G("p.desc", "Loading..."));

		let w = await VJ(M);

		if (!w.ok) {
			J.replaceChildren(G0(await u(w)));

			return;
		}

		let { user: h, cursors: T } = await w.json();

		if ((H(h, T, D), _ && h.username && v.value !== h.username)) (v.value = h.username, q(h.username));
	}

	function F(M, D, _) {
		M.replaceChildren(G(_ ? "p.success.noicon" : "p.error.noicon", D));
	}

	function H(M, D, _) {
		let w = M.id,
			h = G("div.mod-action-msg"),
			T = typeof M.ban == "object" ? M.ban : null,
			O = typeof M.mute == "object" ? M.mute : null,
			m = Array.isArray(M.flagged) ? M.flagged : null,
			E = !!M.excluded_from_leaderboard,
			B = (t) => W(w, t),
			n = (t) => {
				let I = G("button.btn.mod-undo", "Undo", {
					async onclick() {
						I.disabled = !0;

						let c = await t();

						if (!c.ok) {
							(I.disabled = !1, F(h, `Undo failed: ${await u(c)}`, !1));

							return;
						}

						await B({ text: "Reverted." });
					}
				});

				return I;
			};

		if (_) {
			if ((F(h, _.text, !0), _.undo)) h.append(n(_.undo));
		}

		let Q0 = (t, I, c) => {
				let a = G("input.box", { type: "text", placeholder: "Reason (optional)" }),
					U0 = G("select.box.outset", _Q.map((W0, R0) => G("option", W0.label, { value: String(R0), selected: R0 == 0 })));

				return G("div.mod-form-sanction", G("div.input", a), G("div.mod-form-row", U0, G("button.btn", t, {
					async onclick() {
						let W0 = _Q[Number(U0.value)],
							R0 = W0.seconds == null ? "permanently" : `for ${W0.label}`;

						if (!await e(`${t} ${M.username} ${R0}?`, `${t} user`)) return;

						let h0 = await I(a.value.trim(), W0.seconds ?? void 0);

						if (!h0.ok) {
							F(h, `${t} failed: ${await u(h0)}`, !1);

							return;
						}

						await B({ text: `${t} applied.`, undo: c });
					}
				})));
			},
			l = (t, I, c, a, U0) => G("button.btn", t, {
				async onclick() {
					if (!await e(I, t)) return;

					let R0 = await c();

					if (!R0.ok) {
						F(h, `${t} failed: ${await u(R0)}`, !1);

						return;
					}

					let k0 = "", h0;

					try {
						let XQ = await R0.clone().json();

						if (typeof XQ.pixelsCleared == "number") k0 = ` (${XQ.pixelsCleared} pixels cleared)`;

						h0 = XQ.undoToken;
					} catch {}

					await B({
						text: a + k0 + (U0 ? ` ${U0}` : ""),
						undo: h0 ? () => F1(h0) : void 0
					});
				}
			}),
			i = G("div.mod-sessions"),
			P0 = O6();

		J.replaceChildren(G(
			"div.mod-detail-inner",
			G(
				"div.mod-detail-head",
				G("h3.tooltip.mod-jump-name", M.username, {
					dataset: { tooltip: "Click to jump to this user's cursor" },
					async onclick() {
						if (await f0({ userId: w, username: M.username })) (p(), w$({ label: M.username, reopen: () => s("users", w) }));
					}
				}),
				J6(M.role),
				G("span.desc", `#${M.id}`)
			),
			G(
				"div.mod-kv",
				A("Created At", E0(M.created_at)),
				A("Country", o6(M.country_code || "")),
				A("Paint", `${Math.floor(M.paint / D0)} cans (${M.paint} px)`),
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
						R4(M.clan, { label: M.username, reopen: () => s("users", M.id) });
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
						s("review", void 0, { label: M.username, reopen: () => s("users", w) });
					}
				}))
				: G("p.desc", "Not flagged."),
			h,
			G("div.mod-section", G("b", "Ban"), T
				? l("Unban", `Unban ${M.username}?`, () => mQ(w), "User unbanned.")
				: Q0("Ban", (t, I) => MJ(w, t, I), () => mQ(w))),
			G("div.mod-section", G("b", "Mute"), O
				? l("Unmute", `Unmute ${M.username}?`, () => NQ(w), "User unmuted.")
				: Q0("Mute", (t, I) => zJ(w, t, I), () => NQ(w))),
			G(
				"div.mod-section",
				G("b", "Leaderboard"),
				E
					? G("p.warning.noicon", "Hidden from the leaderboard.")
					: G("p.desc.mod-hint", "Hides this user from the users board and from clan/country totals."),
				E
					? l("Show on leaderboard", `Show ${M.username} on the leaderboard again?`, () => OQ(w, !1), "User restored to the leaderboard.")
					: l("Hide from leaderboard", `Hide ${M.username} from the leaderboard?`, () => OQ(w, !0), "User hidden from the leaderboard.")
			),
			G("div.mod-section", G("b", "Strokes"), G("p.desc.mod-hint", g.user.delete.desc), G("div.mod-form-row", l("Delete All User's Strokes", u0(g.user.delete.confirm, M.username), () => UJ(w), "Deleted the user's strokes.", g.snapshotDisplayNote), G("button.btn", "Select Strokes to Delete...", {
				onclick() {
					gG(w, M.username, (t, I) => z(h, t, I));
				}
			}))),
			G("div.mod-section", G("b", "Paint history"), G("p.desc.mod-hint", g.user.draws), NG(M.id, M.username)),
			G("div.mod-section", G("b", "Chat history"), G("p.desc.mod-hint", g.user.messages), OG(M.id, M.username)),
			G("div.mod-section", G("b", "Paint"), j(M, h, B)),
			G("div.mod-section", G("b", "Cursors"), P(M, D, h, B)),
			G("div.mod-section", G("b", "Message"), X(M, h)),
			P0 && G("div.mod-section", G("b", "Role"), C(M, h, B)),
			P0 && G(
				"div.mod-section",
				G("b", "Sessions"),
				G("button.btn", "Load sessions", {
					async onclick() {
						i.replaceChildren(G("p.desc", "Loading..."));

						let t = await RJ(w);

						if (!t.ok) {
							i.replaceChildren(G0(await u(t)));

							return;
						}

						let I = await t.json();

						if (!I.length) {
							i.replaceChildren(G("p.desc", "No sessions."));

							return;
						}

						i.replaceChildren(G("div.list.mod-list", ...I.map((c) => G("div.item.box.outset.mod-session", G("span", `#${c.id}`), G("span", c.ip || "no ip"), G("span.desc", "seen ", E0(c.last_verified_at))))));
					}
				}),
				i
			)
		));
	}

	function X(M, D) {
		let _ = G("textarea.box", {
			placeholder: `Message to ${M.username}...`,
			rows: 2,
			maxLength: 1000
		});

		return G("div.mod-form", G("div.input", _), G("div.mod-form-row", G("button.btn", "Send message", {
			async onclick() {
				let w = _.value.trim();

				if (!w) {
					z(D, "Message can't be empty.", !1);

					return;
				}

				let h = await TJ(M.id, w);

				if (!h.ok) {
					z(D, `Message failed: ${await u(h)}`, !1);

					return;
				}

				(_.value = "", z(D, "Message sent.", !0));
			}
		})));
	}

	function j(M, D, _) {
		let w = G("input.box", { type: "number", min: "1", max: String(xG), value: "10" }),
			h = (T) => G("button.btn", `Reset ${T}`, {
				async onclick() {
					if (!await e(`Reset ${M.username}'s ${T}? (current: ${Math.floor(M[T])})`)) return;

					let m = await LJ(M.id, T);

					if (!m.ok) return z(D, await u(m), !1);

					await _({ text: `Reset ${T}.` });
				}
			});

		return G(
			"div.mod-form-row",
			w,
			G("button.btn", "Give Cans", {
				async onclick() {
					let T = Math.max(1, Math.min(xG, Math.floor(Number(w.value) || 0)));

					if ((
						w.value = String(T),
						!await e(`Give ${T} can${T > 1 ? "s" : ""} to ${M.username}?`, "Give cans")
					)) return;

					let m = await DJ(M.id, T);

					if (!m.ok) {
						z(D, `Give cans failed: ${await u(m)}`, !1);

						return;
					}

					await _({ text: `Gave ${T} can${T > 1 ? "s" : ""}.` });
				}
			}),
			h("paint"),
			h("coins")
		);
	}

	function P(M, D, _, w) {
		let h = D.length ? D.map((T) => V4(T)).join(", ") : "None unlocked.";

		return G("div", G("p.desc.mod-hint", `Unlocked: ${h}`), G("div.mod-form-row", G("button.btn", "Give a cursor...", {
			async onclick() {
				let T = await BG({ title: `Give a cursor to ${M.username}`, owned: D });

				if (T == null) return;

				let O = V4(T);

				if (!await e(`Give the "${O}" cursor to ${M.username}?`, "Give cursor")) return;

				let E = await AJ(M.id, T);

				if (!E.ok) {
					z(_, `Give cursor failed: ${await u(E)}`, !1);

					return;
				}

				let B = {};

				try {
					B = await E.clone().json();
				} catch {}

				await w({
					text: B.granted === !1
						? `${M.username} already has the "${O}" cursor.`
						: `Gave the "${O}" cursor.`
				});
			}
		})));
	}

	function C(M, D, _) {
		let w = M.role,
			h = G("select.box.outset", _q.map((T) => G("option", T, { value: T, selected: T == M.role })));

		return G("div.mod-form-row", h, G("button.btn", "Set role", {
			async onclick() {
				let T = h.value;

				if (T == M.role) return;

				if (!await e(`Change ${M.username}'s role to "${T}"?`, "Change role")) {
					h.value = M.role;

					return;
				}

				let m = await BQ(M.id, T);

				if (!m.ok) {
					(
						z(D, `Role change failed: ${await u(m)}`, !1),
						h.value = M.role
					);

					return;
				}

				await _({ text: `Role set to ${T}.`, undo: () => BQ(M.id, w) });
			}
		}));
	}

	function z(M, D, _) {
		M.replaceChildren(G(_ ? "p.success.noicon" : "p.error.noicon", D));
	}

	function A(M, D) {
		return G("div.mod-kv-row", G("span.mod-kv-label", M), G("span.mod-kv-value", D));
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

function pG($, Q, J) {
	if (Q == null) return G("span.mod-audit-actor", G("span.desc", `${$}: -`));

	return G(
		"span.mod-audit-actor",
		G("span.desc", `${$}:`),
		J
			? G("span.mod-jump-name.tooltip", J, {
				dataset: { tooltip: g.jumpTo },
				async onclick() {
					if (await f0({ userId: Q, username: J })) (p(), w$({ label: "Audit Log", reopen: () => s("audit") }));
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

function yq($) {
	let Q = G("div.mod-wipe-audit");

	if ($.thumbnail) {
		let Z = G("img.mod-wipe-thumb", {
			src: $.thumbnail,
			alt: "Cleared region",
			title: "Click to enlarge"
		});

		(
			Z.addEventListener("click", () => vq($.thumbnail)),
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

function vq($) {
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

function cG() {
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
			P = await bJ({
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
		let j = X.action === "wipe_canvas" ? yq(X.details) : G("div.details", X1(X.details));

		return G("div.item.box.outset.mod-audit", G("div.mod-audit-head", G("b", X.action), G("span.desc", E0(X.created_at))), G("div.mod-audit-meta", pG("mod", X.mod_id, X.mod_username), pG("target", X.target_id, X.target_username)), j);
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

var bG = ($) => ({
	onclick() {
		s("users", $, { label: "Referrals", reopen: () => s("referrals") });
	}
});

function fG() {
	let $ = G("div.list.mod-list"),
		Q = G("div.mod-status"),
		J = G("div.btn-container"),
		Y = 0;

	async function Z(K) {
		if (K) (Y = 0, $.replaceChildren(), J.replaceChildren());

		Q.replaceChildren("Loading...");

		let W = await OJ(Y);

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
				G("div.mod-review-head", G("b", K.code), !K.verified && G("span.mod-tag.flagged", "Not verified"), K.flagged && G("span.mod-tag.banned", "Flagged"), E0(K.created_at)),
				G("p.desc", "Created by ", G("a.link", K.username, bG(K.user_id)), ` (#${K.user_id}) · ${K.uses} uses`),
				G(
					"div.mod-form-row",
					G("button.btn", "List Users", {
						async onclick() {
							let H = await (await BJ(K.user_id)).json();

							W.replaceChildren(G("div.details.pre", !H.length && "None", H.map((X, j) => [
								G("span", G("a.link", X.username, bG(X.id)), " (", E0(X.created_at, new Date(X.created_at).toLocaleDateString()), ")"),
								j < H.length - 1 && "; "
							])));
						}
					}),
					!K.verified && G("button.btn", "Verify", {
						async onclick() {
							if (!await e(u0(g.referral.confirmVerify, K.username))) return;

							let X = await SQ(K.code, "verify");

							if (!X.ok) {
								W.replaceChildren(G("p.error.noicon", await u(X)));

								return;
							}

							(K.verified = !0, K.flagged = !1, F.replaceWith(q(K)));
						}
					}),
					G("button.btn", "Delete", {
						async onclick() {
							if (!await e(u0(g.referral.confirmDelete, K.username))) return;

							let X = await SQ(K.code, "delete");

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

function lG() {
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
			let q = await dJ();

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
				let q = Number(J.value), K = await uJ(q);

				if (!K.ok) {
					$.replaceChildren(G0(await u(K)));

					return;
				}

				$.replaceChildren(G("p.success.noicon", g.gwValSaved));
			}
		}))))
	);
}

var g = {}, U4 = !1;

async function oG() {
	if (U4 || !v0()) return;

	U4 = !0;

	let $ = await N.mod.locale.$get();

	if (!$.ok) return (U4 = !1, m0($, "Could not load mod locale"));

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

var gq = new Set(["review", "broadcast", "botconfig"]);

function dG($) {
	if ($ === "inspect") return (p(), m6(), !0);
	if ($ === "wipe") return (p(), p8(), !0);

	return !1;
}

function uG($) {
	switch ($) {
		case "users":
			return z4();

		case "review":
			return RG();

		case "audit":
			return cG();

		case "feedback":
			return mG();

		case "referrals":
			return fG();

		case "broadcast":
			return MG();

		case "botconfig":
			return UG();

		case "misc":
			return lG();

		case "inspect":

		case "wipe":
			throw new Error(`mod tool tab "${$}" has no panel`);
	}
}

function M4($) {
	return G("div.mod-back", G("button.btn.mod-back-btn", `↩ Back to ${$.label}`, {
		onclick() {
			$.reopen();
		}
	}));
}

async function nG($) {
	let Q = await N.mod.users.idFromName.$get({ query: { name: $ } });

	if (!Q.ok) return m0(Q, "Could not fetch user");

	let J = await Q.json();

	s("users", J.id);
}

function s($ = "users", Q, J) {
	if (!v0()) return;
	if ((Q6(), dG($))) return;

	let Y = G("div.pad.mod-body");

	if (J) Y.append(M4(J));

	Y.append($ === "users" ? z4(Q) : uG($));

	let Z = Object.keys(g.tabLabels).filter((X) => O6() || !gq.has(X)),
		q = t1(Z.map((X) => ({
			label: g.tabLabels[X],
			active: X == $,
			action() {
				if (dG(X)) return;

				(W(X), Y.replaceChildren(uG(X)));
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
			let X = await NJ();

			if (!X.ok) return;

			let { total: j } = await X.json();

			if (j > 0) H.append(G("span.mod-tab-dot.tooltip", {
				dataset: { tooltip: `${j} open feedback item${j === 1 ? "" : "s"}` }
			}));
		} catch {}
	})();

	new y("Moderation", G("div.mod-modal.nopad", q, Y));
}

var xq = ($) => Math.max(Math.min($ * 50 + 1500, 1e4), 2000);

function aG($, Q) {
	let J = $ ? b8 : B6;

	if ((J.prepend(Q), J.childElementCount >= 200)) J.children[200]?.remove();
}

function M7($, Q, J, Y, Z, q = !1, K) {
	let W = $ == R.connectionId,
		F = Y ?? R.user.username,
		H = G(
			"p.box",
			{
				ondblclick: () => k4(F),
				onclick: (j) => {
					if (j.shiftKey) k4(F);
				}
			},
			G(
				"b.tooltip",
				Z && G("b", H8(Z)),
				F,
				v0()
					? {
						dataset: { tooltip: "Click to open mod panel" },
						onclick: () => void nG(Y)
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

	aG(q, H);
}

function z7($) {
	for (let Q of [B6, b8]) o0(`p.box[data-uid="${$}"]`, Q).forEach((J) => J.remove());
}

function tG($, Q, ...J) {
	aG(Q, G("p.box.local", $ && { className: "error" }, G("span", J)));
}

function U7($, Q) {
	if (!$.element || x.a11y.hideChatBubbles) return;

	let J = G("p", Q);

	(
		$.element.querySelector(".chat-bubble")?.append(J),
		setTimeout(() => J.remove(), xq(Q.length))
	);
}

async function sG($, Q) {
	let J = await v$(6, { message: $, isGlobal: Q }, 5000);

	if ("error" in J) {
		let Y = J;

		if (Y.error == "muted") tG(!0, Q, `You are muted. (expires: ${n6(Y.until || null)})`); else if (Y.error == "chatCooldown") (
			a1(Y.until),
			tG(!0, Q, Y.until
				? "Global chat is on cooldown!"
				: "Global chat is disabled.")
		);
	}

	if (!J.message) return;
	if (J.cooldown !== void 0) a1(J.cooldown);

	$J(J.message);
}

function rG() {
	if (L.normalizedZoom <= K8) return (Y0("You need to zoom in to chat locally!"), !0);

	return !1;
}

var f8 = !1,
	B6 = G("div.list"),
	b8 = G("div.list"),
	iG = G("div.top-bar"),
	H6 = G("div.chat-log", iG, b8),
	C4 = !1,
	S6 = !1;

function I8() {
	(
		iG.replaceChildren(G("p#player-count", `${A0(R.onlinePlayers, "player")} online`), G(
			"div.box.tabs",
			G("button.btn.tooltip", "Local", f8 && { className: "active" }, {
				dataset: { tooltip: "Nearby Cursors Only" },
				onclick: () => {
					(C4 = !1, eG());
				}
			}),
			G("button.btn.tooltip", "Global", !f8 && { className: "active" }, {
				dataset: { tooltip: "All Online Users" },
				onclick: () => {
					(C4 = !0, $3());
				}
			}),
			G("button#pin-chat-btn.btn.tooltip", G("img", { src: "/static/icon/tool/pin.png", draggable: !1, alt: "Pin" }), S6 && { className: "primary" }, {
				onclick() {
					S6 = !S6;

					let $ = H6.parentElement;

					if (S6) $.style.setProperty("display", "block", "important"); else $.style.removeProperty("display");

					I8();
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

function eG() {
	if (rG()) return;

	(f8 = !0, b8.replaceWith(B6), I8());
}

function $3() {
	(f8 = !1, B6.replaceWith(b8), I8());
}

function Q3() {
	if (C4) return;
	if (L.normalizedZoom <= K8) $3(); else eG();
}

var _6 = 0;

function pq($) {
	if ($ === void 0) $ = 0;
	if ((_6 = $, !$)) return $;

	let Q = Math.round(($ - Date.now()) / 1000);

	if (Q <= 0) return (_6 = 0, 0);

	return (_6 = $, Q);
}

function a1($) {
	let Q = pq($), J = Q === null ? "inf" : `${Q}s`;

	o0("div.chat-input-box").forEach((Y) => {
		if (Q == 0) delete Y.dataset.cooldown; else Y.dataset.cooldown = J;
	});
}

setInterval(
	() => {
		if (_6) a1(_6);
	},
	500
);

var cq = /^can i ha[sz] cursor pl[zs]\??$/i;

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
						cq.test(K) && !x.flags.plzCursor
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

					(await sG(K, !f8), Y.value = "");
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

function W7() {
	return (
		I8(),
		G("div.input.chat-box.container", G("div.popup.box.outset.chat-log-wrapper", H6), Z5())
	);
}

function k4($, Q = !0) {
	let J = f("input#chat-input-field");

	if (!J) return;

	let Y = J.value, Z = Y && Y.at(-1) != " ";

	if ((J.value = `${Y}${Z ? " " : ""}${$} `.slice(0, d6), Q)) J.focus();
}

var O1 = 1.5,
	K8 = 0.8,
	$0 = G("canvas", { width: d, height: M0 }),
	J3 = "/static/brick-background.jpg",
	bq = "/static/brick-background-hi.webp",
	L4 = G("img.canvas-background", { src: J3, draggable: !1 }),
	H$ = null,
	y6 = !1,
	fq = 0.8;

function Y3() {
	if (H$ || x.a11y.lowQualityBg) return;

	(H$ = new Image(), H$.decoding = "async", H$.src = bq);
}

var G3 = window.requestIdleCallback ?? (($) => setTimeout($, 800));

G3(Y3);

function lq() {
	if (y6) return;
	if (L.zoom < fq) return;
	if (!H$ || !H$.complete || H$.naturalWidth === 0) return;

	(L4.src = H$.src, y6 = !0);
}

var Z3 = () => y6 || H$ || G3(Y3);

function q3() {
	if (!y6) return;

	(L4.src = J3, y6 = !1, H$ = null);
}

var u$ = G("div.paint-layers", j6, T1, $0),
	j$ = G("div.canvas-container", L4, u$),
	z0 = G("div.canvas-wrapper", j$),
	B$ = $0.getContext("2d", { willReadFrequently: !0 }),
	L = {
		x: 0,
		y: 0,
		zoom: 1,
		normalizedZoom: 1,
		rect: $0.getBoundingClientRect(),
		viewport: { x: 0, y: 0, x2: 0, y2: 0 }
	},
	dq = 1920;

function uq() {
	L.zoom = Math.max(L.zoom, l8());

	let $ = $0.width * L.zoom,
		Q = $0.height * L.zoom,
		J = window.innerWidth - $,
		Y = window.innerHeight - Q;

	(
		L.x = $ >= window.innerWidth
			? Math.min(Math.max(L.x, J), 0)
			: window.innerWidth / 2 - $ / 2,

		L.y = Q >= window.innerHeight
			? Math.min(Math.max(L.y, Y), 0)
			: window.innerHeight / 2 - Q / 2
	);
}

function N0() {
	if ((
		uq(),
		j$.style.setProperty("--zoom", L.zoom.toString()),
		j$.style.transform = `translate(${L.x}px, ${L.y}px) scale(${L.zoom})`,
		L.rect = $0.getBoundingClientRect(),
		j$.style.imageRendering = L.rect.width >= window.innerWidth && L.zoom > 1 ? "pixelated" : "optimizeQuality",
		L.normalizedZoom = L.zoom / (window.innerWidth / dq),
		Q3(),
		L.normalizedZoom <= K8
	)) document.body.classList.remove("cursors-visible"); else document.body.classList.add("cursors-visible");

	(
		cY({
			x: L.rect.left,
			y: L.rect.top,
			w: window.innerWidth,
			h: window.innerHeight,
			zoom: L.rect.width / $0.width
		}),
		lq(),
		L.viewport = bQ(),
		x.camera.zoom = L.zoom,
		x.camera.x = L.x,
		x.camera.y = L.y,
		T0()
	);
}

function l8() {
	return Math.max(window.innerWidth / $0.width, window.innerHeight / $0.height);
}

function K3() {
	if (x.camera.zoom != 0) {
		(
			L.zoom = x.camera.zoom,
			L.x = x.camera.x,
			L.y = x.camera.y,
			N0()
		);

		return;
	}

	(
		L.zoom = l8(),
		N0(),
		L.x = window.innerWidth / 2 - L.rect.width / 2,
		L.y = window.innerHeight / 2 - L.rect.height / 2,
		N0()
	);
}

function I6($, Q, J, Y, Z = 0.6) {
	let q = Math.min(window.innerWidth * Z / Math.max(J, 1), window.innerHeight * Z / Math.max(Y, 1)),
		K = Math.min(Math.max(q, l8()), 40);

	(L.zoom = K, N0());

	let W = L.rect.width / $0.width,
		F = L.rect.left + ($ + J / 2) * W,
		H = L.rect.top + (Q + Y / 2) * W;

	(
		L.x += window.innerWidth / 2 - F,
		L.y += window.innerHeight / 2 - H,
		N0()
	);
}

var D4 = !1;

async function F3($, Q, J = 60, Y = 160) {
	if (D4) return !1;

	D4 = !0;

	let Z = L.viewport.x2 - L.viewport.x,
		q = L.viewport.y2 - L.viewport.y,
		K = L.viewport.x + Z / 2,
		W = L.viewport.y + q / 2,
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
			I6(j - C / 2, P - z / 2, C, z, 1),
			await t6(16.666666666666668)
		);
	}

	return (D4 = !1, !0);
}

window.addEventListener("resize", N0);

function W3() {
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

			if (!await e(`Change your username to "${X}"?`, "Change Username", "Change", "Keep Current")) return;

			(J = !0, Z(""), q0(), Z0.lockLevel = 1);

			try {
				let P = await TQ({ username: X });

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

var oq = 300, nq = 1000, tq = J0.url.api;

async function A4($) {
	try {
		let Q = await fetch(tq + $, { cache: "no-store" });

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

function X3($) {
	if ($ == null) return "—";
	if ($ < 1024) return `${$} B`;
	if ($ < 1048576) return `${($ / 1024).toFixed(1)} KB`;

	return `${($ / 1024 / 1024).toFixed(1)} MB`;
}

function j3($) {
	if ($ == null) return "—";

	return $.toFixed(2) + "%";
}

function F8($, Q) {
	if ($ == null) return "—";

	return Q($);
}

var E4 = G("div.dev-overlay"),
	w0 = {
		active: !1,
		fps: 0,
		fpsFrameCount: 0,
		fpsWindowStart: performance.now(),
		wsState: "—",
		panel: E4
	};

function aq($) {
	return ({
		[WebSocket.CONNECTING]: "CONNECTING",
		[WebSocket.OPEN]: "OPEN",
		[WebSocket.CLOSING]: "CLOSING",
		[WebSocket.CLOSED]: "CLOSED"
	})[$] || "—";
}

function sq() {
	return `${~~(L.viewport.x2 - L.viewport.x)}x${~~(L.viewport.y2 - L.viewport.y)} px / ${a$.size} chunks`;
}

function rq() {
	let $ = performance.memory;

	if (!$) return "n/a";

	let Q = $.usedJSHeapSize ?? 0,
		J = $.totalJSHeapSize ?? 0;

	return `${X3(Q)} / ${X3(J)}`;
}

function P3() {
	if (!w0.active) return;

	w0.fpsFrameCount++;

	let $ = performance.now(),
		Q = $ - w0.fpsWindowStart;

	if (Q >= 1000) (
		w0.fps = Math.round(w0.fpsFrameCount * 1000 / Q),
		w0.fpsFrameCount = 0,
		w0.fpsWindowStart = $
	);

	requestAnimationFrame(P3);
}

function L0($, Q) {
	return G("div.dev-overlay-row", G("span.dev-overlay-label", $), G("span.dev-overlay-value", Q));
}

function s1($, ...Q) {
	return G("div.dev-overlay-section", G("div.dev-overlay-section-title", $), ...Q);
}

var T4, H3 = 0;

async function iq() {
	if (!P$) return "";

	if (!T4 || H3 < Date.now()) (
		H3 = Date.now() + nq,
		T4 = await Promise.all([
			A4("/metrics/loop-lag"),
			A4("/metrics/sendbulk"),
			A4("/metrics/canvas-density")
		])
	);

	let [$, Q, J] = T4;

	return s1("server", L0("loop lag p99 / max", `${F8($?.p99_ms, v6)} / ${F8($?.max_ms, v6)}`), L0("sendBulk last-10s cpu", F8(Q?.last_10s?.cpu_pct_of_window, j3)), L0("sendBulk p99 / max", `${F8(Q?.p99_call_ms, v6)} / ${F8(Q?.max?.call_ms, v6)}`), L0("sendBulk avg fanout", F8(Q?.avg_fanout, (Y) => Y.toFixed(0))), L0("canvas density", F8(J?.density_pct, j3)));
}

async function V3() {
	if (!w0.active) return;

	(
		setTimeout(V3, oq),
		w0.wsState = aq(K0?.readyState),
		w0.panel.replaceChildren(G("div.dev-overlay-title", "wall: dev"), await iq(), s1("ws", L0("state", w0.wsState), L0("connection id", String(R.connectionId)), L0("ping rtt", v6(R.debug.ping)), L0("identified", R.user ? "yes" : "no")), s1("client", L0("fps", String(w0.fps)), L0("memory (jsHeap)", rq()), L0("known users", String(V0.size)), L0("paint remaining", `${R.paintRemaining} (${Math.round(R.paintRemaining / D0)} cans)`)), s1("camera", L0("translation", `${L.x.toFixed(2)}, ${L.y.toFixed(2)}`), L0("zoom", `${L.zoom.toFixed(1)} client / ${L.normalizedZoom.toFixed(1)} normal`), L0("viewport", sq()), L0("cursor", `${R.cursorX}, ${R.cursorY}`)))
	);
}

function r1() {
	if (w0.active) return;

	(
		w0.active = !0,
		document.body.append(E4),
		requestAnimationFrame(P3),
		V3()
	);
}

function R3() {
	if (!w0.active) return;

	(E4.remove(), w0.active = !1);
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

function i1() {
	let $ = new y("Settings", G("div.settings-modal", G("h3", "Accessibility"), W8("darkTheme", "Dark Theme"), W8("lowQualityBg", "Low Quality Background", "Enable this if you're experiencing lag"), W8("hideNameplates", "Hide Nameplates", "Shows cursors, but removes names/chat bubbles"), W8("hideCursors", "Hide Other Cursors", "Completely hides all cursors on the canvas"), W8("systemCursor", "Use System Cursor", "Local only. Use this if you have issues with our custom cursor"), W8("hideChatBubbles", "Hide Chat Bubbles", "Do not show chat bubbles next to users. Chat is still available."), W8("devOverlay", "Stats For Nerds"), R.user && W3())),
		Q = $.titleElement.querySelector("button.icon");

	if (Q) Q.onclick = () => $.close(!0);

	return $;
}

function g6() {
	let $ = x.a11y;

	if ((
		$.hideOwnCursor = !!$.hideCursors,
		document.body.classList.toggle("dark", !!$.darkTheme),
		document.body.classList.toggle("hide-nameplates", !!$.hideNameplates),
		$.hideCursors
	)) n$.remove(); else j$.append(n$);

	if ($.systemCursor) s8(); else e6();
	if ($.lowQualityBg) q3(); else Z3();
	if ($.devOverlay) r1(); else R3();
}

var i0 = !1,
	L$ = 0,
	A$ = 0,
	M3 = [0, 2, 3, 4],
	x6 = !1,
	w4 = !1,
	eq = "1234567890";

document.body.addEventListener("keydown", ($) => {
	if (Z0 || $.target != document.body) return;

	if ((n8 ? $.metaKey : $.ctrlKey) && ($.key == "z" || $.key == "Z" || $.key == "y")) {
		if (($.preventDefault(), i0 = !1, $.key == "z")) g1(); else x1();

		return !1;
	} else if ($.key == "z" || $.key == "h") f("#tool-hand").click(); else if ($.key == "x" || $.key == "b") f("#tool-spray").click(); else if ($.key == "c") S1(); else if ($.key == "-") m4(1, 0.2); else if ($.key == "=") m4(-1, 0.2); else if ($.key == "m") f("#tool-preview").click(); else if ($.key == "k") (x.a11y.hideCursors = !x.a11y.hideCursors, g6(), T0()); else if ($.key == "t" || $.key == "Enter") setTimeout(
		() => {
			let J = f("#tool-chat");

			if (J.checkVisibility()) J.click(); else f(".chat-box input").focus();
		},
		10
	); else if (eq.includes($.key)) {
		let J = parseInt($.key) || 10;

		q7(J);
	} else if ($.key == "p") {
		let J = I1(...y0(L$, A$));

		if (J) Q8(J, !0);
	} else if ($K.has($.key.toLowerCase())) (i0 = !1, f$.add($.key.toLowerCase()), JK());
});

var $K = new Set(["w", "a", "s", "d"]),
	QK = 900,
	f$ = new Set(),
	$Q = null,
	h4 = 0;

function JK() {
	if ($Q != null) return;

	(h4 = performance.now(), $Q = requestAnimationFrame(k3));
}

function YK() {
	f$.clear();
}

function k3($) {
	if (Z0 || !f$.size) {
		$Q = null;

		return;
	}

	let Q = Math.min($ - h4, 100) / 1000;

	h4 = $;

	let J = QK * L.zoom * Q, Y = 0, Z = 0;

	if (f$.has("w")) Z += 1;
	if (f$.has("s")) Z -= 1;
	if (f$.has("a")) Y += 1;
	if (f$.has("d")) Y -= 1;

	if (Y || Z) {
		let q = Math.hypot(Y, Z);

		(L.x += Y / q * J, L.y += Z / q * J, N0());
	}

	$Q = requestAnimationFrame(k3);
}

document.body.addEventListener("keyup", ($) => {
	f$.delete($.key.toLowerCase());
});

window.addEventListener("blur", YK);

window.addEventListener("beforeunload", ($) => {
	if (z5()) return ($.preventDefault(), $.returnValue = !0, !1);
});

function z3($, Q) {
	if (R.activeTool != 1 || L.normalizedZoom < O1) return;
	if (R.openAt && Date.now() + R.clockOffset < R.openAt) return;
	if (R.paintRemaining + R.localPaintIncrement <= 0) return U5();

	(i0 = !0, L$ = $, A$ = Q);
}

function I4($, Q) {
	if (x6 || L.normalizedZoom < K8) return;
	if (x.a11y.hideOwnCursor) return;

	let [J, Y] = y0($, Q);

	(R.cursorX = J, R.cursorY = Y);
}

function U3($, Q) {
	(x6 = !0, L$ = $, A$ = Q);
}

function C3($, Q) {
	if (x6) (L.x += $ - L$, L.y += Q - A$, N0());

	(L$ = $, A$ = Q);
}

var D3 = 200;

function m4($, Q = 0.1) {
	let J = L.zoom,
		Y = L.zoom + Q * -Math.sign($) * L.zoom;

	(
		L.zoom = Math.max(Math.min(Y, D3), l8()),
		L3(L.zoom / J, L$, A$)
	);
}

function L3($, Q, J) {
	(
		i0 = !1,
		L.x = Q - (Q - L.x) * $,
		L.y = J - (J - L.y) * $,
		N0(),
		n0()
	);
}

function N4() {
	if (w4) {
		if (R.paintRemaining > 0) sY(); else m1();

		w4 = !1;
	}

	if (i0 && t0.length) V7();

	(x6 = !1, i0 = !1, e1 = null);
}

document.body.addEventListener("mousemove", ($) => C3($.x, $.y));

var e1 = null;

document.body.addEventListener("touchmove", ($) => {
	if ($.touches.length == 1) C3($.touches[0].clientX, $.touches[0].clientY); else if ($.touches.length == 2) {
		(
			$.preventDefault(),
			$.stopImmediatePropagation(),
			i0 = !1,
			x6 = !1
		);

		let Q = $.touches[0],
			J = $.touches[1],
			Y = Math.hypot(J.clientX - Q.clientX, J.clientY - Q.clientY);

		if (e1 != null) {
			let Z = Y / e1, q = L.zoom * Z;

			(
				L.zoom = Math.max(Math.min(q, D3), l8()),
				L3(Z, (Q.clientX + J.clientX) / 2, (Q.clientY + J.clientY) / 2)
			);
		}

		return (e1 = Y, !1);
	}
});

document.body.addEventListener("mouseup", N4);
document.body.addEventListener("touchend", N4);
document.body.addEventListener("touchcancel", N4);

function U5() {
	w4 = !0;
}

function A3() {
	(
		$0.addEventListener("mousedown", ($) => {
			if ($.button == 0) z3($.x, $.y);
		}),

		$0.addEventListener(
			"touchstart",
			($) => {
				if ($.touches.length == 1) z3($.touches[0].clientX, $.touches[0].clientY);
			},
			{ passive: !0 }
		),
		z0.addEventListener("mousemove", ($) => I4($.x, $.y)),
		z0.addEventListener(
			"touchmove",
			($) => {
				if ($.touches.length == 1) I4($.touches[0].clientX, $.touches[0].clientY); else if ($.touches.length == 2) $.preventDefault();
			},
			{ passive: !1 }
		),

		z0.addEventListener("mousedown", ($) => {
			if ($.button != 0 || M3.includes(R.activeTool)) U3($.x, $.y);
		}),

		z0.addEventListener(
			"touchstart",
			($) => {
				if ($.touches.length == 1 && M3.includes(R.activeTool)) {
					let Q = $.touches[0].clientX,
						J = $.touches[0].clientY;

					(I4(Q, J), U3(Q, J));
				} else if ($.touches.length == 2) $.preventDefault();
			},
			{ passive: !1 }
		),

		z0.addEventListener(
			"wheel",
			($) => {
				if ($.ctrlKey) $.preventDefault();

				(i0 = !1, m4($.deltaY, 0.1));
			},
			{ passive: !1 }
		),

		z0.addEventListener("dblclick", async ($) => {
			if (L.zoom > 1) return;

			let [Q, J] = y0($.x, $.y);

			F3(Q, J);
		})
	);
}

function T3() {
	(dY(), K3(), TG(), A3());
}

var I3 = Math.min(window.innerWidth, window.innerHeight) <= 800 && window.matchMedia("(pointer: coarse)").matches && document.fullscreenEnabled,
	GK = 25000000;

function ZK($, Q, J, Y, Z) {
	if (typeof Q != "string" || !Q?.length) return "Missing name";
	if (typeof J != "string" || !J?.length) return "Missing location";
	if ($ && $.length > 127) return "Identification is too long";
	if (Q.length > 255) return "Name is too long";
	if (J.length > 255) return "Location is too long";
	if (!Y || !Z) return "Missing file";
	if (!Y.startsWith("image/")) return "Invalid file type (expected an image)";
	if (Z > GK) return `File is too large (max 25MB; got ${Math.floor(Z / 1000 / 1000)}MB)`;
}

var d8 = -1;

function qK() {
	let $ = f("input#s__id").value,
		Q = f("input#s__name").value,
		J = f("input#s__location").value,
		Y = f("input#s__upload").files,
		Z = Y ? Y.item(0) : null,
		q = ZK($, Q, J, Z?.type, Z?.size);

	if (q) return (alert(q), !1);
}

function KK($) {
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

async function FK() {
	(d8 = 0, await Promise.all([WK(), w3()]));
}

var O4 = !1;

async function w3() {
	if (O4) return;

	O4 = !0;

	let $ = G("div.f", "Loading...");

	f(".sightings .posts").append($);

	let J = await (await fetch(`${J0.url.signalArchive}/fetch?tag=&after=${d8}&limit=${d8 ? 10 : 4}&at=${Date.now()}`)).json();

	if ((
		f(".sightings .posts").append(...J.map(KK)),
		d8 += J.length,
		$.remove(),
		O4 = !1,
		!J.length
	)) (
		f(".sightings .posts").append(G("div.f", d8 ? "You have reached the end." : "Nothing here yet...")),
		f(".sightings .more").style.display = "none"
	); else f(".sightings .more").style.display = "";
}

async function WK() {}

async function XK() {
	let $ = f(".preview"),
		Q = f("input#s__upload").files?.item(0);

	if (!Q) {
		$.hidden = !0;

		return;
	}

	let J = URL.createObjectURL(new Blob([await Q.arrayBuffer()]));

	($.hidden = !1, $.style.backgroundImage = `url(${J})`);
}

var h3 = G("div.info-container", G("div.window.winfo", G("div.title", G("p", "filian_is_lost.txt"), G("div.buttons", G("button.icon", G("img", { src: "/static/icon/archive/minimize.png", alt: "_" })), G("button.icon", G("img", { src: "/static/icon/archive/maximize.png", alt: "⌷" })), G("button.icon", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", G("h1", "FILIAN IS LOST."), G("p", "She went dark months ago. No posts. No streams. No signals. But we know she's listening. She always is."), G("p", G("b", "The Wall"), " is her frequency. Every mark you leave gets archived: a permanent record of everyone, everywhere, who showed up when she went quiet."), G("p", "Paint something. Make noise. Leave your mark in the archive."), G("p", "Bring her back.")))),
	YQ = G(
		"div.main",
		h3,
		G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " signal_archive.exe"), G("p", "Loading the signal archive...")),
		G("div.header", G("h1", "SIGNAL ARCHIVE"), G("p", "RECENTLY TRANSMITTED")),
		G("div.post-container", G("div.posts"), G("div.more", G("button", "LOAD MORE", { onclick: w3 }))),
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
				onchange: XK
			}),
			G(
				"div.buttons",
				G("input", {
					type: "submit",
					onclick: () => qK(),
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
	QQ = G("div.sightings", G("div.mobile-scroll-btn", { onclick: O3 }, G("button", G("img", { src: "/static/icon/arrow-down.png", draggable: !1 }))), YQ);

function m3($, Q) {
	let J = $ + Q;

	return J > 0 ? `${j0(J)} online` : "";
}

function E7($, Q) {
	let J = f("#wall-online-count");

	if (J) J.textContent = m3($, Q);
}

function N3($ = !1) {
	(
		sessionStorage.setItem("wall:view", $ ? "wall" : "archive"),
		document.body.append(QQ),
		YQ.inert = !0
	);

	let Q = f("main");

	if ((
		Q.prepend(G("div.modal-title.wall-title", G("span", G("h3", "the_wall.exe"), G("span.wall-online#wall-online-count", m3(R.onlinePlayers, R.onlineViewers))), G("button.btn", "Full Screen", { style: { color: "var(--text)" }, onclick: E3 }))),
		Q.addEventListener("mouseenter", jK),
		QQ.addEventListener("mouseenter", O3),
		!$
	)) B4(); else E3();
}

var JQ = !1;

function O3() {
	if (JQ) return;

	if ((
		JQ = !0,
		document.body.classList.remove("noscroll"),
		YQ.inert = !1,
		h3.scrollIntoView({ behavior: "smooth", block: "center" }),
		d8 < 0
	)) FK();
}

function jK() {
	if (!JQ) return;

	(
		JQ = !1,
		document.body.classList.add("noscroll"),
		f("main").scrollIntoView({ behavior: "smooth", block: "center" }),
		YQ.inert = !0
	);
}

function E3() {
	if ((
		sessionStorage.setItem("wall:view", "wall"),
		f("main").classList.remove("minimized"),
		QQ.style.display = "none",
		N0(),
		I3
	)) document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
}

function B4() {
	if ((
		f("main").classList.add("minimized"),
		sessionStorage.setItem("wall:view", "archive"),
		QQ.style.display = "",
		N0(),
		I3
	)) document.exitFullscreen().catch(() => {});
}

var S4 = G("div.actionbar", { role: "toolbar" });

function B3($) {
	let Q = G("button.abtn.btn.action", G1($.label), { ariaLabel: $.label.replace(/[\[\]]/g, "") });

	if ($.active) Q.classList.add("active");

	let J = () => {
		if (!$.menu) return;

		let Y = Q.getBoundingClientRect(),
			Z = typeof $.menu == "function" ? $.menu() : $.menu;

		HJ(Z, Y.x, Y.y + Y.height);
	};

	return (
		Q.onclick = () => {
			if (!hQ()) J();
			if ($.action) $.action();
		},

		Q.onmouseover = () => {
			if ($.action) I$();
			if (hQ()) J();
			if (document.activeElement) document.activeElement.blur();
		},
		Q
	);
}

function _4($) {
	S4.replaceChildren(...$.map(B3), G("div.right-side", G("b.fil", "FILIAN IS LOST"), G(
		"button.btn.icon.minimize-btn",
		{
			ariaLabel: "Minimize",
			onclick() {
				B4();
			}
		},
		G("img", { src: "/static/icon/close.png", draggable: !1 })
	)));
}

function t1($) {
	return G("div.navbar.custom", G("div.actionbar.custom", $.map(B3)));
}

var e0 = null, p6 = null, GQ = "";

function HK($, Q, J) {
	if (!$) return;
	if (e0) ZQ();

	let Y = G("div#tooltip-text.tooltip-popup", { textContent: $, role: "tooltip" });

	(document.body.append(Y), e0 = Y, S3(Q, J));
}

function S3($, Q) {
	if (!e0) return;

	let J = e0.getBoundingClientRect(),
		Y = $ + J.width > window.innerWidth ? window.innerWidth - J.width : $,
		Z = Q + J.height > window.innerHeight ? window.innerHeight - J.height : Q;

	(e0.style.left = `${Y}px`, e0.style.top = `${Z}px`);
}

function ZQ() {
	if (!e0) return;
	if (p6) p6.removeAttribute("aria-describedby");

	(e0.remove(), e0 = null, p6 = null, GQ = "");
}

function qQ($, Q, J) {
	if (!$.classList || !$.classList.contains("tooltip")) return;

	let Y = $.dataset.tooltip;

	if (!Y) return;

	let Z = typeof Q == "number" && typeof J == "number";

	if (!Z) {
		let q = $.getBoundingClientRect();

		(Q = q.x, J = q.y);
	}

	if (e0) {
		if (p6 != $) return (ZQ(), qQ($, Q, J));
		if (GQ != Y) (e0.textContent = Y, GQ = Y);
		if (Z) S3(Q, J);

		return;
	}

	(
		HK(Y, Q, J),
		p6 = $,
		GQ = Y,
		$.setAttribute("aria-describedby", "tooltip-text")
	);
}

document.addEventListener("mouseover", ($) => qQ($.target, $.x, $.y));
document.addEventListener("mousemove", ($) => qQ($.target, $.x, $.y));
document.addEventListener("focusin", ($) => qQ($.target));
window.addEventListener("mouseout", ZQ);
window.addEventListener("click", ZQ);

var _3 = {
		stat_pixels_changed: "Pixels Changed",
		stat_paint_visible: "Paint Visible",
		stat_member_count: "User Count"
	},
	y4 = { users: "Users", clans: "Clans", countries: "Countries" },
	v4 = {
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

var PK = {
		users: "You're",
		clans: "Your clan is",
		countries: "Your country is"
	},
	VK = {
		stat_member_count: j0,
		stat_pixels_changed: j0,
		stat_paint_visible: u6
	},
	RK = {
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
		t1(Object.keys(y4).map((q) => ({
			label: y4[q],
			active: q == $,
			action() {
				c6(q, v4[q][0]);
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
				v4[$].map((q) => G("option", _3[q], { value: q, selected: Q == q }))
			),
			typeof Z.position == "number" && Z.ownValue !== 0 && G("p.desc", `${PK[$]} #${j0(Z.position + 1)}!`),
			G("div.list", Z.leaderboard.map((q, K) => G("div.item.box.outset", G("div.box", `${K + 1 + J * 10}`), RK[$](q, VK[Q](q.value))))),
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

function y3() {
	c6("users", "stat_paint_visible", 0);
}

function KQ($, Q) {
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

var FQ = [
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
				KQ("/static/img/tutorial_cursors.png", "An image of three cursors chatting on the canvas")
			]
		},

		{
			name: "Drawing",
			title: "Drawing Mechanic",
			content: [
				G("p", "The paint mechanic works like real spray paint: move fast to make thin lines, move slowly and the paint starts dripping."),
				KQ("/static/img/tutorial_drawing.png", "An image of the spray can mechanic in-action"),
				G("p", "When you draw, your changes are only visible to you. You can undo, redo, and edit freely without affecting others."),
				G("p", "Click ", G("span.box.inline", "Submit"), " in the toolbar to publish your drawing so everyone can see it instantly!")
			]
		},

		{
			name: "Spray Cans",
			content: [
				G("p", "Each user starts with a set number of spray cans for drawing on the canvas. Every spray can contains the same amount of paint."),
				KQ("/static/img/tutorial_spray_cans.png", "An image of the spray paint bar on the toolbar, with the amount of extra spray cans to the right of it"),
				G("p", G("b", "Drawing consumes paint!"), " When one spray can runs out, the next one is used automatically.", " If you use all your spray cans, a few minute timer starts, after which your paint gets refilled."),
				G("p", "You can also earn extra paint by inviting your friends to ", G("b", "The Wall"), "! ", G("br"), "Go to ", G("span.box.inline", "User > Share Webiste"), " in the action bar to get your own personalized link!")
			]
		},

		{
			name: "Toolbar",
			content: [
				KQ("/static/img/tutorial_hotbar.png", "An image of the website's toolbar, containing text and arrows describing each component"),
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
	v3 = FQ.length - 1;

function u8($ = 0) {
	let Q = FQ[$],
		J = FQ[$ - 1],
		Y = FQ[$ + 1],
		Z = $ + 1,
		q = Z <= v3 ? `Guidebook [${Z}/${v3}]` : "Guidebook";

	if (!x.seenGuidebook) (x.seenGuidebook = !0, T0());

	new y(q, G("div.info.tutorial", G("h3", Q.title || Q.name), Q.content, G("div.btn-container", J && G("a.link.prev", `<< ${J.name}`, { onclick: () => u8($ - 1) }), G("a.link.next", `${Y?.name || "Continue"} >>`, { onclick: () => Y ? u8($ + 1) : p() })))).onClose(() => {
		if (!Y) y$({ code: "READ_GUIDEBOOK" });
	});
}

function g3() {
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

var x3 = 0;

function MK() {
	return new y("Feedback", G("div.feedback", G("div.success", "Thank you for your feedback!")));
}

function p3() {
	if (!R.user) {
		Y0("You need to be signed in to send feedback!");

		return;
	}

	let $ = Date.now();

	if (x3 + 60000 > $) return Y0("Please wait a minute before submitting feedback again.");

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

				(x3 = $, MK());
			}
		}))
	));
}

var WQ = [
	{
		label: "[S]ocial",
		shortcut: "S",
		menu: [
			{ label: "[O]nline Users", action: () => k7() },
			{ label: "[L]eaderboard", action: () => y3() }
		]
	},

	{
		label: "[H]elp",
		shortcut: "H",
		menu: [
			{ label: "[G]uidebook", action: () => u8() },
			{ label: "[K]eybinds", action: () => g3() },
			{ label: "[F]eedback / Bug Reporting", action: () => p3() },
			{
				label: "[P]rivacy Policy & ToS",
				action: () => {
					window.open("/privacy.html", "_blank");
				}
			}
		]
	}
];

var c3 = [
	{
		label: "[L]og In",
		shortcut: "L",
		action() {
			o$();
		}
	},
	{ label: "[S]ettings", shortcut: "S", action: i1 },
	...WQ
];

var b3 = () => [
	{
		label: "[U]ser",
		shortcut: "U",
		menu: [
			{ label: `Hi, ${R.user?.username}!` },
			{},
			{ label: "[S]ettings", shortcut: "S", action: i1 },
			{ label: "[C]lan Settings", shortcut: "C", action: $6 },
			{ label: "Cursor [I]nventory", shortcut: "I", action: T8 },
			{ label: "Share [W]ebsite", shortcut: "W", action: P6 },
			{},
			{
				label: "[L]ogout",
				shortcut: "l",
				async action() {
					if (await e("Are you sure you want to log out?")) KY();
				}
			}
		]
	},

	{
		label: "[A]ction",
		shortcut: "A",
		menu: [
			{ label: "[U]ndo", keybindText: `${MQ}+Z`, action: () => g1() },
			{
				label: "[R]edo",
				keybindText: `${MQ}+${n8 ? "Shift+Z" : "Y"}`,
				action: () => x1()
			}
		]
	},
	...WQ,
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

var f3 = G("div.hotbar.login-bar", G(
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

function l3($ = !1) {
	let Q = new URL(location.toString()),
		J = new URLSearchParams(location.search);

	if (J.size) if ((Q.search = "", $)) window.history.replaceState(null, "", Q.toString()); else window.history.pushState(null, "", Q.toString());

	return J;
}

var zK = "G-XXXXXXXXXX", d3 = !1;

function u3() {
	let $ = J0.gaMeasurementId;

	if (d3 || !$ || $ === zK) return;

	let Q = location.hostname;

	if (Q === "localhost" || Q === "127.0.0.1") return;

	(
		d3 = !0,
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

function o3() {
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

			for (let Y of J.changes) L8(Y.pos, Y.color);
		},

		Q.src = N.canvas.snapshot.png.$url({
			query: { at: Math.floor(Date.now() / J0.canvas.snapshotInterval) }
		}).toString()
	);
}

var n3 = "";

function kK() {
	let $ = L.viewport.x2 - L.viewport.x,
		Q = L.viewport.y2 - L.viewport.y,
		J = Math.floor(L.viewport.x + $ / 2),
		Y = Math.floor(L.viewport.y + Q / 2),
		Z = `#${J},${Y}`;

	if (Z != n3) history.replaceState(null, "", Z);

	n3 = Z;
}

function CK() {
	if (!location.hash) return;

	let [$, Q] = location.hash.slice(1).split(",").map(Number);

	if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q)) return;
	if ($ < 0 || Q < 0 || $ >= d || Q >= M0) return;

	j4($, Q);
}

function t3() {
	(CK(), setInterval(kK, 1000));
}

var a3 = [
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

	if ($.key == a3[b6]) {
		if ((b6++, b6 >= a3.length)) {
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

u3();
T7();

window.addEventListener("load", async () => {
	let $ = l3(!0);

	if ((
		u$.append($8),
		j$.append(n$),
		document.body.append(T$, G("main", S4, z0, R5)),
		T3(),
		o3(),
		g6(),
		t3(),
		await qY(),
		R.user
	)) {
		if ((_4(b3()), U8(), Z$.seed(R.user), F7(), !x.seenGuidebook)) setTimeout(u8, 1000);
		if (v0()) oG();
	} else if ((R.setTool(3), _4(c3), v1(f3), m$(), U8(), $.has("ssu"))) YY($.get("ssu"));

	let Q = $.has("wall") || sessionStorage.getItem("wall:view") === "wall";

	if ((N3(Q), $.has("debug"))) r1();
});