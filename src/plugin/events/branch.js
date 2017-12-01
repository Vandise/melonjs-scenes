import { PLUGIN_NAME } from '../../settings';

export default ({ branch }) => () => {
  return new Promise((resolve, reject) => {

    const plugin = (me.plugins[PLUGIN_NAME]);
    plugin.currentScene.sceneState.currentBranch = branch;
    resolve(branch);

  });
};