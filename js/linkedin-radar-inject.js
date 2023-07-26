/*
 * 注入到linkedRadar页面，弹出Profile
 */


/* eslint-disable */
setTimeout(() => {
    if(window.location.href.indexOf("action=getProfile") !== -1) {
        callZbaseUserCenterPopupOpen("profile")
    }
}, 300)



