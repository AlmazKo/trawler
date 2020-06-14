import BlockingResponse = chrome.webRequest.BlockingResponse;
import RequestFilter = chrome.webRequest.RequestFilter;
import ResourceType = chrome.webRequest.ResourceType;
import WebRequestDetails = chrome.webRequest.WebRequestDetails;
import { Counters } from './Counter';

function beforeRequest(fun: (req: WebRequestDetails) => BlockingResponse, filter: RequestFilter) {
  chrome.webRequest.onBeforeRequest.addListener(req => fun(req), filter, ['blocking']);
}

class Filter {
  constructor(
    resTypes: ResourceType[],
    private readonly blocked: RegExp[],
    private readonly allow: RegExp[],
    private readonly cnt: Counters<string>) {
    beforeRequest(
      req => ({cancel: this.isBlock(req)}),
      {urls: ['<all_urls>'], types: resTypes});
  }

  private isBlock(req: WebRequestDetails): boolean {
    const url = req.url.toLowerCase();
    let allow = this.allow.some(u => u.test(url));
    let blocked = this.blocked.some(u => u.test(url));

    if (allow) console.log('Allowed', req.url, req)
    if (blocked) {
      console.log('Blocked', req.url, req)
      this.cnt.inc();
    }
    return !allow && blocked;
  }
}

export class Firewall {
  constructor(rules: { img: RegExp[]; script: RegExp[], imgAllow: RegExp[] }, cnt: Counters<string>) {
    new Filter(['script', 'ping', 'sub_frame', 'xmlhttprequest'], rules.script, [], cnt);
    new Filter(['image'], rules.img, rules.imgAllow, cnt);
  }
}
