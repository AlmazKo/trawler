const log = (...args: any[]) => console.log("%cTrawler", "color: blue", ...args);

const iframes = document.getElementsByTagName('iframe');
const anchors = document.querySelectorAll('img[src*=banners]');

function detect(elements: NodeListOf<HTMLElement>) {
    for (let i = 0, block: HTMLElement; block = elements[i]; i++) {
        log(block);
        block.style.border = 'solid red 1px !important';
    }
}

detect(iframes);

setInterval(() => {
    detect(iframes);
    detect(anchors as any);
}, 1000);

