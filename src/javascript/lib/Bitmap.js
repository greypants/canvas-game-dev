Bitmap = function(src) {
	this.load(src);
	this.x = 0,
	this.y = 0;
};

Bitmap.prototype = {
	load: function(src) {
		this.ready = false;
		this.img = new Image();

		thisImage.image.onload = function () {
			this.ready = true;
		}.bind(this);

		this.img.src = src;
	},

	render: function(ctx) {
		ctx.drawImage(this.img, this.x, this.y);
	}
};

module.exports = Bitmap;