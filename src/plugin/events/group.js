import { PLUGIN_NAME } from '../../settings';

export default ({ events }) => () => {
  return new Promise((resolve, reject) => {

    const plugin = (me.plugins[PLUGIN_NAME]);
    const eventHandlers = plugin.eventHandlers;

    let chain = new Promise((r,j) => r());
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const executer = eventHandlers[ event['type'] ];
      chain = chain.then( executer(event) );
    }
    
    return Promise.resolve(chain).then(() => {
      resolve(events);      
    });   

  });
};