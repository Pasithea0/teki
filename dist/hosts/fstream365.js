var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
hosts["fstream365"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, CryptoJSAesJson, _0x20e478, _0x1fe5e1, headers_1, parseDetail, textDetail, id, hash, mid, f, encrypted, headerAPI, urlDirect, dataDirect, parseDirect, parseSource, _i, parseSource_1, item, e_1;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                DOMAIN = 'https://fstream365.com';
                HOST = 'fstream365';
                headers = {
                    'content-type': 'application/json;charset=UTF-8',
                    'Referer': config.options.link_detail,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                CryptoJSAesJson = {
                    'stringify': function (_0x2446ec) {
                        var _0x168df0 = {
                            'ct': _0x2446ec["ciphertext"]["toString"](cryptoS["enc"]["Base64"])
                        };
                        if (_0x2446ec.iv) {
                            _0x168df0.iv = _0x2446ec.iv["toString"]();
                        }
                        if (_0x2446ec["salt"]) {
                            _0x168df0.s = _0x2446ec["salt"]["toString"]();
                        }
                        return JSON["stringify"](_0x168df0);
                    },
                    'parse': function (_0x50e8b5) {
                        var _a;
                        var _0x2ff517 = (_a = {},
                            _a["oPPMn"] = "3|1|0|2|4",
                            _a);
                        var _0x16be06 = _0x2ff517["oPPMn"]["split"]('|');
                        var _0x2c7ffe = 0;
                        while (true) {
                            switch (_0x16be06[_0x2c7ffe++]) {
                                case '0':
                                    if (_0x41868a.iv) {
                                        _0x4032ce.iv = cryptoS["enc"]["Hex"]["parse"](_0x41868a.iv);
                                    }
                                    continue;
                                case '1':
                                    var _0x4032ce = cryptoS["lib"]["CipherParams"]["create"]({
                                        'ciphertext': cryptoS["enc"]["Base64"]["parse"](_0x41868a.ct)
                                    });
                                    continue;
                                case '2':
                                    if (_0x41868a.s) {
                                        _0x4032ce["salt"] = cryptoS["enc"]["Hex"]["parse"](_0x41868a.s);
                                    }
                                    continue;
                                case '3':
                                    var _0x41868a = JSON["parse"](_0x50e8b5);
                                    continue;
                                case '4':
                                    return _0x4032ce;
                            }
                            break;
                        }
                    }
                };
                _0x20e478 = function (_0x597fed) {
                    var _0x28942b = "";
                    for (var _0x582d43 = 0; _0x582d43 < _0x597fed.length; _0x582d43++) {
                        _0x28942b += "" + _0x597fed.charCodeAt(_0x582d43).toString(16);
                    }
                    return _0x28942b;
                };
                _0x1fe5e1 = function (_0x357637, _0x35e041, _0x14c179, _0x37e7dd) { return __awaiter(_this, void 0, void 0, function () {
                    var _0x34bf15, _0x3f465b, _0x83ff06;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, libs.request_get("https://aquariumtv.app/yhash?a=".concat(_0x35e041, "&b=").concat(_0x14c179, "&c=").concat(_0x37e7dd))];
                            case 1:
                                _0x34bf15 = _a.sent();
                                libs.log({ _0x35e041: _0x35e041, _0x14c179: _0x14c179, _0x37e7dd: _0x37e7dd, _0x34bf15: _0x34bf15 }, HOST, "HASH DATA");
                                _0x357637 = libs.string_atob(_0x357637);
                                _0x3f465b = {
                                    format: CryptoJSAesJson
                                };
                                _0x83ff06 = cryptoS.AES.decrypt(_0x357637, _0x34bf15, _0x3f465b);
                                return [2, JSON.parse(JSON.parse(_0x83ff06.toString(cryptoS.enc.Utf8)))];
                        }
                    });
                }); };
                headers_1 = {
                    "Referer": "https://ww.ymovies.vip/",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
                };
                return [4, fetch(url, {
                        headers: headers_1
                    })];
            case 2:
                parseDetail = _a.sent();
                return [4, parseDetail.text()];
            case 3:
                textDetail = _a.sent();
                id = textDetail.match(/\"id\" *\: *\"([^\"]+)/i);
                id = id ? id[1] : "";
                hash = textDetail.match(/\"hash\" *\: *\"([^\"]+)/i);
                hash = hash ? hash[1] : "";
                mid = textDetail.match(/\"mid\" *\: *\"([^\"]+)/i);
                mid = mid ? mid[1] : "";
                libs.log({ id: id, hash: hash, mid: mid }, HOST, "TOKEN ID");
                if (!id || !mid || !hash) {
                    return [2];
                }
                f = {
                    format: CryptoJSAesJson
                };
                encrypted = JSON.parse(cryptoS.AES.encrypt(JSON.stringify(id + "/" + "movie" + "?srv=1"), hash, f).toString());
                libs.log({ encrypted: encrypted }, HOST, 'ENCRYPT');
                if (!encrypted) {
                    return [2];
                }
                headerAPI = {
                    "Referer": DOMAIN,
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
                };
                urlDirect = "".concat(DOMAIN, "/ajax/getSources/?id=").concat(_0x20e478(encrypted.ct), "&h=").concat(_0x20e478(hash), "&a=").concat(encrypted.iv, "&t=").concat(encrypted.s);
                return [4, fetch(urlDirect, {
                        headers: headerAPI,
                        method: "GET"
                    })];
            case 4:
                dataDirect = _a.sent();
                return [4, dataDirect.json()];
            case 5:
                parseDirect = _a.sent();
                libs.log({ parseDirect: parseDirect, urlDirect: urlDirect, url: url }, HOST, 'PARSE parseDirect');
                return [4, _0x1fe5e1(parseDirect.sources, encrypted.iv, 0, encrypted.s)];
            case 6:
                parseSource = _a.sent();
                libs.log({ parseSource: parseSource }, HOST, 'DECRYPT');
                libs.log({ parseSource: parseSource }, HOST, 'PARSE parseSource');
                for (_i = 0, parseSource_1 = parseSource; _i < parseSource_1.length; _i++) {
                    item = parseSource_1[_i];
                    libs.log({ file: item.file }, HOST, "FILE");
                    if (!item.file) {
                        continue;
                    }
                    libs.embed_callback(item.file, provider, HOST, 'Hls', callback, 1, [], [{ file: item.file, quality: 1080 }], headerAPI);
                }
                return [3, 8];
            case 7:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, HOST, 'ERROR');
                return [3, 8];
            case 8: return [2];
        }
    });
}); };
