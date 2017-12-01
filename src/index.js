import { PLUGIN_NAME } from './settings';
import SceneManager from './plugin/scene/sceneManager'
import Styles from './styles/main.scss';

//
// ES6 endpoint
//
export default SceneManager;

//
// global JS endpoint
//
(($) => {

  $[PLUGIN_NAME] = SceneManager;

})(window);