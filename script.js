const ids = [
{
  id: 'q',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  id: 'w',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  id: 'e',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  id: 'a',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  id: 's',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  id: 'd',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  id: 'z',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  id: 'x',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  id: 'c',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



class RenderButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const element = document.getElementById(id);
    element.play();
    document.getElementById('displayText').innerHTML = displayName(id);
  }

  render() {

    return (
      React.createElement(React.Fragment, null,
      ids.map(x => {
        return (
          React.createElement("div", { className: "drum-button", id: x.id, onClick: () => this.handleClick(x.id.toUpperCase()) },
          React.createElement("span", null,
          x.id.toUpperCase()),

          React.createElement("audio", { id: x.id.toUpperCase(), className: "clip" },
          React.createElement("source", { src: x.src, type: "audio/mp3" }))));



      })));



  }}


function Display(props) {
  return (
    React.createElement("div", { className: "display" },
    React.createElement("span", { id: "displayText" })));


}

class Present extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const element = document.getElementById(e.key.toUpperCase());
    element.play();
    document.getElementById('displayText').innerHTML = displayName(e.key.toUpperCase());
  }

  render() {
    return (
      React.createElement("div", { className: "wrapper", onKeyDown: this.handleKeyDown, tabIndex: "0" },
      React.createElement(Display, null),
      React.createElement(RenderButtons, null)));


  }}


ReactDOM.render(React.createElement(Present, null), document.getElementById('root'));

function displayName(id) {
  switch (id) {
    case 'Q':
      return 'Heater 1';
    case 'W':
      return 'Heater 2';
    case 'E':
      return 'Heater 3';
    case 'A':
      return 'Heater 4';
    case 'S':
      return 'Clap';
    case 'D':
      return 'Open HH';
    case 'Z':
      return 'Kick n\' Hat';
    case 'X':
      return 'Kick';
    case 'C':
      return 'Closed HH';}

}