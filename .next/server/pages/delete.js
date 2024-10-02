(() => {
var exports = {};
exports.id = 365;
exports.ids = [365,279,634];
exports.modules = {

/***/ 3942:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Grid_section__Usa43",
	"divisionButtons": "Grid_divisionButtons__UXXKv",
	"divisionHeading": "Grid_divisionHeading__MUYKh",
	"imageWrapper": "Grid_imageWrapper__N2y4e"
};


/***/ }),

/***/ 2726:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "VideoGrid_section__I2xiq",
	"divisionButtons": "VideoGrid_divisionButtons__a9lsz",
	"button": "VideoGrid_button__3n4dA",
	"selectedButton": "VideoGrid_selectedButton__86e_p",
	"divisionHeading": "VideoGrid_divisionHeading__81Ral",
	"videoWrapper": "VideoGrid_videoWrapper__aXukb",
	"deleteButton": "VideoGrid_deleteButton__BjoRQ"
};


/***/ }),

/***/ 9673:
/***/ ((module) => {

// Exports
module.exports = {
	"upload-form-container": "fileList_upload-form-container__jNNXp",
	"toggle-buttons": "fileList_toggle-buttons__x6nv_",
	"active": "fileList_active__hHiZV",
	"file-list-container": "fileList_file-list-container__2tjeJ",
	"file-item": "fileList_file-item__LakV_",
	"delete-button": "fileList_delete-button__u1Abv",
	"message": "fileList_message__9P_WL"
};


/***/ }),

/***/ 5404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9242);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3942);
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Grid() {
    const { 0: divisions , 1: setDivisions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedDivision , 1: setSelectedDivision  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: imageIds , 1: setImageIds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: images , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchDivisions = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("http://final-cam-server.vercel.app/image/divisions");
                setDivisions(response.data);
            } catch (error) {
                console.error("Error fetching divisions:", error);
            }
        };
        fetchDivisions();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchImageIds = async ()=>{
            if (selectedDivision !== null) {
                try {
                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`http://final-cam-server.vercel.app/image/divisions/${selectedDivision}`);
                    setImageIds(response.data);
                } catch (error) {
                    console.error("Error fetching image IDs:", error);
                }
            } else {
                setImageIds([]);
            }
        };
        fetchImageIds();
        // Clear images when changing divisions
        setImages([]);
    }, [
        selectedDivision
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchImages = async ()=>{
            if (imageIds.length > 0) {
                try {
                    const fetchedImages = [];
                    for (const idObj of imageIds){
                        const id = idObj._id;
                        const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`http://final-cam-server.vercel.app/image/fetch/${id}`, {
                            responseType: "blob"
                        });
                        const imageUrl = URL.createObjectURL(response.data);
                        fetchedImages.push({
                            id,
                            url: imageUrl
                        });
                    }
                    setImages(fetchedImages);
                    return ()=>{
                        fetchedImages.forEach((image)=>URL.revokeObjectURL(image.url));
                    };
                } catch (error) {
                    console.error("Error fetching images:", error);
                }
            } else {
                setImages([]);
            }
        };
        fetchImages();
    }, [
        imageIds
    ]);
    const openImageInNewWindow = (imageUrl)=>{
        window.open(imageUrl, "_blank");
    };
    const deleteImage = async (id)=>{
        try {
            await axios__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](`http://final-cam-server.vercel.app/image/delete/${id}`);
            setImages(images.filter((image)=>image.id !== id));
            setImageIds(imageIds.filter((image)=>image._id !== id));
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };
    const handleDivisionClick = (division)=>{
        if (selectedDivision === division) {
            setSelectedDivision(null);
        } else {
            setSelectedDivision(division);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divisionButtons),
                children: divisions.map((division, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleDivisionClick(division),
                        className: selectedDivision === division ? (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().selectedButton) : "",
                        children: division
                    }, index))
            }),
            selectedDivision && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divisionHeading),
                        children: selectedDivision
                    }),
                    images.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "No images found for this division."
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2__.ResponsiveMasonry, {
                        columnsCountBreakPoints: {
                            350: 1,
                            680: 2,
                            1020: 3,
                            1340: 4
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2___default()), {
                            children: images.map((image, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: image.url,
                                            alt: `Image ${idx}`,
                                            onClick: ()=>openImageInNewWindow(image.url),
                                            onError: (e)=>console.error("Error loading image:", e)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>deleteImage(image.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, idx))
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9242);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2726);
/* harmony import */ var _VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function VideoGrid() {
    const { 0: divisions , 1: setDivisions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedDivision , 1: setSelectedDivision  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: videoIds , 1: setVideoIds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: videos , 1: setVideos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchDivisions = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("http://final-cam-server.vercel.app/video/divisions");
                setDivisions(response.data);
            } catch (error) {
                console.error("Error fetching divisions:", error);
            }
        };
        fetchDivisions();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchVideoIds = async ()=>{
            if (selectedDivision !== null) {
                try {
                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`http://localhost:8080/video/divisions/${selectedDivision}`);
                    setVideoIds(response.data);
                } catch (error) {
                    console.error("Error fetching video IDs:", error);
                }
            } else {
                setVideoIds([]);
            }
        };
        fetchVideoIds();
        // Clear videos when changing divisions
        setVideos([]);
    }, [
        selectedDivision
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchVideos = async ()=>{
            if (videoIds.length > 0) {
                try {
                    const fetchedVideos = [];
                    for (const idObj of videoIds){
                        const id = idObj._id;
                        const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`http://localhost:8080/video/fetch/${id}`, {
                            responseType: "blob"
                        });
                        const videoUrl = URL.createObjectURL(response.data);
                        fetchedVideos.push({
                            id,
                            url: videoUrl
                        });
                    }
                    setVideos(fetchedVideos);
                    return ()=>{
                        fetchedVideos.forEach((video)=>URL.revokeObjectURL(video.url));
                    };
                } catch (error) {
                    console.error("Error fetching videos:", error);
                }
            } else {
                setVideos([]);
            }
        };
        fetchVideos();
    }, [
        videoIds
    ]);
    const openVideoInNewWindow = (videoUrl)=>{
        window.open(videoUrl, "_blank");
    };
    const deleteVideo = async (id)=>{
        try {
            await axios__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](`http://localhost:8080/video/delete/${id}`);
            setVideos(videos.filter((video)=>video.id !== id));
            setVideoIds(videoIds.filter((video)=>video._id !== id));
        } catch (error) {
            console.error("Error deleting video:", error);
        }
    };
    const handleDivisionClick = (division)=>{
        if (selectedDivision === division) {
            setSelectedDivision(null);
        } else {
            setSelectedDivision(division);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divisionButtons),
                children: divisions.map((division, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleDivisionClick(division),
                        className: `${(_VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button)} ${selectedDivision === division ? (_VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().selectedButton) : ""}`,
                        children: division
                    }, index))
            }),
            selectedDivision && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divisionHeading),
                        children: selectedDivision
                    }),
                    videos.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "No videos found for this division."
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2__.ResponsiveMasonry, {
                        columnsCountBreakPoints: {
                            350: 1,
                            680: 2,
                            1020: 3,
                            1340: 4
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_responsive_masonry__WEBPACK_IMPORTED_MODULE_2___default()), {
                            children: videos.map((video, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().videoWrapper),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                            src: video.url,
                                            controls: true,
                                            onClick: ()=>openVideoInNewWindow(video.url),
                                            onError: (e)=>console.error("Error loading video:", e)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_VideoGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().deleteButton),
                                            onClick: ()=>deleteVideo(video.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, idx))
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3727:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadForm": () => (/* binding */ UploadForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_deleteIMG_deleteIMG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5404);
/* harmony import */ var _components_deleteVID_deleteVID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8988);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _fileList_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9673);
/* harmony import */ var _fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hoc_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8555);
/* harmony import */ var _components_header_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3160);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_deleteIMG_deleteIMG__WEBPACK_IMPORTED_MODULE_2__, _components_deleteVID_deleteVID__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__]);
([_components_deleteIMG_deleteIMG__WEBPACK_IMPORTED_MODULE_2__, _components_deleteVID_deleteVID__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getStaticProps() {
    let files = [];
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("http://final-cam-server.vercel.app/pdf/fetch/");
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
const FileList = ({ files: initialFiles  })=>{
    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialFiles);
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showFileList , 1: setShowFileList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDelete = async (fileId)=>{
        setIsLoading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_4__["default"]["delete"](`http://final-cam-server.vercel.app/pdf/delete/${fileId}`);
            if (response.status === 200) {
                setMessage("File deleted successfully");
                setFiles(files.filter((file)=>file.id !== fileId)); // Update the file list
            } else {
                setMessage("Error deleting file");
            }
        } catch (error) {
            console.error("Error deleting file:", error);
            setMessage("Error deleting file");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_Navbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["upload-form-container"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadForm, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["toggle-buttons"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "",
                                onClick: ()=>setShowFileList(!showFileList),
                                children: showFileList ? "Hide File List" : "Show File List"
                            })
                        }),
                        showFileList && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Files List"
                                }),
                                message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().message),
                                    children: message
                                }),
                                isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Loading..."
                                }),
                                !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: files.map((file)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["file-item"]),
                                            children: [
                                                file.name,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["delete-button"]),
                                                    onClick: ()=>handleDelete(file.id),
                                                    disabled: isLoading,
                                                    children: "Delete"
                                                })
                                            ]
                                        }, file.id))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hoc_withAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(FileList));
function UploadForm() {
    const { 0: showDelete , 1: setShowDelete  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        pdf: false,
        image: false,
        video: false
    });
    const handleToggle = (type)=>{
        setShowDelete({
            pdf: type === "pdf",
            image: type === "image",
            video: type === "video"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["upload-form-container"]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["toggle-buttons"]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: showDelete.image ? (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : "",
                        onClick: ()=>handleToggle("image"),
                        children: "Delete Image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: showDelete.video ? (_fileList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : "",
                        onClick: ()=>handleToggle("video"),
                        children: "Delete Video"
                    })
                ]
            }),
            showDelete.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_deleteIMG_deleteIMG__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            showDelete.video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_deleteVID_deleteVID__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// hoc/withAuth.js



const withAuth = (WrappedComponent)=>{
    const Auth = (props)=>{
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            // Check if the token exists in local storage
            const token = localStorage.getItem("token");
            if (!token) {
                // If token does not exist, redirect to login page
                router.push("/Login");
            }
        }, []);
        // If user is authenticated, render the wrapped component
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
            ...props
        });
    };
    return Auth;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);


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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9242:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-masonry");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,160], () => (__webpack_exec__(3727)));
module.exports = __webpack_exports__;

})();