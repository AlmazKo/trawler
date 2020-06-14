export interface Actions {
  stat: Stat;
}

export interface Stat {
  total: number;
  current_tab?: number;
  domains?: { [k: string]: number };
}

const RT = chrome.runtime;

export function request<K extends keyof Actions>(action: K): Promise<Actions[K]> {
  console.debug(`request '${action}' ...`);
  return new Promise(resolve => {
    RT.sendMessage(null!, action, {}, response => resolve(response));
  });
}

export function listen<K extends keyof Actions>(action: K, fun: () => Actions[K] | Promise<Actions[K]>) {

  const listener = RT.onMessage.addListener((msgAction, sender, res) => {
    if (msgAction !== action) return;

    console.debug(`Handle request '${action}' ...`);

    const response = fun();
    if (response instanceof Promise) {
      response.then(res);
      return true;
    } else {
      res(response);
    }
  });

  console.debug(`Add handler for '${action}'`);

  return listener;
}
