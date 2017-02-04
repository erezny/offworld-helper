import { h, Component } from 'preact';

export default class NumberDisplay extends Component {
	render(props) {
    
    const valueText = props.value ? props.value.toFixed(1).replace('.0','') : '';
    const className = this.getClassName(props.value);
		return (
			<span
        className={className}
      >
				{valueText}
			</span>
		);
	}
  
  getClassName(value) {
    if (value > 0) {
      return 'positive';
    }
    else if (value < 0) {
      return 'negative';
    }
    return 'neutral';
  }
}