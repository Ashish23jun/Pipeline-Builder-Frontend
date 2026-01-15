import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { theme } from './theme';

function App() {
  const styles = {
    app: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      background: theme.colors.background,
      fontFamily: theme.typography.fontFamily,
      overflow: 'hidden',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }
  };

  return (
    <div style={styles.app}>
      <PipelineToolbar />
      <div style={styles.main}>
        <PipelineUI />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;
