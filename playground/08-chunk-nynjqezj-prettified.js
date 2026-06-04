(() => {
	var {
			defineProperty: QJ,
			getOwnPropertyNames: hG,
			getOwnPropertyDescriptor: mG
		} = Object,
		NG = Object.prototype.hasOwnProperty;

	var JJ = new WeakMap(),
		BG = ($) => {
			var Q = JJ.get($), J;

			if (Q) return Q;

			if ((
				Q = QJ({}, "__esModule", { value: !0 }),
				$ && typeof $ === "object" || typeof $ === "function"
			)) hG($).map((Y) => !NG.call(Q, Y) && QJ(Q, Y, { get: () => $[Y], enumerable: !(J = mG($, Y)) || J.enumerable }));

			return (JJ.set($, Q), Q);
		};

	var OG = ($, Q) => () => (($ && (Q = $($ = 0)), Q));
	var SG = {};
	var w5 = "", h5 = "";

	var YJ = OG(() => {
		(async function $() {
			let J = await (await fetch("/.last-bundle")).text(),
				[Y, Z] = J.split(",");

			if (w5 && w5 != Y) location.reload(); else if (h5 && h5 != Z) {
				let K = (await (await fetch("/")).text()).match(/href="(\.\/chunk-[a-z\d]+.css)"/)?.[1],
					W = document.querySelector("link[rel=stylesheet]");

				if (!K || !W) return (
					console.error("Couldn't reload stylesheet without reloading..."),
					location.reload()
				);

				W.href = `${K}?at=${Date.now()}`;
			}

			(w5 = Y, h5 = Z, setTimeout($, 1000));
		})();
	});

	var u = ($, Q) => (Q ?? document).querySelector($),
		s0 = ($, Q) => (Q ?? document).querySelectorAll($),
		$6 = ($) => new Promise((Q) => setTimeout(Q, $)),
		Q1 = window.scheduler?.yield ?? (() => new Promise(($) => setTimeout($, 0))),
		GJ = ($, Q) => {
			for (let J in $) {
				let Y = $[J];

				if (typeof Y == "object" && !Array.isArray(Y) && J in Q) GJ(Y, Q[J]); else if (J.startsWith("data-") && Q.setAttribute) Q.setAttribute(J, Y); else if (J.startsWith("--") && Q.setProperty) Q.setProperty(J, Y); else if (J == "className" && Q.classList) Q.classList.add(Y); else Q[J] = Y;
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
			if (K instanceof HTMLElement || typeof K == "string") q.append(K); else if (typeof K == "number") q.append(String(K)); else if (typeof K == "object") GJ(K, q);
		}

		return q;
	}

	var M$ = !1;

	if (M$) YJ();

	function ZJ($) {
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

	function m5($) {
		if (!navigator.clipboard) return ZJ($);

		navigator.clipboard.writeText($).catch((Q) => {
			(console.error(Q), ZJ($));
		});
	}

	var G$ = ($, Q) => G("button.btn.icon", Q, G("img", {
			src: `/static/icon/${$}.png`,
			alt: `${$} icon`,
			style: { pointerEvents: "none" },
			draggable: !1
		})),
		Q6 = ($) => $.split(/(\[.\])/).map((Q, J) => J % 2 ? G("u", Q.slice(1, -1)) : Q),
		N5 = ($, Q, J, Y, Z) => G(
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
		J6 = ($, Q) => G(
			"button.btn.swatch.icon",
			G("img", {
				alt: `${$} icon`,
				src: `/static/icon/${$}.png`,
				draggable: !1
			}),
			Q
		),
		Y6 = ($, Q) => {
			return ($.dataset.tooltip = Q, $.classList.add("tooltip"), $);
		};

	var qJ = ($, Q = 2) => {
		let J = 10 ** Q, Y = Math.floor($ % 1 * J);

		return [
			G("span", Math.floor($).toString()),
			Y >= 0 && G("span", { style: { fontSize: "0.6em" } }, `.${Y}`.replace(/0+$/, ""))
		];
	};

	var B5 = !1,
		Z$ = { options: [] },
		O5 = () => !!Z$.element;

	function w$() {
		if (!Z$.element || B5) return;

		(
			Z$.options = [],
			Z$.element.remove(),
			Z$.element = void 0,
			s0(".ctx").forEach(($) => $.remove())
		);
	}

	function KJ($, Q, J) {
		w$();

		let Y = G("div.ctx");

		(Z$.element = Y, Z$.options = []);

		for (let W of $) {
			if (!W.label) {
				Y.append(G("hr"));

				continue;
			}

			let F = G("div.option", G("span", Q6(W.label)), W.keybindText && G("span", W.keybindText), {
				ariaLabel: W.label.replace(/[\[\]]/g, ""),
				onclick(H) {
					if ((w$(), W.action)) W.action(H);
				}
			});

			(Y.append(F), Z$.options.push({ ...W, _element: F }));
		}

		document.body.append(Y);

		let Z = Y.getBoundingClientRect(),
			q = Q + Z.width > window.innerWidth ? window.innerWidth - Z.width : Q,
			K = J + Z.height > window.innerHeight ? window.innerHeight - Z.height : J;

		(
			Y.style.left = `${q}px`,
			Y.style.top = `${K}px`,
			Z$.x = q,
			Z$.y = K,
			B5 = !0,
			setTimeout(() => B5 = !1)
		);
	}

	window.addEventListener("click", w$);
	window.addEventListener("resize", w$);
	window.addEventListener("blur", w$);

	window.addEventListener("contextmenu", ($) => {
		($.preventDefault(), w$());
	});

	var Z0 = [
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
		S5 = new Map();

	for (let $ = 0; $ < Z0.length; $++) {
		let Q = Z0[$];

		(
			Q.idx = $,
			Q.color = parseInt(Q.hex.slice(1), 16),
			Q.opaqueHex = Q.hex + "7f",
			S5.set(Q.color, $)
		);
	}

	var FJ = 30000, WJ = 15000;
	var jJ = 1, L0 = 100;

	var D8 = 60,
		g0 = 42,
		f = 6000,
		k0 = 4200,
		i$ = 25200000;

	var G6 = 3615,
		_5 = 24,
		C0 = 1000,
		y5 = Math.floor(100),
		J1 = { SignUp: 2000, TimePassed: 1000, ReferralCode: 1000 };

	var Z6 = 4000, q6 = 80;

	function r0($, ...Q) {
		return $.replace(/{(\d)+}/g, (J, Y) => Q[parseInt(Y)] || "[?]");
	}

	function X0($) {
		return new Intl.NumberFormat().format($);
	}

	function K6($) {
		let Q = ($ / i$ * 100).toFixed(2);

		return `${X0($)} (${Q}%)`;
	}

	function g5($) {
		return new Intl.DateTimeFormat(["en"], { timeZone: "UTC", minute: "numeric", second: "2-digit" }).format($);
	}

	function _G($) {
		return String.fromCodePoint(...$.toUpperCase().split("").map((Q) => 127397 + Q.charCodeAt(0)));
	}

	function F6($) {
		if ($.length != 2) return "-";

		try {
			let Q = new Intl.DisplayNames(["en"], { type: "region" }).of($);

			return `${_G($)} ${Q || $}`;
		} catch {
			return "Unknown";
		}
	}

	function XJ($) {
		if (Date.now() - $ < 86400000) return new Date($).toLocaleTimeString(); else return new Date($).toLocaleDateString();
	}

	function L8($) {
		let Q = Math.floor($ / C0);

		return `${Q} spray can${T0(Q)}`;
	}

	function T0($, Q) {
		let J = $ == 1 ? "" : "s";

		return Q ? `${X0($)} ${Q}${J}` : J;
	}

	var yG = /\s|\/|[A-Z].*[A-Z]/,
		vG = /[A-Z]{2,}(?=[A-Z][a-z]|$)|[A-Z]?[a-z]+|[A-Z]+|\d+/g;

	function gG($) {
		let Q = $.trim();

		if (Q.length <= 8 && !yG.test(Q)) return Q;

		let J = Q.replace(/'s\b/gi, "").match(vG) || [];

		if (J.length === 1) {
			let Y = J[0], Z = (/^[A-Z]+$/).test(Y) ? 6 : 8;

			return Y.length <= Z ? Y : Y[0];
		}

		return J.map((Y) => (/^\d+$/).test(Y) ? Y : Y[0]).join("");
	}

	function h$($) {
		return `[${gG($).slice(0, 6)}]`;
	}

	var v5 = ($) => Math.floor($ * 10) / 10;

	function W6($) {
		if ($ == null) return "never";

		let Q = $ - Date.now(),
			J = new Intl.RelativeTimeFormat(["en"], { numeric: "auto" }),
			Y = 60000,
			Z = 60 * Y,
			q = 24 * Z;

		if (Q < Z) return J.format(v5(Q / Y), "minute"); else if (Q < q) return J.format(v5(Q / Z), "hour");

		return J.format(v5(Q / q), "day");
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

	var j6 = null;

	function m$($) {
		(
			Y1(),
			j6 = G(
				"div.mod-return",
				G("button.btn.mod-return-go", `↩ Resume: ${$.label}`, {
					onclick() {
						(Y1(), $.reopen());
					}
				}),
				G("button.btn.mod-return-x", "✕", { ariaLabel: "Dismiss", onclick: () => Y1() })
			),
			document.body.append(j6)
		);
	}

	function Y1() {
		(j6?.remove(), j6 = null);
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
				F = G("div.modal-bg.confirm-bg", G("div.modal-container", G("div.modal-title", G("span", Q), G$("close", { ariaLabel: "Close", onclick: () => K(!1) })), G("div.modal-content", G("div.modal", G("p", $), G("div.btn-container", G("button.btn", J, { onclick: () => K(!0) }), G("button.btn", Y, { onclick: () => K(!1) }))))));

			(
				F.addEventListener("click", (H) => {
					if (H.target == F) K(!1);
				}),
				document.addEventListener("keydown", W, !0),
				document.body.append(F)
			);
		});
	}

	var K0 = null,
		X6 = "",
		e$ = G("button.btn", "Close", { onclick: p }),
		z$ = G("div.btn-container", e$);

	function p($ = !1) {
		if (!K0) return;
		if (!K0.close($)) return;

		K0 = null;
	}

	class _ {
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

			if (K0) p(!0);

			(
				this.titleElement.append(G("span", $), G$("close", { ariaLabel: "Close Modal", onclick: () => this.close() })),
				this.bg.append(this.container),
				this.container.append(this.titleElement, Q),
				Q.classList.add("modal-content"),
				u("main").inert = !0,
				document.body.append(this.bg),
				document.body.style.overflow = "hidden",
				X6 = $,
				K0 = this,
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
				K0 = null,
				X6 = "",
				document.body.style.overflow = "",
				u("main").inert = !1,
				!0
			);
		}
	}

	document.addEventListener("keydown", ($) => {
		if ($.key == "Escape" && K0) p();
	});

	var pG = /^[\w!#$%&'*.^`|~+-]+$/;

	var cG = ($, Q, J = {}) => {
			if (!pG.test($)) throw new Error("Invalid cookie name");

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
		HJ = ($, Q, J) => {
			return (Q = encodeURIComponent(Q), cG($, Q, J));
		};

	var PJ = ($, Q) => {
			return (
				$ = $.replace(/\/+$/, ""),
				$ = $ + "/",
				Q = Q.replace(/^\/+/, ""),
				$ + Q
			);
		},
		P6 = ($, Q) => {
			for (let [J, Y] of Object.entries(Q)) {
				let Z = new RegExp("/:" + J + "(?:{[^/]+})?\\??");

				$ = $.replace(Z, Y ? `/${Y}` : "");
			}

			return $;
		},
		VJ = ($) => {
			let Q = new URLSearchParams();

			for (let [J, Y] of Object.entries($)) {
				if (Y === void 0) continue;
				if (Array.isArray(Y)) for (let Z of Y) Q.append(J, Z); else Q.set(J, Y);
			}

			return Q;
		},
		RJ = ($, Q) => {
			switch (Q) {
				case "ws":
					return $.replace(/^http/, "ws");

				case "http":
					return $.replace(/^ws/, "http");
			}
		},
		x5 = ($) => {
			if ((/^https?:\/\/[^\/]+?\/index(?=\?|$)/).test($)) return $.replace(/\/index(?=\?|$)/, "/");

			return $.replace(/\/index(?=\?|$)/, "");
		};

	function H6($) {
		return typeof $ === "object" && $ !== null && !Array.isArray($);
	}

	function p5($, Q) {
		if (!H6($) && !H6(Q)) return Q;

		let J = { ...$ };

		for (let Y in Q) {
			let Z = Q[Y];

			if (H6(J[Y]) && H6(Z)) J[Y] = p5(J[Y], Z); else J[Y] = Z;
		}

		return J;
	}

	var MJ = ($, Q) => {
			return new Proxy(() => {}, {
				get(Y, Z) {
					if (typeof Z !== "string" || Z === "then") return;

					return MJ($, [...Q, Z]);
				},

				apply(Y, Z, q) {
					return $({ path: Q, args: q });
				}
			});
		},
		fG = class {
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
							if (Array.isArray(H)) for (let j of H) W.append(F, j); else W.append(F, H);
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

					for (let [F, H] of Object.entries($.cookie)) W.push(HJ(F, H, { path: "/" }));

					Y.Cookie = W.join(",");
				}

				if (this.cType) Y["Content-Type"] = this.cType;

				let Z = new Headers(Y ?? void 0), q = this.url;

				if ((q = x5(q), q = P6(q, this.pathParams), this.queryParams)) q = q + "?" + this.queryParams.toString();

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
		c5 = ($, Q) => MJ(
			function J(Y) {
				let Z = Q?.buildSearchParams ?? VJ,
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
					let X = q.pop();

					if (X) W = X.replace(/^\$/, "");
				}

				let F = q.join("/"), H = PJ($, F);

				if (W === "url" || W === "path") {
					let X = H;

					if (Y.args[0]) {
						if (Y.args[0].param) X = P6(H, Y.args[0].param);
						if (Y.args[0].query) X = X + "?" + Z(Y.args[0].query).toString();
					}

					if ((X = x5(X), W === "url")) return new URL(X);

					return X.slice($.replace(/\/+$/, "").length).replace(/^\/?/, "/");
				}

				if (W === "ws") {
					let X = RJ(Y.args[0] && Y.args[0].param ? P6(H, Y.args[0].param) : H, "ws"),
						P = new URL(X),
						k = Y.args[0]?.query;

					if (k) Object.entries(k).forEach(([A, v]) => {
						if (Array.isArray(v)) v.forEach((O) => P.searchParams.append(A, O)); else P.searchParams.set(A, v);
					});

					return ((...A) => {
						if (Q?.webSocket !== void 0 && typeof Q.webSocket === "function") return Q.webSocket(...A);

						return new WebSocket(...A);
					})(P.toString());
				}

				let j = new fG(H, W, { buildSearchParams: Z });

				if (W) {
					Q ??= {};

					let X = p5(Q, { ...Y.args[1] });

					return j.fetch(Y.args[0], X);
				}

				return j;
			},
			[]
		);

	var G1 = { "Content-Type": "application/json" },
		m = c5(J0.url.api, { init: { credentials: "same-origin", headers: G1 } }),
		N$ = () => localStorage.getItem("auth-token");

	function zJ($, Q = 25, J = 0) {
		return m.mod.users.$get({ query: { q: $, limit: String(Q), offset: String(J) } });
	}

	function UJ($) {
		return m.mod.users[":id"].$get({ param: { id: String($) } });
	}

	function kJ($) {
		return m.mod.users[":id"].sessions.$get({ param: { id: String($) } });
	}

	function DJ($, Q, J) {
		return m.mod.users[":id"].ban.$post({
			param: { id: String($) },
			json: {
				...Q ? { reason: Q } : {},
				...J ? { duration_seconds: J } : {}
			}
		});
	}

	function b5($) {
		return m.mod.users[":id"].unban.$post({ param: { id: String($) } });
	}

	function LJ($, Q, J) {
		return m.mod.users[":id"].mute.$post({
			param: { id: String($) },
			json: {
				...Q ? { reason: Q } : {},
				...J ? { duration_seconds: J } : {}
			}
		});
	}

	function f5($) {
		return m.mod.users[":id"].unmute.$post({ param: { id: String($) } });
	}

	function l5($, Q) {
		return m.mod.users[":id"]["leaderboard-exclusion"].$post({ param: { id: String($) }, json: { excluded: Q } });
	}

	function CJ($) {
		return m.mod.users[":id"]["delete-strokes"].$post({ param: { id: String($) } });
	}

	function AJ($, Q = 0) {
		return m.mod.users[":id"]["owned-pixels"].$get({ param: { id: String($) }, query: { offset: String(Q) } });
	}

	function TJ($, Q) {
		return m.mod.users[":id"]["delete-selected-strokes"].$post({ param: { id: String($) }, json: { positions: Q } });
	}

	function IJ($, Q) {
		return m.mod.users[":id"]["give-paint"].$post({ param: { id: String($) }, json: { amount: Q } });
	}

	function EJ($, Q) {
		return m.mod.users[":id"]["reset-balance"].$post({ param: { id: String($) }, query: { type: Q } });
	}

	function wJ($, Q) {
		return m.mod.users[":id"]["give-cursor"].$post({ param: { id: String($) }, json: { cursorId: Q } });
	}

	function hJ($, Q, J) {
		return m.mod.users[":id"].message.$post({
			param: { id: String($) },
			json: { body: Q, ...J ? { title: J } : {} }
		});
	}

	function mJ($, Q, J = !0) {
		return m.mod.broadcast.$post({ json: { body: $, ...Q ? { title: Q } : {}, createRow: J } });
	}

	function u5($, Q) {
		return m.mod.users[":id"].role.$post({ param: { id: String($) }, json: { role: Q } });
	}

	function NJ($ = {}) {
		return m.mod["review-queue"].$get({
			query: {
				...$.status ? { status: $.status } : {},
				...$.kind ? { kind: $.kind } : {},
				...$.cursor ? { cursor: $.cursor } : {},
				...$.limit ? { limit: String($.limit) } : {}
			}
		});
	}

	function BJ($, Q, J) {
		return m.mod["review-queue"][":id"].resolve.$post({
			param: { id: String($) },
			json: { action: Q, ...J ? { notes: J } : {} }
		});
	}

	function OJ($, Q) {
		return m.mod.feedback.$get({ query: { kind: $, offset: Q.toString() } });
	}

	function SJ($, Q, J) {
		return m.mod.feedback.resolve.$post({ json: { id: $, action: Q, reply: J } });
	}

	function _J() {
		return m.mod.feedback.counts.$get();
	}

	function yJ($) {
		return m.mod.referrals.$get({ query: { offset: $.toString() } });
	}

	function vJ($) {
		return m.mod.referredBy[":uid"].$get({ param: { uid: $.toString() } });
	}

	function d5($, Q) {
		return m.mod.referrals[":code"].$post({ param: { code: $ }, query: { action: Q } });
	}

	function gJ($) {
		return m.mod.clans[":id"].members.$get({ param: { id: $.toString() } });
	}

	function xJ($) {
		return m.mod["wipe-canvas"].$post({ json: $ });
	}

	function V6($) {
		return m.mod["restore-pixels"].$post({ json: { token: $ } });
	}

	function pJ($) {
		return m.mod.tile[":pos"].$get({ param: { pos: String($) } });
	}

	function cJ($, Q, J, Y) {
		return m.mod.region.$get({
			query: { x: String($), y: String(Q), w: String(J), h: String(Y) }
		});
	}

	function bJ($) {
		return m.mod.owners.$post({ json: { positions: $ } });
	}

	function fJ($, Q = {}) {
		return m.mod.users[":id"]["paint-history"].$get({
			param: { id: String($) },
			query: {
				...Q.before ? { before: Q.before } : {},
				...Q.limit ? { limit: String(Q.limit) } : {}
			}
		});
	}

	function lJ($, Q) {
		return m.mod.users[":id"]["paint-history"][":entryId"].$get({ param: { id: String($), entryId: String(Q) } });
	}

	function uJ($, Q = {}) {
		return m.mod.users[":id"]["chat-history"].$get({
			param: { id: String($) },
			query: {
				...Q.before ? { before: Q.before } : {},
				...Q.limit ? { limit: String(Q.limit) } : {}
			}
		});
	}

	function dJ($ = {}) {
		return m.mod.audit.$get({
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

	function oJ() {
		return m.mod["bot-sensitivity"].$get();
	}

	function nJ($) {
		return m.mod["bot-sensitivity"].$post({ json: { sensitivity: $ } });
	}

	function tJ() {
		return m.mod["chat-cooldown"].$get();
	}

	function aJ($) {
		return m.mod["chat-cooldown"].$post({ query: { cooldown: $.toString() } });
	}

	function sJ($) {
		return m.mod["bot-samples"][":userId"].$get({ param: { userId: String($) } });
	}

	var C8 = null;

	function lG() {
		if (C8 && C8.isConnected) return C8;

		return (C8 = G("div.toast-container"), document.body.append(C8), C8);
	}

	function B$($, Q = 3200) {
		let J = lG(), Y = G("div.toast", G("span", $));

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

	function rJ($) {
		if ($ === null || $ === void 0) return null;

		let Q = $ instanceof Date ? $ : new Date($);

		return Number.isNaN(Q.getTime()) ? null : Q;
	}

	function x0($) {
		let Q = rJ($);

		if (!Q) return $ === null || $ === void 0 ? "-" : String($);

		return Q.toLocaleString();
	}

	var R6 = null;

	function iJ() {
		(R6?.remove(), R6 = null);
	}

	document.addEventListener("click", iJ);

	function I0($, Q) {
		let J = rJ($);

		if (!J) return G("span", Q ?? x0($));

		let Y = J.toLocaleString(),
			Z = J.toUTCString(),
			q = G("time.ts-local.tooltip", {
				textContent: Q ?? Y,
				datetime: J.toISOString(),
				dataset: { tooltip: `UTC: ${Z}` },
				onclick(K) {
					if ((K.stopPropagation(), R6)) {
						iJ();

						return;
					}

					let W = G("div.ts-utc-pop", G("div.ts-utc-row", G("span.ts-utc-k", "Local"), Y), G("div.ts-utc-row", G("span.ts-utc-k", "UTC"), Z));

					document.body.append(W);

					let F = q.getBoundingClientRect(),
						H = W.getBoundingClientRect(),
						j = Math.min(F.left, window.innerWidth - H.width - 8),
						X = F.bottom + 4 + H.height > window.innerHeight ? F.top - H.height - 4 : F.bottom + 4;

					(
						W.style.left = `${Math.max(8, j)}px`,
						W.style.top = `${Math.max(8, X)}px`,
						R6 = W
					);
				}
			});

		return q;
	}

	var o5 = [
		{ label: "30 min", seconds: 1800 },
		{ label: "1 hour", seconds: 3600 },
		{ label: "6 hours", seconds: 21600 },
		{ label: "1 day", seconds: 86400 },
		{ label: "3 days", seconds: 259200 },
		{ label: "7 days", seconds: 604800 },
		{ label: "30 days", seconds: 2592000 },
		{ label: "Permanent", seconds: null }
	];

	function Z1($) {
		return G("span.mod-role", { dataset: { role: $ } }, $);
	}

	function M6($, Q = 240) {
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

	async function d($) {
		try {
			return await $.text() || `HTTP ${$.status} ${$.statusText}`;
		} catch {
			return `HTTP ${$.status} ${$.statusText}`;
		}
	}

	function z6($) {
		let Q = G("button.btn.mod-undo", "Undo", {
			async onclick() {
				Q.disabled = !0;

				let J = await V6($);

				if (!J.ok) {
					(
						Q.disabled = !1,
						B$(J.status === 410 ? "The undo window has passed." : "Undo failed.")
					);

					return;
				}

				let Y = 0;

				try {
					Y = (await J.json()).restored ?? 0;
				} catch {}

				(B$(`Restored ${Y} pixel${Y === 1 ? "" : "s"}.`), p());
			}
		});

		return Q;
	}

	var n5 = 0,
		U6 = 1,
		k6 = 2,
		uG = "#ff3b3b",
		dG = "rgba(8,8,12,0.75)",
		q$ = null;

	function oG() {
		if (q$) return q$;

		return (
			q$ = G("canvas.ghost-layer", { width: f, height: k0 }),
			K1.append(q$),
			q$
		);
	}

	function eJ($, Q) {
		let J = oG(), Y = J.getContext("2d");

		(
			Y.clearRect(0, 0, J.width, J.height),
			Y.fillStyle = dG,
			Y.fillRect(0, 0, J.width, J.height)
		);

		for (let Z = 0; Z < $.length; Z++) {
			let { pos: q, color: K } = $[Z],
				W = q % f,
				F = q / f | 0;

			if (W < 0 || W >= f || F < 0 || F >= k0) continue;

			Y.clearRect(W, F, 1, 1);

			let H = Q[Z];

			if (H === k6) (Y.globalAlpha = 0.55, Y.fillStyle = uG); else (
				Y.globalAlpha = H === U6 ? 0.28 : 1,
				Y.fillStyle = Z0[K]?.hex ?? "#ff00ff"
			);

			Y.fillRect(W, F, 1, 1);
		}

		(Y.globalAlpha = 1, J.style.display = "block");
	}

	function t5() {
		if (!q$) return;

		(
			q$.getContext("2d").clearRect(0, 0, q$.width, q$.height),
			q$.style.display = "none"
		);
	}

	function q1($) {
		if (!$.length) return null;

		let Q = 1 / 0, J = 1 / 0, Y = -1 / 0, Z = -1 / 0;

		for (let { pos: q } of $) {
			let K = q % f, W = q / f | 0;

			if (K < Q) Q = K;
			if (W < J) J = W;
			if (K > Y) Y = K;
			if (W > Z) Z = W;
		}

		return { x: Q, y: J, width: Y - Q + 1, height: Z - J + 1 };
	}

	var $7 = 5;

	function D6($) {
		let Q = new DataView($.buffer, $.byteOffset, $.byteLength),
			J = $.byteLength / $7 | 0,
			Y = new Array(J);

		for (let Z = 0; Z < J; Z++) {
			let q = Z * $7;

			Y[Z] = { pos: Q.getUint32(q, !0), color: $[q + 4] };
		}

		return Y;
	}

	var nG = 48;

	function A8($, Q = nG) {
		let J = G("canvas.mod-ph-thumb", { width: Q, height: Q }),
			Y = J.getContext("2d"),
			Z = q1($);

		if (!Z) return J;

		let q = Math.max(1, Math.floor(Math.min(Q / Z.width, Q / Z.height))),
			K = Math.floor((Q - Z.width * q) / 2),
			W = Math.floor((Q - Z.height * q) / 2);

		for (let { pos: F, color: H } of $) {
			let j = F % f, X = F / f | 0;

			(
				Y.fillStyle = Z0[H]?.hex ?? "#ff00ff",
				Y.fillRect(K + (j - Z.x) * q, W + (X - Z.y) * q, q, q)
			);
		}

		return J;
	}

	var tG = 360;

	function Q7($, Q = 0) {
		if (!$.length) return;

		let J = Math.max(0, Math.min(Q, $.length - 1)),
			Y = G("span"),
			Z = G("div.mod-carousel-stage"),
			q = G("div.mod-carousel-caption"),
			K = () => {
				let P = $[J];

				(
					Y.replaceChildren(`Flagged draws (${J + 1} / ${$.length})`),
					Z.replaceChildren(A8(P.pixels, tG)),
					q.replaceChildren(P.label)
				);
			},
			W = (P) => {
				(J = (J + P + $.length) % $.length, K());
			},
			F = () => {
				(document.removeEventListener("keydown", H, !0), X.remove());
			},
			H = (P) => {
				if (P.key === "Escape") (P.stopPropagation(), F()); else if (P.key === "ArrowLeft") (P.stopPropagation(), W(-1)); else if (P.key === "ArrowRight") (P.stopPropagation(), W(1));
			},
			j = $.length > 1,
			X = G("div.modal-bg.confirm-bg.mod-carousel-bg", G("div.modal-container", G("div.modal-title", Y, G$("close", { ariaLabel: "Close", onclick: F })), G(
				"div.modal-content",
				G(
					"div.mod-carousel",
					j
						? G("button.btn.mod-carousel-nav", "Prev", { onclick: () => W(-1) })
						: "",
					Z,
					j
						? G("button.btn.mod-carousel-nav", "Next", { onclick: () => W(1) })
						: ""
				),
				q
			)));

		(
			X.addEventListener("click", (P) => {
				if (P.target === X) F();
			}),
			document.addEventListener("keydown", H, !0),
			document.body.append(X),
			K()
		);
	}

	var x = {
		version: 1,
		lastUsedColors: [],
		lastBrushSize: 10,
		seenGuidebook: !1,
		camera: { x: 0, y: 0, zoom: 0 },
		a11y: {},
		flags: {}
	};

	function aG($) {
		(
			console.warn(`Outdated settings (current: ${$.version}, latest: ${x.version}), updating`),
			$.version = x.version
		);
	}

	function sG() {
		try {
			let $ = localStorage.getItem("wall:settings");

			if ($) return JSON.parse($);
		} catch($) {
			localStorage.removeItem("wall:settings");
		}
	}

	function rG() {
		let $ = sG();

		if (!$) {
			F1();

			return;
		}

		if (x.version != $.version) aG($);

		for (let Q in $) x[Q] = $[Q];

		F1();
	}

	function F1() {
		(
			localStorage.setItem("wall:settings", JSON.stringify(x)),
			a5 = !1
		);
	}

	var a5 = !1;

	function m0() {
		a5 = !0;
	}

	setInterval(
		() => {
			if (a5) F1();
		},
		1000
	);

	document.addEventListener("blur", F1);
	window.addEventListener("beforeunload", F1);
	rG();

	var J7 = G("img", {
			src: f0(0),
			alt: "⬉",
			onerror($) {
				(console.error("Error loading custom cursor", $), W1());
			}
		}),
		s5 = G("div.chat-bubble", G("span", "You")),
		O$ = G("div.cursor.own-cursor", J7, { style: { opacity: "0" } });

	function f0($) {
		return `/static/cursors/generated/${$ || 0}.png`;
	}

	var C6 = !1, A6 = !1;

	function Y7() {
		if (C6) return;

		(O$.style.opacity = "1", C6 = !0);
	}

	function iG() {
		if (!C6) return;

		(O$.style.opacity = "0", C6 = !1);
	}

	function W1() {
		if (A6) return;

		(
			O$.remove(),
			document.head.append(G("style.system-cursor", "* { cursor: unset !important }")),
			A6 = !0
		);
	}

	function T6() {
		if (!A6) return;
		if (x.a11y.systemCursor) return;

		document.body.prepend(O$);

		let $ = u("style.system-cursor");

		if ($) $.remove();

		A6 = !1;
	}

	function I6($, Q) {
		(O$.style.transform = `translate3d(${$}px, ${Q}px, 0)`, Y7());
	}

	document.addEventListener("pointermove", ($) => I6($.x, $.y));

	function G7($) {
		let Q = $.touches[0];

		if (!Q) return;

		I6(Q.clientX + 16, Q.clientY + 16);
	}

	document.addEventListener("touchstart", G7);
	document.addEventListener("touchmove", G7);
	document.addEventListener("mouseout", ($) => $.relatedTarget || iG());
	document.addEventListener("mouseover", Y7);

	function T8($) {
		J7.src = f0($);
	}

	var L6 = 0;

	function Z7($) {
		if (x.a11y.hideChatBubbles) return;

		let Q = G("p", $);

		if ((
			L6++,
			s5.append(Q),
			setTimeout(
				() => {
					if ((Q.remove(), L6--, L6 == 0)) s5.remove();
				},
				2000
			),
			L6 == 1
		)) O$.append(s5);
	}

	function q0() {
		if (K0) {
			(
				K0.container.inert = !0,
				K0.content.style.opacity = "0.3",
				K0.lockLevel++
			);

			return;
		}

		new _("Loading...", G("div.loading-modal", "Loading...")).onClose(() => !1);
	}

	function j1() {
		if (!K0?.lockLevel) return;
		if ((K0.lockLevel--, !K0.lockLevel)) (K0.container.inert = !1, K0.content.style.opacity = "");
	}

	var q7 = 3.141592653589793,
		X1 = Number.isSafeInteger,
		r5 = !1;

	function eG($, Q, J, Y) {
		return () => {
			($ |= 0, Q |= 0, J |= 0, Y |= 0);

			let Z = ($ + Q | 0) + Y | 0;

			return (
				Y = Y + 1 | 0,
				$ = Q ^ Q >>> 9,
				Q = J + (J << 3) | 0,
				J = J << 21 | J >>> 11,
				J = J + Z | 0,
				(Z >>> 0) / 4294967296
			);
		};
	}

	var E6 = () => Math.random() * 4294967296 >>> 0,
		S$ = eG(E6(), E6(), E6(), E6());

	function K7($) {
		let Q;

		if ($ < -3.141592653589793) $ += 6.28318531; else if ($ > 3.141592653589793) $ -= 6.28318531;
		if ($ < 0) if ((Q = 1.27323954 * $ + 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q; else if ((Q = 1.27323954 * $ - 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q;

		return Q;
	}

	function F7($) {
		let Q;

		if (($ += 1.57079632, $ > 3.141592653589793)) $ -= 6.28318531;
		if ($ < 0) if ((Q = 1.27323954 * $ + 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q; else if ((Q = 1.27323954 * $ - 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q;

		return Q;
	}

	function i5($) {
		let Q = $ | 0;

		return (r5 = !0, $ < 0 && $ != Q ? Q - 1 : Q);
	}

	var W7 = "__wd_site";

	Object.freeze(Math);

	var H1 = (navigator.userAgentData?.platform ?? navigator.platform).toLowerCase().includes("mac"),
		e5 = H1 ? "⌘" : "Ctrl",
		l0 = window.matchMedia("(pointer: coarse)").matches;

	function U$() {
		if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
	}

	function $Z($, Q, J) {
		let Y = S$() * q7 * 2,
			Z = J * S$() ** 0.5,
			q = J < 5 ? 1 : 1,
			K = (S$() - 0.5) * q,
			W = (S$() - 0.5) * q;

		return [i5($ + Z * F7(Y) + K), i5(Q + Z * K7(Y) + W)];
	}

	function* j7($, Q, J, Y) {
		let Z = new Set();

		if (J < 2) J = 2;

		for (let q = 0; q < Y; q++) {
			let K = $Z($, Q, J), W = K[1] * f + K[0];

			if (Z.has(W)) {
				q--;

				continue;
			}

			(Z.add(W), yield K);
		}
	}

	function X7($, Q, J, Y) {
		if ($ == -1) return { steps: 0, points: [] };

		let Z = J - $,
			q = Y - Q,
			K = Math.max(Math.abs(Z), Math.abs(q)),
			W = [];

		for (let F = 0; F < K; F++) W.push([Math.floor($ + Z / K * F), Math.floor(Q + q / K * F)]);

		return { steps: K, points: W };
	}

	var $8 = G("div.box.paint-bar.tooltip"),
		H7 = G("span.spray-can-count", "+0"),
		P7 = G("span.spray-can-extra", "cans"),
		V7 = G("button.btn.swatch.tooltip.paint-extra-count", H7, P7, {
			tabIndex: -1,
			onclick: U$,
			dataset: { tooltip: "Additional Spray Cans" }
		});

	function R7($) {
		let Q = Math.floor($ / C0),
			J = $ % C0,
			Y = J / C0 * 100;

		(
			$8.style.setProperty("--paint-remaining", `${Y}%`),
			$8.dataset.tooltip = `Paint Remaining: ${Math.round(Y)}% (${X0(J)}px)`,
			QZ(Q)
		);
	}

	function M7($, Q = !1) {
		(
			$8.style.setProperty("--color", $),
			$8.style.setProperty("--color-2", `${$}7F`),
			$8.classList.toggle("dark", Q)
		);
	}

	function QZ($) {
		(H7.textContent = `+${$}`, P7.textContent = `can${T0($)}`);
	}

	var K$;

	((q) => {
		q[q.None = 0] = "None";
		q[q.Spray = 1] = "Spray";
		q[q.Chat = 2] = "Chat";
		q[q.Login = 3] = "Login";
		q[q.Share = 4] = "Share";
	})(K$ ||= {});

	var R = {
		connectionId: -1,
		user: null,
		token: N$(),
		selectedColor: Z0[0],
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
			let Q = K$[$];

			(
				this.activeTool = $,
				document.documentElement.dataset.tool = Q.toLowerCase()
			);
		},

		setUser($) {
			(this.user = $, T8($.cursor_id || 0));
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

			if ((R7(Q), Q && X6 == "Out of paint?")) p();
		},

		sprayCanCount() {
			return Math.ceil(this.paintRemaining / C0);
		},

		currentSprayCanSize() {
			let $ = this.paintRemaining % C0;

			return $ == 0 && this.paintRemaining >= C0 ? C0 : $;
		}
	};

	if (M$) window.player = R;

	async function $Q($) {
		let Q = await m.user.settings.$post({ json: $ });

		if (Q.status != 200) return await Q.text();

		R.setUser(await Q.json());
	}

	async function P1($) {
		let Q = await $Q($);

		if (typeof Q == "string") alert(`Could not update user settings: ${Q}`);
	}

	var QQ = /^[a-z0-9_.-]{3,16}$/, JZ = /^[_.-]+$/;

	function V1($) {
		if (!$) return "Missing username";
		if ($.length < 3) return "Must be at least 3 letters long";
		if ($.length > 16) return "Must not be longer than 16 letters";
		if (!QQ.test($)) return "Can only contain lowercase letters, digits, underscores, dashes and dots.";
		if (JZ.test($)) return "This username is blacklisted.";
	}

	function z7() {
		let Q = R.user.username,
			J = !1,
			Y = G("p.warning"),
			Z = (j, X = "") => {
				(Y.textContent = j, Y.className = X);
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
			let j = q.value.replace(/[^a-z0-9_.-]/g, "");

			if (q.value != j) q.value = j;

			let X = j != Q, P = V1(j);

			if ((W.disabled = !X || !!P || J, K0)) if ((F = X, F)) K0.lockLevel++; else K0.lockLevel--;
			if (X && P) Z(P, "warning"); else if (Y.className == "warning") Z("");
		}

		return (
			q.oninput = H,
			W.onclick = async () => {
				if (J) return;

				let j = q.value;

				if (j == Q) return p(!0);

				if (V1(j)) {
					H();

					return;
				}

				if (!await i(`Change your username to "${j}"?`, "Change Username", "Change", "Keep Current")) return;

				(J = !0, Z(""), q0(), K0.lockLevel = 1);

				try {
					let P = await $Q({ username: j });

					if ((j1(), J = !1, typeof P == "string")) {
						(Z(P, "warning"), H());

						return;
					}

					(
						Q = R.user?.username ?? j,
						q.value = Q,
						Z("Username updated!", "success"),
						H()
					);
				} catch(P) {
					(
						j1(),
						J = !1,
						Z(P?.message || "Something went wrong", "warning"),
						H()
					);
				}
			},
			G("div.username-settings", G("h3", "Username"), q, Y, G("div.btn-container", K, W))
		);
	}

	function Y0($, Q) {
		new _("Error", G("div.modal.error-modal", G("p.error", $), Q && G("div.details", Q), z$));
	}

	async function N0($, Q) {
		if ($.status == 429) {
			let J = $.headers.get("retry-after");

			Y0(
				`Not so fast! Please try again ${J
					? `in ${T0(Math.round(parseInt(J) / 60), "minute")}`
					: "a bit later"}`,
				Q
			);
		} else if ($.status == 500) Y0("Something went wrong on our side, sorry!!!", Q); else {
			let J = $.headers.get("content-type");

			if (J && J.includes("text/plain")) Y0(await $.text(), Q); else Y0(`Something went wrong... (${$.status} ${$.statusText})`, Q);
		}
	}

	function U7($, Q, J, Y, Z = !1) {
		return G(
			"div.clan-server.box",
			G("img", {
				src: `https://cdn.discordapp.com/icons/${$}/${Q}.webp?size=128&quality=lossless`,
				draggable: !1
			}),
			G("div.info", G("b", J), G("p", G("span", X0(Y)), " members")),
			Z && G("div.btns", G("button.btn.primary", "Select", {
				async onclick() {
					(q0(), await P1({ clanDiscordId: $ }), M1());
				}
			}))
		);
	}

	function R1($, Q = !1) {
		return G("div.clan-with-stats", U7($.discord_id, $.icon, $.name, $.stat_member_count, !1), G("div.stats", G("p", G("b", K6($.stat_paint_visible)), " paint visible"), G("p", G("b", X0($.stat_pixels_changed)), " pixels changed"), G("p", G("b", X0($.approx_discord_members || 0)), " discord members"), Q && G("p", "Discord ID: ", G("b", $.discord_id))));
	}

	async function k7() {
		q0();

		let $ = await m.user.discordGuilds.$get();

		if (!$.ok) return Y0("Error loading the Discord Server list", "Make sure you're authenticated via Discord, and allowed us to access your Discord server list!");

		let Q = await $.json();

		new _("Change Clan", G("div.clans-modal", G("p", G("a.link", "Go Back", { onclick: M1 }), { style: { marginBottom: "8px" } }), G("div.list", Q.sort((J, Y) => Y.approximate_member_count - J.approximate_member_count).map((J) => U7(J.id, J.icon, J.name, J.approximate_member_count, !0)), G("button.btn", "Refresh List"))));
	}

	function YZ() {
		new _("User > Clan", G("div.clans-modal.no-clan", G("p", "You do not have a clan."), G("p.notice.noicon", "Clans appear next to your name at all times! ", "They're a fun way to represent your favorite streamer, content creator, friend group or any other community!"), "Join a clan to show where you belong, meet other members, climb the leaderboard together, and stand out across the platform.", G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Select Clan", { onclick: k7 }))));
	}

	async function M1() {
		if (!R.user?.discord_id) return Y0("Sorry, clans are for Discord users only!", `Clans work using Discord servers, so you cannot join any clans if you don't have a Discord account connected.

You can authenticate into your current account if your Discord account has the same E-Mail as your Google account.`);

		if (!R.user.clan) return YZ();

		new _("User > Clan", G("div.clans-modal.current", G("p", "Current Clan"), R1(R.user.clan), G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Change Clan", { onclick: k7 }), G("button.btn", "Leave Clan", {
			async onclick() {
				if (!await i("Are you sure you want to leave your current clan?")) return;

				(q0(), await P1({ clanDiscordId: "0" }), M1());
			}
		}))));
	}

	var JQ = 0;

	function D7($ = "Message") {
		let J = G("span", "0/512", { style: { color: "#aaa" } });

		return [
			G("label", { htmlFor: "f_content" }, $, " (", J, ")"),
			G("textarea#f_content.input.box", {
				maxLength: 512,
				style: { height: "200px" },
				oninput(Y) {
					let Z = Y.target.value;

					J.textContent = `${Z.length}/512`;
				}
			})
		];
	}

	var w6 = ($) => {
		let Q = document.getElementById($);

		if (!Q) return "";

		return Q.value.trim();
	};

	async function L7($, Q, J) {
		if (!$ || !Q) return;

		q0();

		let Y = await m.user.feedback.$post({ json: { kind: $, content: Q, target: J } });

		if (!Y.ok) return N0(Y, `Could not submit ${$}`);

		(
			JQ = Date.now() + 30000,
			new _($ == "report" ? "Report" : "Feedback", G("div.feedback", G("div.success", `Thank you for your ${$ == "report" ? "report" : "feedback"}!`)))
		);
	}

	function C7($) {
		return G("select#f_type.box.outset.input", { style: { width: "100%" } }, $.map(([Q, J]) => G("option", { value: Q }, J || Q)));
	}

	function A7($) {
		if (!R.user) return;
		if (JQ > Date.now()) return Y0("Please wait 30 seconds before reporting someone again.");

		new _("Report User", G(
			"div.feedback",
			G("p", "Report ", G("b", $)),
			G("label", { htmlFor: "f_type" }, "Reason"),
			C7([
				"- Please Specify -",
				"Griefing",
				"Cheating",
				"Multiaccounting",
				"Bad Behaviour",
				"Botting",
				"Other"
			].map((Q) => [Q])),
			D7("Optional Message"),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Report", {
				onclick: () => {
					let Q = w6("f_type"),
						J = w6("f_content"),
						Y = `${Q}|${J}`;

					if (Q[0] == "-") return;

					L7("report", Y, $);
				}
			}))
		));
	}

	function T7() {
		if (!R.user) {
			Y0("You need to be signed in to send feedback!");

			return;
		}

		if (JQ > Date.now()) return Y0("Please wait 30 seconds before submitting feedback again.");

		new _("Feedback", G(
			"div.feedback",
			G("label", { htmlFor: "f_type" }, "Type"),
			C7([
				["bug", "Bug Report"],
				["feedback", "Feedback"],
				["suggestion", "Feature Suggestion"]
			]),
			D7(),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Submit!", {
				onclick: () => {
					L7(w6("f_type"), w6("f_content"));
				}
			}))
		));
	}

	async function I7($) {
		if (!$.clan_id) return;

		q0();

		let Q = G("div.settings-modal", G("p.notice.noicon.user", G("span.name-container", $.clan_name && G("b", `${h$($.clan_name)} `), $.username), G("img", { src: f0($.cursor_sprite), draggable: !1, alt: "cursor" })));

		if ($.clan_name) {
			let Y = await (await m.user.clan[":id"].$get({ param: { id: $.clan_id.toString() } })).json();

			Q.append(G("p.c", "Clan"), R1(Y));
		}

		(
			Q.append(G(
				"div.btn-container.vertical",
				G("button.btn", "Jump to Cursor", {
					onclick() {
						O0({ connId: $.id, fallbackPos: $.lastPos, username: $.username });
					}
				}),
				G("button.btn", "Report User", {
					onclick() {
						A7($.username);
					}
				}),
				e$
			)),
			new _("User Info", Q)
		);
	}

	function YQ() {
		let $ = -C.x / C.zoom,
			Q = -C.y / C.zoom,
			J = window.innerWidth / C.zoom,
			Y = window.innerHeight / C.zoom;

		return {
			x: Math.max($, 0),
			y: Math.max(Q, 0),
			x2: Math.min($ + J, $0.width),
			y2: Math.min(Q + Y, $0.height)
		};
	}

	function GZ() {
		let $ = YQ();

		return {
			x: Math.floor($.x / L0),
			y: Math.floor($.y / L0),
			x2: Math.floor($.x2 / L0),
			y2: Math.floor($.y2 / L0)
		};
	}

	function E7() {
		let $ = GZ(), Q = new Set(), J = 4;

		for (let Y = $.x - 4; Y <= $.x2 + 4; Y++) for (let Z = $.y - 4; Z <= $.y2 + 4; Z++) {
			if (Y < 0 || Z < 0 || Y >= D8 || Z >= g0) continue;
			if (Q.size > 1000) return new Set();

			Q.add(Y * g0 + Z);
		}

		return Q;
	}

	function GQ($, Q, J = C.viewport) {
		return $ < J.x || Q < J.y || $ > J.x2 || Q > J.y2;
	}

	var z1 = new Set(),
		ZZ = 10,
		w7 = 0.05,
		qZ = 1e6,
		h7 = performance.now();

	function m7($) {
		let Q = ($ - h7) / 1000, J = 1 - Math.exp(-ZZ * Q);

		h7 = $;

		let Y = 0, Z = _$ ? 100 : 500;

		for (let q of z1) {
			if (Y++ >= Z) break;

			if (!q.element) {
				z1.delete(q);

				continue;
			}

			let K = q.moveX - q.x,
				W = q.moveY - q.y,
				F = K * K + W * W;

			if (Math.abs(K) < w7 && Math.abs(W) < w7 || F > qZ) (q.x = q.moveX, q.y = q.moveY, z1.delete(q)); else (q.x += K * J, q.y += W * J);

			h6(q, q.x, q.y);
		}

		requestAnimationFrame(m7);
	}

	function N7($, Q, J) {
		let Y = V0.get($);

		if (!Y) return;

		if (GQ(Y.x, Y.y) && GQ(Q, J)) {
			(h6(Y, Q, J), z1.delete(Y));

			return;
		}

		(z1.add(Y), Y.moveX = Q, Y.moveY = J);
	}

	requestAnimationFrame(m7);

	var V0 = new Map(),
		Q8 = G("div.cursors"),
		U1 = G("div.cursor-overflow");

	U1.style.display = "none";
	Q8.append(U1);

	function O7($) {
		if ($ > 0) (U1.textContent = `+${$} more here`, U1.style.display = ""); else U1.style.display = "none";
	}

	var KZ = 50,
		k1 = new Set(),
		I8 = new Set(),
		S7 = new Set(),
		_7 = {
			id: -1,
			username: "",
			cursor_sprite: 0,
			x: 0,
			y: 0,
			moveX: 0,
			moveY: 0,
			partial: !0
		};

	function y7() {
		for (let $ of V0.values()) if ($.element) $.element.remove();

		V0.clear();
	}

	function ZQ($) {
		if (x.a11y.hideCursors) return;
		if ($.username == R.user?.username || $.id == R.connectionId) return;

		let Q = V0.get($.id),
			J = !!Q && !Q.partial && (Q.cursor_sprite !== $.cursor_sprite || Q.clan_name !== $.clan_name || Q.username !== $.username),
			Y = {
				..._7,
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

			if ((Q.element.append(KQ(Y)), Z)) Z.src = f0($.cursor_sprite);
		} else if (Q?.element && J) FZ(Y);
	}

	function FZ($) {
		if (!$.element) return;

		let Q = $.element.querySelector("img");

		if (Q) Q.src = f0($.cursor_sprite);

		(
			$.element.querySelector(".chat-bubble")?.remove(),
			$.element.append(KQ($))
		);
	}

	function WZ($) {
		if (V0.has($) || $ == R.connectionId) return;

		let Q = { ..._7, id: $ };

		return (qQ($), V0.set($, Q), Q);
	}

	function qQ($) {
		if ($ === R.connectionId || V0.has($) || k1.has($) || I8.has($) || S7.has($)) return;

		k1.add($);
	}

	function v7() {
		if (I8.size > 0 || k1.size === 0) return null;

		let $ = [];

		for (let Q of k1) {
			if ($.length >= KZ) break;

			$.push(Q);
		}

		for (let Q of $) (k1.delete(Q), I8.add(Q));

		return $;
	}

	function g7($) {
		for (let Q of $) (ZQ(Q), I8.delete(Q.id));
		for (let Q of I8) S7.add(Q);

		I8.clear();
	}

	function x7($) {
		let Q = V0.get($);

		if (!Q) return;
		if (Q.element) Q.element.remove();

		V0.delete($);
	}

	var B7 = 0;

	function p7($, Q, J = !1) {
		if (x.a11y.hideCursors) return;
		if ($ == R.connectionId) return;

		let Y = V0.get($) || WZ($);

		if (!Y) return;

		(Y.lastSeen = performance.now(), Y.lastPos = Q);

		let Z = Q % f, q = Math.floor(Q / f);

		if (!Y.element) (
			Y.element = G("div.cursor", { dataset: { id: Y.id.toString() } }, G("img", { draggable: !1, src: f0(Y.cursor_sprite), alt: "⬉" }), !Y.partial && KQ(Y)),
			Q8.append(Y.element),
			Y.hidden = !1,
			Y.element.style.zIndex = `${B7++}`
		); else if (Y.hidden) (XZ(Y), Y.element.style.zIndex = `${B7++}`);

		if (J) N7($, Z, q); else h6(Y, Z, q);
	}

	function h6($, Q, J) {
		if (!$.element) return;

		(
			$.element.style.translate = `${Q}px ${J}px`,
			$.x = Q,
			$.y = J
		);
	}

	function KQ($) {
		return G("div.chat-bubble", G("span", $.clan_name && G("b", h$($.clan_name)), $.username, {
			onclick() {
				I7($);
			}
		}));
	}

	function jZ($) {
		if (!$.element || $.hidden) return;

		($.element.style.opacity = "0", $.hidden = !0);
	}

	function XZ($) {
		if (!$.element || !$.hidden) return;

		($.element.style.opacity = "", $.hidden = !1);
	}

	var HZ = 1e4, PZ = 1000;

	function VZ() {
		let $ = performance.now() - HZ;

		for (let Q of V0.values()) {
			if (!Q.element || Q.hidden) continue;
			if (Q.lastSeen === void 0 || Q.lastSeen < $) jZ(Q);
		}
	}

	setInterval(VZ, PZ);

	var c7 = !1;

	function b7() {
		if (c7) return;

		c7 = !0;

		let $ = new _("Update required", G("div.version-mismatch", G("p", "The Wall was just updated and this tab is running an older version. Reload to keep going."), G("p.subtle", "Heads up: anything you've drawn but not submitted will be lost. If a reload doesn't fix it, clear your cache and reload again."), G("div.btn-container", G("button.btn", "Reload now", { onclick: () => location.reload() }))));

		$.lockLevel = 1;
	}

	async function f7($) {
		let Q = V1($);

		if (Q) throw new Error(Q);

		let J = await m.user.setup.$post({ json: { username: $ } });

		if (J.status != 200) {
			let Y = await J.text();

			throw new Error(Y);
		}

		(
			localStorage.setItem("auth-token", u0.token),
			location.reload()
		);
	}

	function m6() {
		let $ = G("p.warning"), Q = "", J = !1;

		new _("Setup", G(
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

					if (!u("input#tos_checkbox")?.checked) {
						$.textContent = "You need to agree with our Privacy Policy/ToS!";

						return;
					}

					(q0(), $.textContent = "", J = !0);

					try {
						await f7(Q);
					} catch(Y) {
						($.textContent = Y.message || "Something went wrong", J = !1);
					}

					j1();
				}
			}))
		)).onClose(() => {
			return !1;
		});
	}

	var O6 = G("p.warning"), E8 = "", S6 = !0, N6 = "";

	function u7() {
		E8 = "";
	}

	async function d7() {
		if (!N6) {
			let J = await (await m.auth.turnstile.$get()).json();

			if ((N6 = J.sitekey || "none", !J.required || !J.sitekey)) S6 = !1;
		}

		if (!S6) return;

		let $ = window.turnstile;

		if (!$) return alert("error: Turnstile API didn't load, can't show captcha");

		$.render("#captcha-container", {
			sitekey: N6,
			theme: x.a11y.darkTheme ? "dark" : "light",
			size: "flexible",
			callback(Q) {
				(O6.textContent = "", E8 = Q);
			}
		});
	}

	function l7() {
		if ((O6.textContent = "", S6 && !E8)) return (
			N6 = "",
			S6 = !0,
			d7(),
			O6.textContent = "You need to complete the captcha!",
			!0
		);
	}

	function J8($) {
		(
			new _("Log In", G(
				"div.login-modal",
				$,
				G("p", "Choose your login method"),
				G("div#captcha-container", { onmouseenter: W1, onmouseleave: T6 }),
				N5("discord", "Discord", "#5865F2", "#fff", {
					ariaLabel: "Authenticate with Discord",
					onclick() {
						if (l7()) return;

						B6("discord", "Discord");
					}
				}),
				N5("google", "Google", "#F1F3F4", "#000", {
					ariaLabel: "Authenticate with Google",
					onclick() {
						if (l7()) return;

						B6("google", "Google");
					}
				}),
				O6,
				J0.devLogin === !0 && G("button.btn.dev-login", "Dev login (staff)", {
					ariaLabel: "Dev login",
					onclick() {
						B6("dev", "Dev");
					}
				}),
				G("div.btn-container", G("button.btn", "Cancel", { onclick: p }))
			)),
			setTimeout(d7, 100)
		);
	}

	function o7($) {
		if (!QQ.test($)) return;

		J8(G("div.success", G("b", $), " has invited you to The Wall!"));
	}

	function n7($) {
		if (!$.is_banned) return;

		(
			t7(),
			new _("Oops!", G("div.modal.error-modal", G("p", "You have been banned!"), G("p.error", $.is_banned.reason || "<Reason not specified>"), G("p", "Expires: ", G("b", W6($.is_banned.until))))).onClose(() => !1)
		);
	}

	async function FQ() {
		let $ = N$();

		if (!$) return null;

		G1.Authorization = $;

		let Q = await m.user.me.$get();

		if (Q.status != 200) return !1;

		let J = await Q.json();

		if (!J) return !1;

		return J;
	}

	async function a7() {
		let $ = await FQ();

		if ($) {
			if ((R.token = N$(), R.setUser($), $.is_banned)) return n7($);
			if ($.is_new) return m6();

			w8();

			return;
		}

		if ((y$(), $ == !1)) J8(G("p.warning", "Session expired, please log in again!"));
	}

	var u0 = { started: !1, status: "", token: "" };

	window.addEventListener("message", ($) => {
		if (!u0.started) return;
		if ($.origin != J0.url.web) return;
		if ($.data.type == "auth_modal_state") (u0.status = $.data.status, u0.token = $.data.token);
	});

	function y$() {
		(
			G1.Authorization = "",
			localStorage.removeItem("auth-token"),
			u0.token = "",
			R.token = null,
			R.user = null
		);
	}

	function s7() {
		(y$(), location.reload());
	}

	async function B6($, Q) {
		if (!E8) return alert("Missing turnstile token");

		q0();

		let J = await m.auth.login[":provider"].$post({ param: { provider: $ }, json: { turnstileToken: E8 } });

		if ((u7(), !J.ok)) return Y0("Captcha failed!", await J.text());

		let Y = await J.json(),
			Z = 485,
			q = 645,
			K = window.open(Y.redirectURL, void 0, `popup,width=${Z},height=${q},left=${Math.floor(screen.width / 2 - Z / 2)},top=${Math.floor(screen.height / 2 - q / 2)}`);

		if (!K) {
			Y0("Failed to open a pop-up window...", "Make sure you allowed us to open pop-up windows!");

			return;
		}

		(
			new _("Auth", G("div", "Authenticating...", G("p.notice.noicon", `A pop-up window should have been opened for you to complete authentication using ${Q}.`, { style: { maxWidth: "600px" } }))).onClose(() => !1),
			u0.started = !0,
			RZ(K)
		);
	}

	function RZ($) {
		let Q = setInterval(
			() => {
				if ($.closed) (clearInterval(Q), MZ());
			},
			500
		);
	}

	async function MZ() {
		if (!u0.status) {
			Y0("Authentication aborted");

			return;
		}

		if (u0.status != "200") return Y0("Authentication failed!", `Server responded with error code ${u0.status}`);

		localStorage.setItem("auth-token", u0.token);

		let $ = await FQ();

		if (!$) return (
			y$(),
			Y0("Authentication failed!", "Could not fetch the user after authenticating")
		);

		if ($.is_new) m6(); else (u0.started = !1, location.reload());
	}

	var k$ = 256,
		zZ = Math.max(f, k0),
		r7 = (() => {
			let $ = 0;

			while (Math.ceil(zZ / 2 ** $) > k$) $++;

			return $;
		})();

	var UZ = ($) => Math.ceil(Math.ceil(f / 2 ** $) / k$),
		kZ = ($) => Math.ceil(Math.ceil(k0 / 2 ** $) / k$);

	function WQ($) {
		if ($ <= 0) return r7;

		return Math.min(r7, Math.max(0, Math.round(-Math.log2($))));
	}

	function e7($) {
		let Q = $.zoom || 0.000001,
			J = Math.max(0, Math.floor(-$.x / Q)),
			Y = Math.max(0, Math.floor(-$.y / Q)),
			Z = Math.min(f, Math.ceil((-$.x + $.w) / Q)),
			q = Math.min(k0, Math.ceil((-$.y + $.h) / Q));

		return { x0: J, y0: Y, x1: Math.max(J, Z), y1: Math.max(Y, q) };
	}

	function _6($, Q) {
		let { x0: J, y0: Y, x1: Z, y1: q } = e7($),
			K = 2 ** Q,
			W = UZ(Q),
			F = kZ(Q),
			H = Math.max(0, J / K / k$ | 0),
			j = Math.max(0, Y / K / k$ | 0),
			X = Math.min(W - 1, (Z / K - 1) / k$ | 0),
			P = Math.min(F - 1, (q / K - 1) / k$ | 0),
			k = [];

		for (let z = H; z <= X; z++) for (let A = j; A <= P; A++) k.push([z, A]);

		return k;
	}

	var i7 = 64;

	function DZ($) {
		let { x0: Q, y0: J, x1: Y, y1: Z } = e7($),
			q = Q / L0 | 0,
			K = (Y - 1) / L0 | 0,
			W = J / L0 | 0,
			F = (Z - 1) / L0 | 0,
			H = [];

		for (let P = q; P <= K; P++) for (let k = W; k <= F; k++) if (P >= 0 && k >= 0 && P < D8 && k < g0) H.push(P * g0 + k);

		if (H.length <= i7) return H;

		let j = (Q + Y) / 2 / L0, X = (J + Z) / 2 / L0;

		return H.map((P) => {
			let k = P / g0 | 0,
				z = P % g0,
				A = k + 0.5 - j,
				v = z + 0.5 - X;

			return [P, A * A + v * v];
		}).sort((P, k) => P[1] - k[1]).slice(0, i7).map((P) => P[0]);
	}

	function LZ() {
		let $ = globalThis.navigator?.connection;

		if (!$) return !1;

		return !!$.saveData || $.effectiveType === "2g" || $.effectiveType === "slow-2g" || $.effectiveType === "3g";
	}

	var CZ = 0.8;

	class jQ {
		hooks;
		mode = "overview";
		lastChunks = "";

		constructor($) {
			this.hooks = $;
		}

		update($) {
			let Q = $.zoom >= CZ ? "live" : "overview";

			if (Q !== this.mode) (this.mode = Q, this.hooks.setLayer(Q));

			if (this.mode === "overview") {
				if (this.lastChunks !== "") (this.hooks.setLiveChunks([]), this.lastChunks = "");

				let J = WQ($.zoom), Y = _6($, J);

				for (let [Z, q] of Y) this.hooks.drawTile(J, Z, q);

				if (!LZ() && J > 0) for (let [Z, q] of _6($, J - 1).slice(0, 16)) this.hooks.drawTile(J - 1, Z, q);
			} else {
				let J = DZ($), Y = J.join(",");

				if (Y !== this.lastChunks) (this.hooks.setLiveChunks(J), this.lastChunks = Y);
			}
		}
	}

	function AZ() {
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

	var JY = AZ(),
		$Y = Math.min(300, Math.round(JY * 2)),
		Y8 = JY,
		y6 = 16.7,
		XQ = performance.now(),
		QY = XQ;

	function YY($) {
		let Q = $ - XQ;

		if ((
			XQ = $,
			Q > 0 && Q < 1000 && document.visibilityState === "visible"
		)) {
			if ((y6 += (Q - y6) * 0.1, $ - QY > 1000)) {
				if ((QY = $, y6 > 22 && Y8 > 8)) Y8 = Math.max(8, Math.round(Y8 * 0.7)); else if (y6 < 13 && Y8 < $Y) Y8 = Math.min($Y, Math.round(Y8 * 1.15) + 1);
			}
		}

		requestAnimationFrame(YY);
	}

	requestAnimationFrame(YY);

	function GY() {
		return Y8 | 0;
	}

	var G8 = new Set(), HQ = -1, ZY = null;

	function qY($) {
		ZY = new Set($);
	}

	function KY() {
		(G8 = new Set(), HQ = -1);
	}

	function TZ($) {
		if ($.size != G8.size) return !0;

		for (let Q of $) if (!G8.has(Q)) return !0;
		for (let Q of G8) if (!$.has(Q)) return !0;

		return !1;
	}

	function FY() {
		if (!R.user || !F0) return;

		let $ = R.cursorX >= 0 && R.cursorY >= 0,
			Q = -1,
			J = -1;

		if ($) {
			let K = Math.min(R.cursorX, f - 1),
				W = Math.min(R.cursorY, k0 - 1);

			Q = W * f + K;

			let F = Math.floor(K / L0), H = Math.floor(W / L0);

			J = F * g0 + H;
		}

		let Y = ZY ?? E7(), Z = TZ(Y), q = v7();

		if (HQ != Q || Z || q) (
			HQ = Q,
			G8 = Y,
			PQ(3, {
				cursorPos: Q,
				cursorChunk: J,
				subscribe: Z ? [...Y] : void 0,
				lookupUsers: q ?? void 0,
				cursorBudget: GY()
			})
		);
	}

	var UQ = J0.url?.tileBase?.replace(/\/$/, ""),
		q8 = !!J0.url?.ws && !!UQ,
		kQ = G("img.canvas-snapshot", { draggable: !1, decoding: "async" }),
		x6 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" });

	x6.style.opacity = "0";

	var A1 = G("div.canvas-snapshot-wrap", kQ, x6);

	if (!q8) A1.style.display = "none";

	var DQ = 400;

	kQ.style.transition = `opacity ${DQ}ms ease-out`;
	x6.style.transition = `opacity ${DQ}ms ease-out`;

	var v6 = kQ,
		h8 = x6,
		p6 = G("div.canvas-tile-grid");

	if (!q8) p6.style.display = "none";

	var Z8 = null,
		c6 = "overview",
		MQ = 1e4,
		VQ = !1,
		WY = "",
		jY = null;

	async function g6() {
		if (!q8 || VQ || c6 !== "overview" || document.hidden) return;

		VQ = !0;

		try {
			let $ = await fetch(`${UQ}/snapshot.png`, { cache: "no-cache" });

			if (!$.ok) return;

			let Q = $.headers.get("last-modified") ?? "";

			if (Q && Q === WY) return;

			WY = Q;

			let J = await $.blob(), Y = URL.createObjectURL(J);

			h8.src = Y;

			try {
				await h8.decode();
			} catch {}

			(
				A1.appendChild(h8),
				h8.style.opacity = "1",
				await new Promise((q) => setTimeout(q, DQ + 60))
			);

			let Z = jY;

			if ((jY = Y, v6.style.opacity = "0", v6.src = "", Z)) URL.revokeObjectURL(Z);

			[v6, h8] = [h8, v6];
		} catch {} finally {
			VQ = !1;
		}
	}

	var v$ = new Map(),
		m8 = new Set(),
		L1 = new Map(),
		IZ = 8000;

	function PY($, Q, J) {
		return `${UQ}/tiles/${$}/${Q}/${J}.png?v=${Math.floor(Date.now() / MQ)}`;
	}

	function zQ($) {
		if (!q8) return;

		if (c6 === "overview") {
			if (v$.size) {
				for (let K of v$.values()) K.remove();

				(v$.clear(), m8.clear());
			}

			return;
		}

		let Q = WQ($.zoom),
			J = k$ * 2 ** Q,
			Y = _6($, Q),
			Z = new Set();

		for (let [K, W] of Y) {
			let F = `${Q}/${K}/${W}`;

			if ((Z.add(F), !v$.has(F))) {
				let H = document.createElement("img");

				(
					H.className = "canvas-tile",
					H.decoding = "async",
					H.draggable = !1,
					H.style.left = `${K * J}px`,
					H.style.top = `${W * J}px`,
					H.style.width = `${J}px`,
					H.style.height = `${J}px`,
					m8.add(F)
				);

				let j = setTimeout(
					() => {
						if (m8.delete(F)) C1();
					},
					IZ
				);

				L1.set(F, j);

				let X = () => {
					let P = L1.get(F);

					if (P !== void 0) (clearTimeout(P), L1.delete(F));

					m8.delete(F);
				};

				(
					H.onload = () => {
						(
							H.classList.add("loaded"),
							H.style.visibility = "",
							X(),
							C1()
						);
					},

					H.onerror = () => {
						(H.style.visibility = "hidden", X(), C1());
					},
					H.src = PY(Q, K, W),
					p6.appendChild(H),
					v$.set(F, H)
				);
			}
		}

		let q = !1;

		for (let [K, W] of v$) if (!Z.has(K)) {
			(W.remove(), v$.delete(K));

			let F = L1.get(K);

			if (F !== void 0) (clearTimeout(F), L1.delete(K));
			if (m8.delete(K)) q = !0;
		}

		if (q) C1();
	}

	function XY() {
		if (!q8 || c6 !== "live" || document.hidden) return;

		for (let [$, Q] of v$) {
			let [J, Y, Z] = $.split("/").map(Number);

			Q.src = PY(J, Y, Z);
		}
	}

	var RQ = 0.9, HY = 1.4;

	function EZ($) {
		if ($ <= RQ) return 1;
		if ($ >= HY) return 0;

		return 1 - ($ - RQ) / (HY - RQ);
	}

	function C1() {
		if (!Z8) return;

		A1.style.opacity = m8.size > 0 ? "1" : String(EZ(Z8.zoom));
	}

	var wZ = new jQ({
		async drawTile() {
			return !0;
		},

		setLiveChunks($) {
			qY($);
		},

		setLayer($) {
			if ((c6 = $, $ === "overview")) {
				if ((g6(), Z8)) zQ(Z8);
			} else if (Z8) zQ(Z8);
		}
	});

	function VY() {}

	function RY($) {
		if (!q8) return;

		(Z8 = $, wZ.update($), zQ($), C1());
	}

	if (q8) (
		g6(),
		setInterval(g6, MQ),
		setInterval(XY, MQ),
		document.addEventListener("visibilitychange", () => {
			if (!document.hidden) (g6(), XY());
		})
	);

	var g$ = [], MY = null;

	function LQ() {
		MY?.();
	}

	var F$ = {
		bind($) {
			(MY = $, $());
		},

		get unread() {
			return g$;
		},

		get unreadCount() {
			return g$.length;
		},

		seed($) {
			g$.length = 0;

			let Q = $?.unread_notifications;

			if (Q?.length) g$.push(...Q);

			LQ();
		},

		receive($) {
			if (g$.some((Q) => Q.id === $.id)) return;

			(
				g$.unshift({
					id: $.id,
					kind: $.kind,
					title: $.title,
					body: $.body,
					data: $.data,
					createdAt: $.createdAt
				}),
				LQ()
			);
		},

		async markAllRead() {
			if (!g$.length) return;
			if ((g$.length = 0, LQ(), !R.token)) return;

			try {
				await m.user.notifications.read.$post({ json: {} });
			} catch {}
		}
	};

	function zY() {
		new _("Chat", G("div.chat-modal.nopad", T1, CQ(!0))).onClose(() => {
			u(".chat-log-wrapper").append(T1);
		});
	}

	var b6 = null,
		UY = [
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

	function kY($, Q) {
		let J = new URLSearchParams();

		if ($.name == "Reddit") (J.set("title", "#filianislost"), J.set("url", Q)); else J.set("text", `#filianislost ${Q}`);

		return `${$.url}?${J.toString()}`;
	}

	async function AQ() {
		if (b6) return b6;

		q0();

		let $ = await m.user.shareLink.$post();

		if (!$.ok) {
			N0($, "Could not generate the referral link");

			return;
		}

		let Q = await $.json();

		return (
			b6 = Q,
			setTimeout(
				() => {
					b6 = null;
				},
				60000
			),
			Q
		);
	}

	function DY($) {
		if (!R.user) return "";

		let Q = new URLSearchParams();

		if ((Q.set("c", $.referral.code), $.imageCode)) Q.set("im", $.imageCode);
		if ($.x && $.y) Q.set("p", `${$.x},${$.y}`);

		return `${J0.url.share}/${R.user.username}?${Q.toString()}`;
	}

	var f6 = null;

	function TQ($, Q = !1) {
		let J = DY($),
			Y = `Share Website > ${$.imageCode ? "Image" : "Link"}`;

		new _(Y, G(
			"div.share-modal.link",
			G("p", Q
				? "You have already generated an image in the past minute!"
				: "Here's your link!"),
			G("span.box.input.link.tooltip", J, {
				dataset: { tooltip: "Click to copy!" },
				onclick() {
					m5(J);
				}
			}),
			$.imageLink && G("img.preview", { src: $.imageLink }),
			G("p.desc", "Post it on..."),
			G("div.platforms", UY.map((Z) => G(
				"a.platform.tooltip",
				{
					target: "_blank",
					href: kY(Z, `${J}&utm_source=${Z.id}`),
					dataset: { tooltip: Z.name }
				},
				G("img", {
					src: `/static/icon/platform/${Z.id}.png`,
					alt: Z.name,
					draggable: !1
				})
			))),
			z$
		));
	}

	function hZ() {
		if (f6) return TQ(f6, !0);

		(R.setTool(4), x$(4), p(!0));
	}

	async function IQ($) {
		if ((R.setTool(0), x$(0), i0(), $)) return I1();

		(q0(), d0());

		let { x: Q, y: J, x2: Y, y2: Z } = C.viewport,
			q = Y - Q,
			K = Z - J,
			W = Math.floor(Q + q / 2),
			F = Math.floor(J + K / 2),
			H = await m.user.shareCanvas.$post({
				json: {
					x: Math.floor(Q),
					y: Math.floor(J),
					width: Math.floor(q) || 1,
					height: Math.floor(K) || 1
				}
			});

		if (!H.ok) return N0(H, "Could not generate the image");

		let { code: j, url: X } = await H.json(),
			k = { referral: await AQ(), imageCode: j, imageLink: X, x: W, y: F };

		(
			f6 = k,
			setTimeout(
				() => {
					f6 = null;
				},
				60000
			),
			p(!0),
			TQ(k)
		);
	}

	async function I1() {
		let $ = await AQ();

		if (!$) return;

		new _("Share Website", G("div.share-modal", G("p.success", `Every player who signs up with your link will reward you with ${L8(J1.ReferralCode)}!`), G("div.btn-container.vertical", G("button.btn.share", "Share Link", { onclick: () => TQ({ referral: $ }) }), G("button.btn.share", "Share Image", { onclick: () => hZ() }), G("button.btn", "Cancel", { onclick: () => p() })), G("p.desc", `You have invited ${T0($.uses, "user")} so far!`)));
	}

	function LY() {
		return new _("Out of paint!", G("div.out-of-paint", G("p.c", G("b", "You have used up some paint, time to submit!")), G("p.c.desc", `You have ${L8(R.paintRemaining + R.localPaintIncrement)} remaining.`), G("p.notice.noicon", "Paint does not get consumed until you submit your changes. Submit your drawing to the canvas, or undo your changes."), G(
			"div.btn-container",
			G("button.btn.primary", "Submit", {
				onclick: async () => {
					(q0(), await u6(), p(!0));
				}
			}),
			G("button.btn", "Cancel", { onclick: () => p() })
		)));
	}

	function l6() {
		return new _("Out of paint?", G("div.out-of-paint", G("b", "You can share our website to get more paint!"), G("p.success.noicon", `Each invited user will reward you with ${L8(J1.ReferralCode)}!`), G("p.desc", `You can also wait for a refill to get ${L8(J1.TimePassed)}.`, G("br"), "The timer is shown in the bottom bar."), G("div.btn-container.vertical", G("button.btn.share", "Share Website", { onclick: I1 }), e$)));
	}

	var N8 = G("div.box.outset.status-text.warn"),
		F8 = G("div.box.outset.status-text"),
		K8 = 0,
		p$ = !1,
		EQ = 0;

	function i0() {
		if (R.openAt && Date.now() + R.clockOffset < R.openAt) {
			if (p$) (N8.textContent = "", p$ = !1);

			(BZ(), EQ = R.activeTool);

			return;
		}

		if (R.activeTool == 1) mZ(EQ != R.activeTool); else if (p$) (N8.textContent = "", p$ = !1);
		if (R.activeTool == 4) NZ(); else if (R.paintRemaining == 0 && R.nextRefill) OZ(); else if (D0.size || p0.length) SZ(); else CY();

		EQ = R.activeTool;
	}

	function mZ($ = !1) {
		let Q = C.normalizedZoom <= d6;

		if (Q && (!p$ || $)) (p$ = !0, N8.textContent = "Zoom in to draw!"); else if (p$ && !Q) {
			(N8.textContent = "", p$ = !1);

			return;
		}
	}

	setInterval(i0, 1000);

	function CY() {
		if (K8 == 0) return;

		(F8.textContent = "", K8 = 0);
	}

	function NZ() {
		(
			K8 = 4,
			F8.replaceChildren(G("div.share-viewport", G("p", "Zoom into the canvas to share your artwork!"), G("div", G("button.btn", "Share", { onclick: () => IQ(!1) }), G("button.btn", "Cancel", { onclick: () => IQ(!0) }))))
		);
	}

	function BZ() {
		let $ = R.openAt - (Date.now() + R.clockOffset);

		(
			K8 = 5,
			F8.replaceChildren(G("div.timer", G("p", "Drawing opens in: "), G("b", g5($))))
		);
	}

	function OZ() {
		let $ = R.nextRefill - Date.now(), Q = g5($);

		if ((K8 = 1, $ < 1)) {
			(R.nextRefill = 0, CY());

			return;
		}

		F8.replaceChildren(G("div.timer", G("p", G("a.link", "Out of paint!", { tabIndex: 1, onclick: () => l6() }), " Next refill in: "), G("b", Q)));
	}

	function SZ() {
		if (K8 == 2) return;

		(
			K8 = 2,
			F8.replaceChildren(G("p", "Drawing locally - Confirm to submit!"), G("div", G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/confirm.png", draggable: !1 }), G("span", "Confirm"), { tabIndex: 1, onclick: u6 }), G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/cancel.png", draggable: !1 }), G("span", "Cancel"), { tabIndex: 1, onclick: AY })))
		);
	}

	var W8 = !1,
		TY = 1,
		wQ = 10,
		IY = ["tiny", "small", "medium", "large"],
		hQ = 2,
		mQ = ($, Q, J) => G(
			"button.btn.swatch.icon.tool.tooltip",
			{
				id: `tool-${Q}`,
				dataset: { tooltip: J },
				onclick: () => x$($)
			},
			G("img", { src: `/static/icon/tool/${Q}.png`, draggable: !1 })
		),
		B8 = 10,
		_Z = () => {
			let $ = G("img", { draggable: !1 }),
				Q = G("input.tooltip", {
					type: "range",
					min: TY,
					max: wQ,
					oninput(Y) {
						let Z = Y.target, q = parseInt(Q.value);

						(
							Z.dataset.tooltip = `Brush Size: ${q}`,
							x.lastBrushSize = q + hQ,
							J(q),
							m0()
						);
					}
				}),
				J = (Y) => {
					let Z = IY[Math.floor(Y / (wQ + 1) * IY.length)];

					(
						$.src = `/static/icon/size/${Z}.png`,
						B8 = Y + hQ,
						Q.value = Y.toString(),
						Q.dataset.tooltip = `Brush Size: ${Y}`
					);
				};

			return (
				J(Math.min(Math.max(x.lastBrushSize - hQ, TY), wQ)),
				G("div.container", G("div.popup.box.outset.size-control", G("div.input-container.tooltip", Q)), { onmouseout: () => U$() }, G("button#brush-size-btn.btn.swatch.icon.tooltip", $, { dataset: { tooltip: "Brush Size" } }))
			);
		},
		NQ = {
			0: mQ(0, "hand", "Hand Tool (H)"),
			1: mQ(1, "spray", "Draw Tool (B)"),
			2: mQ(2, "chat", "Open Chat")
		},
		EY = G("div.tools", ...Object.values(NQ)),
		wY = G("div.tools", _Z(), Y6(
			J6("tool/preview", {
				id: "tool-preview",
				onclick($) {
					(
						W8 = !W8,
						$.target.classList.toggle("active", W8),
						hY(),
						U$()
					);
				}
			}),
			"Compare Mode (M)"
		));

	function x$($) {
		if ((U$(), $ == 2)) {
			zY();

			return;
		}

		(
			s0(".tool.active").forEach((J) => J.classList.remove("active")),
			(NQ[$] ?? NQ[0]).classList.add("active"),
			R.setTool($),
			i0()
		);
	}

	var yZ = new Map(),
		o0 = new Uint8Array(i$).fill(255),
		vZ = !!J0.url?.ws;

	class mY {
		x;
		y;
		worldX;
		worldY;
		pos;

		constructor($, Q) {
			this.x = $;
			this.y = Q;

			(
				this.worldX = $ * L0,
				this.worldY = Q * L0,
				this.pos = $ * g0 + Q,
				yZ.set(this.pos, this)
			);
		}
	}

	function NY() {
		for (let $ = 0; $ < D8; $++) for (let Q = 0; Q < g0; Q++) new mY($, Q);
	}

	function O8($, Q) {
		if (!X1($) || $ < 0 || $ >= i$) return !1;

		let J = $ % f,
			Y = Math.floor($ / f),
			Z = Z0[Q],
			q = D0.get($);

		if ((o0[$] = Q, q && W8)) j8($, q, J, Y); else if (!q) if (Z) D$(J, Y, Z.hex); else c0.clearRect(J, Y, 1, 1);

		return !0;
	}

	function o6($, Q) {
		let J = Q * f + $;

		if (o0[J] == 255) if (vZ) o0[J] = 254; else {
			let { data: Y } = c0.getImageData($, Q, 1, 1),
				Z = Y[0] << 16 | Y[1] << 8 | Y[2];

			o0[J] = S5.get(Z) ?? 254;
		}

		return Z0[o0[J]];
	}

	function gZ($, Q) {
		let J = Math.imul($, 374761393) + Math.imul(Q, 668265263) | 0;

		return (
			J = Math.imul(J ^ J >>> 13, 1274126177),
			J ^= J >>> 16,
			(J >>> 0) / 4294967296
		);
	}

	function BY($, Q) {
		if (Q >= G6) return !1;

		let J = G6 - _5;

		if (Q < J) return !0;

		let Y = (G6 - Q) / _5;

		return gZ($, Q) < Y;
	}

	function xZ($) {
		let Q = Math.max(0, Math.floor((Date.now() - $) / 1000));

		if (Q < 60) return "just now";

		let J = Math.floor(Q / 60);

		if (J < 60) return `${J}m ago`;

		let Y = Math.floor(J / 60);

		if (Y < 24) return `${Y}h ago`;

		return `${Math.floor(Y / 24)}d ago`;
	}

	function pZ($) {
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
			G("div.time", I0($.createdAt, xZ($.createdAt)))
		);
	}

	function OY() {
		let $ = [...F$.unread];

		return (
			F$.markAllRead(),
			new _("Notifications", G(
				"div.notifications-modal",
				$.length
					? G("div.list", $.map(pZ))
					: G("p.desc.c", "No notifications."),
				G("div.btn-container", e$)
			))
		);
	}

	function SY() {
		let $ = G("span.notif-badge"),
			Q = G("img", { src: "/static/icon/notif.png", draggable: !1, alt: "bell" }),
			J = G("button.btn.swatch.tooltip.notif-indicator.icon", Q, $, {
				dataset: { tooltip: "Notifications" },
				onclick() {
					OY();
				}
			});

		return (
			F$.bind(() => {
				let Y = F$.unreadCount;

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

	function n6() {
		new _("Select Color", G("div.color-modal", G("div.colors", Z0.map(($) => G("button.btn.swatch.tooltip", {
			dataset: { tooltip: $.name },
			style: { backgroundColor: $.hex },
			onclick() {
				(X8($), p());
			}
		})))));
	}

	var S0 = [...Z0], H8 = G("div.colors.container");

	function a6($) {
		let Q = S0.indexOf($);

		if (Q > -1) (S0.splice(Q, 1), S0.push($));
	}

	var t6 = ($) => Z0.findIndex((Q) => Q.name == $);

	function cZ() {
		let $ = x.lastUsedColors;

		if ($.length != S0.length) {
			let Q = t6("Red"),
				J = t6("Violet"),
				Y = Z0.slice(Q, J + 1);

			(a6(Z0[t6("Gray")]), a6(Z0[t6("White")]));

			for (let Z of Y) a6(Z);

			return;
		}

		(S0.splice(0), S0.push(...$.map((Q) => Z0[Q])));
	}

	function yY($) {
		let Q = S0[S0.length - $];

		if (!Q) return;

		X8(Q, !1);
	}

	function X8($, Q = !0) {
		if ((M7($.hex, $.dark), R.selectedColor == $)) return;
		if (S0.indexOf($) > -1 && Q) (a6($), x.lastUsedColors = S0.map((Y) => Y.idx));

		(R.selectedColor = $, BQ());
	}

	var bZ = 54, fZ = 9;

	function _Y($) {
		let Q = getComputedStyle($),
			J = $.clientWidth - parseFloat(Q.paddingLeft) - parseFloat(Q.paddingRight);

		for (let Y = 0; Y < $.children.length; Y++) {
			let Z = $.children[Y];

			if (Z === H8) continue;

			J -= Z.getBoundingClientRect().width;
		}

		return J;
	}

	function BQ() {
		let $ = Y6(J6("tool/colors", { id: "palette-btn", onclick: n6 }), "Palette");

		H8.replaceChildren($);

		let Q = H8.parentElement, J = Q ? _Y(Q) : 0;

		if (J <= 0) {
			requestAnimationFrame(() => {
				if (Q && _Y(Q) > 0) BQ();
			});

			return;
		}

		let Y = Math.floor(J / bZ) - 1,
			Z = Math.max(0, Math.min(fZ, Y));

		for (let q = 0; q < Z; q++) {
			let K = S0[S0.length - 1 - q],
				W = G("button.btn.swatch.tooltip", {
					tabIndex: -1,
					dataset: { tooltip: K.name },
					style: { backgroundColor: K.hex },
					onclick() {
						X8(K, !1);
					}
				});

			H8.append(W);
		}
	}

	function vY() {
		(
			cZ(),
			X8(S0[S0.length - 1], !1),
			R.setPaintRemaining(R.paintRemaining)
		);

		let $ = H8.parentElement;

		if ($) {
			let Q = -1;

			new ResizeObserver(() => {
				let J = $.clientWidth;

				if (J === Q) return;

				(Q = J, BQ());
			}).observe($);
		}
	}

	var OQ = G("div.hotbar-container");

	function s6($) {
		OQ.replaceChildren($);
	}

	var E1 = G("div.hotbar.main-bar", { role: "toolbar" });

	function gY() {
		(
			E1.append(G("div.status-text-container", N8, F8), G("div.section.left", xY(), G("div#chatbox-divider.divider"), EY, G("div.divider")), G("div.section.middle", $8, V7, SY()), G("div.section.right", G("div.divider"), wY, G("div.divider"), H8)),
			R.setTool(0),
			s6(E1),
			x$(0),
			vY()
		);
	}

	var pY = 0,
		c$ = 0,
		w1 = !1,
		cY = 0,
		bY = 0,
		fY = 0,
		lY = 0,
		r6 = !1,
		uY = !1,
		L$ = new Map(),
		lZ = 50,
		uZ = 24,
		dZ = 16;

	function _0($, Q) {
		return [
			Math.max(Math.min(Math.floor(($ - C.rect.left) / C.rect.width * $0.width), $0.width), 0),
			Math.max(Math.min(Math.floor((Q - C.rect.top) / C.rect.height * $0.height), $0.height), 0)
		];
	}

	function oZ($, Q) {
		let J = Date.now(),
			[Y, Z] = _0($, Q),
			{ points: q } = X7(cY, bY, Y, Z),
			K = $ - fY,
			W = Q - lY;

		if ((
			c$ += Math.sqrt(K * K + W * W) / (J - pY),
			pY = J,
			cY = Y,
			bY = Z,
			!w1
		)) {
			(w1 = !0, c$ = 5);

			return;
		}

		if (c$ > 0) c$ *= 0.8;
		if (c$ <= 0.001) c$ = 0;

		let F = 1 - c$ / (B8 * 1.1),
			H = Math.max(B8 * F, 2),
			j = Math.min(Math.max(Math.floor((H + 1) ** 1.5), 1), 15);

		if (!q.length) q.push([Y, Z]);

		let X = (B8 - 1) * 0.1;

		for (let [P, k] of q) {
			let z = j7(P, k, Math.floor(H), j), A = 0, v = 0;

			for (let [O, M] of z) {
				if (O == P && M == k) v++;
				if ((A++, !SQ(O, M) && c$ < X)) nZ(O, M);
			}

			if (A < 5 || v > 1) r6 = !0;
		}

		i0();
	}

	function nZ($, Q) {
		let J = L$.get($);

		if (J) J.y = Math.max(J.y, Q); else L$.set($, { y: Q, amount: 0, max: S$() * (B8 * 1.5) });
		if (L$.size > lZ) L$.delete(L$.keys().next().value);
	}

	function tZ() {
		if (!L$.size) return;

		let $ = [...L$.entries()],
			[Q, J] = $[Math.floor(S$() * $.length)];

		if ((SQ(Q, ++J.y), ++J.amount >= J.max)) L$.delete(Q);
	}

	function dY() {
		(
			setInterval(
				() => {
					if (n0 && w1) tZ();
				},
				uZ
			),

			setInterval(
				() => {
					if (n0) (oZ(C$, A$), fY = C$, lY = A$); else if (w1) (L$.clear(), w1 = !1);
				},
				dZ
			)
		);
	}

	function oY() {
		r6 = !1;
	}

	var D0 = new Map();

	function hY() {
		for (let [$, Q] of D0) j8($, Q, $ % f, Math.floor($ / f));
	}

	function j8($, Q, J, Y) {
		if (W8) {
			let Z = Z0[o0[$]];

			if (Z) D$(J, Y, Z.hex); else c0.clearRect(J, Y, 1, 1);

			D$(J, Y, Q.opaqueHex);
		} else D$(J, Y, Q.hex);
	}

	function nY() {
		(
			R.localPaintIncrement = 0,
			R.setPaintRemaining(R.paintRemaining)
		);

		for (let $ of D0.keys()) {
			let Q = $ % f,
				J = Math.floor($ / f),
				Y = Z0[o0[$]];

			if (Y) D$(Q, J, Y.hex); else c0.clearRect(Q, J, 1, 1);
		}

		(D0.clear(), aY());
	}

	function aZ() {
		nY();
	}

	async function tY($, Q = 0) {
		if (Q >= 5) return (
			console.error("Failed to submit the drawing after 5 tries."),
			!1
		);

		let J = await sY($);

		if (window[W7]) return !0;

		try {
			return (await rY(J), !0);
		} catch(Y) {
			return (
				console.error("Error submitting the drawing:", Y),
				await tY($, Q + 1)
			);
		}
	}

	async function sZ() {
		let $ = [];

		for (let [Q, J] of D0) ($.push([Q, J.idx]), O8(Q, J.idx));

		if ((R.commitLocalPaint(), nY(), $.length === 0 || r6 || uY)) {
			oY();

			return;
		}

		for (let Q = 0; Q < $.length; Q += Z6) if (!await tY($.slice(Q, Q + Z6))) return Y0("Something went wrong, sorry!", "Could not submit local drawing to the server after 5 tries");
	}

	function SQ($, Q) {
		if (!X1($) || !X1(Q) || $ < 0 || Q < 0 || $ >= f || !BY($, Q)) return !1;

		let J = R.paintRemaining + R.localPaintIncrement,
			Y = Z6 - C0 - 5,
			Z = J % C0 == 0 && R.localPaintIncrement < -Y;

		if (!J || Z) return (yQ(), !1);

		let q = R.selectedColor, K = Q * f + $;

		if (o0[K] == 255) o6($, Q);

		if (D0.has(K)) {
			if (D0.get(K) == q) return !1;
		} else if (o0[K] == q.idx) return !1;

		if ((j8(K, q, $, Q), !D0.has(K))) R.addLocalPaintIncrement(-1);

		return (
			e0.push({
				x: $,
				y: Q,
				pos: K,
				oldColor: D0.get(K)?.idx,
				newColor: q.idx
			}),
			D0.set(K, q),
			!0
		);
	}

	async function u6() {
		U$();

		try {
			(E1.classList.add("progress"), await sZ());
		} finally {
			E1.classList.remove("progress");
		}
	}

	async function AY() {
		if ((U$(), _Q())) {
			if (!await i("Are you sure you want to cancel your changes?")) return;
		}

		aZ();
	}

	function _Q() {
		return D0.size > 200 || p0.length > 0;
	}

	var h1 = [], p0 = [], e0 = [];

	function iY() {
		(h1.push(e0), e0 = [], p0 = []);
	}

	function aY() {
		(h1 = [], p0 = [], e0 = []);
	}

	function vQ($, Q = !1) {
		let J = 0;

		for (let Y of $) if (Q) {
			let Z = Z0[Y.newColor];

			if (!D0.has(Y.pos)) J++;

			(D0.set(Y.pos, Z), j8(Y.pos, Z, Y.x, Y.y));
		} else if (typeof Y.oldColor == "number") {
			let Z = Z0[Y.oldColor];

			(D0.set(Y.pos, Z), j8(Y.pos, Z, Y.x, Y.y));
		} else {
			let Z = Z0[o0[Y.pos]];

			if ((D0.delete(Y.pos), Z)) D$(Y.x, Y.y, Z.hex); else c0.clearRect(Y.x, Y.y, 1, 1);

			J++;
		}

		return J;
	}

	function i6() {
		if (e0.length) {
			let J = vQ(e0);

			(R.addLocalPaintIncrement(J), p0 = [], p0.push(e0), e0 = []);

			return;
		}

		if (!h1.length) return;

		let $ = h1.pop(), Q = vQ($);

		(R.addLocalPaintIncrement(+Q), p0.push($));
	}

	function e6() {
		if (!p0.length) return;

		let $ = p0.pop(), Q = vQ($, !0);

		(h1.push($), R.addLocalPaintIncrement(-Q));
	}

	var gQ = new Set(), _8 = null, m1 = -1;

	async function rZ() {
		return (await (await m.cursor.data.$get()).json()).map((J) => ({ ...J, ...eZ(J), unlocked: gQ.has(J.id) }));
	}

	async function $5() {
		let Q = await (await m.cursor.inventory.$get()).json();

		gQ.clear();

		for (let J of Q.cursors) gQ.add(J);

		_8 = Q;
	}

	async function b$($) {
		let Q = await m.cursor.claimCursor.$post({ json: $ });

		if (Q.status != 200) return await Q.text();

		return (await $5(), null);
	}

	function iZ($, Q, J) {
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

	function eZ($) {
		let Q = $.unlock;

		if (!Q || Q.kind == "client") return { claimable: !1, tooltip: "You do not own this cursor!" };

		switch (Q.kind) {
			case "stat":
				{
					let J = _8.stats[Q.stat] ?? 0;

					return J >= Q.gte
						? { claimable: !0, tooltip: "Click to claim!" }
						: { claimable: !1, tooltip: iZ(Q.stat, J, Q.gte) };
				}

			case "purchase":
				return _8.coins >= Q.cost
					? { claimable: !0, tooltip: `Click to buy (${Q.cost} coins)` }
					: { claimable: !1, tooltip: `Costs ${Q.cost} coins` };

			case "code":
				return { claimable: !1, tooltip: "Unlocks with a secret code" };

			case "manual":
				return { claimable: !1, tooltip: "Awarded by moderators" };
		}
	}

	function $q($) {
		let Q = G("div.item.box", {
			id: `item${$.id}`,
			async onclick() {
				if ($.unlocked) xQ($); else if ($.claimable) {
					if ($.unlock?.kind == "purchase") {
						if (!await i(`Are you sure you want to buy this cursor for ${$.unlock.cost} coins?`)) return;
					}

					let J = await b$({ cursorId: $.id });

					if (J) {
						Y0(J, "Could not claim the cursor");

						return;
					}

					S8();
				}
			},

			onmouseover: () => {
				T8($.id);
			},

			onmouseleave: () => {
				T8(m1);
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

		return (Q.append(G("img", { src: f0($.id), draggable: !1 })), Q);
	}

	function xQ($) {
		if ($.id == m1) return;

		m1 = $.id;

		let Q = u("#inv-confirm-buttons");

		if ((
			s0(".inventory .item.active").forEach((J) => J.classList.remove("active")),
			u(`#item${$.id}`).classList.add("active"),
			$.id == R.user?.cursor_id
		)) Q.style.display = "none"; else Q.style.display = "";
	}

	function Qq() {
		let $ = R.currentSprayCanSize(),
			Q = Math.floor($ / y5) || 1;

		new _("Coins", G("div.coin-modal", G("p.c", "You have ", qJ(_8.coins), ` coin${T0(_8.coins)}`), G("p.notice", `You can exchange spray cans for coins! Every ${y5} paint is one coin.`), G("p.c", "Your current spray can contains ", G("b", $.toString()), " paint, ", "so you will receive ", G("b", Q.toString()), ` coin${T0($ == 0 ? 0 : Q)}.`), G("div.btn-container", G("button.btn", "Back", { onclick: S8 }), G("button.btn.primary", "Sell Spray Can", {
			async onclick() {
				if (R.localPaintIncrement != 0 || p0.length) {
					Y0("You cannot sell your current spray can while drawing! Please cancel or submit your local changes.");

					return;
				}

				if (Q == 0) {
					Y0("Empty spray can!");

					return;
				}

				if (!await i(`Sell your current spray can for ${T0(Q, "coin")}? The remainder will not be lost.`)) return S8();

				q0();

				let Y = await m.cursor.buyCoins.$post();

				if (!Y.ok) {
					N0(Y);

					return;
				}

				S8();
			}
		}))));
	}

	async function S8() {
		if (!R.user) return;

		(q0(), await $5());

		let $ = await rZ(),
			Q = $.toSorted((J, Y) => Y.unlocked - J.unlocked || Y.tier - J.tier || J.name.localeCompare(Y.name));

		(
			new _("User > Inventory", G("div.inventory.nopad", G("div.scroll.pad", G("p.notice", "Click on a cursor to select it! It will be shown to all users."), G("br"), G("div.items", Q.map($q)), G("p", "More cursors coming soon!")), G("div.box.outset.confirm-bar", G("button.btn", "Back", { onclick: () => p() }), G("button.btn", T0(Math.floor(_8.coins), "coin"), { onclick: Qq }), G(
				"div#inv-confirm-buttons",
				{ style: { display: "none" } },
				G("button.btn", "Cancel", {
					onclick() {
						xQ($[R.user.cursor_id]);
					}
				}),
				G("button.btn.primary", "Change", {
					async onclick() {
						(q0(), await P1({ cursorId: m1 }), p(!0));
					}
				})
			)))).onClose(() => {
				(m1 = -1, T8(R.user.cursor_id));
			}),

			requestAnimationFrame(() => {
				xQ($[R.user.cursor_id]);
			})
		);
	}

	window.freeCursor = async ($) => {
		let Q = await b$({ code: $ });

		if (Q) return (console.warn(`freeCursor: ${Q}`), !1);

		return (console.log("Unlocked! Open the inventory to equip it."), !0);

		let J = "You like looking for secrets, don't you? On an unrelated note, consider checking out the amazing people who made this site: https://yui.dev and https://github.com/brennenawana";
	};

	var pQ = new Map(), W$ = ($, Q) => pQ.set($, Q);

	W$(0, ($) => {
		if (typeof $.paintRemaining == "number") (
			R.nextRefill = $.nextRefillAt || 0,
			R.setPaintRemaining($.paintRemaining),
			i0()
		);
	});

	W$(8, ($) => {
		if ((F$.receive($), $.kind === "cursor_unlock")) $5();
	});

	W$(9, () => {});
	W$(10, () => {});

	W$(3, async ($) => {
		if ($.users) g7($.users);
		if ((O7($.cursorOverflow ?? 0), !$.cursors)) return;

		let Q = $.cursors,
			J = Q instanceof Uint8Array
				? Q
				: Q.buffer instanceof Uint8Array ? Q.buffer : new Uint8Array(Q.buffer ?? Q),
			Y = new DataView(J.buffer, J.byteOffset, J.byteLength);

		for (let Z = 0; Z + 8 <= J.length; Z += 8) {
			let q = Y.getUint32(Z, !0),
				K = Y.getUint32(Z + 4, !0);

			if ((p7(K, q, !0), _$ && Z % 4000 == 0)) await Q1();
		}
	});

	W$(5, ($) => x7($.id));

	W$(2, ($) => {
		(
			R.connectionId = $.id,
			$.users.forEach(ZQ),
			R.openAt = $.openAt ?? 0,
			R.clockOffset = $.now ? $.now - Date.now() : 0,
			eY()
		);
	});

	W$(6, ($) => {
		if ((
			$2($.id, $.message, $.pos, $.username, $.clanName, $.isGlobal, $.userId),
			$.nonce
		)) return;

		if (!V0.has($.id)) {
			qQ($.id);

			return;
		}

		J2(V0.get($.id), $.message);
	});

	W$(11, ($) => {
		Q2($.userId);
	});

	W$(7, async ($) => {
		let Q = 0;

		if ($.pixels) {
			let J = $.pixels,
				Y = J instanceof Uint8Array
					? J
					: J.buffer instanceof Uint8Array ? J.buffer : new Uint8Array(J.buffer ?? J),
				Z = new DataView(Y.buffer, Y.byteOffset, Y.byteLength);

			for (let q = 0; q + 5 <= Y.byteLength; q += 5) if ((
				O8(Z.getUint32(q, !0), Z.getUint8(q + 4)),
				Q++,
				_$ && Q % 500 == 0
			)) await Q1();
		}

		if (Q) VY();
	});

	function Y2() {
		let $ = G("div.list.box.outset", G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")), G("div.item.box.online-modal.online-modal-loading", G("i", "Loading online users…")), {
				style: {
					maxHeight: "600px",
					overflowY: "auto",
					justifyContent: "unset"
				}
			}),
			Q = new _("Online Users", G("div.leaderboard-modal", G("p.online-modal-count", G("b#online-modal-count", X0(R.onlinePlayers || 1)), " players online"), G("p.online-modal-viewers", G("b#online-modal-viewers", X0(R.onlineViewers || 0)), " watching"), $));

		q2().then((J) => {
			if (!Q.open) return;

			(
				Jq($, J.users ?? [], J.total ?? 0),
				Z2(J.viewers ?? R.onlineViewers)
			);
		}).catch(() => {
			if (!Q.open) return;

			let J = $.querySelector(".online-modal-loading");

			if (J) J.textContent = "Couldn't load the user list.";
		});
	}

	function Jq($, Q, J) {
		let Y = R.user?.username;

		if (Y) Q = Q.filter((j) => j.username !== Y);

		let Z = (j) => {
				let X = V0.get(j.id);

				return !!X && !X.partial && !X.hidden;
			},
			q = [...Q].sort((j, X) => {
				let P = Z(j) ? 0 : 1, k = Z(X) ? 0 : 1;

				if (P !== k) return P - k;

				return j.username.localeCompare(X.username);
			}),
			K = G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")),
			W = q.map((j) => G(
				"div.item.box.online-modal.online-modal-row.tooltip" + (Z(j) ? ".online-modal-visible" : ""),
				{
					onclick() {
						(p(), O0({ connId: j.id, username: j.username }));
					}
				},
				G("b.tooltip", j.username, { dataset: { tooltip: "Click to jump to the user!" } })
			));

		$.replaceChildren(K, ...W);

		let F = 1 + W.length, H = Math.max(0, J - F);

		if (H > 0) $.append(G("div.item.box.online-modal.online-modal-more", G("i", `+${X0(H)} more online`)));
	}

	function G2($, Q) {
		let J = u("#online-modal-count");

		if (J) J.textContent = X0($ || 1);
		if (Q !== void 0) Z2(Q);
	}

	function Z2($) {
		let Q = u("#online-modal-viewers");

		if (Q) Q.textContent = X0($ || 0);
	}

	var K2 = 0;

	async function cQ() {
		if ((clearTimeout(K2), !F0)) return;

		K2 = setTimeout(cQ, WJ);

		let $ = performance.now(),
			Q = await f$(0, {}, FJ),
			J = Q.connectedUsers ?? R.onlinePlayers,
			Y = Q.viewers ?? R.onlineViewers;

		if ((
			R.onlinePlayers = J,
			R.onlineViewers = Y,
			R.debug.ping = performance.now() - $,
			R.activeTool == 3
		)) {
			let Z = u("#online-player-counter");

			if (Z) Z.textContent = X0(J);
		}

		(G2(J, Y), W2(J, Y), y8());
	}

	function F2() {
		(setInterval(FY, J0.canvas.syncInterval), N1());
	}

	var Yq = (() => {
		let $ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;

		return (Q) => $.call(Q);
	})();

	function l$($) {
		return Yq($) === "Uint8Array";
	}

	function H4($) {
		return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && ($[Symbol.toStringTag] === "ArrayBuffer" || $[Symbol.toStringTag] === "SharedArrayBuffer");
	}

	function x8($) {
		return $ instanceof RegExp || Object.prototype.toString.call($) === "[object RegExp]";
	}

	function P4($) {
		return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && $[Symbol.toStringTag] === "Map";
	}

	function p8($) {
		return $ instanceof Date || Object.prototype.toString.call($) === "[object Date]";
	}

	function b0($, Q) {
		return JSON.stringify($, (J, Y) => {
			if (typeof Y === "bigint") return { $numberLong: `${Y}` }; else if (P4(Y)) return Object.fromEntries(Y);

			return Y;
		});
	}

	function Gq($) {
		if ($ != null && typeof $ === "object" && "stylize" in $ && typeof $.stylize === "function") return $.stylize;
	}

	var R8 = 7,
		f8 = Symbol.for("@@mdb.bson.version"),
		_1 = 2147483647,
		y1 = -2147483648,
		E2 = Math.pow(2, 63) - 1,
		w2 = -Math.pow(2, 63),
		h2 = Math.pow(2, 53),
		m2 = -Math.pow(2, 53),
		V4 = 1,
		N2 = 2,
		R4 = 3,
		B2 = 4,
		M4 = 5,
		Zq = 6,
		O2 = 7,
		S2 = 8,
		_2 = 9,
		z4 = 10,
		Y5 = 11,
		qq = 12,
		U4 = 13,
		y2 = 14,
		v2 = 15,
		S1 = 16,
		g2 = 17,
		k4 = 18,
		x2 = 19,
		p2 = 255,
		c2 = 127,
		Kq = 0,
		D4 = 4,
		Fq = Object.freeze({
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

	class D extends Error {
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

	class M8 extends D {
		get name() {
			return "BSONVersionError";
		}

		constructor() {
			super(`Unsupported BSON version, bson types must be from bson ${R8}.x.x`);
		}
	}

	class G5 extends D {
		get name() {
			return "BSONRuntimeError";
		}

		constructor($) {
			super($);
		}
	}

	class j$ extends D {
		get name() {
			return "BSONOffsetError";
		}

		offset;

		constructor($, Q, J) {
			super(`${$}. offset: ${Q}`, J);
			this.offset = Q;
		}
	}

	var j2, X2;

	function b2($, Q, J, Y) {
		if (Y) {
			j2 ??= new TextDecoder("utf8", { fatal: !0 });

			try {
				return j2.decode($.subarray(Q, J));
			} catch(Z) {
				throw new D("Invalid UTF-8 string in BSON document", { cause: Z });
			}
		}

		return (
			X2 ??= new TextDecoder("utf8", { fatal: !1 }),
			X2.decode($.subarray(Q, J))
		);
	}

	function f2($, Q, J) {
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

	function Wq($, Q, J) {
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

	function jq($) {
		return a0.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
	}

	function Xq($) {
		return crypto.getRandomValues(a0.allocate($));
	}

	var Hq = (() => {
			let { crypto: $ } = globalThis;

			if ($ != null && typeof $.getRandomValues === "function") return Xq; else return jq;
		})(),
		a0 = {
			isUint8Array: l$,
			toLocalBufferType($) {
				if (Buffer.isBuffer($)) return $;
				if (ArrayBuffer.isView($)) return Buffer.from($.buffer, $.byteOffset, $.byteLength);

				let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

				if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return Buffer.from($);

				throw new D("Cannot create Buffer from the passed potentialBuffer.");
			},

			allocate($) {
				return Buffer.alloc($);
			},

			allocateUnsafe($) {
				return Buffer.allocUnsafe($);
			},

			compare($, Q) {
				return a0.toLocalBufferType($).compare(Q);
			},

			concat($) {
				return Buffer.concat($);
			},

			copy($, Q, J, Y, Z) {
				return a0.toLocalBufferType($).copy(Q, J ?? 0, Y ?? 0, Z ?? $.length);
			},

			equals($, Q) {
				return a0.toLocalBufferType($).equals(Q);
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
				return a0.toLocalBufferType($).toString("base64");
			},

			fromISO88591($) {
				return Buffer.from($, "binary");
			},

			toISO88591($) {
				return a0.toLocalBufferType($).toString("binary");
			},

			fromHex($) {
				return Buffer.from($, "hex");
			},

			toHex($) {
				return a0.toLocalBufferType($).toString("hex");
			},

			toUTF8($, Q, J, Y) {
				let Z = J - Q <= 20 ? f2($, Q, J) : null;

				if (Z != null) return Z;

				let q = a0.toLocalBufferType($).toString("utf8", Q, J);

				if (Y) {
					for (let K = 0; K < q.length; K++) if (q.charCodeAt(K) === 65533) {
						b2($, Q, J, !0);

						break;
					}
				}

				return q;
			},

			utf8ByteLength($) {
				return Buffer.byteLength($, "utf8");
			},

			encodeUTF8Into($, Q, J) {
				let Y = Wq($, Q, J);

				if (Y != null) return Y;

				return a0.toLocalBufferType($).write(Q, J, void 0, "utf8");
			},
			randomBytes: Hq,
			swap32($) {
				return a0.toLocalBufferType($).swap32();
			}
		};

	function Pq() {
		let { navigator: $ } = globalThis;

		return typeof $ === "object" && $.product === "ReactNative";
	}

	function Vq($) {
		if ($ < 0) throw new RangeError(`The argument 'byteLength' is invalid. Received ${$}`);

		return V8.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
	}

	var Rq = (() => {
			let { crypto: $ } = globalThis;

			if ($ != null && typeof $.getRandomValues === "function") return (Q) => {
				return $.getRandomValues(V8.allocate(Q));
			}; else {
				if (Pq()) {
					let { console: Q } = globalThis;

					Q?.warn?.("BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.");
				}

				return Vq;
			}
		})(),
		H2 = /(\d|[a-f])/i,
		V8 = {
			isUint8Array: l$,
			toLocalBufferType($) {
				let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

				if (Q === "Uint8Array") return $;
				if (ArrayBuffer.isView($)) return new Uint8Array($.buffer.slice($.byteOffset, $.byteOffset + $.byteLength));
				if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return new Uint8Array($);

				throw new D("Cannot make a Uint8Array from passed potentialBuffer.");
			},

			allocate($) {
				if (typeof $ !== "number") throw new TypeError(`The "size" argument must be of type number. Received ${String($)}`);

				return new Uint8Array($);
			},

			allocateUnsafe($) {
				return V8.allocate($);
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
				if ($.length === 0) return V8.allocate(0);

				let Q = 0;

				for (let Z of $) Q += Z.length;

				let J = V8.allocate(Q), Y = 0;

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
				return btoa(V8.toISO88591($));
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

					if (!H2.test(Z)) break;
					if (!H2.test(q)) break;

					let K = Number.parseInt(`${Z}${q}`, 16);

					J.push(K);
				}

				return Uint8Array.from(J);
			},

			toHex($) {
				return Array.from($, (Q) => Q.toString(16).padStart(2, "0")).join("");
			},

			toUTF8($, Q, J, Y) {
				let Z = J - Q <= 20 ? f2($, Q, J) : null;

				if (Z != null) return Z;

				return b2($, Q, J, Y);
			},

			utf8ByteLength($) {
				return new TextEncoder().encode($).byteLength;
			},

			encodeUTF8Into($, Q, J) {
				let Y = new TextEncoder().encode(Q);

				return ($.set(Y, J), Y.byteLength);
			},
			randomBytes: Rq,
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
		Mq = typeof Buffer === "function" && Buffer.prototype?._isBuffer !== !0,
		U = Mq ? a0 : V8,
		L4 = Symbol.for("@@mdb.bson.type");

	class y0 {
		get [L4]() {
			return this._bsontype;
		}

		get [f8]() {
			return R8;
		}

		[Symbol.for("nodejs.util.inspect.custom")]($, Q, J) {
			return this.inspect($, Q, J);
		}
	}

	var c8 = new Float64Array(1),
		r = new Uint8Array(c8.buffer, 0, 8);

	c8[0] = -1;

	var bQ = r[7] === 0,
		b = {
			isBigEndian: bQ,
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

			getFloat64LE: bQ
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
						c8[0]
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
						c8[0]
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

			setFloat64LE: bQ
				? ($, Q, J) => {
					return (
						c8[0] = J,
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
						c8[0] = J,
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

	class o extends y0 {
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

			if ($ != null && typeof $ === "string" && !ArrayBuffer.isView($) && !H4($) && !Array.isArray($)) throw new D("Binary can only be constructed from Uint8Array or number[]");

			if ((
				this.sub_type = Q ?? o.BSON_BINARY_SUBTYPE_DEFAULT,
				$ == null
			)) (this.buffer = U.allocate(o.BUFFER_SIZE), this.position = 0); else (
				this.buffer = Array.isArray($) ? U.fromNumberArray($) : U.toLocalBufferType($),
				this.position = this.buffer.byteLength
			);
		}

		put($) {
			if (typeof $ === "string" && $.length !== 1) throw new D("only accepts single character String"); else if (typeof $ !== "number" && $.length !== 1) throw new D("only accepts single character Uint8Array or Array");

			let Q;

			if (typeof $ === "string") Q = $.charCodeAt(0); else if (typeof $ === "number") Q = $; else Q = $[0];
			if (Q < 0 || Q > 255) throw new D("only accepts number in a valid unsigned byte range 0-255");

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
			); else if (typeof $ === "string") throw new D("input cannot be string");
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
			if (($ = $ || {}, this.sub_type === o.SUBTYPE_VECTOR)) T$(this);

			let Q = U.toBase64(this.buffer),
				J = Number(this.sub_type).toString(16);

			if ($.legacy) return { $binary: Q, $type: J.length === 1 ? "0" + J : J };

			return {
				$binary: { base64: Q, subType: J.length === 1 ? "0" + J : J }
			};
		}

		toUUID() {
			if (this.sub_type === o.SUBTYPE_UUID) return new E0(this.buffer.subarray(0, this.position));

			throw new D(`Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${o.SUBTYPE_UUID}" is currently supported.`);
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
			} else if ("$uuid" in $) (Y = 4, J = E0.bytesFromString($.$uuid));

			if (!J) throw new D(`Unexpected Binary Extended JSON format ${JSON.stringify($)}`);

			return Y === D4 ? new E0(J) : new o(J, Y);
		}

		inspect($, Q, J) {
			J ??= b0;

			let Y = U.toBase64(this.buffer.subarray(0, this.position)),
				Z = J(Y, Q),
				q = J(this.sub_type, Q);

			return `Binary.createFromBase64(${Z}, ${q})`;
		}

		toInt8Array() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new D("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.Int8) throw new D("Binary datatype field is not Int8");

			return (
				T$(this),
				new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
			);
		}

		toFloat32Array() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new D("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.Float32) throw new D("Binary datatype field is not Float32");

			T$(this);

			let $ = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));

			if (b.isBigEndian) U.swap32($);

			return new Float32Array($.buffer);
		}

		toPackedBits() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new D("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new D("Binary datatype field is not packed bit");

			return (
				T$(this),
				new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
			);
		}

		toBits() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new D("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new D("Binary datatype field is not packed bit");

			T$(this);

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

			return (T$(Y), Y);
		}

		static fromFloat32Array($) {
			let Q = U.allocate($.byteLength + 2);

			(Q[0] = o.VECTOR_TYPE.Float32, Q[1] = 0);

			let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

			if ((Q.set(J, 2), b.isBigEndian)) U.swap32(new Uint8Array(Q.buffer, 2));

			let Y = new this(Q, this.SUBTYPE_VECTOR);

			return (T$(Y), Y);
		}

		static fromPackedBits($, Q = 0) {
			let J = U.allocate($.byteLength + 2);

			(J[0] = o.VECTOR_TYPE.PackedBit, J[1] = Q, J.set($, 2));

			let Y = new this(J, this.SUBTYPE_VECTOR);

			return (T$(Y), Y);
		}

		static fromBits($) {
			let Q = $.length + 7 >>> 3,
				J = new Uint8Array(Q + 2);

			J[0] = o.VECTOR_TYPE.PackedBit;

			let Y = $.length % 8;

			J[1] = Y === 0 ? 0 : 8 - Y;

			for (let Z = 0; Z < $.length; Z++) {
				let q = Z >>> 3, K = $[Z];

				if (K !== 0 && K !== 1) throw new D(`Invalid bit value at ${Z}: must be 0 or 1, found ${$[Z]}`);
				if (K === 0) continue;

				let W = 7 - Z % 8;

				J[q + 2] |= K << W;
			}

			return new this(J, o.SUBTYPE_VECTOR);
		}
	}

	function T$($) {
		if ($.sub_type !== o.SUBTYPE_VECTOR) return;

		let Q = $.position,
			J = $.buffer[0],
			Y = $.buffer[1];

		if ((J === o.VECTOR_TYPE.Float32 || J === o.VECTOR_TYPE.Int8) && Y !== 0) throw new D("Invalid Vector: padding must be zero for int8 and float32 vectors");

		if (J === o.VECTOR_TYPE.Float32) {
			if (Q !== 0 && Q - 2 !== 0 && (Q - 2) % 4 !== 0) throw new D("Invalid Vector: Float32 vector must contain a multiple of 4 bytes");
		}

		if (J === o.VECTOR_TYPE.PackedBit && Y !== 0 && Q === 2) throw new D("Invalid Vector: padding must be zero for packed bit vectors that are empty");
		if (J === o.VECTOR_TYPE.PackedBit && Y > 7) throw new D(`Invalid Vector: padding must be a value between 0 and 7. found: ${Y}`);
	}

	var fQ = 16,
		zq = /^[0-9A-F]{32}$/i,
		Uq = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;

	class E0 extends o {
		constructor($) {
			let Q;

			if ($ == null) Q = E0.generate(); else if ($ instanceof E0) Q = U.toLocalBufferType(new Uint8Array($.buffer)); else if (ArrayBuffer.isView($) && $.byteLength === fQ) Q = U.toLocalBufferType($); else if (typeof $ === "string") Q = E0.bytesFromString($); else throw new D("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");

			super(Q, D4);
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
			if ($ instanceof E0) return U.equals($.id, this.id);

			try {
				return U.equals(new E0($).id, this.id);
			} catch {
				return !1;
			}
		}

		toBinary() {
			return new o(this.id, o.SUBTYPE_UUID);
		}

		static generate() {
			let $ = U.randomBytes(fQ);

			return ($[6] = $[6] & 15 | 64, $[8] = $[8] & 63 | 128, $);
		}

		static isValid($) {
			if (!$) return !1;
			if (typeof $ === "string") return E0.isValidUUIDString($);
			if (l$($)) return $.byteLength === fQ;

			return $._bsontype === "Binary" && $.sub_type === this.SUBTYPE_UUID && $.buffer.byteLength === 16;
		}

		static createFromHexString($) {
			let Q = E0.bytesFromString($);

			return new E0(Q);
		}

		static createFromBase64($) {
			return new E0(U.fromBase64($));
		}

		static bytesFromString($) {
			if (!E0.isValidUUIDString($)) throw new D("UUID string representation must be 32 hex digits or canonical hyphenated representation");

			return U.fromHex($.replace(/-/g, ""));
		}

		static isValidUUIDString($) {
			return zq.test($) || Uq.test($);
		}

		inspect($, Q, J) {
			return (J ??= b0, `new UUID(${J(this.toHexString(), Q)})`);
		}
	}

	class d$ extends y0 {
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
			return new d$($.$code, $.$scope);
		}

		inspect($, Q, J) {
			J ??= b0;

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

	function l2($) {
		return $ != null && typeof $ === "object" && "$id" in $ && $.$id != null && "$ref" in $ && typeof $.$ref === "string" && (!("$db" in $) || ("$db" in $) && typeof $.$db === "string");
	}

	class E$ extends y0 {
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
				new E$($.$ref, $.$id, $.$db, Q)
			);
		}

		inspect($, Q, J) {
			J ??= b0;

			let Y = [
				J(this.namespace, Q),
				J(this.oid, Q),
				...this.db ? [J(this.db, Q)] : [],
				...Object.keys(this.fields).length > 0 ? [J(this.fields, Q)] : []
			];

			return (
				Y[1] = J === b0 ? `new ObjectId(${Y[1]})` : Y[1],
				`new DBRef(${Y.join(", ")})`
			);
		}
	}

	function u2($) {
		if ($ === "") return $;

		let Q = 0, J = $[Q] === "-", Y = $[Q] === "+";

		if (Y || J) Q += 1;

		let Z = !1;

		for (; Q < $.length && $[Q] === "0"; ++Q) Z = !0;

		if (!Z) return Y ? $.slice(1) : $;

		return `${J ? "-" : ""}${$.length === Q ? "0" : $.slice(Q)}`;
	}

	function kq($, Q) {
		Q = Q ?? 10;

		let J = ("0123456789abcdefghijklmnopqrstuvwxyz").slice(0, Q);

		return new RegExp(`[^-+${J}]`, "i").test($) ? !1 : $;
	}

	var t0 = void 0;

	try {
		t0 = new WebAssembly.Instance(
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

	var P2 = 65536,
		Dq = 16777216,
		b8 = P2 * P2,
		d2 = b8 * b8,
		V2 = d2 / 2,
		R2 = {},
		M2 = {},
		Lq = 20,
		Cq = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;

	class V extends y0 {
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

		static TWO_PWR_24 = V.fromInt(Dq);
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
					if ((Y = M2[$], Y)) return Y;
				}

				if ((J = V.fromBits($, ($ | 0) < 0 ? -1 : 0, !0), Z)) M2[$] = J;

				return J;
			} else {
				if (($ |= 0, Z = -128 <= $ && $ < 128)) {
					if ((Y = R2[$], Y)) return Y;
				}

				if ((J = V.fromBits($, $ < 0 ? -1 : 0, !1), Z)) R2[$] = J;

				return J;
			}
		}

		static fromNumber($, Q) {
			if (isNaN($)) return Q ? V.UZERO : V.ZERO;

			if (Q) {
				if ($ < 0) return V.UZERO;
				if ($ >= d2) return V.MAX_UNSIGNED_VALUE;
			} else {
				if ($ <= -V2) return V.MIN_VALUE;
				if ($ + 1 >= V2) return V.MAX_VALUE;
			}

			if ($ < 0) return V.fromNumber(-$, Q).neg();

			return V.fromBits($ % b8 | 0, $ / b8 | 0, Q);
		}

		static fromBigInt($, Q) {
			let J = 0xffffffffn, Y = 32n;

			return new V(Number($ & J), Number($ >> Y & J), Q);
		}

		static _fromString($, Q, J) {
			if ($.length === 0) throw new D("empty string");
			if (J < 2 || 36 < J) throw new D("radix");

			let Y;

			if ((Y = $.indexOf("-")) > 0) throw new D("interior hyphen"); else if (Y === 0) return V._fromString($.substring(1), Q, J).neg();

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
			if ((J ??= 10, $.trim() !== $)) throw new D(`Input: '${$}' contains leading and/or trailing whitespace`);
			if (!kq($, J)) throw new D(`Input: '${$}' contains invalid characters for radix: ${J}`);

			let Z = u2($), q = V._fromString(Z, Y, J);

			if (q.toString(J).toLowerCase() !== Z.toLowerCase()) throw new D(`Input: ${$} is not representable as ${q.unsigned ? "an unsigned" : "a signed"} 64-bit Long ${J != null ? `with radix: ${J}` : ""}`);

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
				j = 0,
				X = 0,
				P = 0;

			return (
				P += Z + F,
				X += P >>> 16,
				P &= 65535,
				X += Y + W,
				j += X >>> 16,
				X &= 65535,
				j += J + K,
				H += j >>> 16,
				j &= 65535,
				H += Q + q,
				H &= 65535,
				V.fromBits(X << 16 | P, H << 16 | j, this.unsigned)
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
			if ($.isZero()) throw new D("division by zero");

			if (t0) {
				if (!this.unsigned && this.high === -2147483648 && $.low === -1 && $.high === -1) return this;

				let Z = (this.unsigned ? t0.div_u : t0.div_s)(this.low, this.high, $.low, $.high);

				return V.fromBits(Z, t0.get_high(), this.unsigned);
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

			if (t0) {
				let Q = (this.unsigned ? t0.rem_u : t0.rem_s)(this.low, this.high, $.low, $.high);

				return V.fromBits(Q, t0.get_high(), this.unsigned);
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

			if (t0) {
				let k = t0.mul(this.low, this.high, $.low, $.high);

				return V.fromBits(k, t0.get_high(), this.unsigned);
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
				j = 0,
				X = 0,
				P = 0;

			return (
				P += Z * F,
				X += P >>> 16,
				P &= 65535,
				X += Y * F,
				j += X >>> 16,
				X &= 65535,
				X += Z * W,
				j += X >>> 16,
				X &= 65535,
				j += J * F,
				H += j >>> 16,
				j &= 65535,
				j += Y * W,
				H += j >>> 16,
				j &= 65535,
				j += Z * K,
				H += j >>> 16,
				j &= 65535,
				H += Q * F + J * W + Y * K + Z * q,
				H &= 65535,
				V.fromBits(X << 16 | P, H << 16 | j, this.unsigned)
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
			if (this.unsigned) return (this.high >>> 0) * b8 + (this.low >>> 0);

			return this.high * b8 + (this.low >>> 0);
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
			if (($ = $ || 10, $ < 2 || 36 < $)) throw new D("radix");
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

			if ($.$numberLong.length > Lq) throw new D("$numberLong string is too long");
			if (!Cq.test($.$numberLong)) throw new D(`$numberLong string "${$.$numberLong}" is in an invalid format`);

			if (J) {
				let q = BigInt($.$numberLong);

				return BigInt.asIntN(64, q);
			}

			let Z = V.fromString($.$numberLong);

			if (Y) return Z.toNumber();

			return Z;
		}

		inspect($, Q, J) {
			J ??= b0;

			let Y = J(this.toString(), Q),
				Z = this.unsigned ? `, ${J(this.unsigned, Q)}` : "";

			return `new Long(${Y}${Z})`;
		}
	}

	var Aq = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
		Tq = /^(\+|-)?(Infinity|inf)$/i,
		Iq = /^(\+|-)?NaN$/i,
		v8 = 6111,
		B1 = -6176,
		z2 = 6176,
		U2 = 34,
		lQ = U.fromNumberArray([124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		k2 = U.fromNumberArray([248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		D2 = U.fromNumberArray([120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		Eq = /^([-+])?(\d+)?$/,
		wq = 31,
		L2 = 16383,
		hq = 30,
		mq = 31;

	function C2($) {
		return !isNaN(parseInt($, 10));
	}

	function Nq($) {
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

	function Bq($, Q) {
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

	function Oq($, Q) {
		let J = $.high >>> 0, Y = Q.high >>> 0;

		if (J < Y) return !0; else if (J === Y) {
			let Z = $.low >>> 0, q = Q.low >>> 0;

			if (Z < q) return !0;
		}

		return !1;
	}

	function $$($, Q) {
		throw new D(`"${$}" is not a valid Decimal128 string - ${Q}`);
	}

	class B0 extends y0 {
		get _bsontype() {
			return "Decimal128";
		}

		bytes;

		constructor($) {
			super();

			if (typeof $ === "string") this.bytes = B0.fromString($).bytes; else if ($ instanceof Uint8Array || l$($)) {
				if ($.byteLength !== 16) throw new D("Decimal128 must take a Buffer of 16 bytes");

				this.bytes = $;
			} else throw new D("Decimal128 must take a Buffer or string");
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
				j = 0,
				X = [0],
				P = 0,
				k = 0,
				z = 0,
				A = 0,
				v = new V(0, 0),
				O = new V(0, 0),
				M = 0,
				L = 0;

			if ($.length >= 7000) throw new D("" + $ + " not a valid Decimal128 string");

			let y = $.match(Aq),
				w = $.match(Tq),
				h = $.match(Iq);

			if (!y && !w && !h || $.length === 0) throw new D("" + $ + " not a valid Decimal128 string");

			if (y) {
				let I = y[2], S = y[4], n = y[5], Q0 = y[6];

				if (S && Q0 === void 0) $$($, "missing exponent power");
				if (S && I === void 0) $$($, "missing exponent base");
				if (S === void 0 && (n || Q0)) $$($, "missing e before exponent");
			}

			if ($[L] === "+" || $[L] === "-") (Y = !0, J = $[L++] === "-");

			if (!C2($[L]) && $[L] !== ".") {
				if ($[L] === "i" || $[L] === "I") return new B0(J ? k2 : D2); else if ($[L] === "N") return new B0(lQ);
			}

			while (C2($[L]) || $[L] === ".") {
				if ($[L] === ".") {
					if (Z) $$($, "contains multiple periods");

					(Z = !0, L = L + 1);

					continue;
				}

				if (P < U2) {
					if ($[L] !== "0" || q) {
						if (!q) j = W;

						(q = !0, X[k++] = parseInt($[L], 10), P = P + 1);
					}
				}

				if (q) F = F + 1;
				if (Z) H = H + 1;

				(W = W + 1, L = L + 1);
			}

			if (Z && !W) throw new D("" + $ + " not a valid Decimal128 string");

			if ($[L] === "e" || $[L] === "E") {
				let I = $.substr(++L).match(Eq);

				if (!I || !I[2]) return new B0(lQ);

				(A = parseInt(I[0], 10), L = L + I[0].length);
			}

			if ($[L]) return new B0(lQ);
			if (!P) (X[0] = 0, F = 1, P = 1, K = 0); else if ((z = P - 1, K = F, K !== 1)) while ($[j + K - 1 + Number(Y) + Number(Z)] === "0") K = K - 1;
			if (A <= H && H > A + 16384) A = B1; else A = A - H;

			while (A > v8) {
				if ((z = z + 1, z >= U2)) {
					if (K === 0) {
						A = v8;

						break;
					}

					$$($, "overflow");
				}

				A = A - 1;
			}

			if (Q.allowRounding) {
				while (A < B1 || P < F) {
					if (z === 0 && K < P) {
						(A = B1, K = 0);

						break;
					}

					if (P < F) F = F - 1; else z = z - 1;

					if (A < v8) A = A + 1; else {
						if (X.join("").match(/^0+$/)) {
							A = v8;

							break;
						}

						$$($, "overflow");
					}
				}

				if (z + 1 < K) {
					let I = W;

					if (Z) (j = j + 1, I = I + 1);
					if (Y) (j = j + 1, I = I + 1);

					let S = parseInt($[j + z + 1], 10), n = 0;

					if (S >= 5) {
						if ((n = 1, S === 5)) {
							n = X[z] % 2 === 1 ? 1 : 0;

							for (let Q0 = j + z + 2; Q0 < I; Q0++) if (parseInt($[Q0], 10)) {
								n = 1;

								break;
							}
						}
					}

					if (n) {
						let Q0 = z;

						for (; Q0 >= 0; Q0--) if (++X[Q0] > 9) {
							if ((X[Q0] = 0, Q0 === 0)) if (A < v8) (A = A + 1, X[Q0] = 1); else return new B0(J ? k2 : D2);
						} else break;
					}
				}
			} else {
				while (A < B1 || P < F) {
					if (z === 0) {
						if (K === 0) {
							A = B1;

							break;
						}

						$$($, "exponent underflow");
					}

					if (P < F) {
						if ($[F - 1 + Number(Y) + Number(Z)] !== "0" && K !== 0) $$($, "inexact rounding");

						F = F - 1;
					} else {
						if (X[z] !== 0) $$($, "inexact rounding");

						z = z - 1;
					}

					if (A < v8) A = A + 1; else $$($, "overflow");
				}

				if (z + 1 < K) {
					if (Z) j = j + 1;
					if (Y) j = j + 1;
					if (parseInt($[j + z + 1], 10) !== 0) $$($, "inexact rounding");
				}
			}

			if ((v = V.fromNumber(0), O = V.fromNumber(0), K === 0)) (v = V.fromNumber(0), O = V.fromNumber(0)); else if (z < 17) {
				let I = 0;

				(O = V.fromNumber(X[I++]), v = new V(0, 0));

				for (; I <= z; I++) (
					O = O.multiply(V.fromNumber(10)),
					O = O.add(V.fromNumber(X[I]))
				);
			} else {
				let I = 0;

				v = V.fromNumber(X[I++]);

				for (; I <= z - 17; I++) (
					v = v.multiply(V.fromNumber(10)),
					v = v.add(V.fromNumber(X[I]))
				);

				O = V.fromNumber(X[I++]);

				for (; I <= z; I++) (
					O = O.multiply(V.fromNumber(10)),
					O = O.add(V.fromNumber(X[I]))
				);
			}

			let T = Bq(v, V.fromString("100000000000000000"));

			if ((T.low = T.low.add(O), Oq(T.low, O))) T.high = T.high.add(V.fromNumber(1));

			M = A + z2;

			let B = { low: V.fromNumber(0), high: V.fromNumber(0) };

			if (T.high.shiftRightUnsigned(49).and(V.fromNumber(1)).equals(V.fromNumber(1))) (
				B.high = B.high.or(V.fromNumber(3).shiftLeft(61)),
				B.high = B.high.or(V.fromNumber(M).and(V.fromNumber(16383).shiftLeft(47))),
				B.high = B.high.or(T.high.and(V.fromNumber(140737488355327)))
			); else (
				B.high = B.high.or(V.fromNumber(M & 16383).shiftLeft(49)),
				B.high = B.high.or(T.high.and(V.fromNumber(562949953421311)))
			);

			if ((B.low = T.low, J)) B.high = B.high.or(V.fromString("9223372036854775808"));

			let N = U.allocateUnsafe(16);

			return (
				L = 0,
				N[L++] = B.low.low & 255,
				N[L++] = B.low.low >> 8 & 255,
				N[L++] = B.low.low >> 16 & 255,
				N[L++] = B.low.low >> 24 & 255,
				N[L++] = B.low.high & 255,
				N[L++] = B.low.high >> 8 & 255,
				N[L++] = B.low.high >> 16 & 255,
				N[L++] = B.low.high >> 24 & 255,
				N[L++] = B.high.low & 255,
				N[L++] = B.high.low >> 8 & 255,
				N[L++] = B.high.low >> 16 & 255,
				N[L++] = B.high.low >> 24 & 255,
				N[L++] = B.high.high & 255,
				N[L++] = B.high.high >> 8 & 255,
				N[L++] = B.high.high >> 16 & 255,
				N[L++] = B.high.high >> 24 & 255,
				new B0(N)
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

			let j = this.bytes,
				X = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				P = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				k = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				z = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24;

			if ((
				Y = 0,
				({ low: new V(X, P), high: new V(k, z) }).high.lessThan(V.ZERO)
			)) H.push("-");

			let v = z >> 26 & wq;

			if (v >> 3 === 3) if (v === hq) return H.join("") + "Infinity"; else if (v === mq) return "NaN"; else ($ = z >> 15 & L2, q = 8 + (z >> 14 & 1)); else (q = z >> 14 & 7, $ = z >> 17 & L2);

			let O = $ - z2;

			if ((
				K.parts[0] = (z & 16383) + ((q & 15) << 14),
				K.parts[1] = k,
				K.parts[2] = P,
				K.parts[3] = X,
				K.parts[0] === 0 && K.parts[1] === 0 && K.parts[2] === 0 && K.parts[3] === 0
			)) Z = !0; else for (F = 3; F >= 0; F--) {
				let L = 0, y = Nq(K);

				if ((K = y.quotient, L = y.rem.low, !L)) continue;

				for (W = 8; W >= 0; W--) (J[F * 9 + W] = L % 10, L = Math.floor(L / 10));
			}

			if (Z) (Q = 1, J[Y] = 0); else {
				Q = 36;

				while (!J[Y]) (Q = Q - 1, Y = Y + 1);
			}

			let M = Q - 1 + O;

			if (M >= 34 || M <= -7 || O > 0) {
				if (Q > 34) {
					if ((H.push("0"), O > 0)) H.push(`E+${O}`); else if (O < 0) H.push(`E${O}`);

					return H.join("");
				}

				if ((H.push(`${J[Y++]}`), Q = Q - 1, Q)) H.push(".");

				for (let L = 0; L < Q; L++) H.push(`${J[Y++]}`);

				if ((H.push("E"), M > 0)) H.push(`+${M}`); else H.push(`${M}`);
			} else if (O >= 0) for (let L = 0; L < Q; L++) H.push(`${J[Y++]}`); else {
				let L = Q + O;

				if (L > 0) for (let y = 0; y < L; y++) H.push(`${J[Y++]}`); else H.push("0");

				H.push(".");

				while (L++ < 0) H.push("0");

				for (let y = 0; y < Q - Math.max(L - 1, 0); y++) H.push(`${J[Y++]}`);
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
			return (J ??= b0, `new Decimal128(${J(this.toString(), Q)})`);
		}
	}

	class Q$ extends y0 {
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

			if ($ === "NaN") return new Q$(NaN);
			if ($ === "Infinity") return new Q$(1 / 0);
			if ($ === "-Infinity") return new Q$(-1 / 0);
			if (!Number.isFinite(Q)) throw new D(`Input: ${$} is not representable as a Double`);
			if ($.trim() !== $) throw new D(`Input: '${$}' contains whitespace`);
			if ($ === "") throw new D("Input is an empty string");
			if ((/[^-0-9.+eE]/).test($)) throw new D(`Input: '${$}' is not in decimal or exponential notation`);

			return new Q$(Q);
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

			return Q && Q.relaxed ? J : new Q$(J);
		}

		inspect($, Q, J) {
			return (J ??= b0, `new Double(${J(this.value, Q)})`);
		}
	}

	class o$ extends y0 {
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
			let Q = u2($), J = Number($);

			if (_1 < J) throw new D(`Input: '${$}' is larger than the maximum value for Int32`); else if (y1 > J) throw new D(`Input: '${$}' is smaller than the minimum value for Int32`); else if (!Number.isSafeInteger(J)) throw new D(`Input: '${$}' is not a safe integer`); else if (J.toString() !== Q) throw new D(`Input: '${$}' is not a valid Int32 string`);

			return new o$(J);
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
			return Q && Q.relaxed ? parseInt($.$numberInt, 10) : new o$($.$numberInt);
		}

		inspect($, Q, J) {
			return (J ??= b0, `new Int32(${J(this.value, Q)})`);
		}
	}

	class l8 extends y0 {
		get _bsontype() {
			return "MaxKey";
		}

		toExtendedJSON() {
			return { $maxKey: 1 };
		}

		static fromExtendedJSON() {
			return new l8();
		}

		inspect() {
			return "new MaxKey()";
		}
	}

	class u8 extends y0 {
		get _bsontype() {
			return "MinKey";
		}

		toExtendedJSON() {
			return { $minKey: 1 };
		}

		static fromExtendedJSON() {
			return new u8();
		}

		inspect() {
			return "new MinKey()";
		}
	}

	var P8 = null, O1 = new WeakMap();

	class W0 extends y0 {
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
				if (typeof $.id !== "string" && !ArrayBuffer.isView($.id)) throw new D("Argument passed in must have an id that is of type string or Buffer");
				if ("toHexString" in $ && typeof $.toHexString === "function") Q = U.fromHex($.toHexString()); else Q = $.id;
			} else Q = $;

			if (Q == null) this.buffer = W0.generate(); else if (ArrayBuffer.isView(Q) && Q.byteLength === 12) this.buffer = U.toLocalBufferType(Q); else if (typeof Q === "string") if (W0.validateHexString(Q)) {
				if ((this.buffer = U.fromHex(Q), W0.cacheHexString)) O1.set(this, Q);
			} else throw new D("input must be a 24 character hex string, 12 byte Uint8Array, or an integer"); else throw new D("Argument passed in does not match the accepted types");
		}

		get id() {
			return this.buffer;
		}

		set id($) {
			if ((this.buffer = $, W0.cacheHexString)) O1.set(this, U.toHex($));
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
			if (W0.cacheHexString) {
				let Q = O1.get(this);

				if (Q) return Q;
			}

			let $ = U.toHex(this.id);

			if (W0.cacheHexString) O1.set(this, $);

			return $;
		}

		static getInc() {
			return W0.index = (W0.index + 1) % 16777215;
		}

		static generate($) {
			if (typeof $ !== "number") $ = Math.floor(Date.now() / 1000);

			let Q = W0.getInc(), J = U.allocateUnsafe(12);

			if ((b.setInt32BE(J, 0, $), P8 === null)) P8 = U.randomBytes(5);

			return (
				J[4] = P8[0],
				J[5] = P8[1],
				J[6] = P8[2],
				J[7] = P8[3],
				J[8] = P8[4],
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
			if (W0.is($)) return this.buffer[11] === $.buffer[11] && U.equals(this.buffer, $.buffer);
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
			return new W0();
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

			return (b.setInt32BE(Q, 0, $), new W0(Q));
		}

		static createFromHexString($) {
			if ($?.length !== 24) throw new D("hex string must be 24 characters");

			return new W0(U.fromHex($));
		}

		static createFromBase64($) {
			if ($?.length !== 16) throw new D("base64 string must be 16 characters");

			return new W0(U.fromBase64($));
		}

		static isValid($) {
			if ($ == null) return !1;
			if (typeof $ === "string") return W0.validateHexString($);

			try {
				return (new W0($), !0);
			} catch {
				return !1;
			}
		}

		toExtendedJSON() {
			if (this.toHexString) return { $oid: this.toHexString() };

			return { $oid: this.toString("hex") };
		}

		static fromExtendedJSON($) {
			return new W0($.$oid);
		}

		isCached() {
			return W0.cacheHexString && O1.has(this);
		}

		inspect($, Q, J) {
			return (J ??= b0, `new ObjectId(${J(this.toHexString(), Q)})`);
		}
	}

	function Q5($, Q, J) {
		let Y = 5;

		if (Array.isArray($)) for (let Z = 0; Z < $.length; Z++) Y += A2(Z.toString(), $[Z], Q, !0, J); else {
			if (typeof $?.toBSON === "function") $ = $.toBSON();

			for (let Z of Object.keys($)) Y += A2(Z, $[Z], Q, !1, J);
		}

		return Y;
	}

	function A2($, Q, J = !1, Y = !1, Z = !1) {
		if (typeof Q?.toBSON === "function") Q = Q.toBSON();

		switch (typeof Q) {
			case "string":
				return 1 + U.utf8ByteLength($) + 1 + 4 + U.utf8ByteLength(Q) + 1;

			case "number":
				if (Math.floor(Q) === Q && Q >= m2 && Q <= h2) if (Q >= y1 && Q <= _1) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 5; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9;

			case "undefined":
				if (Y || !Z) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1;
				return 0;

			case "boolean":
				return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 2;

			case "object":
				if (Q != null && typeof Q._bsontype === "string" && Q[f8] !== R8) throw new M8(); else if (Q == null || Q._bsontype === "MinKey" || Q._bsontype === "MaxKey") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1; else if (Q._bsontype === "ObjectId") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 13; else if (Q instanceof Date || p8(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else if (ArrayBuffer.isView(Q) || Q instanceof ArrayBuffer || H4(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 6 + Q.byteLength; else if (Q._bsontype === "Long" || Q._bsontype === "Double" || Q._bsontype === "Timestamp") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else if (Q._bsontype === "Decimal128") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 17; else if (Q._bsontype === "Code") if (Q.scope != null && Object.keys(Q.scope).length > 0) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + 4 + U.utf8ByteLength(Q.code.toString()) + 1 + Q5(Q.scope, J, Z); else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + U.utf8ByteLength(Q.code.toString()) + 1; else if (Q._bsontype === "Binary") {
					let q = Q;

					if (q.sub_type === o.SUBTYPE_BYTE_ARRAY) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1 + 4); else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1);
				} else if (Q._bsontype === "Symbol") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + U.utf8ByteLength(Q.value) + 4 + 1 + 1; else if (Q._bsontype === "DBRef") {
					let q = Object.assign({ $ref: Q.collection, $id: Q.oid }, Q.fields);

					if (Q.db != null) q.$db = Q.db;

					return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + Q5(q, J, Z);
				} else if (Q instanceof RegExp || x8(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + U.utf8ByteLength(Q.source) + 1 + (Q.global ? 1 : 0) + (Q.ignoreCase ? 1 : 0) + (Q.multiline ? 1 : 0) + 1; else if (Q._bsontype === "BSONRegExp") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + U.utf8ByteLength(Q.pattern) + 1 + U.utf8ByteLength(Q.options) + 1; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + Q5(Q, J, Z) + 1;

			case "function":
				if (J) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + U.utf8ByteLength(Q.toString()) + 1;
				return 0;

			case "bigint":
				return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9;

			case "symbol":
				return 0;

			default:
				throw new D(`Unrecognized JS type: ${typeof Q}`);
		}
	}

	function Sq($) {
		return $.split("").sort().join("");
	}

	class J$ extends y0 {
		get _bsontype() {
			return "BSONRegExp";
		}

		pattern;
		options;

		constructor($, Q) {
			super();

			if ((
				this.pattern = $,
				this.options = Sq(Q ?? ""),
				this.pattern.indexOf("\x00") !== -1
			)) throw new D(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);

			if (this.options.indexOf("\x00") !== -1) throw new D(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);

			for (let J = 0; J < this.options.length; J++) if (!(this.options[J] === "i" || this.options[J] === "m" || this.options[J] === "x" || this.options[J] === "l" || this.options[J] === "s" || this.options[J] === "u")) throw new D(`The regular expression option [${this.options[J]}] is not supported`);
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
			} else return new J$($.$regex, J$.parseOptions($.$options));

			if ("$regularExpression" in $) return new J$($.$regularExpression.pattern, J$.parseOptions($.$regularExpression.options));

			throw new D(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify($)}`);
		}

		inspect($, Q, J) {
			let Y = Gq(Q) ?? ((K) => K);

			J ??= b0;

			let Z = Y(J(this.pattern), "regexp"),
				q = Y(J(this.options), "regexp");

			return `new BSONRegExp(${Z}, ${q})`;
		}
	}

	class d8 extends y0 {
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
			return new d8($.$symbol);
		}

		inspect($, Q, J) {
			return (J ??= b0, `new BSONSymbol(${J(this.value, Q)})`);
		}
	}

	var _q = V;

	class X$ extends _q {
		get _bsontype() {
			return "Timestamp";
		}

		get [L4]() {
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
				if (typeof $.t !== "number" && (typeof $.t !== "object" || $.t._bsontype !== "Int32")) throw new D("Timestamp constructed from { t, i } must provide t as a number");
				if (typeof $.i !== "number" && (typeof $.i !== "object" || $.i._bsontype !== "Int32")) throw new D("Timestamp constructed from { t, i } must provide i as a number");

				let Q = Number($.t), J = Number($.i);

				if (Q < 0 || Number.isNaN(Q)) throw new D("Timestamp constructed from { t, i } must provide a positive t");
				if (J < 0 || Number.isNaN(J)) throw new D("Timestamp constructed from { t, i } must provide a positive i");
				if (Q > 4294967295) throw new D("Timestamp constructed from { t, i } must provide t equal or less than uint32 max");
				if (J > 4294967295) throw new D("Timestamp constructed from { t, i } must provide i equal or less than uint32 max");

				super(J, Q, !0);
			} else throw new D("A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }");
		}

		toJSON() {
			return { $timestamp: this.toString() };
		}

		static fromInt($) {
			return new X$(V.fromInt($, !0));
		}

		static fromNumber($) {
			return new X$(V.fromNumber($, !0));
		}

		static fromBits($, Q) {
			return new X$({ i: $, t: Q });
		}

		static fromString($, Q) {
			return new X$(V.fromString($, !0, Q));
		}

		toExtendedJSON() {
			return { $timestamp: { t: this.t, i: this.i } };
		}

		static fromExtendedJSON($) {
			let Q = V.isLong($.$timestamp.i) ? $.$timestamp.i.getLowBitsUnsigned() : $.$timestamp.i,
				J = V.isLong($.$timestamp.t) ? $.$timestamp.t.getLowBitsUnsigned() : $.$timestamp.t;

			return new X$({ t: J, i: Q });
		}

		inspect($, Q, J) {
			J ??= b0;

			let Y = J(this.t, Q), Z = J(this.i, Q);

			return `new Timestamp({ t: ${Y}, i: ${Z} })`;
		}
	}

	var yq = V.fromNumber(h2), vq = V.fromNumber(m2);

	function o2($, Q, J) {
		Q = Q == null ? {} : Q;

		let Y = Q && Q.index ? Q.index : 0,
			Z = b.getInt32LE($, Y);

		if (Z < 5) throw new D(`bson size must be >= 5, is ${Z}`);
		if (Q.allowObjectSmallerThanBufferSize && $.length < Z) throw new D(`buffer length ${$.length} must be >= bson size ${Z}`);
		if (!Q.allowObjectSmallerThanBufferSize && $.length !== Z) throw new D(`buffer length ${$.length} must === bson size ${Z}`);
		if (Z + Y > $.byteLength) throw new D(`(bson size ${Z} + options.index ${Y} must be <= buffer length ${$.byteLength})`);
		if ($[Y + Z - 1] !== 0) throw new D("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");

		return J5($, Y, Q, J);
	}

	var gq = /^\$ref$|^\$id$|^\$db$/;

	function J5($, Q, J, Y = !1) {
		let Z = J.fieldsAsRaw == null ? null : J.fieldsAsRaw,
			q = J.raw == null ? !1 : J.raw,
			K = typeof J.bsonRegExp === "boolean" ? J.bsonRegExp : !1,
			W = J.promoteBuffers ?? !1,
			F = J.promoteLongs ?? !0,
			H = J.promoteValues ?? !0,
			j = J.useBigInt64 ?? !1;

		if (j && !H) throw new D("Must either request bigint or Long for int64 deserialization");
		if (j && !F) throw new D("Must either request bigint or Long for int64 deserialization");

		let X = J.validation == null ? { utf8: !0 } : J.validation,
			P = !0,
			k,
			z,
			A = X.utf8;

		if (typeof A === "boolean") k = A; else {
			P = !1;

			let w = Object.keys(A).map(function (h) {
				return A[h];
			});

			if (w.length === 0) throw new D("UTF-8 validation setting cannot be empty");
			if (typeof w[0] !== "boolean") throw new D("Invalid UTF-8 validation option, must specify boolean values");
			if ((k = w[0], !w.every((h) => h === k))) throw new D("Invalid UTF-8 validation option - keys must be all true or all false");
		}

		if (!P) {
			z = new Set();

			for (let w of Object.keys(A)) z.add(w);
		}

		let v = Q;

		if ($.length < 5) throw new D("corrupt bson message < 5 bytes long");

		let O = b.getInt32LE($, Q);

		if ((Q += 4, O < 5 || O > $.length)) throw new D("corrupt bson message");

		let M = Y ? [] : {}, L = 0, y = Y ? !1 : null;

		while (!0) {
			let w = $[Q++];

			if (w === 0) break;

			let h = Q;

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.byteLength) throw new D("Bad BSON Document: illegal CString");

			let T = Y ? L++ : U.toUTF8($, Q, h, !1), B = !0;

			if (P || z?.has(T)) B = k; else B = !k;
			if (y !== !1 && T[0] === "$") y = gq.test(T);

			let N;

			if ((Q = h + 1, w === N2)) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new D("bad string length in bson");

				(N = U.toUTF8($, Q, Q + I - 1, B), Q = Q + I);
			} else if (w === O2) {
				let I = U.allocateUnsafe(12);

				for (let S = 0; S < 12; S++) I[S] = $[Q + S];

				(N = new W0(I), Q = Q + 12);
			} else if (w === S1 && H === !1) (N = new o$(b.getInt32LE($, Q)), Q += 4); else if (w === S1) (N = b.getInt32LE($, Q), Q += 4); else if (w === V4) {
				if ((N = b.getFloat64LE($, Q), Q += 8, H === !1)) N = new Q$(N);
			} else if (w === _2) {
				let I = b.getInt32LE($, Q),
					S = b.getInt32LE($, Q + 4);

				(Q += 8, N = new Date(new V(I, S).toNumber()));
			} else if (w === S2) {
				if ($[Q] !== 0 && $[Q] !== 1) throw new D("illegal boolean type value");

				N = $[Q++] === 1;
			} else if (w === R4) {
				let I = Q, S = b.getInt32LE($, Q);

				if (S <= 0 || S > $.length - Q) throw new D("bad embedded document length in bson");

				if (q) N = $.subarray(Q, Q + S); else {
					let n = J;

					if (!P) n = { ...J, validation: { utf8: B } };

					N = J5($, I, n, !1);
				}

				Q = Q + S;
			} else if (w === B2) {
				let I = Q,
					S = b.getInt32LE($, Q),
					n = J,
					Q0 = Q + S;

				if (Z && Z[T]) n = { ...J, raw: !0 };
				if (!P) n = { ...n, validation: { utf8: B } };
				if ((N = J5($, I, n, !0), Q = Q + S, $[Q - 1] !== 0)) throw new D("invalid array terminator byte");
				if (Q !== Q0) throw new D("corrupted array bson");
			} else if (w === Zq) N = void 0; else if (w === z4) N = null; else if (w === k4) if (j) (N = b.getBigInt64LE($, Q), Q += 8); else {
				let I = b.getInt32LE($, Q),
					S = b.getInt32LE($, Q + 4);

				Q += 8;

				let n = new V(I, S);

				if (F && H === !0) N = n.lessThanOrEqual(yq) && n.greaterThanOrEqual(vq) ? n.toNumber() : n; else N = n;
			} else if (w === x2) {
				let I = U.allocateUnsafe(16);

				for (let S = 0; S < 16; S++) I[S] = $[Q + S];

				(Q = Q + 16, N = new B0(I));
			} else if (w === M4) {
				let I = b.getInt32LE($, Q);

				Q += 4;

				let S = I, n = $[Q++];

				if (I < 0) throw new D("Negative binary type element size found");
				if (I > $.byteLength) throw new D("Binary type size larger than document size");

				if (n === o.SUBTYPE_BYTE_ARRAY) {
					if ((I = b.getInt32LE($, Q), Q += 4, I < 0)) throw new D("Negative binary type element size found for subtype 0x02");
					if (I > S - 4) throw new D("Binary type with subtype 0x02 contains too long binary size");
					if (I < S - 4) throw new D("Binary type with subtype 0x02 contains too short binary size");
				}

				if (W && H) N = U.toLocalBufferType($.subarray(Q, Q + I)); else if ((
					N = new o($.subarray(Q, Q + I), n),
					n === D4 && E0.isValid(N)
				)) N = N.toUUID();

				Q = Q + I;
			} else if (w === Y5 && K === !1) {
				h = Q;

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new D("Bad BSON Document: illegal CString");

				let I = U.toUTF8($, Q, h, !1);

				(Q = h + 1, h = Q);

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new D("Bad BSON Document: illegal CString");

				let S = U.toUTF8($, Q, h, !1);

				Q = h + 1;

				let n = new Array(S.length);

				for (h = 0; h < S.length; h++) switch (S[h]) {
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

				N = new RegExp(I, n.join(""));
			} else if (w === Y5 && K === !0) {
				h = Q;

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new D("Bad BSON Document: illegal CString");

				let I = U.toUTF8($, Q, h, !1);

				(Q = h + 1, h = Q);

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new D("Bad BSON Document: illegal CString");

				let S = U.toUTF8($, Q, h, !1);

				(Q = h + 1, N = new J$(I, S));
			} else if (w === y2) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new D("bad string length in bson");

				let S = U.toUTF8($, Q, Q + I - 1, B);

				(N = H ? S : new d8(S), Q = Q + I);
			} else if (w === g2) (
				N = new X$({ i: b.getUint32LE($, Q), t: b.getUint32LE($, Q + 4) }),
				Q += 8
			); else if (w === p2) N = new u8(); else if (w === c2) N = new l8(); else if (w === U4) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new D("bad string length in bson");

				let S = U.toUTF8($, Q, Q + I - 1, B);

				(N = new d$(S), Q = Q + I);
			} else if (w === v2) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I < 13)) throw new D("code_w_scope total size shorter minimum expected length");

				let S = b.getInt32LE($, Q);

				if ((Q += 4, S <= 0 || S > $.length - Q || $[Q + S - 1] !== 0)) throw new D("bad string length in bson");

				let n = U.toUTF8($, Q, Q + S - 1, B);

				Q = Q + S;

				let Q0 = Q,
					l = b.getInt32LE($, Q),
					e = J5($, Q0, J, !1);

				if ((Q = Q + l, I < 8 + l + S)) throw new D("code_w_scope total size is too short, truncating scope");
				if (I > 8 + l + S) throw new D("code_w_scope total size is too long, clips outer document");

				N = new d$(n, e);
			} else if (w === qq) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new D("bad string length in bson");

				let S = U.toUTF8($, Q, Q + I - 1, B);

				Q = Q + I;

				let n = U.allocateUnsafe(12);

				for (let l = 0; l < 12; l++) n[l] = $[Q + l];

				let Q0 = new W0(n);

				(Q = Q + 12, N = new E$(S, Q0));
			} else throw new D(`Detected unknown BSON type ${w.toString(16)} for fieldname "${T}"`);

			if (T === "__proto__") Object.defineProperty(M, T, { value: N, writable: !0, enumerable: !0, configurable: !0 }); else M[T] = N;
		}

		if (O !== Q - v) {
			if (Y) throw new D("corrupt array bson");

			throw new D("corrupt object bson");
		}

		if (!y) return M;

		if (l2(M)) {
			let w = Object.assign({}, M);

			return (
				delete w.$ref,
				delete w.$id,
				delete w.$db,
				new E$(M.$ref, M.$id, M.$db, w)
			);
		}

		return M;
	}

	var Z5 = /\x00/,
		T2 = new Set(["$db", "$ref", "$id", "$clusterTime"]);

	function uQ($, Q, J, Y) {
		$[Y++] = N2;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z + 1, $[Y - 1] = 0);

		let q = U.encodeUTF8Into($, J, Y + 4);

		return (b.setInt32LE($, Y, q + 1), Y = Y + 4 + q, $[Y++] = 0, Y);
	}

	function dQ($, Q, J, Y) {
		let q = !Object.is(J, -0) && Number.isSafeInteger(J) && J <= _1 && J >= y1 ? S1 : V4;

		$[Y++] = q;

		let K = U.encodeUTF8Into($, Q, Y);

		if ((Y = Y + K, $[Y++] = 0, q === S1)) Y += b.setInt32LE($, Y, J); else Y += b.setFloat64LE($, Y, J);

		return Y;
	}

	function oQ($, Q, J, Y) {
		$[Y++] = k4;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y += Z, $[Y++] = 0, Y += b.setBigInt64LE($, Y, J), Y);
	}

	function g8($, Q, J, Y) {
		$[Y++] = z4;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y);
	}

	function nQ($, Q, J, Y) {
		$[Y++] = S2;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, $[Y++] = J ? 1 : 0, Y);
	}

	function tQ($, Q, J, Y) {
		$[Y++] = _2;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = V.fromNumber(J.getTime()),
			K = q.getLowBits(),
			W = q.getHighBits();

		return (Y += b.setInt32LE($, Y, K), Y += b.setInt32LE($, Y, W), Y);
	}

	function aQ($, Q, J, Y) {
		$[Y++] = Y5;

		let Z = U.encodeUTF8Into($, Q, Y);

		if ((
			Y = Y + Z,
			$[Y++] = 0,
			J.source && J.source.match(Z5) != null
		)) throw new D("value " + J.source + " must not contain null bytes");

		if ((
			Y = Y + U.encodeUTF8Into($, J.source, Y),
			$[Y++] = 0,
			J.ignoreCase
		)) $[Y++] = 105;

		if (J.global) $[Y++] = 115;
		if (J.multiline) $[Y++] = 109;

		return ($[Y++] = 0, Y);
	}

	function sQ($, Q, J, Y) {
		$[Y++] = Y5;

		let Z = U.encodeUTF8Into($, Q, Y);

		if ((Y = Y + Z, $[Y++] = 0, J.pattern.match(Z5) != null)) throw new D("pattern " + J.pattern + " must not contain null bytes");

		(Y = Y + U.encodeUTF8Into($, J.pattern, Y), $[Y++] = 0);

		let q = J.options.split("").sort().join("");

		return (Y = Y + U.encodeUTF8Into($, q, Y), $[Y++] = 0, Y);
	}

	function rQ($, Q, J, Y) {
		if (J === null) $[Y++] = z4; else if (J._bsontype === "MinKey") $[Y++] = p2; else $[Y++] = c2;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y);
	}

	function iQ($, Q, J, Y) {
		$[Y++] = O2;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += J.serializeInto($, Y), Y);
	}

	function eQ($, Q, J, Y) {
		$[Y++] = M4;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.length;

		if ((Y += b.setInt32LE($, Y, q), $[Y++] = Kq, q <= 16)) for (let K = 0; K < q; K++) $[Y + K] = J[K]; else $.set(J, Y);

		return (Y = Y + q, Y);
	}

	function $4($, Q, J, Y, Z, q, K, W, F) {
		if (F.has(J)) throw new D("Cannot convert circular structure to BSON");

		(F.add(J), $[Y++] = Array.isArray(J) ? B2 : R4);

		let H = U.encodeUTF8Into($, Q, Y);

		(Y = Y + H, $[Y++] = 0);

		let j = v1($, J, Z, Y, q + 1, K, W, F);

		return (F.delete(J), j);
	}

	function Q4($, Q, J, Y) {
		$[Y++] = x2;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		for (let q = 0; q < 16; q++) $[Y + q] = J.bytes[q];

		return Y + 16;
	}

	function J4($, Q, J, Y) {
		$[Y++] = J._bsontype === "Long" ? k4 : g2;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.getLowBits(), K = J.getHighBits();

		return (Y += b.setInt32LE($, Y, q), Y += b.setInt32LE($, Y, K), Y);
	}

	function Y4($, Q, J, Y) {
		(J = J.valueOf(), $[Y++] = S1);

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += b.setInt32LE($, Y, J), Y);
	}

	function G4($, Q, J, Y) {
		$[Y++] = V4;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += b.setFloat64LE($, Y, J.value), Y);
	}

	function Z4($, Q, J, Y) {
		$[Y++] = U4;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.toString(),
			K = U.encodeUTF8Into($, q, Y + 4) + 1;

		return (b.setInt32LE($, Y, K), Y = Y + 4 + K - 1, $[Y++] = 0, Y);
	}

	function q4($, Q, J, Y, Z = !1, q = 0, K = !1, W = !0, F) {
		if (J.scope && typeof J.scope === "object") {
			$[Y++] = v2;

			let H = U.encodeUTF8Into($, Q, Y);

			(Y = Y + H, $[Y++] = 0);

			let j = Y, X = J.code;

			Y = Y + 4;

			let P = U.encodeUTF8Into($, X, Y + 4) + 1;

			(b.setInt32LE($, Y, P), $[Y + 4 + P - 1] = 0, Y = Y + P + 4);

			let k = v1($, J.scope, Z, Y, q + 1, K, W, F);

			Y = k - 1;

			let z = k - j;

			(j += b.setInt32LE($, j, z), $[Y++] = 0);
		} else {
			$[Y++] = U4;

			let H = U.encodeUTF8Into($, Q, Y);

			(Y = Y + H, $[Y++] = 0);

			let j = J.code.toString(),
				X = U.encodeUTF8Into($, j, Y + 4) + 1;

			(b.setInt32LE($, Y, X), Y = Y + 4 + X - 1, $[Y++] = 0);
		}

		return Y;
	}

	function K4($, Q, J, Y) {
		$[Y++] = M4;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let { buffer: q, position: K } = J;

		if (J.sub_type === o.SUBTYPE_BYTE_ARRAY) K = K + 4;

		if ((
			Y += b.setInt32LE($, Y, K),
			$[Y++] = J.sub_type,
			J.sub_type === o.SUBTYPE_BYTE_ARRAY
		)) (K = K - 4, Y += b.setInt32LE($, Y, K));

		if (J.sub_type === o.SUBTYPE_VECTOR) T$(J);
		if (K <= 16) for (let W = 0; W < K; W++) $[Y + W] = q[W]; else $.set(q, Y);

		return (Y = Y + J.position, Y);
	}

	function F4($, Q, J, Y) {
		$[Y++] = y2;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = U.encodeUTF8Into($, J.value, Y + 4) + 1;

		return (b.setInt32LE($, Y, q), Y = Y + 4 + q - 1, $[Y++] = 0, Y);
	}

	function W4($, Q, J, Y, Z, q, K) {
		$[Y++] = R4;

		let W = U.encodeUTF8Into($, Q, Y);

		(Y = Y + W, $[Y++] = 0);

		let F = Y,
			H = { $ref: J.collection || J.namespace, $id: J.oid };

		if (J.db != null) H.$db = J.db;

		H = Object.assign(H, J.fields);

		let j = v1($, H, !1, Y, Z + 1, q, !0, K),
			X = j - F;

		return (F += b.setInt32LE($, Y, X), j);
	}

	function v1($, Q, J, Y, Z, q, K, W) {
		if (W == null) {
			if (Q == null) return ($[0] = 5, $[1] = 0, $[2] = 0, $[3] = 0, $[4] = 0, 5);
			if (Array.isArray(Q)) throw new D("serialize does not support an array as the root input");
			if (typeof Q !== "object") throw new D("serialize does not support non-object as the root input"); else if ("_bsontype" in Q && typeof Q._bsontype === "string") throw new D("BSON types cannot be serialized as a document"); else if (p8(Q) || x8(Q) || l$(Q) || H4(Q)) throw new D("date, regexp, typedarray, and arraybuffer cannot be BSON documents");

			W = new Set();
		}

		W.add(Q);

		let F = Y + 4;

		if (Array.isArray(Q)) for (let j = 0; j < Q.length; j++) {
			let X = `${j}`, P = Q[j];

			if (typeof P?.toBSON === "function") P = P.toBSON();

			let k = typeof P;

			if (P === void 0) F = g8($, X, P, F); else if (P === null) F = g8($, X, P, F); else if (k === "string") F = uQ($, X, P, F); else if (k === "number") F = dQ($, X, P, F); else if (k === "bigint") F = oQ($, X, P, F); else if (k === "boolean") F = nQ($, X, P, F); else if (k === "object" && P._bsontype == null) if (P instanceof Date || p8(P)) F = tQ($, X, P, F); else if (P instanceof Uint8Array || l$(P)) F = eQ($, X, P, F); else if (P instanceof RegExp || x8(P)) F = aQ($, X, P, F); else F = $4($, X, P, F, J, Z, q, K, W); else if (k === "object") {
				if (P[f8] !== R8) throw new M8(); else if (P._bsontype === "ObjectId") F = iQ($, X, P, F); else if (P._bsontype === "Decimal128") F = Q4($, X, P, F); else if (P._bsontype === "Long" || P._bsontype === "Timestamp") F = J4($, X, P, F); else if (P._bsontype === "Double") F = G4($, X, P, F); else if (P._bsontype === "Code") F = q4($, X, P, F, J, Z, q, K, W); else if (P._bsontype === "Binary") F = K4($, X, P, F); else if (P._bsontype === "BSONSymbol") F = F4($, X, P, F); else if (P._bsontype === "DBRef") F = W4($, X, P, F, Z, q, W); else if (P._bsontype === "BSONRegExp") F = sQ($, X, P, F); else if (P._bsontype === "Int32") F = Y4($, X, P, F); else if (P._bsontype === "MinKey" || P._bsontype === "MaxKey") F = rQ($, X, P, F); else if (typeof P._bsontype !== "undefined") throw new D(`Unrecognized or invalid _bsontype: ${String(P._bsontype)}`);
			} else if (k === "function" && q) F = Z4($, X, P, F);
		} else if (Q instanceof Map || P4(Q)) {
			let j = Q.entries(), X = !1;

			while (!X) {
				let P = j.next();

				if ((X = !!P.done, X)) continue;

				let k = P.value ? P.value[0] : void 0,
					z = P.value ? P.value[1] : void 0;

				if (typeof z?.toBSON === "function") z = z.toBSON();

				let A = typeof z;

				if (typeof k === "string" && !T2.has(k)) {
					if (k.match(Z5) != null) throw new D("key " + k + " must not contain null bytes");

					if (J) {
						if (k[0] === "$") throw new D("key " + k + " must not start with '$'"); else if (k.includes(".")) throw new D("key " + k + " must not contain '.'");
					}
				}

				if (z === void 0) {
					if (K === !1) F = g8($, k, z, F);
				} else if (z === null) F = g8($, k, z, F); else if (A === "string") F = uQ($, k, z, F); else if (A === "number") F = dQ($, k, z, F); else if (A === "bigint") F = oQ($, k, z, F); else if (A === "boolean") F = nQ($, k, z, F); else if (A === "object" && z._bsontype == null) if (z instanceof Date || p8(z)) F = tQ($, k, z, F); else if (z instanceof Uint8Array || l$(z)) F = eQ($, k, z, F); else if (z instanceof RegExp || x8(z)) F = aQ($, k, z, F); else F = $4($, k, z, F, J, Z, q, K, W); else if (A === "object") {
					if (z[f8] !== R8) throw new M8(); else if (z._bsontype === "ObjectId") F = iQ($, k, z, F); else if (z._bsontype === "Decimal128") F = Q4($, k, z, F); else if (z._bsontype === "Long" || z._bsontype === "Timestamp") F = J4($, k, z, F); else if (z._bsontype === "Double") F = G4($, k, z, F); else if (z._bsontype === "Code") F = q4($, k, z, F, J, Z, q, K, W); else if (z._bsontype === "Binary") F = K4($, k, z, F); else if (z._bsontype === "BSONSymbol") F = F4($, k, z, F); else if (z._bsontype === "DBRef") F = W4($, k, z, F, Z, q, W); else if (z._bsontype === "BSONRegExp") F = sQ($, k, z, F); else if (z._bsontype === "Int32") F = Y4($, k, z, F); else if (z._bsontype === "MinKey" || z._bsontype === "MaxKey") F = rQ($, k, z, F); else if (typeof z._bsontype !== "undefined") throw new D(`Unrecognized or invalid _bsontype: ${String(z._bsontype)}`);
				} else if (A === "function" && q) F = Z4($, k, z, F);
			}
		} else {
			if (typeof Q?.toBSON === "function") {
				if ((Q = Q.toBSON(), Q != null && typeof Q !== "object")) throw new D("toBSON function did not return an object");
			}

			for (let j of Object.keys(Q)) {
				let X = Q[j];

				if (typeof X?.toBSON === "function") X = X.toBSON();

				let P = typeof X;

				if (typeof j === "string" && !T2.has(j)) {
					if (j.match(Z5) != null) throw new D("key " + j + " must not contain null bytes");

					if (J) {
						if (j[0] === "$") throw new D("key " + j + " must not start with '$'"); else if (j.includes(".")) throw new D("key " + j + " must not contain '.'");
					}
				}

				if (X === void 0) {
					if (K === !1) F = g8($, j, X, F);
				} else if (X === null) F = g8($, j, X, F); else if (P === "string") F = uQ($, j, X, F); else if (P === "number") F = dQ($, j, X, F); else if (P === "bigint") F = oQ($, j, X, F); else if (P === "boolean") F = nQ($, j, X, F); else if (P === "object" && X._bsontype == null) if (X instanceof Date || p8(X)) F = tQ($, j, X, F); else if (X instanceof Uint8Array || l$(X)) F = eQ($, j, X, F); else if (X instanceof RegExp || x8(X)) F = aQ($, j, X, F); else F = $4($, j, X, F, J, Z, q, K, W); else if (P === "object") {
					if (X[f8] !== R8) throw new M8(); else if (X._bsontype === "ObjectId") F = iQ($, j, X, F); else if (X._bsontype === "Decimal128") F = Q4($, j, X, F); else if (X._bsontype === "Long" || X._bsontype === "Timestamp") F = J4($, j, X, F); else if (X._bsontype === "Double") F = G4($, j, X, F); else if (X._bsontype === "Code") F = q4($, j, X, F, J, Z, q, K, W); else if (X._bsontype === "Binary") F = K4($, j, X, F); else if (X._bsontype === "BSONSymbol") F = F4($, j, X, F); else if (X._bsontype === "DBRef") F = W4($, j, X, F, Z, q, W); else if (X._bsontype === "BSONRegExp") F = sQ($, j, X, F); else if (X._bsontype === "Int32") F = Y4($, j, X, F); else if (X._bsontype === "MinKey" || X._bsontype === "MaxKey") F = rQ($, j, X, F); else if (typeof X._bsontype !== "undefined") throw new D(`Unrecognized or invalid _bsontype: ${String(X._bsontype)}`);
				} else if (P === "function" && q) F = Z4($, j, X, F);
			}
		}

		(W.delete(Q), $[F++] = 0);

		let H = F - Y;

		return (Y += b.setInt32LE($, Y, H), F);
	}

	function xq($) {
		return $ != null && typeof $ === "object" && "_bsontype" in $ && typeof $._bsontype === "string";
	}

	var pq = {
		$oid: W0,
		$binary: o,
		$uuid: o,
		$symbol: d8,
		$numberInt: o$,
		$numberDecimal: B0,
		$numberDouble: Q$,
		$numberLong: V,
		$minKey: u8,
		$maxKey: l8,
		$regex: J$,
		$regularExpression: J$,
		$timestamp: X$
	};

	function n2($, Q = {}) {
		if (typeof $ === "number") {
			let Y = $ <= _1 && $ >= y1, Z = $ <= E2 && $ >= w2;

			if (Q.relaxed || Q.legacy) return $;

			if (Number.isInteger($) && !Object.is($, -0)) {
				if (Y) return new o$($);

				if (Z) {
					if (Q.useBigInt64) return BigInt($);

					return V.fromNumber($);
				}
			}

			return new Q$($);
		}

		if ($ == null || typeof $ !== "object") return $;
		if ($.$undefined) return null;

		let J = Object.keys($).filter((Y) => Y.startsWith("$") && $[Y] != null);

		for (let Y = 0; Y < J.length; Y++) {
			let Z = pq[J[Y]];

			if (Z) return Z.fromExtendedJSON($, Q);
		}

		if ($.$date != null) {
			let Y = $.$date, Z = new Date();

			if (Q.legacy) if (typeof Y === "number") Z.setTime(Y); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new G5(`Unrecognized type for EJSON date: ${typeof Y}`); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (V.isLong(Y)) Z.setTime(Y.toNumber()); else if (typeof Y === "number" && Q.relaxed) Z.setTime(Y); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new G5(`Unrecognized type for EJSON date: ${typeof Y}`);

			return Z;
		}

		if ($.$code != null) {
			let Y = Object.assign({}, $);

			if ($.$scope) Y.$scope = n2($.$scope);

			return d$.fromExtendedJSON($);
		}

		if (l2($) || $.$dbPointer) {
			let Y = $.$ref ? $ : $.$dbPointer;

			if (Y instanceof E$) return Y;

			let Z = Object.keys(Y).filter((K) => K.startsWith("$")),
				q = !0;

			if ((
				Z.forEach((K) => {
					if (["$ref", "$id", "$db"].indexOf(K) === -1) q = !1;
				}),
				q
			)) return E$.fromExtendedJSON(Y);
		}

		return $;
	}

	function cq($, Q) {
		return $.map((J, Y) => {
			Q.seenObjects.push({ propertyName: `index ${Y}`, obj: null });

			try {
				return I$(J, Q);
			} finally {
				Q.seenObjects.pop();
			}
		});
	}

	function I2($) {
		let Q = $.toISOString();

		return $.getUTCMilliseconds() !== 0 ? Q : Q.slice(0, -5) + "Z";
	}

	function I$($, Q) {
		if ($ instanceof Map || P4($)) {
			let J = Object.create(null);

			for (let [Y, Z] of $) {
				if (typeof Y !== "string") throw new D("Can only serialize maps with string keys");

				J[Y] = Z;
			}

			return I$(J, Q);
		}

		if ((typeof $ === "object" || typeof $ === "function") && $ !== null) {
			let J = Q.seenObjects.findIndex((Y) => Y.obj === $);

			if (J !== -1) {
				let Y = Q.seenObjects.map((j) => j.propertyName),
					Z = Y.slice(0, J).map((j) => `${j} -> `).join(""),
					q = Y[J],
					K = " -> " + Y.slice(J + 1, Y.length - 1).map((j) => `${j} -> `).join(""),
					W = Y[Y.length - 1],
					F = (" ").repeat(Z.length + q.length / 2),
					H = ("-").repeat(K.length + (q.length + W.length) / 2 - 1);

				throw new D(`Converting circular structure to EJSON:
    ${Z}${q}${K}${W}
    ${F}\\${H}/`);
			}

			Q.seenObjects[Q.seenObjects.length - 1].obj = $;
		}

		if (Array.isArray($)) return cq($, Q);
		if ($ === void 0) return Q.ignoreUndefined ? void 0 : null;

		if ($ instanceof Date || p8($)) {
			let J = $.getTime(),
				Y = J > -1 && J < 253402318800000;

			if (Q.legacy) return Q.relaxed && Y ? { $date: $.getTime() } : { $date: I2($) };

			return Q.relaxed && Y
				? { $date: I2($) }
				: { $date: { $numberLong: $.getTime().toString() } };
		}

		if (typeof $ === "number" && (!Q.relaxed || !isFinite($))) {
			if (Number.isInteger($) && !Object.is($, -0)) {
				if ($ >= y1 && $ <= _1) return { $numberInt: $.toString() };
				if ($ >= w2 && $ <= E2) return { $numberLong: $.toString() };
			}

			return { $numberDouble: Object.is($, -0) ? "-0.0" : $.toString() };
		}

		if (typeof $ === "bigint") {
			if (!Q.relaxed) return { $numberLong: BigInt.asIntN(64, $).toString() };

			return Number(BigInt.asIntN(64, $));
		}

		if ($ instanceof RegExp || x8($)) {
			let J = $.flags;

			if (J === void 0) {
				let Z = $.toString().match(/[gimuy]*$/);

				if (Z) J = Z[0];
			}

			return new J$($.source, J).toExtendedJSON(Q);
		}

		if ($ != null && typeof $ === "object") return fq($, Q);

		return $;
	}

	var bq = {
		Binary: ($) => new o($.value(), $.sub_type),
		Code: ($) => new d$($.code, $.scope),
		DBRef: ($) => new E$($.collection || $.namespace, $.oid, $.db, $.fields),
		Decimal128: ($) => new B0($.bytes),
		Double: ($) => new Q$($.value),
		Int32: ($) => new o$($.value),
		Long: ($) => V.fromBits($.low != null ? $.low : $.low_, $.low != null ? $.high : $.high_, $.low != null ? $.unsigned : $.unsigned_),
		MaxKey: () => new l8(),
		MinKey: () => new u8(),
		ObjectId: ($) => new W0($),
		BSONRegExp: ($) => new J$($.pattern, $.options),
		BSONSymbol: ($) => new d8($.value),
		Timestamp: ($) => X$.fromBits($.low, $.high)
	};

	function fq($, Q) {
		if ($ == null || typeof $ !== "object") throw new D("not an object instance");

		let J = $._bsontype;

		if (typeof J === "undefined") {
			let Y = {};

			for (let Z of Object.keys($)) {
				Q.seenObjects.push({ propertyName: Z, obj: null });

				try {
					let q = I$($[Z], Q);

					if (Z === "__proto__") Object.defineProperty(Y, Z, { value: q, writable: !0, enumerable: !0, configurable: !0 }); else Y[Z] = q;
				} finally {
					Q.seenObjects.pop();
				}
			}

			return Y;
		} else if ($ != null && typeof $ === "object" && typeof $._bsontype === "string" && $[f8] !== R8) throw new M8(); else if (xq($)) {
			let Y = $;

			if (typeof Y.toExtendedJSON !== "function") {
				let Z = bq[$._bsontype];

				if (!Z) throw new D("Unrecognized or invalid _bsontype: " + $._bsontype);

				Y = Z(Y);
			}

			if (J === "Code" && Y.scope) Y = new d$(Y.code, I$(Y.scope, Q)); else if (J === "DBRef" && Y.oid) Y = new E$(I$(Y.collection, Q), I$(Y.oid, Q), I$(Y.db, Q), I$(Y.fields, Q));

			return Y.toExtendedJSON(Q);
		} else throw new D("_bsontype must be a string, but was: " + typeof J);
	}

	function t2($, Q) {
		let J = {
			useBigInt64: Q?.useBigInt64 ?? !1,
			relaxed: Q?.relaxed ?? !0,
			legacy: Q?.legacy ?? !1
		};

		return JSON.parse($, (Y, Z) => {
			if (Y.indexOf("\x00") !== -1) throw new D(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(Y)}`);

			return n2(Z, J);
		});
	}

	function a2($, Q, J, Y) {
		if (J != null && typeof J === "object") (Y = J, J = 0);
		if (Q != null && typeof Q === "object" && !Array.isArray(Q)) (Y = Q, Q = void 0, J = 0);

		let Z = Object.assign({ relaxed: !0, legacy: !1 }, Y, { seenObjects: [{ propertyName: "(root)", obj: null }] }),
			q = I$($, Z);

		return JSON.stringify(q, Q, J);
	}

	function lq($, Q) {
		return (Q = Q || {}, JSON.parse(a2($, Q)));
	}

	function uq($, Q) {
		return (Q = Q || {}, t2(JSON.stringify($), Q));
	}

	var o8 = Object.create(null);

	o8.parse = t2;
	o8.stringify = a2;
	o8.serialize = lq;
	o8.deserialize = uq;
	Object.freeze(o8);

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

	function j4($, Q) {
		try {
			return b.getNonnegativeInt32LE($, Q);
		} catch(J) {
			throw new j$("BSON size cannot be negative", Q, { cause: J });
		}
	}

	function X4($, Q) {
		let J = Q;

		for (; $[J] !== 0; J++) ;

		if (J === $.length - 1) throw new j$("Null terminator not found", Q);

		return J;
	}

	function dq($, Q = 0) {
		if ((Q ??= 0, $.length < 5)) throw new j$(`Input must be at least 5 bytes, got ${$.length} bytes`, Q);

		let J = j4($, Q);

		if (J > $.length - Q) throw new j$(`Parsed documentSize (${J} bytes) does not match input length (${$.length} bytes)`, Q);
		if ($[Q + J - 1] !== 0) throw new j$("BSON documents must end in 0x00", Q + J);

		let Y = [], Z = Q + 4;

		while (Z <= J + Q) {
			let q = $[Z];

			if ((Z += 1, q === 0)) {
				if (Z - Q !== J) throw new j$("Invalid 0x00 type byte", Z);

				break;
			}

			let K = Z, W = X4($, Z) - K;

			Z += W + 1;

			let F;

			if (q === H0.double || q === H0.long || q === H0.date || q === H0.timestamp) F = 8; else if (q === H0.int) F = 4; else if (q === H0.objectId) F = 12; else if (q === H0.decimal) F = 16; else if (q === H0.bool) F = 1; else if (q === H0.null || q === H0.undefined || q === H0.maxKey || q === H0.minKey) F = 0; else if (q === H0.regex) F = X4($, X4($, Z) + 1) + 1 - Z; else if (q === H0.object || q === H0.array || q === H0.javascriptWithScope) F = j4($, Z); else if (q === H0.string || q === H0.binData || q === H0.dbPointer || q === H0.javascript || q === H0.symbol) {
				if ((F = j4($, Z) + 4, q === H0.binData)) F += 1;
				if (q === H0.dbPointer) F += 12;
			} else throw new j$(`Invalid 0x${q.toString(16).padStart(2, "0")} type byte`, Z);

			if (F > J) throw new j$("value reports length larger than document", Z);

			(Y.push([q, K, W, Z, F]), Z += F);
		}

		return Y;
	}

	var g1 = Object.create(null);

	g1.parseToElements = dq;
	g1.ByteUtils = U;
	g1.NumberUtils = b;
	Object.freeze(g1);

	var s2 = 17825792, u$ = U.allocate(s2);

	function oq($) {
		if (u$.length < $) u$ = U.allocate($);
	}

	function nq($, Q = {}) {
		let J = typeof Q.checkKeys === "boolean" ? Q.checkKeys : !1,
			Y = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
			Z = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0,
			q = typeof Q.minInternalBufferSize === "number" ? Q.minInternalBufferSize : s2;

		if (u$.length < q) u$ = U.allocate(q);

		let K = v1(u$, $, J, 0, 0, Y, Z, null),
			W = U.allocateUnsafe(K);

		return (W.set(u$.subarray(0, K), 0), W);
	}

	function tq($, Q, J = {}) {
		let Y = typeof J.checkKeys === "boolean" ? J.checkKeys : !1,
			Z = typeof J.serializeFunctions === "boolean" ? J.serializeFunctions : !1,
			q = typeof J.ignoreUndefined === "boolean" ? J.ignoreUndefined : !0,
			K = typeof J.index === "number" ? J.index : 0,
			W = v1(u$, $, Y, 0, 0, Z, q, null);

		return (Q.set(u$.subarray(0, W), K), K + W - 1);
	}

	function aq($, Q = {}) {
		return o2(U.toLocalBufferType($), Q);
	}

	function sq($, Q = {}) {
		Q = Q || {};

		let J = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
			Y = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0;

		return Q5($, J, Y);
	}

	function rq($, Q, J, Y, Z, q) {
		let K = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, q),
			W = U.toLocalBufferType($),
			F = Q;

		for (let H = 0; H < J; H++) {
			let j = b.getInt32LE(W, F);

			(K.index = F, Y[Z + H] = o2(W, K), F = F + j);
		}

		return F;
	}

	var H$ = Object.freeze({
		__proto__: null,
		BSONError: D,
		BSONOffsetError: j$,
		BSONRegExp: J$,
		BSONRuntimeError: G5,
		BSONSymbol: d8,
		BSONType: Fq,
		BSONValue: y0,
		BSONVersionError: M8,
		Binary: o,
		ByteUtils: U,
		Code: d$,
		DBRef: E$,
		Decimal128: B0,
		Double: Q$,
		EJSON: o8,
		Int32: o$,
		Long: V,
		MaxKey: l8,
		MinKey: u8,
		NumberUtils: b,
		ObjectId: W0,
		Timestamp: X$,
		UUID: E0,
		bsonType: L4,
		calculateObjectSize: sq,
		deserialize: aq,
		deserializeStream: rq,
		onDemand: g1,
		serialize: nq,
		serializeWithBufferAndIndex: tq,
		setInternalBufferSize: oq
	});

	var F0,
		n8 = new Map(),
		x1 = !0,
		C4 = 0,
		T4 = !1,
		I4 = !1;

	function N1() {
		let $ = J0.url?.ws;

		(
			F0 = $
				? new WebSocket(`${$}${$.includes("?") ? "&" : "?"}v=${jJ}`)
				: m.ws.$ws(),
			F0.binaryType = "arraybuffer",
			x1 = !0,
			F0.addEventListener("open", () => {
				(
					console.log("[WS] Connected"),
					T4 = !1,
					I4 = !1,
					C4 = 0,
					KY(),
					y7(),
					w8()
				);
			}),

			F0.addEventListener("message", (Q) => {
				let J = H$.deserialize(Q.data);

				if ((M$ && console.debug("[WS] SERVER", J), n8.has(J.nonce))) {
					let Z = n8.get(J.nonce);

					(n8.delete(J.nonce), Z(J));
				}

				let Y = pQ.get(J.op);

				if (!Y) {
					console.error("[WS] Got an unexpected packet", J);

					return;
				}

				Y(J);
			}),

			F0.addEventListener("close", (Q) => {
				if ((
					n8.clear(),
					console.warn(`[WS] Disconnected (${Q.code})`),
					Q.code == 4008
				)) {
					(x1 = !1, b7());

					return;
				}

				if (!x1 || document.hidden) return;
				if ((console.warn("[WS] Reconnecting..."), Q.code == 4004 && !E4)) y$();

				let J = Math.random() * 2000;

				if (Q.code == 4007) setTimeout(N1, 500 + J); else {
					C4++;

					let Y = Math.min(5000 * C4, 30000);

					setTimeout(N1, Y + J);
				}
			})
		);
	}

	function t7($) {
		if ((x1 = !1, F0)) F0.close($);
	}

	var A4;

	document.addEventListener("visibilitychange", () => {
		if ((clearTimeout(A4), A4 = null, document.hidden)) {
			A4 = setTimeout(
				() => {
					if (!document.hidden) return;

					(
						console.log("Tab has been inactive for over a minute, disconnecting from WS"),
						F0?.close()
					);
				},
				60000
			);

			return;
		}

		if (x1 && (!F0 || F0.readyState == WebSocket.CLOSED)) N1();
	});

	function r2($ = {}) {
		if (!F0 || F0.readyState != WebSocket.OPEN) return (
			delete $.token,
			console.warn("Tried to send a packet while the connection is closed", $),
			!0
		);
	}

	var E4 = !1;

	function w8() {
		if (T4 || !F0 || F0.readyState != WebSocket.OPEN) return;
		if (N$() && !(R.token && R.user)) return;

		(E4 = !0, PQ(2, { token: N$() ?? "viewer" }));
	}

	function eY() {
		(I4 = !0, cQ());
	}

	function PQ($, Q) {
		if (r2(Q) || !F0) return !1;
		if ($ != 2 && !I4) return !1;
		if ($ == 2) (E4 = !1, T4 = !0);

		(
			M$ && console.debug("[WS] CLIENT", $, Q),
			F0.send(H$.serialize({ op: $, ...Q ?? {} }))
		);
	}

	function f$($, Q, J = 60000) {
		return new Promise((Y, Z) => {
			if (r2(Q) || !F0) return Z("Tried to send a packet while the connection is closed");

			let q = Date.now(),
				K = setTimeout(
					() => {
						(n8.delete(q), Z(`Nonce ${q} timed out after ${J}ms`));
					},
					J
				);

			(
				n8.set(q, (W) => {
					(clearTimeout(K), Y(W));
				}),
				M$ && console.debug(`[WS] CLIENT (nonce=${q})`, $, Q),
				F0.send(H$.serialize({ op: $, nonce: q, ...Q ?? {} }))
			);
		});
	}

	var iq = 300, eq = 1000, $K = J0.url.api;

	async function w4($) {
		try {
			let Q = await fetch($K + $, { cache: "no-store" });

			if (!Q.ok) return null;

			return await Q.json();
		} catch {
			return null;
		}
	}

	function p1($) {
		if ($ == null) return "—";
		if ($ < 1) return $.toFixed(2) + " ms";
		if ($ < 100) return $.toFixed(1) + " ms";

		return Math.round($) + " ms";
	}

	function i2($) {
		if ($ == null) return "—";
		if ($ < 1024) return `${$} B`;
		if ($ < 1048576) return `${($ / 1024).toFixed(1)} KB`;

		return `${($ / 1024 / 1024).toFixed(1)} MB`;
	}

	function e2($) {
		if ($ == null) return "—";

		return $.toFixed(2) + "%";
	}

	function z8($, Q) {
		if ($ == null) return "—";

		return Q($);
	}

	var m4 = G("div.dev-overlay"),
		w0 = {
			active: !1,
			fps: 0,
			fpsFrameCount: 0,
			fpsWindowStart: performance.now(),
			wsState: "—",
			panel: m4
		};

	function QK($) {
		return ({
			[WebSocket.CONNECTING]: "CONNECTING",
			[WebSocket.OPEN]: "OPEN",
			[WebSocket.CLOSING]: "CLOSING",
			[WebSocket.CLOSED]: "CLOSED"
		})[$] || "—";
	}

	function JK() {
		return `${~~(C.viewport.x2 - C.viewport.x)}x${~~(C.viewport.y2 - C.viewport.y)} px / ${G8.size} chunks`;
	}

	function YK() {
		let $ = performance.memory;

		if (!$) return "n/a";

		let Q = $.usedJSHeapSize ?? 0,
			J = $.totalJSHeapSize ?? 0;

		return `${i2(Q)} / ${i2(J)}`;
	}

	function Q3() {
		if (!w0.active) return;

		w0.fpsFrameCount++;

		let $ = performance.now(),
			Q = $ - w0.fpsWindowStart;

		if (Q >= 1000) (
			w0.fps = Math.round(w0.fpsFrameCount * 1000 / Q),
			w0.fpsFrameCount = 0,
			w0.fpsWindowStart = $
		);

		requestAnimationFrame(Q3);
	}

	function A0($, Q) {
		return G("div.dev-overlay-row", G("span.dev-overlay-label", $), G("span.dev-overlay-value", Q));
	}

	function q5($, ...Q) {
		return G("div.dev-overlay-section", G("div.dev-overlay-section-title", $), ...Q);
	}

	var h4, $3 = 0;

	async function GK() {
		if (!M$) return "";

		if (!h4 || $3 < Date.now()) (
			$3 = Date.now() + eq,
			h4 = await Promise.all([
				w4("/metrics/loop-lag"),
				w4("/metrics/sendbulk"),
				w4("/metrics/canvas-density")
			])
		);

		let [$, Q, J] = h4;

		return q5("server", A0("loop lag p99 / max", `${z8($?.p99_ms, p1)} / ${z8($?.max_ms, p1)}`), A0("sendBulk last-10s cpu", z8(Q?.last_10s?.cpu_pct_of_window, e2)), A0("sendBulk p99 / max", `${z8(Q?.p99_call_ms, p1)} / ${z8(Q?.max?.call_ms, p1)}`), A0("sendBulk avg fanout", z8(Q?.avg_fanout, (Y) => Y.toFixed(0))), A0("canvas density", z8(J?.density_pct, e2)));
	}

	async function J3() {
		if (!w0.active) return;

		(
			setTimeout(J3, iq),
			w0.wsState = QK(F0?.readyState),
			w0.panel.replaceChildren(G("div.dev-overlay-title", "wall: dev"), await GK(), q5("ws", A0("state", w0.wsState), A0("connection id", String(R.connectionId)), A0("ping rtt", p1(R.debug.ping)), A0("identified", R.user ? "yes" : "no")), q5("client", A0("fps", String(w0.fps)), A0("memory (jsHeap)", YK()), A0("known users", String(V0.size)), A0("paint remaining", `${R.paintRemaining} (${Math.round(R.paintRemaining / C0)} cans)`)), q5("camera", A0("translation", `${C.x.toFixed(2)}, ${C.y.toFixed(2)}`), A0("zoom", `${C.zoom.toFixed(1)} client / ${C.normalizedZoom.toFixed(1)} normal`), A0("viewport", JK()), A0("cursor", `${R.cursorX}, ${R.cursorY}`)))
		);
	}

	function K5() {
		if (w0.active) return;

		(
			w0.active = !0,
			document.body.append(m4),
			requestAnimationFrame(Q3),
			J3()
		);
	}

	function Y3() {
		if (!w0.active) return;

		(m4.remove(), w0.active = !1);
	}

	var _$ = !1;

	function n$($, Q, J = "") {
		let Y = `s_${$}`,
			Z = G("input", {
				type: "checkbox",
				id: Y,
				checked: !!x.a11y[$],
				onchange() {
					if (Z.checked) x.a11y[$] = !0; else delete x.a11y[$];

					(c1(), m0());
				}
			});

		return G("div.checkbox", Z, G("label.tooltip", Q, { dataset: { tooltip: J }, htmlFor: Y }));
	}

	function F5() {
		let $ = new _("Settings", G("div.settings-modal", G("h3", "Accessibility"), n$("darkTheme", "Dark Theme"), n$("performanceMode", "Performance Mode", `Attempts to reduce the amount of stutters.${x.flags.perfModeAutoEnabled ? " (Recommended)" : ""}`), n$("lowQualityBg", "Low Quality Background", "Enable this if you're experiencing lag"), n$("hideNameplates", "Hide Nameplates", "Shows cursors, but removes names/chat bubbles"), n$("hideCursors", "Hide Other Cursors", "Completely hides all cursors on the canvas"), n$("systemCursor", "Use System Cursor", "Local only. Use this if you have issues with our custom cursor"), n$("hideChatBubbles", "Hide Chat Bubbles", "Do not show chat bubbles next to users. Chat is still available."), n$("devOverlay", "Stats For Nerds"), R.user && z7())),
			Q = $.titleElement.querySelector("button.icon");

		if (Q) Q.onclick = () => $.close(!0);

		return $;
	}

	function c1() {
		let $ = x.a11y;

		if ($.hideCursorKeybind) ($.hideCursorKeybind = !1, $.hideCursors = !1);

		if ((
			$.hideOwnCursor = !!$.hideCursors,
			_$ = !!$.performanceMode,
			document.body.classList.toggle("dark", !!$.darkTheme),
			document.body.classList.toggle("hide-nameplates", !!$.hideNameplates),
			$.hideCursors
		)) Q8.remove(); else P$.append(Q8);

		if ($.systemCursor) W1(); else T6();
		if ($.lowQualityBg) q3(); else Z3();
		if ($.devOverlay) K5(); else Y3();
	}

	function G3() {
		if (!l0) return;
		if (x.flags.perfModeAutoEnabled) return;

		(
			x.a11y.performanceMode = !0,
			x.flags.perfModeAutoEnabled = !0,
			m0()
		);
	}

	async function sY($) {
		let Q = new Uint8Array($.length * 5),
			J = new DataView(Q.buffer),
			Y = 0;

		for (let Z of $) if ((
			J.setUint32(Y, Z[0], !0),
			J.setUint8(Y + 4, Z[1]),
			Y += 5,
			_$ && Y % 2500 == 0
		)) await Q1();

		return Q;
	}

	function rY($) {
		if (!r5) return;

		return f$(7, { pixels: $ });
	}

	function q2() {
		return f$(9, {}, 1e4);
	}

	function K3($) {
		return f$(10, $, 5000);
	}

	var W5 = 160;

	function N4($) {
		let Q = $ % f, J = Math.floor($ / f);

		B4(Q, J);
	}

	function B4($, Q) {
		b1($ - W5 / 2, Q - W5 / 2, W5, W5);
	}

	async function O0($) {
		let { connId: Q, userId: J, fallbackPos: Y, username: Z } = $;

		if (Q !== void 0 && Q === R.connectionId) return (B$("That's you!"), !1);

		if (Q !== void 0) {
			let q = V0.get(Q);

			if (q && !q.partial && q.lastPos !== void 0) return (N4(q.lastPos), !0);
		}

		if (Y !== void 0) return (N4(Y), !0);

		if (Q !== void 0 || J !== void 0) try {
			let q = await K3({ connId: Q, userId: J });

			if (q.pos != null) return (N4(q.pos), !0);
		} catch {}

		return (
			B$(Z
				? `${Z} isn't on the wall right now.`
				: "That user isn't on the wall right now."),
			!1
		);
	}

	function F3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = null;

		async function Z(K) {
			if (K) (Y = null, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let W = await NJ({ status: "open", cursor: Y ?? void 0, limit: 25 });

			if (!W.ok) {
				Q.replaceChildren(G0(await d(W)));

				return;
			}

			let { items: F, next_cursor: H } = await W.json();

			if ((Q.replaceChildren(), K && !F.length)) $.replaceChildren(G("p.desc", "No open items.")); else for (let j of F) $.append(q(j));

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
				j = (A, v, O) => G("button.btn", A, {
					async onclick() {
						if (!await i(O, A)) return;

						let L = await BJ(K.id, v, F.value.trim() || void 0);

						if (!L.ok) {
							W.replaceChildren(G("p.error.noicon", `${A} failed: ${await d(L)}`));

							return;
						}

						H.remove();
					}
				}),
				X = K.details.user_id,
				P = G("div.mod-flag-samples");

			if (typeof X == "number") (async () => {
				let A = await sJ(X);

				if (!A.ok) return;

				let { samples: v } = await A.json();

				if (!v.length) return;

				let O = v.map((M) => ({
					pixels: D6(new Uint8Array([...atob(M.pixels)].map((L) => L.charCodeAt(0)))),
					label: x0(M.createdAt)
				}));

				P.replaceChildren(G("span.desc", "flagged draws:"), ...O.map((M, L) => {
					let y = A8(M.pixels);

					return (
						y.title = `${M.label} (click to expand)`,
						y.classList.add("mod-clickable-thumb"),
						y.addEventListener("click", () => Q7(O, L)),
						y
					);
				}));
			})();

			let k = K.target_username,
				z = typeof X == "number"
					? G(
						"div.mod-form-row.mod-review-target",
						k
							? G("span.mod-jump-name.tooltip", k, {
								dataset: { tooltip: g.jumpTo },
								async onclick() {
									if (await O0({ userId: X, username: k })) (
										p(),
										m$({ label: "Review Queue", reopen: () => s("review") })
									);
								}
							})
							: "",
						G("span.desc", `#${X}`),
						K.target_discord ? G("span.desc", `discord: ${K.target_discord}`) : "",
						G("button.btn", "View user", {
							onclick() {
								s("users", X, { label: "Review Queue", reopen: () => s("review") });
							}
						})
					)
					: "";

			return (
				H.append(G("div.mod-review-head", G("b", K.kind), G("span.mod-tag", `x${K.hit_count}`), G("span.desc", I0(K.created_at))), z, P, G("div.details", M6(K.details)), G("div.input", F), G("div.mod-form-row", j("Dismiss", "dismiss", `Dismiss review item #${K.id}?`), j("Mark clean", "mark_clean", `Mark item #${K.id} clean?`), j("Ban", "ban", `Perma-ban the target of item #${K.id}?`)), W),
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

	function W3() {
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

				let W = await mJ(Z, q || void 0, !Y.checked);

				if (!W.ok) {
					$.replaceChildren(G0(`Broadcast failed: ${await d(W)}`));

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

	var O4 = 10;

	function j3($) {
		if ($ <= 0) return 1.1;

		let Q = Math.max(1, Math.min(10, $));

		return Math.round((0.95 - (Q - 1) / 9 * 0.55) * 100) / 100;
	}

	function X3() {
		let $ = G("div.mod-action-msg"),
			Q = G("p.desc.mod-bot-mapping"),
			J = G("p.desc"),
			Y = G("input.box.mod-bot-slider", {
				type: "range",
				min: "0",
				max: String(O4),
				step: "1",
				value: "0"
			}),
			Z = (K) => {
				if (K <= 0) return g.detection.off;

				let W = Math.round(j3(K) * 100);

				return r0(g.detection.current, K, O4, W);
			},
			q = () => {
				Q.replaceChildren(Z(Number(Y.value)));
			};

		return (
			Y.oninput = q,
			(async () => {
				let K = await oJ();

				if (!K.ok) {
					$.replaceChildren(G0(await d(K)));

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
					let K = Number(Y.value), W = await nJ(K);

					if (!W.ok) {
						$.replaceChildren(G0(`Save failed: ${await d(W)}`));

						return;
					}

					$.replaceChildren(G("p.success.noicon", g.gwValSaved));
				}
			}))))
		);
	}

	var H3 = 4, j5 = !1;

	function P3($, Q, J, Y, Z) {
		let q = Math.min($, J),
			K = Math.min(Q, Y),
			W = Math.max($, J),
			F = Math.max(Q, Y);

		(q = Math.min(q, f - 1), K = Math.min(K, k0 - 1));

		let H = Math.min(W - q, Z, f - q),
			j = Math.min(F - K, Z, k0 - K);

		return (
			H = Math.max(H, 1),
			j = Math.max(j, 1),
			{ x: q, y: K, width: H, height: j }
		);
	}

	function ZK($) {
		let Q = C.rect.width / $0.width,
			J = C.rect.height / $0.height;

		return {
			left: C.rect.left + $.x * Q,
			top: C.rect.top + $.y * J,
			width: $.width * Q,
			height: $.height * J
		};
	}

	function X5($) {
		if (j5) return;

		(j5 = !0, R.setTool(0), x$(0));

		let Q = $.maxRegion ?? Math.max(f, k0),
			J = $.color ?? "#ff3b3b",
			Y = G("div.pick-box", { style: { display: "none", outlineColor: J } }),
			Z = $.label ? G("div.pick-mode", $.label) : "",
			q = G("div.pick-readout", $.hint ?? "Click a pixel  ·  Shift+drag to select an area"),
			K = G("div.pick-hint", "Esc or right-click to cancel"),
			W = G("div.pick-overlay", Y, Z, q, K),
			F = null;

		if ($.dimUnpainted) (F = G("div.mod-paint-scrim"), K1.prepend(F));

		let H = !1,
			j = null,
			X = null,
			P = !1,
			k = 0,
			z = 0;

		function A(T) {
			let B = ZK(T);

			Object.assign(Y.style, {
				display: "block",
				left: `${B.left}px`,
				top: `${B.top}px`,
				width: `${B.width}px`,
				height: `${B.height}px`
			});
		}

		function v(T, B) {
			A({ x: T, y: B, width: 1, height: 1 });
		}

		function O() {
			if (!j5) return;

			(
				j5 = !1,
				W.remove(),
				F?.remove(),
				M0.removeEventListener("pointerdown", y, !0),
				M0.removeEventListener("pointermove", w, !0),
				window.removeEventListener("pointerup", h, !0),
				document.removeEventListener("keydown", M, !0),
				M0.removeEventListener("contextmenu", L, !0),
				$.onClose?.()
			);
		}

		function M(T) {
			if (T.key === "Escape") (T.preventDefault(), T.stopPropagation(), O());
		}

		function L(T) {
			(T.preventDefault(), O());
		}

		function y(T) {
			if (T.button === 2) {
				O();

				return;
			}

			if (T.button !== 0) return;

			if (T.shiftKey && $.onRegion) {
				(T.preventDefault(), T.stopPropagation(), H = !0);

				let [B, N] = _0(T.clientX, T.clientY);

				(
					j = [B, N],
					X = P3(B, N, B, N, Q),
					A(X),
					q.textContent = `${X.width}×${X.height} px`
				);

				return;
			}

			(P = !!$.onPick, k = T.clientX, z = T.clientY);
		}

		function w(T) {
			if (H && j) {
				(T.preventDefault(), T.stopPropagation(), I6(T.x, T.y));

				let [I, S] = _0(T.clientX, T.clientY);

				(
					X = P3(j[0], j[1], I, S, Q),
					A(X),
					q.textContent = `${X.width}×${X.height} px`
				);

				return;
			}

			if (P && Math.hypot(T.clientX - k, T.clientY - z) > H3) P = !1;

			let [B, N] = _0(T.clientX, T.clientY);

			v(B, N);
		}

		function h(T) {
			if (H) {
				H = !1;

				let B = X;

				if ((X = null, j = null, O(), B && $.onRegion)) $.onRegion(B);

				return;
			}

			if (P && T.button === 0) {
				if ((P = !1, Math.hypot(T.clientX - k, T.clientY - z) <= H3)) {
					let [B, N] = _0(T.clientX, T.clientY);

					(O(), $.onPick?.(B, N));
				}
			}
		}

		(
			M0.addEventListener("pointerdown", y, !0),
			M0.addEventListener("pointermove", w, !0),
			window.addEventListener("pointerup", h, !0),
			document.addEventListener("keydown", M, !0),
			M0.addEventListener("contextmenu", L, !0),
			u("main").after(W)
		);
	}

	var qK = 500;

	function l1() {
		if (!v0()) return;

		X5({
			label: "Tile Inspector",
			hint: g.inspect.hint,
			maxRegion: qK,
			dimUnpainted: !0,
			onPick: ($, Q) => void KK($, Q),
			onRegion: ($) => void FK($.x, $.y, $.width, $.height)
		});
	}

	async function KK($, Q) {
		let J = Q * f + $, Y = await pJ(J);

		if (!Y.ok) return new _("Tile inspector", G("div.modal", G0(await d(Y)), z$));

		V3(await Y.json(), $, Q);
	}

	function V3($, Q, J) {
		let Y = G("div.modal.mod-tile");

		if ((
			Y.append(G("div.mod-kv", f1("Position", `${Q}, ${J}`), f1("Placed", $.placed_at ? x0($.placed_at) : "unknown"))),
			!$.user
		)) return (
			Y.append(G("p.desc", g.inspect.none)),
			Y.append(G("div.btn-container", S4())),
			void new _("Tile inspector", Y)
		);

		let Z = $.user, q = !!Z.banned_at;

		(
			Y.append(
				G("div.mod-detail-head", G("h3", Z.username), Z1(Z.role), G("span.desc", `#${Z.id}`), Z.discord_id ? G("span.mod-tag.discord", "Discord") : null),
				q
					? G("p.warning.noicon", `Banned ${x0(Z.banned_at)}.` + (Z.banned_until ? ` Until ${x0(Z.banned_until)}.` : " Permanent."))
					: G("p.desc", "Not banned."),
				G(
					"div.btn-container",
					G("button.btn", "View user", {
						onclick() {
							s("users", Z.id, { label: "Tile inspector", reopen: () => V3($, Q, J) });
						}
					}),
					S4()
				)
			),
			new _("Tile inspector", Y)
		);
	}

	async function FK($, Q, J, Y) {
		let Z = await cJ($, Q, J, Y);

		if (!Z.ok) return new _("Area breakdown", G("div.modal", G0(await d(Z)), z$));

		R3(await Z.json());
	}

	function R3($) {
		let { region: Q, owned: J, total: Y, owners: Z } = $,
			q = G("div.modal.mod-region");

		if ((
			q.append(G("div.mod-kv", f1("Area", `${Q.width}×${Q.height} at ${Q.x},${Q.y}`), f1("Owned pixels", `${J} / ${Y}`), f1("Distinct owners", String(Z.length)))),
			!Z.length
		)) q.append(G("p.desc", "No owned pixels in this area.")); else q.append(G("div.list.mod-list", ...Z.map((K) => G(
			"div.item.box.outset.mod-region-row",
			{
				onclick() {
					if (K.user_id) s("users", K.user_id, { label: "Area breakdown", reopen: () => R3($) });
				}
			},
			G("b", K.username ?? `#${K.user_id}`),
			G("span.mod-row-meta", `${K.pixels} px`, G("span.desc", `${Math.round(K.pixels / J * 100)}%`))
		))));

		(
			q.append(G("div.btn-container", S4())),
			new _("Area breakdown", q)
		);
	}

	function S4() {
		return G("button.btn", "Close", {
			onclick() {
				(p(), l1());
			}
		});
	}

	function f1($, Q) {
		return G("div.mod-kv-row", G("span.mod-kv-label", $), G("span.mod-kv-value", Q));
	}

	function t$($, Q, J, Y) {
		if (Q == null) return G("span.mod-audit-actor", G("span.desc", `${$}: -`));

		return G(
			"span.mod-audit-actor",
			G("span.desc", `${$}:`),
			J
				? G("span.mod-jump-name.tooltip", J, {
					dataset: { tooltip: g.jumpTo },
					async onclick() {
						if (await O0({ userId: Q, username: J })) (p(), m$(Y));
					}
				})
				: "",
			G("span.desc", `#${Q}`),
			G("button.btn.mod-id-link", "View user", {
				onclick() {
					s("users", Q, Y);
				}
			})
		);
	}

	function WK($) {
		let Q = G("div.mod-wipe-audit");

		if ($.thumbnail) {
			let Z = G("img.mod-wipe-thumb", {
				src: $.thumbnail,
				alt: "Cleared region",
				title: "Click to enlarge"
			});

			(
				Z.addEventListener("click", () => jK($.thumbnail)),
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

	function jK($) {
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

	function M3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = G("input.box", { type: "text", placeholder: g.searchAudit }),
			Z = G("select.box.outset", G("option", "All actions", { value: "" }), ...g.auditActions.map((j) => G("option", j, { value: j }))),
			q = G("select.box.outset", G("option", "Newest first", { value: "desc" }), G("option", "Oldest first", { value: "asc" })),
			K = null;

		async function W(j) {
			if (j) (K = null, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let X = Y.value.trim(),
				P = await dJ({
					before: K ?? void 0,
					limit: 25,
					action: Z.value || void 0,
					search: X || void 0,
					order: q.value === "asc" ? "asc" : "desc"
				});

			if (!P.ok) {
				Q.replaceChildren(G0(await d(P)));

				return;
			}

			let { entries: k, next_cursor: z } = await P.json();

			if ((Q.replaceChildren(), j && !k.length)) {
				let A = !!X || !!Z.value;

				$.replaceChildren(G("p.desc", A
					? "No audit entries match these filters."
					: "No audit entries."));
			} else for (let A of k) $.append(H(A));

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

			Y.onkeydown = (j) => {
				if (j.key === "Enter") (clearTimeout(F), W(!0));
			}
		);

		function H(j) {
			let X = j.action === "wipe_canvas" ? WK(j.details) : G("div.details", M6(j.details)),
				P = { label: "Audit Log", reopen: () => s("audit") };

			return G("div.item.box.outset.mod-audit", G("div.mod-audit-head", G("b", j.action), G("span.desc", I0(j.created_at))), G("div.mod-audit-meta", t$("mod", j.mod_id, j.mod_username, P), t$("target", j.target_id, j.target_username, P)), X);
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

	function z3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = 0,
			Z = G("select.input.box", G("option", { value: "report" }, "User Reports"), G("option", { value: "bug" }, "Bug Reports"), G("option", { value: "feedback" }, "Feedback"), G("option", { value: "suggestion" }, "Suggestions"), {
				oninput() {
					q(!0);
				}
			});

		async function q(W) {
			if (W) (Y = 0, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let F = await OJ(Z.value, Y);

			if (!F.ok) {
				Q.replaceChildren(G0(await d(F)));

				return;
			}

			let H = await F.json();

			if ((Q.replaceChildren(), W && !H.length)) $.replaceChildren(G("p.desc", "No open items.")); else for (let j of H) $.append(K(j));

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
				j = (A, v, O) => G("button.btn", A, {
					async onclick() {
						if (!await i(O, A)) return;

						let L = await SJ(W.id, v, H.value.trim() || void 0);

						if (!L.ok) {
							F.replaceChildren(G("p.error.noicon", `${A} failed: ${await d(L)}`));

							return;
						}

						if (v != "ignore") z.remove();
						if (v == "prune") q(!0);
					}
				}),
				X = W.content.split("|"),
				P = X.slice(4).join("|").trim(),
				k = { label: "Feedback", reopen: () => s("feedback") },
				z = G(
					"div.item.box.outset.mod-review",
					G("div.mod-review-head", G("b", W.kind)),
					W.kind == "report"
						? [
							G("p.desc", t$("from", W.user_id, W.username, k), " ", t$("target", parseInt(X[1]), X[2], k)),
							G("div.details.pre", G("b", X[3]), P && `// ${P}`)
						]
						: [
							G("p.desc", t$("from", W.user_id, W.username, k)),
							G("div.details.pre", W.content)
						],
					G("div.input", H),
					G("div.mod-form-row", j("Resolve", "resolve", g.feedback.resolve), j("Ignore", "ignore", g.feedback.ignore), j("Prune", "prune", g.feedback.prune)),
					F
				);

			return z;
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

	var XK = 500;

	function t8() {
		if (!v0()) return;

		X5({
			label: "Wipe Canvas Selection",
			hint: g.wipe.hint,
			maxRegion: XK,
			dimUnpainted: !0,
			onRegion: async ($) => {
				if (!await i(`Clear a ${$.width}×${$.height} px area at (${$.x}, ${$.y})? This wipes those pixels for everyone (you can undo right after).`, "Wipe area", "Wipe", "Cancel")) return void t8();

				let J = await xJ($);

				if (!J.ok) return N0(J, "Could not wipe the area");

				let { applied: Y, chunks: Z, undoToken: q } = await J.json();

				new _("Area wiped", G("div.modal", G("p", `Cleared ${Y} pixel(s) across ${Z} chunk(s).`), G("p.desc", g.snapshotDisplayNote), G("div.btn-container", q ? z6(q) : "", G("button.btn", "Close", {
					onclick() {
						(p(), t8());
					}
				}))));
			}
		});
	}

	async function HK($, Q) {
		let J = await lJ($, Q);

		if (!J.ok) return null;

		let Y = new Uint8Array(await J.arrayBuffer()),
			Z = H$.deserialize(Y),
			q = Z.pixels instanceof Uint8Array ? Z.pixels : Z.pixels?.buffer ?? new Uint8Array(),
			K = D6(q);

		return K.length ? K : null;
	}

	function PK($) {
		document.querySelector(".mod-ghost-control")?.remove();

		let Q = $.states.filter((W) => W === U6).length,
			J = $.states.filter((W) => W === k6).length,
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
					(t5(), K.remove());
				}
			})
		);

		document.body.append(K);
	}

	function U3($, Q) {
		let J = G("div.list.mod-list.mod-ph-list"),
			Y = G("div.mod-ph-more"),
			Z = null,
			q = !1,
			K = [],
			W = new Map();

		async function F() {
			if (q) return;

			(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

			let k = await fJ($, Z ? { before: Z } : {});

			if ((q = !1, !k.ok)) {
				Y.replaceChildren(G0(await d(k)));

				return;
			}

			let { entries: z, next_cursor: A } = await k.json();

			if (!z.length && !Z) {
				(
					J.replaceChildren(G("p.desc", "No paint history (or pruned by retention).")),
					Y.replaceChildren()
				);

				return;
			}

			for (let v of z) {
				let O = K.length;

				(K.push(v), J.append(P(v, O)));
			}

			(
				Z = A,
				Y.replaceChildren(A
					? G("button.btn.mod-ph-loadmore", "Load more", { onclick: () => void F() })
					: G("span.desc", "End of history."))
			);
		}

		async function H(k) {
			let z = W.get(k.id);

			if (z) return z;

			let A = await HK($, k.id);

			if (A) W.set(k.id, A);

			return A;
		}

		async function j(k) {
			let z = K[k];

			if (!z) return;

			let A = await H(z);

			if (!A) {
				B$("Could not load submission pixels.");

				return;
			}

			let v = A.map(() => n5),
				O = await bJ(A.map((y) => y.pos));

			if (O.ok) {
				let { owners: y, deleted: w } = await O.json();

				v = y.map((h, T) => h === $ ? n5 : w?.[T] ? k6 : U6);
			}

			(p(), eJ(A, v));

			let M = q1(A);

			b1(M.x, M.y, M.width, M.height);

			let L = k + 1 < K.length || !!Z;

			PK({
				states: v,
				username: Q,
				position: `${k + 1} / ${K.length}${Z ? "+" : ""}`,
				onPrev: k > 0 ? () => void j(k - 1) : void 0,
				onNext: L ? () => void X(k) : void 0,
				onBack: () => {
					(
						t5(),
						document.querySelector(".mod-ghost-control")?.remove(),
						s("users", $)
					);
				}
			});
		}

		async function X(k) {
			if (k + 1 >= K.length && Z) await F();
			if (k + 1 < K.length) j(k + 1);
		}

		function P(k, z) {
			let A = G("div.mod-ph-thumb-box", G("span.desc", "…")),
				v = G("div.mod-ph-label", G("span", `${k.pixel_count} px`), G("span.desc", I0(k.created_at))),
				O = G(
					"div.item.box.outset.mod-ph-row",
					{
						onclick() {
							j(z);
						}
					},
					A,
					v
				);

			return (
				(async () => {
					let M = await H(k);

					if (!M) return;

					let L = q1(M);

					if ((A.replaceChildren(A8(M)), L)) v.append(G("span.desc", `@ ${L.x},${L.y}`));
				})(),
				O
			);
		}

		return (F(), G("div.mod-ph", J, Y));
	}

	function VK($) {
		if ($ === null || !Number.isFinite($) || $ < 0) return null;

		let Q = $ % f, J = $ / f | 0;

		return `@ ${Q},${J}`;
	}

	function k3($, Q) {
		let J = G("div.list.mod-list.mod-ch-list"),
			Y = G("div.mod-ch-more"),
			Z = null,
			q = !1;

		function K(H) {
			O0({ fallbackPos: H }).then((j) => {
				if (!j) return;

				(p(), m$({ label: Q, reopen: () => s("users", $) }));
			});
		}

		async function W() {
			if (q) return;

			(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

			let H = await uJ($, Z ? { before: Z } : {});

			if ((q = !1, !H.ok)) {
				Y.replaceChildren(G0(await d(H)));

				return;
			}

			let { entries: j, next_cursor: X } = await H.json();

			if (!j.length && !Z) {
				(
					J.replaceChildren(G("p.desc", "No chat messages.")),
					Y.replaceChildren()
				);

				return;
			}

			for (let P of j) J.append(F(P));

			(
				Z = X,
				Y.replaceChildren(X
					? G("button.btn.mod-ch-loadmore", "Load more", { onclick: () => void W() })
					: G("span.desc", "End of history."))
			);
		}

		function F(H) {
			let j = VK(H.pos),
				X = j
					? G("button.btn.mod-ch-loc.mod-jump-loc", j, { dataset: { tooltip: g.jumpSent }, onclick: () => K(H.pos) })
					: "";

			return G("div.item.box.outset.mod-ch-row", G("div.mod-ch-text", H.content ?? ""), G("div.mod-ch-meta", G("span.desc", I0(H.timestamp)), X));
		}

		return (W(), G("div.mod-ch", J, Y));
	}

	var u1 = null;

	async function RK() {
		if (u1) return u1;

		return (u1 = await (await m.cursor.data.$get()).json(), u1);
	}

	function _4($) {
		return u1?.find((Q) => Q.id === $)?.name ?? `#${$}`;
	}

	async function D3($ = {}) {
		let Q = await RK();

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
				W = G("div.modal-bg.confirm-bg.cursor-pick-bg", G("div.modal-container", G("div.modal-title", G("span", $.title ?? "Select a cursor"), G$("close", { ariaLabel: "Close", onclick: () => Z(null) })), G("div.modal-content", G("div.inventory.nopad", G("div.scroll.pad", G("div.items", Q.filter((F) => !F.free).map((F) => G(
					"div.item.box.tooltip",
					K.has(F.id) && { className: "owned" },
					{
						dataset: { tooltip: K.has(F.id) ? `${F.name} (owned)` : F.name },
						onclick: () => Z(F.id)
					},
					G("img", { src: f0(F.id), draggable: !1 })
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

	var V$ = f,
		a8 = k0,
		MK = "rgba(8,8,12,0.66)",
		zK = "rgba(255,56,56,0.5)",
		UK = 2,
		kK = 256;

	function L3($) {
		let { ownedPositions: Q } = $,
			J = new Uint8Array(i$ + 7 >> 3);

		for (let E = 0; E < Q.length; E++) {
			let c = Q[E];

			J[c >> 3] |= 1 << (c & 7);
		}

		let Y = (E) => J[E >> 3] >> (E & 7) & 1,
			Z = G("canvas.mod-mask-layer", { width: V$, height: a8 }),
			q = G("canvas.mod-select-layer", { width: V$, height: a8 }),
			K = Z.getContext("2d"),
			W = q.getContext("2d");

		(K.fillStyle = MK, K.fillRect(0, 0, V$, a8));

		for (let E = 0; E < Q.length; E++) {
			let c = Q[E];

			K.clearRect(c % V$, c / V$ | 0, 1, 1);
		}

		(W.fillStyle = zK, P$.append(Z, q));

		let F = G("div.mod-sel-hover", { style: { display: "none" } }),
			H = G("div.mod-sel-rect", { style: { display: "none" } });

		document.body.append(F, H);

		let j = new Set(),
			X = "rect",
			P = 24,
			k = !1,
			z = 0,
			A = 0,
			v = !1,
			O = null,
			M = null,
			L = () => $.onChange?.(j.size);

		function y(E, c) {
			if (E < 0 || E >= V$ || c < 0 || c >= a8) return;

			let a = c * V$ + E;

			if (!Y(a) || j.has(a)) return;

			(j.add(a), W.fillRect(E, c, 1, 1));
		}

		function w(E, c) {
			let a = Math.max(1, P >> 1), z0 = a * a;

			for (let j0 = -a; j0 <= a; j0++) {
				let R0 = c + j0;

				if (R0 < 0 || R0 >= a8) continue;

				for (let U0 = -a; U0 <= a; U0++) {
					if (X === "circle" && U0 * U0 + j0 * j0 > z0) continue;

					y(E + U0, R0);
				}
			}
		}

		function h(E, c, a, z0) {
			let j0 = Math.hypot(a - E, z0 - c),
				R0 = Math.max(1, P >> 1),
				U0 = Math.max(1, Math.ceil(j0 / R0));

			for (let h0 = 1; h0 <= U0; h0++) w(Math.round(E + (a - E) * h0 / U0), Math.round(c + (z0 - c) * h0 / U0));
		}

		function T() {
			if (!O || !M) return;

			let E = Math.min(O[0], M[0]),
				c = Math.min(O[1], M[1]),
				a = Math.max(O[0], M[0]),
				z0 = Math.max(O[1], M[1]);

			for (let j0 = 0; j0 < Q.length; j0++) {
				let R0 = Q[j0], U0 = R0 % V$, h0 = R0 / V$ | 0;

				if (U0 >= E && U0 <= a && h0 >= c && h0 <= z0) y(U0, h0);
			}
		}

		function B() {
			return {
				b: C.rect,
				sx: C.rect.width / $0.width,
				sy: C.rect.height / $0.height
			};
		}

		function N() {
			if (!O || !M) {
				H.style.display = "none";

				return;
			}

			let { b: E, sx: c, sy: a } = B(),
				z0 = Math.min(O[0], M[0]),
				j0 = Math.min(O[1], M[1]),
				R0 = Math.abs(M[0] - O[0]) + 1,
				U0 = Math.abs(M[1] - O[1]) + 1;

			Object.assign(H.style, {
				display: "block",
				left: `${E.left + z0 * c}px`,
				top: `${E.top + j0 * a}px`,
				width: `${R0 * c}px`,
				height: `${U0 * a}px`
			});
		}

		function I(E, c) {
			if (X === "rect") {
				F.style.display = "none";

				return;
			}

			let { sx: a } = B(), z0 = Math.max(4, P * a);

			Object.assign(F.style, {
				display: "block",
				left: `${E}px`,
				top: `${c}px`,
				width: `${z0}px`,
				height: `${z0}px`,
				borderRadius: X === "circle" ? "50%" : "0"
			});
		}

		function S(E) {
			if (E.button !== 0) return;

			(E.preventDefault(), E.stopPropagation());

			let [c, a] = _0(E.clientX, E.clientY);

			if (X === "rect") (v = !0, O = [c, a], M = [c, a], N()); else (k = !0, z = c, A = a, w(c, a), L());
		}

		function n(E) {
			if (v) {
				(
					E.preventDefault(),
					E.stopPropagation(),
					M = _0(E.clientX, E.clientY),
					N()
				);

				return;
			}

			if (k) {
				(E.preventDefault(), E.stopPropagation());

				let [c, a] = _0(E.clientX, E.clientY);

				(h(z, A, c, a), z = c, A = a, L());

				return;
			}

			I(E.clientX, E.clientY);
		}

		function Q0(E) {
			if (v && E.button === 0) {
				(
					E.preventDefault(),
					E.stopPropagation(),
					v = !1,
					T(),
					H.style.display = "none",
					O = M = null,
					L()
				);

				return;
			}

			if (k && E.button === 0) (E.preventDefault(), E.stopPropagation(), k = !1);
		}

		function l(E) {
			if (E.key !== "Escape") return;
			if (document.querySelector(".modal-bg")) return;

			(E.preventDefault(), E.stopPropagation(), t(), $.onExit?.());
		}

		let e = (E) => E.preventDefault();

		(
			M0.addEventListener("mousedown", S, !0),
			window.addEventListener("mousemove", n, !0),
			window.addEventListener("mouseup", Q0, !0),
			document.addEventListener("keydown", l, !0),
			M0.addEventListener("contextmenu", e, !0)
		);

		let P0 = !1;

		function t() {
			if (P0) return;

			(
				P0 = !0,
				M0.removeEventListener("mousedown", S, !0),
				window.removeEventListener("mousemove", n, !0),
				window.removeEventListener("mouseup", Q0, !0),
				document.removeEventListener("keydown", l, !0),
				M0.removeEventListener("contextmenu", e, !0),
				Z.remove(),
				q.remove(),
				F.remove(),
				H.remove()
			);
		}

		return {
			setTool(E) {
				if ((X = E, E === "rect")) F.style.display = "none";
			},

			setBrushSize(E) {
				P = Math.max(UK, Math.min(kK, Math.round(E)));
			},

			clearSelection() {
				(j.clear(), W.clearRect(0, 0, V$, a8), L());
			},
			count: () => j.size,
			positions: () => [...j],
			destroy: t
		};
	}

	async function A3($, Q = 0) {
		let J = await AJ($, Q);

		if (!J.ok) return null;

		let Y = new Uint8Array(await J.arrayBuffer()),
			Z = H$.deserialize(Y),
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

	var T3 = [
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
		C3 = T3[0].tools[0];

	async function I3($, Q, J) {
		if (!v0()) return;

		J("Loading this user's pixels…", !0);

		let Y;

		try {
			Y = await A3($);
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

		(p(), DK($, Q, Y));
	}

	function DK($, Q, J) {
		let Y = J,
			Z = G("span.mod-sel-count"),
			q = G("button.btn.mod-sel-delete", "Delete selected"),
			K = G("button.btn", "Clear selection"),
			W = G("span.mod-sel-sizeout", "24px"),
			F = G("input.mod-sel-size", { type: "range", min: "2", max: "256", value: "24" }),
			H = G("div.mod-sel-brush", G("span", "Brush"), F, W);

		H.style.display = "none";

		let j = C3.tool,
			X = 24,
			P,
			k = (l) => {
				(
					Z.textContent = `${l} flagged`,
					q.textContent = l ? `Delete selected (${l})` : "Delete selected",
					q.disabled = l === 0,
					K.disabled = l === 0
				);
			};

		function z(l) {
			let e = L3({
				ownedPositions: l.positions,
				onChange: (P0) => k(P0),
				onExit: () => A()
			});

			return (e.setTool(j), e.setBrushSize(X), e);
		}

		let A = () => {
			(P.destroy(), Q0.remove(), s("users", $));
		};

		(
			P = z(Y),
			F.oninput = () => {
				(
					X = Number(F.value),
					P.setBrushSize(X),
					W.textContent = `${F.value}px`
				);
			}
		);

		let v = G("p.mod-sel-desc", g.wipe.tools[C3.tool]),
			O = [],
			M = T3.map(({ group: l, tools: e }) => {
				let P0 = e.map(({ tool: t, label: E }) => {
					let c = G("button.btn.mod-sel-tool", E);

					return (
						c.onclick = () => {
							(j = t, P.setTool(t));

							for (let a of O) a.classList.toggle("active", a === c);

							(
								H.style.display = t === "rect" ? "none" : "",
								v.textContent = g.wipe.tools[t]
							);
						},
						O.push(c),
						c
					);
				});

				return G("div.mod-sel-group", G("span.mod-sel-group-label", l), G("div.mod-sel-group-btns", ...P0));
			});

		O[0].classList.add("active");

		let L = G("p.mod-sel-warn"),
			y = G("div.mod-range-track"),
			w = G("div.mod-range-thumb");

		y.append(w);

		let h = G("div.mod-range-label"),
			T = Y.truncated ? G("div.mod-range", L, y, h) : "",
			B = () => Math.max(0, Y.total - Y.cap);

		function N(l) {
			return Math.max(28, l * Math.min(1, Y.cap / Y.total));
		}

		function I(l) {
			let e = y.clientWidth || 260,
				P0 = N(e),
				t = Math.max(0, e - P0),
				E = B();

			(
				w.style.width = `${P0}px`,
				w.style.left = `${E === 0 ? 0 : t * (l / E)}px`
			);

			let c = Math.min(Y.total, l + Y.cap);

			h.textContent = `Viewing pixels ${(l + 1).toLocaleString()}–${c.toLocaleString()} of ${Y.total.toLocaleString()}`;
		}

		function S(l) {
			let e = y.clientWidth || 260,
				P0 = Math.max(0, e - N(e));

			return P0 === 0 ? 0 : Math.round(l / P0 * B());
		}

		if (T) {
			L.textContent = r0(g.wipe.warn, Y.total.toLocaleString(), Y.cap.toLocaleString());

			let l = !1, e = 0, P0 = 0;

			(
				w.onpointerdown = (E) => {
					(
						E.preventDefault(),
						l = !0,
						e = E.clientX,
						P0 = parseFloat(w.style.left || "0")
					);

					try {
						w.setPointerCapture(E.pointerId);
					} catch {}
				},

				w.onpointermove = (E) => {
					if (!l) return;

					let c = y.clientWidth || 260,
						a = Math.max(0, c - N(c)),
						z0 = Math.max(0, Math.min(a, P0 + (E.clientX - e)));

					w.style.left = `${z0}px`;

					let j0 = S(z0), R0 = Math.min(Y.total, j0 + Y.cap);

					h.textContent = `Viewing pixels ${(j0 + 1).toLocaleString()}–${R0.toLocaleString()} of ${Y.total.toLocaleString()}`;
				}
			);

			let t = (E) => {
				if (!l) return;

				l = !1;

				try {
					w.releasePointerCapture(E.pointerId);
				} catch {}

				n(S(parseFloat(w.style.left || "0")));
			};

			(
				w.onpointerup = t,
				w.onpointercancel = t,
				setTimeout(() => I(Y.offset), 0)
			);
		}

		async function n(l) {
			if (l === Y.offset) return;

			h.textContent = "Loading section…";

			let e = null;

			try {
				e = await A3($, l);
			} catch {}

			if (!e) {
				I(Y.offset);

				return;
			}

			(Y = e, P.destroy(), P = z(Y), k(0), I(Y.offset));
		}

		(
			q.onclick = async () => {
				let l = P.positions();

				if (!l.length) return;
				if (!await i(r0(g.wipe.confirm, l.length, Q), "Delete selected strokes", "Delete", "Cancel")) return;

				let P0 = await TJ($, l);

				if (!P0.ok) return Y0("Could not delete selected pixels", await d(P0));

				let { pixelsWiped: t, undoToken: E } = await P0.json();

				(
					P.destroy(),
					Q0.remove(),
					new _("Strokes deleted", G("div.modal", G("p", r0(g.wipe.removed, t, Q)), G("p.desc", g.snapshotDisplayNote), G(
						"div.btn-container",
						E ? z6(E) : "",
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

		(k(0), document.body.append(Q0));
	}

	function y4($, Q) {
		let J = G("div.list", "Loading..."), Y = !1;

		new _("Moderation", G("div.clans-modal", Q && v4(Q), R1($, !0), G(
			"details.clan-member-list.box",
			G("summary", "Members", {
				async onclick() {
					if (Y) return;

					Y = !0;

					let Z = await gJ($.id);

					if (!Z.ok) return (Y = !1, J.replaceChildren(G("p.error.noicon", await d(Z))));

					let q = await Z.json();

					J.replaceWith(G("div.list", q.map((K, W, F) => [
						G("a.link", K.username, {
							onclick() {
								s("users", K.id, { label: $.name, reopen: () => y4($, Q) });
							}
						}),
						W < F.length - 1 && ", "
					])));
				}
			}),
			J
		)));
	}

	var E3 = 50, LK = ["user", "moderator", "admin"];

	function g4($) {
		let Q = G("div.list.mod-list"),
			J = G("div.mod-detail"),
			Y = G("div.mod-status"),
			Z = "";

		async function q(M) {
			(Z = M, Y.replaceChildren("Searching..."));

			let L = await zJ(M);

			if (M != Z) return;

			if (!L.ok) {
				Y.replaceChildren(G0(await d(L)));

				return;
			}

			let { users: y } = await L.json();

			(Y.replaceChildren(), K(y));
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
				G("span.mod-row-meta", `#${L.id}`, Z1(L.role), L.ban && G("span.mod-tag.banned", "banned"), L.mute && G("span.mod-tag.muted", "muted"), Array.isArray(L.flagged) && G("span.mod-tag.flagged", L.flagged.length > 1 ? `flagged x${L.flagged.length}` : "flagged"))
			)));
		}

		async function W(M, L, y = !1) {
			J.replaceChildren(G("p.desc", "Loading..."));

			let w = await UJ(M);

			if (!w.ok) {
				J.replaceChildren(G0(await d(w)));

				return;
			}

			let { user: h, cursors: T } = await w.json();

			if ((H(h, T, L), y && h.username && v.value !== h.username)) (v.value = h.username, q(h.username));
		}

		function F(M, L, y) {
			M.replaceChildren(G(y ? "p.success.noicon" : "p.error.noicon", L));
		}

		function H(M, L, y) {
			let w = M.id,
				h = G("div.mod-action-msg"),
				T = typeof M.ban == "object" ? M.ban : null,
				B = typeof M.mute == "object" ? M.mute : null,
				N = Array.isArray(M.flagged) ? M.flagged : null,
				I = !!M.excluded_from_leaderboard,
				S = (t) => W(w, t),
				n = (t) => {
					let E = G("button.btn.mod-undo", "Undo", {
						async onclick() {
							E.disabled = !0;

							let c = await t();

							if (!c.ok) {
								(E.disabled = !1, F(h, `Undo failed: ${await d(c)}`, !1));

								return;
							}

							await S({ text: "Reverted." });
						}
					});

					return E;
				};

			if (y) {
				if ((F(h, y.text, !0), y.undo)) h.append(n(y.undo));
			}

			let Q0 = (t, E, c) => {
					let a = G("input.box", { type: "text", placeholder: "Reason (optional)" }),
						z0 = G("select.box.outset", o5.map((j0, R0) => G("option", j0.label, { value: String(R0), selected: R0 == 0 })));

					return G("div.mod-form-sanction", G("div.input", a), G("div.mod-form-row", z0, G("button.btn", t, {
						async onclick() {
							let j0 = o5[Number(z0.value)],
								R0 = j0.seconds == null ? "permanently" : `for ${j0.label}`;

							if (!await i(`${t} ${M.username} ${R0}?`, `${t} user`)) return;

							let h0 = await E(a.value.trim(), j0.seconds ?? void 0);

							if (!h0.ok) {
								F(h, `${t} failed: ${await d(h0)}`, !1);

								return;
							}

							await S({ text: `${t} applied.`, undo: c });
						}
					})));
				},
				l = (t, E, c, a, z0) => G("button.btn", t, {
					async onclick() {
						if (!await i(E, t)) return;

						let R0 = await c();

						if (!R0.ok) {
							F(h, `${t} failed: ${await d(R0)}`, !1);

							return;
						}

						let U0 = "", h0;

						try {
							let E5 = await R0.clone().json();

							if (typeof E5.pixelsCleared == "number") U0 = ` (${E5.pixelsCleared} pixels cleared)`;

							h0 = E5.undoToken;
						} catch {}

						await S({
							text: a + U0 + (z0 ? ` ${z0}` : ""),
							undo: h0 ? () => V6(h0) : void 0
						});
					}
				}),
				e = G("div.mod-sessions"),
				P0 = d1();

			J.replaceChildren(G(
				"div.mod-detail-inner",
				G(
					"div.mod-detail-head",
					G("h3.tooltip.mod-jump-name", M.username, {
						dataset: { tooltip: "Click to jump to this user's cursor" },
						async onclick() {
							if (await O0({ userId: w, username: M.username })) (p(), m$({ label: M.username, reopen: () => s("users", w) }));
						}
					}),
					Z1(M.role),
					G("span.desc", `#${M.id}`)
				),
				G(
					"div.mod-kv",
					A("Created At", I0(M.created_at)),
					A("Country", F6(M.country_code || "")),
					A("Paint", `${Math.floor(M.paint / C0)} cans (${M.paint} px)`),
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
							y4(M.clan, { label: M.username, reopen: () => s("users", M.id) });
						}
					})),
					"email" in M && A("Email", M.email || "-")
				),
				T
					? G("p.warning.noicon", `Banned ${x0(T.at)} by #${T.by ?? "?"}. Reason: ${T.reason || "(none)"}. ` + (T.until ? `Until ${x0(T.until)}.` : "Permanent."))
					: G("p.desc", "Not banned."),
				B
					? G("p.warning.noicon", `Muted ${x0(B.at)} by #${B.by ?? "?"}. Reason: ${B.reason || "(none)"}. ` + (B.until ? `Until ${x0(B.until)}.` : "Permanent."))
					: G("p.desc", "Not muted."),
				N
					? G("div.mod-flagged-line", G("span.warning.noicon", "Flagged: " + N.map((t) => `${t.kind} (x${t.hits})`).join(", ") + "."), G("button.btn.mod-flagged-open", "Open review queue", {
						onclick() {
							s("review", void 0, { label: M.username, reopen: () => s("users", w) });
						}
					}))
					: G("p.desc", "Not flagged."),
				h,
				G("div.mod-section", G("b", "Ban"), T
					? l("Unban", `Unban ${M.username}?`, () => b5(w), "User unbanned.")
					: Q0("Ban", (t, E) => DJ(w, t, E), () => b5(w))),
				G("div.mod-section", G("b", "Mute"), B
					? l("Unmute", `Unmute ${M.username}?`, () => f5(w), "User unmuted.")
					: Q0("Mute", (t, E) => LJ(w, t, E), () => f5(w))),
				G(
					"div.mod-section",
					G("b", "Leaderboard"),
					I
						? G("p.warning.noicon", "Hidden from the leaderboard.")
						: G("p.desc.mod-hint", "Hides this user from the users board and from clan/country totals."),
					I
						? l("Show on leaderboard", `Show ${M.username} on the leaderboard again?`, () => l5(w, !1), "User restored to the leaderboard.")
						: l("Hide from leaderboard", `Hide ${M.username} from the leaderboard?`, () => l5(w, !0), "User hidden from the leaderboard.")
				),
				G("div.mod-section", G("b", "Strokes"), G("p.desc.mod-hint", g.user.delete.desc), G("div.mod-form-row", l("Delete All User's Strokes", r0(g.user.delete.confirm, M.username), () => CJ(w), "Deleted the user's strokes.", g.snapshotDisplayNote), G("button.btn", "Select Strokes to Delete...", {
					onclick() {
						I3(w, M.username, (t, E) => z(h, t, E));
					}
				}))),
				G("div.mod-section", G("b", "Paint history"), G("p.desc.mod-hint", g.user.draws), U3(M.id, M.username)),
				G("div.mod-section", G("b", "Chat history"), G("p.desc.mod-hint", g.user.messages), k3(M.id, M.username)),
				G("div.mod-section", G("b", "Paint"), X(M, h, S)),
				G("div.mod-section", G("b", "Cursors"), P(M, L, h, S)),
				G("div.mod-section", G("b", "Message"), j(M, h)),
				P0 && G("div.mod-section", G("b", "Role"), k(M, h, S)),
				P0 && G(
					"div.mod-section",
					G("b", "Sessions"),
					G("button.btn", "Load sessions", {
						async onclick() {
							e.replaceChildren(G("p.desc", "Loading..."));

							let t = await kJ(w);

							if (!t.ok) {
								e.replaceChildren(G0(await d(t)));

								return;
							}

							let E = await t.json();

							if (!E.length) {
								e.replaceChildren(G("p.desc", "No sessions."));

								return;
							}

							e.replaceChildren(G("div.list.mod-list", ...E.map((c) => G("div.item.box.outset.mod-session", G("span", `#${c.id}`), G("span", c.ip || "no ip"), G("span.desc", "seen ", I0(c.last_verified_at))))));
						}
					}),
					e
				)
			));
		}

		function j(M, L) {
			let y = G("textarea.box", {
				placeholder: `Message to ${M.username}...`,
				rows: 2,
				maxLength: 1000
			});

			return G("div.mod-form", G("div.input", y), G("div.mod-form-row", G("button.btn", "Send message", {
				async onclick() {
					let w = y.value.trim();

					if (!w) {
						z(L, "Message can't be empty.", !1);

						return;
					}

					let h = await hJ(M.id, w);

					if (!h.ok) {
						z(L, `Message failed: ${await d(h)}`, !1);

						return;
					}

					(y.value = "", z(L, "Message sent.", !0));
				}
			})));
		}

		function X(M, L, y) {
			let w = G("input.box", { type: "number", min: "1", max: String(E3), value: "10" }),
				h = (T) => G("button.btn", `Reset ${T}`, {
					async onclick() {
						if (!await i(`Reset ${M.username}'s ${T}? (current: ${Math.floor(M[T])})`)) return;

						let N = await EJ(M.id, T);

						if (!N.ok) return z(L, await d(N), !1);

						await y({ text: `Reset ${T}.` });
					}
				});

			return G(
				"div.mod-form-row",
				w,
				G("button.btn", "Give Cans", {
					async onclick() {
						let T = Math.max(1, Math.min(E3, Math.floor(Number(w.value) || 0)));

						if ((
							w.value = String(T),
							!await i(`Give ${T} can${T > 1 ? "s" : ""} to ${M.username}?`, "Give cans")
						)) return;

						let N = await IJ(M.id, T);

						if (!N.ok) {
							z(L, `Give cans failed: ${await d(N)}`, !1);

							return;
						}

						await y({ text: `Gave ${T} can${T > 1 ? "s" : ""}.` });
					}
				}),
				h("paint"),
				h("coins")
			);
		}

		function P(M, L, y, w) {
			let h = L.length ? L.map((T) => _4(T)).join(", ") : "None unlocked.";

			return G("div", G("p.desc.mod-hint", `Unlocked: ${h}`), G("div.mod-form-row", G("button.btn", "Give a cursor...", {
				async onclick() {
					let T = await D3({ title: `Give a cursor to ${M.username}`, owned: L });

					if (T == null) return;

					let B = _4(T);

					if (!await i(`Give the "${B}" cursor to ${M.username}?`, "Give cursor")) return;

					let I = await wJ(M.id, T);

					if (!I.ok) {
						z(y, `Give cursor failed: ${await d(I)}`, !1);

						return;
					}

					let S = {};

					try {
						S = await I.clone().json();
					} catch {}

					await w({
						text: S.granted === !1
							? `${M.username} already has the "${B}" cursor.`
							: `Gave the "${B}" cursor.`
					});
				}
			})));
		}

		function k(M, L, y) {
			let w = M.role,
				h = G("select.box.outset", LK.map((T) => G("option", T, { value: T, selected: T == M.role })));

			return G("div.mod-form-row", h, G("button.btn", "Set role", {
				async onclick() {
					let T = h.value;

					if (T == M.role) return;

					if (!await i(`Change ${M.username}'s role to "${T}"?`, "Change role")) {
						h.value = M.role;

						return;
					}

					let N = await u5(M.id, T);

					if (!N.ok) {
						(
							z(L, `Role change failed: ${await d(N)}`, !1),
							h.value = M.role
						);

						return;
					}

					await y({ text: `Role set to ${T}.`, undo: () => u5(M.id, w) });
				}
			}));
		}

		function z(M, L, y) {
			M.replaceChildren(G(y ? "p.success.noicon" : "p.error.noicon", L));
		}

		function A(M, L) {
			return G("div.mod-kv-row", G("span.mod-kv-label", M), G("span.mod-kv-value", L));
		}

		let v = G("input.box", { type: "text", placeholder: "Search by username..." }),
			O;

		if ((
			v.oninput = () => {
				(
					clearTimeout(O),
					O = setTimeout(() => void q(v.value.trim()), 250)
				);
			},

			v.onkeydown = (M) => {
				if (M.key == "Enter") (clearTimeout(O), q(v.value.trim()));
			},
			q(""),
			$ !== void 0
		)) W($, void 0, !0);

		return G("div.mod-users", G("div.mod-users-left", G("div.input.mod-search", v), Y, Q), J);
	}

	var CK = ($) => ({
		onclick() {
			s("users", $, { label: "Referrals", reopen: () => s("referrals") });
		}
	});

	function w3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = 0;

		async function Z(K) {
			if (K) (Y = 0, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let W = await yJ(Y);

			if (!W.ok) {
				Q.replaceChildren(G0(await d(W)));

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
			let W = { label: "Referrals", reopen: () => s("referrals") },
				F = G("div.mod-action-msg"),
				H = G(
					"div.item.box.outset.mod-review",
					G("div.mod-review-head", G("b", K.code), !K.verified && G("span.mod-tag.flagged", "Not verified"), K.flagged && G("span.mod-tag.banned", "Flagged"), I0(K.created_at)),
					G("p.desc", t$("created by", K.user_id, K.username, W), ` · ${K.uses} uses`),
					G(
						"div.mod-form-row",
						G("button.btn", "List Users", {
							async onclick() {
								let j = await (await vJ(K.user_id)).json();

								(
									j.sort((X, P) => P.created_at - X.created_at),
									F.replaceChildren(G("div.details.pre", !j.length && "None", j.map((X, P) => [
										G("span", `${X.country_code} `, G("a.link", X.username, CK(X.id)), " (", I0(X.created_at, XJ(X.created_at)), ")"),
										P < j.length - 1 && "; "
									])))
								);
							}
						}),
						!K.verified && G("button.btn", "Verify", {
							async onclick() {
								if (!await i(r0(g.referral.confirmVerify, K.username))) return;

								let X = await d5(K.code, "verify");

								if (!X.ok) {
									F.replaceChildren(G("p.error.noicon", await d(X)));

									return;
								}

								(K.verified = !0, K.flagged = !1, H.replaceWith(q(K)));
							}
						}),
						G("button.btn", "Delete", {
							async onclick() {
								if (!await i(r0(g.referral.confirmDelete, K.username))) return;

								let X = await d5(K.code, "delete");

								if (!X.ok) {
									F.replaceChildren(G("p.error.noicon", await d(X)));

									return;
								}

								H.remove();
							}
						})
					),
					F
				);

			return H;
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

	function h3() {
		let $ = G("div.mod-action-msg"),
			Q = G("p.desc.mod-bot-mapping"),
			J = G("input.box.mod-bot-slider", { type: "range", min: "-1", max: "120", step: "1", value: "0" }),
			Y = (q) => {
				if (q === -1) return "Global chat is disabled (-1 / inf)";
				if (q === 0) return "Global chat has no cooldown";

				return `Global chat has ${T0(q, "second")} of cooldown`;
			},
			Z = () => {
				Q.replaceChildren(Y(Number(J.value)));
			};

		return (
			J.oninput = Z,
			(async () => {
				let q = await tJ();

				if (!q.ok) {
					$.replaceChildren(G0(await d(q)));

					return;
				}

				(
					J.value = String(Math.floor(Number(await q.text()) / 1000)),
					Z()
				);
			})(),

			G("div.mod-misc-config", G("p.desc", "Configure the global delay required between global user chat messages."), G("div.mod-form", G("div.mod-bot-slider-row", G("span.desc", "inf"), J, G("span.desc", "120s")), Q, $, G("div.mod-form-row", G("button.btn", "Save", {
				async onclick() {
					let q = Number(J.value), K = await aJ(q);

					if (!K.ok) {
						$.replaceChildren(G0(await d(K)));

						return;
					}

					$.replaceChildren(G("p.success.noicon", g.gwValSaved));
				}
			}))))
		);
	}

	var g = {}, x4 = !1;

	async function B3() {
		if (x4 || !v0()) return;

		x4 = !0;

		let $ = await m.mod.locale.$get();

		if (!$.ok) return (x4 = !1, N0($, "Could not load mod locale"));

		let Q = await $.json();

		for (let J in Q) g[J] = Q[J];
	}

	function v0() {
		let $ = R.user?.role;

		return $ === "moderator" || $ === "admin";
	}

	function d1() {
		return R.user?.role === "admin";
	}

	var AK = new Set(["review", "broadcast", "botconfig"]);

	function m3($) {
		if ($ === "inspect") return (p(), l1(), !0);
		if ($ === "wipe") return (p(), t8(), !0);

		return !1;
	}

	function N3($) {
		switch ($) {
			case "users":
				return g4();

			case "review":
				return F3();

			case "audit":
				return M3();

			case "feedback":
				return z3();

			case "referrals":
				return w3();

			case "broadcast":
				return W3();

			case "botconfig":
				return X3();

			case "misc":
				return h3();

			case "inspect":

			case "wipe":
				throw new Error(`mod tool tab "${$}" has no panel`);
		}
	}

	function v4($) {
		return G("div.mod-back", G("button.btn.mod-back-btn", `↩ Back to ${$.label}`, {
			onclick() {
				$.reopen();
			}
		}));
	}

	async function O3($) {
		let Q = await m.mod.users.idFromName.$get({ query: { name: $ } });

		if (!Q.ok) return N0(Q, "Could not fetch user");

		let J = await Q.json();

		s("users", J.id);
	}

	function s($ = "users", Q, J) {
		if (!v0()) return;
		if ((Y1(), m3($))) return;

		let Y = G("div.pad.mod-body");

		if (J) Y.append(v4(J));

		Y.append($ === "users" ? g4(Q) : N3($));

		let Z = Object.keys(g.tabLabels).filter((j) => d1() || !AK.has(j)),
			q = H5(Z.map((j) => ({
				label: g.tabLabels[j],
				active: j == $,
				action() {
					if (m3(j)) return;

					(W(j), Y.replaceChildren(N3(j)));
				}
			}))),
			K = Array.from(q.querySelectorAll(".abtn"));

		function W(j) {
			Z.forEach((X, P) => K[P]?.classList.toggle("active", X == j));
		}

		let F = Z.indexOf("feedback"),
			H = F >= 0 ? K[F] : void 0;

		if (H) (async () => {
			try {
				let j = await _J();

				if (!j.ok) return;

				let { total: X } = await j.json();

				if (X > 0) H.append(G("span.mod-tab-dot.tooltip", {
					dataset: { tooltip: `${X} open feedback item${X === 1 ? "" : "s"}` }
				}));
			} catch {}
		})();

		new _("Moderation", G("div.mod-modal.nopad", q, Y));
	}

	var TK = ($) => Math.max(Math.min($ * 50 + 1500, 1e4), 2000);

	function _3($, Q) {
		let J = $ ? s8 : o1;

		if ((J.prepend(Q), J.childElementCount >= 200)) J.children[200]?.remove();
	}

	function $2($, Q, J, Y, Z, q = !1, K) {
		let W = $ == R.connectionId,
			F = Y ?? R.user.username,
			H = G(
				"p.box",
				{
					ondblclick: () => p4(F),
					onclick: (X) => {
						if (X.shiftKey) p4(F);
					}
				},
				G(
					"b.tooltip",
					Z && G("b", h$(Z)),
					F,
					v0()
						? {
							dataset: { tooltip: "Click to open mod panel" },
							onclick: () => void O3(Y)
						}
						: {
							dataset: { tooltip: "Click to jump to the user!" },
							onclick: () => void O0({ connId: $, fallbackPos: J, username: F })
						},
					W && { className: "self" }
				),
				G("span", Q)
			);

		if (Q.split(/\s+/).includes(R.user.username)) H.classList.add("important");
		if (K !== void 0) H.dataset.uid = String(K);

		_3(q, H);
	}

	function Q2($) {
		for (let Q of [o1, s8]) s0(`p.box[data-uid="${$}"]`, Q).forEach((J) => J.remove());
	}

	function S3($, Q, ...J) {
		_3(Q, G("p.box.local", $ && { className: "error" }, G("span", J)));
	}

	function J2($, Q) {
		if (!$.element || x.a11y.hideChatBubbles) return;

		let J = G("p", Q);

		(
			$.element.querySelector(".chat-bubble")?.append(J),
			setTimeout(() => J.remove(), TK(Q.length))
		);
	}

	async function y3($, Q) {
		let J = await f$(6, { message: $, isGlobal: Q }, 5000);

		if ("error" in J) {
			let Y = J;

			if (Y.error == "muted") S3(!0, Q, `You are muted. (expires: ${W6(Y.until || null)})`); else if (Y.error == "chatCooldown") (
				P5(Y.until),
				S3(!0, Q, Y.until
					? "Global chat is on cooldown!"
					: "Global chat is disabled.")
			);
		}

		if (!J.message) return;
		if (J.cooldown !== void 0) P5(J.cooldown);

		Z7(J.message);
	}

	function v3() {
		if (C.normalizedZoom <= U8) return (Y0("You need to zoom in to chat locally!"), !0);

		return !1;
	}

	var r8 = !1,
		o1 = G("div.list"),
		s8 = G("div.list"),
		g3 = G("div.top-bar"),
		T1 = G("div.chat-log", g3, s8),
		c4 = !1,
		n1 = !1;

	function y8() {
		(
			g3.replaceChildren(G("p#player-count", `${T0(R.onlinePlayers + R.onlineViewers, "player")} online`), G(
				"div.box.tabs",
				G("button.btn.tooltip", "Local", r8 && { className: "active" }, {
					dataset: { tooltip: "Nearby Cursors Only" },
					onclick: () => {
						(c4 = !1, x3());
					}
				}),
				G("button.btn.tooltip", "Global", !r8 && { className: "active" }, {
					dataset: { tooltip: "All Online Users" },
					onclick: () => {
						(c4 = !0, p3());
					}
				}),
				G("button#pin-chat-btn.btn.tooltip", G("img", { src: "/static/icon/tool/pin.png", draggable: !1, alt: "Pin" }), n1 && { className: "primary" }, {
					onclick() {
						n1 = !n1;

						let $ = T1.parentElement;

						if (n1) $.style.setProperty("display", "block", "important"); else $.style.removeProperty("display");

						y8();
					},

					dataset: {
						tooltip: n1
							? "Chat is pinned (stays on screen)"
							: "Chat is not pinned (auto-hides)"
					}
				})
			)),

			s0("div.chat-input-box").forEach(($) => {
				$.classList.toggle("global", !r8);
			})
		);
	}

	function x3() {
		if (v3()) return;

		(r8 = !0, s8.replaceWith(o1), y8());
	}

	function p3() {
		(r8 = !1, o1.replaceWith(s8), y8());
	}

	function c3() {
		if (c4) return;
		if (C.normalizedZoom <= U8) p3(); else x3();
	}

	var t1 = 0;

	function IK($) {
		if ($ === void 0) $ = 0;
		if ((t1 = $, !$)) return $;

		let Q = Math.round(($ - Date.now()) / 1000);

		if (Q <= 0) return (t1 = 0, 0);

		return (t1 = $, Q);
	}

	function P5($) {
		let Q = IK($), J = Q === null ? "inf" : `${Q}s`;

		s0("div.chat-input-box").forEach((Y) => {
			if (Q == 0) delete Y.dataset.cooldown; else Y.dataset.cooldown = J;
		});
	}

	setInterval(
		() => {
			if (t1) P5(t1);
		},
		500
	);

	var EK = /^can i ha[sz] cursor pl[zs]\??$/i;

	function CQ($ = !1) {
		let Q = !1,
			J,
			Y = G("input#chat-input-field.input.box", {
				type: "text",
				spellcheck: !1,
				maxLength: q6,
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
			Z = G$("tool/send", {
				id: "tool-send-btn",
				ariaLabel: "Send Message",
				async onclick() {
					let K = Y.value.slice(0, q6).trim();

					if (!K || Q) return;

					try {
						if ((
							Q = !0,
							Y.readOnly = !0,
							q.style.opacity = "0.5",
							EK.test(K) && !x.flags.plzCursor
						)) {
							if (!await b$({ code: "CAN_I_HAS_CURSOR" })) {
								(
									new _("plz?", G("p", "yes u may haz cursor")),
									x.flags.plzCursor = !0,
									m0()
								);

								return;
							}
						}

						(await y3(K, !r8), Y.value = "");
					} finally {
						(
							await $6(500),
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

	function xY() {
		return (
			y8(),
			G("div.input.chat-box.container", G("div.popup.box.outset.chat-log-wrapper", T1), CQ())
		);
	}

	function p4($, Q = !0) {
		let J = u("input#chat-input-field");

		if (!J) return;

		let Y = J.value, Z = Y && Y.at(-1) != " ";

		if ((J.value = `${Y}${Z ? " " : ""}${$} `.slice(0, q6), Q)) J.focus();
	}

	var d6 = 1.5,
		U8 = 0.8,
		$0 = G("canvas", { width: f, height: k0 }),
		f3 = "/static/brick-background.jpg",
		wK = "/static/brick-background-hi.webp",
		l4 = G("img.canvas-background", { fetchPriority: "high", src: f3, draggable: !1 }),
		R$ = null,
		a1 = !1,
		hK = 0.8;

	function l3() {
		if (R$ || x.a11y.lowQualityBg || l0) return;

		(R$ = new Image(), R$.decoding = "async", R$.src = wK);
	}

	var u3 = window.requestIdleCallback ?? (($) => setTimeout($, 800));

	u3(l3);

	function mK() {
		if (a1) return;
		if (C.zoom < hK) return;
		if (!R$ || !R$.complete || R$.naturalWidth === 0) return;

		(l4.src = R$.src, a1 = !0);
	}

	var Z3 = () => a1 || R$ || u3(l3);

	function q3() {
		if (!a1) return;

		(l4.src = f3, a1 = !1, R$ = null);
	}

	var K1 = G("div.paint-layers", A1, p6, $0),
		P$ = G("div.canvas-container", l4, K1),
		M0 = G("div.canvas-wrapper", P$),
		c0 = $0.getContext("2d", { willReadFrequently: !0 }),
		C = {
			x: 0,
			y: 0,
			zoom: 1,
			normalizedZoom: 1,
			rect: $0.getBoundingClientRect(),
			viewport: { x: 0, y: 0, x2: 0, y2: 0 }
		},
		b3 = "";

	function D$($, Q, J) {
		if (b3 != J) (b3 = J, c0.fillStyle = J);

		c0.fillRect($, Q, 1, 1);
	}

	var NK = 1920;

	function BK() {
		C.zoom = Math.max(C.zoom, i8());

		let $ = $0.width * C.zoom,
			Q = $0.height * C.zoom,
			J = window.innerWidth - $,
			Y = window.innerHeight - Q;

		(
			C.x = $ >= window.innerWidth
				? Math.min(Math.max(C.x, J), 0)
				: window.innerWidth / 2 - $ / 2,

			C.y = Q >= window.innerHeight
				? Math.min(Math.max(C.y, Y), 0)
				: window.innerHeight / 2 - Q / 2
		);
	}

	function d0() {
		if ((
			BK(),
			P$.style.setProperty("--zoom", C.zoom.toString()),
			P$.style.transform = `translate(${C.x}px, ${C.y}px) scale(${C.zoom})`,
			C.rect = $0.getBoundingClientRect(),
			P$.style.imageRendering = C.rect.width >= window.innerWidth && C.zoom > 1 ? "pixelated" : "optimizeQuality",
			C.normalizedZoom = C.zoom / (window.innerWidth / NK),
			c3(),
			C.normalizedZoom <= U8
		)) document.body.classList.remove("cursors-visible"); else document.body.classList.add("cursors-visible");

		(
			RY({
				x: C.rect.left,
				y: C.rect.top,
				w: window.innerWidth,
				h: window.innerHeight,
				zoom: C.rect.width / $0.width
			}),
			mK(),
			C.viewport = YQ(),
			x.camera.zoom = C.zoom,
			x.camera.x = C.x,
			x.camera.y = C.y,
			m0()
		);
	}

	var b4 = null;

	function V5() {
		if (b4) return;

		b4 = requestAnimationFrame(() => {
			(b4 = null, d0());
		});
	}

	function i8() {
		return Math.max(window.innerWidth / $0.width, window.innerHeight / $0.height);
	}

	function d3() {
		if (x.camera.zoom != 0) {
			(
				C.zoom = x.camera.zoom,
				C.x = x.camera.x,
				C.y = x.camera.y,
				d0()
			);

			return;
		}

		(
			C.zoom = i8(),
			d0(),
			C.x = window.innerWidth / 2 - C.rect.width / 2,
			C.y = window.innerHeight / 2 - C.rect.height / 2,
			d0()
		);
	}

	function b1($, Q, J, Y, Z = 0.6) {
		let q = Math.min(window.innerWidth * Z / Math.max(J, 1), window.innerHeight * Z / Math.max(Y, 1)),
			K = Math.min(Math.max(q, i8()), 40);

		(C.zoom = K, d0());

		let W = C.rect.width / $0.width,
			F = C.rect.left + ($ + J / 2) * W,
			H = C.rect.top + (Q + Y / 2) * W;

		(
			C.x += window.innerWidth / 2 - F,
			C.y += window.innerHeight / 2 - H,
			d0()
		);
	}

	var f4 = !1;

	async function o3($, Q, J = 60, Y = 160) {
		if (f4) return !1;

		f4 = !0;

		let Z = C.viewport.x2 - C.viewport.x,
			q = C.viewport.y2 - C.viewport.y,
			K = C.viewport.x + Z / 2,
			W = C.viewport.y + q / 2,
			F = (H) => H == 0
				? 0
				: H == 1
					? 1
					: H < 0.5
						? Math.pow(2, 20 * H - 10) / 2
						: (2 - Math.pow(2, -20 * H + 10)) / 2;

		for (let H = 0; H <= J; H++) {
			let j = F(H / J),
				X = K + ($ - K) * j,
				P = W + (Q - W) * j,
				k = Z + (Y - Z) * j,
				z = q + (Y - q) * j;

			(
				b1(X - k / 2, P - z / 2, k, z, 1),
				await $6(16.666666666666668)
			);
		}

		return (f4 = !1, !0);
	}

	window.addEventListener("resize", V5);

	var n3 = {
			stat_pixels_changed: "Pixels Changed",
			stat_paint_visible: "Paint Visible",
			stat_member_count: "User Count"
		},
		u4 = { users: "Users", clans: "Clans", countries: "Countries" },
		d4 = {
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

	var OK = {
			users: "You're",
			clans: "Your clan is",
			countries: "Your country is"
		},
		SK = {
			stat_member_count: X0,
			stat_pixels_changed: X0,
			stat_paint_visible: K6
		},
		_K = {
			users: ($, Q) => [
				G("b.box", $.clan_name && G("b.clan-label", h$($.clan_name)), $.name),
				G("span.box", Q)
			],
			clans: ($, Q) => [G("b.box", $.name), G("span.box", Q)],
			countries: ($, Q) => [G("b.box", F6($.name)), G("span.box", Q)]
		};

	async function s1($, Q, J = 0) {
		q0();

		let Y = await m.leaderboard.$get({ query: { category: $, stat: Q, page: (J || 0).toString() } });

		if (!Y.ok) return N0(Y, "Could not load the leaderboard");

		let Z = await Y.json();

		new _("Leaderboard", G(
			"div.leaderboard-modal.nopad",
			H5(Object.keys(u4).map((q) => ({
				label: u4[q],
				active: q == $,
				action() {
					s1(q, d4[q][0]);
				}
			}))),
			G(
				"div.pad",
				G(
					"select.box.outset",
					{
						oninput(q) {
							let K = q.target.value;

							s1($, K, J);
						}
					},
					d4[$].map((q) => G("option", n3[q], { value: q, selected: Q == q }))
				),
				typeof Z.position == "number" && Z.ownValue !== 0 && G("p.desc", `${OK[$]} #${X0(Z.position + 1)}!`),
				G("div.list", Z.leaderboard.map((q, K) => G("div.item.box.outset", G("div.box", `${K + 1 + J * 10}`), _K[$](q, SK[Q](q.value))))),
				G(
					"div.btn-container",
					G("a.link", "<<", {
						onclick() {
							if (J == 0) return;

							s1($, Q, J - 1);
						}
					}),
					G("b", `Page ${X0(J + 1)}`),
					G("a.link", ">>", {
						onclick() {
							if (Z.leaderboard.length < 10) return;

							s1($, Q, J + 1);
						}
					})
				)
			)
		));
	}

	function t3() {
		s1("users", "stat_paint_visible", 0);
	}

	function R5($, Q) {
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

	var M5 = [
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
					R5("/static/img/tutorial_cursors.png", "An image of three cursors chatting on the canvas")
				]
			},

			{
				name: "Drawing",
				title: "Drawing Mechanic",
				content: [
					G("p", "The paint mechanic works like real spray paint: move fast to make thin lines, move slowly and the paint starts dripping."),
					R5("/static/img/tutorial_drawing.png", "An image of the spray can mechanic in-action"),
					G("p", "When you draw, your changes are only visible to you. You can undo, redo, and edit freely without affecting others."),
					G("p", "Click ", G("span.box.inline", "Submit"), " in the toolbar to publish your drawing so everyone can see it instantly!")
				]
			},

			{
				name: "Spray Cans",
				content: [
					G("p", "Each user starts with a set number of spray cans for drawing on the canvas. Every spray can contains the same amount of paint."),
					R5("/static/img/tutorial_spray_cans.png", "An image of the spray paint bar on the toolbar, with the amount of extra spray cans to the right of it"),
					G("p", G("b", "Drawing consumes paint!"), " When one spray can runs out, the next one is used automatically.", " If you use all your spray cans, a few minute timer starts, after which your paint gets refilled."),
					G("p", "You can also earn extra paint by inviting your friends to ", G("b", "The Wall"), "! ", G("br"), "Go to ", G("span.box.inline", "User > Share Webiste"), " in the action bar to get your own personalized link!")
				]
			},

			{
				name: "Toolbar",
				content: [
					R5("/static/img/tutorial_hotbar.png", "An image of the website's toolbar, containing text and arrows describing each component"),
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
		a3 = M5.length - 1;

	function e8($ = 0) {
		let Q = M5[$],
			J = M5[$ - 1],
			Y = M5[$ + 1],
			Z = $ + 1,
			q = Z <= a3 ? `Guidebook [${Z}/${a3}]` : "Guidebook";

		if (!x.seenGuidebook) (x.seenGuidebook = !0, m0());

		new _(q, G("div.info.tutorial", G("h3", Q.title || Q.name), Q.content, G("div.btn-container", J && G("a.link.prev", `<< ${J.name}`, { onclick: () => e8($ - 1) }), G("a.link.next", `${Y?.name || "Continue"} >>`, { onclick: () => Y ? e8($ + 1) : p() })))).onClose(() => {
			if (!Y) b$({ code: "READ_GUIDEBOOK" });
		});
	}

	function s3() {
		let $ = window.innerWidth <= 800;

		new _("Keybinds", G(
			"div.info.keybinds",
			$ && G("p.warning.noicon", "These are probably not helpful if you're on mobile..."),
			G("div.section", G("p", "Canvas"), G("div.box.outset", G("div.box", "Move"), G("div.box", "WASD / Right Click")), G("div.box.outset", G("div.box", "Move (hand only)"), G("div.box", "Left Click")), G("div.box.outset", G("div.box", "Zoom"), G("div.box", "Wheel / +-"))),
			G("div.section", G("p", "Tools"), G("div.box.outset", G("div.box", "Hand Tool"), G("div.box", "H")), G("div.box.outset", G("div.box", "Brush Tool"), G("div.box", "B or X")), G("div.box.outset", G("div.box", "Chat"), G("div.box", "T or Enter"))),
			G("div.section", G("p", "Drawing"), G("div.box.outset", G("div.box", "Compare Mode"), G("div.box", "M")), G("div.box.outset", G("div.box", "Undo"), G("div.box", "Ctrl+Z")), G("div.box.outset", G("div.box", "Redo"), G("div.box", "Ctrl+Y")), G("div.box.outset", G("div.box", "Pick Color"), G("div.box", "P")), G("div.box.outset", G("div.box", "Last Used Color"), G("div.box", "1, 2, 3, ...")), G("div.box.outset", G("div.box", "Color Palette"), G("div.box", "C"))),
			G("div.section", G("p", "Other"), G("div.box.outset", G("div.box", "Hide Cursors"), G("div.box", "K")), G("div.box.outset", G("div.box", "Reply To User (chat)"), G("div.box", "Shift+Click / Dblclick")), !$ && !x.flags.konamiCursor && R.user && Math.random() > 0.8 && G("div.box.outset", G("div.box", "Konami Code"), G("div.box", "↑↑↓↓←→←→BA", {
				style: { fontWeight: "bold", lineHeight: "34px", letterSpacing: "1px" }
			}))),
			z$
		));
	}

	var z5 = [
		{
			label: "[S]ocial",
			shortcut: "S",
			menu: [
				{ label: "[O]nline Users", action: () => Y2() },
				{ label: "[L]eaderboard", action: () => t3() }
			]
		},

		{
			label: "[H]elp",
			shortcut: "H",
			menu: [
				{ label: "[G]uidebook", action: () => e8() },
				{ label: "[K]eybinds", action: () => s3() },
				{ label: "[F]eedback / Bug Reporting", action: () => T7() },
				{
					label: "[P]rivacy Policy & ToS",
					action: () => {
						window.open("/privacy.html", "_blank");
					}
				}
			]
		}
	];

	var r1 = !1,
		r3 = () => [
			{
				label: "[U]ser",
				shortcut: "U",
				menu: [
					{ label: `Hi, ${R.user?.username}!` },
					{},
					{ label: "[S]ettings", shortcut: "S", action: F5 },
					{ label: "[C]lan Settings", shortcut: "C", action: M1 },
					{ label: "Cursor [I]nventory", shortcut: "I", action: S8 },
					{ label: "Share [W]ebsite", shortcut: "W", action: I1 },
					{},
					{
						label: "[L]ogout",
						shortcut: "l",
						async action() {
							if (await i("Are you sure you want to log out?")) s7();
						}
					}
				]
			},

			{
				label: "[A]ction",
				shortcut: "A",
				menu: [
					{ label: "[U]ndo", keybindText: `${e5}+Z`, action: () => i6() },
					{
						label: "[R]edo",
						keybindText: `${e5}+${H1 ? "Shift+Z" : "Y"}`,
						action: () => e6()
					}
				]
			},
			...z5,
			...v0()
				? [
					{
						label: "[M]od",
						shortcut: "M",
						menu: () => [
							{ label: "Users", action: () => s("users") },
							{ label: "Audit Log", action: () => s("audit") },
							...d1()
								? [
									{ label: "Review Queue", action: () => s("review") },
									{ label: "Broadcast", action: () => s("broadcast") }
								]
								: [],
							{},
							{ label: "Tile Inspector", action: () => l1() },
							{ label: "Wipe Canvas Selection", action: () => t8() },
							{},
							{
								label: `[${r1 ? "ON" : "OFF"}] Hide Own Cursor`,
								action() {
									(R.cursorX = 0, R.cursorY = 0, r1 = !r1);
								}
							}
						]
					}
				]
				: []
		];

	var n0 = !1,
		C$ = 0,
		A$ = 0,
		i3 = [0, 2, 3, 4],
		s$ = !1,
		n4 = !1,
		yK = "1234567890";

	document.body.addEventListener("keydown", ($) => {
		if (K0 || $.target != document.body) return;

		if ((H1 ? $.metaKey : $.ctrlKey) && ($.key == "z" || $.key == "Z" || $.key == "y" || $.key == "u")) {
			if ((
				$.preventDefault(),
				n0 = !1,
				$.key == "z" || $.key == "Z" && !$.shiftKey
			)) i6(); else e6();

			return !1;
		} else if ($.key == "h") u("#tool-hand").click(); else if ($.key == "x" || $.key == "b") u("#tool-spray").click(); else if ($.key == "c") n6(); else if ($.key == "-") a4(1, 0.2); else if ($.key == "=") a4(-1, 0.2); else if ($.key == "m") u("#tool-preview").click(); else if ($.key == "k") {
			let J = x.a11y;

			if ((J.hideCursors = !J.hideCursors, c1(), J.hideCursors)) J.hideCursorKeybind = !0;

			m0();
		} else if ($.key == "t" || $.key == "Enter") setTimeout(
			() => {
				let J = u("#tool-chat");

				if (J.checkVisibility()) J.click(); else u(".chat-box input").focus();
			},
			10
		); else if (yK.includes($.key)) {
			let J = parseInt($.key) || 10;

			yY(J);
		} else if ($.key == "p") {
			let J = o6(..._0(C$, A$));

			if (J) X8(J, !0);
		} else if (vK.has($.key.toLowerCase())) (n0 = !1, a$.add($.key.toLowerCase()), xK());
	});

	var vK = new Set(["w", "a", "s", "d"]),
		gK = 900,
		a$ = new Set(),
		k5 = null,
		t4 = 0;

	function xK() {
		if (k5 != null) return;

		(t4 = performance.now(), k5 = requestAnimationFrame(QG));
	}

	function pK() {
		(a$.clear(), s$ = !1);
	}

	function QG($) {
		if (K0 || !a$.size) {
			k5 = null;

			return;
		}

		let Q = Math.min($ - t4, 100) / 1000;

		t4 = $;

		let J = gK * C.zoom * Q, Y = 0, Z = 0;

		if (a$.has("w")) Z += 1;
		if (a$.has("s")) Z -= 1;
		if (a$.has("a")) Y += 1;
		if (a$.has("d")) Y -= 1;

		if (Y || Z) {
			let q = Math.hypot(Y, Z);

			(C.x += Y / q * J, C.y += Z / q * J, n0 = !1, d0());
		}

		k5 = requestAnimationFrame(QG);
	}

	document.body.addEventListener("keyup", ($) => {
		a$.delete($.key.toLowerCase());
	});

	window.addEventListener("blur", pK);

	window.addEventListener("beforeunload", ($) => {
		if (_Q()) return ($.preventDefault(), $.returnValue = !0, !1);
	});

	function e3($, Q) {
		if (R.activeTool != 1 || C.normalizedZoom < d6) return;
		if (R.openAt && Date.now() + R.clockOffset < R.openAt) return;
		if (R.paintRemaining + R.localPaintIncrement <= 0) return yQ();

		(n0 = !0, C$ = $, A$ = Q);
	}

	function o4($, Q) {
		if (s$ || C.normalizedZoom < U8) return;
		if (x.a11y.hideCursors || r1) return;

		let [J, Y] = _0($, Q);

		(R.cursorX = J, R.cursorY = Y);
	}

	function $G($, Q) {
		(s$ = !0, C$ = $, A$ = Q);
	}

	function JG($, Q) {
		if (s$) (C.x += $ - C$, C.y += Q - A$, d0());

		(C$ = $, A$ = Q);
	}

	var YG = 200;

	function a4($, Q = 0.1) {
		let J = C.zoom,
			Y = C.zoom + Q * -Math.sign($) * C.zoom;

		(
			C.zoom = Math.max(Math.min(Y, YG), i8()),
			GG(C.zoom / J, C$, A$)
		);
	}

	function GG($, Q, J) {
		(
			n0 = !1,
			C.x = Q - (Q - C.x) * $,
			C.y = J - (J - C.y) * $,
			d0(),
			i0()
		);
	}

	function s4() {
		if (n4) {
			if (R.paintRemaining > 0) LY(); else l6();

			n4 = !1;
		}

		if (n0 && e0.length) iY();

		(s$ = !1, n0 = !1, U5 = null);
	}

	document.body.addEventListener("mousemove", ($) => JG($.x, $.y));

	var U5 = null;

	document.body.addEventListener("touchmove", ($) => {
		if ($.touches.length == 1) {
			if (D5) return;

			JG($.touches[0].clientX, $.touches[0].clientY);
		} else if ($.touches.length == 2) {
			(
				$.preventDefault(),
				$.stopImmediatePropagation(),
				n0 = !1,
				s$ = !1
			);

			let Q = $.touches[0],
				J = $.touches[1],
				Y = Math.hypot(J.clientX - Q.clientX, J.clientY - Q.clientY);

			if (U5 != null) {
				let Z = Y / U5, q = C.zoom * Z;

				(
					C.zoom = Math.max(Math.min(q, YG), i8()),
					GG(Z, (Q.clientX + J.clientX) / 2, (Q.clientY + J.clientY) / 2)
				);
			}

			return (U5 = Y, !1);
		}
	});

	document.body.addEventListener("mouseup", s4);
	document.body.addEventListener("touchend", s4);
	document.body.addEventListener("touchcancel", s4);

	function yQ() {
		n4 = !0;
	}

	function ZG() {
		(
			$0.addEventListener("mousedown", ($) => {
				if ($.button == 0) e3($.x, $.y);
			}),

			$0.addEventListener(
				"touchstart",
				($) => {
					if ($.touches.length == 1) e3($.touches[0].clientX, $.touches[0].clientY);
				},
				{ passive: !0 }
			),
			M0.addEventListener("mousemove", ($) => o4($.x, $.y)),
			M0.addEventListener(
				"touchmove",
				($) => {
					if ($.touches.length == 1) o4($.touches[0].clientX, $.touches[0].clientY); else if ($.touches.length == 2) $.preventDefault();
				},
				{ passive: !1 }
			),

			M0.addEventListener("mousedown", ($) => {
				if ($.button != 0 || i3.includes(R.activeTool)) $G($.x, $.y);
			}),

			M0.addEventListener(
				"touchstart",
				($) => {
					if ($.touches.length == 1 && i3.includes(R.activeTool)) {
						let Q = $.touches[0].clientX,
							J = $.touches[0].clientY;

						(o4(Q, J), $G(Q, J));
					} else if ($.touches.length == 2) $.preventDefault();
				},
				{ passive: !1 }
			),

			M0.addEventListener(
				"wheel",
				($) => {
					if ($.ctrlKey) $.preventDefault();

					(n0 = !1, a4($.deltaY, 0.1));
				},
				{ passive: !1 }
			),

			M0.addEventListener("dblclick", async ($) => {
				if (C.zoom > 1) return;

				let [Q, J] = _0($.x, $.y);

				o3(Q, J);
			})
		);
	}

	function qG() {
		(NY(), d3(), dY(), ZG());
	}

	var r$ = !1,
		FG = Math.min(window.innerWidth, window.innerHeight) <= 800 && window.matchMedia("(pointer: coarse)").matches && document.fullscreenEnabled,
		cK = 25000000;

	function bK($, Q, J, Y, Z) {
		if (typeof Q != "string" || !Q?.length) return "Missing name";
		if (typeof J != "string" || !J?.length) return "Missing location";
		if ($ && $.length > 127) return "Identification is too long";
		if (Q.length > 255) return "Name is too long";
		if (J.length > 255) return "Location is too long";
		if (!Y || !Z) return "Missing file";
		if (!Y.startsWith("image/")) return "Invalid file type (expected an image)";
		if (Z > cK) return `File is too large (max 25MB; got ${Math.floor(Z / 1000 / 1000)}MB)`;
	}

	var k8 = -1;

	function fK() {
		let $ = u("input#s__id").value,
			Q = u("input#s__name").value,
			J = u("input#s__location").value,
			Y = u("input#s__upload").files,
			Z = Y ? Y.item(0) : null,
			q = bK($, Q, J, Z?.type, Z?.size);

		if (q) return (alert(q), !1);
	}

	function lK($) {
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

	async function WG() {
		(k8 = 0, await Promise.all([uK(), jG()]));
	}

	var r4 = !1;

	async function jG() {
		if (r4) return;

		r4 = !0;

		let $ = G("div.f", "Loading...");

		u(".sightings .posts").append($);

		let J = await (await fetch(`${J0.url.signalArchive}/fetch?tag=&after=${k8}&limit=${k8 ? 10 : 4}&at=${Date.now()}`)).json();

		if ((
			u(".sightings .posts").append(...J.map(lK)),
			k8 += J.length,
			$.remove(),
			r4 = !1,
			!J.length
		)) (
			u(".sightings .posts").append(G("div.f", k8 ? "You have reached the end." : "Nothing here yet...")),
			u(".sightings .more").style.display = "none"
		); else u(".sightings .more").style.display = "";
	}

	async function uK() {}

	async function dK() {
		let $ = u(".preview"),
			Q = u("input#s__upload").files?.item(0);

		if (!Q) {
			$.hidden = !0;

			return;
		}

		let J = URL.createObjectURL(new Blob([await Q.arrayBuffer()]));

		($.hidden = !1, $.style.backgroundImage = `url(${J})`);
	}

	var XG = G("div.info-container", G("div.window.winfo", G("div.title", G("p", "filian_is_lost.txt"), G("div.buttons", G("button.icon", G("img", { src: "/static/icon/archive/minimize.png", alt: "_" })), G("button.icon", G("img", { src: "/static/icon/archive/maximize.png", alt: "⌷" })), G("button.icon", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", G("h1", "FILIAN IS LOST."), G("p", "She went dark months ago. No posts. No streams. No signals. But we know she's listening. She always is."), G("p", G("b", "The Wall"), " is her frequency. Every mark you leave gets archived: a permanent record of everyone, everywhere, who showed up when she went quiet."), G("p", "Paint something. Make noise. Leave your mark in the archive."), G("p", "Bring her back.")))),
		$1 = G(
			"div.main",
			XG,
			G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " signal_archive.exe"), G("p", "Loading the signal archive...")),
			G("div.header", G("h1", "SIGNAL ARCHIVE"), G("p", "RECENTLY TRANSMITTED")),
			G("div.post-container", G("div.posts"), G("div.more", G("button", "LOAD MORE", { onclick: jG }))),
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
					onchange: dK
				}),
				G(
					"div.buttons",
					G("input", {
						type: "submit",
						onclick: () => fK(),
						value: "Transmit Signal"
					}),
					G(
						"a.button",
						{
							onclick: () => {
								let $ = ["id", "name", "location", "tag", "upload"];

								for (let Q of $) document.getElementById(`s__${Q}`).value = "";

								u(".preview").hidden = !0;
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
		C5 = G("img", { src: "/static/icon/arrow-down.png", draggable: !1 });

	function oK() {
		if (r$) RG(); else VG();

		C5.style.transform = r$ ? "rotate(180deg)" : "";
	}

	var L5 = G("div.sightings", G("div.mobile-scroll-btn", { onclick: oK }, G("button", C5)), $1);

	function HG($, Q) {
		let J = $ + Q;

		return J > 0 ? `${X0(J)} online` : "";
	}

	function W2($, Q) {
		let J = u("#wall-online-count");

		if (J) J.textContent = HG($, Q);
	}

	var D5 = !1;

	function PG($ = !1) {
		(
			sessionStorage.setItem("wall:view", $ ? "wall" : "archive"),
			document.body.append(L5),
			$1.inert = !0
		);

		let Q = u("main");

		if ((
			Q.prepend(G("div.modal-title.wall-title", G("span", G("h3", "the_wall.exe"), G("span.wall-online#wall-online-count", HG(R.onlinePlayers, R.onlineViewers))), G("button.btn", "Full Screen", { style: { color: "var(--text)" }, onclick: KG }))),
			!l0
		)) (
			Q.addEventListener("mouseenter", RG),
			L5.addEventListener("mouseenter", VG)
		); else Q.classList.add("mobile");

		if (!$) i4(); else KG();
	}

	function VG() {
		if (r$) return;
		if ((r$ = !0, !l0)) (document.body.classList.remove("noscroll"), $1.inert = !1);

		if ((
			XG.scrollIntoView({ behavior: l0 ? "auto" : "smooth", block: "center" }),
			k8 < 0
		)) WG();
	}

	function RG() {
		if (!r$) return;
		if ((r$ = !1, !l0)) (document.body.classList.add("noscroll"), $1.inert = !0);

		u("main").scrollIntoView({ behavior: l0 ? "auto" : "smooth", block: "center" });
	}

	function KG() {
		if ((
			D5 = !1,
			sessionStorage.setItem("wall:view", "wall"),
			u("main").classList.remove("minimized"),
			L5.style.display = "none",
			V5(),
			l0
		)) (
			document.body.classList.add("noscroll"),
			$1.inert = !0,
			r$ = !1,
			C5.style.transform = ""
		);

		if (FG) document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
	}

	function i4() {
		if ((
			D5 = !0,
			u("main").classList.add("minimized"),
			sessionStorage.setItem("wall:view", "archive"),
			L5.style.display = "",
			V5(),
			l0
		)) {
			if ((
				document.body.classList.remove("noscroll"),
				$1.inert = !1,
				r$ = !1,
				C5.style.transform = "",
				k8 < 0
			)) WG();
		}

		if (FG) document.exitFullscreen().catch(() => {});
	}

	var e4 = G("div.actionbar", { role: "toolbar" });

	function MG($) {
		let Q = G("button.abtn.btn.action", Q6($.label), { ariaLabel: $.label.replace(/[\[\]]/g, "") });

		if ($.active) Q.classList.add("active");

		let J = () => {
			if (!$.menu) return;

			let Y = Q.getBoundingClientRect(),
				Z = typeof $.menu == "function" ? $.menu() : $.menu;

			KJ(Z, Y.x, Y.y + Y.height);
		};

		return (
			Q.onclick = () => {
				if (!O5()) J();
				if ($.action) $.action();
			},

			Q.onmouseover = () => {
				if ($.action) w$();
				if (O5()) J();
				if (document.activeElement) document.activeElement.blur();
			},
			Q
		);
	}

	function $J($) {
		e4.replaceChildren(...$.map(MG), G("div.right-side", G("b.fil", "FILIAN IS LOST"), G(
			"button.btn.icon.minimize-btn",
			{
				ariaLabel: "Minimize",
				onclick() {
					i4();
				}
			},
			G("img", { src: "/static/icon/close.png", draggable: !1 })
		)));
	}

	function H5($) {
		return G("div.navbar.custom", G("div.actionbar.custom", $.map(MG)));
	}

	var Y$ = null, i1 = null, A5 = "";

	function nK($, Q, J) {
		if (!$) return;
		if (Y$) T5();

		let Y = G("div#tooltip-text.tooltip-popup", { textContent: $, role: "tooltip" });

		(document.body.append(Y), Y$ = Y, zG(Q, J));
	}

	function zG($, Q) {
		if (!Y$) return;

		let J = Y$.getBoundingClientRect(),
			Y = $ + J.width > window.innerWidth ? window.innerWidth - J.width : $,
			Z = Q + J.height > window.innerHeight ? window.innerHeight - J.height : Q;

		(Y$.style.left = `${Y}px`, Y$.style.top = `${Z}px`);
	}

	function T5() {
		if (!Y$) return;
		if (i1) i1.removeAttribute("aria-describedby");

		(Y$.remove(), Y$ = null, i1 = null, A5 = "");
	}

	function I5($, Q, J) {
		if (!$.classList || !$.classList.contains("tooltip")) return;

		let Y = $.dataset.tooltip;

		if (!Y) return;

		let Z = typeof Q == "number" && typeof J == "number";

		if (!Z) {
			let q = $.getBoundingClientRect();

			(Q = q.x, J = q.y);
		}

		if (Y$) {
			if (i1 != $) return (T5(), I5($, Q, J));
			if (A5 != Y) (Y$.textContent = Y, A5 = Y);
			if (Z) zG(Q, J);

			return;
		}

		(
			nK(Y, Q, J),
			i1 = $,
			A5 = Y,
			$.setAttribute("aria-describedby", "tooltip-text")
		);
	}

	document.addEventListener("mouseover", ($) => I5($.target, $.x, $.y));
	document.addEventListener("mousemove", ($) => I5($.target, $.x, $.y));
	document.addEventListener("focusin", ($) => I5($.target));
	window.addEventListener("mouseout", T5);
	window.addEventListener("click", T5);

	var UG = [
		{
			label: "[L]og In",
			shortcut: "L",
			action() {
				J8();
			}
		},
		{ label: "[S]ettings", shortcut: "S", action: F5 },
		...z5
	];

	var kG = G("div.hotbar.login-bar", G(
		"p",
		G("a.link", "Log in", {
			tabIndex: 1,
			onclick() {
				J8();
			}
		}),
		" to draw & chat with ",
		G("b#online-player-counter", "[...]"),
		"+ players!"
	));

	var tK = "G-XXXXXXXXXX", DG = !1;

	function LG() {
		let $ = J0.gaMeasurementId;

		if (DG || !$ || $ === tK) return;

		let Q = location.hostname;

		if (Q === "localhost" || Q === "127.0.0.1") return;

		(
			DG = !0,
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

	async function aK() {
		return await (await m.canvas.snapshot.bson.$get({ query: { at: Math.floor(Date.now() / 1000) } })).arrayBuffer();
	}

	function CG() {
		if (J0.url?.ws) return;

		let $ = aK(), Q = new Image();

		(
			Q.decoding = "async",
			Q.crossOrigin = "anonymous",
			Q.onload = async () => {
				(
					c0.clearRect(0, 0, $0.width, $0.height),
					c0.drawImage(Q, 0, 0)
				);

				let J = H$.deserialize(new Uint8Array(await $));

				for (let Y of J.changes) O8(Y.pos, Y.color);
			},

			Q.src = m.canvas.snapshot.png.$url({
				query: { at: Math.floor(Date.now() / J0.canvas.snapshotInterval) }
			}).toString()
		);
	}

	var AG = "";

	function TG() {
		let $ = C.viewport.x2 - C.viewport.x,
			Q = C.viewport.y2 - C.viewport.y,
			J = Math.floor(C.viewport.x + $ / 2),
			Y = Math.floor(C.viewport.y + Q / 2);

		return [J, Y];
	}

	function sK() {
		if (s$) return;

		let [$, Q] = TG(), J = new URL(location.href);

		if ((J.hash = `${$},${Q}`, J.hash != AG)) (history.replaceState(null, "", J), AG = J.hash);
	}

	function rK() {
		if (!location.hash) return;

		let [$, Q] = location.hash.slice(1).split(",").map(Number);

		if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q)) return;
		if ($ < 0 || Q < 0 || $ >= f || Q >= k0) return;

		let [J, Y] = TG();

		if ($ != J || Q != Y) B4($, Q);
	}

	function IG() {
		(rK(), setInterval(sK, 1000));
	}

	var EG = [
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
		e1 = 0;

	document.addEventListener("keydown", async ($) => {
		if (x.flags.konamiCursor || !R.user) return;

		if ($.key == EG[e1]) {
			if ((e1++, e1 >= EG.length)) {
				e1 = 0;

				let Q = await b$({ code: "SUPER_SECRET_KONAMI_CODE" });

				if (Q) return Y0(Q);

				(
					new _("Code Activated", G("p", "Enjoy your free cursor!")),
					x.flags.konamiCursor = !0,
					m0()
				);
			}
		} else e1 = 0;
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

	LG();
	F2();

	async function iK() {
		let $ = new URLSearchParams(location.search);

		if ((
			P$.append(Q8),
			document.body.append(O$, G("main", e4, M0, OQ)),
			qG(),
			CG(),
			c1(),
			IG(),
			G3(),
			await a7(),
			R.user
		)) {
			if (($J(r3()), w8(), F$.seed(R.user), gY(), !x.seenGuidebook)) setTimeout(e8, 1000);
			if (v0()) B3();
		} else if ((R.setTool(3), $J(UG), s6(kG), y$(), w8(), $.has("ssu"))) o7($.get("ssu"));

		let Q = $.has("wall") || sessionStorage.getItem("wall:view") === "wall";

		if ((PG(Q), $.has("debug"))) K5();
	}

	var wG = () => iK().catch(($) => console.error("boot failed", $));

	if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", wG); else wG();
})();