import { h, Component } from 'preact';
import NumberDisplay from './NumberDisplay';

export default class PricePicker extends Component {
	
	render(props, state) {
		const {value, setter} = this.props;
		return (
			<div className='pickerContainer'>
        <Picker
          button='-'
          adder={this.handleAdder(setter, value)}
          lowValue={-1}
          highValue={-10}
          className='pickerLeft'
        />
        <NumberDisplay
          className='pickerCenter'
          value={value}
          />
        <Picker
          button='+'
          adder={this.handleAdder(setter, value)}
          lowValue={1}
          highValue={10}
          className='pickerRight'
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
		const {button, lowValue, highValue, adder, className} = this.props;
		return (
      <div
        onClick={this.handleOnClick(adder, lowValue, highValue)}
        className={className}
        > {button} </div>
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
