import { h, Component } from 'preact';
import style from './style';
import Buildings from 'Buildings';
import Resources from 'Resources';
import PricePicker from '../PricePicker';
import NumberDisplay from '../NumberDisplay';

export default class Home extends Component {
	constructor() {
		super();
		this.state.resources = new Resources({}, this.forceRender, 20);
		this.state.buildings = new Buildings();
		this.state.counter = 0;
	}
	
	forceRender = () => {
		this.setState({counter: this.state.counter + 1});
	}
	
	renderHeader(resources) {
		return (
			<thead>
				<tr>
					<th>Building</th>
					<th>Cost To Build</th>
					{resources.names}
					<th>Profit</th>
				</tr>
				<tr>
					<th></th>
					<th></th>
					{resources.values}
				</tr>
			</thead>
		);
	}
	renderRows() {
		const buildingsList = this.state.buildings.map((([name,b]) => {
			const resources = b.toRun.map((r) =>
				<td>
					<NumberDisplay
						value={r.amount}
					/>
				</td>
			);
			return (
			  <tr>
					<td>{name}</td>
					<td></td>
					{resources}
					<td>
						<NumberDisplay
							value={b.toRun.sumOfProducts(this.state.resources)}
						/>
					</td>
				</tr>
			);
		}));
		
		return (
			<tbody>
				{buildingsList}
			</tbody>
		);
	}
	render() {
		
		const resources = {
			names: Resources.types().map((t) =>
			  <th>{t}</th>
			),
			values: Resources.types().map((t) =>
			  <th>
					<PricePicker
						value={this.state.resources.get(t)}
						setter={this.state.resources.setter(t)}
					/>
				</th>
			),
		};
		return (
			<div class={style.home}>
				<table>
					{this.renderHeader(resources)}
					{this.renderRows()}
				</table>
			</div>
		);
	}
	
	
}
