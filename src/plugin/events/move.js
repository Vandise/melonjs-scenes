import { PLUGIN_NAME } from '../../settings';

export default ({ direction, velocity, xCoord, yCoord, entity, animation }) => () => {

  const plugin = (me.plugins[PLUGIN_NAME]);
  plugin.clearKeys();

  return new Promise((resolve, reject) => {

    const sprite = plugin.entities[entity];
    // disable collision
    const collisionType = sprite.body.collisionType;
    sprite.body.collisionType = 0;

    sprite.sceneIsAnimating = true;
    sprite.renderable.setCurrentAnimation(animation);

    const movement = setInterval( () => {
      if (xCoord) {
  
        if (sprite.pos.x <= xCoord + 1 && sprite.pos.x >= xCoord - 1) {
          sprite.sceneIsAnimating = false;
          sprite.body.vel.x = 0;
          sprite.body.collisionType = collisionType;
          clearInterval(movement);
          resolve(sprite.pos.x);
        } else {
          sprite.body.vel.x = velocity;
        }
  
      } else {

        if (sprite.pos.y <= yCoord + 1 && sprite.pos.y >= yCoord - 1) {
          sprite.sceneIsAnimating = false;
          sprite.body.vel.y = 0;
          sprite.body.collisionType = collisionType;
          clearInterval(movement);
          resolve(sprite.pos.y);
        } else {
          sprite.body.vel.y = velocity;
        }

      }

    }, 0.5);
  });
};