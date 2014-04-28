Bitmap = function(src) {
	this.load(src);
	this.x = 0,
	this.y = 0;
};

Bitmap.prototype = {
	load: function(src) {
		this.ready = false;
		this.img = new Image();

		this.img.onload = function () {
			this.ready = true;
			this.width = this.img.width;
			this.height = this.img.height;
		}.bind(this);

		this.img.src = src;
	},

	render: function(ctx) {
		if(this.ready) {
			ctx.drawImage(this.img, this.x, this.y);
		}
	}
};

module.exports = Bitmap;