minElement = (n = 1, arr) =>
	[...arr].sort((a, b) => a - b).slice(0, n);