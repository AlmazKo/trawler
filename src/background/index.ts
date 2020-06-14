import { listen } from '../util/ipc';
import { Firewall } from './Firewall';
import { img_rules } from './rules/img';
import { img_allow_rules } from './rules/img_allow';
import { script_rules } from './rules/script';
import { Counters } from './Counter';

const counter = new Counters<string>();

new Firewall({img: img_rules, script: script_rules, imgAllow: img_allow_rules}, counter);

listen('stat', () => ({total: counter.total}));

