# Brush size

The brush size is controlled by `VG`, formerly known as `R2`|`Z2`.

The function was changed thrice since chunk collection, once to increase minimum brush size, once to taunt people who were looking at the code, and once removing the taunt:

```js
// chunk mp1k92tc
function Z2($, Q, J) {
	let Y = Math.random() * Math.PI * 2,
		Z = J * Math.sqrt(Math.random());

	return [
		Math.floor($ + Z * Math.cos(Y)),
		Math.floor(Q + Z * Math.sin(Y))
	];
}

// chunk qv24n78z onwards
function Z2($, Q, J) {
	let Y = Math.random() * Math.PI * 2,
		Z = J * Math.sqrt(Math.random()),
		q = J < 5 ? 2 : 1,
		K = (Math.random() - 0.5) * q,
		W = (Math.random() - 0.5) * q,
			F = "y'all think we didnt see this comin'?"; // added in chunk ymzm99pr, removed in wqpez2wn

	return [
		Math.floor($ + Z * Math.cos(Y) + K),
		Math.floor(Q + Z * Math.sin(Y) + W)
	];
}
```
