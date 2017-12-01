import { PLUGIN_NAME } from '../../settings';

export default class Scene
{

  constructor(sceneEvents)
  {
    this.sceneEvents = sceneEvents;
    this.sceneState = {
      currentBranch: 'start'
    };
  }

  run()
  {
    const branches = Object.keys(this.sceneEvents);
    const plugin = me.plugins[PLUGIN_NAME];
    let branchIndex = 0;

    const sceneExecutor = (_self) => {
      if ( _self.sceneState.currentBranch != 'end' )
      {
        // cache the current state to see if the user specified a transition
        const cacheBranchState = _self.sceneState.currentBranch;

        // chain and run the events
        let chain = new Promise((r,j) => r());
        for ( let i = 0; i < _self.sceneEvents[_self.sceneState.currentBranch].length; i++ )
        {
          const event = (_self.sceneEvents[_self.sceneState.currentBranch])[i];
          const executer = plugin.eventHandlers[ event['type'] ];
          chain = chain.then( executer(event) );
        }

        // handle branch transition
        Promise.resolve(chain).then(() => {
          // did the user specify a branch transition?
          // if not, jump to the next branch sequence
          branchIndex++;
          if (cacheBranchState === _self.sceneState.currentBranch) {
            _self.sceneState.currentBranch = branches[branchIndex];
          }

          sceneExecutor(_self);
        });
      }
    };

    sceneExecutor(this);
  }

}
