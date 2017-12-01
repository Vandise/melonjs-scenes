import SceneManager from './plugin/scene/sceneManager'

//
// ES6 endpoint
//
export default ScenesManager;

//
// global JS endpoint
//
(($) => {

  $.scenePlugin = ScenesManager;

})(window);