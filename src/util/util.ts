import Tab = chrome.tabs.Tab;

export function parseHost(url: string): string {
  let host;

  if (url.indexOf('://') > -1) {
    host = url.split('/')[2];
  }
  else {
    host = url.split('/')[0];
  }

  //find & remove port number
  host = host.split(':')[0];
  //find & remove "?"
  host = host.split('?')[0];

  return host;
}

export function currentTab(): Promise<Tab> {
  return new Promise(resolve => {
    chrome.tabs.query({active: true}, tabs => {
      resolve(tabs[0]);
    });
  });
}