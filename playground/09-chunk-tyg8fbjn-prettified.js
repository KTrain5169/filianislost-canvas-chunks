(() => {
	var {
			defineProperty: $J,
			getOwnPropertyNames: hG,
			getOwnPropertyDescriptor: mG
		} = Object,
		NG = Object.prototype.hasOwnProperty;

	var QJ = new WeakMap(),
		BG = ($) => {
			var Q = QJ.get($), J;

			if (Q) return Q;

			if ((
				Q = $J({}, "__esModule", { value: !0 }),
				$ && typeof $ === "object" || typeof $ === "function"
			)) hG($).map((Y) => !NG.call(Q, Y) && $J(Q, Y, { get: () => $[Y], enumerable: !(J = mG($, Y)) || J.enumerable }));

			return (QJ.set($, Q), Q);
		};

	var OG = ($, Q) => () => (($ && (Q = $($ = 0)), Q));
	var SG = {};
	var h5 = "", m5 = "";

	var JJ = OG(() => {
		(async function $() {
			let J = await (await fetch("/.last-bundle")).text(),
				[Y, Z] = J.split(",");

			if (h5 && h5 != Y) location.reload(); else if (m5 && m5 != Z) {
				let K = (await (await fetch("/")).text()).match(/href="(\.\/chunk-[a-z\d]+.css)"/)?.[1],
					W = document.querySelector("link[rel=stylesheet]");

				if (!K || !W) return (
					console.error("Couldn't reload stylesheet without reloading..."),
					location.reload()
				);

				W.href = `${K}?at=${Date.now()}`;
			}

			(h5 = Y, m5 = Z, setTimeout($, 1000));
		})();
	});

	var u = ($, Q) => (Q ?? document).querySelector($),
		a0 = ($, Q) => (Q ?? document).querySelectorAll($),
		J6 = ($) => new Promise((Q) => setTimeout(Q, $)),
		r$ = () => new Promise(($) => setTimeout($, 0)),
		YJ = ($, Q) => {
			for (let J in $) {
				let Y = $[J];

				if (typeof Y == "object" && !Array.isArray(Y) && J in Q) YJ(Y, Q[J]); else if (J.startsWith("data-") && Q.setAttribute) Q.setAttribute(J, Y); else if (J.startsWith("--") && Q.setProperty) Q.setProperty(J, Y); else if (J == "className" && Q.classList) Q.classList.add(Y); else Q[J] = Y;
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
			if (K instanceof HTMLElement || typeof K == "string") q.append(K); else if (typeof K == "number") q.append(String(K)); else if (typeof K == "object") YJ(K, q);
		}

		return q;
	}

	var z$ = !1;

	if (z$) JJ();

	function GJ($) {
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

	function N5($) {
		if (!navigator.clipboard) return GJ($);

		navigator.clipboard.writeText($).catch((Q) => {
			(console.error(Q), GJ($));
		});
	}

	var Y$ = ($, Q) => G("button.btn.icon", Q, G("img", {
			src: `/static/icon/${$}.png`,
			alt: `${$} icon`,
			style: { pointerEvents: "none" },
			draggable: !1
		})),
		Y6 = ($) => $.split(/(\[.\])/).map((Q, J) => J % 2 ? G("u", Q.slice(1, -1)) : Q),
		B5 = ($, Q, J, Y, Z) => G(
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
		G6 = ($, Q) => G(
			"button.btn.swatch.icon",
			G("img", {
				alt: `${$} icon`,
				src: `/static/icon/${$}.png`,
				draggable: !1
			}),
			Q
		),
		Z6 = ($, Q) => {
			return ($.dataset.tooltip = Q, $.classList.add("tooltip"), $);
		};

	var ZJ = ($, Q = 2) => {
		let J = 10 ** Q, Y = Math.floor($ % 1 * J);

		return [
			G("span", Math.floor($).toString()),
			Y >= 0 && G("span", { style: { fontSize: "0.6em" } }, `.${Y}`.replace(/0+$/, ""))
		];
	};

	var O5 = !1,
		G$ = { options: [] },
		S5 = () => !!G$.element;

	function h$() {
		if (!G$.element || O5) return;

		(
			G$.options = [],
			G$.element.remove(),
			G$.element = void 0,
			a0(".ctx").forEach(($) => $.remove())
		);
	}

	function qJ($, Q, J) {
		h$();

		let Y = G("div.ctx");

		(G$.element = Y, G$.options = []);

		for (let W of $) {
			if (!W.label) {
				Y.append(G("hr"));

				continue;
			}

			let F = G("div.option", G("span", Y6(W.label)), W.keybindText && G("span", W.keybindText), {
				ariaLabel: W.label.replace(/[\[\]]/g, ""),
				onclick(H) {
					if ((h$(), W.action)) W.action(H);
				}
			});

			(Y.append(F), G$.options.push({ ...W, _element: F }));
		}

		document.body.append(Y);

		let Z = Y.getBoundingClientRect(),
			q = Q + Z.width > window.innerWidth ? window.innerWidth - Z.width : Q,
			K = J + Z.height > window.innerHeight ? window.innerHeight - Z.height : J;

		(
			Y.style.left = `${q}px`,
			Y.style.top = `${K}px`,
			G$.x = q,
			G$.y = K,
			O5 = !0,
			setTimeout(() => O5 = !1)
		);
	}

	window.addEventListener("click", h$);
	window.addEventListener("resize", h$);
	window.addEventListener("blur", h$);

	window.addEventListener("contextmenu", ($) => {
		($.preventDefault(), h$());
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
		_G = new Map();

	for (let $ = 0; $ < Z0.length; $++) {
		let Q = Z0[$];

		(
			Q.idx = $,
			Q.color = parseInt(Q.hex.slice(1), 16),
			Q.opaqueHex = Q.hex + "7f",
			_G.set(Q.color, $)
		);
	}

	var KJ = 30000, FJ = 15000;
	var WJ = 1, C0 = 100;

	var L8 = 60,
		p0 = 42,
		f = 6000,
		L0 = 4200,
		i$ = 25200000;

	var q6 = 3615,
		_5 = 24,
		K0 = 1000,
		y5 = Math.floor(100),
		J1 = { SignUp: 2000, TimePassed: 1000, ReferralCode: 1000 };

	var K6 = 4000, F6 = 80;

	function s0($, ...Q) {
		return $.replace(/{(\d)+}/g, (J, Y) => Q[parseInt(Y)] || "[?]");
	}

	function H0($) {
		return new Intl.NumberFormat().format($);
	}

	function W6($) {
		let Q = ($ / i$ * 100).toFixed(2);

		return `${H0($)} (${Q}%)`;
	}

	function v5($) {
		return new Intl.DateTimeFormat(["en"], { timeZone: "UTC", minute: "numeric", second: "2-digit" }).format($);
	}

	function yG($) {
		return String.fromCodePoint(...$.toUpperCase().split("").map((Q) => 127397 + Q.charCodeAt(0)));
	}

	function j6($) {
		if ($.length != 2) return "-";

		try {
			let Q = new Intl.DisplayNames(["en"], { type: "region" }).of($);

			return `${yG($)} ${Q || $}`;
		} catch {
			return "Unknown";
		}
	}

	function jJ($) {
		if (Date.now() - $ < 86400000) return new Date($).toLocaleTimeString(); else return new Date($).toLocaleDateString();
	}

	function C8($) {
		let Q = Math.floor($ / K0);

		return `${Q} spray can${A0(Q)}`;
	}

	function A0($, Q) {
		let J = $ == 1 ? "" : "s";

		return Q ? `${H0($)} ${Q}${J}` : J;
	}

	var vG = /\s|\/|[A-Z].*[A-Z]/,
		gG = /[A-Z]{2,}(?=[A-Z][a-z]|$)|[A-Z]?[a-z]+|[A-Z]+|\d+/g;

	function pG($) {
		let Q = $.trim();

		if (Q.length <= 8 && !vG.test(Q)) return Q;

		let J = Q.replace(/'s\b/gi, "").match(gG) || [];

		if (J.length === 1) {
			let Y = J[0], Z = (/^[A-Z]+$/).test(Y) ? 6 : 8;

			return Y.length <= Z ? Y : Y[0];
		}

		return J.map((Y) => (/^\d+$/).test(Y) ? Y : Y[0]).join("");
	}

	function m$($) {
		return `[${pG($).slice(0, 6)}]`;
	}

	var Y1 = ($) => Math.floor($ * 10) / 10;

	function X6($) {
		if ($ == null) return "never";

		let Q = $ - Date.now(),
			J = new Intl.RelativeTimeFormat(["en"], { numeric: "auto" }),
			Y = 60000,
			Z = 60 * Y,
			q = 24 * Z;

		if (Q < Z) return J.format(Y1(Q / Y), "minute"); else if (Q < q) return J.format(Y1(Q / Z), "hour");

		return J.format(Y1(Q / q), "day");
	}

	var Y0 = {
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

	var H6 = null;

	function N$($) {
		(
			G1(),
			H6 = G(
				"div.mod-return",
				G("button.btn.mod-return-go", `↩ Resume: ${$.label}`, {
					onclick() {
						(G1(), $.reopen());
					}
				}),
				G("button.btn.mod-return-x", "✕", { ariaLabel: "Dismiss", onclick: () => G1() })
			),
			document.body.append(H6)
		);
	}

	function G1() {
		(H6?.remove(), H6 = null);
	}

	function r($, Q = "Confirmation", J = "Yes", Y = "No") {
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
				F = G("div.modal-bg.confirm-bg", G("div.modal-container", G("div.modal-title", G("span", Q), Y$("close", { ariaLabel: "Close", onclick: () => K(!1) })), G("div.modal-content", G("div.modal", G("p", $), G("div.btn-container", G("button.btn", J, { onclick: () => K(!0) }), G("button.btn", Y, { onclick: () => K(!1) }))))));

			(
				F.addEventListener("click", (H) => {
					if (H.target == F) K(!1);
				}),
				document.addEventListener("keydown", W, !0),
				document.body.append(F)
			);
		});
	}

	var F0 = null,
		P6 = "",
		e$ = G("button.btn", "Close", { onclick: p }),
		U$ = G("div.btn-container", e$);

	function p($ = !1) {
		if (!F0) return;
		if (!F0.close($)) return;

		F0 = null;
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

			if (F0) p(!0);

			(
				this.titleElement.append(G("span", $), Y$("close", { ariaLabel: "Close Modal", onclick: () => this.close() })),
				this.bg.append(this.container),
				this.container.append(this.titleElement, Q),
				Q.classList.add("modal-content"),
				u("main").inert = !0,
				document.body.append(this.bg),
				document.body.style.overflow = "hidden",
				P6 = $,
				F0 = this,
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
				F0 = null,
				P6 = "",
				document.body.style.overflow = "",
				u("main").inert = !1,
				!0
			);
		}
	}

	document.addEventListener("keydown", ($) => {
		if ($.key == "Escape" && F0) p();
	});

	var cG = /^[\w!#$%&'*.^`|~+-]+$/;

	var bG = ($, Q, J = {}) => {
			if (!cG.test($)) throw new Error("Invalid cookie name");

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
		XJ = ($, Q, J) => {
			return (Q = encodeURIComponent(Q), bG($, Q, J));
		};

	var HJ = ($, Q) => {
			return (
				$ = $.replace(/\/+$/, ""),
				$ = $ + "/",
				Q = Q.replace(/^\/+/, ""),
				$ + Q
			);
		},
		M6 = ($, Q) => {
			for (let [J, Y] of Object.entries(Q)) {
				let Z = new RegExp("/:" + J + "(?:{[^/]+})?\\??");

				$ = $.replace(Z, Y ? `/${Y}` : "");
			}

			return $;
		},
		PJ = ($) => {
			let Q = new URLSearchParams();

			for (let [J, Y] of Object.entries($)) {
				if (Y === void 0) continue;
				if (Array.isArray(Y)) for (let Z of Y) Q.append(J, Z); else Q.set(J, Y);
			}

			return Q;
		},
		VJ = ($, Q) => {
			switch (Q) {
				case "ws":
					return $.replace(/^http/, "ws");

				case "http":
					return $.replace(/^ws/, "http");
			}
		},
		g5 = ($) => {
			if ((/^https?:\/\/[^\/]+?\/index(?=\?|$)/).test($)) return $.replace(/\/index(?=\?|$)/, "/");

			return $.replace(/\/index(?=\?|$)/, "");
		};

	function V6($) {
		return typeof $ === "object" && $ !== null && !Array.isArray($);
	}

	function p5($, Q) {
		if (!V6($) && !V6(Q)) return Q;

		let J = { ...$ };

		for (let Y in Q) {
			let Z = Q[Y];

			if (V6(J[Y]) && V6(Z)) J[Y] = p5(J[Y], Z); else J[Y] = Z;
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
		lG = class {
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

					for (let [F, H] of Object.entries($.cookie)) W.push(XJ(F, H, { path: "/" }));

					Y.Cookie = W.join(",");
				}

				if (this.cType) Y["Content-Type"] = this.cType;

				let Z = new Headers(Y ?? void 0), q = this.url;

				if ((q = g5(q), q = M6(q, this.pathParams), this.queryParams)) q = q + "?" + this.queryParams.toString();

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
		x5 = ($, Q) => MJ(
			function J(Y) {
				let Z = Q?.buildSearchParams ?? PJ,
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

				let F = q.join("/"), H = HJ($, F);

				if (W === "url" || W === "path") {
					let X = H;

					if (Y.args[0]) {
						if (Y.args[0].param) X = M6(H, Y.args[0].param);
						if (Y.args[0].query) X = X + "?" + Z(Y.args[0].query).toString();
					}

					if ((X = g5(X), W === "url")) return new URL(X);

					return X.slice($.replace(/\/+$/, "").length).replace(/^\/?/, "/");
				}

				if (W === "ws") {
					let X = VJ(Y.args[0] && Y.args[0].param ? M6(H, Y.args[0].param) : H, "ws"),
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

				let j = new lG(H, W, { buildSearchParams: Z });

				if (W) {
					Q ??= {};

					let X = p5(Q, { ...Y.args[1] });

					return j.fetch(Y.args[0], X);
				}

				return j;
			},
			[]
		);

	var Z1 = { "Content-Type": "application/json" },
		m = x5(Y0.url.api, { init: { credentials: "same-origin", headers: Z1 } }),
		B$ = () => localStorage.getItem("auth-token");

	function RJ($, Q = 25, J = 0) {
		return m.mod.users.$get({ query: { q: $, limit: String(Q), offset: String(J) } });
	}

	function zJ($) {
		return m.mod.users[":id"].$get({ param: { id: String($) } });
	}

	function UJ($) {
		return m.mod.users[":id"].sessions.$get({ param: { id: String($) } });
	}

	function kJ($, Q, J) {
		return m.mod.users[":id"].ban.$post({
			param: { id: String($) },
			json: {
				...Q ? { reason: Q } : {},
				...J ? { duration_seconds: J } : {}
			}
		});
	}

	function c5($) {
		return m.mod.users[":id"].unban.$post({ param: { id: String($) } });
	}

	function DJ($, Q, J) {
		return m.mod.users[":id"].mute.$post({
			param: { id: String($) },
			json: {
				...Q ? { reason: Q } : {},
				...J ? { duration_seconds: J } : {}
			}
		});
	}

	function b5($) {
		return m.mod.users[":id"].unmute.$post({ param: { id: String($) } });
	}

	function f5($, Q) {
		return m.mod.users[":id"]["leaderboard-exclusion"].$post({ param: { id: String($) }, json: { excluded: Q } });
	}

	function LJ($) {
		return m.mod.users[":id"]["delete-strokes"].$post({ param: { id: String($) } });
	}

	function CJ($, Q = 0) {
		return m.mod.users[":id"]["owned-pixels"].$get({ param: { id: String($) }, query: { offset: String(Q) } });
	}

	function AJ($, Q) {
		return m.mod.users[":id"]["delete-selected-strokes"].$post({ param: { id: String($) }, json: { positions: Q } });
	}

	function TJ($, Q) {
		return m.mod.users[":id"]["give-paint"].$post({ param: { id: String($) }, json: { amount: Q } });
	}

	function IJ($, Q) {
		return m.mod.users[":id"]["reset-balance"].$post({ param: { id: String($) }, query: { type: Q } });
	}

	function EJ($, Q) {
		return m.mod.users[":id"]["give-cursor"].$post({ param: { id: String($) }, json: { cursorId: Q } });
	}

	function wJ($, Q, J) {
		return m.mod.users[":id"].message.$post({
			param: { id: String($) },
			json: { body: Q, ...J ? { title: J } : {} }
		});
	}

	function hJ($, Q, J = !0) {
		return m.mod.broadcast.$post({ json: { body: $, ...Q ? { title: Q } : {}, createRow: J } });
	}

	function l5($, Q) {
		return m.mod.users[":id"].role.$post({ param: { id: String($) }, json: { role: Q } });
	}

	function mJ($ = {}) {
		return m.mod["review-queue"].$get({
			query: {
				...$.status ? { status: $.status } : {},
				...$.kind ? { kind: $.kind } : {},
				...$.cursor ? { cursor: $.cursor } : {},
				...$.limit ? { limit: String($.limit) } : {}
			}
		});
	}

	function NJ($, Q, J) {
		return m.mod["review-queue"][":id"].resolve.$post({
			param: { id: String($) },
			json: { action: Q, ...J ? { notes: J } : {} }
		});
	}

	function BJ($, Q) {
		return m.mod.feedback.$get({ query: { kind: $, offset: Q.toString() } });
	}

	function OJ($, Q, J) {
		return m.mod.feedback.resolve.$post({ json: { id: $, action: Q, reply: J } });
	}

	function SJ() {
		return m.mod.feedback.counts.$get();
	}

	function _J($) {
		return m.mod.referrals.$get({ query: { offset: $.toString() } });
	}

	function yJ($) {
		return m.mod.referredBy[":uid"].$get({ param: { uid: $.toString() } });
	}

	function u5($, Q) {
		return m.mod.referrals[":code"].$post({ param: { code: $ }, query: { action: Q } });
	}

	function vJ($) {
		return m.mod.clans[":id"].members.$get({ param: { id: $.toString() } });
	}

	function gJ($) {
		return m.mod["wipe-canvas"].$post({ json: $ });
	}

	function R6($) {
		return m.mod["restore-pixels"].$post({ json: { token: $ } });
	}

	function pJ($) {
		return m.mod.tile[":pos"].$get({ param: { pos: String($) } });
	}

	function xJ($, Q, J, Y) {
		return m.mod.region.$get({
			query: { x: String($), y: String(Q), w: String(J), h: String(Y) }
		});
	}

	function cJ($) {
		return m.mod.owners.$post({ json: { positions: $ } });
	}

	function bJ($, Q = {}) {
		return m.mod.users[":id"]["paint-history"].$get({
			param: { id: String($) },
			query: {
				...Q.before ? { before: Q.before } : {},
				...Q.limit ? { limit: String(Q.limit) } : {}
			}
		});
	}

	function fJ($, Q) {
		return m.mod.users[":id"]["paint-history"][":entryId"].$get({ param: { id: String($), entryId: String(Q) } });
	}

	function lJ($, Q = {}) {
		return m.mod.users[":id"]["chat-history"].$get({
			param: { id: String($) },
			query: {
				...Q.before ? { before: Q.before } : {},
				...Q.limit ? { limit: String(Q.limit) } : {}
			}
		});
	}

	function uJ($ = {}) {
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

	function dJ() {
		return m.mod["bot-sensitivity"].$get();
	}

	function oJ($) {
		return m.mod["bot-sensitivity"].$post({ json: { sensitivity: $ } });
	}

	function nJ() {
		return m.mod["chat-cooldown"].$get();
	}

	function tJ($) {
		return m.mod["chat-cooldown"].$post({ query: { cooldown: $.toString() } });
	}

	function aJ($) {
		return m.mod["bot-samples"][":userId"].$get({ param: { userId: String($) } });
	}

	var A8 = null;

	function uG() {
		if (A8 && A8.isConnected) return A8;

		return (A8 = G("div.toast-container"), document.body.append(A8), A8);
	}

	function O$($, Q = 3200) {
		let J = uG(), Y = G("div.toast", G("span", $));

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

	function sJ($) {
		if ($ === null || $ === void 0) return null;

		let Q = $ instanceof Date ? $ : new Date($);

		return Number.isNaN(Q.getTime()) ? null : Q;
	}

	function x0($) {
		let Q = sJ($);

		if (!Q) return $ === null || $ === void 0 ? "-" : String($);

		return Q.toLocaleString();
	}

	var z6 = null;

	function rJ() {
		(z6?.remove(), z6 = null);
	}

	document.addEventListener("click", rJ);

	function E0($, Q) {
		let J = sJ($);

		if (!J) return G("span", Q ?? x0($));

		let Y = J.toLocaleString(),
			Z = J.toUTCString(),
			q = G("time.ts-local.tooltip", {
				textContent: Q ?? Y,
				datetime: J.toISOString(),
				dataset: { tooltip: `UTC: ${Z}` },
				onclick(K) {
					if ((K.stopPropagation(), z6)) {
						rJ();

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
						z6 = W
					);
				}
			});

		return q;
	}

	var d5 = [
		{ label: "30 min", seconds: 1800 },
		{ label: "1 hour", seconds: 3600 },
		{ label: "6 hours", seconds: 21600 },
		{ label: "1 day", seconds: 86400 },
		{ label: "3 days", seconds: 259200 },
		{ label: "7 days", seconds: 604800 },
		{ label: "30 days", seconds: 2592000 },
		{ label: "Permanent", seconds: null }
	];

	function q1($) {
		return G("span.mod-role", { dataset: { role: $ } }, $);
	}

	function U6($, Q = 240) {
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

	function k6($) {
		let Q = G("button.btn.mod-undo", "Undo", {
			async onclick() {
				Q.disabled = !0;

				let J = await R6($);

				if (!J.ok) {
					(
						Q.disabled = !1,
						O$(J.status === 410 ? "The undo window has passed." : "Undo failed.")
					);

					return;
				}

				let Y = 0;

				try {
					Y = (await J.json()).restored ?? 0;
				} catch {}

				(O$(`Restored ${Y} pixel${Y === 1 ? "" : "s"}.`), p());
			}
		});

		return Q;
	}

	var o5 = 0,
		D6 = 1,
		L6 = 2,
		dG = "#ff3b3b",
		oG = "rgba(8,8,12,0.75)",
		Z$ = null;

	function nG() {
		if (Z$) return Z$;

		return (
			Z$ = G("canvas.ghost-layer", { width: f, height: L0 }),
			F1.append(Z$),
			Z$
		);
	}

	function iJ($, Q) {
		let J = nG(), Y = J.getContext("2d");

		(
			Y.clearRect(0, 0, J.width, J.height),
			Y.fillStyle = oG,
			Y.fillRect(0, 0, J.width, J.height)
		);

		for (let Z = 0; Z < $.length; Z++) {
			let { pos: q, color: K } = $[Z],
				W = q % f,
				F = q / f | 0;

			if (W < 0 || W >= f || F < 0 || F >= L0) continue;

			Y.clearRect(W, F, 1, 1);

			let H = Q[Z];

			if (H === L6) (Y.globalAlpha = 0.55, Y.fillStyle = dG); else (
				Y.globalAlpha = H === D6 ? 0.28 : 1,
				Y.fillStyle = Z0[K]?.hex ?? "#ff00ff"
			);

			Y.fillRect(W, F, 1, 1);
		}

		(Y.globalAlpha = 1, J.style.display = "block");
	}

	function n5() {
		if (!Z$) return;

		(
			Z$.getContext("2d").clearRect(0, 0, Z$.width, Z$.height),
			Z$.style.display = "none"
		);
	}

	function K1($) {
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

	var eJ = 5;

	function C6($) {
		let Q = new DataView($.buffer, $.byteOffset, $.byteLength),
			J = $.byteLength / eJ | 0,
			Y = new Array(J);

		for (let Z = 0; Z < J; Z++) {
			let q = Z * eJ;

			Y[Z] = { pos: Q.getUint32(q, !0), color: $[q + 4] };
		}

		return Y;
	}

	var tG = 48;

	function T8($, Q = tG) {
		let J = G("canvas.mod-ph-thumb", { width: Q, height: Q }),
			Y = J.getContext("2d"),
			Z = K1($);

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

	var aG = 360;

	function $7($, Q = 0) {
		if (!$.length) return;

		let J = Math.max(0, Math.min(Q, $.length - 1)),
			Y = G("span"),
			Z = G("div.mod-carousel-stage"),
			q = G("div.mod-carousel-caption"),
			K = () => {
				let P = $[J];

				(
					Y.replaceChildren(`Flagged draws (${J + 1} / ${$.length})`),
					Z.replaceChildren(T8(P.pixels, aG)),
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
			X = G("div.modal-bg.confirm-bg.mod-carousel-bg", G("div.modal-container", G("div.modal-title", Y, Y$("close", { ariaLabel: "Close", onclick: F })), G(
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

	function sG($) {
		(
			console.warn(`Outdated settings (current: ${$.version}, latest: ${x.version}), updating`),
			$.version = x.version
		);
	}

	function rG() {
		try {
			let $ = localStorage.getItem("wall:settings");

			if ($) return JSON.parse($);
		} catch($) {
			localStorage.removeItem("wall:settings");
		}
	}

	function iG() {
		let $ = rG();

		if (!$) {
			W1();

			return;
		}

		if (x.version != $.version) sG($);

		for (let Q in $) x[Q] = $[Q];

		W1();
	}

	function W1() {
		(
			localStorage.setItem("wall:settings", JSON.stringify(x)),
			t5 = !1
		);
	}

	var t5 = !1;

	function N0() {
		t5 = !0;
	}

	setInterval(
		() => {
			if (t5) W1();
		},
		1000
	);

	document.addEventListener("blur", W1);
	window.addEventListener("beforeunload", W1);
	iG();

	var Q7 = G("img", {
			src: b0(0),
			alt: "⬉",
			onerror($) {
				(console.error("Error loading custom cursor", $), j1());
			}
		}),
		a5 = G("div.chat-bubble", G("span", "You")),
		S$ = G("div.cursor.own-cursor", Q7, { style: { opacity: "0" } });

	function b0($) {
		return `/static/cursors/generated/${$ || 0}.png`;
	}

	var T6 = !1, I6 = !1;

	function J7() {
		if (T6) return;

		(S$.style.opacity = "1", T6 = !0);
	}

	function eG() {
		if (!T6) return;

		(S$.style.opacity = "0", T6 = !1);
	}

	function j1() {
		if (I6) return;

		(
			S$.remove(),
			document.head.append(G("style.system-cursor", "* { cursor: unset !important }")),
			I6 = !0
		);
	}

	function E6() {
		if (!I6) return;
		if (x.a11y.systemCursor) return;

		document.body.prepend(S$);

		let $ = u("style.system-cursor");

		if ($) $.remove();

		I6 = !1;
	}

	function w6($, Q) {
		(S$.style.transform = `translate3d(${$}px, ${Q}px, 0)`, J7());
	}

	document.addEventListener("pointermove", ($) => w6($.x, $.y));

	function Y7($) {
		let Q = $.touches[0];

		if (!Q) return;

		w6(Q.clientX + 16, Q.clientY + 16);
	}

	document.addEventListener("touchstart", Y7);
	document.addEventListener("touchmove", Y7);
	document.addEventListener("mouseout", ($) => $.relatedTarget || eG());
	document.addEventListener("mouseover", J7);

	function I8($) {
		Q7.src = b0($);
	}

	var A6 = 0;

	function G7($) {
		if (x.a11y.hideChatBubbles) return;

		let Q = G("p", $);

		if ((
			A6++,
			a5.append(Q),
			setTimeout(
				() => {
					if ((Q.remove(), A6--, A6 == 0)) a5.remove();
				},
				2000
			),
			A6 == 1
		)) S$.append(a5);
	}

	function q0() {
		if (F0) {
			(
				F0.container.inert = !0,
				F0.content.style.opacity = "0.3",
				F0.lockLevel++
			);

			return;
		}

		new _("Loading...", G("div.loading-modal", "Loading...")).onClose(() => !1);
	}

	function X1() {
		if (!F0?.lockLevel) return;
		if ((F0.lockLevel--, !F0.lockLevel)) (F0.container.inert = !1, F0.content.style.opacity = "");
	}

	var Z7 = 3.141592653589793,
		H1 = Number.isSafeInteger,
		s5 = !1;

	function $Z($, Q, J, Y) {
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

	var h6 = () => Math.random() * 4294967296 >>> 0,
		_$ = $Z(h6(), h6(), h6(), h6());

	function q7($) {
		let Q;

		if ($ < -3.141592653589793) $ += 6.28318531; else if ($ > 3.141592653589793) $ -= 6.28318531;
		if ($ < 0) if ((Q = 1.27323954 * $ + 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q; else if ((Q = 1.27323954 * $ - 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q;

		return Q;
	}

	function K7($) {
		let Q;

		if (($ += 1.57079632, $ > 3.141592653589793)) $ -= 6.28318531;
		if ($ < 0) if ((Q = 1.27323954 * $ + 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q; else if ((Q = 1.27323954 * $ - 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q;

		return Q;
	}

	function P1($) {
		let Q = $ | 0;

		return (s5 = !0, $ < 0 && $ != Q ? Q - 1 : Q);
	}

	var F7 = "__wd_site";

	Object.freeze(Math);

	var V1 = (navigator.userAgentData?.platform ?? navigator.platform).toLowerCase().includes("mac"),
		r5 = V1 ? "⌘" : "Ctrl",
		f0 = window.matchMedia("(pointer: coarse)").matches;

	function k$() {
		if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
	}

	function QZ($, Q, J) {
		let Y = _$() * Z7 * 2,
			Z = J * _$() ** 0.5,
			q = J < 5 ? 1 : 1,
			K = (_$() - 0.5) * q,
			W = (_$() - 0.5) * q;

		return [P1($ + Z * K7(Y) + K), P1(Q + Z * q7(Y) + W)];
	}

	function* W7($, Q, J, Y) {
		let Z = new Set();

		if (J < 2) J = 2;

		for (let q = 0; q < Y; q++) {
			let K = QZ($, Q, J), W = K[1] * f + K[0];

			if (Z.has(W)) {
				q--;

				continue;
			}

			(Z.add(W), yield K);
		}
	}

	function j7($, Q, J, Y) {
		if ($ == -1) return { steps: 0, points: [] };

		let Z = J - $,
			q = Y - Q,
			K = Math.max(Math.abs(Z), Math.abs(q)),
			W = [];

		for (let F = 0; F < K; F++) W.push([P1($ + Z / K * F), P1(Q + q / K * F)]);

		return { steps: K, points: W };
	}

	var $8 = G("div.box.paint-bar.tooltip"),
		X7 = G("span.spray-can-count", "+0"),
		H7 = G("span.spray-can-extra", "cans"),
		P7 = G("button.btn.swatch.tooltip.paint-extra-count", X7, H7, {
			tabIndex: -1,
			onclick: k$,
			dataset: { tooltip: "Additional Spray Cans" }
		});

	function V7($) {
		let Q = Math.floor($ / K0),
			J = $ % K0,
			Y = J / K0 * 100;

		(
			$8.style.setProperty("--paint-remaining", `${Y}%`),
			$8.dataset.tooltip = `Paint Remaining: ${Math.round(Y)}% (${H0(J)}px)`,
			JZ(Q)
		);
	}

	function M7($, Q = !1) {
		(
			$8.style.setProperty("--color", $),
			$8.style.setProperty("--color-2", `${$}7F`),
			$8.classList.toggle("dark", Q)
		);
	}

	function JZ($) {
		(X7.textContent = `+${$}`, H7.textContent = `can${A0($)}`);
	}

	var q$;

	((q) => {
		q[q.None = 0] = "None";
		q[q.Spray = 1] = "Spray";
		q[q.Chat = 2] = "Chat";
		q[q.Login = 3] = "Login";
		q[q.Share = 4] = "Share";
	})(q$ ||= {});

	var M = {
		connectionId: -1,
		user: null,
		token: B$(),
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
			let Q = q$[$];

			(
				this.activeTool = $,
				document.documentElement.dataset.tool = Q.toLowerCase()
			);
		},

		setUser($) {
			(this.user = $, I8($.cursor_id || 0));
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

			if ((V7(Q), Q && P6 == "Out of paint?")) p();
		},

		sprayCanCount() {
			return Math.ceil(this.paintRemaining / K0);
		},

		currentSprayCanSize() {
			let $ = this.paintRemaining % K0;

			return $ == 0 && this.paintRemaining >= K0 ? K0 : $;
		}
	};

	if (z$) window.player = M;

	async function i5($) {
		let Q = await m.user.settings.$post({ json: $ });

		if (Q.status != 200) return await Q.text();

		M.setUser(await Q.json());
	}

	async function M1($) {
		let Q = await i5($);

		if (typeof Q == "string") alert(`Could not update user settings: ${Q}`);
	}

	var e5 = /^[a-z0-9_.-]{3,16}$/, YZ = /^[_.-]+$/;

	function R1($) {
		if (!$) return "Missing username";
		if ($.length < 3) return "Must be at least 3 letters long";
		if ($.length > 16) return "Must not be longer than 16 letters";
		if (!e5.test($)) return "Can only contain lowercase letters, digits, underscores, dashes and dots.";
		if (YZ.test($)) return "This username is blacklisted.";
	}

	function R7() {
		let Q = M.user.username,
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

			let X = j != Q, P = R1(j);

			if ((W.disabled = !X || !!P || J, F0)) if ((F = X, F)) F0.lockLevel++; else F0.lockLevel--;
			if (X && P) Z(P, "warning"); else if (Y.className == "warning") Z("");
		}

		return (
			q.oninput = H,
			W.onclick = async () => {
				if (J) return;

				let j = q.value;

				if (j == Q) return p(!0);

				if (R1(j)) {
					H();

					return;
				}

				if (!await r(`Change your username to "${j}"?`, "Change Username", "Change", "Keep Current")) return;

				(J = !0, Z(""), q0(), F0.lockLevel = 1);

				try {
					let P = await i5({ username: j });

					if ((X1(), J = !1, typeof P == "string")) {
						(Z(P, "warning"), H());

						return;
					}

					(
						Q = M.user?.username ?? j,
						q.value = Q,
						Z("Username updated!", "success"),
						H()
					);
				} catch(P) {
					(
						X1(),
						J = !1,
						Z(P?.message || "Something went wrong", "warning"),
						H()
					);
				}
			},
			G("div.username-settings", G("h3", "Username"), q, Y, G("div.btn-container", K, W))
		);
	}

	function e($, Q) {
		new _("Error", G("div.modal.error-modal", G("p.error", $), Q && G("div.details", Q), U$));
	}

	async function T0($, Q) {
		if ($.status == 429) {
			let J = $.headers.get("retry-after");

			e(
				`Not so fast! Please try again ${J
					? `in ${A0(Math.round(parseInt(J) / 60), "minute")}`
					: "a bit later"}`,
				Q
			);
		} else if ($.status == 500) e("Something went wrong on our side, sorry!!!", Q); else {
			let J = $.headers.get("content-type");

			if (J && J.includes("text/plain")) e(await $.text(), Q); else e(`Something went wrong... (${$.status} ${$.statusText})`, Q);
		}
	}

	function z7($, Q, J, Y, Z = !1) {
		return G(
			"div.clan-server.box",
			G("img", {
				src: `https://cdn.discordapp.com/icons/${$}/${Q}.webp?size=128&quality=lossless`,
				draggable: !1
			}),
			G("div.info", G("b", J), G("p", G("span", H0(Y)), " members")),
			Z && G("div.btns", G("button.btn.primary", "Select", {
				async onclick() {
					(q0(), await M1({ clanDiscordId: $ }), U1());
				}
			}))
		);
	}

	function z1($, Q = !1) {
		return G("div.clan-with-stats", z7($.discord_id, $.icon, $.name, $.stat_member_count, !1), G("div.stats", G("p", G("b", W6($.stat_paint_visible)), " paint visible"), G("p", G("b", H0($.stat_pixels_changed)), " pixels changed"), G("p", G("b", H0($.approx_discord_members || 0)), " discord members"), Q && G("p", "Discord ID: ", G("b", $.discord_id))));
	}

	async function U7() {
		q0();

		let $ = await m.user.discordGuilds.$get();

		if (!$.ok) return e("Error loading the Discord Server list", "Make sure you're authenticated via Discord, and allowed us to access your Discord server list!");

		let Q = await $.json();

		new _("Change Clan", G("div.clans-modal", G("p", G("a.link", "Go Back", { onclick: U1 }), { style: { marginBottom: "8px" } }), G("div.list", Q.sort((J, Y) => Y.approximate_member_count - J.approximate_member_count).map((J) => z7(J.id, J.icon, J.name, J.approximate_member_count, !0)), G("button.btn", "Refresh List"))));
	}

	function GZ() {
		new _("User > Clan", G("div.clans-modal.no-clan", G("p", "You do not have a clan."), G("p.notice.noicon", "Clans appear next to your name at all times! ", "They're a fun way to represent your favorite streamer, content creator, friend group or any other community!"), "Join a clan to show where you belong, meet other members, climb the leaderboard together, and stand out across the platform.", G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Select Clan", { onclick: U7 }))));
	}

	async function U1() {
		if (!M.user?.discord_id) return e("Sorry, clans are for Discord users only!", `Clans work using Discord servers, so you cannot join any clans if you don't have a Discord account connected.

You can authenticate into your current account if your Discord account has the same E-Mail as your Google account.`);

		if (!M.user.clan) return GZ();

		new _("User > Clan", G("div.clans-modal.current", G("p", "Current Clan"), z1(M.user.clan), G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Change Clan", { onclick: U7 }), G("button.btn", "Leave Clan", {
			async onclick() {
				if (!await r("Are you sure you want to leave your current clan?")) return;

				(q0(), await M1({ clanDiscordId: "0" }), U1());
			}
		}))));
	}

	var $Q = 0;

	function k7($ = "Message") {
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

	var m6 = ($) => {
		let Q = document.getElementById($);

		if (!Q) return "";

		return Q.value.trim();
	};

	async function D7($, Q, J) {
		if (!$ || !Q) return;

		q0();

		let Y = await m.user.feedback.$post({ json: { kind: $, content: Q, target: J } });

		if (!Y.ok) return T0(Y, `Could not submit ${$}`);

		(
			$Q = Date.now() + 30000,
			new _($ == "report" ? "Report" : "Feedback", G("div.feedback", G("div.success", `Thank you for your ${$ == "report" ? "report" : "feedback"}!`)))
		);
	}

	function L7($) {
		return G("select#f_type.box.outset.input", { style: { width: "100%" } }, $.map(([Q, J]) => G("option", { value: Q }, J || Q)));
	}

	function C7($) {
		if (!M.user) return;
		if ($Q > Date.now()) return e("Please wait 30 seconds before reporting someone again.");

		new _("Report User", G(
			"div.feedback",
			G("p", "Report ", G("b", $)),
			G("label", { htmlFor: "f_type" }, "Reason"),
			L7([
				"- Please Specify -",
				"Griefing",
				"Cheating",
				"Multiaccounting",
				"Bad Behaviour",
				"Botting",
				"Other"
			].map((Q) => [Q])),
			k7("Optional Message"),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Report", {
				onclick: () => {
					let Q = m6("f_type"),
						J = m6("f_content"),
						Y = `${Q}|${J}`;

					if (Q[0] == "-") return;

					D7("report", Y, $);
				}
			}))
		));
	}

	function A7() {
		if (!M.user) {
			e("You need to be signed in to send feedback!");

			return;
		}

		if ($Q > Date.now()) return e("Please wait 30 seconds before submitting feedback again.");

		new _("Feedback", G(
			"div.feedback",
			G("label", { htmlFor: "f_type" }, "Type"),
			L7([
				["bug", "Bug Report"],
				["feedback", "Feedback"],
				["suggestion", "Feature Suggestion"]
			]),
			k7(),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Submit!", {
				onclick: () => {
					D7(m6("f_type"), m6("f_content"));
				}
			}))
		));
	}

	function T7() {
		new _("Chat", G("div.chat-modal.nopad", k1, QQ(!0))).onClose(() => {
			u(".chat-log-wrapper").append(k1);
		});
	}

	var N6 = null,
		I7 = [
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

	function E7($, Q) {
		let J = new URLSearchParams();

		if ($.name == "Reddit") (J.set("title", "#filianislost"), J.set("url", Q)); else J.set("text", `#filianislost ${Q}`);

		return `${$.url}?${J.toString()}`;
	}

	async function JQ() {
		if (N6) return N6;

		q0();

		let $ = await m.user.shareLink.$post();

		if (!$.ok) {
			T0($, "Could not generate the referral link");

			return;
		}

		let Q = await $.json();

		return (
			N6 = Q,
			setTimeout(
				() => {
					N6 = null;
				},
				60000
			),
			Q
		);
	}

	function w7($) {
		if (!M.user) return "";

		let Q = new URLSearchParams();

		if ((Q.set("c", $.referral.code), $.imageCode)) Q.set("im", $.imageCode);
		if ($.x && $.y) Q.set("p", `${$.x},${$.y}`);

		return `${Y0.url.share}/${M.user.username}?${Q.toString()}`;
	}

	var B6 = null;

	function YQ($, Q = !1) {
		let J = w7($),
			Y = `Share Website > ${$.imageCode ? "Image" : "Link"}`;

		new _(Y, G(
			"div.share-modal.link",
			G("p", Q
				? "You have already generated an image in the past minute!"
				: "Here's your link!"),
			G("span.box.input.link.tooltip", J, {
				dataset: { tooltip: "Click to copy!" },
				onclick() {
					N5(J);
				}
			}),
			$.imageLink && G("img.preview", { src: $.imageLink }),
			G("p.desc", "Post it on..."),
			G("div.platforms", I7.map((Z) => G(
				"a.platform.tooltip",
				{
					target: "_blank",
					href: E7(Z, `${J}&utm_source=${Z.id}`),
					dataset: { tooltip: Z.name }
				},
				G("img", {
					src: `/static/icon/platform/${Z.id}.png`,
					alt: Z.name,
					draggable: !1
				})
			))),
			U$
		));
	}

	function ZZ() {
		if (B6) return YQ(B6, !0);

		(M.setTool(4), y$(4), p(!0));
	}

	async function GQ($) {
		if ((M.setTool(0), y$(0), r0(), $)) return D1();

		(q0(), l0());

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

		if (!H.ok) return T0(H, "Could not generate the image");

		let { code: j, url: X } = await H.json(),
			k = { referral: await JQ(), imageCode: j, imageLink: X, x: W, y: F };

		(
			B6 = k,
			setTimeout(
				() => {
					B6 = null;
				},
				60000
			),
			p(!0),
			YQ(k)
		);
	}

	async function D1() {
		let $ = await JQ();

		if (!$) return;

		new _("Share Website", G("div.share-modal", G("p.success", `Every player who signs up with your link will reward you with ${C8(J1.ReferralCode)}!`), G("div.btn-container.vertical", G("button.btn.share", "Share Link", { onclick: () => YQ({ referral: $ }) }), G("button.btn.share", "Share Image", { onclick: () => ZZ() }), G("button.btn", "Cancel", { onclick: () => p() })), G("p.desc", `You have invited ${A0($.uses, "user")} so far!`)));
	}

	function h7() {
		return new _("Out of paint!", G("div.out-of-paint", G("p.c", G("b", "You have used up some paint, time to submit!")), G("p.c.desc", `You have ${C8(M.paintRemaining + M.localPaintIncrement)} remaining.`), G("p.notice.noicon", "Paint does not get consumed until you submit your changes. Submit your drawing to the canvas, or undo your changes."), G(
			"div.btn-container",
			G("button.btn.primary", "Submit", {
				onclick: async () => {
					(q0(), await S6(), p(!0));
				}
			}),
			G("button.btn", "Cancel", { onclick: () => p() })
		)));
	}

	function O6() {
		return new _("Out of paint?", G("div.out-of-paint", G("b", "You can share our website to get more paint!"), G("p.success.noicon", `Each invited user will reward you with ${C8(J1.ReferralCode)}!`), G("p.desc", `You can also wait for a refill to get ${C8(J1.TimePassed)}.`, G("br"), "The timer is shown in the bottom bar."), G("div.btn-container.vertical", G("button.btn.share", "Share Website", { onclick: D1 }), e$)));
	}

	var E8 = G("div.box.outset.status-text.warn"),
		J8 = G("div.box.outset.status-text"),
		Q8 = 0,
		v$ = !1,
		ZQ = 0;

	function r0() {
		if (M.openAt && Date.now() + M.clockOffset < M.openAt) {
			if (v$) (E8.textContent = "", v$ = !1);

			(FZ(), ZQ = M.activeTool);

			return;
		}

		if (M.activeTool == 1) qZ(ZQ != M.activeTool); else if (v$) (E8.textContent = "", v$ = !1);
		if (M.activeTool == 4) KZ(); else if (M.paintRemaining == 0 && M.nextRefill) WZ(); else if (z0.size || B0.length) jZ(); else m7();

		ZQ = M.activeTool;
	}

	function qZ($ = !1) {
		let Q = C.normalizedZoom <= _6;

		if (Q && (!v$ || $)) (v$ = !0, E8.textContent = "Zoom in to draw!"); else if (v$ && !Q) {
			(E8.textContent = "", v$ = !1);

			return;
		}
	}

	setInterval(r0, 1000);

	function m7() {
		if (Q8 == 0) return;

		(J8.textContent = "", Q8 = 0);
	}

	function KZ() {
		(
			Q8 = 4,
			J8.replaceChildren(G("div.share-viewport", G("p", "Zoom into the canvas to share your artwork!"), G("div", G("button.btn", "Share", { onclick: () => GQ(!1) }), G("button.btn", "Cancel", { onclick: () => GQ(!0) }))))
		);
	}

	function FZ() {
		let $ = M.openAt - (Date.now() + M.clockOffset);

		(
			Q8 = 5,
			J8.replaceChildren(G("div.timer", G("p", "Drawing opens in: "), G("b", v5($))))
		);
	}

	function WZ() {
		let $ = M.nextRefill - Date.now(), Q = v5($);

		if ((Q8 = 1, $ < 1)) {
			(M.nextRefill = 0, m7());

			return;
		}

		J8.replaceChildren(G("div.timer", G("p", G("a.link", "Out of paint!", { tabIndex: 1, onclick: () => O6() }), " Next refill in: "), G("b", Q)));
	}

	function jZ() {
		if (Q8 == 2) return;

		(
			Q8 = 2,
			J8.replaceChildren(G("p", "Drawing locally - Confirm to submit!"), G("div", G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/confirm.png", draggable: !1 }), G("span", "Confirm"), { tabIndex: 1, onclick: S6 }), G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/cancel.png", draggable: !1 }), G("span", "Cancel"), { tabIndex: 1, onclick: N7 })))
		);
	}

	var Y8 = !1,
		B7 = 1,
		qQ = 10,
		O7 = ["tiny", "small", "medium", "large"],
		KQ = 2,
		FQ = ($, Q, J) => G(
			"button.btn.swatch.icon.tool.tooltip",
			{
				id: `tool-${Q}`,
				dataset: { tooltip: J },
				onclick: () => y$($)
			},
			G("img", { src: `/static/icon/tool/${Q}.png`, draggable: !1 })
		),
		w8 = 10,
		XZ = () => {
			let $ = G("img", { draggable: !1 }),
				Q = G("input.tooltip", {
					type: "range",
					min: B7,
					max: qQ,
					oninput(Y) {
						let Z = Y.target, q = parseInt(Q.value);

						(
							Z.dataset.tooltip = `Brush Size: ${q}`,
							x.lastBrushSize = q + KQ,
							J(q),
							N0()
						);
					}
				}),
				J = (Y) => {
					let Z = O7[Math.floor(Y / (qQ + 1) * O7.length)];

					(
						$.src = `/static/icon/size/${Z}.png`,
						w8 = Y + KQ,
						Q.value = Y.toString(),
						Q.dataset.tooltip = `Brush Size: ${Y}`
					);
				};

			return (
				J(Math.min(Math.max(x.lastBrushSize - KQ, B7), qQ)),
				G("div.container", G("div.popup.box.outset.size-control", G("div.input-container.tooltip", Q)), { onmouseout: () => k$() }, G("button#brush-size-btn.btn.swatch.icon.tooltip", $, { dataset: { tooltip: "Brush Size" } }))
			);
		},
		WQ = {
			0: FQ(0, "hand", "Hand Tool (H)"),
			1: FQ(1, "spray", "Draw Tool (B)"),
			2: FQ(2, "chat", "Open Chat")
		},
		S7 = G("div.tools", ...Object.values(WQ)),
		_7 = G("div.tools", XZ(), Z6(
			G6("tool/preview", {
				id: "tool-preview",
				onclick($) {
					(
						Y8 = !Y8,
						$.target.classList.toggle("active", Y8),
						y7(),
						k$()
					);
				}
			}),
			"Compare Mode (M)"
		));

	function y$($) {
		if ((k$(), $ == 2)) {
			T7();

			return;
		}

		(
			a0(".tool.active").forEach((J) => J.classList.remove("active")),
			(WQ[$] ?? WQ[0]).classList.add("active"),
			M.setTool($),
			r0()
		);
	}

	var HZ = new Map(),
		K$ = new Uint8Array(i$).fill(255),
		EX = !!Y0.url?.ws;

	class v7 {
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
				this.pos = $ * p0 + Q,
				HZ.set(this.pos, this)
			);
		}
	}

	function g7() {
		for (let $ = 0; $ < L8; $++) for (let Q = 0; Q < p0; Q++) new v7($, Q);
	}

	function h8($, Q) {
		if (!H1($) || $ < 0 || $ >= i$) return !1;

		let J = $ % f,
			Y = Math.floor($ / f),
			Z = Z0[Q],
			q = z0.get($);

		if ((K$[$] = Q, q && Y8)) G8($, q, J, Y); else if (!q) if (Z) D$(J, Y, Z.hex); else u0.clearRect(J, Y, 1, 1);

		return !0;
	}

	function p7($, Q) {
		let J = Q * f + $;

		if (K$[J] == 255) K$[J] = 254;

		return Z0[K$[J]];
	}

	var L1 = [], B0 = [], i0 = [];

	function x7() {
		(L1.push(i0), i0 = [], B0 = []);
	}

	function c7() {
		(L1 = [], B0 = [], i0 = []);
	}

	function jQ($, Q = !1) {
		let J = 0;

		for (let Y of $) if (Q) {
			let Z = Z0[Y.newColor];

			if (!z0.has(Y.pos)) J++;

			(z0.set(Y.pos, Z), G8(Y.pos, Z, Y.x, Y.y));
		} else if (typeof Y.oldColor == "number") {
			let Z = Z0[Y.oldColor];

			(z0.set(Y.pos, Z), G8(Y.pos, Z, Y.x, Y.y));
		} else {
			let Z = Z0[K$[Y.pos]];

			if ((z0.delete(Y.pos), Z)) D$(Y.x, Y.y, Z.hex); else u0.clearRect(Y.x, Y.y, 1, 1);

			J++;
		}

		return J;
	}

	function y6() {
		if (i0.length) {
			let J = jQ(i0);

			(M.addLocalPaintIncrement(J), B0 = [], B0.push(i0), i0 = []);

			return;
		}

		if (!L1.length) return;

		let $ = L1.pop(), Q = jQ($);

		(M.addLocalPaintIncrement(+Q), B0.push($));
	}

	function v6() {
		if (!B0.length) return;

		let $ = B0.pop(), Q = jQ($, !0);

		(L1.push($), M.addLocalPaintIncrement(-Q));
	}

	function PZ($, Q) {
		let J = Math.imul($, 374761393) + Math.imul(Q, 668265263) | 0;

		return (
			J = Math.imul(J ^ J >>> 13, 1274126177),
			J ^= J >>> 16,
			(J >>> 0) / 4294967296
		);
	}

	function b7($, Q) {
		if (Q >= q6) return !1;

		let J = q6 - _5;

		if (Q < J) return !0;

		let Y = (q6 - Q) / _5;

		return PZ($, Q) < Y;
	}

	var g$ = [], f7 = null;

	function XQ() {
		f7?.();
	}

	var F$ = {
		bind($) {
			(f7 = $, $());
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

			XQ();
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
				XQ()
			);
		},

		async markAllRead() {
			if (!g$.length) return;
			if ((g$.length = 0, XQ(), !M.token)) return;

			try {
				await m.user.notifications.read.$post({ json: {} });
			} catch {}
		}
	};

	function VZ($) {
		let Q = Math.max(0, Math.floor((Date.now() - $) / 1000));

		if (Q < 60) return "just now";

		let J = Math.floor(Q / 60);

		if (J < 60) return `${J}m ago`;

		let Y = Math.floor(J / 60);

		if (Y < 24) return `${Y}h ago`;

		return `${Math.floor(Y / 24)}d ago`;
	}

	function MZ($) {
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
			G("div.time", E0($.createdAt, VZ($.createdAt)))
		);
	}

	function l7() {
		let $ = [...F$.unread];

		return (
			F$.markAllRead(),
			new _("Notifications", G(
				"div.notifications-modal",
				$.length
					? G("div.list", $.map(MZ))
					: G("p.desc.c", "No notifications."),
				G("div.btn-container", e$)
			))
		);
	}

	function u7() {
		let $ = G("span.notif-badge"),
			Q = G("img", { src: "/static/icon/notif.png", draggable: !1, alt: "bell" }),
			J = G("button.btn.swatch.tooltip.notif-indicator.icon", Q, $, {
				dataset: { tooltip: "Notifications" },
				onclick() {
					l7();
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

	function g6() {
		new _("Select Color", G("div.color-modal", G("div.colors", Z0.map(($) => G("button.btn.swatch.tooltip", {
			dataset: { tooltip: $.name },
			style: { backgroundColor: $.hex },
			onclick() {
				(Z8($), p());
			}
		})))));
	}

	var S0 = [...Z0], q8 = G("div.colors.container");

	function x6($) {
		let Q = S0.indexOf($);

		if (Q > -1) (S0.splice(Q, 1), S0.push($));
	}

	var p6 = ($) => Z0.findIndex((Q) => Q.name == $);

	function RZ() {
		let $ = x.lastUsedColors;

		if ($.length != S0.length) {
			let Q = p6("Red"),
				J = p6("Violet"),
				Y = Z0.slice(Q, J + 1);

			(x6(Z0[p6("Gray")]), x6(Z0[p6("White")]));

			for (let Z of Y) x6(Z);

			return;
		}

		(S0.splice(0), S0.push(...$.map((Q) => Z0[Q])));
	}

	function o7($) {
		let Q = S0[S0.length - $];

		if (!Q) return;

		Z8(Q, !1);
	}

	function Z8($, Q = !0) {
		if ((M7($.hex, $.dark), M.selectedColor == $)) return;
		if (S0.indexOf($) > -1 && Q) (x6($), x.lastUsedColors = S0.map((Y) => Y.idx));

		(M.selectedColor = $, HQ());
	}

	var zZ = 54, UZ = 9;

	function d7($) {
		let Q = getComputedStyle($),
			J = $.clientWidth - parseFloat(Q.paddingLeft) - parseFloat(Q.paddingRight);

		for (let Y = 0; Y < $.children.length; Y++) {
			let Z = $.children[Y];

			if (Z === q8) continue;

			J -= Z.getBoundingClientRect().width;
		}

		return J;
	}

	function HQ() {
		let $ = Z6(G6("tool/colors", { id: "palette-btn", onclick: g6 }), "Palette");

		q8.replaceChildren($);

		let Q = q8.parentElement, J = Q ? d7(Q) : 0;

		if (J <= 0) {
			requestAnimationFrame(() => {
				if (Q && d7(Q) > 0) HQ();
			});

			return;
		}

		let Y = Math.floor(J / zZ) - 1,
			Z = Math.max(0, Math.min(UZ, Y));

		for (let q = 0; q < Z; q++) {
			let K = S0[S0.length - 1 - q],
				W = G("button.btn.swatch.tooltip", {
					tabIndex: -1,
					dataset: { tooltip: K.name },
					style: { backgroundColor: K.hex },
					onclick() {
						Z8(K, !1);
					}
				});

			q8.append(W);
		}
	}

	function n7() {
		(
			RZ(),
			Z8(S0[S0.length - 1], !1),
			M.setPaintRemaining(M.paintRemaining)
		);

		let $ = q8.parentElement;

		if ($) {
			let Q = -1;

			new ResizeObserver(() => {
				let J = $.clientWidth;

				if (J === Q) return;

				(Q = J, HQ());
			}).observe($);
		}
	}

	var PQ = G("div.hotbar-container");

	function c6($) {
		PQ.replaceChildren($);
	}

	var C1 = G("div.hotbar.main-bar", { role: "toolbar" });

	function t7() {
		(
			C1.append(G("div.status-text-container", E8, J8), G("div.section.left", a7(), G("div#chatbox-divider.divider"), S7, G("div.divider")), G("div.section.middle", $8, P7, u7()), G("div.section.right", G("div.divider"), _7, G("div.divider"), q8)),
			M.setTool(0),
			c6(C1),
			y$(0),
			n7()
		);
	}

	var s7 = 0,
		p$ = 0,
		A1 = !1,
		r7 = 0,
		i7 = 0,
		e7 = 0,
		$Y = 0,
		b6 = !1,
		QY = !1,
		L$ = new Map(),
		kZ = 50,
		DZ = 24,
		LZ = 16;

	function _0($, Q) {
		return [
			Math.max(Math.min(Math.floor(($ - C.rect.left) / C.rect.width * Q0.width), Q0.width), 0),
			Math.max(Math.min(Math.floor((Q - C.rect.top) / C.rect.height * Q0.height), Q0.height), 0)
		];
	}

	async function CZ($, Q) {
		let J = Date.now(),
			[Y, Z] = _0($, Q),
			{ points: q } = j7(r7, i7, Y, Z),
			K = $ - e7,
			W = Q - $Y;

		if ((
			p$ += Math.sqrt(K * K + W * W) / (J - s7),
			s7 = J,
			r7 = Y,
			i7 = Z,
			!A1
		)) {
			(A1 = !0, p$ = 5);

			return;
		}

		if (p$ > 0) p$ *= 0.8;
		if (p$ <= 0.001) p$ = 0;

		let F = 1 - p$ / (w8 * 1.1),
			H = Math.max(w8 * F, 2),
			j = Math.min(Math.max(Math.floor((H + 1) ** 1.5), 1), 15);

		if (!q.length) q.push([Y, Z]);

		let X = (w8 - 1) * 0.1, P = 0;

		for (let [k, z] of q) {
			let A = W7(k, z, Math.floor(H), j), v = 0, O = 0;

			for (let [R, D] of A) {
				if (R == k && D == z) O++;
				if ((v++, !VQ(R, D) && p$ < X)) AZ(R, D);
				if ((P++, W$ && P % 100 == 0)) await r$();
			}

			if (v < 5 || O > 1) b6 = !0;
		}

		r0();
	}

	function AZ($, Q) {
		if (Math.random() > 0.5) return;

		let J = L$.get($);

		if (J) J.y = Math.max(J.y, Q); else L$.set($, { y: Q, amount: 0, max: _$() * (w8 * 1.5) });
		if (L$.size > kZ) L$.delete(L$.keys().next().value);
	}

	function TZ() {
		if (!L$.size) return;

		let $ = [...L$.entries()],
			[Q, J] = $[Math.floor(_$() * $.length)];

		if ((VQ(Q, ++J.y), ++J.amount >= J.max)) L$.delete(Q);
	}

	function JY() {
		(
			setInterval(
				() => {
					if (d0 && A1) TZ();
				},
				DZ
			),

			setInterval(
				() => {
					if (d0) (CZ(C$, A$), e7 = C$, $Y = A$); else if (A1) (L$.clear(), A1 = !1);
				},
				LZ
			)
		);
	}

	function YY() {
		b6 = !1;
	}

	var z0 = new Map();

	function y7() {
		for (let [$, Q] of z0) G8($, Q, $ % f, Math.floor($ / f));
	}

	function G8($, Q, J, Y) {
		if (Y8) {
			let Z = Z0[K$[$]];

			if (Z) D$(J, Y, Z.hex); else u0.clearRect(J, Y, 1, 1);

			D$(J, Y, Q.opaqueHex);
		} else D$(J, Y, Q.hex);
	}

	function GY() {
		(
			M.localPaintIncrement = 0,
			M.setPaintRemaining(M.paintRemaining)
		);

		for (let $ of z0.keys()) {
			let Q = $ % f,
				J = Math.floor($ / f),
				Y = Z0[K$[$]];

			if (Y) D$(Q, J, Y.hex); else u0.clearRect(Q, J, 1, 1);
		}

		(z0.clear(), c7());
	}

	function IZ() {
		GY();
	}

	async function ZY($, Q = 0) {
		if (Q >= 5) return (
			console.error("Failed to submit the drawing after 5 tries."),
			!1
		);

		let J = await qY($);

		if (window[F7]) return !0;

		try {
			return (await KY(J), !0);
		} catch(Y) {
			return (
				console.error("Error submitting the drawing:", Y),
				await ZY($, Q + 1)
			);
		}
	}

	async function EZ() {
		let $ = [];

		for (let [Q, J] of z0) ($.push([Q, J.idx]), h8(Q, J.idx));

		if ((M.commitLocalPaint(), GY(), $.length === 0 || b6 || QY)) {
			YY();

			return;
		}

		for (let Q = 0; Q < $.length; Q += K6) if (!await ZY($.slice(Q, Q + K6))) return e("Something went wrong, sorry!", "Could not submit local drawing to the server after 5 tries");
	}

	function VQ($, Q) {
		if (!H1($) || !H1(Q) || $ < 0 || Q < 0 || $ >= f || !b7($, Q)) return !1;

		let J = M.paintRemaining + M.localPaintIncrement,
			Y = K6 - K0 - 5,
			Z = J % K0 == 0 && M.localPaintIncrement < -Y;

		if (!J || Z) return (RQ(), !1);

		let q = M.selectedColor, K = Q * f + $;

		if (z0.has(K)) {
			if (z0.get(K) == q) return !1;
		} else if (K$[K] == q.idx) return !1;

		if ((G8(K, q, $, Q), !z0.has(K))) M.addLocalPaintIncrement(-1);

		return (
			i0.push({
				x: $,
				y: Q,
				pos: K,
				oldColor: z0.get(K)?.idx,
				newColor: q.idx
			}),
			z0.set(K, q),
			!0
		);
	}

	async function S6() {
		k$();

		try {
			(C1.classList.add("progress"), await EZ());
		} finally {
			C1.classList.remove("progress");
		}
	}

	async function N7() {
		if ((k$(), MQ())) {
			if (!await r("Are you sure you want to cancel your changes?")) return;
		}

		IZ();
	}

	function MQ() {
		return z0.size > 200 || B0.length > 0;
	}

	var zQ = ($) => A0(Y1($ / K0), "spray can");

	async function wZ($) {
		if (!M.user) return;
		if (z0.size || B0.length || M.localPaintIncrement) return e("You cannot share your paint while drawing! Submit or undo your changes.");

		let Q = Math.min(M.paintRemaining, K0 * 5),
			J = G("p"),
			Y = () => {
				let K = parseInt(Z.value),
					W = Math.ceil(K / M.paintRemaining * 100);

				J.replaceChildren(G("b", `${W}%`), " of your paint (", G("b", zQ(K)), ")");
			},
			Z = G("input", {
				type: "range",
				min: 1,
				max: Q,
				value: Math.min(K0, M.paintRemaining),
				oninput: Y
			}),
			q = G("datalist#fskjdhsad", Array.from({ length: Math.floor(Q / K0) }, (K, W) => G("option", { value: W * K0, label: W * K0 })));

		(
			Z.setAttribute("list", "fskjdhsad"),
			Y(),
			new _("Share Paint", G("div.share-paint-modal", G("p", "How much paint do you want to give to ", G("b", $.username), "?"), Z, q, J, G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.primary.btn", "Share", {
				async onclick() {
					let K = parseInt(Z.value);

					if (!await r(`Are you sure you want to give ${zQ(K)} to ${$.username}?`)) return p();

					q0();

					let F = await m.user.sharePaint.$post({ json: { username: $.username, paint: K } });

					if (!F.ok) return T0(F, "Could not sell cans");

					let H = await F.json();

					new _("Share Paint", G("p", `Gifted ${zQ(H.sold)} cans to ${$.username}!`));
				}
			}))))
		);
	}

	async function FY($) {
		q0();

		let Q = G("div.settings-modal", G("p.notice.noicon.user", G("span.name-container", $.clan_name && G("b", `${m$($.clan_name)} `), $.username), G("img", { src: b0($.cursor_sprite), draggable: !1, alt: "cursor" })));

		if ($.clan_name && $.clan_id) {
			let Y = await (await m.user.clan[":id"].$get({ param: { id: $.clan_id.toString() } })).json();

			Q.append(G("p.c", "Clan"), z1(Y));
		}

		(
			Q.append(G(
				"div.btn-container.vertical",
				G("button.btn", "Give Paint", {
					onclick() {
						wZ($);
					}
				}),
				G("button.btn", "Jump to Cursor", {
					onclick() {
						y0({ connId: $.id, fallbackPos: $.lastPos, username: $.username });
					}
				}),
				G("button.btn", "Report User", {
					onclick() {
						C7($.username);
					}
				}),
				e$
			)),
			new _("User Info", Q)
		);
	}

	function UQ() {
		let $ = -C.x / C.zoom,
			Q = -C.y / C.zoom,
			J = window.innerWidth / C.zoom,
			Y = window.innerHeight / C.zoom;

		return {
			x: Math.max($, 0),
			y: Math.max(Q, 0),
			x2: Math.min($ + J, Q0.width),
			y2: Math.min(Q + Y, Q0.height)
		};
	}

	function hZ() {
		let $ = UQ();

		return {
			x: Math.floor($.x / C0),
			y: Math.floor($.y / C0),
			x2: Math.floor($.x2 / C0),
			y2: Math.floor($.y2 / C0)
		};
	}

	function WY() {
		let $ = hZ(), Q = new Set(), J = 4;

		for (let Y = $.x - 4; Y <= $.x2 + 4; Y++) for (let Z = $.y - 4; Z <= $.y2 + 4; Z++) {
			if (Y < 0 || Z < 0 || Y >= L8 || Z >= p0) continue;
			if (Q.size > 1000) return new Set();

			Q.add(Y * p0 + Z);
		}

		return Q;
	}

	function kQ($, Q, J = C.viewport) {
		return $ < J.x || Q < J.y || $ > J.x2 || Q > J.y2;
	}

	var T1 = new Set(),
		mZ = 10,
		jY = 0.05,
		NZ = 1e6,
		XY = performance.now();

	function HY($) {
		let Q = ($ - XY) / 1000, J = 1 - Math.exp(-mZ * Q);

		XY = $;

		let Y = 0, Z = W$ ? 100 : 500;

		for (let q of T1) {
			if (Y++ >= Z) break;

			if (!q.element) {
				T1.delete(q);

				continue;
			}

			let K = q.moveX - q.x,
				W = q.moveY - q.y,
				F = K * K + W * W;

			if (Math.abs(K) < jY && Math.abs(W) < jY || F > NZ) (q.x = q.moveX, q.y = q.moveY, T1.delete(q)); else (q.x += K * J, q.y += W * J);

			f6(q, q.x, q.y);
		}

		requestAnimationFrame(HY);
	}

	function PY($, Q, J) {
		let Y = M0.get($);

		if (!Y) return;

		if (kQ(Y.x, Y.y) && kQ(Q, J)) {
			(f6(Y, Q, J), T1.delete(Y));

			return;
		}

		(T1.add(Y), Y.moveX = Q, Y.moveY = J);
	}

	requestAnimationFrame(HY);

	var M0 = new Map(),
		K8 = G("div.cursors"),
		I1 = G("div.cursor-overflow");

	I1.style.display = "none";
	K8.append(I1);

	function MY($) {
		if ($ > 0) (I1.textContent = `+${$} more here`, I1.style.display = ""); else I1.style.display = "none";
	}

	var BZ = 50,
		E1 = new Set(),
		m8 = new Set(),
		RY = new Set(),
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

	function UY() {
		for (let $ of M0.values()) if ($.element) $.element.remove();

		M0.clear();
	}

	function DQ($) {
		if (x.a11y.hideCursors) return;
		if ($.username == M.user?.username || $.id == M.connectionId) return;

		let Q = M0.get($.id),
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

		if ((M0.set($.id, Y), Q?.element && Q.partial)) {
			let Z = Q.element.querySelector("img");

			if ((Q.element.append(CQ(Y)), Z)) Z.src = b0($.cursor_sprite);
		} else if (Q?.element && J) OZ(Y);
	}

	function OZ($) {
		if (!$.element) return;

		let Q = $.element.querySelector("img");

		if (Q) Q.src = b0($.cursor_sprite);

		(
			$.element.querySelector(".chat-bubble")?.remove(),
			$.element.append(CQ($))
		);
	}

	function SZ($) {
		if (M0.has($) || $ == M.connectionId) return;

		let Q = { ...zY, id: $ };

		return (LQ($), M0.set($, Q), Q);
	}

	function LQ($) {
		if ($ === M.connectionId || M0.has($) || E1.has($) || m8.has($) || RY.has($)) return;

		E1.add($);
	}

	function kY() {
		if (m8.size > 0 || E1.size === 0) return null;

		let $ = [];

		for (let Q of E1) {
			if ($.length >= BZ) break;

			$.push(Q);
		}

		for (let Q of $) (E1.delete(Q), m8.add(Q));

		return $;
	}

	function DY($) {
		for (let Q of $) (DQ(Q), m8.delete(Q.id));
		for (let Q of m8) RY.add(Q);

		m8.clear();
	}

	function LY($) {
		let Q = M0.get($);

		if (!Q) return;
		if (Q.element) Q.element.remove();

		M0.delete($);
	}

	var VY = 0;

	function CY($, Q, J = !1) {
		if (x.a11y.hideCursors) return;
		if ($ == M.connectionId) return;

		let Y = M0.get($) || SZ($);

		if (!Y) return;

		(Y.lastSeen = performance.now(), Y.lastPos = Q);

		let Z = Q % f, q = Math.floor(Q / f);

		if (!Y.element) (
			Y.element = G("div.cursor", { dataset: { id: Y.id.toString() } }, G("img", { draggable: !1, src: b0(Y.cursor_sprite), alt: "⬉" }), !Y.partial && CQ(Y)),
			K8.append(Y.element),
			Y.hidden = !1,
			Y.element.style.zIndex = `${VY++}`
		); else if (Y.hidden) (yZ(Y), Y.element.style.zIndex = `${VY++}`);

		if (J) PY($, Z, q); else f6(Y, Z, q);
	}

	function f6($, Q, J) {
		if (!$.element) return;

		(
			$.element.style.translate = `${Q}px ${J}px`,
			$.x = Q,
			$.y = J
		);
	}

	function CQ($) {
		return G("div.chat-bubble", G("span", $.clan_name && G("b", m$($.clan_name)), $.username, {
			onclick() {
				FY($);
			}
		}));
	}

	function _Z($) {
		if (!$.element || $.hidden) return;

		($.element.style.opacity = "0", $.hidden = !0);
	}

	function yZ($) {
		if (!$.element || !$.hidden) return;

		($.element.style.opacity = "", $.hidden = !1);
	}

	var vZ = 1e4, gZ = 1000;

	function pZ() {
		let $ = performance.now() - vZ;

		for (let Q of M0.values()) {
			if (!Q.element || Q.hidden) continue;
			if (Q.lastSeen === void 0 || Q.lastSeen < $) _Z(Q);
		}
	}

	setInterval(pZ, gZ);

	var AY = !1;

	function TY() {
		if (AY) return;

		AY = !0;

		let $ = new _("Update required", G("div.version-mismatch", G("p", "The Wall was just updated and this tab is running an older version. Reload to keep going."), G("p.subtle", "Heads up: anything you've drawn but not submitted will be lost. If a reload doesn't fix it, clear your cache and reload again."), G("div.btn-container", G("button.btn", "Reload now", { onclick: () => location.reload() }))));

		$.lockLevel = 1;
	}

	async function IY($) {
		let Q = R1($);

		if (Q) throw new Error(Q);

		let J = await m.user.setup.$post({ json: { username: $ } });

		if (J.status != 200) {
			let Y = await J.text();

			throw new Error(Y);
		}

		(
			localStorage.setItem("auth-token", o0.token),
			location.reload()
		);
	}

	function l6() {
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
						await IY(Q);
					} catch(Y) {
						($.textContent = Y.message || "Something went wrong", J = !1);
					}

					X1();
				}
			}))
		)).onClose(() => {
			return !1;
		});
	}

	var o6 = G("p.warning"), N8 = "", n6 = !0, u6 = "";

	function wY() {
		N8 = "";
	}

	async function hY() {
		if (!u6) {
			let J = await (await m.auth.turnstile.$get()).json();

			if ((u6 = J.sitekey || "none", !J.required || !J.sitekey)) n6 = !1;
		}

		if (!n6) return;

		let $ = window.turnstile;

		if (!$) return alert("error: Turnstile API didn't load, can't show captcha");

		$.render("#captcha-container", {
			sitekey: u6,
			theme: x.a11y.darkTheme ? "dark" : "light",
			size: "flexible",
			callback(Q) {
				(o6.textContent = "", N8 = Q);
			}
		});
	}

	function EY() {
		if ((o6.textContent = "", n6 && !N8)) return (
			u6 = "",
			n6 = !0,
			hY(),
			o6.textContent = "You need to complete the captcha!",
			!0
		);
	}

	function F8($) {
		(
			new _("Log In", G(
				"div.login-modal",
				$,
				G("p", "Choose your login method"),
				G("div#captcha-container", { onmouseenter: j1, onmouseleave: E6 }),
				B5("discord", "Discord", "#5865F2", "#fff", {
					ariaLabel: "Authenticate with Discord",
					onclick() {
						if (EY()) return;

						d6("discord", "Discord");
					}
				}),
				B5("google", "Google", "#F1F3F4", "#000", {
					ariaLabel: "Authenticate with Google",
					onclick() {
						if (EY()) return;

						d6("google", "Google");
					}
				}),
				o6,
				Y0.devLogin === !0 && G("button.btn.dev-login", "Dev login (staff)", {
					ariaLabel: "Dev login",
					onclick() {
						d6("dev", "Dev");
					}
				}),
				G("div.btn-container", G("button.btn", "Cancel", { onclick: p }))
			)),
			setTimeout(hY, 100)
		);
	}

	function mY($) {
		if (!e5.test($)) return;

		F8(G("div.success", G("b", $), " has invited you to The Wall!"));
	}

	function NY($) {
		if (!$.is_banned) return;

		(
			BY(),
			new _("Oops!", G("div.modal.error-modal", G("p", "You have been banned!"), G("p.error", $.is_banned.reason || "<Reason not specified>"), G("p", "Expires: ", G("b", X6($.is_banned.until))))).onClose(() => !1)
		);
	}

	async function AQ() {
		let $ = B$();

		if (!$) return null;

		Z1.Authorization = $;

		let Q = await m.user.me.$get();

		if (Q.status != 200) return !1;

		let J = await Q.json();

		if (!J) return !1;

		return J;
	}

	async function OY() {
		let $ = await AQ();

		if ($) {
			if ((M.token = B$(), M.setUser($), $.is_banned)) return NY($);
			if ($.is_new) return l6();

			B8();

			return;
		}

		if ((x$(), $ == !1)) F8(G("p.warning", "Session expired, please log in again!"));
	}

	var o0 = { started: !1, status: "", token: "" };

	window.addEventListener("message", ($) => {
		if (!o0.started) return;
		if ($.origin != Y0.url.web) return;
		if ($.data.type == "auth_modal_state") (o0.status = $.data.status, o0.token = $.data.token);
	});

	function x$() {
		(
			Z1.Authorization = "",
			localStorage.removeItem("auth-token"),
			o0.token = "",
			M.token = null,
			M.user = null
		);
	}

	function SY() {
		(x$(), location.reload());
	}

	async function d6($, Q) {
		if (!N8) return alert("Missing turnstile token");

		q0();

		let J = await m.auth.login[":provider"].$post({ param: { provider: $ }, json: { turnstileToken: N8 } });

		if ((wY(), !J.ok)) return e("Captcha failed!", await J.text());

		let Y = await J.json(),
			Z = 485,
			q = 645,
			K = window.open(Y.redirectURL, void 0, `popup,width=${Z},height=${q},left=${Math.floor(screen.width / 2 - Z / 2)},top=${Math.floor(screen.height / 2 - q / 2)}`);

		if (!K) {
			e("Failed to open a pop-up window...", "Make sure you allowed us to open pop-up windows!");

			return;
		}

		(
			new _("Auth", G("div", "Authenticating...", G("p.notice.noicon", `A pop-up window should have been opened for you to complete authentication using ${Q}.`, { style: { maxWidth: "600px" } }))).onClose(() => !1),
			o0.started = !0,
			xZ(K)
		);
	}

	function xZ($) {
		let Q = setInterval(
			() => {
				if ($.closed) (clearInterval(Q), cZ());
			},
			500
		);
	}

	async function cZ() {
		if (!o0.status) {
			e("Authentication aborted");

			return;
		}

		if (o0.status != "200") return e("Authentication failed!", `Server responded with error code ${o0.status}`);

		localStorage.setItem("auth-token", o0.token);

		let $ = await AQ();

		if (!$) return (
			x$(),
			e("Authentication failed!", "Could not fetch the user after authenticating")
		);

		if ($.is_new) l6(); else (o0.started = !1, location.reload());
	}

	var T$ = 256,
		bZ = Math.max(f, L0),
		_Y = (() => {
			let $ = 0;

			while (Math.ceil(bZ / 2 ** $) > T$) $++;

			return $;
		})();

	var fZ = ($) => Math.ceil(Math.ceil(f / 2 ** $) / T$),
		lZ = ($) => Math.ceil(Math.ceil(L0 / 2 ** $) / T$);

	function TQ($) {
		if ($ <= 0) return _Y;

		return Math.min(_Y, Math.max(0, Math.round(-Math.log2($))));
	}

	function vY($) {
		let Q = $.zoom || 0.000001,
			J = Math.max(0, Math.floor(-$.x / Q)),
			Y = Math.max(0, Math.floor(-$.y / Q)),
			Z = Math.min(f, Math.ceil((-$.x + $.w) / Q)),
			q = Math.min(L0, Math.ceil((-$.y + $.h) / Q));

		return { x0: J, y0: Y, x1: Math.max(J, Z), y1: Math.max(Y, q) };
	}

	function t6($, Q) {
		let { x0: J, y0: Y, x1: Z, y1: q } = vY($),
			K = 2 ** Q,
			W = fZ(Q),
			F = lZ(Q),
			H = Math.max(0, J / K / T$ | 0),
			j = Math.max(0, Y / K / T$ | 0),
			X = Math.min(W - 1, (Z / K - 1) / T$ | 0),
			P = Math.min(F - 1, (q / K - 1) / T$ | 0),
			k = [];

		for (let z = H; z <= X; z++) for (let A = j; A <= P; A++) k.push([z, A]);

		return k;
	}

	var yY = 64;

	function uZ($) {
		let { x0: Q, y0: J, x1: Y, y1: Z } = vY($),
			q = Q / C0 | 0,
			K = (Y - 1) / C0 | 0,
			W = J / C0 | 0,
			F = (Z - 1) / C0 | 0,
			H = [];

		for (let P = q; P <= K; P++) for (let k = W; k <= F; k++) if (P >= 0 && k >= 0 && P < L8 && k < p0) H.push(P * p0 + k);

		if (H.length <= yY) return H;

		let j = (Q + Y) / 2 / C0, X = (J + Z) / 2 / C0;

		return H.map((P) => {
			let k = P / p0 | 0,
				z = P % p0,
				A = k + 0.5 - j,
				v = z + 0.5 - X;

			return [P, A * A + v * v];
		}).sort((P, k) => P[1] - k[1]).slice(0, yY).map((P) => P[0]);
	}

	function dZ() {
		let $ = globalThis.navigator?.connection;

		if (!$) return !1;

		return !!$.saveData || $.effectiveType === "2g" || $.effectiveType === "slow-2g" || $.effectiveType === "3g";
	}

	var oZ = 0.8;

	class IQ {
		hooks;
		mode = "overview";
		lastChunks = "";

		constructor($) {
			this.hooks = $;
		}

		update($) {
			let Q = $.zoom >= oZ ? "live" : "overview";

			if (Q !== this.mode) (this.mode = Q, this.hooks.setLayer(Q));

			if (this.mode === "overview") {
				if (this.lastChunks !== "") (this.hooks.setLiveChunks([]), this.lastChunks = "");

				let J = TQ($.zoom), Y = t6($, J);

				for (let [Z, q] of Y) this.hooks.drawTile(J, Z, q);

				if (!dZ() && J > 0) for (let [Z, q] of t6($, J - 1).slice(0, 16)) this.hooks.drawTile(J - 1, Z, q);
			} else {
				let J = uZ($), Y = J.join(",");

				if (Y !== this.lastChunks) (this.hooks.setLiveChunks(J), this.lastChunks = Y);
			}
		}
	}

	function nZ() {
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

	var xY = nZ(),
		gY = Math.min(300, Math.round(xY * 2)),
		W8 = xY,
		a6 = 16.7,
		EQ = performance.now(),
		pY = EQ;

	function cY($) {
		let Q = $ - EQ;

		if ((
			EQ = $,
			Q > 0 && Q < 1000 && document.visibilityState === "visible"
		)) {
			if ((a6 += (Q - a6) * 0.1, $ - pY > 1000)) {
				if ((pY = $, a6 > 22 && W8 > 8)) W8 = Math.max(8, Math.round(W8 * 0.7)); else if (a6 < 13 && W8 < gY) W8 = Math.min(gY, Math.round(W8 * 1.15) + 1);
			}
		}

		requestAnimationFrame(cY);
	}

	requestAnimationFrame(cY);

	function bY() {
		return W8 | 0;
	}

	var j8 = new Set(), wQ = -1, fY = null;

	function lY($) {
		fY = new Set($);
	}

	function uY() {
		(j8 = new Set(), wQ = -1);
	}

	function tZ($) {
		if ($.size != j8.size) return !0;

		for (let Q of $) if (!j8.has(Q)) return !0;
		for (let Q of j8) if (!$.has(Q)) return !0;

		return !1;
	}

	function dY() {
		if (!M.user || !W0) return;

		let $ = M.cursorX >= 0 && M.cursorY >= 0,
			Q = -1,
			J = -1;

		if ($) {
			let K = Math.min(M.cursorX, f - 1),
				W = Math.min(M.cursorY, L0 - 1);

			Q = W * f + K;

			let F = Math.floor(K / C0), H = Math.floor(W / C0);

			J = F * p0 + H;
		}

		let Y = fY ?? WY(), Z = tZ(Y), q = kY();

		if (wQ != Q || Z || q) (
			wQ = Q,
			j8 = Y,
			hQ(3, {
				cursorPos: Q,
				cursorChunk: J,
				subscribe: Z ? [...Y] : void 0,
				lookupUsers: q ?? void 0,
				cursorBudget: bY()
			})
		);
	}

	var SQ = Y0.url?.tileBase?.replace(/\/$/, ""),
		H8 = !!Y0.url?.ws && !!SQ,
		_Q = G("img.canvas-snapshot", { draggable: !1, decoding: "async" }),
		i6 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" });

	i6.style.opacity = "0";

	var N1 = G("div.canvas-snapshot-wrap", _Q, i6);

	if (!H8) N1.style.display = "none";

	var yQ = 400;

	_Q.style.transition = `opacity ${yQ}ms ease-out`;
	i6.style.transition = `opacity ${yQ}ms ease-out`;

	var s6 = _Q,
		O8 = i6,
		e6 = G("div.canvas-tile-grid");

	if (!H8) e6.style.display = "none";

	var X8 = null,
		$5 = "overview",
		BQ = 1e4,
		mQ = !1,
		oY = "",
		nY = null;

	async function r6() {
		if (!H8 || mQ || $5 !== "overview" || document.hidden) return;

		mQ = !0;

		try {
			let $ = await fetch(`${SQ}/snapshot.png`, { cache: "no-cache" });

			if (!$.ok) return;

			let Q = $.headers.get("last-modified") ?? "";

			if (Q && Q === oY) return;

			oY = Q;

			let J = await $.blob(), Y = URL.createObjectURL(J);

			O8.src = Y;

			try {
				await O8.decode();
			} catch {}

			(
				N1.appendChild(O8),
				O8.style.opacity = "1",
				await new Promise((q) => setTimeout(q, yQ + 60))
			);

			let Z = nY;

			if ((nY = Y, s6.style.opacity = "0", s6.src = "", Z)) URL.revokeObjectURL(Z);

			[s6, O8] = [O8, s6];
		} catch {} finally {
			mQ = !1;
		}
	}

	var c$ = new Map(),
		S8 = new Set(),
		h1 = new Map(),
		aZ = 8000;

	function sY($, Q, J) {
		return `${SQ}/tiles/${$}/${Q}/${J}.png?v=${Math.floor(Date.now() / BQ)}`;
	}

	function OQ($) {
		if (!H8) return;

		if ($5 === "overview") {
			if (c$.size) {
				for (let K of c$.values()) K.remove();

				(c$.clear(), S8.clear());
			}

			return;
		}

		let Q = TQ($.zoom),
			J = T$ * 2 ** Q,
			Y = t6($, Q),
			Z = new Set();

		for (let [K, W] of Y) {
			let F = `${Q}/${K}/${W}`;

			if ((Z.add(F), !c$.has(F))) {
				let H = document.createElement("img");

				(
					H.className = "canvas-tile",
					H.decoding = "async",
					H.draggable = !1,
					H.style.left = `${K * J}px`,
					H.style.top = `${W * J}px`,
					H.style.width = `${J}px`,
					H.style.height = `${J}px`,
					S8.add(F)
				);

				let j = setTimeout(
					() => {
						if (S8.delete(F)) m1();
					},
					aZ
				);

				h1.set(F, j);

				let X = () => {
					let P = h1.get(F);

					if (P !== void 0) (clearTimeout(P), h1.delete(F));

					S8.delete(F);
				};

				(
					H.onload = () => {
						(
							H.classList.add("loaded"),
							H.style.visibility = "",
							X(),
							m1()
						);
					},

					H.onerror = () => {
						(H.style.visibility = "hidden", X(), m1());
					},
					H.src = sY(Q, K, W),
					e6.appendChild(H),
					c$.set(F, H)
				);
			}
		}

		let q = !1;

		for (let [K, W] of c$) if (!Z.has(K)) {
			(W.remove(), c$.delete(K));

			let F = h1.get(K);

			if (F !== void 0) (clearTimeout(F), h1.delete(K));
			if (S8.delete(K)) q = !0;
		}

		if (q) m1();
	}

	function tY() {
		if (!H8 || $5 !== "live" || document.hidden) return;

		for (let [$, Q] of c$) {
			let [J, Y, Z] = $.split("/").map(Number);

			Q.src = sY(J, Y, Z);
		}
	}

	var NQ = 0.9, aY = 1.4;

	function sZ($) {
		if ($ <= NQ) return 1;
		if ($ >= aY) return 0;

		return 1 - ($ - NQ) / (aY - NQ);
	}

	function m1() {
		if (!X8) return;

		N1.style.opacity = S8.size > 0 ? "1" : String(sZ(X8.zoom));
	}

	var rZ = new IQ({
		async drawTile() {
			return !0;
		},

		setLiveChunks($) {
			lY($);
		},

		setLayer($) {
			if (($5 = $, $ === "overview")) {
				if ((r6(), X8)) OQ(X8);
			} else if (X8) OQ(X8);
		}
	});

	function rY() {}

	function iY($) {
		if (!H8) return;

		(X8 = $, rZ.update($), OQ($), m1());
	}

	if (H8) (
		r6(),
		setInterval(r6, BQ),
		setInterval(tY, BQ),
		document.addEventListener("visibilitychange", () => {
			if (!document.hidden) (r6(), tY());
		})
	);

	var vQ = new Set(), y8 = null, B1 = -1;

	async function iZ() {
		return (await (await m.cursor.data.$get()).json()).map((J) => ({ ...J, ...$q(J), unlocked: vQ.has(J.id) }));
	}

	async function Q5() {
		let Q = await (await m.cursor.inventory.$get()).json();

		vQ.clear();

		for (let J of Q.cursors) vQ.add(J);

		y8 = Q;
	}

	async function b$($) {
		let Q = await m.cursor.claimCursor.$post({ json: $ });

		if (Q.status != 200) return await Q.text();

		return (await Q5(), null);
	}

	function eZ($, Q, J) {
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

	function $q($) {
		let Q = $.unlock;

		if (!Q || Q.kind == "client") return { claimable: !1, tooltip: "You do not own this cursor!" };

		switch (Q.kind) {
			case "stat":
				{
					let J = y8.stats[Q.stat] ?? 0;

					return J >= Q.gte
						? { claimable: !0, tooltip: "Click to claim!" }
						: { claimable: !1, tooltip: eZ(Q.stat, J, Q.gte) };
				}

			case "purchase":
				return y8.coins >= Q.cost
					? { claimable: !0, tooltip: `Click to buy (${Q.cost} coins)` }
					: { claimable: !1, tooltip: `Costs ${Q.cost} coins` };

			case "code":
				return { claimable: !1, tooltip: "Unlocks with a secret code" };

			case "manual":
				return { claimable: !1, tooltip: "Awarded by moderators" };
		}
	}

	function Qq($) {
		let Q = G("div.item.box", {
			id: `item${$.id}`,
			async onclick() {
				if ($.unlocked) gQ($); else if ($.claimable) {
					if ($.unlock?.kind == "purchase") {
						if (!await r(`Are you sure you want to buy this cursor for ${$.unlock.cost} coins?`)) return;
					}

					let J = await b$({ cursorId: $.id });

					if (J) {
						e(J, "Could not claim the cursor");

						return;
					}

					_8();
				}
			},

			onmouseover: () => {
				I8($.id);
			},

			onmouseleave: () => {
				I8(B1);
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

		return (Q.append(G("img", { src: b0($.id), draggable: !1 })), Q);
	}

	function gQ($) {
		if ($.id == B1) return;

		B1 = $.id;

		let Q = u("#inv-confirm-buttons");

		if ((
			a0(".inventory .item.active").forEach((J) => J.classList.remove("active")),
			u(`#item${$.id}`).classList.add("active"),
			$.id == M.user?.cursor_id
		)) Q.style.display = "none"; else Q.style.display = "";
	}

	function Jq() {
		let $ = M.currentSprayCanSize(),
			Q = Math.floor($ / y5) || 1;

		new _("Coins", G("div.coin-modal", G("p.c", "You have ", ZJ(y8.coins), ` coin${A0(y8.coins)}`), G("p.notice", `You can exchange spray cans for coins! Every ${y5} paint is one coin.`), G("p.c", "Your current spray can contains ", G("b", $.toString()), " paint, ", "so you will receive ", G("b", Q.toString()), ` coin${A0($ == 0 ? 0 : Q)}.`), G("div.btn-container", G("button.btn", "Back", { onclick: _8 }), G("button.btn.primary", "Sell Spray Can", {
			async onclick() {
				if (M.localPaintIncrement != 0 || B0.length) {
					e("You cannot sell your current spray can while drawing! Please cancel or submit your local changes.");

					return;
				}

				if (Q == 0) {
					e("Empty spray can!");

					return;
				}

				if (!await r(`Sell your current spray can for ${A0(Q, "coin")}? The remainder will not be lost.`)) return _8();

				q0();

				let Y = await m.cursor.buyCoins.$post();

				if (!Y.ok) {
					T0(Y);

					return;
				}

				_8();
			}
		}))));
	}

	async function _8() {
		if (!M.user) return;

		(q0(), await Q5());

		let $ = await iZ(),
			Q = $.toSorted((J, Y) => Y.unlocked - J.unlocked || Y.tier - J.tier || J.name.localeCompare(Y.name));

		(
			new _("User > Inventory", G("div.inventory.nopad", G("div.scroll.pad", G("p.notice", "Click on a cursor to select it! It will be shown to all users."), G("br"), G("div.items", Q.map(Qq)), G("p", "More cursors coming soon!")), G("div.box.outset.confirm-bar", G("button.btn", "Back", { onclick: () => p() }), G("button.btn", A0(Math.floor(y8.coins), "coin"), { onclick: Jq }), G(
				"div#inv-confirm-buttons",
				{ style: { display: "none" } },
				G("button.btn", "Cancel", {
					onclick() {
						gQ($[M.user.cursor_id]);
					}
				}),
				G("button.btn.primary", "Change", {
					async onclick() {
						(q0(), await M1({ cursorId: B1 }), p(!0));
					}
				})
			)))).onClose(() => {
				(B1 = -1, I8(M.user.cursor_id));
			}),

			requestAnimationFrame(() => {
				gQ($[M.user.cursor_id]);
			})
		);
	}

	window.freeCursor = async ($) => {
		let Q = await b$({ code: $ });

		if (Q) return (console.warn(`freeCursor: ${Q}`), !1);

		return (console.log("Unlocked! Open the inventory to equip it."), !0);

		let J = "You like looking for secrets, don't you? On an unrelated note, consider checking out the amazing people who made this site: https://yui.dev and https://github.com/brennenawana";
	};

	var pQ = new Map(), j$ = ($, Q) => pQ.set($, Q);

	j$(0, ($) => {
		if (typeof $.paintRemaining == "number") (
			M.nextRefill = $.nextRefillAt || 0,
			M.setPaintRemaining($.paintRemaining),
			r0()
		);
	});

	j$(8, ($) => {
		if ((F$.receive($), $.kind === "cursor_unlock")) Q5();
	});

	j$(9, () => {});
	j$(10, () => {});

	j$(3, async ($) => {
		if ($.users) DY($.users);
		if ((MY($.cursorOverflow ?? 0), !$.cursors)) return;

		let Q = $.cursors,
			J = Q instanceof Uint8Array
				? Q
				: Q.buffer instanceof Uint8Array ? Q.buffer : new Uint8Array(Q.buffer ?? Q),
			Y = new DataView(J.buffer, J.byteOffset, J.byteLength);

		for (let Z = 0; Z + 8 <= J.length; Z += 8) {
			let q = Y.getUint32(Z, !0),
				K = Y.getUint32(Z + 4, !0);

			if ((CY(K, q, !0), W$ && Z % 4000 == 0)) await r$();
		}
	});

	j$(5, ($) => LY($.id));

	j$(2, ($) => {
		(
			M.connectionId = $.id,
			$.users.forEach(DQ),
			M.openAt = $.openAt ?? 0,
			M.clockOffset = $.now ? $.now - Date.now() : 0,
			eY()
		);
	});

	j$(6, ($) => {
		if ((
			$3($.id, $.message, $.pos, $.username, $.clanName, $.isGlobal, $.userId),
			$.nonce
		)) return;

		if (!M0.has($.id)) {
			LQ($.id);

			return;
		}

		J3(M0.get($.id), $.message);
	});

	j$(11, ($) => {
		Q3($.userId);
	});

	j$(7, async ($) => {
		let Q = 0;

		if ($.pixels) {
			let J = $.pixels,
				Y = J instanceof Uint8Array
					? J
					: J.buffer instanceof Uint8Array ? J.buffer : new Uint8Array(J.buffer ?? J),
				Z = new DataView(Y.buffer, Y.byteOffset, Y.byteLength);

			for (let q = 0; q + 5 <= Y.byteLength; q += 5) if ((
				h8(Z.getUint32(q, !0), Z.getUint8(q + 4)),
				Q++,
				W$ && Q % 500 == 0
			)) await r$();
		}

		if (Q) rY();
	});

	function Y3() {
		let $ = G("div.list.box.outset", G("div.item.box.online-modal", G("b", M.user?.username || "anonymous", " (you!)")), G("div.item.box.online-modal.online-modal-loading", G("i", "Loading online users…")), {
				style: {
					maxHeight: "600px",
					overflowY: "auto",
					justifyContent: "unset"
				}
			}),
			Q = new _("Online Users", G("div.leaderboard-modal", G("p.online-modal-count", G("b#online-modal-count", H0(M.onlinePlayers || 1)), " players online"), G("p.online-modal-viewers", G("b#online-modal-viewers", H0(M.onlineViewers || 0)), " watching"), $));

		q3().then((J) => {
			if (!Q.open) return;

			(
				Yq($, J.users ?? [], J.total ?? 0),
				Z3(J.viewers ?? M.onlineViewers)
			);
		}).catch(() => {
			if (!Q.open) return;

			let J = $.querySelector(".online-modal-loading");

			if (J) J.textContent = "Couldn't load the user list.";
		});
	}

	function Yq($, Q, J) {
		let Y = M.user?.username;

		if (Y) Q = Q.filter((j) => j.username !== Y);

		let Z = (j) => {
				let X = M0.get(j.id);

				return !!X && !X.partial && !X.hidden;
			},
			q = [...Q].sort((j, X) => {
				let P = Z(j) ? 0 : 1, k = Z(X) ? 0 : 1;

				if (P !== k) return P - k;

				return j.username.localeCompare(X.username);
			}),
			K = G("div.item.box.online-modal", G("b", M.user?.username || "anonymous", " (you!)")),
			W = q.map((j) => G(
				"div.item.box.online-modal.online-modal-row.tooltip" + (Z(j) ? ".online-modal-visible" : ""),
				{
					onclick() {
						(p(), y0({ connId: j.id, username: j.username }));
					}
				},
				G("b.tooltip", j.username, { dataset: { tooltip: "Click to jump to the user!" } })
			));

		$.replaceChildren(K, ...W);

		let F = 1 + W.length, H = Math.max(0, J - F);

		if (H > 0) $.append(G("div.item.box.online-modal.online-modal-more", G("i", `+${H0(H)} more online`)));
	}

	function G3($, Q) {
		let J = u("#online-modal-count");

		if (J) J.textContent = H0($ || 1);
		if (Q !== void 0) Z3(Q);
	}

	function Z3($) {
		let Q = u("#online-modal-viewers");

		if (Q) Q.textContent = H0($ || 0);
	}

	var K3 = 0;

	async function xQ() {
		if ((clearTimeout(K3), !W0)) return;

		K3 = setTimeout(xQ, FJ);

		let $ = performance.now(),
			Q = await f$(0, {}, KJ),
			J = Q.connectedUsers ?? M.onlinePlayers,
			Y = Q.viewers ?? M.onlineViewers;

		if ((
			M.onlinePlayers = J,
			M.onlineViewers = Y,
			M.debug.ping = performance.now() - $,
			M.activeTool == 3
		)) {
			let Z = u("#online-player-counter");

			if (Z) Z.textContent = H0(J);
		}

		(G3(J, Y), W3(J, Y), v8());
	}

	function F3() {
		(setInterval(dY, Y0.canvas.syncInterval), O1());
	}

	var Gq = (() => {
		let $ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;

		return (Q) => $.call(Q);
	})();

	function l$($) {
		return Gq($) === "Uint8Array";
	}

	function X4($) {
		return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && ($[Symbol.toStringTag] === "ArrayBuffer" || $[Symbol.toStringTag] === "SharedArrayBuffer");
	}

	function x8($) {
		return $ instanceof RegExp || Object.prototype.toString.call($) === "[object RegExp]";
	}

	function H4($) {
		return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && $[Symbol.toStringTag] === "Map";
	}

	function c8($) {
		return $ instanceof Date || Object.prototype.toString.call($) === "[object Date]";
	}

	function c0($, Q) {
		return JSON.stringify($, (J, Y) => {
			if (typeof Y === "bigint") return { $numberLong: `${Y}` }; else if (H4(Y)) return Object.fromEntries(Y);

			return Y;
		});
	}

	function Zq($) {
		if ($ != null && typeof $ === "object" && "stylize" in $ && typeof $.stylize === "function") return $.stylize;
	}

	var M8 = 7,
		l8 = Symbol.for("@@mdb.bson.version"),
		v1 = 2147483647,
		g1 = -2147483648,
		E3 = Math.pow(2, 63) - 1,
		w3 = -Math.pow(2, 63),
		h3 = Math.pow(2, 53),
		m3 = -Math.pow(2, 53),
		P4 = 1,
		N3 = 2,
		V4 = 3,
		B3 = 4,
		M4 = 5,
		qq = 6,
		O3 = 7,
		S3 = 8,
		_3 = 9,
		R4 = 10,
		G5 = 11,
		Kq = 12,
		z4 = 13,
		y3 = 14,
		v3 = 15,
		y1 = 16,
		g3 = 17,
		U4 = 18,
		p3 = 19,
		x3 = 255,
		c3 = 127,
		Fq = 0,
		k4 = 4,
		Wq = Object.freeze({
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

	class L extends Error {
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

	class R8 extends L {
		get name() {
			return "BSONVersionError";
		}

		constructor() {
			super(`Unsupported BSON version, bson types must be from bson ${M8}.x.x`);
		}
	}

	class Z5 extends L {
		get name() {
			return "BSONRuntimeError";
		}

		constructor($) {
			super($);
		}
	}

	class X$ extends L {
		get name() {
			return "BSONOffsetError";
		}

		offset;

		constructor($, Q, J) {
			super(`${$}. offset: ${Q}`, J);
			this.offset = Q;
		}
	}

	var j3, X3;

	function b3($, Q, J, Y) {
		if (Y) {
			j3 ??= new TextDecoder("utf8", { fatal: !0 });

			try {
				return j3.decode($.subarray(Q, J));
			} catch(Z) {
				throw new L("Invalid UTF-8 string in BSON document", { cause: Z });
			}
		}

		return (
			X3 ??= new TextDecoder("utf8", { fatal: !1 }),
			X3.decode($.subarray(Q, J))
		);
	}

	function f3($, Q, J) {
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

	function jq($, Q, J) {
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

	function Xq($) {
		return t0.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
	}

	function Hq($) {
		return crypto.getRandomValues(t0.allocate($));
	}

	var Pq = (() => {
			let { crypto: $ } = globalThis;

			if ($ != null && typeof $.getRandomValues === "function") return Hq; else return Xq;
		})(),
		t0 = {
			isUint8Array: l$,
			toLocalBufferType($) {
				if (Buffer.isBuffer($)) return $;
				if (ArrayBuffer.isView($)) return Buffer.from($.buffer, $.byteOffset, $.byteLength);

				let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

				if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return Buffer.from($);

				throw new L("Cannot create Buffer from the passed potentialBuffer.");
			},

			allocate($) {
				return Buffer.alloc($);
			},

			allocateUnsafe($) {
				return Buffer.allocUnsafe($);
			},

			compare($, Q) {
				return t0.toLocalBufferType($).compare(Q);
			},

			concat($) {
				return Buffer.concat($);
			},

			copy($, Q, J, Y, Z) {
				return t0.toLocalBufferType($).copy(Q, J ?? 0, Y ?? 0, Z ?? $.length);
			},

			equals($, Q) {
				return t0.toLocalBufferType($).equals(Q);
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
				return t0.toLocalBufferType($).toString("base64");
			},

			fromISO88591($) {
				return Buffer.from($, "binary");
			},

			toISO88591($) {
				return t0.toLocalBufferType($).toString("binary");
			},

			fromHex($) {
				return Buffer.from($, "hex");
			},

			toHex($) {
				return t0.toLocalBufferType($).toString("hex");
			},

			toUTF8($, Q, J, Y) {
				let Z = J - Q <= 20 ? f3($, Q, J) : null;

				if (Z != null) return Z;

				let q = t0.toLocalBufferType($).toString("utf8", Q, J);

				if (Y) {
					for (let K = 0; K < q.length; K++) if (q.charCodeAt(K) === 65533) {
						b3($, Q, J, !0);

						break;
					}
				}

				return q;
			},

			utf8ByteLength($) {
				return Buffer.byteLength($, "utf8");
			},

			encodeUTF8Into($, Q, J) {
				let Y = jq($, Q, J);

				if (Y != null) return Y;

				return t0.toLocalBufferType($).write(Q, J, void 0, "utf8");
			},
			randomBytes: Pq,
			swap32($) {
				return t0.toLocalBufferType($).swap32();
			}
		};

	function Vq() {
		let { navigator: $ } = globalThis;

		return typeof $ === "object" && $.product === "ReactNative";
	}

	function Mq($) {
		if ($ < 0) throw new RangeError(`The argument 'byteLength' is invalid. Received ${$}`);

		return V8.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
	}

	var Rq = (() => {
			let { crypto: $ } = globalThis;

			if ($ != null && typeof $.getRandomValues === "function") return (Q) => {
				return $.getRandomValues(V8.allocate(Q));
			}; else {
				if (Vq()) {
					let { console: Q } = globalThis;

					Q?.warn?.("BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.");
				}

				return Mq;
			}
		})(),
		H3 = /(\d|[a-f])/i,
		V8 = {
			isUint8Array: l$,
			toLocalBufferType($) {
				let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

				if (Q === "Uint8Array") return $;
				if (ArrayBuffer.isView($)) return new Uint8Array($.buffer.slice($.byteOffset, $.byteOffset + $.byteLength));
				if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return new Uint8Array($);

				throw new L("Cannot make a Uint8Array from passed potentialBuffer.");
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

					if (!H3.test(Z)) break;
					if (!H3.test(q)) break;

					let K = Number.parseInt(`${Z}${q}`, 16);

					J.push(K);
				}

				return Uint8Array.from(J);
			},

			toHex($) {
				return Array.from($, (Q) => Q.toString(16).padStart(2, "0")).join("");
			},

			toUTF8($, Q, J, Y) {
				let Z = J - Q <= 20 ? f3($, Q, J) : null;

				if (Z != null) return Z;

				return b3($, Q, J, Y);
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
		zq = typeof Buffer === "function" && Buffer.prototype?._isBuffer !== !0,
		U = zq ? t0 : V8,
		D4 = Symbol.for("@@mdb.bson.type");

	class v0 {
		get [D4]() {
			return this._bsontype;
		}

		get [l8]() {
			return M8;
		}

		[Symbol.for("nodejs.util.inspect.custom")]($, Q, J) {
			return this.inspect($, Q, J);
		}
	}

	var b8 = new Float64Array(1),
		i = new Uint8Array(b8.buffer, 0, 8);

	b8[0] = -1;

	var cQ = i[7] === 0,
		b = {
			isBigEndian: cQ,
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

			getFloat64LE: cQ
				? ($, Q) => {
					return (
						i[7] = $[Q],
						i[6] = $[Q + 1],
						i[5] = $[Q + 2],
						i[4] = $[Q + 3],
						i[3] = $[Q + 4],
						i[2] = $[Q + 5],
						i[1] = $[Q + 6],
						i[0] = $[Q + 7],
						b8[0]
					);
				}
				: ($, Q) => {
					return (
						i[0] = $[Q],
						i[1] = $[Q + 1],
						i[2] = $[Q + 2],
						i[3] = $[Q + 3],
						i[4] = $[Q + 4],
						i[5] = $[Q + 5],
						i[6] = $[Q + 6],
						i[7] = $[Q + 7],
						b8[0]
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

			setFloat64LE: cQ
				? ($, Q, J) => {
					return (
						b8[0] = J,
						$[Q] = i[7],
						$[Q + 1] = i[6],
						$[Q + 2] = i[5],
						$[Q + 3] = i[4],
						$[Q + 4] = i[3],
						$[Q + 5] = i[2],
						$[Q + 6] = i[1],
						$[Q + 7] = i[0],
						8
					);
				}
				: ($, Q, J) => {
					return (
						b8[0] = J,
						$[Q] = i[0],
						$[Q + 1] = i[1],
						$[Q + 2] = i[2],
						$[Q + 3] = i[3],
						$[Q + 4] = i[4],
						$[Q + 5] = i[5],
						$[Q + 6] = i[6],
						$[Q + 7] = i[7],
						8
					);
				}
		};

	class o extends v0 {
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

			if ($ != null && typeof $ === "string" && !ArrayBuffer.isView($) && !X4($) && !Array.isArray($)) throw new L("Binary can only be constructed from Uint8Array or number[]");

			if ((
				this.sub_type = Q ?? o.BSON_BINARY_SUBTYPE_DEFAULT,
				$ == null
			)) (this.buffer = U.allocate(o.BUFFER_SIZE), this.position = 0); else (
				this.buffer = Array.isArray($) ? U.fromNumberArray($) : U.toLocalBufferType($),
				this.position = this.buffer.byteLength
			);
		}

		put($) {
			if (typeof $ === "string" && $.length !== 1) throw new L("only accepts single character String"); else if (typeof $ !== "number" && $.length !== 1) throw new L("only accepts single character Uint8Array or Array");

			let Q;

			if (typeof $ === "string") Q = $.charCodeAt(0); else if (typeof $ === "number") Q = $; else Q = $[0];
			if (Q < 0 || Q > 255) throw new L("only accepts number in a valid unsigned byte range 0-255");

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
			); else if (typeof $ === "string") throw new L("input cannot be string");
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
			if (($ = $ || {}, this.sub_type === o.SUBTYPE_VECTOR)) I$(this);

			let Q = U.toBase64(this.buffer),
				J = Number(this.sub_type).toString(16);

			if ($.legacy) return { $binary: Q, $type: J.length === 1 ? "0" + J : J };

			return {
				$binary: { base64: Q, subType: J.length === 1 ? "0" + J : J }
			};
		}

		toUUID() {
			if (this.sub_type === o.SUBTYPE_UUID) return new w0(this.buffer.subarray(0, this.position));

			throw new L(`Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${o.SUBTYPE_UUID}" is currently supported.`);
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
			} else if ("$uuid" in $) (Y = 4, J = w0.bytesFromString($.$uuid));

			if (!J) throw new L(`Unexpected Binary Extended JSON format ${JSON.stringify($)}`);

			return Y === k4 ? new w0(J) : new o(J, Y);
		}

		inspect($, Q, J) {
			J ??= c0;

			let Y = U.toBase64(this.buffer.subarray(0, this.position)),
				Z = J(Y, Q),
				q = J(this.sub_type, Q);

			return `Binary.createFromBase64(${Z}, ${q})`;
		}

		toInt8Array() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new L("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.Int8) throw new L("Binary datatype field is not Int8");

			return (
				I$(this),
				new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
			);
		}

		toFloat32Array() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new L("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.Float32) throw new L("Binary datatype field is not Float32");

			I$(this);

			let $ = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));

			if (b.isBigEndian) U.swap32($);

			return new Float32Array($.buffer);
		}

		toPackedBits() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new L("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new L("Binary datatype field is not packed bit");

			return (
				I$(this),
				new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
			);
		}

		toBits() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new L("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new L("Binary datatype field is not packed bit");

			I$(this);

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

			return (I$(Y), Y);
		}

		static fromFloat32Array($) {
			let Q = U.allocate($.byteLength + 2);

			(Q[0] = o.VECTOR_TYPE.Float32, Q[1] = 0);

			let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

			if ((Q.set(J, 2), b.isBigEndian)) U.swap32(new Uint8Array(Q.buffer, 2));

			let Y = new this(Q, this.SUBTYPE_VECTOR);

			return (I$(Y), Y);
		}

		static fromPackedBits($, Q = 0) {
			let J = U.allocate($.byteLength + 2);

			(J[0] = o.VECTOR_TYPE.PackedBit, J[1] = Q, J.set($, 2));

			let Y = new this(J, this.SUBTYPE_VECTOR);

			return (I$(Y), Y);
		}

		static fromBits($) {
			let Q = $.length + 7 >>> 3,
				J = new Uint8Array(Q + 2);

			J[0] = o.VECTOR_TYPE.PackedBit;

			let Y = $.length % 8;

			J[1] = Y === 0 ? 0 : 8 - Y;

			for (let Z = 0; Z < $.length; Z++) {
				let q = Z >>> 3, K = $[Z];

				if (K !== 0 && K !== 1) throw new L(`Invalid bit value at ${Z}: must be 0 or 1, found ${$[Z]}`);
				if (K === 0) continue;

				let W = 7 - Z % 8;

				J[q + 2] |= K << W;
			}

			return new this(J, o.SUBTYPE_VECTOR);
		}
	}

	function I$($) {
		if ($.sub_type !== o.SUBTYPE_VECTOR) return;

		let Q = $.position,
			J = $.buffer[0],
			Y = $.buffer[1];

		if ((J === o.VECTOR_TYPE.Float32 || J === o.VECTOR_TYPE.Int8) && Y !== 0) throw new L("Invalid Vector: padding must be zero for int8 and float32 vectors");

		if (J === o.VECTOR_TYPE.Float32) {
			if (Q !== 0 && Q - 2 !== 0 && (Q - 2) % 4 !== 0) throw new L("Invalid Vector: Float32 vector must contain a multiple of 4 bytes");
		}

		if (J === o.VECTOR_TYPE.PackedBit && Y !== 0 && Q === 2) throw new L("Invalid Vector: padding must be zero for packed bit vectors that are empty");
		if (J === o.VECTOR_TYPE.PackedBit && Y > 7) throw new L(`Invalid Vector: padding must be a value between 0 and 7. found: ${Y}`);
	}

	var bQ = 16,
		Uq = /^[0-9A-F]{32}$/i,
		kq = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;

	class w0 extends o {
		constructor($) {
			let Q;

			if ($ == null) Q = w0.generate(); else if ($ instanceof w0) Q = U.toLocalBufferType(new Uint8Array($.buffer)); else if (ArrayBuffer.isView($) && $.byteLength === bQ) Q = U.toLocalBufferType($); else if (typeof $ === "string") Q = w0.bytesFromString($); else throw new L("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");

			super(Q, k4);
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
			if ($ instanceof w0) return U.equals($.id, this.id);

			try {
				return U.equals(new w0($).id, this.id);
			} catch {
				return !1;
			}
		}

		toBinary() {
			return new o(this.id, o.SUBTYPE_UUID);
		}

		static generate() {
			let $ = U.randomBytes(bQ);

			return ($[6] = $[6] & 15 | 64, $[8] = $[8] & 63 | 128, $);
		}

		static isValid($) {
			if (!$) return !1;
			if (typeof $ === "string") return w0.isValidUUIDString($);
			if (l$($)) return $.byteLength === bQ;

			return $._bsontype === "Binary" && $.sub_type === this.SUBTYPE_UUID && $.buffer.byteLength === 16;
		}

		static createFromHexString($) {
			let Q = w0.bytesFromString($);

			return new w0(Q);
		}

		static createFromBase64($) {
			return new w0(U.fromBase64($));
		}

		static bytesFromString($) {
			if (!w0.isValidUUIDString($)) throw new L("UUID string representation must be 32 hex digits or canonical hyphenated representation");

			return U.fromHex($.replace(/-/g, ""));
		}

		static isValidUUIDString($) {
			return Uq.test($) || kq.test($);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new UUID(${J(this.toHexString(), Q)})`);
		}
	}

	class d$ extends v0 {
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

	function l3($) {
		return $ != null && typeof $ === "object" && "$id" in $ && $.$id != null && "$ref" in $ && typeof $.$ref === "string" && (!("$db" in $) || ("$db" in $) && typeof $.$db === "string");
	}

	class w$ extends v0 {
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
				new w$($.$ref, $.$id, $.$db, Q)
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

	function u3($) {
		if ($ === "") return $;

		let Q = 0, J = $[Q] === "-", Y = $[Q] === "+";

		if (Y || J) Q += 1;

		let Z = !1;

		for (; Q < $.length && $[Q] === "0"; ++Q) Z = !0;

		if (!Z) return Y ? $.slice(1) : $;

		return `${J ? "-" : ""}${$.length === Q ? "0" : $.slice(Q)}`;
	}

	function Dq($, Q) {
		Q = Q ?? 10;

		let J = ("0123456789abcdefghijklmnopqrstuvwxyz").slice(0, Q);

		return new RegExp(`[^-+${J}]`, "i").test($) ? !1 : $;
	}

	var n0 = void 0;

	try {
		n0 = new WebAssembly.Instance(
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

	var P3 = 65536,
		Lq = 16777216,
		f8 = P3 * P3,
		d3 = f8 * f8,
		V3 = d3 / 2,
		M3 = {},
		R3 = {},
		Cq = 20,
		Aq = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;

	class V extends v0 {
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

		static TWO_PWR_24 = V.fromInt(Lq);
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
					if ((Y = R3[$], Y)) return Y;
				}

				if ((J = V.fromBits($, ($ | 0) < 0 ? -1 : 0, !0), Z)) R3[$] = J;

				return J;
			} else {
				if (($ |= 0, Z = -128 <= $ && $ < 128)) {
					if ((Y = M3[$], Y)) return Y;
				}

				if ((J = V.fromBits($, $ < 0 ? -1 : 0, !1), Z)) M3[$] = J;

				return J;
			}
		}

		static fromNumber($, Q) {
			if (isNaN($)) return Q ? V.UZERO : V.ZERO;

			if (Q) {
				if ($ < 0) return V.UZERO;
				if ($ >= d3) return V.MAX_UNSIGNED_VALUE;
			} else {
				if ($ <= -V3) return V.MIN_VALUE;
				if ($ + 1 >= V3) return V.MAX_VALUE;
			}

			if ($ < 0) return V.fromNumber(-$, Q).neg();

			return V.fromBits($ % f8 | 0, $ / f8 | 0, Q);
		}

		static fromBigInt($, Q) {
			let J = 0xffffffffn, Y = 32n;

			return new V(Number($ & J), Number($ >> Y & J), Q);
		}

		static _fromString($, Q, J) {
			if ($.length === 0) throw new L("empty string");
			if (J < 2 || 36 < J) throw new L("radix");

			let Y;

			if ((Y = $.indexOf("-")) > 0) throw new L("interior hyphen"); else if (Y === 0) return V._fromString($.substring(1), Q, J).neg();

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
			if ((J ??= 10, $.trim() !== $)) throw new L(`Input: '${$}' contains leading and/or trailing whitespace`);
			if (!Dq($, J)) throw new L(`Input: '${$}' contains invalid characters for radix: ${J}`);

			let Z = u3($), q = V._fromString(Z, Y, J);

			if (q.toString(J).toLowerCase() !== Z.toLowerCase()) throw new L(`Input: ${$} is not representable as ${q.unsigned ? "an unsigned" : "a signed"} 64-bit Long ${J != null ? `with radix: ${J}` : ""}`);

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
			if ($.isZero()) throw new L("division by zero");

			if (n0) {
				if (!this.unsigned && this.high === -2147483648 && $.low === -1 && $.high === -1) return this;

				let Z = (this.unsigned ? n0.div_u : n0.div_s)(this.low, this.high, $.low, $.high);

				return V.fromBits(Z, n0.get_high(), this.unsigned);
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

			if (n0) {
				let Q = (this.unsigned ? n0.rem_u : n0.rem_s)(this.low, this.high, $.low, $.high);

				return V.fromBits(Q, n0.get_high(), this.unsigned);
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

			if (n0) {
				let k = n0.mul(this.low, this.high, $.low, $.high);

				return V.fromBits(k, n0.get_high(), this.unsigned);
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
			if (this.unsigned) return (this.high >>> 0) * f8 + (this.low >>> 0);

			return this.high * f8 + (this.low >>> 0);
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
			if (($ = $ || 10, $ < 2 || 36 < $)) throw new L("radix");
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

			if ($.$numberLong.length > Cq) throw new L("$numberLong string is too long");
			if (!Aq.test($.$numberLong)) throw new L(`$numberLong string "${$.$numberLong}" is in an invalid format`);

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

	var Tq = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
		Iq = /^(\+|-)?(Infinity|inf)$/i,
		Eq = /^(\+|-)?NaN$/i,
		g8 = 6111,
		S1 = -6176,
		z3 = 6176,
		U3 = 34,
		fQ = U.fromNumberArray([124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		k3 = U.fromNumberArray([248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		D3 = U.fromNumberArray([120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		wq = /^([-+])?(\d+)?$/,
		hq = 31,
		L3 = 16383,
		mq = 30,
		Nq = 31;

	function C3($) {
		return !isNaN(parseInt($, 10));
	}

	function Bq($) {
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

	function Oq($, Q) {
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

	function Sq($, Q) {
		let J = $.high >>> 0, Y = Q.high >>> 0;

		if (J < Y) return !0; else if (J === Y) {
			let Z = $.low >>> 0, q = Q.low >>> 0;

			if (Z < q) return !0;
		}

		return !1;
	}

	function e0($, Q) {
		throw new L(`"${$}" is not a valid Decimal128 string - ${Q}`);
	}

	class O0 extends v0 {
		get _bsontype() {
			return "Decimal128";
		}

		bytes;

		constructor($) {
			super();

			if (typeof $ === "string") this.bytes = O0.fromString($).bytes; else if ($ instanceof Uint8Array || l$($)) {
				if ($.byteLength !== 16) throw new L("Decimal128 must take a Buffer of 16 bytes");

				this.bytes = $;
			} else throw new L("Decimal128 must take a Buffer or string");
		}

		static fromString($) {
			return O0._fromString($, { allowRounding: !1 });
		}

		static fromStringWithRounding($) {
			return O0._fromString($, { allowRounding: !0 });
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
				R = 0,
				D = 0;

			if ($.length >= 7000) throw new L("" + $ + " not a valid Decimal128 string");

			let y = $.match(Tq),
				w = $.match(Iq),
				h = $.match(Eq);

			if (!y && !w && !h || $.length === 0) throw new L("" + $ + " not a valid Decimal128 string");

			if (y) {
				let I = y[2], S = y[4], n = y[5], J0 = y[6];

				if (S && J0 === void 0) e0($, "missing exponent power");
				if (S && I === void 0) e0($, "missing exponent base");
				if (S === void 0 && (n || J0)) e0($, "missing e before exponent");
			}

			if ($[D] === "+" || $[D] === "-") (Y = !0, J = $[D++] === "-");

			if (!C3($[D]) && $[D] !== ".") {
				if ($[D] === "i" || $[D] === "I") return new O0(J ? k3 : D3); else if ($[D] === "N") return new O0(fQ);
			}

			while (C3($[D]) || $[D] === ".") {
				if ($[D] === ".") {
					if (Z) e0($, "contains multiple periods");

					(Z = !0, D = D + 1);

					continue;
				}

				if (P < U3) {
					if ($[D] !== "0" || q) {
						if (!q) j = W;

						(q = !0, X[k++] = parseInt($[D], 10), P = P + 1);
					}
				}

				if (q) F = F + 1;
				if (Z) H = H + 1;

				(W = W + 1, D = D + 1);
			}

			if (Z && !W) throw new L("" + $ + " not a valid Decimal128 string");

			if ($[D] === "e" || $[D] === "E") {
				let I = $.substr(++D).match(wq);

				if (!I || !I[2]) return new O0(fQ);

				(A = parseInt(I[0], 10), D = D + I[0].length);
			}

			if ($[D]) return new O0(fQ);
			if (!P) (X[0] = 0, F = 1, P = 1, K = 0); else if ((z = P - 1, K = F, K !== 1)) while ($[j + K - 1 + Number(Y) + Number(Z)] === "0") K = K - 1;
			if (A <= H && H > A + 16384) A = S1; else A = A - H;

			while (A > g8) {
				if ((z = z + 1, z >= U3)) {
					if (K === 0) {
						A = g8;

						break;
					}

					e0($, "overflow");
				}

				A = A - 1;
			}

			if (Q.allowRounding) {
				while (A < S1 || P < F) {
					if (z === 0 && K < P) {
						(A = S1, K = 0);

						break;
					}

					if (P < F) F = F - 1; else z = z - 1;

					if (A < g8) A = A + 1; else {
						if (X.join("").match(/^0+$/)) {
							A = g8;

							break;
						}

						e0($, "overflow");
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

							for (let J0 = j + z + 2; J0 < I; J0++) if (parseInt($[J0], 10)) {
								n = 1;

								break;
							}
						}
					}

					if (n) {
						let J0 = z;

						for (; J0 >= 0; J0--) if (++X[J0] > 9) {
							if ((X[J0] = 0, J0 === 0)) if (A < g8) (A = A + 1, X[J0] = 1); else return new O0(J ? k3 : D3);
						} else break;
					}
				}
			} else {
				while (A < S1 || P < F) {
					if (z === 0) {
						if (K === 0) {
							A = S1;

							break;
						}

						e0($, "exponent underflow");
					}

					if (P < F) {
						if ($[F - 1 + Number(Y) + Number(Z)] !== "0" && K !== 0) e0($, "inexact rounding");

						F = F - 1;
					} else {
						if (X[z] !== 0) e0($, "inexact rounding");

						z = z - 1;
					}

					if (A < g8) A = A + 1; else e0($, "overflow");
				}

				if (z + 1 < K) {
					if (Z) j = j + 1;
					if (Y) j = j + 1;
					if (parseInt($[j + z + 1], 10) !== 0) e0($, "inexact rounding");
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

			let T = Oq(v, V.fromString("100000000000000000"));

			if ((T.low = T.low.add(O), Sq(T.low, O))) T.high = T.high.add(V.fromNumber(1));

			R = A + z3;

			let B = { low: V.fromNumber(0), high: V.fromNumber(0) };

			if (T.high.shiftRightUnsigned(49).and(V.fromNumber(1)).equals(V.fromNumber(1))) (
				B.high = B.high.or(V.fromNumber(3).shiftLeft(61)),
				B.high = B.high.or(V.fromNumber(R).and(V.fromNumber(16383).shiftLeft(47))),
				B.high = B.high.or(T.high.and(V.fromNumber(140737488355327)))
			); else (
				B.high = B.high.or(V.fromNumber(R & 16383).shiftLeft(49)),
				B.high = B.high.or(T.high.and(V.fromNumber(562949953421311)))
			);

			if ((B.low = T.low, J)) B.high = B.high.or(V.fromString("9223372036854775808"));

			let N = U.allocateUnsafe(16);

			return (
				D = 0,
				N[D++] = B.low.low & 255,
				N[D++] = B.low.low >> 8 & 255,
				N[D++] = B.low.low >> 16 & 255,
				N[D++] = B.low.low >> 24 & 255,
				N[D++] = B.low.high & 255,
				N[D++] = B.low.high >> 8 & 255,
				N[D++] = B.low.high >> 16 & 255,
				N[D++] = B.low.high >> 24 & 255,
				N[D++] = B.high.low & 255,
				N[D++] = B.high.low >> 8 & 255,
				N[D++] = B.high.low >> 16 & 255,
				N[D++] = B.high.low >> 24 & 255,
				N[D++] = B.high.high & 255,
				N[D++] = B.high.high >> 8 & 255,
				N[D++] = B.high.high >> 16 & 255,
				N[D++] = B.high.high >> 24 & 255,
				new O0(N)
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

			let j = this.bytes,
				X = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				P = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				k = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				z = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24;

			if ((
				Y = 0,
				({ low: new V(X, P), high: new V(k, z) }).high.lessThan(V.ZERO)
			)) H.push("-");

			let v = z >> 26 & hq;

			if (v >> 3 === 3) if (v === mq) return H.join("") + "Infinity"; else if (v === Nq) return "NaN"; else ($ = z >> 15 & L3, q = 8 + (z >> 14 & 1)); else (q = z >> 14 & 7, $ = z >> 17 & L3);

			let O = $ - z3;

			if ((
				K.parts[0] = (z & 16383) + ((q & 15) << 14),
				K.parts[1] = k,
				K.parts[2] = P,
				K.parts[3] = X,
				K.parts[0] === 0 && K.parts[1] === 0 && K.parts[2] === 0 && K.parts[3] === 0
			)) Z = !0; else for (F = 3; F >= 0; F--) {
				let D = 0, y = Bq(K);

				if ((K = y.quotient, D = y.rem.low, !D)) continue;

				for (W = 8; W >= 0; W--) (J[F * 9 + W] = D % 10, D = Math.floor(D / 10));
			}

			if (Z) (Q = 1, J[Y] = 0); else {
				Q = 36;

				while (!J[Y]) (Q = Q - 1, Y = Y + 1);
			}

			let R = Q - 1 + O;

			if (R >= 34 || R <= -7 || O > 0) {
				if (Q > 34) {
					if ((H.push("0"), O > 0)) H.push(`E+${O}`); else if (O < 0) H.push(`E${O}`);

					return H.join("");
				}

				if ((H.push(`${J[Y++]}`), Q = Q - 1, Q)) H.push(".");

				for (let D = 0; D < Q; D++) H.push(`${J[Y++]}`);

				if ((H.push("E"), R > 0)) H.push(`+${R}`); else H.push(`${R}`);
			} else if (O >= 0) for (let D = 0; D < Q; D++) H.push(`${J[Y++]}`); else {
				let D = Q + O;

				if (D > 0) for (let y = 0; y < D; y++) H.push(`${J[Y++]}`); else H.push("0");

				H.push(".");

				while (D++ < 0) H.push("0");

				for (let y = 0; y < Q - Math.max(D - 1, 0); y++) H.push(`${J[Y++]}`);
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
			return O0.fromString($.$numberDecimal);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new Decimal128(${J(this.toString(), Q)})`);
		}
	}

	class $$ extends v0 {
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

			if ($ === "NaN") return new $$(NaN);
			if ($ === "Infinity") return new $$(1 / 0);
			if ($ === "-Infinity") return new $$(-1 / 0);
			if (!Number.isFinite(Q)) throw new L(`Input: ${$} is not representable as a Double`);
			if ($.trim() !== $) throw new L(`Input: '${$}' contains whitespace`);
			if ($ === "") throw new L("Input is an empty string");
			if ((/[^-0-9.+eE]/).test($)) throw new L(`Input: '${$}' is not in decimal or exponential notation`);

			return new $$(Q);
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

			return Q && Q.relaxed ? J : new $$(J);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new Double(${J(this.value, Q)})`);
		}
	}

	class o$ extends v0 {
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
			let Q = u3($), J = Number($);

			if (v1 < J) throw new L(`Input: '${$}' is larger than the maximum value for Int32`); else if (g1 > J) throw new L(`Input: '${$}' is smaller than the minimum value for Int32`); else if (!Number.isSafeInteger(J)) throw new L(`Input: '${$}' is not a safe integer`); else if (J.toString() !== Q) throw new L(`Input: '${$}' is not a valid Int32 string`);

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
			return (J ??= c0, `new Int32(${J(this.value, Q)})`);
		}
	}

	class u8 extends v0 {
		get _bsontype() {
			return "MaxKey";
		}

		toExtendedJSON() {
			return { $maxKey: 1 };
		}

		static fromExtendedJSON() {
			return new u8();
		}

		inspect() {
			return "new MaxKey()";
		}
	}

	class d8 extends v0 {
		get _bsontype() {
			return "MinKey";
		}

		toExtendedJSON() {
			return { $minKey: 1 };
		}

		static fromExtendedJSON() {
			return new d8();
		}

		inspect() {
			return "new MinKey()";
		}
	}

	var P8 = null, _1 = new WeakMap();

	class j0 extends v0 {
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
				if (typeof $.id !== "string" && !ArrayBuffer.isView($.id)) throw new L("Argument passed in must have an id that is of type string or Buffer");
				if ("toHexString" in $ && typeof $.toHexString === "function") Q = U.fromHex($.toHexString()); else Q = $.id;
			} else Q = $;

			if (Q == null) this.buffer = j0.generate(); else if (ArrayBuffer.isView(Q) && Q.byteLength === 12) this.buffer = U.toLocalBufferType(Q); else if (typeof Q === "string") if (j0.validateHexString(Q)) {
				if ((this.buffer = U.fromHex(Q), j0.cacheHexString)) _1.set(this, Q);
			} else throw new L("input must be a 24 character hex string, 12 byte Uint8Array, or an integer"); else throw new L("Argument passed in does not match the accepted types");
		}

		get id() {
			return this.buffer;
		}

		set id($) {
			if ((this.buffer = $, j0.cacheHexString)) _1.set(this, U.toHex($));
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
			if (j0.cacheHexString) {
				let Q = _1.get(this);

				if (Q) return Q;
			}

			let $ = U.toHex(this.id);

			if (j0.cacheHexString) _1.set(this, $);

			return $;
		}

		static getInc() {
			return j0.index = (j0.index + 1) % 16777215;
		}

		static generate($) {
			if (typeof $ !== "number") $ = Math.floor(Date.now() / 1000);

			let Q = j0.getInc(), J = U.allocateUnsafe(12);

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
			if (j0.is($)) return this.buffer[11] === $.buffer[11] && U.equals(this.buffer, $.buffer);
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
			return new j0();
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

			return (b.setInt32BE(Q, 0, $), new j0(Q));
		}

		static createFromHexString($) {
			if ($?.length !== 24) throw new L("hex string must be 24 characters");

			return new j0(U.fromHex($));
		}

		static createFromBase64($) {
			if ($?.length !== 16) throw new L("base64 string must be 16 characters");

			return new j0(U.fromBase64($));
		}

		static isValid($) {
			if ($ == null) return !1;
			if (typeof $ === "string") return j0.validateHexString($);

			try {
				return (new j0($), !0);
			} catch {
				return !1;
			}
		}

		toExtendedJSON() {
			if (this.toHexString) return { $oid: this.toHexString() };

			return { $oid: this.toString("hex") };
		}

		static fromExtendedJSON($) {
			return new j0($.$oid);
		}

		isCached() {
			return j0.cacheHexString && _1.has(this);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new ObjectId(${J(this.toHexString(), Q)})`);
		}
	}

	function J5($, Q, J) {
		let Y = 5;

		if (Array.isArray($)) for (let Z = 0; Z < $.length; Z++) Y += A3(Z.toString(), $[Z], Q, !0, J); else {
			if (typeof $?.toBSON === "function") $ = $.toBSON();

			for (let Z of Object.keys($)) Y += A3(Z, $[Z], Q, !1, J);
		}

		return Y;
	}

	function A3($, Q, J = !1, Y = !1, Z = !1) {
		if (typeof Q?.toBSON === "function") Q = Q.toBSON();

		switch (typeof Q) {
			case "string":
				return 1 + U.utf8ByteLength($) + 1 + 4 + U.utf8ByteLength(Q) + 1;

			case "number":
				if (Math.floor(Q) === Q && Q >= m3 && Q <= h3) if (Q >= g1 && Q <= v1) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 5; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9;

			case "undefined":
				if (Y || !Z) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1;
				return 0;

			case "boolean":
				return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 2;

			case "object":
				if (Q != null && typeof Q._bsontype === "string" && Q[l8] !== M8) throw new R8(); else if (Q == null || Q._bsontype === "MinKey" || Q._bsontype === "MaxKey") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1; else if (Q._bsontype === "ObjectId") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 13; else if (Q instanceof Date || c8(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else if (ArrayBuffer.isView(Q) || Q instanceof ArrayBuffer || X4(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 6 + Q.byteLength; else if (Q._bsontype === "Long" || Q._bsontype === "Double" || Q._bsontype === "Timestamp") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else if (Q._bsontype === "Decimal128") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 17; else if (Q._bsontype === "Code") if (Q.scope != null && Object.keys(Q.scope).length > 0) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + 4 + U.utf8ByteLength(Q.code.toString()) + 1 + J5(Q.scope, J, Z); else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + U.utf8ByteLength(Q.code.toString()) + 1; else if (Q._bsontype === "Binary") {
					let q = Q;

					if (q.sub_type === o.SUBTYPE_BYTE_ARRAY) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1 + 4); else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1);
				} else if (Q._bsontype === "Symbol") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + U.utf8ByteLength(Q.value) + 4 + 1 + 1; else if (Q._bsontype === "DBRef") {
					let q = Object.assign({ $ref: Q.collection, $id: Q.oid }, Q.fields);

					if (Q.db != null) q.$db = Q.db;

					return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + J5(q, J, Z);
				} else if (Q instanceof RegExp || x8(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + U.utf8ByteLength(Q.source) + 1 + (Q.global ? 1 : 0) + (Q.ignoreCase ? 1 : 0) + (Q.multiline ? 1 : 0) + 1; else if (Q._bsontype === "BSONRegExp") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + U.utf8ByteLength(Q.pattern) + 1 + U.utf8ByteLength(Q.options) + 1; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + J5(Q, J, Z) + 1;

			case "function":
				if (J) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + U.utf8ByteLength(Q.toString()) + 1;
				return 0;

			case "bigint":
				return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9;

			case "symbol":
				return 0;

			default:
				throw new L(`Unrecognized JS type: ${typeof Q}`);
		}
	}

	function _q($) {
		return $.split("").sort().join("");
	}

	class Q$ extends v0 {
		get _bsontype() {
			return "BSONRegExp";
		}

		pattern;
		options;

		constructor($, Q) {
			super();

			if ((
				this.pattern = $,
				this.options = _q(Q ?? ""),
				this.pattern.indexOf("\x00") !== -1
			)) throw new L(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);

			if (this.options.indexOf("\x00") !== -1) throw new L(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);

			for (let J = 0; J < this.options.length; J++) if (!(this.options[J] === "i" || this.options[J] === "m" || this.options[J] === "x" || this.options[J] === "l" || this.options[J] === "s" || this.options[J] === "u")) throw new L(`The regular expression option [${this.options[J]}] is not supported`);
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
			} else return new Q$($.$regex, Q$.parseOptions($.$options));

			if ("$regularExpression" in $) return new Q$($.$regularExpression.pattern, Q$.parseOptions($.$regularExpression.options));

			throw new L(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify($)}`);
		}

		inspect($, Q, J) {
			let Y = Zq(Q) ?? ((K) => K);

			J ??= c0;

			let Z = Y(J(this.pattern), "regexp"),
				q = Y(J(this.options), "regexp");

			return `new BSONRegExp(${Z}, ${q})`;
		}
	}

	class o8 extends v0 {
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
			return new o8($.$symbol);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new BSONSymbol(${J(this.value, Q)})`);
		}
	}

	var yq = V;

	class H$ extends yq {
		get _bsontype() {
			return "Timestamp";
		}

		get [D4]() {
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
				if (typeof $.t !== "number" && (typeof $.t !== "object" || $.t._bsontype !== "Int32")) throw new L("Timestamp constructed from { t, i } must provide t as a number");
				if (typeof $.i !== "number" && (typeof $.i !== "object" || $.i._bsontype !== "Int32")) throw new L("Timestamp constructed from { t, i } must provide i as a number");

				let Q = Number($.t), J = Number($.i);

				if (Q < 0 || Number.isNaN(Q)) throw new L("Timestamp constructed from { t, i } must provide a positive t");
				if (J < 0 || Number.isNaN(J)) throw new L("Timestamp constructed from { t, i } must provide a positive i");
				if (Q > 4294967295) throw new L("Timestamp constructed from { t, i } must provide t equal or less than uint32 max");
				if (J > 4294967295) throw new L("Timestamp constructed from { t, i } must provide i equal or less than uint32 max");

				super(J, Q, !0);
			} else throw new L("A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }");
		}

		toJSON() {
			return { $timestamp: this.toString() };
		}

		static fromInt($) {
			return new H$(V.fromInt($, !0));
		}

		static fromNumber($) {
			return new H$(V.fromNumber($, !0));
		}

		static fromBits($, Q) {
			return new H$({ i: $, t: Q });
		}

		static fromString($, Q) {
			return new H$(V.fromString($, !0, Q));
		}

		toExtendedJSON() {
			return { $timestamp: { t: this.t, i: this.i } };
		}

		static fromExtendedJSON($) {
			let Q = V.isLong($.$timestamp.i) ? $.$timestamp.i.getLowBitsUnsigned() : $.$timestamp.i,
				J = V.isLong($.$timestamp.t) ? $.$timestamp.t.getLowBitsUnsigned() : $.$timestamp.t;

			return new H$({ t: J, i: Q });
		}

		inspect($, Q, J) {
			J ??= c0;

			let Y = J(this.t, Q), Z = J(this.i, Q);

			return `new Timestamp({ t: ${Y}, i: ${Z} })`;
		}
	}

	var vq = V.fromNumber(h3), gq = V.fromNumber(m3);

	function o3($, Q, J) {
		Q = Q == null ? {} : Q;

		let Y = Q && Q.index ? Q.index : 0,
			Z = b.getInt32LE($, Y);

		if (Z < 5) throw new L(`bson size must be >= 5, is ${Z}`);
		if (Q.allowObjectSmallerThanBufferSize && $.length < Z) throw new L(`buffer length ${$.length} must be >= bson size ${Z}`);
		if (!Q.allowObjectSmallerThanBufferSize && $.length !== Z) throw new L(`buffer length ${$.length} must === bson size ${Z}`);
		if (Z + Y > $.byteLength) throw new L(`(bson size ${Z} + options.index ${Y} must be <= buffer length ${$.byteLength})`);
		if ($[Y + Z - 1] !== 0) throw new L("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");

		return Y5($, Y, Q, J);
	}

	var pq = /^\$ref$|^\$id$|^\$db$/;

	function Y5($, Q, J, Y = !1) {
		let Z = J.fieldsAsRaw == null ? null : J.fieldsAsRaw,
			q = J.raw == null ? !1 : J.raw,
			K = typeof J.bsonRegExp === "boolean" ? J.bsonRegExp : !1,
			W = J.promoteBuffers ?? !1,
			F = J.promoteLongs ?? !0,
			H = J.promoteValues ?? !0,
			j = J.useBigInt64 ?? !1;

		if (j && !H) throw new L("Must either request bigint or Long for int64 deserialization");
		if (j && !F) throw new L("Must either request bigint or Long for int64 deserialization");

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

			if (w.length === 0) throw new L("UTF-8 validation setting cannot be empty");
			if (typeof w[0] !== "boolean") throw new L("Invalid UTF-8 validation option, must specify boolean values");
			if ((k = w[0], !w.every((h) => h === k))) throw new L("Invalid UTF-8 validation option - keys must be all true or all false");
		}

		if (!P) {
			z = new Set();

			for (let w of Object.keys(A)) z.add(w);
		}

		let v = Q;

		if ($.length < 5) throw new L("corrupt bson message < 5 bytes long");

		let O = b.getInt32LE($, Q);

		if ((Q += 4, O < 5 || O > $.length)) throw new L("corrupt bson message");

		let R = Y ? [] : {}, D = 0, y = Y ? !1 : null;

		while (!0) {
			let w = $[Q++];

			if (w === 0) break;

			let h = Q;

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.byteLength) throw new L("Bad BSON Document: illegal CString");

			let T = Y ? D++ : U.toUTF8($, Q, h, !1), B = !0;

			if (P || z?.has(T)) B = k; else B = !k;
			if (y !== !1 && T[0] === "$") y = pq.test(T);

			let N;

			if ((Q = h + 1, w === N3)) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new L("bad string length in bson");

				(N = U.toUTF8($, Q, Q + I - 1, B), Q = Q + I);
			} else if (w === O3) {
				let I = U.allocateUnsafe(12);

				for (let S = 0; S < 12; S++) I[S] = $[Q + S];

				(N = new j0(I), Q = Q + 12);
			} else if (w === y1 && H === !1) (N = new o$(b.getInt32LE($, Q)), Q += 4); else if (w === y1) (N = b.getInt32LE($, Q), Q += 4); else if (w === P4) {
				if ((N = b.getFloat64LE($, Q), Q += 8, H === !1)) N = new $$(N);
			} else if (w === _3) {
				let I = b.getInt32LE($, Q),
					S = b.getInt32LE($, Q + 4);

				(Q += 8, N = new Date(new V(I, S).toNumber()));
			} else if (w === S3) {
				if ($[Q] !== 0 && $[Q] !== 1) throw new L("illegal boolean type value");

				N = $[Q++] === 1;
			} else if (w === V4) {
				let I = Q, S = b.getInt32LE($, Q);

				if (S <= 0 || S > $.length - Q) throw new L("bad embedded document length in bson");

				if (q) N = $.subarray(Q, Q + S); else {
					let n = J;

					if (!P) n = { ...J, validation: { utf8: B } };

					N = Y5($, I, n, !1);
				}

				Q = Q + S;
			} else if (w === B3) {
				let I = Q,
					S = b.getInt32LE($, Q),
					n = J,
					J0 = Q + S;

				if (Z && Z[T]) n = { ...J, raw: !0 };
				if (!P) n = { ...n, validation: { utf8: B } };
				if ((N = Y5($, I, n, !0), Q = Q + S, $[Q - 1] !== 0)) throw new L("invalid array terminator byte");
				if (Q !== J0) throw new L("corrupted array bson");
			} else if (w === qq) N = void 0; else if (w === R4) N = null; else if (w === U4) if (j) (N = b.getBigInt64LE($, Q), Q += 8); else {
				let I = b.getInt32LE($, Q),
					S = b.getInt32LE($, Q + 4);

				Q += 8;

				let n = new V(I, S);

				if (F && H === !0) N = n.lessThanOrEqual(vq) && n.greaterThanOrEqual(gq) ? n.toNumber() : n; else N = n;
			} else if (w === p3) {
				let I = U.allocateUnsafe(16);

				for (let S = 0; S < 16; S++) I[S] = $[Q + S];

				(Q = Q + 16, N = new O0(I));
			} else if (w === M4) {
				let I = b.getInt32LE($, Q);

				Q += 4;

				let S = I, n = $[Q++];

				if (I < 0) throw new L("Negative binary type element size found");
				if (I > $.byteLength) throw new L("Binary type size larger than document size");

				if (n === o.SUBTYPE_BYTE_ARRAY) {
					if ((I = b.getInt32LE($, Q), Q += 4, I < 0)) throw new L("Negative binary type element size found for subtype 0x02");
					if (I > S - 4) throw new L("Binary type with subtype 0x02 contains too long binary size");
					if (I < S - 4) throw new L("Binary type with subtype 0x02 contains too short binary size");
				}

				if (W && H) N = U.toLocalBufferType($.subarray(Q, Q + I)); else if ((
					N = new o($.subarray(Q, Q + I), n),
					n === k4 && w0.isValid(N)
				)) N = N.toUUID();

				Q = Q + I;
			} else if (w === G5 && K === !1) {
				h = Q;

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new L("Bad BSON Document: illegal CString");

				let I = U.toUTF8($, Q, h, !1);

				(Q = h + 1, h = Q);

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new L("Bad BSON Document: illegal CString");

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
			} else if (w === G5 && K === !0) {
				h = Q;

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new L("Bad BSON Document: illegal CString");

				let I = U.toUTF8($, Q, h, !1);

				(Q = h + 1, h = Q);

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new L("Bad BSON Document: illegal CString");

				let S = U.toUTF8($, Q, h, !1);

				(Q = h + 1, N = new Q$(I, S));
			} else if (w === y3) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new L("bad string length in bson");

				let S = U.toUTF8($, Q, Q + I - 1, B);

				(N = H ? S : new o8(S), Q = Q + I);
			} else if (w === g3) (
				N = new H$({ i: b.getUint32LE($, Q), t: b.getUint32LE($, Q + 4) }),
				Q += 8
			); else if (w === x3) N = new d8(); else if (w === c3) N = new u8(); else if (w === z4) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new L("bad string length in bson");

				let S = U.toUTF8($, Q, Q + I - 1, B);

				(N = new d$(S), Q = Q + I);
			} else if (w === v3) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I < 13)) throw new L("code_w_scope total size shorter minimum expected length");

				let S = b.getInt32LE($, Q);

				if ((Q += 4, S <= 0 || S > $.length - Q || $[Q + S - 1] !== 0)) throw new L("bad string length in bson");

				let n = U.toUTF8($, Q, Q + S - 1, B);

				Q = Q + S;

				let J0 = Q,
					l = b.getInt32LE($, Q),
					$0 = Y5($, J0, J, !1);

				if ((Q = Q + l, I < 8 + l + S)) throw new L("code_w_scope total size is too short, truncating scope");
				if (I > 8 + l + S) throw new L("code_w_scope total size is too long, clips outer document");

				N = new d$(n, $0);
			} else if (w === Kq) {
				let I = b.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new L("bad string length in bson");

				let S = U.toUTF8($, Q, Q + I - 1, B);

				Q = Q + I;

				let n = U.allocateUnsafe(12);

				for (let l = 0; l < 12; l++) n[l] = $[Q + l];

				let J0 = new j0(n);

				(Q = Q + 12, N = new w$(S, J0));
			} else throw new L(`Detected unknown BSON type ${w.toString(16)} for fieldname "${T}"`);

			if (T === "__proto__") Object.defineProperty(R, T, { value: N, writable: !0, enumerable: !0, configurable: !0 }); else R[T] = N;
		}

		if (O !== Q - v) {
			if (Y) throw new L("corrupt array bson");

			throw new L("corrupt object bson");
		}

		if (!y) return R;

		if (l3(R)) {
			let w = Object.assign({}, R);

			return (
				delete w.$ref,
				delete w.$id,
				delete w.$db,
				new w$(R.$ref, R.$id, R.$db, w)
			);
		}

		return R;
	}

	var q5 = /\x00/,
		T3 = new Set(["$db", "$ref", "$id", "$clusterTime"]);

	function lQ($, Q, J, Y) {
		$[Y++] = N3;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z + 1, $[Y - 1] = 0);

		let q = U.encodeUTF8Into($, J, Y + 4);

		return (b.setInt32LE($, Y, q + 1), Y = Y + 4 + q, $[Y++] = 0, Y);
	}

	function uQ($, Q, J, Y) {
		let q = !Object.is(J, -0) && Number.isSafeInteger(J) && J <= v1 && J >= g1 ? y1 : P4;

		$[Y++] = q;

		let K = U.encodeUTF8Into($, Q, Y);

		if ((Y = Y + K, $[Y++] = 0, q === y1)) Y += b.setInt32LE($, Y, J); else Y += b.setFloat64LE($, Y, J);

		return Y;
	}

	function dQ($, Q, J, Y) {
		$[Y++] = U4;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y += Z, $[Y++] = 0, Y += b.setBigInt64LE($, Y, J), Y);
	}

	function p8($, Q, J, Y) {
		$[Y++] = R4;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y);
	}

	function oQ($, Q, J, Y) {
		$[Y++] = S3;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, $[Y++] = J ? 1 : 0, Y);
	}

	function nQ($, Q, J, Y) {
		$[Y++] = _3;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = V.fromNumber(J.getTime()),
			K = q.getLowBits(),
			W = q.getHighBits();

		return (Y += b.setInt32LE($, Y, K), Y += b.setInt32LE($, Y, W), Y);
	}

	function tQ($, Q, J, Y) {
		$[Y++] = G5;

		let Z = U.encodeUTF8Into($, Q, Y);

		if ((
			Y = Y + Z,
			$[Y++] = 0,
			J.source && J.source.match(q5) != null
		)) throw new L("value " + J.source + " must not contain null bytes");

		if ((
			Y = Y + U.encodeUTF8Into($, J.source, Y),
			$[Y++] = 0,
			J.ignoreCase
		)) $[Y++] = 105;

		if (J.global) $[Y++] = 115;
		if (J.multiline) $[Y++] = 109;

		return ($[Y++] = 0, Y);
	}

	function aQ($, Q, J, Y) {
		$[Y++] = G5;

		let Z = U.encodeUTF8Into($, Q, Y);

		if ((Y = Y + Z, $[Y++] = 0, J.pattern.match(q5) != null)) throw new L("pattern " + J.pattern + " must not contain null bytes");

		(Y = Y + U.encodeUTF8Into($, J.pattern, Y), $[Y++] = 0);

		let q = J.options.split("").sort().join("");

		return (Y = Y + U.encodeUTF8Into($, q, Y), $[Y++] = 0, Y);
	}

	function sQ($, Q, J, Y) {
		if (J === null) $[Y++] = R4; else if (J._bsontype === "MinKey") $[Y++] = x3; else $[Y++] = c3;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y);
	}

	function rQ($, Q, J, Y) {
		$[Y++] = O3;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += J.serializeInto($, Y), Y);
	}

	function iQ($, Q, J, Y) {
		$[Y++] = M4;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.length;

		if ((Y += b.setInt32LE($, Y, q), $[Y++] = Fq, q <= 16)) for (let K = 0; K < q; K++) $[Y + K] = J[K]; else $.set(J, Y);

		return (Y = Y + q, Y);
	}

	function eQ($, Q, J, Y, Z, q, K, W, F) {
		if (F.has(J)) throw new L("Cannot convert circular structure to BSON");

		(F.add(J), $[Y++] = Array.isArray(J) ? B3 : V4);

		let H = U.encodeUTF8Into($, Q, Y);

		(Y = Y + H, $[Y++] = 0);

		let j = p1($, J, Z, Y, q + 1, K, W, F);

		return (F.delete(J), j);
	}

	function $4($, Q, J, Y) {
		$[Y++] = p3;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		for (let q = 0; q < 16; q++) $[Y + q] = J.bytes[q];

		return Y + 16;
	}

	function Q4($, Q, J, Y) {
		$[Y++] = J._bsontype === "Long" ? U4 : g3;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.getLowBits(), K = J.getHighBits();

		return (Y += b.setInt32LE($, Y, q), Y += b.setInt32LE($, Y, K), Y);
	}

	function J4($, Q, J, Y) {
		(J = J.valueOf(), $[Y++] = y1);

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += b.setInt32LE($, Y, J), Y);
	}

	function Y4($, Q, J, Y) {
		$[Y++] = P4;

		let Z = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += b.setFloat64LE($, Y, J.value), Y);
	}

	function G4($, Q, J, Y) {
		$[Y++] = z4;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.toString(),
			K = U.encodeUTF8Into($, q, Y + 4) + 1;

		return (b.setInt32LE($, Y, K), Y = Y + 4 + K - 1, $[Y++] = 0, Y);
	}

	function Z4($, Q, J, Y, Z = !1, q = 0, K = !1, W = !0, F) {
		if (J.scope && typeof J.scope === "object") {
			$[Y++] = v3;

			let H = U.encodeUTF8Into($, Q, Y);

			(Y = Y + H, $[Y++] = 0);

			let j = Y, X = J.code;

			Y = Y + 4;

			let P = U.encodeUTF8Into($, X, Y + 4) + 1;

			(b.setInt32LE($, Y, P), $[Y + 4 + P - 1] = 0, Y = Y + P + 4);

			let k = p1($, J.scope, Z, Y, q + 1, K, W, F);

			Y = k - 1;

			let z = k - j;

			(j += b.setInt32LE($, j, z), $[Y++] = 0);
		} else {
			$[Y++] = z4;

			let H = U.encodeUTF8Into($, Q, Y);

			(Y = Y + H, $[Y++] = 0);

			let j = J.code.toString(),
				X = U.encodeUTF8Into($, j, Y + 4) + 1;

			(b.setInt32LE($, Y, X), Y = Y + 4 + X - 1, $[Y++] = 0);
		}

		return Y;
	}

	function q4($, Q, J, Y) {
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

		if (J.sub_type === o.SUBTYPE_VECTOR) I$(J);
		if (K <= 16) for (let W = 0; W < K; W++) $[Y + W] = q[W]; else $.set(q, Y);

		return (Y = Y + J.position, Y);
	}

	function K4($, Q, J, Y) {
		$[Y++] = y3;

		let Z = U.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = U.encodeUTF8Into($, J.value, Y + 4) + 1;

		return (b.setInt32LE($, Y, q), Y = Y + 4 + q - 1, $[Y++] = 0, Y);
	}

	function F4($, Q, J, Y, Z, q, K) {
		$[Y++] = V4;

		let W = U.encodeUTF8Into($, Q, Y);

		(Y = Y + W, $[Y++] = 0);

		let F = Y,
			H = { $ref: J.collection || J.namespace, $id: J.oid };

		if (J.db != null) H.$db = J.db;

		H = Object.assign(H, J.fields);

		let j = p1($, H, !1, Y, Z + 1, q, !0, K),
			X = j - F;

		return (F += b.setInt32LE($, Y, X), j);
	}

	function p1($, Q, J, Y, Z, q, K, W) {
		if (W == null) {
			if (Q == null) return ($[0] = 5, $[1] = 0, $[2] = 0, $[3] = 0, $[4] = 0, 5);
			if (Array.isArray(Q)) throw new L("serialize does not support an array as the root input");
			if (typeof Q !== "object") throw new L("serialize does not support non-object as the root input"); else if ("_bsontype" in Q && typeof Q._bsontype === "string") throw new L("BSON types cannot be serialized as a document"); else if (c8(Q) || x8(Q) || l$(Q) || X4(Q)) throw new L("date, regexp, typedarray, and arraybuffer cannot be BSON documents");

			W = new Set();
		}

		W.add(Q);

		let F = Y + 4;

		if (Array.isArray(Q)) for (let j = 0; j < Q.length; j++) {
			let X = `${j}`, P = Q[j];

			if (typeof P?.toBSON === "function") P = P.toBSON();

			let k = typeof P;

			if (P === void 0) F = p8($, X, P, F); else if (P === null) F = p8($, X, P, F); else if (k === "string") F = lQ($, X, P, F); else if (k === "number") F = uQ($, X, P, F); else if (k === "bigint") F = dQ($, X, P, F); else if (k === "boolean") F = oQ($, X, P, F); else if (k === "object" && P._bsontype == null) if (P instanceof Date || c8(P)) F = nQ($, X, P, F); else if (P instanceof Uint8Array || l$(P)) F = iQ($, X, P, F); else if (P instanceof RegExp || x8(P)) F = tQ($, X, P, F); else F = eQ($, X, P, F, J, Z, q, K, W); else if (k === "object") {
				if (P[l8] !== M8) throw new R8(); else if (P._bsontype === "ObjectId") F = rQ($, X, P, F); else if (P._bsontype === "Decimal128") F = $4($, X, P, F); else if (P._bsontype === "Long" || P._bsontype === "Timestamp") F = Q4($, X, P, F); else if (P._bsontype === "Double") F = Y4($, X, P, F); else if (P._bsontype === "Code") F = Z4($, X, P, F, J, Z, q, K, W); else if (P._bsontype === "Binary") F = q4($, X, P, F); else if (P._bsontype === "BSONSymbol") F = K4($, X, P, F); else if (P._bsontype === "DBRef") F = F4($, X, P, F, Z, q, W); else if (P._bsontype === "BSONRegExp") F = aQ($, X, P, F); else if (P._bsontype === "Int32") F = J4($, X, P, F); else if (P._bsontype === "MinKey" || P._bsontype === "MaxKey") F = sQ($, X, P, F); else if (typeof P._bsontype !== "undefined") throw new L(`Unrecognized or invalid _bsontype: ${String(P._bsontype)}`);
			} else if (k === "function" && q) F = G4($, X, P, F);
		} else if (Q instanceof Map || H4(Q)) {
			let j = Q.entries(), X = !1;

			while (!X) {
				let P = j.next();

				if ((X = !!P.done, X)) continue;

				let k = P.value ? P.value[0] : void 0,
					z = P.value ? P.value[1] : void 0;

				if (typeof z?.toBSON === "function") z = z.toBSON();

				let A = typeof z;

				if (typeof k === "string" && !T3.has(k)) {
					if (k.match(q5) != null) throw new L("key " + k + " must not contain null bytes");

					if (J) {
						if (k[0] === "$") throw new L("key " + k + " must not start with '$'"); else if (k.includes(".")) throw new L("key " + k + " must not contain '.'");
					}
				}

				if (z === void 0) {
					if (K === !1) F = p8($, k, z, F);
				} else if (z === null) F = p8($, k, z, F); else if (A === "string") F = lQ($, k, z, F); else if (A === "number") F = uQ($, k, z, F); else if (A === "bigint") F = dQ($, k, z, F); else if (A === "boolean") F = oQ($, k, z, F); else if (A === "object" && z._bsontype == null) if (z instanceof Date || c8(z)) F = nQ($, k, z, F); else if (z instanceof Uint8Array || l$(z)) F = iQ($, k, z, F); else if (z instanceof RegExp || x8(z)) F = tQ($, k, z, F); else F = eQ($, k, z, F, J, Z, q, K, W); else if (A === "object") {
					if (z[l8] !== M8) throw new R8(); else if (z._bsontype === "ObjectId") F = rQ($, k, z, F); else if (z._bsontype === "Decimal128") F = $4($, k, z, F); else if (z._bsontype === "Long" || z._bsontype === "Timestamp") F = Q4($, k, z, F); else if (z._bsontype === "Double") F = Y4($, k, z, F); else if (z._bsontype === "Code") F = Z4($, k, z, F, J, Z, q, K, W); else if (z._bsontype === "Binary") F = q4($, k, z, F); else if (z._bsontype === "BSONSymbol") F = K4($, k, z, F); else if (z._bsontype === "DBRef") F = F4($, k, z, F, Z, q, W); else if (z._bsontype === "BSONRegExp") F = aQ($, k, z, F); else if (z._bsontype === "Int32") F = J4($, k, z, F); else if (z._bsontype === "MinKey" || z._bsontype === "MaxKey") F = sQ($, k, z, F); else if (typeof z._bsontype !== "undefined") throw new L(`Unrecognized or invalid _bsontype: ${String(z._bsontype)}`);
				} else if (A === "function" && q) F = G4($, k, z, F);
			}
		} else {
			if (typeof Q?.toBSON === "function") {
				if ((Q = Q.toBSON(), Q != null && typeof Q !== "object")) throw new L("toBSON function did not return an object");
			}

			for (let j of Object.keys(Q)) {
				let X = Q[j];

				if (typeof X?.toBSON === "function") X = X.toBSON();

				let P = typeof X;

				if (typeof j === "string" && !T3.has(j)) {
					if (j.match(q5) != null) throw new L("key " + j + " must not contain null bytes");

					if (J) {
						if (j[0] === "$") throw new L("key " + j + " must not start with '$'"); else if (j.includes(".")) throw new L("key " + j + " must not contain '.'");
					}
				}

				if (X === void 0) {
					if (K === !1) F = p8($, j, X, F);
				} else if (X === null) F = p8($, j, X, F); else if (P === "string") F = lQ($, j, X, F); else if (P === "number") F = uQ($, j, X, F); else if (P === "bigint") F = dQ($, j, X, F); else if (P === "boolean") F = oQ($, j, X, F); else if (P === "object" && X._bsontype == null) if (X instanceof Date || c8(X)) F = nQ($, j, X, F); else if (X instanceof Uint8Array || l$(X)) F = iQ($, j, X, F); else if (X instanceof RegExp || x8(X)) F = tQ($, j, X, F); else F = eQ($, j, X, F, J, Z, q, K, W); else if (P === "object") {
					if (X[l8] !== M8) throw new R8(); else if (X._bsontype === "ObjectId") F = rQ($, j, X, F); else if (X._bsontype === "Decimal128") F = $4($, j, X, F); else if (X._bsontype === "Long" || X._bsontype === "Timestamp") F = Q4($, j, X, F); else if (X._bsontype === "Double") F = Y4($, j, X, F); else if (X._bsontype === "Code") F = Z4($, j, X, F, J, Z, q, K, W); else if (X._bsontype === "Binary") F = q4($, j, X, F); else if (X._bsontype === "BSONSymbol") F = K4($, j, X, F); else if (X._bsontype === "DBRef") F = F4($, j, X, F, Z, q, W); else if (X._bsontype === "BSONRegExp") F = aQ($, j, X, F); else if (X._bsontype === "Int32") F = J4($, j, X, F); else if (X._bsontype === "MinKey" || X._bsontype === "MaxKey") F = sQ($, j, X, F); else if (typeof X._bsontype !== "undefined") throw new L(`Unrecognized or invalid _bsontype: ${String(X._bsontype)}`);
				} else if (P === "function" && q) F = G4($, j, X, F);
			}
		}

		(W.delete(Q), $[F++] = 0);

		let H = F - Y;

		return (Y += b.setInt32LE($, Y, H), F);
	}

	function xq($) {
		return $ != null && typeof $ === "object" && "_bsontype" in $ && typeof $._bsontype === "string";
	}

	var cq = {
		$oid: j0,
		$binary: o,
		$uuid: o,
		$symbol: o8,
		$numberInt: o$,
		$numberDecimal: O0,
		$numberDouble: $$,
		$numberLong: V,
		$minKey: d8,
		$maxKey: u8,
		$regex: Q$,
		$regularExpression: Q$,
		$timestamp: H$
	};

	function n3($, Q = {}) {
		if (typeof $ === "number") {
			let Y = $ <= v1 && $ >= g1, Z = $ <= E3 && $ >= w3;

			if (Q.relaxed || Q.legacy) return $;

			if (Number.isInteger($) && !Object.is($, -0)) {
				if (Y) return new o$($);

				if (Z) {
					if (Q.useBigInt64) return BigInt($);

					return V.fromNumber($);
				}
			}

			return new $$($);
		}

		if ($ == null || typeof $ !== "object") return $;
		if ($.$undefined) return null;

		let J = Object.keys($).filter((Y) => Y.startsWith("$") && $[Y] != null);

		for (let Y = 0; Y < J.length; Y++) {
			let Z = cq[J[Y]];

			if (Z) return Z.fromExtendedJSON($, Q);
		}

		if ($.$date != null) {
			let Y = $.$date, Z = new Date();

			if (Q.legacy) if (typeof Y === "number") Z.setTime(Y); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new Z5(`Unrecognized type for EJSON date: ${typeof Y}`); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (V.isLong(Y)) Z.setTime(Y.toNumber()); else if (typeof Y === "number" && Q.relaxed) Z.setTime(Y); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new Z5(`Unrecognized type for EJSON date: ${typeof Y}`);

			return Z;
		}

		if ($.$code != null) {
			let Y = Object.assign({}, $);

			if ($.$scope) Y.$scope = n3($.$scope);

			return d$.fromExtendedJSON($);
		}

		if (l3($) || $.$dbPointer) {
			let Y = $.$ref ? $ : $.$dbPointer;

			if (Y instanceof w$) return Y;

			let Z = Object.keys(Y).filter((K) => K.startsWith("$")),
				q = !0;

			if ((
				Z.forEach((K) => {
					if (["$ref", "$id", "$db"].indexOf(K) === -1) q = !1;
				}),
				q
			)) return w$.fromExtendedJSON(Y);
		}

		return $;
	}

	function bq($, Q) {
		return $.map((J, Y) => {
			Q.seenObjects.push({ propertyName: `index ${Y}`, obj: null });

			try {
				return E$(J, Q);
			} finally {
				Q.seenObjects.pop();
			}
		});
	}

	function I3($) {
		let Q = $.toISOString();

		return $.getUTCMilliseconds() !== 0 ? Q : Q.slice(0, -5) + "Z";
	}

	function E$($, Q) {
		if ($ instanceof Map || H4($)) {
			let J = Object.create(null);

			for (let [Y, Z] of $) {
				if (typeof Y !== "string") throw new L("Can only serialize maps with string keys");

				J[Y] = Z;
			}

			return E$(J, Q);
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

				throw new L(`Converting circular structure to EJSON:
    ${Z}${q}${K}${W}
    ${F}\\${H}/`);
			}

			Q.seenObjects[Q.seenObjects.length - 1].obj = $;
		}

		if (Array.isArray($)) return bq($, Q);
		if ($ === void 0) return Q.ignoreUndefined ? void 0 : null;

		if ($ instanceof Date || c8($)) {
			let J = $.getTime(),
				Y = J > -1 && J < 253402318800000;

			if (Q.legacy) return Q.relaxed && Y ? { $date: $.getTime() } : { $date: I3($) };

			return Q.relaxed && Y
				? { $date: I3($) }
				: { $date: { $numberLong: $.getTime().toString() } };
		}

		if (typeof $ === "number" && (!Q.relaxed || !isFinite($))) {
			if (Number.isInteger($) && !Object.is($, -0)) {
				if ($ >= g1 && $ <= v1) return { $numberInt: $.toString() };
				if ($ >= w3 && $ <= E3) return { $numberLong: $.toString() };
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

			return new Q$($.source, J).toExtendedJSON(Q);
		}

		if ($ != null && typeof $ === "object") return lq($, Q);

		return $;
	}

	var fq = {
		Binary: ($) => new o($.value(), $.sub_type),
		Code: ($) => new d$($.code, $.scope),
		DBRef: ($) => new w$($.collection || $.namespace, $.oid, $.db, $.fields),
		Decimal128: ($) => new O0($.bytes),
		Double: ($) => new $$($.value),
		Int32: ($) => new o$($.value),
		Long: ($) => V.fromBits($.low != null ? $.low : $.low_, $.low != null ? $.high : $.high_, $.low != null ? $.unsigned : $.unsigned_),
		MaxKey: () => new u8(),
		MinKey: () => new d8(),
		ObjectId: ($) => new j0($),
		BSONRegExp: ($) => new Q$($.pattern, $.options),
		BSONSymbol: ($) => new o8($.value),
		Timestamp: ($) => H$.fromBits($.low, $.high)
	};

	function lq($, Q) {
		if ($ == null || typeof $ !== "object") throw new L("not an object instance");

		let J = $._bsontype;

		if (typeof J === "undefined") {
			let Y = {};

			for (let Z of Object.keys($)) {
				Q.seenObjects.push({ propertyName: Z, obj: null });

				try {
					let q = E$($[Z], Q);

					if (Z === "__proto__") Object.defineProperty(Y, Z, { value: q, writable: !0, enumerable: !0, configurable: !0 }); else Y[Z] = q;
				} finally {
					Q.seenObjects.pop();
				}
			}

			return Y;
		} else if ($ != null && typeof $ === "object" && typeof $._bsontype === "string" && $[l8] !== M8) throw new R8(); else if (xq($)) {
			let Y = $;

			if (typeof Y.toExtendedJSON !== "function") {
				let Z = fq[$._bsontype];

				if (!Z) throw new L("Unrecognized or invalid _bsontype: " + $._bsontype);

				Y = Z(Y);
			}

			if (J === "Code" && Y.scope) Y = new d$(Y.code, E$(Y.scope, Q)); else if (J === "DBRef" && Y.oid) Y = new w$(E$(Y.collection, Q), E$(Y.oid, Q), E$(Y.db, Q), E$(Y.fields, Q));

			return Y.toExtendedJSON(Q);
		} else throw new L("_bsontype must be a string, but was: " + typeof J);
	}

	function t3($, Q) {
		let J = {
			useBigInt64: Q?.useBigInt64 ?? !1,
			relaxed: Q?.relaxed ?? !0,
			legacy: Q?.legacy ?? !1
		};

		return JSON.parse($, (Y, Z) => {
			if (Y.indexOf("\x00") !== -1) throw new L(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(Y)}`);

			return n3(Z, J);
		});
	}

	function a3($, Q, J, Y) {
		if (J != null && typeof J === "object") (Y = J, J = 0);
		if (Q != null && typeof Q === "object" && !Array.isArray(Q)) (Y = Q, Q = void 0, J = 0);

		let Z = Object.assign({ relaxed: !0, legacy: !1 }, Y, { seenObjects: [{ propertyName: "(root)", obj: null }] }),
			q = E$($, Z);

		return JSON.stringify(q, Q, J);
	}

	function uq($, Q) {
		return (Q = Q || {}, JSON.parse(a3($, Q)));
	}

	function dq($, Q) {
		return (Q = Q || {}, t3(JSON.stringify($), Q));
	}

	var n8 = Object.create(null);

	n8.parse = t3;
	n8.stringify = a3;
	n8.serialize = uq;
	n8.deserialize = dq;
	Object.freeze(n8);

	var P0 = {
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

	function W4($, Q) {
		try {
			return b.getNonnegativeInt32LE($, Q);
		} catch(J) {
			throw new X$("BSON size cannot be negative", Q, { cause: J });
		}
	}

	function j4($, Q) {
		let J = Q;

		for (; $[J] !== 0; J++) ;

		if (J === $.length - 1) throw new X$("Null terminator not found", Q);

		return J;
	}

	function oq($, Q = 0) {
		if ((Q ??= 0, $.length < 5)) throw new X$(`Input must be at least 5 bytes, got ${$.length} bytes`, Q);

		let J = W4($, Q);

		if (J > $.length - Q) throw new X$(`Parsed documentSize (${J} bytes) does not match input length (${$.length} bytes)`, Q);
		if ($[Q + J - 1] !== 0) throw new X$("BSON documents must end in 0x00", Q + J);

		let Y = [], Z = Q + 4;

		while (Z <= J + Q) {
			let q = $[Z];

			if ((Z += 1, q === 0)) {
				if (Z - Q !== J) throw new X$("Invalid 0x00 type byte", Z);

				break;
			}

			let K = Z, W = j4($, Z) - K;

			Z += W + 1;

			let F;

			if (q === P0.double || q === P0.long || q === P0.date || q === P0.timestamp) F = 8; else if (q === P0.int) F = 4; else if (q === P0.objectId) F = 12; else if (q === P0.decimal) F = 16; else if (q === P0.bool) F = 1; else if (q === P0.null || q === P0.undefined || q === P0.maxKey || q === P0.minKey) F = 0; else if (q === P0.regex) F = j4($, j4($, Z) + 1) + 1 - Z; else if (q === P0.object || q === P0.array || q === P0.javascriptWithScope) F = W4($, Z); else if (q === P0.string || q === P0.binData || q === P0.dbPointer || q === P0.javascript || q === P0.symbol) {
				if ((F = W4($, Z) + 4, q === P0.binData)) F += 1;
				if (q === P0.dbPointer) F += 12;
			} else throw new X$(`Invalid 0x${q.toString(16).padStart(2, "0")} type byte`, Z);

			if (F > J) throw new X$("value reports length larger than document", Z);

			(Y.push([q, K, W, Z, F]), Z += F);
		}

		return Y;
	}

	var x1 = Object.create(null);

	x1.parseToElements = oq;
	x1.ByteUtils = U;
	x1.NumberUtils = b;
	Object.freeze(x1);

	var s3 = 17825792, u$ = U.allocate(s3);

	function nq($) {
		if (u$.length < $) u$ = U.allocate($);
	}

	function tq($, Q = {}) {
		let J = typeof Q.checkKeys === "boolean" ? Q.checkKeys : !1,
			Y = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
			Z = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0,
			q = typeof Q.minInternalBufferSize === "number" ? Q.minInternalBufferSize : s3;

		if (u$.length < q) u$ = U.allocate(q);

		let K = p1(u$, $, J, 0, 0, Y, Z, null),
			W = U.allocateUnsafe(K);

		return (W.set(u$.subarray(0, K), 0), W);
	}

	function aq($, Q, J = {}) {
		let Y = typeof J.checkKeys === "boolean" ? J.checkKeys : !1,
			Z = typeof J.serializeFunctions === "boolean" ? J.serializeFunctions : !1,
			q = typeof J.ignoreUndefined === "boolean" ? J.ignoreUndefined : !0,
			K = typeof J.index === "number" ? J.index : 0,
			W = p1(u$, $, Y, 0, 0, Z, q, null);

		return (Q.set(u$.subarray(0, W), K), K + W - 1);
	}

	function sq($, Q = {}) {
		return o3(U.toLocalBufferType($), Q);
	}

	function rq($, Q = {}) {
		Q = Q || {};

		let J = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
			Y = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0;

		return J5($, J, Y);
	}

	function iq($, Q, J, Y, Z, q) {
		let K = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, q),
			W = U.toLocalBufferType($),
			F = Q;

		for (let H = 0; H < J; H++) {
			let j = b.getInt32LE(W, F);

			(K.index = F, Y[Z + H] = o3(W, K), F = F + j);
		}

		return F;
	}

	var P$ = Object.freeze({
		__proto__: null,
		BSONError: L,
		BSONOffsetError: X$,
		BSONRegExp: Q$,
		BSONRuntimeError: Z5,
		BSONSymbol: o8,
		BSONType: Wq,
		BSONValue: v0,
		BSONVersionError: R8,
		Binary: o,
		ByteUtils: U,
		Code: d$,
		DBRef: w$,
		Decimal128: O0,
		Double: $$,
		EJSON: n8,
		Int32: o$,
		Long: V,
		MaxKey: u8,
		MinKey: d8,
		NumberUtils: b,
		ObjectId: j0,
		Timestamp: H$,
		UUID: w0,
		bsonType: D4,
		calculateObjectSize: rq,
		deserialize: sq,
		deserializeStream: iq,
		onDemand: x1,
		serialize: tq,
		serializeWithBufferAndIndex: aq,
		setInternalBufferSize: nq
	});

	var W0,
		t8 = new Map(),
		c1 = !0,
		L4 = 0,
		A4 = !1,
		T4 = !1;

	function O1() {
		let $ = Y0.url?.ws;

		(
			W0 = $
				? new WebSocket(`${$}${$.includes("?") ? "&" : "?"}v=${WJ}`)
				: m.ws.$ws(),
			W0.binaryType = "arraybuffer",
			c1 = !0,
			W0.addEventListener("open", () => {
				(
					console.log("[WS] Connected"),
					A4 = !1,
					T4 = !1,
					L4 = 0,
					uY(),
					UY(),
					B8()
				);
			}),

			W0.addEventListener("message", (Q) => {
				let J = P$.deserialize(Q.data);

				if ((z$ && console.debug("[WS] SERVER", J), t8.has(J.nonce))) {
					let Z = t8.get(J.nonce);

					(t8.delete(J.nonce), Z(J));
				}

				let Y = pQ.get(J.op);

				if (!Y) {
					console.error("[WS] Got an unexpected packet", J);

					return;
				}

				Y(J);
			}),

			W0.addEventListener("close", (Q) => {
				if ((
					t8.clear(),
					console.warn(`[WS] Disconnected (${Q.code})`),
					Q.code == 4008
				)) {
					(c1 = !1, TY());

					return;
				}

				if (!c1 || document.hidden) return;
				if ((console.warn("[WS] Reconnecting..."), Q.code == 4004 && !I4)) x$();

				let J = Math.random() * 2000;

				if (Q.code == 4007) setTimeout(O1, 500 + J); else {
					L4++;

					let Y = Math.min(5000 * L4, 30000);

					setTimeout(O1, Y + J);
				}
			})
		);
	}

	function BY($) {
		if ((c1 = !1, W0)) W0.close($);
	}

	var C4;

	document.addEventListener("visibilitychange", () => {
		if ((clearTimeout(C4), C4 = null, document.hidden)) {
			C4 = setTimeout(
				() => {
					if (!document.hidden) return;

					(
						console.log("Tab has been inactive for over a minute, disconnecting from WS"),
						W0?.close()
					);
				},
				60000
			);

			return;
		}

		if (c1 && (!W0 || W0.readyState == WebSocket.CLOSED)) O1();
	});

	function r3($ = {}) {
		if (!W0 || W0.readyState != WebSocket.OPEN) return (
			delete $.token,
			console.warn("Tried to send a packet while the connection is closed", $),
			!0
		);
	}

	var I4 = !1;

	function B8() {
		if (A4 || !W0 || W0.readyState != WebSocket.OPEN) return;
		if (B$() && !(M.token && M.user)) return;

		(I4 = !0, hQ(2, { token: B$() ?? "viewer" }));
	}

	function eY() {
		(T4 = !0, xQ());
	}

	function hQ($, Q) {
		if (r3(Q) || !W0) return !1;
		if ($ != 2 && !T4) return !1;
		if ($ == 2) (I4 = !1, A4 = !0);

		(
			z$ && console.debug("[WS] CLIENT", $, Q),
			W0.send(P$.serialize({ op: $, ...Q ?? {} }))
		);
	}

	function f$($, Q, J = 60000) {
		return new Promise((Y, Z) => {
			if (r3(Q) || !W0) return Z("Tried to send a packet while the connection is closed");

			let q = Date.now(),
				K = setTimeout(
					() => {
						(t8.delete(q), Z(`Nonce ${q} timed out after ${J}ms`));
					},
					J
				);

			(
				t8.set(q, (W) => {
					(clearTimeout(K), Y(W));
				}),
				z$ && console.debug(`[WS] CLIENT (nonce=${q})`, $, Q),
				W0.send(P$.serialize({ op: $, nonce: q, ...Q ?? {} }))
			);
		});
	}

	var eq = 300, $K = 1000, QK = Y0.url.api;

	async function E4($) {
		try {
			let Q = await fetch(QK + $, { cache: "no-store" });

			if (!Q.ok) return null;

			return await Q.json();
		} catch {
			return null;
		}
	}

	function b1($) {
		if ($ == null) return "—";
		if ($ < 1) return $.toFixed(2) + " ms";
		if ($ < 100) return $.toFixed(1) + " ms";

		return Math.round($) + " ms";
	}

	function i3($) {
		if ($ == null) return "—";
		if ($ < 1024) return `${$} B`;
		if ($ < 1048576) return `${($ / 1024).toFixed(1)} KB`;

		return `${($ / 1024 / 1024).toFixed(1)} MB`;
	}

	function e3($) {
		if ($ == null) return "—";

		return $.toFixed(2) + "%";
	}

	function z8($, Q) {
		if ($ == null) return "—";

		return Q($);
	}

	var h4 = G("div.dev-overlay"),
		h0 = {
			active: !1,
			fps: 0,
			fpsFrameCount: 0,
			fpsWindowStart: performance.now(),
			wsState: "—",
			panel: h4
		};

	function JK($) {
		return ({
			[WebSocket.CONNECTING]: "CONNECTING",
			[WebSocket.OPEN]: "OPEN",
			[WebSocket.CLOSING]: "CLOSING",
			[WebSocket.CLOSED]: "CLOSED"
		})[$] || "—";
	}

	function YK() {
		return `${~~(C.viewport.x2 - C.viewport.x)}x${~~(C.viewport.y2 - C.viewport.y)} px / ${j8.size} chunks`;
	}

	function GK() {
		let $ = performance.memory;

		if (!$) return "n/a";

		let Q = $.usedJSHeapSize ?? 0,
			J = $.totalJSHeapSize ?? 0;

		return `${i3(Q)} / ${i3(J)}`;
	}

	function Q2() {
		if (!h0.active) return;

		h0.fpsFrameCount++;

		let $ = performance.now(),
			Q = $ - h0.fpsWindowStart;

		if (Q >= 1000) (
			h0.fps = Math.round(h0.fpsFrameCount * 1000 / Q),
			h0.fpsFrameCount = 0,
			h0.fpsWindowStart = $
		);

		requestAnimationFrame(Q2);
	}

	function I0($, Q) {
		return G("div.dev-overlay-row", G("span.dev-overlay-label", $), G("span.dev-overlay-value", Q));
	}

	function K5($, ...Q) {
		return G("div.dev-overlay-section", G("div.dev-overlay-section-title", $), ...Q);
	}

	var w4, $2 = 0;

	async function ZK() {
		if (!z$) return "";

		if (!w4 || $2 < Date.now()) (
			$2 = Date.now() + $K,
			w4 = await Promise.all([
				E4("/metrics/loop-lag"),
				E4("/metrics/sendbulk"),
				E4("/metrics/canvas-density")
			])
		);

		let [$, Q, J] = w4;

		return K5("server", I0("loop lag p99 / max", `${z8($?.p99_ms, b1)} / ${z8($?.max_ms, b1)}`), I0("sendBulk last-10s cpu", z8(Q?.last_10s?.cpu_pct_of_window, e3)), I0("sendBulk p99 / max", `${z8(Q?.p99_call_ms, b1)} / ${z8(Q?.max?.call_ms, b1)}`), I0("sendBulk avg fanout", z8(Q?.avg_fanout, (Y) => Y.toFixed(0))), I0("canvas density", z8(J?.density_pct, e3)));
	}

	async function J2() {
		if (!h0.active) return;

		(
			setTimeout(J2, eq),
			h0.wsState = JK(W0?.readyState),
			h0.panel.replaceChildren(G("div.dev-overlay-title", "wall: dev"), await ZK(), K5("ws", I0("state", h0.wsState), I0("connection id", String(M.connectionId)), I0("ping rtt", b1(M.debug.ping)), I0("identified", M.user ? "yes" : "no")), K5("client", I0("fps", String(h0.fps)), I0("memory (jsHeap)", GK()), I0("known users", String(M0.size)), I0("paint remaining", `${M.paintRemaining} (${Math.round(M.paintRemaining / K0)} cans)`)), K5("camera", I0("translation", `${C.x.toFixed(2)}, ${C.y.toFixed(2)}`), I0("zoom", `${C.zoom.toFixed(1)} client / ${C.normalizedZoom.toFixed(1)} normal`), I0("viewport", YK()), I0("cursor", `${M.cursorX}, ${M.cursorY}`)))
		);
	}

	function F5() {
		if (h0.active) return;

		(
			h0.active = !0,
			document.body.append(h4),
			requestAnimationFrame(Q2),
			J2()
		);
	}

	function Y2() {
		if (!h0.active) return;

		(h4.remove(), h0.active = !1);
	}

	var W$ = !1;

	function U8($, Q, J = "") {
		let Y = `s_${$}`,
			Z = G("input", {
				type: "checkbox",
				id: Y,
				checked: !!x.a11y[$],
				onchange() {
					if (Z.checked) x.a11y[$] = !0; else delete x.a11y[$];

					(f1(), N0());
				}
			});

		return G("div.checkbox", Z, G("label.tooltip", Q, { dataset: { tooltip: J }, htmlFor: Y }));
	}

	function W5() {
		let $ = new _("Settings", G("div.settings-modal", G("h3", "Accessibility"), U8("darkTheme", "Dark Theme"), U8("performanceMode", "Performance Mode", `Attempts to reduce the amount of stutters.${x.flags.perfModeAutoEnabled ? " (Recommended)" : ""}`), U8("hideNameplates", "Hide Nameplates", "Shows cursors, but removes names/chat bubbles"), U8("hideCursors", "Hide Other Cursors", "Completely hides all cursors on the canvas"), U8("systemCursor", "Use System Cursor", "Local only. Use this if you have issues with our custom cursor"), U8("hideChatBubbles", "Hide Chat Bubbles", "Do not show chat bubbles next to users. Chat is still available."), U8("devOverlay", "Stats For Nerds"), M.user && R7())),
			Q = $.titleElement.querySelector("button.icon");

		if (Q) Q.onclick = () => $.close(!0);

		return $;
	}

	function f1() {
		let $ = x.a11y;

		if ($.hideCursorKeybind) ($.hideCursorKeybind = !1, $.hideCursors = !1);
		if ((W$ = !!$.performanceMode, $.lowQualityBg)) ($.performanceMode = !0, delete $.lowQualityBg);

		if ((
			document.body.classList.toggle("dark", !!$.darkTheme),
			document.body.classList.toggle("hide-nameplates", !!$.hideNameplates),
			$.hideCursors
		)) K8.remove(); else V$.append(K8);

		if ($.systemCursor) j1(); else E6();
		if ($.performanceMode) q2(); else Z2();
		if ($.devOverlay) F5(); else Y2();
	}

	function G2() {
		if (!f0) return;
		if (x.flags.perfModeAutoEnabled) return;

		(
			x.a11y.performanceMode = !0,
			x.flags.perfModeAutoEnabled = !0,
			N0()
		);
	}

	async function qY($) {
		let Q = new Uint8Array($.length * 5),
			J = new DataView(Q.buffer),
			Y = 0;

		for (let Z of $) if ((
			J.setUint32(Y, Z[0], !0),
			J.setUint8(Y + 4, Z[1]),
			Y += 5,
			W$ && Y % 2500 == 0
		)) await r$();

		return Q;
	}

	function KY($) {
		if (!s5) return;

		return f$(7, { pixels: $ });
	}

	function q3() {
		return f$(9, {}, 1e4);
	}

	function K2($) {
		return f$(10, $, 5000);
	}

	var j5 = 160;

	function m4($) {
		let Q = $ % f, J = Math.floor($ / f);

		N4(Q, J);
	}

	function N4($, Q) {
		l1($ - j5 / 2, Q - j5 / 2, j5, j5);
	}

	async function y0($) {
		let { connId: Q, userId: J, fallbackPos: Y, username: Z } = $;

		if (Q !== void 0 && Q === M.connectionId) return (O$("That's you!"), !1);

		if (Q !== void 0) {
			let q = M0.get(Q);

			if (q && !q.partial && q.lastPos !== void 0) return (m4(q.lastPos), !0);
		}

		if (Y !== void 0) return (m4(Y), !0);

		if (Q !== void 0 || J !== void 0) try {
			let q = await K2({ connId: Q, userId: J });

			if (q.pos != null) return (m4(q.pos), !0);
		} catch {}

		return (
			O$(Z
				? `${Z} isn't on the wall right now.`
				: "That user isn't on the wall right now."),
			!1
		);
	}

	function F2() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = null;

		async function Z(K) {
			if (K) (Y = null, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let W = await mJ({ status: "open", cursor: Y ?? void 0, limit: 25 });

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
						if (!await r(O, A)) return;

						let D = await NJ(K.id, v, F.value.trim() || void 0);

						if (!D.ok) {
							W.replaceChildren(G("p.error.noicon", `${A} failed: ${await d(D)}`));

							return;
						}

						H.remove();
					}
				}),
				X = K.details.user_id,
				P = G("div.mod-flag-samples");

			if (typeof X == "number") (async () => {
				let A = await aJ(X);

				if (!A.ok) return;

				let { samples: v } = await A.json();

				if (!v.length) return;

				let O = v.map((R) => ({
					pixels: C6(new Uint8Array([...atob(R.pixels)].map((D) => D.charCodeAt(0)))),
					label: x0(R.createdAt)
				}));

				P.replaceChildren(G("span.desc", "flagged draws:"), ...O.map((R, D) => {
					let y = T8(R.pixels);

					return (
						y.title = `${R.label} (click to expand)`,
						y.classList.add("mod-clickable-thumb"),
						y.addEventListener("click", () => $7(O, D)),
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
									if (await y0({ userId: X, username: k })) (
										p(),
										N$({ label: "Review Queue", reopen: () => s("review") })
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
				H.append(G("div.mod-review-head", G("b", K.kind), G("span.mod-tag", `x${K.hit_count}`), G("span.desc", E0(K.created_at))), z, P, G("div.details", U6(K.details)), G("div.input", F), G("div.mod-form-row", j("Dismiss", "dismiss", `Dismiss review item #${K.id}?`), j("Mark clean", "mark_clean", `Mark item #${K.id} clean?`), j("Ban", "ban", `Perma-ban the target of item #${K.id}?`)), W),
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

	function W2() {
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

				if (!await r(g.broadcast.confirm, "Broadcast")) return;

				let W = await hJ(Z, q || void 0, !Y.checked);

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

	var B4 = 10;

	function j2($) {
		if ($ <= 0) return 1.1;

		let Q = Math.max(1, Math.min(10, $));

		return Math.round((0.95 - (Q - 1) / 9 * 0.55) * 100) / 100;
	}

	function X2() {
		let $ = G("div.mod-action-msg"),
			Q = G("p.desc.mod-bot-mapping"),
			J = G("p.desc"),
			Y = G("input.box.mod-bot-slider", {
				type: "range",
				min: "0",
				max: String(B4),
				step: "1",
				value: "0"
			}),
			Z = (K) => {
				if (K <= 0) return g.detection.off;

				let W = Math.round(j2(K) * 100);

				return s0(g.detection.current, K, B4, W);
			},
			q = () => {
				Q.replaceChildren(Z(Number(Y.value)));
			};

		return (
			Y.oninput = q,
			(async () => {
				let K = await dJ();

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
					let K = Number(Y.value), W = await oJ(K);

					if (!W.ok) {
						$.replaceChildren(G0(`Save failed: ${await d(W)}`));

						return;
					}

					$.replaceChildren(G("p.success.noicon", g.gwValSaved));
				}
			}))))
		);
	}

	var H2 = 4, X5 = !1;

	function P2($, Q, J, Y, Z) {
		let q = Math.min($, J),
			K = Math.min(Q, Y),
			W = Math.max($, J),
			F = Math.max(Q, Y);

		(q = Math.min(q, f - 1), K = Math.min(K, L0 - 1));

		let H = Math.min(W - q, Z, f - q),
			j = Math.min(F - K, Z, L0 - K);

		return (
			H = Math.max(H, 1),
			j = Math.max(j, 1),
			{ x: q, y: K, width: H, height: j }
		);
	}

	function qK($) {
		let Q = C.rect.width / Q0.width,
			J = C.rect.height / Q0.height;

		return {
			left: C.rect.left + $.x * Q,
			top: C.rect.top + $.y * J,
			width: $.width * Q,
			height: $.height * J
		};
	}

	function H5($) {
		if (X5) return;

		(X5 = !0, M.setTool(0), y$(0));

		let Q = $.maxRegion ?? Math.max(f, L0),
			J = $.color ?? "#ff3b3b",
			Y = G("div.pick-box", { style: { display: "none", outlineColor: J } }),
			Z = $.label ? G("div.pick-mode", $.label) : "",
			q = G("div.pick-readout", $.hint ?? "Click a pixel  ·  Shift+drag to select an area"),
			K = G("div.pick-hint", "Esc or right-click to cancel"),
			W = G("div.pick-overlay", Y, Z, q, K),
			F = null;

		if ($.dimUnpainted) (F = G("div.mod-paint-scrim"), F1.prepend(F));

		let H = !1,
			j = null,
			X = null,
			P = !1,
			k = 0,
			z = 0;

		function A(T) {
			let B = qK(T);

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
			if (!X5) return;

			(
				X5 = !1,
				W.remove(),
				F?.remove(),
				U0.removeEventListener("pointerdown", y, !0),
				U0.removeEventListener("pointermove", w, !0),
				window.removeEventListener("pointerup", h, !0),
				document.removeEventListener("keydown", R, !0),
				U0.removeEventListener("contextmenu", D, !0),
				$.onClose?.()
			);
		}

		function R(T) {
			if (T.key === "Escape") (T.preventDefault(), T.stopPropagation(), O());
		}

		function D(T) {
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
					X = P2(B, N, B, N, Q),
					A(X),
					q.textContent = `${X.width}×${X.height} px`
				);

				return;
			}

			(P = !!$.onPick, k = T.clientX, z = T.clientY);
		}

		function w(T) {
			if (H && j) {
				(T.preventDefault(), T.stopPropagation(), w6(T.x, T.y));

				let [I, S] = _0(T.clientX, T.clientY);

				(
					X = P2(j[0], j[1], I, S, Q),
					A(X),
					q.textContent = `${X.width}×${X.height} px`
				);

				return;
			}

			if (P && Math.hypot(T.clientX - k, T.clientY - z) > H2) P = !1;

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
				if ((P = !1, Math.hypot(T.clientX - k, T.clientY - z) <= H2)) {
					let [B, N] = _0(T.clientX, T.clientY);

					(O(), $.onPick?.(B, N));
				}
			}
		}

		(
			U0.addEventListener("pointerdown", y, !0),
			U0.addEventListener("pointermove", w, !0),
			window.addEventListener("pointerup", h, !0),
			document.addEventListener("keydown", R, !0),
			U0.addEventListener("contextmenu", D, !0),
			u("main").after(W)
		);
	}

	var KK = 500;

	function d1() {
		if (!g0()) return;

		H5({
			label: "Tile Inspector",
			hint: g.inspect.hint,
			maxRegion: KK,
			dimUnpainted: !0,
			onPick: ($, Q) => void FK($, Q),
			onRegion: ($) => void WK($.x, $.y, $.width, $.height)
		});
	}

	async function FK($, Q) {
		let J = Q * f + $, Y = await pJ(J);

		if (!Y.ok) return new _("Tile inspector", G("div.modal", G0(await d(Y)), U$));

		V2(await Y.json(), $, Q);
	}

	function V2($, Q, J) {
		let Y = G("div.modal.mod-tile");

		if ((
			Y.append(G("div.mod-kv", u1("Position", `${Q}, ${J}`), u1("Placed", $.placed_at ? x0($.placed_at) : "unknown"))),
			!$.user
		)) return (
			Y.append(G("p.desc", g.inspect.none)),
			Y.append(G("div.btn-container", O4())),
			void new _("Tile inspector", Y)
		);

		let Z = $.user, q = !!Z.banned_at;

		(
			Y.append(
				G("div.mod-detail-head", G("h3", Z.username), q1(Z.role), G("span.desc", `#${Z.id}`), Z.discord_id ? G("span.mod-tag.discord", "Discord") : null),
				q
					? G("p.warning.noicon", `Banned ${x0(Z.banned_at)}.` + (Z.banned_until ? ` Until ${x0(Z.banned_until)}.` : " Permanent."))
					: G("p.desc", "Not banned."),
				G(
					"div.btn-container",
					G("button.btn", "View user", {
						onclick() {
							s("users", Z.id, { label: "Tile inspector", reopen: () => V2($, Q, J) });
						}
					}),
					O4()
				)
			),
			new _("Tile inspector", Y)
		);
	}

	async function WK($, Q, J, Y) {
		let Z = await xJ($, Q, J, Y);

		if (!Z.ok) return new _("Area breakdown", G("div.modal", G0(await d(Z)), U$));

		M2(await Z.json());
	}

	function M2($) {
		let { region: Q, owned: J, total: Y, owners: Z } = $,
			q = G("div.modal.mod-region");

		if ((
			q.append(G("div.mod-kv", u1("Area", `${Q.width}×${Q.height} at ${Q.x},${Q.y}`), u1("Owned pixels", `${J} / ${Y}`), u1("Distinct owners", String(Z.length)))),
			!Z.length
		)) q.append(G("p.desc", "No owned pixels in this area.")); else q.append(G("div.list.mod-list", ...Z.map((K) => G(
			"div.item.box.outset.mod-region-row",
			{
				onclick() {
					if (K.user_id) s("users", K.user_id, { label: "Area breakdown", reopen: () => M2($) });
				}
			},
			G("b", K.username ?? `#${K.user_id}`),
			G("span.mod-row-meta", `${K.pixels} px`, G("span.desc", `${Math.round(K.pixels / J * 100)}%`))
		))));

		(
			q.append(G("div.btn-container", O4())),
			new _("Area breakdown", q)
		);
	}

	function O4() {
		return G("button.btn", "Close", {
			onclick() {
				(p(), d1());
			}
		});
	}

	function u1($, Q) {
		return G("div.mod-kv-row", G("span.mod-kv-label", $), G("span.mod-kv-value", Q));
	}

	function n$($, Q, J, Y) {
		if (Q == null) return G("span.mod-audit-actor", G("span.desc", `${$}: -`));

		return G(
			"span.mod-audit-actor",
			G("span.desc", `${$}:`),
			J
				? G("span.mod-jump-name.tooltip", J, {
					dataset: { tooltip: g.jumpTo },
					async onclick() {
						if (await y0({ userId: Q, username: J })) (p(), N$(Y));
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

	function jK($) {
		let Q = G("div.mod-wipe-audit");

		if ($.thumbnail) {
			let Z = G("img.mod-wipe-thumb", {
				src: $.thumbnail,
				alt: "Cleared region",
				title: "Click to enlarge"
			});

			(
				Z.addEventListener("click", () => XK($.thumbnail)),
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

	function XK($) {
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

	function R2() {
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
				P = await uJ({
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
			let X = j.action === "wipe_canvas" ? jK(j.details) : G("div.details", U6(j.details)),
				P = { label: "Audit Log", reopen: () => s("audit") };

			return G("div.item.box.outset.mod-audit", G("div.mod-audit-head", G("b", j.action), G("span.desc", E0(j.created_at))), G("div.mod-audit-meta", n$("mod", j.mod_id, j.mod_username, P), n$("target", j.target_id, j.target_username, P)), X);
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

	function z2() {
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

			let F = await BJ(Z.value, Y);

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
						if (!await r(O, A)) return;

						let D = await OJ(W.id, v, H.value.trim() || void 0);

						if (!D.ok) {
							F.replaceChildren(G("p.error.noicon", `${A} failed: ${await d(D)}`));

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
							G("p.desc", n$("from", W.user_id, W.username, k), " ", n$("target", parseInt(X[1]), X[2], k)),
							G("div.details.pre", G("b", X[3]), P && `// ${P}`)
						]
						: [
							G("p.desc", n$("from", W.user_id, W.username, k)),
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

	var HK = 500;

	function a8() {
		if (!g0()) return;

		H5({
			label: "Wipe Canvas Selection",
			hint: g.wipe.hint,
			maxRegion: HK,
			dimUnpainted: !0,
			onRegion: async ($) => {
				if (!await r(`Clear a ${$.width}×${$.height} px area at (${$.x}, ${$.y})? This wipes those pixels for everyone (you can undo right after).`, "Wipe area", "Wipe", "Cancel")) return void a8();

				let J = await gJ($);

				if (!J.ok) return T0(J, "Could not wipe the area");

				let { applied: Y, chunks: Z, undoToken: q } = await J.json();

				new _("Area wiped", G("div.modal", G("p", `Cleared ${Y} pixel(s) across ${Z} chunk(s).`), G("p.desc", g.snapshotDisplayNote), G("div.btn-container", q ? k6(q) : "", G("button.btn", "Close", {
					onclick() {
						(p(), a8());
					}
				}))));
			}
		});
	}

	async function PK($, Q) {
		let J = await fJ($, Q);

		if (!J.ok) return null;

		let Y = new Uint8Array(await J.arrayBuffer()),
			Z = P$.deserialize(Y),
			q = Z.pixels instanceof Uint8Array ? Z.pixels : Z.pixels?.buffer ?? new Uint8Array(),
			K = C6(q);

		return K.length ? K : null;
	}

	function VK($) {
		document.querySelector(".mod-ghost-control")?.remove();

		let Q = $.states.filter((W) => W === D6).length,
			J = $.states.filter((W) => W === L6).length,
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
					(n5(), K.remove());
				}
			})
		);

		document.body.append(K);
	}

	function U2($, Q) {
		let J = G("div.list.mod-list.mod-ph-list"),
			Y = G("div.mod-ph-more"),
			Z = null,
			q = !1,
			K = [],
			W = new Map();

		async function F() {
			if (q) return;

			(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

			let k = await bJ($, Z ? { before: Z } : {});

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

			let A = await PK($, k.id);

			if (A) W.set(k.id, A);

			return A;
		}

		async function j(k) {
			let z = K[k];

			if (!z) return;

			let A = await H(z);

			if (!A) {
				O$("Could not load submission pixels.");

				return;
			}

			let v = A.map(() => o5),
				O = await cJ(A.map((y) => y.pos));

			if (O.ok) {
				let { owners: y, deleted: w } = await O.json();

				v = y.map((h, T) => h === $ ? o5 : w?.[T] ? L6 : D6);
			}

			(p(), iJ(A, v));

			let R = K1(A);

			l1(R.x, R.y, R.width, R.height);

			let D = k + 1 < K.length || !!Z;

			VK({
				states: v,
				username: Q,
				position: `${k + 1} / ${K.length}${Z ? "+" : ""}`,
				onPrev: k > 0 ? () => void j(k - 1) : void 0,
				onNext: D ? () => void X(k) : void 0,
				onBack: () => {
					(
						n5(),
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
				v = G("div.mod-ph-label", G("span", `${k.pixel_count} px`), G("span.desc", E0(k.created_at))),
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
					let R = await H(k);

					if (!R) return;

					let D = K1(R);

					if ((A.replaceChildren(T8(R)), D)) v.append(G("span.desc", `@ ${D.x},${D.y}`));
				})(),
				O
			);
		}

		return (F(), G("div.mod-ph", J, Y));
	}

	function MK($) {
		if ($ === null || !Number.isFinite($) || $ < 0) return null;

		let Q = $ % f, J = $ / f | 0;

		return `@ ${Q},${J}`;
	}

	function k2($, Q) {
		let J = G("div.list.mod-list.mod-ch-list"),
			Y = G("div.mod-ch-more"),
			Z = null,
			q = !1;

		function K(H) {
			y0({ fallbackPos: H }).then((j) => {
				if (!j) return;

				(p(), N$({ label: Q, reopen: () => s("users", $) }));
			});
		}

		async function W() {
			if (q) return;

			(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

			let H = await lJ($, Z ? { before: Z } : {});

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
			let j = MK(H.pos),
				X = j
					? G("button.btn.mod-ch-loc.mod-jump-loc", j, { dataset: { tooltip: g.jumpSent }, onclick: () => K(H.pos) })
					: "";

			return G("div.item.box.outset.mod-ch-row", G("div.mod-ch-text", H.content ?? ""), G("div.mod-ch-meta", G("span.desc", E0(H.timestamp)), X));
		}

		return (W(), G("div.mod-ch", J, Y));
	}

	var o1 = null;

	async function RK() {
		if (o1) return o1;

		return (o1 = await (await m.cursor.data.$get()).json(), o1);
	}

	function S4($) {
		return o1?.find((Q) => Q.id === $)?.name ?? `#${$}`;
	}

	async function D2($ = {}) {
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
				W = G("div.modal-bg.confirm-bg.cursor-pick-bg", G("div.modal-container", G("div.modal-title", G("span", $.title ?? "Select a cursor"), Y$("close", { ariaLabel: "Close", onclick: () => Z(null) })), G("div.modal-content", G("div.inventory.nopad", G("div.scroll.pad", G("div.items", Q.filter((F) => !F.free).map((F) => G(
					"div.item.box.tooltip",
					K.has(F.id) && { className: "owned" },
					{
						dataset: { tooltip: K.has(F.id) ? `${F.name} (owned)` : F.name },
						onclick: () => Z(F.id)
					},
					G("img", { src: b0(F.id), draggable: !1 })
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

	var M$ = f,
		s8 = L0,
		zK = "rgba(8,8,12,0.66)",
		UK = "rgba(255,56,56,0.5)",
		kK = 2,
		DK = 256;

	function L2($) {
		let { ownedPositions: Q } = $,
			J = new Uint8Array(i$ + 7 >> 3);

		for (let E = 0; E < Q.length; E++) {
			let c = Q[E];

			J[c >> 3] |= 1 << (c & 7);
		}

		let Y = (E) => J[E >> 3] >> (E & 7) & 1,
			Z = G("canvas.mod-mask-layer", { width: M$, height: s8 }),
			q = G("canvas.mod-select-layer", { width: M$, height: s8 }),
			K = Z.getContext("2d"),
			W = q.getContext("2d");

		(K.fillStyle = zK, K.fillRect(0, 0, M$, s8));

		for (let E = 0; E < Q.length; E++) {
			let c = Q[E];

			K.clearRect(c % M$, c / M$ | 0, 1, 1);
		}

		(W.fillStyle = UK, V$.append(Z, q));

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
			R = null,
			D = () => $.onChange?.(j.size);

		function y(E, c) {
			if (E < 0 || E >= M$ || c < 0 || c >= s8) return;

			let a = c * M$ + E;

			if (!Y(a) || j.has(a)) return;

			(j.add(a), W.fillRect(E, c, 1, 1));
		}

		function w(E, c) {
			let a = Math.max(1, P >> 1), k0 = a * a;

			for (let X0 = -a; X0 <= a; X0++) {
				let R0 = c + X0;

				if (R0 < 0 || R0 >= s8) continue;

				for (let D0 = -a; D0 <= a; D0++) {
					if (X === "circle" && D0 * D0 + X0 * X0 > k0) continue;

					y(E + D0, R0);
				}
			}
		}

		function h(E, c, a, k0) {
			let X0 = Math.hypot(a - E, k0 - c),
				R0 = Math.max(1, P >> 1),
				D0 = Math.max(1, Math.ceil(X0 / R0));

			for (let m0 = 1; m0 <= D0; m0++) w(Math.round(E + (a - E) * m0 / D0), Math.round(c + (k0 - c) * m0 / D0));
		}

		function T() {
			if (!O || !R) return;

			let E = Math.min(O[0], R[0]),
				c = Math.min(O[1], R[1]),
				a = Math.max(O[0], R[0]),
				k0 = Math.max(O[1], R[1]);

			for (let X0 = 0; X0 < Q.length; X0++) {
				let R0 = Q[X0], D0 = R0 % M$, m0 = R0 / M$ | 0;

				if (D0 >= E && D0 <= a && m0 >= c && m0 <= k0) y(D0, m0);
			}
		}

		function B() {
			return {
				b: C.rect,
				sx: C.rect.width / Q0.width,
				sy: C.rect.height / Q0.height
			};
		}

		function N() {
			if (!O || !R) {
				H.style.display = "none";

				return;
			}

			let { b: E, sx: c, sy: a } = B(),
				k0 = Math.min(O[0], R[0]),
				X0 = Math.min(O[1], R[1]),
				R0 = Math.abs(R[0] - O[0]) + 1,
				D0 = Math.abs(R[1] - O[1]) + 1;

			Object.assign(H.style, {
				display: "block",
				left: `${E.left + k0 * c}px`,
				top: `${E.top + X0 * a}px`,
				width: `${R0 * c}px`,
				height: `${D0 * a}px`
			});
		}

		function I(E, c) {
			if (X === "rect") {
				F.style.display = "none";

				return;
			}

			let { sx: a } = B(), k0 = Math.max(4, P * a);

			Object.assign(F.style, {
				display: "block",
				left: `${E}px`,
				top: `${c}px`,
				width: `${k0}px`,
				height: `${k0}px`,
				borderRadius: X === "circle" ? "50%" : "0"
			});
		}

		function S(E) {
			if (E.button !== 0) return;

			(E.preventDefault(), E.stopPropagation());

			let [c, a] = _0(E.clientX, E.clientY);

			if (X === "rect") (v = !0, O = [c, a], R = [c, a], N()); else (k = !0, z = c, A = a, w(c, a), D());
		}

		function n(E) {
			if (v) {
				(
					E.preventDefault(),
					E.stopPropagation(),
					R = _0(E.clientX, E.clientY),
					N()
				);

				return;
			}

			if (k) {
				(E.preventDefault(), E.stopPropagation());

				let [c, a] = _0(E.clientX, E.clientY);

				(h(z, A, c, a), z = c, A = a, D());

				return;
			}

			I(E.clientX, E.clientY);
		}

		function J0(E) {
			if (v && E.button === 0) {
				(
					E.preventDefault(),
					E.stopPropagation(),
					v = !1,
					T(),
					H.style.display = "none",
					O = R = null,
					D()
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

		let $0 = (E) => E.preventDefault();

		(
			U0.addEventListener("mousedown", S, !0),
			window.addEventListener("mousemove", n, !0),
			window.addEventListener("mouseup", J0, !0),
			document.addEventListener("keydown", l, !0),
			U0.addEventListener("contextmenu", $0, !0)
		);

		let V0 = !1;

		function t() {
			if (V0) return;

			(
				V0 = !0,
				U0.removeEventListener("mousedown", S, !0),
				window.removeEventListener("mousemove", n, !0),
				window.removeEventListener("mouseup", J0, !0),
				document.removeEventListener("keydown", l, !0),
				U0.removeEventListener("contextmenu", $0, !0),
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
				P = Math.max(kK, Math.min(DK, Math.round(E)));
			},

			clearSelection() {
				(j.clear(), W.clearRect(0, 0, M$, s8), D());
			},
			count: () => j.size,
			positions: () => [...j],
			destroy: t
		};
	}

	async function A2($, Q = 0) {
		let J = await CJ($, Q);

		if (!J.ok) return null;

		let Y = new Uint8Array(await J.arrayBuffer()),
			Z = P$.deserialize(Y),
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

	var T2 = [
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
		C2 = T2[0].tools[0];

	async function I2($, Q, J) {
		if (!g0()) return;

		J("Loading this user's pixels…", !0);

		let Y;

		try {
			Y = await A2($);
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

		(p(), LK($, Q, Y));
	}

	function LK($, Q, J) {
		let Y = J,
			Z = G("span.mod-sel-count"),
			q = G("button.btn.mod-sel-delete", "Delete selected"),
			K = G("button.btn", "Clear selection"),
			W = G("span.mod-sel-sizeout", "24px"),
			F = G("input.mod-sel-size", { type: "range", min: "2", max: "256", value: "24" }),
			H = G("div.mod-sel-brush", G("span", "Brush"), F, W);

		H.style.display = "none";

		let j = C2.tool,
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
			let $0 = L2({
				ownedPositions: l.positions,
				onChange: (V0) => k(V0),
				onExit: () => A()
			});

			return ($0.setTool(j), $0.setBrushSize(X), $0);
		}

		let A = () => {
			(P.destroy(), J0.remove(), s("users", $));
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

		let v = G("p.mod-sel-desc", g.wipe.tools[C2.tool]),
			O = [],
			R = T2.map(({ group: l, tools: $0 }) => {
				let V0 = $0.map(({ tool: t, label: E }) => {
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

				return G("div.mod-sel-group", G("span.mod-sel-group-label", l), G("div.mod-sel-group-btns", ...V0));
			});

		O[0].classList.add("active");

		let D = G("p.mod-sel-warn"),
			y = G("div.mod-range-track"),
			w = G("div.mod-range-thumb");

		y.append(w);

		let h = G("div.mod-range-label"),
			T = Y.truncated ? G("div.mod-range", D, y, h) : "",
			B = () => Math.max(0, Y.total - Y.cap);

		function N(l) {
			return Math.max(28, l * Math.min(1, Y.cap / Y.total));
		}

		function I(l) {
			let $0 = y.clientWidth || 260,
				V0 = N($0),
				t = Math.max(0, $0 - V0),
				E = B();

			(
				w.style.width = `${V0}px`,
				w.style.left = `${E === 0 ? 0 : t * (l / E)}px`
			);

			let c = Math.min(Y.total, l + Y.cap);

			h.textContent = `Viewing pixels ${(l + 1).toLocaleString()}–${c.toLocaleString()} of ${Y.total.toLocaleString()}`;
		}

		function S(l) {
			let $0 = y.clientWidth || 260,
				V0 = Math.max(0, $0 - N($0));

			return V0 === 0 ? 0 : Math.round(l / V0 * B());
		}

		if (T) {
			D.textContent = s0(g.wipe.warn, Y.total.toLocaleString(), Y.cap.toLocaleString());

			let l = !1, $0 = 0, V0 = 0;

			(
				w.onpointerdown = (E) => {
					(
						E.preventDefault(),
						l = !0,
						$0 = E.clientX,
						V0 = parseFloat(w.style.left || "0")
					);

					try {
						w.setPointerCapture(E.pointerId);
					} catch {}
				},

				w.onpointermove = (E) => {
					if (!l) return;

					let c = y.clientWidth || 260,
						a = Math.max(0, c - N(c)),
						k0 = Math.max(0, Math.min(a, V0 + (E.clientX - $0)));

					w.style.left = `${k0}px`;

					let X0 = S(k0), R0 = Math.min(Y.total, X0 + Y.cap);

					h.textContent = `Viewing pixels ${(X0 + 1).toLocaleString()}–${R0.toLocaleString()} of ${Y.total.toLocaleString()}`;
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

			let $0 = null;

			try {
				$0 = await A2($, l);
			} catch {}

			if (!$0) {
				I(Y.offset);

				return;
			}

			(Y = $0, P.destroy(), P = z(Y), k(0), I(Y.offset));
		}

		(
			q.onclick = async () => {
				let l = P.positions();

				if (!l.length) return;
				if (!await r(s0(g.wipe.confirm, l.length, Q), "Delete selected strokes", "Delete", "Cancel")) return;

				let V0 = await AJ($, l);

				if (!V0.ok) return e("Could not delete selected pixels", await d(V0));

				let { pixelsWiped: t, undoToken: E } = await V0.json();

				(
					P.destroy(),
					J0.remove(),
					new _("Strokes deleted", G("div.modal", G("p", s0(g.wipe.removed, t, Q)), G("p.desc", g.snapshotDisplayNote), G(
						"div.btn-container",
						E ? k6(E) : "",
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

		let J0 = G("div.mod-select-overlay", G("div.mod-sel-head", `Deleting ${Q}'s pixels`), T, G("div.mod-sel-tools", ...R), v, H, G("div.mod-sel-info", Z), G("div.mod-sel-actions", q, K, G("button.btn", "Cancel", { onclick: () => A() })), G("p.mod-sel-hint", "Right-drag to pan · scroll to zoom · Esc to cancel"));

		(k(0), document.body.append(J0));
	}

	function _4($, Q) {
		let J = G("div.list", "Loading..."), Y = !1;

		new _("Moderation", G("div.clans-modal", Q && y4(Q), z1($, !0), G(
			"details.clan-member-list.box",
			G("summary", "Members", {
				async onclick() {
					if (Y) return;

					Y = !0;

					let Z = await vJ($.id);

					if (!Z.ok) return (Y = !1, J.replaceChildren(G("p.error.noicon", await d(Z))));

					let q = await Z.json();

					J.replaceWith(G("div.list", q.map((K, W, F) => [
						G("a.link", K.username, {
							onclick() {
								s("users", K.id, { label: $.name, reopen: () => _4($, Q) });
							}
						}),
						W < F.length - 1 && ", "
					])));
				}
			}),
			J
		)));
	}

	var E2 = 50, CK = ["user", "moderator", "admin"];

	function v4($) {
		let Q = G("div.list.mod-list"),
			J = G("div.mod-detail"),
			Y = G("div.mod-status"),
			Z = "";

		async function q(R) {
			(Z = R, Y.replaceChildren("Searching..."));

			let D = await RJ(R);

			if (R != Z) return;

			if (!D.ok) {
				Y.replaceChildren(G0(await d(D)));

				return;
			}

			let { users: y } = await D.json();

			(Y.replaceChildren(), K(y));
		}

		function K(R) {
			if (!R.length) {
				Q.replaceChildren(G("p.desc", "No users found."));

				return;
			}

			Q.replaceChildren(...R.map((D) => G(
				"div.item.box.outset.mod-row",
				{
					onclick() {
						W(D.id);
					}
				},
				G("b", D.username),
				G("span.mod-row-meta", `#${D.id}`, q1(D.role), D.ban && G("span.mod-tag.banned", "banned"), D.mute && G("span.mod-tag.muted", "muted"), Array.isArray(D.flagged) && G("span.mod-tag.flagged", D.flagged.length > 1 ? `flagged x${D.flagged.length}` : "flagged"))
			)));
		}

		async function W(R, D, y = !1) {
			J.replaceChildren(G("p.desc", "Loading..."));

			let w = await zJ(R);

			if (!w.ok) {
				J.replaceChildren(G0(await d(w)));

				return;
			}

			let { user: h, cursors: T } = await w.json();

			if ((H(h, T, D), y && h.username && v.value !== h.username)) (v.value = h.username, q(h.username));
		}

		function F(R, D, y) {
			R.replaceChildren(G(y ? "p.success.noicon" : "p.error.noicon", D));
		}

		function H(R, D, y) {
			let w = R.id,
				h = G("div.mod-action-msg"),
				T = typeof R.ban == "object" ? R.ban : null,
				B = typeof R.mute == "object" ? R.mute : null,
				N = Array.isArray(R.flagged) ? R.flagged : null,
				I = !!R.excluded_from_leaderboard,
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

			let J0 = (t, E, c) => {
					let a = G("input.box", { type: "text", placeholder: "Reason (optional)" }),
						k0 = G("select.box.outset", d5.map((X0, R0) => G("option", X0.label, { value: String(R0), selected: R0 == 0 })));

					return G("div.mod-form-sanction", G("div.input", a), G("div.mod-form-row", k0, G("button.btn", t, {
						async onclick() {
							let X0 = d5[Number(k0.value)],
								R0 = X0.seconds == null ? "permanently" : `for ${X0.label}`;

							if (!await r(`${t} ${R.username} ${R0}?`, `${t} user`)) return;

							let m0 = await E(a.value.trim(), X0.seconds ?? void 0);

							if (!m0.ok) {
								F(h, `${t} failed: ${await d(m0)}`, !1);

								return;
							}

							await S({ text: `${t} applied.`, undo: c });
						}
					})));
				},
				l = (t, E, c, a, k0) => G("button.btn", t, {
					async onclick() {
						if (!await r(E, t)) return;

						let R0 = await c();

						if (!R0.ok) {
							F(h, `${t} failed: ${await d(R0)}`, !1);

							return;
						}

						let D0 = "", m0;

						try {
							let w5 = await R0.clone().json();

							if (typeof w5.pixelsCleared == "number") D0 = ` (${w5.pixelsCleared} pixels cleared)`;

							m0 = w5.undoToken;
						} catch {}

						await S({
							text: a + D0 + (k0 ? ` ${k0}` : ""),
							undo: m0 ? () => R6(m0) : void 0
						});
					}
				}),
				$0 = G("div.mod-sessions"),
				V0 = n1();

			J.replaceChildren(G(
				"div.mod-detail-inner",
				G(
					"div.mod-detail-head",
					G("h3.tooltip.mod-jump-name", R.username, {
						dataset: { tooltip: "Click to jump to this user's cursor" },
						async onclick() {
							if (await y0({ userId: w, username: R.username })) (p(), N$({ label: R.username, reopen: () => s("users", w) }));
						}
					}),
					q1(R.role),
					G("span.desc", `#${R.id}`)
				),
				G(
					"div.mod-kv",
					A("Created At", E0(R.created_at)),
					A("Country", j6(R.country_code || "")),
					A("Paint", `${Math.floor(R.paint / K0)} cans (${R.paint} px)`),
					A("Coins", `${Math.floor(R.coins)} \uD83E\uDE99`),
					A("Px changed", String(R.stats.pixels_changed)),
					A("Px visible", String(R.stats.paint_visible)),
					R.discord_id
						? A("Discord", G("a.link", R.discord_username || "<Unknown Name>", {
							target: "_blank",
							href: `https://discord.com/users/${R.discord_id}`
						}))
						: "",
					R.clan && A("Clan", G("a.link", R.clan.name, {
						onclick() {
							_4(R.clan, { label: R.username, reopen: () => s("users", R.id) });
						}
					})),
					"email" in R && A("Email", R.email || "-")
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
							s("review", void 0, { label: R.username, reopen: () => s("users", w) });
						}
					}))
					: G("p.desc", "Not flagged."),
				h,
				G("div.mod-section", G("b", "Ban"), T
					? l("Unban", `Unban ${R.username}?`, () => c5(w), "User unbanned.")
					: J0("Ban", (t, E) => kJ(w, t, E), () => c5(w))),
				G("div.mod-section", G("b", "Mute"), B
					? l("Unmute", `Unmute ${R.username}?`, () => b5(w), "User unmuted.")
					: J0("Mute", (t, E) => DJ(w, t, E), () => b5(w))),
				G(
					"div.mod-section",
					G("b", "Leaderboard"),
					I
						? G("p.warning.noicon", "Hidden from the leaderboard.")
						: G("p.desc.mod-hint", "Hides this user from the users board and from clan/country totals."),
					I
						? l("Show on leaderboard", `Show ${R.username} on the leaderboard again?`, () => f5(w, !1), "User restored to the leaderboard.")
						: l("Hide from leaderboard", `Hide ${R.username} from the leaderboard?`, () => f5(w, !0), "User hidden from the leaderboard.")
				),
				G("div.mod-section", G("b", "Strokes"), G("p.desc.mod-hint", g.user.delete.desc), G("div.mod-form-row", l("Delete All User's Strokes", s0(g.user.delete.confirm, R.username), () => LJ(w), "Deleted the user's strokes.", g.snapshotDisplayNote), G("button.btn", "Select Strokes to Delete...", {
					onclick() {
						I2(w, R.username, (t, E) => z(h, t, E));
					}
				}))),
				G("div.mod-section", G("b", "Paint history"), G("p.desc.mod-hint", g.user.draws), U2(R.id, R.username)),
				G("div.mod-section", G("b", "Chat history"), G("p.desc.mod-hint", g.user.messages), k2(R.id, R.username)),
				G("div.mod-section", G("b", "Paint"), X(R, h, S)),
				G("div.mod-section", G("b", "Cursors"), P(R, D, h, S)),
				G("div.mod-section", G("b", "Message"), j(R, h)),
				V0 && G("div.mod-section", G("b", "Role"), k(R, h, S)),
				V0 && G(
					"div.mod-section",
					G("b", "Sessions"),
					G("button.btn", "Load sessions", {
						async onclick() {
							$0.replaceChildren(G("p.desc", "Loading..."));

							let t = await UJ(w);

							if (!t.ok) {
								$0.replaceChildren(G0(await d(t)));

								return;
							}

							let E = await t.json();

							if (!E.length) {
								$0.replaceChildren(G("p.desc", "No sessions."));

								return;
							}

							$0.replaceChildren(G("div.list.mod-list", ...E.map((c) => G("div.item.box.outset.mod-session", G("span", `#${c.id}`), G("span", c.ip || "no ip"), G("span.desc", "seen ", E0(c.last_verified_at))))));
						}
					}),
					$0
				)
			));
		}

		function j(R, D) {
			let y = G("textarea.box", {
				placeholder: `Message to ${R.username}...`,
				rows: 2,
				maxLength: 1000
			});

			return G("div.mod-form", G("div.input", y), G("div.mod-form-row", G("button.btn", "Send message", {
				async onclick() {
					let w = y.value.trim();

					if (!w) {
						z(D, "Message can't be empty.", !1);

						return;
					}

					let h = await wJ(R.id, w);

					if (!h.ok) {
						z(D, `Message failed: ${await d(h)}`, !1);

						return;
					}

					(y.value = "", z(D, "Message sent.", !0));
				}
			})));
		}

		function X(R, D, y) {
			let w = G("input.box", { type: "number", min: "1", max: String(E2), value: "10" }),
				h = (T) => G("button.btn", `Reset ${T}`, {
					async onclick() {
						if (!await r(`Reset ${R.username}'s ${T}? (current: ${Math.floor(R[T])})`)) return;

						let N = await IJ(R.id, T);

						if (!N.ok) return z(D, await d(N), !1);

						await y({ text: `Reset ${T}.` });
					}
				});

			return G(
				"div.mod-form-row",
				w,
				G("button.btn", "Give Cans", {
					async onclick() {
						let T = Math.max(1, Math.min(E2, Math.floor(Number(w.value) || 0)));

						if ((
							w.value = String(T),
							!await r(`Give ${T} can${T > 1 ? "s" : ""} to ${R.username}?`, "Give cans")
						)) return;

						let N = await TJ(R.id, T);

						if (!N.ok) {
							z(D, `Give cans failed: ${await d(N)}`, !1);

							return;
						}

						await y({ text: `Gave ${T} can${T > 1 ? "s" : ""}.` });
					}
				}),
				h("paint"),
				h("coins")
			);
		}

		function P(R, D, y, w) {
			let h = D.length ? D.map((T) => S4(T)).join(", ") : "None unlocked.";

			return G("div", G("p.desc.mod-hint", `Unlocked: ${h}`), G("div.mod-form-row", G("button.btn", "Give a cursor...", {
				async onclick() {
					let T = await D2({ title: `Give a cursor to ${R.username}`, owned: D });

					if (T == null) return;

					let B = S4(T);

					if (!await r(`Give the "${B}" cursor to ${R.username}?`, "Give cursor")) return;

					let I = await EJ(R.id, T);

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
							? `${R.username} already has the "${B}" cursor.`
							: `Gave the "${B}" cursor.`
					});
				}
			})));
		}

		function k(R, D, y) {
			let w = R.role,
				h = G("select.box.outset", CK.map((T) => G("option", T, { value: T, selected: T == R.role })));

			return G("div.mod-form-row", h, G("button.btn", "Set role", {
				async onclick() {
					let T = h.value;

					if (T == R.role) return;

					if (!await r(`Change ${R.username}'s role to "${T}"?`, "Change role")) {
						h.value = R.role;

						return;
					}

					let N = await l5(R.id, T);

					if (!N.ok) {
						(
							z(D, `Role change failed: ${await d(N)}`, !1),
							h.value = R.role
						);

						return;
					}

					await y({ text: `Role set to ${T}.`, undo: () => l5(R.id, w) });
				}
			}));
		}

		function z(R, D, y) {
			R.replaceChildren(G(y ? "p.success.noicon" : "p.error.noicon", D));
		}

		function A(R, D) {
			return G("div.mod-kv-row", G("span.mod-kv-label", R), G("span.mod-kv-value", D));
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

			v.onkeydown = (R) => {
				if (R.key == "Enter") (clearTimeout(O), q(v.value.trim()));
			},
			q(""),
			$ !== void 0
		)) W($, void 0, !0);

		return G("div.mod-users", G("div.mod-users-left", G("div.input.mod-search", v), Y, Q), J);
	}

	var AK = ($) => ({
		onclick() {
			s("users", $, { label: "Referrals", reopen: () => s("referrals") });
		}
	});

	function w2() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = 0;

		async function Z(K) {
			if (K) (Y = 0, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let W = await _J(Y);

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
					G("div.mod-review-head", G("b", K.code), !K.verified && G("span.mod-tag.flagged", "Not verified"), K.flagged && G("span.mod-tag.banned", "Flagged"), E0(K.created_at)),
					G("p.desc", n$("created by", K.user_id, K.username, W), ` · ${K.uses} uses`),
					G(
						"div.mod-form-row",
						G("button.btn", "List Users", {
							async onclick() {
								let j = await (await yJ(K.user_id)).json();

								(
									j.sort((X, P) => P.created_at - X.created_at),
									F.replaceChildren(G("div.details.pre", !j.length && "None", j.map((X, P) => [
										G("span", `${X.country_code} `, G("a.link", X.username, AK(X.id)), " (", E0(X.created_at, jJ(X.created_at)), ")"),
										P < j.length - 1 && "; "
									])))
								);
							}
						}),
						!K.verified && G("button.btn", "Verify", {
							async onclick() {
								if (!await r(s0(g.referral.confirmVerify, K.username))) return;

								let X = await u5(K.code, "verify");

								if (!X.ok) {
									F.replaceChildren(G("p.error.noicon", await d(X)));

									return;
								}

								(K.verified = !0, K.flagged = !1, H.replaceWith(q(K)));
							}
						}),
						G("button.btn", "Delete", {
							async onclick() {
								if (!await r(s0(g.referral.confirmDelete, K.username))) return;

								let X = await u5(K.code, "delete");

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

	function h2() {
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
				let q = await nJ();

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
					let q = Number(J.value), K = await tJ(q);

					if (!K.ok) {
						$.replaceChildren(G0(await d(K)));

						return;
					}

					$.replaceChildren(G("p.success.noicon", g.gwValSaved));
				}
			}))))
		);
	}

	var g = {}, g4 = !1;

	async function B2() {
		if (g4 || !g0()) return;

		g4 = !0;

		let $ = await m.mod.locale.$get();

		if (!$.ok) return (g4 = !1, T0($, "Could not load mod locale"));

		let Q = await $.json();

		for (let J in Q) g[J] = Q[J];
	}

	function g0() {
		let $ = M.user?.role;

		return $ === "moderator" || $ === "admin";
	}

	function n1() {
		return M.user?.role === "admin";
	}

	var TK = new Set(["review", "broadcast", "botconfig"]);

	function m2($) {
		if ($ === "inspect") return (p(), d1(), !0);
		if ($ === "wipe") return (p(), a8(), !0);

		return !1;
	}

	function N2($) {
		switch ($) {
			case "users":
				return v4();

			case "review":
				return F2();

			case "audit":
				return R2();

			case "feedback":
				return z2();

			case "referrals":
				return w2();

			case "broadcast":
				return W2();

			case "botconfig":
				return X2();

			case "misc":
				return h2();

			case "inspect":

			case "wipe":
				throw new Error(`mod tool tab "${$}" has no panel`);
		}
	}

	function y4($) {
		return G("div.mod-back", G("button.btn.mod-back-btn", `↩ Back to ${$.label}`, {
			onclick() {
				$.reopen();
			}
		}));
	}

	async function O2($) {
		let Q = await m.mod.users.idFromName.$get({ query: { name: $ } });

		if (!Q.ok) return T0(Q, "Could not fetch user");

		let J = await Q.json();

		s("users", J.id);
	}

	function s($ = "users", Q, J) {
		if (!g0()) return;
		if ((G1(), m2($))) return;

		let Y = G("div.pad.mod-body");

		if (J) Y.append(y4(J));

		Y.append($ === "users" ? v4(Q) : N2($));

		let Z = Object.keys(g.tabLabels).filter((j) => n1() || !TK.has(j)),
			q = P5(Z.map((j) => ({
				label: g.tabLabels[j],
				active: j == $,
				action() {
					if (m2(j)) return;

					(W(j), Y.replaceChildren(N2(j)));
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
				let j = await SJ();

				if (!j.ok) return;

				let { total: X } = await j.json();

				if (X > 0) H.append(G("span.mod-tab-dot.tooltip", {
					dataset: { tooltip: `${X} open feedback item${X === 1 ? "" : "s"}` }
				}));
			} catch {}
		})();

		new _("Moderation", G("div.mod-modal.nopad", q, Y));
	}

	var IK = ($) => Math.max(Math.min($ * 50 + 1500, 1e4), 2000);

	function _2($, Q) {
		let J = $ ? r8 : t1;

		if ((J.prepend(Q), J.childElementCount >= 200)) J.children[200]?.remove();
	}

	function $3($, Q, J, Y, Z, q = !1, K) {
		let W = $ == M.connectionId,
			F = Y ?? M.user.username,
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
					Z && G("b", m$(Z)),
					F,
					g0()
						? {
							dataset: { tooltip: "Click to open mod panel" },
							onclick: () => void O2(Y)
						}
						: {
							dataset: { tooltip: "Click to jump to the user!" },
							onclick: () => void y0({ connId: $, fallbackPos: J, username: F })
						},
					W && { className: "self" }
				),
				G("span", Q)
			);

		if (Q.split(/\s+/).includes(M.user.username)) H.classList.add("important");
		if (K !== void 0) H.dataset.uid = String(K);

		_2(q, H);
	}

	function Q3($) {
		for (let Q of [t1, r8]) a0(`p.box[data-uid="${$}"]`, Q).forEach((J) => J.remove());
	}

	function S2($, Q, ...J) {
		_2(Q, G("p.box.local", $ && { className: "error" }, G("span", J)));
	}

	function J3($, Q) {
		if (!$.element || x.a11y.hideChatBubbles) return;

		let J = G("p", Q);

		(
			$.element.querySelector(".chat-bubble")?.append(J),
			setTimeout(() => J.remove(), IK(Q.length))
		);
	}

	async function y2($, Q) {
		let J = await f$(6, { message: $, isGlobal: Q }, 5000);

		if ("error" in J) {
			let Y = J;

			if (Y.error == "muted") S2(!0, Q, `You are muted. (expires: ${X6(Y.until || null)})`); else if (Y.error == "chatCooldown") (
				V5(Y.until),
				S2(!0, Q, Y.until
					? "Global chat is on cooldown!"
					: "Global chat is disabled.")
			);
		}

		if (!J.message) return;
		if (J.cooldown !== void 0) V5(J.cooldown);

		G7(J.message);
	}

	function v2() {
		if (C.normalizedZoom <= k8) return (e("You need to zoom in to chat locally!"), !0);

		return !1;
	}

	var i8 = !1,
		t1 = G("div.list"),
		r8 = G("div.list"),
		g2 = G("div.top-bar"),
		k1 = G("div.chat-log", g2, r8),
		x4 = !1,
		a1 = !1;

	function v8() {
		(
			g2.replaceChildren(G("p#player-count", `${A0(M.onlinePlayers + M.onlineViewers, "player")} online`), G(
				"div.box.tabs",
				G("button.btn.tooltip", "Local", i8 && { className: "active" }, {
					dataset: { tooltip: "Nearby Cursors Only" },
					onclick: () => {
						(x4 = !1, p2());
					}
				}),
				G("button.btn.tooltip", "Global", !i8 && { className: "active" }, {
					dataset: { tooltip: "All Online Users" },
					onclick: () => {
						(x4 = !0, x2());
					}
				}),
				G("button#pin-chat-btn.btn.tooltip", G("img", { src: "/static/icon/tool/pin.png", draggable: !1, alt: "Pin" }), a1 && { className: "primary" }, {
					onclick() {
						a1 = !a1;

						let $ = k1.parentElement;

						if (a1) $.style.setProperty("display", "block", "important"); else $.style.removeProperty("display");

						v8();
					},

					dataset: {
						tooltip: a1
							? "Chat is pinned (stays on screen)"
							: "Chat is not pinned (auto-hides)"
					}
				})
			)),

			a0("div.chat-input-box").forEach(($) => {
				$.classList.toggle("global", !i8);
			})
		);
	}

	function p2() {
		if (v2()) return;

		(i8 = !0, r8.replaceWith(t1), v8());
	}

	function x2() {
		(i8 = !1, t1.replaceWith(r8), v8());
	}

	function c2() {
		if (x4) return;
		if (C.normalizedZoom <= k8) x2(); else p2();
	}

	var s1 = 0;

	function EK($) {
		if ($ === void 0) $ = 0;
		if ((s1 = $, !$)) return $;

		let Q = Math.round(($ - Date.now()) / 1000);

		if (Q <= 0) return (s1 = 0, 0);

		return (s1 = $, Q);
	}

	function V5($) {
		let Q = EK($), J = Q === null ? "inf" : `${Q}s`;

		a0("div.chat-input-box").forEach((Y) => {
			if (Q == 0) delete Y.dataset.cooldown; else Y.dataset.cooldown = J;
		});
	}

	setInterval(
		() => {
			if (s1) V5(s1);
		},
		500
	);

	var wK = /^can i ha[sz] cursor pl[zs]\??$/i;

	function QQ($ = !1) {
		let Q = !1,
			J,
			Y = G("input#chat-input-field.input.box", {
				type: "text",
				spellcheck: !1,
				maxLength: F6,
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
			Z = Y$("tool/send", {
				id: "tool-send-btn",
				ariaLabel: "Send Message",
				async onclick() {
					let K = Y.value.slice(0, F6).trim();

					if (!K || Q) return;

					try {
						if ((
							Q = !0,
							Y.readOnly = !0,
							q.style.opacity = "0.5",
							wK.test(K) && !x.flags.plzCursor
						)) {
							if (!await b$({ code: "CAN_I_HAS_CURSOR" })) {
								(
									new _("plz?", G("p", "yes u may haz cursor")),
									x.flags.plzCursor = !0,
									N0()
								);

								return;
							}
						}

						(await y2(K, !i8), Y.value = "");
					} finally {
						(
							await J6(500),
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

	function a7() {
		return (
			v8(),
			G("div.input.chat-box.container", G("div.popup.box.outset.chat-log-wrapper", k1), QQ())
		);
	}

	function p4($, Q = !0) {
		let J = u("input#chat-input-field");

		if (!J) return;

		let Y = J.value, Z = Y && Y.at(-1) != " ";

		if ((J.value = `${Y}${Z ? " " : ""}${$} `.slice(0, F6), Q)) J.focus();
	}

	var _6 = 1.5,
		k8 = 0.8,
		Q0 = G("canvas", { width: f, height: L0 }),
		f2 = "/static/brick-background.jpg",
		hK = "/static/brick-background-hi.webp",
		f4 = G("img.canvas-background", { fetchPriority: "high", src: f2, draggable: !1 }),
		R$ = null,
		r1 = !1,
		mK = 0.8;

	function l2() {
		if (R$ || x.a11y.performanceMode || f0) return;

		(R$ = new Image(), R$.decoding = "async", R$.src = hK);
	}

	var u2 = window.requestIdleCallback ?? (($) => setTimeout($, 800));

	u2(l2);

	function NK() {
		if (r1) return;
		if (C.zoom < mK) return;
		if (!R$ || !R$.complete || R$.naturalWidth === 0) return;

		(f4.src = R$.src, r1 = !0);
	}

	var Z2 = () => r1 || R$ || u2(l2);

	function q2() {
		if (!r1) return;

		(f4.src = f2, r1 = !1, R$ = null);
	}

	var F1 = G("div.paint-layers", N1, e6, Q0),
		V$ = G("div.canvas-container", f4, F1),
		U0 = G("div.canvas-wrapper", V$),
		u0 = Q0.getContext("2d", { willReadFrequently: !0 }),
		C = {
			x: 0,
			y: 0,
			zoom: 1,
			normalizedZoom: 1,
			rect: Q0.getBoundingClientRect(),
			viewport: { x: 0, y: 0, x2: 0, y2: 0 }
		},
		b2 = "";

	function D$($, Q, J) {
		if (b2 != J) (b2 = J, u0.fillStyle = J);

		u0.fillRect($, Q, 1, 1);
	}

	var BK = 1920;

	function OK() {
		C.zoom = Math.max(C.zoom, e8());

		let $ = Q0.width * C.zoom,
			Q = Q0.height * C.zoom,
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

	function l0() {
		if ((
			OK(),
			V$.style.setProperty("--zoom", C.zoom.toString()),
			V$.style.transform = `translate(${C.x}px, ${C.y}px) scale(${C.zoom})`,
			C.rect = Q0.getBoundingClientRect(),
			V$.style.imageRendering = C.rect.width >= window.innerWidth && C.zoom > 1 ? "pixelated" : "optimizeQuality",
			C.normalizedZoom = C.zoom / (window.innerWidth / BK),
			c2(),
			C.normalizedZoom <= k8
		)) document.body.classList.remove("cursors-visible"); else document.body.classList.add("cursors-visible");

		(
			iY({
				x: C.rect.left,
				y: C.rect.top,
				w: window.innerWidth,
				h: window.innerHeight,
				zoom: C.rect.width / Q0.width
			}),
			NK(),
			C.viewport = UQ(),
			x.camera.zoom = C.zoom,
			x.camera.x = C.x,
			x.camera.y = C.y,
			N0()
		);
	}

	var c4 = null;

	function M5() {
		if (c4) return;

		c4 = requestAnimationFrame(() => {
			(c4 = null, l0());
		});
	}

	function e8() {
		return Math.max(window.innerWidth / Q0.width, window.innerHeight / Q0.height);
	}

	function d2() {
		if (x.camera.zoom != 0) {
			(
				C.zoom = x.camera.zoom,
				C.x = x.camera.x,
				C.y = x.camera.y,
				l0()
			);

			return;
		}

		(
			C.zoom = e8(),
			l0(),
			C.x = window.innerWidth / 2 - C.rect.width / 2,
			C.y = window.innerHeight / 2 - C.rect.height / 2,
			l0()
		);
	}

	function l1($, Q, J, Y, Z = 0.6) {
		let q = Math.min(window.innerWidth * Z / Math.max(J, 1), window.innerHeight * Z / Math.max(Y, 1)),
			K = Math.min(Math.max(q, e8()), 40);

		(C.zoom = K, l0());

		let W = C.rect.width / Q0.width,
			F = C.rect.left + ($ + J / 2) * W,
			H = C.rect.top + (Q + Y / 2) * W;

		(
			C.x += window.innerWidth / 2 - F,
			C.y += window.innerHeight / 2 - H,
			l0()
		);
	}

	var b4 = !1;

	async function o2($, Q, J = 60, Y = 160) {
		if (b4) return !1;

		b4 = !0;

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
				l1(X - k / 2, P - z / 2, k, z, 1),
				await J6(16.666666666666668)
			);
		}

		return (b4 = !1, !0);
	}

	window.addEventListener("resize", M5);

	var n2 = {
			stat_pixels_changed: "Pixels Changed",
			stat_paint_visible: "Paint Visible",
			stat_member_count: "User Count"
		},
		l4 = { users: "Users", clans: "Clans", countries: "Countries" },
		u4 = {
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

	var SK = {
			users: "You're",
			clans: "Your clan is",
			countries: "Your country is"
		},
		_K = {
			stat_member_count: H0,
			stat_pixels_changed: H0,
			stat_paint_visible: W6
		},
		yK = {
			users: ($, Q) => [
				G("b.box", $.clan_name && G("b.clan-label", m$($.clan_name)), $.name),
				G("span.box", Q)
			],
			clans: ($, Q) => [G("b.box", $.name), G("span.box", Q)],
			countries: ($, Q) => [G("b.box", j6($.name)), G("span.box", Q)]
		};

	async function i1($, Q, J = 0) {
		q0();

		let Y = await m.leaderboard.$get({ query: { category: $, stat: Q, page: (J || 0).toString() } });

		if (!Y.ok) return T0(Y, "Could not load the leaderboard");

		let Z = await Y.json();

		new _("Leaderboard", G(
			"div.leaderboard-modal.nopad",
			P5(Object.keys(l4).map((q) => ({
				label: l4[q],
				active: q == $,
				action() {
					i1(q, u4[q][0]);
				}
			}))),
			G(
				"div.pad",
				G(
					"select.box.outset",
					{
						oninput(q) {
							let K = q.target.value;

							i1($, K, J);
						}
					},
					u4[$].map((q) => G("option", n2[q], { value: q, selected: Q == q }))
				),
				typeof Z.position == "number" && Z.ownValue !== 0 && G("p.desc", `${SK[$]} #${H0(Z.position + 1)}!`),
				G("div.list", Z.leaderboard.map((q, K) => G("div.item.box.outset", G("div.box", `${K + 1 + J * 10}`), yK[$](q, _K[Q](q.value))))),
				G(
					"div.btn-container",
					G("a.link", "<<", {
						onclick() {
							if (J == 0) return;

							i1($, Q, J - 1);
						}
					}),
					G("b", `Page ${H0(J + 1)}`),
					G("a.link", ">>", {
						onclick() {
							if (Z.leaderboard.length < 10) return;

							i1($, Q, J + 1);
						}
					})
				)
			)
		));
	}

	function t2() {
		i1("users", "stat_paint_visible", 0);
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

	var z5 = [
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
		a2 = z5.length - 1;

	function $1($ = 0) {
		let Q = z5[$],
			J = z5[$ - 1],
			Y = z5[$ + 1],
			Z = $ + 1,
			q = Z <= a2 ? `Guidebook [${Z}/${a2}]` : "Guidebook";

		if (!x.seenGuidebook) (x.seenGuidebook = !0, N0());

		new _(q, G("div.info.tutorial", G("h3", Q.title || Q.name), Q.content, G("div.btn-container", J && G("a.link.prev", `<< ${J.name}`, { onclick: () => $1($ - 1) }), G("a.link.next", `${Y?.name || "Continue"} >>`, { onclick: () => Y ? $1($ + 1) : p() })))).onClose(() => {
			if (!Y) b$({ code: "READ_GUIDEBOOK" });
		});
	}

	function s2() {
		let $ = window.innerWidth <= 800;

		new _("Keybinds", G(
			"div.info.keybinds",
			$ && G("p.warning.noicon", "These are probably not helpful if you're on mobile..."),
			G("div.section", G("p", "Canvas"), G("div.box.outset", G("div.box", "Move"), G("div.box", "WASD / Right Click")), G("div.box.outset", G("div.box", "Move (hand only)"), G("div.box", "Left Click")), G("div.box.outset", G("div.box", "Zoom"), G("div.box", "Wheel / +-"))),
			G("div.section", G("p", "Tools"), G("div.box.outset", G("div.box", "Hand Tool"), G("div.box", "H")), G("div.box.outset", G("div.box", "Brush Tool"), G("div.box", "B or X")), G("div.box.outset", G("div.box", "Chat"), G("div.box", "T or Enter"))),
			G("div.section", G("p", "Drawing"), G("div.box.outset", G("div.box", "Compare Mode"), G("div.box", "M")), G("div.box.outset", G("div.box", "Undo"), G("div.box", "Ctrl+Z")), G("div.box.outset", G("div.box", "Redo"), G("div.box", "Ctrl+Y")), G("div.box.outset", G("div.box", "Pick Color"), G("div.box", "P")), G("div.box.outset", G("div.box", "Last Used Color"), G("div.box", "1, 2, 3, ...")), G("div.box.outset", G("div.box", "Color Palette"), G("div.box", "C"))),
			G("div.section", G("p", "Other"), G("div.box.outset", G("div.box", "Hide Cursors"), G("div.box", "K")), G("div.box.outset", G("div.box", "Reply To User (chat)"), G("div.box", "Shift+Click / Dblclick")), !$ && !x.flags.konamiCursor && M.user && Math.random() > 0.8 && G("div.box.outset", G("div.box", "Konami Code"), G("div.box", "↑↑↓↓←→←→BA", {
				style: { fontWeight: "bold", lineHeight: "34px", letterSpacing: "1px" }
			}))),
			U$
		));
	}

	var U5 = [
		{
			label: "[S]ocial",
			shortcut: "S",
			menu: [
				{ label: "[O]nline Users", action: () => Y3() },
				{ label: "[L]eaderboard", action: () => t2() }
			]
		},

		{
			label: "[H]elp",
			shortcut: "H",
			menu: [
				{ label: "[G]uidebook", action: () => $1() },
				{ label: "[K]eybinds", action: () => s2() },
				{ label: "[F]eedback / Bug Reporting", action: () => A7() },
				{
					label: "[P]rivacy Policy & ToS",
					action: () => {
						window.open("/privacy.html", "_blank");
					}
				}
			]
		}
	];

	var e1 = !1,
		r2 = () => [
			{
				label: "[U]ser",
				shortcut: "U",
				menu: [
					{ label: `Hi, ${M.user?.username}!` },
					{},
					{ label: "[S]ettings", shortcut: "S", action: W5 },
					{ label: "[C]lan Settings", shortcut: "C", action: U1 },
					{ label: "Cursor [I]nventory", shortcut: "I", action: _8 },
					{ label: "Share [W]ebsite", shortcut: "W", action: D1 },
					{},
					{
						label: "[L]ogout",
						shortcut: "l",
						async action() {
							if (await r("Are you sure you want to log out?")) SY();
						}
					}
				]
			},

			{
				label: "[A]ction",
				shortcut: "A",
				menu: [
					{ label: "[U]ndo", keybindText: `${r5}+Z`, action: () => y6() },
					{
						label: "[R]edo",
						keybindText: `${r5}+${V1 ? "Shift+Z" : "Y"}`,
						action: () => v6()
					}
				]
			},
			...U5,
			...g0()
				? [
					{
						label: "[M]od",
						shortcut: "M",
						menu: () => [
							{ label: "Users", action: () => s("users") },
							{ label: "Audit Log", action: () => s("audit") },
							...n1()
								? [
									{ label: "Review Queue", action: () => s("review") },
									{ label: "Broadcast", action: () => s("broadcast") }
								]
								: [],
							{},
							{ label: "Tile Inspector", action: () => d1() },
							{ label: "Wipe Canvas Selection", action: () => a8() },
							{},
							{
								label: `[${e1 ? "ON" : "OFF"}] Hide Own Cursor`,
								action() {
									(M.cursorX = 0, M.cursorY = 0, e1 = !e1);
								}
							}
						]
					}
				]
				: []
		];

	var d0 = !1,
		C$ = 0,
		A$ = 0,
		i2 = [0, 2, 3, 4],
		a$ = !1,
		o4 = !1,
		vK = "1234567890";

	document.body.addEventListener("keydown", ($) => {
		if (F0 || $.target != document.body) return;

		if ((V1 ? $.metaKey : $.ctrlKey) && ($.key == "z" || $.key == "Z" || $.key == "y" || $.key == "u")) {
			if ((
				$.preventDefault(),
				d0 = !1,
				$.key == "z" || $.key == "Z" && !$.shiftKey
			)) y6(); else v6();

			return !1;
		} else if ($.key == "h") u("#tool-hand").click(); else if ($.key == "x" || $.key == "b") u("#tool-spray").click(); else if ($.key == "c") g6(); else if ($.key == "-") t4(1, 0.2); else if ($.key == "=") t4(-1, 0.2); else if ($.key == "m") u("#tool-preview").click(); else if ($.key == "k") {
			let J = x.a11y;

			if ((J.hideCursors = !J.hideCursors, f1(), J.hideCursors)) J.hideCursorKeybind = !0;

			N0();
		} else if ($.key == "t" || $.key == "Enter") setTimeout(
			() => {
				let J = u("#tool-chat");

				if (J.checkVisibility()) J.click(); else u(".chat-box input").focus();
			},
			10
		); else if (vK.includes($.key)) {
			let J = parseInt($.key) || 10;

			o7(J);
		} else if ($.key == "p") {
			let J = p7(..._0(C$, A$));

			if (J) Z8(J, !0);
		} else if (gK.has($.key.toLowerCase())) (d0 = !1, t$.add($.key.toLowerCase()), xK());
	});

	var gK = new Set(["w", "a", "s", "d"]),
		pK = 900,
		t$ = new Set(),
		D5 = null,
		n4 = 0;

	function xK() {
		if (D5 != null) return;

		(n4 = performance.now(), D5 = requestAnimationFrame(QG));
	}

	function cK() {
		(t$.clear(), a$ = !1);
	}

	function QG($) {
		if (F0 || !t$.size) {
			D5 = null;

			return;
		}

		let Q = Math.min($ - n4, 100) / 1000;

		n4 = $;

		let J = pK * C.zoom * Q, Y = 0, Z = 0;

		if (t$.has("w")) Z += 1;
		if (t$.has("s")) Z -= 1;
		if (t$.has("a")) Y += 1;
		if (t$.has("d")) Y -= 1;

		if (Y || Z) {
			let q = Math.hypot(Y, Z);

			(C.x += Y / q * J, C.y += Z / q * J, d0 = !1, l0());
		}

		D5 = requestAnimationFrame(QG);
	}

	document.body.addEventListener("keyup", ($) => {
		t$.delete($.key.toLowerCase());
	});

	window.addEventListener("blur", cK);

	window.addEventListener("beforeunload", ($) => {
		if (MQ()) return ($.preventDefault(), $.returnValue = !0, !1);
	});

	function e2($, Q) {
		if (M.activeTool != 1 || C.normalizedZoom < _6) return;
		if (M.openAt && Date.now() + M.clockOffset < M.openAt) return;
		if (M.paintRemaining + M.localPaintIncrement <= 0) return RQ();

		(d0 = !0, C$ = $, A$ = Q);
	}

	function d4($, Q) {
		if (a$ || C.normalizedZoom < k8) return;
		if (x.a11y.hideCursors || e1) return;

		let [J, Y] = _0($, Q);

		(M.cursorX = J, M.cursorY = Y);
	}

	function $G($, Q) {
		(a$ = !0, C$ = $, A$ = Q);
	}

	function JG($, Q) {
		if (a$) (C.x += $ - C$, C.y += Q - A$, l0());

		(C$ = $, A$ = Q);
	}

	var YG = 200;

	function t4($, Q = 0.1) {
		let J = C.zoom,
			Y = C.zoom + Q * -Math.sign($) * C.zoom;

		(
			C.zoom = Math.max(Math.min(Y, YG), e8()),
			GG(C.zoom / J, C$, A$)
		);
	}

	function GG($, Q, J) {
		(
			d0 = !1,
			C.x = Q - (Q - C.x) * $,
			C.y = J - (J - C.y) * $,
			l0(),
			r0()
		);
	}

	function a4() {
		if (o4) {
			if (M.paintRemaining > 0) h7(); else O6();

			o4 = !1;
		}

		if (d0 && i0.length) x7();

		(a$ = !1, d0 = !1, k5 = null);
	}

	document.body.addEventListener("mousemove", ($) => JG($.x, $.y));

	var k5 = null;

	document.body.addEventListener("touchmove", ($) => {
		if ($.touches.length == 1) {
			if (L5) return;

			JG($.touches[0].clientX, $.touches[0].clientY);
		} else if ($.touches.length == 2) {
			(
				$.preventDefault(),
				$.stopImmediatePropagation(),
				d0 = !1,
				a$ = !1
			);

			let Q = $.touches[0],
				J = $.touches[1],
				Y = Math.hypot(J.clientX - Q.clientX, J.clientY - Q.clientY);

			if (k5 != null) {
				let Z = Y / k5, q = C.zoom * Z;

				(
					C.zoom = Math.max(Math.min(q, YG), e8()),
					GG(Z, (Q.clientX + J.clientX) / 2, (Q.clientY + J.clientY) / 2)
				);
			}

			return (k5 = Y, !1);
		}
	});

	document.body.addEventListener("mouseup", a4);
	document.body.addEventListener("touchend", a4);
	document.body.addEventListener("touchcancel", a4);

	function RQ() {
		o4 = !0;
	}

	function ZG() {
		(
			Q0.addEventListener("mousedown", ($) => {
				if ($.button == 0) e2($.x, $.y);
			}),

			Q0.addEventListener(
				"touchstart",
				($) => {
					if ($.touches.length == 1) e2($.touches[0].clientX, $.touches[0].clientY);
				},
				{ passive: !0 }
			),
			U0.addEventListener("mousemove", ($) => d4($.x, $.y)),
			U0.addEventListener(
				"touchmove",
				($) => {
					if ($.touches.length == 1) d4($.touches[0].clientX, $.touches[0].clientY); else if ($.touches.length == 2) $.preventDefault();
				},
				{ passive: !1 }
			),

			U0.addEventListener("mousedown", ($) => {
				if ($.button != 0 || i2.includes(M.activeTool)) $G($.x, $.y);
			}),

			U0.addEventListener(
				"touchstart",
				($) => {
					if ($.touches.length == 1 && i2.includes(M.activeTool)) {
						let Q = $.touches[0].clientX,
							J = $.touches[0].clientY;

						(d4(Q, J), $G(Q, J));
					} else if ($.touches.length == 2) $.preventDefault();
				},
				{ passive: !1 }
			),

			U0.addEventListener(
				"wheel",
				($) => {
					if ($.ctrlKey) $.preventDefault();

					(d0 = !1, t4($.deltaY, 0.1));
				},
				{ passive: !1 }
			),

			U0.addEventListener("dblclick", async ($) => {
				if (C.zoom > 1) return;

				let [Q, J] = _0($.x, $.y);

				o2(Q, J);
			})
		);
	}

	function qG() {
		(g7(), d2(), JY(), ZG());
	}

	var s$ = !1,
		FG = Math.min(window.innerWidth, window.innerHeight) <= 800 && window.matchMedia("(pointer: coarse)").matches && document.fullscreenEnabled,
		bK = 25000000;

	function fK($, Q, J, Y, Z) {
		if (typeof Q != "string" || !Q?.length) return "Missing name";
		if (typeof J != "string" || !J?.length) return "Missing location";
		if ($ && $.length > 127) return "Identification is too long";
		if (Q.length > 255) return "Name is too long";
		if (J.length > 255) return "Location is too long";
		if (!Y || !Z) return "Missing file";
		if (!Y.startsWith("image/")) return "Invalid file type (expected an image)";
		if (Z > bK) return `File is too large (max 25MB; got ${Math.floor(Z / 1000 / 1000)}MB)`;
	}

	var D8 = -1;

	function lK() {
		let $ = u("input#s__id").value,
			Q = u("input#s__name").value,
			J = u("input#s__location").value,
			Y = u("input#s__upload").files,
			Z = Y ? Y.item(0) : null,
			q = fK($, Q, J, Z?.type, Z?.size);

		if (q) return (alert(q), !1);
	}

	function uK($) {
		let Q = new Intl.DateTimeFormat([], { day: "2-digit", month: "2-digit", year: "numeric" }).format($.submitted_at),
			J = G("div.image");

		if ($.image_file.match(/\.(mp4|webm|ogg|mov)$/i)) J.append(G("video", {
			style: { width: "100%", height: "100%" },
			controls: !0,
			src: `${Y0.url.signalArchive}/static/uploads/${$.image_file}`,
			autoplay: !1,
			preload: "none",
			loop: !1,
			muted: !1
		})); else (
			J.style.backgroundImage = `url(${Y0.url.signalArchive}/static/uploads/${$.image_file})`,
			J.style.imageRendering = "auto"
		);

		return G("div.window.wpost", G("div.title", G("p", `SIGNAL #${$.num_id}`), G("div.buttons", G("button", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", J, G("div.info", G("p", G("span.label", "SIGNAL NAME"), G("b", $.name)), G("p", G("span.label", "LOCATION"), G("b", $.location)), G("p", G("span.label", "TRANSMITTED"), G("b", Q)))));
	}

	async function WG() {
		(D8 = 0, await Promise.all([dK(), jG()]));
	}

	var s4 = !1;

	async function jG() {
		if (s4) return;

		s4 = !0;

		let $ = G("div.f", "Loading...");

		u(".sightings .posts").append($);

		let J = await (await fetch(`${Y0.url.signalArchive}/fetch?tag=&after=${D8}&limit=${D8 ? 10 : 4}&at=${Date.now()}`)).json();

		if ((
			u(".sightings .posts").append(...J.map(uK)),
			D8 += J.length,
			$.remove(),
			s4 = !1,
			!J.length
		)) (
			u(".sightings .posts").append(G("div.f", D8 ? "You have reached the end." : "Nothing here yet...")),
			u(".sightings .more").style.display = "none"
		); else u(".sightings .more").style.display = "";
	}

	async function dK() {}

	async function oK() {
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
		Q1 = G(
			"div.main",
			XG,
			G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " signal_archive.exe"), G("p", "Loading the signal archive...")),
			G("div.header", G("h1", "SIGNAL ARCHIVE"), G("p", "RECENTLY TRANSMITTED")),
			G("div.post-container", G("div.posts"), G("div.more", G("button", "LOAD MORE", { onclick: jG }))),
			G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " submit_signal.exe"), G("p", "Loading submission form...")),
			G("div.window.wsubmit", G("div.title", G("p", "submit_signal.exe")), G("div.content", G("h1", "DID YOU FIND SOMETHING?"), G("p", "Submit a signal to the archive"), G(
				"form",
				{
					action: `${Y0.url.signalArchive}/submit`,
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
					onchange: oK
				}),
				G(
					"div.buttons",
					G("input", {
						type: "submit",
						onclick: () => lK(),
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
		A5 = G("img", { src: "/static/icon/arrow-down.png", draggable: !1 });

	function nK() {
		if (s$) MG(); else VG();

		A5.style.transform = s$ ? "rotate(180deg)" : "";
	}

	var C5 = G("div.sightings", G("div.mobile-scroll-btn", { onclick: nK }, G("button", A5)), Q1);

	function HG($, Q) {
		let J = $ + Q;

		return J > 0 ? `${H0(J)} online` : "";
	}

	function W3($, Q) {
		let J = u("#wall-online-count");

		if (J) J.textContent = HG($, Q);
	}

	var L5 = !1;

	function PG($ = !1) {
		(
			sessionStorage.setItem("wall:view", $ ? "wall" : "archive"),
			document.body.append(C5),
			Q1.inert = !0
		);

		let Q = u("main");

		if ((
			Q.prepend(G("div.modal-title.wall-title", G("span", G("h3", "the_wall.exe"), G("span.wall-online#wall-online-count", HG(M.onlinePlayers, M.onlineViewers))), G("button.btn", "Full Screen", { style: { color: "var(--text)" }, onclick: KG }))),
			!f0
		)) (
			Q.addEventListener("mouseenter", MG),
			C5.addEventListener("mouseenter", VG)
		); else Q.classList.add("mobile");

		if (!$) r4(); else KG();
	}

	function VG() {
		if (s$) return;
		if ((s$ = !0, !f0)) (document.body.classList.remove("noscroll"), Q1.inert = !1);

		if ((
			XG.scrollIntoView({ behavior: f0 ? "auto" : "smooth", block: "center" }),
			D8 < 0
		)) WG();
	}

	function MG() {
		if (!s$) return;
		if ((s$ = !1, !f0)) (document.body.classList.add("noscroll"), Q1.inert = !0);

		u("main").scrollIntoView({ behavior: f0 ? "auto" : "smooth", block: "center" });
	}

	function KG() {
		if ((
			L5 = !1,
			sessionStorage.setItem("wall:view", "wall"),
			u("main").classList.remove("minimized"),
			C5.style.display = "none",
			M5(),
			f0
		)) (
			document.body.classList.add("noscroll"),
			Q1.inert = !0,
			s$ = !1,
			A5.style.transform = ""
		);

		if (FG) document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
	}

	function r4() {
		if ((
			L5 = !0,
			u("main").classList.add("minimized"),
			sessionStorage.setItem("wall:view", "archive"),
			C5.style.display = "",
			M5(),
			f0
		)) {
			if ((
				document.body.classList.remove("noscroll"),
				Q1.inert = !1,
				s$ = !1,
				A5.style.transform = "",
				D8 < 0
			)) WG();
		}

		if (FG) document.exitFullscreen().catch(() => {});
	}

	var i4 = G("div.actionbar", { role: "toolbar" });

	function RG($) {
		let Q = G("button.abtn.btn.action", Y6($.label), { ariaLabel: $.label.replace(/[\[\]]/g, "") });

		if ($.active) Q.classList.add("active");

		let J = () => {
			if (!$.menu) return;

			let Y = Q.getBoundingClientRect(),
				Z = typeof $.menu == "function" ? $.menu() : $.menu;

			qJ(Z, Y.x, Y.y + Y.height);
		};

		return (
			Q.onclick = () => {
				if (!S5()) J();
				if ($.action) $.action();
			},

			Q.onmouseover = () => {
				if ($.action) h$();
				if (S5()) J();
				if (document.activeElement) document.activeElement.blur();
			},
			Q
		);
	}

	function e4($) {
		i4.replaceChildren(...$.map(RG), G("div.right-side", G("b.fil", "FILIAN IS LOST"), G(
			"button.btn.icon.minimize-btn",
			{
				ariaLabel: "Minimize",
				onclick() {
					r4();
				}
			},
			G("img", { src: "/static/icon/close.png", draggable: !1 })
		)));
	}

	function P5($) {
		return G("div.navbar.custom", G("div.actionbar.custom", $.map(RG)));
	}

	var J$ = null, $6 = null, T5 = "";

	function tK($, Q, J) {
		if (!$) return;
		if (J$) I5();

		let Y = G("div#tooltip-text.tooltip-popup", { textContent: $, role: "tooltip" });

		(document.body.append(Y), J$ = Y, zG(Q, J));
	}

	function zG($, Q) {
		if (!J$) return;

		let J = J$.getBoundingClientRect(),
			Y = $ + J.width > window.innerWidth ? window.innerWidth - J.width : $,
			Z = Q + J.height > window.innerHeight ? window.innerHeight - J.height : Q;

		(J$.style.left = `${Y}px`, J$.style.top = `${Z}px`);
	}

	function I5() {
		if (!J$) return;
		if ($6) $6.removeAttribute("aria-describedby");

		(J$.remove(), J$ = null, $6 = null, T5 = "");
	}

	function E5($, Q, J) {
		if (!$.classList || !$.classList.contains("tooltip")) return;

		let Y = $.dataset.tooltip;

		if (!Y) return;

		let Z = typeof Q == "number" && typeof J == "number";

		if (!Z) {
			let q = $.getBoundingClientRect();

			(Q = q.x, J = q.y);
		}

		if (J$) {
			if ($6 != $) return (I5(), E5($, Q, J));
			if (T5 != Y) (J$.textContent = Y, T5 = Y);
			if (Z) zG(Q, J);

			return;
		}

		(
			tK(Y, Q, J),
			$6 = $,
			T5 = Y,
			$.setAttribute("aria-describedby", "tooltip-text")
		);
	}

	document.addEventListener("mouseover", ($) => E5($.target, $.x, $.y));
	document.addEventListener("mousemove", ($) => E5($.target, $.x, $.y));
	document.addEventListener("focusin", ($) => E5($.target));
	window.addEventListener("mouseout", I5);
	window.addEventListener("click", I5);

	var UG = [
		{
			label: "[L]og In",
			shortcut: "L",
			action() {
				F8();
			}
		},
		{ label: "[S]ettings", shortcut: "S", action: W5 },
		...U5
	];

	var kG = G("div.hotbar.login-bar", G(
		"p",
		G("a.link", "Log in", {
			tabIndex: 1,
			onclick() {
				F8();
			}
		}),
		" to draw & chat with ",
		G("b#online-player-counter", "[...]"),
		"+ players!"
	));

	var aK = "G-XXXXXXXXXX", DG = !1;

	function LG() {
		let $ = Y0.gaMeasurementId;

		if (DG || !$ || $ === aK) return;

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

	async function sK() {
		return await (await m.canvas.snapshot.bson.$get({ query: { at: Math.floor(Date.now() / 1000) } })).arrayBuffer();
	}

	function CG() {
		if (Y0.url?.ws) return;

		let $ = sK(), Q = new Image();

		(
			Q.decoding = "async",
			Q.crossOrigin = "anonymous",
			Q.onload = async () => {
				(
					u0.clearRect(0, 0, Q0.width, Q0.height),
					u0.drawImage(Q, 0, 0)
				);

				let J = P$.deserialize(new Uint8Array(await $));

				for (let Y of J.changes) h8(Y.pos, Y.color);
			},

			Q.src = m.canvas.snapshot.png.$url({
				query: { at: Math.floor(Date.now() / Y0.canvas.snapshotInterval) }
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

	function rK() {
		if (a$) return;

		let [$, Q] = TG(), J = new URL(location.href);

		if ((J.hash = `${$},${Q}`, J.hash != AG)) (history.replaceState(null, "", J), AG = J.hash);
	}

	function iK() {
		if (!location.hash) return;

		let [$, Q] = location.hash.slice(1).split(",").map(Number);

		if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q)) return;
		if ($ < 0 || Q < 0 || $ >= f || Q >= L0) return;

		let [J, Y] = TG();

		if ($ != J || Q != Y) N4($, Q);
	}

	function IG() {
		(iK(), setInterval(rK, 1000));
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
		Q6 = 0;

	document.addEventListener("keydown", async ($) => {
		if (x.flags.konamiCursor || !M.user) return;

		if ($.key == EG[Q6]) {
			if ((Q6++, Q6 >= EG.length)) {
				Q6 = 0;

				let Q = await b$({ code: "SUPER_SECRET_KONAMI_CODE" });

				if (Q) return e(Q);

				(
					new _("Code Activated", G("p", "Enjoy your free cursor!")),
					x.flags.konamiCursor = !0,
					N0()
				);
			}
		} else Q6 = 0;
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
	F3();

	async function eK() {
		let $ = new URLSearchParams(location.search);

		if ((
			V$.append(K8),
			document.body.append(S$, G("main", i4, U0, PQ)),
			qG(),
			CG(),
			f1(),
			IG(),
			G2(),
			await OY(),
			M.user
		)) {
			if ((e4(r2()), B8(), F$.seed(M.user), t7(), !x.seenGuidebook)) setTimeout($1, 1000);
			if (g0()) B2();
		} else if ((M.setTool(3), e4(UG), c6(kG), x$(), B8(), $.has("ssu"))) mY($.get("ssu"));

		let Q = $.has("wall") || sessionStorage.getItem("wall:view") === "wall";

		if ((PG(Q), $.has("debug"))) F5();
	}

	var wG = () => eK().catch(($) => console.error("boot failed", $));

	if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", wG); else wG();
})();