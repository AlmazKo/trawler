import WebRequestDetails = chrome.webRequest.WebRequestDetails;
import {db} from "./db";
import Tab = chrome.tabs.Tab;
import WebRequestHeadersDetails = chrome.webRequest.WebRequestHeadersDetails;

const tabs = chrome.tabs;

function isBlock(req: WebRequestDetails) {
    return req.frameId > 0 || db.some(u => req.url.indexOf("://" + u) !== -1)
}

function logBlocked(req: WebRequestHeadersDetails, tab?: Tab) {
    if (tab) {
        console.log('%c  ', `background:url(${tab.favIconUrl}) no-repeat; background-size: 13px 13px;`, 'block', req.url);
    } else {
        console.log('? ', 'block', req)
    }
}

chrome.webRequest.onBeforeRequest.addListener(
    req => {
        const block = isBlock(req);
        if (block && req.tabId >= 0) {
            tabs.get(req.tabId, tab => logBlocked(req, tab))
        } else if (block) {
            logBlocked(req);
        }
        return {cancel: block}
    },
    {urls: ["<all_urls>"]},
    ["blocking"]);