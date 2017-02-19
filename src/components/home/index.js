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
	
	render() {
		return (
			<div class={style.home}>
				<table>
					<Header
						resources={this.state.resources}
					/>
					<TableBody
						buildings={this.state.buildings}
						resources={this.state.resources}
						/>
				</table>
			</div>
		);
	}
	
	
}

class Header extends Component {
	render(props) {
		const resources = {
			names: Resources.types().map((t) =>
				<th>{t}</th>
			),
			values: Resources.types().map((t) =>
				<th>
					<PricePicker
						value={props.resources.get(t)}
						setter={props.resources.setter(t)}
					/>
				</th>
			),
		};
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
}

class TableBody extends Component {
	render(props) {
		const {buildings, resources} = props;
		const buildingsList = [];
		buildings.map((([name,b]) => {
			const toRun = b.toRun.map((r) =>
				<td class={style.toRun}>
					<NumberDisplay
						value={r.amount}
					/>
				</td>
			);
			
			const toBuild = b.toBuild.map((r) =>
				<td class={style.toBuild}>
					<NumberDisplay
						value={r.amount}
					/>
				</td>
			);
			buildingsList.push (
				<tr>
					<td rowspan={2}>{name}</td>
					<td></td>
					{toRun}
					<td class={style.toRun}>
						<NumberDisplay
							value={b.toRun.sumOfProducts(resources)}
							showZero={true}
						/>
					</td>
				</tr>
			);
			buildingsList.push(
				<tr>
					<td class={style.toBuild}>
						<NumberDisplay
							value={b.toBuild.sumOfProducts(resources)}
							showZero={true}
						/>
					</td>
					{toBuild}
					<td>
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
}
