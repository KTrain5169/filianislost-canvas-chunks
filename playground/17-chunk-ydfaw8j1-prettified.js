(() => {
	var {
			defineProperty: FJ,
			getOwnPropertyNames: pG,
			getOwnPropertyDescriptor: cG
		} = Object,
		bG = Object.prototype.hasOwnProperty;

	var WJ = new WeakMap(),
		fG = ($) => {
			var Q = WJ.get($), J;

			if (Q) return Q;

			if ((
				Q = FJ({}, "__esModule", { value: !0 }),
				$ && typeof $ === "object" || typeof $ === "function"
			)) pG($).map((Y) => !bG.call(Q, Y) && FJ(Q, Y, { get: () => $[Y], enumerable: !(J = cG($, Y)) || J.enumerable }));

			return (WJ.set($, Q), Q);
		};

	var lG = ($, Q) => () => (($ && (Q = $($ = 0)), Q));
	var dG = {};
	var p5 = "", c5 = "";

	var RJ = lG(() => {
		(async function $() {
			let J = await (await fetch("/.last-bundle")).text(),
				[Y, q] = J.split(",");

			if (p5 && p5 != Y) location.reload(); else if (c5 && c5 != q) {
				let K = (await (await fetch("/")).text()).match(/href="(\.\/chunk-[a-z\d]+.css)"/)?.[1],
					W = document.querySelector("link[rel=stylesheet]");

				if (!K || !W) return (
					console.error("Couldn't reload stylesheet without reloading..."),
					location.reload()
				);

				W.href = `${K}?at=${Date.now()}`;
			}

			(p5 = Y, c5 = q, setTimeout($, 1000));
		})();
	});

	var G0 = [
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
		uG = new Map();

	for (let $ = 0; $ < G0.length; $++) {
		let Q = G0[$], J = parseInt(Q.hex.slice(1), 16);

		(Q.idx = $, Q.color = J, uG.set(J, $));

		let Y = J >> 16 & 255,
			q = J >> 8 & 255,
			Z = J & 255;

		(
			Q.rgb = [Y, q, Z],
			Q.u24 = Z << 16 | q << 8 | Y,
			Q.u32 = 4278190080 | Q.u24
		);
	}

	var jJ = 30000, XJ = 15000;
	var HJ = 1, VJ = 5, a = 100;

	var W1 = 60,
		m0 = 42,
		v = 6000,
		Z0 = 4200,
		i$ = 25200000;

	var j1 = 3615,
		v5 = 24,
		K0 = 1000,
		x5 = Math.floor(100),
		W6 = { SignUp: 2000, TimePassed: 1000, ReferralCode: 1000 };

	var X1 = 4000, H1 = 80;
	var PJ = 2130706432, I8 = 0.5;

	var u = ($, Q) => (Q ?? document).querySelector($),
		t0 = ($, Q) => (Q ?? document).querySelectorAll($),
		V1 = ($) => new Promise((Q) => setTimeout(Q, $)),
		P1 = () => new Promise(($) => setTimeout($, 1)),
		MJ = ($, Q) => {
			for (let J in $) {
				let Y = $[J];

				if (typeof Y == "object" && !Array.isArray(Y) && J in Q) MJ(Y, Q[J]); else if (J.startsWith("data-") && Q.setAttribute) Q.setAttribute(J, Y); else if (J.startsWith("--") && Q.setProperty) Q.setProperty(J, Y); else if (J == "className" && Q.classList) Q.classList.add(Y); else Q[J] = Y;
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
			if (K instanceof HTMLElement || typeof K == "string") Z.append(K); else if (typeof K == "number") Z.append(String(K)); else if (typeof K == "object") MJ(K, Z);
		}

		return Z;
	}

	var P$ = !1;

	if (P$) RJ();

	var R1 = null;

	function h$($) {
		(
			j6(),
			R1 = G(
				"div.mod-return",
				G("button.btn.mod-return-go", `↩ Resume: ${$.label}`, {
					onclick() {
						(j6(), $.reopen());
					}
				}),
				G("button.btn.mod-return-x", "✕", { ariaLabel: "Dismiss", onclick: () => j6() })
			),
			document.body.append(R1)
		);
	}

	function j6() {
		(R1?.remove(), R1 = null);
	}

	function zJ($) {
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

	function b5($) {
		if (!navigator.clipboard) return zJ($);

		navigator.clipboard.writeText($).catch((Q) => {
			(console.error(Q), zJ($));
		});
	}

	var q$ = ($, Q) => G("button.btn.icon", Q, G("img", {
			src: `/static/icon/${$}.png`,
			alt: `${$} icon`,
			style: { pointerEvents: "none" },
			draggable: !1
		})),
		M1 = ($) => $.split(/(\[.\])/).map((Q, J) => J % 2 ? G("u", Q.slice(1, -1)) : Q),
		f5 = ($, Q, J, Y, q) => G(
			"button.btn.branding",
			q,
			{ ariaLabel: Q, style: { backgroundColor: J, color: Y } },
			G("img", {
				alt: `${$} icon`,
				src: `/static/icon/platform/${$}.png`,
				draggable: !1
			}),
			G("span", Q)
		),
		z1 = ($, Q) => G(
			"button.btn.swatch.icon",
			G("img", {
				alt: `${$} icon`,
				src: `/static/icon/${$}.png`,
				draggable: !1
			}),
			Q
		),
		U1 = ($, Q) => {
			return ($.dataset.tooltip = Q, $.classList.add("tooltip"), $);
		};

	var UJ = ($, Q = 2) => {
		let J = 10 ** Q, Y = Math.floor($ % 1 * J);

		return [
			G("span", Math.floor($).toString()),
			Y >= 0 && G("span", { style: { fontSize: "0.6em" } }, `.${Y}`.replace(/0+$/, ""))
		];
	};

	function i($, Q = "Confirmation", J = "Yes", Y = "No") {
		return new Promise((q) => {
			let Z = !1,
				K = (H) => {
					if (Z) return;

					(
						Z = !0,
						document.removeEventListener("keydown", W, !0),
						F.remove(),
						q(H)
					);
				},
				W = (H) => {
					if (H.key == "Escape") (H.stopPropagation(), K(!1)); else if (H.key == "Enter") (H.stopPropagation(), K(!0));
				},
				F = G("div.modal-bg.confirm-bg", G("div.modal-container", G("div.modal-title", G("span", Q), q$("close", { ariaLabel: "Close", onclick: () => K(!1) })), G("div.modal-content", G("div.modal", G("p", $), G("div.btn-container", G("button.btn", J, { onclick: () => K(!0) }), G("button.btn", Y, { onclick: () => K(!1) }))))));

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
		k1 = "",
		e$ = G("button.btn", "Close", { onclick: p }),
		R$ = G("div.btn-container", e$);

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
				this.titleElement.append(G("span", $), q$("close", { ariaLabel: "Close Modal", onclick: () => this.close() })),
				this.bg.append(this.container),
				this.container.append(this.titleElement, Q),
				Q.classList.add("modal-content"),
				u("main").inert = !0,
				document.body.append(this.bg),
				document.body.style.overflow = "hidden",
				k1 = $,
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
				k1 = "",
				document.body.style.overflow = "",
				u("main").inert = !1,
				!0
			);
		}
	}

	document.addEventListener("keydown", ($) => {
		if ($.key == "Escape" && F0) p();
	});

	var W0 = {
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

	var nG = /^[\w!#$%&'*.^`|~+-]+$/;

	var tG = ($, Q, J = {}) => {
			if (!nG.test($)) throw new Error("Invalid cookie name");

			let Y = `${$}=${Q}`;

			if ($.startsWith("__Secure-") && !J.secure) throw new Error("__Secure- Cookie must have Secure attributes");

			if ($.startsWith("__Host-")) {
				if (!J.secure) throw new Error("__Host- Cookie must have Secure attributes");
				if (J.path !== "/") throw new Error('__Host- Cookie must have Path attributes with "/"');
				if (J.domain) throw new Error("__Host- Cookie must not have Domain attributes");
			}

			for (let q of ["domain", "path"]) if (J[q] && (/[;\r\n]/).test(J[q])) throw new Error(`${q} must not contain ";", "\\r", or "\\n"`);

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
		kJ = ($, Q, J) => {
			return (Q = encodeURIComponent(Q), tG($, Q, J));
		};

	var LJ = ($, Q) => {
			return (
				$ = $.replace(/\/+$/, ""),
				$ = $ + "/",
				Q = Q.replace(/^\/+/, ""),
				$ + Q
			);
		},
		D1 = ($, Q) => {
			for (let [J, Y] of Object.entries(Q)) {
				let q = new RegExp("/:" + J + "(?:{[^/]+})?\\??");

				$ = $.replace(q, Y ? `/${Y}` : "");
			}

			return $;
		},
		DJ = ($) => {
			let Q = new URLSearchParams();

			for (let [J, Y] of Object.entries($)) {
				if (Y === void 0) continue;
				if (Array.isArray(Y)) for (let q of Y) Q.append(J, q); else Q.set(J, Y);
			}

			return Q;
		},
		CJ = ($, Q) => {
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

	function L1($) {
		return typeof $ === "object" && $ !== null && !Array.isArray($);
	}

	function u5($, Q) {
		if (!L1($) && !L1(Q)) return Q;

		let J = { ...$ };

		for (let Y in Q) {
			let q = Q[Y];

			if (L1(J[Y]) && L1(q)) J[Y] = u5(J[Y], q); else J[Y] = q;
		}

		return J;
	}

	var AJ = ($, Q) => {
			return new Proxy(() => {}, {
				get(Y, q) {
					if (typeof q !== "string" || q === "then") return;

					return AJ($, [...Q, q]);
				},

				apply(Y, q, Z) {
					return $({ path: Q, args: Z });
				}
			});
		},
		sG = class {
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

					for (let [F, H] of Object.entries($.cookie)) W.push(kJ(F, H, { path: "/" }));

					Y.Cookie = W.join(",");
				}

				if (this.cType) Y["Content-Type"] = this.cType;

				let q = new Headers(Y ?? void 0), Z = this.url;

				if ((Z = l5(Z), Z = D1(Z, this.pathParams), this.queryParams)) Z = Z + "?" + this.queryParams.toString();

				J = this.method.toUpperCase();

				let K = !(J === "GET" || J === "HEAD");

				return (Q?.fetch || fetch)(Z, {
					body: K ? this.rBody : void 0,
					method: J,
					headers: q,
					...Q?.init
				});
			};
		},
		d5 = ($, Q) => AJ(
			function J(Y) {
				let q = Q?.buildSearchParams ?? DJ,
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

				if ((/^\$/).test(K[0])) {
					let X = Z.pop();

					if (X) W = X.replace(/^\$/, "");
				}

				let F = Z.join("/"), H = LJ($, F);

				if (W === "url" || W === "path") {
					let X = H;

					if (Y.args[0]) {
						if (Y.args[0].param) X = D1(H, Y.args[0].param);
						if (Y.args[0].query) X = X + "?" + q(Y.args[0].query).toString();
					}

					if ((X = l5(X), W === "url")) return new URL(X);

					return X.slice($.replace(/\/+$/, "").length).replace(/^\/?/, "/");
				}

				if (W === "ws") {
					let X = CJ(Y.args[0] && Y.args[0].param ? D1(H, Y.args[0].param) : H, "ws"),
						V = new URL(X),
						L = Y.args[0]?.query;

					if (L) Object.entries(L).forEach(([A, g]) => {
						if (Array.isArray(g)) g.forEach((O) => V.searchParams.append(A, O)); else V.searchParams.set(A, g);
					});

					return ((...A) => {
						if (Q?.webSocket !== void 0 && typeof Q.webSocket === "function") return Q.webSocket(...A);

						return new WebSocket(...A);
					})(V.toString());
				}

				let j = new sG(H, W, { buildSearchParams: q });

				if (W) {
					Q ??= {};

					let X = u5(Q, { ...Y.args[1] });

					return j.fetch(Y.args[0], X);
				}

				return j;
			},
			[]
		);

	var X6 = { "Content-Type": "application/json" },
		N = d5(W0.url.api, { init: { credentials: "same-origin", headers: X6 } }),
		m$ = () => localStorage.getItem("auth-token");

	function TJ($, Q = 25, J = 0) {
		return N.mod.users.$get({ query: { q: $, limit: String(Q), offset: String(J) } });
	}

	function EJ($) {
		return N.mod.users[":id"].$get({ param: { id: String($) } });
	}

	function IJ($) {
		return N.mod.users[":id"].sessions.$get({ param: { id: String($) } });
	}

	function wJ($, Q, J) {
		return N.mod.users[":id"].ban.$post({
			param: { id: String($) },
			json: {
				...Q ? { reason: Q } : {},
				...J ? { duration_seconds: J } : {}
			}
		});
	}

	function o5($) {
		return N.mod.users[":id"].unban.$post({ param: { id: String($) } });
	}

	function hJ($, Q, J) {
		return N.mod.users[":id"].mute.$post({
			param: { id: String($) },
			json: {
				...Q ? { reason: Q } : {},
				...J ? { duration_seconds: J } : {}
			}
		});
	}

	function n5($) {
		return N.mod.users[":id"].unmute.$post({ param: { id: String($) } });
	}

	function t5($, Q) {
		return N.mod.users[":id"]["leaderboard-exclusion"].$post({ param: { id: String($) }, json: { excluded: Q } });
	}

	function mJ($) {
		return N.mod.users[":id"]["delete-strokes"].$post({ param: { id: String($) } });
	}

	function NJ($, Q = 0) {
		return N.mod.users[":id"]["owned-pixels"].$get({ param: { id: String($) }, query: { offset: String(Q) } });
	}

	function BJ($, Q) {
		return N.mod.users[":id"]["delete-selected-strokes"].$post({ param: { id: String($) }, json: { positions: Q } });
	}

	function OJ($, Q) {
		return N.mod.users[":id"]["give-paint"].$post({ param: { id: String($) }, json: { amount: Q } });
	}

	function SJ($, Q) {
		return N.mod.users[":id"]["reset-balance"].$post({ param: { id: String($) }, query: { type: Q } });
	}

	function _J($, Q) {
		return N.mod.users[":id"]["give-cursor"].$post({ param: { id: String($) }, json: { cursorId: Q } });
	}

	function yJ($, Q, J) {
		return N.mod.users[":id"].message.$post({
			param: { id: String($) },
			json: { body: Q, ...J ? { title: J } : {} }
		});
	}

	function gJ($, Q, J = !0) {
		return N.mod.broadcast.$post({ json: { body: $, ...Q ? { title: Q } : {}, createRow: J } });
	}

	function a5($, Q) {
		return N.mod.users[":id"].role.$post({ param: { id: String($) }, json: { role: Q } });
	}

	function vJ($ = {}) {
		return N.mod["review-queue"].$get({
			query: {
				...$.status ? { status: $.status } : {},
				...$.kind ? { kind: $.kind } : {},
				...$.cursor ? { cursor: $.cursor } : {},
				...$.limit ? { limit: String($.limit) } : {}
			}
		});
	}

	function xJ($, Q, J) {
		return N.mod["review-queue"][":id"].resolve.$post({
			param: { id: String($) },
			json: { action: Q, ...J ? { notes: J } : {} }
		});
	}

	function pJ($, Q) {
		return N.mod.feedback.$get({ query: { kind: $, offset: Q.toString() } });
	}

	function cJ($, Q, J) {
		return N.mod.feedback.resolve.$post({ json: { id: $, action: Q, reply: J } });
	}

	function bJ() {
		return N.mod.feedback.counts.$get();
	}

	function fJ($) {
		return N.mod.referrals.$get({ query: { offset: $.toString() } });
	}

	function lJ($) {
		return N.mod.referredBy[":uid"].$get({ param: { uid: $.toString() } });
	}

	function s5($, Q) {
		return N.mod.referrals[":code"].$post({ param: { code: $ }, query: { action: Q } });
	}

	function uJ($) {
		return N.mod.clans[":id"].members.$get({ param: { id: $.toString() } });
	}

	function dJ($) {
		return N.mod["wipe-canvas"].$post({ json: $ });
	}

	function C1($) {
		return N.mod["restore-pixels"].$post({ json: { token: $ } });
	}

	function oJ($) {
		return N.mod.tile[":pos"].$get({ param: { pos: String($) } });
	}

	function nJ($, Q, J, Y) {
		return N.mod.region.$get({
			query: { x: String($), y: String(Q), w: String(J), h: String(Y) }
		});
	}

	function tJ($) {
		return N.mod.owners.$post({ json: { positions: $ } });
	}

	function aJ($, Q = {}) {
		return N.mod.users[":id"]["paint-history"].$get({
			param: { id: String($) },
			query: {
				...Q.before ? { before: Q.before } : {},
				...Q.limit ? { limit: String(Q.limit) } : {}
			}
		});
	}

	function sJ($, Q) {
		return N.mod.users[":id"]["paint-history"][":entryId"].$get({ param: { id: String($), entryId: String(Q) } });
	}

	function rJ($, Q = {}) {
		return N.mod.users[":id"]["chat-history"].$get({
			param: { id: String($) },
			query: {
				...Q.before ? { before: Q.before } : {},
				...Q.limit ? { limit: String(Q.limit) } : {}
			}
		});
	}

	function iJ($ = {}) {
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

	function eJ() {
		return N.mod["bot-sensitivity"].$get();
	}

	function $7($) {
		return N.mod["bot-sensitivity"].$post({ json: { sensitivity: $ } });
	}

	function Q7() {
		return N.mod["chat-cooldown"].$get();
	}

	function J7($) {
		return N.mod["chat-cooldown"].$post({ query: { cooldown: $.toString() } });
	}

	function Y7($) {
		return N.mod["bot-samples"][":userId"].$get({ param: { userId: String($) } });
	}

	var w8 = null;

	function rG() {
		if (w8 && w8.isConnected) return w8;

		return (w8 = G("div.toast-container"), document.body.append(w8), w8);
	}

	function N$($, Q = 3200) {
		let J = rG(), Y = G("div.toast", G("span", $));

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

	function G7($) {
		if ($ === null || $ === void 0) return null;

		let Q = $ instanceof Date ? $ : new Date($);

		return Number.isNaN(Q.getTime()) ? null : Q;
	}

	function p0($) {
		let Q = G7($);

		if (!Q) return $ === null || $ === void 0 ? "-" : String($);

		return Q.toLocaleString();
	}

	var A1 = null;

	function q7() {
		(A1?.remove(), A1 = null);
	}

	document.addEventListener("click", q7);

	function E0($, Q) {
		let J = G7($);

		if (!J) return G("span", Q ?? p0($));

		let Y = J.toLocaleString(),
			q = J.toUTCString(),
			Z = G("time.ts-local.tooltip", {
				textContent: Q ?? Y,
				datetime: J.toISOString(),
				dataset: { tooltip: `UTC: ${q}` },
				onclick(K) {
					if ((K.stopPropagation(), A1)) {
						q7();

						return;
					}

					let W = G("div.ts-utc-pop", G("div.ts-utc-row", G("span.ts-utc-k", "Local"), Y), G("div.ts-utc-row", G("span.ts-utc-k", "UTC"), q));

					document.body.append(W);

					let F = Z.getBoundingClientRect(),
						H = W.getBoundingClientRect(),
						j = Math.min(F.left, window.innerWidth - H.width - 8),
						X = F.bottom + 4 + H.height > window.innerHeight ? F.top - H.height - 4 : F.bottom + 4;

					(
						W.style.left = `${Math.max(8, j)}px`,
						W.style.top = `${Math.max(8, X)}px`,
						A1 = W
					);
				}
			});

		return Z;
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

	function H6($) {
		return G("span.mod-role", { dataset: { role: $ } }, $);
	}

	function T1($, Q = 240) {
		let J;

		try {
			J = JSON.stringify($);
		} catch {
			J = String($);
		}

		if (!J) return "{}";

		return J.length > Q ? J.slice(0, Q) + "..." : J;
	}

	function q0($) {
		return G("p.error.noicon", $);
	}

	async function d($) {
		try {
			return await $.text() || `HTTP ${$.status} ${$.statusText}`;
		} catch {
			return `HTTP ${$.status} ${$.statusText}`;
		}
	}

	function E1($) {
		let Q = G("button.btn.mod-undo", "Undo", {
			async onclick() {
				Q.disabled = !0;

				let J = await C1($);

				if (!J.ok) {
					(
						Q.disabled = !1,
						N$(J.status === 410 ? "The undo window has passed." : "Undo failed.")
					);

					return;
				}

				let Y = 0;

				try {
					Y = (await J.json()).restored ?? 0;
				} catch {}

				(N$(`Restored ${Y} pixel${Y === 1 ? "" : "s"}.`), p());
			}
		});

		return Q;
	}

	var i5 = 0,
		I1 = 1,
		w1 = 2,
		iG = "#ff3b3b",
		eG = "rgba(8,8,12,0.75)",
		Z$ = null;

	function $q() {
		if (Z$) return Z$;

		return (
			Z$ = G("canvas.ghost-layer", { width: v, height: Z0 }),
			P6.append(Z$),
			Z$
		);
	}

	function Z7($, Q) {
		let J = $q(), Y = J.getContext("2d");

		(
			Y.clearRect(0, 0, J.width, J.height),
			Y.fillStyle = eG,
			Y.fillRect(0, 0, J.width, J.height)
		);

		for (let q = 0; q < $.length; q++) {
			let { pos: Z, color: K } = $[q],
				W = Z % v,
				F = Z / v | 0;

			if (W < 0 || W >= v || F < 0 || F >= Z0) continue;

			Y.clearRect(W, F, 1, 1);

			let H = Q[q];

			if (H === w1) (Y.globalAlpha = 0.55, Y.fillStyle = iG); else (
				Y.globalAlpha = H === I1 ? 0.28 : 1,
				Y.fillStyle = G0[K]?.hex ?? "#ff00ff"
			);

			Y.fillRect(W, F, 1, 1);
		}

		(Y.globalAlpha = 1, J.style.display = "block");
	}

	function e5() {
		if (!Z$) return;

		(
			Z$.getContext("2d").clearRect(0, 0, Z$.width, Z$.height),
			Z$.style.display = "none"
		);
	}

	function V6($) {
		if (!$.length) return null;

		let Q = 1 / 0, J = 1 / 0, Y = -1 / 0, q = -1 / 0;

		for (let { pos: Z } of $) {
			let K = Z % v, W = Z / v | 0;

			if (K < Q) Q = K;
			if (W < J) J = W;
			if (K > Y) Y = K;
			if (W > q) q = W;
		}

		return { x: Q, y: J, width: Y - Q + 1, height: q - J + 1 };
	}

	var K7 = 5;

	function h1($) {
		let Q = new DataView($.buffer, $.byteOffset, $.byteLength),
			J = $.byteLength / K7 | 0,
			Y = new Array(J);

		for (let q = 0; q < J; q++) {
			let Z = q * K7;

			Y[q] = { pos: Q.getUint32(Z, !0), color: $[Z + 4] };
		}

		return Y;
	}

	var Qq = 48;

	function h8($, Q = Qq) {
		let J = G("canvas.mod-ph-thumb", { width: Q, height: Q }),
			Y = J.getContext("2d"),
			q = V6($);

		if (!q) return J;

		let Z = Math.max(1, Math.floor(Math.min(Q / q.width, Q / q.height))),
			K = Math.floor((Q - q.width * Z) / 2),
			W = Math.floor((Q - q.height * Z) / 2);

		for (let { pos: F, color: H } of $) {
			let j = F % v, X = F / v | 0;

			(
				Y.fillStyle = G0[H]?.hex ?? "#ff00ff",
				Y.fillRect(K + (j - q.x) * Z, W + (X - q.y) * Z, Z, Z)
			);
		}

		return J;
	}

	var Jq = 360;

	function F7($, Q = 0) {
		if (!$.length) return;

		let J = Math.max(0, Math.min(Q, $.length - 1)),
			Y = G("span"),
			q = G("div.mod-carousel-stage"),
			Z = G("div.mod-carousel-caption"),
			K = () => {
				let V = $[J];

				(
					Y.replaceChildren(`Flagged draws (${J + 1} / ${$.length})`),
					q.replaceChildren(h8(V.pixels, Jq)),
					Z.replaceChildren(V.label)
				);
			},
			W = (V) => {
				(J = (J + V + $.length) % $.length, K());
			},
			F = () => {
				(document.removeEventListener("keydown", H, !0), X.remove());
			},
			H = (V) => {
				if (V.key === "Escape") (V.stopPropagation(), F()); else if (V.key === "ArrowLeft") (V.stopPropagation(), W(-1)); else if (V.key === "ArrowRight") (V.stopPropagation(), W(1));
			},
			j = $.length > 1,
			X = G("div.modal-bg.confirm-bg.mod-carousel-bg", G("div.modal-container", G("div.modal-title", Y, q$("close", { ariaLabel: "Close", onclick: F })), G(
				"div.modal-content",
				G(
					"div.mod-carousel",
					j
						? G("button.btn.mod-carousel-nav", "Prev", { onclick: () => W(-1) })
						: "",
					q,
					j
						? G("button.btn.mod-carousel-nav", "Next", { onclick: () => W(1) })
						: ""
				),
				Z
			)));

		(
			X.addEventListener("click", (V) => {
				if (V.target === X) F();
			}),
			document.addEventListener("keydown", H, !0),
			document.body.append(X),
			K()
		);
	}

	var W7 = !1;

	function j7() {
		if (W7) return;

		W7 = !0;

		let $ = new _("Update required", G("div.version-mismatch", G("p", "The Wall was just updated and this tab is running an older version. Reload to keep going."), G("p.subtle", "Heads up: anything you've drawn but not submitted will be lost. If a reload doesn't fix it, clear your cache and reload again."), G("div.btn-container", G("button.btn", "Reload now", { onclick: () => location.reload() }))));

		$.lockLevel = 1;
	}

	function Y0() {
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

	function $8() {
		if (!F0?.lockLevel) return;
		if ((F0.lockLevel--, !F0.lockLevel)) (F0.container.inert = !1, F0.content.style.opacity = "");
	}

	var $Q = /^[a-z0-9_.-]{3,16}$/, Yq = /^[_.-]+$/;

	function R6($) {
		if (!$) return "Missing username";
		if ($.length < 3) return "Must be at least 3 letters long";
		if ($.length > 16) return "Must not be longer than 16 letters";
		if (!$Q.test($)) return "Can only contain lowercase letters, digits, underscores, dashes and dots.";
		if (Yq.test($)) return "This username is blacklisted.";
	}

	async function X7($, Q) {
		let J = R6($);

		if (J) throw new Error(J);

		let Y = await N.user.setup.$post({ json: { username: $, marketing: Q } });

		if (Y.status != 200) {
			let q = await Y.text();

			throw new Error(q);
		}

		(
			localStorage.setItem("auth-token", b0.token),
			location.reload()
		);
	}

	function m1() {
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
					let q = Y.target,
						Z = q.value.replace(/[^a-z0-9_.-]/g, "");

					if (q.value != Z) q.value = Z;

					Q = Z;
				}
			}),
			G("div.checkbox", G("input#tos_checkbox", { type: "checkbox" }), G("label", { htmlFor: "tos_checkbox" }, G("span", "I've read and agree to the "), G("a.link", "Privacy Policy & ToS", { target: "_blank", href: "/privacy.html" }))),
			G("div.checkbox", G("input#marketing_checkbox", { type: "checkbox" }), G("label", { htmlFor: "marketing_checkbox" }, G("span", "Notify me about The Wall updates and what's next for Filian Is Lost"))),
			$,
			G("div.btn-container", G("button.btn", "Confirm", {
				async onclick() {
					if (J) return;

					if (!u("input#tos_checkbox")?.checked) {
						$.textContent = "You need to agree with our Privacy Policy/ToS!";

						return;
					}

					let Y = !!u("input#marketing_checkbox").checked;

					(Y0(), $.textContent = "", J = !0);

					try {
						await X7(Q, Y);
					} catch(q) {
						($.textContent = q.message || "Something went wrong", J = !1);
					}

					$8();
				}
			}))
		)).onClose(() => {
			return !1;
		});
	}

	function a0($, ...Q) {
		return $.replace(/{(\d)+}/g, (J, Y) => Q[parseInt(Y)] || "[?]");
	}

	function H0($) {
		return new Intl.NumberFormat().format($);
	}

	function N1($) {
		let Q = ($ / i$ * 100).toFixed(2);

		return `${H0($)} (${Q}%)`;
	}

	function QQ($) {
		return new Intl.DateTimeFormat(["en"], { timeZone: "UTC", minute: "numeric", second: "2-digit" }).format($);
	}

	function Gq($) {
		return String.fromCodePoint(...$.toUpperCase().split("").map((Q) => 127397 + Q.charCodeAt(0)));
	}

	function B1($) {
		if ($.length != 2) return "-";

		try {
			let Q = new Intl.DisplayNames(["en"], { type: "region" }).of($);

			return `${Gq($)} ${Q || $}`;
		} catch {
			return "Unknown";
		}
	}

	function H7($) {
		if (Date.now() - $ < 86400000) return new Date($).toLocaleTimeString(); else return new Date($).toLocaleDateString();
	}

	function m8($) {
		let Q = Math.floor($ / K0);

		return `${Q} spray can${C0(Q)}`;
	}

	function C0($, Q) {
		let J = $ == 1 ? "" : "s";

		return Q ? `${H0($)} ${Q}${J}` : J;
	}

	var qq = /\s|\/|[A-Z].*[A-Z]/,
		Zq = /[A-Z]{2,}(?=[A-Z][a-z]|$)|[A-Z]?[a-z]+|[A-Z]+|\d+/g;

	function Kq($) {
		let Q = $.trim();

		if (Q.length <= 8 && !qq.test(Q)) return Q;

		let J = Q.replace(/'s\b/gi, "").match(Zq) || [];

		if (J.length === 1) {
			let Y = J[0], q = (/^[A-Z]+$/).test(Y) ? 6 : 8;

			return Y.length <= q ? Y : Y[0];
		}

		return J.map((Y) => (/^\d+$/).test(Y) ? Y : Y[0]).join("");
	}

	function B$($) {
		return `[${Kq($).slice(0, 6)}]`;
	}

	var M6 = ($) => Math.floor($ * 10) / 10;

	function O1($) {
		if ($ == null) return "never";

		let Q = $ - Date.now(),
			J = new Intl.RelativeTimeFormat(["en"], { numeric: "auto" }),
			Y = 60000,
			q = 60 * Y,
			Z = 24 * q;

		if (Q < q) return J.format(M6(Q / Y), "minute"); else if (Q < Z) return J.format(M6(Q / q), "hour");

		return J.format(M6(Q / Z), "day");
	}

	function e($, Q) {
		new _("Error", G("div.modal.error-modal", G("p.error", $), Q && G("div.details", Q), R$));
	}

	async function A0($, Q) {
		if ($.status == 429) {
			let J = $.headers.get("retry-after");

			e(
				`Not so fast! Please try again ${J
					? `in ${C0(Math.round(parseInt(J) / 60), "minute")}`
					: "a bit later"}`,
				Q
			);
		} else if ($.status == 500) e("Something went wrong on our side, sorry!!!", Q); else {
			let J = $.headers.get("content-type");

			if (J && J.includes("text/plain")) e(await $.text(), Q); else e(`Something went wrong... (${$.status} ${$.statusText})`, Q);
		}
	}

	var V7 = 3.141592653589793,
		z6 = Number.isSafeInteger,
		JQ = !1;

	function Fq($, Q, J, Y) {
		return () => {
			($ |= 0, Q |= 0, J |= 0, Y |= 0);

			let q = ($ + Q | 0) + Y | 0;

			return (
				Y = Y + 1 | 0,
				$ = Q ^ Q >>> 9,
				Q = J + (J << 3) | 0,
				J = J << 21 | J >>> 11,
				J = J + q | 0,
				(q >>> 0) / 4294967296
			);
		};
	}

	var S1 = () => Math.random() * 4294967296 >>> 0,
		O$ = Fq(S1(), S1(), S1(), S1());

	function P7($) {
		let Q;

		if ($ < -3.141592653589793) $ += 6.28318531; else if ($ > 3.141592653589793) $ -= 6.28318531;
		if ($ < 0) if ((Q = 1.27323954 * $ + 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q; else if ((Q = 1.27323954 * $ - 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q;

		return Q;
	}

	function R7($) {
		let Q;

		if (($ += 1.57079632, $ > 3.141592653589793)) $ -= 6.28318531;
		if ($ < 0) if ((Q = 1.27323954 * $ + 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q; else if ((Q = 1.27323954 * $ - 0.405284735 * $ * $, Q < 0)) Q = 0.225 * (Q * -Q - Q) + Q; else Q = 0.225 * (Q * Q - Q) + Q;

		return Q;
	}

	function U6($) {
		let Q = $ | 0;

		return (JQ = !0, $ < 0 && $ != Q ? Q - 1 : Q);
	}

	function YQ($, Q, J) {
		return Math.min(Math.max($, Q), J);
	}

	var M7 = "__wd_site";

	Object.freeze(Math);

	var k6 = (navigator.userAgentData?.platform ?? navigator.platform).toLowerCase().includes("mac"),
		GQ = k6 ? "⌘" : "Ctrl",
		f0 = window.matchMedia("(pointer: coarse)").matches;

	function M$() {
		if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
	}

	function Wq($, Q, J) {
		let Y = O$() * V7 * 2,
			q = J * O$() ** 0.5,
			Z = J < 5 ? 1 : 1,
			K = (O$() - 0.5) * Z,
			W = (O$() - 0.5) * Z;

		return [U6($ + q * R7(Y) + K), U6(Q + q * P7(Y) + W)];
	}

	function* z7($, Q, J, Y) {
		let q = new Set();

		if (J < 2) J = 2;

		for (let Z = 0; Z < Y; Z++) {
			let K = Wq($, Q, J), W = K[1] * v + K[0];

			if (q.has(W)) {
				Z--;

				continue;
			}

			(q.add(W), yield K);
		}
	}

	function U7($, Q, J, Y) {
		if ($ == -1) return { steps: 0, points: [] };

		let q = J - $,
			Z = Y - Q,
			K = Math.max(Math.abs(q), Math.abs(Z)),
			W = [];

		for (let F = 0; F < K; F++) W.push([U6($ + q / K * F), U6(Q + Z / K * F)]);

		return { steps: K, points: W };
	}

	var Q8 = G("div.box.paint-bar.tooltip"),
		k7 = G("span.spray-can-count", "+0"),
		L7 = G("span.spray-can-extra", "cans"),
		D7 = G("button.btn.swatch.tooltip.paint-extra-count", k7, L7, {
			tabIndex: -1,
			onclick: M$,
			dataset: { tooltip: "Additional Spray Cans" }
		});

	function C7($) {
		let Q = Math.floor($ / K0),
			J = $ % K0,
			Y = J / K0 * 100;

		(
			Q8.style.setProperty("--paint-remaining", `${Y}%`),
			Q8.dataset.tooltip = `Paint Remaining: ${Math.round(Y)}% (${H0(J)}px)`,
			jq(Q)
		);
	}

	function A7($, Q = !1) {
		(
			Q8.style.setProperty("--color", $),
			Q8.style.setProperty("--color-2", `${$}7F`),
			Q8.classList.toggle("dark", Q)
		);
	}

	function jq($) {
		(k7.textContent = `+${$}`, L7.textContent = `can${C0($)}`);
	}

	var c = {
		version: 1,
		lastUsedColors: [],
		lastBrushSize: 10,
		seenGuidebook: !1,
		camera: { x: 0, y: 0, zoom: 0 },
		a11y: {},
		flags: {}
	};

	function Xq($) {
		(
			console.warn(`Outdated settings (current: ${$.version}, latest: ${c.version}), updating`),
			$.version = c.version
		);
	}

	function Hq() {
		try {
			let $ = localStorage.getItem("wall:settings");

			if ($) return JSON.parse($);
		} catch($) {
			localStorage.removeItem("wall:settings");
		}
	}

	function Vq() {
		let $ = Hq();

		if (!$) {
			L6();

			return;
		}

		if (c.version != $.version) Xq($);

		for (let Q in $) c[Q] = $[Q];

		L6();
	}

	function L6() {
		(
			localStorage.setItem("wall:settings", JSON.stringify(c)),
			qQ = !1
		);
	}

	var qQ = !1;

	function N0() {
		qQ = !0;
	}

	setInterval(
		() => {
			if (qQ) L6();
		},
		1000
	);

	document.addEventListener("blur", L6);
	window.addEventListener("beforeunload", L6);
	Vq();

	var T7 = G("img", {
			src: l0(0),
			alt: "⬉",
			onerror($) {
				(console.error("Error loading custom cursor", $), D6());
			}
		}),
		ZQ = G("div.chat-bubble", G("span", "You")),
		S$ = G("div.cursor.own-cursor", T7, { style: { opacity: "0" } });

	function l0($) {
		return `/static/cursors/generated/${$ || 0}.png`;
	}

	var y1 = !1, g1 = !1;

	function E7() {
		if (y1) return;

		(S$.style.opacity = "1", y1 = !0);
	}

	function Pq() {
		if (!y1) return;

		(S$.style.opacity = "0", y1 = !1);
	}

	function D6() {
		if (g1) return;

		(
			S$.remove(),
			document.head.append(G("style.system-cursor", "* { cursor: unset !important }")),
			g1 = !0
		);
	}

	function v1() {
		if (!g1) return;
		if (c.a11y.systemCursor) return;

		document.body.prepend(S$);

		let $ = u("style.system-cursor");

		if ($) $.remove();

		g1 = !1;
	}

	function x1($, Q) {
		(S$.style.transform = `translate3d(${$}px, ${Q}px, 0)`, E7());
	}

	document.addEventListener("pointermove", ($) => x1($.x, $.y));

	function I7($) {
		let Q = $.touches[0];

		if (!Q) return;

		x1(Q.clientX + 16, Q.clientY + 16);
	}

	document.addEventListener("touchstart", I7);
	document.addEventListener("touchmove", I7);
	document.addEventListener("mouseout", ($) => $.relatedTarget || Pq());
	document.addEventListener("mouseover", E7);

	function N8($) {
		T7.src = l0($);
	}

	var _1 = 0;

	function w7($) {
		if (c.a11y.hideChatBubbles) return;

		let Q = G("p", $);

		if ((
			_1++,
			ZQ.append(Q),
			setTimeout(
				() => {
					if ((Q.remove(), _1--, _1 == 0)) ZQ.remove();
				},
				2000
			),
			_1 == 1
		)) S$.append(ZQ);
	}

	var K$;

	((Z) => {
		Z[Z.None = 0] = "None";
		Z[Z.Spray = 1] = "Spray";
		Z[Z.Chat = 2] = "Chat";
		Z[Z.Login = 3] = "Login";
		Z[Z.Share = 4] = "Share";
	})(K$ ||= {});

	var R = {
		connectionId: -1,
		user: null,
		token: m$(),
		selectedColor: G0[0],
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
			(this.user = $, N8($.cursor_id || 0));
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

			if ((C7(Q), Q && k1 == "Out of paint?")) p();
		},

		sprayCanCount() {
			return Math.ceil(this.paintRemaining / K0);
		},

		currentSprayCanSize() {
			let $ = this.paintRemaining % K0;

			return $ == 0 && this.paintRemaining >= K0 ? K0 : $;
		}
	};

	if (P$) window.player = R;

	var b1 = G("p.warning"), B8 = "", f1 = !0, p1 = "";

	function m7() {
		B8 = "";
	}

	async function N7() {
		if (!p1) {
			let J = await (await N.auth.turnstile.$get()).json();

			if ((p1 = J.sitekey || "none", !J.required || !J.sitekey)) f1 = !1;
		}

		if (!f1) return;

		let $ = window.turnstile;

		if (!$) return alert("error: Turnstile API didn't load, can't show captcha");

		$.render("#captcha-container", {
			sitekey: p1,
			theme: c.a11y.darkTheme ? "dark" : "light",
			size: "flexible",
			callback(Q) {
				(b1.textContent = "", B8 = Q);
			}
		});
	}

	function h7() {
		if ((b1.textContent = "", f1 && !B8)) return (
			p1 = "",
			f1 = !0,
			N7(),
			b1.textContent = "You need to complete the captcha!",
			!0
		);
	}

	function J8($) {
		(
			new _("Log In", G(
				"div.login-modal",
				$,
				G("p", "Choose your login method"),
				G("div#captcha-container", { onmouseenter: D6, onmouseleave: v1 }),
				f5("discord", "Discord", "#5865F2", "#fff", {
					ariaLabel: "Authenticate with Discord",
					onclick() {
						if (h7()) return;

						c1("discord", "Discord");
					}
				}),
				f5("google", "Google", "#F1F3F4", "#000", {
					ariaLabel: "Authenticate with Google",
					onclick() {
						if (h7()) return;

						c1("google", "Google");
					}
				}),
				b1,
				W0.devLogin === !0 && G("button.btn.dev-login", "Dev login (staff)", {
					ariaLabel: "Dev login",
					onclick() {
						c1("dev", "Dev");
					}
				}),
				G("div.btn-container", G("button.btn", "Cancel", { onclick: p }))
			)),
			setTimeout(N7, 100)
		);
	}

	function B7($) {
		if (!$Q.test($)) return;

		J8(G("div.success", G("b", $), " has invited you to The Wall!"));
	}

	function O7($) {
		if (!$.is_banned) return;

		(
			S7(),
			new _("Oops!", G("div.modal.error-modal", G("p", "You have been banned!"), G("p.error", $.is_banned.reason || "<Reason not specified>"), G("p", "Expires: ", G("b", O1($.is_banned.until))))).onClose(() => !1)
		);
	}

	async function KQ() {
		let $ = m$();

		if (!$) return null;

		X6.Authorization = $;

		let Q = await N.user.me.$get();

		if (Q.status != 200) return !1;

		let J = await Q.json();

		if (!J) return !1;

		return J;
	}

	async function _7() {
		let $ = await KQ();

		if ($) {
			if ((R.token = m$(), R.setUser($), $.is_banned)) return O7($);
			if ($.is_new) return m1();

			O8();

			return;
		}

		if ((_$(), $ == !1)) J8(G("p.warning", "Session expired, please log in again!"));
	}

	var b0 = { started: !1, status: "", token: "" };

	window.addEventListener("message", ($) => {
		if (!b0.started) return;
		if ($.origin != W0.url.web) return;
		if ($.data.type == "auth_modal_state") (b0.status = $.data.status, b0.token = $.data.token);
	});

	function _$() {
		(
			X6.Authorization = "",
			localStorage.removeItem("auth-token"),
			b0.token = "",
			R.token = null,
			R.user = null
		);
	}

	function y7() {
		(_$(), location.reload());
	}

	async function c1($, Q) {
		if (!B8) return alert("Missing turnstile token");

		Y0();

		let J = await N.auth.login[":provider"].$post({ param: { provider: $ }, json: { turnstileToken: B8 } });

		if ((m7(), !J.ok)) return e("Captcha failed!", await J.text());

		let Y = await J.json(),
			q = 485,
			Z = 645,
			K = window.open(Y.redirectURL, void 0, `popup,width=${q},height=${Z},left=${Math.floor(screen.width / 2 - q / 2)},top=${Math.floor(screen.height / 2 - Z / 2)}`);

		if (!K) {
			e("Failed to open a pop-up window...", "Make sure you allowed us to open pop-up windows!");

			return;
		}

		(
			new _("Auth", G("div", "Authenticating...", G("p.notice.noicon", `A pop-up window should have been opened for you to complete authentication using ${Q}.`, { style: { maxWidth: "600px" } }))).onClose(() => !1),
			b0.started = !0,
			Rq(K)
		);
	}

	function Rq($) {
		let Q = setInterval(
			() => {
				if ($.closed) (clearInterval(Q), Mq());
			},
			500
		);
	}

	async function Mq() {
		if (!b0.status) {
			e("Authentication aborted");

			return;
		}

		if (b0.status != "200") return e("Authentication failed!", `Server responded with error code ${b0.status}`);

		localStorage.setItem("auth-token", b0.token);

		let $ = await KQ();

		if (!$) return (
			_$(),
			e("Authentication failed!", "Could not fetch the user after authenticating")
		);

		if ($.is_new) m1(); else (b0.started = !1, location.reload());
	}

	async function FQ($) {
		let Q = await N.user.settings.$post({ json: $ });

		if (Q.status != 200) return await Q.text();

		R.setUser(await Q.json());
	}

	async function Y8($) {
		let Q = await FQ($);

		if (typeof Q == "string") alert(`Could not update user settings: ${Q}`);
	}

	function g7($, Q, J, Y, q = !1) {
		return G(
			"div.clan-server.box",
			G("img", {
				src: `https://cdn.discordapp.com/icons/${$}/${Q}.webp?size=128&quality=lossless`,
				draggable: !1
			}),
			G("div.info", G("b", J), G("p", G("span", H0(Y)), " members")),
			q && G("div.btns", G("button.btn.primary", "Select", {
				async onclick() {
					(Y0(), await Y8({ clanDiscordId: $ }), A6());
				}
			}))
		);
	}

	function C6($, Q = !1) {
		return G("div.clan-with-stats", g7($.discord_id, $.icon, $.name, $.stat_member_count, !1), G("div.stats", G("p", G("b", N1($.stat_paint_visible)), " paint visible"), G("p", G("b", H0($.stat_pixels_changed)), " pixels changed"), G("p", G("b", H0($.approx_discord_members || 0)), " discord members"), Q && G("p", "Discord ID: ", G("b", $.discord_id))));
	}

	async function v7() {
		Y0();

		let $ = await N.user.discordGuilds.$get();

		if (!$.ok) return e("Error loading the Discord Server list", "Make sure you're authenticated via Discord, and allowed us to access your Discord server list!");

		let Q = await $.json();

		new _("Change Clan", G("div.clans-modal", G("p", G("a.link", "Go Back", { onclick: A6 }), { style: { marginBottom: "8px" } }), G("div.list", Q.sort((J, Y) => Y.approximate_member_count - J.approximate_member_count).map((J) => g7(J.id, J.icon, J.name, J.approximate_member_count, !0)), G("button.btn", "Refresh List"))));
	}

	function zq() {
		new _("User > Clan", G("div.clans-modal.no-clan", G("p", "You do not have a clan."), G("p.notice.noicon", "Clans appear next to your name at all times! ", "They're a fun way to represent your favorite streamer, content creator, friend group or any other community!"), "Join a clan to show where you belong, meet other members, climb the leaderboard together, and stand out across the platform.", G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Select Clan", { onclick: v7 }))));
	}

	async function A6() {
		if (!R.user?.discord_id) return e("Sorry, clans are for Discord users only!", `Clans work using Discord servers, so you cannot join any clans if you don't have a Discord account connected.

You can authenticate into your current account if your Discord account has the same E-Mail as your Google account.`);

		if (!R.user.clan) return zq();

		new _("User > Clan", G("div.clans-modal.current", G("p", "Current Clan"), C6(R.user.clan), G("div.btns", G("button.btn", "Cancel", { onclick: p }), G("button.btn", "Change Clan", { onclick: v7 }), G("button.btn", "Leave Clan", {
			async onclick() {
				if (!await i("Are you sure you want to leave your current clan?")) return;

				(Y0(), await Y8({ clanDiscordId: "0" }), A6());
			}
		}))));
	}

	var WQ = 0;

	function x7($ = "Message") {
		let J = G("span", "0/512", { style: { color: "#aaa" } });

		return [
			G("label", { htmlFor: "f_content" }, $, " (", J, ")"),
			G("textarea#f_content.input.box", {
				maxLength: 512,
				style: { height: "200px" },
				oninput(Y) {
					let q = Y.target.value;

					J.textContent = `${q.length}/512`;
				}
			})
		];
	}

	var l1 = ($) => {
		let Q = document.getElementById($);

		if (!Q) return "";

		return Q.value.trim();
	};

	async function p7($, Q, J) {
		if (!$ || !Q) return;

		Y0();

		let Y = await N.user.feedback.$post({ json: { kind: $, content: Q, target: J } });

		if (!Y.ok) return A0(Y, `Could not submit ${$}`);

		(
			WQ = Date.now() + 30000,
			new _($ == "report" ? "Report" : "Feedback", G("div.feedback", G("div.success", `Thank you for your ${$ == "report" ? "report" : "feedback"}!`)))
		);
	}

	function c7($) {
		return G("select#f_type.box.outset.input", { style: { width: "100%" } }, $.map(([Q, J]) => G("option", { value: Q }, J || Q)));
	}

	function b7($) {
		if (!R.user) return;
		if (WQ > Date.now()) return e("Please wait 30 seconds before reporting someone again.");

		new _("Report User", G(
			"div.feedback",
			G("p", "Report ", G("b", $)),
			G("label", { htmlFor: "f_type" }, "Reason"),
			c7([
				"- Please Specify -",
				"Griefing",
				"Cheating",
				"Multiaccounting",
				"Bad Behaviour",
				"Botting",
				"Other"
			].map((Q) => [Q])),
			x7("Optional Message"),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Report", {
				onclick: () => {
					let Q = l1("f_type"),
						J = l1("f_content"),
						Y = `${Q}|${J}`;

					if (Q[0] == "-") return;

					p7("report", Y, $);
				}
			}))
		));
	}

	function f7() {
		if (!R.user) {
			e("You need to be signed in to send feedback!");

			return;
		}

		if (WQ > Date.now()) return e("Please wait 30 seconds before submitting feedback again.");

		new _("Feedback", G(
			"div.feedback",
			G("label", { htmlFor: "f_type" }, "Type"),
			c7([
				["bug", "Bug Report"],
				["feedback", "Feedback"],
				["suggestion", "Feature Suggestion"]
			]),
			x7(),
			G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.btn", "Submit!", {
				onclick: () => {
					p7(l1("f_type"), l1("f_content"));
				}
			}))
		));
	}

	var u1 = null,
		l7 = [
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

	function u7($, Q) {
		let J = new URLSearchParams();

		if ($.name == "Reddit") (J.set("title", "#filianislost"), J.set("url", Q)); else J.set("text", `#filianislost ${Q}`);

		return `${$.url}?${J.toString()}`;
	}

	async function jQ() {
		if (u1) return u1;

		Y0();

		let $ = await N.user.shareLink.$post();

		if (!$.ok) {
			A0($, "Could not generate the referral link");

			return;
		}

		let Q = await $.json();

		return (
			u1 = Q,
			setTimeout(
				() => {
					u1 = null;
				},
				60000
			),
			Q
		);
	}

	function d7($) {
		if (!R.user) return "";

		let Q = new URLSearchParams();

		if ((Q.set("c", $.referral.code), $.imageCode)) Q.set("im", $.imageCode);
		if ($.x && $.y) Q.set("p", `${$.x},${$.y}`);

		return `${W0.url.share}/${R.user.username}?${Q.toString()}`;
	}

	function o7() {
		new _("Chat", G("div.chat-modal.nopad", T6, XQ(!0))).onClose(() => {
			u(".chat-log-wrapper").append(T6);
		});
	}

	var G8 = !1,
		n7 = 1,
		HQ = 10,
		t7 = ["tiny", "small", "medium", "large"],
		VQ = 2,
		PQ = ($, Q, J) => G(
			"button.btn.swatch.icon.tool.tooltip",
			{
				id: `tool-${Q}`,
				dataset: { tooltip: J },
				onclick: () => y$($)
			},
			G("img", { src: `/static/icon/tool/${Q}.png`, draggable: !1 })
		),
		S8 = 10,
		Uq = () => {
			let $ = G("img", { draggable: !1 }),
				Q = G("input.tooltip", {
					type: "range",
					min: n7,
					max: HQ,
					oninput(Y) {
						let q = Y.target, Z = parseInt(Q.value);

						(
							q.dataset.tooltip = `Brush Size: ${Z}`,
							c.lastBrushSize = Z + VQ,
							J(Z),
							N0()
						);
					}
				}),
				J = (Y) => {
					let q = t7[Math.floor(Y / (HQ + 1) * t7.length)];

					(
						$.src = `/static/icon/size/${q}.png`,
						S8 = Y + VQ,
						Q.value = Y.toString(),
						Q.dataset.tooltip = `Brush Size: ${Y}`
					);
				};

			return (
				J(Math.min(Math.max(c.lastBrushSize - VQ, n7), HQ)),
				G("div.container", G("div.popup.box.outset.size-control", G("div.input-container.tooltip", Q)), { onmouseout: () => M$() }, G("button#brush-size-btn.btn.swatch.icon.tooltip", $, { dataset: { tooltip: "Brush Size" } }))
			);
		},
		RQ = {
			0: PQ(0, "hand", "Hand Tool (H)"),
			1: PQ(1, "spray", "Draw Tool (B)"),
			2: PQ(2, "chat", "Open Chat")
		},
		a7 = G("div.tools", ...Object.values(RQ)),
		s7 = G("div.tools", Uq(), U1(
			z1("tool/preview", {
				id: "tool-preview",
				onclick($) {
					(
						G8 = !G8,
						$.target.classList.toggle("active", G8),
						r7(),
						M$()
					);
				}
			}),
			"Compare Mode (M)"
		));

	function y$($) {
		if ((M$(), $ == 2)) {
			o7();

			return;
		}

		(
			t0(".tool.active").forEach((J) => J.classList.remove("active")),
			(RQ[$] ?? RQ[0]).classList.add("active"),
			R.setTool($),
			s0()
		);
	}

	var d1 = null;

	function MQ($, Q = !1) {
		let J = d7($),
			Y = `Share Website > ${$.imageCode ? "Image" : "Link"}`;

		new _(Y, G(
			"div.share-modal.link",
			G("p", Q
				? "You have already generated an image in the past minute!"
				: "Here's your link!"),
			G("span.box.input.link.tooltip", J, {
				dataset: { tooltip: "Click to copy!" },
				onclick() {
					b5(J);
				}
			}),
			$.imageLink && G("img.preview", { src: $.imageLink }),
			G("p.desc", "Post it on..."),
			G("div.platforms", l7.map((q) => G(
				"a.platform.tooltip",
				{
					target: "_blank",
					href: u7(q, `${J}&utm_source=${q.id}`),
					dataset: { tooltip: q.name }
				},
				G("img", {
					src: `/static/icon/platform/${q.id}.png`,
					alt: q.name,
					draggable: !1
				})
			))),
			R$
		));
	}

	function kq() {
		if (d1) return MQ(d1, !0);

		(R.setTool(4), y$(4), p(!0));
	}

	async function zQ($) {
		if ((R.setTool(0), y$(0), s0(), $)) return E6();

		(Y0(), z$());

		let { x: Q, y: J, x2: Y, y2: q } = k.viewport,
			Z = Y - Q,
			K = q - J,
			W = Math.floor(Q + Z / 2),
			F = Math.floor(J + K / 2),
			H = await N.user.shareCanvas.$post({
				json: {
					x: Math.floor(Q),
					y: Math.floor(J),
					width: Math.floor(Z) || 1,
					height: Math.floor(K) || 1
				}
			});

		if (!H.ok) return A0(H, "Could not generate the image");

		let { code: j, url: X } = await H.json(),
			L = { referral: await jQ(), imageCode: j, imageLink: X, x: W, y: F };

		(
			d1 = L,
			setTimeout(
				() => {
					d1 = null;
				},
				60000
			),
			p(!0),
			MQ(L)
		);
	}

	async function E6() {
		let $ = await jQ();

		if (!$) return;

		new _("Share Website", G("div.share-modal", G("p.success", `Every player who signs up with your link will reward you with ${m8(W6.ReferralCode)}!`), G("div.btn-container.vertical", G("button.btn.share", "Share Link", { onclick: () => MQ({ referral: $ }) }), G("button.btn.share", "Share Image", { onclick: () => kq() }), G("button.btn", "Cancel", { onclick: () => p() })), G("p.desc", `You have invited ${C0($.uses, "user")} so far!`)));
	}

	function i7() {
		return new _("Out of paint!", G("div.out-of-paint", G("p.c", G("b", "You have used up some paint, time to submit!")), G("p.c.desc", `You have ${m8(R.paintRemaining + R.localPaintIncrement)} remaining.`), G("p.notice.noicon", "Paint does not get consumed until you submit your changes. Submit your drawing to the canvas, or undo your changes."), G(
			"div.btn-container",
			G("button.btn.primary", "Submit", {
				onclick: async () => {
					(Y0(), await n1(), p(!0));
				}
			}),
			G("button.btn", "Cancel", { onclick: () => p() })
		)));
	}

	function o1() {
		return new _("Out of paint?", G("div.out-of-paint", G("b", "You can share our website to get more paint!"), G("p.success.noicon", `Each invited user will reward you with ${m8(W6.ReferralCode)}!`), G("p.desc", `You can also wait for a refill to get ${m8(W6.TimePassed)}.`, G("br"), "The timer is shown in the bottom bar."), G("div.btn-container.vertical", G("button.btn.share", "Share Website", { onclick: E6 }), e$)));
	}

	var q8 = new Map(),
		r0 = new Uint8Array(i$).fill(255),
		Lq = a * a,
		I6 = !1;

	class e7 {
		x;
		y;
		pos;
		canvas = new OffscreenCanvas(a, a);
		ctx = this.canvas.getContext("2d");
		im = this.ctx.createImageData(a, a);
		rgba32 = new Uint32Array(this.im.data.buffer, this.im.data.byteOffset, Lq);
		worldX;
		worldY;
		lastSeenAt = 0;
		persistent = !1;
		dirty = !1;

		constructor($, Q, J = $ * m0 + Q) {
			this.x = $;
			this.y = Q;
			this.pos = J;

			(
				this.worldX = $ * a,
				this.worldY = Q * a,
				this.ctx.imageSmoothingEnabled = !1,
				q8.set(this.pos, this),
				this.loadFromData()
			);
		}

		loadFromData() {
			for (let $ = 0; $ < a; $++) {
				let Q = $ * a, J = (this.worldY + $) * v;

				for (let Y = 0; Y < a; Y++) {
					let q = J + this.worldX + Y, Z = G0[r0[q]];

					if (Z) this.rgba32[Q + Y] = Z.u32;
				}
			}

			this.dirty = !0;
		}

		unload() {
			(
				q8.delete(this.pos),
				this.canvas.width = 0,
				this.canvas.height = 0
			);
		}
	}

	function Dq($, Q) {
		let J = $ * m0 + Q;

		return q8.get(J) || new e7($, Q, J);
	}

	function U$($, Q, J, Y = !1) {
		let q = $ / a | 0,
			Z = Q / a | 0,
			K = Dq(q, Z),
			W = $ % a,
			H = Q % a * a + W;

		if (K.rgba32[H] != J) (K.rgba32[H] = J, K.dirty = !0);
		if (Y) (K.persistent = !0, I6 = !0);
	}

	function $2() {
		I6 = !1;

		for (let $ of q8.values()) $.persistent = !1;
	}

	function t1($, Q) {
		if (!z6($) || $ < 0 || $ >= i$) return;

		let J = $ % v,
			Y = Math.floor($ / v),
			q = G0[Q],
			Z = z0.get($);

		if ((r0[$] = Q, Z && G8)) Z8($, Z, J, Y); else if (!Z && k.normalizedZoom >= _8) if (q) U$(J, Y, q.u32); else U$(J, Y, 0);
	}

	function Q2($, Q) {
		let J = Q * v + $;

		if (r0[J] == 255) r0[J] = 254;

		return G0[r0[J]];
	}

	function UQ($) {
		for (let J of q8.values()) if (!J.persistent && J.lastSeenAt != $) J.unload();
	}

	var w6 = [], B0 = [], i0 = [];

	function J2() {
		(w6.push(i0), i0 = [], B0 = []);
	}

	function Y2() {
		(w6 = [], B0 = [], i0 = []);
	}

	function kQ($, Q = !1) {
		let J = 0;

		for (let Y of $) if (Q) {
			let q = G0[Y.newColor];

			if (!z0.has(Y.pos)) J++;

			(z0.set(Y.pos, q), Z8(Y.pos, q, Y.x, Y.y));
		} else if (typeof Y.oldColor == "number") {
			let q = G0[Y.oldColor];

			(z0.set(Y.pos, q), Z8(Y.pos, q, Y.x, Y.y));
		} else {
			let q = G0[r0[Y.pos]];

			(z0.delete(Y.pos), U$(Y.x, Y.y, q?.u32 ?? 0), J++);
		}

		return J;
	}

	function a1() {
		if (i0.length) {
			let J = kQ(i0);

			(R.addLocalPaintIncrement(J), B0 = [], B0.push(i0), i0 = []);

			return;
		}

		if (!w6.length) return;

		let $ = w6.pop(), Q = kQ($);

		(R.addLocalPaintIncrement(+Q), B0.push($));
	}

	function s1() {
		if (!B0.length) return;

		let $ = B0.pop(), Q = kQ($, !0);

		(w6.push($), R.addLocalPaintIncrement(-Q));
	}

	var y8 = G("div.box.outset.status-text.warn"),
		F8 = G("div.box.outset.status-text"),
		K8 = 0,
		g$ = !1,
		LQ = 0;

	function s0() {
		if (R.openAt && Date.now() + R.clockOffset < R.openAt) {
			if (g$) (y8.textContent = "", g$ = !1);

			(Tq(), LQ = R.activeTool);

			return;
		}

		if (R.activeTool == 1) Cq(LQ != R.activeTool); else if (g$) (y8.textContent = "", g$ = !1);
		if (R.activeTool == 4) Aq(); else if (R.paintRemaining == 0 && R.nextRefill) Eq(); else if (z0.size || B0.length) Iq(); else G2();

		LQ = R.activeTool;
	}

	function Cq($ = !1) {
		let Q = k.normalizedZoom <= _8;

		if (Q && (!g$ || $)) (g$ = !0, y8.textContent = "Zoom in to draw!"); else if (g$ && !Q) {
			(y8.textContent = "", g$ = !1);

			return;
		}
	}

	setInterval(s0, 1000);

	function G2() {
		if (K8 == 0) return;

		(F8.textContent = "", K8 = 0);
	}

	function Aq() {
		(
			K8 = 4,
			F8.replaceChildren(G("div.share-viewport", G("p", "Zoom into the canvas to share your artwork!"), G("div", G("button.btn", "Share", { onclick: () => zQ(!1) }), G("button.btn", "Cancel", { onclick: () => zQ(!0) }))))
		);
	}

	function Tq() {
		let $ = R.openAt - (Date.now() + R.clockOffset);

		(
			K8 = 5,
			F8.replaceChildren(G("div.timer", G("p", "Drawing opens in: "), G("b", QQ($))))
		);
	}

	function Eq() {
		let $ = R.nextRefill - Date.now(), Q = QQ($);

		if ((K8 = 1, $ < 1)) {
			(R.nextRefill = 0, G2());

			return;
		}

		F8.replaceChildren(G("div.timer", G("p", G("a.link", "Out of paint!", { tabIndex: 1, onclick: () => o1() }), " Next refill in: "), G("b", Q)));
	}

	function Iq() {
		if (K8 == 2) return;

		(
			K8 = 2,
			F8.replaceChildren(G("p", "Drawing locally - Confirm to submit!"), G("div", G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/confirm.png", draggable: !1 }), G("span", "Confirm"), { tabIndex: 1, onclick: n1 }), G("button.btn.icon.confirm-draw-btn", G("img", { src: "/static/icon/cancel.png", draggable: !1 }), G("span", "Cancel"), { tabIndex: 1, onclick: q2 })))
		);
	}

	var Z2 = 0,
		v$ = 0,
		h6 = !1,
		K2 = 0,
		F2 = 0,
		W2 = 0,
		j2 = 0,
		r1 = !1,
		X2 = !1,
		k$ = new Map(),
		wq = 50,
		hq = 24,
		mq = 16;

	function S0($, Q) {
		return [
			YQ(Math.floor(($ - k.rect.left) / k.rect.width * v), 0, v),
			YQ(Math.floor((Q - k.rect.top) / k.rect.height * Z0), 0, Z0)
		];
	}

	async function Nq($, Q) {
		let J = Date.now(),
			[Y, q] = S0($, Q),
			{ points: Z } = U7(K2, F2, Y, q),
			K = $ - W2,
			W = Q - j2;

		if ((
			v$ += Math.sqrt(K * K + W * W) / (J - Z2),
			Z2 = J,
			K2 = Y,
			F2 = q,
			!h6
		)) {
			(h6 = !0, v$ = 5);

			return;
		}

		if (v$ > 0) v$ *= 0.8;
		if (v$ <= 0.001) v$ = 0;

		let F = 1 - v$ / (S8 * 1.1),
			H = Math.max(S8 * F, 2),
			j = Math.min(Math.max(Math.floor((H + 1) ** 1.5), 1), 15);

		if (!Z.length) Z.push([Y, q]);

		let X = (S8 - 1) * 0.1, V = 0;

		for (let [L, z] of Z) {
			let A = z7(L, z, Math.floor(H), j), g = 0, O = 0;

			for (let [M, D] of A) {
				if (M == L && D == z) O++;
				if ((g++, !DQ(M, D) && v$ < X)) Bq(M, D);

				V++;
			}

			if (g < 5 || O > 1) r1 = !0;
		}

		s0();
	}

	function Bq($, Q) {
		if (Math.random() > 0.5) return;

		let J = k$.get($);

		if (J) J.y = Math.max(J.y, Q); else k$.set($, { y: Q, amount: 0, max: O$() * (S8 * 1.5) });
		if (k$.size > wq) k$.delete(k$.keys().next().value);
	}

	function Oq() {
		if (!k$.size) return;

		let $ = [...k$.entries()],
			[Q, J] = $[Math.floor(O$() * $.length)];

		if ((DQ(Q, ++J.y), ++J.amount >= J.max)) k$.delete(Q);
	}

	function H2() {
		(
			setInterval(
				() => {
					if (u0 && h6) Oq();
				},
				hq
			),

			setInterval(
				() => {
					if (u0) (Nq(L$, D$), W2 = L$, j2 = D$); else if (h6) (k$.clear(), h6 = !1);
				},
				mq
			)
		);
	}

	function V2() {
		r1 = !1;
	}

	function Sq($, Q) {
		let J = Math.imul($, 374761393) + Math.imul(Q, 668265263) | 0;

		return (
			J = Math.imul(J ^ J >>> 13, 1274126177),
			J ^= J >>> 16,
			(J >>> 0) / 4294967296
		);
	}

	function P2($, Q) {
		if (Q >= j1) return !1;

		let J = j1 - v5;

		if (Q < J) return !0;

		let Y = (j1 - Q) / v5;

		return Sq($, Q) < Y;
	}

	var x$ = [], R2 = null;

	function CQ() {
		R2?.();
	}

	var F$ = {
		bind($) {
			(R2 = $, $());
		},

		get unread() {
			return x$;
		},

		get unreadCount() {
			return x$.length;
		},

		seed($) {
			x$.length = 0;

			let Q = $?.unread_notifications;

			if (Q?.length) x$.push(...Q);

			CQ();
		},

		receive($) {
			if (x$.some((Q) => Q.id === $.id)) return;

			(
				x$.unshift({
					id: $.id,
					kind: $.kind,
					title: $.title,
					body: $.body,
					data: $.data,
					createdAt: $.createdAt
				}),
				CQ()
			);
		},

		async markAllRead() {
			if (!x$.length) return;
			if ((x$.length = 0, CQ(), !R.token)) return;

			try {
				await N.user.notifications.read.$post({ json: {} });
			} catch {}
		}
	};

	function _q($) {
		let Q = Math.max(0, Math.floor((Date.now() - $) / 1000));

		if (Q < 60) return "just now";

		let J = Math.floor(Q / 60);

		if (J < 60) return `${J}m ago`;

		let Y = Math.floor(J / 60);

		if (Y < 24) return `${Y}h ago`;

		return `${Math.floor(Y / 24)}d ago`;
	}

	function yq($) {
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
			G("div.time", E0($.createdAt, _q($.createdAt)))
		);
	}

	function M2() {
		let $ = [...F$.unread];

		return (
			F$.markAllRead(),
			new _("Notifications", G(
				"div.notifications-modal",
				$.length
					? G("div.list", $.map(yq))
					: G("p.desc.c", "No notifications."),
				G("div.btn-container", e$)
			))
		);
	}

	function z2() {
		let $ = G("span.notif-badge"),
			Q = G("img", { src: "/static/icon/notif.png", draggable: !1, alt: "bell" }),
			J = G("button.btn.swatch.tooltip.notif-indicator.icon", Q, $, {
				dataset: { tooltip: "Notifications" },
				onclick() {
					M2();
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

	function i1() {
		new _("Select Color", G("div.color-modal", G("div.colors", G0.map(($) => G("button.btn.swatch.tooltip", {
			dataset: { tooltip: $.name },
			style: { backgroundColor: $.hex },
			onclick() {
				(W8($), p());
			}
		})))));
	}

	var _0 = [...G0], j8 = G("div.colors.container");

	function $5($) {
		let Q = _0.indexOf($);

		if (Q > -1) (_0.splice(Q, 1), _0.push($));
	}

	var e1 = ($) => G0.findIndex((Q) => Q.name == $);

	function gq() {
		let $ = c.lastUsedColors;

		if ($.length != _0.length) {
			let Q = e1("Red"),
				J = e1("Violet"),
				Y = G0.slice(Q, J + 1);

			($5(G0[e1("Gray")]), $5(G0[e1("White")]));

			for (let q of Y) $5(q);

			return;
		}

		(_0.splice(0), _0.push(...$.map((Q) => G0[Q])));
	}

	function k2($) {
		let Q = _0[_0.length - $];

		if (!Q) return;

		W8(Q, !1);
	}

	function W8($, Q = !0) {
		if ((A7($.hex, $.dark), R.selectedColor == $)) return;
		if (_0.indexOf($) > -1 && Q) ($5($), c.lastUsedColors = _0.map((Y) => Y.idx));

		(R.selectedColor = $, AQ());
	}

	var vq = 54, xq = 9;

	function U2($) {
		let Q = getComputedStyle($),
			J = $.clientWidth - parseFloat(Q.paddingLeft) - parseFloat(Q.paddingRight);

		for (let Y = 0; Y < $.children.length; Y++) {
			let q = $.children[Y];

			if (q === j8) continue;

			J -= q.getBoundingClientRect().width;
		}

		return J;
	}

	function AQ() {
		let $ = U1(z1("tool/colors", { id: "palette-btn", onclick: i1 }), "Palette");

		j8.replaceChildren($);

		let Q = j8.parentElement, J = Q ? U2(Q) : 0;

		if (J <= 0) {
			requestAnimationFrame(() => {
				if (Q && U2(Q) > 0) AQ();
			});

			return;
		}

		let Y = Math.floor(J / vq) - 1,
			q = Math.max(0, Math.min(xq, Y));

		for (let Z = 0; Z < q; Z++) {
			let K = _0[_0.length - 1 - Z],
				W = G("button.btn.swatch.tooltip", {
					tabIndex: -1,
					dataset: { tooltip: K.name },
					style: { backgroundColor: K.hex },
					onclick() {
						W8(K, !1);
					}
				});

			j8.append(W);
		}
	}

	function L2() {
		(
			gq(),
			W8(_0[_0.length - 1], !1),
			R.setPaintRemaining(R.paintRemaining)
		);

		let $ = j8.parentElement;

		if ($) {
			let Q = -1;

			new ResizeObserver(() => {
				let J = $.clientWidth;

				if (J === Q) return;

				(Q = J, AQ());
			}).observe($);
		}
	}

	var TQ = G("div.hotbar-container");

	function Q5($) {
		TQ.replaceChildren($);
	}

	var m6 = G("div.hotbar.main-bar", { role: "toolbar" });

	function D2() {
		(
			m6.append(G("div.status-text-container", y8, F8), G("div.section.left", C2(), G("div#chatbox-divider.divider"), a7, G("div.divider")), G("div.section.middle", Q8, D7, z2()), G("div.section.right", G("div.divider"), s7, G("div.divider"), j8)),
			R.setTool(0),
			Q5(m6),
			y$(0),
			L2()
		);
	}

	var z0 = new Map();

	function r7() {
		for (let [$, Q] of z0) Z8($, Q, $ % v, Math.floor($ / v));
	}

	function Z8($, Q, J, Y) {
		if (G8) {
			let q = G0[r0[$]];

			if (q) U$(J, Y, ((q.u32 & 4278124286) >> 1) + ((Q.u32 & 4278124286) >> 1), !0); else U$(J, Y, PJ | Q.u24, !0);
		} else U$(J, Y, Q.u32, !0);
	}

	function A2() {
		(
			R.localPaintIncrement = 0,
			R.setPaintRemaining(R.paintRemaining)
		);

		for (let $ of z0.keys()) {
			let Q = $ % v,
				J = Math.floor($ / v),
				Y = G0[r0[$]];

			U$(Q, J, Y?.u32 ?? 0);
		}

		($2(), z0.clear(), Y2());
	}

	function pq() {
		A2();
	}

	async function T2($, Q = 0) {
		if (Q >= 5) return (
			console.error("Failed to submit the drawing after 5 tries."),
			!1
		);

		let J = await E2($);

		if (window[M7]) return !0;

		try {
			return (await I2(J), setTimeout(() => N6(0), 500), !0);
		} catch(Y) {
			return (
				console.error("Error submitting the drawing:", Y),
				await T2($, Q + 1)
			);
		}
	}

	async function cq() {
		let $ = [];

		for (let [Q, J] of z0) ($.push([Q, J.idx]), t1(Q, J.idx));

		if ((R.commitLocalPaint(), A2(), $.length === 0 || r1 || X2)) {
			V2();

			return;
		}

		for (let Q = 0; Q < $.length; Q += X1) if (!await T2($.slice(Q, Q + X1))) return e("Something went wrong, sorry!", "Could not submit local drawing to the server after 5 tries");
	}

	function DQ($, Q) {
		if (!z6($) || !z6(Q) || $ < 0 || Q < 0 || $ >= v || !P2($, Q)) return !1;

		let J = R.paintRemaining + R.localPaintIncrement,
			Y = X1 - K0 - 5,
			q = J % K0 == 0 && R.localPaintIncrement < -Y;

		if (!J || q) return (IQ(), !1);

		let Z = R.selectedColor, K = Q * v + $;

		if (z0.has(K)) {
			if (z0.get(K) == Z) return !1;
		} else if (r0[K] == Z.idx) return !1;

		if ((Z8(K, Z, $, Q), !z0.has(K))) R.addLocalPaintIncrement(-1);

		return (
			i0.push({
				x: $,
				y: Q,
				pos: K,
				oldColor: z0.get(K)?.idx,
				newColor: Z.idx
			}),
			z0.set(K, Z),
			!0
		);
	}

	async function n1() {
		M$();

		try {
			(m6.classList.add("progress"), await cq());
		} finally {
			m6.classList.remove("progress");
		}
	}

	async function q2() {
		if ((M$(), EQ())) {
			if (!await i("Are you sure you want to cancel your changes?")) return;
		}

		pq();
	}

	function EQ() {
		return z0.size > 200 || B0.length > 0;
	}

	var X8 = ($) => C0(M6($ / K0), "spray can");

	async function bq($) {
		if (!R.user) return;
		if (z0.size || B0.length || R.localPaintIncrement) return e("You cannot share your paint while drawing! Submit or undo your changes.");
		if (R.paintRemaining < 100) return e("You do not have enough paint");

		let Q = Math.min(R.paintRemaining, K0 * 5),
			J = G("p", { style: { maxWidth: "500px" } }),
			Y = () => {
				let K = parseInt(q.value),
					W = Math.ceil(K / R.paintRemaining * 100);

				if (I8 == 1) J.replaceChildren(G("b", `${W}%`), " of your paint (", G("b", X8(K)), ")"); else J.replaceChildren("You will spend ", G("b", `${W}%`), " of your paint (", G("b", X8(K)), ")", " to give them ", G("b", X8(K * I8)));
			},
			q = G("input", {
				type: "range",
				min: 100,
				max: Q,
				value: Math.min(K0, R.paintRemaining),
				oninput: Y
			}),
			Z = G("datalist#fskjdhsad", Array.from({ length: Math.floor(Q / K0) }, (K, W) => G("option", { value: W * K0, label: W * K0 })));

		(
			q.setAttribute("list", "fskjdhsad"),
			Y(),
			new _("Share Paint", G("div.share-paint-modal", G("p", "How much paint do you want to give to ", G("b", $.username), "?"), q, Z, J, G("div.btn-container", G("button.btn", "Cancel", { onclick: () => p() }), G("button.primary.btn", "Share", {
				async onclick() {
					let K = parseInt(q.value);

					if (K * I8 / K0 < 0.1) return e("That's too little!");

					if (!await i(`Are you sure you want to ${I8 != 1
						? `spend ${X8(K)} to give ${X8(K * I8)}`
						: `give ${X8(K)}`} to ${$.username}?`)) return p();

					Y0();

					let F = await N.user.sharePaint.$post({ json: { username: $.username, paint: K } });

					if (!F.ok) return A0(F, "Could not sell cans");

					let H = await F.json();

					new _("Share Paint", G("p", `Gifted ${X8(H.sold)} to ${$.username}!`));
				}
			}))))
		);
	}

	async function w2($) {
		Y0();

		let Q = G("div.settings-modal", G("p.notice.noicon.user", G("span.name-container", $.clan_name && G("b", `${B$($.clan_name)} `), $.username), G("img", { src: l0($.cursor_sprite), draggable: !1, alt: "cursor" })));

		if ($.clan_name && $.clan_id) {
			let Y = await (await N.user.clan[":id"].$get({ param: { id: $.clan_id.toString() } })).json();

			Q.append(G("p.c", "Clan"), C6(Y));
		}

		(
			Q.append(G(
				"div.btn-container.vertical",
				G("button.btn", "Give Paint", {
					onclick() {
						bq($);
					}
				}),
				G("button.btn", "Jump to Cursor", {
					onclick() {
						y0({ connId: $.id, fallbackPos: $.lastPos, username: $.username });
					}
				}),
				G("button.btn", "Report User", {
					onclick() {
						b7($.username);
					}
				}),
				e$
			)),
			new _("User Info", Q)
		);
	}

	function wQ() {
		let $ = -k.x / k.zoom,
			Q = -k.y / k.zoom,
			J = window.innerWidth / k.zoom,
			Y = window.innerHeight / k.zoom;

		return {
			x: Math.max($, 0),
			y: Math.max(Q, 0),
			x2: Math.min($ + J, v),
			y2: Math.min(Q + Y, Z0),
			width: J,
			height: Y
		};
	}

	function fq() {
		let $ = wQ();

		return {
			x: Math.floor($.x / a),
			y: Math.floor($.y / a),
			x2: Math.floor($.x2 / a),
			y2: Math.floor($.y2 / a),
			width: Math.floor($.width / a),
			height: Math.floor($.height / a)
		};
	}

	function h2() {
		let $ = fq(), Q = new Set(), J = 4;

		for (let Y = $.x - 4; Y <= $.x2 + 4; Y++) for (let q = $.y - 4; q <= $.y2 + 4; q++) {
			if (Y < 0 || q < 0 || Y >= W1 || q >= m0) continue;
			if (Q.size > 1000) return new Set();

			Q.add(Y * m0 + q);
		}

		return Q;
	}

	function hQ($, Q, J = k.viewport) {
		return $ < J.x || Q < J.y || $ > J.x2 || Q > J.y2;
	}

	var B6 = new Set(),
		lq = 10,
		m2 = 0.05,
		uq = 1e6,
		N2 = performance.now();

	function B2($) {
		let Q = ($ - N2) / 1000, J = 1 - Math.exp(-lq * Q);

		N2 = $;

		let Y = 0, q = H8 ? 100 : 500;

		for (let Z of B6) {
			if (Y++ >= q) break;

			if (!Z.element) {
				B6.delete(Z);

				continue;
			}

			let K = Z.moveX - Z.x,
				W = Z.moveY - Z.y,
				F = K * K + W * W;

			if (Math.abs(K) < m2 && Math.abs(W) < m2 || F > uq) (Z.x = Z.moveX, Z.y = Z.moveY, B6.delete(Z)); else (Z.x += K * J, Z.y += W * J);

			J5(Z, Z.x, Z.y);
		}

		requestAnimationFrame(B2);
	}

	function O2($, Q, J) {
		let Y = R0.get($);

		if (!Y) return;

		if (hQ(Y.x, Y.y) && hQ(Q, J)) {
			(J5(Y, Q, J), B6.delete(Y));

			return;
		}

		(B6.add(Y), Y.moveX = Q, Y.moveY = J);
	}

	requestAnimationFrame(B2);

	var R0 = new Map(),
		V8 = G("div.cursors"),
		O6 = G("div.cursor-overflow");

	O6.style.display = "none";
	V8.append(O6);

	function _2($) {
		if ($ > 0) (O6.textContent = `+${$} more here`, O6.style.display = ""); else O6.style.display = "none";
	}

	var dq = 50,
		S6 = new Set(),
		v8 = new Set(),
		y2 = new Set(),
		g2 = {
			id: -1,
			username: "",
			cursor_sprite: 0,
			x: 0,
			y: 0,
			moveX: 0,
			moveY: 0,
			partial: !0
		};

	function v2() {
		for (let $ of R0.values()) if ($.element) $.element.remove();

		R0.clear();
	}

	function mQ($) {
		if (c.a11y.hideCursors) return;
		if ($.username == R.user?.username || $.id == R.connectionId) return;

		let Q = R0.get($.id),
			J = !!Q && !Q.partial && (Q.cursor_sprite !== $.cursor_sprite || Q.clan_name !== $.clan_name || Q.username !== $.username),
			Y = {
				...g2,
				...Q || {},
				id: $.id,
				username: $.username,
				cursor_sprite: $.cursor_sprite,
				clan_id: $.clan_id,
				clan_name: $.clan_name,
				partial: !1
			};

		if ((R0.set($.id, Y), Q?.element && Q.partial)) {
			let q = Q.element.querySelector("img");

			if ((Q.element.append(BQ(Y)), q)) q.src = l0($.cursor_sprite);
		} else if (Q?.element && J) oq(Y);
	}

	function oq($) {
		if (!$.element) return;

		let Q = $.element.querySelector("img");

		if (Q) Q.src = l0($.cursor_sprite);

		(
			$.element.querySelector(".chat-bubble")?.remove(),
			$.element.append(BQ($))
		);
	}

	function nq($) {
		if (R0.has($) || $ == R.connectionId) return;

		let Q = { ...g2, id: $ };

		return (NQ($), R0.set($, Q), Q);
	}

	function NQ($) {
		if ($ === R.connectionId || R0.has($) || S6.has($) || v8.has($) || y2.has($)) return;

		S6.add($);
	}

	function x2() {
		if (v8.size > 0 || S6.size === 0) return null;

		let $ = [];

		for (let Q of S6) {
			if ($.length >= dq) break;

			$.push(Q);
		}

		for (let Q of $) (S6.delete(Q), v8.add(Q));

		return $;
	}

	function p2($) {
		for (let Q of $) (mQ(Q), v8.delete(Q.id));
		for (let Q of v8) y2.add(Q);

		v8.clear();
	}

	function c2($) {
		let Q = R0.get($);

		if (!Q) return;
		if (Q.element) Q.element.remove();

		R0.delete($);
	}

	var S2 = 0;

	function b2($, Q, J = !1) {
		if (c.a11y.hideCursors) return;
		if ($ == R.connectionId) return;

		let Y = R0.get($) || nq($);

		if (!Y) return;

		(Y.lastSeen = performance.now(), Y.lastPos = Q);

		let q = Q % v, Z = Math.floor(Q / v);

		if (!Y.element) (
			Y.element = G("div.cursor", { dataset: { id: Y.id.toString() } }, G("img", { draggable: !1, src: l0(Y.cursor_sprite), alt: "⬉" }), !Y.partial && BQ(Y)),
			V8.append(Y.element),
			Y.hidden = !1,
			Y.element.style.zIndex = `${S2++}`
		); else if (Y.hidden) (aq(Y), Y.element.style.zIndex = `${S2++}`);

		if (J) O2($, q, Z); else J5(Y, q, Z);
	}

	function J5($, Q, J) {
		if (!$.element) return;

		(
			$.element.style.translate = `${Q}px ${J}px`,
			$.x = Q,
			$.y = J
		);
	}

	function BQ($) {
		return G("div.chat-bubble", G("span", $.clan_name && G("b", B$($.clan_name)), $.username, {
			onclick() {
				w2($);
			}
		}));
	}

	function tq($) {
		if (!$.element || $.hidden) return;

		($.element.style.opacity = "0", $.hidden = !0);
	}

	function aq($) {
		if (!$.element || !$.hidden) return;

		($.element.style.opacity = "", $.hidden = !1);
	}

	var sq = 1e4, rq = 1000;

	function iq() {
		let $ = performance.now() - sq;

		for (let Q of R0.values()) {
			if (!Q.element || Q.hidden) continue;
			if (Q.lastSeen === void 0 || Q.lastSeen < $) tq(Q);
		}
	}

	setInterval(iq, rq);

	var C$ = 256,
		eq = Math.max(v, Z0),
		f2 = (() => {
			let $ = 0;

			while (Math.ceil(eq / 2 ** $) > C$) $++;

			return $;
		})();

	var $Z = ($) => Math.ceil(Math.ceil(v / 2 ** $) / C$),
		QZ = ($) => Math.ceil(Math.ceil(Z0 / 2 ** $) / C$);

	function OQ($) {
		if ($ <= 0) return f2;

		return Math.min(f2, Math.max(0, Math.round(-Math.log2($))));
	}

	function u2($) {
		let Q = $.zoom || 0.000001,
			J = Math.max(0, Math.floor(-$.x / Q)),
			Y = Math.max(0, Math.floor(-$.y / Q)),
			q = Math.min(v, Math.ceil((-$.x + $.w) / Q)),
			Z = Math.min(Z0, Math.ceil((-$.y + $.h) / Q));

		return { x0: J, y0: Y, x1: Math.max(J, q), y1: Math.max(Y, Z) };
	}

	function Y5($, Q) {
		let { x0: J, y0: Y, x1: q, y1: Z } = u2($),
			K = 2 ** Q,
			W = $Z(Q),
			F = QZ(Q),
			H = Math.max(0, J / K / C$ | 0),
			j = Math.max(0, Y / K / C$ | 0),
			X = Math.min(W - 1, (q / K - 1) / C$ | 0),
			V = Math.min(F - 1, (Z / K - 1) / C$ | 0),
			L = [];

		for (let z = H; z <= X; z++) for (let A = j; A <= V; A++) L.push([z, A]);

		return L;
	}

	var l2 = 64;

	function JZ($) {
		let { x0: Q, y0: J, x1: Y, y1: q } = u2($),
			Z = Q / a | 0,
			K = (Y - 1) / a | 0,
			W = J / a | 0,
			F = (q - 1) / a | 0,
			H = [];

		for (let V = Z; V <= K; V++) for (let L = W; L <= F; L++) if (V >= 0 && L >= 0 && V < W1 && L < m0) H.push(V * m0 + L);

		if (H.length <= l2) return H;

		let j = (Q + Y) / 2 / a, X = (J + q) / 2 / a;

		return H.map((V) => {
			let L = V / m0 | 0,
				z = V % m0,
				A = L + 0.5 - j,
				g = z + 0.5 - X;

			return [V, A * A + g * g];
		}).sort((V, L) => V[1] - L[1]).slice(0, l2).map((V) => V[0]);
	}

	function YZ() {
		let $ = globalThis.navigator?.connection;

		if (!$) return !1;

		return !!$.saveData || $.effectiveType === "2g" || $.effectiveType === "slow-2g" || $.effectiveType === "3g";
	}

	var GZ = 0.8;

	class SQ {
		hooks;
		mode = "overview";
		lastChunks = "";

		constructor($) {
			this.hooks = $;
		}

		update($) {
			let Q = $.zoom >= GZ ? "live" : "overview";

			if (Q !== this.mode) (this.mode = Q, this.hooks.setLayer(Q));

			if (this.mode === "overview") {
				if (this.lastChunks !== "") (this.hooks.setLiveChunks([]), this.lastChunks = "");

				let J = OQ($.zoom), Y = Y5($, J);

				for (let [q, Z] of Y) this.hooks.drawTile(J, q, Z);

				if (!YZ() && J > 0) for (let [q, Z] of Y5($, J - 1).slice(0, 16)) this.hooks.drawTile(J - 1, q, Z);
			} else {
				let J = JZ($), Y = J.join(",");

				if (Y !== this.lastChunks) (this.hooks.setLiveChunks(J), this.lastChunks = Y);
			}
		}
	}

	function qZ() {
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

	var n2 = qZ(),
		d2 = Math.min(300, Math.round(n2 * 2)),
		P8 = n2,
		G5 = 16.7,
		_Q = performance.now(),
		o2 = _Q;

	function t2($) {
		let Q = $ - _Q;

		if ((
			_Q = $,
			Q > 0 && Q < 1000 && document.visibilityState === "visible"
		)) {
			if ((G5 += (Q - G5) * 0.1, $ - o2 > 1000)) {
				if ((o2 = $, G5 > 22 && P8 > 8)) P8 = Math.max(8, Math.round(P8 * 0.7)); else if (G5 < 13 && P8 < d2) P8 = Math.min(d2, Math.round(P8 * 1.15) + 1);
			}
		}

		requestAnimationFrame(t2);
	}

	requestAnimationFrame(t2);

	function a2() {
		return P8 | 0;
	}

	var R8 = new Set(), yQ = -1, s2 = null;

	function r2($) {
		s2 = new Set($);
	}

	function i2() {
		(R8 = new Set(), yQ = -1);
	}

	function ZZ($) {
		if ($.size != R8.size) return !0;

		for (let Q of $) if (!R8.has(Q)) return !0;
		for (let Q of R8) if (!$.has(Q)) return !0;

		return !1;
	}

	function e2() {
		if (!R.user || !L0) return;

		let $ = R.cursorX >= 0 && R.cursorY >= 0,
			Q = -1,
			J = -1;

		if ($) {
			let K = Math.min(R.cursorX, v - 1),
				W = Math.min(R.cursorY, Z0 - 1);

			Q = W * v + K;

			let F = Math.floor(K / a), H = Math.floor(W / a);

			J = F * m0 + H;
		}

		let Y = s2 ?? h2(), q = ZZ(Y), Z = x2();

		if (yQ != Q || q || Z) (
			yQ = Q,
			R8 = Y,
			N6(3, {
				cursorPos: Q,
				cursorChunk: J,
				subscribe: q ? [...Y] : void 0,
				lookupUsers: Z ?? void 0,
				cursorBudget: a2()
			})
		);
	}

	var pQ = W0.url?.tileBase?.replace(/\/$/, ""),
		b8 = !!W0.url?.ws && !!pQ,
		cQ = G("img.canvas-snapshot", { draggable: !1, decoding: "async" }),
		F5 = G("img.canvas-snapshot", { draggable: !1, decoding: "async" });

	F5.style.opacity = "0";

	var A$ = G("div.canvas-snapshot-wrap", cQ, F5);

	if (!b8) A$.style.display = "none";

	var bQ = 400;

	cQ.style.transition = `opacity ${bQ}ms ease-out`;
	F5.style.transition = `opacity ${bQ}ms ease-out`;

	var q5 = cQ,
		x8 = F5,
		xV = G("div.canvas-tile-grid"),
		M8 = null,
		W5 = "overview",
		$Y = 1e4,
		gQ = !1,
		QY = "",
		JY = null;

	async function Z5() {
		if (!b8 || gQ || W5 !== "overview" || document.hidden) return;

		gQ = !0;

		try {
			let $ = await fetch(`${pQ}/snapshot.png`, { cache: "no-cache" });

			if (!$.ok) return;

			let Q = $.headers.get("last-modified") ?? "";

			if (Q && Q === QY) return;

			QY = Q;

			let J = await $.blob(), Y = URL.createObjectURL(J);

			x8.src = Y;

			try {
				await x8.decode();
			} catch {}

			(
				A$.appendChild(x8),
				x8.style.opacity = "1",
				await new Promise((Z) => setTimeout(Z, bQ + 60))
			);

			let q = JY;

			if ((JY = Y, q5.style.opacity = "0", q5.src = "", q)) URL.revokeObjectURL(q);

			[q5, x8] = [x8, q5];
		} catch {} finally {
			gQ = !1;
		}
	}

	var e0 = new Map(),
		y6 = new Set(),
		c8 = new Set(),
		_6 = new Map(),
		KZ = 8000,
		FZ = ($, Q, J) => `${pQ}/tiles/${$}/${Q}/${J}.png`;

	function ZY($) {
		if ($ && y6.has($)) (y6.delete($), URL.revokeObjectURL($));
	}

	function WZ($, Q) {
		let J = $.uri;

		if (J == Q) return;

		($.uri = Q, ZY(J), y6.add(Q));
	}

	function YY($) {
		(e0.delete($.k), ZY($.uri));
	}

	async function KY($) {
		let Q = await fetch($.src, { cache: "no-cache" });

		if (!Q.ok || Q.status == 304) return;

		let J = "";

		try {
			let Y = await Q.blob();

			J = URL.createObjectURL(Y);

			let q = new Image();

			(
				q.decoding = "async",
				q.src = J,
				await q.decode(),
				$.img = q,
				WZ($, q.src)
			);
		} catch(Y) {
			if (J) URL.revokeObjectURL(J);

			console.error("Error fetching tile", $.k, Y);
		}
	}

	async function xQ($) {
		if (!b8) return;

		if (W5 === "overview") {
			if (e0.size) {
				for (let K of e0.values()) YY(K);
				for (let K of y6.values()) URL.revokeObjectURL(K);

				(e0.clear(), y6.clear(), c8.clear());
			}

			return;
		}

		let Q = OQ($.zoom),
			J = C$ * 2 ** Q,
			Y = Y5($, Q),
			q = new Set();

		for (let [K, W] of Y) {
			let F = `${Q}/${K}/${W}`;

			if ((q.add(F), e0.has(F))) continue;

			let H = {
					k: F,
					x: K * J | 0,
					y: W * J | 0,
					size: J,
					src: FZ(Q, K, W),
					uri: ""
				},
				j = setTimeout(
					() => {
						if (c8.delete(F)) K5();
					},
					KZ
				),
				X = () => {
					(clearTimeout(_6.get(F)), _6.delete(F), c8.delete(F));
				};

			(
				KY(H).then(() => {
					(X(), K5());
				}),
				e0.set(F, H),
				_6.set(F, j),
				c8.add(F)
			);
		}

		let Z = !1;

		for (let [K, W] of e0) if (!q.has(K)) {
			if ((
				YY(W),
				e0.delete(K),
				clearTimeout(_6.get(K)),
				_6.delete(K),
				c8.delete(K)
			)) Z = !0;
		}

		if (Z) K5();
	}

	function GY() {
		if (!b8 || W5 !== "live" || document.hidden) return;

		for (let $ of e0.values()) KY($);
	}

	var vQ = 0.9, qY = 1.4;

	function jZ($) {
		if ($ <= vQ) return 1;
		if ($ >= qY) return 0;

		return 1 - ($ - vQ) / (qY - vQ);
	}

	var p8 = !1;

	function K5() {
		if (!M8) return;

		let $ = c8.size > 0 ? 1 : jZ(M8.zoom);

		if (!c.a11y.performanceMode) {
			if ((A$.style.opacity = $.toString(), p8)) (A$.style.visibility = "", p8 = !1);
		} else if ($ == 0 && !p8) (A$.style.visibility = "hidden", p8 = !0); else if ($ > 0 && p8) (A$.style.visibility = "", A$.style.opacity = "1", p8 = !1);
	}

	var XZ = new SQ({
		async drawTile() {
			return !0;
		},

		setLiveChunks($) {
			r2($);
		},

		setLayer($) {
			if ((W5 = $, $ === "overview")) {
				if ((Z5(), M8)) xQ(M8);
			} else if (M8) xQ(M8);
		}
	});

	function FY() {}

	function WY($) {
		if (!b8) return;

		(M8 = $, XZ.update($), xQ($), K5());
	}

	if (b8) (
		Z5(),
		setInterval(Z5, $Y),
		setInterval(GY, $Y),
		document.addEventListener("visibilitychange", () => {
			if (!document.hidden) (Z5(), GY());
		})
	);

	var fQ = !1,
		W$ = { options: [] },
		lQ = () => !!W$.element;

	function p$() {
		if (!W$.element || fQ) return;

		(
			W$.options = [],
			W$.element.remove(),
			W$.element = void 0,
			t0(".ctx").forEach(($) => $.remove())
		);
	}

	function jY($, Q, J) {
		p$();

		let Y = G("div.ctx");

		(W$.element = Y, W$.options = []);

		for (let W of $) {
			if (!W.label) {
				Y.append(G("hr"));

				continue;
			}

			let F = G("div.option", G("span", M1(W.label)), W.keybindText && G("span", W.keybindText), {
				ariaLabel: W.label.replace(/[\[\]]/g, ""),
				onclick(H) {
					if ((p$(), W.action)) W.action(H);
				}
			});

			(Y.append(F), W$.options.push({ ...W, _element: F }));
		}

		document.body.append(Y);

		let q = Y.getBoundingClientRect(),
			Z = Q + q.width > window.innerWidth ? window.innerWidth - q.width : Q,
			K = J + q.height > window.innerHeight ? window.innerHeight - q.height : J;

		(
			Y.style.left = `${Z}px`,
			Y.style.top = `${K}px`,
			W$.x = Z,
			W$.y = K,
			fQ = !0,
			setTimeout(() => fQ = !1)
		);
	}

	window.addEventListener("click", p$);
	window.addEventListener("resize", p$);
	window.addEventListener("blur", p$);

	window.addEventListener("contextmenu", ($) => {
		($.preventDefault(), p$());
	});

	var g6 = !1, uQ = !1;

	function v6($) {
		if (uQ) return (
			g0.width = window.innerWidth,
			g0.height = window.innerHeight,
			z8.imageSmoothingEnabled = !1,
			uQ = !1,
			g6 = !0,
			requestAnimationFrame(v6)
		);

		if (g6) (z$(), g6 = !1);

		z8.clearRect(0, 0, g0.width, g0.height);

		let Q = k.normalizedZoom >= T$, J = !Q && I6;

		for (let F of e0.values()) {
			if (!F.img) continue;

			let H = F.x * k.zoom + k.x,
				j = F.y * k.zoom + k.y,
				X = F.size * k.zoom;

			z8.drawImage(F.img, H, j, X, X);
		}

		if (!Q && !I6) return (UQ($), requestAnimationFrame(v6));

		let Y = Math.floor(k.viewport.x / a),
			q = Math.floor(k.viewport.y / a),
			Z = Math.floor(k.viewport.x2 / a),
			K = Math.floor(k.viewport.y2 / a),
			W = a * k.zoom;

		for (let F = Y - 1; F <= Z; F++) for (let H = q - 1; H <= K; H++) {
			let j = q8.get(F * m0 + H);

			if (!j) continue;
			if (J && !j.persistent) continue;
			if (j.dirty) (j.ctx.putImageData(j.im, 0, 0), j.dirty = !1);

			let X = j.worldX * k.zoom + k.x,
				V = j.worldY * k.zoom + k.y;

			(z8.drawImage(j.canvas, X, V, W, W), j.lastSeenAt = $);
		}

		(z8.restore(), UQ($), requestAnimationFrame(v6));
	}

	function U8() {
		g6 = !0;
	}

	window.addEventListener("resize", () => {
		(uQ = !0, g6 = !0);
	});

	var c$ = !1, HY = !1, HZ = 25000000;

	function VZ($, Q, J, Y, q) {
		if (typeof Q != "string" || !Q?.length) return "Missing name";
		if (typeof J != "string" || !J?.length) return "Missing location";
		if ($ && $.length > 127) return "Identification is too long";
		if (Q.length > 255) return "Name is too long";
		if (J.length > 255) return "Location is too long";
		if (!Y || !q) return "Missing file";
		if (!Y.startsWith("image/")) return "Invalid file type (expected an image)";
		if (q > HZ) return `File is too large (max 25MB; got ${Math.floor(q / 1000 / 1000)}MB)`;
	}

	var k8 = -1;

	function PZ() {
		let $ = u("input#s__id").value,
			Q = u("input#s__name").value,
			J = u("input#s__location").value,
			Y = u("input#s__upload").files,
			q = Y ? Y.item(0) : null,
			Z = VZ($, Q, J, q?.type, q?.size);

		if (Z) return (alert(Z), !1);
	}

	function RZ($) {
		let Q = new Intl.DateTimeFormat([], { day: "2-digit", month: "2-digit", year: "numeric" }).format($.submitted_at),
			J = G("div.image");

		if ($.image_file.match(/\.(mp4|webm|ogg|mov)$/i)) J.append(G("video", {
			style: { width: "100%", height: "100%" },
			controls: !0,
			src: `${W0.url.signalArchive}/static/uploads/${$.image_file}`,
			autoplay: !1,
			preload: "none",
			loop: !1,
			muted: !1
		})); else (
			J.style.backgroundImage = `url(${W0.url.signalArchive}/static/uploads/${$.image_file})`,
			J.style.imageRendering = "auto"
		);

		return G("div.window.wpost", G("div.title", G("p", `SIGNAL #${$.num_id}`), G("div.buttons", G("button", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", J, G("div.info", G("p", G("span.label", "SIGNAL NAME"), G("b", $.name)), G("p", G("span.label", "LOCATION"), G("b", $.location)), G("p", G("span.label", "TRANSMITTED"), G("b", Q)))));
	}

	async function VY() {
		(k8 = 0, await Promise.all([MZ(), PY()]));
	}

	var dQ = !1;

	async function PY() {
		if (dQ) return;

		dQ = !0;

		let $ = G("div.f", "Loading...");

		u(".sightings .posts").append($);

		let J = await (await fetch(`${W0.url.signalArchive}/fetch?tag=&after=${k8}&limit=${k8 ? 10 : 4}&at=${Date.now()}`)).json();

		if ((
			u(".sightings .posts").append(...J.map(RZ)),
			k8 += J.length,
			$.remove(),
			dQ = !1,
			!J.length
		)) (
			u(".sightings .posts").append(G("div.f", k8 ? "You have reached the end." : "Nothing here yet...")),
			u(".sightings .more").style.display = "none"
		); else u(".sightings .more").style.display = "";
	}

	async function MZ() {}

	async function zZ() {
		let $ = u(".preview"),
			Q = u("input#s__upload").files?.item(0);

		if (!Q) {
			$.hidden = !0;

			return;
		}

		let J = URL.createObjectURL(new Blob([await Q.arrayBuffer()]));

		($.hidden = !1, $.style.backgroundImage = `url(${J})`);
	}

	var RY = G("div.info-container", G("div.window.winfo", G("div.title", G("p", "filian_is_lost.txt"), G("div.buttons", G("button.icon", G("img", { src: "/static/icon/archive/minimize.png", alt: "_" })), G("button.icon", G("img", { src: "/static/icon/archive/maximize.png", alt: "⌷" })), G("button.icon", G("img", { src: "/static/icon/archive/close.png", alt: "x" })))), G("div.content", G("h1", "FILIAN IS LOST."), G("p", "She went dark months ago. No posts. No streams. No signals. But we know she's listening. She always is."), G("p", G("b", "The Wall"), " is her frequency. Every mark you leave gets archived: a permanent record of everyone, everywhere, who showed up when she went quiet."), G("p", "Paint something. Make noise. Leave your mark in the archive."), G("p", "Bring her back.")))),
		f8 = G(
			"div.main",
			RY,
			G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " signal_archive.exe"), G("p", "Loading the signal archive...")),
			G("div.header", G("h1", "SIGNAL ARCHIVE"), G("p", "RECENTLY TRANSMITTED")),
			G("div.post-container", G("div.posts"), G("div.more", G("button", "LOAD MORE", { onclick: PY }))),
			G("div.terminal", G("p", G("span", "C:\\SIGNAL_ARCHIVE>"), " submit_signal.exe"), G("p", "Loading submission form...")),
			G("div.window.wsubmit", G("div.title", G("p", "submit_signal.exe")), G("div.content", G("h1", "DID YOU FIND SOMETHING?"), G("p", "Submit a signal to the archive"), G(
				"form",
				{
					action: `${W0.url.signalArchive}/submit`,
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
					onchange: zZ
				}),
				G(
					"div.buttons",
					G("input", {
						type: "submit",
						onclick: () => PZ(),
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
		X5 = G("img", { src: "/static/icon/arrow-down.png", draggable: !1 });

	function UZ() {
		if (c$) LY(); else kY();

		X5.style.transform = c$ ? "rotate(180deg)" : "";
	}

	var j5 = G("div.sightings", G("div.mobile-scroll-btn", { onclick: UZ }, G("button", X5)), f8);

	function MY($, Q) {
		let J = $ + Q;

		return J > 0 ? `${H0(J)} online` : "";
	}

	function zY($, Q) {
		let J = u("#wall-online-count");

		if (J) J.textContent = MY($, Q);
	}

	var H5 = !1;

	function UY($ = !1) {
		(
			sessionStorage.setItem("wall:view", $ ? "wall" : "archive"),
			document.body.append(j5),
			f8.inert = !0
		);

		let Q = u("main");

		if ((
			Q.prepend(G("div.modal-title.wall-title", G("span", G("h3", "the_wall.exe"), G("span.wall-online#wall-online-count", MY(R.onlinePlayers, R.onlineViewers))), G("button.btn", "Full Screen", { style: { color: "var(--text)" }, onclick: XY }))),
			!f0
		)) (
			Q.addEventListener("mouseenter", LY),
			j5.addEventListener("mouseenter", kY)
		); else Q.classList.add("mobile");

		if (!$) oQ(); else XY();
	}

	function kY() {
		if (c$) return;
		if ((c$ = !0, !f0)) (document.body.classList.remove("noscroll"), f8.inert = !1);

		if ((
			RY.scrollIntoView({ behavior: f0 ? "auto" : "smooth", block: "center" }),
			k8 < 0
		)) VY();
	}

	function LY() {
		if (!c$) return;
		if ((c$ = !1, !f0)) (document.body.classList.add("noscroll"), f8.inert = !0);

		u("main").scrollIntoView({ behavior: f0 ? "auto" : "smooth", block: "center" });
	}

	function XY() {
		if ((
			H5 = !1,
			sessionStorage.setItem("wall:view", "wall"),
			u("main").classList.remove("minimized"),
			j5.style.display = "none",
			U8(),
			f0
		)) (
			document.body.classList.add("noscroll"),
			f8.inert = !0,
			c$ = !1,
			X5.style.transform = ""
		);

		if (HY) document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
	}

	function oQ() {
		if ((
			H5 = !0,
			u("main").classList.add("minimized"),
			sessionStorage.setItem("wall:view", "archive"),
			j5.style.display = "",
			U8(),
			f0
		)) {
			if ((
				document.body.classList.remove("noscroll"),
				f8.inert = !1,
				c$ = !1,
				X5.style.transform = "",
				k8 < 0
			)) VY();
		}

		if (HY) document.exitFullscreen().catch(() => {});
	}

	var nQ = G("div.actionbar", { role: "toolbar" });

	function DY($) {
		let Q = G("button.abtn.btn.action", M1($.label), { ariaLabel: $.label.replace(/[\[\]]/g, "") });

		if ($.active) Q.classList.add("active");

		let J = () => {
			if (!$.menu) return;

			let Y = Q.getBoundingClientRect(),
				q = typeof $.menu == "function" ? $.menu() : $.menu;

			jY(q, Y.x, Y.y + Y.height);
		};

		return (
			Q.onclick = () => {
				if (!lQ()) J();
				if ($.action) $.action();
			},

			Q.onmouseover = () => {
				if ($.action) p$();
				if (lQ()) J();
				if (document.activeElement) document.activeElement.blur();
			},
			Q
		);
	}

	function tQ($) {
		nQ.replaceChildren(...$.map(DY), G("div.right-side", G("b.fil", "FILIAN IS LOST"), G(
			"button.btn.icon.minimize-btn",
			{
				ariaLabel: "Minimize",
				onclick() {
					oQ();
				}
			},
			G("img", { src: "/static/icon/close.png", draggable: !1 })
		)));
	}

	function V5($) {
		return G("div.navbar.custom", G("div.actionbar.custom", $.map(DY)));
	}

	var $$ = null, x6 = null, P5 = "";

	function kZ($, Q, J) {
		if (!$) return;
		if ($$) R5();

		let Y = G("div#tooltip-text.tooltip-popup", { textContent: $, role: "tooltip" });

		(document.body.append(Y), $$ = Y, CY(Q, J));
	}

	function CY($, Q) {
		if (!$$) return;

		let J = $$.getBoundingClientRect(),
			Y = $ + J.width > window.innerWidth ? window.innerWidth - J.width : $,
			q = Q + J.height > window.innerHeight ? window.innerHeight - J.height : Q;

		($$.style.left = `${Y}px`, $$.style.top = `${q}px`);
	}

	function R5() {
		if (!$$) return;
		if (x6) x6.removeAttribute("aria-describedby");

		($$.remove(), $$ = null, x6 = null, P5 = "");
	}

	function M5($, Q, J) {
		if (!$.classList || !$.classList.contains("tooltip")) return;

		let Y = $.dataset.tooltip;

		if (!Y) return;

		let q = typeof Q == "number" && typeof J == "number";

		if (!q) {
			let Z = $.getBoundingClientRect();

			(Q = Z.x, J = Z.y);
		}

		if ($$) {
			if (x6 != $) return (R5(), M5($, Q, J));
			if (P5 != Y) ($$.textContent = Y, P5 = Y);
			if (q) CY(Q, J);

			return;
		}

		(
			kZ(Y, Q, J),
			x6 = $,
			P5 = Y,
			$.setAttribute("aria-describedby", "tooltip-text")
		);
	}

	document.addEventListener("mouseover", ($) => M5($.target, $.x, $.y));
	document.addEventListener("mousemove", ($) => M5($.target, $.x, $.y));
	document.addEventListener("focusin", ($) => M5($.target));
	window.addEventListener("mouseout", R5);
	window.addEventListener("click", R5);

	var aQ = new Set(), u8 = null, p6 = -1;

	async function LZ() {
		let Q = await (await N.cursor.data.v2.$get()).json();

		if (Q.version != VJ) return (
			e("Your client is outdated.", "New cursors were added, you need to reload your page to be able to access them!"),
			null
		);

		return Q.list.map((J) => ({ ...J, ...CZ(J), unlocked: aQ.has(J.id) }));
	}

	async function z5() {
		let Q = await (await N.cursor.inventory.$get()).json();

		aQ.clear();

		for (let J of Q.cursors) aQ.add(J);

		u8 = Q;
	}

	async function b$($) {
		let Q = await N.cursor.claimCursor.$post({ json: $ });

		if (Q.status != 200) return await Q.text();

		return (await z5(), null);
	}

	function DZ($, Q, J) {
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

	function CZ($) {
		let Q = $.unlock;

		if (!Q || Q.kind == "client") return { claimable: !1, tooltip: "You do not own this cursor!" };

		switch (Q.kind) {
			case "stat":
				{
					let J = u8.stats[Q.stat] ?? 0;

					return J >= Q.gte
						? { claimable: !0, tooltip: "Click to claim!" }
						: { claimable: !1, tooltip: DZ(Q.stat, J, Q.gte) };
				}

			case "purchase":
				return u8.coins >= Q.cost
					? { claimable: !0, tooltip: `Click to buy (${Q.cost} coins)` }
					: { claimable: !1, tooltip: `Costs ${Q.cost} coins` };

			case "code":
				return { claimable: !1, tooltip: "Unlocks with a secret code" };

			case "manual":
				return { claimable: !1, tooltip: "Awarded by moderators" };
		}
	}

	function AZ($) {
		let Q = async (Y) => {
				if ($.unlock?.kind == "purchase") {
					if (!await i(`Are you sure you want to buy this cursor for ${$.unlock.cost} coins?`)) return;
				}

				let q = await b$({ cursorId: $.id, code: Y });

				if (q) {
					e(q, "Could not claim the cursor");

					return;
				}

				l8();
			},
			J = G("div.item.box", {
				id: `item${$.id}`,
				onclick() {
					if ($.unlocked) sQ($); else if ($.claimable) Q();
				},

				onmouseover: () => {
					N8($.id);
				},

				onmouseleave: () => {
					N8(p6);
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
				let q = G("span.box.cost"), Z = 0;

				(
					J.classList.add("cookie"),
					J.dataset.tooltip = "",
					J.addEventListener("click", async () => {
						if (Z >= 200) {
							if (await i("Claim the Cookie Clicker Cursor?")) Q("COOKIE_CLICKER");

							return;
						}

						(q.textContent = `${++Z} ${"\uD83C\uDF6A"}`, J.append(q));
					})
				);
			}
		}

		if (c.a11y.devOverlay) J.dataset.tooltip = `id=${$.id} tier=${$.tier} "${$.name}"`;

		return (J.append(G("img", { src: l0($.id), draggable: !1 })), J);
	}

	function sQ($) {
		if ($.id == p6) return;

		p6 = $.id;

		let Q = u("#inv-confirm-buttons");

		if ((
			t0(".inventory .item.active").forEach((J) => J.classList.remove("active")),
			u(`#item${$.id}`).classList.add("active"),
			$.id == R.user?.cursor_id
		)) Q.style.display = "none"; else Q.style.display = "";
	}

	function TZ() {
		let $ = R.currentSprayCanSize(),
			Q = Math.floor($ / x5) || 1;

		new _("Coins", G("div.coin-modal", G("p.c", "You have ", UJ(u8.coins), ` coin${C0(u8.coins)}`), G("p.notice", `You can exchange spray cans for coins! Every ${x5} paint is one coin.`), G("p.c", "Your current spray can contains ", G("b", $.toString()), " paint, ", "so you will receive ", G("b", Q.toString()), ` coin${C0($ == 0 ? 0 : Q)}.`), G("div.btn-container", G("button.btn", "Back", { onclick: l8 }), G("button.btn.primary", "Sell Spray Can", {
			async onclick() {
				if (R.localPaintIncrement != 0 || B0.length) {
					e("You cannot sell your current spray can while drawing! Please cancel or submit your local changes.");

					return;
				}

				if (Q == 0) {
					e("Empty spray can!");

					return;
				}

				if (!await i(`Sell your current spray can for ${C0(Q, "coin")}? The remainder will not be lost.`)) return l8();

				Y0();

				let Y = await N.cursor.buyCoins.$post();

				if (!Y.ok) {
					A0(Y);

					return;
				}

				l8();
			}
		}))));
	}

	async function l8() {
		if (!R.user) return;

		(Y0(), await z5());

		let $ = await LZ();

		if (!$) return;

		let Q = $.toSorted((J, Y) => Y.unlocked - J.unlocked || Y.tier - J.tier || J.name.localeCompare(Y.name));

		(
			new _("User > Inventory", G("div.inventory.nopad", G("div.scroll.pad", G("p.notice", "Click on a cursor to select it! It will be shown to all users."), G("br"), G("div.items", Q.map(AZ)), G("p", "More cursors coming soon!")), G("div.box.outset.confirm-bar", G("button.btn", "Back", { onclick: () => p() }), G("button.btn", C0(Math.floor(u8.coins), "coin"), { onclick: TZ }), G(
				"div#inv-confirm-buttons",
				{ style: { display: "none" } },
				G("button.btn", "Cancel", {
					onclick() {
						sQ($[R.user.cursor_id]);
					}
				}),
				G("button.btn.primary", "Change", {
					async onclick() {
						(Y0(), await Y8({ cursorId: p6 }), p(!0));
					}
				})
			)))).onClose(() => {
				(p6 = -1, N8(R.user.cursor_id));
			}),

			requestAnimationFrame(() => {
				sQ($[R.user.cursor_id]);
			})
		);
	}

	window.freeCursor = async ($) => {
		let Q = await b$({ code: $ });

		if (Q) return (console.warn(`freeCursor: ${Q}`), !1);

		return (console.log("Unlocked! Open the inventory to equip it."), !0);

		let J = "You like looking for secrets, don't you? On an unrelated note, consider checking out the amazing people who made this site: https://yui.dev and https://github.com/brennenawana";
	};

	var rQ = new Map(), j$ = ($, Q) => rQ.set($, Q);

	j$(0, ($) => {
		if (typeof $.paintRemaining == "number") (
			R.nextRefill = $.nextRefillAt || 0,
			R.setPaintRemaining($.paintRemaining),
			s0()
		);
	});

	j$(8, ($) => {
		if ((F$.receive($), $.kind === "cursor_unlock")) z5();
	});

	j$(9, () => {});
	j$(10, () => {});

	j$(3, async ($) => {
		if ($.users) p2($.users);
		if ((_2($.cursorOverflow ?? 0), !$.cursors)) return;

		let Q = $.cursors,
			J = Q instanceof Uint8Array
				? Q
				: Q.buffer instanceof Uint8Array ? Q.buffer : new Uint8Array(Q.buffer ?? Q),
			Y = new DataView(J.buffer, J.byteOffset, J.byteLength);

		for (let q = 0; q + 8 <= J.length; q += 8) {
			let Z = Y.getUint32(q, !0),
				K = Y.getUint32(q + 4, !0);

			if ((b2(K, Z, !0), H8 && q % 4000 == 0)) await P1();
		}
	});

	j$(5, ($) => c2($.id));

	j$(2, ($) => {
		(
			R.connectionId = $.id,
			$.users.forEach(mQ),
			R.openAt = $.openAt ?? 0,
			R.clockOffset = $.now ? $.now - Date.now() : 0,
			AY()
		);
	});

	j$(6, ($) => {
		if ((
			TY($.id, $.message, $.pos, $.username, $.clanName, $.isGlobal, $.userId),
			$.nonce
		)) return;

		if (!R0.has($.id)) {
			NQ($.id);

			return;
		}

		IY(R0.get($.id), $.message);
	});

	j$(11, ($) => {
		EY($.userId);
	});

	j$(7, async ($) => {
		let Q = 0;

		if ($.pixels) {
			let J = $.pixels,
				Y = J instanceof Uint8Array
					? J
					: J.buffer instanceof Uint8Array ? J.buffer : new Uint8Array(J.buffer ?? J),
				q = new DataView(Y.buffer, Y.byteOffset, Y.byteLength);

			for (let Z = 0; Z + 5 <= Y.byteLength; Z += 5) (t1(q.getUint32(Z, !0), q.getUint8(Z + 4)), Q++);
		}

		if (Q) FY();
	});

	function wY() {
		let $ = G("div.list.box.outset", G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")), G("div.item.box.online-modal.online-modal-loading", G("i", "Loading online users…")), {
				style: {
					maxHeight: "600px",
					overflowY: "auto",
					justifyContent: "unset"
				}
			}),
			Q = new _("Online Users", G("div.leaderboard-modal", G("p.online-modal-count", G("b#online-modal-count", H0(R.onlinePlayers || 1)), " players online"), G("p.online-modal-viewers", G("b#online-modal-viewers", H0(R.onlineViewers || 0)), " watching"), $));

		NY().then((J) => {
			if (!Q.open) return;

			(
				EZ($, J.users ?? [], J.total ?? 0),
				mY(J.viewers ?? R.onlineViewers)
			);
		}).catch(() => {
			if (!Q.open) return;

			let J = $.querySelector(".online-modal-loading");

			if (J) J.textContent = "Couldn't load the user list.";
		});
	}

	function EZ($, Q, J) {
		let Y = R.user?.username;

		if (Y) Q = Q.filter((j) => j.username !== Y);

		let q = (j) => {
				let X = R0.get(j.id);

				return !!X && !X.partial && !X.hidden;
			},
			Z = [...Q].sort((j, X) => {
				let V = q(j) ? 0 : 1, L = q(X) ? 0 : 1;

				if (V !== L) return V - L;

				return j.username.localeCompare(X.username);
			}),
			K = G("div.item.box.online-modal", G("b", R.user?.username || "anonymous", " (you!)")),
			W = Z.map((j) => G(
				"div.item.box.online-modal.online-modal-row.tooltip" + (q(j) ? ".online-modal-visible" : ""),
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

	function hY($, Q) {
		let J = u("#online-modal-count");

		if (J) J.textContent = H0($ || 1);
		if (Q !== void 0) mY(Q);
	}

	function mY($) {
		let Q = u("#online-modal-viewers");

		if (Q) Q.textContent = H0($ || 0);
	}

	var BY = 0;

	async function iQ() {
		if ((clearTimeout(BY), !U5())) return;

		BY = setTimeout(iQ, XJ);

		let $ = performance.now(),
			Q = await f$(0, {}, jJ),
			J = Q.connectedUsers ?? R.onlinePlayers,
			Y = Q.viewers ?? R.onlineViewers;

		if ((
			R.onlinePlayers = J,
			R.onlineViewers = Y,
			R.debug.ping = performance.now() - $,
			R.activeTool == 3
		)) {
			let q = u("#online-player-counter");

			if (q) q.textContent = H0(J);
		}

		(hY(J, Y), zY(J, Y), d8());
	}

	function OY() {
		(setInterval(e2, W0.canvas.syncInterval), c6());
	}

	var IZ = (() => {
		let $ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;

		return (Q) => $.call(Q);
	})();

	function l$($) {
		return IZ($) === "Uint8Array";
	}

	function T4($) {
		return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && ($[Symbol.toStringTag] === "ArrayBuffer" || $[Symbol.toStringTag] === "SharedArrayBuffer");
	}

	function t8($) {
		return $ instanceof RegExp || Object.prototype.toString.call($) === "[object RegExp]";
	}

	function E4($) {
		return typeof $ === "object" && $ != null && Symbol.toStringTag in $ && $[Symbol.toStringTag] === "Map";
	}

	function a8($) {
		return $ instanceof Date || Object.prototype.toString.call($) === "[object Date]";
	}

	function c0($, Q) {
		return JSON.stringify($, (J, Y) => {
			if (typeof Y === "bigint") return { $numberLong: `${Y}` }; else if (E4(Y)) return Object.fromEntries(Y);

			return Y;
		});
	}

	function wZ($) {
		if ($ != null && typeof $ === "object" && "stylize" in $ && typeof $.stylize === "function") return $.stylize;
	}

	var C8 = 7,
		i8 = Symbol.for("@@mdb.bson.version"),
		u6 = 2147483647,
		d6 = -2147483648,
		aY = Math.pow(2, 63) - 1,
		sY = -Math.pow(2, 63),
		rY = Math.pow(2, 53),
		iY = -Math.pow(2, 53),
		I4 = 1,
		eY = 2,
		w4 = 3,
		$3 = 4,
		h4 = 5,
		hZ = 6,
		Q3 = 7,
		J3 = 8,
		Y3 = 9,
		m4 = 10,
		D5 = 11,
		mZ = 12,
		N4 = 13,
		G3 = 14,
		q3 = 15,
		l6 = 16,
		Z3 = 17,
		B4 = 18,
		K3 = 19,
		F3 = 255,
		W3 = 127,
		NZ = 0,
		O4 = 4,
		BZ = Object.freeze({
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

	class C extends Error {
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

	class A8 extends C {
		get name() {
			return "BSONVersionError";
		}

		constructor() {
			super(`Unsupported BSON version, bson types must be from bson ${C8}.x.x`);
		}
	}

	class C5 extends C {
		get name() {
			return "BSONRuntimeError";
		}

		constructor($) {
			super($);
		}
	}

	class X$ extends C {
		get name() {
			return "BSONOffsetError";
		}

		offset;

		constructor($, Q, J) {
			super(`${$}. offset: ${Q}`, J);
			this.offset = Q;
		}
	}

	var SY, _Y;

	function j3($, Q, J, Y) {
		if (Y) {
			SY ??= new TextDecoder("utf8", { fatal: !0 });

			try {
				return SY.decode($.subarray(Q, J));
			} catch(q) {
				throw new C("Invalid UTF-8 string in BSON document", { cause: q });
			}
		}

		return (
			_Y ??= new TextDecoder("utf8", { fatal: !1 }),
			_Y.decode($.subarray(Q, J))
		);
	}

	function X3($, Q, J) {
		if ($.length === 0) return "";

		let Y = J - Q;

		if (Y === 0) return "";
		if (Y > 20) return null;
		if (Y === 1 && $[Q] < 128) return String.fromCharCode($[Q]);
		if (Y === 2 && $[Q] < 128 && $[Q + 1] < 128) return String.fromCharCode($[Q]) + String.fromCharCode($[Q + 1]);
		if (Y === 3 && $[Q] < 128 && $[Q + 1] < 128 && $[Q + 2] < 128) return String.fromCharCode($[Q]) + String.fromCharCode($[Q + 1]) + String.fromCharCode($[Q + 2]);

		let q = [];

		for (let Z = Q; Z < J; Z++) {
			let K = $[Z];

			if (K > 127) return null;

			q.push(K);
		}

		return String.fromCharCode(...q);
	}

	function OZ($, Q, J) {
		if (Q.length === 0) return 0;
		if (Q.length > 25) return null;
		if ($.length - J < Q.length) return null;

		for (let Y = 0, q = J; Y < Q.length; (Y++, q++)) {
			let Z = Q.charCodeAt(Y);

			if (Z > 127) return null;

			$[q] = Z;
		}

		return Q.length;
	}

	function SZ($) {
		return o0.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
	}

	function _Z($) {
		return crypto.getRandomValues(o0.allocate($));
	}

	var yZ = (() => {
			let { crypto: $ } = globalThis;

			if ($ != null && typeof $.getRandomValues === "function") return _Z; else return SZ;
		})(),
		o0 = {
			isUint8Array: l$,
			toLocalBufferType($) {
				if (Buffer.isBuffer($)) return $;
				if (ArrayBuffer.isView($)) return Buffer.from($.buffer, $.byteOffset, $.byteLength);

				let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

				if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return Buffer.from($);

				throw new C("Cannot create Buffer from the passed potentialBuffer.");
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

			copy($, Q, J, Y, q) {
				return o0.toLocalBufferType($).copy(Q, J ?? 0, Y ?? 0, q ?? $.length);
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
				let q = J - Q <= 20 ? X3($, Q, J) : null;

				if (q != null) return q;

				let Z = o0.toLocalBufferType($).toString("utf8", Q, J);

				if (Y) {
					for (let K = 0; K < Z.length; K++) if (Z.charCodeAt(K) === 65533) {
						j3($, Q, J, !0);

						break;
					}
				}

				return Z;
			},

			utf8ByteLength($) {
				return Buffer.byteLength($, "utf8");
			},

			encodeUTF8Into($, Q, J) {
				let Y = OZ($, Q, J);

				if (Y != null) return Y;

				return o0.toLocalBufferType($).write(Q, J, void 0, "utf8");
			},
			randomBytes: yZ,
			swap32($) {
				return o0.toLocalBufferType($).swap32();
			}
		};

	function gZ() {
		let { navigator: $ } = globalThis;

		return typeof $ === "object" && $.product === "ReactNative";
	}

	function vZ($) {
		if ($ < 0) throw new RangeError(`The argument 'byteLength' is invalid. Received ${$}`);

		return D8.fromNumberArray(Array.from({ length: $ }, () => Math.floor(Math.random() * 256)));
	}

	var xZ = (() => {
			let { crypto: $ } = globalThis;

			if ($ != null && typeof $.getRandomValues === "function") return (Q) => {
				return $.getRandomValues(D8.allocate(Q));
			}; else {
				if (gZ()) {
					let { console: Q } = globalThis;

					Q?.warn?.("BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.");
				}

				return vZ;
			}
		})(),
		yY = /(\d|[a-f])/i,
		D8 = {
			isUint8Array: l$,
			toLocalBufferType($) {
				let Q = $?.[Symbol.toStringTag] ?? Object.prototype.toString.call($);

				if (Q === "Uint8Array") return $;
				if (ArrayBuffer.isView($)) return new Uint8Array($.buffer.slice($.byteOffset, $.byteOffset + $.byteLength));
				if (Q === "ArrayBuffer" || Q === "SharedArrayBuffer" || Q === "[object ArrayBuffer]" || Q === "[object SharedArrayBuffer]") return new Uint8Array($);

				throw new C("Cannot make a Uint8Array from passed potentialBuffer.");
			},

			allocate($) {
				if (typeof $ !== "number") throw new TypeError(`The "size" argument must be of type number. Received ${String($)}`);

				return new Uint8Array($);
			},

			allocateUnsafe($) {
				return D8.allocate($);
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
				if ($.length === 0) return D8.allocate(0);

				let Q = 0;

				for (let q of $) Q += q.length;

				let J = D8.allocate(Q), Y = 0;

				for (let q of $) (J.set(q, Y), Y += q.length);

				return J;
			},

			copy($, Q, J, Y, q) {
				if (q !== void 0 && q < 0) throw new RangeError(`The value of "sourceEnd" is out of range. It must be >= 0. Received ${q}`);
				if ((q = q ?? $.length, Y !== void 0 && (Y < 0 || Y > q))) throw new RangeError(`The value of "sourceStart" is out of range. It must be >= 0 and <= ${q}. Received ${Y}`);
				if ((Y = Y ?? 0, J !== void 0 && J < 0)) throw new RangeError(`The value of "targetStart" is out of range. It must be >= 0. Received ${J}`);

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
				return btoa(D8.toISO88591($));
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
					let q = Q[Y], Z = Q[Y + 1];

					if (!yY.test(q)) break;
					if (!yY.test(Z)) break;

					let K = Number.parseInt(`${q}${Z}`, 16);

					J.push(K);
				}

				return Uint8Array.from(J);
			},

			toHex($) {
				return Array.from($, (Q) => Q.toString(16).padStart(2, "0")).join("");
			},

			toUTF8($, Q, J, Y) {
				let q = J - Q <= 20 ? X3($, Q, J) : null;

				if (q != null) return q;

				return j3($, Q, J, Y);
			},

			utf8ByteLength($) {
				return new TextEncoder().encode($).byteLength;
			},

			encodeUTF8Into($, Q, J) {
				let Y = new TextEncoder().encode(Q);

				return ($.set(Y, J), Y.byteLength);
			},
			randomBytes: xZ,
			swap32($) {
				if ($.length % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

				for (let Q = 0; Q < $.length; Q += 4) {
					let J = $[Q],
						Y = $[Q + 1],
						q = $[Q + 2],
						Z = $[Q + 3];

					($[Q] = Z, $[Q + 1] = q, $[Q + 2] = Y, $[Q + 3] = J);
				}

				return $;
			}
		},
		pZ = typeof Buffer === "function" && Buffer.prototype?._isBuffer !== !0,
		U = pZ ? o0 : D8,
		S4 = Symbol.for("@@mdb.bson.type");

	class v0 {
		get [S4]() {
			return this._bsontype;
		}

		get [i8]() {
			return C8;
		}

		[Symbol.for("nodejs.util.inspect.custom")]($, Q, J) {
			return this.inspect($, Q, J);
		}
	}

	var s8 = new Float64Array(1),
		$0 = new Uint8Array(s8.buffer, 0, 8);

	s8[0] = -1;

	var eQ = $0[7] === 0,
		f = {
			isBigEndian: eQ,
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

			getFloat64LE: eQ
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
						s8[0]
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
						s8[0]
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
				let Y = 0xffffffffn, q = Number(J & Y);

				(
					$[Q] = q,
					q >>= 8,
					$[Q + 1] = q,
					q >>= 8,
					$[Q + 2] = q,
					q >>= 8,
					$[Q + 3] = q
				);

				let Z = Number(J >> 32n & Y);

				return (
					$[Q + 4] = Z,
					Z >>= 8,
					$[Q + 5] = Z,
					Z >>= 8,
					$[Q + 6] = Z,
					Z >>= 8,
					$[Q + 7] = Z,
					8
				);
			},

			setFloat64LE: eQ
				? ($, Q, J) => {
					return (
						s8[0] = J,
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
						s8[0] = J,
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

			if ($ != null && typeof $ === "string" && !ArrayBuffer.isView($) && !T4($) && !Array.isArray($)) throw new C("Binary can only be constructed from Uint8Array or number[]");

			if ((
				this.sub_type = Q ?? o.BSON_BINARY_SUBTYPE_DEFAULT,
				$ == null
			)) (this.buffer = U.allocate(o.BUFFER_SIZE), this.position = 0); else (
				this.buffer = Array.isArray($) ? U.fromNumberArray($) : U.toLocalBufferType($),
				this.position = this.buffer.byteLength
			);
		}

		put($) {
			if (typeof $ === "string" && $.length !== 1) throw new C("only accepts single character String"); else if (typeof $ !== "number" && $.length !== 1) throw new C("only accepts single character Uint8Array or Array");

			let Q;

			if (typeof $ === "string") Q = $.charCodeAt(0); else if (typeof $ === "number") Q = $; else Q = $[0];
			if (Q < 0 || Q > 255) throw new C("only accepts number in a valid unsigned byte range 0-255");

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
			); else if (typeof $ === "string") throw new C("input cannot be string");
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
			if (($ = $ || {}, this.sub_type === o.SUBTYPE_VECTOR)) E$(this);

			let Q = U.toBase64(this.buffer),
				J = Number(this.sub_type).toString(16);

			if ($.legacy) return { $binary: Q, $type: J.length === 1 ? "0" + J : J };

			return {
				$binary: { base64: Q, subType: J.length === 1 ? "0" + J : J }
			};
		}

		toUUID() {
			if (this.sub_type === o.SUBTYPE_UUID) return new I0(this.buffer.subarray(0, this.position));

			throw new C(`Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${o.SUBTYPE_UUID}" is currently supported.`);
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

			if (!J) throw new C(`Unexpected Binary Extended JSON format ${JSON.stringify($)}`);

			return Y === O4 ? new I0(J) : new o(J, Y);
		}

		inspect($, Q, J) {
			J ??= c0;

			let Y = U.toBase64(this.buffer.subarray(0, this.position)),
				q = J(Y, Q),
				Z = J(this.sub_type, Q);

			return `Binary.createFromBase64(${q}, ${Z})`;
		}

		toInt8Array() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new C("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.Int8) throw new C("Binary datatype field is not Int8");

			return (
				E$(this),
				new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
			);
		}

		toFloat32Array() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new C("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.Float32) throw new C("Binary datatype field is not Float32");

			E$(this);

			let $ = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));

			if (f.isBigEndian) U.swap32($);

			return new Float32Array($.buffer);
		}

		toPackedBits() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new C("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new C("Binary datatype field is not packed bit");

			return (
				E$(this),
				new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position))
			);
		}

		toBits() {
			if (this.sub_type !== o.SUBTYPE_VECTOR) throw new C("Binary sub_type is not Vector");
			if (this.buffer[0] !== o.VECTOR_TYPE.PackedBit) throw new C("Binary datatype field is not packed bit");

			E$(this);

			let Q = (this.length() - 2) * 8 - this.buffer[1],
				J = new Int8Array(Q);

			for (let Y = 0; Y < J.length; Y++) {
				let q = Y / 8 | 0,
					Z = this.buffer[q + 2],
					K = 7 - Y % 8,
					W = Z >> K & 1;

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

			return (E$(Y), Y);
		}

		static fromFloat32Array($) {
			let Q = U.allocate($.byteLength + 2);

			(Q[0] = o.VECTOR_TYPE.Float32, Q[1] = 0);

			let J = new Uint8Array($.buffer, $.byteOffset, $.byteLength);

			if ((Q.set(J, 2), f.isBigEndian)) U.swap32(new Uint8Array(Q.buffer, 2));

			let Y = new this(Q, this.SUBTYPE_VECTOR);

			return (E$(Y), Y);
		}

		static fromPackedBits($, Q = 0) {
			let J = U.allocate($.byteLength + 2);

			(J[0] = o.VECTOR_TYPE.PackedBit, J[1] = Q, J.set($, 2));

			let Y = new this(J, this.SUBTYPE_VECTOR);

			return (E$(Y), Y);
		}

		static fromBits($) {
			let Q = $.length + 7 >>> 3,
				J = new Uint8Array(Q + 2);

			J[0] = o.VECTOR_TYPE.PackedBit;

			let Y = $.length % 8;

			J[1] = Y === 0 ? 0 : 8 - Y;

			for (let q = 0; q < $.length; q++) {
				let Z = q >>> 3, K = $[q];

				if (K !== 0 && K !== 1) throw new C(`Invalid bit value at ${q}: must be 0 or 1, found ${$[q]}`);
				if (K === 0) continue;

				let W = 7 - q % 8;

				J[Z + 2] |= K << W;
			}

			return new this(J, o.SUBTYPE_VECTOR);
		}
	}

	function E$($) {
		if ($.sub_type !== o.SUBTYPE_VECTOR) return;

		let Q = $.position,
			J = $.buffer[0],
			Y = $.buffer[1];

		if ((J === o.VECTOR_TYPE.Float32 || J === o.VECTOR_TYPE.Int8) && Y !== 0) throw new C("Invalid Vector: padding must be zero for int8 and float32 vectors");

		if (J === o.VECTOR_TYPE.Float32) {
			if (Q !== 0 && Q - 2 !== 0 && (Q - 2) % 4 !== 0) throw new C("Invalid Vector: Float32 vector must contain a multiple of 4 bytes");
		}

		if (J === o.VECTOR_TYPE.PackedBit && Y !== 0 && Q === 2) throw new C("Invalid Vector: padding must be zero for packed bit vectors that are empty");
		if (J === o.VECTOR_TYPE.PackedBit && Y > 7) throw new C(`Invalid Vector: padding must be a value between 0 and 7. found: ${Y}`);
	}

	var $4 = 16,
		cZ = /^[0-9A-F]{32}$/i,
		bZ = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;

	class I0 extends o {
		constructor($) {
			let Q;

			if ($ == null) Q = I0.generate(); else if ($ instanceof I0) Q = U.toLocalBufferType(new Uint8Array($.buffer)); else if (ArrayBuffer.isView($) && $.byteLength === $4) Q = U.toLocalBufferType($); else if (typeof $ === "string") Q = I0.bytesFromString($); else throw new C("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");

			super(Q, O4);
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
			let $ = U.randomBytes($4);

			return ($[6] = $[6] & 15 | 64, $[8] = $[8] & 63 | 128, $);
		}

		static isValid($) {
			if (!$) return !1;
			if (typeof $ === "string") return I0.isValidUUIDString($);
			if (l$($)) return $.byteLength === $4;

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
			if (!I0.isValidUUIDString($)) throw new C("UUID string representation must be 32 hex digits or canonical hyphenated representation");

			return U.fromHex($.replace(/-/g, ""));
		}

		static isValidUUIDString($) {
			return cZ.test($) || bZ.test($);
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
				q = Y.includes(`
`);

			if (this.scope != null) Y += `,${q
				? `
`
				: " "}${J(this.scope, Q)}`;

			let Z = q && this.scope === null;

			return `new Code(${q
				? `
`
				: ""}${Y}${Z
				? `
`
				: ""})`;
		}
	}

	function H3($) {
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

			let q = $.split(".");

			if (q.length === 2) (J = q.shift(), $ = q.shift());

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

	function V3($) {
		if ($ === "") return $;

		let Q = 0, J = $[Q] === "-", Y = $[Q] === "+";

		if (Y || J) Q += 1;

		let q = !1;

		for (; Q < $.length && $[Q] === "0"; ++Q) q = !0;

		if (!q) return Y ? $.slice(1) : $;

		return `${J ? "-" : ""}${$.length === Q ? "0" : $.slice(Q)}`;
	}

	function fZ($, Q) {
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

	var gY = 65536,
		lZ = 16777216,
		r8 = gY * gY,
		P3 = r8 * r8,
		vY = P3 / 2,
		xY = {},
		pY = {},
		uZ = 20,
		dZ = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;

	class P extends v0 {
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
				Z = typeof $ === "string"
					? P.fromString($, Y)
					: typeof $ === "bigint"
						? P.fromBigInt($, Y)
						: { low: $ | 0, high: q | 0, unsigned: Y };

			(
				this.low = Z.low,
				this.high = Z.high,
				this.unsigned = Z.unsigned
			);
		}

		static TWO_PWR_24 = P.fromInt(lZ);
		static MAX_UNSIGNED_VALUE = P.fromBits(-1, -1, !0);
		static ZERO = P.fromInt(0);
		static UZERO = P.fromInt(0, !0);
		static ONE = P.fromInt(1);
		static UONE = P.fromInt(1, !0);
		static NEG_ONE = P.fromInt(-1);
		static MAX_VALUE = P.fromBits(-1, 2147483647, !1);
		static MIN_VALUE = P.fromBits(0, -2147483648, !1);

		static fromBits($, Q, J) {
			return new P($, Q, J);
		}

		static fromInt($, Q) {
			let J, Y, q;

			if (Q) {
				if (($ >>>= 0, q = 0 <= $ && $ < 256)) {
					if ((Y = pY[$], Y)) return Y;
				}

				if ((J = P.fromBits($, ($ | 0) < 0 ? -1 : 0, !0), q)) pY[$] = J;

				return J;
			} else {
				if (($ |= 0, q = -128 <= $ && $ < 128)) {
					if ((Y = xY[$], Y)) return Y;
				}

				if ((J = P.fromBits($, $ < 0 ? -1 : 0, !1), q)) xY[$] = J;

				return J;
			}
		}

		static fromNumber($, Q) {
			if (isNaN($)) return Q ? P.UZERO : P.ZERO;

			if (Q) {
				if ($ < 0) return P.UZERO;
				if ($ >= P3) return P.MAX_UNSIGNED_VALUE;
			} else {
				if ($ <= -vY) return P.MIN_VALUE;
				if ($ + 1 >= vY) return P.MAX_VALUE;
			}

			if ($ < 0) return P.fromNumber(-$, Q).neg();

			return P.fromBits($ % r8 | 0, $ / r8 | 0, Q);
		}

		static fromBigInt($, Q) {
			let J = 0xffffffffn, Y = 32n;

			return new P(Number($ & J), Number($ >> Y & J), Q);
		}

		static _fromString($, Q, J) {
			if ($.length === 0) throw new C("empty string");
			if (J < 2 || 36 < J) throw new C("radix");

			let Y;

			if ((Y = $.indexOf("-")) > 0) throw new C("interior hyphen"); else if (Y === 0) return P._fromString($.substring(1), Q, J).neg();

			let q = P.fromNumber(Math.pow(J, 8)), Z = P.ZERO;

			for (let K = 0; K < $.length; K += 8) {
				let W = Math.min(8, $.length - K),
					F = parseInt($.substring(K, K + W), J);

				if (W < 8) {
					let H = P.fromNumber(Math.pow(J, W));

					Z = Z.mul(H).add(P.fromNumber(F));
				} else (Z = Z.mul(q), Z = Z.add(P.fromNumber(F)));
			}

			return (Z.unsigned = Q, Z);
		}

		static fromStringStrict($, Q, J) {
			let Y = !1;

			if (typeof Q === "number") (J = Q, Q = !1); else Y = !!Q;
			if ((J ??= 10, $.trim() !== $)) throw new C(`Input: '${$}' contains leading and/or trailing whitespace`);
			if (!fZ($, J)) throw new C(`Input: '${$}' contains invalid characters for radix: ${J}`);

			let q = V3($), Z = P._fromString(q, Y, J);

			if (Z.toString(J).toLowerCase() !== q.toLowerCase()) throw new C(`Input: ${$} is not representable as ${Z.unsigned ? "an unsigned" : "a signed"} 64-bit Long ${J != null ? `with radix: ${J}` : ""}`);

			return Z;
		}

		static fromString($, Q, J) {
			let Y = !1;

			if (typeof Q === "number") (J = Q, Q = !1); else Y = !!Q;
			if ((J ??= 10, $ === "NaN" && J < 24)) return P.ZERO; else if (($ === "Infinity" || $ === "+Infinity" || $ === "-Infinity") && J < 35) return P.ZERO;

			return P._fromString($, Y, J);
		}

		static fromBytes($, Q, J) {
			return J ? P.fromBytesLE($, Q) : P.fromBytesBE($, Q);
		}

		static fromBytesLE($, Q) {
			return new P($[0] | $[1] << 8 | $[2] << 16 | $[3] << 24, $[4] | $[5] << 8 | $[6] << 16 | $[7] << 24, Q);
		}

		static fromBytesBE($, Q) {
			return new P($[4] << 24 | $[5] << 16 | $[6] << 8 | $[7], $[0] << 24 | $[1] << 16 | $[2] << 8 | $[3], Q);
		}

		static isLong($) {
			return $ != null && typeof $ === "object" && "__isLong__" in $ && $.__isLong__ === !0;
		}

		static fromValue($, Q) {
			if (typeof $ === "number") return P.fromNumber($, Q);
			if (typeof $ === "string") return P.fromString($, Q);

			return P.fromBits($.low, $.high, typeof Q === "boolean" ? Q : $.unsigned);
		}

		add($) {
			if (!P.isLong($)) $ = P.fromValue($);

			let Q = this.high >>> 16,
				J = this.high & 65535,
				Y = this.low >>> 16,
				q = this.low & 65535,
				Z = $.high >>> 16,
				K = $.high & 65535,
				W = $.low >>> 16,
				F = $.low & 65535,
				H = 0,
				j = 0,
				X = 0,
				V = 0;

			return (
				V += q + F,
				X += V >>> 16,
				V &= 65535,
				X += Y + W,
				j += X >>> 16,
				X &= 65535,
				j += J + K,
				H += j >>> 16,
				j &= 65535,
				H += Q + Z,
				H &= 65535,
				P.fromBits(X << 16 | V, H << 16 | j, this.unsigned)
			);
		}

		and($) {
			if (!P.isLong($)) $ = P.fromValue($);

			return P.fromBits(this.low & $.low, this.high & $.high, this.unsigned);
		}

		compare($) {
			if (!P.isLong($)) $ = P.fromValue($);
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
			if (!P.isLong($)) $ = P.fromValue($);
			if ($.isZero()) throw new C("division by zero");

			if (d0) {
				if (!this.unsigned && this.high === -2147483648 && $.low === -1 && $.high === -1) return this;

				let q = (this.unsigned ? d0.div_u : d0.div_s)(this.low, this.high, $.low, $.high);

				return P.fromBits(q, d0.get_high(), this.unsigned);
			}

			if (this.isZero()) return this.unsigned ? P.UZERO : P.ZERO;

			let Q, J, Y;

			if (!this.unsigned) {
				if (this.eq(P.MIN_VALUE)) if ($.eq(P.ONE) || $.eq(P.NEG_ONE)) return P.MIN_VALUE; else if ($.eq(P.MIN_VALUE)) return P.ONE; else if ((Q = this.shr(1).div($).shl(1), Q.eq(P.ZERO))) return $.isNegative() ? P.ONE : P.NEG_ONE; else return (J = this.sub($.mul(Q)), Y = Q.add(J.div($)), Y); else if ($.eq(P.MIN_VALUE)) return this.unsigned ? P.UZERO : P.ZERO;

				if (this.isNegative()) {
					if ($.isNegative()) return this.neg().div($.neg());

					return this.neg().div($).neg();
				} else if ($.isNegative()) return this.div($.neg()).neg();

				Y = P.ZERO;
			} else {
				if (!$.unsigned) $ = $.toUnsigned();
				if ($.gt(this)) return P.UZERO;
				if ($.gt(this.shru(1))) return P.UONE;

				Y = P.UZERO;
			}

			J = this;

			while (J.gte($)) {
				Q = Math.max(1, Math.floor(J.toNumber() / $.toNumber()));

				let q = Math.ceil(Math.log(Q) / Math.LN2),
					Z = q <= 48 ? 1 : Math.pow(2, q - 48),
					K = P.fromNumber(Q),
					W = K.mul($);

				while (W.isNegative() || W.gt(J)) (Q -= Z, K = P.fromNumber(Q, this.unsigned), W = K.mul($));

				if (K.isZero()) K = P.ONE;

				(Y = Y.add(K), J = J.sub(W));
			}

			return Y;
		}

		div($) {
			return this.divide($);
		}

		equals($) {
			if (!P.isLong($)) $ = P.fromValue($);
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
			if (this.isNegative()) return this.eq(P.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();

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
			if (!P.isLong($)) $ = P.fromValue($);

			if (d0) {
				let Q = (this.unsigned ? d0.rem_u : d0.rem_s)(this.low, this.high, $.low, $.high);

				return P.fromBits(Q, d0.get_high(), this.unsigned);
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
			if (this.isZero()) return P.ZERO;
			if (!P.isLong($)) $ = P.fromValue($);

			if (d0) {
				let L = d0.mul(this.low, this.high, $.low, $.high);

				return P.fromBits(L, d0.get_high(), this.unsigned);
			}

			if ($.isZero()) return P.ZERO;
			if (this.eq(P.MIN_VALUE)) return $.isOdd() ? P.MIN_VALUE : P.ZERO;
			if ($.eq(P.MIN_VALUE)) return this.isOdd() ? P.MIN_VALUE : P.ZERO;
			if (this.isNegative()) if ($.isNegative()) return this.neg().mul($.neg()); else return this.neg().mul($).neg(); else if ($.isNegative()) return this.mul($.neg()).neg();
			if (this.lt(P.TWO_PWR_24) && $.lt(P.TWO_PWR_24)) return P.fromNumber(this.toNumber() * $.toNumber(), this.unsigned);

			let Q = this.high >>> 16,
				J = this.high & 65535,
				Y = this.low >>> 16,
				q = this.low & 65535,
				Z = $.high >>> 16,
				K = $.high & 65535,
				W = $.low >>> 16,
				F = $.low & 65535,
				H = 0,
				j = 0,
				X = 0,
				V = 0;

			return (
				V += q * F,
				X += V >>> 16,
				V &= 65535,
				X += Y * F,
				j += X >>> 16,
				X &= 65535,
				X += q * W,
				j += X >>> 16,
				X &= 65535,
				j += J * F,
				H += j >>> 16,
				j &= 65535,
				j += Y * W,
				H += j >>> 16,
				j &= 65535,
				j += q * K,
				H += j >>> 16,
				j &= 65535,
				H += Q * F + J * W + Y * K + q * Z,
				H &= 65535,
				P.fromBits(X << 16 | V, H << 16 | j, this.unsigned)
			);
		}

		mul($) {
			return this.multiply($);
		}

		negate() {
			if (!this.unsigned && this.eq(P.MIN_VALUE)) return P.MIN_VALUE;

			return this.not().add(P.ONE);
		}

		neg() {
			return this.negate();
		}

		not() {
			return P.fromBits(~this.low, ~this.high, this.unsigned);
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
			if (!P.isLong($)) $ = P.fromValue($);

			return P.fromBits(this.low | $.low, this.high | $.high, this.unsigned);
		}

		shiftLeft($) {
			if (P.isLong($)) $ = $.toInt();
			if (($ &= 63) === 0) return this; else if ($ < 32) return P.fromBits(this.low << $, this.high << $ | this.low >>> 32 - $, this.unsigned); else return P.fromBits(0, this.low << $ - 32, this.unsigned);
		}

		shl($) {
			return this.shiftLeft($);
		}

		shiftRight($) {
			if (P.isLong($)) $ = $.toInt();
			if (($ &= 63) === 0) return this; else if ($ < 32) return P.fromBits(this.low >>> $ | this.high << 32 - $, this.high >> $, this.unsigned); else return P.fromBits(this.high >> $ - 32, this.high >= 0 ? 0 : -1, this.unsigned);
		}

		shr($) {
			return this.shiftRight($);
		}

		shiftRightUnsigned($) {
			if (P.isLong($)) $ = $.toInt();

			if (($ &= 63, $ === 0)) return this; else {
				let Q = this.high;

				if ($ < 32) {
					let J = this.low;

					return P.fromBits(J >>> $ | Q << 32 - $, Q >>> $, this.unsigned);
				} else if ($ === 32) return P.fromBits(Q, 0, this.unsigned); else return P.fromBits(Q >>> $ - 32, 0, this.unsigned);
			}
		}

		shr_u($) {
			return this.shiftRightUnsigned($);
		}

		shru($) {
			return this.shiftRightUnsigned($);
		}

		subtract($) {
			if (!P.isLong($)) $ = P.fromValue($);

			return this.add($.neg());
		}

		sub($) {
			return this.subtract($);
		}

		toInt() {
			return this.unsigned ? this.low >>> 0 : this.low;
		}

		toNumber() {
			if (this.unsigned) return (this.high >>> 0) * r8 + (this.low >>> 0);

			return this.high * r8 + (this.low >>> 0);
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

			return P.fromBits(this.low, this.high, !1);
		}

		toString($) {
			if (($ = $ || 10, $ < 2 || 36 < $)) throw new C("radix");
			if (this.isZero()) return "0";

			if (this.isNegative()) if (this.eq(P.MIN_VALUE)) {
				let q = P.fromNumber($),
					Z = this.div(q),
					K = Z.mul(q).sub(this);

				return Z.toString($) + K.toInt().toString($);
			} else return "-" + this.neg().toString($);

			let Q = P.fromNumber(Math.pow($, 6), this.unsigned),
				J = this,
				Y = "";

			while (!0) {
				let q = J.div(Q),
					K = (J.sub(q.mul(Q)).toInt() >>> 0).toString($);

				if ((J = q, J.isZero())) return K + Y; else {
					while (K.length < 6) K = "0" + K;

					Y = "" + K + Y;
				}
			}
		}

		toUnsigned() {
			if (this.unsigned) return this;

			return P.fromBits(this.low, this.high, !0);
		}

		xor($) {
			if (!P.isLong($)) $ = P.fromValue($);

			return P.fromBits(this.low ^ $.low, this.high ^ $.high, this.unsigned);
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

			if ($.$numberLong.length > uZ) throw new C("$numberLong string is too long");
			if (!dZ.test($.$numberLong)) throw new C(`$numberLong string "${$.$numberLong}" is in an invalid format`);

			if (J) {
				let Z = BigInt($.$numberLong);

				return BigInt.asIntN(64, Z);
			}

			let q = P.fromString($.$numberLong);

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

	var oZ = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
		nZ = /^(\+|-)?(Infinity|inf)$/i,
		tZ = /^(\+|-)?NaN$/i,
		o8 = 6111,
		b6 = -6176,
		cY = 6176,
		bY = 34,
		Q4 = U.fromNumberArray([124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		fY = U.fromNumberArray([248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		lY = U.fromNumberArray([120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse()),
		aZ = /^([-+])?(\d+)?$/,
		sZ = 31,
		uY = 16383,
		rZ = 30,
		iZ = 31;

	function dY($) {
		return !isNaN(parseInt($, 10));
	}

	function eZ($) {
		let Q = P.fromNumber(1e9), J = P.fromNumber(0);

		if (!$.parts[0] && !$.parts[1] && !$.parts[2] && !$.parts[3]) return { quotient: $, rem: J };

		for (let Y = 0; Y <= 3; Y++) (
			J = J.shiftLeft(32),
			J = J.add(new P($.parts[Y], 0)),
			$.parts[Y] = J.div(Q).low,
			J = J.modulo(Q)
		);

		return { quotient: $, rem: J };
	}

	function $K($, Q) {
		if (!$ && !Q) return { high: P.fromNumber(0), low: P.fromNumber(0) };

		let J = $.shiftRightUnsigned(32),
			Y = new P($.getLowBits(), 0),
			q = Q.shiftRightUnsigned(32),
			Z = new P(Q.getLowBits(), 0),
			K = J.multiply(q),
			W = J.multiply(Z),
			F = Y.multiply(q),
			H = Y.multiply(Z);

		return (
			K = K.add(W.shiftRightUnsigned(32)),
			W = new P(W.getLowBits(), 0).add(F).add(H.shiftRightUnsigned(32)),
			K = K.add(W.shiftRightUnsigned(32)),
			H = W.shiftLeft(32).add(new P(H.getLowBits(), 0)),
			{ high: K, low: H }
		);
	}

	function QK($, Q) {
		let J = $.high >>> 0, Y = Q.high >>> 0;

		if (J < Y) return !0; else if (J === Y) {
			let q = $.low >>> 0, Z = Q.low >>> 0;

			if (q < Z) return !0;
		}

		return !1;
	}

	function Q$($, Q) {
		throw new C(`"${$}" is not a valid Decimal128 string - ${Q}`);
	}

	class O0 extends v0 {
		get _bsontype() {
			return "Decimal128";
		}

		bytes;

		constructor($) {
			super();

			if (typeof $ === "string") this.bytes = O0.fromString($).bytes; else if ($ instanceof Uint8Array || l$($)) {
				if ($.byteLength !== 16) throw new C("Decimal128 must take a Buffer of 16 bytes");

				this.bytes = $;
			} else throw new C("Decimal128 must take a Buffer or string");
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
				q = !1,
				Z = !1,
				K = 0,
				W = 0,
				F = 0,
				H = 0,
				j = 0,
				X = [0],
				V = 0,
				L = 0,
				z = 0,
				A = 0,
				g = new P(0, 0),
				O = new P(0, 0),
				M = 0,
				D = 0;

			if ($.length >= 7000) throw new C("" + $ + " not a valid Decimal128 string");

			let y = $.match(oZ),
				w = $.match(nZ),
				h = $.match(tZ);

			if (!y && !w && !h || $.length === 0) throw new C("" + $ + " not a valid Decimal128 string");

			if (y) {
				let E = y[2], S = y[4], n = y[5], J0 = y[6];

				if (S && J0 === void 0) Q$($, "missing exponent power");
				if (S && E === void 0) Q$($, "missing exponent base");
				if (S === void 0 && (n || J0)) Q$($, "missing e before exponent");
			}

			if ($[D] === "+" || $[D] === "-") (Y = !0, J = $[D++] === "-");

			if (!dY($[D]) && $[D] !== ".") {
				if ($[D] === "i" || $[D] === "I") return new O0(J ? fY : lY); else if ($[D] === "N") return new O0(Q4);
			}

			while (dY($[D]) || $[D] === ".") {
				if ($[D] === ".") {
					if (q) Q$($, "contains multiple periods");

					(q = !0, D = D + 1);

					continue;
				}

				if (V < bY) {
					if ($[D] !== "0" || Z) {
						if (!Z) j = W;

						(Z = !0, X[L++] = parseInt($[D], 10), V = V + 1);
					}
				}

				if (Z) F = F + 1;
				if (q) H = H + 1;

				(W = W + 1, D = D + 1);
			}

			if (q && !W) throw new C("" + $ + " not a valid Decimal128 string");

			if ($[D] === "e" || $[D] === "E") {
				let E = $.substr(++D).match(aZ);

				if (!E || !E[2]) return new O0(Q4);

				(A = parseInt(E[0], 10), D = D + E[0].length);
			}

			if ($[D]) return new O0(Q4);
			if (!V) (X[0] = 0, F = 1, V = 1, K = 0); else if ((z = V - 1, K = F, K !== 1)) while ($[j + K - 1 + Number(Y) + Number(q)] === "0") K = K - 1;
			if (A <= H && H > A + 16384) A = b6; else A = A - H;

			while (A > o8) {
				if ((z = z + 1, z >= bY)) {
					if (K === 0) {
						A = o8;

						break;
					}

					Q$($, "overflow");
				}

				A = A - 1;
			}

			if (Q.allowRounding) {
				while (A < b6 || V < F) {
					if (z === 0 && K < V) {
						(A = b6, K = 0);

						break;
					}

					if (V < F) F = F - 1; else z = z - 1;

					if (A < o8) A = A + 1; else {
						if (X.join("").match(/^0+$/)) {
							A = o8;

							break;
						}

						Q$($, "overflow");
					}
				}

				if (z + 1 < K) {
					let E = W;

					if (q) (j = j + 1, E = E + 1);
					if (Y) (j = j + 1, E = E + 1);

					let S = parseInt($[j + z + 1], 10), n = 0;

					if (S >= 5) {
						if ((n = 1, S === 5)) {
							n = X[z] % 2 === 1 ? 1 : 0;

							for (let J0 = j + z + 2; J0 < E; J0++) if (parseInt($[J0], 10)) {
								n = 1;

								break;
							}
						}
					}

					if (n) {
						let J0 = z;

						for (; J0 >= 0; J0--) if (++X[J0] > 9) {
							if ((X[J0] = 0, J0 === 0)) if (A < o8) (A = A + 1, X[J0] = 1); else return new O0(J ? fY : lY);
						} else break;
					}
				}
			} else {
				while (A < b6 || V < F) {
					if (z === 0) {
						if (K === 0) {
							A = b6;

							break;
						}

						Q$($, "exponent underflow");
					}

					if (V < F) {
						if ($[F - 1 + Number(Y) + Number(q)] !== "0" && K !== 0) Q$($, "inexact rounding");

						F = F - 1;
					} else {
						if (X[z] !== 0) Q$($, "inexact rounding");

						z = z - 1;
					}

					if (A < o8) A = A + 1; else Q$($, "overflow");
				}

				if (z + 1 < K) {
					if (q) j = j + 1;
					if (Y) j = j + 1;
					if (parseInt($[j + z + 1], 10) !== 0) Q$($, "inexact rounding");
				}
			}

			if ((g = P.fromNumber(0), O = P.fromNumber(0), K === 0)) (g = P.fromNumber(0), O = P.fromNumber(0)); else if (z < 17) {
				let E = 0;

				(O = P.fromNumber(X[E++]), g = new P(0, 0));

				for (; E <= z; E++) (
					O = O.multiply(P.fromNumber(10)),
					O = O.add(P.fromNumber(X[E]))
				);
			} else {
				let E = 0;

				g = P.fromNumber(X[E++]);

				for (; E <= z - 17; E++) (
					g = g.multiply(P.fromNumber(10)),
					g = g.add(P.fromNumber(X[E]))
				);

				O = P.fromNumber(X[E++]);

				for (; E <= z; E++) (
					O = O.multiply(P.fromNumber(10)),
					O = O.add(P.fromNumber(X[E]))
				);
			}

			let T = $K(g, P.fromString("100000000000000000"));

			if ((T.low = T.low.add(O), QK(T.low, O))) T.high = T.high.add(P.fromNumber(1));

			M = A + cY;

			let B = { low: P.fromNumber(0), high: P.fromNumber(0) };

			if (T.high.shiftRightUnsigned(49).and(P.fromNumber(1)).equals(P.fromNumber(1))) (
				B.high = B.high.or(P.fromNumber(3).shiftLeft(61)),
				B.high = B.high.or(P.fromNumber(M).and(P.fromNumber(16383).shiftLeft(47))),
				B.high = B.high.or(T.high.and(P.fromNumber(140737488355327)))
			); else (
				B.high = B.high.or(P.fromNumber(M & 16383).shiftLeft(49)),
				B.high = B.high.or(T.high.and(P.fromNumber(562949953421311)))
			);

			if ((B.low = T.low, J)) B.high = B.high.or(P.fromString("9223372036854775808"));

			let m = U.allocateUnsafe(16);

			return (
				D = 0,
				m[D++] = B.low.low & 255,
				m[D++] = B.low.low >> 8 & 255,
				m[D++] = B.low.low >> 16 & 255,
				m[D++] = B.low.low >> 24 & 255,
				m[D++] = B.low.high & 255,
				m[D++] = B.low.high >> 8 & 255,
				m[D++] = B.low.high >> 16 & 255,
				m[D++] = B.low.high >> 24 & 255,
				m[D++] = B.high.low & 255,
				m[D++] = B.high.low >> 8 & 255,
				m[D++] = B.high.low >> 16 & 255,
				m[D++] = B.high.low >> 24 & 255,
				m[D++] = B.high.high & 255,
				m[D++] = B.high.high >> 8 & 255,
				m[D++] = B.high.high >> 16 & 255,
				m[D++] = B.high.high >> 24 & 255,
				new O0(m)
			);
		}

		toString() {
			let $, Q = 0, J = new Array(36);

			for (let D = 0; D < J.length; D++) J[D] = 0;

			let Y = 0,
				q = !1,
				Z,
				K = { parts: [0, 0, 0, 0] },
				W,
				F,
				H = [];

			Y = 0;

			let j = this.bytes,
				X = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				V = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				L = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24,
				z = j[Y++] | j[Y++] << 8 | j[Y++] << 16 | j[Y++] << 24;

			if ((
				Y = 0,
				({ low: new P(X, V), high: new P(L, z) }).high.lessThan(P.ZERO)
			)) H.push("-");

			let g = z >> 26 & sZ;

			if (g >> 3 === 3) if (g === rZ) return H.join("") + "Infinity"; else if (g === iZ) return "NaN"; else ($ = z >> 15 & uY, Z = 8 + (z >> 14 & 1)); else (Z = z >> 14 & 7, $ = z >> 17 & uY);

			let O = $ - cY;

			if ((
				K.parts[0] = (z & 16383) + ((Z & 15) << 14),
				K.parts[1] = L,
				K.parts[2] = V,
				K.parts[3] = X,
				K.parts[0] === 0 && K.parts[1] === 0 && K.parts[2] === 0 && K.parts[3] === 0
			)) q = !0; else for (F = 3; F >= 0; F--) {
				let D = 0, y = eZ(K);

				if ((K = y.quotient, D = y.rem.low, !D)) continue;

				for (W = 8; W >= 0; W--) (J[F * 9 + W] = D % 10, D = Math.floor(D / 10));
			}

			if (q) (Q = 1, J[Y] = 0); else {
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

				for (let D = 0; D < Q; D++) H.push(`${J[Y++]}`);

				if ((H.push("E"), M > 0)) H.push(`+${M}`); else H.push(`${M}`);
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

	class J$ extends v0 {
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

			if ($ === "NaN") return new J$(NaN);
			if ($ === "Infinity") return new J$(1 / 0);
			if ($ === "-Infinity") return new J$(-1 / 0);
			if (!Number.isFinite(Q)) throw new C(`Input: ${$} is not representable as a Double`);
			if ($.trim() !== $) throw new C(`Input: '${$}' contains whitespace`);
			if ($ === "") throw new C("Input is an empty string");
			if ((/[^-0-9.+eE]/).test($)) throw new C(`Input: '${$}' is not in decimal or exponential notation`);

			return new J$(Q);
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

			return Q && Q.relaxed ? J : new J$(J);
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
			let Q = V3($), J = Number($);

			if (u6 < J) throw new C(`Input: '${$}' is larger than the maximum value for Int32`); else if (d6 > J) throw new C(`Input: '${$}' is smaller than the minimum value for Int32`); else if (!Number.isSafeInteger(J)) throw new C(`Input: '${$}' is not a safe integer`); else if (J.toString() !== Q) throw new C(`Input: '${$}' is not a valid Int32 string`);

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

	class e8 extends v0 {
		get _bsontype() {
			return "MaxKey";
		}

		toExtendedJSON() {
			return { $maxKey: 1 };
		}

		static fromExtendedJSON() {
			return new e8();
		}

		inspect() {
			return "new MaxKey()";
		}
	}

	class $6 extends v0 {
		get _bsontype() {
			return "MinKey";
		}

		toExtendedJSON() {
			return { $minKey: 1 };
		}

		static fromExtendedJSON() {
			return new $6();
		}

		inspect() {
			return "new MinKey()";
		}
	}

	var L8 = null, f6 = new WeakMap();

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
				if (typeof $.id !== "string" && !ArrayBuffer.isView($.id)) throw new C("Argument passed in must have an id that is of type string or Buffer");
				if ("toHexString" in $ && typeof $.toHexString === "function") Q = U.fromHex($.toHexString()); else Q = $.id;
			} else Q = $;

			if (Q == null) this.buffer = j0.generate(); else if (ArrayBuffer.isView(Q) && Q.byteLength === 12) this.buffer = U.toLocalBufferType(Q); else if (typeof Q === "string") if (j0.validateHexString(Q)) {
				if ((this.buffer = U.fromHex(Q), j0.cacheHexString)) f6.set(this, Q);
			} else throw new C("input must be a 24 character hex string, 12 byte Uint8Array, or an integer"); else throw new C("Argument passed in does not match the accepted types");
		}

		get id() {
			return this.buffer;
		}

		set id($) {
			if ((this.buffer = $, j0.cacheHexString)) f6.set(this, U.toHex($));
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
				let Q = f6.get(this);

				if (Q) return Q;
			}

			let $ = U.toHex(this.id);

			if (j0.cacheHexString) f6.set(this, $);

			return $;
		}

		static getInc() {
			return j0.index = (j0.index + 1) % 16777215;
		}

		static generate($) {
			if (typeof $ !== "number") $ = Math.floor(Date.now() / 1000);

			let Q = j0.getInc(), J = U.allocateUnsafe(12);

			if ((f.setInt32BE(J, 0, $), L8 === null)) L8 = U.randomBytes(5);

			return (
				J[4] = L8[0],
				J[5] = L8[1],
				J[6] = L8[2],
				J[7] = L8[3],
				J[8] = L8[4],
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
			let Q = U.allocate(12);

			for (let J = 11; J >= 4; J--) Q[J] = 0;

			return (f.setInt32BE(Q, 0, $), new j0(Q));
		}

		static createFromHexString($) {
			if ($?.length !== 24) throw new C("hex string must be 24 characters");

			return new j0(U.fromHex($));
		}

		static createFromBase64($) {
			if ($?.length !== 16) throw new C("base64 string must be 16 characters");

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
			return j0.cacheHexString && f6.has(this);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new ObjectId(${J(this.toHexString(), Q)})`);
		}
	}

	function k5($, Q, J) {
		let Y = 5;

		if (Array.isArray($)) for (let q = 0; q < $.length; q++) Y += oY(q.toString(), $[q], Q, !0, J); else {
			if (typeof $?.toBSON === "function") $ = $.toBSON();

			for (let q of Object.keys($)) Y += oY(q, $[q], Q, !1, J);
		}

		return Y;
	}

	function oY($, Q, J = !1, Y = !1, q = !1) {
		if (typeof Q?.toBSON === "function") Q = Q.toBSON();

		switch (typeof Q) {
			case "string":
				return 1 + U.utf8ByteLength($) + 1 + 4 + U.utf8ByteLength(Q) + 1;

			case "number":
				if (Math.floor(Q) === Q && Q >= iY && Q <= rY) if (Q >= d6 && Q <= u6) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 5; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9;

			case "undefined":
				if (Y || !q) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1;
				return 0;

			case "boolean":
				return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 2;

			case "object":
				if (Q != null && typeof Q._bsontype === "string" && Q[i8] !== C8) throw new A8(); else if (Q == null || Q._bsontype === "MinKey" || Q._bsontype === "MaxKey") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1; else if (Q._bsontype === "ObjectId") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 13; else if (Q instanceof Date || a8(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else if (ArrayBuffer.isView(Q) || Q instanceof ArrayBuffer || T4(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 6 + Q.byteLength; else if (Q._bsontype === "Long" || Q._bsontype === "Double" || Q._bsontype === "Timestamp") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9; else if (Q._bsontype === "Decimal128") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 17; else if (Q._bsontype === "Code") if (Q.scope != null && Object.keys(Q.scope).length > 0) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + 4 + U.utf8ByteLength(Q.code.toString()) + 1 + k5(Q.scope, J, q); else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + U.utf8ByteLength(Q.code.toString()) + 1; else if (Q._bsontype === "Binary") {
					let Z = Q;

					if (Z.sub_type === o.SUBTYPE_BYTE_ARRAY) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + (Z.position + 1 + 4 + 1 + 4); else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + (Z.position + 1 + 4 + 1);
				} else if (Q._bsontype === "Symbol") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + U.utf8ByteLength(Q.value) + 4 + 1 + 1; else if (Q._bsontype === "DBRef") {
					let Z = Object.assign({ $ref: Q.collection, $id: Q.oid }, Q.fields);

					if (Q.db != null) Z.$db = Q.db;

					return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + k5(Z, J, q);
				} else if (Q instanceof RegExp || t8(Q)) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + U.utf8ByteLength(Q.source) + 1 + (Q.global ? 1 : 0) + (Q.ignoreCase ? 1 : 0) + (Q.multiline ? 1 : 0) + 1; else if (Q._bsontype === "BSONRegExp") return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + U.utf8ByteLength(Q.pattern) + 1 + U.utf8ByteLength(Q.options) + 1; else return ($ != null ? U.utf8ByteLength($) + 1 : 0) + k5(Q, J, q) + 1;

			case "function":
				if (J) return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 1 + 4 + U.utf8ByteLength(Q.toString()) + 1;
				return 0;

			case "bigint":
				return ($ != null ? U.utf8ByteLength($) + 1 : 0) + 9;

			case "symbol":
				return 0;

			default:
				throw new C(`Unrecognized JS type: ${typeof Q}`);
		}
	}

	function JK($) {
		return $.split("").sort().join("");
	}

	class Y$ extends v0 {
		get _bsontype() {
			return "BSONRegExp";
		}

		pattern;
		options;

		constructor($, Q) {
			super();

			if ((
				this.pattern = $,
				this.options = JK(Q ?? ""),
				this.pattern.indexOf("\x00") !== -1
			)) throw new C(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);

			if (this.options.indexOf("\x00") !== -1) throw new C(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);

			for (let J = 0; J < this.options.length; J++) if (!(this.options[J] === "i" || this.options[J] === "m" || this.options[J] === "x" || this.options[J] === "l" || this.options[J] === "s" || this.options[J] === "u")) throw new C(`The regular expression option [${this.options[J]}] is not supported`);
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
			} else return new Y$($.$regex, Y$.parseOptions($.$options));

			if ("$regularExpression" in $) return new Y$($.$regularExpression.pattern, Y$.parseOptions($.$regularExpression.options));

			throw new C(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify($)}`);
		}

		inspect($, Q, J) {
			let Y = wZ(Q) ?? ((K) => K);

			J ??= c0;

			let q = Y(J(this.pattern), "regexp"),
				Z = Y(J(this.options), "regexp");

			return `new BSONRegExp(${q}, ${Z})`;
		}
	}

	class Q6 extends v0 {
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
			return new Q6($.$symbol);
		}

		inspect($, Q, J) {
			return (J ??= c0, `new BSONSymbol(${J(this.value, Q)})`);
		}
	}

	var YK = P;

	class H$ extends YK {
		get _bsontype() {
			return "Timestamp";
		}

		get [S4]() {
			return "Timestamp";
		}

		static MAX_VALUE = P.MAX_UNSIGNED_VALUE;

		get i() {
			return this.low >>> 0;
		}

		get t() {
			return this.high >>> 0;
		}

		constructor($) {
			if ($ == null) super(0, 0, !0); else if (typeof $ === "bigint") super($, !0); else if (P.isLong($)) super($.low, $.high, !0); else if (typeof $ === "object" && "t" in $ && "i" in $) {
				if (typeof $.t !== "number" && (typeof $.t !== "object" || $.t._bsontype !== "Int32")) throw new C("Timestamp constructed from { t, i } must provide t as a number");
				if (typeof $.i !== "number" && (typeof $.i !== "object" || $.i._bsontype !== "Int32")) throw new C("Timestamp constructed from { t, i } must provide i as a number");

				let Q = Number($.t), J = Number($.i);

				if (Q < 0 || Number.isNaN(Q)) throw new C("Timestamp constructed from { t, i } must provide a positive t");
				if (J < 0 || Number.isNaN(J)) throw new C("Timestamp constructed from { t, i } must provide a positive i");
				if (Q > 4294967295) throw new C("Timestamp constructed from { t, i } must provide t equal or less than uint32 max");
				if (J > 4294967295) throw new C("Timestamp constructed from { t, i } must provide i equal or less than uint32 max");

				super(J, Q, !0);
			} else throw new C("A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }");
		}

		toJSON() {
			return { $timestamp: this.toString() };
		}

		static fromInt($) {
			return new H$(P.fromInt($, !0));
		}

		static fromNumber($) {
			return new H$(P.fromNumber($, !0));
		}

		static fromBits($, Q) {
			return new H$({ i: $, t: Q });
		}

		static fromString($, Q) {
			return new H$(P.fromString($, !0, Q));
		}

		toExtendedJSON() {
			return { $timestamp: { t: this.t, i: this.i } };
		}

		static fromExtendedJSON($) {
			let Q = P.isLong($.$timestamp.i) ? $.$timestamp.i.getLowBitsUnsigned() : $.$timestamp.i,
				J = P.isLong($.$timestamp.t) ? $.$timestamp.t.getLowBitsUnsigned() : $.$timestamp.t;

			return new H$({ t: J, i: Q });
		}

		inspect($, Q, J) {
			J ??= c0;

			let Y = J(this.t, Q), q = J(this.i, Q);

			return `new Timestamp({ t: ${Y}, i: ${q} })`;
		}
	}

	var GK = P.fromNumber(rY), qK = P.fromNumber(iY);

	function R3($, Q, J) {
		Q = Q == null ? {} : Q;

		let Y = Q && Q.index ? Q.index : 0,
			q = f.getInt32LE($, Y);

		if (q < 5) throw new C(`bson size must be >= 5, is ${q}`);
		if (Q.allowObjectSmallerThanBufferSize && $.length < q) throw new C(`buffer length ${$.length} must be >= bson size ${q}`);
		if (!Q.allowObjectSmallerThanBufferSize && $.length !== q) throw new C(`buffer length ${$.length} must === bson size ${q}`);
		if (q + Y > $.byteLength) throw new C(`(bson size ${q} + options.index ${Y} must be <= buffer length ${$.byteLength})`);
		if ($[Y + q - 1] !== 0) throw new C("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");

		return L5($, Y, Q, J);
	}

	var ZK = /^\$ref$|^\$id$|^\$db$/;

	function L5($, Q, J, Y = !1) {
		let q = J.fieldsAsRaw == null ? null : J.fieldsAsRaw,
			Z = J.raw == null ? !1 : J.raw,
			K = typeof J.bsonRegExp === "boolean" ? J.bsonRegExp : !1,
			W = J.promoteBuffers ?? !1,
			F = J.promoteLongs ?? !0,
			H = J.promoteValues ?? !0,
			j = J.useBigInt64 ?? !1;

		if (j && !H) throw new C("Must either request bigint or Long for int64 deserialization");
		if (j && !F) throw new C("Must either request bigint or Long for int64 deserialization");

		let X = J.validation == null ? { utf8: !0 } : J.validation,
			V = !0,
			L,
			z,
			A = X.utf8;

		if (typeof A === "boolean") L = A; else {
			V = !1;

			let w = Object.keys(A).map(function (h) {
				return A[h];
			});

			if (w.length === 0) throw new C("UTF-8 validation setting cannot be empty");
			if (typeof w[0] !== "boolean") throw new C("Invalid UTF-8 validation option, must specify boolean values");
			if ((L = w[0], !w.every((h) => h === L))) throw new C("Invalid UTF-8 validation option - keys must be all true or all false");
		}

		if (!V) {
			z = new Set();

			for (let w of Object.keys(A)) z.add(w);
		}

		let g = Q;

		if ($.length < 5) throw new C("corrupt bson message < 5 bytes long");

		let O = f.getInt32LE($, Q);

		if ((Q += 4, O < 5 || O > $.length)) throw new C("corrupt bson message");

		let M = Y ? [] : {}, D = 0, y = Y ? !1 : null;

		while (!0) {
			let w = $[Q++];

			if (w === 0) break;

			let h = Q;

			while ($[h] !== 0 && h < $.length) h++;

			if (h >= $.byteLength) throw new C("Bad BSON Document: illegal CString");

			let T = Y ? D++ : U.toUTF8($, Q, h, !1), B = !0;

			if (V || z?.has(T)) B = L; else B = !L;
			if (y !== !1 && T[0] === "$") y = ZK.test(T);

			let m;

			if ((Q = h + 1, w === eY)) {
				let E = f.getInt32LE($, Q);

				if ((Q += 4, E <= 0 || E > $.length - Q || $[Q + E - 1] !== 0)) throw new C("bad string length in bson");

				(m = U.toUTF8($, Q, Q + E - 1, B), Q = Q + E);
			} else if (w === Q3) {
				let E = U.allocateUnsafe(12);

				for (let S = 0; S < 12; S++) E[S] = $[Q + S];

				(m = new j0(E), Q = Q + 12);
			} else if (w === l6 && H === !1) (m = new o$(f.getInt32LE($, Q)), Q += 4); else if (w === l6) (m = f.getInt32LE($, Q), Q += 4); else if (w === I4) {
				if ((m = f.getFloat64LE($, Q), Q += 8, H === !1)) m = new J$(m);
			} else if (w === Y3) {
				let E = f.getInt32LE($, Q),
					S = f.getInt32LE($, Q + 4);

				(Q += 8, m = new Date(new P(E, S).toNumber()));
			} else if (w === J3) {
				if ($[Q] !== 0 && $[Q] !== 1) throw new C("illegal boolean type value");

				m = $[Q++] === 1;
			} else if (w === w4) {
				let E = Q, S = f.getInt32LE($, Q);

				if (S <= 0 || S > $.length - Q) throw new C("bad embedded document length in bson");

				if (Z) m = $.subarray(Q, Q + S); else {
					let n = J;

					if (!V) n = { ...J, validation: { utf8: B } };

					m = L5($, E, n, !1);
				}

				Q = Q + S;
			} else if (w === $3) {
				let E = Q,
					S = f.getInt32LE($, Q),
					n = J,
					J0 = Q + S;

				if (q && q[T]) n = { ...J, raw: !0 };
				if (!V) n = { ...n, validation: { utf8: B } };
				if ((m = L5($, E, n, !0), Q = Q + S, $[Q - 1] !== 0)) throw new C("invalid array terminator byte");
				if (Q !== J0) throw new C("corrupted array bson");
			} else if (w === hZ) m = void 0; else if (w === m4) m = null; else if (w === B4) if (j) (m = f.getBigInt64LE($, Q), Q += 8); else {
				let E = f.getInt32LE($, Q),
					S = f.getInt32LE($, Q + 4);

				Q += 8;

				let n = new P(E, S);

				if (F && H === !0) m = n.lessThanOrEqual(GK) && n.greaterThanOrEqual(qK) ? n.toNumber() : n; else m = n;
			} else if (w === K3) {
				let E = U.allocateUnsafe(16);

				for (let S = 0; S < 16; S++) E[S] = $[Q + S];

				(Q = Q + 16, m = new O0(E));
			} else if (w === h4) {
				let E = f.getInt32LE($, Q);

				Q += 4;

				let S = E, n = $[Q++];

				if (E < 0) throw new C("Negative binary type element size found");
				if (E > $.byteLength) throw new C("Binary type size larger than document size");

				if (n === o.SUBTYPE_BYTE_ARRAY) {
					if ((E = f.getInt32LE($, Q), Q += 4, E < 0)) throw new C("Negative binary type element size found for subtype 0x02");
					if (E > S - 4) throw new C("Binary type with subtype 0x02 contains too long binary size");
					if (E < S - 4) throw new C("Binary type with subtype 0x02 contains too short binary size");
				}

				if (W && H) m = U.toLocalBufferType($.subarray(Q, Q + E)); else if ((
					m = new o($.subarray(Q, Q + E), n),
					n === O4 && I0.isValid(m)
				)) m = m.toUUID();

				Q = Q + E;
			} else if (w === D5 && K === !1) {
				h = Q;

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new C("Bad BSON Document: illegal CString");

				let E = U.toUTF8($, Q, h, !1);

				(Q = h + 1, h = Q);

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new C("Bad BSON Document: illegal CString");

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

				m = new RegExp(E, n.join(""));
			} else if (w === D5 && K === !0) {
				h = Q;

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new C("Bad BSON Document: illegal CString");

				let E = U.toUTF8($, Q, h, !1);

				(Q = h + 1, h = Q);

				while ($[h] !== 0 && h < $.length) h++;

				if (h >= $.length) throw new C("Bad BSON Document: illegal CString");

				let S = U.toUTF8($, Q, h, !1);

				(Q = h + 1, m = new Y$(E, S));
			} else if (w === G3) {
				let E = f.getInt32LE($, Q);

				if ((Q += 4, E <= 0 || E > $.length - Q || $[Q + E - 1] !== 0)) throw new C("bad string length in bson");

				let S = U.toUTF8($, Q, Q + E - 1, B);

				(m = H ? S : new Q6(S), Q = Q + E);
			} else if (w === Z3) (
				m = new H$({ i: f.getUint32LE($, Q), t: f.getUint32LE($, Q + 4) }),
				Q += 8
			); else if (w === F3) m = new $6(); else if (w === W3) m = new e8(); else if (w === N4) {
				let E = f.getInt32LE($, Q);

				if ((Q += 4, E <= 0 || E > $.length - Q || $[Q + E - 1] !== 0)) throw new C("bad string length in bson");

				let S = U.toUTF8($, Q, Q + E - 1, B);

				(m = new d$(S), Q = Q + E);
			} else if (w === q3) {
				let E = f.getInt32LE($, Q);

				if ((Q += 4, E < 13)) throw new C("code_w_scope total size shorter minimum expected length");

				let S = f.getInt32LE($, Q);

				if ((Q += 4, S <= 0 || S > $.length - Q || $[Q + S - 1] !== 0)) throw new C("bad string length in bson");

				let n = U.toUTF8($, Q, Q + S - 1, B);

				Q = Q + S;

				let J0 = Q,
					l = f.getInt32LE($, Q),
					Q0 = L5($, J0, J, !1);

				if ((Q = Q + l, E < 8 + l + S)) throw new C("code_w_scope total size is too short, truncating scope");
				if (E > 8 + l + S) throw new C("code_w_scope total size is too long, clips outer document");

				m = new d$(n, Q0);
			} else if (w === mZ) {
				let E = f.getInt32LE($, Q);

				if ((Q += 4, E <= 0 || E > $.length - Q || $[Q + E - 1] !== 0)) throw new C("bad string length in bson");

				let S = U.toUTF8($, Q, Q + E - 1, B);

				Q = Q + E;

				let n = U.allocateUnsafe(12);

				for (let l = 0; l < 12; l++) n[l] = $[Q + l];

				let J0 = new j0(n);

				(Q = Q + 12, m = new w$(S, J0));
			} else throw new C(`Detected unknown BSON type ${w.toString(16)} for fieldname "${T}"`);

			if (T === "__proto__") Object.defineProperty(M, T, { value: m, writable: !0, enumerable: !0, configurable: !0 }); else M[T] = m;
		}

		if (O !== Q - g) {
			if (Y) throw new C("corrupt array bson");

			throw new C("corrupt object bson");
		}

		if (!y) return M;

		if (H3(M)) {
			let w = Object.assign({}, M);

			return (
				delete w.$ref,
				delete w.$id,
				delete w.$db,
				new w$(M.$ref, M.$id, M.$db, w)
			);
		}

		return M;
	}

	var A5 = /\x00/,
		nY = new Set(["$db", "$ref", "$id", "$clusterTime"]);

	function J4($, Q, J, Y) {
		$[Y++] = eY;

		let q = U.encodeUTF8Into($, Q, Y);

		(Y = Y + q + 1, $[Y - 1] = 0);

		let Z = U.encodeUTF8Into($, J, Y + 4);

		return (f.setInt32LE($, Y, Z + 1), Y = Y + 4 + Z, $[Y++] = 0, Y);
	}

	function Y4($, Q, J, Y) {
		let Z = !Object.is(J, -0) && Number.isSafeInteger(J) && J <= u6 && J >= d6 ? l6 : I4;

		$[Y++] = Z;

		let K = U.encodeUTF8Into($, Q, Y);

		if ((Y = Y + K, $[Y++] = 0, Z === l6)) Y += f.setInt32LE($, Y, J); else Y += f.setFloat64LE($, Y, J);

		return Y;
	}

	function G4($, Q, J, Y) {
		$[Y++] = B4;

		let q = U.encodeUTF8Into($, Q, Y);

		return (Y += q, $[Y++] = 0, Y += f.setBigInt64LE($, Y, J), Y);
	}

	function n8($, Q, J, Y) {
		$[Y++] = m4;

		let q = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + q, $[Y++] = 0, Y);
	}

	function q4($, Q, J, Y) {
		$[Y++] = J3;

		let q = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + q, $[Y++] = 0, $[Y++] = J ? 1 : 0, Y);
	}

	function Z4($, Q, J, Y) {
		$[Y++] = Y3;

		let q = U.encodeUTF8Into($, Q, Y);

		(Y = Y + q, $[Y++] = 0);

		let Z = P.fromNumber(J.getTime()),
			K = Z.getLowBits(),
			W = Z.getHighBits();

		return (Y += f.setInt32LE($, Y, K), Y += f.setInt32LE($, Y, W), Y);
	}

	function K4($, Q, J, Y) {
		$[Y++] = D5;

		let q = U.encodeUTF8Into($, Q, Y);

		if ((
			Y = Y + q,
			$[Y++] = 0,
			J.source && J.source.match(A5) != null
		)) throw new C("value " + J.source + " must not contain null bytes");

		if ((
			Y = Y + U.encodeUTF8Into($, J.source, Y),
			$[Y++] = 0,
			J.ignoreCase
		)) $[Y++] = 105;

		if (J.global) $[Y++] = 115;
		if (J.multiline) $[Y++] = 109;

		return ($[Y++] = 0, Y);
	}

	function F4($, Q, J, Y) {
		$[Y++] = D5;

		let q = U.encodeUTF8Into($, Q, Y);

		if ((Y = Y + q, $[Y++] = 0, J.pattern.match(A5) != null)) throw new C("pattern " + J.pattern + " must not contain null bytes");

		(Y = Y + U.encodeUTF8Into($, J.pattern, Y), $[Y++] = 0);

		let Z = J.options.split("").sort().join("");

		return (Y = Y + U.encodeUTF8Into($, Z, Y), $[Y++] = 0, Y);
	}

	function W4($, Q, J, Y) {
		if (J === null) $[Y++] = m4; else if (J._bsontype === "MinKey") $[Y++] = F3; else $[Y++] = W3;

		let q = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + q, $[Y++] = 0, Y);
	}

	function j4($, Q, J, Y) {
		$[Y++] = Q3;

		let q = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + q, $[Y++] = 0, Y += J.serializeInto($, Y), Y);
	}

	function X4($, Q, J, Y) {
		$[Y++] = h4;

		let q = U.encodeUTF8Into($, Q, Y);

		(Y = Y + q, $[Y++] = 0);

		let Z = J.length;

		if ((Y += f.setInt32LE($, Y, Z), $[Y++] = NZ, Z <= 16)) for (let K = 0; K < Z; K++) $[Y + K] = J[K]; else $.set(J, Y);

		return (Y = Y + Z, Y);
	}

	function H4($, Q, J, Y, q, Z, K, W, F) {
		if (F.has(J)) throw new C("Cannot convert circular structure to BSON");

		(F.add(J), $[Y++] = Array.isArray(J) ? $3 : w4);

		let H = U.encodeUTF8Into($, Q, Y);

		(Y = Y + H, $[Y++] = 0);

		let j = o6($, J, q, Y, Z + 1, K, W, F);

		return (F.delete(J), j);
	}

	function V4($, Q, J, Y) {
		$[Y++] = K3;

		let q = U.encodeUTF8Into($, Q, Y);

		(Y = Y + q, $[Y++] = 0);

		for (let Z = 0; Z < 16; Z++) $[Y + Z] = J.bytes[Z];

		return Y + 16;
	}

	function P4($, Q, J, Y) {
		$[Y++] = J._bsontype === "Long" ? B4 : Z3;

		let q = U.encodeUTF8Into($, Q, Y);

		(Y = Y + q, $[Y++] = 0);

		let Z = J.getLowBits(), K = J.getHighBits();

		return (Y += f.setInt32LE($, Y, Z), Y += f.setInt32LE($, Y, K), Y);
	}

	function R4($, Q, J, Y) {
		(J = J.valueOf(), $[Y++] = l6);

		let q = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + q, $[Y++] = 0, Y += f.setInt32LE($, Y, J), Y);
	}

	function M4($, Q, J, Y) {
		$[Y++] = I4;

		let q = U.encodeUTF8Into($, Q, Y);

		return (Y = Y + q, $[Y++] = 0, Y += f.setFloat64LE($, Y, J.value), Y);
	}

	function z4($, Q, J, Y) {
		$[Y++] = N4;

		let q = U.encodeUTF8Into($, Q, Y);

		(Y = Y + q, $[Y++] = 0);

		let Z = J.toString(),
			K = U.encodeUTF8Into($, Z, Y + 4) + 1;

		return (f.setInt32LE($, Y, K), Y = Y + 4 + K - 1, $[Y++] = 0, Y);
	}

	function U4($, Q, J, Y, q = !1, Z = 0, K = !1, W = !0, F) {
		if (J.scope && typeof J.scope === "object") {
			$[Y++] = q3;

			let H = U.encodeUTF8Into($, Q, Y);

			(Y = Y + H, $[Y++] = 0);

			let j = Y, X = J.code;

			Y = Y + 4;

			let V = U.encodeUTF8Into($, X, Y + 4) + 1;

			(f.setInt32LE($, Y, V), $[Y + 4 + V - 1] = 0, Y = Y + V + 4);

			let L = o6($, J.scope, q, Y, Z + 1, K, W, F);

			Y = L - 1;

			let z = L - j;

			(j += f.setInt32LE($, j, z), $[Y++] = 0);
		} else {
			$[Y++] = N4;

			let H = U.encodeUTF8Into($, Q, Y);

			(Y = Y + H, $[Y++] = 0);

			let j = J.code.toString(),
				X = U.encodeUTF8Into($, j, Y + 4) + 1;

			(f.setInt32LE($, Y, X), Y = Y + 4 + X - 1, $[Y++] = 0);
		}

		return Y;
	}

	function k4($, Q, J, Y) {
		$[Y++] = h4;

		let q = U.encodeUTF8Into($, Q, Y);

		(Y = Y + q, $[Y++] = 0);

		let { buffer: Z, position: K } = J;

		if (J.sub_type === o.SUBTYPE_BYTE_ARRAY) K = K + 4;

		if ((
			Y += f.setInt32LE($, Y, K),
			$[Y++] = J.sub_type,
			J.sub_type === o.SUBTYPE_BYTE_ARRAY
		)) (K = K - 4, Y += f.setInt32LE($, Y, K));

		if (J.sub_type === o.SUBTYPE_VECTOR) E$(J);
		if (K <= 16) for (let W = 0; W < K; W++) $[Y + W] = Z[W]; else $.set(Z, Y);

		return (Y = Y + J.position, Y);
	}

	function L4($, Q, J, Y) {
		$[Y++] = G3;

		let q = U.encodeUTF8Into($, Q, Y);

		(Y = Y + q, $[Y++] = 0);

		let Z = U.encodeUTF8Into($, J.value, Y + 4) + 1;

		return (f.setInt32LE($, Y, Z), Y = Y + 4 + Z - 1, $[Y++] = 0, Y);
	}

	function D4($, Q, J, Y, q, Z, K) {
		$[Y++] = w4;

		let W = U.encodeUTF8Into($, Q, Y);

		(Y = Y + W, $[Y++] = 0);

		let F = Y,
			H = { $ref: J.collection || J.namespace, $id: J.oid };

		if (J.db != null) H.$db = J.db;

		H = Object.assign(H, J.fields);

		let j = o6($, H, !1, Y, q + 1, Z, !0, K),
			X = j - F;

		return (F += f.setInt32LE($, Y, X), j);
	}

	function o6($, Q, J, Y, q, Z, K, W) {
		if (W == null) {
			if (Q == null) return ($[0] = 5, $[1] = 0, $[2] = 0, $[3] = 0, $[4] = 0, 5);
			if (Array.isArray(Q)) throw new C("serialize does not support an array as the root input");
			if (typeof Q !== "object") throw new C("serialize does not support non-object as the root input"); else if ("_bsontype" in Q && typeof Q._bsontype === "string") throw new C("BSON types cannot be serialized as a document"); else if (a8(Q) || t8(Q) || l$(Q) || T4(Q)) throw new C("date, regexp, typedarray, and arraybuffer cannot be BSON documents");

			W = new Set();
		}

		W.add(Q);

		let F = Y + 4;

		if (Array.isArray(Q)) for (let j = 0; j < Q.length; j++) {
			let X = `${j}`, V = Q[j];

			if (typeof V?.toBSON === "function") V = V.toBSON();

			let L = typeof V;

			if (V === void 0) F = n8($, X, V, F); else if (V === null) F = n8($, X, V, F); else if (L === "string") F = J4($, X, V, F); else if (L === "number") F = Y4($, X, V, F); else if (L === "bigint") F = G4($, X, V, F); else if (L === "boolean") F = q4($, X, V, F); else if (L === "object" && V._bsontype == null) if (V instanceof Date || a8(V)) F = Z4($, X, V, F); else if (V instanceof Uint8Array || l$(V)) F = X4($, X, V, F); else if (V instanceof RegExp || t8(V)) F = K4($, X, V, F); else F = H4($, X, V, F, J, q, Z, K, W); else if (L === "object") {
				if (V[i8] !== C8) throw new A8(); else if (V._bsontype === "ObjectId") F = j4($, X, V, F); else if (V._bsontype === "Decimal128") F = V4($, X, V, F); else if (V._bsontype === "Long" || V._bsontype === "Timestamp") F = P4($, X, V, F); else if (V._bsontype === "Double") F = M4($, X, V, F); else if (V._bsontype === "Code") F = U4($, X, V, F, J, q, Z, K, W); else if (V._bsontype === "Binary") F = k4($, X, V, F); else if (V._bsontype === "BSONSymbol") F = L4($, X, V, F); else if (V._bsontype === "DBRef") F = D4($, X, V, F, q, Z, W); else if (V._bsontype === "BSONRegExp") F = F4($, X, V, F); else if (V._bsontype === "Int32") F = R4($, X, V, F); else if (V._bsontype === "MinKey" || V._bsontype === "MaxKey") F = W4($, X, V, F); else if (typeof V._bsontype !== "undefined") throw new C(`Unrecognized or invalid _bsontype: ${String(V._bsontype)}`);
			} else if (L === "function" && Z) F = z4($, X, V, F);
		} else if (Q instanceof Map || E4(Q)) {
			let j = Q.entries(), X = !1;

			while (!X) {
				let V = j.next();

				if ((X = !!V.done, X)) continue;

				let L = V.value ? V.value[0] : void 0,
					z = V.value ? V.value[1] : void 0;

				if (typeof z?.toBSON === "function") z = z.toBSON();

				let A = typeof z;

				if (typeof L === "string" && !nY.has(L)) {
					if (L.match(A5) != null) throw new C("key " + L + " must not contain null bytes");

					if (J) {
						if (L[0] === "$") throw new C("key " + L + " must not start with '$'"); else if (L.includes(".")) throw new C("key " + L + " must not contain '.'");
					}
				}

				if (z === void 0) {
					if (K === !1) F = n8($, L, z, F);
				} else if (z === null) F = n8($, L, z, F); else if (A === "string") F = J4($, L, z, F); else if (A === "number") F = Y4($, L, z, F); else if (A === "bigint") F = G4($, L, z, F); else if (A === "boolean") F = q4($, L, z, F); else if (A === "object" && z._bsontype == null) if (z instanceof Date || a8(z)) F = Z4($, L, z, F); else if (z instanceof Uint8Array || l$(z)) F = X4($, L, z, F); else if (z instanceof RegExp || t8(z)) F = K4($, L, z, F); else F = H4($, L, z, F, J, q, Z, K, W); else if (A === "object") {
					if (z[i8] !== C8) throw new A8(); else if (z._bsontype === "ObjectId") F = j4($, L, z, F); else if (z._bsontype === "Decimal128") F = V4($, L, z, F); else if (z._bsontype === "Long" || z._bsontype === "Timestamp") F = P4($, L, z, F); else if (z._bsontype === "Double") F = M4($, L, z, F); else if (z._bsontype === "Code") F = U4($, L, z, F, J, q, Z, K, W); else if (z._bsontype === "Binary") F = k4($, L, z, F); else if (z._bsontype === "BSONSymbol") F = L4($, L, z, F); else if (z._bsontype === "DBRef") F = D4($, L, z, F, q, Z, W); else if (z._bsontype === "BSONRegExp") F = F4($, L, z, F); else if (z._bsontype === "Int32") F = R4($, L, z, F); else if (z._bsontype === "MinKey" || z._bsontype === "MaxKey") F = W4($, L, z, F); else if (typeof z._bsontype !== "undefined") throw new C(`Unrecognized or invalid _bsontype: ${String(z._bsontype)}`);
				} else if (A === "function" && Z) F = z4($, L, z, F);
			}
		} else {
			if (typeof Q?.toBSON === "function") {
				if ((Q = Q.toBSON(), Q != null && typeof Q !== "object")) throw new C("toBSON function did not return an object");
			}

			for (let j of Object.keys(Q)) {
				let X = Q[j];

				if (typeof X?.toBSON === "function") X = X.toBSON();

				let V = typeof X;

				if (typeof j === "string" && !nY.has(j)) {
					if (j.match(A5) != null) throw new C("key " + j + " must not contain null bytes");

					if (J) {
						if (j[0] === "$") throw new C("key " + j + " must not start with '$'"); else if (j.includes(".")) throw new C("key " + j + " must not contain '.'");
					}
				}

				if (X === void 0) {
					if (K === !1) F = n8($, j, X, F);
				} else if (X === null) F = n8($, j, X, F); else if (V === "string") F = J4($, j, X, F); else if (V === "number") F = Y4($, j, X, F); else if (V === "bigint") F = G4($, j, X, F); else if (V === "boolean") F = q4($, j, X, F); else if (V === "object" && X._bsontype == null) if (X instanceof Date || a8(X)) F = Z4($, j, X, F); else if (X instanceof Uint8Array || l$(X)) F = X4($, j, X, F); else if (X instanceof RegExp || t8(X)) F = K4($, j, X, F); else F = H4($, j, X, F, J, q, Z, K, W); else if (V === "object") {
					if (X[i8] !== C8) throw new A8(); else if (X._bsontype === "ObjectId") F = j4($, j, X, F); else if (X._bsontype === "Decimal128") F = V4($, j, X, F); else if (X._bsontype === "Long" || X._bsontype === "Timestamp") F = P4($, j, X, F); else if (X._bsontype === "Double") F = M4($, j, X, F); else if (X._bsontype === "Code") F = U4($, j, X, F, J, q, Z, K, W); else if (X._bsontype === "Binary") F = k4($, j, X, F); else if (X._bsontype === "BSONSymbol") F = L4($, j, X, F); else if (X._bsontype === "DBRef") F = D4($, j, X, F, q, Z, W); else if (X._bsontype === "BSONRegExp") F = F4($, j, X, F); else if (X._bsontype === "Int32") F = R4($, j, X, F); else if (X._bsontype === "MinKey" || X._bsontype === "MaxKey") F = W4($, j, X, F); else if (typeof X._bsontype !== "undefined") throw new C(`Unrecognized or invalid _bsontype: ${String(X._bsontype)}`);
				} else if (V === "function" && Z) F = z4($, j, X, F);
			}
		}

		(W.delete(Q), $[F++] = 0);

		let H = F - Y;

		return (Y += f.setInt32LE($, Y, H), F);
	}

	function KK($) {
		return $ != null && typeof $ === "object" && "_bsontype" in $ && typeof $._bsontype === "string";
	}

	var FK = {
		$oid: j0,
		$binary: o,
		$uuid: o,
		$symbol: Q6,
		$numberInt: o$,
		$numberDecimal: O0,
		$numberDouble: J$,
		$numberLong: P,
		$minKey: $6,
		$maxKey: e8,
		$regex: Y$,
		$regularExpression: Y$,
		$timestamp: H$
	};

	function M3($, Q = {}) {
		if (typeof $ === "number") {
			let Y = $ <= u6 && $ >= d6, q = $ <= aY && $ >= sY;

			if (Q.relaxed || Q.legacy) return $;

			if (Number.isInteger($) && !Object.is($, -0)) {
				if (Y) return new o$($);

				if (q) {
					if (Q.useBigInt64) return BigInt($);

					return P.fromNumber($);
				}
			}

			return new J$($);
		}

		if ($ == null || typeof $ !== "object") return $;
		if ($.$undefined) return null;

		let J = Object.keys($).filter((Y) => Y.startsWith("$") && $[Y] != null);

		for (let Y = 0; Y < J.length; Y++) {
			let q = FK[J[Y]];

			if (q) return q.fromExtendedJSON($, Q);
		}

		if ($.$date != null) {
			let Y = $.$date, q = new Date();

			if (Q.legacy) if (typeof Y === "number") q.setTime(Y); else if (typeof Y === "string") q.setTime(Date.parse(Y)); else if (typeof Y === "bigint") q.setTime(Number(Y)); else throw new C5(`Unrecognized type for EJSON date: ${typeof Y}`); else if (typeof Y === "string") q.setTime(Date.parse(Y)); else if (P.isLong(Y)) q.setTime(Y.toNumber()); else if (typeof Y === "number" && Q.relaxed) q.setTime(Y); else if (typeof Y === "bigint") q.setTime(Number(Y)); else throw new C5(`Unrecognized type for EJSON date: ${typeof Y}`);

			return q;
		}

		if ($.$code != null) {
			let Y = Object.assign({}, $);

			if ($.$scope) Y.$scope = M3($.$scope);

			return d$.fromExtendedJSON($);
		}

		if (H3($) || $.$dbPointer) {
			let Y = $.$ref ? $ : $.$dbPointer;

			if (Y instanceof w$) return Y;

			let q = Object.keys(Y).filter((K) => K.startsWith("$")),
				Z = !0;

			if ((
				q.forEach((K) => {
					if (["$ref", "$id", "$db"].indexOf(K) === -1) Z = !1;
				}),
				Z
			)) return w$.fromExtendedJSON(Y);
		}

		return $;
	}

	function WK($, Q) {
		return $.map((J, Y) => {
			Q.seenObjects.push({ propertyName: `index ${Y}`, obj: null });

			try {
				return I$(J, Q);
			} finally {
				Q.seenObjects.pop();
			}
		});
	}

	function tY($) {
		let Q = $.toISOString();

		return $.getUTCMilliseconds() !== 0 ? Q : Q.slice(0, -5) + "Z";
	}

	function I$($, Q) {
		if ($ instanceof Map || E4($)) {
			let J = Object.create(null);

			for (let [Y, q] of $) {
				if (typeof Y !== "string") throw new C("Can only serialize maps with string keys");

				J[Y] = q;
			}

			return I$(J, Q);
		}

		if ((typeof $ === "object" || typeof $ === "function") && $ !== null) {
			let J = Q.seenObjects.findIndex((Y) => Y.obj === $);

			if (J !== -1) {
				let Y = Q.seenObjects.map((j) => j.propertyName),
					q = Y.slice(0, J).map((j) => `${j} -> `).join(""),
					Z = Y[J],
					K = " -> " + Y.slice(J + 1, Y.length - 1).map((j) => `${j} -> `).join(""),
					W = Y[Y.length - 1],
					F = (" ").repeat(q.length + Z.length / 2),
					H = ("-").repeat(K.length + (Z.length + W.length) / 2 - 1);

				throw new C(`Converting circular structure to EJSON:
    ${q}${Z}${K}${W}
    ${F}\\${H}/`);
			}

			Q.seenObjects[Q.seenObjects.length - 1].obj = $;
		}

		if (Array.isArray($)) return WK($, Q);
		if ($ === void 0) return Q.ignoreUndefined ? void 0 : null;

		if ($ instanceof Date || a8($)) {
			let J = $.getTime(),
				Y = J > -1 && J < 253402318800000;

			if (Q.legacy) return Q.relaxed && Y ? { $date: $.getTime() } : { $date: tY($) };

			return Q.relaxed && Y
				? { $date: tY($) }
				: { $date: { $numberLong: $.getTime().toString() } };
		}

		if (typeof $ === "number" && (!Q.relaxed || !isFinite($))) {
			if (Number.isInteger($) && !Object.is($, -0)) {
				if ($ >= d6 && $ <= u6) return { $numberInt: $.toString() };
				if ($ >= sY && $ <= aY) return { $numberLong: $.toString() };
			}

			return { $numberDouble: Object.is($, -0) ? "-0.0" : $.toString() };
		}

		if (typeof $ === "bigint") {
			if (!Q.relaxed) return { $numberLong: BigInt.asIntN(64, $).toString() };

			return Number(BigInt.asIntN(64, $));
		}

		if ($ instanceof RegExp || t8($)) {
			let J = $.flags;

			if (J === void 0) {
				let q = $.toString().match(/[gimuy]*$/);

				if (q) J = q[0];
			}

			return new Y$($.source, J).toExtendedJSON(Q);
		}

		if ($ != null && typeof $ === "object") return XK($, Q);

		return $;
	}

	var jK = {
		Binary: ($) => new o($.value(), $.sub_type),
		Code: ($) => new d$($.code, $.scope),
		DBRef: ($) => new w$($.collection || $.namespace, $.oid, $.db, $.fields),
		Decimal128: ($) => new O0($.bytes),
		Double: ($) => new J$($.value),
		Int32: ($) => new o$($.value),
		Long: ($) => P.fromBits($.low != null ? $.low : $.low_, $.low != null ? $.high : $.high_, $.low != null ? $.unsigned : $.unsigned_),
		MaxKey: () => new e8(),
		MinKey: () => new $6(),
		ObjectId: ($) => new j0($),
		BSONRegExp: ($) => new Y$($.pattern, $.options),
		BSONSymbol: ($) => new Q6($.value),
		Timestamp: ($) => H$.fromBits($.low, $.high)
	};

	function XK($, Q) {
		if ($ == null || typeof $ !== "object") throw new C("not an object instance");

		let J = $._bsontype;

		if (typeof J === "undefined") {
			let Y = {};

			for (let q of Object.keys($)) {
				Q.seenObjects.push({ propertyName: q, obj: null });

				try {
					let Z = I$($[q], Q);

					if (q === "__proto__") Object.defineProperty(Y, q, { value: Z, writable: !0, enumerable: !0, configurable: !0 }); else Y[q] = Z;
				} finally {
					Q.seenObjects.pop();
				}
			}

			return Y;
		} else if ($ != null && typeof $ === "object" && typeof $._bsontype === "string" && $[i8] !== C8) throw new A8(); else if (KK($)) {
			let Y = $;

			if (typeof Y.toExtendedJSON !== "function") {
				let q = jK[$._bsontype];

				if (!q) throw new C("Unrecognized or invalid _bsontype: " + $._bsontype);

				Y = q(Y);
			}

			if (J === "Code" && Y.scope) Y = new d$(Y.code, I$(Y.scope, Q)); else if (J === "DBRef" && Y.oid) Y = new w$(I$(Y.collection, Q), I$(Y.oid, Q), I$(Y.db, Q), I$(Y.fields, Q));

			return Y.toExtendedJSON(Q);
		} else throw new C("_bsontype must be a string, but was: " + typeof J);
	}

	function z3($, Q) {
		let J = {
			useBigInt64: Q?.useBigInt64 ?? !1,
			relaxed: Q?.relaxed ?? !0,
			legacy: Q?.legacy ?? !1
		};

		return JSON.parse($, (Y, q) => {
			if (Y.indexOf("\x00") !== -1) throw new C(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(Y)}`);

			return M3(q, J);
		});
	}

	function U3($, Q, J, Y) {
		if (J != null && typeof J === "object") (Y = J, J = 0);
		if (Q != null && typeof Q === "object" && !Array.isArray(Q)) (Y = Q, Q = void 0, J = 0);

		let q = Object.assign({ relaxed: !0, legacy: !1 }, Y, { seenObjects: [{ propertyName: "(root)", obj: null }] }),
			Z = I$($, q);

		return JSON.stringify(Z, Q, J);
	}

	function HK($, Q) {
		return (Q = Q || {}, JSON.parse(U3($, Q)));
	}

	function VK($, Q) {
		return (Q = Q || {}, z3(JSON.stringify($), Q));
	}

	var J6 = Object.create(null);

	J6.parse = z3;
	J6.stringify = U3;
	J6.serialize = HK;
	J6.deserialize = VK;
	Object.freeze(J6);

	var V0 = {
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

	function C4($, Q) {
		try {
			return f.getNonnegativeInt32LE($, Q);
		} catch(J) {
			throw new X$("BSON size cannot be negative", Q, { cause: J });
		}
	}

	function A4($, Q) {
		let J = Q;

		for (; $[J] !== 0; J++) ;

		if (J === $.length - 1) throw new X$("Null terminator not found", Q);

		return J;
	}

	function PK($, Q = 0) {
		if ((Q ??= 0, $.length < 5)) throw new X$(`Input must be at least 5 bytes, got ${$.length} bytes`, Q);

		let J = C4($, Q);

		if (J > $.length - Q) throw new X$(`Parsed documentSize (${J} bytes) does not match input length (${$.length} bytes)`, Q);
		if ($[Q + J - 1] !== 0) throw new X$("BSON documents must end in 0x00", Q + J);

		let Y = [], q = Q + 4;

		while (q <= J + Q) {
			let Z = $[q];

			if ((q += 1, Z === 0)) {
				if (q - Q !== J) throw new X$("Invalid 0x00 type byte", q);

				break;
			}

			let K = q, W = A4($, q) - K;

			q += W + 1;

			let F;

			if (Z === V0.double || Z === V0.long || Z === V0.date || Z === V0.timestamp) F = 8; else if (Z === V0.int) F = 4; else if (Z === V0.objectId) F = 12; else if (Z === V0.decimal) F = 16; else if (Z === V0.bool) F = 1; else if (Z === V0.null || Z === V0.undefined || Z === V0.maxKey || Z === V0.minKey) F = 0; else if (Z === V0.regex) F = A4($, A4($, q) + 1) + 1 - q; else if (Z === V0.object || Z === V0.array || Z === V0.javascriptWithScope) F = C4($, q); else if (Z === V0.string || Z === V0.binData || Z === V0.dbPointer || Z === V0.javascript || Z === V0.symbol) {
				if ((F = C4($, q) + 4, Z === V0.binData)) F += 1;
				if (Z === V0.dbPointer) F += 12;
			} else throw new X$(`Invalid 0x${Z.toString(16).padStart(2, "0")} type byte`, q);

			if (F > J) throw new X$("value reports length larger than document", q);

			(Y.push([Z, K, W, q, F]), q += F);
		}

		return Y;
	}

	var n6 = Object.create(null);

	n6.parseToElements = PK;
	n6.ByteUtils = U;
	n6.NumberUtils = f;
	Object.freeze(n6);

	var k3 = 17825792, u$ = U.allocate(k3);

	function RK($) {
		if (u$.length < $) u$ = U.allocate($);
	}

	function MK($, Q = {}) {
		let J = typeof Q.checkKeys === "boolean" ? Q.checkKeys : !1,
			Y = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
			q = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0,
			Z = typeof Q.minInternalBufferSize === "number" ? Q.minInternalBufferSize : k3;

		if (u$.length < Z) u$ = U.allocate(Z);

		let K = o6(u$, $, J, 0, 0, Y, q, null),
			W = U.allocateUnsafe(K);

		return (W.set(u$.subarray(0, K), 0), W);
	}

	function zK($, Q, J = {}) {
		let Y = typeof J.checkKeys === "boolean" ? J.checkKeys : !1,
			q = typeof J.serializeFunctions === "boolean" ? J.serializeFunctions : !1,
			Z = typeof J.ignoreUndefined === "boolean" ? J.ignoreUndefined : !0,
			K = typeof J.index === "number" ? J.index : 0,
			W = o6(u$, $, Y, 0, 0, q, Z, null);

		return (Q.set(u$.subarray(0, W), K), K + W - 1);
	}

	function UK($, Q = {}) {
		return R3(U.toLocalBufferType($), Q);
	}

	function kK($, Q = {}) {
		Q = Q || {};

		let J = typeof Q.serializeFunctions === "boolean" ? Q.serializeFunctions : !1,
			Y = typeof Q.ignoreUndefined === "boolean" ? Q.ignoreUndefined : !0;

		return k5($, J, Y);
	}

	function LK($, Q, J, Y, q, Z) {
		let K = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, Z),
			W = U.toLocalBufferType($),
			F = Q;

		for (let H = 0; H < J; H++) {
			let j = f.getInt32LE(W, F);

			(K.index = F, Y[q + H] = R3(W, K), F = F + j);
		}

		return F;
	}

	var n$ = Object.freeze({
		__proto__: null,
		BSONError: C,
		BSONOffsetError: X$,
		BSONRegExp: Y$,
		BSONRuntimeError: C5,
		BSONSymbol: Q6,
		BSONType: BZ,
		BSONValue: v0,
		BSONVersionError: A8,
		Binary: o,
		ByteUtils: U,
		Code: d$,
		DBRef: w$,
		Decimal128: O0,
		Double: J$,
		EJSON: J6,
		Int32: o$,
		Long: P,
		MaxKey: e8,
		MinKey: $6,
		NumberUtils: f,
		ObjectId: j0,
		Timestamp: H$,
		UUID: I0,
		bsonType: S4,
		calculateObjectSize: kK,
		deserialize: UK,
		deserializeStream: LK,
		onDemand: n6,
		serialize: MK,
		serializeWithBufferAndIndex: zK,
		setInternalBufferSize: RK
	});

	var L0,
		Y6 = new Map(),
		t6 = !0,
		_4 = 0,
		g4 = !1,
		v4 = !1;

	function c6() {
		let $ = W0.url?.ws;

		(
			L0 = $
				? new WebSocket(`${$}${$.includes("?") ? "&" : "?"}v=${HJ}`)
				: N.ws.$ws(),
			L0.binaryType = "arraybuffer",
			t6 = !0,
			L0.addEventListener("open", () => {
				(
					console.log("[WS] Connected"),
					g4 = !1,
					v4 = !1,
					_4 = 0,
					i2(),
					v2(),
					O8()
				);
			}),

			L0.addEventListener("message", (Q) => {
				let J = n$.deserialize(Q.data);

				if ((P$ && console.debug("[WS] SERVER", J), Y6.has(J.nonce))) {
					let q = Y6.get(J.nonce);

					(Y6.delete(J.nonce), q(J));
				}

				let Y = rQ.get(J.op);

				if (!Y) {
					console.error("[WS] Got an unexpected packet", J);

					return;
				}

				Y(J);
			}),

			L0.addEventListener("close", (Q) => {
				if ((
					Y6.clear(),
					console.warn(`[WS] Disconnected (${Q.code})`),
					Q.code == 4008
				)) {
					(t6 = !1, j7());

					return;
				}

				if (!t6 || document.hidden) return;
				if ((console.warn("[WS] Reconnecting..."), Q.code == 4004 && !x4)) _$();

				let J = Math.random() * 2000;

				if (Q.code == 4007) setTimeout(c6, 500 + J); else {
					_4++;

					let Y = Math.min(5000 * _4, 30000);

					setTimeout(c6, Y + J);
				}
			})
		);
	}

	function S7($) {
		if ((t6 = !1, L0)) L0.close($);
	}

	var y4;

	document.addEventListener("visibilitychange", () => {
		if ((clearTimeout(y4), y4 = null, document.hidden)) {
			y4 = setTimeout(
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

		if (t6 && (!L0 || L0.readyState == WebSocket.CLOSED)) c6();
	});

	function U5() {
		return L0 && L0.readyState == WebSocket.OPEN;
	}

	function L3($ = {}) {
		if (!U5()) return (
			delete $.token,
			console.warn("Tried to send a packet while the connection is closed", $),
			!0
		);
	}

	var x4 = !1;

	function O8() {
		if (g4 || !U5()) return;
		if (m$() && !(R.token && R.user)) return;

		(x4 = !0, N6(2, { token: m$() ?? "viewer" }));
	}

	function AY() {
		(v4 = !0, iQ());
	}

	function N6($, Q) {
		if (L3(Q) || !L0) return !1;
		if ($ != 2 && !v4) return !1;
		if ($ == 2) (x4 = !1, g4 = !0);

		(
			P$ && console.debug("[WS] CLIENT", $, Q),
			L0.send(n$.serialize({ op: $, ...Q ?? {} }))
		);
	}

	function f$($, Q, J = 15000) {
		return new Promise((Y, q) => {
			if (L3(Q) || !L0) return q("Tried to send a packet while the connection is closed");

			let Z = Date.now(),
				K = setTimeout(
					() => {
						(Y6.delete(Z), q(`Nonce ${Z} timed out after ${J}ms`));
					},
					J
				);

			(
				Y6.set(Z, (W) => {
					(clearTimeout(K), Y(W));
				}),
				P$ && console.debug(`[WS] CLIENT (nonce=${Z})`, $, Q),
				L0.send(n$.serialize({ op: $, nonce: Z, ...Q ?? {} }))
			);
		});
	}

	async function E2($) {
		let Q = new Uint8Array($.length * 5),
			J = new DataView(Q.buffer),
			Y = 0;

		for (let q of $) if ((
			J.setUint32(Y, q[0], !0),
			J.setUint8(Y + 4, q[1]),
			Y += 5,
			H8 && Y % 2500 == 0
		)) await P1();

		return Q;
	}

	function I2($) {
		if (!JQ) return;

		return f$(7, { pixels: $ });
	}

	function NY() {
		return f$(9, {}, 1e4);
	}

	function D3($) {
		return f$(10, $, 5000);
	}

	var T5 = 160;

	function p4($) {
		let Q = $ % v, J = Math.floor($ / v);

		c4(Q, J);
	}

	function c4($, Q) {
		a6($ - T5 / 2, Q - T5 / 2, T5, T5);
	}

	async function y0($) {
		let { connId: Q, userId: J, fallbackPos: Y, username: q } = $;

		if (Q !== void 0 && Q === R.connectionId) return (N$("That's you!"), !1);

		if (Q !== void 0) {
			let Z = R0.get(Q);

			if (Z && !Z.partial && Z.lastPos !== void 0) return (p4(Z.lastPos), !0);
		}

		if (Y !== void 0) return (p4(Y), !0);

		if (Q !== void 0 || J !== void 0) try {
			let Z = await D3({ connId: Q, userId: J });

			if (Z.pos != null) return (p4(Z.pos), !0);
		} catch {}

		return (
			N$(q
				? `${q} isn't on the wall right now.`
				: "That user isn't on the wall right now."),
			!1
		);
	}

	function C3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = null;

		async function q(K) {
			if (K) (Y = null, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let W = await vJ({ status: "open", cursor: Y ?? void 0, limit: 25 });

			if (!W.ok) {
				Q.replaceChildren(q0(await d(W)));

				return;
			}

			let { items: F, next_cursor: H } = await W.json();

			if ((Q.replaceChildren(), K && !F.length)) $.replaceChildren(G("p.desc", "No open items.")); else for (let j of F) $.append(Z(j));

			(
				Y = H,
				J.replaceChildren(Y
					? G("button.btn", "Load more", {
						onclick() {
							q(!1);
						}
					})
					: "")
			);
		}

		function Z(K) {
			let W = G("div.mod-action-msg"),
				F = G("input.box", { type: "text", placeholder: "Notes (optional)" }),
				H = G("div.item.box.outset.mod-review"),
				j = (A, g, O) => G("button.btn", A, {
					async onclick() {
						if (!await i(O, A)) return;

						let D = await xJ(K.id, g, F.value.trim() || void 0);

						if (!D.ok) {
							W.replaceChildren(G("p.error.noicon", `${A} failed: ${await d(D)}`));

							return;
						}

						H.remove();
					}
				}),
				X = K.details.user_id,
				V = G("div.mod-flag-samples");

			if (typeof X == "number") (async () => {
				let A = await Y7(X);

				if (!A.ok) return;

				let { samples: g } = await A.json();

				if (!g.length) return;

				let O = g.map((M) => ({
					pixels: h1(new Uint8Array([...atob(M.pixels)].map((D) => D.charCodeAt(0)))),
					label: p0(M.createdAt)
				}));

				V.replaceChildren(G("span.desc", "flagged draws:"), ...O.map((M, D) => {
					let y = h8(M.pixels);

					return (
						y.title = `${M.label} (click to expand)`,
						y.classList.add("mod-clickable-thumb"),
						y.addEventListener("click", () => F7(O, D)),
						y
					);
				}));
			})();

			let L = K.target_username,
				z = typeof X == "number"
					? G(
						"div.mod-form-row.mod-review-target",
						L
							? G("span.mod-jump-name.tooltip", L, {
								dataset: { tooltip: x.jumpTo },
								async onclick() {
									if (await y0({ userId: X, username: L })) (
										p(),
										h$({ label: "Review Queue", reopen: () => r("review") })
									);
								}
							})
							: "",
						G("span.desc", `#${X}`),
						K.target_discord ? G("span.desc", `discord: ${K.target_discord}`) : "",
						G("button.btn", "View user", {
							onclick() {
								r("users", X, { label: "Review Queue", reopen: () => r("review") });
							}
						})
					)
					: "";

			return (
				H.append(G("div.mod-review-head", G("b", K.kind), G("span.mod-tag", `x${K.hit_count}`), G("span.desc", E0(K.created_at))), z, V, G("div.details", T1(K.details)), G("div.input", F), G("div.mod-form-row", j("Dismiss", "dismiss", `Dismiss review item #${K.id}?`), j("Mark clean", "mark_clean", `Mark item #${K.id} clean?`), j("Ban", "ban", `Perma-ban the target of item #${K.id}?`)), W),
				H
			);
		}

		return (
			q(!0),
			G(
				"div.mod-review-tab",
				G("div.btn-container.mod-toolbar", G("button.btn", "Refresh", {
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

	function A3() {
		let $ = G("div.mod-action-msg"),
			Q = G("input.box", {
				type: "text",
				placeholder: "Title (optional)",
				maxLength: 120
			}),
			J = G("textarea.box", {
				placeholder: x.broadcast.placeholder,
				rows: 4,
				maxLength: 1000
			}),
			Y = G("input", { type: "checkbox", checked: !1, id: "eph" });

		return G("div.mod-broadcast", G("p.desc", x.broadcast.desc), G("div.mod-form", G("div.input", Q), G("div.input", J), G("div.checkbox", Y, G("label", { htmlFor: "eph" }, x.broadcast.ephDesc)), $, G("div.mod-form-row", G("button.btn", x.broadcast.btn, {
			async onclick() {
				let q = J.value.trim();

				if (!q) {
					$.replaceChildren(q0("Message can't be empty."));

					return;
				}

				let Z = Q.value.trim();

				if (!await i(x.broadcast.confirm, "Broadcast")) return;

				let W = await gJ(q, Z || void 0, !Y.checked);

				if (!W.ok) {
					$.replaceChildren(q0(`Broadcast failed: ${await d(W)}`));

					return;
				}

				(
					Q.value = "",
					J.value = "",
					$.replaceChildren(G("p.success.noicon", x.broadcast.ok))
				);
			}
		}))));
	}

	var b4 = 10;

	function T3($) {
		if ($ <= 0) return 1.1;

		let Q = Math.max(1, Math.min(10, $));

		return Math.round((0.95 - (Q - 1) / 9 * 0.55) * 100) / 100;
	}

	function E3() {
		let $ = G("div.mod-action-msg"),
			Q = G("p.desc.mod-bot-mapping"),
			J = G("p.desc"),
			Y = G("input.box.mod-bot-slider", {
				type: "range",
				min: "0",
				max: String(b4),
				step: "1",
				value: "0"
			}),
			q = (K) => {
				if (K <= 0) return x.detection.off;

				let W = Math.round(T3(K) * 100);

				return a0(x.detection.current, K, b4, W);
			},
			Z = () => {
				Q.replaceChildren(q(Number(Y.value)));
			};

		return (
			Y.oninput = Z,
			(async () => {
				let K = await eJ();

				if (!K.ok) {
					$.replaceChildren(q0(await d(K)));

					return;
				}

				let { sensitivity: W, openBotFlags: F } = await K.json();

				(
					Y.value = String(W),
					Z(),
					J.replaceChildren(`${x.detection.flags} ${F}.`)
				);
			})(),

			G("div.mod-bot-config", G("p.desc", x.detection.description.join(" ")), G("div.mod-form", G("div.mod-bot-slider-row", G("span.desc", x.detection.slider[0]), Y, G("span.desc", x.detection.slider[1])), Q, J, $, G("div.mod-form-row", G("button.btn", "Save", {
				async onclick() {
					let K = Number(Y.value), W = await $7(K);

					if (!W.ok) {
						$.replaceChildren(q0(`Save failed: ${await d(W)}`));

						return;
					}

					$.replaceChildren(G("p.success.noicon", x.gwValSaved));
				}
			}))))
		);
	}

	var I3 = 4, E5 = !1;

	function w3($, Q, J, Y, q) {
		let Z = Math.min($, J),
			K = Math.min(Q, Y),
			W = Math.max($, J),
			F = Math.max(Q, Y);

		(Z = Math.min(Z, v - 1), K = Math.min(K, Z0 - 1));

		let H = Math.min(W - Z, q, v - Z),
			j = Math.min(F - K, q, Z0 - K);

		return (
			H = Math.max(H, 1),
			j = Math.max(j, 1),
			{ x: Z, y: K, width: H, height: j }
		);
	}

	function DK($) {
		let Q = k.rect.width / v, J = k.rect.height / Z0;

		return {
			left: k.rect.left + $.x * Q,
			top: k.rect.top + $.y * J,
			width: $.width * Q,
			height: $.height * J
		};
	}

	function I5($) {
		if (E5) return;

		(E5 = !0, R.setTool(0), y$(0));

		let Q = $.maxRegion ?? Math.max(v, Z0),
			J = $.color ?? "#ff3b3b",
			Y = G("div.pick-box", { style: { display: "none", outlineColor: J } }),
			q = $.label ? G("div.pick-mode", $.label) : "",
			Z = G("div.pick-readout", $.hint ?? "Click a pixel  ·  Shift+drag to select an area"),
			K = G("div.pick-hint", "Esc or right-click to cancel"),
			W = G("div.pick-overlay", Y, q, Z, K),
			F = null;

		if ($.dimUnpainted) (F = G("div.mod-paint-scrim"), P6.prepend(F));

		let H = !1,
			j = null,
			X = null,
			V = !1,
			L = 0,
			z = 0;

		function A(T) {
			let B = DK(T);

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
			if (!E5) return;

			(
				E5 = !1,
				W.remove(),
				F?.remove(),
				U0.removeEventListener("pointerdown", y, !0),
				U0.removeEventListener("pointermove", w, !0),
				window.removeEventListener("pointerup", h, !0),
				document.removeEventListener("keydown", M, !0),
				U0.removeEventListener("contextmenu", D, !0),
				$.onClose?.()
			);
		}

		function M(T) {
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

				let [B, m] = S0(T.clientX, T.clientY);

				(
					j = [B, m],
					X = w3(B, m, B, m, Q),
					A(X),
					Z.textContent = `${X.width}×${X.height} px`
				);

				return;
			}

			(V = !!$.onPick, L = T.clientX, z = T.clientY);
		}

		function w(T) {
			if (H && j) {
				(T.preventDefault(), T.stopPropagation(), x1(T.x, T.y));

				let [E, S] = S0(T.clientX, T.clientY);

				(
					X = w3(j[0], j[1], E, S, Q),
					A(X),
					Z.textContent = `${X.width}×${X.height} px`
				);

				return;
			}

			if (V && Math.hypot(T.clientX - L, T.clientY - z) > I3) V = !1;

			let [B, m] = S0(T.clientX, T.clientY);

			g(B, m);
		}

		function h(T) {
			if (H) {
				H = !1;

				let B = X;

				if ((X = null, j = null, O(), B && $.onRegion)) $.onRegion(B);

				return;
			}

			if (V && T.button === 0) {
				if ((V = !1, Math.hypot(T.clientX - L, T.clientY - z) <= I3)) {
					let [B, m] = S0(T.clientX, T.clientY);

					(O(), $.onPick?.(B, m));
				}
			}
		}

		(
			U0.addEventListener("pointerdown", y, !0),
			U0.addEventListener("pointermove", w, !0),
			window.addEventListener("pointerup", h, !0),
			document.addEventListener("keydown", M, !0),
			U0.addEventListener("contextmenu", D, !0),
			u("main").after(W)
		);
	}

	var CK = 500;

	function r6() {
		if (!x0()) return;

		I5({
			label: "Tile Inspector",
			hint: x.inspect.hint,
			maxRegion: CK,
			dimUnpainted: !0,
			onPick: ($, Q) => void AK($, Q),
			onRegion: ($) => void TK($.x, $.y, $.width, $.height)
		});
	}

	async function AK($, Q) {
		let J = Q * v + $, Y = await oJ(J);

		if (!Y.ok) return new _("Tile inspector", G("div.modal", q0(await d(Y)), R$));

		h3(await Y.json(), $, Q);
	}

	function h3($, Q, J) {
		let Y = G("div.modal.mod-tile");

		if ((
			Y.append(G("div.mod-kv", s6("Position", `${Q}, ${J}`), s6("Placed", $.placed_at ? p0($.placed_at) : "unknown"))),
			!$.user
		)) return (
			Y.append(G("p.desc", x.inspect.none)),
			Y.append(G("div.btn-container", f4())),
			void new _("Tile inspector", Y)
		);

		let q = $.user, Z = !!q.banned_at;

		(
			Y.append(
				G("div.mod-detail-head", G("h3", q.username), H6(q.role), G("span.desc", `#${q.id}`), q.discord_id ? G("span.mod-tag.discord", "Discord") : null),
				Z
					? G("p.warning.noicon", `Banned ${p0(q.banned_at)}.` + (q.banned_until ? ` Until ${p0(q.banned_until)}.` : " Permanent."))
					: G("p.desc", "Not banned."),
				G(
					"div.btn-container",
					G("button.btn", "View user", {
						onclick() {
							r("users", q.id, { label: "Tile inspector", reopen: () => h3($, Q, J) });
						}
					}),
					f4()
				)
			),
			new _("Tile inspector", Y)
		);
	}

	async function TK($, Q, J, Y) {
		let q = await nJ($, Q, J, Y);

		if (!q.ok) return new _("Area breakdown", G("div.modal", q0(await d(q)), R$));

		m3(await q.json());
	}

	function m3($) {
		let { region: Q, owned: J, total: Y, owners: q } = $,
			Z = G("div.modal.mod-region");

		if ((
			Z.append(G("div.mod-kv", s6("Area", `${Q.width}×${Q.height} at ${Q.x},${Q.y}`), s6("Owned pixels", `${J} / ${Y}`), s6("Distinct owners", String(q.length)))),
			!q.length
		)) Z.append(G("p.desc", "No owned pixels in this area.")); else Z.append(G("div.list.mod-list", ...q.map((K) => G(
			"div.item.box.outset.mod-region-row",
			{
				onclick() {
					if (K.user_id) r("users", K.user_id, { label: "Area breakdown", reopen: () => m3($) });
				}
			},
			G("b", K.username ?? `#${K.user_id}`),
			G("span.mod-row-meta", `${K.pixels} px`, G("span.desc", `${Math.round(K.pixels / J * 100)}%`))
		))));

		(
			Z.append(G("div.btn-container", f4())),
			new _("Area breakdown", Z)
		);
	}

	function f4() {
		return G("button.btn", "Close", {
			onclick() {
				(p(), r6());
			}
		});
	}

	function s6($, Q) {
		return G("div.mod-kv-row", G("span.mod-kv-label", $), G("span.mod-kv-value", Q));
	}

	function t$($, Q, J, Y) {
		if (Q == null) return G("span.mod-audit-actor", G("span.desc", `${$}: -`));

		return G(
			"span.mod-audit-actor",
			G("span.desc", `${$}:`),
			J
				? G("span.mod-jump-name.tooltip", J, {
					dataset: { tooltip: x.jumpTo },
					async onclick() {
						if (await y0({ userId: Q, username: J })) (p(), h$(Y));
					}
				})
				: "",
			G("span.desc", `#${Q}`),
			G("button.btn.mod-id-link", "View user", {
				onclick() {
					r("users", Q, Y);
				}
			})
		);
	}

	function EK($) {
		let Q = G("div.mod-wipe-audit");

		if ($.thumbnail) {
			let q = G("img.mod-wipe-thumb", {
				src: $.thumbnail,
				alt: "Cleared region",
				title: "Click to enlarge"
			});

			(
				q.addEventListener("click", () => IK($.thumbnail)),
				Q.append(q)
			);
		}

		let J = G("div.mod-wipe-info"),
			Y = $.width != null ? ` · ${$.width}×${$.height} at ${$.x},${$.y}` : "";

		if ((
			J.append(G("div.desc", `${$.cleared ?? $.applied ?? 0} px cleared${Y}`)),
			$.owners?.length
		)) J.append(G("div.mod-wipe-owners", G("span.desc", "Cleared owners:"), ...$.owners.map((q) => G("button.btn.mod-id-link", `${q.username ?? "#" + q.user_id} (${q.pixels})`, {
			onclick() {
				r("users", q.user_id, { label: "Audit Log", reopen: () => r("audit") });
			}
		})))); else J.append(G("span.desc", x.noOwners));

		return (Q.append(J), Q);
	}

	function IK($) {
		let Q = () => {
				(document.removeEventListener("keydown", J, !0), Y.remove());
			},
			J = (q) => {
				if (q.key === "Escape") (q.stopPropagation(), Q());
			},
			Y = G("div.modal-bg.confirm-bg.mod-wipe-expand-bg", G("div.modal-container", G("div.modal-title", G("span", "Cleared region"), G("button.btn", "Close", { onclick: Q })), G("div.modal-content", G("img.mod-wipe-expand-img", { src: $, alt: "Cleared region" }))));

		(
			Y.addEventListener("click", (q) => {
				if (q.target === Y) Q();
			}),
			document.addEventListener("keydown", J, !0),
			document.body.append(Y)
		);
	}

	function N3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = G("input.box", { type: "text", placeholder: x.searchAudit }),
			q = G("select.box.outset", G("option", "All actions", { value: "" }), ...x.auditActions.map((j) => G("option", j, { value: j }))),
			Z = G("select.box.outset", G("option", "Newest first", { value: "desc" }), G("option", "Oldest first", { value: "asc" })),
			K = null;

		async function W(j) {
			if (j) (K = null, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let X = Y.value.trim(),
				V = await iJ({
					before: K ?? void 0,
					limit: 25,
					action: q.value || void 0,
					search: X || void 0,
					order: Z.value === "asc" ? "asc" : "desc"
				});

			if (!V.ok) {
				Q.replaceChildren(q0(await d(V)));

				return;
			}

			let { entries: L, next_cursor: z } = await V.json();

			if ((Q.replaceChildren(), j && !L.length)) {
				let A = !!X || !!q.value;

				$.replaceChildren(G("p.desc", A
					? "No audit entries match these filters."
					: "No audit entries."));
			} else for (let A of L) $.append(H(A));

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

		(q.onchange = () => void W(!0), Z.onchange = () => void W(!0));

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
			let X = j.action === "wipe_canvas" ? EK(j.details) : G("div.details", T1(j.details)),
				V = { label: "Audit Log", reopen: () => r("audit") };

			return G("div.item.box.outset.mod-audit", G("div.mod-audit-head", G("b", j.action), G("span.desc", E0(j.created_at))), G("div.mod-audit-meta", t$("mod", j.mod_id, j.mod_username, V), t$("target", j.target_id, j.target_username, V)), X);
		}

		return (
			W(!0),
			G(
				"div.mod-audit-tab",
				G("div.btn-container.mod-toolbar.mod-audit-toolbar", G("div.input.mod-audit-search", Y), q, Z, G("button.btn", "Refresh", {
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

	function B3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = 0,
			q = G("select.input.box", G("option", { value: "report" }, "User Reports"), G("option", { value: "bug" }, "Bug Reports"), G("option", { value: "feedback" }, "Feedback"), G("option", { value: "suggestion" }, "Suggestions"), {
				oninput() {
					Z(!0);
				}
			});

		async function Z(W) {
			if (W) (Y = 0, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let F = await pJ(q.value, Y);

			if (!F.ok) {
				Q.replaceChildren(q0(await d(F)));

				return;
			}

			let H = await F.json();

			if ((Q.replaceChildren(), W && !H.length)) $.replaceChildren(G("p.desc", "No open items.")); else for (let j of H) $.append(K(j));

			(
				Y += H.length,
				J.replaceChildren(H.length >= 20
					? G("button.btn", "Load more", {
						onclick() {
							Z(!1);
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

						let D = await cJ(W.id, g, H.value.trim() || void 0);

						if (!D.ok) {
							F.replaceChildren(G("p.error.noicon", `${A} failed: ${await d(D)}`));

							return;
						}

						if (g != "ignore") z.remove();
						if (g == "prune") Z(!0);
					}
				}),
				X = W.content.split("|"),
				V = X.slice(4).join("|").trim(),
				L = { label: "Feedback", reopen: () => r("feedback") },
				z = G(
					"div.item.box.outset.mod-review",
					G("div.mod-review-head", G("b", W.kind)),
					W.kind == "report"
						? [
							G("p.desc", t$("from", W.user_id, W.username, L), " ", t$("target", parseInt(X[1]), X[2], L)),
							G("div.details.pre", G("b", X[3]), V && `// ${V}`)
						]
						: [
							G("p.desc", t$("from", W.user_id, W.username, L)),
							G("div.details.pre", W.content)
						],
					G("div.input", H),
					G("div.mod-form-row", j("Resolve", "resolve", x.feedback.resolve), j("Ignore", "ignore", x.feedback.ignore), j("Prune", "prune", x.feedback.prune)),
					F
				);

			return z;
		}

		return (
			Z(!0),
			G(
				"div.mod-review-tab",
				G("div.btn-container.mod-toolbar", q, G("button.btn", "Refresh", {
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

	var wK = 500;

	function G6() {
		if (!x0()) return;

		I5({
			label: "Wipe Canvas Selection",
			hint: x.wipe.hint,
			maxRegion: wK,
			dimUnpainted: !0,
			onRegion: async ($) => {
				if (!await i(`Clear a ${$.width}×${$.height} px area at (${$.x}, ${$.y})? This wipes those pixels for everyone (you can undo right after).`, "Wipe area", "Wipe", "Cancel")) return void G6();

				let J = await dJ($);

				if (!J.ok) return A0(J, "Could not wipe the area");

				let { applied: Y, chunks: q, undoToken: Z } = await J.json();

				new _("Area wiped", G("div.modal", G("p", `Cleared ${Y} pixel(s) across ${q} chunk(s).`), G("p.desc", x.snapshotDisplayNote), G("div.btn-container", Z ? E1(Z) : "", G("button.btn", "Close", {
					onclick() {
						(p(), G6());
					}
				}))));
			}
		});
	}

	async function hK($, Q) {
		let J = await sJ($, Q);

		if (!J.ok) return null;

		let Y = new Uint8Array(await J.arrayBuffer()),
			q = n$.deserialize(Y),
			Z = q.pixels instanceof Uint8Array ? q.pixels : q.pixels?.buffer ?? new Uint8Array(),
			K = h1(Z);

		return K.length ? K : null;
	}

	function mK($) {
		document.querySelector(".mod-ghost-control")?.remove();

		let Q = $.states.filter((W) => W === I1).length,
			J = $.states.filter((W) => W === w1).length,
			Y = [];

		if (Q > 0) Y.push(`${Q} px overpainted (dim)`);
		if (J > 0) Y.push(`${J} px removed by a moderator (red)`);

		let q = G("button.btn", "‹ Prev", {
			onclick() {
				$.onPrev?.();
			}
		});

		q.disabled = !$.onPrev;

		let Z = G("button.btn", "Next ›", {
			onclick() {
				$.onNext?.();
			}
		});

		Z.disabled = !$.onNext;

		let K = G(
			"div.mod-ghost-control",
			G("span", Y.length
				? `Submission ${$.position} · ${Y.join(" · ")}`
				: `Submission ${$.position}`),
			q,
			Z,
			G("button.btn", `↩ Back to ${$.username}`, { onclick: $.onBack }),
			G("button.btn", "Clear", {
				onclick() {
					(e5(), K.remove());
				}
			})
		);

		document.body.append(K);
	}

	function O3($, Q) {
		let J = G("div.list.mod-list.mod-ph-list"),
			Y = G("div.mod-ph-more"),
			q = null,
			Z = !1,
			K = [],
			W = new Map();

		async function F() {
			if (Z) return;

			(Z = !0, Y.replaceChildren(G("span.desc", "Loading…")));

			let L = await aJ($, q ? { before: q } : {});

			if ((Z = !1, !L.ok)) {
				Y.replaceChildren(q0(await d(L)));

				return;
			}

			let { entries: z, next_cursor: A } = await L.json();

			if (!z.length && !q) {
				(
					J.replaceChildren(G("p.desc", "No paint history (or pruned by retention).")),
					Y.replaceChildren()
				);

				return;
			}

			for (let g of z) {
				let O = K.length;

				(K.push(g), J.append(V(g, O)));
			}

			(
				q = A,
				Y.replaceChildren(A
					? G("button.btn.mod-ph-loadmore", "Load more", { onclick: () => void F() })
					: G("span.desc", "End of history."))
			);
		}

		async function H(L) {
			let z = W.get(L.id);

			if (z) return z;

			let A = await hK($, L.id);

			if (A) W.set(L.id, A);

			return A;
		}

		async function j(L) {
			let z = K[L];

			if (!z) return;

			let A = await H(z);

			if (!A) {
				N$("Could not load submission pixels.");

				return;
			}

			let g = A.map(() => i5),
				O = await tJ(A.map((y) => y.pos));

			if (O.ok) {
				let { owners: y, deleted: w } = await O.json();

				g = y.map((h, T) => h === $ ? i5 : w?.[T] ? w1 : I1);
			}

			(p(), Z7(A, g));

			let M = V6(A);

			a6(M.x, M.y, M.width, M.height);

			let D = L + 1 < K.length || !!q;

			mK({
				states: g,
				username: Q,
				position: `${L + 1} / ${K.length}${q ? "+" : ""}`,
				onPrev: L > 0 ? () => void j(L - 1) : void 0,
				onNext: D ? () => void X(L) : void 0,
				onBack: () => {
					(
						e5(),
						document.querySelector(".mod-ghost-control")?.remove(),
						r("users", $)
					);
				}
			});
		}

		async function X(L) {
			if (L + 1 >= K.length && q) await F();
			if (L + 1 < K.length) j(L + 1);
		}

		function V(L, z) {
			let A = G("div.mod-ph-thumb-box", G("span.desc", "…")),
				g = G("div.mod-ph-label", G("span", `${L.pixel_count} px`), G("span.desc", E0(L.created_at))),
				O = G(
					"div.item.box.outset.mod-ph-row",
					{
						onclick() {
							j(z);
						}
					},
					A,
					g
				);

			return (
				(async () => {
					let M = await H(L);

					if (!M) return;

					let D = V6(M);

					if ((A.replaceChildren(h8(M)), D)) g.append(G("span.desc", `@ ${D.x},${D.y}`));
				})(),
				O
			);
		}

		return (F(), G("div.mod-ph", J, Y));
	}

	function NK($) {
		if ($ === null || !Number.isFinite($) || $ < 0) return null;

		let Q = $ % v, J = $ / v | 0;

		return `@ ${Q},${J}`;
	}

	function S3($, Q) {
		let J = G("div.list.mod-list.mod-ch-list"),
			Y = G("div.mod-ch-more"),
			q = null,
			Z = !1;

		function K(H) {
			y0({ fallbackPos: H }).then((j) => {
				if (!j) return;

				(p(), h$({ label: Q, reopen: () => r("users", $) }));
			});
		}

		async function W() {
			if (Z) return;

			(Z = !0, Y.replaceChildren(G("span.desc", "Loading…")));

			let H = await rJ($, q ? { before: q } : {});

			if ((Z = !1, !H.ok)) {
				Y.replaceChildren(q0(await d(H)));

				return;
			}

			let { entries: j, next_cursor: X } = await H.json();

			if (!j.length && !q) {
				(
					J.replaceChildren(G("p.desc", "No chat messages.")),
					Y.replaceChildren()
				);

				return;
			}

			for (let V of j) J.append(F(V));

			(
				q = X,
				Y.replaceChildren(X
					? G("button.btn.mod-ch-loadmore", "Load more", { onclick: () => void W() })
					: G("span.desc", "End of history."))
			);
		}

		function F(H) {
			let j = NK(H.pos),
				X = j
					? G("button.btn.mod-ch-loc.mod-jump-loc", j, { dataset: { tooltip: x.jumpSent }, onclick: () => K(H.pos) })
					: "";

			return G("div.item.box.outset.mod-ch-row", G("div.mod-ch-text", H.content ?? ""), G("div.mod-ch-meta", G("span.desc", E0(H.timestamp)), X));
		}

		return (W(), G("div.mod-ch", J, Y));
	}

	var i6 = null;

	async function BK() {
		if (i6) return i6;

		return (i6 = await (await N.cursor.data.$get()).json(), i6);
	}

	function l4($) {
		return i6?.find((Q) => Q.id === $)?.name ?? `#${$}`;
	}

	async function _3($ = {}) {
		let Q = await BK();

		return new Promise((J) => {
			let Y = !1,
				q = (F) => {
					if (Y) return;

					(
						Y = !0,
						document.removeEventListener("keydown", Z, !0),
						W.remove(),
						J(F)
					);
				},
				Z = (F) => {
					if (F.key == "Escape") (F.stopPropagation(), q(null));
				},
				K = new Set($.owned ?? []),
				W = G("div.modal-bg.confirm-bg.cursor-pick-bg", G("div.modal-container", G("div.modal-title", G("span", $.title ?? "Select a cursor"), q$("close", { ariaLabel: "Close", onclick: () => q(null) })), G("div.modal-content", G("div.inventory.nopad", G("div.scroll.pad", G("div.items", Q.filter((F) => !F.free).map((F) => G(
					"div.item.box.tooltip",
					K.has(F.id) && { className: "owned" },
					{
						dataset: { tooltip: K.has(F.id) ? `${F.name} (owned)` : F.name },
						onclick: () => q(F.id)
					},
					G("img", { src: l0(F.id), draggable: !1 })
				))))))));

			(
				W.addEventListener("click", (F) => {
					if (F.target == W) q(null);
				}),
				document.addEventListener("keydown", Z, !0),
				document.body.append(W)
			);
		});
	}

	var V$ = v,
		q6 = Z0,
		OK = "rgba(8,8,12,0.66)",
		SK = "rgba(255,56,56,0.5)",
		_K = 2,
		yK = 256;

	function y3($) {
		let { ownedPositions: Q } = $,
			J = new Uint8Array(i$ + 7 >> 3);

		for (let I = 0; I < Q.length; I++) {
			let b = Q[I];

			J[b >> 3] |= 1 << (b & 7);
		}

		let Y = (I) => J[I >> 3] >> (I & 7) & 1,
			q = G("canvas.mod-mask-layer", { width: V$, height: q6 }),
			Z = G("canvas.mod-select-layer", { width: V$, height: q6 }),
			K = q.getContext("2d"),
			W = Z.getContext("2d");

		(K.fillStyle = OK, K.fillRect(0, 0, V$, q6));

		for (let I = 0; I < Q.length; I++) {
			let b = Q[I];

			K.clearRect(b % V$, b / V$ | 0, 1, 1);
		}

		(W.fillStyle = SK, n0.append(q, Z));

		let F = G("div.mod-sel-hover", { style: { display: "none" } }),
			H = G("div.mod-sel-rect", { style: { display: "none" } });

		document.body.append(F, H);

		let j = new Set(),
			X = "rect",
			V = 24,
			L = !1,
			z = 0,
			A = 0,
			g = !1,
			O = null,
			M = null,
			D = () => $.onChange?.(j.size);

		function y(I, b) {
			if (I < 0 || I >= V$ || b < 0 || b >= q6) return;

			let s = b * V$ + I;

			if (!Y(s) || j.has(s)) return;

			(j.add(s), W.fillRect(I, b, 1, 1));
		}

		function w(I, b) {
			let s = Math.max(1, V >> 1), k0 = s * s;

			for (let X0 = -s; X0 <= s; X0++) {
				let M0 = b + X0;

				if (M0 < 0 || M0 >= q6) continue;

				for (let D0 = -s; D0 <= s; D0++) {
					if (X === "circle" && D0 * D0 + X0 * X0 > k0) continue;

					y(I + D0, M0);
				}
			}
		}

		function h(I, b, s, k0) {
			let X0 = Math.hypot(s - I, k0 - b),
				M0 = Math.max(1, V >> 1),
				D0 = Math.max(1, Math.ceil(X0 / M0));

			for (let h0 = 1; h0 <= D0; h0++) w(Math.round(I + (s - I) * h0 / D0), Math.round(b + (k0 - b) * h0 / D0));
		}

		function T() {
			if (!O || !M) return;

			let I = Math.min(O[0], M[0]),
				b = Math.min(O[1], M[1]),
				s = Math.max(O[0], M[0]),
				k0 = Math.max(O[1], M[1]);

			for (let X0 = 0; X0 < Q.length; X0++) {
				let M0 = Q[X0], D0 = M0 % V$, h0 = M0 / V$ | 0;

				if (D0 >= I && D0 <= s && h0 >= b && h0 <= k0) y(D0, h0);
			}
		}

		function B() {
			return {
				b: k.rect,
				sx: k.rect.width / g0.width,
				sy: k.rect.height / g0.height
			};
		}

		function m() {
			if (!O || !M) {
				H.style.display = "none";

				return;
			}

			let { b: I, sx: b, sy: s } = B(),
				k0 = Math.min(O[0], M[0]),
				X0 = Math.min(O[1], M[1]),
				M0 = Math.abs(M[0] - O[0]) + 1,
				D0 = Math.abs(M[1] - O[1]) + 1;

			Object.assign(H.style, {
				display: "block",
				left: `${I.left + k0 * b}px`,
				top: `${I.top + X0 * s}px`,
				width: `${M0 * b}px`,
				height: `${D0 * s}px`
			});
		}

		function E(I, b) {
			if (X === "rect") {
				F.style.display = "none";

				return;
			}

			let { sx: s } = B(), k0 = Math.max(4, V * s);

			Object.assign(F.style, {
				display: "block",
				left: `${I}px`,
				top: `${b}px`,
				width: `${k0}px`,
				height: `${k0}px`,
				borderRadius: X === "circle" ? "50%" : "0"
			});
		}

		function S(I) {
			if (I.button !== 0) return;

			(I.preventDefault(), I.stopPropagation());

			let [b, s] = S0(I.clientX, I.clientY);

			if (X === "rect") (g = !0, O = [b, s], M = [b, s], m()); else (L = !0, z = b, A = s, w(b, s), D());
		}

		function n(I) {
			if (g) {
				(
					I.preventDefault(),
					I.stopPropagation(),
					M = S0(I.clientX, I.clientY),
					m()
				);

				return;
			}

			if (L) {
				(I.preventDefault(), I.stopPropagation());

				let [b, s] = S0(I.clientX, I.clientY);

				(h(z, A, b, s), z = b, A = s, D());

				return;
			}

			E(I.clientX, I.clientY);
		}

		function J0(I) {
			if (g && I.button === 0) {
				(
					I.preventDefault(),
					I.stopPropagation(),
					g = !1,
					T(),
					H.style.display = "none",
					O = M = null,
					D()
				);

				return;
			}

			if (L && I.button === 0) (I.preventDefault(), I.stopPropagation(), L = !1);
		}

		function l(I) {
			if (I.key !== "Escape") return;
			if (document.querySelector(".modal-bg")) return;

			(I.preventDefault(), I.stopPropagation(), t(), $.onExit?.());
		}

		let Q0 = (I) => I.preventDefault();

		(
			U0.addEventListener("mousedown", S, !0),
			window.addEventListener("mousemove", n, !0),
			window.addEventListener("mouseup", J0, !0),
			document.addEventListener("keydown", l, !0),
			U0.addEventListener("contextmenu", Q0, !0)
		);

		let P0 = !1;

		function t() {
			if (P0) return;

			(
				P0 = !0,
				U0.removeEventListener("mousedown", S, !0),
				window.removeEventListener("mousemove", n, !0),
				window.removeEventListener("mouseup", J0, !0),
				document.removeEventListener("keydown", l, !0),
				U0.removeEventListener("contextmenu", Q0, !0),
				q.remove(),
				Z.remove(),
				F.remove(),
				H.remove()
			);
		}

		return {
			setTool(I) {
				if ((X = I, I === "rect")) F.style.display = "none";
			},

			setBrushSize(I) {
				V = Math.max(_K, Math.min(yK, Math.round(I)));
			},

			clearSelection() {
				(j.clear(), W.clearRect(0, 0, V$, q6), D());
			},
			count: () => j.size,
			positions: () => [...j],
			destroy: t
		};
	}

	async function v3($, Q = 0) {
		let J = await NJ($, Q);

		if (!J.ok) return null;

		let Y = new Uint8Array(await J.arrayBuffer()),
			q = n$.deserialize(Y),
			W = ((q.positions instanceof Uint8Array ? q.positions : q.positions?.buffer) ?? new Uint8Array()).slice(),
			F = new Uint32Array(W.buffer, 0, W.byteLength / 4 | 0);

		return {
			positions: F,
			total: q.total ?? F.length,
			truncated: !!q.truncated,
			offset: q.offset ?? 0,
			cap: q.cap ?? F.length
		};
	}

	var x3 = [
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
		g3 = x3[0].tools[0];

	async function p3($, Q, J) {
		if (!x0()) return;

		J("Loading this user's pixels…", !0);

		let Y;

		try {
			Y = await v3($);
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

		(p(), gK($, Q, Y));
	}

	function gK($, Q, J) {
		let Y = J,
			q = G("span.mod-sel-count"),
			Z = G("button.btn.mod-sel-delete", "Delete selected"),
			K = G("button.btn", "Clear selection"),
			W = G("span.mod-sel-sizeout", "24px"),
			F = G("input.mod-sel-size", { type: "range", min: "2", max: "256", value: "24" }),
			H = G("div.mod-sel-brush", G("span", "Brush"), F, W);

		H.style.display = "none";

		let j = g3.tool,
			X = 24,
			V,
			L = (l) => {
				(
					q.textContent = `${l} flagged`,
					Z.textContent = l ? `Delete selected (${l})` : "Delete selected",
					Z.disabled = l === 0,
					K.disabled = l === 0
				);
			};

		function z(l) {
			let Q0 = y3({
				ownedPositions: l.positions,
				onChange: (P0) => L(P0),
				onExit: () => A()
			});

			return (Q0.setTool(j), Q0.setBrushSize(X), Q0);
		}

		let A = () => {
			(V.destroy(), J0.remove(), r("users", $));
		};

		(
			V = z(Y),
			F.oninput = () => {
				(
					X = Number(F.value),
					V.setBrushSize(X),
					W.textContent = `${F.value}px`
				);
			}
		);

		let g = G("p.mod-sel-desc", x.wipe.tools[g3.tool]),
			O = [],
			M = x3.map(({ group: l, tools: Q0 }) => {
				let P0 = Q0.map(({ tool: t, label: I }) => {
					let b = G("button.btn.mod-sel-tool", I);

					return (
						b.onclick = () => {
							(j = t, V.setTool(t));

							for (let s of O) s.classList.toggle("active", s === b);

							(
								H.style.display = t === "rect" ? "none" : "",
								g.textContent = x.wipe.tools[t]
							);
						},
						O.push(b),
						b
					);
				});

				return G("div.mod-sel-group", G("span.mod-sel-group-label", l), G("div.mod-sel-group-btns", ...P0));
			});

		O[0].classList.add("active");

		let D = G("p.mod-sel-warn"),
			y = G("div.mod-range-track"),
			w = G("div.mod-range-thumb");

		y.append(w);

		let h = G("div.mod-range-label"),
			T = Y.truncated ? G("div.mod-range", D, y, h) : "",
			B = () => Math.max(0, Y.total - Y.cap);

		function m(l) {
			return Math.max(28, l * Math.min(1, Y.cap / Y.total));
		}

		function E(l) {
			let Q0 = y.clientWidth || 260,
				P0 = m(Q0),
				t = Math.max(0, Q0 - P0),
				I = B();

			(
				w.style.width = `${P0}px`,
				w.style.left = `${I === 0 ? 0 : t * (l / I)}px`
			);

			let b = Math.min(Y.total, l + Y.cap);

			h.textContent = `Viewing pixels ${(l + 1).toLocaleString()}–${b.toLocaleString()} of ${Y.total.toLocaleString()}`;
		}

		function S(l) {
			let Q0 = y.clientWidth || 260,
				P0 = Math.max(0, Q0 - m(Q0));

			return P0 === 0 ? 0 : Math.round(l / P0 * B());
		}

		if (T) {
			D.textContent = a0(x.wipe.warn, Y.total.toLocaleString(), Y.cap.toLocaleString());

			let l = !1, Q0 = 0, P0 = 0;

			(
				w.onpointerdown = (I) => {
					(
						I.preventDefault(),
						l = !0,
						Q0 = I.clientX,
						P0 = parseFloat(w.style.left || "0")
					);

					try {
						w.setPointerCapture(I.pointerId);
					} catch {}
				},

				w.onpointermove = (I) => {
					if (!l) return;

					let b = y.clientWidth || 260,
						s = Math.max(0, b - m(b)),
						k0 = Math.max(0, Math.min(s, P0 + (I.clientX - Q0)));

					w.style.left = `${k0}px`;

					let X0 = S(k0), M0 = Math.min(Y.total, X0 + Y.cap);

					h.textContent = `Viewing pixels ${(X0 + 1).toLocaleString()}–${M0.toLocaleString()} of ${Y.total.toLocaleString()}`;
				}
			);

			let t = (I) => {
				if (!l) return;

				l = !1;

				try {
					w.releasePointerCapture(I.pointerId);
				} catch {}

				n(S(parseFloat(w.style.left || "0")));
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

			let Q0 = null;

			try {
				Q0 = await v3($, l);
			} catch {}

			if (!Q0) {
				E(Y.offset);

				return;
			}

			(Y = Q0, V.destroy(), V = z(Y), L(0), E(Y.offset));
		}

		(
			Z.onclick = async () => {
				let l = V.positions();

				if (!l.length) return;
				if (!await i(a0(x.wipe.confirm, l.length, Q), "Delete selected strokes", "Delete", "Cancel")) return;

				let P0 = await BJ($, l);

				if (!P0.ok) return e("Could not delete selected pixels", await d(P0));

				let { pixelsWiped: t, undoToken: I } = await P0.json();

				(
					V.destroy(),
					J0.remove(),
					new _("Strokes deleted", G("div.modal", G("p", a0(x.wipe.removed, t, Q)), G("p.desc", x.snapshotDisplayNote), G(
						"div.btn-container",
						I ? E1(I) : "",
						G("button.btn", `↩ Back to ${Q}`, {
							onclick() {
								(p(), r("users", $));
							}
						}),
						G("button.btn.secondary", "Close", { onclick: () => p() })
					)))
				);
			},
			K.onclick = () => V.clearSelection()
		);

		let J0 = G("div.mod-select-overlay", G("div.mod-sel-head", `Deleting ${Q}'s pixels`), T, G("div.mod-sel-tools", ...M), g, H, G("div.mod-sel-info", q), G("div.mod-sel-actions", Z, K, G("button.btn", "Cancel", { onclick: () => A() })), G("p.mod-sel-hint", "Right-drag to pan · scroll to zoom · Esc to cancel"));

		(L(0), document.body.append(J0));
	}

	function u4($, Q) {
		let J = G("div.list", "Loading..."), Y = !1;

		new _("Moderation", G("div.clans-modal", Q && d4(Q), C6($, !0), G(
			"details.clan-member-list.box",
			G("summary", "Members", {
				async onclick() {
					if (Y) return;

					Y = !0;

					let q = await uJ($.id);

					if (!q.ok) return (Y = !1, J.replaceChildren(G("p.error.noicon", await d(q))));

					let Z = await q.json();

					J.replaceWith(G("div.list", Z.map((K, W, F) => [
						G("a.link", K.username, {
							onclick() {
								r("users", K.id, { label: $.name, reopen: () => u4($, Q) });
							}
						}),
						W < F.length - 1 && ", "
					])));
				}
			}),
			J
		)));
	}

	var c3 = 50, vK = ["user", "moderator", "admin"];

	function o4($) {
		let Q = G("div.list.mod-list"),
			J = G("div.mod-detail"),
			Y = G("div.mod-status"),
			q = "";

		async function Z(M) {
			(q = M, Y.replaceChildren("Searching..."));

			let D = await TJ(M);

			if (M != q) return;

			if (!D.ok) {
				Y.replaceChildren(q0(await d(D)));

				return;
			}

			let { users: y } = await D.json();

			(Y.replaceChildren(), K(y));
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
				G("span.mod-row-meta", `#${D.id}`, H6(D.role), D.ban && G("span.mod-tag.banned", "banned"), D.mute && G("span.mod-tag.muted", "muted"), Array.isArray(D.flagged) && G("span.mod-tag.flagged", D.flagged.length > 1 ? `flagged x${D.flagged.length}` : "flagged"))
			)));
		}

		async function W(M, D, y = !1) {
			J.replaceChildren(G("p.desc", "Loading..."));

			let w = await EJ(M);

			if (!w.ok) {
				J.replaceChildren(q0(await d(w)));

				return;
			}

			let { user: h, cursors: T } = await w.json();

			if ((H(h, T, D), y && h.username && g.value !== h.username)) (g.value = h.username, Z(h.username));
		}

		function F(M, D, y) {
			M.replaceChildren(G(y ? "p.success.noicon" : "p.error.noicon", D));
		}

		function H(M, D, y) {
			let w = M.id,
				h = G("div.mod-action-msg"),
				T = typeof M.ban == "object" ? M.ban : null,
				B = typeof M.mute == "object" ? M.mute : null,
				m = Array.isArray(M.flagged) ? M.flagged : null,
				E = !!M.excluded_from_leaderboard,
				S = (t) => W(w, t),
				n = (t) => {
					let I = G("button.btn.mod-undo", "Undo", {
						async onclick() {
							I.disabled = !0;

							let b = await t();

							if (!b.ok) {
								(I.disabled = !1, F(h, `Undo failed: ${await d(b)}`, !1));

								return;
							}

							await S({ text: "Reverted." });
						}
					});

					return I;
				};

			if (y) {
				if ((F(h, y.text, !0), y.undo)) h.append(n(y.undo));
			}

			let J0 = (t, I, b) => {
					let s = G("input.box", { type: "text", placeholder: "Reason (optional)" }),
						k0 = G("select.box.outset", r5.map((X0, M0) => G("option", X0.label, { value: String(M0), selected: M0 == 0 })));

					return G("div.mod-form-sanction", G("div.input", s), G("div.mod-form-row", k0, G("button.btn", t, {
						async onclick() {
							let X0 = r5[Number(k0.value)],
								M0 = X0.seconds == null ? "permanently" : `for ${X0.label}`;

							if (!await i(`${t} ${M.username} ${M0}?`, `${t} user`)) return;

							let h0 = await I(s.value.trim(), X0.seconds ?? void 0);

							if (!h0.ok) {
								F(h, `${t} failed: ${await d(h0)}`, !1);

								return;
							}

							await S({ text: `${t} applied.`, undo: b });
						}
					})));
				},
				l = (t, I, b, s, k0) => G("button.btn", t, {
					async onclick() {
						if (!await i(I, t)) return;

						let M0 = await b();

						if (!M0.ok) {
							F(h, `${t} failed: ${await d(M0)}`, !1);

							return;
						}

						let D0 = "", h0;

						try {
							let g5 = await M0.clone().json();

							if (typeof g5.pixelsCleared == "number") D0 = ` (${g5.pixelsCleared} pixels cleared)`;

							h0 = g5.undoToken;
						} catch {}

						await S({
							text: s + D0 + (k0 ? ` ${k0}` : ""),
							undo: h0 ? () => C1(h0) : void 0
						});
					}
				}),
				Q0 = G("div.mod-sessions"),
				P0 = e6();

			J.replaceChildren(G(
				"div.mod-detail-inner",
				G(
					"div.mod-detail-head",
					G("h3.tooltip.mod-jump-name", M.username, {
						dataset: { tooltip: "Click to jump to this user's cursor" },
						async onclick() {
							if (await y0({ userId: w, username: M.username })) (p(), h$({ label: M.username, reopen: () => r("users", w) }));
						}
					}),
					H6(M.role),
					G("span.desc", `#${M.id}`)
				),
				G(
					"div.mod-kv",
					A("Created At", E0(M.created_at)),
					A("Country", B1(M.country_code || "")),
					A("Paint", `${Math.floor(M.paint / K0)} cans (${M.paint} px)`),
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
							u4(M.clan, { label: M.username, reopen: () => r("users", M.id) });
						}
					})),
					"email" in M && A("Email", M.email || "-")
				),
				T
					? G("p.warning.noicon", `Banned ${p0(T.at)} by #${T.by ?? "?"}. Reason: ${T.reason || "(none)"}. ` + (T.until ? `Until ${p0(T.until)}.` : "Permanent."))
					: G("p.desc", "Not banned."),
				B
					? G("p.warning.noicon", `Muted ${p0(B.at)} by #${B.by ?? "?"}. Reason: ${B.reason || "(none)"}. ` + (B.until ? `Until ${p0(B.until)}.` : "Permanent."))
					: G("p.desc", "Not muted."),
				m
					? G("div.mod-flagged-line", G("span.warning.noicon", "Flagged: " + m.map((t) => `${t.kind} (x${t.hits})`).join(", ") + "."), G("button.btn.mod-flagged-open", "Open review queue", {
						onclick() {
							r("review", void 0, { label: M.username, reopen: () => r("users", w) });
						}
					}))
					: G("p.desc", "Not flagged."),
				h,
				G("div.mod-section", G("b", "Ban"), T
					? l("Unban", `Unban ${M.username}?`, () => o5(w), "User unbanned.")
					: J0("Ban", (t, I) => wJ(w, t, I), () => o5(w))),
				G("div.mod-section", G("b", "Mute"), B
					? l("Unmute", `Unmute ${M.username}?`, () => n5(w), "User unmuted.")
					: J0("Mute", (t, I) => hJ(w, t, I), () => n5(w))),
				G(
					"div.mod-section",
					G("b", "Leaderboard"),
					E
						? G("p.warning.noicon", "Hidden from the leaderboard.")
						: G("p.desc.mod-hint", "Hides this user from the users board and from clan/country totals."),
					E
						? l("Show on leaderboard", `Show ${M.username} on the leaderboard again?`, () => t5(w, !1), "User restored to the leaderboard.")
						: l("Hide from leaderboard", `Hide ${M.username} from the leaderboard?`, () => t5(w, !0), "User hidden from the leaderboard.")
				),
				G("div.mod-section", G("b", "Strokes"), G("p.desc.mod-hint", x.user.delete.desc), G("div.mod-form-row", l("Delete All User's Strokes", a0(x.user.delete.confirm, M.username), () => mJ(w), "Deleted the user's strokes.", x.snapshotDisplayNote), G("button.btn", "Select Strokes to Delete...", {
					onclick() {
						p3(w, M.username, (t, I) => z(h, t, I));
					}
				}))),
				G("div.mod-section", G("b", "Paint history"), G("p.desc.mod-hint", x.user.draws), O3(M.id, M.username)),
				G("div.mod-section", G("b", "Chat history"), G("p.desc.mod-hint", x.user.messages), S3(M.id, M.username)),
				G("div.mod-section", G("b", "Paint"), X(M, h, S)),
				G("div.mod-section", G("b", "Cursors"), V(M, D, h, S)),
				G("div.mod-section", G("b", "Message"), j(M, h)),
				P0 && G("div.mod-section", G("b", "Role"), L(M, h, S)),
				P0 && G(
					"div.mod-section",
					G("b", "Sessions"),
					G("button.btn", "Load sessions", {
						async onclick() {
							Q0.replaceChildren(G("p.desc", "Loading..."));

							let t = await IJ(w);

							if (!t.ok) {
								Q0.replaceChildren(q0(await d(t)));

								return;
							}

							let I = await t.json();

							if (!I.length) {
								Q0.replaceChildren(G("p.desc", "No sessions."));

								return;
							}

							Q0.replaceChildren(G("div.list.mod-list", ...I.map((b) => G("div.item.box.outset.mod-session", G("span", `#${b.id}`), G("span", b.ip || "no ip"), G("span.desc", "seen ", E0(b.last_verified_at))))));
						}
					}),
					Q0
				)
			));
		}

		function j(M, D) {
			let y = G("textarea.box", {
				placeholder: `Message to ${M.username}...`,
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

					let h = await yJ(M.id, w);

					if (!h.ok) {
						z(D, `Message failed: ${await d(h)}`, !1);

						return;
					}

					(y.value = "", z(D, "Message sent.", !0));
				}
			})));
		}

		function X(M, D, y) {
			let w = G("input.box", { type: "number", min: "1", max: String(c3), value: "10" }),
				h = (T) => G("button.btn", `Reset ${T}`, {
					async onclick() {
						if (!await i(`Reset ${M.username}'s ${T}? (current: ${Math.floor(M[T])})`)) return;

						let m = await SJ(M.id, T);

						if (!m.ok) return z(D, await d(m), !1);

						await y({ text: `Reset ${T}.` });
					}
				});

			return G(
				"div.mod-form-row",
				w,
				G("button.btn", "Give Cans", {
					async onclick() {
						let T = Math.max(1, Math.min(c3, Math.floor(Number(w.value) || 0)));

						if ((
							w.value = String(T),
							!await i(`Give ${T} can${T > 1 ? "s" : ""} to ${M.username}?`, "Give cans")
						)) return;

						let m = await OJ(M.id, T);

						if (!m.ok) {
							z(D, `Give cans failed: ${await d(m)}`, !1);

							return;
						}

						await y({ text: `Gave ${T} can${T > 1 ? "s" : ""}.` });
					}
				}),
				h("paint"),
				h("coins")
			);
		}

		function V(M, D, y, w) {
			let h = D.length ? D.map((T) => l4(T)).join(", ") : "None unlocked.";

			return G("div", G("p.desc.mod-hint", `Unlocked: ${h}`), G("div.mod-form-row", G("button.btn", "Give a cursor...", {
				async onclick() {
					let T = await _3({ title: `Give a cursor to ${M.username}`, owned: D });

					if (T == null) return;

					let B = l4(T);

					if (!await i(`Give the "${B}" cursor to ${M.username}?`, "Give cursor")) return;

					let E = await _J(M.id, T);

					if (!E.ok) {
						z(y, `Give cursor failed: ${await d(E)}`, !1);

						return;
					}

					let S = {};

					try {
						S = await E.clone().json();
					} catch {}

					await w({
						text: S.granted === !1
							? `${M.username} already has the "${B}" cursor.`
							: `Gave the "${B}" cursor.`
					});
				}
			})));
		}

		function L(M, D, y) {
			let w = M.role,
				h = G("select.box.outset", vK.map((T) => G("option", T, { value: T, selected: T == M.role })));

			return G("div.mod-form-row", h, G("button.btn", "Set role", {
				async onclick() {
					let T = h.value;

					if (T == M.role) return;

					if (!await i(`Change ${M.username}'s role to "${T}"?`, "Change role")) {
						h.value = M.role;

						return;
					}

					let m = await a5(M.id, T);

					if (!m.ok) {
						(
							z(D, `Role change failed: ${await d(m)}`, !1),
							h.value = M.role
						);

						return;
					}

					await y({ text: `Role set to ${T}.`, undo: () => a5(M.id, w) });
				}
			}));
		}

		function z(M, D, y) {
			M.replaceChildren(G(y ? "p.success.noicon" : "p.error.noicon", D));
		}

		function A(M, D) {
			return G("div.mod-kv-row", G("span.mod-kv-label", M), G("span.mod-kv-value", D));
		}

		let g = G("input.box", { type: "text", placeholder: "Search by username..." }),
			O;

		if ((
			g.oninput = () => {
				(
					clearTimeout(O),
					O = setTimeout(() => void Z(g.value.trim()), 250)
				);
			},

			g.onkeydown = (M) => {
				if (M.key == "Enter") (clearTimeout(O), Z(g.value.trim()));
			},
			Z(""),
			$ !== void 0
		)) W($, void 0, !0);

		return G("div.mod-users", G("div.mod-users-left", G("div.input.mod-search", g), Y, Q), J);
	}

	var xK = ($) => ({
		onclick() {
			r("users", $, { label: "Referrals", reopen: () => r("referrals") });
		}
	});

	function b3() {
		let $ = G("div.list.mod-list"),
			Q = G("div.mod-status"),
			J = G("div.btn-container"),
			Y = 0;

		async function q(K) {
			if (K) (Y = 0, $.replaceChildren(), J.replaceChildren());

			Q.replaceChildren("Loading...");

			let W = await fJ(Y);

			if (!W.ok) {
				Q.replaceChildren(q0(await d(W)));

				return;
			}

			let F = await W.json();

			if ((Q.replaceChildren(), K && !F.length)) $.replaceChildren(G("p.desc", "No referrals.")); else for (let H of F) $.append(Z(H));

			(
				Y += F.length,
				J.replaceChildren(F.length >= 20
					? G("button.btn", "Load more", {
						onclick() {
							q(!1);
						}
					})
					: "")
			);
		}

		function Z(K) {
			let W = { label: "Referrals", reopen: () => r("referrals") },
				F = G("div.mod-action-msg"),
				H = G(
					"div.item.box.outset.mod-review",
					G("div.mod-review-head", G("b", K.code), !K.verified && G("span.mod-tag.flagged", "Not verified"), K.flagged && G("span.mod-tag.banned", "Flagged"), E0(K.created_at)),
					G("p.desc", t$("created by", K.user_id, K.username, W), ` · ${K.uses} uses`),
					G(
						"div.mod-form-row",
						G("button.btn", "List Users", {
							async onclick() {
								let j = await (await lJ(K.user_id)).json();

								(
									j.sort((X, V) => V.created_at - X.created_at),
									F.replaceChildren(G("div.details.pre", !j.length && "None", j.map((X, V) => [
										G("span", `${X.country_code} `, G("a.link", X.username, xK(X.id)), " (", E0(X.created_at, H7(X.created_at)), ")"),
										V < j.length - 1 && "; "
									])))
								);
							}
						}),
						!K.verified && G("button.btn", "Verify", {
							async onclick() {
								if (!await i(a0(x.referral.confirmVerify, K.username))) return;

								let X = await s5(K.code, "verify");

								if (!X.ok) {
									F.replaceChildren(G("p.error.noicon", await d(X)));

									return;
								}

								(K.verified = !0, K.flagged = !1, H.replaceWith(Z(K)));
							}
						}),
						G("button.btn", "Delete", {
							async onclick() {
								if (!await i(a0(x.referral.confirmDelete, K.username))) return;

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
			q(!0),
			G(
				"div.mod-review-tab",
				G("p", x.referral.desc),
				G("div.btn-container.mod-toolbar", G("button.btn", "Refresh", {
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

	function f3() {
		let $ = G("div.mod-action-msg"),
			Q = G("p.desc.mod-bot-mapping"),
			J = G("input.box.mod-bot-slider", { type: "range", min: "-1", max: "120", step: "1", value: "0" }),
			Y = (Z) => {
				if (Z === -1) return "Global chat is disabled (-1 / inf)";
				if (Z === 0) return "Global chat has no cooldown";

				return `Global chat has ${C0(Z, "second")} of cooldown`;
			},
			q = () => {
				Q.replaceChildren(Y(Number(J.value)));
			};

		return (
			J.oninput = q,
			(async () => {
				let Z = await Q7();

				if (!Z.ok) {
					$.replaceChildren(q0(await d(Z)));

					return;
				}

				(
					J.value = String(Math.floor(Number(await Z.text()) / 1000)),
					q()
				);
			})(),

			G("div.mod-misc-config", G("p.desc", "Configure the global delay required between global user chat messages."), G("div.mod-form", G("div.mod-bot-slider-row", G("span.desc", "inf"), J, G("span.desc", "120s")), Q, $, G("div.mod-form-row", G("button.btn", "Save", {
				async onclick() {
					let Z = Number(J.value), K = await J7(Z);

					if (!K.ok) {
						$.replaceChildren(q0(await d(K)));

						return;
					}

					$.replaceChildren(G("p.success.noicon", x.gwValSaved));
				}
			}))))
		);
	}

	var x = {}, n4 = !1;

	async function d3() {
		if (n4 || !x0()) return;

		n4 = !0;

		let $ = await N.mod.locale.$get();

		if (!$.ok) return (n4 = !1, A0($, "Could not load mod locale"));

		let Q = await $.json();

		for (let J in Q) x[J] = Q[J];
	}

	function x0() {
		let $ = R.user?.role;

		return $ === "moderator" || $ === "admin";
	}

	function e6() {
		return R.user?.role === "admin";
	}

	var pK = new Set(["review", "broadcast", "botconfig"]);

	function l3($) {
		if ($ === "inspect") return (p(), r6(), !0);
		if ($ === "wipe") return (p(), G6(), !0);

		return !1;
	}

	function u3($) {
		switch ($) {
			case "users":
				return o4();

			case "review":
				return C3();

			case "audit":
				return N3();

			case "feedback":
				return B3();

			case "referrals":
				return b3();

			case "broadcast":
				return A3();

			case "botconfig":
				return E3();

			case "misc":
				return f3();

			case "inspect":

			case "wipe":
				throw new Error(`mod tool tab "${$}" has no panel`);
		}
	}

	function d4($) {
		return G("div.mod-back", G("button.btn.mod-back-btn", `↩ Back to ${$.label}`, {
			onclick() {
				$.reopen();
			}
		}));
	}

	async function o3($) {
		let Q = await N.mod.users.idFromName.$get({ query: { name: $ } });

		if (!Q.ok) return A0(Q, "Could not fetch user");

		let J = await Q.json();

		r("users", J.id);
	}

	function r($ = "users", Q, J) {
		if (!x0()) return;
		if ((j6(), l3($))) return;

		let Y = G("div.pad.mod-body");

		if (J) Y.append(d4(J));

		Y.append($ === "users" ? o4(Q) : u3($));

		let q = Object.keys(x.tabLabels).filter((j) => e6() || !pK.has(j)),
			Z = V5(q.map((j) => ({
				label: x.tabLabels[j],
				active: j == $,
				action() {
					if (l3(j)) return;

					(W(j), Y.replaceChildren(u3(j)));
				}
			}))),
			K = Array.from(Z.querySelectorAll(".abtn"));

		function W(j) {
			q.forEach((X, V) => K[V]?.classList.toggle("active", X == j));
		}

		let F = q.indexOf("feedback"),
			H = F >= 0 ? K[F] : void 0;

		if (H) (async () => {
			try {
				let j = await bJ();

				if (!j.ok) return;

				let { total: X } = await j.json();

				if (X > 0) H.append(G("span.mod-tab-dot.tooltip", {
					dataset: { tooltip: `${X} open feedback item${X === 1 ? "" : "s"}` }
				}));
			} catch {}
		})();

		new _("Moderation", G("div.mod-modal.nopad", Z, Y));
	}

	var cK = ($) => Math.max(Math.min($ * 50 + 1500, 1e4), 2000);

	function t3($, Q) {
		let J = $ ? Z6 : $1;

		if ((J.prepend(Q), J.childElementCount >= 200)) J.children[200]?.remove();
	}

	function TY($, Q, J, Y, q, Z = !1, K) {
		let W = $ == R.connectionId,
			F = Y ?? R.user.username,
			H = G(
				"p.box",
				{
					ondblclick: () => t4(F),
					onclick: (X) => {
						if (X.shiftKey) t4(F);
					}
				},
				G(
					"b.tooltip",
					q && G("b", B$(q)),
					F,
					x0()
						? {
							dataset: { tooltip: "Click to open mod panel" },
							onclick: () => void o3(Y)
						}
						: {
							dataset: { tooltip: "Click to jump to the user!" },
							onclick: () => void y0({ connId: $, fallbackPos: J, username: F })
						},
					W && { className: "self" }
				),
				G("span", Q)
			);

		if (Q.split(/\s+/).includes(R.user.username)) H.classList.add("important");
		if (K !== void 0) H.dataset.uid = String(K);

		t3(Z, H);
	}

	function EY($) {
		for (let Q of [$1, Z6]) t0(`p.box[data-uid="${$}"]`, Q).forEach((J) => J.remove());
	}

	function n3($, Q, ...J) {
		t3(Q, G("p.box.local", $ && { className: "error" }, G("span", J)));
	}

	function IY($, Q) {
		if (!$.element || c.a11y.hideChatBubbles) return;

		let J = G("p", Q);

		(
			$.element.querySelector(".chat-bubble")?.append(J),
			setTimeout(() => J.remove(), cK(Q.length))
		);
	}

	async function a3($, Q) {
		let J = await f$(6, { message: $, isGlobal: Q }, 5000);

		if ("error" in J) {
			let Y = J;

			if (Y.error == "muted") n3(!0, Q, `You are muted. (expires: ${O1(Y.until || null)})`); else if (Y.error == "chatCooldown") (
				w5(Y.until),
				n3(!0, Q, Y.until
					? "Global chat is on cooldown!"
					: "Global chat is disabled.")
			);
		}

		if (!J.message) return;
		if (J.cooldown !== void 0) w5(J.cooldown);

		w7(J.message);
	}

	function s3() {
		if (k.normalizedZoom <= T$) return (e("You need to zoom in to chat locally!"), !0);

		return !1;
	}

	var a$ = !1,
		$1 = G("div.list"),
		Z6 = G("div.list"),
		r3 = G("div.top-bar"),
		T6 = G("div.chat-log", r3, Z6),
		a4 = !1,
		Q1 = !1;

	function d8() {
		(
			r3.replaceChildren(G("p#player-count", `${C0(R.onlinePlayers + R.onlineViewers, "player")} online`), G(
				"div.box.tabs",
				G("button.btn.tooltip", "Local", a$ && { className: "active" }, {
					dataset: { tooltip: "Nearby Cursors Only" },
					onclick: () => {
						(a4 = !1, i3());
					}
				}),
				G("button.btn.tooltip", "Global", !a$ && { className: "active" }, {
					dataset: { tooltip: "All Online Users" },
					onclick: () => {
						(a4 = !0, e3());
					}
				}),
				G("button#pin-chat-btn.btn.tooltip", G("img", { src: "/static/icon/tool/pin.png", draggable: !1, alt: "Pin" }), Q1 && { className: "primary" }, {
					onclick() {
						Q1 = !Q1;

						let $ = T6.parentElement;

						if (Q1) $.style.setProperty("display", "block", "important"); else $.style.removeProperty("display");

						d8();
					},

					dataset: {
						tooltip: Q1
							? "Chat is pinned (stays on screen)"
							: "Chat is not pinned (auto-hides)"
					}
				})
			)),

			t0("div.chat-input-box").forEach(($) => {
				$.classList.toggle("global", !a$);
			})
		);
	}

	function i3() {
		if (a$) return;
		if (s3()) return;

		(a$ = !0, Z6.replaceWith($1), d8());
	}

	function e3() {
		if (!a$) return;

		(a$ = !1, $1.replaceWith(Z6), d8());
	}

	function $G() {
		if (a4) return;
		if (k.normalizedZoom <= T$) e3(); else i3();
	}

	var J1 = 0;

	function bK($) {
		if ($ === void 0) $ = 0;
		if ((J1 = $, !$)) return $;

		let Q = Math.round(($ - Date.now()) / 1000);

		if (Q <= 0) return (J1 = 0, 0);

		return (J1 = $, Q);
	}

	function w5($) {
		let Q = bK($), J = Q === null ? "inf" : `${Q}s`;

		t0("div.chat-input-box").forEach((Y) => {
			if (Q == 0) delete Y.dataset.cooldown; else Y.dataset.cooldown = J;
		});
	}

	setInterval(
		() => {
			if (J1) w5(J1);
		},
		500
	);

	var fK = /^can i ha[sz] cursor pl[zs]\??$/i;

	function XQ($ = !1) {
		let Q = !1,
			J,
			Y = G("input#chat-input-field.input.box", {
				type: "text",
				spellcheck: !1,
				maxLength: H1,
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
					if (K.key == "Enter") q.click(); else if (K.key == "Escape") (Y.value = "", Y.blur());
				}
			}),
			q = q$("tool/send", {
				id: "tool-send-btn",
				ariaLabel: "Send Message",
				async onclick() {
					let K = Y.value.slice(0, H1).trim();

					if (!K || Q) return;

					try {
						if ((
							Q = !0,
							Y.readOnly = !0,
							Z.style.opacity = "0.5",
							fK.test(K) && !c.flags.plzCursor
						)) {
							if (!await b$({ code: "CAN_I_HAS_CURSOR" })) {
								(
									new _("plz?", G("p", "yes u may haz cursor")),
									c.flags.plzCursor = !0,
									N0()
								);

								return;
							}
						}

						(await a3(K, !a$), Y.value = "");
					} finally {
						(
							await V1(500),
							Q = !1,
							Y.readOnly = !1,
							Z.style.opacity = "1"
						);
					}
				}
			}),
			Z = G("div.chat-input-box", Y, q);

		return Z;
	}

	function C2() {
		return (
			d8(),
			G("div.input.chat-box.container", G("div.popup.box.outset.chat-log-wrapper", T6), XQ())
		);
	}

	function t4($, Q = !0) {
		let J = u("input#chat-input-field");

		if (!J) return;

		let Y = J.value, q = Y && Y.at(-1) != " ";

		if ((J.value = `${Y}${q ? " " : ""}${$} `.slice(0, H1), Q)) J.focus();
	}

	var _8 = 1.5,
		T$ = 0.8,
		g0 = G("canvas.drawable-canvas", { width: window.innerWidth, height: window.innerHeight }),
		QG = "/static/brick-background.jpg",
		lK = "/static/brick-background-hi.webp",
		r4 = G("img.canvas-background", { fetchPriority: "high", src: QG, draggable: !1 }),
		G$ = null,
		Y1 = !1,
		uK = 0.8;

	function JG() {
		if (G$ || c.a11y.performanceMode || f0) return;

		(
			G$ = new Image(),
			G$.decoding = "async",
			G$.src = lK,
			G$.decode()
		);
	}

	var YG = window.requestIdleCallback ?? (($) => setTimeout($, 800));

	YG(JG);

	function dK() {
		if (Y1) return;
		if (k.zoom < uK) return;
		if (!G$ || !G$.complete || G$.naturalWidth === 0) return;

		(r4.src = G$.src, Y1 = !0);
	}

	var GG = () => Y1 || G$ || YG(JG);

	function qG() {
		if (!Y1) return;

		(r4.src = QG, Y1 = !1, G$ = null);
	}

	var P6 = G("div.paint-layers", A$, g0),
		n0 = G("div.canvas-container", r4, P6, { style: { width: `${v}px`, height: `${Z0}px` } }),
		U0 = G("div.canvas-wrapper", n0),
		z8 = g0.getContext("2d");

	z8.imageSmoothingEnabled = !1;

	var k = {
			x: 0,
			y: 0,
			zoom: 1,
			normalizedZoom: 1,
			rect: n0.getBoundingClientRect(),
			viewport: { x: 0, y: 0, x2: 0, y2: 0 }
		},
		oK = 1920;

	function nK() {
		k.zoom = Math.max(k.zoom, K6());

		let $ = v * k.zoom,
			Q = Z0 * k.zoom,
			J = window.innerWidth - $,
			Y = window.innerHeight - Q;

		(
			k.x = $ >= window.innerWidth
				? Math.min(Math.max(k.x, J), 0)
				: window.innerWidth / 2 - $ / 2,

			k.y = Q >= window.innerHeight
				? Math.min(Math.max(k.y, Y), 0)
				: window.innerHeight / 2 - Q / 2
		);
	}

	function z$() {
		(
			nK(),
			n0.style.setProperty("--zoom", k.zoom.toString()),
			n0.style.transform = `matrix(${k.zoom}, 0, 0, ${k.zoom}, ${k.x}, ${k.y})`
		);

		let $ = 1 / k.zoom;

		if ((
			g0.style.transform = `matrix(${$}, 0, 0, ${$}, ${-k.x * $}, ${-k.y * $})`,
			k.rect = n0.getBoundingClientRect(),
			n0.style.imageRendering = "pixelated",
			k.normalizedZoom = k.zoom / (window.innerWidth / oK),
			$G(),
			k.normalizedZoom <= T$
		)) document.body.classList.remove("cursors-visible"); else document.body.classList.add("cursors-visible");

		(
			WY({
				x: k.rect.left,
				y: k.rect.top,
				w: window.innerWidth,
				h: window.innerHeight,
				zoom: k.rect.width / v
			}),
			dK(),
			k.viewport = wQ(),
			c.camera.zoom = k.zoom,
			c.camera.x = k.x,
			c.camera.y = k.y,
			N0()
		);
	}

	function K6() {
		return Math.max(window.innerWidth / v, window.innerHeight / Z0);
	}

	function ZG() {
		if (c.camera.zoom != 0) {
			(
				k.zoom = c.camera.zoom,
				k.x = c.camera.x,
				k.y = c.camera.y,
				z$()
			);

			return;
		}

		(
			k.zoom = K6(),
			z$(),
			k.x = window.innerWidth / 2 - k.rect.width / 2,
			k.y = window.innerHeight / 2 - k.rect.height / 2,
			z$()
		);
	}

	function a6($, Q, J, Y, q = 0.6) {
		let Z = Math.min(window.innerWidth * q / Math.max(J, 1), window.innerHeight * q / Math.max(Y, 1)),
			K = Math.min(Math.max(Z, K6()), 40);

		(k.zoom = K, z$());

		let W = k.rect.width / v,
			F = k.rect.left + ($ + J / 2) * W,
			H = k.rect.top + (Q + Y / 2) * W;

		(
			k.x += window.innerWidth / 2 - F,
			k.y += window.innerHeight / 2 - H,
			z$()
		);
	}

	var s4 = !1;

	async function KG($, Q, J = 60, Y = 160) {
		if (s4) return !1;

		s4 = !0;

		let q = k.viewport.x2 - k.viewport.x,
			Z = k.viewport.y2 - k.viewport.y,
			K = k.viewport.x + q / 2,
			W = k.viewport.y + Z / 2,
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
				V = W + (Q - W) * j,
				L = q + (Y - q) * j,
				z = Z + (Y - Z) * j;

			(
				a6(X - L / 2, V - z / 2, L, z, 1),
				await V1(16.666666666666668)
			);
		}

		return (s4 = !1, !0);
	}

	var FG = {
			stat_pixels_changed: "Pixels Changed",
			stat_paint_visible: "Paint Visible",
			stat_member_count: "User Count"
		},
		i4 = { users: "Users", clans: "Clans", countries: "Countries" },
		e4 = {
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

	var tK = {
			users: "You're",
			clans: "Your clan is",
			countries: "Your country is"
		},
		aK = {
			stat_member_count: H0,
			stat_pixels_changed: H0,
			stat_paint_visible: N1
		},
		sK = {
			users: ($, Q) => [
				G("b.box", $.clan_name && G("b.clan-label", B$($.clan_name)), $.name),
				G("span.box", Q)
			],
			clans: ($, Q) => [G("b.box", $.name), G("span.box", Q)],
			countries: ($, Q) => [G("b.box", B1($.name)), G("span.box", Q)]
		};

	async function G1($, Q, J = 0) {
		Y0();

		let Y = await N.leaderboard.$get({ query: { category: $, stat: Q, page: (J || 0).toString() } });

		if (!Y.ok) return A0(Y, "Could not load the leaderboard");

		let q = await Y.json();

		new _("Leaderboard", G(
			"div.leaderboard-modal.nopad",
			V5(Object.keys(i4).map((Z) => ({
				label: i4[Z],
				active: Z == $,
				action() {
					G1(Z, e4[Z][0]);
				}
			}))),
			G(
				"div.pad",
				G(
					"select.box.outset",
					{
						oninput(Z) {
							let K = Z.target.value;

							G1($, K, J);
						}
					},
					e4[$].map((Z) => G("option", FG[Z], { value: Z, selected: Q == Z }))
				),
				typeof q.position == "number" && q.ownValue !== 0 && G("p.desc", `${tK[$]} #${H0(q.position + 1)}!`),
				G("div.list", q.leaderboard.map((Z, K) => G("div.item.box.outset", G("div.box", `${K + 1 + J * 10}`), sK[$](Z, aK[Q](Z.value))))),
				G(
					"div.btn-container",
					G("a.link", "<<", {
						onclick() {
							if (J == 0) return;

							G1($, Q, J - 1);
						}
					}),
					G("b", `Page ${H0(J + 1)}`),
					G("a.link", ">>", {
						onclick() {
							if (q.leaderboard.length < 10) return;

							G1($, Q, J + 1);
						}
					})
				)
			)
		));
	}

	function WG() {
		G1("users", "stat_paint_visible", 0);
	}

	function h5($, Q) {
		let J = () => {
				(
					Y.classList.remove("zoom"),
					Y.style.width = Y.style.height = ""
				);
			},
			Y = G("div.img", G("img", { src: $, alt: Q }), {
				onmouseleave: J,
				onclick() {
					let q = Y.getBoundingClientRect();

					if ((
						Y.style.width = `${q.width}px`,
						Y.style.height = `${q.height}px`,
						!Y.classList.toggle("zoom")
					)) J();
				}
			});

		return Y;
	}

	var m5 = [
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
					h5("/static/img/tutorial_cursors.png", "An image of three cursors chatting on the canvas")
				]
			},

			{
				name: "Drawing",
				title: "Drawing Mechanic",
				content: [
					G("p", "The paint mechanic works like real spray paint: move fast to make thin lines, move slowly and the paint starts dripping."),
					h5("/static/img/tutorial_drawing.png", "An image of the spray can mechanic in-action"),
					G("p", "When you draw, your changes are only visible to you. You can undo, redo, and edit freely without affecting others."),
					G("p", "Click ", G("span.box.inline", "Submit"), " in the toolbar to publish your drawing so everyone can see it instantly!")
				]
			},

			{
				name: "Spray Cans",
				content: [
					G("p", "Each user starts with a set number of spray cans for drawing on the canvas. Every spray can contains the same amount of paint."),
					h5("/static/img/tutorial_spray_cans.png", "An image of the spray paint bar on the toolbar, with the amount of extra spray cans to the right of it"),
					G("p", G("b", "Drawing consumes paint!"), " When one spray can runs out, the next one is used automatically.", " If you use all your spray cans, a few minute timer starts, after which your paint gets refilled."),
					G("p", "You can also earn extra paint by inviting your friends to ", G("b", "The Wall"), "! ", G("br"), "Go to ", G("span.box.inline", "User > Share Webiste"), " in the action bar to get your own personalized link!")
				]
			},

			{
				name: "Toolbar",
				content: [
					h5("/static/img/tutorial_hotbar.png", "An image of the website's toolbar, containing text and arrows describing each component"),
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
		jG = m5.length - 1;

	function F6($ = 0) {
		let Q = m5[$],
			J = m5[$ - 1],
			Y = m5[$ + 1],
			q = $ + 1,
			Z = q <= jG ? `Guidebook [${q}/${jG}]` : "Guidebook";

		if (!c.seenGuidebook) (c.seenGuidebook = !0, N0());

		new _(Z, G("div.info.tutorial", G("h3", Q.title || Q.name), Q.content, G("div.btn-container", J && G("a.link.prev", `<< ${J.name}`, { onclick: () => F6($ - 1) }), G("a.link.next", `${Y?.name || "Continue"} >>`, { onclick: () => Y ? F6($ + 1) : p() })))).onClose(() => {
			if (!Y) b$({ code: "READ_GUIDEBOOK" });
		});
	}

	function XG() {
		let $ = window.innerWidth <= 800;

		new _("Keybinds", G(
			"div.info.keybinds",
			$ && G("p.warning.noicon", "These are probably not helpful if you're on mobile..."),
			G("div.section", G("p", "Canvas"), G("div.box.outset", G("div.box", "Move"), G("div.box", "WASD / Right Click")), G("div.box.outset", G("div.box", "Move (hand only)"), G("div.box", "Left Click")), G("div.box.outset", G("div.box", "Zoom"), G("div.box", "Wheel / +-"))),
			G("div.section", G("p", "Tools"), G("div.box.outset", G("div.box", "Hand Tool"), G("div.box", "H")), G("div.box.outset", G("div.box", "Brush Tool"), G("div.box", "B or X")), G("div.box.outset", G("div.box", "Chat"), G("div.box", "T or Enter"))),
			G("div.section", G("p", "Drawing"), G("div.box.outset", G("div.box", "Compare Mode"), G("div.box", "M")), G("div.box.outset", G("div.box", "Undo"), G("div.box", "Ctrl+Z")), G("div.box.outset", G("div.box", "Redo"), G("div.box", "Ctrl+Y")), G("div.box.outset", G("div.box", "Pick Color"), G("div.box", "P")), G("div.box.outset", G("div.box", "Last Used Color"), G("div.box", "1, 2, 3, ...")), G("div.box.outset", G("div.box", "Color Palette"), G("div.box", "C"))),
			G("div.section", G("p", "Other"), G("div.box.outset", G("div.box", "Hide Cursors"), G("div.box", "K")), G("div.box.outset", G("div.box", "Reply To User (chat)"), G("div.box", "Shift+Click / Dblclick")), !$ && !c.flags.konamiCursor && R.user && Math.random() > 0.8 && G("div.box.outset", G("div.box", "Konami Code"), G("div.box", "↑↑↓↓←→←→BA", {
				style: { fontWeight: "bold", lineHeight: "34px", letterSpacing: "1px" }
			}))),
			R$
		));
	}

	var N5 = [
		{
			label: "[S]ocial",
			shortcut: "S",
			menu: [
				{ label: "[O]nline Users", action: () => wY() },
				{ label: "[L]eaderboard", action: () => WG() }
			]
		},

		{
			label: "[H]elp",
			shortcut: "H",
			menu: [
				{ label: "[G]uidebook", action: () => F6() },
				{ label: "[K]eybinds", action: () => XG() },
				{ label: "[F]eedback / Bug Reporting", action: () => f7() },
				{
					label: "[P]rivacy Policy & ToS",
					action: () => {
						window.open("/privacy.html", "_blank");
					}
				}
			]
		}
	];

	var q1 = !1,
		HG = () => [
			{
				label: "[U]ser",
				shortcut: "U",
				menu: [
					{ label: `Hi, ${R.user?.username}!` },
					{},
					{ label: "[S]ettings", shortcut: "S", action: B5 },
					{ label: "[C]lan Settings", shortcut: "C", action: A6 },
					{ label: "Cursor [I]nventory", shortcut: "I", action: l8 },
					{ label: "Share [W]ebsite", shortcut: "W", action: E6 },
					{},
					{
						label: "[L]ogout",
						shortcut: "l",
						async action() {
							if (await i("Are you sure you want to log out?")) y7();
						}
					}
				]
			},

			{
				label: "[A]ction",
				shortcut: "A",
				menu: [
					{ label: "[U]ndo", keybindText: `${GQ}+Z`, action: () => a1() },
					{
						label: "[R]edo",
						keybindText: `${GQ}+${k6 ? "Shift+Z" : "Y"}`,
						action: () => s1()
					}
				]
			},
			...N5,
			...x0()
				? [
					{
						label: "[M]od",
						shortcut: "M",
						menu: () => [
							{ label: "Users", action: () => r("users") },
							{ label: "Audit Log", action: () => r("audit") },
							...e6()
								? [
									{ label: "Review Queue", action: () => r("review") },
									{ label: "Broadcast", action: () => r("broadcast") }
								]
								: [],
							{},
							{ label: "Tile Inspector", action: () => r6() },
							{ label: "Wipe Canvas Selection", action: () => G6() },
							{},
							{
								label: `[${q1 ? "ON" : "OFF"}] Hide Own Cursor`,
								action() {
									(R.cursorX = 0, R.cursorY = 0, q1 = !q1);
								}
							}
						]
					}
				]
				: []
		];

	var u0 = !1,
		L$ = 0,
		D$ = 0,
		VG = [0, 2, 3, 4],
		r$ = !1,
		QJ = !1,
		rK = "1234567890";

	document.body.addEventListener("keydown", ($) => {
		if (F0 || $.target != document.body) return;

		if ((k6 ? $.metaKey : $.ctrlKey) && ($.key == "z" || $.key == "Z" || $.key == "y" || $.key == "u")) {
			if ((
				$.preventDefault(),
				u0 = !1,
				$.key == "z" || $.key == "Z" && !$.shiftKey
			)) a1(); else s1();

			return !1;
		} else if ($.key == "h") u("#tool-hand").click(); else if ($.key == "x" || $.key == "b") u("#tool-spray").click(); else if ($.key == "c") i1(); else if ($.key == "-") YJ(1, 0.2); else if ($.key == "=") YJ(-1, 0.2); else if ($.key == "m") u("#tool-preview").click(); else if ($.key == "k") {
			let J = c.a11y;

			if ((J.hideCursors = !J.hideCursors, Z1(), J.hideCursors)) J.hideCursorKeybind = !0;

			N0();
		} else if ($.key == "t" || $.key == "Enter") setTimeout(
			() => {
				let J = u("#tool-chat");

				if (J.checkVisibility()) J.click(); else u(".chat-box input").focus();
			},
			10
		); else if (rK.includes($.key)) {
			let J = parseInt($.key) || 10;

			k2(J);
		} else if ($.key == "p") {
			let J = Q2(...S0(L$, D$));

			if (J) W8(J, !0);
		} else if (iK.has($.key.toLowerCase())) (u0 = !1, s$.add($.key.toLowerCase()), $F());
	});

	var iK = new Set(["w", "a", "s", "d"]),
		eK = 900,
		s$ = new Set(),
		S5 = null,
		JJ = 0;

	function $F() {
		if (S5 != null) return;

		(JJ = performance.now(), S5 = requestAnimationFrame(MG));
	}

	function QF() {
		(s$.clear(), r$ = !1);
	}

	function MG($) {
		if (F0 || !s$.size) {
			S5 = null;

			return;
		}

		let Q = Math.min($ - JJ, 100) / 1000;

		JJ = $;

		let J = eK * k.zoom * Q, Y = 0, q = 0;

		if (s$.has("w")) q += 1;
		if (s$.has("s")) q -= 1;
		if (s$.has("a")) Y += 1;
		if (s$.has("d")) Y -= 1;

		if (Y || q) {
			let Z = Math.hypot(Y, q);

			(k.x += Y / Z * J, k.y += q / Z * J, u0 = !1, U8());
		}

		S5 = requestAnimationFrame(MG);
	}

	document.body.addEventListener("keyup", ($) => {
		s$.delete($.key.toLowerCase());
	});

	window.addEventListener("blur", QF);

	window.addEventListener("beforeunload", ($) => {
		if (EQ()) return ($.preventDefault(), $.returnValue = !0, !1);
	});

	function PG($, Q) {
		if (R.activeTool != 1 || k.normalizedZoom < _8) return;
		if (R.openAt && Date.now() + R.clockOffset < R.openAt) return;
		if (R.paintRemaining + R.localPaintIncrement <= 0) return IQ();

		(u0 = !0, L$ = $, D$ = Q);
	}

	function $J($, Q) {
		if (r$ || k.normalizedZoom < T$) return;
		if (c.a11y.hideCursors || q1) return;

		let [J, Y] = S0($, Q);

		(R.cursorX = J, R.cursorY = Y);
	}

	function RG($, Q) {
		(r$ = !0, L$ = $, D$ = Q);
	}

	function zG($, Q) {
		if (r$) (k.x += $ - L$, k.y += Q - D$, U8());

		(L$ = $, D$ = Q);
	}

	var UG = 200;

	function YJ($, Q = 0.1) {
		let J = k.zoom,
			Y = k.zoom + Q * -Math.sign($) * k.zoom;

		(
			k.zoom = Math.max(Math.min(Y, UG), K6()),
			kG(k.zoom / J, L$, D$)
		);
	}

	function kG($, Q, J) {
		(
			u0 = !1,
			k.x = Q - (Q - k.x) * $,
			k.y = J - (J - k.y) * $,
			U8(),
			s0()
		);
	}

	function GJ() {
		if (QJ) {
			if (R.paintRemaining > 0) i7(); else o1();

			QJ = !1;
		}

		if (u0 && i0.length) J2();

		(r$ = !1, u0 = !1, O5 = null);
	}

	document.body.addEventListener("mousemove", ($) => zG($.x, $.y));

	var O5 = null;

	document.body.addEventListener("touchmove", ($) => {
		if ($.touches.length == 1) {
			if (H5) return;

			zG($.touches[0].clientX, $.touches[0].clientY);
		} else if ($.touches.length == 2) {
			(
				$.preventDefault(),
				$.stopImmediatePropagation(),
				u0 = !1,
				r$ = !1
			);

			let Q = $.touches[0],
				J = $.touches[1],
				Y = Math.hypot(J.clientX - Q.clientX, J.clientY - Q.clientY);

			if (O5 != null) {
				let q = Y / O5, Z = k.zoom * q;

				(
					k.zoom = Math.max(Math.min(Z, UG), K6()),
					kG(q, (Q.clientX + J.clientX) / 2, (Q.clientY + J.clientY) / 2)
				);
			}

			return (O5 = Y, !1);
		}
	});

	document.body.addEventListener("mouseup", GJ);
	document.body.addEventListener("touchend", GJ);
	document.body.addEventListener("touchcancel", GJ);

	function IQ() {
		QJ = !0;
	}

	function LG() {
		(
			g0.addEventListener("mousedown", ($) => {
				if ($.button == 0) PG($.x, $.y);
			}),

			g0.addEventListener(
				"touchstart",
				($) => {
					if ($.touches.length == 1) PG($.touches[0].clientX, $.touches[0].clientY);
				},
				{ passive: !0 }
			),
			U0.addEventListener("mousemove", ($) => $J($.x, $.y)),
			U0.addEventListener(
				"touchmove",
				($) => {
					if ($.touches.length == 1) $J($.touches[0].clientX, $.touches[0].clientY); else if ($.touches.length == 2) $.preventDefault();
				},
				{ passive: !1 }
			),

			U0.addEventListener("mousedown", ($) => {
				if ($.button != 0 || VG.includes(R.activeTool)) RG($.x, $.y);
			}),

			U0.addEventListener(
				"touchstart",
				($) => {
					if ($.touches.length == 1 && VG.includes(R.activeTool)) {
						let Q = $.touches[0].clientX,
							J = $.touches[0].clientY;

						($J(Q, J), RG(Q, J));
					} else if ($.touches.length == 2) $.preventDefault();
				},
				{ passive: !1 }
			),

			U0.addEventListener(
				"wheel",
				($) => {
					if ($.ctrlKey) $.preventDefault();

					(u0 = !1, YJ($.deltaY, 0.1));
				},
				{ passive: !1 }
			),

			U0.addEventListener("dblclick", async ($) => {
				if (k.zoom > 1) return;

				let [Q, J] = S0($.x, $.y);

				KG(Q, J);
			})
		);
	}

	function DG() {
		(
			ZG(),
			H2(),
			LG(),
			setTimeout(
				() => {
					requestAnimationFrame(v6);
				},
				1000
			)
		);
	}

	function CG() {
		let Q = R.user.username,
			J = !1,
			Y = G("p.warning"),
			q = (j, X = "") => {
				(Y.textContent = j, Y.className = X);
			},
			Z = G("input.input.box", {
				type: "text",
				placeholder: "Username...",
				maxLength: 16,
				value: Q
			}),
			K = G("button.btn", "Cancel", {
				onclick: () => {
					if (Z.value != Q) {
						Z.value = Q;

						return;
					}

					p(!0);
				}
			}),
			W = G("button.btn.primary", "Save");

		requestAnimationFrame(() => {
			Y.style.maxWidth = Z.offsetWidth + "px";
		});

		let F = !1;

		function H() {
			let j = Z.value.replace(/[^a-z0-9_.-]/g, "");

			if (Z.value != j) Z.value = j;

			let X = j != Q, V = R6(j);

			if ((W.disabled = !X || !!V || J, F0)) if ((F = X, F)) F0.lockLevel++; else F0.lockLevel--;
			if (X && V) q(V, "warning"); else if (Y.className == "warning") q("");
		}

		return (
			Z.oninput = H,
			W.onclick = async () => {
				if (J) return;

				let j = Z.value;

				if (j == Q) return p(!0);

				if (R6(j)) {
					H();

					return;
				}

				if (!await i(`Change your username to "${j}"?`, "Change Username", "Change", "Keep Current")) return;

				(J = !0, q(""), Y0(), F0.lockLevel = 1);

				try {
					let V = await FQ({ username: j });

					if (($8(), J = !1, typeof V == "string")) {
						(q(V, "warning"), H());

						return;
					}

					(
						Q = R.user?.username ?? j,
						Z.value = Q,
						q("Username updated!", "success"),
						H()
					);
				} catch(V) {
					(
						$8(),
						J = !1,
						q(V?.message || "Something went wrong", "warning"),
						H()
					);
				}
			},
			G("div.username-settings", G("h3", "Username"), Z, Y, G("div.btn-container", K, W))
		);
	}

	var JF = 300, YF = 1000, GF = W0.url.api;

	async function qJ($) {
		try {
			let Q = await fetch(GF + $, { cache: "no-store" });

			if (!Q.ok) return null;

			return await Q.json();
		} catch {
			return null;
		}
	}

	function K1($) {
		if ($ == null) return "—";
		if ($ < 1) return $.toFixed(2) + " ms";
		if ($ < 100) return $.toFixed(1) + " ms";

		return Math.round($) + " ms";
	}

	function AG($) {
		if ($ == null) return "—";
		if ($ < 1024) return `${$} B`;
		if ($ < 1048576) return `${($ / 1024).toFixed(1)} KB`;

		return `${($ / 1024 / 1024).toFixed(1)} MB`;
	}

	function TG($) {
		if ($ == null) return "—";

		return $.toFixed(2) + "%";
	}

	function T8($, Q) {
		if ($ == null) return "—";

		return Q($);
	}

	var KJ = G("div.dev-overlay"),
		w0 = {
			active: !1,
			fps: 0,
			fpsFrameCount: 0,
			fpsWindowStart: performance.now(),
			wsState: "—",
			panel: KJ
		};

	function qF($) {
		return ({
			[WebSocket.CONNECTING]: "CONNECTING",
			[WebSocket.OPEN]: "OPEN",
			[WebSocket.CLOSING]: "CLOSING",
			[WebSocket.CLOSED]: "CLOSED"
		})[$] || "—";
	}

	function ZF() {
		return `${~~(k.viewport.x2 - k.viewport.x)}x${~~(k.viewport.y2 - k.viewport.y)} px / ${R8.size} chunks`;
	}

	function KF() {
		let $ = performance.memory;

		if (!$) return "n/a";

		let Q = $.usedJSHeapSize ?? 0,
			J = $.totalJSHeapSize ?? 0;

		return `${AG(Q)} / ${AG(J)}`;
	}

	function IG() {
		if (!w0.active) return;

		w0.fpsFrameCount++;

		let $ = performance.now(),
			Q = $ - w0.fpsWindowStart;

		if (Q >= 1000) (
			w0.fps = Math.round(w0.fpsFrameCount * 1000 / Q),
			w0.fpsFrameCount = 0,
			w0.fpsWindowStart = $
		);

		requestAnimationFrame(IG);
	}

	function T0($, Q) {
		return G("div.dev-overlay-row", G("span.dev-overlay-label", $), G("span.dev-overlay-value", Q));
	}

	function _5($, ...Q) {
		return G("div.dev-overlay-section", G("div.dev-overlay-section-title", $), ...Q);
	}

	var ZJ, EG = 0;

	async function FF() {
		if (!P$) return "";

		if (!ZJ || EG < Date.now()) (
			EG = Date.now() + YF,
			ZJ = await Promise.all([
				qJ("/metrics/loop-lag"),
				qJ("/metrics/sendbulk"),
				qJ("/metrics/canvas-density")
			])
		);

		let [$, Q, J] = ZJ;

		return _5("server", T0("loop lag p99 / max", `${T8($?.p99_ms, K1)} / ${T8($?.max_ms, K1)}`), T0("sendBulk last-10s cpu", T8(Q?.last_10s?.cpu_pct_of_window, TG)), T0("sendBulk p99 / max", `${T8(Q?.p99_call_ms, K1)} / ${T8(Q?.max?.call_ms, K1)}`), T0("sendBulk avg fanout", T8(Q?.avg_fanout, (Y) => Y.toFixed(0))), T0("canvas density", T8(J?.density_pct, TG)));
	}

	async function wG() {
		if (!w0.active) return;

		(
			setTimeout(wG, JF),
			w0.wsState = qF(L0?.readyState),
			w0.panel.replaceChildren(G("div.dev-overlay-title", "wall: dev"), await FF(), _5("ws", T0("state", w0.wsState), T0("connection id", String(R.connectionId)), T0("ping rtt", K1(R.debug.ping)), T0("identified", R.user ? "yes" : "no")), _5("client", T0("fps", String(w0.fps)), T0("memory (jsHeap)", KF()), T0("known users", String(R0.size)), T0("paint remaining", `${R.paintRemaining} (${Math.round(R.paintRemaining / K0)} cans)`)), _5("camera", T0("translation", `${k.x.toFixed(2)}, ${k.y.toFixed(2)}`), T0("zoom", `${k.zoom.toFixed(1)} client / ${k.normalizedZoom.toFixed(1)} normal`), T0("viewport", ZF()), T0("cursor", `${R.cursorX}, ${R.cursorY}`)))
		);
	}

	function y5() {
		if (w0.active) return;

		(
			w0.active = !0,
			document.body.append(KJ),
			requestAnimationFrame(IG),
			wG()
		);
	}

	function hG() {
		if (!w0.active) return;

		(KJ.remove(), w0.active = !1);
	}

	var H8 = !1;

	function E8($, Q, J = "") {
		let Y = `s_${$}`,
			q = G("input", {
				type: "checkbox",
				id: Y,
				checked: !!c.a11y[$],
				onchange() {
					if (q.checked) c.a11y[$] = !0; else delete c.a11y[$];

					(Z1(), N0());
				}
			});

		return G("div.checkbox", q, G("label.tooltip", Q, { dataset: { tooltip: J }, htmlFor: Y }));
	}

	function B5() {
		let $ = new _("Settings", G("div.settings-modal", G("h3", "Accessibility"), E8("darkTheme", "Dark Theme"), E8("performanceMode", "Performance Mode", "Highly recommended for mobile devices"), E8("hideNameplates", "Hide Nameplates", "Shows cursors, but removes names/chat bubbles"), E8("hideCursors", "Hide Other Cursors", "Completely hides all cursors on the canvas"), E8("systemCursor", "Use System Cursor", "Local only. Use this if you have issues with our custom cursor"), E8("hideChatBubbles", "Hide Chat Bubbles", "Do not show chat bubbles next to users. Chat is still available."), E8("devOverlay", "Stats For Nerds"), R.user && [
				G("h3", "E-Mail Preferences"),
				G(
					"div.checkbox",
					G("input", {
						id: "s_marketing",
						type: "checkbox",
						checked: R.user.marketing_emails,
						async onchange(J) {
							let Y = !!J.target.checked;

							(Y0(), await Y8({ marketing: Y }), $8());
						}
					}),
					G("label", "Notify me about The Wall updates", { htmlFor: "s_marketing" })
				),
				CG()
			])),
			Q = $.titleElement.querySelector("button.icon");

		if (Q) Q.onclick = () => $.close(!0);

		return $;
	}

	function Z1() {
		let $ = c.a11y;

		if ($.hideCursorKeybind) ($.hideCursorKeybind = !1, $.hideCursors = !1);
		if ((H8 = !!$.performanceMode, $.lowQualityBg)) ($.performanceMode = !0, delete $.lowQualityBg);

		if ((
			document.body.classList.toggle("dark", !!$.darkTheme),
			document.body.classList.toggle("optimize", !!$.performanceMode),
			document.body.classList.toggle("hide-nameplates", !!$.hideNameplates),
			$.hideCursors
		)) V8.remove(); else n0.append(V8);

		if ($.systemCursor) D6(); else v1();
		if ($.performanceMode) qG(); else GG();
		if ($.devOverlay) y5(); else hG();
	}

	function mG() {
		if (!f0) return;
		if (c.flags.perfModeAutoEnabled) return;

		(
			c.a11y.performanceMode = !0,
			c.flags.perfModeAutoEnabled = !0,
			N0()
		);
	}

	var NG = [
		{
			label: "[L]og In",
			shortcut: "L",
			action() {
				J8();
			}
		},
		{ label: "[S]ettings", shortcut: "S", action: B5 },
		...N5
	];

	var BG = G("div.hotbar.login-bar", G(
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

	var WF = "G-XXXXXXXXXX", OG = !1;

	function SG() {
		let $ = W0.gaMeasurementId;

		if (OG || !$ || $ === WF) return;

		let Q = location.hostname;

		if (Q === "localhost" || Q === "127.0.0.1") return;

		(
			OG = !0,
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

	var _G = "";

	function yG() {
		let $ = k.viewport.x2 - k.viewport.x,
			Q = k.viewport.y2 - k.viewport.y,
			J = Math.floor(k.viewport.x + $ / 2),
			Y = Math.floor(k.viewport.y + Q / 2);

		return [J, Y];
	}

	function jF() {
		if (r$) return;

		let [$, Q] = yG(), J = new URL(location.href);

		if ((J.hash = `${$},${Q}`, J.hash != _G)) (history.replaceState(null, "", J), _G = J.hash);
	}

	function XF() {
		if (!location.hash) return;

		let [$, Q] = location.hash.slice(1).split(",").map(Number);

		if (!Number.isSafeInteger($) || !Number.isSafeInteger(Q)) return;
		if ($ < 0 || Q < 0 || $ >= v || Q >= Z0) return;

		let [J, Y] = yG();

		if ($ != J || Q != Y) c4($, Q);
	}

	function gG() {
		(XF(), setInterval(jF, 1000));
	}

	var vG = [
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
		F1 = 0;

	document.addEventListener("keydown", async ($) => {
		if (c.flags.konamiCursor || !R.user) return;

		if ($.key == vG[F1]) {
			if ((F1++, F1 >= vG.length)) {
				F1 = 0;

				let Q = await b$({ code: "SUPER_SECRET_KONAMI_CODE" });

				if (Q) return e(Q);

				(
					new _("Code Activated", G("p", "Enjoy your free cursor!")),
					c.flags.konamiCursor = !0,
					N0()
				);
			}
		} else F1 = 0;
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

	SG();
	OY();

	async function HF() {
		let $ = new URLSearchParams(location.search);

		if ((
			n0.append(V8),
			document.body.append(S$, G("main", nQ, U0, TQ)),
			DG(),
			Z1(),
			gG(),
			mG(),
			await _7(),
			R.user
		)) {
			if ((tQ(HG()), O8(), F$.seed(R.user), D2(), !c.seenGuidebook)) setTimeout(F6, 1000);
			if (x0()) d3();
		} else if ((R.setTool(3), tQ(NG), Q5(BG), _$(), O8(), $.has("ssu"))) B7($.get("ssu"));

		let Q = $.has("wall") || sessionStorage.getItem("wall:view") === "wall";

		if ((UY(Q), $.has("debug"))) y5();
	}

	var xG = () => HF().catch(($) => console.error("boot failed", $));

	if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", xG); else xG();
})();