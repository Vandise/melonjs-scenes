export default {
  start: [
  
    // enter romeo
    { type: 'concurrent', events: [
      { type: 'group', events: [
         { type: 'dialog', message: 'Rooooooomeo!', name: 'Benvolio' },
         { type: 'dialog', message: 'Lover Boy!', name: 'Mercutio' } 
      ] },
      { type: 'move', direction: 'up', velocity: -2, yCoord: 264, entity: 'player', animation: 'walk_up' }
    ] },
  
    // after escpaing / moving into the garden
    { type: 'dialog', message: '...', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'He jests at scars that never felt a wound.', image: 'character_face.png', name: 'Romeo' },
  
    // enter juliet
    { type: 'move', direction: 'down', velocity: 2, yCoord: 123, entity: 'npc', animation: 'walk_down' },
    { type: 'move', direction: 'right', velocity: 2, xCoord: 288, entity: 'npc', animation: 'walk_right' },
  
    // romeo spots juliet, hide!
    { type: 'concurrent', events: [
        { type: 'dialog', message: 'But soft! What light through yonder window breaks?', image: 'character_face.png', name: 'Romeo' },
        { type: 'move', direction: 'right', velocity: 2.2, xCoord: 351, entity: 'player', animation: 'walk_right' }
    ] },
  
    // holy s*&% monolog
    { type: 'dialog', message: 'It is the East, and Juliet is the sun!', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'Arise, fair sun, and kill the envious moon, Who is already sick and pale with grief', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'That thou her maid art far more fair than she.', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'Be not her maid, since she is envious.', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'Her vestal livery is but sick and green, And none but fools do wear it.', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'Cast it off.', image: 'character_face.png', name: 'Romeo' },
  
    // get a closer look to see if it's juliet
    { type: 'move', direction: 'right', velocity: 2.2, xCoord: 428, entity: 'player', animation: 'walk_right' },
    { type: 'move', direction: 'up', velocity: -2.2, yCoord: 169, entity: 'player', animation: 'walk_up' },
    { type: 'move', direction: 'left', velocity: -2.2, xCoord: 374, entity: 'player', animation: 'walk_left' },
  
    { type: 'dialog', message: 'It is my lady; O, it is my love! O that she knew she were!', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'She speaks, yet she says nothing. What of that?', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'Her eye discourses; I will answer it.', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'I am too bold; \'tis not to me she speaks.', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'Two of the fairest stars in all the heaven, Having some business, do entreat her eyes To twinkle in their spheres till they return.', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'What if her eyes were there, they in her head? The brightness of her cheek would shame those stars As daylight doth a lamp; ', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'her eyes in heaven Would through the airy region stream so bright That birds would sing and think it were not night.', image: 'character_face.png', name: 'Romeo' },
  
    // move juliet a bit
    { type: 'move', direction: 'left', velocity: -2, xCoord: 225, entity: 'npc', animation: 'walk_left' },
  
    { type: 'dialog', message: 'See how she leans her cheek upon her hand!', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'O that I were a glove upon that hand, That I might touch that cheek!', image: 'character_face.png', name: 'Romeo' },
  
    // wooo juliet speaks... kind-of
    { type: 'dialog', message: 'Ay me!', image: 'juliet.png', name: 'Juliet' },
  
    // romeo obsesses more
    { type: 'move', direction: 'left', velocity: -2, xCoord: 367.7, entity: 'player', animation: 'walk_left' },
    { type: 'dialog', message: 'She speaks.', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'O, speak again, bright angel! for thou art', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'As glorious to this night, being o\'er my head, As is a winged messenger of heaven', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'Unto the white-upturned wond\'ring eyes Of mortals that fall back to gaze on him', image: 'character_face.png', name: 'Romeo' },
    { type: 'dialog', message: 'When he bestrides the lazy-pacing clouds And sails upon the bosom of the air.', image: 'character_face.png', name: 'Romeo' }
  
  ],
  
  end: null

};