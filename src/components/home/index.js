import { h, Component } from 'preact';
import style from './style';
import Buildings from 'Buildings';
import Resources from 'Resources';

export default class Home extends Component {
	
	renderHeader() {
		const resources = Resources.types().map((t) =>
		  <th>{t}</th>
		);
		return (
			<thead>
				<tr>
					<th>Building</th>
					{resources}
				</tr>
			</thead>
		);
	}
	renderRows() {
		const buildings = Object.entries(Buildings).map((v => {
			const [name, b] = v;
			console.log(name, b);
			const resources = b.toRun.map((r) =>
				<td>{r.amount}</td>
			);
			console.log(resources);
			return (
			  <tr>
					<td>{name}</td>
					{resources}
				</tr>
			);
		}));
		
		return (
			<tbody>
				{buildings}
			</tbody>
		);
	}
	render() {
		return (
			<div class={style.home}>
				<table>
					{this.renderHeader()}
					{this.renderRows()}
				</table>
			</div>
		);
	}
}
