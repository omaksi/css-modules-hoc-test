webpackJsonp([1],{

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Settings = __webpack_require__(161);

	var _Settings2 = _interopRequireDefault(_Settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Settings = function (_Component) {
	  _inherits(Settings, _Component);

	  function Settings() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Settings);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Settings.__proto__ || Object.getPrototypeOf(Settings)).call.apply(_ref, [this].concat(args))), _this), _this.handleBackButtonClick = function () {
	      var router = this.props.router;

	      router.push('/1');
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Settings, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _Settings2.default.container },
	        _react2.default.createElement(
	          'div',
	          { className: _Settings2.default.header },
	          _react2.default.createElement(
	            'div',
	            {
	              className: _Settings2.default.xButton,
	              onClick: this.handleBackButtonClick
	            },
	            'XXX'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _Settings2.default.content },
	          _react2.default.createElement(
	            'div',
	            { className: _Settings2.default.sectionTitleRow },
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.sectionTitle },
	              'Sitewide Apps',
	              _react2.default.createElement(
	                'span',
	                { className: _Settings2.default.questionIcon },
	                '?'
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: _Settings2.default.hrBold }),
	          _react2.default.createElement(
	            'div',
	            { className: _Settings2.default.row },
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowTitle },
	              'App Name'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowButtons },
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.editIcon },
	                'E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.deleteIcon },
	                'D'
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: _Settings2.default.hr }),
	          _react2.default.createElement(
	            'div',
	            { className: _Settings2.default.row },
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowTitle },
	              'App Name'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowButtons },
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.editIcon },
	                'E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.deleteIcon },
	                'D'
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: _Settings2.default.hr }),
	          _react2.default.createElement(
	            'div',
	            { className: _Settings2.default.sectionTitleRow },
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.sectionTitle },
	              'Page Apps',
	              _react2.default.createElement(
	                'span',
	                { className: _Settings2.default.questionIcon },
	                '?'
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: _Settings2.default.hrBold }),
	          _react2.default.createElement(
	            'div',
	            { className: _Settings2.default.row },
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowTitle },
	              'App Name'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowButtons },
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.editIcon },
	                'E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.deleteIcon },
	                'D'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowText },
	              'Home'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowError },
	              'Missing Information'
	            )
	          ),
	          _react2.default.createElement('div', { className: _Settings2.default.hr }),
	          _react2.default.createElement(
	            'div',
	            { className: _Settings2.default.row },
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowTitle },
	              'App Name'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowButtons },
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.editIcon },
	                'E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.deleteIcon },
	                'D'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowText },
	              'Contact'
	            )
	          ),
	          _react2.default.createElement('div', { className: _Settings2.default.hr }),
	          _react2.default.createElement(
	            'div',
	            { className: _Settings2.default.sectionTitleRow },
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.sectionTitle },
	              'Widgets',
	              _react2.default.createElement(
	                'span',
	                { className: _Settings2.default.questionIcon },
	                '?'
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: _Settings2.default.hrBold }),
	          _react2.default.createElement(
	            'div',
	            { className: _Settings2.default.row },
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowTitle },
	              'Subscribe Form'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Settings2.default.rowButtons },
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.editIcon },
	                'E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _Settings2.default.deleteIcon },
	                'D'
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: _Settings2.default.hr })
	        )
	      );
	    }
	  }]);

	  return Settings;
	}(_react.Component);

	exports.default = Settings;

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(164)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./Settings.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./Settings.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, "/* placeholder */\r\n\r\n.Settings__container___1oPGj{\r\n  width: 620px;\r\n  margin: 0 auto;\r\n  color: #979EA9;\r\n}\r\n\r\n.Settings__header___9JjrH{\r\n  position: relative;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-top: 30px;\r\n}\r\n\r\n.Settings__xButton___2YWHx{\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 0;\r\n  font-size: 50px;\r\n}\r\n\r\n.Settings__content___VeadJ{\r\n  width: 100%;\r\n}\r\n\r\n.Settings__sectionTitleRow___3wVCM{\r\n  position: relative;\r\n  float: left;\r\n  width: 100%;\r\n  height: 97px;\r\n}\r\n\r\n.Settings__sectionTitle___3LXuB{\r\n  font-size: 20px;\r\n  position: absolute;\r\n  bottom: 15px;\r\n  left: 0;\r\n}\r\n\r\n.Settings__questionIcon___3X68j{\r\n  font-size: 12px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.Settings__hrBold___1OW0v{\r\n  float: left;\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: #D1D4DA;\r\n}\r\n\r\n.Settings__hr___2eiNV{\r\n  float: left;\r\n  width: 100%;\r\n  height: 1px;\r\n  opacity: 0.2;\r\n  background-color: #979EA9;\r\n}\r\n\r\n.Settings__row___IKirC{\r\n  float: left;\r\n  width: 100%;\r\n  height: 65px;\r\n}\r\n\r\n.Settings__rowTitle___25LZK{\r\n  float: left;\r\n  font-size: 16px;\r\n  margin-left: 10px;\r\n  line-height: 65px;\r\n}\r\n\r\n.Settings__rowError___l89ZO{\r\n  float: right;\r\n  margin-right: 80px;\r\n  font-size: 14px;\r\n  line-height: 65px;\r\n  color: #FF3366;\r\n}\r\n\r\n.Settings__rowText___2AhEG{\r\n  float: right;\r\n  margin-right: 80px;\r\n  font-size: 14px;\r\n  line-height: 65px;\r\n  text-align: right;\r\n}\r\n\r\n.Settings__rowButtons___2mp0W{\r\n  float: right;\r\n  width: 80px;\r\n  height: 35px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.Settings__editIcon___3uawq{\r\n  float: left;\r\n  color: white;\r\n  text-align: center;\r\n  line-height: 35px;\r\n  margin-left: 3px;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #979EA9;\r\n  border-radius: 20px;\r\n}\r\n\r\n.Settings__deleteIcon___3YiOD{\r\n  float: left;\r\n  color: white;\r\n  text-align: center;\r\n  line-height: 35px;\r\n  margin-left: 3px;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #979EA9;\r\n  border-radius: 20px;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"container": "Settings__container___1oPGj",
		"header": "Settings__header___9JjrH",
		"xButton": "Settings__xButton___2YWHx",
		"content": "Settings__content___VeadJ",
		"sectionTitleRow": "Settings__sectionTitleRow___3wVCM",
		"sectionTitle": "Settings__sectionTitle___3LXuB",
		"questionIcon": "Settings__questionIcon___3X68j",
		"hrBold": "Settings__hrBold___1OW0v",
		"hr": "Settings__hr___2eiNV",
		"row": "Settings__row___IKirC",
		"rowTitle": "Settings__rowTitle___25LZK",
		"rowError": "Settings__rowError___l89ZO",
		"rowText": "Settings__rowText___2AhEG",
		"rowButtons": "Settings__rowButtons___2mp0W",
		"editIcon": "Settings__editIcon___3uawq",
		"deleteIcon": "Settings__deleteIcon___3YiOD"
	};

/***/ },

/***/ 163:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});