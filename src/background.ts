import WebRequestDetails = chrome.webRequest.WebRequestDetails;
import {db} from "./db";

function cancel(req: WebRequestDetails) {
    return req.frameId !== 0 || db.some(u => req.url.indexOf("://" + u) !== -1)
}

chrome.webRequest.onBeforeRequest.addListener(
    req => ({
        cancel: cancel(req)
    }),
    {urls: ["<all_urls>"]},
    ["blocking"]);