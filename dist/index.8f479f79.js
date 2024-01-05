// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6EjnU":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "583bd64f8f479f79";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"d5YBw":[function(require,module,exports) {
/**
 * @name FlipDown
 * @description Flip styled countdown clock
 * @author Peter Butcher (PButcher) <pbutcher93[at]gmail[dot]com>
 * @param {number} uts - Time to count down to as unix timestamp
 * @param {string} el - DOM element to attach FlipDown to
 * @param {object} opt - Optional configuration settings
 **/ class FlipDown {
    constructor(uts, el = "flipdown", opt = {}){
        // If uts is not specified
        if (typeof uts !== "number") throw new Error(`FlipDown: Constructor expected unix timestamp, got ${typeof uts} instead.`);
        // If opt is specified, but not el
        if (typeof el === "object") {
            opt = el;
            el = "flipdown";
        }
        // FlipDown version
        this.version = "0.3.2";
        // Initialised?
        this.initialised = false;
        // Time at instantiation in seconds
        this.now = this._getTime();
        // UTS to count down to
        this.epoch = uts;
        // UTS passed to FlipDown is in the past
        this.countdownEnded = false;
        // User defined callback for countdown end
        this.hasEndedCallback = null;
        // FlipDown DOM element
        this.element = document.getElementById(el);
        // Rotor DOM elements
        this.rotors = [];
        this.rotorLeafFront = [];
        this.rotorLeafRear = [];
        this.rotorTops = [];
        this.rotorBottoms = [];
        // Interval
        this.countdown = null;
        // Number of days remaining
        this.daysRemaining = 0;
        // Clock values as numbers
        this.clockValues = {};
        // Clock values as strings
        this.clockStrings = {};
        // Clock values as array
        this.clockValuesAsString = [];
        this.prevClockValuesAsString = [];
        // Parse options
        this.opts = this._parseOptions(opt);
        // Set options
        this._setOptions();
        // Print Version
        console.log(`FlipDown ${this.version} (Theme: ${this.opts.theme})`);
    }
    /**
     * @name start
     * @description Start the countdown
     * @author PButcher
     **/ start() {
        // Initialise the clock
        if (!this.initialised) this._init();
        // Set up the countdown interval
        this.countdown = setInterval(this._tick.bind(this), 1000);
        // Chainable
        return this;
    }
    /**
     * @name ifEnded
     * @description Call a function once the countdown ends
     * @author PButcher
     * @param {function} cb - Callback
     **/ ifEnded(cb) {
        this.hasEndedCallback = function() {
            cb();
            this.hasEndedCallback = null;
        };
        // Chainable
        return this;
    }
    /**
     * @name _getTime
     * @description Get the time in seconds (unix timestamp)
     * @author PButcher
     **/ _getTime() {
        return new Date().getTime() / 1000;
    }
    /**
     * @name _hasCountdownEnded
     * @description Has the countdown ended?
     * @author PButcher
     **/ _hasCountdownEnded() {
        // Countdown has ended
        if (this.epoch - this.now < 0) {
            this.countdownEnded = true;
            // Fire the ifEnded callback once if it was set
            if (this.hasEndedCallback != null) {
                // Call ifEnded callback
                this.hasEndedCallback();
                // Remove the callback
                this.hasEndedCallback = null;
            }
            return true;
        // Countdown has not ended
        } else {
            this.countdownEnded = false;
            return false;
        }
    }
    /**
     * @name _parseOptions
     * @description Parse any passed options
     * @param {object} opt - Optional configuration settings
     * @author PButcher
     **/ _parseOptions(opt) {
        let headings = [
            "Days",
            "Hours",
            "Minutes",
            "Seconds"
        ];
        if (opt.headings && opt.headings.length === 4) headings = opt.headings;
        return {
            // Theme
            theme: opt.hasOwnProperty("theme") ? opt.theme : "dark",
            headings
        };
    }
    /**
     * @name _setOptions
     * @description Set optional configuration settings
     * @author PButcher
     **/ _setOptions() {
        // Apply theme
        this.element.classList.add(`flipdown__theme-${this.opts.theme}`);
    }
    /**
     * @name _init
     * @description Initialise the countdown
     * @author PButcher
     **/ _init() {
        this.initialised = true;
        // Check whether countdown has ended and calculate how many digits the day counter needs
        if (this._hasCountdownEnded()) this.daysremaining = 0;
        else this.daysremaining = Math.floor((this.epoch - this.now) / 86400).toString().length;
        var dayRotorCount = this.daysremaining <= 2 ? 2 : this.daysremaining;
        // Create and store rotors
        for(var i = 0; i < dayRotorCount + 6; i++)this.rotors.push(this._createRotor(0));
        // Create day rotor group
        var dayRotors = [];
        for(var i = 0; i < dayRotorCount; i++)dayRotors.push(this.rotors[i]);
        this.element.appendChild(this._createRotorGroup(dayRotors, 0));
        // Create other rotor groups
        var count = dayRotorCount;
        for(var i = 0; i < 3; i++){
            var otherRotors = [];
            for(var j = 0; j < 2; j++){
                otherRotors.push(this.rotors[count]);
                count++;
            }
            this.element.appendChild(this._createRotorGroup(otherRotors, i + 1));
        }
        // Store and convert rotor nodelists to arrays
        this.rotorLeafFront = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front"));
        this.rotorLeafRear = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear"));
        this.rotorTop = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top"));
        this.rotorBottom = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom"));
        // Set initial values;
        this._tick();
        this._updateClockValues(true);
        return this;
    }
    /**
     * @name _createRotorGroup
     * @description Add rotors to the DOM
     * @author PButcher
     * @param {array} rotors - A set of rotors
     **/ _createRotorGroup(rotors, rotorIndex) {
        var rotorGroup = document.createElement("div");
        rotorGroup.className = "rotor-group";
        var dayRotorGroupHeading = document.createElement("div");
        dayRotorGroupHeading.className = "rotor-group-heading";
        dayRotorGroupHeading.setAttribute("data-before", this.opts.headings[rotorIndex]);
        rotorGroup.appendChild(dayRotorGroupHeading);
        appendChildren(rotorGroup, rotors);
        return rotorGroup;
    }
    /**
     * @name _createRotor
     * @description Create a rotor DOM element
     * @author PButcher
     * @param {number} v - Initial rotor value
     **/ _createRotor(v = 0) {
        var rotor = document.createElement("div");
        var rotorLeaf = document.createElement("div");
        var rotorLeafRear = document.createElement("figure");
        var rotorLeafFront = document.createElement("figure");
        var rotorTop = document.createElement("div");
        var rotorBottom = document.createElement("div");
        rotor.className = "rotor";
        rotorLeaf.className = "rotor-leaf";
        rotorLeafRear.className = "rotor-leaf-rear";
        rotorLeafFront.className = "rotor-leaf-front";
        rotorTop.className = "rotor-top";
        rotorBottom.className = "rotor-bottom";
        rotorLeafRear.textContent = v;
        rotorTop.textContent = v;
        rotorBottom.textContent = v;
        appendChildren(rotor, [
            rotorLeaf,
            rotorTop,
            rotorBottom
        ]);
        appendChildren(rotorLeaf, [
            rotorLeafRear,
            rotorLeafFront
        ]);
        return rotor;
    }
    /**
     * @name _tick
     * @description Calculate current tick
     * @author PButcher
     **/ _tick() {
        // Get time now
        this.now = this._getTime();
        // Between now and epoch
        var diff = this.epoch - this.now <= 0 ? 0 : this.epoch - this.now;
        // Days remaining
        this.clockValues.d = Math.floor(diff / 86400);
        diff -= this.clockValues.d * 86400;
        // Hours remaining
        this.clockValues.h = Math.floor(diff / 3600);
        diff -= this.clockValues.h * 3600;
        // Minutes remaining
        this.clockValues.m = Math.floor(diff / 60);
        diff -= this.clockValues.m * 60;
        // Seconds remaining
        this.clockValues.s = Math.floor(diff);
        // Update clock values
        this._updateClockValues();
        // Has the countdown ended?
        this._hasCountdownEnded();
    }
    /**
     * @name _updateClockValues
     * @description Update the clock face values
     * @author PButcher
     * @param {boolean} init - True if calling for initialisation
     **/ _updateClockValues(init = false) {
        // Build clock value strings
        this.clockStrings.d = pad(this.clockValues.d, 2);
        this.clockStrings.h = pad(this.clockValues.h, 2);
        this.clockStrings.m = pad(this.clockValues.m, 2);
        this.clockStrings.s = pad(this.clockValues.s, 2);
        // Concat clock value strings
        this.clockValuesAsString = (this.clockStrings.d + this.clockStrings.h + this.clockStrings.m + this.clockStrings.s).split("");
        // Update rotor values
        // Note that the faces which are initially visible are:
        // - rotorLeafFront (top half of current rotor)
        // - rotorBottom (bottom half of current rotor)
        // Note that the faces which are initially hidden are:
        // - rotorTop (top half of next rotor)
        // - rotorLeafRear (bottom half of next rotor)
        this.rotorLeafFront.forEach((el, i)=>{
            el.textContent = this.prevClockValuesAsString[i];
        });
        this.rotorBottom.forEach((el, i)=>{
            el.textContent = this.prevClockValuesAsString[i];
        });
        function rotorTopFlip() {
            this.rotorTop.forEach((el, i)=>{
                if (el.textContent != this.clockValuesAsString[i]) el.textContent = this.clockValuesAsString[i];
            });
        }
        function rotorLeafRearFlip() {
            this.rotorLeafRear.forEach((el, i)=>{
                if (el.textContent != this.clockValuesAsString[i]) {
                    el.textContent = this.clockValuesAsString[i];
                    el.parentElement.classList.add("flipped");
                    var flip = setInterval((function() {
                        el.parentElement.classList.remove("flipped");
                        clearInterval(flip);
                    }).bind(this), 500);
                }
            });
        }
        // Init
        if (!init) {
            setTimeout(rotorTopFlip.bind(this), 500);
            setTimeout(rotorLeafRearFlip.bind(this), 500);
        } else {
            rotorTopFlip.call(this);
            rotorLeafRearFlip.call(this);
        }
        // Save a copy of clock values for next tick
        this.prevClockValuesAsString = this.clockValuesAsString;
    }
}
/**
 * @name pad
 * @description Prefix a number with zeroes
 * @author PButcher
 * @param {string} n - Number to pad
 * @param {number} len - Desired length of number
 **/ function pad(n, len) {
    n = n.toString();
    return n.length < len ? pad("0" + n, len) : n;
}
/**
 * @name appendChildren
 * @description Add multiple children to an element
 * @author PButcher
 * @param {object} parent - Parent
 **/ function appendChildren(parent, children) {
    children.forEach((el)=>{
        parent.appendChild(el);
    });
}

},{}]},["6EjnU","d5YBw"], "d5YBw", "parcelRequire94c2")

//# sourceMappingURL=index.8f479f79.js.map
