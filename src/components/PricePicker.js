import { h, Component } from 'preact';
import NumberDisplay from './NumberDisplay';

export default class PricePicker extends Component {
	
	render(props, state) {
		const {value, setter} = this.props;
		return (
			<div>
        <Picker
          button='-'
          adder={this.handleAdder(setter, value)}
          lowValue={-1}
          highValue={-10}
        />
        <NumberDisplay
          value={value}
          />
        <Picker
          button='+'
          adder={this.handleAdder(setter, value)}
          lowValue={1}
          highValue={10}
        />
			</div>
		);
	}
  
  handleAdder = (setter, value) => {
    return (v) => {
      setter(v + value);
    };
  }
}

class Picker extends Component {
	
	render(props, state) {
		const {button, lowValue, highValue, adder} = this.props;
		return (
      <span
        onClick={this.handleOnClick(adder, lowValue, highValue)}
        style={{
          cursor: 'pointer'
        }}
        > {button} </span>
		);
	}
  handleOnClick = (adder, lowValue, highValue) => {
    return (e) => {
      if (e.shiftKey) {
        adder(highValue);
      }
      else {
        adder(lowValue);
      }
    };
  }
}
