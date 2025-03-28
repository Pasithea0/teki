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
source.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, DOMAIN, urlSearch, parseSearch, postID, urlEmbed, parseEmbed, iframeData, iframeUrl, htmlDirect, text, directUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'DUniqueStream';
                DOMAIN = "https://uniquestream.net";
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/episodes/").concat(libs.url_slug_search(movieInfo), "-season-").concat(movieInfo.season, "-episode-").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/movies/").concat(libs.url_slug_search(movieInfo), "-").concat(movieInfo.year);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _a.sent();
                postID = parseSearch("input[name='postid']").val();
                libs.log({ postID: postID }, PROVIDER, 'POST ID');
                if (!postID) {
                    return [2];
                }
                urlEmbed = "".concat(DOMAIN, "/wp-json/zetaplayer/v2/").concat(postID, "/").concat(movieInfo.type == 'tv' ? 'ep' : 'mv', "/1");
                return [4, libs.request_get(urlEmbed)];
            case 2:
                parseEmbed = _a.sent();
                libs.log({ urlEmbed: urlEmbed, parseEmbed: parseEmbed }, PROVIDER, 'EMBED INFO');
                iframeData = parseEmbed.embed_url;
                iframeUrl = iframeData.match(/src\=\"([^\"]+)/i);
                iframeUrl = iframeUrl ? iframeUrl[1] : '';
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'IFRAME URL');
                if (!iframeUrl) {
                    return [2];
                }
                if (_.startsWith(iframeUrl, '/')) {
                    iframeUrl = "https:".concat(iframeUrl);
                }
                return [4, fetch(iframeUrl, {
                        headers: {
                            'referer': "".concat(DOMAIN, "/"),
                            'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome"
                        }
                    })];
            case 3:
                htmlDirect = _a.sent();
                return [4, htmlDirect.text()];
            case 4:
                text = _a.sent();
                directUrl = text.match(/let *url *\= *\'([^\']+)/i);
                directUrl = directUrl ? directUrl[1] : '';
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                if (!directUrl) {
                    return [2];
                }
                libs.embed_callback(directUrl, PROVIDER, PROVIDER, 'hls', callback, 1, [], [{ file: directUrl, quality: 1080 }], {
                    Origin: "https://hls.uniquestream.net",
                    Referer: "https://hls.uniquestream.net/",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
                });
                return [2, true];
        }
    });
}); };
