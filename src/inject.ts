const log = (...args: any[]) => console.log("%cTrawler", "color: blue", ...args);

const iframes = document.getElementsByTagName('iframe');

const foundIframes = new Set<HTMLElement>();

function detect(elements: NodeListOf<HTMLElement>) {
  for (let i = 0, block: HTMLElement; block = elements[i]; i++) {
    foundIframes.add(block);
  }
  console.debug('Found iframes:', foundIframes.size)
}

detect(iframes);

setTimeout(() => {
  detect(iframes);
}, 2000);

