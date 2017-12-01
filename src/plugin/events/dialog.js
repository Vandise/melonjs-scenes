import React from 'react';
import ReactDOM from 'react-dom';
import DialogBox from '../components/dialogBox';

import { DIALOG_ELEMENT, CLEAR_DIALOG_KEY, PLUGIN_NAME } from '../../settings';

const el = document.getElementById(DIALOG_ELEMENT);

export default ({ message, image, name, textSpeed }) => () => {

  return new Promise((resolve, reject) => {

    const plugin = (me.plugins[PLUGIN_NAME]);
    plugin.clearKeys();

    const view = <DialogBox message={message} image={image} name={name} textSpeed={textSpeed} />
    ReactDOM.render(view, el);

    const next = setInterval( () => {
      if (plugin.state.keypressed.enter) {
        plugin.clearKeys();
        ReactDOM.unmountComponentAtNode(el);
        clearInterval(next);
        resolve(message);
      }
    }, 100);

  });

};