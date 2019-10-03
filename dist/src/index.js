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
        while (_) try {
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
var axios = require('axios');
import { AllCharacters } from "./allCharacters";
// Creating a new "AllCharacters" and displaying items in html and console
/* const img = document.createElement("img"); */
var a = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result_1, t, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, new AllCharacters(axios)];
            case 1:
                result_1 = _a.sent();
                t = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var all, err_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, result_1.getAllCharacters()];
                            case 1:
                                all = _a.sent();
                                console.table(all);
                                all.forEach(function (el) {
                                    var divAllCharacters = document.getElementById("allCharacters");
                                    var divEachChar = document.createElement("div");
                                    divEachChar.className = "eachChar";
                                    divEachChar.setAttribute("name", "" + el.id);
                                    divAllCharacters.appendChild(divEachChar);
                                    var img = document.createElement("img");
                                    divEachChar.appendChild(img);
                                    img.className = "imgHero";
                                    img.src += "data: image / jpeg; base64, " + el.image + " ";
                                    var h2 = document.createElement("h2");
                                    divEachChar.appendChild(h2);
                                    h2.innerHTML += el.name;
                                    var em = document.createElement("em");
                                    divEachChar.appendChild(em);
                                    em.innerHTML += el.shortDescription;
                                    var divButtons = document.createElement("div");
                                    divEachChar.appendChild(divButtons);
                                    divButtons.className = "groupButt";
                                    var viewButt = document.createElement("button");
                                    viewButt.className = "viewButton";
                                    viewButt.innerHTML += "View";
                                    divButtons.appendChild(viewButt);
                                    viewButt.addEventListener('click', function () { viewChar(el); });
                                    // const editButt = document.createElement("button");
                                    // divButtons.appendChild(editButt);
                                    // editButt.className = "editButt";
                                    // editButt.innerHTML += "Edit";
                                    var editButt = document.createElement("a");
                                    divButtons.appendChild(editButt);
                                    editButt.className = "editButt";
                                    editButt.textContent = "edit";
                                    editButt.href = "./CharacterEdit.html?id=" + el.id;
                                    var deletebutt = document.createElement("button");
                                    divButtons.appendChild(deletebutt);
                                    deletebutt.className = "deletebutt";
                                    deletebutt.innerHTML += "Delete";
                                });
                                return [3 /*break*/, 3];
                            case 2:
                                err_2 = _a.sent();
                                console.log(err_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                t();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
a();
function viewChar(el) {
    var viewDial = document.getElementById("viewDialog");
    viewDial.style.display = "block";
    var close = document.getElementById("close");
    close.onclick = function () {
        viewDial.style.display = "none";
    };
    var vDHero = document.getElementById("vDHero");
    vDHero.innerHTML = "";
    var imgD = document.createElement("img");
    vDHero.appendChild(imgD);
    imgD.className = "imgDHero";
    imgD.src += "data: image / jpeg; base64, " + el.image + " ";
    var h2D = document.createElement("h2");
    vDHero.appendChild(h2D);
    h2D.className = "h2DHero";
    h2D.innerHTML += el.name;
    var emD = document.createElement("em");
    vDHero.appendChild(emD);
    emD.className = "emDHero";
    emD.innerHTML += el.shortDescription;
    var pD = document.createElement("p");
    vDHero.appendChild(pD);
    pD.className = "pDHero";
    pD.innerHTML += "Description :  " + el.description;
}
