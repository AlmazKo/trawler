import { request } from '../util/ipc';

function getElementById(id: string): HTMLElement {
  const value = document.getElementById(id);

  if (!value) {
    alert(`Not found element: '${id}'`);
    throw new Error(`Not found element ${id}`);
  }
  return value;
}

window.onload = () => {
  const current = getElementById('total');
  request('stat').then(stat => {
    current.innerText = '' + stat.total;
  });
};
