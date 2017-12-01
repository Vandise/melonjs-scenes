# MelonJS Scenes
A plugin for MelonJS, allowing the scripting of sprites, animations, and dialog. You can also create your own custom event handler.

## How to use this repository
Upon release, all a version of this plugin will be saved in the `dist/` directory. There will be a minified version of the plugin for production use, and an expanded file, containing source-maps and debug information. Utilize whichever source file best suits your needs.

## Using this Plugin
No releases have been distributed yet.

## What comes default with this plugin?
You can write your own functions for your custom animation needs. By default, the current features are supported.

### Movement
Move your sprites in a grid-based fashion (up, down, left, right).

![](https://media.giphy.com/media/3o6fIYjoYJzRCdIXHW/giphy.gif)

### Dialog
Initiate dialog with your sprites and the player. Add some 8 bit voice synth files to give it a little more character. Text speed, sprite images, and soungs are all customizable. The user can also skip text if desired.

![](https://media.giphy.com/media/xT0xelvbZtRJK3nrxu/giphy.gif)


### Concurrent Events
Events can also run concurrently, meaning multiple things can be animated at the same time. Moving multiple sprites, triggering animations, or even dialog while walking.

### Grouped Events
Sometimes we want multiple events happening at the same time (concurrently), but need to structure a set of events in order while other events are executing. We `group` events to get this desired behavior.

### Branching
One aspect of dialog, is to make decisions based on events. Whether it's user input or the position of the sprite; we can jump through our logic with branches.

### Many more features under development
There's not much implemented as of yet. Many more features will come as I have time to add them.

## Adding your own event handlers
Under development.

## Contributing
If there's a feature you would like to see in this plugin, send a pull or issue request on GitHub. Be sure to tag @Vandise in it.

## License
MIT 


