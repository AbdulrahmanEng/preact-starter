import { h, render, Component } from 'preact';
import linkState from 'linkstate';

class Input extends Component {
  render({ }, {
    text = ''
  }) {
    return (
      <div style="text-align:center">
        <input value={ text } placeholder="enter text" onInput={ linkState(this, 'text') } />
        <p>{ text }</p>
      </div>
    )
  }
};

render(<Input />, document.body);