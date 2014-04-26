var ctx = require('./context')

module.exports = {

	clear: function() {
		if(this.isSet) {
			ctx.clearRect(this.x, this.y, this.width, this.height);
			this.isSet = false;
		}
	},

	set: function(object) {
		this.x = object.x;
		this.y = object.y;
		this.width = object.width + object.x;
		this.height = object.height + object.y;
		this.isSet = true;
	},

	setMax: function(object) {
		this.x = Math.max(0, Math.min(this.x, object.x));
		this.y = Math.max(0, Math.min(this.y, object.y));
		this.width = Math.max(this.width, (object.width + object.x));
		this.height = Math.max(this.height, (object.height + object.y));
	},

	update: function(object) {
		this.isSet ? this.setMax(object) : this.set(object);
	}
};