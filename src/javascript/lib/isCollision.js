module.exports = function(a, b) {
	return a.x <= (b.x + b.width) &&
		b.x <= (a.x + a.width) &&
		a.y <= (b.y + b.height) &&
		b.y <= (a.y + a.height);
};
