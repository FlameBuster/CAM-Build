(() => {
var exports = {};
exports.id = 623;
exports.ids = [623,279];
exports.modules = {

/***/ 5115:
/***/ ((module) => {

// Exports
module.exports = {
	"end": "ribbon_end__AQYRh"
};


/***/ }),

/***/ 7671:
/***/ ((module) => {

// Exports
module.exports = {
	"mainContent": "Campaigns_mainContent__7_YX5",
	"heading": "Campaigns_heading__Y6c5E",
	"campaignList": "Campaigns_campaignList__pOn1C"
};


/***/ }),

/***/ 2094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ribbon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5115);
/* harmony import */ var _ribbon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ribbon_module_scss__WEBPACK_IMPORTED_MODULE_2__);


 // Import the CSS
const Ribbon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ribbon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().end),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "./images/newl.svg",
            alt: "Ribbon end"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ribbon);


/***/ }),

/***/ 3463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _components_campaigns_banner_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5082);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1530);
/* harmony import */ var _components_header_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3160);
/* harmony import */ var _Campaigns_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7671);
/* harmony import */ var _Campaigns_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Campaigns_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_pdf_details_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3984);
/* harmony import */ var _components_ribbon_Ribbon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2094);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Campaigns({ files  }) {
    const { 0: selectedPdfData , 1: setSelectedPdfData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const fetchPdfData = async (id)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`final-cam-server.vercel.app/pdf/data/fetch/${id}`);
            const mergedProps = {
                ...response.data.metadata,
                _id: id
            };
            setSelectedPdfData(mergedProps);
        } catch (error) {
            console.error("Error fetching PDF data:", error);
        }
    };
    // Function to handle click event on file link
    const handlePdfClick = (id)=>{
        fetchPdfData(id);
    };
    // Function to group files by their starting letter
    const groupFilesByAlphabet = (files)=>{
        const groupedFiles = {};
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        alphabet.forEach((letter)=>{
            groupedFiles[letter] = [];
        });
        files.forEach((file)=>{
            const firstLetter = file.name.charAt(0).toUpperCase();
            if (groupedFiles[firstLetter]) {
                groupedFiles[firstLetter].push(file);
            } else {
                groupedFiles[firstLetter] = [
                    file
                ];
            }
        });
        return groupedFiles;
    };
    const groupedFiles = groupFilesByAlphabet(files);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_Navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ribbon_Ribbon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Campaigns_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mainContent),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Campaigns_module_scss__WEBPACK_IMPORTED_MODULE_8___default().heading),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "Welcome to the Archives section of the Corps Archives Museum!"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " Delve into a treasure trove of military history meticulously preserved for enthusiasts, scholars, and history buffs alike. Below, you'll discover a rich collection of artifacts, documents, and records spanning decades of military heritage. From the annals of strategic campaigns to the personal narratives of brave servicemen and women, our archives offer a profound insight into the triumphs and challenges that have shaped the course of history. Whether you're seeking to uncover the intricacies of military tactics, explore the evolution of weaponry, or simply immerse yourself in the stories of valor and sacrifice, our archives stand as a testament to the enduring spirit of courage and resilience. Journey through the corridors of time and uncover the untold tales that have shaped the world we live in today. Welcome to a world where history comes alive – welcome to the Archives of the Corps Archives Museum."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: (_Campaigns_module_scss__WEBPACK_IMPORTED_MODULE_8___default().campaignList),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "List of Files:"
                                }),
                                Object.keys(groupedFiles).map((letter)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: letter
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                children: groupedFiles[letter].length > 0 ? groupedFiles[letter].map((file, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            onClick: ()=>handlePdfClick(file.id),
                                                            children: file.name
                                                        })
                                                    }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "No files under this category"
                                                })
                                            })
                                        ]
                                    }, letter))
                            ]
                        }),
                        console.log(selectedPdfData),
                        selectedPdfData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pdf_details_details__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            materialNo: selectedPdfData.metadata.materialNo,
                            Accession_number: selectedPdfData.metadata.Accession_number,
                            Location: selectedPdfData.metadata.Location,
                            Page_no: selectedPdfData.metadata.Page_no,
                            No_of_copies: selectedPdfData.metadata.No_of_copies,
                            Remarks: selectedPdfData.metadata.Remarks,
                            _id: selectedPdfData._id
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}
async function getStaticProps() {
    let files = [];
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("http://localhost:8080/pdf/fetch/");
        files = response.data.map((file)=>({
                id: file.id,
                name: file.filename
            }));
    } catch (error) {
        console.error("Error fetching files:", error);
    }
    return {
        props: {
            files: files
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Campaigns);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,160,530,82,984], () => (__webpack_exec__(3463)));
module.exports = __webpack_exports__;

})();