"use strict";

var Module = function (id) {
	this.content = '';
	this._init(id);
};

Module.prototype.getId = function () {
	return this._id;
};
Module.prototype.hide = function () {
	if (document.getElementById(this.getId() + 'Module')) {
		document.body.removeChild(document.getElementById(this.getId() + 'Module'));
	}
};
Module.prototype._init = function (id) {
	this._id = id;
};
Module.prototype.onBack = function (callback) {
	callback();
};
Module.prototype.onExit = function (callback) {
	callback();
};
Module.prototype.show = function (params) {
	if (!document.getElementById(this.getId() + 'Module')) {
		var module = document.createElement('section');
		module.id = this.getId() + 'Module';
		module.classList.add("module");
		module.innerHTML = this.content;
		document.body.appendChild(module);
	}
	//
	if (params && router) {
		router.setParameters(params);
	}
};

module.exports = Module;