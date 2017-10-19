import WebRequestDetails = chrome.webRequest.WebRequestDetails;
import Tab = chrome.tabs.Tab;
import WebRequestHeadersDetails = chrome.webRequest.WebRequestHeadersDetails;
import { ad_rules } from "./ad_rules";
import { iframe_white_rules } from "./iframe_white_rules";

const tabs = chrome.tabs;
let counter = 0;

chrome.browserAction.setBadgeBackgroundColor({color: "#74A2B0"});

function setBadge(val: any) {
  chrome.browserAction.setBadgeText({text: val + ''});
}

function iFrameIsAvailable(req: WebRequestDetails) {
  return iframe_white_rules.some(u => u.test(req.url.toLowerCase()));
}

function isBlock(req: WebRequestDetails) {
  if (req.frameId > 0) {
    return !iFrameIsAvailable(req);
  }

  return ad_rules.some(u => u.test(req.url.toLowerCase()))
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
    if (block) setBadge(++counter);

    if (block && req.tabId >= 0) {
      tabs.get(req.tabId, tab => logBlocked(req, tab))
    } else if (block) {
      logBlocked(req);
    }
    return {cancel: block}
  },
  {urls: ["<all_urls>"]},
  ["blocking"]);