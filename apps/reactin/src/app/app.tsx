// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

function fn() {
	console.log('The build is working perfectly!!');
	alert('Congratz,🔥🚀, this was deployed using cloud build and run!🌮');
}

export function App() {
	return (
		<div className={styles['main']}>
			<h1>I should've added something otherwhise the build doesn't work</h1>
			<button onClick={fn}>Test</button>
		</div>
	);
}

export default App;
