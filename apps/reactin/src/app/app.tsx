// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="reactin" />
      <h1>I should've added something otherwhise the build doesn't work</h1>
      <div />
    </>
  );
}

export default App;
