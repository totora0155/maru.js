/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/maru.js
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Maru = factory());
}(this, function () { 'use strict';

  var customAttr = {
    ID: 'data-maru-id',
  }
  // var box;

  function Maru(opts) {
    this.el = el;
    this.opts = {
      timeout: 200,
    };
    this._cache = {};
    this._event;

    if (opts.timeout) {
      if (typeof opts.timeout === 'number') {
        throw Error('`timeout` must be an integer')
      }
      this.opts.timeout = opts.timeout;
    }

    // if (!box) {
    //   init();
    // }
  };

  maru.prototype.regist = function regist(event) {
    this._.event = event;
  }

  maru.prototype.open = function open(e) {
    var target = e.currentTarget;
    var id = target.getAttribute(customAttr.ID);
    var el = null;
    if (this._cache[id]) {
      el = this._cache[id];
    } else {
      el = document.getElementById(id);
      if (!el) {
        throw Error(el + ' is undefined');
      }
      init(el);
    }

    el.style.display = 'block';

    if (this._event && typeof this._event === 'object') {
      Object
        .keys(this._event)
        .forEach(function(id) {
          try {
            var el = document.getElementById(id)
            var action = this._event[id].action;
            var handle = this._event[id].handle;
            el.addEventListener(action, handle, false);
          } catch (e) {
            throw Error(e)
          }
        });
    }

    next(function () {
      move(this.el);
      show(this.el);
    }.bind(this));
  };

  menu.prototype.close = function () {
    if (this._event && typeof this._event === 'object') {
      Object
        .keys(this._event)
        .forEach(function(id) {
          try {
            var el = document.getElementById(id)
            var action = this._event[id].action;
            var handle = this._event[id].handle;
            el.removeEventListener(action, handle, false);
          } catch (e) {
            throw Error(e)
          }
        });
    }

    setTimeout(function() {
      this.el.style.display = 'none';
    }.bind(thid), this.opts.timeout);
  }

  function init(el) {
    // TODO: user customize
    el.style.cssText = 'position:fixed;' +
                       'right:50%;' +
                       'bottom:50%;' +
                       '-webkit-transform:translate(50%,50%);' +
                       'transform:translate(50%,50%);' +
                       'transition: opaicty .2s linear'
                       ;
  }

  // function init() {
  //   box = document.createElement('div');
  //   box.className = 'maru__box';
  //   injectStyle();
  // }

  function show(el) {
    el.style.opacity = 1;
    // TODO:
  }

  function next(cb) {
    if (requestAnimationFrame) {
      requestAnimationFrame(cb);
    } else {
      setTimeout(cb, 0);
    }
  }

  // function injectStyle() {
  //   var style = document.createElement('style');
  //   var css = '';
  //   style.innerText = css;
  //   document.head.insertBefore(style, document.head.children[0]);
  // }

  return Maru;

}));