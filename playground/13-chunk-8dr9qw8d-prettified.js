(() => {
	var {
			defineProperty: YJ,
			getOwnPropertyNames: _G,
			getOwnPropertyDescriptor: yG
		} = Object,
		gG = Object.prototype.hasOwnProperty;

	var GJ = new WeakMap(),
		vG = ($) => {
			var Q = GJ.get($), J;

			if (Q) return Q;

			if ((
				Q = YJ({}, "__esModule", { value: !0 }),
				$ && typeof $ === "object" || typeof $ === "function"
			)) _G($).map((Y) => !gG.call(Q, Y) && YJ(Q, Y, { get: () => $[Y], enumerable: !(J = yG($, Y)) || J.enumerable }));

			return (GJ.set($, Q), Q);
		};

	var pG = ($, Q) => () => (($ && (Q = $($ = 0)), Q));
	var xG = {};
	var _5 = "", y5 = "";

	var ZJ = pG(() => {
		(async function $() {
			let J = await (await fetch("/.last-bundle")).text(),
				[Y, Z] = J.split(",");

			if (_5 && _5 != Y) location.reload(); else if (y5 && y5 != Z) {
				let K = (await (await fetch("/")).text()).match(/href="(\.\/chunk-[a-z\d]+.css)"/)?.[1],
					W = document.querySelector("link[rel=stylesheet]");

				if (!K || !W) return (
					console.error("Couldn't reload stylesheet without reloading..."),
					location.reload()
				);

				W.href = `${K}?at=${Date.now()}`;
			}

			(_5 = Y, y5 = Z, setTimeout($, 1000));
		})();
	});

	var u = ($, Q) => (Q ?? document).querySelector($),
		n0 = ($, Q) => (Q ?? document).querySelectorAll($),
		Z6 = ($) => new Promise((Q) => setTimeout(Q, $)),
		q6 = () => new Promise(($) => setTimeout($, 1)),
		qJ = ($, Q) => {
			for (let J in $) {
				let Y = $[J];

				if (typeof Y == "object" && !Array.isArray(Y) && J in Q) qJ(Y, Q[J]); else if (J.startsWith("data-") && Q.setAttribute) Q.setAttribute(J, Y); else if (J.startsWith("--") && Q.setProperty) Q.setProperty(J, Y); else if (J == "className" && Q.classList) Q.classList.add(Y); else Q[J] = Y;
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
			if (K instanceof HTMLElement || typeof K == "string") q.append(K); else if (typeof K == "number") q.append(String(K)); else if (typeof K == "object") qJ(K, q);
		}

		return q;
	}

	var V$ = !1;

	if (V$) ZJ();

	function KJ($) {
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

	function g5($) {
		if (!navigator.clipboard) return KJ($);

		navigator.clipboard.writeText($).catch((Q) => {
			(console.error(Q), KJ($));
		});
	}

	var Q$ = ($, Q) => G("button.btn.icon", Q, G("img", {
			src: `/static/icon/${$}.png`,
			alt: `${$} icon`,
			style: { pointerEvents: "none" },
			draggable: !1
		})),
		K6 = ($) => $.split(/(\[.\])/).map((Q, J) => J % 2 ? G("u", Q.slice(1, -1)) : Q),
		v5 = ($, Q, J, Y, Z) => G(
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
		F6 = ($, Q) => G(
			"button.btn.swatch.icon",
			G("img", {
				alt: `${$} icon`,
				src: `/static/icon/${$}.png`,
				draggable: !1
			}),
			Q
		),
		W6 = ($, Q) => {
			return ($.dataset.tooltip = Q, $.classList.add("tooltip"), $);
		};

	var FJ = ($, Q = 2) => {
		let J = 10 ** Q, Y = Math.floor($ % 1 * J);

		return [
			G("span", Math.floor($).toString()),
			Y >= 0 && G("span", { style: { fontSize: "0.6em" } }, `.${Y}`.replace(/0+$/, ""))
		];
	};

	var p5 = !1,
		J$ = { options: [] },
		x5 = () => !!J$.element;

	function I$() {
		if (!J$.element || p5) return;

		(
			J$.options = [],
			J$.element.remove(),
			J$.element = void 0,
			n0(".ctx").forEach(($) => $.remove())
		);
	}

	function WJ($, Q, J) {
		I$();

		let Y = G("div.ctx");

		(J$.element = Y, J$.options = []);

		for (let W of $) {
			if (!W.label) {
				Y.append(G("hr"));

				continue;
			}

			let F = G("div.option", G("span", K6(W.label)), W.keybindText && G("span", W.keybindText), {
				ariaLabel: W.label.replace(/[\[\]]/g, ""),
				onclick(H) {
					if ((I$(), W.action)) W.action(H);
				}
			});

			(Y.append(F), J$.options.push({ ...W, _element: F }));
		}

		document.body.append(Y);

		let Z = Y.getBoundingClientRect(),
			q = Q + Z.width > window.innerWidth ? window.innerWidth - Z.width : Q,
			K = J + Z.height > window.innerHeight ? window.innerHeight - Z.height : J;

		(
			Y.style.left = `${q}px`,
			Y.style.top = `${K}px`,
			J$.x = q,
			J$.y = K,
			p5 = !0,
			setTimeout(() => p5 = !1)
		);
	}

	window.addEventListener("click", I$);
	window.addEventListener("resize", I$);
	window.addEventListener("blur", I$);

	window.addEventListener("contextmenu", ($) => {
		($.preventDefault(), I$());
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
		cG = new Map();

	for (let $ = 0; $ < Z0.length; $++) {
		let Q = Z0[$], J = parseInt(Q.hex.slice(1), 16);

		(Q.idx = $, Q.color = J, cG.set(J, $));

		let Y = J >> 16 & 255,
			Z = J >> 8 & 255,
			q = J & 255;

		(
			Q.rgb = [Y, Z, q],
			Q.u24 = q << 16 | Z << 8 | Y,
			Q.u32 = 4278190080 | Q.u24
		);
	}

	var jJ = 30000, XJ = 15000;
	var HJ = 1, PJ = 5, r = 100;

	var j6 = 60,
		p0 = 42,
		b = 6000,
		C0 = 4200,
		r$ = 25200000;

	var X6 = 3615,
		c5 = 24,
		F0 = 1000,
		b5 = Math.floor(100),
		Z1 = { SignUp: 2000, TimePassed: 1000, ReferralCode: 1000 };

	var H6 = 4000, P6 = 80;
	var VJ = 2130706432, A8 = 0.5;

	function t0($, ...Q) {
		return $.replace(/{(\d)+}/g, (J, Y) => Q[parseInt(Y)] || "[?]");
	}

	function H0($) {
		return new Intl.NumberFormat().format($);
	}

	function V6($) {
		let Q = ($ / r$ * 100).toFixed(2);

		return `${H0($)} (${Q}%)`;
	}

	function f5($) {
		return new Intl.DateTimeFormat(["en"], { timeZone: "UTC", minute: "numeric", second: "2-digit" }).format($);
	}

	function bG($) {
		return String.fromCodePoint(...$.toUpperCase().split("").map((Q) => 127397 + Q.charCodeAt(0)));
	}

	function R6($) {
		if ($.length != 2) return "-";

		try {
			let Q = new Intl.DisplayNames(["en"], { type: "region" }).of($);

			return `${bG($)} ${Q || $}`;
		} catch {
			return "Unknown";
		}
	}

	function RJ($) {
		if (Date.now() - $ < 86400000) return new Date($).toLocaleTimeString(); else return new Date($).toLocaleDateString();
	}

	function T8($) {
		let Q = Math.floor($ / F0);

		return `${Q} spray can${A0(Q)}`;
	}

	function A0($, Q) {
		let J = $ == 1 ? "" : "s";

		return Q ? `${H0($)} ${Q}${J}` : J;
	}

	var fG = /\s|\/|[A-Z].*[A-Z]/,
		lG = /[A-Z]{2,}(?=[A-Z][a-z]|$)|[A-Z]?[a-z]+|[A-Z]+|\d+/g;

	function uG($) {
		let Q = $.trim();

		if (Q.length <= 8 && !fG.test(Q)) return Q;

		let J = Q.replace(/'s\b/gi, "").match(lG) || [];

		if (J.length === 1) {
			let Y = J[0], Z = (/^[A-Z]+$/).test(Y) ? 6 : 8;

			return Y.length <= Z ? Y : Y[0];
		}

		return J.map((Y) => (/^\d+$/).test(Y) ? Y : Y[0]).join("");
	}

	function E$($) {
		return `[${uG($).slice(0, 6)}]`;
	}

	var q1 = ($) => Math.floor($ * 10) / 10;

	function M6($) {
		if ($ == null) return "never";

		let Q = $ - Date.now(),
			J = new Intl.RelativeTimeFormat(["en"], { numeric: "auto" }),
			Y = 60000,
			Z = 60 * Y,
			q = 24 * Z;

		if (Q < Z) return J.format(q1(Q / Y), "minute"); else if (Q < q) return J.format(q1(Q / Z), "hour");

		return J.format(q1(Q / q), "day");
	}

	var q0 = {
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

	var U6 = null;

	function w$($) {
		(
			K1(),
			U6 = G(
				"div.mod-return",
				G("button.btn.mod-return-go", `↩ Resume: ${$.label}`, {
					onclick() {
						(K1(), $.reopen());
					}
				}),
				G("button.btn.mod-return-x", "✕", { ariaLabel: "Dismiss", onclick: () => K1() })
			),
			document.body.append(U6)
		);
	}

	function K1() {
		(U6?.remove(), U6 = null);
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
				F = G("div.modal-bg.confirm-bg", G("div.modal-container", G("div.modal-title", G("span", Q), Q$("close", { ariaLabel: "Close", onclick: () => K(!1) })), G("div.modal-content", G("div.modal", G("p", $), G("div.btn-container", G("button.btn", J, { onclick: () => K(!0) }), G("button.btn", Y, { onclick: () => K(!1) }))))));

			(
				F.addEventListener("click", (H) => {
					if (H.target == F) K(!1);
				}),
				document.addEventListener("keydown", W, !0),
				document.body.append(F)
			);
		});
	}

	var W0 = null,
		z6 = "",
		i$ = G("button.btn", "Close", { onclick: p }),
		R$ = G("div.btn-container", i$);

	function p($ = !1) {
		if (!W0) return;
		if (!W0.close($)) return;

		W0 = null;
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

			if (W0) p(!0);

			(
				this.titleElement.append(G("span", $), Q$("close", { ariaLabel: "Close Modal", onclick: () => this.close() })),
				this.bg.append(this.container),
				this.container.append(this.titleElement, Q),
				Q.classList.add("modal-content"),
				u("main").inert = !0,
				document.body.append(this.bg),
				document.body.style.overflow = "hidden",
				z6 = $,
				W0 = this,
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
				W0 = null,
				z6 = "",
				document.body.style.overflow = "",
				u("main").inert = !1,
				!0
			);
		}
	}

	document.addEventListener("keydown", ($) => {
		if ($.key == "Escape" && W0) p();
	});

	var oG = /^[\w!#$%&'*.^`|~+-]+$/;

	var nG = ($, Q, J = {}) => {
			if (!oG.test($)) throw new Error("Invalid cookie name");

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
		MJ = ($, Q, J) => {
			return (Q = encodeURIComponent(Q), nG($, Q, J));
		};

	var UJ = ($, Q) => {
			return (
				$ = $.replace(/\/+$/, ""),
				$ = $ + "/",
				Q = Q.replace(/^\/+/, ""),
				$ + Q
			);
		},
		C6 = ($, Q) => {
			for (let [J, Y] of Object.entries(Q)) {
				let Z = new RegExp("/:" + J + "(?:{[^/]+})?\\??");

				$ = $.replace(Z, Y ? `/${Y}` : "");
			}

			return $;
		},
		zJ = ($) => {
			let Q = new URLSearchParams();

			for (let [J, Y] of Object.entries($)) {
				if (Y === void 0) continue;
				if (Array.isArray(Y)) for (let Z of Y) Q.append(J, Z); else Q.set(J, Y);
			}

			return Q;
		},
		kJ = ($, Q) => {
			switch (Q) {
				case "ws":
					return $.replace(/^http/, "ws");

				case "http":
					return $.replace(/^ws/, "http");
			}
		},
		l5 = ($) => {
			if ((/^https?:\/\/[^\/]+?\/index(?=\?|$)/).test($)) return $.replace(/\/index(?=\?|$)/, "/");

			return $.replace(/\/index(?=\?|$)/, "");
		};

	function k6($) {
		return typeof $ === "object" && $ !== null && !Array.isArray($);
	}

	function u5($, Q) {
		if (!k6($) && !k6(Q)) return Q;

		let J = { ...$ };

		for (let Y in Q) {
			let Z = Q[Y];

			if (k6(J[Y]) && k6(Z)) J[Y] = u5(J[Y], Z); else J[Y] = Z;
		}

		return J;
	}

	var CJ = ($, Q) => {
			return new Proxy(() => {}, {
				get(Y, Z) {
					if (typeof Z !== "string" || Z === "then") return;

					return CJ($, [...Q, Z]);
				},

				apply(Y, Z, q) {
					return $({ path: Q, args: q });
				}
			});
		},
		aG = class {
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

					for (let [F, H] of Object.entries($.cookie)) W.push(MJ(F, H, { path: "/" }));

					Y.Cookie = W.join(",");
				}

				if (this.cType) Y["Content-Type"] = this.cType;

				let Z = new Headers(Y ?? void 0), q = this.url;

				if ((q = l5(q), q = C6(q, this.pathParams), this.queryParams)) q = q + "?" + this.queryParams.toString();

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
		d5 = ($, Q) => CJ(
			function J(Y) {
				let Z = Q?.buildSearchParams ?? zJ,
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

				let F = q.join("/"), H = UJ($, F);

				if (W === "url" || W === "path") {
					let X = H;

					if (Y.args[0]) {
						if (Y.args[0].param) X = C6(H, Y.args[0].param);
						if (Y.args[0].query) X = X + "?" + Z(Y.args[0].query).toString();
					}

					if ((X = l5(X), W === "url")) return new URL(X);

					return X.slice($.replace(/\/+$/, "").length).replace(/^\/?/, "/");
				}

				if (W === "ws") {
					let X = kJ(Y.args[0] && Y.args[0].param ? C6(H, Y.args[0].param) : H, "ws"),
						P = new URL(X),
						k = Y.args[0]?.query;

					if (k) Object.entries(k).forEach(([A, g]) => {
						if (Array.isArray(g)) g.forEach((O) => P.searchParams.append(A, O)); else P.searchParams.set(A, g);
					});

					return ((...A) => {
						if (Q?.webSocket !== void 0 && typeof Q.webSocket === "function") return Q.webSocket(...A);

						return new WebSocket(...A);
					})(P.toString());
				}

				let j = new aG(H, W, { buildSearchParams: Z });

				if (W) {
					Q ??= {};

					let X = u5(Q, { ...Y.args[1] });

					return j.fetch(Y.args[0], X);
				}

				return j;
			},
			[]
		);

	var F1 = { "Content-Type": "application/json" },
		m = d5(q0.url.api, { init: { credentials: "same-origin", headers: F1 } }),
		h$ = () => localStorage.getItem("auth-token");

	function LJ($, Q = 25, J = 0) {
		return m.mod.users.$get({ query: { q: $, limit: String(Q), offset: String(J) } });
	}

	function DJ($) {
		return m.mod.users[":id"].$get({ param: { id: String($) } });
	}

	function AJ($) {
		return m.mod.users[":id"].sessions.$get({ param: { id: String($) } });
	}

	function TJ($, Q, J) {
		return m.mod.users[":id"].ban.$post({
			param: { id: String($) },
			json: {
				...Q ? { reason: Q } : {},
				...J ? { duration_seconds: J } : {}
			}
		});
	}

	function o5($) {
		return m.mod.users[":id"].unban.$post({ param: { id: String($) } });
	}

	function IJ($, Q, J) {
		return m.mod.users[":id"].mute.$post({
			param: { id: String($) },
			json: {
				...Q ? { reason: Q } : {},
				...J ? { duration_seconds: J } : {}
			}
		});
	}

	function n5($) {
		return m.mod.users[":id"].unmute.$post({ param: { id: String($) } });
	}

	function t5($, Q) {
		return m.mod.users[":id"]["leaderboard-exclusion"].$post({ param: { id: String($) }, json: { excluded: Q } });
	}

	function EJ($) {
		return m.mod.users[":id"]["delete-strokes"].$post({ param: { id: String($) } });
	}

	function wJ($, Q = 0) {
		return m.mod.users[":id"]["owned-pixels"].$get({ param: { id: String($) }, query: { offset: String(Q) } });
	}

	function hJ($, Q) {
		return m.mod.users[":id"]["delete-selected-strokes"].$post({ param: { id: String($) }, json: { positions: Q } });
	}

	function mJ($, Q) {
		return m.mod.users[":id"]["give-paint"].$post({ param: { id: String($) }, json: { amount: Q } });
	}

	function NJ($, Q) {
		return m.mod.users[":id"]["reset-balance"].$post({ param: { id: String($) }, query: { type: Q } });
	}

	function BJ($, Q) {
		return m.mod.users[":id"]["give-cursor"].$post({ param: { id: String($) }, json: { cursorId: Q } });
	}

	function OJ($, Q, J) {
		return m.mod.users[":id"].message.$post({
			param: { id: String($) },
			json: { body: Q, ...J ? { title: J } : {} }
		});
	}

	function SJ($, Q, J = !0) {
		return m.mod.broadcast.$post({ json: { body: $, ...Q ? { title: Q } : {}, createRow: J } });
	}

	function a5($, Q) {
		return m.mod.users[":id"].role.$post({ param: { id: String($) }, json: { role: Q } });
	}

	function _J($ = {}) {
		return m.mod["review-queue"].$get({
			query: {
				...$.status ? { status: $.status } : {},
				...$.kind ? { kind: $.kind } : {},
				...$.cursor ? { cursor: $.cursor } : {},
				...$.limit ? { limit: String($.limit) } : {}
			}
		});
	}

	function yJ($, Q, J) {
		return m.mod["review-queue"][":id"].resolve.$post({
			param: { id: String($) },
			json: { action: Q, ...J ? { notes: J } : {} }
		});
	}

	function gJ($, Q) {
		return m.mod.feedback.$get({ query: { kind: $, offset: Q.toString() } });
	}

	function vJ($, Q, J) {
		return m.mod.feedback.resolve.$post({ json: { id: $, action: Q, reply: J } });
	}

	function pJ() {
		return m.mod.feedback.counts.$get();
	}

	function xJ($) {
		return m.mod.referrals.$get({ query: { offset: $.toString() } });
	}

	function cJ($) {
		return m.mod.referredBy[":uid"].$get({ param: { uid: $.toString() } });
	}

	function s5($, Q) {
		return m.mod.referrals[":code"].$post({ param: { code: $ }, query: { action: Q } });
	}

	function bJ($) {
		return m.mod.clans[":id"].members.$get({ param: { id: $.toString() } });
	}

	function fJ($) {
		return m.mod["wipe-canvas"].$post({ json: $ });
	}

	function L6($) {
		return m.mod["restore-pixels"].$post({ json: { token: $ } });
	}

	function lJ($) {
		return m.mod.tile[":pos"].$get({ param: { pos: String($) } });
	}

	function uJ($, Q, J, Y) {
		return m.mod.region.$get({
			query: { x: String($), y: String(Q), w: String(J), h: String(Y) }
		});
	}

	function dJ($) {
		return m.mod.owners.$post({ json: { positions: $ } });
	}

	function oJ($, Q = {}) {
		return m.mod.users[":id"]["paint-history"].$get({
			param: { id: String($) },
			query: {
				...Q.before ? { before: Q.before } : {},
				...Q.limit ? { limit: String(Q.limit) } : {}
			}
		});
	}

	function nJ($, Q) {
		return m.mod.users[":id"]["paint-history"][":entryId"].$get({ param: { id: String($), entryId: String(Q) } });
	}

	function tJ($, Q = {}) {
		return m.mod.users[":id"]["chat-history"].$get({
			param: { id: String($) },
			query: {
				...Q.before ? { before: Q.before } : {},
				...Q.limit ? { limit: String(Q.limit) } : {}
			}
		});
	}

	function aJ($ = {}) {
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

	function sJ() {
		return m.mod["bot-sensitivity"].$get();
	}

	function rJ($) {
		return m.mod["bot-sensitivity"].$post({ json: { sensitivity: $ } });
	}

	function iJ() {
		return m.mod["chat-cooldown"].$get();
	}

	function eJ($) {
		return m.mod["chat-cooldown"].$post({ query: { cooldown: $.toString() } });
	}

	function $2($) {
		return m.mod["bot-samples"][":userId"].$get({ param: { userId: String($) } });
	}

	var I8 = null;

	function sG() {
		if (I8 && I8.isConnected) return I8;

		return (I8 = G("div.toast-container"), document.body.append(I8), I8);
	}

	function m$($, Q = 3200) {
		let J = sG(), Y = G("div.toast", G("span", $));

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

	function Q2($) {
		if ($ === null || $ === void 0) return null;

		let Q = $ instanceof Date ? $ : new Date($);

		return Number.isNaN(Q.getTime()) ? null : Q;
	}

	function x0($) {
		let Q = Q2($);

		if (!Q) return $ === null || $ === void 0 ? "-" : String($);

		return Q.toLocaleString();
	}

	var D6 = null;

	function J2() {
		(D6?.remove(), D6 = null);
	}

	document.addEventListener("click", J2);

	function E0($, Q) {
		let J = Q2($);

		if (!J) return G("span", Q ?? x0($));

		let Y = J.toLocaleString(),
			Z = J.toUTCString(),
			q = G("time.ts-local.tooltip", {
				textContent: Q ?? Y,
				datetime: J.toISOString(),
				dataset: { tooltip: `UTC: ${Z}` },
				onclick(K) {
					if ((K.stopPropagation(), D6)) {
						J2();

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
						D6 = W
					);
				}
			});

		return q;
	}

	var r5 = [
		{ label: "30 min", seconds: 1800 },
		{ label: "1 hour", seconds: 3600 },
		{ label: "6 hours", seconds: 21600 },
		{ label: "1 day", seconds: 86400 },
		{ label: "3 days", seconds: 259200 },
		{ label: "7 days", seconds: 604800 },
		{ label: "30 days", seconds: 2592000 },
		{ label: "Permanent", seconds: null }
	];

	function W1($) {
		return G("span.mod-role", { dataset: { role: $ } }, $);
	}

	function A6($, Q = 240) {
		let J;

		try {
			J = JSON.stringify($);
		} catch {
			J = String($);
		}

		if (!J) return "{}";

		return J.length > Q ? J.slice(0, Q) + "..." : J;
	}

	function Y0($) {
		return G("p.error.noicon", $);
	}

	async function d($) {
		try {
			return await $.text() || `HTTP ${$.status} ${$.statusText}`;
		} catch {
			return `HTTP ${$.status} ${$.statusText}`;
		}
	}

	function T6($) {
		let Q = G("button.btn.mod-undo", "Undo", {
			async onclick() {
				Q.disabled = !0;

				let J = await L6($);

				if (!J.ok) {
					(
						Q.disabled = !1,
						m$(J.status === 410 ? "The undo window has passed." : "Undo failed.")
					);

					return;
				}

				let Y = 0;

				try {
					Y = (await J.json()).restored ?? 0;
				} catch {}

				(m$(`Restored ${Y} pixel${Y === 1 ? "" : "s"}.`), p());
			}
		});

		return Q;
	}

	var i5 = 0,
		I6 = 1,
		E6 = 2,
		rG = "#ff3b3b",
		iG = "rgba(8,8,12,0.75)",
		Y$ = null;

	function eG() {
		if (Y$) return Y$;

		return (
			Y$ = G("canvas.ghost-layer", { width: b, height: C0 }),
			X1.append(Y$),
			Y$
		);
	}

	function Y2($, Q) {
		let J = eG(), Y = J.getContext("2d");

		(
			Y.clearRect(0, 0, J.width, J.height),
			Y.fillStyle = iG,
			Y.fillRect(0, 0, J.width, J.height)
		);

		for (let Z = 0; Z < $.length; Z++) {
			let { pos: q, color: K } = $[Z],
				W = q % b,
				F = q / b | 0;

			if (W < 0 || W >= b || F < 0 || F >= C0) continue;

			Y.clearRect(W, F, 1, 1);

			let H = Q[Z];

			if (H === E6) (Y.globalAlpha = 0.55, Y.fillStyle = rG); else (
				Y.globalAlpha = H === I6 ? 0.28 : 1,
				Y.fillStyle = Z0[K]?.hex ?? "#ff00ff"
			);

			Y.fillRect(W, F, 1, 1);
		}

		(Y.globalAlpha = 1, J.style.display = "block");
	}

	function e5() {
		if (!Y$) return;

		(
			Y$.getContext("2d").clearRect(0, 0, Y$.width, Y$.height),
			Y$.style.display = "none"
		);
	}

	function j1($) {
		if (!$.length) return null;

		let Q = 1 / 0, J = 1 / 0, Y = -1 / 0, Z = -1 / 0;

		for (let { pos: q } of $) {
			let K = q % b, W = q / b | 0;

			if (K < Q) Q = K;
			if (W < J) J = W;
			if (K > Y) Y = K;
			if (W > Z) Z = W;
		}

		return { x: Q, y: J, width: Y - Q + 1, height: Z - J + 1 };
	}

	var G2 = 5;

	function w6($) {
		let Q = new DataView($.buffer, $.byteOffset, $.byteLength),
			J = $.byteLength / G2 | 0,
			Y = new Array(J);

		for (let Z = 0; Z < J; Z++) {
			let q = Z * G2;

			Y[Z] = { pos: Q.getUint32(q, !0), color: $[q + 4] };
		}

		return Y;
	}

	var $Z = 48;

	function E8($, Q = $Z) {
		let J = G("canvas.mod-ph-thumb", { width: Q, height: Q }),
			Y = J.getContext("2d"),
			Z = j1($);

		if (!Z) return J;

		let q = Math.max(1, Math.floor(Math.min(Q / Z.width, Q / Z.height))),
			K = Math.floor((Q - Z.width * q) / 2),
			W = Math.floor((Q - Z.height * q) / 2);

		for (let { pos: F, color: H } of $) {
			let j = F % b, X = F / b | 0;

			(
				Y.fillStyle = Z0[H]?.hex ?? "#ff00ff",
				Y.fillRect(K + (j - Z.x) * q, W + (X - Z.y) * q, q, q)
			);
		}

		return J;
	}

	var QZ = 360;

	function Z2($, Q = 0) {
		if (!$.length) return;

		let J = Math.max(0, Math.min(Q, $.length - 1)),
			Y = G("span"),
			Z = G("div.mod-carousel-stage"),
			q = G("div.mod-carousel-caption"),
			K = () => {
				let P = $[J];

				(
					Y.replaceChildren(`Flagged draws (${J + 1} / ${$.length})`),
					Z.replaceChildren(E8(P.pixels, QZ)),
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
			X = G("div.modal-bg.confirm-bg.mod-carousel-bg", G("div.modal-container", G("div.modal-title", Y, Q$("close", { ariaLabel: "Close", onclick: F })), G(
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

	function JZ($) {
		(
			console.warn(`Outdated settings (current: ${$.version}, latest: ${x.version}), updating`),
			$.version = x.version
		);
	}

	function YZ() {
		try {
			let $ = localStorage.getItem("wall:settings");

			if ($) return JSON.parse($);
		} catch($) {
			localStorage.removeItem("wall:settings");
		}
	}

	function GZ() {
		let $ = YZ();

		if (!$) {
			H1();

			return;
		}

		if (x.version != $.version) JZ($);

		for (let Q in $) x[Q] = $[Q];

		H1();
	}

	function H1() {
		(
			localStorage.setItem("wall:settings", JSON.stringify(x)),
			$Q = !1
		);
	}

	var $Q = !1;

	function N0() {
		$Q = !0;
	}

	setInterval(
		() => {
			if ($Q) H1();
		},
		1000
	);

	document.addEventListener("blur", H1);
	window.addEventListener("beforeunload", H1);
	GZ();

	var q2 = G("img", {
			src: b0(0),
			alt: "⬉",
			onerror($) {
				(console.error("Error loading custom cursor", $), P1());
			}
		}),
		QQ = G("div.chat-bubble", G("span", "You")),
		N$ = G("div.cursor.own-cursor", q2, { style: { opacity: "0" } });

	function b0($) {
		return `/static/cursors/generated/${$ || 0}.png`;
	}

	var m6 = !1, N6 = !1;

	function K2() {
		if (m6) return;

		(N$.style.opacity = "1", m6 = !0);
	}

	function ZZ() {
		if (!m6) return;

		(N$.style.opacity = "0", m6 = !1);
	}

	function P1() {
		if (N6) return;

		(
			N$.remove(),
			document.head.append(G("style.system-cursor", "* { cursor: unset !important }")),
			N6 = !0
		);
	}

	function B6() {
		if (!N6) return;
		if (x.a11y.systemCursor) return;

		document.body.prepend(N$);

		let $ = u("style.system-cursor");

		if ($) $.remove();

		N6 = !1;
	}

	function O6($, Q) {
		(N$.style.transform = `translate3d(${$}px, ${Q}px, 0)`, K2());
	}

	document.addEventListener("pointermove", ($) => O6($.x, $.y));

	function F2($) {
		let Q = $.touches[0];

		if (!Q) return;

		O6(Q.clientX + 16, Q.clientY + 16);
	}

	document.addEventListener("touchstart", F2);
	document.addEventListener("touchmove", F2);
	document.addEventListener("mouseout", ($) => $.relatedTarget || ZZ());
	document.addEventListener("mouseover", K2);

	function w8($) {
		q2.src = b0($);
	}

	var h6 = 0;

	function W2($) {
		if (x.a11y.hideChatBubbles) return;

		let Q = G("p", $);

		if ((
			h6++,
			QQ.append(Q),
			setTimeout(
				() => {
					if ((Q.remove(), h6--, h6 == 0)) QQ.remove();
				},
				2000
			),
			h6 == 1
		)) N$.append(QQ);
	}

	function K0() {
		if (W0) {
			(
				W0.container.inert = !0,
				W0.content.style.opacity = "0.3",
				W0.lockLevel++
			);

			return;
		}

		new _("Loading...", G("div.loading-modal", "Loading...")).onClose(() => !1);
	}

	function V1() {
		if (!W0?.lockLevel) return;
		if ((W0.lockLevel--, !W0.lockLevel)) (W0.container.inert = !1, W0.content.style.opacity = "");
	}

	var j2 = 3.141592653589793,
		R1 = Number.isSafeInteger,
		JQ = !1;

	function qZ($, Q, J, Y) {
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

	var S6 = () => Math.random() * 4294967296 >>> 0,
		B$ = qZ(S6(), S6(), S6(), S6());

	function X2($) {
		let Q;

		if ($ < -3.141592653589793) $ += 6.28318531; else if ($ > 3.141592653589793) $ -= 6.28318531;
		if ($ < 0) if ((Q = 1.27323954 * $ + 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q; else if ((Q = 1.27323954 * $ - 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q;

		return Q;
	}

	function H2($) {
		let Q;

		if (($ += 1.57079632, $ > 3.141592653589793)) $ -= 6.28318531;
		if ($ < 0) if ((Q = 1.27323954 * $ + 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q; else if ((Q = 1.27323954 * $ - 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q;

		return Q;
	}

	function M1($) {
		let Q = $ | 0;

		return (JQ = !0, $ < 0 && $ != Q ? Q - 1 : Q);
	}

	var P2 = "__wd_site";

	Object.freeze(Math);

	var U1 = (navigator.userAgentData?.platform ?? navigator.platform).toLowerCase().includes("mac"),
		YQ = U1 ? "⌘" : "Ctrl",
		f0 = window.matchMedia("(pointer: coarse)").matches;

	function M$() {
		if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
	}

	function KZ($, Q, J) {
		let Y = B$() * j2 * 2,
			Z = J * B$() ** 0.5,
			q = J < 5 ? 1 : 1,
			K = (B$() - 0.5) * q,
			W = (B$() - 0.5) * q;

		return [M1($ + Z * H2(Y) + K), M1(Q + Z * X2(Y) + W)];
	}

	function* V2($, Q, J, Y) {
		let Z = new Set();

		if (J < 2) J = 2;

		for (let q = 0; q < Y; q++) {
			let K = KZ($, Q, J), W = K[1] * b + K[0];

			if (Z.has(W)) {
				q--;

				continue;
			}

			(Z.add(W), yield K);
		}
	}

	function R2($, Q, J, Y) {
		if ($ == -1) return { steps: 0, points: [] };

		let Z = J - $,
			q = Y - Q,
			K = Math.max(Math.abs(Z), Math.abs(q)),
			W = [];

		for (let F = 0; F < K; F++) W.push([M1($ + Z / K * F), M1(Q + q / K * F)]);

		return { steps: K, points: W };
	}

	var e$ = G("div.box.paint-bar.tooltip"),
		M2 = G("span.spray-can-count", "+0"),
		U2 = G("span.spray-can-extra", "cans"),
		z2 = G("button.btn.swatch.tooltip.paint-extra-count", M2, U2, {
			tabIndex: -1,
			onclick: M$,
			dataset: { tooltip: "Additional Spray Cans" }
		});

	function k2($) {
		let Q = Math.floor($ / F0),
			J = $ % F0,
			Y = J / F0 * 100;

		(
			e$.style.setProperty("--paint-remaining", `${Y}%`),
			e$.dataset.tooltip = `Paint Remaining: ${Math.round(Y)}% (${H0(J)}px)`,
			FZ(Q)
		);
	}

	function C2($, Q = !1) {
		(
			e$.style.setProperty("--color", $),
			e$.style.setProperty("--color-2", `${$}7F`),
			e$.classList.toggle("dark", Q)
		);
	}

	function FZ($) {
		(M2.textContent = `+${$}`, U2.textContent = `can${A0($)}`);
	}

	var G$;

	((q) => {
		q[q.None = 0] = "None";
		q[q.Spray = 1] = "Spray";
		q[q.Chat = 2] = "Chat";
		q[q.Login = 3] = "Login";
		q[q.Share = 4] = "Share";
	})(G$ ||= {});

	var R = {
		connectionId: -1,
		user: null,
		token: h$(),
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
			let Q = G$[$];

			(
				this.activeTool = $,
				document.documentElement.dataset.tool = Q.toLowerCase()
			);
		},

		setUser($) {
			(this.user = $, w8($.cursor_id || 0));
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

			if ((k2(Q), Q && z6 == "Out of paint?")) p();
		},

		sprayCanCount() {
			return Math.ceil(this.paintRemaining / F0);
		},

		currentSprayCanSize() {
			let $ = this.paintRemaining % F0;

			return $ == 0 && this.paintRemaining >= F0 ? F0 : $;
		}
	};

	if (V$) window.player = R;

	async function GQ($) {
		let Q = await m.user.settings.$post({ json: $ });

		if (Q.status != 200) return await Q.text();

		R.setUser(await Q.json());
	}

	async function z1($) {
		let Q = await GQ($);

		if (typeof Q == "string") alert(`Could not update user settings: ${Q}`);
	}

	var ZQ = /^[a-z0-9_.-]{3,16}$/, WZ = /^[_.-]+$/;

	function k1($) {
		if (!$) return "Missing username";
		if ($.length < 3) return "Must be at least 3 letters long";
		if ($.length > 16) return "Must not be longer than 16 letters";
		if (!ZQ.test($)) return "Can only contain lowercase letters, digits, underscores, dashes and dots.";
		if (WZ.test($)) return "This username is blacklisted.";
	}

	function L2() {
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

			let X = j != Q, P = k1(j);

			if ((W.disabled = !X || !!P || J, W0)) if ((F = X, F)) W0.lockLevel++; else W0.lockLevel--;
			if (X && P) Z(P, "warning"); else if (Y.className == "warning") Z("");
		}

		return (
			q.oninput = H,
			W.onclick = async () => {
				if (J) return;

				let j = q.value;

				if (j == Q) return p(!0);

				if (k1(j)) {
					H();

					return;
				}

				if (!await i(`Change your username to "${j}"?`, "Change Username", "Change", "Keep Current")) return;

				(J = !0, Z(""), K0(), W0.lockLevel = 1);

				try {
					let P = await GQ({ username: j });

					if ((V1(), J = !1, typeof P == "string")) {
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
						V1(),
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
		new _("Error", G("div.modal.error-modal", G("p.error", $), Q && G("div.details", Q), R$));
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

	function D2($, Q, J, Y, Z = !1) {
		return G(
			"div.clan-server.box",
			G("img", {
				src: `https://cdn.discordapp.com/icons/${$}/${Q}.webp?size=128&quality=lossless`,
				draggable: !1
			}),
			G("div.info", G("b", J), G("p", G("span", H0(Y)), " members")),
			Z && G("div.btns", G("button.btn.primary", "Select", {
				async onclick() {
					(K0(), await z1({ clanDiscordId: $ }), L1());
				}
			}))
		);
	}

	function C1($, Q = !1) {
		return G("div.clan-with-stats", D2($.discord_id, $.icon, $.name, $.stat_member_count, !1), G("div.stats", G("p", G("b", V6($.stat_paint_visible)), " paint visible"), G("p", G("b", H0($.stat_pixels_changed)), " pixels changed"), G("p", G("b", H0($.approx_discord_members || 0)), " discord members"), Q && G("p", "Discord ID: ", G("b", $.discord_id))));
	}

	async function A2() {
		K0();

		let $ = await m.user.discordGuilds.$get();

		if (!$.ok) return e("Error loading the Discord Server list", "Make sure you're authenticated via Discord, and allowed us to access your Discord server list!");

		let Q = await $.json();

		new _("Change Clan", G("div.clans-modal", G("p", G("a.link", "Go Back", { onclick: L1 }), { style: { marginBottom: "8px" } }), G("div.list", Q.sort((J, Y) => Y.approximate_member_count - J.approximate_member_count).map((J) => D2(J.id, J.icon, J.name, J.approximate_member_count, !0)), G("button.btn", "Refresh List"))));
	}

	function jZ() {
		new _("User > Clan", G("div.clans-modal.no-clan", G("p", "You do not have a clan."), G("p.notice.noicon", "Clans appear next to your name at all times! ", "They're a fun way to represent your favorite streamer, content creator, friend group or any other community!"), "Join a clan to show where you belong, meet other members, climb the leaderboard together, and stand out across the platform.", G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Select Clan", { onclick: A2 }))));
	}

	async function L1() {
		if (!R.user?.discord_id) return e("Sorry, clans are for Discord users only!", `Clans work using Discord servers, so you cannot join any clans if you don't have a Discord account connected.

You can authenticate into your current account if your Discord account has the same E-Mail as your Google account.`);

		if (!R.user.clan) return jZ();

		new _("User > Clan", G("div.clans-modal.current", G("p", "Current Clan"), C1(R.user.clan), G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Change Clan", { onclick: A2 }), G("button.btn", "Leave Clan", {
			async onclick() {
				if (!await i("Are you sure you want to leave your current clan?")) return;

				(K0(), await z1({ clanDiscordId: "0" }), L1());
			}
		}))));
	}

	var qQ = 0;

	function T2($ = "Message") {
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

	var _6 = ($) => {
		let Q = document.getElementById($);

		if (!Q) return "";

		return Q.value.trim();
	};

	async function I2($, Q, J) {
		if (!$ || !Q) return;

		K0();

		let Y = await m.user.feedback.$post({ json: { kind: $, content: Q, target: J } });

		if (!Y.ok) return T0(Y, `Could not submit ${$}`);

		(
			qQ = Date.now() + 30000,
			new _($ == "report" ? "Report" : "Feedback", G("div.feedback", G("div.success", `Thank you for your ${$ == "report" ? "report" : "feedback"}!`)))
		);
	}

	function E2($) {
		return G("select#f_type.box.outset.input", { style: { width: "100%" } }, $.map(([Q, J]) => G("option", { value: Q }, J || Q)));
	}

	function w2($) {
		if (!R.user) return;
		if (qQ > Date.now()) return e("Please wait 30 seconds before reporting someone again.");

		new _("Report User", G(
			"div.feedback",
			G("p", "Report ", G("b", $)),
			G("label", { htmlFor: "f_type" }, "Reason"),
			E2([
				"- Please Specify -",
				"Griefing",
				"Cheating",
				"Multiaccounting",
				"Bad Behaviour",
				"Botting",
				"Other"
			].map((Q) => [Q])),
			T2("Optional Message"),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Report", {
				onclick: () => {
					let Q = _6("f_type"),
						J = _6("f_content"),
						Y = `${Q}|${J}`;

					if (Q[0] == "-") return;

					I2("report", Y, $);
				}
			}))
		));
	}

	function h2() {
		if (!R.user) {
			e("You need to be signed in to send feedback!");

			return;
		}

		if (qQ > Date.now()) return e("Please wait 30 seconds before submitting feedback again.");

		new _("Feedback", G(
			"div.feedback",
			G("label", { htmlFor: "f_type" }, "Type"),
			E2([
				["bug", "Bug Report"],
				["feedback", "Feedback"],
				["suggestion", "Feature Suggestion"]
			]),
			T2(),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Submit!", {
				onclick: () => {
					I2(_6("f_type"), _6("f_content"));
				}
			}))
		));
	}

	var y6 = null,
		m2 = [
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

	function N2($, Q) {
		let J = new URLSearchParams();

		if ($.name == "Reddit") (J.set("title", "#filianislost"), J.set("url", Q)); else J.set("text", `#filianislost ${Q}`);

		return `${$.url}?${J.toString()}`;
	}

	async function KQ() {
		if (y6) return y6;

		K0();

		let $ = await m.user.shareLink.$post();

		if (!$.ok) {
			T0($, "Could not generate the referral link");

			return;
		}

		let Q = await $.json();

		return (
			y6 = Q,
			setTimeout(
				() => {
					y6 = null;
				},
				60000
			),
			Q
		);
	}

	function B2($) {
		if (!R.user) return "";

		let Q = new URLSearchParams();

		if ((Q.set("c", $.referral.code), $.imageCode)) Q.set("im", $.imageCode);
		if ($.x && $.y) Q.set("p", `${$.x},${$.y}`);

		return `${q0.url.share}/${R.user.username}?${Q.toString()}`;
	}

	function O2() {
		new _("Chat", G("div.chat-modal.nopad", D1, FQ(!0))).onClose(() => {
			u(".chat-log-wrapper").append(D1);
		});
	}

	var $8 = !1,
		S2 = 1,
		WQ = 10,
		_2 = ["tiny", "small", "medium", "large"],
		jQ = 2,
		XQ = ($, Q, J) => G(
			"button.btn.swatch.icon.tool.tooltip",
			{
				id: `tool-${Q}`,
				dataset: { tooltip: J },
				onclick: () => O$($)
			},
			G("img", { src: `/static/icon/tool/${Q}.png`, draggable: !1 })
		),
		h8 = 10,
		XZ = () => {
			let $ = G("img", { draggable: !1 }),
				Q = G("input.tooltip", {
					type: "range",
					min: S2,
					max: WQ,
					oninput(Y) {
						let Z = Y.target, q = parseInt(Q.value);

						(
							Z.dataset.tooltip = `Brush Size: ${q}`,
							x.lastBrushSize = q + jQ,
							J(q),
							N0()
						);
					}
				}),
				J = (Y) => {
					let Z = _2[Math.floor(Y / (WQ + 1) * _2.length)];

					(
						$.src = `/static/icon/size/${Z}.png`,
						h8 = Y + jQ,
						Q.value = Y.toString(),
						Q.dataset.tooltip = `Brush Size: ${Y}`
					);
				};

			return (
				J(Math.min(Math.max(x.lastBrushSize - jQ, S2), WQ)),
				G("div.container", G("div.popup.box.outset.size-control", G("div.input-container.tooltip", Q)), { onmouseout: () => M$() }, G("button#brush-size-btn.btn.swatch.icon.tooltip", $, { dataset: { tooltip: "Brush Size" } }))
			);
		},
		HQ = {
			0: XQ(0, "hand", "Hand Tool (H)"),
			1: XQ(1, "spray", "Draw Tool (B)"),
			2: XQ(2, "chat", "Open Chat")
		},
		y2 = G("div.tools", ...Object.values(HQ)),
		g2 = G("div.tools", XZ(), W6(
			F6("tool/preview", {
				id: "tool-preview",
				onclick($) {
					(
						$8 = !$8,
						$.target.classList.toggle("active", $8),
						v2(),
						M$()
					);
				}
			}),
			"Compare Mode (M)"
		));

	function O$($) {
		if ((M$(), $ == 2)) {
			O2();

			return;
		}

		(
			n0(".tool.active").forEach((J) => J.classList.remove("active")),
			(HQ[$] ?? HQ[0]).classList.add("active"),
			R.setTool($),
			a0()
		);
	}

	var g6 = null;

	function PQ($, Q = !1) {
		let J = B2($),
			Y = `Share Website > ${$.imageCode ? "Image" : "Link"}`;

		new _(Y, G(
			"div.share-modal.link",
			G("p", Q
				? "You have already generated an image in the past minute!"
				: "Here's your link!"),
			G("span.box.input.link.tooltip", J, {
				dataset: { tooltip: "Click to copy!" },
				onclick() {
					g5(J);
				}
			}),
			$.imageLink && G("img.preview", { src: $.imageLink }),
			G("p.desc", "Post it on..."),
			G("div.platforms", m2.map((Z) => G(
				"a.platform.tooltip",
				{
					target: "_blank",
					href: N2(Z, `${J}&utm_source=${Z.id}`),
					dataset: { tooltip: Z.name }
				},
				G("img", {
					src: `/static/icon/platform/${Z.id}.png`,
					alt: Z.name,
					draggable: !1
				})
			))),
			R$
		));
	}

	function HZ() {
		if (g6) return PQ(g6, !0);

		(R.setTool(4), O$(4), p(!0));
	}

	async function VQ($) {
		if ((R.setTool(0), O$(0), a0(), $)) return A1();

		(K0(), S$());

		let { x: Q, y: J, x2: Y, y2: Z } = D.viewport,
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
			k = { referral: await KQ(), imageCode: j, imageLink: X, x: W, y: F };

		(
			g6 = k,
			setTimeout(
				() => {
					g6 = null;
				},
				60000
			),
			p(!0),
			PQ(k)
		);
	}

	async function A1() {
		let $ = await KQ();

		if (!$) return;

		new _("Share Website", G("div.share-modal", G("p.success", `Every player who signs up with your link will reward you with ${T8(Z1.ReferralCode)}!`), G("div.btn-container.vertical", G("button.btn.share", "Share Link", { onclick: () => PQ({ referral: $ }) }), G("button.btn.share", "Share Image", { onclick: () => HZ() }), G("button.btn", "Cancel", { onclick: () => p() })), G("p.desc", `You have invited ${A0($.uses, "user")} so far!`)));
	}

	function p2() {
		return new _("Out of paint!", G("div.out-of-paint", G("p.c", G("b", "You have used up some paint, time to submit!")), G("p.c.desc", `You have ${T8(R.paintRemaining + R.localPaintIncrement)} remaining.`), G("p.notice.noicon", "Paint does not get consumed until you submit your changes. Submit your drawing to the canvas, or undo your changes."), G(
			"div.btn-container",
			G("button.btn.primary", "Submit", {
				onclick: async () => {
					(K0(), await p6(), p(!0));
				}
			}),
			G("button.btn", "Cancel", { onclick: () => p() })
		)));
	}

	function v6() {
		return new _("Out of paint?", G("div.out-of-paint", G("b", "You can share our website to get more paint!"), G("p.success.noicon", `Each invited user will reward you with ${T8(Z1.ReferralCode)}!`), G("p.desc", `You can also wait for a refill to get ${T8(Z1.TimePassed)}.`, G("br"), "The timer is shown in the bottom bar."), G("div.btn-container.vertical", G("button.btn.share", "Share Website", { onclick: A1 }), i$)));
	}

	var m8 = new Map(),
		Z$ = new Uint8Array(r$).fill(255),
		PZ = r * r;

	class c2 {
		x;
		y;
		pos;
		canvas = new OffscreenCanvas(r, r);
		ctx = this.canvas.getContext("2d");
		im = this.ctx.createImageData(r, r);
		rgba32 = new Uint32Array(this.im.data.buffer, this.im.data.byteOffset, PZ);
		worldX;
		worldY;
		lastSeenAt = 0;
		persistent = !1;
		dirty = !1;

		constructor($, Q, J = $ * p0 + Q) {
			this.x = $;
			this.y = Q;
			this.pos = J;

			(
				this.worldX = $ * r,
				this.worldY = Q * r,
				this.ctx.imageSmoothingEnabled = !1,
				m8.set(this.pos, this)
			);
		}

		unload() {
			(
				m8.delete(this.pos),
				this.canvas.width = 0,
				this.canvas.height = 0
			);

			for (let $ in this) this[$] = null;
		}
	}

	function b2($, Q) {
		let J = $ * p0 + Q;

		return m8.get(J) || new c2($, Q, J);
	}

	function U$($, Q, J, Y = !1) {
		let Z = $ / r | 0,
			q = Q / r | 0,
			K = b2(Z, q),
			W = $ % r,
			H = Q % r * r + W;

		if (K.rgba32[H] != J) (K.rgba32[H] = J, K.dirty = !0);
		if (Y) K.persistent = !0;
	}

	function N8($, Q) {
		if (!R1($) || $ < 0 || $ >= r$) return;

		let J = $ % b,
			Y = Math.floor($ / b),
			Z = Z0[Q],
			q = U0.get($);

		if ((Z$[$] = Q, q && $8)) J8($, q, J, Y); else if (!q) if (Z) U$(J, Y, Z.u32); else U$(J, Y, 0);
	}

	function f2($, Q) {
		let J = Q * b + $;

		if (Z$[J] == 255) Z$[J] = 254;

		return Z0[Z$[J]];
	}

	var x2 = 0;

	function VZ($) {
		for (let J of m8.values()) if (!J.persistent && J.lastSeenAt + 1e4 < $) J.unload();
	}

	function x6($) {
		if (D.zoom <= 1) return requestAnimationFrame(x6);

		let Q = Math.floor(D.viewport.x / r),
			J = Math.floor(D.viewport.y / r),
			Y = Math.floor(D.viewport.x2 / r),
			Z = Math.floor(D.viewport.y2 / r);

		for (let q = Q - 1; q <= Y; q++) for (let K = J - 1; K <= Z; K++) {
			let W = b2(q, K);

			if (W.dirty) (
				W.ctx.putImageData(W.im, 0, 0),
				Q8.clearRect(W.worldX, W.worldY, r, r),
				Q8.drawImage(W.canvas, W.worldX, W.worldY),
				W.dirty = !1
			);

			W.lastSeenAt = $;
		}

		if ($ >= x2) (VZ($), x2 = $ + 1e4);

		requestAnimationFrame(x6);
	}

	var T1 = [], B0 = [], s0 = [];

	function l2() {
		(T1.push(s0), s0 = [], B0 = []);
	}

	function u2() {
		(T1 = [], B0 = [], s0 = []);
	}

	function RQ($, Q = !1) {
		let J = 0;

		for (let Y of $) if (Q) {
			let Z = Z0[Y.newColor];

			if (!U0.has(Y.pos)) J++;

			(U0.set(Y.pos, Z), J8(Y.pos, Z, Y.x, Y.y));
		} else if (typeof Y.oldColor == "number") {
			let Z = Z0[Y.oldColor];

			(U0.set(Y.pos, Z), J8(Y.pos, Z, Y.x, Y.y));
		} else {
			let Z = Z0[Z$[Y.pos]];

			(U0.delete(Y.pos), U$(Y.x, Y.y, Z?.u32 ?? 0), J++);
		}

		return J;
	}

	function c6() {
		if (s0.length) {
			let J = RQ(s0);

			(R.addLocalPaintIncrement(J), B0 = [], B0.push(s0), s0 = []);

			return;
		}

		if (!T1.length) return;

		let $ = T1.pop(), Q = RQ($);

		(R.addLocalPaintIncrement(+Q), B0.push($));
	}

	function b6() {
		if (!B0.length) return;

		let $ = B0.pop(), Q = RQ($, !0);

		(T1.push($), R.addLocalPaintIncrement(-Q));
	}

	var B8 = G("div.box.outset.status-text.warn"),
		G8 = G("div.box.outset.status-text"),
		Y8 = 0,
		_$ = !1,
		MQ = 0;

	function a0() {
		if (R.openAt && Date.now() + R.clockOffset < R.openAt) {
			if (_$) (B8.textContent = "", _$ = !1);

			(UZ(), MQ = R.activeTool);

			return;
		}

		if (R.activeTool == 1) RZ(MQ != R.activeTool); else if (_$) (B8.textContent = "", _$ = !1);
		if (R.activeTool == 4) MZ(); else if (R.paintRemaining == 0 && R.nextRefill) zZ(); else if (U0.size || B0.length) kZ(); else d2();

		MQ = R.activeTool;
	}

	function RZ($ = !1) {
		let Q = D.normalizedZoom <= f6;

		if (Q && (!_$ || $)) (_$ = !0, B8.textContent = "Zoom in to draw!"); else if (_$ && !Q) {
			(B8.textContent = "", _$ = !1);

			return;
		}
	}

	setInterval(a0, 1000);

	function d2() {
		if (Y8 == 0) return;

		(G8.textContent = "", Y8 = 0);
	}

	function MZ() {
		(
			Y8 = 4,
			G8.replaceChildren(G("div.share-viewport", G("p", "Zoom into the canvas to share your artwork!"), G("div", G("button.btn", "Share", { onclick: () => VQ(!1) }), G("button.btn", "Cancel", { onclick: () => VQ(!0) }))))
		);
	}

	function UZ() {
		let $ = R.openAt - (Date.now() + R.clockOffset);

		(
			Y8 = 5,
			G8.replaceChildren(G("div.timer", G("p", "Drawing opens in: "), G("b", f5($))))
		);
	}

	function zZ() {
		let $ = R.nextRefill - Date.now(), Q = f5($);

		if ((Y8 = 1, $ < 1)) {
			(R.nextRefill = 0, d2());

			return;
		}

		G8.replaceChildren(G("div.timer", G("p", G("a.link", "Out of paint!", { tabIndex: 1, onclick: () => v6() }), " Next refill in: "), G("b", Q)));
	}

	function kZ() {
		if (Y8 == 2) return;

		(
			Y8 = 2,
			G8.replaceChildren(G("p", "Drawing locally - Confirm to submit!"), G("div", G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/confirm.png", draggable: !1 }), G("span", "Confirm"), { tabIndex: 1, onclick: p6 }), G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/cancel.png", draggable: !1 }), G("span", "Cancel"), { tabIndex: 1, onclick: o2 })))
		);
	}

	var n2 = 0,
		y$ = 0,
		I1 = !1,
		t2 = 0,
		a2 = 0,
		s2 = 0,
		r2 = 0,
		l6 = !1,
		i2 = !1,
		z$ = new Map(),
		CZ = 50,
		LZ = 24,
		DZ = 16;

	function S0($, Q) {
		return [
			Math.max(Math.min(Math.floor(($ - D.rect.left) / D.rect.width * G0.width), G0.width), 0),
			Math.max(Math.min(Math.floor((Q - D.rect.top) / D.rect.height * G0.height), G0.height), 0)
		];
	}

	async function AZ($, Q) {
		let J = Date.now(),
			[Y, Z] = S0($, Q),
			{ points: q } = R2(t2, a2, Y, Z),
			K = $ - s2,
			W = Q - r2;

		if ((
			y$ += Math.sqrt(K * K + W * W) / (J - n2),
			n2 = J,
			t2 = Y,
			a2 = Z,
			!I1
		)) {
			(I1 = !0, y$ = 5);

			return;
		}

		if (y$ > 0) y$ *= 0.8;
		if (y$ <= 0.001) y$ = 0;

		let F = 1 - y$ / (h8 * 1.1),
			H = Math.max(h8 * F, 2),
			j = Math.min(Math.max(Math.floor((H + 1) ** 1.5), 1), 15);

		if (!q.length) q.push([Y, Z]);

		let X = (h8 - 1) * 0.1, P = 0;

		for (let [k, U] of q) {
			let A = V2(k, U, Math.floor(H), j), g = 0, O = 0;

			for (let [M, C] of A) {
				if (M == k && C == U) O++;
				if ((g++, !UQ(M, C) && y$ < X)) TZ(M, C);

				P++;
			}

			if (g < 5 || O > 1) l6 = !0;
		}

		a0();
	}

	function TZ($, Q) {
		if (Math.random() > 0.5) return;

		let J = z$.get($);

		if (J) J.y = Math.max(J.y, Q); else z$.set($, { y: Q, amount: 0, max: B$() * (h8 * 1.5) });
		if (z$.size > CZ) z$.delete(z$.keys().next().value);
	}

	function IZ() {
		if (!z$.size) return;

		let $ = [...z$.entries()],
			[Q, J] = $[Math.floor(B$() * $.length)];

		if ((UQ(Q, ++J.y), ++J.amount >= J.max)) z$.delete(Q);
	}

	function e2() {
		(
			setInterval(
				() => {
					if (l0 && I1) IZ();
				},
				LZ
			),

			setInterval(
				() => {
					if (l0) (AZ(k$, C$), s2 = k$, r2 = C$); else if (I1) (z$.clear(), I1 = !1);
				},
				DZ
			)
		);
	}

	function $7() {
		l6 = !1;
	}

	var Q7 = !1;

	function J7() {
		if (Q7) return;

		Q7 = !0;

		let $ = new _("Update required", G("div.version-mismatch", G("p", "The Wall was just updated and this tab is running an older version. Reload to keep going."), G("p.subtle", "Heads up: anything you've drawn but not submitted will be lost. If a reload doesn't fix it, clear your cache and reload again."), G("div.btn-container", G("button.btn", "Reload now", { onclick: () => location.reload() }))));

		$.lockLevel = 1;
	}

	async function Y7($) {
		let Q = k1($);

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

	function u6() {
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

					(K0(), $.textContent = "", J = !0);

					try {
						await Y7(Q);
					} catch(Y) {
						($.textContent = Y.message || "Something went wrong", J = !1);
					}

					V1();
				}
			}))
		)).onClose(() => {
			return !1;
		});
	}

	var n6 = G("p.warning"), O8 = "", t6 = !0, d6 = "";

	function Z7() {
		O8 = "";
	}

	async function q7() {
		if (!d6) {
			let J = await (await m.auth.turnstile.$get()).json();

			if ((d6 = J.sitekey || "none", !J.required || !J.sitekey)) t6 = !1;
		}

		if (!t6) return;

		let $ = window.turnstile;

		if (!$) return alert("error: Turnstile API didn't load, can't show captcha");

		$.render("#captcha-container", {
			sitekey: d6,
			theme: x.a11y.darkTheme ? "dark" : "light",
			size: "flexible",
			callback(Q) {
				(n6.textContent = "", O8 = Q);
			}
		});
	}

	function G7() {
		if ((n6.textContent = "", t6 && !O8)) return (
			d6 = "",
			t6 = !0,
			q7(),
			n6.textContent = "You need to complete the captcha!",
			!0
		);
	}

	function Z8($) {
		(
			new _("Log In", G(
				"div.login-modal",
				$,
				G("p", "Choose your login method"),
				G("div#captcha-container", { onmouseenter: P1, onmouseleave: B6 }),
				v5("discord", "Discord", "#5865F2", "#fff", {
					ariaLabel: "Authenticate with Discord",
					onclick() {
						if (G7()) return;

						o6("discord", "Discord");
					}
				}),
				v5("google", "Google", "#F1F3F4", "#000", {
					ariaLabel: "Authenticate with Google",
					onclick() {
						if (G7()) return;

						o6("google", "Google");
					}
				}),
				n6,
				q0.devLogin === !0 && G("button.btn.dev-login", "Dev login (staff)", {
					ariaLabel: "Dev login",
					onclick() {
						o6("dev", "Dev");
					}
				}),
				G("div.btn-container", G("button.btn", "Cancel", { onclick: p }))
			)),
			setTimeout(q7, 100)
		);
	}

	function K7($) {
		if (!ZQ.test($)) return;

		Z8(G("div.success", G("b", $), " has invited you to The Wall!"));
	}

	function F7($) {
		if (!$.is_banned) return;

		(
			W7(),
			new _("Oops!", G("div.modal.error-modal", G("p", "You have been banned!"), G("p.error", $.is_banned.reason || "<Reason not specified>"), G("p", "Expires: ", G("b", M6($.is_banned.until))))).onClose(() => !1)
		);
	}

	async function zQ() {
		let $ = h$();

		if (!$) return null;

		F1.Authorization = $;

		let Q = await m.user.me.$get();

		if (Q.status != 200) return !1;

		let J = await Q.json();

		if (!J) return !1;

		return J;
	}

	async function j7() {
		let $ = await zQ();

		if ($) {
			if ((R.token = h$(), R.setUser($), $.is_banned)) return F7($);
			if ($.is_new) return u6();

			S8();

			return;
		}

		if ((g$(), $ == !1)) Z8(G("p.warning", "Session expired, please log in again!"));
	}

	var u0 = { started: !1, status: "", token: "" };

	window.addEventListener("message", ($) => {
		if (!u0.started) return;
		if ($.origin != q0.url.web) return;
		if ($.data.type == "auth_modal_state") (u0.status = $.data.status, u0.token = $.data.token);
	});

	function g$() {
		(
			F1.Authorization = "",
			localStorage.removeItem("auth-token"),
			u0.token = "",
			R.token = null,
			R.user = null
		);
	}

	function X7() {
		(g$(), location.reload());
	}

	async function o6($, Q) {
		if (!O8) return alert("Missing turnstile token");

		K0();

		let J = await m.auth.login[":provider"].$post({ param: { provider: $ }, json: { turnstileToken: O8 } });

		if ((Z7(), !J.ok)) return e("Captcha failed!", await J.text());

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
			u0.started = !0,
			EZ(K)
		);
	}

	function EZ($) {
		let Q = setInterval(
			() => {
				if ($.closed) (clearInterval(Q), wZ());
			},
			500
		);
	}

	async function wZ() {
		if (!u0.status) {
			e("Authentication aborted");

			return;
		}

		if (u0.status != "200") return e("Authentication failed!", `Server responded with error code ${u0.status}`);

		localStorage.setItem("auth-token", u0.token);

		let $ = await zQ();

		if (!$) return (
			g$(),
			e("Authentication failed!", "Could not fetch the user after authenticating")
		);

		if ($.is_new) u6(); else (u0.started = !1, location.reload());
	}

	var L$ = 256,
		hZ = Math.max(b, C0),
		H7 = (() => {
			let $ = 0;

			while (Math.ceil(hZ / 2 ** $) > L$) $++;

			return $;
		})();

	var mZ = ($) => Math.ceil(Math.ceil(b / 2 ** $) / L$),
		NZ = ($) => Math.ceil(Math.ceil(C0 / 2 ** $) / L$);

	function kQ($) {
		if ($ <= 0) return H7;

		return Math.min(H7, Math.max(0, Math.round(-Math.log2($))));
	}

	function V7($) {
		let Q = $.zoom || 0.000001,
			J = Math.max(0, Math.floor(-$.x / Q)),
			Y = Math.max(0, Math.floor(-$.y / Q)),
			Z = Math.min(b, Math.ceil((-$.x + $.w) / Q)),
			q = Math.min(C0, Math.ceil((-$.y + $.h) / Q));

		return { x0: J, y0: Y, x1: Math.max(J, Z), y1: Math.max(Y, q) };
	}

	function a6($, Q) {
		let { x0: J, y0: Y, x1: Z, y1: q } = V7($),
			K = 2 ** Q,
			W = mZ(Q),
			F = NZ(Q),
			H = Math.max(0, J / K / L$ | 0),
			j = Math.max(0, Y / K / L$ | 0),
			X = Math.min(W - 1, (Z / K - 1) / L$ | 0),
			P = Math.min(F - 1, (q / K - 1) / L$ | 0),
			k = [];

		for (let U = H; U <= X; U++) for (let A = j; A <= P; A++) k.push([U, A]);

		return k;
	}

	var P7 = 64;

	function BZ($) {
		let { x0: Q, y0: J, x1: Y, y1: Z } = V7($),
			q = Q / r | 0,
			K = (Y - 1) / r | 0,
			W = J / r | 0,
			F = (Z - 1) / r | 0,
			H = [];

		for (let P = q; P <= K; P++) for (let k = W; k <= F; k++) if (P >= 0 && k >= 0 && P < j6 && k < p0) H.push(P * p0 + k);

		if (H.length <= P7) return H;

		let j = (Q + Y) / 2 / r, X = (J + Z) / 2 / r;

		return H.map((P) => {
			let k = P / p0 | 0,
				U = P % p0,
				A = k + 0.5 - j,
				g = U + 0.5 - X;

			return [P, A * A + g * g];
		}).sort((P, k) => P[1] - k[1]).slice(0, P7).map((P) => P[0]);
	}

	function OZ() {
		let $ = globalThis.navigator?.connection;

		if (!$) return !1;

		return !!$.saveData || $.effectiveType === "2g" || $.effectiveType === "slow-2g" || $.effectiveType === "3g";
	}

	var SZ = 0.8;

	class CQ {
		hooks;
		mode = "overview";
		lastChunks = "";

		constructor($) {
			this.hooks = $;
		}

		update($) {
			let Q = $.zoom >= SZ ? "live" : "overview";

			if (Q !== this.mode) (this.mode = Q, this.hooks.setLayer(Q));

			if (this.mode === "overview") {
				if (this.lastChunks !== "") (this.hooks.setLiveChunks([]), this.lastChunks = "");

				let J = kQ($.zoom), Y = a6($, J);

				for (let [Z, q] of Y) this.hooks.drawTile(J, Z, q);

				if (!OZ() && J > 0) for (let [Z, q] of a6($, J - 1).slice(0, 16)) this.hooks.drawTile(J - 1, Z, q);
			} else {
				let J = BZ($), Y = J.join(",");

				if (Y !== this.lastChunks) (this.hooks.setLiveChunks(J), this.lastChunks = Y);
			}
		}
	}

	function LQ() {
		let $ = -D.x / D.zoom,
			Q = -D.y / D.zoom,
			J = window.innerWidth / D.zoom,
			Y = window.innerHeight / D.zoom;

		return {
			x: Math.max($, 0),
			y: Math.max(Q, 0),
			x2: Math.min($ + J, G0.width),
			y2: Math.min(Q + Y, G0.height),
			width: J,
			height: Y
		};
	}

	function _Z() {
		let $ = LQ();

		return {
			x: Math.floor($.x / r),
			y: Math.floor($.y / r),
			x2: Math.floor($.x2 / r),
			y2: Math.floor($.y2 / r),
			width: Math.floor($.width / r),
			height: Math.floor($.height / r)
		};
	}

	function R7() {
		let $ = _Z(), Q = new Set(), J = 4;

		for (let Y = $.x - 4; Y <= $.x2 + 4; Y++) for (let Z = $.y - 4; Z <= $.y2 + 4; Z++) {
			if (Y < 0 || Z < 0 || Y >= j6 || Z >= p0) continue;
			if (Q.size > 1000) return new Set();

			Q.add(Y * p0 + Z);
		}

		return Q;
	}

	function DQ($, Q, J = D.viewport) {
		return $ < J.x || Q < J.y || $ > J.x2 || Q > J.y2;
	}

	function yZ() {
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

	var z7 = yZ(),
		M7 = Math.min(300, Math.round(z7 * 2)),
		q8 = z7,
		s6 = 16.7,
		AQ = performance.now(),
		U7 = AQ;

	function k7($) {
		let Q = $ - AQ;

		if ((
			AQ = $,
			Q > 0 && Q < 1000 && document.visibilityState === "visible"
		)) {
			if ((s6 += (Q - s6) * 0.1, $ - U7 > 1000)) {
				if ((U7 = $, s6 > 22 && q8 > 8)) q8 = Math.max(8, Math.round(q8 * 0.7)); else if (s6 < 13 && q8 < M7) q8 = Math.min(M7, Math.round(q8 * 1.15) + 1);
			}
		}

		requestAnimationFrame(k7);
	}

	requestAnimationFrame(k7);

	function C7() {
		return q8 | 0;
	}

	var K8 = new Set(), TQ = -1, L7 = null;

	function D7($) {
		L7 = new Set($);
	}

	function A7() {
		(K8 = new Set(), TQ = -1);
	}

	function gZ($) {
		if ($.size != K8.size) return !0;

		for (let Q of $) if (!K8.has(Q)) return !0;
		for (let Q of K8) if (!$.has(Q)) return !0;

		return !1;
	}

	function T7() {
		if (!R.user || !L0) return;

		let $ = R.cursorX >= 0 && R.cursorY >= 0,
			Q = -1,
			J = -1;

		if ($) {
			let K = Math.min(R.cursorX, b - 1),
				W = Math.min(R.cursorY, C0 - 1);

			Q = W * b + K;

			let F = Math.floor(K / r), H = Math.floor(W / r);

			J = F * p0 + H;
		}

		let Y = L7 ?? R7(), Z = gZ(Y), q = I7();

		if (TQ != Q || Z || q) (
			TQ = Q,
			K8 = Y,
			E1(3, {
				cursorPos: Q,
				cursorChunk: J,
				subscribe: Z ? [...Y] : void 0,
				lookupUsers: q ?? void 0,
				cursorBudget: C7()
			})
		);
	}

	var hQ = q0.url?.tileBase?.replace(/\/$/, ""),
		W8 = !!q0.url?.ws && !!hQ,
		mQ = G("img.canvas-snapshot", { draggable: !1, decoding: "async" }),
		e6 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" });

	e6.style.opacity = "0";

	var m1 = G("div.canvas-snapshot-wrap", mQ, e6);

	if (!W8) m1.style.display = "none";

	var NQ = 400;

	mQ.style.transition = `opacity ${NQ}ms ease-out`;
	e6.style.transition = `opacity ${NQ}ms ease-out`;

	var r6 = mQ,
		y8 = e6,
		$5 = G("div.canvas-tile-grid");

	if (!W8) $5.style.display = "none";

	var F8 = null,
		Q5 = "overview",
		E7 = 1e4,
		IQ = !1,
		w7 = "",
		h7 = null;

	async function i6() {
		if (!W8 || IQ || Q5 !== "overview" || document.hidden) return;

		IQ = !0;

		try {
			let $ = await fetch(`${hQ}/snapshot.png`, { cache: "no-cache" });

			if (!$.ok) return;

			let Q = $.headers.get("last-modified") ?? "";

			if (Q && Q === w7) return;

			w7 = Q;

			let J = await $.blob(), Y = URL.createObjectURL(J);

			y8.src = Y;

			try {
				await y8.decode();
			} catch {}

			(
				m1.appendChild(y8),
				y8.style.opacity = "1",
				await new Promise((q) => setTimeout(q, NQ + 60))
			);

			let Z = h7;

			if ((h7 = Y, r6.style.opacity = "0", r6.src = "", Z)) URL.revokeObjectURL(Z);

			[r6, y8] = [y8, r6];
		} catch {} finally {
			IQ = !1;
		}
	}

	var v$ = new Map(),
		g8 = new Set(),
		w1 = new Map(),
		vZ = 8000;

	function B7($, Q, J) {
		return `${hQ}/tiles/${$}/${Q}/${J}.png`;
	}

	function wQ($) {
		if (!W8) return;

		if (Q5 === "overview") {
			if (v$.size) {
				for (let K of v$.values()) K.remove();

				(v$.clear(), g8.clear());
			}

			return;
		}

		let Q = kQ($.zoom),
			J = L$ * 2 ** Q,
			Y = a6($, Q),
			Z = new Set();

		for (let [K, W] of Y) {
			let F = `${Q}/${K}/${W}`;

			if ((Z.add(F), !v$.has(F))) {
				let H = G("img.canvas-tile", {
					decoding: "async",
					draggable: !1,
					style: {
						left: `${Math.floor(K * J)}px`,
						top: `${Math.floor(W * J)}px`,
						width: `${J}px`,
						height: `${J}px`
					},

					onload() {
						(
							H.classList.add("loaded"),
							H.style.removeProperty("visibility"),
							X(),
							h1()
						);
					},

					onerror() {
						(H.style.visibility = "hidden", X(), h1());
					},
					src: B7(Q, K, W)
				});

				g8.add(F);

				let j = setTimeout(
					() => {
						if (g8.delete(F)) h1();
					},
					vZ
				);

				w1.set(F, j);

				let X = () => {
					let P = w1.get(F);

					if (P !== void 0) (clearTimeout(P), w1.delete(F));

					g8.delete(F);
				};

				($5.appendChild(H), v$.set(F, H));
			}
		}

		let q = !1;

		for (let [K, W] of v$) if (!Z.has(K)) {
			(W.remove(), v$.delete(K));

			let F = w1.get(K);

			if (F !== void 0) (clearTimeout(F), w1.delete(K));
			if (g8.delete(K)) q = !0;
		}

		if (q) h1();
	}

	function m7() {
		if (!W8 || Q5 !== "live" || document.hidden) return;

		for (let [$, Q] of v$) {
			let [J, Y, Z] = $.split("/").map(Number);

			Q.src = B7(J, Y, Z);
		}
	}

	var EQ = 0.9, N7 = 1.4;

	function pZ($) {
		if ($ <= EQ) return 1;
		if ($ >= N7) return 0;

		return 1 - ($ - EQ) / (N7 - EQ);
	}

	function h1() {
		if (!F8) return;

		m1.style.opacity = g8.size > 0 ? "1" : String(pZ(F8.zoom));
	}

	var xZ = new CQ({
		async drawTile() {
			return !0;
		},

		setLiveChunks($) {
			D7($);
		},

		setLayer($) {
			if ((Q5 = $, $ === "overview")) {
				if ((i6(), F8)) wQ(F8);
			} else if (F8) wQ(F8);
		}
	});

	function O7() {}

	function S7($) {
		if (!W8) return;

		(F8 = $, xZ.update($), wQ($), h1());
	}

	if (W8) (
		i6(),
		setInterval(i6, E7),
		setInterval(m7, E7),
		document.addEventListener("visibilitychange", () => {
			if (!document.hidden) (i6(), m7());
		})
	);

	var p$ = [], _7 = null;

	function BQ() {
		_7?.();
	}

	var q$ = {
		bind($) {
			(_7 = $, $());
		},

		get unread() {
			return p$;
		},

		get unreadCount() {
			return p$.length;
		},

		seed($) {
			p$.length = 0;

			let Q = $?.unread_notifications;

			if (Q?.length) p$.push(...Q);

			BQ();
		},

		receive($) {
			if (p$.some((Q) => Q.id === $.id)) return;

			(
				p$.unshift({
					id: $.id,
					kind: $.kind,
					title: $.title,
					body: $.body,
					data: $.data,
					createdAt: $.createdAt
				}),
				BQ()
			);
		},

		async markAllRead() {
			if (!p$.length) return;
			if ((p$.length = 0, BQ(), !R.token)) return;

			try {
				await m.user.notifications.read.$post({ json: {} });
			} catch {}
		}
	};

	var OQ = new Set(), p8 = null, N1 = -1;

	async function cZ() {
		let Q = await (await m.cursor.data.v2.$get()).json();

		if (Q.version != PJ) return (
			e("Your client is outdated.", "New cursors were added, you need to reload your page to be able to access them!"),
			null
		);

		return Q.list.map((J) => ({ ...J, ...fZ(J), unlocked: OQ.has(J.id) }));
	}

	async function J5() {
		let Q = await (await m.cursor.inventory.$get()).json();

		OQ.clear();

		for (let J of Q.cursors) OQ.add(J);

		p8 = Q;
	}

	async function x$($) {
		let Q = await m.cursor.claimCursor.$post({ json: $ });

		if (Q.status != 200) return await Q.text();

		return (await J5(), null);
	}

	function bZ($, Q, J) {
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

	function fZ($) {
		let Q = $.unlock;

		if (!Q || Q.kind == "client") return { claimable: !1, tooltip: "You do not own this cursor!" };

		switch (Q.kind) {
			case "stat":
				{
					let J = p8.stats[Q.stat] ?? 0;

					return J >= Q.gte
						? { claimable: !0, tooltip: "Click to claim!" }
						: { claimable: !1, tooltip: bZ(Q.stat, J, Q.gte) };
				}

			case "purchase":
				return p8.coins >= Q.cost
					? { claimable: !0, tooltip: `Click to buy (${Q.cost} coins)` }
					: { claimable: !1, tooltip: `Costs ${Q.cost} coins` };

			case "code":
				return { claimable: !1, tooltip: "Unlocks with a secret code" };

			case "manual":
				return { claimable: !1, tooltip: "Awarded by moderators" };
		}
	}

	function lZ($) {
		let Q = async (Y) => {
				if ($.unlock?.kind == "purchase") {
					if (!await i(`Are you sure you want to buy this cursor for ${$.unlock.cost} coins?`)) return;
				}

				let Z = await x$({ cursorId: $.id, code: Y });

				if (Z) {
					e(Z, "Could not claim the cursor");

					return;
				}

				v8();
			},
			J = G("div.item.box", {
				id: `item${$.id}`,
				onclick() {
					if ($.unlocked) SQ($); else if ($.claimable) Q();
				},

				onmouseover: () => {
					w8($.id);
				},

				onmouseleave: () => {
					w8(N1);
				}
			});

		if (!$.unlocked) {
			if ((
				J.classList.add("tooltip", "locked"),
				J.dataset.tooltip = $.unlock?.tooltip || $.tooltip,
				$.claimable
			)) J.classList.add("claimable");

			if ($.unlock?.kind == "purchase") J.append(G("span.box.cost", `${$.unlock.cost} \uD83E\uDE99`));

			if ($.name == "Cookie Clicker") {
				let Z = G("span.box.cost"), q = 0;

				(
					J.classList.add("cookie"),
					J.dataset.tooltip = "",
					J.addEventListener("click", async () => {
						if (q >= 200) {
							if (await i("Claim the Cookie Clicker Cursor?")) Q("COOKIE_CLICKER");

							return;
						}

						(Z.textContent = `${++q} ${"\uD83C\uDF6A"}`, J.append(Z));
					})
				);
			}
		}

		if (x.a11y.devOverlay) J.dataset.tooltip = `id=${$.id} tier=${$.tier} "${$.name}"`;

		return (J.append(G("img", { src: b0($.id), draggable: !1 })), J);
	}

	function SQ($) {
		if ($.id == N1) return;

		N1 = $.id;

		let Q = u("#inv-confirm-buttons");

		if ((
			n0(".inventory .item.active").forEach((J) => J.classList.remove("active")),
			u(`#item${$.id}`).classList.add("active"),
			$.id == R.user?.cursor_id
		)) Q.style.display = "none"; else Q.style.display = "";
	}

	function uZ() {
		let $ = R.currentSprayCanSize(),
			Q = Math.floor($ / b5) || 1;

		new _("Coins", G("div.coin-modal", G("p.c", "You have ", FJ(p8.coins), ` coin${A0(p8.coins)}`), G("p.notice", `You can exchange spray cans for coins! Every ${b5} paint is one coin.`), G("p.c", "Your current spray can contains ", G("b", $.toString()), " paint, ", "so you will receive ", G("b", Q.toString()), ` coin${A0($ == 0 ? 0 : Q)}.`), G("div.btn-container", G("button.btn", "Back", { onclick: v8 }), G("button.btn.primary", "Sell Spray Can", {
			async onclick() {
				if (R.localPaintIncrement != 0 || B0.length) {
					e("You cannot sell your current spray can while drawing! Please cancel or submit your local changes.");

					return;
				}

				if (Q == 0) {
					e("Empty spray can!");

					return;
				}

				if (!await i(`Sell your current spray can for ${A0(Q, "coin")}? The remainder will not be lost.`)) return v8();

				K0();

				let Y = await m.cursor.buyCoins.$post();

				if (!Y.ok) {
					T0(Y);

					return;
				}

				v8();
			}
		}))));
	}

	async function v8() {
		if (!R.user) return;

		(K0(), await J5());

		let $ = await cZ();

		if (!$) return;

		let Q = $.toSorted((J, Y) => Y.unlocked - J.unlocked || Y.tier - J.tier || J.name.localeCompare(Y.name));

		(
			new _("User > Inventory", G("div.inventory.nopad", G("div.scroll.pad", G("p.notice", "Click on a cursor to select it! It will be shown to all users."), G("br"), G("div.items", Q.map(lZ)), G("p", "More cursors coming soon!")), G("div.box.outset.confirm-bar", G("button.btn", "Back", { onclick: () => p() }), G("button.btn", A0(Math.floor(p8.coins), "coin"), { onclick: uZ }), G(
				"div#inv-confirm-buttons",
				{ style: { display: "none" } },
				G("button.btn", "Cancel", {
					onclick() {
						SQ($[R.user.cursor_id]);
					}
				}),
				G("button.btn.primary", "Change", {
					async onclick() {
						(K0(), await z1({ cursorId: N1 }), p(!0));
					}
				})
			)))).onClose(() => {
				(N1 = -1, w8(R.user.cursor_id));
			}),

			requestAnimationFrame(() => {
				SQ($[R.user.cursor_id]);
			})
		);
	}

	window.freeCursor = async ($) => {
		let Q = await x$({ code: $ });

		if (Q) return (console.warn(`freeCursor: ${Q}`), !1);

		return (console.log("Unlocked! Open the inventory to equip it."), !0);

		let J = "You like looking for secrets, don't you? On an unrelated note, consider checking out the amazing people who made this site: https://yui.dev and https://github.com/brennenawana";
	};

	var _Q = new Map(), K$ = ($, Q) => _Q.set($, Q);

	K$(0, ($) => {
		if (typeof $.paintRemaining == "number") (
			R.nextRefill = $.nextRefillAt || 0,
			R.setPaintRemaining($.paintRemaining),
			a0()
		);
	});

	K$(8, ($) => {
		if ((q$.receive($), $.kind === "cursor_unlock")) J5();
	});

	K$(9, () => {});
	K$(10, () => {});

	K$(3, async ($) => {
		if ($.users) v7($.users);
		if ((g7($.cursorOverflow ?? 0), !$.cursors)) return;

		let Q = $.cursors,
			J = Q instanceof Uint8Array
				? Q
				: Q.buffer instanceof Uint8Array ? Q.buffer : new Uint8Array(Q.buffer ?? Q),
			Y = new DataView(J.buffer, J.byteOffset, J.byteLength);

		for (let Z = 0; Z + 8 <= J.length; Z += 8) {
			let q = Y.getUint32(Z, !0),
				K = Y.getUint32(Z + 4, !0);

			if ((x7(K, q, !0), j8 && Z % 4000 == 0)) await q6();
		}
	});

	K$(5, ($) => p7($.id));

	K$(2, ($) => {
		(
			R.connectionId = $.id,
			$.users.forEach(yQ),
			R.openAt = $.openAt ?? 0,
			R.clockOffset = $.now ? $.now - Date.now() : 0,
			y7()
		);
	});

	K$(6, ($) => {
		if ((
			c7($.id, $.message, $.pos, $.username, $.clanName, $.isGlobal, $.userId),
			$.nonce
		)) return;

		if (!R0.has($.id)) {
			gQ($.id);

			return;
		}

		f7(R0.get($.id), $.message);
	});

	K$(11, ($) => {
		b7($.userId);
	});

	K$(7, async ($) => {
		let Q = 0;

		if ($.pixels) {
			let J = $.pixels,
				Y = J instanceof Uint8Array
					? J
					: J.buffer instanceof Uint8Array ? J.buffer : new Uint8Array(J.buffer ?? J),
				Z = new DataView(Y.buffer, Y.byteOffset, Y.byteLength);

			for (let q = 0; q + 5 <= Y.byteLength; q += 5) (N8(Z.getUint32(q, !0), Z.getUint8(q + 4)), Q++);
		}

		if (Q) O7();
	});

	function l7() {
		let $ = G("div.list.box.outset", G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")), G("div.item.box.online-modal.online-modal-loading", G("i", "Loading online users…")), {
				style: {
					maxHeight: "600px",
					overflowY: "auto",
					justifyContent: "unset"
				}
			}),
			Q = new _("Online Users", G("div.leaderboard-modal", G("p.online-modal-count", G("b#online-modal-count", H0(R.onlinePlayers || 1)), " players online"), G("p.online-modal-viewers", G("b#online-modal-viewers", H0(R.onlineViewers || 0)), " watching"), $));

		o7().then((J) => {
			if (!Q.open) return;

			(
				dZ($, J.users ?? [], J.total ?? 0),
				d7(J.viewers ?? R.onlineViewers)
			);
		}).catch(() => {
			if (!Q.open) return;

			let J = $.querySelector(".online-modal-loading");

			if (J) J.textContent = "Couldn't load the user list.";
		});
	}

	function dZ($, Q, J) {
		let Y = R.user?.username;

		if (Y) Q = Q.filter((j) => j.username !== Y);

		let Z = (j) => {
				let X = R0.get(j.id);

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
						(p(), _0({ connId: j.id, username: j.username }));
					}
				},
				G("b.tooltip", j.username, { dataset: { tooltip: "Click to jump to the user!" } })
			));

		$.replaceChildren(K, ...W);

		let F = 1 + W.length, H = Math.max(0, J - F);

		if (H > 0) $.append(G("div.item.box.online-modal.online-modal-more", G("i", `+${H0(H)} more online`)));
	}

	function u7($, Q) {
		let J = u("#online-modal-count");

		if (J) J.textContent = H0($ || 1);
		if (Q !== void 0) d7(Q);
	}

	function d7($) {
		let Q = u("#online-modal-viewers");

		if (Q) Q.textContent = H0($ || 0);
	}

	var n7 = 0;

	async function vQ() {
		if ((clearTimeout(n7), !Y5())) return;

		n7 = setTimeout(vQ, XJ);

		let $ = performance.now(),
			Q = await c$(0, {}, jJ),
			J = Q.connectedUsers ?? R.onlinePlayers,
			Y = Q.viewers ?? R.onlineViewers;

		if ((
			R.onlinePlayers = J,
			R.onlineViewers = Y,
			R.debug.ping = performance.now() - $,
			R.activeTool == 3
		)) {
			let Z = u("#online-player-counter");

			if (Z) Z.textContent = H0(J);
		}

		(u7(J, Y), a7(J, Y), x8());
	}

	function t7() {
		(setInterval(T7, q0.canvas.syncInterval), B1());
	}

	var oZ = (() => {
		let $ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;

		return (Q) => $.call(Q);
	})();

	function b$($) {
		return oZ($) === "Uint8Array";
	}

	function W4($) {
		return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && ($[Symbol.toStringTag] === "ArrayBuffer" || $[Symbol.toStringTag] === "SharedArrayBuffer");
	}

	function f8($) {
		return $ instanceof RegExp || Object.prototype.toString.call($) === "[object RegExp]";
	}

	function j4($) {
		return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && $[Symbol.toStringTag] === "Map";
	}

	function l8($) {
		return $ instanceof Date || Object.prototype.toString.call($) === "[object Date]";
	}

	function c0($, Q) {
		return JSON.stringify($, (J, Y) => {
			if (typeof Y === "bigint") return { $numberLong: `${Y}` }; else if (j4(Y)) return Object.fromEntries(Y);

			return Y;
		});
	}

	function nZ($) {
		if ($ != null && typeof $ === "object" && "stylize" in $ && typeof $.stylize === "function") return $.stylize;
	}

	var P8 = 7,
		o8 = Symbol.for("@@mdb.bson.version"),
		y1 = 2147483647,
		g1 = -2147483648,
		HY = Math.pow(2, 63) - 1,
		PY = -Math.pow(2, 63),
		VY = Math.pow(2, 53),
		RY = -Math.pow(2, 53),
		X4 = 1,
		MY = 2,
		H4 = 3,
		UY = 4,
		P4 = 5,
		tZ = 6,
		zY = 7,
		kY = 8,
		CY = 9,
		V4 = 10,
		q5 = 11,
		aZ = 12,
		R4 = 13,
		LY = 14,
		DY = 15,
		_1 = 16,
		AY = 17,
		M4 = 18,
		TY = 19,
		IY = 255,
		EY = 127,
		sZ = 0,
		U4 = 4,
		rZ = Object.freeze({
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

	class V8 extends L {
		get name() {
			return "BSONVersionError";
		}

		constructor() {
			super(`Unsupported BSON version, bson types must be from bson ${P8}.x.x`);
		}
	}

	class K5 extends L {
		get name() {
			return "BSONRuntimeError";
		}

		constructor($) {
			super($);
		}
	}

	class F$ extends L {
		get name() {
			return "BSONOffsetError";
		}

		offset;

		constructor($, Q, J) {
			super(`${$}. offset: ${Q}`, J);
			this.offset = Q;
		}
	}

	var s7, r7;

	function wY($, Q, J, Y) {
		if (Y) {
			s7 ??= new TextDecoder("utf8", { fatal: !0 });

			try {
				return s7.decode($.subarray(Q, J));
			} catch(Z) {
				throw new L("Invalid UTF-8 string in BSON document", { cause: Z });
			}
		}

		return (
			r7 ??= new TextDecoder("utf8", { fatal: !1 }),
			r7.decode($.subarray(Q, J))
		);
	}

	function hY($, Q, J) {
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

	function iZ($, Q, J) {
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

	function eZ($) {
		return o0.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
	}

	function $q($) {
		return crypto.getRandomValues(o0.allocate($));
	}

	var Qq = (() => {
			let { crypto: $ } = globalThis;

			if ($ != null && typeof $.getRandomValues === "function") return $q; else return eZ;
		})(),
		o0 = {
			isUint8Array: b$,
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
				return o0.toLocalBufferType($).compare(Q);
			},

			concat($) {
				return Buffer.concat($);
			},

			copy($, Q, J, Y, Z) {
				return o0.toLocalBufferType($).copy(Q, J ?? 0, Y ?? 0, Z ?? $.length);
			},

			equals($, Q) {
				return o0.toLocalBufferType($).equals(Q);
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
				return o0.toLocalBufferType($).toString("base64");
			},

			fromISO88591($) {
				return Buffer.from($, "binary");
			},

			toISO88591($) {
				return o0.toLocalBufferType($).toString("binary");
			},

			fromHex($) {
				return Buffer.from($, "hex");
			},

			toHex($) {
				return o0.toLocalBufferType($).toString("hex");
			},

			toUTF8($, Q, J, Y) {
				let Z = J - Q <= 20 ? hY($, Q, J) : null;

				if (Z != null) return Z;

				let q = o0.toLocalBufferType($).toString("utf8", Q, J);

				if (Y) {
					for (let K = 0; K < q.length; K++) if (q.charCodeAt(K) === 65533) {
						wY($, Q, J, !0);

						break;
					}
				}

				return q;
			},

			utf8ByteLength($) {
				return Buffer.byteLength($, "utf8");
			},

			encodeUTF8Into($, Q, J) {
				let Y = iZ($, Q, J);

				if (Y != null) return Y;

				return o0.toLocalBufferType($).write(Q, J, void 0, "utf8");
			},
			randomBytes: Qq,
			swap32($) {
				return o0.toLocalBufferType($).swap32();
			}
		};

	function Jq() {
		let { navigator: $ } = globalThis;

		return typeof $ === "object" && $.product === "ReactNative";
	}

	function Yq($) {
		if ($ < 0) throw new RangeError(`The argument 'byteLength' is invalid. Received ${$}`);

		return H8.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
	}

	var Gq = (() => {
			let { crypto: $ } = globalThis;

			if ($ != null && typeof $.getRandomValues === "function") return (Q) => {
				return $.getRandomValues(H8.allocate(Q));
			}; else {
				if (Jq()) {
					let { console: Q } = globalThis;

					Q?.warn?.("BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.");
				}

				return Yq;
			}
		})(),
		i7 = /(\d|[a-f])/i,
		H8 = {
			isUint8Array: b$,
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
				return H8.allocate($);
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
				if ($.length === 0) return H8.allocate(0);

				let Q = 0;

				for (let Z of $) Q += Z.length;

				let J = H8.allocate(Q), Y = 0;

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
				return btoa(H8.toISO88591($));
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

					if (!i7.test(Z)) break;
					if (!i7.test(q)) break;

					let K = Number.parseInt(`${Z}${q}`, 16);

					J.push(K);
				}

				return Uint8Array.from(J);
			},

			toHex($) {
				return Array.from($, (Q) => Q.toString(16).padStart(2, "0")).join("");
			},

			toUTF8($, Q, J, Y) {
				let Z = J - Q <= 20 ? hY($, Q, J) : null;

				if (Z != null) return Z;

				return wY($, Q, J, Y);
			},

			utf8ByteLength($) {
				return new TextEncoder().encode($).byteLength;
			},

			encodeUTF8Into($, Q, J) {
				let Y = new TextEncoder().encode(Q);

				return ($.set(Y, J), Y.byteLength);
			},
			randomBytes: Gq,
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
		Zq = typeof Buffer === "function" && Buffer.prototype?._isBuffer !== !0,
		z = Zq ? o0 : H8,
		z4 = Symbol.for("@@mdb.bson.type");

	class y0 {
		get [z4]() {
			return this._bsontype;
		}

		get [o8]() {
			return P8;
		}

		[Symbol.for("nodejs.util.inspect.custom")]($, Q, J) {
			return this.inspect($, Q, J);
		}
	}

	var u8 = new Float64Array(1),
		$0 = new Uint8Array(u8.buffer, 0, 8);

	u8[0] = -1;

	var pQ = $0[7] === 0,
		f = {
			isBigEndian: pQ,
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

			getFloat64LE: pQ
				? ($, Q) => {
					return (
						$0[7] = $[Q],
						$0[6] = $[Q + 1],
						$0[5] = $[Q + 2],
						$0[4] = $[Q + 3],
						$0[3] = $[Q + 4],
						$0[2] = $[Q + 5],
						$0[1] = $[Q + 6],
						$0[0] = $[Q + 7],
						u8[0]
					);
				}
				: ($, Q) => {
					return (
						$0[0] = $[Q],
						$0[1] = $[Q + 1],
						$0[2] = $[Q + 2],
						$0[3] = $[Q + 3],
						$0[4] = $[Q + 4],
						$0[5] = $[Q + 5],
						$0[6] = $[Q + 6],
						$0[7] = $[Q + 7],
						u8[0]
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

			setFloat64LE: pQ
				? ($, Q, J) => {
					return (
						u8[0] = J,
						$[Q] = $0[7],
						$[Q + 1] = $0[6],
						$[Q + 2] = $0[5],
						$[Q + 3] = $0[4],
						$[Q + 4] = $0[3],
						$[Q + 5] = $0[2],
						$[Q + 6] = $0[1],
						$[Q + 7] = $0[0],
						8
					);
				}
				: ($, Q, J) => {
					return (
						u8[0] = J,
						$[Q] = $0[0],
						$[Q + 1] = $0[1],
						$[Q + 2] = $0[2],
						$[Q + 3] = $0[3],
						$[Q + 4] = $0[4],
						$[Q + 5] = $0[5],
						$[Q + 6] = $0[6],
						$[Q + 7] = $0[7],
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

			if ($ != null && typeof $ === "string" && !ArrayBuffer.isView($) && !W4($) && !Array.isArray($)) throw new L("Binary can only be constructed from Uint8Array or number[]");

			if ((
				this.sub_type = Q ?? o.BSON_BINARY_SUBTYPE_DEFAULT,
				$ == null
			)) (this.buffer = z.allocate(o.BUFFER_SIZE), this.position = 0); else (
				this.buffer = Array.isArray($) ? z.fromNumberArray($) : z.toLocalBufferType($),
				this.position = this.buffer.byteLength
			);
		}

		put($) {
			if (typeof $ === "string" && $.length !== 1) throw new L("only accepts single character String"); else if (typeof $ !== "number" && $.length !== 1) throw new L("only accepts single character Uint8Array or Array");

			let Q;

			if (typeof $ === "string") Q = $.charCodeAt(0); else if (typeof $ === "number") Q = $; else Q = $[0];
			if (Q < 0 || Q > 255) throw new L("only accepts number in a valid unsigned byte range 0-255");

			if (this.buffer.byteLength > this.position) this.buffer[this.position++] = Q; else {
				let J = z.allocate(o.BUFFER_SIZE + this.buffer.length);

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
				let J = z.allocate(this.buffer.byteLength + $.length);

				(J.set(this.buffer, 0), this.buffer = J);
			}

			if (ArrayBuffer.isView($)) (
				this.buffer.set(z.toLocalBufferType($), Q),
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
			return z.toBase64(this.buffer.subarray(0, this.position));
		}

		toString($) {
			if ($ === "hex") return z.toHex(this.buffer.subarray(0, this.position));
			if ($ === "base64") return z.toBase64(this.buffer.subarray(0, this.position));
			if ($ === "utf8" || $ === "utf-8") return z.toUTF8(this.buffer, 0, this.position, !1);

			return z.toUTF8(this.buffer, 0, this.position, !1);
		}

		toExtendedJSON($) {
			if (($ = $ || {}, this.sub_type === o.SUBTYPE_VECTOR)) D$(this);

			let Q = z.toBase64(this.buffer),
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
			return new o(z.fromHex($), Q);
		}

		static createFromBase64($, Q) {
			return new o(z.fromBase64($), Q);
		}

		static fromExtendedJSON($, Q) {
			Q = Q || {};

			let J, Y;

			if ("$binary" in $) {
				if (Q.legacy && typeof $.$binary === "string" && "$type" in $) (
					Y = $.$type ? parseInt($.$type, 16) : 0,
					J = z.fromBase64($.$binary)
				); else if (typeof $.$binary !== "string") (
					Y = $.$binary.subType ? parseInt($.$binary.subType, 16) : 0,
					J = z.fromBase64($.$binary.base64)
				);
			} else if ("$uuid" in $) (Y = 4, J = w0.bytesFromString($.$uuid));

			if (!J) throw new L(`Unexpected Binary Extended JSON format ${JSON.stringify($)}`);

			return Y === U4 ? new w0(J) : new o(J, Y);
		}

		inspect($, Q, J) {
			J ??= c0;

			let Y = z.toBase64(this.buffer.subarray(0, this.position)),
				Z = J(Y, Q),
				q = J(this.sub_type, Q);

			return `Binary.createFromBase64(${Z}, ${q})`;
		}

		toInt8Array() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new L("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.Int8) throw new L("Binary datatype field is not Int8");

			return (
				D$(this),
				new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
			);
		}

		toFloat32Array() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new L("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.Float32) throw new L("Binary datatype field is not Float32");

			D$(this);

			let $ = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));

			if (f.isBigEndian) z.swap32($);

			return new Float32Array($.buffer);
		}

		toPackedBits() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new L("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new L("Binary datatype field is not packed bit");

			return (
				D$(this),
				new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
			);
		}

		toBits() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new L("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new L("Binary datatype field is not packed bit");

			D$(this);

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
			let Q = z.allocate($.byteLength + 2);

			(Q[0] = o.VECTOR_TYPE.Int8, Q[1] = 0);

			let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

			Q.set(J, 2);

			let Y = new this(Q, this.SUBTYPE_VECTOR);

			return (D$(Y), Y);
		}

		static fromFloat32Array($) {
			let Q = z.allocate($.byteLength + 2);

			(Q[0] = o.VECTOR_TYPE.Float32, Q[1] = 0);

			let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

			if ((Q.set(J, 2), f.isBigEndian)) z.swap32(new Uint8Array(Q.buffer, 2));

			let Y = new this(Q, this.SUBTYPE_VECTOR);

			return (D$(Y), Y);
		}

		static fromPackedBits($, Q = 0) {
			let J = z.allocate($.byteLength + 2);

			(J[0] = o.VECTOR_TYPE.PackedBit, J[1] = Q, J.set($, 2));

			let Y = new this(J, this.SUBTYPE_VECTOR);

			return (D$(Y), Y);
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

	function D$($) {
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

	var xQ = 16,
		qq = /^[0-9A-F]{32}$/i,
		Kq = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;

	class w0 extends o {
		constructor($) {
			let Q;

			if ($ == null) Q = w0.generate(); else if ($ instanceof w0) Q = z.toLocalBufferType(new Uint8Array($.buffer)); else if (ArrayBuffer.isView($) && $.byteLength === xQ) Q = z.toLocalBufferType($); else if (typeof $ === "string") Q = w0.bytesFromString($); else throw new L("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");

			super(Q, U4);
		}

		get id() {
			return this.buffer;
		}

		set id($) {
			this.buffer = $;
		}

		toHexString($ = !0) {
			if ($) return [
				z.toHex(this.buffer.subarray(0, 4)),
				z.toHex(this.buffer.subarray(4, 6)),
				z.toHex(this.buffer.subarray(6, 8)),
				z.toHex(this.buffer.subarray(8, 10)),
				z.toHex(this.buffer.subarray(10, 16))
			].join("-");

			return z.toHex(this.buffer);
		}

		toString($) {
			if ($ === "hex") return z.toHex(this.id);
			if ($ === "base64") return z.toBase64(this.id);

			return this.toHexString();
		}

		toJSON() {
			return this.toHexString();
		}

		equals($) {
			if (!$) return !1;
			if ($ instanceof w0) return z.equals($.id, this.id);

			try {
				return z.equals(new w0($).id, this.id);
			} catch {
				return !1;
			}
		}

		toBinary() {
			return new o(this.id, o.SUBTYPE_UUID);
		}

		static generate() {
			let $ = z.randomBytes(xQ);

			return ($[6] = $[6] & 15 | 64, $[8] = $[8] & 63 | 128, $);
		}

		static isValid($) {
			if (!$) return !1;
			if (typeof $ === "string") return w0.isValidUUIDString($);
			if (b$($)) return $.byteLength === xQ;

			return $._bsontype === "Binary" && $.sub_type === this.SUBTYPE_UUID && $.buffer.byteLength === 16;
		}

		static createFromHexString($) {
			let Q = w0.bytesFromString($);

			return new w0(Q);
		}

		static createFromBase64($) {
			return new w0(z.fromBase64($));
		}

		static bytesFromString($) {
			if (!w0.isValidUUIDString($)) throw new L("UUID string representation must be 32 hex digits or canonical hyphenated representation");

			return z.fromHex($.replace(/-/g, ""));
		}

		static isValidUUIDString($) {
			return qq.test($) || Kq.test($);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new UUID(${J(this.toHexString(), Q)})`);
		}
	}

	class l$ extends y0 {
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
			return new l$($.$code, $.$scope);
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

	function mY($) {
		return $ != null && typeof $ === "object" && "$id" in $ && $.$id != null && "$ref" in $ && typeof $.$ref === "string" && (!("$db" in $) || ("$db" in $) && typeof $.$db === "string");
	}

	class T$ extends y0 {
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
				new T$($.$ref, $.$id, $.$db, Q)
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

	function NY($) {
		if ($ === "") return $;

		let Q = 0, J = $[Q] === "-", Y = $[Q] === "+";

		if (Y || J) Q += 1;

		let Z = !1;

		for (; Q < $.length && $[Q] === "0"; ++Q) Z = !0;

		if (!Z) return Y ? $.slice(1) : $;

		return `${J ? "-" : ""}${$.length === Q ? "0" : $.slice(Q)}`;
	}

	function Fq($, Q) {
		Q = Q ?? 10;

		let J = ("0123456789abcdefghijklmnopqrstuvwxyz").slice(0, Q);

		return new RegExp(`[^-+${J}]`, "i").test($) ? !1 : $;
	}

	var d0 = void 0;

	try {
		d0 = new WebAssembly.Instance(
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

	var e7 = 65536,
		Wq = 16777216,
		d8 = e7 * e7,
		BY = d8 * d8,
		$Y = BY / 2,
		QY = {},
		JY = {},
		jq = 20,
		Xq = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;

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

		static TWO_PWR_24 = V.fromInt(Wq);
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
					if ((Y = JY[$], Y)) return Y;
				}

				if ((J = V.fromBits($, ($ | 0) < 0 ? -1 : 0, !0), Z)) JY[$] = J;

				return J;
			} else {
				if (($ |= 0, Z = -128 <= $ && $ < 128)) {
					if ((Y = QY[$], Y)) return Y;
				}

				if ((J = V.fromBits($, $ < 0 ? -1 : 0, !1), Z)) QY[$] = J;

				return J;
			}
		}

		static fromNumber($, Q) {
			if (isNaN($)) return Q ? V.UZERO : V.ZERO;

			if (Q) {
				if ($ < 0) return V.UZERO;
				if ($ >= BY) return V.MAX_UNSIGNED_VALUE;
			} else {
				if ($ <= -$Y) return V.MIN_VALUE;
				if ($ + 1 >= $Y) return V.MAX_VALUE;
			}

			if ($ < 0) return V.fromNumber(-$, Q).neg();

			return V.fromBits($ % d8 | 0, $ / d8 | 0, Q);
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
			if (!Fq($, J)) throw new L(`Input: '${$}' contains invalid characters for radix: ${J}`);

			let Z = NY($), q = V._fromString(Z, Y, J);

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

			if (d0) {
				if (!this.unsigned && this.high === -2147483648 && $.low === -1 && $.high === -1) return this;

				let Z = (this.unsigned ? d0.div_u : d0.div_s)(this.low, this.high, $.low, $.high);

				return V.fromBits(Z, d0.get_high(), this.unsigned);
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

			if (d0) {
				let Q = (this.unsigned ? d0.rem_u : d0.rem_s)(this.low, this.high, $.low, $.high);

				return V.fromBits(Q, d0.get_high(), this.unsigned);
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

			if (d0) {
				let k = d0.mul(this.low, this.high, $.low, $.high);

				return V.fromBits(k, d0.get_high(), this.unsigned);
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
			if (this.unsigned) return (this.high >>> 0) * d8 + (this.low >>> 0);

			return this.high * d8 + (this.low >>> 0);
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

			if ($.$numberLong.length > jq) throw new L("$numberLong string is too long");
			if (!Xq.test($.$numberLong)) throw new L(`$numberLong string "${$.$numberLong}" is in an invalid format`);

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

	var Hq = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
		Pq = /^(\+|-)?(Infinity|inf)$/i,
		Vq = /^(\+|-)?NaN$/i,
		c8 = 6111,
		O1 = -6176,
		YY = 6176,
		GY = 34,
		cQ = z.fromNumberArray([124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		ZY = z.fromNumberArray([248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		qY = z.fromNumberArray([120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		Rq = /^([-+])?(\d+)?$/,
		Mq = 31,
		KY = 16383,
		Uq = 30,
		zq = 31;

	function FY($) {
		return !isNaN(parseInt($, 10));
	}

	function kq($) {
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

	function Cq($, Q) {
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

	function Lq($, Q) {
		let J = $.high >>> 0, Y = Q.high >>> 0;

		if (J < Y) return !0; else if (J === Y) {
			let Z = $.low >>> 0, q = Q.low >>> 0;

			if (Z < q) return !0;
		}

		return !1;
	}

	function r0($, Q) {
		throw new L(`"${$}" is not a valid Decimal128 string - ${Q}`);
	}

	class O0 extends y0 {
		get _bsontype() {
			return "Decimal128";
		}

		bytes;

		constructor($) {
			super();

			if (typeof $ === "string") this.bytes = O0.fromString($).bytes; else if ($ instanceof Uint8Array || b$($)) {
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
				U = 0,
				A = 0,
				g = new V(0, 0),
				O = new V(0, 0),
				M = 0,
				C = 0;

			if ($.length >= 7000) throw new L("" + $ + " not a valid Decimal128 string");

			let y = $.match(Hq),
				w = $.match(Pq),
				h = $.match(Vq);

			if (!y && !w && !h || $.length === 0) throw new L("" + $ + " not a valid Decimal128 string");

			if (y) {
				let I = y[2], S = y[4], n = y[5], J0 = y[6];

				if (S && J0 === void 0) r0($, "missing exponent power");
				if (S && I === void 0) r0($, "missing exponent base");
				if (S === void 0 && (n || J0)) r0($, "missing e before exponent");
			}

			if ($[C] === "+" || $[C] === "-") (Y = !0, J = $[C++] === "-");

			if (!FY($[C]) && $[C] !== ".") {
				if ($[C] === "i" || $[C] === "I") return new O0(J ? ZY : qY); else if ($[C] === "N") return new O0(cQ);
			}

			while (FY($[C]) || $[C] === ".") {
				if ($[C] === ".") {
					if (Z) r0($, "contains multiple periods");

					(Z = !0, C = C + 1);

					continue;
				}

				if (P < GY) {
					if ($[C] !== "0" || q) {
						if (!q) j = W;

						(q = !0, X[k++] = parseInt($[C], 10), P = P + 1);
					}
				}

				if (q) F = F + 1;
				if (Z) H = H + 1;

				(W = W + 1, C = C + 1);
			}

			if (Z && !W) throw new L("" + $ + " not a valid Decimal128 string");

			if ($[C] === "e" || $[C] === "E") {
				let I = $.substr(++C).match(Rq);

				if (!I || !I[2]) return new O0(cQ);

				(A = parseInt(I[0], 10), C = C + I[0].length);
			}

			if ($[C]) return new O0(cQ);
			if (!P) (X[0] = 0, F = 1, P = 1, K = 0); else if ((U = P - 1, K = F, K !== 1)) while ($[j + K - 1 + Number(Y) + Number(Z)] === "0") K = K - 1;
			if (A <= H && H > A + 16384) A = O1; else A = A - H;

			while (A > c8) {
				if ((U = U + 1, U >= GY)) {
					if (K === 0) {
						A = c8;

						break;
					}

					r0($, "overflow");
				}

				A = A - 1;
			}

			if (Q.allowRounding) {
				while (A < O1 || P < F) {
					if (U === 0 && K < P) {
						(A = O1, K = 0);

						break;
					}

					if (P < F) F = F - 1; else U = U - 1;

					if (A < c8) A = A + 1; else {
						if (X.join("").match(/^0+$/)) {
							A = c8;

							break;
						}

						r0($, "overflow");
					}
				}

				if (U + 1 < K) {
					let I = W;

					if (Z) (j = j + 1, I = I + 1);
					if (Y) (j = j + 1, I = I + 1);

					let S = parseInt($[j + U + 1], 10), n = 0;

					if (S >= 5) {
						if ((n = 1, S === 5)) {
							n = X[U] % 2 === 1 ? 1 : 0;

							for (let J0 = j + U + 2; J0 < I; J0++) if (parseInt($[J0], 10)) {
								n = 1;

								break;
							}
						}
					}

					if (n) {
						let J0 = U;

						for (; J0 >= 0; J0--) if (++X[J0] > 9) {
							if ((X[J0] = 0, J0 === 0)) if (A < c8) (A = A + 1, X[J0] = 1); else return new O0(J ? ZY : qY);
						} else break;
					}
				}
			} else {
				while (A < O1 || P < F) {
					if (U === 0) {
						if (K === 0) {
							A = O1;

							break;
						}

						r0($, "exponent underflow");
					}

					if (P < F) {
						if ($[F - 1 + Number(Y) + Number(Z)] !== "0" && K !== 0) r0($, "inexact rounding");

						F = F - 1;
					} else {
						if (X[U] !== 0) r0($, "inexact rounding");

						U = U - 1;
					}

					if (A < c8) A = A + 1; else r0($, "overflow");
				}

				if (U + 1 < K) {
					if (Z) j = j + 1;
					if (Y) j = j + 1;
					if (parseInt($[j + U + 1], 10) !== 0) r0($, "inexact rounding");
				}
			}

			if ((g = V.fromNumber(0), O = V.fromNumber(0), K === 0)) (g = V.fromNumber(0), O = V.fromNumber(0)); else if (U < 17) {
				let I = 0;

				(O = V.fromNumber(X[I++]), g = new V(0, 0));

				for (; I <= U; I++) (
					O = O.multiply(V.fromNumber(10)),
					O = O.add(V.fromNumber(X[I]))
				);
			} else {
				let I = 0;

				g = V.fromNumber(X[I++]);

				for (; I <= U - 17; I++) (
					g = g.multiply(V.fromNumber(10)),
					g = g.add(V.fromNumber(X[I]))
				);

				O = V.fromNumber(X[I++]);

				for (; I <= U; I++) (
					O = O.multiply(V.fromNumber(10)),
					O = O.add(V.fromNumber(X[I]))
				);
			}

			let T = Cq(g, V.fromString("100000000000000000"));

			if ((T.low = T.low.add(O), Lq(T.low, O))) T.high = T.high.add(V.fromNumber(1));

			M = A + YY;

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

			let N = z.allocateUnsafe(16);

			return (
				C = 0,
				N[C++] = B.low.low & 255,
				N[C++] = B.low.low >> 8 & 255,
				N[C++] = B.low.low >> 16 & 255,
				N[C++] = B.low.low >> 24 & 255,
				N[C++] = B.low.high & 255,
				N[C++] = B.low.high >> 8 & 255,
				N[C++] = B.low.high >> 16 & 255,
				N[C++] = B.low.high >> 24 & 255,
				N[C++] = B.high.low & 255,
				N[C++] = B.high.low >> 8 & 255,
				N[C++] = B.high.low >> 16 & 255,
				N[C++] = B.high.low >> 24 & 255,
				N[C++] = B.high.high & 255,
				N[C++] = B.high.high >> 8 & 255,
				N[C++] = B.high.high >> 16 & 255,
				N[C++] = B.high.high >> 24 & 255,
				new O0(N)
			);
		}

		toString() {
			let $, Q = 0, J = new Array(36);

			for (let C = 0; C < J.length; C++) J[C] = 0;

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
				U = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24;

			if ((
				Y = 0,
				({ low: new V(X, P), high: new V(k, U) }).high.lessThan(V.ZERO)
			)) H.push("-");

			let g = U >> 26 & Mq;

			if (g >> 3 === 3) if (g === Uq) return H.join("") + "Infinity"; else if (g === zq) return "NaN"; else ($ = U >> 15 & KY, q = 8 + (U >> 14 & 1)); else (q = U >> 14 & 7, $ = U >> 17 & KY);

			let O = $ - YY;

			if ((
				K.parts[0] = (U & 16383) + ((q & 15) << 14),
				K.parts[1] = k,
				K.parts[2] = P,
				K.parts[3] = X,
				K.parts[0] === 0 && K.parts[1] === 0 && K.parts[2] === 0 && K.parts[3] === 0
			)) Z = !0; else for (F = 3; F >= 0; F--) {
				let C = 0, y = kq(K);

				if ((K = y.quotient, C = y.rem.low, !C)) continue;

				for (W = 8; W >= 0; W--) (J[F * 9 + W] = C % 10, C = Math.floor(C / 10));
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

				for (let C = 0; C < Q; C++) H.push(`${J[Y++]}`);

				if ((H.push("E"), M > 0)) H.push(`+${M}`); else H.push(`${M}`);
			} else if (O >= 0) for (let C = 0; C < Q; C++) H.push(`${J[Y++]}`); else {
				let C = Q + O;

				if (C > 0) for (let y = 0; y < C; y++) H.push(`${J[Y++]}`); else H.push("0");

				H.push(".");

				while (C++ < 0) H.push("0");

				for (let y = 0; y < Q - Math.max(C - 1, 0); y++) H.push(`${J[Y++]}`);
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

	class i0 extends y0 {
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

			if ($ === "NaN") return new i0(NaN);
			if ($ === "Infinity") return new i0(1 / 0);
			if ($ === "-Infinity") return new i0(-1 / 0);
			if (!Number.isFinite(Q)) throw new L(`Input: ${$} is not representable as a Double`);
			if ($.trim() !== $) throw new L(`Input: '${$}' contains whitespace`);
			if ($ === "") throw new L("Input is an empty string");
			if ((/[^-0-9.+eE]/).test($)) throw new L(`Input: '${$}' is not in decimal or exponential notation`);

			return new i0(Q);
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

			return Q && Q.relaxed ? J : new i0(J);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new Double(${J(this.value, Q)})`);
		}
	}

	class u$ extends y0 {
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
			let Q = NY($), J = Number($);

			if (y1 < J) throw new L(`Input: '${$}' is larger than the maximum value for Int32`); else if (g1 > J) throw new L(`Input: '${$}' is smaller than the minimum value for Int32`); else if (!Number.isSafeInteger(J)) throw new L(`Input: '${$}' is not a safe integer`); else if (J.toString() !== Q) throw new L(`Input: '${$}' is not a valid Int32 string`);

			return new u$(J);
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
			return Q && Q.relaxed ? parseInt($.$numberInt, 10) : new u$($.$numberInt);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new Int32(${J(this.value, Q)})`);
		}
	}

	class n8 extends y0 {
		get _bsontype() {
			return "MaxKey";
		}

		toExtendedJSON() {
			return { $maxKey: 1 };
		}

		static fromExtendedJSON() {
			return new n8();
		}

		inspect() {
			return "new MaxKey()";
		}
	}

	class t8 extends y0 {
		get _bsontype() {
			return "MinKey";
		}

		toExtendedJSON() {
			return { $minKey: 1 };
		}

		static fromExtendedJSON() {
			return new t8();
		}

		inspect() {
			return "new MinKey()";
		}
	}

	var X8 = null, S1 = new WeakMap();

	class j0 extends y0 {
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
				if ("toHexString" in $ && typeof $.toHexString === "function") Q = z.fromHex($.toHexString()); else Q = $.id;
			} else Q = $;

			if (Q == null) this.buffer = j0.generate(); else if (ArrayBuffer.isView(Q) && Q.byteLength === 12) this.buffer = z.toLocalBufferType(Q); else if (typeof Q === "string") if (j0.validateHexString(Q)) {
				if ((this.buffer = z.fromHex(Q), j0.cacheHexString)) S1.set(this, Q);
			} else throw new L("input must be a 24 character hex string, 12 byte Uint8Array, or an integer"); else throw new L("Argument passed in does not match the accepted types");
		}

		get id() {
			return this.buffer;
		}

		set id($) {
			if ((this.buffer = $, j0.cacheHexString)) S1.set(this, z.toHex($));
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
				let Q = S1.get(this);

				if (Q) return Q;
			}

			let $ = z.toHex(this.id);

			if (j0.cacheHexString) S1.set(this, $);

			return $;
		}

		static getInc() {
			return j0.index = (j0.index + 1) % 16777215;
		}

		static generate($) {
			if (typeof $ !== "number") $ = Math.floor(Date.now() / 1000);

			let Q = j0.getInc(), J = z.allocateUnsafe(12);

			if ((f.setInt32BE(J, 0, $), X8 === null)) X8 = z.randomBytes(5);

			return (
				J[4] = X8[0],
				J[5] = X8[1],
				J[6] = X8[2],
				J[7] = X8[3],
				J[8] = X8[4],
				J[11] = Q & 255,
				J[10] = Q >> 8 & 255,
				J[9] = Q >> 16 & 255,
				J
			);
		}

		toString($) {
			if ($ === "base64") return z.toBase64(this.id);
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
			if (j0.is($)) return this.buffer[11] === $.buffer[11] && z.equals(this.buffer, $.buffer);
			if (typeof $ === "string") return $.toLowerCase() === this.toHexString();

			if (typeof $ === "object" && typeof $.toHexString === "function") {
				let Q = $.toHexString(), J = this.toHexString();

				return typeof Q === "string" && Q.toLowerCase() === J;
			}

			return !1;
		}

		getTimestamp() {
			let $ = new Date(),
				Q = f.getUint32BE(this.buffer, 0);

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
			let Q = z.allocate(12);

			for (let J = 11; J >= 4; J--) Q[J] = 0;

			return (f.setInt32BE(Q, 0, $), new j0(Q));
		}

		static createFromHexString($) {
			if ($?.length !== 24) throw new L("hex string must be 24 characters");

			return new j0(z.fromHex($));
		}

		static createFromBase64($) {
			if ($?.length !== 16) throw new L("base64 string must be 16 characters");

			return new j0(z.fromBase64($));
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
			return j0.cacheHexString && S1.has(this);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new ObjectId(${J(this.toHexString(), Q)})`);
		}
	}

	function G5($, Q, J) {
		let Y = 5;

		if (Array.isArray($)) for (let Z = 0; Z < $.length; Z++) Y += WY(Z.toString(), $[Z], Q, !0, J); else {
			if (typeof $?.toBSON === "function") $ = $.toBSON();

			for (let Z of Object.keys($)) Y += WY(Z, $[Z], Q, !1, J);
		}

		return Y;
	}

	function WY($, Q, J = !1, Y = !1, Z = !1) {
		if (typeof Q?.toBSON === "function") Q = Q.toBSON();

		switch (typeof Q) {
			case "string":
				return 1 + z.utf8ByteLength($) + 1 + 4 + z.utf8ByteLength(Q) + 1;

			case "number":
				if (Math.floor(Q) === Q && Q >= RY && Q <= VY) if (Q >= g1 && Q <= y1) return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 5; else return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 9; else return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 9;

			case "undefined":
				if (Y || !Z) return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 1;
				return 0;

			case "boolean":
				return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 2;

			case "object":
				if (Q != null && typeof Q._bsontype === "string" && Q[o8] !== P8) throw new V8(); else if (Q == null || Q._bsontype === "MinKey" || Q._bsontype === "MaxKey") return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 1; else if (Q._bsontype === "ObjectId") return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 13; else if (Q instanceof Date || l8(Q)) return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 9; else if (ArrayBuffer.isView(Q) || Q instanceof ArrayBuffer || W4(Q)) return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 6 + Q.byteLength; else if (Q._bsontype === "Long" || Q._bsontype === "Double" || Q._bsontype === "Timestamp") return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 9; else if (Q._bsontype === "Decimal128") return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 17; else if (Q._bsontype === "Code") if (Q.scope != null && Object.keys(Q.scope).length > 0) return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 1 + 4 + 4 + z.utf8ByteLength(Q.code.toString()) + 1 + G5(Q.scope, J, Z); else return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 1 + 4 + z.utf8ByteLength(Q.code.toString()) + 1; else if (Q._bsontype === "Binary") {
					let q = Q;

					if (q.sub_type === o.SUBTYPE_BYTE_ARRAY) return ($ != null ? z.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1 + 4); else return ($ != null ? z.utf8ByteLength($) + 1 : 0) + (q.position + 1 + 4 + 1);
				} else if (Q._bsontype === "Symbol") return ($ != null ? z.utf8ByteLength($) + 1 : 0) + z.utf8ByteLength(Q.value) + 4 + 1 + 1; else if (Q._bsontype === "DBRef") {
					let q = Object.assign({ $ref: Q.collection, $id: Q.oid }, Q.fields);

					if (Q.db != null) q.$db = Q.db;

					return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 1 + G5(q, J, Z);
				} else if (Q instanceof RegExp || f8(Q)) return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 1 + z.utf8ByteLength(Q.source) + 1 + (Q.global ? 1 : 0) + (Q.ignoreCase ? 1 : 0) + (Q.multiline ? 1 : 0) + 1; else if (Q._bsontype === "BSONRegExp") return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 1 + z.utf8ByteLength(Q.pattern) + 1 + z.utf8ByteLength(Q.options) + 1; else return ($ != null ? z.utf8ByteLength($) + 1 : 0) + G5(Q, J, Z) + 1;

			case "function":
				if (J) return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 1 + 4 + z.utf8ByteLength(Q.toString()) + 1;
				return 0;

			case "bigint":
				return ($ != null ? z.utf8ByteLength($) + 1 : 0) + 9;

			case "symbol":
				return 0;

			default:
				throw new L(`Unrecognized JS type: ${typeof Q}`);
		}
	}

	function Dq($) {
		return $.split("").sort().join("");
	}

	class e0 extends y0 {
		get _bsontype() {
			return "BSONRegExp";
		}

		pattern;
		options;

		constructor($, Q) {
			super();

			if ((
				this.pattern = $,
				this.options = Dq(Q ?? ""),
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
			} else return new e0($.$regex, e0.parseOptions($.$options));

			if ("$regularExpression" in $) return new e0($.$regularExpression.pattern, e0.parseOptions($.$regularExpression.options));

			throw new L(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify($)}`);
		}

		inspect($, Q, J) {
			let Y = nZ(Q) ?? ((K) => K);

			J ??= c0;

			let Z = Y(J(this.pattern), "regexp"),
				q = Y(J(this.options), "regexp");

			return `new BSONRegExp(${Z}, ${q})`;
		}
	}

	class a8 extends y0 {
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
			return new a8($.$symbol);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new BSONSymbol(${J(this.value, Q)})`);
		}
	}

	var Aq = V;

	class W$ extends Aq {
		get _bsontype() {
			return "Timestamp";
		}

		get [z4]() {
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
			return new W$(V.fromInt($, !0));
		}

		static fromNumber($) {
			return new W$(V.fromNumber($, !0));
		}

		static fromBits($, Q) {
			return new W$({ i: $, t: Q });
		}

		static fromString($, Q) {
			return new W$(V.fromString($, !0, Q));
		}

		toExtendedJSON() {
			return { $timestamp: { t: this.t, i: this.i } };
		}

		static fromExtendedJSON($) {
			let Q = V.isLong($.$timestamp.i) ? $.$timestamp.i.getLowBitsUnsigned() : $.$timestamp.i,
				J = V.isLong($.$timestamp.t) ? $.$timestamp.t.getLowBitsUnsigned() : $.$timestamp.t;

			return new W$({ t: J, i: Q });
		}

		inspect($, Q, J) {
			J ??= c0;

			let Y = J(this.t, Q), Z = J(this.i, Q);

			return `new Timestamp({ t: ${Y}, i: ${Z} })`;
		}
	}

	var Tq = V.fromNumber(VY), Iq = V.fromNumber(RY);

	function OY($, Q, J) {
		Q = Q == null ? {} : Q;

		let Y = Q && Q.index ? Q.index : 0,
			Z = f.getInt32LE($, Y);

		if (Z < 5) throw new L(`bson size must be >= 5, is ${Z}`);
		if (Q.allowObjectSmallerThanBufferSize && $.length < Z) throw new L(`buffer length ${$.length} must be >= bson size ${Z}`);
		if (!Q.allowObjectSmallerThanBufferSize && $.length !== Z) throw new L(`buffer length ${$.length} must === bson size ${Z}`);
		if (Z + Y > $.byteLength) throw new L(`(bson size ${Z} + options.index ${Y} must be <= buffer length ${$.byteLength})`);
		if ($[Y + Z - 1] !== 0) throw new L("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");

		return Z5($, Y, Q, J);
	}

	var Eq = /^\$ref$|^\$id$|^\$db$/;

	function Z5($, Q, J, Y = !1) {
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
			U,
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
			U = new Set();

			for (let w of Object.keys(A)) U.add(w);
		}

		let g = Q;

		if ($.length < 5) throw new L("corrupt bson message < 5 bytes long");

		let O = f.getInt32LE($, Q);

		if ((Q += 4, O < 5 || O > $.length)) throw new L("corrupt bson message");

		let M = Y ? [] : {}, C = 0, y = Y ? !1 : null;

		while (!0) {
			let w = $[Q++];

			if (w === 0) break;

			let h = Q;

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.byteLength) throw new L("Bad BSON Document: illegal CString");

			let T = Y ? C++ : z.toUTF8($, Q, h, !1), B = !0;

			if (P || U?.has(T)) B = k; else B = !k;
			if (y !== !1 && T[0] === "$") y = Eq.test(T);

			let N;

			if ((Q = h + 1, w === MY)) {
				let I = f.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new L("bad string length in bson");

				(N = z.toUTF8($, Q, Q + I - 1, B), Q = Q + I);
			} else if (w === zY) {
				let I = z.allocateUnsafe(12);

				for (let S = 0; S < 12; S++) I[S] = $[Q + S];

				(N = new j0(I), Q = Q + 12);
			} else if (w === _1 && H === !1) (N = new u$(f.getInt32LE($, Q)), Q += 4); else if (w === _1) (N = f.getInt32LE($, Q), Q += 4); else if (w === X4) {
				if ((N = f.getFloat64LE($, Q), Q += 8, H === !1)) N = new i0(N);
			} else if (w === CY) {
				let I = f.getInt32LE($, Q),
					S = f.getInt32LE($, Q + 4);

				(Q += 8, N = new Date(new V(I, S).toNumber()));
			} else if (w === kY) {
				if ($[Q] !== 0 && $[Q] !== 1) throw new L("illegal boolean type value");

				N = $[Q++] === 1;
			} else if (w === H4) {
				let I = Q, S = f.getInt32LE($, Q);

				if (S <= 0 || S > $.length - Q) throw new L("bad embedded document length in bson");

				if (q) N = $.subarray(Q, Q + S); else {
					let n = J;

					if (!P) n = { ...J, validation: { utf8: B } };

					N = Z5($, I, n, !1);
				}

				Q = Q + S;
			} else if (w === UY) {
				let I = Q,
					S = f.getInt32LE($, Q),
					n = J,
					J0 = Q + S;

				if (Z && Z[T]) n = { ...J, raw: !0 };
				if (!P) n = { ...n, validation: { utf8: B } };
				if ((N = Z5($, I, n, !0), Q = Q + S, $[Q - 1] !== 0)) throw new L("invalid array terminator byte");
				if (Q !== J0) throw new L("corrupted array bson");
			} else if (w === tZ) N = void 0; else if (w === V4) N = null; else if (w === M4) if (j) (N = f.getBigInt64LE($, Q), Q += 8); else {
				let I = f.getInt32LE($, Q),
					S = f.getInt32LE($, Q + 4);

				Q += 8;

				let n = new V(I, S);

				if (F && H === !0) N = n.lessThanOrEqual(Tq) && n.greaterThanOrEqual(Iq) ? n.toNumber() : n; else N = n;
			} else if (w === TY) {
				let I = z.allocateUnsafe(16);

				for (let S = 0; S < 16; S++) I[S] = $[Q + S];

				(Q = Q + 16, N = new O0(I));
			} else if (w === P4) {
				let I = f.getInt32LE($, Q);

				Q += 4;

				let S = I, n = $[Q++];

				if (I < 0) throw new L("Negative binary type element size found");
				if (I > $.byteLength) throw new L("Binary type size larger than document size");

				if (n === o.SUBTYPE_BYTE_ARRAY) {
					if ((I = f.getInt32LE($, Q), Q += 4, I < 0)) throw new L("Negative binary type element size found for subtype 0x02");
					if (I > S - 4) throw new L("Binary type with subtype 0x02 contains too long binary size");
					if (I < S - 4) throw new L("Binary type with subtype 0x02 contains too short binary size");
				}

				if (W && H) N = z.toLocalBufferType($.subarray(Q, Q + I)); else if ((
					N = new o($.subarray(Q, Q + I), n),
					n === U4 && w0.isValid(N)
				)) N = N.toUUID();

				Q = Q + I;
			} else if (w === q5 && K === !1) {
				h = Q;

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new L("Bad BSON Document: illegal CString");

				let I = z.toUTF8($, Q, h, !1);

				(Q = h + 1, h = Q);

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new L("Bad BSON Document: illegal CString");

				let S = z.toUTF8($, Q, h, !1);

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
			} else if (w === q5 && K === !0) {
				h = Q;

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new L("Bad BSON Document: illegal CString");

				let I = z.toUTF8($, Q, h, !1);

				(Q = h + 1, h = Q);

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new L("Bad BSON Document: illegal CString");

				let S = z.toUTF8($, Q, h, !1);

				(Q = h + 1, N = new e0(I, S));
			} else if (w === LY) {
				let I = f.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new L("bad string length in bson");

				let S = z.toUTF8($, Q, Q + I - 1, B);

				(N = H ? S : new a8(S), Q = Q + I);
			} else if (w === AY) (
				N = new W$({ i: f.getUint32LE($, Q), t: f.getUint32LE($, Q + 4) }),
				Q += 8
			); else if (w === IY) N = new t8(); else if (w === EY) N = new n8(); else if (w === R4) {
				let I = f.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new L("bad string length in bson");

				let S = z.toUTF8($, Q, Q + I - 1, B);

				(N = new l$(S), Q = Q + I);
			} else if (w === DY) {
				let I = f.getInt32LE($, Q);

				if ((Q += 4, I < 13)) throw new L("code_w_scope total size shorter minimum expected length");

				let S = f.getInt32LE($, Q);

				if ((Q += 4, S <= 0 || S > $.length - Q || $[Q + S - 1] !== 0)) throw new L("bad string length in bson");

				let n = z.toUTF8($, Q, Q + S - 1, B);

				Q = Q + S;

				let J0 = Q,
					l = f.getInt32LE($, Q),
					Q0 = Z5($, J0, J, !1);

				if ((Q = Q + l, I < 8 + l + S)) throw new L("code_w_scope total size is too short, truncating scope");
				if (I > 8 + l + S) throw new L("code_w_scope total size is too long, clips outer document");

				N = new l$(n, Q0);
			} else if (w === aZ) {
				let I = f.getInt32LE($, Q);

				if ((Q += 4, I <= 0 || I > $.length - Q || $[Q + I - 1] !== 0)) throw new L("bad string length in bson");

				let S = z.toUTF8($, Q, Q + I - 1, B);

				Q = Q + I;

				let n = z.allocateUnsafe(12);

				for (let l = 0; l < 12; l++) n[l] = $[Q + l];

				let J0 = new j0(n);

				(Q = Q + 12, N = new T$(S, J0));
			} else throw new L(`Detected unknown BSON type ${w.toString(16)} for fieldname "${T}"`);

			if (T === "__proto__") Object.defineProperty(M, T, { value: N, writable: !0, enumerable: !0, configurable: !0 }); else M[T] = N;
		}

		if (O !== Q - g) {
			if (Y) throw new L("corrupt array bson");

			throw new L("corrupt object bson");
		}

		if (!y) return M;

		if (mY(M)) {
			let w = Object.assign({}, M);

			return (
				delete w.$ref,
				delete w.$id,
				delete w.$db,
				new T$(M.$ref, M.$id, M.$db, w)
			);
		}

		return M;
	}

	var F5 = /\x00/,
		jY = new Set(["$db", "$ref", "$id", "$clusterTime"]);

	function bQ($, Q, J, Y) {
		$[Y++] = MY;

		let Z = z.encodeUTF8Into($, Q, Y);

		(Y = Y + Z + 1, $[Y - 1] = 0);

		let q = z.encodeUTF8Into($, J, Y + 4);

		return (f.setInt32LE($, Y, q + 1), Y = Y + 4 + q, $[Y++] = 0, Y);
	}

	function fQ($, Q, J, Y) {
		let q = !Object.is(J, -0) && Number.isSafeInteger(J) && J <= y1 && J >= g1 ? _1 : X4;

		$[Y++] = q;

		let K = z.encodeUTF8Into($, Q, Y);

		if ((Y = Y + K, $[Y++] = 0, q === _1)) Y += f.setInt32LE($, Y, J); else Y += f.setFloat64LE($, Y, J);

		return Y;
	}

	function lQ($, Q, J, Y) {
		$[Y++] = M4;

		let Z = z.encodeUTF8Into($, Q, Y);

		return (Y += Z, $[Y++] = 0, Y += f.setBigInt64LE($, Y, J), Y);
	}

	function b8($, Q, J, Y) {
		$[Y++] = V4;

		let Z = z.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y);
	}

	function uQ($, Q, J, Y) {
		$[Y++] = kY;

		let Z = z.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, $[Y++] = J ? 1 : 0, Y);
	}

	function dQ($, Q, J, Y) {
		$[Y++] = CY;

		let Z = z.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = V.fromNumber(J.getTime()),
			K = q.getLowBits(),
			W = q.getHighBits();

		return (Y += f.setInt32LE($, Y, K), Y += f.setInt32LE($, Y, W), Y);
	}

	function oQ($, Q, J, Y) {
		$[Y++] = q5;

		let Z = z.encodeUTF8Into($, Q, Y);

		if ((
			Y = Y + Z,
			$[Y++] = 0,
			J.source && J.source.match(F5) != null
		)) throw new L("value " + J.source + " must not contain null bytes");

		if ((
			Y = Y + z.encodeUTF8Into($, J.source, Y),
			$[Y++] = 0,
			J.ignoreCase
		)) $[Y++] = 105;

		if (J.global) $[Y++] = 115;
		if (J.multiline) $[Y++] = 109;

		return ($[Y++] = 0, Y);
	}

	function nQ($, Q, J, Y) {
		$[Y++] = q5;

		let Z = z.encodeUTF8Into($, Q, Y);

		if ((Y = Y + Z, $[Y++] = 0, J.pattern.match(F5) != null)) throw new L("pattern " + J.pattern + " must not contain null bytes");

		(Y = Y + z.encodeUTF8Into($, J.pattern, Y), $[Y++] = 0);

		let q = J.options.split("").sort().join("");

		return (Y = Y + z.encodeUTF8Into($, q, Y), $[Y++] = 0, Y);
	}

	function tQ($, Q, J, Y) {
		if (J === null) $[Y++] = V4; else if (J._bsontype === "MinKey") $[Y++] = IY; else $[Y++] = EY;

		let Z = z.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y);
	}

	function aQ($, Q, J, Y) {
		$[Y++] = zY;

		let Z = z.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += J.serializeInto($, Y), Y);
	}

	function sQ($, Q, J, Y) {
		$[Y++] = P4;

		let Z = z.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.length;

		if ((Y += f.setInt32LE($, Y, q), $[Y++] = sZ, q <= 16)) for (let K = 0; K < q; K++) $[Y + K] = J[K]; else $.set(J, Y);

		return (Y = Y + q, Y);
	}

	function rQ($, Q, J, Y, Z, q, K, W, F) {
		if (F.has(J)) throw new L("Cannot convert circular structure to BSON");

		(F.add(J), $[Y++] = Array.isArray(J) ? UY : H4);

		let H = z.encodeUTF8Into($, Q, Y);

		(Y = Y + H, $[Y++] = 0);

		let j = v1($, J, Z, Y, q + 1, K, W, F);

		return (F.delete(J), j);
	}

	function iQ($, Q, J, Y) {
		$[Y++] = TY;

		let Z = z.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		for (let q = 0; q < 16; q++) $[Y + q] = J.bytes[q];

		return Y + 16;
	}

	function eQ($, Q, J, Y) {
		$[Y++] = J._bsontype === "Long" ? M4 : AY;

		let Z = z.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.getLowBits(), K = J.getHighBits();

		return (Y += f.setInt32LE($, Y, q), Y += f.setInt32LE($, Y, K), Y);
	}

	function $4($, Q, J, Y) {
		(J = J.valueOf(), $[Y++] = _1);

		let Z = z.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += f.setInt32LE($, Y, J), Y);
	}

	function Q4($, Q, J, Y) {
		$[Y++] = X4;

		let Z = z.encodeUTF8Into($, Q, Y);

		return (Y = Y + Z, $[Y++] = 0, Y += f.setFloat64LE($, Y, J.value), Y);
	}

	function J4($, Q, J, Y) {
		$[Y++] = R4;

		let Z = z.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = J.toString(),
			K = z.encodeUTF8Into($, q, Y + 4) + 1;

		return (f.setInt32LE($, Y, K), Y = Y + 4 + K - 1, $[Y++] = 0, Y);
	}

	function Y4($, Q, J, Y, Z = !1, q = 0, K = !1, W = !0, F) {
		if (J.scope && typeof J.scope === "object") {
			$[Y++] = DY;

			let H = z.encodeUTF8Into($, Q, Y);

			(Y = Y + H, $[Y++] = 0);

			let j = Y, X = J.code;

			Y = Y + 4;

			let P = z.encodeUTF8Into($, X, Y + 4) + 1;

			(f.setInt32LE($, Y, P), $[Y + 4 + P - 1] = 0, Y = Y + P + 4);

			let k = v1($, J.scope, Z, Y, q + 1, K, W, F);

			Y = k - 1;

			let U = k - j;

			(j += f.setInt32LE($, j, U), $[Y++] = 0);
		} else {
			$[Y++] = R4;

			let H = z.encodeUTF8Into($, Q, Y);

			(Y = Y + H, $[Y++] = 0);

			let j = J.code.toString(),
				X = z.encodeUTF8Into($, j, Y + 4) + 1;

			(f.setInt32LE($, Y, X), Y = Y + 4 + X - 1, $[Y++] = 0);
		}

		return Y;
	}

	function G4($, Q, J, Y) {
		$[Y++] = P4;

		let Z = z.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let { buffer: q, position: K } = J;

		if (J.sub_type === o.SUBTYPE_BYTE_ARRAY) K = K + 4;

		if ((
			Y += f.setInt32LE($, Y, K),
			$[Y++] = J.sub_type,
			J.sub_type === o.SUBTYPE_BYTE_ARRAY
		)) (K = K - 4, Y += f.setInt32LE($, Y, K));

		if (J.sub_type === o.SUBTYPE_VECTOR) D$(J);
		if (K <= 16) for (let W = 0; W < K; W++) $[Y + W] = q[W]; else $.set(q, Y);

		return (Y = Y + J.position, Y);
	}

	function Z4($, Q, J, Y) {
		$[Y++] = LY;

		let Z = z.encodeUTF8Into($, Q, Y);

		(Y = Y + Z, $[Y++] = 0);

		let q = z.encodeUTF8Into($, J.value, Y + 4) + 1;

		return (f.setInt32LE($, Y, q), Y = Y + 4 + q - 1, $[Y++] = 0, Y);
	}

	function q4($, Q, J, Y, Z, q, K) {
		$[Y++] = H4;

		let W = z.encodeUTF8Into($, Q, Y);

		(Y = Y + W, $[Y++] = 0);

		let F = Y,
			H = { $ref: J.collection || J.namespace, $id: J.oid };

		if (J.db != null) H.$db = J.db;

		H = Object.assign(H, J.fields);

		let j = v1($, H, !1, Y, Z + 1, q, !0, K),
			X = j - F;

		return (F += f.setInt32LE($, Y, X), j);
	}

	function v1($, Q, J, Y, Z, q, K, W) {
		if (W == null) {
			if (Q == null) return ($[0] = 5, $[1] = 0, $[2] = 0, $[3] = 0, $[4] = 0, 5);
			if (Array.isArray(Q)) throw new L("serialize does not support an array as the root input");
			if (typeof Q !== "object") throw new L("serialize does not support non-object as the root input"); else if ("_bsontype" in Q && typeof Q._bsontype === "string") throw new L("BSON types cannot be serialized as a document"); else if (l8(Q) || f8(Q) || b$(Q) || W4(Q)) throw new L("date, regexp, typedarray, and arraybuffer cannot be BSON documents");

			W = new Set();
		}

		W.add(Q);

		let F = Y + 4;

		if (Array.isArray(Q)) for (let j = 0; j < Q.length; j++) {
			let X = `${j}`, P = Q[j];

			if (typeof P?.toBSON === "function") P = P.toBSON();

			let k = typeof P;

			if (P === void 0) F = b8($, X, P, F); else if (P === null) F = b8($, X, P, F); else if (k === "string") F = bQ($, X, P, F); else if (k === "number") F = fQ($, X, P, F); else if (k === "bigint") F = lQ($, X, P, F); else if (k === "boolean") F = uQ($, X, P, F); else if (k === "object" && P._bsontype == null) if (P instanceof Date || l8(P)) F = dQ($, X, P, F); else if (P instanceof Uint8Array || b$(P)) F = sQ($, X, P, F); else if (P instanceof RegExp || f8(P)) F = oQ($, X, P, F); else F = rQ($, X, P, F, J, Z, q, K, W); else if (k === "object") {
				if (P[o8] !== P8) throw new V8(); else if (P._bsontype === "ObjectId") F = aQ($, X, P, F); else if (P._bsontype === "Decimal128") F = iQ($, X, P, F); else if (P._bsontype === "Long" || P._bsontype === "Timestamp") F = eQ($, X, P, F); else if (P._bsontype === "Double") F = Q4($, X, P, F); else if (P._bsontype === "Code") F = Y4($, X, P, F, J, Z, q, K, W); else if (P._bsontype === "Binary") F = G4($, X, P, F); else if (P._bsontype === "BSONSymbol") F = Z4($, X, P, F); else if (P._bsontype === "DBRef") F = q4($, X, P, F, Z, q, W); else if (P._bsontype === "BSONRegExp") F = nQ($, X, P, F); else if (P._bsontype === "Int32") F = $4($, X, P, F); else if (P._bsontype === "MinKey" || P._bsontype === "MaxKey") F = tQ($, X, P, F); else if (typeof P._bsontype !== "undefined") throw new L(`Unrecognized or invalid _bsontype: ${String(P._bsontype)}`);
			} else if (k === "function" && q) F = J4($, X, P, F);
		} else if (Q instanceof Map || j4(Q)) {
			let j = Q.entries(), X = !1;

			while (!X) {
				let P = j.next();

				if ((X = !!P.done, X)) continue;

				let k = P.value ? P.value[0] : void 0,
					U = P.value ? P.value[1] : void 0;

				if (typeof U?.toBSON === "function") U = U.toBSON();

				let A = typeof U;

				if (typeof k === "string" && !jY.has(k)) {
					if (k.match(F5) != null) throw new L("key " + k + " must not contain null bytes");

					if (J) {
						if (k[0] === "$") throw new L("key " + k + " must not start with '$'"); else if (k.includes(".")) throw new L("key " + k + " must not contain '.'");
					}
				}

				if (U === void 0) {
					if (K === !1) F = b8($, k, U, F);
				} else if (U === null) F = b8($, k, U, F); else if (A === "string") F = bQ($, k, U, F); else if (A === "number") F = fQ($, k, U, F); else if (A === "bigint") F = lQ($, k, U, F); else if (A === "boolean") F = uQ($, k, U, F); else if (A === "object" && U._bsontype == null) if (U instanceof Date || l8(U)) F = dQ($, k, U, F); else if (U instanceof Uint8Array || b$(U)) F = sQ($, k, U, F); else if (U instanceof RegExp || f8(U)) F = oQ($, k, U, F); else F = rQ($, k, U, F, J, Z, q, K, W); else if (A === "object") {
					if (U[o8] !== P8) throw new V8(); else if (U._bsontype === "ObjectId") F = aQ($, k, U, F); else if (U._bsontype === "Decimal128") F = iQ($, k, U, F); else if (U._bsontype === "Long" || U._bsontype === "Timestamp") F = eQ($, k, U, F); else if (U._bsontype === "Double") F = Q4($, k, U, F); else if (U._bsontype === "Code") F = Y4($, k, U, F, J, Z, q, K, W); else if (U._bsontype === "Binary") F = G4($, k, U, F); else if (U._bsontype === "BSONSymbol") F = Z4($, k, U, F); else if (U._bsontype === "DBRef") F = q4($, k, U, F, Z, q, W); else if (U._bsontype === "BSONRegExp") F = nQ($, k, U, F); else if (U._bsontype === "Int32") F = $4($, k, U, F); else if (U._bsontype === "MinKey" || U._bsontype === "MaxKey") F = tQ($, k, U, F); else if (typeof U._bsontype !== "undefined") throw new L(`Unrecognized or invalid _bsontype: ${String(U._bsontype)}`);
				} else if (A === "function" && q) F = J4($, k, U, F);
			}
		} else {
			if (typeof Q?.toBSON === "function") {
				if ((Q = Q.toBSON(), Q != null && typeof Q !== "object")) throw new L("toBSON function did not return an object");
			}

			for (let j of Object.keys(Q)) {
				let X = Q[j];

				if (typeof X?.toBSON === "function") X = X.toBSON();

				let P = typeof X;

				if (typeof j === "string" && !jY.has(j)) {
					if (j.match(F5) != null) throw new L("key " + j + " must not contain null bytes");

					if (J) {
						if (j[0] === "$") throw new L("key " + j + " must not start with '$'"); else if (j.includes(".")) throw new L("key " + j + " must not contain '.'");
					}
				}

				if (X === void 0) {
					if (K === !1) F = b8($, j, X, F);
				} else if (X === null) F = b8($, j, X, F); else if (P === "string") F = bQ($, j, X, F); else if (P === "number") F = fQ($, j, X, F); else if (P === "bigint") F = lQ($, j, X, F); else if (P === "boolean") F = uQ($, j, X, F); else if (P === "object" && X._bsontype == null) if (X instanceof Date || l8(X)) F = dQ($, j, X, F); else if (X instanceof Uint8Array || b$(X)) F = sQ($, j, X, F); else if (X instanceof RegExp || f8(X)) F = oQ($, j, X, F); else F = rQ($, j, X, F, J, Z, q, K, W); else if (P === "object") {
					if (X[o8] !== P8) throw new V8(); else if (X._bsontype === "ObjectId") F = aQ($, j, X, F); else if (X._bsontype === "Decimal128") F = iQ($, j, X, F); else if (X._bsontype === "Long" || X._bsontype === "Timestamp") F = eQ($, j, X, F); else if (X._bsontype === "Double") F = Q4($, j, X, F); else if (X._bsontype === "Code") F = Y4($, j, X, F, J, Z, q, K, W); else if (X._bsontype === "Binary") F = G4($, j, X, F); else if (X._bsontype === "BSONSymbol") F = Z4($, j, X, F); else if (X._bsontype === "DBRef") F = q4($, j, X, F, Z, q, W); else if (X._bsontype === "BSONRegExp") F = nQ($, j, X, F); else if (X._bsontype === "Int32") F = $4($, j, X, F); else if (X._bsontype === "MinKey" || X._bsontype === "MaxKey") F = tQ($, j, X, F); else if (typeof X._bsontype !== "undefined") throw new L(`Unrecognized or invalid _bsontype: ${String(X._bsontype)}`);
				} else if (P === "function" && q) F = J4($, j, X, F);
			}
		}

		(W.delete(Q), $[F++] = 0);

		let H = F - Y;

		return (Y += f.setInt32LE($, Y, H), F);
	}

	function wq($) {
		return $ != null && typeof $ === "object" && "_bsontype" in $ && typeof $._bsontype === "string";
	}

	var hq = {
		$oid: j0,
		$binary: o,
		$uuid: o,
		$symbol: a8,
		$numberInt: u$,
		$numberDecimal: O0,
		$numberDouble: i0,
		$numberLong: V,
		$minKey: t8,
		$maxKey: n8,
		$regex: e0,
		$regularExpression: e0,
		$timestamp: W$
	};

	function SY($, Q = {}) {
		if (typeof $ === "number") {
			let Y = $ <= y1 && $ >= g1, Z = $ <= HY && $ >= PY;

			if (Q.relaxed || Q.legacy) return $;

			if (Number.isInteger($) && !Object.is($, -0)) {
				if (Y) return new u$($);

				if (Z) {
					if (Q.useBigInt64) return BigInt($);

					return V.fromNumber($);
				}
			}

			return new i0($);
		}

		if ($ == null || typeof $ !== "object") return $;
		if ($.$undefined) return null;

		let J = Object.keys($).filter((Y) => Y.startsWith("$") && $[Y] != null);

		for (let Y = 0; Y < J.length; Y++) {
			let Z = hq[J[Y]];

			if (Z) return Z.fromExtendedJSON($, Q);
		}

		if ($.$date != null) {
			let Y = $.$date, Z = new Date();

			if (Q.legacy) if (typeof Y === "number") Z.setTime(Y); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new K5(`Unrecognized type for EJSON date: ${typeof Y}`); else if (typeof Y === "string") Z.setTime(Date.parse(Y)); else if (V.isLong(Y)) Z.setTime(Y.toNumber()); else if (typeof Y === "number" && Q.relaxed) Z.setTime(Y); else if (typeof Y === "bigint") Z.setTime(Number(Y)); else throw new K5(`Unrecognized type for EJSON date: ${typeof Y}`);

			return Z;
		}

		if ($.$code != null) {
			let Y = Object.assign({}, $);

			if ($.$scope) Y.$scope = SY($.$scope);

			return l$.fromExtendedJSON($);
		}

		if (mY($) || $.$dbPointer) {
			let Y = $.$ref ? $ : $.$dbPointer;

			if (Y instanceof T$) return Y;

			let Z = Object.keys(Y).filter((K) => K.startsWith("$")),
				q = !0;

			if ((
				Z.forEach((K) => {
					if (["$ref", "$id", "$db"].indexOf(K) === -1) q = !1;
				}),
				q
			)) return T$.fromExtendedJSON(Y);
		}

		return $;
	}

	function mq($, Q) {
		return $.map((J, Y) => {
			Q.seenObjects.push({ propertyName: `index ${Y}`, obj: null });

			try {
				return A$(J, Q);
			} finally {
				Q.seenObjects.pop();
			}
		});
	}

	function XY($) {
		let Q = $.toISOString();

		return $.getUTCMilliseconds() !== 0 ? Q : Q.slice(0, -5) + "Z";
	}

	function A$($, Q) {
		if ($ instanceof Map || j4($)) {
			let J = Object.create(null);

			for (let [Y, Z] of $) {
				if (typeof Y !== "string") throw new L("Can only serialize maps with string keys");

				J[Y] = Z;
			}

			return A$(J, Q);
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

		if (Array.isArray($)) return mq($, Q);
		if ($ === void 0) return Q.ignoreUndefined ? void 0 : null;

		if ($ instanceof Date || l8($)) {
			let J = $.getTime(),
				Y = J > -1 && J < 253402318800000;

			if (Q.legacy) return Q.relaxed && Y ? { $date: $.getTime() } : { $date: XY($) };

			return Q.relaxed && Y
				? { $date: XY($) }
				: { $date: { $numberLong: $.getTime().toString() } };
		}

		if (typeof $ === "number" && (!Q.relaxed || !isFinite($))) {
			if (Number.isInteger($) && !Object.is($, -0)) {
				if ($ >= g1 && $ <= y1) return { $numberInt: $.toString() };
				if ($ >= PY && $ <= HY) return { $numberLong: $.toString() };
			}

			return { $numberDouble: Object.is($, -0) ? "-0.0" : $.toString() };
		}

		if (typeof $ === "bigint") {
			if (!Q.relaxed) return { $numberLong: BigInt.asIntN(64, $).toString() };

			return Number(BigInt.asIntN(64, $));
		}

		if ($ instanceof RegExp || f8($)) {
			let J = $.flags;

			if (J === void 0) {
				let Z = $.toString().match(/[gimuy]*$/);

				if (Z) J = Z[0];
			}

			return new e0($.source, J).toExtendedJSON(Q);
		}

		if ($ != null && typeof $ === "object") return Bq($, Q);

		return $;
	}

	var Nq = {
		Binary: ($) => new o($.value(), $.sub_type),
		Code: ($) => new l$($.code, $.scope),
		DBRef: ($) => new T$($.collection || $.namespace, $.oid, $.db, $.fields),
		Decimal128: ($) => new O0($.bytes),
		Double: ($) => new i0($.value),
		Int32: ($) => new u$($.value),
		Long: ($) => V.fromBits($.low != null ? $.low : $.low_, $.low != null ? $.high : $.high_, $.low != null ? $.unsigned : $.unsigned_),
		MaxKey: () => new n8(),
		MinKey: () => new t8(),
		ObjectId: ($) => new j0($),
		BSONRegExp: ($) => new e0($.pattern, $.options),
		BSONSymbol: ($) => new a8($.value),
		Timestamp: ($) => W$.fromBits($.low, $.high)
	};

	function Bq($, Q) {
		if ($ == null || typeof $ !== "object") throw new L("not an object instance");

		let J = $._bsontype;

		if (typeof J === "undefined") {
			let Y = {};

			for (let Z of Object.keys($)) {
				Q.seenObjects.push({ propertyName: Z, obj: null });

				try {
					let q = A$($[Z], Q);

					if (Z === "__proto__") Object.defineProperty(Y, Z, { value: q, writable: !0, enumerable: !0, configurable: !0 }); else Y[Z] = q;
				} finally {
					Q.seenObjects.pop();
				}
			}

			return Y;
		} else if ($ != null && typeof $ === "object" && typeof $._bsontype === "string" && $[o8] !== P8) throw new V8(); else if (wq($)) {
			let Y = $;

			if (typeof Y.toExtendedJSON !== "function") {
				let Z = Nq[$._bsontype];

				if (!Z) throw new L("Unrecognized or invalid _bsontype: " + $._bsontype);

				Y = Z(Y);
			}

			if (J === "Code" && Y.scope) Y = new l$(Y.code, A$(Y.scope, Q)); else if (J === "DBRef" && Y.oid) Y = new T$(A$(Y.collection, Q), A$(Y.oid, Q), A$(Y.db, Q), A$(Y.fields, Q));

			return Y.toExtendedJSON(Q);
		} else throw new L("_bsontype must be a string, but was: " + typeof J);
	}

	function _Y($, Q) {
		let J = {
			useBigInt64: Q?.useBigInt64 ?? !1,
			relaxed: Q?.relaxed ?? !0,
			legacy: Q?.legacy ?? !1
		};

		return JSON.parse($, (Y, Z) => {
			if (Y.indexOf("\x00") !== -1) throw new L(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(Y)}`);

			return SY(Z, J);
		});
	}

	function yY($, Q, J, Y) {
		if (J != null && typeof J === "object") (Y = J, J = 0);
		if (Q != null && typeof Q === "object" && !Array.isArray(Q)) (Y = Q, Q = void 0, J = 0);

		let Z = Object.assign({ relaxed: !0, legacy: !1 }, Y, { seenObjects: [{ propertyName: "(root)", obj: null }] }),
			q = A$($, Z);

		return JSON.stringify(q, Q, J);
	}

	function Oq($, Q) {
		return (Q = Q || {}, JSON.parse(yY($, Q)));
	}

	function Sq($, Q) {
		return (Q = Q || {}, _Y(JSON.stringify($), Q));
	}

	var s8 = Object.create(null);

	s8.parse = _Y;
	s8.stringify = yY;
	s8.serialize = Oq;
	s8.deserialize = Sq;
	Object.freeze(s8);

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

	function K4($, Q) {
		try {
			return f.getNonnegativeInt32LE($, Q);
		} catch(J) {
			throw new F$("BSON size cannot be negative", Q, { cause: J });
		}
	}

	function F4($, Q) {
		let J = Q;

		for (; $[J] !== 0; J++) ;

		if (J === $.length - 1) throw new F$("Null terminator not found", Q);

		return J;
	}

	function _q($, Q = 0) {
		if ((Q ??= 0, $.length < 5)) throw new F$(`Input must be at least 5 bytes, got ${$.length} bytes`, Q);

		let J = K4($, Q);

		if (J > $.length - Q) throw new F$(`Parsed documentSize (${J} bytes) does not match input length (${$.length} bytes)`, Q);
		if ($[Q + J - 1] !== 0) throw new F$("BSON documents must end in 0x00", Q + J);

		let Y = [], Z = Q + 4;

		while (Z <= J + Q) {
			let q = $[Z];

			if ((Z += 1, q === 0)) {
				if (Z - Q !== J) throw new F$("Invalid 0x00 type byte", Z);

				break;
			}

			let K = Z, W = F4($, Z) - K;

			Z += W + 1;

			let F;

			if (q === P0.double || q === P0.long || q === P0.date || q === P0.timestamp) F = 8; else if (q === P0.int) F = 4; else if (q === P0.objectId) F = 12; else if (q === P0.decimal) F = 16; else if (q === P0.bool) F = 1; else if (q === P0.null || q === P0.undefined || q === P0.maxKey || q === P0.minKey) F = 0; else if (q === P0.regex) F = F4($, F4($, Z) + 1) + 1 - Z; else if (q === P0.object || q === P0.array || q === P0.javascriptWithScope) F = K4($, Z); else if (q === P0.string || q === P0.binData || q === P0.dbPointer || q === P0.javascript || q === P0.symbol) {
				if ((F = K4($, Z) + 4, q === P0.binData)) F += 1;
				if (q === P0.dbPointer) F += 12;
			} else throw new F$(`Invalid 0x${q.toString(16).padStart(2, "0")} type byte`, Z);

			if (F > J) throw new F$("value reports length larger than document", Z);

			(Y.push([q, K, W, Z, F]), Z += F);
		}

		return Y;
	}

	var p1 = Object.create(null);

	p1.parseToElements = _q;
	p1.ByteUtils = z;
	p1.NumberUtils = f;
	Object.freeze(p1);

	var gY = 17825792, f$ = z.allocate(gY);

	function yq($) {
		if (f$.length < $) f$ = z.allocate($);
	}

	function gq($, Q = {}) {
		let J = typeof Q.checkKeys === "boolean" ? Q.checkKeys : !1,
			Y = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
			Z = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0,
			q = typeof Q.minInternalBufferSize === "number" ? Q.minInternalBufferSize : gY;

		if (f$.length < q) f$ = z.allocate(q);

		let K = v1(f$, $, J, 0, 0, Y, Z, null),
			W = z.allocateUnsafe(K);

		return (W.set(f$.subarray(0, K), 0), W);
	}

	function vq($, Q, J = {}) {
		let Y = typeof J.checkKeys === "boolean" ? J.checkKeys : !1,
			Z = typeof J.serializeFunctions === "boolean" ? J.serializeFunctions : !1,
			q = typeof J.ignoreUndefined === "boolean" ? J.ignoreUndefined : !0,
			K = typeof J.index === "number" ? J.index : 0,
			W = v1(f$, $, Y, 0, 0, Z, q, null);

		return (Q.set(f$.subarray(0, W), K), K + W - 1);
	}

	function pq($, Q = {}) {
		return OY(z.toLocalBufferType($), Q);
	}

	function xq($, Q = {}) {
		Q = Q || {};

		let J = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
			Y = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0;

		return G5($, J, Y);
	}

	function cq($, Q, J, Y, Z, q) {
		let K = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, q),
			W = z.toLocalBufferType($),
			F = Q;

		for (let H = 0; H < J; H++) {
			let j = f.getInt32LE(W, F);

			(K.index = F, Y[Z + H] = OY(W, K), F = F + j);
		}

		return F;
	}

	var j$ = Object.freeze({
		__proto__: null,
		BSONError: L,
		BSONOffsetError: F$,
		BSONRegExp: e0,
		BSONRuntimeError: K5,
		BSONSymbol: a8,
		BSONType: rZ,
		BSONValue: y0,
		BSONVersionError: V8,
		Binary: o,
		ByteUtils: z,
		Code: l$,
		DBRef: T$,
		Decimal128: O0,
		Double: i0,
		EJSON: s8,
		Int32: u$,
		Long: V,
		MaxKey: n8,
		MinKey: t8,
		NumberUtils: f,
		ObjectId: j0,
		Timestamp: W$,
		UUID: w0,
		bsonType: z4,
		calculateObjectSize: xq,
		deserialize: pq,
		deserializeStream: cq,
		onDemand: p1,
		serialize: gq,
		serializeWithBufferAndIndex: vq,
		setInternalBufferSize: yq
	});

	var L0,
		r8 = new Map(),
		x1 = !0,
		k4 = 0,
		L4 = !1,
		D4 = !1;

	function B1() {
		let $ = q0.url?.ws;

		(
			L0 = $
				? new WebSocket(`${$}${$.includes("?") ? "&" : "?"}v=${HJ}`)
				: m.ws.$ws(),
			L0.binaryType = "arraybuffer",
			x1 = !0,
			L0.addEventListener("open", () => {
				(
					console.log("[WS] Connected"),
					L4 = !1,
					D4 = !1,
					k4 = 0,
					A7(),
					pY(),
					S8()
				);
			}),

			L0.addEventListener("message", (Q) => {
				let J = j$.deserialize(Q.data);

				if ((V$ && console.debug("[WS] SERVER", J), r8.has(J.nonce))) {
					let Z = r8.get(J.nonce);

					(r8.delete(J.nonce), Z(J));
				}

				let Y = _Q.get(J.op);

				if (!Y) {
					console.error("[WS] Got an unexpected packet", J);

					return;
				}

				Y(J);
			}),

			L0.addEventListener("close", (Q) => {
				if ((
					r8.clear(),
					console.warn(`[WS] Disconnected (${Q.code})`),
					Q.code == 4008
				)) {
					(x1 = !1, J7());

					return;
				}

				if (!x1 || document.hidden) return;
				if ((console.warn("[WS] Reconnecting..."), Q.code == 4004 && !A4)) g$();

				let J = Math.random() * 2000;

				if (Q.code == 4007) setTimeout(B1, 500 + J); else {
					k4++;

					let Y = Math.min(5000 * k4, 30000);

					setTimeout(B1, Y + J);
				}
			})
		);
	}

	function W7($) {
		if ((x1 = !1, L0)) L0.close($);
	}

	var C4;

	document.addEventListener("visibilitychange", () => {
		if ((clearTimeout(C4), C4 = null, document.hidden)) {
			C4 = setTimeout(
				() => {
					if (!document.hidden) return;

					(
						console.log("Tab has been inactive for over a minute, disconnecting from WS"),
						L0?.close()
					);
				},
				60000
			);

			return;
		}

		if (x1 && (!L0 || L0.readyState == WebSocket.CLOSED)) B1();
	});

	function Y5() {
		return L0 && L0.readyState == WebSocket.OPEN;
	}

	function vY($ = {}) {
		if (!Y5()) return (
			delete $.token,
			console.warn("Tried to send a packet while the connection is closed", $),
			!0
		);
	}

	var A4 = !1;

	function S8() {
		if (L4 || !Y5()) return;
		if (h$() && !(R.token && R.user)) return;

		(A4 = !0, E1(2, { token: h$() ?? "viewer" }));
	}

	function y7() {
		(D4 = !0, vQ());
	}

	function E1($, Q) {
		if (vY(Q) || !L0) return !1;
		if ($ != 2 && !D4) return !1;
		if ($ == 2) (A4 = !1, L4 = !0);

		(
			V$ && console.debug("[WS] CLIENT", $, Q),
			L0.send(j$.serialize({ op: $, ...Q ?? {} }))
		);
	}

	function c$($, Q, J = 15000) {
		return new Promise((Y, Z) => {
			if (vY(Q) || !L0) return Z("Tried to send a packet while the connection is closed");

			let q = Date.now(),
				K = setTimeout(
					() => {
						(r8.delete(q), Z(`Nonce ${q} timed out after ${J}ms`));
					},
					J
				);

			(
				r8.set(q, (W) => {
					(clearTimeout(K), Y(W));
				}),
				V$ && console.debug(`[WS] CLIENT (nonce=${q})`, $, Q),
				L0.send(j$.serialize({ op: $, nonce: q, ...Q ?? {} }))
			);
		});
	}

	function bq($, Q) {
		let J = Math.imul($, 374761393) + Math.imul(Q, 668265263) | 0;

		return (
			J = Math.imul(J ^ J >>> 13, 1274126177),
			J ^= J >>> 16,
			(J >>> 0) / 4294967296
		);
	}

	function xY($, Q) {
		if (Q >= X6) return !1;

		let J = X6 - c5;

		if (Q < J) return !0;

		let Y = (X6 - Q) / c5;

		return bq($, Q) < Y;
	}

	function fq($) {
		let Q = Math.max(0, Math.floor((Date.now() - $) / 1000));

		if (Q < 60) return "just now";

		let J = Math.floor(Q / 60);

		if (J < 60) return `${J}m ago`;

		let Y = Math.floor(J / 60);

		if (Y < 24) return `${Y}h ago`;

		return `${Math.floor(Y / 24)}d ago`;
	}

	function lq($) {
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
			G("div.time", E0($.createdAt, fq($.createdAt)))
		);
	}

	function cY() {
		let $ = [...q$.unread];

		return (
			q$.markAllRead(),
			new _("Notifications", G(
				"div.notifications-modal",
				$.length
					? G("div.list", $.map(lq))
					: G("p.desc.c", "No notifications."),
				G("div.btn-container", i$)
			))
		);
	}

	function bY() {
		let $ = G("span.notif-badge"),
			Q = G("img", { src: "/static/icon/notif.png", draggable: !1, alt: "bell" }),
			J = G("button.btn.swatch.tooltip.notif-indicator.icon", Q, $, {
				dataset: { tooltip: "Notifications" },
				onclick() {
					cY();
				}
			});

		return (
			q$.bind(() => {
				let Y = q$.unreadCount;

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

	function W5() {
		new _("Select Color", G("div.color-modal", G("div.colors", Z0.map(($) => G("button.btn.swatch.tooltip", {
			dataset: { tooltip: $.name },
			style: { backgroundColor: $.hex },
			onclick() {
				(R8($), p());
			}
		})))));
	}

	var g0 = [...Z0], M8 = G("div.colors.container");

	function X5($) {
		let Q = g0.indexOf($);

		if (Q > -1) (g0.splice(Q, 1), g0.push($));
	}

	var j5 = ($) => Z0.findIndex((Q) => Q.name == $);

	function uq() {
		let $ = x.lastUsedColors;

		if ($.length != g0.length) {
			let Q = j5("Red"),
				J = j5("Violet"),
				Y = Z0.slice(Q, J + 1);

			(X5(Z0[j5("Gray")]), X5(Z0[j5("White")]));

			for (let Z of Y) X5(Z);

			return;
		}

		(g0.splice(0), g0.push(...$.map((Q) => Z0[Q])));
	}

	function lY($) {
		let Q = g0[g0.length - $];

		if (!Q) return;

		R8(Q, !1);
	}

	function R8($, Q = !0) {
		if ((C2($.hex, $.dark), R.selectedColor == $)) return;
		if (g0.indexOf($) > -1 && Q) (X5($), x.lastUsedColors = g0.map((Y) => Y.idx));

		(R.selectedColor = $, T4());
	}

	var dq = 54, oq = 9;

	function fY($) {
		let Q = getComputedStyle($),
			J = $.clientWidth - parseFloat(Q.paddingLeft) - parseFloat(Q.paddingRight);

		for (let Y = 0; Y < $.children.length; Y++) {
			let Z = $.children[Y];

			if (Z === M8) continue;

			J -= Z.getBoundingClientRect().width;
		}

		return J;
	}

	function T4() {
		let $ = W6(F6("tool/colors", { id: "palette-btn", onclick: W5 }), "Palette");

		M8.replaceChildren($);

		let Q = M8.parentElement, J = Q ? fY(Q) : 0;

		if (J <= 0) {
			requestAnimationFrame(() => {
				if (Q && fY(Q) > 0) T4();
			});

			return;
		}

		let Y = Math.floor(J / dq) - 1,
			Z = Math.max(0, Math.min(oq, Y));

		for (let q = 0; q < Z; q++) {
			let K = g0[g0.length - 1 - q],
				W = G("button.btn.swatch.tooltip", {
					tabIndex: -1,
					dataset: { tooltip: K.name },
					style: { backgroundColor: K.hex },
					onclick() {
						R8(K, !1);
					}
				});

			M8.append(W);
		}
	}

	function uY() {
		(
			uq(),
			R8(g0[g0.length - 1], !1),
			R.setPaintRemaining(R.paintRemaining)
		);

		let $ = M8.parentElement;

		if ($) {
			let Q = -1;

			new ResizeObserver(() => {
				let J = $.clientWidth;

				if (J === Q) return;

				(Q = J, T4());
			}).observe($);
		}
	}

	var I4 = G("div.hotbar-container");

	function H5($) {
		I4.replaceChildren($);
	}

	var c1 = G("div.hotbar.main-bar", { role: "toolbar" });

	function dY() {
		(
			c1.append(G("div.status-text-container", B8, G8), G("div.section.left", oY(), G("div#chatbox-divider.divider"), y2, G("div.divider")), G("div.section.middle", e$, z2, bY()), G("div.section.right", G("div.divider"), g2, G("div.divider"), M8)),
			R.setTool(0),
			H5(c1),
			O$(0),
			uY()
		);
	}

	var U0 = new Map();

	function v2() {
		for (let [$, Q] of U0) J8($, Q, $ % b, Math.floor($ / b));
	}

	function J8($, Q, J, Y) {
		if ($8) {
			let Z = Z0[Z$[$]];

			if (Z) U$(J, Y, ((Z.u32 & 4278124286) >> 1) + ((Q.u32 & 4278124286) >> 1), !0); else U$(J, Y, VJ | Q.u24, !0);
		} else U$(J, Y, Q.u32, !0);
	}

	function nY() {
		(
			R.localPaintIncrement = 0,
			R.setPaintRemaining(R.paintRemaining)
		);

		for (let $ of U0.keys()) {
			let Q = $ % b,
				J = Math.floor($ / b),
				Y = Z0[Z$[$]];

			U$(Q, J, Y?.u32 ?? 0);
		}

		for (let $ of m8.values()) $.persistent = !1;

		(U0.clear(), u2());
	}

	function nq() {
		nY();
	}

	async function tY($, Q = 0) {
		if (Q >= 5) return (
			console.error("Failed to submit the drawing after 5 tries."),
			!1
		);

		let J = await aY($);

		if (window[P2]) return !0;

		try {
			return (await sY(J), setTimeout(() => E1(0), 500), !0);
		} catch(Y) {
			return (
				console.error("Error submitting the drawing:", Y),
				await tY($, Q + 1)
			);
		}
	}

	async function tq() {
		let $ = [];

		for (let [Q, J] of U0) ($.push([Q, J.idx]), N8(Q, J.idx));

		if ((R.commitLocalPaint(), nY(), $.length === 0 || l6 || i2)) {
			$7();

			return;
		}

		for (let Q = 0; Q < $.length; Q += H6) if (!await tY($.slice(Q, Q + H6))) return e("Something went wrong, sorry!", "Could not submit local drawing to the server after 5 tries");
	}

	function UQ($, Q) {
		if (!R1($) || !R1(Q) || $ < 0 || Q < 0 || $ >= b || !xY($, Q)) return !1;

		let J = R.paintRemaining + R.localPaintIncrement,
			Y = H6 - F0 - 5,
			Z = J % F0 == 0 && R.localPaintIncrement < -Y;

		if (!J || Z) return (w4(), !1);

		let q = R.selectedColor, K = Q * b + $;

		if (U0.has(K)) {
			if (U0.get(K) == q) return !1;
		} else if (Z$[K] == q.idx) return !1;

		if ((J8(K, q, $, Q), !U0.has(K))) R.addLocalPaintIncrement(-1);

		return (
			s0.push({
				x: $,
				y: Q,
				pos: K,
				oldColor: U0.get(K)?.idx,
				newColor: q.idx
			}),
			U0.set(K, q),
			!0
		);
	}

	async function p6() {
		M$();

		try {
			(c1.classList.add("progress"), await tq());
		} finally {
			c1.classList.remove("progress");
		}
	}

	async function o2() {
		if ((M$(), E4())) {
			if (!await i("Are you sure you want to cancel your changes?")) return;
		}

		nq();
	}

	function E4() {
		return U0.size > 200 || B0.length > 0;
	}

	var U8 = ($) => A0(q1($ / F0), "spray can");

	async function aq($) {
		if (!R.user) return;
		if (U0.size || B0.length || R.localPaintIncrement) return e("You cannot share your paint while drawing! Submit or undo your changes.");
		if (R.paintRemaining < 100) return e("You do not have enough paint");

		let Q = Math.min(R.paintRemaining, F0 * 5),
			J = G("p", { style: { maxWidth: "500px" } }),
			Y = () => {
				let K = parseInt(Z.value),
					W = Math.ceil(K / R.paintRemaining * 100);

				if (A8 == 1) J.replaceChildren(G("b", `${W}%`), " of your paint (", G("b", U8(K)), ")"); else J.replaceChildren("You will spend ", G("b", `${W}%`), " of your paint (", G("b", U8(K)), ")", " to give them ", G("b", U8(K * A8)));
			},
			Z = G("input", {
				type: "range",
				min: 100,
				max: Q,
				value: Math.min(F0, R.paintRemaining),
				oninput: Y
			}),
			q = G("datalist#fskjdhsad", Array.from({ length: Math.floor(Q / F0) }, (K, W) => G("option", { value: W * F0, label: W * F0 })));

		(
			Z.setAttribute("list", "fskjdhsad"),
			Y(),
			new _("Share Paint", G("div.share-paint-modal", G("p", "How much paint do you want to give to ", G("b", $.username), "?"), Z, q, J, G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.primary.btn", "Share", {
				async onclick() {
					let K = parseInt(Z.value);

					if (K * A8 / F0 < 0.1) return e("That's too little!");

					if (!await i(`Are you sure you want to ${A8 != 1
						? `spend ${U8(K)} to give ${U8(K * A8)}`
						: `give ${U8(K)}`} to ${$.username}?`)) return p();

					K0();

					let F = await m.user.sharePaint.$post({ json: { username: $.username, paint: K } });

					if (!F.ok) return T0(F, "Could not sell cans");

					let H = await F.json();

					new _("Share Paint", G("p", `Gifted ${U8(H.sold)} to ${$.username}!`));
				}
			}))))
		);
	}

	async function rY($) {
		K0();

		let Q = G("div.settings-modal", G("p.notice.noicon.user", G("span.name-container", $.clan_name && G("b", `${E$($.clan_name)} `), $.username), G("img", { src: b0($.cursor_sprite), draggable: !1, alt: "cursor" })));

		if ($.clan_name && $.clan_id) {
			let Y = await (await m.user.clan[":id"].$get({ param: { id: $.clan_id.toString() } })).json();

			Q.append(G("p.c", "Clan"), C1(Y));
		}

		(
			Q.append(G(
				"div.btn-container.vertical",
				G("button.btn", "Give Paint", {
					onclick() {
						aq($);
					}
				}),
				G("button.btn", "Jump to Cursor", {
					onclick() {
						_0({ connId: $.id, fallbackPos: $.lastPos, username: $.username });
					}
				}),
				G("button.btn", "Report User", {
					onclick() {
						w2($.username);
					}
				}),
				i$
			)),
			new _("User Info", Q)
		);
	}

	var b1 = new Set(),
		sq = 10,
		iY = 0.05,
		rq = 1e6,
		eY = performance.now();

	function $3($) {
		let Q = ($ - eY) / 1000, J = 1 - Math.exp(-sq * Q);

		eY = $;

		let Y = 0, Z = j8 ? 100 : 500;

		for (let q of b1) {
			if (Y++ >= Z) break;

			if (!q.element) {
				b1.delete(q);

				continue;
			}

			let K = q.moveX - q.x,
				W = q.moveY - q.y,
				F = K * K + W * W;

			if (Math.abs(K) < iY && Math.abs(W) < iY || F > rq) (q.x = q.moveX, q.y = q.moveY, b1.delete(q)); else (q.x += K * J, q.y += W * J);

			P5(q, q.x, q.y);
		}

		requestAnimationFrame($3);
	}

	function Q3($, Q, J) {
		let Y = R0.get($);

		if (!Y) return;

		if (DQ(Y.x, Y.y) && DQ(Q, J)) {
			(P5(Y, Q, J), b1.delete(Y));

			return;
		}

		(b1.add(Y), Y.moveX = Q, Y.moveY = J);
	}

	requestAnimationFrame($3);

	var R0 = new Map(),
		z8 = G("div.cursors"),
		f1 = G("div.cursor-overflow");

	f1.style.display = "none";
	z8.append(f1);

	function g7($) {
		if ($ > 0) (f1.textContent = `+${$} more here`, f1.style.display = ""); else f1.style.display = "none";
	}

	var iq = 50,
		l1 = new Set(),
		i8 = new Set(),
		Y3 = new Set(),
		G3 = {
			id: -1,
			username: "",
			cursor_sprite: 0,
			x: 0,
			y: 0,
			moveX: 0,
			moveY: 0,
			partial: !0
		};

	function pY() {
		for (let $ of R0.values()) if ($.element) $.element.remove();

		R0.clear();
	}

	function yQ($) {
		if (x.a11y.hideCursors) return;
		if ($.username == R.user?.username || $.id == R.connectionId) return;

		let Q = R0.get($.id),
			J = !!Q && !Q.partial && (Q.cursor_sprite !== $.cursor_sprite || Q.clan_name !== $.clan_name || Q.username !== $.username),
			Y = {
				...G3,
				...Q || {},
				id: $.id,
				username: $.username,
				cursor_sprite: $.cursor_sprite,
				clan_id: $.clan_id,
				clan_name: $.clan_name,
				partial: !1
			};

		if ((R0.set($.id, Y), Q?.element && Q.partial)) {
			let Z = Q.element.querySelector("img");

			if ((Q.element.append(h4(Y)), Z)) Z.src = b0($.cursor_sprite);
		} else if (Q?.element && J) eq(Y);
	}

	function eq($) {
		if (!$.element) return;

		let Q = $.element.querySelector("img");

		if (Q) Q.src = b0($.cursor_sprite);

		(
			$.element.querySelector(".chat-bubble")?.remove(),
			$.element.append(h4($))
		);
	}

	function $K($) {
		if (R0.has($) || $ == R.connectionId) return;

		let Q = { ...G3, id: $ };

		return (gQ($), R0.set($, Q), Q);
	}

	function gQ($) {
		if ($ === R.connectionId || R0.has($) || l1.has($) || i8.has($) || Y3.has($)) return;

		l1.add($);
	}

	function I7() {
		if (i8.size > 0 || l1.size === 0) return null;

		let $ = [];

		for (let Q of l1) {
			if ($.length >= iq) break;

			$.push(Q);
		}

		for (let Q of $) (l1.delete(Q), i8.add(Q));

		return $;
	}

	function v7($) {
		for (let Q of $) (yQ(Q), i8.delete(Q.id));
		for (let Q of i8) Y3.add(Q);

		i8.clear();
	}

	function p7($) {
		let Q = R0.get($);

		if (!Q) return;
		if (Q.element) Q.element.remove();

		R0.delete($);
	}

	var J3 = 0;

	function x7($, Q, J = !1) {
		if (x.a11y.hideCursors) return;
		if ($ == R.connectionId) return;

		let Y = R0.get($) || $K($);

		if (!Y) return;

		(Y.lastSeen = performance.now(), Y.lastPos = Q);

		let Z = Q % b, q = Math.floor(Q / b);

		if (!Y.element) (
			Y.element = G("div.cursor", { dataset: { id: Y.id.toString() } }, G("img", { draggable: !1, src: b0(Y.cursor_sprite), alt: "⬉" }), !Y.partial && h4(Y)),
			z8.append(Y.element),
			Y.hidden = !1,
			Y.element.style.zIndex = `${J3++}`
		); else if (Y.hidden) (JK(Y), Y.element.style.zIndex = `${J3++}`);

		if (J) Q3($, Z, q); else P5(Y, Z, q);
	}

	function P5($, Q, J) {
		if (!$.element) return;

		(
			$.element.style.translate = `${Q}px ${J}px`,
			$.x = Q,
			$.y = J
		);
	}

	function h4($) {
		return G("div.chat-bubble", G("span", $.clan_name && G("b", E$($.clan_name)), $.username, {
			onclick() {
				rY($);
			}
		}));
	}

	function QK($) {
		if (!$.element || $.hidden) return;

		($.element.style.opacity = "0", $.hidden = !0);
	}

	function JK($) {
		if (!$.element || !$.hidden) return;

		($.element.style.opacity = "", $.hidden = !1);
	}

	var YK = 1e4, GK = 1000;

	function ZK() {
		let $ = performance.now() - YK;

		for (let Q of R0.values()) {
			if (!Q.element || Q.hidden) continue;
			if (Q.lastSeen === void 0 || Q.lastSeen < $) QK(Q);
		}
	}

	setInterval(ZK, GK);

	var qK = 300, KK = 1000, FK = q0.url.api;

	async function m4($) {
		try {
			let Q = await fetch(FK + $, { cache: "no-store" });

			if (!Q.ok) return null;

			return await Q.json();
		} catch {
			return null;
		}
	}

	function u1($) {
		if ($ == null) return "—";
		if ($ < 1) return $.toFixed(2) + " ms";
		if ($ < 100) return $.toFixed(1) + " ms";

		return Math.round($) + " ms";
	}

	function Z3($) {
		if ($ == null) return "—";
		if ($ < 1024) return `${$} B`;
		if ($ < 1048576) return `${($ / 1024).toFixed(1)} KB`;

		return `${($ / 1024 / 1024).toFixed(1)} MB`;
	}

	function q3($) {
		if ($ == null) return "—";

		return $.toFixed(2) + "%";
	}

	function k8($, Q) {
		if ($ == null) return "—";

		return Q($);
	}

	var B4 = G("div.dev-overlay"),
		h0 = {
			active: !1,
			fps: 0,
			fpsFrameCount: 0,
			fpsWindowStart: performance.now(),
			wsState: "—",
			panel: B4
		};

	function WK($) {
		return ({
			[WebSocket.CONNECTING]: "CONNECTING",
			[WebSocket.OPEN]: "OPEN",
			[WebSocket.CLOSING]: "CLOSING",
			[WebSocket.CLOSED]: "CLOSED"
		})[$] || "—";
	}

	function jK() {
		return `${~~(D.viewport.x2 - D.viewport.x)}x${~~(D.viewport.y2 - D.viewport.y)} px / ${K8.size} chunks`;
	}

	function XK() {
		let $ = performance.memory;

		if (!$) return "n/a";

		let Q = $.usedJSHeapSize ?? 0,
			J = $.totalJSHeapSize ?? 0;

		return `${Z3(Q)} / ${Z3(J)}`;
	}

	function F3() {
		if (!h0.active) return;

		h0.fpsFrameCount++;

		let $ = performance.now(),
			Q = $ - h0.fpsWindowStart;

		if (Q >= 1000) (
			h0.fps = Math.round(h0.fpsFrameCount * 1000 / Q),
			h0.fpsFrameCount = 0,
			h0.fpsWindowStart = $
		);

		requestAnimationFrame(F3);
	}

	function I0($, Q) {
		return G("div.dev-overlay-row", G("span.dev-overlay-label", $), G("span.dev-overlay-value", Q));
	}

	function V5($, ...Q) {
		return G("div.dev-overlay-section", G("div.dev-overlay-section-title", $), ...Q);
	}

	var N4, K3 = 0;

	async function HK() {
		if (!V$) return "";

		if (!N4 || K3 < Date.now()) (
			K3 = Date.now() + KK,
			N4 = await Promise.all([
				m4("/metrics/loop-lag"),
				m4("/metrics/sendbulk"),
				m4("/metrics/canvas-density")
			])
		);

		let [$, Q, J] = N4;

		return V5("server", I0("loop lag p99 / max", `${k8($?.p99_ms, u1)} / ${k8($?.max_ms, u1)}`), I0("sendBulk last-10s cpu", k8(Q?.last_10s?.cpu_pct_of_window, q3)), I0("sendBulk p99 / max", `${k8(Q?.p99_call_ms, u1)} / ${k8(Q?.max?.call_ms, u1)}`), I0("sendBulk avg fanout", k8(Q?.avg_fanout, (Y) => Y.toFixed(0))), I0("canvas density", k8(J?.density_pct, q3)));
	}

	async function W3() {
		if (!h0.active) return;

		(
			setTimeout(W3, qK),
			h0.wsState = WK(L0?.readyState),
			h0.panel.replaceChildren(G("div.dev-overlay-title", "wall: dev"), await HK(), V5("ws", I0("state", h0.wsState), I0("connection id", String(R.connectionId)), I0("ping rtt", u1(R.debug.ping)), I0("identified", R.user ? "yes" : "no")), V5("client", I0("fps", String(h0.fps)), I0("memory (jsHeap)", XK()), I0("known users", String(R0.size)), I0("paint remaining", `${R.paintRemaining} (${Math.round(R.paintRemaining / F0)} cans)`)), V5("camera", I0("translation", `${D.x.toFixed(2)}, ${D.y.toFixed(2)}`), I0("zoom", `${D.zoom.toFixed(1)} client / ${D.normalizedZoom.toFixed(1)} normal`), I0("viewport", jK()), I0("cursor", `${R.cursorX}, ${R.cursorY}`)))
		);
	}

	function R5() {
		if (h0.active) return;

		(
			h0.active = !0,
			document.body.append(B4),
			requestAnimationFrame(F3),
			W3()
		);
	}

	function j3() {
		if (!h0.active) return;

		(B4.remove(), h0.active = !1);
	}

	var j8 = !1;

	function C8($, Q, J = "") {
		let Y = `s_${$}`,
			Z = G("input", {
				type: "checkbox",
				id: Y,
				checked: !!x.a11y[$],
				onchange() {
					if (Z.checked) x.a11y[$] = !0; else delete x.a11y[$];

					(d1(), N0());
				}
			});

		return G("div.checkbox", Z, G("label.tooltip", Q, { dataset: { tooltip: J }, htmlFor: Y }));
	}

	function M5() {
		let $ = new _("Settings", G("div.settings-modal", G("h3", "Accessibility"), C8("darkTheme", "Dark Theme"), C8("performanceMode", "Performance Mode", `Attempts to reduce the amount of stutters.${x.flags.perfModeAutoEnabled ? " (Recommended)" : ""}`), C8("hideNameplates", "Hide Nameplates", "Shows cursors, but removes names/chat bubbles"), C8("hideCursors", "Hide Other Cursors", "Completely hides all cursors on the canvas"), C8("systemCursor", "Use System Cursor", "Local only. Use this if you have issues with our custom cursor"), C8("hideChatBubbles", "Hide Chat Bubbles", "Do not show chat bubbles next to users. Chat is still available."), C8("devOverlay", "Stats For Nerds"), R.user && L2())),
			Q = $.titleElement.querySelector("button.icon");

		if (Q) Q.onclick = () => $.close(!0);

		return $;
	}

	function d1() {
		let $ = x.a11y;

		if ($.hideCursorKeybind) ($.hideCursorKeybind = !1, $.hideCursors = !1);
		if ((j8 = !!$.performanceMode, $.lowQualityBg)) ($.performanceMode = !0, delete $.lowQualityBg);

		if ((
			document.body.classList.toggle("dark", !!$.darkTheme),
			document.body.classList.toggle("hide-nameplates", !!$.hideNameplates),
			$.hideCursors
		)) z8.remove(); else X$.append(z8);

		if ($.systemCursor) P1(); else B6();
		if ($.performanceMode) P3(); else H3();
		if ($.devOverlay) R5(); else j3();
	}

	function X3() {
		if (!f0) return;
		if (x.flags.perfModeAutoEnabled) return;

		(
			x.a11y.performanceMode = !0,
			x.flags.perfModeAutoEnabled = !0,
			N0()
		);
	}

	async function aY($) {
		let Q = new Uint8Array($.length * 5),
			J = new DataView(Q.buffer),
			Y = 0;

		for (let Z of $) if ((
			J.setUint32(Y, Z[0], !0),
			J.setUint8(Y + 4, Z[1]),
			Y += 5,
			j8 && Y % 2500 == 0
		)) await q6();

		return Q;
	}

	function sY($) {
		if (!JQ) return;

		return c$(7, { pixels: $ });
	}

	function o7() {
		return c$(9, {}, 1e4);
	}

	function V3($) {
		return c$(10, $, 5000);
	}

	var U5 = 160;

	function O4($) {
		let Q = $ % b, J = Math.floor($ / b);

		S4(Q, J);
	}

	function S4($, Q) {
		o1($ - U5 / 2, Q - U5 / 2, U5, U5);
	}

	async function _0($) {
		let { connId: Q, userId: J, fallbackPos: Y, username: Z } = $;

		if (Q !== void 0 && Q === R.connectionId) return (m$("That's you!"), !1);

		if (Q !== void 0) {
			let q = R0.get(Q);

			if (q && !q.partial && q.lastPos !== void 0) return (O4(q.lastPos), !0);
		}

		if (Y !== void 0) return (O4(Y), !0);

		if (Q !== void 0 || J !== void 0) try {
			let q = await V3({ connId: Q, userId: J });

			if (q.pos != null) return (O4(q.pos), !0);
		} catch {}

		return (
			m$(Z
				? `${Z} isn't on the wall right now.`
				: "That user isn't on the wall right now."),
			!1
		);
	}

	function R3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = null;

		async function Z(K) {
			if (K) (Y = null, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let W = await _J({ status: "open", cursor: Y ?? void 0, limit: 25 });

			if (!W.ok) {
				Q.replaceChildren(Y0(await d(W)));

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
				j = (A, g, O) => G("button.btn", A, {
					async onclick() {
						if (!await i(O, A)) return;

						let C = await yJ(K.id, g, F.value.trim() || void 0);

						if (!C.ok) {
							W.replaceChildren(G("p.error.noicon", `${A} failed: ${await d(C)}`));

							return;
						}

						H.remove();
					}
				}),
				X = K.details.user_id,
				P = G("div.mod-flag-samples");

			if (typeof X == "number") (async () => {
				let A = await $2(X);

				if (!A.ok) return;

				let { samples: g } = await A.json();

				if (!g.length) return;

				let O = g.map((M) => ({
					pixels: w6(new Uint8Array([...atob(M.pixels)].map((C) => C.charCodeAt(0)))),
					label: x0(M.createdAt)
				}));

				P.replaceChildren(G("span.desc", "flagged draws:"), ...O.map((M, C) => {
					let y = E8(M.pixels);

					return (
						y.title = `${M.label} (click to expand)`,
						y.classList.add("mod-clickable-thumb"),
						y.addEventListener("click", () => Z2(O, C)),
						y
					);
				}));
			})();

			let k = K.target_username,
				U = typeof X == "number"
					? G(
						"div.mod-form-row.mod-review-target",
						k
							? G("span.mod-jump-name.tooltip", k, {
								dataset: { tooltip: v.jumpTo },
								async onclick() {
									if (await _0({ userId: X, username: k })) (
										p(),
										w$({ label: "Review Queue", reopen: () => s("review") })
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
				H.append(G("div.mod-review-head", G("b", K.kind), G("span.mod-tag", `x${K.hit_count}`), G("span.desc", E0(K.created_at))), U, P, G("div.details", A6(K.details)), G("div.input", F), G("div.mod-form-row", j("Dismiss", "dismiss", `Dismiss review item #${K.id}?`), j("Mark clean", "mark_clean", `Mark item #${K.id} clean?`), j("Ban", "ban", `Perma-ban the target of item #${K.id}?`)), W),
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

	function M3() {
		let $ = G("div.mod-action-msg"),
			Q = G("input.box", {
				type: "text",
				placeholder: "Title (optional)",
				maxLength: 120
			}),
			J = G("textarea.box", {
				placeholder: v.broadcast.placeholder,
				rows: 4,
				maxLength: 1000
			}),
			Y = G("input", { type: "checkbox", checked: !1, id: "eph" });

		return G("div.mod-broadcast", G("p.desc", v.broadcast.desc), G("div.mod-form", G("div.input", Q), G("div.input", J), G("div.checkbox", Y, G("label", { htmlFor: "eph" }, v.broadcast.ephDesc)), $, G("div.mod-form-row", G("button.btn", v.broadcast.btn, {
			async onclick() {
				let Z = J.value.trim();

				if (!Z) {
					$.replaceChildren(Y0("Message can't be empty."));

					return;
				}

				let q = Q.value.trim();

				if (!await i(v.broadcast.confirm, "Broadcast")) return;

				let W = await SJ(Z, q || void 0, !Y.checked);

				if (!W.ok) {
					$.replaceChildren(Y0(`Broadcast failed: ${await d(W)}`));

					return;
				}

				(
					Q.value = "",
					J.value = "",
					$.replaceChildren(G("p.success.noicon", v.broadcast.ok))
				);
			}
		}))));
	}

	var _4 = 10;

	function U3($) {
		if ($ <= 0) return 1.1;

		let Q = Math.max(1, Math.min(10, $));

		return Math.round((0.95 - (Q - 1) / 9 * 0.55) * 100) / 100;
	}

	function z3() {
		let $ = G("div.mod-action-msg"),
			Q = G("p.desc.mod-bot-mapping"),
			J = G("p.desc"),
			Y = G("input.box.mod-bot-slider", {
				type: "range",
				min: "0",
				max: String(_4),
				step: "1",
				value: "0"
			}),
			Z = (K) => {
				if (K <= 0) return v.detection.off;

				let W = Math.round(U3(K) * 100);

				return t0(v.detection.current, K, _4, W);
			},
			q = () => {
				Q.replaceChildren(Z(Number(Y.value)));
			};

		return (
			Y.oninput = q,
			(async () => {
				let K = await sJ();

				if (!K.ok) {
					$.replaceChildren(Y0(await d(K)));

					return;
				}

				let { sensitivity: W, openBotFlags: F } = await K.json();

				(
					Y.value = String(W),
					q(),
					J.replaceChildren(`${v.detection.flags} ${F}.`)
				);
			})(),

			G("div.mod-bot-config", G("p.desc", v.detection.description.join(" ")), G("div.mod-form", G("div.mod-bot-slider-row", G("span.desc", v.detection.slider[0]), Y, G("span.desc", v.detection.slider[1])), Q, J, $, G("div.mod-form-row", G("button.btn", "Save", {
				async onclick() {
					let K = Number(Y.value), W = await rJ(K);

					if (!W.ok) {
						$.replaceChildren(Y0(`Save failed: ${await d(W)}`));

						return;
					}

					$.replaceChildren(G("p.success.noicon", v.gwValSaved));
				}
			}))))
		);
	}

	var k3 = 4, z5 = !1;

	function C3($, Q, J, Y, Z) {
		let q = Math.min($, J),
			K = Math.min(Q, Y),
			W = Math.max($, J),
			F = Math.max(Q, Y);

		(q = Math.min(q, b - 1), K = Math.min(K, C0 - 1));

		let H = Math.min(W - q, Z, b - q),
			j = Math.min(F - K, Z, C0 - K);

		return (
			H = Math.max(H, 1),
			j = Math.max(j, 1),
			{ x: q, y: K, width: H, height: j }
		);
	}

	function PK($) {
		let Q = D.rect.width / G0.width,
			J = D.rect.height / G0.height;

		return {
			left: D.rect.left + $.x * Q,
			top: D.rect.top + $.y * J,
			width: $.width * Q,
			height: $.height * J
		};
	}

	function k5($) {
		if (z5) return;

		(z5 = !0, R.setTool(0), O$(0));

		let Q = $.maxRegion ?? Math.max(b, C0),
			J = $.color ?? "#ff3b3b",
			Y = G("div.pick-box", { style: { display: "none", outlineColor: J } }),
			Z = $.label ? G("div.pick-mode", $.label) : "",
			q = G("div.pick-readout", $.hint ?? "Click a pixel  ·  Shift+drag to select an area"),
			K = G("div.pick-hint", "Esc or right-click to cancel"),
			W = G("div.pick-overlay", Y, Z, q, K),
			F = null;

		if ($.dimUnpainted) (F = G("div.mod-paint-scrim"), X1.prepend(F));

		let H = !1,
			j = null,
			X = null,
			P = !1,
			k = 0,
			U = 0;

		function A(T) {
			let B = PK(T);

			Object.assign(Y.style, {
				display: "block",
				left: `${B.left}px`,
				top: `${B.top}px`,
				width: `${B.width}px`,
				height: `${B.height}px`
			});
		}

		function g(T, B) {
			A({ x: T, y: B, width: 1, height: 1 });
		}

		function O() {
			if (!z5) return;

			(
				z5 = !1,
				W.remove(),
				F?.remove(),
				z0.removeEventListener("pointerdown", y, !0),
				z0.removeEventListener("pointermove", w, !0),
				window.removeEventListener("pointerup", h, !0),
				document.removeEventListener("keydown", M, !0),
				z0.removeEventListener("contextmenu", C, !0),
				$.onClose?.()
			);
		}

		function M(T) {
			if (T.key === "Escape") (T.preventDefault(), T.stopPropagation(), O());
		}

		function C(T) {
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

				let [B, N] = S0(T.clientX, T.clientY);

				(
					j = [B, N],
					X = C3(B, N, B, N, Q),
					A(X),
					q.textContent = `${X.width}×${X.height} px`
				);

				return;
			}

			(P = !!$.onPick, k = T.clientX, U = T.clientY);
		}

		function w(T) {
			if (H && j) {
				(T.preventDefault(), T.stopPropagation(), O6(T.x, T.y));

				let [I, S] = S0(T.clientX, T.clientY);

				(
					X = C3(j[0], j[1], I, S, Q),
					A(X),
					q.textContent = `${X.width}×${X.height} px`
				);

				return;
			}

			if (P && Math.hypot(T.clientX - k, T.clientY - U) > k3) P = !1;

			let [B, N] = S0(T.clientX, T.clientY);

			g(B, N);
		}

		function h(T) {
			if (H) {
				H = !1;

				let B = X;

				if ((X = null, j = null, O(), B && $.onRegion)) $.onRegion(B);

				return;
			}

			if (P && T.button === 0) {
				if ((P = !1, Math.hypot(T.clientX - k, T.clientY - U) <= k3)) {
					let [B, N] = S0(T.clientX, T.clientY);

					(O(), $.onPick?.(B, N));
				}
			}
		}

		(
			z0.addEventListener("pointerdown", y, !0),
			z0.addEventListener("pointermove", w, !0),
			window.addEventListener("pointerup", h, !0),
			document.addEventListener("keydown", M, !0),
			z0.addEventListener("contextmenu", C, !0),
			u("main").after(W)
		);
	}

	var VK = 500;

	function t1() {
		if (!v0()) return;

		k5({
			label: "Tile Inspector",
			hint: v.inspect.hint,
			maxRegion: VK,
			dimUnpainted: !0,
			onPick: ($, Q) => void RK($, Q),
			onRegion: ($) => void MK($.x, $.y, $.width, $.height)
		});
	}

	async function RK($, Q) {
		let J = Q * b + $, Y = await lJ(J);

		if (!Y.ok) return new _("Tile inspector", G("div.modal", Y0(await d(Y)), R$));

		L3(await Y.json(), $, Q);
	}

	function L3($, Q, J) {
		let Y = G("div.modal.mod-tile");

		if ((
			Y.append(G("div.mod-kv", n1("Position", `${Q}, ${J}`), n1("Placed", $.placed_at ? x0($.placed_at) : "unknown"))),
			!$.user
		)) return (
			Y.append(G("p.desc", v.inspect.none)),
			Y.append(G("div.btn-container", y4())),
			void new _("Tile inspector", Y)
		);

		let Z = $.user, q = !!Z.banned_at;

		(
			Y.append(
				G("div.mod-detail-head", G("h3", Z.username), W1(Z.role), G("span.desc", `#${Z.id}`), Z.discord_id ? G("span.mod-tag.discord", "Discord") : null),
				q
					? G("p.warning.noicon", `Banned ${x0(Z.banned_at)}.` + (Z.banned_until ? ` Until ${x0(Z.banned_until)}.` : " Permanent."))
					: G("p.desc", "Not banned."),
				G(
					"div.btn-container",
					G("button.btn", "View user", {
						onclick() {
							s("users", Z.id, { label: "Tile inspector", reopen: () => L3($, Q, J) });
						}
					}),
					y4()
				)
			),
			new _("Tile inspector", Y)
		);
	}

	async function MK($, Q, J, Y) {
		let Z = await uJ($, Q, J, Y);

		if (!Z.ok) return new _("Area breakdown", G("div.modal", Y0(await d(Z)), R$));

		D3(await Z.json());
	}

	function D3($) {
		let { region: Q, owned: J, total: Y, owners: Z } = $,
			q = G("div.modal.mod-region");

		if ((
			q.append(G("div.mod-kv", n1("Area", `${Q.width}×${Q.height} at ${Q.x},${Q.y}`), n1("Owned pixels", `${J} / ${Y}`), n1("Distinct owners", String(Z.length)))),
			!Z.length
		)) q.append(G("p.desc", "No owned pixels in this area.")); else q.append(G("div.list.mod-list", ...Z.map((K) => G(
			"div.item.box.outset.mod-region-row",
			{
				onclick() {
					if (K.user_id) s("users", K.user_id, { label: "Area breakdown", reopen: () => D3($) });
				}
			},
			G("b", K.username ?? `#${K.user_id}`),
			G("span.mod-row-meta", `${K.pixels} px`, G("span.desc", `${Math.round(K.pixels / J * 100)}%`))
		))));

		(
			q.append(G("div.btn-container", y4())),
			new _("Area breakdown", q)
		);
	}

	function y4() {
		return G("button.btn", "Close", {
			onclick() {
				(p(), t1());
			}
		});
	}

	function n1($, Q) {
		return G("div.mod-kv-row", G("span.mod-kv-label", $), G("span.mod-kv-value", Q));
	}

	function d$($, Q, J, Y) {
		if (Q == null) return G("span.mod-audit-actor", G("span.desc", `${$}: -`));

		return G(
			"span.mod-audit-actor",
			G("span.desc", `${$}:`),
			J
				? G("span.mod-jump-name.tooltip", J, {
					dataset: { tooltip: v.jumpTo },
					async onclick() {
						if (await _0({ userId: Q, username: J })) (p(), w$(Y));
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

	function UK($) {
		let Q = G("div.mod-wipe-audit");

		if ($.thumbnail) {
			let Z = G("img.mod-wipe-thumb", {
				src: $.thumbnail,
				alt: "Cleared region",
				title: "Click to enlarge"
			});

			(
				Z.addEventListener("click", () => zK($.thumbnail)),
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
		})))); else J.append(G("span.desc", v.noOwners));

		return (Q.append(J), Q);
	}

	function zK($) {
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

	function A3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = G("input.box", { type: "text", placeholder: v.searchAudit }),
			Z = G("select.box.outset", G("option", "All actions", { value: "" }), ...v.auditActions.map((j) => G("option", j, { value: j }))),
			q = G("select.box.outset", G("option", "Newest first", { value: "desc" }), G("option", "Oldest first", { value: "asc" })),
			K = null;

		async function W(j) {
			if (j) (K = null, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let X = Y.value.trim(),
				P = await aJ({
					before: K ?? void 0,
					limit: 25,
					action: Z.value || void 0,
					search: X || void 0,
					order: q.value === "asc" ? "asc" : "desc"
				});

			if (!P.ok) {
				Q.replaceChildren(Y0(await d(P)));

				return;
			}

			let { entries: k, next_cursor: U } = await P.json();

			if ((Q.replaceChildren(), j && !k.length)) {
				let A = !!X || !!Z.value;

				$.replaceChildren(G("p.desc", A
					? "No audit entries match these filters."
					: "No audit entries."));
			} else for (let A of k) $.append(H(A));

			(
				K = U,
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
			let X = j.action === "wipe_canvas" ? UK(j.details) : G("div.details", A6(j.details)),
				P = { label: "Audit Log", reopen: () => s("audit") };

			return G("div.item.box.outset.mod-audit", G("div.mod-audit-head", G("b", j.action), G("span.desc", E0(j.created_at))), G("div.mod-audit-meta", d$("mod", j.mod_id, j.mod_username, P), d$("target", j.target_id, j.target_username, P)), X);
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

	function T3() {
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

			let F = await gJ(Z.value, Y);

			if (!F.ok) {
				Q.replaceChildren(Y0(await d(F)));

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
				j = (A, g, O) => G("button.btn", A, {
					async onclick() {
						if (!await i(O, A)) return;

						let C = await vJ(W.id, g, H.value.trim() || void 0);

						if (!C.ok) {
							F.replaceChildren(G("p.error.noicon", `${A} failed: ${await d(C)}`));

							return;
						}

						if (g != "ignore") U.remove();
						if (g == "prune") q(!0);
					}
				}),
				X = W.content.split("|"),
				P = X.slice(4).join("|").trim(),
				k = { label: "Feedback", reopen: () => s("feedback") },
				U = G(
					"div.item.box.outset.mod-review",
					G("div.mod-review-head", G("b", W.kind)),
					W.kind == "report"
						? [
							G("p.desc", d$("from", W.user_id, W.username, k), " ", d$("target", parseInt(X[1]), X[2], k)),
							G("div.details.pre", G("b", X[3]), P && `// ${P}`)
						]
						: [
							G("p.desc", d$("from", W.user_id, W.username, k)),
							G("div.details.pre", W.content)
						],
					G("div.input", H),
					G("div.mod-form-row", j("Resolve", "resolve", v.feedback.resolve), j("Ignore", "ignore", v.feedback.ignore), j("Prune", "prune", v.feedback.prune)),
					F
				);

			return U;
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

	var kK = 500;

	function e8() {
		if (!v0()) return;

		k5({
			label: "Wipe Canvas Selection",
			hint: v.wipe.hint,
			maxRegion: kK,
			dimUnpainted: !0,
			onRegion: async ($) => {
				if (!await i(`Clear a ${$.width}×${$.height} px area at (${$.x}, ${$.y})? This wipes those pixels for everyone (you can undo right after).`, "Wipe area", "Wipe", "Cancel")) return void e8();

				let J = await fJ($);

				if (!J.ok) return T0(J, "Could not wipe the area");

				let { applied: Y, chunks: Z, undoToken: q } = await J.json();

				new _("Area wiped", G("div.modal", G("p", `Cleared ${Y} pixel(s) across ${Z} chunk(s).`), G("p.desc", v.snapshotDisplayNote), G("div.btn-container", q ? T6(q) : "", G("button.btn", "Close", {
					onclick() {
						(p(), e8());
					}
				}))));
			}
		});
	}

	async function CK($, Q) {
		let J = await nJ($, Q);

		if (!J.ok) return null;

		let Y = new Uint8Array(await J.arrayBuffer()),
			Z = j$.deserialize(Y),
			q = Z.pixels instanceof Uint8Array ? Z.pixels : Z.pixels?.buffer ?? new Uint8Array(),
			K = w6(q);

		return K.length ? K : null;
	}

	function LK($) {
		document.querySelector(".mod-ghost-control")?.remove();

		let Q = $.states.filter((W) => W === I6).length,
			J = $.states.filter((W) => W === E6).length,
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
					(e5(), K.remove());
				}
			})
		);

		document.body.append(K);
	}

	function I3($, Q) {
		let J = G("div.list.mod-list.mod-ph-list"),
			Y = G("div.mod-ph-more"),
			Z = null,
			q = !1,
			K = [],
			W = new Map();

		async function F() {
			if (q) return;

			(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

			let k = await oJ($, Z ? { before: Z } : {});

			if ((q = !1, !k.ok)) {
				Y.replaceChildren(Y0(await d(k)));

				return;
			}

			let { entries: U, next_cursor: A } = await k.json();

			if (!U.length && !Z) {
				(
					J.replaceChildren(G("p.desc", "No paint history (or pruned by retention).")),
					Y.replaceChildren()
				);

				return;
			}

			for (let g of U) {
				let O = K.length;

				(K.push(g), J.append(P(g, O)));
			}

			(
				Z = A,
				Y.replaceChildren(A
					? G("button.btn.mod-ph-loadmore", "Load more", { onclick: () => void F() })
					: G("span.desc", "End of history."))
			);
		}

		async function H(k) {
			let U = W.get(k.id);

			if (U) return U;

			let A = await CK($, k.id);

			if (A) W.set(k.id, A);

			return A;
		}

		async function j(k) {
			let U = K[k];

			if (!U) return;

			let A = await H(U);

			if (!A) {
				m$("Could not load submission pixels.");

				return;
			}

			let g = A.map(() => i5),
				O = await dJ(A.map((y) => y.pos));

			if (O.ok) {
				let { owners: y, deleted: w } = await O.json();

				g = y.map((h, T) => h === $ ? i5 : w?.[T] ? E6 : I6);
			}

			(p(), Y2(A, g));

			let M = j1(A);

			o1(M.x, M.y, M.width, M.height);

			let C = k + 1 < K.length || !!Z;

			LK({
				states: g,
				username: Q,
				position: `${k + 1} / ${K.length}${Z ? "+" : ""}`,
				onPrev: k > 0 ? () => void j(k - 1) : void 0,
				onNext: C ? () => void X(k) : void 0,
				onBack: () => {
					(
						e5(),
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

		function P(k, U) {
			let A = G("div.mod-ph-thumb-box", G("span.desc", "…")),
				g = G("div.mod-ph-label", G("span", `${k.pixel_count} px`), G("span.desc", E0(k.created_at))),
				O = G(
					"div.item.box.outset.mod-ph-row",
					{
						onclick() {
							j(U);
						}
					},
					A,
					g
				);

			return (
				(async () => {
					let M = await H(k);

					if (!M) return;

					let C = j1(M);

					if ((A.replaceChildren(E8(M)), C)) g.append(G("span.desc", `@ ${C.x},${C.y}`));
				})(),
				O
			);
		}

		return (F(), G("div.mod-ph", J, Y));
	}

	function DK($) {
		if ($ === null || !Number.isFinite($) || $ < 0) return null;

		let Q = $ % b, J = $ / b | 0;

		return `@ ${Q},${J}`;
	}

	function E3($, Q) {
		let J = G("div.list.mod-list.mod-ch-list"),
			Y = G("div.mod-ch-more"),
			Z = null,
			q = !1;

		function K(H) {
			_0({ fallbackPos: H }).then((j) => {
				if (!j) return;

				(p(), w$({ label: Q, reopen: () => s("users", $) }));
			});
		}

		async function W() {
			if (q) return;

			(q = !0, Y.replaceChildren(G("span.desc", "Loading…")));

			let H = await tJ($, Z ? { before: Z } : {});

			if ((q = !1, !H.ok)) {
				Y.replaceChildren(Y0(await d(H)));

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
			let j = DK(H.pos),
				X = j
					? G("button.btn.mod-ch-loc.mod-jump-loc", j, { dataset: { tooltip: v.jumpSent }, onclick: () => K(H.pos) })
					: "";

			return G("div.item.box.outset.mod-ch-row", G("div.mod-ch-text", H.content ?? ""), G("div.mod-ch-meta", G("span.desc", E0(H.timestamp)), X));
		}

		return (W(), G("div.mod-ch", J, Y));
	}

	var a1 = null;

	async function AK() {
		if (a1) return a1;

		return (a1 = await (await m.cursor.data.$get()).json(), a1);
	}

	function g4($) {
		return a1?.find((Q) => Q.id === $)?.name ?? `#${$}`;
	}

	async function w3($ = {}) {
		let Q = await AK();

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
				W = G("div.modal-bg.confirm-bg.cursor-pick-bg", G("div.modal-container", G("div.modal-title", G("span", $.title ?? "Select a cursor"), Q$("close", { ariaLabel: "Close", onclick: () => Z(null) })), G("div.modal-content", G("div.inventory.nopad", G("div.scroll.pad", G("div.items", Q.filter((F) => !F.free).map((F) => G(
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

	var H$ = b,
		$1 = C0,
		TK = "rgba(8,8,12,0.66)",
		IK = "rgba(255,56,56,0.5)",
		EK = 2,
		wK = 256;

	function h3($) {
		let { ownedPositions: Q } = $,
			J = new Uint8Array(r$ + 7 >> 3);

		for (let E = 0; E < Q.length; E++) {
			let c = Q[E];

			J[c >> 3] |= 1 << (c & 7);
		}

		let Y = (E) => J[E >> 3] >> (E & 7) & 1,
			Z = G("canvas.mod-mask-layer", { width: H$, height: $1 }),
			q = G("canvas.mod-select-layer", { width: H$, height: $1 }),
			K = Z.getContext("2d"),
			W = q.getContext("2d");

		(K.fillStyle = TK, K.fillRect(0, 0, H$, $1));

		for (let E = 0; E < Q.length; E++) {
			let c = Q[E];

			K.clearRect(c % H$, c / H$ | 0, 1, 1);
		}

		(W.fillStyle = IK, X$.append(Z, q));

		let F = G("div.mod-sel-hover", { style: { display: "none" } }),
			H = G("div.mod-sel-rect", { style: { display: "none" } });

		document.body.append(F, H);

		let j = new Set(),
			X = "rect",
			P = 24,
			k = !1,
			U = 0,
			A = 0,
			g = !1,
			O = null,
			M = null,
			C = () => $.onChange?.(j.size);

		function y(E, c) {
			if (E < 0 || E >= H$ || c < 0 || c >= $1) return;

			let a = c * H$ + E;

			if (!Y(a) || j.has(a)) return;

			(j.add(a), W.fillRect(E, c, 1, 1));
		}

		function w(E, c) {
			let a = Math.max(1, P >> 1), k0 = a * a;

			for (let X0 = -a; X0 <= a; X0++) {
				let M0 = c + X0;

				if (M0 < 0 || M0 >= $1) continue;

				for (let D0 = -a; D0 <= a; D0++) {
					if (X === "circle" && D0 * D0 + X0 * X0 > k0) continue;

					y(E + D0, M0);
				}
			}
		}

		function h(E, c, a, k0) {
			let X0 = Math.hypot(a - E, k0 - c),
				M0 = Math.max(1, P >> 1),
				D0 = Math.max(1, Math.ceil(X0 / M0));

			for (let m0 = 1; m0 <= D0; m0++) w(Math.round(E + (a - E) * m0 / D0), Math.round(c + (k0 - c) * m0 / D0));
		}

		function T() {
			if (!O || !M) return;

			let E = Math.min(O[0], M[0]),
				c = Math.min(O[1], M[1]),
				a = Math.max(O[0], M[0]),
				k0 = Math.max(O[1], M[1]);

			for (let X0 = 0; X0 < Q.length; X0++) {
				let M0 = Q[X0], D0 = M0 % H$, m0 = M0 / H$ | 0;

				if (D0 >= E && D0 <= a && m0 >= c && m0 <= k0) y(D0, m0);
			}
		}

		function B() {
			return {
				b: D.rect,
				sx: D.rect.width / G0.width,
				sy: D.rect.height / G0.height
			};
		}

		function N() {
			if (!O || !M) {
				H.style.display = "none";

				return;
			}

			let { b: E, sx: c, sy: a } = B(),
				k0 = Math.min(O[0], M[0]),
				X0 = Math.min(O[1], M[1]),
				M0 = Math.abs(M[0] - O[0]) + 1,
				D0 = Math.abs(M[1] - O[1]) + 1;

			Object.assign(H.style, {
				display: "block",
				left: `${E.left + k0 * c}px`,
				top: `${E.top + X0 * a}px`,
				width: `${M0 * c}px`,
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

			let [c, a] = S0(E.clientX, E.clientY);

			if (X === "rect") (g = !0, O = [c, a], M = [c, a], N()); else (k = !0, U = c, A = a, w(c, a), C());
		}

		function n(E) {
			if (g) {
				(
					E.preventDefault(),
					E.stopPropagation(),
					M = S0(E.clientX, E.clientY),
					N()
				);

				return;
			}

			if (k) {
				(E.preventDefault(), E.stopPropagation());

				let [c, a] = S0(E.clientX, E.clientY);

				(h(U, A, c, a), U = c, A = a, C());

				return;
			}

			I(E.clientX, E.clientY);
		}

		function J0(E) {
			if (g && E.button === 0) {
				(
					E.preventDefault(),
					E.stopPropagation(),
					g = !1,
					T(),
					H.style.display = "none",
					O = M = null,
					C()
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

		let Q0 = (E) => E.preventDefault();

		(
			z0.addEventListener("mousedown", S, !0),
			window.addEventListener("mousemove", n, !0),
			window.addEventListener("mouseup", J0, !0),
			document.addEventListener("keydown", l, !0),
			z0.addEventListener("contextmenu", Q0, !0)
		);

		let V0 = !1;

		function t() {
			if (V0) return;

			(
				V0 = !0,
				z0.removeEventListener("mousedown", S, !0),
				window.removeEventListener("mousemove", n, !0),
				window.removeEventListener("mouseup", J0, !0),
				document.removeEventListener("keydown", l, !0),
				z0.removeEventListener("contextmenu", Q0, !0),
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
				P = Math.max(EK, Math.min(wK, Math.round(E)));
			},

			clearSelection() {
				(j.clear(), W.clearRect(0, 0, H$, $1), C());
			},
			count: () => j.size,
			positions: () => [...j],
			destroy: t
		};
	}

	async function N3($, Q = 0) {
		let J = await wJ($, Q);

		if (!J.ok) return null;

		let Y = new Uint8Array(await J.arrayBuffer()),
			Z = j$.deserialize(Y),
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

	var B3 = [
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
		m3 = B3[0].tools[0];

	async function O3($, Q, J) {
		if (!v0()) return;

		J("Loading this user's pixels…", !0);

		let Y;

		try {
			Y = await N3($);
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

		(p(), hK($, Q, Y));
	}

	function hK($, Q, J) {
		let Y = J,
			Z = G("span.mod-sel-count"),
			q = G("button.btn.mod-sel-delete", "Delete selected"),
			K = G("button.btn", "Clear selection"),
			W = G("span.mod-sel-sizeout", "24px"),
			F = G("input.mod-sel-size", { type: "range", min: "2", max: "256", value: "24" }),
			H = G("div.mod-sel-brush", G("span", "Brush"), F, W);

		H.style.display = "none";

		let j = m3.tool,
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

		function U(l) {
			let Q0 = h3({
				ownedPositions: l.positions,
				onChange: (V0) => k(V0),
				onExit: () => A()
			});

			return (Q0.setTool(j), Q0.setBrushSize(X), Q0);
		}

		let A = () => {
			(P.destroy(), J0.remove(), s("users", $));
		};

		(
			P = U(Y),
			F.oninput = () => {
				(
					X = Number(F.value),
					P.setBrushSize(X),
					W.textContent = `${F.value}px`
				);
			}
		);

		let g = G("p.mod-sel-desc", v.wipe.tools[m3.tool]),
			O = [],
			M = B3.map(({ group: l, tools: Q0 }) => {
				let V0 = Q0.map(({ tool: t, label: E }) => {
					let c = G("button.btn.mod-sel-tool", E);

					return (
						c.onclick = () => {
							(j = t, P.setTool(t));

							for (let a of O) a.classList.toggle("active", a === c);

							(
								H.style.display = t === "rect" ? "none" : "",
								g.textContent = v.wipe.tools[t]
							);
						},
						O.push(c),
						c
					);
				});

				return G("div.mod-sel-group", G("span.mod-sel-group-label", l), G("div.mod-sel-group-btns", ...V0));
			});

		O[0].classList.add("active");

		let C = G("p.mod-sel-warn"),
			y = G("div.mod-range-track"),
			w = G("div.mod-range-thumb");

		y.append(w);

		let h = G("div.mod-range-label"),
			T = Y.truncated ? G("div.mod-range", C, y, h) : "",
			B = () => Math.max(0, Y.total - Y.cap);

		function N(l) {
			return Math.max(28, l * Math.min(1, Y.cap / Y.total));
		}

		function I(l) {
			let Q0 = y.clientWidth || 260,
				V0 = N(Q0),
				t = Math.max(0, Q0 - V0),
				E = B();

			(
				w.style.width = `${V0}px`,
				w.style.left = `${E === 0 ? 0 : t * (l / E)}px`
			);

			let c = Math.min(Y.total, l + Y.cap);

			h.textContent = `Viewing pixels ${(l + 1).toLocaleString()}–${c.toLocaleString()} of ${Y.total.toLocaleString()}`;
		}

		function S(l) {
			let Q0 = y.clientWidth || 260,
				V0 = Math.max(0, Q0 - N(Q0));

			return V0 === 0 ? 0 : Math.round(l / V0 * B());
		}

		if (T) {
			C.textContent = t0(v.wipe.warn, Y.total.toLocaleString(), Y.cap.toLocaleString());

			let l = !1, Q0 = 0, V0 = 0;

			(
				w.onpointerdown = (E) => {
					(
						E.preventDefault(),
						l = !0,
						Q0 = E.clientX,
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
						k0 = Math.max(0, Math.min(a, V0 + (E.clientX - Q0)));

					w.style.left = `${k0}px`;

					let X0 = S(k0), M0 = Math.min(Y.total, X0 + Y.cap);

					h.textContent = `Viewing pixels ${(X0 + 1).toLocaleString()}–${M0.toLocaleString()} of ${Y.total.toLocaleString()}`;
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

			let Q0 = null;

			try {
				Q0 = await N3($, l);
			} catch {}

			if (!Q0) {
				I(Y.offset);

				return;
			}

			(Y = Q0, P.destroy(), P = U(Y), k(0), I(Y.offset));
		}

		(
			q.onclick = async () => {
				let l = P.positions();

				if (!l.length) return;
				if (!await i(t0(v.wipe.confirm, l.length, Q), "Delete selected strokes", "Delete", "Cancel")) return;

				let V0 = await hJ($, l);

				if (!V0.ok) return e("Could not delete selected pixels", await d(V0));

				let { pixelsWiped: t, undoToken: E } = await V0.json();

				(
					P.destroy(),
					J0.remove(),
					new _("Strokes deleted", G("div.modal", G("p", t0(v.wipe.removed, t, Q)), G("p.desc", v.snapshotDisplayNote), G(
						"div.btn-container",
						E ? T6(E) : "",
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

		let J0 = G("div.mod-select-overlay", G("div.mod-sel-head", `Deleting ${Q}'s pixels`), T, G("div.mod-sel-tools", ...M), g, H, G("div.mod-sel-info", Z), G("div.mod-sel-actions", q, K, G("button.btn", "Cancel", { onclick: () => A() })), G("p.mod-sel-hint", "Right-drag to pan · scroll to zoom · Esc to cancel"));

		(k(0), document.body.append(J0));
	}

	function v4($, Q) {
		let J = G("div.list", "Loading..."), Y = !1;

		new _("Moderation", G("div.clans-modal", Q && p4(Q), C1($, !0), G(
			"details.clan-member-list.box",
			G("summary", "Members", {
				async onclick() {
					if (Y) return;

					Y = !0;

					let Z = await bJ($.id);

					if (!Z.ok) return (Y = !1, J.replaceChildren(G("p.error.noicon", await d(Z))));

					let q = await Z.json();

					J.replaceWith(G("div.list", q.map((K, W, F) => [
						G("a.link", K.username, {
							onclick() {
								s("users", K.id, { label: $.name, reopen: () => v4($, Q) });
							}
						}),
						W < F.length - 1 && ", "
					])));
				}
			}),
			J
		)));
	}

	var S3 = 50, mK = ["user", "moderator", "admin"];

	function x4($) {
		let Q = G("div.list.mod-list"),
			J = G("div.mod-detail"),
			Y = G("div.mod-status"),
			Z = "";

		async function q(M) {
			(Z = M, Y.replaceChildren("Searching..."));

			let C = await LJ(M);

			if (M != Z) return;

			if (!C.ok) {
				Y.replaceChildren(Y0(await d(C)));

				return;
			}

			let { users: y } = await C.json();

			(Y.replaceChildren(), K(y));
		}

		function K(M) {
			if (!M.length) {
				Q.replaceChildren(G("p.desc", "No users found."));

				return;
			}

			Q.replaceChildren(...M.map((C) => G(
				"div.item.box.outset.mod-row",
				{
					onclick() {
						W(C.id);
					}
				},
				G("b", C.username),
				G("span.mod-row-meta", `#${C.id}`, W1(C.role), C.ban && G("span.mod-tag.banned", "banned"), C.mute && G("span.mod-tag.muted", "muted"), Array.isArray(C.flagged) && G("span.mod-tag.flagged", C.flagged.length > 1 ? `flagged x${C.flagged.length}` : "flagged"))
			)));
		}

		async function W(M, C, y = !1) {
			J.replaceChildren(G("p.desc", "Loading..."));

			let w = await DJ(M);

			if (!w.ok) {
				J.replaceChildren(Y0(await d(w)));

				return;
			}

			let { user: h, cursors: T } = await w.json();

			if ((H(h, T, C), y && h.username && g.value !== h.username)) (g.value = h.username, q(h.username));
		}

		function F(M, C, y) {
			M.replaceChildren(G(y ? "p.success.noicon" : "p.error.noicon", C));
		}

		function H(M, C, y) {
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

			let J0 = (t, E, c) => {
					let a = G("input.box", { type: "text", placeholder: "Reason (optional)" }),
						k0 = G("select.box.outset", r5.map((X0, M0) => G("option", X0.label, { value: String(M0), selected: M0 == 0 })));

					return G("div.mod-form-sanction", G("div.input", a), G("div.mod-form-row", k0, G("button.btn", t, {
						async onclick() {
							let X0 = r5[Number(k0.value)],
								M0 = X0.seconds == null ? "permanently" : `for ${X0.label}`;

							if (!await i(`${t} ${M.username} ${M0}?`, `${t} user`)) return;

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
						if (!await i(E, t)) return;

						let M0 = await c();

						if (!M0.ok) {
							F(h, `${t} failed: ${await d(M0)}`, !1);

							return;
						}

						let D0 = "", m0;

						try {
							let S5 = await M0.clone().json();

							if (typeof S5.pixelsCleared == "number") D0 = ` (${S5.pixelsCleared} pixels cleared)`;

							m0 = S5.undoToken;
						} catch {}

						await S({
							text: a + D0 + (k0 ? ` ${k0}` : ""),
							undo: m0 ? () => L6(m0) : void 0
						});
					}
				}),
				Q0 = G("div.mod-sessions"),
				V0 = s1();

			J.replaceChildren(G(
				"div.mod-detail-inner",
				G(
					"div.mod-detail-head",
					G("h3.tooltip.mod-jump-name", M.username, {
						dataset: { tooltip: "Click to jump to this user's cursor" },
						async onclick() {
							if (await _0({ userId: w, username: M.username })) (p(), w$({ label: M.username, reopen: () => s("users", w) }));
						}
					}),
					W1(M.role),
					G("span.desc", `#${M.id}`)
				),
				G(
					"div.mod-kv",
					A("Created At", E0(M.created_at)),
					A("Country", R6(M.country_code || "")),
					A("Paint", `${Math.floor(M.paint / F0)} cans (${M.paint} px)`),
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
							v4(M.clan, { label: M.username, reopen: () => s("users", M.id) });
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
					? l("Unban", `Unban ${M.username}?`, () => o5(w), "User unbanned.")
					: J0("Ban", (t, E) => TJ(w, t, E), () => o5(w))),
				G("div.mod-section", G("b", "Mute"), B
					? l("Unmute", `Unmute ${M.username}?`, () => n5(w), "User unmuted.")
					: J0("Mute", (t, E) => IJ(w, t, E), () => n5(w))),
				G(
					"div.mod-section",
					G("b", "Leaderboard"),
					I
						? G("p.warning.noicon", "Hidden from the leaderboard.")
						: G("p.desc.mod-hint", "Hides this user from the users board and from clan/country totals."),
					I
						? l("Show on leaderboard", `Show ${M.username} on the leaderboard again?`, () => t5(w, !1), "User restored to the leaderboard.")
						: l("Hide from leaderboard", `Hide ${M.username} from the leaderboard?`, () => t5(w, !0), "User hidden from the leaderboard.")
				),
				G("div.mod-section", G("b", "Strokes"), G("p.desc.mod-hint", v.user.delete.desc), G("div.mod-form-row", l("Delete All User's Strokes", t0(v.user.delete.confirm, M.username), () => EJ(w), "Deleted the user's strokes.", v.snapshotDisplayNote), G("button.btn", "Select Strokes to Delete...", {
					onclick() {
						O3(w, M.username, (t, E) => U(h, t, E));
					}
				}))),
				G("div.mod-section", G("b", "Paint history"), G("p.desc.mod-hint", v.user.draws), I3(M.id, M.username)),
				G("div.mod-section", G("b", "Chat history"), G("p.desc.mod-hint", v.user.messages), E3(M.id, M.username)),
				G("div.mod-section", G("b", "Paint"), X(M, h, S)),
				G("div.mod-section", G("b", "Cursors"), P(M, C, h, S)),
				G("div.mod-section", G("b", "Message"), j(M, h)),
				V0 && G("div.mod-section", G("b", "Role"), k(M, h, S)),
				V0 && G(
					"div.mod-section",
					G("b", "Sessions"),
					G("button.btn", "Load sessions", {
						async onclick() {
							Q0.replaceChildren(G("p.desc", "Loading..."));

							let t = await AJ(w);

							if (!t.ok) {
								Q0.replaceChildren(Y0(await d(t)));

								return;
							}

							let E = await t.json();

							if (!E.length) {
								Q0.replaceChildren(G("p.desc", "No sessions."));

								return;
							}

							Q0.replaceChildren(G("div.list.mod-list", ...E.map((c) => G("div.item.box.outset.mod-session", G("span", `#${c.id}`), G("span", c.ip || "no ip"), G("span.desc", "seen ", E0(c.last_verified_at))))));
						}
					}),
					Q0
				)
			));
		}

		function j(M, C) {
			let y = G("textarea.box", {
				placeholder: `Message to ${M.username}...`,
				rows: 2,
				maxLength: 1000
			});

			return G("div.mod-form", G("div.input", y), G("div.mod-form-row", G("button.btn", "Send message", {
				async onclick() {
					let w = y.value.trim();

					if (!w) {
						U(C, "Message can't be empty.", !1);

						return;
					}

					let h = await OJ(M.id, w);

					if (!h.ok) {
						U(C, `Message failed: ${await d(h)}`, !1);

						return;
					}

					(y.value = "", U(C, "Message sent.", !0));
				}
			})));
		}

		function X(M, C, y) {
			let w = G("input.box", { type: "number", min: "1", max: String(S3), value: "10" }),
				h = (T) => G("button.btn", `Reset ${T}`, {
					async onclick() {
						if (!await i(`Reset ${M.username}'s ${T}? (current: ${Math.floor(M[T])})`)) return;

						let N = await NJ(M.id, T);

						if (!N.ok) return U(C, await d(N), !1);

						await y({ text: `Reset ${T}.` });
					}
				});

			return G(
				"div.mod-form-row",
				w,
				G("button.btn", "Give Cans", {
					async onclick() {
						let T = Math.max(1, Math.min(S3, Math.floor(Number(w.value) || 0)));

						if ((
							w.value = String(T),
							!await i(`Give ${T} can${T > 1 ? "s" : ""} to ${M.username}?`, "Give cans")
						)) return;

						let N = await mJ(M.id, T);

						if (!N.ok) {
							U(C, `Give cans failed: ${await d(N)}`, !1);

							return;
						}

						await y({ text: `Gave ${T} can${T > 1 ? "s" : ""}.` });
					}
				}),
				h("paint"),
				h("coins")
			);
		}

		function P(M, C, y, w) {
			let h = C.length ? C.map((T) => g4(T)).join(", ") : "None unlocked.";

			return G("div", G("p.desc.mod-hint", `Unlocked: ${h}`), G("div.mod-form-row", G("button.btn", "Give a cursor...", {
				async onclick() {
					let T = await w3({ title: `Give a cursor to ${M.username}`, owned: C });

					if (T == null) return;

					let B = g4(T);

					if (!await i(`Give the "${B}" cursor to ${M.username}?`, "Give cursor")) return;

					let I = await BJ(M.id, T);

					if (!I.ok) {
						U(y, `Give cursor failed: ${await d(I)}`, !1);

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

		function k(M, C, y) {
			let w = M.role,
				h = G("select.box.outset", mK.map((T) => G("option", T, { value: T, selected: T == M.role })));

			return G("div.mod-form-row", h, G("button.btn", "Set role", {
				async onclick() {
					let T = h.value;

					if (T == M.role) return;

					if (!await i(`Change ${M.username}'s role to "${T}"?`, "Change role")) {
						h.value = M.role;

						return;
					}

					let N = await a5(M.id, T);

					if (!N.ok) {
						(
							U(C, `Role change failed: ${await d(N)}`, !1),
							h.value = M.role
						);

						return;
					}

					await y({ text: `Role set to ${T}.`, undo: () => a5(M.id, w) });
				}
			}));
		}

		function U(M, C, y) {
			M.replaceChildren(G(y ? "p.success.noicon" : "p.error.noicon", C));
		}

		function A(M, C) {
			return G("div.mod-kv-row", G("span.mod-kv-label", M), G("span.mod-kv-value", C));
		}

		let g = G("input.box", { type: "text", placeholder: "Search by username..." }),
			O;

		if ((
			g.oninput = () => {
				(
					clearTimeout(O),
					O = setTimeout(() => void q(g.value.trim()), 250)
				);
			},

			g.onkeydown = (M) => {
				if (M.key == "Enter") (clearTimeout(O), q(g.value.trim()));
			},
			q(""),
			$ !== void 0
		)) W($, void 0, !0);

		return G("div.mod-users", G("div.mod-users-left", G("div.input.mod-search", g), Y, Q), J);
	}

	var NK = ($) => ({
		onclick() {
			s("users", $, { label: "Referrals", reopen: () => s("referrals") });
		}
	});

	function _3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = 0;

		async function Z(K) {
			if (K) (Y = 0, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let W = await xJ(Y);

			if (!W.ok) {
				Q.replaceChildren(Y0(await d(W)));

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
					G("p.desc", d$("created by", K.user_id, K.username, W), ` · ${K.uses} uses`),
					G(
						"div.mod-form-row",
						G("button.btn", "List Users", {
							async onclick() {
								let j = await (await cJ(K.user_id)).json();

								(
									j.sort((X, P) => P.created_at - X.created_at),
									F.replaceChildren(G("div.details.pre", !j.length && "None", j.map((X, P) => [
										G("span", `${X.country_code} `, G("a.link", X.username, NK(X.id)), " (", E0(X.created_at, RJ(X.created_at)), ")"),
										P < j.length - 1 && "; "
									])))
								);
							}
						}),
						!K.verified && G("button.btn", "Verify", {
							async onclick() {
								if (!await i(t0(v.referral.confirmVerify, K.username))) return;

								let X = await s5(K.code, "verify");

								if (!X.ok) {
									F.replaceChildren(G("p.error.noicon", await d(X)));

									return;
								}

								(K.verified = !0, K.flagged = !1, H.replaceWith(q(K)));
							}
						}),
						G("button.btn", "Delete", {
							async onclick() {
								if (!await i(t0(v.referral.confirmDelete, K.username))) return;

								let X = await s5(K.code, "delete");

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
				G("p", v.referral.desc),
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

	function y3() {
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
				let q = await iJ();

				if (!q.ok) {
					$.replaceChildren(Y0(await d(q)));

					return;
				}

				(
					J.value = String(Math.floor(Number(await q.text()) / 1000)),
					Z()
				);
			})(),

			G("div.mod-misc-config", G("p.desc", "Configure the global delay required between global user chat messages."), G("div.mod-form", G("div.mod-bot-slider-row", G("span.desc", "inf"), J, G("span.desc", "120s")), Q, $, G("div.mod-form-row", G("button.btn", "Save", {
				async onclick() {
					let q = Number(J.value), K = await eJ(q);

					if (!K.ok) {
						$.replaceChildren(Y0(await d(K)));

						return;
					}

					$.replaceChildren(G("p.success.noicon", v.gwValSaved));
				}
			}))))
		);
	}

	var v = {}, c4 = !1;

	async function p3() {
		if (c4 || !v0()) return;

		c4 = !0;

		let $ = await m.mod.locale.$get();

		if (!$.ok) return (c4 = !1, T0($, "Could not load mod locale"));

		let Q = await $.json();

		for (let J in Q) v[J] = Q[J];
	}

	function v0() {
		let $ = R.user?.role;

		return $ === "moderator" || $ === "admin";
	}

	function s1() {
		return R.user?.role === "admin";
	}

	var BK = new Set(["review", "broadcast", "botconfig"]);

	function g3($) {
		if ($ === "inspect") return (p(), t1(), !0);
		if ($ === "wipe") return (p(), e8(), !0);

		return !1;
	}

	function v3($) {
		switch ($) {
			case "users":
				return x4();

			case "review":
				return R3();

			case "audit":
				return A3();

			case "feedback":
				return T3();

			case "referrals":
				return _3();

			case "broadcast":
				return M3();

			case "botconfig":
				return z3();

			case "misc":
				return y3();

			case "inspect":

			case "wipe":
				throw new Error(`mod tool tab "${$}" has no panel`);
		}
	}

	function p4($) {
		return G("div.mod-back", G("button.btn.mod-back-btn", `↩ Back to ${$.label}`, {
			onclick() {
				$.reopen();
			}
		}));
	}

	async function x3($) {
		let Q = await m.mod.users.idFromName.$get({ query: { name: $ } });

		if (!Q.ok) return T0(Q, "Could not fetch user");

		let J = await Q.json();

		s("users", J.id);
	}

	function s($ = "users", Q, J) {
		if (!v0()) return;
		if ((K1(), g3($))) return;

		let Y = G("div.pad.mod-body");

		if (J) Y.append(p4(J));

		Y.append($ === "users" ? x4(Q) : v3($));

		let Z = Object.keys(v.tabLabels).filter((j) => s1() || !BK.has(j)),
			q = C5(Z.map((j) => ({
				label: v.tabLabels[j],
				active: j == $,
				action() {
					if (g3(j)) return;

					(W(j), Y.replaceChildren(v3(j)));
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
				let j = await pJ();

				if (!j.ok) return;

				let { total: X } = await j.json();

				if (X > 0) H.append(G("span.mod-tab-dot.tooltip", {
					dataset: { tooltip: `${X} open feedback item${X === 1 ? "" : "s"}` }
				}));
			} catch {}
		})();

		new _("Moderation", G("div.mod-modal.nopad", q, Y));
	}

	var OK = ($) => Math.max(Math.min($ * 50 + 1500, 1e4), 2000);

	function b3($, Q) {
		let J = $ ? Q1 : r1;

		if ((J.prepend(Q), J.childElementCount >= 200)) J.children[200]?.remove();
	}

	function c7($, Q, J, Y, Z, q = !1, K) {
		let W = $ == R.connectionId,
			F = Y ?? R.user.username,
			H = G(
				"p.box",
				{
					ondblclick: () => b4(F),
					onclick: (X) => {
						if (X.shiftKey) b4(F);
					}
				},
				G(
					"b.tooltip",
					Z && G("b", E$(Z)),
					F,
					v0()
						? {
							dataset: { tooltip: "Click to open mod panel" },
							onclick: () => void x3(Y)
						}
						: {
							dataset: { tooltip: "Click to jump to the user!" },
							onclick: () => void _0({ connId: $, fallbackPos: J, username: F })
						},
					W && { className: "self" }
				),
				G("span", Q)
			);

		if (Q.split(/\s+/).includes(R.user.username)) H.classList.add("important");
		if (K !== void 0) H.dataset.uid = String(K);

		b3(q, H);
	}

	function b7($) {
		for (let Q of [r1, Q1]) n0(`p.box[data-uid="${$}"]`, Q).forEach((J) => J.remove());
	}

	function c3($, Q, ...J) {
		b3(Q, G("p.box.local", $ && { className: "error" }, G("span", J)));
	}

	function f7($, Q) {
		if (!$.element || x.a11y.hideChatBubbles) return;

		let J = G("p", Q);

		(
			$.element.querySelector(".chat-bubble")?.append(J),
			setTimeout(() => J.remove(), OK(Q.length))
		);
	}

	async function f3($, Q) {
		let J = await c$(6, { message: $, isGlobal: Q }, 5000);

		if ("error" in J) {
			let Y = J;

			if (Y.error == "muted") c3(!0, Q, `You are muted. (expires: ${M6(Y.until || null)})`); else if (Y.error == "chatCooldown") (
				L5(Y.until),
				c3(!0, Q, Y.until
					? "Global chat is on cooldown!"
					: "Global chat is disabled.")
			);
		}

		if (!J.message) return;
		if (J.cooldown !== void 0) L5(J.cooldown);

		W2(J.message);
	}

	function l3() {
		if (D.normalizedZoom <= L8) return (e("You need to zoom in to chat locally!"), !0);

		return !1;
	}

	var o$ = !1,
		r1 = G("div.list"),
		Q1 = G("div.list"),
		u3 = G("div.top-bar"),
		D1 = G("div.chat-log", u3, Q1),
		f4 = !1,
		i1 = !1;

	function x8() {
		(
			u3.replaceChildren(G("p#player-count", `${A0(R.onlinePlayers + R.onlineViewers, "player")} online`), G(
				"div.box.tabs",
				G("button.btn.tooltip", "Local", o$ && { className: "active" }, {
					dataset: { tooltip: "Nearby Cursors Only" },
					onclick: () => {
						(f4 = !1, d3());
					}
				}),
				G("button.btn.tooltip", "Global", !o$ && { className: "active" }, {
					dataset: { tooltip: "All Online Users" },
					onclick: () => {
						(f4 = !0, o3());
					}
				}),
				G("button#pin-chat-btn.btn.tooltip", G("img", { src: "/static/icon/tool/pin.png", draggable: !1, alt: "Pin" }), i1 && { className: "primary" }, {
					onclick() {
						i1 = !i1;

						let $ = D1.parentElement;

						if (i1) $.style.setProperty("display", "block", "important"); else $.style.removeProperty("display");

						x8();
					},

					dataset: {
						tooltip: i1
							? "Chat is pinned (stays on screen)"
							: "Chat is not pinned (auto-hides)"
					}
				})
			)),

			n0("div.chat-input-box").forEach(($) => {
				$.classList.toggle("global", !o$);
			})
		);
	}

	function d3() {
		if (o$) return;
		if (l3()) return;

		(o$ = !0, Q1.replaceWith(r1), x8());
	}

	function o3() {
		if (!o$) return;

		(o$ = !1, r1.replaceWith(Q1), x8());
	}

	function n3() {
		if (f4) return;
		if (D.normalizedZoom <= L8) o3(); else d3();
	}

	var e1 = 0;

	function SK($) {
		if ($ === void 0) $ = 0;
		if ((e1 = $, !$)) return $;

		let Q = Math.round(($ - Date.now()) / 1000);

		if (Q <= 0) return (e1 = 0, 0);

		return (e1 = $, Q);
	}

	function L5($) {
		let Q = SK($), J = Q === null ? "inf" : `${Q}s`;

		n0("div.chat-input-box").forEach((Y) => {
			if (Q == 0) delete Y.dataset.cooldown; else Y.dataset.cooldown = J;
		});
	}

	setInterval(
		() => {
			if (e1) L5(e1);
		},
		500
	);

	var _K = /^can i ha[sz] cursor pl[zs]\??$/i;

	function FQ($ = !1) {
		let Q = !1,
			J,
			Y = G("input#chat-input-field.input.box", {
				type: "text",
				spellcheck: !1,
				maxLength: P6,
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
			Z = Q$("tool/send", {
				id: "tool-send-btn",
				ariaLabel: "Send Message",
				async onclick() {
					let K = Y.value.slice(0, P6).trim();

					if (!K || Q) return;

					try {
						if ((
							Q = !0,
							Y.readOnly = !0,
							q.style.opacity = "0.5",
							_K.test(K) && !x.flags.plzCursor
						)) {
							if (!await x$({ code: "CAN_I_HAS_CURSOR" })) {
								(
									new _("plz?", G("p", "yes u may haz cursor")),
									x.flags.plzCursor = !0,
									N0()
								);

								return;
							}
						}

						(await f3(K, !o$), Y.value = "");
					} finally {
						(
							await Z6(500),
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

	function oY() {
		return (
			x8(),
			G("div.input.chat-box.container", G("div.popup.box.outset.chat-log-wrapper", D1), FQ())
		);
	}

	function b4($, Q = !0) {
		let J = u("input#chat-input-field");

		if (!J) return;

		let Y = J.value, Z = Y && Y.at(-1) != " ";

		if ((J.value = `${Y}${Z ? " " : ""}${$} `.slice(0, P6), Q)) J.focus();
	}

	var f6 = 1.5,
		L8 = 0.8,
		G0 = G("canvas", { width: b, height: C0 }),
		t3 = "/static/brick-background.jpg",
		yK = "/static/brick-background-hi.webp",
		d4 = G("img.canvas-background", { fetchPriority: "high", src: t3, draggable: !1 }),
		P$ = null,
		$6 = !1,
		gK = 0.8;

	function a3() {
		if (P$ || x.a11y.performanceMode || f0) return;

		(P$ = new Image(), P$.decoding = "async", P$.src = yK);
	}

	var s3 = window.requestIdleCallback ?? (($) => setTimeout($, 800));

	s3(a3);

	function vK() {
		if ($6) return;
		if (D.zoom < gK) return;
		if (!P$ || !P$.complete || P$.naturalWidth === 0) return;

		(d4.src = P$.src, $6 = !0);
	}

	var H3 = () => $6 || P$ || s3(a3);

	function P3() {
		if (!$6) return;

		(d4.src = t3, $6 = !1, P$ = null);
	}

	var X1 = G("div.paint-layers", m1, $5, G0),
		X$ = G("div.canvas-container", d4, X1),
		z0 = G("div.canvas-wrapper", X$),
		Q8 = G0.getContext("2d");

	Q8.imageSmoothingEnabled = !1;

	var D = {
			x: 0,
			y: 0,
			zoom: 1,
			normalizedZoom: 1,
			rect: G0.getBoundingClientRect(),
			viewport: { x: 0, y: 0, x2: 0, y2: 0 }
		},
		pK = 1920;

	function xK() {
		D.zoom = Math.max(D.zoom, J1());

		let $ = b * D.zoom,
			Q = C0 * D.zoom,
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

	function S$() {
		if ((
			xK(),
			X$.style.setProperty("--zoom", D.zoom.toString()),
			X$.style.transform = `translate(${D.x}px, ${D.y}px) scale(${D.zoom})`,
			D.rect = G0.getBoundingClientRect(),
			X$.style.imageRendering = "pixelated",
			D.normalizedZoom = D.zoom / (window.innerWidth / pK),
			n3(),
			D.normalizedZoom <= L8
		)) document.body.classList.remove("cursors-visible"); else document.body.classList.add("cursors-visible");

		(
			S7({
				x: D.rect.left,
				y: D.rect.top,
				w: window.innerWidth,
				h: window.innerHeight,
				zoom: D.rect.width / G0.width
			}),
			vK(),
			D.viewport = LQ(),
			x.camera.zoom = D.zoom,
			x.camera.x = D.x,
			x.camera.y = D.y,
			N0()
		);
	}

	var l4 = null;

	function n$() {
		if (l4) return;

		l4 = requestAnimationFrame(() => {
			(l4 = null, S$());
		});
	}

	function J1() {
		return Math.max(window.innerWidth / G0.width, window.innerHeight / G0.height);
	}

	function r3() {
		if (x.camera.zoom != 0) {
			(
				D.zoom = x.camera.zoom,
				D.x = x.camera.x,
				D.y = x.camera.y,
				S$()
			);

			return;
		}

		(
			D.zoom = J1(),
			S$(),
			D.x = window.innerWidth / 2 - D.rect.width / 2,
			D.y = window.innerHeight / 2 - D.rect.height / 2,
			S$()
		);
	}

	function o1($, Q, J, Y, Z = 0.6) {
		let q = Math.min(window.innerWidth * Z / Math.max(J, 1), window.innerHeight * Z / Math.max(Y, 1)),
			K = Math.min(Math.max(q, J1()), 40);

		(D.zoom = K, S$());

		let W = D.rect.width / G0.width,
			F = D.rect.left + ($ + J / 2) * W,
			H = D.rect.top + (Q + Y / 2) * W;

		(
			D.x += window.innerWidth / 2 - F,
			D.y += window.innerHeight / 2 - H,
			S$()
		);
	}

	var u4 = !1;

	async function i3($, Q, J = 60, Y = 160) {
		if (u4) return !1;

		u4 = !0;

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
			let j = F(H / J),
				X = K + ($ - K) * j,
				P = W + (Q - W) * j,
				k = Z + (Y - Z) * j,
				U = q + (Y - q) * j;

			(
				o1(X - k / 2, P - U / 2, k, U, 1),
				await Z6(16.666666666666668)
			);
		}

		return (u4 = !1, !0);
	}

	window.addEventListener("resize", n$);

	var e3 = {
			stat_pixels_changed: "Pixels Changed",
			stat_paint_visible: "Paint Visible",
			stat_member_count: "User Count"
		},
		o4 = { users: "Users", clans: "Clans", countries: "Countries" },
		n4 = {
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

	var cK = {
			users: "You're",
			clans: "Your clan is",
			countries: "Your country is"
		},
		bK = {
			stat_member_count: H0,
			stat_pixels_changed: H0,
			stat_paint_visible: V6
		},
		fK = {
			users: ($, Q) => [
				G("b.box", $.clan_name && G("b.clan-label", E$($.clan_name)), $.name),
				G("span.box", Q)
			],
			clans: ($, Q) => [G("b.box", $.name), G("span.box", Q)],
			countries: ($, Q) => [G("b.box", R6($.name)), G("span.box", Q)]
		};

	async function Q6($, Q, J = 0) {
		K0();

		let Y = await m.leaderboard.$get({ query: { category: $, stat: Q, page: (J || 0).toString() } });

		if (!Y.ok) return T0(Y, "Could not load the leaderboard");

		let Z = await Y.json();

		new _("Leaderboard", G(
			"div.leaderboard-modal.nopad",
			C5(Object.keys(o4).map((q) => ({
				label: o4[q],
				active: q == $,
				action() {
					Q6(q, n4[q][0]);
				}
			}))),
			G(
				"div.pad",
				G(
					"select.box.outset",
					{
						oninput(q) {
							let K = q.target.value;

							Q6($, K, J);
						}
					},
					n4[$].map((q) => G("option", e3[q], { value: q, selected: Q == q }))
				),
				typeof Z.position == "number" && Z.ownValue !== 0 && G("p.desc", `${cK[$]} #${H0(Z.position + 1)}!`),
				G("div.list", Z.leaderboard.map((q, K) => G("div.item.box.outset", G("div.box", `${K + 1 + J * 10}`), fK[$](q, bK[Q](q.value))))),
				G(
					"div.btn-container",
					G("a.link", "<<", {
						onclick() {
							if (J == 0) return;

							Q6($, Q, J - 1);
						}
					}),
					G("b", `Page ${H0(J + 1)}`),
					G("a.link", ">>", {
						onclick() {
							if (Z.leaderboard.length < 10) return;

							Q6($, Q, J + 1);
						}
					})
				)
			)
		));
	}

	function $G() {
		Q6("users", "stat_paint_visible", 0);
	}

	function D5($, Q) {
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

	var A5 = [
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
					D5("/static/img/tutorial_cursors.png", "An image of three cursors chatting on the canvas")
				]
			},

			{
				name: "Drawing",
				title: "Drawing Mechanic",
				content: [
					G("p", "The paint mechanic works like real spray paint: move fast to make thin lines, move slowly and the paint starts dripping."),
					D5("/static/img/tutorial_drawing.png", "An image of the spray can mechanic in-action"),
					G("p", "When you draw, your changes are only visible to you. You can undo, redo, and edit freely without affecting others."),
					G("p", "Click ", G("span.box.inline", "Submit"), " in the toolbar to publish your drawing so everyone can see it instantly!")
				]
			},

			{
				name: "Spray Cans",
				content: [
					G("p", "Each user starts with a set number of spray cans for drawing on the canvas. Every spray can contains the same amount of paint."),
					D5("/static/img/tutorial_spray_cans.png", "An image of the spray paint bar on the toolbar, with the amount of extra spray cans to the right of it"),
					G("p", G("b", "Drawing consumes paint!"), " When one spray can runs out, the next one is used automatically.", " If you use all your spray cans, a few minute timer starts, after which your paint gets refilled."),
					G("p", "You can also earn extra paint by inviting your friends to ", G("b", "The Wall"), "! ", G("br"), "Go to ", G("span.box.inline", "User > Share Webiste"), " in the action bar to get your own personalized link!")
				]
			},

			{
				name: "Toolbar",
				content: [
					D5("/static/img/tutorial_hotbar.png", "An image of the website's toolbar, containing text and arrows describing each component"),
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
		QG = A5.length - 1;

	function Y1($ = 0) {
		let Q = A5[$],
			J = A5[$ - 1],
			Y = A5[$ + 1],
			Z = $ + 1,
			q = Z <= QG ? `Guidebook [${Z}/${QG}]` : "Guidebook";

		if (!x.seenGuidebook) (x.seenGuidebook = !0, N0());

		new _(q, G("div.info.tutorial", G("h3", Q.title || Q.name), Q.content, G("div.btn-container", J && G("a.link.prev", `<< ${J.name}`, { onclick: () => Y1($ - 1) }), G("a.link.next", `${Y?.name || "Continue"} >>`, { onclick: () => Y ? Y1($ + 1) : p() })))).onClose(() => {
			if (!Y) x$({ code: "READ_GUIDEBOOK" });
		});
	}

	function JG() {
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
			R$
		));
	}

	var T5 = [
		{
			label: "[S]ocial",
			shortcut: "S",
			menu: [
				{ label: "[O]nline Users", action: () => l7() },
				{ label: "[L]eaderboard", action: () => $G() }
			]
		},

		{
			label: "[H]elp",
			shortcut: "H",
			menu: [
				{ label: "[G]uidebook", action: () => Y1() },
				{ label: "[K]eybinds", action: () => JG() },
				{ label: "[F]eedback / Bug Reporting", action: () => h2() },
				{
					label: "[P]rivacy Policy & ToS",
					action: () => {
						window.open("/privacy.html", "_blank");
					}
				}
			]
		}
	];

	var J6 = !1,
		YG = () => [
			{
				label: "[U]ser",
				shortcut: "U",
				menu: [
					{ label: `Hi, ${R.user?.username}!` },
					{},
					{ label: "[S]ettings", shortcut: "S", action: M5 },
					{ label: "[C]lan Settings", shortcut: "C", action: L1 },
					{ label: "Cursor [I]nventory", shortcut: "I", action: v8 },
					{ label: "Share [W]ebsite", shortcut: "W", action: A1 },
					{},
					{
						label: "[L]ogout",
						shortcut: "l",
						async action() {
							if (await i("Are you sure you want to log out?")) X7();
						}
					}
				]
			},

			{
				label: "[A]ction",
				shortcut: "A",
				menu: [
					{ label: "[U]ndo", keybindText: `${YQ}+Z`, action: () => c6() },
					{
						label: "[R]edo",
						keybindText: `${YQ}+${U1 ? "Shift+Z" : "Y"}`,
						action: () => b6()
					}
				]
			},
			...T5,
			...v0()
				? [
					{
						label: "[M]od",
						shortcut: "M",
						menu: () => [
							{ label: "Users", action: () => s("users") },
							{ label: "Audit Log", action: () => s("audit") },
							...s1()
								? [
									{ label: "Review Queue", action: () => s("review") },
									{ label: "Broadcast", action: () => s("broadcast") }
								]
								: [],
							{},
							{ label: "Tile Inspector", action: () => t1() },
							{ label: "Wipe Canvas Selection", action: () => e8() },
							{},
							{
								label: `[${J6 ? "ON" : "OFF"}] Hide Own Cursor`,
								action() {
									(R.cursorX = 0, R.cursorY = 0, J6 = !J6);
								}
							}
						]
					}
				]
				: []
		];

	var l0 = !1,
		k$ = 0,
		C$ = 0,
		GG = [0, 2, 3, 4],
		a$ = !1,
		a4 = !1,
		lK = "1234567890";

	document.body.addEventListener("keydown", ($) => {
		if (W0 || $.target != document.body) return;

		if ((U1 ? $.metaKey : $.ctrlKey) && ($.key == "z" || $.key == "Z" || $.key == "y" || $.key == "u")) {
			if ((
				$.preventDefault(),
				l0 = !1,
				$.key == "z" || $.key == "Z" && !$.shiftKey
			)) c6(); else b6();

			return !1;
		} else if ($.key == "h") u("#tool-hand").click(); else if ($.key == "x" || $.key == "b") u("#tool-spray").click(); else if ($.key == "c") W5(); else if ($.key == "-") r4(1, 0.2); else if ($.key == "=") r4(-1, 0.2); else if ($.key == "m") u("#tool-preview").click(); else if ($.key == "k") {
			let J = x.a11y;

			if ((J.hideCursors = !J.hideCursors, d1(), J.hideCursors)) J.hideCursorKeybind = !0;

			N0();
		} else if ($.key == "t" || $.key == "Enter") setTimeout(
			() => {
				let J = u("#tool-chat");

				if (J.checkVisibility()) J.click(); else u(".chat-box input").focus();
			},
			10
		); else if (lK.includes($.key)) {
			let J = parseInt($.key) || 10;

			lY(J);
		} else if ($.key == "p") {
			let J = f2(...S0(k$, C$));

			if (J) R8(J, !0);
		} else if (uK.has($.key.toLowerCase())) (l0 = !1, t$.add($.key.toLowerCase()), oK());
	});

	var uK = new Set(["w", "a", "s", "d"]),
		dK = 900,
		t$ = new Set(),
		E5 = null,
		s4 = 0;

	function oK() {
		if (E5 != null) return;

		(s4 = performance.now(), E5 = requestAnimationFrame(KG));
	}

	function nK() {
		(t$.clear(), a$ = !1);
	}

	function KG($) {
		if (W0 || !t$.size) {
			E5 = null;

			return;
		}

		let Q = Math.min($ - s4, 100) / 1000;

		s4 = $;

		let J = dK * D.zoom * Q, Y = 0, Z = 0;

		if (t$.has("w")) Z += 1;
		if (t$.has("s")) Z -= 1;
		if (t$.has("a")) Y += 1;
		if (t$.has("d")) Y -= 1;

		if (Y || Z) {
			let q = Math.hypot(Y, Z);

			(D.x += Y / q * J, D.y += Z / q * J, l0 = !1, n$());
		}

		E5 = requestAnimationFrame(KG);
	}

	document.body.addEventListener("keyup", ($) => {
		t$.delete($.key.toLowerCase());
	});

	window.addEventListener("blur", nK);

	window.addEventListener("beforeunload", ($) => {
		if (E4()) return ($.preventDefault(), $.returnValue = !0, !1);
	});

	function ZG($, Q) {
		if (R.activeTool != 1 || D.normalizedZoom < f6) return;
		if (R.openAt && Date.now() + R.clockOffset < R.openAt) return;
		if (R.paintRemaining + R.localPaintIncrement <= 0) return w4();

		(l0 = !0, k$ = $, C$ = Q);
	}

	function t4($, Q) {
		if (a$ || D.normalizedZoom < L8) return;
		if (x.a11y.hideCursors || J6) return;

		let [J, Y] = S0($, Q);

		(R.cursorX = J, R.cursorY = Y);
	}

	function qG($, Q) {
		(a$ = !0, k$ = $, C$ = Q);
	}

	function FG($, Q) {
		if (a$) (D.x += $ - k$, D.y += Q - C$, n$());

		(k$ = $, C$ = Q);
	}

	var WG = 200;

	function r4($, Q = 0.1) {
		let J = D.zoom,
			Y = D.zoom + Q * -Math.sign($) * D.zoom;

		(
			D.zoom = Math.max(Math.min(Y, WG), J1()),
			jG(D.zoom / J, k$, C$)
		);
	}

	function jG($, Q, J) {
		(
			l0 = !1,
			D.x = Q - (Q - D.x) * $,
			D.y = J - (J - D.y) * $,
			n$(),
			a0()
		);
	}

	function i4() {
		if (a4) {
			if (R.paintRemaining > 0) p2(); else v6();

			a4 = !1;
		}

		if (l0 && s0.length) l2();

		(a$ = !1, l0 = !1, I5 = null);
	}

	document.body.addEventListener("mousemove", ($) => FG($.x, $.y));

	var I5 = null;

	document.body.addEventListener("touchmove", ($) => {
		if ($.touches.length == 1) {
			if (w5) return;

			FG($.touches[0].clientX, $.touches[0].clientY);
		} else if ($.touches.length == 2) {
			(
				$.preventDefault(),
				$.stopImmediatePropagation(),
				l0 = !1,
				a$ = !1
			);

			let Q = $.touches[0],
				J = $.touches[1],
				Y = Math.hypot(J.clientX - Q.clientX, J.clientY - Q.clientY);

			if (I5 != null) {
				let Z = Y / I5, q = D.zoom * Z;

				(
					D.zoom = Math.max(Math.min(q, WG), J1()),
					jG(Z, (Q.clientX + J.clientX) / 2, (Q.clientY + J.clientY) / 2)
				);
			}

			return (I5 = Y, !1);
		}
	});

	document.body.addEventListener("mouseup", i4);
	document.body.addEventListener("touchend", i4);
	document.body.addEventListener("touchcancel", i4);

	function w4() {
		a4 = !0;
	}

	function XG() {
		(
			G0.addEventListener("mousedown", ($) => {
				if ($.button == 0) ZG($.x, $.y);
			}),

			G0.addEventListener(
				"touchstart",
				($) => {
					if ($.touches.length == 1) ZG($.touches[0].clientX, $.touches[0].clientY);
				},
				{ passive: !0 }
			),
			z0.addEventListener("mousemove", ($) => t4($.x, $.y)),
			z0.addEventListener(
				"touchmove",
				($) => {
					if ($.touches.length == 1) t4($.touches[0].clientX, $.touches[0].clientY); else if ($.touches.length == 2) $.preventDefault();
				},
				{ passive: !1 }
			),

			z0.addEventListener("mousedown", ($) => {
				if ($.button != 0 || GG.includes(R.activeTool)) qG($.x, $.y);
			}),

			z0.addEventListener(
				"touchstart",
				($) => {
					if ($.touches.length == 1 && GG.includes(R.activeTool)) {
						let Q = $.touches[0].clientX,
							J = $.touches[0].clientY;

						(t4(Q, J), qG(Q, J));
					} else if ($.touches.length == 2) $.preventDefault();
				},
				{ passive: !1 }
			),

			z0.addEventListener(
				"wheel",
				($) => {
					if ($.ctrlKey) $.preventDefault();

					(l0 = !1, r4($.deltaY, 0.1));
				},
				{ passive: !1 }
			),

			z0.addEventListener("dblclick", async ($) => {
				if (D.zoom > 1) return;

				let [Q, J] = S0($.x, $.y);

				i3(Q, J);
			})
		);
	}

	function HG() {
		(
			r3(),
			e2(),
			XG(),
			setTimeout(
				() => {
					requestAnimationFrame(x6);
				},
				1000
			)
		);
	}

	var s$ = !1,
		VG = Math.min(window.innerWidth, window.innerHeight) <= 800 && window.matchMedia("(pointer: coarse)").matches && document.fullscreenEnabled,
		tK = 25000000;

	function aK($, Q, J, Y, Z) {
		if (typeof Q != "string" || !Q?.length) return "Missing name";
		if (typeof J != "string" || !J?.length) return "Missing location";
		if ($ && $.length > 127) return "Identification is too long";
		if (Q.length > 255) return "Name is too long";
		if (J.length > 255) return "Location is too long";
		if (!Y || !Z) return "Missing file";
		if (!Y.startsWith("image/")) return "Invalid file type (expected an image)";
		if (Z > tK) return `File is too large (max 25MB; got ${Math.floor(Z / 1000 / 1000)}MB)`;
	}

	var D8 = -1;

	function sK() {
		let $ = u("input#s__id").value,
			Q = u("input#s__name").value,
			J = u("input#s__location").value,
			Y = u("input#s__upload").files,
			Z = Y ? Y.item(0) : null,
			q = aK($, Q, J, Z?.type, Z?.size);

		if (q) return (alert(q), !1);
	}

	function rK($) {
		let Q = new Intl.DateTimeFormat([], { day: "2-digit", month: "2-digit", year: "numeric" }).format($.submitted_at),
			J = G("div.image");

		if ($.image_file.match(/\.(mp4|webm|ogg|mov)$/i)) J.append(G("video", {
			style: { width: "100%", height: "100%" },
			controls: !0,
			src: `${q0.url.signalArchive}/static/uploads/${$.image_file}`,
			autoplay: !1,
			preload: "none",
			loop: !1,
			muted: !1
		})); else (
			J.style.backgroundImage = `url(${q0.url.signalArchive}/static/uploads/${$.image_file})`,
			J.style.imageRendering = "auto"
		);

		return G("div.window.wpost", G("div.title", G("p", `SIGNAL #${$.num_id}`), G("div.buttons", G("button", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", J, G("div.info", G("p", G("span.label", "SIGNAL NAME"), G("b", $.name)), G("p", G("span.label", "LOCATION"), G("b", $.location)), G("p", G("span.label", "TRANSMITTED"), G("b", Q)))));
	}

	async function RG() {
		(D8 = 0, await Promise.all([iK(), MG()]));
	}

	var e4 = !1;

	async function MG() {
		if (e4) return;

		e4 = !0;

		let $ = G("div.f", "Loading...");

		u(".sightings .posts").append($);

		let J = await (await fetch(`${q0.url.signalArchive}/fetch?tag=&after=${D8}&limit=${D8 ? 10 : 4}&at=${Date.now()}`)).json();

		if ((
			u(".sightings .posts").append(...J.map(rK)),
			D8 += J.length,
			$.remove(),
			e4 = !1,
			!J.length
		)) (
			u(".sightings .posts").append(G("div.f", D8 ? "You have reached the end." : "Nothing here yet...")),
			u(".sightings .more").style.display = "none"
		); else u(".sightings .more").style.display = "";
	}

	async function iK() {}

	async function eK() {
		let $ = u(".preview"),
			Q = u("input#s__upload").files?.item(0);

		if (!Q) {
			$.hidden = !0;

			return;
		}

		let J = URL.createObjectURL(new Blob([await Q.arrayBuffer()]));

		($.hidden = !1, $.style.backgroundImage = `url(${J})`);
	}

	var UG = G("div.info-container", G("div.window.winfo", G("div.title", G("p", "filian_is_lost.txt"), G("div.buttons", G("button.icon", G("img", { src: "/static/icon/archive/minimize.png", alt: "_" })), G("button.icon", G("img", { src: "/static/icon/archive/maximize.png", alt: "⌷" })), G("button.icon", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", G("h1", "FILIAN IS LOST."), G("p", "She went dark months ago. No posts. No streams. No signals. But we know she's listening. She always is."), G("p", G("b", "The Wall"), " is her frequency. Every mark you leave gets archived: a permanent record of everyone, everywhere, who showed up when she went quiet."), G("p", "Paint something. Make noise. Leave your mark in the archive."), G("p", "Bring her back.")))),
		G1 = G(
			"div.main",
			UG,
			G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " signal_archive.exe"), G("p", "Loading the signal archive...")),
			G("div.header", G("h1", "SIGNAL ARCHIVE"), G("p", "RECENTLY TRANSMITTED")),
			G("div.post-container", G("div.posts"), G("div.more", G("button", "LOAD MORE", { onclick: MG }))),
			G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " submit_signal.exe"), G("p", "Loading submission form...")),
			G("div.window.wsubmit", G("div.title", G("p", "submit_signal.exe")), G("div.content", G("h1", "DID YOU FIND SOMETHING?"), G("p", "Submit a signal to the archive"), G(
				"form",
				{
					action: `${q0.url.signalArchive}/submit`,
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
					onchange: eK
				}),
				G(
					"div.buttons",
					G("input", {
						type: "submit",
						onclick: () => sK(),
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
		m5 = G("img", { src: "/static/icon/arrow-down.png", draggable: !1 });

	function $F() {
		if (s$) LG(); else CG();

		m5.style.transform = s$ ? "rotate(180deg)" : "";
	}

	var h5 = G("div.sightings", G("div.mobile-scroll-btn", { onclick: $F }, G("button", m5)), G1);

	function zG($, Q) {
		let J = $ + Q;

		return J > 0 ? `${H0(J)} online` : "";
	}

	function a7($, Q) {
		let J = u("#wall-online-count");

		if (J) J.textContent = zG($, Q);
	}

	var w5 = !1;

	function kG($ = !1) {
		(
			sessionStorage.setItem("wall:view", $ ? "wall" : "archive"),
			document.body.append(h5),
			G1.inert = !0
		);

		let Q = u("main");

		if ((
			Q.prepend(G("div.modal-title.wall-title", G("span", G("h3", "the_wall.exe"), G("span.wall-online#wall-online-count", zG(R.onlinePlayers, R.onlineViewers))), G("button.btn", "Full Screen", { style: { color: "var(--text)" }, onclick: PG }))),
			!f0
		)) (
			Q.addEventListener("mouseenter", LG),
			h5.addEventListener("mouseenter", CG)
		); else Q.classList.add("mobile");

		if (!$) $J(); else PG();
	}

	function CG() {
		if (s$) return;
		if ((s$ = !0, !f0)) (document.body.classList.remove("noscroll"), G1.inert = !1);

		if ((
			UG.scrollIntoView({ behavior: f0 ? "auto" : "smooth", block: "center" }),
			D8 < 0
		)) RG();
	}

	function LG() {
		if (!s$) return;
		if ((s$ = !1, !f0)) (document.body.classList.add("noscroll"), G1.inert = !0);

		u("main").scrollIntoView({ behavior: f0 ? "auto" : "smooth", block: "center" });
	}

	function PG() {
		if ((
			w5 = !1,
			sessionStorage.setItem("wall:view", "wall"),
			u("main").classList.remove("minimized"),
			h5.style.display = "none",
			n$(),
			f0
		)) (
			document.body.classList.add("noscroll"),
			G1.inert = !0,
			s$ = !1,
			m5.style.transform = ""
		);

		if (VG) document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
	}

	function $J() {
		if ((
			w5 = !0,
			u("main").classList.add("minimized"),
			sessionStorage.setItem("wall:view", "archive"),
			h5.style.display = "",
			n$(),
			f0
		)) {
			if ((
				document.body.classList.remove("noscroll"),
				G1.inert = !1,
				s$ = !1,
				m5.style.transform = "",
				D8 < 0
			)) RG();
		}

		if (VG) document.exitFullscreen().catch(() => {});
	}

	var QJ = G("div.actionbar", { role: "toolbar" });

	function DG($) {
		let Q = G("button.abtn.btn.action", K6($.label), { ariaLabel: $.label.replace(/[\[\]]/g, "") });

		if ($.active) Q.classList.add("active");

		let J = () => {
			if (!$.menu) return;

			let Y = Q.getBoundingClientRect(),
				Z = typeof $.menu == "function" ? $.menu() : $.menu;

			WJ(Z, Y.x, Y.y + Y.height);
		};

		return (
			Q.onclick = () => {
				if (!x5()) J();
				if ($.action) $.action();
			},

			Q.onmouseover = () => {
				if ($.action) I$();
				if (x5()) J();
				if (document.activeElement) document.activeElement.blur();
			},
			Q
		);
	}

	function JJ($) {
		QJ.replaceChildren(...$.map(DG), G("div.right-side", G("b.fil", "FILIAN IS LOST"), G(
			"button.btn.icon.minimize-btn",
			{
				ariaLabel: "Minimize",
				onclick() {
					$J();
				}
			},
			G("img", { src: "/static/icon/close.png", draggable: !1 })
		)));
	}

	function C5($) {
		return G("div.navbar.custom", G("div.actionbar.custom", $.map(DG)));
	}

	var $$ = null, Y6 = null, N5 = "";

	function QF($, Q, J) {
		if (!$) return;
		if ($$) B5();

		let Y = G("div#tooltip-text.tooltip-popup", { textContent: $, role: "tooltip" });

		(document.body.append(Y), $$ = Y, AG(Q, J));
	}

	function AG($, Q) {
		if (!$$) return;

		let J = $$.getBoundingClientRect(),
			Y = $ + J.width > window.innerWidth ? window.innerWidth - J.width : $,
			Z = Q + J.height > window.innerHeight ? window.innerHeight - J.height : Q;

		($$.style.left = `${Y}px`, $$.style.top = `${Z}px`);
	}

	function B5() {
		if (!$$) return;
		if (Y6) Y6.removeAttribute("aria-describedby");

		($$.remove(), $$ = null, Y6 = null, N5 = "");
	}

	function O5($, Q, J) {
		if (!$.classList || !$.classList.contains("tooltip")) return;

		let Y = $.dataset.tooltip;

		if (!Y) return;

		let Z = typeof Q == "number" && typeof J == "number";

		if (!Z) {
			let q = $.getBoundingClientRect();

			(Q = q.x, J = q.y);
		}

		if ($$) {
			if (Y6 != $) return (B5(), O5($, Q, J));
			if (N5 != Y) ($$.textContent = Y, N5 = Y);
			if (Z) AG(Q, J);

			return;
		}

		(
			QF(Y, Q, J),
			Y6 = $,
			N5 = Y,
			$.setAttribute("aria-describedby", "tooltip-text")
		);
	}

	document.addEventListener("mouseover", ($) => O5($.target, $.x, $.y));
	document.addEventListener("mousemove", ($) => O5($.target, $.x, $.y));
	document.addEventListener("focusin", ($) => O5($.target));
	window.addEventListener("mouseout", B5);
	window.addEventListener("click", B5);

	var TG = [
		{
			label: "[L]og In",
			shortcut: "L",
			action() {
				Z8();
			}
		},
		{ label: "[S]ettings", shortcut: "S", action: M5 },
		...T5
	];

	var IG = G("div.hotbar.login-bar", G(
		"p",
		G("a.link", "Log in", {
			tabIndex: 1,
			onclick() {
				Z8();
			}
		}),
		" to draw & chat with ",
		G("b#online-player-counter", "[...]"),
		"+ players!"
	));

	var JF = "G-XXXXXXXXXX", EG = !1;

	function wG() {
		let $ = q0.gaMeasurementId;

		if (EG || !$ || $ === JF) return;

		let Q = location.hostname;

		if (Q === "localhost" || Q === "127.0.0.1") return;

		(
			EG = !0,
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

	async function YF() {
		return await (await m.canvas.snapshot.bson.$get({ query: { at: Math.floor(Date.now() / 1000) } })).arrayBuffer();
	}

	function hG() {
		if (q0.url?.ws) return;

		let $ = YF(), Q = new Image();

		(
			Q.decoding = "async",
			Q.crossOrigin = "anonymous",
			Q.onload = async () => {
				(
					Q8.clearRect(0, 0, G0.width, G0.height),
					Q8.drawImage(Q, 0, 0)
				);

				let J = j$.deserialize(new Uint8Array(await $));

				for (let Y of J.changes) N8(Y.pos, Y.color);
			},

			Q.src = m.canvas.snapshot.png.$url({
				query: { at: Math.floor(Date.now() / q0.canvas.snapshotInterval) }
			}).toString()
		);
	}

	var mG = "";

	function NG() {
		let $ = D.viewport.x2 - D.viewport.x,
			Q = D.viewport.y2 - D.viewport.y,
			J = Math.floor(D.viewport.x + $ / 2),
			Y = Math.floor(D.viewport.y + Q / 2);

		return [J, Y];
	}

	function GF() {
		if (a$) return;

		let [$, Q] = NG(), J = new URL(location.href);

		if ((J.hash = `${$},${Q}`, J.hash != mG)) (history.replaceState(null, "", J), mG = J.hash);
	}

	function ZF() {
		if (!location.hash) return;

		let [$, Q] = location.hash.slice(1).split(",").map(Number);

		if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q)) return;
		if ($ < 0 || Q < 0 || $ >= b || Q >= C0) return;

		let [J, Y] = NG();

		if ($ != J || Q != Y) S4($, Q);
	}

	function BG() {
		(ZF(), setInterval(GF, 1000));
	}

	var OG = [
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
		G6 = 0;

	document.addEventListener("keydown", async ($) => {
		if (x.flags.konamiCursor || !R.user) return;

		if ($.key == OG[G6]) {
			if ((G6++, G6 >= OG.length)) {
				G6 = 0;

				let Q = await x$({ code: "SUPER_SECRET_KONAMI_CODE" });

				if (Q) return e(Q);

				(
					new _("Code Activated", G("p", "Enjoy your free cursor!")),
					x.flags.konamiCursor = !0,
					N0()
				);
			}
		} else G6 = 0;
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

	wG();
	t7();

	async function qF() {
		let $ = new URLSearchParams(location.search);

		if ((
			X$.append(z8),
			document.body.append(N$, G("main", QJ, z0, I4)),
			HG(),
			hG(),
			d1(),
			BG(),
			X3(),
			await j7(),
			R.user
		)) {
			if ((JJ(YG()), S8(), q$.seed(R.user), dY(), !x.seenGuidebook)) setTimeout(Y1, 1000);
			if (v0()) p3();
		} else if ((R.setTool(3), JJ(TG), H5(IG), g$(), S8(), $.has("ssu"))) K7($.get("ssu"));

		let Q = $.has("wall") || sessionStorage.getItem("wall:view") === "wall";

		if ((kG(Q), $.has("debug"))) R5();
	}

	var SG = () => qF().catch(($) => console.error("boot failed", $));

	if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", SG); else SG();
})();