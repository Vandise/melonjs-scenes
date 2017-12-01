import React from 'react';

const DEFAULT_TEXT_SPEED = 40;
const DEFAULT_PUNCT_PAUSE = 250;

export default class extends React.Component {

  constructor(props) {
    super(props);
    this._ismounted = true;
    this.message = props.message;
    this.image = props.image;
    this.charName = props.name;
    this.textSpeed = props.textSpeed || DEFAULT_TEXT_SPEED;

    this.state = {
      renderedText: ""
    };

    this.pauseCharacters = [
      '.', '?', '!', ',', ';'
    ];

    let index = 0;
    let charCounter = 0;
    this.timer = setInterval(() => {
      if (this.state.renderedText.length === this.message.length || !this._ismounted) {
        clearInterval(this.timer);
      } else {
        if (this.pauseCharacters.includes(this.message.charAt(index - 1))) {

          const result = setTimeout(() => { 
            if (this._ismounted) {
              this.setState({
                renderedText: (this.state.renderedText + this.message.charAt(index))
              });
              index++;
            }
          }, DEFAULT_PUNCT_PAUSE);

        } else {
          if (charCounter % 2 == 0 && this.message.charAt(index) != ' ')
          {
            me.audio.play("talk_sans");
          }
          this.setState({
            renderedText: (this.state.renderedText + this.message.charAt(index))
          });
          if ( this.message.charAt(index) != ' ' )
          {
            charCounter++;
          }
          index++;
        }
      }
    }, this.textSpeed);
  }

  componentWillUnmount() {
    this._ismounted = false;
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className='dialog-box'>
        <figure>
          <img src={this.image} />
        </figure>
        <div className='content'>
          <div className='dialog-character'>
            <p>{ this.charName ? this.charName + ' :' : '???? :'}</p>
          </div>
          <div className='dialog-text'>
            <p>{this.state.renderedText}</p>
          </div>
        </div>
      </div>
    );
  }

}