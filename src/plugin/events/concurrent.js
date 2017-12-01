import { PLUGIN_NAME } from '../../settings';

export default ({ events }) => () => {
  return new Promise((resolve, reject) => {

    const plugin = (me.plugins[PLUGIN_NAME]);
    const eventHandlers = plugin.eventHandlers;

    let concurrentEvents = [];
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const executer = eventHandlers[ event['type'] ];
      concurrentEvents.push(executer(event)());
    }

    return Promise.all(concurrentEvents).then((status) => {
      resolve(events);
    });

  });
};