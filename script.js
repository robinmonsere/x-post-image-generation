if (Function) {
    if (Function.prototype) {
        if (Function.prototype.bind) {
            if (!/(MSIE ([6789]|10|11))|Trident/.test(navigator.userAgent)) {
                if (window.__twttr) {
                    if (window.__twttr.widgets) {
                        if (window.__twttr.widgets.loaded) {
                            if (window.twttr.widgets.load) {
                                window.twttr.widgets.load();
                            }
                        }
                    }
                }
                if (!(window.__twttr && (window.__twttr.widgets && window.__twttr.widgets.init))) {
                    (function(data) {
                        /**
                         * @param {?} str
                         * @return {undefined}
                         */
                        function next(str) {
                            var key;
                            var part;
                            var codeSegments = str[0];
                            var self = str[1];
                            /** @type {number} */
                            var i = 0;
                            /** @type {Array} */
                            var ql = [];
                            for (;i < codeSegments.length;i++) {
                                part = codeSegments[i];
                                if (obj[part]) {
                                    ql.push(obj[part][0]);
                                }
                                /** @type {number} */
                                obj[part] = 0;
                            }
                            for (key in self) {
                                if (Object.prototype.hasOwnProperty.call(self, key)) {
                                    data[key] = self[key];
                                }
                            }
                            if (layer) {
                                layer(str);
                            }
                            for (;ql.length;) {
                                ql.shift()();
                            }
                        }
                        /**
                         * @param {number} i
                         * @return {?}
                         */
                        function result(i) {
                            if (t[i]) {
                                return t[i].exports;
                            }
                            var m = t[i] = {
                                i : i,
                                l : false,
                                exports : {}
                            };
                            return data[i].call(m.exports, m, m.exports, result), m.l = true, m.exports;
                        }
                        var t = {};
                        var obj = {
                            0 : 0
                        };
                        /**
                         * @param {number} name
                         * @return {?}
                         */
                        result.e = function(name) {
                            /** @type {Array} */
                            var item = [];
                            var cache = obj[name];
                            if (0 !== cache) {
                                if (cache) {
                                    item.push(cache[2]);
                                } else {
                                    var v = new Promise(function(p, val) {
                                        /** @type {Array} */
                                        cache = obj[name] = [p, val];
                                    });
                                    item.push(cache[2] = v);
                                    var callback;
                                    var target = document.getElementsByTagName("head")[0];
                                    /** @type {Element} */
                                    var self = document.createElement("script");
                                    /** @type {string} */
                                    self.charset = "utf-8";
                                    /** @type {number} */
                                    self.timeout = 120;
                                    if (result.nc) {
                                        self.setAttribute("nonce", result.nc);
                                    }
                                    self.src = function(name) {
                                        return result.p + "js/" + ({
                                            1 : "dm_button",
                                            2 : "button",
                                            3 : "moment",
                                            4 : "periscope_on_air",
                                            5 : "timeline",
                                            6 : "tweet"
                                        }[name] || name) + "." + {
                                            1 : "f53535f7e1a7738ec410842054f2de1c",
                                            2 : "856debeac157d9669cf51e73a08fbc93",
                                            3 : "cd19c6b67c2f5cf62643a0c94915ac9a",
                                            4 : "59d430bc7d44af5536b78dbdd566058f",
                                            5 : "e108540dddc96e4b707f5cf259a582d7",
                                            6 : "d7aeb21a88e025d2ea5f5431a103f586"
                                        }[name] + ".js";
                                    }(name);
                                    /**
                                     * @param {string} t
                                     * @return {undefined}
                                     */
                                    callback = function(t) {
                                        /** @type {null} */
                                        self.onerror = self.onload = null;
                                        clearTimeout(to);
                                        var child = obj[name];
                                        if (0 !== child) {
                                            if (child) {
                                                var originalType = t && ("load" === t.type ? "missing" : t.type);
                                                var request = t && (t.target && t.target.src);
                                                /** @type {Error} */
                                                var event = new Error("Loading chunk " + name + " failed.\n(" + originalType + ": " + request + ")");
                                                event.type = originalType;
                                                event.request = request;
                                                child[1](event);
                                            }
                                            obj[name] = void 0;
                                        }
                                    };
                                    /** @type {number} */
                                    var to = setTimeout(function() {
                                        callback({
                                            type : "timeout",
                                            target : self
                                        });
                                    }, 12E4);
                                    /** @type {function (string): undefined} */
                                    self.onerror = self.onload = callback;
                                    target.appendChild(self);
                                }
                            }
                            return Promise.all(item);
                        };
                        /** @type {Array} */
                        result.m = data;
                        result.c = t;
                        /**
                         * @param {Object} str
                         * @param {string} key
                         * @param {Function} opts
                         * @return {undefined}
                         */
                        result.d = function(str, key, opts) {
                            if (!result.o(str, key)) {
                                Object.defineProperty(str, key, {
                                    enumerable : true,
                                    /** @type {Function} */
                                    get : opts
                                });
                            }
                        };
                        /**
                         * @param {string} context
                         * @return {undefined}
                         */
                        result.r = function(context) {
                            if ("undefined" != typeof Symbol) {
                                if (Symbol.toStringTag) {
                                    Object.defineProperty(context, Symbol.toStringTag, {
                                        value : "Module"
                                    });
                                }
                            }
                            Object.defineProperty(context, "__esModule", {
                                value : true
                            });
                        };
                        /**
                         * @param {Object} val
                         * @param {number} a
                         * @return {?}
                         */
                        result.t = function(val, a) {
                            if (1 & a && (val = result(val)), 8 & a) {
                                return val;
                            }
                            if (4 & a && ("object" == typeof val && (val && val.__esModule))) {
                                return val;
                            }
                            /** @type {Object} */
                            var str = Object.create(null);
                            if (result.r(str), Object.defineProperty(str, "default", {
                                enumerable : true,
                                value : val
                            }), 2 & a && "string" != typeof val) {
                                var name;
                                for (name in val) {
                                    result.d(str, name, function(part) {
                                        return val[part];
                                    }.bind(null, name));
                                }
                            }
                            return str;
                        };
                        /**
                         * @param {Object} c
                         * @return {?}
                         */
                        result.n = function(c) {
                            /** @type {function (): ?} */
                            var value = c && c.__esModule ? function() {
                                return c.default;
                            } : function() {
                                return c;
                            };
                            return result.d(value, "a", value), value;
                        };
                        /**
                         * @param {Object} child
                         * @param {string} options
                         * @return {?}
                         */
                        result.o = function(child, options) {
                            return Object.prototype.hasOwnProperty.call(child, options);
                        };
                        /** @type {string} */
                        result.p = "https://platform.twitter.com/";
                        /**
                         * @param {?} fmt
                         * @return {?}
                         */
                        result.oe = function(fmt) {
                            throw console.error(fmt), fmt;
                        };
                        var context = window.__twttrll = window.__twttrll || [];
                        var key = context.push.bind(context);
                        /** @type {function (?): undefined} */
                        context.push = next;
                        context = context.slice();
                        /** @type {number} */
                        var c = 0;
                        for (;c < context.length;c++) {
                            next(context[c]);
                        }
                        var layer = key;
                        result(result.s = 82);
                    })([function($, dataAndEvents, proceed) {
                        /**
                         * @param {Object} obj
                         * @param {Function} callback
                         * @return {?}
                         */
                        function extend(obj, callback) {
                            var key;
                            for (key in obj) {
                                if (!(obj.hasOwnProperty && !obj.hasOwnProperty(key))) {
                                    callback(key, obj[key]);
                                }
                            }
                            return obj;
                        }
                        /**
                         * @param {Object} value
                         * @return {?}
                         */
                        function typeOf(value) {
                            return{}.toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                        }
                        /**
                         * @param {Object} obj
                         * @return {?}
                         */
                        function forOwn(obj) {
                            return obj === Object(obj);
                        }
                        /**
                         * @param {Object} obj
                         * @return {?}
                         */
                        function isEmptyObject(obj) {
                            var member;
                            if (!forOwn(obj)) {
                                return false;
                            }
                            if (Object.keys) {
                                return!Object.keys(obj).length;
                            }
                            for (member in obj) {
                                if (obj.hasOwnProperty(member)) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        /**
                         * @param {Array} args
                         * @return {?}
                         */
                        function makeArray(args) {
                            return args ? Array.prototype.slice.call(args) : [];
                        }
                        var value = proceed(1);
                        $.exports = {
                            /**
                             * @param {?} opt_attributes
                             * @return {?}
                             */
                            aug : function(opt_attributes) {
                                return makeArray(arguments).slice(1).forEach(function(defs) {
                                    extend(defs, function(i, offsetPosition) {
                                        opt_attributes[i] = offsetPosition;
                                    });
                                }), opt_attributes;
                            },
                            /**
                             * @param {Function} cb
                             * @param {string} scope
                             * @return {undefined}
                             */
                            async : function(cb, scope) {
                                value.setTimeout(function() {
                                    cb.call(scope || null);
                                }, 0);
                            },
                            /**
                             * @param {Object} value
                             * @return {?}
                             */
                            compact : function formatNumber(value) {
                                return extend(value, function(arrayIndex, val) {
                                    if (forOwn(val)) {
                                        formatNumber(val);
                                        if (isEmptyObject(val)) {
                                            delete value[arrayIndex];
                                        }
                                    }
                                    if (!(void 0 !== val && (null !== val && "" !== val))) {
                                        delete value[arrayIndex];
                                    }
                                }), value;
                            },
                            /**
                             * @param {Array} name
                             * @param {string} label
                             * @return {?}
                             */
                            contains : function(name, label) {
                                return!(!name || !name.indexOf) && name.indexOf(label) > -1;
                            },
                            /** @type {function (Object, Function): ?} */
                            forIn : extend,
                            /** @type {function (Object): ?} */
                            isObject : forOwn,
                            /** @type {function (Object): ?} */
                            isEmptyObject : isEmptyObject,
                            /** @type {function (Object): ?} */
                            toType : typeOf,
                            /**
                             * @param {string} type
                             * @param {string} obj
                             * @return {?}
                             */
                            isType : function(type, obj) {
                                return type == typeOf(obj);
                            },
                            /** @type {function (Array): ?} */
                            toRealArray : makeArray
                        };
                    }, function(shim, dataAndEvents) {
                        /** @type {Window} */
                        shim.exports = window;
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {?} value
                         * @return {?}
                         */
                        function append(value) {
                            return "string" == typeof value;
                        }
                        /**
                         * @param {?} result
                         * @return {?}
                         */
                        function fill(result) {
                            if (append(result)) {
                                return RegExp.$1;
                            }
                        }
                        /**
                         * @param {?} i
                         * @param {boolean} username
                         * @return {?}
                         */
                        function follow(i, username) {
                            var c = utils.decodeURL(i);
                            if (username = username || false, c.screen_name = fill(i), c.screen_name) {
                                return utils.url("https://twitter.com/xdnibor/"
                                );
                            }
                        }
                        /**
                         * @param {?} type
                         * @return {?}
                         */
                        function Event(type) {
                            return "string" == typeof type && manipulation_rcheckableType.test(type);
                        }
                        /**
                         * @param {?} val
                         * @return {?}
                         */
                        function html(val) {
                            return "string" == typeof val && exclude.test(val);
                        }
                        var utils = require(16);
                        /** @type {RegExp} */
                        var rchecked = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i;
                        /** @type {RegExp} */
                        var exclude = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i;
                        /** @type {RegExp} */
                        var RE_HEX_NUMBER = /^http(s?):\/\/(\w+\.)*twitter\.com([:/]|$)/i;
                        /** @type {RegExp} */
                        var rparentsprev = /^http(s?):\/\/(ton|pbs)\.twimg\.com/;
                        /** @type {RegExp} */
                        var manipulation_rcheckableType = /^#?([^.,<>!\s/#\-()'"]+)$/;
                        /** @type {RegExp} */
                        var isSimple = /twitter\.com(?::\d{2,4})?\/intent\/(\w+)/;
                        /** @type {RegExp} */
                        var BEGIN_TAG_REGEXP = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i;
                        /** @type {RegExp} */
                        var rhtml = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i;
                        /** @type {RegExp} */
                        var temp = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i;
                        /** @type {RegExp} */
                        var supportedTransforms = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-%]+)/i;
                        /** @type {RegExp} */
                        var keywords2 = /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i;
                        /** @type {RegExp} */
                        var rbrace = /^https?:\/\/syndication\.twitter\.com\/settings/i;
                        /** @type {RegExp} */
                        var numbers = /^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i;
                        /** @type {RegExp} */
                        var reWhitespace = /^https?:\/\/(?:www\.)?twitter\.com\/search\?q=(\w+)/i;
                        module.exports = {
                            /** @type {function (?): ?} */
                            isHashTag : Event,
                            /**
                             * @param {?} type
                             * @param {boolean} on
                             * @return {?}
                             */
                            hashTag : function(type, on) {
                                if (on = void 0 === on || on, Event(type)) {
                                    return(on ? "#" : "") + RegExp.$1;
                                }
                            },
                            /** @type {function (?): ?} */
                            isScreenName : append,
                            /** @type {function (?): ?} */
                            screenName : fill,
                            /** @type {function (?): ?} */
                            isStatus : html,
                            /**
                             * @param {?} text
                             * @return {?}
                             */
                            status : function(text) {
                                return html(text) && RegExp.$1;
                            },
                            /** @type {function (?, boolean): ?} */
                            intentForProfileURL : follow,
                            /**
                             * @param {?} dataName
                             * @return {?}
                             */
                            intentForFollowURL : function(dataName) {
                                return follow(dataName, true);
                            },
                            /**
                             * @param {?} num
                             * @return {?}
                             */
                            isTwitterURL : function(num) {
                                return RE_HEX_NUMBER.test(num);
                            },
                            /**
                             * @param {?} name
                             * @return {?}
                             */
                            isTwimgURL : function(name) {
                                return rparentsprev.test(name);
                            },
                            /**
                             * @param {?} qualifier
                             * @return {?}
                             */
                            isIntentURL : function(qualifier) {
                                return isSimple.test(qualifier);
                            },
                            /**
                             * @param {?} data
                             * @return {?}
                             */
                            isSettingsURL : function(data) {
                                return rbrace.test(data);
                            },
                            isWidgetIframeURL : function(number) {
                                return numbers.test(number);
                            },

                            isSearchUrl : function(left) {
                                return reWhitespace.test(left);
                            },
                            regexen : {
                                profile : rchecked
                            },
                            /**
                             * @param {?} html
                             * @return {?}
                             */
                            momentId : function(html) {
                                return rhtml.test(html) && RegExp.$1;
                            },
                            /**
                             * @param {?} html
                             * @return {?}
                             */
                            collectionId : function(html) {
                                return BEGIN_TAG_REGEXP.test(html) && RegExp.$1;
                            },
                            /**
                             * @param {?} qualifier
                             * @return {?}
                             */
                            intentType : function(qualifier) {
                                return isSimple.test(qualifier) && RegExp.$1;
                            },
                            /**
                             * @param {?} html
                             * @return {?}
                             */
                            likesScreenName : function(html) {
                                return temp.test(html) && RegExp.$1;
                            },
                            /**
                             * @param {?} key
                             * @return {?}
                             */
                            listScreenNameAndSlug : function(key) {
                                var language;
                                var name;
                                var ret;
                                if (supportedTransforms.test(key)) {
                                    /** @type {string} */
                                    language = RegExp.$1;
                                    /** @type {string} */
                                    name = RegExp.$2;
                                    try {
                                        /** @type {string} */
                                        ret = decodeURIComponent(name);
                                    } catch (t) {
                                    }
                                    return{
                                        ownerScreenName : language,
                                        slug : ret || name
                                    };
                                }
                                return false;
                            },
                            /**
                             * @param {?} html
                             * @return {?}
                             */
                            eventId : function(html) {
                                return keywords2.test(html) && RegExp.$1;
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var Response = require(6);
                        /**
                         * @return {undefined}
                         */
                        module.exports = function() {
                            var promise = this;
                            this.promise = new Response(function(resolve, reject) {
                                /** @type {Function} */
                                promise.resolve = resolve;
                                /** @type {Function} */
                                promise.reject = reject;
                            });
                        };
                    }, function(event, dataAndEvents) {
                        /** @type {HTMLDocument} */
                        event.exports = document;
                    }, function(module, dataAndEvents, docsSearch) {
                        /**
                         * @param {Object} putativeSpy
                         * @return {?}
                         */
                        function apply(putativeSpy) {
                            return void 0 !== putativeSpy && (null !== putativeSpy && "" !== putativeSpy);
                        }
                        /**
                         * @param {number} object
                         * @return {?}
                         */
                        function hasKey(object) {
                            return isNumber(object) && object % 1 == 0;
                        }
                        /**
                         * @param {number} value
                         * @return {?}
                         */
                        function isArguments(value) {
                            return isNumber(value) && !hasKey(value);
                        }
                        /**
                         * @param {?} value
                         * @return {?}
                         */
                        function isNumber(value) {
                            return apply(value) && !isNaN(value);
                        }
                        /**
                         * @param {string} value
                         * @return {?}
                         */
                        function isClassOf(value) {
                            return results.contains(match, value);
                        }
                        /**
                         * @param {string} value
                         * @return {?}
                         */
                        function lookupIterator(value) {
                            return results.contains(x, value);
                        }
                        var results = docsSearch(0);
                        /** @type {Array} */
                        var x = [true, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"];
                        /** @type {Array} */
                        var match = [false, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];
                        module.exports = {
                            /** @type {function (Object): ?} */
                            hasValue : apply,
                            /** @type {function (number): ?} */
                            isInt : hasKey,
                            /** @type {function (number): ?} */
                            isFloat : isArguments,
                            /** @type {function (?): ?} */
                            isNumber : isNumber,
                            /**
                             * @param {Object} value
                             * @return {?}
                             */
                            isString : function(value) {
                                return "string" === results.toType(value);
                            },
                            /**
                             * @param {Object} value
                             * @return {?}
                             */
                            isArray : function(value) {
                                return apply(value) && "array" == results.toType(value);
                            },
                            /** @type {function (string): ?} */
                            isTruthValue : lookupIterator,
                            /** @type {function (string): ?} */
                            isFalseValue : isClassOf,
                            /**
                             * @param {?} value
                             * @return {?}
                             */
                            asInt : function(value) {
                                if (hasKey(value)) {
                                    return parseInt(value, 10);
                                }
                            },
                            /**
                             * @param {number} value
                             * @return {?}
                             */
                            asFloat : function(value) {
                                if (isArguments(value)) {
                                    return value;
                                }
                            },
                            /**
                             * @param {?} val
                             * @return {?}
                             */
                            asNumber : function(val) {
                                if (isNumber(val)) {
                                    return val;
                                }
                            },
                            /**
                             * @param {string} value
                             * @return {?}
                             */
                            asBoolean : function(value) {
                                return!(!apply(value) || !lookupIterator(value) && (isClassOf(value) || !value));
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var global = require(1);
                        var Block = require(20);
                        var Promise = require(45);
                        if (!Block.hasPromiseSupport()) {
                            global.Promise = Promise;
                        }
                        module.exports = global.Promise;
                    }, function(module, dataAndEvents, defer) {
                        var deferred = defer(0);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} object
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, object) {
                            /** @type {Array.<?>} */
                            var bindArgs = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var otherArgs = deferred.toRealArray(arguments);
                                return keepActiveItem.apply(object, bindArgs.concat(otherArgs));
                            };
                        };
                    }, function(module, dataAndEvents) {
                        /** @type {(Location|null)} */
                        module.exports = location;
                    }, function(module, dataAndEvents, require) {
                        var Type = require(47);
                        module.exports = new Type("__twttr");
                    }, function(module, dataAndEvents, $sanitize) {
                        /**
                         * @param {string} value
                         * @return {?}
                         */
                        function isArray(value) {
                            return new RegExp("\\b" + value + "\\b", "g");
                        }
                        /**
                         * @param {Node} element
                         * @param {string} className
                         * @return {undefined}
                         */
                        function addClass(element, className) {
                            if (element.classList) {
                                element.classList.add(className);
                            } else {
                                if (!isArray(className).test(element.className)) {
                                    element.className += " " + className;
                                }
                            }
                        }
                        /**
                         * @param {Element} element
                         * @param {string} value
                         * @return {undefined}
                         */
                        function remove(element, value) {
                            if (element.classList) {
                                element.classList.remove(value);
                            } else {
                                element.className = element.className.replace(isArray(value), " ");
                            }
                        }
                        /**
                         * @param {Element} element
                         * @param {string} name
                         * @return {?}
                         */
                        function hasClass(element, name) {
                            return element.classList ? element.classList.contains(name) : jQuery.contains(_removeClass(element), name);
                        }
                        /**
                         * @param {Element} element
                         * @return {?}
                         */
                        function _removeClass(element) {
                            return jQuery.toRealArray(element.classList ? element.classList : element.className.match(rclass));
                        }
                        var jQuery = $sanitize(0);
                        /** @type {RegExp} */
                        var rclass = /\b([\w-_]+)\b/g;
                        module.exports = {
                            /** @type {function (Node, string): undefined} */
                            add : addClass,
                            /** @type {function (Element, string): undefined} */
                            remove : remove,
                            /**
                             * @param {string} el
                             * @param {string} value
                             * @param {string} className
                             * @return {?}
                             */
                            replace : function(el, value, className) {
                                if (el.classList && hasClass(el, value)) {
                                    return remove(el, value), void addClass(el, className);
                                }
                                el.className = el.className.replace(isArray(value), className);
                            },
                            /**
                             * @param {string} item
                             * @param {string} name
                             * @param {number} id
                             * @return {?}
                             */
                            toggle : function(item, name, id) {
                                return void 0 === id && (item.classList && item.classList.toggle) ? item.classList.toggle(name, id) : (id ? addClass(item, name) : remove(item, name), id);
                            },
                            /** @type {function (Element, string): ?} */
                            present : hasClass,
                            /** @type {function (Element): ?} */
                            list : _removeClass
                        };
                    }, function(module, dataAndEvents, require) {
                        var Block = require(19);
                        var event = require(5);
                        var base64 = require(16);
                        var _ = require(0);
                        var getActual = require(108);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            var key = keepActiveItem.href && keepActiveItem.href.split("?")[1];
                            var values = key ? base64.decode(key) : {};
                            var obj = {
                                lang : getActual(keepActiveItem),
                                width : keepActiveItem.getAttribute("data-width") || keepActiveItem.getAttribute("width"),
                                height : keepActiveItem.getAttribute("data-height") || keepActiveItem.getAttribute("height"),
                                related : keepActiveItem.getAttribute("data-related"),
                                partner : keepActiveItem.getAttribute("data-partner")
                            };
                            return event.asBoolean(keepActiveItem.getAttribute("data-dnt")) && Block.setOn(), _.forIn(obj, function(key, val) {
                                var value = values[key];
                                values[key] = event.hasValue(value) ? value : val;
                            }), _.compact(values);
                        };
                    }, function(module, dataAndEvents, require) {
                        var toArray = require(109);
                        var UUID = require(21);
                        /**
                         * @return {?}
                         */
                        module.exports = function() {
                            var attribute = "data-twitter-extracted-" + UUID.generate();
                            return function(selector, seed) {
                                return toArray(selector, seed).filter(function(el) {
                                    return!el.hasAttribute(attribute);
                                }).map(function(el) {
                                    return el.setAttribute(attribute, "true"), el;
                                });
                            };
                        };
                    }, function(module, dataAndEvents) {
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {string} name
                         * @param {?} parameters
                         * @param {?} noEvents
                         * @param {?} layerName
                         * @param {?} options
                         * @return {undefined}
                         */
                        function Entity(keepActiveItem, target, name, parameters, noEvents, layerName, options) {
                            /** @type {Object} */
                            this.factory = keepActiveItem;
                            this.Sandbox = target;
                            this.srcEl = layerName;
                            this.targetEl = noEvents;
                            this.parameters = parameters;
                            /** @type {string} */
                            this.className = name;
                            this.options = options;
                        }
                        /**
                         * @return {undefined}
                         */
                        Entity.prototype.destroy = function() {
                            /** @type {null} */
                            this.srcEl = this.targetEl = null;
                        };
                        /** @type {function (Object, ?, string, ?, ?, ?, ?): undefined} */
                        module.exports = Entity;
                    }, function(module, dataAndEvents) {
                        module.exports = {
                            DM_BUTTON : "twitter-dm-button",
                            FOLLOW_BUTTON : "twitter-follow-button",
                            HASHTAG_BUTTON : "twitter-hashtag-button",
                            MENTION_BUTTON : "twitter-mention-button",
                            MOMENT : "twitter-moment",
                            PERISCOPE : "periscope-on-air",
                            SHARE_BUTTON : "twitter-share-button",
                            TIMELINE : "twitter-timeline",
                            TWEET : "twitter-tweet"
                        };
                    }, function(module, dataAndEvents, require) {
                        var request = require(6);
                        var Block = require(19);
                        var ret = require(50);
                        var nodes = require(34);
                        var helper = require(5);
                        var t = require(0);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} fn
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, fn) {
                            var column;
                            return keepActiveItem = keepActiveItem || [], target = target || {}, column = "\u0192(" + keepActiveItem.join(", ") + ", target, [options]);", function() {
                                var error;
                                var result;
                                var i;
                                var defer;
                                /** @type {Array.<?>} */
                                var parts = Array.prototype.slice.apply(arguments, [0, keepActiveItem.length]);
                                /** @type {Array.<?>} */
                                var resolveValues = Array.prototype.slice.apply(arguments, [keepActiveItem.length]);
                                return resolveValues.forEach(function(e) {
                                    if (e) {
                                        if (e.nodeType !== Node.ELEMENT_NODE) {
                                            if (t.isType("function", e)) {
                                                error = e;
                                            } else {
                                                if (t.isType("object", e)) {
                                                    result = e;
                                                }
                                            }
                                        } else {
                                            i = e;
                                        }
                                    }
                                }), parts.length !== keepActiveItem.length || 0 === resolveValues.length ? (error && t.async(function() {
                                    error(false);
                                }), request.reject(new Error("Not enough parameters. Expected: " + column))) : i ? (result = t.aug({}, result || {}, target), keepActiveItem.forEach(function(axis) {
                                    result[axis] = parts.shift();
                                }), helper.asBoolean(result.dnt) && Block.setOn(), defer = nodes.getExperiments().then(function(arr) {
                                    return ret.addWidget(fn(result, i, void 0, arr));
                                }), error && defer.then(error, function() {
                                    error(false);
                                }), defer) : (error && t.async(function() {
                                    error(false);
                                }), request.reject(new Error("No target element specified. Expected: " + column)));
                            };
                        };
                    }, function(u, dataAndEvents, require) {
                        /**
                         * @param {?} str
                         * @return {?}
                         */
                        function escape(str) {
                            return encodeURIComponent(str).replace(/\+/g, "%2B").replace(/'/g, "%27");
                        }
                        /**
                         * @param {?} expression
                         * @return {?}
                         */
                        function expr(expression) {
                            return decodeURIComponent(expression);
                        }
                        /**
                         * @param {string} obj
                         * @return {?}
                         */
                        function encode(obj) {
                            /** @type {Array} */
                            var bProperties = [];
                            return $.forIn(obj, function(k, properties) {
                                var key = escape(k);
                                if (!$.isType("array", properties)) {
                                    /** @type {Array} */
                                    properties = [properties];
                                }
                                properties.forEach(function(value) {
                                    if (event.hasValue(value)) {
                                        bProperties.push(key + "=" + escape(value));
                                    }
                                });
                            }), bProperties.sort().join("&");
                        }
                        /**
                         * @param {string} arg
                         * @return {?}
                         */
                        function fn(arg) {
                            var self = {};
                            return arg ? (arg.split("&").forEach(function(pair) {
                                var codeSegments = pair.split("=");
                                var i = expr(codeSegments[0]);
                                var e = expr(codeSegments[1]);
                                if (2 == codeSegments.length) {
                                    if (!$.isType("array", self[i])) {
                                        return i in self ? (self[i] = [self[i]], void self[i].push(e)) : void(self[i] = e);
                                    }
                                    self[i].push(e);
                                }
                            }), self) : {};
                        }
                        var event = require(5);
                        var $ = require(0);
                        u.exports = {
                            /**
                             * @param {string} name
                             * @param {string} value
                             * @return {?}
                             */
                            url : function(name, value) {
                                return encode(value).length > 0 ? $.contains(name, "?") ? name + "&" + encode(value) : name + "?" + encode(value) : name;
                            },
                            /**
                             * @param {Object} className
                             * @return {?}
                             */
                            decodeURL : function(className) {
                                var context = className && className.split("?");
                                return 2 == context.length ? fn(context[1]) : {};
                            },
                            /** @type {function (string): ?} */
                            decode : fn,
                            /** @type {function (string): ?} */
                            encode : encode,
                            /** @type {function (?): ?} */
                            encodePart : escape,
                            /** @type {function (?): ?} */
                            decodePart : expr
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Function} attr
                         * @param {Object} that
                         * @return {?}
                         */
                        function fn(attr, that) {
                            return function() {
                                try {
                                    that.resolve(attr.call(this));
                                } catch (item) {
                                    that.reject(item);
                                }
                            };
                        }
                        var $ = require(90);
                        var subject = require(3);
                        var types = require(0);
                        module.exports = {
                            /**
                             * @param {Function} fn
                             * @param {Object} method
                             * @return {undefined}
                             */
                            sync : function(fn, method) {
                                fn.call(method);
                            },
                            /**
                             * @param {Function} data
                             * @param {?} name
                             * @return {?}
                             */
                            read : function(data, name) {
                                var result = new subject;
                                return $.read(fn(data, result), name), result.promise;
                            },
                            /**
                             * @param {Function} context
                             * @param {?} text
                             * @return {?}
                             */
                            write : function(context, text) {
                                var result = new subject;
                                return $.write(fn(context, result), text), result.promise;
                            },
                            /**
                             * @param {number} obj
                             * @param {number} n
                             * @param {number} scope
                             * @return {?}
                             */
                            defer : function(obj, n, scope) {
                                var result = new subject;
                                return types.isType("function", obj) && (scope = n, n = obj, obj = 1), $.defer(obj, fn(n, result), scope), result.promise;
                            }
                        };
                    }, function(module, dataAndEvents, jQuery) {
                        /**
                         * @return {undefined}
                         */
                        function devError() {
                        }
                        /**
                         * @return {undefined}
                         */
                        function devInfo() {
                        }
                        /**
                         * @return {?}
                         */
                        function now() {
                            return self.performance && +self.performance.now() || +new Date;
                        }
                        /**
                         * @param {string} method
                         * @param {Array} args
                         * @return {undefined}
                         */
                        function log(method, args) {
                            if (self.console && self.console[method]) {
                                switch(args.length) {
                                    case 1:
                                        self.console[method](args[0]);
                                        break;
                                    case 2:
                                        self.console[method](args[0], args[1]);
                                        break;
                                    case 3:
                                        self.console[method](args[0], args[1], args[2]);
                                        break;
                                    case 4:
                                        self.console[method](args[0], args[1], args[2], args[3]);
                                        break;
                                    case 5:
                                        self.console[method](args[0], args[1], args[2], args[3], args[4]);
                                        break;
                                    default:
                                        if (0 !== args.length) {
                                            if (self.console.warn) {
                                                self.console.warn("too many params passed to logger." + method);
                                            }
                                        }
                                        ;
                                }
                            }
                        }
                        var elem = jQuery(8);
                        var self = jQuery(1);
                        var that = jQuery(0);
                        var old = {};
                        var a = that.contains(elem.href, "tw_debug=true");
                        module.exports = {
                            /** @type {function (): undefined} */
                            devError : devError,
                            /** @type {function (): undefined} */
                            devInfo : devInfo,
                            /**
                             * @param {?} dataAndEvents
                             * @param {?} deepDataAndEvents
                             * @return {undefined}
                             */
                            devObject : function(dataAndEvents, deepDataAndEvents) {
                            },
                            /**
                             * @return {undefined}
                             */
                            publicError : function() {
                                log("error", that.toRealArray(arguments));
                            },
                            /**
                             * @return {undefined}
                             */
                            publicLog : function() {
                                log("info", that.toRealArray(arguments));
                            },
                            /**
                             * @return {undefined}
                             */
                            publicWarn : function() {
                                log("warn", that.toRealArray(arguments));
                            },
                            /**
                             * @param {?} name
                             * @return {undefined}
                             */
                            time : function(name) {
                                if (a) {
                                    old[name] = now();
                                }
                            },
                            /**
                             * @param {?} name
                             * @return {undefined}
                             */
                            timeEnd : function(name) {
                                if (a) {
                                    if (old[name]) {
                                        now();
                                        old[name];
                                    }
                                }
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var config = require(4);
                        var app = require(8);
                        var Block = require(38);
                        var path = require(94);
                        var nodes = require(5);
                        var lang = require(33);
                        /** @type {boolean} */
                        var c = false;
                        /** @type {RegExp} */
                        var rchecked = /https?:\/\/([^/]+).*/i;
                        module.exports = {
                            /**
                             * @return {undefined}
                             */
                            setOn : function() {
                                /** @type {boolean} */
                                c = true;
                            },
                            /**
                             * @param {string} name
                             * @param {string} root
                             * @return {?}
                             */
                            enabled : function(name, root) {
                                return!!(c || (nodes.asBoolean(lang.val("dnt")) || (path.isUrlSensitive(root || app.host) || (Block.isFramed() && path.isUrlSensitive(Block.rootDocumentLocation()) || (name = rchecked.test(name || config.referrer) && RegExp.$1) && path.isUrlSensitive(name)))));
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {?} file
                         * @return {?}
                         */
                        function hidden(file) {
                            return/(Trident|MSIE|Edge[/ ]?\d)/.test(file = file || sh);
                        }
                        var dom = require(4);
                        var fx = require(83);
                        var replacementHash = require(1);
                        var types = require(0);
                        var sh = fx.userAgent;
                        module.exports = {
                            /**
                             * @param {Object} options
                             * @return {?}
                             */
                            retina : function(options) {
                                return(options = options || replacementHash).devicePixelRatio ? options.devicePixelRatio >= 1.5 : !!options.matchMedia && options.matchMedia("only screen and (min-resolution: 144dpi)").matches;
                            },
                            /** @type {function (?): ?} */
                            anyIE : hidden,
                            /**
                             * @param {?} file
                             * @return {?}
                             */
                            ie9 : function(file) {
                                return/MSIE 9/.test(file = file || sh);
                            },
                            /**
                             * @param {?} file
                             * @return {?}
                             */
                            ie10 : function(file) {
                                return/MSIE 10/.test(file = file || sh);
                            },
                            /**
                             * @param {?} file
                             * @return {?}
                             */
                            ios : function(file) {
                                return/(iPad|iPhone|iPod)/.test(file = file || sh);
                            },
                            /**
                             * @param {?} file
                             * @return {?}
                             */
                            android : function(file) {
                                return/^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(file = file || sh);
                            },
                            /**
                             * @param {Object} options
                             * @param {?} file
                             * @return {?}
                             */
                            canPostMessage : function(options, file) {
                                return options = options || replacementHash, file = file || sh, options.postMessage && !(hidden(file) && options.opener);
                            },
                            /**
                             * @param {Object} options
                             * @param {string} type
                             * @param {?} file
                             * @return {?}
                             */
                            touch : function(options, type, file) {
                                return options = options || replacementHash, type = type || fx, file = file || sh, "ontouchstart" in options || (/Opera Mini/.test(file) || type.msMaxTouchPoints > 0);
                            },
                            /**
                             * @return {?}
                             */
                            cssTransitions : function() {
                                var bodyStyle = dom.body.style;
                                return void 0 !== bodyStyle.transition || (void 0 !== bodyStyle.webkitTransition || (void 0 !== bodyStyle.mozTransition || (void 0 !== bodyStyle.oTransition || void 0 !== bodyStyle.msTransition)));
                            },
                            /**
                             * @return {?}
                             */
                            hasPromiseSupport : function() {
                                return!!(replacementHash.Promise && (replacementHash.Promise.resolve && (replacementHash.Promise.reject && (replacementHash.Promise.all && (replacementHash.Promise.race && (new replacementHash.Promise(function(formatter) {
                                    obj = formatter;
                                }), types.isType("function", obj)))))));
                                var obj;
                            },
                            /**
                             * @return {?}
                             */
                            hasIntersectionObserverSupport : function() {
                                return!!replacementHash.IntersectionObserver;
                            },
                            /**
                             * @return {?}
                             */
                            hasPerformanceInformation : function() {
                                return replacementHash.performance && replacementHash.performance.getEntriesByType;
                            }
                        };
                    }, function(module, dataAndEvents) {
                        /** @type {string} */
                        var j = "i";
                        /** @type {number} */
                        var r = 0;
                        /** @type {number} */
                        var ccNum = 0;
                        module.exports = {
                            /**
                             * @return {?}
                             */
                            generate : function() {
                                return j + String(+new Date) + Math.floor(1E5 * Math.random()) + r++;
                            },
                            /**
                             * @return {?}
                             */
                            deterministic : function() {
                                return j + String(ccNum++);
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var core = require(46);
                        var nodes = require(49);
                        var t = require(0);
                        module.exports = t.aug(core.get("events") || {}, nodes.Emitter);
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {?} req
                         * @param {Function} callback
                         * @return {?}
                         */
                        function all(req, callback) {
                            return req.then(callback, callback);
                        }
                        /**
                         * @param {?} value
                         * @return {?}
                         */
                        function item(value) {
                            return value instanceof promise;
                        }
                        var promise = require(6);
                        var Deferred = require(3);
                        module.exports = {
                            /** @type {function (?, Function): ?} */
                            always : all,
                            /**
                             * @param {(Object|string)} promises
                             * @return {?}
                             */
                            allResolved : function(promises) {
                                var counter;
                                return void 0 === promises ? promise.reject(new Error("undefined is not an object")) : Array.isArray(promises) ? (counter = promises.length) ? new promise(function(makeIterator, complete) {
                                    /**
                                     * @return {undefined}
                                     */
                                    function reject() {
                                        if ((i += 1) === counter) {
                                            if (0 === picked.length) {
                                                complete();
                                            } else {
                                                makeIterator(picked);
                                            }
                                        }
                                    }
                                    /**
                                     * @param {(Error|string)} val
                                     * @return {undefined}
                                     */
                                    function resolve(val) {
                                        picked.push(val);
                                        reject();
                                    }
                                    /** @type {number} */
                                    var i = 0;
                                    /** @type {Array} */
                                    var picked = [];
                                    promises.forEach(function(value) {
                                        if (item(value)) {
                                            value.then(resolve, reject);
                                        } else {
                                            resolve(value);
                                        }
                                    });
                                }) : promise.resolve([]) : promise.reject(new Error("Type error"));
                            },
                            /**
                             * @param {Array} array
                             * @return {?}
                             */
                            some : function(array) {
                                var count;
                                return count = (array = array || []).length, array = array.filter(item), count ? count !== array.length ? promise.reject("non-Promise passed to .some") : new promise(function(recurring, makeIterator) {
                                    /**
                                     * @return {undefined}
                                     */
                                    function reject() {
                                        if ((r += 1) === array.length) {
                                            makeIterator();
                                        }
                                    }
                                    /** @type {number} */
                                    var r = 0;
                                    array.forEach(function(a) {
                                        a.then(recurring, reject);
                                    });
                                }) : promise.reject("no promises passed to .some");
                            },
                            /** @type {function (?): ?} */
                            isPromise : item,
                            /**
                             * @param {Array} values
                             * @return {?}
                             */
                            allSettled : function(values) {
                                /**
                                 * @return {undefined}
                                 */
                                function restoreScript() {
                                }
                                return promise.all((values || []).map(function(tasks) {
                                    return all(tasks, restoreScript);
                                }));
                            },
                            /**
                             * @param {?} promise
                             * @param {?} ms
                             * @return {?}
                             */
                            timeout : function(promise, ms) {
                                var def = new Deferred;
                                return setTimeout(function() {
                                    def.reject(new Error("Promise timed out"));
                                }, ms), promise.then(function(item) {
                                    def.resolve(item);
                                }, function(item) {
                                    def.reject(item);
                                }), def.promise;
                            }
                        };
                    }, function(S, dataAndEvents, $sanitize) {
                        var JSON = $sanitize(1).JSON;
                        S.exports = {
                            stringify : JSON.stringify || JSON.encode,
                            parse : JSON.parse || JSON.decode
                        };
                    }, function(module, dataAndEvents, require) {
                        var config = require(39);
                        var Block = require(97);
                        var hasOwn = require(7);
                        (config = Object.create(config)).build = hasOwn(config.build, null, Block);
                        /** @type {Object} */
                        module.exports = config;
                    }, function(module, dataAndEvents, $sanitize) {
                        var emitter = $sanitize(49).makeEmitter();
                        module.exports = {
                            emitter : emitter,
                            START : "start",
                            ALL_WIDGETS_RENDER_START : "all_widgets_render_start",
                            ALL_WIDGETS_RENDER_END : "all_widgets_render_end",
                            ALL_WIDGETS_AND_IMAGES_LOADED : "all_widgets_and_images_loaded"
                        };
                    }, function(module, dataAndEvents, topic) {
                        /**
                         * @param {?} o
                         * @param {?} first
                         * @return {?}
                         */
                        function callback(o, first) {
                            /** @type {Array} */
                            var rulesets = [o];
                            return first.forEach(function(paths) {
                                rulesets.push(function(a) {
                                    var messages = (a || "").toString();
                                    /** @type {number} */
                                    var msg = "/" === messages.slice(0, 1) ? 1 : 0;
                                    /** @type {(number|undefined)} */
                                    var spaceIdx = function(values) {
                                        return "/" === values.slice(-1);
                                    }(messages) ? -1 : void 0;
                                    return messages.slice(msg, spaceIdx);
                                }(paths));
                            }), rulesets.join("/");
                        }
                        var cl = topic(9);
                        var out = topic(102);
                        /** @type {string} */
                        var destination = "https://syndication.twitter.com";
                        /** @type {string} */
                        var computed = "https://platform.twitter.com";
                        /** @type {Array} */
                        var xs = ["https://syndication.twitter.com", "https://cdn.syndication.twimg.com", "https://localhost.twitter.com:8444"];
                        /** @type {Array} */
                        var dontCloseTags = ["https://syndication.twitter.com", "https://localhost.twitter.com:8445"];
                        /** @type {Array} */
                        var suiteView = ["https://platform.twitter.com", "https://localhost.twitter.com", /^https:\/\/ton\.local\.twitter\.com\/syndication-internal\/embed-iframe\/[0-9A-Za-z_-]+\/app/];
                        /**
                         * @param {Array} obj
                         * @param {?} actual
                         * @return {?}
                         */
                        var indexOf = function(obj, actual) {
                            return obj.some(function(expected) {
                                return expected instanceof RegExp ? expected.test(actual) : expected === actual;
                            });
                        };
                        /**
                         * @return {?}
                         */
                        var style = function() {
                            var item = cl.get("backendHost");
                            return item && indexOf(xs, item) ? item : "https://cdn.syndication.twimg.com";
                        };
                        /**
                         * @return {?}
                         */
                        var populate = function() {
                            var item = cl.get("settingsSvcHost");
                            return item && indexOf(dontCloseTags, item) ? item : destination;
                        };
                        module.exports = {
                            /**
                             * @param {Array} opt_arr
                             * @return {?}
                             */
                            cookieConsent : function(opt_arr) {
                                var r = opt_arr || [];
                                return r.unshift("cookie/consent"), callback(populate(), r);
                            },
                            /**
                             * @param {Array} opt_arr
                             * @param {string} x
                             * @return {?}
                             */
                            embedIframe : function(opt_arr, x) {
                                var r = opt_arr || [];
                                /** @type {string} */
                                var result = computed;
                                var value = cl.get("embedIframeURL");
                                return value && indexOf(suiteView, value) ? callback(value, r) + ".html" : (r.unshift(out.getBaseURLPath(x)), callback(result, r) + ".html");
                            },
                            /**
                             * @param {Array} values
                             * @return {?}
                             */
                            embedService : function(values) {
                                var nodes = values || [];
                                /** @type {string} */
                                var result = destination;
                                return nodes.unshift("srv"), callback(result, nodes);
                            },
                            /**
                             * @param {Array} opt_arr
                             * @return {?}
                             */
                            eventVideo : function(opt_arr) {
                                var r = opt_arr || [];
                                return r.unshift("video/event"), callback(style(), r);
                            },
                            /**
                             * @param {Array} rows
                             * @return {?}
                             */
                            grid : function(rows) {
                                var r = rows || [];
                                return r.unshift("grid/collection"), callback(style(), r);
                            },
                            /**
                             * @param {Array} opt_arr
                             * @return {?}
                             */
                            moment : function(opt_arr) {
                                var r = opt_arr || [];
                                return r.unshift("moments"), callback(style(), r);
                            },
                            /**
                             * @param {Array} opts
                             * @return {?}
                             */
                            settings : function(opts) {
                                var options = opts || [];
                                return options.unshift("settings"), callback(populate(), options);
                            },
                            /**
                             * @param {Array} opt_arr
                             * @return {?}
                             */
                            settingsScribe : function(opt_arr) {
                                var r = opt_arr || [];
                                return r.unshift("i/jot/embeds"), callback(populate(), r);
                            },
                            /**
                             * @param {Array} opt_arr
                             * @return {?}
                             */
                            timeline : function(opt_arr) {
                                var r = opt_arr || [];
                                return r.unshift("timeline"), callback(style(), r);
                            },
                            /**
                             * @param {Array} opt_arr
                             * @return {?}
                             */
                            tweetBatch : function(opt_arr) {
                                var r = opt_arr || [];
                                return r.unshift("tweets.json"), callback(style(), r);
                            },
                            /**
                             * @param {Array} opt_arr
                             * @return {?}
                             */
                            video : function(opt_arr) {
                                var r = opt_arr || [];
                                return r.unshift("widgets/video"), callback(style(), r);
                            }
                        };
                    }, function(module, dataAndEvents, f) {
                        var fx = f(4);
                        var sub = f(0);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {Object} target
                         * @param {Document} type
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, type) {
                            var frame;
                            if (type = type || fx, keepActiveItem = keepActiveItem || {}, target = target || {}, keepActiveItem.name) {
                                try {
                                    frame = type.createElement('<iframe name="' + keepActiveItem.name + '"></iframe>');
                                } catch (e) {
                                    (frame = type.createElement("iframe")).name = keepActiveItem.name;
                                }
                                delete keepActiveItem.name;
                            } else {
                                frame = type.createElement("iframe");
                            }
                            return keepActiveItem.id && (frame.id = keepActiveItem.id, delete keepActiveItem.id), frame.allowtransparency = "true", frame.scrolling = "no", frame.setAttribute("frameBorder", 0), frame.setAttribute("allowTransparency", true), sub.forIn(keepActiveItem, function(name, id) {
                                frame.setAttribute(name, id);
                            }), sub.forIn(target, function(name, region) {
                                /** @type {string} */
                                frame.style[name] = region;
                            }), frame;
                        };
                    }, function(module, dataAndEvents, require) {
                        var res = require(25);
                        var i = require(100);
                        module.exports = res.build([i]);
                    }, function(module, dataAndEvents, require) {
                        var res = require(25);
                        var i = require(116);
                        module.exports = res.build([i]);
                    }, function(module, dataAndEvents, require) {
                        var config = require(39);
                        var Block = require(40);
                        var hasOwn = require(7);
                        (config = Object.create(config)).build = hasOwn(config.build, null, Block);
                        /** @type {Object} */
                        module.exports = config;
                    }, function(module, dataAndEvents, require) {
                        var Block = require(70);
                        var mod = require(19);
                        var nodes = require(5);
                        var helper = require(21);
                        var db = require(0);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem) {
                            keepActiveItem.params({
                                chrome : {},
                                height : {
                                    transform : nodes.asInt
                                },
                                instanceId : {
                                    required : true,
                                    fallback : helper.deterministic
                                },
                                isPreconfigured : {},
                                lang : {
                                    required : true,
                                    transform : Block.matchLanguage,
                                    fallback : "en"
                                },
                                theme : {},
                                tweetLimit : {
                                    transform : nodes.asInt
                                }
                            });
                            keepActiveItem.defineProperty("endpoint", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    throw new Error("endpoint not specified");
                                }
                            });
                            keepActiveItem.define("queryParams", function() {
                                return db.compact({
                                    dnt : mod.enabled(),
                                    limit : this.params.tweetLimit,
                                    lang : this.params.lang
                                });
                            });
                        };
                    }, function(module, dataAndEvents, f) {
                        /**
                         * @param {Element} type
                         * @return {undefined}
                         */
                        function init(type) {
                            var _ref1;
                            var element;
                            var value;
                            /** @type {number} */
                            var _i = 0;
                            clt = {};
                            _ref1 = (type = type || fx).getElementsByTagName("meta");
                            for (;_ref1[_i];_i++) {
                                if (element = _ref1[_i], /^twitter:/.test(element.getAttribute("name"))) {
                                    value = element.getAttribute("name").replace(/^twitter:/, "");
                                } else {
                                    if (!/^twitter:/.test(element.getAttribute("property"))) {
                                        continue;
                                    }
                                    value = element.getAttribute("property").replace(/^twitter:/, "");
                                }
                                clt[value] = element.getAttribute("content") || element.getAttribute("value");
                            }
                        }
                        var clt;
                        var fx = f(4);
                        init();
                        module.exports = {
                            /** @type {function (Element): undefined} */
                            init : init,
                            /**
                             * @param {string} value
                             * @return {?}
                             */
                            val : function(value) {
                                return clt[value];
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {string} obj
                         * @return {?}
                         */
                        function print(obj) {
                            /** @type {string} */
                            var data = "";
                            if (!obj) {
                                return "";
                            }
                            try {
                                return data = expect.stringify(obj), base64.btoa(data);
                            } catch (t) {
                                return "";
                            }
                        }
                        /**
                         * @param {string} name
                         * @return {?}
                         */
                        function removeNode(name) {
                            return _self.settingsLoaded().then(function(old) {
                                return old[name];
                            });
                        }
                        /**
                         * @return {?}
                         */
                        function callback() {
                            return removeNode("features");
                        }
                        var _self = require(104);
                        var expect = require(24);
                        var base64 = require(1);
                        module.exports = {
                            /** @type {function (string): ?} */
                            encodeFeatures : print,
                            /**
                             * @return {?}
                             */
                            shouldObtainCookieConsent : function() {
                                return removeNode("shouldObtainCookieConsent");
                            },
                            /** @type {function (): ?} */
                            getExperiments : callback,
                            /**
                             * @param {number} off
                             * @return {?}
                             */
                            getExperiment : function(off) {
                                return callback().then(function(buf) {
                                    if (!buf[off]) {
                                        throw new Error("Experiment not found");
                                    }
                                    return buf[off];
                                });
                            },
                            /**
                             * @return {?}
                             */
                            getHorizonSettings : function() {
                                return _self.settingsLoaded().then(function(data) {
                                    return{
                                        features : data.features,
                                        sessionId : data.sessionId
                                    };
                                });
                            },
                            /**
                             * @return {?}
                             */
                            getActiveExperimentDataString : function() {
                                return callback().then(function(walkers) {
                                    return print(walkers);
                                });
                            },
                            /**
                             * @return {?}
                             */
                            getExperimentKeys : function() {
                                return callback().then(function(defs) {
                                    return Object.keys(defs);
                                });
                            },
                            /**
                             * @return {undefined}
                             */
                            load : function() {
                                _self.load();
                            }
                        };
                    }, function(Event, dataAndEvents, require) {
                        /**
                         * @param {Element} node
                         * @return {?}
                         */
                        function $(node) {
                            var data_twitter_event_id = node.getAttribute("data-twitter-event-id");
                            return data_twitter_event_id || (node.setAttribute("data-twitter-event-id", ++_zipIdx), _zipIdx);
                        }
                        /**
                         * @param {Function} data
                         * @param {Object} context
                         * @param {Event} e
                         * @return {?}
                         */
                        function fire(data, context, e) {
                            /** @type {number} */
                            var i = 0;
                            var padLength = data && data.length || 0;
                            /** @type {number} */
                            i = 0;
                            for (;i < padLength;i++) {
                                if (data[i].call(context, e, context), e.ceaseImmediately) {
                                    return false;
                                }
                            }
                        }
                        /**
                         * @param {Event} event
                         * @param {?} res
                         * @param {(Document|string)} value
                         * @return {undefined}
                         */
                        function handler(event, res, value) {
                            var node = value || (event.target || event.srcElement);
                            var words = nodes.list(node).map(function(dataAndEvents) {
                                return "." + dataAndEvents;
                            }).concat(node.tagName);
                            /** @type {number} */
                            var i = 0;
                            var len = words.length;
                            for (;i < len;i++) {
                                if (false === fire(res[words[i]], node, event)) {
                                    return;
                                }
                            }
                            if (!event.cease) {
                                if (node !== this) {
                                    handler.call(this, event, res, node.parentElement || node.parentNode);
                                }
                            }
                        }
                        /**
                         * @param {Object} context
                         * @param {string} name
                         * @param {Object} obj
                         * @param {?} node
                         * @return {undefined}
                         */
                        function register(context, name, obj, node) {
                            /**
                             * @param {?} res
                             * @return {undefined}
                             */
                            function cb(res) {
                                handler.call(context, res, obj[name]);
                            }
                            !function(tag, listener, keepData, dataAndEvents) {
                                if (tag.id) {
                                    keys[tag.id] = keys[tag.id] || [];
                                    keys[tag.id].push({
                                        el : tag,
                                        /** @type {function (?): undefined} */
                                        listener : listener,
                                        type : keepData,
                                        rootId : dataAndEvents
                                    });
                                }
                            }(context, cb, name, node);
                            context.addEventListener(name, cb, false);
                        }
                        /**
                         * @param {Function} e
                         * @return {undefined}
                         */
                        function preventDefault(e) {
                            if (e && e.preventDefault) {
                                e.preventDefault();
                            } else {
                                /** @type {boolean} */
                                e.returnValue = false;
                            }
                        }
                        /**
                         * @param {Function} event
                         * @return {undefined}
                         */
                        function stopPropagation(event) {
                            if (event && ((event.cease = true) && event.stopPropagation)) {
                                event.stopPropagation();
                            } else {
                                /** @type {boolean} */
                                event.cancelBubble = true;
                            }
                        }
                        var nodes = require(10);
                        var data = {};
                        /** @type {number} */
                        var _zipIdx = -1;
                        var keys = {};
                        Event.exports = {
                            /**
                             * @param {Function} e
                             * @return {?}
                             */
                            stop : function(e) {
                                return stopPropagation(e), preventDefault(e), false;
                            },
                            /** @type {function (Function): undefined} */
                            stopPropagation : stopPropagation,
                            /**
                             * @param {Object} event
                             * @return {undefined}
                             */
                            stopImmediatePropagation : function(event) {
                                if (event) {
                                    /** @type {boolean} */
                                    event.ceaseImmediately = true;
                                    stopPropagation(event);
                                    event.stopImmediatePropagation();
                                }
                            },
                            /** @type {function (Function): undefined} */
                            preventDefault : preventDefault,
                            /**
                             * @param {Element} target
                             * @param {string} type
                             * @param {string} selector
                             * @param {Object} fn
                             * @return {undefined}
                             */
                            delegate : function(target, type, selector, fn) {
                                var i = $(target);
                                data[i] = data[i] || {};
                                if (!data[i][type]) {
                                    data[i][type] = {};
                                    register(target, type, data[i], i);
                                }
                                data[i][type][selector] = data[i][type][selector] || [];
                                data[i][type][selector].push(fn);
                            },
                            /**
                             * @param {?} eventName
                             * @param {Element} target
                             * @param {Object} elem
                             * @return {undefined}
                             */
                            simulate : function(eventName, target, elem) {
                                var type = $(target);
                                var o = data[type] && data[type];
                                handler.call(target, {
                                    target : elem
                                }, o[eventName]);
                            },
                            /**
                             * @param {?} index
                             * @return {undefined}
                             */
                            removeDelegatesForWidget : function(index) {
                                var cur = keys[index];
                                if (cur) {
                                    cur.forEach(function(params) {
                                        params.el.removeEventListener(params.type, params.listener, false);
                                        delete data[params.rootId];
                                    });
                                    delete keys[index];
                                }
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var types = require(0);
                        var group = require(48);
                        module.exports = {
                            /**
                             * @param {string} obj
                             * @param {Object} a
                             * @param {Object} b
                             * @return {?}
                             */
                            closest : function max(obj, a, b) {
                                var el;
                                if (a) {
                                    return b = b || a && a.ownerDocument, el = types.isType("function", obj) ? obj : function(value) {
                                        return function(obj) {
                                            return!!obj.tagName && group(obj, value);
                                        };
                                    }(obj), a === b ? el(a) ? a : void 0 : el(a) ? a : max(el, a.parentNode, b);
                                }
                            }
                        };
                    }, function(module, dataAndEvents, read) {
                        /**
                         * @param {Object} args
                         * @return {?}
                         */
                        function runLoggingCallbacks(args) {
                            return that.aug({
                                client : "tfw"
                            }, args || {});
                        }
                        /**
                         * @param {string} range
                         * @param {Object} k
                         * @param {string} name
                         * @return {?}
                         */
                        function fn(range, k, name) {
                            return k = k || {}, that.aug({}, k, {
                                _category_ : range,
                                triggered_on : k.triggered_on || +new Date,
                                dnt : flags.enabled(name)
                            });
                        }
                        var data = read(42);
                        var orig_code = read(4);
                        var flags = read(19);
                        var field = read(36);
                        var text = read(74);
                        var json = read(24);
                        var all = read(9);
                        var pos = read(2);
                        var that = read(0);
                        /** @type {number} */
                        var k = 1;
                        var version = data.version;
                        var CLIENT_EVENT_ENDPOINT = all.get("clientEventEndpoint") || "https://syndication.twitter.com/i/jot";
                        module.exports = {
                            /**
                             * @param {Object} node
                             * @param {Object} format
                             * @return {?}
                             */
                            extractTermsFromDOM : function fn(node, format) {
                                var uHostName;
                                return format = format || {}, node && node.nodeType === Node.ELEMENT_NODE ? ((uHostName = node.getAttribute("data-scribe")) && uHostName.split(" ").forEach(function(buf) {
                                    var params = buf.trim().split(":");
                                    var k = params[0];
                                    var param = params[1];
                                    if (k) {
                                        if (param) {
                                            if (!format[k]) {
                                                format[k] = param;
                                            }
                                        }
                                    }
                                }), fn(node.parentNode, format)) : format;
                            },
                            /**
                             * @param {Object} element
                             * @return {?}
                             */
                            clickEventElement : function(element) {
                                var b = field.closest("[data-expanded-url]", element);
                                var cur = b && b.getAttribute("data-expanded-url");
                                return cur && pos.isTwitterURL(cur) ? "twitter_url" : "url";
                            },
                            /**
                             * @param {Object} res
                             * @param {Object} stream
                             * @return {?}
                             */
                            flattenClientEventPayload : function(res, stream) {
                                return that.aug({}, stream, {
                                    event_namespace : res
                                });
                            },
                            /** @type {function (string, Object, string): ?} */
                            formatGenericEventData : fn,
                            /**
                             * @param {string} selector
                             * @param {Array} value
                             * @param {number} putativeSpy
                             * @return {?}
                             */
                            formatClientEventData : function(selector, value, putativeSpy) {
                                var match = selector && selector.widget_origin || orig_code.referrer;
                                return(selector = fn("tfw_client_event", selector, match)).client_version = version, selector.format_version = void 0 !== putativeSpy ? putativeSpy : 1, value || (selector.widget_origin = match), selector;
                            },
                            /** @type {function (Object): ?} */
                            formatClientEventNamespace : runLoggingCallbacks,
                            /**
                             * @param {?} key
                             * @return {?}
                             */
                            formatHorizonTweetData : function(key) {
                                var options = {
                                    item_ids : [],
                                    item_details : {}
                                };
                                return options.item_ids.push(key), options.item_details[key] = {
                                    item_type : text.TWEET
                                }, options;
                            },
                            /**
                             * @param {Object} testDone
                             * @param {Object} v
                             * @return {?}
                             */
                            formatTweetAssociation : function(testDone, v) {
                                var cache = {};
                                return(v = v || {}).association_namespace = runLoggingCallbacks(testDone), cache[k] = v, cache;
                            },
                            /**
                             * @param {Object} v
                             * @return {?}
                             */
                            noticeSeen : function(v) {
                                return "notice" === v.element && "seen" === v.action;
                            },
                            /**
                             * @param {?} el
                             * @return {?}
                             */
                            splitLogEntry : function(el) {
                                var num;
                                var index;
                                var internalValues;
                                var max;
                                var old;
                                return el.item_ids && el.item_ids.length > 1 ? (num = Math.floor(el.item_ids.length / 2), index = el.item_ids.slice(0, num), internalValues = {}, max = el.item_ids.slice(num), old = {}, index.forEach(function(key) {
                                    internalValues[key] = el.item_details[key];
                                }), max.forEach(function(name) {
                                    old[name] = el.item_details[name];
                                }), [that.aug({}, el, {
                                    item_ids : index,
                                    item_details : internalValues
                                }), that.aug({}, el, {
                                    item_ids : max,
                                    item_details : old
                                })]) : [el];
                            },
                            /**
                             * @param {string} obj
                             * @return {?}
                             */
                            stringify : function(obj) {
                                var hash;
                                /** @type {function (this:Object, string=): *} */
                                var toJSON = Array.prototype.toJSON;
                                return delete Array.prototype.toJSON, hash = json.stringify(obj), toJSON && (Array.prototype.toJSON = toJSON), hash;
                            },
                            CLIENT_EVENT_ENDPOINT : CLIENT_EVENT_ENDPOINT,
                            RUFOUS_REDIRECT : "https://platform.twitter.com/jot.html"
                        };
                    }, function(module, dataAndEvents, require) {
                        var a = require(8);
                        var Block = require(73);
                        var jQuery = require(0);
                        var i = Block.getCanonicalURL() || a.href;
                        var len = i;
                        module.exports = {
                            /**
                             * @return {?}
                             */
                            isFramed : function() {
                                return i !== len;
                            },
                            /**
                             * @param {string} b
                             * @return {?}
                             */
                            rootDocumentLocation : function(b) {
                                return b && (jQuery.isType("string", b) && (i = b)), i;
                            },
                            /**
                             * @return {?}
                             */
                            currentDocumentLocation : function() {
                                return len;
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var augment = require(95);
                        var extend = require(96);
                        var assert = require(0);
                        module.exports = {
                            /**
                             * @return {?}
                             */
                            couple : function() {
                                return assert.toRealArray(arguments);
                            },
                            /**
                             * @param {Array} path
                             * @param {Array} params
                             * @param {Array} name
                             * @return {?}
                             */
                            build : function(path, params, name) {
                                var data = new path;
                                return(params = extend(augment(params || []))).forEach(function(handle) {
                                    handle.call(null, data);
                                }), data.build(name);
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @return {undefined}
                         */
                        function constructor() {
                            this.Component = this.factory();
                            /** @type {Array} */
                            this._adviceArgs = [];
                            /** @type {Array} */
                            this._lastArgs = [];
                        }
                        var a = require(98);
                        var $ = require(0);
                        var factory = require(41);
                        $.aug(constructor.prototype, {
                            factory : factory,
                            /**
                             * @param {Array} dataName
                             * @return {?}
                             */
                            build : function(dataName) {
                                var can = this;
                                return this.Component, $.aug(this.Component.prototype.boundParams, dataName), this._adviceArgs.concat(this._lastArgs).forEach(function(checkSet) {
                                    (function(group, name, value) {
                                        var obj = this[name];
                                        if (!obj) {
                                            throw new Error(name + " does not exist");
                                        }
                                        this[name] = group(obj, value);
                                    }).apply(can.Component.prototype, checkSet);
                                }), delete this._lastArgs, delete this._adviceArgs, this.Component;
                            },
                            /**
                             * @param {?} opt_attributes
                             * @return {undefined}
                             */
                            params : function(opt_attributes) {
                                var elemVars = this.Component.prototype.paramConfigs;
                                opt_attributes = opt_attributes || {};
                                this.Component.prototype.paramConfigs = $.aug({}, opt_attributes, elemVars);
                            },
                            /**
                             * @param {string} p
                             * @param {Function} opt
                             * @return {undefined}
                             */
                            define : function(p, opt) {
                                if (p in this.Component.prototype) {
                                    throw new Error(p + " has previously been defined");
                                }
                                this.override(p, opt);
                            },
                            /**
                             * @param {string} name
                             * @param {Function} region
                             * @return {undefined}
                             */
                            defineStatic : function(name, region) {
                                /** @type {Function} */
                                this.Component[name] = region;
                            },
                            /**
                             * @param {string} name
                             * @param {Function} o
                             * @return {undefined}
                             */
                            override : function(name, o) {
                                /** @type {Function} */
                                this.Component.prototype[name] = o;
                            },
                            /**
                             * @param {string} name
                             * @param {string} opt_attributes
                             * @return {undefined}
                             */
                            defineProperty : function(name, opt_attributes) {
                                if (name in this.Component.prototype) {
                                    throw new Error(name + " has previously been defined");
                                }
                                this.overrideProperty(name, opt_attributes);
                            },
                            /**
                             * @param {string} name
                             * @param {?} opt_attributes
                             * @return {undefined}
                             */
                            overrideProperty : function(name, opt_attributes) {
                                var desc = $.aug({
                                    configurable : true
                                }, opt_attributes);
                                Object.defineProperty(this.Component.prototype, name, desc);
                            },
                            /**
                             * @param {string} base
                             * @param {Function} callback
                             * @return {undefined}
                             */
                            before : function(base, callback) {
                                this._adviceArgs.push([a.before, base, callback]);
                            },
                            /**
                             * @param {string} method
                             * @param {Function} next
                             * @return {undefined}
                             */
                            after : function(method, next) {
                                this._adviceArgs.push([a.after, method, next]);
                            },
                            /**
                             * @param {string} base
                             * @param {Function} callback
                             * @return {undefined}
                             */
                            around : function(base, callback) {
                                this._adviceArgs.push([a.around, base, callback]);
                            },
                            /**
                             * @param {?} obj
                             * @param {?} i
                             * @return {undefined}
                             */
                            last : function(obj, i) {
                                this._lastArgs.push([a.after, obj, i]);
                            }
                        });
                        /** @type {function (): undefined} */
                        module.exports = constructor;
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @return {?}
                         */
                        function empty() {
                            return true;
                        }
                        /**
                         * @param {?} elem
                         * @return {?}
                         */
                        function restoreScript(elem) {
                            return elem;
                        }
                        var _ = require(0);
                        /**
                         * @return {?}
                         */
                        module.exports = function() {
                            /**
                             * @param {Object} options
                             * @return {undefined}
                             */
                            function filter(options) {
                                var tok = this;
                                options = options || {};
                                this.params = Object.keys(this.paramConfigs).reduce(function(results, key) {
                                    /** @type {Array} */
                                    var args = [];
                                    var obj = tok.boundParams;
                                    var opts = tok.paramConfigs[key];
                                    var value = opts.validate || empty;
                                    var index = opts.transform || restoreScript;
                                    if (key in obj && args.push(obj[key]), key in options && args.push(options[key]), args = "fallback" in opts ? args.concat(opts.fallback) : args, results[key] = function(array, win, i) {
                                        /** @type {null} */
                                        var c = null;
                                        return array.some(function(b) {
                                            if (b = _.isType("function", b) ? b() : b, win(b)) {
                                                return c = i(b), true;
                                            }
                                        }), c;
                                    }(args, value, index), opts.required && null == results[key]) {
                                        throw new Error(key + " is a required parameter");
                                    }
                                    return results;
                                }, {});
                                this.initialize();
                            }
                            return _.aug(filter.prototype, {
                                paramConfigs : {},
                                boundParams : {},
                                /**
                                 * @return {undefined}
                                 */
                                initialize : function() {
                                }
                            }), filter;
                        };
                    }, function($) {
                        $.exports = {
                            version : "2615f7e52b7e0:1702314776716"
                        };
                    }, function(module, dataAndEvents, Event) {
                        var self = Event(1);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {Object} ctx
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, ctx) {
                            var handle;
                            /** @type {number} */
                            var aux = 0;
                            return ctx = ctx || null, function trigger() {
                                var context = ctx || this;
                                /** @type {Arguments} */
                                var args = arguments;
                                /** @type {number} */
                                var max = +new Date;
                                if (self.clearTimeout(handle), max - aux > target) {
                                    return aux = max, void keepActiveItem.apply(context, args);
                                }
                                handle = self.setTimeout(function() {
                                    trigger.apply(context, args);
                                }, target);
                            };
                        };
                    }, function(module, dataAndEvents, require) {
                        var Block = require(18);
                        /**
                         * @return {undefined}
                         */
                        module.exports = function() {
                            Block.publicError("Error: This Timeline type is no longer supported (Likes, Collections, & Moments). \n\t", "* Twitter still supports Profile and List Timelines \n\t", "* You can learn more about this change in our announcement: \n\t", "https://twittercommunity.com/t/removing-support-for-embedded-like-collection-and-moment-timelines/150313 \n\t", "* In order to create a new Embedded Timeline, visit: https://publish.twitter.com");
                        };
                    }, function(module, dataAndEvents, deepDataAndEvents) {
                        var add;
                        /**
                         * @return {?}
                         */
                        add = function() {
                            /**
                             * @param {?} fn
                             * @return {?}
                             */
                            function filter(fn) {
                                return "function" == typeof fn;
                            }
                            /**
                             * @return {?}
                             */
                            function add() {
                                /** @type {function ((Function|null|string), number): number} */
                                var needs_parens = setTimeout;
                                return function() {
                                    return needs_parens(func, 1);
                                };
                            }
                            /**
                             * @return {undefined}
                             */
                            function func() {
                                /** @type {number} */
                                var i = 0;
                                for (;i < row;i += 2) {
                                    (0, mat[i])(mat[i + 1]);
                                    mat[i] = void 0;
                                    mat[i + 1] = void 0;
                                }
                                /** @type {number} */
                                row = 0;
                            }
                            /**
                             * @param {Function} recurring
                             * @param {Function} result
                             * @return {?}
                             */
                            function value(recurring, result) {
                                var me = this;
                                var e = new this.constructor(type);
                                if (void 0 === e[i]) {
                                    error(e);
                                }
                                var j = me._state;
                                if (j) {
                                    var def = arguments[j - 1];
                                    $(function() {
                                        return onComplete(j, e, def, me._result);
                                    });
                                } else {
                                    addClass(me, e, recurring, result);
                                }
                                return e;
                            }
                            /**
                             * @param {Object} keepActiveItem
                             * @return {?}
                             */
                            function handler(keepActiveItem) {
                                if (keepActiveItem && ("object" == typeof keepActiveItem && keepActiveItem.constructor === this)) {
                                    return keepActiveItem;
                                }
                                var e = new this(type);
                                return done(e, keepActiveItem), e;
                            }
                            /**
                             * @return {undefined}
                             */
                            function type() {
                            }
                            /**
                             * @param {Object} res
                             * @return {?}
                             */
                            function cb(res) {
                                try {
                                    return res.then;
                                } catch (e) {
                                    return a.error = e, a;
                                }
                            }
                            /**
                             * @param {Object} o
                             * @param {Object} obj
                             * @param {undefined} item
                             * @return {undefined}
                             */
                            function fn(o, obj, item) {
                                if (obj.constructor === o.constructor && (item === value && obj.constructor.resolve === handler)) {
                                    (function(e, obj) {
                                        if (obj._state === target) {
                                            next(e, obj._result);
                                        } else {
                                            if (obj._state === cur) {
                                                callback(e, obj._result);
                                            } else {
                                                addClass(obj, void 0, function(err) {
                                                    return done(e, err);
                                                }, function(isXML) {
                                                    return callback(e, isXML);
                                                });
                                            }
                                        }
                                    })(o, obj);
                                } else {
                                    if (item === a) {
                                        callback(o, a.error);
                                        /** @type {null} */
                                        a.error = null;
                                    } else {
                                        if (void 0 === item) {
                                            next(o, obj);
                                        } else {
                                            if (filter(item)) {
                                                (function(me, obj, field) {
                                                    $(function(err) {
                                                        /** @type {boolean} */
                                                        var r = false;
                                                        var value = function(parent, child, next, data) {
                                                            try {
                                                                parent.call(child, next, data);
                                                            } catch (t) {
                                                                return t;
                                                            }
                                                        }(field, obj, function(results) {
                                                            if (!r) {
                                                                /** @type {boolean} */
                                                                r = true;
                                                                if (obj !== results) {
                                                                    done(err, results);
                                                                } else {
                                                                    next(err, results);
                                                                }
                                                            }
                                                        }, function(isXML) {
                                                            if (!r) {
                                                                /** @type {boolean} */
                                                                r = true;
                                                                callback(err, isXML);
                                                            }
                                                        }, err._label);
                                                        if (!r) {
                                                            if (value) {
                                                                /** @type {boolean} */
                                                                r = true;
                                                                callback(err, value);
                                                            }
                                                        }
                                                    }, me);
                                                })(o, obj, item);
                                            } else {
                                                next(o, obj);
                                            }
                                        }
                                    }
                                }
                            }
                            /**
                             * @param {Object} e
                             * @param {Object} err
                             * @return {undefined}
                             */
                            function done(e, err) {
                                var error;
                                var jt;
                                if (e === err) {
                                    callback(e, new TypeError("You cannot resolve a promise with itself"));
                                } else {
                                    /** @type {string} */
                                    jt = typeof(error = err);
                                    if (null === error || "object" !== jt && "function" !== jt) {
                                        next(e, err);
                                    } else {
                                        fn(e, err, cb(err));
                                    }
                                }
                            }
                            /**
                             * @param {Object} _this
                             * @return {undefined}
                             */
                            function newItem(_this) {
                                if (_this._onerror) {
                                    _this._onerror(_this._result);
                                }
                                item(_this);
                            }
                            /**
                             * @param {?} me
                             * @param {Object} e
                             * @return {undefined}
                             */
                            function next(me, e) {
                                if (me._state === Link) {
                                    /** @type {Object} */
                                    me._result = e;
                                    /** @type {number} */
                                    me._state = target;
                                    if (0 !== me._subscribers.length) {
                                        $(item, me);
                                    }
                                }
                            }
                            /**
                             * @param {?} me
                             * @param {Object} value
                             * @return {undefined}
                             */
                            function callback(me, value) {
                                if (me._state === Link) {
                                    /** @type {number} */
                                    me._state = cur;
                                    /** @type {Object} */
                                    me._result = value;
                                    $(newItem, me);
                                }
                            }
                            /**
                             * @param {?} me
                             * @param {?} o
                             * @param {Function} recurring
                             * @param {Function} value
                             * @return {undefined}
                             */
                            function addClass(me, o, recurring, value) {
                                var data = me._subscribers;
                                var i = data.length;
                                /** @type {null} */
                                me._onerror = null;
                                data[i] = o;
                                /** @type {Function} */
                                data[i + target] = recurring;
                                /** @type {Function} */
                                data[i + cur] = value;
                                if (0 === i) {
                                    if (me._state) {
                                        $(item, me);
                                    }
                                }
                            }
                            /**
                             * @param {Object} instance
                             * @return {undefined}
                             */
                            function item(instance) {
                                var keys = instance._subscribers;
                                var udataCur = instance._state;
                                if (0 !== keys.length) {
                                    var name = void 0;
                                    var fn = void 0;
                                    var elements = instance._result;
                                    /** @type {number} */
                                    var i = 0;
                                    for (;i < keys.length;i += 3) {
                                        name = keys[i];
                                        fn = keys[i + udataCur];
                                        if (name) {
                                            onComplete(udataCur, name, fn, elements);
                                        } else {
                                            fn(elements);
                                        }
                                    }
                                    /** @type {number} */
                                    instance._subscribers.length = 0;
                                }
                            }
                            /**
                             * @param {number} value
                             * @param {Object} e
                             * @param {?} item
                             * @param {(Function|string)} event
                             * @return {?}
                             */
                            function onComplete(value, e, item, event) {
                                var prop = filter(item);
                                var result = void 0;
                                var error = void 0;
                                var designer = void 0;
                                var c = void 0;
                                if (prop) {
                                    if ((result = function(fn, context) {
                                        try {
                                            return fn(context);
                                        } catch (e) {
                                            return a.error = e, a;
                                        }
                                    }(item, event)) === a ? (c = true, error = result.error, result.error = null) : designer = true, e === result) {
                                        return void callback(e, new TypeError("A promises callback cannot return that same promise."));
                                    }
                                } else {
                                    /** @type {(Function|string)} */
                                    result = event;
                                    /** @type {boolean} */
                                    designer = true;
                                }
                                if (!(e._state !== Link)) {
                                    if (prop && designer) {
                                        done(e, result);
                                    } else {
                                        if (c) {
                                            callback(e, error);
                                        } else {
                                            if (value === target) {
                                                next(e, result);
                                            } else {
                                                if (value === cur) {
                                                    callback(e, result);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            /**
                             * @param {Object} m
                             * @return {undefined}
                             */
                            function error(m) {
                                /** @type {number} */
                                m[i] = index++;
                                m._state = void 0;
                                m._result = void 0;
                                /** @type {Array} */
                                m._subscribers = [];
                            }
                            /** @type {Function} */
                            var isArray = Array.isArray ? Array.isArray : function(arr) {
                                return "[object Array]" === Object.prototype.toString.call(arr);
                            };
                            /** @type {number} */
                            var row = 0;
                            var needs_parens = void 0;
                            var limit = void 0;
                            /**
                             * @param {Object} keepActiveItem
                             * @param {?} target
                             * @return {undefined}
                             */
                            var $ = function(keepActiveItem, target) {
                                /** @type {Object} */
                                mat[row] = keepActiveItem;
                                mat[row + 1] = target;
                                if (2 === (row += 2)) {
                                    if (limit) {
                                        limit(func);
                                    } else {
                                        fnc();
                                    }
                                }
                            };
                            /** @type {(Window|undefined)} */
                            var opt_global = "undefined" != typeof window ? window : void 0;
                            /** @type {(Window|{})} */
                            var global = opt_global || {};
                            var Comp = global.MutationObserver || global.WebKitMutationObserver;
                            /** @type {boolean} */
                            var c = "undefined" == typeof self && ("undefined" != typeof process && "[object process]" === {}.toString.call(process));
                            /** @type {boolean} */
                            var d = "undefined" != typeof Uint8ClampedArray && ("undefined" != typeof importScripts && "undefined" != typeof MessageChannel);
                            /** @type {Array} */
                            var mat = new Array(1E3);
                            var channel;
                            var data;
                            var observer;
                            var textNode;
                            var fnc = void 0;
                            if (c) {
                                /**
                                 * @return {?}
                                 */
                                fnc = function() {
                                    return process.nextTick(func);
                                };
                            } else {
                                if (Comp) {
                                    /** @type {number} */
                                    data = 0;
                                    /** @type {MutationObserver} */
                                    observer = new Comp(func);
                                    /** @type {Text} */
                                    textNode = document.createTextNode("");
                                    observer.observe(textNode, {
                                        characterData : true
                                    });
                                    /**
                                     * @return {undefined}
                                     */
                                    fnc = function() {
                                        /** @type {number} */
                                        textNode.data = data = ++data % 2;
                                    };
                                } else {
                                    if (d) {
                                        /** @type {function (): undefined} */
                                        (channel = new MessageChannel).port1.onmessage = func;
                                        /**
                                         * @return {?}
                                         */
                                        fnc = function() {
                                            return channel.port2.postMessage(0);
                                        };
                                    } else {
                                        fnc = void 0 === opt_global ? function() {
                                            try {
                                                var runOnContext = Function("return this")().require("vertx");
                                                return void 0 !== (needs_parens = runOnContext.runOnLoop || runOnContext.runOnContext) ? function() {
                                                    needs_parens(func);
                                                } : add();
                                            } catch (t) {
                                                return add();
                                            }
                                        }() : add();
                                    }
                                }
                            }
                            /** @type {string} */
                            var i = Math.random().toString(36).substring(2);
                            var Link = void 0;
                            /** @type {number} */
                            var target = 1;
                            /** @type {number} */
                            var cur = 2;
                            var a = {
                                error : null
                            };
                            /** @type {number} */
                            var index = 0;
                            var AllDbQueryCollection = function() {
                                /**
                                 * @param {Function} Node
                                 * @param {string} results
                                 * @return {undefined}
                                 */
                                function initialize(Node, results) {
                                    /** @type {Function} */
                                    this._instanceConstructor = Node;
                                    this.promise = new Node(type);
                                    if (!this.promise[i]) {
                                        error(this.promise);
                                    }
                                    if (isArray(results)) {
                                        this.length = results.length;
                                        this._remaining = results.length;
                                        /** @type {Array} */
                                        this._result = new Array(this.length);
                                        if (0 === this.length) {
                                            next(this.promise, this._result);
                                        } else {
                                            this.length = this.length || 0;
                                            this._enumerate(results);
                                            if (0 === this._remaining) {
                                                next(this.promise, this._result);
                                            }
                                        }
                                    } else {
                                        callback(this.promise, new Error("Array Methods must be provided an Array"));
                                    }
                                }
                                return initialize.prototype._enumerate = function(codeSegments) {
                                    /** @type {number} */
                                    var i = 0;
                                    for (;this._state === Link && i < codeSegments.length;i++) {
                                        this._eachEntry(codeSegments[i], i);
                                    }
                                }, initialize.prototype._eachEntry = function(item, fix) {
                                    var CustomEvent = this._instanceConstructor;
                                    var resolver = CustomEvent.resolve;
                                    if (resolver === handler) {
                                        var callback = cb(item);
                                        if (callback === value && item._state !== Link) {
                                            this._settledAt(item._state, fix, item._result);
                                        } else {
                                            if ("function" != typeof callback) {
                                                this._remaining--;
                                                /** @type {Object} */
                                                this._result[fix] = item;
                                            } else {
                                                if (CustomEvent === Promise) {
                                                    var e = new CustomEvent(type);
                                                    fn(e, item, callback);
                                                    this._willSettleAt(e, fix);
                                                } else {
                                                    this._willSettleAt(new CustomEvent(function(fn) {
                                                        return fn(item);
                                                    }), fix);
                                                }
                                            }
                                        }
                                    } else {
                                        this._willSettleAt(resolver(item), fix);
                                    }
                                }, initialize.prototype._settledAt = function(elem, type, arg) {
                                    var me = this.promise;
                                    if (me._state === Link) {
                                        this._remaining--;
                                        if (elem === cur) {
                                            callback(me, arg);
                                        } else {
                                            this._result[type] = arg;
                                        }
                                    }
                                    if (0 === this._remaining) {
                                        next(me, this._result);
                                    }
                                }, initialize.prototype._willSettleAt = function(thing, type) {
                                    var jQuery = this;
                                    addClass(thing, void 0, function(until) {
                                        return jQuery._settledAt(target, type, until);
                                    }, function(until) {
                                        return jQuery._settledAt(cur, type, until);
                                    });
                                }, initialize;
                            }();
                            var Promise = function() {
                                /**
                                 * @param {undefined} scope
                                 * @return {undefined}
                                 */
                                function filter(scope) {
                                    /** @type {number} */
                                    this[i] = index++;
                                    this._result = this._state = void 0;
                                    /** @type {Array} */
                                    this._subscribers = [];
                                    if (type !== scope) {
                                        if ("function" != typeof scope) {
                                            (function() {
                                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                                            })();
                                        }
                                        if (this instanceof filter) {
                                            (function(e, fn) {
                                                try {
                                                    fn(function(err) {
                                                        done(e, err);
                                                    }, function(isXML) {
                                                        callback(e, isXML);
                                                    });
                                                } catch (udataCur) {
                                                    callback(e, udataCur);
                                                }
                                            })(this, scope);
                                        } else {
                                            (function() {
                                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                                            })();
                                        }
                                    }
                                }
                                return filter.prototype.catch = function(callback) {
                                    return this.then(null, callback);
                                }, filter.prototype.finally = function(callback) {
                                    var constructor = this.constructor;
                                    return filter(callback) ? this.then(function(dataAndEvents) {
                                        return constructor.resolve(callback()).then(function() {
                                            return dataAndEvents;
                                        });
                                    }, function(dataAndEvents) {
                                        return constructor.resolve(callback()).then(function() {
                                            throw dataAndEvents;
                                        });
                                    }) : this.then(callback, callback);
                                }, filter;
                            }();
                            return Promise.prototype.then = value, Promise.all = function(keepActiveItem) {
                                return(new AllDbQueryCollection(this, keepActiveItem)).promise;
                            }, Promise.race = function(keepActiveItem) {
                                var dfd = this;
                                return isArray(keepActiveItem) ? new dfd(function(recurring, reject) {
                                    var valuesLen = keepActiveItem.length;
                                    /** @type {number} */
                                    var i = 0;
                                    for (;i < valuesLen;i++) {
                                        dfd.resolve(keepActiveItem[i]).then(recurring, reject);
                                    }
                                }) : new dfd(function(dataAndEvents, callback) {
                                    return callback(new TypeError("You must pass an array to race."));
                                });
                            }, Promise.resolve = handler, Promise.reject = function(keepActiveItem) {
                                var me = new this(type);
                                return callback(me, keepActiveItem), me;
                            }, Promise._setScheduler = function(val) {
                                /** @type {(number|string)} */
                                limit = val;
                            }, Promise._setAsap = function(dataAndEvents) {
                                /** @type {Function} */
                                $ = dataAndEvents;
                            }, Promise._asap = $, Promise.polyfill = function() {
                                var root = void 0;
                                if ("undefined" != typeof global) {
                                    root = global;
                                } else {
                                    if ("undefined" != typeof self) {
                                        /** @type {Window} */
                                        root = self;
                                    } else {
                                        try {
                                            root = Function("return this")();
                                        } catch (t) {
                                            throw new Error("polyfill failed because global object is unavailable in this environment");
                                        }
                                    }
                                }
                                var __exports__ = root.Promise;
                                if (__exports__) {
                                    /** @type {null} */
                                    var n = null;
                                    try {
                                        /** @type {string} */
                                        n = Object.prototype.toString.call(__exports__.resolve());
                                    } catch (t) {
                                    }
                                    if ("[object Promise]" === n && !__exports__.cast) {
                                        return;
                                    }
                                }
                                root.Promise = Promise;
                            }, Promise.Promise = Promise, Promise;
                        };
                        module.exports = add();
                    }, function(module, dataAndEvents, require) {
                        var Type = require(47);
                        module.exports = new Type("twttr");
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {string} field
                         * @return {?}
                         */
                        function fn(field) {
                            return $.isType("string", field) ? field.split(".") : $.isType("array", field) ? field : [];
                        }
                        /**
                         * @param {Object} keepActiveItem
                         * @param {Object} object
                         * @return {undefined}
                         */
                        function constructor(keepActiveItem, object) {
                            (object = object || global)[keepActiveItem] = object[keepActiveItem] || {};
                            Object.defineProperty(this, "base", {
                                value : object[keepActiveItem]
                            });
                            Object.defineProperty(this, "name", {
                                value : keepActiveItem
                            });
                        }
                        var global = require(1);
                        var $ = require(0);
                        $.aug(constructor.prototype, {
                            /**
                             * @param {string} obj
                             * @return {?}
                             */
                            get : function(obj) {
                                return fn(obj).reduce(function(c, eventName) {
                                    if ($.isObject(c)) {
                                        return c[eventName];
                                    }
                                }, this.base);
                            },
                            /**
                             * @param {string} obj
                             * @param {boolean} dataAndEvents
                             * @param {boolean} opt_isCancel
                             * @return {?}
                             */
                            set : function(obj, dataAndEvents, opt_isCancel) {
                                var str = fn(obj);
                                var arr2 = function(initial, item) {
                                    var arr = fn(item).slice(0, -1);
                                    return arr.reduce(function(target, n, i) {
                                        if (target[n] = target[n] || {}, !$.isObject(target[n])) {
                                            throw new Error(arr.slice(0, i + 1).join(".") + " is already defined with a value.");
                                        }
                                        return target[n];
                                    }, initial);
                                }(this.base, obj);
                                var i = str.slice(-1);
                                return opt_isCancel && i in arr2 ? arr2[i] : arr2[i] = dataAndEvents;
                            },
                            /**
                             * @param {string} owner
                             * @param {boolean} node
                             * @return {?}
                             */
                            init : function(owner, node) {
                                return this.set(owner, node, true);
                            },
                            /**
                             * @param {string} attr
                             * @return {undefined}
                             */
                            unset : function(attr) {
                                var val = fn(attr);
                                var cookies = this.get(val.slice(0, -1));
                                if (cookies) {
                                    delete cookies[val.slice(-1)];
                                }
                            },
                            /**
                             * @param {?} opt_attributes
                             * @return {?}
                             */
                            aug : function(opt_attributes) {
                                var item = this.get(opt_attributes);
                                var array = $.toRealArray(arguments).slice(1);
                                if (item = void 0 !== item ? item : {}, array.unshift(item), !array.every($.isObject)) {
                                    throw new Error("Cannot augment non-object.");
                                }
                                return this.set(opt_attributes, $.aug.apply(null, array));
                            },
                            /**
                             * @param {Object} method
                             * @return {?}
                             */
                            call : function(method) {
                                var action = this.get(method);
                                var args = $.toRealArray(arguments).slice(1);
                                if (!$.isType("function", action)) {
                                    throw new Error("Function " + method + "does not exist.");
                                }
                                return action.apply(null, args);
                            },
                            /**
                             * @param {(Array|string)} i
                             * @return {?}
                             */
                            fullPath : function(i) {
                                var r = fn(i);
                                return r.unshift(this.name), r.join(".");
                            }
                        });
                        /** @type {function (Object, Object): undefined} */
                        module.exports = constructor;
                    }, function(module, dataAndEvents, $sanitize) {
                        var DomQuery = $sanitize(1).HTMLElement;
                        var insert = DomQuery.prototype.matches || (DomQuery.prototype.matchesSelector || (DomQuery.prototype.webkitMatchesSelector || (DomQuery.prototype.mozMatchesSelector || (DomQuery.prototype.msMatchesSelector || DomQuery.prototype.oMatchesSelector))));
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            if (insert) {
                                return insert.call(keepActiveItem, target);
                            }
                        };
                    }, function(module, dataAndEvents, format) {
                        var result = format(0);
                        var f = format(7);
                        var Mousetrap = {
                            /**
                             * @param {string} mayParseLabeledStatementInstead
                             * @param {Function} fn
                             * @return {?}
                             */
                            bind : function(mayParseLabeledStatementInstead, fn) {
                                return this._handlers = this._handlers || {}, this._handlers[mayParseLabeledStatementInstead] = this._handlers[mayParseLabeledStatementInstead] || [], this._handlers[mayParseLabeledStatementInstead].push(fn);
                            },
                            /**
                             * @param {?} type
                             * @param {Function} callback
                             * @return {undefined}
                             */
                            unbind : function(type, callback) {
                                var index;
                                if (this._handlers) {
                                    if (this._handlers[type]) {
                                        if (callback) {
                                            if ((index = this._handlers[type].indexOf(callback)) >= 0) {
                                                this._handlers[type].splice(index, 1);
                                            }
                                        } else {
                                            /** @type {Array} */
                                            this._handlers[type] = [];
                                        }
                                    }
                                }
                            },
                            /**
                             * @param {string} type
                             * @param {?} opt_attributes
                             * @return {undefined}
                             */
                            trigger : function(type, opt_attributes) {
                                var handlers = this._handlers && this._handlers[type];
                                /** @type {string} */
                                (opt_attributes = opt_attributes || {}).type = type;
                                if (handlers) {
                                    handlers.forEach(function(x) {
                                        result.async(f(x, this, opt_attributes));
                                    });
                                }
                            }
                        };
                        module.exports = {
                            Emitter : Mousetrap,
                            /**
                             * @return {?}
                             */
                            makeEmitter : function() {
                                return result.aug(function() {
                                }, Mousetrap);
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var jQuery = require(89);
                        var Block = require(91);
                        var Node = require(6);
                        var Q = require(23);
                        var proxy = require(7);
                        var _ = require(0);
                        var result = new Block(function(key) {
                            var reversed = function(arr) {
                                return arr.reduce(function(classes, value) {
                                    return classes[value._className] = classes[value._className] || [], classes[value._className].push(value), classes;
                                }, {});
                            }(key.map(jQuery.fromRawTask));
                            _.forIn(reversed, function(dataAndEvents, paths) {
                                Q.allSettled(paths.map(function(dataset) {
                                    return dataset.initialize();
                                })).then(function() {
                                    paths.forEach(function(that) {
                                        Node.all([that.hydrate(), that.insertIntoDom()]).then(proxy(that.render, that)).then(proxy(that.success, that), proxy(that.fail, that));
                                    });
                                });
                            });
                        });
                        module.exports = {
                            /**
                             * @param {string} pattern
                             * @return {?}
                             */
                            addWidget : function(pattern) {
                                return result.add(pattern);
                            }
                        };
                    }, function(module, dataAndEvents, topic) {
                        var out = topic(17);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return out.write(function() {
                                if (keepActiveItem) {
                                    if (keepActiveItem.parentNode) {
                                        keepActiveItem.parentNode.removeChild(keepActiveItem);
                                    }
                                }
                            });
                        };
                    }, function(node, dataAndEvents, $) {
                        var _this = $(93);
                        var console = $(71);
                        var res = new ($(103))(function(collections) {
                            (!function(collections) {
                                return 1 === collections.length && console.canFlushOneItem(collections[0]);
                            }(collections) ? function(collections) {
                                _this.init();
                                collections.forEach(function(app) {
                                    var html = app.input.namespace;
                                    var t = app.input.data;
                                    var e = app.input.offsite;
                                    var pdataOld = app.input.version;
                                    _this.clientEvent(html, t, e, pdataOld);
                                });
                                _this.flush().then(function() {
                                    collections.forEach(function(book) {
                                        book.taskDoneDeferred.resolve();
                                    });
                                }, function() {
                                    collections.forEach(function(Stream) {
                                        Stream.taskDoneDeferred.reject();
                                    });
                                });
                            } : function(collections) {
                                collections.forEach(function(self) {
                                    var html = self.input.namespace;
                                    var t = self.input.data;
                                    var val = self.input.offsite;
                                    var pdataOld = self.input.version;
                                    console.clientEvent(html, t, val, pdataOld);
                                    self.taskDoneDeferred.resolve();
                                });
                            })(collections);
                        });
                        node.exports = {
                            /**
                             * @param {string} name
                             * @param {Object} obj
                             * @param {?} dataAndEvents
                             * @param {Object} v
                             * @return {?}
                             */
                            scribe : function(name, obj, dataAndEvents, v) {
                                return res.add({
                                    namespace : name,
                                    data : obj,
                                    offsite : dataAndEvents,
                                    version : v
                                });
                            },
                            /**
                             * @return {undefined}
                             */
                            pause : function() {
                                res.pause();
                            },
                            /**
                             * @return {undefined}
                             */
                            resume : function() {
                                res.resume();
                            }
                        };
                    }, function(module, dataAndEvents, $sanitize) {
                        $sanitize(18);
                        module.exports = {
                            /**
                             * @param {Object} obj
                             * @param {Object} expr
                             * @return {undefined}
                             */
                            log : function(obj, expr) {
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Array} chars
                         * @return {?}
                         */
                        function getSelection(chars) {
                            return(chars = chars || whitespace).getSelection && chars.getSelection();
                        }
                        var whitespace = require(1);
                        module.exports = {
                            /** @type {function (Array): ?} */
                            getSelection : getSelection,
                            /**
                             * @param {Array} editor
                             * @return {?}
                             */
                            getSelectedText : function(editor) {
                                var r = getSelection(editor);
                                return r ? r.toString() : "";
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var dom = require(4);
                        var _ = require(1);
                        var Response = require(3);
                        /** @type {number} */
                        var operation = 2E4;
                        /**
                         * @param {string} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            var deferred = new Response;
                            var image = dom.createElement("img");
                            return image.onload = image.onerror = function() {
                                _.setTimeout(deferred.resolve, 50);
                            }, image.src = keepActiveItem, _.setTimeout(deferred.reject, operation), deferred.promise;
                        };
                    }, function(module, dataAndEvents, $) {
                        var hidden;
                        var _self = $(10);
                        var doc = $(4);
                        var $window = $(1);
                        var $radio = $(33);
                        var prev = $(51);
                        var emptyJ = $(5);
                        var self = $(21);
                        /** @type {string} */
                        var on = "csptest";
                        module.exports = {
                            /**
                             * @return {?}
                             */
                            inlineStyle : function() {
                                var type = on + self.generate();
                                var el = doc.createElement("div");
                                var styleSheet = doc.createElement("style");
                                /** @type {string} */
                                var sampleText = "." + type + " { visibility: hidden; }";
                                return!!doc.body && (emptyJ.asBoolean($radio.val("widgets:csp")) && (hidden = false), void 0 !== hidden ? hidden : (el.style.display = "none", _self.add(el, type), styleSheet.type = "text/css", styleSheet.appendChild(doc.createTextNode(sampleText)), doc.body.appendChild(styleSheet), doc.body.appendChild(el), hidden = "hidden" === $window.getComputedStyle(el).visibility, prev(el), prev(styleSheet), hidden));
                            }
                        };
                    }, function(module, dataAndEvents) {
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            var opts = keepActiveItem.getBoundingClientRect();
                            return{
                                width : opts.width,
                                height : opts.height
                            };
                        };
                    }, function(module, dataAndEvents, getName) {
                        var name = getName(101);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem) {
                            keepActiveItem.define("createElement", name);
                            keepActiveItem.define("createFragment", name);
                            keepActiveItem.define("htmlToElement", name);
                            keepActiveItem.define("hasSelectedText", name);
                            keepActiveItem.define("addRootClass", name);
                            keepActiveItem.define("removeRootClass", name);
                            keepActiveItem.define("hasRootClass", name);
                            keepActiveItem.define("prependStyleSheet", name);
                            keepActiveItem.define("appendStyleSheet", name);
                            keepActiveItem.define("prependCss", name);
                            keepActiveItem.define("appendCss", name);
                            keepActiveItem.define("makeVisible", name);
                            keepActiveItem.define("injectWidgetEl", name);
                            keepActiveItem.define("matchHeightToContent", name);
                            keepActiveItem.define("matchWidthToContent", name);
                        };
                    }, function(module, dataAndEvents) {
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            var match;
                            /** @type {boolean} */
                            var optional = false;
                            return function() {
                                return optional ? match : (optional = true, match = keepActiveItem.apply(this, arguments));
                            };
                        };
                    }, function(module, dataAndEvents, require) {
                        var Test = require(13);
                        var Block = require(110);
                        var f = require(111);
                        var nodes = require(14);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} callback
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, callback) {
                            return new Test(Block, f, nodes.DM_BUTTON, keepActiveItem, target, callback);
                        };
                    }, function(module, dataAndEvents, require) {
                        var res = require(25);
                        var i = require(112);
                        module.exports = res.build([i]);
                    }, function(module, dataAndEvents, require) {
                        var inspect = require(13);
                        var Block = require(115);
                        var nodes = require(30);
                        var helper = require(14);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} chai
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, chai) {
                            return new inspect(Block, nodes, helper.FOLLOW_BUTTON, keepActiveItem, target, chai);
                        };
                    }, function(module, dataAndEvents, require) {
                        var Server = require(13);
                        var db = require(123);
                        var path = require(29);
                        var config = require(14);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} chai
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, chai) {
                            return new Server(db, path, config.MOMENT, keepActiveItem, target, chai);
                        };
                    }, function(module, dataAndEvents, require) {
                        var inspect = require(13);
                        var Block = require(125);
                        var nodes = require(29);
                        var helper = require(14);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} chai
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, chai) {
                            return new inspect(Block, nodes, helper.PERISCOPE, keepActiveItem, target, chai);
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {string} name
                         * @return {?}
                         */
                        function page(name) {
                            return getActual(not_c, function(Benchmark) {
                                try {
                                    return new Benchmark(name);
                                } catch (t) {
                                }
                            });
                        }
                        var getActual = require(127);
                        var c = require(128);
                        var Block = require(132);
                        var nodes = require(134);
                        var profile = require(136);
                        var obj = {
                            collection : c,
                            likes : Block,
                            list : nodes,
                            profile : profile,
                            /** @type {function (string): ?} */
                            url : page
                        };
                        /** @type {Array} */
                        var not_c = [profile, Block, c, nodes];
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return keepActiveItem ? function(params) {
                                var root;
                                var item;
                                return root = (params.sourceType + "").toLowerCase(), (item = obj[root]) ? new item(params) : null;
                            }(keepActiveItem) || page(keepActiveItem) : null;
                        };
                    }, function(module, dataAndEvents, require) {
                        var dom = require(4);
                        var Block = require(13);
                        var b = require(30);
                        var nodes = require(138);
                        var helper = require(14);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} chai
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, chai) {
                            var child4 = dom.createElement("div");
                            return new Block(nodes, b, helper.TIMELINE, keepActiveItem, target, chai, {
                                sandboxWrapperEl : child4
                            });
                        };
                    }, function(module, dataAndEvents, require) {
                        var dom = require(4);
                        var NodeList = require(13);
                        var Block = require(30);
                        var nodes = require(140);
                        var helper = require(14);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} chai
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, chai) {
                            return new NodeList(nodes, Block, helper.TWEET, keepActiveItem, target, chai, {
                                sandboxWrapperEl : dom.createElement("div")
                            });
                        };
                    }, function(module, dataAndEvents, require) {
                        var Range = require(13);
                        var dom = require(142);
                        var Block = require(30);
                        var colors = require(14);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} chai
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, chai) {
                            var j = keepActiveItem && keepActiveItem.type || "share";
                            var endRow = "hashtag" == j ? colors.HASHTAG_BUTTON : "mention" == j ? colors.MENTION_BUTTON : colors.SHARE_BUTTON;
                            return new Range(dom, Block, endRow, keepActiveItem, target, chai);
                        };
                    }, function(module, dataAndEvents, parse) {
                        var body = parse(52);
                        var url = parse(38);
                        var res = parse(0);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem) {
                            var suiteView = {
                                widget_origin : url.rootDocumentLocation(),
                                widget_frame : url.isFramed() ? url.currentDocumentLocation() : null,
                                duration_ms : keepActiveItem.duration,
                                item_ids : keepActiveItem.widgetIds || []
                            };
                            var rvar = res.aug(keepActiveItem.namespace, {
                                page : "page",
                                component : "performance"
                            });
                            body.scribe(rvar, suiteView);
                        };
                    }, function(module, dataAndEvents, require) {
                        var parser = require(0);
                        var isKind = require(129);
                        /** @type {Array} */
                        var names = ["ar", "fa", "he", "ur"];
                        module.exports = {
                            /**
                             * @param {Text} obj
                             * @return {?}
                             */
                            isRtlLang : function(obj) {
                                return obj = String(obj).toLowerCase(), parser.contains(names, obj);
                            },
                            /**
                             * @param {string} val
                             * @return {?}
                             */
                            matchLanguage : function(val) {
                                return val = (val = (val || "").toLowerCase()).replace("_", "-"), isKind(val) ? val : (val = val.replace(/-.*/, ""), isKind(val) ? val : "en");
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Object} prop
                         * @param {Object} selector
                         * @param {Array} pos
                         * @param {number} value
                         * @param {Object} p
                         * @return {?}
                         */
                        function init(prop, selector, pos, value, p) {
                            /** @type {boolean} */
                            var object = !t.isObject(prop);
                            /** @type {boolean} */
                            var property = !!selector && !t.isObject(selector);
                            if (!object && !property) {
                                return fn && fn(arguments), selector = selector || {}, path.resolve(save(css.formatClientEventNamespace(prop), css.formatClientEventData(selector, pos, value), Block.settingsScribe(), p));
                            }
                        }
                        /**
                         * @param {Object} res
                         * @param {Object} obj
                         * @param {string} path
                         * @param {(Array|string)} options
                         * @return {undefined}
                         */
                        function save(res, obj, path, options) {
                            var results;
                            if (path) {
                                if (t.isObject(res)) {
                                    if (t.isObject(obj)) {
                                        result.log(res, obj);
                                        results = css.flattenClientEventPayload(res, obj);
                                        options = t.aug({}, options, {
                                            l : css.stringify(results)
                                        });
                                        if (results.dnt) {
                                            /** @type {number} */
                                            options.dnt = 1;
                                        }
                                        callback(utils.url(path, options));
                                    }
                                }
                            }
                        }
                        /**
                         * @param {?} chunk
                         * @return {?}
                         */
                        function ondata(chunk) {
                            return arr.push(chunk), arr;
                        }
                        /**
                         * @param {?} href
                         * @return {?}
                         */
                        function callback(href) {
                            return(new Image).src = href;
                        }
                        var result = require(53);
                        var utils = require(16);
                        var css = require(37);
                        var Block = require(27);
                        var t = require(0);
                        var nodes = require(9);
                        var path = require(6);
                        var fn = nodes.get("scribeCallback");
                        /** @type {number} */
                        var iStrlen = 2083;
                        /** @type {Array} */
                        var arr = [];
                        var sel = utils.url(css.CLIENT_EVENT_ENDPOINT, {
                            dnt : 0,
                            l : ""
                        });
                        /** @type {number} */
                        var i = encodeURIComponent(sel).length;
                        module.exports = {
                            /**
                             * @param {string} selector
                             * @return {?}
                             */
                            canFlushOneItem : function(selector) {
                                var sel = css.stringify(selector);
                                /** @type {number} */
                                var iSize = encodeURIComponent(sel).length + 3;
                                return i + iSize < iStrlen;
                            },
                            /** @type {function (?): ?} */
                            _enqueueRawObject : ondata,
                            /** @type {function (Object, Object, string, (Array|string)): undefined} */
                            scribe : save,
                            /** @type {function (Object, Object, Array, number, Object): ?} */
                            clientEvent : init,
                            /**
                             * @param {Object} prop
                             * @param {string} selector
                             * @param {Array} isXML
                             * @param {number} value
                             * @return {?}
                             */
                            enqueueClientEvent : function(prop, selector, isXML, value) {
                                /** @type {boolean} */
                                var object = !t.isObject(prop);
                                /** @type {boolean} */
                                var property = !!selector && !t.isObject(selector);
                                if (!object && !property) {
                                    return ondata(css.flattenClientEventPayload(css.formatClientEventNamespace(prop), css.formatClientEventData(selector, isXML, value)));
                                }
                            },
                            /**
                             * @param {Event} event
                             * @param {string} selector
                             * @param {Array} elem
                             * @param {string} action
                             * @return {?}
                             */
                            interaction : function(event, selector, elem, action) {
                                var props = css.extractTermsFromDOM(event.target || event.srcElement);
                                return props.action = action || "click", init(props, selector, elem);
                            },
                            /** @type {function (?): ?} */
                            placePixel : callback
                        };
                    }, function(module) {
                        module.exports = {
                            tweetButtonHtmlPath : "/widgets/tweet_button.2f70fb173b9000da126c79afe2098f02.{{lang}}.html",
                            //followButtonHtmlPath : "/widgets/follow_button.2f70fb173b9000da126c79afe2098f02.{{lang}}.html",
                            hubHtmlPath : "/widgets/hub.html",
                            widgetIframeHtmlPath : "/widgets/widget_iframe.2f70fb173b9000da126c79afe2098f02.html",
                            resourceBaseUrl : "https://platform.twitter.com"
                        };
                    }, function(module, dataAndEvents, clone) {
                        /**
                         * @param {string} url
                         * @param {Object} options
                         * @return {?}
                         */
                        function expand(url, options) {
                            var querystring;
                            var html;
                            return options = options || replacementHash, /^https?:\/\//.test(url) ? url : /^\/\//.test(url) ? options.protocol + url : (querystring = options.host + (options.port.length ? ":" + options.port : ""), 0 !== url.indexOf("/") && ((html = options.pathname.split("/")).pop(), html.push(url), url = "/" + html.join("/")), [options.protocol, "//", querystring, url].join(""));
                        }
                        var d = clone(4);
                        var replacementHash = clone(8);
                        var regex = clone(2);
                        module.exports = {
                            /** @type {function (string, Object): ?} */
                            absolutize : expand,
                            /**
                             * @return {?}
                             */
                            getCanonicalURL : function() {
                                var elem;
                                var elems = d.getElementsByTagName("link");
                                /** @type {number} */
                                var i = 0;
                                for (;elems[i];i++) {
                                    if ("canonical" == (elem = elems[i]).rel) {
                                        return expand(elem.href);
                                    }
                                }
                            },
                            /**
                             * @return {?}
                             */
                            getScreenNameFromPage : function() {
                                var elems;
                                var elem;
                                var getScreenNameFromPage;
                                /** @type {Array} */
                                var pollQueue = [d.getElementsByTagName("a"), d.getElementsByTagName("link")];
                                /** @type {number} */
                                var screenEvent = 0;
                                /** @type {number} */
                                var i = 0;
                                /** @type {RegExp} */
                                var rinputs = /\bme\b/;
                                for (;elems = pollQueue[screenEvent];screenEvent++) {
                                    /** @type {number} */
                                    i = 0;
                                    for (;elem = elems[i];i++) {
                                        if (rinputs.test(elem.rel) && (getScreenNameFromPage = regex.screenName(elem.href))) {
                                            return getScreenNameFromPage;
                                        }
                                    }
                                }
                            },
                            /**
                             * @param {?} rel
                             * @return {?}
                             */
                            getHostname : function(rel) {
                                var anchor = d.createElement("a");
                                return anchor.setAttribute("href", rel), anchor.hostname;
                            }
                        };
                    }, function(module) {
                        module.exports = {
                            TWEET : 0,
                            RETWEET : 10,
                            CUSTOM_TIMELINE : 17,
                            LIVE_VIDEO_EVENT : 28,
                            QUOTE_TWEET : 23
                        };
                    }, , , , , , , , function(dataAndEvents, deepDataAndEvents, require) {
                        var b;
                        var Cookie = require(3);
                        var form = require(4);
                        var $ = require(84);
                        var self = require(46);
                        var skin = require(9);
                        var helper = require(85);
                        var node = require(22);
                        var p = require(88);
                        var nodes = require(143);
                        var getActual = require(151);
                        var inspect = require(152);
                        var dom = require(26);
                        var provider = require(34);
                        require(153);
                        dom.emitter.trigger(dom.START);
                        skin.set("widgets.init", true);
                        self.set("init", true);
                        inspect();
                        b = new Cookie;
                        $.exposeReadyPromise(b.promise, self.base, "_e");
                        self.set("widgets", nodes);
                        self.set("widgets.load", p.load);
                        self.set("events", node);
                        getActual(function() {
                            provider.load();
                            b.resolve(self.base);
                            helper.attachTo(form);
                            p.loadPage();
                        });
                    }, function(module, dataAndEvents) {
                        /** @type {(Navigator|null)} */
                        module.exports = navigator;
                    }, function(module, dataAndEvents, require) {
                        var factory = require(7);
                        module.exports = {
                            /**
                             * @param {?} root
                             * @param {Object} context
                             * @param {string} k
                             * @return {undefined}
                             */
                            exposeReadyPromise : function(root, context, k) {
                                context.ready = factory(root.then, root);
                                if (k) {
                                    if (Array.isArray(context[k])) {
                                        context[k].forEach(factory(root.then, root));
                                        delete context[k];
                                    }
                                }
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Object} event
                         * @return {undefined}
                         */
                        function handler(event) {
                            var clone;
                            var url;
                            var ok;
                            if (!event.altKey) {
                                if (!event.metaKey) {
                                    if (!event.shiftKey) {
                                        if (clone = dom.closest(function(child) {
                                            return "A" === child.tagName || "AREA" === child.tagName;
                                        }, event.target)) {
                                            if (assert.isIntentURL(clone.href)) {
                                                /** @type {string} */
                                                url = (url = (url = [ok = clone.href, "original_referer=" + a.href].join(-1 == ok.indexOf("?") ? "?" : "&")).replace(/^http[:]/, "https:")).replace(/^\/\//, "https://");
                                                jQuery.open(url, clone);
                                                evt.preventDefault(event);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var a = require(8);
                        var evt = require(35);
                        var dom = require(36);
                        var jQuery = require(86);
                        var assert = require(2);
                        module.exports = {
                            /**
                             * @param {HTMLElement} element
                             * @return {undefined}
                             */
                            attachTo : function(element) {
                                element.addEventListener("click", handler, false);
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        function constructor(keepActiveItem) {
                            /** @type {Array} */
                            this.srcEl = [];
                            /** @type {Object} */
                            this.element = keepActiveItem;
                        }
                        var assert = require(2);
                        var element = require(87);
                        var $ = require(22);
                        var nodes = require(16);
                        var params = {
                            favorite : ["favorite", "like"],
                            follow : ["follow"],
                            like : ["favorite", "like"],
                            retweet : ["retweet"],
                            tweet : ["tweet"]
                        };
                        /**
                         * @param {?} url
                         * @param {Object} element
                         * @param {Object} password
                         * @return {undefined}
                         */
                        constructor.open = function(url, element, password) {
                            var name = (assert.intentType(url) || "").toLowerCase();
                            if (assert.isTwitterURL(url)) {
                                (function(url, p) {
                                    element.open(url, p);
                                })(url, password);
                                if (element) {
                                    $.trigger("click", {
                                        target : element,
                                        region : "intent",
                                        type : "click",
                                        data : {}
                                    });
                                }
                                if (element) {
                                    if (params[name]) {
                                        params[name].forEach(function(type) {
                                            $.trigger(type, {
                                                target : element,
                                                region : "intent",
                                                type : type,
                                                data : function(keepData, node) {
                                                    var user = nodes.decodeURL(node);
                                                    switch(keepData) {
                                                        case "favorite":
                                                            ;
                                                        case "like":
                                                            return{
                                                                tweet_id : user.tweet_id
                                                            };
                                                        case "follow":
                                                            return{
                                                                screen_name : user.screen_name,
                                                                user_id : user.user_id
                                                            };
                                                        case "retweet":
                                                            return{
                                                                source_tweet_id : user.tweet_id
                                                            };
                                                        default:
                                                            return{};
                                                    }
                                                }(name, url)
                                            });
                                        });
                                    }
                                }
                            }
                        };
                        /** @type {function (Object): undefined} */
                        module.exports = constructor;
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        function Collection(keepActiveItem) {
                            /** @type {Object} */
                            this.win = keepActiveItem;
                        }
                        var db = require(1);
                        var types = require(35);
                        var dom = require(36);
                        var config = require(20);
                        var nodes = require(2);
                        var UUID = require(21);
                        /** @type {string} */
                        var type = "intent_";
                        /**
                         * @param {?} url
                         * @param {Object} e
                         * @return {?}
                         */
                        Collection.prototype.open = function(url, e) {
                            var flag = e && ("click" == e.type && dom.closest("a", e.target));
                            var reverse = e && (e.altKey || (e.metaKey || e.shiftKey));
                            var strip = flag && (config.ios() || config.android());
                            if (nodes.isTwitterURL(url)) {
                                return reverse || strip ? this : (this.name = type + UUID.generate(), this.popup = this.win.open(url, this.name), e && types.preventDefault(e), this);
                            }
                        };
                        /**
                         * @param {?} url
                         * @param {Object} e
                         * @return {?}
                         */
                        Collection.open = function(url, e) {
                            return(new Collection(db)).open(url, e);
                        };
                        /** @type {function (Object): undefined} */
                        module.exports = Collection;
                    }, function(ctx, dataAndEvents, $) {
                        /**
                         * @return {?}
                         */
                        function fn() {
                            var selector = $radio.val("widgets:autoload") || true;
                            return!css.isFalseValue(selector) && (css.isTruthValue(selector) ? node.body : node.querySelectorAll(selector));
                        }
                        /**
                         * @param {?} parent
                         * @param {?} key
                         * @return {?}
                         */
                        function run(parent, key) {
                            var REQ;
                            var obj;
                            return parent = (parent = parent || node.body).length ? collection.toRealArray(parent) : [parent], source.pause(), obj = function(results, key) {
                                return results.reduce(function(l, pos) {
                                    return l.concat(tests.reduce(function(result, func) {
                                        return result.concat(func(pos, key));
                                    }, []));
                                }, []);
                            }(parent, key), self.emitter.trigger(self.ALL_WIDGETS_RENDER_START, {
                                widgets : obj
                            }), REQ = form.allResolved(obj.map(function(pos) {
                                return editor.addWidget(pos);
                            })).then(function(renderedWidgets) {
                                $this.trigger("loaded", {
                                    widgets : renderedWidgets
                                });
                                if (renderedWidgets) {
                                    if (renderedWidgets.length) {
                                        self.emitter.trigger(self.ALL_WIDGETS_RENDER_END, {
                                            widgets : renderedWidgets
                                        });
                                    }
                                }
                            }), form.always(REQ, function() {
                                source.resume();
                            }), REQ;
                        }
                        /**
                         * @param {?} results
                         * @return {?}
                         */
                        function load(results) {
                            return emptyJ.getExperiments().then(function(done) {
                                return run(results, done);
                            });
                        }
                        var node = $(4);
                        var p2 = $(6);
                        var form = $(23);
                        var editor = $(50);
                        var $radio = $(33);
                        var cli = $(9);
                        var source = $(52);
                        var $this = $(22);
                        var css = $(5);
                        var collection = $(0);
                        var emptyJ = $(34);
                        var tests = $(106);
                        var self = $(26);
                        ctx.exports = {
                            /** @type {function (?): ?} */
                            load : load,
                            /**
                             * @return {?}
                             */
                            loadPage : function() {
                                var matched = fn();
                                return false === matched ? p2.resolve() : (cli.set("widgets.loaded", true), load(matched));
                            },
                            /** @type {function (): ?} */
                            _getPageLoadTarget : fn
                        };
                    }, function(context, dataAndEvents, require) {
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} child
                         * @return {undefined}
                         */
                        function self(keepActiveItem, child) {
                            /** @type {null} */
                            this._widget = null;
                            /** @type {null} */
                            this._sandbox = null;
                            /** @type {boolean} */
                            this._hydrated = false;
                            /** @type {boolean} */
                            this._insertedIntoDom = false;
                            this._Sandbox = keepActiveItem.Sandbox;
                            this._factory = keepActiveItem.factory;
                            this._widgetParams = keepActiveItem.parameters;
                            this._resolve = child;
                            this._className = keepActiveItem.className;
                            /** @type {string} */
                            this._renderedClassName = keepActiveItem.className + "-rendered";
                            /** @type {string} */
                            this._errorClassName = keepActiveItem.className + "-error";
                            this._srcEl = keepActiveItem.srcEl;
                            this._targetGlobal = function(d) {
                                return(d.srcEl || d.targetEl).ownerDocument.defaultView;
                            }(keepActiveItem);
                            this._sandboxWrapperEl = keepActiveItem.options ? keepActiveItem.options.sandboxWrapperEl : null;
                            /**
                             * @param {string} elem
                             * @return {undefined}
                             */
                            this._insertionStrategy = function(elem) {
                                var node;
                                var next = keepActiveItem.srcEl;
                                var parent = keepActiveItem.targetEl;
                                var className = keepActiveItem.className;
                                /** @type {string} */
                                var type = keepActiveItem.className + "-rendered";
                                var fragment = keepActiveItem.options ? keepActiveItem.options.sandboxWrapperEl : null;
                                if (fragment) {
                                    fragment.appendChild(elem);
                                    fragment.classList.add(className, type);
                                    node = fragment;
                                } else {
                                    /** @type {string} */
                                    node = elem;
                                }
                                if (next) {
                                    parent.insertBefore(node, next);
                                } else {
                                    parent.appendChild(node);
                                }
                            };
                        }
                        var dom = require(10);
                        var parse = require(17);
                        var node = require(22);
                        var callback = require(51);
                        var d = require(6);
                        var promise = require(23);
                        /**
                         * @param {Array} settings
                         * @return {?}
                         */
                        self.fromRawTask = function(settings) {
                            return new self(settings.input, settings.taskDoneDeferred.resolve);
                        };
                        /**
                         * @return {?}
                         */
                        self.prototype.initialize = function() {
                            var that = this;
                            var transaction = new this._Sandbox(this._targetGlobal);
                            return this._factory(this._widgetParams, transaction).then(function(e) {
                                return that._widget = e, that._sandbox = transaction, e._sandboxWrapperEl = that._sandboxWrapperEl, e;
                            });
                        };
                        /**
                         * @return {?}
                         */
                        self.prototype.insertIntoDom = function() {
                            var _insertedIntoDom = this;
                            /** @type {string} */
                            var cls = this._sandboxWrapperEl ? "" : [this._className, this._renderedClassName].join(" ");
                            return this._widget ? this._sandbox.insert(this._widget.id, {
                                class : cls
                            }, null, this._insertionStrategy).then(function() {
                                /** @type {boolean} */
                                _insertedIntoDom._insertedIntoDom = true;
                            }) : d.reject(new Error("cannot insert widget into DOM before it is initialized"));
                        };
                        /**
                         * @return {?}
                         */
                        self.prototype.hydrate = function() {
                            var _hydrated = this;
                            return this._widget ? this._widget.hydrate().then(function() {
                                /** @type {boolean} */
                                _hydrated._hydrated = true;
                            }) : d.reject(new Error("cannot hydrate widget before it is initialized"));
                        };
                        /**
                         * @return {?}
                         */
                        self.prototype.render = function() {
                            /**
                             * @param {Object} item
                             * @return {?}
                             */
                            function error(item) {
                                var responses = that._sandboxWrapperEl ? that._sandboxWrapperEl : that._sandbox.sandboxEl;
                                return callback(responses).then(function() {
                                    return d.reject(item);
                                });
                            }
                            var that = this;
                            return this._hydrated ? this._insertedIntoDom ? that._widget.render(that._sandbox).then(function() {
                                return that._sandbox.onResize(function() {
                                    return that._widget.resize().then(function() {
                                        var bench = that._sandboxWrapperEl ? that._sandboxWrapperEl : that._sandbox.sandboxEl;
                                        node.trigger("resize", {
                                            target : bench
                                        });
                                    });
                                }), that._widget.show();
                            }).then(function() {
                                return callback(that._srcEl).then(function() {
                                    return that._sandbox.sandboxEl;
                                });
                            }, error) : error(new Error("cannot render widget before DOM insertion")) : error(new Error("cannot render widget before hydration"));
                        };
                        /**
                         * @return {?}
                         */
                        self.prototype.fail = function() {
                            var self = this;
                            var type = self._errorClassName;
                            var className = self._sandboxWrapperEl ? self._sandboxWrapperEl : self._srcEl;
                            return this._srcEl ? promise.always(parse.write(function() {
                                dom.add(className, type);
                            }), function() {
                                node.trigger("rendered", {
                                    target : className
                                });
                                self._resolve(className);
                            }) : (self._resolve(), d.resolve());
                        };
                        /**
                         * @return {undefined}
                         */
                        self.prototype.success = function() {
                            var fakeTarget = this._sandboxWrapperEl ? this._sandboxWrapperEl : this._sandbox.sandboxEl;
                            node.trigger("rendered", {
                                target : fakeTarget
                            });
                            this._resolve(fakeTarget);
                        };
                        /** @type {function (Object, ?): undefined} */
                        context.exports = self;
                    }, function(module, view, mapper) {
                        var result;
                        !function() {
                            /**
                             * @return {undefined}
                             */
                            function FastDom() {
                                /** @type {Array} */
                                this.frames = [];
                                /** @type {number} */
                                this.lastId = 0;
                                /** @type {function (this:Window, function (number): ?, (Element|null)=): number} */
                                this.raf = raf;
                                this.batch = {
                                    hash : {},
                                    read : [],
                                    write : [],
                                    mode : null
                                };
                            }
                            /** @type {function (this:Window, function (number): ?, (Element|null)=): number} */
                            var raf = window.requestAnimationFrame || (window.webkitRequestAnimationFrame || (window.mozRequestAnimationFrame || (window.msRequestAnimationFrame || function(callback) {
                                return window.setTimeout(callback, 1E3 / 60);
                            })));
                            /**
                             * @param {Function} position
                             * @param {?} name
                             * @return {?}
                             */
                            FastDom.prototype.read = function(position, name) {
                                var p = this.add("read", position, name);
                                var nodeId = p.id;
                                return this.batch.read.push(p.id), "reading" === this.batch.mode || this.batch.scheduled ? nodeId : (this.scheduleBatch(), nodeId);
                            };
                            /**
                             * @param {Function} position
                             * @param {?} event
                             * @return {?}
                             */
                            FastDom.prototype.write = function(position, event) {
                                var p = this.add("write", position, event);
                                var mode = this.batch.mode;
                                var nodeId = p.id;
                                return this.batch.write.push(p.id), "writing" === mode || ("reading" === mode || this.batch.scheduled) ? nodeId : (this.scheduleBatch(), nodeId);
                            };
                            /**
                             * @param {Object} name
                             * @param {Object} fn
                             * @param {Object} ctx
                             * @return {?}
                             */
                            FastDom.prototype.defer = function(name, fn, ctx) {
                                if ("function" == typeof name) {
                                    /** @type {Object} */
                                    ctx = fn;
                                    /** @type {Object} */
                                    fn = name;
                                    /** @type {number} */
                                    name = 1;
                                }
                                var self = this;
                                /** @type {number} */
                                var index = name - 1;
                                return this.schedule(index, function() {
                                    self.run({
                                        fn : fn,
                                        ctx : ctx
                                    });
                                });
                            };
                            /**
                             * @param {(number|string)} id
                             * @return {?}
                             */
                            FastDom.prototype.clear = function(id) {
                                if ("function" == typeof id) {
                                    return this.clearFrame(id);
                                }
                                /** @type {number} */
                                id = Number(id);
                                var job = this.batch.hash[id];
                                if (job) {
                                    var ids = this.batch[job.type];
                                    var index = ids.indexOf(id);
                                    delete this.batch.hash[id];
                                    if (~index) {
                                        ids.splice(index, 1);
                                    }
                                }
                            };
                            /**
                             * @param {string} frame
                             * @return {undefined}
                             */
                            FastDom.prototype.clearFrame = function(frame) {
                                var index = this.frames.indexOf(frame);
                                if (~index) {
                                    this.frames.splice(index, 1);
                                }
                            };
                            /**
                             * @return {undefined}
                             */
                            FastDom.prototype.scheduleBatch = function() {
                                var self = this;
                                this.schedule(0, function() {
                                    /** @type {boolean} */
                                    self.batch.scheduled = false;
                                    self.runBatch();
                                });
                                /** @type {boolean} */
                                this.batch.scheduled = true;
                            };
                            /**
                             * @return {?}
                             */
                            FastDom.prototype.uniqueId = function() {
                                return++this.lastId;
                            };
                            /**
                             * @param {Array} list
                             * @return {undefined}
                             */
                            FastDom.prototype.flush = function(list) {
                                var id;
                                for (;id = list.shift();) {
                                    this.run(this.batch.hash[id]);
                                }
                            };
                            /**
                             * @return {undefined}
                             */
                            FastDom.prototype.runBatch = function() {
                                try {
                                    /** @type {string} */
                                    this.batch.mode = "reading";
                                    this.flush(this.batch.read);
                                    /** @type {string} */
                                    this.batch.mode = "writing";
                                    this.flush(this.batch.write);
                                    /** @type {null} */
                                    this.batch.mode = null;
                                } catch (t) {
                                    throw this.runBatch(), t;
                                }
                            };
                            /**
                             * @param {string} item
                             * @param {Function} string
                             * @param {Object} context
                             * @return {?}
                             */
                            FastDom.prototype.add = function(item, string, context) {
                                var id = this.uniqueId();
                                return this.batch.hash[id] = {
                                    id : id,
                                    /** @type {Function} */
                                    fn : string,
                                    ctx : context,
                                    type : item
                                };
                            };
                            /**
                             * @param {Object} job
                             * @return {?}
                             */
                            FastDom.prototype.run = function(job) {
                                var that = job.ctx || this;
                                var fn = job.fn;
                                if (delete this.batch.hash[job.id], !this.onError) {
                                    return fn.call(that);
                                }
                                try {
                                    fn.call(that);
                                } catch (e) {
                                    this.onError(e);
                                }
                            };
                            /**
                             * @return {undefined}
                             */
                            FastDom.prototype.loop = function() {
                                /**
                                 * @return {undefined}
                                 */
                                function frame() {
                                    var requestFrame = env.frames.shift();
                                    if (env.frames.length) {
                                        raf(frame);
                                    } else {
                                        /** @type {boolean} */
                                        env.looping = false;
                                    }
                                    if (requestFrame) {
                                        requestFrame();
                                    }
                                }
                                var tref;
                                var env = this;
                                var raf = this.raf;
                                /** @type {boolean} */
                                var r = false;
                                if (!this.looping) {
                                    /** @type {number} */
                                    tref = setTimeout(function() {
                                        /** @type {boolean} */
                                        r = true;
                                        frame();
                                    }, 500);
                                    raf(function() {
                                        if (!r) {
                                            clearTimeout(tref);
                                            frame();
                                        }
                                    });
                                    /** @type {boolean} */
                                    this.looping = true;
                                }
                            };
                            /**
                             * @param {number} index
                             * @param {Function} fn
                             * @return {?}
                             */
                            FastDom.prototype.schedule = function(index, fn) {
                                return this.frames[index] ? this.schedule(index + 1, fn) : (this.loop(), this.frames[index] = fn);
                            };
                            var fastdom = new FastDom;
                            if (void 0 !== module && module.exports) {
                                module.exports = fastdom;
                            } else {
                                if (!(void 0 === (result = function() {
                                    return fastdom;
                                }.call(view, mapper, view, module)))) {
                                    module.exports = result;
                                }
                            }
                        }();
                    }, function(module, dataAndEvents, proceed) {
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        function state(keepActiveItem) {
                            /** @type {Array} */
                            this._inputsQueue = [];
                            /** @type {Object} */
                            this._task = keepActiveItem;
                            /** @type {boolean} */
                            this._hasFlushBeenScheduled = false;
                        }
                        var Comp = proceed(3);
                        var value = proceed(92);
                        var getFakes = proceed(7);
                        /**
                         * @param {string} item
                         * @return {?}
                         */
                        state.prototype.add = function(item) {
                            var c = new Comp;
                            return this._inputsQueue.push({
                                input : item,
                                taskDoneDeferred : c
                            }), this._hasFlushBeenScheduled || (this._hasFlushBeenScheduled = true, value(getFakes(this._flush, this))), c.promise;
                        };
                        /**
                         * @return {undefined}
                         */
                        state.prototype._flush = function() {
                            try {
                                this._task.call(null, this._inputsQueue);
                            } catch (item) {
                                this._inputsQueue.forEach(function(Stream) {
                                    Stream.taskDoneDeferred.reject(item);
                                });
                            }
                            /** @type {Array} */
                            this._inputsQueue = [];
                            /** @type {boolean} */
                            this._hasFlushBeenScheduled = false;
                        };
                        /** @type {function (Object): undefined} */
                        module.exports = state;
                    }, function(module, dataAndEvents, require) {
                        var mod = require(45).Promise;
                        module.exports = mod._asap;
                    }, function(Class, dataAndEvents, jQuery) {
                        /**
                         * @return {?}
                         */
                        function createFrame() {
                            var form = d.createElement("form");
                            var field = d.createElement("input");
                            var input = d.createElement("input");
                            return id++, form.action = options.CLIENT_EVENT_ENDPOINT, form.method = "POST", form.target = type + id, form.id = id_prefix + id, field.type = "hidden", field.name = "dnt", field.value = obj.enabled(), input.type = "hidden", input.name = "tfw_redirect", input.value = options.RUFOUS_REDIRECT, form.appendChild(field), form.appendChild(input), form;
                        }
                        /**
                         * @return {?}
                         */
                        function fn() {
                            var key = type + id;
                            return createElement({
                                id : key,
                                name : key,
                                width : 0,
                                height : 0,
                                border : 0
                            }, {
                                display : "none"
                            }, d.doc);
                        }
                        var fragment;
                        var result;
                        var d;
                        var win = jQuery(4);
                        var opts = jQuery(1);
                        var createElement = jQuery(28);
                        var obj = jQuery(19);
                        var targets = jQuery(3);
                        var connection = jQuery(6);
                        var that = jQuery(53);
                        var options = jQuery(37);
                        var current = jQuery(0);
                        var Dialog = jQuery(29);
                        var isKind = jQuery(9).get("scribeCallback");
                        /** @type {string} */
                        var base = Math.floor(1E3 * Math.random()) + "_";
                        /** @type {string} */
                        var type = "rufous-frame-" + base + "-";
                        /** @type {string} */
                        var id_prefix = "rufous-form-" + base + "-";
                        /** @type {number} */
                        var id = 0;
                        /** @type {boolean} */
                        var defer = false;
                        var resolver = new targets;
                        Class.exports = {
                            /**
                             * @param {Object} arg
                             * @param {string} target
                             * @param {Array} error
                             * @param {number} value
                             * @return {undefined}
                             */
                            clientEvent : function(arg, target, error, value) {
                                if (!function(obj, a) {
                                    /** @type {boolean} */
                                    var n = !current.isObject(obj);
                                    /** @type {boolean} */
                                    var max = !!a && !current.isObject(a);
                                    /** @type {boolean} */
                                    var len = n || max;
                                    return len;
                                }(arg, target)) {
                                    if (isKind) {
                                        isKind(arguments);
                                    }
                                    resolver.promise.then(function() {
                                        !function(context, obj) {
                                            var first;
                                            var node;
                                            var v;
                                            if (current.isObject(context)) {
                                                if (current.isObject(obj)) {
                                                    that.log(context, obj);
                                                    v = options.flattenClientEventPayload(context, obj);
                                                    /** @type {number} */
                                                    (first = fragment.firstChild).value = +(+first.value || (v.dnt || 0));
                                                    /** @type {string} */
                                                    (node = d.createElement("input")).type = "hidden";
                                                    /** @type {string} */
                                                    node.name = "l";
                                                    node.value = options.stringify(v);
                                                    fragment.appendChild(node);
                                                }
                                            }
                                        }(options.formatClientEventNamespace(arg), options.formatClientEventData(target, error, value));
                                    });
                                }
                            },
                            /**
                             * @return {?}
                             */
                            flush : function() {
                                return resolver.promise.then(function() {
                                    var t;
                                    return fragment.children.length <= 2 ? connection.reject() : (t = connection.all([d.doc.body.appendChild(fragment), d.doc.body.appendChild(result)]).then(function(next) {
                                        var fn = next[0];
                                        var clone = next[1];
                                        return clone.addEventListener("load", function() {
                                            !function(elem, dest) {
                                                return function() {
                                                    var parent = elem.parentNode;
                                                    if (parent) {
                                                        parent.removeChild(elem);
                                                        parent.removeChild(dest);
                                                    }
                                                };
                                            }(fn, clone)();
                                        }), fn.submit(), next;
                                    }), fragment = createFrame(), result = fn(), t);
                                });
                            },
                            /**
                             * @return {?}
                             */
                            init : function() {
                                return defer ? resolver.promise : ((d = new Dialog(opts)).insert("rufous-sandbox", null, {
                                    display : "none"
                                }, function(stat) {
                                    win.body.appendChild(stat);
                                }).then(function() {
                                    d.setTitle("Twitter analytics iframe");
                                    fragment = createFrame();
                                    result = fn();
                                    resolver.resolve([fragment, result]);
                                }), defer = true, resolver.promise);
                            }
                        };
                    }, function(module, dataAndEvents, topic) {
                        /**
                         * @param {string} name
                         * @return {?}
                         */
                        function ondata(name) {
                            return name in params ? params[name] : params[name] = exclude.test(name);
                        }
                        var out = topic(8);
                        /** @type {RegExp} */
                        var exclude = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i;
                        var params = {};
                        module.exports = {
                            /** @type {function (string): ?} */
                            isUrlSensitive : ondata,
                            /**
                             * @return {?}
                             */
                            isHostPageSensitive : function() {
                                return ondata(out.host);
                            }
                        };
                    }, function(module, dataAndEvents, $sanitize) {
                        var ExtArray = $sanitize(0);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function fn(keepActiveItem) {
                            /** @type {Array} */
                            var ret = [];
                            return keepActiveItem.forEach(function(item) {
                                var elems = ExtArray.isType("array", item) ? fn(item) : [item];
                                ret = ret.concat(elems);
                            }), ret;
                        };
                    }, function(module, dataAndEvents) {
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return keepActiveItem.filter(function(name, objectType) {
                                return keepActiveItem.indexOf(name) === objectType;
                            });
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @return {undefined}
                         */
                        function Collection() {
                            Widget.apply(this, arguments);
                        }
                        var Widget = require(40);
                        var _ = require(0);
                        var factory = require(99);
                        /** @type {Object} */
                        Collection.prototype = Object.create(Widget.prototype);
                        _.aug(Collection.prototype, {
                            factory : factory
                        });
                        /** @type {function (): undefined} */
                        module.exports = Collection;
                    }, function(opts, dataAndEvents, defer) {
                        var deferred = defer(23);
                        var result = defer(0);
                        var getId = defer(7);
                        opts.exports = {
                            /**
                             * @param {Function} callback
                             * @param {Function} matcherFunction
                             * @return {?}
                             */
                            before : function(callback, matcherFunction) {
                                return function() {
                                    var ret;
                                    var that = this;
                                    /** @type {Arguments} */
                                    var args = arguments;
                                    return ret = matcherFunction.apply(this, arguments), deferred.isPromise(ret) ? ret.then(function() {
                                        return callback.apply(that, args);
                                    }) : callback.apply(this, arguments);
                                };
                            },
                            /**
                             * @param {Function} matcherFunction
                             * @param {Function} func
                             * @return {?}
                             */
                            after : function(matcherFunction, func) {
                                return function() {
                                    /**
                                     * @param {?} second
                                     * @param {?} promise
                                     * @return {?}
                                     */
                                    function merge(second, promise) {
                                        return deferred.isPromise(promise) ? promise.then(function() {
                                            return second;
                                        }) : second;
                                    }
                                    var ret;
                                    var thisBinding = this;
                                    /** @type {Arguments} */
                                    var args = arguments;
                                    return ret = matcherFunction.apply(this, arguments), deferred.isPromise(ret) ? ret.then(function(ret) {
                                        return merge(ret, func.apply(thisBinding, args));
                                    }) : merge(ret, func.apply(this, arguments));
                                };
                            },
                            /**
                             * @param {string} type
                             * @param {Function} callback
                             * @return {?}
                             */
                            around : function(type, callback) {
                                return function() {
                                    var args = result.toRealArray(arguments);
                                    return args.unshift(getId(type, this)), callback.apply(this, args);
                                };
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var d = require(10);
                        var parse = require(17);
                        var getActual = require(41);
                        var RSVP = require(6);
                        var $ = require(0);
                        /**
                         * @return {?}
                         */
                        module.exports = function() {
                            /**
                             * @param {string} props
                             * @return {undefined}
                             */
                            function mixin(props) {
                                superclass.apply(this, arguments);
                                Object.defineProperty(this, "targetGlobal", {
                                    value : props
                                });
                            }
                            var superclass = getActual();
                            return mixin.prototype = Object.create(superclass.prototype), $.aug(mixin.prototype, {
                                id : null,
                                initialized : false,
                                width : 0,
                                height : 0,
                                sandboxEl : null,
                                /**
                                 * @return {?}
                                 */
                                insert : function() {
                                    return RSVP.reject();
                                },
                                /**
                                 * @return {undefined}
                                 */
                                onResize : function() {
                                },
                                /**
                                 * @param {HTMLElement} uris
                                 * @return {?}
                                 */
                                addClass : function(uris) {
                                    var pattern = this.sandboxEl;
                                    return uris = Array.isArray(uris) ? uris : [uris], parse.write(function() {
                                        uris.forEach(function(source) {
                                            d.add(pattern, source);
                                        });
                                    });
                                },
                                /**
                                 * @param {HTMLElement} uris
                                 * @return {?}
                                 */
                                removeClass : function(uris) {
                                    var className = this.sandboxEl;
                                    return uris = Array.isArray(uris) ? uris : [uris], parse.write(function() {
                                        uris.forEach(function(name) {
                                            d.remove(className, name);
                                        });
                                    });
                                },
                                /**
                                 * @param {?} prop
                                 * @return {?}
                                 */
                                styleSelf : function(prop) {
                                    var gui = this;
                                    return parse.write(function() {
                                        $.forIn(prop, function(name, region) {
                                            /** @type {string} */
                                            gui.sandboxEl.style[name] = region;
                                        });
                                    });
                                }
                            }), mixin;
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {string} r
                         * @param {Array} name
                         * @param {Array} data
                         * @param {?} callback
                         * @return {?}
                         */
                        function test(r, name, data, callback) {
                            return name = jQuery.aug({
                                id : r
                            }, restoreScript, name), data = jQuery.aug({}, props, data), func(name, data, callback);
                        }
                        /**
                         * @param {string} data
                         * @param {Array} id
                         * @param {Array} stream
                         * @param {Node} input
                         * @param {?} key
                         * @return {?}
                         */
                        function load(data, id, stream, input, key) {
                            var self = new Promise;
                            var m1 = UUID.generate();
                            var item = test(data, id, stream, key);
                            return child.set(["sandbox", m1], function() {
                                var iDoc = item.contentWindow.document;
                                parser.write(function() {
                                    iDoc.write("<!DOCTYPE html><html><head></head><body></body></html>");
                                }).then(function() {
                                    iDoc.close();
                                    self.resolve(item);
                                });
                            }), item.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", 'catch (e) { document.domain="' + url.domain + '"; }', "window.parent." + child.fullPath(["sandbox", m1]) + "();"].join(""), item.addEventListener("error", self.reject, false), parser.write(function() {
                                input.parentNode.replaceChild(item, input);
                            }), self.promise;
                        }
                        var url = require(4);
                        var cache = require(10);
                        var parser = require(17);
                        var select = require(54);
                        var assert = require(25);
                        var request = require(55);
                        var Block = require(56);
                        var extend = require(43);
                        var func = require(28);
                        var nodes = require(18);
                        var $ = require(57);
                        var Promise = require(3);
                        var ret = require(6);
                        var jQuery = require(0);
                        var child = require(9);
                        var UUID = require(21);
                        var fn = require(7);
                        var restoreScript = {
                            allowfullscreen : "true"
                        };
                        var props = {
                            position : "absolute",
                            visibility : "hidden",
                            display : "block",
                            width : "0px",
                            height : "0px",
                            padding : "0",
                            border : "none"
                        };
                        var desc = {
                            position : "static",
                            visibility : "visible"
                        };
                        /** @type {string} */
                        var onComplete = "SandboxRoot";
                        /** @type {string} */
                        var which = ".SandboxRoot { display: none; }";
                        /** @type {number} */
                        var oldconfig = 50;
                        module.exports = assert.couple(require(58), function(self) {
                            self.overrideProperty("id", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.sandboxEl && this.sandboxEl.id;
                                }
                            });
                            self.overrideProperty("initialized", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return!!this.win;
                                }
                            });
                            self.overrideProperty("width", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._width;
                                }
                            });
                            self.overrideProperty("height", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._height;
                                }
                            });
                            self.overrideProperty("sandboxEl", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.iframeEl;
                                }
                            });
                            self.defineProperty("iframeEl", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._iframe;
                                }
                            });
                            self.defineProperty("rootEl", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.doc && this.doc.documentElement;
                                }
                            });
                            self.defineProperty("widgetEl", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.doc && this.doc.body.firstElementChild;
                                }
                            });
                            self.defineProperty("win", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.iframeEl && this.iframeEl.contentWindow;
                                }
                            });
                            self.defineProperty("doc", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.win && this.win.document;
                                }
                            });
                            self.define("_updateCachedDimensions", function() {
                                var self = this;
                                return parser.read(function() {
                                    var bw;
                                    var box = $(self.sandboxEl);
                                    if ("visible" == self.sandboxEl.style.visibility) {
                                        self._width = box.width;
                                    } else {
                                        bw = $(self.sandboxEl.parentElement).width;
                                        /** @type {number} */
                                        self._width = Math.min(box.width, bw);
                                    }
                                    self._height = box.height;
                                });
                            });
                            self.define("_setTargetToBlank", function() {
                                var baseTag = this.createElement("base");
                                /** @type {string} */
                                baseTag.target = "_blank";
                                this.doc.head.appendChild(baseTag);
                            });
                            self.define("_didResize", function() {
                                var failuresLink = this;
                                var asserterNames = this._resizeHandlers.slice(0);
                                return this._updateCachedDimensions().then(function() {
                                    asserterNames.forEach(function(on) {
                                        on(failuresLink);
                                    });
                                });
                            });
                            self.define("setTitle", function(syn) {
                                /** @type {string} */
                                this.iframeEl.title = syn;
                            });
                            self.override("createElement", function(type) {
                                return this.doc.createElement(type);
                            });
                            self.override("createFragment", function() {
                                return this.doc.createDocumentFragment();
                            });
                            self.override("htmlToElement", function(xhtml) {
                                var el;
                                return(el = this.createElement("div")).innerHTML = xhtml, el.firstElementChild;
                            });
                            self.override("hasSelectedText", function() {
                                return!!select.getSelectedText(this.win);
                            });
                            self.override("addRootClass", function(uris) {
                                var pattern = this.rootEl;
                                return uris = Array.isArray(uris) ? uris : [uris], this.initialized ? parser.write(function() {
                                    uris.forEach(function(source) {
                                        cache.add(pattern, source);
                                    });
                                }) : ret.reject(new Error("sandbox not initialized"));
                            });
                            self.override("removeRootClass", function(uris) {
                                var token = this.rootEl;
                                return uris = Array.isArray(uris) ? uris : [uris], this.initialized ? parser.write(function() {
                                    uris.forEach(function(result) {
                                        cache.remove(token, result);
                                    });
                                }) : ret.reject(new Error("sandbox not initialized"));
                            });
                            self.override("hasRootClass", function(styles) {
                                return cache.present(this.rootEl, styles);
                            });
                            self.define("addStyleSheet", function(url, buf) {
                                var node;
                                var defer = new Promise;
                                return this.initialized ? ((node = this.createElement("link")).type = "text/css", node.rel = "stylesheet", node.href = url, node.addEventListener("load", defer.resolve, false), node.addEventListener("error", defer.reject, false), parser.write(fn(buf, null, node)).then(function() {
                                    return request(url).then(defer.resolve, defer.reject), defer.promise;
                                })) : ret.reject(new Error("sandbox not initialized"));
                            });
                            self.override("prependStyleSheet", function(deepDataAndEvents) {
                                var doc = this.doc;
                                return this.addStyleSheet(deepDataAndEvents, function(th) {
                                    var el = doc.head.firstElementChild;
                                    return el ? doc.head.insertBefore(th, el) : doc.head.appendChild(th);
                                });
                            });
                            self.override("appendStyleSheet", function(deepDataAndEvents) {
                                var doc = this.doc;
                                return this.addStyleSheet(deepDataAndEvents, function(stat) {
                                    return doc.head.appendChild(stat);
                                });
                            });
                            self.define("addCss", function(text, buf) {
                                var el;
                                return Block.inlineStyle() ? ((el = this.createElement("style")).type = "text/css", el.appendChild(this.doc.createTextNode(text)), parser.write(fn(buf, null, el))) : (nodes.devError("CSP enabled; cannot embed inline styles"), ret.resolve());
                            });
                            self.override("prependCss", function(deepDataAndEvents) {
                                var doc = this.doc;
                                return this.addCss(deepDataAndEvents, function(th) {
                                    var el = doc.head.firstElementChild;
                                    return el ? doc.head.insertBefore(th, el) : doc.head.appendChild(th);
                                });
                            });
                            self.override("appendCss", function(deepDataAndEvents) {
                                var doc = this.doc;
                                return this.addCss(deepDataAndEvents, function(stat) {
                                    return doc.head.appendChild(stat);
                                });
                            });
                            self.override("makeVisible", function() {
                                var _updateCachedDimensions = this;
                                return this.styleSelf(desc).then(function() {
                                    _updateCachedDimensions._updateCachedDimensions();
                                });
                            });
                            self.override("injectWidgetEl", function(stat) {
                                var win = this;
                                return this.initialized ? this.widgetEl ? ret.reject(new Error("widget already injected")) : parser.write(function() {
                                    win.doc.body.appendChild(stat);
                                }) : ret.reject(new Error("sandbox not initialized"));
                            });
                            self.override("matchHeightToContent", function() {
                                var iHeight;
                                var self = this;
                                return parser.read(function() {
                                    iHeight = self.widgetEl ? $(self.widgetEl).height : 0;
                                }), parser.write(function() {
                                    self.sandboxEl.style.height = iHeight + "px";
                                }).then(function() {
                                    return self._updateCachedDimensions();
                                });
                            });
                            self.override("matchWidthToContent", function() {
                                var w;
                                var data = this;
                                return parser.read(function() {
                                    w = data.widgetEl ? $(data.widgetEl).width : 0;
                                }), parser.write(function() {
                                    data.sandboxEl.style.width = w + "px";
                                }).then(function() {
                                    return data._updateCachedDimensions();
                                });
                            });
                            self.after("initialize", function() {
                                /** @type {null} */
                                this._iframe = null;
                                /** @type {number} */
                                this._width = this._height = 0;
                                /** @type {Array} */
                                this._resizeHandlers = [];
                            });
                            self.override("insert", function(context, name, data, buf) {
                                var self = this;
                                var result = new Promise;
                                var restoreScript = this.targetGlobal.document;
                                var res = test(context, name, data, restoreScript);
                                return parser.write(fn(buf, null, res)), res.addEventListener("load", function() {
                                    (function(item) {
                                        try {
                                            item.contentWindow.document;
                                        } catch (newItem) {
                                            return ret.reject(newItem);
                                        }
                                        return ret.resolve(item);
                                    })(res).then(null, fn(load, null, context, name, data, res, restoreScript)).then(result.resolve, result.reject);
                                }, false), res.addEventListener("error", result.reject, false), result.promise.then(function(d) {
                                    var collapse = extend(self._didResize, oldconfig, self);
                                    return self._iframe = d, self.win.addEventListener("resize", collapse, false), ret.all([self._setTargetToBlank(), self.addRootClass(onComplete), self.prependCss(which)]);
                                });
                            });
                            self.override("onResize", function(boundary) {
                                this._resizeHandlers.push(boundary);
                            });
                            self.after("styleSelf", function() {
                                return this._updateCachedDimensions();
                            });
                        });
                    }, function(module, dataAndEvents) {
                        /**
                         * @return {?}
                         */
                        module.exports = function() {
                            throw new Error("unimplemented method");
                        };
                    }, function(module, dataAndEvents) {
                        module.exports = {
                            /**
                             * @param {string} v00
                             * @return {?}
                             */
                            getBaseURLPath : function(v00) {
                                switch(v00 && (v00.tfw_team_holdback_11929 && v00.tfw_team_holdback_11929.bucket)) {
                                    case "control":
                                        return "embed-holdback";
                                    case "holdback_prod":
                                        return "embed-holdback-prod";
                                    default:
                                        return "embed";
                                }
                            }
                        };
                    }, function(module, dataAndEvents, getCallback) {
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {undefined}
                         */
                        function Animation(keepActiveItem, target) {
                            /** @type {Array} */
                            this._inputsQueue = [];
                            /** @type {Object} */
                            this._task = keepActiveItem;
                            /** @type {boolean} */
                            this._isPaused = false;
                            this._flushDelay = target && target.flushDelay || el;
                            this._pauseLength = target && target.pauseLength || defaultOptions;
                            this._flushTimeout = void 0;
                        }
                        var Comp = getCallback(3);
                        var callback = getCallback(7);
                        /** @type {number} */
                        var el = 100;
                        /** @type {number} */
                        var defaultOptions = 3E3;
                        /**
                         * @param {string} item
                         * @return {?}
                         */
                        Animation.prototype.add = function(item) {
                            var c = new Comp;
                            return this._inputsQueue.push({
                                input : item,
                                taskDoneDeferred : c
                            }), this._scheduleFlush(), c.promise;
                        };
                        /**
                         * @return {undefined}
                         */
                        Animation.prototype._scheduleFlush = function() {
                            if (!this._isPaused) {
                                clearTimeout(this._flushTimeout);
                                /** @type {number} */
                                this._flushTimeout = setTimeout(callback(this._flush, this), this._flushDelay);
                            }
                        };
                        /**
                         * @return {undefined}
                         */
                        Animation.prototype._flush = function() {
                            try {
                                this._task.call(null, this._inputsQueue);
                            } catch (item) {
                                this._inputsQueue.forEach(function(Stream) {
                                    Stream.taskDoneDeferred.reject(item);
                                });
                            }
                            /** @type {Array} */
                            this._inputsQueue = [];
                            this._flushTimeout = void 0;
                        };
                        /**
                         * @param {?} $vid
                         * @return {undefined}
                         */
                        Animation.prototype.pause = function($vid) {
                            clearTimeout(this._flushTimeout);
                            /** @type {boolean} */
                            this._isPaused = true;
                            if (!$vid) {
                                if (this._pauseLength) {
                                    setTimeout(callback(this.resume, this), this._pauseLength);
                                }
                            }
                        };
                        /**
                         * @return {undefined}
                         */
                        Animation.prototype.resume = function() {
                            /** @type {boolean} */
                            this._isPaused = false;
                            this._scheduleFlush();
                        };
                        /** @type {function (Object, ?): undefined} */
                        module.exports = Animation;
                    }, function(ctx, dataAndEvents, require) {
                        var core = require(72);
                        var extend = require(28);
                        var Block = require(3);
                        var dom = require(4);
                        var response = require(27);
                        var settings = require(20);
                        var loader = require(24);
                        var config = require(8);
                        var ret = require(18);
                        var main = require(105);
                        var getActual = require(59);
                        var nodes = require(9);
                        var helper = require(16);
                        var request = require(2);
                        var _ = require(0);
                        var result = require(1);
                        var Deferred = getActual(function() {
                            return new Block;
                        });
                        var attributes = {
                            shouldObtainCookieConsent : false,
                            features : {}
                        };
                        ctx.exports = {
                            /**
                             * @return {?}
                             */
                            load : function() {
                                var camelKey;
                                var data;
                                var init;
                                var params;
                                if (settings.ie9() || (settings.ie10() || "http:" !== config.protocol && "https:" !== config.protocol)) {
                                    return ret.devError("Using default settings due to unsupported browser or protocol."), void Deferred().resolve();
                                }
                                camelKey = {
                                    origin : config.origin
                                };
                                if (response.settings().indexOf("localhost") > -1) {
                                    /** @type {boolean} */
                                    camelKey.localSettings = true;
                                }
                                data = helper.url(core.resourceBaseUrl + core.widgetIframeHtmlPath, camelKey);
                                /**
                                 * @param {MessageEvent} options
                                 * @return {undefined}
                                 */
                                init = function(options) {
                                    var self;
                                    var c;
                                    var p;
                                    var ds;
                                    if (c = request.isTwitterURL(options.origin), p = data.substr(0, options.origin.length) === options.origin, ds = request.isTwimgURL(options.origin), p && c || ds) {
                                        try {
                                            if ((self = "string" == typeof options.data ? loader.parse(options.data) : options.data).namespace === main.settings) {
                                                attributes = _.aug(attributes, {
                                                    features : self.settings.features,
                                                    sessionId : self.sessionId
                                                });
                                                Deferred().resolve();
                                            }
                                        } catch (rreturn) {
                                            ret.devError(rreturn);
                                        }
                                    }
                                };
                                result.addEventListener("message", init);
                                params = extend({
                                    src : data,
                                    title : "Twitter settings iframe"
                                }, {
                                    display : "none"
                                });
                                dom.body.appendChild(params);
                            },
                            /**
                             * @return {?}
                             */
                            settingsLoaded : function() {
                                var context;
                                var serverAttrs;
                                return context = nodes.get("experimentOverride"), Deferred().promise.then(function() {
                                    return context && (context.name && (context.assignment && ((serverAttrs = {})[context.name] = {
                                        bucket : context.assignment
                                    }, attributes.features = _.aug(attributes.features, serverAttrs)))), attributes;
                                });
                            }
                        };
                    }, function($, dataAndEvents) {
                        $.exports = {
                            settings : "twttr.settings"
                        };
                    }, function(module, dataAndEvents, $sanitize) {
                        /** @type {Array} */
                        module.exports = [$sanitize(107), $sanitize(114), $sanitize(122), $sanitize(124), $sanitize(126), $sanitize(139), $sanitize(141)];
                    }, function(module, dataAndEvents, require) {
                        var nodes = require(16);
                        var css = require(5);
                        var Base = require(0);
                        var matches = require(11);
                        var normalize = require(12)();
                        var callback = require(60);
                        /** @type {string} */
                        var parentName = "a.twitter-dm-button";
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return normalize(keepActiveItem, parentName).map(function(body) {
                                return callback(function(el) {
                                    var selector = el.getAttribute("data-show-screen-name");
                                    var attributes = matches(el);
                                    var url = el.getAttribute("href");
                                    var screenName = el.getAttribute("data-screen-name");
                                    var elems = selector ? css.asBoolean(selector) : null;
                                    var size = el.getAttribute("data-size");
                                    var data = nodes.decodeURL(url);
                                    var userId = data.recipient_id;
                                    var ch = el.getAttribute("data-text") || data.text;
                                    var welcomeMessageId = el.getAttribute("data-welcome-message-id") || data.welcomeMessageId;
                                    return Base.aug(attributes, {
                                        screenName : screenName,
                                        showScreenName : elems,
                                        size : size,
                                        text : ch,
                                        userId : userId,
                                        welcomeMessageId : welcomeMessageId
                                    });
                                }(body), body.parentNode, body);
                            });
                        };
                    }, function(module, dataAndEvents, getTarget) {
                        var target = getTarget(0);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function load(keepActiveItem) {
                            var a;
                            if (keepActiveItem) {
                                return a = keepActiveItem.lang || keepActiveItem.getAttribute("data-lang"), target.isType("string", a) ? a : load(keepActiveItem.parentElement);
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var assert = require(0);
                        var getActual = require(48);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            return getActual(keepActiveItem, target) ? [keepActiveItem] : assert.toRealArray(keepActiveItem.querySelectorAll(target));
                        };
                    }, function(module, dataAndEvents, done) {
                        var Response = done(3);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            var deferred = new Response;
                            return done.e(1).then(function(dataAndEvents) {
                                var Post;
                                try {
                                    Post = done(75);
                                    deferred.resolve(new Post(keepActiveItem, target));
                                } catch (item) {
                                    deferred.reject(item);
                                }
                            }.bind(null, done)).catch(function(item) {
                                deferred.reject(item);
                            }), deferred.promise;
                        };
                    }, function(module, dataAndEvents, require) {
                        var global = require(61);
                        var Block = require(29);
                        module.exports = global.isSupported() ? global : Block;
                    }, function(module, dataAndEvents, require) {
                        var Block = require(113);
                        var view = require(1);
                        var cache = require(10);
                        var utils = require(35);
                        var result = require(17);
                        var select = require(54);
                        var assert = require(25);
                        var HOP = require(55);
                        var nodes = require(56);
                        var jQuery = require(57);
                        var func = require(7);
                        var getActual = require(43);
                        var promise = require(6);
                        var _ = require(0);
                        /** @type {number} */
                        var args = 50;
                        var props = {
                            position : "absolute",
                            visibility : "hidden",
                            display : "block",
                            transform : "rotate(0deg)"
                        };
                        var cssShow = {
                            position : "static",
                            visibility : "visible"
                        };
                        /** @type {string} */
                        var strScript = "twitter-widget";
                        /** @type {string} */
                        var inner = "open";
                        /** @type {string} */
                        var r20 = "SandboxRoot";
                        /** @type {string} */
                        var restoreScript = ".SandboxRoot { display: none; max-height: 10000px; }";
                        module.exports = assert.couple(require(58), function(self) {
                            self.defineStatic("isSupported", function() {
                                return!!view.HTMLElement.prototype.attachShadow && nodes.inlineStyle();
                            });
                            self.overrideProperty("id", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.sandboxEl && this.sandboxEl.id;
                                }
                            });
                            self.overrideProperty("initialized", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return!!this._shadowHost;
                                }
                            });
                            self.overrideProperty("width", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._width;
                                }
                            });
                            self.overrideProperty("height", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._height;
                                }
                            });
                            self.overrideProperty("sandboxEl", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._shadowHost;
                                }
                            });
                            self.define("_updateCachedDimensions", function() {
                                var self = this;
                                return result.read(function() {
                                    var bw;
                                    var box = jQuery(self.sandboxEl);
                                    if ("visible" == self.sandboxEl.style.visibility) {
                                        self._width = box.width;
                                    } else {
                                        bw = jQuery(self.sandboxEl.parentElement).width;
                                        /** @type {number} */
                                        self._width = Math.min(box.width, bw);
                                    }
                                    self._height = box.height;
                                });
                            });
                            self.define("_didResize", function() {
                                var failuresLink = this;
                                var asserterNames = this._resizeHandlers.slice(0);
                                return this._updateCachedDimensions().then(function() {
                                    asserterNames.forEach(function(on) {
                                        on(failuresLink);
                                    });
                                });
                            });
                            self.override("createElement", function(type) {
                                return this.targetGlobal.document.createElement(type);
                            });
                            self.override("createFragment", function() {
                                return this.targetGlobal.document.createDocumentFragment();
                            });
                            self.override("htmlToElement", function(xhtml) {
                                var el;
                                return(el = this.createElement("div")).innerHTML = xhtml, el.firstElementChild;
                            });
                            self.override("hasSelectedText", function() {
                                return!!select.getSelectedText(this.targetGlobal);
                            });
                            self.override("addRootClass", function(uris) {
                                var pattern = this._shadowRootBody;
                                return uris = Array.isArray(uris) ? uris : [uris], this.initialized ? result.write(function() {
                                    uris.forEach(function(source) {
                                        cache.add(pattern, source);
                                    });
                                }) : promise.reject(new Error("sandbox not initialized"));
                            });
                            self.override("removeRootClass", function(uris) {
                                var token = this._shadowRootBody;
                                return uris = Array.isArray(uris) ? uris : [uris], this.initialized ? result.write(function() {
                                    uris.forEach(function(result) {
                                        cache.remove(token, result);
                                    });
                                }) : promise.reject(new Error("sandbox not initialized"));
                            });
                            self.override("hasRootClass", function(styles) {
                                return cache.present(this._shadowRootBody, styles);
                            });
                            self.override("addStyleSheet", function(walkers, cssText) {
                                return this.addCss('@import url("' + walkers + '");', cssText).then(function() {
                                    return HOP(walkers);
                                });
                            });
                            self.override("prependStyleSheet", function(deepDataAndEvents) {
                                var dom = this._shadowRoot;
                                return this.addStyleSheet(deepDataAndEvents, function(th) {
                                    var el = dom.firstElementChild;
                                    return el ? dom.insertBefore(th, el) : dom.appendChild(th);
                                });
                            });
                            self.override("appendStyleSheet", function(deepDataAndEvents) {
                                var docFrag = this._shadowRoot;
                                return this.addStyleSheet(deepDataAndEvents, function(body) {
                                    return docFrag.appendChild(body);
                                });
                            });
                            self.override("addCss", function(child, name) {
                                var el;
                                return this.initialized ? nodes.inlineStyle() ? ((el = this.createElement("style")).type = "text/css", el.appendChild(this.targetGlobal.document.createTextNode(child)), result.write(func(name, null, el))) : promise.resolve() : promise.reject(new Error("sandbox not initialized"));
                            });
                            self.override("prependCss", function(deepDataAndEvents) {
                                var dom = this._shadowRoot;
                                return this.addCss(deepDataAndEvents, function(th) {
                                    var el = dom.firstElementChild;
                                    return el ? dom.insertBefore(th, el) : dom.appendChild(th);
                                });
                            });
                            self.override("appendCss", function(deepDataAndEvents) {
                                var docFrag = this._shadowRoot;
                                return this.addCss(deepDataAndEvents, function(body) {
                                    return docFrag.appendChild(body);
                                });
                            });
                            self.override("makeVisible", function() {
                                return this.styleSelf(cssShow);
                            });
                            self.override("injectWidgetEl", function(stat) {
                                var img = this;
                                return this.initialized ? this._shadowRootBody.firstElementChild ? promise.reject(new Error("widget already injected")) : result.write(function() {
                                    img._shadowRootBody.appendChild(stat);
                                }).then(function() {
                                    return img._updateCachedDimensions();
                                }).then(function() {
                                    var actual = getActual(img._didResize, args, img);
                                    new Block(img._shadowRootBody, actual);
                                }) : promise.reject(new Error("sandbox not initialized"));
                            });
                            self.override("matchHeightToContent", function() {
                                return promise.resolve();
                            });
                            self.override("matchWidthToContent", function() {
                                return promise.resolve();
                            });
                            self.override("insert", function(index, oldRecord, dataAndEvents, me) {
                                var doc = this.targetGlobal.document;
                                var c = this._shadowHost = doc.createElement(strScript);
                                var css = this._shadowRoot = c.attachShadow({
                                    mode : inner
                                });
                                var selector = this._shadowRootBody = doc.createElement("div");
                                return _.forIn(oldRecord || {}, function(a, d) {
                                    c.setAttribute(a, d);
                                }), c.id = index, css.appendChild(selector), utils.delegate(selector, "click", "A", function(dataAndEvents, link) {
                                    if (!link.hasAttribute("target")) {
                                        link.setAttribute("target", "_blank");
                                    }
                                }), promise.all([this.styleSelf(props), this.addRootClass(r20), this.prependCss(restoreScript), result.write(me.bind(null, c))]);
                            });
                            self.override("onResize", function(boundary) {
                                this._resizeHandlers.push(boundary);
                            });
                            self.after("initialize", function() {
                                /** @type {null} */
                                this._shadowHost = this._shadowRoot = this._shadowRootBody = null;
                                /** @type {number} */
                                this._width = this._height = 0;
                                /** @type {Array} */
                                this._resizeHandlers = [];
                            });
                            self.after("styleSelf", function() {
                                return this._updateCachedDimensions();
                            });
                        });
                    }, function(module, dataAndEvents) {
                        var init;
                        /**
                         * @param {Object} context
                         * @return {undefined}
                         */
                        (init = function(keepActiveItem, target) {
                            /**
                             * @param {Element} element
                             * @param {string} method
                             * @return {?}
                             */
                            function init(element, method) {
                                if (element.resizedAttached) {
                                    if (element.resizedAttached) {
                                        return void element.resizedAttached.add(method);
                                    }
                                } else {
                                    element.resizedAttached = new function() {
                                        var i;
                                        var valsLength;
                                        /** @type {Array} */
                                        this.q = [];
                                        /**
                                         * @param {string} item
                                         * @return {undefined}
                                         */
                                        this.add = function(item) {
                                            this.q.push(item);
                                        };
                                        /**
                                         * @return {undefined}
                                         */
                                        this.call = function() {
                                            /** @type {number} */
                                            i = 0;
                                            valsLength = this.q.length;
                                            for (;i < valsLength;i++) {
                                                this.q[i].call();
                                            }
                                        };
                                    };
                                    element.resizedAttached.add(method);
                                }
                                /** @type {Element} */
                                element.resizeSensor = document.createElement("div");
                                /** @type {string} */
                                element.resizeSensor.className = "resize-sensor";
                                /** @type {string} */
                                var stylesString = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;";
                                /** @type {string} */
                                var r = "position: absolute; left: 0; top: 0; transition: 0s;";
                                /** @type {string} */
                                element.resizeSensor.style.cssText = stylesString;
                                /** @type {string} */
                                element.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + stylesString + '"><div style="' + r + '"></div></div><div class="resize-sensor-shrink" style="' + stylesString + '"><div style="' + r + ' width: 200%; height: 200%"></div></div>';
                                element.appendChild(element.resizeSensor);
                                if (!{
                                    fixed : 1,
                                    absolute : 1
                                }[function(el, property) {
                                    return el.currentStyle ? el.currentStyle[property] : window.getComputedStyle ? window.getComputedStyle(el, null).getPropertyValue(property) : el.style[property];
                                }(element, "position")]) {
                                    /** @type {string} */
                                    element.style.position = "relative";
                                }
                                var name;
                                var type;
                                var div = element.resizeSensor.childNodes[0];
                                var marginDiv = div.childNodes[0];
                                var container = element.resizeSensor.childNodes[1];
                                /** @type {function (): undefined} */
                                var removeChild = (container.childNodes[0], function() {
                                    /** @type {string} */
                                    marginDiv.style.width = div.offsetWidth + 10 + "px";
                                    /** @type {string} */
                                    marginDiv.style.height = div.offsetHeight + 10 + "px";
                                    div.scrollLeft = div.scrollWidth;
                                    div.scrollTop = div.scrollHeight;
                                    container.scrollLeft = container.scrollWidth;
                                    container.scrollTop = container.scrollHeight;
                                    name = element.offsetWidth;
                                    type = element.offsetHeight;
                                });
                                removeChild();
                                /**
                                 * @param {HTMLElement} el
                                 * @param {string} event
                                 * @param {Function} callback
                                 * @return {undefined}
                                 */
                                var on = function(el, event, callback) {
                                    if (el.attachEvent) {
                                        el.attachEvent("on" + event, callback);
                                    } else {
                                        el.addEventListener(event, callback);
                                    }
                                };
                                /**
                                 * @return {undefined}
                                 */
                                var close = function() {
                                    if (!(element.offsetWidth == name && element.offsetHeight == type)) {
                                        if (element.resizedAttached) {
                                            element.resizedAttached.call();
                                        }
                                    }
                                    removeChild();
                                };
                                on(div, "scroll", close);
                                on(container, "scroll", close);
                            }
                            /** @type {string} */
                            var key = Object.prototype.toString.call(keepActiveItem);
                            /** @type {boolean} */
                            var o = "[object Array]" === key || ("[object NodeList]" === key || ("[object HTMLCollection]" === key || ("undefined" != typeof jQuery && keepActiveItem instanceof jQuery || "undefined" != typeof Elements && keepActiveItem instanceof Elements)));
                            if (o) {
                                /** @type {number} */
                                var i = 0;
                                var valuesLen = keepActiveItem.length;
                                for (;i < valuesLen;i++) {
                                    init(keepActiveItem[i], target);
                                }
                            } else {
                                init(keepActiveItem, target);
                            }
                            /**
                             * @return {undefined}
                             */
                            this.detach = function() {
                                if (o) {
                                    /** @type {number} */
                                    var i = 0;
                                    var valuesLen = keepActiveItem.length;
                                    for (;i < valuesLen;i++) {
                                        init.detach(keepActiveItem[i]);
                                    }
                                } else {
                                    init.detach(keepActiveItem);
                                }
                            };
                        }).detach = function(context) {
                            if (context.resizeSensor) {
                                context.removeChild(context.resizeSensor);
                                delete context.resizeSensor;
                                delete context.resizedAttached;
                            }
                        };
                        if (void 0 !== module && void 0 !== module.exports) {
                            /** @type {function (Object, ?): undefined} */
                            module.exports = init;
                        } else {
                            /** @type {function (Object, ?): undefined} */
                            window.ResizeSensor = init;
                        }
                    }, function(module, dataAndEvents, require) {
                        var $ = require(2);
                        var _ = require(0);
                        var helper = require(11);
                        var normalize = require(12)();
                        var callback = require(62);
                        var event = require(5);
                        /** @type {string} */
                        var parentName = "a.twitter-follow-button";
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return normalize(keepActiveItem, parentName).map(function(body) {
                                return callback(function(element) {
                                    var data = helper(element);
                                    var obj = {
                                        screenName : $.screenName(element.href),
                                        showScreenName : "false" !== element.getAttribute("data-show-screen-name"),
                                        showCount : "false" !== element.getAttribute("data-show-count"),
                                        size : element.getAttribute("data-size"),
                                        count : element.getAttribute("data-count"),
                                        preview : element.getAttribute("data-preview")
                                    };
                                    return _.forIn(obj, function(key, val) {
                                        var value = data[key];
                                        data[key] = event.hasValue(value) ? value : val;
                                    }), data.screenName = data.screenName || data.screen_name, data;
                                }(body), body.parentNode, body);
                            });
                        };
                    }, function(module, dataAndEvents, done) {
                        var Response = done(3);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            var deferred = new Response;
                            return done.e(2).then(function(dataAndEvents) {
                                var Post;
                                try {
                                    Post = done(76);
                                    deferred.resolve(new Post(keepActiveItem, target));
                                } catch (item) {
                                    deferred.reject(item);
                                }
                            }.bind(null, done)).catch(function(item) {
                                deferred.reject(item);
                            }), deferred.promise;
                        };
                    }, function(module, dataAndEvents, require) {
                        var log = require(17);
                        var getActual = require(117);
                        var getName = require(59);
                        var processor = require(28);
                        var Deferred = require(3);
                        var promise = require(6);
                        var render = require(7);
                        var jQuery = require(0);
                        var restoreScript = {
                            allowfullscreen : "true"
                        };
                        var s = {
                            position : "absolute",
                            visibility : "hidden",
                            width : "0px",
                            height : "0px"
                        };
                        var props = {
                            position : "static",
                            visibility : "visible"
                        };
                        var scheduledFunctions = {};
                        getActual(function(timeoutKey, dim, maxHeight) {
                            var $overlays = scheduledFunctions[timeoutKey];
                            if ($overlays) {
                                return dim = dim || 1, maxHeight = maxHeight || 1, $overlays.styleSelf({
                                    width : dim + "px",
                                    height : maxHeight + "px"
                                }).then(function() {
                                    $overlays.didResize();
                                });
                            }
                        }, function(timeoutKey) {
                            var scheduledFunc = scheduledFunctions[timeoutKey];
                            if (scheduledFunc) {
                                return scheduledFunc._results.resolve();
                            }
                        }, function(timeoutKey) {
                            var book = scheduledFunctions[timeoutKey];
                            if (book) {
                                return book._rendered.resolve();
                            }
                        }, function(timeoutKey, deepDataAndEvents) {
                            var scheduledFunc = scheduledFunctions[timeoutKey];
                            if (scheduledFunc) {
                                if (deepDataAndEvents) {
                                    scheduledFunc.setIframeVersion(deepDataAndEvents);
                                }
                            }
                        }, function(timeoutKey) {
                            var self = scheduledFunctions[timeoutKey];
                            if (self) {
                                return self._results.reject();
                            }
                        });
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem) {
                            keepActiveItem.overrideProperty("id", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.sandboxEl && this.sandboxEl.id;
                                }
                            });
                            keepActiveItem.overrideProperty("initialized", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return!!this.iframeEl;
                                }
                            });
                            keepActiveItem.overrideProperty("width", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._width;
                                }
                            });
                            keepActiveItem.overrideProperty("height", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._height;
                                }
                            });
                            keepActiveItem.overrideProperty("sandboxEl", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this.iframeEl;
                                }
                            });
                            keepActiveItem.defineProperty("iframeEl", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._iframe;
                                }
                            });
                            keepActiveItem.defineProperty("iframeVersion", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    return this._iframeVersion;
                                }
                            });
                            keepActiveItem.define("updateCachedDimensions", function() {
                                var self = this;
                                return this.initialized ? log.read(function() {
                                    self._width = self.sandboxEl.offsetWidth;
                                    self._height = self.sandboxEl.offsetHeight;
                                }) : promise.resolve();
                            });
                            keepActiveItem.define("setTitle", function(syn) {
                                /** @type {string} */
                                this.iframeEl.title = syn;
                            });
                            keepActiveItem.define("setWaitToSwapUntilRendered", function(dataAndEvents) {
                                /** @type {boolean} */
                                this._waitToSwapUntilRendered = dataAndEvents;
                            });
                            keepActiveItem.define("setIframeVersion", function(dataAndEvents) {
                                this._iframeVersion = dataAndEvents;
                            });
                            keepActiveItem.define("getResultsPromise", function() {
                                return this._results.promise;
                            });
                            keepActiveItem.define("getRenderedPromise", function() {
                                return this._rendered.promise;
                            });
                            keepActiveItem.define("makeVisible", function() {
                                return this.styleSelf(props);
                            });
                            keepActiveItem.define("didResize", function() {
                                var memory = this;
                                /** @type {boolean} */
                                var e = memory._resizeHandlers.length > 0;
                                return this.updateCachedDimensions().then(function() {
                                    if (e) {
                                        memory._resizeHandlers.forEach(function(fire) {
                                            fire(memory);
                                        });
                                    }
                                });
                            });
                            keepActiveItem.define("loadDocument", function(libraryName) {
                                var defer = new Deferred;
                                return this.initialized ? this.iframeEl.src ? promise.reject(new Error("widget already loaded")) : (this.iframeEl.addEventListener("load", defer.resolve, false), this.iframeEl.addEventListener("error", defer.reject, false), this.iframeEl.src = libraryName, defer.promise) : promise.reject(new Error("sandbox not initialized"));
                            });
                            keepActiveItem.after("initialize", function() {
                                var transitDeferred = new Deferred;
                                var d = new Deferred;
                                /** @type {null} */
                                this._iframe = null;
                                /** @type {null} */
                                this._iframeVersion = null;
                                /** @type {number} */
                                this._width = this._height = 0;
                                /** @type {Array} */
                                this._resizeHandlers = [];
                                this._rendered = transitDeferred;
                                this._results = d;
                                /** @type {boolean} */
                                this._waitToSwapUntilRendered = false;
                            });
                            keepActiveItem.override("insert", function(timeoutKey, name, value, data) {
                                var n = this;
                                return name = jQuery.aug({
                                    id : timeoutKey
                                }, restoreScript, name), value = jQuery.aug({}, s, value), this._iframe = processor(name, value), scheduledFunctions[timeoutKey] = this, n._waitToSwapUntilRendered || this.onResize(getName(function() {
                                    n.makeVisible();
                                })), log.write(render(data, null, this._iframe));
                            });
                            keepActiveItem.override("onResize", function(boundary) {
                                this._resizeHandlers.push(boundary);
                            });
                            keepActiveItem.after("styleSelf", function() {
                                return this.updateCachedDimensions();
                            });
                        };
                    }, function(module, dataAndEvents, require) {
                        var selector = require(1);
                        var Response = require(118);
                        var nodes = require(120);
                        var $ = require(22);
                        var test = require(5);
                        var compile = require(121);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {?} cb
                         * @param {?} callback
                         * @param {?} func
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem, target, cb, callback, func) {
                            /**
                             * @param {Object} e
                             * @return {undefined}
                             */
                            function fn(e) {
                                var element = compile(this);
                                $.trigger(e.type, {
                                    target : element,
                                    region : e.region,
                                    type : e.type,
                                    data : e.data || {}
                                });
                            }
                            /**
                             * @param {?} context
                             * @return {undefined}
                             */
                            function render(context) {
                                var element = compile(this);
                                var rotateAroundX = element && element.id;
                                var r20 = test.asInt(context.width);
                                var restoreScript = test.asInt(context.height);
                                if (rotateAroundX) {
                                    if (void 0 !== r20) {
                                        if (void 0 !== restoreScript) {
                                            keepActiveItem(rotateAroundX, r20, restoreScript);
                                        }
                                    }
                                }
                            }
                            (new Response).attachReceiver(new nodes.Receiver(selector, "twttr.button")).bind("twttr.private.trigger", fn).bind("twttr.private.resizeButton", render);
                            (new Response).attachReceiver(new nodes.Receiver(selector, "twttr.embed")).bind("twttr.private.initialized", function(first) {
                                var element = compile(this);
                                var actual = element && element.id;
                                var i = first.iframe_version;
                                if (actual) {
                                    if (i) {
                                        if (callback) {
                                            callback(actual, i);
                                        }
                                    }
                                }
                            }).bind("twttr.private.trigger", fn).bind("twttr.private.results", function() {
                                var element = compile(this);
                                var rotateAroundX = element && element.id;
                                if (rotateAroundX) {
                                    if (target) {
                                        target(rotateAroundX);
                                    }
                                }
                            }).bind("twttr.private.rendered", function() {
                                var element = compile(this);
                                var er = element && element.id;
                                if (er) {
                                    if (cb) {
                                        cb(er);
                                    }
                                }
                            }).bind("twttr.private.no_results", function() {
                                var element = compile(this);
                                var doc = element && element.id;
                                if (doc) {
                                    if (func) {
                                        func(doc);
                                    }
                                }
                            }).bind("twttr.private.resize", render);
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        function Map(keepActiveItem) {
                            this.registry = keepActiveItem || {};
                        }
                        /**
                         * @param {Object} value
                         * @return {?}
                         */
                        function fn(value) {
                            var ret;
                            var result;
                            return ret = Assert.isType("string", value), result = Assert.isType("number", value), ret || (result || null === value);
                        }
                        /**
                         * @param {Object} el
                         * @param {Error} e
                         * @return {?}
                         */
                        function listener(el, e) {
                            return{
                                jsonrpc : LEVEL_TOP,
                                id : fn(el) ? el : null,
                                error : e
                            };
                        }
                        var dust = require(24);
                        var FileSystemError = require(119);
                        var Assert = require(0);
                        var that = require(6);
                        var util = require(23);
                        /** @type {string} */
                        var LEVEL_TOP = "2.0";
                        /**
                         * @param {Object} location
                         * @param {Object} parameters
                         * @return {?}
                         */
                        Map.prototype._invoke = function(location, parameters) {
                            var fulfilled;
                            var array;
                            var item;
                            fulfilled = this.registry[location.method];
                            array = location.params || [];
                            array = Assert.isType("array", array) ? array : [array];
                            try {
                                item = fulfilled.apply(parameters.source || null, array);
                            } catch (e) {
                                item = that.reject(e.message);
                            }
                            return util.isPromise(item) ? item : that.resolve(item);
                        };
                        /**
                         * @param {Object} el
                         * @param {string} key
                         * @return {?}
                         */
                        Map.prototype._processRequest = function(el, key) {
                            var e;
                            var value;
                            return function(o) {
                                var e;
                                var isIE;
                                var strict;
                                return!!Assert.isObject(o) && (e = o.jsonrpc === LEVEL_TOP, isIE = Assert.isType("string", o.method), strict = !("id" in o) || fn(o.id), e && (isIE && strict));
                            }(el) ? (e = "params" in el && (value = el.params, !Assert.isObject(value) || Assert.isType("function", value)) ? that.resolve(listener(el.id, FileSystemError.INVALID_PARAMS)) : this.registry[el.method] ? this._invoke(el, {
                                source : key
                            }).then(function(a) {
                                return id = el.id, {
                                    jsonrpc : LEVEL_TOP,
                                    id : id,
                                    result : a
                                };
                                var id;
                            }, function() {
                                return listener(el.id, FileSystemError.INTERNAL_ERROR);
                            }) : that.resolve(listener(el.id, FileSystemError.METHOD_NOT_FOUND)), null != el.id ? e : that.resolve()) : that.resolve(listener(el.id, FileSystemError.INVALID_REQUEST));
                        };
                        /**
                         * @param {?} MainSelectorUI
                         * @return {?}
                         */
                        Map.prototype.attachReceiver = function(MainSelectorUI) {
                            return MainSelectorUI.attachTo(this), this;
                        };
                        /**
                         * @param {string} mayParseLabeledStatementInstead
                         * @param {Function} fn
                         * @return {?}
                         */
                        Map.prototype.bind = function(mayParseLabeledStatementInstead, fn) {
                            return this.registry[mayParseLabeledStatementInstead] = fn, this;
                        };
                        /**
                         * @param {(Array|string)} data
                         * @param {string} result
                         * @return {?}
                         */
                        Map.prototype.receive = function(data, result) {
                            var i;
                            var item;
                            var value;
                            var test = this;
                            try {
                                /** @type {(Array|string)} */
                                value = data;
                                data = Assert.isType("string", value) ? dust.parse(value) : value;
                            } catch (t) {
                                return that.resolve(listener(null, FileSystemError.PARSE_ERROR));
                            }
                            return result = result || null, item = ((i = Assert.isType("array", data)) ? data : [data]).map(function(failures) {
                                return test._processRequest(failures, result);
                            }), i ? function(item) {
                                return that.all(item).then(function(files) {
                                    return(files = files.filter(function(dataAndEvents) {
                                        return void 0 !== dataAndEvents;
                                    })).length ? files : void 0;
                                });
                            }(item) : item[0];
                        };
                        /** @type {function (Object): undefined} */
                        module.exports = Map;
                    }, function(module) {
                        module.exports = {
                            PARSE_ERROR : {
                                code : -32700,
                                message : "Parse error"
                            },
                            INVALID_REQUEST : {
                                code : -32600,
                                message : "Invalid Request"
                            },
                            INVALID_PARAMS : {
                                code : -32602,
                                message : "Invalid params"
                            },
                            METHOD_NOT_FOUND : {
                                code : -32601,
                                message : "Method not found"
                            },
                            INTERNAL_ERROR : {
                                code : -32603,
                                message : "Internal error"
                            }
                        };
                    }, function(module, dataAndEvents, jQuery) {
                        /**
                         * @param {?} object
                         * @param {?} obj
                         * @param {string} prefix
                         * @return {undefined}
                         */
                        function log(object, obj, prefix) {
                            var data;
                            if (object) {
                                if (object.postMessage) {
                                    if (f) {
                                        data = (prefix || "") + collection.stringify(obj);
                                    } else {
                                        if (prefix) {
                                            (data = {})[prefix] = obj;
                                        } else {
                                            data = obj;
                                        }
                                    }
                                    object.postMessage(data, "*");
                                }
                            }
                        }
                        /**
                         * @param {(number|string)} a
                         * @return {?}
                         */
                        function $(a) {
                            return dojo.isType("string", a) ? a : "JSONRPC";
                        }
                        /**
                         * @param {string} hash
                         * @param {?} key
                         * @return {?}
                         */
                        function resolve(hash, key) {
                            return key ? dojo.isType("string", hash) && 0 === hash.indexOf(key) ? hash.substring(key.length) : hash && hash[key] ? hash[key] : void 0 : hash;
                        }
                        /**
                         * @param {HTMLElement} win
                         * @param {(number|string)} defs
                         * @return {undefined}
                         */
                        function init(win, defs) {
                            var doc = win.document;
                            this.filter = $(defs);
                            /** @type {null} */
                            this.server = null;
                            this.isTwitterFrame = self.isTwitterURL(doc.location.href);
                            win.addEventListener("message", parent(this._onMessage, this), false);
                        }
                        /**
                         * @param {Object} target
                         * @param {(number|string)} defs
                         * @return {undefined}
                         */
                        function constructor(target, defs) {
                            this.pending = {};
                            /** @type {Object} */
                            this.target = target;
                            this.isTwitterHost = self.isTwitterURL(elem.href);
                            this.filter = $(defs);
                            $window.addEventListener("message", parent(this._onMessage, this), false);
                        }
                        var elem = jQuery(8);
                        var $window = jQuery(1);
                        var collection = jQuery(24);
                        var targets = jQuery(3);
                        var insert = jQuery(20);
                        var dojo = jQuery(0);
                        var self = jQuery(2);
                        var parent = jQuery(7);
                        var f = insert.ie9();
                        dojo.aug(init.prototype, {
                            /**
                             * @param {Object} e
                             * @return {undefined}
                             */
                            _onMessage : function(e) {
                                var msg;
                                var options = this;
                                if (this.server) {
                                    if (!(this.isTwitterFrame && !self.isTwitterURL(e.origin))) {
                                        if (msg = resolve(e.data, this.filter)) {
                                            this.server.receive(msg, e.source).then(function(walkers) {
                                                if (walkers) {
                                                    log(e.source, walkers, options.filter);
                                                }
                                            });
                                        }
                                    }
                                }
                            },
                            /**
                             * @param {string} form
                             * @return {undefined}
                             */
                            attachTo : function(form) {
                                /** @type {string} */
                                this.server = form;
                            },
                            /**
                             * @return {undefined}
                             */
                            detach : function() {
                                /** @type {null} */
                                this.server = null;
                            }
                        });
                        dojo.aug(constructor.prototype, {
                            /**
                             * @param {Object} item
                             * @return {undefined}
                             */
                            _processResponse : function(item) {
                                var ret = this.pending[item.id];
                                if (ret) {
                                    ret.resolve(item);
                                    delete this.pending[item.id];
                                }
                            },
                            /**
                             * @param {MessageEvent} e
                             * @return {undefined}
                             */
                            _onMessage : function(e) {
                                var value;
                                if ((!this.isTwitterHost || self.isTwitterURL(e.origin)) && (value = resolve(e.data, this.filter))) {
                                    if (dojo.isType("string", value)) {
                                        try {
                                            value = collection.parse(value);
                                        } catch (t) {
                                            return;
                                        }
                                    }
                                    (value = dojo.isType("array", value) ? value : [value]).forEach(parent(this._processResponse, this));
                                }
                            },
                            /**
                             * @param {Element} request
                             * @return {?}
                             */
                            send : function(request) {
                                var callback = new targets;
                                return request.id ? this.pending[request.id] = callback : callback.resolve(), log(this.target, request, this.filter), callback.promise;
                            }
                        });
                        module.exports = {
                            /** @type {function (HTMLElement, (number|string)): undefined} */
                            Receiver : init,
                            /** @type {function (Object, (number|string)): undefined} */
                            Dispatcher : constructor,
                            /**
                             * @param {?} dataAndEvents
                             * @return {?}
                             */
                            _stringifyPayload : function(dataAndEvents) {
                                return arguments.length > 0 && (f = !!dataAndEvents), f;
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var nodes = require(4);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            var str;
                            var node = nodes.getElementsByTagName("iframe");
                            /** @type {number} */
                            var NODE_NAME = 0;
                            for (;node[NODE_NAME];NODE_NAME++) {
                                if ((str = node[NODE_NAME]).contentWindow === keepActiveItem) {
                                    return str;
                                }
                            }
                        };
                    }, function(module, dataAndEvents, require) {
                        var event = require(5);
                        var _ = require(0);
                        var test = require(2);
                        var flag = require(11);
                        var normalize = require(12)();
                        var callback = require(63);
                        /** @type {string} */
                        var parentName = "a.twitter-moment";
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return normalize(keepActiveItem, parentName).map(function(body) {
                                return callback(function(elem) {
                                    var obj = flag(elem);
                                    var reversed = {
                                        momentId : test.momentId(elem.href),
                                        chrome : elem.getAttribute("data-chrome"),
                                        limit : elem.getAttribute("data-limit")
                                    };
                                    return _.forIn(reversed, function(key, val) {
                                        var value = obj[key];
                                        obj[key] = event.hasValue(value) ? value : val;
                                    }), obj;
                                }(body), body.parentNode, body);
                            });
                        };
                    }, function(module, dataAndEvents, done) {
                        var Response = done(3);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            var deferred = new Response;
                            return done.e(3).then(function(dataAndEvents) {
                                var Post;
                                try {
                                    Post = done(77);
                                    deferred.resolve(new Post(keepActiveItem, target));
                                } catch (item) {
                                    deferred.reject(item);
                                }
                            }.bind(null, done)).catch(function(item) {
                                deferred.reject(item);
                            }), deferred.promise;
                        };
                    }, function(module, dataAndEvents, require) {
                        var _ = require(0);
                        var matches = require(11);
                        var normalize = require(12)();
                        var callback = require(64);
                        /** @type {string} */
                        var parentName = "a.periscope-on-air";
                        /** @type {RegExp} */
                        var rquickExpr = /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return normalize(keepActiveItem, parentName).map(function(body) {
                                return callback(function(el) {
                                    var attributes = matches(el);
                                    var selector = el.getAttribute("href");
                                    var size = el.getAttribute("data-size");
                                    /** @type {string} */
                                    var username = rquickExpr.exec(selector)[1];
                                    return _.aug(attributes, {
                                        username : username,
                                        size : size
                                    });
                                }(body), body.parentNode, body);
                            });
                        };
                    }, function(module, dataAndEvents, done) {
                        var Response = done(3);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            var deferred = new Response;
                            return done.e(4).then(function(dataAndEvents) {
                                var Post;
                                try {
                                    Post = done(78);
                                    deferred.resolve(new Post(keepActiveItem, target));
                                } catch (item) {
                                    deferred.reject(item);
                                }
                            }.bind(null, done)).catch(function(item) {
                                deferred.reject(item);
                            }), deferred.promise;
                        };
                    }, function(module, dataAndEvents, require) {
                        var nodes = require(5);
                        var jQuery = require(0);
                        var forOwn = require(65);
                        var filter = require(11);
                        var normalize = require(12)();
                        var callback = require(66);
                        var assert = require(2);
                        var ret = require(18);
                        /** @type {string} */
                        var parentName = "a.twitter-timeline,div.twitter-timeline,a.twitter-grid";
                        /** @type {string} */
                        var uCmd = "Embedded Search timelines have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.";
                        /** @type {string} */
                        var rreturn = "You may have been affected by an update to settings in embedded timelines. See https://twittercommunity.com/t/deprecating-widget-settings/102295.";
                        /** @type {string} */
                        var textBox = "Embedded grids have been deprecated and will now render as timelines. Please update your embed code to use the twitter-timeline class. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.";
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            return normalize(keepActiveItem, parentName).map(function(body) {
                                return callback(function(elem) {
                                    var matched = filter(elem);
                                    var selector = elem.getAttribute("data-show-replies");
                                    var attributes = {
                                        isPreconfigured : !!elem.getAttribute("data-widget-id"),
                                        chrome : elem.getAttribute("data-chrome"),
                                        tweetLimit : elem.getAttribute("data-tweet-limit") || elem.getAttribute("data-limit"),
                                        ariaLive : elem.getAttribute("data-aria-polite"),
                                        theme : elem.getAttribute("data-theme"),
                                        borderColor : elem.getAttribute("data-border-color"),
                                        showReplies : false,
                                        profileScreenName : elem.getAttribute("data-screen-name"),
                                        profileUserId : elem.getAttribute("data-user-id"),
                                        favoritesScreenName : elem.getAttribute("data-favorites-screen-name"),
                                        favoritesUserId : elem.getAttribute("data-favorites-user-id"),
                                        likesScreenName : elem.getAttribute("data-likes-screen-name"),
                                        likesUserId : elem.getAttribute("data-likes-user-id"),
                                        listOwnerScreenName : elem.getAttribute("data-list-owner-screen-name"),
                                        listOwnerUserId : elem.getAttribute("data-list-owner-id"),
                                        listId : elem.getAttribute("data-list-id"),
                                        listSlug : elem.getAttribute("data-list-slug"),
                                        customTimelineId : elem.getAttribute("data-custom-timeline-id"),
                                        staticContent : elem.getAttribute("data-static-content"),
                                        url : elem.href
                                    };
                                    return attributes.isPreconfigured && (assert.isSearchUrl(attributes.url) ? ret.publicError(uCmd, elem) : ret.publicLog(rreturn, elem)), "twitter-grid" === elem.className && ret.publicLog(textBox, elem), (attributes = jQuery.aug(attributes, matched)).dataSource = forOwn(attributes), attributes.id = attributes.dataSource && attributes.dataSource.id, attributes;
                                }(body), body.parentNode, body, target);
                            });
                        };
                    }, function(module, dataAndEvents) {
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @param {Object} that
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target, that) {
                            var value;
                            /** @type {number} */
                            var i = 0;
                            for (;i < keepActiveItem.length;i++) {
                                if (value = target.call(that, keepActiveItem[i], i, keepActiveItem)) {
                                    return value;
                                }
                            }
                        };
                    }, function(module, dataAndEvents, proceed) {
                        var value = proceed(31);
                        module.exports = value.build([proceed(32), proceed(131)]);
                    }, function(module, dataAndEvents, require) {
                        var _ = require(0);
                        var rest = require(130);
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return "en" === keepActiveItem || _.contains(rest, keepActiveItem);
                        };
                    }, function(module, dataAndEvents) {
                        /** @type {Array} */
                        module.exports = ["hi", "zh-cn", "fr", "zh-tw", "msa", "fil", "fi", "sv", "pl", "ja", "ko", "de", "it", "pt", "es", "ru", "id", "tr", "da", "no", "nl", "hu", "fa", "ar", "ur", "he", "th", "cs", "uk", "vi", "ro", "bn", "el", "en-gb", "gu", "kn", "mr", "ta", "bg", "ca", "hr", "sr", "sk"];
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {?} elem
                         * @param {?} __
                         * @return {?}
                         */
                        function callback(elem, __) {
                            return selector.collectionId(elem) || __;
                        }
                        var selector = require(2);
                        var getName = require(44);
                        /** @type {string} */
                        var sum = "collection:";
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem) {
                            keepActiveItem.params({
                                id : {},
                                url : {}
                            });
                            keepActiveItem.overrideProperty("id", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    var value = callback(this.params.url, this.params.id);
                                    return sum + value;
                                }
                            });
                            keepActiveItem.before("initialize", function() {
                                if (!callback(this.params.url, this.params.id)) {
                                    throw new Error("one of url or id is required");
                                }
                                getName();
                            });
                        };
                    }, function(module, dataAndEvents, proceed) {
                        var value = proceed(31);
                        module.exports = value.build([proceed(32), proceed(133)]);
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Object} user
                         * @return {?}
                         */
                        function command(user) {
                            return assert.likesScreenName(user.url) || user.screenName;
                        }
                        var assert = require(2);
                        var getName = require(44);
                        /** @type {string} */
                        var inner = "likes:";
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem) {
                            keepActiveItem.params({
                                screenName : {},
                                userId : {},
                                url : {}
                            });
                            keepActiveItem.overrideProperty("id", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    var arr = command(this.params) || this.params.userId;
                                    return inner + arr;
                                }
                            });
                            keepActiveItem.before("initialize", function() {
                                if (!command(this.params) && !this.params.userId) {
                                    throw new Error("screen name or user id is required");
                                }
                                getName();
                            });
                        };
                    }, function(module, dataAndEvents, proceed) {
                        var value = proceed(31);
                        module.exports = value.build([proceed(32), proceed(135)]);
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {?} _
                         * @return {?}
                         */
                        function callback(_) {
                            var user = xhr.listScreenNameAndSlug(_.url) || _;
                            return exports.compact({
                                screen_name : user.ownerScreenName,
                                user_id : user.ownerUserId,
                                list_slug : user.slug
                            });
                        }
                        var xhr = require(2);
                        var exports = require(0);
                        var assert = require(27);
                        /** @type {string} */
                        var key = "list:";
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem) {
                            keepActiveItem.params({
                                id : {},
                                ownerScreenName : {},
                                ownerUserId : {},
                                slug : {},
                                url : {}
                            });
                            keepActiveItem.overrideProperty("id", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    var data;
                                    var value;
                                    var guest;
                                    return this.params.id ? key + this.params.id : (value = (data = callback(this.params)) && data.list_slug.replace(/-/g, "_"), guest = data && (data.screen_name || data.user_id), key + (guest + ":") + value);
                                }
                            });
                            keepActiveItem.overrideProperty("endpoint", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    var u;
                                    /** @type {Array} */
                                    var progressValues = ["timeline-list"];
                                    return this.params.id ? progressValues.push("list-id", this.params.id) : (u = callback(this.params), progressValues.push("screen-name", u.screen_name, "slug", u.list_slug)), assert.embedService(progressValues);
                                }
                            });
                            keepActiveItem.before("initialize", function() {
                                var cache = callback(this.params);
                                if (exports.isEmptyObject(cache) && !this.params.id) {
                                    throw new Error("qualified slug or list id required");
                                }
                            });
                        };
                    }, function(module, dataAndEvents, proceed) {
                        var value = proceed(31);
                        module.exports = value.build([proceed(32), proceed(137)]);
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {?} success
                         * @param {?} __
                         * @return {?}
                         */
                        function callback(success, __) {
                            return config.screenName(success) || __;
                        }
                        var config = require(2);
                        var Block = require(5);
                        var T = require(0);
                        var assert = require(27);
                        /** @type {string} */
                        var leadingZeroes = "profile:";
                        /**
                         * @param {Object} keepActiveItem
                         * @return {undefined}
                         */
                        module.exports = function(keepActiveItem) {
                            keepActiveItem.params({
                                showReplies : {
                                    fallback : false,
                                    transform : Block.asBoolean
                                },
                                screenName : {},
                                userId : {},
                                url : {}
                            });
                            keepActiveItem.overrideProperty("id", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    var value = callback(this.params.url, this.params.screenName);
                                    return leadingZeroes + (value || this.params.userId);
                                }
                            });
                            keepActiveItem.overrideProperty("endpoint", {
                                /**
                                 * @return {?}
                                 */
                                get : function() {
                                    /** @type {Array} */
                                    var progressValues = ["timeline-profile"];
                                    var r = callback(this.params.url, this.params.screenName);
                                    return r ? progressValues.push("screen-name", r) : progressValues.push("user-id", this.params.userId), assert.embedService(progressValues);
                                }
                            });
                            keepActiveItem.around("queryParams", function(done) {
                                return T.aug(done(), {
                                    showReplies : this.params.showReplies ? "true" : "false"
                                });
                            });
                            keepActiveItem.before("initialize", function() {
                                if (!callback(this.params.url, this.params.screenName) && !this.params.userId) {
                                    throw new Error("screen name or user id is required");
                                }
                            });
                        };
                    }, function(module, dataAndEvents, done) {
                        var Response = done(3);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            var deferred = new Response;
                            return done.e(5).then(function(dataAndEvents) {
                                var Post;
                                try {
                                    Post = done(79);
                                    deferred.resolve(new Post(keepActiveItem, target));
                                } catch (item) {
                                    deferred.reject(item);
                                }
                            }.bind(null, done)).catch(function(item) {
                                deferred.reject(item);
                            }), deferred.promise;
                        };
                    }, function(module, dataAndEvents, merge) {
                        var opts = merge(10);
                        var output = merge(2);
                        var a = merge(0);
                        var G = merge(11);
                        var normalize = merge(12)();
                        var callback = merge(67);
                        /** @type {string} */
                        var parentName = "blockquote.twitter-tweet, blockquote.twitter-video";
                        /** @type {RegExp} */
                        var nocode = /\btw-align-(left|right|center)\b/;
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            return normalize(keepActiveItem, parentName).map(function(body) {
                                return callback(function(el) {
                                    var attributes = G(el);
                                    var as = el.getElementsByTagName("A");
                                    var data = as && as[as.length - 1];
                                    var handle = data && output.status(data.href);
                                    var cursor = el.getAttribute("data-conversation");
                                    var hideThread = "none" == cursor || ("hidden" == cursor || opts.present(el, "tw-hide-thread"));
                                    var tw_hide_media = el.getAttribute("data-cards");
                                    var hideCard = "none" == tw_hide_media || ("hidden" == tw_hide_media || opts.present(el, "tw-hide-media"));
                                    var mediaMaxWidth = el.getAttribute("data-media-max-width");
                                    var language = el.getAttribute("data-align") || el.getAttribute("align");
                                    var theme = el.getAttribute("data-theme");
                                    return!language && (nocode.test(el.className) && (language = RegExp.$1)), a.aug(attributes, {
                                        tweetId : handle,
                                        hideThread : hideThread,
                                        hideCard : hideCard,
                                        mediaMaxWidth : mediaMaxWidth,
                                        align : language,
                                        theme : theme,
                                        id : handle
                                    });
                                }(body), body.parentNode, body, target);
                            });
                        };
                    }, function(module, dataAndEvents, done) {
                        var Response = done(3);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            var deferred = new Response;
                            return done.e(6).then(function(dataAndEvents) {
                                var Post;
                                try {
                                    Post = done(80);
                                    deferred.resolve(new Post(keepActiveItem, target));
                                } catch (item) {
                                    deferred.reject(item);
                                }
                            }.bind(null, done)).catch(function(item) {
                                deferred.reject(item);
                            }), deferred.promise;
                        };
                    }, function(module, dataAndEvents, require) {
                        var spec = require(10);
                        var _ = require(0);
                        var helper = require(11);
                        var normalize = require(12)();
                        var callback = require(68);
                        var event = require(5);
                        /** @type {string} */
                        var parentName = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button";
                        /** @type {string} */
                        var newName = "twitter-hashtag-button";
                        /** @type {string} */
                        var rvar = "twitter-mention-button";
                        /**
                         * @param {Object} keepActiveItem
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem) {
                            return normalize(keepActiveItem, parentName).map(function(body) {
                                return callback(function(element) {
                                    var data = helper(element);
                                    var obj = {
                                        screenName : element.getAttribute("data-button-screen-name"),
                                        text : element.getAttribute("data-text"),
                                        type : element.getAttribute("data-type"),
                                        size : element.getAttribute("data-size"),
                                        url : element.getAttribute("data-url"),
                                        hashtags : element.getAttribute("data-hashtags"),
                                        via : element.getAttribute("data-via"),
                                        buttonHashtag : element.getAttribute("data-button-hashtag")
                                    };
                                    return _.forIn(obj, function(key, val) {
                                        var value = data[key];
                                        data[key] = event.hasValue(value) ? value : val;
                                    }), data.screenName = data.screenName || data.screen_name, data.buttonHashtag = data.buttonHashtag || (data.button_hashtag || data.hashtag), spec.present(element, newName) && (data.type = "hashtag"), spec.present(element, rvar) && (data.type = "mention"), data;
                                }(body), body.parentNode, body);
                            });
                        };
                    }, function(module, dataAndEvents, done) {
                        var Response = done(3);
                        /**
                         * @param {Object} keepActiveItem
                         * @param {?} target
                         * @return {?}
                         */
                        module.exports = function(keepActiveItem, target) {
                            var deferred = new Response;
                            return done.e(2).then(function(dataAndEvents) {
                                var Post;
                                try {
                                    Post = done(81);
                                    deferred.resolve(new Post(keepActiveItem, target));
                                } catch (item) {
                                    deferred.reject(item);
                                }
                            }.bind(null, done)).catch(function(item) {
                                deferred.reject(item);
                            }), deferred.promise;
                        };
                    }, function(module, dataAndEvents, fn) {
                        var val = fn(0);
                        module.exports = val.aug({}, fn(144), fn(145), fn(146), fn(147), fn(148), fn(149), fn(150));
                    }, function(module, dataAndEvents, require) {
                        var callback = require(60);
                        var element = require(15)(["userId"], {}, callback);
                        module.exports = {
                            createDMButton : element
                        };
                    }, function(module, dataAndEvents, require) {
                        var callback = require(62);
                        var element = require(15)(["screenName"], {}, callback);

                    }, function(module, dataAndEvents, require) {
                        var callback = require(63);
                        var element = require(15)(["momentId"], {}, callback);
                        module.exports = {
                            createMoment : element
                        };
                    }, function(module, dataAndEvents, require) {
                        var callback = require(64);
                        var element = require(15)(["username"], {}, callback);
                        module.exports = {
                            createPeriscopeOnAirButton : element
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Object} data
                         * @return {?}
                         */
                        function update(data) {
                            var params;
                            var args = lang.toRealArray(arguments).slice(1);
                            return assert.isString(data) || assert.isNumber(data) ? RSVP.reject("Embedded timelines with widget settings have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.") : lang.isObject(data) ? (data = data || {}, args.forEach(function(obj) {
                                if (lang.isType("object", obj)) {
                                    (function(dataAndEvents) {
                                        dataAndEvents.ariaLive = dataAndEvents.ariaPolite;
                                    })(params = obj);
                                }
                            }), params || (params = {}, args.push(params)), data.lang = params.lang, data.tweetLimit = params.tweetLimit, data.showReplies = params.showReplies, params.dataSource = validate(data), fn.apply(this, args)) : RSVP.reject("data source must be an object.");
                        }
                        var request = require(8);
                        var ret = require(18);
                        var url = require(2);
                        var lang = require(0);
                        var assert = require(5);
                        var validate = require(65);
                        var utils = require(66);
                        var fn = require(15)([], {}, utils);
                        var RSVP = require(6);
                        /** @type {string} */
                        var rreturn = "Embedded grids have been deprecated. Please use twttr.widgets.createTimeline instead. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.";
                        var JsDiff = {
                            /** @type {function (Object): ?} */
                            createTimeline : update,
                            /**
                             * @param {string} term
                             * @return {?}
                             */
                            createGridFromCollection : function(term) {
                                var list = lang.toRealArray(arguments).slice(1);
                                var def = {
                                    sourceType : "collection",
                                    id : term
                                };
                                return list.unshift(def), ret.publicLog(rreturn), update.apply(this, list);
                            }
                        };
                        if (url.isTwitterURL(request.href)) {
                            /**
                             * @param {?} dataAndEvents
                             * @param {?} err
                             * @param {?} xs
                             * @return {?}
                             */
                            JsDiff.createTimelinePreview = function(dataAndEvents, err, xs) {
                                var data = {
                                    previewParams : dataAndEvents,
                                    useLegacyDefaults : true,
                                    isPreviewTimeline : true
                                };
                                return data.dataSource = validate(data), fn(err, data, xs);
                            };
                        }
                        module.exports = JsDiff;
                    }, function(module, dataAndEvents, require) {
                        var matcherFunction;
                        var assert = require(0);
                        var target = require(67);
                        var forOwn = require(15);
                        /** @type {function (): ?} */
                        var createVideo = (matcherFunction = forOwn(["tweetId"], {}, target), function() {
                            return assert.toRealArray(arguments).slice(1).forEach(function(a) {
                                if (assert.isType("object", a)) {
                                    /** @type {boolean} */
                                    a.hideCard = "none" == a.cards || "hidden" == a.cards;
                                    /** @type {boolean} */
                                    a.hideThread = "none" == a.conversation || "hidden" == a.conversation;
                                }
                            }), matcherFunction.apply(this, arguments);
                        });
                        module.exports = {
                            /** @type {function (): ?} */
                            createTweet : createVideo,
                            /** @type {function (): ?} */
                            createTweetEmbed : createVideo,
                            /** @type {function (): ?} */
                            createVideo : createVideo
                        };
                    }, function(module, dataAndEvents, require) {
                        /**
                         * @param {Function} matcherFunction
                         * @return {?}
                         */
                        function next(matcherFunction) {
                            return function() {
                                return assert.toRealArray(arguments).slice(1).forEach(function(entity) {
                                    if (assert.isType("object", entity)) {
                                        entity.screenName = entity.screenName || entity.screen_name;
                                        entity.buttonHashtag = entity.buttonHashtag || (entity.button_hashtag || entity.hashtag);
                                    }
                                }), matcherFunction.apply(this, arguments);
                            };
                        }
                        var assert = require(0);
                        var Block = require(68);
                        var $ = require(15);
                        var orig = $(["url"], {
                            type : "share"
                        }, Block);
                        var lastElement = $(["buttonHashtag"], {
                            type : "hashtag"
                        }, Block);
                        var err = $(["screenName"], {
                            type : "mention"
                        }, Block);
                        module.exports = {
                            createShareButton : next(orig),
                            createHashtagButton : next(lastElement),
                            createMentionButton : next(err)
                        };
                    }, function(module, dataAndEvents, jQuery) {
                        /**
                         * @return {undefined}
                         */
                        function flush() {
                            var _i;
                            var _len;
                            /** @type {number} */
                            u = 1;
                            /** @type {number} */
                            _i = 0;
                            /** @type {number} */
                            _len = array.length;
                            for (;_i < _len;_i++) {
                                array[_i]();
                            }
                        }
                        var ol;
                        var fn;
                        var isRegExp;
                        var doc = jQuery(4);
                        var self = jQuery(1);
                        /** @type {number} */
                        var u = 0;
                        /** @type {Array} */
                        var array = [];
                        var testEl = doc.createElement("a");
                        if (/^loade|c/.test(doc.readyState)) {
                            /** @type {number} */
                            u = 1;
                        }
                        if (doc.addEventListener) {
                            doc.addEventListener("DOMContentLoaded", fn = function() {
                                doc.removeEventListener("DOMContentLoaded", fn, false);
                                flush();
                            }, false);
                        }
                        if (testEl.doScroll) {
                            doc.attachEvent("onreadystatechange", ol = function() {
                                if (/^c/.test(doc.readyState)) {
                                    doc.detachEvent("onreadystatechange", ol);
                                    flush();
                                }
                            });
                        }
                        /** @type {function (Object): undefined} */
                        isRegExp = testEl.doScroll ? function(item) {
                            if (self.self != self.top) {
                                if (u) {
                                    item();
                                } else {
                                    array.push(item);
                                }
                            } else {
                                (function() {
                                    try {
                                        testEl.doScroll("left");
                                    } catch (e) {
                                        return setTimeout(function() {
                                            isRegExp(item);
                                        }, 50);
                                    }
                                    item();
                                })();
                            }
                        } : function(keepActiveItem) {
                            if (u) {
                                keepActiveItem();
                            } else {
                                array.push(keepActiveItem);
                            }
                        };
                        /** @type {function (Object): undefined} */
                        module.exports = isRegExp;
                    }, function(module, dataAndEvents, String) {
                        var t = String(42);
                        var self = String(9);
                        /**
                         * @return {undefined}
                         */
                        module.exports = function() {
                            self.set("buildVersion", t.version);
                        };
                    }, function(dataAndEvents, deepDataAndEvents, $sanitize) {
                        $sanitize(154);
                        $sanitize(157);
                        $sanitize(158);
                    }, function(dataAndEvents, deepDataAndEvents, $) {
                        var subject = $(155);
                        var self = $(26);
                        var duration = $(69);
                        var result = new subject;
                        /**
                         * @param {(Object|string)} c
                         * @return {undefined}
                         */
                        var handler = function(c) {
                            if (c.widgets) {
                                if (1 === c.widgets.length) {
                                    result.start();
                                    self.emitter.unbind(self.ALL_WIDGETS_RENDER_START, handler);
                                }
                            }
                        };
                        /**
                         * @param {(Object|string)} ns
                         * @return {undefined}
                         */
                        var update = function(ns) {
                            var element;
                            if (ns.widgets) {
                                if (1 === ns.widgets.length) {
                                    element = ns.widgets[0];
                                    result.end();
                                    if (element.dataset) {
                                        if (element.dataset.tweetId) {
                                            duration({
                                                duration : result.duration(),
                                                namespace : {
                                                    element : "tweet",
                                                    action : "render"
                                                },
                                                widgetIds : [element.dataset.tweetId]
                                            });
                                        }
                                    }
                                }
                            }
                            self.emitter.unbind(self.ALL_WIDGETS_RENDER_END, update);
                        };
                        self.emitter.bind(self.ALL_WIDGETS_RENDER_START, handler);
                        self.emitter.bind(self.ALL_WIDGETS_RENDER_END, update);
                    }, function(module, dataAndEvents, NowInit) {
                        /**
                         * @return {undefined}
                         */
                        function Animation() {
                        }
                        var now = NowInit(156);
                        /**
                         * @return {undefined}
                         */
                        Animation.prototype.start = function() {
                            this._startTime = now();
                        };
                        /**
                         * @return {undefined}
                         */
                        Animation.prototype.end = function() {
                            /** @type {number} */
                            this._duration = now() - this._startTime;
                        };
                        /**
                         * @return {?}
                         */
                        Animation.prototype.duration = function() {
                            return this._duration;
                        };
                        /** @type {function (): undefined} */
                        module.exports = Animation;
                    }, function(module, dataAndEvents, item) {
                        var win = item(1);
                        /**
                         * @return {?}
                         */
                        module.exports = function() {
                            return win.performance && win.performance.now ? win.performance.now() : Date.now();
                        };
                    }, function(module, dataAndEvents, Event) {
                        /**
                         * @return {undefined}
                         */
                        function run() {
                            if (current) {
                                if (current.length === split) {
                                    self.emitter.trigger(self.ALL_WIDGETS_AND_IMAGES_LOADED, current);
                                    /** @type {null} */
                                    current = null;
                                }
                            }
                        }
                        var current;
                        var self = Event(26);
                        /** @type {number} */
                        var split = 0;
                        self.emitter.bind(self.ALL_WIDGETS_RENDER_END, function(options) {
                            current = options.widgets;
                            run();
                        });
                        module.exports = {
                            /**
                             * @return {undefined}
                             */
                            reportImagesLoadForAWidget : function() {
                                split++;
                                run();
                            }
                        };
                    }, function(dataAndEvents, deepDataAndEvents, require) {
                        /**
                         * @param {?} options
                         * @return {?}
                         */
                        function run(options) {
                            return options.performance.getEntriesByType("resource").filter(function(cbError) {
                                return assert.isTwimgURL(cbError.name) || assert.isTwitterURL(cbError.name);
                            }).reduce(function(newAttrs, attr) {
                                return newAttrs[attr.name] = attr.duration, newAttrs;
                            }, {});
                        }
                        var provider = require(26);
                        var getActual = require(69);
                        var io = require(159);
                        var assert = require(2);
                        var send = require(1);
                        var jQuery = require(0);
                        var Block = require(20);
                        var Parallel = require(61);
                        provider.emitter.bind(provider.ALL_WIDGETS_AND_IMAGES_LOADED, function(deepDataAndEvents) {
                            var restoreScript;
                            var parsed;
                            /** @type {Array} */
                            var scripts = [];
                            if (Block.hasPerformanceInformation()) {
                                restoreScript = run(send);
                                if (!Parallel.isSupported()) {
                                    scripts = function(deepDataAndEvents) {
                                        return deepDataAndEvents.reduce(function(attributes, stylesContainer) {
                                            return jQuery.aug(attributes, run(stylesContainer.contentDocument.defaultView));
                                        }, {});
                                    }(deepDataAndEvents);
                                }
                                parsed = jQuery.aug({}, restoreScript, scripts);
                                Object.keys(io).forEach(function(k) {
                                    !function(parsed, item, isString) {
                                        var dur = Object.keys(parsed).reduce(function(k, name) {
                                            return isString(name) ? k + parsed[name] : k;
                                        }, 0);
                                        getActual({
                                            duration : dur,
                                            namespace : {
                                                element : item,
                                                action : "resource"
                                            }
                                        });
                                    }(parsed, k, io[k]);
                                });
                            }
                        });
                    }, function(module, dataAndEvents, $sanitize) {
                        var core_trim = $sanitize(2);
                        var data = {
                            /**
                             * @return {?}
                             */
                            all : function() {
                                return true;
                            },
                            /**
                             * @param {?} text
                             * @return {?}
                             */
                            image : function(text) {
                                return core_trim.isTwimgURL(text);
                            },
                            /**
                             * @param {?} text
                             * @return {?}
                             */
                            settings : function(text) {
                                return core_trim.isSettingsURL(text);
                            },
                            /**
                             * @param {?} text
                             * @return {?}
                             */
                            widget_iframe : function(text) {
                                return core_trim.isWidgetIframeURL(text);
                            }
                        };
                        module.exports = data;
                    }]);
                }
            }
        }
    }
}
;