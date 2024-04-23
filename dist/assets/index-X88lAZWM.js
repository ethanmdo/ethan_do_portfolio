(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var es = { exports: {} },
  il = {},
  ts = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zn = Symbol.for("react.element"),
  Lc = Symbol.for("react.portal"),
  Tc = Symbol.for("react.fragment"),
  Mc = Symbol.for("react.strict_mode"),
  Oc = Symbol.for("react.profiler"),
  Rc = Symbol.for("react.provider"),
  Fc = Symbol.for("react.context"),
  Ic = Symbol.for("react.forward_ref"),
  Dc = Symbol.for("react.suspense"),
  Vc = Symbol.for("react.memo"),
  Hc = Symbol.for("react.lazy"),
  Bo = Symbol.iterator;
function Uc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bo && e[Bo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ns = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rs = Object.assign,
  ls = {};
function sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ls),
    (this.updater = n || ns);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function is() {}
is.prototype = sn.prototype;
function Wi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ls),
    (this.updater = n || ns);
}
var Qi = (Wi.prototype = new is());
Qi.constructor = Wi;
rs(Qi, sn.prototype);
Qi.isPureReactComponent = !0;
var Ao = Array.isArray,
  os = Object.prototype.hasOwnProperty,
  Ki = { current: null },
  us = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      os.call(t, r) && !us.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Zn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ki.current,
  };
}
function Bc(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}
function Ac(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var $o = /\/+/g;
function Cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ac("" + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zn:
          case Lc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Cl(o, 0) : r),
      Ao(l)
        ? ((n = ""),
          e != null && (n = e.replace($o, "$&/") + "/"),
          kr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Yi(l) &&
            (l = Bc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace($o, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ao(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Cl(i, u);
      o += kr(i, t, n, s, l);
    }
  else if (((s = Uc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Cl(i, u++)), (o += kr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function lr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function $c(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Sr = { transition: null },
  Wc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Sr,
    ReactCurrentOwner: Ki,
  };
L.Children = {
  map: lr,
  forEach: function (e, t, n) {
    lr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      lr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      lr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = sn;
L.Fragment = Tc;
L.Profiler = Oc;
L.PureComponent = Wi;
L.StrictMode = Mc;
L.Suspense = Dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wc;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = rs({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ki.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      os.call(t, s) &&
        !us.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = ss;
L.createFactory = function (e) {
  var t = ss.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Ic, render: e };
};
L.isValidElement = Yi;
L.lazy = function (e) {
  return { $$typeof: Hc, _payload: { _status: -1, _result: e }, _init: $c };
};
L.memo = function (e, t) {
  return { $$typeof: Vc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
L.useContext = function (e) {
  return se.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
L.useId = function () {
  return se.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return se.current.useRef(e);
};
L.useState = function (e) {
  return se.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return se.current.useTransition();
};
L.version = "18.2.0";
ts.exports = L;
var de = ts.exports;
const it = Pc(de);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qc = de,
  Kc = Symbol.for("react.element"),
  Yc = Symbol.for("react.fragment"),
  Xc = Object.prototype.hasOwnProperty,
  Gc = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function as(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Xc.call(t, r) && !Jc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Kc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Gc.current,
  };
}
il.Fragment = Yc;
il.jsx = as;
il.jsxs = as;
es.exports = il;
var p = es.exports,
  Zl = {},
  cs = { exports: {} },
  ke = {},
  fs = { exports: {} },
  ds = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, z) {
    var P = N.length;
    N.push(z);
    e: for (; 0 < P; ) {
      var Q = (P - 1) >>> 1,
        J = N[Q];
      if (0 < l(J, z)) (N[Q] = z), (N[P] = J), (P = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var z = N[0],
      P = N.pop();
    if (P !== z) {
      N[0] = P;
      e: for (var Q = 0, J = N.length, nr = J >>> 1; Q < nr; ) {
        var wt = 2 * (Q + 1) - 1,
          Nl = N[wt],
          xt = wt + 1,
          rr = N[xt];
        if (0 > l(Nl, P))
          xt < J && 0 > l(rr, Nl)
            ? ((N[Q] = rr), (N[xt] = P), (Q = xt))
            : ((N[Q] = Nl), (N[wt] = P), (Q = wt));
        else if (xt < J && 0 > l(rr, P)) (N[Q] = rr), (N[xt] = P), (Q = xt);
        else break e;
      }
    }
    return z;
  }
  function l(N, z) {
    var P = N.sortIndex - z.sortIndex;
    return P !== 0 ? P : N.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    v = null,
    m = 3,
    w = !1,
    x = !1,
    k = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= N)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function g(N) {
    if (((k = !1), d(N), !x))
      if (n(s) !== null) (x = !0), Sl(E);
      else {
        var z = n(c);
        z !== null && El(g, z.startTime - N);
      }
  }
  function E(N, z) {
    (x = !1), k && ((k = !1), f(_), (_ = -1)), (w = !0);
    var P = m;
    try {
      for (
        d(z), v = n(s);
        v !== null && (!(v.expirationTime > z) || (N && !Pe()));

      ) {
        var Q = v.callback;
        if (typeof Q == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var J = Q(v.expirationTime <= z);
          (z = e.unstable_now()),
            typeof J == "function" ? (v.callback = J) : v === n(s) && r(s),
            d(z);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var nr = !0;
      else {
        var wt = n(c);
        wt !== null && El(g, wt.startTime - z), (nr = !1);
      }
      return nr;
    } finally {
      (v = null), (m = P), (w = !1);
    }
  }
  var C = !1,
    j = null,
    _ = -1,
    W = 5,
    T = -1;
  function Pe() {
    return !(e.unstable_now() - T < W);
  }
  function fn() {
    if (j !== null) {
      var N = e.unstable_now();
      T = N;
      var z = !0;
      try {
        z = j(!0, N);
      } finally {
        z ? dn() : ((C = !1), (j = null));
      }
    } else C = !1;
  }
  var dn;
  if (typeof a == "function")
    dn = function () {
      a(fn);
    };
  else if (typeof MessageChannel < "u") {
    var Uo = new MessageChannel(),
      zc = Uo.port2;
    (Uo.port1.onmessage = fn),
      (dn = function () {
        zc.postMessage(null);
      });
  } else
    dn = function () {
      D(fn, 0);
    };
  function Sl(N) {
    (j = N), C || ((C = !0), dn());
  }
  function El(N, z) {
    _ = D(function () {
      N(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), Sl(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var P = m;
      m = z;
      try {
        return N();
      } finally {
        m = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, z) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var P = m;
      m = N;
      try {
        return z();
      } finally {
        m = P;
      }
    }),
    (e.unstable_scheduleCallback = function (N, z, P) {
      var Q = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? Q + P : Q))
          : (P = Q),
        N)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = P + J),
        (N = {
          id: h++,
          callback: z,
          priorityLevel: N,
          startTime: P,
          expirationTime: J,
          sortIndex: -1,
        }),
        P > Q
          ? ((N.sortIndex = P),
            t(c, N),
            n(s) === null &&
              N === n(c) &&
              (k ? (f(_), (_ = -1)) : (k = !0), El(g, P - Q)))
          : ((N.sortIndex = J), t(s, N), x || w || ((x = !0), Sl(E))),
        N
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (N) {
      var z = m;
      return function () {
        var P = m;
        m = z;
        try {
          return N.apply(this, arguments);
        } finally {
          m = P;
        }
      };
    });
})(ds);
fs.exports = ds;
var Zc = fs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ps = de,
  xe = Zc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ms = new Set(),
  Rn = {};
function Ot(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) ms.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ql = Object.prototype.hasOwnProperty,
  qc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wo = {},
  Qo = {};
function bc(e) {
  return ql.call(Qo, e)
    ? !0
    : ql.call(Wo, e)
    ? !1
    : qc.test(e)
    ? (Qo[e] = !0)
    : ((Wo[e] = !0), !1);
}
function ef(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tf(e, t, n, r) {
  if (t === null || typeof t > "u" || ef(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xi = /[\-:]([a-z])/g;
function Gi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xi, Gi);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xi, Gi);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xi, Gi);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ji(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (tf(t, n, l, r) && (n = null),
    r || l === null
      ? bc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = ps.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ir = Symbol.for("react.element"),
  It = Symbol.for("react.portal"),
  Dt = Symbol.for("react.fragment"),
  Zi = Symbol.for("react.strict_mode"),
  bl = Symbol.for("react.profiler"),
  hs = Symbol.for("react.provider"),
  vs = Symbol.for("react.context"),
  qi = Symbol.for("react.forward_ref"),
  ei = Symbol.for("react.suspense"),
  ti = Symbol.for("react.suspense_list"),
  bi = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  gs = Symbol.for("react.offscreen"),
  Ko = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ko && e[Ko]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  jl;
function kn(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jl = (t && t[1]) || "";
    }
  return (
    `
` +
    jl +
    e
  );
}
var _l = !1;
function zl(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (_l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function nf(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zl(e.type, !1)), e;
    case 11:
      return (e = zl(e.type.render, !1)), e;
    case 1:
      return (e = zl(e.type, !0)), e;
    default:
      return "";
  }
}
function ni(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case It:
      return "Portal";
    case bl:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case ei:
      return "Suspense";
    case ti:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vs:
        return (e.displayName || "Context") + ".Consumer";
      case hs:
        return (e._context.displayName || "Context") + ".Provider";
      case qi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bi:
        return (
          (t = e.displayName || null), t !== null ? t : ni(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return ni(e(t));
        } catch {}
    }
  return null;
}
function rf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ni(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ys(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function lf(e) {
  var t = ys(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = lf(e));
}
function ws(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ys(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ri(e, t) {
  var n = t.checked;
  return A({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Yo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xs(e, t) {
  (t = t.checked), t != null && Ji(e, "checked", t, !1);
}
function li(e, t) {
  xs(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ii(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ii(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Xo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ii(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Xt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function oi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Go(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function ks(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Jo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ss(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ui(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ss(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ur,
  Es = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ur = ur || document.createElement("div"),
          ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  of = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cn).forEach(function (e) {
  of.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cn[t] = Cn[e]);
  });
});
function Ns(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cn.hasOwnProperty(e) && Cn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Cs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ns(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var uf = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function si(e, t) {
  if (t) {
    if (uf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ai(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ci = null;
function eo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fi = null,
  Gt = null,
  Jt = null;
function Zo(e) {
  if ((e = er(e))) {
    if (typeof fi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = cl(t)), fi(e.stateNode, e.type, t));
  }
}
function js(e) {
  Gt ? (Jt ? Jt.push(e) : (Jt = [e])) : (Gt = e);
}
function _s() {
  if (Gt) {
    var e = Gt,
      t = Jt;
    if (((Jt = Gt = null), Zo(e), t)) for (e = 0; e < t.length; e++) Zo(t[e]);
  }
}
function zs(e, t) {
  return e(t);
}
function Ps() {}
var Pl = !1;
function Ls(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return zs(e, t, n);
  } finally {
    (Pl = !1), (Gt !== null || Jt !== null) && (Ps(), _s());
  }
}
function In(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var di = !1;
if (Ye)
  try {
    var mn = {};
    Object.defineProperty(mn, "passive", {
      get: function () {
        di = !0;
      },
    }),
      window.addEventListener("test", mn, mn),
      window.removeEventListener("test", mn, mn);
  } catch {
    di = !1;
  }
function sf(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var jn = !1,
  Rr = null,
  Fr = !1,
  pi = null,
  af = {
    onError: function (e) {
      (jn = !0), (Rr = e);
    },
  };
function cf(e, t, n, r, l, i, o, u, s) {
  (jn = !1), (Rr = null), sf.apply(af, arguments);
}
function ff(e, t, n, r, l, i, o, u, s) {
  if ((cf.apply(this, arguments), jn)) {
    if (jn) {
      var c = Rr;
      (jn = !1), (Rr = null);
    } else throw Error(y(198));
    Fr || ((Fr = !0), (pi = c));
  }
}
function Rt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ts(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qo(e) {
  if (Rt(e) !== e) throw Error(y(188));
}
function df(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return qo(l), e;
        if (i === r) return qo(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ms(e) {
  return (e = df(e)), e !== null ? Os(e) : null;
}
function Os(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Os(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rs = xe.unstable_scheduleCallback,
  bo = xe.unstable_cancelCallback,
  pf = xe.unstable_shouldYield,
  mf = xe.unstable_requestPaint,
  K = xe.unstable_now,
  hf = xe.unstable_getCurrentPriorityLevel,
  to = xe.unstable_ImmediatePriority,
  Fs = xe.unstable_UserBlockingPriority,
  Ir = xe.unstable_NormalPriority,
  vf = xe.unstable_LowPriority,
  Is = xe.unstable_IdlePriority,
  ol = null,
  Ue = null;
function gf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : xf,
  yf = Math.log,
  wf = Math.LN2;
function xf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((yf(e) / wf) | 0)) | 0;
}
var sr = 64,
  ar = 4194304;
function En(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = En(u)) : ((i &= o), i !== 0 && (r = En(i)));
  } else (o = n & ~l), o !== 0 ? (r = En(o)) : i !== 0 && (r = En(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function kf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Sf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Re(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = kf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function mi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ds() {
  var e = sr;
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function Ef(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function no(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Vs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hs,
  ro,
  Us,
  Bs,
  As,
  hi = !1,
  cr = [],
  ot = null,
  ut = null,
  st = null,
  Dn = new Map(),
  Vn = new Map(),
  tt = [],
  Nf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vn.delete(t.pointerId);
  }
}
function hn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = er(t)), t !== null && ro(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Cf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = hn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (ut = hn(ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (st = hn(st, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Dn.set(i, hn(Dn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vn.set(i, hn(Vn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function $s(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ts(n)), t !== null)) {
          (e.blockedOn = t),
            As(e.priority, function () {
              Us(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ci = r), n.target.dispatchEvent(r), (ci = null);
    } else return (t = er(n)), t !== null && ro(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function tu(e, t, n) {
  Er(e) && n.delete(t);
}
function jf() {
  (hi = !1),
    ot !== null && Er(ot) && (ot = null),
    ut !== null && Er(ut) && (ut = null),
    st !== null && Er(st) && (st = null),
    Dn.forEach(tu),
    Vn.forEach(tu);
}
function vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    hi ||
      ((hi = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, jf)));
}
function Hn(e) {
  function t(l) {
    return vn(l, e);
  }
  if (0 < cr.length) {
    vn(cr[0], e);
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && vn(ot, e),
      ut !== null && vn(ut, e),
      st !== null && vn(st, e),
      Dn.forEach(t),
      Vn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    $s(n), n.blockedOn === null && tt.shift();
}
var Zt = Ze.ReactCurrentBatchConfig,
  Vr = !0;
function _f(e, t, n, r) {
  var l = O,
    i = Zt.transition;
  Zt.transition = null;
  try {
    (O = 1), lo(e, t, n, r);
  } finally {
    (O = l), (Zt.transition = i);
  }
}
function zf(e, t, n, r) {
  var l = O,
    i = Zt.transition;
  Zt.transition = null;
  try {
    (O = 4), lo(e, t, n, r);
  } finally {
    (O = l), (Zt.transition = i);
  }
}
function lo(e, t, n, r) {
  if (Vr) {
    var l = vi(e, t, n, r);
    if (l === null) Ul(e, t, r, Hr, n), eu(e, r);
    else if (Cf(l, e, t, n, r)) r.stopPropagation();
    else if ((eu(e, r), t & 4 && -1 < Nf.indexOf(e))) {
      for (; l !== null; ) {
        var i = er(l);
        if (
          (i !== null && Hs(i),
          (i = vi(e, t, n, r)),
          i === null && Ul(e, t, r, Hr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Hr = null;
function vi(e, t, n, r) {
  if (((Hr = null), (e = eo(r)), (e = Et(e)), e !== null))
    if (((t = Rt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ts(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Hr = e), null;
}
function Ws(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hf()) {
        case to:
          return 1;
        case Fs:
          return 4;
        case Ir:
        case vf:
          return 16;
        case Is:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  io = null,
  Nr = null;
function Qs() {
  if (Nr) return Nr;
  var e,
    t = io,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Nr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fr() {
  return !0;
}
function nu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fr
        : nu),
      (this.isPropagationStopped = nu),
      this
    );
  }
  return (
    A(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {},
      isPersistent: fr,
    }),
    t
  );
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  oo = Se(an),
  bn = A({}, an, { view: 0, detail: 0 }),
  Pf = Se(bn),
  Tl,
  Ml,
  gn,
  ul = A({}, bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== gn &&
            (gn && e.type === "mousemove"
              ? ((Tl = e.screenX - gn.screenX), (Ml = e.screenY - gn.screenY))
              : (Ml = Tl = 0),
            (gn = e)),
          Tl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ml;
    },
  }),
  ru = Se(ul),
  Lf = A({}, ul, { dataTransfer: 0 }),
  Tf = Se(Lf),
  Mf = A({}, bn, { relatedTarget: 0 }),
  Ol = Se(Mf),
  Of = A({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rf = Se(Of),
  Ff = A({}, an, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  If = Se(Ff),
  Df = A({}, an, { data: 0 }),
  lu = Se(Df),
  Vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Hf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Uf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Uf[e]) ? !!t[e] : !1;
}
function uo() {
  return Bf;
}
var Af = A({}, bn, {
    key: function (e) {
      if (e.key) {
        var t = Vf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Hf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uo,
    charCode: function (e) {
      return e.type === "keypress" ? Cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $f = Se(Af),
  Wf = A({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  iu = Se(Wf),
  Qf = A({}, bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uo,
  }),
  Kf = Se(Qf),
  Yf = A({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xf = Se(Yf),
  Gf = A({}, ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Jf = Se(Gf),
  Zf = [9, 13, 27, 32],
  so = Ye && "CompositionEvent" in window,
  _n = null;
Ye && "documentMode" in document && (_n = document.documentMode);
var qf = Ye && "TextEvent" in window && !_n,
  Ks = Ye && (!so || (_n && 8 < _n && 11 >= _n)),
  ou = " ",
  uu = !1;
function Ys(e, t) {
  switch (e) {
    case "keyup":
      return Zf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function bf(e, t) {
  switch (e) {
    case "compositionend":
      return Xs(t);
    case "keypress":
      return t.which !== 32 ? null : ((uu = !0), ou);
    case "textInput":
      return (e = t.data), e === ou && uu ? null : e;
    default:
      return null;
  }
}
function e1(e, t) {
  if (Vt)
    return e === "compositionend" || (!so && Ys(e, t))
      ? ((e = Qs()), (Nr = io = rt = null), (Vt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ks && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var t1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!t1[e.type] : t === "textarea";
}
function Gs(e, t, n, r) {
  js(r),
    (t = Ur(t, "onChange")),
    0 < t.length &&
      ((n = new oo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  Un = null;
function n1(e) {
  oa(e, 0);
}
function sl(e) {
  var t = Bt(e);
  if (ws(t)) return e;
}
function r1(e, t) {
  if (e === "change") return t;
}
var Js = !1;
if (Ye) {
  var Rl;
  if (Ye) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var au = document.createElement("div");
      au.setAttribute("oninput", "return;"),
        (Fl = typeof au.oninput == "function");
    }
    Rl = Fl;
  } else Rl = !1;
  Js = Rl && (!document.documentMode || 9 < document.documentMode);
}
function cu() {
  zn && (zn.detachEvent("onpropertychange", Zs), (Un = zn = null));
}
function Zs(e) {
  if (e.propertyName === "value" && sl(Un)) {
    var t = [];
    Gs(t, Un, e, eo(e)), Ls(n1, t);
  }
}
function l1(e, t, n) {
  e === "focusin"
    ? (cu(), (zn = t), (Un = n), zn.attachEvent("onpropertychange", Zs))
    : e === "focusout" && cu();
}
function i1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return sl(Un);
}
function o1(e, t) {
  if (e === "click") return sl(t);
}
function u1(e, t) {
  if (e === "input" || e === "change") return sl(t);
}
function s1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : s1;
function Bn(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ql.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function du(e, t) {
  var n = fu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fu(n);
  }
}
function qs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bs() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function ao(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function a1(e) {
  var t = bs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ao(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = du(n, i));
        var o = du(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var c1 = Ye && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  gi = null,
  Pn = null,
  yi = !1;
function pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yi ||
    Ht == null ||
    Ht !== Or(r) ||
    ((r = Ht),
    "selectionStart" in r && ao(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && Bn(Pn, r)) ||
      ((Pn = r),
      (r = Ur(gi, "onSelect")),
      0 < r.length &&
        ((t = new oo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function dr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ut = {
    animationend: dr("Animation", "AnimationEnd"),
    animationiteration: dr("Animation", "AnimationIteration"),
    animationstart: dr("Animation", "AnimationStart"),
    transitionend: dr("Transition", "TransitionEnd"),
  },
  Il = {},
  ea = {};
Ye &&
  ((ea = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function al(e) {
  if (Il[e]) return Il[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ea) return (Il[e] = t[n]);
  return e;
}
var ta = al("animationend"),
  na = al("animationiteration"),
  ra = al("animationstart"),
  la = al("transitionend"),
  ia = new Map(),
  mu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vt(e, t) {
  ia.set(e, t), Ot(t, [e]);
}
for (var Dl = 0; Dl < mu.length; Dl++) {
  var Vl = mu[Dl],
    f1 = Vl.toLowerCase(),
    d1 = Vl[0].toUpperCase() + Vl.slice(1);
  vt(f1, "on" + d1);
}
vt(ta, "onAnimationEnd");
vt(na, "onAnimationIteration");
vt(ra, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(la, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
Ot(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ot(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ot(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ot(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ot(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Nn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  p1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function hu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ff(r, t, void 0, e), (e.currentTarget = null);
}
function oa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          hu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          hu(l, u, c), (i = s);
        }
    }
  }
  if (Fr) throw ((e = pi), (Fr = !1), (pi = null), e);
}
function F(e, t) {
  var n = t[Ei];
  n === void 0 && (n = t[Ei] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ua(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), ua(n, e, r, t);
}
var pr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[pr]) {
    (e[pr] = !0),
      ms.forEach(function (n) {
        n !== "selectionchange" && (p1.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pr] || ((t[pr] = !0), Hl("selectionchange", !1, t));
  }
}
function ua(e, t, n, r) {
  switch (Ws(t)) {
    case 1:
      var l = _f;
      break;
    case 4:
      l = zf;
      break;
    default:
      l = lo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !di ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Et(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ls(function () {
    var c = i,
      h = eo(n),
      v = [];
    e: {
      var m = ia.get(e);
      if (m !== void 0) {
        var w = oo,
          x = e;
        switch (e) {
          case "keypress":
            if (Cr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = $f;
            break;
          case "focusin":
            (x = "focus"), (w = Ol);
            break;
          case "focusout":
            (x = "blur"), (w = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            w = Ol;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = ru;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Tf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Kf;
            break;
          case ta:
          case na:
          case ra:
            w = Rf;
            break;
          case la:
            w = Xf;
            break;
          case "scroll":
            w = Pf;
            break;
          case "wheel":
            w = Jf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = If;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = iu;
        }
        var k = (t & 4) !== 0,
          D = !k && e === "scroll",
          f = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = In(a, f)), g != null && k.push($n(a, g, d)))),
            D)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((m = new w(m, x, null, n, h)), v.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ci &&
            (x = n.relatedTarget || n.fromElement) &&
            (Et(x) || x[Xe]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? Et(x) : null),
              x !== null &&
                ((D = Rt(x)), x !== D || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((k = ru),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = iu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (D = w == null ? m : Bt(w)),
            (d = x == null ? m : Bt(x)),
            (m = new k(g, a + "leave", w, n, h)),
            (m.target = D),
            (m.relatedTarget = d),
            (g = null),
            Et(h) === c &&
              ((k = new k(f, a + "enter", x, n, h)),
              (k.target = d),
              (k.relatedTarget = D),
              (g = k)),
            (D = g),
            w && x)
          )
            t: {
              for (k = w, f = x, a = 0, d = k; d; d = Ft(d)) a++;
              for (d = 0, g = f; g; g = Ft(g)) d++;
              for (; 0 < a - d; ) (k = Ft(k)), a--;
              for (; 0 < d - a; ) (f = Ft(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Ft(k)), (f = Ft(f));
              }
              k = null;
            }
          else k = null;
          w !== null && vu(v, m, w, k, !1),
            x !== null && D !== null && vu(v, D, x, k, !0);
        }
      }
      e: {
        if (
          ((m = c ? Bt(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var E = r1;
        else if (su(m))
          if (Js) E = u1;
          else {
            E = i1;
            var C = l1;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = o1);
        if (E && (E = E(e, c))) {
          Gs(v, E, n, h);
          break e;
        }
        C && C(e, m, c),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            ii(m, "number", m.value);
      }
      switch (((C = c ? Bt(c) : window), e)) {
        case "focusin":
          (su(C) || C.contentEditable === "true") &&
            ((Ht = C), (gi = c), (Pn = null));
          break;
        case "focusout":
          Pn = gi = Ht = null;
          break;
        case "mousedown":
          yi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yi = !1), pu(v, n, h);
          break;
        case "selectionchange":
          if (c1) break;
        case "keydown":
        case "keyup":
          pu(v, n, h);
      }
      var j;
      if (so)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Vt
          ? Ys(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Ks &&
          n.locale !== "ko" &&
          (Vt || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Vt && (j = Qs())
            : ((rt = h),
              (io = "value" in rt ? rt.value : rt.textContent),
              (Vt = !0))),
        (C = Ur(c, _)),
        0 < C.length &&
          ((_ = new lu(_, e, null, n, h)),
          v.push({ event: _, listeners: C }),
          j ? (_.data = j) : ((j = Xs(n)), j !== null && (_.data = j)))),
        (j = qf ? bf(e, n) : e1(e, n)) &&
          ((c = Ur(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new lu("onBeforeInput", "beforeinput", null, n, h)),
            v.push({ event: h, listeners: c }),
            (h.data = j)));
    }
    oa(v, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ur(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = In(e, n)),
      i != null && r.unshift($n(e, i, l)),
      (i = In(e, t)),
      i != null && r.push($n(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = In(n, i)), s != null && o.unshift($n(n, s, u)))
        : l || ((s = In(n, i)), s != null && o.push($n(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var m1 = /\r\n?/g,
  h1 = /\u0000|\uFFFD/g;
function gu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      m1,
      `
`
    )
    .replace(h1, "");
}
function mr(e, t, n) {
  if (((t = gu(t)), gu(e) !== t && n)) throw Error(y(425));
}
function Br() {}
var wi = null,
  xi = null;
function ki(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Si = typeof setTimeout == "function" ? setTimeout : void 0,
  v1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yu = typeof Promise == "function" ? Promise : void 0,
  g1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yu < "u"
      ? function (e) {
          return yu.resolve(null).then(e).catch(y1);
        }
      : Si;
function y1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Bl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hn(t);
}
function at(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function wu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + cn,
  Wn = "__reactProps$" + cn,
  Xe = "__reactContainer$" + cn,
  Ei = "__reactEvents$" + cn,
  w1 = "__reactListeners$" + cn,
  x1 = "__reactHandles$" + cn;
function Et(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wu(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = wu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function er(e) {
  return (
    (e = e[He] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function cl(e) {
  return e[Wn] || null;
}
var Ni = [],
  At = -1;
function gt(e) {
  return { current: e };
}
function I(e) {
  0 > At || ((e.current = Ni[At]), (Ni[At] = null), At--);
}
function R(e, t) {
  At++, (Ni[At] = e.current), (e.current = t);
}
var ht = {},
  ie = gt(ht),
  me = gt(!1),
  zt = ht;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  I(me), I(ie);
}
function xu(e, t, n) {
  if (ie.current !== ht) throw Error(y(168));
  R(ie, t), R(me, n);
}
function sa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, rf(e) || "Unknown", l));
  return A({}, n, r);
}
function $r(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (zt = ie.current),
    R(ie, e),
    R(me, me.current),
    !0
  );
}
function ku(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = sa(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(me),
      I(ie),
      R(ie, e))
    : I(me),
    R(me, n);
}
var $e = null,
  fl = !1,
  Al = !1;
function aa(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function k1(e) {
  (fl = !0), aa(e);
}
function yt() {
  if (!Al && $e !== null) {
    Al = !0;
    var e = 0,
      t = O;
    try {
      var n = $e;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (fl = !1);
    } catch (l) {
      throw ($e !== null && ($e = $e.slice(e + 1)), Rs(to, yt), l);
    } finally {
      (O = t), (Al = !1);
    }
  }
  return null;
}
var $t = [],
  Wt = 0,
  Wr = null,
  Qr = 0,
  Ee = [],
  Ne = 0,
  Pt = null,
  We = 1,
  Qe = "";
function kt(e, t) {
  ($t[Wt++] = Qr), ($t[Wt++] = Wr), (Wr = e), (Qr = t);
}
function ca(e, t, n) {
  (Ee[Ne++] = We), (Ee[Ne++] = Qe), (Ee[Ne++] = Pt), (Pt = e);
  var r = We;
  e = Qe;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Re(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Qe = i + e);
  } else (We = (1 << i) | (n << l) | r), (Qe = e);
}
function co(e) {
  e.return !== null && (kt(e, 1), ca(e, 1, 0));
}
function fo(e) {
  for (; e === Wr; )
    (Wr = $t[--Wt]), ($t[Wt] = null), (Qr = $t[--Wt]), ($t[Wt] = null);
  for (; e === Pt; )
    (Pt = Ee[--Ne]),
      (Ee[Ne] = null),
      (Qe = Ee[--Ne]),
      (Ee[Ne] = null),
      (We = Ee[--Ne]),
      (Ee[Ne] = null);
}
var we = null,
  ye = null,
  V = !1,
  Oe = null;
function fa(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = at(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ji(e) {
  if (V) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Su(e, t)) {
        if (Ci(e)) throw Error(y(418));
        t = at(n.nextSibling);
        var r = we;
        t && Su(e, t)
          ? fa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (we = e));
      }
    } else {
      if (Ci(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (we = e);
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function hr(e) {
  if (e !== we) return !1;
  if (!V) return Eu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Ci(e)) throw (da(), Error(y(418)));
    for (; t; ) fa(e, t), (t = at(t.nextSibling));
  }
  if ((Eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function da() {
  for (var e = ye; e; ) e = at(e.nextSibling);
}
function nn() {
  (ye = we = null), (V = !1);
}
function po(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var S1 = Ze.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = A({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Kr = gt(null),
  Yr = null,
  Qt = null,
  mo = null;
function ho() {
  mo = Qt = Yr = null;
}
function vo(e) {
  var t = Kr.current;
  I(Kr), (e._currentValue = t);
}
function _i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qt(e, t) {
  (Yr = e),
    (mo = Qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (mo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qt === null)) {
      if (Yr === null) throw Error(y(308));
      (Qt = e), (Yr.dependencies = { lanes: 0, firstContext: e });
    } else Qt = Qt.next = e;
  return t;
}
var Nt = null;
function go(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function pa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), go(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ge(e, r)
  );
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function yo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ma(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ge(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), go(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ge(e, n)
  );
}
function jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), no(e, n);
  }
}
function Nu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Xr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var v = l.baseState;
    (o = 0), (h = c = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            k = u;
          switch (((m = t), (w = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == "function")) {
                v = x.call(w, v, m);
                break e;
              }
              v = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (m = typeof x == "function" ? x.call(w, v, m) : x),
                m == null)
              )
                break e;
              v = A({}, v, m);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = w), (s = v)) : (h = h.next = w),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = v),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Tt |= o), (e.lanes = o), (e.memoizedState = v);
  }
}
function Cu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ha = new ps.Component().refs;
function zi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : A({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = dt(e),
      i = Ke(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (Fe(t, e, l, r), jr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = dt(e),
      i = Ke(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (Fe(t, e, l, r), jr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = dt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Fe(t, e, r, n), jr(t, e, r));
  },
};
function ju(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bn(n, r) || !Bn(l, i)
      : !0
  );
}
function va(e, t, n) {
  var r = !1,
    l = ht,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((l = he(t) ? zt : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? tn(e, l) : ht)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function _u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ha), yo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = _e(i))
    : ((i = he(t) ? zt : ie.current), (l.context = tn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (zi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Xr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === ha && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function zu(e) {
  var t = e._init;
  return t(e._payload);
}
function ga(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = pt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6
      ? ((a = Gl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, g) {
    var E = d.type;
    return E === Dt
      ? h(f, a, d.props.children, g, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === be &&
            zu(E) === a.type))
      ? ((g = l(a, d.props)), (g.ref = yn(f, a, d)), (g.return = f), g)
      : ((g = Mr(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = yn(f, a, d)),
        (g.return = f),
        g);
  }
  function c(f, a, d, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Jl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, g, E) {
    return a === null || a.tag !== 7
      ? ((a = _t(d, f.mode, g, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function v(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Gl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ir:
          return (
            (d = Mr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = yn(f, null, a)),
            (d.return = f),
            d
          );
        case It:
          return (a = Jl(a, f.mode, d)), (a.return = f), a;
        case be:
          var g = a._init;
          return v(f, g(a._payload), d);
      }
      if (Sn(a) || pn(a))
        return (a = _t(a, f.mode, d, null)), (a.return = f), a;
      vr(f, a);
    }
    return null;
  }
  function m(f, a, d, g) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return d.key === E ? s(f, a, d, g) : null;
        case It:
          return d.key === E ? c(f, a, d, g) : null;
        case be:
          return (E = d._init), m(f, a, E(d._payload), g);
      }
      if (Sn(d) || pn(d)) return E !== null ? null : h(f, a, d, g, null);
      vr(f, d);
    }
    return null;
  }
  function w(f, a, d, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(a, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ir:
          return (f = f.get(g.key === null ? d : g.key) || null), s(a, f, g, E);
        case It:
          return (f = f.get(g.key === null ? d : g.key) || null), c(a, f, g, E);
        case be:
          var C = g._init;
          return w(f, a, d, C(g._payload), E);
      }
      if (Sn(g) || pn(g)) return (f = f.get(d) || null), h(a, f, g, E, null);
      vr(a, g);
    }
    return null;
  }
  function x(f, a, d, g) {
    for (
      var E = null, C = null, j = a, _ = (a = 0), W = null;
      j !== null && _ < d.length;
      _++
    ) {
      j.index > _ ? ((W = j), (j = null)) : (W = j.sibling);
      var T = m(f, j, d[_], g);
      if (T === null) {
        j === null && (j = W);
        break;
      }
      e && j && T.alternate === null && t(f, j),
        (a = i(T, a, _)),
        C === null ? (E = T) : (C.sibling = T),
        (C = T),
        (j = W);
    }
    if (_ === d.length) return n(f, j), V && kt(f, _), E;
    if (j === null) {
      for (; _ < d.length; _++)
        (j = v(f, d[_], g)),
          j !== null &&
            ((a = i(j, a, _)), C === null ? (E = j) : (C.sibling = j), (C = j));
      return V && kt(f, _), E;
    }
    for (j = r(f, j); _ < d.length; _++)
      (W = w(j, f, _, d[_], g)),
        W !== null &&
          (e && W.alternate !== null && j.delete(W.key === null ? _ : W.key),
          (a = i(W, a, _)),
          C === null ? (E = W) : (C.sibling = W),
          (C = W));
    return (
      e &&
        j.forEach(function (Pe) {
          return t(f, Pe);
        }),
      V && kt(f, _),
      E
    );
  }
  function k(f, a, d, g) {
    var E = pn(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var C = (E = null), j = a, _ = (a = 0), W = null, T = d.next();
      j !== null && !T.done;
      _++, T = d.next()
    ) {
      j.index > _ ? ((W = j), (j = null)) : (W = j.sibling);
      var Pe = m(f, j, T.value, g);
      if (Pe === null) {
        j === null && (j = W);
        break;
      }
      e && j && Pe.alternate === null && t(f, j),
        (a = i(Pe, a, _)),
        C === null ? (E = Pe) : (C.sibling = Pe),
        (C = Pe),
        (j = W);
    }
    if (T.done) return n(f, j), V && kt(f, _), E;
    if (j === null) {
      for (; !T.done; _++, T = d.next())
        (T = v(f, T.value, g)),
          T !== null &&
            ((a = i(T, a, _)), C === null ? (E = T) : (C.sibling = T), (C = T));
      return V && kt(f, _), E;
    }
    for (j = r(f, j); !T.done; _++, T = d.next())
      (T = w(j, f, _, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && j.delete(T.key === null ? _ : T.key),
          (a = i(T, a, _)),
          C === null ? (E = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        j.forEach(function (fn) {
          return t(f, fn);
        }),
      V && kt(f, _),
      E
    );
  }
  function D(f, a, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Dt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ir:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === Dt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === be &&
                    zu(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = yn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Dt
              ? ((a = _t(d.props.children, f.mode, g, d.key)),
                (a.return = f),
                (f = a))
              : ((g = Mr(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = yn(f, a, d)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case It:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Jl(d, f.mode, g)), (a.return = f), (f = a);
          }
          return o(f);
        case be:
          return (C = d._init), D(f, a, C(d._payload), g);
      }
      if (Sn(d)) return x(f, a, d, g);
      if (pn(d)) return k(f, a, d, g);
      vr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Gl(d, f.mode, g)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return D;
}
var rn = ga(!0),
  ya = ga(!1),
  tr = {},
  Be = gt(tr),
  Qn = gt(tr),
  Kn = gt(tr);
function Ct(e) {
  if (e === tr) throw Error(y(174));
  return e;
}
function wo(e, t) {
  switch ((R(Kn, t), R(Qn, e), R(Be, tr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ui(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ui(t, e));
  }
  I(Be), R(Be, t);
}
function ln() {
  I(Be), I(Qn), I(Kn);
}
function wa(e) {
  Ct(Kn.current);
  var t = Ct(Be.current),
    n = ui(t, e.type);
  t !== n && (R(Qn, e), R(Be, n));
}
function xo(e) {
  Qn.current === e && (I(Be), I(Qn));
}
var U = gt(0);
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function ko() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var _r = Ze.ReactCurrentDispatcher,
  Wl = Ze.ReactCurrentBatchConfig,
  Lt = 0,
  B = null,
  X = null,
  Z = null,
  Jr = !1,
  Ln = !1,
  Yn = 0,
  E1 = 0;
function ne() {
  throw Error(y(321));
}
function So(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function Eo(e, t, n, r, l, i) {
  if (
    ((Lt = i),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? _1 : z1),
    (e = n(r, l)),
    Ln)
  ) {
    i = 0;
    do {
      if (((Ln = !1), (Yn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (Z = X = null),
        (t.updateQueue = null),
        (_r.current = P1),
        (e = n(r, l));
    } while (Ln);
  }
  if (
    ((_r.current = Zr),
    (t = X !== null && X.next !== null),
    (Lt = 0),
    (Z = X = B = null),
    (Jr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function No() {
  var e = Yn !== 0;
  return (Yn = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function ze() {
  if (X === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = Z === null ? B.memoizedState : Z.next;
  if (t !== null) (Z = t), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Xn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ql(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var h = c.lane;
      if ((Lt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var v = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = v), (o = r)) : (s = s.next = v),
          (B.lanes |= h),
          (Tt |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Ie(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (B.lanes |= i), (Tt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Kl(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ie(i, t.memoizedState) || (pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function xa() {}
function ka(e, t) {
  var n = B,
    r = ze(),
    l = t(),
    i = !Ie(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Co(Na.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gn(9, Ea.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Lt & 30 || Sa(n, t, l);
  }
  return l;
}
function Sa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ea(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ca(t) && ja(e);
}
function Na(e, t, n) {
  return n(function () {
    Ca(t) && ja(e);
  });
}
function Ca(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function ja(e) {
  var t = Ge(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Pu(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = j1.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function Gn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _a() {
  return ze().memoizedState;
}
function zr(e, t, n, r) {
  var l = Ve();
  (B.flags |= e),
    (l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r));
}
function pl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && So(r, o.deps))) {
      l.memoizedState = Gn(t, n, i, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = Gn(1 | t, n, i, r));
}
function Lu(e, t) {
  return zr(8390656, 8, e, t);
}
function Co(e, t) {
  return pl(2048, 8, e, t);
}
function za(e, t) {
  return pl(4, 2, e, t);
}
function Pa(e, t) {
  return pl(4, 4, e, t);
}
function La(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ta(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pl(4, 4, La.bind(null, t, e), n)
  );
}
function jo() {}
function Ma(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && So(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Oa(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && So(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ra(e, t, n) {
  return Lt & 21
    ? (Ie(n, t) || ((n = Ds()), (B.lanes |= n), (Tt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function N1(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Wl.transition = r);
  }
}
function Fa() {
  return ze().memoizedState;
}
function C1(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ia(e))
  )
    Da(t, n);
  else if (((n = pa(e, t, n, r)), n !== null)) {
    var l = ue();
    Fe(n, e, r, l), Va(n, t, r);
  }
}
function j1(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ia(e)) Da(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), go(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = pa(e, t, l, r)),
      n !== null && ((l = ue()), Fe(n, e, r, l), Va(n, t, r));
  }
}
function Ia(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function Da(e, t) {
  Ln = Jr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Va(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), no(e, n);
  }
}
var Zr = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  _1 = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Lu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zr(4194308, 4, La.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = C1.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Pu,
    useDebugValue: jo,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = Pu(!1),
        t = e[0];
      return (e = N1.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Ve();
      if (V) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Lt & 30 || Sa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Lu(Na.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gn(9, Ea.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = q.identifierPrefix;
      if (V) {
        var n = Qe,
          r = We;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = E1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  z1 = {
    readContext: _e,
    useCallback: Ma,
    useContext: _e,
    useEffect: Co,
    useImperativeHandle: Ta,
    useInsertionEffect: za,
    useLayoutEffect: Pa,
    useMemo: Oa,
    useReducer: Ql,
    useRef: _a,
    useState: function () {
      return Ql(Xn);
    },
    useDebugValue: jo,
    useDeferredValue: function (e) {
      var t = ze();
      return Ra(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Xn)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: xa,
    useSyncExternalStore: ka,
    useId: Fa,
    unstable_isNewReconciler: !1,
  },
  P1 = {
    readContext: _e,
    useCallback: Ma,
    useContext: _e,
    useEffect: Co,
    useImperativeHandle: Ta,
    useInsertionEffect: za,
    useLayoutEffect: Pa,
    useMemo: Oa,
    useReducer: Kl,
    useRef: _a,
    useState: function () {
      return Kl(Xn);
    },
    useDebugValue: jo,
    useDeferredValue: function (e) {
      var t = ze();
      return X === null ? (t.memoizedState = e) : Ra(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Kl(Xn)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: xa,
    useSyncExternalStore: ka,
    useId: Fa,
    unstable_isNewReconciler: !1,
  };
function on(e, t) {
  try {
    var n = "",
      r = t;
    do (n += nf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Li(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var L1 = typeof WeakMap == "function" ? WeakMap : Map;
function Ha(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      br || ((br = !0), (Ui = r)), Li(e, t);
    }),
    n
  );
}
function Ua(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Li(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Li(e, t),
          typeof r != "function" &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Tu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new L1();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = W1.bind(null, e, t, n)), t.then(e, e));
}
function Mu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var T1 = Ze.ReactCurrentOwner,
  pe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ya(t, null, n, r) : rn(t, e.child, n, r);
}
function Ru(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    qt(t, l),
    (r = Eo(e, t, n, r, i, l)),
    (n = No()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (V && n && co(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ro(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ba(e, t, i, r, l))
      : ((e = Mr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(o, r) && e.ref === t.ref)
    )
      return Je(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ba(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Je(e, t, l);
  }
  return Ti(e, t, n, r, l);
}
function Aa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Yt, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Yt, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        R(Yt, ge),
        (ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Yt, ge),
      (ge |= r);
  return oe(e, t, l, n), t.child;
}
function $a(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ti(e, t, n, r, l) {
  var i = he(n) ? zt : ie.current;
  return (
    (i = tn(t, i)),
    qt(t, l),
    (n = Eo(e, t, n, r, i, l)),
    (r = No()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (V && r && co(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Iu(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    $r(t);
  } else i = !1;
  if ((qt(t, l), t.stateNode === null))
    Pr(e, t), va(t, n, r), Pi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = he(n) ? zt : ie.current), (c = tn(t, c)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && _u(t, o, r, c)),
      (et = !1);
    var m = t.memoizedState;
    (o.state = m),
      Xr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || me.current || et
        ? (typeof h == "function" && (zi(t, n, h, r), (s = t.memoizedState)),
          (u = et || ju(t, n, u, r, m, s, c))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ma(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = c),
      (v = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = he(n) ? zt : ie.current), (s = tn(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== v || m !== s) && _u(t, o, r, s)),
      (et = !1),
      (m = t.memoizedState),
      (o.state = m),
      Xr(t, r, o, l);
    var x = t.memoizedState;
    u !== v || m !== x || me.current || et
      ? (typeof w == "function" && (zi(t, n, w, r), (x = t.memoizedState)),
        (c = et || ju(t, n, c, r, m, x, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Mi(e, t, n, r, i, l);
}
function Mi(e, t, n, r, l, i) {
  $a(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ku(t, n, !1), Je(e, t, i);
  (r = t.stateNode), (T1.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = rn(t, e.child, null, i)), (t.child = rn(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && ku(t, n, !0),
    t.child
  );
}
function Wa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xu(e, t.context, !1),
    wo(e, t.containerInfo);
}
function Du(e, t, n, r, l) {
  return nn(), po(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ri(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qa(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    R(U, l & 1),
    e === null)
  )
    return (
      ji(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = vl(o, r, 0, null)),
              (e = _t(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ri(n)),
              (t.memoizedState = Oi),
              e)
            : _o(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return M1(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = pt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = pt(u, i)) : ((i = _t(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ri(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _o(e, t) {
  return (
    (t = vl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && po(r),
    rn(t, e.child, null, n),
    (e = _o(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function M1(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yl(Error(y(422)))), gr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = vl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = _t(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && rn(t, e.child, null, o),
        (t.child.memoizedState = Ri(o)),
        (t.memoizedState = Oi),
        i);
  if (!(t.mode & 1)) return gr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Yl(i, r, void 0)), gr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), pe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ge(e, l), Fe(r, e, l, -1));
    }
    return Oo(), (r = Yl(Error(y(421)))), gr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Q1.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = at(l.nextSibling)),
      (we = t),
      (V = !0),
      (Oe = null),
      e !== null &&
        ((Ee[Ne++] = We),
        (Ee[Ne++] = Qe),
        (Ee[Ne++] = Pt),
        (We = e.id),
        (Qe = e.overflow),
        (Pt = t)),
      (t = _o(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _i(e.return, t, n);
}
function Xl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Ka(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vu(e, n, t);
        else if (e.tag === 19) Vu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((R(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Xl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Xl(t, !0, n, null, i);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function O1(e, t, n) {
  switch (t.tag) {
    case 3:
      Wa(t), nn();
      break;
    case 5:
      wa(t);
      break;
    case 1:
      he(t.type) && $r(t);
      break;
    case 4:
      wo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      R(Kr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qa(e, t, n)
          : (R(U, U.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      R(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ka(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Aa(e, t, n);
  }
  return Je(e, t, n);
}
var Ya, Fi, Xa, Ga;
Ya = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fi = function () {};
Xa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ct(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = oi(e, l)), (r = oi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Br);
    }
    si(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Rn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Rn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && F("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ga = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function R1(e, t, n) {
  var r = t.pendingProps;
  switch ((fo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return he(t.type) && Ar(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ln(),
        I(me),
        I(ie),
        ko(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && ($i(Oe), (Oe = null)))),
        Fi(e, t),
        re(t),
        null
      );
    case 5:
      xo(t);
      var l = Ct(Kn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = Ct(Be.current)), hr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[He] = t), (r[Wn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nn.length; l++) F(Nn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Yo(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Go(r, i), F("invalid", r);
          }
          si(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Rn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              or(r), Xo(r, i, !0);
              break;
            case "textarea":
              or(r), Jo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ss(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[He] = t),
            (e[Wn] = r),
            Ya(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ai(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nn.length; l++) F(Nn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Yo(e, r), (l = ri(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Go(e, r), (l = oi(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            si(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Cs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Es(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Fn(e, s)
                    : typeof s == "number" && Fn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Rn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && F("scroll", e)
                      : s != null && Ji(e, i, s, o));
              }
            switch (n) {
              case "input":
                or(e), Xo(e, r, !1);
                break;
              case "textarea":
                or(e), Jo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Xt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Xt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ga(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Ct(Kn.current)), Ct(Be.current), hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (I(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ye !== null && t.mode & 1 && !(t.flags & 128))
          da(), nn(), (t.flags |= 98560), (i = !1);
        else if (((i = hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[He] = t;
          } else
            nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Oe !== null && ($i(Oe), (Oe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? G === 0 && (G = 3) : Oo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        ln(), Fi(e, t), e === null && An(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return vo(t.type._context), re(t), null;
    case 17:
      return he(t.type) && Ar(), re(t), null;
    case 19:
      if ((I(U), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) wn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Gr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    wn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return R(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > un &&
            ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !V)
            )
              return re(t), null;
          } else
            2 * K() - i.renderingStartTime > un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = U.current),
          R(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Mo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function F1(e, t) {
  switch ((fo(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Ar(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ln(),
        I(me),
        I(ie),
        ko(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xo(t), null;
    case 13:
      if ((I(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I(U), null;
    case 4:
      return ln(), null;
    case 10:
      return vo(t.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1,
  le = !1,
  I1 = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        $(e, t, r);
      }
    else n.current = null;
}
function Ii(e, t, n) {
  try {
    n();
  } catch (r) {
    $(e, t, r);
  }
}
var Hu = !1;
function D1(e, t) {
  if (((wi = Vr), (e = bs()), ao(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = o + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (s = o + r),
                v.nodeType === 3 && (o += v.nodeValue.length),
                (w = v.firstChild) !== null;

            )
              (m = v), (v = w);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++c === l && (u = o),
                m === i && ++h === r && (s = o),
                (w = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xi = { focusedElem: e, selectionRange: n }, Vr = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    D = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Te(t.type, k),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          $(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (x = Hu), (Hu = !1), x;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ii(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Di(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ja(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ja(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[Wn], delete t[Ei], delete t[w1], delete t[x1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Za(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Za(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), (e = e.sibling);
}
function Hi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hi(e, t, n), e = e.sibling; e !== null; ) Hi(e, t, n), (e = e.sibling);
}
var b = null,
  Me = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) qa(e, t, n), (n = n.sibling);
}
function qa(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ol, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Kt(n, t);
    case 6:
      var r = b,
        l = Me;
      (b = null),
        qe(e, t, n),
        (b = r),
        (Me = l),
        b !== null &&
          (Me
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Me
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Bl(e.parentNode, n)
              : e.nodeType === 1 && Bl(e, n),
            Hn(e))
          : Bl(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Me),
        (b = n.stateNode.containerInfo),
        (Me = !0),
        qe(e, t, n),
        (b = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ii(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Kt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          $(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), qe(e, t, n), (le = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new I1()),
      t.forEach(function (r) {
        var l = K1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Me = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        qa(i, o, l), (b = null), (Me = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        $(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ba(t, e), (t = t.sibling);
}
function ba(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), De(e), r & 4)) {
        try {
          Tn(3, e, e.return), ml(3, e);
        } catch (k) {
          $(e, e.return, k);
        }
        try {
          Tn(5, e, e.return);
        } catch (k) {
          $(e, e.return, k);
        }
      }
      break;
    case 1:
      Le(t, e), De(e), r & 512 && n !== null && Kt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        De(e),
        r & 512 && n !== null && Kt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Fn(l, "");
        } catch (k) {
          $(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && xs(l, i),
              ai(u, o);
            var c = ai(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                v = s[o + 1];
              h === "style"
                ? Cs(l, v)
                : h === "dangerouslySetInnerHTML"
                ? Es(l, v)
                : h === "children"
                ? Fn(l, v)
                : Ji(l, h, v, c);
            }
            switch (u) {
              case "input":
                li(l, i);
                break;
              case "textarea":
                ks(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Xt(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Xt(l, !!i.multiple, i.defaultValue, !0)
                      : Xt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Wn] = i;
          } catch (k) {
            $(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Le(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          $(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (k) {
          $(e, e.return, k);
        }
      break;
    case 4:
      Le(t, e), De(e);
      break;
    case 13:
      Le(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Lo = K())),
        r & 4 && Bu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || h), Le(t, e), (le = c)) : Le(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (S = e, h = e.child; h !== null; ) {
            for (v = S = h; S !== null; ) {
              switch (((m = S), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, m, m.return);
                  break;
                case 1:
                  Kt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (k) {
                      $(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Kt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    $u(v);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (S = w)) : $u(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                (l = v.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = v.stateNode),
                      (s = v.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ns("display", o)));
              } catch (k) {
                $(e, e.return, k);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = c ? "" : v.memoizedProps;
              } catch (k) {
                $(e, e.return, k);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), (v = v.return);
          }
          h === v && (h = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), De(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Za(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
          var i = Uu(e);
          Hi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Uu(e);
          Vi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      $(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function V1(e, t, n) {
  (S = e), ec(e);
}
function ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || yr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = yr;
        var c = le;
        if (((yr = o), (le = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Wu(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : Wu(l);
        for (; i !== null; ) (S = i), ec(i), (i = i.sibling);
        (S = l), (yr = u), (le = c);
      }
      Au(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Au(e);
  }
}
function Au(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Cu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Cu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && Hn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (t.flags & 512 && Di(t));
      } catch (m) {
        $(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function $u(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Wu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (s) {
            $(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              $(t, l, s);
            }
          }
          var i = t.return;
          try {
            Di(t);
          } catch (s) {
            $(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Di(t);
          } catch (s) {
            $(t, o, s);
          }
      }
    } catch (s) {
      $(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var H1 = Math.ceil,
  qr = Ze.ReactCurrentDispatcher,
  zo = Ze.ReactCurrentOwner,
  je = Ze.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  Y = null,
  ee = 0,
  ge = 0,
  Yt = gt(0),
  G = 0,
  Jn = null,
  Tt = 0,
  hl = 0,
  Po = 0,
  Mn = null,
  ce = null,
  Lo = 0,
  un = 1 / 0,
  Ae = null,
  br = !1,
  Ui = null,
  ft = null,
  wr = !1,
  lt = null,
  el = 0,
  On = 0,
  Bi = null,
  Lr = -1,
  Tr = 0;
function ue() {
  return M & 6 ? K() : Lr !== -1 ? Lr : (Lr = K());
}
function dt(e) {
  return e.mode & 1
    ? M & 2 && ee !== 0
      ? ee & -ee
      : S1.transition !== null
      ? (Tr === 0 && (Tr = Ds()), Tr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ws(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < On) throw ((On = 0), (Bi = null), Error(y(185)));
  qn(e, n, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (hl |= n), G === 4 && nt(e, ee)),
      ve(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((un = K() + 500), fl && yt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Sf(e, t);
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && bo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bo(n), t === 1))
      e.tag === 0 ? k1(Qu.bind(null, e)) : aa(Qu.bind(null, e)),
        g1(function () {
          !(M & 6) && yt();
        }),
        (n = null);
    else {
      switch (Vs(r)) {
        case 1:
          n = to;
          break;
        case 4:
          n = Fs;
          break;
        case 16:
          n = Ir;
          break;
        case 536870912:
          n = Is;
          break;
        default:
          n = Ir;
      }
      n = sc(n, tc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function tc(e, t) {
  if (((Lr = -1), (Tr = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (bt() && e.callbackNode !== n) return null;
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = rc();
    (q !== e || ee !== t) && ((Ae = null), (un = K() + 500), jt(e, t));
    do
      try {
        A1();
        break;
      } catch (u) {
        nc(e, u);
      }
    while (!0);
    ho(),
      (qr.current = i),
      (M = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = mi(e)), l !== 0 && ((r = l), (t = Ai(e, l)))), t === 1)
    )
      throw ((n = Jn), jt(e, 0), nt(e, r), ve(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !U1(l) &&
          ((t = tl(e, r)),
          t === 2 && ((i = mi(e)), i !== 0 && ((r = i), (t = Ai(e, i)))),
          t === 1))
      )
        throw ((n = Jn), jt(e, 0), nt(e, r), ve(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          St(e, ce, Ae);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Lo + 500 - K()), 10 < t))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Si(St.bind(null, e, ce, Ae), t);
            break;
          }
          St(e, ce, Ae);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * H1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Si(St.bind(null, e, ce, Ae), r);
            break;
          }
          St(e, ce, Ae);
          break;
        case 5:
          St(e, ce, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ve(e, K()), e.callbackNode === n ? tc.bind(null, e) : null;
}
function Ai(e, t) {
  var n = Mn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && $i(t)),
    e
  );
}
function $i(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function U1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Po,
      t &= ~hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qu(e) {
  if (M & 6) throw Error(y(327));
  bt();
  var t = Dr(e, 0);
  if (!(t & 1)) return ve(e, K()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = mi(e);
    r !== 0 && ((t = r), (n = Ai(e, r)));
  }
  if (n === 1) throw ((n = Jn), jt(e, 0), nt(e, t), ve(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    St(e, ce, Ae),
    ve(e, K()),
    null
  );
}
function To(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((un = K() + 500), fl && yt());
  }
}
function Mt(e) {
  lt !== null && lt.tag === 0 && !(M & 6) && bt();
  var t = M;
  M |= 1;
  var n = je.transition,
    r = O;
  try {
    if (((je.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (je.transition = n), (M = t), !(M & 6) && yt();
  }
}
function Mo() {
  (ge = Yt.current), I(Yt);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), v1(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((fo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          ln(), I(me), I(ie), ko();
          break;
        case 5:
          xo(r);
          break;
        case 4:
          ln();
          break;
        case 13:
          I(U);
          break;
        case 19:
          I(U);
          break;
        case 10:
          vo(r.type._context);
          break;
        case 22:
        case 23:
          Mo();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = pt(e.current, null)),
    (ee = ge = t),
    (G = 0),
    (Jn = null),
    (Po = hl = Tt = 0),
    (ce = Mn = null),
    Nt !== null)
  ) {
    for (t = 0; t < Nt.length; t++)
      if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function nc(e, t) {
  do {
    var n = Y;
    try {
      if ((ho(), (_r.current = Zr), Jr)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Jr = !1;
      }
      if (
        ((Lt = 0),
        (Z = X = B = null),
        (Ln = !1),
        (Yn = 0),
        (zo.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Jn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = Mu(o);
          if (w !== null) {
            (w.flags &= -257),
              Ou(w, o, u, i, t),
              w.mode & 1 && Tu(i, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Tu(i, c, t), Oo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (V && u.mode & 1) {
          var D = Mu(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Ou(D, o, u, i, t),
              po(on(s, u));
            break e;
          }
        }
        (i = s = on(s, u)),
          G !== 4 && (G = 2),
          Mn === null ? (Mn = [i]) : Mn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ha(i, s, t);
              Nu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ft === null || !ft.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Ua(i, u, t);
                Nu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ic(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rc() {
  var e = qr.current;
  return (qr.current = Zr), e === null ? Zr : e;
}
function Oo() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(Tt & 268435455) && !(hl & 268435455)) || nt(q, ee);
}
function tl(e, t) {
  var n = M;
  M |= 2;
  var r = rc();
  (q !== e || ee !== t) && ((Ae = null), jt(e, t));
  do
    try {
      B1();
      break;
    } catch (l) {
      nc(e, l);
    }
  while (!0);
  if ((ho(), (M = n), (qr.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), G;
}
function B1() {
  for (; Y !== null; ) lc(Y);
}
function A1() {
  for (; Y !== null && !pf(); ) lc(Y);
}
function lc(e) {
  var t = uc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? ic(e) : (Y = t),
    (zo.current = null);
}
function ic(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = F1(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    } else if (((n = R1(n, t, ge)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function St(e, t, n) {
  var r = O,
    l = je.transition;
  try {
    (je.transition = null), (O = 1), $1(e, t, n, r);
  } finally {
    (je.transition = l), (O = r);
  }
  return null;
}
function $1(e, t, n, r) {
  do bt();
  while (lt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Ef(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wr ||
      ((wr = !0),
      sc(Ir, function () {
        return bt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = je.transition), (je.transition = null);
    var o = O;
    O = 1;
    var u = M;
    (M |= 4),
      (zo.current = null),
      D1(e, n),
      ba(n, e),
      a1(xi),
      (Vr = !!wi),
      (xi = wi = null),
      (e.current = n),
      V1(n),
      mf(),
      (M = u),
      (O = o),
      (je.transition = i);
  } else e.current = n;
  if (
    (wr && ((wr = !1), (lt = e), (el = l)),
    (i = e.pendingLanes),
    i === 0 && (ft = null),
    gf(n.stateNode),
    ve(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw ((br = !1), (e = Ui), (Ui = null), e);
  return (
    el & 1 && e.tag !== 0 && bt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Bi ? On++ : ((On = 0), (Bi = e))) : (On = 0),
    yt(),
    null
  );
}
function bt() {
  if (lt !== null) {
    var e = Vs(el),
      t = je.transition,
      n = O;
    try {
      if (((je.transition = null), (O = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (el = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, h, i);
                  }
                  var v = h.child;
                  if (v !== null) (v.return = h), (S = v);
                  else
                    for (; S !== null; ) {
                      h = S;
                      var m = h.sibling,
                        w = h.return;
                      if ((Ja(h), h === c)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (S = m);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var D = k.sibling;
                    (k.sibling = null), (k = D);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d);
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, u);
                  }
                } catch (E) {
                  $(u, u.return, E);
                }
              if (u === o) {
                S = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (S = g);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((M = l), yt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (je.transition = t);
    }
  }
  return !1;
}
function Ku(e, t, n) {
  (t = on(n, t)),
    (t = Ha(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = ue()),
    e !== null && (qn(e, 1, t), ve(e, t));
}
function $(e, t, n) {
  if (e.tag === 3) Ku(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ku(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ft === null || !ft.has(r)))
        ) {
          (e = on(n, e)),
            (e = Ua(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = ue()),
            t !== null && (qn(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function W1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - Lo)
        ? jt(e, 0)
        : (Po |= n)),
    ve(e, t);
}
function oc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ar), (ar <<= 1), !(ar & 130023424) && (ar = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ge(e, t)), e !== null && (qn(e, t, n), ve(e, n));
}
function Q1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), oc(e, n);
}
function K1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), oc(e, n);
}
var uc;
uc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), O1(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), V && t.flags & 1048576 && ca(t, Qr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = tn(t, ie.current);
      qt(t, n), (l = Eo(null, t, r, e, l, n));
      var i = No();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), $r(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yo(t),
            (l.updater = dl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Pi(t, r, e, n),
            (t = Mi(null, t, r, !0, i, n)))
          : ((t.tag = 0), V && i && co(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = X1(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Ti(null, t, r, e, n);
            break e;
          case 1:
            t = Iu(null, t, r, e, n);
            break e;
          case 11:
            t = Ru(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ti(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Iu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Wa(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ma(e, t),
          Xr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = on(Error(y(423)), t)), (t = Du(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = on(Error(y(424)), t)), (t = Du(e, t, r, n, l));
            break e;
          } else
            for (
              ye = at(t.stateNode.containerInfo.firstChild),
                we = t,
                V = !0,
                Oe = null,
                n = ya(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nn(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wa(t),
        e === null && ji(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        ki(r, l) ? (o = null) : i !== null && ki(r, i) && (t.flags |= 32),
        $a(e, t),
        oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ji(t), null;
    case 13:
      return Qa(e, t, n);
    case 4:
      return (
        wo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ru(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          R(Kr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ie(i.value, o)) {
            if (i.children === l.children && !me.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ke(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      _i(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  _i(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        qt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Fu(e, t, r, l, n)
      );
    case 15:
      return Ba(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Pr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), $r(t)) : (e = !1),
        qt(t, n),
        va(t, r, l),
        Pi(t, r, l, n),
        Mi(null, t, r, !0, e, n)
      );
    case 19:
      return Ka(e, t, n);
    case 22:
      return Aa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function sc(e, t) {
  return Rs(e, t);
}
function Y1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new Y1(e, t, n, r);
}
function Ro(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function X1(e) {
  if (typeof e == "function") return Ro(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qi)) return 11;
    if (e === bi) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Mr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ro(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Dt:
        return _t(n.children, l, i, t);
      case Zi:
        (o = 8), (l |= 8);
        break;
      case bl:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = bl), (e.lanes = i), e
        );
      case ei:
        return (e = Ce(13, n, t, l)), (e.elementType = ei), (e.lanes = i), e;
      case ti:
        return (e = Ce(19, n, t, l)), (e.elementType = ti), (e.lanes = i), e;
      case gs:
        return vl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hs:
              o = 10;
              break e;
            case vs:
              o = 9;
              break e;
            case qi:
              o = 11;
              break e;
            case bi:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function _t(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function vl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = gs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gl(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function Jl(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function G1(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Fo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new G1(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yo(i),
    e
  );
}
function J1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: It,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ac(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return sa(e, n, t);
  }
  return t;
}
function cc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Fo(n, r, !0, e, l, i, o, u, s)),
    (e.context = ac(null)),
    (n = e.current),
    (r = ue()),
    (l = dt(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    ct(n, i, l),
    (e.current.lanes = l),
    qn(e, l, r),
    ve(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = dt(l);
  return (
    (n = ac(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, o)),
    e !== null && (Fe(e, l, o, i), jr(e, l, o)),
    o
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Io(e, t) {
  Yu(e, t), (e = e.alternate) && Yu(e, t);
}
function Z1() {
  return null;
}
var fc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Do(e) {
  this._internalRoot = e;
}
yl.prototype.render = Do.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  gl(e, t, null, null);
};
yl.prototype.unmount = Do.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function () {
      gl(null, e, null, null);
    }),
      (t[Xe] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && $s(e);
  }
};
function Vo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Xu() {}
function q1(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = nl(o);
        i.call(c);
      };
    }
    var o = cc(t, r, e, 0, null, !1, !1, "", Xu);
    return (
      (e._reactRootContainer = o),
      (e[Xe] = o.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = nl(s);
      u.call(c);
    };
  }
  var s = Fo(e, 0, !1, null, null, !1, !1, "", Xu);
  return (
    (e._reactRootContainer = s),
    (e[Xe] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      gl(t, s, n, r);
    }),
    s
  );
}
function xl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = nl(o);
        u.call(s);
      };
    }
    gl(t, o, e, l);
  } else o = q1(n, t, e, l, r);
  return nl(o);
}
Hs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = En(t.pendingLanes);
        n !== 0 &&
          (no(t, n | 1), ve(t, K()), !(M & 6) && ((un = K() + 500), yt()));
      }
      break;
    case 13:
      Mt(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ue();
          Fe(r, e, 1, l);
        }
      }),
        Io(e, 1);
  }
};
ro = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ue();
      Fe(t, e, 134217728, n);
    }
    Io(e, 134217728);
  }
};
Us = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Ge(e, t);
    if (n !== null) {
      var r = ue();
      Fe(n, e, t, r);
    }
    Io(e, t);
  }
};
Bs = function () {
  return O;
};
As = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
fi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((li(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = cl(r);
            if (!l) throw Error(y(90));
            ws(r), li(r, l);
          }
        }
      }
      break;
    case "textarea":
      ks(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
  }
};
zs = To;
Ps = Mt;
var b1 = { usingClientEntryPoint: !1, Events: [er, Bt, cl, js, _s, To] },
  xn = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ed = {
    bundleType: xn.bundleType,
    version: xn.version,
    rendererPackageName: xn.rendererPackageName,
    rendererConfig: xn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ms(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: xn.findFiberByHostInstance || Z1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xr.isDisabled && xr.supportsFiber)
    try {
      (ol = xr.inject(ed)), (Ue = xr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b1;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vo(t)) throw Error(y(200));
  return J1(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Vo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = fc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Xe] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Do(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ms(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return Mt(e);
};
ke.hydrate = function (e, t, n) {
  if (!wl(t)) throw Error(y(200));
  return xl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Vo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = fc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = cc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Xe] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new yl(t);
};
ke.render = function (e, t, n) {
  if (!wl(t)) throw Error(y(200));
  return xl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!wl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Mt(function () {
        xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = To;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return xl(e, t, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
function dc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc);
    } catch (e) {
      console.error(e);
    }
}
dc(), (cs.exports = ke);
var td = cs.exports,
  Gu = td;
(Zl.createRoot = Gu.createRoot), (Zl.hydrateRoot = Gu.hydrateRoot);
var pc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ju = it.createContext && it.createContext(pc),
  nd = ["attr", "size", "title"];
function rd(e, t) {
  if (e == null) return {};
  var n = ld(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function ld(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function rl() {
  return (
    (rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rl.apply(this, arguments)
  );
}
function Zu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zu(Object(n), !0).forEach(function (r) {
          id(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Zu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function id(e, t, n) {
  return (
    (t = od(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function od(e) {
  var t = ud(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function ud(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mc(e) {
  return (
    e &&
    e.map((t, n) =>
      it.createElement(t.tag, ll({ key: n }, t.attr), mc(t.child))
    )
  );
}
function H(e) {
  return (t) =>
    it.createElement(sd, rl({ attr: ll({}, e.attr) }, t), mc(e.child));
}
function sd(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = rd(e, nd),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      it.createElement(
        "svg",
        rl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: s,
            style: ll(ll({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && it.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ju !== void 0
    ? it.createElement(Ju.Consumer, null, (n) => t(n))
    : t(pc);
}
function ad(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function hc(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function cd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
        },
        child: [],
      },
    ],
  })(e);
}
function vc(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function fd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function dd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function gc(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function pd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function md(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function yc(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
        },
        child: [],
      },
    ],
  })(e);
}
function hd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
        },
        child: [],
      },
    ],
  })(e);
}
function vd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z",
        },
        child: [],
      },
    ],
  })(e);
}
function gd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function yd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z",
        },
        child: [],
      },
    ],
  })(e);
}
function wd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
        },
        child: [],
      },
    ],
  })(e);
}
function xd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function kd(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
        },
        child: [],
      },
    ],
  })(e);
}
const Sd = () => {
    const [e, t] = de.useState(!1),
      n = (l) => {
        const i = document.getElementById(l);
        i && i.scrollIntoView({ behavior: "smooth", block: "start" });
      };
    de.useEffect(() => {
      const l = () => {
        window.innerWidth >= 768 && e && t(!1);
      };
      return (
        window.addEventListener("resize", l),
        () => window.removeEventListener("resize", l)
      );
    }, [e]);
    const r = [
      { id: "home-section", link: "home" },
      { id: "about-section", link: "about" },
      { id: "projects-section", link: "projects" },
      { id: "experience-section", link: "experience" },
      { id: "contact-section", link: "contact" },
    ];
    return p.jsxs("div", {
      className:
        "flex justify-between items-center w-full h-20 px-4 text-white bg-custom-dark fixed z-50 border-b border-white border-opacity-50",
      children: [
        p.jsx("div", {
          children: p.jsx("h1", {
            className: "text-4xl font-bold ml-2",
            children: "DONUT.",
          }),
        }),
        p.jsx("ul", {
          className: "hidden md:flex",
          children: r.map(({ id: l, link: i }) =>
            p.jsxs(
              "li",
              {
                className:
                  "px-4 nav-link cursor-pointer capitalize text-lg hover:text-white font-medium transition-colors duration-300 relative",
                onClick: () => n(l),
                children: [
                  p.jsx("span", { className: "block relative", children: i }),
                  p.jsx("span", {
                    className:
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 hover:w-full",
                  }),
                ],
              },
              l
            )
          ),
        }),
        p.jsx("div", {
          onClick: () => t(!e),
          className: `cursor-pointer pr-4 z-10 md:hidden transition-transform duration-300 nav-toggle ${
            e ? "rotate-90" : ""
          }`,
          children: e ? p.jsx(kd, { size: 30 }) : p.jsx(hd, { size: 30 }),
        }),
        e &&
          p.jsx("ul", {
            className: `flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black md:hidden nav-content ${
              e ? "active" : ""
            }`,
            children: r.map(({ id: l, link: i }, o) =>
              p.jsx(
                "li",
                {
                  className:
                    "px-4 cursor-pointer capitalize font-medium py-6 text-3xl nav-link",
                  onClick: () => {
                    n(l), t(!1);
                  },
                  style: {
                    animation: "slideFadeIn 0.5s ease-out forwards",
                    animationDelay: `${o * 0.1}s`,
                    opacity: 0,
                    transform: "translateY(-10px)",
                  },
                  children: i,
                },
                l
              )
            ),
          }),
      ],
    });
  },
  Ed = () => {
    const e = ["engineer", "student", "designer", "developer"],
      [t, n] = de.useState(0),
      [r, l] = de.useState(0),
      [i, o] = de.useState(!1);
    return (
      de.useEffect(() => {
        if (r === e[t].length + 1 && !i) {
          o(!0);
          return;
        }
        if (r === 0 && i) {
          o(!1), n((s) => (s + 1) % e.length);
          return;
        }
        const u = setTimeout(() => {
          l((s) => s + (i ? -1 : 1));
        }, Math.max(i ? 50 : r === e[t].length ? 500 : 100, parseInt(Math.random() * 200)));
        return () => clearTimeout(u);
      }, [r, t, i, e]),
      p.jsx("div", {
        className: "typing-effect font-inter font-normal",
        children: p.jsxs("p", {
          children: [
            "I am a ",
            p.jsx("span", { children: `${e[t].substring(0, r)}` }),
            p.jsx("span", { className: "cursor" }),
          ],
        }),
      })
    );
  },
  Nd = ({ images: e }) => {
    const [n, r] = de.useState(0),
      l = () => {
        r((h) => Math.min(h + 1, e.length - 2));
      },
      i = () => {
        r((h) => Math.max(h - 1, 0));
      },
      o = 5,
      s = 600 / 2 - o * 2,
      c = -(n * (s + o * 2)) + "px";
    return p.jsxs("div", {
      className: "slideshow-container",
      children: [
        p.jsx("div", {
          className: "slideshow",
          style: {
            transform: `translateX(${c})`,
            transition: "transform 0.5s ease-in-out",
          },
          children: e.map((h, v) =>
            p.jsx(
              "img",
              {
                src: h,
                alt: `Slide ${v}`,
                className: "slideshow-image",
                style: { width: `${s}px`, margin: `0 ${o}px` },
              },
              v
            )
          ),
        }),
        p.jsxs("div", {
          className: "slideshow-controls",
          children: [
            p.jsx("button", {
              onClick: i,
              disabled: n === 0,
              className: "slideshow-button",
              children: "❮",
            }),
            p.jsx("button", {
              onClick: l,
              disabled: n >= e.length - 2,
              className: "slideshow-button",
              children: "❯",
            }),
          ],
        }),
      ],
    });
  },
  Cd = "./assets/drink-RW2zOwh2.png",
  jd = "./assets/europe-g1oHIifg.png",
  _d = "./assets/four--3L-_luG.png",
  zd = "./assets/ally-YUgB0RtH.png",
  Pd = "./assets/building-XSoOtO2s.png",
  Ld = "./assets/glasses-92c-CcLI.png",
  Td = "./assets/sunset-quRqcA8Y.png",
  Md = "./assets/town-l69NVXrs.png",
  Od = "./assets/water-e8Y57sFU.png";
function wc(e) {
  return H({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        },
        child: [],
      },
    ],
  })(e);
}
const Rd = () => {
  const e = [Od, Cd, Pd, jd, zd, _d, Td, Ld, Md];
  return p.jsxs("main", {
    id: "home-section",
    className:
      "min-h-screen bg-#121212 text-white flex flex-col justify-center items-center pt-24 md:pt-28",
    children: [
      p.jsx("section", {
        className: "text-center p-4",
        children: p.jsx("h2", {
          className: "text-5xl md:text-6xl font-bold mb-0 name-home",
          children: "Ethan Do",
        }),
      }),
      p.jsxs("section", {
        className: "text-center p-4 mt-0",
        children: [
          " ",
          p.jsx("p", {
            className: "text-xl font-light",
            children: p.jsx(Ed, {}),
          }),
        ],
      }),
      p.jsx("section", {
        className: "w-full max-w-4xl p-4",
        children: p.jsx(Nd, { images: e }),
      }),
      p.jsx("section", {
        className: "mt-0",
        children: p.jsxs("div", {
          className: "flex space-x-4 justify-center",
          children: [
            p.jsx("a", {
              href: "https://www.linkedin.com/in/ethanmdo/",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "transition-transform duration-300 ease-in-out transform hover:scale-110",
              children: p.jsx(gc, {
                className: "text-4xl hover:text-blue-700",
              }),
            }),
            p.jsx("a", {
              href: "https://github.com/ethanmdo",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "transition-transform duration-300 ease-in-out transform hover:scale-110",
              children: p.jsx(hc, {
                className: "text-4xl hover:text-gray-700",
              }),
            }),
            p.jsx("a", {
              href: "https://www.instagram.com/ethanmdo/",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "transition-transform duration-300 ease-in-out transform hover:scale-110",
              children: p.jsx(vc, {
                className: "text-4xl hover:text-pink-600",
              }),
            }),
            p.jsx("a", {
              href: "https://www.youtube.com/channel/UCYzuWSmay1Bp-IIbynnQffg",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "transition-transform duration-300 ease-in-out transform hover:scale-110",
              children: p.jsx(yc, { className: "text-4xl hover:text-red-600" }),
            }),
            p.jsxs("a", {
              href: "https://twitter.com/ethanmdo",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "transition-transform duration-300 ease-in-out transform hover:scale-110",
              children: [
                p.jsx(wc, { className: "text-4xl hover:text-blue-400" }),
                " ",
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
function Fd(e) {
  return H({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z",
        },
        child: [],
      },
    ],
  })(e);
}
function Id(e) {
  return H({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z",
        },
        child: [],
      },
    ],
  })(e);
}
function Dd(e) {
  return H({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
        },
        child: [],
      },
    ],
  })(e);
}
function Vd(e) {
  return H({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
        },
        child: [],
      },
    ],
  })(e);
}
function Hd(e) {
  return H({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ud(e) {
  return H({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24",
        },
        child: [],
      },
    ],
  })(e);
}
const Bd = "./assets/professional-AUNVLlZ1.png",
  Ad = () =>
    p.jsx("main", {
      id: "about-section",
      className:
        "min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center pt-10 md:pt-20",
      children: p.jsxs("div", {
        className:
          "container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-10",
        children: [
          p.jsxs("div", {
            className: "md:w-3/4 text-center md:text-left",
            children: [
              p.jsx("h2", {
                className: "text-5xl md:text-6xl font-bold mb-2",
                children: "Ethan Do",
              }),
              p.jsx("p", {
                className: "text-xl font-light",
                children: "Full-Stack Developer | Tech Enthusiast",
              }),
              p.jsx("section", {
                className: "mb-8 mt-4",
                children: p.jsx("p", {
                  children:
                    "Second year student at Virginia Tech studying computer science with an emphasis on full-stack development. With a passion for everything technology, I am committed to learning new and innovative tools. As I progress in my career, I hope to continue contributing to projects that push the boundaries of the digital realm.",
                }),
              }),
              p.jsxs("section", {
                children: [
                  p.jsx("h3", {
                    className: "text-3xl font-bold mb-4",
                    children: "Skills",
                  }),
                  p.jsx("div", {
                    className:
                      "flex flex-wrap justify-center md:justify-start text-4xl",
                    children: [
                      { icon: p.jsx(cd, {}), label: "HTML", color: "#E34F26" },
                      { icon: p.jsx(ad, {}), label: "CSS", color: "#1572B6" },
                      {
                        icon: p.jsx(dd, {}),
                        label: "JavaScript",
                        color: "#F7DF1E",
                      },
                      { icon: p.jsx(md, {}), label: "React", color: "#61DAFB" },
                      {
                        icon: p.jsx(Vd, {}),
                        label: "Tailwind CSS",
                        color: "#38B2AC",
                      },
                      { icon: p.jsx(fd, {}), label: "Java", color: "#007396" },
                      {
                        icon: p.jsx(pd, {}),
                        label: "Python",
                        color: "#3776AB",
                      },
                      {
                        icon: p.jsx(Fd, {}),
                        label: "C Programming",
                        color: "#A8B9CC",
                      },
                      {
                        icon: p.jsx(Hd, {}),
                        label: "TypeScript",
                        color: "#3178C6",
                      },
                      {
                        icon: p.jsx(Ud, {}),
                        label: "React Native",
                        color: "#61DAFB",
                      },
                      {
                        icon: p.jsx(Dd, {}),
                        label: "Node.js",
                        color: "#339933",
                      },
                      {
                        icon: p.jsx(Id, {}),
                        label: "MongoDB",
                        color: "#47A248",
                      },
                    ].map((e, t) =>
                      p.jsxs(
                        "div",
                        {
                          className: "p-2 group relative",
                          children: [
                            p.jsx("div", {
                              style: { color: e.color },
                              className: "tooltip-icon",
                              title: e.label,
                              children: e.icon,
                            }),
                            p.jsx("span", {
                              className: "tooltip-text group-hover:scale-100",
                              children: e.label,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          p.jsx("div", {
            className: "md:w-1/2 flex justify-center md:justify-end",
            children: p.jsx("img", {
              src: Bd,
              alt: "Ethan Do",
              className: "max-w-full h-auto object-cover rounded-lg",
              style: { maxWidth: "300px", height: "auto" },
            }),
          }),
        ],
      }),
    }),
  $d = () => {
    const e = [
        {
          role: "SWE Intern",
          company: "CapTech",
          period: "June 2024 - August 2024",
          url: "https://www.captechconsulting.com/",
        },
        {
          role: "Undergraduate Research Assistant",
          company: "Reach Lab VT",
          period: "February 2024 - Present",
          url: "https://reach.cs.vt.edu/",
        },
        {
          role: "Sponsorship Organizer",
          company: "VTHacks",
          period: "January 2024 - Present",
          url: "https://vthacks.com/",
        },
        {
          role: "SWE Intern",
          company: "Olympus Solutions Inc.",
          period: "June 2023 - October 2023",
          url: "https://www.olympussolutionsinc.com/",
        },
      ],
      t = [
        {
          degree: "Bachelors of Science in Computer Science",
          school: "Virginia Tech",
          period: "August 2022 - Present",
          description: "GPA: 3.98",
          url: "https://cs.vt.edu/",
        },
        {
          degree: "Advanced High School Diploma",
          school: "John Champe High School",
          period: "August 2018 - June 2022",
          description: "GPA: 4.57",
          url: "https://www.lcps.org/JCH",
        },
      ];
    return p.jsxs("main", {
      id: "experience-section",
      className:
        "min-h-screen bg-#121212 text-white flex flex-col items-center pt-24 md:pt-28",
      children: [
        p.jsx("section", {
          className: "text-center p-4",
          children: p.jsx("h2", {
            className: "text-5xl md:text-6xl font-bold mb-0",
            children: "Experience",
          }),
        }),
        p.jsxs("section", {
          className: "w-full max-w-4xl p-4",
          children: [
            p.jsxs("h3", {
              className: "text-4xl font-semibold mb-6",
              children: [
                p.jsx(vd, { className: "inline-block mr-2" }),
                " Professional",
              ],
            }),
            e.map((n, r) =>
              p.jsx(
                "a",
                {
                  href: n.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block hover:glow transition duration-300",
                  children: p.jsxs("div", {
                    className:
                      "border border-white p-6 rounded-lg shadow-md mb-6",
                    children: [
                      p.jsxs("h4", {
                        className: "text-2xl font-bold",
                        children: [n.role, " at ", n.company],
                      }),
                      p.jsx("p", {
                        className: "text-gray-400",
                        children: n.period,
                      }),
                      p.jsx("p", { children: n.description }),
                    ],
                  }),
                },
                r
              )
            ),
          ],
        }),
        p.jsxs("section", {
          className: "w-full max-w-4xl p-4",
          children: [
            p.jsxs("h3", {
              className: "text-4xl font-semibold mb-6",
              children: [
                p.jsx(yd, { className: "inline-block mr-2" }),
                " Education",
              ],
            }),
            t.map((n, r) =>
              p.jsx(
                "a",
                {
                  href: n.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block hover:glow transition duration-300",
                  children: p.jsxs("div", {
                    className:
                      "border border-white p-6 rounded-lg shadow-md mb-6",
                    children: [
                      p.jsx("h4", {
                        className: "text-2xl font-bold",
                        children: n.degree,
                      }),
                      p.jsxs("p", {
                        className: "text-gray-400",
                        children: [n.school, ", ", n.period],
                      }),
                      p.jsx("p", { children: n.description }),
                    ],
                  }),
                },
                r
              )
            ),
          ],
        }),
      ],
    });
  },
  fe = { origin: "https://api.emailjs.com", blockHeadless: !1 },
  Ho = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
        ? e
        : {}
      : {},
  Wd = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = Ho(e);
    (fe.publicKey = n.publicKey),
      (fe.blockHeadless = n.blockHeadless),
      (fe.blockList = n.blockList),
      (fe.limitRate = n.limitRate),
      (fe.origin = n.origin || t);
  };
class kl {
  constructor(t = 0, n = "Network Error") {
    (this.status = t), (this.text = n);
  }
}
const xc = async (e, t, n = {}) => {
    const r = await fetch(fe.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      l = await r.text(),
      i = new kl(r.status, l);
    if (r.ok) return i;
    throw i;
  },
  kc = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  Qd = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  Sc = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  Ec = () => new kl(451, "Unavailable For Headless Browser"),
  Kd = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  Yd = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  Xd = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  Nc = (e, t) => {
    if (Yd(e)) return !1;
    Kd(e.list, e.watchVariable);
    const n = Xd(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  Cc = () => new kl(403, "Forbidden"),
  Gd = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string") throw "The LimitRate ID has to be a string";
  },
  Jd = (e, t, n) => {
    const r = Number(n.getItem(e) || 0);
    return t - Date.now() + r;
  },
  qu = (e, t, n) => {
    setTimeout(() => {
      n.removeItem(e);
    }, t);
  },
  jc = (e, t, n) => {
    if (!n.throttle) return !1;
    Gd(n.throttle, n.id);
    const r = n.id || t,
      l = Jd(r, n.throttle, e);
    return l > 0
      ? (qu(r, l, e), !0)
      : (e.setItem(r, Date.now().toString()), qu(r, n.throttle, e), !1);
  },
  _c = () => new kl(429, "Too Many Requests"),
  Zd = (e, t, n, r) => {
    const l = Ho(r),
      i = l.publicKey || fe.publicKey,
      o = l.blockHeadless || fe.blockHeadless,
      u = { ...fe.blockList, ...l.blockList },
      s = { ...fe.limitRate, ...l.limitRate };
    return o && Sc(navigator)
      ? Promise.reject(Ec())
      : (kc(i, e, t),
        Qd(n),
        n && Nc(u, n)
          ? Promise.reject(Cc())
          : jc(localStorage, location.pathname, s)
          ? Promise.reject(_c())
          : xc(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.1.0",
                user_id: i,
                service_id: e,
                template_id: t,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  qd = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  bd = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  e0 = (e, t, n, r) => {
    const l = Ho(r),
      i = l.publicKey || fe.publicKey,
      o = l.blockHeadless || fe.blockHeadless,
      u = { ...fe.blockList, ...l.blockList },
      s = { ...fe.limitRate, ...l.limitRate };
    if (o && Sc(navigator)) return Promise.reject(Ec());
    const c = bd(n);
    kc(i, e, t), qd(c);
    const h = new FormData(c);
    return Nc(u, h)
      ? Promise.reject(Cc())
      : jc(localStorage, location.pathname, s)
      ? Promise.reject(_c())
      : (h.append("lib_version", "4.1.0"),
        h.append("service_id", e),
        h.append("template_id", t),
        h.append("user_id", i),
        xc("/api/v1.0/email/send-form", h));
  },
  bu = { init: Wd, send: Zd, sendForm: e0 },
  t0 = () => {
    const e = de.useRef(),
      [t, n] = de.useState(""),
      [r, l] = de.useState(!1);
    de.useEffect(() => {
      bu.init("X4jKFDWe5Cs_o1s0t");
    }, []);
    const i = (o) => {
      o.preventDefault(),
        l(!0),
        bu.sendForm("service_tarrzlx", "template_juu8k3r", e.current).then(
          (u) => {
            n("Message sent successfully!"),
              l(!1),
              e.current.reset(),
              setTimeout(() => n(""), 5e3);
          },
          (u) => {
            n("Failed to send the message. Please try again."),
              l(!1),
              setTimeout(() => n(""), 5e3);
          }
        );
    };
    return p.jsxs("main", {
      id: "contact-section",
      className:
        "bg-[#121212] min-h-screen flex flex-col justify-center items-center text-white pt-10 md:pt-20",
      children: [
        p.jsxs("div", {
          className: "text-center mb-10",
          children: [
            p.jsx("h1", {
              className: "text-5xl md:text-6xl font-bold mb-4",
              children: "Contact Me",
            }),
            p.jsx("p", {
              className: "text-xl font-light",
              children:
                "Let's chat! Feel free to reach out using the form below.",
            }),
          ],
        }),
        p.jsxs("div", {
          className: "flex flex-wrap justify-center items-center gap-4 mb-8",
          children: [
            p.jsxs("a", {
              href: "mailto:ethando@gmail.com",
              className: "flex items-center group",
              children: [
                p.jsx(gd, { className: "text-2xl mr-2" }),
                p.jsxs("span", {
                  className: "relative",
                  children: [
                    "ethando@gmail.com",
                    p.jsx("span", {
                      className:
                        "absolute inset-x-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out",
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("a", {
              href: "tel:+1-703-675-6310",
              className: "flex items-center group",
              children: [
                p.jsx(xd, { className: "text-2xl mr-2" }),
                p.jsxs("span", {
                  className: "relative",
                  children: [
                    "+1 (703) 675-6310",
                    p.jsx("span", {
                      className:
                        "absolute inset-x-0 bottom-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out",
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("a", {
              href: "https://www.google.com/maps/place/Northern+Virginia,+VA/@38.7267251,-78.4488438,9z/data=!3m1!4b1!4m6!3m5!1s0x89b6526c20a2797b:0x23e20b83d14e71ac!8m2!3d38.8050552!4d-77.0469862!16zL20vMDMxdGRs?entry=ttu",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center group",
              children: [
                p.jsx(wd, { className: "text-2xl mr-2" }),
                p.jsxs("span", {
                  className: "relative",
                  children: [
                    "Northern Virginia",
                    p.jsx("span", {
                      className:
                        "absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        p.jsxs("div", {
          className: "flex space-x-4 text-3xl mb-8",
          children: [
            p.jsx("a", {
              href: "https://www.linkedin.com/in/ethanmdo/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: p.jsx(gc, { className: "hover:text-blue-700" }),
            }),
            p.jsx("a", {
              href: "https://github.com/ethanmdo",
              target: "_blank",
              rel: "noopener noreferrer",
              children: p.jsx(hc, { className: "hover:text-gray-700" }),
            }),
            p.jsx("a", {
              href: "https://www.instagram.com/ethanmdo/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: p.jsx(vc, { className: "hover:text-pink-600" }),
            }),
            p.jsx("a", {
              href: "https://www.youtube.com/channel/UCYzuWSmay1Bp-IIbynnQffg",
              target: "_blank",
              rel: "noopener noreferrer",
              children: p.jsx(yc, { className: "hover:text-red-600" }),
            }),
            p.jsx("a", {
              href: "https://twitter.com/ethanmdo",
              target: "_blank",
              rel: "noopener noreferrer",
              children: p.jsx(wc, { className: "hover:text-blue-400" }),
            }),
          ],
        }),
        p.jsxs("form", {
          ref: e,
          onSubmit: i,
          className:
            "w-full max-w-lg p-5 space-y-4 bg-[#121212] rounded-lg shadow-lg",
          children: [
            p.jsx("input", {
              type: "text",
              name: "user_name",
              placeholder: "Your Name",
              className:
                "w-full p-3 rounded bg-[#121212] text-white border border-white focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300",
              required: !0,
            }),
            p.jsx("input", {
              type: "email",
              name: "user_email",
              placeholder: "Your Email",
              className:
                "w-full p-3 rounded bg-[#121212] text-white border border-white focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300",
              required: !0,
            }),
            p.jsx("textarea", {
              name: "message",
              placeholder: "Your Message",
              rows: "5",
              className:
                "w-full p-3 rounded bg-[#121212] text-white border border-white focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300",
              required: !0,
            }),
            p.jsx("button", {
              type: "submit",
              disabled: r,
              className:
                "w-full p-3 bg-[#121212] border border-white text-white font-bold rounded transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-transparent",
              children: r ? "Sending..." : "Send Message",
            }),
            t && p.jsx("div", { className: "text-center mt-4", children: t }),
          ],
        }),
      ],
    });
  },
  n0 = "./assets/cargo-UowTzYDr.png",
  r0 = "./assets/active-9jXG7hKU.png",
  l0 = "./assets/green-klDOzIF8.png",
  i0 = () => {
    const e = [
      {
        title: "CargoGuardian",
        image: n0,
        description:
          "A mobile application mitigating risk for logistics companies.",
        link: "https://devpost.com/software/cargoguardian",
      },
      {
        title: "ActiveTrackR",
        image: r0,
        description:
          "A fitness web app that encourages healthy living for all users.",
        link: "#",
      },
      {
        title: "GreenThreads",
        image: l0,
        description:
          "A website aiming to eliminate fast fashion and reduce carbon footprint.",
        link: "https://devpost.com/software/greenthreads",
      },
    ];
    return p.jsxs("main", {
      id: "projects-section",
      className: "projects-container ",
      children: [
        p.jsx("section", {
          className: "text-center p-4",
          children: p.jsx("h2", {
            className: "text-5xl md:text-6xl font-bold mb-0 pb-12",
            children: "Projects",
          }),
        }),
        p.jsx("div", {
          className: "projects-grid",
          children: e.map((t, n) =>
            p.jsx(
              "div",
              {
                className: "project-card",
                children: p.jsxs("div", {
                  className: "project-image-wrapper",
                  children: [
                    p.jsx("img", {
                      src: t.image,
                      alt: t.title,
                      className: "project-image",
                    }),
                    p.jsxs("div", {
                      className: "project-description-overlay",
                      children: [
                        p.jsx("h3", {
                          className: "project-title",
                          children: t.title,
                        }),
                        p.jsx("p", {
                          className: "project-description",
                          children: t.description,
                        }),
                        p.jsx("a", {
                          href: t.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "view-project",
                          children: "View Project",
                        }),
                      ],
                    }),
                  ],
                }),
              },
              n
            )
          ),
        }),
      ],
    });
  },
  o0 = () =>
    p.jsxs("div", {
      children: [
        p.jsx(Sd, {}),
        p.jsx(Rd, {}),
        p.jsx(Ad, {}),
        p.jsx(i0, {}),
        p.jsx($d, {}),
        p.jsx(t0, {}),
      ],
    });
Zl.createRoot(document.getElementById("root")).render(
  p.jsx(it.StrictMode, { children: p.jsx(o0, {}) })
);
