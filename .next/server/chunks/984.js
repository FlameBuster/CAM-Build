exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 9164:
/***/ ((module) => {

// Exports
module.exports = {
	"materialDetailsContainer": "details_materialDetailsContainer__gaq2d",
	"materialDetailsHeader": "details_materialDetailsHeader__e3i3S",
	"materialDetailsContent": "details_materialDetailsContent__k4b3G",
	"detailColumn": "details_detailColumn__BE1fb",
	"detailRow": "details_detailRow__WmLzQ",
	"buttonContainer": "details_buttonContainer__Y3wIi",
	"button": "details_button__ruW1O"
};


/***/ }),

/***/ 3984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _details_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9164);
/* harmony import */ var _details_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_details_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const handlePdfClick = (id)=>{
    window.open(`http://final-cam-server.vercel.app/pdf/fetch/${id}`, "_blank");
};
const MaterialDetails = ({ materialNo , Accession_number , Location , Page_no , No_of_copies , Remarks , _id ,  })=>{
    const { Ser_Corps_Inst , Est_Br , Sub_Publisher , Vol , Year , Collection_type , No , Loc ,  } = Accession_number || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().materialDetailsContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().materialDetailsHeader),
                children: "Material Details"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().materialDetailsContent),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().detailColumn),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().detailRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Material No:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: materialNo
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().detailRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Location:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: Location
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().detailRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Page No:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: Page_no
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().detailRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "No of Copies:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: No_of_copies
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().detailRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Remarks:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: Remarks
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().detailColumn),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().detailRow),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Accession Number:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Ser Corps Inst: ",
                                                Ser_Corps_Inst
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Est Br: ",
                                                Est_Br
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Sub Publisher: ",
                                                Sub_Publisher
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Vol: ",
                                                Vol
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Year: ",
                                                Year
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Collection Type: ",
                                                Collection_type
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "No: ",
                                                No
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Loc: ",
                                                Loc
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().buttonContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
                        onClick: ()=>handlePdfClick(_id),
                        children: "Open"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_details_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
                        children: "Hide"
                    })
                ]
            })
        ]
    });
};
MaterialDetails.propTypes = {
    materialNo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    Accession_number: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        Ser_Corps_Inst: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        Est_Br: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        Sub_Publisher: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        Vol: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        Year: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        Collection_type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        No: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        Loc: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    }),
    Location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    Page_no: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    No_of_copies: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    Remarks: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    _id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaterialDetails);


/***/ })

};
;