import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Offworld Market Analysis</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/Expansive">Expansive</Link>
					<Link href="/Robotic">Robotic</Link>
					<Link href="/Scavenger">Scavenger</Link>
					<Link href="/Scientific">Scientific</Link>
				</nav>
			</header>
		);
	}
}
