function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var firebaseConfig = {
  apiKey: "AIzaSyDcLsndRbDPeUru_Di-h3w8RP_Ung-YSUo",
  authDomain: "flamboyant-coral.firebaseapp.com",
  projectId: "flamboyant-coral",
  storageBucket: "flamboyant-coral.firebasestorage.app",
  messagingSenderId: "15022873086",
  appId: "1:15022873086:web:507d97757035ac90d108af"
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var COR = "#B41020";
var COR_FUNDO = "#F5EAEA";
var LOGO_URL = "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/unnamed.png";
var MONTHS_PT = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
var MONTHS_SHORT = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
var NAIPES = ["Soprano", "Contralto", "Mezzo-soprano", "Alto", "Tenor", "Barítono", "Baixo"];
var FUNCOES = ["Corista", "Solista", "Regente", "Pianista", "Produtora", "Auxiliar"];
function todayStr() {
  return new Date().toISOString().split("T")[0];
}
function fmtDate(d) {
  if (!d) return "";
  var _d$split = d.split("-"),
    _d$split2 = _slicedToArray(_d$split, 3),
    y = _d$split2[0],
    m = _d$split2[1],
    dd = _d$split2[2];
  return "".concat(parseInt(dd), " de ").concat(MONTHS_PT[parseInt(m) - 1], " de ").concat(y);
}
function fmtMonthYear(d) {
  if (!d) return "—";
  var _d$split3 = d.split("-"),
    _d$split4 = _slicedToArray(_d$split3, 2),
    y = _d$split4[0],
    m = _d$split4[1];
  return "".concat(MONTHS_SHORT[parseInt(m) - 1], " ").concat(y);
}
function useCollection(col) {
  var orderField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "createdAt";
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  useEffect(function () {
    var unsub = db.collection(col).onSnapshot(function (snap) {
      var docs = snap.docs.map(function (d) {
        return _objectSpread({
          id: d.id
        }, d.data());
      });
      docs.sort(function (a, b) {
        var _a$orderField, _b$orderField;
        var av = ((_a$orderField = a[orderField]) === null || _a$orderField === void 0 ? void 0 : _a$orderField.seconds) || a[orderField] || "";
        var bv = ((_b$orderField = b[orderField]) === null || _b$orderField === void 0 ? void 0 : _b$orderField.seconds) || b[orderField] || "";
        return bv > av ? 1 : -1;
      });
      setData(docs);
      setLoading(false);
    }, function () {
      return setLoading(false);
    });
    return unsub;
  }, [col]);
  return {
    data: data,
    loading: loading
  };
}
function useConfig() {
  var _useState5 = useState({
      nomeApp: "Flamboyant Coral",
      subtitulo: "Portal de Gestão",
      logoUrl: LOGO_URL,
      corPrimaria: COR,
      corFundo: COR_FUNDO
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    config = _useState6[0],
    setConfig = _useState6[1];
  useEffect(function () {
    var unsub = db.collection("config").doc("app").onSnapshot(function (snap) {
      if (snap.exists) setConfig(function (c) {
        return _objectSpread(_objectSpread({}, c), snap.data());
      });
    });
    return unsub;
  }, []);
  return {
    config: config,
    save: function save(d) {
      return db.collection("config").doc("app").set(d, {
        merge: true
      });
    }
  };
}
var Icon = function Icon(_ref) {
  var name = _ref.name,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 16 : _ref$size,
    color = _ref.color;
  useEffect(function () {
    if (window.lucide) window.lucide.createIcons();
  }, [name]);
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color: color || "inherit",
      display: "block",
      flexShrink: 0
    }
  });
};
function Spinner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      border: "3px solid ".concat(COR),
      borderTopColor: "transparent",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite"
    }
  }));
}

// ── CADASTRO PÚBLICO ──────────────────────────────────────────────────────────
function CadastroPublico(_ref2) {
  var config = _ref2.config;
  var cor = config.corPrimaria || COR;
  var fundo = config.corFundo || COR_FUNDO;
  var _useState7 = useState({
      name: "",
      funcao: "Corista",
      voice: "Soprano",
      email: "",
      phone: "",
      birthday: "",
      notes: ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    form = _useState8[0],
    setForm = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    salvando = _useState0[0],
    setSalvando = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    ok = _useState10[0],
    setOk = _useState10[1];
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    erro = _useState12[0],
    setErro = _useState12[1];
  function salvar() {
    return _salvar.apply(this, arguments);
  }
  function _salvar() {
    _salvar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (form.name.trim()) {
              _context.n = 1;
              break;
            }
            setErro("Nome é obrigatório.");
            return _context.a(2);
          case 1:
            if (form.phone.trim()) {
              _context.n = 2;
              break;
            }
            setErro("Telefone é obrigatório.");
            return _context.a(2);
          case 2:
            setSalvando(true);
            _context.n = 3;
            return db.collection("members").add(_objectSpread(_objectSpread({}, form), {}, {
              active: true,
              startDate: todayStr(),
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 3:
            setSalvando(false);
            setOk(true);
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _salvar.apply(this, arguments);
  }
  var inp = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#fff"
  };
  var lbl = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#888",
    marginBottom: 5
  };
  var g2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 16
  };
  if (ok) return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: fundo,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      background: "#E8F5E9",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    color: "#2E7D32"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 24,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 8,
      textAlign: "center"
    }
  }, "Cadastro realizado!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "#888",
      textAlign: "center",
      maxWidth: 320
    }
  }, "Obrigado, ", form.name.split(" ")[0], "! Seu cadastro foi enviado e ser\xE1 revisado pela gest\xE3o."));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: fundo,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      background: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 14px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: config.logoUrl || LOGO_URL,
    alt: "",
    style: {
      width: 56,
      height: 56,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      color: cor
    }
  }, config.nomeApp || "Flamboyant Coral"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginTop: 4
    }
  }, "Cadastro de Corista")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 16,
      border: "1px solid #EEE0E0",
      padding: "24px 20px",
      width: "100%",
      maxWidth: 480,
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nome Completo *"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.name,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          name: e.target.value
        });
      });
      setErro("");
    },
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Fun\xE7\xE3o"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.funcao,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          funcao: e.target.value
        });
      });
    }
  }, FUNCOES.map(function (f) {
    return /*#__PURE__*/React.createElement("option", {
      key: f
    }, f);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Naipe"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.voice,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          voice: e.target.value
        });
      });
    }
  }, NAIPES.map(function (n) {
    return /*#__PURE__*/React.createElement("option", {
      key: n
    }, n);
  })))), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Telefone *"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.phone || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          phone: e.target.value
        });
      });
    },
    placeholder: "(00) 9 0000-0000"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "E-mail"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    type: "email",
    value: form.email || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          email: e.target.value
        });
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data de Nascimento"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inp,
    value: form.birthday || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          birthday: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Observa\xE7\xF5es"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      minHeight: 70,
      resize: "vertical"
    }),
    value: form.notes || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          notes: e.target.value
        });
      });
    }
  })), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: cor,
      marginBottom: 12
    }
  }, erro), /*#__PURE__*/React.createElement("button", {
    onClick: salvar,
    disabled: salvando,
    style: {
      width: "100%",
      padding: "14px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvando ? 0.7 : 1
    }
  }, salvando ? "Enviando..." : "Enviar Cadastro")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 11,
      color: "#CCC"
    }
  }, config.nomeApp || "Flamboyant Coral", " \xB7 Portal de Gest\xE3o"));
}

// ── PLAYER MODAL UNIVERSAL ────────────────────────────────────────────────────
function PlayerModal(_ref3) {
  var url = _ref3.url,
    title = _ref3.title,
    onClose = _ref3.onClose,
    letra = _ref3.letra,
    naipes = _ref3.naipes;
  if (!url) return null;
  function getEmbedUrl(url) {
    // YouTube
    var ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
    if (ytMatch) return {
      type: "youtube",
      embed: "https://www.youtube.com/embed/".concat(ytMatch[1], "?autoplay=1")
    };

    // Google Drive — vídeo/áudio/pdf
    var driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch) {
      var id = driveMatch[1];
      if (url.includes("export=view") || url.match(/\.(jpg|jpeg|png|gif|webp)/i)) return {
        type: "image",
        embed: "https://drive.google.com/uc?export=view&id=".concat(id)
      };
      if (url.match(/\.(mp3|wav|ogg|m4a)/i)) return {
        type: "audio",
        embed: "https://drive.google.com/file/d/".concat(id, "/preview")
      };
      // PDF ou vídeo do Drive
      return {
        type: "iframe",
        embed: "https://drive.google.com/file/d/".concat(id, "/preview")
      };
    }

    // Link direto de áudio
    if (url.match(/\.(mp3|wav|ogg|m4a)/i)) return {
      type: "audio",
      embed: url
    };

    // Link direto de PDF
    if (url.match(/\.pdf/i)) return {
      type: "pdf",
      embed: url
    };

    // Link direto de imagem
    if (url.match(/\.(jpg|jpeg|png|gif|webp)/i)) return {
      type: "image",
      embed: url
    };

    // Qualquer outro link — iframe genérico
    return {
      type: "iframe",
      embed: url
    };
  }
  var _getEmbedUrl = getEmbedUrl(url),
    type = _getEmbedUrl.type,
    embed = _getEmbedUrl.embed;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      zIndex: 500,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 800,
      background: "#1A1D23",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px",
      borderBottom: "1px solid #333"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#fff",
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      paddingRight: 12
    }
  }, title || "Reproduzindo"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "rgba(255,255,255,0.1)",
      border: "none",
      borderRadius: 8,
      width: 32,
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#000"
    }
  }, (type === "youtube" || type === "iframe") && url !== "letra" && /*#__PURE__*/React.createElement("iframe", {
    src: embed,
    style: {
      width: "100%",
      height: window.innerWidth < 600 ? 220 : 450,
      border: "none",
      display: "block"
    },
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    title: title
  }), type === "audio" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 24px",
      textAlign: "center",
      background: "#1A1D23"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "music",
    size: 48,
    color: "#555"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: embed,
    style: {
      width: "100%",
      height: 80,
      border: "none"
    },
    allow: "autoplay",
    title: title
  }))), type === "image" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      textAlign: "center",
      background: "#111"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: embed,
    alt: title,
    style: {
      maxWidth: "100%",
      maxHeight: 500,
      objectFit: "contain",
      borderRadius: 8
    }
  })), type === "pdf" && /*#__PURE__*/React.createElement("iframe", {
    src: embed,
    style: {
      width: "100%",
      height: window.innerWidth < 600 ? 400 : 600,
      border: "none",
      display: "block"
    },
    title: title
  })), letra && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      background: "#1A1D23",
      maxHeight: 400,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      fontSize: 14,
      color: "#EEE",
      lineHeight: 1.8,
      fontFamily: "inherit",
      whiteSpace: "pre-wrap",
      margin: 0
    }
  }, letra)), naipes && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      background: "#1A1D23"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA",
      marginBottom: 12,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "\xC1udios por naipe"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, [["soprano", "Soprano"], ["mezzoSoprano", "Mezzo-soprano"], ["contralto", "Contralto"], ["tenor", "Tenor"], ["baritono", "Barítono"], ["baixo", "Baixo"]].map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      key = _ref5[0],
      label = _ref5[1];
    return naipes[key] ? /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: function onClick() {
        return window.open(naipes[key], "_blank");
      },
      style: {
        padding: "8px 12px",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 8,
        color: "#EEE",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play-circle",
      size: 14,
      color: "#AAA"
    }), " ", label) : null;
  }))), url && url !== "letra" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 18px",
      textAlign: "right",
      borderTop: "1px solid #333"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontSize: 12,
      color: "#AAA",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 12,
    color: "#AAA"
  }), " Abrir em nova aba"))));
}

// ── MESA DE SOM (página pública para sonoplasta) ──────────────────────────────
function MesaSom(_ref6) {
  var eventoId = _ref6.eventoId,
    config = _ref6.config;
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    evento = _useState14[0],
    setEvento = _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    tocando = _useState16[0],
    setTocando = _useState16[1];
  var _useState17 = useState(true),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var cor = config.corPrimaria || COR;
  useEffect(function () {
    db.collection("events").doc(eventoId).get().then(function (doc) {
      if (doc.exists) setEvento(_objectSpread({
        id: doc.id
      }, doc.data()));
      setLoading(false);
    });
  }, [eventoId]);
  if (loading) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#111"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      border: "3px solid ".concat(cor),
      borderTopColor: "transparent",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite"
    }
  }));
  if (!evento) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#111",
      color: "#AAA",
      fontSize: 16
    }
  }, "Evento n\xE3o encontrado.");
  var setlist = evento.setlist || [];
  function getEmbed(url) {
    if (!url) return null;
    var yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (yt) return "https://www.youtube.com/embed/".concat(yt[1], "?autoplay=1");
    var dr = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dr) return "https://drive.google.com/file/d/".concat(dr[1], "/preview");
    return url;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#111",
      color: "#fff",
      fontFamily: "'Inter',sans-serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1A1D23",
      padding: "16px 24px",
      borderBottom: "1px solid #333",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      background: cor,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: config.logoUrl || LOGO_URL,
    alt: "",
    style: {
      width: 24,
      height: 24,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 16,
      fontWeight: 700,
      color: "#fff"
    }
  }, config.nomeApp || "Coral Flamboyant"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA"
    }
  }, "Mesa de Som \u2014 ", evento.title, " \xB7 ", evento.date))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      minHeight: "calc(100vh - 68px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1A1D23",
      borderRight: "1px solid #333",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: "1px solid #333",
      fontSize: 11,
      fontWeight: 700,
      color: "#AAA",
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Setlist \u2014 ", setlist.length, " m\xFAsica", setlist.length !== 1 ? "s" : ""), setlist.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 16px",
      textAlign: "center",
      color: "#555",
      fontSize: 13
    }
  }, "Nenhuma m\xFAsica no setlist."), setlist.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return setTocando(s);
      },
      style: {
        padding: "12px 16px",
        borderBottom: "1px solid #222",
        cursor: "pointer",
        background: (tocando === null || tocando === void 0 ? void 0 : tocando.id) === s.id ? cor + "30" : "transparent",
        borderLeft: (tocando === null || tocando === void 0 ? void 0 : tocando.id) === s.id ? "3px solid ".concat(cor) : "3px solid transparent",
        transition: "background 0.15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: (tocando === null || tocando === void 0 ? void 0 : tocando.id) === s.id ? cor : "#555",
        fontWeight: 700,
        minWidth: 22
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: (tocando === null || tocando === void 0 ? void 0 : tocando.id) === s.id ? "#fff" : "#CCC"
      }
    }, s.title), s.compositor && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#555"
      }
    }, s.compositor)), (s.playback || s.audioOriginal) && /*#__PURE__*/React.createElement(Icon, {
      name: "play-circle",
      size: 14,
      color: (tocando === null || tocando === void 0 ? void 0 : tocando.id) === s.id ? cor : "#444"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 32
    }
  }, !tocando ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "#444"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "music",
    size: 64,
    color: "#333"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 18,
      fontWeight: 600,
      color: "#555"
    }
  }, "Clique em uma m\xFAsica para reproduzir")) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 700
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 24,
      fontWeight: 700,
      color: "#fff"
    }
  }, tocando.title), tocando.compositor && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#AAA",
      marginTop: 4
    }
  }, tocando.compositor)), tocando.playback || tocando.audioOriginal ? /*#__PURE__*/React.createElement("iframe", {
    src: getEmbed(tocando.playback || tocando.audioOriginal),
    style: {
      width: "100%",
      height: 400,
      border: "none",
      borderRadius: 12
    },
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    title: tocando.title
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 24px",
      background: "#1A1D23",
      borderRadius: 12,
      textAlign: "center",
      color: "#555",
      fontSize: 14
    }
  }, "Sem playback cadastrado para esta m\xFAsica."), setlist[setlist.findIndex(function (s) {
    return s.id === tocando.id;
  }) + 1] && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "12px 16px",
      background: "#1A1D23",
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "skip-forward",
    size: 16,
    color: "#AAA"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#555"
    }
  }, "A seguir"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#CCC",
      fontWeight: 600
    }
  }, setlist[setlist.findIndex(function (s) {
    return s.id === tocando.id;
  }) + 1].title)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTocando(setlist[setlist.findIndex(function (s) {
        return s.id === tocando.id;
      }) + 1]);
    },
    style: {
      padding: "8px 16px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Pr\xF3xima \u2192"))))));
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function Login(_ref7) {
  var members = _ref7.members,
    onLogin = _ref7.onLogin,
    config = _ref7.config;
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    tela = _useState20[0],
    setTela = _useState20[1];
  var _useState21 = useState(""),
    _useState22 = _slicedToArray(_useState21, 2),
    senha = _useState22[0],
    setSenha = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    mostrar = _useState24[0],
    setMostrar = _useState24[1];
  var _useState25 = useState(""),
    _useState26 = _slicedToArray(_useState25, 2),
    busca = _useState26[0],
    setBusca = _useState26[1];
  var _useState27 = useState([]),
    _useState28 = _slicedToArray(_useState27, 2),
    sugestoes = _useState28[0],
    setSugestoes = _useState28[1];
  var _useState29 = useState(""),
    _useState30 = _slicedToArray(_useState29, 2),
    erro = _useState30[0],
    setErro = _useState30[1];
  var cor = config.corPrimaria || COR;
  useEffect(function () {
    if (busca.length < 3) {
      setSugestoes([]);
      return;
    }
    var t = busca.toLowerCase();
    setSugestoes(members.filter(function (m) {
      return m.active && m.name.toLowerCase().includes(t);
    }).slice(0, 6));
  }, [busca, members]);
  function entrarAdmin() {
    if (senha === "1234") onLogin({
      name: "Gestor",
      isAdmin: true,
      role: "admin"
    });else setErro("Senha incorreta.");
  }
  function entrarCorista(m) {
    onLogin({
      name: m.name,
      isAdmin: false,
      role: "corista",
      voice: m.voice
    });
  }
  function entrarRH() {
    if (senha === "flamboyant1234") onLogin({
      name: "RH",
      isAdmin: false,
      role: "rh"
    });else setErro("Senha incorreta.");
  }
  var s = {
    wrap: {
      minHeight: "100vh",
      background: config.corFundo || COR_FUNDO,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 20px"
    },
    card: {
      background: "#fff",
      borderRadius: 16,
      border: "1px solid #EEE0E0",
      padding: "24px 20px",
      width: "100%",
      maxWidth: 420,
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)"
    },
    inp: {
      width: "100%",
      padding: "12px 16px",
      border: "1px solid #E8E0E0",
      borderRadius: 10,
      fontSize: 15,
      outline: "none",
      fontFamily: "inherit",
      color: "#1A1D23",
      background: "#fff"
    },
    btnSec: {
      flex: 1,
      padding: "13px",
      background: "#F5EAEA",
      color: cor,
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    },
    btnPri: {
      flex: 1,
      padding: "13px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 90,
      background: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: config.logoUrl || LOGO_URL,
    alt: "Logo",
    style: {
      width: 64,
      height: 64,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 26,
      fontWeight: 700,
      color: cor
    }
  }, config.nomeApp || "Flamboyant Coral"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#AAA",
      marginTop: 4
    }
  }, config.subtitulo || "Portal de Gestão")), !tela && /*#__PURE__*/React.createElement("div", {
    style: s.card
  }, [{
    id: "admin",
    icon: "shield",
    label: "Acesso Administrativo",
    sub: "Gestão completa do coral",
    cor: COR,
    bg: "rgba(180,16,32,0.08)"
  }, {
    id: "corista",
    icon: "users",
    label: "Sou Corista",
    sub: "Acesso às músicas e agenda",
    cor: "#2E7D32",
    bg: "rgba(46,125,50,0.08)"
  }, {
    id: "rh",
    icon: "briefcase",
    label: "Sou do RH",
    sub: "Pessoas e Cultura",
    cor: "#1565C0",
    bg: "rgba(21,101,192,0.08)"
  }].map(function (p) {
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: function onClick() {
        setTela(p.id);
        setErro("");
        setSenha("");
        setBusca("");
        setSugestoes([]);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: p.bg,
        border: "1px solid ".concat(p.cor, "22"),
        borderRadius: 12,
        padding: "16px",
        width: "100%",
        marginBottom: 10,
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 18,
      color: p.cor
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: "#1A1D23"
      }
    }, p.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginTop: 2
      }
    }, p.sub)), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16,
      color: "#CCC"
    }));
  })), tela === "admin" && /*#__PURE__*/React.createElement("div", {
    style: s.card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      background: "rgba(180,16,32,0.08)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 17,
    color: cor
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 18,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Acesso Administrativo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, s.inp), {}, {
      paddingRight: 44
    }),
    type: mostrar ? "text" : "password",
    placeholder: "Senha de gestor",
    value: senha,
    onChange: function onChange(e) {
      setSenha(e.target.value);
      setErro("");
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && entrarAdmin();
    },
    autoFocus: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMostrar(function (v) {
        return !v;
      });
    },
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mostrar ? "eye-off" : "eye",
    size: 16,
    color: "#AAA"
  }))), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: cor,
      marginBottom: 10
    }
  }, erro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: s.btnSec,
    onClick: function onClick() {
      setTela(null);
      setErro("");
    }
  }, "Voltar"), /*#__PURE__*/React.createElement("button", {
    style: s.btnPri,
    onClick: entrarAdmin
  }, "Entrar"))), tela === "rh" && /*#__PURE__*/React.createElement("div", {
    style: s.card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      background: "rgba(21,101,192,0.08)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "briefcase",
    size: 17,
    color: "#1565C0"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 18,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "RH \u2014 Pessoas e Cultura")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, s.inp), {}, {
      paddingRight: 44
    }),
    type: mostrar ? "text" : "password",
    placeholder: "Senha de acesso",
    value: senha,
    onChange: function onChange(e) {
      setSenha(e.target.value);
      setErro("");
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && entrarRH();
    },
    autoFocus: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMostrar(function (v) {
        return !v;
      });
    },
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mostrar ? "eye-off" : "eye",
    size: 16,
    color: "#AAA"
  }))), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: cor,
      marginBottom: 10
    }
  }, erro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: s.btnSec,
    onClick: function onClick() {
      setTela(null);
      setErro("");
    }
  }, "Voltar"), /*#__PURE__*/React.createElement("button", {
    style: _objectSpread(_objectSpread({}, s.btnPri), {}, {
      background: "#1565C0"
    }),
    onClick: entrarRH
  }, "Entrar"))), tela === "corista" && /*#__PURE__*/React.createElement("div", {
    style: s.card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      background: "rgba(46,125,50,0.08)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 17,
    color: "#2E7D32"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 18,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Sou Corista")), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, s.inp), {}, {
      marginBottom: 8
    }),
    type: "text",
    placeholder: "Digite seu nome (m\xEDn. 3 letras)",
    value: busca,
    onChange: function onChange(e) {
      setBusca(e.target.value);
      setErro("");
    },
    autoFocus: true
  }), sugestoes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #EEE",
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: 10
    }
  }, sugestoes.map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: function onClick() {
        return entrarCorista(m);
      },
      style: {
        display: "block",
        width: "100%",
        padding: "12px 16px",
        background: "none",
        border: "none",
        textAlign: "left",
        cursor: "pointer",
        fontSize: 14,
        borderBottom: "1px solid #F5F5F5",
        fontFamily: "inherit",
        color: "#1A1D23"
      }
    }, m.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginLeft: 8
      }
    }, m.voice));
  })), busca.length > 0 && busca.length < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA",
      marginBottom: 8
    }
  }, "Digite mais ", 3 - busca.length, " letra(s)..."), busca.length >= 3 && sugestoes.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: cor,
      marginBottom: 8
    }
  }, "Nenhum corista encontrado."), /*#__PURE__*/React.createElement("button", {
    style: _objectSpread(_objectSpread({}, s.btnSec), {}, {
      width: "100%",
      marginTop: 4
    }),
    onClick: function onClick() {
      setTela(null);
      setErro("");
    }
  }, "Voltar")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      fontSize: 11,
      color: "#CCC"
    }
  }, config.nomeApp || "Flamboyant Coral", " \xB7 Portal de Gest\xE3o"));
}

// ── PAINEL ────────────────────────────────────────────────────────────────────
function Painel(_ref8) {
  var user = _ref8.user,
    config = _ref8.config;
  var _useCollection = useCollection("members"),
    members = _useCollection.data,
    lM = _useCollection.loading;
  var _useCollection2 = useCollection("events", "date"),
    events = _useCollection2.data,
    lE = _useCollection2.loading;
  var _useCollection3 = useCollection("songs"),
    songs = _useCollection3.data,
    lS = _useCollection3.loading;
  var _useCollection4 = useCollection("avisos"),
    avisos = _useCollection4.data,
    lA = _useCollection4.loading;
  if (lM || lE || lS || lA) return /*#__PURE__*/React.createElement(Spinner, null);
  var cor = config.corPrimaria || COR;
  var today = todayStr();
  var ativos = members.filter(function (m) {
    return m.active;
  });
  var proxEventos = events.filter(function (e) {
    return e.date >= today;
  }).sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  }).slice(0, 3);
  var currentMonth = new Date().getMonth() + 1;
  var aniversarios = ativos.filter(function (m) {
    return m.birthday && parseInt(m.birthday.split("-")[1]) === currentMonth;
  }).sort(function (a, b) {
    return parseInt(a.birthday.split("-")[2]) - parseInt(b.birthday.split("-")[2]);
  });
  var card = function card(bc) {
    return {
      background: "#fff",
      borderRadius: 12,
      padding: "16px 20px",
      border: "1px solid #EEE8E8",
      borderLeft: "3px solid ".concat(bc || "#EEE8E8"),
      marginBottom: 12,
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    };
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor,
      marginBottom: 24
    }
  }, "Painel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginBottom: 4
    }
  }, [{
    label: "Integrantes",
    value: ativos.length,
    sub: "de ".concat(members.length, " no total"),
    icon: "users",
    bc: cor
  }, {
    label: "Repertório",
    value: songs.length,
    sub: "músicas no total",
    icon: "music",
    bc: "#2E7D32"
  }, {
    label: "Eventos",
    value: events.length,
    sub: "na agenda",
    icon: "calendar",
    bc: cor
  }, {
    label: "Aniversários",
    value: aniversarios.length,
    sub: "este mês",
    icon: "cake",
    bc: "#E65100"
  }].map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.label,
      style: card(m.bc)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#666",
        fontWeight: 600,
        marginBottom: 8
      }
    }, m.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 32,
        fontWeight: 700,
        color: "#1A1D23",
        lineHeight: 1
      }
    }, m.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#AAA",
        marginTop: 4
      }
    }, m.sub)), /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 20,
      color: m.bc
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "20px 0 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 18,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Pr\xF3ximos Eventos")), proxEventos.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, card()), {}, {
      textAlign: "center",
      color: "#CCC",
      padding: "24px"
    })
  }, "Nenhum evento cadastrado") : proxEventos.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: card()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: "#1A1D23"
      }
    }, e.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#AAA",
        marginTop: 3
      }
    }, fmtDate(e.date), e.tipo ? " \u2014 ".concat(e.tipo) : "")), e.timeChegada && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#AAA"
      }
    }, "Chegada: ", e.timeChegada)));
  }), aniversarios.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "20px 0 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cake",
    size: 18,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 18,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Aniversariantes do M\xEAs")), aniversarios.map(function (m) {
    var _m$birthday$split = m.birthday.split("-"),
      _m$birthday$split2 = _slicedToArray(_m$birthday$split, 3),
      mm = _m$birthday$split2[1],
      dd = _m$birthday$split2[2];
    var isToday = m.birthday.slice(5) === today.slice(5);
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: _objectSpread(_objectSpread({}, card(isToday ? cor : "")), {}, {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        background: "rgba(180,16,32,0.08)",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cake",
      size: 16,
      color: cor
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: isToday ? 700 : 600,
        color: "#1A1D23"
      }
    }, isToday ? "🎉 " : "", m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginTop: 2
      }
    }, "dia ", parseInt(dd), " de ", MONTHS_SHORT[parseInt(mm) - 1], isToday ? " · hoje!" : "")));
  })), avisos.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "20px 0 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "megaphone",
    size: 18,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 18,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Avisos Recentes")), avisos.slice(0, 3).map(function (a) {
    var _a$createdAt;
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: _objectSpread(_objectSpread({}, card(a.urgente ? cor : "")), {}, {
        background: a.urgente ? "#FFF5F5" : "#fff"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: "#1A1D23"
      }
    }, a.title || a.titulo), ((_a$createdAt = a.createdAt) === null || _a$createdAt === void 0 ? void 0 : _a$createdAt.seconds) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginLeft: 12
      }
    }, new Date(a.createdAt.seconds * 1000).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#555",
        lineHeight: 1.5
      }
    }, a.text || a.texto));
  })));
}

// ── MODAL INTEGRANTE ──────────────────────────────────────────────────────────
function ModalIntegrante(_ref9) {
  var membro = _ref9.membro,
    onClose = _ref9.onClose,
    config = _ref9.config;
  var cor = config.corPrimaria || COR;
  var vazio = {
    name: "",
    funcao: "Corista",
    voice: "Soprano",
    email: "",
    phone: "",
    cpf: "",
    rg: "",
    birthday: "",
    startDate: todayStr(),
    notes: "",
    active: true
  };
  var _useState31 = useState(membro ? _objectSpread(_objectSpread({}, vazio), membro) : vazio),
    _useState32 = _slicedToArray(_useState31, 2),
    form = _useState32[0],
    setForm = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    salvando = _useState34[0],
    setSalvando = _useState34[1];
  var _useState35 = useState(""),
    _useState36 = _slicedToArray(_useState35, 2),
    erro = _useState36[0],
    setErro = _useState36[1];
  function salvar() {
    return _salvar2.apply(this, arguments);
  }
  function _salvar2() {
    _salvar2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var d;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (form.name.trim()) {
              _context2.n = 1;
              break;
            }
            setErro("Nome é obrigatório.");
            return _context2.a(2);
          case 1:
            setSalvando(true);
            d = {
              name: form.name,
              funcao: form.funcao,
              voice: form.voice,
              email: form.email || "",
              phone: form.phone || "",
              cpf: form.cpf || "",
              rg: form.rg || "",
              birthday: form.birthday || "",
              startDate: form.startDate || "",
              notes: form.notes || "",
              active: form.active
            };
            if (!membro) {
              _context2.n = 3;
              break;
            }
            _context2.n = 2;
            return db.collection("members").doc(membro.id).update(_objectSpread(_objectSpread({}, d), {}, {
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 2:
            _context2.n = 4;
            break;
          case 3:
            _context2.n = 4;
            return db.collection("members").add(_objectSpread(_objectSpread({}, d), {}, {
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 4:
            setSalvando(false);
            onClose();
          case 5:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return _salvar2.apply(this, arguments);
  }
  function excluir() {
    return _excluir.apply(this, arguments);
  }
  function _excluir() {
    _excluir = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (window.confirm("Excluir este integrante permanentemente?")) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.n = 2;
            return db.collection("members").doc(membro.id).delete();
          case 2:
            onClose();
          case 3:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return _excluir.apply(this, arguments);
  }
  var inp = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#888",
    marginBottom: 5
  };
  var g2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 16
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 300,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FAFAFA",
      borderRadius: "20px 20px 0 0",
      padding: "24px 20px",
      width: "100%",
      maxWidth: 640,
      maxHeight: "92vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, membro ? "Editar Integrante" : "Adicionar Integrante"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "#EEE",
      border: "none",
      borderRadius: 8,
      width: 32,
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16,
    color: "#666"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nome Completo *"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.name,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          name: e.target.value
        });
      });
      setErro("");
    },
    autoFocus: true
  }), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: cor,
      marginTop: 4
    }
  }, erro)), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Fun\xE7\xE3o"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.funcao,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          funcao: e.target.value
        });
      });
    }
  }, FUNCOES.map(function (f) {
    return /*#__PURE__*/React.createElement("option", {
      key: f
    }, f);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Naipe"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.voice,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          voice: e.target.value
        });
      });
    }
  }, NAIPES.map(function (n) {
    return /*#__PURE__*/React.createElement("option", {
      key: n
    }, n);
  })))), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "E-mail"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    type: "email",
    value: form.email || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          email: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Telefone"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.phone || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          phone: e.target.value
        });
      });
    },
    placeholder: "(00) 9 0000-0000"
  }))), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "CPF"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.cpf || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          cpf: e.target.value
        });
      });
    },
    placeholder: "000.000.000-00"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "RG (CI)"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.rg || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          rg: e.target.value
        });
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nascimento"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inp,
    value: form.birthday || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          birthday: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data de Admiss\xE3o"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inp,
    value: form.startDate || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          startDate: e.target.value
        });
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Status"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.active ? "ativo" : "inativo",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          active: e.target.value === "ativo"
        });
      });
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "ativo"
  }, "Ativo"), /*#__PURE__*/React.createElement("option", {
    value: "inativo"
  }, "Inativo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Observa\xE7\xF5es"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      minHeight: 80,
      resize: "vertical"
    }),
    value: form.notes || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          notes: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, membro && /*#__PURE__*/React.createElement("button", {
    onClick: excluir,
    style: {
      padding: "12px 16px",
      background: "#FFF0F0",
      color: "#B41020",
      border: "1px solid #F5DADA",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Excluir"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px",
      background: "#F0EAE8",
      color: "#666",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: salvar,
    disabled: salvando,
    style: {
      flex: 1,
      padding: "13px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvando ? 0.7 : 1
    }
  }, salvando ? "Salvando..." : membro ? "Salvar" : "Adicionar"))));
}

// ── INTEGRANTES ───────────────────────────────────────────────────────────────
function Integrantes(_ref0) {
  var config = _ref0.config;
  var _useCollection5 = useCollection("members"),
    members = _useCollection5.data,
    loading = _useCollection5.loading;
  var _useState37 = useState(""),
    _useState38 = _slicedToArray(_useState37, 2),
    busca = _useState38[0],
    setBusca = _useState38[1];
  var _useState39 = useState("Todos"),
    _useState40 = _slicedToArray(_useState39, 2),
    filtro = _useState40[0],
    setFiltro = _useState40[1];
  var _useState41 = useState(null),
    _useState42 = _slicedToArray(_useState41, 2),
    modal = _useState42[0],
    setModal = _useState42[1];
  var cor = config.corPrimaria || COR;
  if (loading) return /*#__PURE__*/React.createElement(Spinner, null);
  var filtrados = members.filter(function (m) {
    var q = busca.toLowerCase();
    var ok = !busca || m.name.toLowerCase().includes(q) || (m.voice || "").toLowerCase().includes(q) || (m.funcao || "").toLowerCase().includes(q);
    var of = filtro === "Todos" || (filtro === "Ativos" ? m.active : filtro === "Inativos" ? !m.active : m.voice === filtro);
    return ok && of;
  });
  var naipeColor = {
    Soprano: COR,
    Contralto: "#7B1FA2",
    "Mezzo-soprano": "#C2185B",
    Alto: "#E65100",
    Tenor: "#1565C0",
    Barítono: "#4527A0",
    Baixo: "#1B5E20"
  };
  function copiarLink() {
    var url = "".concat(window.location.origin).concat(window.location.pathname, "?cadastro=1");
    navigator.clipboard.writeText(url).then(function () {
      return alert("Link copiado!");
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor
    }
  }, "Integrantes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copiarLink,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 16px",
      background: "#fff",
      border: "1px solid ".concat(cor),
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      color: cor,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "link",
    size: 14,
    color: cor
  }), " Copiar link de cadastro"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setModal("novo");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 16px",
      background: cor,
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      color: "#fff",
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: "#fff"
  }), " Adicionar Integrante"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #EEE8E8",
      padding: "12px 16px",
      marginBottom: 16,
      display: "flex",
      gap: 12,
      alignItems: "center",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "#AAA"
  }), /*#__PURE__*/React.createElement("input", {
    value: busca,
    onChange: function onChange(e) {
      return setBusca(e.target.value);
    },
    placeholder: "Buscar por nome, naipe ou fun\xE7\xE3o...",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      fontSize: 14,
      fontFamily: "inherit",
      color: "#1A1D23",
      background: "none"
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: filtro,
    onChange: function onChange(e) {
      return setFiltro(e.target.value);
    },
    style: {
      border: "1px solid #EEE8E8",
      borderRadius: 8,
      padding: "7px 12px",
      fontSize: 13,
      fontFamily: "inherit",
      color: "#1A1D23",
      outline: "none",
      background: "#fff",
      cursor: "pointer"
    }
  }, ["Todos", "Ativos", "Inativos"].concat(NAIPES).map(function (f) {
    return /*#__PURE__*/React.createElement("option", {
      key: f
    }, f);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #EEE8E8",
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 90px 90px 80px",
      padding: "10px 16px",
      borderBottom: "1px solid #F5EAEA",
      background: "#FAFAFA"
    }
  }, ["Nome", "Função", "Naipe", "Status", "Entrada", "Ações"].map(function (h) {
    return /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: cor,
        letterSpacing: 0.5
      }
    }, h);
  })), filtrados.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px",
      color: "#CCC",
      fontSize: 14
    }
  }, "Nenhum integrante encontrado."), filtrados.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 90px 90px 80px",
        padding: "13px 16px",
        borderBottom: i < filtrados.length - 1 ? "1px solid #F9F5F5" : "none",
        alignItems: "center",
        background: i % 2 === 0 ? "#fff" : "#FDFBFB"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#888"
      }
    }, m.funcao || "Corista"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: naipeColor[m.voice] || "#888",
        fontWeight: 500
      }
    }, m.voice || "—"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 700,
        background: m.active ? "#E8F5E9" : "#FFF3E0",
        color: m.active ? "#2E7D32" : "#E65100"
      }
    }, m.active ? "Ativo" : "Inativo")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#AAA"
      }
    }, fmtMonthYear(m.startDate)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setModal(m);
      },
      style: {
        background: "none",
        border: "none",
        color: cor,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        padding: 0
      }
    }, "Ver / Editar")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA",
      marginTop: 10,
      textAlign: "right"
    }
  }, filtrados.length, " integrante", filtrados.length !== 1 ? "s" : "", " \xB7 ", members.filter(function (m) {
    return m.active;
  }).length, " ativo", members.filter(function (m) {
    return m.active;
  }).length !== 1 ? "s" : ""), modal && /*#__PURE__*/React.createElement(ModalIntegrante, {
    membro: modal === "novo" ? null : modal,
    onClose: function onClose() {
      return setModal(null);
    },
    config: config
  }));
}

// ── CONFIGURAÇÕES ─────────────────────────────────────────────────────────────
function Configuracoes(_ref1) {
  var config = _ref1.config,
    save = _ref1.save;
  var _useState43 = useState(_objectSpread({}, config)),
    _useState44 = _slicedToArray(_useState43, 2),
    form = _useState44[0],
    setForm = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    salvando = _useState46[0],
    setSalvando = _useState46[1];
  var _useState47 = useState(false),
    _useState48 = _slicedToArray(_useState47, 2),
    ok = _useState48[0],
    setOk = _useState48[1];
  useEffect(function () {
    setForm(_objectSpread({}, config));
  }, [config]);
  function salvar() {
    return _salvar3.apply(this, arguments);
  }
  function _salvar3() {
    _salvar3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            setSalvando(true);
            _context4.n = 1;
            return save(form);
          case 1:
            setSalvando(false);
            setOk(true);
            setTimeout(function () {
              return setOk(false);
            }, 2500);
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return _salvar3.apply(this, arguments);
  }
  var cor = config.corPrimaria || COR;
  var inp = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#fff"
  };
  var lbl = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "#888",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 1
  };
  var box = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "20px",
    marginBottom: 16,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor,
      marginBottom: 24
    }
  }, "Configura\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#888",
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 16
    }
  }, "Identidade do Coral"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nome do Coral"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.nomeApp || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          nomeApp: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Subt\xEDtulo"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.subtitulo || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          subtitulo: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "URL da Logo"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.logoUrl || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          logoUrl: e.target.value
        });
      });
    },
    placeholder: "https://..."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#AAA",
      marginTop: 5
    }
  }, "Link direto para PNG com fundo transparente"), form.logoUrl && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: "#F5F0F0",
      borderRadius: 10,
      padding: 12,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: form.logoUrl,
    alt: "",
    style: {
      maxHeight: 64,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#888",
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 16
    }
  }, "Cores"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Cor principal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "color",
    value: form.corPrimaria || COR,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          corPrimaria: e.target.value
        });
      });
    },
    style: {
      width: 44,
      height: 40,
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      padding: 2
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      flex: 1
    }),
    value: form.corPrimaria || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          corPrimaria: e.target.value
        });
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Fundo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "color",
    value: form.corFundo || COR_FUNDO,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          corFundo: e.target.value
        });
      });
    },
    style: {
      width: 44,
      height: 40,
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      padding: 2
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      flex: 1
    }),
    value: form.corFundo || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          corFundo: e.target.value
        });
      });
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      background: form.corFundo || COR_FUNDO,
      borderRadius: 10,
      padding: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#AAA",
      marginBottom: 8
    }
  }, "PREVIEW"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      background: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: form.logoUrl || LOGO_URL,
    style: {
      width: 36,
      height: 36,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: form.corPrimaria || COR
    }
  }, form.nomeApp || "Flamboyant Coral"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginTop: 4
    }
  }, form.subtitulo || "Portal de Gestão"))), /*#__PURE__*/React.createElement("button", {
    onClick: salvar,
    disabled: salvando,
    style: {
      width: "100%",
      padding: "14px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvando ? 0.7 : 1
    }
  }, ok ? "✓ Salvo!" : salvando ? "Salvando..." : "Salvar Configurações"));
}

// ── AGENDA ────────────────────────────────────────────────────────────────────
var TIPOS_EVENTO = ["Ensaio", "Apresentação", "Reunião", "Gravação", "Feriado Nacional", "Feriado Local", "Outro"];
var STATUS_EVENTO = ["Planejada", "Confirmado", "Cancelado", "Reagendado", "Suspenso"];
var RECORRENCIAS = ["Sem recorrência", "Semanal", "Quinzenal", "Mensal", "Indeterminada"];
var WEEKDAYS_PT = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var STATUS_COLORS = {
  Planejada: "#1565C0",
  Confirmado: "#2E7D32",
  Cancelado: "#B41020",
  Reagendado: "#E65100",
  Suspenso: "#7B1FA2"
};
function ModalEvento(_ref10) {
  var evento = _ref10.evento,
    onClose = _ref10.onClose,
    config = _ref10.config;
  var cor = config.corPrimaria || COR;
  var _useCollection6 = useCollection("songs"),
    songs = _useCollection6.data;
  var vazio = {
    title: "",
    date: todayStr(),
    tipo: "Ensaio",
    status: "Planejada",
    timeChegada: "",
    timeApresentacao: "",
    local: "",
    mapsUrl: "",
    notes: "",
    recorrencia: "Sem recorrência",
    setlist: []
  };
  var _useState49 = useState(evento ? _objectSpread(_objectSpread(_objectSpread({}, vazio), evento), {}, {
      setlist: evento.setlist || []
    }) : vazio),
    _useState50 = _slicedToArray(_useState49, 2),
    form = _useState50[0],
    setForm = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    salvando = _useState52[0],
    setSalvando = _useState52[1];
  var _useState53 = useState(""),
    _useState54 = _slicedToArray(_useState53, 2),
    erro = _useState54[0],
    setErro = _useState54[1];
  function salvar() {
    return _salvar4.apply(this, arguments);
  }
  function _salvar4() {
    _salvar4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var grupoId, d, datas, base, dias, total, intervalo, i, nova, temGrupo, _i, _datas, dt;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (form.title.trim()) {
              _context5.n = 1;
              break;
            }
            setErro("Título é obrigatório.");
            return _context5.a(2);
          case 1:
            if (form.date) {
              _context5.n = 2;
              break;
            }
            setErro("Data é obrigatória.");
            return _context5.a(2);
          case 2:
            setSalvando(true);
            grupoId = Date.now().toString(36) + Math.random().toString(36).substr(2);
            d = {
              title: form.title,
              date: form.date,
              tipo: form.tipo,
              status: form.status,
              timeChegada: form.timeChegada || "",
              timeApresentacao: form.timeApresentacao || "",
              local: form.local || "",
              mapsUrl: form.mapsUrl || "",
              notes: form.notes || "",
              recorrencia: form.recorrencia,
              setlist: form.setlist || []
            };
            if (!evento) {
              _context5.n = 4;
              break;
            }
            _context5.n = 3;
            return db.collection("events").doc(evento.id).update(_objectSpread(_objectSpread({}, d), {}, {
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 3:
            _context5.n = 8;
            break;
          case 4:
            datas = [form.date];
            if (form.recorrencia !== "Sem recorrência" && form.date) {
              base = new Date(form.date + "T12:00:00");
              dias = form.recorrencia === "Semanal" ? 7 : form.recorrencia === "Quinzenal" ? 14 : 30;
              total = form.recorrencia === "Indeterminada" ? 52 : 11;
              intervalo = form.recorrencia === "Indeterminada" ? 7 : dias;
              for (i = 1; i <= total; i++) {
                nova = new Date(base);
                nova.setDate(nova.getDate() + intervalo * i);
                datas.push(nova.toISOString().split("T")[0]);
              }
            }
            temGrupo = datas.length > 1;
            _i = 0, _datas = datas;
          case 5:
            if (!(_i < _datas.length)) {
              _context5.n = 7;
              break;
            }
            dt = _datas[_i];
            _context5.n = 6;
            return db.collection("events").add(_objectSpread(_objectSpread(_objectSpread({}, d), {}, {
              date: dt
            }, temGrupo ? {
              grupoId: grupoId
            } : {}), {}, {
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 6:
            _i++;
            _context5.n = 5;
            break;
          case 7:
            _context5.n = 8;
            return db.collection("avisos").add({
              title: "\uD83D\uDCC5 Novo evento: ".concat(form.title),
              text: "Um novo evento foi adicionado \xE0 agenda: \"".concat(form.title, "\" em ").concat(fmtDate(form.date)).concat(form.local ? " — " + form.local : "", "."),
              tipo: "auto_evento",
              prioridade: "Informativo",
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 8:
            setSalvando(false);
            onClose();
          case 9:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return _salvar4.apply(this, arguments);
  }
  function excluir() {
    return _excluir2.apply(this, arguments);
  }
  function _excluir2() {
    _excluir2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var opcao, snap, batch;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (evento.grupoId) {
              _context6.n = 3;
              break;
            }
            if (window.confirm("Excluir este evento?")) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            _context6.n = 2;
            return db.collection("events").doc(evento.id).delete();
          case 2:
            _context6.n = 8;
            break;
          case 3:
            opcao = window.confirm("Clique OK para excluir ESTE E OS FUTUROS eventos da série.\nClique Cancelar para excluir SÓ ESTE evento.");
            if (!(opcao === null)) {
              _context6.n = 4;
              break;
            }
            return _context6.a(2);
          case 4:
            if (!opcao) {
              _context6.n = 7;
              break;
            }
            _context6.n = 5;
            return db.collection("events").where("grupoId", "==", evento.grupoId).get();
          case 5:
            snap = _context6.v;
            batch = db.batch();
            snap.docs.forEach(function (doc) {
              if (doc.data().date >= evento.date) batch.delete(doc.ref);
            });
            _context6.n = 6;
            return batch.commit();
          case 6:
            _context6.n = 8;
            break;
          case 7:
            _context6.n = 8;
            return db.collection("events").doc(evento.id).delete();
          case 8:
            onClose();
          case 9:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return _excluir2.apply(this, arguments);
  }
  var inp = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#888",
    marginBottom: 5
  };
  var g2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 16
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 300,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FAFAFA",
      borderRadius: "20px 20px 0 0",
      padding: "24px 20px",
      width: "100%",
      maxWidth: 640,
      maxHeight: "92vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, evento ? "Editar Evento" : "Adicionar Evento"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "#EEE",
      border: "none",
      borderRadius: 8,
      width: 32,
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16,
    color: "#666"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "T\xEDtulo *"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      borderColor: erro && !form.title ? cor : "#E8E0E0"
    }),
    value: form.title,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          title: e.target.value
        });
      });
      setErro("");
    },
    autoFocus: true
  }), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: cor,
      marginTop: 4
    }
  }, erro)), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inp,
    value: form.date,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          date: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Tipo"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.tipo,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          tipo: e.target.value
        });
      });
    }
  }, TIPOS_EVENTO.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t
    }, t);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Status de Planejamento"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.status,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          status: e.target.value
        });
      });
    }
  }, STATUS_EVENTO.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s
    }, s);
  }))), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Hor\xE1rio de Chegada"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    style: inp,
    value: form.timeChegada || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          timeChegada: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Hor\xE1rio Apresenta\xE7\xE3o"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    style: inp,
    value: form.timeApresentacao || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          timeApresentacao: e.target.value
        });
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Local"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.local || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          local: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Link Google Maps"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.mapsUrl || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          mapsUrl: e.target.value
        });
      });
    },
    placeholder: "https://maps.google.com/..."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Observa\xE7\xF5es"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      minHeight: 80,
      resize: "vertical"
    }),
    value: form.notes || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          notes: e.target.value
        });
      });
    },
    placeholder: "Informa\xE7\xF5es adicionais..."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      paddingTop: 16,
      borderTop: "1px solid #EEE"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: cor,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 10
    }
  }, "Repert\xF3rio do Evento"), (form.setlist || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, form.setlist.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        background: "#F9F5F5",
        borderRadius: 8,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: cor,
        fontWeight: 700,
        minWidth: 20
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, s.title), s.compositor && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#AAA"
      }
    }, s.compositor))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setForm(function (f) {
          return _objectSpread(_objectSpread({}, f), {}, {
            setlist: f.setlist.filter(function (_, j) {
              return j !== i;
            })
          });
        });
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#CCC",
        padding: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 14,
      color: "#CCC"
    })));
  })), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      color: "#888"
    }),
    onChange: function onChange(e) {
      var song = songs.find(function (s) {
        return s.id === e.target.value;
      });
      if (song && !(form.setlist || []).find(function (s) {
        return s.id === song.id;
      })) {
        setForm(function (f) {
          return _objectSpread(_objectSpread({}, f), {}, {
            setlist: [].concat(_toConsumableArray(f.setlist || []), [{
              id: song.id,
              title: song.title,
              compositor: song.compositor || "",
              playback: song.playback || "",
              audioOriginal: song.audioOriginal || ""
            }])
          });
        });
      }
      e.target.value = "";
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "+ Adicionar m\xFAsica ao repert\xF3rio..."), songs.filter(function (s) {
    return !(form.setlist || []).find(function (sl) {
      return sl.id === s.id;
    });
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.title, s.compositor ? " — " + s.compositor : "");
  }))), !evento && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      paddingTop: 16,
      borderTop: "1px solid #EEE"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: cor,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 12
    }
  }, "Recorr\xEAncia"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Repetir evento"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.recorrencia,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          recorrencia: e.target.value
        });
      });
    }
  }, RECORRENCIAS.map(function (r) {
    return /*#__PURE__*/React.createElement("option", {
      key: r
    }, r);
  }))), form.recorrencia !== "Sem recorrência" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA",
      marginTop: 6
    }
  }, form.recorrencia === "Indeterminada" ? "Serão criados eventos semanais por 1 ano (editável depois)." : "Serão criados 12 eventos a partir desta data.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, evento && /*#__PURE__*/React.createElement("button", {
    onClick: excluir,
    style: {
      padding: "12px 16px",
      background: "#FFF0F0",
      color: "#B41020",
      border: "1px solid #F5DADA",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Excluir"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px",
      background: "#F0EAE8",
      color: "#666",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: salvar,
    disabled: salvando,
    style: {
      flex: 1,
      padding: "13px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvando ? 0.7 : 1
    }
  }, salvando ? "Salvando..." : evento ? "Salvar" : "Adicionar"))));
}
function ModalExcluirEvento(_ref11) {
  var evento = _ref11.evento,
    onClose = _ref11.onClose;
  var _useState55 = useState(false),
    _useState56 = _slicedToArray(_useState55, 2),
    excluindo = _useState56[0],
    setExcluindo = _useState56[1];
  function excluirSoEste() {
    return _excluirSoEste.apply(this, arguments);
  }
  function _excluirSoEste() {
    _excluirSoEste = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            setExcluindo(true);
            _context7.n = 1;
            return db.collection("events").doc(evento.id).delete();
          case 1:
            onClose();
          case 2:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return _excluirSoEste.apply(this, arguments);
  }
  function excluirFuturos() {
    return _excluirFuturos.apply(this, arguments);
  }
  function _excluirFuturos() {
    _excluirFuturos = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var snap, batch;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            setExcluindo(true);
            _context8.n = 1;
            return db.collection("events").where("grupoId", "==", evento.grupoId).get();
          case 1:
            snap = _context8.v;
            batch = db.batch();
            snap.docs.forEach(function (doc) {
              if (doc.data().date >= evento.date) batch.delete(doc.ref);
            });
            _context8.n = 2;
            return batch.commit();
          case 2:
            onClose();
          case 3:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return _excluirFuturos.apply(this, arguments);
  }
  function excluirTodos() {
    return _excluirTodos.apply(this, arguments);
  }
  function _excluirTodos() {
    _excluirTodos = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var snap, batch;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            setExcluindo(true);
            _context9.n = 1;
            return db.collection("events").where("grupoId", "==", evento.grupoId).get();
          case 1:
            snap = _context9.v;
            batch = db.batch();
            snap.docs.forEach(function (doc) {
              return batch.delete(doc.ref);
            });
            _context9.n = 2;
            return batch.commit();
          case 2:
            onClose();
          case 3:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return _excluirTodos.apply(this, arguments);
  }
  var btnBase = {
    width: "100%",
    padding: "13px",
    border: "none",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
    marginBottom: 8,
    opacity: excluindo ? 0.6 : 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 400,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 16,
      padding: "24px 20px",
      width: "100%",
      maxWidth: 360,
      boxShadow: "0 8px 32px rgba(0,0,0,0.15)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 18,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 8
    }
  }, "Excluir evento"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#888",
      marginBottom: 20
    }
  }, "\"", evento.title, "\" faz parte de uma s\xE9rie. O que deseja excluir?"), /*#__PURE__*/React.createElement("button", {
    onClick: excluirSoEste,
    disabled: excluindo,
    style: _objectSpread(_objectSpread({}, btnBase), {}, {
      background: "#F5EAEA",
      color: "#B41020"
    })
  }, "S\xF3 este evento"), /*#__PURE__*/React.createElement("button", {
    onClick: excluirFuturos,
    disabled: excluindo,
    style: _objectSpread(_objectSpread({}, btnBase), {}, {
      background: "#FFF3E0",
      color: "#E65100"
    })
  }, "Este e os futuros"), /*#__PURE__*/React.createElement("button", {
    onClick: excluirTodos,
    disabled: excluindo,
    style: _objectSpread(_objectSpread({}, btnBase), {}, {
      background: "#B41020",
      color: "#fff"
    })
  }, "Excluir toda a s\xE9rie"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    disabled: excluindo,
    style: _objectSpread(_objectSpread({}, btnBase), {}, {
      background: "#F0F0F0",
      color: "#666",
      marginBottom: 0
    })
  }, "Cancelar")));
}
function Agenda(_ref12) {
  var config = _ref12.config,
    isAdmin = _ref12.isAdmin;
  var _useCollection7 = useCollection("events", "date"),
    events = _useCollection7.data,
    loading = _useCollection7.loading;
  var _useState57 = useState(new Date().getMonth()),
    _useState58 = _slicedToArray(_useState57, 2),
    mes = _useState58[0],
    setMes = _useState58[1];
  var _useState59 = useState(new Date().getFullYear()),
    _useState60 = _slicedToArray(_useState59, 2),
    ano = _useState60[0],
    setAno = _useState60[1];
  var _useState61 = useState(null),
    _useState62 = _slicedToArray(_useState61, 2),
    modal = _useState62[0],
    setModal = _useState62[1];
  var _useState63 = useState(null),
    _useState64 = _slicedToArray(_useState63, 2),
    detalhe = _useState64[0],
    setDetalhe = _useState64[1];
  var _useState65 = useState(null),
    _useState66 = _slicedToArray(_useState65, 2),
    excluirEvento = _useState66[0],
    setExcluirEvento = _useState66[1];
  var cor = config.corPrimaria || COR;
  if (loading) return /*#__PURE__*/React.createElement(Spinner, null);
  function navMes(dir) {
    var nm = mes + dir,
      na = ano;
    if (nm > 11) {
      nm = 0;
      na++;
    }
    if (nm < 0) {
      nm = 11;
      na--;
    }
    setMes(nm);
    setAno(na);
  }
  var eventosMes = events.filter(function (e) {
    if (!e.date) return false;
    var _e$date$split = e.date.split("-"),
      _e$date$split2 = _slicedToArray(_e$date$split, 2),
      y = _e$date$split2[0],
      m = _e$date$split2[1];
    return parseInt(m) - 1 === mes && parseInt(y) === ano;
  }).sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  });
  var isFeriado = function isFeriado(e) {
    return e.tipo === "Feriado Nacional" || e.tipo === "Feriado Local";
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor
    }
  }, "Agenda"), isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setModal("novo");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 20px",
      background: cor,
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      color: "#fff",
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: "#fff"
  }), " Adicionar Evento")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #EEE8E8",
      padding: "14px 20px",
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navMes(-1);
    },
    style: {
      width: 36,
      height: 36,
      border: "1px solid #EEE",
      borderRadius: 8,
      background: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 16,
    color: "#666"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 18,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, MONTHS_PT[mes].charAt(0).toUpperCase() + MONTHS_PT[mes].slice(1), " ", ano), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navMes(1);
    },
    style: {
      width: 36,
      height: 36,
      border: "1px solid #EEE",
      borderRadius: 8,
      background: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "#666"
  }))), eventosMes.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #EEE8E8",
      padding: "32px",
      textAlign: "center",
      color: "#CCC",
      fontSize: 14,
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }
  }, "Nenhum evento em ", MONTHS_PT[mes], ".") : eventosMes.map(function (e) {
    var dt = new Date(e.date + "T12:00:00");
    var dia = dt.getDate();
    var semana = WEEKDAYS_PT[dt.getDay()];
    var feriado = isFeriado(e);
    var stColor = STATUS_COLORS[e.status] || "#888";
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #EEE8E8",
        padding: "16px",
        marginBottom: 10,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        display: "flex",
        gap: 16,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 52,
        textAlign: "center",
        borderRight: "1px solid #F0EAEA",
        paddingRight: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: feriado ? "#1565C0" : cor,
        textTransform: "uppercase",
        letterSpacing: 0.8
      }
    }, MONTHS_SHORT[mes]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        color: feriado ? "#1565C0" : cor,
        lineHeight: 1.1
      }
    }, dia), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#AAA",
        marginTop: 2
      }
    }, semana)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: feriado ? 0 : 8
      }
    }, feriado && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16
      }
    }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: "#1A1D23"
      }
    }, e.title), e.tipo && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: "#F0EAE8",
        color: "#888",
        fontWeight: 600
      }
    }, e.tipo), !feriado && e.status && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: stColor + "18",
        color: stColor,
        fontWeight: 700
      }
    }, e.status)), !feriado && /*#__PURE__*/React.createElement(React.Fragment, null, e.timeChegada && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        color: "#666",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 13,
      color: "#AAA"
    }), " Chegada: ", e.timeChegada, e.timeApresentacao && " \xB7 Apresenta\xE7\xE3o: ".concat(e.timeApresentacao)), e.local && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        color: "#666",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 13,
      color: "#AAA"
    }), e.mapsUrl ? /*#__PURE__*/React.createElement("a", {
      href: e.mapsUrl,
      target: "_blank",
      rel: "noreferrer",
      style: {
        color: cor,
        textDecoration: "none"
      }
    }, e.local) : e.local), e.notes && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginTop: 4,
        fontStyle: "italic"
      }
    }, e.notes))), isAdmin && !feriado && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setModal(e);
      },
      style: {
        padding: "7px 14px",
        background: cor,
        color: "#fff",
        border: "none",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "Detalhes"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        e.grupoId ? setExcluirEvento(e) : window.confirm("Excluir este evento?") && db.collection("events").doc(e.id).delete();
      },
      style: {
        width: 32,
        height: 32,
        background: "#FFF0F0",
        border: "1px solid #F5DADA",
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-2",
      size: 14,
      color: "#B41020"
    }))));
  }), modal && /*#__PURE__*/React.createElement(ModalEvento, {
    evento: modal === "novo" ? null : modal,
    onClose: function onClose() {
      return setModal(null);
    },
    config: config
  }), excluirEvento && /*#__PURE__*/React.createElement(ModalExcluirEvento, {
    evento: excluirEvento,
    onClose: function onClose() {
      return setExcluirEvento(null);
    }
  }));
}

// ── AVISOS ────────────────────────────────────────────────────────────────────
function ModalAviso(_ref13) {
  var aviso = _ref13.aviso,
    onClose = _ref13.onClose,
    config = _ref13.config;
  var cor = config.corPrimaria || COR;
  var _useState67 = useState(aviso ? {
      title: aviso.title,
      prioridade: aviso.prioridade || "Normal",
      text: aviso.text
    } : {
      title: "",
      prioridade: "Normal",
      text: ""
    }),
    _useState68 = _slicedToArray(_useState67, 2),
    form = _useState68[0],
    setForm = _useState68[1];
  var _useState69 = useState(false),
    _useState70 = _slicedToArray(_useState69, 2),
    salvando = _useState70[0],
    setSalvando = _useState70[1];
  var _useState71 = useState(""),
    _useState72 = _slicedToArray(_useState71, 2),
    erro = _useState72[0],
    setErro = _useState72[1];
  function publicar() {
    return _publicar.apply(this, arguments);
  }
  function _publicar() {
    _publicar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            if (form.title.trim()) {
              _context0.n = 1;
              break;
            }
            setErro("Título é obrigatório.");
            return _context0.a(2);
          case 1:
            if (form.text.trim()) {
              _context0.n = 2;
              break;
            }
            setErro("Mensagem é obrigatória.");
            return _context0.a(2);
          case 2:
            setSalvando(true);
            if (!aviso) {
              _context0.n = 4;
              break;
            }
            _context0.n = 3;
            return db.collection("avisos").doc(aviso.id).update({
              title: form.title,
              prioridade: form.prioridade,
              text: form.text,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 3:
            _context0.n = 5;
            break;
          case 4:
            _context0.n = 5;
            return db.collection("avisos").add({
              title: form.title,
              prioridade: form.prioridade,
              text: form.text,
              tipo: "manual",
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 5:
            setSalvando(false);
            onClose();
          case 6:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return _publicar.apply(this, arguments);
  }
  var inp = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#888",
    marginBottom: 5
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 300,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "20px 20px 0 0",
      padding: "24px 20px",
      width: "100%",
      maxWidth: 640,
      maxHeight: "90vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, aviso ? "Editar Aviso" : "Novo Aviso"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "#EEE",
      border: "none",
      borderRadius: 8,
      width: 32,
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16,
    color: "#666"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "T\xEDtulo"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      borderColor: erro && !form.title ? cor : "#E8E0E0"
    }),
    value: form.title,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          title: e.target.value
        });
      });
      setErro("");
    },
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Prioridade"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.prioridade,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          prioridade: e.target.value
        });
      });
    }
  }, /*#__PURE__*/React.createElement("option", null, "Normal"), /*#__PURE__*/React.createElement("option", null, "Alta"), /*#__PURE__*/React.createElement("option", null, "Urgente"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Mensagem"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      minHeight: 120,
      resize: "vertical"
    }),
    value: form.text,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          text: e.target.value
        });
      });
      setErro("");
    }
  })), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: cor,
      marginBottom: 12
    }
  }, erro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px",
      background: "#F0EAE8",
      color: "#666",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: publicar,
    disabled: salvando,
    style: {
      flex: 1,
      padding: "13px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvando ? 0.7 : 1
    }
  }, salvando ? "Salvando..." : aviso ? "Salvar" : "Publicar"))));
}
function Avisos(_ref14) {
  var config = _ref14.config,
    isAdmin = _ref14.isAdmin;
  var _useCollection8 = useCollection("avisos"),
    avisos = _useCollection8.data,
    lA = _useCollection8.loading;
  var _useCollection9 = useCollection("members"),
    members = _useCollection9.data;
  var _useState73 = useState(false),
    _useState74 = _slicedToArray(_useState73, 2),
    showModal = _useState74[0],
    setShowModal = _useState74[1];
  var _useState75 = useState(null),
    _useState76 = _slicedToArray(_useState75, 2),
    editAviso = _useState76[0],
    setEditAviso = _useState76[1];
  var cor = config.corPrimaria || COR;
  if (lA) return /*#__PURE__*/React.createElement(Spinner, null);

  // Aniversariantes do mês atual
  var currentMonth = new Date().getMonth() + 1;
  var today = todayStr();
  var aniversarios = members.filter(function (m) {
    return m.active && m.birthday && parseInt(m.birthday.split("-")[1]) === currentMonth;
  }).sort(function (a, b) {
    return parseInt(a.birthday.split("-")[2]) - parseInt(b.birthday.split("-")[2]);
  });

  // Cores por prioridade
  var prioColor = {
    Urgente: cor,
    Alta: "#1565C0",
    Normal: "#E65100"
  };
  var prioBg = {
    Urgente: "#FFF5F5",
    Alta: "#EFF6FF",
    Normal: "#fff"
  };
  var prioIcon = {
    Urgente: "alert-circle",
    Alta: "alert-circle",
    Normal: "megaphone"
  };
  function fmtDataAviso(seconds) {
    if (!seconds) return "";
    return new Date(seconds * 1000).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  function excluir(_x) {
    return _excluir3.apply(this, arguments);
  }
  function _excluir3() {
    _excluir3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(id) {
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            if (window.confirm("Excluir este aviso?")) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            _context1.n = 2;
            return db.collection("avisos").doc(id).delete();
          case 2:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return _excluir3.apply(this, arguments);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor
    }
  }, "Avisos"), isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowModal(true);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 20px",
      background: cor,
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      color: "#fff",
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: "#fff"
  }), " Novo Aviso")), aniversarios.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFBEB",
      border: "1px solid #FDE68A",
      borderLeft: "3px solid #F59E0B",
      borderRadius: 12,
      padding: "16px 20px",
      marginBottom: 12,
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83C\uDF82"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "#92400E"
    }
  }, "Aniversariantes do m\xEAs \u2014 ", MONTHS_PT[currentMonth - 1].charAt(0).toUpperCase() + MONTHS_PT[currentMonth - 1].slice(1))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, aniversarios.map(function (m) {
    var dd = parseInt(m.birthday.split("-")[2]);
    var isToday = m.birthday.slice(5) === today.slice(5);
    return /*#__PURE__*/React.createElement("span", {
      key: m.id,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 10px",
        background: "#FEF3C7",
        borderRadius: 20,
        fontSize: 12,
        color: "#92400E",
        fontWeight: 600,
        border: isToday ? "2px solid #F59E0B" : "1px solid #FDE68A"
      }
    }, "\uD83C\uDF82 ", m.name, " (dia ", dd, ")", isToday ? " 🎉" : "");
  }))), avisos.length === 0 && aniversarios.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #EEE8E8",
      padding: "32px",
      textAlign: "center",
      color: "#CCC",
      fontSize: 14
    }
  }, "Nenhum aviso publicado."), avisos.map(function (a) {
    var _a$createdAt2;
    var isAuto = a.tipo && a.tipo !== "manual";
    var borderColor = isAuto ? "#F59E0B" : prioColor[a.prioridade] || cor;
    var bgColor = isAuto ? "#FFFBEB" : prioBg[a.prioridade] || "#fff";
    var iconName = isAuto ? "zap" : prioIcon[a.prioridade] || "megaphone";
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        background: bgColor,
        borderRadius: 12,
        border: "1px solid #EEE8E8",
        borderLeft: "3px solid ".concat(borderColor),
        padding: "16px 20px",
        marginBottom: 10,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: iconName,
      size: 16,
      color: borderColor
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: "#1A1D23"
      }
    }, a.title), !isAuto && a.prioridade && a.prioridade !== "Normal" && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        padding: "2px 7px",
        borderRadius: 10,
        background: borderColor + "20",
        color: borderColor,
        fontWeight: 700,
        textTransform: "uppercase"
      }
    }, a.prioridade)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
        marginLeft: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, fmtDataAviso((_a$createdAt2 = a.createdAt) === null || _a$createdAt2 === void 0 ? void 0 : _a$createdAt2.seconds)), isAdmin && !isAuto && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEditAviso(a);
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 14,
      color: "#AAA"
    })), isAdmin && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return excluir(a.id);
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-2",
      size: 14,
      color: "#CCC"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#555",
        lineHeight: 1.6
      }
    }, a.text), isAuto && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontSize: 11,
        color: "#B45309",
        fontStyle: "italic"
      }
    }, "\u26A1 Aviso autom\xE1tico"));
  }), showModal && /*#__PURE__*/React.createElement(ModalAviso, {
    onClose: function onClose() {
      return setShowModal(false);
    },
    config: config
  }), editAviso && /*#__PURE__*/React.createElement(ModalAviso, {
    aviso: editAviso,
    onClose: function onClose() {
      return setEditAviso(null);
    },
    config: config
  }));
}

// ── MÚSICAS ───────────────────────────────────────────────────────────────────
var CATEGORIAS_MUSICA = ["MPB", "Natal", "Regionais", "Sacro", "Clássico", "Popular", "Infantil", "Internacional", "Outro"];
var CAT_COLORS = {
  MPB: "#2E7D32",
  Natal: "#1565C0",
  Regionais: "#E65100",
  Sacro: "#7B1FA2",
  Clássico: "#4527A0",
  Popular: "#00838F",
  Infantil: "#F57C00",
  Internacional: "#1B5E20",
  Outro: "#616161"
};
function ModalMusica(_ref15) {
  var musica = _ref15.musica,
    onClose = _ref15.onClose,
    config = _ref15.config;
  var cor = config.corPrimaria || COR;
  var vazio = {
    title: "",
    categoria: "MPB",
    compositor: "",
    partitura: "",
    audioOriginal: "",
    audioArranjo: "",
    playback: "",
    soprano: "",
    mezzoSoprano: "",
    contralto: "",
    tenor: "",
    baritono: "",
    baixo: "",
    letra: "",
    notes: ""
  };
  var _useState77 = useState(musica ? _objectSpread(_objectSpread({}, vazio), musica) : vazio),
    _useState78 = _slicedToArray(_useState77, 2),
    form = _useState78[0],
    setForm = _useState78[1];
  var _useState79 = useState(false),
    _useState80 = _slicedToArray(_useState79, 2),
    salvando = _useState80[0],
    setSalvando = _useState80[1];
  var _useState81 = useState(""),
    _useState82 = _slicedToArray(_useState81, 2),
    erro = _useState82[0],
    setErro = _useState82[1];
  var _useState83 = useState(""),
    _useState84 = _slicedToArray(_useState83, 2),
    novaCategoria = _useState84[0],
    setNovaCategoria = _useState84[1];
  var _useState85 = useState(false),
    _useState86 = _slicedToArray(_useState85, 2),
    showNovaCateg = _useState86[0],
    setShowNovaCateg = _useState86[1];
  var _useState87 = useState(CATEGORIAS_MUSICA),
    _useState88 = _slicedToArray(_useState87, 2),
    categorias = _useState88[0],
    setCategorias = _useState88[1];
  function salvar() {
    return _salvar5.apply(this, arguments);
  }
  function _salvar5() {
    _salvar5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var d;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            if (form.title.trim()) {
              _context10.n = 1;
              break;
            }
            setErro("Título é obrigatório.");
            return _context10.a(2);
          case 1:
            setSalvando(true);
            d = {
              title: form.title,
              categoria: form.categoria,
              compositor: form.compositor || "",
              partitura: form.partitura || "",
              audioOriginal: form.audioOriginal || "",
              audioArranjo: form.audioArranjo || "",
              playback: form.playback || "",
              soprano: form.soprano || "",
              mezzoSoprano: form.mezzoSoprano || "",
              contralto: form.contralto || "",
              tenor: form.tenor || "",
              baritono: form.baritono || "",
              baixo: form.baixo || "",
              letra: form.letra || "",
              notes: form.notes || ""
            };
            if (!musica) {
              _context10.n = 3;
              break;
            }
            _context10.n = 2;
            return db.collection("songs").doc(musica.id).update(_objectSpread(_objectSpread({}, d), {}, {
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 2:
            _context10.n = 5;
            break;
          case 3:
            _context10.n = 4;
            return db.collection("songs").add(_objectSpread(_objectSpread({}, d), {}, {
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 4:
            _context10.n = 5;
            return db.collection("avisos").add({
              title: "\uD83C\uDFB5 Nova m\xFAsica: ".concat(form.title),
              text: "\"".concat(form.title, "\"").concat(form.compositor ? " de " + form.compositor : "", " foi adicionada ao repert\xF3rio na categoria ").concat(form.categoria, "."),
              tipo: "auto_musica",
              prioridade: "Normal",
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 5:
            setSalvando(false);
            onClose();
          case 6:
            return _context10.a(2);
        }
      }, _callee10);
    }));
    return _salvar5.apply(this, arguments);
  }
  function excluir() {
    return _excluir4.apply(this, arguments);
  }
  function _excluir4() {
    _excluir4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            if (window.confirm("Excluir esta música do repertório?")) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            _context11.n = 2;
            return db.collection("songs").doc(musica.id).delete();
          case 2:
            onClose();
          case 3:
            return _context11.a(2);
        }
      }, _callee11);
    }));
    return _excluir4.apply(this, arguments);
  }
  var inp = {
    width: "100%",
    padding: "10px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "#888",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.8
  };
  var g2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 14
  };
  var sec = {
    fontSize: 11,
    fontWeight: 700,
    color: cor,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 6
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 300,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FAFAFA",
      borderRadius: "20px 20px 0 0",
      padding: "24px 20px",
      width: "100%",
      maxWidth: 640,
      maxHeight: "93vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, musica ? "Editar Música" : "Adicionar Música ao Repertório"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "#EEE",
      border: "none",
      borderRadius: 8,
      width: 32,
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16,
    color: "#666"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "T\xEDtulo *"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      borderColor: erro && !form.title ? cor : "#E8E0E0"
    }),
    value: form.title,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          title: e.target.value
        });
      });
      setErro("");
    },
    autoFocus: true
  }), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: cor,
      marginTop: 4
    }
  }, erro)), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Categoria *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      flex: 1
    }),
    value: form.categoria,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          categoria: e.target.value
        });
      });
    }
  }, categorias.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowNovaCateg(function (v) {
        return !v;
      });
    },
    title: "Nova categoria",
    style: {
      width: 36,
      height: 38,
      background: cor + "15",
      border: "1px solid ".concat(cor, "33"),
      borderRadius: 8,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: cor
  }))), showNovaCateg && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      flex: 1
    }),
    value: novaCategoria,
    onChange: function onChange(e) {
      return setNovaCategoria(e.target.value);
    },
    placeholder: "Nome da categoria"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (novaCategoria.trim()) {
        setCategorias(function (c) {
          return [].concat(_toConsumableArray(c), [novaCategoria.trim()]);
        });
        setForm(function (f) {
          return _objectSpread(_objectSpread({}, f), {}, {
            categoria: novaCategoria.trim()
          });
        });
        setNovaCategoria("");
        setShowNovaCateg(false);
      }
    },
    style: {
      padding: "0 12px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: 700
    }
  }, "Criar"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Compositor"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.compositor || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          compositor: e.target.value
        });
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: sec
  }, "Materiais (links Google Drive ou URL direta)"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\uD83C\uDFBC Partitura (PDF)"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.partitura || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          partitura: e.target.value
        });
      });
    },
    placeholder: "https://drive.google.com/file/d/..."
  })), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\uD83C\uDFB5 \xC1udio Original"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.audioOriginal || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          audioOriginal: e.target.value
        });
      });
    },
    placeholder: "Drive ou YouTube (https://...)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\uD83C\uDFB5 \xC1udio/Arranjo"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.audioArranjo || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          audioArranjo: e.target.value
        });
      });
    },
    placeholder: "Drive ou YouTube (https://...)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\uD83C\uDFA7 Playback"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.playback || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          playback: e.target.value
        });
      });
    },
    placeholder: "Drive ou YouTube (https://...)"
  })), /*#__PURE__*/React.createElement("div", {
    style: sec
  }, "\xC1udios por naipe"), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Soprano"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.soprano || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          soprano: e.target.value
        });
      });
    },
    placeholder: "https://drive.google.com/..."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Mezzo-soprano"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.mezzoSoprano || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          mezzoSoprano: e.target.value
        });
      });
    },
    placeholder: "https://drive.google.com/..."
  }))), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Contralto"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.contralto || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          contralto: e.target.value
        });
      });
    },
    placeholder: "https://drive.google.com/..."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Tenor"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.tenor || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          tenor: e.target.value
        });
      });
    },
    placeholder: "https://drive.google.com/..."
  }))), /*#__PURE__*/React.createElement("div", {
    style: g2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Bar\xEDtono"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.baritono || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          baritono: e.target.value
        });
      });
    },
    placeholder: "https://drive.google.com/..."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Baixo"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.baixo || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          baixo: e.target.value
        });
      });
    },
    placeholder: "https://drive.google.com/..."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Letra"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      minHeight: 100,
      resize: "vertical"
    }),
    value: form.letra || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          letra: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Observa\xE7\xF5es"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      minHeight: 70,
      resize: "vertical"
    }),
    value: form.notes || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          notes: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, musica && /*#__PURE__*/React.createElement("button", {
    onClick: excluir,
    style: {
      padding: "12px 16px",
      background: "#FFF0F0",
      color: "#B41020",
      border: "1px solid #F5DADA",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Excluir"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px",
      background: "#F0EAE8",
      color: "#666",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: salvar,
    disabled: salvando,
    style: {
      flex: 1,
      padding: "13px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvando ? 0.7 : 1
    }
  }, salvando ? "Salvando..." : musica ? "Salvar" : "Adicionar"))));
}
function Repertorio(_ref16) {
  var config = _ref16.config,
    isAdmin = _ref16.isAdmin;
  var _useCollection0 = useCollection("songs"),
    songs = _useCollection0.data,
    loading = _useCollection0.loading;
  var _useState89 = useState(""),
    _useState90 = _slicedToArray(_useState89, 2),
    busca = _useState90[0],
    setBusca = _useState90[1];
  var _useState91 = useState("Todas as Categorias"),
    _useState92 = _slicedToArray(_useState91, 2),
    filtro = _useState92[0],
    setFiltro = _useState92[1];
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    modal = _useState94[0],
    setModal = _useState94[1];
  var _useState95 = useState(null),
    _useState96 = _slicedToArray(_useState95, 2),
    player = _useState96[0],
    setPlayer = _useState96[1];
  var cor = config.corPrimaria || COR;
  if (loading) return /*#__PURE__*/React.createElement(Spinner, null);
  var categorias = ["Todas as Categorias"].concat(_toConsumableArray(Array.from(new Set(songs.map(function (s) {
    return s.categoria;
  }).filter(Boolean))).sort()));
  var filtradas = songs.filter(function (s) {
    var q = busca.toLowerCase();
    var ok = !busca || s.title.toLowerCase().includes(q) || (s.compositor || "").toLowerCase().includes(q) || (s.categoria || "").toLowerCase().includes(q);
    var of = filtro === "Todas as Categorias" || s.categoria === filtro;
    return ok && of;
  });
  function MaterialBadge(_ref17) {
    var label = _ref17.label,
      icon = _ref17.icon,
      url = _ref17.url;
    if (!url) return null;
    return /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setPlayer({
          url: url,
          title: label
        });
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 8px",
        borderRadius: 10,
        background: "#F5EAEA",
        color: cor,
        fontSize: 11,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        marginRight: 4,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, icon), " ", label);
  }
  function temNaipes(s) {
    return s.soprano || s.mezzoSoprano || s.contralto || s.tenor || s.baritono || s.baixo;
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor
    }
  }, "Repert\xF3rio"), isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setModal("novo");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 20px",
      background: cor,
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      color: "#fff",
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: "#fff"
  }), " Adicionar M\xFAsica")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #EEE8E8",
      padding: "12px 16px",
      marginBottom: 20,
      display: "flex",
      gap: 12,
      alignItems: "center",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "#AAA"
  }), /*#__PURE__*/React.createElement("input", {
    value: busca,
    onChange: function onChange(e) {
      return setBusca(e.target.value);
    },
    placeholder: "Buscar m\xFAsicas...",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      fontSize: 14,
      fontFamily: "inherit",
      color: "#1A1D23",
      background: "none"
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: filtro,
    onChange: function onChange(e) {
      return setFiltro(e.target.value);
    },
    style: {
      border: "1px solid #EEE8E8",
      borderRadius: 8,
      padding: "7px 12px",
      fontSize: 13,
      fontFamily: "inherit",
      color: "#1A1D23",
      outline: "none",
      background: "#fff",
      cursor: "pointer"
    }
  }, categorias.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), filtradas.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #EEE8E8",
      padding: "32px",
      textAlign: "center",
      color: "#CCC",
      fontSize: 14
    }
  }, "Nenhuma m\xFAsica encontrada.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: 14
    }
  }, filtradas.map(function (s) {
    var catColor = CAT_COLORS[s.categoria] || "#616161";
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #EEE8E8",
        borderTop: "3px solid ".concat(catColor),
        padding: "16px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        cursor: isAdmin ? "pointer" : "default"
      },
      onClick: isAdmin ? function () {
        return setModal(s);
      } : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: "#1A1D23",
        flex: 1,
        paddingRight: 8
      }
    }, s.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: catColor + "18",
        color: catColor,
        fontWeight: 700,
        flexShrink: 0
      }
    }, s.categoria)), s.compositor && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginBottom: 10
      }
    }, s.compositor), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(MaterialBadge, {
      label: "Partitura",
      icon: "\uD83C\uDFBC",
      url: s.partitura
    }), /*#__PURE__*/React.createElement(MaterialBadge, {
      label: "\xC1udio Original",
      icon: "\uD83C\uDFB5",
      url: s.audioOriginal
    }), /*#__PURE__*/React.createElement(MaterialBadge, {
      label: "Arranjo",
      icon: "\uD83C\uDFB5",
      url: s.audioArranjo
    }), /*#__PURE__*/React.createElement(MaterialBadge, {
      label: "Playback",
      icon: "\uD83C\uDFA7",
      url: s.playback
    }), temNaipes(s) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setPlayer({
          url: s.soprano || s.mezzoSoprano || s.contralto || s.tenor || s.baritono || s.baixo,
          title: "Naipes — " + s.title,
          naipes: {
            soprano: s.soprano,
            mezzoSoprano: s.mezzoSoprano,
            contralto: s.contralto,
            tenor: s.tenor,
            baritono: s.baritono,
            baixo: s.baixo
          }
        });
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 8px",
        borderRadius: 10,
        background: "#F5EAEA",
        color: cor,
        fontSize: 11,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        marginRight: 4,
        marginBottom: 4
      }
    }, "\uD83C\uDFB6 Naipes"), s.letra && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setPlayer({
          url: "letra",
          title: s.title,
          letra: s.letra
        });
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 8px",
        borderRadius: 10,
        background: "#F5F5F5",
        color: "#666",
        fontSize: 11,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        marginRight: 4,
        marginBottom: 4
      }
    }, "\uD83D\uDCC4 Letra")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA",
      marginTop: 12,
      textAlign: "right"
    }
  }, filtradas.length, " m\xFAsica", filtradas.length !== 1 ? "s" : ""), modal && /*#__PURE__*/React.createElement(ModalMusica, {
    musica: modal === "novo" ? null : modal,
    onClose: function onClose() {
      return setModal(null);
    },
    config: config
  }), player && /*#__PURE__*/React.createElement(PlayerModal, {
    url: player.url,
    title: player.title,
    onClose: function onClose() {
      return setPlayer(null);
    },
    letra: player.letra,
    naipes: player.naipes
  }));
}

// ── SALA DE ESTUDOS ───────────────────────────────────────────────────────────
var TIPOS_MIDIA = [{
  key: "video",
  label: "Vídeo",
  icon: "video",
  bg: "#EFF6FF",
  color: "#1565C0"
}, {
  key: "pdf",
  label: "PDF",
  icon: "file-text",
  bg: "#FFF5F5",
  color: "#B41020"
}, {
  key: "audio",
  label: "Áudio",
  icon: "mic",
  bg: "#F0FDF4",
  color: "#2E7D32"
}, {
  key: "texto",
  label: "Texto",
  icon: "align-left",
  bg: "#FFFBEB",
  color: "#92400E"
}, {
  key: "foto",
  label: "Foto",
  icon: "image",
  bg: "#F5F3FF",
  color: "#6D28D9"
}];
var CATS_ESTUDOS = ["Vocalise", "Aula", "Documentário", "Reportagem", "Concerto", "Ensaio", "Material de Apoio", "Outro"];
function ModalEstudo(_ref18) {
  var estudo = _ref18.estudo,
    onClose = _ref18.onClose,
    config = _ref18.config;
  var cor = config.corPrimaria || COR;
  var vazio = {
    tipo: "video",
    categoria: "Aula",
    title: "",
    descricao: "",
    url: ""
  };
  var _useState97 = useState(estudo ? _objectSpread(_objectSpread({}, vazio), estudo) : vazio),
    _useState98 = _slicedToArray(_useState97, 2),
    form = _useState98[0],
    setForm = _useState98[1];
  var _useState99 = useState(false),
    _useState100 = _slicedToArray(_useState99, 2),
    salvando = _useState100[0],
    setSalvando = _useState100[1];
  var _useState101 = useState(""),
    _useState102 = _slicedToArray(_useState101, 2),
    erro = _useState102[0],
    setErro = _useState102[1];
  function salvar() {
    return _salvar6.apply(this, arguments);
  }
  function _salvar6() {
    _salvar6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var d, _TIPOS_MIDIA$find;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            if (form.title.trim()) {
              _context12.n = 1;
              break;
            }
            setErro("Título é obrigatório.");
            return _context12.a(2);
          case 1:
            if (form.url.trim()) {
              _context12.n = 2;
              break;
            }
            setErro("Link é obrigatório.");
            return _context12.a(2);
          case 2:
            setSalvando(true);
            d = {
              tipo: form.tipo,
              categoria: form.categoria,
              title: form.title,
              descricao: form.descricao || "",
              url: form.url
            };
            if (!estudo) {
              _context12.n = 4;
              break;
            }
            _context12.n = 3;
            return db.collection("estudos").doc(estudo.id).update(_objectSpread(_objectSpread({}, d), {}, {
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 3:
            _context12.n = 6;
            break;
          case 4:
            _context12.n = 5;
            return db.collection("estudos").add(_objectSpread(_objectSpread({}, d), {}, {
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 5:
            _context12.n = 6;
            return db.collection("avisos").add({
              title: "\uD83D\uDCDA Novo material: ".concat(form.title),
              text: "Um novo material foi adicionado \xE0 Sala de Estudos: \"".concat(form.title, "\" (").concat(((_TIPOS_MIDIA$find = TIPOS_MIDIA.find(function (t) {
                return t.key === form.tipo;
              })) === null || _TIPOS_MIDIA$find === void 0 ? void 0 : _TIPOS_MIDIA$find.label) || form.tipo, " \u2014 ").concat(form.categoria, ")."),
              tipo: "auto_estudo",
              prioridade: "Normal",
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 6:
            setSalvando(false);
            onClose();
          case 7:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    return _salvar6.apply(this, arguments);
  }
  function excluir() {
    return _excluir5.apply(this, arguments);
  }
  function _excluir5() {
    _excluir5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            if (window.confirm("Excluir este material?")) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            _context13.n = 2;
            return db.collection("estudos").doc(estudo.id).delete();
          case 2:
            onClose();
          case 3:
            return _context13.a(2);
        }
      }, _callee13);
    }));
    return _excluir5.apply(this, arguments);
  }
  var inp = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#888",
    marginBottom: 6
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 300,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FAFAFA",
      borderRadius: "20px 20px 0 0",
      padding: "24px 20px",
      width: "100%",
      maxWidth: 600,
      maxHeight: "92vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, estudo ? "Editar material" : "Adicionar material"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "#EEE",
      border: "none",
      borderRadius: 8,
      width: 32,
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16,
    color: "#666"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Tipo de m\xEDdia *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, TIPOS_MIDIA.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setForm(function (f) {
          return _objectSpread(_objectSpread({}, f), {}, {
            tipo: t.key
          });
        });
      },
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "10px 16px",
        borderRadius: 10,
        border: "2px solid ".concat(form.tipo === t.key ? cor : "#EEE"),
        background: form.tipo === t.key ? cor + "10" : "#fff",
        cursor: "pointer",
        fontFamily: "inherit",
        minWidth: 70
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 20,
      color: form.tipo === t.key ? cor : "#AAA"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: form.tipo === t.key ? cor : "#888"
      }
    }, t.label));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Categoria *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, CATS_ESTUDOS.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: function onClick() {
        return setForm(function (f) {
          return _objectSpread(_objectSpread({}, f), {}, {
            categoria: c
          });
        });
      },
      style: {
        padding: "6px 14px",
        borderRadius: 20,
        border: "1px solid ".concat(form.categoria === c ? cor : "#EEE"),
        background: form.categoria === c ? cor : "#fff",
        color: form.categoria === c ? "#fff" : "#555",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "T\xEDtulo *"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      borderColor: erro && !form.title ? cor : "#E8E0E0"
    }),
    value: form.title,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          title: e.target.value
        });
      });
      setErro("");
    },
    placeholder: "Nome do material...",
    autoFocus: true
  }), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: cor,
      marginTop: 4
    }
  }, erro)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Descri\xE7\xE3o (opcional)"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.descricao || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          descricao: e.target.value
        });
      });
    },
    placeholder: "Breve observa\xE7\xE3o..."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Link do YouTube ou Google Drive"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      borderColor: erro && !form.url ? cor : "#E8E0E0"
    }),
    value: form.url || "",
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          url: e.target.value
        });
      });
      setErro("");
    },
    placeholder: "https://www.youtube.com/watch?v=... ou https://drive.google.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, estudo && /*#__PURE__*/React.createElement("button", {
    onClick: excluir,
    style: {
      padding: "12px 16px",
      background: "#FFF0F0",
      color: "#B41020",
      border: "1px solid #F5DADA",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Excluir"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px",
      background: "#F0EAE8",
      color: "#666",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: salvar,
    disabled: salvando,
    style: {
      flex: 1,
      padding: "13px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvando ? 0.7 : 1
    }
  }, salvando ? "Salvando..." : estudo ? "Salvar" : "Adicionar"))));
}
function SalaEstudos(_ref19) {
  var config = _ref19.config,
    isAdmin = _ref19.isAdmin;
  var _useCollection1 = useCollection("estudos"),
    estudos = _useCollection1.data,
    loading = _useCollection1.loading;
  var _useState103 = useState("Todos"),
    _useState104 = _slicedToArray(_useState103, 2),
    filtro = _useState104[0],
    setFiltro = _useState104[1];
  var _useState105 = useState(null),
    _useState106 = _slicedToArray(_useState105, 2),
    modal = _useState106[0],
    setModal = _useState106[1];
  var _useState107 = useState(null),
    _useState108 = _slicedToArray(_useState107, 2),
    player = _useState108[0],
    setPlayer = _useState108[1];
  var cor = config.corPrimaria || COR;
  if (loading) return /*#__PURE__*/React.createElement(Spinner, null);

  // Categorias com contagem
  var contagem = {};
  estudos.forEach(function (e) {
    contagem[e.categoria] = (contagem[e.categoria] || 0) + 1;
  });
  var cats = ["Todos"].concat(_toConsumableArray(Object.keys(contagem).sort()));
  var filtrados = filtro === "Todos" ? estudos : estudos.filter(function (e) {
    return e.categoria === filtro;
  });
  function getMidia(tipo) {
    return TIPOS_MIDIA.find(function (t) {
      return t.key === tipo;
    }) || TIPOS_MIDIA[0];
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor
    }
  }, "Sala de Estudos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginTop: 2
    }
  }, "Recursos did\xE1ticos para o corista")), isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setModal("novo");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 20px",
      background: cor,
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      color: "#fff",
      cursor: "pointer",
      fontFamily: "inherit",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: "#fff"
  }), " Adicionar material")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      margin: "16px 0 20px"
    }
  }, cats.map(function (c) {
    var count = c === "Todos" ? estudos.length : contagem[c] || 0;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: function onClick() {
        return setFiltro(c);
      },
      style: {
        padding: "6px 14px",
        borderRadius: 20,
        border: "1px solid ".concat(filtro === c ? cor : "#EEE"),
        background: filtro === c ? cor : "#fff",
        color: filtro === c ? "#fff" : "#555",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, c, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        opacity: 0.8
      }
    }, "(", count, ")"));
  })), filtrados.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #EEE8E8",
      padding: "32px",
      textAlign: "center",
      color: "#CCC",
      fontSize: 14
    }
  }, "Nenhum material encontrado.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 16
    }
  }, filtrados.map(function (e) {
    var midia = getMidia(e.tipo);
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #EEE8E8",
        overflow: "hidden",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 120,
        background: midia.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: midia.icon,
      size: 40,
      color: midia.color
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginBottom: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: midia.bg,
        color: midia.color,
        fontWeight: 700
      }
    }, midia.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: "#F5F5F5",
        color: "#666",
        fontWeight: 600
      }
    }, e.categoria)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#1A1D23",
        marginBottom: 4,
        lineHeight: 1.3
      }
    }, e.title), e.descricao && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginBottom: 10
      }
    }, e.descricao), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setPlayer({
          url: e.url,
          title: e.title
        });
      },
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding: "8px",
        background: cor,
        color: "#fff",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 700,
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 13,
      color: "#fff"
    }), " Abrir"), isAdmin && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setModal(e);
      },
      style: {
        width: 32,
        height: 32,
        background: "#F5F5F5",
        border: "none",
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 13,
      color: "#888"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.n) {
            case 0:
              if (!window.confirm("Excluir este material?")) {
                _context14.n = 1;
                break;
              }
              _context14.n = 1;
              return db.collection("estudos").doc(e.id).delete();
            case 1:
              return _context14.a(2);
          }
        }, _callee14);
      })),
      style: {
        width: 32,
        height: 32,
        background: "#FFF0F0",
        border: "none",
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-2",
      size: 13,
      color: "#B41020"
    }))))));
  })), modal && /*#__PURE__*/React.createElement(ModalEstudo, {
    estudo: modal === "novo" ? null : modal,
    onClose: function onClose() {
      return setModal(null);
    },
    config: config
  }), player && /*#__PURE__*/React.createElement(PlayerModal, {
    url: player.url,
    title: player.title,
    onClose: function onClose() {
      return setPlayer(null);
    }
  }));
}

// ── APRESENTAÇÃO ──────────────────────────────────────────────────────────────
function Apresentacao(_ref21) {
  var config = _ref21.config;
  var _useCollection10 = useCollection("events", "date"),
    events = _useCollection10.data;
  var _useState109 = useState(null),
    _useState110 = _slicedToArray(_useState109, 2),
    eventoSel = _useState110[0],
    setEventoSel = _useState110[1];
  var _useState111 = useState([]),
    _useState112 = _slicedToArray(_useState111, 2),
    setlist = _useState112[0],
    setSetlist = _useState112[1];
  var _useState113 = useState(null),
    _useState114 = _slicedToArray(_useState113, 2),
    tocando = _useState114[0],
    setTocando = _useState114[1];
  var _useState115 = useState(null),
    _useState116 = _slicedToArray(_useState115, 2),
    dragIdx = _useState116[0],
    setDragIdx = _useState116[1];
  var cor = config.corPrimaria || COR;
  var today = todayStr();
  useEffect(function () {
    if (eventoSel) setSetlist(eventoSel.setlist || []);else setSetlist([]);
    setTocando(null);
  }, [eventoSel === null || eventoSel === void 0 ? void 0 : eventoSel.id]);
  var proximos = events.filter(function (e) {
    var _e$setlist;
    return e.date >= today && ((_e$setlist = e.setlist) === null || _e$setlist === void 0 ? void 0 : _e$setlist.length) > 0;
  }).sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  });
  var passados = events.filter(function (e) {
    var _e$setlist2;
    return e.date < today && ((_e$setlist2 = e.setlist) === null || _e$setlist2 === void 0 ? void 0 : _e$setlist2.length) > 0;
  }).sort(function (a, b) {
    return a.date > b.date ? -1 : 1;
  }).slice(0, 10);
  function salvarOrdem(_x2) {
    return _salvarOrdem.apply(this, arguments);
  }
  function _salvarOrdem() {
    _salvarOrdem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(nova) {
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            if (eventoSel) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2);
          case 1:
            setSetlist(nova);
            _context15.n = 2;
            return db.collection("events").doc(eventoSel.id).update({
              setlist: nova,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 2:
            return _context15.a(2);
        }
      }, _callee15);
    }));
    return _salvarOrdem.apply(this, arguments);
  }
  function moverCima(idx) {
    if (idx === 0) return;
    var nova = _toConsumableArray(setlist);
    var _ref22 = [nova[idx], nova[idx - 1]];
    nova[idx - 1] = _ref22[0];
    nova[idx] = _ref22[1];
    salvarOrdem(nova);
  }
  function moverBaixo(idx) {
    if (idx === setlist.length - 1) return;
    var nova = _toConsumableArray(setlist);
    var _ref23 = [nova[idx + 1], nova[idx]];
    nova[idx] = _ref23[0];
    nova[idx + 1] = _ref23[1];
    salvarOrdem(nova);
  }
  var mesaUrl = eventoSel ? "".concat(window.location.origin).concat(window.location.pathname, "?mesa=").concat(eventoSel.id) : "";
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "16px 20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  var inp = {
    padding: "10px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor
    }
  }, "Apresenta\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginTop: 2
    }
  }, "Painel operacional para o dia do show \u2014 playbacks e setlist")), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, card), {}, {
      marginTop: 20
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 12
    }
  }, "Selecionar Evento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      flex: 1,
      minWidth: 200
    }),
    value: (eventoSel === null || eventoSel === void 0 ? void 0 : eventoSel.id) || "",
    onChange: function onChange(e) {
      var ev = [].concat(_toConsumableArray(proximos), _toConsumableArray(passados)).find(function (ev) {
        return ev.id === e.target.value;
      });
      setEventoSel(ev || null);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar evento..."), proximos.length > 0 && /*#__PURE__*/React.createElement("optgroup", {
    label: "PR\xD3XIMOS"
  }, proximos.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.date, " \u2014 ", e.title);
  })), passados.length > 0 && /*#__PURE__*/React.createElement("optgroup", {
    label: "PASSADOS"
  }, passados.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.date, " \u2014 ", e.title);
  })))), eventoSel && setlist.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#E65100",
      marginTop: 8
    }
  }, "Este evento n\xE3o tem m\xFAsicas no repert\xF3rio. Adicione pelo m\xF3dulo Agenda \u2192 editar evento.")), eventoSel && mesaUrl && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1A1D23",
      borderRadius: 12,
      padding: "16px 20px",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "monitor-speaker",
    size: 16,
    color: "#AAA"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Mesa de Som \u2014 Painel do Sonoplasta")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#888",
      marginBottom: 10
    }
  }, "Acesso p\xFAblico sem senha \u2014 envie este link para o sonoplasta no dia da apresenta\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    readOnly: true,
    value: mesaUrl,
    style: _objectSpread(_objectSpread({}, inp), {}, {
      flex: 1,
      background: "#2A2D33",
      color: "#CCC",
      border: "1px solid #333"
    })
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigator.clipboard.writeText(mesaUrl).then(function () {
        return alert("Link copiado!");
      });
    },
    style: {
      padding: "10px 16px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Copiar"), /*#__PURE__*/React.createElement("a", {
    href: mesaUrl,
    target: "_blank",
    rel: "noreferrer",
    style: {
      padding: "10px 16px",
      background: "#2A2D33",
      color: "#CCC",
      border: "1px solid #444",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Abrir"))), eventoSel && setlist.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "music",
    size: 16,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: cor
    }
  }, "Setlist"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA"
    }
  }, "(", setlist.length, " m\xFAsica", setlist.length !== 1 ? "s" : "", ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#CCC",
      marginLeft: "auto"
    }
  }, "\u2191\u2193 para reordenar")), setlist.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return setTocando(s);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 8,
        marginBottom: 6,
        cursor: "pointer",
        background: (tocando === null || tocando === void 0 ? void 0 : tocando.id) === s.id ? cor + "15" : "#F9F5F5",
        border: (tocando === null || tocando === void 0 ? void 0 : tocando.id) === s.id ? "1px solid ".concat(cor, "33") : "1px solid transparent",
        transition: "background 0.15s"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: cor,
        fontWeight: 700,
        minWidth: 22,
        textAlign: "center"
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, s.title), s.compositor && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#AAA"
      }
    }, s.compositor)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        moverCima(i);
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 2,
        color: i === 0 ? "#EEE" : "#888"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-up",
      size: 14,
      color: i === 0 ? "#EEE" : "#888"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        moverBaixo(i);
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 2,
        color: i === setlist.length - 1 ? "#EEE" : "#888"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14,
      color: i === setlist.length - 1 ? "#EEE" : "#888"
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "volume-2",
    size: 16,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: cor
    }
  }, "Player")), !tocando ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      color: "#CCC",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "music",
    size: 40,
    color: "#EEE"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "Clique em uma m\xFAsica para reproduzir")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 4
    }
  }, tocando.title), tocando.compositor && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA",
      marginBottom: 12
    }
  }, tocando.compositor), tocando.playback || tocando.audioOriginal ? /*#__PURE__*/React.createElement("iframe", {
    src: function () {
      var url = tocando.playback || tocando.audioOriginal;
      var yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (yt) return "https://www.youtube.com/embed/".concat(yt[1], "?autoplay=1");
      var dr = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (dr) return "https://drive.google.com/file/d/".concat(dr[1], "/preview");
      return url;
    }(),
    style: {
      width: "100%",
      height: 200,
      border: "none",
      borderRadius: 8
    },
    allow: "autoplay; fullscreen",
    title: tocando.title
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      background: "#F5F5F5",
      borderRadius: 8,
      textAlign: "center",
      color: "#AAA",
      fontSize: 13
    }
  }, "Esta m\xFAsica n\xE3o tem playback cadastrado."), setlist[setlist.findIndex(function (s) {
    return s.id === tocando.id;
  }) + 1] && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "8px 12px",
      background: "#F9F5F5",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "skip-forward",
    size: 13,
    color: "#AAA"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA"
    }
  }, "A seguir: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1A1D23",
      fontWeight: 600
    }
  }, setlist[setlist.findIndex(function (s) {
    return s.id === tocando.id;
  }) + 1].title)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTocando(setlist[setlist.findIndex(function (s) {
        return s.id === tocando.id;
      }) + 1]);
    },
    style: {
      marginLeft: "auto",
      padding: "4px 10px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 6,
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Pr\xF3xima"))))), !eventoSel && /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, card), {}, {
      textAlign: "center",
      padding: "48px 20px",
      color: "#CCC"
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "qr-code",
    size: 48,
    color: "#EEE"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 15,
      fontWeight: 600,
      color: "#CCC"
    }
  }, "Selecione um evento acima"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 4
    }
  }, "Para gerenciar o setlist e playbacks da apresenta\xE7\xE3o")));
}

// ── FREQUÊNCIA POR EVENTOS (usado no Relatório) ───────────────────────────────
function FrequenciaEventos(_ref24) {
  var eventos = _ref24.eventos,
    frequencias = _ref24.frequencias,
    config = _ref24.config;
  var cor = config.corPrimaria || COR;
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "16px 20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };

  // Agrupar frequências por eventoId
  var porEvento = {};
  frequencias.forEach(function (f) {
    if (!f.eventoId) return;
    if (!porEvento[f.eventoId]) porEvento[f.eventoId] = [];
    porEvento[f.eventoId].push(f);
  });
  var eventosComFreq = eventos.filter(function (e) {
    var _porEvento$e$id;
    return ((_porEvento$e$id = porEvento[e.id]) === null || _porEvento$e$id === void 0 ? void 0 : _porEvento$e$id.length) > 0;
  });
  if (eventosComFreq.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard-check",
    size: 16,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Frequ\xEAncia por Evento")), eventosComFreq.map(function (e) {
    var lista = porEvento[e.id] || [];
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        marginBottom: 16,
        paddingBottom: 16,
        borderBottom: "1px solid #F5F0F0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#1A1D23"
      }
    }, e.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, e.date ? new Date(e.date + "T12:00:00").toLocaleDateString("pt-BR") : "")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: cor
      }
    }, lista.length, " presente", lista.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6
      }
    }, lista.map(function (f) {
      return /*#__PURE__*/React.createElement("span", {
        key: f.id,
        style: {
          fontSize: 12,
          padding: "3px 10px",
          borderRadius: 20,
          background: "#F0EAEA",
          color: cor,
          fontWeight: 600
        }
      }, f.membroNome);
    })));
  }));
}

// ── FREQUÊNCIA DE ACESSO ──────────────────────────────────────────────────────
function FrequenciaAcesso(_ref25) {
  var config = _ref25.config;
  var _useState117 = useState([]),
    _useState118 = _slicedToArray(_useState117, 2),
    acessos = _useState118[0],
    setAcessos = _useState118[1];
  var cor = config.corPrimaria || COR;
  useEffect(function () {
    db.collection("acessos").onSnapshot(function (snap) {
      setAcessos(snap.docs.map(function (d) {
        return _objectSpread({
          id: d.id
        }, d.data());
      }));
    });
  }, []);
  var hoje = new Date();
  var trintaDiasAtras = new Date(hoje);
  trintaDiasAtras.setDate(trintaDiasAtras.getDate() - 30);
  var trintaStr = trintaDiasAtras.toISOString().split("T")[0];

  // Agrupar por corista
  var porCorista = {};
  acessos.forEach(function (a) {
    var _a$dataHora;
    if (!a.nome) return;
    if (!porCorista[a.nome]) porCorista[a.nome] = {
      total: 0,
      ultimos30: 0,
      ultimoAcesso: null
    };
    porCorista[a.nome].total++;
    if (a.data && a.data >= trintaStr) porCorista[a.nome].ultimos30++;
    var ts = (_a$dataHora = a.dataHora) === null || _a$dataHora === void 0 ? void 0 : _a$dataHora.seconds;
    if (ts && (!porCorista[a.nome].ultimoAcesso || ts > porCorista[a.nome].ultimoAcesso)) {
      porCorista[a.nome].ultimoAcesso = ts;
    }
  });
  var lista = Object.entries(porCorista).sort(function (a, b) {
    return b[1].total - a[1].total;
  });
  var maxTotal = Math.max.apply(Math, _toConsumableArray(lista.map(function (_ref26) {
    var _ref27 = _slicedToArray(_ref26, 2),
      v = _ref27[1];
    return v.total;
  })).concat([1]));
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "16px 20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 16,
    color: "#2E7D32"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Frequ\xEAncia de Acesso ao App")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA",
      marginBottom: 16
    }
  }, "Quantas vezes cada corista entrou no aplicativo (total e \xFAltimos 30 dias)"), lista.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Nenhum acesso registrado ainda.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, lista.slice(0, 10).map(function (_ref28) {
    var _ref29 = _slicedToArray(_ref28, 2),
      nome = _ref29[0],
      dados = _ref29[1];
    return /*#__PURE__*/React.createElement("div", {
      key: nome,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#555",
        minWidth: 100,
        textAlign: "right",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, nome.split(" ")[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        background: "#F0F0F0",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(dados.total / maxTotal * 100, "%"),
        height: "100%",
        background: "#2E7D32",
        borderRadius: 4
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        background: "#F0F0F0",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(dados.ultimos30 / maxTotal * 100, "%"),
        height: "100%",
        background: "#B41020",
        borderRadius: 4
      }
    }))));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 8,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 11,
      color: "#555"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      background: "#2E7D32",
      borderRadius: 2
    }
  }), " Total"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 11,
      color: "#555"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      background: "#B41020",
      borderRadius: 2
    }
  }), " \xDAltimos 30 dias"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid #EEE",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "40px 1fr 80px 80px 1fr",
      padding: "8px 12px",
      background: "#FAFAFA",
      borderBottom: "1px solid #EEE"
    }
  }, ["#", "Corista", "Total", "Últ. 30 dias", "Último acesso"].map(function (h) {
    return /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: cor
      }
    }, h);
  })), lista.map(function (_ref30, i) {
    var _ref31 = _slicedToArray(_ref30, 2),
      nome = _ref31[0],
      dados = _ref31[1];
    return /*#__PURE__*/React.createElement("div", {
      key: nome,
      style: {
        display: "grid",
        gridTemplateColumns: "40px 1fr 80px 80px 1fr",
        padding: "10px 12px",
        borderBottom: i < lista.length - 1 ? "1px solid #F5F5F5" : "none",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, nome), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 20,
        background: "#E8F5E9",
        color: "#2E7D32",
        fontSize: 12,
        fontWeight: 700
      }
    }, dados.total)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 20,
        background: "#FEE2E2",
        color: "#B41020",
        fontSize: 12,
        fontWeight: 700
      }
    }, dados.ultimos30)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#888"
      }
    }, dados.ultimoAcesso ? new Date(dados.ultimoAcesso * 1000).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : "—"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA",
      marginTop: 8
    }
  }, "\u2197 ", lista.length, " corista", lista.length !== 1 ? "s" : "", " com acesso registrado")));
}

// ── RELATÓRIOS ────────────────────────────────────────────────────────────────
function Relatorios(_ref32) {
  var config = _ref32.config;
  var _useCollection11 = useCollection("events", "date"),
    events = _useCollection11.data;
  var _useCollection12 = useCollection("members"),
    members = _useCollection12.data;
  var _useCollection13 = useCollection("songs"),
    songs = _useCollection13.data;
  var _useCollection14 = useCollection("frequencias", "dataHora"),
    frequencias = _useCollection14.data;
  var cor = config.corPrimaria || COR;
  var _useState119 = useState(new Date().getFullYear() + "-01-01"),
    _useState120 = _slicedToArray(_useState119, 2),
    dataInicio = _useState120[0],
    setDataInicio = _useState120[1];
  var _useState121 = useState(todayStr()),
    _useState122 = _slicedToArray(_useState121, 2),
    dataFim = _useState122[0],
    setDataFim = _useState122[1];
  var _useState123 = useState("todos"),
    _useState124 = _slicedToArray(_useState123, 2),
    eventoFiltro = _useState124[0],
    setEventoFiltro = _useState124[1];
  var _useState125 = useState({}),
    _useState126 = _slicedToArray(_useState125, 2),
    textos = _useState126[0],
    setTextos = _useState126[1];
  var _useState127 = useState(false),
    _useState128 = _slicedToArray(_useState127, 2),
    editTextos = _useState128[0],
    setEditTextos = _useState128[1];
  var _useState129 = useState({}),
    _useState130 = _slicedToArray(_useState129, 2),
    formTextos = _useState130[0],
    setFormTextos = _useState130[1];
  var _useState131 = useState(false),
    _useState132 = _slicedToArray(_useState131, 2),
    salvandoTextos = _useState132[0],
    setSalvandoTextos = _useState132[1];

  // Carregar textos qualitativos do Firebase
  useEffect(function () {
    db.collection("config").doc("relatorio").get().then(function (doc) {
      if (doc.exists) {
        setTextos(doc.data());
        setFormTextos(doc.data());
      }
    });
  }, []);
  function salvarTextos() {
    return _salvarTextos.apply(this, arguments);
  } // Filtrar eventos por período
  function _salvarTextos() {
    _salvarTextos = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            setSalvandoTextos(true);
            _context16.n = 1;
            return db.collection("config").doc("relatorio").set(formTextos, {
              merge: true
            });
          case 1:
            setTextos(formTextos);
            setSalvandoTextos(false);
            setEditTextos(false);
          case 2:
            return _context16.a(2);
        }
      }, _callee16);
    }));
    return _salvarTextos.apply(this, arguments);
  }
  var eventosPeriodo = events.filter(function (e) {
    return e.date >= dataInicio && e.date <= dataFim;
  });
  var eventosFiltrados = eventoFiltro === "todos" ? eventosPeriodo : eventosPeriodo.filter(function (e) {
    return e.id === eventoFiltro;
  });
  var ativos = members.filter(function (m) {
    return m.active;
  });
  var apresentacoes = eventosFiltrados.filter(function (e) {
    return e.tipo === "Apresentação";
  });

  // Contagem por tipo
  var porTipo = {};
  eventosFiltrados.forEach(function (e) {
    porTipo[e.tipo || "Outro"] = (porTipo[e.tipo || "Outro"] || 0) + 1;
  });

  // Contagem por status
  var porStatus = {};
  eventosFiltrados.forEach(function (e) {
    porStatus[e.status || "—"] = (porStatus[e.status || "—"] || 0) + 1;
  });
  var statusColors = {
    Confirmado: "#2E7D32",
    Planejada: "#1565C0",
    Cancelado: "#B41020",
    Reagendado: "#E65100",
    Suspenso: "#7B1FA2"
  };
  var sigLucia = textos.sigLucia || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
  var sigMaestro = textos.sigMaestro || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";
  function gerarPDFListaPresenca() {
    var nomeApp = config.nomeApp || "Flamboyant Coral";
    var logoUrl = config.logoUrl || LOGO_URL;
    var cidade = textos.cidade || "Goiânia – GO";
    var maestro = textos.maestro || "Maestro";
    var produtora = textos.produtora || "Lucia Kratz";
    var sigLucia = textos.sigLucia || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
    var sigMaestro = textos.sigMaestro || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";
    var hoje = new Date().toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    var periodoFmt = "".concat(new Date(dataInicio + "T12:00:00").toLocaleDateString("pt-BR"), " a ").concat(new Date(dataFim + "T12:00:00").toLocaleDateString("pt-BR"));
    var porEvento = {};
    frequencias.forEach(function (f) {
      if (f.eventoId) {
        if (!porEvento[f.eventoId]) porEvento[f.eventoId] = [];
        porEvento[f.eventoId].push(f);
      }
    });
    var eventosComFreq = eventosFiltrados.filter(function (e) {
      var _porEvento$e$id2;
      return ((_porEvento$e$id2 = porEvento[e.id]) === null || _porEvento$e$id2 === void 0 ? void 0 : _porEvento$e$id2.length) > 0;
    }).sort(function (a, b) {
      return a.date > b.date ? 1 : -1;
    });
    if (eventosComFreq.length === 0) {
      alert("Nenhum evento com presença registrada no período.");
      return;
    }
    var paginas = eventosComFreq.map(function (e) {
      var lista = porEvento[e.id] || [];
      var dataEvento = e.date ? new Date(e.date + "T12:00:00").toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) : "";
      var linhas = lista.map(function (f, i) {
        var _f$dataHora;
        return "\n                <tr>\n                    <td style=\"text-align:center;width:36px\">".concat(i + 1, "</td>\n                    <td>").concat(f.membroNome, "</td>\n                    <td>").concat(f.naipe || "—", "</td>\n                    <td style=\"text-align:center\">").concat((_f$dataHora = f.dataHora) !== null && _f$dataHora !== void 0 && _f$dataHora.seconds ? new Date(f.dataHora.seconds * 1000).toLocaleString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit"
        }) : "—", "</td>\n                </tr>");
      }).join("");
      return "\n                <div class=\"pagina\">\n                    <div class=\"header\">\n                        <img src=\"".concat(logoUrl, "\" class=\"logo\"/>\n                        <div style=\"text-align:right;font-size:11px;color:#666\"><strong>").concat(nomeApp, "</strong><br>").concat(cidade, "</div>\n                    </div>\n                    <div class=\"titulo\">Lista de Presen\xE7a</div>\n                    <div class=\"evento-info\">\n                        <div class=\"info-row\"><span class=\"info-lbl\">Evento:</span><span>").concat(e.title, "</span></div>\n                        <div class=\"info-row\"><span class=\"info-lbl\">Data:</span><span>").concat(dataEvento, "</span></div>\n                        ").concat(e.local ? "<div class=\"info-row\"><span class=\"info-lbl\">Local:</span><span>".concat(e.local, "</span></div>") : "", "\n                        ").concat(e.tipo ? "<div class=\"info-row\"><span class=\"info-lbl\">Tipo:</span><span>".concat(e.tipo, "</span></div>") : "", "\n                        <div class=\"info-row\"><span class=\"info-lbl\">Presen\xE7as:</span><span><strong>").concat(lista.length, "</strong> participante").concat(lista.length !== 1 ? "s" : "", "</span></div>\n                    </div>\n                    <table>\n                        <thead><tr><th>#</th><th>Nome</th><th>Naipe</th><th style=\"text-align:center\">Hor\xE1rio Check-in</th></tr></thead>\n                        <tbody>").concat(linhas, "</tbody>\n                    </table>\n                    <div class=\"assinaturas\">\n                        <div class=\"assin\">\n                            ").concat(sigMaestro ? "<img src=\"".concat(sigMaestro, "\"/>") : "<div style='height:52px'></div>", "\n                            <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(maestro, "</div><div class=\"assin-cargo\">Maestro \u2013 ").concat(nomeApp, "</div></div>\n                        </div>\n                        <div class=\"assin\">\n                            ").concat(sigLucia ? "<img src=\"".concat(sigLucia, "\"/>") : "<div style='height:52px'></div>", "\n                            <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(produtora, "</div><div class=\"assin-cargo\">Produtora \u2013 ").concat(nomeApp, "</div></div>\n                        </div>\n                    </div>\n                    <div class=\"rodape\">Documento gerado em ").concat(hoje, " pelo sistema de gest\xE3o do ").concat(nomeApp, ".</div>\n                </div>");
    }).join("");
    var html = "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\">\n<style>\n  body{font-family:Arial,sans-serif;font-size:12px;color:#222;margin:0;padding:0}\n  @media print{@page{margin:2cm}.pagina{page-break-after:always}.pagina:last-child{page-break-after:avoid}}\n  .pagina{padding:0;margin-bottom:40px}\n  .header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid ".concat(cor, ";padding-bottom:12px;margin-bottom:20px}\n  .logo{width:54px;height:54px;object-fit:contain}\n  .titulo{text-align:center;font-size:17px;font-weight:bold;color:").concat(cor, ";text-transform:uppercase;letter-spacing:2px;margin-bottom:16px}\n  .evento-info{border:1px solid #EEE;border-radius:6px;padding:12px 16px;margin-bottom:16px;background:#FAFAFA}\n  .info-row{display:flex;gap:8px;margin-bottom:4px;font-size:12px}\n  .info-lbl{font-weight:bold;color:").concat(cor, ";min-width:80px;font-size:11px;text-transform:uppercase}\n  table{width:100%;border-collapse:collapse;margin-bottom:20px}\n  th{background:").concat(cor, ";color:#fff;padding:7px 10px;text-align:left;font-size:10px;text-transform:uppercase;letter-spacing:0.5px}\n  td{padding:7px 10px;border-bottom:1px solid #EEE;font-size:12px}\n  tr:nth-child(even) td{background:#FAFAFA}\n  .assinaturas{display:flex;justify-content:space-around;margin-top:48px;text-align:center}\n  .assin img{height:52px;object-fit:contain;display:block;margin:0 auto 6px}\n  .assin-linha{border-top:1px solid #333;padding-top:5px;min-width:180px}\n  .assin-nome{font-weight:bold;font-size:12px}\n  .assin-cargo{font-size:10px;color:#888}\n  .rodape{text-align:center;font-size:10px;color:#AAA;margin-top:28px;border-top:1px solid #EEE;padding-top:8px}\n</style></head><body>").concat(paginas, "</body></html>");
    var win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(function () {
      return win.print();
    }, 800);
  }
  function gerarPDFCompleto() {
    var nomeApp = config.nomeApp || "Flamboyant Coral";
    var logoUrl = config.logoUrl || LOGO_URL;
    var cidade = textos.cidade || "Goiânia – GO";
    var maestro = textos.maestro || "Maestro";
    var produtora = textos.produtora || "Lucia Kratz";
    var sigLucia = textos.sigLucia || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
    var sigMaestro = textos.sigMaestro || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";
    var hoje = new Date().toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    var periodoFmt = "".concat(new Date(dataInicio + "T12:00:00").toLocaleDateString("pt-BR"), " a ").concat(new Date(dataFim + "T12:00:00").toLocaleDateString("pt-BR"));

    // Frequência por evento
    var porEvento = {};
    frequencias.forEach(function (f) {
      if (f.eventoId) {
        if (!porEvento[f.eventoId]) porEvento[f.eventoId] = [];
        porEvento[f.eventoId].push(f);
      }
    });

    // Frequência por integrante
    var porIntegrante = {};
    frequencias.filter(function (f) {
      return eventosFiltrados.find(function (e) {
        return e.id === f.eventoId;
      });
    }).forEach(function (f) {
      if (!porIntegrante[f.membroNome]) porIntegrante[f.membroNome] = 0;
      porIntegrante[f.membroNome]++;
    });
    var linhasAtiv = eventosFiltrados.sort(function (a, b) {
      return a.date > b.date ? 1 : -1;
    }).map(function (e, i) {
      return "\n            <tr><td>".concat(i + 1, "</td><td>").concat(e.date ? new Date(e.date + "T12:00:00").toLocaleDateString("pt-BR") : "", "</td>\n            <td>").concat(e.title || "", "</td><td>").concat(e.tipo || "", "</td><td>").concat(e.status || "", "</td><td>").concat(e.local || "", "</td></tr>");
    }).join("");
    var blocosPresenca = eventosFiltrados.filter(function (e) {
      var _porEvento$e$id3;
      return ((_porEvento$e$id3 = porEvento[e.id]) === null || _porEvento$e$id3 === void 0 ? void 0 : _porEvento$e$id3.length) > 0;
    }).sort(function (a, b) {
      return a.date > b.date ? 1 : -1;
    }).map(function (e) {
      var lista = porEvento[e.id] || [];
      var linhas = lista.map(function (f, i) {
        var _f$dataHora2;
        return "<tr><td>".concat(i + 1, "</td><td>").concat(f.membroNome, "</td><td>").concat(f.naipe || "—", "</td><td>").concat((_f$dataHora2 = f.dataHora) !== null && _f$dataHora2 !== void 0 && _f$dataHora2.seconds ? new Date(f.dataHora.seconds * 1000).toLocaleString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit"
        }) : "—", "</td></tr>");
      }).join("");
      return "<div class=\"bloco-evento\">\n                    <div class=\"evento-hdr\"><span>".concat(e.title, " \u2014 ").concat(e.date ? new Date(e.date + "T12:00:00").toLocaleDateString("pt-BR") : "", "</span><span>").concat(lista.length, " presente").concat(lista.length !== 1 ? "s" : "", "</span></div>\n                    <table><thead><tr><th>#</th><th>Nome</th><th>Naipe</th><th>Check-in</th></tr></thead><tbody>").concat(linhas, "</tbody></table>\n                </div>");
    }).join("");
    var linhasIntegrantes = ativos.sort(function (a, b) {
      return a.name > b.name ? 1 : -1;
    }).map(function (m, i) {
      return "\n            <tr><td>".concat(i + 1, "</td><td>").concat(m.name, "</td><td>").concat(m.voice || "—", "</td><td>").concat(m.funcao || "Corista", "</td>\n            <td>").concat(m.startDate ? new Date(m.startDate + "T12:00:00").toLocaleDateString("pt-BR", {
        month: "short",
        year: "numeric"
      }) : "", "</td>\n            <td style=\"text-align:center\">").concat(porIntegrante[m.name] || 0, "</td></tr>");
    }).join("");
    var html = "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\">\n<style>\n  body{font-family:Arial,sans-serif;font-size:12px;color:#222;margin:0;padding:0}\n  @media print{@page{margin:2cm}.bloco-evento{page-break-inside:avoid}}\n  .header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid ".concat(cor, ";padding-bottom:14px;margin-bottom:20px}\n  .logo{width:56px;height:56px;object-fit:contain}\n  .titulo{text-align:center;font-size:18px;font-weight:bold;color:").concat(cor, ";text-transform:uppercase;letter-spacing:2px;margin-bottom:4px}\n  .periodo{text-align:center;font-size:12px;color:#666;margin-bottom:20px}\n  .cards{display:flex;gap:10px;margin-bottom:20px}\n  .card{flex:1;border:1px solid #EEE;border-radius:6px;padding:10px;text-align:center}\n  .card-num{font-size:22px;font-weight:bold;color:").concat(cor, "}\n  .card-lbl{font-size:9px;color:#888;text-transform:uppercase;letter-spacing:1px}\n  .secao{font-size:11px;font-weight:bold;color:").concat(cor, ";text-transform:uppercase;letter-spacing:2px;margin:22px 0 10px;border-bottom:2px solid ").concat(cor, ";padding-bottom:4px}\n  .bloco{border-left:3px solid ").concat(cor, ";padding:8px 12px;margin-bottom:8px;background:#FAFAFA;border-radius:0 4px 4px 0}\n  .bloco-titulo{font-size:10px;font-weight:bold;color:").concat(cor, ";margin-bottom:3px;text-transform:uppercase}\n  .bloco-evento{margin-bottom:20px}\n  .evento-hdr{display:flex;justify-content:space-between;background:").concat(cor, "15;border-left:3px solid ").concat(cor, ";padding:6px 10px;font-size:11px;font-weight:bold;margin-bottom:4px}\n  table{width:100%;border-collapse:collapse;margin-bottom:6px}\n  th{background:").concat(cor, ";color:#fff;padding:5px 8px;text-align:left;font-size:9px;text-transform:uppercase}\n  td{padding:5px 8px;border-bottom:1px solid #EEE;font-size:11px}\n  tr:nth-child(even) td{background:#FAFAFA}\n  .tipo-linha{display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid #F0F0F0;font-size:11px}\n  .assinaturas{display:flex;justify-content:space-around;margin-top:48px;text-align:center}\n  .assin img{height:52px;object-fit:contain;display:block;margin:0 auto 6px}\n  .assin-linha{border-top:1px solid #333;padding-top:5px;min-width:180px}\n  .assin-nome{font-weight:bold;font-size:12px}\n  .assin-cargo{font-size:10px;color:#888}\n  .rodape{text-align:center;font-size:10px;color:#AAA;margin-top:28px;border-top:1px solid #EEE;padding-top:8px}\n</style></head><body>\n<div class=\"header\">\n  <img src=\"").concat(logoUrl, "\" class=\"logo\"/>\n  <div style=\"text-align:right;font-size:11px;color:#666\"><strong>").concat(nomeApp, "</strong><br>").concat(cidade).concat(maestro ? "<br>Maestro: " + maestro : "", "</div>\n</div>\n<div class=\"titulo\">Relat\xF3rio de Atividades</div>\n<div class=\"periodo\">Per\xEDodo: ").concat(periodoFmt, "</div>\n<div class=\"cards\">\n  <div class=\"card\"><div class=\"card-num\">").concat(eventosFiltrados.length, "</div><div class=\"card-lbl\">Total atividades</div></div>\n  <div class=\"card\"><div class=\"card-num\">").concat(ativos.length, "</div><div class=\"card-lbl\">Integrantes ativos</div></div>\n  <div class=\"card\"><div class=\"card-num\">").concat(apresentacoes.length, "</div><div class=\"card-lbl\">Apresenta\xE7\xF5es</div></div>\n  <div class=\"card\"><div class=\"card-num\">").concat(eventosFiltrados.filter(function (e) {
      var _porEvento$e$id4;
      return ((_porEvento$e$id4 = porEvento[e.id]) === null || _porEvento$e$id4 === void 0 ? void 0 : _porEvento$e$id4.length) > 0;
    }).length, "</div><div class=\"card-lbl\">Com frequ\xEAncia</div></div>\n</div>\n<div class=\"secao\">Distribui\xE7\xE3o por tipo de atividade</div>\n").concat(Object.entries(porTipo).map(function (_ref33) {
      var _ref34 = _slicedToArray(_ref33, 2),
        k = _ref34[0],
        v = _ref34[1];
      return "<div class=\"tipo-linha\"><span>".concat(k, "</span><span style=\"font-weight:bold;color:").concat(cor, "\">").concat(v, "</span></div>");
    }).join(""), "\n").concat(textos.sobreProjeto || textos.curriculoMaestro || textos.equipe ? "\n<div class=\"secao\">Informa\xE7\xF5es do Projeto</div>\n".concat(textos.sobreProjeto ? "<div class=\"bloco\"><div class=\"bloco-titulo\">Sobre o Projeto</div><p style=\"margin:4px 0;font-size:11px;line-height:1.6\">".concat(textos.sobreProjeto, "</p></div>") : "", "\n").concat(textos.curriculoMaestro ? "<div class=\"bloco\"><div class=\"bloco-titulo\">Curr\xEDculo do Maestro</div><p style=\"margin:4px 0;font-size:11px;line-height:1.6\">".concat(textos.curriculoMaestro, "</p></div>") : "", "\n").concat(textos.equipe ? "<div class=\"bloco\"><div class=\"bloco-titulo\">Equipe de Produ\xE7\xE3o</div><p style=\"margin:4px 0;font-size:11px;line-height:1.6\">".concat(textos.equipe, "</p></div>") : "", "\n") : "", "\n<div class=\"secao\">Atividades realizadas no per\xEDodo</div>\n<table><thead><tr><th>#</th><th>Data</th><th>Atividade</th><th>Tipo</th><th>Status</th><th>Local</th></tr></thead>\n<tbody>").concat(linhasAtiv || "<tr><td colspan='6' style='text-align:center;color:#AAA'>Nenhuma atividade</td></tr>", "</tbody></table>\n").concat(blocosPresenca ? "<div class=\"secao\">Listas de Presen\xE7a por Evento</div>".concat(blocosPresenca) : "", "\n<div class=\"secao\">Integrantes Ativos (").concat(ativos.length, ")</div>\n<table><thead><tr><th>#</th><th>Nome</th><th>Naipe</th><th>Fun\xE7\xE3o</th><th>Desde</th><th style=\"text-align:center\">Presen\xE7as</th></tr></thead>\n<tbody>").concat(linhasIntegrantes || "<tr><td colspan='6' style='text-align:center;color:#AAA'>Nenhum integrante</td></tr>", "</tbody></table>\n<div class=\"assinaturas\">\n  <div class=\"assin\">").concat(sigMaestro ? "<img src=\"".concat(sigMaestro, "\"/>") : "<div style='height:52px'></div>", "\n    <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(maestro, "</div><div class=\"assin-cargo\">Maestro \u2013 ").concat(nomeApp, "</div></div>\n  </div>\n  <div class=\"assin\">").concat(sigLucia ? "<img src=\"".concat(sigLucia, "\"/>") : "<div style='height:52px'></div>", "\n    <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(produtora, "</div><div class=\"assin-cargo\">Produtora \u2013 ").concat(nomeApp, "</div></div>\n  </div>\n</div>\n<div class=\"rodape\">Relat\xF3rio gerado em ").concat(hoje, " pelo sistema de gest\xE3o do ").concat(nomeApp, ". Documento confidencial.</div>\n</body></html>");
    var win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(function () {
      return win.print();
    }, 800);
    // Salvar no histórico
    db.collection("relatorios_historico").add({
      tipo: "Relatório Completo",
      periodo: "".concat(dataInicio, " a ").concat(dataFim),
      geradoEm: firebase.firestore.FieldValue.serverTimestamp(),
      geradoPor: "Gestor"
    });
  }
  function gerarPDF() {
    var nomeApp = config.nomeApp || "Flamboyant Coral";
    var logoUrl = config.logoUrl || LOGO_URL;
    var cidade = textos.cidade || "Goiânia – GO";
    var maestro = textos.maestro || "Maestro";
    var produtora = textos.produtora || "Lucia Kratz";
    var hoje = new Date().toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    var periodoFmt = "".concat(new Date(dataInicio + "T12:00:00").toLocaleDateString("pt-BR"), " a ").concat(new Date(dataFim + "T12:00:00").toLocaleDateString("pt-BR"));
    var linhasAtiv = eventosFiltrados.map(function (e, i) {
      return "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(e.date ? new Date(e.date + "T12:00:00").toLocaleDateString("pt-BR") : "", "</td>\n                <td>").concat(e.title || "", "</td>\n                <td>").concat(e.tipo || "", "</td>\n                <td>").concat(e.status || "", "</td>\n                <td>").concat(e.local || "", "</td>\n            </tr>");
    }).join("");
    var html = "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\">\n<style>\n  body { font-family: Arial, sans-serif; font-size: 12px; color: #222; margin:0; padding:0; }\n  @media print { @page { margin: 1.5cm; } }\n  .header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid ".concat(cor, "; padding-bottom:12px; margin-bottom:20px; }\n  .logo { width:50px; height:50px; object-fit:contain; }\n  .titulo { text-align:center; margin:20px 0 6px; font-size:16px; font-weight:bold; color:").concat(cor, "; text-transform:uppercase; letter-spacing:2px; }\n  .periodo { text-align:center; font-size:11px; color:#666; margin-bottom:20px; }\n  .cards { display:flex; gap:12px; margin-bottom:20px; }\n  .card { flex:1; border:1px solid #EEE; border-radius:6px; padding:12px; text-align:center; }\n  .card-num { font-size:24px; font-weight:bold; color:").concat(cor, "; }\n  .card-lbl { font-size:10px; color:#888; text-transform:uppercase; letter-spacing:1px; }\n  .secao { font-size:11px; font-weight:bold; color:").concat(cor, "; text-transform:uppercase; letter-spacing:2px; margin:20px 0 10px; border-bottom:1px solid #EEE; padding-bottom:4px; }\n  .bloco { border-left:3px solid ").concat(cor, "; padding:8px 12px; margin-bottom:10px; background:#FAFAFA; border-radius:0 4px 4px 0; }\n  .bloco-titulo { font-size:11px; font-weight:bold; color:").concat(cor, "; margin-bottom:4px; }\n  table { width:100%; border-collapse:collapse; margin-top:8px; }\n  th { background:").concat(cor, "; color:#fff; padding:6px 8px; text-align:left; font-size:10px; text-transform:uppercase; }\n  td { padding:6px 8px; border-bottom:1px solid #EEE; font-size:11px; }\n  .assinaturas { display:flex; justify-content:space-around; margin-top:40px; text-align:center; }\n  .assin { display:flex; flex-direction:column; align-items:center; gap:4px; }\n  .assin img { height:50px; object-fit:contain; }\n  .assin-nome { font-weight:bold; font-size:12px; }\n  .assin-cargo { font-size:10px; color:#888; }\n  .rodape { text-align:center; font-size:10px; color:#AAA; margin-top:30px; border-top:1px solid #EEE; padding-top:8px; }\n  .tipo-linha { display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px solid #F0F0F0; }\n</style></head><body>\n<div class=\"header\">\n  <img src=\"").concat(logoUrl, "\" class=\"logo\" />\n  <div style=\"text-align:right; font-size:11px; color:#666\">\n    <strong>").concat(nomeApp, "</strong><br>").concat(cidade, "<br>").concat(maestro ? "Maestro: " + maestro : "", "\n  </div>\n</div>\n<div class=\"titulo\">Relat\xF3rio de Atividades</div>\n<div class=\"periodo\">Per\xEDodo: ").concat(periodoFmt, "</div>\n<div class=\"cards\">\n  <div class=\"card\"><div class=\"card-num\">").concat(eventosFiltrados.length, "</div><div class=\"card-lbl\">Total atividades</div></div>\n  <div class=\"card\"><div class=\"card-num\">").concat(ativos.length, "</div><div class=\"card-lbl\">Integrantes ativos</div></div>\n  <div class=\"card\"><div class=\"card-num\">").concat(apresentacoes.length, "</div><div class=\"card-lbl\">Apresenta\xE7\xF5es</div></div>\n</div>\n<div class=\"secao\">Distribui\xE7\xE3o por tipo</div>\n").concat(Object.entries(porTipo).map(function (_ref35) {
      var _ref36 = _slicedToArray(_ref35, 2),
        k = _ref36[0],
        v = _ref36[1];
      return "<div class=\"tipo-linha\"><span>".concat(k, "</span><span style=\"font-weight:bold;color:").concat(cor, "\">").concat(v, "</span></div>");
    }).join(""), "\n").concat(textos.sobreProjeto || textos.curriculoMaestro || textos.equipe ? "\n<div class=\"secao\">Informa\xE7\xF5es do Projeto</div>\n".concat(textos.sobreProjeto ? "<div class=\"bloco\"><div class=\"bloco-titulo\">Sobre o Projeto</div><p>".concat(textos.sobreProjeto, "</p></div>") : "", "\n").concat(textos.curriculoMaestro ? "<div class=\"bloco\"><div class=\"bloco-titulo\">Curr\xEDculo do Maestro</div><p>".concat(textos.curriculoMaestro, "</p></div>") : "", "\n").concat(textos.equipe ? "<div class=\"bloco\"><div class=\"bloco-titulo\">Equipe de Produ\xE7\xE3o</div><p>".concat(textos.equipe, "</p></div>") : "", "\n") : "", "\n<div class=\"secao\">Detalhamento das Atividades</div>\n<table><thead><tr><th>#</th><th>Data</th><th>T\xEDtulo</th><th>Tipo</th><th>Status</th><th>Local</th></tr></thead>\n<tbody>").concat(linhasAtiv || "<tr><td colspan='6' style='text-align:center;color:#AAA'>Nenhuma atividade no período</td></tr>", "</tbody></table>\n<div class=\"assinaturas\">\n  <div class=\"assin\">\n    ").concat(sigMaestro ? "<img src=\"".concat(sigMaestro, "\" />") : "<div style='height:50px'></div>", "\n    <div style=\"border-top:1px solid #333;padding-top:4px;min-width:160px\">\n      <div class=\"assin-nome\">").concat(maestro, "</div>\n      <div class=\"assin-cargo\">Maestro \u2013 ").concat(nomeApp, "</div>\n    </div>\n  </div>\n  <div class=\"assin\">\n    ").concat(sigLucia ? "<img src=\"".concat(sigLucia, "\" />") : "<div style='height:50px'></div>", "\n    <div style=\"border-top:1px solid #333;padding-top:4px;min-width:160px\">\n      <div class=\"assin-nome\">").concat(produtora, "</div>\n      <div class=\"assin-cargo\">Produtora \u2013 ").concat(nomeApp, "</div>\n    </div>\n  </div>\n</div>\n<div class=\"rodape\">Relat\xF3rio gerado em ").concat(hoje, " pelo sistema de gest\xE3o do ").concat(nomeApp, ".</div>\n</body></html>");
    var win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(function () {
      return win.print();
    }, 800);
  }
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "16px 20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  var inp = {
    padding: "10px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "#888",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.8
  };
  var ta = {
    width: "100%",
    padding: "10px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA",
    resize: "vertical",
    minHeight: 80
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor,
      marginBottom: 4
    }
  }, "Relat\xF3rios"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 20
    }
  }, "Relat\xF3rio de atividades e gest\xE3o do coral"), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Per\xEDodo do relat\xF3rio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data in\xEDcio"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inp,
    value: dataInicio,
    onChange: function onChange(e) {
      return setDataInicio(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data fim"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: inp,
    value: dataFim,
    onChange: function onChange(e) {
      return setDataFim(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Filtrar por evento"), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: eventoFiltro,
    onChange: function onChange(e) {
      return setEventoFiltro(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "todos"
  }, "Todos os eventos"), eventosPeriodo.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.date, " \u2014 ", e.title);
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10,
      marginBottom: 12
    }
  }, [{
    label: "Total atividades",
    value: eventosFiltrados.length,
    icon: "calendar",
    color: cor
  }, {
    label: "Integrantes ativos",
    value: ativos.length,
    icon: "users",
    color: "#2E7D32"
  }, {
    label: "Apresentações",
    value: apresentacoes.length,
    icon: "mic",
    color: cor
  }].map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.label,
      style: _objectSpread(_objectSpread({}, card), {}, {
        marginBottom: 0,
        textAlign: "center",
        padding: "16px"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 16,
      color: m.color
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        color: m.color,
        lineHeight: 1
      }
    }, m.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginTop: 4
      }
    }, m.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Atividades por tipo"), Object.entries(porTipo).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Sem atividades no per\xEDodo") : Object.entries(porTipo).map(function (_ref37) {
    var _ref38 = _slicedToArray(_ref37, 2),
      tipo = _ref38[0],
      qtd = _ref38[1];
    var max = Math.max.apply(Math, _toConsumableArray(Object.values(porTipo)));
    return /*#__PURE__*/React.createElement("div", {
      key: tipo,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#555"
      }
    }, tipo), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: cor
      }
    }, qtd)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        background: "#F0EAEA",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(qtd / max * 100, "%"),
        height: "100%",
        background: cor,
        borderRadius: 4
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Distribui\xE7\xE3o por status"), Object.entries(porStatus).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Sem atividades no per\xEDodo") : Object.entries(porStatus).map(function (_ref39) {
    var _ref40 = _slicedToArray(_ref39, 2),
      status = _ref40[0],
      qtd = _ref40[1];
    return /*#__PURE__*/React.createElement("div", {
      key: status,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6px 0",
        borderBottom: "1px solid #F5F0F0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: statusColors[status] || "#888"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#555"
      }
    }, status)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: statusColors[status] || "#888"
      }
    }, qtd));
  }))), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 15,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Texto Qualitativo do Relat\xF3rio")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setEditTextos(function (v) {
        return !v;
      });
      setFormTextos(_objectSpread({}, textos));
    },
    style: {
      padding: "6px 14px",
      background: "#fff",
      border: "1px solid #EEE",
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit",
      color: "#666"
    }
  }, editTextos ? "Cancelar" : "Editar textos")), !editTextos ? /*#__PURE__*/React.createElement(React.Fragment, null, textos.sobreProjeto && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: cor,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 6
    }
  }, "Sobre o Projeto"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#555",
      lineHeight: 1.6
    }
  }, textos.sobreProjeto)), textos.curriculoMaestro && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: cor,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 6
    }
  }, "Curr\xEDculo do Maestro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#555",
      lineHeight: 1.6
    }
  }, textos.curriculoMaestro)), textos.equipe && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: cor,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 6
    }
  }, "Equipe de Produ\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#555",
      lineHeight: 1.6
    }
  }, textos.equipe)), !textos.sobreProjeto && !textos.curriculoMaestro && !textos.equipe && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Clique em \"Editar textos\" para preencher.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Sobre o Projeto"), /*#__PURE__*/React.createElement("textarea", {
    style: ta,
    value: formTextos.sobreProjeto || "",
    onChange: function onChange(e) {
      return setFormTextos(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          sobreProjeto: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Curr\xEDculo do Maestro"), /*#__PURE__*/React.createElement("textarea", {
    style: ta,
    value: formTextos.curriculoMaestro || "",
    onChange: function onChange(e) {
      return setFormTextos(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          curriculoMaestro: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Equipe de Produ\xE7\xE3o"), /*#__PURE__*/React.createElement("textarea", {
    style: ta,
    value: formTextos.equipe || "",
    onChange: function onChange(e) {
      return setFormTextos(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          equipe: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nome do Maestro"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: formTextos.maestro || "",
    onChange: function onChange(e) {
      return setFormTextos(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          maestro: e.target.value
        });
      });
    },
    placeholder: "Ex: Paulo Sergio Motta"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nome da Produtora"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: formTextos.produtora || "",
    onChange: function onChange(e) {
      return setFormTextos(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          produtora: e.target.value
        });
      });
    },
    placeholder: "Ex: Lucia Kratz"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Cidade"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: formTextos.cidade || "",
    onChange: function onChange(e) {
      return setFormTextos(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          cidade: e.target.value
        });
      });
    },
    placeholder: "Ex: Goi\xE2nia \u2013 GO"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "URL assinatura \u2014 Lucia Kratz"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: formTextos.sigLucia || "",
    onChange: function onChange(e) {
      return setFormTextos(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          sigLucia: e.target.value
        });
      });
    },
    placeholder: "https://raw.githubusercontent.com/.../lucia-sig.png"
  }), (formTextos.sigLucia || sigLucia) && /*#__PURE__*/React.createElement("img", {
    src: formTextos.sigLucia || sigLucia,
    alt: "Assinatura Lucia",
    style: {
      maxHeight: 40,
      marginTop: 8,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "URL assinatura \u2014 Maestro"), /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: formTextos.sigMaestro || "",
    onChange: function onChange(e) {
      return setFormTextos(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          sigMaestro: e.target.value
        });
      });
    },
    placeholder: "https://raw.githubusercontent.com/.../paulo-sig.png"
  }), (formTextos.sigMaestro || sigMaestro) && /*#__PURE__*/React.createElement("img", {
    src: formTextos.sigMaestro || sigMaestro,
    alt: "Assinatura Maestro",
    style: {
      maxHeight: 40,
      marginTop: 8,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: salvarTextos,
    disabled: salvandoTextos,
    style: {
      padding: "11px 24px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvandoTextos ? 0.7 : 1
    }
  }, salvandoTextos ? "Salvando..." : "Salvar textos"))), eventosFiltrados.length > 0 && /*#__PURE__*/React.createElement(FrequenciaEventos, {
    eventos: eventosFiltrados,
    frequencias: frequencias,
    config: config
  }), /*#__PURE__*/React.createElement(FrequenciaAcesso, {
    config: config
  }), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Atividades no per\xEDodo ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#AAA",
      fontWeight: 400
    }
  }, "(", eventosFiltrados.length, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: gerarPDFListaPresenca,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "9px 18px",
      background: "#fff",
      color: cor,
      border: "1px solid ".concat(cor),
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard-list",
    size: 14,
    color: cor
  }), " Lista de Presen\xE7a"), /*#__PURE__*/React.createElement("button", {
    onClick: gerarPDFCompleto,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "9px 18px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 14,
    color: "#fff"
  }), " Relat\xF3rio Completo para Empresa"))), eventosFiltrados.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Nenhuma atividade no per\xEDodo selecionado.") : eventosFiltrados.sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  }).map(function (e, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 0",
        borderBottom: "1px solid #F5F0F0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA",
        minWidth: 20
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#888",
        minWidth: 80
      }
    }, e.date ? new Date(e.date + "T12:00:00").toLocaleDateString("pt-BR") : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, e.title), e.local && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#AAA"
      }
    }, e.local)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: "#F0EAEA",
        color: cor,
        fontWeight: 600
      }
    }, e.tipo), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: (statusColors[e.status] || "#888") + "18",
        color: statusColors[e.status] || "#888",
        fontWeight: 600
      }
    }, e.status));
  })));
}

// ── FREQUÊNCIA VIA QR ─────────────────────────────────────────────────────────
function CheckinPublico(_ref41) {
  var sessaoId = _ref41.sessaoId,
    config = _ref41.config;
  var _useState133 = useState(null),
    _useState134 = _slicedToArray(_useState133, 2),
    sessao = _useState134[0],
    setSessao = _useState134[1];
  var _useState135 = useState(null),
    _useState136 = _slicedToArray(_useState135, 2),
    membro = _useState136[0],
    setMembro = _useState136[1];
  var _useState137 = useState([]),
    _useState138 = _slicedToArray(_useState137, 2),
    members = _useState138[0],
    setMembers = _useState138[1];
  var _useState139 = useState(""),
    _useState140 = _slicedToArray(_useState139, 2),
    busca = _useState140[0],
    setBusca = _useState140[1];
  var _useState141 = useState([]),
    _useState142 = _slicedToArray(_useState141, 2),
    sugestoes = _useState142[0],
    setSugestoes = _useState142[1];
  var _useState143 = useState(null),
    _useState144 = _slicedToArray(_useState143, 2),
    status = _useState144[0],
    setStatus = _useState144[1]; // null | 'ok' | 'erro' | 'expirado'
  var _useState145 = useState(true),
    _useState146 = _slicedToArray(_useState145, 2),
    loading = _useState146[0],
    setLoading = _useState146[1];
  var cor = config.corPrimaria || COR;
  useEffect(function () {
    // Carregar sessão
    db.collection("sessoes_checkin").doc(sessaoId).get().then(function (doc) {
      if (!doc.exists) {
        setStatus("erro");
        setLoading(false);
        return;
      }
      var d = _objectSpread({
        id: doc.id
      }, doc.data());
      // Verificar validade 24h
      if (d.expiraEm && d.expiraEm.seconds < Date.now() / 1000) {
        setStatus("expirado");
        setLoading(false);
        return;
      }
      setSessao(d);
      setLoading(false);
    });
    // Carregar membros
    db.collection("members").onSnapshot(function (snap) {
      setMembers(snap.docs.map(function (d) {
        return _objectSpread({
          id: d.id
        }, d.data());
      }));
    });
  }, [sessaoId]);
  useEffect(function () {
    if (busca.length < 3) {
      setSugestoes([]);
      return;
    }
    var t = busca.toLowerCase();
    setSugestoes(members.filter(function (m) {
      return m.active && m.name.toLowerCase().includes(t);
    }).slice(0, 6));
  }, [busca, members]);
  function confirmarPresenca(_x3) {
    return _confirmarPresenca.apply(this, arguments);
  }
  function _confirmarPresenca() {
    _confirmarPresenca = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(m) {
      var snap;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.n) {
          case 0:
            _context17.n = 1;
            return db.collection("frequencias").where("sessaoId", "==", sessaoId).where("membroId", "==", m.id).get();
          case 1:
            snap = _context17.v;
            if (snap.empty) {
              _context17.n = 2;
              break;
            }
            setMembro(m);
            setStatus("jaRegistrado");
            return _context17.a(2);
          case 2:
            _context17.n = 3;
            return db.collection("frequencias").add({
              sessaoId: sessaoId,
              eventoId: sessao.eventoId,
              eventoTitulo: sessao.eventoTitulo,
              eventoData: sessao.eventoData,
              membroId: m.id,
              membroNome: m.name,
              naipe: m.voice || "",
              dataHora: firebase.firestore.FieldValue.serverTimestamp(),
              data: todayStr()
            });
          case 3:
            setMembro(m);
            setStatus("ok");
          case 4:
            return _context17.a(2);
        }
      }, _callee17);
    }));
    return _confirmarPresenca.apply(this, arguments);
  }
  if (loading) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: config.corFundo || COR_FUNDO
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      border: "3px solid ".concat(cor),
      borderTopColor: "transparent",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite"
    }
  }));
  var wrap = {
    minHeight: "100vh",
    background: config.corFundo || COR_FUNDO,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 20px"
  };
  if (status === "expirado") return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 16
    }
  }, "\u23F0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "QR Code expirado"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#AAA",
      marginTop: 8
    }
  }, "Este link de check-in n\xE3o \xE9 mais v\xE1lido.")));
  if (status === "erro") return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 16
    }
  }, "\u274C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Sess\xE3o n\xE3o encontrada")));
  if (status === "ok") return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      background: "#fff",
      borderRadius: 20,
      padding: "32px 24px",
      maxWidth: 360,
      width: "100%",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      background: "#E8F5E9",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    color: "#2E7D32"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 22,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 8
    }
  }, "Presen\xE7a confirmada!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "#2E7D32",
      fontWeight: 600,
      marginBottom: 4
    }
  }, membro === null || membro === void 0 ? void 0 : membro.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 16
    }
  }, sessao === null || sessao === void 0 ? void 0 : sessao.eventoTitulo, " \xB7 ", sessao === null || sessao === void 0 ? void 0 : sessao.eventoData), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#CCC"
    }
  }, config.nomeApp || "Coral Flamboyant")));
  if (status === "jaRegistrado") return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      background: "#fff",
      borderRadius: 20,
      padding: "32px 24px",
      maxWidth: 360,
      width: "100%",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 16
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "J\xE1 registrado!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#AAA",
      marginTop: 8
    }
  }, membro === null || membro === void 0 ? void 0 : membro.name, ", sua presen\xE7a j\xE1 foi confirmada neste evento.")));
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      background: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: config.logoUrl || LOGO_URL,
    alt: "",
    style: {
      width: 44,
      height: 44,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: cor
    }
  }, config.nomeApp || "Coral Flamboyant"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginTop: 4
    }
  }, "Check-in de presen\xE7a")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 16,
      padding: "24px 20px",
      width: "100%",
      maxWidth: 400,
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 16,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 4
    }
  }, sessao === null || sessao === void 0 ? void 0 : sessao.eventoTitulo), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 20
    }
  }, sessao === null || sessao === void 0 ? void 0 : sessao.eventoData), /*#__PURE__*/React.createElement("input", {
    value: busca,
    onChange: function onChange(e) {
      setBusca(e.target.value);
    },
    autoFocus: true,
    placeholder: "Digite seu nome (m\xEDn. 3 letras)",
    style: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #E8E0E0",
      borderRadius: 10,
      fontSize: 14,
      outline: "none",
      fontFamily: "inherit",
      color: "#1A1D23",
      marginBottom: 8
    }
  }), sugestoes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid #EEE",
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: 8
    }
  }, sugestoes.map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: function onClick() {
        return confirmarPresenca(m);
      },
      style: {
        display: "block",
        width: "100%",
        padding: "12px 14px",
        background: "none",
        border: "none",
        textAlign: "left",
        cursor: "pointer",
        fontSize: 14,
        borderBottom: "1px solid #F5F5F5",
        fontFamily: "inherit",
        color: "#1A1D23"
      }
    }, m.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA",
        marginLeft: 8
      }
    }, m.voice));
  })), busca.length > 0 && busca.length < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA"
    }
  }, "Digite mais ", 3 - busca.length, " letra(s)..."), busca.length >= 3 && sugestoes.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: cor
    }
  }, "Nenhum corista encontrado.")));
}
function Frequencia(_ref42) {
  var config = _ref42.config;
  var _useCollection15 = useCollection("events", "date"),
    events = _useCollection15.data;
  var _useState147 = useState(""),
    _useState148 = _slicedToArray(_useState147, 2),
    eventoSel = _useState148[0],
    setEventoSel = _useState148[1];
  var _useState149 = useState(null),
    _useState150 = _slicedToArray(_useState149, 2),
    sessaoAtiva = _useState150[0],
    setSessaoAtiva = _useState150[1];
  var _useState151 = useState([]),
    _useState152 = _slicedToArray(_useState151, 2),
    frequencias = _useState152[0],
    setFrequencias = _useState152[1];
  var _useState153 = useState(""),
    _useState154 = _slicedToArray(_useState153, 2),
    qrUrl = _useState154[0],
    setQrUrl = _useState154[1];
  var _useState155 = useState(false),
    _useState156 = _slicedToArray(_useState155, 2),
    gerando = _useState156[0],
    setGerando = _useState156[1];
  var _useState157 = useState(false),
    _useState158 = _slicedToArray(_useState157, 2),
    showQR = _useState158[0],
    setShowQR = _useState158[1];
  var cor = config.corPrimaria || COR;
  var today = todayStr();

  // Carregar sessão ativa do evento selecionado
  useEffect(function () {
    if (!eventoSel) {
      setSessaoAtiva(null);
      setQrUrl("");
      setShowQR(false);
      return;
    }
    var unsub = db.collection("sessoes_checkin").where("eventoId", "==", eventoSel).onSnapshot(function (snap) {
      var ativas = snap.docs.map(function (d) {
        return _objectSpread({
          id: d.id
        }, d.data());
      }).filter(function (s) {
        var _s$expiraEm;
        return ((_s$expiraEm = s.expiraEm) === null || _s$expiraEm === void 0 ? void 0 : _s$expiraEm.seconds) > Date.now() / 1000;
      });
      setSessaoAtiva(ativas[0] || null);
      if (ativas[0]) {
        var url = "".concat(window.location.origin).concat(window.location.pathname, "?checkin=").concat(ativas[0].id);
        setQrUrl("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=".concat(encodeURIComponent(url)));
        setShowQR(true);
      }
    });
    return unsub;
  }, [eventoSel]);

  // Carregar frequências do evento selecionado
  useEffect(function () {
    if (!eventoSel) {
      setFrequencias([]);
      return;
    }
    var unsub = db.collection("frequencias").where("eventoId", "==", eventoSel).onSnapshot(function (snap) {
      return setFrequencias(snap.docs.map(function (d) {
        return _objectSpread({
          id: d.id
        }, d.data());
      }));
    });
    return unsub;
  }, [eventoSel]);
  function gerarQR() {
    return _gerarQR.apply(this, arguments);
  }
  function _gerarQR() {
    _gerarQR = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var evento, expiraEm, ref, url;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.n) {
          case 0:
            if (eventoSel) {
              _context18.n = 1;
              break;
            }
            return _context18.a(2);
          case 1:
            evento = events.find(function (e) {
              return e.id === eventoSel;
            });
            if (evento) {
              _context18.n = 2;
              break;
            }
            return _context18.a(2);
          case 2:
            setGerando(true);
            expiraEm = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 horas
            _context18.n = 3;
            return db.collection("sessoes_checkin").add({
              eventoId: eventoSel,
              eventoTitulo: evento.title,
              eventoData: evento.date,
              criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
              expiraEm: firebase.firestore.Timestamp.fromDate(expiraEm)
            });
          case 3:
            ref = _context18.v;
            url = "".concat(window.location.origin).concat(window.location.pathname, "?checkin=").concat(ref.id);
            setQrUrl("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=".concat(encodeURIComponent(url)));
            setShowQR(true);
            setGerando(false);
          case 4:
            return _context18.a(2);
        }
      }, _callee18);
    }));
    return _gerarQR.apply(this, arguments);
  }
  function encerrarSessao() {
    return _encerrarSessao.apply(this, arguments);
  }
  function _encerrarSessao() {
    _encerrarSessao = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.n) {
          case 0:
            if (sessaoAtiva) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2);
          case 1:
            if (window.confirm("Encerrar sessão de check-in?")) {
              _context19.n = 2;
              break;
            }
            return _context19.a(2);
          case 2:
            _context19.n = 3;
            return db.collection("sessoes_checkin").doc(sessaoAtiva.id).update({
              expiraEm: firebase.firestore.Timestamp.fromDate(new Date(0))
            });
          case 3:
            setSessaoAtiva(null);
            setShowQR(false);
            setQrUrl("");
          case 4:
            return _context19.a(2);
        }
      }, _callee19);
    }));
    return _encerrarSessao.apply(this, arguments);
  }
  var proximos = events.filter(function (e) {
    return e.date >= today;
  }).sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  });
  var passados = events.filter(function (e) {
    return e.date < today;
  }).sort(function (a, b) {
    return a.date > b.date ? -1 : 1;
  }).slice(0, 20);
  var eventoAtual = events.find(function (e) {
    return e.id === eventoSel;
  });
  var totalMembros = frequencias.length;
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  var inp = {
    padding: "10px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "qr-code",
    size: 24,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor
    }
  }, "Frequ\xEAncia via QR")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 20
    }
  }, "Controle de presen\xE7a em ensaios e eventos"), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Nova Sess\xE3o de Check-in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      alignItems: "flex-end",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 11,
      fontWeight: 700,
      color: "#888",
      marginBottom: 5,
      textTransform: "uppercase",
      letterSpacing: 0.8
    }
  }, "Evento"), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: eventoSel,
    onChange: function onChange(e) {
      return setEventoSel(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar evento..."), proximos.length > 0 && /*#__PURE__*/React.createElement("optgroup", {
    label: "PR\xD3XIMOS"
  }, proximos.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.date, " \u2014 ", e.title);
  })), passados.length > 0 && /*#__PURE__*/React.createElement("optgroup", {
    label: "PASSADOS"
  }, passados.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.date, " \u2014 ", e.title);
  })))), eventoSel && !sessaoAtiva && /*#__PURE__*/React.createElement("button", {
    onClick: gerarQR,
    disabled: gerando,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 20px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: gerando ? 0.7 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "qr-code",
    size: 14,
    color: "#fff"
  }), " ", gerando ? "Gerando..." : "Gerar QR Code"), sessaoAtiva && /*#__PURE__*/React.createElement("button", {
    onClick: encerrarSessao,
    style: {
      padding: "11px 16px",
      background: "#FFF0F0",
      color: "#B41020",
      border: "1px solid #F5DADA",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Encerrar sess\xE3o")), showQR && qrUrl && eventoAtual && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "wrap",
      padding: "16px",
      background: "#F9F5F5",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: qrUrl,
    alt: "QR Code",
    style: {
      width: 160,
      height: 160,
      borderRadius: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#AAA",
      marginTop: 6
    }
  }, sessaoAtiva ? "V\xE1lido at\xE9 ".concat(new Date(sessaoAtiva.expiraEm.seconds * 1000).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  })) : "Válido por 24h")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 4
    }
  }, eventoAtual.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 12
    }
  }, eventoAtual.date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#555",
      marginBottom: 8
    }
  }, "\uD83D\uDCF2 Coristas escaneiam o QR ou acessam o link:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    readOnly: true,
    value: sessaoAtiva ? "".concat(window.location.origin).concat(window.location.pathname, "?checkin=").concat(sessaoAtiva.id) : "",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      flex: 1,
      fontSize: 11
    })
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigator.clipboard.writeText("".concat(window.location.origin).concat(window.location.pathname, "?checkin=").concat((sessaoAtiva === null || sessaoAtiva === void 0 ? void 0 : sessaoAtiva.id) || "")).then(function () {
        return alert("Link copiado!");
      });
    },
    style: {
      padding: "8px 12px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Copiar")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#2E7D32",
      animation: "pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#2E7D32",
      fontWeight: 600
    }
  }, totalMembros, " presen\xE7a", totalMembros !== 1 ? "s" : "", " registrada", totalMembros !== 1 ? "s" : "")))), eventoSel && !showQR && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 20px",
      color: "#CCC"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "qr-code",
    size: 48,
    color: "#EEE"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 14
    }
  }, "Clique em \"Gerar QR Code\" para iniciar o check-in")), !eventoSel && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 20px",
      color: "#CCC"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "qr-code",
    size: 48,
    color: "#EEE"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 15,
      fontWeight: 600
    }
  }, "Selecione um evento acima"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 4
    }
  }, "Para gerenciar sess\xF5es QR de check-in de presen\xE7a"))), eventoSel && /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Presen\xE7as registradas ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#AAA",
      fontWeight: 400
    }
  }, "(", frequencias.length, ")")), frequencias.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Nenhuma presen\xE7a registrada ainda.") : /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid #EEE",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "40px 1fr 100px 1fr",
      padding: "8px 12px",
      background: "#FAFAFA",
      borderBottom: "1px solid #EEE"
    }
  }, ["#", "Nome", "Naipe", "Horário"].map(function (h) {
    return /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: cor
      }
    }, h);
  })), frequencias.sort(function (a, b) {
    var _a$dataHora2, _b$dataHora;
    return (((_a$dataHora2 = a.dataHora) === null || _a$dataHora2 === void 0 ? void 0 : _a$dataHora2.seconds) || 0) - (((_b$dataHora = b.dataHora) === null || _b$dataHora === void 0 ? void 0 : _b$dataHora.seconds) || 0);
  }).map(function (f, i) {
    var _f$dataHora3;
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        display: "grid",
        gridTemplateColumns: "40px 1fr 100px 1fr",
        padding: "10px 12px",
        borderBottom: i < frequencias.length - 1 ? "1px solid #F5F5F5" : "none",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, f.membroNome), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#888"
      }
    }, f.naipe || "—"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, (_f$dataHora3 = f.dataHora) !== null && _f$dataHora3 !== void 0 && _f$dataHora3.seconds ? new Date(f.dataHora.seconds * 1000).toLocaleString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    }) : "—"));
  }))));
}

// ── DECLARAÇÃO DIGITAL ────────────────────────────────────────────────────────
function Declaracao(_ref43) {
  var config = _ref43.config;
  var _useCollection16 = useCollection("events", "date"),
    events = _useCollection16.data;
  var _useCollection17 = useCollection("members"),
    members = _useCollection17.data;
  var _useCollection18 = useCollection("frequencias", "dataHora"),
    frequencias = _useCollection18.data;
  var _useState159 = useState("evento"),
    _useState160 = _slicedToArray(_useState159, 2),
    tipo = _useState160[0],
    setTipo = _useState160[1]; // 'evento' | 'corista'
  var _useState161 = useState(""),
    _useState162 = _slicedToArray(_useState161, 2),
    eventoSel = _useState162[0],
    setEventoSel = _useState162[1];
  var _useState163 = useState(""),
    _useState164 = _slicedToArray(_useState163, 2),
    coristaId = _useState164[0],
    setCoristaId = _useState164[1];
  var _useState165 = useState(new Date().getFullYear() + "-01-01"),
    _useState166 = _slicedToArray(_useState165, 2),
    dataInicio = _useState166[0],
    setDataInicio = _useState166[1];
  var _useState167 = useState(todayStr()),
    _useState168 = _slicedToArray(_useState167, 2),
    dataFim = _useState168[0],
    setDataFim = _useState168[1];
  var _useState169 = useState({}),
    _useState170 = _slicedToArray(_useState169, 2),
    textos = _useState170[0],
    setTextos = _useState170[1];
  var cor = config.corPrimaria || COR;
  useEffect(function () {
    db.collection("config").doc("relatorio").get().then(function (doc) {
      if (doc.exists) setTextos(doc.data());
    });
  }, []);
  var today = todayStr();
  var proximos = events.filter(function (e) {
    return e.date >= today;
  }).sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  });
  var passados = events.filter(function (e) {
    return e.date < today;
  }).sort(function (a, b) {
    return a.date > b.date ? -1 : 1;
  });

  // Frequências do evento selecionado
  var freqEvento = frequencias.filter(function (f) {
    return f.eventoId === eventoSel;
  });

  // Eventos que o corista participou no período
  var freqCorista = frequencias.filter(function (f) {
    return f.membroId === coristaId && f.eventoData >= dataInicio && f.eventoData <= dataFim;
  }).sort(function (a, b) {
    return a.eventoData > b.eventoData ? 1 : -1;
  });
  var eventoAtual = events.find(function (e) {
    return e.id === eventoSel;
  });
  var coristaAtual = members.find(function (m) {
    return m.id === coristaId;
  });
  function gerarPDFEvento() {
    if (!eventoAtual || freqEvento.length === 0) return;
    var nomeApp = config.nomeApp || "Flamboyant Coral";
    var logoUrl = config.logoUrl || LOGO_URL;
    var maestro = textos.maestro || "Maestro";
    var produtora = textos.produtora || "Lucia Kratz";
    var cidade = textos.cidade || "Goiânia – GO";
    var sigLucia = textos.sigLucia || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
    var sigMaestro = textos.sigMaestro || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";
    var hoje = new Date().toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    var dataEvento = eventoAtual.date ? new Date(eventoAtual.date + "T12:00:00").toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }) : "";
    var linhas = freqEvento.map(function (f, i) {
      var _f$dataHora4;
      return "\n            <tr>\n                <td style=\"text-align:center\">".concat(i + 1, "</td>\n                <td>").concat(f.membroNome, "</td>\n                <td>").concat(f.naipe || "—", "</td>\n                <td style=\"text-align:center\">").concat((_f$dataHora4 = f.dataHora) !== null && _f$dataHora4 !== void 0 && _f$dataHora4.seconds ? new Date(f.dataHora.seconds * 1000).toLocaleString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
      }) : "—", "</td>\n            </tr>");
    }).join("");
    var html = "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\">\n<style>\n  body { font-family: Arial, sans-serif; font-size: 12px; color: #222; margin:0; padding:0; }\n  @media print { @page { margin: 2cm; } }\n  .header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid ".concat(cor, "; padding-bottom:14px; margin-bottom:24px; }\n  .logo { width:50px; height:50px; object-fit:contain; }\n  .titulo { text-align:center; font-size:16px; font-weight:bold; color:").concat(cor, "; text-transform:uppercase; letter-spacing:2px; margin-bottom:6px; }\n  .subtitulo { text-align:center; font-size:13px; color:#444; margin-bottom:24px; }\n  .info-box { border:1px solid #EEE; border-radius:6px; padding:12px 16px; margin-bottom:20px; background:#FAFAFA; }\n  .info-row { display:flex; gap:8px; margin-bottom:4px; }\n  .info-label { font-weight:bold; color:").concat(cor, "; min-width:80px; font-size:11px; text-transform:uppercase; }\n  .info-valor { font-size:12px; color:#333; }\n  table { width:100%; border-collapse:collapse; margin-bottom:24px; }\n  th { background:").concat(cor, "; color:#fff; padding:8px 10px; text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; }\n  td { padding:8px 10px; border-bottom:1px solid #EEE; font-size:12px; }\n  tr:nth-child(even) td { background:#FAFAFA; }\n  .assinaturas { display:flex; justify-content:space-around; margin-top:48px; text-align:center; }\n  .assin img { height:50px; object-fit:contain; display:block; margin:0 auto 6px; }\n  .assin-linha { border-top:1px solid #333; padding-top:6px; min-width:180px; }\n  .assin-nome { font-weight:bold; font-size:12px; }\n  .assin-cargo { font-size:10px; color:#888; }\n  .rodape { text-align:center; font-size:10px; color:#AAA; margin-top:32px; border-top:1px solid #EEE; padding-top:8px; }\n</style></head><body>\n<div class=\"header\">\n  <img src=\"").concat(logoUrl, "\" class=\"logo\" />\n  <div style=\"text-align:right;font-size:11px;color:#666\"><strong>").concat(nomeApp, "</strong><br>").concat(cidade, "</div>\n</div>\n<div class=\"titulo\">Lista de Presen\xE7a</div>\n<div class=\"subtitulo\">").concat(eventoAtual.title, "</div>\n<div class=\"info-box\">\n  <div class=\"info-row\"><span class=\"info-label\">Evento:</span><span class=\"info-valor\">").concat(eventoAtual.title, "</span></div>\n  <div class=\"info-row\"><span class=\"info-label\">Data:</span><span class=\"info-valor\">").concat(dataEvento, "</span></div>\n  ").concat(eventoAtual.local ? "<div class=\"info-row\"><span class=\"info-label\">Local:</span><span class=\"info-valor\">".concat(eventoAtual.local, "</span></div>") : "", "\n  <div class=\"info-row\"><span class=\"info-label\">Presen\xE7as:</span><span class=\"info-valor\">").concat(freqEvento.length, " participante").concat(freqEvento.length !== 1 ? "s" : "", "</span></div>\n</div>\n<table>\n  <thead><tr><th style=\"width:40px;text-align:center\">#</th><th>Nome</th><th>Naipe</th><th style=\"text-align:center\">Check-in</th></tr></thead>\n  <tbody>").concat(linhas, "</tbody>\n</table>\n<div class=\"assinaturas\">\n  <div class=\"assin\">\n    ").concat(sigMaestro ? "<img src=\"".concat(sigMaestro, "\" />") : "<div style='height:50px'></div>", "\n    <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(maestro, "</div><div class=\"assin-cargo\">Maestro \u2013 ").concat(nomeApp, "</div></div>\n  </div>\n  <div class=\"assin\">\n    ").concat(sigLucia ? "<img src=\"".concat(sigLucia, "\" />") : "<div style='height:50px'></div>", "\n    <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(produtora, "</div><div class=\"assin-cargo\">Produtora \u2013 ").concat(nomeApp, "</div></div>\n  </div>\n</div>\n<div class=\"rodape\">Documento gerado em ").concat(hoje, " pelo sistema de gest\xE3o do ").concat(nomeApp, ".</div>\n</body></html>");
    var win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(function () {
      return win.print();
    }, 800);
  }
  function gerarPDFCorista() {
    if (!coristaAtual || freqCorista.length === 0) return;
    var nomeApp = config.nomeApp || "Flamboyant Coral";
    var logoUrl = config.logoUrl || LOGO_URL;
    var maestro = textos.maestro || "Maestro";
    var produtora = textos.produtora || "Lucia Kratz";
    var cidade = textos.cidade || "Goiânia – GO";
    var sigLucia = textos.sigLucia || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
    var sigMaestro = textos.sigMaestro || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";
    var hoje = new Date().toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    var periodoFmt = "".concat(new Date(dataInicio + "T12:00:00").toLocaleDateString("pt-BR"), " a ").concat(new Date(dataFim + "T12:00:00").toLocaleDateString("pt-BR"));
    var linhas = freqCorista.map(function (f, i) {
      return "\n            <tr>\n                <td style=\"text-align:center\">".concat(i + 1, "</td>\n                <td>").concat(f.eventoData ? new Date(f.eventoData + "T12:00:00").toLocaleDateString("pt-BR") : "", "</td>\n                <td>").concat(f.eventoTitulo || "—", "</td>\n            </tr>");
    }).join("");
    var html = "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\">\n<style>\n  body { font-family: Arial, sans-serif; font-size: 12px; color: #222; margin:0; padding:0; }\n  @media print { @page { margin: 2cm; } }\n  .header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid ".concat(cor, "; padding-bottom:14px; margin-bottom:24px; }\n  .logo { width:50px; height:50px; object-fit:contain; }\n  .titulo { text-align:center; font-size:16px; font-weight:bold; color:").concat(cor, "; text-transform:uppercase; letter-spacing:2px; margin-bottom:6px; }\n  .subtitulo { text-align:center; font-size:13px; color:#444; margin-bottom:8px; }\n  .info-box { border:1px solid #EEE; border-radius:6px; padding:12px 16px; margin-bottom:20px; background:#FAFAFA; }\n  .info-row { display:flex; gap:8px; margin-bottom:4px; }\n  .info-label { font-weight:bold; color:").concat(cor, "; min-width:80px; font-size:11px; text-transform:uppercase; }\n  .info-valor { font-size:12px; color:#333; }\n  .declaracao { border-left:3px solid ").concat(cor, "; padding:10px 14px; margin:20px 0; background:#FAFAFA; font-size:13px; line-height:1.7; color:#333; }\n  table { width:100%; border-collapse:collapse; margin-bottom:24px; }\n  th { background:").concat(cor, "; color:#fff; padding:8px 10px; text-align:left; font-size:11px; text-transform:uppercase; }\n  td { padding:8px 10px; border-bottom:1px solid #EEE; font-size:12px; }\n  tr:nth-child(even) td { background:#FAFAFA; }\n  .assinaturas { display:flex; justify-content:space-around; margin-top:48px; text-align:center; }\n  .assin img { height:50px; object-fit:contain; display:block; margin:0 auto 6px; }\n  .assin-linha { border-top:1px solid #333; padding-top:6px; min-width:180px; }\n  .assin-nome { font-weight:bold; font-size:12px; }\n  .assin-cargo { font-size:10px; color:#888; }\n  .rodape { text-align:center; font-size:10px; color:#AAA; margin-top:32px; border-top:1px solid #EEE; padding-top:8px; }\n</style></head><body>\n<div class=\"header\">\n  <img src=\"").concat(logoUrl, "\" class=\"logo\" />\n  <div style=\"text-align:right;font-size:11px;color:#666\"><strong>").concat(nomeApp, "</strong><br>").concat(cidade, "</div>\n</div>\n<div class=\"titulo\">Declara\xE7\xE3o de Participa\xE7\xE3o</div>\n<div class=\"subtitulo\">").concat(nomeApp, "</div>\n<div class=\"info-box\">\n  <div class=\"info-row\"><span class=\"info-label\">Corista:</span><span class=\"info-valor\"><strong>").concat(coristaAtual.name, "</strong></span></div>\n  <div class=\"info-row\"><span class=\"info-label\">Naipe:</span><span class=\"info-valor\">").concat(coristaAtual.voice || "—", "</span></div>\n  <div class=\"info-row\"><span class=\"info-label\">Per\xEDodo:</span><span class=\"info-valor\">").concat(periodoFmt, "</span></div>\n  <div class=\"info-row\"><span class=\"info-label\">Participa\xE7\xF5es:</span><span class=\"info-valor\">").concat(freqCorista.length, " evento").concat(freqCorista.length !== 1 ? "s" : "", "</span></div>\n</div>\n<div class=\"declaracao\">\n  Declaramos para os devidos fins que <strong>").concat(coristaAtual.name, "</strong> \xE9 integrante do ").concat(nomeApp, ",\n  participando ativamente das atividades do grupo no per\xEDodo de ").concat(periodoFmt, ",\n  com registro de presen\xE7a em ").concat(freqCorista.length, " evento").concat(freqCorista.length !== 1 ? "s" : "", " conforme detalhado abaixo.\n</div>\n<table>\n  <thead><tr><th style=\"width:40px;text-align:center\">#</th><th>Data</th><th>Evento</th></tr></thead>\n  <tbody>").concat(linhas, "</tbody>\n</table>\n<div class=\"assinaturas\">\n  <div class=\"assin\">\n    ").concat(sigMaestro ? "<img src=\"".concat(sigMaestro, "\" />") : "<div style='height:50px'></div>", "\n    <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(maestro, "</div><div class=\"assin-cargo\">Maestro \u2013 ").concat(nomeApp, "</div></div>\n  </div>\n  <div class=\"assin\">\n    ").concat(sigLucia ? "<img src=\"".concat(sigLucia, "\" />") : "<div style='height:50px'></div>", "\n    <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(produtora, "</div><div class=\"assin-cargo\">Produtora \u2013 ").concat(nomeApp, "</div></div>\n  </div>\n</div>\n<div class=\"rodape\">Documento gerado em ").concat(hoje, " pelo sistema de gest\xE3o do ").concat(nomeApp, ".</div>\n</body></html>");
    var win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(function () {
      return win.print();
    }, 800);
  }
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  var inp = {
    padding: "10px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "#888",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.8
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor,
      marginBottom: 4
    }
  }, "Declara\xE7\xE3o Digital"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 20
    }
  }, "Emiss\xE3o de listas de presen\xE7a e declara\xE7\xF5es individuais"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 16
    }
  }, [{
    key: "evento",
    label: "Lista de presença por evento",
    icon: "clipboard-list"
  }, {
    key: "corista",
    label: "Declaração individual do corista",
    icon: "user-check"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setTipo(t.key);
      },
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 16px",
        borderRadius: 10,
        border: "2px solid ".concat(tipo === t.key ? cor : "#EEE"),
        background: tipo === t.key ? cor + "10" : "#fff",
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: tipo === t.key ? 700 : 500,
        color: tipo === t.key ? cor : "#555",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 16,
      color: tipo === t.key ? cor : "#AAA"
    }), t.label);
  })), tipo === "evento" && /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Lista de Presen\xE7a por Evento"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Evento"), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: eventoSel,
    onChange: function onChange(e) {
      return setEventoSel(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar evento..."), proximos.length > 0 && /*#__PURE__*/React.createElement("optgroup", {
    label: "PR\xD3XIMOS"
  }, proximos.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.date, " \u2014 ", e.title);
  })), passados.length > 0 && /*#__PURE__*/React.createElement("optgroup", {
    label: "PASSADOS"
  }, passados.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.date, " \u2014 ", e.title);
  })))), eventoSel && /*#__PURE__*/React.createElement(React.Fragment, null, freqEvento.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Nenhuma presen\xE7a registrada neste evento.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, freqEvento.map(function (f, i) {
    var _f$dataHora5;
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderBottom: "1px solid #F5F0F0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA",
        minWidth: 20
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23",
        flex: 1
      }
    }, f.membroNome), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#888"
      }
    }, f.naipe || "—"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, (_f$dataHora5 = f.dataHora) !== null && _f$dataHora5 !== void 0 && _f$dataHora5.seconds ? new Date(f.dataHora.seconds * 1000).toLocaleString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    }) : "—"));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: gerarPDFEvento,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 20px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "printer",
    size: 14,
    color: "#fff"
  }), " Gerar PDF \u2014 Lista de Presen\xE7a")))), tipo === "corista" && /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Declara\xE7\xE3o Individual do Corista"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Corista"), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: coristaId,
    onChange: function onChange(e) {
      return setCoristaId(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar corista..."), members.filter(function (m) {
    return m.active;
  }).sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  }).map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.name);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data in\xEDcio"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: dataInicio,
    onChange: function onChange(e) {
      return setDataInicio(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data fim"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: dataFim,
    onChange: function onChange(e) {
      return setDataFim(e.target.value);
    }
  }))), coristaId && /*#__PURE__*/React.createElement(React.Fragment, null, freqCorista.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Nenhuma participa\xE7\xE3o registrada no per\xEDodo.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, freqCorista.map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderBottom: "1px solid #F5F0F0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA",
        minWidth: 20
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#888",
        minWidth: 90
      }
    }, f.eventoData ? new Date(f.eventoData + "T12:00:00").toLocaleDateString("pt-BR") : ""), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23",
        flex: 1
      }
    }, f.eventoTitulo));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: gerarPDFCorista,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 20px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "printer",
    size: 14,
    color: "#fff"
  }), " Gerar PDF \u2014 Declara\xE7\xE3o Individual")))));
}

// ── PLACEHOLDER ───────────────────────────────────────────────────────────────
function EmBreve(_ref44) {
  var label = _ref44.label,
    icon = _ref44.icon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 80,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 40,
    color: "#DDD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: "#CCC"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#DDD"
    }
  }, "Em constru\xE7\xE3o"));
}

// ── PAINEL DO CORISTA ─────────────────────────────────────────────────────────
function PainelCorista(_ref45) {
  var user = _ref45.user,
    config = _ref45.config;
  var _useCollection19 = useCollection("avisos"),
    avisos = _useCollection19.data;
  var _useCollection20 = useCollection("events", "date"),
    events = _useCollection20.data;
  var _useCollection21 = useCollection("songs"),
    songs = _useCollection21.data;
  var _useCollection22 = useCollection("noticias"),
    noticias = _useCollection22.data;
  var _useState171 = useState(new Date().getMonth()),
    _useState172 = _slicedToArray(_useState171, 2),
    mes = _useState172[0],
    setMes = _useState172[1];
  var _useState173 = useState(new Date().getFullYear()),
    _useState174 = _slicedToArray(_useState173, 2),
    ano = _useState174[0],
    setAno = _useState174[1];
  var _useState175 = useState({}),
    _useState176 = _slicedToArray(_useState175, 2),
    confirmacoes = _useState176[0],
    setConfirmacoes = _useState176[1];
  var _useState177 = useState(null),
    _useState178 = _slicedToArray(_useState177, 2),
    naipeOpen = _useState178[0],
    setNaipeOpen = _useState178[1];
  var _useState179 = useState(false),
    _useState180 = _slicedToArray(_useState179, 2),
    modalNoticiaCorista = _useState180[0],
    setModalNoticiaCorista = _useState180[1];
  var cor = config.corPrimaria || COR;
  var naipe = user.voice || "";
  var naipeKey = {
    "Soprano": "soprano",
    "Mezzo-soprano": "mezzoSoprano",
    "Contralto": "contralto",
    "Tenor": "tenor",
    "Barítono": "baritono",
    "Baixo": "baixo"
  }[naipe] || "soprano";

  // Carregar confirmações do corista
  useEffect(function () {
    if (!user.name) return;
    db.collection("confirmacoes").where("membroNome", "==", user.name).onSnapshot(function (snap) {
      var m = {};
      snap.docs.forEach(function (d) {
        m[d.data().eventoId] = d.data().status;
      });
      setConfirmacoes(m);
    });
  }, [user.name]);
  function confirmar(_x4, _x5) {
    return _confirmar.apply(this, arguments);
  }
  function _confirmar() {
    _confirmar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(eventoId, status) {
      var snap;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.n) {
          case 0:
            _context20.n = 1;
            return db.collection("confirmacoes").where("membroNome", "==", user.name).where("eventoId", "==", eventoId).get();
          case 1:
            snap = _context20.v;
            if (snap.empty) {
              _context20.n = 3;
              break;
            }
            _context20.n = 2;
            return snap.docs[0].ref.update({
              status: status,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 2:
            _context20.n = 4;
            break;
          case 3:
            _context20.n = 4;
            return db.collection("confirmacoes").add({
              membroNome: user.name,
              eventoId: eventoId,
              status: status,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          case 4:
            return _context20.a(2);
        }
      }, _callee20);
    }));
    return _confirmar.apply(this, arguments);
  }
  function navMes(dir) {
    var nm = mes + dir,
      na = ano;
    if (nm > 11) {
      nm = 0;
      na++;
    }
    if (nm < 0) {
      nm = 11;
      na--;
    }
    setMes(nm);
    setAno(na);
  }
  var eventosMes = events.filter(function (e) {
    if (!e.date) return false;
    var _e$date$split3 = e.date.split("-"),
      _e$date$split4 = _slicedToArray(_e$date$split3, 2),
      y = _e$date$split4[0],
      m = _e$date$split4[1];
    return parseInt(m) - 1 === mes && parseInt(y) === ano;
  }).sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  });
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "16px 20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  var prioColor = {
    Urgente: cor,
    Alta: "#1565C0",
    Normal: "#E65100"
  };
  var prioBg = {
    Urgente: "#FFF5F5",
    Alta: "#EFF6FF",
    Normal: "#fff"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 24,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Ol\xE1, ", user.name.split(" ")[0], "! \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginTop: 4
    }
  }, "Confira os avisos e a agenda do coral \xB7 Seu naipe: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: cor,
      fontWeight: 700
    }
  }, naipe || "—"))), /*#__PURE__*/React.createElement(RifaBanner, {
    config: config,
    isAdmin: false
  }), avisos.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "megaphone",
    size: 16,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: cor,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Avisos")), avisos.slice(0, 4).map(function (a) {
    var _a$createdAt3;
    var isAuto = a.tipo && a.tipo !== "manual";
    var bc = isAuto ? "#F59E0B" : prioColor[a.prioridade] || cor;
    var bg = isAuto ? "#FFFBEB" : prioBg[a.prioridade] || "#fff";
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: _objectSpread(_objectSpread({}, card), {}, {
        borderLeft: "3px solid ".concat(bc),
        background: bg,
        padding: "12px 16px"
      })
    }, a.prioridade && a.prioridade !== "Normal" && !isAuto && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: bc,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 4
      }
    }, a.prioridade), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#1A1D23",
        marginBottom: 4
      }
    }, a.title || a.titulo), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#555",
        lineHeight: 1.5
      }
    }, a.text || a.texto), ((_a$createdAt3 = a.createdAt) === null || _a$createdAt3 === void 0 ? void 0 : _a$createdAt3.seconds) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#AAA",
        marginTop: 6
      }
    }, new Date(a.createdAt.seconds * 1000).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long"
    })));
  })), modalNoticiaCorista && /*#__PURE__*/React.createElement(ModalNoticia, {
    noticia: null,
    onClose: function onClose() {
      return setModalNoticiaCorista(false);
    },
    config: config,
    autorInicial: user.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "20px 0 12px",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "newspaper",
    size: 16,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: cor,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Galeria do Coral")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setModalNoticiaCorista(true);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 12,
    color: "#fff"
  }), " Publicar")), noticias.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, noticias.slice(0, 3).map(function (n) {
    var _n$createdAt;
    return /*#__PURE__*/React.createElement("div", {
      key: n.id,
      style: {
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #EEE8E8",
        marginBottom: 10,
        overflow: "hidden",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
      }
    }, n.imageUrl && /*#__PURE__*/React.createElement("img", {
      src: n.imageUrl,
      alt: "",
      style: {
        width: "100%",
        height: 140,
        objectFit: "cover"
      },
      onError: function onError(e) {
        return e.target.style.display = "none";
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#1A1D23",
        marginBottom: 4
      }
    }, n.titulo), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#555",
        lineHeight: 1.5
      }
    }, n.texto), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 6,
        alignItems: "center"
      }
    }, n.autorNome && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: cor,
        fontWeight: 600
      }
    }, "\u270D\uFE0F ", n.autorNome), ((_n$createdAt = n.createdAt) === null || _n$createdAt === void 0 ? void 0 : _n$createdAt.seconds) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#AAA"
      }
    }, new Date(n.createdAt.seconds * 1000).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "20px 0 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16,
    color: cor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: cor,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Agenda")), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, card), {}, {
      padding: 0,
      overflow: "hidden"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      borderBottom: "1px solid #F3EEF9"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navMes(-1);
    },
    style: {
      width: 32,
      height: 32,
      border: "1px solid #EEE",
      borderRadius: 8,
      background: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 16,
    color: "#666"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 16,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, MONTHS_PT[mes].charAt(0).toUpperCase() + MONTHS_PT[mes].slice(1), " De ", ano), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#AAA"
    }
  }, eventosMes.length, " atividade", eventosMes.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navMes(1);
    },
    style: {
      width: 32,
      height: 32,
      border: "1px solid #EEE",
      borderRadius: 8,
      background: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "#666"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px"
    }
  }, eventosMes.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px",
      color: "#CCC",
      fontSize: 13
    }
  }, "Nenhuma atividade neste m\xEAs.") : eventosMes.map(function (e) {
    var dt = new Date(e.date + "T12:00:00");
    var dia = dt.getDate();
    var semana = WEEKDAYS_PT[dt.getDay()].toUpperCase();
    var conf = confirmacoes[e.id];
    var tipoColor = {
      Ensaio: "#1565C0",
      Apresentação: "#2E7D32",
      Reunião: "#E65100",
      Gravação: "#7B1FA2"
    }[e.tipo] || "#888";
    // Áudio do naipe — busca em todas as músicas do setlist
    var audioNaipe = e[naipeKey] || null;
    var urlsNaipe = (e.setlist || []).map(function (item) {
      return songs.find(function (s) {
        return s.id === item.id;
      });
    }).filter(Boolean).map(function (s) {
      return s[naipeKey];
    }).filter(Boolean);
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        display: "flex",
        gap: 14,
        padding: "14px 0",
        borderBottom: "1px solid #F9F5F5",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 52,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        color: cor,
        lineHeight: 1
      }
    }, dia), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#AAA",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    }, semana)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, e.tipo && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: tipoColor + "18",
        color: tipoColor,
        fontWeight: 700,
        display: "inline-block",
        marginBottom: 6
      }
    }, e.tipo), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#1A1D23",
        marginBottom: 6
      }
    }, e.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 6
      }
    }, e.timeChegada && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontSize: 12,
        color: "#666"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 12,
      color: "#AAA"
    }), " Chegada: ", e.timeChegada), e.local && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontSize: 12,
        color: "#666"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 12,
      color: "#AAA"
    }), e.mapsUrl ? /*#__PURE__*/React.createElement("a", {
      href: e.mapsUrl,
      target: "_blank",
      rel: "noreferrer",
      style: {
        color: cor,
        textDecoration: "none"
      }
    }, e.local) : e.local), e.traje && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontSize: 12,
        color: "#666"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shirt",
      size: 12,
      color: "#AAA"
    }), " ", e.traje)), e.notes && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA",
        fontStyle: "italic",
        marginBottom: 8
      }
    }, e.notes), urlsNaipe.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setNaipeOpen(naipeOpen === e.id ? null : e.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        background: cor + "15",
        border: "1px solid ".concat(cor, "33"),
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 600,
        color: cor,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "music",
      size: 12,
      color: cor
    }), "Estudar meu naipe (", naipe, ") \u2014 ", urlsNaipe.length, " m\xFAsica", urlsNaipe.length !== 1 ? "s" : "", /*#__PURE__*/React.createElement(Icon, {
      name: naipeOpen === e.id ? "chevron-up" : "chevron-down",
      size: 12,
      color: cor
    })), naipeOpen === e.id && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, (e.setlist || []).map(function (item, idx) {
      var song = songs.find(function (s) {
        return s.id === item.id;
      });
      var urlN = song === null || song === void 0 ? void 0 : song[naipeKey];
      if (!urlN) return null;
      var embedUrl = function () {
        var yt = urlN.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (yt) return "https://www.youtube.com/embed/".concat(yt[1], "?autoplay=0");
        var dr = urlN.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (dr) return "https://drive.google.com/file/d/".concat(dr[1], "/preview");
        return urlN;
      }();
      return /*#__PURE__*/React.createElement("div", {
        key: item.id || idx
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 600,
          color: "#888",
          marginBottom: 4
        }
      }, idx + 1, ". ", item.title), /*#__PURE__*/React.createElement("iframe", {
        src: embedUrl,
        style: {
          width: "100%",
          height: 80,
          border: "none",
          borderRadius: 8
        },
        allow: "autoplay",
        title: item.title
      }));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, "Sua presen\xE7a:"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return confirmar(e.id, "vou");
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "5px 12px",
        borderRadius: 20,
        border: "1px solid ".concat(conf === "vou" ? "#2E7D32" : "#EEE"),
        background: conf === "vou" ? "#E8F5E9" : "#fff",
        color: conf === "vou" ? "#2E7D32" : "#888",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 13,
      color: conf === "vou" ? "#2E7D32" : "#CCC"
    }), " Vou participar"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return confirmar(e.id, "nao");
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "5px 12px",
        borderRadius: 20,
        border: "1px solid ".concat(conf === "nao" ? cor : "#EEE"),
        background: conf === "nao" ? "#FFF5F5" : "#fff",
        color: conf === "nao" ? cor : "#888",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x-circle",
      size: 13,
      color: conf === "nao" ? cor : "#CCC"
    }), " N\xE3o vou"))));
  }))));
}

// ── MINHA DECLARAÇÃO (corista) ────────────────────────────────────────────────
function MinhaDeclaracao(_ref46) {
  var user = _ref46.user,
    config = _ref46.config;
  var _useCollection23 = useCollection("frequencias", "dataHora"),
    frequencias = _useCollection23.data;
  var _useState181 = useState(new Date().getFullYear() + "-01-01"),
    _useState182 = _slicedToArray(_useState181, 2),
    dataInicio = _useState182[0],
    setDataInicio = _useState182[1];
  var _useState183 = useState(todayStr()),
    _useState184 = _slicedToArray(_useState183, 2),
    dataFim = _useState184[0],
    setDataFim = _useState184[1];
  var _useState185 = useState({}),
    _useState186 = _slicedToArray(_useState185, 2),
    textos = _useState186[0],
    setTextos = _useState186[1];
  var cor = config.corPrimaria || COR;
  useEffect(function () {
    db.collection("config").doc("relatorio").get().then(function (doc) {
      if (doc.exists) setTextos(doc.data());
    });
  }, []);
  var freqCorista = frequencias.filter(function (f) {
    return f.membroNome === user.name && f.eventoData >= dataInicio && f.eventoData <= dataFim;
  }).sort(function (a, b) {
    return a.eventoData > b.eventoData ? 1 : -1;
  });
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  var inp = {
    padding: "10px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "#888",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.8
  };
  function gerarPDF() {
    var nomeApp = config.nomeApp || "Onix Brasil Vocal Internacional";
    var logoUrl = config.logoUrl || LOGO_URL;
    var cidade = textos.cidade || "Goiânia – GO";
    var maestro = textos.maestro || "Maestro";
    var produtora = textos.produtora || "Lucia Kratz";
    var sigLucia = textos.sigLucia || "https://raw.githubusercontent.com/luciakratz-arch/flamb/main/lucia-sig.png";
    var sigMaestro = textos.sigMaestro || "https://raw.githubusercontent.com/luciakratz-arch/onix-brasil/main/paulo-sig.png";
    var hoje = new Date().toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    var periodoFmt = "".concat(new Date(dataInicio + "T12:00:00").toLocaleDateString("pt-BR"), " a ").concat(new Date(dataFim + "T12:00:00").toLocaleDateString("pt-BR"));
    var admissao = user.startDate ? new Date(user.startDate + "T12:00:00").toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    }) : "—";
    var temFreq = freqCorista.length > 0;
    var linhas = temFreq ? freqCorista.map(function (f, i) {
      return "\n            <tr><td>".concat(i + 1, "</td>\n            <td>").concat(f.eventoData ? new Date(f.eventoData + "T12:00:00").toLocaleDateString("pt-BR") : "", "</td>\n            <td>").concat(f.eventoTitulo || "—", "</td></tr>");
    }).join("") : "";
    var tabelaHTML = temFreq ? "\n<table><thead><tr><th>#</th><th>Data</th><th>Evento</th></tr></thead>\n<tbody>".concat(linhas, "</tbody></table>") : "";
    var textoDecl = temFreq ? "Declaramos para os devidos fins que <strong>".concat(user.name, "</strong>").concat(user.voice ? ", " + user.voice : "", ", \n  \xE9 integrante do ").concat(nomeApp, ", participando ativamente das atividades do grupo desde ").concat(admissao, ",\n  com registro de presen\xE7a em <strong>").concat(freqCorista.length, " evento").concat(freqCorista.length !== 1 ? "s" : "", "</strong> no per\xEDodo de ").concat(periodoFmt, ", conforme detalhado abaixo.") : "Declaramos para os devidos fins que <strong>".concat(user.name, "</strong>").concat(user.voice ? ", " + user.voice : "", ", \n  \xE9 integrante do ").concat(nomeApp, ", participando ativamente das atividades do grupo desde ").concat(admissao, ",\n  exercendo a fun\xE7\xE3o de <strong>").concat(user.funcao || "Corista", "</strong>.");
    var html = "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\">\n<style>\n  body{font-family:Arial,sans-serif;font-size:12px;color:#222;margin:0;padding:0}\n  @media print{@page{margin:2cm}}\n  .header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid ".concat(cor, ";padding-bottom:14px;margin-bottom:20px}\n  .logo{width:54px;height:54px;object-fit:contain}\n  .titulo{text-align:center;font-size:17px;font-weight:bold;color:").concat(cor, ";text-transform:uppercase;letter-spacing:2px;margin-bottom:6px}\n  .subtitulo{text-align:center;font-size:12px;color:#666;margin-bottom:20px}\n  .info-box{border:1px solid #EEE;border-radius:6px;padding:12px 16px;margin-bottom:16px;background:#FAFAFA}\n  .info-row{display:flex;gap:8px;margin-bottom:4px;font-size:12px}\n  .info-lbl{font-weight:bold;color:").concat(cor, ";min-width:100px;font-size:11px;text-transform:uppercase}\n  .decl{border-left:3px solid ").concat(cor, ";padding:10px 14px;margin:16px 0;background:#FAFAFA;font-size:13px;line-height:1.7}\n  table{width:100%;border-collapse:collapse;margin-bottom:20px}\n  th{background:").concat(cor, ";color:#fff;padding:7px 10px;text-align:left;font-size:10px;text-transform:uppercase}\n  td{padding:7px 10px;border-bottom:1px solid #EEE;font-size:12px}\n  tr:nth-child(even) td{background:#FAFAFA}\n  .assinaturas{display:flex;justify-content:space-around;margin-top:48px;text-align:center}\n  .assin img{height:52px;object-fit:contain;display:block;margin:0 auto 6px}\n  .assin-linha{border-top:1px solid #333;padding-top:5px;min-width:180px}\n  .assin-nome{font-weight:bold;font-size:12px}\n  .assin-cargo{font-size:10px;color:#888}\n  .rodape{text-align:center;font-size:10px;color:#AAA;margin-top:28px;border-top:1px solid #EEE;padding-top:8px}\n</style></head><body>\n<div class=\"header\">\n  <img src=\"").concat(logoUrl, "\" class=\"logo\"/>\n  <div style=\"text-align:right;font-size:11px;color:#666\"><strong>").concat(nomeApp, "</strong><br>").concat(cidade, "</div>\n</div>\n<div class=\"titulo\">Declara\xE7\xE3o de Participa\xE7\xE3o</div>\n<div class=\"subtitulo\">").concat(nomeApp, "</div>\n<div class=\"info-box\">\n  <div class=\"info-row\"><span class=\"info-lbl\">Nome:</span><span><strong>").concat(user.name, "</strong></span></div>\n  <div class=\"info-row\"><span class=\"info-lbl\">Naipe:</span><span>").concat(user.voice || "—", "</span></div>\n  <div class=\"info-row\"><span class=\"info-lbl\">Membro desde:</span><span>").concat(admissao, "</span></div>\n  <div class=\"info-row\"><span class=\"info-lbl\">Per\xEDodo:</span><span>").concat(periodoFmt, "</span></div>\n  ").concat(temFreq ? "<div class=\"info-row\"><span class=\"info-lbl\">Participa\xE7\xF5es:</span><span>".concat(freqCorista.length, " evento").concat(freqCorista.length !== 1 ? "s" : "", "</span></div>") : "", "\n</div>\n<div class=\"decl\">").concat(textoDecl, "</div>\n").concat(tabelaHTML, "\n<div class=\"assinaturas\">\n  <div class=\"assin\">").concat(sigMaestro ? "<img src=\"".concat(sigMaestro, "\"/>") : "<div style='height:52px'></div>", "\n    <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(maestro, "</div><div class=\"assin-cargo\">Maestro \u2013 ").concat(nomeApp, "</div></div>\n  </div>\n  <div class=\"assin\">").concat(sigLucia ? "<img src=\"".concat(sigLucia, "\"/>") : "<div style='height:52px'></div>", "\n    <div class=\"assin-linha\"><div class=\"assin-nome\">").concat(produtora, "</div><div class=\"assin-cargo\">Produtora \u2013 ").concat(nomeApp, "</div></div>\n  </div>\n</div>\n<div class=\"rodape\">Documento gerado em ").concat(hoje, " pelo sistema de gest\xE3o do ").concat(nomeApp, ".</div>\n</body></html>");
    var win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(function () {
      return win.print();
    }, 800);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor,
      marginBottom: 4
    }
  }, "Minha Declara\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 20
    }
  }, "Declara\xE7\xE3o de participa\xE7\xE3o nas atividades do coral"), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data in\xEDcio"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: dataInicio,
    onChange: function onChange(e) {
      return setDataInicio(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data fim"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: dataFim,
    onChange: function onChange(e) {
      return setDataFim(e.target.value);
    }
  }))), freqCorista.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, freqCorista.map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderBottom: "1px solid #F5F0F0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA",
        minWidth: 20
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#888",
        minWidth: 90
      }
    }, f.eventoData ? new Date(f.eventoData + "T12:00:00").toLocaleDateString("pt-BR") : ""), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23",
        flex: 1
      }
    }, f.eventoTitulo));
  })), freqCorista.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#888",
      padding: "8px 0 12px",
      fontStyle: "italic"
    }
  }, "Nenhuma participa\xE7\xE3o no per\xEDodo \u2014 a declara\xE7\xE3o ser\xE1 gerada com seus dados de v\xEDnculo."), /*#__PURE__*/React.createElement("button", {
    onClick: gerarPDF,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 20px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "printer",
    size: 14,
    color: "#fff"
  }), " Gerar Declara\xE7\xE3o PDF")));
}

// ── NOTÍCIAS / BLOG ───────────────────────────────────────────────────────────
function ModalNoticia(_ref47) {
  var noticia = _ref47.noticia,
    onClose = _ref47.onClose,
    config = _ref47.config;
  var cor = config.corPrimaria || COR;
  var vazio = {
    titulo: "",
    texto: "",
    imageUrl: "",
    categoria: "Geral"
  };
  var _useState187 = useState(noticia ? _objectSpread(_objectSpread({}, vazio), noticia) : vazio),
    _useState188 = _slicedToArray(_useState187, 2),
    form = _useState188[0],
    setForm = _useState188[1];
  var _useState189 = useState(false),
    _useState190 = _slicedToArray(_useState189, 2),
    salvando = _useState190[0],
    setSalvando = _useState190[1];
  var _useState191 = useState(""),
    _useState192 = _slicedToArray(_useState191, 2),
    erro = _useState192[0],
    setErro = _useState192[1];
  function salvar() {
    return _salvar7.apply(this, arguments);
  }
  function _salvar7() {
    _salvar7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
      var d;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.n) {
          case 0:
            if (form.titulo.trim()) {
              _context21.n = 1;
              break;
            }
            setErro("Título é obrigatório.");
            return _context21.a(2);
          case 1:
            if (form.texto.trim()) {
              _context21.n = 2;
              break;
            }
            setErro("Texto é obrigatório.");
            return _context21.a(2);
          case 2:
            setSalvando(true);
            d = {
              titulo: form.titulo,
              texto: form.texto,
              imageUrl: form.imageUrl || "",
              categoria: form.categoria,
              createdAt: noticia ? noticia.createdAt : firebase.firestore.FieldValue.serverTimestamp()
            };
            if (!noticia) {
              _context21.n = 4;
              break;
            }
            _context21.n = 3;
            return db.collection("noticias").doc(noticia.id).update(_objectSpread(_objectSpread({}, d), {}, {
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }));
          case 3:
            _context21.n = 5;
            break;
          case 4:
            _context21.n = 5;
            return db.collection("noticias").add(d);
          case 5:
            setSalvando(false);
            onClose();
          case 6:
            return _context21.a(2);
        }
      }, _callee21);
    }));
    return _salvar7.apply(this, arguments);
  }
  function excluir() {
    return _excluir6.apply(this, arguments);
  }
  function _excluir6() {
    _excluir6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.n) {
          case 0:
            if (window.confirm("Excluir esta notícia?")) {
              _context22.n = 1;
              break;
            }
            return _context22.a(2);
          case 1:
            _context22.n = 2;
            return db.collection("noticias").doc(noticia.id).delete();
          case 2:
            onClose();
          case 3:
            return _context22.a(2);
        }
      }, _callee22);
    }));
    return _excluir6.apply(this, arguments);
  }
  var inp = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#888",
    marginBottom: 5
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 300,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FAFAFA",
      borderRadius: "20px 20px 0 0",
      padding: "24px 20px",
      width: "100%",
      maxWidth: 640,
      maxHeight: "92vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 20,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, noticia ? "Editar Notícia" : "Nova Notícia"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "#EEE",
      border: "none",
      borderRadius: 8,
      width: 32,
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16,
    color: "#666"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "T\xEDtulo *"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.titulo,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          titulo: e.target.value
        });
      });
      setErro("");
    },
    autoFocus: true
  }), erro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: cor,
      marginTop: 4
    }
  }, erro)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Categoria"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: form.categoria,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          categoria: e.target.value
        });
      });
    }
  }, ["Geral", "Apresentação", "Ensaio", "Conquista", "Comunicado", "Evento"].map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "URL da imagem (opcional)"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: form.imageUrl || "",
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          imageUrl: e.target.value
        });
      });
    },
    placeholder: "https://..."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Texto *"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      minHeight: 140,
      resize: "vertical"
    }),
    value: form.texto,
    onChange: function onChange(e) {
      setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          texto: e.target.value
        });
      });
      setErro("");
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, noticia && /*#__PURE__*/React.createElement("button", {
    onClick: excluir,
    style: {
      padding: "12px 16px",
      background: "#FFF0F0",
      color: "#B41020",
      border: "1px solid #F5DADA",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Excluir"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px",
      background: "#F0EAE8",
      color: "#666",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: salvar,
    disabled: salvando,
    style: {
      flex: 1,
      padding: "13px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      opacity: salvando ? 0.7 : 1
    }
  }, salvando ? "Salvando..." : noticia ? "Salvar" : "Publicar"))));
}

// ── ÁREA DO RH ────────────────────────────────────────────────────────────────
function AreaRH(_ref48) {
  var config = _ref48.config,
    abaInicial = _ref48.abaInicial;
  var _useCollection24 = useCollection("members"),
    members = _useCollection24.data;
  var _useCollection25 = useCollection("events", "date"),
    events = _useCollection25.data;
  var _useCollection26 = useCollection("frequencias", "dataHora"),
    frequencias = _useCollection26.data;
  var _useCollection27 = useCollection("noticias"),
    noticias = _useCollection27.data;
  var _useCollection28 = useCollection("relatorios_historico"),
    relatorios = _useCollection28.data;
  var _useState193 = useState(abaInicial || "dashboard"),
    _useState194 = _slicedToArray(_useState193, 2),
    aba = _useState194[0],
    setAba = _useState194[1];
  useEffect(function () {
    if (abaInicial) setAba(abaInicial);
  }, [abaInicial]);
  var _useState195 = useState(null),
    _useState196 = _slicedToArray(_useState195, 2),
    modalNoticia = _useState196[0],
    setModalNoticia = _useState196[1];
  var _useState197 = useState({}),
    _useState198 = _slicedToArray(_useState197, 2),
    textos = _useState198[0],
    setTextos = _useState198[1];
  var cor = config.corPrimaria || COR;
  var today = todayStr();
  useEffect(function () {
    db.collection("config").doc("relatorio").get().then(function (doc) {
      if (doc.exists) setTextos(doc.data());
    });
  }, []);
  var ativos = members.filter(function (m) {
    return m.active;
  });
  var inativos = members.filter(function (m) {
    return !m.active;
  });
  var proxEventos = events.filter(function (e) {
    return e.date >= today;
  }).sort(function (a, b) {
    return a.date > b.date ? 1 : -1;
  }).slice(0, 5);
  var currentMonth = new Date().getMonth() + 1;
  var aniversarios = ativos.filter(function (m) {
    return m.birthday && parseInt(m.birthday.split("-")[1]) === currentMonth;
  });

  // Por naipe
  var naipes = {};
  ativos.forEach(function (m) {
    var n = m.voice || "Outro";
    naipes[n] = (naipes[n] || 0) + 1;
  });
  var naipeColors = {
    Soprano: cor,
    Contralto: "#7B1FA2",
    "Mezzo-soprano": "#C2185B",
    Alto: "#E65100",
    Tenor: "#1565C0",
    Barítono: "#4527A0",
    Baixo: "#1B5E20",
    Outro: "#888"
  };

  // Frequência por corista (últimos 30 dias)
  var hoje30 = new Date();
  hoje30.setDate(hoje30.getDate() - 30);
  var trintaStr = hoje30.toISOString().split("T")[0];
  var freqMap = {};
  frequencias.forEach(function (f) {
    if (f.membroNome) freqMap[f.membroNome] = (freqMap[f.membroNome] || 0) + 1;
  });
  var freqLista = Object.entries(freqMap).sort(function (a, b) {
    return b[1] - a[1];
  }).slice(0, 10);
  var maxFreq = Math.max.apply(Math, _toConsumableArray(freqLista.map(function (_ref49) {
    var _ref50 = _slicedToArray(_ref49, 2),
      v = _ref50[1];
    return v;
  })).concat([1]));

  // Confirmações
  var _useState199 = useState([]),
    _useState200 = _slicedToArray(_useState199, 2),
    confirmacoes = _useState200[0],
    setConfirmacoes = _useState200[1];
  useEffect(function () {
    db.collection("confirmacoes").onSnapshot(function (snap) {
      return setConfirmacoes(snap.docs.map(function (d) {
        return _objectSpread({
          id: d.id
        }, d.data());
      }));
    });
  }, []);
  var vaiParticipiar = confirmacoes.filter(function (c) {
    return c.status === "vou";
  }).length;
  var naoVai = confirmacoes.filter(function (c) {
    return c.status === "nao";
  }).length;
  var card = {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #EEE8E8",
    padding: "16px 20px",
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  };
  var abas = [{
    key: "dashboard",
    label: "Dashboard",
    icon: "bar-chart-2"
  }, {
    key: "noticias",
    label: "Notícias",
    icon: "newspaper"
  }, {
    key: "declaracoes",
    label: "Declarações",
    icon: "file-text"
  }, {
    key: "historico",
    label: "Histórico",
    icon: "clock"
  }];

  // ── DECLARAÇÕES POR CORISTA ──
  var _useState201 = useState(""),
    _useState202 = _slicedToArray(_useState201, 2),
    coristaDecl = _useState202[0],
    setCoristaDecl = _useState202[1];
  var _useState203 = useState(new Date().getFullYear() + "-01-01"),
    _useState204 = _slicedToArray(_useState203, 2),
    dataInicio = _useState204[0],
    setDataInicio = _useState204[1];
  var _useState205 = useState(todayStr()),
    _useState206 = _slicedToArray(_useState205, 2),
    dataFim = _useState206[0],
    setDataFim = _useState206[1];
  var coristaAtual = members.find(function (m) {
    return m.id === coristaDecl;
  });
  var freqCorista = frequencias.filter(function (f) {
    return f.membroId === coristaDecl && f.eventoData >= dataInicio && f.eventoData <= dataFim;
  }).sort(function (a, b) {
    return a.eventoData > b.eventoData ? 1 : -1;
  });
  function gerarDeclCorista() {
    if (!coristaAtual || freqCorista.length === 0) return;
    var nomeApp = config.nomeApp || "Flamboyant Coral",
      logoUrl = config.logoUrl || LOGO_URL;
    var maestro = textos.maestro || "Maestro",
      produtora = textos.produtora || "Lucia Kratz",
      cidade = textos.cidade || "Goiânia – GO";
    var sigL = textos.sigLucia || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
    var sigM = textos.sigMaestro || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";
    var hoje = new Date().toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    var periodo = "".concat(new Date(dataInicio + "T12:00:00").toLocaleDateString("pt-BR"), " a ").concat(new Date(dataFim + "T12:00:00").toLocaleDateString("pt-BR"));
    var linhas = freqCorista.map(function (f, i) {
      return "<tr><td>".concat(i + 1, "</td><td>").concat(f.eventoData ? new Date(f.eventoData + "T12:00:00").toLocaleDateString("pt-BR") : "", "</td><td>").concat(f.eventoTitulo || "—", "</td></tr>");
    }).join("");
    var html = "<!DOCTYPE html><html lang=\"pt-BR\"><head><meta charset=\"UTF-8\"><style>body{font-family:Arial,sans-serif;font-size:12px;color:#222}@media print{@page{margin:2cm}}.header{display:flex;justify-content:space-between;border-bottom:3px solid ".concat(cor, ";padding-bottom:12px;margin-bottom:20px}.logo{width:52px;height:52px;object-fit:contain}.titulo{text-align:center;font-size:16px;font-weight:bold;color:").concat(cor, ";text-transform:uppercase;letter-spacing:2px;margin-bottom:6px}.subtitulo{text-align:center;font-size:12px;color:#666;margin-bottom:20px}.info-box{border:1px solid #EEE;border-radius:6px;padding:12px;margin-bottom:16px;background:#FAFAFA}.info-row{display:flex;gap:8px;margin-bottom:4px;font-size:12px}.info-lbl{font-weight:bold;color:").concat(cor, ";min-width:100px;font-size:11px;text-transform:uppercase}.decl{border-left:3px solid ").concat(cor, ";padding:10px 14px;margin:16px 0;background:#FAFAFA;font-size:13px;line-height:1.7}table{width:100%;border-collapse:collapse;margin-bottom:20px}th{background:").concat(cor, ";color:#fff;padding:7px 10px;text-align:left;font-size:10px;text-transform:uppercase}td{padding:7px 10px;border-bottom:1px solid #EEE;font-size:12px}tr:nth-child(even) td{background:#FAFAFA}.assinaturas{display:flex;justify-content:space-around;margin-top:48px;text-align:center}.assin img{height:50px;object-fit:contain;display:block;margin:0 auto 6px}.assin-linha{border-top:1px solid #333;padding-top:5px;min-width:180px}.assin-nome{font-weight:bold;font-size:12px}.assin-cargo{font-size:10px;color:#888}.rodape{text-align:center;font-size:10px;color:#AAA;margin-top:28px;border-top:1px solid #EEE;padding-top:8px}</style></head><body>\n<div class=\"header\"><img src=\"").concat(logoUrl, "\" class=\"logo\"/><div style=\"text-align:right;font-size:11px;color:#666\"><strong>").concat(nomeApp, "</strong><br>").concat(cidade, "</div></div>\n<div class=\"titulo\">Declara\xE7\xE3o de Participa\xE7\xE3o</div><div class=\"subtitulo\">").concat(nomeApp, "</div>\n<div class=\"info-box\">\n  <div class=\"info-row\"><span class=\"info-lbl\">Nome:</span><span><strong>").concat(coristaAtual.name, "</strong></span></div>\n  <div class=\"info-row\"><span class=\"info-lbl\">Fun\xE7\xE3o:</span><span>").concat(coristaAtual.funcao || "Corista", "</span></div>\n  <div class=\"info-row\"><span class=\"info-lbl\">Naipe:</span><span>").concat(coristaAtual.voice || "—", "</span></div>\n  <div class=\"info-row\"><span class=\"info-lbl\">Per\xEDodo:</span><span>").concat(periodo, "</span></div>\n  <div class=\"info-row\"><span class=\"info-lbl\">Participa\xE7\xF5es:</span><span>").concat(freqCorista.length, " evento").concat(freqCorista.length !== 1 ? "s" : "", "</span></div>\n</div>\n<div class=\"decl\">Declaramos para os devidos fins que <strong>").concat(coristaAtual.name, "</strong>, ").concat(coristaAtual.funcao || "Corista").concat(coristaAtual.voice ? " — " + coristaAtual.voice : "", ", \xE9 integrante do ").concat(nomeApp, ", participando ativamente das atividades do grupo no per\xEDodo de ").concat(periodo, ", com registro de presen\xE7a em <strong>").concat(freqCorista.length, " evento").concat(freqCorista.length !== 1 ? "s" : "", "</strong> conforme detalhado abaixo.</div>\n<table><thead><tr><th>#</th><th>Data</th><th>Evento</th></tr></thead><tbody>").concat(linhas, "</tbody></table>\n<div class=\"assinaturas\">\n  <div class=\"assin\">").concat(sigM ? "<img src=\"".concat(sigM, "\"/>") : "<div style='height:50px'></div>", "<div class=\"assin-linha\"><div class=\"assin-nome\">").concat(maestro, "</div><div class=\"assin-cargo\">Maestro \u2013 ").concat(nomeApp, "</div></div></div>\n  <div class=\"assin\">").concat(sigL ? "<img src=\"".concat(sigL, "\"/>") : "<div style='height:50px'></div>", "<div class=\"assin-linha\"><div class=\"assin-nome\">").concat(produtora, "</div><div class=\"assin-cargo\">Produtora \u2013 ").concat(nomeApp, "</div></div></div>\n</div>\n<div class=\"rodape\">Documento gerado em ").concat(hoje, " pelo sistema de gest\xE3o do ").concat(nomeApp, ".</div>\n</body></html>");
    var win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(function () {
      return win.print();
    }, 800);
    // Salvar no histórico
    db.collection("relatorios_historico").add({
      tipo: "Declaração Individual",
      corista: coristaAtual.name,
      periodo: "".concat(dataInicio, " a ").concat(dataFim),
      geradoEm: firebase.firestore.FieldValue.serverTimestamp(),
      geradoPor: "RH"
    });
  }
  var inp = {
    padding: "10px 14px",
    border: "1px solid #E8E0E0",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    color: "#1A1D23",
    background: "#FAFAFA"
  };
  var lbl = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "#888",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.8
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 28,
      fontWeight: 700,
      color: cor,
      marginBottom: 4
    }
  }, "RH \u2014 Pessoas e Cultura"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 20
    }
  }, "Gest\xE3o de pessoas, comunica\xE7\xE3o e relat\xF3rios"), aba === "dashboard" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 10,
      marginBottom: 12
    }
  }, [{
    label: "Integrantes ativos",
    value: ativos.length,
    sub: "".concat(inativos.length, " inativos"),
    icon: "users",
    color: cor
  }, {
    label: "Confirmações",
    value: vaiParticipiar,
    sub: "".concat(naoVai, " n\xE3o v\xE3o"),
    icon: "check",
    color: "#2E7D32"
  }, {
    label: "Aniversariantes",
    value: aniversarios.length,
    sub: "este mês",
    icon: "cake",
    color: "#E65100"
  }].map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.label,
      style: _objectSpread(_objectSpread({}, card), {}, {
        marginBottom: 0,
        textAlign: "center",
        padding: "14px"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 16,
      color: m.color
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        color: m.color,
        lineHeight: 1
      }
    }, m.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#1A1D23",
        fontWeight: 600,
        marginTop: 4
      }
    }, m.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#AAA",
        marginTop: 2
      }
    }, m.sub));
  })), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Distribui\xE7\xE3o por Naipe"), Object.entries(naipes).map(function (_ref51) {
    var _ref52 = _slicedToArray(_ref51, 2),
      naipe = _ref52[0],
      qtd = _ref52[1];
    var pct = ativos.length > 0 ? Math.round(qtd / ativos.length * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: naipe,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#1A1D23",
        fontWeight: 600
      }
    }, naipe), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, qtd, " \xB7 ", pct, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        background: "#F5EAEA",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + "%",
        height: "100%",
        background: naipeColors[naipe] || "#888",
        borderRadius: 4
      }
    })));
  })), freqLista.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Frequ\xEAncia de Participa\xE7\xE3o"), freqLista.map(function (_ref53) {
    var _ref54 = _slicedToArray(_ref53, 2),
      nome = _ref54[0],
      qtd = _ref54[1];
    return /*#__PURE__*/React.createElement("div", {
      key: nome,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#1A1D23"
      }
    }, nome), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: cor
      }
    }, qtd, " evento", qtd !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "#F5EAEA",
        borderRadius: 3,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(qtd / maxFreq * 100, "%"),
        height: "100%",
        background: cor,
        borderRadius: 3
      }
    })));
  })), proxEventos.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 14
    }
  }, "Confirma\xE7\xF5es \u2014 Pr\xF3ximos Eventos"), proxEventos.map(function (e) {
    var vao = confirmacoes.filter(function (c) {
      return c.eventoId === e.id && c.status === "vou";
    }).length;
    var nao = confirmacoes.filter(function (c) {
      return c.eventoId === e.id && c.status === "nao";
    }).length;
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 0",
        borderBottom: "1px solid #F5EAEA"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, e.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, e.date)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        padding: "2px 10px",
        borderRadius: 20,
        background: "#E8F5E9",
        color: "#2E7D32",
        fontWeight: 700
      }
    }, "\u2713 ", vao, " v\xE3o"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        padding: "2px 10px",
        borderRadius: 20,
        background: "#FFF5F5",
        color: cor,
        fontWeight: 700
      }
    }, "\u2715 ", nao, " n\xE3o v\xE3o"));
  })), aniversarios.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, card), {}, {
      borderLeft: "3px solid #E65100",
      background: "#FFFBEB"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "#E65100",
      marginBottom: 10,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "\uD83C\uDF82 Aniversariantes do M\xEAs"), aniversarios.map(function (m) {
    var _m$birthday$split3 = m.birthday.split("-"),
      _m$birthday$split4 = _slicedToArray(_m$birthday$split3, 3),
      mm = _m$birthday$split4[1],
      dd = _m$birthday$split4[2];
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "6px 0",
        borderBottom: "1px solid #FDE68A"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, m.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, "dia ", parseInt(dd)));
  }))), aba === "noticias" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23"
    }
  }, "Not\xEDcias do Coral"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setModalNoticia("nova");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 16px",
      background: cor,
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      color: "#fff",
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: "#fff"
  }), " Nova Not\xEDcia")), noticias.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, card), {}, {
      textAlign: "center",
      color: "#CCC",
      padding: "32px"
    })
  }, "Nenhuma not\xEDcia publicada.") : noticias.map(function (n) {
    var _n$createdAt2;
    return /*#__PURE__*/React.createElement("div", {
      key: n.id,
      style: _objectSpread(_objectSpread({}, card), {}, {
        cursor: "pointer"
      }),
      onClick: function onClick() {
        return setModalNoticia(n);
      }
    }, n.imageUrl && /*#__PURE__*/React.createElement("img", {
      src: n.imageUrl,
      alt: "",
      style: {
        width: "100%",
        height: 160,
        objectFit: "cover",
        borderRadius: 8,
        marginBottom: 12
      },
      onError: function onError(e) {
        return e.target.style.display = "none";
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 10,
        background: cor + "18",
        color: cor,
        fontWeight: 700
      }
    }, n.categoria || "Geral"), ((_n$createdAt2 = n.createdAt) === null || _n$createdAt2 === void 0 ? void 0 : _n$createdAt2.seconds) && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#AAA"
      }
    }, new Date(n.createdAt.seconds * 1000).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: "#1A1D23",
        marginBottom: 6
      }
    }, n.titulo), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#555",
        lineHeight: 1.5
      }
    }, n.texto.slice(0, 200), n.texto.length > 200 ? "..." : ""));
  }), modalNoticia && /*#__PURE__*/React.createElement(ModalNoticia, {
    noticia: modalNoticia === "nova" ? null : modalNoticia,
    onClose: function onClose() {
      return setModalNoticia(null);
    },
    config: config
  })), aba === "declaracoes" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 16
    }
  }, "Declara\xE7\xE3o Individual por Corista"), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Corista"), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: coristaDecl,
    onChange: function onChange(e) {
      return setCoristaDecl(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecionar..."), members.filter(function (m) {
    return m.active;
  }).sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  }).map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.name);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data in\xEDcio"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: dataInicio,
    onChange: function onChange(e) {
      return setDataInicio(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Data fim"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    style: _objectSpread(_objectSpread({}, inp), {}, {
      width: "100%"
    }),
    value: dataFim,
    onChange: function onChange(e) {
      return setDataFim(e.target.value);
    }
  }))), coristaDecl && (freqCorista.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#CCC",
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Nenhuma participa\xE7\xE3o registrada.") : /*#__PURE__*/React.createElement(React.Fragment, null, freqCorista.map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        display: "flex",
        gap: 10,
        padding: "8px 0",
        borderBottom: "1px solid #F5F0F0",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#AAA",
        minWidth: 20
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#888",
        minWidth: 90
      }
    }, f.eventoData ? new Date(f.eventoData + "T12:00:00").toLocaleDateString("pt-BR") : ""), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, f.eventoTitulo));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: gerarDeclCorista,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 20px",
      background: cor,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "printer",
    size: 14,
    color: "#fff"
  }), " Gerar Declara\xE7\xE3o PDF"))))), aba === "historico" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1A1D23",
      marginBottom: 16
    }
  }, "Hist\xF3rico de Relat\xF3rios Enviados"), relatorios.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, card), {}, {
      textAlign: "center",
      color: "#CCC",
      padding: "32px"
    })
  }, "Nenhum relat\xF3rio registrado ainda.") : /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, card), {}, {
      padding: 0,
      overflow: "hidden"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 100px 100px",
      padding: "10px 16px",
      background: "#FAFAFA",
      borderBottom: "1px solid #EEE"
    }
  }, ["Tipo", "Período", "Gerado em", "Por"].map(function (h) {
    return /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: cor
      }
    }, h);
  })), relatorios.map(function (r, i) {
    var _r$geradoEm;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 100px 100px",
        padding: "12px 16px",
        borderBottom: i < relatorios.length - 1 ? "1px solid #F5F5F5" : "none",
        alignItems: "center",
        background: i % 2 === 0 ? "#fff" : "#FDFBFB"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1D23"
      }
    }, r.tipo || "Relatório"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#888"
      }
    }, r.periodo || "—", r.corista ? " \xB7 ".concat(r.corista) : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, (_r$geradoEm = r.geradoEm) !== null && _r$geradoEm !== void 0 && _r$geradoEm.seconds ? new Date(r.geradoEm.seconds * 1000).toLocaleDateString("pt-BR") : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#AAA"
      }
    }, r.geradoPor || "—"));
  }))));
}

// ── NAV ───────────────────────────────────────────────────────────────────────
var NAV_ADMIN = [{
  key: "painel",
  label: "Painel",
  icon: "layout-dashboard"
}, {
  key: "integrantes",
  label: "Integrantes",
  icon: "users"
}, {
  key: "musicas",
  label: "Músicas",
  icon: "music"
}, {
  key: "estudos",
  label: "Sala de Estudos",
  icon: "graduation-cap"
}, {
  key: "agenda",
  label: "Agenda",
  icon: "calendar"
}, {
  key: "avisos",
  label: "Avisos",
  icon: "megaphone"
}, {
  key: "frequencia",
  label: "Frequência",
  icon: "bar-chart-2"
}, {
  key: "apresentacao",
  label: "Apresentação",
  icon: "mic"
}, {
  key: "declaracao",
  label: "Declaração Digital",
  icon: "file-text"
}, {
  key: "relatorios",
  label: "Relatórios",
  icon: "chart-bar"
}, {
  key: "config",
  label: "Configurações",
  icon: "settings"
}];
var NAV_RH = [{
  key: "rh_dashboard",
  label: "Dashboard",
  icon: "bar-chart-2"
}, {
  key: "rh_noticias",
  label: "Notícias",
  icon: "newspaper"
}, {
  key: "rh_declaracoes",
  label: "Declarações",
  icon: "file-text"
}, {
  key: "rh_historico",
  label: "Histórico",
  icon: "clock"
}];
var NAV_CORISTA = [{
  key: "inicio",
  label: "Início",
  icon: "home"
}, {
  key: "musicas",
  label: "Músicas",
  icon: "music"
}, {
  key: "estudos",
  label: "Sala de Estudos",
  icon: "graduation-cap"
}, {
  key: "declaracao",
  label: "Minha Declaração",
  icon: "file-text"
}];

// ── APP ───────────────────────────────────────────────────────────────────────
function App() {
  var _useState207 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem("cf_user"));
      } catch (_unused) {
        return null;
      }
    }),
    _useState208 = _slicedToArray(_useState207, 2),
    user = _useState208[0],
    setUser = _useState208[1];
  var _useState209 = useState([]),
    _useState210 = _slicedToArray(_useState209, 2),
    members = _useState210[0],
    setMembers = _useState210[1];
  var _useState211 = useState("painel"),
    _useState212 = _slicedToArray(_useState211, 2),
    tab = _useState212[0],
    setTab = _useState212[1];
  var _useConfig = useConfig(),
    config = _useConfig.config,
    save = _useConfig.save;
  useEffect(function () {
    var unsub = db.collection("members").onSnapshot(function (snap) {
      return setMembers(snap.docs.map(function (d) {
        return _objectSpread({
          id: d.id
        }, d.data());
      }));
    });
    return unsub;
  }, []);
  function handleLogin(u) {
    localStorage.setItem("cf_user", JSON.stringify(u));
    setUser(u);
    setTab(u.isAdmin ? "painel" : u.role === "rh" ? "rh_dashboard" : "inicio");
    // Registrar acesso do corista
    if (u.role === "corista" && u.name) {
      var agora = new Date();
      db.collection("acessos").add({
        nome: u.name,
        dataHora: firebase.firestore.FieldValue.serverTimestamp(),
        data: agora.toISOString().split("T")[0]
      });
    }
  }
  function handleLogout() {
    localStorage.removeItem("cf_user");
    setUser(null);
  }
  var params = new URLSearchParams(window.location.search);
  var isCadastro = params.get("cadastro") === "1";
  var mesaId = params.get("mesa");
  var checkinId = params.get("checkin");
  if (isCadastro) return /*#__PURE__*/React.createElement(CadastroPublico, {
    config: config
  });
  if (mesaId) return /*#__PURE__*/React.createElement(MesaSom, {
    eventoId: mesaId,
    config: config
  });
  if (checkinId) return /*#__PURE__*/React.createElement(CheckinPublico, {
    sessaoId: checkinId,
    config: config
  });
  if (!user) return /*#__PURE__*/React.createElement(Login, {
    members: members,
    onLogin: handleLogin,
    config: config
  });
  var isAdmin = user.isAdmin;
  var cor = config.corPrimaria || COR;
  var fundo = config.corFundo || COR_FUNDO;
  var navItems = isAdmin ? NAV_ADMIN : user.role === "rh" ? NAV_RH : NAV_CORISTA;
  var pages = {
    painel: /*#__PURE__*/React.createElement(Painel, {
      user: user,
      config: config
    }),
    integrantes: /*#__PURE__*/React.createElement(Integrantes, {
      config: config
    }),
    musicas: /*#__PURE__*/React.createElement(Repertorio, {
      config: config,
      isAdmin: isAdmin
    }),
    estudos: /*#__PURE__*/React.createElement(SalaEstudos, {
      config: config,
      isAdmin: isAdmin
    }),
    agenda: /*#__PURE__*/React.createElement(Agenda, {
      config: config,
      isAdmin: isAdmin
    }),
    avisos: /*#__PURE__*/React.createElement(Avisos, {
      config: config,
      isAdmin: isAdmin
    }),
    frequencia: /*#__PURE__*/React.createElement(Frequencia, {
      config: config
    }),
    apresentacao: /*#__PURE__*/React.createElement(Apresentacao, {
      config: config
    }),
    declaracao: isAdmin ? /*#__PURE__*/React.createElement(Declaracao, {
      config: config
    }) : /*#__PURE__*/React.createElement(MinhaDeclaracao, {
      user: user,
      config: config
    }),
    relatorios: /*#__PURE__*/React.createElement(Relatorios, {
      config: config
    }),
    rh: /*#__PURE__*/React.createElement(AreaRH, {
      config: config,
      abaInicial: "dashboard"
    }),
    rh_dashboard: /*#__PURE__*/React.createElement(AreaRH, {
      config: config,
      abaInicial: "dashboard"
    }),
    rh_noticias: /*#__PURE__*/React.createElement(AreaRH, {
      config: config,
      abaInicial: "noticias"
    }),
    rh_declaracoes: /*#__PURE__*/React.createElement(AreaRH, {
      config: config,
      abaInicial: "declaracoes"
    }),
    rh_historico: /*#__PURE__*/React.createElement(AreaRH, {
      config: config,
      abaInicial: "historico"
    }),
    config: /*#__PURE__*/React.createElement(Configuracoes, {
      config: config,
      save: save
    }),
    inicio: /*#__PURE__*/React.createElement(PainelCorista, {
      user: user,
      config: config
    })
  };
  var mobileNav = isAdmin ? [NAV_ADMIN[0], NAV_ADMIN[1], NAV_ADMIN[4], NAV_ADMIN[5], NAV_ADMIN[10]] : user.role === "rh" ? NAV_RH : [NAV_CORISTA[0], NAV_CORISTA[1], NAV_CORISTA[2], NAV_CORISTA[3]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: fundo
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 260,
      background: "#fff",
      borderRight: "1px solid #EEE0E0",
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      zIndex: 200,
      boxShadow: "2px 0 12px rgba(0,0,0,0.04)"
    },
    className: "sidebar-desktop"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 16px",
      borderBottom: "1px solid #F5EAEA"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      background: fundo,
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: config.logoUrl || LOGO_URL,
    alt: "",
    style: {
      width: 28,
      height: 28,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      fontSize: 15,
      fontWeight: 700,
      color: cor,
      lineHeight: 1.2
    }
  }, config.nomeApp || "Flamboyant Coral"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#AAA"
    }
  }, isAdmin ? config.subtitulo || "Portal de Gestão" : "Área do Corista")))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: "12px 10px",
      overflowY: "auto"
    }
  }, navItems.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item.key,
      onClick: function onClick() {
        return setTab(item.key);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "10px 12px",
        borderRadius: 10,
        border: "none",
        background: tab === item.key ? cor : "none",
        color: tab === item.key ? "#fff" : "#444",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: tab === item.key ? 700 : 500,
        marginBottom: 2,
        textAlign: "left",
        transition: "background 0.15s"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 16,
      color: tab === item.key ? "#fff" : "#888"
    }), item.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderTop: "1px solid #F5EAEA"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#AAA",
      marginBottom: 2
    }
  }, isAdmin ? "Administrador" : user.voice || "Corista"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#1A1D23",
      marginBottom: 10
    }
  }, user.name), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout,
    style: {
      width: "100%",
      padding: "9px",
      background: fundo,
      color: cor,
      border: "1px solid ".concat(cor, "33"),
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Sair"))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      paddingBottom: 72,
      minHeight: "100vh"
    },
    className: "main-content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: cor,
      padding: "12px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100
    },
    className: "header-mobile"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      background: "rgba(255,255,255,0.15)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: config.logoUrl || LOGO_URL,
    alt: "",
    style: {
      width: 22,
      height: 22,
      objectFit: "contain"
    },
    onError: function onError(e) {
      return e.target.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display',serif",
      color: "#fff",
      fontSize: 15,
      fontWeight: 700
    }
  }, config.nomeApp || "Flamboyant Coral")), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout,
    style: {
      background: "rgba(255,255,255,0.15)",
      border: "1px solid rgba(255,255,255,0.3)",
      color: "#fff",
      borderRadius: 6,
      padding: "5px 12px",
      fontSize: 10,
      cursor: "pointer",
      fontFamily: "inherit",
      textTransform: "uppercase",
      letterSpacing: 0.8
    }
  }, "Sair")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 20px",
      maxWidth: 900
    }
  }, pages[tab] || /*#__PURE__*/React.createElement(EmBreve, {
    label: tab,
    icon: "layout-dashboard"
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#fff",
      borderTop: "1px solid #EEE0E0",
      display: "flex",
      zIndex: 150
    },
    className: "nav-mobile"
  }, mobileNav.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item.key,
      onClick: function onClick() {
        return setTab(item.key);
      },
      style: {
        flex: 1,
        padding: "9px 0 7px",
        border: "none",
        background: "none",
        cursor: "pointer",
        fontSize: 9,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        fontFamily: "inherit",
        color: tab === item.key ? cor : "#CCC",
        borderTop: "2px solid ".concat(tab === item.key ? cor : "transparent"),
        transition: "color 0.15s"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 18,
      color: tab === item.key ? cor : "#CCC"
    }), item.label);
  })));
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
