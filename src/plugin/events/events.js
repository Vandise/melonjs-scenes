import dialogEvent from './dialog';
import branchEvent from './branch';
import moveEvent from './move';
import groupEvent from './group';
import concurrentEvent from './concurrent';

export default {
  dialog: dialogEvent,
  branch: branchEvent,
  move:   moveEvent,
  concurrent: concurrentEvent,
  group: groupEvent
};