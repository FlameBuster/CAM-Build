exports.id = 160;
exports.ids = [160];
exports.modules = {

/***/ 6585:
/***/ ((module) => {

// Exports
module.exports = {
	"navContainer": "MobileMenu_navContainer__bdWmb"
};


/***/ }),

/***/ 765:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Navbar_header__p_J8D",
	"hamburgerMenu": "Navbar_hamburgerMenu__ve9dB",
	"logo": "Navbar_logo__f9BcH",
	"contriBtn": "Navbar_contriBtn__8MVxY",
	"end": "Navbar_end__lrgYy"
};


/***/ }),

/***/ 3160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/header/Navbar.module.scss
var Navbar_module = __webpack_require__(765);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/header/MobileMenu.module.scss
var MobileMenu_module = __webpack_require__(6585);
var MobileMenu_module_default = /*#__PURE__*/__webpack_require__.n(MobileMenu_module);
;// CONCATENATED MODULE: ./components/header/MobileMenu.js




function MobileMenu() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: (MobileMenu_module_default()).navContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "About Us"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/campaigns",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Campaigns"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/gallery",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Gallery"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contribute",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Contribute"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact_us",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Contact Us"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const header_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/header/Navbar.js






function Navbar() {
    const { 0: isMounted , 1: setIsMounted  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Navbar_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                className: (Navbar_module_default()).address,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "012-3846579 | cme-camproject.online"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Navbar_module_default()).logo,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/logo.png"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (Navbar_module_default()).navContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "About Us"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/archives",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Archives"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/gallery",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Gallery"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/videoGallery",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Video Gallery"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/upload",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Navbar_module_default()).contriBtn,
                                        children: "Upload"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/delete",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Navbar_module_default()).contriBtn,
                                        children: "Delete"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact_us",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Contact Us"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Navbar_module_default()).hamburgerMenu,
                        onClick: ()=>{
                            setIsMounted((v)=>!v);
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            className: (Navbar_module_default()).mobMenu
                        })
                    })
                ]
            }),
            isMounted && /*#__PURE__*/ jsx_runtime_.jsx(header_MobileMenu, {})
        ]
    });
}
/* harmony default export */ const header_Navbar = (Navbar);


/***/ })

};
;