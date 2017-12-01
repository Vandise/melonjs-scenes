import { PLUGIN_VERSION, PLUGIN_NAME, CLEAR_DIALOG_KEY } from '../../settings';
import Scene from './scene';
import events from '../events/events';
import romeoScene from './testScene';

export default class SceneManager extends me.plugin.Base
{

  constructor()
  {
    super();
    this.pluginName = PLUGIN_NAME;
    this.version    = PLUGIN_VERSION;

    // loaded scenes that can be run
    this.scenes     = {};

    // available entities in the current state
    this.entities   = {};

    // event types that can be utlized
    this.eventHandlers = events;

    // overall state of the entire scene plugin
    this.state      = {
      keypressed: {
        enter: false
      }
    };
 
    this.testScene = romeoScene;
 
    this.currentScene = null;
    
  }

  init()
  {
    (($) => {
      $.document.body.onkeypress = (e) => {
        if (e.charCode == CLEAR_DIALOG_KEY) { this.state.keypressed.enter = true; }
      }
    })(window);
  }


  clearKeys()
  {
    for (let key in this.state.keypressed)
    {
      this.state.keypressed[key] = false;
    }
  }

  clearEntities()
  {
    for (let key in this.entities)
    {
      delete this.entities[key];
    }    
  }

  registerEntity(alias, entity)
  {
    this.entities[alias] = entity;
  }

  registerScene(alias, sceneEvents)
  {
    this.scenes[alias] = new Scene(sceneEvents);
  }

  runScene(sceneName)
  {
    if ( this.scenes[sceneName] == null )
    {
      throw `No scene named ${sceneName} was registered. You can add it with registerScene(alias, sceneEvents)`;
    }

    this.currentScene = (this.scenes[sceneName]);
    this.currentScene.run();
  }

}
