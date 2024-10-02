"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 9322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: external "dotenv"
const external_dotenv_namespaceObject = require("dotenv");
var external_dotenv_default = /*#__PURE__*/__webpack_require__.n(external_dotenv_namespaceObject);
;// CONCATENATED MODULE: external "node-fetch"
const external_node_fetch_namespaceObject = require("node-fetch");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_namespaceObject);
;// CONCATENATED MODULE: external "bcryptjs"
const external_bcryptjs_namespaceObject = require("bcryptjs");
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/login.js



 // Ensure you have bcryptjs installed
external_dotenv_default().config();
const SECRET_KEY = process.env.SECRET_KEY;
const BACKEND_URL = "final-cam-server.vercel.app";
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    const { username , password  } = req.body;
    try {
        const response = await external_node_fetch_default()(`${BACKEND_URL}/login/fetch/${username}`);
        if (!response.ok) {
            return res.status(response.status).json({
                message: "Error fetching user data"
            });
        }
        const user = await response.json();
        if (!user) {
            return res.status(404).json({
                message: "User doesn't exist"
            });
        }
        const passwordMatch = await external_bcryptjs_default().compare(password, user.password);
        if (passwordMatch) {
            const token = external_jsonwebtoken_default().sign({
                username
            }, SECRET_KEY, {
                expiresIn: "5s"
            });
            return res.status(200).json({
                token
            });
        } else {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9322));
module.exports = __webpack_exports__;

})();