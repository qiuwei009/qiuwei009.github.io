import{p as post}from"./request.4aa88092.js";import{_ as _export_sfc}from"./index.be6222e2.js";import html2canvas from"./html2canvas.4d0ab5af.js";import{E}from"./jspdf.39b26006.js";import{a as ElMessage}from"./element-plus.2cc2e93a.js";import{d as defineComponent,f as ref,X as reactive,i as onMounted,c as createElementBlock,R as createVNode,P as withCtx,a as createBaseVNode,H as resolveComponent,o as openBlock,T as toDisplayString,$ as createTextVNode,as as pushScopeId,at as popScopeId}from"./@vue.51d06c04.js";import{j as echarts}from"./echarts.0483b3d8.js";import"./axios.1257cc19.js";import"./qs.43721135.js";import"./side-channel.ba47274a.js";import"./get-intrinsic.1675b33e.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.0b5a4f26.js";import"./object-inspect.edb9dbe4.js";import"./jmuxer.f6538b25.js";import"./pinia.ea582305.js";import"./vue-demi.b3a9cad9.js";/* empty css                    */import"./jquery.310f556f.js";import"./vue-router.b643039d.js";import"./lodash.d0608cb7.js";import"./@wangeditor.e02a5395.js";import"./@element-plus.38dbca56.js";import"./vite-plugin-mock.c101b59b.js";import"./mockjs.c44c5d1b.js";import"./path-to-regexp.3eda823b.js";import"./dayjs.694c8893.js";import"./lodash-es.242a7524.js";import"./@vueuse.5bca85f6.js";import"./async-validator.fb49d0f5.js";import"./@popperjs.da6c49cb.js";import"./@ctrl.82a509e0.js";import"./tslib.60310f1a.js";import"./zrender.c529f8bd.js";import"./@babel.2b7b499d.js";import"./fflate.fca59393.js";let pre="";function getAlarm(c,j){return post(`${pre}/aialarm/list?pageNum=${c.pageNum}&pageSize=${c.pageSize}`,c,j)}function getDust(c,j){return post(pre+"/alarm/report/dust",c,j)}function getAiFire(c,j){return post(pre+"/alarm/report/fire",c,j)}function getStationPm(c,j){return post(pre+"/alarm/report/station/pm",c,j)}function getStationAqi(c,j){return post(pre+"/alarm/report/station/aqi",c,j)}function getAll(c,j){return post(pre+"/alarm/report/all",c,j)}function getDustAlarm(c,j){return post(pre+"/alarm/report/alarm/dust",c,j)}var pdf=(c,j,U)=>{if(!c)throw new Error("\u8BF7\u4F20\u5165\u5143\u7D20id");const s=document.querySelector(`#${c}`),t=document.createElement("canvas"),m=s.clientWidth,d=s.clientHeight,x=window.devicePixelRatio,N=3;t.width=m*N,t.height=d*N,t.getContext("2d").scale(N,N),html2canvas(s,{scale:x,canvas:t,width:m,height:d,useCORS:!0}).then(function(T){let p=T.width,i=T.height,w=p/592.28*841.89,I=i,b=0,k=595.28,u=592.28/p*i,g=T.toDataURL("image/jpeg",1);if(U==="pdf"){let _=new E("","pt","a4");if(I<w)_.addImage(g,"JPEG",0,0,k,u);else for(;I>0;)_.addImage(g,"JPEG",0,b,k,u),I-=w,b-=841.89,I>0&&_.addPage();_.save(j+".pdf")}else if(U==="img"){const _=document.createElement("a");_.download=j,_.href=g,document.body.appendChild(_),_.click(),document.body.removeChild(_)}})};window.docxtemplater=function(c){var j={};function U(s){if(j[s])return j[s].exports;var t=j[s]={i:s,l:!1,exports:{}};return c[s].call(t.exports,t,t.exports,U),t.l=!0,t.exports}return U.m=c,U.c=j,U.d=function(s,t,m){U.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:m})},U.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},U.t=function(s,t){if(t&1&&(s=U(s)),t&8||t&4&&typeof s=="object"&&s&&s.__esModule)return s;var m=Object.create(null);if(U.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:s}),t&2&&typeof s!="string")for(var d in s)U.d(m,d,function(x){return s[x]}.bind(null,d));return m},U.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return U.d(t,"a",t),t},U.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},U.p="",U(U.s="./es6/docxtemplater.js")}({"./es6/browser-versions/xmldom.js":function(module,exports){eval(`module.exports = {
  XMLSerializer: window.XMLSerializer,
  DOMParser: window.DOMParser,
  XMLDocument: window.XMLDocument
};

//# sourceURL=webpack://docxtemplater/./es6/browser-versions/xmldom.js?`)},"./es6/doc-utils.js":function(module,exports,__webpack_require__){eval(`

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! xmldom */ "./es6/browser-versions/xmldom.js"),
    DOMParser = _require.DOMParser,
    XMLSerializer = _require.XMLSerializer;

var _require2 = __webpack_require__(/*! ./errors */ "./es6/errors.js"),
    throwXmlTagNotFound = _require2.throwXmlTagNotFound;

function parser(tag) {
  return _defineProperty({}, "get", function get(scope) {
    if (tag === ".") {
      return scope;
    }

    return scope[tag];
  });
}

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function startsWith(str, prefix) {
  return str.substring(0, prefix.length) === prefix;
}

function unique(arr) {
  var hash = {},
      result = [];

  for (var i = 0, l = arr.length; i < l; ++i) {
    if (!hash.hasOwnProperty(arr[i])) {
      hash[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}

function chunkBy(parsed, f) {
  return parsed.reduce(function (chunks, p) {
    var currentChunk = last(chunks);

    if (currentChunk.length === 0) {
      currentChunk.push(p);
      return chunks;
    }

    var res = f(p);

    if (res === "start") {
      chunks.push([p]);
    } else if (res === "end") {
      currentChunk.push(p);
      chunks.push([]);
    } else {
      currentChunk.push(p);
    }

    return chunks;
  }, [[]]).filter(function (p) {
    return p.length > 0;
  });
}

function last(a) {
  return a[a.length - 1];
}

var defaults = {
  nullGetter: function nullGetter(part) {
    if (!part.module) {
      return "undefined";
    }

    if (part.module === "rawxml") {
      return "";
    }

    return "";
  },
  xmlFileNames: [],
  parser: parser,
  linebreaks: false,
  delimiters: {
    start: "{",
    end: "}"
  }
};

function mergeObjects() {
  var resObj = {};
  var obj, keys;

  for (var i = 0; i < arguments.length; i += 1) {
    obj = arguments[i];
    keys = Object.keys(obj);

    for (var j = 0; j < keys.length; j += 1) {
      resObj[keys[j]] = obj[keys[j]];
    }
  }

  return resObj;
}

function xml2str(xmlNode) {
  var a = new XMLSerializer();
  return a.serializeToString(xmlNode).replace(/xmlns(:[a-z0-9]+)?="" ?/g, "");
}

function str2xml(str) {
  var parser = new DOMParser();
  return parser.parseFromString(str, "text/xml");
}

var charMap = {
  "&": "&amp;",
  "'": "&apos;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
var regexStripRegexp = /[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g;

function escapeRegExp(str) {
  return str.replace(regexStripRegexp, "\\\\$&");
}

var charMapRegexes = Object.keys(charMap).map(function (endChar) {
  var startChar = charMap[endChar];
  return {
    rstart: new RegExp(escapeRegExp(startChar), "g"),
    rend: new RegExp(escapeRegExp(endChar), "g"),
    start: startChar,
    end: endChar
  };
});

function wordToUtf8(string) {
  var r;

  for (var i = 0, l = charMapRegexes.length; i < l; i++) {
    r = charMapRegexes[i];
    string = string.replace(r.rstart, r.end);
  }

  return string;
}

function utf8ToWord(string) {
  if (typeof string !== "string") {
    string = string.toString();
  }

  var r;

  for (var i = 0, l = charMapRegexes.length; i < l; i++) {
    r = charMapRegexes[i];
    string = string.replace(r.rend, r.start);
  }

  return string;
} // This function is written with for loops for performance


function concatArrays(arrays) {
  var result = [];

  for (var i = 0; i < arrays.length; i++) {
    var array = arrays[i];

    for (var j = 0, len = array.length; j < len; j++) {
      result.push(array[j]);
    }
  }

  return result;
}

var spaceRegexp = new RegExp(String.fromCharCode(160), "g");

function convertSpaces(s) {
  return s.replace(spaceRegexp, " ");
}

function pregMatchAll(regex, content) {
  /* regex is a string, content is the content. It returns an array of all matches with their offset, for example:
  	 regex=la
  	 content=lolalolilala
  returns: [{array: {0: 'la'},offset: 2},{array: {0: 'la'},offset: 8},{array: {0: 'la'} ,offset: 10}]
  */
  var matchArray = [];
  var match;

  while ((match = regex.exec(content)) != null) {
    matchArray.push({
      array: match,
      offset: match.index
    });
  }

  return matchArray;
}

function getRight(parsed, element, index) {
  var val = getRightOrNull(parsed, element, index);

  if (val !== null) {
    return val;
  }

  throwXmlTagNotFound({
    position: "right",
    element: element,
    parsed: parsed,
    index: index
  });
}

function getRightOrNull(parsed, element, index) {
  for (var i = index, l = parsed.length; i < l; i++) {
    var part = parsed[i];

    if (part.value === "</" + element + ">") {
      return i;
    }
  }

  return null;
}

function getLeft(parsed, element, index) {
  var val = getLeftOrNull(parsed, element, index);

  if (val !== null) {
    return val;
  }

  throwXmlTagNotFound({
    position: "left",
    element: element,
    parsed: parsed,
    index: index
  });
}

function getLeftOrNull(parsed, element, index) {
  for (var i = index; i >= 0; i--) {
    var part = parsed[i];

    if (part.value.indexOf("<" + element) === 0 && [">", " "].indexOf(part.value[element.length + 1]) !== -1) {
      return i;
    }
  }

  return null;
}

function isTagStart(tagType, _ref2) {
  var type = _ref2.type,
      tag = _ref2.tag,
      position = _ref2.position;
  return type === "tag" && tag === tagType && position === "start";
}

function isTagEnd(tagType, _ref3) {
  var type = _ref3.type,
      tag = _ref3.tag,
      position = _ref3.position;
  return type === "tag" && tag === tagType && position === "end";
}

function isParagraphStart(options) {
  return isTagStart("w:p", options) || isTagStart("a:p", options);
}

function isParagraphEnd(options) {
  return isTagEnd("w:p", options) || isTagEnd("a:p", options);
}

function isTextStart(part) {
  return part.type === "tag" && part.position === "start" && part.text;
}

function isTextEnd(part) {
  return part.type === "tag" && part.position === "end" && part.text;
}

function isContent(p) {
  return p.type === "placeholder" || p.type === "content" && p.position === "insidetag";
}

var corruptCharacters = /[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F]/; // 00    NUL '\\0' (null character)
// 01    SOH (start of heading)
// 02    STX (start of text)
// 03    ETX (end of text)
// 04    EOT (end of transmission)
// 05    ENQ (enquiry)
// 06    ACK (acknowledge)
// 07    BEL '\\a' (bell)
// 08    BS  '\\b' (backspace)
// 0B    VT  '\\v' (vertical tab)
// 0C    FF  '\\f' (form feed)
// 0E    SO  (shift out)
// 0F    SI  (shift in)
// 10    DLE (data link escape)
// 11    DC1 (device control 1)
// 12    DC2 (device control 2)
// 13    DC3 (device control 3)
// 14    DC4 (device control 4)
// 15    NAK (negative ack.)
// 16    SYN (synchronous idle)
// 17    ETB (end of trans. blk)
// 18    CAN (cancel)
// 19    EM  (end of medium)
// 1A    SUB (substitute)
// 1B    ESC (escape)
// 1C    FS  (file separator)
// 1D    GS  (group separator)
// 1E    RS  (record separator)
// 1F    US  (unit separator)

function hasCorruptCharacters(string) {
  return corruptCharacters.test(string);
}

module.exports = {
  endsWith: endsWith,
  startsWith: startsWith,
  isContent: isContent,
  isParagraphStart: isParagraphStart,
  isParagraphEnd: isParagraphEnd,
  isTagStart: isTagStart,
  isTagEnd: isTagEnd,
  isTextStart: isTextStart,
  isTextEnd: isTextEnd,
  unique: unique,
  chunkBy: chunkBy,
  last: last,
  mergeObjects: mergeObjects,
  xml2str: xml2str,
  str2xml: str2xml,
  getRightOrNull: getRightOrNull,
  getRight: getRight,
  getLeftOrNull: getLeftOrNull,
  getLeft: getLeft,
  pregMatchAll: pregMatchAll,
  convertSpaces: convertSpaces,
  escapeRegExp: escapeRegExp,
  charMapRegexes: charMapRegexes,
  hasCorruptCharacters: hasCorruptCharacters,
  defaults: defaults,
  wordToUtf8: wordToUtf8,
  utf8ToWord: utf8ToWord,
  concatArrays: concatArrays,
  charMap: charMap
};

//# sourceURL=webpack://docxtemplater/./es6/doc-utils.js?`)},"./es6/docxtemplater.js":function(module,exports,__webpack_require__){eval(`

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DocUtils = __webpack_require__(/*! ./doc-utils */ "./es6/doc-utils.js");

DocUtils.traits = __webpack_require__(/*! ./traits */ "./es6/traits.js");
DocUtils.moduleWrapper = __webpack_require__(/*! ./module-wrapper */ "./es6/module-wrapper.js");
var defaults = DocUtils.defaults,
    str2xml = DocUtils.str2xml,
    xml2str = DocUtils.xml2str,
    moduleWrapper = DocUtils.moduleWrapper,
    utf8ToWord = DocUtils.utf8ToWord,
    concatArrays = DocUtils.concatArrays,
    unique = DocUtils.unique;

var _require = __webpack_require__(/*! ./errors */ "./es6/errors.js"),
    XTInternalError = _require.XTInternalError,
    throwFileTypeNotIdentified = _require.throwFileTypeNotIdentified,
    throwFileTypeNotHandled = _require.throwFileTypeNotHandled,
    throwApiVersionError = _require.throwApiVersionError;

var currentModuleApiVersion = [3, 6, 0];

var Docxtemplater =
/*#__PURE__*/
function () {
  function Docxtemplater() {
    _classCallCheck(this, Docxtemplater);

    if (arguments.length > 0) {
      throw new Error("The constructor with parameters has been removed in docxtemplater 3, please check the upgrade guide.");
    }

    this.compiled = {};
    this.modules = [];
    this.setOptions({});
  }

  _createClass(Docxtemplater, [{
    key: "getModuleApiVersion",
    value: function getModuleApiVersion() {
      return currentModuleApiVersion.join(".");
    }
  }, {
    key: "verifyApiVersion",
    value: function verifyApiVersion(neededVersion) {
      neededVersion = neededVersion.split(".").map(function (i) {
        return parseInt(i, 10);
      });

      if (neededVersion.length !== 3) {
        throwApiVersionError("neededVersion is not a valid version", {
          neededVersion: neededVersion,
          explanation: "the neededVersion must be an array of length 3"
        });
      }

      if (neededVersion[0] !== currentModuleApiVersion[0]) {
        throwApiVersionError("The major api version do not match, you probably have to update docxtemplater with npm install --save docxtemplater", {
          neededVersion: neededVersion,
          currentModuleApiVersion: currentModuleApiVersion,
          explanation: "moduleAPIVersionMismatch : needed=".concat(neededVersion.join("."), ", current=").concat(currentModuleApiVersion.join("."))
        });
      }

      if (neededVersion[1] > currentModuleApiVersion[1]) {
        throwApiVersionError("The minor api version is not uptodate, you probably have to update docxtemplater with npm install --save docxtemplater", {
          neededVersion: neededVersion,
          currentModuleApiVersion: currentModuleApiVersion,
          explanation: "moduleAPIVersionMismatch : needed=".concat(neededVersion.join("."), ", current=").concat(currentModuleApiVersion.join("."))
        });
      }

      return true;
    }
  }, {
    key: "setModules",
    value: function setModules(obj) {
      this.modules.forEach(function (module) {
        module.set(obj);
      });
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(eventName) {
      this.modules.forEach(function (module) {
        module.on(eventName);
      });
    }
  }, {
    key: "attachModule",
    value: function attachModule(module) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prefix = options.prefix;

      if (prefix) {
        module.prefix = prefix;
      }

      this.modules.push(moduleWrapper(module));
      return this;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var _this = this;

      if (options.delimiters) {
        options.delimiters.start = utf8ToWord(options.delimiters.start);
        options.delimiters.end = utf8ToWord(options.delimiters.end);
      }

      this.options = options;
      Object.keys(defaults).forEach(function (key) {
        var defaultValue = defaults[key];
        _this.options[key] = _this.options[key] != null ? _this.options[key] : defaultValue;
        _this[key] = _this.options[key];
      });

      if (this.zip) {
        this.updateFileTypeConfig();
      }

      return this;
    }
  }, {
    key: "loadZip",
    value: function loadZip(zip) {
      if (zip.loadAsync) {
        throw new XTInternalError("Docxtemplater doesn't handle JSZip version >=3, see changelog");
      }

      this.zip = zip;
      this.updateFileTypeConfig();
      this.modules = concatArrays([this.fileTypeConfig.baseModules.map(function (moduleFunction) {
        return moduleFunction();
      }), this.modules]);
      return this;
    }
  }, {
    key: "compileFile",
    value: function compileFile(fileName) {
      var currentFile = this.createTemplateClass(fileName);
      currentFile.parse();
      this.compiled[fileName] = currentFile;
    }
  }, {
    key: "resolveData",
    value: function resolveData(data) {
      var _this2 = this;

      return Promise.all(Object.keys(this.compiled).map(function (from) {
        var currentFile = _this2.compiled[from];
        return currentFile.resolveTags(data);
      })).then(function (resolved) {
        return concatArrays(resolved);
      });
    }
  }, {
    key: "compile",
    value: function compile() {
      var _this3 = this;

      if (Object.keys(this.compiled).length) {
        return this;
      }

      this.options = this.modules.reduce(function (options, module) {
        return module.optionsTransformer(options, _this3);
      }, this.options);
      this.options.xmlFileNames = unique(this.options.xmlFileNames);
      this.xmlDocuments = this.options.xmlFileNames.reduce(function (xmlDocuments, fileName) {
        var content = _this3.zip.files[fileName].asText();

        xmlDocuments[fileName] = str2xml(content);
        return xmlDocuments;
      }, {});
      this.setModules({
        zip: this.zip,
        xmlDocuments: this.xmlDocuments
      });
      this.getTemplatedFiles();
      this.setModules({
        compiled: this.compiled
      }); // Loop inside all templatedFiles (ie xml files with content).
      // Sometimes they don't exist (footer.xml for example)

      this.templatedFiles.forEach(function (fileName) {
        if (_this3.zip.files[fileName] != null) {
          _this3.compileFile(fileName);
        }
      });
      return this;
    }
  }, {
    key: "updateFileTypeConfig",
    value: function updateFileTypeConfig() {
      var fileType;

      if (this.zip.files.mimetype) {
        fileType = "odt";
      }

      if (this.zip.files["word/document.xml"] || this.zip.files["word/document2.xml"]) {
        fileType = "docx";
      }

      if (this.zip.files["ppt/presentation.xml"]) {
        fileType = "pptx";
      }

      if (fileType === "odt") {
        throwFileTypeNotHandled(fileType);
      }

      if (!fileType) {
        throwFileTypeNotIdentified();
      }

      this.fileType = fileType;
      this.fileTypeConfig = this.options.fileTypeConfig || Docxtemplater.FileTypeConfig[this.fileType];
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      this.compile();
      this.setModules({
        data: this.data
      });
      this.mapper = this.modules.reduce(function (value, module) {
        return module.getRenderedMap(value);
      }, {});
      this.fileTypeConfig.tagsXmlLexedArray = unique(this.fileTypeConfig.tagsXmlLexedArray);
      this.fileTypeConfig.tagsXmlTextArray = unique(this.fileTypeConfig.tagsXmlTextArray);
      Object.keys(this.mapper).forEach(function (to) {
        var _this4$mapper$to = _this4.mapper[to],
            from = _this4$mapper$to.from,
            data = _this4$mapper$to.data;
        var currentFile = _this4.compiled[from];
        currentFile.setTags(data);
        currentFile.render(to);

        _this4.zip.file(to, currentFile.content, {
          createFolders: true
        });
      });
      this.sendEvent("syncing-zip");
      this.syncZip();
      return this;
    }
  }, {
    key: "syncZip",
    value: function syncZip() {
      var _this5 = this;

      Object.keys(this.xmlDocuments).forEach(function (fileName) {
        _this5.zip.remove(fileName);

        var content = xml2str(_this5.xmlDocuments[fileName]);
        return _this5.zip.file(fileName, content, {
          createFolders: true
        });
      });
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
      return this;
    }
  }, {
    key: "getZip",
    value: function getZip() {
      return this.zip;
    }
  }, {
    key: "createTemplateClass",
    value: function createTemplateClass(path) {
      var usedData = this.zip.files[path].asText();
      return this.createTemplateClassFromContent(usedData, path);
    }
  }, {
    key: "createTemplateClassFromContent",
    value: function createTemplateClassFromContent(content, filePath) {
      var _this6 = this;

      var xmltOptions = {
        filePath: filePath
      };
      Object.keys(defaults).forEach(function (key) {
        xmltOptions[key] = _this6[key];
      });
      xmltOptions.fileTypeConfig = this.fileTypeConfig;
      xmltOptions.modules = this.modules;
      return new Docxtemplater.XmlTemplater(content, xmltOptions);
    }
  }, {
    key: "getFullText",
    value: function getFullText(path) {
      return this.createTemplateClass(path || this.fileTypeConfig.textPath(this.zip)).getFullText();
    }
  }, {
    key: "getTemplatedFiles",
    value: function getTemplatedFiles() {
      this.templatedFiles = this.fileTypeConfig.getTemplatedFiles(this.zip);
      return this.templatedFiles;
    }
  }]);

  return Docxtemplater;
}();

Docxtemplater.DocUtils = DocUtils;
Docxtemplater.Errors = __webpack_require__(/*! ./errors */ "./es6/errors.js");
Docxtemplater.XmlTemplater = __webpack_require__(/*! ./xml-templater */ "./es6/xml-templater.js");
Docxtemplater.FileTypeConfig = __webpack_require__(/*! ./file-type-config */ "./es6/file-type-config.js");
Docxtemplater.XmlMatcher = __webpack_require__(/*! ./xml-matcher */ "./es6/xml-matcher.js");
module.exports = Docxtemplater;

//# sourceURL=webpack://docxtemplater/./es6/docxtemplater.js?`)},"./es6/errors.js":function(module,exports,__webpack_require__){eval(`

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function first(a) {
  return a[0];
}

function last(a) {
  return a[a.length - 1];
}

function XTError(message) {
  this.name = "GenericError";
  this.message = message;
  this.stack = new Error(message).stack;
}

XTError.prototype = Error.prototype;

function XTTemplateError(message) {
  this.name = "TemplateError";
  this.message = message;
  this.stack = new Error(message).stack;
}

XTTemplateError.prototype = new XTError();

function RenderingError(message) {
  this.name = "RenderingError";
  this.message = message;
  this.stack = new Error(message).stack;
}

RenderingError.prototype = new XTError();

function XTScopeParserError(message) {
  this.name = "ScopeParserError";
  this.message = message;
  this.stack = new Error(message).stack;
}

XTScopeParserError.prototype = new XTError();

function XTInternalError(message) {
  this.name = "InternalError";
  this.properties = {
    explanation: "InternalError"
  };
  this.message = message;
  this.stack = new Error(message).stack;
}

XTInternalError.prototype = new XTError();

function XTAPIVersionError(message) {
  this.name = "APIVersionError";
  this.properties = {
    explanation: "APIVersionError"
  };
  this.message = message;
  this.stack = new Error(message).stack;
}

XTAPIVersionError.prototype = new XTError();

function throwApiVersionError(msg, properties) {
  var err = new XTAPIVersionError(msg);
  err.properties = _objectSpread({
    id: "api_version_error"
  }, properties);
  throw err;
}

function throwMultiError(errors) {
  var err = new XTTemplateError("Multi error");
  err.properties = {
    errors: errors,
    id: "multi_error",
    explanation: "The template has multiple errors"
  };
  throw err;
}

function getUnopenedTagException(options) {
  var err = new XTTemplateError("Unopened tag");
  err.properties = {
    xtag: last(options.xtag.split(" ")),
    id: "unopened_tag",
    context: options.xtag,
    offset: options.offset,
    lIndex: options.lIndex,
    explanation: "The tag beginning with \\"".concat(options.xtag.substr(0, 10), "\\" is unopened")
  };
  return err;
}

function getUnclosedTagException(options) {
  var err = new XTTemplateError("Unclosed tag");
  err.properties = {
    xtag: first(options.xtag.split(" ")).substr(1),
    id: "unclosed_tag",
    context: options.xtag,
    offset: options.offset,
    lIndex: options.lIndex,
    explanation: "The tag beginning with \\"".concat(options.xtag.substr(0, 10), "\\" is unclosed")
  };
  return err;
}

function throwXmlTagNotFound(options) {
  var err = new XTTemplateError("No tag \\"".concat(options.element, "\\" was found at the ").concat(options.position));
  err.properties = {
    id: "no_xml_tag_found_at_".concat(options.position),
    explanation: "No tag \\"".concat(options.element, "\\" was found at the ").concat(options.position),
    part: options.parsed[options.index],
    parsed: options.parsed,
    index: options.index,
    element: options.element
  };
  throw err;
}

function throwCorruptCharacters(_ref) {
  var tag = _ref.tag,
      value = _ref.value;
  var err = new RenderingError("There are some XML corrupt characters");
  err.properties = {
    id: "invalid_xml_characters",
    xtag: tag,
    value: value,
    explanation: "There are some corrupt characters for the field \${tag}"
  };
  throw err;
}

function throwContentMustBeString(type) {
  var err = new XTInternalError("Content must be a string");
  err.properties.id = "xmltemplater_content_must_be_string";
  err.properties.type = type;
  throw err;
}

function throwRawTagNotInParagraph(options) {
  var err = new XTTemplateError("Raw tag not in paragraph");
  var _options$part = options.part,
      value = _options$part.value,
      offset = _options$part.offset;
  err.properties = {
    id: "raw_tag_outerxml_invalid",
    explanation: "The tag \\"".concat(value, "\\" is not inside a paragraph"),
    rootError: options.rootError,
    xtag: value,
    offset: offset,
    postparsed: options.postparsed,
    expandTo: options.expandTo,
    index: options.index
  };
  throw err;
}

function throwRawTagShouldBeOnlyTextInParagraph(options) {
  var err = new XTTemplateError("Raw tag should be the only text in paragraph");
  var tag = options.part.value;
  err.properties = {
    id: "raw_xml_tag_should_be_only_text_in_paragraph",
    explanation: "The raw tag \\"".concat(tag, "\\" should be the only text in this paragraph. This means that this tag should not be surrounded by any text or spaces."),
    xtag: tag,
    offset: options.part.offset,
    paragraphParts: options.paragraphParts
  };
  throw err;
}

function getUnmatchedLoopException(options) {
  var location = options.location;
  var t = location === "start" ? "unclosed" : "unopened";
  var T = location === "start" ? "Unclosed" : "Unopened";
  var err = new XTTemplateError("".concat(T, " loop"));
  var tag = options.part.value;
  err.properties = {
    id: "".concat(t, "_loop"),
    explanation: "The loop with tag \\"".concat(tag, "\\" is ").concat(t),
    xtag: tag
  };
  return err;
}

function getClosingTagNotMatchOpeningTag(options) {
  var tags = options.tags;
  var err = new XTTemplateError("Closing tag does not match opening tag");
  err.properties = {
    id: "closing_tag_does_not_match_opening_tag",
    explanation: "The tag \\"".concat(tags[0].value, "\\" is closed by the tag \\"").concat(tags[1].value, "\\""),
    openingtag: tags[0].value,
    offset: [tags[0].offset, tags[1].offset],
    closingtag: tags[1].value
  };
  return err;
}

function getScopeCompilationError(_ref2) {
  var tag = _ref2.tag,
      rootError = _ref2.rootError;
  var err = new XTScopeParserError("Scope parser compilation failed");
  err.properties = {
    id: "scopeparser_compilation_failed",
    tag: tag,
    explanation: "The scope parser for the tag \\"".concat(tag, "\\" failed to compile"),
    rootError: rootError
  };
  return err;
}

function getScopeParserExecutionError(_ref3) {
  var tag = _ref3.tag,
      scope = _ref3.scope,
      error = _ref3.error;
  var err = new XTScopeParserError("Scope parser execution failed");
  err.properties = {
    id: "scopeparser_execution_failed",
    explanation: "The scope parser for the tag ".concat(tag, " failed to execute"),
    scope: scope,
    tag: tag,
    rootError: error
  };
  return err;
}

function getLoopPositionProducesInvalidXMLError(_ref4) {
  var tag = _ref4.tag;
  var err = new XTTemplateError("The position of the loop tags \\"".concat(tag, "\\" would produce invalid XML"));
  err.properties = {
    tag: tag,
    id: "loop_position_invalid",
    explanation: "The tags \\"".concat(tag, "\\" are misplaced in the document, for example one of them is in a table and the other one outside the table")
  };
  return err;
}

function throwUnimplementedTagType(part) {
  var err = new XTTemplateError("Unimplemented tag type \\"".concat(part.type, "\\""));
  err.properties = {
    part: part,
    id: "unimplemented_tag_type"
  };
  throw err;
}

function throwMalformedXml(part) {
  var err = new XTInternalError("Malformed xml");
  err.properties = {
    part: part,
    id: "malformed_xml"
  };
  throw err;
}

function throwLocationInvalid(part) {
  throw new XTInternalError("Location should be one of \\"start\\" or \\"end\\" (given : ".concat(part.location, ")"));
}

function throwFileTypeNotHandled(fileType) {
  var err = new XTInternalError("The filetype \\"".concat(fileType, "\\" is not handled by docxtemplater"));
  err.properties = {
    id: "filetype_not_handled",
    explanation: "The file you are trying to generate is of type \\"".concat(fileType, "\\", but only docx and pptx formats are handled"),
    fileType: fileType
  };
  throw err;
}

function throwFileTypeNotIdentified() {
  var err = new XTInternalError("The filetype for this file could not be identified, is this file corrupted ?");
  err.properties = {
    id: "filetype_not_identified"
  };
  throw err;
}

function throwXmlInvalid(content, offset) {
  var err = new XTTemplateError("An XML file has invalid xml");
  err.properties = {
    id: "file_has_invalid_xml",
    content: content,
    offset: offset,
    explanation: "The docx contains invalid XML, it is most likely corrupt"
  };
  throw err;
}

module.exports = {
  XTError: XTError,
  XTTemplateError: XTTemplateError,
  XTInternalError: XTInternalError,
  XTScopeParserError: XTScopeParserError,
  XTAPIVersionError: XTAPIVersionError,
  RenderingError: RenderingError,
  getClosingTagNotMatchOpeningTag: getClosingTagNotMatchOpeningTag,
  getLoopPositionProducesInvalidXMLError: getLoopPositionProducesInvalidXMLError,
  getScopeCompilationError: getScopeCompilationError,
  getScopeParserExecutionError: getScopeParserExecutionError,
  getUnclosedTagException: getUnclosedTagException,
  getUnmatchedLoopException: getUnmatchedLoopException,
  getUnopenedTagException: getUnopenedTagException,
  throwApiVersionError: throwApiVersionError,
  throwContentMustBeString: throwContentMustBeString,
  throwCorruptCharacters: throwCorruptCharacters,
  throwFileTypeNotHandled: throwFileTypeNotHandled,
  throwFileTypeNotIdentified: throwFileTypeNotIdentified,
  throwLocationInvalid: throwLocationInvalid,
  throwMalformedXml: throwMalformedXml,
  throwMultiError: throwMultiError,
  throwRawTagNotInParagraph: throwRawTagNotInParagraph,
  throwRawTagShouldBeOnlyTextInParagraph: throwRawTagShouldBeOnlyTextInParagraph,
  throwUnimplementedTagType: throwUnimplementedTagType,
  throwXmlTagNotFound: throwXmlTagNotFound,
  throwXmlInvalid: throwXmlInvalid
};

//# sourceURL=webpack://docxtemplater/./es6/errors.js?`)},"./es6/file-type-config.js":function(module,exports,__webpack_require__){eval(`

var loopModule = __webpack_require__(/*! ./modules/loop */ "./es6/modules/loop.js");

var spacePreserveModule = __webpack_require__(/*! ./modules/space-preserve */ "./es6/modules/space-preserve.js");

var rawXmlModule = __webpack_require__(/*! ./modules/rawxml */ "./es6/modules/rawxml.js");

var expandPairTrait = __webpack_require__(/*! ./modules/expand-pair-trait */ "./es6/modules/expand-pair-trait.js");

var render = __webpack_require__(/*! ./modules/render */ "./es6/modules/render.js");

var PptXFileTypeConfig = {
  getTemplatedFiles: function getTemplatedFiles(zip) {
    var slideTemplates = zip.file(/ppt\\/(slides|slideMasters)\\/(slide|slideMaster)\\d+\\.xml/).map(function (file) {
      return file.name;
    });
    return slideTemplates.concat(["ppt/presentation.xml", "docProps/app.xml", "docProps/core.xml"]);
  },
  textPath: function textPath() {
    return "ppt/slides/slide1.xml";
  },
  tagsXmlTextArray: ["Company", "HyperlinkBase", "Manager", "cp:category", "cp:keywords", "dc:creator", "dc:description", "dc:subject", "dc:title", "a:t", "m:t", "vt:lpstr"],
  tagsXmlLexedArray: ["p:sp", "a:tc", "a:tr", "a:table", "a:p", "a:r", "a:rPr"],
  expandTags: [{
    contains: "a:tc",
    expand: "a:tr"
  }],
  onParagraphLoop: [{
    contains: "a:p",
    expand: "a:p",
    onlyTextInTag: true
  }],
  tagRawXml: "p:sp",
  tagTextXml: "a:t",
  baseModules: [loopModule, expandPairTrait, rawXmlModule, render]
};
var DocXFileTypeConfig = {
  getTemplatedFiles: function getTemplatedFiles(zip) {
    var baseTags = ["docProps/core.xml", "docProps/app.xml", "word/document.xml", "word/document2.xml"];
    var slideTemplates = zip.file(/word\\/(header|footer)\\d+\\.xml/).map(function (file) {
      return file.name;
    });
    return slideTemplates.concat(baseTags);
  },
  textPath: function textPath(zip) {
    if (zip.files["word/document.xml"]) {
      return "word/document.xml";
    }

    if (zip.files["word/document2.xml"]) {
      return "word/document2.xml";
    }
  },
  tagsXmlTextArray: ["Company", "HyperlinkBase", "Manager", "cp:category", "cp:keywords", "dc:creator", "dc:description", "dc:subject", "dc:title", "w:t", "m:t", "vt:lpstr"],
  tagsXmlLexedArray: ["w:tc", "w:tr", "w:table", "w:p", "w:r", "w:rPr", "w:pPr", "w:spacing"],
  expandTags: [{
    contains: "w:tc",
    expand: "w:tr"
  }],
  onParagraphLoop: [{
    contains: "w:p",
    expand: "w:p",
    onlyTextInTag: true
  }],
  tagRawXml: "w:p",
  tagTextXml: "w:t",
  baseModules: [loopModule, spacePreserveModule, expandPairTrait, rawXmlModule, render]
};
module.exports = {
  docx: DocXFileTypeConfig,
  pptx: PptXFileTypeConfig
};

//# sourceURL=webpack://docxtemplater/./es6/file-type-config.js?`)},"./es6/lexer.js":function(module,exports,__webpack_require__){eval(`function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = __webpack_require__(/*! ./errors */ "./es6/errors.js"),
    getUnclosedTagException = _require.getUnclosedTagException,
    getUnopenedTagException = _require.getUnopenedTagException,
    throwMalformedXml = _require.throwMalformedXml,
    throwXmlInvalid = _require.throwXmlInvalid;

var _require2 = __webpack_require__(/*! ./doc-utils */ "./es6/doc-utils.js"),
    concatArrays = _require2.concatArrays,
    isTextStart = _require2.isTextStart,
    isTextEnd = _require2.isTextEnd;

var EQUAL = 0;
var START = -1;
var END = 1;

function inRange(range, match) {
  return range[0] <= match.offset && match.offset < range[1];
}

function updateInTextTag(part, inTextTag) {
  if (isTextStart(part)) {
    if (inTextTag) {
      throwMalformedXml(part);
    }

    return true;
  }

  if (isTextEnd(part)) {
    if (!inTextTag) {
      throwMalformedXml(part);
    }

    return false;
  }

  return inTextTag;
}

function getTag(tag) {
  var position = "start";
  var start = 1;

  if (tag[tag.length - 2] === "/") {
    position = "selfclosing";
  }

  if (tag[1] === "/") {
    start = 2;
    position = "end";
  }

  var index = tag.indexOf(" ");
  var end = index === -1 ? tag.length - 1 : index;
  return {
    tag: tag.slice(start, end),
    position: position
  };
}

function tagMatcher(content, textMatchArray, othersMatchArray) {
  var cursor = 0;
  var contentLength = content.length;
  var allMatches = concatArrays([textMatchArray.map(function (tag) {
    return {
      tag: tag,
      text: true
    };
  }), othersMatchArray.map(function (tag) {
    return {
      tag: tag,
      text: false
    };
  })]).reduce(function (allMatches, t) {
    allMatches[t.tag] = t.text;
    return allMatches;
  }, {});
  var totalMatches = [];

  while (cursor < contentLength) {
    cursor = content.indexOf("<", cursor);

    if (cursor === -1) {
      break;
    }

    var offset = cursor;
    var nextOpening = content.indexOf("<", cursor + 1);
    cursor = content.indexOf(">", cursor);

    if (cursor === -1 || nextOpening !== -1 && cursor > nextOpening) {
      throwXmlInvalid(content, offset);
    }

    var tagText = content.slice(offset, cursor + 1);

    var _getTag = getTag(tagText),
        tag = _getTag.tag,
        position = _getTag.position;

    var text = allMatches[tag];

    if (text == null) {
      continue;
    }

    totalMatches.push({
      type: "tag",
      position: position,
      text: text,
      offset: offset,
      value: tagText,
      tag: tag
    });
  }

  return totalMatches;
}

function getDelimiterErrors(delimiterMatches, fullText, ranges) {
  if (delimiterMatches.length === 0) {
    return [];
  }

  var errors = [];
  var inDelimiter = false;
  var lastDelimiterMatch = {
    offset: 0
  };
  var xtag;
  var rangeIndex = 0;
  delimiterMatches.forEach(function (delimiterMatch) {
    while (ranges[rangeIndex + 1]) {
      if (ranges[rangeIndex + 1].offset > delimiterMatch.offset) {
        break;
      }

      rangeIndex++;
    }

    xtag = fullText.substr(lastDelimiterMatch.offset, delimiterMatch.offset - lastDelimiterMatch.offset);

    if (delimiterMatch.position === "start" && inDelimiter || delimiterMatch.position === "end" && !inDelimiter) {
      if (delimiterMatch.position === "start") {
        errors.push(getUnclosedTagException({
          xtag: xtag,
          offset: lastDelimiterMatch.offset
        }));
        delimiterMatch.error = true;
      } else {
        errors.push(getUnopenedTagException({
          xtag: xtag,
          offset: delimiterMatch.offset
        }));
        delimiterMatch.error = true;
      }
    } else {
      inDelimiter = !inDelimiter;
    }

    lastDelimiterMatch = delimiterMatch;
  });
  var delimiterMatch = {
    offset: fullText.length
  };
  xtag = fullText.substr(lastDelimiterMatch.offset, delimiterMatch.offset - lastDelimiterMatch.offset);

  if (inDelimiter) {
    errors.push(getUnclosedTagException({
      xtag: xtag,
      offset: lastDelimiterMatch.offset
    }));
    delimiterMatch.error = true;
  }

  return errors;
}

function compareOffsets(startOffset, endOffset) {
  if (startOffset === endOffset) {
    return EQUAL;
  }

  if (startOffset === -1 || endOffset === -1) {
    return endOffset < startOffset ? START : END;
  }

  return startOffset < endOffset ? START : END;
}

function splitDelimiters(inside) {
  var newDelimiters = inside.split(" ");

  if (newDelimiters.length !== 2) {
    throw new Error("New Delimiters cannot be parsed");
  }

  var _newDelimiters = _slicedToArray(newDelimiters, 2),
      start = _newDelimiters[0],
      end = _newDelimiters[1];

  if (start.length === 0 || end.length === 0) {
    throw new Error("New Delimiters cannot be parsed");
  }

  return [start, end];
}

function getAllIndexes(fullText, delimiters) {
  var indexes = [];
  var start = delimiters.start,
      end = delimiters.end;
  var offset = -1;

  while (true) {
    var startOffset = fullText.indexOf(start, offset + 1);
    var endOffset = fullText.indexOf(end, offset + 1);
    var position = null;
    var len = void 0;
    var compareResult = compareOffsets(startOffset, endOffset);

    if (compareResult === EQUAL) {
      return indexes;
    }

    if (compareResult === END) {
      offset = endOffset;
      position = "end";
      len = end.length;
    }

    if (compareResult === START) {
      offset = startOffset;
      position = "start";
      len = start.length;
    }

    if (position === "start" && fullText[offset + start.length] === "=") {
      indexes.push({
        offset: startOffset,
        position: "start",
        length: start.length,
        changedelimiter: true
      });
      var nextEqual = fullText.indexOf("=", offset + start.length + 1);

      var _endOffset = fullText.indexOf(end, nextEqual + 1);

      indexes.push({
        offset: _endOffset,
        position: "end",
        length: end.length,
        changedelimiter: true
      });
      var insideTag = fullText.substr(offset + start.length + 1, nextEqual - offset - start.length - 1);

      var _splitDelimiters = splitDelimiters(insideTag);

      var _splitDelimiters2 = _slicedToArray(_splitDelimiters, 2);

      start = _splitDelimiters2[0];
      end = _splitDelimiters2[1];
      offset = _endOffset;
      continue;
    }

    indexes.push({
      offset: offset,
      position: position,
      length: len
    });
  }
}

function Reader(innerContentParts) {
  var _this = this;

  this.innerContentParts = innerContentParts;
  this.full = "";

  this.parseDelimiters = function (delimiters) {
    _this.full = _this.innerContentParts.map(function (p) {
      return p.value;
    }).join("");
    var delimiterMatches = getAllIndexes(_this.full, delimiters);
    var offset = 0;

    var ranges = _this.innerContentParts.map(function (part) {
      offset += part.value.length;
      return {
        offset: offset - part.value.length,
        lIndex: part.lIndex
      };
    });

    var errors = getDelimiterErrors(delimiterMatches, _this.full, ranges);
    var cutNext = 0;
    var delimiterIndex = 0;
    _this.parsed = ranges.map(function (p, i) {
      var offset = p.offset;
      var range = [offset, offset + this.innerContentParts[i].value.length];
      var partContent = this.innerContentParts[i].value;
      var delimitersInOffset = [];

      while (delimiterIndex < delimiterMatches.length && inRange(range, delimiterMatches[delimiterIndex])) {
        delimitersInOffset.push(delimiterMatches[delimiterIndex]);
        delimiterIndex++;
      }

      var parts = [];
      var cursor = 0;

      if (cutNext > 0) {
        cursor = cutNext;
        cutNext = 0;
      }

      var insideDelimiterChange;
      delimitersInOffset.forEach(function (delimiterInOffset) {
        var value = partContent.substr(cursor, delimiterInOffset.offset - offset - cursor);

        if (value.length > 0) {
          if (insideDelimiterChange) {
            if (delimiterInOffset.changedelimiter) {
              cursor = delimiterInOffset.offset - offset + delimiterInOffset.length;
              insideDelimiterChange = delimiterInOffset.position === "start";
            }

            return;
          }

          parts.push({
            type: "content",
            value: value,
            offset: cursor + offset
          });
          cursor += value.length;
        }

        var delimiterPart = {
          type: "delimiter",
          position: delimiterInOffset.position,
          offset: cursor + offset
        };

        if (delimiterInOffset.error) {
          delimiterPart.error = delimiterInOffset.error;
        }

        if (delimiterInOffset.changedelimiter) {
          insideDelimiterChange = delimiterInOffset.position === "start";
          cursor = delimiterInOffset.offset - offset + delimiterInOffset.length;
          return;
        }

        parts.push(delimiterPart);
        cursor = delimiterInOffset.offset - offset + delimiterInOffset.length;
      });
      cutNext = cursor - partContent.length;
      var value = partContent.substr(cursor);

      if (value.length > 0) {
        parts.push({
          type: "content",
          value: value,
          offset: offset
        });
      }

      return parts;
    }, _this);
    _this.errors = errors;
  };
}

function getContentParts(xmlparsed) {
  var inTextTag = false;
  var innerContentParts = [];
  xmlparsed.forEach(function (part) {
    inTextTag = updateInTextTag(part, inTextTag);

    if (inTextTag && part.type === "content") {
      innerContentParts.push(part);
    }
  });
  return innerContentParts;
}

module.exports = {
  parse: function parse(xmlparsed, delimiters) {
    var inTextTag = false;
    var reader = new Reader(getContentParts(xmlparsed));
    reader.parseDelimiters(delimiters);
    var lexed = [];
    var index = 0;
    xmlparsed.forEach(function (part) {
      inTextTag = updateInTextTag(part, inTextTag);

      if (part.type === "content") {
        part.position = inTextTag ? "insidetag" : "outsidetag";
      }

      if (inTextTag && part.type === "content") {
        Array.prototype.push.apply(lexed, reader.parsed[index].map(function (p) {
          if (p.type === "content") {
            p.position = "insidetag";
          }

          return p;
        }));
        index++;
      } else {
        lexed.push(part);
      }
    });
    lexed = lexed.map(function (p, i) {
      p.lIndex = i;
      return p;
    });
    return {
      errors: reader.errors,
      lexed: lexed
    };
  },
  xmlparse: function xmlparse(content, xmltags) {
    var matches = tagMatcher(content, xmltags.text, xmltags.other);
    var cursor = 0;
    var parsed = matches.reduce(function (parsed, match) {
      var value = content.substr(cursor, match.offset - cursor);

      if (value.length > 0) {
        parsed.push({
          type: "content",
          value: value
        });
      }

      cursor = match.offset + match.value.length;
      delete match.offset;

      if (match.value.length > 0) {
        parsed.push(match);
      }

      return parsed;
    }, []);
    var value = content.substr(cursor);

    if (value.length > 0) {
      parsed.push({
        type: "content",
        value: value
      });
    }

    return parsed;
  }
};

//# sourceURL=webpack://docxtemplater/./es6/lexer.js?`)},"./es6/mergesort.js":function(module,exports){eval(`function getMinFromArrays(arrays, state) {
  var minIndex = -1;

  for (var i = 0, l = arrays.length; i < l; i++) {
    if (state[i] >= arrays[i].length) {
      continue;
    }

    if (minIndex === -1 || arrays[i][state[i]].offset < arrays[minIndex][state[minIndex]].offset) {
      minIndex = i;
    }
  }

  if (minIndex === -1) {
    throw new Error("minIndex negative");
  }

  return minIndex;
}

module.exports = function (arrays) {
  var totalLength = arrays.reduce(function (sum, array) {
    return sum + array.length;
  }, 0);
  arrays = arrays.filter(function (array) {
    return array.length > 0;
  });
  var resultArray = new Array(totalLength);
  var state = arrays.map(function () {
    return 0;
  });
  var i = 0;

  while (i <= totalLength - 1) {
    var arrayIndex = getMinFromArrays(arrays, state);
    resultArray[i] = arrays[arrayIndex][state[arrayIndex]];
    state[arrayIndex]++;
    i++;
  }

  return resultArray;
};

//# sourceURL=webpack://docxtemplater/./es6/mergesort.js?`)},"./es6/module-wrapper.js":function(module,exports){eval(`function emptyFun() {}

function identity(i) {
  return i;
}

module.exports = function (module) {
  var defaults = {
    set: emptyFun,
    parse: emptyFun,
    render: emptyFun,
    getTraits: emptyFun,
    nullGetter: emptyFun,
    optionsTransformer: identity,
    postrender: identity,
    errorsTransformer: identity,
    getRenderedMap: identity,
    postparse: identity,
    on: emptyFun,
    resolve: emptyFun
  };

  if (Object.keys(defaults).every(function (key) {
    return !module[key];
  })) {
    throw new Error("This module cannot be wrapped, because it doesn't define any of the necessary functions");
  }

  Object.keys(defaults).forEach(function (key) {
    module[key] = module[key] || defaults[key];
  });
  return module;
};

//# sourceURL=webpack://docxtemplater/./es6/module-wrapper.js?`)},"./es6/modules/expand-pair-trait.js":function(module,exports,__webpack_require__){eval(`function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var traitName = "expandPair";

var mergeSort = __webpack_require__(/*! ../mergesort */ "./es6/mergesort.js");

var _require = __webpack_require__(/*! ../doc-utils */ "./es6/doc-utils.js"),
    getLeft = _require.getLeft,
    getRight = _require.getRight;

var wrapper = __webpack_require__(/*! ../module-wrapper */ "./es6/module-wrapper.js");

var _require2 = __webpack_require__(/*! ../traits */ "./es6/traits.js"),
    getExpandToDefault = _require2.getExpandToDefault;

var _require3 = __webpack_require__(/*! ../errors */ "./es6/errors.js"),
    getUnmatchedLoopException = _require3.getUnmatchedLoopException,
    getClosingTagNotMatchOpeningTag = _require3.getClosingTagNotMatchOpeningTag,
    throwLocationInvalid = _require3.throwLocationInvalid;

function getOpenCountChange(part) {
  switch (part.location) {
    case "start":
      return 1;

    case "end":
      return -1;

    default:
      throwLocationInvalid(part);
  }
}

function getPairs(traits) {
  var errors = [];
  var pairs = [];

  if (traits.length === 0) {
    return {
      pairs: pairs,
      errors: errors
    };
  }

  var countOpen = 1;

  var _traits = _slicedToArray(traits, 1),
      firstTrait = _traits[0];

  if (firstTrait.part.location === "start") {
    for (var i = 1; i < traits.length; i++) {
      var currentTrait = traits[i];
      countOpen += getOpenCountChange(currentTrait.part);

      if (countOpen === 0) {
        var _outer = getPairs(traits.slice(i + 1));

        if (currentTrait.part.value !== firstTrait.part.value && currentTrait.part.value !== "") {
          errors.push(getClosingTagNotMatchOpeningTag({
            tags: [firstTrait.part, currentTrait.part]
          }));
        } else {
          pairs = [[firstTrait, currentTrait]];
        }

        return {
          pairs: pairs.concat(_outer.pairs),
          errors: errors.concat(_outer.errors)
        };
      }
    }
  }

  var part = firstTrait.part;
  errors.push(getUnmatchedLoopException({
    part: part,
    location: part.location
  }));
  var outer = getPairs(traits.slice(1));
  return {
    pairs: outer.pairs,
    errors: errors.concat(outer.errors)
  };
}

var expandPairTrait = {
  name: "ExpandPairTrait",
  optionsTransformer: function optionsTransformer(options, docxtemplater) {
    this.expandTags = docxtemplater.fileTypeConfig.expandTags.concat(docxtemplater.options.paragraphLoop ? docxtemplater.fileTypeConfig.onParagraphLoop : []);
    return options;
  },
  postparse: function postparse(postparsed, _ref) {
    var _this = this;

    var getTraits = _ref.getTraits,
        _postparse = _ref.postparse;
    var traits = getTraits(traitName, postparsed);
    traits = traits.map(function (trait) {
      return trait || [];
    });
    traits = mergeSort(traits);

    var _getPairs = getPairs(traits),
        pairs = _getPairs.pairs,
        errors = _getPairs.errors;

    var expandedPairs = pairs.map(function (pair) {
      var expandTo = pair[0].part.expandTo;

      if (expandTo === "auto") {
        var result = getExpandToDefault(postparsed, pair, _this.expandTags);

        if (result.error) {
          errors.push(result.error);
        }

        expandTo = result.value;
      }

      if (!expandTo) {
        return [pair[0].offset, pair[1].offset];
      }

      var left = getLeft(postparsed, expandTo, pair[0].offset);
      var right = getRight(postparsed, expandTo, pair[1].offset);
      return [left, right];
    });
    var currentPairIndex = 0;
    var innerParts;
    var newParsed = postparsed.reduce(function (newParsed, part, i) {
      var inPair = currentPairIndex < pairs.length && expandedPairs[currentPairIndex][0] <= i;
      var pair = pairs[currentPairIndex];
      var expandedPair = expandedPairs[currentPairIndex];

      if (!inPair) {
        newParsed.push(part);
        return newParsed;
      }

      if (expandedPair[0] === i) {
        innerParts = [];
      }

      if (pair[0].offset !== i && pair[1].offset !== i) {
        innerParts.push(part);
      }

      if (expandedPair[1] === i) {
        var basePart = postparsed[pair[0].offset];
        basePart.subparsed = _postparse(innerParts, {
          basePart: basePart
        });
        delete basePart.location;
        delete basePart.expandTo;
        newParsed.push(basePart);
        currentPairIndex++;
      }

      return newParsed;
    }, []);
    return {
      postparsed: newParsed,
      errors: errors
    };
  }
};

module.exports = function () {
  return wrapper(expandPairTrait);
};

//# sourceURL=webpack://docxtemplater/./es6/modules/expand-pair-trait.js?`)},"./es6/modules/loop.js":function(module,exports,__webpack_require__){eval(`function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! ../doc-utils */ "./es6/doc-utils.js"),
    mergeObjects = _require.mergeObjects,
    chunkBy = _require.chunkBy,
    last = _require.last,
    isParagraphStart = _require.isParagraphStart,
    isParagraphEnd = _require.isParagraphEnd,
    isContent = _require.isContent;

var wrapper = __webpack_require__(/*! ../module-wrapper */ "./es6/module-wrapper.js");

var _require2 = __webpack_require__(/*! ../prefix-matcher */ "./es6/prefix-matcher.js"),
    match = _require2.match,
    getValue = _require2.getValue,
    getValues = _require2.getValues;

var moduleName = "loop";

function hasContent(parts) {
  return parts.some(function (part) {
    return isContent(part);
  });
}

function isEnclosedByParagraphs(parsed) {
  if (parsed.length === 0) {
    return false;
  }

  return isParagraphStart(parsed[0]) && isParagraphEnd(last(parsed));
}

function getOffset(chunk) {
  return hasContent(chunk) ? 0 : chunk.length;
}

var LoopModule =
/*#__PURE__*/
function () {
  function LoopModule() {
    _classCallCheck(this, LoopModule);

    this.name = "LoopModule";
    this.prefix = {
      start: "#",
      end: "/",
      dash: /^-([^\\s]+)\\s(.+)$/,
      inverted: "^"
    };
  }

  _createClass(LoopModule, [{
    key: "parse",
    value: function parse(placeHolderContent) {
      var module = moduleName;
      var type = "placeholder";
      var _this$prefix = this.prefix,
          start = _this$prefix.start,
          inverted = _this$prefix.inverted,
          dash = _this$prefix.dash,
          end = _this$prefix.end;

      if (match(start, placeHolderContent)) {
        return {
          type: type,
          value: getValue(start, placeHolderContent),
          expandTo: "auto",
          module: module,
          location: "start",
          inverted: false
        };
      }

      if (match(inverted, placeHolderContent)) {
        return {
          type: type,
          value: getValue(inverted, placeHolderContent),
          expandTo: "auto",
          module: module,
          location: "start",
          inverted: true
        };
      }

      if (match(end, placeHolderContent)) {
        return {
          type: type,
          value: getValue(end, placeHolderContent),
          module: module,
          location: "end"
        };
      }

      if (match(dash, placeHolderContent)) {
        var _getValues = getValues(dash, placeHolderContent),
            _getValues2 = _slicedToArray(_getValues, 3),
            expandTo = _getValues2[1],
            value = _getValues2[2];

        return {
          type: type,
          value: value,
          expandTo: expandTo,
          module: module,
          location: "start",
          inverted: false
        };
      }

      return null;
    }
  }, {
    key: "getTraits",
    value: function getTraits(traitName, parsed) {
      if (traitName !== "expandPair") {
        return;
      }

      return parsed.reduce(function (tags, part, offset) {
        if (part.type === "placeholder" && part.module === moduleName) {
          tags.push({
            part: part,
            offset: offset
          });
        }

        return tags;
      }, []);
    }
  }, {
    key: "postparse",
    value: function postparse(parsed, _ref) {
      var basePart = _ref.basePart;

      if (!isEnclosedByParagraphs(parsed)) {
        return parsed;
      }

      if (!basePart || basePart.expandTo !== "auto" || basePart.module !== moduleName) {
        return parsed;
      }

      var chunks = chunkBy(parsed, function (p) {
        if (isParagraphStart(p)) {
          return "start";
        }

        if (isParagraphEnd(p)) {
          return "end";
        }

        return null;
      });

      if (chunks.length <= 2) {
        return parsed;
      }

      var firstChunk = chunks[0];
      var lastChunk = last(chunks);
      var firstOffset = getOffset(firstChunk);
      var lastOffset = getOffset(lastChunk);

      if (firstOffset === 0 || lastOffset === 0) {
        return parsed;
      }

      return parsed.slice(firstOffset, parsed.length - lastOffset);
    }
  }, {
    key: "render",
    value: function render(part, options) {
      if (!part.type === "placeholder" || part.module !== moduleName) {
        return null;
      }

      var totalValue = [];
      var errors = [];

      function loopOver(scope, i) {
        var scopeManager = options.scopeManager.createSubScopeManager(scope, part.value, i, part);
        var subRendered = options.render(mergeObjects({}, options, {
          compiled: part.subparsed,
          tags: {},
          scopeManager: scopeManager
        }));
        totalValue = totalValue.concat(subRendered.parts);
        errors = errors.concat(subRendered.errors || []);
      }

      options.scopeManager.loopOver(part.value, loopOver, part.inverted, {
        part: part
      });
      return {
        value: totalValue.join(""),
        errors: errors
      };
    }
  }, {
    key: "resolve",
    value: function resolve(part, options) {
      if (!part.type === "placeholder" || part.module !== moduleName) {
        return null;
      }

      var value = options.scopeManager.getValue(part.value, {
        part: part
      });
      var promises = [];

      function loopOver(scope, i) {
        var scopeManager = options.scopeManager.createSubScopeManager(scope, part.value, i, part);
        promises.push(options.resolve(mergeObjects(options, {
          compiled: part.subparsed,
          tags: {},
          scopeManager: scopeManager
        })));
      }

      return Promise.resolve(value).then(function (value) {
        options.scopeManager.loopOverValue(value, loopOver, part.inverted);
        return Promise.all(promises).then(function (r) {
          return r.map(function (_ref2) {
            var resolved = _ref2.resolved;
            return resolved;
          });
        });
      }).then(function (r) {
        return r;
      });
    }
  }]);

  return LoopModule;
}();

module.exports = function () {
  return wrapper(new LoopModule());
};

//# sourceURL=webpack://docxtemplater/./es6/modules/loop.js?`)},"./es6/modules/rawxml.js":function(module,exports,__webpack_require__){eval(`function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var traits = __webpack_require__(/*! ../traits */ "./es6/traits.js");

var _require = __webpack_require__(/*! ../doc-utils */ "./es6/doc-utils.js"),
    isContent = _require.isContent;

var _require2 = __webpack_require__(/*! ../errors */ "./es6/errors.js"),
    throwRawTagShouldBeOnlyTextInParagraph = _require2.throwRawTagShouldBeOnlyTextInParagraph;

var _require3 = __webpack_require__(/*! ../prefix-matcher */ "./es6/prefix-matcher.js"),
    match = _require3.match,
    getValue = _require3.getValue;

var moduleName = "rawxml";

var wrapper = __webpack_require__(/*! ../module-wrapper */ "./es6/module-wrapper.js");

function getNearestLeft(parsed, elements, index) {
  for (var i = index; i >= 0; i--) {
    var part = parsed[i];

    for (var j = 0, len = elements.length; j < len; j++) {
      var element = elements[j];

      if (part.value.indexOf("<" + element) === 0 && [">", " "].indexOf(part.value[element.length + 1]) !== -1) {
        return elements[j];
      }
    }
  }

  return null;
}

function getNearestRight(parsed, elements, index) {
  for (var i = index, l = parsed.length; i < l; i++) {
    var part = parsed[i];

    for (var j = 0, len = elements.length; j < len; j++) {
      var element = elements[j];

      if (part.value === "</" + element + ">") {
        return elements[j];
      }
    }
  }

  return -1;
}

function getInner(_ref) {
  var part = _ref.part,
      left = _ref.left,
      right = _ref.right,
      postparsed = _ref.postparsed,
      index = _ref.index;
  var before = getNearestLeft(postparsed, ["w:p", "w:tc"], left - 1);
  var after = getNearestRight(postparsed, ["w:p", "w:tc"], right + 1);

  if (after === "w:tc" && before === "w:tc") {
    part.emptyValue = "<w:p></w:p>";
  }

  var paragraphParts = postparsed.slice(left + 1, right);
  paragraphParts.forEach(function (p, i) {
    if (i === index - left - 1) {
      return;
    }

    if (isContent(p)) {
      throwRawTagShouldBeOnlyTextInParagraph({
        paragraphParts: paragraphParts,
        part: part
      });
    }
  });
  return part;
}

var RawXmlModule =
/*#__PURE__*/
function () {
  function RawXmlModule() {
    _classCallCheck(this, RawXmlModule);

    this.name = "RawXmlModule";
    this.prefix = "@";
  }

  _createClass(RawXmlModule, [{
    key: "optionsTransformer",
    value: function optionsTransformer(options, docxtemplater) {
      this.fileTypeConfig = docxtemplater.fileTypeConfig;
      return options;
    }
  }, {
    key: "parse",
    value: function parse(placeHolderContent) {
      var type = "placeholder";

      if (match(this.prefix, placeHolderContent)) {
        return {
          type: type,
          value: getValue(this.prefix, placeHolderContent),
          module: moduleName
        };
      }

      return null;
    }
  }, {
    key: "postparse",
    value: function postparse(postparsed) {
      return traits.expandToOne(postparsed, {
        moduleName: moduleName,
        getInner: getInner,
        expandTo: this.fileTypeConfig.tagRawXml
      });
    }
  }, {
    key: "render",
    value: function render(part, options) {
      if (part.module !== moduleName) {
        return null;
      }

      var value = options.scopeManager.getValue(part.value, {
        part: part
      });

      if (value == null) {
        value = options.nullGetter(part);
      }

      if (!value) {
        return {
          value: part.emptyValue || ""
        };
      }

      return {
        value: value
      };
    }
  }, {
    key: "resolve",
    value: function resolve(part, options) {
      if (!part.type === "placeholder" || part.module !== moduleName) {
        return null;
      }

      return options.scopeManager.getValueAsync(part.value, {
        part: part
      }).then(function (value) {
        if (value == null) {
          return options.nullGetter(part);
        }

        return value;
      });
    }
  }]);

  return RawXmlModule;
}();

module.exports = function () {
  return wrapper(new RawXmlModule());
};

//# sourceURL=webpack://docxtemplater/./es6/modules/rawxml.js?`)},"./es6/modules/render.js":function(module,exports,__webpack_require__){eval(`function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var wrapper = __webpack_require__(/*! ../module-wrapper */ "./es6/module-wrapper.js");

var _require = __webpack_require__(/*! ../errors */ "./es6/errors.js"),
    getScopeCompilationError = _require.getScopeCompilationError;

var _require2 = __webpack_require__(/*! ../doc-utils */ "./es6/doc-utils.js"),
    utf8ToWord = _require2.utf8ToWord,
    hasCorruptCharacters = _require2.hasCorruptCharacters;

var _require3 = __webpack_require__(/*! ../errors */ "./es6/errors.js"),
    throwCorruptCharacters = _require3.throwCorruptCharacters;

var ftprefix = {
  docx: "w",
  pptx: "a"
};

var Render =
/*#__PURE__*/
function () {
  function Render() {
    _classCallCheck(this, Render);

    this.name = "Render";
    this.recordRun = false;
    this.recordedRun = [];
  }

  _createClass(Render, [{
    key: "set",
    value: function set(obj) {
      if (obj.compiled) {
        this.compiled = obj.compiled;
      }

      if (obj.data != null) {
        this.data = obj.data;
      }
    }
  }, {
    key: "getRenderedMap",
    value: function getRenderedMap(mapper) {
      var _this = this;

      return Object.keys(this.compiled).reduce(function (mapper, from) {
        mapper[from] = {
          from: from,
          data: _this.data
        };
        return mapper;
      }, mapper);
    }
  }, {
    key: "optionsTransformer",
    value: function optionsTransformer(options, docxtemplater) {
      this.parser = docxtemplater.parser;
      this.fileType = docxtemplater.fileType;
      return options;
    }
  }, {
    key: "postparse",
    value: function postparse(postparsed) {
      var _this2 = this;

      var errors = [];
      postparsed.forEach(function (p) {
        if (p.type === "placeholder") {
          var tag = p.value;

          try {
            _this2.parser(tag, {
              tag: p
            });
          } catch (rootError) {
            errors.push(getScopeCompilationError({
              tag: tag,
              rootError: rootError
            }));
          }
        }
      });
      return {
        postparsed: postparsed,
        errors: errors
      };
    }
  }, {
    key: "recordRuns",
    value: function recordRuns(part) {
      if (part.tag === "".concat(ftprefix[this.fileType], ":r")) {
        this.recordRun = false;
        this.recordedRun = [];
      } else if (part.tag === "".concat(ftprefix[this.fileType], ":rPr")) {
        if (part.position === "start") {
          this.recordRun = true;
          this.recordedRun = [part.value];
        }

        if (part.position === "end") {
          this.recordedRun.push(part.value);
          this.recordRun = false;
        }
      } else if (this.recordRun) {
        this.recordedRun.push(part.value);
      }
    }
  }, {
    key: "render",
    value: function render(part, _ref) {
      var scopeManager = _ref.scopeManager,
          linebreaks = _ref.linebreaks,
          nullGetter = _ref.nullGetter;

      if (linebreaks) {
        this.recordRuns(part);
      }

      if (part.type === "placeholder" && !part.module) {
        var value = scopeManager.getValue(part.value, {
          part: part
        });

        if (value == null) {
          value = nullGetter(part);
        }

        if (hasCorruptCharacters(value)) {
          throwCorruptCharacters({
            tag: part.value,
            value: value
          });
        }

        if (typeof value !== "string") {
          value = value.toString();
        }

        if (linebreaks) {
          var p = ftprefix[this.fileType];
          var br = this.fileType === "docx" ? "<w:r><w:br/></w:r>" : "<a:br/>";
          var lines = value.split("\\n");
          var runprops = this.recordedRun.join("");
          return {
            value: lines.map(function (line) {
              return utf8ToWord(line);
            }).join("</".concat(p, ":t></").concat(p, ":r>").concat(br, "<").concat(p, ":r>").concat(runprops, "<").concat(p, ":t>"))
          };
        }

        return {
          value: utf8ToWord(value)
        };
      }
    }
  }]);

  return Render;
}();

module.exports = function () {
  return wrapper(new Render());
};

//# sourceURL=webpack://docxtemplater/./es6/modules/render.js?`)},"./es6/modules/space-preserve.js":function(module,exports,__webpack_require__){eval(`var wrapper = __webpack_require__(/*! ../module-wrapper */ "./es6/module-wrapper.js");

var _require = __webpack_require__(/*! ../doc-utils */ "./es6/doc-utils.js"),
    isTextStart = _require.isTextStart,
    isTextEnd = _require.isTextEnd,
    endsWith = _require.endsWith,
    startsWith = _require.startsWith;

var wTpreserve = '<w:t xml:space="preserve">';
var wTpreservelen = wTpreserve.length;
var wtEnd = "</w:t>";
var wtEndlen = wtEnd.length;

function isWtStart(part) {
  return isTextStart(part) && part.tag === "w:t";
}

function addXMLPreserve(chunk, index) {
  var tag = chunk[index].value;

  if (chunk[index + 1].value === "</w:t>") {
    return tag;
  }

  if (tag.indexOf('xml:space="preserve"') !== -1) {
    return tag;
  }

  return tag.substr(0, tag.length - 1) + ' xml:space="preserve">';
}

function isInsideLoop(meta, chunk) {
  return meta && meta.basePart && chunk.length > 1;
}

var spacePreserve = {
  name: "SpacePreserveModule",
  postparse: function postparse(postparsed, meta) {
    var chunk = [],
        inTextTag = false,
        endLindex = 0,
        lastTextTag = 0;

    function isStartingPlaceHolder(part, chunk) {
      return !endLindex && part.type === "placeholder" && (!part.module || part.module === "loop") && chunk.length > 1;
    }

    var result = postparsed.reduce(function (postparsed, part) {
      if (isWtStart(part)) {
        inTextTag = true;
        lastTextTag = chunk.length;
      }

      if (!inTextTag) {
        postparsed.push(part);
        return postparsed;
      }

      chunk.push(part);

      if (isInsideLoop(meta, chunk)) {
        endLindex = meta.basePart.endLindex;
        chunk[0].value = addXMLPreserve(chunk, 0);
      }

      if (isStartingPlaceHolder(part, chunk)) {
        endLindex = part.endLindex;
        chunk[0].value = addXMLPreserve(chunk, 0);
      }

      if (isTextEnd(part) && part.lIndex > endLindex) {
        if (endLindex !== 0) {
          chunk[lastTextTag].value = addXMLPreserve(chunk, lastTextTag);
        }

        Array.prototype.push.apply(postparsed, chunk);
        chunk = [];
        inTextTag = false;
        endLindex = 0;
        lastTextTag = 0;
      }

      return postparsed;
    }, []);
    Array.prototype.push.apply(result, chunk);
    return result;
  },
  postrender: function postrender(parts) {
    return parts.filter(function (p) {
      return p.length !== 0;
    }).reduce(function (newParts, p, index, parts) {
      if (p.indexOf('<w:t xml:space="preserve"></w:t>') !== -1) {
        p = p.replace(/<w:t xml:space="preserve"><\\/w:t>/g, "<w:t/>");
      }

      if (endsWith(p, wTpreserve) && startsWith(parts[index + 1], wtEnd)) {
        p = p.substr(0, p.length - wTpreservelen) + "<w:t/>";
        parts[index + 1] = parts[index + 1].substr(wtEndlen);
      }

      newParts.push(p);
      return newParts;
    }, []);
  }
};

module.exports = function () {
  return wrapper(spacePreserve);
};

//# sourceURL=webpack://docxtemplater/./es6/modules/space-preserve.js?`)},"./es6/parser.js":function(module,exports,__webpack_require__){eval(`function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! ./doc-utils */ "./es6/doc-utils.js"),
    wordToUtf8 = _require.wordToUtf8,
    concatArrays = _require.concatArrays;

function moduleParse(modules, placeHolderContent, parsed, startOffset, endLindex) {
  var moduleParsed;

  for (var i = 0, l = modules.length; i < l; i++) {
    var _module = modules[i];
    moduleParsed = _module.parse(placeHolderContent);

    if (moduleParsed) {
      moduleParsed.offset = startOffset;
      moduleParsed.endLindex = endLindex;
      moduleParsed.lIndex = endLindex;
      moduleParsed.raw = placeHolderContent;
      parsed.push(moduleParsed);
      return parsed;
    }
  }

  parsed.push({
    type: "placeholder",
    value: placeHolderContent,
    offset: startOffset,
    endLindex: endLindex,
    lIndex: endLindex
  });
  return parsed;
}

var parser = {
  postparse: function postparse(postparsed, modules) {
    function getTraits(traitName, postparsed) {
      return modules.map(function (module) {
        return module.getTraits(traitName, postparsed);
      });
    }

    var errors = [];

    function postparse(postparsed, options) {
      return modules.reduce(function (postparsed, module) {
        var r = module.postparse(postparsed, _objectSpread({}, options, {
          postparse: postparse,
          getTraits: getTraits
        }));

        if (r.errors) {
          errors = concatArrays([errors, r.errors]);
          return r.postparsed;
        }

        return r;
      }, postparsed);
    }

    return {
      postparsed: postparse(postparsed),
      errors: errors
    };
  },
  parse: function parse(lexed, modules) {
    var inPlaceHolder = false;
    var placeHolderContent = "";
    var startOffset;
    var tailParts = [];
    return lexed.reduce(function lexedToParsed(parsed, token) {
      if (token.type === "delimiter") {
        inPlaceHolder = token.position === "start";

        if (token.position === "end") {
          var endLindex = token.lIndex;
          placeHolderContent = wordToUtf8(placeHolderContent);
          parsed = moduleParse(modules, placeHolderContent, parsed, startOffset, endLindex);
          startOffset = null;
          Array.prototype.push.apply(parsed, tailParts);
          tailParts = [];
        }

        if (token.position === "start") {
          tailParts = [];
          startOffset = token.offset;
        }

        placeHolderContent = "";
        return parsed;
      }

      if (!inPlaceHolder) {
        parsed.push(token);
        return parsed;
      }

      if (token.type !== "content" || token.position !== "insidetag") {
        tailParts.push(token);
        return parsed;
      }

      placeHolderContent += token.value;
      return parsed;
    }, []);
  }
};
module.exports = parser;

//# sourceURL=webpack://docxtemplater/./es6/parser.js?`)},"./es6/postrender.js":function(module,exports,__webpack_require__){eval(`

function postrender(parts, options) {
  for (var i = 0, l = options.modules.length; i < l; i++) {
    var _module = options.modules[i];
    parts = _module.postrender(parts, options);
  }

  return parts.join("");
}

module.exports = postrender;

//# sourceURL=webpack://docxtemplater/./es6/postrender.js?`)},"./es6/prefix-matcher.js":function(module,exports){eval(`function match(condition, placeHolderContent) {
  if (typeof condition === "string") {
    return placeHolderContent.substr(0, condition.length) === condition;
  }

  if (condition instanceof RegExp) {
    return condition.test(placeHolderContent);
  }
}

function getValue(condition, placeHolderContent) {
  if (typeof condition === "string") {
    return placeHolderContent.substr(condition.length);
  }

  if (condition instanceof RegExp) {
    return placeHolderContent.match(condition)[1];
  }
}

function getValues(condition, placeHolderContent) {
  if (condition instanceof RegExp) {
    return placeHolderContent.match(condition);
  }
}

module.exports = {
  match: match,
  getValue: getValue,
  getValues: getValues
};

//# sourceURL=webpack://docxtemplater/./es6/prefix-matcher.js?`)},"./es6/render.js":function(module,exports,__webpack_require__){eval(`

var _require = __webpack_require__(/*! ./doc-utils */ "./es6/doc-utils.js"),
    concatArrays = _require.concatArrays;

var _require2 = __webpack_require__(/*! ./errors */ "./es6/errors.js"),
    throwUnimplementedTagType = _require2.throwUnimplementedTagType;

function moduleRender(part, options) {
  var moduleRendered;

  for (var i = 0, l = options.modules.length; i < l; i++) {
    var _module = options.modules[i];
    moduleRendered = _module.render(part, options);

    if (moduleRendered) {
      return moduleRendered;
    }
  }

  return false;
}

function render(options) {
  var baseNullGetter = options.baseNullGetter;
  var compiled = options.compiled,
      scopeManager = options.scopeManager;

  options.nullGetter = function (part, sm) {
    return baseNullGetter(part, sm || scopeManager);
  };

  var errors = [];
  var parts = compiled.map(function (part) {
    var moduleRendered = moduleRender(part, options);

    if (moduleRendered) {
      if (moduleRendered.errors) {
        errors = concatArrays([errors, moduleRendered.errors]);
      }

      return moduleRendered.value;
    }

    if (part.type === "content" || part.type === "tag") {
      return part.value;
    }

    throwUnimplementedTagType(part);
  });
  return {
    errors: errors,
    parts: parts
  };
}

module.exports = render;

//# sourceURL=webpack://docxtemplater/./es6/render.js?`)},"./es6/resolve.js":function(module,exports,__webpack_require__){eval(`

function moduleResolve(part, options) {
  var moduleResolved;

  for (var i = 0, l = options.modules.length; i < l; i++) {
    var _module = options.modules[i];
    moduleResolved = _module.resolve(part, options);

    if (moduleResolved) {
      return moduleResolved;
    }
  }

  return false;
}

function resolve(options) {
  var resolved = [];
  var baseNullGetter = options.baseNullGetter;
  var compiled = options.compiled,
      scopeManager = options.scopeManager;

  options.nullGetter = function (part, sm) {
    return baseNullGetter(part, sm || scopeManager);
  };

  options.resolved = resolved;
  var errors = [];
  return Promise.all(compiled.map(function (part) {
    var moduleResolved = moduleResolve(part, options);

    if (moduleResolved) {
      return moduleResolved.then(function (value) {
        resolved.push({
          tag: part.value,
          value: value,
          lIndex: part.lIndex
        });
      });
    }

    if (part.type === "placeholder") {
      return scopeManager.getValueAsync(part.value, {
        part: part
      }).then(function (value) {
        if (value == null) {
          value = options.nullGetter(part);
        }

        resolved.push({
          tag: part.value,
          value: value,
          lIndex: part.lIndex
        });
        return value;
      });
    }

    return;
  }).filter(function (a) {
    return a;
  })).then(function () {
    return {
      errors: errors,
      resolved: resolved
    };
  });
}

module.exports = resolve;

//# sourceURL=webpack://docxtemplater/./es6/resolve.js?`)},"./es6/scope-manager.js":function(module,exports,__webpack_require__){eval(`

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! ./errors */ "./es6/errors.js"),
    getScopeParserExecutionError = _require.getScopeParserExecutionError;

function find(list, fn) {
  var length = list.length >>> 0;
  var value;

  for (var i = 0; i < length; i++) {
    value = list[i];

    if (fn.call(this, value, i, list)) {
      return value;
    }
  }

  return undefined;
}

function _getValue(tag, meta, num) {
  var _this = this;

  this.num = num;
  var scope = this.scopeList[this.num];

  if (this.resolved) {
    var w = this.resolved;
    this.scopePath.forEach(function (p, index) {
      var lIndex = _this.scopeLindex[index];
      w = find(w, function (r) {
        return r.lIndex === lIndex;
      });
      w = w.value[_this.scopePathItem[index]];
    });
    return find(w, function (r) {
      return meta.part.lIndex === r.lIndex;
    }).value;
  } // search in the scopes (in reverse order) and keep the first defined value


  var result;
  var parser = this.parser(tag, {
    scopePath: this.scopePath
  });

  try {
    result = parser.get(scope, this.getContext(meta));
  } catch (error) {
    throw getScopeParserExecutionError({
      tag: tag,
      scope: scope,
      error: error
    });
  }

  if (result == null && this.num > 0) {
    return _getValue.call(this, tag, meta, num - 1);
  }

  return result;
}

function _getValueAsync(tag, meta, num) {
  var _this2 = this;

  this.num = num;
  var scope = this.scopeList[this.num]; // search in the scopes (in reverse order) and keep the first defined value

  var parser = this.parser(tag, {
    scopePath: this.scopePath
  });
  return Promise.resolve(parser.get(scope, this.getContext(meta))).catch(function (error) {
    throw getScopeParserExecutionError({
      tag: tag,
      scope: scope,
      error: error
    });
  }).then(function (result) {
    if (result == null && num > 0) {
      return _getValueAsync.call(_this2, tag, meta, num - 1);
    }

    return result;
  });
} // This class responsibility is to manage the scope


var ScopeManager =
/*#__PURE__*/
function () {
  function ScopeManager(options) {
    _classCallCheck(this, ScopeManager);

    this.scopePath = options.scopePath;
    this.scopePathItem = options.scopePathItem;
    this.scopeList = options.scopeList;
    this.scopeLindex = options.scopeLindex;
    this.parser = options.parser;
    this.resolved = options.resolved;
  }

  _createClass(ScopeManager, [{
    key: "loopOver",
    value: function loopOver(tag, callback, inverted, meta) {
      inverted = inverted || false;
      return this.loopOverValue(this.getValue(tag, meta), callback, inverted);
    }
  }, {
    key: "functorIfInverted",
    value: function functorIfInverted(inverted, functor, value, i) {
      if (inverted) {
        functor(value, i);
      }
    }
  }, {
    key: "isValueFalsy",
    value: function isValueFalsy(value, type) {
      return value == null || !value || type === "[object Array]" && value.length === 0;
    }
  }, {
    key: "loopOverValue",
    value: function loopOverValue(value, functor, inverted) {
      if (this.resolved) {
        inverted = false;
      }

      var type = Object.prototype.toString.call(value);
      var currentValue = this.scopeList[this.num];

      if (this.isValueFalsy(value, type)) {
        return this.functorIfInverted(inverted, functor, currentValue, 0);
      }

      if (type === "[object Array]") {
        for (var i = 0, scope; i < value.length; i++) {
          scope = value[i];
          this.functorIfInverted(!inverted, functor, scope, i);
        }

        return;
      }

      if (type === "[object Object]") {
        return this.functorIfInverted(!inverted, functor, value, 0);
      }

      return this.functorIfInverted(!inverted, functor, currentValue, 0);
    }
  }, {
    key: "getValue",
    value: function getValue(tag, meta) {
      var num = this.scopeList.length - 1;
      return _getValue.call(this, tag, meta, num);
    }
  }, {
    key: "getValueAsync",
    value: function getValueAsync(tag, meta) {
      var num = this.scopeList.length - 1;
      return _getValueAsync.call(this, tag, meta, num);
    }
  }, {
    key: "getContext",
    value: function getContext(meta) {
      return {
        num: this.num,
        meta: meta,
        scopeList: this.scopeList,
        resolved: this.resolved,
        scopePath: this.scopePath,
        scopePathItem: this.scopePathItem
      };
    }
  }, {
    key: "createSubScopeManager",
    value: function createSubScopeManager(scope, tag, i, part) {
      return new ScopeManager({
        resolved: this.resolved,
        parser: this.parser,
        scopeList: this.scopeList.concat(scope),
        scopePath: this.scopePath.concat(tag),
        scopePathItem: this.scopePathItem.concat(i),
        scopeLindex: this.scopeLindex.concat(part.lIndex)
      });
    }
  }]);

  return ScopeManager;
}();

module.exports = function (options) {
  options.scopePath = [];
  options.scopePathItem = [];
  options.scopeLindex = [];
  options.scopeList = [options.tags];
  return new ScopeManager(options);
};

//# sourceURL=webpack://docxtemplater/./es6/scope-manager.js?`)},"./es6/traits.js":function(module,exports,__webpack_require__){eval(`function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(/*! ./doc-utils */ "./es6/doc-utils.js"),
    getRightOrNull = _require.getRightOrNull,
    getRight = _require.getRight,
    getLeft = _require.getLeft,
    getLeftOrNull = _require.getLeftOrNull,
    concatArrays = _require.concatArrays,
    chunkBy = _require.chunkBy,
    isTagStart = _require.isTagStart,
    isTagEnd = _require.isTagEnd,
    isContent = _require.isContent,
    last = _require.last;

var _require2 = __webpack_require__(/*! ./errors */ "./es6/errors.js"),
    XTTemplateError = _require2.XTTemplateError,
    throwRawTagNotInParagraph = _require2.throwRawTagNotInParagraph,
    getLoopPositionProducesInvalidXMLError = _require2.getLoopPositionProducesInvalidXMLError;

function lastTagIsOpenTag(array, tag) {
  if (array.length === 0) {
    return false;
  }

  var lastTag = array[array.length - 1];
  var innerLastTag = lastTag.tag.substr(1);
  var innerCurrentTag = tag.substr(2, tag.length - 3);
  return innerLastTag.indexOf(innerCurrentTag) === 0;
}

function addTag(array, tag) {
  array.push({
    tag: tag
  });
  return array;
}

function getListXmlElements(parts) {
  /*
  get the different closing and opening tags between two texts (doesn't take into account tags that are opened then closed (those that are closed then opened are returned)):
  returns:[{"tag":"</w:r>","offset":13},{"tag":"</w:p>","offset":265},{"tag":"</w:tc>","offset":271},{"tag":"<w:tc>","offset":828},{"tag":"<w:p>","offset":883},{"tag":"<w:r>","offset":1483}]
  */
  var tags = parts.filter(function (part) {
    return part.type === "tag";
  });
  var result = [];

  for (var i = 0, tag; i < tags.length; i++) {
    tag = tags[i].value; // closing tag

    if (tag[1] === "/") {
      if (lastTagIsOpenTag(result, tag)) {
        result.pop();
      } else {
        result = addTag(result, tag);
      }
    } else if (tag[tag.length - 2] !== "/") {
      result = addTag(result, tag);
    }
  }

  return result;
}

function has(name, xmlElements) {
  for (var i = 0; i < xmlElements.length; i++) {
    var xmlElement = xmlElements[i];

    if (xmlElement.tag.indexOf("<".concat(name)) === 0) {
      return true;
    }
  }

  return false;
}

function getExpandToDefault(postparsed, pair, expandTags) {
  var parts = postparsed.slice(pair[0].offset, pair[1].offset);
  var xmlElements = getListXmlElements(parts);
  var closingTagCount = xmlElements.filter(function (xmlElement) {
    return xmlElement.tag[1] === "/";
  }).length;
  var startingTagCount = xmlElements.filter(function (xmlElement) {
    var tag = xmlElement.tag;
    return tag[1] !== "/" && tag[tag.length - 2] !== "/";
  }).length;

  if (closingTagCount !== startingTagCount) {
    return {
      error: getLoopPositionProducesInvalidXMLError({
        tag: pair[0].part.value
      })
    };
  }

  var _loop = function _loop(i, len) {
    var _expandTags$i = expandTags[i],
        contains = _expandTags$i.contains,
        expand = _expandTags$i.expand,
        onlyTextInTag = _expandTags$i.onlyTextInTag;

    if (has(contains, xmlElements)) {
      if (onlyTextInTag) {
        var left = getLeftOrNull(postparsed, contains, pair[0].offset);
        var right = getRightOrNull(postparsed, contains, pair[1].offset);

        if (left === null || right === null) {
          return "continue";
        }

        var chunks = chunkBy(postparsed.slice(left, right), function (p) {
          if (isTagStart(contains, p)) {
            return "start";
          }

          if (isTagEnd(contains, p)) {
            return "end";
          }

          return null;
        });

        if (chunks.length <= 2) {
          return "continue";
        }

        var firstChunk = chunks[0];
        var lastChunk = last(chunks);
        var firstContent = firstChunk.filter(isContent);
        var lastContent = lastChunk.filter(isContent);

        if (firstContent.length !== 1 || lastContent.length !== 1) {
          return "continue";
        }
      }

      return {
        v: {
          value: expand
        }
      };
    }
  };

  for (var i = 0, len = expandTags.length; i < len; i++) {
    var _ret = _loop(i, len);

    switch (_ret) {
      case "continue":
        continue;

      default:
        if (_typeof(_ret) === "object") return _ret.v;
    }
  }

  return false;
}

function expandOne(part, postparsed, options) {
  var expandTo = part.expandTo || options.expandTo;
  var index = postparsed.indexOf(part);

  if (!expandTo) {
    return postparsed;
  }

  var right, left;

  try {
    right = getRight(postparsed, expandTo, index);
    left = getLeft(postparsed, expandTo, index);
  } catch (rootError) {
    if (rootError instanceof XTTemplateError) {
      throwRawTagNotInParagraph({
        part: part,
        rootError: rootError,
        postparsed: postparsed,
        expandTo: expandTo,
        index: index
      });
    }

    throw rootError;
  }

  var leftParts = postparsed.slice(left, index);
  var rightParts = postparsed.slice(index + 1, right + 1);
  var inner = options.getInner({
    index: index,
    part: part,
    leftParts: leftParts,
    rightParts: rightParts,
    left: left,
    right: right,
    postparsed: postparsed
  });

  if (!inner.length) {
    inner.expanded = [leftParts, rightParts];
    inner = [inner];
  }

  return concatArrays([postparsed.slice(0, left), inner, postparsed.slice(right + 1)]);
}

function expandToOne(postparsed, options) {
  var errors = [];

  if (postparsed.errors) {
    errors = postparsed.errors;
    postparsed = postparsed.postparsed;
  }

  var expandToElements = postparsed.reduce(function (elements, part) {
    if (part.type === "placeholder" && part.module === options.moduleName) {
      elements.push(part);
    }

    return elements;
  }, []);
  expandToElements.forEach(function (part) {
    try {
      postparsed = expandOne(part, postparsed, options);
    } catch (error) {
      if (error instanceof XTTemplateError) {
        errors.push(error);
      } else {
        throw error;
      }
    }
  });
  return {
    postparsed: postparsed,
    errors: errors
  };
}

module.exports = {
  expandToOne: expandToOne,
  getExpandToDefault: getExpandToDefault
};

//# sourceURL=webpack://docxtemplater/./es6/traits.js?`)},"./es6/xml-matcher.js":function(module,exports,__webpack_require__){eval(` // res class responsibility is to parse the XML.

var _require = __webpack_require__(/*! ./doc-utils */ "./es6/doc-utils.js"),
    pregMatchAll = _require.pregMatchAll;

function handleRecursiveCase(res) {
  /*
  * Because xmlTemplater is recursive (meaning it can call it self), we need to handle special cases where the XML is not valid:
  * For example with res string "I am</w:t></w:r></w:p><w:p><w:r><w:t>sleeping",
  *   - we need to match also the string that is inside an implicit <w:t> (that's the role of replacerUnshift) (in res case 'I am')
  *   - we need to match the string that is at the right of a <w:t> (that's the role of replacerPush) (in res case 'sleeping')
  * the test: describe "scope calculation" it "should compute the scope between 2 <w:t>" makes sure that res part of code works
  * It should even work if they is no XML at all, for example if the code is just "I am sleeping", in res case however, they should only be one match
  */
  function replacerUnshift() {
    var pn = {
      array: Array.prototype.slice.call(arguments)
    };
    pn.array.shift();
    var match = pn.array[0] + pn.array[1]; // add match so that pn[0] = whole match, pn[1]= first parenthesis,...

    pn.array.unshift(match);
    pn.array.pop();
    var offset = pn.array.pop();
    pn.offset = offset;
    pn.first = true; // add at the beginning

    res.matches.unshift(pn);
  }

  if (res.content.indexOf("<") === -1 && res.content.indexOf(">") === -1) {
    res.content.replace(/^()([^<>]*)$/, replacerUnshift);
  }

  var r = new RegExp("^()([^<]+)</(?:".concat(res.tagsXmlArrayJoined, ")>"));
  res.content.replace(r, replacerUnshift);

  function replacerPush() {
    var pn = {
      array: Array.prototype.slice.call(arguments)
    };
    pn.array.pop();
    var offset = pn.array.pop();
    pn.offset = offset;
    pn.last = true;

    if (pn.array[0].indexOf("/>") !== -1) {
      return;
    } // add at the end


    res.matches.push(pn);
  }

  r = new RegExp("(<(?:".concat(res.tagsXmlArrayJoined, ")[^>]*>)([^>]+)$"));
  res.content.replace(r, replacerPush);
  return res;
}

module.exports = function xmlMatcher(content, tagsXmlArray) {
  var res = {};
  res.content = content;
  res.tagsXmlArray = tagsXmlArray;
  res.tagsXmlArrayJoined = res.tagsXmlArray.join("|");
  var regexp = new RegExp("(?:(<(?:".concat(res.tagsXmlArrayJoined, ")[^>]*>)([^<>]*)</(?:").concat(res.tagsXmlArrayJoined, ")>)|(<(?:").concat(res.tagsXmlArrayJoined, ")[^>]*/>)"), "g");
  res.matches = pregMatchAll(regexp, res.content);
  return handleRecursiveCase(res);
};

//# sourceURL=webpack://docxtemplater/./es6/xml-matcher.js?`)},"./es6/xml-templater.js":function(module,exports,__webpack_require__){eval(`function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! ./doc-utils */ "./es6/doc-utils.js"),
    wordToUtf8 = _require.wordToUtf8,
    convertSpaces = _require.convertSpaces,
    defaults = _require.defaults;

var createScope = __webpack_require__(/*! ./scope-manager */ "./es6/scope-manager.js");

var xmlMatcher = __webpack_require__(/*! ./xml-matcher */ "./es6/xml-matcher.js");

var _require2 = __webpack_require__(/*! ./errors */ "./es6/errors.js"),
    throwMultiError = _require2.throwMultiError,
    throwContentMustBeString = _require2.throwContentMustBeString;

var Lexer = __webpack_require__(/*! ./lexer */ "./es6/lexer.js");

var Parser = __webpack_require__(/*! ./parser.js */ "./es6/parser.js");

var _render = __webpack_require__(/*! ./render.js */ "./es6/render.js");

var postrender = __webpack_require__(/*! ./postrender.js */ "./es6/postrender.js");

var resolve = __webpack_require__(/*! ./resolve.js */ "./es6/resolve.js");

function _getFullText(content, tagsXmlArray) {
  var matcher = xmlMatcher(content, tagsXmlArray);
  var result = matcher.matches.map(function (match) {
    return match.array[2];
  });
  return wordToUtf8(convertSpaces(result.join("")));
}

module.exports =
/*#__PURE__*/
function () {
  function XmlTemplater(content, options) {
    _classCallCheck(this, XmlTemplater);

    this.filePath = options.filePath;
    this.modules = options.modules;
    this.fileTypeConfig = options.fileTypeConfig;
    Object.keys(defaults).map(function (key) {
      this[key] = options[key] != null ? options[key] : defaults[key];
    }, this);
    this.setModules({
      inspect: {
        filePath: this.filePath
      }
    });
    this.load(content);
  }

  _createClass(XmlTemplater, [{
    key: "load",
    value: function load(content) {
      if (typeof content !== "string") {
        throwContentMustBeString(_typeof(content));
      }

      this.content = content;
    }
  }, {
    key: "setTags",
    value: function setTags(tags) {
      this.tags = tags != null ? tags : {};
      this.scopeManager = createScope({
        tags: this.tags,
        parser: this.parser
      });
      return this;
    }
  }, {
    key: "resolveTags",
    value: function resolveTags(tags) {
      var _this = this;

      this.tags = tags != null ? tags : {};
      this.scopeManager = createScope({
        tags: this.tags,
        parser: this.parser
      });
      var options = this.getOptions();
      options.scopeManager = createScope(options);
      options.resolve = resolve;
      return resolve(options).then(function (_ref) {
        var resolved = _ref.resolved;
        return Promise.all(resolved.map(function (r) {
          return Promise.resolve(r);
        })).then(function (resolved) {
          _this.setModules({
            inspect: {
              resolved: resolved
            }
          });

          return _this.resolved = resolved;
        });
      });
    }
  }, {
    key: "getFullText",
    value: function getFullText() {
      return _getFullText(this.content, this.fileTypeConfig.tagsXmlTextArray);
    }
  }, {
    key: "setModules",
    value: function setModules(obj) {
      this.modules.forEach(function (module) {
        module.set(obj);
      });
    }
  }, {
    key: "parse",
    value: function parse() {
      var allErrors = [];
      this.xmllexed = Lexer.xmlparse(this.content, {
        text: this.fileTypeConfig.tagsXmlTextArray,
        other: this.fileTypeConfig.tagsXmlLexedArray
      });
      this.setModules({
        inspect: {
          xmllexed: this.xmllexed
        }
      });

      var _Lexer$parse = Lexer.parse(this.xmllexed, this.delimiters),
          lexed = _Lexer$parse.lexed,
          lexerErrors = _Lexer$parse.errors;

      allErrors = allErrors.concat(lexerErrors);
      this.lexed = lexed;
      this.setModules({
        inspect: {
          lexed: this.lexed
        }
      });
      this.parsed = Parser.parse(this.lexed, this.modules);
      this.setModules({
        inspect: {
          parsed: this.parsed
        }
      });

      var _Parser$postparse = Parser.postparse(this.parsed, this.modules),
          postparsed = _Parser$postparse.postparsed,
          postparsedErrors = _Parser$postparse.errors;

      this.postparsed = postparsed;
      this.setModules({
        inspect: {
          postparsed: this.postparsed
        }
      });
      allErrors = allErrors.concat(postparsedErrors);
      this.errorChecker(allErrors);
      return this;
    }
  }, {
    key: "errorChecker",
    value: function errorChecker(errors) {
      var _this2 = this;

      if (errors.length) {
        this.modules.forEach(function (module) {
          errors = module.errorsTransformer(errors);
        });
        errors.forEach(function (error) {
          error.properties.file = _this2.filePath;
        });
        throwMultiError(errors);
      }
    }
  }, {
    key: "baseNullGetter",
    value: function baseNullGetter(part, sm) {
      var _this3 = this;

      var value = this.modules.reduce(function (value, module) {
        if (value != null) {
          return value;
        }

        return module.nullGetter(part, sm, _this3);
      }, null);

      if (value != null) {
        return value;
      }

      return this.nullGetter(part, sm);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return {
        compiled: this.postparsed,
        tags: this.tags,
        modules: this.modules,
        parser: this.parser,
        baseNullGetter: this.baseNullGetter.bind(this),
        filePath: this.filePath,
        linebreaks: this.linebreaks
      };
    }
  }, {
    key: "render",
    value: function render(to) {
      this.filePath = to;
      var options = this.getOptions();
      options.resolved = this.resolved;
      options.scopeManager = createScope(options);
      options.render = _render;

      var _render2 = _render(options),
          errors = _render2.errors,
          parts = _render2.parts;

      this.errorChecker(errors);
      this.content = postrender(parts, options);
      this.setModules({
        inspect: {
          content: this.content
        }
      });
      return this;
    }
  }]);

  return XmlTemplater;
}();

//# sourceURL=webpack://docxtemplater/./es6/xml-templater.js?`)}});/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */window.saveAs=window.saveAs||function(c){if(!(typeof c=="undefined"||typeof navigator!="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent))){var j=c.document,U=function(){return c.URL||c.webkitURL||c},s=j.createElementNS("http://www.w3.org/1999/xhtml","a"),t="download"in s,m=function(u){var g=new MouseEvent("click");u.dispatchEvent(g)},d=/constructor/i.test(c.HTMLElement)||c.safari,x=/CriOS\/[\d]+/.test(navigator.userAgent),N=function(u){(c.setImmediate||c.setTimeout)(function(){throw u},0)},C="application/octet-stream",T=1e3*40,p=function(u){var g=function(){typeof u=="string"?U().revokeObjectURL(u):u.remove()};setTimeout(g,T)},i=function(u,g,_){g=[].concat(g);for(var A=g.length;A--;){var q=u["on"+g[A]];if(typeof q=="function")try{q.call(u,_||u)}catch(P){N(P)}}},w=function(u){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob([String.fromCharCode(65279),u],{type:u.type}):u},I=function(u,g,_){_||(u=w(u));var A=this,q=u.type,P=q===C,O,l=function(){i(A,"writestart progress write writeend".split(" "))},S=function(){if((x||P&&d)&&c.FileReader){var L=new FileReader;L.onloadend=function(){var v=x?L.result:L.result.replace(/^data:[^;]*;/,"data:attachment/file;"),o=c.open(v,"_blank");o||(c.location.href=v),v=void 0,A.readyState=A.DONE,l()},L.readAsDataURL(u),A.readyState=A.INIT;return}if(O||(O=U().createObjectURL(u)),P)c.location.href=O;else{var a=c.open(O,"_blank");a||(c.location.href=O)}A.readyState=A.DONE,l(),p(O)};if(A.readyState=A.INIT,t){O=U().createObjectURL(u),setTimeout(function(){s.href=O,s.download=g,m(s),l(),p(O),A.readyState=A.DONE});return}S()},b=I.prototype,k=function(u,g,_){return new I(u,g||u.name||"download",_)};return typeof navigator!="undefined"&&navigator.msSaveOrOpenBlob?function(u,g,_){return g=g||u.name||"download",_||(u=w(u)),navigator.msSaveOrOpenBlob(u,g)}:(b.abort=function(){},b.readyState=b.INIT=0,b.WRITING=1,b.DONE=2,b.error=b.onwritestart=b.onprogress=b.onwrite=b.onabort=b.onerror=b.onwriteend=null,k)}}(typeof self!="undefined"&&self||typeof window!="undefined"&&window||globalThis.content);typeof module!="undefined"&&module.exports?module.exports.saveAs=saveAs:typeof define!="undefined"&&define!==null&&define.amd!==null&&define("FileSaver.js",function(){return saveAs});(function(c){if(typeof exports=="object"&&typeof module!="undefined")module.exports=c();else if(typeof define=="function"&&define.amd)define([],c);else{var j;typeof window!="undefined"?j=window:typeof global!="undefined"?j=global:typeof self!="undefined"?j=self:j=this,j.ImageModule=c()}})(function(){return function(){function c(j,U,s){function t(x,N){if(!U[x]){if(!j[x]){var C=typeof require=="function"&&require;if(!N&&C)return C(x,!0);if(m)return m(x,!0);var T=new Error("Cannot find module '"+x+"'");throw T.code="MODULE_NOT_FOUND",T}var p=U[x]={exports:{}};j[x][0].call(p.exports,function(i){var w=j[x][1][i];return t(w||i)},p,p.exports,c,j,U,s)}return U[x].exports}for(var m=typeof require=="function"&&require,d=0;d<s.length;d++)t(s[d]);return t}return c}()({"/js/index.js":[function(c,j,U){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},t=function(){function b(k,u){for(var g=0;g<u.length;g++){var _=u[g];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(k,_.key,_)}}return function(k,u,g){return u&&b(k.prototype,u),g&&b(k,g),k}}();function m(b,k){if(!(b instanceof k))throw new TypeError("Cannot call a class as a function")}var d=c("./templates"),x=c("docxtemplater").DocUtils,N=c("xmldom").DOMParser;function C(b){return b!==b}var T=c("./imgManager"),p="open-xml-templating/docxtemplater-image-module";function i(b){var k=b.part;return k}function w(b){var k=b.part,u=b.left,g=b.right,_=b.postparsed,A=_.slice(u+1,g).reduce(function(l,S){return l+S.value},""),q=new N().parseFromString("<xml>"+A+"</xml>");k.offset={x:0,y:0},k.ext={cx:0,cy:0};var P=q.getElementsByTagName("a:off"),O=q.getElementsByTagName("a:ext");return O.length>0&&(k.ext.cx=parseInt(O[O.length-1].getAttribute("cx"),10),k.ext.cy=parseInt(O[O.length-1].getAttribute("cy"),10)),P.length>0&&(k.offset.x=parseInt(P[P.length-1].getAttribute("x"),10),k.offset.y=parseInt(P[P.length-1].getAttribute("y"),10)),k}var I=function(){function b(k){if(m(this,b),this.name="ImageModule",this.options=k||{},this.imgManagers={},this.options.centered==null&&(this.options.centered=!1),this.options.getImage==null)throw new Error("You should pass getImage");if(this.options.getSize==null)throw new Error("You should pass getSize");this.imageNumber=1}return t(b,[{key:"optionsTransformer",value:function(u,g){var _=g.zip.file(/\.xml\.rels/).concat(g.zip.file(/\[Content_Types\].xml/)).map(function(A){return A.name});return this.fileTypeConfig=g.fileTypeConfig,this.fileType=g.fileType,this.zip=g.zip,u.xmlFileNames=u.xmlFileNames.concat(_),u}},{key:"set",value:function(u){u.zip&&(this.zip=u.zip),u.xmlDocuments&&(this.xmlDocuments=u.xmlDocuments)}},{key:"parse",value:function(u){var g=p,_="placeholder";return this.options.setParser?this.options.setParser(u):u.substring(0,2)==="%%"?{type:_,value:u.substr(2),module:g,centered:!0}:u.substring(0,1)==="%"?{type:_,value:u.substr(1),module:g,centered:!1}:null}},{key:"postparse",value:function(u){var g=void 0,_=void 0;return this.fileType==="pptx"?(g="p:sp",_=w):(g=this.options.centered?"w:p":"w:t",_=i),x.traits.expandToOne(u,{moduleName:p,getInner:_,expandTo:g})}},{key:"render",value:function(u,g){if(!u.type==="placeholder"||u.module!==p)return null;var _=g.scopeManager.getValue(u.value,{part:u});if(_){if((typeof _=="undefined"?"undefined":s(_))==="object")return this.getRenderedPart(u,_.rId,_.sizePixel)}else return{value:this.fileTypeConfig.tagTextXml};var A=new T(this.zip,g.filePath,this.xmlDocuments,this.fileType),q=this.options.getImage(_,u.value),P=A.addImageRels(this.getNextImageName(),q),O=this.options.getSize(q,_,u.value);return this.getRenderedPart(u,P,O)}},{key:"resolve",value:function(u,g){var _=this,A=new T(this.zip,g.filePath,this.xmlDocuments,this.fileType);if(!u.type==="placeholder"||u.module!==p)return null;var q=g.scopeManager.getValue(u.value,{part:u});return q?new Promise(function(P){var O=_.options.getImage(q,u.value);P(O)}).then(function(P){var O=A.addImageRels(_.getNextImageName(),P);return new Promise(function(l){var S=_.options.getSize(P,q,u.value);l(S)}).then(function(l){return{rId:O,sizePixel:l}})}):{value:this.fileTypeConfig.tagTextXml}}},{key:"getRenderedPart",value:function(u,g,_){if(C(g))throw new Error("rId is NaN, aborting");var A=[x.convertPixelsToEmus(_[0]),x.convertPixelsToEmus(_[1])],q=this.options.centered||u.centered,P=void 0;return this.fileType==="pptx"?P=this.getRenderedPartPptx(u,g,A,q):P=this.getRenderedPartDocx(g,A,q),{value:P}}},{key:"getRenderedPartPptx",value:function(u,g,_,A){var q={x:parseInt(u.offset.x,10),y:parseInt(u.offset.y,10)},P=parseInt(u.ext.cx,10)||1,O=parseInt(u.ext.cy,10)||1,l=parseInt(_[0],10)||1,S=parseInt(_[1],10)||1;return A&&(q.x=Math.round(q.x+P/2-l/2),q.y=Math.round(q.y+O/2-S/2)),d.getPptxImageXml(g,[l,S],q)}},{key:"getRenderedPartDocx",value:function(u,g,_){return _?d.getImageXmlCentered(u,g):d.getImageXml(u,g)}},{key:"getNextImageName",value:function(){var u="image_generated_"+this.imageNumber+".png";return this.imageNumber++,u}}]),b}();j.exports=I},{"./imgManager":2,"./templates":3,docxtemplater:5,xmldom:25}],1:[function(c,j,U){var s=c("docxtemplater").DocUtils;s.convertPixelsToEmus=function(t){return Math.round(t*9525)},j.exports=s},{docxtemplater:5}],2:[function(c,j,U){var s=function(){function N(C,T){for(var p=0;p<T.length;p++){var i=T[p];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(C,i.key,i)}}return function(C,T,p){return T&&N(C.prototype,T),p&&N(C,p),C}}();function t(N,C){if(!(N instanceof C))throw new TypeError("Cannot call a class as a function")}var m=c("./docUtils"),d=/[^.]+\.([^.]+)/,x={getPrefix:function(C){return C==="docx"?"word":"ppt"},getFileTypeName:function(C){return C==="docx"?"document":"presentation"},getRelsFileName:function(C){return C.replace(/^.*?([a-zA-Z0-9]+)\.xml$/,"$1")+".xml.rels"},getRelsFilePath:function(C,T){var p=x.getRelsFileName(C),i=T==="pptx"?"ppt/slides":"word";return i+"/_rels/"+p}};j.exports=function(){function N(C,T,p,i){t(this,N),this.fileName=T,this.prefix=x.getPrefix(i),this.zip=C,this.xmlDocuments=p,this.fileTypeName=x.getFileTypeName(i),this.mediaPrefix=i==="pptx"?"../media":"media";var w=x.getRelsFilePath(T,i);this.relsDoc=p[w]||this.createEmptyRelsDoc(p,w)}return s(N,[{key:"createEmptyRelsDoc",value:function(T,p){var i=this.prefix+"/_rels/"+this.fileTypeName+".xml.rels",w=T[i];if(!w){var I=new Error("Could not copy from empty relsdoc");throw I.properties={mainRels:i,relsFileName:p,files:Object.keys(this.zip.files)},I}for(var b=m.str2xml(m.xml2str(w)),k=b.getElementsByTagName("Relationships")[0],u=k.getElementsByTagName("Relationship"),g=0,_=u.length;g<_;g++)k.removeChild(u[g]);return T[p]=b,b}},{key:"loadImageRels",value:function(){var T=this.relsDoc.getElementsByTagName("Relationship");return Array.prototype.reduce.call(T,function(p,i){var w=i.getAttribute("Id");return/^rId[0-9]+$/.test(w)?Math.max(p,parseInt(w.substr(3),10)):p},0)}},{key:"addExtensionRels",value:function(T,p){var i=this.xmlDocuments["[Content_Types].xml"],w=i.getElementsByTagName("Default"),I=Array.prototype.some.call(w,function(u){return u.getAttribute("Extension")===p});if(!I){var b=i.getElementsByTagName("Types")[0],k=i.createElement("Default");k.setAttribute("ContentType",T),k.setAttribute("Extension",p),b.appendChild(k)}}},{key:"addImageRels",value:function(T,p,i){i==null&&(i=0);var w=i===0?T:T+("("+i+")"),I=this.prefix+"/media/"+w;if(this.zip.files[I]!=null)return this.addImageRels(T,p,i+1);var b={name:I,data:p,options:{binary:!0}};this.zip.file(b.name,b.data,b.options);var k=w.replace(d,"$1");this.addExtensionRels("image/"+k,k);var u=this.relsDoc.getElementsByTagName("Relationships")[0],g=this.relsDoc.createElement("Relationship"),_=this.loadImageRels()+1;return g.setAttribute("Id","rId"+_),g.setAttribute("Type","http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"),g.setAttribute("Target",this.mediaPrefix+"/"+w),u.appendChild(g),_}}]),N}()},{"./docUtils":1}],3:[function(c,j,U){j.exports={getImageXml:function(t,m){return(`<w:drawing>
		<wp:inline distT="0" distB="0" distL="0" distR="0">
			<wp:extent cx="`+m[0]+'" cy="'+m[1]+`"/>
			<wp:effectExtent l="0" t="0" r="0" b="0"/>
			<wp:docPr id="2" name="Image 2" descr="image"/>
			<wp:cNvGraphicFramePr>
				<a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/>
			</wp:cNvGraphicFramePr>
			<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
				<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
					<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
						<pic:nvPicPr>
							<pic:cNvPr id="0" name="Picture 1" descr="image"/>
							<pic:cNvPicPr>
								<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/>
							</pic:cNvPicPr>
						</pic:nvPicPr>
						<pic:blipFill>
							<a:blip r:embed="rId`+t+`">
								<a:extLst>
									<a:ext uri="{28A0092B-C50C-407E-A947-70E740481C1C}">
										<a14:useLocalDpi xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" val="0"/>
									</a:ext>
								</a:extLst>
							</a:blip>
							<a:srcRect/>
							<a:stretch>
								<a:fillRect/>
							</a:stretch>
						</pic:blipFill>
						<pic:spPr bwMode="auto">
							<a:xfrm>
								<a:off x="0" y="0"/>
								<a:ext cx="`+m[0]+'" cy="'+m[1]+`"/>
							</a:xfrm>
							<a:prstGeom prst="rect">
								<a:avLst/>
							</a:prstGeom>
							<a:noFill/>
							<a:ln>
								<a:noFill/>
							</a:ln>
						</pic:spPr>
					</pic:pic>
				</a:graphicData>
			</a:graphic>
		</wp:inline>
	</w:drawing>
		`).replace(/\t|\n/g,"")},getImageXmlCentered:function(t,m){return(`<w:p>
			<w:pPr>
				<w:jc w:val="center"/>
			</w:pPr>
			<w:r>
				<w:rPr/>
				<w:drawing>
					<wp:inline distT="0" distB="0" distL="0" distR="0">
					<wp:extent cx="`+m[0]+'" cy="'+m[1]+`"/>
					<wp:docPr id="0" name="Picture" descr=""/>
					<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
						<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
						<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
							<pic:nvPicPr>
							<pic:cNvPr id="0" name="Picture" descr=""/>
							<pic:cNvPicPr>
								<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/>
							</pic:cNvPicPr>
							</pic:nvPicPr>
							<pic:blipFill>
							<a:blip r:embed="rId`+t+`"/>
							<a:stretch>
								<a:fillRect/>
							</a:stretch>
							</pic:blipFill>
							<pic:spPr bwMode="auto">
							<a:xfrm>
								<a:off x="0" y="0"/>
								<a:ext cx="`+m[0]+'" cy="'+m[1]+`"/>
							</a:xfrm>
							<a:prstGeom prst="rect">
								<a:avLst/>
							</a:prstGeom>
							<a:noFill/>
							<a:ln w="9525">
								<a:noFill/>
								<a:miter lim="800000"/>
								<a:headEnd/>
								<a:tailEnd/>
							</a:ln>
							</pic:spPr>
						</pic:pic>
						</a:graphicData>
					</a:graphic>
					</wp:inline>
				</w:drawing>
			</w:r>
		</w:p>
		`).replace(/\t|\n/g,"")},getPptxImageXml:function(t,m,d){return(`<p:pic>
			<p:nvPicPr>
				<p:cNvPr id="6" name="Picture 2"/>
				<p:cNvPicPr>
					<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/>
				</p:cNvPicPr>
				<p:nvPr/>
			</p:nvPicPr>
			<p:blipFill>
				<a:blip r:embed="rId`+t+`" cstate="print">
					<a:extLst>
						<a:ext uri="{28A0092B-C50C-407E-A947-70E740481C1C}">
							<a14:useLocalDpi xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" val="0"/>
						</a:ext>
					</a:extLst>
				</a:blip>
				<a:srcRect/>
				<a:stretch>
					<a:fillRect/>
				</a:stretch>
			</p:blipFill>
			<p:spPr bwMode="auto">
				<a:xfrm>
					<a:off x="`+d.x+'" y="'+d.y+`"/>
					<a:ext cx="`+m[0]+'" cy="'+m[1]+`"/>
				</a:xfrm>
				<a:prstGeom prst="rect">
					<a:avLst/>
				</a:prstGeom>
				<a:noFill/>
				<a:ln>
					<a:noFill/>
				</a:ln>
				<a:effectLst/>
				<a:extLst>
					<a:ext uri="{909E8E84-426E-40DD-AFC4-6F175D3DCCD1}">
						<a14:hiddenFill xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main">
							<a:solidFill>
								<a:schemeClr val="accent1"/>
							</a:solidFill>
						</a14:hiddenFill>
					</a:ext>
					<a:ext uri="{91240B29-F687-4F45-9708-019B960494DF}">
						<a14:hiddenLine xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" w="9525">
							<a:solidFill>
								<a:schemeClr val="tx1"/>
							</a:solidFill>
							<a:miter lim="800000"/>
							<a:headEnd/>
							<a:tailEnd/>
						</a14:hiddenLine>
					</a:ext>
					<a:ext uri="{AF507438-7753-43E0-B8FC-AC1667EBCBE1}">
						<a14:hiddenEffects xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main">
							<a:effectLst>
								<a:outerShdw dist="35921" dir="2700000" algn="ctr" rotWithShape="0">
									<a:schemeClr val="bg2"/>
								</a:outerShdw>
							</a:effectLst>
						</a14:hiddenEffects>
					</a:ext>
				</a:extLst>
			</p:spPr>
		</p:pic>
		`).replace(/\t|\n/g,"")}}},{}],4:[function(c,j,U){function s(z,Z,X){return Z in z?Object.defineProperty(z,Z,{value:X,enumerable:!0,configurable:!0,writable:!0}):z[Z]=X,z}var t=c("xmldom"),m=t.DOMParser,d=t.XMLSerializer,x=c("./errors"),N=x.throwXmlTagNotFound;function C(z){return s({},"get",function(X){return z==="."?X:X[z]})}function T(z,Z,X){for(var V=X;V>=0;V--)for(var K=z[V],ee=0,ie=Z.length;ee<ie;ee++){var de=Z[ee];if(K.value.indexOf("<"+de)===0&&[">"," "].indexOf(K.value[de.length+1])!==-1)return Z[ee]}return null}function p(z,Z,X){for(var V=X,K=z.length;V<K;V++)for(var ee=z[V],ie=0,de=Z.length;ie<de;ie++){var ae=Z[ie];if(ee.value==="</"+ae+">")return Z[ie]}return-1}function i(z,Z){return z.indexOf(Z,z.length-Z.length)!==-1}function w(z,Z){return z.substring(0,Z.length)===Z}function I(z){for(var Z={},X=[],V=0,K=z.length;V<K;++V)Z.hasOwnProperty(z[V])||(Z[z[V]]=!0,X.push(z[V]));return X}function b(z,Z){return z.reduce(function(X,V){var K=k(X);if(K.length===0)return K.push(V),X;var ee=Z(V);return ee==="start"?X.push([V]):ee==="end"?(K.push(V),X.push([])):K.push(V),X},[[]]).filter(function(X){return X.length>0})}function k(z){return z[z.length-1]}var u={nullGetter:function(Z){return Z.module?(Z.module==="rawxml",""):"undefined"},xmlFileNames:[],parser:C,linebreaks:!1,delimiters:{start:"{",end:"}"}};function g(){for(var z={},Z,X,V=0;V<arguments.length;V+=1){Z=arguments[V],X=Object.keys(Z);for(var K=0;K<X.length;K+=1)z[X[K]]=Z[X[K]]}return z}function _(z){var Z=new d;return Z.serializeToString(z).replace(/xmlns(:[a-z0-9]+)?="" ?/g,"")}function A(z){var Z=new m;return Z.parseFromString(z,"text/xml")}var q={"&":"&amp;","'":"&apos;","<":"&lt;",">":"&gt;",'"':"&quot;"},P=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;function O(z){return z.replace(P,"\\$&")}var l=Object.keys(q).map(function(z){var Z=q[z];return{rstart:new RegExp(O(Z),"g"),rend:new RegExp(O(z),"g"),start:Z,end:z}});function S(z){for(var Z,X=0,V=l.length;X<V;X++)Z=l[X],z=z.replace(Z.rstart,Z.end);return z}function L(z){typeof z!="string"&&(z=z.toString());for(var Z,X=0,V=l.length;X<V;X++)Z=l[X],z=z.replace(Z.rend,Z.start);return z}function a(z){for(var Z=[],X=0;X<z.length;X++)for(var V=z[X],K=0,ee=V.length;K<ee;K++)Z.push(V[K]);return Z}var v=new RegExp(String.fromCharCode(160),"g");function o(z){return z.replace(v," ")}function h(z,Z){for(var X=[],V;(V=z.exec(Z))!=null;)X.push({array:V,offset:V.index});return X}function R(z,Z,X){var V=D(z,Z,X);if(V!==null)return V;N({position:"right",element:Z,parsed:z,index:X})}function D(z,Z,X){for(var V=X,K=z.length;V<K;V++){var ee=z[V];if(ee.value==="</"+Z+">")return V}return null}function r(z,Z,X){var V=y(z,Z,X);if(V!==null)return V;N({position:"left",element:Z,parsed:z,index:X})}function y(z,Z,X){for(var V=X;V>=0;V--){var K=z[V];if(K.value.indexOf("<"+Z)===0&&[">"," "].indexOf(K.value[Z.length+1])!==-1)return V}return null}function B(z,Z){var X=Z.type,V=Z.tag,K=Z.position;return X==="tag"&&V===z&&K==="start"}function F(z,Z){var X=Z.type,V=Z.tag,K=Z.position;return X==="tag"&&V===z&&K==="end"}function H(z){return B("w:p",z)||B("a:p",z)}function Y(z){return F("w:p",z)||F("a:p",z)}function G(z){return z.type==="tag"&&z.position==="start"&&z.text}function $(z){return z.type==="tag"&&z.position==="end"&&z.text}function te(z){return z.type==="placeholder"||z.type==="content"&&z.position==="insidetag"}var Q=/[\x00-\x08\x0B\x0C\x0E-\x1F]/;function J(z){return Q.test(z)}j.exports={endsWith:i,startsWith:w,getNearestLeft:T,getNearestRight:p,isContent:te,isParagraphStart:H,isParagraphEnd:Y,isTagStart:B,isTagEnd:F,isTextStart:G,isTextEnd:$,unique:I,chunkBy:b,last:k,mergeObjects:g,xml2str:_,str2xml:A,getRightOrNull:D,getRight:R,getLeftOrNull:y,getLeft:r,pregMatchAll:h,convertSpaces:o,escapeRegExp:O,charMapRegexes:l,hasCorruptCharacters:J,defaults:u,wordToUtf8:S,utf8ToWord:L,concatArrays:a,charMap:q}},{"./errors":6,xmldom:25}],5:[function(c,j,U){function s(P,O){if(!(P instanceof O))throw new TypeError("Cannot call a class as a function")}function t(P,O){for(var l=0;l<O.length;l++){var S=O[l];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(P,S.key,S)}}function m(P,O,l){return O&&t(P.prototype,O),l&&t(P,l),P}var d=c("./doc-utils");d.traits=c("./traits"),d.moduleWrapper=c("./module-wrapper");var x=c("./lexer"),N=d.defaults,C=d.str2xml,T=d.xml2str,p=d.moduleWrapper,i=d.utf8ToWord,w=d.concatArrays,I=d.unique,b=c("./errors"),k=b.XTInternalError,u=b.throwFileTypeNotIdentified,g=b.throwFileTypeNotHandled,_=b.throwApiVersionError,A=[3,7,0],q=function(){function P(){if(s(this,P),arguments.length>0)throw new Error("The constructor with parameters has been removed in docxtemplater 3, please check the upgrade guide.");this.compiled={},this.modules=[],this.setOptions({})}return m(P,[{key:"getModuleApiVersion",value:function(){return A.join(".")}},{key:"verifyApiVersion",value:function(l){return l=l.split(".").map(function(S){return parseInt(S,10)}),l.length!==3&&_("neededVersion is not a valid version",{neededVersion:l,explanation:"the neededVersion must be an array of length 3"}),l[0]!==A[0]&&_("The major api version do not match, you probably have to update docxtemplater with npm install --save docxtemplater",{neededVersion:l,currentModuleApiVersion:A,explanation:"moduleAPIVersionMismatch : needed=".concat(l.join("."),", current=").concat(A.join("."))}),l[1]>A[1]&&_("The minor api version is not uptodate, you probably have to update docxtemplater with npm install --save docxtemplater",{neededVersion:l,currentModuleApiVersion:A,explanation:"moduleAPIVersionMismatch : needed=".concat(l.join("."),", current=").concat(A.join("."))}),!0}},{key:"setModules",value:function(l){this.modules.forEach(function(S){S.set(l)})}},{key:"sendEvent",value:function(l){this.modules.forEach(function(S){S.on(l)})}},{key:"attachModule",value:function(l){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=S.prefix;L&&(l.prefix=L);var a=p(l);return this.modules.push(a),a.on("attached"),this}},{key:"setOptions",value:function(l){var S=this;return l.delimiters&&(l.delimiters.start=i(l.delimiters.start),l.delimiters.end=i(l.delimiters.end)),this.options=l,Object.keys(N).forEach(function(L){var a=N[L];S.options[L]=S.options[L]!=null?S.options[L]:a,S[L]=S.options[L]}),this.zip&&this.updateFileTypeConfig(),this}},{key:"loadZip",value:function(l){if(l.loadAsync)throw new k("Docxtemplater doesn't handle JSZip version >=3, see changelog");return this.zip=l,this.updateFileTypeConfig(),this.modules=w([this.fileTypeConfig.baseModules.map(function(S){return S()}),this.modules]),this}},{key:"compileFile",value:function(l){var S=this.createTemplateClass(l);S.parse(),this.compiled[l]=S}},{key:"resolveData",value:function(l){var S=this;return Promise.all(Object.keys(this.compiled).map(function(L){var a=S.compiled[L];return a.resolveTags(l)})).then(function(L){return w(L)})}},{key:"compile",value:function(){var l=this;return Object.keys(this.compiled).length?this:(this.options=this.modules.reduce(function(S,L){return L.optionsTransformer(S,l)},this.options),this.options.xmlFileNames=I(this.options.xmlFileNames),this.xmlDocuments=this.options.xmlFileNames.reduce(function(S,L){var a=l.zip.files[L].asText();return S[L]=C(a),S},{}),this.setModules({zip:this.zip,xmlDocuments:this.xmlDocuments}),this.getTemplatedFiles(),this.setModules({compiled:this.compiled}),this.templatedFiles.forEach(function(S){l.zip.files[S]!=null&&l.compileFile(S)}),this)}},{key:"updateFileTypeConfig",value:function(){var l;return this.zip.files.mimetype&&(l="odt"),(this.zip.files["word/document.xml"]||this.zip.files["word/document2.xml"])&&(l="docx"),this.zip.files["ppt/presentation.xml"]&&(l="pptx"),l==="odt"&&g(l),l||u(),this.fileType=l,this.fileTypeConfig=this.options.fileTypeConfig||P.FileTypeConfig[this.fileType],this}},{key:"render",value:function(){var l=this;return this.compile(),this.setModules({data:this.data,Lexer:x}),this.mapper=this.modules.reduce(function(S,L){return L.getRenderedMap(S)},{}),this.fileTypeConfig.tagsXmlLexedArray=I(this.fileTypeConfig.tagsXmlLexedArray),this.fileTypeConfig.tagsXmlTextArray=I(this.fileTypeConfig.tagsXmlTextArray),Object.keys(this.mapper).forEach(function(S){var L=l.mapper[S],a=L.from,v=L.data,o=l.compiled[a];o.setTags(v),o.render(S),l.zip.file(S,o.content,{createFolders:!0})}),this.sendEvent("syncing-zip"),this.syncZip(),this}},{key:"syncZip",value:function(){var l=this;Object.keys(this.xmlDocuments).forEach(function(S){l.zip.remove(S);var L=T(l.xmlDocuments[S]);return l.zip.file(S,L,{createFolders:!0})})}},{key:"setData",value:function(l){return this.data=l,this}},{key:"getZip",value:function(){return this.zip}},{key:"createTemplateClass",value:function(l){var S=this.zip.files[l].asText();return this.createTemplateClassFromContent(S,l)}},{key:"createTemplateClassFromContent",value:function(l,S){var L=this,a={filePath:S};return Object.keys(N).forEach(function(v){a[v]=L[v]}),a.fileTypeConfig=this.fileTypeConfig,a.modules=this.modules,new P.XmlTemplater(l,a)}},{key:"getFullText",value:function(l){return this.createTemplateClass(l||this.fileTypeConfig.textPath(this.zip)).getFullText()}},{key:"getTemplatedFiles",value:function(){return this.templatedFiles=this.fileTypeConfig.getTemplatedFiles(this.zip),this.templatedFiles}}]),P}();q.DocUtils=d,q.Errors=c("./errors"),q.XmlTemplater=c("./xml-templater"),q.FileTypeConfig=c("./file-type-config"),q.XmlMatcher=c("./xml-matcher"),j.exports=q},{"./doc-utils":4,"./errors":6,"./file-type-config":7,"./lexer":8,"./module-wrapper":10,"./traits":22,"./xml-matcher":23,"./xml-templater":24}],6:[function(c,j,U){function s(r){for(var y=1;y<arguments.length;y++){var B=arguments[y]!=null?arguments[y]:{},F=Object.keys(B);typeof Object.getOwnPropertySymbols=="function"&&(F=F.concat(Object.getOwnPropertySymbols(B).filter(function(H){return Object.getOwnPropertyDescriptor(B,H).enumerable}))),F.forEach(function(H){t(r,H,B[H])})}return r}function t(r,y,B){return y in r?Object.defineProperty(r,y,{value:B,enumerable:!0,configurable:!0,writable:!0}):r[y]=B,r}function m(r){return r[0]}function d(r){return r[r.length-1]}function x(r){this.name="GenericError",this.message=r,this.stack=new Error(r).stack}x.prototype=Error.prototype;function N(r){this.name="TemplateError",this.message=r,this.stack=new Error(r).stack}N.prototype=new x;function C(r){this.name="RenderingError",this.message=r,this.stack=new Error(r).stack}C.prototype=new x;function T(r){this.name="ScopeParserError",this.message=r,this.stack=new Error(r).stack}T.prototype=new x;function p(r){this.name="InternalError",this.properties={explanation:"InternalError"},this.message=r,this.stack=new Error(r).stack}p.prototype=new x;function i(r){this.name="APIVersionError",this.properties={explanation:"APIVersionError"},this.message=r,this.stack=new Error(r).stack}i.prototype=new x;function w(r,y){var B=new i(r);throw B.properties=s({id:"api_version_error"},y),B}function I(r){var y=new N("Multi error");throw y.properties={errors:r,id:"multi_error",explanation:"The template has multiple errors"},y}function b(r){var y=new N("Unopened tag");return y.properties={xtag:d(r.xtag.split(" ")),id:"unopened_tag",context:r.xtag,offset:r.offset,lIndex:r.lIndex,explanation:'The tag beginning with "'.concat(r.xtag.substr(0,10),'" is unopened')},y}function k(r){var y=new N("Unclosed tag");return y.properties={xtag:m(r.xtag.split(" ")).substr(1),id:"unclosed_tag",context:r.xtag,offset:r.offset,lIndex:r.lIndex,explanation:'The tag beginning with "'.concat(r.xtag.substr(0,10),'" is unclosed')},y}function u(r){var y=new N('No tag "'.concat(r.element,'" was found at the ').concat(r.position));throw y.properties={id:"no_xml_tag_found_at_".concat(r.position),explanation:'No tag "'.concat(r.element,'" was found at the ').concat(r.position),part:r.parsed[r.index],parsed:r.parsed,index:r.index,element:r.element},y}function g(r){var y=r.tag,B=r.value,F=new C("There are some XML corrupt characters");throw F.properties={id:"invalid_xml_characters",xtag:y,value:B,explanation:"There are some corrupt characters for the field ${tag}"},F}function _(r){var y=new p("Content must be a string");throw y.properties.id="xmltemplater_content_must_be_string",y.properties.type=r,y}function A(r){var y=new N("Raw tag not in paragraph"),B=r.part,F=B.value,H=B.offset;throw y.properties={id:"raw_tag_outerxml_invalid",explanation:'The tag "'.concat(F,'" is not inside a paragraph'),rootError:r.rootError,xtag:F,offset:H,postparsed:r.postparsed,expandTo:r.expandTo,index:r.index},y}function q(r){var y=new N("Raw tag should be the only text in paragraph"),B=r.part.value;throw y.properties={id:"raw_xml_tag_should_be_only_text_in_paragraph",explanation:'The raw tag "'.concat(B,'" should be the only text in this paragraph. This means that this tag should not be surrounded by any text or spaces.'),xtag:B,offset:r.part.offset,paragraphParts:r.paragraphParts},y}function P(r){var y=r.location,B=y==="start"?"unclosed":"unopened",F=y==="start"?"Unclosed":"Unopened",H=new N("".concat(F," loop")),Y=r.part.value;return H.properties={id:"".concat(B,"_loop"),explanation:'The loop with tag "'.concat(Y,'" is ').concat(B),xtag:Y},H}function O(r){var y=r.tags,B=new N("Closing tag does not match opening tag");return B.properties={id:"closing_tag_does_not_match_opening_tag",explanation:'The tag "'.concat(y[0].value,'" is closed by the tag "').concat(y[1].value,'"'),openingtag:y[0].value,offset:[y[0].offset,y[1].offset],closingtag:y[1].value},B}function l(r){var y=r.tag,B=r.rootError,F=new T("Scope parser compilation failed");return F.properties={id:"scopeparser_compilation_failed",tag:y,explanation:'The scope parser for the tag "'.concat(y,'" failed to compile'),rootError:B},F}function S(r){var y=r.tag,B=r.scope,F=r.error,H=new T("Scope parser execution failed");return H.properties={id:"scopeparser_execution_failed",explanation:"The scope parser for the tag ".concat(y," failed to execute"),scope:B,tag:y,rootError:F},H}function L(r){var y=r.tag,B=new N('The position of the loop tags "'.concat(y,'" would produce invalid XML'));return B.properties={tag:y,id:"loop_position_invalid",explanation:'The tags "'.concat(y,'" are misplaced in the document, for example one of them is in a table and the other one outside the table')},B}function a(r){var y=new N('Unimplemented tag type "'.concat(r.type,'"'));throw y.properties={part:r,id:"unimplemented_tag_type"},y}function v(r){var y=new p("Malformed xml");throw y.properties={part:r,id:"malformed_xml"},y}function o(r){throw new p('Location should be one of "start" or "end" (given : '.concat(r.location,")"))}function h(r){var y=new p('The filetype "'.concat(r,'" is not handled by docxtemplater'));throw y.properties={id:"filetype_not_handled",explanation:'The file you are trying to generate is of type "'.concat(r,'", but only docx and pptx formats are handled'),fileType:r},y}function R(){var r=new p("The filetype for this file could not be identified, is this file corrupted ?");throw r.properties={id:"filetype_not_identified"},r}function D(r,y){var B=new N("An XML file has invalid xml");throw B.properties={id:"file_has_invalid_xml",content:r,offset:y,explanation:"The docx contains invalid XML, it is most likely corrupt"},B}j.exports={XTError:x,XTTemplateError:N,XTInternalError:p,XTScopeParserError:T,XTAPIVersionError:i,RenderingError:C,getClosingTagNotMatchOpeningTag:O,getLoopPositionProducesInvalidXMLError:L,getScopeCompilationError:l,getScopeParserExecutionError:S,getUnclosedTagException:k,getUnmatchedLoopException:P,getUnopenedTagException:b,throwApiVersionError:w,throwContentMustBeString:_,throwCorruptCharacters:g,throwFileTypeNotHandled:h,throwFileTypeNotIdentified:R,throwLocationInvalid:o,throwMalformedXml:v,throwMultiError:I,throwRawTagNotInParagraph:A,throwRawTagShouldBeOnlyTextInParagraph:q,throwUnimplementedTagType:a,throwXmlTagNotFound:u,throwXmlInvalid:D}},{}],7:[function(c,j,U){var s=c("./modules/loop"),t=c("./modules/space-preserve"),m=c("./modules/rawxml"),d=c("./modules/expand-pair-trait"),x=c("./modules/render"),N={getTemplatedFiles:function(p){var i=p.file(/ppt\/(slides|slideMasters)\/(slide|slideMaster)\d+\.xml/).map(function(w){return w.name});return i.concat(["ppt/presentation.xml","docProps/app.xml","docProps/core.xml"])},textPath:function(){return"ppt/slides/slide1.xml"},tagsXmlTextArray:["Company","HyperlinkBase","Manager","cp:category","cp:keywords","dc:creator","dc:description","dc:subject","dc:title","a:t","m:t","vt:lpstr"],tagsXmlLexedArray:["p:sp","a:tc","a:tr","a:table","a:p","a:r","a:rPr"],expandTags:[{contains:"a:tc",expand:"a:tr"}],onParagraphLoop:[{contains:"a:p",expand:"a:p",onlyTextInTag:!0}],tagRawXml:"p:sp",tagTextXml:"a:t",baseModules:[s,d,m,x]},C={getTemplatedFiles:function(p){var i=["docProps/core.xml","docProps/app.xml","word/document.xml","word/document2.xml"],w=p.file(/word\/(header|footer)\d+\.xml/).map(function(I){return I.name});return w.concat(i)},textPath:function(p){if(p.files["word/document.xml"])return"word/document.xml";if(p.files["word/document2.xml"])return"word/document2.xml"},tagsXmlTextArray:["Company","HyperlinkBase","Manager","cp:category","cp:keywords","dc:creator","dc:description","dc:subject","dc:title","w:t","m:t","vt:lpstr"],tagsXmlLexedArray:["w:tc","w:tr","w:table","w:p","w:r","w:rPr","w:pPr","w:spacing"],expandTags:[{contains:"w:tc",expand:"w:tr"}],onParagraphLoop:[{contains:"w:p",expand:"w:p",onlyTextInTag:!0}],tagRawXml:"w:p",tagTextXml:"w:t",baseModules:[s,t,d,m,x]};j.exports={docx:C,pptx:N}},{"./modules/expand-pair-trait":11,"./modules/loop":12,"./modules/rawxml":13,"./modules/render":14,"./modules/space-preserve":15}],8:[function(c,j,U){function s(o,h){return d(o)||m(o,h)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(o,h){var R=[],D=!0,r=!1,y=void 0;try{for(var B=o[Symbol.iterator](),F;!(D=(F=B.next()).done)&&(R.push(F.value),!(h&&R.length===h));D=!0);}catch(H){r=!0,y=H}finally{try{!D&&B.return!=null&&B.return()}finally{if(r)throw y}}return R}function d(o){if(Array.isArray(o))return o}var x=c("./errors"),N=x.getUnclosedTagException,C=x.getUnopenedTagException,T=x.throwMalformedXml,p=x.throwXmlInvalid,i=c("./doc-utils"),w=i.concatArrays,I=i.isTextStart,b=i.isTextEnd,k=0,u=-1,g=1;function _(o,h){return o[0]<=h.offset&&h.offset<o[1]}function A(o,h){return I(o)?(h&&T(o),!0):b(o)?(h||T(o),!1):h}function q(o){var h="start",R=1;o[o.length-2]==="/"&&(h="selfclosing"),o[1]==="/"&&(R=2,h="end");var D=o.indexOf(" "),r=D===-1?o.length-1:D;return{tag:o.slice(R,r),position:h}}function P(o,h,R){for(var D=0,r=o.length,y=w([h.map(function(J){return{tag:J,text:!0}}),R.map(function(J){return{tag:J,text:!1}})]).reduce(function(J,z){return J[z.tag]=z.text,J},{}),B=[];D<r&&(D=o.indexOf("<",D),D!==-1);){var F=D,H=o.indexOf("<",D+1);D=o.indexOf(">",D),(D===-1||H!==-1&&D>H)&&p(o,F);var Y=o.slice(F,D+1),G=q(Y),$=G.tag,te=G.position,Q=y[$];Q!=null&&B.push({type:"tag",position:te,text:Q,offset:F,value:Y,tag:$})}return B}function O(o,h,R){if(o.length===0)return[];var D=[],r=!1,y={offset:0},B,F=0;o.forEach(function(Y){for(;R[F+1]&&!(R[F+1].offset>Y.offset);)F++;B=h.substr(y.offset,Y.offset-y.offset),Y.position==="start"&&r||Y.position==="end"&&!r?Y.position==="start"?(D.push(N({xtag:B,offset:y.offset})),Y.error=!0):(D.push(C({xtag:B,offset:Y.offset})),Y.error=!0):r=!r,y=Y});var H={offset:h.length};return B=h.substr(y.offset,H.offset-y.offset),r&&(D.push(N({xtag:B,offset:y.offset})),H.error=!0),D}function l(o,h){return o===h?k:o===-1||h===-1?h<o?u:g:o<h?u:g}function S(o){var h=o.split(" ");if(h.length!==2)throw new Error("New Delimiters cannot be parsed");var R=s(h,2),D=R[0],r=R[1];if(D.length===0||r.length===0)throw new Error("New Delimiters cannot be parsed");return[D,r]}function L(o,h){for(var R=[],D=h.start,r=h.end,y=-1;;){var B=o.indexOf(D,y+1),F=o.indexOf(r,y+1),H=null,Y=void 0,G=l(B,F);if(G===k)return R;if(G===g&&(y=F,H="end",Y=r.length),G===u&&(y=B,H="start",Y=D.length),H==="start"&&o[y+D.length]==="="){R.push({offset:B,position:"start",length:D.length,changedelimiter:!0});var $=o.indexOf("=",y+D.length+1),te=o.indexOf(r,$+1);R.push({offset:te,position:"end",length:r.length,changedelimiter:!0});var Q=o.substr(y+D.length+1,$-y-D.length-1),J=S(Q),z=s(J,2);D=z[0],r=z[1],y=te;continue}R.push({offset:y,position:H,length:Y})}}function a(o){var h=this;this.innerContentParts=o,this.full="",this.parseDelimiters=function(R){h.full=h.innerContentParts.map(function(Y){return Y.value}).join("");var D=L(h.full,R),r=0,y=h.innerContentParts.map(function(Y){return r+=Y.value.length,{offset:r-Y.value.length,lIndex:Y.lIndex}}),B=O(D,h.full,y),F=0,H=0;h.parsed=y.map(function(Y,G){for(var $=Y.offset,te=[$,$+this.innerContentParts[G].value.length],Q=this.innerContentParts[G].value,J=[];H<D.length&&_(te,D[H]);)J.push(D[H]),H++;var z=[],Z=0;F>0&&(Z=F,F=0);var X;J.forEach(function(K){var ee=Q.substr(Z,K.offset-$-Z);if(ee.length>0){if(X){K.changedelimiter&&(Z=K.offset-$+K.length,X=K.position==="start");return}z.push({type:"content",value:ee,offset:Z+$}),Z+=ee.length}var ie={type:"delimiter",position:K.position,offset:Z+$};if(K.error&&(ie.error=K.error),K.changedelimiter){X=K.position==="start",Z=K.offset-$+K.length;return}z.push(ie),Z=K.offset-$+K.length}),F=Z-Q.length;var V=Q.substr(Z);return V.length>0&&z.push({type:"content",value:V,offset:$}),z},h),h.errors=B}}function v(o){var h=!1,R=[];return o.forEach(function(D){h=A(D,h),h&&D.type==="content"&&R.push(D)}),R}j.exports={parse:function(h,R){var D=!1,r=new a(v(h));r.parseDelimiters(R);var y=[],B=0;return h.forEach(function(F){D=A(F,D),F.type==="content"&&(F.position=D?"insidetag":"outsidetag"),D&&F.type==="content"?(Array.prototype.push.apply(y,r.parsed[B].map(function(H){return H.type==="content"&&(H.position="insidetag"),H})),B++):y.push(F)}),y=y.map(function(F,H){return F.lIndex=H,F}),{errors:r.errors,lexed:y}},xmlparse:function(h,R){var D=P(h,R.text,R.other),r=0,y=D.reduce(function(F,H){var Y=h.substr(r,H.offset-r);return Y.length>0&&F.push({type:"content",value:Y}),r=H.offset+H.value.length,delete H.offset,H.value.length>0&&F.push(H),F},[]),B=h.substr(r);return B.length>0&&y.push({type:"content",value:B}),y}}},{"./doc-utils":4,"./errors":6}],9:[function(c,j,U){function s(t,m){for(var d=-1,x=0,N=t.length;x<N;x++)m[x]>=t[x].length||(d===-1||t[x][m[x]].offset<t[d][m[d]].offset)&&(d=x);if(d===-1)throw new Error("minIndex negative");return d}j.exports=function(t){var m=t.reduce(function(T,p){return T+p.length},0);t=t.filter(function(T){return T.length>0});for(var d=new Array(m),x=t.map(function(){return 0}),N=0;N<=m-1;){var C=s(t,x);d[N]=t[C][x[C]],x[C]++,N++}return d}},{}],10:[function(c,j,U){function s(){}function t(m){return m}j.exports=function(m){var d={set:s,parse:s,render:s,getTraits:s,nullGetter:s,optionsTransformer:t,postrender:t,errorsTransformer:t,getRenderedMap:t,postparse:t,on:s,resolve:s};if(Object.keys(d).every(function(x){return!m[x]}))throw new Error("This module cannot be wrapped, because it doesn't define any of the necessary functions");return Object.keys(d).forEach(function(x){m[x]=m[x]||d[x]}),m}},{}],11:[function(c,j,U){function s(l,S){return d(l)||m(l,S)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(l,S){var L=[],a=!0,v=!1,o=void 0;try{for(var h=l[Symbol.iterator](),R;!(a=(R=h.next()).done)&&(L.push(R.value),!(S&&L.length===S));a=!0);}catch(D){v=!0,o=D}finally{try{!a&&h.return!=null&&h.return()}finally{if(v)throw o}}return L}function d(l){if(Array.isArray(l))return l}var x="expandPair",N=c("../mergesort"),C=c("../doc-utils"),T=C.getLeft,p=C.getRight,i=C.getNearestLeft,w=C.getNearestRight,I=c("../module-wrapper"),b=c("../traits"),k=b.getExpandToDefault,u=c("../errors"),g=u.getUnmatchedLoopException,_=u.getClosingTagNotMatchOpeningTag,A=u.throwLocationInvalid;function q(l){switch(l.location){case"start":return 1;case"end":return-1;default:A(l)}}function P(l){var S=[],L=[];if(l.length===0)return{pairs:L,errors:S};var a=1,v=s(l,1),o=v[0];if(o.part.location==="start")for(var h=1;h<l.length;h++){var R=l[h];if(a+=q(R.part),a===0){var D=P(l.slice(h+1));return R.part.value!==o.part.value&&R.part.value!==""?S.push(_({tags:[o.part,R.part]})):L=[[o,R]],{pairs:L.concat(D.pairs),errors:S.concat(D.errors)}}}var r=o.part;S.push(g({part:r,location:r.location}));var y=P(l.slice(1));return{pairs:y.pairs,errors:S.concat(y.errors)}}var O={name:"ExpandPairTrait",optionsTransformer:function(S,L){return this.expandTags=L.fileTypeConfig.expandTags.concat(L.options.paragraphLoop?L.fileTypeConfig.onParagraphLoop:[]),S},postparse:function(S,L){var a=this,v=L.getTraits,o=L.postparse,h=v(x,S);h=h.map(function(Y){return Y||[]}),h=N(h);var R=P(h),D=R.pairs,r=R.errors,y=D.map(function(Y){var G=Y[0].part.expandTo;if(G==="auto"){var $=k(S,Y,a.expandTags);$.error&&r.push($.error),G=$.value}if(!G)return[Y[0].offset,Y[1].offset];var te=T(S,G,Y[0].offset),Q=p(S,G,Y[1].offset);return[te,Q]}),B=0,F,H=S.reduce(function(Y,G,$){var te=B<D.length&&y[B][0]<=$,Q=D[B],J=y[B];if(!te)return Y.push(G),Y;var z=J[0],Z=J[1],X=i(S,["w:p","w:tc"],z-1),V=w(S,["w:p","w:tc"],Z+1);if(X==="w:tc"&&V==="w:tc"&&(G.emptyValue="<w:p></w:p>"),J[0]===$&&(F=[]),Q[0].offset!==$&&Q[1].offset!==$&&F.push(G),J[1]===$){var K=S[Q[0].offset];K.subparsed=o(F,{basePart:K}),delete K.location,delete K.expandTo,Y.push(K),B++}return Y},[]);return{postparsed:H,errors:r}}};j.exports=function(){return I(O)}},{"../doc-utils":4,"../errors":6,"../mergesort":9,"../module-wrapper":10,"../traits":22}],12:[function(c,j,U){function s(a,v){return d(a)||m(a,v)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(a,v){var o=[],h=!0,R=!1,D=void 0;try{for(var r=a[Symbol.iterator](),y;!(h=(y=r.next()).done)&&(o.push(y.value),!(v&&o.length===v));h=!0);}catch(B){R=!0,D=B}finally{try{!h&&r.return!=null&&r.return()}finally{if(R)throw D}}return o}function d(a){if(Array.isArray(a))return a}function x(a,v){if(!(a instanceof v))throw new TypeError("Cannot call a class as a function")}function N(a,v){for(var o=0;o<v.length;o++){var h=v[o];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(a,h.key,h)}}function C(a,v,o){return v&&N(a.prototype,v),o&&N(a,o),a}var T=c("../doc-utils"),p=T.mergeObjects,i=T.chunkBy,w=T.last,I=T.isParagraphStart,b=T.isParagraphEnd,k=T.isContent,u=c("../module-wrapper"),g=c("../prefix-matcher"),_=g.match,A=g.getValue,q=g.getValues,P="loop";function O(a){return a.some(function(v){return k(v)})}function l(a){return a.length===0?!1:I(a[0])&&b(w(a))}function S(a){return O(a)?0:a.length}var L=function(){function a(){x(this,a),this.name="LoopModule",this.prefix={start:"#",end:"/",dash:/^-([^\s]+)\s(.+)$/,inverted:"^"}}return C(a,[{key:"parse",value:function(o){var h=P,R="placeholder",D=this.prefix,r=D.start,y=D.inverted,B=D.dash,F=D.end;if(_(r,o))return{type:R,value:A(r,o),expandTo:"auto",module:h,location:"start",inverted:!1};if(_(y,o))return{type:R,value:A(y,o),expandTo:"auto",module:h,location:"start",inverted:!0};if(_(F,o))return{type:R,value:A(F,o),module:h,location:"end"};if(_(B,o)){var H=q(B,o),Y=s(H,3),G=Y[1],$=Y[2];return{type:R,value:$,expandTo:G,module:h,location:"start",inverted:!1}}return null}},{key:"getTraits",value:function(o,h){if(o==="expandPair")return h.reduce(function(R,D,r){return D.type==="placeholder"&&D.module===P&&R.push({part:D,offset:r}),R},[])}},{key:"postparse",value:function(o,h){var R=h.basePart;if(!l(o)||!R||R.expandTo!=="auto"||R.module!==P)return o;var D=i(o,function(H){return I(H)?"start":b(H)?"end":null});if(D.length<=2)return o;var r=D[0],y=w(D),B=S(r),F=S(y);return B===0||F===0?o:o.slice(B,o.length-F)}},{key:"render",value:function(o,h){if(o.type!=="placeholder"||o.module!==P)return null;var R=[],D=[];function r(B,F){var H=h.scopeManager.createSubScopeManager(B,o.value,F,o),Y=h.render(p({},h,{compiled:o.subparsed,tags:{},scopeManager:H}));R=R.concat(Y.parts),D=D.concat(Y.errors||[])}var y=h.scopeManager.loopOver(o.value,r,o.inverted,{part:o});return y===!1?{value:o.emptyValue||"",errors:D}:{value:R.join(""),errors:D}}},{key:"resolve",value:function(o,h){if(o.type!=="placeholder"||o.module!==P)return null;var R=h.scopeManager.getValue(o.value,{part:o}),D=[];function r(y,B){var F=h.scopeManager.createSubScopeManager(y,o.value,B,o);D.push(h.resolve(p(h,{compiled:o.subparsed,tags:{},scopeManager:F})))}return Promise.resolve(R).then(function(y){return h.scopeManager.loopOverValue(y,r,o.inverted),Promise.all(D).then(function(B){return B.map(function(F){var H=F.resolved;return H})})}).then(function(y){return y})}}]),a}();j.exports=function(){return u(new L)}},{"../doc-utils":4,"../module-wrapper":10,"../prefix-matcher":18}],13:[function(c,j,U){function s(A,q){if(!(A instanceof q))throw new TypeError("Cannot call a class as a function")}function t(A,q){for(var P=0;P<q.length;P++){var O=q[P];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(A,O.key,O)}}function m(A,q,P){return q&&t(A.prototype,q),P&&t(A,P),A}var d=c("../traits"),x=c("../doc-utils"),N=x.isContent,C=x.getNearestLeft,T=x.getNearestRight,p=c("../errors"),i=p.throwRawTagShouldBeOnlyTextInParagraph,w=c("../prefix-matcher"),I=w.match,b=w.getValue,k="rawxml",u=c("../module-wrapper");function g(A){var q=A.part,P=A.left,O=A.right,l=A.postparsed,S=A.index,L=C(l,["w:p","w:tc"],P-1),a=T(l,["w:p","w:tc"],O+1);a==="w:tc"&&L==="w:tc"&&(q.emptyValue="<w:p></w:p>");var v=l.slice(P+1,O);return v.forEach(function(o,h){h!==S-P-1&&N(o)&&i({paragraphParts:v,part:q})}),q}var _=function(){function A(){s(this,A),this.name="RawXmlModule",this.prefix="@"}return m(A,[{key:"optionsTransformer",value:function(P,O){return this.fileTypeConfig=O.fileTypeConfig,P}},{key:"parse",value:function(P){var O="placeholder";return I(this.prefix,P)?{type:O,value:b(this.prefix,P),module:k}:null}},{key:"postparse",value:function(P){return d.expandToOne(P,{moduleName:k,getInner:g,expandTo:this.fileTypeConfig.tagRawXml})}},{key:"render",value:function(P,O){if(P.module!==k)return null;var l=O.scopeManager.getValue(P.value,{part:P});return l==null&&(l=O.nullGetter(P)),l?{value:l}:{value:P.emptyValue||""}}},{key:"resolve",value:function(P,O){return P.type!=="placeholder"||P.module!==k?null:O.scopeManager.getValueAsync(P.value,{part:P}).then(function(l){return l==null?O.nullGetter(P):l})}}]),A}();j.exports=function(){return u(new _)}},{"../doc-utils":4,"../errors":6,"../module-wrapper":10,"../prefix-matcher":18,"../traits":22}],14:[function(c,j,U){function s(k,u){if(!(k instanceof u))throw new TypeError("Cannot call a class as a function")}function t(k,u){for(var g=0;g<u.length;g++){var _=u[g];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(k,_.key,_)}}function m(k,u,g){return u&&t(k.prototype,u),g&&t(k,g),k}var d=c("../module-wrapper"),x=c("../errors"),N=x.getScopeCompilationError,C=c("../doc-utils"),T=C.utf8ToWord,p=C.hasCorruptCharacters,i=c("../errors"),w=i.throwCorruptCharacters,I={docx:"w",pptx:"a"},b=function(){function k(){s(this,k),this.name="Render",this.recordRun=!1,this.recordedRun=[]}return m(k,[{key:"set",value:function(g){g.compiled&&(this.compiled=g.compiled),g.data!=null&&(this.data=g.data)}},{key:"getRenderedMap",value:function(g){var _=this;return Object.keys(this.compiled).reduce(function(A,q){return A[q]={from:q,data:_.data},A},g)}},{key:"optionsTransformer",value:function(g,_){return this.parser=_.parser,this.fileType=_.fileType,g}},{key:"postparse",value:function(g){var _=this,A=[];return g.forEach(function(q){if(q.type==="placeholder"){var P=q.value;try{_.parser(P,{tag:q})}catch(O){A.push(N({tag:P,rootError:O}))}}}),{postparsed:g,errors:A}}},{key:"recordRuns",value:function(g){g.tag==="".concat(I[this.fileType],":r")?(this.recordRun=!1,this.recordedRun=[]):g.tag==="".concat(I[this.fileType],":rPr")?(g.position==="start"&&(this.recordRun=!0,this.recordedRun=[g.value]),g.position==="end"&&(this.recordedRun.push(g.value),this.recordRun=!1)):this.recordRun&&this.recordedRun.push(g.value)}},{key:"render",value:function(g,_){var A=_.scopeManager,q=_.linebreaks,P=_.nullGetter;if(q&&this.recordRuns(g),g.type==="placeholder"&&!g.module){var O=A.getValue(g.value,{part:g});if(O==null&&(O=P(g)),p(O)&&w({tag:g.value,value:O}),typeof O!="string"&&(O=O.toString()),q){var l=I[this.fileType],S=this.fileType==="docx"?"<w:r><w:br/></w:r>":"<a:br/>",L=O.split(`
`),a=this.recordedRun.join("");return{value:L.map(function(v){return T(v)}).join("</".concat(l,":t></").concat(l,":r>").concat(S,"<").concat(l,":r>").concat(a,"<").concat(l,":t").concat(this.fileType==="docx"?' xml:space="preserve"':"",">"))}}return{value:T(O)}}}}]),k}();j.exports=function(){return d(new b)}},{"../doc-utils":4,"../errors":6,"../module-wrapper":10}],15:[function(c,j,U){var s=c("../module-wrapper"),t=c("../doc-utils"),m=t.isTextStart,d=t.isTextEnd,x=t.endsWith,N=t.startsWith,C='<w:t xml:space="preserve">',T=C.length,p="</w:t>",i=p.length;function w(u){return m(u)&&u.tag==="w:t"}function I(u,g){var _=u[g].value;return u[g+1].value==="</w:t>"||_.indexOf('xml:space="preserve"')!==-1?_:_.substr(0,_.length-1)+' xml:space="preserve">'}function b(u,g){return u&&u.basePart&&g.length>1}var k={name:"SpacePreserveModule",postparse:function(g,_){var A=[],q=!1,P=0,O=0;function l(L,a){return!P&&L.type==="placeholder"&&(!L.module||L.module==="loop")&&a.length>1}var S=g.reduce(function(L,a){return w(a)&&(q=!0,O=A.length),q?(A.push(a),b(_,A)&&(P=_.basePart.endLindex,A[0].value=I(A,0)),l(a,A)&&(P=a.endLindex,A[0].value=I(A,0)),d(a)&&a.lIndex>P&&(P!==0&&(A[O].value=I(A,O)),Array.prototype.push.apply(L,A),A=[],q=!1,P=0,O=0),L):(L.push(a),L)},[]);return Array.prototype.push.apply(S,A),S},postrender:function(g){return g.filter(function(_){return _.length!==0}).reduce(function(_,A,q,P){return A.indexOf('<w:t xml:space="preserve"></w:t>')!==-1&&(A=A.replace(/<w:t xml:space="preserve"><\/w:t>/g,"<w:t/>")),x(A,C)&&N(P[q+1],p)&&(A=A.substr(0,A.length-T)+"<w:t/>",P[q+1]=P[q+1].substr(i)),_.push(A),_},[])}};j.exports=function(){return s(k)}},{"../doc-utils":4,"../module-wrapper":10}],16:[function(c,j,U){function s(T){for(var p=1;p<arguments.length;p++){var i=arguments[p]!=null?arguments[p]:{},w=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(w=w.concat(Object.getOwnPropertySymbols(i).filter(function(I){return Object.getOwnPropertyDescriptor(i,I).enumerable}))),w.forEach(function(I){t(T,I,i[I])})}return T}function t(T,p,i){return p in T?Object.defineProperty(T,p,{value:i,enumerable:!0,configurable:!0,writable:!0}):T[p]=i,T}var m=c("./doc-utils"),d=m.wordToUtf8,x=m.concatArrays;function N(T,p,i,w,I){for(var b,k=0,u=T.length;k<u;k++){var g=T[k];if(b=g.parse(p),b)return b.offset=w,b.endLindex=I,b.lIndex=I,b.raw=p,i.push(b),i}return i.push({type:"placeholder",value:p,offset:w,endLindex:I,lIndex:I}),i}var C={postparse:function(p,i){function w(k,u){return i.map(function(g){return g.getTraits(k,u)})}var I=[];function b(k,u){return i.reduce(function(g,_){var A=_.postparse(g,s({},u,{postparse:b,getTraits:w}));return A.errors?(I=x([I,A.errors]),A.postparsed):A},k)}return{postparsed:b(p),errors:I}},parse:function(p,i){var w=!1,I="",b,k=[];return p.reduce(function(g,_){if(_.type==="delimiter"){if(w=_.position==="start",_.position==="end"){var A=_.lIndex;I=d(I),g=N(i,I,g,b,A),b=null,Array.prototype.push.apply(g,k),k=[]}return _.position==="start"&&(k=[],b=_.offset),I="",g}return w?_.type!=="content"||_.position!=="insidetag"?(k.push(_),g):(I+=_.value,g):(g.push(_),g)},[])}};j.exports=C},{"./doc-utils":4}],17:[function(c,j,U){function s(t,m){for(var d=0,x=m.modules.length;d<x;d++){var N=m.modules[d];t=N.postrender(t,m)}return t.join("")}j.exports=s},{}],18:[function(c,j,U){function s(d,x){if(typeof d=="string")return x.substr(0,d.length)===d;if(d instanceof RegExp)return d.test(x)}function t(d,x){if(typeof d=="string")return x.substr(d.length);if(d instanceof RegExp)return x.match(d)[1]}function m(d,x){if(d instanceof RegExp)return x.match(d)}j.exports={match:s,getValue:t,getValues:m}},{}],19:[function(c,j,U){var s=c("./doc-utils"),t=s.concatArrays,m=c("./errors"),d=m.throwUnimplementedTagType;function x(C,T){for(var p,i=0,w=T.modules.length;i<w;i++){var I=T.modules[i];if(p=I.render(C,T),p)return p}return!1}function N(C){var T=C.baseNullGetter,p=C.compiled,i=C.scopeManager;C.nullGetter=function(b,k){return T(b,k||i)};var w=[],I=p.map(function(b){var k=x(b,C);if(k)return k.errors&&(w=t([w,k.errors])),k.value;if(b.type==="content"||b.type==="tag")return b.value;d(b)});return{errors:w,parts:I}}j.exports=N},{"./doc-utils":4,"./errors":6}],20:[function(c,j,U){function s(m,d){for(var x,N=0,C=d.modules.length;N<C;N++){var T=d.modules[N];if(x=T.resolve(m,d),x)return x}return!1}function t(m){var d=[],x=m.baseNullGetter,N=m.compiled,C=m.scopeManager;m.nullGetter=function(p,i){return x(p,i||C)},m.resolved=d;var T=[];return Promise.all(N.map(function(p){var i=s(p,m);if(i)return i.then(function(w){d.push({tag:p.value,value:w,lIndex:p.lIndex})});if(p.type==="placeholder")return C.getValueAsync(p.value,{part:p}).then(function(w){return w==null&&(w=m.nullGetter(p)),d.push({tag:p.value,value:w,lIndex:p.lIndex}),w})}).filter(function(p){return p})).then(function(){return{errors:T,resolved:d}})}j.exports=t},{}],21:[function(c,j,U){function s(i,w){if(!(i instanceof w))throw new TypeError("Cannot call a class as a function")}function t(i,w){for(var I=0;I<w.length;I++){var b=w[I];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(i,b.key,b)}}function m(i,w,I){return w&&t(i.prototype,w),I&&t(i,I),i}var d=c("./errors"),x=d.getScopeParserExecutionError;function N(i,w){for(var I=i.length>>>0,b,k=0;k<I;k++)if(b=i[k],w.call(this,b,k,i))return b}function C(i,w,I){var b=this;this.num=I;var k=this.scopeList[this.num];if(this.resolved){var u=this.resolved;return this.scopePath.forEach(function(A,q){var P=b.scopeLindex[q];u=N(u,function(O){return O.lIndex===P}),u=u.value[b.scopePathItem[q]]}),N(u,function(A){return w.part.lIndex===A.lIndex}).value}var g,_=this.parser(i,{scopePath:this.scopePath});try{g=_.get(k,this.getContext(w))}catch(A){throw x({tag:i,scope:k,error:A})}return g==null&&this.num>0?C.call(this,i,w,I-1):g}function T(i,w,I){var b=this;this.num=I;var k=this.scopeList[this.num],u=this.parser(i,{scopePath:this.scopePath});return Promise.resolve(u.get(k,this.getContext(w))).catch(function(g){throw x({tag:i,scope:k,error:g})}).then(function(g){return g==null&&I>0?T.call(b,i,w,I-1):g})}var p=function(){function i(w){s(this,i),this.scopePath=w.scopePath,this.scopePathItem=w.scopePathItem,this.scopeList=w.scopeList,this.scopeLindex=w.scopeLindex,this.parser=w.parser,this.resolved=w.resolved}return m(i,[{key:"loopOver",value:function(I,b,k,u){return k=k||!1,this.loopOverValue(this.getValue(I,u),b,k)}},{key:"functorIfInverted",value:function(I,b,k,u){return I&&b(k,u),I}},{key:"isValueFalsy",value:function(I,b){return I==null||!I||b==="[object Array]"&&I.length===0}},{key:"loopOverValue",value:function(I,b,k){this.resolved&&(k=!1);var u=Object.prototype.toString.call(I),g=this.scopeList[this.num];if(this.isValueFalsy(I,u))return this.functorIfInverted(k,b,g,0);if(u==="[object Array]"){for(var _=0,A;_<I.length;_++)A=I[_],this.functorIfInverted(!k,b,A,_);return!0}return u==="[object Object]"?this.functorIfInverted(!k,b,I,0):this.functorIfInverted(!k,b,g,0)}},{key:"getValue",value:function(I,b){var k=this.scopeList.length-1;return C.call(this,I,b,k)}},{key:"getValueAsync",value:function(I,b){var k=this.scopeList.length-1;return T.call(this,I,b,k)}},{key:"getContext",value:function(I){return{num:this.num,meta:I,scopeList:this.scopeList,resolved:this.resolved,scopePath:this.scopePath,scopePathItem:this.scopePathItem}}},{key:"createSubScopeManager",value:function(I,b,k,u){return new i({resolved:this.resolved,parser:this.parser,scopeList:this.scopeList.concat(I),scopePath:this.scopePath.concat(b),scopePathItem:this.scopePathItem.concat(k),scopeLindex:this.scopeLindex.concat(u.lIndex)})}}]),i}();j.exports=function(i){return i.scopePath=[],i.scopePathItem=[],i.scopeLindex=[],i.scopeList=[i.tags],new p(i)}},{"./errors":6}],22:[function(c,j,U){function s(L){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(v){return typeof v}:s=function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},s(L)}var t=c("./doc-utils"),m=t.getRightOrNull,d=t.getRight,x=t.getLeft,N=t.getLeftOrNull,C=t.concatArrays,T=t.chunkBy,p=t.isTagStart,i=t.isTagEnd,w=t.isContent,I=t.last,b=c("./errors"),k=b.XTTemplateError,u=b.throwRawTagNotInParagraph,g=b.getLoopPositionProducesInvalidXMLError;function _(L,a){if(L.length===0)return!1;var v=L[L.length-1],o=v.tag.substr(1),h=a.substr(2,a.length-3);return o.indexOf(h)===0}function A(L,a){return L.push({tag:a}),L}function q(L){for(var a=L.filter(function(R){return R.type==="tag"}),v=[],o=0,h;o<a.length;o++)h=a[o].value,h[1]==="/"?_(v,h)?v.pop():v=A(v,h):h[h.length-2]!=="/"&&(v=A(v,h));return v}function P(L,a){for(var v=0;v<a.length;v++){var o=a[v];if(o.tag.indexOf("<".concat(L))===0)return!0}return!1}function O(L,a,v){var o=L.slice(a[0].offset,a[1].offset),h=q(o),R=h.filter(function(H){return H.tag[1]==="/"}).length,D=h.filter(function(H){var Y=H.tag;return Y[1]!=="/"&&Y[Y.length-2]!=="/"}).length;if(R!==D)return{error:g({tag:a[0].part.value})};for(var r=function(Y,G){var $=v[Y],te=$.contains,Q=$.expand,J=$.onlyTextInTag;if(P(te,h)){if(J){var z=N(L,te,a[0].offset),Z=m(L,te,a[1].offset);if(z===null||Z===null)return"continue";var X=T(L.slice(z,Z),function(de){return p(te,de)?"start":i(te,de)?"end":null});if(X.length<=2)return"continue";var V=X[0],K=I(X),ee=V.filter(w),ie=K.filter(w);if(ee.length!==1||ie.length!==1)return"continue"}return{v:{value:Q}}}},y=0,B=v.length;y<B;y++){var F=r(y);switch(F){case"continue":continue;default:if(s(F)==="object")return F.v}}return!1}function l(L,a,v){var o=L.expandTo||v.expandTo,h=a.indexOf(L);if(!o)return a;var R,D;try{R=d(a,o,h),D=x(a,o,h)}catch(F){throw F instanceof k&&u({part:L,rootError:F,postparsed:a,expandTo:o,index:h}),F}var r=a.slice(D,h),y=a.slice(h+1,R+1),B=v.getInner({index:h,part:L,leftParts:r,rightParts:y,left:D,right:R,postparsed:a});return B.length||(B.expanded=[r,y],B=[B]),C([a.slice(0,D),B,a.slice(R+1)])}function S(L,a){var v=[];L.errors&&(v=L.errors,L=L.postparsed);var o=L.reduce(function(h,R){return R.type==="placeholder"&&R.module===a.moduleName&&h.push(R),h},[]);return o.forEach(function(h){try{L=l(h,L,a)}catch(R){if(R instanceof k)v.push(R);else throw R}}),{postparsed:L,errors:v}}j.exports={expandToOne:S,getExpandToDefault:O}},{"./doc-utils":4,"./errors":6}],23:[function(c,j,U){var s=c("./doc-utils"),t=s.pregMatchAll;function m(d){function x(){var T={array:Array.prototype.slice.call(arguments)};T.array.shift();var p=T.array[0]+T.array[1];T.array.unshift(p),T.array.pop();var i=T.array.pop();T.offset=i,T.first=!0,d.matches.unshift(T)}d.content.indexOf("<")===-1&&d.content.indexOf(">")===-1&&d.content.replace(/^()([^<>]*)$/,x);var N=new RegExp("^()([^<]+)</(?:".concat(d.tagsXmlArrayJoined,")>"));d.content.replace(N,x);function C(){var T={array:Array.prototype.slice.call(arguments)};T.array.pop();var p=T.array.pop();T.offset=p,T.last=!0,T.array[0].indexOf("/>")===-1&&d.matches.push(T)}return N=new RegExp("(<(?:".concat(d.tagsXmlArrayJoined,")[^>]*>)([^>]+)$")),d.content.replace(N,C),d}j.exports=function(x,N){var C={};C.content=x,C.tagsXmlArray=N,C.tagsXmlArrayJoined=C.tagsXmlArray.join("|");var T=new RegExp("(?:(<(?:".concat(C.tagsXmlArrayJoined,")[^>]*>)([^<>]*)</(?:").concat(C.tagsXmlArrayJoined,")>)|(<(?:").concat(C.tagsXmlArrayJoined,")[^>]*/>)"),"g");return C.matches=t(T,C.content),m(C)}},{"./doc-utils":4}],24:[function(c,j,U){function s(P){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(l){return typeof l}:s=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},s(P)}function t(P,O){if(!(P instanceof O))throw new TypeError("Cannot call a class as a function")}function m(P,O){for(var l=0;l<O.length;l++){var S=O[l];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(P,S.key,S)}}function d(P,O,l){return O&&m(P.prototype,O),l&&m(P,l),P}var x=c("./doc-utils"),N=x.wordToUtf8,C=x.convertSpaces,T=x.defaults,p=c("./scope-manager"),i=c("./xml-matcher"),w=c("./errors"),I=w.throwMultiError,b=w.throwContentMustBeString,k=c("./lexer"),u=c("./parser.js"),g=c("./render.js"),_=c("./postrender.js"),A=c("./resolve.js");function q(P,O){var l=i(P,O),S=l.matches.map(function(L){return L.array[2]});return N(C(S.join("")))}j.exports=function(){function P(O,l){t(this,P),this.filePath=l.filePath,this.modules=l.modules,this.fileTypeConfig=l.fileTypeConfig,Object.keys(T).map(function(S){this[S]=l[S]!=null?l[S]:T[S]},this),this.setModules({inspect:{filePath:this.filePath}}),this.load(O)}return d(P,[{key:"load",value:function(l){typeof l!="string"&&b(s(l)),this.content=l}},{key:"setTags",value:function(l){return this.tags=l!=null?l:{},this.scopeManager=p({tags:this.tags,parser:this.parser}),this}},{key:"resolveTags",value:function(l){var S=this;this.tags=l!=null?l:{},this.scopeManager=p({tags:this.tags,parser:this.parser});var L=this.getOptions();return L.scopeManager=p(L),L.resolve=A,A(L).then(function(a){var v=a.resolved;return Promise.all(v.map(function(o){return Promise.resolve(o)})).then(function(o){return S.setModules({inspect:{resolved:o}}),S.resolved=o})})}},{key:"getFullText",value:function(){return q(this.content,this.fileTypeConfig.tagsXmlTextArray)}},{key:"setModules",value:function(l){this.modules.forEach(function(S){S.set(l)})}},{key:"parse",value:function(){var l=[];this.xmllexed=k.xmlparse(this.content,{text:this.fileTypeConfig.tagsXmlTextArray,other:this.fileTypeConfig.tagsXmlLexedArray}),this.setModules({inspect:{xmllexed:this.xmllexed}});var S=k.parse(this.xmllexed,this.delimiters),L=S.lexed,a=S.errors;l=l.concat(a),this.lexed=L,this.setModules({inspect:{lexed:this.lexed}}),this.parsed=u.parse(this.lexed,this.modules),this.setModules({inspect:{parsed:this.parsed}});var v=u.postparse(this.parsed,this.modules),o=v.postparsed,h=v.errors;return this.postparsed=o,this.setModules({inspect:{postparsed:this.postparsed}}),l=l.concat(h),this.errorChecker(l),this}},{key:"errorChecker",value:function(l){var S=this;l.length&&(this.modules.forEach(function(L){l=L.errorsTransformer(l)}),l.forEach(function(L){L.properties.file=S.filePath}),I(l))}},{key:"baseNullGetter",value:function(l,S){var L=this,a=this.modules.reduce(function(v,o){return v!=null?v:o.nullGetter(l,S,L)},null);return a!=null?a:this.nullGetter(l,S)}},{key:"getOptions",value:function(){return{compiled:this.postparsed,tags:this.tags,modules:this.modules,parser:this.parser,baseNullGetter:this.baseNullGetter.bind(this),filePath:this.filePath,linebreaks:this.linebreaks}}},{key:"render",value:function(l){this.filePath=l;var S=this.getOptions();S.resolved=this.resolved,S.scopeManager=p(S),S.render=g;var L=g(S),a=L.errors,v=L.parts;return this.errorChecker(a),this.content=_(v,S),this.setModules({inspect:{content:this.content}}),this}}]),P}()},{"./doc-utils":4,"./errors":6,"./lexer":8,"./parser.js":16,"./postrender.js":17,"./render.js":19,"./resolve.js":20,"./scope-manager":21,"./xml-matcher":23}],25:[function(c,j,U){function s(i){this.options=i||{locator:{}}}s.prototype.parseFromString=function(i,w){var I=this.options,b=new T,k=I.domBuilder||new m,u=I.errorHandler,g=I.locator,_=I.xmlns||{},A={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return g&&k.setDocumentLocator(g),b.errorHandler=t(u,k,g),b.domBuilder=I.domBuilder||k,/\/x?html?$/.test(w)&&(A.nbsp="\xA0",A.copy="\xA9",_[""]="http://www.w3.org/1999/xhtml"),_.xml=_.xml||"http://www.w3.org/XML/1998/namespace",i?b.parse(i,_,A):b.errorHandler.error("invalid doc source"),k.doc};function t(i,w,I){if(!i){if(w instanceof m)return w;i=w}var b={},k=i instanceof Function;I=I||{};function u(g){var _=i[g];!_&&k&&(_=i.length==2?function(A){i(g,A)}:i),b[g]=_&&function(A){_("[xmldom "+g+"]	"+A+x(I))}||function(){}}return u("warning"),u("error"),u("fatalError"),b}function m(){this.cdata=!1}function d(i,w){w.lineNumber=i.lineNumber,w.columnNumber=i.columnNumber}m.prototype={startDocument:function(){this.doc=new p().createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(i,w,I,b){var k=this.doc,u=k.createElementNS(i,I||w),g=b.length;C(this,u),this.currentElement=u,this.locator&&d(this.locator,u);for(var _=0;_<g;_++){var i=b.getURI(_),A=b.getValue(_),I=b.getQName(_),q=k.createAttributeNS(i,I);this.locator&&d(b.getLocator(_),q),q.value=q.nodeValue=A,u.setAttributeNode(q)}},endElement:function(i,w,I){var b=this.currentElement;b.tagName,this.currentElement=b.parentNode},startPrefixMapping:function(i,w){},endPrefixMapping:function(i){},processingInstruction:function(i,w){var I=this.doc.createProcessingInstruction(i,w);this.locator&&d(this.locator,I),C(this,I)},ignorableWhitespace:function(i,w,I){},characters:function(i,w,I){if(i=N.apply(this,arguments),i){if(this.cdata)var b=this.doc.createCDATASection(i);else var b=this.doc.createTextNode(i);this.currentElement?this.currentElement.appendChild(b):/^\s*$/.test(i)&&this.doc.appendChild(b),this.locator&&d(this.locator,b)}},skippedEntity:function(i){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(i){(this.locator=i)&&(i.lineNumber=0)},comment:function(i,w,I){i=N.apply(this,arguments);var b=this.doc.createComment(i);this.locator&&d(this.locator,b),C(this,b)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(i,w,I){var b=this.doc.implementation;if(b&&b.createDocumentType){var k=b.createDocumentType(i,w,I);this.locator&&d(this.locator,k),C(this,k)}},warning:function(i){console.warn("[xmldom warning]	"+i,x(this.locator))},error:function(i){console.error("[xmldom error]	"+i,x(this.locator))},fatalError:function(i){throw console.error("[xmldom fatalError]	"+i,x(this.locator)),i}};function x(i){if(i)return`
@`+(i.systemId||"")+"#[line:"+i.lineNumber+",col:"+i.columnNumber+"]"}function N(i,w,I){return typeof i=="string"?i.substr(w,I):i.length>=w+I||w?new java.lang.String(i,w,I)+"":i}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(i){m.prototype[i]=function(){return null}});function C(i,w){i.currentElement?i.currentElement.appendChild(w):i.doc.appendChild(w)}var T=c("./sax").XMLReader,p=U.DOMImplementation=c("./dom").DOMImplementation;U.XMLSerializer=c("./dom").XMLSerializer,U.DOMParser=s},{"./dom":26,"./sax":27}],26:[function(c,j,U){function s(e,n){for(var f in e)n[f]=e[f]}function t(e,n){var f=e.prototype;if(Object.create){var M=Object.create(n.prototype);f.__proto__=M}if(!(f instanceof n)){let W=function(){};W.prototype=n.prototype,W=new W,s(f,W),e.prototype=f=W}f.constructor!=e&&(typeof e!="function"&&console.error("unknow Class:"+e),f.constructor=e)}var m="http://www.w3.org/1999/xhtml",d={},x=d.ELEMENT_NODE=1,N=d.ATTRIBUTE_NODE=2,C=d.TEXT_NODE=3,T=d.CDATA_SECTION_NODE=4,p=d.ENTITY_REFERENCE_NODE=5,i=d.ENTITY_NODE=6,w=d.PROCESSING_INSTRUCTION_NODE=7,I=d.COMMENT_NODE=8,b=d.DOCUMENT_NODE=9,k=d.DOCUMENT_TYPE_NODE=10,u=d.DOCUMENT_FRAGMENT_NODE=11,g=d.NOTATION_NODE=12,_={},A={};_.INDEX_SIZE_ERR=(A[1]="Index size error",1),_.DOMSTRING_SIZE_ERR=(A[2]="DOMString size error",2);var q=_.HIERARCHY_REQUEST_ERR=(A[3]="Hierarchy request error",3);_.WRONG_DOCUMENT_ERR=(A[4]="Wrong document",4),_.INVALID_CHARACTER_ERR=(A[5]="Invalid character",5),_.NO_DATA_ALLOWED_ERR=(A[6]="No data allowed",6),_.NO_MODIFICATION_ALLOWED_ERR=(A[7]="No modification allowed",7);var P=_.NOT_FOUND_ERR=(A[8]="Not found",8);_.NOT_SUPPORTED_ERR=(A[9]="Not supported",9);var O=_.INUSE_ATTRIBUTE_ERR=(A[10]="Attribute in use",10);_.INVALID_STATE_ERR=(A[11]="Invalid state",11),_.SYNTAX_ERR=(A[12]="Syntax error",12),_.INVALID_MODIFICATION_ERR=(A[13]="Invalid modification",13),_.NAMESPACE_ERR=(A[14]="Invalid namespace",14),_.INVALID_ACCESS_ERR=(A[15]="Invalid access",15);function l(e,n){if(n instanceof Error)var f=n;else f=this,Error.call(this,A[e]),this.message=A[e],Error.captureStackTrace&&Error.captureStackTrace(this,l);return f.code=e,n&&(this.message=this.message+": "+n),f}l.prototype=Error.prototype,s(_,l);function S(){}S.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,n){for(var f=[],M=0;M<this.length;M++)pe(this[M],f,e,n);return f.join("")}};function L(e,n){this._node=e,this._refresh=n,a(this)}function a(e){var n=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=n){var f=e._refresh(e._node);we(e,"length",f.length),s(f,e),e._inc=n}}L.prototype.item=function(e){return a(this),this[e]},t(L,S);function v(){}function o(e,n){for(var f=e.length;f--;)if(e[f]===n)return f}function h(e,n,f,M){if(M?n[o(n,M)]=f:n[n.length++]=f,e){f.ownerElement=e;var W=e.ownerDocument;W&&(M&&Y(W,e,M),H(W,e,f))}}function R(e,n,f){var M=o(n,f);if(M>=0){for(var W=n.length-1;M<W;)n[M]=n[++M];if(n.length=W,e){var ne=e.ownerDocument;ne&&(Y(ne,e,f),f.ownerElement=null)}}else throw l(P,new Error(e.tagName+"@"+f))}v.prototype={length:0,item:S.prototype.item,getNamedItem:function(e){for(var n=this.length;n--;){var f=this[n];if(f.nodeName==e)return f}},setNamedItem:function(e){var n=e.ownerElement;if(n&&n!=this._ownerElement)throw new l(O);var f=this.getNamedItem(e.nodeName);return h(this._ownerElement,this,e,f),f},setNamedItemNS:function(e){var n=e.ownerElement,f;if(n&&n!=this._ownerElement)throw new l(O);return f=this.getNamedItemNS(e.namespaceURI,e.localName),h(this._ownerElement,this,e,f),f},removeNamedItem:function(e){var n=this.getNamedItem(e);return R(this._ownerElement,this,n),n},removeNamedItemNS:function(e,n){var f=this.getNamedItemNS(e,n);return R(this._ownerElement,this,f),f},getNamedItemNS:function(e,n){for(var f=this.length;f--;){var M=this[f];if(M.localName==n&&M.namespaceURI==e)return M}return null}};function D(e){if(this._features={},e)for(var n in e)this._features=e[n]}D.prototype={hasFeature:function(e,n){var f=this._features[e.toLowerCase()];return!!(f&&(!n||n in f))},createDocument:function(e,n,f){var M=new F;if(M.implementation=this,M.childNodes=new S,M.doctype=f,f&&M.appendChild(f),n){var W=M.createElementNS(e,n);M.appendChild(W)}return M},createDocumentType:function(e,n,f){var M=new ee;return M.name=e,M.nodeName=e,M.publicId=n,M.systemId=f,M}};function r(){}r.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,n){return te(this,e,n)},replaceChild:function(e,n){this.insertBefore(e,n),n&&this.removeChild(n)},removeChild:function(e){return $(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(e){return oe(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var n=e.nextSibling;n&&n.nodeType==C&&e.nodeType==C?(this.removeChild(n),e.appendData(n.data)):(e.normalize(),e=n)}},isSupported:function(e,n){return this.ownerDocument.implementation.hasFeature(e,n)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var n=this;n;){var f=n._nsMap;if(f){for(var M in f)if(f[M]==e)return M}n=n.nodeType==N?n.ownerDocument:n.parentNode}return null},lookupNamespaceURI:function(e){for(var n=this;n;){var f=n._nsMap;if(f&&e in f)return f[e];n=n.nodeType==N?n.ownerDocument:n.parentNode}return null},isDefaultNamespace:function(e){var n=this.lookupPrefix(e);return n==null}};function y(e){return e=="<"&&"&lt;"||e==">"&&"&gt;"||e=="&"&&"&amp;"||e=='"'&&"&quot;"||"&#"+e.charCodeAt()+";"}s(d,r),s(d,r.prototype);function B(e,n){if(n(e))return!0;if(e=e.firstChild)do if(B(e,n))return!0;while(e=e.nextSibling)}function F(){}function H(e,n,f){e&&e._inc++;var M=f.namespaceURI;M=="http://www.w3.org/2000/xmlns/"&&(n._nsMap[f.prefix?f.localName:""]=f.value)}function Y(e,n,f,M){e&&e._inc++;var W=f.namespaceURI;W=="http://www.w3.org/2000/xmlns/"&&delete n._nsMap[f.prefix?f.localName:""]}function G(e,n,f){if(e&&e._inc){e._inc++;var M=n.childNodes;if(f)M[M.length++]=f;else{for(var W=n.firstChild,ne=0;W;)M[ne++]=W,W=W.nextSibling;M.length=ne}}}function $(e,n){var f=n.previousSibling,M=n.nextSibling;return f?f.nextSibling=M:e.firstChild=M,M?M.previousSibling=f:e.lastChild=f,G(e.ownerDocument,e),n}function te(e,n,f){var M=n.parentNode;if(M&&M.removeChild(n),n.nodeType===u){var W=n.firstChild;if(W==null)return n;var ne=n.lastChild}else W=ne=n;var ue=f?f.previousSibling:e.lastChild;W.previousSibling=ue,ne.nextSibling=f,ue?ue.nextSibling=W:e.firstChild=W,f==null?e.lastChild=ne:f.previousSibling=ne;do W.parentNode=e;while(W!==ne&&(W=W.nextSibling));return G(e.ownerDocument||e,e),n.nodeType==u&&(n.firstChild=n.lastChild=null),n}function Q(e,n){var f=n.parentNode;if(f){var M=e.lastChild;f.removeChild(n);var M=e.lastChild}var M=e.lastChild;return n.parentNode=e,n.previousSibling=M,n.nextSibling=null,M?M.nextSibling=n:e.firstChild=n,e.lastChild=n,G(e.ownerDocument,e,n),n}F.prototype={nodeName:"#document",nodeType:b,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,n){if(e.nodeType==u){for(var f=e.firstChild;f;){var M=f.nextSibling;this.insertBefore(f,n),f=M}return e}return this.documentElement==null&&e.nodeType==x&&(this.documentElement=e),te(this,e,n),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),$(this,e)},importNode:function(e,n){return re(this,e,n)},getElementById:function(e){var n=null;return B(this.documentElement,function(f){if(f.nodeType==x&&f.getAttribute("id")==e)return n=f,!0}),n},createElement:function(e){var n=new J;n.ownerDocument=this,n.nodeName=e,n.tagName=e,n.childNodes=new S;var f=n.attributes=new v;return f._ownerElement=n,n},createDocumentFragment:function(){var e=new me;return e.ownerDocument=this,e.childNodes=new S,e},createTextNode:function(e){var n=new X;return n.ownerDocument=this,n.appendData(e),n},createComment:function(e){var n=new V;return n.ownerDocument=this,n.appendData(e),n},createCDATASection:function(e){var n=new K;return n.ownerDocument=this,n.appendData(e),n},createProcessingInstruction:function(e,n){var f=new se;return f.ownerDocument=this,f.tagName=f.target=e,f.nodeValue=f.data=n,f},createAttribute:function(e){var n=new z;return n.ownerDocument=this,n.name=e,n.nodeName=e,n.localName=e,n.specified=!0,n},createEntityReference:function(e){var n=new ae;return n.ownerDocument=this,n.nodeName=e,n},createElementNS:function(e,n){var f=new J,M=n.split(":"),W=f.attributes=new v;return f.childNodes=new S,f.ownerDocument=this,f.nodeName=n,f.tagName=n,f.namespaceURI=e,M.length==2?(f.prefix=M[0],f.localName=M[1]):f.localName=n,W._ownerElement=f,f},createAttributeNS:function(e,n){var f=new z,M=n.split(":");return f.ownerDocument=this,f.nodeName=n,f.name=n,f.namespaceURI=e,f.specified=!0,M.length==2?(f.prefix=M[0],f.localName=M[1]):f.localName=n,f}},t(F,r);function J(){this._nsMap={}}J.prototype={nodeType:x,hasAttribute:function(e){return this.getAttributeNode(e)!=null},getAttribute:function(e){var n=this.getAttributeNode(e);return n&&n.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,n){var f=this.ownerDocument.createAttribute(e);f.value=f.nodeValue=""+n,this.setAttributeNode(f)},removeAttribute:function(e){var n=this.getAttributeNode(e);n&&this.removeAttributeNode(n)},appendChild:function(e){return e.nodeType===u?this.insertBefore(e,null):Q(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,n){var f=this.getAttributeNodeNS(e,n);f&&this.removeAttributeNode(f)},hasAttributeNS:function(e,n){return this.getAttributeNodeNS(e,n)!=null},getAttributeNS:function(e,n){var f=this.getAttributeNodeNS(e,n);return f&&f.value||""},setAttributeNS:function(e,n,f){var M=this.ownerDocument.createAttributeNS(e,n);M.value=M.nodeValue=""+f,this.setAttributeNode(M)},getAttributeNodeNS:function(e,n){return this.attributes.getNamedItemNS(e,n)},getElementsByTagName:function(e){return new L(this,function(n){var f=[];return B(n,function(M){M!==n&&M.nodeType==x&&(e==="*"||M.tagName==e)&&f.push(M)}),f})},getElementsByTagNameNS:function(e,n){return new L(this,function(f){var M=[];return B(f,function(W){W!==f&&W.nodeType===x&&(e==="*"||W.namespaceURI===e)&&(n==="*"||W.localName==n)&&M.push(W)}),M})}},F.prototype.getElementsByTagName=J.prototype.getElementsByTagName,F.prototype.getElementsByTagNameNS=J.prototype.getElementsByTagNameNS,t(J,r);function z(){}z.prototype.nodeType=N,t(z,r);function Z(){}Z.prototype={data:"",substringData:function(e,n){return this.data.substring(e,e+n)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,n){this.replaceData(e,0,n)},appendChild:function(e){throw new Error(A[q])},deleteData:function(e,n){this.replaceData(e,n,"")},replaceData:function(e,n,f){var M=this.data.substring(0,e),W=this.data.substring(e+n);f=M+f+W,this.nodeValue=this.data=f,this.length=f.length}},t(Z,r);function X(){}X.prototype={nodeName:"#text",nodeType:C,splitText:function(e){var n=this.data,f=n.substring(e);n=n.substring(0,e),this.data=this.nodeValue=n,this.length=n.length;var M=this.ownerDocument.createTextNode(f);return this.parentNode&&this.parentNode.insertBefore(M,this.nextSibling),M}},t(X,Z);function V(){}V.prototype={nodeName:"#comment",nodeType:I},t(V,Z);function K(){}K.prototype={nodeName:"#cdata-section",nodeType:T},t(K,Z);function ee(){}ee.prototype.nodeType=k,t(ee,r);function ie(){}ie.prototype.nodeType=g,t(ie,r);function de(){}de.prototype.nodeType=i,t(de,r);function ae(){}ae.prototype.nodeType=p,t(ae,r);function me(){}me.prototype.nodeName="#document-fragment",me.prototype.nodeType=u,t(me,r);function se(){}se.prototype.nodeType=w,t(se,r);function ve(){}ve.prototype.serializeToString=function(e,n,f){return xe.call(e,n,f)},r.prototype.toString=xe;function xe(e,n){var f=[],M=this.nodeType==9?this.documentElement:this,W=M.prefix,ne=M.namespaceURI;if(ne&&W==null){var W=M.lookupPrefix(ne);if(W==null)var ue=[{namespace:ne,prefix:null}]}return pe(this,f,e,n,ue),f.join("")}function ge(e,n,f){var M=e.prefix||"",W=e.namespaceURI;if(!M&&!W||M==="xml"&&W==="http://www.w3.org/XML/1998/namespace"||W=="http://www.w3.org/2000/xmlns/")return!1;for(var ne=f.length;ne--;){var ue=f[ne];if(ue.prefix==M)return ue.namespace!=W}return!0}function pe(e,n,f,M,W){if(M)if(e=M(e),e){if(typeof e=="string"){n.push(e);return}}else return;switch(e.nodeType){case x:W||(W=[]),W.length;var ne=e.attributes,ue=ne.length,le=e.firstChild,_e=e.tagName;f=m===e.namespaceURI||f,n.push("<",_e);for(var he=0;he<ue;he++){var fe=ne.item(he);fe.prefix=="xmlns"?W.push({prefix:fe.localName,namespace:fe.value}):fe.nodeName=="xmlns"&&W.push({prefix:"",namespace:fe.value})}for(var he=0;he<ue;he++){var fe=ne.item(he);if(ge(fe,f,W)){var ce=fe.prefix||"",ye=fe.namespaceURI,Te=ce?" xmlns:"+ce:" xmlns";n.push(Te,'="',ye,'"'),W.push({prefix:ce,namespace:ye})}pe(fe,n,f,M,W)}if(ge(e,f,W)){var ce=e.prefix||"",ye=e.namespaceURI,Te=ce?" xmlns:"+ce:" xmlns";n.push(Te,'="',ye,'"'),W.push({prefix:ce,namespace:ye})}if(le||f&&!/^(?:meta|link|img|br|hr|input)$/i.test(_e)){if(n.push(">"),f&&/^script$/i.test(_e))for(;le;)le.data?n.push(le.data):pe(le,n,f,M,W),le=le.nextSibling;else for(;le;)pe(le,n,f,M,W),le=le.nextSibling;n.push("</",_e,">")}else n.push("/>");return;case b:case u:for(var le=e.firstChild;le;)pe(le,n,f,M,W),le=le.nextSibling;return;case N:return n.push(" ",e.name,'="',e.value.replace(/[<&"]/g,y),'"');case C:return n.push(e.data.replace(/[<&]/g,y));case T:return n.push("<![CDATA[",e.data,"]]>");case I:return n.push("<!--",e.data,"-->");case k:var Ee=e.publicId,be=e.systemId;if(n.push("<!DOCTYPE ",e.name),Ee)n.push(' PUBLIC "',Ee),be&&be!="."&&n.push('" "',be),n.push('">');else if(be&&be!=".")n.push(' SYSTEM "',be,'">');else{var ke=e.internalSubset;ke&&n.push(" [",ke,"]"),n.push(">")}return;case w:return n.push("<?",e.target," ",e.data,"?>");case p:return n.push("&",e.nodeName,";");default:n.push("??",e.nodeName)}}function re(e,n,f){var M;switch(n.nodeType){case x:M=n.cloneNode(!1),M.ownerDocument=e;case u:break;case N:f=!0;break}if(M||(M=n.cloneNode(!1)),M.ownerDocument=e,M.parentNode=null,f)for(var W=n.firstChild;W;)M.appendChild(re(e,W,f)),W=W.nextSibling;return M}function oe(e,n,f){var M=new n.constructor;for(var W in n){var ne=n[W];typeof ne!="object"&&ne!=M[W]&&(M[W]=ne)}switch(n.childNodes&&(M.childNodes=new S),M.ownerDocument=e,M.nodeType){case x:var ue=n.attributes,_e=M.attributes=new v,he=ue.length;_e._ownerElement=M;for(var fe=0;fe<he;fe++)M.setAttributeNode(oe(e,ue.item(fe),!0));break;case N:f=!0}if(f)for(var ce=n.firstChild;ce;)M.appendChild(oe(e,ce,f)),ce=ce.nextSibling;return M}function we(e,n,f){e[n]=f}try{if(Object.defineProperty){let e=function(n){switch(n.nodeType){case x:case u:var f=[];for(n=n.firstChild;n;)n.nodeType!==7&&n.nodeType!==8&&f.push(e(n)),n=n.nextSibling;return f.join("");default:return n.nodeValue}};Object.defineProperty(L.prototype,"length",{get:function(){return a(this),this.$$length}}),Object.defineProperty(r.prototype,"textContent",{get:function(){return e(this)},set:function(n){switch(this.nodeType){case x:case u:for(;this.firstChild;)this.removeChild(this.firstChild);(n||String(n))&&this.appendChild(this.ownerDocument.createTextNode(n));break;default:this.data=n,this.value=n,this.nodeValue=n}}}),we=function(n,f,M){n["$$"+f]=M}}}catch{}U.DOMImplementation=D,U.XMLSerializer=ve},{}],27:[function(c,j,U){var s=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,t=new RegExp("[\\-\\.0-9"+s.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),m=new RegExp("^"+s.source+t.source+"*(?::"+s.source+t.source+"*)?$"),d=0,x=1,N=2,C=3,T=4,p=5,i=6,w=7;function I(){}I.prototype={parse:function(a,v,o){var h=this.domBuilder;h.startDocument(),q(v,v={}),b(a,v,o,h,this.errorHandler),h.endDocument()}};function b(a,v,o,h,R){function D(re){if(re>65535){re-=65536;var oe=55296+(re>>10),we=56320+(re&1023);return String.fromCharCode(oe,we)}else return String.fromCharCode(re)}function r(re){var oe=re.slice(1,-1);return oe in o?o[oe]:oe.charAt(0)==="#"?D(parseInt(oe.substr(1).replace("x","0x"))):(R.error("entity not found:"+re),re)}function y(re){if(re>Q){var oe=a.substring(Q,re).replace(/&#?\w+;/g,r);G&&B(Q),h.characters(oe,0,re-Q),Q=re}}function B(re,oe){for(;re>=H&&(oe=Y.exec(a));)F=oe.index,H=F+oe[0].length,G.lineNumber++;G.columnNumber=re-F+1}for(var F=0,H=0,Y=/.*(?:\r\n?|\n)|.*$/g,G=h.locator,$=[{currentNSMap:v}],te={},Q=0;;){try{var J=a.indexOf("<",Q);if(J<0){if(!a.substr(Q).match(/^\s*$/)){var z=h.doc,Z=z.createTextNode(a.substr(Q));z.appendChild(Z),h.currentElement=Z}return}switch(J>Q&&y(J),a.charAt(J+1)){case"/":var se=a.indexOf(">",J+3),X=a.substring(J+2,se),V=$.pop();se<0?(X=a.substring(J+2).replace(/[\s<].*/,""),R.error("end tag name: "+X+" is not complete:"+V.tagName),se=J+1+X.length):X.match(/\s</)&&(X=X.replace(/[\s<].*/,""),R.error("end tag name: "+X+" maybe not complete"),se=J+1+X.length);var K=V.localNSMap,ee=V.tagName==X,ie=ee||V.tagName&&V.tagName.toLowerCase()==X.toLowerCase();if(ie){if(h.endElement(V.uri,V.localName,X),K)for(var de in K)h.endPrefixMapping(de);ee||R.fatalError("end tag name: "+X+" is not match the current start tagName:"+V.tagName)}else $.push(V);se++;break;case"?":G&&B(J),se=O(a,J,h);break;case"!":G&&B(J),se=P(a,J,h,R);break;default:G&&B(J);var ae=new l,me=$[$.length-1].currentNSMap,se=u(a,J,ae,me,r,R),ve=ae.length;if(!ae.closed&&A(a,se,ae.tagName,te)&&(ae.closed=!0,o.nbsp||R.warning("unclosed xml attribute")),G&&ve){for(var xe=k(G,{}),ge=0;ge<ve;ge++){var pe=ae[ge];B(pe.offset),pe.locator=k(G,{})}h.locator=xe,g(ae,h,me)&&$.push(ae),h.locator=G}else g(ae,h,me)&&$.push(ae);ae.uri==="http://www.w3.org/1999/xhtml"&&!ae.closed?se=_(a,se,ae.tagName,r,h):se++}}catch(re){R.error("element parse error: "+re),se=-1}se>Q?Q=se:y(Math.max(J,Q)+1)}}function k(a,v){return v.lineNumber=a.lineNumber,v.columnNumber=a.columnNumber,v}function u(a,v,o,h,R,D){for(var r,y,B=++v,F=d;;){var H=a.charAt(B);switch(H){case"=":if(F===x)r=a.slice(v,B),F=C;else if(F===N)F=C;else throw new Error("attribute equal must after attrName");break;case"'":case'"':if(F===C||F===x)if(F===x&&(D.warning('attribute value must after "="'),r=a.slice(v,B)),v=B+1,B=a.indexOf(H,v),B>0)y=a.slice(v,B).replace(/&#?\w+;/g,R),o.add(r,y,v-1),F=p;else throw new Error("attribute value no end '"+H+"' match");else if(F==T)y=a.slice(v,B).replace(/&#?\w+;/g,R),o.add(r,y,v),D.warning('attribute "'+r+'" missed start quot('+H+")!!"),v=B+1,F=p;else throw new Error('attribute value must after "="');break;case"/":switch(F){case d:o.setTagName(a.slice(v,B));case p:case i:case w:F=w,o.closed=!0;case T:case x:case N:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return D.error("unexpected end of input"),F==d&&o.setTagName(a.slice(v,B)),B;case">":switch(F){case d:o.setTagName(a.slice(v,B));case p:case i:case w:break;case T:case x:y=a.slice(v,B),y.slice(-1)==="/"&&(o.closed=!0,y=y.slice(0,-1));case N:F===N&&(y=r),F==T?(D.warning('attribute "'+y+'" missed quot(")!!'),o.add(r,y.replace(/&#?\w+;/g,R),v)):((h[""]!=="http://www.w3.org/1999/xhtml"||!y.match(/^(?:disabled|checked|selected)$/i))&&D.warning('attribute "'+y+'" missed value!! "'+y+'" instead!!'),o.add(y,y,v));break;case C:throw new Error("attribute value missed!!")}return B;case"\x80":H=" ";default:if(H<=" ")switch(F){case d:o.setTagName(a.slice(v,B)),F=i;break;case x:r=a.slice(v,B),F=N;break;case T:var y=a.slice(v,B).replace(/&#?\w+;/g,R);D.warning('attribute "'+y+'" missed quot(")!!'),o.add(r,y,v);case p:F=i;break}else switch(F){case N:o.tagName,(h[""]!=="http://www.w3.org/1999/xhtml"||!r.match(/^(?:disabled|checked|selected)$/i))&&D.warning('attribute "'+r+'" missed value!! "'+r+'" instead2!!'),o.add(r,r,v),v=B,F=x;break;case p:D.warning('attribute space is required"'+r+'"!!');case i:F=x,v=B;break;case C:F=T,v=B;break;case w:throw new Error("elements closed character '/' and '>' must be connected to")}}B++}}function g(a,v,o){for(var h=a.tagName,R=null,Y=a.length;Y--;){var D=a[Y],r=D.qName,y=D.value,G=r.indexOf(":");if(G>0)var B=D.prefix=r.slice(0,G),F=r.slice(G+1),H=B==="xmlns"&&F;else F=r,B=null,H=r==="xmlns"&&"";D.localName=F,H!==!1&&(R==null&&(R={},q(o,o={})),o[H]=R[H]=y,D.uri="http://www.w3.org/2000/xmlns/",v.startPrefixMapping(H,y))}for(var Y=a.length;Y--;){D=a[Y];var B=D.prefix;B&&(B==="xml"&&(D.uri="http://www.w3.org/XML/1998/namespace"),B!=="xmlns"&&(D.uri=o[B||""]))}var G=h.indexOf(":");G>0?(B=a.prefix=h.slice(0,G),F=a.localName=h.slice(G+1)):(B=null,F=a.localName=h);var $=a.uri=o[B||""];if(v.startElement($,F,h,a),a.closed){if(v.endElement($,F,h),R)for(B in R)v.endPrefixMapping(B)}else return a.currentNSMap=o,a.localNSMap=R,!0}function _(a,v,o,h,R){if(/^(?:script|textarea)$/i.test(o)){var D=a.indexOf("</"+o+">",v),r=a.substring(v+1,D);if(/[&<]/.test(r))return/^script$/i.test(o)?(R.characters(r,0,r.length),D):(r=r.replace(/&#?\w+;/g,h),R.characters(r,0,r.length),D)}return v+1}function A(a,v,o,h){var R=h[o];return R==null&&(R=a.lastIndexOf("</"+o+">"),R<v&&(R=a.lastIndexOf("</"+o)),h[o]=R),R<v}function q(a,v){for(var o in a)v[o]=a[o]}function P(a,v,o,h){var R=a.charAt(v+2);switch(R){case"-":if(a.charAt(v+3)==="-"){var D=a.indexOf("-->",v+4);return D>v?(o.comment(a,v+4,D-v-4),D+3):(h.error("Unclosed comment"),-1)}else return-1;default:if(a.substr(v+3,6)=="CDATA["){var D=a.indexOf("]]>",v+9);return o.startCDATA(),o.characters(a,v+9,D-v-9),o.endCDATA(),D+3}var r=L(a,v),y=r.length;if(y>1&&/!doctype/i.test(r[0][0])){var B=r[1][0],F=y>3&&/^public$/i.test(r[2][0])&&r[3][0],H=y>4&&r[4][0],Y=r[y-1];return o.startDTD(B,F&&F.replace(/^(['"])(.*?)\1$/,"$2"),H&&H.replace(/^(['"])(.*?)\1$/,"$2")),o.endDTD(),Y.index+Y[0].length}}return-1}function O(a,v,o){var h=a.indexOf("?>",v);if(h){var R=a.substring(v,h).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return R?(R[0].length,o.processingInstruction(R[1],R[2]),h+2):-1}return-1}function l(a){}l.prototype={setTagName:function(a){if(!m.test(a))throw new Error("invalid tagName:"+a);this.tagName=a},add:function(a,v,o){if(!m.test(a))throw new Error("invalid attribute:"+a);this[this.length++]={qName:a,value:v,offset:o}},length:0,getLocalName:function(a){return this[a].localName},getLocator:function(a){return this[a].locator},getQName:function(a){return this[a].qName},getURI:function(a){return this[a].uri},getValue:function(a){return this[a].value}};function S(a,v){return a.__proto__=v,a}S({},S.prototype)instanceof S||(S=function(a,v){function o(){}o.prototype=v,o=new o;for(v in a)o[v]=a[v];return o});function L(a,v){var o,h=[],R=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(R.lastIndex=v,R.exec(a);o=R.exec(a);)if(h.push(o),o[1])return h}U.XMLReader=I},{}]},{},[])("/js/index.js")});window.PizZip=function(c){var j={};function U(s){if(j[s])return j[s].exports;var t=j[s]={i:s,l:!1,exports:{}};return c[s].call(t.exports,t,t.exports,U),t.l=!0,t.exports}return U.m=c,U.c=j,U.d=function(s,t,m){U.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:m})},U.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},U.t=function(s,t){if(t&1&&(s=U(s)),t&8||t&4&&typeof s=="object"&&s&&s.__esModule)return s;var m=Object.create(null);if(U.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:s}),t&2&&typeof s!="string")for(var d in s)U.d(m,d,function(x){return s[x]}.bind(null,d));return m},U.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return U.d(t,"a",t),t},U.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},U.p="",U(U.s="./es6/index.js")}({"./es6/arrayReader.js":function(module,exports,__webpack_require__){eval(`

var DataReader = __webpack_require__(/*! ./dataReader */ "./es6/dataReader.js");

function ArrayReader(data) {
  if (data) {
    this.data = data;
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;

    for (var i = 0; i < this.data.length; i++) {
      data[i] &= data[i];
    }
  }
}

ArrayReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */

ArrayReader.prototype.byteAt = function (i) {
  return this.data[this.zero + i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */


ArrayReader.prototype.lastIndexOfSignature = function (sig) {
  var sig0 = sig.charCodeAt(0),
      sig1 = sig.charCodeAt(1),
      sig2 = sig.charCodeAt(2),
      sig3 = sig.charCodeAt(3);

  for (var i = this.length - 4; i >= 0; --i) {
    if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
      return i - this.zero;
    }
  }

  return -1;
};
/**
 * @see DataReader.readData
 */


ArrayReader.prototype.readData = function (size) {
  this.checkOffset(size);

  if (size === 0) {
    return [];
  }

  var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
  this.index += size;
  return result;
};

module.exports = ArrayReader;

//# sourceURL=webpack://PizZip/./es6/arrayReader.js?`)},"./es6/base64.js":function(module,exports,__webpack_require__){eval(` // private property

var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; // public method for encoding

exports.encode = function (input) {
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;

  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = (chr1 & 3) << 4 | chr2 >> 4;
    enc3 = (chr2 & 15) << 2 | chr3 >> 6;
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
  }

  return output;
}; // public method for decoding


exports.decode = function (input) {
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, "");

  while (i < input.length) {
    enc1 = _keyStr.indexOf(input.charAt(i++));
    enc2 = _keyStr.indexOf(input.charAt(i++));
    enc3 = _keyStr.indexOf(input.charAt(i++));
    enc4 = _keyStr.indexOf(input.charAt(i++));
    chr1 = enc1 << 2 | enc2 >> 4;
    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
    chr3 = (enc3 & 3) << 6 | enc4;
    output += String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output += String.fromCharCode(chr2);
    }

    if (enc4 !== 64) {
      output += String.fromCharCode(chr3);
    }
  }

  return output;
};

//# sourceURL=webpack://PizZip/./es6/base64.js?`)},"./es6/compressedObject.js":function(module,exports,__webpack_require__){eval(`

function CompressedObject() {
  this.compressedSize = 0;
  this.uncompressedSize = 0;
  this.crc32 = 0;
  this.compressionMethod = null;
  this.compressedContent = null;
}

CompressedObject.prototype = {
  /**
   * Return the decompressed content in an unspecified format.
   * The format will depend on the decompressor.
   * @return {Object} the decompressed content.
   */
  getContent: function getContent() {
    return null; // see implementation
  },

  /**
   * Return the compressed content in an unspecified format.
   * The format will depend on the compressed conten source.
   * @return {Object} the compressed content.
   */
  getCompressedContent: function getCompressedContent() {
    return null; // see implementation
  }
};
module.exports = CompressedObject;

//# sourceURL=webpack://PizZip/./es6/compressedObject.js?`)},"./es6/compressions.js":function(module,exports,__webpack_require__){eval(`

exports.STORE = {
  magic: "\\x00\\x00",
  compress: function compress(content) {
    return content; // no compression
  },
  uncompress: function uncompress(content) {
    return content; // no compression
  },
  compressInputType: null,
  uncompressInputType: null
};
exports.DEFLATE = __webpack_require__(/*! ./flate */ "./es6/flate.js");

//# sourceURL=webpack://PizZip/./es6/compressions.js?`)},"./es6/crc32.js":function(module,exports,__webpack_require__){eval(`

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js"); // prettier-ignore


var table = [0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D];
/**
 *
 *  Javascript crc32
 *  http://www.webtoolkit.info/
 *
 */

module.exports = function crc32(input, crc) {
  if (typeof input === "undefined" || !input.length) {
    return 0;
  }

  var isArray = utils.getTypeOf(input) !== "string";

  if (typeof crc == "undefined") {
    crc = 0;
  }

  var x = 0;
  var y = 0;
  var b = 0;
  crc ^= -1;

  for (var i = 0, iTop = input.length; i < iTop; i++) {
    b = isArray ? input[i] : input.charCodeAt(i);
    y = (crc ^ b) & 0xff;
    x = table[y];
    crc = crc >>> 8 ^ x;
  }

  return crc ^ -1;
};

//# sourceURL=webpack://PizZip/./es6/crc32.js?`)},"./es6/dataReader.js":function(module,exports,__webpack_require__){eval(`

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");

function DataReader() {
  this.data = null; // type : see implementation

  this.length = 0;
  this.index = 0;
  this.zero = 0;
}

DataReader.prototype = {
  /**
   * Check that the offset will not go too far.
   * @param {string} offset the additional offset to check.
   * @throws {Error} an Error if the offset is out of bounds.
   */
  checkOffset: function checkOffset(offset) {
    this.checkIndex(this.index + offset);
  },

  /**
   * Check that the specifed index will not be too far.
   * @param {string} newIndex the index to check.
   * @throws {Error} an Error if the index is out of bounds.
   */
  checkIndex: function checkIndex(newIndex) {
    if (this.length < this.zero + newIndex || newIndex < 0) {
      throw new Error("End of data reached (data length = " + this.length + ", asked index = " + newIndex + "). Corrupted zip ?");
    }
  },

  /**
   * Change the index.
   * @param {number} newIndex The new index.
   * @throws {Error} if the new index is out of the data.
   */
  setIndex: function setIndex(newIndex) {
    this.checkIndex(newIndex);
    this.index = newIndex;
  },

  /**
   * Skip the next n bytes.
   * @param {number} n the number of bytes to skip.
   * @throws {Error} if the new index is out of the data.
   */
  skip: function skip(n) {
    this.setIndex(this.index + n);
  },

  /**
   * Get the byte at the specified index.
   * @param {number} i the index to use.
   * @return {number} a byte.
   */
  byteAt: function byteAt() {// see implementations
  },

  /**
   * Get the next number with a given byte size.
   * @param {number} size the number of bytes to read.
   * @return {number} the corresponding number.
   */
  readInt: function readInt(size) {
    var result = 0,
        i;
    this.checkOffset(size);

    for (i = this.index + size - 1; i >= this.index; i--) {
      result = (result << 8) + this.byteAt(i);
    }

    this.index += size;
    return result;
  },

  /**
   * Get the next string with a given byte size.
   * @param {number} size the number of bytes to read.
   * @return {string} the corresponding string.
   */
  readString: function readString(size) {
    return utils.transformTo("string", this.readData(size));
  },

  /**
   * Get raw data without conversion, <size> bytes.
   * @param {number} size the number of bytes to read.
   * @return {Object} the raw data, implementation specific.
   */
  readData: function readData() {// see implementations
  },

  /**
   * Find the last occurence of a zip signature (4 bytes).
   * @param {string} sig the signature to find.
   * @return {number} the index of the last occurence, -1 if not found.
   */
  lastIndexOfSignature: function lastIndexOfSignature() {// see implementations
  },

  /**
   * Get the next date.
   * @return {Date} the date.
   */
  readDate: function readDate() {
    var dostime = this.readInt(4);
    return new Date((dostime >> 25 & 0x7f) + 1980, // year
    (dostime >> 21 & 0x0f) - 1, // month
    dostime >> 16 & 0x1f, // day
    dostime >> 11 & 0x1f, // hour
    dostime >> 5 & 0x3f, // minute
    (dostime & 0x1f) << 1); // second
  }
};
module.exports = DataReader;

//# sourceURL=webpack://PizZip/./es6/dataReader.js?`)},"./es6/defaults.js":function(module,exports,__webpack_require__){eval(`

exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = false;
exports.date = null;
exports.compression = null;
exports.compressionOptions = null;
exports.comment = null;
exports.unixPermissions = null;
exports.dosPermissions = null;

//# sourceURL=webpack://PizZip/./es6/defaults.js?`)},"./es6/deprecatedPublicUtils.js":function(module,exports,__webpack_require__){eval(`

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.string2binary = function (str) {
  return utils.string2binary(str);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.string2Uint8Array = function (str) {
  return utils.transformTo("uint8array", str);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.uint8Array2String = function (array) {
  return utils.transformTo("string", array);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.string2Blob = function (str) {
  var buffer = utils.transformTo("arraybuffer", str);
  return utils.arrayBuffer2Blob(buffer);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.arrayBuffer2Blob = function (buffer) {
  return utils.arrayBuffer2Blob(buffer);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.transformTo = function (outputType, input) {
  return utils.transformTo(outputType, input);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.getTypeOf = function (input) {
  return utils.getTypeOf(input);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.checkSupport = function (type) {
  return utils.checkSupport(type);
};
/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */


exports.MAX_VALUE_16BITS = utils.MAX_VALUE_16BITS;
/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */

exports.MAX_VALUE_32BITS = utils.MAX_VALUE_32BITS;
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */

exports.pretty = function (str) {
  return utils.pretty(str);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.findCompression = function (compressionMethod) {
  return utils.findCompression(compressionMethod);
};
/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */


exports.isRegExp = function (object) {
  return utils.isRegExp(object);
};

//# sourceURL=webpack://PizZip/./es6/deprecatedPublicUtils.js?`)},"./es6/flate.js":function(module,exports,__webpack_require__){eval(`

var USE_TYPEDARRAY = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";

var pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");

exports.uncompressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
exports.compressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
exports.magic = "\\x08\\x00";

exports.compress = function (input, compressionOptions) {
  return pako.deflateRaw(input, {
    level: compressionOptions.level || -1 // default compression

  });
};

exports.uncompress = function (input) {
  return pako.inflateRaw(input);
};

//# sourceURL=webpack://PizZip/./es6/flate.js?`)},"./es6/index.js":function(module,exports,__webpack_require__){eval(`

var base64 = __webpack_require__(/*! ./base64 */ "./es6/base64.js");
/**
Usage:
   zip = new PizZip();
   zip.file("hello.txt", "Hello, World!").file("tempfile", "nothing");
   zip.folder("images").file("smile.gif", base64Data, {base64: true});
   zip.file("Xmas.txt", "Ho ho ho !", {date : new Date("December 25, 2007 00:00:01")});
   zip.remove("tempfile");

   base64zip = zip.generate();

**/

/**
 * Representation a of zip file in js
 * @constructor
 * @param {String=|ArrayBuffer=|Uint8Array=} data the data to load, if any (optional).
 * @param {Object=} options the options for creating this objects (optional).
 */


function PizZip(data, options) {
  // if this constructor is used without \`new\`, it adds \`new\` before itself:
  if (!(this instanceof PizZip)) {
    return new PizZip(data, options);
  } // object containing the files :
  // {
  //   "folder/" : {...},
  //   "folder/data.txt" : {...}
  // }


  this.files = {};
  this.comment = null; // Where we are in the hierarchy

  this.root = "";

  if (data) {
    this.load(data, options);
  }

  this.clone = function () {
    var newObj = new PizZip();

    for (var i in this) {
      if (typeof this[i] !== "function") {
        newObj[i] = this[i];
      }
    }

    return newObj;
  };
}

PizZip.prototype = __webpack_require__(/*! ./object */ "./es6/object.js");
PizZip.prototype.load = __webpack_require__(/*! ./load */ "./es6/load.js");
PizZip.support = __webpack_require__(/*! ./support */ "./es6/support.js");
PizZip.defaults = __webpack_require__(/*! ./defaults */ "./es6/defaults.js");
/**
 * @deprecated
 * This namespace will be removed in a future version without replacement.
 */

PizZip.utils = __webpack_require__(/*! ./deprecatedPublicUtils */ "./es6/deprecatedPublicUtils.js");
PizZip.base64 = {
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  encode: function encode(input) {
    return base64.encode(input);
  },

  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  decode: function decode(input) {
    return base64.decode(input);
  }
};
PizZip.compressions = __webpack_require__(/*! ./compressions */ "./es6/compressions.js");
module.exports = PizZip;

//# sourceURL=webpack://PizZip/./es6/index.js?`)},"./es6/load.js":function(module,exports,__webpack_require__){eval(`

var base64 = __webpack_require__(/*! ./base64 */ "./es6/base64.js");

var utf8 = __webpack_require__(/*! ./utf8 */ "./es6/utf8.js");

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");

var ZipEntries = __webpack_require__(/*! ./zipEntries */ "./es6/zipEntries.js");

module.exports = function (data, options) {
  var i, input;
  options = utils.extend(options || {}, {
    base64: false,
    checkCRC32: false,
    optimizedBinaryString: false,
    createFolders: false,
    decodeFileName: utf8.utf8decode
  });

  if (options.base64) {
    data = base64.decode(data);
  }

  var zipEntries = new ZipEntries(data, options);
  var files = zipEntries.files;

  for (i = 0; i < files.length; i++) {
    input = files[i];
    this.file(input.fileNameStr, input.decompressed, {
      binary: true,
      optimizedBinaryString: true,
      date: input.date,
      dir: input.dir,
      comment: input.fileCommentStr.length ? input.fileCommentStr : null,
      unixPermissions: input.unixPermissions,
      dosPermissions: input.dosPermissions,
      createFolders: options.createFolders
    });
  }

  if (zipEntries.zipComment.length) {
    this.comment = zipEntries.zipComment;
  }

  return this;
};

//# sourceURL=webpack://PizZip/./es6/load.js?`)},"./es6/nodeBuffer.js":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(Buffer) {

module.exports = function (data, encoding) {
  return new Buffer(data, encoding);
};

module.exports.test = function (b) {
  return Buffer.isBuffer(b);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

//# sourceURL=webpack://PizZip/./es6/nodeBuffer.js?`)},"./es6/nodeBufferReader.js":function(module,exports,__webpack_require__){eval(`

var Uint8ArrayReader = __webpack_require__(/*! ./uint8ArrayReader */ "./es6/uint8ArrayReader.js");

function NodeBufferReader(data) {
  this.data = data;
  this.length = this.data.length;
  this.index = 0;
  this.zero = 0;
}

NodeBufferReader.prototype = new Uint8ArrayReader();
/**
 * @see DataReader.readData
 */

NodeBufferReader.prototype.readData = function (size) {
  this.checkOffset(size);
  var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
  this.index += size;
  return result;
};

module.exports = NodeBufferReader;

//# sourceURL=webpack://PizZip/./es6/nodeBufferReader.js?`)},"./es6/object.js":function(module,exports,__webpack_require__){eval(`

var support = __webpack_require__(/*! ./support */ "./es6/support.js");

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");

var _crc = __webpack_require__(/*! ./crc32 */ "./es6/crc32.js");

var signature = __webpack_require__(/*! ./signature */ "./es6/signature.js");

var defaults = __webpack_require__(/*! ./defaults */ "./es6/defaults.js");

var base64 = __webpack_require__(/*! ./base64 */ "./es6/base64.js");

var compressions = __webpack_require__(/*! ./compressions */ "./es6/compressions.js");

var CompressedObject = __webpack_require__(/*! ./compressedObject */ "./es6/compressedObject.js");

var nodeBuffer = __webpack_require__(/*! ./nodeBuffer */ "./es6/nodeBuffer.js");

var utf8 = __webpack_require__(/*! ./utf8 */ "./es6/utf8.js");

var StringWriter = __webpack_require__(/*! ./stringWriter */ "./es6/stringWriter.js");

var Uint8ArrayWriter = __webpack_require__(/*! ./uint8ArrayWriter */ "./es6/uint8ArrayWriter.js");
/**
 * Returns the raw data of a ZipObject, decompress the content if necessary.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */


function getRawData(file) {
  if (file._data instanceof CompressedObject) {
    file._data = file._data.getContent();
    file.options.binary = true;
    file.options.base64 = false;

    if (utils.getTypeOf(file._data) === "uint8array") {
      var copy = file._data; // when reading an arraybuffer, the CompressedObject mechanism will keep it and subarray() a Uint8Array.
      // if we request a file in the same format, we might get the same Uint8Array or its ArrayBuffer (the original zip file).

      file._data = new Uint8Array(copy.length); // with an empty Uint8Array, Opera fails with a "Offset larger than array size"

      if (copy.length !== 0) {
        file._data.set(copy, 0);
      }
    }
  }

  return file._data;
}
/**
 * Returns the data of a ZipObject in a binary form. If the content is an unicode string, encode it.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */


function getBinaryData(file) {
  var result = getRawData(file),
      type = utils.getTypeOf(result);

  if (type === "string") {
    if (!file.options.binary) {
      // unicode text !
      // unicode string => binary string is a painful process, check if we can avoid it.
      if (support.nodebuffer) {
        return nodeBuffer(result, "utf-8");
      }
    }

    return file.asBinary();
  }

  return result;
} // return the actual prototype of PizZip


var out = {
  /**
   * Read an existing zip and merge the data in the current PizZip object.
   * The implementation is in pizzip-load.js, don't forget to include it.
   * @param {String|ArrayBuffer|Uint8Array|Buffer} stream  The stream to load
   * @param {Object} options Options for loading the stream.
   *  options.base64 : is the stream in base64 ? default : false
   * @return {PizZip} the current PizZip object
   */
  load: function load() {
    throw new Error("Load method is not defined. Is the file pizzip-load.js included ?");
  },

  /**
   * Filter nested files/folders with the specified function.
   * @param {Function} search the predicate to use :
   * function (relativePath, file) {...}
   * It takes 2 arguments : the relative path and the file.
   * @return {Array} An array of matching elements.
   */
  filter: function filter(search) {
    var result = [];
    var filename, relativePath, file, fileClone;

    for (filename in this.files) {
      if (!this.files.hasOwnProperty(filename)) {
        continue;
      }

      file = this.files[filename]; // return a new object, don't let the user mess with our internal objects :)

      fileClone = new ZipObject(file.name, file._data, utils.extend(file.options));
      relativePath = filename.slice(this.root.length, filename.length);

      if (filename.slice(0, this.root.length) === this.root && // the file is in the current root
      search(relativePath, fileClone)) {
        // and the file matches the function
        result.push(fileClone);
      }
    }

    return result;
  },

  /**
   * Add a file to the zip file, or search a file.
   * @param   {string|RegExp} name The name of the file to add (if data is defined),
   * the name of the file to find (if no data) or a regex to match files.
   * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
   * @param   {Object} o     File options
   * @return  {PizZip|Object|Array} this PizZip object (when adding a file),
   * a file (when searching by string) or an array of files (when searching by regex).
   */
  file: function file(name, data, o) {
    if (arguments.length === 1) {
      if (utils.isRegExp(name)) {
        var regexp = name;
        return this.filter(function (relativePath, file) {
          return !file.dir && regexp.test(relativePath);
        });
      } // text


      return this.filter(function (relativePath, file) {
        return !file.dir && relativePath === name;
      })[0] || null;
    } // more than one argument : we have data !


    name = this.root + name;
    fileAdd.call(this, name, data, o);
    return this;
  },

  /**
   * Add a directory to the zip file, or search.
   * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
   * @return  {PizZip} an object with the new directory as the root, or an array containing matching folders.
   */
  folder: function folder(arg) {
    if (!arg) {
      return this;
    }

    if (utils.isRegExp(arg)) {
      return this.filter(function (relativePath, file) {
        return file.dir && arg.test(relativePath);
      });
    } // else, name is a new folder


    var name = this.root + arg;
    var newFolder = folderAdd.call(this, name); // Allow chaining by returning a new object with this folder as the root

    var ret = this.clone();
    ret.root = newFolder.name;
    return ret;
  },

  /**
   * Delete a file, or a directory and all sub-files, from the zip
   * @param {string} name the name of the file to delete
   * @return {PizZip} this PizZip object
   */
  remove: function remove(name) {
    name = this.root + name;
    var file = this.files[name];

    if (!file) {
      // Look for any folders
      if (name.slice(-1) !== "/") {
        name += "/";
      }

      file = this.files[name];
    }

    if (file && !file.dir) {
      // file
      delete this.files[name];
    } else {
      // maybe a folder, delete recursively
      var kids = this.filter(function (relativePath, file) {
        return file.name.slice(0, name.length) === name;
      });

      for (var i = 0; i < kids.length; i++) {
        delete this.files[kids[i].name];
      }
    }

    return this;
  },

  /**
   * Generate the complete zip file
   * @param {Object} options the options to generate the zip file :
   * - base64, (deprecated, use type instead) true to generate base64.
   * - compression, "STORE" by default.
   * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
   * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
   */
  generate: function generate(options) {
    options = utils.extend(options || {}, {
      base64: true,
      compression: "STORE",
      compressionOptions: null,
      type: "base64",
      platform: "DOS",
      comment: null,
      mimeType: "application/zip",
      encodeFileName: utf8.utf8encode
    });
    utils.checkSupport(options.type); // accept nodejs \`process.platform\`

    if (options.platform === "darwin" || options.platform === "freebsd" || options.platform === "linux" || options.platform === "sunos") {
      options.platform = "UNIX";
    }

    if (options.platform === "win32") {
      options.platform = "DOS";
    }

    var zipData = [],
        encodedComment = utils.transformTo("string", options.encodeFileName(options.comment || this.comment || ""));
    var localDirLength = 0,
        centralDirLength = 0,
        writer,
        i; // first, generate all the zip parts.

    for (var name in this.files) {
      if (!this.files.hasOwnProperty(name)) {
        continue;
      }

      var file = this.files[name];
      var compressionName = file.options.compression || options.compression.toUpperCase();
      var compression = compressions[compressionName];

      if (!compression) {
        throw new Error(compressionName + " is not a valid compression method !");
      }

      var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
      var compressedObject = generateCompressedObjectFrom.call(this, file, compression, compressionOptions);
      var zipPart = generateZipParts.call(this, name, file, compressedObject, localDirLength, options.platform, options.encodeFileName);
      localDirLength += zipPart.fileRecord.length + compressedObject.compressedSize;
      centralDirLength += zipPart.dirRecord.length;
      zipData.push(zipPart);
    }

    var dirEnd = ""; // end of central dir signature

    dirEnd = signature.CENTRAL_DIRECTORY_END + // number of this disk
    "\\x00\\x00" + // number of the disk with the start of the central directory
    "\\x00\\x00" + // total number of entries in the central directory on this disk
    decToHex(zipData.length, 2) + // total number of entries in the central directory
    decToHex(zipData.length, 2) + // size of the central directory   4 bytes
    decToHex(centralDirLength, 4) + // offset of start of central directory with respect to the starting disk number
    decToHex(localDirLength, 4) + // .ZIP file comment length
    decToHex(encodedComment.length, 2) + // .ZIP file comment
    encodedComment; // we have all the parts (and the total length)
    // time to create a writer !

    var typeName = options.type.toLowerCase();

    if (typeName === "uint8array" || typeName === "arraybuffer" || typeName === "blob" || typeName === "nodebuffer") {
      writer = new Uint8ArrayWriter(localDirLength + centralDirLength + dirEnd.length);
    } else {
      writer = new StringWriter(localDirLength + centralDirLength + dirEnd.length);
    }

    for (i = 0; i < zipData.length; i++) {
      writer.append(zipData[i].fileRecord);
      writer.append(zipData[i].compressedObject.compressedContent);
    }

    for (i = 0; i < zipData.length; i++) {
      writer.append(zipData[i].dirRecord);
    }

    writer.append(dirEnd);
    var zip = writer.finalize();

    switch (options.type.toLowerCase()) {
      // case "zip is an Uint8Array"
      case "uint8array":
      case "arraybuffer":
      case "nodebuffer":
        return utils.transformTo(options.type.toLowerCase(), zip);

      case "blob":
        return utils.arrayBuffer2Blob(utils.transformTo("arraybuffer", zip), options.mimeType);
      // case "zip is a string"

      case "base64":
        return options.base64 ? base64.encode(zip) : zip;

      default:
        // case "string" :
        return zip;
    }
  },

  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  crc32: function crc32(input, crc) {
    return _crc(input, crc);
  },

  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  utf8encode: function utf8encode(string) {
    return utils.transformTo("string", utf8.utf8encode(string));
  },

  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  utf8decode: function utf8decode(input) {
    return utf8.utf8decode(input);
  }
};
/**
 * Transform this._data into a string.
 * @param {function} filter a function String -> String, applied if not null on the result.
 * @return {String} the string representing this._data.
 */

function dataToString(asUTF8) {
  var result = getRawData(this);

  if (result === null || typeof result === "undefined") {
    return "";
  } // if the data is a base64 string, we decode it before checking the encoding !


  if (this.options.base64) {
    result = base64.decode(result);
  }

  if (asUTF8 && this.options.binary) {
    // PizZip.prototype.utf8decode supports arrays as input
    // skip to array => string step, utf8decode will do it.
    result = out.utf8decode(result);
  } else {
    // no utf8 transformation, do the array => string step.
    result = utils.transformTo("string", result);
  }

  if (!asUTF8 && !this.options.binary) {
    result = utils.transformTo("string", out.utf8encode(result));
  }

  return result;
}
/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */


function ZipObject(name, data, options) {
  this.name = name;
  this.dir = options.dir;
  this.date = options.date;
  this.comment = options.comment;
  this.unixPermissions = options.unixPermissions;
  this.dosPermissions = options.dosPermissions;
  this._data = data;
  this.options = options;
  /*
   * This object contains initial values for dir and date.
   * With them, we can check if the user changed the deprecated metadata in
   * \`ZipObject#options\` or not.
   */

  this._initialMetadata = {
    dir: options.dir,
    date: options.date
  };
}

ZipObject.prototype = {
  /**
   * Return the content as UTF8 string.
   * @return {string} the UTF8 string.
   */
  asText: function asText() {
    return dataToString.call(this, true);
  },

  /**
   * Returns the binary content.
   * @return {string} the content as binary.
   */
  asBinary: function asBinary() {
    return dataToString.call(this, false);
  },

  /**
   * Returns the content as a nodejs Buffer.
   * @return {Buffer} the content as a Buffer.
   */
  asNodeBuffer: function asNodeBuffer() {
    var result = getBinaryData(this);
    return utils.transformTo("nodebuffer", result);
  },

  /**
   * Returns the content as an Uint8Array.
   * @return {Uint8Array} the content as an Uint8Array.
   */
  asUint8Array: function asUint8Array() {
    var result = getBinaryData(this);
    return utils.transformTo("uint8array", result);
  },

  /**
   * Returns the content as an ArrayBuffer.
   * @return {ArrayBuffer} the content as an ArrayBufer.
   */
  asArrayBuffer: function asArrayBuffer() {
    return this.asUint8Array().buffer;
  }
};
/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */

function decToHex(dec, bytes) {
  var hex = "",
      i;

  for (i = 0; i < bytes; i++) {
    hex += String.fromCharCode(dec & 0xff);
    dec >>>= 8;
  }

  return hex;
}
/**
 * Transforms the (incomplete) options from the user into the complete
 * set of options to create a file.
 * @private
 * @param {Object} o the options from the user.
 * @return {Object} the complete set of options.
 */


function prepareFileAttrs(o) {
  o = o || {};

  if (o.base64 === true && (o.binary === null || o.binary === undefined)) {
    o.binary = true;
  }

  o = utils.extend(o, defaults);
  o.date = o.date || new Date();

  if (o.compression !== null) {
    o.compression = o.compression.toUpperCase();
  }

  return o;
}
/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} o the options of the file
 * @return {Object} the new file.
 */


function fileAdd(name, data, o) {
  // be sure sub folders exist
  var dataType = utils.getTypeOf(data),
      parent;
  o = prepareFileAttrs(o);

  if (typeof o.unixPermissions === "string") {
    o.unixPermissions = parseInt(o.unixPermissions, 8);
  } // UNX_IFDIR  0040000 see zipinfo.c


  if (o.unixPermissions && o.unixPermissions & 0x4000) {
    o.dir = true;
  } // Bit 4    Directory


  if (o.dosPermissions && o.dosPermissions & 0x0010) {
    o.dir = true;
  }

  if (o.dir) {
    name = forceTrailingSlash(name);
  }

  if (o.createFolders && (parent = parentFolder(name))) {
    folderAdd.call(this, parent, true);
  }

  if (o.dir || data === null || typeof data === "undefined") {
    o.base64 = false;
    o.binary = false;
    data = null;
    dataType = null;
  } else if (dataType === "string") {
    if (o.binary && !o.base64) {
      // optimizedBinaryString == true means that the file has already been filtered with a 0xFF mask
      if (o.optimizedBinaryString !== true) {
        // this is a string, not in a base64 format.
        // Be sure that this is a correct "binary string"
        data = utils.string2binary(data);
      }
    }
  } else {
    // arraybuffer, uint8array, ...
    o.base64 = false;
    o.binary = true;

    if (!dataType && !(data instanceof CompressedObject)) {
   throw new Error("The data of '" + name + "' is in an unsupported format !");
    } // special case : it's way easier to work with Uint8Array than with ArrayBuffer


    if (dataType === "arraybuffer") {
      data = utils.transformTo("uint8array", data);
    }
  }

  var object = new ZipObject(name, data, o);
  this.files[name] = object;
  return object;
}
/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */


function parentFolder(path) {
  if (path.slice(-1) === "/") {
    path = path.substring(0, path.length - 1);
  }

  var lastSlash = path.lastIndexOf("/");
  return lastSlash > 0 ? path.substring(0, lastSlash) : "";
}
/**
 * Returns the path with a slash at the end.
 * @private
 * @param {String} path the path to check.
 * @return {String} the path with a trailing slash.
 */


function forceTrailingSlash(path) {
  // Check the name ends with a /
  if (path.slice(-1) !== "/") {
    path += "/"; // IE doesn't like substr(-1)
  }

  return path;
}
/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */


function folderAdd(name, createFolders) {
  createFolders = typeof createFolders !== "undefined" ? createFolders : false;
  name = forceTrailingSlash(name); // Does this folder already exist?

  if (!this.files[name]) {
    fileAdd.call(this, name, null, {
      dir: true,
      createFolders: createFolders
    });
  }

  return this.files[name];
}
/**
 * Generate a PizZip.CompressedObject for a given zipOject.
 * @param {ZipObject} file the object to read.
 * @param {PizZip.compression} compression the compression to use.
 * @param {Object} compressionOptions the options to use when compressing.
 * @return {PizZip.CompressedObject} the compressed result.
 */


function generateCompressedObjectFrom(file, compression, compressionOptions) {
  var result = new CompressedObject();
  var content; // the data has not been decompressed, we might reuse things !

  if (file._data instanceof CompressedObject) {
    result.uncompressedSize = file._data.uncompressedSize;
    result.crc32 = file._data.crc32;

    if (result.uncompressedSize === 0 || file.dir) {
      compression = compressions.STORE;
      result.compressedContent = "";
      result.crc32 = 0;
    } else if (file._data.compressionMethod === compression.magic) {
      result.compressedContent = file._data.getCompressedContent();
    } else {
      content = file._data.getContent(); // need to decompress / recompress

      result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
    }
  } else {
    // have uncompressed data
    content = getBinaryData(file);

    if (!content || content.length === 0 || file.dir) {
      compression = compressions.STORE;
      content = "";
    }

    result.uncompressedSize = content.length;
    result.crc32 = _crc(content);
    result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
  }

  result.compressedSize = result.compressedContent.length;
  result.compressionMethod = compression.magic;
  return result;
}
/**
 * Generate the UNIX part of the external file attributes.
 * @param {Object} unixPermissions the unix permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
 *
 * TTTTsstrwxrwxrwx0000000000ADVSHR
 * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
 *     ^^^_________________________ setuid, setgid, sticky
 *        ^^^^^^^^^________________ permissions
 *                 ^^^^^^^^^^______ not used ?
 *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
 */


function generateUnixExternalFileAttr(unixPermissions, isDir) {
  var result = unixPermissions;

  if (!unixPermissions) {
    // I can't use octal values in strict mode, hence the hexa.
    //  040775 => 0x41fd
    // 0100664 => 0x81b4
    result = isDir ? 0x41fd : 0x81b4;
  }

  return (result & 0xffff) << 16;
}
/**
 * Generate the DOS part of the external file attributes.
 * @param {Object} dosPermissions the dos permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * Bit 0     Read-Only
 * Bit 1     Hidden
 * Bit 2     System
 * Bit 3     Volume Label
 * Bit 4     Directory
 * Bit 5     Archive
 */


function generateDosExternalFileAttr(dosPermissions) {
  // the dir flag is already set for compatibility
  return (dosPermissions || 0) & 0x3f;
}
/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {string} name the file name.
 * @param {ZipObject} file the file content.
 * @param {PizZip.CompressedObject} compressedObject the compressed object.
 * @param {number} offset the current offset from the start of the zip file.
 * @param {String} platform let's pretend we are this platform (change platform dependents fields)
 * @param {Function} encodeFileName the function to encode the file name / comment.
 * @return {object} the zip parts.
 */


function generateZipParts(name, file, compressedObject, offset, platform, encodeFileName) {
  var useCustomEncoding = encodeFileName !== utf8.utf8encode,
      encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
      utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
      comment = file.comment || "",
      encodedComment = utils.transformTo("string", encodeFileName(comment)),
      utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
      useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
      useUTF8ForComment = utfEncodedComment.length !== comment.length,
      o = file.options;
  var dosTime,
      dosDate,
      extraFields = "",
      unicodePathExtraField = "",
      unicodeCommentExtraField = "",
      dir,
      date; // handle the deprecated options.dir

  if (file._initialMetadata.dir !== file.dir) {
    dir = file.dir;
  } else {
    dir = o.dir;
  } // handle the deprecated options.date


  if (file._initialMetadata.date !== file.date) {
    date = file.date;
  } else {
    date = o.date;
  }

  var extFileAttr = 0;
  var versionMadeBy = 0;

  if (dir) {
    // dos or unix, we set the dos dir flag
    extFileAttr |= 0x00010;
  }

  if (platform === "UNIX") {
    versionMadeBy = 0x031e; // UNIX, version 3.0

    extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
  } else {
    // DOS or other, fallback to DOS
    versionMadeBy = 0x0014; // DOS, version 2.0

    extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
  } // date
  // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
  // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
  // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html


  dosTime = date.getHours();
  dosTime <<= 6;
  dosTime |= date.getMinutes();
  dosTime <<= 5;
  dosTime |= date.getSeconds() / 2;
  dosDate = date.getFullYear() - 1980;
  dosDate <<= 4;
  dosDate |= date.getMonth() + 1;
  dosDate <<= 5;
  dosDate |= date.getDate();

  if (useUTF8ForFileName) {
    // set the unicode path extra field. unzip needs at least one extra
    // field to correctly handle unicode path, so using the path is as good
    // as any other information. This could improve the situation with
    // other archive managers too.
    // This field is usually used without the utf8 flag, with a non
    // unicode path in the header (winrar, winzip). This helps (a bit)
    // with the messy Windows' default compressed folders feature but
    // breaks on p7zip which doesn't seek the unicode path extra field.
    // So for now, UTF-8 everywhere !
    unicodePathExtraField = // Version
    decToHex(1, 1) + // NameCRC32
    decToHex(_crc(encodedFileName), 4) + // UnicodeName
    utfEncodedFileName;
    extraFields += // Info-ZIP Unicode Path Extra Field
    "\\x75\\x70" + // size
    decToHex(unicodePathExtraField.length, 2) + // content
    unicodePathExtraField;
  }

  if (useUTF8ForComment) {
    unicodeCommentExtraField = // Version
    decToHex(1, 1) + // CommentCRC32
    decToHex(this.crc32(encodedComment), 4) + // UnicodeName
    utfEncodedComment;
    extraFields += // Info-ZIP Unicode Path Extra Field
    "\\x75\\x63" + // size
    decToHex(unicodeCommentExtraField.length, 2) + // content
    unicodeCommentExtraField;
  }

  var header = ""; // version needed to extract

  header += "\\x0A\\x00"; // general purpose bit flag
  // set bit 11 if utf8

  header += !useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment) ? "\\x00\\x08" : "\\x00\\x00"; // compression method

  header += compressedObject.compressionMethod; // last mod file time

  header += decToHex(dosTime, 2); // last mod file date

  header += decToHex(dosDate, 2); // crc-32

  header += decToHex(compressedObject.crc32, 4); // compressed size

  header += decToHex(compressedObject.compressedSize, 4); // uncompressed size

  header += decToHex(compressedObject.uncompressedSize, 4); // file name length

  header += decToHex(encodedFileName.length, 2); // extra field length

  header += decToHex(extraFields.length, 2);
  var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;
  var dirRecord = signature.CENTRAL_FILE_HEADER + // version made by (00: DOS)
  decToHex(versionMadeBy, 2) + // file header (common to file and central directory)
  header + // file comment length
  decToHex(encodedComment.length, 2) + // disk number start
  "\\x00\\x00" + // internal file attributes
  "\\x00\\x00" + // external file attributes
  decToHex(extFileAttr, 4) + // relative offset of local header
  decToHex(offset, 4) + // file name
  encodedFileName + // extra field
  extraFields + // file comment
  encodedComment;
  return {
    fileRecord: fileRecord,
    dirRecord: dirRecord,
    compressedObject: compressedObject
  };
}

module.exports = out;

//# sourceURL=webpack://PizZip/./es6/object.js?`)},"./es6/signature.js":function(module,exports,__webpack_require__){eval(`

exports.LOCAL_FILE_HEADER = "PK\\x03\\x04";
exports.CENTRAL_FILE_HEADER = "PK\\x01\\x02";
exports.CENTRAL_DIRECTORY_END = "PK\\x05\\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\\x06\\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\\x06\\x06";
exports.DATA_DESCRIPTOR = "PK\\x07\\x08";

//# sourceURL=webpack://PizZip/./es6/signature.js?`)},"./es6/stringReader.js":function(module,exports,__webpack_require__){eval(`

var DataReader = __webpack_require__(/*! ./dataReader */ "./es6/dataReader.js");

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");

function StringReader(data, optimizedBinaryString) {
  this.data = data;

  if (!optimizedBinaryString) {
    this.data = utils.string2binary(this.data);
  }

  this.length = this.data.length;
  this.index = 0;
  this.zero = 0;
}

StringReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */

StringReader.prototype.byteAt = function (i) {
  return this.data.charCodeAt(this.zero + i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */


StringReader.prototype.lastIndexOfSignature = function (sig) {
  return this.data.lastIndexOf(sig) - this.zero;
};
/**
 * @see DataReader.readData
 */


StringReader.prototype.readData = function (size) {
  this.checkOffset(size); // this will work because the constructor applied the "& 0xff" mask.

  var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
  this.index += size;
  return result;
};

module.exports = StringReader;

//# sourceURL=webpack://PizZip/./es6/stringReader.js?`)},"./es6/stringWriter.js":function(module,exports,__webpack_require__){eval(`

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");
/**
 * An object to write any content to a string.
 * @constructor
 */


function StringWriter() {
  this.data = [];
}

StringWriter.prototype = {
  /**
   * Append any content to the current string.
   * @param {Object} input the content to add.
   */
  append: function append(input) {
    input = utils.transformTo("string", input);
    this.data.push(input);
  },

  /**
   * Finalize the construction an return the result.
   * @return {string} the generated string.
   */
  finalize: function finalize() {
    return this.data.join("");
  }
};
module.exports = StringWriter;

//# sourceURL=webpack://PizZip/./es6/stringWriter.js?`)},"./es6/support.js":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(Buffer) {

exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined"; // contains true if PizZip can read/generate nodejs Buffer, false otherwise.
// Browserify will provide a Buffer implementation for browsers, which is
// an augmented Uint8Array (i.e., can be used as either Buffer or U8).

exports.nodebuffer = typeof Buffer !== "undefined"; // contains true if PizZip can read/generate Uint8Array, false otherwise.

exports.uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
  exports.blob = false;
} else {
  var buffer = new ArrayBuffer(0);

  try {
    exports.blob = new Blob([buffer], {
      type: "application/zip"
    }).size === 0;
  } catch (e) {
    try {
      var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
      var builder = new Builder();
      builder.append(buffer);
      exports.blob = builder.getBlob("application/zip").size === 0;
    } catch (e) {
      exports.blob = false;
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

//# sourceURL=webpack://PizZip/./es6/support.js?`)},"./es6/uint8ArrayReader.js":function(module,exports,__webpack_require__){eval(`

var ArrayReader = __webpack_require__(/*! ./arrayReader */ "./es6/arrayReader.js");

function Uint8ArrayReader(data) {
  if (data) {
    this.data = data;
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;
  }
}

Uint8ArrayReader.prototype = new ArrayReader();
/**
 * @see DataReader.readData
 */

Uint8ArrayReader.prototype.readData = function (size) {
  this.checkOffset(size);

  if (size === 0) {
    // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
    return new Uint8Array(0);
  }

  var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
  this.index += size;
  return result;
};

module.exports = Uint8ArrayReader;

//# sourceURL=webpack://PizZip/./es6/uint8ArrayReader.js?`)},"./es6/uint8ArrayWriter.js":function(module,exports,__webpack_require__){eval(`

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");
/**
 * An object to write any content to an Uint8Array.
 * @constructor
 * @param {number} length The length of the array.
 */


function Uint8ArrayWriter(length) {
  this.data = new Uint8Array(length);
  this.index = 0;
}

Uint8ArrayWriter.prototype = {
  /**
   * Append any content to the current array.
   * @param {Object} input the content to add.
   */
  append: function append(input) {
    if (input.length !== 0) {
      // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
      input = utils.transformTo("uint8array", input);
      this.data.set(input, this.index);
      this.index += input.length;
    }
  },

  /**
   * Finalize the construction an return the result.
   * @return {Uint8Array} the generated array.
   */
  finalize: function finalize() {
    return this.data;
  }
};
module.exports = Uint8ArrayWriter;

//# sourceURL=webpack://PizZip/./es6/uint8ArrayWriter.js?`)},"./es6/utf8.js":function(module,exports,__webpack_require__){eval(`

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");

var support = __webpack_require__(/*! ./support */ "./es6/support.js");

var nodeBuffer = __webpack_require__(/*! ./nodeBuffer */ "./es6/nodeBuffer.js");
/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */
// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff


var _utf8len = new Array(256);

for (var i = 0; i < 256; i++) {
  _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
}

_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
// convert string to array (typed, when possible)

function string2buf(str) {
  var buf,
      c,
      c2,
      mPos,
      i,
      bufLen = 0;
  var strLen = str.length; // count binary size

  for (mPos = 0; mPos < strLen; mPos++) {
    c = str.charCodeAt(mPos);

    if ((c & 0xfc00) === 0xd800 && mPos + 1 < strLen) {
      c2 = str.charCodeAt(mPos + 1);

      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        mPos++;
      }
    }

    bufLen += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  } // allocate buffer


  if (support.uint8array) {
    buf = new Uint8Array(bufLen);
  } else {
    buf = new Array(bufLen);
  } // convert


  for (i = 0, mPos = 0; i < bufLen; mPos++) {
    c = str.charCodeAt(mPos);

    if ((c & 0xfc00) === 0xd800 && mPos + 1 < strLen) {
      c2 = str.charCodeAt(mPos + 1);

      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        mPos++;
      }
    }

    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xc0 | c >>> 6;
      buf[i++] = 0x80 | c & 0x3f;
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xe0 | c >>> 12;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | c >>> 18;
      buf[i++] = 0x80 | c >>> 12 & 0x3f;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    }
  }

  return buf;
} // Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);


function utf8border(buf, max) {
  var pos;
  max = max || buf.length;

  if (max > buf.length) {
    max = buf.length;
  } // go back from last position, until start of sequence found


  pos = max - 1;

  while (pos >= 0 && (buf[pos] & 0xc0) === 0x80) {
    pos--;
  } // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.


  if (pos < 0) {
    return max;
  } // If we came to start of buffer - that means vuffer is too small,
  // return max too.


  if (pos === 0) {
    return max;
  }

  return pos + _utf8len[buf[pos]] > max ? pos : max;
} // convert array to string


function buf2string(buf) {
  var i, out, c, cLen;
  var len = buf.length; // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.

  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++]; // quick process ascii

    if (c < 0x80) {
      utf16buf[out++] = c;
      continue;
    }

    cLen = _utf8len[c]; // skip 5 & 6 byte codes

    if (cLen > 4) {
      utf16buf[out++] = 0xfffd;
      i += cLen - 1;
      continue;
    } // apply mask on first byte


    c &= cLen === 2 ? 0x1f : cLen === 3 ? 0x0f : 0x07; // join the rest

    while (cLen > 1 && i < len) {
      c = c << 6 | buf[i++] & 0x3f;
      cLen--;
    } // terminated by end of string?


    if (cLen > 1) {
      utf16buf[out++] = 0xfffd;
      continue;
    }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
      utf16buf[out++] = 0xdc00 | c & 0x3ff;
    }
  } // shrinkBuf(utf16buf, out)


  if (utf16buf.length !== out) {
    if (utf16buf.subarray) {
      utf16buf = utf16buf.subarray(0, out);
    } else {
      utf16buf.length = out;
    }
  } // return String.fromCharCode.apply(null, utf16buf);


  return utils.applyFromCharCode(utf16buf);
} // That's all for the pako functions.

/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */


exports.utf8encode = function utf8encode(str) {
  if (support.nodebuffer) {
    return nodeBuffer(str, "utf-8");
  }

  return string2buf(str);
};
/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */


exports.utf8decode = function utf8decode(buf) {
  if (support.nodebuffer) {
    return utils.transformTo("nodebuffer", buf).toString("utf-8");
  }

  buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf); // return buf2string(buf);
  // Chrome prefers to work with "small" chunks of data
  // for the method buf2string.
  // Firefox and Chrome has their own shortcut, IE doesn't seem to really care.

  var result = [],
      len = buf.length,
      chunk = 65536;
  var k = 0;

  while (k < len) {
    var nextBoundary = utf8border(buf, Math.min(k + chunk, len));

    if (support.uint8array) {
      result.push(buf2string(buf.subarray(k, nextBoundary)));
    } else {
      result.push(buf2string(buf.slice(k, nextBoundary)));
    }

    k = nextBoundary;
  }

  return result.join("");
};

//# sourceURL=webpack://PizZip/./es6/utf8.js?`)},"./es6/utils.js":function(module,exports,__webpack_require__){eval(`

var support = __webpack_require__(/*! ./support */ "./es6/support.js");

var compressions = __webpack_require__(/*! ./compressions */ "./es6/compressions.js");

var nodeBuffer = __webpack_require__(/*! ./nodeBuffer */ "./es6/nodeBuffer.js");
/**
 * Convert a string to a "binary string" : a string containing only char codes between 0 and 255.
 * @param {string} str the string to transform.
 * @return {String} the binary string.
 */


exports.string2binary = function (str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) & 0xff);
  }

  return result;
};

exports.arrayBuffer2Blob = function (buffer, mimeType) {
  exports.checkSupport("blob");
  mimeType = mimeType || "application/zip";

  try {
    // Blob constructor
    return new Blob([buffer], {
      type: mimeType
    });
  } catch (e) {
    try {
      // deprecated, browser only, old way
      var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
      var builder = new Builder();
      builder.append(buffer);
      return builder.getBlob(mimeType);
    } catch (e) {
      // well, fuck ?!
      throw new Error("Bug : can't construct the Blob.");
    }
  }
};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */


function identity(input) {
  return input;
}
/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */


function stringToArrayLike(str, array) {
  for (var i = 0; i < str.length; ++i) {
    array[i] = str.charCodeAt(i) & 0xff;
  }

  return array;
}
/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */


function arrayLikeToString(array) {
  // Performances notes :
  // --------------------
  // String.fromCharCode.apply(null, array) is the fastest, see
  // see http://jsperf.com/converting-a-uint8array-to-a-string/2
  // but the stack is limited (and we can get huge arrays !).
  //
  // result += String.fromCharCode(array[i]); generate too many strings !
  //
  // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
  var chunk = 65536;
  var result = [],
      len = array.length,
      type = exports.getTypeOf(array);
  var k = 0,
      canUseApply = true;

  try {
    switch (type) {
      case "uint8array":
        String.fromCharCode.apply(null, new Uint8Array(0));
        break;

      case "nodebuffer":
        String.fromCharCode.apply(null, nodeBuffer(0));
        break;
    }
  } catch (e) {
    canUseApply = false;
  } // no apply : slow and painful algorithm
  // default browser on android 4.*


  if (!canUseApply) {
    var resultStr = "";

    for (var i = 0; i < array.length; i++) {
      resultStr += String.fromCharCode(array[i]);
    }

    return resultStr;
  }

  while (k < len && chunk > 1) {
    try {
      if (type === "array" || type === "nodebuffer") {
        result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
      } else {
        result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
      }

      k += chunk;
    } catch (e) {
      chunk = Math.floor(chunk / 2);
    }
  }

  return result.join("");
}

exports.applyFromCharCode = arrayLikeToString;
/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */

function arrayLikeToArrayLike(arrayFrom, arrayTo) {
  for (var i = 0; i < arrayFrom.length; i++) {
    arrayTo[i] = arrayFrom[i];
  }

  return arrayTo;
} // a matrix containing functions to transform everything into everything.


var transform = {}; // string to ?

transform.string = {
  string: identity,
  array: function array(input) {
    return stringToArrayLike(input, new Array(input.length));
  },
  arraybuffer: function arraybuffer(input) {
    return transform.string.uint8array(input).buffer;
  },
  uint8array: function uint8array(input) {
    return stringToArrayLike(input, new Uint8Array(input.length));
  },
  nodebuffer: function nodebuffer(input) {
    return stringToArrayLike(input, nodeBuffer(input.length));
  }
}; // array to ?

transform.array = {
  string: arrayLikeToString,
  array: identity,
  arraybuffer: function arraybuffer(input) {
    return new Uint8Array(input).buffer;
  },
  uint8array: function uint8array(input) {
    return new Uint8Array(input);
  },
  nodebuffer: function nodebuffer(input) {
    return nodeBuffer(input);
  }
}; // arraybuffer to ?

transform.arraybuffer = {
  string: function string(input) {
    return arrayLikeToString(new Uint8Array(input));
  },
  array: function array(input) {
    return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
  },
  arraybuffer: identity,
  uint8array: function uint8array(input) {
    return new Uint8Array(input);
  },
  nodebuffer: function nodebuffer(input) {
    return nodeBuffer(new Uint8Array(input));
  }
}; // uint8array to ?

transform.uint8array = {
  string: arrayLikeToString,
  array: function array(input) {
    return arrayLikeToArrayLike(input, new Array(input.length));
  },
  arraybuffer: function arraybuffer(input) {
    return input.buffer;
  },
  uint8array: identity,
  nodebuffer: function nodebuffer(input) {
    return nodeBuffer(input);
  }
}; // nodebuffer to ?

transform.nodebuffer = {
  string: arrayLikeToString,
  array: function array(input) {
    return arrayLikeToArrayLike(input, new Array(input.length));
  },
  arraybuffer: function arraybuffer(input) {
    return transform.nodebuffer.uint8array(input).buffer;
  },
  uint8array: function uint8array(input) {
    return arrayLikeToArrayLike(input, new Uint8Array(input.length));
  },
  nodebuffer: identity
};
/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */

exports.transformTo = function (outputType, input) {
  if (!input) {
    // undefined, null, etc
    // an empty string won't harm.
    input = "";
  }

  if (!outputType) {
    return input;
  }

  exports.checkSupport(outputType);
  var inputType = exports.getTypeOf(input);
  var result = transform[inputType][outputType](input);
  return result;
};
/**
 * Return the type of the input.
 * The type will be in a format valid for PizZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */


exports.getTypeOf = function (input) {
  if (typeof input === "string") {
    return "string";
  }

  if (Object.prototype.toString.call(input) === "[object Array]") {
    return "array";
  }

  if (support.nodebuffer && nodeBuffer.test(input)) {
    return "nodebuffer";
  }

  if (support.uint8array && input instanceof Uint8Array) {
    return "uint8array";
  }

  if (support.arraybuffer && input instanceof ArrayBuffer) {
    return "arraybuffer";
  }
};
/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */


exports.checkSupport = function (type) {
  var supported = support[type.toLowerCase()];

  if (!supported) {
    throw new Error(type + " is not supported by this browser");
  }
};

exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\\xFF\\xFF\\xFF\\xFF\\xFF\\xFF\\xFF\\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */

exports.pretty = function (str) {
  var res = "",
      code,
      i;

  for (i = 0; i < (str || "").length; i++) {
    code = str.charCodeAt(i);
    res += "\\\\x" + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
  }

  return res;
};
/**
 * Find a compression registered in PizZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the PizZip compression object, null if none found.
 */


exports.findCompression = function (compressionMethod) {
  for (var method in compressions) {
    if (!compressions.hasOwnProperty(method)) {
      continue;
    }

    if (compressions[method].magic === compressionMethod) {
      return compressions[method];
    }
  }

  return null;
};
/**
 * Cross-window, cross-Node-context regular expression detection
 * @param  {Object}  object Anything
 * @return {Boolean}        true if the object is a regular expression,
 * false otherwise
 */


exports.isRegExp = function (object) {
  return Object.prototype.toString.call(object) === "[object RegExp]";
};
/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */


exports.extend = function () {
  var result = {};
  var i, attr;

  for (i = 0; i < arguments.length; i++) {
    // arguments is not enumerable in some browsers
    for (attr in arguments[i]) {
      if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
        result[attr] = arguments[i][attr];
      }
    }
  }

  return result;
};

//# sourceURL=webpack://PizZip/./es6/utils.js?`)},"./es6/zipEntries.js":function(module,exports,__webpack_require__){eval(`

var StringReader = __webpack_require__(/*! ./stringReader */ "./es6/stringReader.js");

var NodeBufferReader = __webpack_require__(/*! ./nodeBufferReader */ "./es6/nodeBufferReader.js");

var Uint8ArrayReader = __webpack_require__(/*! ./uint8ArrayReader */ "./es6/uint8ArrayReader.js");

var ArrayReader = __webpack_require__(/*! ./arrayReader */ "./es6/arrayReader.js");

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");

var sig = __webpack_require__(/*! ./signature */ "./es6/signature.js");

var ZipEntry = __webpack_require__(/*! ./zipEntry */ "./es6/zipEntry.js");

var support = __webpack_require__(/*! ./support */ "./es6/support.js"); //  class ZipEntries {{{

/**
 * All the entries in the zip file.
 * @constructor
 * @param {String|ArrayBuffer|Uint8Array} data the binary stream to load.
 * @param {Object} loadOptions Options for loading the stream.
 */


function ZipEntries(data, loadOptions) {
  this.files = [];
  this.loadOptions = loadOptions;

  if (data) {
    this.load(data);
  }
}

ZipEntries.prototype = {
  /**
   * Check that the reader is on the speficied signature.
   * @param {string} expectedSignature the expected signature.
   * @throws {Error} if it is an other signature.
   */
  checkSignature: function checkSignature(expectedSignature) {
    var signature = this.reader.readString(4);

    if (signature !== expectedSignature) {
      throw new Error("Corrupted zip or bug : unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
    }
  },

  /**
   * Check if the given signature is at the given index.
   * @param {number} askedIndex the index to check.
   * @param {string} expectedSignature the signature to expect.
   * @return {boolean} true if the signature is here, false otherwise.
   */
  isSignature: function isSignature(askedIndex, expectedSignature) {
    var currentIndex = this.reader.index;
    this.reader.setIndex(askedIndex);
    var signature = this.reader.readString(4);
    var result = signature === expectedSignature;
    this.reader.setIndex(currentIndex);
    return result;
  },

  /**
   * Read the end of the central directory.
   */
  readBlockEndOfCentral: function readBlockEndOfCentral() {
    this.diskNumber = this.reader.readInt(2);
    this.diskWithCentralDirStart = this.reader.readInt(2);
    this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
    this.centralDirRecords = this.reader.readInt(2);
    this.centralDirSize = this.reader.readInt(4);
    this.centralDirOffset = this.reader.readInt(4);
    this.zipCommentLength = this.reader.readInt(2); // warning : the encoding depends of the system locale
    // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
    // On a windows machine, this field is encoded with the localized windows code page.

    var zipComment = this.reader.readData(this.zipCommentLength);
    var decodeParamType = support.uint8array ? "uint8array" : "array"; // To get consistent behavior with the generation part, we will assume that
    // this is utf8 encoded unless specified otherwise.

    var decodeContent = utils.transformTo(decodeParamType, zipComment);
    this.zipComment = this.loadOptions.decodeFileName(decodeContent);
  },

  /**
   * Read the end of the Zip 64 central directory.
   * Not merged with the method readEndOfCentral :
   * The end of central can coexist with its Zip64 brother,
   * I don't want to read the wrong number of bytes !
   */
  readBlockZip64EndOfCentral: function readBlockZip64EndOfCentral() {
    this.zip64EndOfCentralSize = this.reader.readInt(8);
    this.versionMadeBy = this.reader.readString(2);
    this.versionNeeded = this.reader.readInt(2);
    this.diskNumber = this.reader.readInt(4);
    this.diskWithCentralDirStart = this.reader.readInt(4);
    this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
    this.centralDirRecords = this.reader.readInt(8);
    this.centralDirSize = this.reader.readInt(8);
    this.centralDirOffset = this.reader.readInt(8);
    this.zip64ExtensibleData = {};
    var extraDataSize = this.zip64EndOfCentralSize - 44;
    var index = 0;
    var extraFieldId, extraFieldLength, extraFieldValue;

    while (index < extraDataSize) {
      extraFieldId = this.reader.readInt(2);
      extraFieldLength = this.reader.readInt(4);
      extraFieldValue = this.reader.readString(extraFieldLength);
      this.zip64ExtensibleData[extraFieldId] = {
        id: extraFieldId,
        length: extraFieldLength,
        value: extraFieldValue
      };
    }
  },

  /**
   * Read the end of the Zip 64 central directory locator.
   */
  readBlockZip64EndOfCentralLocator: function readBlockZip64EndOfCentralLocator() {
    this.diskWithZip64CentralDirStart = this.reader.readInt(4);
    this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
    this.disksCount = this.reader.readInt(4);

    if (this.disksCount > 1) {
      throw new Error("Multi-volumes zip are not supported");
    }
  },

  /**
   * Read the local files, based on the offset read in the central part.
   */
  readLocalFiles: function readLocalFiles() {
    var i, file;

    for (i = 0; i < this.files.length; i++) {
      file = this.files[i];
      this.reader.setIndex(file.localHeaderOffset);
      this.checkSignature(sig.LOCAL_FILE_HEADER);
      file.readLocalPart(this.reader);
      file.handleUTF8();
      file.processAttributes();
    }
  },

  /**
   * Read the central directory.
   */
  readCentralDir: function readCentralDir() {
    var file;
    this.reader.setIndex(this.centralDirOffset);

    while (this.reader.readString(4) === sig.CENTRAL_FILE_HEADER) {
      file = new ZipEntry({
        zip64: this.zip64
      }, this.loadOptions);
      file.readCentralPart(this.reader);
      this.files.push(file);
    }

    if (this.centralDirRecords !== this.files.length) {
      if (this.centralDirRecords !== 0 && this.files.length === 0) {
        // We expected some records but couldn't find ANY.
        // This is really suspicious, as if something went wrong.
        throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      } else {// We found some records but not all.
        // Something is wrong but we got something for the user: no error here.
        // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
      }
    }
  },

  /**
   * Read the end of central directory.
   */
  readEndOfCentral: function readEndOfCentral() {
    var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);

    if (offset < 0) {
      // Check if the content is a truncated zip or complete garbage.
      // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
      // extractible zip for example) but it can give a good hint.
      // If an ajax request was used without responseType, we will also
      // get unreadable data.
      var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);

      if (isGarbage) {
        throw new Error("Can't find end of central directory : is this a zip file ?");
      } else {
        throw new Error("Corrupted zip : can't find end of central directory");
      }
    }

    this.reader.setIndex(offset);
    var endOfCentralDirOffset = offset;
    this.checkSignature(sig.CENTRAL_DIRECTORY_END);
    this.readBlockEndOfCentral();
    /* extract from the zip spec :
              4)  If one of the fields in the end of central directory
                  record is too small to hold required data, the field
                  should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                  ZIP64 format record should be created.
              5)  The end of central directory record and the
                  Zip64 end of central directory locator record must
                  reside on the same disk when splitting or spanning
                  an archive.
           */

    if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
      this.zip64 = true;
      /*
               Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
               the zip file can fit into a 32bits integer. This cannot be solved : Javascript represents
               all numbers as 64-bit double precision IEEE 754 floating point numbers.
               So, we have 53bits for integers and bitwise operations treat everything as 32bits.
               see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
               and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
               */
      // should look for a zip64 EOCD locator

      offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);

      if (offset < 0) {
        throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
      }

      this.reader.setIndex(offset);
      this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
      this.readBlockZip64EndOfCentralLocator(); // now the zip64 EOCD record

      if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
        // console.warn("ZIP64 end of central directory not where expected.");
        this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);

        if (this.relativeOffsetEndOfZip64CentralDir < 0) {
          throw new Error("Corrupted zip : can't find the ZIP64 end of central directory");
        }
      }

      this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
      this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
      this.readBlockZip64EndOfCentral();
    }

    var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;

    if (this.zip64) {
      expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator

      expectedEndOfCentralDirOffset += 12
      /* should not include the leading 12 bytes */
      + this.zip64EndOfCentralSize;
    }

    var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;

    if (extraBytes > 0) {
      // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
      if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {// The offsets seem wrong, but we have something at the specified offset.
        // So\u2026 we keep it.
      } else {
        // the offset is wrong, update the "zero" of the reader
        // this happens if data has been prepended (crx files for example)
        this.reader.zero = extraBytes;
      }
    } else if (extraBytes < 0) {
      throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
    }
  },
  prepareReader: function prepareReader(data) {
    var type = utils.getTypeOf(data);
    utils.checkSupport(type);

    if (type === "string" && !support.uint8array) {
      this.reader = new StringReader(data, this.loadOptions.optimizedBinaryString);
    } else if (type === "nodebuffer") {
      this.reader = new NodeBufferReader(data);
    } else if (support.uint8array) {
      this.reader = new Uint8ArrayReader(utils.transformTo("uint8array", data));
    } else if (support.array) {
      this.reader = new ArrayReader(utils.transformTo("array", data));
    } else {
      throw new Error("Unexpected error: unsupported type '" + type + "'");
    }
  },

  /**
   * Read a zip file and create ZipEntries.
   * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
   */
  load: function load(data) {
    this.prepareReader(data);
    this.readEndOfCentral();
    this.readCentralDir();
    this.readLocalFiles();
  }
}; // }}} end of ZipEntries

module.exports = ZipEntries;

//# sourceURL=webpack://PizZip/./es6/zipEntries.js?`)},"./es6/zipEntry.js":function(module,exports,__webpack_require__){eval(`

var StringReader = __webpack_require__(/*! ./stringReader */ "./es6/stringReader.js");

var utils = __webpack_require__(/*! ./utils */ "./es6/utils.js");

var CompressedObject = __webpack_require__(/*! ./compressedObject */ "./es6/compressedObject.js");

var pizzipProto = __webpack_require__(/*! ./object */ "./es6/object.js");

var support = __webpack_require__(/*! ./support */ "./es6/support.js");

var MADE_BY_DOS = 0x00;
var MADE_BY_UNIX = 0x03; // class ZipEntry {{{

/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */

function ZipEntry(options, loadOptions) {
  this.options = options;
  this.loadOptions = loadOptions;
}

ZipEntry.prototype = {
  /**
   * say if the file is encrypted.
   * @return {boolean} true if the file is encrypted, false otherwise.
   */
  isEncrypted: function isEncrypted() {
    // bit 1 is set
    return (this.bitFlag & 0x0001) === 0x0001;
  },

  /**
   * say if the file has utf-8 filename/comment.
   * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
   */
  useUTF8: function useUTF8() {
    // bit 11 is set
    return (this.bitFlag & 0x0800) === 0x0800;
  },

  /**
   * Prepare the function used to generate the compressed content from this ZipFile.
   * @param {DataReader} reader the reader to use.
   * @param {number} from the offset from where we should read the data.
   * @param {number} length the length of the data to read.
   * @return {Function} the callback to get the compressed content (the type depends of the DataReader class).
   */
  prepareCompressedContent: function prepareCompressedContent(reader, from, length) {
    return function () {
      var previousIndex = reader.index;
      reader.setIndex(from);
      var compressedFileData = reader.readData(length);
      reader.setIndex(previousIndex);
      return compressedFileData;
    };
  },

  /**
   * Prepare the function used to generate the uncompressed content from this ZipFile.
   * @param {DataReader} reader the reader to use.
   * @param {number} from the offset from where we should read the data.
   * @param {number} length the length of the data to read.
   * @param {PizZip.compression} compression the compression used on this file.
   * @param {number} uncompressedSize the uncompressed size to expect.
   * @return {Function} the callback to get the uncompressed content (the type depends of the DataReader class).
   */
  prepareContent: function prepareContent(reader, from, length, compression, uncompressedSize) {
    return function () {
      var compressedFileData = utils.transformTo(compression.uncompressInputType, this.getCompressedContent());
      var uncompressedFileData = compression.uncompress(compressedFileData);

      if (uncompressedFileData.length !== uncompressedSize) {
        throw new Error("Bug : uncompressed data size mismatch");
      }

      return uncompressedFileData;
    };
  },

  /**
   * Read the local part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readLocalPart: function readLocalPart(reader) {
    // we already know everything from the central dir !
    // If the central dir data are false, we are doomed.
    // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
    // The less data we get here, the more reliable this should be.
    // Let's skip the whole header and dash to the data !
    reader.skip(22); // in some zip created on windows, the filename stored in the central dir contains \\ instead of /.
    // Strangely, the filename here is OK.
    // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
    // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
    // Search "unzip mismatching "local" filename continuing with "central" filename version" on
    // the internet.
    //
    // I think I see the logic here : the central directory is used to display
    // content and the local directory is used to extract the files. Mixing / and \\
    // may be used to display \\ to windows users and use / when extracting the files.
    // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394

    this.fileNameLength = reader.readInt(2);
    var localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir

    this.fileName = reader.readData(this.fileNameLength);
    reader.skip(localExtraFieldsLength);

    if (this.compressedSize === -1 || this.uncompressedSize === -1) {
      throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)");
    }

    var compression = utils.findCompression(this.compressionMethod);

    if (compression === null) {
      // no compression found
      throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
    }

    this.decompressed = new CompressedObject();
    this.decompressed.compressedSize = this.compressedSize;
    this.decompressed.uncompressedSize = this.uncompressedSize;
    this.decompressed.crc32 = this.crc32;
    this.decompressed.compressionMethod = this.compressionMethod;
    this.decompressed.getCompressedContent = this.prepareCompressedContent(reader, reader.index, this.compressedSize, compression);
    this.decompressed.getContent = this.prepareContent(reader, reader.index, this.compressedSize, compression, this.uncompressedSize); // we need to compute the crc32...

    if (this.loadOptions.checkCRC32) {
      this.decompressed = utils.transformTo("string", this.decompressed.getContent());

      if (pizzipProto.crc32(this.decompressed) !== this.crc32) {
        throw new Error("Corrupted zip : CRC32 mismatch");
      }
    }
  },

  /**
   * Read the central part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readCentralPart: function readCentralPart(reader) {
    this.versionMadeBy = reader.readInt(2);
    this.versionNeeded = reader.readInt(2);
    this.bitFlag = reader.readInt(2);
    this.compressionMethod = reader.readString(2);
    this.date = reader.readDate();
    this.crc32 = reader.readInt(4);
    this.compressedSize = reader.readInt(4);
    this.uncompressedSize = reader.readInt(4);
    this.fileNameLength = reader.readInt(2);
    this.extraFieldsLength = reader.readInt(2);
    this.fileCommentLength = reader.readInt(2);
    this.diskNumberStart = reader.readInt(2);
    this.internalFileAttributes = reader.readInt(2);
    this.externalFileAttributes = reader.readInt(4);
    this.localHeaderOffset = reader.readInt(4);

    if (this.isEncrypted()) {
      throw new Error("Encrypted zip are not supported");
    }

    this.fileName = reader.readData(this.fileNameLength);
    this.readExtraFields(reader);
    this.parseZIP64ExtraField(reader);
    this.fileComment = reader.readData(this.fileCommentLength);
  },

  /**
   * Parse the external file attributes and get the unix/dos permissions.
   */
  processAttributes: function processAttributes() {
    this.unixPermissions = null;
    this.dosPermissions = null;
    var madeBy = this.versionMadeBy >> 8; // Check if we have the DOS directory flag set.
    // We look for it in the DOS and UNIX permissions
    // but some unknown platform could set it as a compatibility flag.

    this.dir = !!(this.externalFileAttributes & 0x0010);

    if (madeBy === MADE_BY_DOS) {
      // first 6 bits (0 to 5)
      this.dosPermissions = this.externalFileAttributes & 0x3f;
    }

    if (madeBy === MADE_BY_UNIX) {
      this.unixPermissions = this.externalFileAttributes >> 16 & 0xffff; // the octal permissions are in (this.unixPermissions & 0x01FF).toString(8);
    } // fail safe : if the name ends with a / it probably means a folder


    if (!this.dir && this.fileNameStr.slice(-1) === "/") {
      this.dir = true;
    }
  },

  /**
   * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
   */
  parseZIP64ExtraField: function parseZIP64ExtraField() {
    if (!this.extraFields[0x0001]) {
      return;
    } // should be something, preparing the extra reader


    var extraReader = new StringReader(this.extraFields[0x0001].value); // I really hope that these 64bits integer can fit in 32 bits integer, because js
    // won't let us have more.

    if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
      this.uncompressedSize = extraReader.readInt(8);
    }

    if (this.compressedSize === utils.MAX_VALUE_32BITS) {
      this.compressedSize = extraReader.readInt(8);
    }

    if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
      this.localHeaderOffset = extraReader.readInt(8);
    }

    if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
      this.diskNumberStart = extraReader.readInt(4);
    }
  },

  /**
   * Read the central part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readExtraFields: function readExtraFields(reader) {
    var start = reader.index;
    var extraFieldId, extraFieldLength, extraFieldValue;
    this.extraFields = this.extraFields || {};

    while (reader.index < start + this.extraFieldsLength) {
      extraFieldId = reader.readInt(2);
      extraFieldLength = reader.readInt(2);
      extraFieldValue = reader.readString(extraFieldLength);
      this.extraFields[extraFieldId] = {
        id: extraFieldId,
        length: extraFieldLength,
        value: extraFieldValue
      };
    }
  },

  /**
   * Apply an UTF8 transformation if needed.
   */
  handleUTF8: function handleUTF8() {
    var decodeParamType = support.uint8array ? "uint8array" : "array";

    if (this.useUTF8()) {
      this.fileNameStr = pizzipProto.utf8decode(this.fileName);
      this.fileCommentStr = pizzipProto.utf8decode(this.fileComment);
    } else {
      var upath = this.findExtraFieldUnicodePath();

      if (upath !== null) {
        this.fileNameStr = upath;
      } else {
        var fileNameByteArray = utils.transformTo(decodeParamType, this.fileName);
        this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
      }

      var ucomment = this.findExtraFieldUnicodeComment();

      if (ucomment !== null) {
        this.fileCommentStr = ucomment;
      } else {
        var commentByteArray = utils.transformTo(decodeParamType, this.fileComment);
        this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
      }
    }
  },

  /**
   * Find the unicode path declared in the extra field, if any.
   * @return {String} the unicode path, null otherwise.
   */
  findExtraFieldUnicodePath: function findExtraFieldUnicodePath() {
    var upathField = this.extraFields[0x7075];

    if (upathField) {
      var extraReader = new StringReader(upathField.value); // wrong version

      if (extraReader.readInt(1) !== 1) {
        return null;
      } // the crc of the filename changed, this field is out of date.


      if (pizzipProto.crc32(this.fileName) !== extraReader.readInt(4)) {
        return null;
      }

      return pizzipProto.utf8decode(extraReader.readString(upathField.length - 5));
    }

    return null;
  },

  /**
   * Find the unicode comment declared in the extra field, if any.
   * @return {String} the unicode comment, null otherwise.
   */
  findExtraFieldUnicodeComment: function findExtraFieldUnicodeComment() {
    var ucommentField = this.extraFields[0x6375];

    if (ucommentField) {
      var extraReader = new StringReader(ucommentField.value); // wrong version

      if (extraReader.readInt(1) !== 1) {
        return null;
      } // the crc of the comment changed, this field is out of date.


      if (pizzipProto.crc32(this.fileComment) !== extraReader.readInt(4)) {
        return null;
      }

      return pizzipProto.utf8decode(extraReader.readString(ucommentField.length - 5));
    }

    return null;
  }
};
module.exports = ZipEntry;

//# sourceURL=webpack://PizZip/./es6/zipEntry.js?`)},"./node_modules/base64-js/index.js":function(module,exports,__webpack_require__){eval(`

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


//# sourceURL=webpack://PizZip/./node_modules/base64-js/index.js?`)},"./node_modules/buffer/index.js":function(module,exports,__webpack_require__){eval(`/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If \`Buffer.TYPED_ARRAY_SUPPORT\`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to \`Uint8Array\` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the \`TypedArray.prototype.subarray\` function.
 *
 *   - IE10 has a broken \`TypedArray.prototype.subarray\` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set \`Buffer.TYPED_ARRAY_SUPPORT\` to \`false\` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack \`subarray\`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken \`subarray\`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented \`Uint8Array\` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of \`Uint8Array\` that have their
 * prototype changed to \`Buffer.prototype\`. Furthermore, \`Buffer\` is a subclass of
 * \`Uint8Array\`, so the returned instances will have all the node \`Buffer\` methods
 * and the \`Uint8Array\` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The \`Uint8Array\` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if \`array\` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\\'offset\\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\\'length\\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented \`Uint8Array\` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use \`length < kMaxLength()\` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by \`Buffer.isBuffer\` and \`is-buffer\` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of \`val\` in \`buffer\` at offset >= \`byteOffset\`,
// OR the last index of \`val\` in \`buffer\` at offset <= \`byteOffset\`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into \`buffer\`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \\n and \\t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\\s+|\\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

//# sourceURL=webpack://PizZip/./node_modules/buffer/index.js?`)},"./node_modules/ieee754/index.js":function(module,exports){eval(`exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


//# sourceURL=webpack://PizZip/./node_modules/ieee754/index.js?`)},"./node_modules/isarray/index.js":function(module,exports){eval(`var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


//# sourceURL=webpack://PizZip/./node_modules/isarray/index.js?`)},"./node_modules/pako/index.js":function(module,exports,__webpack_require__){eval(`// Top level file is just a mixin of submodules & constants


var assign    = __webpack_require__(/*! ./lib/utils/common */ "./node_modules/pako/lib/utils/common.js").assign;

var deflate   = __webpack_require__(/*! ./lib/deflate */ "./node_modules/pako/lib/deflate.js");
var inflate   = __webpack_require__(/*! ./lib/inflate */ "./node_modules/pako/lib/inflate.js");
var constants = __webpack_require__(/*! ./lib/zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;


//# sourceURL=webpack://PizZip/./node_modules/pako/index.js?`)},"./node_modules/pako/lib/deflate.js":function(module,exports,__webpack_require__){eval(`


var zlib_deflate = __webpack_require__(/*! ./zlib/deflate */ "./node_modules/pako/lib/zlib/deflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with \`Z_FINISH\` / \`true\` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * \`Z_SYNC_FLUSH\` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad \`onData\` / \`onEnd\`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - \`level\`
 * - \`windowBits\`
 * - \`memLevel\`
 * - \`strategy\`
 * - \`dictionary\`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - \`chunkSize\` - size of generated data chunks (16K by default)
 * - \`raw\` (Boolean) - do raw deflate
 * - \`gzip\` (Boolean) - create gzip wrapper
 * - \`to\` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - \`header\` (Object) - custom header for gzip
 *   - \`text\` (Boolean) - true if compressed data believed to be text
 *   - \`time\` (Number) - modification time, unix timestamp
 *   - \`os\` (Number) - operation system code
 *   - \`extra\` (Array) - array of bytes with extra data (max 65536)
 *   - \`name\` (String) - file name (binary string)
 *   - \`comment\` (String) - comment (binary string)
 *   - \`hcrc\` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * \`\`\`javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * \`\`\`
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or \`false\` means Z_NO_FLUSH, \`true\` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns \`true\` on success. The last data block must have
 * mode Z_FINISH (or \`true\`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use \`Uint8Array\` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular \`Array\`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * \`\`\`javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * \`\`\`
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in \`chunks[]\` property and glue
 * those in \`onEnd\`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill \`results\` / \`err\` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress \`data\` with deflate algorithm and \`options\`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - \`raw\` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - \`to\` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * \`\`\`javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * \`\`\`
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/deflate.js?`)},"./node_modules/pako/lib/inflate.js":function(module,exports,__webpack_require__){eval(`


var zlib_inflate = __webpack_require__(/*! ./zlib/inflate */ "./node_modules/pako/lib/zlib/inflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var c            = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");
var GZheader     = __webpack_require__(/*! ./zlib/gzheader */ "./node_modules/pako/lib/zlib/gzheader.js");

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with \`Z_FINISH\` / \`true\` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * \`Z_SYNC_FLUSH\` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - \`windowBits\`
 * - \`dictionary\`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - \`chunkSize\` - size of generated data chunks (16K by default)
 * - \`raw\` (Boolean) - do raw inflate
 * - \`to\` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from \`chunkSize\`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * \`\`\`javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * \`\`\`
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for \`raw\` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If \`windowBits\` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or \`false\` means Z_NO_FLUSH, \`true\` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns \`true\` on success. The last data block must have
 * mode Z_FINISH (or \`true\`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use \`Uint8Array\` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular \`Array\`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * \`\`\`javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * \`\`\`
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in \`chunks[]\` property and glue
 * those in \`onEnd\`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill \`results\` / \`err\` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 aligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress \`data\` with inflate/ungzip and \`options\`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate \`ungzip\` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - \`raw\` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - \`to\` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from \`chunkSize\`, depending on content.
 *
 *
 * ##### Example:
 *
 * \`\`\`javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * \`\`\`
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/inflate.js?`)},"./node_modules/pako/lib/utils/common.js":function(module,exports,__webpack_require__){eval(`


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/utils/common.js?`)},"./node_modules/pako/lib/utils/strings.js":function(module,exports,__webpack_require__){eval(`// String encode/decode helpers



var utils = __webpack_require__(/*! ./common */ "./node_modules/pako/lib/utils/common.js");


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // On Chrome, the arguments in a function call that are allowed is \`65534\`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/utils/strings.js?`)},"./node_modules/pako/lib/zlib/adler32.js":function(module,exports,__webpack_require__){eval(`

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/adler32.js?`)},"./node_modules/pako/lib/zlib/constants.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/constants.js?`)},"./node_modules/pako/lib/zlib/crc32.js":function(module,exports,__webpack_require__){eval(`

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/crc32.js?`)},"./node_modules/pako/lib/zlib/deflate.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var trees   = __webpack_require__(/*! ./trees */ "./node_modules/pako/lib/zlib/trees.js");
var adler32 = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32   = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var msg     = __webpack_require__(/*! ./messages */ "./node_modules/pako/lib/zlib/messages.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from \`s.pending_buf\` (size is \`s.lit_bufsize * 2\`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/deflate.js?`)},"./node_modules/pako/lib/zlib/gzheader.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/gzheader.js?`)},"./node_modules/pako/lib/zlib/inffast.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use \`s_window\` instead \`window\`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\\n" :
        //        "inflate:         literal 0x%02x\\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/inffast.js?`)},"./node_modules/pako/lib/zlib/inflate.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var adler32       = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32         = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var inflate_fast  = __webpack_require__(/*! ./inffast */ "./node_modules/pako/lib/zlib/inffast.js");
var inflate_table = __webpack_require__(/*! ./inftrees */ "./node_modules/pako/lib/zlib/inftrees.js");

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\\n" :
          //        "inflate:         literal 0x%02x\\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/inflate.js?`)},"./node_modules/pako/lib/zlib/inftrees.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/inftrees.js?`)},"./node_modules/pako/lib/zlib/messages.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/messages.js?`)},"./node_modules/pako/lib/zlib/trees.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if \`static_tree\` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\\nbit length overflow\\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/trees.js?`)},"./node_modules/pako/lib/zlib/zstream.js":function(module,exports,__webpack_require__){eval(`

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


//# sourceURL=webpack://PizZip/./node_modules/pako/lib/zlib/zstream.js?`)},"./node_modules/webpack/buildin/global.js":function(module,exports){eval(`var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


//# sourceURL=webpack://PizZip/(webpack)/buildin/global.js?`)}});window.PizZipUtils=function(c){var j={};function U(s){if(j[s])return j[s].exports;var t=j[s]={i:s,l:!1,exports:{}};return c[s].call(t.exports,t,t.exports,U),t.l=!0,t.exports}return U.m=c,U.c=j,U.d=function(s,t,m){U.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:m})},U.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},U.t=function(s,t){if(t&1&&(s=U(s)),t&8||t&4&&typeof s=="object"&&s&&s.__esModule)return s;var m=Object.create(null);if(U.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:s}),t&2&&typeof s!="string")for(var d in s)U.d(m,d,function(x){return s[x]}.bind(null,d));return m},U.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return U.d(t,"a",t),t},U.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},U.p="",U(U.s="./es6/index.js")}({"./es6/index.js":function(module,exports,__webpack_require__){eval(`

var PizZipUtils = {}; // just use the responseText with xhr1, response with xhr2.
// The transformation doesn't throw away high-order byte (with responseText)
// because PizZip handles that case. If not used with PizZip, you may need to
// do it, see https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data

PizZipUtils._getBinaryFromXHR = function (xhr) {
  // for xhr.responseText, the 0xFF mask is applied by PizZip
  return xhr.response || xhr.responseText;
}; // taken from jQuery


function createStandardXHR() {
  try {
    return new window.XMLHttpRequest();
  } catch (e) {}
}

function createActiveXHR() {
  try {
    return new window.ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {}
} // Create the request object


var createXHR = window.ActiveXObject ?
/* Microsoft failed to properly
 * implement the XMLHttpRequest in IE7 (can't request local files),
 * so we use the ActiveXObject when it is available
 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
 * we need a fallback.
 */
function () {
  return createStandardXHR() || createActiveXHR();
} : // For all other browsers, use the standard XMLHttpRequest object
createStandardXHR;

PizZipUtils.getBinaryContent = function (path, callback) {
  /*
   * Here is the tricky part : getting the data.
   * In firefox/chrome/opera/... setting the mimeType to 'text/plain; charset=x-user-defined'
   * is enough, the result is in the standard xhr.responseText.
   * cf https://developer.mozilla.org/En/XMLHttpRequest/Using_XMLHttpRequest#Receiving_binary_data_in_older_browsers
   * In IE <= 9, we must use (the IE only) attribute responseBody
   * (for binary data, its content is different from responseText).
   * In IE 10, the 'charset=x-user-defined' trick doesn't work, only the
   * responseType will work :
   * http://msdn.microsoft.com/en-us/library/ie/hh673569%28v=vs.85%29.aspx#Binary_Object_upload_and_download
   *
   * I'd like to use jQuery to avoid this XHR madness, but it doesn't support
   * the responseType attribute : http://bugs.jquery.com/ticket/11461
   */
  try {
    var xhr = createXHR();
    xhr.open("GET", path, true); // recent browsers

    if ("responseType" in xhr) {
      xhr.responseType = "arraybuffer";
    } // older browser


    if (xhr.overrideMimeType) {
      xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }

    xhr.onreadystatechange = function (evt) {
      var file, err; // use \`xhr\` and not \`this\`... thanks IE

      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 0) {
          file = null;
          err = null;

          try {
            file = PizZipUtils._getBinaryFromXHR(xhr);
          } catch (e) {
            err = new Error(e);
          }

          callback(err, file);
        } else {
          callback(new Error("Ajax error for " + path + " : " + this.status + " " + this.statusText), null);
        }
      }
    };

    xhr.send();
  } catch (e) {
    callback(new Error(e), null);
  }
};

module.exports = PizZipUtils;

//# sourceURL=webpack://PizZipUtils/./es6/index.js?`)}});var report_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main=defineComponent({name:"report",props:{},emits:[],setup(c,{emit:j}){const U=ref(null);let s=reactive({begin:new Date().format("yyyy-MM-dd ")+"00:00:00",end:new Date().format("yyyy-MM-dd ")+"23:59:59",dustOption:{title:[{subtext:"um/m\xB3",subtextStyle:{color:"#3CA2F2"},left:"10"}],grid:{top:"20%",right:"10",bottom:"20",left:"50"},tooltip:{trigger:"axis",transitionDuration:.8,axisPointer:{},backgroundColor:"rgba(18,34,68,0.5)",extraCssText:"box-shadow: inset 0px 0px 8px #68a9ff;border-color:#68a9ff;",textStyle:{color:"#fff"}},xAxis:{data:[],axisLabel:{inside:!0,color:"#3CA2F2",formatter:function(t){let m="",d=t.length,x=10,N=Math.ceil(d/x);if(d>x)for(let C=0;C<N;C++){let T="",p=C*x,i=p+x;C==N-1?T=t.substring(p,d):T=t.substring(p,i)+`
`,m+=T}else m=t;return m}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},splitLine:{show:!1,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},z:2},yAxis:{axisLabel:{color:"#3CA2F2"},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},splitLine:{show:!0,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}}},dataZoom:[{type:"inside"}],series:[]},dustAlarmOption:{title:[{subtext:"\u6B21",subtextStyle:{color:"#3CA2F2"},left:"10"}],grid:{top:"20%",right:"10",bottom:"20",left:"50"},tooltip:{trigger:"axis",transitionDuration:.8,axisPointer:{},backgroundColor:"rgba(18,34,68,0.5)",extraCssText:"box-shadow: inset 0px 0px 8px #68a9ff;border-color:#68a9ff;",textStyle:{color:"#fff"}},xAxis:{data:[],axisLabel:{inside:!0,color:"#3CA2F2",formatter:function(t){let m="",d=t.length,x=10,N=Math.ceil(d/x);if(d>x)for(let C=0;C<N;C++){let T="",p=C*x,i=p+x;C==N-1?T=t.substring(p,d):T=t.substring(p,i)+`
`,m+=T}else m=t;return m}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},splitLine:{show:!1,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},z:2},yAxis:{axisLabel:{color:"#3CA2F2"},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},splitLine:{show:!0,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}}},dataZoom:[{type:"inside"}],series:[]},alarmOption:{title:[{subtext:"\u6B21",subtextStyle:{color:"#3CA2F2"},left:"35"}],grid:{top:"20%",right:"10",bottom:"20",left:"50"},tooltip:{trigger:"axis",transitionDuration:.8,axisPointer:{type:"shadow"},backgroundColor:"rgba(18,34,68,0.5)",extraCssText:"box-shadow: inset 0px 0px 8px #68a9ff;border-color:#68a9ff;",textStyle:{color:"#fff"}},xAxis:{data:[],axisLabel:{inside:!0,color:"#3CA2F2",formatter:function(t){let m="",d=t.length,x=10,N=Math.ceil(d/x);if(d>x)for(let C=0;C<N;C++){let T="",p=C*x,i=p+x;C==N-1?T=t.substring(p,d):T=t.substring(p,i)+`
`,m+=T}else m=t;return m}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},splitLine:{show:!0,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},z:10},yAxis:{axisLabel:{color:"#3CA2F2"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}},splitLine:{show:!0,lineStyle:{color:["#5099FF"],type:"solid",opacity:.2}}},dataZoom:[{type:"inside"}],series:[]},list1:{name:"list11",header:[{name:"\u8BBE\u5907id",width:"20%",key:"deviceid"},{name:"AQI",width:"20%",key:"aqi",rang:!0},{name:"\u5728\u7EBF\u7387(%)",width:"20%",key:"online",rang:!0}],rows:[],page:1,size:20,total:100,currentPage:1,select:{id:"id",open:!1,selectAll:!1,isIndeterminate:!1,selectId:[]},expor:!1,ischildren:!1,headerShow:!0,pageShow:!1},list2:{name:"list11",header:[{name:"\u8BBE\u5907id",width:"20%",key:"deviceid"},{name:"PM10",width:"20%",key:"pm10",rang:!0},{name:"\u4E0A\u5468PM10",width:"20%",key:"pm10Up",rang:!0},{name:"\u73AF\u6BD4\u589E\u957F\u7387(%)",width:"20%",key:"pm10Ratio",rang:!0}],rows:[],page:1,size:20,total:7,currentPage:1,select:{id:"id",open:!1,selectAll:!1,isIndeterminate:!1,selectId:[]},expor:!1,ischildren:!1,headerShow:!0,pageShow:!1},list3:{name:"list11",header:[{name:"\u8BBE\u5907id",width:"20%",key:"deviceid"},{name:"PM25",width:"20%",key:"pm25",rang:!0},{name:"\u4E0A\u5468PM25",width:"20%",key:"pm25Up",rang:!0},{name:"\u73AF\u6BD4\u589E\u957F\u7387(%)",width:"20%",key:"pm25Ratio",rang:!0}],rows:[],page:1,size:20,total:7,currentPage:1,select:{id:"id",open:!1,selectAll:!1,isIndeterminate:!1,selectId:[]},expor:!1,ischildren:!1,headerShow:!0,pageShow:!1},list4:{name:"alarm",header:[{name:"\u8BBE\u5907id",width:"20%",key:"deviceid"},{name:"\u89E6\u53D1\u65F6\u95F4",width:"20%",key:"createTime"}],rows:[],page:1,size:20,total:0,currentPage:1,select:{id:"id",open:!1,selectAll:!1,isIndeterminate:!1,selectId:[]},expor:!1,ischildren:!1,headerShow:!0,pageShow:!1},list5:{name:"aiList",header:[{name:"\u8F66\u724C\u53F7",width:"20%",key:"deviceid"},{name:"\u89E6\u53D1\u4E8B\u4EF6",width:"20%",key:"typenamech"},{name:"\u89E6\u53D1\u65F6\u95F4",width:"20%",key:"createTime"}],rows:[],page:1,size:20,total:0,currentPage:1,select:{id:"id",open:!1,selectAll:!1,isIndeterminate:!1,selectId:[]},expor:!1,ischildren:!1,headerShow:!0,pageShow:!1},all:{},async getAlarm(t){let m=await getAlarm({createTime:new Date(this.begin).format("yyyy-MM-dd ")+"00:00:00",alarmType:t,pageNum:t==="TransportingSlagCar"?this.list4.page:this.list5.page,pageSize:t==="TransportingSlagCar"?this.list4.size:this.list5.size});m.code===200&&(t==="UpperAirFire"?(m.data.rows.forEach(d=>{d.alarmContent=`${d.carnumber}\u5728${d.createTime}\u89E6\u53D1\u4E86\u62A5\u8B66\uFF0C\u62A5\u8B66\u4E8B\u4EF6\u4E3A${d.typenamech}`}),this.list4.rows=m.data.rows,this.list4.total=m.data.total):t==="TransportingSlagCar"&&(m.data.rows.forEach(d=>{d.alarmContent=`${d.deviceid}\u5728${d.createTime}\u89E6\u53D1\u4E86\u62A5\u8B66\uFF0C\u62A5\u8B66\u4E8B\u4EF6\u4E3A${d.typenamech}`}),this.list5.rows=m.data.rows,this.list5.total=m.data.total))},async getDust(){let t=await getDust({begin:new Date(this.begin).format("yyyy-MM-dd ")+"00:00:00",end:new Date(this.begin).format("yyyy-MM-dd ")+"23:59:59"});if(t.code===200){this.dustOption.xAxis.data=t.data.time.map(m=>new Date(m).format("hh")),this.dustOption.series=[];for(const m in t.data)m!=="time"&&this.dustOption.series.push({name:m,type:"line",showBackground:!0,showSymbol:!0,symbol:"circle",symbolSize:10,itemStyle:{shadowColor:"#fff",shadowBlur:10},data:t.data[m]})}},async getDustAlarm(){let t=await getDustAlarm({begin:new Date(this.begin).format("yyyy-MM-dd ")+"00:00:00",end:new Date(this.begin).format("yyyy-MM-dd ")+"23:59:59"});if(t.code===200){this.dustAlarmOption.xAxis.data=t.data.times.map(m=>new Date(m).format("hh")),this.dustAlarmOption.series=[];for(const m in t.data)m!=="times"&&this.dustAlarmOption.series.push({name:m,type:"line",showBackground:!0,showSymbol:!0,symbol:"circle",symbolSize:10,itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00E400"},{offset:.5,color:"rgba(0,228,0,0.5)"},{offset:1,color:"#999999"}]),shadowColor:"#fff",shadowBlur:10},data:t.data[m]})}},async getAiFire(){let t=await getAiFire({begin:new Date(this.begin).format("yyyy-MM-dd ")+"00:00:00",end:new Date(this.begin).format("yyyy-MM-dd ")+"23:59:59"});if(t.code===200){this.alarmOption.xAxis.data=[],this.alarmOption.series=[];let m={name:"",type:"bar",barWidth:10,showBackground:!0,itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:[],label:{formatter:"{c}",show:!0,position:"top",fontWeight:"bolder",fontSize:"12",color:"#fff"}};t.data.forEach(d=>{this.alarmOption.xAxis.data.push(d.name),m.data.push(d.num)}),m.data.length>0&&this.alarmOption.series.push(m)}},async getStationPm(){let t=await getStationPm({begin:new Date(this.begin).format("yyyy-MM-dd ")+"00:00:00",end:new Date(this.begin).format("yyyy-MM-dd ")+"23:59:59"});t.code===200&&(t.data.forEach(m=>{m.pm10Ratio=(m.pm10Ratio*100).toFixed(2),m.pm25Ratio=(m.pm25Ratio*100).toFixed(2)}),this.list2.rows=t.data,this.list3.rows=t.data)},async getStationAqi(){let t=await getStationAqi({begin:new Date(this.begin).format("yyyy-MM-dd ")+"00:00:00",end:new Date(this.begin).format("yyyy-MM-dd ")+"23:59:59"});t.code===200&&(this.list1.rows=t.data)},async getAll(){let t=await getAll({begin:new Date(this.begin).format("yyyy-MM-dd ")+"00:00:00",end:new Date(this.begin).format("yyyy-MM-dd ")+"23:59:59"});t.code===200&&(this.all=t.data)},closePdf:()=>{document.getElementById("pdfImageBox").remove(),document.getElementsByClassName("closePdf")[0]&&(document.getElementsByClassName("closePdf")[0].style.display="none")},exportPdf(t){ElMessage({type:"success",message:"\u6B63\u5728\u52A0\u8F7D\u8BF7\u7A0D\u7B49'''"}),pdf("report",document.getElementById("report-title").innerText,t)},base641:"",base642:"",base643:"",getImgBase641(t){s.base641=t},getImgBase642(t){s.base642=t},getImgBase643(t){s.base643=t},base64DataURLToArrayBuffer(t){const m=/^data:image\/(png|jpg|svg|svg\+xml);base64,/;if(!m.test(t))return!1;const d=t.replace(m,"");let x;typeof window!="undefined"?x=window.atob(d):x=new Buffer(d,"base64").toString("binary");const N=x.length,C=new Uint8Array(N);for(let T=0;T<N;T++){const p=x.charCodeAt(T);C[T]=p}return C.buffer},exportWord(){PizZipUtils.getBinaryContent("http://119.3.27.196:80/report.docx",(t,m)=>{if(t)throw t;let d={};d.centered=!0,d.fileType="docx",d.getImage=function(p){return s.base64DataURLToArrayBuffer(p)},d.getSize=function(p,i,w){switch(w){case"image1":return[380,200];case"image2":return[240,200];case"image3":return[680,200]}};let x=new ImageModule(d),N=new PizZip(m),C=new window.docxtemplater;C.loadZip(N),C.attachModule(x),C.setData({title:document.getElementById("report-title").innerText,pm10:document.getElementById("pm10").innerText,pm25:document.getElementById("pm25").innerText,trafficflow:document.getElementById("trafficFlow").innerText,coveredwithtarpaulin:document.getElementById("CoveredWithTarpaulin").innerText,cardirty:document.getElementById("CarDirty").innerText,normalcar:document.getElementById("normalCar").innerText,vehiclesoffslag:document.getElementById("VehiclesOffSlag").innerText,fire:document.getElementById("fire").innerText,content:document.getElementById("text-content").innerText,mark:document.getElementById("mark").innerText,image1:s.base641,image2:s.base642,image3:s.base643,table1:s.list1.rows,table2:s.list2.rows.map(p=>({deviceid:p.deviceid,pm10:p.pm10,pm10up:p.pm10Up,pm10ratio:p.pm10Ratio})),table3:s.list3.rows.map(p=>({deviceid:p.deviceid,pm25:p.pm25,pm25up:p.pm25Up,pm25ratio:p.pm25Ratio})),table4:s.list4.rows.map(p=>({deviceid:p.deviceid,createtime:p.createTime})),table5:s.list5.rows.map(p=>({deviceid:p.deviceid,typenamech:p.typenamech,createtime:p.createTime}))});try{C.render()}catch(p){throw p.message,p.name,p.stack,p.properties,p}let T=C.getZip().generate({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});saveAs(T,document.getElementById("report-title").innerText+".docx")})},backTop(){let t=document.getElementById("report").clientHeight;U.value.setScrollTop(t-=20);let m=setInterval(()=>{t-=10,(t<10||t===10)&&(t=0,clearInterval(m)),U.value.setScrollTop(t)},5)},handle(){s.getAlarm("TransportingSlagCar"),s.getAlarm("UpperAirFire"),s.getAiFire(),s.getDust(),s.getStationPm(),s.getStationAqi(),s.getAll(),s.getDustAlarm()}});return onMounted(()=>{s.getAlarm("TransportingSlagCar"),s.getAlarm("UpperAirFire"),s.getAiFire(),s.getDust(),s.getStationPm(),s.getStationAqi(),s.getAll(),s.getDustAlarm()}),{report:s,reportScorll:U}}}),_withScopeId=c=>(pushScopeId("data-v-0481e988"),c=c(),popScopeId(),c),_hoisted_1={class:"report-page"},_hoisted_2={class:"boxReport"},_hoisted_3={class:"flex"},_hoisted_4=createTextVNode("\u9884\u89C8PDF"),_hoisted_5=createTextVNode("\u5BFC\u51FAPDF"),_hoisted_6=createTextVNode("\u5BFC\u51FAword"),_hoisted_7={id:"report",class:"report flex wrap"},_hoisted_8={id:"report-title",class:"col-12 report-title backCo",style:{height:"70px"}},_hoisted_9={class:"col-3",style:{height:"90px"}},_hoisted_10=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},[createTextVNode("PH"),createBaseVNode("span",null,"10")],-1)),_hoisted_11={id:"pm10",class:"text-num"},_hoisted_12={class:"col-3",style:{height:"90px"}},_hoisted_13=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u8F66\u6D41\u91CF",-1)),_hoisted_14={id:"trafficFlow",class:"text-num"},_hoisted_15={class:"col-3",style:{height:"90px"}},_hoisted_16=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u7BF7\u5E03\u672A\u8986\u76D6\u6570\u91CF",-1)),_hoisted_17={id:"CoveredWithTarpaulin",class:"text-num"},_hoisted_18={class:"col-3",style:{height:"90px"}},_hoisted_19=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u8F66\u8EAB\u6E05\u6D01\u4E0D\u8FBE\u6807\u6570\u91CF",-1)),_hoisted_20={id:"CarDirty",class:"text-num"},_hoisted_21={class:"col-3",style:{height:"90px"}},_hoisted_22=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},[createTextVNode("PH"),createBaseVNode("span",null,"2.5")],-1)),_hoisted_23={id:"pm25",class:"text-num"},_hoisted_24={class:"col-3",style:{height:"90px"}},_hoisted_25=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u8F66\u51B5\u8FBE\u6807\u7387\uFF08%\uFF09",-1)),_hoisted_26={id:"normalCar",class:"text-num"},_hoisted_27={class:"col-3",style:{height:"90px"}},_hoisted_28=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u8F66\u8F86\u6389\u6E23\u6570\u91CF",-1)),_hoisted_29={id:"VehiclesOffSlag",class:"text-num"},_hoisted_30={class:"col-3",style:{height:"90px"}},_hoisted_31=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u706B\u70B9\u8BC6\u522B\u62A5\u8B66\u6B21\u6570",-1)),_hoisted_32={id:"fire",class:"text-num"},_hoisted_33={class:"col-6",style:{height:"240px"}},_hoisted_34=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u626C\u5C1824\u5C0F\u65F6\u8D8B\u52BF\u56FE",-1)),_hoisted_35={class:"col-6",style:{height:"240px"}},_hoisted_36=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u706B\u70B9\u8BC6\u522B\u62A5\u8B66\u9891\u7387",-1)),_hoisted_37={class:"col-12",style:{height:"240px"}},_hoisted_38=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u626C\u5C18\u62A5\u8B66\u8D8B\u52BF\u56FE",-1)),_hoisted_39={class:"col-2",style:{height:"auto"}},_hoisted_40=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u7AD9\u70B9AQI\u8BE6\u60C5",-1)),_hoisted_41={class:"col-4",style:{height:"auto","justify-content":"flex-start"}},_hoisted_42={style:{width:"100%","min-height":"150px"}},_hoisted_43=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},[createTextVNode("\u7AD9\u70B9PM"),createBaseVNode("span",null,"10"),createTextVNode("\u8BE6\u60C5(\u5355\u4F4D: \u03BCg/m)")],-1)),_hoisted_44={style:{width:"100%","min-height":"150px"}},_hoisted_45=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},[createTextVNode("\u7AD9\u70B9PM"),createBaseVNode("span",null,"2.5"),createTextVNode("\u8BE6\u60C5(\u5355\u4F4D: \u03BCg/m)")],-1)),_hoisted_46={class:"col-2",style:{height:"auto"}},_hoisted_47=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u706B\u70B9\u8BC6\u522B\u8BE6\u60C5",-1)),_hoisted_48={class:"col-4",style:{height:"auto"}},_hoisted_49=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"AI\u4E8B\u4EF6\u8BC6\u522B",-1)),_hoisted_50={class:"col-12",style:{height:"180px","align-items":"flex-start","justify-content":"flex-start",padding:"10px"}},_hoisted_51=_withScopeId(()=>createBaseVNode("div",{class:"text-title"},"\u5F53\u671F\u6982\u51B5:",-1)),_hoisted_52={id:"text-content",class:"text-content"},_hoisted_53=_withScopeId(()=>createBaseVNode("div",{class:"col-12",style:{height:"37px","align-items":"flex-start","justify-content":"flex-start",padding:"8px 10px"}},[createBaseVNode("div",{id:"mark",class:"text-content",style:{color:"red"}},"\u5907\u6CE8: \u73AF\u6BD4\u589E\u957F\u7387- (\u5F53\u5929\u6570\u503C-\u4E0A- \u5929\u6570\u503C) 1\u4E0A-\u5929\u6570\u503C*100%")],-1));function _sfc_render(c,j,U,s,t,m){const d=resolveComponent("el-button"),x=resolveComponent("el-date-picker"),N=resolveComponent("Echart"),C=resolveComponent("Table"),T=resolveComponent("ArrowUpBold"),p=resolveComponent("el-icon"),i=resolveComponent("el-scrollbar");return openBlock(),createElementBlock("div",_hoisted_1,[createVNode(i,{ref:"reportScorll"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_2,[createBaseVNode("div",_hoisted_3,[createVNode(d,{plain:"",type:"success",onClick:j[0]||(j[0]=w=>c.report.exportPdf("look"))},{default:withCtx(()=>[_hoisted_4]),_:1}),createVNode(d,{plain:"",type:"danger",onClick:j[1]||(j[1]=w=>c.report.exportPdf("pdf"))},{default:withCtx(()=>[_hoisted_5]),_:1}),createVNode(d,{plain:"",type:"primary",onClick:j[2]||(j[2]=w=>c.report.exportWord("pdf"))},{default:withCtx(()=>[_hoisted_6]),_:1}),createVNode(x,{modelValue:c.report.begin,"onUpdate:modelValue":j[3]||(j[3]=w=>c.report.begin=w),placeholder:"\u65F6\u95F4",style:{"margin-bottom":"10px"},type:"date",onChange:j[4]||(j[4]=w=>c.report.handle())},null,8,["modelValue"])]),createBaseVNode("div",_hoisted_7,[createBaseVNode("div",_hoisted_8," \u529F\u80FD\u533A\u9AD8\u7A7A\u5639\u671B\u7CFB\u7EDF\u9879\u76EE\u5EFA\u8BBE"+toDisplayString(new Date(c.report.begin).format("MM.dd"))+"\u65E5\u62A5 ",1),createBaseVNode("div",_hoisted_9,[_hoisted_10,createBaseVNode("div",_hoisted_11,toDisplayString(c.report.all.pm10),1)]),createBaseVNode("div",_hoisted_12,[_hoisted_13,createBaseVNode("div",_hoisted_14,toDisplayString(c.report.all.trafficFlow),1)]),createBaseVNode("div",_hoisted_15,[_hoisted_16,createBaseVNode("div",_hoisted_17,toDisplayString(c.report.all.CoveredWithTarpaulin),1)]),createBaseVNode("div",_hoisted_18,[_hoisted_19,createBaseVNode("div",_hoisted_20,toDisplayString(c.report.all.CarDirty),1)]),createBaseVNode("div",_hoisted_21,[_hoisted_22,createBaseVNode("div",_hoisted_23,toDisplayString(c.report.all.pm25),1)]),createBaseVNode("div",_hoisted_24,[_hoisted_25,createBaseVNode("div",_hoisted_26,toDisplayString((c.report.all.normalCar*100).toFixed(2)||0),1)]),createBaseVNode("div",_hoisted_27,[_hoisted_28,createBaseVNode("div",_hoisted_29,toDisplayString(c.report.all.SlagFallingFromSlagTruck),1)]),createBaseVNode("div",_hoisted_30,[_hoisted_31,createBaseVNode("div",_hoisted_32,toDisplayString(c.report.all.fire),1)]),createBaseVNode("div",_hoisted_33,[_hoisted_34,createVNode(N,{options:c.report.dustOption,onImgBase64:c.report.getImgBase641},null,8,["options","onImgBase64"])]),createBaseVNode("div",_hoisted_35,[_hoisted_36,createVNode(N,{options:c.report.alarmOption,onImgBase64:c.report.getImgBase642},null,8,["options","onImgBase64"])]),createBaseVNode("div",_hoisted_37,[_hoisted_38,createVNode(N,{options:c.report.dustAlarmOption,onImgBase64:c.report.getImgBase643},null,8,["options","onImgBase64"])]),createBaseVNode("div",_hoisted_39,[_hoisted_40,createVNode(C,{list:c.report.list1,show:!0},null,8,["list"])]),createBaseVNode("div",_hoisted_41,[createBaseVNode("div",_hoisted_42,[_hoisted_43,createVNode(C,{list:c.report.list2,show:!0},null,8,["list"])]),createBaseVNode("div",_hoisted_44,[_hoisted_45,createVNode(C,{list:c.report.list3,show:!0},null,8,["list"])])]),createBaseVNode("div",_hoisted_46,[_hoisted_47,createVNode(C,{list:c.report.list4,show:!0},null,8,["list"])]),createBaseVNode("div",_hoisted_48,[_hoisted_49,createVNode(C,{list:c.report.list5,show:!0},null,8,["list"])]),createBaseVNode("div",_hoisted_50,[_hoisted_51,createBaseVNode("div",_hoisted_52,"1.\u5F53\u65E5pm10\u8FBE\u5230"+toDisplayString(c.report.all.pm10)+"\u03BCg/m'\uFF0C PM2.5\u8FBE\u5230"+toDisplayString(c.report.all.pm25)+"\u03BCg/m*;\u8F66\u6D41\u91CF\u8FBE\u5230"+toDisplayString(c.report.all.trafficFlow)+"\u6B21\uFF0CAi\u8BC6\u522B\u53D1\u751F"+toDisplayString(c.report.all.CarDirty+c.report.all.CoveredWithTarpaulin+c.report.all.SlagFallingFromSlagTruck)+"\u6B21\u4E0D\u8FBE\u6807\u4E8B\u4EF6\uFF0C\u8FBE\u6807\u7387\u4E3A"+toDisplayString((c.report.all.normalCar*100).toFixed(2))+"%;\u706B\u70B9\u8BC6\u522B\u62A5\u8B66"+toDisplayString(c.report.all.fire)+"\u6B21\uFF0C\u5177\u4F53\u8BE6\u60C5\u53C2\u7167\u4E0A\u56FE\u3002 ",1)]),_hoisted_53]),createVNode(d,{circle:"",class:"backTop",plain:"",type:"primary",onClick:j[5]||(j[5]=w=>c.report.backTop())},{default:withCtx(()=>[createVNode(p,null,{default:withCtx(()=>[createVNode(T)]),_:1})]),_:1})])]),_:1},512),createBaseVNode("span",{class:"closePdf",onClick:j[6]||(j[6]=w=>c.report.closePdf())}," \xD7 ")])}var report=_export_sfc(_sfc_main,[["render",_sfc_render],["__scopeId","data-v-0481e988"]]);export{report as default};
